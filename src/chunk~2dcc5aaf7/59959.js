var n;
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./8573.js");
var l = require("./823.js");
var c = require("./83591.js");
var m = require(/*webcrack:missing*/ "./34629.js");
var u = require(/*webcrack:missing*/ "./83957.js");
var d = u;
var A = require(/*webcrack:missing*/ "./89193.js");
var p = require(/*webcrack:missing*/ "./42689.js");
var g = p;
var h = require("./84731.js");
var C = require("./13665.js");
var _ = require("./13484.js");
var f = require("./5859.js");
var b = require("./527.js");
var y = require(/*webcrack:missing*/ "./49455.js");
var S = require("./16154.js");
var w = require(/*webcrack:missing*/ "./93960.js");
import {
	Localize,
	LocalizeCalendarWeekday,
	LocalizeCalendarTime,
	LocalizeCalendarWeekdayAndDayMonth,
} from "../../actual_src/utils/localization.js";
var v = require(/*webcrack:missing*/ "./72476.js");
var I = require("./70232.js");
var E = require("./42731.js");
require("./95020.js");
(function (e) {
	e.Default = "default";
	e.Upcoming = "upcoming";
	e.Featured = "featured";
	e.Press = "press";
	e.Steam = "steam";
	e.Halloween = "halloween";
	e.Dev_All = "all";
	e.Dev_AssociatedPress = "associated_press";
	e.Dev_Sales = "associated_sales";
})((n ||= {}));
new Map();
var M = require("./12956.js");
class T {
	constructor() {
		(0, A.Gn)(this);
	}
	m_mapBlockedAppIds = new Map();
	m_mapBlockedClanIds = new Map();
	static s_globalSingletonStore;
	static Get() {
		if (!T.s_globalSingletonStore) {
			T.s_globalSingletonStore = new T();
			T.s_globalSingletonStore.Init();
		}
		return T.s_globalSingletonStore;
	}
	GetMutedSourceCount() {
		return this.m_mapBlockedAppIds.size + this.m_mapBlockedClanIds.size;
	}
	Init() {
		const e = (0, v.Tc)("mutedcomminfo", "application_config");
		if (this.ValidateStoreDefault(e)) {
			if (v.TS.WEB_UNIVERSE == "dev" || v.TS.WEB_UNIVERSE == "beta") {
				console.log(
					"DEV_DEBUG: CMutedCommunicationStore loading bundles payload: " +
						JSON.stringify(e),
				);
			}
			if (e.appids) {
				e.appids.forEach((e) => this.m_mapBlockedAppIds.set(e, true));
			}
			if (e.clanids) {
				e.clanids.forEach((e) => this.m_mapBlockedClanIds.set(e, true));
			}
		}
	}
	ValidateStoreDefault(e) {
		const t = e;
		return (
			!!t &&
			typeof t == "object" &&
			((Array.isArray(t.appids) && t.appids.length > 0) ||
				(Array.isArray(t.clanids) && t.clanids.length > 0))
		);
	}
	BIsEventBlocked(e) {
		if (e.appid) {
			return this.m_mapBlockedAppIds.has(e.appid);
		} else {
			return !!e.clanInfo && this.m_mapBlockedClanIds.has(e.clanInfo.clanid);
		}
	}
	BIsMutedAppID(e) {
		return this.m_mapBlockedAppIds.has(e);
	}
	BIsMutedClanID(e) {
		return this.m_mapBlockedClanIds.has(e);
	}
	async UpdateCommunitionSetting(e, t, r) {
		const n = v.TS.STORE_BASE_URL + "account/optoutappcommunication/";
		const i = new FormData();
		i.append("sessionid", v.TS.SESSIONID);
		i.append("allowCommunication", e ? "1" : "0");
		if (t) {
			if (
				(!e && this.m_mapBlockedAppIds.has(t)) ||
				(e && !this.m_mapBlockedAppIds.has(t))
			) {
				return true;
			}
			if (e) {
				this.m_mapBlockedAppIds.delete(t);
			} else {
				this.m_mapBlockedAppIds.set(t, true);
			}
			i.append("appId", t.toString());
		} else {
			if (!r) {
				(0, y.w)(
					false,
					"BlockEventsFromCalenderEvent: Invalid AppID and ClanID",
				);
				return false;
			}
			if (
				(!e && this.m_mapBlockedClanIds.has(r)) ||
				(e && !this.m_mapBlockedClanIds.has(r))
			) {
				return true;
			}
			if (e) {
				this.m_mapBlockedClanIds.delete(r);
			} else {
				this.m_mapBlockedClanIds.set(r, true);
			}
			i.append("clanId", r.toString());
		}
		try {
			return (await d.post(n, i)).data.success == 1;
		} catch (e) {
			console.error("Blocking app id hit error " + (0, S.H)(e).strErrorMsg);
			return false;
		}
	}
}
(0, m.Cg)([A.sH], T.prototype, "m_mapBlockedAppIds", undefined);
(0, m.Cg)([A.sH], T.prototype, "m_mapBlockedClanIds", undefined);
function R(e, t, r, n) {
	return {
		strId: "section-" + t,
		strSectionLabel: t,
		rtSectionStart: r,
		rtSectionEnd: n,
		bIsFutureSection: r >= e,
		nRenderedHeight: 2500,
		nTopOffset: 0,
	};
}
class k {
	m_nForwardStuckCount = 0;
	m_nBackwardStuckCount = 0;
	m_mapCalendarAppsByID = new Map();
	m_mapCalendarClansByID = new Map();
	m_mapCalendarEventsByGid = new Map();
	m_rgSortedCalendarEvents = new Array();
	m_visibilityStore;
	m_currentView = A.sH.box(null);
	m_bFinishedSearchingForward = false;
	m_bFinishedSearchingBackward = false;
	m_rgCalendarSections = [];
	m_rgFutureSections = [];
	m_dtInitTime;
	m_forwardRequestInFlight;
	m_backwardRequestInFlight;
	m_key;
	m_collectionMetaData = undefined;
	constructor(e, t) {
		(0, A.Gn)(this);
		this.m_key = e;
		this.m_visibilityStore = new E.vJ(t);
		c.Fm.Get().HintLoad();
	}
	GetNumEventsLoaded() {
		return this.m_mapCalendarEventsByGid.size;
	}
	BIsGlobalCalendar() {
		return (
			!this.m_key.appids &&
			!this.m_key.clanaccountids &&
			!this.m_key.collectionid &&
			!this.m_key.saleid
		);
	}
	BIsShowingFeaturedFeed() {
		return Boolean(
			this.GetCollectionID() === n.Featured ||
				(this.BIsGlobalCalendar() && !v.iA.accountid),
		);
	}
	BIsSingleSourceCalendar() {
		return Boolean(
			this.BIsSingleGroupCalendar()
				? !this.BIsSingleAppCalendar()
				: this.BIsSingleAppCalendar(),
		);
	}
	GetKey() {
		return this.m_key;
	}
	BEventMatchCalendarSingleSource(e) {
		return (
			(this.BIsSingleAppCalendar() && this.m_key.appids[0] == e.appid) ||
			(this.BIsSingleGroupCalendar() &&
				this.m_key.clanaccountids[0] == e.clanid)
		);
	}
	BIsSingleSourceMuted() {
		return (
			!!this.BIsSingleSourceCalendar() &&
			(this.BIsSingleAppCalendar()
				? T.Get().BIsMutedAppID(this.GetSingleAppID())
				: T.Get().BIsMutedClanID(this.GetSingleGroupID()))
		);
	}
	BIsSingleGroupCalendar() {
		return Boolean(
			this.m_key.clanaccountids && this.m_key.clanaccountids.length == 1,
		);
	}
	GetSingleGroupID() {
		return this.m_key.clanaccountids[0];
	}
	BIsSingleAppCalendar() {
		return Boolean(this.m_key.appids && this.m_key.appids.length == 1);
	}
	GetSingleAppID() {
		return this.m_key.appids[0];
	}
	BIsCollectionCalendar() {
		return !!this.m_key.collectionid;
	}
	GetCollectionID() {
		return this.m_key.collectionid;
	}
	BIsSaleCalendar() {
		return !!this.m_key.saleid;
	}
	GetSaleID() {
		return this.m_key.saleid;
	}
	BIsCalendarEndTimeSet() {
		return !!this.m_key.rtCalendarEnd;
	}
	GetCalendarEndTime() {
		return this.m_key.rtCalendarEnd;
	}
	SetCollectionMetaData(e) {
		this.m_collectionMetaData = e;
	}
	GetCollectionMetaData() {
		return this.m_collectionMetaData;
	}
	BHasCollectionMetaData() {
		return Boolean(this.m_collectionMetaData);
	}
	ValidateCollectionMetadata(e) {
		const t = e;
		return (
			t &&
			typeof t == "object" &&
			t.clanid &&
			typeof t.clanid == "number" &&
			t.clan_event_gid &&
			typeof t.clan_event_gid == "string"
		);
	}
	SetFilteredView(e, t) {
		const r = this.m_currentView.get();
		if (r) {
			r.dispose();
		}
		const n = this.BIsSingleSourceMuted();
		const i = new D(
			() => this.m_rgSortedCalendarEvents,
			this.LoadAdditionalEvents,
			this.BHitEventHorizon,
			e,
			t,
			n,
		);
		this.m_currentView.set(i);
	}
	BIsFilteredViewEmpty() {
		return !!this.m_currentView.get()?.BIsViewEmpty();
	}
	GetCalendarItemsInTimeRange(e, t) {
		const r = this.m_currentView.get();
		if (r) {
			return r.GetCalendarItemsInTimeRange(e, t);
		} else {
			console.error("calendar view not yet initialized");
			return {
				rgCalendarItems: [],
				bIsComplete: false,
			};
		}
	}
	GetActiveEventsAt(e) {
		const t = this.m_currentView.get();
		if (t) {
			return t.GetActiveEventsAt(e);
		} else {
			console.error("calendar view not yet initialized");
			return [];
		}
	}
	GetCurrentlyLoadedEventCount(e, t) {
		return this.m_currentView.get()?.GetCurrentlyLoadedEventCount(e, t);
	}
	GetCurrentlyLoadedItemsForStats() {
		return this.m_currentView.get()?.GetCurrentlyLoadedEvents() || [];
	}
	GetCalendarSections(e) {
		if (e) {
			return this.m_rgFutureSections;
		} else {
			return this.m_rgCalendarSections;
		}
	}
	GetStoreInitializationTimestamp() {
		this.m_dtInitTime ||= M.HD.GetTimeNowWithOverrideAsDate();
		return this.m_dtInitTime;
	}
	InitCalendarSections() {
		const e = this.GetStoreInitializationTimestamp();
		const t = [];
		const r = e.getTime() / 1000;
		t.push(R(r, (0, Localize)("#EventCalendar_FutureEventsHeader"), r));
		const n = new Date(e);
		n.setHours(0, 0, 0, 1);
		let i = n.getTime() / 1000;
		t.push(R(r, (0, Localize)("#Time_Today"), i, r));
		n.setDate(n.getDate() - 1);
		let a = i;
		i = n.getTime() / 1000;
		t.push(R(r, (0, Localize)("#Time_Yesterday"), i, a));
		const s =
			this.m_rgSortedCalendarEvents[this.m_rgSortedCalendarEvents.length - 1];
		const o = s ? s.start_time : r;
		let l = o > i;
		for (let e = 0; e < 5 && !l; e++) {
			n.setDate(n.getDate() - 1);
			a = i;
			i = n.getTime() / 1000;
			t.push(R(r, LocalizeCalendarWeekday(n), i, a));
			l = o > i;
		}
		const c = new Date(n);
		let m = i;
		while (c.getMonth() == e.getMonth() && c.getDate() != 1 && !l) {
			c.setDate(c.getDate() - 7);
			const e = c.getTime() / 1000;
			t.push(R(r, LocalizeCalendarTime(m - 1), e, m));
			l = o > e;
			m = e;
		}
		const u = new Date(e);
		u.setHours(0, 0, 0, 1);
		u.setDate(1);
		let d = m;
		for (let n = 1; !l; n++) {
			const i = new Date(u);
			i.setMonth(e.getMonth() - n, 1);
			const a = i.getTime() / 1000;
			t.push(R(r, LocalizeCalendarTime(a), a, d));
			l = o > a;
			d = a;
		}
		if (this.m_rgCalendarSections.length > t.length) {
			this.m_rgCalendarSections.splice(
				t.length,
				this.m_rgCalendarSections.length,
			);
		} else {
			t.splice(this.m_rgCalendarSections.length, t.length).forEach((e) =>
				this.m_rgCalendarSections.push(e),
			);
		}
	}
	InitFutureCalendarSections() {
		const e = this.GetStoreInitializationTimestamp();
		const t = [];
		let r;
		if (this.m_key.rtCalendarEnd) {
			r = this.m_key.rtCalendarEnd;
		}
		const n =
			this.m_rgSortedCalendarEvents.length > 0 &&
			this.m_rgSortedCalendarEvents[0];
		if (n) {
			r = n.start_time;
		}
		r ||= e.getTime() / 1000;
		const i = e.getTime() / 1000;
		const a = new Date(e);
		a.setHours(24, 0, 0, 0);
		let s = a.getTime() / 1000;
		t.push(
			R(
				i,
				(0, Localize)(
					this.m_key.bSectionByDay ? "#Time_UpNext" : "#Time_Today",
				),
				i,
				s,
			),
		);
		let o = r <= s;
		let l = s;
		a.setDate(a.getDate() + 1);
		s = a.getTime() / 1000;
		if (!o) {
			t.push(R(i, (0, Localize)("#Time_Tomorrow"), l, s));
		}
		o = r <= s;
		const c = 6 - g(e).weekday();
		for (let e = 2; e <= c && !o; e++) {
			l = s;
			const e = LocalizeCalendarWeekday(a);
			a.setDate(a.getDate() + 1);
			s = a.getTime() / 1000;
			t.push(R(i, e, l, s));
			o = r <= s;
		}
		if (this.m_key.bSectionByDay) {
			while (!o) {
				l = s;
				const e = LocalizeCalendarWeekdayAndDayMonth(a);
				a.setDate(a.getDate() + 1);
				s = a.getTime() / 1000;
				t.push(R(i, e, l, s));
				o = r <= s;
			}
		} else {
			const n = new Date(a);
			let l = s;
			const c = g(e).daysInMonth();
			if (n.getMonth() == e.getMonth() && n.getDate() != c && !o) {
				n.setDate(n.getDate() + 7);
				const e = n.getTime() / 1000;
				t.push(R(i, (0, Localize)("#EventCalendar_NextWeek"), l, e));
				o = r <= e;
				l = e;
			}
			const m = new Date(e);
			let u;
			m.setMonth(m.getMonth() + 1);
			m.setDate(1);
			m.setHours(0, 0, 0, 0);
			if (n < m && !o) {
				const e = m.getTime() / 1000;
				t.push(R(i, (0, Localize)("#EventCalendar_LaterThisMonth"), l, e));
				o = r <= e;
				u = e;
			} else {
				u = l;
			}
			for (let n = 2; !o; n++) {
				const a = new Date(m);
				a.setMonth(e.getMonth() + n);
				const s = a.getTime() / 1000;
				t.push(R(i, LocalizeCalendarTime(u), u, s));
				o = r <= s;
				u = s;
			}
		}
		if (this.m_rgFutureSections.length > t.length) {
			this.m_rgFutureSections.splice(t.length, this.m_rgFutureSections.length);
		} else {
			t.splice(this.m_rgFutureSections.length, t.length).forEach((e) =>
				this.m_rgFutureSections.push(e),
			);
		}
	}
	async RegisterCalendarEventsAndModels(e) {
		await c.Fm.Get().HintLoad();
		(0, A.h5)(() => {
			this.RegisterCalendarApps(e.apps);
			this.RegisterCalendarClans(e.clans);
			this.RegisterCalendarEvents(e.documents);
			_.O3.RegisterClanEvents(e.events);
			this.RegisterReadEvents(e.events_read);
			this.RegisterEventVotes(e.event_votes);
			if (e.forwardComplete) {
				this.m_bFinishedSearchingForward = true;
			}
			if (e.backwardComplete) {
				this.m_bFinishedSearchingBackward = true;
			}
			this.InitCalendarSections();
			this.InitFutureCalendarSections();
			this.SetCollectionMetaData(
				this.ValidateCollectionMetadata(e.metadatainfo) ? e.metadatainfo : null,
			);
		});
	}
	RegisterCalendarApps(e) {
		if (e) {
			for (const t of e) {
				if (this.m_mapCalendarAppsByID.has(t.appid)) {
					continue;
				}
				const e = new h.dF();
				e.appid = t.appid;
				e.source = t.source;
				e.playtime = t.playtime;
				e.last_played = t.last_played;
				e.wishlist_added = t.wishlist_added;
				this.m_mapCalendarAppsByID.set(t.appid, e);
				if (t.hidden) {
					this.m_visibilityStore.SetAppVisibility(t.appid, false);
				}
			}
		}
	}
	RegisterCalendarClans(e) {
		if (e) {
			for (const t of e) {
				if (!this.m_mapCalendarClansByID.has(t.clanid)) {
					const e = new h.w2();
					e.clanid = t.clanid;
					e.source = t.source;
					this.m_mapCalendarClansByID.set(t.clanid, e);
					if (t.hidden) {
						this.m_visibilityStore.SetClanVisibility(t.clanid, false);
					}
				}
			}
		}
	}
	RegisterReadEvents(e) {
		if (!e) {
			return;
		}
		const t = C.KN.Get();
		for (const r of e) {
			t.SetEventAsRead(r);
		}
	}
	RegisterEventVotes(e) {
		if (!e) {
			return;
		}
		const t = C.KN.Get();
		for (const r of e) {
			const e = r.vote === undefined ? undefined : Boolean(r.vote);
			t.SetVote(r.id, e);
		}
	}
	RegisterCalendarEvents(e) {
		if (e) {
			let t = false;
			for (const r of e) {
				if (this.BInternalInsertCalendarEventItem(r)) {
					t = true;
				}
			}
			if (t) {
				this.RebuildSortedCalendarEventList();
			}
		}
	}
	BHitEventHorizon(e) {
		if (e == "forward") {
			return this.m_bFinishedSearchingForward;
		} else {
			return this.m_bFinishedSearchingBackward;
		}
	}
	GetTimeEdgeForDirection(e, t = undefined) {
		if (e === "forward") {
			if (this.m_rgSortedCalendarEvents.length > 0) {
				return this.m_rgSortedCalendarEvents[0].start_time;
			} else {
				return t;
			}
		} else if (this.m_rgSortedCalendarEvents.length > 0) {
			return this.m_rgSortedCalendarEvents[
				this.m_rgSortedCalendarEvents.length - 1
			].start_time;
		} else {
			return t;
		}
	}
	UpdateStuckCounters(e, t) {
		const r =
			e === "forward"
				? this.m_bFinishedSearchingForward
				: this.m_bFinishedSearchingBackward;
		const n = this.GetTimeEdgeForDirection(e, undefined);
		if (r || n !== t) {
			if (e == "forward") {
				this.m_nForwardStuckCount = 0;
			} else {
				this.m_nBackwardStuckCount = 0;
			}
			return false;
		} else {
			if (e == "forward") {
				this.m_nForwardStuckCount++;
			} else {
				this.m_nBackwardStuckCount++;
			}
			return true;
		}
	}
	GetRequestInFlight(e) {
		if (e === "forward") {
			return this.m_forwardRequestInFlight;
		} else {
			return this.m_backwardRequestInFlight;
		}
	}
	SetRequestInFlight(e, t) {
		(0, y.w)(
			!t || !this.GetRequestInFlight(e),
			"Already have a request in flight for",
			e,
		);
		if (e === "forward") {
			this.m_forwardRequestInFlight = t;
		} else {
			this.m_backwardRequestInFlight = t;
		}
	}
	async LoadAdditionalEvents(e, t) {
		if (this.BHitEventHorizon(e)) {
			return 1;
		}
		let r = this.GetRequestInFlight(e);
		if (r) {
			return r;
		}
		const n = v.TS.STORE_BASE_URL + "events/ajaxgetusereventcalendarrange/";
		const i =
			e === "forward" ? this.m_nForwardStuckCount : this.m_nBackwardStuckCount;
		const a = i < 3 ? i : 0;
		const s = i >= 3 ? 1 : 0;
		const o = (v.TS.WEB_UNIVERSE === "dev" ? 50 : 250) + a * 50;
		const l = this.GetTimeEdgeForDirection(e, M.HD.GetTimeNowWithOverride());
		const c = {
			minTime: 0,
			maxTime: 0,
			ascending: true,
			maxResults: o,
			populateEvents: 15,
			appTypes: this.m_visibilityStore.GetGameSources().join(","),
			eventTypes: Array.from(this.m_visibilityStore.enabledEventTypeSet).join(
				",",
			),
			appIdFilter: Boolean(this.m_key.appids && this.m_key.appids.length > 0)
				? this.m_key.appids.sort().join(",")
				: undefined,
			clanIdFilter: Boolean(
				this.m_key.clanaccountids && this.m_key.clanaccountids.length > 0,
			)
				? this.m_key.clanaccountids.sort().join(",")
				: undefined,
			collectionID: this.m_key.collectionid,
			saleID: this.m_key.saleid,
			hubtype: this.m_key.hubtype,
			category_or_language: this.m_key.category_or_language,
			tag_name: this.m_key.tag_name,
			tags: this.m_key.rgTags
				? this.m_key.rgTags.slice().sort().join(",")
				: undefined,
		};
		if (e === "forward") {
			c.minTime = Math.floor(l + s);
			c.ascending = true;
		} else {
			c.maxTime = Math.floor(l - s);
			c.ascending = false;
		}
		r = d
			.get(n, {
				params: c,
				cancelToken: t ? t.token : undefined,
				withCredentials: true,
			})
			.then(async (r) => {
				this.SetRequestInFlight(e, null);
				if (r.data.success == 1) {
					await this.RegisterCalendarEventsAndModels(r.data);
					if (this.UpdateStuckCounters(e, l)) {
						return this.LoadAdditionalEvents(e, t);
					}
				} else {
					console.error(
						"LoadAdditionalEvents was not successful: Msg" + r.data.msg,
					);
				}
				return r.data.success;
			})
			.catch((t) => {
				this.SetRequestInFlight(e, null);
				let r = (0, S.H)(t);
				console.error("LoadAdditionalEvents hit error " + r.strErrorMsg, r);
				if (e == "forward") {
					this.m_bFinishedSearchingForward = true;
				} else {
					this.m_bFinishedSearchingBackward = true;
				}
				return 2;
			});
		this.SetRequestInFlight(e, r);
		return r;
	}
	BInternalInsertCalendarEventItem(e) {
		if (!e.unique_id) {
			(0, y.w)(
				false,
				"Attmpted to register a calendar event item with an invalid unique id!",
			);
			return false;
		}
		if (this.m_mapCalendarEventsByGid.has(e.unique_id)) {
			return false;
		}
		const t = this.m_mapCalendarAppsByID.get(e.appid);
		const r = this.m_mapCalendarClansByID.get(e.clanid);
		if (!t && !r) {
			console.log("No AppInfo or ClanInfo For: ", e);
			return false;
		}
		const n = new h.NK();
		n.clanid = e.clanid;
		n.unique_id = e.unique_id;
		n.event_type = e.event_type;
		n.appid = e.appid;
		n.start_time = e.start_time;
		n.score = e.score;
		n.appInfo = t;
		n.clanInfo = r;
		this.m_rgSortedCalendarEvents.push(n);
		this.m_mapCalendarEventsByGid.set(n.unique_id, n);
		return true;
	}
	GetCalendarAppInfoForAppID(e) {
		return this.m_mapCalendarAppsByID.get(e);
	}
	RebuildSortedCalendarEventList() {
		const e = this.m_rgSortedCalendarEvents.slice();
		this.m_rgSortedCalendarEvents = e.sort(
			(e, t) => t.start_time - e.start_time,
		);
	}
	async UpdateEventBlockFromCalendarEvent(e, t) {
		let r = e.appInfo ? e.appid : undefined;
		let n = e.clanInfo ? e.clanInfo.clanid : undefined;
		if (r != null || n != null) {
			await T.Get().UpdateCommunitionSetting(t, r, n);
			I.V.RecordAppInteractionEvent(r, I.E.k_eMuted);
		} else {
			(0, y.w)(
				false,
				"Both clan id and account id are missing, cannot change communication status",
			);
		}
	}
	GetAllClans() {
		return Array.from(this.m_mapCalendarClansByID.keys());
	}
	GetAllApps() {
		return Array.from(this.m_mapCalendarAppsByID.keys());
	}
}
(0, m.Cg)([A.sH], k.prototype, "m_mapCalendarAppsByID", undefined);
(0, m.Cg)([A.sH], k.prototype, "m_mapCalendarClansByID", undefined);
(0, m.Cg)([A.sH], k.prototype, "m_mapCalendarEventsByGid", undefined);
(0, m.Cg)([A.sH], k.prototype, "m_rgSortedCalendarEvents", undefined);
(0, m.Cg)([A.sH], k.prototype, "m_bFinishedSearchingForward", undefined);
(0, m.Cg)([A.sH], k.prototype, "m_bFinishedSearchingBackward", undefined);
(0, m.Cg)([A.sH], k.prototype, "m_rgCalendarSections", undefined);
(0, m.Cg)([A.sH], k.prototype, "m_rgFutureSections", undefined);
(0, m.Cg)([A.sH], k.prototype, "m_collectionMetaData", undefined);
(0, m.Cg)([A.XI], k.prototype, "InitCalendarSections", null);
(0, m.Cg)([A.XI], k.prototype, "InitFutureCalendarSections", null);
(0, m.Cg)([A.XI], k.prototype, "RegisterCalendarEventsAndModels", null);
(0, m.Cg)([A.XI], k.prototype, "RegisterCalendarApps", null);
(0, m.Cg)([A.XI], k.prototype, "RegisterCalendarClans", null);
(0, m.Cg)([A.XI], k.prototype, "RegisterReadEvents", null);
(0, m.Cg)([A.XI], k.prototype, "RegisterEventVotes", null);
(0, m.Cg)([A.XI], k.prototype, "RegisterCalendarEvents", null);
(0, m.Cg)([w.o], k.prototype, "BHitEventHorizon", null);
(0, m.Cg)([A.XI.bound], k.prototype, "LoadAdditionalEvents", null);
(0, m.Cg)([A.XI], k.prototype, "UpdateEventBlockFromCalendarEvent", null);
class D {
	m_rgLoadedEventsBox = A.sH.box([]);
	m_lastLoadLatch = null;
	m_fnGetUnfilteredEvents;
	m_fnLoadAdditionalEvents;
	m_fnBHitEventHorizon;
	m_fnBIsEventInView;
	m_bSkipStorePreferenceCheck;
	m_bAllowMutedAndIgnoredSources;
	m_rgAutorunDisposer;
	constructor(e, t, r, n, i, a) {
		(0, A.Gn)(this);
		this.m_fnGetUnfilteredEvents = e;
		this.m_fnLoadAdditionalEvents = t;
		this.m_fnBHitEventHorizon = r;
		this.m_fnBIsEventInView = n;
		this.m_bSkipStorePreferenceCheck = i;
		this.m_bAllowMutedAndIgnoredSources = a;
		this.m_rgAutorunDisposer = (0, A.fm)(async () => {
			const e = this.viewFilteredEvents.slice();
			if (!this.m_bSkipStorePreferenceCheck) {
				const t = Array.from(
					new Set(e.map((e) => e.appid).filter(Boolean)),
				).sort();
				this.m_lastLoadLatch = e;
				await f.A.Get().QueueMultipleAppRequests(t, {
					...b.jy,
					include_assets: true,
				});
				if (this.m_lastLoadLatch != e) {
					return;
				}
				this.m_lastLoadLatch = null;
			}
			this.m_rgLoadedEventsBox.set(e);
		});
	}
	dispose() {
		this.m_rgAutorunDisposer();
	}
	get viewFilteredEvents() {
		return this.m_fnGetUnfilteredEvents().filter((e) =>
			this.m_fnBIsEventInView(e),
		);
	}
	get filteredAndCheckedEvents() {
		return this.m_rgLoadedEventsBox.get().filter((e) => {
			if (e.appid) {
				if (
					!this.m_bAllowMutedAndIgnoredSources &&
					(T.Get().BIsMutedAppID(e.appid) || c.Fm.Get().BIsGameIgnored(e.appid))
				) {
					return false;
				}
				if (
					!this.m_bSkipStorePreferenceCheck &&
					(0, b.Li)(f.A.Get().GetApp(e.appid))
				) {
					return false;
				}
			} else if (
				!this.m_bAllowMutedAndIgnoredSources &&
				(T.Get().BIsMutedClanID(e.clanid) ||
					c.Fm.Get().BIsIgnoringCurator(o.b.InitFromClanID(e.clanid)))
			) {
				return false;
			}
			return true;
		});
	}
	BIsCompleteThroughTime(e, t) {
		if (this.m_fnBHitEventHorizon(e)) {
			return true;
		}
		const r = this.m_fnGetUnfilteredEvents();
		if (e === "forward") {
			return t && r.length > 0 && r[0].start_time > t;
		} else {
			return r.length > 0 && r[r.length - 1].start_time < t;
		}
	}
	async EnsureRangeIsLoaded(e, t) {
		for (
			let e = 0;
			e < 100 && !this.BIsCompleteThroughTime("forward", t);
			e++
		) {
			await this.m_fnLoadAdditionalEvents("forward");
		}
		for (
			let t = 0;
			t < 100 && !this.BIsCompleteThroughTime("backward", e);
			t++
		) {
			await this.m_fnLoadAdditionalEvents("backward");
		}
	}
	GetCalendarItemsInTimeRange(e, t) {
		this.EnsureRangeIsLoaded(e, t);
		const r = this.filteredAndCheckedEvents.filter(
			(r) => r.start_time >= e && (!t || r.start_time < t),
		);
		const n = this.BIsCompleteThroughTime("forward", t);
		const i = this.BIsCompleteThroughTime("backward", e);
		return {
			rgCalendarItems: r,
			bIsComplete: n && i,
		};
	}
	GetCurrentlyLoadedEvents() {
		return this.filteredAndCheckedEvents;
	}
	GetCurrentlyLoadedEventCount(e, t) {
		let r = 0;
		this.filteredAndCheckedEvents.forEach((n) => {
			if (n.start_time >= e && (!t || n.start_time < t)) {
				r++;
			}
		});
		const n = this.BIsCompleteThroughTime("forward", t);
		const i = this.BIsCompleteThroughTime("backward", e);
		return {
			nCount: r,
			bIsComplete: n && i,
		};
	}
	BIsViewEmpty() {
		return this.filteredAndCheckedEvents.length > 0;
	}
	GetActiveEventsAt(e) {
		return this.filteredAndCheckedEvents
			.map((e) => _.O3.GetClanEventModel(e.unique_id))
			.filter((t) => {
				if (t) {
					const r = t.endTime || t.startTime + 3600;
					return e >= t.startTime && e < r;
				}
				return false;
			});
	}
}
(0, m.Cg)([A.EW.struct], D.prototype, "viewFilteredEvents", null);
(0, m.Cg)([A.EW.struct], D.prototype, "filteredAndCheckedEvents", null);
const N = A.sH.box(null);
const F = new Map();
function G() {
	if (N.get() == null) {
		(function (e, t) {
			let r = "";
			if (e.appids && e.appids.length > 0) {
				r += "appids:" + e.appids.sort().join(",");
			}
			if (e.clanaccountids && e.clanaccountids.length > 0) {
				r += "clanids:" + e.clanaccountids.sort().join(",");
			}
			if (e.collectionid) {
				r += "collection:" + e.collectionid;
			}
			if (e.saleid) {
				r += "sale:" + e.saleid;
			}
			if (e.bSectionByDay) {
				r += "_sectionbyday";
			}
			if (e.rtCalendarEnd) {
				r += "_end:" + e.rtCalendarEnd;
			}
			if (e.rgTags && e.rgTags.length > 0) {
				r += "_tags:" + e.rgTags.slice().sort().join(",");
			}
			if (e.hubtype) {
				r +=
					"_hubtype:" +
					e.hubtype +
					"_" +
					e.category_or_language +
					"_" +
					e.tag_name;
			}
			if (N.get() !== r) {
				N.set(r);
				if (!F.has(r)) {
					F.set(r, new k(e, t));
				}
			}
		})({});
	}
	return F.get(N.get());
}
window.g_EventCalendarMap = F;
var O = require(/*webcrack:missing*/ "./90765.js");
var P = require("./10606.js");
var L = require("./13869.js");
var z = require("./12911.js");
var x = require("./74670.js");
var U = require("./99327.js");
var W = require("./76565.js");
var V = require("./4816.js");
var H = require(/*webcrack:missing*/ "./90242.js");
var j = require(/*webcrack:missing*/ "./50376.js");
var q = require(/*webcrack:missing*/ "./98995.js");
const Q = (0, i.PA)((e) => {
	const { closeModal: t } = e;
	return s.createElement(P.o0, {
		strTitle: (0, Localize)(
			"#EventCalendar_GameSource_UnhideCuratorsDialog_Title",
		),
		strDescription: (0, Localize)(
			"#EventCalendar_GameSource_UnhideCuratorsDialog_Description",
		),
		strOKButtonText: (0, Localize)(
			"#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton",
		),
		strCancelButtonText: (0, Localize)(
			"#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton",
		),
		onOK: () => {
			G().m_visibilityStore.SetGameSourceAllowed(E.FD.k_ECurator, true);
			t();
		},
		onCancel: () => {
			G().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(true);
			t();
		},
	});
});
function Z(e) {
	if (!e) {
		if (N !== null) {
			if (
				!G().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() &&
				!G().m_visibilityStore.BIsGameSourceAllowed(E.FD.k_ECurator)
			) {
				(0, L.pg)(s.createElement(Q, null), window);
			}
		}
	}
}
function Y() {
	return (
		!!C.KN.Get().BIsUserLoggedIn() ||
		((0, L.pg)(
			s.createElement(P.o0, {
				strTitle: (0, Localize)("#EventDisplay_Share_NotLoggedIn"),
				strDescription: (0, Localize)(
					"#EventDisplay_Share_NotLoggedIn_Description",
				),
				strOKButtonText: (0, Localize)("#MobileLogin_SignIn"),
				onOK: () => (0, V.vg)(),
			}),
			window,
		),
		false)
	);
}
function K(e) {
	const t = o.b.InitFromClanID(e);
	const r = C.KN.Get().GetPartnerEventPermissions(t);
	return (
		!r ||
		!r.limited_user ||
		((0, L.pg)(s.createElement(U.g, null), window), false)
	);
}
const X = (e) => {
	const {
		className: t,
		bIgnored: r,
		bApplyingFollowing: n,
		bFollowing: i,
		onFollowClick: a,
	} = e;
	if (M.HD.bIsFollowingEnabled) {
		return s.createElement(
			q.he,
			{
				toolTipContent:
					r || i ? undefined : (0, Localize)("#CreatorHome_Follow_tooltip"),
			},
			s.createElement(
				H.ml,
				{
					className: (0, O.A)(
						W.Button,
						x.FollowButton,
						"FollowButton",
						t,
						i ? "Followed" : "",
					),
					onClick: a,
				},
				n &&
					s.createElement(z.k, {
						size: 15,
					}),
				!n && (i || r) && s.createElement(j.Jlk, null),
				s.createElement(
					"div",
					{
						className: x.FollowBtnText,
					},
					!n &&
						(i
							? (0, Localize)("#Button_Followed")
							: r
								? (0, Localize)("#Button_Ignored")
								: (0, Localize)("#Button_Follow")),
				),
			),
		);
	} else {
		return null;
	}
};
export const of = (e) => {
	const [t, r] = s.useState(false);
	const { clanAccountID: n, className: i } = e;
	const m = o.b.InitFromClanID(n);
	const u = (0, a.q3)(() => c.Fm.Get().BIsFollowingCurator(m));
	const d = (0, a.q3)(() => !u && c.Fm.Get().BIsIgnoringCurator(m));
	return s.createElement(X, {
		className: i,
		bIgnored: d,
		bFollowing: u,
		bApplyingFollowing: t,
		onFollowClick: () => {
			const { clanAccountID: t } = e;
			if (Y() && K(t)) {
				r(true);
				(() => {
					const { clanAccountID: t, creatorID: n } = e;
					const i = o.b.InitFromClanID(t);
					const a = c.Fm.Get().BIsFollowingCurator(i);
					const s = !a && c.Fm.Get().BIsIgnoringCurator(i);
					c.Fm.Get()
						.UpdateFollowOrIgnoreCurator(i, !s, !s && !a)
						.then((e) => {
							if (n) {
								let e = l.pF.GetCreatorHomeByID(n);
								if (!s) {
									e.AdjustFollower(a ? -1 : 1);
								}
							}
							r(false);
						})
						.then(() => {
							Z(a);
						})
						.catch((e) => {
							r(false);
							let t = (0, S.H)(e);
							console.error(
								"CuratorFollowButton hit error: " + t.strErrorMsg,
								t,
							);
						});
				})();
			}
		},
	});
};
export const do2 = (e) => {
	const [t, r] = s.useState(false);
	const { appid: n, className: i } = e;
	const a = c.Fm.Get().BFollowsApp(n);
	const o = !a && c.Fm.Get().BIsGameIgnored(n);
	return s.createElement(X, {
		className: i,
		bIgnored: o,
		bFollowing: a,
		bApplyingFollowing: t,
		onFollowClick: () => {
			if (Y()) {
				r(true);
				(() => {
					const { appid: t } = e;
					const n = c.Fm.Get().BFollowsApp(t);
					const i = !n && c.Fm.Get().BIsGameIgnored(t);
					c.Fm.Get()
						.UpdateFollowingApp(t, !i && !n)
						.then(() => {
							r(false);
						})
						.catch((e) => {
							r(false);
							const t = (0, S.H)(e);
							console.error("AppFollowButton hit error: " + t.strErrorMsg, t);
						});
				})();
			}
		},
	});
};
