var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./32700.js");
var a = require("./18057.js");
var s = require("./6232.js");
var o = require("./46422.js");
var l = require("./77347.js");
var c = require("./24496.js");
var m = require("./89411.js");
var u = require("./81661.js");
var d = require("./97893.js");
var A = require("./48289.js");
var p = require("./74416.js");
var g = require("./5640.js");
var h = require("./34792.js");
var C = require("./89748.js");
var _ = require("./96593.js");
var f = require("./91486.js");
var b = require(/*webcrack:missing*/ "./90095.js");
var y = require(/*webcrack:missing*/ "./41230.js");
var S = require(/*webcrack:missing*/ "./49519.js");
var w = require(/*webcrack:missing*/ "./69164.js");
var B = require(/*webcrack:missing*/ "./4690.js");
var v = require("./88724.js");
var I = require("./17231.js");
var E = require("./35488.js");
var M = require(/*webcrack:missing*/ "./90765.js");
import {
	Localize,
	LocalizeDateHumanReadable,
} from "../../actual_src/utils/localization.js";
var R = require(/*webcrack:missing*/ "./31958.js");
var k = require(/*webcrack:missing*/ "./52451.js");
var D = require("./51076.js");
var N = require("./6242.js");
import { GetUnixTime } from "../../actual_src/utils/time.js";
var G = require("./61651.js");
var O = G;
var P = require(/*webcrack:missing*/ "./90242.js");
var L = require("./31319.js");
var z = require("./75248.js");
var x = require("./91703.js");
var U = require("./33572.js");
var W = require(/*webcrack:missing*/ "./72476.js");
function V(e) {
	let t = (0, L.dM)();
	if (e.forceExpanded) {
		t = "show-expanded";
	}
	const r = iN();
	const i = r != null;
	const s = t == "show-expanded";
	const o = t != "hidden" && !i;
	const l = (0, D.OU)(a.BV.GamepadUI.AppRunning());
	const c = (0, x.K1)();
	const m = (0, U.we)();
	const u = n.useCallback(
		(e) => {
			m.SetUniversalSearchFocused(e);
			if (e) {
				c();
			}
		},
		[m, c],
	);
	const d = (0, W.rP)();
	if (l && m.GetForceHeaderAfterResume()) {
		return null;
	}
	const A = (0, M.A)(
		O.SearchAndTitleContainer,
		i && O.ShowingTitle,
		o && O.ShowingSearch,
		s && O.ForceExpanded,
		e.iconMovesOnHover && O.IconMovesOnHover,
		d.IN_VR && O.VR,
	);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			w.Z,
			{
				className: A,
				onFocusWithin: u,
			},
			i &&
				n.createElement(
					"div",
					{
						className: O.Title,
					},
					r,
				),
			o && n.createElement(H, null),
		),
	);
}
function H(e) {
	const [t, r] = n.useState(false);
	const i = (0, D.OU)(a.BV.GamepadUI.Search.Root());
	let s = (0, k.gc)(z.U.GetSearchText());
	if (!i) {
		s = "";
	}
	const o = n.useRef(undefined);
	const l = (0, M.A)(O.SearchBox, O.Visible);
	const c = (0, U.we)();
	const m = (function () {
		let e = (0, S.W6)();
		return n.useCallback(() => {
			if (
				!(0, S.B6)(e.location.pathname, {
					path: a.BV.GamepadUI.Search.Root(),
				})
			) {
				e.push(a.BV.GamepadUI.Search.Tab("All"));
			}
		}, [e]);
	})();
	d = m;
	const u = n.useCallback(
		(e) => {
			z.U.SetSearchText(e.target.value);
			d();
		},
		[d],
	);
	var d;
	(function (e, t, r) {
		let i = n.useCallback(() => {
			t();
			r.current.focus();
			r.current.click();
		}, [t, r]);
		(0, k.hL)(e.m_ActivateSearchBoxCallbackList, i);
	})(c, m, o);
	const A = s.length > 0;
	const p = t || A || i;
	const g = n.useCallback(() => {
		c.OnAcceptSearchText();
		return "VKClose";
	}, [c]);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement("div", {
			className: (0, M.A)(O.SearchFieldBackground, p && O.WhiteBackground),
		}),
		n.createElement(E.Search, {
			className: (0, M.A)(O.SearchIconLeft, p && O.WhiteBackground),
			width: "24px",
			height: "24px",
		}),
		n.createElement(P.BA, {
			ref: o,
			className: (0, M.A)(l, p && O.WhiteBackground),
			type: "search",
			focusable: true,
			noFocusRing: true,
			preferredFocus: true,
			value: s,
			onFocusWithin: r,
			onKeyboardShow: m,
			onChange: u,
			onEnterKeyPress: g,
			onKeyboardNavOut: g,
			onOptionsButton: A ? () => z.U.ClearSearchText() : undefined,
			onOptionsActionDescription: A ? (0, Localize)("#Clear") : undefined,
			strEnterKeyLabel: (0, Localize)("#SearchEnterKeyLabel"),
			placeholder: (0, Localize)("#SearchPlaceholder"),
		}),
		n.createElement(E.Search, {
			className: (0, M.A)(O.SearchIconRight, p && O.WhiteBackground),
			width: "24px",
			height: "24px",
		}),
	);
}
var j = require("./99731.js");
var q = require("./23741.js");
var Q = q;
function Z() {
	const e = (0, U.we)();
	const { browser: t } = (0, b.q3)(() => e.GetCurrentBrowserAndBackstack());
	return t != null;
}
function Y(e) {
	const t = (0, U.we)();
	const {
		browser: r,
		bExternal: i,
		bCanEditURL: a,
	} = (0, b.q3)(() => t.GetCurrentBrowserAndBackstack());
	if (r) {
		return n.createElement(
			w.Z,
			{
				className: (0, M.A)(Q.HeaderBrowser),
			},
			n.createElement(j.hf, {
				browser: r,
				external: i,
				bCanChangeURL: a,
			}),
		);
	} else {
		return null;
	}
}
var K = require("./87546.js");
var X = require("./87913.js");
var J = require(/*webcrack:missing*/ "./42318.js");
var $ = require("./27710.js");
var ee = require("./5822.js");
var te = require("./13688.js");
var re = require("./18869.js");
var ne = require("./98393.js");
var ie = ne;
var ae = require(/*webcrack:missing*/ "./61657.js");
var se = require("./45967.js");
var oe = require(/*webcrack:missing*/ "./10975.js");
var le = require("./53379.js");
function ce(e) {
	const { className: t } = e;
	const r = n.useCallback((e) => {
		o.oy.NavigationManager.DispatchVirtualButtonClick(ae.pR.CANCEL);
		oe.eZ.PlayNavSound(oe.PN.HideModal);
		e.preventDefault();
		e.stopPropagation();
	}, []);
	const i = (0, se.HJ)(2);
	const a = {
		onClick: r,
	};
	const s = (0, le.j)(a);
	const l = (0, k.Ue)(i, s);
	return n.createElement(
		"div",
		{
			className: (0, M.A)(t, ie.BackContainer),
			ref: l,
			onMouseDown: (e) => e.preventDefault(),
			...a,
		},
		n.createElement(E.Arrow, {
			direction: "left",
			className: (0, M.A)(ie.ArrowBack),
		}),
		n.createElement(
			"span",
			{
				className: ie.BackButton,
			},
			(0, Localize)("#NavigateBack"),
		),
	);
}
var me = require("./30557.js");
var ue = me;
var de = require("./12031.js");
var Ae = de;
var pe = require("./60917.js");
var ge = require("./16251.js");
var he = require("./45921.js");
var Ce = require("./79476.js");
var _e = require("./96680.js");
var fe = require("./10294.js");
var be = require("./68292.js");
var ye = require("./72858.js");
var Se = require("./91325.js");
Number.parseInt(ue["gamepad-header-height"]);
export function j1() {
	const [e, t] = n.useState(new Date());
	n.useEffect(() => {
		let e = 60 - (GetUnixTime() % 60);
		let r = window.setTimeout(() => t(new Date()), e * 1000);
		return () => clearTimeout(r);
	}, [e]);
	const r = (e) => {
		t(new Date());
	};
	n.useEffect(
		() => SteamClient.Settings.RegisterForTimeZoneChange(r).unregister,
		[],
	);
	return e;
}
export function hj() {
	const e = j1();
	const [t] = (0, h.e_)("b24HourClock");
	let r = {
		hour: "numeric",
		minute: "2-digit",
	};
	if (t) {
		r = {
			hour: "2-digit",
			minute: "2-digit",
			hourCycle: "h23",
		};
	}
	return e.toLocaleTimeString([], r);
}
function ve(e) {
	const { children: t, ...r } = e;
	const [i, a] = n.useState(false);
	const s = n.useCallback((e) => a(e != null), []);
	const o = typeof t == "function" ? t?.(s) : t;
	return n.createElement(
		Ie,
		{
			...r,
			style: {
				display: i ? undefined : "none",
			},
			focusable: i,
		},
		o,
	);
}
function Ie(e) {
	const { vrTooltip: t, ...r } = e;
	const i = e.onActivate != null;
	if (n.useContext(rt).bVRDashboardBar) {
		return n.createElement(he.dn, {
			tooltip: t,
			...r,
		});
	} else {
		return n.createElement(
			w.Z,
			{
				noFocusRing: true,
				...r,
				className: (0, M.A)(ue.HeaderItem, i && ue.Clickable, e.className),
			},
			e.children,
		);
	}
}
const Ee = (e) =>
	n.createElement(E.FamilySharing, {
		className: (0, M.A)(ue.FamilyView, e.bLocked && ue.Locked),
	});
const Me = (e) =>
	n.createElement(E.Lock, {
		locked: e.bLocked,
		className: (0, M.A)(ue.KioskMode, e.bLocked && ue.Locked),
	});
const Te = (e) => {
	const { icon: t, strength: r } = e;
	switch (t) {
		case 2:
			return n.createElement(E.WirelessConnectingActive, null);
		case 6:
			return n.createElement(E.WirelessNetwork, {
				strength: r,
			});
		case 4:
			return n.createElement(E.WirelessNetworkWarning, {
				strength: r,
			});
		case 7:
			return n.createElement(E.WirelessDisabled, null);
		case 1:
			return n.createElement(E.WirelessOfflineMode, null);
		case 5:
			return n.createElement(E.WiredNetwork, null);
		case 3:
			return n.createElement(E.WiredNetworkWarning, null);
		default:
			return null;
	}
};
function Re() {
	const e = (0, g.Wf)();
	const t = (0, g.oA)();
	const r = (0, g.Wp)();
	const i = r ? 1 : 2;
	const o = (0, _e.$2)();
	const l = (0, a.bG)("FamilyManagement");
	const c = (0, Localize)(t ? "#FamilyView_Unlock" : "#FamilyView_Lock");
	if (e) {
		return n.createElement(
			Ie,
			{
				className: ue.FamilyViewIcon,
				onActivate: r
					? () => {
							if (t) {
								(0, s.$)(o?.BrowserWindow ?? window, i);
							} else {
								(0, s.S)(o?.BrowserWindow ?? window, i);
							}
						}
					: l,
				vrTooltip: c,
			},
			n.createElement(Ee, {
				bLocked: t,
			}),
		);
	} else {
		return null;
	}
}
function ke() {
	const e = (0, fe.VA)();
	const t = (0, fe.fK)();
	const r = (0, _e.$2)();
	const i = t
		? (0, Localize)("#KioskMode_Unlock_Tooltip")
		: (0, Localize)("#KioskMode_Lock_Tooltip");
	if (e) {
		return n.createElement(
			Ie,
			{
				className: ue.FamilyViewIcon,
				onActivate: () => {
					if (t) {
						(0, s.$)(r?.BrowserWindow ?? window, 4);
					} else {
						(0, s.S)(r?.BrowserWindow ?? window, 4);
					}
				},
				vrTooltip: i,
			},
			n.createElement(Me, {
				bLocked: t,
			}),
		);
	} else {
		return null;
	}
}
function De(e) {
	const { tab: t, children: r } = e;
	if (t) {
		return n.createElement(
			he.XO,
			{
				tooltip: t?.strTitle,
				popupContents: n.createElement(
					"div",
					{
						className: (0, M.A)(
							Ae.DashboardBarPopupContents,
							Ae.QuickAccess,
							t.vrPopupSize == "full-height" && Ae.FullHeight,
						),
					},
					t?.title &&
						n.createElement(
							"div",
							{
								className: Ae.QuickAccessPopupTitle,
							},
							t.title,
						),
					n.createElement(
						"div",
						{
							className: Ae.QuickAccessPopupPanel,
						},
						t.panel,
					),
				),
			},
			r ?? t.tab,
		);
	} else {
		return null;
	}
}
function Ne() {
	return n.createElement(ye.GamepadUIRecordingState, null);
}
function Fe() {
	const e = (0, o.Eb)();
	const t = (0, te.k1)();
	const { icon: r, strength: i, ssid: a } = (0, l.$)();
	if (n.useContext(rt).bVRDashboardBar) {
		switch (r) {
			case 1:
			case 4:
			case 3:
				break;
			case 2:
			case 6:
			case 7:
			case 5:
			case 0:
				return null;
		}
	}
	if (r == 0) {
		return null;
	} else {
		return n.createElement(
			Ie,
			{
				className: ue.WirelessIcon,
				onActivate: e ? undefined : () => t.Settings("Internet"),
				onOKActionDescription: (0, Localize)("#HeaderActions_Network"),
				vrTooltip: a,
			},
			n.createElement(Te, {
				icon: r,
				strength: i,
			}),
		);
	}
}
function Ge() {
	const [e, t, r] = (0, Se.I)();
	if (e) {
		return n.createElement(
			Ie,
			{
				onActivate: () => r(true),
			},
			n.createElement(E.HardDriveWarning, null),
			n.createElement(Se.p, {
				active: t,
				onDismiss: () => r(false),
			}),
		);
	} else {
		return null;
	}
}
function Oe(e) {
	const t = (0, l.db)();
	const r = (0, te.k1)();
	const i = n.useCallback(() => {
		r.Settings("Internet");
	}, [r]);
	if (t) {
		return n.createElement(
			Ie,
			{
				className: ue.SteamConnectionWarningIcon,
				onActivate: i,
				onOKActionDescription: (0, Localize)("#HeaderActions_Network"),
			},
			n.createElement(E.SteamNetworkIssue, null),
		);
	} else {
		return null;
	}
}
const Pe = () =>
	n.createElement(E.Download, {
		className: (0, M.A)(ue.Download),
	});
const Le = () => {
	const [e, t] = n.useState();
	const r = (0, d.zM)();
	const i = r?.update_appid;
	n.useEffect(() => {
		if (!i) {
			return;
		}
		const e = window.setTimeout(() => t(i), 10);
		return () => window.clearTimeout(e);
	}, [i]);
	const s = (0, _.Co)(i);
	const o = (0, re.tn)(a.BV.Downloads());
	const l = (0, d.B7)();
	if (!s) {
		return null;
	}
	const c = (0, d.MD)(r);
	const m = e != i;
	return n.createElement(
		Ie,
		{
			vrTooltip: l,
			onActivate: o,
			onOKActionDescription: (0, Localize)("#HeaderActions_Downloads"),
		},
		n.createElement(
			"div",
			{
				className: (0, M.A)(
					ue.HeaderDownloadContainer,
					!m && ue.NewAppDownloading,
				),
			},
			n.createElement(Pe, null),
			n.createElement(
				"div",
				{
					className: ue.HeaderAppPortraitContainer,
				},
				n.createElement(f.z, {
					app: s,
					eAssetType: 4,
					className: ue.HeaderAppPortrait,
					bShortDisplay: true,
				}),
				n.createElement(
					"div",
					{
						className: ue.HeaderDownloadProgressBarBackground,
					},
					n.createElement("div", {
						className: ue.HeaderDownloadProgressBar,
						style: {
							width: c + "%",
						},
					}),
				),
			),
		),
	);
};
function ze(e) {
	const t = (0, m.C2)();
	const r = (0, $.P7)();
	if (t || r) {
		return n.createElement(
			Ie,
			{
				className: ue.UpdatesIcon,
				onActivate: e.onClick,
				onOKActionDescription: (0, Localize)("#HeaderActions_Update"),
			},
			n.createElement(E.SteamdeckUpdate, null),
		);
	} else {
		return null;
	}
}
function xe(e) {
	const t = n.useContext(rt);
	const r = (0, M.A)(
		ue.HeaderItem,
		ue.VoiceChatStatus,
		t.bVRDashboardBar && "VRDashboardBar",
	);
	return n.createElement(
		ve,
		{
			onActivate: e.onClick,
			onOKActionDescription: (0, Localize)("#HeaderActions_VoiceChatActive"),
		},
		(e) =>
			n.createElement(u.Cy, {
				navRef: e,
				className: r,
			}),
	);
}
function Ue(e) {
	const { qamTabs: t, onClick: r } = e;
	const i = n.useContext(rt);
	const a = (0, M.A)(
		ue.HeaderItem,
		ue.Clickable,
		ue.VoiceChatStatus,
		i.bVRDashboardBar && "VRDashboardBar",
	);
	const s = t.find((e) => e.key == ee.qE.VoiceChat);
	return n.createElement(
		De,
		{
			tab: s,
		},
		n.createElement(u.Cy, {
			className: a,
		}),
	);
}
function We(e) {
	const t = (0, M.A)(ue.HeaderItem, ue.UnreadChatMessages);
	return n.createElement(
		ve,
		{
			onActivate: e.onClick,
			onOKActionDescription: (0, Localize)("#HeaderActions_UnreadChatMessages"),
		},
		(e) =>
			n.createElement(u.Dx, {
				navRef: e,
				className: t,
			}),
	);
}
function Ve(e) {
	if ((0, c.gf)()) {
		return n.createElement(
			Ie,
			{
				className: ue.UnformattedDriveIcon,
				onActivate: e.onClick,
			},
			n.createElement(E.SdCard, null),
		);
	} else {
		return null;
	}
}
function He(e) {
	const t = (0, k.gc)(h.rV.GetBatteryPreferences());
	const r = (0, W.rP)();
	if (!e.state.bHasBattery) {
		return null;
	}
	const i = e.sayFull ?? e.state.eBatteryState == 3;
	const a = isFinite(e.state.flLevel)
		? Math.min(Math.round(e.state.flLevel * 100), 99) + "%"
		: "";
	const s = e.allowPercent && t.bShowBatteryPercentage;
	const o = r.IN_VR;
	return n.createElement(
		Ie,
		{
			className: (0, M.A)(ue.BatteryIcon, o && ue.VR),
			onActivate: e.onClick,
			vrTooltip: a,
		},
		!i &&
			s &&
			n.createElement(
				"span",
				{
					className: ue.Percentage,
				},
				a,
			),
		n.createElement(
			"div",
			{
				className: ue.BatteryIconVerticalStack,
			},
			e.icon &&
				n.createElement(
					"div",
					{
						className: ue.BatteryIconInnerIcon,
					},
					e.icon,
				),
			!i &&
				n.createElement(E.Battery, {
					acState: e.state.eACState,
					batteryLevel: e.state.flLevel,
				}),
			i &&
				n.createElement(E.BatteryFull, {
					acState: e.state.eACState,
					batteryLevel: e.state.flLevel,
				}),
		),
	);
}
export function ZN(e) {
	const t = (0, K.Qc)();
	const r = (0, K.FA)();
	if ((0, W.rP)().IN_VR) {
		return null;
	} else {
		return n.createElement(He, {
			state: t,
			sayFull: r,
			allowPercent: true,
			onClick: e.onClick,
		});
	}
}
function qe(e) {
	const t = (0, se.Fq)(e.devicePath);
	const r = (0, se.dx)(e.devicePath, ge.fD.DeviceProvidesBatteryStatus_Bool);
	const i = (0, se.Zy)(e.devicePath, ge.fD.DeviceBatteryPercentage_Float);
	const a = (0, k.xx)(i, 0.02);
	const s = (0, se.dx)(e.devicePath, ge.fD.DeviceIsCharging_Bool);
	const o = a == 1;
	const l = (0, _e.$2)();
	const c = l?.IsVRSimulatedOnDesktopWindow() && (!t || !r);
	const m = e.devicePath == "/user/hand/left";
	if ((!t || !r || i == null) && !c) {
		return null;
	}
	const u = c
		? {
				bHasBattery: true,
				flLevel: m ? 0.1 : 1,
				eACState: m ? 2 : 1,
				eBatteryState: m ? 2 : o ? 3 : 1,
				nSecondsRemaining: undefined,
				bShutdownRequested: false,
			}
		: {
				bHasBattery: r,
				flLevel: a,
				eACState: s ? 2 : 1,
				eBatteryState: s ? 2 : o ? 3 : 1,
				nSecondsRemaining: undefined,
				bShutdownRequested: false,
			};
	return n.createElement(He, {
		state: u,
		allowPercent: e.allowPercent,
		onClick: e.onClick,
		icon: e.icon,
	});
}
function Qe(e) {
	const t = (0, ee.uT)(ee.qE.Perf);
	const r = (0, W.rP)();
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			J.tH,
			null,
			r.IN_VR &&
				n.createElement(qe, {
					devicePath: "/user/hand/left",
					icon: n.createElement(E.VRControllerSide, {
						hand: "left",
					}),
				}),
		),
		n.createElement(
			J.tH,
			null,
			n.createElement(ZN, {
				onClick: t,
			}),
		),
		n.createElement(
			J.tH,
			null,
			r.IN_VR &&
				n.createElement(qe, {
					devicePath: "/user/head",
					icon: n.createElement(E.VR, null),
				}),
		),
		n.createElement(
			J.tH,
			null,
			r.IN_VR &&
				n.createElement(qe, {
					devicePath: "/user/hand/right",
					icon: n.createElement(E.VRControllerSide, {
						hand: "right",
					}),
				}),
		),
	);
}
function Ze(e) {
	if ((0, pe.Xm)()) {
		return n.createElement(
			Ie,
			{
				className: ue.NotificationsIcon,
				onActivate: e.onClick,
			},
			n.createElement(E.Notifications, null),
		);
	} else {
		return null;
	}
}
function Ye(e) {
	const { qamTabs: t } = e;
	const r = (0, pe.Xm)();
	const i = t.find((e) => e.key == ee.qE.Notifications);
	return n.createElement(
		De,
		{
			tab: i,
		},
		n.createElement(E.Notifications, {
			alert: r > 0,
		}),
	);
}
function Ke() {
	const e = hj();
	const t = (function () {
		const e = j1();
		return LocalizeDateHumanReadable(e.valueOf() / 1000, true, false);
	})();
	const r = n.useContext(rt);
	return n.createElement(
		Ie,
		{
			className: (0, M.A)(ue.Clock, r.bVRDashboardBar && ue.DashboardBar),
			vrTooltip: t,
		},
		e,
	);
}
function Xe() {
	const e = (0, b.q3)(() => h.rV.settings?.bIsSteamSideload);
	const t = (0, te.k1)();
	if (e) {
		return n.createElement(
			Ie,
			{
				className: ue.Dev,
				onClick: () => t.Settings("System"),
			},
			"SIDELOADED",
		);
	} else {
		return null;
	}
}
const Je = (0, y.PA)(function (e) {
	let t = null;
	const r = (0, C.Wx)();
	const i = (0, C.qw)().GetServicesInitialized();
	const a = (0, A.LK)();
	if (r && i) {
		t = (0, be.bg)().self;
	}
	let s = (0, p.Tr)();
	const o = (0, b.q3)(() => (0, C.qw)().BHasActiveSupportAlerts());
	const l = (0, X.o2)();
	const c = (0, X.wm)();
	if (!t) {
		return null;
	}
	let m = s?.animated_avatar;
	let u = s?.avatar_frame;
	let d = (0, v.rO)(t?.persona);
	let g = {};
	if (c && l != 1) {
		let e = 100;
		let t = 3.2;
		let r = Math.min(l * t, 1);
		let n = Math.max(0, e * r);
		n = Math.round(n * 10) / 10;
		g.height = n + "%";
		g.top = "auto";
		d += " InVoiceChat";
		if (n > 1) {
			d += " speaking";
		}
	}
	return n.createElement(
		Ie,
		{
			id: "header_profile",
			onActivate: e.onActivate,
			onOKActionDescription: (0, Localize)("#HeaderActions_AccountPage"),
		},
		o &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement("div", {
					className: ue.HasActiveSupportAlert,
				}),
				n.createElement(E.ExclamationPoint, null),
			),
		n.createElement(
			"div",
			{
				className: (0, M.A)(ue.CurrentUserAvatar, d),
			},
			m &&
				n.createElement(I.xz, {
					className: ue.Avatar,
					loopDuration: "None",
					size: "FillArea",
					persona: t?.persona,
					animatedAvatar: m,
					avatarFrame: u,
					statusPosition: "right",
					statusStyle: g,
					bLimitProfileFrameAnimationTime: true,
				}),
			!m &&
				a &&
				n.createElement(I.Ul, {
					strAvatarURL: a,
					statusStyle: g,
				}),
		),
	);
});
const $e = [
	a.BV.Library.Home(),
	a.BV.GamepadUI.AppRunning(),
	a.BV.GamepadUI.ColorSettings(),
	a.BV.GamepadUI.Login(),
	a.BV.GamepadUI.CreateAccount(),
	a.BV.GamepadUI.Account(),
	a.BV.Settings.Root(),
	a.BV.Media.Item(),
];
const et = [
	a.BV.Library.Root(),
	a.BV.Library.Home(),
	a.BV.Library.App.Root(),
	a.BV.GamepadUI.Search.Root(),
	a.BV.GamepadUI.Chat(),
	a.BV.Media.Grid(),
	a.BV.Media.Item(),
	a.BV.Downloads(),
	a.BV.GamepadUI.Account(),
	a.BV.Settings.Root(),
	a.BV.GamepadUI.Zoo.Root(),
	a.BV.AppProperties.Root(),
];
const tt = [
	a.BV.GamepadUI.AppRunning(),
	a.BV.GamepadUI.SteamWeb(),
	a.BV.GamepadUI.ExternalWeb(),
	a.BV.GamepadUI.MicroTxnAuth(),
];
const rt = n.createContext({
	bVRDashboardBar: false,
});
export const YF = n.memo(function (e) {
	(0, i.Qf)();
	const t = (0, b.q3)(() => (0, C.qw)().BHasActiveSupportAlerts());
	const r = (0, C.Wx)();
	const a = (0, b.q3)(() => o.oy.GetShowingLockScreen());
	const s = (0, te.k1)();
	const l = Z();
	return n.createElement(
		st,
		{
			quickAccessHeader: false,
		},
		n.createElement(ce, {
			className: ue.OverridesInteractionSuppression,
		}),
		!a &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(
					J.tH,
					null,
					l
						? n.createElement(Y, null)
						: r
							? n.createElement(V, {
									forceExpanded: true,
								})
							: undefined,
				),
				r &&
					t &&
					n.createElement(
						J.tH,
						null,
						n.createElement(Je, {
							onActivate: () => s.Account(),
						}),
					),
			),
	);
});
export const rz = n.memo(function (e) {
	(0, i.Qf)();
	const t = (0, U.oH)();
	const r = (0, C.Wx)();
	const a = (0, b.q3)(() => o.oy.GetShowingLockScreen());
	const s = t.mode == U._5.ControllerConfigurator && t.forcedAppID != 0;
	const l = (0, te.k1)();
	const c = (0, ee.uT)(ee.qE.VoiceChat);
	const m = (0, Ce.l8)();
	const u = m
		.filter((e) => e.key != ee.qE.Notifications && e.key != ee.qE.VoiceChat)
		.map((e) =>
			n.createElement(
				J.tH,
				{
					key: e.key,
				},
				n.createElement(De, {
					tab: e,
				}),
			),
		);
	return n.createElement(
		rt.Provider,
		{
			value: {
				bVRDashboardBar: true,
			},
		},
		n.createElement(
			"div",
			{
				className: Ae.SideSectionInner,
			},
			!a &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(
						J.tH,
						null,
						!!r &&
							n.createElement(Ve, {
								onClick: () => l.Settings("Storage"),
							}),
					),
					n.createElement(J.tH, null, n.createElement(Re, null)),
					n.createElement(J.tH, null, n.createElement(ke, null)),
					n.createElement(J.tH, null, !s && n.createElement(Le, null)),
				),
			u,
			n.createElement(
				J.tH,
				null,
				!a &&
					r &&
					n.createElement(Ye, {
						qamTabs: m,
					}),
			),
			n.createElement(J.tH, null, n.createElement(Oe, null)),
			n.createElement(J.tH, null, n.createElement(Fe, null)),
			n.createElement(Qe, null),
			!a &&
				r &&
				n.createElement(
					J.tH,
					null,
					n.createElement(Ue, {
						qamTabs: m,
						onClick: c,
					}),
				),
			n.createElement(J.tH, null, n.createElement(Ke, null)),
		),
	);
});
export const Y9 = n.memo(function (e) {
	let t = e.quickAccessHeader;
	(0, i.Qf)();
	const r = (0, U.oH)();
	const a = (0, C.Wx)();
	const s = (0, b.q3)(() => o.oy.GetShowingLockScreen());
	const l = r.mode == U._5.ControllerConfigurator && r.forcedAppID != 0;
	const c = (0, te.k1)();
	const m = (0, ee.uT)(ee.qE.VoiceChat);
	const u = (0, ee.uT)(ee.qE.Notifications);
	const d = Z();
	const A = (0, U.we)();
	if ((0, b.q3)(() => (t ? e.visible : A.BShowHeader()))) {
		return n.createElement(
			st,
			{
				quickAccessHeader: e.quickAccessHeader,
			},
			!s &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(J.tH, null, !t && d && n.createElement(Y, null)),
					n.createElement(
						J.tH,
						null,
						!t &&
							a &&
							n.createElement(V, {
								iconMovesOnHover: !d,
							}),
					),
					n.createElement(
						J.tH,
						null,
						!!a &&
							n.createElement(Ve, {
								onClick: () => c.Settings("Storage"),
							}),
					),
					n.createElement(
						J.tH,
						null,
						!!a &&
							n.createElement(ze, {
								onClick: () => c.Settings("System"),
							}),
					),
					n.createElement(J.tH, null, n.createElement(Re, null)),
					n.createElement(J.tH, null, n.createElement(ke, null)),
					n.createElement(J.tH, null, !l && n.createElement(Le, null)),
				),
			n.createElement(J.tH, null, n.createElement(Xe, null)),
			!l &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(
						J.tH,
						null,
						n.createElement(Ze, {
							onClick: u,
						}),
					),
					n.createElement(J.tH, null, n.createElement(Oe, null)),
					n.createElement(J.tH, null, n.createElement(Ge, null)),
					n.createElement(J.tH, null, n.createElement(Fe, null)),
					n.createElement(J.tH, null, n.createElement(Ne, null)),
					n.createElement(
						J.tH,
						null,
						a &&
							!s &&
							n.createElement(We, {
								onClick: () => c.Chat(),
							}),
					),
					n.createElement(Qe, null),
					n.createElement(J.tH, null, n.createElement(Ke, null)),
					!s &&
						n.createElement(
							J.tH,
							null,
							a &&
								n.createElement(xe, {
									onClick: m,
								}),
							a &&
								n.createElement(Je, {
									onActivate: () => c.Account(),
								}),
						),
				),
		);
	} else {
		return null;
	}
});
function st(e) {
	const { quickAccessHeader: t, children: r } = e;
	const i = (0, U.we)();
	(function (e) {
		const t = (0, N.x)(e.m_Opacity, "useMinimumOpacitiesForLocation");
		const r = (0, N.x)(e.m_BackgroundOpacity, "useMinimumOpacitiesForLocation");
		const i = (0, D.OU)($e);
		const a = (0, D.OU)(et);
		n.useEffect(() => {
			const e = i ? 0 : 1;
			t.Set(e);
			const n = a ? 0 : 1;
			r.Set(n);
		}, [i, a, t, r]);
	})(i);
	const a = (0, N.x)(i.m_Opacity, "header gamepad focus");
	const s = (0, N.x)(i.m_BackgroundOpacity, "header gamepad focus");
	const l = (0, b.q3)(() => o.oy.GetShowingLockScreen());
	const c = n.useCallback(
		(e) => {
			if (e) {
				a.Set(1);
				s.Set(1);
			} else {
				a.Set(0);
				s.Set(0);
			}
		},
		[a, s],
	);
	const m = (0, N.x)(i.m_Opacity, "header gamepad hover");
	let u = (function (e) {
		return (0, k.gc)(e.m_Opacity.SubscribableValue);
	})(i);
	let d = (function () {
		const e = (0, U.we)();
		return (0, k.gc)(e.m_BackgroundOpacity.SubscribableValue);
	})();
	if (t || l) {
		u = 1;
		d = 0;
	}
	if ((0, W.rP)().IN_VR) {
		u = 1;
		d = 1;
	}
	if ((0, b.q3)(() => i.m_nNumTabbedPagesActingAsHeaderBackground) > 0) {
		d = 0;
	}
	const A = (0, S.W5)($e);
	const p = (0, D.OU)(tt);
	const g = UU();
	const h = (0, b.q3)(() => i.GetFlexGrowPriority());
	return n.createElement(
		w.Z,
		{
			childFocusDisabled: g,
			"flow-children": "row",
			id: "header",
			navEntryPreferPosition: B.iU.PREFERRED_CHILD,
			className: (0, M.A)(
				ue.Header,
				"GamepadMode",
				g && ue.SuppressInteraction,
				t && ue.InQuickAccess,
				A && ue.OverrideHeaderBackground,
				p && ue.HeaderOpaque,
				h,
			),
			style: {
				"--gamepadui-header-opacity": u,
				"--gamepadui-header-background-opacity": d,
			},
			onFocusWithin: c,
			onMouseEnter: () => m.Set(0),
			onMouseLeave: () => m.Set(0),
		},
		r,
	);
}
export function UU() {
	const e = (0, U.we)();
	const t = (0, k.gc)(e.m_bSuppressInteraction.SubscribableValue);
	return !(0, W.rP)().IN_VR && t;
}
export function ez(e, t) {
	const r = (0, U.we)();
	const i = (0, N.x)(r.m_bSuppressInteraction, t);
	n.useEffect(() => {
		i.Set(e);
	}, [e, i]);
}
export function iN() {
	const e = (0, U.we)();
	const t = (0, k.gc)(e.m_TitleText.SubscribableValue);
	return t || null;
}
export function Wh(e, t) {
	const r = (0, U.we)();
	const i = (0, N.x)(r.m_TitleText, t);
	n.useEffect(() => {
		i.Set(e);
	}, [e, i]);
}
export function Mi(e, t) {
	const r = (0, U.we)();
	const i = (0, N.x)(r.m_Opacity, t);
	n.useEffect(() => {
		i.Set(e);
	}, [e, i]);
}
export function c2(e, t) {
	const r = (0, U.we)();
	const i = (0, N.x)(r.m_BackgroundOpacity, t);
	n.useEffect(() => {
		i.Set(e);
	}, [e, i]);
}
export function iW(e = true, t) {
	Mi(e ? 1 : 0, t);
	c2(e ? 1 : 0, t);
}
export function Tc(e, t, r = true) {
	const i = (function (e, t = true) {
		const r = (0, U.we)();
		const i = (0, N.x)(r.m_Opacity);
		const a = (0, N.x)(r.m_BackgroundOpacity);
		return n.useCallback(
			(r) => {
				if (t) {
					const t = (0, R.OQ)(r / e, 0, 1);
					i.Set(1);
					a.Set(t);
				} else {
					i.Set(0);
					a.Set(0);
				}
			},
			[i, a, e, t],
		);
	})(t, r);
	const a = n.useCallback(() => {
		const t = e.current?.scrollTop;
		i(t);
	}, [i, e]);
	n.useEffect(a, [a]);
	(0, k.ML)(e, "scroll", a);
}
