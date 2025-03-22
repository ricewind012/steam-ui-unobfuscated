var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./34792.js");
var a = require(/*webcrack:missing*/ "./52451.js");
function s(e, t) {
	const [r, i] = (0, n.useState)(e);
	const [a, s] = (0, n.useState)(e);
	(0, n.useEffect)(() => {
		if (t < 1) {
			s(r);
			return () => {};
		}
		const e = setTimeout(() => s(r), t);
		return () => clearTimeout(e);
	}, [r, t]);
	return [r, a, i];
}
var o = require("./91957.js");
export function Pl(e) {
	const {
		setting: t,
		onChange: r,
		onChangeComplete: l,
		visible: c = true,
		nDebounceMs: m,
		feature: u,
		...d
	} = e;
	const [A, p] = (0, i.VI)(t);
	const g = m > 0;
	const [h, C, _] = s(A, m);
	const [f, b] = (0, a.uN)(A, _);
	const [y, S] = g ? [f, b] : [A, p];
	const w = n.useCallback(
		(e, t) => {
			S(e);
			if (r) {
				r(e, t);
			}
		},
		[r, S],
	);
	const B = n.useCallback(
		(e, t) => {
			p(e);
			S(e);
			if (l) {
				l(e, t);
			}
		},
		[l, S, p],
	);
	n.useEffect(() => {
		if (g && C != A) {
			p(C);
		}
	}, [C]);
	if (c) {
		return n.createElement(o.V, {
			feature: u,
			value: y,
			onChange: w,
			onChangeComplete: B,
			...d,
		});
	} else {
		return null;
	}
}
export function Lh(e) {
	const { info: t, ...r } = e;
	return n.createElement(Pl, {
		visible: t.visible,
		min: t.min,
		max: t.max,
		...r,
	});
}
export function Ax(e) {
	const {
		setting: t,
		onChange: r,
		onChangeComplete: l,
		visible: c = true,
		nDebounceMs: m,
		feature: u,
		valueDisabled: d = null,
		...A
	} = e;
	const [p, g] = (0, i.VI)(t);
	const h = m > 0;
	const [C, _, f] = s(p, m);
	const [b, y] = (0, a.uN)(p, f);
	const [S, w] = h ? [b, y] : [p, g];
	const B = n.useCallback(
		(e, t) => {
			w(e);
			if (r) {
				r(e, t);
			}
		},
		[r, w],
	);
	const v = n.useCallback(
		(e, t) => {
			g(e);
			w(e);
			if (l) {
				l(e, t);
			}
		},
		[l, w, g],
	);
	n.useEffect(() => {
		if (h && _ != p) {
			g(_);
		}
	}, [_]);
	const I = e.disabled && d != null ? d : S;
	return n.createElement(o.k, {
		feature: u,
		value: I,
		onChange: B,
		onChangeComplete: v,
		...A,
	});
}
