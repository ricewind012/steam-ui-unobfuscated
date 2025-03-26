import { GetOwningWindowForElement } from "../../actual_src/utils/domutils.js";
var i = require("./74292.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./31958.js");
var o = require("./65844.js");
var l = require(/*webcrack:missing*/ "./90095.js");
var c = require("./72061.js");
const m = a.createContext({
	bInContainer: false,
	bContainerFocus: false,
	nMouseClientXPX: null,
	globalMouseXPX: null,
	scrollWindowMouseXPX: null,
	fnRegisterMouseEvent: null,
	bContextMenuOpen: false,
	setContextMenuOpen: () => {},
});
export function RF(e) {
	const { children: t } = e;
	const [r, u] = (0, a.useState)(false);
	const [d, A] = (0, a.useState)(false);
	const [p, g] = (0, a.useState)(false);
	const [h, C] = (0, a.useState)();
	const _ = (0, a.useRef)();
	const f = (0, o.uR)();
	const b = (0, l.q3)(() => f.GetScrollableWidthPX());
	const y = (0, l.q3)(() => f.GetVisualWindowStartPX());
	const S = (0, l.q3)(() => f.GetScrollWindowWidth());
	const w = (0, l.q3)(() => f.GetScrollWindowOffset());
	const B = (0, l.q3)(() => f.GetTimelineMarginWidth());
	const v = a.useMemo(() => {
		if (_.current) {
			const e = y - w - B;
			return (0, c.OB)(s.OQ(h + e, 0, b));
		}
		return (0, c.OB)(0);
	}, [B, h, w, y, b]);
	const I = a.useMemo(() => {
		if (_.current) {
			const e = _.current.getBoundingClientRect();
			const t = b > S ? w : e.x;
			return (0, c.QP)(s.OQ(h - t, 0, S));
		}
		return (0, c.QP)(0);
	}, [h, w, S, b]);
	const E = (0, a.useCallback)((e, t) => {
		if (_.current) {
			_.current.addEventListener(e, t);
		}
		return () => _.current?.removeEventListener(e, t);
	}, []);
	const M = (0, a.useCallback)(() => u(true), []);
	const T = (0, a.useCallback)(() => u(false), []);
	const R = (0, a.useCallback)((e) => C(e.clientX), []);
	const k = (0, a.useCallback)((e) => A(true), []);
	const D = (0, a.useCallback)((e) => A(false), []);
	(0, a.useEffect)(() => {
		const e = GetOwningWindowForElement(_.current);
		e.addEventListener("mousemove", R);
		return () => e.removeEventListener("mousemove", R);
	}, [R]);
	const N = (0, a.useMemo)(
		() => ({
			bContainerFocus: d,
			bInContainer: r,
			nMouseClientXPX: h,
			globalMouseXPX: v,
			scrollWindowMouseXPX: I,
			fnRegisterMouseEvent: E,
			bContextMenuOpen: p,
			setContextMenuOpen: g,
		}),
		[d, r, p, h, v, I, E],
	);
	return a.createElement(
		m.Provider,
		{
			value: N,
		},
		a.createElement(
			"div",
			{
				ref: _,
				onMouseOver: k,
				onFocus: k,
				onMouseOut: D,
				onBlur: D,
				onMouseEnter: M,
				onMouseLeave: T,
				className: i.MouseListenerContainer,
			},
			t,
		),
	);
}
export function yR() {
	return (0, a.useContext)(m);
}
export function xS() {
	return yR().globalMouseXPX;
}
export function FV() {
	return yR().scrollWindowMouseXPX;
}
export function VF() {
	return yR().bInContainer;
}
export function wJ() {
	return yR().bContainerFocus;
}
export function fR() {
	const e = yR();
	return [e.bContextMenuOpen, e.setContextMenuOpen];
}
export function gZ(e, t) {
	const r = yR().fnRegisterMouseEvent;
	const n = (0, a.useRef)();
	const i = (0, a.useCallback)(() => {
		n.current = r(e, t);
	}, [r, t, e]);
	const s = (0, a.useCallback)(() => {
		if (n.current) {
			n.current();
		}
	}, []);
	(0, a.useEffect)(() => {
		i();
		return () => s();
	}, [i, s]);
}
