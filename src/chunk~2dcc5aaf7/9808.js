export function _h(e) {
	const { flMaxProgress: t, flCurrentProgress: r } = e;
	if (ry(e)) {
		const e = Math.min(t, r);
		const n = 0;
		return {
			flPercentage: Math.min(100, ((e - n) * 100) / (t - n)),
			flCurrent: e,
			flMax: t,
		};
	}
	return null;
}
export function ry(e) {
	return e.flMaxProgress > 1;
}
export function Ms() {
	return {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};
}
