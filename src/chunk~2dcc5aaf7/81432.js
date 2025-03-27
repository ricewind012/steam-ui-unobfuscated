import n from "./63696.js";
import { A } from "./90765.js";
import a from "./26190.js";
import o from "./69164.js";
import l from "./61657.js";
const s = a;
function c(e) {
	return e.detail.button == l.pR.DIR_DOWN;
}
export function J(e, t, r) {
	const [a, setA] = n.useState(false);
	return {
		onFocusWithinContainer: n.useCallback(
			(t) => {
				setA(t);
				e(t);
			},
			[e],
		),
		fastScrollOverlay: a && (
			<o.Z
				className={A(s.FastScrollOverlay, t && s.Visible)}
				focusable
				noFocusRing
				navRef={r.current}
			>
				<div className={s.FastScrollOverlayText}>{t}</div>
			</o.Z>
		),
		onGamepadDirectionGridContainer: c,
	};
}
