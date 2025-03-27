import {
	Localize,
	LocalizeDateHumanReadable,
} from "../../actual_src/utils/localization.js";
import { GetUnixTime } from "../../actual_src/utils/time.js";
import n from "./63696.js";
import i, { Qf } from "./32700.js";
import a, { bG } from "./18057.js";
import s, { $ as $_1, S as S_1 } from "./6232.js";
import o, { Eb } from "./46422.js";
import l, { $ as $_1, db } from "./77347.js";
import c, { gf } from "./24496.js";
import m, { C2 } from "./89411.js";
import u from "./81661.js";
import d, { zM, B7, MD } from "./97893.js";
import A, { LK } from "./48289.js";
import p, { Tr } from "./74416.js";
import g, { Wf, oA, Wp } from "./5640.js";
import h, { e_ as e } from "./34792.js";
import { Wx, qw } from "./89748.js";
import { Co } from "./96593.js";
import f from "./91486.js";
import { q3 } from "./90095.js";
import { PA } from "./41230.js";
import S, { W6, B6, W5 } from "./49519.js";
import w from "./69164.js";
import B from "./4690.js";
import { rO } from "./88724.js";
import I from "./17231.js";
import E from "./35488.js";
import { A as A_2 } from "./90765.js";
import { OQ } from "./31958.js";
import { gc, hL, Ue as Ue_2, xx, ML } from "./52451.js";
import { OU } from "./51076.js";
import { x as x_2 } from "./6242.js";
import G from "./61651.js";
import P from "./90242.js";
import { dM } from "./31319.js";
import z from "./75248.js";
import x, { K1 } from "./91703.js";
import U, { we, oH } from "./33572.js";
import { rP } from "./72476.js";
import j from "./99731.js";
import q from "./23741.js";
import { Qc, FA } from "./87546.js";
import { o2, wm } from "./87913.js";
import J from "./42318.js";
import $, { P7 } from "./27710.js";
import ee, { uT } from "./5822.js";
import { k1 } from "./13688.js";
import { tn } from "./18869.js";
import ne from "./98393.js";
import ae from "./61657.js";
import { HJ, Fq, dx, Zy } from "./45967.js";
import oe from "./10975.js";
import { j as j_2 } from "./53379.js";
import me from "./30557.js";
import de from "./12031.js";
import { Xm } from "./60917.js";
import ge from "./16251.js";
import he from "./45921.js";
import { l8 } from "./79476.js";
import { $2 } from "./96680.js";
import { VA, fK } from "./10294.js";
import { bg } from "./68292.js";
import ye from "./72858.js";
import Se, { I as I_2 } from "./91325.js";
const O = G;
function V(e) {
	let t = dM();
	if (e.forceExpanded) {
		t = "show-expanded";
	}
	const r = iN();
	const i = r != null;
	const s = t == "show-expanded";
	const o = t != "hidden" && !i;
	const l = OU(a.BV.GamepadUI.AppRunning());
	const c = K1();
	const m = we();
	const u = n.useCallback(
		(e) => {
			m.SetUniversalSearchFocused(e);
			if (e) {
				c();
			}
		},
		[m, c],
	);
	const d = rP();
	if (l && m.GetForceHeaderAfterResume()) {
		return null;
	}
	const A = A_2(
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
	const i = OU(a.BV.GamepadUI.Search.Root());
	let s = gc(z.U.GetSearchText());
	if (!i) {
		s = "";
	}
	const o = n.useRef(undefined);
	const l = A_2(O.SearchBox, O.Visible);
	const c = we();
	const m = (() => {
		let e = W6();
		return n.useCallback(() => {
			if (
				!B6(e.location.pathname, {
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
	((e, t, r) => {
		let i = n.useCallback(() => {
			t();
			r.current.focus();
			r.current.click();
		}, [t, r]);
		hL(e.m_ActivateSearchBoxCallbackList, i);
	})(c, m, o);
	const A = s.length > 0;
	const p = t || A || A || i;
	const g = n.useCallback(() => {
		c.OnAcceptSearchText();
		return "VKClose";
	}, [c]);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement("div", {
			className: A_2(O.SearchFieldBackground, p && O.WhiteBackground),
		}),
		n.createElement(E.Search, {
			className: A_2(O.SearchIconLeft, p && O.WhiteBackground),
			width: "24px",
			height: "24px",
		}),
		n.createElement(P.BA, {
			ref: o,
			className: A_2(l, p && O.WhiteBackground),
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
			className: A_2(O.SearchIconRight, p && O.WhiteBackground),
			width: "24px",
			height: "24px",
		}),
	);
}
const Q = q;
function Z() {
	const e = we();
	const { browser: t } = q3(() => e.GetCurrentBrowserAndBackstack());
	return t != null;
}
function Y(e) {
	const t = we();
	const {
		browser: r,
		bExternal: i,
		bCanEditURL: a,
	} = q3(() => t.GetCurrentBrowserAndBackstack());
	if (r) {
		return n.createElement(
			w.Z,
			{
				className: A_2(Q.HeaderBrowser),
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
const ie = ne;
function ce(e) {
	const { className: t } = e;
	const r = n.useCallback((e) => {
		o.oy.NavigationManager.DispatchVirtualButtonClick(ae.pR.CANCEL);
		oe.eZ.PlayNavSound(oe.PN.HideModal);
		e.preventDefault();
		e.stopPropagation();
	}, []);
	const i = HJ(2);
	const a = {
		onClick: r,
	};
	const s = j_2(a);
	const l = Ue_2(i, s);
	return n.createElement(
		"div",
		{
			className: A_2(t, ie.BackContainer),
			ref: l,
			onMouseDown: (e) => e.preventDefault(),
			...a,
		},
		n.createElement(E.Arrow, {
			direction: "left",
			className: A_2(ie.ArrowBack),
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
const ue = me;
const Ae = de;
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
	const [t] = e("b24HourClock");
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
				display: i || "none",
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
				className: A_2(ue.HeaderItem, i && ue.Clickable, e.className),
			},
			e.children,
		);
	}
}
const Ee = (e) =>
	n.createElement(E.FamilySharing, {
		className: A_2(ue.FamilyView, e.bLocked && ue.Locked),
	});
const Me = (e) =>
	n.createElement(E.Lock, {
		locked: e.bLocked,
		className: A_2(ue.KioskMode, e.bLocked && ue.Locked),
	});
const Te = (e) => {
	const { icon: t, strength: r } = e;
	switch (t) {
		case 2: {
			return n.createElement(E.WirelessConnectingActive, null);
		}
		case 6: {
			return n.createElement(E.WirelessNetwork, {
				strength: r,
			});
		}
		case 4: {
			return n.createElement(E.WirelessNetworkWarning, {
				strength: r,
			});
		}
		case 7: {
			return n.createElement(E.WirelessDisabled, null);
		}
		case 1: {
			return n.createElement(E.WirelessOfflineMode, null);
		}
		case 5: {
			return n.createElement(E.WiredNetwork, null);
		}
		case 3: {
			return n.createElement(E.WiredNetworkWarning, null);
		}
		default: {
			return null;
		}
	}
};
function Re() {
	const e = Wf();
	const t = oA();
	const r = Wp();
	const i = r ? 1 : 2;
	const o = $2();
	const l = bG("FamilyManagement");
	const c = (0, Localize)(t ? "#FamilyView_Unlock" : "#FamilyView_Lock");
	if (e) {
		return n.createElement(
			Ie,
			{
				className: ue.FamilyViewIcon,
				onActivate: r
					? () => {
							if (t) {
								$_1(o?.BrowserWindow ?? window, i);
							} else {
								S_1(o?.BrowserWindow ?? window, i);
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
	const e = VA();
	const t = fK();
	const r = $2();
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
						$_1(r?.BrowserWindow ?? window, 4);
					} else {
						S_1(r?.BrowserWindow ?? window, 4);
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
						className: A_2(
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
	const e = Eb();
	const t = k1();
	const { icon: r, strength: i, ssid: a } = $_1();
	if (n.useContext(rt).bVRDashboardBar) {
		switch (r) {
			case 1:
			case 4:
			case 3: {
				break;
			}
			case 2:
			case 6:
			case 7:
			case 5:
			case 0: {
				return null;
			}
		}
	}
	if (r == 0) {
		return null;
	} else {
		return n.createElement(
			Ie,
			{
				className: ue.WirelessIcon,
				onActivate: e || (() => t.Settings("Internet")),
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
	const [e, t, r] = I_2();
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
	const t = db();
	const r = k1();
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
		className: A_2(ue.Download),
	});
const Le = () => {
	const [e, t] = n.useState();
	const r = zM();
	const i = r?.update_appid;
	n.useEffect(() => {
		if (!i) {
			return;
		}
		const e = window.setTimeout(() => t(i), 10);
		return () => window.clearTimeout(e);
	}, [i]);
	const s = Co(i);
	const o = tn(a.BV.Downloads());
	const l = B7();
	if (!s) {
		return null;
	}
	const c = MD(r);
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
				className: A_2(ue.HeaderDownloadContainer, !m && ue.NewAppDownloading),
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
							width: `${c}%`,
						},
					}),
				),
			),
		),
	);
};
function ze(e) {
	const t = C2();
	const r = P7();
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
	const r = A_2(
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
	const a = A_2(
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
	const t = A_2(ue.HeaderItem, ue.UnreadChatMessages);
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
	if (gf()) {
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
	const t = gc(h.rV.GetBatteryPreferences());
	const r = rP();
	if (!e.state.bHasBattery) {
		return null;
	}
	const i = e.sayFull ?? e.state.eBatteryState == 3;
	const a = isFinite(e.state.flLevel)
		? `${Math.min(Math.round(e.state.flLevel * 100), 99)}%`
		: "";
	const s = e.allowPercent && t.bShowBatteryPercentage;
	const o = r.IN_VR;
	return n.createElement(
		Ie,
		{
			className: A_2(ue.BatteryIcon, o && ue.VR),
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
	const t = Qc();
	const r = FA();
	if (rP().IN_VR) {
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
	const t = Fq(e.devicePath);
	const r = dx(e.devicePath, ge.fD.DeviceProvidesBatteryStatus_Bool);
	const i = Zy(e.devicePath, ge.fD.DeviceBatteryPercentage_Float);
	const a = xx(i, 0.02);
	const s = dx(e.devicePath, ge.fD.DeviceIsCharging_Bool);
	const o = a == 1;
	const l = $2();
	const c = l?.IsVRSimulatedOnDesktopWindow() && (!t || !r);
	const m = e.devicePath == "/user/hand/left";
	if ((!t || !r || !r || i == null) && !c) {
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
	const t = uT(ee.qE.Perf);
	const r = rP();
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
	if (Xm()) {
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
	const r = Xm();
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
	const t = (() => {
		const e = j1();
		return LocalizeDateHumanReadable(e.valueOf() / 1000, true, false);
	})();
	const r = n.useContext(rt);
	return n.createElement(
		Ie,
		{
			className: A_2(ue.Clock, r.bVRDashboardBar && ue.DashboardBar),
			vrTooltip: t,
		},
		e,
	);
}
function Xe() {
	const e = q3(() => h.rV.settings?.bIsSteamSideload);
	const t = k1();
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
const Je = PA((e) => {
	let t = null;
	const r = Wx();
	const i = qw().GetServicesInitialized();
	const a = LK();
	if (r && i) {
		t = bg().self;
	}
	let s = Tr();
	const o = q3(() => qw().BHasActiveSupportAlerts());
	const l = o2();
	const c = wm();
	if (!t) {
		return null;
	}
	let m = s?.animated_avatar;
	let u = s?.avatar_frame;
	let d = rO(t?.persona);
	let g = {};
	if (c && l != 1) {
		let e = 100;
		let t = 3.2;
		let r = Math.min(l * t, 1);
		let n = Math.max(0, e * r);
		n = Math.round(n * 10) / 10;
		g.height = `${n}%`;
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
				className: A_2(ue.CurrentUserAvatar, d),
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
export const YF = n.memo((e) => {
	Qf();
	const t = q3(() => qw().BHasActiveSupportAlerts());
	const r = Wx();
	const a = q3(() => o.oy.GetShowingLockScreen());
	const s = k1();
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
export const rz = n.memo((e) => {
	Qf();
	const t = oH();
	const r = Wx();
	const a = q3(() => o.oy.GetShowingLockScreen());
	const s = t.mode == U._5.ControllerConfigurator && t.forcedAppID != 0;
	const l = k1();
	const c = uT(ee.qE.VoiceChat);
	const m = l8();
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
export const Y9 = n.memo((e) => {
	let t = e.quickAccessHeader;
	Qf();
	const r = oH();
	const a = Wx();
	const s = q3(() => o.oy.GetShowingLockScreen());
	const l = r.mode == U._5.ControllerConfigurator && r.forcedAppID != 0;
	const c = k1();
	const m = uT(ee.qE.VoiceChat);
	const u = uT(ee.qE.Notifications);
	const d = Z();
	const A = we();
	if (q3(() => (t ? e.visible : A.BShowHeader()))) {
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
	const i = we();
	((e) => {
		const t = x_2(e.m_Opacity, "useMinimumOpacitiesForLocation");
		const r = x_2(e.m_BackgroundOpacity, "useMinimumOpacitiesForLocation");
		const i = OU($e);
		const a = OU(et);
		n.useEffect(() => {
			const e = i ? 0 : 1;
			t.Set(e);
			const n = a ? 0 : 1;
			r.Set(n);
		}, [i, a, t, r]);
	})(i);
	const a = x_2(i.m_Opacity, "header gamepad focus");
	const s = x_2(i.m_BackgroundOpacity, "header gamepad focus");
	const l = q3(() => o.oy.GetShowingLockScreen());
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
	const m = x_2(i.m_Opacity, "header gamepad hover");
	let u = ((e) => gc(e.m_Opacity.SubscribableValue))(i);
	let d = (() => {
		const e = we();
		return gc(e.m_BackgroundOpacity.SubscribableValue);
	})();
	if (t || l) {
		u = 1;
		d = 0;
	}
	if (rP().IN_VR) {
		u = 1;
		d = 1;
	}
	if (q3(() => i.m_nNumTabbedPagesActingAsHeaderBackground) > 0) {
		d = 0;
	}
	const A = W5($e);
	const p = OU(tt);
	const g = UU();
	const h = q3(() => i.GetFlexGrowPriority());
	return n.createElement(
		w.Z,
		{
			childFocusDisabled: g,
			"flow-children": "row",
			id: "header",
			navEntryPreferPosition: B.iU.PREFERRED_CHILD,
			className: A_2(
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
	const e = we();
	const t = gc(e.m_bSuppressInteraction.SubscribableValue);
	return !rP().IN_VR && t;
}
export function ez(e, t) {
	const r = we();
	const i = x_2(r.m_bSuppressInteraction, t);
	n.useEffect(() => {
		i.Set(e);
	}, [e, i]);
}
export function iN() {
	const e = we();
	const t = gc(e.m_TitleText.SubscribableValue);
	return t || null;
}
export function Wh(e, t) {
	const r = we();
	const i = x_2(r.m_TitleText, t);
	n.useEffect(() => {
		i.Set(e);
	}, [e, i]);
}
export function Mi(e, t) {
	const r = we();
	const i = x_2(r.m_Opacity, t);
	n.useEffect(() => {
		i.Set(e);
	}, [e, i]);
}
export function c2(e, t) {
	const r = we();
	const i = x_2(r.m_BackgroundOpacity, t);
	n.useEffect(() => {
		i.Set(e);
	}, [e, i]);
}
export function iW(e = true, t) {
	Mi(e ? 1 : 0, t);
	c2(e ? 1 : 0, t);
}
export function Tc(e, t, r = true) {
	const i = ((e, t = true) => {
		const r = we();
		const i = x_2(r.m_Opacity);
		const a = x_2(r.m_BackgroundOpacity);
		return n.useCallback(
			(r) => {
				if (t) {
					const t = OQ(r / e, 0, 1);
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
	ML(e, "scroll", a);
}
