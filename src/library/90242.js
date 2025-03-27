import r from "./63696.js";
import i, { HR, v0 } from "./28869.js";
export function b$() {
	return r.createRef();
}
export const ml = HR("div", {
	bDOMElementFocusByDefault: false,
});
export const fu = HR("button", {
	bActivateByDefault: (e) => e.type === "submit",
});
export const Ii = HR("a", {
	bActivateByDefault: true,
});
export const BA = v0("input");
export const dO = v0("textarea");
export const EI = HR("img", {
	bDOMElementFocusByDefault: false,
});
HR("label", {
	bActivateByDefault: true,
	bDOMElementFocusByDefault: false,
});
HR("section", {
	bFocusableByDefault: false,
});
HR("form", {
	bFocusableByDefault: false,
});
export function lv(e) {
	const { Component, children } = e;
	const s = r.useMemo(
		() => ({
			Component: Component,
		}),
		[Component],
	);
	return <i.Mg value={s}>{children}</i.Mg>;
}
export function O7(e, t, n = false) {
	r.useEffect(() => {
		const e_current = e.current;
		if (e_current) {
			if (t) {
				e_current.Activate(n);
			} else {
				e_current.Deactivate();
			}
		}
	}, [t, n, e]);
}
