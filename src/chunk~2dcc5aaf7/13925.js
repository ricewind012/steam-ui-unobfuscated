var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./35488.js");
var a = require(/*webcrack:missing*/ "./69164.js");
var s = require("./43014.js");
var o = require("./53622.js");
var l = require("./10606.js");
var c = require("./13869.js");
var m = require(/*webcrack:missing*/ "./90765.js");
var u = require(/*webcrack:missing*/ "./46108.js");
var d = require("./56970.js");
var A = require(/*webcrack:missing*/ "./49455.js");
var p = require(/*webcrack:missing*/ "./85243.js");
var g = require("./33512.js");
var h = require("./43152.js");
var C = require("./4251.js");
var _ = require("./46422.js");
var f = require(/*webcrack:missing*/ "./61657.js");
var b = require("./55489.js");
var y = require("./31800.js");
var S = require(/*webcrack:missing*/ "./54644.js");
var w = require(/*webcrack:missing*/ "./90095.js");
var B = require("./13688.js");
var v = require("./5822.js");
const I = 6;
function E(e) {
	return /\d{6}/.test(e);
}
function M(e, t) {
	const [r, i] = (0, n.useState)("");
	const [a, s] = (0, n.useState)(false);
	const [o, l] = (0, n.useState)(false);
	const c = n.useCallback(() => {}, []);
	const m = (0, h.FN)({
		onKeyboardNavOut: c,
	});
	n.useEffect(() => m.HideVirtualKeyboard(), [m]);
	return {
		strValue: r,
		bSubmitting: a,
		bFailedSubmit: o,
		Backspace: () => i(r.length ? r.slice(0, r.length - 1) : ""),
		Append: (n) => {
			if (a) {
				return;
			}
			if (o) {
				l(false);
			}
			const c = r + n;
			if (c.length <= I) {
				i(c);
			}
			if (c.length === I) {
				(async (r) => {
					s(true);
					let n = d.yE.GetSettings();
					(0, A.w)(
						e.allowAnyPIN || n.strPIN,
						"Lock screen displayed with no PIN set",
					);
					let a = false;
					a =
						e.allowAnyPIN || !n.strPIN
							? E(r)
							: await (E(r) &&
									new Promise((e) => setTimeout(() => e(r === n.strPIN), 200)));
					s(false);
					i("");
					l(!a);
					if (a) {
						t(r);
					}
				})(c);
			}
		},
	};
}
export function Di(e) {
	d.yE.SetActiveLockScreenProps(e);
}
export function kN(e) {
	return (0, c.pg)(
		n.createElement(kG, {
			...e,
		}),
		window,
	);
}
export function kG(e) {
	const {
		onSuccess: t,
		preventCancel: r,
		preventSteamButtons: s,
		hideForgotPIN: o,
		closeModal: m,
	} = e;
	n.useEffect(() => {
		_.oy.SetShowingLockScreen(true);
		return () => _.oy.SetShowingLockScreen(false);
	}, []);
	(0, y.UU)();
	(0, v.EZ)();
	(0, b.Bx)(p.I5.Opaque, "LockScreen");
	const {
		strValue: A,
		bFailedSubmit: h,
		Backspace: w,
		Append: B,
	} = M(e, (e) => {
		if (m) {
			m();
		}
		if (t) {
			t(e);
		}
		d.yE.SetActiveLockScreenProps(null);
	});
	const E = !!A.length;
	const T = E
		? w
		: r
			? () => {}
			: () => {
					if (m) {
						m();
					}
					d.yE.SetActiveLockScreenProps(null);
				};
	const R = [];
	for (let e = 0; e < I; e++) {
		R.push(
			n.createElement(O, {
				key: e,
				filled: A.length > e,
			}),
		);
	}
	let k = "";
	if (!e.allowAnyPIN) {
		let e = (function () {
			let e = d.yE.GetSettings();
			return g.b
				.GetLoginUsers()
				.find((t) => t.accountName == e.strOwnerAccountName);
		})();
		if (e) {
			k = e.avatarUrl;
		}
	}
	let N = {
		onOKActionDescription: "",
	};
	if (!o) {
		N.onMenuButton = (e) =>
			(function (e) {
				let t = d.yE.GetSettings();
				let r = n.createElement("b", null, t.strOwnerAccountName);
				let i = n.createElement(
					n.Fragment,
					null,
					n.createElement(
						"div",
						{
							className: C.ResetDescription,
						},
						(0, u.PP)("#LockScreen_ResetDescription", r),
					),
					n.createElement(
						"div",
						{
							className: C.ResetWarning,
						},
						(0, u.we)("#LockScreen_ResetWarning"),
					),
				);
				let a = () => d.yE.BeginPINReset();
				let s = n.createElement(l.o0, {
					strTitle: (0, u.we)("#LockScreen_ForgotPIN"),
					onOK: a,
					strDescription: i,
					strOKButtonText: (0, u.we)("#LockScreen_Reset"),
				});
				(0, c.pg)(s, e, {
					strTitle: (0, u.we)("#LockScreen_ForgotPIN"),
				});
			})((0, S.uX)(e));
		N.onMenuActionDescription = (0, u.we)("#LockScreen_ForgotPIN");
	}
	N.onCancelActionDescription = E
		? (0, u.we)("#Generic_Delete")
		: r
			? ""
			: (0, u.we)("#ActionButtonLabelCancel");
	if (s) {
		N.onButtonDown = D;
		N.actionDescriptionMap = {
			...N.actionDescriptionMap,
			[f.pR.STEAM_GUIDE]: "",
			[f.pR.STEAM_QUICK_MENU]: "",
		};
	}
	return n.createElement(
		a.Z,
		{
			className: C.Container,
			onCancel: T,
			...N,
		},
		n.createElement(
			"div",
			{
				className: C.Details,
			},
			!e.allowAnyPIN &&
				n.createElement(
					"div",
					{
						className: C.UserAvatar,
					},
					k
						? n.createElement("img", {
								src: k,
							})
						: n.createElement(i.User, null),
				),
			n.createElement(
				"div",
				{
					className: C.DetailsGroup,
				},
				e.allowAnyPIN &&
					n.createElement(
						"div",
						{
							className: C.Prompt,
						},
						(0, u.we)(
							e.strPromptOverride
								? e.strPromptOverride
								: "#LockScreen_NewPINPrompt",
						),
					),
				!e.allowAnyPIN &&
					n.createElement(
						"div",
						{
							className: C.Prompt,
						},
						(0, u.we)("#LockScreen_PINPrompt"),
					),
				n.createElement(
					"div",
					{
						className: C.Directions,
					},
					(0, u.we)("#LockScreen_Directions"),
				),
			),
			n.createElement(
				"div",
				{
					className: C.Indicators,
				},
				R,
			),
			n.createElement(
				"div",
				{
					className: C.IncorrectPIN,
				},
				h && (0, u.we)("#LockScreen_IncorrectPIN"),
				"\xA0",
			),
		),
		n.createElement(F, {
			onDigit: B,
		}),
	);
}
function D(e) {
	let t = e.detail.button;
	if (t == f.pR.STEAM_GUIDE || t == f.pR.STEAM_QUICK_MENU) {
		e.preventDefault();
		e.stopPropagation();
	}
}
const N = [
	[1, s.g4.Up],
	[2, s.g4.Left],
	[3, s.g4.Down],
	[4, s.g4.Right],
	[5, s.g4.LeftTrigger],
	[6, s.g4.RightTrigger],
	[7, s.g4.LeftBumper],
	[8, s.g4.RightBumper],
	[9, s.g4.Y],
	[0, s.g4.X],
];
function F(e) {
	const { onDigit: t } = e;
	return n.createElement(
		a.Z,
		{
			className: C.NumericButtonInput,
			autoFocus: true,
			focusable: true,
			noFocusRing: true,
			onButtonDown: (e) => {
				const r = N.find(([t, r]) => (0, s.ck)(r) === e.detail.button);
				return !!r && (t(r[0]), true);
			},
			onGamepadDirection: () => true,
		},
		N.map(([e, r]) =>
			n.createElement(G, {
				value: e,
				button: r,
				key: e,
				onActivate: () => t(e),
			}),
		),
	);
}
function G(e) {
	const { value: t, button: r, onActivate: i } = e;
	return n.createElement(
		a.Z,
		{
			focusable: false,
			onActivate: i,
			className: C.NumericButtonOption,
		},
		t,
		n.createElement(o.W, {
			button: r,
		}),
	);
}
function O(e) {
	return n.createElement("div", {
		className: (0, m.A)(C.DigitIndicator, e.filled && C.Filled),
	});
}
export function SA() {
	const e = (0, B.k1)();
	const t = n.useCallback(() => {
		d.yE.SetHasShownResetPINModal();
	}, []);
	const r = (0, w.q3)(() => d.yE.BShowResetPINModal());
	const i = (0, u.we)("#LockScreenReset_Title");
	const a = (0, u.we)("#LockScreenReset_Settings");
	const s = (0, u.we)("#Generic_Close");
	let o = n.createElement(
		n.Fragment,
		null,
		n.createElement("div", null, (0, u.we)("#LockScreenReset_Body")),
		n.createElement(
			"div",
			{
				className: C.PINClearedQuestion,
			},
			(0, u.we)("#LockScreenReset_Question"),
		),
	);
	return n.createElement(
		l.EN,
		{
			active: r,
		},
		n.createElement(l.o0, {
			closeModal: t,
			onOK: () => e.Settings("Security"),
			strTitle: i,
			strDescription: o,
			strOKButtonText: a,
			strCancelButtonText: s,
		}),
	);
}
