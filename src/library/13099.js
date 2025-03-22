function r(e) {
	return e != null && e.focus !== undefined;
}
export function qf(e) {
	let t;
	if (e) {
		t = e.ownerDocument.defaultView;
	}
	return t;
}
export function _f(e, t) {
	let n = e?.parentElement;
	while (n) {
		if (r(n)) {
			if (!t || t == "x") {
				const e = window.getComputedStyle(n);
				if (
					e.overflowX == "scroll" ||
					e.overflowX == "auto" ||
					e.position == "fixed"
				) {
					break;
				}
			}
			if (!t || t == "y") {
				const e = window.getComputedStyle(n);
				if (
					e.overflowY == "scroll" ||
					e.overflowY == "auto" ||
					e.position == "fixed"
				) {
					break;
				}
			}
		}
		n = n.parentElement;
	}
	if (r(n)) {
		return n;
	} else {
		return null;
	}
}
export function aF(e, t) {
	if (!("ownerDocument" in e)) {
		return true;
	}
	const n = e.ownerDocument.defaultView.getComputedStyle(e);
	const r = t === "x" ? n.overflowX : n.overflowY;
	return r === "auto" || r === "scroll";
}
