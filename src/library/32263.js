var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./90765.js");
var s = require("./24892.js");
var o = s;
export const D = r.forwardRef((e, t) => {
	const { className: n, contextMenuStyles: s, disabled: a, ...c } = e;
	return r.createElement("div", {
		...c,
		ref: t,
		className: (0, i.A)(
			n,
			(s || o).contextMenuItem,
			"contextMenuItem",
			a && "disabled",
		),
	});
});
export function n(e) {
	const { bChecked: t, children: n, className: s, ...o } = e;
	return r.createElement(
		D,
		{
			...o,
			className: (0, i.A)(s, t && "menuChecked"),
		},
		r.createElement("div", {
			className: "contextMenuCheckMark",
		}),
		n,
	);
}
D.displayName = "MenuItem";
