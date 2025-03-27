import { Cg } from "./34629.js";
import i from "./18057.js";
import a from "./52451.js";
import { q3 } from "./90095.js";
import o from "./5640.js";
import l, { Gn } from "./89193.js";
class c {
	constructor() {
		Gn(this);
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
Cg([l.sH], c.prototype, "m_bVisible", undefined);
Cg([l.sH], c.prototype, "m_sTargetPage", undefined);
Cg([l.XI.bound], c.prototype, "SetVisibleAndNavigate", null);
Cg([a.oI], c.prototype, "SetPopup", null);
Cg([a.oI], c.prototype, "SetNavigateToPage", null);
export const Ti = new c();
export function nT() {
	return [q3(() => Ti.bVisible), Ti.SetVisibleAndNavigate];
}
export function Sj(e) {
	Ti.SetVisibleAndNavigate(true, e);
}
