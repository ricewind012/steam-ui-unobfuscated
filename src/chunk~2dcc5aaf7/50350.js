import n from "./63696.js";
import i from "./64608.js";
import a from "./30780.js";
import o, { A as A_1 } from "./90765.js";
import l, { x } from "./6242.js";
import c, { ML, Ue } from "./52451.js";
import m from "./21105.js";
import u from "./69164.js";
import d from "./4690.js";
import A, { we } from "./33572.js";
import { W1, Vg } from "./57421.js";
import g from "./46422.js";
import h from "./34792.js";
import C, { Mi } from "./31800.js";
const s = a;
export const QK = Number.parseInt(s["gamepad-page-content-max-width-default"]);
const f = Number.parseInt(s["gamepad-page-content-min-gutter-width"]);
export function Cn(e, t) {
	const [r] = W1();
	const [i, setI] = n.useState(
		g.oy.ActiveWindowInstance?.BrowserWindow?.outerWidth ?? 0,
	);
	n.useEffect(() => {
		g.oy.ActiveWindowInstance?.BrowserWindow?.addEventListener("resize", () =>
			setI(g.oy.ActiveWindowInstance?.BrowserWindow.outerWidth),
		);
		return () => {
			g.oy.ActiveWindowInstance?.BrowserWindow?.removeEventListener(
				"resize",
				() => setI(g.oy.ActiveWindowInstance?.BrowserWindow.outerWidth),
			);
		};
	}, []);
	const s = h.rV.settings?.flCurrentDisplayScaleFactor;
	const o = s * i > r + f * 2;
	const l = e && o ? (t ?? r) : Number.MAX_SAFE_INTEGER;
	return [l, e && o ? Math.max(i - l, 0) / 2 : 0];
}
export const Jr = n.forwardRef((props, ref) => {
	const {
		padForHeader,
		padForFooter,
		headerVisibility,
		minimumOpacity,
		scrollable,
		background,
		children,
		flexed,
		contentMaxWidth,
		...S
	} = props;
	const w = props.padForHeader ?? true;
	const B = props.padForFooter ?? true;
	const v = props.scrollable ?? true;
	const I = props.headerVisibility ?? "opaque";
	const E = props.flexed ?? true;
	const [M] = Vg();
	const T = M && contentMaxWidth != "full-width";
	const [R, k] = Cn(
		T,
		contentMaxWidth != "full-width" ? contentMaxWidth : Number.MAX_SAFE_INTEGER,
	);
	const DRef = n.useRef(undefined);
	((e, t, r, i) => {
		const a = we();
		const s = x(
			t == "default" || a.m_Opacity,
			"useHeaderOpacitiesForGamepadPage",
		);
		const o = x(
			t == "default" || a.m_BackgroundOpacity,
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
		ML(t == "opaque" || t == "default" || e, "scroll", m);
	})(DRef, I, 130, props.minimumOpacity);
	const N = Ue(ref, DRef);
	const F = A_1(
		s.GamepadPage,
		w && s.PadForHeader,
		B && s.PadForFooter,
		E && s.Flexed,
		!v && s.OverflowHidden,
		props.background == "dialog" && s.DialogBackground,
		props.className,
	);
	const G = {
		"--gamepad-page-content-max-width": `${R}px`,
		...props.style,
	};
	if (v) {
		return (
			<m.MS
				ref={N}
				scrollIntoViewType={d.Yo.NoTransform}
				{...S}
				className={F}
				style={G}
			>
				{props.children}
			</m.MS>
		);
	} else {
		return (
			<u.Z ref={N} {...S} className={F} style={G}>
				{props.children}
			</u.Z>
		);
	}
});
export const Sw = n.forwardRef((props, ref) => {
	const { children, dialogContentPadding, ...l } = props;
	const c = dialogContentPadding ?? "all";
	const m = A_1(
		s.GamepadPageDialogContent,
		(c == "none" || c == "horizontal") && s.NoVerticalPadding,
		(c == "none" || c == "vertical") && s.NoHorizontalPadding,
		l.contentMaxWidth == "full-width" && s.FullWidth,
	);
	return (
		<Jr background="dialog" ref={ref} {...l}>
			<i.UC className={m}>{children}</i.UC>
		</Jr>
	);
});
export function dj(e) {
	Mi(1, "GamepadPagedSettingsPage");
	return (
		<Sw
			scrollable={false}
			padForHeader={false}
			padForFooter={false}
			dialogContentPadding="none"
			headerVisibility="default"
			{...e}
		/>
	);
}
