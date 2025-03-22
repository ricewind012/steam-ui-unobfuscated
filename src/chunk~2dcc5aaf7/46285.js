var n = require("./2053.js");
var i = n;
var a = require("./31319.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./85243.js");
var l = require(/*webcrack:missing*/ "./69164.js");
var c = require(/*webcrack:missing*/ "./42318.js");
var m = require("./10606.js");
var u = require(/*webcrack:missing*/ "./90765.js");
var d = require("./31800.js");
var A = require("./55489.js");
var p = require("./55116.js");
var g = require(/*webcrack:missing*/ "./72476.js");
const h = 300;
export function M(e) {
	const {
		className: t,
		onEscKeypress: r,
		padding: n,
		bGamepadUIScrollWithin: m,
		children: C,
	} = e;
	(0, A.Bx)(o.I5.Overlay, "GamepadModalPosition");
	(0, d.iW)(true, "GamepadModalPosition");
	(0, a.Xf)("hidden", "GamepadModalPosition");
	(0, d.Wh)(null, "GamepadModalPosition");
	(0, d.ez)(true, "GamepadModalPosition");
	const _ = (0, g.rP)();
	const f = n ?? "standard";
	const b = (0, u.A)(
		i.ModalPosition,
		f == "standard" && i.WithStandardPadding,
		m && i.ScrollWithin,
		_.IN_VR && i.VR,
		t,
	);
	const { fnClick: y, refElem: S } = (function (e) {
		const t = s.useRef(undefined);
		const r = s.useRef(Date.now());
		const n = (0, g.rP)().IN_VR;
		s.useEffect(() => {
			if (n) {
				return;
			}
			const e = t.current?.ownerDocument?.defaultView;
			if (!e) {
				return;
			}
			const i = () => (r.current = Date.now());
			e.addEventListener("focus", i);
			return () => {
				e.removeEventListener("focus", i);
			};
		}, [n]);
		const i = s.useCallback(
			(t) => {
				const i = Date.now() - r.current;
				if (!!n || !(i < h)) {
					if (t.target === t.currentTarget) {
						e?.();
					}
				}
			},
			[n, e],
		);
		return {
			refElem: t,
			fnClick: i,
		};
	})(r);
	return s.createElement(
		l.Z,
		{
			className: b,
			onCancelButton: r,
			focusableIfNoChildren: true,
			ref: S,
		},
		s.createElement(l.Z, {
			onClick: y,
			focusable: false,
			className: i.ModalClickToDismiss,
		}),
		s.createElement(p.q, null, s.createElement(c.tH, null, C)),
	);
}
export function I(e) {
	return s.createElement(
		m.Nm.Provider,
		{
			value: {
				ModalPosition: M,
			},
		},
		e.children,
	);
}
