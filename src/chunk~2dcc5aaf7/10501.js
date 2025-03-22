var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./85243.js");
var a = require("./34792.js");
var s = require("./46422.js");
var o = require("./96680.js");
var l = require(/*webcrack:missing*/ "./44846.js");
var c = require("./18914.js");
var m = require("./33572.js");
var _u = require(/*webcrack:missing*/ "./78325.js");
var d = require(/*webcrack:missing*/ "./46108.js");
var A = require(/*webcrack:missing*/ "./72476.js");
var p = require(/*webcrack:missing*/ "./43691.js");
var g = require("./72636.js");
var h = require("./60353.js");
var C = require("./18057.js");
function _(e) {
	const { cm: t, instance: r } = e;
	const { appid: a, strAppName: o } = r.params;
	let _ = i.W.EBrowserType_DirectHWND_Borderless;
	let f = {
		width: 1280,
		height: 800,
		left: 0,
		top: 0,
	};
	if (!p.TS.ON_DECK || !(0, A.CI)()) {
		f.left = h.Mb;
		f.top = h.Mb;
		_ = i.W.EBrowserType_DirectHWND;
	}
	let b = {
		onClose: () =>
			SteamClient.Overlay.DestroyGamePadUIDesktopConfiguratorWindow(),
		onResize: (e, t) => {
			s.oy.SetConfiguratorWidth(e.outerWidth);
		},
	};
	const { popup: y, element: S } = (0, h._Y)(
		"SP Controller Configurator",
		r,
		h.Uv.GamepadUI,
		{
			title: (0, d.we)("#SP_WindowTitle_Configurator", o),
			dimensions: f,
			replace_existing_popup: false,
			target_browser: r.params.browserInfo,
			browserType: _,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		b,
	);
	n.useEffect(() => {
		y?.SteamClient.Window.SetMinSize(800, 650);
	}, [y]);
	const w = n.useMemo(
		() =>
			a == l.mZ
				? [
						C.BV.GamepadUI.ControllerConfigurator.Standalone(),
						s.oy.StandaloneConfiguratorURL,
					]
				: [
						C.BV.GamepadUI.ControllerConfigurator.Standalone(),
						C.BV.GamepadUI.ControllerConfigurator.Main(a),
					],
		[a],
	);
	if (S) {
		return _u.createPortal(
			n.createElement(
				g.O,
				{
					ownerWindow: y,
					instance: e.instance,
				},
				n.createElement(
					C.NM,
					{
						initialEntries: w,
						initialIndex: 1,
					},
					n.createElement(c.Is, {
						cm: t,
						mode: m._5.ControllerConfigurator,
						forcedAppID: a,
					}),
				),
			),
			S,
		);
	} else {
		return null;
	}
}
var f = require(/*webcrack:missing*/ "./85688.js");
var b = require("./85175.js");
var y = require("./26326.js");
var S = require(/*webcrack:missing*/ "./11131.js");
var _w = require(/*webcrack:missing*/ "./67808.js");
var B = require(/*webcrack:missing*/ "./42318.js");
var v = require(/*webcrack:missing*/ "./91435.js");
function I(e) {
	const { cm: t, instance: r } = e;
	i.W.EBrowserType_DirectHWND_Borderless;
	let a = {
		width: 705,
		height: 440,
		left: h.Mb,
		top: h.Mb,
	};
	let l = (0, d.we)("#SignIn_Title");
	let c = n.useRef(false);
	const m = p.TS.SILENT_STARTUP;
	const g = S.Wf.ApplyBrowserScaleToDimensions | (m ? S.Wf.Hidden : 0);
	const { popup: C, element: _ } = (0, h._Y)(
		"SP DesktopLoginWindow",
		r,
		h.Uv.DesktopUI,
		{
			title: l,
			dimensions: a,
			replace_existing_popup: false,
			target_browser: r.params.browserInfo,
			eCreationFlags: g,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		{
			onClose: (e, t) => {
				const r = !S.Of.BShuttingDown();
				if (!c.current && r) {
					SteamClient.User?.StartShutdown(true);
				}
			},
		},
	);
	(0, f.w)(
		s.oy.MainInstanceUIMode != 4,
		"DesktopUI windows should only ever be present when the main instance's UI mode is desktop",
	);
	if (_ && s.oy.MainInstanceUIMode != 4) {
		return _u.createPortal(
			n.createElement(
				A.ss,
				{
					IN_DESKTOPUI: true,
					IN_GAMEPADUI: false,
					IN_VR: false,
				},
				n.createElement(
					_w.p,
					{
						body_class: h.a$,
					},
					n.createElement(
						S.kc,
						{
							ownerWindow: C,
						},
						n.createElement(
							o.ER,
							{
								instance: r,
							},
							n.createElement(
								v.EO,
								null,
								n.createElement(
									B.tH,
									null,
									n.createElement(
										b.FQ,
										{
											webNavigationsUseSteamURL: true,
										},
										n.createElement(y.FullLogin, {
											cm: t,
											popup: C,
											includeTitleBar: true,
											bHiddenWindow: m,
											onLoginComplete: () => {
												c.current = true;
											},
										}),
									),
								),
							),
						),
					),
				),
			),
			_,
		);
	} else {
		return null;
	}
}
var E = require("./40361.js");
var M = require("./51582.js");
const T = n.memo(function (e) {
	const { children: t } = e;
	const r = n.useContext(o.mA).params;
	let i = r.browserInfo.m_unAppID;
	let a = r.browserInfo.m_unPID;
	const s = n.useMemo(() => [C.BV.GamepadUI.AppRunning()], []);
	return n.createElement(
		C.m_,
		{
			appid: i,
			pid: a,
			initialEntries: s,
			initialIndex: 0,
		},
		t,
	);
});
var R = require(/*webcrack:missing*/ "./89193.js");
function k(e) {
	const { cm: t, instance: r } = e;
	const a = r.params;
	const s = i.W.EBrowserType_OffScreen;
	const l = {
		width: a.nScreenWidth,
		height: a.nScreenHeight,
		left: 0,
		top: 0,
	};
	const c = r.params.browserInfo;
	const { popup: m, element: d } = (0, h._Y)(
		"overlay",
		r,
		h.Uv.DesktopUI,
		{
			title:
				"SP Overlay: " +
				c.m_unPID +
				"/" +
				+c.m_nBrowserID +
				"/" +
				+c.m_eBrowserType,
			dimensions: l,
			replace_existing_popup: false,
			target_browser: c,
			eCreationFlags: S.Wf.Composited | S.Wf.ApplyBrowserScaleToDimensions,
			browserType: s,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		{},
	);
	const p = n.useMemo(
		() => ({
			IN_GAMEPADUI: false,
			IN_DESKTOPUI: true,
			IN_VR: false,
		}),
		[],
	);
	n.useEffect(() => {
		if (m) {
			m.ConfigContext = p;
		}
	}, [m, p]);
	const [g, C] = n.useState(a.nScreenWidth);
	const [_, f] = n.useState(a.nScreenHeight);
	n.useEffect(
		() =>
			(0, R.fm)(() => {
				m?.SteamClient.Window.ResizeTo(a.nScreenWidth, a.nScreenHeight, true);
				C(a.nScreenWidth);
				f(a.nScreenHeight);
			}),
		[m, a],
	);
	if (d) {
		return _u.createPortal(
			n.createElement(
				A.ss,
				{
					...p,
				},
				n.createElement(
					_w.p,
					{
						body_class: h.a$,
					},
					n.createElement(
						o.ER,
						{
							instance: r,
						},
						n.createElement(
							T,
							null,
							n.createElement(
								S.kc,
								{
									ownerWindow: m,
								},
								n.createElement(
									B.tH,
									null,
									n.createElement(
										E.zA,
										null,
										n.createElement(M.$i, {
											gameid: a.gameid,
											width: g,
											height: _,
										}),
									),
								),
							),
						),
					),
				),
			),
			d,
		);
	} else {
		return null;
	}
}
var D = require("./75085.js");
var N = require("./89748.js");
var F = require("./46085.js");
var G = require(/*webcrack:missing*/ "./90095.js");
var O = require(/*webcrack:missing*/ "./63439.js");
var P = require(/*webcrack:missing*/ "./42898.js");
function L(e) {
	const t = (0, G.q3)(() => (0, N.qw)().LoginState);
	const r = (0, G.q3)(() => e.BIsGamepadApplicationUIInitialized());
	const [i, a] = n.useState(false);
	n.useEffect(() => {
		if (r) {
			switch (t) {
				case 0:
				case 8:
					break;
				case 7:
					e.Navigate(C.BV.Library.Home(), true);
					break;
				default:
					if (!i) {
						e.Navigate(C.BV.GamepadUI.Login(), true);
						a(true);
					}
			}
		}
	}, [e, r, t, i]);
}
const z = {
	width: 1280,
	height: 800,
	left: 0,
	top: 0,
};
const x = "startup-movie-played";
function U() {
	sessionStorage.setItem(x, "true");
}
function W(e) {
	const { cm: t, instance: r } = e;
	const o = (0, N.Wx)();
	const l = (0, G.q3)(() => s.oy.RemainInBigPictureModeOnClose);
	const {
		strMovieUrl: _,
		bFullscreenVideo: f,
		bIsLoadingMovie: b,
		bIsExpectedToLoad: y,
	} = (0, F.j)();
	const [w, B] = n.useState(
		(sessionStorage.getItem(x) !== "true" || !p.TS.ON_DECK) && y,
	);
	const v = n.useCallback(() => B(false), []);
	(0, P.Z3)(v, 30000, []);
	let I = i.W.EBrowserType_DirectHWND_Borderless;
	let E = z;
	if (!p.TS.ON_DECK || !(0, A.CI)()) {
		E.left = h.Mb;
		E.top = h.Mb;
		I = i.W.EBrowserType_DirectHWND;
	}
	let M = h.Ij | S.Wf.Composited | S.Wf.TransparentParentWindow;
	const T = (0, G.q3)(
		() => (a.rV.WindowedMode || p.TS.DECK_DISPLAY_MODE) && !p.TS.IN_GAMESCOPE,
	);
	if (!T) {
		M |= S.Wf.FullScreen;
	}
	if (p.TS.DECK_DISPLAY_MODE) {
		E.width = z.width;
		E.height = z.height;
		M &= ~S.Wf.Resizable;
		M |= S.Wf.IgnoreSavedSize;
	}
	const R = (0, h.nB)(r);
	const k = p.TS.DECK_DISPLAY_MODE
		? "Window_GamepadUIDeckDisplay"
		: "Window_GamepadUI";
	const W = (0, O.h3)(k);
	const V = {
		onResize: (e, t) => {
			s.oy.SetConfiguratorWidth(e.outerWidth);
		},
		onClose: (e, t) => {
			if (!l && !S.Of.BShuttingDown()) {
				SteamClient.UI.ExitBigPictureMode();
			}
		},
	};
	const H = (0, O.Cb)(T ? W : null, V);
	const { popup: j, element: q } = (0, h._Y)(
		"SP BPM",
		r,
		h.Uv.GamepadUI,
		{
			title: (0, d.we)("#SP_WindowTitle_BigPicture"),
			dimensions: E,
			replace_existing_popup: false,
			target_browser: r.params.browserInfo,
			browserType: I,
			eCreationFlags: M,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
			bHideOnClose: !p.TS.IN_GAMESCOPE && l,
			bNoFocusOnShow: !R,
		},
		H,
	);
	n.useEffect(() => {
		if (j) {
			let e = !o;
			if (j.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed) {
				j.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed(e);
			}
			j.SteamClient.Browser.NotifyUserActivation();
		}
	}, [o, j, j?.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed]);
	L(r);
	(0, h.yu)(r, T);
	if (q) {
		if (w && b) {
			return null;
		} else {
			return _u.createPortal(
				n.createElement(
					g.O,
					{
						ownerWindow: j,
						instance: e.instance,
					},
					n.createElement(
						C.Kw,
						{
							basename: (0, C.CQ)(),
						},
						w &&
							_ &&
							n.createElement(D.K, {
								bPlayingMovie: w,
								strOverrideStartupMovie: _,
								bFullscreenVideo: f,
								onVideoComplete: v,
								onVideoError: v,
								onVideoPlay: U,
							}),
						n.createElement(c.Is, {
							cm: t,
							mode: m._5.Full,
							bPlayingStartupMovie: w,
							fnCancelStartupMove: v,
						}),
					),
				),
				q,
			);
		}
	} else {
		return null;
	}
}
function V(e) {
	const { cm: t, instance: r } = e;
	const a = r.params;
	let s = i.W.EBrowserType_OffScreen;
	let o = {
		width: a.nScreenWidth,
		height: a.nScreenHeight,
		left: 0,
		top: 0,
	};
	const l = r.params.browserInfo;
	const { popup: d, element: A } = (0, h._Y)(
		"overlay",
		r,
		h.Uv.GamepadUI,
		{
			title:
				"SP Overlay: " +
				l.m_unPID +
				"/" +
				+l.m_nBrowserID +
				"/" +
				+l.m_eBrowserType,
			dimensions: o,
			replace_existing_popup: false,
			target_browser: l,
			eCreationFlags: S.Wf.Composited | S.Wf.ApplyBrowserScaleToDimensions,
			browserType: s,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		null,
	);
	n.useEffect(
		() =>
			(0, R.fm)(() => {
				d?.SteamClient.Window.ResizeTo(a.nScreenWidth, a.nScreenHeight, true);
			}),
		[d, a],
	);
	if (A) {
		return _u.createPortal(
			n.createElement(
				g.O,
				{
					ownerWindow: d,
					instance: r,
				},
				n.createElement(
					T,
					null,
					n.createElement(c.Is, {
						cm: t,
						mode: m._5.Overlay,
						forcedAppID: a.appid,
					}),
				),
			),
			A,
		);
	} else {
		return null;
	}
}
function H(e) {
	const { cm: t, instance: r } = e;
	const { initialX: a, initialY: s } = r.params;
	const { popup: o, element: l } = (0, h._Y)("SP Keyboard", r, h.Uv.GamepadUI, {
		title: (0, d.we)("#SP_WindowTitle_Keyboard"),
		dimensions: {
			width: 1280,
			height: 360,
			left: a,
			top: s,
		},
		replace_existing_popup: false,
		target_browser: r.params.browserInfo,
		eCreationFlags: S.Wf.Composited | S.Wf.NoMinimize | (0, S.yq)(S.Dr.Overlay),
		browserType: p.TS.DEV_MODE
			? i.W.EBrowserType_DirectHWND
			: i.W.EBrowserType_DirectHWND_Borderless,
		strUserAgent: e.instance.params.strUserAgentIdentifier,
	});
	if (l) {
		return _u.createPortal(
			n.createElement(
				g.O,
				{
					ownerWindow: o,
					instance: e.instance,
				},
				n.createElement(c.Is, {
					cm: t,
					mode: m._5.StandaloneKeyboard,
				}),
			),
			l,
		);
	} else {
		return null;
	}
}
var j = require("./32661.js");
var q = require("./78057.js");
var Q = require("./96593.js");
var Z = require("./98659.js");
var Y = Z;
var K = require(/*webcrack:missing*/ "./41230.js");
var X = require("./48289.js");
var J = require(/*webcrack:missing*/ "./98995.js");
var $ = require("./75001.js");
var ee = require(/*webcrack:missing*/ "./90765.js");
var te = require("./35488.js");
var re = require("./3475.js");
var ne = require("./88724.js");
var ie = require("./5808.js");
var ae = require(/*webcrack:missing*/ "./54644.js");
var se = require("./64608.js");
var oe = require("./32700.js");
var le = require("./97893.js");
var ce = require("./39147.js");
const me = (0, K.PA)(function (e) {
	const { appid: t } = e;
	(0, q.T)(t);
	const r = (0, Q.Co)(t);
	const i = (0, Q.mM)(r);
	const a = (0, o.$2)();
	if (!t) {
		return null;
	}
	if (!r) {
		return n.createElement(
			"div",
			null,
			(0, d.we)("#GameLauncher_UnknownAppID", t.toString()),
		);
	}
	const s = (0, ie.AH)(a, r, "mostavailable");
	(0, ie.Kw)(r, "mostavailable");
	let l = (0, oe.Bb)(r.display_status, true);
	switch (r.display_status) {
		case 6:
		case 7: {
			const e = le.hj.DownloadOverview.update_network_bytes_per_second;
			let t = (r.status_percentage || 0) + "%";
			if (e) {
				t = t + " (" + (0, ce.ZC)(e) + ")";
			}
			l += " - " + t;
		}
	}
	return n.createElement(
		"div",
		{
			className: Y.AppStatus,
		},
		n.createElement(
			"div",
			{
				className: Y.AppName,
			},
			r.display_name,
		),
		!i &&
			n.createElement(
				"div",
				{
					className: Y.Error,
				},
				(0, d.we)("#GameLauncher_AccountDoesNotOwnGame"),
			),
		n.createElement(
			"div",
			{
				className: Y.DisplayStatus,
			},
			l,
		),
		i &&
			s &&
			n.createElement(
				se.jn,
				{
					onClick: (e) => {
						const t = (0, ae.uX)(e);
						(0, ie.jy)(s, r, "mostavailable", 100, t)();
						if (s != "Play") {
							e.stopPropagation();
							e.preventDefault();
						}
					},
				},
				(0, oe.Np)(s, 1),
			),
	);
});
const ue = (e) =>
	n.createElement($._G, {
		menuItems: [
			{
				name: "#Menu_Logout",
				steamURL: "steam://signout",
			},
		],
	});
const de = (0, K.PA)(function () {
	const e = (0, X.wI)();
	const [t, r] = n.useState(false);
	const [i] = (0, G.q3)(() => [(0, N.qw)().GetCurrentUser().strAccountName]);
	return n.createElement(
		J.he,
		{
			toolTipContent: "#ViewAccountDropdown",
			direction: "bottom",
			bDisabled: t,
		},
		n.createElement(
			$.W1,
			{
				title: (0, d.we)("#ViewAccountDropdown"),
				menuItems: [],
				menuContent: n.createElement(ue, null),
				parentalFeature: re.uX,
				popupClass: (0, ee.A)(Y.AccountMenuPopup, (0, ne.rO)(e)),
				onShow: () => r(true),
				onHide: () => r(false),
			},
			n.createElement(
				"div",
				{
					className: (0, ee.A)(Y.AccountMenu, (0, ne.rO)(e)),
				},
				n.createElement(
					"div",
					{
						className: Y.PersonaName,
					},
					i,
				),
				n.createElement(te.Chevron, {
					className: Y.Chevron,
					direction: "down",
				}),
			),
		),
	);
});
function Ae(e) {
	const t = (0, N.gK)();
	const [r, i] = n.useState(false);
	const a = (function () {
		const [e, t] = n.useState();
		n.useEffect(() => {
			SteamClient.SteamChina.GetCustomLauncherAppID().then((e) => t(e));
		}, []);
		return e;
	})();
	n.useEffect(() => {
		(async () => {
			console.time("SteamApp Init");
			await (0, N.qw)().WaitForServicesInitialized();
			console.timeEnd("SteamApp Init");
			i(true);
		})();
	}, []);
	if (t && r) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(B.tH, null, n.createElement(j.j, null)),
			n.createElement(de, null),
			n.createElement(me, {
				appid: a,
			}),
		);
	} else {
		return null;
	}
}
function pe(e) {
	const { cm: t, instance: r } = e;
	let a = {
		width: 640,
		height: 480,
		left: h.Mb,
		top: h.Mb,
	};
	let s = (0, d.we)("#GameLauncher_Title");
	let l = S.Wf.ApplyBrowserScaleToDimensions;
	const { popup: c, element: m } = (0, h._Y)(
		"SteamChinaReviewLauncherWindow",
		r,
		h.Uv.DesktopUI,
		{
			title: s,
			dimensions: a,
			browserType: i.W.EBrowserType_DirectHWND,
			replace_existing_popup: false,
			target_browser: r.params.browserInfo,
			eCreationFlags: l,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		{
			onClose: (e, t) => {
				if (!S.Of.BShuttingDown()) {
					SteamClient.User?.StartShutdown(true);
				}
			},
		},
	);
	const p = n.useMemo(
		() => ({
			IN_GAMEPADUI: false,
			IN_DESKTOPUI: true,
			IN_VR: false,
		}),
		[],
	);
	n.useEffect(() => {
		if (c) {
			c.ConfigContext = p;
		}
	}, [c, p]);
	if (m) {
		return _u.createPortal(
			n.createElement(
				A.ss,
				{
					...p,
				},
				n.createElement(
					_w.p,
					{
						body_class: h.a$,
					},
					n.createElement(
						S.kc,
						{
							ownerWindow: c,
						},
						n.createElement(
							o.ER,
							{
								instance: r,
							},
							n.createElement(
								v.EO,
								null,
								n.createElement(
									B.tH,
									null,
									n.createElement(
										b.FQ,
										{
											webNavigationsUseSteamURL: true,
										},
										n.createElement(Ae, {
											cm: t,
										}),
									),
								),
							),
						),
					),
				),
			),
			m,
		);
	} else {
		return null;
	}
}
var ge = require("./32411.js");
const he = {
	width: 1280,
	height: 800,
	left: h.Mb,
	top: h.Mb,
};
const Ce = {
	width: 400,
	height: 800,
	left: h.Mb,
	top: h.Mb,
};
function _e(e) {
	const { cm: t, instance: r, bSmallMode: a } = e;
	let l = i.W.EBrowserType_DirectHWND_Borderless;
	let c = (0, d.we)(
		e.bSmallMode ? "#WindowName_SteamDesktopMini" : "#WindowName_SteamDesktop",
	);
	let m = a ? Ce : he;
	const g = e.bSmallMode ? 230 : 1010;
	const _ = e.bSmallMode ? 100 : 600;
	const y = e.bSmallMode ? "Window_SteamDesktopMini" : "Window_SteamDesktop";
	const v = (0, O.h3)(y);
	const I = (0, h.nB)(r);
	const E = h.Ij | S.Wf.Composited | (p.TS.SILENT_STARTUP ? S.Wf.Hidden : 0);
	const M = v;
	const T = n.useMemo(
		() => ({
			title: c,
			dimensions: m,
			minWidth: g,
			minHeight: _,
			replace_existing_popup: false,
			target_browser: r.params.browserInfo,
			browserType: l,
			eCreationFlags: E,
			strUserAgent: r.params.strUserAgentIdentifier,
			bHideOnClose: true,
			bNoFocusOnShow: !I,
		}),
		[r, l, E, m, c, g, _, I],
	);
	const { popup: R, element: k } = (0, h._Y)(
		"SP Desktop",
		r,
		h.Uv.DesktopUI,
		T,
		M,
	);
	const D = n.useMemo(
		() => ({
			IN_GAMEPADUI: false,
			IN_DESKTOPUI: true,
			IN_VR: false,
		}),
		[],
	);
	n.useEffect(() => {
		if (R) {
			R.ConfigContext = D;
		}
	}, [R, D]);
	const N = n.useRef(a);
	n.useEffect(() => {
		if (R && a !== N.current) {
			const e = (e) => {
				if (e.data == "window_moved" || e.data == "window_restored") {
					setTimeout(() => {
						R.SteamClient.Window.ShowWindow();
					}, 250);
				}
			};
			R.addEventListener("message", e);
			const t = v.updateParamsBeforeShow(T);
			if (t.strRestoreDetails) {
				R.SteamClient.Window.HideWindow();
				R.SteamClient.Window.RestoreWindowSizeAndPosition(t.strRestoreDetails);
				R.SteamClient.Window.SetMinSize(g, _);
			} else {
				R.SteamClient.Window.SetMinSize(g, _);
				R.SteamClient.Window.ResizeTo(m.width, m.height, false);
			}
			N.current = a;
			return () => {
				R?.removeEventListener("message", e);
			};
		}
		return () => {};
	}, [a, T, v, R, m, g, _]);
	(0, h.yu)(r);
	(0, f.w)(
		s.oy.MainInstanceUIMode != 4,
		"DesktopUI windows should only ever be present when the main instance's UI mode is desktop",
	);
	if (k && s.oy.MainInstanceUIMode != 4) {
		return _u.createPortal(
			n.createElement(
				A.ss,
				{
					...D,
				},
				n.createElement(
					_w.p,
					{
						body_class: h.a$,
					},
					n.createElement(
						C.Gl,
						{
							initialPath: C.BV.Init(),
						},
						n.createElement(
							S.kc,
							{
								ownerWindow: R,
							},
							n.createElement(
								o.ER,
								{
									instance: r,
								},
								n.createElement(
									B.tH,
									null,
									n.createElement(
										b.FQ,
										null,
										n.createElement(ge.Ay, {
											cm: t,
											bSmallMode: e.bSmallMode,
										}),
									),
								),
							),
						),
					),
				),
			),
			k,
		);
	} else {
		return null;
	}
}
var fe = require("./16251.js");
var be = require("./38542.js");
var ye = require("./17016.js");
var Se = require("./22969.js");
var we = require("./45921.js");
var Be = require("./26893.js");
var ve = require("./16403.js");
var Ie = require(/*webcrack:missing*/ "./10975.js");
var Ee = require("./80467.js");
var Me = Ee;
var Te = require(/*webcrack:missing*/ "./61657.js");
function Re(e) {
	const { cm: t, instance: r } = e;
	const a = n.useCallback((e, t) => {
		Se.fR.Info("Main popup created.");
	}, []);
	const o = n.useCallback((e, t) => {
		Se.fR.Info("Main popup closed.");
	}, []);
	const { popup: l, element: d } = (0, h._Y)(
		"VR",
		r,
		h.Uv.GamepadUI,
		{
			strVROverlayKey: r.GetMainVROverlayKey(),
			title: "SteamVR",
			body_class: Me.PopupBody,
			dimensions: {
				width: 1280,
				height: 720,
				left: 0,
				top: 0,
			},
			replace_existing_popup: true,
			target_browser: r.params.browserInfo,
			browserType: i.W.EBrowserType_OpenVROverlay_Dashboard,
			eCreationFlags: 0,
			strUserAgent: e.instance.params.strUserAgentIdentifier,
		},
		{
			onCreate: a,
			onClose: o,
		},
	);
	const A = n.useRef(undefined);
	(function (e, t, r) {
		n.useEffect(() => {
			if (!e) {
				return;
			}
			const n = (r) => {
				if (t.current && r == fe.Tv.k_EButton_Dashboard_Back) {
					t.current.OnActivate(e);
					s.oy.NavigationManager.DispatchVirtualButtonClick(Te.pR.CANCEL);
					Ie.eZ.PlayNavSound(Ie.PN.HideModal);
				}
			};
			const i = e.SteamClient.OpenVR?.VROverlay.RegisterForButtonPress((t) => {
				Se.fR.Info(`Button press for window ${e.name} button=${t}`);
				n(t);
			});
			const a = r
				?.GetStoreBrowser()
				.GetOnMessageCallbacks("button-press")
				.Register((e) => {
					const t = Number(e);
					Se.fR.Info(`Button press for from BrowserView button=${t}`);
					n(t);
				});
			return () => {
				i?.unregister();
				a?.Unregister();
			};
		}, [e, t, r]);
	})(l, A, r);
	(0, be.oH)(l, (e) =>
		Se.fR.Debug(
			`Overlay for VRWindow ${l.name} visibility=${e ? "true" : "false"}`,
		),
	);
	const p = n.useMemo(() => [C.BV.Library.Home()], []);
	L(r);
	if (d) {
		return n.createElement(
			n.Fragment,
			null,
			_u.createPortal(
				n.createElement(
					g.O,
					{
						ownerWindow: l,
						instance: e.instance,
						refFocusNavContext: A,
					},
					n.createElement(
						C.NM,
						{
							initialEntries: p,
							initialIndex: 0,
						},
						n.createElement(
							ve.Bi,
							null,
							n.createElement(
								c.Is,
								{
									cm: t,
									mode: m._5.Full,
									bPlayingStartupMovie: false,
								},
								n.createElement(B.tH, null, n.createElement(ye.r, null)),
								n.createElement(B.tH, null, n.createElement(we.iG, null)),
								n.createElement(B.tH, null, n.createElement(Be.z, null)),
								n.createElement(B.tH, null, n.createElement(Be.ny, null)),
							),
						),
					),
				),
				d,
			),
		);
	} else {
		return null;
	}
}
var ke = require("./8326.js");
export function u(e) {
	const { cm: t } = e;
	const r = (0, G.q3)(() => s.oy.WindowStore.SteamUIWindows);
	const [i] = (0, a.VI)("small_mode");
	(0, ke.E4)(1920, 1080);
	return r.map((e) => {
		const r = e.params.browserInfo;
		if (e.IsMainGamepadUIWindow()) {
			return n.createElement(W, {
				key: "Main",
				cm: t,
				instance: e,
			});
		} else if (e.IsGamepadUIOverlayWindow()) {
			return n.createElement(V, {
				key: `overlay_${r.m_unPID}`,
				cm: t,
				instance: e,
			});
		} else if (e.IsStandaloneKeyboardWindow()) {
			return n.createElement(H, {
				key: "keyboard",
				cm: t,
				instance: e,
			});
		} else if (e.IsControllerConfiguratorWindow()) {
			return n.createElement(_, {
				key: "controllerconfigurator",
				cm: t,
				instance: e,
			});
		} else if (e.IsVRWindow()) {
			return n.createElement(Re, {
				key: "vr" + (e.params.bSimulateOnDesktop ? "-desktop" : ""),
				cm: t,
				instance: e,
			});
		} else if (e.IsMainDesktopWindow()) {
			return n.createElement(_e, {
				key: "SteamDesktop",
				cm: t,
				instance: e,
				bSmallMode: i,
			});
		} else if (e.IsDesktopOverlayWindow()) {
			return n.createElement(k, {
				key: `overlay_${r.m_unPID}`,
				cm: t,
				instance: e,
			});
		} else if (e.IsDesktopLoginWindow()) {
			return n.createElement(I, {
				key: "DesktopLogin",
				cm: t,
				instance: e,
			});
		} else if (e.IsSteamChinaReviewLauncher()) {
			return n.createElement(pe, {
				key: "SteamChinaReviewLauncher",
				cm: t,
				instance: e,
			});
		} else {
			return null;
		}
	});
}
export function w() {
	const e = (function () {
		switch ((0, o.$2)().WindowType) {
			case i.W7.OverlayGamepadUI:
			case i.W7.OverlayDesktopUI:
				return false;
			default:
				return true;
		}
	})();
	const t = (0, S.c4)().bUnderlaySupported;
	return e && t;
}
