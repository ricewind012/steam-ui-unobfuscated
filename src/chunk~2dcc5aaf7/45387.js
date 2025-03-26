var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
import { FilterInPlace } from "../../actual_src/utils/arrayutils.js";
var s = require("./81482.js");
var o = require(/*webcrack:missing*/ "./89193.js");
var l = require(/*webcrack:missing*/ "./44846.js");
var c = require("./92031.js");
var m = require(/*webcrack:missing*/ "./93960.js");
import { Seconds, GetUnixTime } from "../../actual_src/utils/time.js";
var d = require(/*webcrack:missing*/ "./79769.js");
var A = require(/*webcrack:missing*/ "./90095.js");
const p = Seconds.PerHour * 3;
const g = "GameReleased";
const h = "GameReleased_Merge";
function C(e, t) {
	return e < t;
}
class _ {
	constructor() {
		(0, o.Gn)(this);
	}
	m_cloudStorage;
	m_hPrePurchasedAppChanges;
	m_hCloudAutorun;
	m_schUpdate = new d.LU();
	m_nUpdating = 0;
	m_nShownAppID = c.sc;
	m_cloudData;
	m_bForceCloudUpdate = false;
	async Register() {
		s.s7.RegisterCustomConflictResolutionMethod(h, f);
	}
	async Init(e) {
		this.m_cloudStorage = e;
		this.m_hCloudAutorun = (0, o.fm)(this.ReadCloudData);
		this.m_hPrePurchasedAppChanges =
			SteamClient.Apps.RegisterForPrePurchasedAppChanges(() =>
				this.ScheduleUpdate(0),
			);
	}
	GetShownAppID() {
		return this.m_nShownAppID;
	}
	DismissShownApp() {
		if (this.m_nShownAppID == c.sc) {
			return;
		}
		let e = this.m_cloudData.apps.find((e) => this.m_nShownAppID == e.appid);
		if (e) {
			e.bDismissed = true;
			delete e.rtShown;
			this.m_bForceCloudUpdate = true;
		}
		this.m_nShownAppID = c.sc;
		this.ScheduleUpdate(0);
	}
	ReadCloudData() {
		let e;
		let t = this.m_cloudStorage.Get(g);
		if (t) {
			e = JSON.parse(t);
		}
		if (!e || !Array.isArray(e.apps)) {
			e = {
				apps: [],
				lastChangeNumber: 0,
			};
			this.m_bForceCloudUpdate = true;
		}
		this.m_cloudData = e;
		this.Update();
	}
	ScheduleUpdate(e) {
		e = Math.max(e, 0);
		this.m_schUpdate.Schedule(e, () => this.Update());
	}
	async Update() {
		this.m_schUpdate.Cancel();
		if (!this.m_cloudData) {
			return;
		}
		if (this.m_nUpdating > 0) {
			this.m_nUpdating++;
			return;
		}
		this.m_nUpdating = 1;
		let e = null;
		while (true) {
			let t = this.m_nUpdating;
			let r = this.m_cloudData.apps.map((e) => e.appid);
			e = await SteamClient.Apps.GetPrePurchasedApps(r);
			if (t == this.m_nUpdating) {
				break;
			}
		}
		if (this.m_cloudData.lastChangeNumber > e.lastChangeNumber) {
			return;
		}
		let t = this.m_bForceCloudUpdate;
		this.m_bForceCloudUpdate = false;
		if (
			(function (e) {
				let t = false;
				let r = GetUnixTime() - p;
				for (let n of e.apps) {
					if (n.rtShown && n.rtShown <= r && !n.bDismissed) {
						n.bDismissed = true;
						delete n.rtShown;
						t = true;
					}
				}
				return t;
			})(this.m_cloudData)
		) {
			t = true;
		}
		if (
			(function (e, t) {
				let r = false;
				for (let n of t) {
					if (!e.apps.find((e) => n.nAppID == e.appid)) {
						e.apps.push({
							appid: n.nAppID,
							state: n.eState,
						});
						r = true;
					}
				}
				FilterInPlace(e.apps, (e) => {
					let n = t.find((t) => t.nAppID == e.appid);
					if (n) {
						if (C(e.state, n.eState)) {
							e.state = n.eState;
							delete e.rtShown;
							delete e.bDismissed;
							r = true;
						}
						return (
							e.state != l.lc.k_EAppReleaseState_Released ||
							!e.bDismissed ||
							((r = true), false)
						);
					} else {
						r = true;
						return false;
					}
				});
				return r;
			})(this.m_cloudData, e.apps)
		) {
			t = true;
		}
		let [r, n] = (function (e) {
			let t = false;
			let r = e.apps.find((e) => e.rtShown && !e.bDismissed);
			if (!r) {
				r = e.apps.find((e) => {
					return (
						!e.bDismissed &&
						((t = e.state) == l.lc.k_EAppReleaseState_PreloadOnly ||
							t == l.lc.k_EAppReleaseState_Released)
					);
					var t;
				});
				if (r) {
					r.rtShown = GetUnixTime();
					t = true;
				}
			}
			return [t, r];
		})(this.m_cloudData);
		if (r) {
			t = true;
		}
		if (this.m_cloudData.lastChangeNumber != e.lastChangeNumber) {
			this.m_cloudData.lastChangeNumber = e.lastChangeNumber;
			t = true;
		}
		if (n) {
			this.m_nShownAppID = n.appid;
			let e = GetUnixTime() - n.rtShown;
			let t = p - e;
			this.ScheduleUpdate(t * 1000);
		} else {
			this.m_nShownAppID = c.sc;
		}
		if (t) {
			this.m_cloudStorage.StoreObject(
				g,
				this.m_cloudData,
				s.x2.CustomMethod,
				h,
			);
		}
		this.m_nUpdating = 0;
	}
}
function f(e, t) {
	let r;
	let n;
	let i = JSON.parse(e.value);
	let a = JSON.parse(t.value);
	if (i.lastChangeNumber > a.lastChangeNumber) {
		r = i;
		n = a;
	} else {
		r = a;
		n = i;
	}
	for (let e of r.apps) {
		let t = n.apps.find((t) => t.appid == e.appid);
		if (t) {
			if (C(e.state, t.state)) {
				e = t;
			} else if (e.state == t.state) {
				e.bDismissed = !!e.bDismissed || !!t.bDismissed;
				if (e.bDismissed) {
					delete e.rtShown;
				}
			}
		}
	}
	let o = JSON.stringify(r);
	return new s.HB(
		t.key,
		Math.max(e.timestamp, t.timestamp),
		false,
		o,
		t.conflictResolutionMethod,
		t.strMethodId,
	);
}
(0, n.Cg)([o.sH], _.prototype, "m_nShownAppID", undefined);
(0, n.Cg)([m.o], _.prototype, "DismissShownApp", null);
(0, n.Cg)([m.o], _.prototype, "ReadCloudData", null);
(0, n.Cg)([m.o], _.prototype, "ScheduleUpdate", null);
(0, n.Cg)([m.o], _.prototype, "Update", null);
export const X$ = new _();
export function i5() {
	return (0, A.q3)(() => X$.GetShownAppID());
}
export function JV() {
	return i.useCallback(() => X$.DismissShownApp(), []);
}
window.gameReleaseStore = X$;
