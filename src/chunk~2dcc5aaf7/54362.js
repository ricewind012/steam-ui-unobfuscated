let n = null;
export function V(e) {
	if (n) {
		console.error("Attempt to set timeline marker hook a second time");
	} else {
		n = e;
	}
}
export function T(e, t) {
	if (n) {
		return n(e, t);
	} else {
		console.error(
			"useGameMarkerFromID called in a context where the hook isn't defined.",
		);
		return null;
	}
}
