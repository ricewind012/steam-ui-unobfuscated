import n, { createContext, useContext } from "./63696.js";
const IContext = createContext(null);
export function hL(e) {
	const { spacing, children } = e;
	return <IContext.Provider value={l(spacing)}>{children}</IContext.Provider>;
}
export function VJ(e) {
	const t = o();
	return (
		<div style={c(t)}>
			<IContext.Provider value={null}>{e.children}</IContext.Provider>
		</div>
	);
}
function o() {
	return useContext(IContext);
}
function l(e) {
	return {
		top: e.vertical || e.top || e.top || 0,
		bottom: e.vertical || e.bottom || e.bottom || 0,
		left: e.horizontal || e.left || e.left || 0,
		right: e.horizontal || e.right || e.right || 0,
	};
}
function c(e) {
	if (!e) {
		return;
	}
	const { top, bottom, left, right } = e;
	const a = {};
	if (top) {
		a.marginTop = `-${top}px`;
	}
	if (bottom) {
		a.marginBottom = `-${bottom}px`;
	}
	if (left) {
		a.marginLeft = `-${left}px`;
	}
	if (right) {
		a.marginRight = `-${right}px`;
	}
	return a;
}
export function S1() {
	const e = o();
	if (!e) {
		return;
	}
	const t = `${e.top}px ${e.right}px ${e.bottom}px ${e.left}px`;
	return {
		padding: t,
		scrollPadding: t,
	};
}
