var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./5640.js");
var s = require("./28934.js");
var o = require(/*webcrack:missing*/ "./69164.js");
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require("./94692.js");
var m = c;
export function E(e) {
	const { feature: t, disabled: r, as: o, ...l } = e;
	const c = (0, a.l9)(t);
	const m = c !== 0;
	const u = (0, s.wT)();
	const d = o || i.xh;
	return n.createElement(d, {
		...l,
		onActivate: m && !r ? () => u(c, t) : undefined,
		disabled: m || r,
	});
}
export function t(e) {
	const { feature: t, disabled: r, children: c, className: u, as: d, ...A } = e;
	const p = (0, a.l9)(t);
	const g = p !== 0;
	const h = (0, s.wT)();
	const C = d || i.$n;
	return n.createElement(
		C,
		{
			...A,
			focusable: !g,
			className: (0, l.A)(m.ParentalButton, u, g && m.Blocked),
			disabled: g || r,
		},
		c,
		n.createElement(o.Z, {
			className: m.ParentalWrapper,
			onActivate:
				g && !r
					? (e) => {
							h(p, t);
							e.stopPropagation();
						}
					: undefined,
		}),
	);
}
