var r = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./78325.js");
var s = require("./90242.js");
var o = require("./92251.js");
var a = require("./90765.js");
var c = require("./46108.js");
var l = require("./57447.js");
var u = l;
const m = r.createContext({});
const d = () => r.useContext(m);
export function ep(e) {
	const { targetElement: t, children: n } = e;
	const i = r.useMemo(
		() => ({
			targetElement: t,
		}),
		[t],
	);
	return r.createElement(
		m.Provider,
		{
			value: i,
		},
		n,
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
		m.Provider,
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
	const { divProps: t, tooltipProps: n } = b({
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
			focusable: e.bNavStop ?? !!t.onClick,
			...t,
		},
		r.createElement(B, {
			...n,
		}),
		e.children,
	);
}
export function m9(e) {
	const { divProps: t, tooltipProps: n } = b(e);
	return r.createElement(
		s.ml,
		{
			className: "tool-tip-source",
			noFocusRing: true,
			focusable: e.bNavStop ?? !!t.onClick,
			...t,
		},
		r.createElement(B, {
			...n,
		}),
		e.children,
	);
}
export function zs(e) {
	const { divProps: t, tooltipProps: n } = b(e);
	return r.createElement(
		"rect",
		{
			...t,
		},
		r.createElement(B, {
			...n,
		}),
		e.children,
	);
}
export function Gq(e) {
	const { children: t } = e;
	const { divProps: n, tooltipProps: i } = b({
		...e,
		toolTipContent: e.toolTipContent
			? r.createElement(zQ, null, C(e.toolTipContent))
			: null,
	});
	return r.createElement(
		r.Fragment,
		null,
		r.cloneElement(t, {
			...n,
			...t.props,
		}),
		r.createElement(B, {
			...i,
		}),
	);
}
function b(e) {
	const {
		toolTipContent: t,
		nDelayShowMS: n = 300,
		bDisabled: i,
		direction: s,
		nBodyAlignment: o,
		nBodyDistance: a,
		nAllowOffscreenPx: c,
		nMaxLateralMoveOnScreen: l,
		strTooltipClassname: u,
		bNavStop: m,
		bTopmost: d,
		children: h,
		...p
	} = e;
	const g = {
		direction: s,
		nBodyAlignment: o,
		nBodyDistance: a,
		nAllowOffscreenPx: c,
		nMaxLateralMoveOnScreen: l,
		className: u,
		bTopmost: d,
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
			active: f && !i,
			target: w,
			nDelayShowMS: n,
			hoverPositionProps: g,
			children: t,
		},
	};
}
function C(e) {
	if (typeof e == "string") {
		return (0, c.we)(e);
	} else {
		return e;
	}
}
export function fS(e) {
	const { divProps: t, tooltipProps: n, stateHandlers: i } = b(e);
	return {
		divProps: t,
		stateHandlers: i,
		tooltip: r.createElement(B, {
			...n,
		}),
	};
}
export function zQ(e) {
	return r.createElement("div", {
		...e,
		className: (0, a.A)(u.TextToolTip, e.className),
	});
}
export function t1(e) {
	const { className: t, ...n } = e;
	return r.createElement("div", {
		className: (0, a.A)(u.ToolTipCustom, t),
		...n,
	});
}
export function MA(e) {
	const { className: t, center: n, ...i } = e;
	return r.createElement("div", {
		className: (0, a.A)(u.ToolTipTitle, n ? u.Center : "", t),
		...i,
	});
}
export function I2(e) {
	const { className: t, ...n } = e;
	return r.createElement("div", {
		className: (0, a.A)(u.ToolTipInsetContent, t),
		...n,
	});
}
function B(e) {
	const {
		active: t,
		target: n,
		nDelayShowMS: s = 300,
		hoverPositionProps: a,
		children: c,
	} = e;
	const [l, u] = r.useState(t);
	const m = d();
	r.useEffect(() => {
		if (t) {
			if (s) {
				const e = window.setTimeout(() => u(true), s);
				return () => window.clearTimeout(e);
			}
			u(true);
		} else {
			u(false);
		}
	}, [t]);
	if (!l) {
		return null;
	}
	if (!c || !n) {
		return null;
	}
	const { targetElement: h } = m;
	return i.createPortal(
		r.createElement(
			o.g,
			{
				target: n,
				...a,
			},
			c,
		),
		h ?? n.ownerDocument.body,
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
