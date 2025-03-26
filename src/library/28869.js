var r = require("./42898.js");
var i = require("./28864.js");
var s = require(/*webcrack:missing*/ "./4452.js");
var o = s;
var a = require(/*webcrack:missing*/ "./63696.js");
var c = require("./10975.js");
import { IsHTMLElement } from "../../actual_src/utils/domutils.js";
var u = require("./3524.js");
var m = require("./87481.js");
var d = require("./20893.js");
var h = require("./61050.js");
var p = require("./79734.js");
var g = require("./41537.js");
var f = require("./84252.js");
export const TJ = a.createContext(null);
export const sQ = a.createContext(h.CZ);
export function qp(e) {
	const { navRef: t, ...n } = e;
	const r = a.useRef(null);
	const s = (0, a.useContext)(TJ);
	const o = (0, a.useContext)(sQ);
	const c = (function (e, t) {
		let n = a.useRef(null);
		if (!!e && (!n.current || n.current.m_Parent != e)) {
			n.current = e.Tree.CreateNode(e, t);
		}
		return n.current;
	})(s, o);
	a.useLayoutEffect(() => {
		if (c) {
			c.SetProperties(n);
		}
	});
	a.useLayoutEffect(() => {
		if (!s) {
			return;
		}
		const e = s.Tree.RegisterNavigationItem(c, r.current);
		return () => {
			e();
		};
	}, [s, c, r]);
	a.useLayoutEffect(() => {
		if (c && t) {
			(0, i.cZ)(t, c.CreateHandle());
			return () => (0, i.cZ)(t, null);
		}
	}, [c, t]);
	return {
		ref: r,
		node: c,
	};
}
export function C7(e) {
	const {
		onButtonDown: t,
		onButtonUp: n,
		onOKButton: r,
		onCancelButton: i,
		onSecondaryButton: s,
		onOptionsButton: o,
		onGamepadDirection: a,
		onGamepadFocus: c,
		onGamepadBlur: l,
		onMenuButton: u,
		onOKActionDescription: m,
		onCancelActionDescription: h,
		onSecondaryActionDescription: p,
		onOptionsActionDescription: g,
		onMenuActionDescription: f,
		actionDescriptionMap: _,
		...w
	} = e;
	const b = {};
	if (t !== undefined) {
		b.onButtonDown = t;
	}
	if (n !== undefined) {
		b.onButtonUp = n;
	}
	if (r !== undefined) {
		b.onOKButton = r;
	}
	if (i !== undefined) {
		b.onCancelButton = i;
	}
	if (s !== undefined) {
		b.onSecondaryButton = s;
	}
	if (o !== undefined) {
		b.onOptionsButton = o;
	}
	if (u !== undefined) {
		b.onMenuButton = u;
	}
	if (a !== undefined) {
		b.onGamepadDirection = a;
	}
	if (c !== undefined) {
		b.onGamepadFocus = c;
	}
	if (l !== undefined) {
		b.onGamepadBlur = l;
	}
	return {
		gamepadEvents: b,
		actionDescriptions: (0, d.Y3)({
			onOKActionDescription: m,
			onCancelActionDescription: h,
			onSecondaryActionDescription: p,
			onOptionsActionDescription: g,
			onMenuActionDescription: f,
			actionDescriptionMap: _,
		}),
		props: w,
	};
}
export function sl(e) {
	const {
		autoFocus: t,
		preferredFocus: n,
		disableNavSounds: r,
		fnCanTakeFocus: i,
		childFocusDisabled: s,
		retainFocus: o,
		onFocusWithin: a,
		navKey: c,
		noFocusRing: l,
		focusable: u,
		focusableIfNoChildren: m,
		navRef: d,
		actionDescriptionMap: h,
		onMoveUp: p,
		onMoveRight: g,
		onMoveDown: f,
		onMoveLeft: _,
		navEntryPreferPosition: w,
		scrollIntoViewWhenChildFocused: b,
		fnScrollIntoViewHandler: v,
		scrollIntoViewType: M,
		resetNavOnEntry: S,
		...y
	} = e;
	const { gamepadEvents: E, actionDescriptions: B, props: x } = C7(y);
	return {
		elemProps: x,
		navOptions: {
			autoFocus: t,
			preferredFocus: n,
			disableNavSounds: r,
			fnCanTakeFocus: i,
			childFocusDisabled: s,
			retainFocus: o,
			onFocusWithin: a,
			navKey: c,
			noFocusRing: l,
			focusable: u,
			focusableIfNoChildren: m,
			navRef: d,
			onMoveUp: p,
			onMoveRight: g,
			onMoveDown: f,
			onMoveLeft: _,
			navEntryPreferPosition: w,
			scrollIntoViewWhenChildFocused: b,
			fnScrollIntoViewHandler: v,
			scrollIntoViewType: M,
			resetNavOnEntry: S,
			actionDescriptionMap: {
				...h,
				...B,
			},
		},
		gamepadEvents: E,
	};
}
function M(e) {
	return function (t) {
		const {
			focusClassName: n,
			focusWithinClassName: i,
			bFocusableByDefault: s,
			className: c,
			divRef: l,
			node: m,
			tabIndex: d,
			children: h,
			...p
		} = t;
		const g = (0, r.CH)();
		const _ = (0, u.bJ)();
		const w = m.BHasFocus() && _;
		const b = m.BFocusWithin() && _;
		const {
			bActiveTree: C,
			bActiveTreeWithinContext: v,
			bDisableFocusClasses: M,
		} = (0, f.qR)();
		(0, r.hL)(m.FocusCallbackList, g);
		(0, r.hL)(m.FocusWithinCallbackList, g);
		const S = C && !M;
		const y = !v && (d !== undefined || s);
		return a.createElement(
			e,
			{
				...p,
				className: o(c, w && S && n, b && S && i),
				tabIndex: y ? -1 : d,
				ref: l,
			},
			h,
		);
	};
}
export const D0 = M("div");
function y(e) {
	c.eZ.PlayNavSound(c.PN.DefaultOk);
	if (IsHTMLElement(e.currentTarget)) {
		e.currentTarget.click();
	}
	return true;
}
const E = a.createContext(undefined);
export const Mg = E.Provider;
function x(e, t, n, r, s) {
	const {
		elemProps: { focusClassName: c, children: l, "flow-children": u, ...d },
		navOptions: h,
		gamepadEvents: g,
	} = sl(n);
	const {
		bFocusableByDefault: f = true,
		bActivateByDefault: w = false,
		bDOMElementFocusByDefault: C = f,
	} = s || {};
	if (h.focusable === undefined && !d.disabled && f) {
		h.focusable = true;
	}
	const M = (0, p.O)(u);
	const { ref: S, node: B } = qp({
		layout: M,
		...h,
	});
	if (!g.onOKButton) {
		if (("onClick" in d && d.onClick) || (w && (w === true || w(d)))) {
			g.onOKButton = y;
		}
	}
	if (h.focusable && !C) {
		d.tabIndex = d.tabIndex || 0;
	} else if (!h.focusable && C) {
		d.tabIndex = d.tabIndex ?? -1;
	}
	(0, m.Ui)(g, S);
	const x = (0, i.Ue)(r, S);
	const L = (0, a.useContext)(E)?.Component;
	if (!B) {
		return a.createElement(
			e,
			{
				...d,
				ref: x,
				className: o(d.className, "Focusable"),
			},
			l,
		);
	}
	const k = {
		...d,
		divRef: x,
		node: B,
		focusClassName: o(c, "gpfocus"),
		focusWithinClassName: "gpfocuswithin",
		bFocusableByDefault: C,
		className: o(d.className, "Focusable"),
	};
	return a.createElement(
		TJ.Provider,
		{
			value: B,
		},
		L
			? a.createElement(
					L,
					{
						...k,
						Component: t,
					},
					l,
				)
			: a.createElement(t, k, l),
	);
}
export function HR(e, t) {
	const n = M(e);
	return a.forwardRef(function (r, i) {
		return x(e, n, r, i, t);
	});
}
export function v0(e) {
	const t = M(e);
	return a.forwardRef(function (n, r) {
		const {
			virtualKeyboardProps: s,
			props: { refKeyboardHandle: o, ...a },
		} = (function (e) {
			const {
				onEnterKeyPress: t,
				strEnterKeyLabel: n,
				onKeyboardNavOut: r,
				onKeyboardShow: i,
				onKeyboardFullyVisible: s,
				onTextEntered: o,
				BIsElementValidForInput: a,
				...c
			} = e;
			return {
				virtualKeyboardProps: {
					onEnterKeyPress: t,
					strEnterKeyLabel: n,
					onKeyboardNavOut: r,
					onKeyboardShow: i,
					onKeyboardFullyVisible: s,
					onTextEntered: o,
					BIsElementValidForInput: a,
				},
				props: c,
			};
		})(n);
		const c = (0, g.Cz)(s, o);
		const l = (0, i.Ue)(r, c);
		return x(e, t, a, l);
	});
}
