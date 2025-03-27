import { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import { B6 } from "./49519.js";
class s {
	constructor() {
		Gn(this);
	}
	m_history = undefined;
	m_locationPathname = undefined;
	m_navigator;
	UpdateRoutingInfo(e, t) {
		this.m_history = e;
		this.m_locationPathname = t.pathname;
	}
	BRouteMatch(e) {
		return !!B6(this.m_locationPathname, e);
	}
	GetNavigator() {
		return this.m_navigator;
	}
	SetNavigator(e) {
		this.m_navigator = e;
	}
}
Cg([i.sH], s.prototype, "m_history", undefined);
Cg([i.sH], s.prototype, "m_locationPathname", undefined);
export const z = new s();
