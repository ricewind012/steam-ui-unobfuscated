var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./78325.js");
const a = n.createContext(null);
function s(e) {
	const { top: t, right: r, bottom: s, left: o, children: l } = e;
	const c = n.useContext(a);
	if (c) {
		const e = {
			position: "absolute",
			top: t,
			right: r,
			bottom: s,
			left: o,
			pointerEvents: "none",
		};
		return i.createPortal(
			n.createElement(
				"div",
				{
					style: e,
				},
				l,
			),
			c,
		);
	}
	return n.createElement(
		"div",
		{
			style: {
				position: "fixed",
				top: t,
				right: r,
				bottom: s,
				left: o,
			},
		},
		l,
	);
}
export function f(e) {
	return n.createElement(
		s,
		{
			right: 0,
			bottom: 0,
			left: 0,
		},
		e.children,
	);
}
export function W(e) {
	const { children: t, style: r, ...i } = e;
	const [s, o] = n.useState();
	return n.createElement(
		"div",
		{
			...i,
			style: {
				...r,
				position: "relative",
			},
			ref: o,
		},
		n.createElement(
			a.Provider,
			{
				value: s,
			},
			t,
		),
	);
}
