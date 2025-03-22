var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./21955.js");
var a = require("./64608.js");
var s = require(/*webcrack:missing*/ "./90765.js");
var o = require(/*webcrack:missing*/ "./52451.js");
var l = require(/*webcrack:missing*/ "./11010.js");
var c = require(/*webcrack:missing*/ "./41180.js");
export function z2(e) {
	const {
		nProgress: t,
		nTransitionSec: r = 1,
		margin: a = "none",
		indeterminate: o,
		color: l = "var(--gpColor-Blue, #1a9fff)",
		className: c,
		backgroundColor: m,
	} = e;
	const u = o && t == 0;
	const d = u
		? {}
		: {
				width: `${t}%`,
				transition: `${r}s ease`,
			};
	return n.createElement(
		"div",
		{
			className: (0, s.A)(
				i.ProgressBar,
				a == "standard" && i.StandardMargin,
				c,
			),
			style: {
				background: m,
			},
		},
		n.createElement("div", {
			key: `${u}`,
			className: (0, s.A)(i.Percent, u && i.Indeterminate),
			style: {
				...d,
				background: l,
			},
		}),
	);
}
function u(e) {
	const t = (function (e, t = c.Kp.PerDay * 2) {
		const [r, i] = n.useState(null);
		(0, o.$$)(
			() => {
				const r = (0, c._2)();
				const n = e - r;
				if (e == null || n > t || isNaN(n)) {
					i(null);
					return;
				}
				let a = n < 1 ? 1 : n;
				a = Math.floor(a);
				const s = (0, l.R2)(a);
				i(s);
			},
			500,
			[e, t],
		);
		return r;
	})(e.rtEstimatedCompletionTime);
	return n.createElement(
		"div",
		{
			className: i.TimeRemaining,
		},
		t,
	);
}
export function hA(e) {
	const {
		indeterminate: t,
		nTransitionSec: r,
		nProgress: s,
		childrenContainerWidth: o,
		margin: l,
		rtEstimatedCompletionTime: c,
		sOperationText: d,
		...A
	} = e;
	const p = !d && !c ? "standard" : "none";
	const g = c != null && c > 0;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			a.D0,
			{
				focusable: true,
				childrenContainerWidth: o || "fixed",
				...A,
			},
			n.createElement(
				"div",
				{
					className: i.ProgressBarFieldStatus,
				},
				n.createElement(
					"div",
					{
						className: i.TextContainer,
					},
					g
						? n.createElement(u, {
								rtEstimatedCompletionTime: c,
							})
						: n.createElement("div", null),
					n.createElement(
						"div",
						{
							className: i.OperationText,
						},
						d,
					),
				),
				n.createElement(z2, {
					margin: p,
					...e,
				}),
			),
		),
	);
}
