var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./12774.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require("./78110.js");
import { Localize } from "../../actual_src/utils/localization.js";
export function Q(e) {
	const {
		active: t,
		onOK: r,
		closeModal: a,
		bCloseOnOK: l,
		children: c,
		...m
	} = e;
	if (!t) {
		return null;
	}
	const u =
		(typeof m.strTitle == "string" && m.strTitle) ||
		(0, Localize)("#Steam_Platform");
	return n.createElement(
		s.w,
		{
			onlyPopoutIfNeeded: true,
			popupHeight: 340,
			popupWidth: 640,
			strTitle: u,
		},
		n.createElement(
			i.o0,
			{
				...m,
				onCancel: a,
				onOK: () => {
					r();
					if (l) {
						a();
					}
				},
			},
			c,
		),
	);
}
export function M(e) {
	const { bCloseOnOK: t = true, children: r, ...i } = e;
	const [s, o, c] = (0, a.uD)();
	return [
		n.createElement(
			Q,
			{
				active: s,
				bCloseOnOK: t,
				closeModal: c,
				...i,
			},
			r,
		),
		o,
		c,
	];
}
