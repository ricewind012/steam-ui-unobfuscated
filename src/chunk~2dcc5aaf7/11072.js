import { GetOwningWindowForElement } from "../../actual_src/utils/domutils.js";
import i from "./74292.js";
import a, {
	useState,
	useRef,
	useCallback,
	useEffect,
	useMemo,
	useContext,
} from "./63696.js";
import s from "./31958.js";
import { uR } from "./65844.js";
import { q3 } from "./90095.js";
import { OB, QP } from "./72061.js";
const MContext = a.createContext({
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
	const { children } = e;
	const [r, u] = useState(false);
	const [d, A] = useState(false);
	const [p, g] = useState(false);
	const [h, C] = useState();
	const _ = useRef();
	const f = uR();
	const b = q3(() => f.GetScrollableWidthPX());
	const y = q3(() => f.GetVisualWindowStartPX());
	const S = q3(() => f.GetScrollWindowWidth());
	const w = q3(() => f.GetScrollWindowOffset());
	const B = q3(() => f.GetTimelineMarginWidth());
	const v = a.useMemo(() => {
		if (_.current) {
			const e = y - w - B;
			return OB(s.OQ(h + e, 0, b));
		}
		return OB(0);
	}, [B, h, w, y, b]);
	const I = a.useMemo(() => {
		if (_.current) {
			const e = _.current.getBoundingClientRect();
			const t = b > S ? w : e.x;
			return QP(s.OQ(h - t, 0, S));
		}
		return QP(0);
	}, [h, w, S, b]);
	const E = useCallback((e, t) => {
		if (_.current) {
			_.current.addEventListener(e, t);
		}
		return () => _.current?.removeEventListener(e, t);
	}, []);
	const M = useCallback(() => u(true), []);
	const T = useCallback(() => u(false), []);
	const R = useCallback((e) => C(e.clientX), []);
	const k = useCallback((e) => A(true), []);
	const D = useCallback((e) => A(false), []);
	useEffect(() => {
		const e = GetOwningWindowForElement(_.current);
		e.addEventListener("mousemove", R);
		return () => e.removeEventListener("mousemove", R);
	}, [R]);
	const N = useMemo(
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
	return (
		<MContext.Provider value={N}>
			<div
				ref={_}
				onMouseOver={k}
				onFocus={k}
				onMouseOut={D}
				onBlur={D}
				onMouseEnter={M}
				onMouseLeave={T}
				className={i.MouseListenerContainer}
			>
				{children}
			</div>
		</MContext.Provider>
	);
}
export function yR() {
	return useContext(MContext);
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
	const n = useRef();
	const i = useCallback(() => {
		n.current = r(e, t);
	}, [r, t, e]);
	const s = useCallback(() => {
		if (n.current) {
			n.current();
		}
	}, []);
	useEffect(() => {
		i();
		return () => s();
	}, [i, s]);
}
