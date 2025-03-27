import n, { Ue } from "./28864.js";
import i, { useState } from "./63696.js";
import a from "./69164.js";
import s from "./21105.js";
export const YZ = i.forwardRef((props, ref) => {
	const {
		onExplicitFocusLevelChanged,
		onOKButton,
		onCancelButton,
		navRef,
		focusable,
		...u
	} = props;
	const DRef = i.useRef(null);
	const { fnOnOKButton, fnOnCancelButton } = m({
		navRefPanel: DRef,
		onOKButton: onOKButton,
		onCancelButton: onCancelButton,
		onExplicitFocusLevelChanged: onExplicitFocusLevelChanged,
	});
	const g = Ue(navRef, DRef);
	return (
		<a.Z
			{...u}
			onOKButton={fnOnOKButton}
			onCancelButton={fnOnCancelButton}
			navRef={g}
			ref={ref}
			focusable={focusable !== false}
		/>
	);
});
export function hN(e) {
	const { children, ...r } = e;
	const [n, setN] = useState(false);
	const [s, setS] = useState(false);
	const c = !n || s;
	return (
		<YZ
			onExplicitFocusLevelChanged={setN}
			onFocusWithin={setS}
			focusable={c}
			{...r}
		>
			{typeof children == "function" ? children(n) : children}
		</YZ>
	);
}
export const f7 = i.forwardRef((props, ref) => {
	const { onOKButton, onCancelButton, navRef, focusable, ...c } = props;
	const URef = i.useRef(null);
	const DRef = i.useRef(null);
	const A = i.useCallback((e, t) => e.FocusVisibleChild(), []);
	const { fnOnOKButton, fnOnCancelButton } = m({
		navRefPanel: URef,
		onOKButton: onOKButton,
		onCancelButton: onCancelButton,
		fnFocusChildren: A,
	});
	const h = Ue(DRef, ref);
	const C = Ue(navRef, URef);
	return (
		<s.Qg
			{...c}
			onOKButton={(e) => fnOnOKButton?.(e)}
			onCancelButton={fnOnCancelButton}
			navRef={C}
			ref={h}
			focusable={focusable !== false}
		/>
	);
});
function m(e) {
	let {
		navRefPanel,
		onOKButton,
		onCancelButton,
		onExplicitFocusLevelChanged,
		fnFocusChildren,
	} = e;
	fnFocusChildren = fnFocusChildren ?? u;
	return {
		fnOnOKButton: i.useCallback(
			(e) => {
				const t_current = navRefPanel.current;
				if (
					t_current?.BHasFocus() &&
					fnFocusChildren(t_current, e.detail.button)
				) {
					if (onExplicitFocusLevelChanged) {
						onExplicitFocusLevelChanged(true);
					}
					return true;
				} else {
					return !!onOKButton && onOKButton(e);
				}
			},
			[navRefPanel, onOKButton, onExplicitFocusLevelChanged, fnFocusChildren],
		),
		fnOnCancelButton: i.useCallback(
			(e) => {
				const t_current = navRefPanel.current;
				if (
					t_current?.BFocusWithin() &&
					!t_current.BHasFocus() &&
					t_current.TakeFocus(e.detail.button)
				) {
					if (onExplicitFocusLevelChanged) {
						onExplicitFocusLevelChanged(false);
					}
					return true;
				} else {
					return !!onCancelButton && onCancelButton(e);
				}
			},
			[navRefPanel, onCancelButton, onExplicitFocusLevelChanged],
		),
	};
}
function u(e, t) {
	return e.ChildTakeFocus(t);
}
