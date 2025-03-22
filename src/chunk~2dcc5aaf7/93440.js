var n = require(/*webcrack:missing*/ "./85243.js");
var i = require(/*webcrack:missing*/ "./44846.js");
var a = require(/*webcrack:missing*/ "./69164.js");
var s = require("./17034.js");
require("./43271.js");
var o = require("./24444.js");
var l = require("./13925.js");
var c = require("./55489.js");
var m = require("./33706.js");
var u = require("./71033.js");
var d = require("./5640.js");
var A = require("./64004.js");
var p = require("./56970.js");
var g = require("./34792.js");
var h = require("./89748.js");
var C = require("./46422.js");
var _ = require("./74416.js");
var f = require("./96680.js");
var b = require("./46085.js");
var y = require(/*webcrack:missing*/ "./41230.js");
const S = "/movies/steam_os_suspend_from_throbber.webm";
const w = "/movies/steam_os_suspend.webm";
const B = "/movies/deck-suspend-animation-from-throbber.webm";
const v = "/movies/deck-suspend-animation.webm";
const I = "/movies/oled-suspend-animation-from-throbber.webm";
const E = "/movies/oled-suspend-animation.webm";
var M = require(/*webcrack:missing*/ "./63696.js");
var T = require(/*webcrack:missing*/ "./31084.js");
var R = require("./23829.js");
var k = require(/*webcrack:missing*/ "./88750.js");
var D = require("./64608.js");
var N = require("./35488.js");
var F = require("./10606.js");
var G = require("./13869.js");
var O = require(/*webcrack:missing*/ "./54644.js");
var P = require(/*webcrack:missing*/ "./46108.js");
var L = require(/*webcrack:missing*/ "./52451.js");
var z = require(/*webcrack:missing*/ "./72476.js");
var x = require("./39940.js");
var U = require("./18914.js");
var W = require("./75085.js");
var V = require("./31319.js");
var H = require("./97818.js");
export function d4(e, t) {
	return (0, T.lX)(
		M.createElement(Y, {
			onCancel: t,
		}),
		e,
		{
			onCancel: t,
		},
	);
}
export function gL() {
	if (!(0, u.px)()) {
		SteamClient.System.ShutdownPC();
		(0, G.pg)(M.createElement(K, null), window);
	}
}
export function KS() {
	if (!(0, u.px)()) {
		SteamClient.System.RestartPC();
		(0, G.pg)(M.createElement(K, null), window);
	}
}
function Z() {
	return null;
}
const Y = (0, y.PA)((e) => {
	const t = (0, h.Wx)();
	const [r] = (0, C.gk)();
	const n = (0, A.dN)();
	const i = C.oy.BIsInOOBE;
	const a = d.jR.isKioskModeLocked;
	const o = p.yE.IsLockScreenActive();
	const c = (0, f.$2)();
	const m = c.IsMainGamepadUIWindow();
	const g = n.filter((e) => e.status === "Streaming");
	const _ = g.length > 0;
	const b = (0, z.rP)();
	const y = (0, R.GU)(s.T4) ?? {};
	const S = !b.IN_VR && C.oy.IsGamepadUIWindowActive() && t;
	const w = !b.IN_VR || !!y?.can_sleep;
	const B = !b.IN_VR || !!y?.can_shutdown;
	const v = !b.IN_VR || !!y?.can_restart_system;
	const I = !!b.IN_VR && (!!y?.can_exitvr || r);
	const E = !b.IN_VR;
	const T = !b.IN_VR && z.TS.IN_GAMESCOPE;
	const D = (e) => {
		(0, G.pg)(
			M.createElement(X, {
				label: (0, P.we)("#SwitchingToDesktop"),
				delayMs: 2000,
				onProceed: () => !(0, u.px)() && SteamClient.System.SwitchToDesktop(),
				onCancel: () => C.oy.OpenPowerMenu(null),
			}),
			e,
		);
	};
	return M.createElement(
		k.tz,
		{
			label: (0, P.we)("#Power"),
			onCancel: e.onCancel,
		},
		g.map((e) =>
			M.createElement(
				M.Fragment,
				{
					key: e.clientName,
				},
				M.createElement(
					k.kt,
					{
						onSelected: () =>
							((e) => {
								SteamClient.RemotePlay.StopStreamingSession(
									e.unStreamingSessionID,
								);
							})(e),
					},
					(0, P.we)("#StopStreamingTo", e.clientName),
				),
				e.bCanSuspend &&
					M.createElement(
						k.kt,
						{
							onSelected: () =>
								((e) => {
									SteamClient.RemotePlay.StopStreamingSessionAndSuspendDevice(
										e.unStreamingSessionID,
									);
								})(e),
						},
						(0, P.we)("#StopStreamingAndSuspendDevice", e.clientName),
					),
			),
		),
		g.length > 0 && M.createElement(k.K5, null),
		w &&
			M.createElement(F._Z, {
				strDisplayNameLocToken: z.TS.ON_DECK ? "#Sleep" : "#Quit_Sleep",
				onSelected: () => {
					u.Ze.InitiateSleep();
				},
				skipConfirm: z.TS.ON_DECK,
			}),
		B &&
			M.createElement(F._Z, {
				tone: "destructive",
				strDisplayNameLocToken: z.TS.ON_DECK ? "#Shutdown" : "#Quit_Shutdown",
				onSelected: () => {
					gL();
				},
			}),
		v &&
			M.createElement(F._Z, {
				tone: "destructive",
				strDisplayNameLocToken: z.TS.ON_DECK ? "#Restart" : "#Quit_Restart",
				onSelected: () => {
					KS();
				},
			}),
		I &&
			M.createElement(F._Z, {
				tone: "destructive",
				strDisplayNameLocToken: "#ExitVR",
				onSelected: () => {
					if (!(0, u.px)()) {
						SteamClient.OpenVR.QuitAllVR();
						(0, G.pg)(M.createElement(K, null), c.BrowserWindow);
					}
				},
				skipConfirm: true,
			}),
		E && M.createElement(Z, null),
		!i &&
			M.createElement(
				M.Fragment,
				null,
				M.createElement(k.K5, null),
				t &&
					!_ &&
					M.createElement(
						M.Fragment,
						null,
						M.createElement(F._Z, {
							tone: "destructive",
							strDisplayNameLocToken: "#ChangeUser",
							onSelected: () => {
								SteamClient.User.ChangeUser();
							},
							confirmDialogContent: M.createElement(
								M.Fragment,
								null,
								(0, P.we)("#ChangeUser_Desc1"),
								M.createElement("br", null),
								M.createElement("br", null),
								(0, P.we)("#ChangeUser_Desc2"),
							),
						}),
						M.createElement(F._Z, {
							tone: "destructive",
							strDisplayNameLocToken: "#SignOut_Title",
							onSelected: () => {
								SteamClient.User.SignOutAndRestart();
							},
							confirmDialogContent: M.createElement(
								M.Fragment,
								null,
								(0, P.we)("#SignOut_Description"),
								M.createElement("br", null),
								M.createElement("br", null),
								(0, P.we)("#ChangeUser_Desc2"),
							),
						}),
					),
				!!r &&
					M.createElement(F._Z, {
						tone: "destructive",
						strDisplayNameLocToken: "#RestartSteam",
						onSelected: () => {
							if (!(0, u.px)()) {
								SteamClient.User.StartRestart(false);
								(0, G.pg)(M.createElement(K, null), c.BrowserWindow);
							}
						},
					}),
				!z.TS.IN_GAMESCOPE &&
					(m || S) &&
					M.createElement(
						M.Fragment,
						null,
						M.createElement(k.K5, null),
						m &&
							M.createElement(
								k.kt,
								{
									onSelected: () => {
										C.oy.WindowStore.GamepadUIMainWindowInstance.BrowserWindow.SteamClient.Window.Minimize();
									},
								},
								(0, P.we)("#MinimizeSteam"),
							),
						S &&
							M.createElement(
								k.kt,
								{
									onSelected: () => {
										if (!(0, z.Pr)()) {
											C.oy.WindowStore.GamepadUIMainWindowInstance.BrowserWindow.SteamClient.Window.Minimize();
										}
										SteamClient.UI.ExitBigPictureMode();
									},
								},
								(0, P.we)("#ExitGamepadUI"),
							),
						M.createElement(F._Z, {
							tone: "destructive",
							strDisplayNameLocToken: "#ExitSteam",
							onSelected: () => {
								if (!(0, u.px)()) {
									SteamClient.User.StartShutdown(true);
									(0, G.pg)(M.createElement(K, null), c.BrowserWindow);
								}
							},
						}),
					),
				T &&
					!a &&
					!o &&
					M.createElement(
						M.Fragment,
						null,
						M.createElement(k.K5, null),
						M.createElement(
							k.kt,
							{
								tone: "destructive",
								onSelected: (e) => {
									const t = (0, O.uX)(e);
									if (p.yE.GetSettings().bLockDesktopMode) {
										(0, l.Di)({
											onSuccess: () => D(t),
										});
									} else {
										D(t);
									}
								},
							},
							(0, P.we)("#SwitchToDesktop"),
						),
					),
			),
	);
});
function K(e) {
	(0, c.Bx)(n.I5.Overlay, "FadeToBlackDialog");
	(0, C.LC)();
	(0, V.pw)();
	return M.createElement(a.Z, {
		className: H.FadeToBlackDialog,
		focusable: true,
		noFocusRing: true,
		autoFocus: true,
	});
}
function X(e) {
	const { onProceed: t, onCancel: r, closeModal: n, disableCancel: i } = e;
	const [a, s] = M.useState(false);
	const o = M.useCallback(() => {
		if (!a) {
			if (t) {
				t();
			}
			s(true);
		}
	}, [t, a]);
	const l = M.useCallback(() => {
		if (!i && !a) {
			if (r) {
				r();
			}
			if (n) {
				n();
			}
		}
	}, [a, n, r, i]);
	(0, L.Z3)(o, e.delayMs);
	return M.createElement(
		F.eV,
		{
			onCancel: l,
			className: H.DelayedActionDialog,
		},
		M.createElement(
			D.f3,
			{
				focusable: true,
				autoFocus: true,
				noFocusRing: true,
				onClick: l,
				onBlur: l,
				onCancel: l,
				onCancelActionDescription: a ? null : (0, P.we)("#Button_Cancel"),
				onOKActionDescription: null,
			},
			M.createElement(
				"div",
				{
					className: H.DelayedActionContents,
				},
				M.createElement(N.Display, {
					className: H.Icon,
				}),
				M.createElement(D.Y9, null, e.label),
			),
		),
	);
}
function J(e) {
	switch (e) {
		case i.jH.k_ESuspendResumeProgressState_WaitingForApp:
			return (0, P.we)("#SuspendResumeWaitingForApp");
		case i.jH.k_ESuspendResumeProgressState_CloudSync:
			return (0, P.we)("#SuspendResumeSyncingCloud");
		case i.jH.k_ESuspendResumeProgressState_LoggingIn:
			return (0, P.we)("#SuspendResumeLoggingIn");
		case i.jH.k_ESuspendResumeProgressState_Invalid:
		case i.jH.k_ESuspendResumeProgressState_Working:
		case i.jH.k_ESuspendResumeProgressState_Complete:
		default:
			return "";
	}
}
export function ve(e) {
	if ((0, u.Tx)()) {
		return M.createElement(ee, null);
	} else {
		return null;
	}
}
function ee(e) {
	let t = M.useRef(false);
	let r = (0, u.sp)();
	let s = J(r);
	(0, c.Bx)(n.I5.Overlay, "SuspendDialogInner");
	(0, C.LC)();
	(0, V.pw)();
	let o = null;
	if (r == i.jH.k_ESuspendResumeProgressState_Complete) {
		o = M.createElement(re, {
			bFromThrobber: t.current,
		});
		s = "";
	} else if (r != i.jH.k_ESuspendResumeProgressState_Invalid) {
		t.current = true;
		o = M.createElement(te, null);
	}
	return M.createElement(
		F.EN,
		{
			active: true,
		},
		M.createElement(
			a.Z,
			{
				className: H.SuspendDialog,
				focusable: true,
				noFocusRing: true,
			},
			M.createElement("div", {
				className: H.Spacer,
			}),
			o,
			M.createElement(
				"div",
				{
					className: H.Spacer,
				},
				M.createElement(
					"div",
					{
						className: H.LoadingStatus,
					},
					M.createElement("span", null, s),
				),
			),
		),
	);
}
function te(e) {
	return M.createElement("img", {
		alt: "Steam Spinner",
		className: H.LoadingThrobber,
		src: x.A,
	});
}
function re(e) {
	const { bFromThrobber: t } = e;
	const r = t ? S : w;
	const n = (function (e, t) {
		const r = (0, m.CU)();
		if (r.isLoading) {
			return null;
		}
		if (!r.isSuccess) {
			return t;
		}
		switch (r.data) {
			case 3:
				if (e) {
					return I;
				} else {
					return E;
				}
			case 2:
				if (e) {
					return B;
				} else {
					return v;
				}
			default:
				return t;
		}
	})(t, r);
	const i = (0, o.yW)(r);
	if (n === null || i.isLoading) {
		return null;
	}
	const a = i.data?.bIsOverride ? i.data.strUrl : n;
	return M.createElement("video", {
		className: H.SuspendVideo,
		src: a,
		autoPlay: true,
	});
}
export function _p(e) {
	if ((0, u._0)()) {
		return M.createElement(ie, null);
	} else {
		return null;
	}
}
function ie(e) {
	let t = (0, u.sp)();
	let r = (0, b.j)();
	let [s] = (0, g.VI)("startup_movie_used_for_resume");
	let o = s && !r.bIsLoadingMovie;
	(0, c.Bx)(n.I5.Overlay, "ResumeDialogInner");
	(0, C.LC)();
	(0, V.pw)();
	M.useEffect(() => {
		if (!s) {
			u.Ze.NotifyResumeUIDone();
		}
	}, [s]);
	const l = M.useCallback(() => {
		u.Ze.NotifyResumeUIDone();
		(0, _.dT)();
	}, []);
	if (o) {
		return M.createElement(
			F.EN,
			{
				active: true,
			},
			M.createElement(
				a.Z,
				{
					className: H.ResumeDialog,
					focusable: true,
					noFocusRing: true,
					autoFocus: true,
					onOKActionDescription: null,
					onCancel: l,
				},
				M.createElement(W.r, {
					strOverrideStartupMovie: r.strMovieUrl,
					bFullscreenVideo: r.bFullscreenVideo,
					onVideoComplete: l,
					onVideoError: l,
				}),
			),
			M.createElement(U.g3, {
				fnCancelStartupMove: l,
			}),
		);
	} else if (
		r.bIsLoadingMovie ||
		t == i.jH.k_ESuspendResumeProgressState_Invalid ||
		t == i.jH.k_ESuspendResumeProgressState_Complete
	) {
		return null;
	} else {
		return M.createElement(
			F.EN,
			{
				active: true,
			},
			M.createElement(
				F.eV,
				{
					onCancel: () => {},
					className: H.ResumeDialog,
				},
				M.createElement(
					D.f3,
					{
						focusable: true,
						autoFocus: true,
						noFocusRing: true,
						onCancelActionDescription: null,
						onOKActionDescription: null,
					},
					M.createElement(
						"div",
						{
							className: H.ResumeDialogInner,
						},
						z.TS.ON_DECK ? M.createElement(N.DeckLogoColor, null) : null,
						M.createElement(
							"div",
							{
								className: H.ResumeDialogInnerText,
							},
							M.createElement(D.Y9, null, (0, P.we)("#Resuming")),
							M.createElement(D.a3, null, J(t)),
						),
					),
				),
			),
		);
	}
}
