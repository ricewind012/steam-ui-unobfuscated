export function jo(e) {
	if (
		typeof e == "string" &&
		(e.startsWith("#") && (e = e.substring(1)),
		e.length == 6 && (e += "FF"),
		e.match(/^[0-9a-fA-F]{8}$/))
	) {
		return {
			r: parseInt(e.substring(0, 2), 16),
			g: parseInt(e.substring(2, 4), 16),
			b: parseInt(e.substring(4, 6), 16),
			a: parseInt(e.substring(6, 8), 16) / 255,
		};
	}
}
export function VK(e) {
	if (e == null) {
		return;
	}
	const t = (e) => Math.round(e).toString(16).padStart(2, "0");
	let r = "#";
	r += t(e.r);
	r += t(e.g);
	r += t(e.b);
	if (e.a != 1) {
		r += t(e.a * 255);
	}
	return r;
}
export function ie(e) {
	if (e == null) {
		return;
	}
	const t = {
		r: e.r / 255,
		g: e.g / 255,
		b: e.b / 255,
	};
	const r = Math.min(t.r, t.g, t.b);
	const n = Math.max(t.r, t.g, t.b);
	const i = n - r;
	const a = (r + n) / 2;
	let s;
	let o;
	s = i == 0 ? 0 : i / (1 - Math.abs(a * 2 - 1));
	if (i == 0) {
		o = 0;
	} else if (n == t.r) {
		o = ((t.g - t.b) / i) % 6;
	} else if (n == t.g) {
		o = 2 + (t.b - t.r) / i;
	} else if (n == t.b) {
		o = 4 + (t.r - t.g) / i;
	}
	o *= 60;
	if (o < 0) {
		o += 360;
	}
	return {
		h: o,
		s,
		l: a,
		a: e.a,
	};
}
export function e6(e) {
	if (e == null) {
		return;
	}
	if (e.s == 0) {
		return {
			r: e.l * 255,
			g: e.l * 255,
			b: e.l * 255,
			a: e.a,
		};
	}
	const t = (1 - Math.abs(e.l * 2 - 1)) * e.s;
	const r = t * (1 - Math.abs(((e.h / 60) % 2) - 1));
	const n = e.l - t / 2;
	let i;
	i =
		e.h < 60
			? [t, r, 0]
			: e.h < 120
				? [r, t, 0]
				: e.h < 180
					? [0, t, r]
					: e.h < 240
						? [0, r, t]
						: e.h < 300
							? [r, 0, t]
							: [t, 0, r];
	return {
		r: (i[0] + n) * 255,
		g: (i[1] + n) * 255,
		b: (i[2] + n) * 255,
		a: e.a,
	};
}
export function WN(e) {
	const t = e.r / 255;
	const r = e.g / 255;
	const n = e.b / 255;
	const i = Math.max(t, r, n);
	const a = i - Math.min(t, r, n);
	let s;
	let o;
	let l;
	s =
		a === 0
			? 0
			: i === t
				? ((r - n) / a) % 6
				: i === r
					? (n - t) / a + 2
					: (t - r) / a + 4;
	s = Math.round(s * 60);
	if (s < 0) {
		s += 360;
	}
	o = i === 0 ? 0 : a / i;
	l = i;
	return {
		h: s,
		s: o,
		v: l,
		a: e.a,
	};
}
export function ko(e) {
	const t = e.v * e.s;
	const r = t * (1 - Math.abs(((e.h / 60) % 2) - 1));
	const n = e.v - t;
	let i;
	i =
		e.h < 60
			? [t, r, 0]
			: e.h < 120
				? [r, t, 0]
				: e.h < 180
					? [0, t, r]
					: e.h < 240
						? [0, r, t]
						: e.h < 300
							? [r, 0, t]
							: [t, 0, r];
	return {
		r: (i[0] + n) * 255,
		g: (i[1] + n) * 255,
		b: (i[2] + n) * 255,
		a: e.a,
	};
}
export function vo(e) {
	return VK(ko(e));
}
