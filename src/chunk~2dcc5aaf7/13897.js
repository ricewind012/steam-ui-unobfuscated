var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./5640.js");
var s = require("./28934.js");
var o = require(/*webcrack:missing*/ "./69164.js");
export function B(e) {
	const { feature: t, disabled: r, ...o } = e;
	const l = (0, a.l9)(t);
	const c = l !== 0;
	const m = (0, s.wT)();
	return n.createElement(i.Vb, {
		disabled: c || r,
		onActivate: c && !r ? () => m(l, t) : undefined,
		...o,
	});
}
export function I(e) {
	const { feature: t, disabled: r, ...l } = e;
	const c = (0, a.l9)(t);
	const m = c !== 0;
	const u = (0, s.wT)();
	return n.createElement(
		o.Z,
		{
			onActivate: m && !r ? () => u(c, t) : undefined,
		},
		n.createElement(i.ZU, {
			disabled: m || r,
			...l,
		}),
	);
}
