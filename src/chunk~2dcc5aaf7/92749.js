import { Seconds, Sleep } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./88696.js";
import s from "./12176.js";
import o from "./54946.js";
import c from "./91745.js";
import m from "./72476.js";
import u from "./96000.js";
import d from "./96593.js";
import A from "./46422.js";
import p, { q3 } from "./90095.js";
import { qw } from "./89748.js";
const h = "playnextstore_storage";
export function K_() {
	return q3(() => x3.GetSuggestionsToShow().apps);
}
class _ {
	constructor() {
		Gn(this);
	}
	m_CMInterface;
	m_LocalStorage;
	m_cachedPlayNext = undefined;
	m_bPlayNextRequestInFlight = undefined;
	m_nLastFetchTime = 0;
	m_nNextAllowableRetry = 0;
	m_bFresh = false;
	m_nIgnoredChecksum = 0;
	m_rgLocalIgnoredAppIDs;
	async Init(e) {
		this.m_CMInterface = e;
		this.m_LocalStorage = new a.A();
		await this.LoadCacheFromLocalStorage();
	}
	GetPlayNext() {
		this.MaybeUpdatePlayNextAsync();
		const e = {
			appids: this.m_cachedPlayNext ? this.m_cachedPlayNext.appids : [],
			bLoadInFlight: this.m_bPlayNextRequestInFlight,
			bFresh: this.m_bFresh,
		};
		this.m_bFresh = false;
		return e;
	}
	DebugClearCache() {
		this.m_cachedPlayNext = null;
		this.m_nNextAllowableRetry = 0;
		console.log("Cleared PlayNextStore cache.");
	}
	AddIgnoredApp(e) {
		this.m_rgLocalIgnoredAppIDs.push(e);
		this.m_nNextAllowableRetry = 0;
		this.MaybeUpdatePlayNextAsync();
	}
	ClearIgnoredApps() {
		this.m_rgLocalIgnoredAppIDs = [];
		this.m_nNextAllowableRetry = 0;
		this.MaybeUpdatePlayNextAsync();
	}
	RemoveIgnoredApp(e) {
		const t = this.m_rgLocalIgnoredAppIDs.findIndex((t) => t == e);
		if (t != -1) {
			this.m_rgLocalIgnoredAppIDs.splice(t);
			this.m_nNextAllowableRetry = 0;
			this.MaybeUpdatePlayNextAsync();
		}
	}
	LastIgnoredApps(e) {
		let t = [];
		const r = this.m_rgLocalIgnoredAppIDs.length;
		if (r > 0) {
			let n = this.m_rgLocalIgnoredAppIDs.length - 1;
			while (t.length < r && t.length < e && n >= 0) {
				t.push(this.m_rgLocalIgnoredAppIDs[n]);
				n--;
			}
		}
		return t;
	}
	async LoadCacheFromLocalStorage() {
		const e = await this.m_LocalStorage.GetObject(h);
		if (e && e.nVersion == 3) {
			this.m_cachedPlayNext = e.cachedPlayNext;
			this.m_nLastFetchTime = e.nLastFetchTime;
			this.m_rgLocalIgnoredAppIDs = e.rgIgnoredApps;
		} else {
			this.m_cachedPlayNext = null;
			this.m_nLastFetchTime = 0;
			this.m_rgLocalIgnoredAppIDs = [];
		}
		this.m_nNextAllowableRetry = 0;
	}
	async SaveCacheToLocalStorage() {
		return this.m_LocalStorage.StoreObject(h, {
			nVersion: 3,
			cachedPlayNext: this.m_cachedPlayNext,
			rgIgnoredApps: this.m_rgLocalIgnoredAppIDs,
		});
	}
	async MaybeUpdatePlayNextAsync() {
		if (qw().BIsOfflineMode()) {
			return;
		}
		const Seconds_PerDay = Seconds.PerDay;
		const t = Seconds.PerHour * 1000;
		if (this.m_bPlayNextRequestInFlight) {
			return;
		}
		const r = u.md.GetCollection(u.A8.Hidden);
		const n = r ? r.allApps.map((e) => e.appid) : [];
		let i = [];
		if (A.oy.IsGamepadUIWindowActive() && m.TS.ON_DECK) {
			i = A.oy.ExcludedTitlesForPlatform();
		}
		const a = Array.from(new Set([...this.m_rgLocalIgnoredAppIDs, ...n, ...i]));
		const d = a.reduce((e, t) => e + t, 0);
		if (
			this.m_cachedPlayNext &&
			d == this.m_nIgnoredChecksum &&
			Date.now() / 1000 - this.m_nLastFetchTime < Seconds_PerDay
		) {
			return;
		}
		if (
			Date.now() < this.m_nNextAllowableRetry &&
			d == this.m_nIgnoredChecksum
		) {
			return;
		}
		await Promise.resolve();
		this.m_bPlayNextRequestInFlight = true;
		this.m_nIgnoredChecksum = d;
		const p = s.w.Init(o.rx);
		p.Body().set_ignore_appids(a);
		console.log(`Fetching PlayNext with ignore list: ${a}`);
		const h = await o.xt.GetPlayNext(
			this.m_CMInterface.GetServiceTransport(),
			p,
		);
		if (c.hG.GetToggle(14)) {
			await Sleep(10000);
		}
		if (h.GetEResult() == 1) {
			this.m_cachedPlayNext = h.Body().toObject();
			this.m_nNextAllowableRetry = Date.now() + Seconds_PerDay * 1000;
			this.m_nLastFetchTime = Date.now() / 1000;
			this.m_bFresh = true;
			this.SaveCacheToLocalStorage();
		} else {
			console.warn(
				"Couldn't fetch Play Next suggestions: result = ",
				h.GetEResult(),
			);
			this.m_nNextAllowableRetry = Date.now() + t;
		}
		this.m_bPlayNextRequestInFlight = false;
	}
	GetSuggestionsToShow(e) {
		const t = this.GetPlayNext();
		let t_appids = t.appids;
		if (!e) {
			const e = Date.now() / 1000 - Seconds.PerWeek * 2;
			t_appids = t_appids.filter((t) => {
				const r = d.tw.GetAppOverviewByAppID(t);
				return r && u.md.BIsVisible(r) && r.GetLastTimePlayed() < e;
			});
		}
		return {
			apps: t_appids,
			bLoading: t.bLoadInFlight,
			bFresh: t.bFresh,
		};
	}
}
Cg([i.sH], _.prototype, "m_cachedPlayNext", undefined);
Cg([i.sH], _.prototype, "m_bPlayNextRequestInFlight", undefined);
Cg([i.XI.bound], _.prototype, "DebugClearCache", null);
Cg([i.XI.bound], _.prototype, "AddIgnoredApp", null);
Cg([i.XI.bound], _.prototype, "ClearIgnoredApps", null);
Cg([i.XI.bound], _.prototype, "RemoveIgnoredApp", null);
export const x3 = new _();
window.playNextStore = x3;
