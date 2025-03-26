var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require("./18057.js");
var o = require(/*webcrack:missing*/ "./88750.js");
var l = require("./18869.js");
import { Localize } from "../../actual_src/utils/localization.js";
var m = require("./51319.js");
var u = m;
var d = require("./40451.js");
var A = require("./3475.js");
var p = require("./5640.js");
var g = require(/*webcrack:missing*/ "./83599.js");
var h = require(/*webcrack:missing*/ "./15123.js");
var C = require("./28934.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var f = require("./34792.js");
var b = require("./10501.js");
var y = require(/*webcrack:missing*/ "./88808.js");
const S = new g.wd("Menus").Debug;
function w(e) {
	return e.filter((e) => !!e && e.visible !== false);
}
const B = (e) => {
	const {
		name: t,
		route: r,
		steamURL: i,
		dialog: m,
		onClick: g,
		disabledClass: h,
		disabled: f,
		parentalFeature: b = A.uX,
		newItem: y,
		children: S,
	} = e;
	const w = (0, l.tn)(r);
	const B = (0, s.Qt)(i);
	const v = (0, d.d)();
	const I = (0, p.l9)(b);
	const E = I != 0;
	const T = (0, C.wT)();
	const R = I != 2 || b !== A.JC;
	let k = g;
	if (r) {
		k = w;
	} else if (i) {
		k = B;
	} else if (m) {
		k = () => v(m, null);
	}
	const D = n.useCallback(
		(e) => {
			const t = GetOwningWindowForEvent(e);
			if (E && k) {
				T(I, b ?? A.uX, () => k(t));
			} else {
				k(t);
			}
		},
		[T, I, E, b, k],
	);
	if (!k && !f) {
		return n.createElement("hr", {
			className: (0, a.A)(u.MenuItem, u.Separator, (f || E) && h),
		});
	}
	const N = n.createElement(
		n.Fragment,
		null,
		y && n.createElement(M, null),
		S || (t[0] == "#" ? Localize(t) : t),
	);
	return n.createElement(
		o.kt,
		{
			className: (0, a.A)(
				u.MenuItem,
				u.Item,
				(f || E) && u.Disabled,
				(f || E) && h,
			),
			onSelected: D,
			disabled: f || (E && !R),
		},
		N,
	);
};
const v = n.createContext(true);
export function bI() {
	return n.useContext(v);
}
const E = (e) => {
	const {
		className: t,
		disabledItemClass: r,
		menuItems: s,
		children: l,
		refContextMenu: c,
		...m
	} = e;
	const d = (0, i.q3)(() => c.current.visible);
	return n.createElement(
		v.Provider,
		{
			value: d,
		},
		n.createElement(
			o.tz,
			{
				className: (0, a.A)(u.MenuPopup, t),
				...m,
			},
			n.createElement(
				_G,
				{
					disabledItemClass: r,
					menuItems: s,
				},
				l,
			),
		),
	);
};
function M() {
	return n.createElement(
		"span",
		{
			className: u.NewItemBug,
		},
		Localize("#NewItemBug"),
	);
}
export const _G = (e) => {
	const { disabledItemClass: t, menuItems: r, children: i } = e;
	return n.createElement(
		n.Fragment,
		null,
		w(r).map((e) =>
			n.createElement(B, {
				key: e.name,
				disabledClass: t,
				...e,
			}),
		),
		i,
	);
};
export const W1 = (e) => {
	const {
		title: t,
		className: r,
		popupClass: s,
		buttonClass: o,
		disabledClass: l,
		disabledItemClass: c,
		parentalFeature: m = A.uX,
		bIsAnyMenuOpen: d,
		bSuperNavBehavior: g,
		menuContent: _,
		menuOptions: y,
		onClick: B,
		onShow: v,
		onHide: I,
		refPopupMenu: M,
		children: T,
	} = e;
	const R = w(e.menuItems ?? []);
	const k = (0, b.w)();
	const [D] = (0, f.VI)("small_mode");
	const N = !k || D;
	const F = N;
	const G = n.useRef(undefined);
	const O = n.useRef(false);
	const P = n.useRef(false);
	const L = n.useRef(undefined);
	const z = n.useRef(undefined);
	const x = (0, p.l9)(m);
	const U = x != 0;
	const W = n.useRef(false);
	const V = (0, i.q3)(() => G.current?.visible);
	const H = (0, h.h)();
	const j = (0, C.wT)();
	const q = () => {
		W.current = true;
		window.setTimeout(() => {
			W.current = false;
			O.current = false;
			P.current = false;
		}, 250);
		if (I) {
			I();
		}
		if (!F) {
			G.current = undefined;
		}
	};
	const Q = (e) => {
		if (R?.length > 1 || _) {
			if (!G.current) {
				X(e.currentTarget);
			}
			G.current.Show();
			if (v) {
				v();
			}
			if (M) {
				M.current = G.current;
			}
		}
	};
	const Z = (e, t = 200) => {
		if (L.current === undefined) {
			L.current = window.setTimeout(() => {
				if (!!G.current?.visible && !O.current && !P.current) {
					G.current.Hide();
				}
				L.current = undefined;
			}, t);
		}
	};
	const Y = (e) => {
		S("OnMenuMouseEnter", t, V);
		P.current = true;
	};
	const K = (e) => {
		S("OnMenuMouseLeave", t, V);
		P.current = false;
		Z();
	};
	const X = (e) => {
		if (e && !G.current && (R?.length > 1 || _)) {
			G.current = H.CreateContextMenuInstance(
				n.createElement(
					E,
					{
						refContextMenu: G,
						className: s,
						disabledItemClass: c,
						menuItems: R,
						onMouseEnter: Y,
						onMouseLeave: g ? K : undefined,
					},
					_,
				),
				e,
				undefined,
				undefined,
				{
					bOverlapHorizontal: true,
					bGrowToElementWidth: true,
					bForcePopup: N,
					bDisableMouseOverlay: true,
					bCreateHidden: F,
					bRetainOnHide: F,
					bNoFocusWhenShown: g,
					title: t,
					...y,
				},
			);
			G.current?.SetOnHideCallback(q);
		}
	};
	(0, n.useEffect)(
		() => () => {
			if (G.current) {
				H.ReleaseHiddenMenu(G.current);
			}
		},
		[H],
	);
	return n.createElement(
		"div",
		{
			className: (0, a.A)(
				u.MenuWrapper,
				U && u.Disabled,
				r,
				U && l,
				V && u.MenuOpen,
			),
			ref: (e) => {
				if (e) {
					z.current = e.ownerDocument.defaultView;
				}
				if (F) {
					X(e);
				}
			},
			onFocus: () => {},
			onBlur: () => {},
			onClick: g
				? undefined
				: (e) => {
						if (U) {
							j(x, m);
						} else if (!G.current?.visible && !W.current) {
							S("OnClick", t, V);
							Q(e);
						}
					},
			onMouseEnter: U
				? undefined
				: (e) => {
						if (g || d) {
							S("OnButtonMouseEnter", t, V);
							O.current = true;
							Q(e);
						}
					},
			onMouseLeave: U
				? undefined
				: (e) => {
						S("OnButtonMouseLeave", t, V);
						if (g) {
							O.current = false;
							Z();
						}
					},
		},
		n.createElement(
			"div",
			{
				className: (0, a.A)(u.MenuButton, o),
				onClick: (e) => {
					if (B) {
						if (U) {
							if (x != 2 || m !== A.JC) {
								j(x, m, () => B());
							}
						} else {
							B();
						}
					}
				},
			},
			T,
		),
	);
};
export function fN(e) {
	return n.createElement(
		h.D,
		{
			bRegisterMenuManager: false,
		},
		n.createElement(y.k, null),
		e.children,
	);
}
