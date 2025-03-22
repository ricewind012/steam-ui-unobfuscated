var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./44846.js");
var a = require("./95877.js");
var s = require("./47628.js");
var o = s;
var l = require("./25752.js");
var c = require(/*webcrack:missing*/ "./90765.js");
require(/*webcrack:missing*/ "./46108.js");
var m = require(/*webcrack:missing*/ "./72476.js");
export function p(e) {
	const { tagid: t, className: r } = e;
	const s = (0, a.MB)(t);
	if (!s) {
		return null;
	}
	const u = (0, i.ww)((0, i.sf)(m.TS.LANGUAGE));
	const d = `${m.TS.STORE_BASE_URL}tags/${u}/${s?.name}`;
	return n.createElement(
		l.q,
		{
			url: d,
			className: (0, c.A)(o.Tag, "WidgetTag", r),
		},
		s.name,
	);
}
