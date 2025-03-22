var n = require(/*webcrack:missing*/ "./28869.js");
var i = require(/*webcrack:missing*/ "./69164.js");
var a = require("./45967.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require("./53379.js");
var l = require(/*webcrack:missing*/ "./63696.js");
var c = require(/*webcrack:missing*/ "./90242.js");
export const el = (0, l.createContext)(null);
const u = () => (0, l.useContext)(el);
export function Bi(e) {
	return l.createElement(
		i.r,
		{
			Component: A,
		},
		l.createElement(
			c.lv,
			{
				Component: p,
			},
			e.children,
		),
	);
}
function A(e) {
	const { node: t, divRef: r, ...i } = e;
	const c = u();
	const m = (0, a.HJ)(
		2,
		() => t?.GetFocusable() == "self" || i.onClick != null,
	);
	const d = (0, a.HJ)(1, () => c?.HasContextMenu(t));
	const A = (0, o.j)(i);
	(0, o.l)(i);
	if (c) {
		i.onContextMenu = (r) => {
			if (!c.OnContextMenu(t, r)) {
				e.onContextMenu?.(r);
			}
		};
	}
	const p = (0, s.Ue)(m, d, A, r);
	return l.createElement(n.D0, {
		...i,
		divRef: p,
		node: t,
	});
}
function p(e) {
	const { Component: t, node: r, divRef: n, ...i } = e;
	const c = (0, a.HJ)(
		2,
		() => r?.GetFocusable() == "self" || i.onClick != null,
	);
	const m = (0, o.j)(i);
	(0, o.l)(i);
	const u = (0, s.Ue)(c, m, n);
	return l.createElement(t, {
		...i,
		node: r,
		divRef: u,
	});
}
