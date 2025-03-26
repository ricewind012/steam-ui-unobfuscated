var n = require("./18057.js");
var i = require("./57565.js");
var a = require("./33572.js");
var s = require("./31800.js");
var o = require("./91703.js");
var l = require("./87913.js");
var c = require("./5822.js");
var m = require("./60917.js");
var u = require("./5640.js");
var d = require("./89748.js");
var A = require("./46422.js");
var p = require("./23783.js");
var g = require(/*webcrack:missing*/ "./90095.js");
var h = require(/*webcrack:missing*/ "./63696.js");
var C = require(/*webcrack:missing*/ "./78325.js");
var _ = require(/*webcrack:missing*/ "./49519.js");
var f = require(/*webcrack:missing*/ "./58254.js");
var b = require("./15521.js");
var y = require(/*webcrack:missing*/ "./3524.js");
var S = require(/*webcrack:missing*/ "./84252.js");
var w = require("./55116.js");
var B = require(/*webcrack:missing*/ "./69164.js");
var v = require("./21105.js");
var I = require(/*webcrack:missing*/ "./4690.js");
var E = require("./80310.js");
var M = require(/*webcrack:missing*/ "./15181.js");
var T = require("./73375.js");
var R = require("./35488.js");
var k = require("./22004.js");
var D = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var F = require("./51076.js");
var G = require(/*webcrack:missing*/ "./72476.js");
var O = require("./60115.js");
var P = require("./81661.js");
function L() {
	return h.createElement(P.p5, null);
}
function z() {
	return h.createElement(P.RA, null);
}
function x() {
	return h.createElement(P.Mu, null);
}
var U = require("./42085.js");
var W = require("./64608.js");
function V() {
	const e = (0, _.W6)();
	const t = (0, o.K1)();
	const r = (0, h.useCallback)(() => {
		e.push(n.BV.Library.Home(), {
			bShowGuidedTour: true,
		});
		t();
	}, [e, t]);
	const i = G.TS.ON_DECK;
	const a = (0, g.q3)(() => (0, d.qw)().GetServicesInitialized());
	const s = (0, n.JE)();
	const l = (0, n.DV)();
	const c = (0, n.FI)();
	return h.createElement(
		U.aU,
		null,
		h.createElement(
			U.kn,
			null,
			h.createElement(
				W.xh,
				{
					layout: "below",
					bottomSeparator: "none",
					onClick: s,
				},
				(0, Localize)("#QuickAccess_Tab_Help_HelpSite"),
			),
		),
		i &&
			h.createElement(
				U.kn,
				null,
				h.createElement(
					W.xh,
					{
						layout: "below",
						bottomSeparator: "none",
						onClick: l,
					},
					(0, Localize)("#QuickAccess_Tab_Help_ViewManual"),
				),
			),
		h.createElement(
			U.kn,
			null,
			h.createElement(
				W.xh,
				{
					layout: "below",
					bottomSeparator: "none",
					onClick: c,
				},
				(0, Localize)("#QuickAccess_Tab_Help_ReportABug"),
			),
		),
		a &&
			G.TS.ON_DECK &&
			h.createElement(
				U.kn,
				null,
				h.createElement(
					W.xh,
					{
						layout: "below",
						bottomSeparator: "none",
						onClick: r,
					},
					(0, Localize)("#QuickAccess_Tab_Help_ReplayTour"),
				),
			),
	);
}
var H = require("./34544.js");
var j = H;
var q = require("./11521.js");
var Q = require("./63312.js");
var Z = require("./4406.js");
var Y = require("./74362.js");
var K = require("./70519.js");
var X = require("./77347.js");
var J = require("./22091.js");
var $ = require("./85182.js");
function ee() {
	J.Fd.Get().GetControllers();
	return h.createElement(
		U.aU,
		{
			title: (0, Localize)(
				"#QuickAccess_Tab_Settings_Section_Controller_Title",
			),
		},
		h.createElement(U.kn, null, h.createElement($.oH, null)),
		h.createElement(U.kn, null, h.createElement($.IC, null)),
		h.createElement(
			U.kn,
			null,
			h.createElement($.AR, {
				bShowIcon: true,
			}),
		),
	);
}
var te = require("./72858.js");
var re = require("./34792.js");
var ne = require("./91720.js");
var ie = require("./4069.js");
function ae() {
	const [e] = (0, re.VI)("g_background_mode");
	const t = (0, A.Qu)();
	const r = (0, g.q3)(() => (0, ne.Hg)());
	if ((0, ie.BGameRecordingFeatureEnabled)()) {
		if (e == 0) {
			return null;
		} else if (e != 2 || t || r) {
			return h.createElement(
				U.aU,
				{
					title: (0, Localize)("#QuickAccess_Tab_GameRecording"),
				},
				e == 2 && h.createElement(te.ManualRecordingToggle, null),
				e == 1 && h.createElement(te.BackgroundRecordingQuickSetting, null),
			);
		} else {
			return null;
		}
	} else {
		return null;
	}
}
var se = require("./34819.js");
var oe = require("./66943.js");
var le = require("./9482.js");
var ce = require("./17386.js");
var me = require("./51943.js");
var ue = require("./25467.js");
var de = require("./96555.js");
var Ae = require(/*webcrack:missing*/ "./11131.js");
var pe = require("./83571.js");
var ge = require("./2306.js");
function he() {
	const e = (0, X.yL)();
	const t = (0, g.q3)(() => J.Fd.Get().GetControllers());
	const r = (0, le.Z)();
	const n = !A.oy.BIsInOOBE && t.length != 0;
	const i = (0, se._3)();
	const a = (0, se._x)();
	const s = (0, ce.DP)();
	const o = (0, ce.vB)();
	const l = (0, me.In)();
	const c = (0, de.hb)();
	const m = (0, X.Ev)();
	const u = (0, ue.Iz)();
	const d = m || u || r || c;
	const p = (0, Ae.R7)();
	return h.createElement(
		h.Fragment,
		null,
		c &&
			h.createElement(
				U.aU,
				{
					title: (0, Localize)(
						"#QuickAccess_Tab_Settings_Section_Brightness_Title",
					),
				},
				h.createElement(pe.PS, null),
				h.createElement(
					U.kn,
					null,
					h.createElement(Z.jJ, {
						iconOnly: true,
						padding: "compact",
					}),
				),
				h.createElement(U.kn, null, h.createElement(pe.zt, null)),
			),
		l &&
			h.createElement(
				U.aU,
				{
					title: (0, Localize)("#QuickAccess_Tab_Settings_Section_Audio_Title"),
				},
				h.createElement(
					U.kn,
					null,
					h.createElement(K.RC, {
						direction: Y.T4.Output,
						padding: "compact",
					}),
				),
				h.createElement(
					U.kn,
					null,
					h.createElement(K.RC, {
						direction: Y.T4.Input,
						padding: "compact",
					}),
				),
			),
		d &&
			h.createElement(
				U.aU,
				{
					title: (0, Localize)("#QuickAccess_Tab_Settings_Section_Other_Title"),
				},
				r &&
					h.createElement(
						U.kn,
						null,
						h.createElement(
							W.xh,
							{
								onClick: () => (0, le.b)(p),
								layout: "below",
								bottomSeparator: "none",
							},
							(0, Localize)("#QuickAccess_ReorderControllers_Button"),
						),
					),
				(m || u) &&
					h.createElement(
						U.kn,
						null,
						h.createElement(W.y4, {
							checked: i,
							onChange: (e) => se.mG.Get().SetAirplaneMode(e),
							label: (0, Localize)(
								"#QuickAccess_Tab_Settings_Section_Shortcuts_AirplaneMode",
							),
							icon: h.createElement(R.AirplaneMode, null),
							padding: "compact",
						}),
					),
				m &&
					h.createElement(
						U.kn,
						null,
						h.createElement(W.y4, {
							checked: e,
							onChange: (e) => X.OQ.Get().SetWifiEnabled(e),
							label: (0, Localize)(
								"#QuickAccess_Tab_Settings_Section_Shortcuts_Wifi",
							),
							icon: h.createElement(R.WiFi, null),
							padding: "compact",
						}),
					),
				u && h.createElement(oe.ty, null),
				c &&
					h.createElement(
						U.kn,
						null,
						h.createElement(ge.C, {
							feature: 7,
							checked: a,
							onChange: (e) => se.mG.Get().SetNightModeEnabled(e),
							label: (0, Localize)(
								"#QuickAccess_Tab_Settings_Section_Shortcuts_NightMode",
							),
							icon: h.createElement(R.NightMode, null),
							padding: "compact",
						}),
					),
			),
		n && h.createElement(ee, null),
		(0, ie.BGameRecordingFeatureEnabled)() && h.createElement(ae, null),
		s &&
			h.createElement(
				U.aU,
				{
					title: o,
				},
				h.createElement(
					U.kn,
					null,
					h.createElement(ce.Eh, {
						concise: true,
					}),
				),
				h.createElement(U.kn, null, h.createElement(ce.dy, null)),
			),
		false,
	);
}
var Ce = require("./90985.js");
var _e = require("./10294.js");
var fe = require("./96680.js");
var be = require(/*webcrack:missing*/ "./52451.js");
function ye(e, t) {
	let r = 300 - t * 300;
	r *= 1;
	return {
		x: e.x + r,
		y: e.y,
		width: e.width,
		height: e.height,
	};
}
export const Gt = h.memo(function (e) {
	const { active: t } = e;
	const [r, a] = h.useState(t);
	const m = r || t;
	h.useEffect(() => a(t), [t]);
	const u = (0, F.OU)(n.BV.GamepadUI.AppRunning());
	(0, s.iW)(m && !u, "QuickAccessMenuBrowserView");
	const d = h.useCallback(
		(e) => A.oy.NavigationManager.RegisterInputSource(e),
		[],
	);
	let p = (0, T.sd)(d, {
		name: "QuickAccess",
	});
	const { fnOnFocusNavActivated: g, fnOnFocusNavDeactivated: _ } = (0, O.k6)(
		c.Ez.QuickAccess,
		p,
		e.ModalManager,
	);
	const f = (0, o.K1)();
	(0, l.PG)(p?.GetViewWindow());
	if (!p) {
		return null;
	}
	const b = {
		nDuration: 300,
		fnStep: ye,
	};
	let S = u ? "transparent" : "darkblur";
	let w = (0, D.A)(j.ViewPlaceholder, u && j.FullHeight);
	return h.createElement(
		i.H,
		{
			appearance: S,
			visible: m,
			onClick: f,
		},
		h.createElement(T.m4, {
			className: w,
			browser: p.GetBrowserView(),
			visible: m,
			animateIn: b,
		}),
		h.createElement(
			y.b5,
			{
				ownerWindow: p.GetViewWindow(),
			},
			C.createPortal(
				h.createElement(Me, {
					active: t,
					visible: m,
					showHeaderAndFooter: u,
					onFocusNavActivated: g,
					onFocusNavDeactivated: _,
				}),
				p.GetRenderElement(),
			),
		),
	);
});
export const pZ = h.memo(function (e) {
	const { active: t } = e;
	const r = (0, be.DF)(t, 100);
	const [i, o] = h.useState(false);
	const l = t || i || r;
	(0, c.ED)(l);
	const [m, u] = h.useState(false);
	h.useEffect(() => u(l), [l]);
	const d = (0, F.OU)(n.BV.GamepadUI.AppRunning());
	(0, s.iW)(m && !d, "QuickAccessMenuEmbedded");
	const A = (0, a.ch)();
	const p = h.useCallback(() => {
		A.OnMenuDeactivated(c.Ez.QuickAccess);
	}, [A]);
	const g = (0, D.A)(
		j.ViewPlaceholder,
		j.QuickAccessMenuEmbedded,
		d && j.FullHeight,
		t && m && j.Open,
	);
	if (l) {
		return h.createElement(
			"div",
			{
				className: j.QuickAccessMenuEmbeddedContainer,
			},
			h.createElement(
				"div",
				{
					className: g,
					onAnimationStart: () => o(true),
					onAnimationEnd: () => o(false),
				},
				h.createElement(Me, {
					active: t,
					visible: m,
					showHeaderAndFooter: d,
					onFocusNavDeactivated: p,
				}),
			),
		);
	} else {
		return null;
	}
});
function Be(e) {
	return h.createElement(
		"div",
		{
			className: j.Title,
		},
		(0, Localize)(e.locId),
	);
}
export function l8() {
	const e = (0, d.Wx)();
	const t = (0, A.Eb)();
	const r = (0, G.rP)().IN_VR;
	const n = (0, l.wm)();
	const i = (0, l.cO)();
	const a = (0, l._h)();
	const s = (0, fe.$2)();
	const o = e && (n || i);
	const m = !r && e && a;
	const u = e;
	const C = !r && e;
	const _ = !r;
	const f = (!r || s.IsVRWindowInGamescope()) && e && !t;
	const y = (0, g.q3)(() => Ce.l.playbackState);
	const S =
		e &&
		(!r ||
			y?.ePlaybackStatus == b.f.AudioPlayback_Playing ||
			y?.ePlaybackStatus == b.f.AudioPlayback_Paused);
	const w = !r;
	return h.useMemo(
		() =>
			[
				o && {
					key: c.qE.VoiceChat,
					tab: h.createElement(R.VoiceRoom, null),
					title: h.createElement(h.Fragment, null),
					strTitle: (0, Localize)("#HeaderActions_VoiceChatActive"),
					panel: h.createElement(z, null),
					className: j.VoiceTab,
					vrPopupSize: "fit-content",
				},
				m && {
					key: c.qE.RemotePlayTogetherControls,
					tab: h.createElement(R.RemotePlayTogether, null),
					title: h.createElement(h.Fragment, null),
					strTitle: (0, Localize)("#RemotePlayTogether_QuickAccessTitle"),
					panel: h.createElement(x, null),
					vrPopupSize: "fit-content",
				},
				u && {
					key: c.qE.Notifications,
					tab: h.createElement(R.Notifications, null),
					title: h.createElement(Be, {
						locId: "#QuickAccess_Tab_Notifications_Title",
					}),
					strTitle: (0, Localize)("#QuickAccess_Tab_Notifications_Title"),
					panel: h.createElement(q.C, null),
					vrPopupSize: "fit-content",
				},
				C && {
					key: c.qE.Friends,
					tab: h.createElement(R.Friends, null),
					title: h.createElement(h.Fragment, null),
					strTitle: undefined,
					panel: h.createElement(L, null),
					eFeature: 4,
					vrPopupSize: "full-height",
				},
				_ && {
					key: c.qE.Settings,
					title: h.createElement(Be, {
						locId: "#QuickAccess_Tab_Settings_Title",
					}),
					strTitle: (0, Localize)("#QuickAccess_Tab_Settings_Title"),
					tab: h.createElement(R.Settings, null),
					panel: h.createElement(he, null),
					vrPopupSize: "fit-content",
				},
				f && {
					key: c.qE.Perf,
					title: h.createElement(Be, {
						locId: "#QuickAccess_Tab_Perf_Title",
					}),
					strTitle: (0, Localize)("#QuickAccess_Tab_Perf_Title"),
					tab: h.createElement(R.QAMPerformance, null),
					panel: h.createElement(Q.Bi, null),
					vrPopupSize: "fit-content",
				},
				S && {
					key: c.qE.Soundtrack,
					title: h.createElement(Be, {
						locId: "#QuickAccess_Tab_Soundtrack_Title",
					}),
					strTitle: (0, Localize)("#QuickAccess_Tab_Soundtrack_Title"),
					tab: h.createElement(R.Music, null),
					panel: h.createElement(p.SK, null),
					vrPopupSize: "fit-content",
				},
				w && {
					key: c.qE.Help,
					title: h.createElement(Be, {
						locId: "#QuickAccess_Tab_Help_Title",
					}),
					strTitle: (0, Localize)("#QuickAccess_Tab_Help_Title"),
					tab: h.createElement(R.Help, null),
					panel: h.createElement(V, null),
					allowInKioskMode: false,
					vrPopupSize: "fit-content",
				},
			].filter((e) => e),
		[o, m, u, C, _, f, S, w],
	);
}
function Ie(e) {
	const t = (0, W.a_)();
	const r = h.useMemo(
		() => ({
			...t,
			bQuickAccessMenu: true,
		}),
		[t],
	);
	return h.createElement(
		W.Ce.Provider,
		{
			value: r,
		},
		e.children,
	);
}
function Ee(e) {
	return (
		(e.eFeature != null && !!u.jR.BIsFeatureBlocked(e.eFeature)) ||
		(e.allowInKioskMode === false && !!_e.Ih.BKioskModeLocked())
	);
}
function Me(e) {
	const { active: t, visible: r } = e;
	const i = h.useRef(undefined);
	const a = h.useRef(undefined);
	const l = h.useRef(undefined);
	const u = (0, O.Y$)(c.Ez.QuickAccess);
	h.useEffect(() => {
		if (t) {
			i.current.Activate(true);
		} else if (i.current?.BIsActive()) {
			i.current.Deactivate();
		}
	}, [t]);
	const d = h.useCallback(() => {
		l.current.TakeFocus();
		return true;
	}, []);
	const p = h.useCallback(() => {
		a.current.TakeFocus();
		return true;
	}, []);
	const C = l8();
	let f = (0, c.i4)();
	f = (0, g.q3)(() =>
		C.some((e) => e.key === f && !Ee(e))
			? f
			: C.length > 0
				? C[0].key
				: undefined,
	);
	let b = (0, D.A)("BasicUI", {
		[j.Container]: true,
		[j.Open]: e.visible,
	});
	let y = h.useCallback((e) => {
		e.stopPropagation();
		e.preventDefault();
	}, []);
	let v = h.useCallback(() => {
		d();
		return true;
	}, [d]);
	const E = (0, o.K1)();
	let M = (0, A.Qu)();
	const T = (0, _.W6)();
	const k = h.useCallback(() => {
		T.replace(n.BV.GamepadUI.AppOverlay.Keyboard());
	}, [T]);
	const N = h.useCallback(() => {
		E();
		k();
	}, [E, k]);
	h.useEffect(() => {
		d();
	}, [f, d]);
	const F = (0, m.Xm)();
	h.useEffect(() => {
		if (r && f == c.qE.Notifications) {
			m.Tu.Viewed();
		}
	}, [f, F, r]);
	const P = (0, O.on)();
	const L = (0, G.rP)();
	const z = (0, D.A)(
		j.QuickAccessMenu,
		e.showHeaderAndFooter && j.HeaderAndFooterVisible,
		L.IN_VR && j.VR,
	);
	const x = (0, D.A)(j.Tabs, e.showHeaderAndFooter && j.TabsWithFooter);
	return h.createElement(
		Ie,
		null,
		h.createElement(
			S.B2,
			{
				navID: "QuickAccess-NA",
				enabled: t || u,
				navTreeRef: i,
				onActivated: e.onFocusNavActivated,
				onDeactivated: e.onFocusNavDeactivated,
				autoFocus: true,
				className: b,
				onCancelButton: d,
				onGlobalButtonDown: P,
			},
			h.createElement(Te, {
				bQuickAccessMenuVisible: r,
			}),
			h.createElement(
				w.g,
				null,
				h.createElement(
					B.Z,
					{
						id: "QuickAccess-Menu",
						className: z,
						onClick: y,
					},
					h.createElement(
						"div",
						{
							className: j.HeaderContainer,
						},
						h.createElement(s.Y9, {
							quickAccessHeader: true,
							visible: e.showHeaderAndFooter,
						}),
					),
					h.createElement(
						B.Z,
						{
							className: j.Menu,
						},
						h.createElement(
							B.Z,
							{
								className: x,
								navRef: l,
								autoFocus: true,
								focusable: false,
								onCancel: E,
								onActivate: p,
								onMoveRight: p,
								navEntryPreferPosition: I.iU.PREFERRED_CHILD,
							},
							h.createElement(ke, {
								tabs: C,
								activeTab: f,
							}),
							M &&
								h.createElement(
									B.Z,
									{
										className: j.KeyboardButton,
										focusable: true,
										onActivate: N,
									},
									h.createElement(R.ShowKeyboard, null),
								),
						),
						h.createElement(
							B.Z,
							{
								className: j.PanelOuterNav,
								onMoveLeft: v,
								navRef: a,
							},
							h.createElement(Ne, {
								tabs: C,
								activeTab: f,
								bMenuVisible: r,
							}),
						),
					),
				),
			),
		),
	);
}
const Te = h.memo(function (e) {
	const { bQuickAccessMenuVisible: t } = e;
	let [r, n] = h.useState(0);
	let [i, s] = h.useState(false);
	let [o, u] = h.useState(false);
	const d = (0, a.ch)();
	const A = (0, l.wm)();
	const p = (0, l.cO)();
	let g = (0, m.ZT)();
	let C =
		g?.filter((e) => e.eType == 8 || e.eType == 9 || e.eType == 17)?.length ??
		0;
	h.useEffect(() => {
		if (C != r) {
			n(C);
			if (C > r && !t) {
				d.OpenQuickAccessMenu(c.qE.Notifications, false);
			}
		}
		if (p != o) {
			u(p);
			if (p && !t) {
				d.OpenQuickAccessMenu(c.qE.VoiceChat, false);
			}
		}
		if (A != i) {
			s(A);
			if (A && !t) {
				d.OpenQuickAccessMenu(c.qE.VoiceChat, false);
			}
		}
	}, [d, p, r, C, t, A, o, i]);
	return null;
});
function Re(e) {
	const { tab: t, selected: r } = e;
	let n = t.key;
	const i = (0, a.ch)();
	const s = (function (e) {
		return (0, g.q3)(() => Ee(e));
	})(t);
	const o = h.useCallback(() => {
		if (r) {
			console.log("Trying to change focus to already selected tab");
		} else {
			i.OpenQuickAccessMenu(n);
		}
	}, [i, n, r]);
	if (!t) {
		return null;
	}
	const l = (0, D.A)(j.Tab, r && j.Selected, s && j.Blocked, t.className);
	const c = s ? undefined : o;
	const m = r ? undefined : c;
	return h.createElement(
		B.Z,
		{
			key: t.key.toString(),
			focusable: !s,
			className: l,
			onFocus: c,
			onActivate: m,
			preferredFocus: r,
		},
		t.tab,
	);
}
function ke(e) {
	let { tabs: t, activeTab: r } = e;
	let n = t.map((e) =>
		h.createElement(Re, {
			key: e?.key.toString(),
			tab: e,
			selected: r == e.key,
		}),
	);
	return h.createElement(
		B.Z,
		{
			className: j.TabContentColumn,
			"flow-children": "column",
			preferredFocus: true,
			navEntryPreferPosition: I.iU.PREFERRED_CHILD,
		},
		n,
	);
}
function De(e, t) {
	return e.findIndex((e) => e.key == t);
}
function Ne(e) {
	let t = (0, k.ls)(e.tabs, e.activeTab, De, [k.fz.Up, k.fz.Down]);
	let r = (0, D.A)(j.AllTabContents, t == k.fz.Up ? j.Up : j.Down);
	return h.createElement(
		"div",
		{
			className: r,
		},
		e.tabs.map((t) =>
			h.createElement(Fe, {
				key: t.key.toString(),
				tab: t,
				activeTab: e.activeTab,
				bMenuVisible: e.bMenuVisible,
			}),
		),
	);
}
const Fe = h.memo(function (e) {
	let { tab: t, activeTab: r, bMenuVisible: n } = e;
	let i = t.key == r;
	let a = parseInt(j.TransitionMenuDelay);
	const s = {
		enter: j.Enter,
		enterActive: j.EnterActive,
		exit: j.Exit,
		exitActive: j.ExitActive,
	};
	const o = (0, h.useRef)(null);
	return h.createElement(
		f.A,
		{
			nodeRef: o,
			key: t.key.toString(),
			classNames: s,
			timeout: a,
			in: i,
		},
		h.createElement(Ge, {
			tab: t,
			bActive: i && n,
		}),
	);
});
function Ge(e) {
	const { tab: t, bActive: r } = e;
	let n = h.useCallback(() => r, [r]);
	const { refScroll: i, refNav: a, bShouldMount: s } = (0, E.H)(r, 300000);
	return h.createElement(
		"div",
		{
			ref: e.ref,
			className: (0, D.A)(j.ContentTransition, r && j.ActiveTab),
		},
		t.title,
		h.createElement(
			v.MS,
			{
				ref: i,
				navRef: a,
				className: (0, D.A)(j.TabGroupPanel, `tab_${c.qE[t.key]}`),
				fnCanTakeFocus: n,
				onMoveUp: M.ru,
				onMoveDown: M.ru,
			},
			h.createElement(w.g, null, s && t.panel),
		),
	);
}
