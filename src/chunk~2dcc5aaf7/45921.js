var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./78325.js");
var a = require(/*webcrack:missing*/ "./85243.js");
var s = require("./12031.js");
var o = s;
var l = require("./67686.js");
var c = require("./35425.js");
var m = require(/*webcrack:missing*/ "./90765.js");
var u = require(/*webcrack:missing*/ "./69164.js");
var d = require("./35488.js");
var A = require("./31800.js");
var p = require(/*webcrack:missing*/ "./52451.js");
var g = require(/*webcrack:missing*/ "./31958.js");
var h = require("./23829.js");
var C = require("./70541.js");
var _ = require("./17034.js");
var f = require("./96680.js");
var b = require("./91369.js");
var y = require("./43397.js");
var S = require("./22969.js");
var w = require(/*webcrack:missing*/ "./84252.js");
var B = require(/*webcrack:missing*/ "./3524.js");
require("./46422.js");
var v = require("./55116.js");
var I = require("./33572.js");
var E = require("./60115.js");
var M = require(/*webcrack:missing*/ "./11131.js");
var T = require("./91486.js");
var R = require("./96593.js");
var k = require(/*webcrack:missing*/ "./10975.js");
var D = require(/*webcrack:missing*/ "./90095.js");
var N = require(/*webcrack:missing*/ "./41230.js");
import { Localize } from "../../actual_src/utils/localization.js";
var G = require("./64608.js");
var O = require("./38542.js");
var P = require("./93681.js");
var L = require(/*webcrack:missing*/ "./83599.js");
var z = require("./91745.js");
var x = require("./6023.js");
var U = require("./45967.js");
var W = require("./64004.js");
require(/*webcrack:missing*/ "./43691.js");
const V = Number.parseInt(o["vr-dashboard-bar-width"]);
const H = Number.parseInt(o["vr-dashboard-bar-height"]);
const j = (0, y.i_)(
	o["vrgamepadui-dashboard-bar-side-button-click-animation-duration"],
);
const q = new L.wd("VR");
export const dn = n.forwardRef(function (e, t) {
	const { active: r, tooltip: i, onActivate: a, ...s } = e;
	const [l, c] = n.useState(0);
	const d = n.useRef(undefined);
	const A = n.useRef(undefined);
	const h = e.onActivate != null || e.focusable;
	const C = n.useCallback(() => {
		window.clearTimeout(A.current);
		d.current?.classList.remove(o.ClickAnimation);
	}, []);
	const _ = n.useCallback(
		(e) => {
			C();
			if (h) {
				d.current?.classList.add(o.ClickAnimation);
				A.current = window.setTimeout(C, j);
				if (a) {
					a(e);
				}
			}
		},
		[C, h, a],
	);
	const f = n.useCallback((e) => {
		const t = e.contentBoxSize[0]?.inlineSize ?? 1;
		const r = e.contentBoxSize[0]?.blockSize ?? 1;
		c(t / r);
	}, []);
	const b = n.useCallback(
		(e) => {
			C();
		},
		[C],
	);
	const y = (0, p.wY)(f);
	const w = (0, g.bT)(l, 1, 1.5, 0, 1);
	const B = (0, S.V5)(i);
	const v = (0, p.Ue)(B, t, d);
	return n.createElement(
		u.Z,
		{
			...s,
			className: (0, m.A)(
				"VRDashboardBarItem",
				o.Item,
				h && o.Clickable,
				r && o.Active,
				s.className,
			),
			style: {
				...s.style,
				"--bar-item-padding-pct": w.toString(),
			},
			focusable: h,
			ref: v,
			onPointerDown: b,
			onClick: _,
		},
		n.createElement(
			"div",
			{
				className: o.Highlight,
			},
			n.createElement(
				"div",
				{
					className: o.Inner,
					ref: y,
				},
				s.children,
			),
		),
	);
});
const Z = n.memo(function (e) {
	const t = n.useRef(undefined);
	const r = n.useRef(undefined);
	const i = (0, I.K1)();
	const a = (0, E.on)();
	return n.createElement(
		w.B2,
		{
			ref: t,
			navID: "VRDashboardBarContainer",
			navTreeRef: r,
			className: o.DashboardBar,
			onCancelButton: i,
			onGlobalButtonDown: a,
		},
		n.createElement(
			v.g,
			null,
			n.createElement(
				"div",
				{
					className: (0, m.A)(o.SideSection, o.Left),
				},
				n.createElement(ge, null),
			),
			n.createElement(K, null),
			n.createElement(
				"div",
				{
					className: (0, m.A)(o.SideSection, o.Right),
				},
				n.createElement(A.rz, null),
			),
		),
	);
});
export function ML() {
	const e = (0, h.GU)(_.UQ);
	const t = e?.tabs ?? [];
	const r = t.find(
		(t) => t.tab_id == e?.vr_settings_tab_id && t.tab_id != null,
	)?.tab_id;
	const i = e?.vr_steam_tab_id ?? t.find((e) => e?.icon?.enum == 1)?.tab_id;
	const { rgTabsToShow: a, unTabToGoToOnParentTabClick: s } = (function (
		e,
		t,
		r,
		i,
	) {
		i = i ?? [];
		let a = (e = e ?? []).filter((e) => !i.includes(e.tab_id));
		const s = n.useRef(undefined);
		const o = s.current != null && e.find((e) => e.tab_id == s.current);
		for (const e of [r, ...i]) {
			if ((e == t || !o) && e != null) {
				s.current = e;
				break;
			}
		}
		const l = a.findIndex((e) => e.tab_id == r);
		if (l >= 0 && o) {
			a[l] = {
				...a[l],
				tab_id: s.current,
			};
		}
		return {
			rgTabsToShow: a,
			unTabToGoToOnParentTabClick: s.current,
		};
	})(t, e?.selected_tab_id, i, [r]);
	return {
		tabsProto: e,
		rgTabsToShow: a,
		bShowVRSettingsAsActiveInMainMenu: s == r && s != null,
	};
}
function K(e) {
	const t = (0, f.$2)();
	const { tabsProto: r, rgTabsToShow: i } = ML();
	const a = i.filter((e) => e.visible_in_dashboard_bar);
	const [s, l, c] = (0, p.uN)(r?.selected_tab_id, () => {}, 1000);
	const [d] = (0, z.Dw)(21);
	const A = (a.length == 0 && t?.IsVRSimulatedOnDesktopWindow()) || d;
	const g = !a.find((e) => e.icon?.enum === 1);
	const h = n.useCallback(
		(e) => {
			l(e);
			k.eZ.PlayNavSound(k.PN.PagedNavigation);
			b.p.SteamVR.DashboardTabClicked({
				tab_id: e,
			}).catch(c);
		},
		[l, c],
	);
	const {
		bScrolledToBeginning: C,
		bScrolledToEnd: _,
		ref: y,
	} = (0, p.aA)("horizontal");
	const S = n.useMemo(() => new Map(), []);
	n.useLayoutEffect(() => {
		const e = S.get(s)?.current;
		e?.scrollIntoView({
			inline: "nearest",
			behavior: "smooth",
		});
	}, [s, S]);
	return n.createElement(
		u.Z,
		{
			className: (0, m.A)(o.DockItems, !C && o.FadeLeft, !_ && o.FadeRight),
			ref: y,
		},
		a.map((e) => {
			return n.createElement($, {
				tab: e,
				selected: s == e.tab_id,
				onActivate: () => h(e.tab_id),
				key: e.tab_id,
				ref: ((t = e.tab_id), S.has(t) || S.set(t, n.createRef()), S.get(t)),
			});
			var t;
		}),
		A &&
			n.createElement(ee, {
				showSteam: g,
				showMany: d,
			}),
		n.createElement(Ae, null),
	);
}
function X(e) {
	switch (e.iconEnum) {
		case 0:
		default:
			return n.createElement(d.Question, null);
		case 1:
			return n.createElement(d.SteamLogo, {
				className: o.SteamSVG,
			});
		case 2:
			return n.createElement(d.Display, null);
		case 3:
			return n.createElement(d.Settings, null);
		case 4:
			return n.createElement(d.InGameVR, null);
		case 5:
			return n.createElement(ue, null);
	}
}
function J(e) {
	const [t, r] = n.useState(false);
	const [i, a] = n.useState(false);
	const [s, l] = n.useState(new Date().getTime());
	const [c, u] = n.useState(false);
	const d = (0, D.q3)(() =>
		e.icon?.appid ? R.tw.GetAppOverviewByAppID(e.icon.appid) : undefined,
	);
	const A = e.icon?.overlay;
	const p = n.useCallback(
		(e) => {
			if (e == A + ".thumb") {
				l((e) => e + 1);
			}
		},
		[A],
	);
	(0, O.e0)(p);
	if (e.icon?.hwnd && !t) {
		return n.createElement(
			"div",
			{
				className: (0, m.A)(o.Icon, o.HwndIcon),
			},
			n.createElement(de, {
				hwnd: e.icon.hwnd,
				onError: () => r(true),
			}),
		);
	} else if (A && !i) {
		return n.createElement(
			"div",
			{
				className: (0, m.A)(o.Icon, o.OverlayIcon),
			},
			n.createElement("img", {
				src: `https://steamloopback.host/overlays/thumbnail?key=${A}&cachebust=${s}`,
				onError: () => a(true),
			}),
		);
	} else if (e.icon?.appid && !c) {
		return n.createElement(
			"div",
			{
				className: (0, m.A)(o.Icon, o.AppIcon),
			},
			n.createElement(T.z, {
				app: d,
				eAssetType: 4,
				onError: () => u(true),
				neverShowTitle: true,
				allowCustomization: false,
			}),
		);
	} else {
		return n.createElement(
			"div",
			{
				className: (0, m.A)(o.Icon, o.EnumIcon),
			},
			n.createElement(X, {
				iconEnum: e.icon?.enum,
			}),
		);
	}
}
const $ = n.forwardRef(function (e, t) {
	const { tab: r, onActivate: i, selected: a } = e;
	const s = (0, S.V5)(r.display_name);
	const l = (0, p.Ue)(s, t);
	const c = n.useCallback(() => true, []);
	return n.createElement(
		u.Z,
		{
			ref: l,
			onActivate: i,
			fnScrollIntoViewHandler: c,
			focusable: true,
			className: (0, m.A)(o.DockItem, a && o.Selected),
		},
		n.createElement(J, {
			icon: r.icon,
		}),
	);
});
function ee(e) {
	const t = [];
	const r = e.showMany ? 4 : 1;
	for (let e = 0; e < r; e++) {
		t.push(
			n.createElement($, {
				key: "desktop" + e,
				tab: {
					tab_id: 1010 + e,
					display_name: r > 1 ? `Fake Desktop ${e + 1}` : "Fake Desktop",
					icon: {
						enum: 2,
					},
					visible_in_dashboard_bar: true,
				},
			}),
		);
	}
	const i = [];
	const a = e.showMany ? 2 : 0;
	for (let e = 0; e < a; e++) {
		i.push(
			n.createElement($, {
				key: "window" + e,
				tab: {
					tab_id: 1010 + e,
					display_name: r > 1 ? `Fake Window ${e + 1}` : "Fake Window",
					icon: {
						enum: 5,
					},
					visible_in_dashboard_bar: true,
				},
			}),
		);
	}
	return n.createElement(
		n.Fragment,
		null,
		e.showSteam &&
			n.createElement($, {
				selected: true,
				tab: {
					tab_id: 1000,
					display_name: "Fake Steam",
					icon: {
						enum: 1,
					},
					visible_in_dashboard_bar: true,
				},
			}),
		t,
		i,
	);
}
function te(e) {
	switch (e.icon?.enum) {
		case 0:
		default:
			return n.createElement(d.Question, null);
		case 10:
			return n.createElement(d.Exit, null);
		case 11:
			return n.createElement(d.Power, null);
		case 1:
			return n.createElement(d.FeatureVisible, null);
		case 2:
			return n.createElement(d.FeatureHidden, null);
		case 3:
			return n.createElement(d.Recenter, null);
		case 12:
			return n.createElement(d.Playspace, null);
		case 13:
			return n.createElement(d.FloorHeight, null);
	}
}
function re(e) {
	const { action: t, location: r, onActivate: i } = e;
	const a = t?.invocation;
	const s = t?.action_id;
	const o = n.useRef(undefined);
	o.current = i;
	const l = (0, f.$2)();
	const c = l?.IsVRSimulatedOnDesktopWindow();
	const [m, u, d] = (0, p.uN)(t?.active, () => {}, 1000);
	const A = n.useCallback(() => {
		const e = (e) => {
			if (!(e instanceof x.xn) || e.error?.error != 4 || !c) {
				d();
				throw e;
			}
		};
		switch (a) {
			case 3:
				break;
			case 1:
				if (o.current) {
					o.current();
				}
				b.p.SteamVR.DashboardActionInvoked({
					action_id: s,
				}).catch(e);
				break;
			case 2:
				const t = !m;
				u(t);
				if (o.current) {
					o.current(t);
				}
				b.p.SteamVR.DashboardActionInvoked({
					action_id: s,
					toggle_value: t,
				}).catch(e);
		}
		k.eZ.PlayNavSound(k.PN.BasicNav);
	}, [a, m, u, d, s, c]);
	let g = t.icon;
	if (a == 2 && m && t.icon_active != null) {
		g = t.icon_active;
	}
	if (
		(r == "bar" && !t?.visible_in_dashboard_bar) ||
		(r == "menu" && !t?.visible_in_menu)
	) {
		return null;
	}
	if (t?.enabled === false) {
		return null;
	}
	if (a == 3) {
		if (t.special_invocation === 1) {
			if (r == "bar") {
				return n.createElement(ie, null);
			} else {
				return null;
			}
		} else {
			console.warn(
				"Unknown or unimplemented special invocation for dashboard action:",
				t.special_invocation,
				t,
			);
			return null;
		}
	}
	switch (r) {
		case "bar":
			return n.createElement(
				dn,
				{
					onActivate: A,
					active: m,
					tooltip: t?.display_name,
				},
				n.createElement(te, {
					icon: g,
				}),
			);
		case "menu":
			return n.createElement(se, {
				active: m,
				key: t.action_id,
				icon: n.createElement(te, {
					icon: g,
				}),
				label: t.display_name,
				onActivate: A,
				bottomSeparator: "none",
			});
	}
}
function ne(e) {
	const { onActivate: t, children: r } = e;
	return n.createElement(
		u.Z,
		{
			onActivate: t,
			focusable: true,
			className: (0, m.A)(o.ClickableSliderIcon, !!t && o.Clickable),
		},
		r,
	);
}
const ie = (0, N.PA)(function (e) {
	const t = (0, f.$2)();
	const r = t?.IsVRSimulatedOnDesktopWindow();
	const [i, a] = (0, p.uN)(C.t.m_MainVolume, C.t.SetMainVolumeSettings);
	const [s, l] = (0, p.uN)(
		C.t.m_AudioMirrorVolume,
		C.t.SetAudioMirrorVolumeSettings,
	);
	const [c, u] = (0, p.uN)(
		C.t.m_MicrophoneVolume,
		C.t.SetMicrophoneVolumeSettings,
	);
	const A = i?.muted ? 0 : (i?.volume ?? 0);
	const g = s?.muted ? 0 : (s?.volume ?? 0);
	const h = c?.muted ? 0 : (c?.volume ?? 0);
	const _ = r || i.available;
	const b = r || s.available;
	const y = r || c.available;
	if (!_ && !b && !y) {
		return null;
	}
	let S;
	S = y ? "microphone" : b ? "audiomirror" : "main";
	return n.createElement(
		XO,
		{
			popupContents: n.createElement(
				"div",
				{
					className: (0, m.A)(o.DashboardBarPopupContents, o.VolumePopup),
				},
				_ &&
					n.createElement(G.d3, {
						label: (0, Localize)("#Audio_VRHeadset_Volume"),
						value: A,
						onChange: (e) =>
							a({
								...i,
								muted: false,
								volume: e,
							}),
						min: 0,
						max: 1,
						step: 0,
						childrenContainerWidth: "max",
						layout: "below",
						bottomSeparator: S == "main" ? "none" : "standard",
						icon: n.createElement(
							ne,
							{
								onActivate: () =>
									a({
										...i,
										muted: !i.muted,
									}),
							},
							n.createElement(d.AudioVolumeIcon, {
								flVolume: A,
							}),
						),
					}),
				b &&
					n.createElement(G.d3, {
						label: (0, Localize)("#Audio_VRAudioMirror_Volume"),
						value: g,
						onChange: (e) =>
							l({
								...s,
								muted: false,
								volume: e,
							}),
						min: 0,
						max: 1,
						step: 0,
						childrenContainerWidth: "max",
						layout: "below",
						padding: "standard",
						bottomSeparator: S == "audiomirror" ? "none" : "standard",
						icon: n.createElement(
							ne,
							{
								onActivate: () =>
									l({
										...s,
										muted: !s.muted,
									}),
							},
							n.createElement(d.AudioVolumeIcon, {
								flVolume: g,
							}),
						),
					}),
				y &&
					n.createElement(G.d3, {
						label: (0, Localize)("#Audio_VRMicrophone_Volume"),
						value: h,
						onChange: (e) =>
							u({
								...c,
								muted: false,
								volume: e,
							}),
						min: 0,
						max: 1,
						step: 0,
						childrenContainerWidth: "max",
						layout: "below",
						padding: "standard",
						bottomSeparator: S == "microphone" ? "none" : "standard",
						icon: n.createElement(
							ne,
							{
								onActivate: () =>
									u({
										...c,
										muted: !c.muted,
									}),
							},
							n.createElement(d.Microphone, {
								off: h == 0,
							}),
						),
					}),
			),
			tooltip: (0, Localize)("#Audio_Volume"),
		},
		n.createElement(d.AudioVolumeIcon, {
			flVolume: A,
		}),
	);
});
function ae(e) {
	const { bScrolledToBeginning: t, bScrolledToEnd: r, ref: i } = (0, p.aA)();
	return n.createElement(
		"div",
		{
			className: (0, m.A)(
				o.DashboardBarPopupContents,
				o.DashboardBarPopupList,
				!t && o.FadeTop,
				!r && o.FadeBottom,
			),
		},
		n.createElement(
			u.Z,
			{
				className: (0, m.A)(o.DashboardBarPopupListScrollPanel),
				ref: i,
			},
			e.children,
		),
	);
}
function se(e) {
	const { active: t, ...r } = e;
	const i = !!e.onActivate;
	const [a, s] = (0, p.OP)();
	return n.createElement(G.D0, {
		...s,
		...r,
		label: n.createElement(
			P.r,
			{
				delay: 0,
				play: a,
				resetOnPause: true,
			},
			e.label,
		),
		className: (0, m.A)(
			o.DashboardBarPopupListItem,
			i && o.Clickable,
			t && o.Active,
		),
	});
}
const oe = (0, N.PA)(function (e) {
	const { closeMenu: t } = e;
	const { rgTabsToShow: r, tabsProto: i } = ML();
	const a = r.filter((e) => e.visible_in_dashboard_menu);
	const s = n.useCallback(
		(e) => {
			k.eZ.PlayNavSound(k.PN.PagedNavigation);
			b.p.SteamVR.DashboardTabClicked({
				tab_id: e,
			});
			t?.();
		},
		[t],
	);
	return n.createElement(
		n.Fragment,
		null,
		a.map((e, t, r) =>
			n.createElement(se, {
				key: e.tab_id,
				icon: n.createElement(J, {
					icon: e.icon,
				}),
				label: e.display_name,
				onActivate: () => s(e.tab_id),
				active: e.tab_id === i.selected_tab_id,
				bottomSeparator: t == r.length - 1 ? "standard" : "none",
			}),
		),
	);
});
function le(e) {
	(0, W.dN)();
	return null;
}
function ce(e) {
	const { onClick: t } = e;
	const r = (0, O.ey)();
	const i = n.useCallback(() => {
		r();
		t?.();
	}, [r, t]);
	return n.createElement(se, {
		icon: n.createElement(d.Exit, null),
		label: (0, Localize)("#ExitVR"),
		onActivate: i,
		bottomSeparator: "none",
	});
}
const me = (0, N.PA)(function (e) {
	const t = pe();
	(0, U.ax)(5);
	const r = n.useRef(undefined);
	return n.createElement(
		XO,
		{
			popupContents: n.createElement(
				ae,
				null,
				e.menuTabs &&
					n.createElement(oe, {
						closeMenu: () => r.current?.closePopup(),
					}),
				e.directVRStreamingOption &&
					n.createElement(le, {
						onClick: () => r.current?.closePopup(),
					}),
				t
					.filter((t) => t.parent_menu_action_id === e.menuActionID)
					.map((e) =>
						n.createElement(re, {
							key: e.action_id,
							action: e,
							location: "menu",
							onActivate: () => {
								if (e.invocation == 1) {
									r.current?.closePopup();
								}
							},
						}),
					),
				e.powerOptions &&
					n.createElement(ce, {
						onClick: () => r.current?.closePopup(),
					}),
				e.powerOptions && false,
			),
			tooltip: e.tooltip,
			refFunctions: r,
		},
		e.icon,
	);
});
function ue(e) {
	return n.createElement(d.SingleWindowToggle, null);
}
function de(e) {
	const { hwnd: t, onError: r } = e;
	const [i, a] = n.useState(false);
	if (i) {
		return n.createElement(ue, null);
	} else {
		return n.createElement("img", {
			src: `https://steamloopback.host/windows/icon?handle=${t}`,
			onError: () => a(true),
		});
	}
}
const Ae = (0, N.PA)(function (e) {
	const t = n.useRef(undefined);
	const r = n.useCallback((e) => {
		b.p.SteamVR.DashboardDesktopWindowClicked({
			window_id: e?.window_id,
		})
			.then(() => t.current?.closePopup())
			.catch((e) => q.Error("Failed to open VR desktop window:", e));
	}, []);
	const i = (function () {
		const e = (0, f.$2)();
		const t = (0, h.GU)(_.J$) ?? {};
		const r = t?.windows ?? [];
		if (r.length == 0 && e?.IsVRSimulatedOnDesktopWindow()) {
			const e = [
				"Example window",
				"Another example window",
				"This window has a longer title for marquee testing",
				"Yet another example",
				"So many example windows",
				"Test 1 2",
				"Test 1 2: Episode 2",
				"Hello world!",
			];
			for (let t = 0; t < 35; t++) {
				r.push({
					hwnd: t,
					window_id: t,
					title: e[t % e.length],
				});
			}
		}
		return r;
	})();
	if (i.length == 0) {
		return null;
	} else {
		return n.createElement(
			XO,
			{
				className: o.AddWindowButton,
				refFunctions: t,
				popupContents: n.createElement(
					ae,
					null,
					i.map((e, t) =>
						n.createElement(se, {
							key: e.window_id,
							icon: n.createElement(
								"div",
								{
									className: (0, m.A)(o.Icon, o.HwndIcon),
								},
								n.createElement(de, {
									hwnd: e.hwnd,
								}),
							),
							label: e.title,
							onActivate: () => r(e),
							bottomSeparator: t < i.length - 1 ? "standard" : "none",
						}),
					),
				),
				tooltip: (0, Localize)("#VRDashboard_AddDesktopWindow"),
			},
			n.createElement(d.Add, null),
		);
	}
});
function pe() {
	const e = (0, h.GU)(_.$1);
	const t = e?.actions ?? [];
	const r = (0, f.$2)();
	if (e == null && r?.IsVRSimulatedOnDesktopWindow()) {
		t.push({
			action_id: -1100,
			icon: {
				enum: 3,
			},
			invocation: 1,
			display_name: "Fake Recenter",
			visible_in_dashboard_bar: true,
		});
		t.push({
			action_id: -1101,
			icon: {
				enum: 1,
			},
			icon_active: {
				enum: 2,
			},
			invocation: 2,
			display_name: "Fake Room View",
			visible_in_dashboard_bar: true,
		});
	}
	if (!t.find((e) => e.special_invocation == 1)) {
		t.push({
			action_id: -1000,
			invocation: 3,
			special_invocation: 1,
			visible_in_dashboard_bar: true,
		});
	}
	{
		const e = t.find((e) => e.special_invocation == 1);
		if (e.visible_in_dashboard_bar === undefined) {
			e.visible_in_dashboard_bar = true;
		}
	}
	return t;
}
function ge(e) {
	const t = pe();
	let r = [];
	r.push(
		n.createElement(me, {
			key: "mainmenu",
			tooltip: (0, Localize)("#OptionsMenuVR"),
			directVRStreamingOption: true,
			powerOptions: true,
			menuActionID: undefined,
			icon: n.createElement(d.Rows, null),
			menuTabs: true,
		}),
	);
	for (const e of t) {
		if (e.is_menu) {
			r.push(
				n.createElement(me, {
					key: e.action_id,
					tooltip: e.display_name,
					menuActionID: e.action_id,
					icon: n.createElement(te, {
						icon: e.icon,
					}),
				}),
			);
		} else {
			r.push(
				n.createElement(re, {
					action: e,
					key: e.action_id,
					location: "bar",
				}),
			);
		}
	}
	return n.createElement(
		"div",
		{
			className: o.SideSectionInner,
		},
		r,
	);
}
const he = n.forwardRef(function (e, t) {
	const { children: r, elemButton: a, onClosed: s } = e;
	const o = n.useCallback(
		(e) => {
			switch (e) {
				case 2:
				case 3:
					s?.();
			}
		},
		[s],
	);
	const l = M.Of?.GetPopupForWindow(a?.ownerDocument?.defaultView);
	const c = l?.params?.strVROverlayKey;
	const m = n.useMemo(
		() =>
			(function (e) {
				if (e?.getBoundingClientRect == null) {
					return;
				}
				const t = e.getBoundingClientRect();
				return (
					((t.left + t.right) / 2 / e.ownerDocument.defaultView.innerWidth) *
						2 -
					1
				);
			})(a) ?? 0,
		[a],
	);
	const { element: u, methods: d } = (0, S.Xy)(
		S.b7.DashboardBarPopup,
		{
			parent_overlay_key: c,
			interactive: true,
			inherit_parent_curvature: true,
			inherit_parent_pitch: false,
			origin_on_popup: {
				x: 0,
				y: -1,
			},
			origin_on_parent: {
				x: m,
				y: 1,
			},
			offset: {
				y_pixels: 25,
			},
		},
		{
			onStateChange: o,
		},
	);
	const A = d.close;
	const g = n.useCallback(
		(e) => {
			if (!e) {
				A();
			}
		},
		[A],
	);
	(0, O.oH)(u?.ownerDocument?.defaultView, g);
	n.useLayoutEffect(() => (0, p.cZ)(t, u), [t, u]);
	if (u) {
		return n.createElement(
			B.b5,
			{
				ownerWindow: u.ownerDocument.defaultView,
			},
			i.createPortal(
				n.createElement(
					w.B2,
					{
						navID: "VRDashboardBarPopup",
					},
					r,
				),
				u,
			),
		);
	} else {
		return null;
	}
});
const Ce = 4000;
export function XO(e) {
	const { popupContents: t, refFunctions: r, ...i } = e;
	n.useRef(undefined).current = e;
	const [a, s] = n.useState(false);
	const [o, l] = n.useState();
	const c = n.useRef(undefined);
	const m = n.useRef(false);
	const u = n.useRef(false);
	const d = n.useRef(true);
	n.useEffect(() => {
		if (d.current) {
			d.current = false;
		} else {
			k.eZ.PlayNavSound(a ? k.PN.OpenSideMenu : k.PN.CloseSideMenu);
		}
	}, [a]);
	const A = n.useCallback(() => s(true), []);
	const g = n.useCallback(() => s(false), []);
	const h = n.useCallback(() => s((e) => !e), []);
	const C = n.useCallback(() => {
		window.clearTimeout(c.current);
		c.current = undefined;
	}, []);
	const _ = n.useCallback(() => {
		if (c.current == null) {
			c.current = window.setTimeout(g, Ce);
		}
	}, [g]);
	const f = n.useCallback(() => {
		if (m.current || u.current) {
			C();
		} else {
			_();
		}
	}, [C, _]);
	const b = n.useCallback(() => {
		m.current = true;
		f();
	}, [f]);
	const y = n.useCallback(() => {
		m.current = false;
		f();
	}, [f]);
	const S = n.useCallback(
		(e) => {
			e.target.setPointerCapture?.(e.pointerId);
			u.current = true;
			f();
		},
		[f],
	);
	const w = n.useCallback(
		(e) => {
			e.target.releasePointerCapture?.(e.pointerId);
			u.current = false;
			f();
		},
		[f],
	);
	n.useEffect(() => () => window.clearTimeout(c.current), []);
	const B = [(0, p.xA)("mouseenter", b), (0, p.xA)("mouseleave", y)];
	const v = [
		(0, p.xA)("mouseenter", b),
		(0, p.xA)("mouseleave", y),
		(0, p.xA)("pointerdown", S),
		(0, p.xA)("pointerup", w),
	];
	const I = (0, p.Ue)(l, ...B);
	const E = (0, p.Ue)(...v);
	const M = n.useMemo(
		() => ({
			openPopup: A,
			closePopup: g,
		}),
		[A, g],
	);
	(0, p.D5)(r, M);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(dn, {
			...i,
			ref: I,
			active: a,
			onActivate: h,
			focusable: true,
		}),
		a &&
			o != null &&
			n.createElement(
				he,
				{
					ref: E,
					elemButton: o,
					onClosed: g,
				},
				t,
			),
	);
}
export function iG(e) {
	const { popup: t, element: r } = (0, l.WR)("VRDashboardBar", {
		browserType: a.W.EBrowserType_OpenVROverlay,
		eCreationFlags: 0,
		strVROverlayKey: c.rn,
		title: "SteamVR - Dashboard Bar",
		dimensions: {
			width: V,
			height: H,
			left: 0,
			top: 0,
		},
		replace_existing_popup: true,
	});
	if (r) {
		return n.createElement(
			B.b5,
			{
				ownerWindow: t,
			},
			i.createPortal(
				n.createElement(Z, {
					...e,
				}),
				r,
			),
		);
	} else {
		return null;
	}
}
