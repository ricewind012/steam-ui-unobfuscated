var r = require("./24546.js");
var i = require("./43691.js");
export function mJ() {
	return `${i.TS.CLAN_CDN_ASSET_URL}images/`;
}
export function v6(e) {
	return (e = e.replace(r.lw, mJ())).replace("http://", "https://");
}
export function TL(e) {
	return e.replace(/{STEAM_CLAN_IMAGE}/g, mJ());
}
