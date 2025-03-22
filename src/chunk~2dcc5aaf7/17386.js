var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./34792.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require("./9282.js");
var c = l;
var m = require(/*webcrack:missing*/ "./73870.js");
var u = require("./64608.js");
var d = require("./10606.js");
var A = require(/*webcrack:missing*/ "./46108.js");
var p = require(/*webcrack:missing*/ "./52451.js");
var g = require(/*webcrack:missing*/ "./72476.js");
var h = require("./96555.js");
var C = require("./91957.js");
var _ = require("./2306.js");
export function DP() {
	const e = (0, h.l5)();
	const [t] = lJ();
	return !(0, g.Pr)() && (e || t);
}
function b(e = false) {
	const t = (0, h.l5)();
	const r = e ? null : (0, A.we)("#Settings_Display_ExternalDisplay");
	let n = (0, s.q3)(() => i.rV.settings?.strDisplayName);
	if (n == null || n.length == 0) {
		n = r;
	}
	n = n?.replace("Internal: ", "")?.replace("External: ", "");
	const a = n?.lastIndexOf("|||");
	if (a > 0) {
		n = n.substring(0, a);
	}
	if (n?.toLowerCase().startsWith("xwayland")) {
		n = r;
	}
	if (t) {
		return n ?? (0, A.we)("#Settings_Display_ExternalDisplay_DefaultName");
	} else {
		return (0, A.we)("#SteamDeckName");
	}
}
export function vB() {
	const e = b(true);
	if (e == null) {
		return (0, A.we)("#Settings_Display_DisplayScaling_Scaling");
	} else {
		return (0, A.we)("#Settings_Display_DisplayScaling_ScalingForTVName", e);
	}
}
export function XD(e) {
	const t = (0, s.q3)(() => i.rV.settings?.flCurrentUnderscanLevel ?? 0);
	const r = (0, s.q3)(() => i.rV.settings?.bUnderscanEnabled);
	const [n, a] = o.useState(t);
	o.useEffect(() => a(t), [t]);
	const l = (e) => 1 - (e - 0) + 0;
	const c = l(0);
	const m = [
		{
			notchIndex: 0,
			label: (0, A.we)("#Settings_Display_Underscan_Notch_Smaller"),
		},
		{
			notchIndex: 1,
			label: (0, A.we)("#Settings_Display_Underscan_Notch_Larger"),
		},
	];
	if (!r) {
		return null;
	}
	const u = l(n);
	return o.createElement(C.V, {
		feature: 7,
		disabled: !r,
		layout: "below",
		value: u,
		min: 0,
		max: 1,
		step: 0.04,
		resetValue: c,
		onChange: (e, t) => {
			const r = l(e);
			if (t == 2 || t == 4) {
				SteamClient.System.Display.SetUnderscanLevel(r);
			}
			a(r);
		},
		onChangeComplete: (e, t) => {
			const r = l(e);
			if (t != 2 && t != 4) {
				SteamClient.System.Display.SetUnderscanLevel(r);
			}
		},
		notchCount: 2,
		notchLabels: m,
		notchTicksVisible: false,
	});
}
export function VJ(e) {
	const t = !(0, s.q3)(() => i.rV.settings?.bUnderscanEnabled);
	let r = e.bottomSeparator;
	if (r == "auto") {
		r = t ? "standard" : "none";
	}
	return o.createElement(_.C, {
		feature: 7,
		label: (0, A.we)("#Settings_Display_Underscan_Auto"),
		checked: t,
		onChange: (e) => {
			SteamClient.System.Display.EnableUnderscan(!e);
		},
		bottomSeparator: r,
	});
}
export function dy(e) {
	const t = (0, s.q3)(() => i.rV.settings?.bDisplayIsUsingAutoScale);
	const r = (0, s.q3)(() => i.rV.settings?.flCurrentDisplayScaleFactor ?? 1.5);
	const [n, a] = o.useState(r);
	o.useEffect(() => a(r), [r]);
	const l = (0, s.q3)(() => i.rV.settings?.flAutoDisplayScaleFactor);
	const c = (0, s.q3)(() => i.rV.settings?.flMinDisplayScaleFactor ?? 0.5);
	const m = (0, s.q3)(() => i.rV.settings?.flMaxDisplayScaleFactor ?? 2.5);
	const u = (m - c) / 10;
	const d = [
		{
			notchIndex: 0,
			label: (0, A.we)("#Settings_Display_DisplayScaling_MoreContent"),
		},
		{
			notchIndex: 1,
			label: (0, A.we)(
				g.TS.ON_DECK
					? "#Settings_Display_DisplayScaling_LargerText_SteamDeck"
					: "#Settings_Display_DisplayScaling_LargerText",
			),
		},
	];
	if (t) {
		return null;
	} else {
		return o.createElement(C.V, {
			feature: 7,
			layout: "below",
			value: n,
			min: c,
			max: m,
			step: u,
			resetValue: l,
			onChange: (e, t) => {
				if (t == 2 || t == 4) {
					SteamClient.Window.SetManualDisplayScaleFactor(e);
				}
				a(e);
			},
			onChangeComplete: (e, t) => {
				if (t != 2 && t != 4) {
					SteamClient.Window.SetManualDisplayScaleFactor(e);
				}
			},
			notchCount: 2,
			notchLabels: d,
			notchTicksVisible: false,
		});
	}
}
export function Eh(e) {
	const t = (0, s.q3)(() => i.rV.settings?.bDisplayIsUsingAutoScale);
	const r = t === undefined;
	const n = e.concise
		? (0, A.we)(
				"#Settings_Display_DisplayScaling_Automatically_Scale_UI_Concise",
			)
		: (0, A.we)(
				"#Settings_Display_DisplayScaling_Automatically_Scale_UI_Verbose",
			);
	let a = e.bottomSeparator;
	if (a == "auto") {
		a = t ? "standard" : "none";
	}
	return o.createElement(_.C, {
		feature: 7,
		disabled: r,
		label: n,
		checked: t,
		onChange: (e) => {
			SteamClient.Window.SetAutoDisplayScale(e);
		},
		bottomSeparator: a,
	});
}
export function Rw(e) {
	const t = b(true);
	const r =
		t != null
			? (0, A.we)("#Settings_Display_DisplayScaling_ChooseScalingForTVName", t)
			: (0, A.we)("#Settings_Display_DisplayScaling_ChooseScaling");
	const n = (0, s.q3)(() => i.rV.settings?.bDisplayIsUsingAutoScale);
	const a = (0, s.q3)(() => !i.rV.settings?.bUnderscanEnabled);
	const l = !n || !a;
	const m = o.useMemo(() => i.rV.settings?.flCurrentDisplayScaleFactor, []);
	const p = o.useMemo(() => i.rV.settings?.bDisplayIsUsingAutoScale, []);
	const g = o.useMemo(() => i.rV.settings?.flCurrentUnderscanLevel ?? 0, []);
	const h = o.useMemo(() => !i.rV.settings?.bUnderscanEnabled, []);
	const C = () => {
		if (p) {
			SteamClient.Window.SetAutoDisplayScale(true);
		} else {
			SteamClient.Window.SetManualDisplayScaleFactor(m);
		}
		SteamClient.System.Display.EnableUnderscan(!h);
		if (!h) {
			SteamClient.System.Display.SetUnderscanLevel(g);
		}
		if (e.closeModal) {
			e.closeModal();
		}
		return true;
	};
	return o.createElement(
		d.eV,
		{
			closeModal: C,
			onCancel: C,
			className: c.Dialog,
		},
		o.createElement(u.Y9, null, r),
		o.createElement(
			u.nB,
			null,
			o.createElement(Eh, {
				bottomSeparator: "auto",
			}),
			o.createElement(dy, null),
			l &&
				o.createElement("div", {
					className: c.SectionSeparator,
				}),
			o.createElement(VJ, {
				bottomSeparator: "auto",
			}),
			o.createElement(XD, null),
			o.createElement(
				"div",
				{
					className: c.YouCanChangeThisLater,
				},
				o.createElement(
					"span",
					null,
					(0, A.PP)(
						"#Settings_Display_DisplayScaling_YouCanChangeThisIn_Section",
						o.createElement("strong", null, (0, A.we)("#MainTabsSettings")),
						o.createElement(
							"strong",
							null,
							(0, A.we)("#Settings_Page_Display"),
						),
					),
				),
			),
		),
		o.createElement(
			u.wi,
			null,
			o.createElement(u.CB, {
				onOK: e.closeModal,
				onCancel: C,
			}),
		),
	);
}
class E {
	static s_Singleton = undefined;
	static k_strAllowInternalDisplayScaling_StorageKey =
		"AllowInternalDisplayScaling";
	m_DisplayScalingDevSettings = undefined;
	m_bAllowInternalDisplayScaling = undefined;
	static Get() {
		if (E.s_Singleton == null) {
			E.s_Singleton = new E();
		}
		return E.s_Singleton;
	}
	constructor() {
		(0, a.Gn)(this);
		this.m_DisplayScalingDevSettings = new m.A();
		this.Load().then(() => (0, a.fm)(this.Save));
	}
	async Load() {
		this.m_bAllowInternalDisplayScaling =
			await this.m_DisplayScalingDevSettings.GetObject(
				E.k_strAllowInternalDisplayScaling_StorageKey,
			);
	}
	async Save() {
		await this.m_DisplayScalingDevSettings.StoreObject(
			E.k_strAllowInternalDisplayScaling_StorageKey,
			this.m_bAllowInternalDisplayScaling,
		);
	}
}
export function lJ() {
	return [
		(0, s.q3)(() => E.Get().m_bAllowInternalDisplayScaling),
		(e) => {
			E.Get().m_bAllowInternalDisplayScaling = e;
		},
	];
}
export function RP(e) {
	const [t, r] = lJ();
	return o.createElement(u.y4, {
		label: (0, A.we)("#Settings_Display_AllowInternalScaling"),
		checked: t,
		onChange: r,
	});
}
(0, n.Cg)([a.sH], E.prototype, "m_bAllowInternalDisplayScaling", undefined);
(0, n.Cg)([p.oI], E.prototype, "Save", null);
