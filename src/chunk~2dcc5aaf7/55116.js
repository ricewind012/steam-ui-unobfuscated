var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./4452.js");
var a = i;
var s = require(/*webcrack:missing*/ "./83599.js");
var o = require(/*webcrack:missing*/ "./72476.js");
var l = require(/*webcrack:missing*/ "./61050.js");
var c = require(/*webcrack:missing*/ "./3524.js");
var m = require(/*webcrack:missing*/ "./35560.js");
var u = require(/*webcrack:missing*/ "./28869.js");
var d = require("./18402.js");
var A = d;
var p = require(/*webcrack:missing*/ "./28864.js");
var _g = require(/*webcrack:missing*/ "./84252.js");
const h = new s.wd("FocusNavigation").Debug;
export function q(e) {
	const { children: t, ...r } = e;
	const [i, a] = n.useState({
		bFocusWithin: false,
		navTarget: null,
		prevTarget: null,
	});
	const s = n.useRef(null);
	const o = n.useMemo(
		() => ({
			OnBlur: (e, t, r) => {
				a({
					bFocusWithin: false,
					navTarget: null,
					prevTarget: null,
				});
			},
			OnFocus: (e, t, r) => {
				a({
					bFocusWithin: true,
					navTarget: t,
					prevTarget: null,
				});
			},
			OnFocusChange: (e, t, r) => {
				a({
					bFocusWithin: true,
					navTarget: r,
					prevTarget: t,
				});
			},
			OnForceMeasureFocusRing: () => {
				s.current?.MeasureElementAndUpdate();
			},
		}),
		[a],
	);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(_, {
			...r,
			...i,
			refMeasure: s,
		}),
		n.createElement(
			u.sQ.Provider,
			{
				value: o,
			},
			t,
		),
	);
}
function _(e) {
	const {
		rootClassName: t,
		className: r,
		bFocusWithin: i,
		navTarget: s,
		refMeasure: l,
	} = e;
	const [u, d] = n.useState(null);
	const p = (0, m.QI)();
	const g = (0, o.Qn)();
	const h = (0, c.bJ)(false);
	if (g || h) {
		return n.createElement(
			"div",
			{
				className: a(A.FocusRingRoot, t),
				ref: d,
			},
			n.createElement(f, {
				refMeasure: l,
				className: a(r, p && A.DebugFocusRing),
				bFocusWithin: i && (h || p),
				navTarget: s,
				elContainer: u,
				bDebug: p,
			}),
		);
	} else {
		return null;
	}
}
function f(e) {
	const {
		className: t,
		bFocusWithin: r,
		navTarget: i,
		elContainer: s,
		bDebug: o,
		refMeasure: l,
	} = e;
	const [c, m] = n.useState(null);
	const [u, d] = n.useReducer((e) => e + 1, 0);
	const [C, _] = n.useReducer((e) => e + 1, 0);
	(0, p.D5)(
		l,
		n.useMemo(
			() => ({
				MeasureElementAndUpdate: _,
			}),
			[],
		),
	);
	const { bActiveTree: f, bDisableFocusClasses: b } = (0, _g.qR)();
	const S = f && !b;
	const w = (function (e, t) {
		const [r, i] = n.useState(false);
		(0, n.useEffect)(() => {
			if (e && t) {
				let e = t.GetBoundingRect();
				let r = t.Element;
				const n = r.ownerDocument.defaultView;
				const a = (t) =>
					n.getComputedStyle(t).display == "none" ||
					(e?.width == 0 && e.height == 0 && e.x == 0 && e.y == 0);
				while (a(r) && r?.parentElement) {
					r = r.parentElement;
					e = r.getBoundingClientRect();
				}
				let s = t.Element != r;
				i((e) => {
					if (s && s != e) {
						h(
							"Focused on hidden item: ",
							t.Element,
							". Closest visible ancestor: ",
							r,
						);
					}
					return s;
				});
			}
		}, [e, t]);
		return r;
	})(o, i);
	const B = n.useCallback(() => {
		if (!i || !i.BWantsFocusRing() || !s || !S) {
			m(null);
			return;
		}
		let e = i.GetBoundingRect();
		const t = s.getBoundingClientRect();
		const r = {
			left: e.x - t.x,
			top: e.y - t.y,
			height: e.height,
			width: e.width,
		};
		m((e) =>
			e &&
			r.left == e.left &&
			r.top == e.top &&
			r.height == e.height &&
			r.width == e.width
				? e
				: r,
		);
	}, [i, s, S]);
	n.useLayoutEffect(() => B(), [B]);
	n.useLayoutEffect(() => {
		d();
	}, [i]);
	let v = r;
	if (i && s) {
		if (!i.BWantsFocusRing()) {
			v = false;
		}
	}
	n.useEffect(() => {
		if (!v) {
			return;
		}
		const e = performance.now();
		let t;
		const r = () => {
			B();
			if (performance.now() - e <= 500) {
				t = requestAnimationFrame(r);
			}
		};
		r();
		return () => cancelAnimationFrame(t);
	}, [v, B, c, C]);
	if (v && c) {
		return n.createElement(y, {
			...c,
			key: u,
			className: a(t, w && A.FocusRingOnHiddenItem),
			target: i,
		});
	} else {
		return null;
	}
}
export function g(e) {
	const { children: t } = e;
	if ((0, m.QI)()) {
		return n.createElement(q, null, t);
	} else {
		return n.createElement(
			u.sQ.Provider,
			{
				value: l.CZ,
			},
			t,
		);
	}
}
function y(e) {
	const { className: t, left: r, top: i, height: s, width: o, target: l } = e;
	const c = {
		left: (r ?? 0) - 0 + "px",
		top: (i ?? 0) - 0 + "px",
		height: s + "px",
		width: o + "px",
	};
	return n.createElement("div", {
		className: a(A.FocusRing, t),
		style: c,
	});
}
