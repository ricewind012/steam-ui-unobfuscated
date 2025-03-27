import n from "./63696.js";
import i from "./78325.js";
const AContext = n.createContext(null);
function S(e) {
	const { top, right, bottom, left, children } = e;
	const c = n.useContext(AContext);
	if (c) {
		const e = {
			position: "absolute",
			top: top,
			right: right,
			bottom: bottom,
			left: left,
			pointerEvents: "none",
		};
		return i.createPortal(<div style={e}>{children}</div>, c);
	}
	return (
		<div
			style={{
				position: "fixed",
				top: top,
				right: right,
				bottom: bottom,
				left: left,
			}}
		>
			{children}
		</div>
	);
}
export function f(e) {
	return (
		<S right={0} bottom={0} left={0}>
			{e.children}
		</S>
	);
}
export function W(e) {
	const { children, style, ...i } = e;
	const [s, setS] = n.useState();
	return (
		<div
			{...i}
			style={{
				...style,
				position: "relative",
			}}
			ref={setS}
		>
			<AContext.Provider value={s}>{children}</AContext.Provider>
		</div>
	);
}
