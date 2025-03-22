var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./78325.js");
var l = require(/*webcrack:missing*/ "./28864.js");
export function D(e) {
	const t = (0, s.useContext)(A);
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
	const { manager: t, name: r, ...n } = e;
	const i = (0, l.QS)((e) => t.Register(r, e), [r, t]);
	return s.createElement("div", {
		ref: i,
		...n,
	});
}
function u(e) {
	const { manager: t, target: r, children: n } = e;
	const i = (0, a.q3)(() => t.GetSlot(r));
	if (i) {
		return (0, o.createPortal)(n, i);
	} else {
		return null;
	}
}
class d {
	m_slots = {};
	constructor() {
		(0, i.Gn)(this);
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
(0, n.Cg)([i.sH], d.prototype, "m_slots", undefined);
const A = (0, s.createContext)(new d());
