var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./12176.js");
var l = require("./10812.js");
var c = require(/*webcrack:missing*/ "./79769.js");
var m = require(/*webcrack:missing*/ "./93960.js");
var u = require(/*webcrack:missing*/ "./72476.js");
var d = require("./16154.js");
class A {
	m_CMInterface;
	m_setShownEvents = new Set();
	m_setReadEvents = new Set();
	m_rgPendingUpload = [];
	m_schUpload = new c.LU();
	m_bUploading = false;
	constructor(e) {
		this.m_CMInterface = e;
	}
	MarkEventShown(e, t, r) {
		let n = this.MakeKey(e, r);
		if (this.m_setShownEvents.has(n)) {
			return false;
		}
		this.m_setShownEvents.add(n);
		let i = new l.kZ();
		i.set_event_gid(e);
		i.set_clanid(t);
		i.set_display_location(r);
		i.set_mark_shown(true);
		this.QueueForUpload(i);
		return true;
	}
	MarkEventRead(e, t, r) {
		let n = this.MakeKey(e, r);
		if (this.m_setReadEvents.has(n)) {
			return false;
		}
		this.m_setReadEvents.add(n);
		let i = new l.kZ();
		i.set_event_gid(e);
		i.set_clanid(t);
		i.set_display_location(r);
		i.set_mark_read(true);
		this.QueueForUpload(i);
		return true;
	}
	MakeKey(e, t) {
		return `${e}_${t}`;
	}
	QueueForUpload(e) {
		this.m_rgPendingUpload.push(e);
		this.ScheduleUpload();
	}
	ScheduleUpload() {
		if (!this.m_bUploading) {
			if (this.m_rgPendingUpload.length >= 30) {
				this.UploadPendingData();
			} else if (!this.m_schUpload.IsScheduled()) {
				this.m_schUpload.Schedule(60000, this.UploadPendingData);
			}
		}
	}
	async Flush() {
		if (!this.m_bUploading) {
			return this.UploadPendingData();
		}
	}
	async UploadPendingData() {
		if (this.m_bUploading) {
			return;
		}
		this.m_schUpload.Cancel();
		let e = this.m_rgPendingUpload.splice(0, 30);
		if (e.length == 0) {
			return;
		}
		let t = false;
		if (this.m_CMInterface) {
			let r = o.w.Init(l.wS);
			for (let t of e) {
				r.Body().add_markings(t);
			}
			this.m_bUploading = true;
			let n = await l.BE.MarkPartnerEventsForUser(
				this.m_CMInterface.GetServiceTransport(),
				r,
			);
			this.m_bUploading = false;
			t = n.GetEResult() == 1;
		} else {
			if (!u.iA.logged_in) {
				return;
			}
			let r = e.map((e) => e.toObject());
			let n = (0, u.xv)() + "actions/ajaxmarkpartnerevents";
			const i = new FormData();
			i.append("sessionid", u.TS.SESSIONID);
			i.append("request", JSON.stringify(r));
			try {
				t =
					(
						await a.post(n, i, {
							withCredentials: true,
						})
					).data.success == 1;
			} catch (e) {
				let t = (0, d.H)(e);
				console.error(
					"CPartnerEventUserTracking.UploadPendingData error " + t.strErrorMsg,
					t,
				);
			}
		}
		if (t) {
			if (this.m_rgPendingUpload.length > 0) {
				this.ScheduleUpload();
			}
		} else {
			console.log("Saving news event state failed. Will try again soon!");
			this.m_rgPendingUpload = this.m_rgPendingUpload.concat(e);
			this.m_schUpload.Schedule(60000, this.UploadPendingData);
		}
	}
}
(0, n.Cg)([m.o], A.prototype, "UploadPendingData", null);
require(/*webcrack:missing*/ "./8573.js");
export var Nh;
var g = require(/*webcrack:missing*/ "./49455.js");
require(/*webcrack:missing*/ "./63696.js");
var h = require("./1624.js");
class C {
	clanid = undefined;
	appid = 0;
	can_edit = false;
	owns_app = false;
	follows_app = false;
	support_user = false;
	valve_admin = false;
	limited_user = false;
	event_ignored = new Array();
	event_followed = new Array();
	event_followed_flags = new Array();
	constructor(e) {
		(0, s.Gn)(this);
		this.clanid = e;
	}
}
(0, n.Cg)([s.sH], C.prototype, "clanid", undefined);
(0, n.Cg)([s.sH], C.prototype, "appid", undefined);
(0, n.Cg)([s.sH], C.prototype, "can_edit", undefined);
(0, n.Cg)([s.sH], C.prototype, "owns_app", undefined);
(0, n.Cg)([s.sH], C.prototype, "follows_app", undefined);
(0, n.Cg)([s.sH], C.prototype, "support_user", undefined);
(0, n.Cg)([s.sH], C.prototype, "valve_admin", undefined);
(0, n.Cg)([s.sH], C.prototype, "limited_user", undefined);
(0, n.Cg)([s.sH], C.prototype, "event_ignored", undefined);
(0, n.Cg)([s.sH], C.prototype, "event_followed", undefined);
(0, n.Cg)([s.sH], C.prototype, "event_followed_flags", undefined);
(function (e) {
	e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone";
	e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail";
	e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush";
})((Nh ||= {}));
export class KN {
	constructor() {
		(0, s.Gn)(this);
	}
	m_mapClanToUserPermissions = new Map();
	m_mapAnnounceGIDToVote = new Map();
	m_setReadEventGIDs = new Set();
	m_tracker;
	m_cm = undefined;
	static s_EventUserStore;
	m_bIsPresentationMode = (0, u.Bu)();
	static Get() {
		(0, g.w)(
			!!KN.s_EventUserStore,
			"Have not yet initialized global EventUserStore",
		);
		return KN.s_EventUserStore;
	}
	static IsInitialized() {
		return !!KN.s_EventUserStore;
	}
	static async InitGlobal(e) {
		if (!KN.s_EventUserStore) {
			const t = new KN();
			await t.Init(e);
			KN.s_EventUserStore = t;
			if (u.TS.WEB_UNIVERSE == "dev") {
				window.g_EventUserStore = t;
			}
		}
	}
	async Init(e) {
		this.m_cm = e;
		this.m_tracker = new A(e);
		const t = (0, u.Fd)("partnereventpermissions", "application_config");
		if (this.ValidateStoreDefault(t)) {
			(0, s.h5)(() => {
				t.forEach((e) => {
					let t = new C(e.clanid);
					let r = {
						result: t,
						promise: KN.RemapToPromise(t),
					};
					this.CopyFromResponseToTrack(r, e);
					this.m_mapClanToUserPermissions.set(e.clanid, r);
				});
			});
			if (u.TS.WEB_UNIVERSE == "dev" || u.TS.WEB_UNIVERSE == "beta") {
				console.log(
					"CEventUserStore has loaded",
					this.m_mapClanToUserPermissions.size,
					this.m_mapClanToUserPermissions,
				);
			}
		}
		let r = (0, u.Fd)("uservotes", "application_config");
		if (r) {
			(0, s.h5)(() => {
				r.forEach((e) => {
					let t = !!e.voted_up || (!e.voted_down && undefined);
					this.m_mapAnnounceGIDToVote.set(e.clanAnnouncementGID, t);
				});
			});
		}
	}
	GetTracker() {
		return this.m_tracker;
	}
	ValidateStoreDefault(e) {
		const t = e;
		return (
			!!t &&
			!!Array.isArray(t) &&
			!!(t.length > 0) &&
			typeof t[0] == "object" &&
			typeof t[0].clanid == "number" &&
			typeof t[0].appid == "number"
		);
	}
	RecordEventShown(e, t) {
		if (e && !e.bOldAnnouncement) {
			this.m_tracker.MarkEventShown(e.GID, e.clanSteamID.GetAccountID(), t);
		}
	}
	RecordEventRead(e, t) {
		if (e && !e.bOldAnnouncement) {
			if (!this.HasEventBeenRead(e.GID)) {
				this.SetEventAsRead(e.GID);
				this.m_tracker.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t);
			}
		}
	}
	SetEventAsRead(e) {
		this.m_setReadEventGIDs.add(e);
	}
	HasEventBeenRead(e) {
		return this.m_setReadEventGIDs.has(e);
	}
	static async RemapToPromise(e) {
		return e;
	}
	BIsUserLoggedIn() {
		return u.iA.logged_in;
	}
	BIsPartnerEventPermissionsLoaded(e) {
		return this.m_mapClanToUserPermissions.has(e);
	}
	GetPartnerEventPermissions(e) {
		if (!e || !e.BIsValid()) {
			return new C(0);
		}
		const t = e.GetAccountID();
		if (!this.m_mapClanToUserPermissions.has(t)) {
			this.LoadSingleAppEventPermissions(e);
		}
		return this.m_mapClanToUserPermissions.get(t).result;
	}
	BFollowsEvent(e, t) {
		return this.GetPartnerEventPermissions(e).event_followed.indexOf(t) != -1;
	}
	BFollowsEventAndNotifiedBy(e, t, r) {
		let n = this.GetPartnerEventPermissions(e);
		let i = n.event_followed.indexOf(t);
		return i !== -1 && (n.event_followed_flags[i] & r) == r;
	}
	BIgnoresEvent(e, t) {
		return this.GetPartnerEventPermissions(e).event_ignored.indexOf(t) != -1;
	}
	async LoadSingleAppEventPermissions(e) {
		let t = e.GetAccountID();
		let r = this.m_mapClanToUserPermissions.get(t);
		if (!r) {
			r = {
				promise: this.InternalLoadSingleAppEventPermissions(e),
				result: new C(t),
			};
			this.m_mapClanToUserPermissions.set(t, r);
		}
		return r.promise;
	}
	CopyFromResponseToTrack(e, t) {
		e.result.appid = t.appid;
		e.result.can_edit = t.can_edit;
		e.result.clanid = t.appid;
		e.result.event_followed = t.event_followed;
		e.result.event_ignored = t.event_ignored;
		e.result.event_followed_flags = t.event_followed_flags;
		e.result.follows_app = t.follows_app;
		e.result.owns_app = t.owns_app;
		e.result.limited_user = t.limited_user;
		if ((t.support_user || t.valve_admin) && this.m_bIsPresentationMode) {
			e.result.can_edit = true;
			e.result.support_user = false;
			e.result.valve_admin = false;
		} else {
			e.result.support_user = t.support_user;
			e.result.valve_admin = t.valve_admin;
		}
	}
	async InternalLoadSingleAppEventPermissions(e) {
		let t = null;
		let r = e.GetAccountID();
		let n = !Boolean(u.iA.logged_in);
		if (!this.m_mapClanToUserPermissions.has(r)) {
			let t = new C(e.GetAccountID());
			this.m_mapClanToUserPermissions.set(r, {
				result: t,
				promise: KN.RemapToPromise(t),
			});
		}
		try {
			if (Boolean(u.iA.logged_in)) {
				let i =
					u.TS.COMMUNITY_BASE_URL +
					"gid/" +
					e.ConvertTo64BitString() +
					"/ajaxgetpartnereventpermissions/";
				let s = {};
				if ((0, u.yK)() == "partnerweb") {
					i =
						u.TS.PARTNER_BASE_URL +
						"partnerevents/ajaxgetpartnereventpermissions";
					s = {
						clanaccountid: e.GetAccountID(),
					};
				} else if ((0, u.yK)() == "store") {
					i = u.TS.STORE_BASE_URL + "events/ajaxgetpartnereventpermissions";
					s = {
						clanaccountid: e.GetAccountID(),
					};
				}
				t = await a.get(i, {
					params: s,
					withCredentials: true,
				});
				if (t.data.success != 1) {
					console.error(
						"Partner Events Failed Load:" + (0, d.H)(t.data).strErrorMsg,
					);
					n = true;
				} else {
					let e = this.m_mapClanToUserPermissions.get(r);
					this.CopyFromResponseToTrack(e, t.data);
				}
			}
		} catch (e) {
			t = e.response;
			n = true;
			if (
				e &&
				e.response !== undefined &&
				e.response.data !== undefined &&
				e.response.data.success !== undefined &&
				e.response.data.success == 21
			);
			else {
				const t = (0, d.H)(e);
				console.error(
					"InternalLoadSingleAppEventPermissions account: " +
						r +
						": " +
						t.strErrorMsg,
					t,
				);
			}
		} finally {
			if (n) {
				(0, s.h5)(() => {
					let e = this.m_mapClanToUserPermissions.get(r);
					e.result.appid = t && t.data ? t.data.appid : 0;
					e.result.can_edit = false;
					e.result.clanid = t && t.data ? t.data.clanid : 0;
					e.result.event_followed = new Array();
					e.result.event_ignored = new Array();
					e.result.event_followed_flags = new Array();
					e.result.follows_app = false;
					e.result.owns_app = false;
					e.result.support_user = false;
					e.result.valve_admin = false;
					e.result.limited_user = false;
				});
			}
		}
		return this.m_mapClanToUserPermissions.get(r).result;
	}
	async SetFollowOrUnfollowEvent(e, t, r, n, i) {
		let o = this.GetPartnerEventPermissions(r);
		let l = o.event_followed.indexOf(n);
		let c = 0;
		if (l !== -1) {
			c = o.event_followed_flags[l];
			if (e) {
				i = c & ~i;
			} else {
				i |= c;
			}
		}
		let m = i == 0;
		let d =
			((0, u.yK)() === "store"
				? u.TS.STORE_BASE_URL + "events"
				: u.TS.COMMUNITY_BASE_URL + "/gid/" + r.ConvertTo64BitString()) +
			(m ? "/unfolloworunignoreevent" : "/followorignoreevent");
		let A = new URLSearchParams();
		A.append("sessionid", u.TS.SESSIONID);
		A.append("ignore", "" + t);
		A.append("gid", n);
		A.append("notification_flag", "" + i);
		A.append("clan_accountid", "" + r.GetAccountID());
		await a.post(d, A, {
			withCredentials: true,
		});
		(0, s.h5)(() => {
			let e = this.m_mapClanToUserPermissions.get(r.GetAccountID());
			let a = null;
			let s = null;
			let o = null;
			let l = null;
			if (m) {
				a = t ? e.result.event_ignored : e.result.event_followed;
				o = t ? null : e.result.event_followed_flags;
			} else if (t) {
				a = e.result.event_followed;
				o = e.result.event_followed_flags;
				s = e.result.event_ignored;
			} else {
				a = e.result.event_ignored;
				s = e.result.event_followed;
				l = e.result.event_followed_flags;
			}
			let c = a.indexOf(n);
			if (c > -1) {
				a.splice(c, 1);
				if (o) {
					o.splice(c, 1);
				}
			}
			if (s) {
				let e = s.indexOf(n);
				if (e == -1) {
					s.push(n);
					if (l) {
						l.push(i);
					}
				} else {
					l[e] = i;
				}
			}
		});
	}
	async Vote(e, t, r) {
		if (!e || !e.AnnouncementGID) {
			return false;
		}
		const n = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
		if (n === t) {
			return true;
		}
		this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t);
		(0, s.h5)(() => {
			if (n === true) {
				e.UpdateVoteCount("up", -1);
			}
			if (n === false) {
				e.UpdateVoteCount("down", -1);
			}
			if (t === true) {
				e.UpdateVoteCount("up", 1);
			}
			if (t === false) {
				e.UpdateVoteCount("down", 1);
			}
		});
		if (this.m_cm) {
			let r = o.w.Init(l.QU);
			r.Body().set_announcementid(e.AnnouncementGID);
			r.Body().set_vote_up(!!t);
			r.Body().set_clan_accountid(e.clanSteamID.GetAccountID());
			return (
				(
					await l.BE.RateClanAnnouncement(this.m_cm.GetServiceTransport(), r)
				).GetEResult() == 1
			);
		}
		{
			const n = (0, u.yK)();
			const i =
				n == "community" || n == "steamtv"
					? u.TS.COMMUNITY_BASE_URL +
						"gid/" +
						e.clanSteamID.ConvertTo64BitString() +
						"/announcements/rate/" +
						e.AnnouncementGID
					: u.TS.STORE_BASE_URL + "updated/ajaxrateupdate/" + e.AnnouncementGID;
			const s = new URLSearchParams();
			s.append("sessionid", u.TS.SESSIONID);
			s.append("voteup", t ? "1" : "0");
			s.append("clanid", "" + e.clanSteamID.GetAccountID());
			s.append("ajax", "1");
			const o = {
				withCredentials: true,
				cancelToken: r.token,
			};
			return (await a.post(i, s, o)).data.success == 1;
		}
	}
	async LoadMyVote(e, t) {
		if (e?.AnnouncementGID) {
			if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID)) {
				return this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
			}
			let r;
			if (this.m_cm) {
				let t = o.w.Init(l.$Y);
				t.Body().set_announcementid(e.AnnouncementGID);
				let n = await l.BE.GetClanAnnouncementVoteForUser(
					this.m_cm.GetServiceTransport(),
					t,
				);
				if (n.GetEResult() == 1) {
					r = !!n.Body().voted_up() || (!n.Body().voted_down() && undefined);
				}
			} else {
				const n = (0, u.yK)() == "store";
				const i = n
					? u.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
					: u.TS.COMMUNITY_BASE_URL +
						"gid/" +
						e.clanSteamID.ConvertTo64BitString() +
						"/announcements/ajaxgetmyvote/" +
						e.AnnouncementGID;
				const s = {
					gid: n ? e.AnnouncementGID : undefined,
				};
				const o = await a.get(i, {
					withCredentials: true,
					cancelToken: t.token,
					params: s,
				});
				r = !!o.data.voted_up || (!o.data.voted_down && undefined);
			}
			this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, r);
			return r;
		}
	}
	SetVote(e, t) {
		this.m_mapAnnounceGIDToVote.set(e, t);
	}
	BHasMyVote(e) {
		return (
			!!e.AnnouncementGID && this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID)
		);
	}
	GetPreviouslyLoadedVote(e) {
		if (e.AnnouncementGID) {
			return this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
		} else {
			return undefined;
		}
	}
	BShowEmailEditorTab(e) {
		if (e.BHasEmailEnabled()) {
			return true;
		}
		if (e.clanSteamID.GetAccountID() == (0, h.H7)()) {
			return true;
		}
		let t = this.GetPartnerEventPermissions(e.clanSteamID);
		return (u.UF.IS_OGG || u.UF.IS_VALVE_GROUP) && t.valve_admin;
	}
	BShowSaleEditorTab(e) {
		if (e.BHasSaleEnabled()) {
			return true;
		}
		if (e.clanSteamID.GetAccountID() == (0, h.H7)()) {
			return false;
		}
		let t = this.GetPartnerEventPermissions(e.clanSteamID);
		return (
			!u.UF.IS_OGG &&
			(t.valve_admin ||
				(e.jsondata.clone_from_event_gid && e.jsondata.clone_from_sale_enabled))
		);
	}
}
(0, n.Cg)([s.sH], KN.prototype, "m_mapClanToUserPermissions", undefined);
(0, n.Cg)([s.sH], KN.prototype, "m_mapAnnounceGIDToVote", undefined);
(0, n.Cg)([s.sH], KN.prototype, "m_setReadEventGIDs", undefined);
(0, n.Cg)([s.XI], KN.prototype, "CopyFromResponseToTrack", null);
