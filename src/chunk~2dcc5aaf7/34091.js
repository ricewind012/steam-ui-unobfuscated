export var V2;
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./16117.js");
var s = require("./83610.js");
var o = require(/*webcrack:missing*/ "./72476.js");
var l = require("./44184.js");
function c(e) {
	return {
		sizeStr: e == V2.full ? l.sizeFull : l.sizeThumb,
		alignStr: e == V2.full ? "" : e == V2.left ? l.floatLeft : l.floatRight,
	};
}
export function gH(e) {
	if ((0, o.Y2)()) {
		return null;
	}
	let t = (0, a.j$)(e.args);
	if (t) {
		let e = t.split(";");
		if (e.length == 2) {
			let t = e[0];
			let r = e[1].toLocaleLowerCase();
			const { sizeStr: n, alignStr: a } = c(r);
			return i.createElement(s.A, {
				videoID: t,
				classNameAlign: a,
				classNameSize: n,
				bShowVideoImmediately: true,
			});
		}
	}
	return i.createElement(i.Fragment, null);
}
export function Eo(e) {
	if ((0, o.Y2)() || o.TS.COUNTRY.toLocaleUpperCase() == "CN") {
		return (0, a.UT)(e);
	}
	const t = (0, a.j$)(e.args, "youtubeid");
	const r = (0, a.j$)(e.args, "size");
	const n = (0, a.j$)(e.args, "seconds");
	const { sizeStr: l, alignStr: m } = c(r);
	return i.createElement(s.A, {
		videoID: t,
		nStartSeconds: n ? Number.parseInt(n) : undefined,
		classNameAlign: m,
		classNameSize: l,
		bShowVideoImmediately: true,
	});
}
(function (e) {
	e.left = "leftthumb";
	e.right = "rightthumb";
	e.full = "full";
	e.summary = "summary";
})((V2 ||= {}));
