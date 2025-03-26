var r = require("./72476.js");
import("../../actual_src/utils/localization.js");
var i = require("./36885.js");
export function wm(e) {
	if (e === undefined) {
		console.error("Cannot GetHostname on empty URL");
		return "";
	}
	let t = new RegExp(
		"^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
		"im",
	);
	let n = e.match(t);
	if (n && n.length > 5) {
		return n[6].toString();
	} else {
		return e;
	}
}
export function Qz(e) {
	let t = wm(e);
	if (t.startsWith("www.")) {
		t = t.slice(4);
	}
	return t;
}
export function IT(e) {
	let t = document.createElement("a");
	t.href = e;
	if (t.hostname.indexOf("xn--") >= 0) {
		return t.href;
	} else {
		return e;
	}
}
export function L$(e) {
	if (e) {
		if (r.TS.EUNIVERSE == 1) {
			if (e.substring(0, 5) == "http:") {
				e = "https:" + e.substring(5);
			}
			e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
				e.replace(
					/https:\/\/media.steampowered.com\//g,
					r.TS.MEDIA_CDN_URL,
				)).replace(
				/https:\/\/cdn.akamai.steamstatic.com\//g,
				r.TS.MEDIA_CDN_URL,
			)).replace(
				/https:\/\/cdn.cloudflare.steamstatic.com\//g,
				r.TS.MEDIA_CDN_URL,
			)).replace(
				/https:\/\/cdn.edgecast.steamstatic.com\//g,
				r.TS.MEDIA_CDN_URL,
			)).replace(
				/https:\/\/cdn.fastly.steamstatic.com\//g,
				r.TS.MEDIA_CDN_URL,
			)).replace(/https:\/\/cdn.dota2.com\//g, r.TS.MEDIA_CDN_URL)).replace(
				/https:\/\/storefront.steampowered.com\/v\/gfx\//g,
				r.TS.MEDIA_CDN_URL + "steam/",
			)).replace(
				/https:\/\/clan.akamai.steamstatic.com\//g,
				r.TS.CLAN_CDN_ASSET_URL,
			)).replace(
				/https:\/\/clan.cloudflare.steamstatic.com\//g,
				r.TS.CLAN_CDN_ASSET_URL,
			)).replace(
				/https:\/\/clan.fastly.steamstatic.com\//g,
				r.TS.CLAN_CDN_ASSET_URL,
			)).replace(
				/https:\/\/cdn.steamcommunity.com\//g,
				r.TS.COMMUNITY_CDN_URL,
			)).replace(
				/https:\/\/community.akamai.steamstatic.com\//g,
				r.TS.COMMUNITY_CDN_URL,
			)).replace(
				/https:\/\/community.cloudflare.steamstatic.com\//g,
				r.TS.COMMUNITY_CDN_URL,
			)).replace(
				/https:\/\/community.edgecast.steamstatic.com\//g,
				r.TS.COMMUNITY_CDN_URL,
			);
		}
		e = (e = (e = (e = e.replace(/{IMG_URL}/g, r.TS.IMG_URL)).replace(
			/{MEDIA_CDN_URL}/g,
			r.TS.MEDIA_CDN_URL,
		)).replace(
			/{MEDIA_CDN_COMMUNITY_URL}/g,
			r.TS.MEDIA_CDN_COMMUNITY_URL,
		)).replace(/{COMMUNITY_CDN_URL}/g, r.TS.COMMUNITY_CDN_URL);
		return (e = (0, i.TL)(e));
	} else {
		return e;
	}
}
export function ZF(e) {
	if (!e) {
		return true;
	}
	const t = wm(e).toLocaleLowerCase();
	return (
		[
			wm(r.TS.COMMUNITY_CDN_URL).toLocaleLowerCase(),
			wm(r.TS.MEDIA_CDN_URL).toLocaleLowerCase(),
			wm(r.TS.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
			wm(r.TS.STORE_CDN_URL).toLocaleLowerCase(),
			wm(r.TS.BASE_URL_SHARED_CDN).toLocaleLowerCase(),
			wm(r.TS.CLAN_CDN_ASSET_URL).toLocaleLowerCase(),
			wm(r.TS.VIDEO_CDN_URL).toLocaleLowerCase(),
			"support.steampowered.com",
			"steamcdn-a.akamaihd.net",
			"cdn.cloudflare.steamstatic.com",
			"cdn.fastly.steamstatic.com",
			"cdn.akamai.steamstatic.com",
		].indexOf(t) >= 0
	);
}
export function k2(e) {
	if (
		r.TS.SNR &&
		r.TS.SNR.length > 0 &&
		e &&
		e.toLocaleLowerCase().indexOf("snr=") == -1
	) {
		return e + (e.indexOf("?") >= 0 ? "&" : "?") + "snr=" + r.TS.SNR;
	} else {
		return e;
	}
}
export function Ps(e, t) {
	try {
		const n = new URL(t);
		const r = new URL(e);
		return n.href.replace(/\/$/, "") + r.pathname + r.search + r.hash;
	} catch (e) {
		return "";
	}
}
export function NT(e) {
	if (r.TS.IN_STEAMUI && !e.startsWith("steam://")) {
		e = `steam://openurl/${e}`;
	}
	return e;
}
export function Ln(e) {
	return e == "steam://close" || e == "steam://close/";
}
