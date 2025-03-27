export function _h(e) {
	const { flMaxProgress, flCurrentProgress } = e;
	if (ry(e)) {
		const e = Math.min(flMaxProgress, flCurrentProgress);
		const n = 0;
		return {
			flPercentage: Math.min(100, ((e - n) * 100) / (flMaxProgress - n)),
			flCurrent: e,
			flMax: flMaxProgress,
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
