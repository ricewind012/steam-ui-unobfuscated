var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./78325.js");
var s = require("./64608.js");
var o = require("./35488.js");
var l = require("./37909.js");
var c = require(/*webcrack:missing*/ "./72476.js");
var m = require("./33512.js");
var u = require(/*webcrack:missing*/ "./41230.js");
var d = require(/*webcrack:missing*/ "./90095.js");
var A = require(/*webcrack:missing*/ "./31084.js");
var p = require(/*webcrack:missing*/ "./69164.js");
var _g = require(/*webcrack:missing*/ "./61657.js");
var h = require(/*webcrack:missing*/ "./90242.js");
var C = require(/*webcrack:missing*/ "./3524.js");
var _ = require(/*webcrack:missing*/ "./84252.js");
var f = require(/*webcrack:missing*/ "./88750.js");
var b = require(/*webcrack:missing*/ "./90765.js");
var y = require(/*webcrack:missing*/ "./46108.js");
var S = require(/*webcrack:missing*/ "./52451.js");
var w = require("./81994.js");
var B = require("./77347.js");
var v = require("./31319.js");
var I = require("./42982.js");
var E = require(/*webcrack:missing*/ "./23038.js");
var M = require(/*webcrack:missing*/ "./58254.js");
var T = require(/*webcrack:missing*/ "./4690.js");
var R = require("./35194.js");
function k(e) {
	let t = (0, S.gc)(R.o.CurrentLanguage);
	let r = (0, S.gc)(R.o.AvailableLanguages);
	let n = (function (e, t) {
		const [r, n] = i.useState(0);
		(0, S.$$)(
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
	})((0, S.gc)(R.o.WelcomeText), 5000);
	let a = (function (e, t, r) {
		return i.useCallback(
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
		);
	})(t, e.onContinue, e.onLocalizationChanged);
	let s = {
		enter: I.Enter,
		enterActive: I.EnterActive,
		exit: I.Exit,
		exitActive: I.ExitActive,
		exitDone: I.ExitDone,
	};
	let o = (0, b.A)(I.LanguageScreen, e.animate && I.Animate);
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
						key: n.strSelect + " " + n.strWelcome,
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
var F = require("./52847.js");
var G = require("./81969.js");
function O(e) {
	let t = (0, S.gc)(R.o.CurrentTimeZoneID);
	let r = (0, S.gc)(R.o.AvailableTimeZones);
	let n = e.onContinue;
	let a = i.useCallback(
		(e) => {
			n();
		},
		[n],
	);
	let s = (0, b.A)(F.TimezoneScreen, e.animate && F.Animate);
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
					(0, y.we)("#Settings_TimeAndDate_ChooseTimezone_OOBE"),
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
var z = require("./76662.js");
var x = require("./22222.js");
var U = require(/*webcrack:missing*/ "./44846.js");
var W = require("./89600.js");
var V = require("./46422.js");
var H = require("./27238.js");
var j = require("./55025.js");
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
			className: (0, b.A)(j.OOBEButton, s && j.Disabled),
		},
		t &&
			i.createElement(
				"div",
				{
					className: (0, b.A)(j.Icons, j.Left),
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
					className: (0, b.A)(j.Icons, j.Left),
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
					className: (0, b.A)(j.Icons, j.Left),
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
var Z = require("./43802.js");
var Y = require("./93681.js");
var K = require("./67338.js");
var X = require("./28916.js");
var J = require("./45011.js");
var $ = require(/*webcrack:missing*/ "./54644.js");
var ee = require(/*webcrack:missing*/ "./11131.js");
function te(e) {
	(0, B.tI)();
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
	const t = (0, B.yL)();
	const r = (0, B.ED)();
	const n = (function (e, t) {
		const [r, n] = i.useState(!V.oy.BIsInOOBE || !e);
		i.useEffect(() => {
			if (!r && !e) {
				n(true);
			}
		}, [r, e]);
		return r && t;
	})(t, r);
	const a = (0, W.y6)();
	const s = i.useRef(undefined);
	(function (e, t) {
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
	const l = m.b.GetLoginUsers().length != 0 && !V.oy.BIsInOOBE;
	const c = (0, b.A)(z.NetworkScreen, e.animate && z.Animate);
	const u = (0, ee.R7)();
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
				(0, y.we)("#Login_Welcome_ChooseYourNetwork"),
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
							(0, y.we)("#Login_NoNetworksFound"),
						),
					t &&
						r &&
						i.createElement(
							q,
							{
								onActivate: () => (0, Z.V)(),
							},
							(0, y.we)("#Settings_Internet_Custom_Network_Button"),
						),
					l &&
						i.createElement(
							q,
							{
								onActivate: e.onContinueOffline,
							},
							(0, y.we)("#Login_LoginOffline"),
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
							onActivate: () => (0, J.B)(u.ownerWindow),
							rightIcons: i.createElement(o.Carat, {
								direction: "right",
							}),
						},
						(0, y.we)("#Settings_Internet_Proxy_Settings"),
					),
				),
			),
		),
	);
}
function re(e) {
	const t = (0, B.f_)();
	const r = (0, B.mR)();
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
					? (0, y.we)("#Settings_Internet_Captive_Portal_Detected")
					: (0, y.we)(
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
							onClick: (e) => (0, X.Y)((0, $.uX)(e)),
						},
						(0, y.we)("#Settings_Internet_Captive_Portal_Login_Button"),
					),
				),
		);
	} else {
		return null;
	}
}
function ne(e) {
	const t = (0, B.yL)();
	return i.createElement(Q, {
		value: t,
		onChange: (e) => B.OQ.Get().SetWifiEnabled(e),
		label: (0, y.we)("#Settings_Internet_Wifi_Enabled"),
	});
}
function ie(e) {
	const { accessPoint: t, canContinue: r, onContinue: n } = e;
	(0, K._)(t);
	const a = t.type == x.WO.Wireless;
	const s = t.isConnected;
	const l = (0, B.N4)();
	const c = (0, B.Av)();
	const m = s && l;
	const u =
		s &&
		!l &&
		c.eConnectivityTestResult != U.ck.k_EConnectivityTestResult_Unknown;
	const d = t.showAsLocked;
	const A = t.displayName;
	const p = (0, W.kE)(t) || (t.isConnected && c.bChecking);
	const g = i.useCallback(() => {
		(0, H.U)(t);
	}, [t]);
	const h = (0, S.xM)();
	const C = i.useCallback(() => {
		if (t.isConnected && B.OQ.Get().hasInternetConnection && !h() && n) {
			n();
		}
	}, [t, n, h]);
	const _ = i.useCallback(() => {
		(0, Z.V)(
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
		f.onOKActionDescription = (0, y.we)("#Settings_Internet_Connect");
	} else if (t.isConnected && r) {
		f.onOKButton = n;
		f.onOKActionDescription = (0, y.we)("#Login_Continue");
	} else {
		f.onOKButton = () => {};
		f.onOKActionDescription = null;
	}
	f.onMenuActionDescription = (0, y.we)("#Settings_Internet_Info");
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
var ae = require("./5482.js");
var se = require("./18057.js");
var oe = require("./95311.js");
var le = require(/*webcrack:missing*/ "./49519.js");
var ce = require("./56970.js");
var me = require("./13925.js");
var ue = require("./31800.js");
var de = require(/*webcrack:missing*/ "./92228.js");
var Ae = require("./28036.js");
var pe = require("./21616.js");
var ge = pe;
var he = require("./66947.js");
var Ce = he;
var _e = require("./37198.js");
var fe = require("./90869.js");
var be = require(/*webcrack:missing*/ "./26853.js");
var ye = require("./89791.js");
var Se = require("./87935.js");
var we = require("./18869.js");
var Be = require("./93025.js");
var ve = require("./96680.js");
var Ie = require("./33572.js");
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
	const A = (0, ye.N_)({
		transport: t,
		platform: n,
		onSuccess: r,
		refreshInfo: s,
		onDeviceDetails: d,
		onGetMachineAuth: (e) => SteamClient.Auth.GetSteamGuardData(e),
	});
	const p = (0, ve.$2)();
	const g = (0, Ie.D7)();
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
		case 13:
			return i.createElement(Ne, null);
		case 5:
		case 11:
		case 3:
		case 10:
			const e = C === 5 || C === 11;
			return i.createElement(Pe, {
				type: e ? "mobile" : "email",
				onSubmitCode: A.password.addCode,
				status: C,
				associatedLabel: A.password.strConfirmationAssociatedMessage,
				accountName: A.password.strAccountName,
				onBack: A.password.goBack,
			});
		case 6:
		case 4:
			const t = C === 6;
			return i.createElement(ze, {
				type: t ? "mobile" : "email",
				accountName: A.password.strAccountName,
				onUseCodeOverride: A.password.useCodeOverride,
			});
		case 16:
			return i.createElement(Oe, {
				reset: A.password.reset,
			});
		case 15:
			return i.createElement(Ge, {
				reset: A.password.reset,
				failure: A.password.eFailureState,
				onRequestOffline: A.onTryOffline,
				errorReference: A.password.strErrorReference,
			});
		case 14:
			return i.createElement(
				Ue,
				{
					compact: true,
				},
				o(),
			);
		default:
			console.error(`Unknown Phase: ${C}`);
			return i.createElement(Ge, {
				reset: A.password.reset,
				failure: fe.eF.Generic,
				onRequestOffline: A.onTryOffline,
				errorReference: A.password.strErrorReference,
			});
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
	const [f, b] = (0, i.useState)(false);
	const S = (function () {
		const e = (0, i.useRef)(true);
		(0, i.useEffect)(
			() => () => {
				e.current = false;
			},
			[e],
		);
		return (0, i.useCallback)(() => e.current, [e]);
	})();
	const w =
		r === 2 && !f
			? i.createElement(De, null, (0, y.we)("#Login_CheckCredentials_Short"))
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
				label: (0, y.we)("#Login_SignIn_WithAccountName"),
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
				label: (0, y.we)("#Login_Password"),
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
				label: (0, y.we)("#Login_RememberMe_Short"),
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
					(0, y.we)("#Login_SignIn"),
				),
				i.createElement(
					s.$n,
					{
						className: ge.LoginFormButton,
						onClick: g,
					},
					(0, y.we)("#Button_Cancel"),
				),
			),
		),
		i.createElement(
			Qe,
			{
				urlName: "HelpWithLogin",
			},
			(0, y.we)("#Login_Help_SignIn"),
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
	const l = (0, we.tn)(se.BV.GamepadUI.CreateAccount());
	return i.createElement(
		"div",
		{
			className: ge.LeftColCtn,
		},
		i.createElement(
			p.Z,
			{
				className: (0, b.A)(ge.QRCodeContainer, ge.QRSection, ge.ShowQR),
			},
			i.createElement(
				"div",
				{
					className: ge.LeftColHeader,
				},
				i.createElement("div", null, (0, y.we)("#Login_EnterCredentials")),
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
				(0, y.oW)(
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
					(0, y.we)("#Login_Join"),
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
				className: (0, b.A)(
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
					className: (0, b.A)(ge.Description),
				},
				(0, y.we)(
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
			(0, y.we)("#Login_GoOffline_Button"),
		),
	);
}
function Ge(e) {
	const { reset: t, failure: r, onRequestOffline: n, errorReference: a } = e;
	const { title: o, description: l } = (0, ye.tP)(r);
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
						(0, y.we)("#Login_Error_Reference", a),
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
					(0, y.we)("#Login_GoOffline_Description"),
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
					(0, y.we)("#Button_Retry"),
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
	const [l, c] = (0, i.useState)([]);
	const [m, u] = (0, i.useState)(false);
	const [d, A] = (0, i.useState)(false);
	const [g, h] = (0, i.useState)(false);
	const C = t === "mobile";
	const _ = l.join("");
	(0, ve.$2)();
	const f = (0, Ie.D7)();
	const b = (0, Ae.e1)(_, g);
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
								(0, y.we)("#Login_IncorrectSteamGuard"),
							),
						i.createElement(xe, {
							value: l,
							onChange: (e) => {
								if (!m) {
									u(true);
								}
								c(e);
								const t = e.join("");
								if ((0, Ae.e1)(t, g)) {
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
							(0, y.we)(B),
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
			? (0, y.we)("#Login_MobileProtectingAccount")
			: (0, y.we)("#Login_EmailProtectingAccount");
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
			(0, y.PP)(
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
			(0, y.we)("#Login_EnterCodeInstead"),
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
		length: (0, Ae.H)(r),
		backupCode: r,
		onChange: (e) => {
			const n = (e = e.map((e) => e.toUpperCase())).join("").trim();
			if ((0, Ae.JP)(n, r)) {
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
			className: (0, b.A)(ge.LoginContainer, ge.Login, Ce.Login),
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
		r = (0, y.we)("#Login_Help_AccessMobileApp");
	} else {
		t = "HelpWithSteamGuardCode";
		r = (0, y.we)("#Login_Help_AccessEmail");
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
				(0, y.we)("#Login_EnterBackupCode"),
			),
			i.createElement(
				"div",
				{
					className: ge.Label,
				},
				(0, y.we)("#Login_EnterBackupCodeDescription"),
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
			(0, y.we)("#Login_EnterMobileCode"),
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
			(0, y.PP)(
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
	const a = (0, b.A)(ge.TextLink, r === "center" && ge.TextAlignCenter);
	const s = (0, se.Qt)(
		Se.B7.ResolveURL("urlName" in e ? e.urlName : undefined),
	);
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
var Ze = require("./30449.js");
var Ye = require("./13688.js");
var Ke = require(/*webcrack:missing*/ "./29285.js");
var Xe = require("./6496.js");
var Je = require("./87232.js");
var $e = require(/*webcrack:missing*/ "./50376.js");
var et = require("./50350.js");
var tt = require("./22969.js");
var rt = require("./83665.js");
const nt = (e) => {
	const { className: t, children: r } = e;
	const n = (0, b.A)(l.LoginBackground, t);
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
					m.b.RemoveUser(e.accountName).then(() => e.onRemove && e.onRemove());
				},
			},
			(0, y.we)("#Login_RemoveUser_MenuOption"),
		),
	);
}
var st;
var ot;
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.Forward = 1)] = "Forward";
	e[(e.Backward = 2)] = "Backward";
})((st ||= {}));
(function (e) {
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
	m_strLastAccountName = m.b.accountName;
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
				m.b.GetLoginUsers().length != 0 ? ot.CachedUsersPanel : ot.SignInPanel;
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
			case ot.LanguageScreen:
				this.NavigateToMode(ot.TimezoneScreen);
				break;
			case ot.TimezoneScreen:
				if (c.TS.ON_STEAMOS) {
					this.NavigateToMode(ot.NetworkSetupScreen);
				} else {
					this.NavigateToMode(ot.UpdateScreen);
				}
				break;
			case ot.NetworkSetupScreen:
				if (this.BUserCanProceedFromInternet()) {
					this.setState({
						bOfflineMode: false,
					});
					if (V.oy.BIsInOOBE) {
						this.NavigateToMode(ot.UpdateScreen);
					} else {
						(0, Je.tH)("OOBE: Skipping update screen since we are not in OOBE");
						this.ProceedToSignIn();
					}
				}
				break;
			case ot.UpdateScreen:
				if (this.state.bChangedLocalization) {
					SteamClient.User.StartRestart(false);
					return;
				}
				this.ProceedToSignIn();
				this.modeHistory = [];
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
		if (m.b.GetLoginUsers().length == 0) {
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
		(0, Je.tG)(`Cached user removed, now have ${m.b.GetLoginUsers().length}`);
		if (!m.b.GetLoginUsers().length) {
			this.NavigateToMode(ot.SignInPanel);
		}
		this.m_strLastAccountName = "";
	}
	RenderCurrentPanel() {
		let e = null;
		let t = this.m_eNavigationDirection == st.None;
		switch (this.state.mode) {
			case ot.LanguageScreen:
				e = i.createElement(k, {
					onContinue: this.OnContinue,
					onLocalizationChanged: this.OnLocalizationChanged,
					animate: t,
				});
				break;
			case ot.TimezoneScreen:
				e = i.createElement(O, {
					onContinue: this.OnContinue,
					onBack: this.OnGoBack,
					animate: t,
				});
				break;
			case ot.NetworkSetupScreen:
				e = i.createElement(te, {
					canContinue: this.BUserCanProceedFromInternet(),
					onContinue: this.OnContinue,
					onBack: this.OnGoBack,
					onContinueOffline: this.OnContinueOffline,
					animate: t,
				});
				break;
			case ot.UpdateScreen:
				e = i.createElement(wt, {
					onContinue: this.OnContinue,
					onRestart: this.OnRestart,
					onGoBack: this.OnGoBack,
				});
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
			let n = (0, b.A)(
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
			case ot.CachedUsersPanel:
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
						m.b.loginResult != 1 &&
							i.createElement(
								"div",
								{
									className: l.LoginError,
								},
								(0, y.we)(
									"#Login_LastError",
									(function (e) {
										switch (e) {
											case 3:
												return (0, y.we)("#Login_NoConnection");
											case 5:
												return (0, y.we)("#Login_PasswordMismatch");
											case 88:
												return (0, y.we)("#Login_TwoFactorMismatch");
											case 71:
												return (0, y.we)("#Login_SteamGuardExpired");
											case 65:
												return (0, y.we)("#Login_SteamGuardMismatch");
											case 84:
												return (0, y.we)("#Login_RateLimitExceeded");
											case 20:
												return (0, y.we)("#Login_ServiceUnavailable");
											case 72:
												return (0, y.we)("#Login_LoginRestrictionFailed");
											case 6:
												return (0, y.we)("#Login_LoggedInElsewhere");
											case 126:
												return (0, y.we)("#Login_CachedCredentialInvalid");
											case 130:
												return (0, y.we)("#Login_OfflineAppCacheInvalid");
										}
										return String(e);
									})(m.b.loginResult),
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
								(0, A.lX)(
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
			case ot.SignInPanel:
				return i.createElement(ft, {
					navRef: this.m_navRef,
					isReauthentication: this.props.isReauthentication,
					onGoBack: this.OnGoBack,
				});
			case ot.PromptForPinPanel:
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
		(0, Je.tG)("Missing login state");
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
	const [t, r] = (0, i.useState)("");
	const [n, a] = (0, i.useState)("");
	const [u, d] = (0, i.useState)(false);
	const [A, g] = (0, i.useState)(0);
	(0, S.$$)(() => d(false), Math.min(10000, 2 ** A * 50), [A], u);
	const C = (0, c.rP)();
	const _ = m.b.GetLoginUsers().find((t) => t.accountName === e.strAccountName);
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
							a((0, y.we)("#Login_PinPrompt_IncorrectPin"));
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
				(0, y.we)("#Login_PinPrompt_Back"),
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
						(0, y.we)("#Login_PinPrompt_Description"),
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
					(0, y.we)("#Login_PinPrompt_LoginWithPassword"),
				),
			),
		),
	);
}
async function dt(e, t, r, n) {
	(0, Je.q_)("Awaiting cached signin");
	if ((await SteamClient.Auth.StartSignInFromCache(e, t)).result == 1) {
		(0, Je.q_)("Successful cached signin");
		await n?.();
	} else {
		(0, Je.q_)(`Cached signin for ${e} failed, no cached creds?`);
		r(e);
	}
}
(0, n.Cg)([S.oI], mt.prototype, "OnLocalizationChanged", null);
(0, n.Cg)([S.oI], mt.prototype, "OnRestart", null);
(0, n.Cg)([S.oI], mt.prototype, "OnContinue", null);
(0, n.Cg)([S.oI], mt.prototype, "ProceedToSignIn", null);
(0, n.Cg)([S.oI], mt.prototype, "OnGoBack", null);
(0, n.Cg)([S.oI], mt.prototype, "OnContinueOffline", null);
(0, n.Cg)([S.oI], mt.prototype, "OnCachedUserRemoved", null);
mt = (0, n.Cg)([u.PA], mt);
const At = i.forwardRef(function (e, t) {
	const { bFaceLocked: r, children: n, onClosed: s } = e;
	const o = (0, ve.$2)();
	const l = i.useCallback(
		(e) => {
			switch (e) {
				case 2:
				case 3:
					s?.();
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
	const { element: m, methods: u } = (0, tt.Xy)(tt.b7.LoginQRCode, c, {
		onStateChange: l,
	});
	i.useLayoutEffect(() => (0, S.cZ)(t, m), [t, m]);
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
			(0, y.we)("#Login_ZoomForVR"),
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
	let n = (0, d.q3)(() => {
		let t = m.b.GetLoginUsers();
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
							var r;
							r = t.accountName;
							(0, Je.tG)(`Signing in ${r} using cached credentials`);
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
					onSecondaryActionDescription: (0, y.we)("#Login_RemoveUser"),
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
					className: (0, b.A)(l.LoginCachedAvatar, n && l.Highlight),
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
						(0, y.we)("#Login_UserChooser_AccountName", t.accountName),
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
					className: (0, b.A)(l.NewLogin),
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
					(0, y.we)("#Login_AddAccount"),
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
					(0, y.we)("#Login_PickUser"),
				),
				i.createElement(
					"div",
					{
						className: l.SubHeader,
					},
					(0, y.we)("#Login_CachedUsers"),
				),
			),
		i.createElement(
			p.Z,
			{
				className: (0, b.A)(l.CachedUserList, r && n.length > r && l.LongList),
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
		case ot.UpdateScreen:
			r = true;
			break;
		default:
			r = false;
	}
	(0, ue.ez)(r, "LoginPanelLoginForm");
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
	const A = (0, c.rP)().IN_VR;
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
				(0, Je.tG)(
					"received authentication token, using it to sign in to Steam",
				);
				_(null);
				SteamClient.Auth.SetLoginToken(
					e.strRefreshToken,
					e.strAccountName,
				).then((e) => {
					const t = e.result;
					const r = e.message;
					(0, Je.tG)(`client login returned ${t} (${r})`);
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
	const r = (0, d.q3)(() => m.b.loginPercentage);
	const n = i.useRef(0);
	const a = (0, d.q3)(() => m.b.currentUser);
	const s = !(0, c.Qn)() && !!a && !(0, Ke.q)();
	const o = (0, c.Pr)();
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
		case 4:
			u = (0, y.we)("#Login_WaitingForNetwork");
			break;
		case 5:
			u = (0, y.we)("#Login_WaitingForServer");
			break;
		case 6:
			u = (0, y.we)("#Login_LoadingLibrary");
			A = n.current > 5;
			break;
		case 8:
			u = (0, y.we)("#Login_ShuttingDown");
	}
	return i.createElement(
		p.Z,
		{
			className: (0, b.A)(l.LoginStatusContainer, o && l.OSX),
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
					className: (0, b.A)(l.LoginStatus),
				},
				u,
			),
			i.createElement(
				"div",
				{
					className: (0, b.A)(l.Progress, A && r > 0 && l.Visible),
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
	const r = (0, Ye.k1)();
	(0, v.Xf)("hidden", "CreateAccount");
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
						i.createElement("div", null, (0, y.we)("#Login_Join")),
					),
					i.createElement(
						s.$n,
						{
							className: l.LoginError,
							onClick: () => r.Login(),
						},
						(0, y.we)("#Login_EnterCredentials"),
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
						(0, y.we)("#Join_New"),
					),
					i.createElement(
						"div",
						{
							className: l.JoinSubhead,
						},
						(0, y.we)("#Join_ScanCode"),
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
						(0, y.PP)("#Join_SiteLink", t),
					),
				),
			),
		),
	);
}
export function GW() {
	const e = (0, le.zy)();
	const t = e.state?.bReauthentication;
	const r = (0, m.m)();
	const n = (0, B.jh)();
	const a = (function (e) {
		const t = e == 1 || e == 2;
		i.useEffect(() => {
			if (t) {
				R.o.Init();
			}
		}, [t]);
		let r = (0, S.gc)(R.o.CurrentLanguage);
		let n = (0, S.gc)(R.o.AvailableLanguages);
		let a = (0, S.gc)(R.o.WelcomeText);
		const s = r.length != 0 && n?.length != 0 && a?.length != 0;
		let o = (0, S.gc)(R.o.CurrentTimeZoneID);
		let l = (0, S.gc)(R.o.AvailableTimeZones);
		const c = o.length != 0 && l?.length != 0;
		return {
			bNeedOOBEData: t,
			bHaveOOBEData: s && c,
		};
	})(r);
	(0, v.Xf)("hidden", "LoginPanel");
	i.useEffect(() => {
		let e = ce.yE.GetSettings();
		if (e.bLockOnLogin && !e.bUserForgotPin) {
			if (!ce.yE.BConsumeLockTicket()) {
				(0, me.Di)({
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
		case 2:
			return i.createElement(mt, {
				isReauthentication: t,
				loginState: r,
				oobeData: a,
			});
		default:
			return i.createElement(Qk, {
				loginState: r,
			});
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
				case 6:
					i = () => SteamClient.User.StartRestart(false);
					break;
				case 7:
					i = () => SteamClient.System.RestartPC();
					break;
				default:
					i = e.onContinue;
			}
			(function (e) {
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
	const n = (0, we.tn)(se.BV.GamepadUI.Setup());
	return i.createElement(oe.zQ, {
		onUpdateComplete: r,
		onShowHelp: n,
		onRestart: e.onRestart,
		onCancel: e.onGoBack,
	});
}
