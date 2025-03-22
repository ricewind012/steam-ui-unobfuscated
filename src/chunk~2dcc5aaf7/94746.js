var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./69164.js");
var a = require("./35488.js");
var s = require(/*webcrack:missing*/ "./46108.js");
var o = require("./8340.js");
export function I(e) {
	return n.createElement(
		i.Z,
		{
			className: o.NoNetwork,
			focusable: e.focusable,
		},
		n.createElement(
			"div",
			{
				className: o.Message,
			},
			(0, s.we)("#NetworkConnectionRequiredToLoad"),
		),
		n.createElement(a.Globe, {
			className: o.Globe,
		}),
	);
}
