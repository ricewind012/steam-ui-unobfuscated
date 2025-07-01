import n, { Cg } from "./34629.js";
import i, {
	useState,
	useEffect,
	createContext,
	useContext,
	useCallback,
} from "./63696.js";
import * as a from "./52451.js";
import { CCallbackList } from "../../actual_src/utils/callbackutils";
class o {
	m_bInitialized = false;
	m_Bus;
	m_bConnected = false;
	m_bIBusDaemonMissing;
	m_BusCallbackHandles;
	m_ConnectCallbacks = new CCallbackList();
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
	async GetKeyValFromName(e) {
		let t = this.m_mapKeyValFromName[e];
		if (t === undefined) {
			t = await IBus.keyval_from_name(e);
			this.m_mapKeyValFromName[e] = t;
		}
		return t;
	}
	ConnectHandler() {
		this.m_bConnected = true;
		this.m_bIBusDaemonMissing = false;
		this.m_ConnectCallbacks.Dispatch(true);
		Promise.all(
			Object.values(w).map((e) =>
				this.m_Bus.get_engines_by_names([e.engineName]).then((t) => ({
					[e.engineName]: t.length != 0,
				})),
			),
		).then((e) => {
			this.m_mapAvailableEngines = Object.assign({}, ...e);
			this.m_AvailableEnginesCallbacks.Dispatch();
		});
	}
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
	IsEngineMissing(e) {
		return this.m_mapAvailableEngines[e] === false;
	}
	GetConnectCallbacks() {
		return this.m_ConnectCallbacks;
	}
	GetAvailableEnginesCallbacks() {
		return this.m_AvailableEnginesCallbacks;
	}
}
function l() {
	const [e, t] = useState(aJ.IsConnected());
	useEffect(() => {
		let e = aJ.GetConnectCallbacks().Register(t);
		return () => e.Unregister();
	}, []);
	return e;
}
Cg([a.oI], o.prototype, "ConnectHandler", null);
Cg([a.oI], o.prototype, "DisconnectHandler", null);
export const E3Context = createContext(null);
export const Y5 = ({ name, children }) => {
	const { inputContext } = ((e) => {
		const t = l();
		const [r, n] = useState();
		useEffect(() => {
			if (t) {
				if (!r) {
					aJ.GetBus().create_input_context(e).then(n);
				}
			} else {
				n(null);
			}
		}, [t, r, e]);
		useEffect(() => {
			if (r) {
				const e = (async () => {
					r.set_capabilities(
						IBus.Capabilite.PREEDIT_TEXT |
							IBus.Capabilite.AUXILIARY_TEXT |
							IBus.Capabilite.SURROUNDING_TEXT |
							IBus.Capabilite.LOOKUP_TABLE |
							IBus.Capabilite.FOCUS |
							IBus.Capabilite.PROPERTY,
					);
					r.set_content_type(IBus.InputPurpose.FREE_FORM, IBus.InputHints.NONE);
					r.focus_in();
				})();
				const t = async () => {
					await e;
					r.focus_out();
				};
				return () => {
					t();
				};
			}
		}, [r]);
		return {
			bConnected: t,
			inputContext: r,
		};
	})(name);
	return (
		<E3Context.Provider value={inputContext}>{children}</E3Context.Provider>
	);
};
function u() {
	return useContext(E3Context);
}
class d {
	strText = "";
	nCursorPos = 0;
	bVisible = false;
}
export function kM() {
	const e = u();
	const [t, r] = useState(() => new d());
	useEffect(() => {
		if (e) {
			const t = Promise.all([
				e.connect("update-preedit-text", (e, t, n) => {
					r({
						strText: e,
						nCursorPos: t,
						bVisible: Boolean(n),
					});
				}),
				e.connect("show-preedit-text", () => {
					r((e) => ({
						...e,
						bVisible: true,
					}));
				}),
				e.connect("hide-preedit-text", () => {
					r((e) => ({
						...e,
						bVisible: false,
					}));
				}),
			]);
			const n = async () => {
				r(new d());
				(await t).map((e) => e.unregister());
			};
			return () => {
				n();
			};
		}
		r(new d());
	}, [e]);
	return t;
}
class p {
	strText = "";
	bVisible = false;
}
export function VX() {
	const e = u();
	const [t, r] = useState(() => new p());
	useEffect(() => {
		if (e) {
			const t = Promise.all([
				e.connect("update-auxiliary-text", (e, t) => {
					r({
						strText: e,
						bVisible: Boolean(t),
					});
				}),
				e.connect("show-auxiliary-text", () => {
					r((e) => ({
						...e,
						bVisible: true,
					}));
				}),
				e.connect("hide-auxiliary-text", () => {
					r((e) => ({
						...e,
						bVisible: false,
					}));
				}),
			]);
			const n = async () => {
				r(new p());
				(await t).map((e) => e.unregister());
			};
			return () => {
				n();
			};
		}
		r(new p());
	}, [e]);
	return t;
}
class h {
	vecCandidates = [];
	nCursorPos = 0;
	nCursorInPage = 0;
	bIsCursorVisible = false;
	nPageSize = 0;
	bVisible = false;
}
export function WF() {
	const e = u();
	const [t, r] = useState(() => new h());
	useEffect(() => {
		if (e) {
			const t = Promise.all([
				e.connect("update-lookup-table", async (e, t) => {
					const [n, i, a, s] = await Promise.all([
						e.get_number_of_candidates(),
						e.get_cursor_pos(),
						e.is_cursor_visible().then(Boolean),
						e.get_page_size(),
					]);
					const o = s ? i % s : 0;
					let l = [];
					for (let t = 0; t < n; ++t) {
						l.push(e.get_candidate(t));
					}
					const c = await Promise.all(l);
					r({
						vecCandidates: c,
						nCursorPos: i,
						nPageSize: s,
						nCursorInPage: o,
						bIsCursorVisible: a,
						bVisible: Boolean(t),
					});
				}),
				e.connect("show-lookup-table", () => {
					r((e) => ({
						...e,
						bVisible: true,
					}));
				}),
				e.connect("hide-lookup-table", () => {
					r((e) => ({
						...e,
						bVisible: false,
					}));
				}),
			]);
			const n = async () => {
				r(new h());
				(await t).map((e) => e.unregister());
			};
			return () => {
				n();
			};
		}
		r(new h());
	}, [e]);
	return t;
}
export function u7(e, t, r) {
	const n = u();
	useEffect(() => {
		if (n) {
			const i = Promise.all([
				n.connect("commit-text", e),
				n.connect("forward-key-event", t),
				n.connect("delete-surrounding-text", r),
			]);
			const a = async () => {
				(await i).map((e) => e.unregister());
			};
			return () => {
				a();
			};
		}
	}, [n, e, t, r]);
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
const w = {
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
export function wt(e) {
	return w[e] !== undefined;
}
function v(e) {
	return (
		wt(e) && (aJ.IsIBusDaemonMissing() || aJ.IsEngineMissing(w[e].engineName))
	);
}
export function E5(e) {
	const t = l();
	const [r, n] = useState(() => v(e));
	const a = useCallback(() => {
		n(v(e));
	}, [e]);
	useEffect(() => {
		let e = aJ.GetAvailableEnginesCallbacks().Register(a);
		return () => e.Unregister();
	}, [a]);
	useEffect(a, [a, t]);
	return r;
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
export function mQ(e) {
	const t = u();
	useEffect(() => {
		if (!t) {
			return;
		}
		const w_e = w[e];
		(async () => {
			if (w_e !== undefined) {
				let n = [];
				for (const t of w_e.vecSettings || []) {
					if (t.type === "gsettings") {
						const [r, i] = t.strRoot.split(":");
						let a;
						a =
							i !== undefined
								? await Gio.Settings.new_with_path(r, i)
								: await Gio.Settings._new(r);
						if (!a) {
							console.log(
								`Unknown gsettings schema "${r}". Keyboard ${e} unlikely to work correctly!`,
							);
							continue;
						}
						const s = await a.list_keys();
						const o = Object.keys(t.mapKeyValues).filter((e) => s.includes(e));
						n.push(...o.map((e) => a.set_value(e, t.mapKeyValues[e])));
					} else if (t.type === "ibus") {
						const e = await aJ.GetBus().get_config();
						n.push(
							...Object.keys(t.mapKeyValues).map((r) =>
								e.set_value(t.strRoot, r, t.mapKeyValues[r]),
							),
						);
					}
				}
				await Promise.all(n);
				await t.set_engine(w_e.engineName);
			} else {
				await t.set_engine("xkb:us::eng");
			}
		})();
		for (const e of w_e?.vecSettings || []) {
			if (!e.type.startsWith("property-") || e.mapKeyValues === undefined) {
				continue;
			}
			const r = async (r) => {
				const [n, i] = await Promise.all([r.get_key(), r.get_label()]);
				const a = e.mapKeyValues[n];
				if (a !== undefined && a !== i) {
					t.property_activate(n, 1);
				}
			};
			const n = async (r) => {
				const [n, i] = await Promise.all([r.get_key(), r.get_state()]);
				const a = e.mapKeyValues[n];
				if (a !== undefined && a !== i) {
					t.property_activate(n, a);
				}
			};
			const i = e.type === "property-toggle" ? r : n;
			const a = async (e) => {
				for (let t = 0; ; ++t) {
					const r = await e.get(t);
					if (r === null) {
						break;
					}
					i(r);
					const n = await r.get_sub_props();
					if (n !== null) {
						a(n);
					}
				}
			};
			const s = Promise.all([
				t.connect("register-properties", a),
				t.connect("update-property", i),
			]);
			const o = async () => {
				(await s).map((e) => e.unregister());
			};
			return () => {
				o();
			};
		}
	}, [t, e]);
}
export const aJ = new o();
