import { AssertMsg } from "../../actual_src/utils/assert.js";
var i = require(/*webcrack:missing*/ "./28864.js");
var a = require(/*webcrack:missing*/ "./4452.js");
var s = a;
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require("./51076.js");
var c = require(/*webcrack:missing*/ "./4690.js");
var m = require("./69.js");
var u = require("./55116.js");
var d = require(/*webcrack:missing*/ "./69164.js");
var A = require("./77045.js");
var p = A;
export const MS = o.forwardRef(function (e, t) {
	const {
		scrollDirection: r,
		scrollPaddingTop: n,
		scrollPaddingRight: a,
		scrollPaddingBottom: l,
		scrollPaddingLeft: c,
		className: A,
		children: g,
		style: h,
		...C
	} = e;
	let _;
	switch (r) {
		case "x":
			_ = p.ScrollX;
			break;
		case "both":
			_ = p.ScrollBoth;
			break;
		default:
			_ = p.ScrollY;
	}
	let f = {
		...h,
	};
	if (n || n === 0) {
		f.scrollPaddingTop = n;
	}
	if (a || a === 0) {
		f.scrollPaddingRight = a;
	}
	if (l || l === 0) {
		f.scrollPaddingBottom = l;
	}
	if (c || c === 0) {
		f.scrollPaddingLeft = c;
	}
	const { ref: b, navRef: y } = (0, m.tw)();
	const S = (0, i.Ue)(y, C.navRef);
	const w = (0, i.Ue)(b, t);
	return o.createElement(
		d.Z,
		{
			...C,
			style: f,
			className: s(A, p.ScrollPanel, _),
			ref: w,
			navRef: S,
		},
		o.createElement(u.q, null, g),
	);
});
export const Qg = o.forwardRef(function (e, t) {
	const { scrollStepPercent: r, scrollBehavior: n, ...a } = e;
	const s = o.useRef(null);
	const l = o.useCallback((e) => e.currentTarget != e.target, []);
	const u = (0, m.ak)(s, n, r, l);
	const d = (0, i.Ue)(s, t);
	return o.createElement(MS, {
		...a,
		onGamepadDirection: u,
		ref: d,
		scrollIntoViewType: c.Yo.NoTransformSparseContent,
	});
});
export const i6 = o.forwardRef(function (e, t) {
	const { name: r, msScrollRestoreDelay: n, onScroll: i, ...a } = e;
	return o.createElement(
		f,
		{
			name: r,
			msScrollRestoreDelay: n,
			parentOnScroll: i,
			refDiv: t,
		},
		(e, t) =>
			o.createElement(MS, {
				...a,
				onScroll: e,
				ref: t,
			}),
	);
});
export const iq = o.forwardRef(function (e, t) {
	const { name: r, msScrollRestoreDelay: n, onScroll: i, ...a } = e;
	return o.createElement(
		f,
		{
			name: r,
			msScrollRestoreDelay: n,
			parentOnScroll: i,
			refDiv: t,
		},
		(e, t) =>
			o.createElement(Qg, {
				...a,
				onScroll: e,
				ref: t,
			}),
	);
});
function f(e) {
	const {
		name: t,
		msScrollRestoreDelay: r,
		parentOnScroll: a,
		refDiv: s,
		children: c,
	} = e;
	const [m, u] = (0, l.Xz)(`${t}ScrollTop`, 250, 0);
	const [d, A] = (0, l.Xz)(`${t}ScrollLeft`, 250, 0);
	const p = o.useRef(0);
	const g = o.useRef(0);
	const h = o.useRef();
	let C = o.useCallback(
		(e) => {
			const { scrollTop: t, scrollLeft: r } = e.currentTarget;
			u(t);
			p.current = t;
			A(r);
			g.current = r;
			if (a) {
				a(e);
			}
		},
		[u, A, a],
	);
	o.useLayoutEffect(() => {
		const e = function () {
			if (h.current) {
				AssertMsg(
					h.current.scrollHeight >= m,
					`Element is ${h.current.scrollHeight} high but trying to restore scrollTop of ${m}, element may need more time to lay out.`,
					h.current,
				);
				p.current = m;
				g.current = d;
				h.current.scrollTo({
					top: m,
					left: d,
					behavior: "auto",
				});
				h.current.dispatchEvent(new UIEvent("scroll"));
			}
		};
		if (m != p.current || d != g.current) {
			if (r) {
				window.setTimeout(e, r);
			} else {
				e();
			}
		}
	}, [m, d, r]);
	const _ = (0, i.Ue)(h, s);
	return o.useMemo(() => c(C, _), [C, _, c]);
}
