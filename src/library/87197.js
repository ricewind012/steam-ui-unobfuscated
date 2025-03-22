export function e(e, t) {
	if (e == null || t == null) {
		return e === t;
	} else {
		return (
			typeof e == "object" &&
			typeof t == "object" &&
			Object.keys(e).length === Object.keys(t).length &&
			Object.keys(e).every((n) => t.hasOwnProperty(n) && e[n] === t[n])
		);
	}
}
