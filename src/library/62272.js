var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./54644.js");
var s = require("./28864.js");
var o = require("./99251.js");
export function rf(e) {
	let [t, n] = (0, r.useState)(false);
	let s = e?.current;
	(0, r.useEffect)(() => {
		if (!s) {
			return;
		}
		n((0, i.ww)(s));
		let e = () => {
			n((0, i.ww)(s));
		};
		s.addEventListener("fullscreenchange", e);
		return () => {
			s.removeEventListener("fullscreenchange", e);
		};
	}, [s, n]);
	return t;
}
export function Pt(e) {
	return (0, s.QS)(
		(t) => {
			if (!t || !e) {
				return;
			}
			const n = (0, i.$e)(t);
			n.forEach((t) => t.addEventListener("scroll", e));
			return () => n.forEach((t) => t.removeEventListener("scroll", e));
		},
		[e],
	);
}
export function w6(e) {
	const t = r.useRef(true);
	const n = r.useRef(undefined);
	const i = r.useRef(undefined);
	const a = r.useRef();
	a.current = e;
	const c = r.useRef();
	const l = r.useCallback((e) => {
		if (c.current !== e) {
			c.current = e;
			t.current = true;
		}
	}, []);
	const u = r.useCallback(() => {
		const e = c.current?.offsetWidth ?? 0;
		const t = c.current?.offsetHeight ?? 0;
		if (n.current !== e || i.current !== t) {
			a.current?.(e, t);
			n.current = e;
			i.current = t;
		}
	}, []);
	r.useLayoutEffect(() => {
		if (t.current) {
			u();
			t.current = false;
		}
	});
	const m = (0, o.wY)(u);
	return (0, s.Ue)(l, m);
}
