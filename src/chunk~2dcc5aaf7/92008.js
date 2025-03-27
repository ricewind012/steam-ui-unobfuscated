import { wm } from "./53807.js";
import i from "./43691.js";
export function E(e) {
	return `${i.TS.COMMUNITY_BASE_URL}linkfilter/?u=${encodeURIComponent(e)}`;
}
export function p(e, t) {
	if (e.startsWith("steam://")) {
		return false;
	}
	if (e.startsWith("/")) {
		return false;
	}
	const r = wm(e).toLowerCase();
	const a = wm(i.TS.COMMUNITY_BASE_URL).toLowerCase();
	const s = wm(i.TS.STORE_BASE_URL).toLowerCase();
	const o = wm(i.TS.HELP_BASE_URL).toLowerCase();
	const l = wm(i.TS.PARTNER_BASE_URL || "").toLowerCase();
	return (
		r !== a &&
		r !== s &&
		r !== o &&
		r !== "support.steampowered.com" &&
		r !== l &&
		r !== "www.dota2.com" &&
		(!t || t.filter((e) => r == e).length == 0)
	);
}
