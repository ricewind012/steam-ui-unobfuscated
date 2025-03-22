var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./42689.js");
var s = a;
var o = require(/*webcrack:missing*/ "./63696.js");
require("./39039.js");
var l = require(/*webcrack:missing*/ "./72476.js");
class c {
	constructor() {
		(0, i.Gn)(this);
	}
	bOpenEventLandingPage = false;
	bIncludeFeaturedAsGameSource = true;
	nOverrideDateNow = undefined;
	get bRequireAllEventsLoadedInTimeBlock() {
		return false;
	}
	get bIsFollowingEnabled() {
		return !(0, l.Y2)();
	}
	get bIsCuratorsEnabled() {
		return !(0, l.Y2)();
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
				"CEventCalendarDevFeatures overriding partner event time: " +
					this.nOverrideDateNow +
					" " +
					r.format(),
			);
		}
	}
}
(0, n.Cg)([i.sH], c.prototype, "nOverrideDateNow", undefined);
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
