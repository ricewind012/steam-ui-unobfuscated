import n from "./63696.js";
import i from "./7558.js";
import a, { wY } from "./99251.js";
import s from "./61657.js";
export function ak(e, t = "smooth", r, a) {
	const o = (r ?? 30) / 100;
	const LRef = n.useRef(undefined);
	const CRef = n.useRef(undefined);
	const m = n.useCallback(() => {
		LRef.current = undefined;
		CRef.current = undefined;
	}, []);
	const u = ((e, t) => {
		const RRef = n.useRef();
		return n.useCallback(
			(n = e.current.scrollTop, a = e.current.scrollLeft) => {
				let s = "sine";
				if (RRef.current) {
					RRef.current.Cancel();
					s = "linear";
				}
				if (!e.current) {
					return;
				}
				let o = Math.max(
					Math.abs(e.current.scrollTop - n),
					Math.abs(e.current.scrollLeft - a),
				);
				if (o > 0) {
					let l = Math.max(Math.min((o / 1000) * 200, 500), 300);
					RRef.current = new i.JV(
						e.current,
						{
							scrollTop: n,
							scrollLeft: a,
						},
						{
							msDuration: l,
							timing: s,
							onComplete: t,
						},
					);
					RRef.current.Start();
				} else if (t) {
					t();
				}
			},
			[e, t],
		);
	})(e, m);
	return n.useCallback(
		(r) => {
			if (a && !a(r)) {
				return false;
			}
			if (r.defaultPrevented) {
				return false;
			}
			if (!e.current) {
				return false;
			}
			const {
				scrollTop,
				scrollHeight,
				clientHeight,
				scrollLeft,
				scrollWidth,
				clientWidth,
			} = e.current;
			const h = LRef.current ?? scrollTop;
			const C = CRef.current ?? scrollLeft;
			switch (r.detail.button) {
				case s.pR.DIR_UP: {
					if (h <= 2) {
						return false;
					}
					LRef.current = Math.max(0, h - clientHeight * o);
					break;
				}
				case s.pR.DIR_DOWN: {
					if (h >= scrollHeight - clientHeight - 2) {
						return false;
					}
					LRef.current = Math.min(
						scrollHeight - clientHeight,
						h + clientHeight * o,
					);
					break;
				}
				case s.pR.DIR_LEFT: {
					if (C <= 2) {
						return false;
					}
					CRef.current = Math.max(0, C - clientWidth * o);
					break;
				}
				case s.pR.DIR_RIGHT: {
					if (C >= scrollWidth - clientWidth - 2) {
						return false;
					}
					CRef.current = Math.min(
						scrollWidth - clientWidth,
						C + clientWidth * o,
					);
					break;
				}
				default: {
					return false;
				}
			}
			if (t && t != "smooth") {
				e.current.scrollTo({
					top: LRef.current,
					left: CRef.current,
					behavior: "auto",
				});
				m();
			} else {
				u(LRef.current, CRef.current);
			}
			return true;
		},
		[a, e, t, o, u, m],
	);
}
export function tw() {
	const ERef = n.useRef(null);
	const t = n.useCallback(
		(t) => {
			window.requestAnimationFrame(() => {
				if (ERef.current?.BFocusWithin()) {
					ERef.current.Node()?.GetLastFocusElement()?.scrollIntoView({
						behavior: "auto",
						block: "nearest",
					});
				}
			});
		},
		[ERef],
	);
	return {
		ref: wY(t),
		navRef: ERef,
	};
}
export function to(e, t) {
	n.useEffect(() => {
		if (!e) {
			return;
		}
		let r = false;
		const n = () => {
			if (t.current?.BFocusWithin() && r) {
				t.current?.TakeFocus();
			}
		};
		const i = () => {
			if (t.current?.BFocusWithin()) {
				t.current?.TakeFocus();
			}
		};
		const a = () => (r = true);
		const s = () => (r = false);
		e.addEventListener("scroll", n);
		e.addEventListener("wheel", i);
		e.addEventListener("touchstart", a);
		e.addEventListener("touchend", s);
		return () => {
			e.removeEventListener("scroll", n);
			e.removeEventListener("wheel", i);
			e.removeEventListener("touchstart", a);
			e.removeEventListener("touchend", s);
		};
	}, [e, t]);
}
