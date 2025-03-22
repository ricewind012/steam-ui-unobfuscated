var n = require(/*webcrack:missing*/ "./63696.js");
const i = (0, n.createContext)(null);
export function hL(e) {
	const { spacing: t, children: r } = e;
	return n.createElement(
		i.Provider,
		{
			value: l(t),
		},
		r,
	);
}
export function VJ(e) {
	const t = o();
	return n.createElement(
		"div",
		{
			style: c(t),
		},
		n.createElement(
			i.Provider,
			{
				value: null,
			},
			e.children,
		),
	);
}
function o() {
	return (0, n.useContext)(i);
}
function l(e) {
	return {
		top: e.vertical || e.top || 0,
		bottom: e.vertical || e.bottom || 0,
		left: e.horizontal || e.left || 0,
		right: e.horizontal || e.right || 0,
	};
}
function c(e) {
	if (!e) {
		return;
	}
	const { top: t, bottom: r, left: n, right: i } = e;
	const a = {};
	if (t) {
		a.marginTop = `-${t}px`;
	}
	if (r) {
		a.marginBottom = `-${r}px`;
	}
	if (n) {
		a.marginLeft = `-${n}px`;
	}
	if (i) {
		a.marginRight = `-${i}px`;
	}
	return a;
}
export function S1() {
	const e = o();
	if (!e) {
		return;
	}
	const t = `${e.top}px ${e.right}px ${e.bottom}px ${e.left}px`;
	return {
		padding: t,
		scrollPadding: t,
	};
}
