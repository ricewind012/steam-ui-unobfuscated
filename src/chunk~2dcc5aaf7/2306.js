var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./5640.js");
var s = require("./28934.js");
var o = require("./94692.js");
var l = o;
var c = require(/*webcrack:missing*/ "./90765.js");
var m = require(/*webcrack:missing*/ "./69164.js");
export const C = (0, n.forwardRef)(function (e, t) {
	const { feature: r, disabled: o, ...l } = e;
	const c = (0, a.l9)(r);
	const m = c !== 0;
	const u = (0, s.wT)();
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(i.y4, {
			ref: t,
			...l,
			onClick: m && !o ? () => u(c, r) : undefined,
			disabled: m || o,
		}),
	);
});
export function D(e) {
	const { feature: t, disabled: r, className: o, ...u } = e;
	const d = (0, a.l9)(t);
	const A = d !== 0;
	const p = (0, s.wT)();
	return n.createElement(
		i.J0,
		{
			...u,
			focusable: !A,
			className: (0, c.A)(l.ParentalButton, o, A && l.Blocked),
			disabled: A || r,
		},
		n.createElement(m.Z, {
			className: l.ParentalWrapper,
			onActivate: A && !r ? () => p(d, t) : undefined,
		}),
	);
}
