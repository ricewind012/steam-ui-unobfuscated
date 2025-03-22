var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./50376.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require(/*webcrack:missing*/ "./31084.js");
var o = require("./15334.js");
var l = o;
var c = require("./19944.js");
var m = require(/*webcrack:missing*/ "./72476.js");
var u = require(/*webcrack:missing*/ "./98995.js");
export function w(e) {
	const {
		className: t,
		label: r,
		tooltip: o,
		noLeftPadding: d,
		showRule: A,
		renderContextMenu: p,
		...g
	} = e;
	const h = (0, m.Qn)();
	const C = (0, n.useRef)(undefined);
	let _ = (0, a.A)(l.SectionHeader, !d && l.PadLeft, t);
	const f = typeof o == "string" ? n.createElement(u.zQ, null, o) : o;
	return n.createElement(
		"div",
		{
			className: _,
			...g,
		},
		n.createElement(
			"div",
			{
				className: l.Label,
				onClick: () =>
					p &&
					(0, s.lX)(p(), C.current, {
						bOverlapHorizontal: true,
					}),
				ref: C,
			},
			typeof r == "string"
				? n.createElement(
						"div",
						{
							className: l.LabelText,
						},
						r,
					)
				: r,
			o &&
				!h &&
				n.createElement(c.m, {
					direction: "right",
					nBodyAlignment: 0,
					content: f,
				}),
			p &&
				n.createElement(
					"div",
					{
						className: l.Arrow,
					},
					n.createElement(i.GB9, null),
				),
		),
		A &&
			n.createElement("div", {
				className: l.SectionRule,
			}),
	);
}
