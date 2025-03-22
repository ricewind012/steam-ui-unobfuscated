var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./35488.js");
var a = require(/*webcrack:missing*/ "./98995.js");
var s = require(/*webcrack:missing*/ "./46108.js");
var o = require("./93452.js");
var l = o;
export function S(e) {
	const { deferred: t, label: r } = e;
	if (t) {
		return n.createElement(
			"span",
			{
				className: l.DeferredSettingLabel,
			},
			n.createElement(
				a.he,
				{
					toolTipContent: (0, s.we)("#Settings_Deferred_ToolTip"),
					direction: "top",
				},
				n.createElement(i.ExclamationPoint, {
					className: l.Icon,
				}),
			),
			r,
		);
	} else {
		return n.createElement(n.Fragment, null, r);
	}
}
