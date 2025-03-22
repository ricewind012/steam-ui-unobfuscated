var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require(/*webcrack:missing*/ "./90765.js");
var o = require("./44010.js");
var l = o;
export let p = class extends i.Component {
	static get hoverClass() {
		return l.hoverParent;
	}
	render() {
		const {
			persona: e,
			animating: t,
			className: r,
			size: n,
			dim: a,
			...o
		} = this.props;
		let c = "";
		if (n == "medium") {
			c = l.Medium;
		} else if (n == "large") {
			c = l.Large;
		}
		return i.createElement(
			"div",
			{
				className: (0, s.A)(
					l.SnoozeContainer,
					e.online_state,
					r,
					t && l.animating,
					c,
					a && l.Dim,
				),
				...o,
			},
			i.createElement(
				"div",
				{
					"data-text": "Z",
					className: (0, s.A)(l.SnoozeZ, l.Z1),
				},
				"Z",
			),
			i.createElement(
				"div",
				{
					"data-text": "Z",
					className: (0, s.A)(l.SnoozeZ, l.Z2),
				},
				"Z",
			),
			i.createElement(
				"div",
				{
					"data-text": "Z",
					className: (0, s.A)(l.SnoozeZ, l.Z3),
				},
				"Z",
			),
		);
	}
};
p = (0, n.Cg)([a.PA], p);
