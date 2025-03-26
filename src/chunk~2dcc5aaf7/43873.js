var n = require("./46422.js");
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./46382.js");
var o = require(/*webcrack:missing*/ "./11131.js");
var l = require("./10606.js");
import { Localize } from "../../actual_src/utils/localization.js";
var m = require(/*webcrack:missing*/ "./72476.js");
var _u = require("./26326.js");
var d = require("./85733.js");
var A = d;
var p = require("./83718.js");
const g = 705;
const h = 470;
function C(e) {
	const [t, r] = a.useState();
	const i = (0, s.zv)();
	return a.createElement(
		l.hM,
		{
			strTitle: Localize("#Login_RefreshSignIn"),
			popupWidth: g,
			popupHeight: h,
			modalClassName: A.RefreshLoginDialogModal,
			className: A.RefreshLoginDialog,
			modal: true,
			refPopup: r,
			onDismiss: () => {
				if (!o.Of.BShuttingDown()) {
					SteamClient.User?.StartShutdown(true);
				}
			},
		},
		a.createElement(_u.FullLogin, {
			cm: i,
			popup: t,
			includeTitleBar: true,
			refreshLogin: true,
			onLoginComplete: () => {
				n.oy.ResetErrorCondition();
			},
		}),
	);
}
export function Y(e) {
	const t = (0, m.hf)();
	const r = (0, i.q3)(() => n.oy.ErrorCondition);
	if (!t) {
		return null;
	}
	if (r == 0) {
		return null;
	}
	switch (r) {
		case 1:
		case 2:
			return a.createElement(C, null);
		default:
			return null;
	}
}
function f(e) {
	const [t, r] = a.useState();
	const i = (0, s.zv)();
	const o = (0, p.aS)(g, h);
	return a.createElement(
		p.rG,
		{
			strTitle: Localize("#Login_RefreshSignIn"),
			updateParamsBeforeShow: o,
			refPopup: r,
		},
		a.createElement(_u.FullLogin, {
			cm: i,
			popup: t,
			includeTitleBar: true,
			refreshLogin: true,
			onLoginComplete: () => {
				n.oy.ResetErrorCondition();
			},
		}),
	);
}
export function u(e) {
	const t = (0, m.hf)();
	const r = (0, i.q3)(() => n.oy.ErrorCondition);
	if (!t) {
		return null;
	}
	if (r == 0) {
		return null;
	}
	switch (r) {
		case 1:
		case 2:
			return a.createElement(f, null);
		default:
			return null;
	}
}
