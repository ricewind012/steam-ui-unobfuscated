var n = require("./13869.js");
var i = require("./52912.js");
var a = require("./95773.js");
var s = require(/*webcrack:missing*/ "./46108.js");
var o = require("./10606.js");
export function Ci(e, t, r, a, l = (0, s.we)("#Button_Cancel"), c, m, u) {
	return (0, o.ZH)(
		(r) => {
			let a = dt(e, t, u);
			(0, n.HT)(r, e, "alertdialog", a, u || (0, i.h8)(e));
		},
		t,
		r,
		a,
		l,
		c,
		m,
	);
}
export function hr(e, t, r, n = (0, s.we)("#Button_Cancel"), i, o) {
	const c = a.xm.GetDefaultBrowserContext();
	return Ci(window, e, t, r, n, i, o, c);
}
export function WQ(e, t, r, n, i = (0, s.we)("#Button_Cancel"), a, o) {
	return Ci(e, t, r, n, i, a, o)
		.then(() => Promise.resolve(true))
		.catch(() => Promise.resolve(false));
}
export function Ic(e, t, r, a = (0, s.we)("#Button_OK"), l, c, m) {
	return (0, o.nd)(
		(r) => {
			let a = dt(e, t, c, m);
			(0, n.HT)(r, e, "alertdialog", a, c || (0, i.h8)(e));
		},
		t,
		r,
		a,
		l,
	);
}
export function Nw(e, t, r = (0, s.we)("#Button_OK"), n) {
	const i = a.xm.GetDefaultBrowserContext();
	const o = a.xm.UIStore.GetPerContextChatData(i);
	const l = o?.friends_list_window?.GetWindow() ?? window;
	return Ic(window, e, t, r, n, i, l);
}
export function dt(e, t, r, n) {
	if (
		a.xm.UIStore.GetPerContextChatData(r || (0, i._k)(e)).BUsePopups() &&
		e.innerWidth < 600
	) {
		return {
			strTitle: t,
			popupWidth: 638,
			popupHeight: 300,
			openerWindow: n,
		};
	} else {
		return null;
	}
}
