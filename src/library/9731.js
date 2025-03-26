var r = require("./31958.js");
import {
	BCanAccessDocument,
	GetCookie,
	SetCookie,
} from "../../actual_src/utils/cookies.js";
var s = require("./43691.js");
const o = "webui_config";
let a;
export function KC() {
	if (!BCanAccessDocument()) {
		a ||= bf();
		return a;
	}
	let e = GetCookie("sessionid");
	e ||= bf();
	return e;
}
export function bf() {
	const e = (function () {
		let e = "";
		for (let t = 0; t < 24; t++) {
			e += (0, r.Tg)(0, 35).toString(36);
		}
		return e;
	})();
	SetCookie("sessionid", e, 0);
	return e;
}
export function Tc(e, t = o) {
	return d(e, t, true);
}
export function Fd(e, t = o) {
	return d(e, t, false);
}
function d(e, t = o, n) {
	let r;
	r =
		typeof t == "string"
			? {
					NODE_ENV: "production",
					STEAM_BUILD: "buildbot",
					BUILD_TIME_LOCAL: "Mar 11 2025 : 16:45:07",
					BUILD_TIME_UTC: "Mar 11 2025 : 23:45:07",
					BUILD_RTIME_UTC: 1741736707,
				}.MOBILE_BUILD
				? null
				: document.getElementById(t)
			: t;
	if (r) {
		try {
			if (r.hasAttribute("data-" + e)) {
				return JSON.parse(r.getAttribute("data-" + e));
			}
			return null;
		} catch (e) {
			console.error(
				"Failed to parse config for " +
					s.iA.steamid +
					" (" +
					window.location.href +
					")",
				e,
			);
		}
	} else if (n) {
		console.error("Missing config element #", t);
	}
}
const h = "presentation_mode";
export function Bu() {
	let e = null;
	if (BCanAccessDocument()) {
		e = GetCookie(h);
	}
	return Boolean(e && Number.parseInt(e) === 1);
}
