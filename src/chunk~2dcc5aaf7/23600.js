import n from "./63696.js";
import { q3 } from "./90095.js";
import a, { R7 } from "./11131.js";
import { DF, l6 } from "./52451.js";
import { jt, nA, GD } from "./90685.js";
const LContext = n.createContext({
	focused: false,
	hovered: false,
	maximized: false,
});
export const c = () => n.useContext(LContext);
export function w(e) {
	const { bForceWindowFocused, children } = e;
	const c = R7().ownerWindow;
	const m = q3(() => a.Of.BAnyMenuHasFocus());
	const u = DF(m, 100);
	const d = jt(c, 100);
	const A = ((e) => {
		const [t, r] = n.useState(false);
		l6(e, "message", (e) => {
			if (e.data == "window_gotfocus") {
				r(true);
			} else if (e.data == "window_lostfocus") {
				r(false);
			}
		});
		return t;
	})(c);
	const p = bForceWindowFocused || u || u || d || u || d || A;
	const g = nA(c);
	const h = GD(c);
	const C = n.useMemo(
		() => ({
			focused: p,
			hovered: g,
			maximized: h,
		}),
		[p, g, h],
	);
	return <LContext.Provider value={C}>{children}</LContext.Provider>;
}
