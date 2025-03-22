var n = require(/*webcrack:missing*/ "./44846.js");
var i = require(/*webcrack:missing*/ "./28987.js");
var a = require(/*webcrack:missing*/ "./46108.js");
export function P(e, t, r) {
	if (e == null || e == null) {
		e = t;
	}
	if (!r || r.length === 0) {
		return e;
	}
	for (const t of r) {
		if (a.A0.IsELanguageValidInRealm(e, t)) {
			return e;
		}
	}
	for (const e of r) {
		if (a.A0.IsELanguageValidInRealm(t, e)) {
			return t;
		}
	}
	if (r.includes(i.TU.k_ESteamRealmGlobal)) {
		return 0;
	} else {
		return 29;
	}
}
export function j(e, t = 0) {
	let r = e.lastIndexOf(".");
	if (r != -1) {
		e = e.slice(0, r).toLowerCase();
	}
	let i = null;
	let a = 0;
	if (e.endsWith("korean")) {
		i = 4;
		a = 6;
	}
	for (let t = 0; t < 31; ++t) {
		const r = (0, n.Lg)(t);
		if (!(r.length <= a)) {
			if (e.endsWith(r)) {
				i = t;
				a = r.length;
			}
		}
	}
	return i || t;
}
