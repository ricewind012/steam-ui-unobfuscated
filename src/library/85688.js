export function w(e, t, ...n) {
	if (console.assert) {
		if (n.length == 0) {
			console.assert(!!e, t);
		} else {
			console.assert(!!e, t, ...n);
		}
	} else if (!e) {
		console.warn(t, ...n);
	}
}
export function z(e, t, ...n) {
	w(false, t, ...n);
}
