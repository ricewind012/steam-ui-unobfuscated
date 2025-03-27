import n, { useState, useCallback } from "./63696.js";
import i from "./46263.js";
import a, { createPortal } from "./78325.js";
import s, { R7 } from "./11131.js";
export function _D(e) {
	const { position, onAnimationEnd, children } = e;
	const { ownerWindow } = R7();
	if (!position || !children) {
		return null;
	}
	const c = {
		top: position.y,
		left: position.x,
	};
	return createPortal(
		<div
			key={Date.now()}
			className={i.FloatingConfirmation}
			style={c}
			onAnimationEnd={(e) => {
				if (
					e.animationName === i.FloatingConfirmationAnimation &&
					onAnimationEnd
				) {
					onAnimationEnd(e);
				}
			}}
		>
			{children}
		</div>,
		ownerWindow.document.body,
	);
}
export function NR() {
	const [e, t] = useState();
	return {
		onConfirm: useCallback((e) => {
			t(
				(t) =>
					t || {
						x: e.clientX,
						y: e.clientY,
					},
			);
		}, []),
		confirmationProps: {
			position: e,
			onAnimationEnd: useCallback(() => t(undefined), []),
		},
	};
}
const CContext = n.createContext((e, t) => {
	throw new Error(
		"Somebody is using useShowFloatingConfirmation outside of a <FloatingConfirmationProvider>",
	);
});
export function Zz(e) {
	const { children, showConfirmationOverride } = e;
	const { onConfirm, confirmationProps } = NR();
	const [s, m] = n.useState();
	return (
		<CContext.Provider
			value={
				showConfirmationOverride ||
				((e, t) => {
					m(t);
					onConfirm(e);
				})
			}
		>
			{!showConfirmationOverride && (
				<_D
					{...confirmationProps}
					onAnimationEnd={() => {
						m(undefined);
					}}
				>
					{s}
				</_D>
			)}
			{children}
		</CContext.Provider>
	);
}
export function yZ() {
	return n.useContext(CContext);
}
