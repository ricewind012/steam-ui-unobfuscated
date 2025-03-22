export function Tg(e, t) {
	e = Math.ceil(e);
	t = Math.floor(t);
	return Math.floor(Math.random() * (t - e + 1)) + e;
}
export function OQ(e, t, n) {
	if (e == null || isNaN(e)) {
		return e;
	} else {
		return Math.max(t, Math.min(n, e));
	}
}
export function LA(e, t, n) {
	return e != null && !isNaN(e) && e >= t && e <= n;
}
export function W(e, t) {
	return e != null && !isNaN(e) && t != null && e >= 0 && e < t.length;
}
export function Fu(e, t, n, r, i) {
	return r + ((i - r) * (e - t)) / (n - t);
}
export function bT(e, t, n, r, s) {
	return OQ(r + ((s - r) * (e - t)) / (n - t), Math.min(r, s), Math.max(r, s));
}
