import n from "./80222.js";
import i from "./72476.js";
import a from "./28987.js";
import s from "./64880.js";
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
