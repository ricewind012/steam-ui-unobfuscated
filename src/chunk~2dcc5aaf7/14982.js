var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require("./9874.js");
export function kP(e) {
	const { radius: t = 10, ...r } = e;
	return n.createElement(r9, {
		radius: t,
		hollowRadius: 0,
		...r,
	});
}
export function r9(e) {
	const {
		radius: t = 5,
		hollowRadius: r = 10,
		className: s,
		bobberMagnitude: o,
		pulseMagnitude: l,
	} = e;
	const c = {
		width: t * 2 + r * 2 + "px",
		height: t * 2 + r * 2 + "px",
	};
	const m = {
		padding: `${r}px`,
		borderWidth: `${t}px`,
	};
	const u = {
		...m,
		"--bobber-magnitude": o,
	};
	const d = l && typeof l == "object" ? l.x : l;
	const A = l && typeof l == "object" ? l.y : l;
	const p = {
		...m,
		"--pulse-magnitude-x": d,
		"--pulse-magnitude-y": A,
	};
	return n.createElement(
		"div",
		{
			className: (0, i.A)(a.AnimatedCallout, s),
			style: c,
		},
		n.createElement("div", {
			className: a.Bob,
			style: u,
		}),
		n.createElement("div", {
			className: a.Pulse,
			style: p,
		}),
	);
}
export function kg(e) {
	const { children: t, className: r } = e;
	return n.createElement(
		"div",
		{
			className: (0, i.A)(a.CalloutMessage, r),
		},
		n.createElement("div", {
			className: a.Wiggle,
		}),
		n.createElement("div", {
			className: (0, i.A)(a.Wiggle, a.Pulse),
		}),
		t,
	);
}
