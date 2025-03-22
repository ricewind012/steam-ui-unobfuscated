var _r = require("./28864.js");
var i = require(/*webcrack:missing*/ "./4452.js");
var s = i;
var o = require(/*webcrack:missing*/ "./63696.js");
var a = require("./28869.js");
var c = require("./4690.js");
var l = require("./79734.js");
var u = require("./3524.js");
var m = require("./87481.js");
const d = o.createContext({
	Component: a.D0,
});
export function r(e) {
	const { Component: t, children: n } = e;
	const r = o.useMemo(
		() => ({
			Component: t,
		}),
		[t],
	);
	return o.createElement(
		d.Provider,
		{
			value: r,
		},
		n,
	);
}
export const Z = o.forwardRef(function (e, t) {
	const {
		"flow-children": n,
		onActivate: i,
		onCancel: h,
		focusClassName: p,
		focusWithinClassName: g,
		...f
	} = e;
	const { elemProps: _, navOptions: w, gamepadEvents: b } = (0, a.sl)(f);
	let C = {};
	const v = (0, l.O)(n);
	if (v != c.xj.NONE) {
		C.layout = v;
	}
	if (i) {
		_.onClick = _.onClick || i;
		b.onOKButton = b.onOKButton || i;
	}
	if (
		b.onOKButton &&
		w.focusable === undefined &&
		w.focusableIfNoChildren === undefined
	) {
		w.focusable = true;
	}
	if (h) {
		b.onCancelButton = b.onCancelButton || h;
	}
	const { ref: M, node: S } = (0, a.qp)({
		...C,
		...w,
	});
	const y = (0, u.bJ)();
	_.className = s(_.className, "Panel", y && "Focusable");
	(0, m.Ui)(b, M);
	const E = (0, _r.Ue)(M, t);
	if (
		(!!w.focusable || !!w.focusableIfNoChildren) &&
		(!S || !S.Tree.BUseVirtualFocus())
	) {
		_.tabIndex = _.tabIndex || 0;
	}
	const B = (0, o.useContext)(d).Component;
	return o.createElement(
		a.TJ.Provider,
		{
			value: S,
		},
		S
			? o.createElement(B, {
					..._,
					divRef: E,
					node: S,
					focusClassName: s(p, "gpfocus"),
					focusWithinClassName: s(g, "gpfocuswithin"),
				})
			: o.createElement("div", {
					..._,
					ref: E,
				}),
	);
});
