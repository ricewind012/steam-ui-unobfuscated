var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90242.js");
var a = require(/*webcrack:missing*/ "./84252.js");
var s = require("./73375.js");
export const p = "data:text/html,%3Cbody%3E%3C%2Fbody%3E";
export function c(e) {
	let t = e.browser;
	const r = n.useRef();
	(0, i.O7)(r, e.visible);
	(function (e, t, r) {
		r = !!r;
		n.useEffect(() => {
			if (r && !t) {
				e.LoadURL(p);
			}
		}, [t, e, r]);
	})(t, e.visible, e.clearWhenInvisble);
	(function (e) {
		n.useEffect(() => () => e.SetVisible(false), [e]);
	})(t);
	const l = (0, s.Fx)(t, 1);
	let c = n.useCallback(() => {
		t.SetFocus(true);
		l();
	}, [t, l]);
	let m = n.useCallback(() => {
		t.SetFocus(false);
	}, [t]);
	let u = {
		position: "relative",
	};
	if (!e.visible) {
		u.display = "none";
	}
	return n.createElement(
		a.B2,
		{
			style: u,
			className: e.className,
			navID: e.navID,
			navTreeRef: r,
			onActivated: c,
			onDeactivated: m,
		},
		n.createElement(s.m4, {
			style: {
				position: "absolute",
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			},
			browser: t,
			visible: e.visible,
		}),
	);
}
