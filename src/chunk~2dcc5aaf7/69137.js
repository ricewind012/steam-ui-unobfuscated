var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./92008.js");
var a = require(/*webcrack:missing*/ "./45328.js");
var s = require(/*webcrack:missing*/ "./98995.js");
var o = require(/*webcrack:missing*/ "./53807.js");
var l = require(/*webcrack:missing*/ "./72476.js");
function c(e, t) {
	return (0, i.p)(
		e,
		(function (e) {
			return [
				e?.jsondata?.read_more_link
					? (0, o.wm)(e.jsondata.read_more_link).toLocaleLowerCase()
					: undefined,
			];
		})(t),
	);
}
export function tB(e, t) {
	return (e = c(e, t)
		? (l.TS.IN_CLIENT ? "steam://openurl_external/" : "") + (0, i.E)(e)
		: (0, o.NT)(e));
}
export function Pm(e, t, r) {
	let i = e;
	if (!i.toLowerCase().startsWith("http")) {
		i = "http://" + i;
	}
	return n.createElement(
		d$,
		{
			url: i,
			event: t,
		},
		r || e,
	);
}
export const d$ = (e) => {
	const { url: t, event: r, className: l } = e;
	let c;
	let u = (0, a.OZ)(t);
	u = tB(u, r);
	if ((0, i.p)(u)) {
		c = "noopener nofollow";
	}
	const d =
		typeof e.children == "string" &&
		e.children.length > 0 &&
		t &&
		!t.startsWith("steam://")
			? (0, o.Qz)(t)
			: undefined;
	return n.createElement(
		s.Gq,
		{
			toolTipContent: d,
			direction: "top",
		},
		n.createElement(
			"a",
			{
				className: l,
				href: u,
				rel: c,
				id: e.id,
			},
			e.children,
		),
	);
};
