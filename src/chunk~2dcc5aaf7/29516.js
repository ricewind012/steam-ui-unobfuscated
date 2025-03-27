import n, { useEffect, useContext, useRef } from "./63696.js";
import i, { Sb } from "./72061.js";
import a, { aO } from "./92374.js";
const s = {
	nBeforeMS: 0,
	nAfterMS: 12000,
};
const OContext = n.createContext({
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
	const { children, loader } = e;
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
	const I = aO();
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
		y(e.valMS > 0 ? e : Sb(0));
	}, []);
	const T = n.useCallback(
		(e) => {
			const t = loader.GetGlobalTimelineEndMS();
			w(e.valMS < t.valMS ? e : t);
		},
		[loader],
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
			l(t.valMS > 0 ? t : Sb(0));
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
			const n = loader.GetGlobalTimelineEndMS();
			m(t.valMS < n.valMS ? t : n);
		},
		[loader, _, g],
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
	useEffect(() => () => E(), [E, loader]);
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
				F(2, Sb(Math.max(0, r)), Sb(n));
			},

			clearSelection: E,
			selectionZoomCount: B,
			zoomIntoSelection: G,
			zoomOutSelection: O,
		}),
		[s, b, S, c, u, A, h, _, D, N, F, R, k, E, B, O, G],
	);
	return <OContext.Provider value={P}>{children}</OContext.Provider>;
}
export function _Z() {
	const e = useContext(OContext);
	return {
		nGlobalStartMS: e.globalStartMS,
		nGlobalEndMS: e.globalEndMS,
	};
}
export function pH() {
	const e = useContext(OContext);
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
	return useContext(OContext).globalStartMS;
}
export function d7() {
	return useContext(OContext).globalEndMS;
}
export function d8() {
	return useContext(OContext).setRange;
}
export function nA() {
	return useContext(OContext).setStartMS;
}
export function eH() {
	return useContext(OContext).setEndMS;
}
export function eJ() {
	const e = useContext(OContext);
	return {
		selectedMarker: e.selectedMarker,
		setSelectedMarker: e.setSelectedMarker,
	};
}
export function Pm() {
	const e = useContext(OContext);
	return !isNaN(e.globalStartMS?.valMS) && !isNaN(e.globalEndMS?.valMS);
}
export function qm() {
	return useContext(OContext).clearSelection;
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
				A = Sb(p.valMS - g);
			}
			if (p === undefined) {
				p = Sb(A.valMS + g);
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
	return useContext(OContext).zoomIntoSelection;
}
export function uq() {
	return useContext(OContext).zoomOutSelection;
}
export function VM() {
	return useContext(OContext).selectionZoomCount;
}
export function vv(e) {
	let t = useContext(OContext);

	let { selectionZoomCount, globalStartMS, globalEndMS } = t;

	let s = useRef(selectionZoomCount);
	let l = useRef(null);
	l.current = e;
	useEffect(() => {
		if (!l.current) {
			return;
		}
		let e = !isNaN(globalStartMS?.valMS) && !isNaN(globalEndMS?.valMS);
		if (s.current != selectionZoomCount || !e) {
			s.current = selectionZoomCount;
			if (e && selectionZoomCount) {
				l.current(globalStartMS, globalEndMS);
			} else {
				l.current(null, null);
			}
		}
	}, [selectionZoomCount, globalStartMS, globalEndMS, s, l]);
}
