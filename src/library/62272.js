import { BElementFullscreen, $e } from "../../actual_src/utils/domutils.js";
import r, { useState, useEffect } from "./63696.js";
import s, { QS, Ue } from "./28864.js";
import { wY } from "./99251.js";
export function rf(e) {
	let [t, setT] = useState(false);
	let s = e?.current;
	useEffect(() => {
		if (!s) {
			return;
		}
		setT(BElementFullscreen(s));
		let e = () => {
			setT(BElementFullscreen(s));
		};
		s.addEventListener("fullscreenchange", e);
		return () => {
			s.removeEventListener("fullscreenchange", e);
		};
	}, [s, setT]);
	return t;
}
export function Pt(e) {
	return QS(
		(t) => {
			if (!t || !e) {
				return;
			}
			const n = (0, $e)(t);
			n.forEach((t) => t.addEventListener("scroll", e));
			return () => n.forEach((t) => t.removeEventListener("scroll", e));
		},
		[e],
	);
}
export function w6(e) {
	const TRef = r.useRef(true);
	const NRef = r.useRef(undefined);
	const IRef = r.useRef(undefined);
	const ARef = r.useRef();
	ARef.current = e;
	const CRef = r.useRef();
	const l = r.useCallback((e) => {
		if (CRef.current !== e) {
			CRef.current = e;
			TRef.current = true;
		}
	}, []);
	const u = r.useCallback(() => {
		const e = CRef.current?.offsetWidth ?? 0;
		const t = CRef.current?.offsetHeight ?? 0;
		if (NRef.current !== e || IRef.current !== t) {
			ARef.current?.(e, t);
			NRef.current = e;
			IRef.current = t;
		}
	}, []);
	r.useLayoutEffect(() => {
		if (TRef.current) {
			u();
			TRef.current = false;
		}
	});
	const m = wY(u);
	return Ue(l, m);
}
