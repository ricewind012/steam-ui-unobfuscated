import n, { Cg } from "./34629.js";
import i, { Gn, fm, h5 } from "./89193.js";
import { q3 } from "./90095.js";
import s from "./83957.js";
import l from "./72476.js";
import c from "./13484.js";
import m from "./69740.js";
import d from "./13665.js";
import A from "./96593.js";
import p from "./96000.js";
import g from "./79769.js";
import h from "./10812.js";
import C from "./12176.js";
import _ from "./52451.js";
import f from "./61175.js";
import b from "./34792.js";
import y from "./77347.js";
const o = s;
class u extends c.ZQ {
	async DeleteOldAnnouncement(e, t) {
		let r = new URLSearchParams();
		r.append("sessionid", l.TS.SESSIONID);
		let n = `${
			l.TS.COMMUNITY_BASE_URL
		}/gid/${e.ConvertTo64BitString()}/announcements/ajaxdeleteannouncement/${t}`;
		let i = await o.post(n, r);
		if (i.data.success != 1) {
			throw i.data;
		}
		this.RemoveGIDFromList(e, m.cB + t);
		return i.data;
	}
	static sm_Instance;
	static Get() {
		if (!u.sm_Instance) {
			u.sm_Instance = new u();
			u.sm_Instance.Init();
		}
		return u.sm_Instance;
	}
}
export const IB = new u();
window.partnerEventStore = IB;
const w = 43200000;
const B = [10000, 60000, 600000, 3600000, 7200000];
export function yX() {
	return q3(() => dm.GetWhatsNewEvents());
}
export function Ss() {
	return q3(() =>
		dm.GetAppsShowingLess().filter((e) => A.tw.GetAppOverviewByAppID(e)),
	);
}
export function M3() {
	return q3(() =>
		dm.GetAppsShowingMore().filter((e) => A.tw.GetAppOverviewByAppID(e)),
	);
}
class M {
	constructor() {
		Gn(this);
	}
	m_CMInterface;
	m_iGetBestEventsForUserErrorBackoff = 0;
	m_schScheduledUpdateBestEventsForUser = new g.LU();
	m_rgEventsHiddenLocally = Array();
	m_vecHomeBestEventsForUser = Array();
	m_vecHomeTakeOverEventsForUser = Array();
	m_vecAppsShowingMore = Array();
	m_vecAppsShowingLess = Array();
	m_bNoMoreOrLessDataFetched = true;
	m_mapFailedImagesThisSession = new Map();
	m_mapAppEventPriorities = new Map();
	m_bEventsLoaded = false;
	m_bInitialLoadPending = true;
	m_TimeEventsLastLoaded = 0;
	m_TimeoutInitialLoad = undefined;
	m_nEventsReturnedLastTime = 0;
	m_nAppIDJustChangedPriority = 0;
	m_bLastPriorityChangeWasLower = false;
	m_TimeoutJustChangedPriority = undefined;
	m_bConnectedToSteam = false;
	m_nLastConnectionToSteam = 0;
	async Init(e) {
		this.m_CMInterface = e;
		this.m_nEventsReturnedLastTime = window.localStorage.getItem(
			`EventsLastFetch_${this.m_CMInterface.steamid.GetAccountID()}`,
		);
		let t = window.localStorage.getItem(
			`EventsHiddenLocally_${this.m_CMInterface.steamid.GetAccountID()}`,
		);
		let r = JSON.parse(t);
		if (r != null && r.length) {
			this.m_rgEventsHiddenLocally = r;
		}
		fm(() => {
			if (
				!this.m_bConnectedToSteam &&
				y.OQ.Get().hasSteamConnection &&
				Date.now() - this.m_nLastConnectionToSteam > 60000
			) {
				this.OnSteamConnectionEstablished();
				this.m_nLastConnectionToSteam = Date.now();
			}
			this.m_bConnectedToSteam = y.OQ.Get().hasSteamConnection;
		});
		this.m_TimeoutInitialLoad = window.setTimeout(() => {
			this.m_bInitialLoadPending = false;
			this.m_TimeoutInitialLoad = undefined;
		}, 3000);
		await d.KN.InitGlobal(e);
	}
	OnSteamConnectionEstablished() {
		if (this.m_bEventsLoaded) {
			let e = false;
			if (
				this.m_TimeEventsLastLoaded == 0 ||
				performance.now() - this.m_TimeEventsLastLoaded > w
			) {
				e = true;
			}
			if (e) {
				if (this.m_schScheduledUpdateBestEventsForUser.IsScheduled()) {
					this.m_schScheduledUpdateBestEventsForUser.Cancel();
				}
				this.m_schScheduledUpdateBestEventsForUser.Schedule(
					Math.random() * 30000,
					() => this.UpdateBestEventsForCurrentUser(),
				);
			} else if (!this.m_schScheduledUpdateBestEventsForUser.IsScheduled()) {
				this.m_schScheduledUpdateBestEventsForUser.Schedule(w, () =>
					this.UpdateBestEventsForCurrentUser(),
				);
			}
		} else {
			this.UpdateBestEventsForCurrentUser();
		}
	}
	SetEventsLoaded(e) {
		this.m_bEventsLoaded = true;
		this.m_bInitialLoadPending = false;
		if (e) {
			this.m_TimeEventsLastLoaded = performance.now();
		}
		if (this.m_TimeoutInitialLoad) {
			window.clearTimeout(this.m_TimeoutInitialLoad);
			this.m_TimeoutInitialLoad = undefined;
		}
	}
	BNotYetLoaded() {
		return !this.m_bEventsLoaded;
	}
	GetEventsCountLastTime() {
		return this.m_nEventsReturnedLastTime;
	}
	ImageFailureCallback(e) {
		this.m_mapFailedImagesThisSession.set(e, true);
	}
	FilterImageURLsForKnownFailures(e) {
		return e.filter((e) => !this.m_mapFailedImagesThisSession.has(e));
	}
	GetJustChangedPriorityAppID() {
		return this.m_nAppIDJustChangedPriority;
	}
	GetWasJustChangedPriorityLower() {
		return this.m_bLastPriorityChangeWasLower;
	}
	ClearJustChangedPriority() {
		this.m_nAppIDJustChangedPriority = 0;
	}
	GetTakeOverEvents() {
		return this.m_vecHomeTakeOverEventsForUser.filter(
			(e) =>
				e.appid == f.B6 ||
				e.appid == f.aF ||
				e.appid == f.aF ||
				e.appid == f.gV ||
				e.appid == f.aF ||
				e.appid == f.gV ||
				p.md.BIsVisible(e.appid),
		);
	}
	GetLibraryHomeBestEventsForUser() {
		return this.m_vecHomeBestEventsForUser.filter(
			(e) =>
				e.appid == f.B6 ||
				e.appid == f.aF ||
				e.appid == f.aF ||
				e.appid == f.gV ||
				e.appid == f.aF ||
				e.appid == f.gV ||
				p.md.BIsVisible(e.appid),
		);
	}
	GetWhatsNewEvents() {
		return {
			bEventsLoaded: this.m_bEventsLoaded,
			bInitialLoadPending: this.m_bInitialLoadPending,
			eventsToShow: this.GetLibraryHomeBestEventsForUser(),
			takeoverEvents: this.GetTakeOverEvents(),
		};
	}
	TrackEventShownToUser(e, t) {
		d.KN.Get()
			.GetTracker()
			.MarkEventShown(e.GID, e.clanSteamID.GetAccountID(), t);
	}
	TrackEventShownToUserByGID(e, t, r) {
		d.KN.Get().GetTracker().MarkEventShown(e, t.GetAccountID(), r);
	}
	TrackEventClickedByUser(e, t) {
		d.KN.Get()
			.GetTracker()
			.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t);
	}
	ClearJustChangedAppPriority() {
		this.m_nAppIDJustChangedPriority = 0;
		this.m_bLastPriorityChangeWasLower = false;
	}
	async ResetUserAppPriorityForApp(e) {
		let t = C.w.Init(h.rF);
		t.Body().set_appid(e);
		return (
			(
				await h.BE.ClearSinglePartnerEventsAppPriority(
					this.m_CMInterface.GetServiceTransport(),
					t,
				)
			).GetEResult() == 1 &&
			(this.FetchUpdatedEventAppPrioritiesForUser(),
			this.m_schScheduledUpdateBestEventsForUser.Schedule(300, () =>
				this.UpdateBestEventsForCurrentUser(),
			),
			true)
		);
	}
	async FetchUpdatedEventAppPrioritiesForUser() {
		let e = C.w.Init(h.rm);
		let t = await h.BE.GetUserPartnerEventsAppPriorities(
			this.m_CMInterface.GetServiceTransport(),
			e,
		);
		if (t.GetEResult() == 1) {
			h5(() => {
				this.m_vecAppsShowingMore = [];
				this.m_vecAppsShowingLess = [];
				for (let e of t.Body().priorities()) {
					if (e.user_app_priority() > 0) {
						this.m_vecAppsShowingMore.push(e.appid());
					} else if (e.user_app_priority() < 0) {
						this.m_vecAppsShowingLess.push(e.appid());
					}
				}
				this.m_bNoMoreOrLessDataFetched = false;
			});
		}
	}
	BNoShowMoreOrLessDataFetched() {
		return this.m_bNoMoreOrLessDataFetched;
	}
	GetAppsShowingLess() {
		return this.m_vecAppsShowingLess;
	}
	GetAppsShowingMore() {
		return this.m_vecAppsShowingMore;
	}
	ScheduleUpdateBestEventsForUser(e) {
		this.m_schScheduledUpdateBestEventsForUser.Schedule(e, () =>
			this.UpdateBestEventsForCurrentUser(),
		);
	}
	async RaiseAppPriorityForApp(e) {
		let t = C.w.Init(h.bi);
		t.Body().set_appid(e);
		let r = await h.BE.PartnerEventsShowMoreForApp(
			this.m_CMInterface.GetServiceTransport(),
			t,
		);
		return h5(() => {
			this.UpdateBestEventsForCurrentUser();
			if (this.m_TimeoutJustChangedPriority) {
				clearTimeout(this.m_TimeoutJustChangedPriority);
			}
			this.m_nAppIDJustChangedPriority = e;
			this.m_bLastPriorityChangeWasLower = false;
			this.m_TimeoutJustChangedPriority = window.setTimeout(
				this.ClearJustChangedPriority,
				30000,
			);
			return (
				r.GetEResult() == 1 &&
				(this.FetchUpdatedEventAppPrioritiesForUser(), true)
			);
		});
	}
	async LowerAppPriorityForApp(e) {
		let t = C.w.Init(h.H4);
		t.Body().set_appid(e);
		let r = await h.BE.PartnerEventsShowLessForApp(
			this.m_CMInterface.GetServiceTransport(),
			t,
		);
		return h5(() => {
			this.UpdateBestEventsForCurrentUser();
			if (this.m_TimeoutJustChangedPriority) {
				clearTimeout(this.m_TimeoutJustChangedPriority);
			}
			this.m_nAppIDJustChangedPriority = e;
			this.m_bLastPriorityChangeWasLower = true;
			this.m_TimeoutJustChangedPriority = window.setTimeout(
				this.ClearJustChangedPriority,
				30000,
			);
			return (
				r.GetEResult() == 1 &&
				(this.FetchUpdatedEventAppPrioritiesForUser(), true)
			);
		});
	}
	AddToDoNotShowList(e) {
		if (this.m_rgEventsHiddenLocally.includes(e)) {
			return;
		}
		this.m_rgEventsHiddenLocally.push(e);
		let t = JSON.stringify(this.m_rgEventsHiddenLocally);
		window.localStorage.setItem(
			`EventsHiddenLocally_${this.m_CMInterface.steamid.GetAccountID()}`,
			t,
		);
	}
	ResetDoNotShowList() {
		if (this.m_rgEventsHiddenLocally.length > 0) {
			this.m_rgEventsHiddenLocally = [];
			let e = JSON.stringify(this.m_rgEventsHiddenLocally);
			window.localStorage.setItem(
				`EventsHiddenLocally_${this.m_CMInterface.steamid.GetAccountID()}`,
				e,
			);
			this.UpdateBestEventsForCurrentUser();
		}
	}
	RemoveEvent(e) {
		for (let t = 0; t < this.m_vecHomeTakeOverEventsForUser.length; ++t) {
			if (this.m_vecHomeTakeOverEventsForUser[t].GID == e) {
				this.m_vecHomeTakeOverEventsForUser.splice(t, 1);
				this.AddToDoNotShowList(e);
			}
		}
		for (let t = 0; t < this.m_vecHomeBestEventsForUser.length; ++t) {
			if (this.m_vecHomeBestEventsForUser[t].GID == e) {
				this.m_vecHomeBestEventsForUser.splice(t, 1);
				this.AddToDoNotShowList(e);
			}
		}
	}
	GetUserAppPrioritySetting(e) {
		let t = this.m_mapAppEventPriorities.get(e);
		if (t === undefined) {
			return 0;
		} else {
			return t;
		}
	}
	UpdateBestEventsForCurrentUser() {
		if (!y.OQ.Get().hasSteamConnection) {
			this.SetEventsLoaded(false);
			return;
		}
		let e = b.rV.clientSettings.library_whats_new_show_only_product_updates;
		IB.GetBestEventsForCurrentUser(0, e)
			.then((e) => {
				h5(() => {
					this.m_vecHomeBestEventsForUser = [];
					e.forEach((e) => {
						let e_event = e.event;
						if (!this.m_rgEventsHiddenLocally.includes(e_event.GID)) {
							if (A.tw.GetAppOverviewByAppID(e_event.appid)) {
								if (e.bPossibleTakeOver) {
									this.m_vecHomeTakeOverEventsForUser.push(e_event);
								} else {
									this.m_vecHomeBestEventsForUser.push(e_event);
								}
							}
							this.m_mapAppEventPriorities.set(e_event.appid, e.nAppPriority);
						}
						window.localStorage.setItem(
							`EventsLastFetch_${this.m_CMInterface.steamid.GetAccountID()}`,
							this.GetLibraryHomeBestEventsForUser().length +
								this.GetTakeOverEvents().length,
						);
					});
					this.SetEventsLoaded(true);
					this.m_iGetBestEventsForUserErrorBackoff = 0;
					this.m_schScheduledUpdateBestEventsForUser.Schedule(w, () =>
						this.UpdateBestEventsForCurrentUser(),
					);
				});
			})
			.catch((e) => {
				this.m_bEventsLoaded = true;
				if (e.response !== undefined && e.response.data !== undefined) {
					console.log(
						`Error calling GetBestEventsForCurrentUser: ${e.response.data.err_msg}`,
					);
				} else {
					console.log(
						`Error calling GetBestEventsForCurrentUser Generic: ${e}`,
					);
				}
				let t = B[this.m_iGetBestEventsForUserErrorBackoff];
				this.m_iGetBestEventsForUserErrorBackoff = Math.min(
					this.m_iGetBestEventsForUserErrorBackoff + 1,
					B.length - 1,
				);
				console.log(`Will retry GetBestEventsForCurrentUser in ${t}ms`);
				this.m_schScheduledUpdateBestEventsForUser.Schedule(t, () =>
					this.UpdateBestEventsForCurrentUser(),
				);
			});
	}
}
Cg([i.sH.shallow], M.prototype, "m_vecHomeBestEventsForUser", undefined);
Cg([i.sH.shallow], M.prototype, "m_vecHomeTakeOverEventsForUser", undefined);
Cg([i.sH.shallow], M.prototype, "m_vecAppsShowingMore", undefined);
Cg([i.sH.shallow], M.prototype, "m_vecAppsShowingLess", undefined);
Cg([i.sH], M.prototype, "m_bNoMoreOrLessDataFetched", undefined);
Cg([i.sH], M.prototype, "m_mapAppEventPriorities", undefined);
Cg([i.sH], M.prototype, "m_bEventsLoaded", undefined);
Cg([i.sH], M.prototype, "m_bInitialLoadPending", undefined);
Cg([i.sH], M.prototype, "m_nEventsReturnedLastTime", undefined);
Cg([i.sH], M.prototype, "m_nAppIDJustChangedPriority", undefined);
Cg([i.sH], M.prototype, "m_bLastPriorityChangeWasLower", undefined);
Cg([_.oI], M.prototype, "ImageFailureCallback", null);
Cg([_.oI], M.prototype, "FilterImageURLsForKnownFailures", null);
Cg([i.XI.bound], M.prototype, "ClearJustChangedPriority", null);
Cg([i.XI], M.prototype, "ClearJustChangedAppPriority", null);
export const dm = new M();
window.libraryEventStore = dm;
