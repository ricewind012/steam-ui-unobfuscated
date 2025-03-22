var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require("./60712.js");
var s = a;
class _o {
	constructor() {
		(0, i.Gn)(this);
	}
	m_nRightPanelWidth = 0;
	m_nRightPanelHeight = 0;
	get rightPanelWidth() {
		return this.m_nRightPanelWidth;
	}
	get rightPanelHeight() {
		return this.m_nRightPanelHeight;
	}
	SetDimensions(e, t) {
		this.m_nRightPanelWidth = e;
		this.m_nRightPanelHeight = t;
	}
	GetComputedDisplaySize(e) {
		if (e != 0) {
			return e;
		}
		const t = this.m_nRightPanelWidth;
		const r = this.m_nRightPanelHeight;
		if (t <= parseInt(s.RightBreakNarrow) || r <= parseInt(s.BreakShort)) {
			return 1;
		} else if (t >= parseInt(s.RightBreakWide)) {
			return 3;
		} else {
			return 2;
		}
	}
}
(0, n.Cg)([i.sH], _o.prototype, "m_nRightPanelWidth", undefined);
(0, n.Cg)([i.sH], _o.prototype, "m_nRightPanelHeight", undefined);
(0, n.Cg)([i.XI], _o.prototype, "SetDimensions", null);
export const o = new _o();
