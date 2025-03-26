import * as n from /*webcrack:missing*/ "./63696.js";
import * as i from /*webcrack:missing*/ "./90095.js";
import * as a from "./37823.js";
import * as s from "./2053.js";
var o = s;
import * as l from "./64608.js";
import * as c from /*webcrack:missing*/ "./50376.js";
import * as m from "./35488.js";
import {
	LocalizeInlineReactWithFallback,
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import * as d from "./57472.js";
import * as A from "./34792.js";
import * as p from /*webcrack:missing*/ "./72476.js";
import * as g from "./27756.js";
import * as h from /*webcrack:missing*/ "./11131.js";
import * as C from "./34428.js";
import * as _ from /*webcrack:missing*/ "./69164.js";
import * as f from "./67429.js";
import * as b from "./96593.js";
import * as y from "./36934.js";
import * as S from /*webcrack:missing*/ "./44846.js";
import * as w from /*webcrack:missing*/ "./90765.js";
import * as B from "./52808.js";
import * as v from "./60291.js";
import * as I from "./75961.js";
import * as E from "./44926.js";
import * as M from /*webcrack:missing*/ "./58663.js";
import * as T from /*webcrack:missing*/ "./48307.js";
const R = M.Message;
class k extends R {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.sessions) {
			T.Sg(k.M());
		}
		R.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				sessions: {
					n: 1,
					c: D,
					r: true,
					q: true,
				},
			},
		};
		return k.sm_m;
	}
	static MBF() {
		k.sm_mbf ||= T.w0(k.M());
		return k.sm_mbf;
	}
	toObject(e = false) {
		return k.toObject(e, this);
	}
	static toObject(e, t) {
		return T.BT(k.M(), e, t);
	}
	static fromObject(e) {
		return T.Uq(k.M(), e);
	}
	static deserializeBinary(e) {
		let t = new M.BinaryReader(e);
		let r = new k();
		return k.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return T.zj(k.MBF(), e, t);
	}
	serializeBinary() {
		var e = new M.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		T.i0(k.M(), e, t);
	}
	serializeBase64String() {
		var e = new M.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_AudioSessionsChanged_Notification";
	}
}
class D extends R {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.id) {
			T.Sg(D.M());
		}
		R.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				id: {
					n: 1,
					br: T.qM.readString,
					bw: T.gp.writeString,
				},
				name: {
					n: 2,
					br: T.qM.readString,
					bw: T.gp.writeString,
				},
				is_system: {
					n: 3,
					br: T.qM.readBool,
					bw: T.gp.writeBool,
				},
				is_muted: {
					n: 4,
					br: T.qM.readBool,
					bw: T.gp.writeBool,
				},
				is_active: {
					n: 5,
					br: T.qM.readBool,
					bw: T.gp.writeBool,
				},
				is_captured: {
					n: 6,
					br: T.qM.readBool,
					bw: T.gp.writeBool,
				},
				recent_peak: {
					n: 7,
					br: T.qM.readFloat,
					bw: T.gp.writeFloat,
				},
				is_game: {
					n: 8,
					br: T.qM.readBool,
					bw: T.gp.writeBool,
				},
				is_steam: {
					n: 9,
					br: T.qM.readBool,
					bw: T.gp.writeBool,
				},
				is_saved: {
					n: 10,
					br: T.qM.readBool,
					bw: T.gp.writeBool,
				},
			},
		};
		return D.sm_m;
	}
	static MBF() {
		D.sm_mbf ||= T.w0(D.M());
		return D.sm_mbf;
	}
	toObject(e = false) {
		return D.toObject(e, this);
	}
	static toObject(e, t) {
		return T.BT(D.M(), e, t);
	}
	static fromObject(e) {
		return T.Uq(D.M(), e);
	}
	static deserializeBinary(e) {
		let t = new M.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return T.zj(D.MBF(), e, t);
	}
	serializeBinary() {
		var e = new M.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		T.i0(D.M(), e, t);
	}
	serializeBase64String() {
		var e = new M.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_AudioSessionsChanged_Notification_Session";
	}
}
import * as N from "./18057.js";
import * as F from "./91720.js";
import * as G from "./92374.js";
import * as O from /*webcrack:missing*/ "./90242.js";
import * as P from /*webcrack:missing*/ "./4690.js";
import * as L from "./85438.js";
import * as z from "./37086.js";
import * as x from "./13897.js";
import * as U from "./13277.js";
import * as W from "./84056.js";
import * as V from "./3475.js";
import * as H from "./22091.js";
import * as j from "./61294.js";
import * as q from "./41480.js";
import * as Q from /*webcrack:missing*/ "./49519.js";
import * as Z from /*webcrack:missing*/ "./52451.js";
import * as Y from "./57774.js";
import * as K from /*webcrack:missing*/ "./46382.js";
import * as X from /*webcrack:missing*/ "./736.js";
import * as J from "./69767.js";
import * as $ from "./2306.js";
import * as ee from "./96670.js";
import * as te from /*webcrack:missing*/ "./98995.js";
import * as re from "./26328.js";
import * as ne from "./42010.js";
import * as ie from "./78768.js";
const ae = [
	["preset_ultra", "Ultra"],
	["preset_default", "High"],
	["preset_medium", "Medium"],
	["preset_low", "Low"],
];
function se(e) {
	let t = ae.find((t) => t[0] == e);
	t ||= ae.find((e) => e[0] == "preset_default");
	return LocalizeInlineReactWithFallback(
		`#Settings_GameRecording_BitRate_${t[1]}_Short`,
		n.createElement("span", {
			className: ie.Muted,
		}),
	);
}
function oe(e) {
	return (t) => {
		if (t.key == "Escape") {
			t.stopPropagation();
			e();
		}
	};
}
function le(e) {
	const [t, r] = (0, n.useState)(false);
	const i = (0, n.useCallback)(() => r(true), [r]);
	const a = (0, n.useCallback)(() => r(false), [r]);
	const [s, o] = (0, A.VI)("gamerecording_video_bitrate");
	let l = oe(a);
	let { visible: c } = e;
	if (!c) {
		return null;
	}
	let m = se(s);
	return n.createElement(
		"div",
		{
			onKeyDown: l,
		},
		n.createElement(
			z.oN,
			{
				feature: 0,
				label: (0, Localize)("#Settings_GameRecording_RecordingQuality"),
				onClick: i,
				noFocusRing: true,
			},
			m,
		),
		n.createElement(
			q.mt,
			{
				active: t,
				onDismiss: a,
			},
			n.createElement(ue, {
				bitRate: s,
				setBitrate: o,
				fnClose: a,
			}),
		),
	);
}
function ce(e) {
	const { bitRate: t, setBitrate: r } = e;
	const [i, s] = (0, n.useState)(false);
	const o = (0, n.useCallback)(() => s(true), [s]);
	const c = (0, n.useCallback)(() => s(false), [s]);
	let m = oe(c);
	return n.createElement(
		"div",
		{
			onKeyDown: m,
			className: (0, w.A)(a.BackgroundSetting, ie.BitrateSetting),
		},
		n.createElement(
			"div",
			{
				className: a.Header,
			},
			(0, Localize)("#Settings_GameRecording_Quality"),
		),
		n.createElement(
			l.Ws,
			{
				className: ie.BitrateButton,
				onClick: o,
				focusable: true,
				opened: false,
				noFocusRing: true,
			},
			n.createElement("div", null, se(t)),
		),
		n.createElement(
			q.mt,
			{
				active: i,
				onDismiss: c,
			},
			n.createElement(ue, {
				bitRate: t,
				setBitrate: r,
				fnClose: c,
			}),
		),
	);
}
function me(e) {
	const { tokenPostfix: t } = e;
	return n.createElement(
		"div",
		{
			className: ie.BitrateOption,
		},
		LocalizeInlineReactWithFallback(
			`#Settings_GameRecording_BitRate_${t}`,
			n.createElement("span", {
				className: ie.Emphasis,
			}),
		),
	);
}
function ue(e) {
	const { bitRate: t, setBitrate: r, fnClose: i } = e;
	const [s, o] = (0, n.useState)(t);
	let c = ae.map(([e, t]) => ({
		label: n.createElement(me, {
			tokenPostfix: t,
		}),
		data: e,
	}));
	let m = (0, J.mg)(s);
	m ||= (0, J.mg)("default");
	return n.createElement(
		"div",
		{
			className: (0, w.A)(a.GameRecordingModal),
		},
		n.createElement(
			"h1",
			null,
			(0, Localize)("#Settings_GameRecording_Quality"),
		),
		n.createElement(
			"div",
			{
				className: ie.DropDownRow,
			},
			n.createElement(l.ZU, {
				rgOptions: c,
				onChange: (e) => o(e.data),
				selectedOption: t,
			}),
		),
		n.createElement(
			"div",
			{
				className: ie.AutoExplainer,
			},
			(0, Localize)("#Settings_GameRecording_BitRate_Modal_Auto_Explainer"),
		),
		n.createElement(
			"table",
			{
				className: ie.BitRateTable,
			},
			n.createElement(
				"thead",
				null,
				n.createElement(
					"tr",
					null,
					n.createElement(
						"th",
						null,
						(0, Localize)("#Settings_GameRecording_BitRateTable_Resolution"),
					),
					n.createElement(
						"th",
						null,
						(0, Localize)("#Settings_GameRecording_BitRateTable_BitRate"),
					),
				),
			),
			n.createElement(
				"tbody",
				null,
				n.createElement(de, {
					label: "4K",
					bitRate: m.m_nKbps2160p,
				}),
				n.createElement(de, {
					label: "1440p",
					bitRate: m.m_nKbps1440p,
				}),
				n.createElement(de, {
					label: "1080p",
					bitRate: m.m_nKbps1080p,
				}),
				n.createElement(de, {
					label: "720p",
					bitRate: m.m_nKbps800p,
				}),
			),
		),
		n.createElement(
			_.Z,
			{
				className: a.ModalButtonRow,
				"flow-children": "row",
			},
			n.createElement(
				l.$n,
				{
					onClick: () => {
						r(s);
						i();
					},
				},
				(0, Localize)("#Button_Confirm"),
			),
			n.createElement(
				l.$n,
				{
					onClick: i,
				},
				(0, Localize)("#Button_Cancel"),
			),
		),
	);
}
function de(e) {
	let { label: t, bitRate: r } = e;
	let i = (0, C.dm)(r * 1000, {
		bUseBinary1K: false,
		bValueIsRate: true,
		bValueIsInBytes: false,
	});
	return n.createElement(
		"tr",
		null,
		n.createElement("td", null, t),
		n.createElement("td", null, i),
	);
}
import * as Ae from "./12774.js";
import * as pe from "./94790.js";
const ge = 5;
export function BGameRecordingFeatureEnabled() {
	return A.rV.settings?.bGameRecordingFeatureEnabled;
}
export function useBGameRecordingEnabledForGame(e) {
	return (0, B.Mm)(new f.VS(e)).bEnabled;
}
export default (function (e) {
	const [t] = (0, A.VI)("g_background_mode");
	const r = (0, p.Qn)();
	const i = (0, F.r6)();
	const s = (0, n.useCallback)(() => {
		if (i) {
			(0, F.e6)();
		}
	}, [i]);
	const o = (0, Z._g)(5000);
	const { introStateQuery: c, markIntroSeen: m, reset: u } = (0, L.O)();
	const d = c.data && !c.data.rtSeen && (!r || false);
	(0, Y.zB)();
	(0, K.rX)();
	const g = t == 1;
	const h = t != 0;
	if (BGameRecordingFeatureEnabled()) {
		return n.createElement(
			z.sh,
			{
				disableFade: d,
			},
			n.createElement(
				l.G5,
				null,
				n.createElement(
					_.Z,
					{
						onFocusCapture: () => o(s),
						navEntryPreferPosition: P.iU.PREFERRED_CHILD,
					},
					n.createElement(re.K, null),
					n.createElement(be, null),
					n.createElement(
						_.Z,
						{
							preferredFocus: true,
						},
						n.createElement(we, null),
					),
					n.createElement(ot, {
						visible: g,
					}),
				),
			),
			n.createElement(Fe, {
				mode: t,
			}),
			n.createElement(Le, {
				mode: t,
			}),
			n.createElement(ct, {
				visible: h && !r,
			}),
			n.createElement(mt, {
				visible: h,
				mode: t,
			}),
			n.createElement(et, {
				visible: h,
			}),
			d &&
				n.createElement(
					"div",
					{
						className: a.IntroContainer,
					},
					n.createElement(L.m, {
						onRequestClose: m,
					}),
				),
			false,
		);
	} else {
		return null;
	}
});
export function GameRecordingSettingsHeader(e) {
	const t = (0, N.Qt)();
	const r = n.useCallback(() => {
		t(p.TS.STORE_BASE_URL + "fwlink?id=gamerecordingintro");
	}, [t]);
	return n.createElement(
		"div",
		{
			className: a.HeaderContent,
		},
		n.createElement(
			"span",
			{
				className: a.NewItemBug,
			},
			(0, Localize)("#NewItemBug"),
		),
		n.createElement(
			l.Y9,
			{
				className: a.Header,
			},
			(0, Localize)("#Settings_Page_GameRecording"),
		),
		n.createElement(
			"span",
			{
				className: a.LinkContainer,
			},
			n.createElement(
				z.Oy,
				{
					href: "#",
					onClick: r,
					className: a.Link,
				},
				(0, Localize)("#GameRecording_Settings_LearnMore"),
			),
		),
	);
}
function be() {
	if ((0, F.r6)()) {
		return n.createElement(ne.y, {
			type: "error",
			heading: (0, Localize)("#Settings_GameRecording_LowDiskSpace_Header"),
			body: (0, Localize)("#Settings_GameRecording_LowDiskSpace_Description"),
		});
	} else {
		return null;
	}
}
const ye = n.createContext({
	eCurrentValue: 0,
	fnSetValue: () => {},
});
export function ForegroundRecordingShortcut(e) {
	const { fallbackTextToken: t } = e;
	const r = (0, p.Qn)();
	const [i] = useToggleForegroundRecordingShortcut();
	if (r) {
		return n.createElement(j.Lr, {
			binding: {
				type: W.N.k_EControllerBindingType_ControllerAction,
				controller_action: {
					action: 45,
				},
			},
			fallbackTextToken: t,
		});
	} else if (i?.display_name && i?.key_code) {
		return n.createElement(
			"span",
			{
				style: {
					fontWeight: 800,
				},
			},
			i?.display_name,
		);
	} else {
		return (0, Localize)(t);
	}
}
function we(e) {
	const [t, r] = (0, A.VI)("g_background_mode");
	const [i] = (0, A.VI)("g_background_max_keep");
	const s = Ye(i);
	const o = n.createElement(ForegroundRecordingShortcut, {
		fallbackTextToken:
			"#Settings_GameRecording_ModeDescription_Manual_Fallback",
	});
	const l = n.createElement(
		"p",
		null,
		LocalizeReact("#Settings_GameRecording_ModeDescription_Manual", o),
	);
	const c = LocalizeInlineReactWithFallback(
		(0, Localize)("#Settings_GameRecording_ModeDescription_Always", s),
		n.createElement("p", null),
		n.createElement("p", null),
		n.createElement("p", null),
		n.createElement("b", null),
	);
	return n.createElement(
		"div",
		{
			className: a.ModeDescriptionText,
		},
		n.createElement(
			z.Pq,
			null,
			(0, Localize)("#Settings_GameRecording_RecordingMode_Header2"),
		),
		n.createElement(
			ye.Provider,
			{
				value: {
					eCurrentValue: t,
					fnSetValue: r,
				},
			},
			n.createElement(
				_.Z,
				{
					className: a.RecordingMode,
				},
				n.createElement(Be, {
					header: (0, Localize)("#Settings_GameRecording_RecordingMode_Never"),
					description: (0, Localize)(
						"#Settings_GameRecording_ModeDescription_Never",
					),
					value: 0,
				}),
				n.createElement(Be, {
					header: (0, Localize)("#Settings_GameRecording_RecordingMode_Always"),
					description: c,
					value: 1,
				}),
				n.createElement(Be, {
					header: (0, Localize)("#Settings_GameRecording_RecordingMode_Manual"),
					description: l,
					value: 2,
				}),
			),
		),
	);
}
function Be(e) {
	let { header: t, description: r, value: i } = e;
	let { eCurrentValue: s, fnSetValue: o } = (0, n.useContext)(ye);
	let l = i == s;
	return n.createElement(
		O.ml,
		{
			className: (0, w.A)(a.RecordingModeOption, l && a.Active),
			onClick: () => o(i),
		},
		n.createElement("div", {
			className: (0, w.A)(a.Pip, l && a.ActivePip),
		}),
		n.createElement(
			"div",
			{
				className: a.Content,
			},
			n.createElement(
				"div",
				{
					className: a.Header,
				},
				t,
			),
			n.createElement(
				"div",
				{
					className: a.Body,
				},
				r,
			),
		),
	);
}
function ve(e) {
	const { appID: t } = e;
	const r = (0, y.Xe)(t);
	const i = r.name;
	const s = r.icon_url;
	return n.createElement(
		"div",
		{
			className: a.GameIconAndName,
		},
		n.createElement("img", {
			src: s,
		}),
		n.createElement("span", null, i),
	);
}
function Ie(e) {
	const { gameID: t } = e;
	if (t.GetType() == S.Rh.k_EGameIDTypeApp) {
		return n.createElement(ve, {
			appID: t.GetAppID(),
		});
	} else {
		return n.createElement(
			"div",
			{
				className: a.GameIconAndName,
			},
			n.createElement(c.Aj0, null),
			n.createElement("span", null, t.ConvertTo64BitString(), "/"),
		);
	}
}
export function IconTrashCan(e) {
	return n.createElement(
		"svg",
		{
			className: e.className,
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
		},
		n.createElement("path", {
			d: "M4.66675 9.33325H19.3334L18.0001 21.3333H6.00008L4.66675 9.33325ZM16.0001 3.99992L14.6667 1.33325H9.33342L8.00008 3.99992H2.66675V6.66659H21.3334V3.99992H16.0001Z",
			fill: "currentColor",
		}),
	);
}
function Me(e) {
	const t = (0, B.$k)(e.gameID);
	return n.createElement(
		te.he,
		{
			direction: "left",
			toolTipContent: (0, Localize)("#Button_Remove"),
		},
		n.createElement(
			_.Z,
			{
				focusable: true,
				className: a.TrashButton,
				onActivate: () => {
					t.mutate();
				},
			},
			n.createElement(IconTrashCan, {
				className: a.Clickable,
			}),
		),
	);
}
function Te(e) {
	const t = e.toFixed(1);
	const r = t.indexOf(".0");
	if (r != -1) {
		return t.slice(0, r);
	} else {
		return t;
	}
}
function Re(e) {
	let t = [10, 20, 30, 45, 60, 120, 300];
	if (!t.includes(e)) {
		t.push(e);
		t.sort();
	}
	return [
		...t.map((e) => {
			return {
				data: (t = e),
				label: (0, Localize)(
					"#Settings_GameRecording_InstantClipDropdown_Option",
					Te(t),
				),
			};
			var t;
		}),
	];
}
function ke(e) {
	const [t] = (0, A.VI)("gamerecording_ic_seconds");
	const r = n.useMemo(() => Re(t), [t]);
	return n.createElement(I.X, {
		label: (0, Localize)("#Settings_GameRecording_InstantClipDropdown_Label"),
		setting: "gamerecording_ic_seconds",
		rgOptions: r,
	});
}
function De(e) {
	const [t, r] = (0, A.VI)("gamerecording_ic_seconds");
	const [i, s] = n.useState(undefined);
	const o = () => {
		let e = i !== undefined ? i : Te(t);
		let n = parseFloat(e);
		if (e.length == 0 || isNaN(n)) {
			n = 10;
		}
		n = Math.max(n, 0);
		n = Math.min(n, 9999);
		let a = Te(n);
		if (e != a) {
			s(a);
		}
		r(n);
	};
	const c = i !== undefined ? i : Te(t);
	const m = n.createElement(l.pd, {
		className: a.InstantClipDurationInput,
		value: c,
		onChange: (e) => {
			let t = e.target.value.trim();
			if (t.length > 0) {
				if (!/^[0-9\.]+$/.test(t)) {
					return;
				}
				const e = parseFloat(t);
				if (isNaN(e) || e <= 0 || e > 1000000) {
					return;
				}
			}
			s(t);
		},
		onBlur: o,
		onKeyDown: (e) => {
			if (e.key === "Enter") {
				o();
			}
		},
		maxLength: 10,
	});
	return n.createElement(
		"div",
		{
			className: a.InstantClipDurationRow,
		},
		LocalizeInlineReactWithFallback("#Settings_GameRecording_InstantClip", m),
	);
}
function Ne(e) {
	const [t] = (0, A.VI)("gamerecording_ic_seconds");
	const [r, i] = (0, A.VI)("gamerecording_hotkey_ic");
	return n.createElement(U.j, {
		className: a.ShortcutHotkey,
		feature: V.uX,
		label: n.createElement(De, null),
		currentKey: r,
		onSetKey: i,
		strTitle: (0, Localize)("#Settings_Hotkey_TakeInstantClip", Te(t)),
		"flow-children": "row",
	});
}
function Fe(e) {
	const { mode: t } = e;
	const [r, i] = (0, A.VI)("g_background_mk");
	const s = p.TS.IN_GAMESCOPE;
	const o = !s;
	const c = !s && t == 1;
	const m = s && t == 1;
	const [d, g] = (0, A.VI)("screenshot_key");
	if (t == 0) {
		return null;
	} else {
		return n.createElement(
			l.G5,
			null,
			n.createElement(
				l.tX,
				null,
				(0, Localize)("#Settings_GameRecording_Shortcut_Title"),
			),
			o &&
				n.createElement(Ge, {
					mode: t,
				}),
			!s &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(U.j, {
						className: a.ShortcutHotkey,
						feature: V.uX,
						label: (0, Localize)("#Settings_GameRecording_AddMarkerKey"),
						currentKey: r,
						onSetKey: i,
						strTitle: (0, Localize)("#Settings_GameRecording_Hotkey_AddMarker"),
					}),
					n.createElement(U.j, {
						className: a.ShortcutHotkey,
						feature: V.uX,
						label: (0, Localize)("#Settings_InGame_ScreenshotShortcut"),
						currentKey: d,
						onSetKey: g,
						strTitle: (0, Localize)("#Settings_Hotkey_TakeScreenshot"),
					}),
					c && n.createElement(Ne, null),
				),
			n.createElement(lt, {
				mode: t,
			}),
			m && n.createElement(ke, null),
		);
	}
}
function Ge(e) {
	const [t, r] = useToggleForegroundRecordingShortcut();
	const i =
		e.mode == 1
			? "#Settings_GameRecording_ToggleRecording_Clip"
			: "#Settings_GameRecording_ToggleRecording";
	return n.createElement(U.j, {
		className: a.ShortcutHotkey,
		feature: V.uX,
		label: (0, Localize)(i),
		currentKey: t,
		onSetKey: r,
		strTitle: (0, Localize)("#Settings_GameRecording_Hotkey_ToggleRecording"),
	});
}
export function useToggleForegroundRecordingShortcut() {
	return (0, A.VI)("g_background_tg");
}
function Pe(e) {
	const {
		gameID: t,
		bEnabled: r,
		iconAndName: i,
		settingValue: s,
		setSettingValue: o,
		bitRate: l,
		setBitrate: m,
		bShowGameName: u,
	} = e;
	const d = !!t;
	const A = (0, J.mg)(l);
	const p = s == "infinite" || !A;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			_.Z,
			{
				className: (0, w.A)(
					a.BackgroundSettingRow,
					a.BackgroundRecSettingsPadding,
				),
				"flow-children": "row-reverse",
				navEntryPreferPosition: P.iU.LAST,
			},
			u &&
				n.createElement(
					"div",
					{
						className: a.BackgroundSettingGameNameRow,
					},
					i,
					d &&
						n.createElement(Me, {
							gameID: e.gameID,
						}),
				),
			n.createElement(
				_.Z,
				{
					className: a.BackgroundSettingSecondRow,
					"flow-children": "row",
				},
				n.createElement(Ze, {
					gameID: t,
					bEnabled: r,
					settingValue: s,
					setSettingValue: o,
				}),
				r &&
					n.createElement(
						n.Fragment,
						null,
						n.createElement(
							"div",
							{
								className: (0, w.A)(a.BackgroundSettingOperator, a.Multiply),
							},
							n.createElement(c.sED, {
								color: "#3D4450",
							}),
						),
						n.createElement(ce, {
							bitRate: l,
							setBitrate: m,
						}),
						n.createElement(
							"div",
							{
								className: (0, w.A)(
									a.BackgroundSettingOperator,
									p ? a.Hidden : "",
								),
							},
							"=",
						),
						n.createElement($e, {
							maxKeepSetting: s,
							preset: A,
							bInvalid: false,
						}),
					),
			),
		),
	);
}
function Le(e) {
	const t = e.mode;
	const { isError: r, isLoading: i, rgGameID: a } = (0, B.OL)();
	if (t != 1 || r || i) {
		return null;
	} else {
		return n.createElement(
			l.G5,
			null,
			n.createElement(
				l.tX,
				null,
				(0, Localize)("#Settings_GameRecording_PerGameSettings_Title"),
			),
			n.createElement(ze, {
				rgGames: a,
			}),
			n.createElement(We, {
				cGamesWithCustomSettings: a.length,
			}),
			n.createElement(Ve, null),
		);
	}
}
function ze(e) {
	return n.createElement(
		n.Fragment,
		null,
		e.rgGames.map((e) =>
			n.createElement(PerGameRecordingSettings, {
				key: e.ConvertTo64BitString(),
				gameID: e,
				bShowGameName: true,
			}),
		),
	);
}
export function PerGameRecordingSettings(e) {
	const t = e.gameID;
	const r = (0, B.Mm)(t);
	const i = (0, B.lE)();
	const a = r.strBitRate;
	let s = r.cMinutes;
	if (s != "infinite") {
		s = Math.max(s, ge);
	}
	return n.createElement(Pe, {
		gameID: e.gameID,
		bEnabled: r.bEnabled,
		iconAndName: n.createElement(Ie, {
			gameID: e.gameID,
		}),
		settingValue: s,
		setSettingValue: (e) => {
			if (e == "infinite") {
				i.mutate({
					gameID: t,
					infinite: true,
					enabled: true,
				});
			} else {
				i.mutate(
					{
						gameID: t,
						minutes: e,
						enabled: true,
					},
					{
						onSuccess: () => {
							E.xM.CleanupBackgroundRecordings({});
						},
					},
				);
			}
		},
		bitRate: a,
		setBitrate: (e) =>
			i.mutate({
				gameID: t,
				bitrate: e,
			}),
		bShowGameName: e.bShowGameName,
	});
}
function Ue(e) {
	const t = e.cGamesWithCustomSettings
		? (0, Localize)("#Settings_GameRecording_PerGameSettings_OtherGames")
		: (0, Localize)("#Settings_GameRecording_PerGameSettings_AllGames");
	return n.createElement(
		"div",
		{
			className: a.GameIconAndName,
		},
		n.createElement(c.Qte, null),
		n.createElement("span", null, t),
	);
}
function We(e) {
	const [t, r] = (0, A.VI)("g_background_max_keep");
	const [i, a] = (0, A.VI)("gamerecording_video_bitrate");
	let s = Ye(t);
	if (s == "infinite") {
		s = B.jY;
	}
	return n.createElement(Pe, {
		gameID: undefined,
		bEnabled: true,
		iconAndName: n.createElement(Ue, {
			cGamesWithCustomSettings: e.cGamesWithCustomSettings,
		}),
		settingValue: s,
		setSettingValue: (e) => {
			if (e != "infinite") {
				r(`${e}min`);
			}
		},
		bitRate: i,
		setBitrate: a,
		bShowGameName: true,
	});
}
function Ve(e) {
	const { isLoading: t, isError: r, rgGameID: i } = (0, B.OL)();
	const s = i.map((e) => e.ConvertTo64BitString());
	const o = (0, B.lE)();
	const c = (0, n.useMemo)(() => {
		let e = b.tw.allApps.slice();
		e.sort(
			(e, t) =>
				t.GetLastTimePlayed() - e.GetLastTimePlayed() ??
				t.display_name.localeCompare(e.display_name),
		);
		return e.map((e) => ({
			gameID: new f.VS(e.GetGameID()),
			strName: e.display_name,
		}));
	}, []);
	const { ref: m, show: d } = (0, v.K3)({
		value: {
			gameID: new f.VS("0"),
			strName: (0, Localize)(
				"#Settings_GameRecording_PerGameSettings_AddGame_Button",
			),
		},
		options: c,
		renderLabel: (e) => e.strName,
		onChange: (e) => {
			o.mutate({
				gameID: e.gameID,
				enabled: true,
				minutes: B.jY,
				bitrate: B.ov,
			});
		},
		searchFilter: (e, t) =>
			e.filter(
				(e) =>
					e.strName.toLocaleLowerCase().includes(t.toLocaleLowerCase()) &&
					!s.includes(e.gameID.ConvertTo64BitString()),
			),
	});
	if (t || r) {
		return null;
	} else {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(
				_.Z,
				{
					className: (0, w.A)(
						a.BackgroundSettingRow,
						a.AddPerGameRow,
						a.PerGameLastRow,
					),
				},
				n.createElement(
					"span",
					null,
					(0, Localize)(
						"#Settings_GameRecording_PerGameSettings_AddGame_Title",
					),
				),
				n.createElement(
					"div",
					null,
					n.createElement(
						l.Ws,
						{
							onClick: d,
							ref: m,
							opened: false,
							focusable: true,
							className: a.AddGameButton,
							arrowClassName: a.AddGameButtonArrow,
							noFocusRing: true,
						},
						(0, Localize)(
							"#Settings_GameRecording_PerGameSettings_AddGame_Button",
						),
					),
				),
			),
		);
	}
}
function He(e) {
	const { setValue: t, fnConfirm: r } = e;
	const [i, s] = n.useState(undefined);
	const o = e.settingValue == "infinite" ? B.jY : e.settingValue;
	const c = () => {
		let e = i !== undefined ? i : o.toString();
		if (e == "infinite") {
			t(e);
			return e;
		}
		let r = parseInt(e);
		r = e.length == 0 || isNaN(r) ? B.jY : Math.max(r, ge);
		let n = r.toString();
		if (e != n) {
			s(n);
		}
		t(r);
		return r;
	};
	let m = i !== undefined ? i : o.toString();
	return n.createElement(l.pd, {
		className: a.DurationInput,
		value: m,
		onChange: (e) => {
			let t = e.target.value.trim();
			if (t.length > 0) {
				if (!/^[0-9]+$/.test(t)) {
					return;
				}
				let e = parseInt(t);
				if (e < 0 || e > 4294967295) {
					return;
				}
			}
			s(t);
		},
		onBlur: (e) => c(),
		maxLength: 4,
		onKeyDown: (e) => {
			if (e.key === "Enter") {
				r(c());
			}
		},
		size: 4,
	});
}
export function InfinityIcon(e) {
	return n.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 36 36",
			fill: "none",
			...e,
		},
		n.createElement("path", {
			fill: "currentColor",
			d: "M35.9627 17.1705C35.9248 17.0461 35.9248 16.8803 35.9248 16.7558C35.5458 13.5207 33.6511 10.8664 30.8089 9.6636C27.8152 8.37792 24.4805 9.04148 22.0931 11.3226L19.4404 13.8525L22.3204 16.6313L24.5941 14.433C25.9204 13.1888 27.7773 12.8155 29.4447 13.5207C30.8089 14.1013 31.7184 15.1796 32.0595 16.6313C32.0974 16.8386 32.1352 17.046 32.1732 17.2534C32.2111 17.5022 32.249 17.751 32.249 18C32.249 18.2488 32.2111 18.4976 32.1732 18.7466C31.9837 20.4885 30.9985 21.8572 29.4448 22.4794C29.1416 22.6038 28.8764 22.6867 28.5732 22.7696C28.27 22.8111 28.0048 22.8525 27.7015 22.8525C26.5647 22.8525 25.4657 22.3963 24.5942 21.5668L13.9074 11.3226C12.3159 9.78806 10.3453 9 8.29893 9C7.23781 9 6.2147 9.20737 5.19159 9.66356C2.34945 10.8664 0.454692 13.5207 0.0757399 16.7558C0.03787 17.1705 0 17.5853 0 18C0 18.2903 0.0378699 18.5807 0.0378699 18.8709C0.0378699 18.9954 0.03787 19.1198 0.0757399 19.2442C0.454692 22.5208 2.34945 25.1751 5.19159 26.3364C6.2147 26.7926 7.27583 27 8.29893 27C10.3453 27 12.3158 26.2119 13.9074 24.6774L16.5601 22.1475L13.6801 19.4102L11.4064 21.5668C10.08 22.8525 8.22318 23.1844 6.55579 22.4792C5.19159 21.8985 4.28208 20.7788 3.94099 19.3686C3.86525 19.1612 3.82725 18.9539 3.82725 18.7465C3.78938 18.4977 3.78938 18.2488 3.78938 17.9999C3.78938 17.751 3.82725 17.5022 3.82725 17.2532C4.01673 15.5114 5.03983 14.1841 6.55564 13.5205C7.12407 13.2717 7.73036 13.1472 8.29879 13.1472C9.43565 13.1472 10.5346 13.6034 11.4061 14.4329L22.0926 24.6772C23.6841 26.2117 25.6547 26.9997 27.7011 26.9997C28.7622 26.9997 29.7853 26.7923 30.8084 26.3362C33.6506 25.1334 35.5832 22.479 35.9243 19.244C35.9621 18.8292 36 18.4145 36 17.9997C36.0004 17.7097 35.9625 17.4608 35.9625 17.1705L35.9627 17.1705Z",
		}),
	);
}
export function NoSmokingIcon(e) {
	return n.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 36 36",
			fill: "none",
			...e,
		},
		n.createElement("path", {
			fill: "currentColor",
			d: "M18 0C14.4399 0 10.9598 1.05568 7.99974 3.03355C5.03966 5.01141 2.73255 7.82263 1.37018 11.1117C0.00779915 14.4008 -0.348661 18.02 0.345873 21.5116C1.04041 25.0033 2.75474 28.2106 5.27209 30.7279C7.78943 33.2453 10.9967 34.9596 14.4884 35.6541C17.98 36.3487 21.5992 35.9922 24.8883 34.6298C28.1774 33.2674 30.9886 30.9603 32.9665 28.0003C34.9443 25.0402 36 21.5601 36 18C36 15.6362 35.5344 13.2956 34.6298 11.1117C33.7252 8.92784 32.3994 6.94353 30.7279 5.27208C29.0565 3.60062 27.0722 2.27475 24.8883 1.37017C22.7044 0.465584 20.3638 0 18 0V0ZM4.80001 18C4.80202 15.3299 5.61374 12.7232 7.12801 10.524L25.476 28.872C23.4944 30.2338 21.1785 31.0284 18.7783 31.1702C16.3781 31.3119 13.9847 30.7954 11.8566 29.6764C9.7285 28.5574 7.94645 26.8784 6.70282 24.8206C5.4592 22.7628 4.80126 20.4044 4.80001 18V18ZM28.872 25.476L10.524 7.128C13.065 5.3893 16.1338 4.59355 19.1995 4.87843C22.2652 5.1633 25.1349 6.51088 27.312 8.68799C29.4891 10.8651 30.8367 13.7348 31.1216 16.8005C31.4064 19.8662 30.6107 22.935 28.872 25.476V25.476Z",
		}),
	);
}
function Qe(e) {
	const { gameID: t, settingValue: r, setSettingValue: i, fnClose: s } = e;
	const o = (0, B.Mm)(t);
	const c = (0, B.lE)();
	const m = t === undefined;
	const d = (0, p.Qn)();
	const [A, g] = (0, n.useState)(r);
	const h = A == "infinite" ? B.jY : A;
	const C = o.bEnabled;
	let f;
	f = C && A == "infinite" ? "infinite" : C ? "timed" : "disabled";
	const [b, y] = (0, n.useState)(f);
	const S = (e) => {
		y("timed");
		g(e);
	};
	const v = (e) => {
		i(e);
		s();
	};
	let I;
	I = d
		? n.createElement(
				n.Fragment,
				null,
				n.createElement(
					_.Z,
					{
						focusable: true,
						onActivate: () => {
							y("timed");
						},
					},
					n.createElement(l.Od, {
						controlled: true,
						className: a.GRModalOption,
						checked: b == "timed",
						onChange: (e) => {
							if (e) {
								y("timed");
							}
						},
						label: n.createElement(
							"div",
							{
								className: (0, w.A)(
									a.OptionTitle,
									a.GROptionLabel,
									b == "timed" ? a.GROptionLabelSelected : "",
								),
							},
							n.createElement(
								"span",
								null,
								(0, Localize)(
									"#Settings_GameRecording_Length_Modal_SetMinutes",
									h,
								),
							),
						),
					}),
					n.createElement(
						"span",
						{
							className: (0, w.A)(
								a.OptionExplainer,
								a.GROptionLabel,
								b == "timed" ? a.GROptionLabelSelected : "",
							),
							onClick: () => {
								y("timed");
							},
						},
						(0, Localize)(
							"#Settings_GameRecording_Length_Modal_MinutesExplainer",
							h,
						),
					),
				),
				n.createElement(
					"div",
					{
						onClick: () => {
							y("timed");
						},
						className: (0, w.A)(
							a.OptionTitle,
							a.GROptionLabel,
							b == "timed" ? a.GROptionLabelSelected : "",
							a.BPMEditField,
						),
					},
					n.createElement(
						"span",
						null,
						(0, Localize)(
							"#Settings_GameRecording_Length_Modal_Minutes_EditPrompt",
						),
					),
					n.createElement(He, {
						settingValue: A,
						setValue: S,
						fnConfirm: v,
					}),
				),
			)
		: n.createElement(
				n.Fragment,
				null,
				n.createElement(l.Od, {
					controlled: true,
					className: a.GRModalOption,
					checked: b == "timed",
					onChange: (e) => {
						if (e) {
							y("timed");
						}
					},
					label: n.createElement(
						"div",
						{
							className: (0, w.A)(
								a.OptionTitle,
								a.GROptionLabel,
								b == "timed" ? a.GROptionLabelSelected : "",
							),
						},
						n.createElement(He, {
							settingValue: A,
							setValue: S,
							fnConfirm: v,
						}),
						n.createElement(
							"span",
							null,
							(0, Localize)("#Settings_GameRecording_Length_Modal_Minutes"),
						),
					),
				}),
				n.createElement(
					"span",
					{
						className: (0, w.A)(
							a.OptionExplainer,
							a.GROptionLabel,
							b == "timed" ? a.GROptionLabelSelected : "",
						),
						onClick: () => {
							y("timed");
						},
					},
					(0, Localize)(
						"#Settings_GameRecording_Length_Modal_MinutesExplainer",
						h,
					),
				),
			);
	return n.createElement(
		"div",
		{
			className: (0, w.A)(a.BackgroundMaxKeepModal, a.GameRecordingModal),
		},
		n.createElement(
			"h1",
			null,
			(0, Localize)("#Settings_GameRecording_Length_Modal_Title"),
		),
		n.createElement(
			"div",
			{
				className: a.GRModalOptions,
			},
			I,
			!m &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(
						_.Z,
						{
							focusable: true,
							onActivate: () => {
								y("infinite");
							},
						},
						n.createElement(l.Od, {
							controlled: true,
							className: a.GRModalOption,
							checked: b == "infinite",
							onChange: (e) => {
								if (e) {
									y("infinite");
								}
							},
							label: n.createElement(
								"div",
								{
									className: (0, w.A)(
										a.OptionTitle,
										a.GROptionLabel,
										b == "infinite" ? a.GROptionLabelSelected : "",
									),
								},
								n.createElement(InfinityIcon, {
									className: a.OptionIconInfinite,
								}),
								n.createElement(
									"span",
									null,
									(0, Localize)(
										"#Settings_GameRecording_Length_Modal_Infinite",
									),
								),
							),
						}),
						n.createElement(
							"span",
							{
								className: (0, w.A)(
									a.OptionExplainer,
									a.GROptionLabel,
									b == "infinite" ? a.GROptionLabelSelected : "",
								),
								onClick: () => {
									y("infinite");
								},
							},
							(0, Localize)(
								"#Settings_GameRecording_Length_Modal_InfiniteExplainer",
							),
						),
					),
					n.createElement(
						_.Z,
						{
							focusable: true,
							onActivate: () => {
								y("disabled");
							},
						},
						n.createElement(l.Od, {
							controlled: true,
							className: a.GRModalOption,
							checked: b == "disabled",
							onChange: (e) => e && y("disabled"),
							label: n.createElement(
								"div",
								{
									className: (0, w.A)(
										a.OptionTitle,
										a.GROptionLabel,
										b == "disabled" ? a.GROptionLabelSelected : "",
									),
								},
								n.createElement(NoSmokingIcon, {
									className: a.OptionIconNoRecord,
								}),
								n.createElement(
									"span",
									null,
									(0, Localize)(
										"#Settings_GameRecording_Length_Modal_Disabled",
									),
								),
							),
						}),
						n.createElement(
							"span",
							{
								className: (0, w.A)(
									a.OptionExplainer,
									a.GROptionLabel,
									b == "disabled" ? a.GROptionLabelSelected : "",
								),
								onClick: () => {
									y("disabled");
								},
							},
							(0, Localize)(
								"#Settings_GameRecording_Length_Modal_NeverExplainer",
								h,
							),
						),
					),
				),
		),
		n.createElement(
			_.Z,
			{
				className: a.ModalButtonRow,
				"flow-children": "row",
			},
			n.createElement(
				l.$n,
				{
					onClick: () => {
						if (b == "timed") {
							i(A == "infinite" ? h : A);
						} else if (b == "infinite") {
							i("infinite");
						} else if (b == "disabled") {
							c.mutate({
								gameID: t,
								enabled: false,
							});
						}
						s();
					},
				},
				(0, Localize)("#Button_Confirm"),
			),
			n.createElement(
				l.$n,
				{
					onClick: s,
				},
				(0, Localize)("#Button_Cancel"),
			),
		),
	);
}
function Ze(e) {
	const { gameID: t, settingValue: r, bEnabled: i } = e;
	const [s, o] = (0, n.useState)(false);
	let c;
	c =
		i && r != "infinite"
			? n.createElement(
					"span",
					{
						className: a.DurationUnits,
					},
					(0, Localize)(
						"#Settings_GameRecording_Length_Choice_Minutes",
						r.toString(),
					),
				)
			: i && r == "infinite"
				? n.createElement(
						"div",
						{
							className: a.MaxKeepOption,
						},
						n.createElement(InfinityIcon, {
							className: a.InfinityIcon,
						}),
						n.createElement(
							"span",
							null,
							(0, Localize)("#Settings_GameRecording_Length_Choice_Infinite"),
						),
					)
				: n.createElement(
						"div",
						{
							className: a.MaxKeepOption,
						},
						n.createElement(NoSmokingIcon, {
							className: a.NoSmokingIcon,
						}),
						n.createElement(
							"span",
							null,
							(0, Localize)("#Settings_GameRecording_Length_Choice_Disabled"),
						),
					);
	return n.createElement(
		"div",
		{
			onKeyDown: (e) => {
				if (e.key == "Escape") {
					e.stopPropagation();
					o(false);
				}
			},
			className: (0, w.A)(a.BackgroundSetting, a.BackgroundDurationSetting),
		},
		n.createElement(
			"div",
			{
				className: a.Header,
			},
			(0, Localize)("#Settings_GameRecording_Length"),
		),
		n.createElement(
			"div",
			{
				className: a.BackgroundDurationValueRow,
			},
			n.createElement(
				l.Ws,
				{
					className: a.DurationButton,
					onClick: () => o(true),
					focusable: true,
					opened: false,
					noFocusRing: true,
				},
				c,
			),
			n.createElement(
				q.mt,
				{
					active: s,
					onDismiss: () => o(false),
				},
				n.createElement(Qe, {
					...e,
					fnClose: () => o(false),
				}),
			),
		),
	);
}
function Ye(e) {
	let t = e?.match(/^(\d+)min|(infinite)$/);
	let r = B.jY;
	if (t) {
		if (t[2] == "infinite") {
			r = t[2];
		} else {
			r = parseInt(t[1]);
			r = Math.max(r, ge);
		}
	}
	return r;
}
export function GetEstimatedDiskSpace() {
	const [e] = (0, A.VI)("g_background_max_keep");
	const [t] = (0, A.VI)("gamerecording_video_bitrate");
	return (function (e, t) {
		let r = (0, J.YH)(t, 1920, 1080);
		if (r == 0) {
			r = 12000;
		}
		let n = 0;
		n = e != "infinite" ? Xe(e, r) : e;
		return n;
	})(Ye(e), t);
}
function Xe(e, t) {
	return (e * 60 * t * 1000) / 8;
}
function Je(e) {
	let { strAmount1080: t, strAmount4k: r } = e;
	let i = LocalizeInlineReactWithFallback(
		(0, Localize)("#Settings_GameRecording_DiskSpace1080", t),
		n.createElement("b", null),
	);
	let s = LocalizeInlineReactWithFallback(
		(0, Localize)("#Settings_GameRecording_DiskSpace4k", r),
		n.createElement("b", null),
	);
	let o = n.createElement(
		te.t1,
		null,
		n.createElement("div", null, i),
		n.createElement("div", null, s),
		n.createElement(
			"div",
			{
				className: a.DiskSpaceToolTipText,
			},
			LocalizeReact("#Settings_GameRecording_DiskSpaceTooltip", i, s),
		),
	);
	return n.createElement(
		te.m9,
		{
			className: a.DiskSpaceInfo,
			direction: "left",
			nBodyAlignment: 0,
			nDelayShowMS: 200,
			toolTipContent: o,
		},
		n.createElement(m.Information, {
			className: a.Icon,
		}),
	);
}
function $e(e) {
	const { maxKeepSetting: t, preset: r, bInvalid: i } = e;
	if (t == "infinite" || r === undefined) {
		return n.createElement("div", {
			className: (0, w.A)(a.BackgroundSetting, a.BackgroundDiskSpace, a.Hidden),
		});
	}
	let s = Xe(t, r.m_nKbps1080p);
	let o = (0, C.dm)(s, {
		bUseBinary1K: false,
	});
	let l = Xe(t, r.m_nKbps2160p);
	let c = (0, C.dm)(l, {
		bUseBinary1K: false,
	});
	let m = c.match(/[A-Za-z]{2}$/);
	let d = o;
	if (m) {
		d = d.replace(m[0], "");
		d = d.replace(" ", "");
	}
	let A = `${d} - ${c}`;
	return n.createElement(
		"div",
		{
			className: (0, w.A)(a.BackgroundSetting, a.BackgroundDiskSpace),
		},
		n.createElement(
			"div",
			{
				className: a.Header,
			},
			(0, Localize)("#Settings_GameRecording_MaxDisk"),
		),
		n.createElement(
			"div",
			{
				className: (0, w.A)(a.DiskSpace, i && a.Invalid),
			},
			n.createElement("span", null, A),
			n.createElement(Je, {
				strAmount1080: o,
				strAmount4k: c,
			}),
		),
	);
}
function et(e) {
	const { visible: t } = e;
	const [r] = (0, A.VI)("g_background_a_m");
	if (t) {
		return n.createElement(
			l.G5,
			null,
			n.createElement(
				z.tX,
				null,
				(0, Localize)("#Settings_GameRecording_AudioRecording"),
			),
			n.createElement(d.G, {
				feature: 0,
				label: (0, Localize)("#Settings_GameRecording_AudioRecording_Mic"),
				description: (0, Localize)(
					"#Settings_GameRecording_AudioRecording_Mic_Description",
				),
				setting: "g_background_a_m",
			}),
			r &&
				n.createElement(d.G, {
					feature: 0,
					label: (0, Localize)(
						"#Settings_GameRecording_AudioRecording_MicMono",
					),
					description: (0, Localize)(
						"#Settings_GameRecording_AudioRecording_MicMono_Description",
					),
					setting: "gamerecording_force_mic_mono",
				}),
			r &&
				n.createElement(d.G, {
					feature: 0,
					label: (0, Localize)("#Settings_GameRecording_AudioRecording_AGC"),
					description: (0, Localize)(
						"#Settings_GameRecording_AudioRecording_AGC_Description",
					),
					setting: "gamerecording_automatic_gain_control",
				}),
			n.createElement(tt, null),
		);
	} else {
		return null;
	}
}
function tt() {
	let e;
	let [t, r] = (0, A.VI)("g_background_audio");
	let i = (0, p.hf)();
	let a = (function () {
		const [e, t] = n.useState(false);
		n.useEffect(() => {
			E.xM.GetPlatformCapabilities({}).then((e) => {
				t(e.Body().per_process_audio_capture());
			});
		}, []);
		return e;
	})();
	let s = [
		{
			label: (0, Localize)("#Settings_GameRecording_AudioSelection_GameOnly"),
			data: 0,
		},
		{
			label: (0, Localize)("#Settings_GameRecording_AudioSelection_AllSystem"),
			data: 1,
		},
		{
			label: (0, Localize)(
				"#Settings_GameRecording_AudioSelection_SelectProcesses",
			),
			data: 2,
		},
	];
	if (!a) {
		t = 1;
		r = (e) => r(1);
		s = s.filter((e) => e.data == 1);
		e = (0, p.td)()
			? (0, Localize)(
					"#Settings_GameRecording_AudioSelection_Explainer_SystemOnly_Windows",
				)
			: (0, Localize)(
					"#Settings_GameRecording_AudioSelection_Explainer_SystemOnly",
				);
	}
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(x.B, {
			label: (0, Localize)("#Settings_GameRecording_AudioSelection_Title"),
			rgOptions: s,
			selectedOption: t,
			onChange: (e) => r(e.data),
			contextMenuPositionOptions: {
				bMatchWidth: !i,
			},
			feature: V.uX,
			disabled: !a,
			description: e,
		}),
		t === 2 && n.createElement(it, null),
	);
}
function rt(e) {
	const { is_muted: t, recent_peak: r, name: i } = e;
	let s = [a.VUActive];
	if (t) {
		s.push(a.VUMuted);
	}
	const o = Math.min(1, r / 0.75);
	return n.createElement(
		"div",
		{
			className: a.AudioSessionVUMeter,
		},
		n.createElement(
			"div",
			{
				className: a.VU,
			},
			n.createElement("div", {
				style: {
					width: o * 100 + "%",
				},
				className: (0, w.A)(...s),
			}),
			n.createElement("div", {
				className: a.VUBase,
			}),
		),
		n.createElement(
			"div",
			null,
			i ??
				(0, Localize)("#Settings_GameRecording_AudioRecording_UnknownProcess"),
		),
	);
}
const nt = n.memo(function (e) {
	if (e.is_system || e.is_game || e.is_steam) {
		return null;
	}
	const t =
		/spotify.exe|SpotifyWidgetProvider.exe|vlc.exe|wmplayer.exe|winamp.exe|foobar2000.exe|itunes.exe/i;
	if ((!t.test(e.id) && !t.test(e.name)) || e.is_saved) {
		return n.createElement(l.Yh, {
			checked: e.is_captured,
			label: n.createElement(rt, {
				is_muted: e.is_muted,
				recent_peak: e.recent_peak,
				name: e.name,
			}),
			onChange: (t) => {
				SteamClient.GameRecording.SetAudioSessionCaptureState(e.id, e.name, t);
			},
		});
	} else {
		return null;
	}
});
function it(e) {
	const [t, r] = n.useState([]);
	n.useEffect(
		() =>
			SteamClient.GameRecording.RegisterForAudioSessionsChanged((e) => {
				const t = k.deserializeBinary(e);
				r(t.sessions());
				return 1;
			}).unregister,
		[],
	);
	return n.createElement(
		"div",
		{
			className: a.ExtraPadding,
		},
		n.createElement(
			"div",
			{
				className: o.FieldLabel,
			},
			(0, Localize)(
				"#Settings_GameRecording_AudioRecording_AdditionalProcesses",
			),
		),
		n.createElement(
			"div",
			{
				className: a.ExtraPadding,
			},
			t.map((e, t) =>
				n.createElement(nt, {
					key: `${e.name()}_${t}`,
					id: e.id(),
					name: e.name(),
					is_system: e.is_system(),
					is_steam: e.is_steam(),
					is_muted: e.is_muted(),
					is_game: e.is_game(),
					is_captured: e.is_captured(),
					is_saved: e.is_saved(),
					recent_peak: e.recent_peak(),
				}),
			),
		),
		n.createElement("div", {
			className: (0, w.A)(o.StandaloneFieldSeparator, a.FieldSeparator),
		}),
	);
}
export function useGameRecordingShortcuts() {
	const [e] = (0, A.VI)("g_background_mk");
	const [t] = (0, A.VI)("g_background_tg");
	return {
		addMarker: e?.display_name || "",
		toggleRecording: t?.display_name || "",
	};
}
export function useGameRecordingSetting() {
	const [e] = (0, A.VI)("g_background_mode");
	let t;
	switch (e) {
		case 2:
			t = G.HE.Manual;
			break;
		case 1:
			t = G.HE.Always;
			break;
		case 0:
			t = G.HE.Never;
	}
	return t;
}
function ot(e) {
	const { visible: t } = e;
	const r = (0, F.yH)("", true);
	const { rgApps: i } = (0, F.z)();
	const [s, o] = n.useState(false);
	const l = n.useCallback(() => {
		E.xM.ManuallyDeleteRecordingsForApps({
			game_ids: i.map((e) => e.game_id),
		});
		o(true);
	}, [i]);
	const [c, m] = (0, n.useState)(false);
	if (t || i.length == 0 || r < 10240 || s) {
		return null;
	}
	let d = n.createElement(
		"div",
		{
			className: a.ClearDiskSpaceRightColumn,
		},
		n.createElement(
			"div",
			{
				className: a.Label,
			},
			(0, Localize)("#Settings_GameRecording_Cleanup_Usage"),
		),
		n.createElement(
			"div",
			{
				className: a.Value,
			},
			(0, C.dm)(r),
		),
		n.createElement(
			"div",
			{
				className: a.ClearDiskSpaceButton,
			},
			n.createElement(
				z.CS,
				{
					className: a.BrightButton,
					onClick: () => m(true),
				},
				(0, Localize)("#Settings_GameRecording_Cleanup_Button"),
			),
		),
		n.createElement(
			pe.E,
			{
				active: c,
			},
			n.createElement(Ae.o0, {
				strTitle: (0, Localize)("#Settings_GameRecording_Cleanup_Button"),
				strDescription: (0, Localize)(
					"#Settings_GameRecording_Cleanup_Confirm",
				),
				strOKButtonText: (0, Localize)("#Button_Delete"),
				onOK: l,
				onCancel: () => m(false),
				bDestructiveWarning: true,
			}),
		),
	);
	return n.createElement(ne.y, {
		type: "info",
		heading: (0, Localize)("#Settings_GameRecording_Cleanup_Heading"),
		body: (0, Localize)("#Settings_GameRecording_Cleanup_Desc"),
		rightColumn: d,
	});
}
function lt(e) {
	const { mode: t } = e;
	const r = (0, Q.W6)();
	const a = (0, p.Qn)();
	const s = t == 2;
	const o = () => {
		if (a) {
			r.push(N.BV.GamepadUI.ControllerConfigurator.Main(S.qh));
		} else {
			SteamClient.Apps.ShowControllerConfigurator(S.qh);
		}
	};
	if ((0, i.q3)(() => H.Fd.Get().GetControllers().length > 0)) {
		return n.createElement(
			"div",
			null,
			n.createElement(
				l.D0,
				{
					focusable: false,
					label: (0, Localize)(
						"#Settings_GameRecording_Gamepad_ToggleRecordingHotkey",
					),
				},
				n.createElement(j.Gn, {
					binding: {
						type: W.N.k_EControllerBindingType_ControllerAction,
						controller_action: {
							action: 45,
						},
					},
					onActivate: o,
				}),
			),
			n.createElement(
				l.D0,
				{
					focusable: false,
					label: (0, Localize)("#Settings_GameRecording_Gamepad_MarkHotkey"),
				},
				n.createElement(j.Gn, {
					binding: {
						type: W.N.k_EControllerBindingType_ControllerAction,
						controller_action: {
							action: 46,
						},
					},
					onActivate: o,
				}),
			),
			!s &&
				n.createElement(
					l.D0,
					{
						focusable: false,
						label: (0, Localize)("#Settings_GameRecording_Gamepad_Clip"),
					},
					n.createElement(j.Gn, {
						binding: {
							type: W.N.k_EControllerBindingType_ControllerAction,
							controller_action: {
								action: 47,
							},
						},
						onActivate: o,
					}),
				),
		);
	} else {
		return null;
	}
}
function ct(e) {
	const { visible: t } = e;
	const [r, i, s] = (function () {
		const e = (0, h.R7)();
		const [t, r, i, a] = (0, A.VI)("g_background_path");
		const s = n.useCallback(
			(n) => {
				if (t) {
					if (t != n) {
						(0, g.$)({
							strDescription: (0, Localize)(
								"#Settings_GameRecording_Path_NeedRestart",
							),
							fnOnOK: () => r(n),
							strCancelButtonText: (0, Localize)(
								"#Settings_RestartLater_ButtonText",
							),
							fnOnCancel: () => {
								r(n);
								a();
							},
							ownerWindow: e.ownerWindow,
						});
					}
					r(t);
				}
			},
			[t, r, a, e],
		);
		const o = n.useCallback(() => {
			const r = {
				strTitle: (0, Localize)("#Settings_GameRecording_Path_Title"),
				strInitialFile: t,
				bChooseDirectory: true,
			};
			((0, X.Fj)(e.ownerWindow, "System.OpenFileDialog")
				? e.ownerWindow
				: window
			).SteamClient.System.OpenFileDialog(r).then(s);
		}, [t, s, e]);
		const l = n.useCallback(() => s(""), [s]);
		return [t, o, l];
	})();
	const o = (0, p.Qn)();
	if (!t) {
		return null;
	}
	const c = n.createElement(
		"div",
		{
			className: a.FolderLink,
			onClick: () => SteamClient.System.OpenLocalDirectoryInSystemExplorer(r),
		},
		r,
	);
	const m = n.createElement(
		te.Gq,
		{
			direction: "top",
			toolTipContent: (0, Localize)("#Settings_GameRecording_Path_Reset"),
		},
		n.createElement(
			z.CS,
			{
				className: a.ClearButton,
				onClick: s,
			},
			"X",
		),
	);
	return n.createElement(
		l.G5,
		{
			className: a.RecordingLocationSection,
		},
		n.createElement(z.tX, null, (0, Localize)("#Settings_GameRecording_Path")),
		n.createElement(
			z.oN,
			{
				label: c,
				disabled: (0, p.TL)() && o,
				onClick: i,
				feature: V.uX,
				bottomSeparator: "none",
				fieldClassName: a.BackgroundPathField,
				fieldChildren: m,
			},
			(0, Localize)("#Settings_InGame_ChangeFolder"),
		),
	);
}
function mt(e) {
	let { visible: t, mode: r } = e;
	let i = (function () {
		let [e] = (0, A.VI)("g_max_fps");
		let t = [60, 30];
		if (e && t.findIndex((t) => t == e) < 0) {
			t.unshift(e);
		}
		return t.map((e) => ({
			label: e.toString(),
			data: e,
		}));
	})();
	let a = (function () {
		let [e] = (0, A.VI)("gamerecording_video_maxheight");
		let t = [0, 2160, 1440, 1200, 1080, 720, 480];
		if ((0, p.TL)()) {
			t = [0, 1440, 1200, 1080, 800, 720, 480];
		}
		if (e && t.findIndex((t) => t == e) < 0) {
			t.splice(1, 0, e);
		}
		return t.map((e) => ({
			label:
				e == 0
					? (0, Localize)("#Settings_GameRecording_VideoMaxHeight_Auto")
					: (0, Localize)("#Settings_GameRecording_VideoMaxHeight_Pixels", e),
			data: e,
		}));
	})();
	let [s] = (0, A.VI)("gamestream_hardware_video_encode");
	let [o, c] = (0, A.VI)("gamestream_enable_video_h265");
	let [m] = (0, A.VI)("enable_gpu_accelerated_webviews");
	let [g] = (0, A.VI)("enable_hardware_video_decoding");
	let h = m && g;
	let C = !(0, p.TL)();
	let _ = !(0, p.Pr)() && !(0, p.TL)();
	let [f, b] = (0, J.d5)();
	if (!t) {
		return null;
	}
	let y = c;
	if (s) {
		if (!h) {
			y = b;
		}
	} else {
		y = null;
	}
	let S = s && o && h;
	let w = n.createElement(ee.S, {
		deferred: false,
		label: (0, Localize)("#Settings_GameRecording_VideoEnableH265"),
	});
	let B =
		s && !h
			? (0, Localize)("#Settings_GameRecording_RequiresGPUAcceleration")
			: undefined;
	return n.createElement(
		l.G5,
		null,
		f,
		n.createElement(
			z.tX,
			null,
			(0, Localize)("#Settings_GameRecording_VideoRecording"),
		),
		n.createElement(le, {
			visible: r === 2,
		}),
		C &&
			n.createElement(d.G, {
				label: (0, Localize)("#Settings_GameRecording_VideoHardwareEncoding"),
				feature: 0,
				setting: "gamestream_hardware_video_encode",
			}),
		_ &&
			n.createElement($.C, {
				feature: 0,
				label: w,
				description: B,
				disabled: !s,
				checked: S,
				onChange: y,
				controlled: true,
			}),
		n.createElement(I.X, {
			label: (0, Localize)("#Settings_GameRecording_MaxFrameRate"),
			rgOptions: i,
			setting: "g_max_fps",
		}),
		n.createElement(I.X, {
			label: (0, Localize)("#Settings_GameRecording_VideoMaxHeight"),
			description: (0, Localize)(
				"#Settings_GameRecording_VideoMaxHeight_Description",
			),
			rgOptions: a,
			setting: "gamerecording_video_maxheight",
		}),
	);
}
