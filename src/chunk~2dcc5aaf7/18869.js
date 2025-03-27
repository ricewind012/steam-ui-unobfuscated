import n, { createContext, useContext, useCallback } from "./63696.js";
import i, { W6, B6 } from "./49519.js";
import a from "./79769.js";
import s from "./79112.js";
export let br = s.br;
export const GLContext = createContext({
	OnNavigateBack: new a.lu(),
	refGlobalBackOverride: {
		current: undefined,
	},
	rgSuppressForwardBackNavigation: [],
	fnFocusNavigationRoot() {},
});
export function K1() {
	return useContext(GLContext)?.fnFocusNavigationRoot || (() => {});
}
export function tn(e, t = {}) {
	const { bNoRedundantNavigation, bReplace, state } = t;
	const o = W6();
	const c = K1();
	return useCallback(
		(t, n = {}) => {
			const i = e
				? {
						bNoRedundantNavigation: bNoRedundantNavigation,
						bReplace: bReplace,
						state: state,
					}
				: n;
			We(o, e || t, i.bReplace, i.bNoRedundantNavigation, i.state);
			c();
		},
		[o, c, e, bNoRedundantNavigation, bReplace, state],
	);
}
export function We(e, t, r, n, a) {
	const { bReplace, bNoRedundantNavigation, state } = ((e, t, r) => {
		if (typeof e == "object") {
			return e;
		} else {
			return {
				bReplace: e,
				bNoRedundantNavigation: t,
				state: r,
			};
		}
	})(r, n, a);
	if (!bNoRedundantNavigation || !B6(t, e.location.pathname)) {
		if (bReplace) {
			e.replace(t, state);
		} else {
			e.push(t, state);
		}
	}
}
