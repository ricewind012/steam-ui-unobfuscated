export let br = s.br;
var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./49519.js");
var a = require(/*webcrack:missing*/ "./79769.js");
var s = require("./79112.js");
export const GL = (0, n.createContext)({
	OnNavigateBack: new a.lu(),
	refGlobalBackOverride: {
		current: undefined,
	},
	rgSuppressForwardBackNavigation: [],
	fnFocusNavigationRoot: function () {},
});
export function K1() {
	return (0, n.useContext)(GL)?.fnFocusNavigationRoot || function () {};
}
export function tn(e, t = {}) {
	const { bNoRedundantNavigation: r, bReplace: a, state: s } = t;
	const o = (0, i.W6)();
	const c = K1();
	return (0, n.useCallback)(
		(t, n = {}) => {
			const i = e
				? {
						bNoRedundantNavigation: r,
						bReplace: a,
						state: s,
					}
				: n;
			We(o, e || t, i.bReplace, i.bNoRedundantNavigation, i.state);
			c();
		},
		[o, c, e, r, a, s],
	);
}
export function We(e, t, r, n, a) {
	const {
		bReplace: s,
		bNoRedundantNavigation: o,
		state: l,
	} = (function (e, t, r) {
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
	if (!o || !(0, i.B6)(t, e.location.pathname)) {
		if (s) {
			e.replace(t, l);
		} else {
			e.push(t, l);
		}
	}
}
