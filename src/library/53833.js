export function fW(e, t = 0) {
	if (e?.length > 1) {
		let n = t > 0 ? Math.min(t, e.length) : e.length;
		while (n !== 0) {
			const t = Math.floor(Math.random() * n);
			n -= 1;
			const r = e[n];
			e[n] = e[t];
			e[t] = r;
		}
	}
}
export function yY(e, t, n) {
	if (!(t < 0) && !(n < 0)) {
		if (n >= e.length) {
			e[n] = undefined;
		}
		e.splice(n, 0, e.splice(t, 1)[0]);
	}
}
export function R5(e, t) {
	if (!e && !t) {
		return true;
	}
	if (!e || !t) {
		return false;
	}
	if (e.length != t.length) {
		return false;
	}
	for (let n = 0; n < e.length; n++) {
		if (e[n] !== t[n]) {
			return false;
		}
	}
	return true;
}
export function x9(e, t) {
	return Wp(e, (e) => t == e);
}
export function Wp(e, t) {
	const n = e.findIndex(t);
	return n >= 0 && (e.splice(n, 1), true);
}
export function $D(e, t) {
	return e.reduce((e, n, r, i) => e + (t(n, r, i) ? 1 : 0), 0);
}
export function il(e, t) {
	return e.filter((e) => t !== e);
}
export function rJ(e, t) {
	let n = 0;
	let r = e.length - 1;
	while (n <= r) {
		const i = Math.floor((n + r) / 2);
		const s = t(e[i]);
		if (s > 0) {
			n = i + 1;
		} else if (s < 0) {
			r = i - 1;
		} else {
			if (r == i) {
				return i;
			}
			if (i == n) {
				if (r > i && t(e[i + 1]) < 0) {
					return i;
				} else {
					return i + 1;
				}
			}
			n = i;
		}
	}
	return r;
}
export function Xr(e, t, n) {
	const r = rJ(e, (e) => n(t, e));
	e.splice(r + 1, 0, t);
}
export function hT(e, t) {
	let n = 0;
	let r = 0;
	while (n < e.length) {
		const i = e[n];
		if (t(i, n, e)) {
			e[r++] = i;
		}
		n++;
	}
	e.length = r;
	return e;
}
export function $Y(e, t, n) {
	if (!e) {
		console.error(
			"array should be defined for us to fill in the missing indexes",
		);
	}
	if (e.length < t) {
		return e.concat(Array(t - e.length).fill(n));
	} else {
		return e;
	}
}
export function Ew(e) {
	const t = new Set();
	e.forEach((e) => t.add(e));
	return Array.from(t);
}
