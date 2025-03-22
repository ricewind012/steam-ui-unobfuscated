var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require(/*webcrack:missing*/ "./11131.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require(/*webcrack:missing*/ "./90685.js");
const l = n.createContext({
	focused: false,
	hovered: false,
	maximized: false,
});
export const c = () => n.useContext(l);
export function w(e) {
	const { bForceWindowFocused: t, children: r } = e;
	const c = (0, a.R7)().ownerWindow;
	const m = (0, i.q3)(() => a.Of.BAnyMenuHasFocus());
	const u = (0, s.DF)(m, 100);
	const d = (0, o.jt)(c, 100);
	const A = (function (e) {
		const [t, r] = n.useState(false);
		(0, s.l6)(e, "message", (e) => {
			if (e.data == "window_gotfocus") {
				r(true);
			} else if (e.data == "window_lostfocus") {
				r(false);
			}
		});
		return t;
	})(c);
	const p = t || u || d || A;
	const g = (0, o.nA)(c);
	const h = (0, o.GD)(c);
	const C = n.useMemo(
		() => ({
			focused: p,
			hovered: g,
			maximized: h,
		}),
		[p, g, h],
	);
	return n.createElement(
		l.Provider,
		{
			value: C,
		},
		r,
	);
}
