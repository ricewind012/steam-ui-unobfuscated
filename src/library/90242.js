var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./28869.js");
export function b$() {
	return r.createRef();
}
export const ml = (0, i.HR)("div", {
	bDOMElementFocusByDefault: false,
});
export const fu = (0, i.HR)("button", {
	bActivateByDefault: (e) => e.type === "submit",
});
export const Ii = (0, i.HR)("a", {
	bActivateByDefault: true,
});
export const BA = (0, i.v0)("input");
export const dO = (0, i.v0)("textarea");
export const EI = (0, i.HR)("img", {
	bDOMElementFocusByDefault: false,
});
(0, i.HR)("label", {
	bActivateByDefault: true,
	bDOMElementFocusByDefault: false,
});
(0, i.HR)("section", {
	bFocusableByDefault: false,
});
(0, i.HR)("form", {
	bFocusableByDefault: false,
});
export function lv(e) {
	const { Component: t, children: n } = e;
	const s = r.useMemo(
		() => ({
			Component: t,
		}),
		[t],
	);
	return r.createElement(
		i.Mg,
		{
			value: s,
		},
		n,
	);
}
export function O7(e, t, n = false) {
	r.useEffect(() => {
		const r = e.current;
		if (r) {
			if (t) {
				r.Activate(n);
			} else {
				r.Deactivate();
			}
		}
	}, [t, n, e]);
}
