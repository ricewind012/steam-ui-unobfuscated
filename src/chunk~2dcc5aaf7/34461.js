var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./46263.js");
var a = require(/*webcrack:missing*/ "./78325.js");
var s = require(/*webcrack:missing*/ "./11131.js");
export function _D(e) {
	const { position: t, onAnimationEnd: r, children: o } = e;
	const { ownerWindow: l } = (0, s.R7)();
	if (!t || !o) {
		return null;
	}
	const c = {
		top: t.y,
		left: t.x,
	};
	return (0, a.createPortal)(
		n.createElement(
			"div",
			{
				key: Date.now(),
				className: i.FloatingConfirmation,
				style: c,
				onAnimationEnd: (e) => {
					if (e.animationName === i.FloatingConfirmationAnimation && r) {
						r(e);
					}
				},
			},
			o,
		),
		l.document.body,
	);
}
export function NR() {
	const [e, t] = (0, n.useState)();
	return {
		onConfirm: (0, n.useCallback)((e) => {
			t(
				(t) =>
					t || {
						x: e.clientX,
						y: e.clientY,
					},
			);
		}, []),
		confirmationProps: {
			position: e,
			onAnimationEnd: (0, n.useCallback)(() => t(undefined), []),
		},
	};
}
const c = n.createContext(function (e, t) {
	throw new Error(
		"Somebody is using useShowFloatingConfirmation outside of a <FloatingConfirmationProvider>",
	);
});
export function Zz(e) {
	const { children: t, showConfirmationOverride: r } = e;
	const { onConfirm: i, confirmationProps: a } = NR();
	const [s, m] = n.useState();
	return n.createElement(
		c.Provider,
		{
			value:
				r ||
				((e, t) => {
					m(t);
					i(e);
				}),
		},
		!r &&
			n.createElement(
				_D,
				{
					...a,
					onAnimationEnd: () => {
						m(undefined);
					},
				},
				s,
			),
		t,
	);
}
export function yZ() {
	return n.useContext(c);
}
