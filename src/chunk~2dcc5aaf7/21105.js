import { AssertMsg } from "../../actual_src/utils/assert.js";
import i, { Ue } from "./28864.js";
import a from "./4452.js";
import o from "./63696.js";
import l, { Xz } from "./51076.js";
import c from "./4690.js";
import m, { tw, ak } from "./69.js";
import u from "./55116.js";
import d from "./69164.js";
import A from "./77045.js";
const s = a;
const p = A;
export const MS = o.forwardRef((props, ref) => {
	const {
		scrollDirection,
		scrollPaddingTop,
		scrollPaddingRight,
		scrollPaddingBottom,
		scrollPaddingLeft,
		className,
		children,
		style,
		...C
	} = props;
	let _;
	switch (scrollDirection) {
		case "x": {
			_ = p.ScrollX;
			break;
		}
		case "both": {
			_ = p.ScrollBoth;
			break;
		}
		default: {
			_ = p.ScrollY;
		}
	}
	let f = {
		...style,
	};
	if (scrollPaddingTop || scrollPaddingTop === 0) {
		f.scrollPaddingTop = scrollPaddingTop;
	}
	if (scrollPaddingRight || scrollPaddingRight === 0) {
		f.scrollPaddingRight = scrollPaddingRight;
	}
	if (scrollPaddingBottom || scrollPaddingBottom === 0) {
		f.scrollPaddingBottom = scrollPaddingBottom;
	}
	if (scrollPaddingLeft || scrollPaddingLeft === 0) {
		f.scrollPaddingLeft = scrollPaddingLeft;
	}
	const { ref, navRef } = tw();
	const S = Ue(navRef, C.navRef);
	const w = Ue(ref, ref);
	return (
		<d.Z
			{...C}
			style={f}
			className={s(className, p.ScrollPanel, _)}
			ref={w}
			navRef={S}
		>
			<u.q>{children}</u.q>
		</d.Z>
	);
});
export const Qg = o.forwardRef((props, ref) => {
	const { scrollStepPercent, scrollBehavior, ...a } = props;
	const SRef = o.useRef(null);
	const l = o.useCallback((e) => e.currentTarget != e.target, []);
	const u = ak(SRef, scrollBehavior, scrollStepPercent, l);
	const d = Ue(SRef, ref);
	return (
		<MS
			{...a}
			onGamepadDirection={u}
			ref={d}
			scrollIntoViewType={c.Yo.NoTransformSparseContent}
		/>
	);
});
export const i6 = o.forwardRef((props, ref) => {
	const { name, msScrollRestoreDelay, onScroll, ...a } = props;
	return (
		<F
			name={name}
			msScrollRestoreDelay={msScrollRestoreDelay}
			parentOnScroll={onScroll}
			refDiv={ref}
		>
			{(e, t) => <MS {...a} onScroll={e} ref={t} />}
		</F>
	);
});
export const iq = o.forwardRef((props, ref) => {
	const { name, msScrollRestoreDelay, onScroll, ...a } = props;
	return (
		<F
			name={name}
			msScrollRestoreDelay={msScrollRestoreDelay}
			parentOnScroll={onScroll}
			refDiv={ref}
		>
			{(e, t) => <Qg {...a} onScroll={e} ref={t} />}
		</F>
	);
});
function F(e) {
	const { name, msScrollRestoreDelay, parentOnScroll, refDiv, children } = e;
	const [m, u] = Xz(`${name}ScrollTop`, 250, 0);
	const [d, A] = Xz(`${name}ScrollLeft`, 250, 0);
	const PRef = o.useRef(0);
	const GRef = o.useRef(0);
	const HRef = o.useRef();
	let C = o.useCallback(
		(e) => {
			const { scrollTop, scrollLeft } = e.currentTarget;
			u(scrollTop);
			PRef.current = scrollTop;
			A(scrollLeft);
			GRef.current = scrollLeft;
			if (parentOnScroll) {
				parentOnScroll(e);
			}
		},
		[u, A, parentOnScroll],
	);
	o.useLayoutEffect(() => {
		const e = () => {
			if (HRef.current) {
				AssertMsg(
					HRef.current.scrollHeight >= m,
					`Element is ${HRef.current.scrollHeight} high but trying to restore scrollTop of ${m}, element may need more time to lay out.`,
					HRef.current,
				);
				PRef.current = m;
				GRef.current = d;
				HRef.current.scrollTo({
					top: m,
					left: d,
					behavior: "auto",
				});
				HRef.current.dispatchEvent(new UIEvent("scroll"));
			}
		};
		if (m != PRef.current || d != GRef.current) {
			if (msScrollRestoreDelay) {
				window.setTimeout(e, msScrollRestoreDelay);
			} else {
				e();
			}
		}
	}, [m, d, msScrollRestoreDelay]);
	const _ = Ue(HRef, refDiv);
	return o.useMemo(() => children(C, _), [C, _, children]);
}
