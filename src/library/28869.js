import { IsHTMLElement } from "../../actual_src/utils/domutils.js";
import r, { CH, hL } from "./42898.js";
import i, { cZ, Ue } from "./28864.js";
import s from "./4452.js";
import a, { useContext } from "./63696.js";
import c from "./10975.js";
import u, { bJ } from "./3524.js";
import m, { Ui } from "./87481.js";
import d, { Y3 } from "./20893.js";
import h from "./61050.js";
import p, { O } from "./79734.js";
import g, { Cz } from "./41537.js";
import f, { qR } from "./84252.js";
const o = s;
export const TJContext = a.createContext(null);
export const sQ = a.createContext(h.CZ);
export function qp(e) {
	const { navRef, ...n } = e;
	const r = a.useRef(null);
	const s = useContext(TJContext);
	const o = useContext(sQ);
	const c = ((e, t) => {
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
		if (c && navRef) {
			cZ(navRef, c.CreateHandle());
			return () => cZ(navRef, null);
		}
	}, [c, navRef]);
	return {
		ref: r,
		node: c,
	};
}
export function C7(e) {
	const {
		onButtonDown,
		onButtonUp,
		onOKButton,
		onCancelButton,
		onSecondaryButton,
		onOptionsButton,
		onGamepadDirection,
		onGamepadFocus,
		onGamepadBlur,
		onMenuButton,
		onOKActionDescription,
		onCancelActionDescription,
		onSecondaryActionDescription,
		onOptionsActionDescription,
		onMenuActionDescription,
		actionDescriptionMap,
		...w
	} = e;
	const b = {};
	if (onButtonDown !== undefined) {
		b.onButtonDown = onButtonDown;
	}
	if (onButtonUp !== undefined) {
		b.onButtonUp = onButtonUp;
	}
	if (onOKButton !== undefined) {
		b.onOKButton = onOKButton;
	}
	if (onCancelButton !== undefined) {
		b.onCancelButton = onCancelButton;
	}
	if (onSecondaryButton !== undefined) {
		b.onSecondaryButton = onSecondaryButton;
	}
	if (onOptionsButton !== undefined) {
		b.onOptionsButton = onOptionsButton;
	}
	if (onMenuButton !== undefined) {
		b.onMenuButton = onMenuButton;
	}
	if (onGamepadDirection !== undefined) {
		b.onGamepadDirection = onGamepadDirection;
	}
	if (onGamepadFocus !== undefined) {
		b.onGamepadFocus = onGamepadFocus;
	}
	if (onGamepadBlur !== undefined) {
		b.onGamepadBlur = onGamepadBlur;
	}
	return {
		gamepadEvents: b,
		actionDescriptions: Y3({
			onOKActionDescription: onOKActionDescription,
			onCancelActionDescription: onCancelActionDescription,
			onSecondaryActionDescription: onSecondaryActionDescription,
			onOptionsActionDescription: onOptionsActionDescription,
			onMenuActionDescription: onMenuActionDescription,
			actionDescriptionMap: actionDescriptionMap,
		}),
		props: w,
	};
}
export function sl(e) {
	const {
		autoFocus,
		preferredFocus,
		disableNavSounds,
		fnCanTakeFocus,
		childFocusDisabled,
		retainFocus,
		onFocusWithin,
		navKey,
		noFocusRing,
		focusable,
		focusableIfNoChildren,
		navRef,
		actionDescriptionMap,
		onMoveUp,
		onMoveRight,
		onMoveDown,
		onMoveLeft,
		navEntryPreferPosition,
		scrollIntoViewWhenChildFocused,
		fnScrollIntoViewHandler,
		scrollIntoViewType,
		resetNavOnEntry,
		...y
	} = e;
	const { gamepadEvents, actionDescriptions, props } = C7(y);
	return {
		elemProps: props,
		navOptions: {
			autoFocus: autoFocus,
			preferredFocus: preferredFocus,
			disableNavSounds: disableNavSounds,
			fnCanTakeFocus: fnCanTakeFocus,
			childFocusDisabled: childFocusDisabled,
			retainFocus: retainFocus,
			onFocusWithin: onFocusWithin,
			navKey: navKey,
			noFocusRing: noFocusRing,
			focusable: focusable,
			focusableIfNoChildren: focusableIfNoChildren,
			navRef: navRef,
			onMoveUp: onMoveUp,
			onMoveRight: onMoveRight,
			onMoveDown: onMoveDown,
			onMoveLeft: onMoveLeft,
			navEntryPreferPosition: navEntryPreferPosition,
			scrollIntoViewWhenChildFocused: scrollIntoViewWhenChildFocused,
			fnScrollIntoViewHandler: fnScrollIntoViewHandler,
			scrollIntoViewType: scrollIntoViewType,
			resetNavOnEntry: resetNavOnEntry,
			actionDescriptionMap: {
				...actionDescriptionMap,
				...actionDescriptions,
			},
		},
		gamepadEvents: gamepadEvents,
	};
}
function M(e) {
	return (t) => {
		const {
			focusClassName,
			focusWithinClassName,
			bFocusableByDefault,
			className,
			divRef,
			node,
			tabIndex,
			children,
			...p
		} = t;
		const g = CH();
		const _ = bJ();
		const w = node.BHasFocus() && _;
		const b = node.BFocusWithin() && _;
		const { bActiveTree, bActiveTreeWithinContext, bDisableFocusClasses } =
			qR();
		hL(node.FocusCallbackList, g);
		hL(node.FocusWithinCallbackList, g);
		const S = bActiveTree && !bDisableFocusClasses;
		const y =
			!bActiveTreeWithinContext &&
			(tabIndex !== undefined || bFocusableByDefault);
		return a.createElement(
			e,
			{
				...p,
				className: o(
					className,
					w && S && focusClassName,
					b && S && focusWithinClassName,
				),
				tabIndex: y ? -1 : tabIndex,
				ref: divRef,
			},
			children,
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
		navOptions,
		gamepadEvents,
	} = sl(n);
	const {
		bFocusableByDefault = true,
		bActivateByDefault = false,
		bDOMElementFocusByDefault = bFocusableByDefault,
	} = s || {};
	if (
		navOptions.focusable === undefined &&
		!d.disabled &&
		bFocusableByDefault
	) {
		navOptions.focusable = true;
	}
	const M = O(u);
	const { ref, node } = qp({
		layout: M,
		...navOptions,
	});
	if (!gamepadEvents.onOKButton) {
		if (
			("onClick" in d && d.onClick) ||
			(bActivateByDefault &&
				(bActivateByDefault === true || bActivateByDefault(d)))
		) {
			gamepadEvents.onOKButton = y;
		}
	}
	if (navOptions.focusable && !bDOMElementFocusByDefault) {
		d.tabIndex = d.tabIndex || 0;
	} else if (!navOptions.focusable && bDOMElementFocusByDefault) {
		d.tabIndex = d.tabIndex ?? -1;
	}
	Ui(gamepadEvents, ref);
	const x = Ue(r, ref);
	const L = useContext(E)?.Component;
	if (!node) {
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
		node: node,
		focusClassName: o(c, "gpfocus"),
		focusWithinClassName: "gpfocuswithin",
		bFocusableByDefault: bDOMElementFocusByDefault,
		className: o(d.className, "Focusable"),
	};
	return a.createElement(
		TJContext.Provider,
		{
			value: node,
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
	return a.forwardRef((r, i) => x(e, n, r, i, t));
}
export function v0(e) {
	const t = M(e);
	return a.forwardRef((n, r) => {
		const {
			virtualKeyboardProps,
			props: { refKeyboardHandle: o, ...a },
		} = ((e) => {
			const {
				onEnterKeyPress,
				strEnterKeyLabel,
				onKeyboardNavOut,
				onKeyboardShow,
				onKeyboardFullyVisible,
				onTextEntered,
				BIsElementValidForInput,
				...c
			} = e;
			return {
				virtualKeyboardProps: {
					onEnterKeyPress: onEnterKeyPress,
					strEnterKeyLabel: strEnterKeyLabel,
					onKeyboardNavOut: onKeyboardNavOut,
					onKeyboardShow: onKeyboardShow,
					onKeyboardFullyVisible: onKeyboardFullyVisible,
					onTextEntered: onTextEntered,
					BIsElementValidForInput: BIsElementValidForInput,
				},
				props: c,
			};
		})(n);
		const c = Cz(virtualKeyboardProps, o);
		const l = Ue(r, c);
		return x(e, t, a, l);
	});
}
