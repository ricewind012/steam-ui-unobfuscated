var n = require(/*webcrack:missing*/ "./28864.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./69164.js");
var s = require("./21105.js");
export const YZ = i.forwardRef(function (e, t) {
	const {
		onExplicitFocusLevelChanged: r,
		onOKButton: s,
		onCancelButton: o,
		navRef: l,
		focusable: c,
		...u
	} = e;
	const d = i.useRef(null);
	const { fnOnOKButton: A, fnOnCancelButton: p } = m({
		navRefPanel: d,
		onOKButton: s,
		onCancelButton: o,
		onExplicitFocusLevelChanged: r,
	});
	const g = (0, n.Ue)(l, d);
	return i.createElement(a.Z, {
		...u,
		onOKButton: A,
		onCancelButton: p,
		navRef: g,
		ref: t,
		focusable: c !== false,
	});
});
export function hN(e) {
	const { children: t, ...r } = e;
	const [n, a] = (0, i.useState)(false);
	const [s, l] = (0, i.useState)(false);
	const c = !n || s;
	return i.createElement(
		YZ,
		{
			onExplicitFocusLevelChanged: a,
			onFocusWithin: l,
			focusable: c,
			...r,
		},
		typeof t == "function" ? t(n) : t,
	);
}
export const f7 = i.forwardRef(function (e, t) {
	const { onOKButton: r, onCancelButton: a, navRef: o, focusable: l, ...c } = e;
	const u = i.useRef(null);
	const d = i.useRef(null);
	const A = i.useCallback((e, t) => e.FocusVisibleChild(), []);
	const { fnOnOKButton: p, fnOnCancelButton: g } = m({
		navRefPanel: u,
		onOKButton: r,
		onCancelButton: a,
		fnFocusChildren: A,
	});
	const h = (0, n.Ue)(d, t);
	const C = (0, n.Ue)(o, u);
	return i.createElement(s.Qg, {
		...c,
		onOKButton: (e) => p?.(e),
		onCancelButton: g,
		navRef: C,
		ref: h,
		focusable: l !== false,
	});
});
function m(e) {
	let {
		navRefPanel: t,
		onOKButton: r,
		onCancelButton: n,
		onExplicitFocusLevelChanged: a,
		fnFocusChildren: s,
	} = e;
	s = s ?? u;
	return {
		fnOnOKButton: i.useCallback(
			(e) => {
				const n = t.current;
				if (n?.BHasFocus() && s(n, e.detail.button)) {
					if (a) {
						a(true);
					}
					return true;
				} else {
					return !!r && r(e);
				}
			},
			[t, r, a, s],
		),
		fnOnCancelButton: i.useCallback(
			(e) => {
				const r = t.current;
				if (
					r?.BFocusWithin() &&
					!r.BHasFocus() &&
					r.TakeFocus(e.detail.button)
				) {
					if (a) {
						a(false);
					}
					return true;
				} else {
					return !!n && n(e);
				}
			},
			[t, n, a],
		),
	};
}
function u(e, t) {
	return e.ChildTakeFocus(t);
}
