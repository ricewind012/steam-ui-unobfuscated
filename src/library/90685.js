var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./736.js");
var s = require("./52451.js");
export function GD(e) {
	const [t, n] = r.useState(false);
	const o = r.useCallback(() => {
		if ((0, i.Fj)(e, "Window.IsWindowMaximized")) {
			e.SteamClient.Window.IsWindowMaximized().then((e) => {
				n(e);
			});
		} else if (e?.screen) {
			n(
				e.screen.availWidth == e.innerWidth &&
					e.screen.availHeight == e.innerHeight,
			);
		}
	}, [e]);
	r.useEffect(o, [o, e]);
	(0, s.l6)(e, "resize", o);
	(0, s.Qi)(e, ["window_moved"], o);
	return t;
}
export function jt(e, t = 100) {
	const [n, i] = r.useState(false);
	const o = r.useCallback(() => i(true), [i]);
	const a = r.useCallback(() => i(false), [i]);
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
	return (0, s.DF)(n, t);
}
export function nA(e) {
	const [t, n] = r.useState(false);
	const i = r.useCallback(() => n(true), [n]);
	const s = r.useCallback(() => n(false), [n]);
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
	const [t, n] = r.useState(0);
	const i = r.useCallback(() => {
		n(e.innerWidth);
	}, [e]);
	r.useEffect(i, [i, e]);
	(0, s.l6)(e, "resize", i);
	return t;
}
