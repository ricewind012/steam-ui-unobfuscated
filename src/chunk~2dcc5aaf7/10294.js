var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require("./33512.js");
var o = require(/*webcrack:missing*/ "./49519.js");
var l = require("./18057.js");
export function VA() {
	return (0, a.q3)(() => Ih.BKioskModeEnabled());
}
export function fK() {
	return (0, a.q3)(() => Ih.BKioskModeLocked());
}
class u {
	m_bLocked = true;
	m_bEnabledForLocalTesting = false;
	constructor() {
		(0, i.Gn)(this);
	}
	BHasKioskModeFeatureBlock(e) {
		if (!this.BKioskModeLocked()) {
			return false;
		}
		switch (e) {
			case 11:
			case 0:
				return false;
			default:
				return true;
		}
	}
	BHasKioskModeRouteBlock(e, t) {
		if (!this.BKioskModeLocked()) {
			return false;
		}
		const r = [l.BV.Downloads()];
		for (const t of r) {
			if ((0, o.B6)(e, t)) {
				return true;
			}
		}
		return false;
	}
	BKioskModeLocked() {
		return this.BKioskModeEnabled() && this.m_bLocked;
	}
	BKioskModeEnabled() {
		return (
			!!this.m_bEnabledForLocalTesting ||
			s.b.accountName.startsWith("deck_convention_")
		);
	}
	KioskModeLock() {
		this.m_bLocked = true;
	}
	BKioskModeUnlock(e) {
		const t = e == "8991";
		if (t) {
			this.m_bLocked = false;
		}
		return t;
	}
}
(0, n.Cg)([i.sH], u.prototype, "m_bLocked", undefined);
(0, n.Cg)([i.sH], u.prototype, "m_bEnabledForLocalTesting", undefined);
(0, n.Cg)([i.XI], u.prototype, "KioskModeLock", null);
(0, n.Cg)([i.XI], u.prototype, "BKioskModeUnlock", null);
export const Ih = new u();
