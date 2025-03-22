export function A(...e) {
	return e.reduce(
		(e, t) =>
			t
				? typeof t == "string"
					? e
						? `${e} ${t}`
						: t
					: typeof t == "object"
						? e
							? `${e} ${i(t)}`
							: i(t)
						: e
				: e,
		"",
	);
}
function i(e) {
	return Object.keys(e).reduce(
		(t, n) => (e[n] ? (t ? `${t} ${n}` : n) : t),
		"",
	);
}
