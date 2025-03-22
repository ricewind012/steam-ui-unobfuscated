export function oh(e) {
	return {
		appid: e,
	};
}
export function n2(e) {
	return {
		shortcut: rT(e),
	};
}
export function $U(e, t) {
	if ("appid" in e) {
		return "appid" in t && e.appid == t.appid;
	} else {
		return "shortcut" in t && e.shortcut == t.shortcut;
	}
}
export function rT(e) {
	return e.trim();
}
export function NL(e) {
	if (e.appid) {
		return {
			appid: e.appid,
		};
	} else {
		return {
			shortcut: e.shortcut_name,
		};
	}
}
