import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

import { bind } from "@actual_src/utils/bind";
import { CCallbackList } from "@actual_src/utils/callbackutils";

class CIBusConnection {
	m_bInitialized = false;
	m_Bus;
	m_bConnected = false;
	m_bIBusDaemonMissing: boolean;
	m_BusCallbackHandles;
	m_ConnectCallbacks = new CCallbackList<boolean>();
	m_AvailableEnginesCallbacks = new CCallbackList();
	m_mapKeyValFromName = {};
	m_mapAvailableEngines = {};

	async Init() {
		if (!this.IsInitialized()) {
			this.m_bInitialized = true;
			if (this.HasIBusBinding()) {
				this.m_Bus = await IBus.bus_new();
				this.m_BusCallbackHandles = await Promise.all([
					this.m_Bus.connect("connected", this.ConnectHandler),
					this.m_Bus.connect("disconnected", this.DisconnectHandler),
				]);
				this.m_Bus
					.is_connected()
					.then((e) => (e ? this.ConnectHandler() : this.DisconnectHandler()));
			}
		}
	}

	async Cleanup() {
		this.m_BusCallbackHandles.map((e) => e.unregister());
		this.m_BusCallbackHandles = undefined;
		this.m_Bus = undefined;
	}

	GetBus() {
		return this.m_Bus;
	}

	async GetKeyValFromName(name) {
		let keyval = this.m_mapKeyValFromName[name];
		if (keyval === undefined) {
			keyval = await IBus.keyval_from_name(name);
			this.m_mapKeyValFromName[name] = keyval;
		}
		return keyval;
	}

	@bind
	ConnectHandler() {
		this.m_bConnected = true;
		this.m_bIBusDaemonMissing = false;
		this.m_ConnectCallbacks.Dispatch(true);
		Promise.all(
			Object.values(k_EngineMap).map((e) =>
				this.m_Bus.get_engines_by_names([e.engineName]).then((t) => ({
					[e.engineName]: t.length != 0,
				})),
			),
		).then((e) => {
			this.m_mapAvailableEngines = Object.assign({}, ...e);
			this.m_AvailableEnginesCallbacks.Dispatch();
		});
	}

	@bind
	DisconnectHandler() {
		if (this.m_bIBusDaemonMissing === undefined) {
			this.m_bIBusDaemonMissing = true;
		}
		this.m_bConnected = false;
		this.m_ConnectCallbacks.Dispatch(false);
	}

	IsConnected() {
		return this.m_bConnected;
	}

	IsInitialized() {
		return this.m_bInitialized;
	}

	HasIBusBinding() {
		return typeof IBus != "undefined";
	}

	IsIBusDaemonMissing() {
		return this.m_bIBusDaemonMissing === true;
	}

	IsEngineMissing(engine) {
		return this.m_mapAvailableEngines[engine] === false;
	}

	GetConnectCallbacks() {
		return this.m_ConnectCallbacks;
	}

	GetAvailableEnginesCallbacks() {
		return this.m_AvailableEnginesCallbacks;
	}
}

function useIsIBusConnected() {
	const [bConnected, setConnected] = useState(IBusConnection.IsConnected());
	useEffect(() => {
		let handle = IBusConnection.GetConnectCallbacks().Register(setConnected);
		return () => handle.Unregister();
	}, []);
	return bConnected;
}

export const IBusInputContext = createContext(null);

export const Y5 = ({
	name,
	children,
}: PropsWithChildren & { name: string }) => {
	const { inputContext } = ((e) => {
		const bConnected = useIsIBusConnected();
		const [inputContext, setInputContext] = useState();
		useEffect(() => {
			if (bConnected) {
				if (!inputContext) {
					IBusConnection.GetBus().create_input_context(e).then(setInputContext);
				}
			} else {
				setInputContext(null);
			}
		}, [bConnected, inputContext, e]);
		useEffect(() => {
			if (inputContext) {
				const e = (async () => {
					inputContext.set_capabilities(
						IBus.Capabilite.PREEDIT_TEXT |
							IBus.Capabilite.AUXILIARY_TEXT |
							IBus.Capabilite.SURROUNDING_TEXT |
							IBus.Capabilite.LOOKUP_TABLE |
							IBus.Capabilite.FOCUS |
							IBus.Capabilite.PROPERTY,
					);
					inputContext.set_content_type(
						IBus.InputPurpose.FREE_FORM,
						IBus.InputHints.NONE,
					);
					inputContext.focus_in();
				})();
				const unregister = async () => {
					await e;
					inputContext.focus_out();
				};
				return () => {
					unregister();
				};
			}
		}, [inputContext]);
		return {
			bConnected,
			inputContext,
		};
	})(name);
	return (
		<IBusInputContext.Provider value={inputContext}>
			{children}
		</IBusInputContext.Provider>
	);
};

function useInputContext() {
	return useContext(IBusInputContext);
}

class PreEditText_t {
	strText = "";
	nCursorPos = 0;
	bVisible = false;
}

export function useIBusPreeditText() {
	const inputContext = useInputContext();
	const [text, setText] = useState(() => new PreEditText_t());
	useEffect(() => {
		if (inputContext) {
			const t = Promise.all([
				inputContext.connect(
					"update-preedit-text",
					(strText, nCursorPos, n) => {
						setText({
							strText,
							nCursorPos,
							bVisible: Boolean(n),
						});
					},
				),
				inputContext.connect("show-preedit-text", () => {
					setText((e) => ({
						...e,
						bVisible: true,
					}));
				}),
				inputContext.connect("hide-preedit-text", () => {
					setText((e) => ({
						...e,
						bVisible: false,
					}));
				}),
			]);
			const unregister = async () => {
				setText(new PreEditText_t());
				(await t).map((e) => e.unregister());
			};
			return () => {
				unregister();
			};
		}
		setText(new PreEditText_t());
	}, [inputContext]);
	return text;
}

class AuxText_t {
	strText = "";
	bVisible = false;
}

export function useIBusAuxText() {
	const inputContext = useInputContext();
	const [text, setText] = useState(() => new AuxText_t());
	useEffect(() => {
		if (inputContext) {
			const t = Promise.all([
				inputContext.connect("update-auxiliary-text", (strText, t) => {
					setText({
						strText,
						bVisible: Boolean(t),
					});
				}),
				inputContext.connect("show-auxiliary-text", () => {
					setText((e) => ({
						...e,
						bVisible: true,
					}));
				}),
				inputContext.connect("hide-auxiliary-text", () => {
					setText((e) => ({
						...e,
						bVisible: false,
					}));
				}),
			]);
			const unregister = async () => {
				setText(new AuxText_t());
				(await t).map((e) => e.unregister());
			};
			return () => {
				unregister();
			};
		}
		setText(new AuxText_t());
	}, [inputContext]);
	return text;
}

class LookupTable_t {
	vecCandidates = [];
	nCursorPos = 0;
	nCursorInPage = 0;
	bIsCursorVisible = false;
	nPageSize = 0;
	bVisible = false;
}

export function useIBusLookupTable() {
	const inputContext = useInputContext();
	const [table, setTable] = useState(() => new LookupTable_t());
	useEffect(() => {
		if (inputContext) {
			const t = Promise.all([
				inputContext.connect("update-lookup-table", async (e, t) => {
					const [nCandidateCount, nCursorPos, bIsCursorVisible, nPageSize] =
						await Promise.all([
							e.get_number_of_candidates(),
							e.get_cursor_pos(),
							e.is_cursor_visible().then(Boolean),
							e.get_page_size(),
						]);
					const nCursorInPage = nPageSize ? nCursorPos % nPageSize : 0;
					let vecCandidatePromises = [];
					for (let i = 0; i < nCandidateCount; ++i) {
						vecCandidatePromises.push(e.get_candidate(i));
					}
					const vecCandidates = await Promise.all(vecCandidatePromises);
					setTable({
						vecCandidates,
						nCursorPos,
						nPageSize,
						nCursorInPage,
						bIsCursorVisible,
						bVisible: Boolean(t),
					});
				}),
				inputContext.connect("show-lookup-table", () => {
					setTable((e) => ({
						...e,
						bVisible: true,
					}));
				}),
				inputContext.connect("hide-lookup-table", () => {
					setTable((e) => ({
						...e,
						bVisible: false,
					}));
				}),
			]);

			const unregister = async () => {
				setTable(new LookupTable_t());
				(await t).map((e) => e.unregister());
			};
			return () => {
				unregister();
			};
		}
		setTable(new LookupTable_t());
	}, [inputContext]);
	return table;
}

export function u7(
	fnCommitTextCallback,
	fnForwardKeyEventCallback,
	fnDeleteSurroundingTextCallback,
) {
	const inputContext = useInputContext();
	useEffect(() => {
		if (inputContext) {
			const registrars = Promise.all([
				inputContext.connect("commit-text", fnCommitTextCallback),
				inputContext.connect("forward-key-event", fnForwardKeyEventCallback),
				inputContext.connect(
					"delete-surrounding-text",
					fnDeleteSurroundingTextCallback,
				),
			]);
			const unregister = async () => {
				(await registrars).map((e) => e.unregister());
			};
			return () => {
				unregister();
			};
		}
	}, [
		inputContext,
		fnCommitTextCallback,
		fnForwardKeyEventCallback,
		fnDeleteSurroundingTextCallback,
	]);
}

const f = {
	type: "ibus",
	strRoot: "engine/pinyin",
	mapKeyValues: {
		InitChinese: true,
		InitSimplifiedChinese: true,
		LookupTablePageSize: 5,
		MinusEqualPage: false,
		CommaPeriodPage: false,
		AutoCommit: true,
	},
};

const b = {
	type: "ibus",
	strRoot: "engine/bopomofo",
	mapKeyValues: {
		InitChinese: true,
		InitSimplifiedChinese: false,
		LookupTablePageSize: 5,
		MinusEqualPage: false,
		CommaPeriodPage: false,
		SelectKeys: 0,
	},
};

const y = {
	type: "gsettings",
	strRoot: "org.freedesktop.ibus.engine.anthy.common",
	mapKeyValues: {
		"shortcut-type": "default",
		"typing-method": 0,
		"show-typing-method": true,
		"input-mode": 0,
		"page-size": 5,
		"conversion-segment-mode": 0,
		"keyboard-layouts": ["us"],
		"show-lut-on-convert": true,
		"behavior-on-select-candidate": 1,
	},
};

const S = {
	type: "gsettings",
	strRoot: "org.freedesktop.ibus.engine.anthy.shortcut",
	mapKeyValues: {
		default: {
			circle_input_mode: ["Ctrl+comma", "Ctrl+less"],
			circle_kana_mode: ["Ctrl+greater"],
			circle_typing_method: ["Alt+Romaji", "Ctrl+slash"],
			circle_dict_method: ["Alt+Henkan"],
			insert_space: ["space"],
			insert_alternate_space: ["Shift+space"],
			backspace: ["BackSpace", "Ctrl+H"],
			delete: ["Delete", "Ctrl+D"],
			commit: ["Return", "KP_Enter", "Ctrl+J", "Ctrl+M"],
			convert: ["space", "KP_Space", "Henkan"],
			predict: ["Tab", "ISO_Left_Tab"],
			cancel: ["Escape", "Ctrl+G"],
			reconvert: ["Shift+Henkan"],
			move_caret_first: ["Ctrl+A", "Home"],
			move_caret_last: ["Ctrl+E", "End"],
			move_caret_forward: ["Right", "Ctrl+F"],
			move_caret_backward: ["Left", "Ctrl+B"],
			select_first_segment: ["Ctrl+A", "Home"],
			select_last_segment: ["Ctrl+E", "End"],
			select_next_segment: ["Right", "Ctrl+F"],
			select_prev_segment: ["Left", "Ctrl+B"],
			shrink_segment: ["Shift+Left", "Ctrl+I"],
			expand_segment: ["Shift+Right", "Ctrl+O"],
			commit_first_segment: ["Shift+Down"],
			commit_selected_segment: ["Ctrl+Down"],
			select_first_candidate: ["Home"],
			select_last_candidate: ["End"],
			select_next_candidate: ["space", "Tab", "Henkan", "Down"],
			select_prev_candidate: ["Up"],
			candidates_page_up: ["Page_Up"],
			candidates_page_down: ["Page_Down"],
			select_candidates_1: ["1"],
			select_candidates_2: ["2"],
			select_candidates_3: ["3"],
			select_candidates_4: ["4"],
			select_candidates_5: ["5"],
			select_candidates_6: ["6"],
			select_candidates_7: ["7"],
			select_candidates_8: ["8"],
			select_candidates_9: ["9"],
			select_candidates_0: ["0"],
			convert_to_char_type_forward: ["Muhenkan"],
			convert_to_hiragana: ["F6"],
			convert_to_katakana: ["F7"],
			convert_to_half: ["F8"],
			convert_to_half_katakana: ["Shift+F8"],
			convert_to_wide_latin: ["F9"],
			convert_to_latin: ["F10"],
			convert_to_hiragana_all: ["Shift+F6"],
			convert_to_katakana_all: ["Shift+F7"],
			convert_to_wide_latin_all: ["Shift+F9"],
			convert_to_latin_all: ["Shift+F10"],
			hiragana_for_latin_with_shift: ["Hiragana_Katakana"],
		},
	},
};

const k_EngineMap: Record<number, object> = {
	2: {
		engineName: "pinyin",
		vecSettings: [f, b],
	},
	3: {
		engineName: "pinyin",
		vecSettings: [
			f,
			b,
			{
				type: "property-toggle",
				mapKeyValues: {
					"mode.simp": "繁",
				},
			},
		],
	},
	31: {
		engineName: "bopomofo",
		vecSettings: [b, f],
	},
	32: {
		engineName: "table:cangjie5",
		vecSettings: [
			{
				type: "gsettings",
				strRoot:
					"org.freedesktop.ibus.engine.table:/org/freedesktop/ibus/engine/table/cangjie5/",
				mapKeyValues: {
					lookuptablepagesize: 8,
				},
			},
		],
	},
	34: {
		engineName: "table:quick5",
		vecSettings: [
			{
				type: "gsettings",
				strRoot:
					"org.freedesktop.ibus.engine.table:/org/freedesktop/ibus/engine/table/quick5/",
				mapKeyValues: {
					lookuptablepagesize: 8,
				},
			},
		],
	},
	12: {
		engineName: "anthy",
		vecSettings: [
			y,
			S,
			{
				type: "property-set",
				mapKeyValues: {
					"TypingMode.Romaji": 1,
				},
			},
		],
	},
	33: {
		engineName: "anthy",
		vecSettings: [
			y,
			{
				type: "gsettings",
				strRoot: "org.freedesktop.ibus.engine.anthy.kana-typing-rule",
				mapKeyValues: {
					method: "us",
				},
			},
			S,
			{
				type: "property-set",
				mapKeyValues: {
					"TypingMode.Kana": 1,
				},
			},
		],
	},
	13: {
		engineName: "hangul",
		vecSettings: [
			{
				type: "gsettings",
				strRoot: "org.freedesktop.ibus.engine.hangul",
				mapKeyValues: {
					"off-keys": "",
					"initial-input-mode": "hangul",
					"disable-latin-mode": true,
					"preedit-mode": "none",
					"word-commit": true,
				},
			},
		],
	},
};

export function IBusEngineExists(eType: number) {
	return k_EngineMap[eType] !== undefined;
}

function v(eType: number) {
	return (
		IBusEngineExists(eType) &&
		(IBusConnection.IsIBusDaemonMissing() ||
			IBusConnection.IsEngineMissing(k_EngineMap[eType].engineName))
	);
}

export function E5(e) {
	const bConnected = useIsIBusConnected();
	const [fn, setFn] = useState(() => v(e));
	const callback = useCallback(() => {
		setFn(v(e));
	}, [e]);
	useEffect(() => {
		let handle =
			IBusConnection.GetAvailableEnginesCallbacks().Register(callback);
		return () => handle.Unregister();
	}, [callback]);
	useEffect(callback, [callback, bConnected]);
	return fn;
}

export function CB(e, t, r) {
	if (!e) {
		return;
	}
	if (r < 0 || r > 9) {
		return;
	}

	const n = ((r + 1) % 10).toString();
	const i = r + 2;
	const a = t == 31 ? IBus.ModifierType.MOD1_MASK : 0;
	e.process_key_event(n.charCodeAt(0), i, a);
}

export function mQ(keyboard) {
	const inputContext = useInputContext();
	useEffect(() => {
		if (!inputContext) {
			return;
		}
		const w_e = k_EngineMap[keyboard];
		(async () => {
			if (w_e !== undefined) {
				let n = [];
				for (const t of w_e.vecSettings || []) {
					if (t.type === "gsettings") {
						const [strSchema, strPath] = t.strRoot.split(":");
						let settings;
						settings =
							strPath !== undefined
								? await Gio.Settings.new_with_path(strSchema, strPath)
								: await Gio.Settings._new(strSchema);
						if (!settings) {
							console.log(
								`Unknown gsettings schema "${strSchema}". Keyboard ${keyboard} unlikely to work correctly!`,
							);
							continue;
						}
						const vecKeys = await settings.list_keys();
						const o = Object.keys(t.mapKeyValues).filter((e) =>
							vecKeys.includes(e),
						);
						n.push(
							...o.map((value) =>
								settings.set_value(value, t.mapKeyValues[value]),
							),
						);
					} else if (t.type === "ibus") {
						const e = await IBusConnection.GetBus().get_config();
						n.push(
							...Object.keys(t.mapKeyValues).map((r) =>
								e.set_value(t.strRoot, r, t.mapKeyValues[r]),
							),
						);
					}
				}
				await Promise.all(n);
				await inputContext.set_engine(w_e.engineName);
			} else {
				await inputContext.set_engine("xkb:us::eng");
			}
		})();
		for (const e of w_e?.vecSettings || []) {
			if (!e.type.startsWith("property-") || e.mapKeyValues === undefined) {
				continue;
			}
			const r = async (r) => {
				const [key, label] = await Promise.all([r.get_key(), r.get_label()]);
				const a = e.mapKeyValues[key];
				if (a !== undefined && a !== label) {
					inputContext.property_activate(key, 1);
				}
			};
			const n = async (r) => {
				const [key, label] = await Promise.all([r.get_key(), r.get_state()]);
				const a = e.mapKeyValues[key];
				if (a !== undefined && a !== label) {
					inputContext.property_activate(key, a);
				}
			};
			const onUpdateProperty = e.type === "property-toggle" ? r : n;
			const onRegisterProps = async (e) => {
				for (let t = 0; ; ++t) {
					const r = await e.get(t);
					if (r === null) {
						break;
					}
					onUpdateProperty(r);
					const n = await r.get_sub_props();
					if (n !== null) {
						onRegisterProps(n);
					}
				}
			};
			const registrars = Promise.all([
				inputContext.connect("register-properties", onRegisterProps),
				inputContext.connect("update-property", onUpdateProperty),
			]);
			const unregister = async () => {
				(await registrars).map((e) => e.unregister());
			};
			return () => {
				unregister();
			};
		}
	}, [inputContext, keyboard]);
}
export const IBusConnection = new CIBusConnection();
