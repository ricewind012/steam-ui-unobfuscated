export function w(e, t, r) {
	r = Object.assign(
		{},
		{
			maxLines: 2,
			fontFamily: "sans-serif",
			startingSizePx: 18,
			minSizePx: 8,
			minSingleWordBreakpoint: 0,
		},
		r,
	);
	if (!e || !e.length) {
		return e;
	}
	if (!t) {
		return r.startingSizePx;
	}
	let n = e.split(/\s+/g);
	let i = document.createElement("canvas").getContext("2d");
	e: for (let e = r.startingSizePx; e > r.minSizePx; e--) {
		let a = 1;
		i.font = `${e}px ${r.fontFamily}`;
		let s = "";
		for (let e = 0; e < n.length; e++) {
			s += ` ${n[e]}`;
			if (i.measureText(s.trim()).width > t) {
				a++;
				if (
					a > r.maxLines ||
					(n.length == 1 && a > 1 && n[e].length < r.minSingleWordBreakpoint)
				) {
					continue e;
				}
				s = n[e];
			}
		}
		return e;
	}
	return r.minSizePx;
}
