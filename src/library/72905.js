import r from "./63696.js";
import i from "./45328.js";
import "./72476.js";
import s, { n9 } from "./92059.js";
export function A(e) {
	const { children, ...n } = e;
	const o = n9();
	const a = r.useMemo(
		() => ({
			...i.Ay.GetDefaultParams(),
			...o,
			...n,
		}),
		[o, n.domain, n.controller, n.method, n.submethod, n.feature, n.depth],
	);
	return <s.nn {...a}>{children}</s.nn>;
}
