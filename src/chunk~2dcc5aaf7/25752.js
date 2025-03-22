var n = require(/*webcrack:missing*/ "./90242.js");
var i = require(/*webcrack:missing*/ "./92059.js");
var a = require(/*webcrack:missing*/ "./63696.js");
require("./86455.js");
require(/*webcrack:missing*/ "./46108.js");
var s = require(/*webcrack:missing*/ "./53807.js");
var o = require(/*webcrack:missing*/ "./72476.js");
export function q(e) {
	const {
		className: t,
		url: r,
		style: l,
		children: c,
		bSkipForcingStoreLink: m,
	} = e;
	const u = m ? r : (0, s.Ps)(r, o.TS.STORE_BASE_URL);
	const d = (0, i.aL)(u);
	if (d) {
		return a.createElement(
			n.Ii,
			{
				href: d,
				target: o.TS.IN_CLIENT ? undefined : "_blank",
				className: t,
				style: l,
			},
			c,
		);
	} else {
		return a.createElement(
			"span",
			{
				style: l,
				className: t,
			},
			c,
		);
	}
}
