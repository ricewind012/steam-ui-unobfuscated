var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./5640.js");
var s = require("./28934.js");
export function V(e) {
	const { feature: t, disabled: r, ...o } = e;
	const l = (0, a.l9)(t);
	const c = l !== 0;
	const m = (0, s.wT)();
	return n.createElement(i.d3, {
		onActivate: c && !r ? () => m(l, t) : undefined,
		...o,
		disabled: c || r,
	});
}
export function k(e) {
	const { feature: t, disabled: r, ...o } = e;
	const l = (0, a.l9)(t);
	const c = l !== 0;
	const m = (0, s.wT)();
	return n.createElement(i.gz, {
		onActivate: c && !r ? () => m(l, t) : undefined,
		...o,
		disabled: c || r,
	});
}
