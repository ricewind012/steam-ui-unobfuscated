import n, { useEffect } from "./63696.js";
import i from "./4452.js";
import s from "./83599.js";
import o, { Qn } from "./72476.js";
import l from "./61050.js";
import c, { bJ } from "./3524.js";
import m, { QI } from "./35560.js";
import u from "./28869.js";
import d from "./18402.js";
import p, { D5 } from "./28864.js";
import { qR } from "./84252.js";
const a = i;
const A = d;
const h = new s.wd("FocusNavigation").Debug;
export function Q(e) {
	const { children, ...r } = e;
	const [i, setI] = n.useState({
		bFocusWithin: false,
		navTarget: null,
		prevTarget: null,
	});
	const SRef = n.useRef(null);
	const o = n.useMemo(
		() => ({
			OnBlur: (e, t, r) => {
				setI({
					bFocusWithin: false,
					navTarget: null,
					prevTarget: null,
				});
			},

			OnFocus: (e, t, r) => {
				setI({
					bFocusWithin: true,
					navTarget: t,
					prevTarget: null,
				});
			},

			OnFocusChange: (e, t, r) => {
				setI({
					bFocusWithin: true,
					navTarget: r,
					prevTarget: t,
				});
			},

			OnForceMeasureFocusRing: () => {
				SRef.current?.MeasureElementAndUpdate();
			},
		}),
		[setI],
	);
	return (
		<>
			<_ {...r} {...i} refMeasure={SRef} />
			<u.sQ.Provider value={o}>{children}</u.sQ.Provider>
		</>
	);
}
function _(e) {
	const { rootClassName, className, bFocusWithin, navTarget, refMeasure } = e;
	const [u, setU] = n.useState(null);
	const p = QI();
	const g = Qn();
	const h = bJ(false);
	if (g || h) {
		return (
			<div className={a(A.FocusRingRoot, rootClassName)} ref={setU}>
				<F
					refMeasure={refMeasure}
					className={a(className, p && A.DebugFocusRing)}
					bFocusWithin={bFocusWithin && (h || p)}
					navTarget={navTarget}
					elContainer={u}
					bDebug={p}
				/>
			</div>
		);
	} else {
		return null;
	}
}
function F(e) {
	const {
		className,
		bFocusWithin,
		navTarget,
		elContainer,
		bDebug,
		refMeasure,
	} = e;
	const [c, setC] = n.useState(null);
	const [uState, dDispatch] = n.useReducer((e) => e + 1, 0);
	const [CState, _Dispatch] = n.useReducer((e) => e + 1, 0);
	D5(
		refMeasure,
		n.useMemo(
			() => ({
				MeasureElementAndUpdate: _Dispatch,
			}),
			[],
		),
	);
	const { bActiveTree, bDisableFocusClasses } = qR();
	const S = bActiveTree && !bDisableFocusClasses;
	const w = ((e, t) => {
		const [r, setR] = n.useState(false);
		useEffect(() => {
			if (e && t) {
				let e = t.GetBoundingRect();
				let t_Element = t.Element;
				const n = t_Element.ownerDocument.defaultView;
				const a = (t) =>
					n.getComputedStyle(t).display == "none" ||
					(e?.width == 0 && e.height == 0 && e.x == 0 && e.y == 0);
				while (a(t_Element) && t_Element?.parentElement) {
					t_Element = t_Element.parentElement;
					e = t_Element.getBoundingClientRect();
				}
				let s = t.Element != t_Element;
				setR((e) => {
					if (s && s != e) {
						h(
							"Focused on hidden item: ",
							t.Element,
							". Closest visible ancestor: ",
							t_Element,
						);
					}
					return s;
				});
			}
		}, [e, t]);
		return r;
	})(bDebug, navTarget);
	const B = n.useCallback(() => {
		if (
			!navTarget ||
			!navTarget.BWantsFocusRing() ||
			!navTarget.BWantsFocusRing() ||
			!elContainer ||
			!navTarget.BWantsFocusRing() ||
			!elContainer ||
			!S
		) {
			setC(null);
			return;
		}
		let e = navTarget.GetBoundingRect();
		const t = elContainer.getBoundingClientRect();
		const r = {
			left: e.x - t.x,
			top: e.y - t.y,
			height: e.height,
			width: e.width,
		};
		setC((e) =>
			e &&
			r.left == e.left &&
			r.top == e.top &&
			r.height == e.height &&
			r.width == e.width
				? e
				: r,
		);
	}, [navTarget, elContainer, S]);
	n.useLayoutEffect(() => B(), [B]);
	n.useLayoutEffect(() => {
		dDispatch();
	}, [navTarget]);
	let v = bFocusWithin;
	if (navTarget && elContainer) {
		if (!navTarget.BWantsFocusRing()) {
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
	}, [v, B, c, CState]);
	if (v && c) {
		return (
			<Y
				{...c}
				key={uState}
				className={a(className, w && A.FocusRingOnHiddenItem)}
				target={navTarget}
			/>
		);
	} else {
		return null;
	}
}
export function g(e) {
	const { children } = e;
	if (QI()) {
		return <Q>{children}</Q>;
	} else {
		return <u.sQ.Provider value={l.CZ}>{children}</u.sQ.Provider>;
	}
}
function Y(e) {
	const { className, left, top, height, width, target } = e;
	const c = {
		left: `${(left ?? 0) - 0}px`,
		top: `${(top ?? 0) - 0}px`,
		height: `${height}px`,
		width: `${width}px`,
	};
	return <div className={a(A.FocusRing, className)} style={c} />;
}
