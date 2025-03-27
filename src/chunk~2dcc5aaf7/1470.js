import n from "./63696.js";
import i from "./64608.js";
import { l9 } from "./5640.js";
import { wT } from "./28934.js";
import o from "./69164.js";
import l, { A } from "./90765.js";
import c from "./94692.js";
const m = c;
export function E(e) {
	const { feature: t, disabled: r, as: o, ...l } = e;
	const c = l9(t);
	const m = c !== 0;
	const u = wT();
	const d = o || i.xh;
	return n.createElement(d, {
		...l,
		onActivate: m && !r ? () => u(c, t) : undefined,
		disabled: m || r,
	});
}
export function t(e) {
	const { feature: t, disabled: r, children: c, className: u, as: d, ...A } = e;
	const p = l9(t);
	const g = p !== 0;
	const h = wT();
	const C = d || i.$n;
	return n.createElement(
		C,
		{
			...A,
			focusable: !g,
			className: A(m.ParentalButton, u, g && m.Blocked),
			disabled: g || r,
		},
		c,
		n.createElement(o.Z, {
			className: m.ParentalWrapper,
			onActivate:
				g && !r
					? (e) => {
							h(p, t);
							e.stopPropagation();
						}
					: undefined,
		}),
	);
}
