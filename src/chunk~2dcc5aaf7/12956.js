import { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./42689.js";
import o from "./63696.js";
import "./39039.js";
import l, { Y2 } from "./72476.js";
const s = a;
class c {
	constructor() {
		Gn(this);
	}
	bOpenEventLandingPage = false;
	bIncludeFeaturedAsGameSource = true;
	nOverrideDateNow = undefined;
	get bRequireAllEventsLoadedInTimeBlock() {
		return false;
	}
	get bIsFollowingEnabled() {
		return !Y2();
	}
	get bIsCuratorsEnabled() {
		return !Y2();
	}
	get bIncludeCurators() {
		return true;
	}
	GetTimeNowWithOverride() {
		if (this.nOverrideDateNow) {
			return this.nOverrideDateNow;
		} else {
			return Math.floor(Date.now() / 1000);
		}
	}
	GetTimeNowWithOverrideAsDate() {
		if (this.nOverrideDateNow) {
			return new Date(this.nOverrideDateNow * 1000);
		} else {
			return new Date();
		}
	}
	BHasTimeOverride() {
		return Boolean(this.nOverrideDateNow);
	}
	ParseDevOverrides(e) {
		if (!e || e.length == 0) {
			return;
		}
		const t = new URLSearchParams(e[0] == "?" ? e.substring(1) : e);
		if (
			t.has("t") &&
			(l.TS.WEB_UNIVERSE == "dev" || l.TS.WEB_UNIVERSE == "beta")
		) {
			const e = t.get("t");
			let r = /^\d+$/.test(e) ? s.unix(Number.parseInt(e)) : s(e);
			this.nOverrideDateNow = Math.floor(r.unix());
			console.log(
				`CEventCalendarDevFeatures overriding partner event time: ${
					this.nOverrideDateNow
				} ${r.format()}`,
			);
		}
	}
}
Cg([i.sH], c.prototype, "nOverrideDateNow", undefined);
export const HD = new c();
window.g_EventCalendarDevFeatures = HD;
const u = new Date();
const d = Math.floor(u.getTime() / 1000);
export function sB() {
	return HD.nOverrideDateNow ?? d;
}
export function f1() {
	return o.useMemo(() => sB(), []);
}
