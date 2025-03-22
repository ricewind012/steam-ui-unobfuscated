export function Yb(e, t, r) {
	const n = Array.from(e);
	const [i] = n.splice(t, 1);
	n.splice(r, 0, i);
	return n;
}
export function $b(e) {
	if (e?.transform) {
		const t = `${e.transform.split(",").shift()}, 0px )`;
		return {
			...e,
			transform: t,
		};
	}
	return e;
}
export function gQ(e) {
	if (e?.transform) {
		const t = `translate(0px, ${e.transform.split(",").pop()}`;
		return {
			...e,
			transform: t,
		};
	}
	return e;
}
