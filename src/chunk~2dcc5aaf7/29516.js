var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./72061.js");
var a = require("./92374.js");
const s = {
	nBeforeMS: 0,
	nAfterMS: 12000,
};
const o = n.createContext({
	globalStartMS: undefined,
	globalEndMS: undefined,
	setRange: null,
	setStartMS: null,
	setEndMS: null,
	globalPreviewStartMS: undefined,
	globalPreviewEndMS: undefined,
	setPreviewRange: null,
	clearPreviewSelection: null,
	selectionZoomCount: 0,
	eInitMethod: undefined,
	startMetrics: undefined,
	endMetrics: undefined,
	zoomIntoSelection: null,
	zoomOutSelection: null,
});
export function tB(e) {
	const { children: t, loader: r } = e;
	const [s, l] = n.useState();
	const [c, m] = n.useState();
	const [u, d] = n.useState();
	const [A, p] = n.useState();
	const g = n.useMemo(
		() => ({
			originalGlobalMS: 0,
			originalRangeMethod: undefined,
			latestRangeMethod: undefined,
		}),
		[],
	);
	const [h, C] = n.useState({
		...g,
	});
	const [_, f] = n.useState({
		...g,
	});
	const [b, y] = n.useState();
	const [S, w] = n.useState();
	const [B, v] = n.useState(0);
	const I = (0, a.aO)();
	const E = n.useCallback(() => {
		d(null);
		l(undefined);
		m(undefined);
		p(undefined);
		C(g);
		f(g);
		I.ClearPlaybackStop();
	}, [I, g]);
	const M = n.useCallback((e) => {
		y(e.valMS > 0 ? e : (0, i.Sb)(0));
	}, []);
	const T = n.useCallback(
		(e) => {
			const t = r.GetGlobalTimelineEndMS();
			w(e.valMS < t.valMS ? e : t);
		},
		[r],
	);
	const R = n.useCallback(
		(e, t) => {
			M(e);
			T(t);
		},
		[T, M],
	);
	const k = n.useCallback(() => {
		y(undefined);
		w(undefined);
	}, []);
	const D = n.useCallback(
		(e, t) => {
			if (e !== undefined) {
				let r = h ?? {
					...g,
				};
				if (r.originalGlobalMS == 0) {
					r.originalRangeMethod = e;
					r.originalGlobalMS = t.valMS;
				}
				r.latestRangeMethod = e;
				C(r);
			}
			l(t.valMS > 0 ? t : (0, i.Sb)(0));
		},
		[h, g],
	);
	const N = n.useCallback(
		(e, t) => {
			if (e !== undefined) {
				let r = _ ?? {
					...g,
				};
				if (r.originalGlobalMS == 0) {
					r.originalRangeMethod = e;
					r.originalGlobalMS = t.valMS;
				}
				r.latestRangeMethod = e;
				f(r);
			}
			const n = r.GetGlobalTimelineEndMS();
			m(t.valMS < n.valMS ? t : n);
		},
		[r, _, g],
	);
	const F = n.useCallback(
		(e, t, r) => {
			if (A == null) {
				p(e);
			}
			D(e, t);
			N(e, r);
			k();
		},
		[N, D, k, A, p],
	);
	const G = n.useCallback(() => {
		v(B + 1);
	}, [v, B]);
	const O = n.useCallback(() => {
		if (B > 0) {
			v(B - 1);
		}
	}, [v, B]);
	(0, n.useEffect)(() => () => E(), [E, r]);
	const P = n.useMemo(
		() => ({
			globalStartMS: s,
			globalPreviewStartMS: b,
			globalPreviewEndMS: S,
			globalEndMS: c,
			selectedMarker: u,
			eInitMethod: A,
			startMetrics: h,
			endMetrics: _,
			setStartMS: D,
			setEndMS: N,
			setRange: F,
			setPreviewRange: R,
			clearPreviewSelection: k,
			setSelectedMarker: (e, t, r, n) => {
				d({
					strEntryID: e,
					strTimelineID: t,
				});
				F(2, (0, i.Sb)(Math.max(0, r)), (0, i.Sb)(n));
			},
			clearSelection: E,
			selectionZoomCount: B,
			zoomIntoSelection: G,
			zoomOutSelection: O,
		}),
		[s, b, S, c, u, A, h, _, D, N, F, R, k, E, B, O, G],
	);
	return n.createElement(
		o.Provider,
		{
			value: P,
		},
		t,
	);
}
export function _Z() {
	const e = (0, n.useContext)(o);
	return {
		nGlobalStartMS: e.globalStartMS,
		nGlobalEndMS: e.globalEndMS,
	};
}
export function pH() {
	const e = (0, n.useContext)(o);
	const t =
		e.globalStartMS !== undefined
			? e.globalStartMS.valMS - e.startMetrics.originalGlobalMS
			: 0;
	const r =
		e.globalEndMS !== undefined
			? e.globalEndMS.valMS - e.endMetrics.originalGlobalMS
			: 0;
	return {
		eInitMethod: e.eInitMethod,
		startMetrics: {
			originalRangeMethod: e.startMetrics.originalRangeMethod,
			latestRangeMethod: e.startMetrics.latestRangeMethod,
			relativeMS: t,
		},
		endMetrics: {
			originalRangeMethod: e.endMetrics.originalRangeMethod,
			latestRangeMethod: e.endMetrics.latestRangeMethod,
			relativeMS: r,
		},
	};
}
export function UO() {
	return (0, n.useContext)(o).globalStartMS;
}
export function d7() {
	return (0, n.useContext)(o).globalEndMS;
}
export function d8() {
	return (0, n.useContext)(o).setRange;
}
export function nA() {
	return (0, n.useContext)(o).setStartMS;
}
export function eH() {
	return (0, n.useContext)(o).setEndMS;
}
export function eJ() {
	const e = (0, n.useContext)(o);
	return {
		selectedMarker: e.selectedMarker,
		setSelectedMarker: e.setSelectedMarker,
	};
}
export function Pm() {
	const e = (0, n.useContext)(o);
	return !isNaN(e.globalStartMS?.valMS) && !isNaN(e.globalEndMS?.valMS);
}
export function qm() {
	return (0, n.useContext)(o).clearSelection;
}
export function dK() {
	const e = d8();
	const t = nA();
	const r = eH();
	const a = _Z();
	const o = VM();
	const l = eb();
	return n.useCallback(
		(n, c, m, u) => {
			if (m === undefined && u === undefined) {
				return;
			}
			let d = a.nGlobalStartMS !== undefined || a.nGlobalEndMS !== undefined;
			let A = m || a.nGlobalStartMS;
			let p = u || a.nGlobalEndMS;
			if (A && p && p.valMS <= A.valMS) {
				if (m !== undefined) {
					p = undefined;
				} else {
					A = undefined;
				}
			}
			const g = s.nBeforeMS + s.nAfterMS;
			if (A === undefined) {
				A = (0, i.Sb)(p.valMS - g);
			}
			if (p === undefined) {
				p = (0, i.Sb)(A.valMS + g);
			}
			const h = A != a.nGlobalStartMS;
			const C = p != a.nGlobalEndMS;
			if (h && C) {
				e(c, A, p);
			} else if (h) {
				t(c, A);
			} else if (C) {
				r(c, p);
			}
			if (!d && h && C && o == 0) {
				l();
			}
		},
		[a, e, t, r, o, l],
	);
}
export function eb() {
	return (0, n.useContext)(o).zoomIntoSelection;
}
export function uq() {
	return (0, n.useContext)(o).zoomOutSelection;
}
export function VM() {
	return (0, n.useContext)(o).selectionZoomCount;
}
export function vv(e) {
	let t = (0, n.useContext)(o);
	let r = t.selectionZoomCount;
	let i = t.globalStartMS;
	let a = t.globalEndMS;
	let s = (0, n.useRef)(r);
	let l = (0, n.useRef)(null);
	l.current = e;
	(0, n.useEffect)(() => {
		if (!l.current) {
			return;
		}
		let e = !isNaN(i?.valMS) && !isNaN(a?.valMS);
		if (s.current != r || !e) {
			s.current = r;
			if (e && r) {
				l.current(i, a);
			} else {
				l.current(null, null);
			}
		}
	}, [r, i, a, s, l]);
}
