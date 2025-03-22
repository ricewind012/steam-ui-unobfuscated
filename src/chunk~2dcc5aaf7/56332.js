var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require(/*webcrack:missing*/ "./54644.js");
export function m(e, t, r) {
	const [i, s] = (0, n.useState)(null);
	const o = (0, n.useRef)(0);
	const l = (0, n.useRef)(null);
	const c = (0, n.useRef)(null);
	const m = (0, n.useRef)(null);
	const u = (0, n.useMemo)(() => t.map((e) => e.id), [t]);
	const d = (0, n.useCallback)(() => {
		window.cancelAnimationFrame(l.current);
		l.current = null;
		c.current.removeEventListener("mousemove", m.current);
	}, []);
	(0, n.useEffect)(() => {
		let t = {};
		let r = 0;
		e.forEach((e) => {
			const n = u.findIndex((t) => t === e.id);
			if (n >= 0) {
				r += Number(e.width);
			}
			if (!e.disableResizing) {
				t[e.id] = {
					minFlexRatio: Number(e.minWidth),
					maxFlexRatio: Number(e.maxWidth),
					flexRatio: Number(e.width),
					dependentColumnKeys: u.slice(n + 1),
				};
			}
		});
		o.current = r;
		s(t);
	}, [u, e]);
	(0, n.useEffect)(
		() => () => {
			if (l.current) {
				window.cancelAnimationFrame(l.current);
			}
			if (c.current) {
				c.current.removeEventListener("mousemove", m.current);
				c.current.removeEventListener("mouseup", d);
			}
		},
		[d],
	);
	const A = (e, t) => {
		l.current ||= c.current.requestAnimationFrame(() =>
			((e, t) => {
				window.cancelAnimationFrame(l.current);
				l.current = null;
				const {
					flexRatio: n,
					minFlexRatio: a,
					maxFlexRatio: c,
					dependentColumnKeys: m,
				} = i[t];
				const u = r.current.getBoundingClientRect().width / o.current;
				let d = e.movementX / u;
				const A = n + d;
				let p = A;
				if (A < a) {
					p = a;
					d = a - n;
				} else if (A > c) {
					p = c;
					d = c - n;
				}
				const g = {
					...i,
				};
				const h = d / m.length;
				m.forEach((e) => {
					const t = g[e].flexRatio - h;
					g[e].flexRatio = t;
				});
				g[t].flexRatio = p;
				s(g);
			})(e, t),
		);
	};
	return {
		columnWidths: i,
		OnMouseDown: (e, t) => {
			c.current = (0, a.uX)(e);
			m.current = (e) => {
				A(e, t);
			};
			c.current.addEventListener("mousemove", m.current);
			c.current.addEventListener("mouseup", d, {
				once: true,
			});
		},
	};
}
export function j(e, t, r, n) {
	e.className = (0, i.A)(e.className, r.className, r.isSorted && t);
	e.style.minWidth = r.minWidth;
	e.style.maxWidth = r.maxWidth;
	if (r.canResize && n) {
		e.style.width = undefined;
		delete e.style.flex;
		e.style.flexGrow = n[r.id].flexRatio;
		e.style.flexBasis = n[r.id].flexRatio;
	} else {
		e.style.width = r.width;
		delete e.style.flex;
		delete e.style.flexGrow;
		delete e.style.flexShrink;
		delete e.style.flexBasis;
	}
}
