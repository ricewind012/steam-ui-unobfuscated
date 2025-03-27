import r from "./63696.js";
export function cZ(e, t) {
	if (e != null) {
		if (typeof e == "function") {
			e(t);
		} else if ("current" in e) {
			e.current = t;
		}
	}
}
export function Ue(...e) {
	return r.useCallback((t) => {
		for (const n of e) {
			cZ(n, t);
		}
	}, e);
}
export function XB(...e) {
	if (e && e.length !== 0) {
		if (e.length === 1) {
			return e[0];
		} else {
			return (t) =>
				e.forEach((e) => {
					if (e) {
						if (typeof e == "function") {
							e(t);
						} else {
							e.current = t;
						}
					}
				});
		}
	}
}
export function QS(e, t) {
	const NRef = r.useRef();
	return r.useCallback((t) => {
		if (NRef.current) {
			NRef.current();
		}
		NRef.current = e(t);
	}, t);
}
export function RY(e) {
	const TRef = r.useRef(null);
	return {
		refWithValue: TRef,
		refForElement: Ue(e, TRef),
	};
}
export function D5(e, t) {
	const NRef = r.useRef(false);
	r.useLayoutEffect(
		() => () => {
			if (NRef.current) {
				cZ(e, undefined);
			}
		},
		[e],
	);
	r.useLayoutEffect(() => {
		if (t || NRef.current) {
			cZ(e, t);
			NRef.current = !!t;
		}
	}, [e, t]);
}
