var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require("./14556.js");
export function z({ nPercent: e, indeterminate: t, animate: r, className: s }) {
	return n.createElement("div", {
		className: (0, i.A)(
			a.ProgressBar,
			r && a.AnimateProgress,
			t && a.Indeterminate,
			s,
		),
		style: {
			"--percent": e / 100,
		},
	});
}
export const A = ({ nPercent: e, size: t = 120, strokeWidth: r = 20 }) => {
	const s = (t - r) / 2;
	const o = Math.PI * 2 * s;
	const l = o - (e / 100) * o;
	const c = e == 100;
	return n.createElement(
		"div",
		{
			className: (0, i.A)({
				[a.Circular]: true,
				[a.Full]: c,
			}),
		},
		n.createElement(
			"svg",
			{
				width: t,
				height: t,
				style: {
					transform: "rotate(-90deg)",
				},
			},
			n.createElement("circle", {
				cx: t / 2,
				cy: t / 2,
				r: s,
				stroke: "#0c131d",
				strokeWidth: r,
				fill: "none",
			}),
			n.createElement("circle", {
				cx: t / 2,
				cy: t / 2,
				r: s,
				stroke: "#1a9fff",
				strokeWidth: r,
				fill: "none",
				strokeDasharray: o,
				strokeDashoffset: l,
				style: {
					transition: "stroke-dashoffset 0.3s ease-in-out",
				},
			}),
		),
	);
};
