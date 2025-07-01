import { Cg } from "./34629.js";
import i, { Gn, h5 } from "./89193.js";
import * as a from "./83957.js";
import * as o from "./96593.js";
import * as l from "./54946.js";
import * as c from "./12176.js";
import * as m from "./87935.js";
const s = a;
const u = new (require(/*webcrack:missing*/ "./83599.js").wd)(
	"AppAchivementsProgressCache",
);
function d(e, t) {
	if (t instanceof Map || t instanceof Set) {
		return Array.from(t);
	} else {
		return t;
	}
}
class A {
	constructor() {
		Gn(this);
	}
	nVersion = 3;
	mapCache = new Map();
}
Cg([i.sH], A.prototype, "nVersion", undefined);
Cg([i.sH], A.prototype, "mapCache", undefined);
class p {
	constructor() {
		Gn(this);
	}
	m_CMInterface;
	m_achievementProgress = undefined;
	m_mapQueuedCacheMisses = new Map();
	m_cacheUpdateTimer;
	async Init(e) {
		this.m_CMInterface = e;
		await this.LoadCacheFile();
		SteamClient.GameSessions.RegisterForAchievementNotification(
			this.OnAchievementNotification,
		);
	}
	get CMInterface() {
		return this.m_CMInterface;
	}
	async LoadCacheFile() {
		try {
			const e = await s.get(
				`${m.Uq.Library.AppDetails}/achievement_progress.json`,
				{
					withCredentials: false,
				},
			);
			if (e.data.nVersion == 3) {
				this.m_achievementProgress = new A();
				this.m_achievementProgress.nVersion = e.data.nVersion;
				this.m_achievementProgress.mapCache = new Map(e.data.mapCache);
			} else {
				u.Debug(
					`Loaded achievement cache at version ${e.data.nVersion}. Migrating to version 3.`,
				);
				this.m_achievementProgress = undefined;
			}
		} catch (e) {
			this.m_achievementProgress = undefined;
		}
	}
	async SaveCacheFile() {
		if (
			this.m_achievementProgress &&
			this.m_achievementProgress.mapCache.size
		) {
			SteamClient.Apps.SaveAchievementProgressCache(
				JSON.stringify(this.m_achievementProgress, d),
			);
		}
	}
	BGameHasAchievements(e) {
		if (
			this.m_achievementProgress &&
			this.m_achievementProgress.mapCache.has(e)
		) {
			return this.m_achievementProgress.mapCache.get(e).total > 0;
		}
		return true;
	}
	GetAchievementProgress(e) {
		let t = 0;
		if (
			this.m_achievementProgress &&
			this.m_achievementProgress.mapCache.has(e)
		) {
			let r = this.m_achievementProgress.mapCache.get(e);
			t = r.percentage;
			if (o.tw.GetAppOverviewByAppID(e).rt_last_time_played <= r.cache_time) {
				return t;
			}
		}
		this.QueueCacheUpdate(e);
		return t;
	}
	QueueCacheUpdate(e) {
		if (!this.m_mapQueuedCacheMisses.has(e)) {
			u.Debug("Queue cache update for", e);
			this.m_mapQueuedCacheMisses.set(e, true);
			this.m_cacheUpdateTimer ||= window.setTimeout(
				() => this.RequestCacheUpdate(),
				100,
			);
		}
	}
	async RequestCacheUpdate() {
		this.m_cacheUpdateTimer = 0;
		let e = c.w.Init(l.dC);
		e.Body().set_steamid(this.m_CMInterface.steamid.ConvertTo64BitString());
		e.Body().set_include_unvetted_apps(true);
		this.m_mapQueuedCacheMisses.forEach((t, r) => {
			e.Body().add_appids(r);
		});
		let t = await l.xt.GetAchievementsProgress(
			this.m_CMInterface.GetServiceTransport(),
			e,
		);
		this.m_achievementProgress ||= new A();
		h5(() => {
			for (let e of t.Body().achievement_progress()) {
				let t = o.tw.GetAppOverviewByAppID(e.appid());
				if (t.rt_last_time_played > e.cache_time()) {
					e.set_cache_time(t.rt_last_time_played);
				}
				u.Debug("got progress for", e.appid());
				this.m_achievementProgress.mapCache.set(e.appid(), e.toObject());
			}
		});
		this.m_mapQueuedCacheMisses.clear();
		this.SaveCacheFile();
	}
	OnAchievementNotification(e) {
		if (e.unAppID != 0) {
			this.QueueCacheUpdate(e.unAppID);
		}
	}
}
Cg([i.sH], p.prototype, "m_achievementProgress", undefined);
Cg([i.XI.bound], p.prototype, "OnAchievementNotification", null);
export const y = new p();
window.appAchievementProgressCache = y;
