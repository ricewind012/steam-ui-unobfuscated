var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./83957.js");
var o = s;
var l = require(/*webcrack:missing*/ "./72476.js");
var c = require("./13484.js");
var m = require("./69740.js");
class u extends c.ZQ {
	async DeleteOldAnnouncement(e, t) {
		let r = new URLSearchParams();
		r.append("sessionid", l.TS.SESSIONID);
		let n =
			l.TS.COMMUNITY_BASE_URL +
			"/gid/" +
			e.ConvertTo64BitString() +
			"/announcements/ajaxdeleteannouncement/" +
			t;
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
var d = require("./13665.js");
var A = require("./96593.js");
var p = require("./96000.js");
var g = require(/*webcrack:missing*/ "./79769.js");
var h = require("./10812.js");
var C = require(/*webcrack:missing*/ "./12176.js");
var _ = require(/*webcrack:missing*/ "./52451.js");
var f = require("./61175.js");
var b = require("./34792.js");
var y = require("./77347.js");
export const IB = new u();
window.partnerEventStore = IB;
const w = 43200000;
const B = [10000, 60000, 600000, 3600000, 7200000];
export function yX() {
	return (0, a.q3)(() => dm.GetWhatsNewEvents());
}
export function Ss() {
	return (0, a.q3)(() =>
		dm.GetAppsShowingLess().filter((e) => A.tw.GetAppOverviewByAppID(e)),
	);
}
export function M3() {
	return (0, a.q3)(() =>
		dm.GetAppsShowingMore().filter((e) => A.tw.GetAppOverviewByAppID(e)),
	);
}
class M {
	constructor() {
		(0, i.Gn)(this);
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
			"EventsLastFetch_" + this.m_CMInterface.steamid.GetAccountID(),
		);
		let t = window.localStorage.getItem(
			"EventsHiddenLocally_" + this.m_CMInterface.steamid.GetAccountID(),
		);
		let r = JSON.parse(t);
		if (r != null && r.length) {
			this.m_rgEventsHiddenLocally = r;
		}
		(0, i.fm)(() => {
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
				e.appid == f.gV ||
				p.md.BIsVisible(e.appid),
		);
	}
	GetLibraryHomeBestEventsForUser() {
		return this.m_vecHomeBestEventsForUser.filter(
			(e) =>
				e.appid == f.B6 ||
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
			(0, i.h5)(() => {
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
		return (0, i.h5)(() => {
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
		return (0, i.h5)(() => {
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
		if (this.m_rgEventsHiddenLocally.indexOf(e) != -1) {
			return;
		}
		this.m_rgEventsHiddenLocally.push(e);
		let t = JSON.stringify(this.m_rgEventsHiddenLocally);
		window.localStorage.setItem(
			"EventsHiddenLocally_" + this.m_CMInterface.steamid.GetAccountID(),
			t,
		);
	}
	ResetDoNotShowList() {
		if (this.m_rgEventsHiddenLocally.length > 0) {
			this.m_rgEventsHiddenLocally = [];
			let e = JSON.stringify(this.m_rgEventsHiddenLocally);
			window.localStorage.setItem(
				"EventsHiddenLocally_" + this.m_CMInterface.steamid.GetAccountID(),
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
				(0, i.h5)(() => {
					this.m_vecHomeBestEventsForUser = [];
					e.forEach((e) => {
						let t = e.event;
						if (this.m_rgEventsHiddenLocally.indexOf(t.GID) === -1) {
							if (A.tw.GetAppOverviewByAppID(t.appid)) {
								if (e.bPossibleTakeOver) {
									this.m_vecHomeTakeOverEventsForUser.push(t);
								} else {
									this.m_vecHomeBestEventsForUser.push(t);
								}
							}
							this.m_mapAppEventPriorities.set(t.appid, e.nAppPriority);
						}
						window.localStorage.setItem(
							"EventsLastFetch_" + this.m_CMInterface.steamid.GetAccountID(),
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
						"Error calling GetBestEventsForCurrentUser: " +
							e.response.data.err_msg,
					);
				} else {
					console.log(
						"Error calling GetBestEventsForCurrentUser Generic: " + e,
					);
				}
				let t = B[this.m_iGetBestEventsForUserErrorBackoff];
				this.m_iGetBestEventsForUserErrorBackoff = Math.min(
					this.m_iGetBestEventsForUserErrorBackoff + 1,
					B.length - 1,
				);
				console.log("Will retry GetBestEventsForCurrentUser in " + t + "ms");
				this.m_schScheduledUpdateBestEventsForUser.Schedule(t, () =>
					this.UpdateBestEventsForCurrentUser(),
				);
			});
	}
}
(0, n.Cg)([i.sH.shallow], M.prototype, "m_vecHomeBestEventsForUser", undefined);
(0, n.Cg)(
	[i.sH.shallow],
	M.prototype,
	"m_vecHomeTakeOverEventsForUser",
	undefined,
);
(0, n.Cg)([i.sH.shallow], M.prototype, "m_vecAppsShowingMore", undefined);
(0, n.Cg)([i.sH.shallow], M.prototype, "m_vecAppsShowingLess", undefined);
(0, n.Cg)([i.sH], M.prototype, "m_bNoMoreOrLessDataFetched", undefined);
(0, n.Cg)([i.sH], M.prototype, "m_mapAppEventPriorities", undefined);
(0, n.Cg)([i.sH], M.prototype, "m_bEventsLoaded", undefined);
(0, n.Cg)([i.sH], M.prototype, "m_bInitialLoadPending", undefined);
(0, n.Cg)([i.sH], M.prototype, "m_nEventsReturnedLastTime", undefined);
(0, n.Cg)([i.sH], M.prototype, "m_nAppIDJustChangedPriority", undefined);
(0, n.Cg)([i.sH], M.prototype, "m_bLastPriorityChangeWasLower", undefined);
(0, n.Cg)([_.oI], M.prototype, "ImageFailureCallback", null);
(0, n.Cg)([_.oI], M.prototype, "FilterImageURLsForKnownFailures", null);
(0, n.Cg)([i.XI.bound], M.prototype, "ClearJustChangedPriority", null);
(0, n.Cg)([i.XI], M.prototype, "ClearJustChangedAppPriority", null);
export const dm = new M();
window.libraryEventStore = dm;
