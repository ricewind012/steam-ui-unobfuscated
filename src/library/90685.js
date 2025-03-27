import r from "./63696.js";
import i, { Fj } from "./736.js";
import s, { l6, Qi, DF } from "./52451.js";
export function GD(e) {
	const [t, setT] = r.useState(false);
	const o = r.useCallback(() => {
		if (Fj(e, "Window.IsWindowMaximized")) {
			e.SteamClient.Window.IsWindowMaximized().then((e) => {
				setT(e);
			});
		} else if (e?.screen) {
			setT(
				e.screen.availWidth == e.innerWidth &&
					e.screen.availHeight == e.innerHeight,
			);
		}
	}, [e]);
	r.useEffect(o, [o, e]);
	l6(e, "resize", o);
	Qi(e, ["window_moved"], o);
	return t;
}
export function jt(e, t = 100) {
	const [n, setN] = r.useState(false);
	const o = r.useCallback(() => setN(true), [setN]);
	const a = r.useCallback(() => setN(false), [setN]);
	r.useEffect(
		() =>
			e
				? (e.addEventListener("focus", o),
					e.addEventListener("blur", a),
					() => {
						e.removeEventListener("focus", o);
						e.removeEventListener("blur", a);
					})
				: undefined,
		[e, o, a],
	);
	return DF(n, t);
}
export function nA(e) {
	const [t, setT] = r.useState(false);
	const i = r.useCallback(() => setT(true), [setT]);
	const s = r.useCallback(() => setT(false), [setT]);
	r.useEffect(
		() =>
			e
				? (e.document.body.addEventListener("mouseenter", i),
					e.document.body.addEventListener("mouseleave", s),
					() => {
						e.document.body.removeEventListener("mouseenter", i);
						e.document.body.removeEventListener("mouseleave", s);
					})
				: undefined,
		[e, i, s],
	);
	return t;
}
export function SO(e) {
	const [t, setT] = r.useState(0);
	const i = r.useCallback(() => {
		setT(e.innerWidth);
	}, [e]);
	r.useEffect(i, [i, e]);
	l6(e, "resize", i);
	return t;
}
