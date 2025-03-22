var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./49519.js");
class s {
	constructor() {
		(0, i.Gn)(this);
	}
	m_history = undefined;
	m_locationPathname = undefined;
	m_navigator;
	UpdateRoutingInfo(e, t) {
		this.m_history = e;
		this.m_locationPathname = t.pathname;
	}
	BRouteMatch(e) {
		return !!(0, a.B6)(this.m_locationPathname, e);
	}
	GetNavigator() {
		return this.m_navigator;
	}
	SetNavigator(e) {
		this.m_navigator = e;
	}
}
(0, n.Cg)([i.sH], s.prototype, "m_history", undefined);
(0, n.Cg)([i.sH], s.prototype, "m_locationPathname", undefined);
export const z = new s();
