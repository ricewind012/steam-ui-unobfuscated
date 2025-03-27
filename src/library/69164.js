import { Ue } from "./28864.js";
import i from "./4452.js";
import o, { useContext } from "./63696.js";
import a, { sl, qp } from "./28869.js";
import c from "./4690.js";
import { O } from "./79734.js";
import { bJ } from "./3524.js";
import { Ui } from "./87481.js";
const s = i;
const DContext = o.createContext({
	Component: a.D0,
});
export function r(e) {
	const { Component, children } = e;
	const r = o.useMemo(
		() => ({
			Component: Component,
		}),
		[Component],
	);
	return <DContext.Provider value={r}>{children}</DContext.Provider>;
}
export const Z = o.forwardRef((e, t) => {
	const {
		"flow-children": n,
		onActivate,
		onCancel,
		focusClassName,
		focusWithinClassName,
		...f
	} = e;
	const { elemProps, navOptions, gamepadEvents } = sl(f);
	let C = {};
	const v = O(n);
	if (v != c.xj.NONE) {
		C.layout = v;
	}
	if (onActivate) {
		elemProps.onClick = elemProps.onClick || onActivate;
		gamepadEvents.onOKButton = gamepadEvents.onOKButton || onActivate;
	}
	if (
		gamepadEvents.onOKButton &&
		navOptions.focusable === undefined &&
		navOptions.focusableIfNoChildren === undefined
	) {
		navOptions.focusable = true;
	}
	if (onCancel) {
		gamepadEvents.onCancelButton = gamepadEvents.onCancelButton || onCancel;
	}
	const { ref, node } = qp({
		...C,
		...navOptions,
	});
	const y = bJ();
	elemProps.className = s(elemProps.className, "Panel", y && "Focusable");
	Ui(gamepadEvents, ref);
	const E = Ue(ref, t);
	if (
		(!!navOptions.focusable || !!navOptions.focusableIfNoChildren) &&
		(!node || !node.Tree.BUseVirtualFocus())
	) {
		elemProps.tabIndex = elemProps.tabIndex || 0;
	}
	const B = useContext(DContext).Component;
	return (
		<a.TJ.Provider value={node}>
			{node ? (
				<B
					{...elemProps}
					divRef={E}
					node={node}
					focusClassName={s(focusClassName, "gpfocus")}
					focusWithinClassName={s(focusWithinClassName, "gpfocuswithin")}
				/>
			) : (
				<div {...elemProps} ref={E} />
			)}
		</a.TJ.Provider>
	);
});
