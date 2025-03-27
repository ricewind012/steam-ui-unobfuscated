import { GetOwningWindowForElement } from "../../actual_src/utils/domutils.js";
import n from "./69164.js";
import i from "./91745.js";
import a from "./63696.js";
import s from "./78325.js";
import o from "./92251.js";
import l from "./42318.js";
import { Qn } from "./72476.js";
const u = 300;
const d = 80;
const A = 1000;
let p;
export function z(e) {
	const {
		renderHover,
		hoverDelay = u,
		hoverHideDelay = d,
		visibilityObserver,
		bInteractiveHover,
		bOnlyIfOverflowing,
		bDisabled,
		direction,
		nBodyAlignment,
		nBodyDistance,
		nAllowOffscreenPx,
		nMaxLateralMoveOnScreen,
		onMouseEnter,
		onMouseLeave,
		onButtonDown,
		onButtonUp,
		onContextMenu,
		showFocusRing,
		children,
		...k
	} = e;
	const D = Qn();
	const [N, setN] = a.useState(p.kHidden);
	const [G, setG] = a.useState();
	a.useEffect(() => {
		C(window);
	}, []);
	const P = a.useCallback((e) => {
		const e_currentTarget = e.currentTarget;
		setN((e) =>
			e == p.kVisible
				? e
				: e == p.kWaitingToHide
					? p.kVisible
					: p.kWaitingToShow,
		);
		setG((e) => e || e_currentTarget);
	}, []);
	a.useEffect(() => {
		if (N != p.kWaitingToShow) {
			return;
		}
		const e = ((e) => {
			const t = e;
			C(e);
			return Date.now() - t.lastScrollTime;
		})(GetOwningWindowForElement(G));
		const t = Math.max(0, hoverDelay, A - e);
		const n = window.setTimeout(() => setN(p.kVisible), t);
		return () => window.clearInterval(n);
	}, [N, hoverDelay, G]);
	const L = a.useCallback(() => {
		setN((e) => (e == p.kHidden ? e : p.kWaitingToHide));
	}, []);
	a.useEffect(() => {
		if (N != p.kWaitingToHide) {
			return;
		}
		const e = window.setTimeout(() => {
			setN(p.kHidden);
			setG(undefined);
		}, hoverHideDelay);
		return () => window.clearInterval(e);
	}, [N, hoverHideDelay]);
	const z = D;
	const x = N == p.kVisible || N == p.kWaitingToHide;
	return (
		<n.Z
			{...k}
			noFocusRing={!showFocusRing}
			focusable={!!k.onClick}
			onActivate={k.onClick}
			onButtonDown={onButtonDown}
			onButtonUp={onButtonUp}
			onMenuButton={onContextMenu}
			onContextMenu={onContextMenu}
			onMouseEnter={
				z ||
				e.bDisabled ||
				((t) => {
					if (onMouseEnter) {
						onMouseEnter(t);
					}
					if (
						!e.bOnlyIfOverflowing ||
						!((e) => {
							const { parentElement, offsetLeft, offsetTop } = e;

							const i = offsetLeft + e.offsetWidth;
							const a = offsetTop + e.offsetHeight;

							const { scrollLeft, scrollTop } = parentElement;

							const l = scrollLeft + parentElement.clientWidth;
							const c = scrollTop + parentElement.clientHeight;
							return (
								offsetLeft >= scrollLeft &&
								i <= l &&
								offsetTop >= scrollTop &&
								a <= c
							);
						})(t.currentTarget)
					) {
						P(t);
					}
				})
			}
			onMouseLeave={(e) => {
				if (onMouseLeave) {
					onMouseLeave(e);
				}
				if (!i.hG.GetToggle(0)) {
					L();
				}
			}}
		>
			{x && (
				<H
					visibilityObserver={visibilityObserver}
					renderHover={renderHover}
					bInteractiveHover={bInteractiveHover}
					direction={direction}
					nBodyAlignment={nBodyAlignment}
					nBodyDistance={nBodyDistance}
					nAllowOffscreenPx={nAllowOffscreenPx}
					nMaxLateralMoveOnScreen={nMaxLateralMoveOnScreen}
					eventTarget={G}
				/>
			)}
			{children}
		</n.Z>
	);
}
function H(e) {
	const { renderHover, eventTarget } = e;
	const n = a.useMemo(() => renderHover(), [renderHover]);
	if (!n) {
		return null;
	}
	const i = {
		target: eventTarget,
		bEnablePointerEvents: e.bInteractiveHover,
		direction: e.direction,
		nBodyAlignment: e.nBodyAlignment,
		nBodyDistance: e.nBodyDistance,
		nAllowOffscreenPx: e.nAllowOffscreenPx,
		nMaxLateralMoveOnScreen: e.nMaxLateralMoveOnScreen,
		visibilityObserver: e.visibilityObserver,
	};
	return s.createPortal(
		<o.g {...i}>
			<div>
				<l.tH>{n}</l.tH>
			</div>
		</o.g>,
		eventTarget.ownerDocument.body,
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
((e) => {
	e[(e.kHidden = 0)] = "kHidden";
	e[(e.kVisible = 1)] = "kVisible";
	e[(e.kWaitingToShow = 2)] = "kWaitingToShow";
	e[(e.kWaitingToHide = 3)] = "kWaitingToHide";
})((p ||= {}));
