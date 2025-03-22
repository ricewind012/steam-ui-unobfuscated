var n = require("./80222.js");
var i = require(/*webcrack:missing*/ "./72476.js");
var a = require(/*webcrack:missing*/ "./28987.js");
var s = require("./64880.js");
export function rV(e, t) {
	e.Body().set_context(hS(t));
}
export function hS(e) {
	let t = new n.TS();
	if (!e) {
		t.set_country_code(i.TS.COUNTRY);
	}
	t.set_language(i.TS.LANGUAGE);
	if (i.TS.EREALM != a.TU.k_ESteamRealmUnknown) {
		t.set_steam_realm(i.TS.EREALM);
	}
	return t;
}
export function Bn(e, t) {
	e.Body().set_data_request(n.gn.fromObject(t));
}
export function hc(e, t) {
	e.Body().set_filters(s.M$.fromObject(t));
}
