import n from "./28869.js";
import i from "./69164.js";
import { HJ } from "./45967.js";
import { Ue } from "./52451.js";
import { j, l as l_1 } from "./53379.js";
import l, { createContext, useContext } from "./63696.js";
import c from "./90242.js";
export const ElContext = createContext(null);
const u = () => useContext(ElContext);
export function Bi(e) {
	return (
		<i.r Component={A}>
			<c.lv Component={p}>{e.children}</c.lv>
		</i.r>
	);
}
function A(e) {
	const { node, divRef, ...i } = e;
	const c = u();
	const m = HJ(2, () => node?.GetFocusable() == "self" || i.onClick != null);
	const d = HJ(1, () => c?.HasContextMenu(node));
	const A = j(i);
	l_1(i);
	if (c) {
		i.onContextMenu = (r) => {
			if (!c.OnContextMenu(node, r)) {
				e.onContextMenu?.(r);
			}
		};
	}
	const p = Ue(m, d, A, divRef);
	return <n.D0 {...i} divRef={p} node={node} />;
}
function p(e) {
	const { Component, node, divRef, ...i } = e;
	const c = HJ(2, () => node?.GetFocusable() == "self" || i.onClick != null);
	const m = j(i);
	l_1(i);
	const u = Ue(c, m, divRef);
	return <Component {...i} node={node} divRef={u} />;
}
