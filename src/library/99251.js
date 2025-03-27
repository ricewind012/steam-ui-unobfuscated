import r from "./63696.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import { CH } from "./42898.js";
import { QS } from "./28864.js";
function a(e, t) {
	return QS(
		(n) => {
			if (!n) {
				return;
			}
			const r = t(n.ownerDocument.defaultView, (t) => {
				e(t[0]);
			});
			r.observe(n);
			return () => r.unobserve(n);
		},
		[e, t],
	);
}
export function wY(e) {
	return a(
		e,
		r.useCallback(
			(e, t) =>
				e.ResizeObserver
					? new e.ResizeObserver(t)
					: (AssertMsg(false, "ResizeObserver is not available"),
						{
							observe: () => {},
							unobserve: () => {},
							disconnect: () => {},
						}),
			[],
		),
	);
}
export function BL(e, t) {
	return a(
		e,
		r.useCallback((e, n) => new e.IntersectionObserver(n, t), [t]),
	);
}
export function p1() {
	return wY(CH());
}
export function Fd(e, ...t) {
	const n = new e.ownerDocument.defaultView.ResizeObserver(...t);
	n.observe(e);
	return n;
}
export function md(e, ...t) {
	const n = new e.ownerDocument.defaultView.IntersectionObserver(...t);
	n.observe(e);
	return n;
}
