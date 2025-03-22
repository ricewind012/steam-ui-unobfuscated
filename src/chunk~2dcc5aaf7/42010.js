var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./65104.js");
var a = require("./83247.js");
var s = require(/*webcrack:missing*/ "./90765.js");
export function y(e) {
	let { type: t, heading: r, body: o, rightColumn: l } = e;
	let c = null;
	c =
		t == "info"
			? n.createElement(a.R2, {
					className: i.Icon,
				})
			: n.createElement(a.eT, {
					className: i.Icon,
				});
	let m = (0, s.A)(
		i.WarningBox,
		t == "info" && i.Info,
		t == "warning" && i.Warning,
		t == "error" && i.Error,
	);
	return n.createElement(
		"div",
		{
			className: m,
		},
		c,
		n.createElement(
			"div",
			{
				className: i.Explainer,
			},
			n.createElement(
				"div",
				{
					className: i.Heading,
				},
				r,
			),
			n.createElement(
				"div",
				{
					className: i.Body,
				},
				o,
			),
		),
		l,
	);
}
