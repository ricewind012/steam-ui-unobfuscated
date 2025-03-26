var n = require(/*webcrack:missing*/ "./63696.js");
import { Localize } from "../../actual_src/utils/localization.js";
var a = require("./13869.js");
var s = require("./10606.js");
var o = require("./28934.js");
var l = require("./10294.js");
export function $(e, t, r, i) {
	(0, a.pg)(
		n.createElement(o.g5, {
			feature: r,
			blockReason: t,
			onUnlock: i,
		}),
		e,
	);
}
const m = (e) => {
	const { blockReason: t, closeModal: r } = e;
	const a =
		t == 4
			? Localize("#KioskMode_Dialog_Title")
			: Localize("#FamilyView_Dialog_Title");
	const o =
		t == 4
			? Localize("#KioskMode_LockDialog_Description")
			: Localize("#FamilyView_LockDialog_Description");
	return n.createElement(s.o0, {
		strTitle: a,
		strDescription: o,
		onOK: () => {
			switch (t) {
				case 2:
				case 1:
				default:
					SteamClient.Parental.LockParentalLock();
					break;
				case 4:
					l.Ih.KioskModeLock();
			}
			r();
		},
		onCancel: r,
	});
};
export function S(e, t) {
	(0, a.pg)(
		n.createElement(m, {
			blockReason: t,
		}),
		e,
	);
}
