import i from "./83957.js";
import s from "./72476.js";
import { CScheduledFunc } from "../../actual_src/utils/callbackutils";
import l from "./42731.js";
export let E;
const a = i;
((e) => {
	e[(e.k_eDiscussions = 0)] = "k_eDiscussions";
	e[(e.k_eThumbsUp = 1)] = "k_eThumbsUp";
	e[(e.k_eClickThrough = 2)] = "k_eClickThrough";
	e[(e.k_eMuted = 3)] = "k_eMuted";
	e[(e.k_ePlayedVideo = 4)] = "k_ePlayedVideo";
	e[(e.k_eReminder_Opened = 5)] = "k_eReminder_Opened";
	e[(e.k_eReminder_MobilePush = 6)] = "k_eReminder_MobilePush";
	e[(e.k_eReminder_Email = 7)] = "k_eReminder_Email";
	e[(e.k_eReminder_CalendarApple = 8)] = "k_eReminder_CalendarApple";
	e[(e.k_eReminder_CalendarGoogle = 9)] = "k_eReminder_CalendarGoogle";
	e[(e.k_eReminder_CalendarOutlook = 10)] = "k_eReminder_CalendarOutlook";
	e[(e.k_eReminder_EmailUnverified = 11)] = "k_eReminder_EmailUnverified";
	e[(e.k_eReminder_MobilePushMissing = 12)] = "k_eReminder_MobilePushMissing";
})((E ||= {}));
export const V = new (class {
	m_nPastViewedIndex = 0;
	m_nPastViewedDays = 0;
	m_nFutureViewedIndex = 0;
	m_nFutureViewableEvents = 0;
	m_nLastRecordedFilter = 0;
	m_sBrowserID = undefined;
	m_scheduledFilterChange = new CScheduledFunc();
	m_scheduledFutureStats = new CScheduledFunc();
	m_scheduledPastStats = new CScheduledFunc();
	RecordViewedEvent(e, t) {
		const r = e.GetStoreInitializationTimestamp().getTime() / 1000;
		this.m_nFutureViewableEvents = 0;
		let n;
		let i = 0;
		let a = null;
		const s = e.GetCurrentlyLoadedItemsForStats();
		for (const e of s) {
			const s = e.start_time > r;
			if (e.unique_id == t) {
				n = i;
				a = e;
			}
			if (s) {
				this.m_nFutureViewableEvents++;
			} else if (n !== undefined) {
				break;
			}
			i++;
		}
		if (n !== undefined) {
			if (n < this.m_nFutureViewableEvents) {
				const t = this.m_nFutureViewableEvents - n;
				if (this.m_nFutureViewedIndex < t) {
					this.m_nFutureViewedIndex = t;
					const r = () => {
						const t =
							Math.min(this.m_nFutureViewedIndex, 4095) |
							(Math.min(this.m_nFutureViewableEvents, 255) << 12) |
							(Math.min(this.GetTimeSpentOnPageS(e), 2047) << 20);
						V.SendExperimentEventToSteam(18, t);
					};
					const n = 500;
					this.m_scheduledFutureStats.Schedule(n, r);
				}
			} else {
				const t = n - this.m_nFutureViewableEvents;
				if (this.m_nPastViewedIndex < t) {
					this.m_nPastViewedIndex = t;
					this.m_nPastViewedDays = Math.floor((r - a.start_time) / 86400);
					const n = () => {
						const t =
							Math.min(this.m_nPastViewedIndex, 4095) |
							(Math.min(this.m_nPastViewedDays, 255) << 12) |
							(Math.min(this.GetTimeSpentOnPageS(e), 2047) << 20);
						V.SendExperimentEventToSteam(17, t);
					};
					const i = 500;
					this.m_scheduledPastStats.Schedule(i, n);
				}
			}
		}
	}
	RecordFilterChangeEvent(e) {
		this.m_scheduledFilterChange.Schedule(1000, () => {
			let t = 0;
			if (e.BIsGameSourceAllowed(l.FD.k_ELibrary)) {
				t |= 1;
			}
			if (e.BIsGameSourceAllowed(l.FD.k_EWishlist)) {
				t |= 2;
			}
			if (e.BIsGameSourceAllowed(l.FD.k_EFollowing)) {
				t |= 4;
			}
			if (e.BIsGameSourceAllowed(l.FD.k_ERecommended)) {
				t |= 8;
			}
			if (e.BIsGameSourceAllowed(l.FD.k_ESteam)) {
				t |= 16;
			}
			if (e.BIsGameSourceAllowed(l.FD.k_EFeatured)) {
				t |= 32;
			}
			if (e.BIsGameSourceAllowed(l.FD.k_ERecent)) {
				t |= 64;
			}
			if (e.BIsEventTypeGroupAllowed(l.xj.k_ENews)) {
				t |= 1024;
			}
			if (e.BIsEventTypeGroupAllowed(l.xj.k_EEvents)) {
				t |= 2048;
			}
			if (e.BIsEventTypeGroupAllowed(l.xj.k_EStreaming)) {
				t |= 4096;
			}
			if (e.BIsEventTypeGroupAllowed(l.xj.k_EUpdates)) {
				t |= 8192;
			}
			if (e.BIsEventTypeGroupAllowed(l.xj.k_EReleases)) {
				t |= 16384;
			}
			if (e.BIsEventTypeGroupAllowed(l.xj.k_ESales)) {
				t |= 32768;
			}
			if (t != this.m_nLastRecordedFilter) {
				this.m_nLastRecordedFilter = t;
				this.SendExperimentEventToSteam(16, t);
			}
		});
	}
	GetTimeSpentOnPageS(e) {
		const t = e.GetStoreInitializationTimestamp();
		const r = new Date();
		return Math.max(0, Math.floor((r.getTime() - t.getTime()) / 1000));
	}
	RecordAppInteractionEvent(e, t) {
		this.SendExperimentEventToSteam(19, t);
	}
	SendExperimentEventToSteam(e, t) {
		this.InitBrowserID();
		const r = `${s.TS.STORE_BASE_URL}events/ajaxreportnewshubstats/`;
		const n = new URLSearchParams();
		n.append("page_action", `${e}`);
		n.append("snr", s.TS.SNR);
		n.append("uint_data", `${t}`);
		n.append("str_data", this.m_sBrowserID);
		a.post(r, n);
	}
	InitBrowserID() {
		if (this.m_sBrowserID === undefined) {
			if (s.TS.IN_CLIENT) {
				this.m_sBrowserID = "steam";
			} else {
				const navigator_userAgent = navigator.userAgent;
				if (
					/iPhone|iPad|iPod/i.test(navigator_userAgent) ||
					(/Macintosh/i.test(navigator_userAgent) &&
						/Safari/i.test(navigator_userAgent))
				) {
					this.m_sBrowserID = "ios";
				} else if (/Android/i.test(navigator_userAgent)) {
					this.m_sBrowserID = "android";
				} else {
					this.m_sBrowserID = "";
				}
			}
		}
	}
})();
window.g_EventCalendarTrackingStore = V;
