var n = require("./85360.js");
var i = require("./46422.js");
var a = require("./6160.js");
var s = require("./76356.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require(/*webcrack:missing*/ "./69164.js");
var c = require("./64608.js");
var m = require("./35488.js");
var u = require(/*webcrack:missing*/ "./90765.js");
var d = require(/*webcrack:missing*/ "./46108.js");
var A = require(/*webcrack:missing*/ "./83599.js");
var p = require("./10239.js");
var g = p;
const h = "/images/controller_generic.png";
const C = "/movies/controller_generic_thumbstick_move.webm";
const _ = "/movies/controller_generic_mouse_move_trigger_click.webm";
const f = "/movies/controller_generic_trackpad_and_thumbsticks_move.webm";
var b = require("./39354.js");
const y = "/movies/steamdeck_mouse_move_trigger_click.webm";
const S = "/movies/steamdeck_thumbstick_move.webm";
const w = "/movies/steamdeck_trackpad_and_thumbsticks_move.webm";
const B = "/movies/steamdeck_touchscreen.webm";
var v = require("./19037.js");
var I = require(/*webcrack:missing*/ "./58254.js");
var E = require("./85399.js");
var M = require("./52192.js");
var T = require(/*webcrack:missing*/ "./41230.js");
var R = require(/*webcrack:missing*/ "./90095.js");
var k = require("./78057.js");
var D = require("./96593.js");
var N = require("./12767.js");
var F = require(/*webcrack:missing*/ "./52451.js");
var G = require("./3235.js");
var O = G;
var P = require("./43397.js");
var L = require(/*webcrack:missing*/ "./11131.js");
var z = require("./10606.js");
var x = require("./13869.js");
const U = new A.wd("Interstitial");
const W = {
	exit: g.FullscreenExitStart,
	exitActive: g.FullscreenExitActive,
	exitDone: g.FullscreenExitDone,
	enter: g.FullscreenEnterStart,
	enterDone: g.FullscreenEnterDone,
	enterActive: g.FullscreenEnterActive,
};
const V = (0, P.i_)(O["duration-app-launch"]);
export const rp = (0, T.PA)(function (e) {
	const { onShowLaunchingDetails: t, overview: r } = e;
	const l = r.appid;
	const c = j("a") && false;
	const m =
		(function (e) {
			const t = (0, F.vJ)(
				() => SteamClient.Apps.GetLaunchOptionsForApp(e),
				[e],
				null,
			);
			const r = t && t.length >= 2;
			const n = (0, R.q3)(() => s.I.GetActiveLaunches().get(e.toString()));
			const [[i, a], l] = o.useState([false, null]);
			const c = (0, F.xM)();
			const m = o.useCallback(
				(e) => {
					if (c()) {
						return;
					}
					const t =
						e.strActionName == "LaunchApp" &&
						e.strTaskName != "ShowLaunchOption";
					if (i != t) {
						l([t, n]);
					}
				},
				[c, n, i],
			);
			const u = o.useCallback(() => {
				if (r && n != null) {
					SteamClient.Apps.GetGameActionDetails(n, m);
				}
			}, [r, n, m]);
			(0, F.$$)(u, 50, [u]);
			if (t == null) {
				return false;
			}
			if (r) {
				return i && a == n;
			} else {
				return n != null;
			}
		})(l) || c;
	const u = j("c") && false;
	const d = (function (e) {
		const t =
			(0, F.vJ)(() => SteamClient.Apps.GetLaunchOptionsForApp(e), [e], null) ??
			[];
		const r = (0, R.q3)(() => s.I.GetActiveLaunches().get(e.toString()));
		const a = (0, s.WJ)(r);
		const o = (0, i.Dl)();
		const l = (0, n.st)(e, o?.nControllerIndex ?? 0);
		if (a.nGameActionID == s.dv || t == null) {
			return false;
		}
		const c = t[a.nLaunchOption];
		if (!c || c.bIsVRLaunchOption) {
			return false;
		}
		if (!o || o.eControllerType == -1 || !l) {
			return false;
		}
		const { bNoAnimationToShow: m } = q(l, o.eControllerType);
		const { eConfigType: u } = (0, E.QP)(l);
		if (u == E.h7.Unknown && m) {
			return false;
		}
		return true;
	})(l);
	const A = (function (e, t) {
		const { bTimerCompleted: r, fnRestartTimer: n } = (0, F.L$)(t);
		o.useEffect(() => {
			if (e) {
				n();
			}
		}, [n, e]);
		return r;
	})(m, (V * 8) / 8);
	const p = d && A && !u;
	const g = s.I.GetActiveLaunches().get(l.toString());
	o.useEffect(() => {
		t(m);
	}, [t, m]);
	if (g === a.ax) {
		return o.createElement(Y, {
			visible: m,
			appId: l,
			overview: r,
		});
	} else {
		return o.createElement(K, {
			visible: m,
			overview: r,
			appid: l,
			gameActionID: g,
			showControlsOverview: p,
		});
	}
});
function j(e) {
	const t = (0, L.R7)()?.ownerWindow || window;
	const [r, n] = o.useState(false);
	const i = o.useCallback(
		(t) => {
			if (t.key == e) {
				n(!r);
			}
		},
		[r, e],
	);
	(0, F.l6)(t, "keydown", i);
	return r;
}
function q(e, t) {
	const r = t == 4;
	const n =
		t == 2 || t == 4 || t == 3 || t == 1
			? e?.bRightTrackpadMouse
			: e?.bRightJoystickMouse;
	if (e?.appID == 1902490) {
		const { eConfigType: t } = (0, E.QP)(e);
		if (t == E.h7.Official) {
			return {
				strImageOrVideoURL: r ? S : C,
				strImageSet: r ? "steamdeck" : "genericcontroller",
				bRotate: true,
				bNoAnimationToShow: false,
			};
		}
	}
	let i;
	let a = false;
	let s = null;
	if (r && e?.bUsesNativeTouchscreen) {
		s = B;
		i = "steamdeck";
		U.Debug("Native Touch Game Interstitial");
	} else if (e?.bUsesMouse && n && !e?.bUsesGamepad) {
		s = r ? y : _;
		i = r ? "steamdeck" : "genericcontroller";
		a = a || e?.bGyroMouse;
		U.Debug("Mouse Game Interstitial" + (e?.bGyroMouse ? " w/ Gyro" : ""));
	} else if (e?.bUsesGamepad || e?.bUsesSIAPI) {
		if (n) {
			s = r ? w : f;
			i = r ? "steamdeck" : "genericcontroller";
		} else {
			s = r ? S : C;
			i = r ? "steamdeck" : "genericcontroller";
		}
		a = a || e?.bGyroMouse;
		U.Debug(
			(n ? "Gamepad/Mouse Game Interstitial" : "Gamepad Game Interstital") +
				(e?.bGyroMouse ? " w/ Gyro" : ""),
		);
	}
	let o = false;
	if (s == null) {
		s = r ? b.A : h;
		i = r ? "steamdeck" : "genericcontroller";
		o = true;
		U.Debug("No Interstitial");
	}
	return {
		strImageOrVideoURL: s,
		bRotate: a,
		bNoAnimationToShow: o,
		strImageSet: i,
	};
}
const Q = o.forwardRef(function (e, t) {
	const { config: r, visible: n } = e;
	const a = (0, i.Dl)();
	const {
		strImageOrVideoURL: s,
		bRotate: l,
		strImageSet: c,
	} = q(r, a?.eControllerType);
	const { eConfigType: m, bModified: A } = (0, E.QP)(r);
	const p = (function (e, t, r) {
		switch (e) {
			case E.h7.Autosave:
			case E.h7.Unknown:
			case E.h7.Search:
				if (t) {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_Modified";
				} else {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse";
				}
			case E.h7.Official:
				if (t) {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_OfficialLayout_Modified";
				} else {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_OfficialLayout";
				}
			case E.h7.Personal:
				if (t) {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_PersonalLayout_Modified";
				} else {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_PersonalLayout";
				}
			case E.h7.Workshop:
				if (t) {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_CommunityLayout_Modified";
				} else {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_CommunityLayout";
				}
			case E.h7.Template:
				if (r) {
					if (t) {
						return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_TemplateLayout_Recommended_Modified";
					} else {
						return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_TemplateLayout_Recommended";
					}
				} else if (t) {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_TemplateLayout_Modified";
				} else {
					return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_TemplateLayout";
				}
			case E.h7.OptedOut:
				return "#LaunchApp_ControlsConfiguration_ThisGameWillUse_BuiltInGamepadSupport";
		}
	})(m, A, (0, E.jT)(r));
	const h = p == "#LaunchApp_ControlsConfiguration_ThisGameWillUse";
	const C = ((0, E.hY)(r) || m == E.h7.Personal || m == E.h7.Unknown) && !h;
	const _ = o.createElement(
		"div",
		{
			className: (0, u.A)(g.ConfigurationHeader),
		},
		(0, d.oW)(
			p,
			o.createElement("span", {
				className: g.ConfigurationHeaderBold,
			}),
		),
		C && ":",
	);
	const f = s.endsWith(".webm");
	return o.createElement(
		"div",
		{
			className: (0, u.A)(g.ControlOverviewContainer, n && g.Visible),
			ref: t,
		},
		h &&
			o.createElement(
				o.Fragment,
				null,
				_,
				C &&
					o.createElement(
						"div",
						{
							className: g.ConfigurationName,
						},
						(0, M.yZ)(r),
					),
			),
		o.createElement(
			"div",
			{
				className: (0, u.A)(
					g.ControllerInterstitialAnimationContainer,
					c == "steamdeck" && g.SteamDeck,
				),
			},
			f
				? o.createElement(
						"video",
						{
							className: (0, u.A)(l && g.GyroImage1A),
							loop: true,
							preload: "none",
							muted: true,
							controls: false,
							autoPlay: true,
							playsInline: true,
						},
						o.createElement("source", {
							src: s,
							type: "video/webm",
						}),
					)
				: o.createElement("img", {
						className: (0, u.A)(l && g.GyroImage1A),
						src: s,
					}),
		),
		!h &&
			o.createElement(
				o.Fragment,
				null,
				_,
				C &&
					o.createElement(
						"div",
						{
							className: g.ConfigurationName,
						},
						(0, M.yZ)(r),
					),
			),
	);
});
function Z(e) {
	const { visible: t } = e;
	const r = o.useRef(undefined);
	const a = o.useCallback(() => {
		if (i.oy.MainRunningApp?.GetGameID()) {
			s.I.CancelAllGameActions();
		}
	}, []);
	const c = (0, R.q3)(() => k.H.GetLogoImages(e.overview)?.rgLogoImages ?? []);
	const [d, A] = o.useState(false);
	const p = c.length == 0 || d;
	const h = (0, i.Dl)();
	const C = h?.eControllerType ?? -1;
	const _ = (0, n.st)(e.appId, h?.nControllerIndex ?? -1);
	const f = e.visible && e.showControlOverview && _ && C != -1;
	const [b, y] = o.useState(0);
	const S = o.useCallback((e) => {
		y(e.borderBoxSize[0].blockSize);
	}, []);
	const w = (0, F.wY)(S);
	const B = o.useRef(undefined);
	o.useLayoutEffect(() => {
		if (t && B.current) {
			y(B.current.getBoundingClientRect().height);
		}
	}, [t]);
	const E = (0, F.Ue)(w, B);
	const M = o.useRef(null);
	return o.createElement(
		I.A,
		{
			nodeRef: M,
			appear: true,
			in: e.visible,
			classNames: W,
			timeout: V,
			mountOnEnter: true,
			unmountOnExit: true,
			onEntered: () => r.current.TakeFocus(),
		},
		o.createElement(
			"div",
			{
				ref: M,
				className: g.Container,
				style: {
					"--controls-overview-height": b + "px",
				},
			},
			o.createElement(
				"div",
				{
					className: (0, u.A)(g.TopSection, f && g.ShowControlsOverview),
				},
				o.createElement("div", {
					className: g.LogoSpacerTop,
				}),
				o.createElement(
					"div",
					{
						className: g.LogoOrTitleContainer,
					},
					p &&
						o.createElement(
							"div",
							{
								className: g.TitleText,
							},
							e.overview.display_name,
						),
					!p &&
						o.createElement(N.c, {
							className: g.TitleLogo,
							rgSources: c,
							onError: () => A(true),
						}),
				),
				o.createElement("div", {
					className: g.LogoSpacerBottom,
				}),
				o.createElement("div", {
					className: g.Divider,
				}),
			),
			o.createElement(Q, {
				config: _,
				visible: f,
				ref: E,
			}),
			o.createElement(
				l.Z,
				{
					className: (0, u.A)(g.BottomSection, f && g.ShowControlsOverview),
					autoFocus: true,
					noFocusRing: true,
					focusableIfNoChildren: true,
					disableNavSounds: true,
					onGamepadDirection: () => true,
					onCancel: a,
					navRef: r,
				},
				o.createElement("div", {
					className: g.Divider,
				}),
				o.createElement(
					"div",
					{
						className: g.BottomSectionChildren,
					},
					o.createElement(
						"div",
						{
							className: g.LaunchStatus,
						},
						o.createElement(m.Spinner, {
							className: g.StatusSpinner,
						}),
						" ",
						e.status,
					),
					e.children,
				),
			),
			o.createElement(v.LP, {
				appid: e.appId,
			}),
		),
	);
}
function Y(e) {
	const t = (0, a.R8)();
	if (!t) {
		return o.createElement(Z, {
			visible: e.visible,
			status: (0, d.we)("#LaunchApp_Action_Starting"),
			appId: e.appId,
			overview: e.overview,
		});
	}
	const r = X(t);
	const n = J(t.strTaskName, t.strTaskDetails, r);
	return o.createElement(Z, {
		visible: e.visible,
		status: n,
		appId: e.appId,
		overview: e.overview,
	});
}
function K(e) {
	const t = new A.wd("LaunchStates");
	const { appid: r, gameActionID: n } = e;
	const i = (0, s.WJ)(n);
	const a = X(i);
	let l = false;
	let m = (0, d.we)("#LaunchApp_Action_Starting");
	if (i.strActionName == "LaunchApp") {
		m = J(i.strTaskName, i.strTaskDetails, a);
		l = i.strTaskName === "ProcessingShaderCache";
	}
	t.Debug(m + " : " + i.strTaskName + " : " + i.strTaskDetails);
	let u = o.useCallback(() => {
		SteamClient.Apps.ContinueGameAction(n, "SkipShaders");
	}, [n]);
	return o.createElement(
		Z,
		{
			visible: e.visible,
			status: m,
			appId: r,
			showControlOverview: e.showControlsOverview,
			overview: e.overview,
		},
		l &&
			o.createElement(
				c.jn,
				{
					className: g.SkipProcessingShaderCache,
					onClick: u,
					autoFocus: true,
				},
				(0, d.we)(
					"#LaunchApp_Action_SkipProcessingShaderCache",
				).toLocaleUpperCase(),
			),
	);
}
function X(e) {
	const t = e?.numDone ?? parseInt(e?.strNumDone ?? "0");
	const r = e?.numTotal ?? parseInt(e?.strNumTotal ?? "0");
	if (r > 0 && t <= r) {
		return Math.floor((t * 100) / r);
	} else {
		return 0;
	}
}
function J(e, t, r) {
	const n = t && t.length > 0;
	switch (e) {
		case "UpdatingAppInfo":
		case "ShowEula":
		case "UpdatingDRM":
		case "GettingLegacyKey":
		case "SynchronizingCloud":
		case "VerifyingFiles":
		case "CreatingProcess":
		case "WaitingGameWindow":
		case "ConnectingToSteam":
			return (0, d.we)("#LaunchApp_Action_" + e);
		case "DownloadingDepots":
		case "DownloadingWorkshop":
		case "DelayLaunch":
		case "ProcessingShaderCache":
			return (0, d.we)("#LaunchApp_Action_" + e, r);
		case "RunningInstallScript":
			if (n) {
				return (0, d.we)("#LaunchApp_Action_" + e, t);
			} else {
				return (0, d.we)("#LaunchApp_Action_" + e + "_NoParens");
			}
		default:
			return (0, d.we)("#LaunchApp_Action_Starting");
	}
}
function $(e) {
	const t = (0, s.WJ)(e.gameActionID);
	const r = () => SteamClient.Apps.CancelGameAction(e.gameActionID);
	const n = () => SteamClient.Apps.ContinueGameAction(e.gameActionID, "skip");
	const i = (t) => () => {
		if (e.closeModal) {
			e.closeModal();
		}
		if (t) {
			t();
		}
	};
	o.useEffect(() => {
		if (t.strTaskName && t.strTaskName != e.strTaskName) {
			e.closeModal();
		}
	}, [t, e]);
	const a = X(t);
	const l = D.tw.GetAppOverviewByAppID(e.appID);
	const m = J(t.strTaskName, t.strTaskDetails, a);
	return o.createElement(
		z.eV,
		{
			onCancel: i(r),
			onOK: n,
		},
		o.createElement(
			c.Y9,
			null,
			"  ",
			(0, d.we)("#LaunchApp_Action_SkipStepHeader", l.display_name),
			" ",
		),
		o.createElement(
			c.nB,
			null,
			o.createElement(c.a3, null, m),
			o.createElement(
				c.wi,
				null,
				o.createElement(c.CB, {
					strOKText: (0, d.we)("#Button_Skip"),
					onCancel: i(r),
					onOK: i(n),
					strCancelText: "Cancel",
				}),
			),
		),
	);
}
export function cd(e, t, r, n) {
	n ||= window;
	const i = o.createElement($, {
		gameActionID: e,
		appID: t,
		strTaskName: r,
	});
	(0, x.pg)(i, n, {});
}
export function vE(e, t) {
	let r = "#DurationControl_PlaytimeExceeded_Body_Night";
	if (t == "WaitingVerification") {
		r = "#DurationControl_PlaytimeExceeded_Body_WaitingVerification";
	} else if (t == "Maintenance") {
		r = "#DurationControl_PlaytimeExceeded_Body_Maintenance";
	} else if (t == "CheckFailed") {
		r = "#Error_ErrorCommunicatingWithNetwork";
	}
	let n = o.createElement(z.KG, {
		strTitle: (0, d.we)("#DurationControl_PlaytimeExceeded_Title"),
		strDescription: (0, d.we)(r),
	});
	(0, x.pg)(n, e, {});
}
export function fP(e, t, r) {
	(0, x.pg)(
		o.createElement(z.KG, {
			strTitle: t,
			strDescription: e,
		}),
		r,
	);
}
