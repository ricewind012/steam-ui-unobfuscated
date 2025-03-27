import n from "./72476.js";
export const d = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
export function t(e, t) {
	let r = ".jpg";
	if (!e || e === "0000000000000000000000000000000000000000") {
		e = d;
	}
	if (e.length == 44) {
		r = e.substr(-4);
		e = e.substr(0, 40);
	}
	let a = n.TS.AVATAR_BASE_URL;
	if (!a) {
		a = `${n.TS.MEDIA_CDN_COMMUNITY_URL}images/avatars/`;
		a += `${e.substr(0, 2)}/`;
	}
	a += e;
	if (t && t != "small") {
		a += `_${t}`;
	}
	a += r;
	return a;
}
