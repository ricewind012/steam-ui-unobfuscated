import { Localize } from "../../actual_src/utils/localization.js";
import r from "./63696.js";
import i from "./78325.js";
import s from "./90242.js";
import o from "./92251.js";
import a, { A } from "./90765.js";
import l from "./57447.js";
const u = l;
const MContext = r.createContext({});
const d = () => r.useContext(MContext);
export function ep(e) {
	const { targetElement, children } = e;
	const i = r.useMemo(
		() => ({
			targetElement: targetElement,
		}),
		[targetElement],
	);
	return r.createElement(
		MContext.Provider,
		{
			value: i,
		},
		children,
	);
}
export function C$(e) {
	const [t, n] = r.useState(null);
	const i = r.useMemo(
		() => ({
			targetElement: t,
		}),
		[t],
	);
	return r.createElement(
		MContext.Provider,
		{
			value: i,
		},
		r.createElement("div", {
			ref: n,
		}),
		e.children,
	);
}
export function he(e) {
	const { divProps, tooltipProps } = b({
		...e,
		toolTipContent: e.toolTipContent
			? r.createElement(zQ, null, C(e.toolTipContent))
			: null,
	});
	return r.createElement(
		s.ml,
		{
			className: "tool-tip-source",
			noFocusRing: true,
			focusable: e.bNavStop ?? !!divProps.onClick,
			...divProps,
		},
		r.createElement(B, {
			...tooltipProps,
		}),
		e.children,
	);
}
export function m9(e) {
	const { divProps, tooltipProps } = b(e);
	return r.createElement(
		s.ml,
		{
			className: "tool-tip-source",
			noFocusRing: true,
			focusable: e.bNavStop ?? !!divProps.onClick,
			...divProps,
		},
		r.createElement(B, {
			...tooltipProps,
		}),
		e.children,
	);
}
export function zs(e) {
	const { divProps, tooltipProps } = b(e);
	return r.createElement(
		"rect",
		{
			...divProps,
		},
		r.createElement(B, {
			...tooltipProps,
		}),
		e.children,
	);
}
export function Gq(e) {
	const { children } = e;
	const { divProps, tooltipProps } = b({
		...e,
		toolTipContent: e.toolTipContent
			? r.createElement(zQ, null, C(e.toolTipContent))
			: null,
	});
	return r.createElement(
		r.Fragment,
		null,
		r.cloneElement(children, {
			...divProps,
			...children.props,
		}),
		r.createElement(B, {
			...tooltipProps,
		}),
	);
}
function b(e) {
	const {
		toolTipContent,
		nDelayShowMS = 300,
		bDisabled,
		direction,
		nBodyAlignment,
		nBodyDistance,
		nAllowOffscreenPx,
		nMaxLateralMoveOnScreen,
		strTooltipClassname,
		bNavStop,
		bTopmost,
		children,
		...p
	} = e;
	const g = {
		direction: direction,
		nBodyAlignment: nBodyAlignment,
		nBodyDistance: nBodyDistance,
		nAllowOffscreenPx: nAllowOffscreenPx,
		nMaxLateralMoveOnScreen: nMaxLateralMoveOnScreen,
		className: strTooltipClassname,
		bTopmost: bTopmost,
	};
	const [f, _] = r.useState(false);
	const [w, b] = r.useState();
	return {
		divProps: {
			...p,
			onMouseEnter: r.useCallback((e) => {
				_(true);
				b(e.currentTarget);
			}, []),
			onMouseLeave: r.useCallback(() => {
				_(false);
			}, []),
		},
		stateHandlers: {
			setTarget: b,
			setHovered: _,
		},
		tooltipProps: {
			active: f && !bDisabled,
			target: w,
			nDelayShowMS: nDelayShowMS,
			hoverPositionProps: g,
			children: toolTipContent,
		},
	};
}
function C(e) {
	if (typeof e == "string") {
		return Localize(e);
	} else {
		return e;
	}
}
export function fS(e) {
	const { divProps, tooltipProps, stateHandlers } = b(e);
	return {
		divProps: divProps,
		stateHandlers: stateHandlers,
		tooltip: r.createElement(B, {
			...tooltipProps,
		}),
	};
}
export function zQ(e) {
	return r.createElement("div", {
		...e,
		className: A(u.TextToolTip, e.className),
	});
}
export function t1(e) {
	const { className, ...n } = e;
	return r.createElement("div", {
		className: A(u.ToolTipCustom, className),
		...n,
	});
}
export function MA(e) {
	const { className, center, ...i } = e;
	return r.createElement("div", {
		className: A(u.ToolTipTitle, center ? u.Center : "", className),
		...i,
	});
}
export function I2(e) {
	const { className, ...n } = e;
	return r.createElement("div", {
		className: A(u.ToolTipInsetContent, className),
		...n,
	});
}
function B(e) {
	const {
		active,
		target,
		nDelayShowMS = 300,
		hoverPositionProps,
		children,
	} = e;
	const [l, u] = r.useState(active);
	const m = d();
	r.useEffect(() => {
		if (active) {
			if (nDelayShowMS) {
				const e = window.setTimeout(() => u(true), nDelayShowMS);
				return () => window.clearTimeout(e);
			}
			u(true);
		} else {
			u(false);
		}
	}, [active]);
	if (!l) {
		return null;
	}
	if (!children || !target) {
		return null;
	}
	const { targetElement } = m;
	return i.createPortal(
		r.createElement(
			o.g,
			{
				target: target,
				...hoverPositionProps,
			},
			children,
		),
		targetElement ?? target.ownerDocument.body,
	);
}
const x = "DEBUG_StickyHovers";
export function Vr(e) {
	if (e) {
		window.sessionStorage.setItem(x, "true");
	} else {
		window.sessionStorage.removeItem(x);
	}
}
