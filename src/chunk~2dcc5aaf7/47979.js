var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./52451.js");
class s {
	constructor() {
		(0, i.Gn)(this);
	}
	m_mapOfSelectedApps = new Map();
	m_anchor;
	m_bShouldAutoSelectAnchor;
	m_lastRangeSelection;
	SetAnchor(e) {
		this.m_anchor = e;
		this.m_bShouldAutoSelectAnchor = true;
		this.m_lastRangeSelection = this.m_anchor;
	}
	RemoveAnchor(e) {
		if (this.m_anchor && this.m_anchor.key == e.key) {
			this.m_anchor = null;
			this.m_lastRangeSelection = this.m_anchor;
		}
	}
	ToggleAppIsSelected(e) {
		if (this.m_mapOfSelectedApps.has(e.key)) {
			this.m_mapOfSelectedApps.delete(e.key);
		} else {
			if (
				this.m_mapOfSelectedApps.size == 0 &&
				this.m_anchor &&
				this.m_bShouldAutoSelectAnchor
			) {
				this.m_mapOfSelectedApps.set(this.m_anchor.key, this.m_anchor);
			}
			this.m_mapOfSelectedApps.set(e.key, e);
		}
		if (this.m_anchor?.key != e.key) {
			this.m_anchor = e;
			this.m_bShouldAutoSelectAnchor = false;
			this.m_lastRangeSelection = this.m_anchor;
		}
	}
	SelectRange(e, t) {
		this.ClearSelection();
		const r = this.m_anchor && t(this.m_anchor, e);
		if (!r) {
			this.m_anchor = e;
			this.m_mapOfSelectedApps.set(e.key, e);
			return;
		}
		this.m_lastRangeSelection = e;
		for (const e of r) {
			this.m_mapOfSelectedApps.set(e.key, e);
		}
	}
	BIsSelectedApp(e) {
		return this.m_mapOfSelectedApps.has(e.key);
	}
	ClearSelection() {
		this.m_mapOfSelectedApps.clear();
	}
	GetSelectedAppsInContext() {
		return Array.from(this.m_mapOfSelectedApps.values());
	}
	GetSelectedAppIds() {
		const e = new Set();
		this.m_mapOfSelectedApps.forEach((t) => e.add(t.appid));
		return Array.from(e);
	}
	GetLastRangeSelection() {
		return this.m_lastRangeSelection;
	}
}
(0, n.Cg)([i.sH], s.prototype, "m_mapOfSelectedApps", undefined);
(0, n.Cg)([a.oI], s.prototype, "SetAnchor", null);
(0, n.Cg)([a.oI], s.prototype, "RemoveAnchor", null);
(0, n.Cg)([a.oI], s.prototype, "ToggleAppIsSelected", null);
(0, n.Cg)([i.XI.bound], s.prototype, "SelectRange", null);
(0, n.Cg)([a.oI], s.prototype, "BIsSelectedApp", null);
(0, n.Cg)([a.oI], s.prototype, "ClearSelection", null);
(0, n.Cg)([a.oI], s.prototype, "GetSelectedAppsInContext", null);
(0, n.Cg)([a.oI], s.prototype, "GetSelectedAppIds", null);
(0, n.Cg)([a.oI], s.prototype, "GetLastRangeSelection", null);
export const b = new s();
window.multiSelectStore = b;
