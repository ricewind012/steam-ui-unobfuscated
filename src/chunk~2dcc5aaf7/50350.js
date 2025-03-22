var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./30780.js");
var s = a;
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require("./6242.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require("./21105.js");
var u = require(/*webcrack:missing*/ "./69164.js");
var d = require(/*webcrack:missing*/ "./4690.js");
var A = require("./33572.js");
var p = require("./57421.js");
var g = require("./46422.js");
var h = require("./34792.js");
var C = require("./31800.js");
export const QK = Number.parseInt(s["gamepad-page-content-max-width-default"]);
const f = Number.parseInt(s["gamepad-page-content-min-gutter-width"]);
export function Cn(e, t) {
	const [r] = (0, p.W1)();
	const [i, a] = n.useState(
		g.oy.ActiveWindowInstance?.BrowserWindow?.outerWidth ?? 0,
	);
	n.useEffect(() => {
		g.oy.ActiveWindowInstance?.BrowserWindow?.addEventListener("resize", () =>
			a(g.oy.ActiveWindowInstance?.BrowserWindow.outerWidth),
		);
		return () => {
			g.oy.ActiveWindowInstance?.BrowserWindow?.removeEventListener(
				"resize",
				() => a(g.oy.ActiveWindowInstance?.BrowserWindow.outerWidth),
			);
		};
	}, []);
	const s = h.rV.settings?.flCurrentDisplayScaleFactor;
	const o = s * i > r + f * 2;
	const l = e && o ? (t ?? r) : Number.MAX_SAFE_INTEGER;
	return [l, e && o ? Math.max(i - l, 0) / 2 : 0];
}
export const Jr = n.forwardRef(function (e, t) {
	const {
		padForHeader: r,
		padForFooter: i,
		headerVisibility: a,
		minimumOpacity: g,
		scrollable: h,
		background: C,
		children: _,
		flexed: f,
		contentMaxWidth: y,
		...S
	} = e;
	const w = e.padForHeader ?? true;
	const B = e.padForFooter ?? true;
	const v = e.scrollable ?? true;
	const I = e.headerVisibility ?? "opaque";
	const E = e.flexed ?? true;
	const [M] = (0, p.Vg)();
	const T = M && y != "full-width";
	const [R, k] = Cn(T, y != "full-width" ? y : Number.MAX_SAFE_INTEGER);
	const D = n.useRef(undefined);
	(function (e, t, r, i) {
		const a = (0, A.we)();
		const s = (0, l.x)(
			t == "default" ? undefined : a.m_Opacity,
			"useHeaderOpacitiesForGamepadPage",
		);
		const o = (0, l.x)(
			t == "default" ? undefined : a.m_BackgroundOpacity,
			"useHeaderOpacitiesForGamepadPage",
		);
		const m = n.useCallback(() => {
			if (t == "default") {
				return;
			}
			const n = e.current?.scrollTop ?? 0;
			let a = Math.max(0, Math.min(1, n / r));
			if (i) {
				a = i + a * (1 - i);
			}
			s.Set(t == "fadeInOnScroll" ? a : 1);
			o.Set(t == "fadeInBackgroundOnScroll" ? a : 1);
		}, [s, o, e, r, t, i]);
		n.useEffect(m, [m]);
		(0, c.ML)(t == "opaque" || t == "default" ? null : e, "scroll", m);
	})(D, I, 130, e.minimumOpacity);
	const N = (0, c.Ue)(t, D);
	const F = (0, o.A)(
		s.GamepadPage,
		w && s.PadForHeader,
		B && s.PadForFooter,
		E && s.Flexed,
		!v && s.OverflowHidden,
		e.background == "dialog" && s.DialogBackground,
		e.className,
	);
	const G = {
		"--gamepad-page-content-max-width": `${R}px`,
		...e.style,
	};
	if (v) {
		return n.createElement(
			m.MS,
			{
				ref: N,
				scrollIntoViewType: d.Yo.NoTransform,
				...S,
				className: F,
				style: G,
			},
			e.children,
		);
	} else {
		return n.createElement(
			u.Z,
			{
				ref: N,
				...S,
				className: F,
				style: G,
			},
			e.children,
		);
	}
});
export const Sw = n.forwardRef(function (e, t) {
	const { children: r, dialogContentPadding: a, ...l } = e;
	const c = a ?? "all";
	const m = (0, o.A)(
		s.GamepadPageDialogContent,
		(c == "none" || c == "horizontal") && s.NoVerticalPadding,
		(c == "none" || c == "vertical") && s.NoHorizontalPadding,
		l.contentMaxWidth == "full-width" && s.FullWidth,
	);
	return n.createElement(
		Jr,
		{
			background: "dialog",
			ref: t,
			...l,
		},
		n.createElement(
			i.UC,
			{
				className: m,
			},
			r,
		),
	);
});
export function dj(e) {
	(0, C.Mi)(1, "GamepadPagedSettingsPage");
	return n.createElement(Sw, {
		scrollable: false,
		padForHeader: false,
		padForFooter: false,
		dialogContentPadding: "none",
		headerVisibility: "default",
		...e,
	});
}
