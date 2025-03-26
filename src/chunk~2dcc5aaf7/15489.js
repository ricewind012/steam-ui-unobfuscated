var n = require(/*webcrack:missing*/ "./69164.js");
var i = require("./91745.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./78325.js");
var o = require(/*webcrack:missing*/ "./92251.js");
var l = require(/*webcrack:missing*/ "./42318.js");
import { GetOwningWindowForElement } from "../../actual_src/utils/domutils.js";
var m = require(/*webcrack:missing*/ "./72476.js");
const u = 300;
const d = 80;
const A = 1000;
var p;
export function z(e) {
	const {
		renderHover: t,
		hoverDelay: r = u,
		hoverHideDelay: s = d,
		visibilityObserver: o,
		bInteractiveHover: l,
		bOnlyIfOverflowing: g,
		bDisabled: _,
		direction: f,
		nBodyAlignment: b,
		nBodyDistance: y,
		nAllowOffscreenPx: S,
		nMaxLateralMoveOnScreen: w,
		onMouseEnter: B,
		onMouseLeave: v,
		onButtonDown: I,
		onButtonUp: E,
		onContextMenu: M,
		showFocusRing: T,
		children: R,
		...k
	} = e;
	const D = (0, m.Qn)();
	const [N, F] = a.useState(p.kHidden);
	const [G, O] = a.useState();
	a.useEffect(() => {
		C(window);
	}, []);
	const P = a.useCallback((e) => {
		const t = e.currentTarget;
		F((e) =>
			e == p.kVisible
				? e
				: e == p.kWaitingToHide
					? p.kVisible
					: p.kWaitingToShow,
		);
		O((e) => e || t);
	}, []);
	a.useEffect(() => {
		if (N != p.kWaitingToShow) {
			return;
		}
		const e = (function (e) {
			const t = e;
			C(e);
			return Date.now() - t.lastScrollTime;
		})(GetOwningWindowForElement(G));
		const t = Math.max(0, r, A - e);
		const n = window.setTimeout(() => F(p.kVisible), t);
		return () => window.clearInterval(n);
	}, [N, r, G]);
	const L = a.useCallback(() => {
		F((e) => (e == p.kHidden ? e : p.kWaitingToHide));
	}, []);
	a.useEffect(() => {
		if (N != p.kWaitingToHide) {
			return;
		}
		const e = window.setTimeout(() => {
			F(p.kHidden);
			O(undefined);
		}, s);
		return () => window.clearInterval(e);
	}, [N, s]);
	const z = D;
	const x = N == p.kVisible || N == p.kWaitingToHide;
	return a.createElement(
		n.Z,
		{
			...k,
			noFocusRing: !T,
			focusable: !!k.onClick,
			onActivate: k.onClick,
			onButtonDown: I,
			onButtonUp: E,
			onMenuButton: M,
			onContextMenu: M,
			onMouseEnter:
				z || e.bDisabled
					? null
					: (t) => {
							if (B) {
								B(t);
							}
							if (
								!e.bOnlyIfOverflowing ||
								!(function (e) {
									const t = e.parentElement;
									const r = e.offsetLeft;
									const n = e.offsetTop;
									const i = r + e.offsetWidth;
									const a = n + e.offsetHeight;
									const s = t.scrollLeft;
									const o = t.scrollTop;
									const l = s + t.clientWidth;
									const c = o + t.clientHeight;
									return r >= s && i <= l && n >= o && a <= c;
								})(t.currentTarget)
							) {
								P(t);
							}
						},
			onMouseLeave: (e) => {
				if (v) {
					v(e);
				}
				if (!i.hG.GetToggle(0)) {
					L();
				}
			},
		},
		x &&
			a.createElement(h, {
				visibilityObserver: o,
				renderHover: t,
				bInteractiveHover: l,
				direction: f,
				nBodyAlignment: b,
				nBodyDistance: y,
				nAllowOffscreenPx: S,
				nMaxLateralMoveOnScreen: w,
				eventTarget: G,
			}),
		R,
	);
}
function h(e) {
	const { renderHover: t, eventTarget: r } = e;
	const n = a.useMemo(() => t(), [t]);
	if (!n) {
		return null;
	}
	const i = {
		target: r,
		bEnablePointerEvents: e.bInteractiveHover,
		direction: e.direction,
		nBodyAlignment: e.nBodyAlignment,
		nBodyDistance: e.nBodyDistance,
		nAllowOffscreenPx: e.nAllowOffscreenPx,
		nMaxLateralMoveOnScreen: e.nMaxLateralMoveOnScreen,
		visibilityObserver: e.visibilityObserver,
	};
	return s.createPortal(
		a.createElement(
			o.g,
			{
				...i,
			},
			a.createElement("div", null, a.createElement(l.tH, null, n)),
		),
		r.ownerDocument.body,
	);
}
function C(e) {
	const t = e;
	if (t.libraryScrollListener !== _) {
		t.removeEventListener("mousewheel", t.libraryScrollListener);
		t.addEventListener("mousewheel", _);
		t.libraryScrollListener = _;
		t.lastScrollTime = 0;
	}
}
function _(e) {
	if (e.view) {
		e.view.lastScrollTime = Date.now();
	}
}
(function (e) {
	e[(e.kHidden = 0)] = "kHidden";
	e[(e.kVisible = 1)] = "kVisible";
	e[(e.kWaitingToShow = 2)] = "kWaitingToShow";
	e[(e.kWaitingToHide = 3)] = "kWaitingToHide";
})((p ||= {}));
