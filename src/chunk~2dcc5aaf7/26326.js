import * as i from "./44846.js";
import * as a from "./39265.js";
import * as s from "./77347.js";
import {
	LoginStore,
	UseLoginStateObserver,
} from "../../actual_src/stores/loginstore.js";
import * as l from "./63696.js";
import * as c from "./31084.js";
import * as m from "./11131.js";
import * as u from "./87232.js";
import * as d from "./89791.js";
import * as A from "./31222.js";
import * as p from "./92228.js";
import * as g from "./63088.js";
import * as h from "./88750.js";
import * as C from "./64608.js";
import * as _ from "./27773.js";
import * as f from "./90765.js";
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import * as y from "./72476.js";
import * as S from "./11958.js";
import * as w from "./53576.js";
import * as v from "./32700.js";
let n;
const B = w;
export default function I(e) {
	return FullLogin(e);
}
export function FullLogin(e) {
	const [t, r] = (0, l.useState)(true);
	const n = (() => {
		const [e, t] = l.useState(false);
		l.useEffect(() => {
			let e = [];
			if (!y.TS.IN_STEAMUI_SHARED_CONTEXT) {
				e.push((0, v.uV)(y.TS.LANGUAGE));
				e.push(LoginStore.Init());
			}
			Promise.all(e).then(() => {
				t(true);
			});
		}, []);
		return e;
	})();
	if (t) {
		if (n) {
			return l.createElement(M, {
				...e,
			});
		} else {
			return null;
		}
	} else {
		return l.createElement(
			"div",
			{
				style: {
					color: "white",
				},
				onClick: () => {
					r(true);
				},
			},
			"Initiate",
		);
	}
}
function M(e) {
	const { refreshLogin: t = y.TS.IN_LOGIN_REFRESH, bHiddenWindow: r = false } =
		e;
	const [d, A] = (0, l.useState)(n.Init);
	const [p, g] = (0, l.useState)("");
	(0, m.R7)();
	const [h, C] = (0, l.useState)();
	const b = (0, s.jh)();
	const S = (0, UseLoginStateObserver)();
	const [w, v] = (0, l.useState)();
	const I = l.useCallback(() => {
		if (r) {
			const t = m.Of.GetPopupForWindow(e.popup);
			t?.Show(i.iE.k_EWindowBringToFrontAndForceOS);
		}
	}, [r, e.popup]);
	(0, l.useEffect)(() => {
		let e;
		e = !y.TS.IN_STEAMUI_SHARED_CONTEXT || ((S == 3 || S == 1) && !b);
		if (d == n.Init && e) {
			g("");
			C(undefined);
			if (S == 6) {
				A(n.WaitingForLibrary);
			} else if (t) {
				A(n.Login);
				I();
			} else {
				SteamClient.User.ShouldShowUserChooser()
					.then((e) => {
						A(e ? n.UserChooser : n.Login);
						I();
					})
					.catch((e) => {
						(0, u.tH)(
							"Call to SteamClient.User.ShouldShowUserChooser was rejected with ",
							e,
						);
						A(n.Login);
						I();
					});
			}
		}
	}, [d, b, S, t, I]);
	if (b && y.TS.IN_STEAMUI_SHARED_CONTEXT) {
		return l.createElement(a.Qk, {
			loginState: 4,
			throbberClassName: B.StatusThrobber,
		});
	}
	const E = d != n.LoginWithBack || (() => A(n.UserChooser));
	const M = (e) => {
		g(e);
		A(n.LoginWithBack);
	};
	const N = () => {
		(0, u.q_)("Signin complete, waiting for library ready");
		e.onLoginComplete?.();
		A(n.WaitingForLibrary);
	};
	const F = (e) => {
		g(e);
		A(n.EnterPin);
	};
	const G = (e, t, r, i) => {
		let a = (0, c.lX)(
			l.createElement(T, {
				strAccountName: e,
				strAvatarUrl: r,
				onRemove: () => {
					C({
						strAccountName: e,
						strPersonaName: t,
						strAvatarUrl: r,
					});
					A(n.RemoveConfirmation);
				},
			}),
			i,
		);
		v(e);
		a.SetOnHideCallback(() => v(undefined));
	};
	const O = () => {
		if (LoginStore.GetLoginUsers().length > 0) {
			A(n.UserChooser);
		} else {
			A(n.Login);
		}
	};
	const P = () =>
		l.createElement(a.Qk, {
			loginState: S,
			throbberClassName: B.StatusThrobber,
		});
	let L;
	let z = false;
	switch (d) {
		case n.Login:
		case n.LoginWithBack: {
			L = l.createElement(W, {
				...e,
				defaultAccountName: p,
				onBack: E,
				renderSuccessOrLoading: P,
				onLoginComplete: N,
			});
			break;
		}
		case n.UserChooser: {
			L =
				S == 4 || S == 5
					? l.createElement(a.Qk, {
							loginState: S,
							throbberClassName: B.StatusThrobber,
						})
					: l.createElement(
							R,
							null,
							l.createElement(a.vX, {
								onShowSignInForAccount: M,
								onPromptForPin: F,
								onSuccessfulSignIn: N,
								bOfflineMode: false,
								bShowHeader: false,
								bShowAccountNames: true,
								nUserCountLimit: 5,
								onMoreMenu: G,
								strHighlightAccount: w,
							}),
						);
			z = true;
			break;
		}
		case n.RemoveConfirmation: {
			L = l.createElement(D, {
				...h,
				onFinished: O,
			});
			break;
		}
		case n.EnterPin: {
			L = l.createElement(
				k,
				null,
				l.createElement(a.gN, {
					strAccountName: p,
					onBack: () => {
						g("");
						A(n.UserChooser);
					},
					onShowSignInForAccount: M,
					onSuccessfulSignIn: N,
					bOfflineMode: false,
				}),
			);
			z = true;
			break;
		}
		default:
		case n.Init:
		case n.WaitingForLibrary: {
			L = l.createElement(a.Qk, {
				loginState: S,
				throbberClassName: B.StatusThrobber,
			});
			z = true;
		}
	}
	let x = (0, f.A)(
		B.Login,
		e.includeTitleBar && B.WithTitle,
		z && B.AnimatedBackground,
		(0, y.Y2)() && B.SteamChina,
		"DesktopUI",
	);
	return l.createElement(
		"div",
		{
			className: x,
		},
		e.includeTitleBar &&
			e.popup &&
			l.createElement(
				"div",
				{
					className: (0, f.A)(B.TitleContainer),
				},
				l.createElement(_.c, {
					popup: e.popup,
					hideMin: true,
					hideMax: true,
					hideClose: e.refreshLogin,
				}),
			),
		L,
	);
}
function T(e) {
	return l.createElement(
		h.tz,
		null,
		l.createElement(
			h.kt,
			{
				onSelected: e.onRemove,
			},
			Localize("#Login_RemoveUser_Menu"),
		),
	);
}
function R(e) {
	return l.createElement(
		"div",
		{
			className: (0, f.A)(B.UserChooser, B.LoginAnimated),
		},
		l.createElement(
			"div",
			{
				className: B.Content,
			},
			l.createElement(d.qR, {
				realm: y.TS.EREALM,
				launcherType: y.TS.LAUNCHER_TYPE,
				className: B.HeaderLogo,
			}),
			l.createElement(
				"div",
				{
					className: B.AvatarContainer,
				},
				l.createElement(
					"div",
					{
						className: B.WhosPlaying,
					},
					Localize("#Login_PickUser"),
				),
				e.children,
			),
		),
	);
}
function k(e) {
	return l.createElement(
		"div",
		{
			className: (0, f.A)(B.PinPrompt, B.LoginAnimated),
		},
		l.createElement(
			"div",
			{
				className: B.Content,
			},
			l.createElement(d.qR, {
				realm: y.TS.EREALM,
				launcherType: y.TS.LAUNCHER_TYPE,
				className: B.HeaderLogo,
			}),
			l.createElement("div", null, e.children),
		),
	);
}
function D(e) {
	return l.createElement(
		"div",
		{
			className: B.RemoveConfirmation,
		},
		l.createElement(
			"div",
			{
				className: B.Content,
			},
			l.createElement(d.qR, {
				realm: y.TS.EREALM,
				launcherType: y.TS.LAUNCHER_TYPE,
				className: B.HeaderLogo,
			}),
			l.createElement(
				"div",
				{
					className: B.Warning,
				},
				l.createElement(
					"div",
					{
						className: B.Title,
					},
					Localize("#Login_Remove_Title"),
				),
				l.createElement(
					"div",
					{
						className: B.Paragraph,
					},
					LocalizeReact(
						"#Login_Remove_Desc1",
						l.createElement(
							"span",
							{
								className: B.Highlight,
							},
							e.strPersonaName,
						),
					),
				),
				l.createElement(
					"div",
					{
						className: B.Paragraph,
					},
					Localize("#Login_Remove_Desc2"),
				),
			),
			l.createElement(
				"div",
				{
					className: B.Buttons,
				},
				l.createElement(
					C.jn,
					{
						onClick: async () => {
							await LoginStore.RemoveUser(e.strAccountName);
							e.onFinished?.();
						},
					},
					Localize("#Login_Remove_Remove"),
				),
				l.createElement(
					C.$n,
					{
						onClick: e.onFinished,
					},
					Localize("#Button_Cancel"),
				),
			),
		),
	);
}
((e) => {
	e[(e.Init = 0)] = "Init";
	e[(e.UserChooser = 1)] = "UserChooser";
	e[(e.LoginWithBack = 2)] = "LoginWithBack";
	e[(e.Login = 3)] = "Login";
	e[(e.RemoveConfirmation = 4)] = "RemoveConfirmation";
	e[(e.WaitingForLibrary = 5)] = "WaitingForLibrary";
	e[(e.EnterPin = 6)] = "EnterPin";
})((n ||= {}));
const N = 900;
const F = 800;
const G = 1024;
const O = 768;
const P = y.TS.IN_LOGIN_REFRESH
	? () => ({
			transport: new A.D(y.TS.WEBAPI_BASE_URL).GetServiceTransport(),
			bTransportReady: true,
		})
	: () => {
			const [e, t] = (0, l.useState)(false);
			let r = new p.ij();
			let n = r.GetServiceTransport();
			((e) => {
				(0, l.useEffect)(() => {
					const t = (0, g.aj)();
					e.messageHandlers.InstallErrorReportingStore(t);
					t.Init("Client Login", CLSTAMP, e.GetServiceTransport());
				}, [e]);
			})(r);
			r.Connect().then(() => {
				t(true);
			});
			return {
				transport: n,
				bTransportReady: e,
			};
		};
const L = 900;
const z = 800;
const x = 900;
const U = 800;
function W(e) {
	let [t, r] = (0, l.useState)(null);
	const n = (0, m.R7)();
	const [i, a] = (0, l.useState)(false);
	const [s, c] = (0, l.useState)(false);
	const { transport: A, bTransportReady: p } = P();
	const [g, h] = (0, l.useState)();
	const [C, _] = (0, l.useState)();
	const f = !!e.refreshLogin;
	(0, l.useEffect)(() => {
		if (f || y.TS.IN_LOGIN_REFRESH) {
			SteamClient.Auth.GetRefreshInfo().then((e) => {
				if (e.reason !== 1) {
					r(e);
				} else {
					r(null);
				}
			});
		}
	}, [f]);
	const [w, B] = (0, l.useState)(undefined);
	const [v, I] = (0, l.useState)(0);
	if (!p) {
		(0, u.q_)("Transport not ready");
		return null;
	}
	const E = `${t?.account_name}${t?.reason}${v.toString()}`;
	return l.createElement(
		l.Fragment,
		null,
		l.createElement(d.aJ, {
			key: E,
			autoFocus: true,
			transport: A,
			onSuccess: (t) => {
				(0, u.tG)(
					"received authentication token, using it to sign in to Steam",
				);
				B(null);
				SteamClient.Auth.SetLoginToken(
					t.strRefreshToken,
					t.strAccountName,
				).then((t) => {
					const r = t.result;
					const n = t.message;
					(0, u.tG)(`client login returned ${r} (${n})`);
					B(r);
					if (r != 1) {
						I(v + 1);
					} else {
						e.onLoginComplete?.();
					}
				});
				const r = t.strNewGuardData ?? "";
				if (r) {
					SteamClient.Auth.SetSteamGuardData(t.strAccountName, r);
				}
				n?.ownerWindow?.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed?.(
					false,
				);
			},
			platform: 1,
			embedded: true,
			refreshInfo: t,
			lastResult: w,
			secureComputer: LoginStore.secureComputer,
			isProbablySharedPC: LoginStore.isProbablySharedPC,
			defaultAccountName: e.defaultAccountName,
			joinLinkVariant: () => {
				a(true);
				n?.ownerWindow?.SteamClient.Window.HideWindow();
			},
			helpLinkVariant: () => {
				c(true);
				n?.ownerWindow?.SteamClient.Window.HideWindow();
			},
			onBack: e.onBack,
			onCodeHelp: (e) => {
				h(e);
				n?.ownerWindow?.SteamClient.Window.HideWindow();
			},
			onShowAgreement: (e) => {
				_(e);
				n?.ownerWindow?.SteamClient.Window.HideWindow();
			},
			renderSuccess: e.renderSuccessOrLoading,
			renderLoading: e.renderSuccessOrLoading,
		}),
		i &&
			l.createElement(S.W, {
				strName: Localize("#AccountCreation_Title"),
				strURL: `${y.TS.STORE_BASE_URL}join/`,
				popupWidth: N,
				popupHeight: F,
				onClose: () => {
					a(false);
					n?.ownerWindow?.SteamClient.Window.ShowWindow();
					n?.ownerWindow?.SteamClient.Window.BringToFront();
				},
			}),
		s &&
			l.createElement(S.W, {
				strName: Localize("#SignInHelp_Title"),
				strURL: `${y.TS.HELP_BASE_URL}wizard/HelpWithLogin`,
				popupWidth: G,
				popupHeight: O,
				onClose: () => {
					c(false);
					n?.ownerWindow?.SteamClient.Window.ShowWindow();
					n?.ownerWindow?.SteamClient.Window.BringToFront();
				},
			}),
		g &&
			l.createElement(S.W, {
				strName: Localize("#CodeHelp_Title"),
				strURL: g,
				popupWidth: L,
				popupHeight: z,
				onClose: () => {
					h(undefined);
					n?.ownerWindow?.SteamClient.Window.ShowWindow();
					n?.ownerWindow?.SteamClient.Window.BringToFront();
				},
			}),
		C &&
			l.createElement(S.W, {
				strName: Localize("#Agreement_Title"),
				strURL: C,
				popupWidth: x,
				popupHeight: U,
				onClose: () => {
					_(undefined);
					n?.ownerWindow?.SteamClient.Window.ShowWindow();
					n?.ownerWindow?.SteamClient.Window.BringToFront();
				},
			}),
	);
}
