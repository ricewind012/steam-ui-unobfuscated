var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./7558.js");
var a = require(/*webcrack:missing*/ "./99251.js");
var s = require(/*webcrack:missing*/ "./61657.js");
export function ak(e, t = "smooth", r, a) {
	const o = (r ?? 30) / 100;
	const l = n.useRef(undefined);
	const c = n.useRef(undefined);
	const m = n.useCallback(() => {
		l.current = undefined;
		c.current = undefined;
	}, []);
	const u = (function (e, t) {
		const r = n.useRef();
		return n.useCallback(
			(n, a) => {
				let s = "sine";
				if (r.current) {
					r.current.Cancel();
					s = "linear";
				}
				if (!e.current) {
					return;
				}
				if (n === undefined) {
					n = e.current.scrollTop;
				}
				if (a === undefined) {
					a = e.current.scrollLeft;
				}
				let o = Math.max(
					Math.abs(e.current.scrollTop - n),
					Math.abs(e.current.scrollLeft - a),
				);
				if (o > 0) {
					let l = Math.max(Math.min((o / 1000) * 200, 500), 300);
					r.current = new i.JV(
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
					r.current.Start();
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
				scrollTop: n,
				scrollHeight: i,
				clientHeight: d,
				scrollLeft: A,
				scrollWidth: p,
				clientWidth: g,
			} = e.current;
			const h = l.current ?? n;
			const C = c.current ?? A;
			switch (r.detail.button) {
				case s.pR.DIR_UP:
					if (h <= 2) {
						return false;
					}
					l.current = Math.max(0, h - d * o);
					break;
				case s.pR.DIR_DOWN:
					if (h >= i - d - 2) {
						return false;
					}
					l.current = Math.min(i - d, h + d * o);
					break;
				case s.pR.DIR_LEFT:
					if (C <= 2) {
						return false;
					}
					c.current = Math.max(0, C - g * o);
					break;
				case s.pR.DIR_RIGHT:
					if (C >= p - g - 2) {
						return false;
					}
					c.current = Math.min(p - g, C + g * o);
					break;
				default:
					return false;
			}
			if (t && t != "smooth") {
				e.current.scrollTo({
					top: l.current,
					left: c.current,
					behavior: "auto",
				});
				m();
			} else {
				u(l.current, c.current);
			}
			return true;
		},
		[a, e, t, o, u, m],
	);
}
export function tw() {
	const e = n.useRef(null);
	const t = n.useCallback(
		(t) => {
			window.requestAnimationFrame(() => {
				if (e.current?.BFocusWithin()) {
					e.current.Node()?.GetLastFocusElement()?.scrollIntoView({
						behavior: "auto",
						block: "nearest",
					});
				}
			});
		},
		[e],
	);
	return {
		ref: (0, a.wY)(t),
		navRef: e,
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
