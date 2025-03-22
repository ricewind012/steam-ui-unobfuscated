var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require("./33788.js");
var s = require("./39940.js");
var o = require(/*webcrack:missing*/ "./29285.js");
var l = require("./46422.js");
export const j = (e) => {
	const { size: t = "medium", background: r } = e;
	const c = e.showFooter ?? false;
	const m = !(0, o.q)();
	(0, l.LC)(!c);
	let u = t == "small" ? a.Small : a.Medium;
	const { className: d, children: A } = e;
	return n.createElement(
		"div",
		{
			className: (0, i.A)(
				d,
				a.Container,
				r !== "transparent" && a.ContainerBackground,
				false,
			),
		},
		n.createElement(
			"div",
			{
				className: a.SpinnerLoaderContainer,
			},
			!e.doneLoading &&
				m &&
				n.createElement("img", {
					alt: "Steam Spinner",
					className: u,
					src: s.A,
				}),
			n.createElement(
				"div",
				{
					className: a.LoadingStatus,
				},
				A,
			),
		),
	);
};
