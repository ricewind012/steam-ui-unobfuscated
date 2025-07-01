import { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import { LoginStore } from "../../actual_src/stores/loginstore.js";
import { B6 } from "./49519.js";
import l from "./18057.js";
export function VA() {
	return q3(() => Ih.BKioskModeEnabled());
}
export function fK() {
	return q3(() => Ih.BKioskModeLocked());
}
class u {
	m_bLocked = true;
	m_bEnabledForLocalTesting = false;
	constructor() {
		Gn(this);
	}
	BHasKioskModeFeatureBlock(e) {
		if (!this.BKioskModeLocked()) {
			return false;
		}
		switch (e) {
			case 11:
			case 0: {
				return false;
			}
			default: {
				return true;
			}
		}
	}
	BHasKioskModeRouteBlock(e, t) {
		if (!this.BKioskModeLocked()) {
			return false;
		}
		const r = [l.BV.Downloads()];
		for (const t of r) {
			if (B6(e, t)) {
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
			LoginStore.accountName.startsWith("deck_convention_")
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
Cg([i.sH], u.prototype, "m_bLocked", undefined);
Cg([i.sH], u.prototype, "m_bEnabledForLocalTesting", undefined);
Cg([i.XI], u.prototype, "KioskModeLock", null);
Cg([i.XI], u.prototype, "BKioskModeUnlock", null);
export const Ih = new u();
