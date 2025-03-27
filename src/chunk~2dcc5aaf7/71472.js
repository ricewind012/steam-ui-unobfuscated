import { CLocalizationManager } from "../../actual_src/utils/localization.js";
import { Lg } from "./44846.js";
import i from "./28987.js";
export function P(e, t, r) {
	if (e == null || e == null) {
		e = t;
	}
	if (!r || r.length === 0) {
		return e;
	}
	for (const t of r) {
		if (CLocalizationManager.IsELanguageValidInRealm(e, t)) {
			return e;
		}
	}
	for (const e of r) {
		if (CLocalizationManager.IsELanguageValidInRealm(t, e)) {
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
		const r = Lg(t);
		if (!(r.length <= a)) {
			if (e.endsWith(r)) {
				i = t;
				a = r.length;
			}
		}
	}
	return i || t;
}
