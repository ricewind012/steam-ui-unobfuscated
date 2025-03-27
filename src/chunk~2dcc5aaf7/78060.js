import { Localize } from "../../actual_src/utils/localization.js";
import n, { HT } from "./13869.js";
import i, { h8, _k } from "./52912.js";
import a from "./95773.js";
import o, { ZH, nd } from "./10606.js";
export function Ci(e, t, r, a, l = (0, Localize)("#Button_Cancel"), c, m, u) {
	return ZH(
		(r) => {
			let a = dt(e, t, u);
			HT(r, e, "alertdialog", a, u || h8(e));
		},
		t,
		r,
		a,
		l,
		c,
		m,
	);
}
export function hr(e, t, r, n = (0, Localize)("#Button_Cancel"), i, o) {
	const c = a.xm.GetDefaultBrowserContext();
	return Ci(window, e, t, r, n, i, o, c);
}
export function WQ(e, t, r, n, i = (0, Localize)("#Button_Cancel"), a, o) {
	return Ci(e, t, r, n, i, a, o)
		.then(() => Promise.resolve(true))
		.catch(() => Promise.resolve(false));
}
export function Ic(e, t, r, a = (0, Localize)("#Button_OK"), l, c, m) {
	return nd(
		(r) => {
			let a = dt(e, t, c, m);
			HT(r, e, "alertdialog", a, c || h8(e));
		},
		t,
		r,
		a,
		l,
	);
}
export function Nw(e, t, r = (0, Localize)("#Button_OK"), n) {
	const i = a.xm.GetDefaultBrowserContext();
	const o = a.xm.UIStore.GetPerContextChatData(i);
	const l = o?.friends_list_window?.GetWindow() ?? window;
	return Ic(window, e, t, r, n, i, l);
}
export function dt(e, t, r, n) {
	if (
		a.xm.UIStore.GetPerContextChatData(r || _k(e)).BUsePopups() &&
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
