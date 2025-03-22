export function kd(e, t) {
	if (e < t) {
		return -1;
	} else if (e > t) {
		return 1;
	} else {
		return 0;
	}
}
export function lY(e, t) {
	return kd(e.toLocaleLowerCase(), t.toLocaleLowerCase());
}
export function Fw(e, t) {
	const r = s(e.charCodeAt(0));
	if (r != s(t.charCodeAt(0))) {
		if (r) {
			return -1;
		} else {
			return 1;
		}
	} else {
		return kd(e.toLocaleLowerCase(), t.toLocaleLowerCase());
	}
}
function s(e) {
	return (
		(e >= 55356 && e <= 57343) ||
		(e >= 8205 && e <= 11093) ||
		e == 12953 ||
		e == 12349 ||
		e == 12336 ||
		e == 65039 ||
		e == 12951 ||
		e == 169 ||
		(e >= 48 && e <= 57) ||
		e == 35 ||
		e == 42 ||
		e == 10 ||
		e == 174
	);
}
export function tV(e) {
	let t = false;
	let r = false;
	let n = true;
	for (let i = 0; i < e.length; i++) {
		let a = e.charCodeAt(i);
		if ((n && a >= 48 && a <= 57) || a == 35 || a == 42 || a == 10) {
			r = true;
		} else if (s(a)) {
			r = true;
			n = false;
		}
		if (r && i == 0) {
			t = true;
			r = false;
		} else if (r && t) {
			t = true;
			r = false;
		} else if (!r) {
			t = false;
			return false;
		}
		if (i > 20) {
			return false;
		}
	}
	return !n && t;
}
function l(e) {
	let t = e.charCodeAt(0);
	return t >= 65 && t <= 90;
}
export function g(e) {
	if (e.length <= 2) {
		return e;
	}
	let t = e.charAt(1);
	let r = l(t);
	for (let n = 2; n < e.length; n++) {
		let i = e.charAt(n);
		if (r || !l(i)) {
			if (i == " ") {
				i = e.charAt(n + 1);
				if (i.length > 0) {
					t = i;
				}
				break;
			}
		} else {
			r = true;
			t = i;
		}
	}
	return e.charAt(0) + t;
}
export function EK(e) {
	if (!e) {
		return "";
	}
	if (DOMParser) {
		return new DOMParser().parseFromString(e, "text/html").documentElement
			.textContent;
	}
	return e;
}
export function aX(e, t = "") {
	return e.replace(/\bhttps?:\/\/\S+/gi, t);
}
export function bC(e, t, r = true) {
	let n = e.trim();
	n = n.replace(r ? /\s+/g : /[ \t]+/g, " ");
	if (n.length > t) {
		n = n.substring(0, t);
		let e = n.replace(/^(.*([.!?])) .*$/, "$1");
		let i = e.length;
		if (i < t * 0.6 || i == t) {
			e = n.replace(/ [^ ]*$/, "...");
		}
		n = r ? e.replace(/(\r\n|\n|\r)/gm, "") : e;
	}
	return n;
}
export function aQ(e) {
	if (e.startsWith("[emoticon")) {
		let t = e.match(/^(?:\[emoticon\][^\[]+\[\/emoticon\]\s*)+$/);
		if (t && t.length) {
			let t = e.match(/\[emoticon\][^\[]+\[\/emoticon\]/g);
			return t && t.length <= 6;
		}
	}
	return false;
}
export function Yz(e) {
	let t;
	let r;
	let n = 0;
	if (e.length === 0) {
		return n;
	}
	for (t = 0; t < e.length; t++) {
		r = e.charCodeAt(t);
		n = (n << 5) - n + r;
		n |= 0;
	}
	return n;
}
export function Xw(e) {
	if (e.length <= 1) {
		return e.toUpperCase();
	} else {
		return e.charAt(0).toUpperCase() + e.slice(1);
	}
}
export function tC(e, t) {
	let r = e.lastIndexOf(t);
	if (r == -1) {
		return "";
	} else {
		return e.substr(r + t.length);
	}
}
export function he(e) {
	return atob(e.replace(/-/g, "+").replace(/_/g, "/"));
}
export function bt(e) {
	return btoa(e).replace(/\+/g, "-").replace("///g", "_").replace(/=/g, "");
}
