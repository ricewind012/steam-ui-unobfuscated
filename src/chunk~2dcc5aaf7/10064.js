var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./34792.js");
export function C(e) {
	const { setting: t, onChange: r, onBlur: s, ...o } = e;
	const [l, c] = (0, a.VI)(t);
	const [m, u] = (0, n.useState)(l);
	(0, n.useEffect)(() => {
		u(l);
	}, [l]);
	return n.createElement(i.pd, {
		...o,
		value: m,
		onChange: (e) => {
			u(e.target.value);
			if (r) {
				r(e);
			}
		},
		onBlur: (e) => {
			c(e.target.value);
			if (s) {
				s(e);
			}
		},
	});
}
