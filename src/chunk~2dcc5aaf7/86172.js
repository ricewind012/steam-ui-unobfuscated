export async function b(e, t, r = true, n) {
	const a = performance.now();
	const s = [];
	const o = (t, r) => {
		console.error(`${e} - ${r} - ERROR`, t);
		if (n) {
			n(t, e, r);
		}
	};
	await Promise.all(
		t.map(([e, t]) => {
			const n = performance.now();
			try {
				const c = t();
				if (
					(l = c) &&
					typeof l == "object" &&
					"then" in l &&
					typeof l.then == "function"
				) {
					return c.then(
						() => r && s.push(i(`async ${e}`, a)),
						(t) => o(t, e),
					);
				}
				if (r) {
					s.push(i(e, n));
				}
			} catch (t) {
				o(t, e);
			}
			var l;
			return null;
		}),
	);
	if (r) {
		console.groupCollapsed(i(e, a));
		s.forEach((e) => console.log(e));
		console.groupEnd();
	}
}
function i(e, t) {
	return `${e} - ${(performance.now() - t).toLocaleString()}ms`;
}
