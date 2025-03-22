var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require("./26190.js");
var s = a;
var o = require(/*webcrack:missing*/ "./69164.js");
var l = require(/*webcrack:missing*/ "./61657.js");
function c(e) {
	return e.detail.button == l.pR.DIR_DOWN;
}
export function J(e, t, r) {
	const [a, l] = n.useState(false);
	return {
		onFocusWithinContainer: n.useCallback(
			(t) => {
				l(t);
				e(t);
			},
			[e],
		),
		fastScrollOverlay:
			a &&
			n.createElement(
				o.Z,
				{
					className: (0, i.A)(s.FastScrollOverlay, t && s.Visible),
					focusable: true,
					noFocusRing: true,
					navRef: r.current,
				},
				n.createElement(
					"div",
					{
						className: s.FastScrollOverlayText,
					},
					t,
				),
			),
		onGamepadDirectionGridContainer: c,
	};
}
