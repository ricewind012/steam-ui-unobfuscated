import {
	Localize,
	LocalizeInlineReactWithFallback,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n from "./28987.js";
import i from "./44846.js";
import a from "./83957.js";
import o, {
	createContext,
	useContext,
	useRef,
	useState,
	useEffect,
	useCallback,
} from "./63696.js";
import l, { zy } from "./49519.js";
import m, { R7 } from "./11131.js";
import u, { tH, tG, ZI } from "./87232.js";
import d, { q as q_1 } from "./29285.js";
import A from "./42318.js";
import g from "./93025.js";
import h from "./50376.js";
import "./47742.js";
import C from "./26853.js";
import _ from "./98995.js";
import f, { A as A_1 } from "./90765.js";
import y, { l6 } from "./52451.js";
import S, { Y2 } from "./72476.js";
import w, { yp } from "./90869.js";
import B, { pY, e1, H as H_1, JP } from "./28036.js";
import v from "./66947.js";
import E from "./37198.js";
const s = a;
const c =
	"data:image/png;base64,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";
function p(e, t) {
	let r;
	if (typeof e == "string") {
		r = e;
	} else if ("location" in e) {
		r = e.location.search;
	} else if ("search" in e) {
		r = e.search;
	}
	const n = new URLSearchParams(r.substring(1));
	if (n.has(t)) {
		const e = n.getAll(t);
		return e[e.length - 1];
	}
}
const I = v;
const MContext = createContext(false);
const T = () => useContext(MContext);
export function Fn() {
	return o.createElement(
		"div",
		{
			className: I.Login,
		},
		o.createElement(ue, {
			reset: () => window.location.reload(),
			failure: w.eF.Generic,
		}),
	);
}
export function YN(e) {
	if (
		((e) => {
			const t = useRef(e);
			t.current = e;
			const [r, n] = useState(true);
			const i = zy();
			useEffect(() => {
				if (new URLSearchParams(i.search).get("need_password")) {
					n(false);
				} else if (t.current) {
					(async (e) => {
						const t = new FormData();
						t.append("redir", e);
						const r = `${S.TS.LOGIN_BASE_URL}jwt/ajaxrefresh`;
						const n = await s.post(r, t, {
							timeout: 10000,
							withCredentials: true,
						});
						if (n.status !== 200 || !n?.data?.success) {
							return false;
						}
						const { success, login_url, error, ...l } = n.data;
						const c = new FormData();
						Object.keys(l).forEach((e) => c.append(e, l[e]));
						const m = await s.post(login_url, c);
						const u = m.status === 200 && m.data.result === 1;
						if (u) {
							window.location.assign(e);
						}
						return u;
					})(t.current)
						.then((e) => {
							n(e);
						})
						.catch((e) => {
							tH("PerformRefresh exception", e);
							n(false);
						});
				} else {
					n(false);
				}
			}, [t, i.search]);
			return r;
		})(e.redirectUrl)
	) {
		return null;
	} else {
		return o.createElement(aJ, {
			...e,
			creationRedirectUrl: e.redirectUrl,
			onSuccess: (t) => {
				const { strRefreshToken } = t;
				yp(strRefreshToken).then(
					(t) => e.onComplete(t),
					() => e.onComplete(w.wI.k_PrimaryDomainFail),
				);
			},
			embedded: e.theme === "modal",
		});
	}
}
export function aJ(e) {
	const { embedded, children, ...n } = e;
	return o.createElement(
		A.tH,
		null,
		o.createElement(
			MContext.Provider,
			{
				value: embedded,
			},
			o.createElement(
				"div",
				{
					className: I.Login,
				},
				o.createElement(z, {
					...n,
				}),
				children,
			),
		),
	);
}
function N(e) {
	if (q_1()) {
		return null;
	}
	const { variant } = e;
	if (typeof variant == "function") {
		return o.createElement(
			Be,
			{
				onClick: variant,
			},
			Localize("#Login_Help_SignIn"),
		);
	} else {
		return o.createElement(
			Be,
			{
				href: `${
					S.TS.HELP_BASE_URL
				}wizard/HelpWithLogin?redir=${encodeURIComponent(
					document.location.href,
				)}`,
			},
			Localize("#Login_Help_SignIn"),
		);
	}
}
function F(e) {
	const { variant, redirectUrl } = e;
	if (typeof variant == "function") {
		return o.createElement(
			Be,
			{
				inline: true,
				onClick: variant,
			},
			Localize("#Login_CreateAccount"),
		);
	}
	{
		const e = redirectUrl ? `?redir=${encodeURIComponent(redirectUrl)}` : "";
		switch (variant ?? "normal") {
			default:
			case "normal": {
				return o.createElement(
					Be,
					{
						inline: true,
						href: `${S.TS.STORE_BASE_URL}join/${e}`,
					},
					Localize("#Login_CreateAccount"),
				);
			}
			case "partner": {
				return o.createElement(
					Be,
					{
						inline: true,
						href: `${S.TS.PARTNER_BASE_URL}${e}`,
					},
					Localize("#Login_CreateSteamworksAccount"),
				);
			}
			case "none": {
				return null;
			}
		}
	}
}
function G(e) {
	const { launcherType, variant, redirectUrl } = e;
	if (launcherType === 8) {
		return null;
	}
	if (variant == "none") {
		return null;
	}
	const i = launcherType !== undefined;
	let a;
	switch (variant ?? "normal") {
		default:
		case "normal": {
			a = "#Login_NoSteamAccount";
			break;
		}
		case "partner": {
			a = "#Login_NoSteamworksAccount";
		}
	}
	return o.createElement(
		"div",
		{
			className: A_1(I.AccountCreation, i && I.InClient),
		},
		o.createElement(
			"span",
			{
				className: I.AccountCreationPrompt,
			},
			Localize(a),
		),
		o.createElement(F, {
			variant: variant,
			redirectUrl: redirectUrl,
		}),
	);
}
export async function sW() {
	const [e, t, r] = await Promise.all([
		SteamClient.System.GetOSType(),
		SteamClient?.Auth?.GetLocalHostname?.() ?? "",
		SteamClient?.Auth?.GetMachineID?.() ?? undefined,
	]);
	return {
		os_type: e,
		device_friendly_name: t,
		machine_id: r,
		platform_type: 1,
		gaming_device_type: S.TS.ON_DECK
			? i.zm.k_EGamingDeviceType_SteamDeck
			: i.zm.k_EGamingDeviceType_StandardPC,
	};
}
export async function P5() {
	return {
		device_friendly_name: window.navigator.userAgent,
		platform_type: 2,
	};
}
export function N_(e) {
	const { onSuccess, secureComputer = true, isProbablySharedPC = false } = e;
	const i = useCallback(
		({
			bSuccess,
			strRefreshToken,
			strAccessToken,
			strAccountName,
			strNewGuardData,
		}) => {
			if (bSuccess) {
				onSuccess({
					strRefreshToken: strRefreshToken,
					strAccessToken: strAccessToken,
					strAccountName: strAccountName,
					strNewGuardData: strNewGuardData,
				});
			}
		},
		[onSuccess],
	);
	const a = pY({
		transport: e.transport,
		onComplete: i,
		onDeviceDetails: e.onDeviceDetails,
		onGetMachineAuth: e.onGetMachineAuth,
		onShowAgreement: e.onShowAgreement,
	});
	const [s, l] = useState(0);
	const c = "Login_RememberMeSetting";
	const [m, d] = useState(
		e.refreshInfo?.account_name ?? e.defaultAccountName ?? "",
	);
	const [A, p] = useState("");
	const [g, h] = useState(
		secureComputer && !isProbablySharedPC && localStorage?.getItem(c) != "0",
	);
	const C = a.eStatus !== 0 && a.eStatus !== 1 && a.eStatus !== 2;
	useEffect(() => {
		if (e.refreshInfo?.login_token_id) {
			a.setTokenToRevoke(e.refreshInfo.login_token_id);
		}
	}, [e.refreshInfo, a]);
	return {
		password: a,
		onComplete: i,
		eQRStatus: s,
		onQRStatusChange: l,
		strAccountName: m,
		onAccountNameChange: d,
		strPassword: A,
		onPasswordChange: p,
		bRememberMe: g,
		onRememberMeChange: (e) => {
			h(e);
			localStorage?.setItem(c, e ? "1" : "0");
		},
		onPasswordSubmit: () => (m && A ? a.start(m, A, g) : Promise.resolve(8)),
		bInPasswordFlow: C,
		onTryOffline: () => {
			tG(`Logging in offline with username ${m}`);
			SteamClient.User.SetLoginCredentials(m, A, g);
			SteamClient.User.StartOffline(true);
		},
	};
}
function z(e) {
	const {
		transport,
		onSuccess,
		platform,
		autoFocus,
		refreshInfo,
		renderSuccess = () => o.createElement(Ge, null),
		lastResult,
		joinLinkVariant,
		defaultAccountName,
		secureComputer = true,
		isProbablySharedPC = false,
		onShowAgreement,
		creationRedirectUrl,
	} = e;
	const C = S.TS.IN_STEAMUI ? sW : P5;
	const _ = S.TS.IN_STEAMUI
		? (e) => SteamClient.Auth.GetSteamGuardData(e)
		: null;
	const y = (() => {
		const e = window?.location && p(window.location, "need_password");
		return e !== undefined && e !== "false" && e !== "0";
	})();
	const B = N_({
		transport: transport,
		platform: platform,
		onSuccess: onSuccess,
		refreshInfo: refreshInfo,
		onDeviceDetails: C,
		onGetMachineAuth: _,
		defaultAccountName: defaultAccountName,
		secureComputer: secureComputer,
		isProbablySharedPC: isProbablySharedPC,
		onShowAgreement: onShowAgreement,
	});
	const v = T();
	if (lastResult != null && lastResult != 1) {
		return o.createElement(
			"div",
			{
				className: I.Login,
			},
			o.createElement(ue, {
				reset: () => window.location.reload(),
				failure: w.eF.Generic,
				errorReference: lastResult.toString(),
				extendedErrorMessage: B.password.strExtendedErrorMessage,
			}),
		);
	}
	const E = !Y2();
	if (!B.bInPasswordFlow) {
		const r = o.createElement(
			"div",
			{
				className: A_1(I.SideBySide, v && I.Embedded),
			},
			o.createElement(W, {
				strAccountName: B.strAccountName,
				onAccountNameChange: B.onAccountNameChange,
				strPassword: B.strPassword,
				onPasswordChange: B.onPasswordChange,
				bRememberMe: B.bRememberMe,
				onRememberMeChange: B.onRememberMeChange,
				onSubmit: B.onPasswordSubmit,
				status: B.password.eStatus,
				autoFocus: autoFocus,
				secureComputer: secureComputer,
				refreshInfo: e.refreshInfo,
			}),
			E &&
				o.createElement(H, {
					transport: transport,
					onQRStatusChange: B.onQRStatusChange,
					onComplete: B.onComplete,
					platform: platform,
					refreshInfo: refreshInfo,
				}),
		);
		if (v) {
			const t = S.TS.IN_STEAMUI;
			const n = t ? S.TS.LAUNCHER_TYPE : undefined;
			return o.createElement(
				wt,
				{
					className: A_1(I.EmbeddedRoot, t && I.InClient),
				},
				!t && false,
				!e.refreshInfo &&
					o.createElement(qR, {
						realm: S.TS.EREALM,
						launcherType: n,
						className: I.HeaderLogo,
						onBack: e.onBack,
					}),
				o.createElement($$, {
					refreshInfo: refreshInfo,
				}),
				r,
				o.createElement(
					"div",
					{
						className: A_1(I.EmbeddedRootFooter, t && I.InClient),
					},
					o.createElement(N, {
						variant: e.helpLinkVariant,
					}),
					o.createElement(G, {
						launcherType: n,
						variant: joinLinkVariant,
						redirectUrl: creationRedirectUrl,
					}),
				),
			);
		}
		const s = o.createElement(
			"div",
			{
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "8px",
					margin: "8px 16px",
				},
			},
			false,
			o.createElement(
				"div",
				{
					className: I.PrimaryHeader,
				},
				e.refreshInfo
					? Localize("#Login_RefreshSignIn")
					: Localize("#Login_SignInTitle"),
			),
			o.createElement($$, {
				refreshInfo: e.refreshInfo,
			}),
		);
		return o.createElement(
			Re,
			{
				title: s,
			},
			y && o.createElement(U, null),
			r,
		);
	}
	const M = B.password.eStatus;
	switch (M) {
		case 13: {
			if (e.renderLoading) {
				return o.createElement(o.Fragment, null, e.renderLoading());
			} else {
				return o.createElement(le, null);
			}
		}
		case 5:
		case 11:
		case 3:
		case 10: {
			const t = M === 5 || M === 11;
			return o.createElement(pe, {
				type: t ? "mobile" : "email",
				onSubmitCode: B.password.addCode,
				status: M,
				associatedLabel: B.password.strConfirmationAssociatedMessage,
				accountName: B.password.strAccountName,
				onBack: B.password.goBack,
				onCodeHelp: e.onCodeHelp,
			});
		}
		case 6:
		case 4: {
			const r = M === 6;
			return o.createElement(we, {
				type: r ? "mobile" : "email",
				accountName: B.password.strAccountName,
				onUseCodeOverride: B.password.useCodeOverride,
				onCodeHelp: e.onCodeHelp,
			});
		}
		case 16: {
			return o.createElement(Ae, {
				reset: B.password.reset,
			});
		}
		case 15: {
			return o.createElement(ue, {
				reset: B.password.reset,
				failure: B.password.eFailureState,
				onRequestOffline: B.onTryOffline,
				errorReference: B.password.strErrorReference,
				extendedErrorMessage: B.password.strExtendedErrorMessage,
			});
		}
		case 14: {
			return o.createElement(
				Re,
				{
					compact: true,
				},
				renderSuccess(),
			);
		}
		default: {
			ZI(`Unknown Phase: ${M}`);
			return o.createElement(ue, {
				reset: B.password.reset,
				failure: w.eF.Generic,
				onRequestOffline: B.onTryOffline,
				errorReference: B.password.strErrorReference,
				extendedErrorMessage: B.password.strExtendedErrorMessage,
			});
		}
	}
}
export function $$(e) {
	if (!e.refreshInfo) {
		return null;
	}
	let t;
	switch (e.refreshInfo?.reason ?? 2) {
		case 2:
		case 7:
		default: {
			t = "#Login_RefreshReason_Generic";
			break;
		}
		case 6: {
			t = "#Login_RefreshReason_LoggedInElsewhere";
			break;
		}
		case 34: {
			t = "#Login_RefreshReason_LogonSessionReplaced";
			break;
		}
		case 5: {
			t = "#Login_RefreshReason_InvalidPassword";
			break;
		}
		case 26: {
			t = "#Login_RefreshReason_Revoked";
			break;
		}
		case 27: {
			t = "#Login_RefreshReason_Expired";
			break;
		}
		case 49: {
			t = "#Login_RefreshReason_PasswordRequiredToKickSession";
			break;
		}
		case 43: {
			t = "#Login_RefreshReason_AccountDisabled";
			break;
		}
		case 69: {
			t = "#Login_RefreshReason_ParentalControlRestricted";
			break;
		}
		case 84: {
			t = "#Login_RefreshReason_RateLimitExceeded";
		}
	}
	return o.createElement(
		"div",
		{
			className: I.RefreshReasonContainer,
		},
		o.createElement(
			"div",
			{
				className: I.RefreshTitle,
			},
			Localize("#Login_RefreshSignIn"),
		),
		o.createElement(
			"div",
			{
				className: I.RefreshReason,
			},
			Localize(t),
		),
	);
}
function U() {
	return o.createElement(
		"div",
		{
			className: I.ConfirmCredntialsNag,
		},
		Localize("#Login_ConfirmCredentials"),
	);
}
function W(e) {
	const {
		onSubmit,
		status,
		autoFocus,
		refreshInfo,
		strAccountName,
		onAccountNameChange,
		strPassword,
		onPasswordChange,
		bRememberMe,
		onRememberMeChange,
		secureComputer = true,
	} = e;
	const [A, p] = useState(false);
	const g = T();
	const h = (() => {
		const e = useRef(true);
		useEffect(
			() => () => {
				e.current = false;
			},
			[e],
		);
		return useCallback(() => e.current, [e]);
	})();
	const C = status === 1 || status === 13;
	const f = status === 2 && !A;
	const y = f
		? o.createElement(oe, null, Localize("#Login_CheckCredentials"))
		: o.createElement(oe, null, "\xA0");
	const w = autoFocus && !strAccountName;
	const B = autoFocus && !!strAccountName;
	const v = !!e.refreshInfo;
	return o.createElement(
		lV,
		{
			onSubmit: () => {
				onSubmit().then(() => {
					if (h()) {
						p(false);
					}
				});
			},
			className: I.LoginForm,
		},
		o.createElement(K, {
			tone: f ? "danger" : undefined,
			label: o.createElement(
				X,
				{
					highlight: true,
				},
				Localize("#Login_SignIn_WithAccountName"),
			),
			value: strAccountName,
			onChange: (e) => {
				p(true);
				onAccountNameChange(e);
			},
			autoFocus: w,
			disabled: v,
		}),
		o.createElement(K, {
			tone: f ? "danger" : undefined,
			label: o.createElement(X, null, Localize("#Login_Password")),
			value: strPassword,
			onChange: (e) => {
				p(true);
				onPasswordChange(e);
			},
			type: "password",
			autoFocus: B,
		}),
		secureComputer
			? o.createElement(
					_.he,
					{
						toolTipContent: "#Login_RememberMe_Tooltip",
						direction: "bottom",
					},
					o.createElement(ee, {
						label: Localize("#Login_RememberMe_Short"),
						value: bRememberMe,
						onChange: onRememberMeChange,
					}),
				)
			: o.createElement(
					"div",
					{
						className: I.InsecureComputer,
					},
					Localize("#Login_InsecureComputer"),
				),
		o.createElement(re, {
			loading: C,
			refreshLogin: v,
		}),
		y,
		!g &&
			o.createElement(
				Be,
				{
					href: `${
						S.TS.HELP_BASE_URL
					}wizard/HelpWithLogin?redir=${encodeURIComponent(
						document.location.href,
					)}`,
					align: "center",
				},
				Localize("#Login_Help_SignIn"),
			),
	);
}
const V = 700;
function H(e) {
	const t = R7();
	const r = () => t.ownerWindow.screen.width < V;
	const [n, i] = useState(r());
	l6(t.ownerWindow, "resize", () => {
		i(r());
	});
	return o.createElement(
		"div",
		{
			className: I.QRSection,
		},
		n
			? o.createElement(Q, {
					...e,
				})
			: o.createElement(q, {
					...e,
				}),
	);
}
export function Mk(e) {
	const t = `${
		S.TS.STORE_BASE_URL
	}join/?guest=1&purchaseType=gift&checkout=1&redir=${encodeURIComponent(
		e.redirectURL,
	)}`;
	S.TS.STORE_BASE_URL;
	encodeURIComponent(e.redirectURL);
	return o.createElement(
		"div",
		{
			className: I.GuestLayout,
		},
		o.createElement(
			Re,
			{
				compact: true,
			},
			o.createElement(
				"div",
				{
					className: I.GuestContainer,
				},
				o.createElement(
					"div",
					{
						className: I.GuestText,
					},
					LocalizeInlineReactWithFallback(
						"#Login_Guest",
						o.createElement("a", {
							href: `${t}`,
							style: {
								textDecoration: "underline",
							},
						}),
					),
				),
				o.createElement(
					"a",
					{
						className: I.GuestLink,
						href: `${t}`,
					},
					o.createElement(
						"button",
						{
							className: I.GuestButton,
						},
						Localize("#Login_GuestContinue"),
					),
				),
			),
		),
	);
}
function q(e) {
	return o.createElement(Y, {
		...e,
	});
}
function Q(e) {
	const [t, r] = useState(false);
	if (t) {
		return o.createElement(Y, {
			...e,
			bShowHideButton: true,
			setShowQR: r,
		});
	} else {
		return o.createElement(Z, {
			setShowQR: r,
		});
	}
}
function Z(e) {
	return o.createElement(
		"div",
		{
			className: I.MessagingContainer,
		},
		o.createElement(
			"div",
			{
				className: I.MessagingTag,
			},
			Localize("#Login_MobileFlow_New"),
		),
		o.createElement(
			"div",
			{
				className: I.MessagingSubtitle,
			},
			o.createElement(
				"div",
				{
					className: I.MessagingSubtitle,
				},
				Localize("#Login_MobileFlow_SignIn_ScanQR"),
			),
		),
		o.createElement(
			"div",
			{
				className: I.MessagingButton,
				onClick: () => e.setShowQR(true),
			},
			Localize("#Login_MobileFlow_ShowMeQR_Button"),
		),
		o.createElement(
			"a",
			{
				href: `${S.TS.STORE_BASE_URL}mobile`,
				className: I.MessagingLink,
			},
			Localize("#Login_JoinBeta_Button"),
		),
	);
}
function Y(e) {
	const {
		onQRStatusChange,
		transport,
		onComplete,
		platform,
		refreshInfo,
		bShowHideButton = false,
		setShowQR,
	} = e;
	return o.createElement(
		"div",
		{
			className: I.QRCodeContainer,
		},
		o.createElement(
			X,
			{
				highlight: true,
			},
			Localize("#Login_SignIn_OrWithQRCode"),
		),
		o.createElement(
			"div",
			{
				className: I.QR,
			},
			o.createElement(E.V, {
				onStatusChange: onQRStatusChange,
				transport: transport,
				onComplete: onComplete,
				platform: platform,
				refreshInfo: refreshInfo,
			}),
		),
		bShowHideButton &&
			setShowQR &&
			o.createElement(
				"div",
				{
					className: I.QRHideLink,
					onClick: () => setShowQR(false),
				},
				Localize("#Button_Hide"),
			),
		o.createElement(
			"div",
			{
				className: I.UseMobileAppForQR,
			},
			LocalizeInlineReactWithFallback(
				"#Login_UseMobileAppForQR_Inline",
				o.createElement(Be, {
					href: `${S.TS.STORE_BASE_URL}mobile`,
					align: "center",
				}),
			),
		),
	);
}
function K(e) {
	const { label, error, tone, autoFocus, ...a } = e;
	const s = tone ?? (error ? "danger" : undefined);
	return o.createElement(
		"div",
		{
			className: I.TextField,
		},
		typeof label == "string" ? o.createElement(X, null, label) : label,
		o.createElement(
			$,
			{
				type: "error",
			},
			error,
		),
		o.createElement(J, {
			autoFocus: autoFocus,
			tone: s,
			...a,
		}),
	);
}
function X(e) {
	const { children, highlight } = e;
	return o.createElement(
		"div",
		{
			className: A_1(I.FieldLabel, highlight && I.Highlight),
		},
		children,
	);
}
function J(e) {
	const {
		value,
		onChange,
		type = "text",
		tone,
		className,
		autoFocus,
		disabled,
	} = e;
	return o.createElement("input", {
		value: value,
		type: type,
		autoFocus: autoFocus,
		onChange: (e) => onChange(e.target.value),
		className: A_1(I.TextInput, tone === "danger" && I.Danger, className),
		disabled: disabled,
	});
}
function $(e) {
	const { children, type } = e;
	return o.createElement(
		"div",
		{
			className: A_1(I.FieldHint, type === "error" && I.Error),
		},
		children,
	);
}
function ee(e) {
	const { label, onChange, value } = e;
	let i = () => {
		if (onChange) {
			onChange(!value);
		}
	};
	return o.createElement(
		"div",
		{
			className: I.CheckboxField,
			onClick: i,
			onKeyPress: (e) => {
				if (e.key == " ") {
					i();
					e.preventDefault();
				}
			},
		},
		o.createElement(te, {
			value: value,
		}),
		o.createElement(
			"div",
			{
				className: I.CheckboxFieldLabel,
			},
			label,
		),
	);
}
function te(e) {
	const { value } = e;
	return o.createElement(
		"div",
		{
			tabIndex: 0,
			className: I.Checkbox,
		},
		value &&
			o.createElement(
				"div",
				{
					className: I.Check,
				},
				o.createElement(h.Jlk, {
					strokeWidth: 35,
				}),
			),
	);
}
function re(e) {
	const { refreshLogin, ...r } = e;
	if (refreshLogin && SteamClient.User?.StartShutdown) {
		return o.createElement(ie, null);
	} else {
		return o.createElement(ne, {
			...r,
		});
	}
}
function ne(e) {
	return o.createElement(
		"div",
		{
			className: I.SignInButtonContainer,
		},
		o.createElement(
			ae,
			{
				...e,
			},
			Localize("#Login_SignIn"),
		),
	);
}
function ie() {
	return o.createElement(
		"div",
		{
			className: I.RefreshButtonContainer,
		},
		o.createElement(
			"button",
			{
				className: I.SubmitButton,
				type: "submit",
			},
			Localize("#Login_SignIn"),
		),
		o.createElement(
			"button",
			{
				className: I.RefreshQuitButton,
				onClick: () => SteamClient.User.StartShutdown(true),
			},
			Localize("#Login_ExitSteam"),
		),
	);
}
function ae(e) {
	return o.createElement(se, {
		type: "submit",
		...e,
	});
}
function se(e) {
	const { className, loading, disabled, children, ...a } = e;
	const s = disabled || loading;
	return o.createElement(
		"button",
		{
			className: A_1(I.SubmitButton, loading && I.Loading, className),
			disabled: s,
			...a,
		},
		children,
		loading &&
			o.createElement(
				"div",
				{
					className: I.LoadingContainer,
				},
				o.createElement(kt, {
					size: "small",
				}),
			),
	);
}
function oe(e) {
	const t = e.children || "\xA0";
	return o.createElement(
		"div",
		{
			className: I.FormError,
		},
		t,
	);
}
function le() {
	return o.createElement(
		Re,
		{
			compact: true,
		},
		o.createElement(
			wt,
			{
				alignItems: "center",
				className: A_1(I.WaitingForTokenContainer, S.TS.IN_STEAMUI && I.Client),
			},
			o.createElement(C.t, {
				size: "xlarge",
			}),
			o.createElement(
				"div",
				{
					className: A_1(I.Description),
				},
				Localize(
					S.TS.IN_STEAMUI
						? "#Login_ConnectingToSteam"
						: "#Login_LoadingAccountInfo",
				),
			),
		),
	);
}
export function kt(e) {
	const { size } = e;
	return o.createElement("div", {
		className: A_1(
			I.LoadingSpinner,
			size == "small" && I.Small,
			(size == "medium" || !size) && I.Medium,
			size == "large" && I.Large,
		),
	});
}
function me(e) {
	return o.createElement(
		"div",
		{
			className: I.OfferOffline,
		},
		o.createElement(
			"button",
			{
				className: I.OfferOfflineButton,
				onClick: e.onRequestOffline,
			},
			Localize("#Login_GoOffline_Button"),
		),
	);
}
function ue(e) {
	const {
		reset,
		failure,
		onRequestOffline,
		errorReference,
		extendedErrorMessage,
	} = e;
	const { title, description } = tP(failure, extendedErrorMessage);
	const c = S.TS.IN_STEAMUI && failure == w.eF.Network;
	return o.createElement(
		Re,
		{
			compact: true,
		},
		o.createElement(
			wt,
			{
				alignItems: "center",
				gap: 12,
			},
			o.createElement(
				"div",
				{
					className: I.FailureTitle,
				},
				title,
			),
			o.createElement(
				"div",
				{
					className: I.FailureDescription,
				},
				description,
			),
			c &&
				o.createElement(
					"div",
					{
						className: I.FailureDescription,
					},
					Localize("#Login_GoOffline_Description"),
				),
			o.createElement(
				Ye,
				{
					className: I.FailureButtons,
				},
				o.createElement(
					se,
					{
						className: I.TryAgainButton,
						onClick: reset,
					},
					Localize("#Button_Retry"),
				),
				c &&
					o.createElement(me, {
						onRequestOffline: onRequestOffline,
					}),
			),
		),
		errorReference &&
			o.createElement(
				"div",
				{
					className: I.MutedErrorReference,
				},
				Localize("#Login_Error_Reference", errorReference),
			),
	);
}
export function tP(e, t = "") {
	let r = {
		title: "",
		description: "",
	};
	switch (e) {
		case w.eF.None: {
			return {
				title: "",
				description: "",
			};
		}
		case w.eF.Expired: {
			r = {
				title: Localize("#Login_Error_Expired_Title"),
				description: Localize("#Login_Error_Expired_Description"),
			};
			break;
		}
		case w.eF.Network: {
			r = {
				title: Localize("#Login_Error_Network_Title"),
				description: Localize("#Login_Error_Network_Description"),
			};
			break;
		}
		case w.eF.MoveAuthenticator: {
			r = {
				title: Localize("#Error_Generic"),
				description: Localize("#Login_Error_MoveAuthenticator_Description"),
			};
			break;
		}
		case w.eF.RateLimitExceeded: {
			r = {
				title: Localize("#Login_Error_RateLimit_Title"),
				description: Localize("#Login_Error_RateLimit_Description"),
			};
			break;
		}
		case w.eF.AnonymousLogin: {
			r = {
				title: Localize("#Login_Error_Anonymous_Title"),
				description: Localize("#Login_Error_Anonymous_Description"),
			};
			break;
		}
		case w.eF.Generic:
		default: {
			r = {
				title: Localize("#Error_Generic"),
				description: Localize("#Login_Error_Default_Description"),
			};
		}
	}
	if (t) {
		r.description = t;
	}
	return r;
}
function Ae(e) {
	const { reset } = e;
	return o.createElement(ue, {
		reset: reset,
		failure: w.eF.Generic,
	});
}
function pe(e) {
	const { type, onSubmitCode, status, accountName, associatedLabel, onBack } =
		e;
	const [l, c] = useState([]);
	const [m, u] = useState(false);
	const [d, A] = useState(false);
	const [p, g] = useState(false);
	const [h, C] = useState(0);
	const _ = type === "mobile";
	const f = l.join("");
	const y = e1(f, p);
	const S = (e) => {
		A(true);
		onSubmitCode(e).then(() => {
			u(false);
			A(false);
		});
	};
	const w = !m && (status === 11 || status === 10);
	let v;
	let E;
	if (p) {
		if (type === "mobile") {
			E = o.createElement(he, null);
			v = "#Login_UseMobileCode";
		} else {
			E = o.createElement(he, null);
			v = "#Login_UseEmailCode";
		}
	} else {
		E =
			type === "mobile"
				? o.createElement(Ce, null)
				: o.createElement(_e, {
						emailAddress: associatedLabel,
					});
		v = "#Login_UseBackupCode";
	}
	return o.createElement(
		Re,
		{
			title: o.createElement(qR, null),
			compact: true,
		},
		o.createElement(
			lV,
			{
				onSubmit: () => {
					if (y) {
						S(f);
					}
				},
			},
			o.createElement(
				wt,
				{
					alignItems: "center",
					gap: 14,
				},
				o.createElement(fe, {
					type: type,
					accountName: accountName,
				}),
				o.createElement(
					"div",
					{
						className: I.ConfirmationEntryContainer,
					},
					o.createElement(
						wt,
						{
							alignItems: "center",
							gap: 2,
						},
						w &&
							o.createElement(oe, null, Localize("#Login_IncorrectSteamGuard")),
						o.createElement(Me, {
							key: h,
							value: l,
							onChange: (e) => {
								if (!m) {
									u(true);
								}
								c(e);
								const t = e.join("");
								if (e1(t, p)) {
									S(t);
								}
							},
							tone: w ? "danger" : undefined,
							loading: d,
							backupCode: p,
						}),
					),
					E,
				),
				_ &&
					o.createElement(
						Be,
						{
							onClick: () => {
								g(!p);
								c([]);
								onSubmitCode("");
								C(h + 1);
							},
							align: "center",
						},
						Localize(v),
					),
				o.createElement(ge, {
					type: type,
					onCodeHelp: e.onCodeHelp,
				}),
			),
		),
	);
}
function ge(e) {
	if (q_1()) {
		return null;
	}
	let t;
	let r;
	if (e.type === "mobile") {
		t = `${S.TS.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`;
		r = Localize("#Login_Help_AccessMobileApp");
	} else {
		t = `${S.TS.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`;
		r = Localize("#Login_Help_AccessEmail");
	}
	if (e.onCodeHelp) {
		return o.createElement(
			Be,
			{
				onClick: () => e.onCodeHelp(t),
				align: "center",
			},
			r,
		);
	} else {
		return o.createElement(
			Be,
			{
				href: t,
				align: "center",
			},
			r,
		);
	}
}
function he() {
	return o.createElement(
		Ye,
		{
			justifyContent: "space-evenly",
			alignItems: "center",
			className: I.EnterBackupCodeContainer,
		},
		o.createElement(
			wt,
			null,
			o.createElement(
				"div",
				{
					className: I.EnterCodeFromMobile,
				},
				Localize("#Login_EnterBackupCode"),
			),
			o.createElement(
				"div",
				{
					className: I.Label,
				},
				Localize("#Login_EnterBackupCodeDescription"),
			),
		),
	);
}
function Ce() {
	return o.createElement(
		Ye,
		{
			justifyContent: "space-evenly",
			alignItems: "center",
			className: I.EnterCodeFromMobileContainer,
		},
		o.createElement(
			"div",
			{
				className: I.EnterCodeFromMobile,
			},
			Localize("#Login_EnterMobileCode"),
		),
		o.createElement(gn, {
			className: I.AwaitingMobileConfIcon,
		}),
	);
}
function _e(e) {
	return o.createElement(
		Ye,
		{
			justifyContent: "space-evenly",
			alignItems: "center",
			className: I.EnterCodeFromEmailContainer,
		},
		o.createElement(
			Te,
			{
				align: "center",
				spacing: 6,
			},
			o.createElement(
				"div",
				{
					className: I.EnterCodeFromEmail,
				},
				LocalizeReact(
					"#Login_EnterEmailCode",
					o.createElement(
						"span",
						{
							className: I.EnterCodeEmailAddress,
						},
						e.emailAddress,
					),
				),
			),
		),
		o.createElement(eU, {
			className: I.AwaitingEmailConfIcon,
		}),
	);
}
function fe(e) {
	const { accountName, type } = e;
	const n =
		type === "mobile"
			? Localize("#Login_MobileProtectingAccount")
			: Localize("#Login_EmailProtectingAccount");
	const i = T();
	return o.createElement(
		"div",
		{
			className: I.ProtectingAccount,
		},
		o.createElement(
			"div",
			{
				className: I.Label,
			},
			LocalizeReact(
				"#Login_ActiveAccountName",
				o.createElement(
					"span",
					{
						className: I.AccountName,
					},
					accountName,
				),
			),
		),
		!i &&
			o.createElement(
				"div",
				{
					className: I.Description,
				},
				n,
			),
	);
}
export function e5() {
	return o.createElement(
		wt,
		{
			alignItems: "center",
		},
		o.createElement(
			"div",
			{
				className: I.ConfirmationContainer,
			},
			o.createElement("img", {
				src: c,
			}),
			o.createElement(
				"div",
				{
					className: I.AwaitingMobileConfText,
				},
				LocalizeInlineReactWithFallback("#Login_AwaitingMobileConfirmation"),
			),
		),
	);
}
export function gn(e) {
	return o.createElement(
		"svg",
		{
			viewBox: "0 0 33 49",
			fill: "currentColor",
			className: e.className,
		},
		o.createElement("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z",
		}),
		o.createElement("path", {
			fill: "currentColor",
			d: "M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z",
		}),
		o.createElement("path", {
			fill: "currentColor",
			d: "M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z",
		}),
		o.createElement("path", {
			fill: "currentColor",
			d: "M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z",
		}),
		o.createElement("path", {
			fill: "currentColor",
			d: "M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z",
		}),
		o.createElement("path", {
			fill: "currentColor",
			d: "M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z",
		}),
	);
}
export function eU(e) {
	return o.createElement(
		"svg",
		{
			viewBox: "0 0 58 56",
			fill: "none",
			className: e.className,
		},
		o.createElement("path", {
			d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
			fill: "#1A99FF",
		}),
	);
}
function we(e) {
	const { type, accountName, onUseCodeOverride } = e;
	const i = T();
	const a = o.createElement(ge, {
		type: "mobile",
		onCodeHelp: e.onCodeHelp,
	});
	const s = i
		? o.createElement(
				"div",
				{
					style: {
						paddingBottom: "20px",
					},
				},
				o.createElement(
					Be,
					{
						align: "center",
						onClick: onUseCodeOverride,
					},
					Localize("#Login_EnterCodeInstead"),
				),
			)
		: o.createElement(
				"div",
				{
					className: I.EnterCodeInsteadLink,
				},
				o.createElement(
					Be,
					{
						align: "center",
						onClick: onUseCodeOverride,
					},
					Localize("#Login_EnterCodeInstead"),
				),
			);
	return o.createElement(
		Re,
		{
			title: o.createElement(qR, null),
			compact: true,
		},
		o.createElement(
			wt,
			{
				gap: S.TS.IN_STEAMUI ? 24 : 40,
			},
			o.createElement(fe, {
				type: type,
				accountName: accountName,
			}),
			o.createElement(e5, null),
			o.createElement(
				"div",
				{
					className: I.LinkContainer,
				},
				s,
				a,
			),
		),
	);
}
function Be(e) {
	const { children, align, inline } = e;
	const i = A_1(I.TextLink, align === "center" && I.TextAlignCenter);
	if ("href" in e) {
		const r = S.TS.IN_STEAMUI ? `steam://openurl_external/${e.href}` : e.href;
		return o.createElement(
			"a",
			{
				className: i,
				href: r,
			},
			children,
		);
	}
	{
		const r = inline ? "span" : "div";
		return o.createElement(
			r,
			{
				className: i,
				onClick: e.onClick,
			},
			children,
		);
	}
}
export function lV(e) {
	const { onSubmit, children, className } = e;
	return o.createElement(
		"form",
		{
			onSubmit: (e) => {
				e.preventDefault();
				onSubmit();
				return false;
			},
			className: className,
		},
		children,
	);
}
export function wt(e) {
	const { alignItems, justifyContent, gap, className, children } = e;
	const s = A_1(
		I.FlexCol,
		alignItems === "center" && I.AlignItemsCenter,
		justifyContent === "center" && I.JustifyContentCenter,
		className,
	);
	const l = gap
		? {
				gap: typeof gap == "number" ? `${gap}px` : gap,
			}
		: undefined;
	return o.createElement(
		"div",
		{
			className: s,
			style: l,
		},
		children,
	);
}
export function Ye(e) {
	const { children, justifyContent, alignItems, className } = e;
	const a = {
		display: "flex",
		flexDirection: "row",
		justifyContent: justifyContent,
		alignItems: alignItems,
	};
	return o.createElement(
		"div",
		{
			style: a,
			className: className,
		},
		children,
	);
}
function Me(e) {
	const { onChange, backupCode, ...n } = e;
	return o.createElement(g.a, {
		length: H_1(backupCode),
		backupCode: backupCode,
		onChange: (e) => {
			const n = (e = e.map((e) => e.toUpperCase())).join("").trim();
			if (JP(n, backupCode)) {
				onChange(e);
			}
		},
		autoFocus: true,
		...n,
		allowCharacter: (e) => /\w/g.test(e),
	});
}
function Te(e) {
	const { children, spacing = 0, align } = e;
	return o.createElement(
		wt,
		{
			alignItems: align,
		},
		o.Children.map(children, (e, t) =>
			e
				? o.createElement(
						"div",
						{
							style:
								t > 0
									? {
											paddingTop: `${spacing}px`,
										}
									: undefined,
						},
						e,
					)
				: null,
		).filter(Boolean),
	);
}
function Re(e) {
	const { title, children, compact } = e;
	const i = T();
	return o.createElement(
		wt,
		{
			gap: S.TS.IN_STEAMUI ? 0 : 32,
			className: A_1(
				I.StandardLayout,
				i && I.Embedded,
				compact && I.Compact,
				S.TS.IN_STEAMUI && "IN_CLIENT",
			),
		},
		typeof title == "string"
			? o.createElement(
					"div",
					{
						className: I.PrimaryHeader,
					},
					title,
				)
			: title,
		o.createElement(
			"div",
			{
				className: I.FormContainer,
			},
			children,
		),
	);
}
export function qR(e) {
	const {
		realm = S.TS.EREALM,
		launcherType = S.TS.IN_STEAMUI ? S.TS.LAUNCHER_TYPE : undefined,
		className = I.HeaderLogo,
	} = e;
	if (launcherType === 8) {
		return o.createElement("div", {
			className: className,
		});
	} else {
		return o.createElement(
			"div",
			{
				className: I.LogoContainer,
			},
			o.createElement(De, {
				onBack: e.onBack,
			}),
			realm !== n.TU.k_ESteamRealmChina
				? o.createElement(Ne, {
						className: className,
					})
				: o.createElement(Fe, {
						className: className,
					}),
			" ",
		);
	}
}
function De(e) {
	if (e.onBack) {
		return o.createElement(
			"div",
			{
				className: I.BackArrowContainer,
				onClick: e.onBack,
			},
			o.createElement(h.Q38, {
				className: I.BackArrow,
			}),
		);
	} else {
		return null;
	}
}
function Ne(e) {
	return o.createElement(
		"svg",
		{
			viewBox: "0 0 153 46",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: e.className,
		},
		o.createElement("path", {
			d: "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
			fill: "#E0E1E6",
		}),
		o.createElement("path", {
			d: "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
			fill: "#E0E1E6",
		}),
		o.createElement("path", {
			d: "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
			fill: "#E0E1E6",
		}),
		o.createElement("path", {
			d: "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
			fill: "#E0E1E6",
		}),
		o.createElement("path", {
			d: "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
			fill: "#E0E1E6",
		}),
		o.createElement("path", {
			d: "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
			fill: "#E0E1E6",
		}),
		o.createElement("path", {
			d: "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
			fill: "#E0E1E6",
		}),
		o.createElement("path", {
			d: "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
			fill: "#E0E1E6",
		}),
		o.createElement("path", {
			d: "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
			fill: "#E0E1E6",
		}),
	);
}
function Fe(e) {
	return o.createElement(
		"svg",
		{
			viewBox: "0 0 232.73 46.07",
			xmlns: "http://www.w3.org/2000/svg",
			className: e.className,
			fill: "#E0E1E6",
		},
		o.createElement(
			"g",
			{
				stroke: "null",
				id: "svg_2",
			},
			o.createElement("path", {
				stroke: "null",
				id: "svg_3",
				d: "m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037",
			}),
			o.createElement("path", {
				stroke: "null",
				id: "svg_4",
				d: "m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836",
			}),
			o.createElement("path", {
				stroke: "null",
				id: "svg_5",
				d: "m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287",
			}),
		),
		o.createElement("path", {
			stroke: "null",
			id: "svg_6",
			d: "m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z",
		}),
		o.createElement(
			"g",
			{
				id: "svg_7",
			},
			o.createElement("path", {
				id: "svg_8",
				d: "m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z",
			}),
			o.createElement("path", {
				id: "svg_9",
				d: "m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z",
			}),
			o.createElement("path", {
				id: "svg_10",
				d: "m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z",
			}),
			o.createElement("path", {
				id: "svg_11",
				d: "m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z",
			}),
		),
		o.createElement(
			"g",
			{
				id: "svg_12",
			},
			o.createElement("path", {
				id: "svg_13",
				d: "m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z",
			}),
			o.createElement("path", {
				id: "svg_14",
				d: "m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z",
			}),
		),
	);
}
function Ge() {
	return o.createElement(
		wt,
		{
			alignItems: "center",
			justifyContent: "center",
		},
		o.createElement(C.t, null),
	);
}
