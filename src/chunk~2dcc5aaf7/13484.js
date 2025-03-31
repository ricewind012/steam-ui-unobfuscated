import { PadArray } from "../../actual_src/utils/arrayutils.js";
import { CLocalizationManager } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./83957.js";
import s, { Gn, h5 } from "./89193.js";
import o, { tB } from "./59351.js";
import l, { sf } from "./44846.js";
import c from "./69740.js";
import m from "./8573.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import A, { H } from "./16154.js";
import {
	CScheduledFunc,
	CCallbackList,
} from "../../actual_src/utils/callbackutils";
import h, { kd } from "./51095.js";
import C, { Fd, yK } from "./72476.js";
import "./63696.js";
import _ from "./52451.js";
const a = i;
class f {
	appid;
	date;
	can_play;
	playtime;
	announcementid;
	constructor(e) {
		AssertMsg(
			typeof e.appid == "number",
			"AJAX updated app returned a non-numeric AppID! Did the PHP change?",
		);
		this.appid = e.appid;
		this.date = e.date;
		this.can_play = e.can_play;
		this.playtime = e.playtime;
		this.announcementid = e.announcementid;
	}
}
function b(e) {
	let t = `${e}`;
	const r = CLocalizationManager.GetELanguageFallback(e);
	if (e != r) {
		t += `_${r}`;
	}
	return t;
}
export class ZQ {
	constructor() {
		Gn(this);
	}
	m_mapExistingEvents = new Map();
	m_mapEventUpdateCallback = new Map();
	m_mapAnnouncementBodyToEvent = new Map();
	m_mapClanToGIDs = new Map();
	m_mapAppIDToGIDs = new Map();
	m_mapAdjacentAnnouncementGIDs = new Map();
	m_mapUpdatedApps = new Map();
	m_tsUpdatedAppsQueryTime = 0;
	m_rgQueuedEventsClanIDs = new Array();
	m_rgQueuedEventsUniqueIDs = new Array();
	m_rgQueuedEventsForEditFlags = new Array();
	m_QueuedEventTimeout = new CScheduledFunc();
	m_PendingInfoPromise;
	m_PendingInfoResolve;
	m_bLoadedFromConfig = false;
	Init() {
		if (!this.m_bLoadedFromConfig) {
			e = "PartnerEventStore";
			let t = window.StoreDefaults ? window.StoreDefaults[e] : undefined;
			if (this.ValidateStoreDefault(t)) {
				t.forEach((e) => {
					if (e) {
						let t = new m.b(e.clan_steamid);
						const r = this.InsertEventModelFromClanEventData(t, e);
						if (e.announcement_body) {
							this.m_mapExistingEvents.set(c.cB + e.announcement_body.gid, r);
						}
					}
				});
			}
			let r = Fd("partnereventstore", "application_config");
			if (this.ValidateStoreDefault(r)) {
				r.forEach((e) => {
					if (e) {
						let t = new m.b(e.clan_steamid);
						const r = this.InsertEventModelFromClanEventData(t, e);
						if (
							e.announcement_body &&
							!this.m_mapExistingEvents.has(c.cB + e.announcement_body.gid)
						) {
							this.m_mapExistingEvents.set(c.cB + e.announcement_body.gid, r);
						}
					}
				});
			}
			let n = Fd("partnereventadjacents", "application_config");
			if (this.ValidateAdjacentEvent(n)) {
				if (C.TS.WEB_UNIVERSE == "dev" || C.TS.WEB_UNIVERSE == "beta") {
					console.log(
						`DEV_DEBUG: CPartnerEventStore loading adjacents gids payload: ${n.length}`,
					);
				}
				n.forEach((e) => {
					if (e) {
						this.m_mapAdjacentAnnouncementGIDs.set(
							e.announcementGID,
							e.adjacents,
						);
					}
				});
			}
			if (C.TS.WEB_UNIVERSE == "dev") {
				console.log(
					`PartnerEventStore Loaded events: ${this.m_mapExistingEvents.size} with adjacent info: ${this.m_mapExistingEvents.size}`,
				);
			}
			this.m_bLoadedFromConfig = true;
		}
		var e;
	}
	ValidateStoreDefault(e) {
		const t = e;
		return (
			!!t &&
			!!Array.isArray(t) &&
			!!(t.length > 0) &&
			typeof t[0] == "object" &&
			(typeof t[0].gid == "string" ||
				(typeof t[0].announcement_body == "object" &&
					typeof t[0].announcement_body.gid == "string"))
		);
	}
	ValidateAdjacentEvent(e) {
		const t = e;
		return (
			!!t &&
			!!Array.isArray(t) &&
			!!(t.length > 0) &&
			typeof t[0] == "object" &&
			typeof t[0].announcementGID == "string" &&
			Array.isArray(t[0].adjacents) &&
			(t[0].adjacents.length == 0 || typeof t[0].adjacents[0] == "string")
		);
	}
	GetPartnerEventChangeCallback(e) {
		if (!this.m_mapEventUpdateCallback.has(e)) {
			this.m_mapEventUpdateCallback.set(e, new CCallbackList());
		}
		return this.m_mapEventUpdateCallback.get(e);
	}
	GetClanEventGIDs(e) {
		let t = this.m_mapClanToGIDs.get(e.GetAccountID());
		return t || [];
	}
	GetClanEventGIDsForApp(e) {
		let t = this.m_mapAppIDToGIDs.get(e);
		return t || [];
	}
	GetClanEventModel(e) {
		return this.m_mapExistingEvents.get(e);
	}
	BHasClanEventModel(e) {
		return this.m_mapExistingEvents.has(e);
	}
	BHasClanAnnouncementGID(e) {
		if (this.m_mapAnnouncementBodyToEvent.has(e)) {
			let t = this.m_mapAnnouncementBodyToEvent.get(e);
			return this.BHasClanEventModel(t);
		}
		return false;
	}
	GetClanEventGIDFromAnnouncementGID(e) {
		return this.m_mapAnnouncementBodyToEvent.get(e);
	}
	GetClanEventFromAnnouncementGID(e) {
		return this.m_mapExistingEvents.get(
			this.m_mapAnnouncementBodyToEvent.get(e),
		);
	}
	DefaultEventSortFunction(e, t) {
		if (e.startTime == t.startTime) {
			return kd(e.GID, t.GID);
		} else {
			return t.startTime - e.startTime;
		}
	}
	RegisterClanEvents(e) {
		if (e) {
			for (const t of e) {
				const e = this.GetEventLookupKey(t);
				if (!this.m_mapExistingEvents.has(e)) {
					const e = new m.b(t.clan_steamid);
					this.InsertEventModelFromClanEventData(e, t);
				}
			}
		}
	}
	GetRankedClanEvents(e, t) {
		let r = [];
		let n = e ? this.GetClanEventGIDs(e) : this.GetClanEventGIDsForApp(t);
		if (!n || n.length == 0) {
			return r;
		}
		for (let e of n) {
			let t = this.GetClanEventModel(e);
			r.push(t);
		}
		r.sort(this.DefaultEventSortFunction);
		return r;
	}
	BIsOldAnnouncement(e) {
		return (
			(e.gid == null || e.gid == null || e.gid == null || e.gid == "0") &&
			e.announcement_body &&
			e.announcement_body.gid != "0"
		);
	}
	GetEventLookupKey(e) {
		if (this.BIsOldAnnouncement(e)) {
			return c.cB + e.announcement_body.gid;
		} else {
			return e.gid;
		}
	}
	InsertEventModelFromClanEventData(e, t) {
		let r = new c.lh();
		r.clanSteamID = e;
		AssertMsg(
			r.clanSteamID && r.clanSteamID.BIsValid(),
			`Invalid Clan SteamID: ${r.clanSteamID.ConvertTo64BitString()} ${
				C.TS.EUNIVERSE
			}`,
		);
		r.GID = this.GetEventLookupKey(t);
		r.bOldAnnouncement = this.BIsOldAnnouncement(t);
		r.appid = t.appid;
		r.startTime = t.rtime32_start_time;
		r.endTime = t.rtime32_end_time;
		r.visibilityStartTime = t.rtime32_visibility_start;
		r.visibilityEndTime = t.rtime32_visibility_end;
		r.loadedAllLanguages = false;
		r.type = t.event_type;
		r.nVotesUp = t.votes_up;
		r.nVotesDown = t.votes_down;
		r.comment_type = t.comment_type;
		r.gidfeature = t.gidfeature;
		r.gidfeature2 = t.gidfeature2;
		r.featured_app_tagid = t.featured_app_tagid;
		r.vecTags = new Array();
		r.creator_steamid = t.creator_steamid;
		r.last_update_steamid = t.last_update_steamid;
		r.rtime32_last_modified = t.rtime32_last_modified;
		r.rtime32_moderator_reviewed = t.rtime_mod_reviewed;
		r.video_preview_type = t.video_preview_type;
		r.video_preview_id = t.video_preview_id;
		r.has_live_stream = t.has_live_stream;
		r.live_stream_viewer_count = t.live_stream_viewer_count;
		r.m_nBuildID = t.build_id;
		r.m_strBuildBranch = t.build_branch;
		if (t.announcement_body) {
			let t_announcement_body = t.announcement_body;
			r.AnnouncementGID = t_announcement_body.gid;
			r.name.set(t_announcement_body.language, t_announcement_body.headline);
			r.description.set(t_announcement_body.language, t_announcement_body.body);
			r.timestamp_loc_updated.clear();
			r.forumTopicGID = t_announcement_body.forum_topic_id;
			r.nCommentCount = t_announcement_body.commentcount;
			r.postTime = t_announcement_body.posttime;
			if (r.bOldAnnouncement && !t_announcement_body.hidden) {
				r.startTime = t_announcement_body.posttime;
			}
			r.announcementClanSteamID = new m.b(t_announcement_body.clanid);
			if (t_announcement_body.tags && t_announcement_body.tags.length > 0) {
				t_announcement_body.tags.forEach((e) => r.vecTags.push(e));
			}
			if (!r.rtime32_last_solr_search_col_updated && r.rtime32_last_modified) {
				r.rtime32_last_solr_search_col_updated = r.rtime32_last_modified;
				r.rtime32_last_modified = t_announcement_body.updatetime;
			}
		} else {
			r.AnnouncementGID = "0";
			r.forumTopicGID = t.forum_topic_id;
			r.name.clear();
			r.description.clear();
			r.timestamp_loc_updated.clear();
			r.postTime = t.rtime32_start_time;
			r.nCommentCount = t.comment_count;
			r.name.set(0, t.event_name);
			r.description.set(0, t.event_notes);
		}
		if (t.broadcaster_accountid) {
			r.broadcaster = new m.b(t.broadcaster_accountid);
		}
		const c_DJ = c.DJ;
		try {
			r.jsondata = {
				...c_DJ,
				...(t.jsondata ? JSON.parse(t.jsondata) : undefined),
			};
		} catch (e) {
			const t = H(e);
			console.error(
				`PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model${t.strErrorMsg}`,
				t,
			);
			throw e;
		}
		r.jsondata.localized_capsule_image = PadArray(
			r.jsondata.localized_capsule_image || [],
			31,
			null,
		);
		r.jsondata.localized_title_image = PadArray(
			r.jsondata.localized_title_image || [],
			31,
			null,
		);
		r.jsondata.localized_subtitle = PadArray(
			r.jsondata.localized_subtitle || [],
			31,
			null,
		);
		r.jsondata.localized_summary = PadArray(
			r.jsondata.localized_summary || [],
			31,
			null,
		);
		r.jsondata.localized_broadcast_title = PadArray(
			r.jsondata.localized_broadcast_title || [],
			31,
			null,
		);
		r.jsondata.localized_broadcast_left_image = PadArray(
			r.jsondata.localized_broadcast_left_image || [],
			31,
			null,
		);
		r.jsondata.localized_broadcast_right_image = PadArray(
			r.jsondata.localized_broadcast_right_image || [],
			31,
			null,
		);
		r.jsondata.localized_sale_header = PadArray(
			r.jsondata.localized_sale_header || [],
			31,
			null,
		);
		r.jsondata.localized_sale_overlay = PadArray(
			r.jsondata.localized_sale_overlay || [],
			31,
			null,
		);
		r.jsondata.localized_sale_product_banner = PadArray(
			r.jsondata.localized_sale_product_banner || [],
			31,
			null,
		);
		r.jsondata.localized_sale_product_mobile_banner = PadArray(
			r.jsondata.localized_sale_product_mobile_banner || [],
			31,
			null,
		);
		r.jsondata.localized_sale_logo = PadArray(
			r.jsondata.localized_sale_logo || [],
			31,
			null,
		);
		if (r.jsondata.sale_num_headers !== undefined) {
			for (let e = 0; e < r.jsondata.sale_num_headers; ++e) {
				r.jsondata.localized_per_day_sales_header[e] = PadArray(
					r.jsondata.localized_per_day_sales_header[e],
					31,
					null,
				);
			}
		}
		if (r.jsondata.sale_sections) {
			r.jsondata.sale_sections.forEach((e, t) => {
				e.localized_label &&= PadArray(e.localized_label, 31, null);
				if (e.section_type === "trailercarousel") {
					e.show_as_carousel = false;
				}
				r.jsondata.sale_sections[t] = {
					...c.G6,
					...e,
				};
			});
		}
		if (r.jsondata.email_setting && r.jsondata.email_setting.sections) {
			r.jsondata.email_setting.sections.forEach((e) => {
				if (
					e.localized_headline !== undefined &&
					e.localized_headline !== null
				) {
					e.localized_headline = PadArray(e.localized_headline, 31, null);
				}
				if (e.localized_body !== undefined && e.localized_body !== null) {
					e.localized_body = PadArray(e.localized_body, 31, null);
				}
				if (e.localized_image !== undefined && e.localized_image !== null) {
					e.localized_image = PadArray(e.localized_image, 31, null);
				}
			});
		}
		r.jsondata.localized_title_image.forEach((e, t) => {
			if (e != null && e.substr(0, 4) == "http") {
				let n = e.lastIndexOf("/");
				let i = e.substr(n + 1);
				r.jsondata.localized_title_image[t] = i;
			}
		});
		if (t.published) {
			if (t.unlisted) {
				r.visibility_state = c.zv.k_EEventStatsUnlisted;
			} else if (t.hidden) {
				r.visibility_state = c.zv.k_EEventStateStaged;
			} else {
				r.visibility_state = c.zv.k_EEventStateVisible;
			}
		} else {
			r.visibility_state = c.zv.k_EEventStateUnpublished;
		}
		this.InsertUniqueEventGID(e.GetAccountID(), r.appid, r.GID);
		this.m_mapExistingEvents.set(r.GID, r);
		if (r.AnnouncementGID && r.AnnouncementGID.length > 1) {
			this.m_mapAnnouncementBodyToEvent.set(r.AnnouncementGID, r.GID);
		}
		r.bLoaded = true;
		return r;
	}
	HelperInitializeNumSalesHeaderArray(e) {
		if (e.jsondata.sale_num_headers > 1) {
			e.jsondata.localized_per_day_sales_header = [];
			for (let t = 0; t < e.jsondata.sale_num_headers; ++t) {
				e.jsondata.localized_per_day_sales_header.push(PadArray([], 31, null));
			}
			e.m_overrideCurrentDay = 0;
		} else {
			e.m_overrideCurrentDay = undefined;
		}
	}
	GetAllClanEvents(e) {
		let t = new Array();
		if (this.m_mapClanToGIDs.has(e.GetAccountID())) {
			this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
				let r = this.m_mapExistingEvents.get(e);
				if (r) {
					t.push(r);
				}
			});
		}
		return t;
	}
	async QueueLoadPartnerEvent(e, t, r) {
		if (this.m_mapExistingEvents.has(t)) {
			return;
		}
		this.m_rgQueuedEventsClanIDs.push(e);
		this.m_rgQueuedEventsUniqueIDs.push(t);
		this.m_rgQueuedEventsForEditFlags.push(Boolean(r));
		this.m_PendingInfoPromise ||= new Promise(
			(e) => (this.m_PendingInfoResolve = e),
		);
		const n = this.m_PendingInfoPromise;
		const i = () => {
			const e = this.m_PendingInfoResolve;
			const t = this.m_rgQueuedEventsClanIDs;
			const r = this.m_rgQueuedEventsUniqueIDs;
			const n = this.m_rgQueuedEventsForEditFlags;
			this.m_PendingInfoPromise = null;
			this.m_rgQueuedEventsClanIDs = new Array();
			this.m_rgQueuedEventsUniqueIDs = new Array();
			this.m_rgQueuedEventsForEditFlags = new Array();
			this.InternalLoadPartnerEventList(t, r, n).then(() => e());
		};
		if (this.m_rgQueuedEventsClanIDs.length >= 30) {
			this.m_QueuedEventTimeout.Cancel();
			i();
		} else if (!this.m_QueuedEventTimeout.IsScheduled()) {
			const e = 50;
			this.m_QueuedEventTimeout.Schedule(e, i);
		}
		return n;
	}
	async InternalLoadPartnerEventList(e, t, r) {
		let n = r.some((e) => e);
		const i =
			C.TS.STORE_BASE_URL +
			(n
				? "events/ajaxgeteventdetailsforedit/"
				: "events/ajaxgeteventdetails/");
		const s = b(sf(C.TS.LANGUAGE));
		const o = {
			clanid_list: e.join(","),
			uniqueid_list: t.join(","),
			lang_list: s,
			origin: self.origin,
		};
		try {
			const e = await a.get(i, {
				params: o,
				withCredentials: n,
			});
			this.RegisterClanEvents(e.data.events);
		} catch (e) {
			let t = H(e);
			console.error(`GetEventDetails hit error ${t.strErrorMsg}`, t);
		}
	}
	async LoadAdjacentPartnerEvents(e, t, r, n, i, a, s) {
		return this.InternalLoadAdjacentPartnerEvents(
			e,
			undefined,
			t,
			r,
			n,
			i,
			a,
			s,
		);
	}
	async LoadAdjacentPartnerEventsByAnnouncement(e, t, r, n, i, a, s) {
		return this.InternalLoadAdjacentPartnerEvents(
			undefined,
			e,
			t,
			r,
			n,
			i,
			a,
			s,
		);
	}
	async LoadAdjacentPartnerEventsByEvent(e, t, r, n, i, a, s) {
		const o = t || e.clanSteamID;
		if (e.bOldAnnouncement) {
			return this.InternalLoadAdjacentPartnerEvents(
				undefined,
				e.AnnouncementGID,
				o,
				r,
				n,
				i,
				a,
				s,
			);
		} else {
			return this.InternalLoadAdjacentPartnerEvents(
				e.GID,
				e.AnnouncementGID,
				o,
				r,
				n,
				i,
				a,
				s,
			);
		}
	}
	async InternalLoadAdjacentPartnerEvents(e, t, r, n, i, o, c, u) {
		let d = new Array();
		if (this.m_mapAdjacentAnnouncementGIDs.has(t)) {
			let e = this.m_mapAdjacentAnnouncementGIDs.get(t);
			let r = new Array();
			e.forEach((e) => {
				if (this.m_mapAnnouncementBodyToEvent.has(e)) {
					let t = this.m_mapAnnouncementBodyToEvent.get(e);
					d.push(this.m_mapExistingEvents.get(t));
				} else {
					r.push(e);
				}
			});
			if (r.length > 0) {
				(
					await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
						null,
						r,
						u,
					)
				).forEach((e) => d.push(e));
			}
		} else {
			let p = `${C.TS.STORE_BASE_URL}events/ajaxgetadjacentpartnerevents/`;
			const g = b(sf(C.TS.LANGUAGE));
			let h = {
				clan_accountid: r ? r.GetAccountID() : undefined,
				appid: n,
				count_before: i,
				count_after: o,
				gidevent: e,
				gidannouncement: t,
				lang_list: g,
				rtime_oldestevent: c ? c.rtime_oldestevent : undefined,
				require_tags:
					c && c.require_tags ? c.require_tags.join(",") : undefined,
				exclude_tags:
					c && c.exclude_tags ? c.exclude_tags.join(",") : undefined,
				require_no_tags: c ? c.require_no_tags : undefined,
				event_type_filter:
					c && c.event_type_filter ? c.event_type_filter.join(",") : undefined,
				exclude_event_types:
					c && c.exclude_event_types
						? c.exclude_event_types.join(",")
						: undefined,
				origin: self.origin,
			};
			try {
				let i = await a.get(p, {
					params: h,
					cancelToken: u?.token,
				});
				if (i?.data?.success == 1) {
					h5(() => {
						for (let e of i.data.events) {
							let t = this.GetEventLookupKey(e);
							if (!this.m_mapExistingEvents.has(t)) {
								let t = new m.b(e.clan_steamid);
								this.InsertEventModelFromClanEventData(r || t, e);
							}
							d.push(this.m_mapExistingEvents.get(t));
						}
						if (d.length == 0) {
							if (e && this.BHasClanEventModel(e)) {
								d.push(this.m_mapExistingEvents.get(e));
							} else if (t && this.BHasClanAnnouncementGID(t)) {
								d.push(this.GetClanEventFromAnnouncementGID(t));
							}
						}
					});
				} else {
					let e = H(i?.data);
					console.error(
						`LoadAdjacentPartnerEvents Success but empty response:${n} clanAccount:${
							r ? r.GetAccountID() : 0
						} ${e.strErrorMsg}`,
						e,
					);
				}
			} catch (e) {
				let t = H(e);
				if (t.errorCode != 52) {
					console.error(
						`LoadAdjacentPartnerEvents hit error on appid:${n} clanAccount:${
							r ? r.GetAccountID() : 0
						} ${t.strErrorMsg}`,
						t,
					);
				}
			}
		}
		return d;
	}
	async LoadPartnerEventsPageable(e, t, r = 0, n = 0) {
		let i = new Array();
		let o = `${C.TS.STORE_BASE_URL}events/ajaxgetpartnereventspageable/`;
		let l = {
			clan_accountid: e ? e.GetAccountID() : undefined,
			appid: t,
			offset: r,
			count: n,
			l: C.TS.LANGUAGE,
			origin: self.origin,
		};
		try {
			let e = await a.get(o, {
				params: l,
			});
			h5(() => {
				for (let t of e.data.events) {
					let e = this.GetEventLookupKey(t);
					if (!this.m_mapExistingEvents.has(e)) {
						let e = new m.b(t.clan_steamid);
						this.InsertEventModelFromClanEventData(e, t);
					}
					i.push(this.m_mapExistingEvents.get(e));
				}
			});
		} catch (e) {
			console.error(`LoadClanEventInDateRange hit error ${H(e).strErrorMsg}`);
		}
		return i;
	}
	async GetBestEventsForCurrentUser(e, t, r) {
		let n = new Array();
		let i = {
			l: C.TS.LANGUAGE,
			include_steam_blog: true,
			filter_to_played_within_days: e,
			include_only_game_updates: t,
		};
		let o = `${C.TS.STORE_BASE_URL}events/ajaxgetbesteventsforuser`;
		let l = await a.get(o, {
			params: i,
			withCredentials: true,
			cancelToken: r ? r.token : undefined,
		});
		if (!l.data?.events) {
			let e = l.data?.err_msg || "";
			throw new Error(`GetBestEventsForCurrentUser request failed (${e})`);
		}
		h5(() => {
			for (let e of l.data.events) {
				let t = this.GetEventLookupKey(e);
				if (!this.m_mapExistingEvents.has(t)) {
					let t = new m.b(e.clan_steamid);
					this.InsertEventModelFromClanEventData(t, e);
				}
				let r = {
					nAppPriority: e.nAppPriority,
					bPossibleTakeOver: e.bPossibleTakeOver,
					event: this.m_mapExistingEvents.get(t),
				};
				n.push(r);
			}
		});
		return n;
	}
	async LoadImportantEventsAroundToday(e, t, r, n, i, o) {
		let l = new Array();
		let c = new Array();
		c.push({
			priority: 0,
			appids: t,
		});
		if (r) {
			c.push({
				priority: 1,
				appids: r,
			});
		}
		if (n) {
			c.push({
				priority: 2,
				appids: n,
			});
		}
		let u = {
			count: e,
			strAppIDPriority: JSON.stringify({
				prioritized_apps: c,
			}),
			filterToEventTypes: o ? o.toString() : "",
			l: C.TS.LANGUAGE,
		};
		let d = `${C.TS.STORE_BASE_URL}events/ajaxgettodayboundedevents`;
		let A = await a.get(d, {
			params: u,
			withCredentials: true,
			cancelToken: i.token,
		});
		h5(() => {
			for (let e of A.data.events) {
				let t = this.GetEventLookupKey(e);
				if (!this.m_mapExistingEvents.has(t)) {
					let t = new m.b(e.clan_steamid);
					this.InsertEventModelFromClanEventData(t, e);
				}
				l.push(this.m_mapExistingEvents.get(t));
			}
		});
		return l;
	}
	InsertUniqueEventGID(e, t, r) {
		if (!this.m_mapClanToGIDs.has(e)) {
			this.m_mapClanToGIDs.set(e, new Array());
		}
		if (!this.m_mapAppIDToGIDs.has(t)) {
			this.m_mapAppIDToGIDs.set(t, new Array());
		}
		let n = this.m_mapClanToGIDs.get(e);
		if (!n.includes(r)) {
			n.push(r);
			this.m_mapAppIDToGIDs.get(t).push(r);
		}
	}
	ResetModel() {}
	async DeleteClanEvent(e, t) {
		if (this.m_mapExistingEvents.has(t)) {
			this.m_mapExistingEvents.get(t).deleteInProgress = true;
		}
		let r = null;
		let n = new URLSearchParams();
		n.append("sessionid", C.TS.SESSIONID);
		n.append("bDelete", "1");
		n.append("gid", t);
		r = await a.post(
			`${
				C.TS.COMMUNITY_BASE_URL
			}/gid/${e.ConvertTo64BitString()}/ajaxcreateupdatedeletepartnerevents/`,
			n,
		);
		this.RemoveGIDFromList(e, t);
		return r.data;
	}
	RemoveGIDFromList(e, t) {
		this.m_mapExistingEvents.delete(t);
		if (this.m_mapClanToGIDs.has(e.GetAccountID())) {
			let r = this.m_mapClanToGIDs.get(e.GetAccountID());
			let n = r.indexOf(t);
			if (n >= 0) {
				r.splice(n, 1);
			}
		}
	}
	FlushEventFromCache(e, t) {
		if (e && this.m_mapExistingEvents.has(e)) {
			if (!t) {
				t = this.m_mapExistingEvents.get(e).AnnouncementGID;
			}
			this.m_mapExistingEvents.delete(e);
		}
		if (
			t &&
			(this.m_mapExistingEvents.has(c.cB + t) &&
				this.m_mapExistingEvents.delete(c.cB + t),
			this.m_mapAnnouncementBodyToEvent.has(t))
		) {
			const e = this.m_mapAnnouncementBodyToEvent.get(t);
			if (this.m_mapExistingEvents.has(e)) {
				this.m_mapExistingEvents.delete(e);
			}
			this.m_mapAnnouncementBodyToEvent.delete(t);
		}
	}
	async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
		e,
		t,
		r,
		n,
		i,
		s = false,
	) {
		let o = b(s ? 0 : sf(C.TS.LANGUAGE));
		let c = {
			appid: t,
			clan_accountid: e ? e.GetAccountID() : undefined,
			announcement_gid: n,
			event_gid: r,
			lang_list: o,
			last_modified_time: i || 0,
			origin: self.origin,
			for_edit: s,
		};
		let u = null;
		let A = null;
		if (s) {
			const r = yK();
			if (r === "community") {
				A = C.TS.COMMUNITY_BASE_URL;
				A += e ? `gid/${e.ConvertTo64BitString()}` : `ogg/${t}`;
				A += "/";
			} else {
				A =
					r === "partnerweb"
						? `${C.TS.PARTNER_BASE_URL}sales/`
						: `${C.TS.STORE_BASE_URL}events/`;
			}
			A += "ajaxgetpartnereventforedit";
			u = {
				params: c,
				withCredentials: true,
			};
		} else {
			A = `${C.TS.STORE_BASE_URL}events/ajaxgetpartnerevent`;
			u = {
				params: c,
				withCredentials: false,
			};
		}
		let p = (await a.get(A, u)).data.event;
		let g = this.GetEventLookupKey(p);
		if (
			!this.m_mapExistingEvents.has(g) ||
			this.m_mapExistingEvents.get(g).rtime32_last_modified <
				p.rtime32_last_modified ||
			this.m_mapExistingEvents.get(g).rtime32_last_modified <
				p.rtime32_last_modified ||
			this.m_mapExistingEvents.get(g).rtime32_moderator_reviewed <
				p.rtime_mod_reviewed
		) {
			AssertMsg(p.clan_steamid, "ClanSteamID is missing from data we received");
			let e = new m.b(p.clan_steamid);
			this.InsertEventModelFromClanEventData(e, p);
		}
		return this.m_mapExistingEvents.get(g);
	}
	async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
		e,
		t,
		r,
		n,
		i,
		a,
	) {
		if (r && this.m_mapExistingEvents.has(r)) {
			return this.m_mapExistingEvents.get(r);
		}
		if (n) {
			if (this.m_mapExistingEvents.has(c.cB + n)) {
				return this.m_mapExistingEvents.get(c.cB + n);
			}
			if (this.m_mapAnnouncementBodyToEvent.has(n)) {
				const e = this.m_mapAnnouncementBodyToEvent.get(n);
				if (this.m_mapExistingEvents.has(e)) {
					return this.m_mapExistingEvents.get(e);
				}
			}
		}
		return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
			e,
			t,
			r,
			n,
			i,
			a,
		);
	}
	async LoadPartnerEventFromAnnoucementGID(e, t, r) {
		return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
			undefined,
			e,
			undefined,
			t,
			r,
		);
	}
	async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, r, n) {
		return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
			e,
			undefined,
			undefined,
			t,
			r,
			n,
		);
	}
	async LoadPartnerEventFromClanEventGID(e, t, r) {
		return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
			undefined,
			e,
			t,
			undefined,
			r,
		);
	}
	async LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, r, n) {
		return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
			e,
			undefined,
			t,
			undefined,
			r,
			n,
		);
	}
	async LoadPartnerEventGeneric(e, t, r, n, i) {
		return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
			e,
			t,
			r,
			n,
			i,
		);
	}
	async LoadHiddenPartnerEvent(e, t) {
		return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
			e,
			null,
			t,
			null,
			0,
			true,
		);
	}
	async LoadHiddenPartnerEventByAnnouncementGID(e, t) {
		return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
			e,
			null,
			null,
			t,
			0,
			true,
		);
	}
	async HintLoadImportantUpdates() {
		const e = tB(3600000);
		if (e != this.m_tsUpdatedAppsQueryTime) {
			this.m_tsUpdatedAppsQueryTime = e;
			const t = {
				page: 1,
				numPerPage: 500,
				includeAnnouncements: false,
			};
			const r = `${C.TS.STORE_BASE_URL}updated/ajaxgetmyappsraw`;
			const n = await a.get(r, {
				params: t,
				withCredentials: true,
			});
			if (n.data.apps && n.data.apps.length > 0) {
				h5(() => {
					const e = new Map(n.data.apps.map((e) => [e.appid, new f(e)]));
					this.m_mapUpdatedApps = e;
				});
			}
		}
		return this.m_mapUpdatedApps;
	}
	GetAppImportantUpdate(e) {
		this.HintLoadImportantUpdates().catch((e) => {
			console.log("UpdatedApps failed to load: ", e.response.data);
		});
		return this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e);
	}
	async LoadClanEventLocalizationFromAnnouncementGID(e, t) {
		let r = `${
			C.TS.COMMUNITY_BASE_URL
		}gid/${e.ConvertTo64BitString()}/announcements/ajaxgetlocalization/${t}`;
		return (await a.get(r)).data.localization;
	}
	async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, r) {
		const n = new Array();
		const i = `${C.TS.STORE_BASE_URL}events/ajaxgetbatchedpartnerevent/`;
		const o = b(sf(C.TS.LANGUAGE));
		let c = null;
		let u = null;
		if (e) {
			let t = new Array();
			e.forEach((e) => {
				if (this.m_mapExistingEvents.has(e)) {
					n.push(this.m_mapExistingEvents.get(e));
				} else {
					t.push(e);
				}
			});
			t.sort();
			c = t;
		}
		if (t) {
			let e = new Array();
			t.forEach((t) => {
				if (
					this.m_mapAnnouncementBodyToEvent.has(t) &&
					this.m_mapExistingEvents.has(this.m_mapAnnouncementBodyToEvent.get(t))
				) {
					let e = this.m_mapAnnouncementBodyToEvent.get(t);
					n.push(this.m_mapExistingEvents.get(e));
				} else {
					e.push(t);
				}
			});
			e.sort();
			u = e;
		}
		if (!c && !u) {
			return n;
		}
		const d = new Array();
		while (c?.length > 0 || u?.length > 0) {
			let e = {
				event_gids: c?.length > 0 ? c?.splice(0, 100).join(",") : undefined,
				announcement_gids:
					u?.length > 0 ? u?.splice(0, 100).join(",") : undefined,
				lang_list: o,
				origin: self.origin,
			};
			d.push(
				a.get(i, {
					params: e,
					cancelToken: r ? r.token : undefined,
				}),
			);
		}
		try {
			const e = await Promise.all([...d]);
			let t = 0;
			h5(() =>
				e.forEach((e) => {
					if (e && e.data && e.data.events) {
						for (let t of e.data.events) {
							let e = this.GetEventLookupKey(t);
							if (!this.m_mapExistingEvents.has(e)) {
								let e = new m.b(t.clan_steamid);
								this.InsertEventModelFromClanEventData(e, t);
							}
							n.push(this.m_mapExistingEvents.get(e));
						}
					} else {
						const t = H(e);
						console.error(
							`LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error ${t.strErrorMsg}`,
							t,
						);
					}
					t += 1;
				}),
			);
		} catch (e) {
			const t = H(e);
			console.error(
				`LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error ${t.strErrorMsg}`,
				t,
			);
		}
		return n;
	}
	async SavePartnerEventSaleAssets(e, t, r) {
		let n = null;
		if (!this.m_mapExistingEvents.has(t)) {
			return false;
		}
		try {
			const i = `${C.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`;
			const s = new FormData();
			s.append("sessionid", C.TS.SESSIONID);
			s.append("gidclanevent", t);
			s.append("json", JSON.stringify(r));
			const o = await a.post(i, s, {
				withCredentials: true,
			});
			if (o?.data?.success == 1) {
				const e = this.m_mapExistingEvents.get(t);
				for (const t in r) {
					if (r.hasOwnProperty(t) && r[t]) {
						e.jsondata[t] = r[t];
					}
				}
				this.GetPartnerEventChangeCallback(t).Dispatch(e);
				return true;
			}
			n = H(o);
		} catch (e) {
			n = H(e);
		}
		console.error(
			`CPartnerEventStore.SavePartnerEventSaleAssets failed: ${n?.strErrorMsg}`,
			n,
		);
		return false;
	}
}
Cg([s.sH], ZQ.prototype, "m_mapExistingEvents", undefined);
Cg([s.sH], ZQ.prototype, "m_mapAnnouncementBodyToEvent", undefined);
Cg([s.sH], ZQ.prototype, "m_mapClanToGIDs", undefined);
Cg([s.sH], ZQ.prototype, "m_mapAppIDToGIDs", undefined);
Cg([s.sH], ZQ.prototype, "m_mapUpdatedApps", undefined);
Cg([s.XI], ZQ.prototype, "Init", null);
Cg([_.oI], ZQ.prototype, "GetPartnerEventChangeCallback", null);
Cg([s.XI], ZQ.prototype, "RegisterClanEvents", null);
Cg([s.XI], ZQ.prototype, "InsertEventModelFromClanEventData", null);
Cg([s.XI], ZQ.prototype, "DeleteClanEvent", null);
Cg([s.XI], ZQ.prototype, "RemoveGIDFromList", null);
Cg([s.XI], ZQ.prototype, "FlushEventFromCache", null);
Cg([_.oI], ZQ.prototype, "SavePartnerEventSaleAssets", null);
export const O3 = new ZQ();
window.g_PartnerEventStore = O3;
