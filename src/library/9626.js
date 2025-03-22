export function VY(e) {
	if (!kI() || !window.document.cookie) {
		return null;
	}
	const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
	if (t && t[2]) {
		return decodeURIComponent(t[2]);
	} else {
		return null;
	}
}
export function lc(e, t, n, r) {
	if (!kI()) {
		return;
	}
	r ||= "/";
	let i = "";
	if (n !== undefined && n) {
		const e = new Date();
		e.setTime(e.getTime() + n * 86400000);
		i = "; expires=" + e.toUTCString();
	}
	document.cookie =
		encodeURIComponent(e) + "=" + encodeURIComponent(t) + i + ";path=" + r;
}
export function kI() {
	return !!window.document;
}
