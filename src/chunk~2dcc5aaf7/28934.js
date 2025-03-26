var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./10606.js");
var a = require("./3475.js");
import { Localize } from "../../actual_src/utils/localization.js";
var o = require("./24274.js");
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require("./21426.js");
var m = c;
var u = require("./89748.js");
var d = require("./18057.js");
var A = require("./77347.js");
var p = require("./20037.js");
var g = require(/*webcrack:missing*/ "./72476.js");
var h = require("./10294.js");
var C = require("./6232.js");
var _ = require(/*webcrack:missing*/ "./11131.js");
function f(e) {
	return e >= "0" && e <= "9";
}
function b(e) {
	const { onUnlock: t, closeModal: r } = e;
	const [a, o] = n.useState("");
	const [c, u] = n.useState("");
	const d = n.useRef(undefined);
	const A = (0, g.rP)();
	const h = A.IN_GAMEPADUI || A.IN_VR;
	const C = n.useCallback((e) => {
		if (
			!e.target.value ||
			(f(e.target.value.slice(-1)) && e.target.value.length <= 4)
		) {
			u(e.target.value);
		}
	}, []);
	const _ = n.useCallback(
		(e) => {
			SteamClient.Parental.UnlockParentalLock(e, true).then((e) => {
				switch (e) {
					case 1:
						if (r) {
							r();
						}
						if (t) {
							t();
						}
						break;
					case 25:
						u("");
						o((0, Localize)("#FamilyView_UnlockDialog_LimitExceeded"));
						d.current.focus();
						break;
					default:
						u("");
						o((0, Localize)("#FamilyView_UnlockDialog_WrongPIN"));
						d.current.focus();
				}
			});
		},
		[r, t],
	);
	if (h) {
		return n.createElement(p.K, {
			className: m.ParentalPINDialog,
			title: (0, Localize)("#FamilyView_Dialog_Title"),
			description: (0, Localize)("#FamilyView_UnlockDialog_Description"),
			errorText: a,
			digits: 4,
			validateDigit: f,
			onResult: _,
			onCancel: r,
		});
	} else {
		return n.createElement(
			i.o0,
			{
				className: m.ParentalUnlock,
				onCancel: r || (() => {}),
				onOK: () => _(c),
				bOKDisabled: c.length < 4,
				bAlertDialog: !r,
				strOKButtonText: (0, Localize)("#Button_OK"),
				strTitle: (0, Localize)("#FamilyView_Dialog_Title"),
			},
			n.createElement(
				"div",
				{
					className: m.Body,
				},
				n.createElement(
					"div",
					{
						className: m.ErrorText,
					},
					a || n.createElement("span", null, "\xA0"),
				),
				n.createElement(
					"div",
					{
						className: m.Description,
					},
					(0, Localize)("#FamilyView_UnlockDialog_Description"),
				),
				n.createElement("input", {
					className: (0, l.A)(m.TextInput),
					ref: d,
					value: c,
					type: "password",
					autoFocus: true,
					onChange: C,
				}),
			),
		);
	}
}
function y(e) {
	const { feature: t, closeModal: r } = e;
	const [l, c] = n.useState(n.createElement(n.Fragment, null, "\xA0"));
	const p = (0, A.Id)();
	const g = (0, u.QR)();
	const h = (0, u.iZ)();
	const C = t === a.JC || !t;
	const _ = n.useCallback(
		(e) => {
			if (e.result !== 84) {
				c(
					(0, Localize)(
						"#FamilyView_RequestFeatureAccess_GenericError",
						e.result,
					),
				);
			} else {
				r();
			}
		},
		[r],
	);
	const f = (0, o.gB)(h.strSteamID, t, r, _);
	const b = n.useCallback(() => {
		c(n.createElement(n.Fragment, null, "\xA0"));
		f.mutate();
	}, [f]);
	const y = (0, d.Qt)("steam://open/goonline");
	let S = b;
	let w = (0, Localize)("#FamilyView_RequestFeatureAccess");
	let B = (0, Localize)("#FamilyView_RequestFeatureAccess_Request");
	if (C) {
		S = r;
		w = (0, Localize)("#FamilyView_RequestFeatureAccess_AlwaysBlocked");
	} else if (g) {
		S = y;
		B = (0, Localize)("#AppDetails_GoOnline");
	} else if (!p) {
		S = r;
		B = undefined;
		w = (0, Localize)("#FamilyView_RequestFeatureAccess_Offline");
	}
	return n.createElement(
		i.o0,
		{
			className: m.ParentalUnlock,
			bOKDisabled: C,
			onCancel: r,
			onOK: S,
			bAlertDialog: !p && !g,
			strOKButtonText: B,
			strTitle: (0, Localize)("#FamilyView_Dialog_Title"),
		},
		n.createElement(
			"div",
			{
				className: m.Body,
			},
			n.createElement(
				"div",
				{
					className: m.ErrorText,
				},
				l,
			),
			n.createElement(
				"div",
				{
					className: m.Description,
				},
				w,
			),
		),
	);
}
function S(e) {
	const { onUnlock: t, closeModal: r } = e;
	const [a, o] = n.useState("");
	const [c, u] = n.useState("");
	const d = n.useRef(undefined);
	const A = (0, g.rP)();
	const C = A.IN_GAMEPADUI || A.IN_VR;
	const _ = n.useCallback((e) => {
		if (
			!e.target.value ||
			(f(e.target.value.slice(-1)) && e.target.value.length <= 4)
		) {
			u(e.target.value);
		}
	}, []);
	const b = n.useCallback(
		(e) => {
			if (h.Ih.BKioskModeUnlock(e)) {
				if (r) {
					r();
				}
				if (t) {
					t();
				}
				return;
			}
			u("");
			o((0, Localize)("#FamilyView_UnlockDialog_WrongPIN"));
		},
		[r, t],
	);
	if (C) {
		return n.createElement(p.K, {
			className: m.ParentalPINDialog,
			title: (0, Localize)("#KioskMode_Dialog_Title"),
			description: (0, Localize)("#KioskMode_UnlockDialog_Description"),
			errorText: a,
			digits: 4,
			validateDigit: f,
			onResult: b,
			onCancel: r,
		});
	} else {
		return n.createElement(
			i.o0,
			{
				className: m.ParentalUnlock,
				onCancel: r || (() => {}),
				onOK: () => b(c),
				bOKDisabled: c.length < 4,
				bAlertDialog: !r,
				strOKButtonText: (0, Localize)("#Button_OK"),
				strTitle: (0, Localize)("#KioskMode_Dialog_Title"),
			},
			n.createElement(
				"div",
				{
					className: m.Body,
				},
				n.createElement(
					"div",
					{
						className: m.ErrorText,
					},
					a || n.createElement("span", null, "\xA0"),
				),
				n.createElement(
					"div",
					{
						className: m.Description,
					},
					(0, Localize)("#KioskMode_UnlockDialog_Description"),
				),
				n.createElement("input", {
					className: (0, l.A)(m.TextInput),
					ref: d,
					value: c,
					type: "password",
					autoFocus: true,
					onChange: _,
				}),
			),
		);
	}
}
function w(e) {
	const { closeModal: t } = e;
	return n.createElement(
		i.o0,
		{
			className: m.RemotePlayStoreBlockedDialog,
			onCancel: t || (() => {}),
			onOK: t,
			bAlertDialog: true,
			strOKButtonText: (0, Localize)("#Button_OK"),
			strTitle: (0, Localize)("#RemotePlay_StoreFunctionalityBlocked_Title"),
		},
		n.createElement(
			"div",
			{
				className: m.Body,
			},
			n.createElement(
				"div",
				{
					className: m.Description,
				},
				(0, Localize)("#RemotePlay_StoreFunctionalityBlocked_Description"),
			),
		),
	);
}
export function g5(e) {
	const { closeModal: t, onUnlock: r, feature: i } = e;
	const a = e.blockReason;
	const s = n.useRef(undefined);
	s.current = t;
	const o = n.useRef(undefined);
	o.current = r;
	n.useEffect(() => {
		if (a == 0) {
			o.current?.();
			s.current?.();
		}
	}, [a]);
	switch (a) {
		case 4:
			return n.createElement(S, {
				onUnlock: r,
				closeModal: t,
			});
		case 3:
			return n.createElement(w, {
				closeModal: t,
			});
		case 1:
			return n.createElement(b, {
				onUnlock: r,
				closeModal: t,
			});
		case 2:
			return n.createElement(y, {
				feature: i,
				closeModal: t,
			});
		default:
			return null;
	}
}
export function wT() {
	const e = (0, _.R7)();
	return n.useCallback(
		(t, r, n) => {
			(0, C.$)(e?.ownerWindow ?? window, t, r, n);
		},
		[e],
	);
}
