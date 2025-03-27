let r = false;
let i = false;
let s = false;
let o = false;
let a = false;
let c = false;
export function ho() {
	if (!r) {
		g();
	}
	return i || s;
}
export function Ae() {
	if (!r) {
		g();
	}
	return c;
}
export function $W() {
	return Ae() || (r || g(), a);
}
export function MP() {
	if (!ho()) {
		return 0;
	}
	if (typeof navigator != "undefined" && navigator.userAgent) {
		let e = navigator.userAgent.match(
			/Valve Steam [^\/]*\/(?:[^/]*\/)?([0-9]+)/,
		);
		if (e && e.length == 2) {
			return Number.parseInt(e[1]);
		}
	}
	return 0;
}
export function OO() {
	if (!navigator?.userAgent) {
		return;
	}
	const e = navigator.userAgent.match(/Valve Steam ([^\/]*)\//);
	if (e && e.length == 2) {
		return e[1];
	} else {
		return undefined;
	}
}
function p(e, t) {
	return (
		!!window.location.href.match(`[?&]${t}=`) ||
		(typeof navigator != "undefined" &&
			!!navigator.userAgent &&
			navigator.userAgent.toLowerCase().includes(e.toLowerCase()))
	);
}
function g() {
	o = p("Valve Steam Tenfoot", "force_tenfoot_client_view");
	s = p("Valve Steam GameOverlay", "force_overlay_view");
	i = o || p("Valve Steam Client", "force_client_view");
	c =
		p("iphone", "force_ios_view") ||
		p("ipad", "force_ios_view") ||
		p("ipad", "force_ios_view") ||
		p("ipod", "force_ios_view") ||
		(p("macintosh", "force_ios_view") && p("safari", "force_ios_view"));
	a = p("android", "force_android_view");
	r = true;
}
