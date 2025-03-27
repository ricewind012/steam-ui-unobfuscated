import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import s, { useContext, createContext } from "./63696.js";
import { createPortal } from "./78325.js";
import { QS } from "./28864.js";
export function D(e) {
	const t = useContext(AContext);
	if ("name" in e) {
		return s.createElement(m, {
			...e,
			manager: t,
		});
	} else {
		return s.createElement(u, {
			...e,
			manager: t,
		});
	}
}
function m(e) {
	const { manager, name, ...n } = e;
	const i = QS((e) => manager.Register(name, e), [name, manager]);
	return s.createElement("div", {
		ref: i,
		...n,
	});
}
function u(e) {
	const { manager, target, children } = e;
	const i = q3(() => manager.GetSlot(target));
	if (i) {
		return createPortal(children, i);
	} else {
		return null;
	}
}
class d {
	m_slots = {};
	constructor() {
		Gn(this);
	}
	Register(e, t) {
		this.m_slots[e] = t;
		return () => {
			delete this.m_slots[e];
		};
	}
	GetSlot(e) {
		return this.m_slots[e];
	}
}
Cg([i.sH], d.prototype, "m_slots", undefined);
const AContext = createContext(new d());
