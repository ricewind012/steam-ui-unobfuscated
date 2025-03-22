var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./18057.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require("./5640.js");
var l = require(/*webcrack:missing*/ "./89193.js");
class c {
	constructor() {
		(0, l.Gn)(this);
	}
	m_bVisible = false;
	m_sTargetPage = null;
	m_popup = null;
	m_fnNavigateToPage = null;
	get bVisible() {
		return this.m_bVisible;
	}
	get sTargetPage() {
		return this.m_sTargetPage;
	}
	SetVisibleAndNavigate(e, t) {
		if (o.jR.isKioskModeLocked) {
			console.warn("Declining to open settings dialog: kiosk lock enabled");
		} else {
			this.m_bVisible = e;
			if (t) {
				this.m_sTargetPage = t;
			}
			if (e && this.m_popup) {
				this.m_popup?.SteamClient?.Window?.BringToFront();
			}
			if (this.m_fnNavigateToPage && t) {
				const e = i.BV.Settings[t]();
				this.m_fnNavigateToPage(e);
			}
		}
	}
	SetPopup(e) {
		this.m_popup = e;
	}
	SetNavigateToPage(e) {
		this.m_fnNavigateToPage = e;
	}
}
(0, n.Cg)([l.sH], c.prototype, "m_bVisible", undefined);
(0, n.Cg)([l.sH], c.prototype, "m_sTargetPage", undefined);
(0, n.Cg)([l.XI.bound], c.prototype, "SetVisibleAndNavigate", null);
(0, n.Cg)([a.oI], c.prototype, "SetPopup", null);
(0, n.Cg)([a.oI], c.prototype, "SetNavigateToPage", null);
export const Ti = new c();
export function nT() {
	return [(0, s.q3)(() => Ti.bVisible), Ti.SetVisibleAndNavigate];
}
export function Sj(e) {
	Ti.SetVisibleAndNavigate(true, e);
}
