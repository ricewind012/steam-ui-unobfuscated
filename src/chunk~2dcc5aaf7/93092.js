var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./91720.js");
export function d(e) {
	let { clipID: t, clipSummary: r, className: i } = e;
	if (r) {
		return n.createElement(o, {
			clipSummary: r,
			className: i,
		});
	} else if (t) {
		return n.createElement(s, {
			clipID: t,
			className: i,
		});
	} else {
		return null;
	}
}
function s(e) {
	let { clipID: t, className: r } = e;
	const a = (0, i.uX)(t);
	return n.createElement(o, {
		clipSummary: a,
		className: r,
	});
}
function o(e) {
	let { clipSummary: t, className: r } = e;
	if (t?.thumbnail_url) {
		return n.createElement("img", {
			className: r,
			src: t.thumbnail_url,
		});
	} else {
		return n.createElement("div", {
			className: r,
		});
	}
}
