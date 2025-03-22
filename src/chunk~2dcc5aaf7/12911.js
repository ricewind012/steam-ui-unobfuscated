var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require("./87441.js");
export function k(e) {
	const { size: t, color: r, trackColor: s } = e;
	const o = {
		borderColor: s,
		borderLeftColor: r,
	};
	if (typeof t == "number") {
		const e = `${t}px`;
		o.width = e;
		o.height = e;
		o.minHeight = e;
		o.minWidth = e;
		o.borderWidth = t / 10 + "px";
	}
	return n.createElement("div", {
		className: (0, i.A)(
			a.Loading,
			t == "small" && a.Small,
			(t == "medium" || !t) && a.Medium,
			t == "large" && a.Large,
		),
		style: o,
	});
}
