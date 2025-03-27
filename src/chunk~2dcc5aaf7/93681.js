import n, { useState, useRef, useCallback, useEffect } from "./63696.js";
import { A } from "./90765.js";
import { hd, wY, Ue, l6 } from "./52451.js";
import s from "./42723.js";
export function r(e) {
	const t = e.play ?? true;
	const r = e.direction ?? "left";
	const o = e.speed ?? 30;
	const l = e.delay ?? 3;
	const c = e.fadeLength ?? 24;
	const m = Array.isArray(c) ? c : [c, c];
	const u = e.center ?? false;
	const d = e.resetOnPause ?? false;
	const { style: A, className: p, children: g } = e;
	const [h, C] = useState(0);
	const [_, f] = useState(0);
	const b = useRef(null);
	const y = useRef(null);
	const S = useCallback(() => {
		if (y.current && b.current) {
			C(b.current.getBoundingClientRect().width);
			f(y.current.getBoundingClientRect().width);
		}
	}, []);
	const { bVisible: w, ref: B } = hd();
	const v = h < _ && w;
	const I = _ / o;
	const E = A(
		s.Container,
		v && s.Marquee,
		u && s.Center,
		t && s.Playing,
		d && s.ResetOnPause,
	);
	const M = {
		"--fade-length-left": `${m[0]}px`,
		"--fade-length-right": `${m[1]}px`,
		"--delay": `${l}s`,
		"--direction": r === "left" ? "normal" : "reverse",
		"--duration": `${I}s`,
		"--delay": `${l}s`,
		...A,
	};
	const T = wY(S);
	const R = Ue(T, b);
	l6(window, "resize", S);
	useEffect(S, [S]);
	return (
		<div className={p} ref={B}>
			<div ref={R} style={M} className={E}>
				<div ref={y} className={s.Content}>
					{g}
				</div>
				{v && <div className={s.Content}>{g}</div>}
			</div>
		</div>
	);
}
