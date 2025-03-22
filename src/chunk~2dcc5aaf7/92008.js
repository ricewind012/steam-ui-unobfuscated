var n = require(/*webcrack:missing*/ "./53807.js");
var i = require(/*webcrack:missing*/ "./43691.js");
export function E(e) {
	return i.TS.COMMUNITY_BASE_URL + "linkfilter/?u=" + encodeURIComponent(e);
}
export function p(e, t) {
	if (e.startsWith("steam://")) {
		return false;
	}
	if (e.startsWith("/")) {
		return false;
	}
	const r = (0, n.wm)(e).toLowerCase();
	const a = (0, n.wm)(i.TS.COMMUNITY_BASE_URL).toLowerCase();
	const s = (0, n.wm)(i.TS.STORE_BASE_URL).toLowerCase();
	const o = (0, n.wm)(i.TS.HELP_BASE_URL).toLowerCase();
	const l = (0, n.wm)(i.TS.PARTNER_BASE_URL || "").toLowerCase();
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
