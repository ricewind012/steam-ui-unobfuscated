import { Seconds, GetUnixTime } from "../../actual_src/utils/time.js";
import { FindAndRemoveWhere } from "../../actual_src/utils/arrayutils.js";
import n, { Cg } from "./34629.js";
import s, { Gn, fm } from "./89193.js";
import * as o from "./78057.js";
import * as l from "./88696.js";
import * as c from "./91745.js";
import { q3 } from "./90095.js";
import * as u from "./44926.js";
import d, { bY } from "./67429.js";
const A = Seconds.PerHour * 12;
const p = 646570;
class g {
	constructor() {
		Gn(this);
	}
	m_postGameSummary = null;
	m_rgNewDLC = [];
	m_unAppID = 0;
	m_bUpdateInProgress = false;
	m_bRerunUpdate = false;
	m_session = new b();
	m_bLoadedPreviousSessionData = false;
	m_hAppDetailsAutorun = null;
}
Cg([s.sH], g.prototype, "m_postGameSummary", undefined);
Cg([s.sH], g.prototype, "m_rgNewDLC", undefined);
const h = "spotlight_dlc_store";
const C = "spotlight_gameplaysession_store";
class _ {
	m_mapAppData = new Map();
	m_CMInterface = null;
	m_localStorage = new l.A();
	m_dlcLocalStore = null;
	m_gamePlayLocalStore = null;
	constructor() {
		Gn(this);
	}
	async Init(e) {
		this.m_CMInterface = e;
		SteamClient.GameSessions.RegisterForScreenshotNotification(
			this.OnScreenshotNotification,
		);
		SteamClient.GameSessions.RegisterForAchievementNotification(
			this.OnAchievementNotification,
		);
		u.xM.RegisterForNotifyClipCreated(this.OnClipCreated);
		u.xM.RegisterForNotifyClipDeleted(this.OnClipDeleted);
		u.xM.RegisterForNotifyPostGameHighlightsChanged(
			this.OnRecordingHighlightChanged,
		);
		[this.m_dlcLocalStore, this.m_gamePlayLocalStore] = await Promise.all([
			this.m_localStorage.GetObject(h),
			this.m_localStorage.GetObject(C),
		]);
		this.m_dlcLocalStore ||= {};
		this.m_gamePlayLocalStore ||= {};
	}
	GetCM() {
		return this.m_CMInterface;
	}
	BHasAppData(e) {
		return this.m_mapAppData.has(e);
	}
	GetOrCreateAppData(e) {
		let t = this.m_mapAppData.get(e);
		if (!t) {
			t = new g();
			t.m_unAppID = e;
			this.m_mapAppData.set(e, t);
		}
		return t;
	}
	EnterAppDetailsPage(e) {
		let t = this.GetOrCreateAppData(e);
		t.m_hAppDetailsAutorun ||= fm(() => {
			const r = o.H.GetAppDetails(e);
			if (r) {
				this.UpdateNewDLCToShow(t, r);
			}
		});
		this.UpdatePostGameSummaryForApp(t);
	}
	ExitAppDetailsPage(e) {
		let t = this.GetOrCreateAppData(e);
		if (t.m_hAppDetailsAutorun) {
			t.m_hAppDetailsAutorun();
			t.m_hAppDetailsAutorun = null;
		}
	}
	GetPostGameSummary(e) {
		return this.GetOrCreateAppData(e).m_postGameSummary;
	}
	GetFeaturedNewDLC(e) {
		return this.GetOrCreateAppData(e).m_rgNewDLC;
	}
	async UpdatePostGameSummaryForApp(e) {
		if (e.m_bUpdateInProgress) {
			e.m_bRerunUpdate = true;
		} else {
			e.m_bUpdateInProgress = true;
			await this.UpdatePostGameSummaryForApp_Internal(e);
			e.m_bUpdateInProgress = false;
			if (e.m_bRerunUpdate) {
				e.m_bRerunUpdate = false;
				this.UpdatePostGameSummaryForApp(e);
			}
		}
	}
	async UpdatePostGameSummaryForApp_Internal(e) {
		if (!e.m_bLoadedPreviousSessionData) {
			await this.LoadPreviousSessionData(e);
		}
		e.m_postGameSummary = e.m_session.HasSessionEvents() ? e.m_session : null;
	}
	GetStartOfSessionTimestamp(e) {
		let t = this.GetGamePlaySpotlightTime(e);
		let r = Math.min(Seconds.PerDay * 3, GetUnixTime() - t);
		return GetUnixTime() - r;
	}
	async LoadPreviousSessionData(e) {
		e.m_bLoadedPreviousSessionData = true;
		let t = this.GetStartOfSessionTimestamp(e.m_unAppID);
		let r = await SteamClient.Apps.GetScreenshotsInTimeRange(e.m_unAppID, t, 0);
		let n = await this.WaitForAchievementsInRange(e.m_unAppID, t, 0);
		let i = await this.WaitForClips(e.m_unAppID, t);
		let a = await this.WaitForRecordingHighlights(e.m_unAppID, t);
		let s = [];
		s = [...r, ...n, ...i];
		s.sort((e, t) => B(e) - B(t));
		for (let t of s) {
			if (y(t)) {
				let r = {
					strOperation: "written",
					unAppID: e.m_unAppID,
					hScreenshot: t.hHandle,
					details: t,
				};
				e.m_session.BAddScreenshotNotification(r);
			} else if (S(t)) {
				let r = {
					unAppID: e.m_unAppID,
					nCurrentProgress: 0,
					nMaxProgress: 0,
					achievement: t,
				};
				e.m_session.AddAchievement(r);
			} else if (w(t)) {
				e.m_session.AddClip(t);
			}
		}
		e.m_session.SetRecordingHighlights(a);
	}
	async WaitForAchievementsInRange(e, t, r) {
		let n = [];
		try {
			let i = await SteamClient.Apps.GetAchievementsInTimeRange(e, t, r);
			if (i) {
				n = i;
			}
		} catch (e) {}
		return n;
	}
	async WaitForClips(e, t) {
		return (
			(
				await u.xM.GetClips({
					game_id: bY(e),
					created_after: t,
				})
			)
				.Body()
				.clip() || []
		).map((e) => e.toObject());
	}
	async WaitForRecordingHighlights(e, t) {
		return (
			(
				await u.xM.GetAndTrimPostGameHighlights({
					game_id: bY(e),
					created_after: t,
				})
			)
				.Body()
				.events() || []
		).map((e) => e.toObject());
	}
	StopShowingGamePlaySpotlight(e) {
		let t = this.GetOrCreateAppData(e);
		if (!t.m_session.HasSessionEvents()) {
			return;
		}
		t.m_session.ClearSessionEvents();
		this.UpdatePostGameSummaryForApp_Internal(t);
		let r = GetUnixTime();
		if (!this.m_gamePlayLocalStore) {
			return;
		}
		let n = e.toString();
		let a = this.m_gamePlayLocalStore[n];
		a ||= 0;
		if (r != a) {
			if (r == 0) {
				delete this.m_gamePlayLocalStore[n];
			} else {
				this.m_gamePlayLocalStore[n] = r;
			}
			this.m_localStorage.StoreObject(C, this.m_gamePlayLocalStore);
		}
	}
	GetGamePlaySpotlightTime(e) {
		let t = e.toString();
		if (this.m_gamePlayLocalStore && this.m_gamePlayLocalStore[t]) {
			return this.m_gamePlayLocalStore[t];
		} else {
			return 0;
		}
	}
	StopShowingNewDLC(e) {
		let t = this.GetOrCreateAppData(e);
		if (t.m_rgNewDLC.length == 0) {
			return;
		}
		t.m_rgNewDLC = [];
		let r = GetUnixTime();
		let n = this.GetNewDLCTimeRanges(t.m_unAppID);
		n.rtShowStart = r;
		n.rtFirstShow = r;
		this.SetNewDLCTimeRanges(t.m_unAppID, n);
	}
	UpdateNewDLCToShow(e, t) {
		if (c.hG.GetToggle(7)) {
			this.SimulateNewDLC(e.m_unAppID);
			return;
		}
		let r = this.GetNewDLCTimeRanges(e.m_unAppID);
		let n = GetUnixTime();
		let a = n - Seconds.PerDay * 14;
		e.m_rgNewDLC = [];
		let s = 0;
		let o = 0;
		let l = true;
		for (let n of t.vecDLC) {
			if (n.bAvailableOnStore) {
				if (!(n.rtPurchaseDate < a)) {
					l = false;
					if (r.rtShowStart == 0 || !(n.rtPurchaseDate < r.rtShowStart)) {
						if (o == 0 || n.rtPurchaseDate > o) {
							o = n.rtPurchaseDate;
						}
						if (s == 0 || n.rtPurchaseDate < s) {
							s = n.rtPurchaseDate;
						}
						e.m_rgNewDLC.push(n);
					}
				}
			}
		}
		if (s > r.rtShowStart) {
			r.rtShowStart = s;
		}
		if (o > r.rtFirstShow) {
			r.rtFirstShow = n;
		}
		if (n >= r.rtFirstShow + A) {
			e.m_rgNewDLC = [];
		}
		if (l) {
			r.rtShowStart = 0;
			r.rtFirstShow = 0;
		}
		this.SetNewDLCTimeRanges(e.m_unAppID, r);
	}
	GetNewDLCTimeRanges(e) {
		let t = e.toString();
		if (!this.m_dlcLocalStore || !this.m_dlcLocalStore[t]) {
			return {
				rtShowStart: 0,
				rtFirstShow: 0,
			};
		}
		let r = this.m_dlcLocalStore[t];
		return Object.assign({}, r);
	}
	SetNewDLCTimeRanges(e, t) {
		let r = e.toString();
		if (!this.m_dlcLocalStore) {
			return;
		}
		let n = this.m_dlcLocalStore[r];
		n ||= {
			rtShowStart: 0,
			rtFirstShow: 0,
		};
		if (t.rtShowStart != n.rtShowStart || t.rtFirstShow != n.rtFirstShow) {
			if (t.rtShowStart == 0 && t.rtFirstShow == 0) {
				delete this.m_dlcLocalStore[r];
			} else {
				this.m_dlcLocalStore[r] = t;
			}
			this.m_localStorage.StoreObject(h, this.m_dlcLocalStore);
		}
	}
	OnScreenshotNotification(e) {
		if (e.unAppID == 0) {
			return;
		}
		let t = this.GetOrCreateAppData(e.unAppID);
		if (t.m_session.BAddScreenshotNotification(e)) {
			this.UpdatePostGameSummaryForApp(t);
		}
	}
	OnAchievementNotification(e) {
		if (e.unAppID == 0) {
			return;
		}
		let t = this.GetOrCreateAppData(e.unAppID);
		t.m_session.AddAchievement(e);
		this.UpdatePostGameSummaryForApp(t);
	}
	OnTradingCardNotification(e) {
		if (e.nAppID == 0) {
			return;
		}
		let t = this.GetOrCreateAppData(e.nAppID);
		t.m_session.AddTradingCard(e);
		this.UpdatePostGameSummaryForApp(t);
	}
	OnClipCreated(e) {
		let t = e.Body().summary().toObject();
		if (t.temporary) {
			return 1;
		}
		let r = new d.VS(t.game_id);
		if (!r.BIsValid() || !r.BIsSteamApp()) {
			return 1;
		}
		let n = this.GetOrCreateAppData(r.GetAppID());
		n.m_session.AddClip(t);
		this.UpdatePostGameSummaryForApp(n);
		return 1;
	}
	OnClipDeleted(e) {
		let t = e.Body().clip_id();
		let r = new d.VS(e.Body().game_id());
		if (r.BIsValid() && r.BIsSteamApp()) {
			this.GetOrCreateAppData(r.GetAppID()).m_session.RemoveClip(t);
			return 1;
		} else {
			return 1;
		}
	}
	OnRecordingHighlightChanged(e) {
		let t = new d.VS(e.Body().game_id());
		if (!t.BIsValid() || !t.BIsSteamApp()) {
			return 1;
		}
		if (!this.BHasAppData(t.GetAppID())) {
			return 1;
		}
		let r = this.GetStartOfSessionTimestamp(t.GetAppID());
		this.WaitForRecordingHighlights(t.GetAppID(), r).then((e) => {
			let r = this.GetOrCreateAppData(t.GetAppID());
			r.m_session.SetRecordingHighlights(e);
			this.UpdatePostGameSummaryForApp(r);
		});
		return 1;
	}
	BSimulateSummaryFakeAchievement(e) {
		if (e == 0) {
			return false;
		}
		let t = this.GetOrCreateAppData(e);
		const r = o.H.GetAppDetails(e);
		if (!r || !r.achievements.vecHighlight) {
			return false;
		}
		for (let n of r.achievements.vecHighlight) {
			if (
				t.m_session
					.GetSessionEvents()
					.findIndex(
						(e) =>
							e.m_achievement && e.m_achievement.achievement.strID == n.strID,
					) >= 0
			) {
				continue;
			}
			let r = {
				unAppID: e,
				nMaxProgress: 1,
				nCurrentProgress: 1,
				achievement: {
					...n,
					bAchieved: true,
					rtUnlocked: GetUnixTime(),
				},
			};
			this.OnAchievementNotification(r);
			return true;
		}
		console.log("No more test achievements!");
		return false;
	}
	async SimulatePressSummary() {
		if (this.GetOrCreateAppData(p).m_session.HasSessionEvents()) {
			this.SimulateSummaryClear(p);
			return;
		}
		let e = await SteamClient.Apps.GetScreenshotsInTimeRange(p, 0, 0);
		let t = GetUnixTime();
		let r = t - Seconds.PerDay;
		let n = {
			strID: "TIME_EATER",
			strName: "The Time Eater",
			strDescription: "Defeated the Time Eater.",
			strImage:
				"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/646570/92a08788e62ec08c84036cacb60524e16d56d9ed.jpg",
			bAchieved: true,
			rtUnlocked: r,
			flAchieved: 55.5,
			bHidden: false,
		};
		let a = {
			unAppID: p,
			nMaxProgress: 1,
			nCurrentProgress: 1,
			achievement: n,
		};
		this.OnAchievementNotification(a);
		n = {
			strID: "ASCEND_0",
			strName: "Ascend 0",
			strDescription: "Unlock Ascension mode.",
			strImage:
				"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/646570/a24229e0772b333e8e374c22cffd8619998bb19b.jpg",
			bAchieved: true,
			rtUnlocked: r,
			flAchieved: 67,
			bHidden: false,
		};
		a = {
			unAppID: p,
			nMaxProgress: 1,
			nCurrentProgress: 1,
			achievement: n,
		};
		this.OnAchievementNotification(a);
		let s = e.pop();
		if (s) {
			let e = {
				strOperation: "written",
				hScreenshot: s.hHandle,
				unAppID: s.nAppID,
				details: {
					...s,
					nCreated: r,
				},
			};
			this.OnScreenshotNotification(e);
		} else {
			console.log("No more screenshots to add");
		}
		s = e.pop();
		if (s) {
			let e = {
				strOperation: "written",
				hScreenshot: s.hHandle,
				unAppID: s.nAppID,
				details: {
					...s,
					nCreated: t,
				},
			};
			this.OnScreenshotNotification(e);
		} else {
			console.log("No more screenshots to add");
		}
		let o = {
			nAppID: p,
			strName: "Time Eater",
			strTitle: "Time Eater",
			strImgURL:
				"https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bk9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdA3g5gMEPvUZZEaiHLrVJRsl8vGuCUY7Cjc9ehDNVzDMAfnStiiQrcex4NM6b9Az2pKmoHWDyenHNIiDeGQNqGeZZN23bqzWk7bmXFGmYROl-QFpXL6ZQoGVKOMCOP0A00YUCqTe52U5tGVAqfddCdR2Ew3kSNrh4n3gRJpsAzCamJJSLhlsxPhNuU7rvXr7DbIPzkionWRNgTKRPYtqcvDuspsDnLPqHrcIm1Wk",
			strArtworkURL:
				"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/646570/85b510e2e164070a59947395ff91d250c010a5c9.jpg",
			strMarketHash: "646570-Time Eater",
			nOwned: 1,
			rtReceived: t,
		};
		this.OnTradingCardNotification(o);
		n = {
			strID: "CATALYST",
			strName: "Catalyst",
			strDescription: "Apply 99 or more Poison on a single enemy.",
			strImage:
				"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/646570/a87d1ba5946edaba49f377f698d4a39af9f327f3.jpg",
			bAchieved: true,
			rtUnlocked: t,
			flAchieved: 42.5,
			bHidden: false,
		};
		a = {
			unAppID: p,
			nMaxProgress: 1,
			nCurrentProgress: 1,
			achievement: n,
		};
		this.OnAchievementNotification(a);
		n = {
			strID: "OH_DONUT",
			strName: "Ooh Donut!",
			strDescription: "Finish Donu with a Feed.",
			strImage:
				"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/646570/5c9fb117629ca3e0812a1dec824505fea8982fc9.jpg",
			bAchieved: true,
			rtUnlocked: t,
			flAchieved: 7.099999904632568,
			bHidden: false,
		};
		a = {
			unAppID: p,
			nMaxProgress: 1,
			nCurrentProgress: 1,
			achievement: n,
		};
		this.OnAchievementNotification(a);
	}
	SimulateSummaryClear(e) {
		if (e == 0) {
			return;
		}
		this.GetOrCreateAppData(e).m_session.ClearSessionEvents();
	}
	SimulateSummaryForceNewDay(e) {
		let t = this.GetOrCreateAppData(e);
		for (let e of t.m_session.GetSessionEvents()) {
			if (e.m_achievement) {
				e.m_achievement.achievement.rtUnlocked -= Seconds.PerDay;
			} else if (e.m_screenshot) {
				console.log(
					"simulating screenshots moving to an older day not supported",
				);
			}
		}
	}
	SimulateNewDLC(e) {
		let t = this.GetOrCreateAppData(e);
		const r = o.H.GetAppDetails(e);
		if (r && r.achievements.vecHighlight) {
			t.m_rgNewDLC = [];
			for (let e of r.vecDLC) {
				if (e.bAvailableOnStore) {
					t.m_rgNewDLC.push(e);
				}
			}
		}
	}
}
function f(e, t) {
	return e.findIndex((e) => !!e.m_clip && e.m_clip.clip_id == t);
}
Cg([s.XI], _.prototype, "UpdateNewDLCToShow", null);
Cg([s.XI.bound], _.prototype, "OnScreenshotNotification", null);
Cg([s.XI.bound], _.prototype, "OnAchievementNotification", null);
Cg([s.XI.bound], _.prototype, "OnTradingCardNotification", null);
Cg([s.XI.bound], _.prototype, "OnClipCreated", null);
Cg([s.XI.bound], _.prototype, "OnClipDeleted", null);
Cg([s.XI.bound], _.prototype, "OnRecordingHighlightChanged", null);
class b {
	m_rgSessionEvents = [];
	constructor() {
		Gn(this);
	}
	PushSessionEvent(e) {
		let t = this.m_rgSessionEvents.findIndex((e) => !!e.m_recordingHighlights);
		let r = null;
		if (t >= 0) {
			r = this.m_rgSessionEvents.splice(t, 1)[0];
		}
		this.m_rgSessionEvents.push(e);
		if (r && !e.m_recordingHighlights) {
			this.m_rgSessionEvents.push(r);
		}
	}
	BAddScreenshotNotification(e) {
		let t = (t) =>
			!!t.m_screenshot &&
			t.m_screenshot.nAppID == e.unAppID &&
			t.m_screenshot.hHandle == e.hScreenshot;
		if (e.strOperation == "written") {
			if (this.m_rgSessionEvents.findIndex(t) < 0) {
				this.PushSessionEvent({
					m_screenshot: e.details,
				});
				return true;
			}
		} else if (e.strOperation == "deleted") {
			FindAndRemoveWhere(this.m_rgSessionEvents, t);
			return true;
		}
		return false;
	}
	AddAchievement(e) {
		if (e.achievement.bAchieved) {
			this.PushSessionEvent({
				m_achievement: e,
			});
		}
	}
	AddTradingCard(e) {
		this.PushSessionEvent({
			m_tradingCard: e,
		});
	}
	AddClip(e) {
		if (f(this.m_rgSessionEvents, e.clip_id) < 0) {
			this.PushSessionEvent({
				m_clip: e,
			});
		}
	}
	RemoveClip(e) {
		let t = f(this.m_rgSessionEvents, e);
		if (t >= 0) {
			this.m_rgSessionEvents.splice(t, 1);
		}
	}
	SetRecordingHighlights(e) {
		if (e.length != 0) {
			this.PushSessionEvent({
				m_recordingHighlights: e,
			});
		} else {
			FindAndRemoveWhere(
				this.m_rgSessionEvents,
				(e) => !!e.m_recordingHighlights,
			);
		}
	}
	GetSessionEvents() {
		return this.m_rgSessionEvents;
	}
	ClearSessionEvents() {
		return this.m_rgSessionEvents.splice(0);
	}
	HasSessionEvents() {
		return this.m_rgSessionEvents.length > 0;
	}
}
function y(e) {
	return e.hHandle !== undefined;
}
function S(e) {
	return e.bAchieved !== undefined;
}
function w(e) {
	return e.clip_id !== undefined;
}
function B(e) {
	if (S(e)) {
		return e.rtUnlocked;
	} else if (y(e)) {
		return e.nCreated;
	} else if (w(e)) {
		return e.date_clipped;
	} else if (
		((e) => {
			let t = e;
			return t.possible_clip !== undefined && t.entry_id !== undefined;
		})(e)
	) {
		return e.rt_created;
	} else {
		return 0;
	}
}
export function BI(e) {
	return q3(() => Ri.GetFeaturedNewDLC(e));
}
Cg([s.sH.shallow], b.prototype, "m_rgSessionEvents", undefined);
Cg([s.XI.bound], b.prototype, "PushSessionEvent", null);
export const Ri = new _();
window.appSpotlightStore = Ri;
