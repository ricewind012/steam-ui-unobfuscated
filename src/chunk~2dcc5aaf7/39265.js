import {
	Localize,
	LocalizeInlineReactWithFallback,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i, { useState, useRef, useEffect, useCallback } from "./63696.js";
import a from "./78325.js";
import s from "./64608.js";
import o from "./35488.js";
import l from "./37909.js";
import c, { rP, Qn, Pr } from "./72476.js";
import { UseLoginStateObserver } from "../../actual_src/stores/loginstore.js";
import u from "./41230.js";
import d, { q3 } from "./90095.js";
import A, { lX } from "./31084.js";
import p from "./69164.js";
import _g from "./61657.js";
import h from "./90242.js";
import C from "./3524.js";
import _ from "./84252.js";
import f from "./88750.js";
import b, { A as A_1 } from "./90765.js";
import S, { gc, $$, xM, cZ } from "./52451.js";
import w from "./81994.js";
import B, { tI, yL, ED, f_ as f_1, mR, N4, Av, jh } from "./77347.js";
import v, { Xf } from "./31319.js";
import I from "./42982.js";
import E from "./23038.js";
import M from "./58254.js";
import T from "./4690.js";
import R from "./35194.js";
import F from "./52847.js";
import G from "./81969.js";
import z from "./76662.js";
import x from "./22222.js";
import U from "./44846.js";
import { y6, kE } from "./89600.js";
import V from "./46422.js";
import H, { U as U_1 } from "./27238.js";
import j from "./55025.js";
import Z, { V as V_1 } from "./43802.js";
import Y from "./93681.js";
import { _ as __1 } from "./67338.js";
import { Y as Y_1 } from "./28916.js";
import { B as B_1 } from "./45011.js";
import { uX } from "./54644.js";
import { R7 } from "./11131.js";
import ae from "./5482.js";
import se, { Qt } from "./18057.js";
import oe from "./95311.js";
import { zy } from "./49519.js";
import ce from "./56970.js";
import { Di } from "./13925.js";
import { ez } from "./31800.js";
import de from "./92228.js";
import { e1, H as H_1, JP } from "./28036.js";
import pe from "./21616.js";
import he from "./66947.js";
import _e from "./37198.js";
import fe from "./90869.js";
import be from "./26853.js";
import ye, { N_ as N_1, tP } from "./89791.js";
import Se from "./87935.js";
import { tn } from "./18869.js";
import Be from "./93025.js";
import { $2 } from "./96680.js";
import { D7 } from "./33572.js";
import Ze from "./30449.js";
import Ye, { k1 } from "./13688.js";
import { q as q_2 } from "./29285.js";
import Xe from "./6496.js";
import { tH, tG, q_ as q_2 } from "./87232.js";
import $e from "./50376.js";
import et from "./50350.js";
import tt, { Xy } from "./22969.js";
import rt from "./83665.js";
function k(e) {
	let t = gc(R.o.CurrentLanguage);
	let r = gc(R.o.AvailableLanguages);
	let n = ((e, t) => {
		const [r, n] = i.useState(0);
		$$(
			() => {
				n(e ? r + 1 : 0);
			},
			t,
			[e],
		);
		if (e && e.length != 0) {
			return e[r % e.length];
		} else {
			return null;
		}
	})(gc(R.o.WelcomeText), 5000);
	let a = ((e, t, r) =>
		i.useCallback(
			(n) => {
				let i = null;
				if (e != n.strShortName) {
					i = R.o.SetCurrentLanguage(n);
					r();
				}
				if (i) {
					i.then(t);
				} else {
					t();
				}
			},
			[e, t, r],
		))(t, e.onContinue, e.onLocalizationChanged);
	let s = {
		enter: I.Enter,
		enterActive: I.EnterActive,
		exit: I.Exit,
		exitActive: I.ExitActive,
		exitDone: I.ExitDone,
	};
	let o = A_1(I.LanguageScreen, e.animate && I.Animate);
	const l = i.useRef(null);
	return i.createElement(
		p.Z,
		{
			className: o,
			onCancelButton: () => true,
			onCancelActionDescription: null,
		},
		i.createElement(
			p.Z,
			{
				className: I.LeftColumn,
			},
			i.createElement(
				E.A,
				{
					className: I.WelcomeTransitionGroup,
					appear: true,
					enter: true,
					exit: true,
				},
				i.createElement(
					M.A,
					{
						nodeRef: l,
						key: `${n.strSelect} ${n.strWelcome}`,
						classNames: s,
						in: true,
						timeout: 2000,
					},
					i.createElement(
						"div",
						{
							ref: l,
							className: I.WelcomeTextGroup,
						},
						i.createElement(
							"div",
							{
								className: I.WelcomeText,
							},
							n.strWelcome,
						),
						i.createElement(
							"div",
							{
								className: I.ChooseLanguageLabel,
							},
							n.strSelect,
						),
					),
				),
			),
		),
		i.createElement(
			p.Z,
			{
				className: I.RightColumn,
			},
			i.createElement(D, {
				languages: r,
				onSelect: a,
			}),
		),
	);
}
function D(e) {
	return i.createElement(
		p.Z,
		{
			className: I.LanguageList,
			noFocusRing: true,
			autoFocus: true,
			navEntryPreferPosition: T.iU.FIRST,
		},
		e.languages.map((t) =>
			i.createElement(N, {
				key: t.strShortName,
				language: t,
				onSelect: e.onSelect,
			}),
		),
	);
}
function N(e) {
	if (e.language.strShortName == "none") {
		return null;
	}
	return i.createElement(
		p.Z,
		{
			className: I.LanguageItem,
			onActivate: () => e.onSelect(e.language),
			noFocusRing: true,
			autoFocus: true,
		},
		e.language.strLocalizedName,
	);
}
function O(e) {
	let t = gc(R.o.CurrentTimeZoneID);
	let r = gc(R.o.AvailableTimeZones);
	let n = e.onContinue;
	let a = i.useCallback(
		(e) => {
			n();
		},
		[n],
	);
	let s = A_1(F.TimezoneScreen, e.animate && F.Animate);
	return i.createElement(
		p.Z,
		{
			className: s,
			onCancelButton: e.onBack,
		},
		i.createElement(
			p.Z,
			{
				className: F.LeftColumn,
			},
			i.createElement(
				"div",
				{
					className: F.WelcomeTextGroup,
				},
				i.createElement(
					"div",
					{
						className: F.WelcomeText,
					},
					(0, Localize)("#Settings_TimeAndDate_ChooseTimezone_OOBE"),
				),
			),
		),
		i.createElement(
			p.Z,
			{
				className: F.RightColumn,
			},
			i.createElement(L, {
				currentTimeZoneID: t,
				timezones: r,
				onSelect: a,
			}),
		),
	);
}
function P(e) {
	return i.createElement(
		p.Z,
		{
			className: F.TimezoneItem,
			onActivate: () => e.onSelect(e.tz.timezoneID),
			onFocus: () => R.o.SetCurrentTimeZoneID(e.tz.timezoneID),
			noFocusRing: true,
			autoFocus: e.bSelected,
		},
		i.createElement(G.CY, {
			tz: e.tz,
		}),
	);
}
function L(e) {
	return i.createElement(
		p.Z,
		{
			className: F.TimezoneList,
			noFocusRing: true,
			autoFocus: true,
			navEntryPreferPosition: T.iU.FIRST,
		},
		e.timezones.map((t) =>
			i.createElement(P, {
				key: t.timezoneID,
				tz: t,
				bSelected: e.currentTimeZoneID == t.timezoneID,
				onSelect: e.onSelect,
			}),
		),
	);
}
function q(e) {
	let {
		leftIcons: t,
		rightIcons: r,
		children: n,
		"flow-children": a,
		disabled: s,
		...o
	} = e;
	if (!o.onClick && !o.onActivate) {
		o.onOKActionDescription = null;
	}
	return i.createElement(
		p.Z,
		{
			noFocusRing: true,
			focusable: !s,
			...o,
			className: A_1(j.OOBEButton, s && j.Disabled),
		},
		t &&
			i.createElement(
				"div",
				{
					className: A_1(j.Icons, j.Left),
				},
				t,
			),
		i.createElement(
			p.Z,
			{
				className: j.Label,
				"flow-children": a,
			},
			n,
		),
		r &&
			i.createElement(
				"div",
				{
					className: A_1(j.Icons, j.Left),
				},
				r,
			),
	);
}
function Q(e) {
	const { leftIcons: t, label: r, ...n } = e;
	const a = i.useRef(undefined);
	return i.createElement(
		p.Z,
		{
			className: j.OOBEButton,
			focusable: false,
			onClick: () => {
				if (n.onChange) {
					n.onChange(!n.value);
				}
				a.current?.TakeFocus();
			},
			navRef: a,
		},
		t &&
			i.createElement(
				"div",
				{
					className: A_1(j.Icons, j.Left),
				},
				t,
			),
		i.createElement(
			p.Z,
			{
				className: j.Label,
			},
			r,
		),
		i.createElement(s.Hk, {
			...n,
		}),
	);
}
function te(e) {
	tI();
	i.useEffect(() => {
		const e = B.OQ.Get().connectivityTestState;
		if (
			!B.OQ.Get().hasInternetConnection &&
			e.eConnectivityTestResult == U.ck.k_EConnectivityTestResult_Unknown &&
			!e.bChecking
		) {
			B.OQ.Get().RecheckConnectivity();
		}
	}, []);
	const t = yL();
	const r = ED();
	const n = ((e, t) => {
		const [r, n] = i.useState(!V.oy.BIsInOOBE || !e);
		i.useEffect(() => {
			if (!r && !e) {
				n(true);
			}
		}, [r, e]);
		return r && t;
	})(t, r);
	const a = y6();
	const s = i.useRef(undefined);
	((e, t) => {
		i.useEffect(() => {
			let t = e.current;
			if (t.BFocusWithin()) {
				let e = t.NavTree().GetLastFocusedNode().m_element;
				let r = t.Node().m_element;
				let n = true;
				for (let t = e; t && t != r; t = t.parentElement) {
					if (t.previousSibling) {
						n = false;
						break;
					}
				}
				if (!n) {
					e.scrollIntoView();
				}
			} else if (t.NavTree().IsActiveFocusNavTree()) {
				t.TakeFocus();
			}
		}, [e, t.length]);
	})(s, a);
	const l =
		UseLoginStateObserver.b.GetLoginUsers().length != 0 && !V.oy.BIsInOOBE;
	const c = A_1(z.NetworkScreen, e.animate && z.Animate);
	const u = R7();
	return i.createElement(
		p.Z,
		{
			className: c,
			onCancelButton: e.onBack,
		},
		i.createElement(
			p.Z,
			{
				className: z.LeftColumn,
			},
			i.createElement(
				"div",
				{
					className: z.WelcomeText,
				},
				(0, Localize)("#Login_Welcome_ChooseYourNetwork"),
			),
			i.createElement(re, null),
		),
		i.createElement(
			p.Z,
			{
				className: z.RightColumn,
				autoFocus: true,
			},
			i.createElement(
				p.Z,
				{
					className: z.NetworkList,
					navEntryPreferPosition: T.iU.PREFERRED_CHILD,
					navRef: s,
				},
				n &&
					i.createElement(
						p.Z,
						{
							className: z.ListSection,
						},
						i.createElement(ne, null),
					),
				i.createElement(
					p.Z,
					{
						className: z.ListSection,
						preferredFocus: true,
					},
					a.map((t) =>
						i.createElement(ie, {
							key: t.key,
							accessPoint: t,
							canContinue: e.canContinue,
							onContinue: e.onContinue,
						}),
					),
					a.length == 0 &&
						i.createElement(
							q,
							{
								rightIcons: t && i.createElement(o.Spinner, null),
							},
							(0, Localize)("#Login_NoNetworksFound"),
						),
					t &&
						r &&
						i.createElement(
							q,
							{
								onActivate: () => V_1(),
							},
							(0, Localize)("#Settings_Internet_Custom_Network_Button"),
						),
					l &&
						i.createElement(
							q,
							{
								onActivate: e.onContinueOffline,
							},
							(0, Localize)("#Login_LoginOffline"),
						),
				),
				i.createElement(
					p.Z,
					{
						className: z.ListSection,
					},
					i.createElement(
						q,
						{
							onActivate: () => B_1(u.ownerWindow),
							rightIcons: i.createElement(o.Carat, {
								direction: "right",
							}),
						},
						(0, Localize)("#Settings_Internet_Proxy_Settings"),
					),
				),
			),
		),
	);
}
function re(e) {
	const t = f_1();
	const r = mR();
	if (t) {
		return i.createElement(
			"div",
			{
				className: z.NetworkWarning,
			},
			i.createElement(
				"div",
				{
					className: z.NetworkWarningLabel,
				},
				i.createElement(o.Caution, null),
				r
					? (0, Localize)("#Settings_Internet_Captive_Portal_Detected")
					: (0, Localize)(
							"#Settings_Internet_Connected_To_Network_But_Not_Internet",
						),
			),
			r &&
				i.createElement(
					"div",
					{
						className: z.CaptivePortalButtonContainer,
					},
					i.createElement(
						s.$n,
						{
							onClick: (e) => Y_1(uX(e)),
						},
						(0, Localize)("#Settings_Internet_Captive_Portal_Login_Button"),
					),
				),
		);
	} else {
		return null;
	}
}
function ne(e) {
	const t = yL();
	return i.createElement(Q, {
		value: t,
		onChange: (e) => B.OQ.Get().SetWifiEnabled(e),
		label: (0, Localize)("#Settings_Internet_Wifi_Enabled"),
	});
}
function ie(e) {
	const { accessPoint: t, canContinue: r, onContinue: n } = e;
	__1(t);
	const a = t.type == x.WO.Wireless;
	const s = t.isConnected;
	const l = N4();
	const c = Av();
	const m = s && l;
	const u =
		s &&
		!l &&
		c.eConnectivityTestResult != U.ck.k_EConnectivityTestResult_Unknown;
	const d = t.showAsLocked;
	const A = t.displayName;
	const p = kE(t) || (t.isConnected && c.bChecking);
	const g = i.useCallback(() => {
		U_1(t);
	}, [t]);
	const h = xM();
	const C = i.useCallback(() => {
		if (t.isConnected && B.OQ.Get().hasInternetConnection && !h() && n) {
			n();
		}
	}, [t, n, h]);
	const _ = i.useCallback(() => {
		V_1(
			{
				accessPoint: t,
			},
			{
				fnOnClose: C,
			},
		);
	}, [t, C]);
	if (!t) {
		return null;
	}
	const f = {};
	if (t.isConnectable) {
		f.onOKButton = _;
		f.onOKActionDescription = (0, Localize)("#Settings_Internet_Connect");
	} else if (t.isConnected && r) {
		f.onOKButton = n;
		f.onOKActionDescription = (0, Localize)("#Login_Continue");
	} else {
		f.onOKButton = () => {};
		f.onOKActionDescription = null;
	}
	f.onMenuActionDescription = (0, Localize)("#Settings_Internet_Info");
	f.onMenuButton = g;
	const b = s && r ? n : t.isConnectable ? _ : g;
	return i.createElement(
		q,
		{
			...f,
			onClick: b,
			leftIcons: p
				? i.createElement(o.Spinner, null)
				: m
					? i.createElement(o.Checkmark, {
							className: z.Checkmark,
						})
					: u
						? i.createElement(o.Caution, null)
						: null,
			rightIcons: i.createElement(
				i.Fragment,
				null,
				d &&
					i.createElement(o.Lock, {
						locked: true,
					}),
				a
					? i.createElement(o.WirelessNetwork, {
							strength: t?.wirelessAPInfo?.estrength,
						})
					: i.createElement(o.WiredNetwork, null),
			),
		},
		i.createElement(Y.r, null, A),
	);
}
const ge = pe;
const Ce = he;
function Ee(e) {
	const {
		transport: t,
		onSuccess: r,
		platform: n,
		autoFocus: a,
		refreshInfo: s,
		renderSuccess: o = () => i.createElement(We, null),
		lastResult: l,
		navRef: c,
		onGoBack: m,
		bQRCodeOnly: u,
	} = e;
	const d = ye.sW;
	const A = N_1({
		transport: t,
		platform: n,
		onSuccess: r,
		refreshInfo: s,
		onDeviceDetails: d,
		onGetMachineAuth: (e) => SteamClient.Auth.GetSteamGuardData(e),
	});
	const p = $2();
	const g = D7();
	i.useEffect(() => () => g?.SetVirtualKeyboardHidden(), [p, g]);
	const h = (t) => {
		A.onQRStatusChange?.(t);
		e.onQRStatusChange?.(t);
	};
	if (l != null && l != 1) {
		return i.createElement(Ge, {
			reset: () => window.location.reload(),
			failure: fe.eF.Generic,
			errorReference: l.toString(),
		});
	}
	if (!A.bInPasswordFlow) {
		const r = i.createElement(Te, {
			strAccountName: A.strAccountName,
			onAccountNameChange: A.onAccountNameChange,
			strPassword: A.strPassword,
			onPasswordChange: A.onPasswordChange,
			bRememberMe: A.bRememberMe,
			onRememberMeChange: A.onRememberMeChange,
			onSubmit: A.onPasswordSubmit,
			status: A.password.eStatus,
			autoFocus: a,
			refreshInfo: e.refreshInfo,
			navRef: c,
			onGoBack: m,
		});
		i.createElement(
			"div",
			{
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "8px",
					margin: "8px 16px",
				},
			},
			i.createElement(ye.$$, {
				refreshInfo: e.refreshInfo,
			}),
		);
		const o = {
			transport: t,
			onQRStatusChange: h,
			onComplete: A.onComplete,
			platform: n,
			refreshInfo: s,
		};
		if (u) {
			return i.createElement(Re, {
				...o,
			});
		} else {
			return i.createElement(
				Ue,
				{
					title: i.createElement(ke, {
						...o,
					}),
				},
				r,
			);
		}
	}
	const C = A.password.eStatus;
	switch (C) {
		case 13: {
			return i.createElement(Ne, null);
		}
		case 5:
		case 11:
		case 3:
		case 10: {
			const e = C === 5 || C === 11;
			return i.createElement(Pe, {
				type: e ? "mobile" : "email",
				onSubmitCode: A.password.addCode,
				status: C,
				associatedLabel: A.password.strConfirmationAssociatedMessage,
				accountName: A.password.strAccountName,
				onBack: A.password.goBack,
			});
		}
		case 6:
		case 4: {
			const t = C === 6;
			return i.createElement(ze, {
				type: t ? "mobile" : "email",
				accountName: A.password.strAccountName,
				onUseCodeOverride: A.password.useCodeOverride,
			});
		}
		case 16: {
			return i.createElement(Oe, {
				reset: A.password.reset,
			});
		}
		case 15: {
			return i.createElement(Ge, {
				reset: A.password.reset,
				failure: A.password.eFailureState,
				onRequestOffline: A.onTryOffline,
				errorReference: A.password.strErrorReference,
			});
		}
		case 14: {
			return i.createElement(
				Ue,
				{
					compact: true,
				},
				o(),
			);
		}
		default: {
			console.error(`Unknown Phase: ${C}`);
			return i.createElement(Ge, {
				reset: A.password.reset,
				failure: fe.eF.Generic,
				onRequestOffline: A.onTryOffline,
				errorReference: A.password.strErrorReference,
			});
		}
	}
}
function Me(e) {
	if (e.detail.button == _g.pR.SELECT) {
		e.stopPropagation();
	}
}
function Te(e) {
	const {
		onSubmit: t,
		status: r,
		autoFocus: n,
		refreshInfo: a,
		strAccountName: o,
		onAccountNameChange: l,
		strPassword: c,
		onPasswordChange: m,
		bRememberMe: u,
		onRememberMeChange: d,
		navRef: A,
		onGoBack: g,
	} = e;
	let h = i.useRef(undefined);
	let C = i.useRef(undefined);
	let _ = o.length != 0 && c.length != 0;
	const [f, b] = useState(false);
	const S = (() => {
		const e = useRef(true);
		useEffect(
			() => () => {
				e.current = false;
			},
			[e],
		);
		return useCallback(() => e.current, [e]);
	})();
	const w =
		r === 2 && !f
			? i.createElement(
					De,
					null,
					(0, Localize)("#Login_CheckCredentials_Short"),
				)
			: i.createElement(De, null, "\xA0");
	const B = n && !a;
	const v = n && !!a;
	return i.createElement(
		p.Z,
		{
			className: ge.MainLoginForm,
			navRef: A,
			onCancelButton: g,
			onButtonDown: Me,
		},
		w,
		i.createElement(
			"form",
			{
				spellCheck: false,
				onSubmit: (e) => {
					e.preventDefault();
					if (_) {
						t().then(() => {
							if (S()) {
								b(false);
							}
						});
					}
				},
			},
			i.createElement(s.pd, {
				label: (0, Localize)("#Login_SignIn_WithAccountName"),
				value: o,
				onChange: (e) => {
					b(true);
					l(e.target.value);
				},
				autoFocus: B,
				disabled: !!a,
				onEnterKeyPress: () => {
					h.current.TakeFocus();
				},
			}),
			i.createElement(s.yA, {
				navRef: h,
				label: (0, Localize)("#Login_Password"),
				value: c,
				onChange: (e) => {
					b(true);
					m(e.target.value);
				},
				type: "password",
				autoFocus: v,
				onEnterKeyPress: () => {
					C.current.TakeFocus();
					t();
				},
			}),
			i.createElement(s.RF, {
				label: (0, Localize)("#Login_RememberMe_Short"),
				className: ge.RememberPasswordToggle,
				checked: u,
				onChange: d,
			}),
			i.createElement(
				s.BC,
				{
					bottomSeparator: "none",
					highlightOnFocus: false,
				},
				i.createElement(
					s.jn,
					{
						navRef: C,
						disabled: !_,
					},
					(0, Localize)("#Login_SignIn"),
				),
				i.createElement(
					s.$n,
					{
						className: ge.LoginFormButton,
						onClick: g,
					},
					(0, Localize)("#Button_Cancel"),
				),
			),
		),
		i.createElement(
			Qe,
			{
				urlName: "HelpWithLogin",
			},
			(0, Localize)("#Login_Help_SignIn"),
		),
	);
}
function Re(e) {
	const {
		onQRStatusChange: t,
		transport: r,
		onComplete: n,
		platform: a,
		refreshInfo: s,
	} = e;
	return i.createElement(_e.V, {
		onStatusChange: t,
		transport: r,
		onComplete: n,
		platform: a,
		refreshInfo: s,
		deckStyling: true,
	});
}
function ke(e) {
	const {
		onQRStatusChange: t,
		transport: r,
		onComplete: n,
		platform: a,
		refreshInfo: o,
	} = e;
	const l = tn(se.BV.GamepadUI.CreateAccount());
	return i.createElement(
		"div",
		{
			className: ge.LeftColCtn,
		},
		i.createElement(
			p.Z,
			{
				className: A_1(ge.QRCodeContainer, ge.QRSection, ge.ShowQR),
			},
			i.createElement(
				"div",
				{
					className: ge.LeftColHeader,
				},
				i.createElement("div", null, (0, Localize)("#Login_EnterCredentials")),
			),
			i.createElement(
				"div",
				{
					className: ge.QR,
				},
				i.createElement(Re, {
					...e,
				}),
			),
			i.createElement(
				"div",
				{
					className: ge.UseMobileAppForQR,
				},
				LocalizeInlineReactWithFallback(
					"#Login_UseMobileAppForQR_Inline",
					i.createElement(Qe, {
						urlName: "Mobile",
					}),
				),
			),
			i.createElement(
				"div",
				{
					className: ge.CreateAccountButton,
				},
				i.createElement(
					s.$n,
					{
						onClick: l,
					},
					(0, Localize)("#Login_Join"),
				),
			),
		),
	);
}
function De(e) {
	const t = e.children || "\xA0";
	return i.createElement(
		"div",
		{
			className: ge.FormError,
		},
		t,
	);
}
function Ne() {
	return i.createElement(
		Ue,
		{
			compact: true,
		},
		i.createElement(
			ye.wt,
			{
				alignItems: "center",
				className: A_1(
					ge.WaitingForTokenContainer,
					c.TS.IN_CLIENT && ge.Client,
				),
			},
			i.createElement(be.t, {
				size: "xlarge",
			}),
			i.createElement(
				"div",
				{
					className: A_1(ge.Description),
				},
				(0, Localize)(
					c.TS.IN_CLIENT
						? "#Login_ConnectingToSteam"
						: "#Login_LoadingAccountInfo",
				),
			),
		),
	);
}
function Fe(e) {
	return i.createElement(
		"div",
		{
			className: ge.OfferOffline,
		},
		i.createElement(
			s.$n,
			{
				className: ge.OfferOfflineButton,
				onClick: e.onRequestOffline,
			},
			(0, Localize)("#Login_GoOffline_Button"),
		),
	);
}
function Ge(e) {
	const { reset: t, failure: r, onRequestOffline: n, errorReference: a } = e;
	const { title: o, description: l } = tP(r);
	const m = c.TS.IN_CLIENT && r == fe.eF.Network;
	return i.createElement(
		Ue,
		{
			title: i.createElement(
				"div",
				null,
				i.createElement(
					"div",
					{
						className: ge.FailureTitle,
					},
					o,
				),
				i.createElement(
					"div",
					{
						className: ge.FailureDescription,
					},
					l,
				),
				a &&
					i.createElement(
						"div",
						{
							className: ge.MutedErrorReference,
						},
						(0, Localize)("#Login_Error_Reference", a),
					),
			),
		},
		i.createElement(
			ye.wt,
			{
				alignItems: "center",
				gap: 12,
			},
			m &&
				i.createElement(
					"div",
					{
						className: ge.FailureDescription,
					},
					(0, Localize)("#Login_GoOffline_Description"),
				),
			i.createElement(
				ye.Ye,
				{
					className: ge.FailureButtons,
				},
				i.createElement(
					s.$n,
					{
						className: ge.TryAgainButton,
						onClick: t,
					},
					(0, Localize)("#Button_Retry"),
				),
				m &&
					i.createElement(Fe, {
						onRequestOffline: n,
					}),
			),
		),
	);
}
function Oe(e) {
	const { reset: t } = e;
	return i.createElement(Ge, {
		reset: t,
		failure: fe.eF.Generic,
	});
}
function Pe(e) {
	const {
		type: t,
		onSubmitCode: r,
		status: n,
		accountName: a,
		associatedLabel: s,
		onBack: o,
	} = e;
	const [l, c] = useState([]);
	const [m, u] = useState(false);
	const [d, A] = useState(false);
	const [g, h] = useState(false);
	const C = t === "mobile";
	const _ = l.join("");
	$2();
	const f = D7();
	const b = e1(_, g);
	const S = (e) => {
		f?.SetVirtualKeyboardHidden();
		A(true);
		r(e).then(() => {
			u(false);
			A(false);
		});
	};
	const w = !m && (n === 11 || n === 10);
	let B;
	let v;
	if (g) {
		if (t === "mobile") {
			v = i.createElement(He, null);
			B = "#Login_UseMobileCode";
		} else {
			v = i.createElement(He, null);
			B = "#Login_UseEmailCode";
		}
	} else {
		v =
			t === "mobile"
				? i.createElement(je, null)
				: i.createElement(qe, {
						emailAddress: s,
					});
		B = "#Login_UseBackupCode";
	}
	return i.createElement(
		Ue,
		{
			compact: true,
		},
		i.createElement(
			ye.lV,
			{
				onSubmit: () => {
					if (b) {
						S(_);
					}
				},
			},
			i.createElement(
				p.Z,
				null,
				i.createElement(
					ye.wt,
					{
						alignItems: "center",
						gap: 20,
					},
					i.createElement(Le, {
						type: t,
						accountName: a,
					}),
					i.createElement(
						ye.wt,
						{
							alignItems: "center",
							gap: 2,
						},
						w &&
							i.createElement(
								De,
								null,
								(0, Localize)("#Login_IncorrectSteamGuard"),
							),
						i.createElement(xe, {
							value: l,
							onChange: (e) => {
								if (!m) {
									u(true);
								}
								c(e);
								const t = e.join("");
								if (e1(t, g)) {
									S(t);
								}
							},
							tone: w ? "danger" : undefined,
							loading: d,
							backupCode: g,
						}),
					),
					v,
					C &&
						i.createElement(
							Qe,
							{
								onClick: () => h(!g),
								align: "center",
							},
							(0, Localize)(B),
						),
					i.createElement(Ve, {
						type: t,
					}),
				),
			),
		),
	);
}
function Le(e) {
	const { accountName: t, type: r } = e;
	const n =
		r === "mobile"
			? (0, Localize)("#Login_MobileProtectingAccount")
			: (0, Localize)("#Login_EmailProtectingAccount");
	return i.createElement(
		"div",
		{
			className: ge.ProtectingAccount,
		},
		i.createElement(
			"div",
			{
				className: ge.Label,
			},
			LocalizeReact(
				"#Login_ActiveAccountName",
				i.createElement(
					"span",
					{
						className: ge.AccountName,
					},
					t,
				),
			),
		),
		i.createElement(
			"div",
			{
				className: ge.Description,
			},
			n,
		),
	);
}
function ze(e) {
	const { type: t, accountName: r, onUseCodeOverride: n } = e;
	const a = i.createElement(Ve, {
		type: "mobile",
	});
	const s = i.createElement(
		"div",
		{
			style: {
				paddingBottom: "20px",
			},
		},
		i.createElement(
			Qe,
			{
				align: "center",
				onClick: n,
			},
			(0, Localize)("#Login_EnterCodeInstead"),
		),
	);
	return i.createElement(
		Ue,
		null,
		i.createElement(
			ye.wt,
			{
				gap: 40,
			},
			i.createElement(Le, {
				type: t,
				accountName: r,
			}),
			i.createElement(ye.e5, null),
			i.createElement(
				p.Z,
				{
					className: ge.LinkContainer,
					focusableIfNoChildren: true,
				},
				s,
				a,
			),
		),
	);
}
function xe(e) {
	const { onChange: t, backupCode: r, ...n } = e;
	return i.createElement(Be.a, {
		length: H_1(r),
		backupCode: r,
		onChange: (e) => {
			const n = (e = e.map((e) => e.toUpperCase())).join("").trim();
			if (JP(n, r)) {
				t(e);
			}
		},
		autoFocus: true,
		...n,
		allowCharacter: (e) => /\w/g.test(e),
	});
}
function Ue(e) {
	const { title: t, children: r, compact: n } = e;
	const a =
		typeof t == "string"
			? i.createElement(
					"div",
					{
						className: ge.LeftColCtn,
					},
					i.createElement(
						"div",
						{
							className: ge.LeftColHeader,
						},
						i.createElement("div", null, t),
					),
				)
			: t;
	return i.createElement(
		ye.wt,
		{
			className: A_1(ge.LoginContainer, ge.Login, Ce.Login),
		},
		i.createElement(
			"div",
			{
				className: ge.FormContainer,
			},
			a ? i.createElement(s.dR, null, a, r) : r,
		),
	);
}
function We() {
	return i.createElement(
		ye.wt,
		{
			alignItems: "center",
			justifyContent: "center",
		},
		i.createElement(be.t, null),
	);
}
function Ve(e) {
	let t;
	let r;
	if (e.type === "mobile") {
		t = "HelpWithLoginInfo";
		r = (0, Localize)("#Login_Help_AccessMobileApp");
	} else {
		t = "HelpWithSteamGuardCode";
		r = (0, Localize)("#Login_Help_AccessEmail");
	}
	return i.createElement(
		Qe,
		{
			urlName: t,
			align: "center",
		},
		r,
	);
}
function He() {
	return i.createElement(
		ye.Ye,
		{
			justifyContent: "space-evenly",
			alignItems: "center",
			className: ge.EnterBackupCodeContainer,
		},
		i.createElement(
			ye.wt,
			null,
			i.createElement(
				"div",
				{
					className: ge.EnterCodeFromMobile,
				},
				(0, Localize)("#Login_EnterBackupCode"),
			),
			i.createElement(
				"div",
				{
					className: ge.Label,
				},
				(0, Localize)("#Login_EnterBackupCodeDescription"),
			),
		),
	);
}
function je() {
	return i.createElement(
		ye.Ye,
		{
			justifyContent: "space-evenly",
			alignItems: "center",
			className: ge.EnterCodeFromMobileContainer,
		},
		i.createElement(
			"div",
			{
				className: ge.EnterCodeFromMobile,
			},
			(0, Localize)("#Login_EnterMobileCode"),
		),
		i.createElement(ye.gn, {
			className: ge.AwaitingMobileConfIcon,
		}),
	);
}
function qe(e) {
	return i.createElement(
		ye.Ye,
		{
			justifyContent: "space-evenly",
			alignItems: "center",
			className: ge.EnterCodeFromEmailContainer,
		},
		i.createElement(
			"div",
			{
				className: ge.EnterCodeFromEmail,
			},
			LocalizeReact(
				"#Login_EnterEmailCode",
				i.createElement(
					"span",
					{
						className: ge.EnterCodeEmailAddress,
					},
					e.emailAddress,
				),
			),
		),
		i.createElement(ye.eU, {
			className: ge.AwaitingEmailConfIcon,
		}),
	);
}
function Qe(e) {
	const { children: t, align: r, inline: n } = e;
	const a = A_1(ge.TextLink, r === "center" && ge.TextAlignCenter);
	const s = Qt(Se.B7.ResolveURL("urlName" in e ? e.urlName : undefined));
	if ("urlName" in e) {
		return i.createElement(
			h.Ii,
			{
				className: a,
				onClick: s,
			},
			t,
		);
	} else {
		return i.createElement(
			h.Ii,
			{
				className: a,
				onClick: e.onClick,
			},
			t,
		);
	}
}
const nt = (e) => {
	const { className: t, children: r } = e;
	const n = A_1(l.LoginBackground, t);
	return i.createElement(
		"div",
		{
			className: n,
		},
		i.createElement(
			"div",
			{
				className: l.LoginContainer,
			},
			r,
		),
	);
};
const it = (e) => {
	const t = e.avatarUrl.length != 0;
	return i.createElement(
		"div",
		{
			className: l.LoginUserInContextMenu,
		},
		i.createElement(
			"div",
			{
				className: l.UserAvatar,
			},
			t
				? i.createElement("img", {
						src: e.avatarUrl,
					})
				: i.createElement(o.User, null),
		),
		i.createElement(
			"div",
			{
				className: l.UserAccountName,
			},
			e.strAccountName,
		),
	);
};
function at(e) {
	return i.createElement(
		f.tz,
		null,
		i.createElement(it, {
			avatarUrl: e.avatarUrl,
			strAccountName: e.accountName,
		}),
		i.createElement(
			f.kt,
			{
				onSelected: () => {
					UseLoginStateObserver.b
						.RemoveUser(e.accountName)
						.then(() => e.onRemove && e.onRemove());
				},
			},
			(0, Localize)("#Login_RemoveUser_MenuOption"),
		),
	);
}
let st;
let ot;
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.Forward = 1)] = "Forward";
	e[(e.Backward = 2)] = "Backward";
})((st ||= {}));
((e) => {
	e[(e.LanguageScreen = 0)] = "LanguageScreen";
	e[(e.TimezoneScreen = 1)] = "TimezoneScreen";
	e[(e.NetworkSetupScreen = 2)] = "NetworkSetupScreen";
	e[(e.UpdateScreen = 3)] = "UpdateScreen";
	e[(e.CachedUsersPanel = 4)] = "CachedUsersPanel";
	e[(e.SignInPanel = 5)] = "SignInPanel";
	e[(e.PromptForPinPanel = 6)] = "PromptForPinPanel";
})((ot ||= {}));
let lt = [];
let ct = ot.LanguageScreen;
let mt = class extends i.PureComponent {
	modeHistory = [];
	m_navRef = i.createRef();
	m_strLastAccountName = UseLoginStateObserver.b.accountName;
	m_nStepCount = 0;
	m_eNavigationDirection = st.None;
	constructor(e) {
		super(e);
		const { loginState: t } = e;
		let r;
		if (t === 1) {
			this.modeHistory = lt.slice();
			r = ct;
		} else {
			r =
				UseLoginStateObserver.b.GetLoginUsers().length != 0
					? ot.CachedUsersPanel
					: ot.SignInPanel;
		}
		if (ce.yE.BResettingPIN()) {
			r = ot.SignInPanel;
		}
		this.state = {
			mode: r,
			bOfflineMode: false,
			bChangedLocalization: false,
		};
	}
	NavigateToMode(e) {
		this.modeHistory.push(this.state.mode);
		if (this.m_navRef.current) {
			this.m_navRef.current.PushState();
		}
		this.m_nStepCount++;
		this.m_eNavigationDirection = st.Forward;
		this.setState({
			mode: e,
		});
	}
	m_lastMode = undefined;
	componentDidUpdate() {
		if (this.m_lastMode === undefined || this.state.mode != this.m_lastMode) {
			this.m_navRef.current?.TakeFocus();
			this.m_lastMode = this.state.mode;
		}
	}
	componentDidMount() {
		if (
			this.state.mode == ot.CachedUsersPanel &&
			this.m_strLastAccountName.length > 0
		) {
			this.NavigateToMode(ot.SignInPanel);
		}
		this.m_lastMode = this.state.mode;
		this.m_navRef.current?.TakeFocus();
	}
	componentWillUnmount() {
		lt = this.modeHistory.slice();
		ct = this.state.mode;
	}
	OnLocalizationChanged() {
		this.setState({
			bChangedLocalization: true,
		});
	}
	OnRestart() {
		this.NavigateToMode(ot.NetworkSetupScreen);
	}
	OnContinue() {
		switch (this.state.mode) {
			case ot.LanguageScreen: {
				this.NavigateToMode(ot.TimezoneScreen);
				break;
			}
			case ot.TimezoneScreen: {
				if (c.TS.ON_STEAMOS) {
					this.NavigateToMode(ot.NetworkSetupScreen);
				} else {
					this.NavigateToMode(ot.UpdateScreen);
				}
				break;
			}
			case ot.NetworkSetupScreen: {
				if (this.BUserCanProceedFromInternet()) {
					this.setState({
						bOfflineMode: false,
					});
					if (V.oy.BIsInOOBE) {
						this.NavigateToMode(ot.UpdateScreen);
					} else {
						tH("OOBE: Skipping update screen since we are not in OOBE");
						this.ProceedToSignIn();
					}
				}
				break;
			}
			case ot.UpdateScreen: {
				if (this.state.bChangedLocalization) {
					SteamClient.User.StartRestart(false);
					return;
				}
				this.ProceedToSignIn();
				this.modeHistory = [];
			}
		}
	}
	BUserCanProceedFromInternet() {
		return (
			!c.TS.ON_STEAMOS ||
			(V.oy.BIsInOOBE
				? B.OQ.Get().hasInternetConnection
				: c.TS.ON_DECK
					? B.OQ.Get().hasNetworkConnection
					: B.OQ.Get().hasSteamConnection || B.OQ.Get().hasNetworkConnection)
		);
	}
	ProceedToSignIn() {
		SteamClient.User.FlipToLogin();
		if (UseLoginStateObserver.b.GetLoginUsers().length == 0) {
			this.NavigateToMode(ot.SignInPanel);
			this.setState({
				bOfflineMode: false,
			});
		} else {
			this.NavigateToMode(ot.CachedUsersPanel);
			this.setState({
				bOfflineMode: false,
			});
		}
	}
	OnGoBack() {
		if (this.props.isReauthentication) {
			SteamClient.User.ChangeUser();
		} else if (this.modeHistory.length != 0) {
			let e = this.modeHistory.pop();
			this.m_nStepCount++;
			this.m_eNavigationDirection = st.Backward;
			this.setState(
				{
					mode: e,
				},
				() => this.m_navRef.current.PopState(),
			);
		}
	}
	OnContinueOffline() {
		this.NavigateToMode(ot.CachedUsersPanel);
		this.setState({
			bOfflineMode: true,
		});
	}
	OnCachedUserRemoved() {
		tG(
			`Cached user removed, now have ${UseLoginStateObserver.b.GetLoginUsers().length}`,
		);
		if (!UseLoginStateObserver.b.GetLoginUsers().length) {
			this.NavigateToMode(ot.SignInPanel);
		}
		this.m_strLastAccountName = "";
	}
	RenderCurrentPanel() {
		let e = null;
		let t = this.m_eNavigationDirection == st.None;
		switch (this.state.mode) {
			case ot.LanguageScreen: {
				e = i.createElement(k, {
					onContinue: this.OnContinue,
					onLocalizationChanged: this.OnLocalizationChanged,
					animate: t,
				});
				break;
			}
			case ot.TimezoneScreen: {
				e = i.createElement(O, {
					onContinue: this.OnContinue,
					onBack: this.OnGoBack,
					animate: t,
				});
				break;
			}
			case ot.NetworkSetupScreen: {
				e = i.createElement(te, {
					canContinue: this.BUserCanProceedFromInternet(),
					onContinue: this.OnContinue,
					onBack: this.OnGoBack,
					onContinueOffline: this.OnContinueOffline,
					animate: t,
				});
				break;
			}
			case ot.UpdateScreen: {
				e = i.createElement(wt, {
					onContinue: this.OnContinue,
					onRestart: this.OnRestart,
					onGoBack: this.OnGoBack,
				});
			}
		}
		if (e) {
			const t = parseInt(l.OobeSlideDuration) * 2;
			let r = {
				enter: l.Enter,
				enterActive: l.EnterActive,
				enterDone: l.EnterDone,
				appear: l.Appear,
				appearActive: l.AppearActive,
				appearDone: l.AppearDone,
				exit: l.Exit,
				exitActive: l.ExitActive,
				exitDone: l.ExitDone,
			};
			let n = A_1(
				l.OutOfBoxTransitionGroup,
				this.m_eNavigationDirection == st.Backward && l.Backward,
				this.m_eNavigationDirection == st.Forward && l.Forward,
			);
			return i.createElement(
				p.Z,
				{
					className: l.OutOfBox,
					navRef: this.m_navRef,
					onCancelButton: this.OnGoBack,
					onButtonDown: _t,
				},
				i.createElement(
					E.A,
					{
						className: n,
						appear: false,
						enter: true,
						exit: true,
					},
					i.createElement(
						rt.M,
						{
							key: this.m_nStepCount.toString(),
							classNames: r,
							timeout: t,
							in: true,
						},
						(t) =>
							i.createElement(
								"div",
								{
									ref: t,
									className: l.OutOfBoxSlide,
								},
								e,
							),
					),
				),
			);
		}
		switch (this.state.mode) {
			case ot.CachedUsersPanel: {
				return i.createElement(
					nt,
					null,
					i.createElement(
						p.Z,
						{
							className: l.MainLoginForm,
							navRef: this.m_navRef,
							onCancelButton: this.OnGoBack,
							onButtonDown: _t,
						},
						UseLoginStateObserver.b.loginResult != 1 &&
							i.createElement(
								"div",
								{
									className: l.LoginError,
								},
								(0, Localize)(
									"#Login_LastError",
									((e) => {
										switch (e) {
											case 3: {
												return (0, Localize)("#Login_NoConnection");
											}
											case 5: {
												return (0, Localize)("#Login_PasswordMismatch");
											}
											case 88: {
												return (0, Localize)("#Login_TwoFactorMismatch");
											}
											case 71: {
												return (0, Localize)("#Login_SteamGuardExpired");
											}
											case 65: {
												return (0, Localize)("#Login_SteamGuardMismatch");
											}
											case 84: {
												return (0, Localize)("#Login_RateLimitExceeded");
											}
											case 20: {
												return (0, Localize)("#Login_ServiceUnavailable");
											}
											case 72: {
												return (0, Localize)("#Login_LoginRestrictionFailed");
											}
											case 6: {
												return (0, Localize)("#Login_LoggedInElsewhere");
											}
											case 126: {
												return (0, Localize)("#Login_CachedCredentialInvalid");
											}
											case 130: {
												return (0, Localize)("#Login_OfflineAppCacheInvalid");
											}
										}
										return String(e);
									})(UseLoginStateObserver.b.loginResult),
								),
							),
						i.createElement(vX, {
							onShowSignInForAccount: (e) => {
								this.m_strLastAccountName = e;
								this.NavigateToMode(ot.SignInPanel);
							},
							onPromptForPin: (e) => {
								this.m_strLastAccountName = e;
								this.NavigateToMode(ot.PromptForPinPanel);
							},
							onRemoveUser: (e, t, r) =>
								lX(
									i.createElement(at, {
										accountName: e,
										avatarUrl: r,
										onRemove: this.OnCachedUserRemoved,
									}),
									null,
								),
							bOfflineMode: this.state.bOfflineMode,
						}),
					),
				);
			}
			case ot.SignInPanel: {
				return i.createElement(ft, {
					navRef: this.m_navRef,
					isReauthentication: this.props.isReauthentication,
					onGoBack: this.OnGoBack,
				});
			}
			case ot.PromptForPinPanel: {
				return i.createElement(
					nt,
					null,
					i.createElement(gN, {
						strAccountName: this.m_strLastAccountName,
						onBack: () => {
							this.m_strLastAccountName = "";
							this.NavigateToMode(ot.CachedUsersPanel);
						},
						onShowSignInForAccount: (e) => {
							this.m_strLastAccountName = e;
							this.NavigateToMode(ot.SignInPanel);
						},
						bOfflineMode: this.state.bOfflineMode,
					}),
				);
			}
		}
		tG("Missing login state");
		return null;
	}
	render() {
		return i.createElement(
			i.Fragment,
			null,
			i.createElement(Ct, {
				mode: this.state.mode,
			}),
			this.RenderCurrentPanel(),
		);
	}
};
export function gN(e) {
	const [t, r] = useState("");
	const [n, a] = useState("");
	const [u, d] = useState(false);
	const [A, g] = useState(0);
	$$(() => d(false), Math.min(10000, 2 ** A * 50), [A], u);
	const C = rP();
	const _ = UseLoginStateObserver.b
		.GetLoginUsers()
		.find((t) => t.accountName === e.strAccountName);
	if (_ === null) {
		return null;
	}
	const f = C.IN_GAMEPADUI || C.IN_VR;
	const b = (t) => {
		if (/^\d{0,3}$/.test(t)) {
			r(t);
		} else if (/^\d{4}$/.test(t)) {
			((t) => {
				SteamClient.Auth.ValidateCachedSignInPin(e.strAccountName, t).then(
					(t) => {
						if (t) {
							d(false);
							g(0);
							dt(
								e.strAccountName,
								e.bOfflineMode,
								e.onShowSignInForAccount,
								e.onSuccessfulSignIn,
							);
						} else {
							a((0, Localize)("#Login_PinPrompt_IncorrectPin"));
							d(true);
							g(A + 1);
							r("");
						}
					},
				);
			})(t);
		}
	};
	let w = null;
	w = u
		? i.createElement(be.t, {
				position: "center",
			})
		: f
			? i.createElement(s.QJ, {
					digits: 4,
					autoFocus: true,
					value: t,
					onChange: b,
				})
			: i.createElement("input", {
					className: l.PinInput,
					value: t,
					type: "password",
					autoFocus: true,
					onChange: (e) => b(e.target.value),
				});
	return i.createElement(
		p.Z,
		{
			className: l.PinPromptCtn,
		},
		i.createElement(
			p.Z,
			{
				className: l.PinPromptBack,
			},
			i.createElement(
				h.Ii,
				{
					onClick: e.onBack,
				},
				"〈\xA0",
				(0, Localize)("#Login_PinPrompt_Back"),
			),
		),
		i.createElement(
			p.Z,
			{
				className: l.PinPromptMain,
			},
			i.createElement(
				p.Z,
				{
					className: l.AvatarAndName,
				},
				i.createElement("img", {
					className: l.UserAvatarImage,
					src: _.avatarUrl.length > 0 ? _.avatarUrl : Xe.A,
				}),
				i.createElement(
					"div",
					{
						className: l.UserAccountName,
					},
					_.personaName,
				),
			),
			i.createElement(
				p.Z,
				{
					className: l.PinInputCtn,
				},
				!u &&
					i.createElement(
						p.Z,
						{
							className: l.PinPromptDescription,
						},
						(0, Localize)("#Login_PinPrompt_Description"),
					),
				n.length > 0 &&
					!u &&
					i.createElement(
						p.Z,
						{
							className: l.PinPromptErrorMessage,
						},
						i.createElement(o.ExclamationPoint, null),
						"\xA0",
						n,
						" ",
					),
				w,
			),
		),
		i.createElement(
			p.Z,
			{
				className: l.PinPromptOtherLinks,
			},
			i.createElement(
				p.Z,
				null,
				i.createElement(
					h.Ii,
					{
						className: l.PinPromptUsePassword,
						onClick: () => e.onShowSignInForAccount(e.strAccountName),
					},
					(0, Localize)("#Login_PinPrompt_LoginWithPassword"),
				),
			),
		),
	);
}
async function dt(e, t, r, n) {
	q_2("Awaiting cached signin");
	if ((await SteamClient.Auth.StartSignInFromCache(e, t)).result == 1) {
		q_2("Successful cached signin");
		await n?.();
	} else {
		q_2(`Cached signin for ${e} failed, no cached creds?`);
		r(e);
	}
}
Cg([S.oI], mt.prototype, "OnLocalizationChanged", null);
Cg([S.oI], mt.prototype, "OnRestart", null);
Cg([S.oI], mt.prototype, "OnContinue", null);
Cg([S.oI], mt.prototype, "ProceedToSignIn", null);
Cg([S.oI], mt.prototype, "OnGoBack", null);
Cg([S.oI], mt.prototype, "OnContinueOffline", null);
Cg([S.oI], mt.prototype, "OnCachedUserRemoved", null);
mt = Cg([u.PA], mt);
const At = i.forwardRef((e, t) => {
	const { bFaceLocked: r, children: n, onClosed: s } = e;
	const o = $2();
	const l = i.useCallback(
		(e) => {
			switch (e) {
				case 2:
				case 3: {
					s?.();
				}
			}
		},
		[s],
	);
	i.useEffect(() => {
		if (r) {
			SteamClient.OpenVR.ExtendActivityTimeout(0, 60);
			return () => {
				SteamClient.OpenVR.ExtendActivityTimeout(0, 0);
			};
		}
	}, [r]);
	let c = {};
	c = r
		? {
				...c,
				parent_device_path: "/user/head/pose/raw",
				interactive: true,
				inherit_parent_curvature: false,
				inherit_parent_pitch: false,
				origin_on_popup: {
					x: 0,
					y: 0,
				},
				offset: {
					z_meters: -1,
				},
				sort_order: 1,
			}
		: {
				...c,
				parent_overlay_key: o.GetMainVROverlayKey(),
				origin_on_parent: {
					x: -0.5,
					y: -0.07,
				},
				origin_on_popup: {
					x: 0,
					y: 0,
				},
				interactive: true,
				inherit_parent_curvature: true,
				inherit_parent_pitch: true,
				offset: {
					z_meters: 0.05,
				},
			};
	const { element: m, methods: u } = Xy(tt.b7.LoginQRCode, c, {
		onStateChange: l,
	});
	i.useLayoutEffect(() => cZ(t, m), [t, m]);
	if (m) {
		return i.createElement(
			C.b5,
			{
				ownerWindow: m.ownerDocument.defaultView,
			},
			a.createPortal(
				i.createElement(
					_.B2,
					{
						navID: "VRVRLoginQRCodePopup",
					},
					n,
				),
				m,
			),
		);
	} else {
		return null;
	}
});
function pt(e) {
	return i.createElement(
		"div",
		{
			className: l.VRZoomButton,
		},
		i.createElement(
			s.$n,
			{
				onClick: e.onClick,
			},
			(0, Localize)("#Login_ZoomForVR"),
		),
	);
}
function gt() {
	return i.createElement(
		"div",
		{
			className: l.VRInteractionThrobber,
		},
		i.createElement(be.t, {
			size: "xlarge",
		}),
	);
}
export function vX(e) {
	const { bShowHeader: t = true, nUserCountLimit: r } = e;
	let n = q3(() => {
		let t = UseLoginStateObserver.b.GetLoginUsers();
		if (r) {
			t = t.slice(0, r);
		}
		return t.map((t, r) => {
			const n = t.accountName == e.strHighlightAccount;
			const a = t.avatarUrl.length != 0;
			let o;
			o =
				t.rememberPassword && !t.hasPin
					? () => {
							let r;
							r = t.accountName;
							tG(`Signing in ${r} using cached credentials`);
							dt(
								r,
								e.bOfflineMode,
								e.onShowSignInForAccount,
								e.onSuccessfulSignIn,
							);
						}
					: t.rememberPassword && t.hasPin
						? () => {
								e.onPromptForPin(t.accountName);
							}
						: () => {
								e.onShowSignInForAccount(t.accountName);
							};
			const c = (r) =>
				e.onRemoveUser(t.accountName, t.personaName, t.avatarUrl, r);
			let m = {};
			if (e.onRemoveUser) {
				m = {
					onSecondaryButton: c,
					onSecondaryActionDescription: (0, Localize)("#Login_RemoveUser"),
				};
			}
			let u =
				e.onMoreMenu &&
				i.createElement(
					s.$n,
					{
						onClick: (r) => {
							((r) => {
								e.onMoreMenu(t.accountName, t.personaName, t.avatarUrl, r);
							})(r);
							r.stopPropagation();
						},
						className: l.MoreMenuButton,
					},
					i.createElement(
						"div",
						{
							className: l.Icon,
						},
						i.createElement($e.faJ, null),
					),
				);
			return i.createElement(
				p.Z,
				{
					className: A_1(l.LoginCachedAvatar, n && l.Highlight),
					key: r,
					noFocusRing: true,
					onActivate: o,
					...m,
				},
				i.createElement(
					"div",
					{
						className: l.CachedName,
					},
					t.personaName,
				),
				e.bShowAccountNames &&
					i.createElement(
						"div",
						{
							className: l.CachedAccountName,
						},
						(0, Localize)("#Login_UserChooser_AccountName", t.accountName),
					),
				i.createElement(
					"div",
					{
						className: l.LoginCachedAvatarImage,
					},
					i.createElement("img", {
						src: a ? t.avatarUrl : Xe.A,
					}),
					u,
				),
			);
		});
	});
	if (!e.bOfflineMode) {
		n.push(
			i.createElement(
				p.Z,
				{
					className: A_1(l.NewLogin),
					key: "new_login",
					noFocusRing: true,
					onActivate: () => e.onShowSignInForAccount(""),
				},
				i.createElement(
					"div",
					{
						className: l.NewLoginIcon,
					},
					i.createElement(o.NewUserLoginIcon, null),
				),
				i.createElement(
					"div",
					{
						className: l.CachedName,
					},
					(0, Localize)("#Login_AddAccount"),
				),
			),
		);
	}
	return i.createElement(
		i.Fragment,
		null,
		t &&
			i.createElement(
				i.Fragment,
				null,
				i.createElement(
					"div",
					{
						className: l.Header,
					},
					(0, Localize)("#Login_PickUser"),
				),
				i.createElement(
					"div",
					{
						className: l.SubHeader,
					},
					(0, Localize)("#Login_CachedUsers"),
				),
			),
		i.createElement(
			p.Z,
			{
				className: A_1(l.CachedUserList, r && n.length > r && l.LongList),
			},
			n,
		),
	);
}
function Ct(e) {
	const { mode: t } = e;
	let r;
	switch (t) {
		case ot.LanguageScreen:
		case ot.NetworkSetupScreen:
		case ot.UpdateScreen: {
			r = true;
			break;
		}
		default: {
			r = false;
		}
	}
	ez(r, "LoginPanelLoginForm");
	return null;
}
function _t(e) {
	if (e.detail.button == _g.pR.SELECT) {
		e.stopPropagation();
	}
}
function ft(e) {
	const { isReauthentication: t, onGoBack: r, navRef: n } = e;
	let [a, s] = i.useState(null);
	const [o, m] = i.useState(false);
	const [u, d] = i.useState(false);
	const A = rP().IN_VR;
	let g = new de.ij();
	let h = g.GetServiceTransport();
	i.useEffect(() => {
		if (t) {
			SteamClient.Auth.GetRefreshInfo().then((e) => {
				if (e.reason != 1) {
					s(e);
				} else {
					s(null);
				}
			});
		}
	}, [t]);
	const [C, _] = i.useState(undefined);
	const [f, b] = i.useState(0);
	g.Connect().then(() => {
		m(true);
	});
	if (!o) {
		return null;
	}
	const y = `${a?.account_name}${a?.reason}${f.toString()}`;
	const S = i.createElement(
		p.Z,
		{
			className: l.MainLoginForm,
			navRef: n,
			onClick: () => {
				d(false);
			},
			onCancelButton: r,
			onButtonDown: _t,
		},
		i.createElement(Ee, {
			key: y,
			autoFocus: true,
			transport: h,
			onSuccess: (e) => {
				tG("received authentication token, using it to sign in to Steam");
				_(null);
				SteamClient.Auth.SetLoginToken(
					e.strRefreshToken,
					e.strAccountName,
				).then((e) => {
					const t = e.result;
					const r = e.message;
					tG(`client login returned ${t} (${r})`);
					_(t);
					if (t != 1) {
						b(f + 1);
					}
				});
				const t = e.strNewGuardData ?? "";
				if (t) {
					SteamClient.Auth.SetSteamGuardData(e.strAccountName, t);
				}
			},
			platform: 1,
			refreshInfo: a,
			lastResult: C,
			navRef: n,
			onGoBack: r,
			bQRCodeOnly: u,
			onQRStatusChange: (e) => {
				console.log(e);
				if (e === 4) {
					d(false);
				}
			},
		}),
	);
	return i.createElement(
		et.Jr,
		{
			headerVisibility: "fadeInBackgroundOnScroll",
			padForHeader: false,
			padForFooter: false,
			minimumOpacity: 0,
		},
		A &&
			i.createElement(
				i.Fragment,
				null,
				u &&
					i.createElement(
						At,
						{
							bFaceLocked: true,
						},
						S,
					),
				!u &&
					i.createElement(
						At,
						{
							bFaceLocked: false,
						},
						i.createElement(pt, {
							onClick: () => {
								d(true);
							},
						}),
					),
			),
		!u && S,
		u && i.createElement(gt, null),
	);
}
export function Qk(e) {
	const { loginState: t } = e;
	const r = q3(() => UseLoginStateObserver.b.loginPercentage);
	const n = i.useRef(0);
	const a = q3(() => UseLoginStateObserver.b.currentUser);
	const s = !Qn() && !!a && !q_2();
	const o = Pr();
	i.useEffect(() => {
		if (r == 0) {
			n.current = 0;
		} else {
			n.current++;
		}
	}, [r]);
	let u = "";
	let A = false;
	switch (t) {
		case 4: {
			u = (0, Localize)("#Login_WaitingForNetwork");
			break;
		}
		case 5: {
			u = (0, Localize)("#Login_WaitingForServer");
			break;
		}
		case 6: {
			u = (0, Localize)("#Login_LoadingLibrary");
			A = n.current > 5;
			break;
		}
		case 8: {
			u = (0, Localize)("#Login_ShuttingDown");
		}
	}
	return i.createElement(
		p.Z,
		{
			className: A_1(l.LoginStatusContainer, o && l.OSX),
			onOKButton: () => true,
			onOKActionDescription: null,
			onCancelButton: () => true,
			onCancelActionDescription: null,
		},
		i.createElement(
			w.j,
			{
				className: e.throbberClassName,
				size: s ? "small" : "medium",
			},
			i.createElement(
				"div",
				{
					className: A_1(l.LoginStatus),
				},
				u,
			),
			i.createElement(
				"div",
				{
					className: A_1(l.Progress, A && r > 0 && l.Visible),
				},
				i.createElement(Ze.z2, {
					nProgress: r * 100,
				}),
			),
			s &&
				i.createElement(
					"div",
					{
						className: l.UserContainer,
					},
					i.createElement(
						"div",
						{
							className: l.Avatar,
						},
						i.createElement("img", {
							src: a.avatarUrl?.length > 0 ? a.avatarUrl : Xe.A,
						}),
					),
					i.createElement(
						"div",
						{
							className: l.PersonaName,
						},
						a.personaName,
					),
				),
		),
	);
}
export function g(e) {
	const t = "https://s.team/join";
	const r = k1();
	Xf("hidden", "CreateAccount");
	return i.createElement(
		et.Jr,
		{
			headerVisibility: "fadeInBackgroundOnScroll",
			padForHeader: false,
			padForFooter: false,
			minimumOpacity: 0,
		},
		i.createElement(
			nt,
			{
				className: l.DoublePanel,
			},
			i.createElement(
				s.dR,
				null,
				i.createElement(
					"div",
					{
						className: l.LeftColCtn,
					},
					i.createElement(
						"div",
						{
							className: l.LeftColHeader,
						},
						i.createElement("div", null, (0, Localize)("#Login_Join")),
					),
					i.createElement(
						s.$n,
						{
							className: l.LoginError,
							onClick: () => r.Login(),
						},
						(0, Localize)("#Login_EnterCredentials"),
					),
				),
				i.createElement(
					"div",
					null,
					i.createElement(
						"div",
						{
							className: l.JoinHead,
						},
						(0, Localize)("#Join_New"),
					),
					i.createElement(
						"div",
						{
							className: l.JoinSubhead,
						},
						(0, Localize)("#Join_ScanCode"),
					),
					i.createElement(
						ae.rg,
						{
							className: l.LoginQRCode,
						},
						t,
					),
					i.createElement(
						"div",
						{
							className: l.JoinVisit,
						},
						LocalizeReact("#Join_SiteLink", t),
					),
				),
			),
		),
	);
}
export function GW() {
	const e = zy();
	const t = e.state?.bReauthentication;
	const r = UseLoginStateObserver();
	const n = jh();
	const a = ((e) => {
		const t = e == 1 || e == 2;
		i.useEffect(() => {
			if (t) {
				R.o.Init();
			}
		}, [t]);
		let r = gc(R.o.CurrentLanguage);
		let n = gc(R.o.AvailableLanguages);
		let a = gc(R.o.WelcomeText);
		const s = r.length != 0 && n?.length != 0 && a?.length != 0;
		let o = gc(R.o.CurrentTimeZoneID);
		let l = gc(R.o.AvailableTimeZones);
		const c = o.length != 0 && l?.length != 0;
		return {
			bNeedOOBEData: t,
			bHaveOOBEData: s && c,
		};
	})(r);
	Xf("hidden", "LoginPanel");
	i.useEffect(() => {
		let e = ce.yE.GetSettings();
		if (e.bLockOnLogin && !e.bUserForgotPin) {
			if (!ce.yE.BConsumeLockTicket()) {
				Di({
					preventCancel: true,
					preventSteamButtons: true,
					onSuccess: () => {
						ce.yE.ProvideLockTicket();
					},
				});
			}
		}
	}, []);
	if (n) {
		return i.createElement(Qk, {
			loginState: 4,
		});
	}
	if (a.bNeedOOBEData && !a.bHaveOOBEData) {
		return i.createElement(Qk, {
			loginState: r,
		});
	}
	switch (r) {
		case 1:
		case 3:
		case 2: {
			return i.createElement(mt, {
				isReauthentication: t,
				loginState: r,
				oobeData: a,
			});
		}
		default: {
			return i.createElement(Qk, {
				loginState: r,
			});
		}
	}
}
function wt(e) {
	const { onGoBack: t } = e;
	const r = i.useCallback(
		(r, n) => {
			if (r != 1) {
				if (t) {
					t();
				}
				return;
			}
			let i;
			switch (n) {
				case 6: {
					i = () => SteamClient.User.StartRestart(false);
					break;
				}
				case 7: {
					i = () => SteamClient.System.RestartPC();
					break;
				}
				default: {
					i = e.onContinue;
				}
			}
			((e) => {
				R.o.SetOOBEComplete();
				if (V.oy.IsDeckFactoryImage()) {
					SteamClient.System.RestartPC();
					return;
				}
				e();
			})(i);
		},
		[e.onContinue, t],
	);
	const n = tn(se.BV.GamepadUI.Setup());
	return i.createElement(oe.zQ, {
		onUpdateComplete: r,
		onShowHelp: n,
		onRestart: e.onRestart,
		onCancel: e.onGoBack,
	});
}
