var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./34792.js");
var a = require(/*webcrack:missing*/ "./72476.js");
var s = require("./13897.js");
export function X(e) {
	const { setting: t, onChange: r, visible: o = true, feature: l, ...c } = e;
	const [m, u] = (0, i.VI)(t);
	const d = (0, a.hf)();
	if (o) {
		return n.createElement(s.B, {
			feature: l,
			...c,
			selectedOption: m,
			onChange: (e, t) => {
				u(e.data);
				if (r) {
					r(e, t);
				}
			},
			contextMenuPositionOptions: {
				bMatchWidth: !d,
			},
		});
	} else {
		return null;
	}
}
