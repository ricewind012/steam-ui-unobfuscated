var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./72388.js");
var a = require(/*webcrack:missing*/ "./28987.js");
var s = require(/*webcrack:missing*/ "./89193.js");
const o = {
	bBroadcastEnabled: false,
	broadcastChatSetting: "hide",
	default_broadcast_title: "#Broadcast_default_title_dev",
	localized_broadcast_title: new Array(31),
	localized_broadcast_left_image: new Array(31),
	localized_broadcast_right_image: new Array(31),
	broadcast_whitelist: [],
};
var l = require(/*webcrack:missing*/ "./8573.js");
var c = require(/*webcrack:missing*/ "./36885.js");
var m = require("./88341.js");
var u = require("./78771.js");
var d = require("./823.js");
var A = require("./12956.js");
var p = require("./5859.js");
var g = require(/*webcrack:missing*/ "./49455.js");
import {
	CLocalizationManager,
	CLocLanguageArray,
	GetConfiguredLocale,
	Localize,
} from "../../actual_src/utils/localization.js";
var C = require(/*webcrack:missing*/ "./31958.js");
var _ = require("./98670.js");
require(/*webcrack:missing*/ "./83957.js");
require(/*webcrack:missing*/ "./63696.js");
require("./16154.js");
var f = require(/*webcrack:missing*/ "./72476.js");
var b = require("./51095.js");
require(/*webcrack:missing*/ "./41180.js");
var y = require(/*webcrack:missing*/ "./93960.js");
(0, n.Cg)(
	[y.o],
	class {
		m_eventModel;
		m_entry;
		constructor(e, t) {
			this.m_eventModel = e;
			this.m_entry = t;
		}
		GetEventStartTime() {
			if (this.m_entry.rtime_start_specific) {
				return this.m_entry.rtime_start_specific;
			} else {
				return (
					this.m_eventModel.startTime +
					this.m_entry.delta_from_event_start_seconds
				);
			}
		}
	}.prototype,
	"GetEventStartTime",
	null,
);
new Set([9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35]);
export const DU = 593110;
export const qF = 1675200;
export const GU = 39049601;
export const bv = 41316928;
export const Ro = 4397053;
export const Kd = 4;
export const mW = 20;
const T = 90000;
export var zv;
(function (e) {
	e[(e.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished";
	e[(e.k_EEventStateStaged = 1)] = "k_EEventStateStaged";
	e[(e.k_EEventStateVisible = 2)] = "k_EEventStateVisible";
	e[(e.k_EEventStatsUnlisted = 3)] = "k_EEventStatsUnlisted";
})((zv ||= {}));
export var EE;
export var GE;
export var yX;
export var IS;
var G;
var O;
(function (e) {
	e[(e.k_EStoreFilterClauseTypeOr = 0)] = "k_EStoreFilterClauseTypeOr";
	e[(e.k_EStoreFilterClauseTypeAnd = 1)] = "k_EStoreFilterClauseTypeAnd";
	e[(e.k_EStoreFilterClauseTypeStoreTag = 2)] =
		"k_EStoreFilterClauseTypeStoreTag";
	e[(e.k_EStoreFilterClauseTypeFeatureTag = 3)] =
		"k_EStoreFilterClauseTypeFeatureTag";
	e[(e.k_EStoreFilterClauseTypeLanguage = 4)] =
		"k_EStoreFilterClauseTypeLanguage";
	e[(e.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
		"k_EStoreFilterClauseTypeContentDescriptor";
	e[(e.k_EStoreFilterClauseTypePrice = 6)] = "k_EStoreFilterClauseTypePrice";
	e[(e.k_EStoreFilterClauseTypeAppType = 7)] =
		"k_EStoreFilterClauseTypeAppType";
})((EE ||= {}));
(function (e) {
	e[(e.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter";
	e[(e.k_ELanguage = 1)] = "k_ELanguage";
	e[(e.k_EContentDescriptor = 2)] = "k_EContentDescriptor";
	e[(e.k_EUserPreference = 3)] = "k_EUserPreference";
	e[(e.k_EPrice = 4)] = "k_EPrice";
	e[(e.k_EAppType = 5)] = "k_EAppType";
})((GE ||= {}));
(function (e) {
	e[(e.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems";
	e[(e.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems";
	e[(e.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems";
})((yX ||= {}));
(function (e) {
	e[(e.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName";
	e[(e.k_ESortFacetsByMatchCount = 1)] = "k_ESortFacetsByMatchCount";
	e[(e.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually";
})((IS ||= {}));
(function (e) {
	e.Steam = "Steam";
	e.Facebook = "Facebook";
	e.Twitter = "Twitter";
	e.Reddit = "Reddit";
})((G ||= {}));
(function (e) {
	e.Summary = "summary";
	e.SummaryLargeImage = "summary_large_image";
})((O ||= {}));
export const G6 = {
	capsules: [],
	events: [],
	links: [],
	localized_label: new Array(31),
	localized_label_image: new Array(31),
	default_label: "#Sale_default_label",
	section_type: "unselected_empty",
};
var L;
(function (e) {
	e[(e.k_ETaggedItems = 0)] = "k_ETaggedItems";
	e[(e.k_EContentHub = 1)] = "k_EContentHub";
})((L ||= {}));
export const DJ = {
	localized_subtitle: new Array(31),
	localized_summary: new Array(31),
	localized_title_image: new Array(31),
	localized_capsule_image: new Array(31),
	bSaleEnabled: false,
	sale_show_creator: false,
	sale_sections: [],
	sale_browsemore_text: "",
	sale_browsemore_url: "",
	sale_browsemore_color: "",
	sale_browsemore_bgcolor: "",
	localized_sale_header: new Array(31),
	localized_sale_overlay: new Array(31),
	localized_sale_product_banner: new Array(31),
	localized_sale_product_mobile_banner: new Array(31),
	localized_sale_logo: new Array(31),
	sale_font: "",
	sale_background_color: "",
	sale_header_offset: 530,
	referenced_appids: [],
	...o,
	bScheduleEnabled: false,
	scheduleEntries: [],
};
export const cB = "old_announce_";
const U = [
	"workshop",
	"patchnotes",
	"contenthub",
	"skip_megaphone",
	"curator",
	"curator_group_members",
	"curator_public",
	"audience_followers",
	"enable_steam_china",
	"disable_steam_global",
	"adult_only_content",
	"stablechannel",
	"betachannel",
	"previewchannel",
];
export class lh {
	constructor() {
		(0, s.Gn)(this);
	}
	GID = undefined;
	AnnouncementGID = undefined;
	clanSteamID;
	forumTopicGID = undefined;
	type = 1;
	appid = 0;
	name = new Map();
	description = new Map();
	timestamp_loc_updated = new Map();
	startTime = undefined;
	endTime = undefined;
	visibilityStartTime = undefined;
	visibilityEndTime = undefined;
	m_nBuildID = undefined;
	m_strBuildBranch = undefined;
	postTime = undefined;
	visibility_state = zv.k_EEventStateUnpublished;
	broadcaster = undefined;
	jsondata = DJ;
	nCommentCount = 0;
	nVotesUp = 0;
	nVotesDown = 0;
	comment_type;
	gidfeature;
	gidfeature2;
	featured_app_tagid;
	bOldAnnouncement = false;
	announcementClanSteamID = undefined;
	loadedAllLanguages = false;
	bLoaded = false;
	deleteInProgress = false;
	vecTags = new Array();
	creator_steamid;
	last_update_steamid = undefined;
	rtime32_last_modified = undefined;
	rtime32_last_solr_search_col_updated = undefined;
	rtime32_last_local_modification = undefined;
	rtime32_moderator_reviewed = undefined;
	video_preview_type = undefined;
	video_preview_id = undefined;
	has_live_stream;
	live_stream_viewer_count;
	m_overrideCurrentDay = undefined;
	BIsPartnerEvent() {
		return !this.bOldAnnouncement && Boolean(this.GID);
	}
	static FromJSON(e) {
		let t = new lh();
		let r = JSON.parse(e);
		Object.assign(t, r);
		t.name = new Map(r.name);
		t.description = new Map(r.description);
		t.vecTags = new Array(r.vecTags);
		t.clanSteamID = new l.b(r.clanSteamID);
		(0, g.w)(
			t.clanSteamID && t.clanSteamID.BIsValid(),
			"Invalid Clan SteamID: " + t.clanSteamID.ConvertTo64BitString(),
		);
		if (r.broadcaster) {
			t.broadcaster = new l.b(r.broadcaster);
			(0, g.w)(
				t.broadcaster && t.broadcaster.BIsValid(),
				"Invalid Broadcast SteamID: " + t.broadcaster.ConvertTo64BitString(),
			);
		}
		return t;
	}
	toJSON(e) {
		let t = new Object();
		Object.assign(t, this);
		t.name = Array.from(this.name);
		t.description = Array.from(this.description);
		t.tags = Array.from(this.vecTags);
		t.clanSteamID = this.clanSteamID.ConvertTo64BitString();
		if (this.broadcaster) {
			t.broadcaster = this.broadcaster.ConvertTo64BitString();
		}
		return t;
	}
	clone(e = false) {
		let t = new lh();
		t.GID = this.GID;
		t.AnnouncementGID = this.AnnouncementGID;
		t.clanSteamID = this.clanSteamID;
		t.bOldAnnouncement = this.bOldAnnouncement;
		t.nCommentCount = this.nCommentCount;
		t.nVotesUp = this.nVotesUp;
		t.nVotesDown = this.nVotesDown;
		t.forumTopicGID = this.forumTopicGID;
		t.comment_type = this.comment_type;
		t.gidfeature = this.gidfeature;
		t.gidfeature2 = this.gidfeature2;
		t.featured_app_tagid = this.featured_app_tagid;
		t.creator_steamid = this.creator_steamid;
		t.last_update_steamid = this.last_update_steamid;
		t.rtime32_last_modified = this.rtime32_last_modified;
		t.rtime32_last_solr_search_col_updated =
			this.rtime32_last_solr_search_col_updated;
		t.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed;
		t.type = this.type;
		t.appid = this.appid;
		t.name = new Map();
		this.name.forEach((e, r) => {
			t.name.set(r, e);
		});
		t.description = new Map();
		this.description.forEach((e, r) => {
			t.description.set(r, e);
		});
		t.timestamp_loc_updated = new Map();
		this.timestamp_loc_updated.forEach((e, r) => {
			t.timestamp_loc_updated.set(r, e);
		});
		t.startTime = this.startTime;
		t.endTime = this.endTime;
		t.visibilityStartTime = this.visibilityStartTime;
		t.visibilityEndTime = this.visibilityEndTime;
		t.postTime = this.postTime;
		t.visibility_state = this.visibility_state;
		t.loadedAllLanguages = this.loadedAllLanguages;
		t.bLoaded = this.bLoaded;
		t.broadcaster = this.broadcaster
			? new l.b(this.broadcaster.ConvertTo64BitString())
			: null;
		t.jsondata = JSON.parse(JSON.stringify(this.jsondata));
		t.vecTags = new Array();
		if (e) {
			t.m_nBuildID = this.m_nBuildID;
			t.m_strBuildBranch = this.m_strBuildBranch;
			this.vecTags.forEach((e) => t.vecTags.push(e));
		} else {
			this.vecTags.forEach((e) => {
				if (U.includes(e)) {
					t.vecTags.push(e);
				}
			});
		}
		return t;
	}
	GetLastReferencedSaleDayFromCapsules(e, t) {
		let r = t;
		e?.forEach((e) => {
			if (e.visibility_index !== undefined) {
				r =
					r === undefined
						? e.visibility_index
						: Math.max(r, e.visibility_index);
			}
		});
		return r;
	}
	GetLastReferencedSaleDay() {
		let e;
		for (const t of this.GetSaleSections()) {
			if (t.section_type === "tabs") {
				if (t.tabs?.length > 0) {
					for (const r of t.tabs) {
						e = this.GetLastReferencedSaleDayFromCapsules(r.capsules, e);
					}
				}
			} else {
				e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
			}
		}
		if (
			this.jsondata.sale_num_headers > 1 &&
			(e == null || e < this.jsondata.sale_num_headers)
		) {
			e = this.jsondata.sale_num_headers;
		}
		return e;
	}
	GetDayIndexFromEventStart() {
		let e = 0;
		const t = A.HD.GetTimeNowWithOverride();
		if (this.startTime !== undefined && t >= this.startTime) {
			e = Math.floor((t - this.startTime) / 86400);
		}
		if (
			this.m_overrideCurrentDay !== undefined &&
			this.m_overrideCurrentDay >= 0
		) {
			e = this.m_overrideCurrentDay;
		}
		const r = this.GetLastReferencedSaleDay() || 0;
		return Math.min(e, r);
	}
	GetNameWithFallback(e) {
		const t = CLocalizationManager.GetELanguageFallback(e);
		return this.name.get(e) || this.name.get(t);
	}
	GetGameTitle(e) {
		return p.A.Get().GetApp(this.appid)?.GetName();
	}
	BInRealmGlobal() {
		return !this.BHasTag("disable_steam_global");
	}
	BInRealmChina() {
		return this.BHasTag("enable_steam_china");
	}
	BIsLanguageValidForRealms(e) {
		return (
			(!!this.BInRealmGlobal() &&
				!!CLocalizationManager.IsELanguageValidInRealm(
					e,
					a.TU.k_ESteamRealmGlobal,
				)) ||
			(!!this.BInRealmChina() &&
				!!CLocalizationManager.IsELanguageValidInRealm(
					e,
					a.TU.k_ESteamRealmChina,
				))
		);
	}
	GetImgArray(e) {
		let t = [];
		if (e === "background" || e == "localized_title_image") {
			t = this.jsondata.localized_title_image;
		}
		if (e === "capsule") {
			t = this.jsondata.localized_capsule_image;
		} else if (e === "spotlight") {
			t = this.jsondata.localized_spotlight_image;
		} else if (e === "email_full" || e === "email_centered") {
			t = this.jsondata.email_setting
				? this.jsondata.email_setting.sections[0].localized_image
				: [];
		} else if (e === "broadcast_left") {
			t = this.jsondata.localized_broadcast_left_image;
		} else if (e === "broadcast_right") {
			t = this.jsondata.localized_broadcast_right_image;
		} else if (e === "sale_header") {
			if (this.jsondata.sale_num_headers > 1) {
				const e = Math.min(
					this.jsondata.sale_num_headers - 1,
					this.GetDayIndexFromEventStart(),
				);
				t = this.jsondata.localized_per_day_sales_header[e];
			} else {
				t = this.jsondata.localized_sale_header;
			}
		} else if (e === "sale_logo") {
			t = this.jsondata.localized_sale_logo;
		} else if (e === "sale_overlay") {
			t = this.jsondata.localized_sale_overlay;
		} else if (m.pb.includes(e)) {
			t = m.pU.GetLocalizedImageGroupForEditAsImgArray(this.clanSteamID);
		} else if (e === "product_banner") {
			t = this.jsondata.localized_sale_product_banner;
		} else if (e === "product_mobile_banner") {
			t = this.jsondata.localized_sale_product_mobile_banner;
		} else if (e === "bestofyear_banner") {
			t = this.jsondata.localized_bestofyear_banner;
		} else if (e === "bestofyear_banner_mobile") {
			t = this.jsondata.localized_bestofyear_banner_mobile;
		} else if (e === "localized_store_app_spotlight") {
			t = this.jsondata.localized_store_app_spotlight;
		} else if (e === "localized_store_app_spotlight_mobile") {
			t = this.jsondata.localized_store_app_spotlight_mobile;
		}
		return t;
	}
	GetImageURL(e, t = 0, r = m.wI.full) {
		const n = this.GetImgArray(e);
		const i = n && n.length > t && n[t] != null;
		if (i && n[t].startsWith("http")) {
			return n[t];
		} else if (i) {
			return m.i6.GenerateArtworkURLFromHashAndExtensions(
				this.clanSteamID,
				n[t],
				r,
			);
		} else {
			return undefined;
		}
	}
	GetImageHash(e, t = 0) {
		let r = this.GetImgArray(e);
		if (r && r.length > t && r[t] != null) {
			return r[t].substr(0, r[t].length - 4);
		} else {
			return null;
		}
	}
	GetImageHashAndExt(e, t = 0) {
		let r = this.GetImgArray(e);
		if (r && r.length > t && r[t] != null) {
			return r[t];
		} else {
			return null;
		}
	}
	BHasSomeImage(e) {
		let t = this.GetImgArray(e);
		return t && t.some((e) => e != null && e.length > 0);
	}
	BHasImage(e, t) {
		let r = this.GetImgArray(e);
		return r && r.length > t && r[t] != null;
	}
	BHasAnnouncementGID() {
		return (
			this.AnnouncementGID !== null &&
			this.AnnouncementGID !== undefined &&
			this.AnnouncementGID.length > 1
		);
	}
	GetAnnouncementGID() {
		return this.AnnouncementGID;
	}
	BHasForumTopicGID() {
		return (
			this.forumTopicGID !== null &&
			this.forumTopicGID !== undefined &&
			this.forumTopicGID.length > 1
		);
	}
	GetForumTopicURL() {
		if (!this.BHasForumTopicGID()) {
			return "";
		}
		if (this.appid) {
			return (
				f.TS.COMMUNITY_BASE_URL +
				"app/" +
				this.appid +
				"/eventcomments/" +
				this.forumTopicGID
			);
		}
		{
			const e = u.ac.GetClanInfoByClanAccountID(
				this.clanSteamID.GetAccountID(),
			);
			if (e && e.vanity_url) {
				return (
					f.TS.COMMUNITY_BASE_URL +
					"groups/" +
					e.vanity_url +
					"/eventcomments/" +
					this.forumTopicGID
				);
			}
		}
		return (
			f.TS.COMMUNITY_BASE_URL +
			"gid/" +
			this.clanSteamID.ConvertTo64BitString() +
			"/eventcomments/" +
			this.forumTopicGID
		);
	}
	BIsEventInFuture() {
		return A.HD.GetTimeNowWithOverride() < this.startTime;
	}
	BHasEventEnded() {
		return this.endTime < A.HD.GetTimeNowWithOverride();
	}
	UpdateVoteCount(e, t) {
		if (e == "up") {
			this.nVotesUp = (0, C.OQ)(this.nVotesUp + t, 0, Number.MAX_SAFE_INTEGER);
		} else if (e == "down") {
			this.nVotesDown = (0, C.OQ)(
				this.nVotesDown + t,
				0,
				Number.MAX_SAFE_INTEGER,
			);
		}
	}
	GetImageFromBeginningOfDescription(e, t) {
		let r = this.GetDescriptionWithFallback(e);
		if (r) {
			let e = r.indexOf("[img]");
			if (e !== -1 && e < t) {
				e += 5;
				let t = r.indexOf("[/img]", e);
				if (t != -1) {
					let n = r.substring(e, t).trim();
					if (n.length != 0) {
						return (0, c.v6)(n);
					}
				}
			}
		}
		return null;
	}
	GetImageURLWithFallback(e, t, r = m.wI.full) {
		const n = this.GetImageURL(e, t, r);
		if (n && n.trim().length > 0) {
			return n;
		}
		const i = CLocalizationManager.GetELanguageFallback(t);
		if (t != i) {
			const t = this.GetImageURL(e, i, r);
			if (t && t.trim().length > 0) {
				return t;
			}
		}
		const a = u.ac.GetClanInfoByClanAccountID(this.clanSteamID.GetAccountID());
		if (e == "capsule") {
			let e = this.GetImageFromBeginningOfDescription(t, Number.MAX_VALUE);
			if (e) {
				return e;
			}
			let r = this.appid;
			if (!r && a && ((a.is_creator_home && !a.is_ogg) || a.is_curator)) {
				if (!this.jsondata?.referenced_appids?.length) {
					return a.avatar_full_url;
				}
				r = this.jsondata.referenced_appids[0];
			}
			const n = p.A.Get().GetApp(r);
			if (n) {
				return n.GetAssets().GetMainCapsuleURL();
			} else {
				return f.TS.STORE_ICON_BASE_URL + r + "/header.jpg";
			}
		}
		if (
			e == "background" &&
			a &&
			((a.is_creator_home && !a.is_ogg) || a.is_curator)
		) {
			return a.creator_page_bg_url;
		} else {
			return this.GetFallbackArtworkScreenshot();
		}
	}
	GetFallbackArtworkScreenshot() {
		if (this.appid) {
			p.A.Get().QueueAppRequest(this.appid, {
				include_screenshots: true,
			});
			const e = p.A.Get().GetApp(this.appid);
			let t = Number(
				this.bOldAnnouncement
					? this.AnnouncementGID
					: this.GID == null
						? 0
						: this.GID,
			);
			if (e?.GetOnlyAllAgesSafeScreenshots().length > 1) {
				t %= e.GetOnlyAllAgesSafeScreenshots().length;
				return e.GetOnlyAllAgesSafeScreenshots()[t];
			} else if (e?.GetBothAllAgesSafeAndMatureScreenshots()?.length > 0) {
				t %= e.GetBothAllAgesSafeAndMatureScreenshots().length;
				return e.GetBothAllAgesSafeAndMatureScreenshots()[t];
			} else {
				return "";
			}
		}
		if (this.clanSteamID) {
			const e = u.ac.GetClanInfoByClanAccountID(
				this.clanSteamID.GetAccountID(),
			);
			if (e && ((e.is_creator_home && !e.is_ogg) || e.is_curator)) {
				return e.avatar_full_url;
			}
		}
		return "";
	}
	BImageNeedScreenshotFallback(e, t) {
		let r = this.GetImageURL(e, t);
		if (!r || r.length == 0) {
			const n = CLocalizationManager.GetELanguageFallback(t);
			if (t != n) {
				r = this.GetImageURL(e, n);
			}
		}
		return !r || r.length == 0;
	}
	GetImageForSizeAsArrayWithFallback(e, t, r, n) {
		let i = new Array();
		if (!this.BImageNeedScreenshotFallback(e, t)) {
			i.push(this.GetImageURLWithFallback(e, t, r));
			if (r != m.wI.full) {
				i.push(this.GetImageURLWithFallback(e, t, m.wI.full));
			}
		}
		const a = this.GetFallbackArtworkScreenshot();
		if (a && !n) {
			i.push(a);
		}
		return i;
	}
	GetDescriptionWithFallback(e) {
		const t = CLocalizationManager.GetELanguageFallback(e);
		return this.description.get(e) || this.description.get(t);
	}
	BIsImageSafeForAllAges(e, t) {
		const r = u.ac.GetClanInfoByClanAccountID(this.clanSteamID.GetAccountID());
		const n = CLocalizationManager.GetELanguageFallback(t);
		return (
			this.GetImageURL(e, t) != null ||
			(t != n && this.GetImageURL(e, n) != null) ||
			(this.appid && p.A.Get().GetApp(this.appid)?.BHasAgeSafeScreenshots()) ||
			(!this.appid && r && ((r.is_creator_home && !r.is_ogg) || r.is_curator))
		);
	}
	BIsVisibleEvent() {
		let e = Math.floor(A.HD.GetTimeNowWithOverride());
		return (
			this.visibility_state == zv.k_EEventStatsUnlisted ||
			(this.visibility_state == zv.k_EEventStateVisible &&
				e > this.visibilityStartTime &&
				(this.visibilityEndTime < 10 || e < this.visibilityEndTime))
		);
	}
	BIsStagedEvent() {
		return this.visibility_state == zv.k_EEventStateStaged;
	}
	BIsUnlistedEvent() {
		return this.visibility_state == zv.k_EEventStatsUnlisted;
	}
	GetStartTimeAndDateUnixSeconds() {
		return this.startTime;
	}
	GetEndTimeAndDateUnixSeconds() {
		return this.endTime;
	}
	GetPostTimeAndDateUnixSeconds() {
		return this.postTime;
	}
	GetVisibilityStartTimeAndDateUnixSeconds() {
		return this.visibilityStartTime;
	}
	BIsEventActionEnabled() {
		return (
			!!this.jsondata.action_end_time &&
			(this.jsondata.action_end_time > A.HD.GetTimeNowWithOverride() ||
				(this.jsondata.action_end_time == 1575396000 &&
					A.HD.GetTimeNowWithOverride() < 1606845600))
		);
	}
	BHasSubTitle(e) {
		if (
			!this.jsondata ||
			!this.jsondata.localized_subtitle ||
			e >= this.jsondata.localized_subtitle.length
		) {
			return false;
		}
		let t = this.jsondata.localized_subtitle[e];
		return t != null && t != "";
	}
	GetSubTitle(e) {
		if (
			!this.jsondata ||
			!this.jsondata.localized_subtitle ||
			e >= this.jsondata.localized_subtitle.length
		) {
			return "";
		}
		let t = this.jsondata.localized_subtitle[e];
		return t || "";
	}
	GetSubTitleWithLanguageFallback(e) {
		if (this.jsondata) {
			return CLocLanguageArray.GetWithFallback(
				this.jsondata.localized_subtitle,
				e,
			);
		} else {
			return "";
		}
	}
	GetSubTitleWithSummaryFallback(e) {
		return (
			CLocLanguageArray.GetWithFallback(this.jsondata?.localized_subtitle, e) ||
			lh.GenerateSummaryFromText(this.GetDescriptionWithFallback(e))
		);
	}
	GetSummaryWithFallback(e, t) {
		return (
			CLocLanguageArray.GetWithFallback(this.jsondata?.localized_summary, e) ||
			lh.GenerateSummaryFromText(this.GetDescriptionWithFallback(e), t)
		);
	}
	GetSummary(e) {
		return CLocLanguageArray.Get(this.jsondata?.localized_summary, e);
	}
	BHasSummary(e) {
		return Boolean(this.GetSummary(e));
	}
	static GenerateSummaryFromText(e, t) {
		if (e && e.trim().length != 0) {
			e = (0, i.Yj)(e, [
				"img",
				"h1",
				"h2",
				"h3",
				"spoiler",
				"table",
				"previewyoutube",
				"looping_media",
				"roomeffect",
				"sticker",
			]);
			e = (0, i.zV)(e);
			e = (0, b.aX)(e);
			return (0, b.bC)(e, t || 180);
		} else {
			return "";
		}
	}
	BHasTag(e) {
		return this.vecTags.indexOf(e) != -1;
	}
	BHasTagStartingWith(e) {
		return this.vecTags.some((t) => t.startsWith(e));
	}
	BIsOGGEvent() {
		return Boolean(this.appid) && this.appid > 0;
	}
	BShowLibrarySpotlight() {
		return Boolean(this.jsondata.library_spotlight);
	}
	BShowLibrarySpotlightText() {
		return Boolean(this.jsondata.library_spotlight_text);
	}
	BHasBroadcastEnabled() {
		return this.jsondata.bBroadcastEnabled;
	}
	BEventCanShowBroadcastWidget(e) {
		if (this.jsondata.bSaleEnabled) {
			return this.BHasBroadcastEnabled();
		}
		const t = A.HD.GetTimeNowWithOverride();
		const r = this.endTime ? this.endTime : t + 3600;
		return (
			this.BHasBroadcastEnabled() &&
			this.jsondata.broadcast_whitelist &&
			this.jsondata.broadcast_whitelist.length > 0 &&
			(e || (this.startTime - 600 <= t && t < r))
		);
	}
	BHasBroadcastForceBanner() {
		return this.jsondata.broadcast_force_banner;
	}
	BSaleShowBroadcastAtTopOfPage() {
		return (
			!this.jsondata.sale_sections ||
			!this.jsondata.sale_sections.some((e) => e.section_type == "broadcast")
		);
	}
	BSaleShowCuratorRecommendationAtBottomOfPage() {
		return (
			!this.jsondata.sale_sections ||
			!this.jsondata.sale_sections.some(
				(e) => e.section_type == "curator_recommendation",
			)
		);
	}
	GetBroadcastChatVisibility() {
		return this.jsondata.broadcastChatSetting || "hide";
	}
	GetBroadcastTitle(e) {
		return (
			CLocLanguageArray.GetWithFallback(
				this.jsondata.localized_broadcast_title,
				e,
			) ||
			Localize(
				this.jsondata.default_broadcast_title ?? "#Broadcast_default_title_dev",
			)
		);
	}
	GetBroadcastWhitelist() {
		return this.jsondata.broadcast_whitelist;
	}
	GetBroadcastWhitelistAsSteamIDs() {
		return this.jsondata.broadcast_whitelist.map((e) =>
			l.b.InitFromAccountID(e).ConvertTo64BitString(),
		);
	}
	BIsBroadcastAccountIDWhiteListed(e) {
		return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
	}
	BHasSaleEnabled() {
		return this.jsondata.bSaleEnabled;
	}
	BHasSaleVanity() {
		return this.jsondata.bSaleEnabled && Boolean(this.jsondata.sale_vanity_id);
	}
	GetSaleVanity() {
		return this.jsondata.sale_vanity_id;
	}
	GetSaleURL() {
		if (!this.jsondata.bSaleEnabled) {
			return null;
		}
		if (!Boolean(this.jsondata.sale_vanity_id)) {
			return (
				f.TS.STORE_BASE_URL +
				"newshub/" +
				(this.appid
					? "app/" + this.appid
					: "group/" + this.clanSteamID.GetAccountID()) +
				"/view/" +
				this.GID
			);
		}
		if (this.BUsesContentHubForItemSource()) {
			const e = this.jsondata.source_content_hub;
			if (e) {
				if (typeof e == "string") {
					return f.TS.STORE_BASE_URL + "category/" + e;
				} else if (e.type == "category") {
					return f.TS.STORE_BASE_URL + "category/" + e.category;
				} else if (e.type == "tags") {
					return (
						f.TS.STORE_BASE_URL +
						"tags/" +
						(GetConfiguredLocale() || "en") +
						"/" +
						e.tagid
					);
				} else if (e.type == "freetoplay") {
					return f.TS.STORE_BASE_URL + "genre/Free%20to%20Play/";
				} else if (e.type == "earlyaccess") {
					return f.TS.STORE_BASE_URL + "genre/Early%20Access/";
				} else {
					return f.TS.STATS_BASE_URL + e.type;
				}
			} else {
				return f.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
			}
		}
		if (!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath) {
			if (d.pF.BHasCreatorHomeLoaded(this.clanSteamID)) {
				return (
					d.pF.GetCreatorHome(this.clanSteamID).GetCreatorHomeURL("developer") +
					"sale/" +
					this.jsondata.sale_vanity_id
				);
			}
			return (
				f.TS.STORE_BASE_URL +
				"curator/" +
				this.clanSteamID.GetAccountID() +
				"/sale/" +
				this.jsondata.sale_vanity_id
			);
		}
		return f.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
	}
	BHasEmailEnabled() {
		return this.jsondata.email_setting && this.jsondata.email_setting.bEnable;
	}
	GetSaleSections() {
		return this.jsondata.sale_sections;
	}
	GenerateDynamicSaleSections(e, t, r, n) {
		const i = [];
		const a = {
			section_type: "unselected_empty",
			capsules: undefined,
			events: undefined,
			links: undefined,
			localized_label: undefined,
			default_label: undefined,
		};
		if (e) {
			i.push({
				...a,
				section_type: "footer_self_creator_home",
				unique_id: 90010,
				curator_clan_id: this.clanSteamID.GetAccountID(),
			});
		}
		if (r) {
			i.push({
				...a,
				section_type: "footer_browse_more",
				unique_id: 90012,
			});
		}
		if (n) {
			i.push({
				...a,
				section_type: "footer_default_social_share",
				unique_id: 90013,
			});
		}
		return i;
	}
	GetSaleSectionIncludingFooterSections() {
		const e = this.jsondata?.sale_show_creator;
		const t = this.BSaleShowCuratorRecommendationAtBottomOfPage();
		const r = this.jsondata.sale_browse_more_button;
		const n =
			this.GetSaleSectionsByType("social_share").length == 0 &&
			!this.jsondata.sale_default_social_media_disabled;
		if (e || t || r || n) {
			return [
				...this.GetSaleSections(),
				...this.GenerateDynamicSaleSections(e, t, r, n),
			];
		} else {
			return this.GetSaleSections();
		}
	}
	GetSaleSectionByID(e) {
		if (e > T) {
			return this.GenerateDynamicSaleSections(true, true, true, true).find(
				(t) => t.unique_id == e,
			);
		}
		return this.jsondata.sale_sections?.find((t) => t.unique_id == e);
	}
	GetSaleSectionCount() {
		return this.jsondata.sale_sections.length;
	}
	GetSaleSectionsByType(e) {
		return this.jsondata.sale_sections?.filter((t) => t.section_type == e);
	}
	GetSaleSectionFirstMatchByType(e) {
		for (let t = 0; t < this.jsondata.sale_sections.length; ++t) {
			if (this.jsondata.sale_sections[t].section_type === e) {
				return this.jsondata.sale_sections[t];
			}
		}
	}
	static AccumulateCapsuleListIDs(e, t, r, n) {
		if (e) {
			e.forEach((e) => {
				if (e) {
					if (t.has(e.type)) {
						if (!n || !!n(e.id)) {
							r.add(e.id);
						}
					}
				}
			});
		}
	}
	GetSaleItemOfType(e, t) {
		if (!this.jsondata.sale_sections) {
			return new Set();
		}
		const r = new Set(e);
		const n = new Set();
		(0, g.w)(
			!this.jsondata.bOptimizedForSize,
			"Cannot find all items in optimized json",
		);
		if (this.jsondata.bOptimizedForSize && f.TS.WEB_UNIVERSE == "dev") {
			throw new Error("GetSaleOfItemType called on a truncated jsondata.");
		}
		this.jsondata.tagged_items?.forEach((e) => {
			lh.AccumulateCapsuleListIDs([e.capsule], r, n, t);
		});
		this.jsondata.sale_sections.forEach((e) => {
			if (
				(i = e.section_type) === "items" ||
				i === "trailercarousel" ||
				i == "crosspromotesalepage"
			) {
				lh.AccumulateCapsuleListIDs(e.capsules, r, n, t);
			} else if (e.section_type === "tabs" && e.tabs) {
				for (const i of e.tabs) {
					lh.AccumulateCapsuleListIDs(i.capsules, r, n, t);
				}
			}
			var i;
		});
		return n;
	}
	GetSaleItemCountOfType(e, t) {
		return this.GetSaleItemOfType(e, t).size;
	}
	GetSaleFeaturedAppsCount(e) {
		return this.GetSaleItemCountOfType(
			["game", "application", "software", "dlc", "music"],
			e,
		);
	}
	GetSaleFeaturedAppsAndDemosCount(e) {
		return this.GetSaleItemCountOfType(
			["game", "application", "software", "dlc", "music", "demo"],
			e,
		);
	}
	GetSaleFeaturedBundlesCount(e) {
		return this.GetSaleItemCountOfType(["bundle"], e);
	}
	GetSaleFeaturedPackagesCount(e) {
		return this.GetSaleItemCountOfType(["sub"], e);
	}
	GetSaleFeaturedApps(e) {
		return this.GetSaleItemOfType(
			["game", "application", "software", "dlc", "music"],
			e,
		);
	}
	GetSaleFeaturedAppsAndDemos(e) {
		return this.GetSaleItemOfType(
			["game", "application", "software", "dlc", "music", "demo"],
			e,
		);
	}
	GetSaleFeaturedBundles(e) {
		return this.GetSaleItemOfType(["bundle"], e);
	}
	GetSaleFeaturedPackages(e) {
		return this.GetSaleItemOfType(["sub"], e);
	}
	GetTaggedItems() {
		return this.jsondata.tagged_items || [];
	}
	BHasScheduleEnabled() {
		return this.jsondata.bScheduleEnabled;
	}
	GetEventType() {
		return this.type;
	}
	GetEventTypeAsString() {
		return (0, _.rG)(this.type);
	}
	GetCategoryAsString() {
		if (this.BHasTag("steam_award_nomination_request")) {
			return Localize("#PartnerEvent_SteamAwardNominations");
		} else if (this.BHasTag("steam_award_vote_request")) {
			return Localize("#PartnerEvent_SteamAwardVoteRequest");
		} else if (this.BHasTag("steam_game_festival_artist_statement")) {
			return Localize("#PartnerEvent_SteamGameFestival_ArtistState");
		} else if (this.BHasTag("steam_game_festival_office_hour")) {
			return Localize("#PartnerEvent_SteamGameFestival_OfficeHour");
		} else if (
			this.BHasTag("steam_game_festival_broadcast") ||
			(this.BHasTagStartingWith("sale_nextfest_") && this.type == 11)
		) {
			return Localize("#PartnerEvent_SteamGameFestival_Broadcast");
		} else {
			return this.GetEventTypeAsString();
		}
	}
	GetAllTags() {
		return this.vecTags;
	}
	BMatchesAllTags(e) {
		let t = true;
		e?.forEach((e) => {
			if (!this.vecTags.includes(e)) {
				t = false;
			}
		});
		return t;
	}
	BAllowedSteamStoreSpotlight() {
		return Boolean(this.jsondata.store_spotlight);
	}
	BHasLibaryHomeSpotlight() {
		return Boolean(this.jsondata.library_home_spotlight);
	}
	BHasSaleProductBanners() {
		return (
			this.jsondata.bSaleEnabled &&
			(this.BHasSomeImage("product_banner") ||
				this.BHasSomeImage("product_banner_override"))
		);
	}
	GetSteamAwardCategory() {
		return this.jsondata.steam_award_category_suggestion;
	}
	GetSteamAwardNomineeCategories() {
		return this.jsondata.steam_award_category_voteids;
	}
	BIsLockedToGameOwners() {
		return Boolean(
			this.jsondata.ownership_requirement_info?.bLockedToAppOwners,
		);
	}
	GetRequiredAppIDs() {
		if (this.jsondata.ownership_requirement_info) {
			return this.jsondata.ownership_requirement_info.rgRequiredAppIDs;
		} else {
			return [];
		}
	}
	GetRequiredPackageIDs() {
		if (this.jsondata.ownership_requirement_info) {
			return this.jsondata.ownership_requirement_info.rgRequiredPackageIDs;
		} else {
			return [];
		}
	}
	BUseSubscriptionLayout() {
		return !!this.jsondata.sale_use_subscription_layout;
	}
	BIsLockedToPartnerAppRights() {
		return Boolean(
			this.jsondata.app_right_requirement_info?.bLockedToPartnerAppRights,
		);
	}
	GetRequiredPartnerAppRights() {
		return this.jsondata.app_right_requirement_info;
	}
	GetValveAccessLog() {
		if (Array.isArray(this.jsondata.valve_access_log)) {
			return this.jsondata.valve_access_log;
		} else {
			return [];
		}
	}
	BUsesContentHubForItemSource() {
		return (
			this.jsondata.item_source_type === L.k_EContentHub &&
			Boolean(this.jsondata.source_content_hub)
		);
	}
	GetContentHubType() {
		if (this.BUsesContentHubForItemSource()) {
			if (this.jsondata.source_content_hub == null) {
				return "games";
			} else if (typeof this.jsondata.source_content_hub == "string") {
				return "category";
			} else {
				return this.jsondata.source_content_hub.type;
			}
		} else {
			return undefined;
		}
	}
	GetContentHubCategory() {
		if (this.jsondata.source_content_hub == null) {
			return undefined;
		} else if (typeof this.jsondata.source_content_hub == "string") {
			return this.jsondata.source_content_hub;
		} else {
			return this.jsondata.source_content_hub.category;
		}
	}
	GetContentHubTag() {
		if (this.jsondata.source_content_hub == null) {
			return undefined;
		} else if (typeof this.jsondata.source_content_hub == "string") {
			return 0;
		} else {
			return this.jsondata.source_content_hub.tagid;
		}
	}
	GetContentHub() {
		if (typeof this.jsondata.source_content_hub == "string") {
			return {
				type: "category",
				category: this.jsondata.source_content_hub,
			};
		} else {
			return this.jsondata.source_content_hub;
		}
	}
	BContentHubDiscountedOnly() {
		return this.jsondata.content_hub_discounted_only;
	}
	BIsBackgroundImageGroupingEnabled() {
		return this.jsondata.sale_background_img_groups?.enabled;
	}
	GetSalePageGroupDefinition() {
		return this.jsondata.sale_background_img_groups;
	}
	GetSalePageBackgroundImageGroupCount() {
		if (this.jsondata.sale_background_img_groups?.enabled) {
			return this.jsondata.sale_background_img_groups.groups.length;
		} else {
			return 0;
		}
	}
	GetAllSalePageGroups() {
		if (this.jsondata.sale_background_img_groups?.enabled) {
			return this.jsondata.sale_background_img_groups.groups;
		} else {
			return [];
		}
	}
	GetSalePageBackgroundGroup(e) {
		if (this.jsondata.sale_background_img_groups?.enabled) {
			return this.jsondata.sale_background_img_groups.groups[e];
		} else {
			return null;
		}
	}
	GetIncludedRealmList() {
		const e = new Array();
		if (this.BInRealmGlobal()) {
			e.push(a.TU.k_ESteamRealmGlobal);
		}
		if (this.BInRealmChina()) {
			e.push(a.TU.k_ESteamRealmChina);
		}
		(0, g.w)(
			e.length > 0,
			`Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
		);
		return e;
	}
	BIsValidForRealm(e) {
		return this.GetIncludedRealmList().includes(e);
	}
}
(0, n.Cg)([s.sH], lh.prototype, "GID", undefined);
(0, n.Cg)([s.sH], lh.prototype, "AnnouncementGID", undefined);
(0, n.Cg)([s.sH], lh.prototype, "forumTopicGID", undefined);
(0, n.Cg)([s.sH], lh.prototype, "type", undefined);
(0, n.Cg)([s.sH], lh.prototype, "appid", undefined);
(0, n.Cg)([s.sH], lh.prototype, "name", undefined);
(0, n.Cg)([s.sH], lh.prototype, "description", undefined);
(0, n.Cg)([s.sH], lh.prototype, "timestamp_loc_updated", undefined);
(0, n.Cg)([s.sH], lh.prototype, "startTime", undefined);
(0, n.Cg)([s.sH], lh.prototype, "endTime", undefined);
(0, n.Cg)([s.sH], lh.prototype, "visibilityStartTime", undefined);
(0, n.Cg)([s.sH], lh.prototype, "visibilityEndTime", undefined);
(0, n.Cg)([s.sH], lh.prototype, "m_nBuildID", undefined);
(0, n.Cg)([s.sH], lh.prototype, "m_strBuildBranch", undefined);
(0, n.Cg)([s.sH], lh.prototype, "postTime", undefined);
(0, n.Cg)([s.sH], lh.prototype, "visibility_state", undefined);
(0, n.Cg)([s.sH], lh.prototype, "broadcaster", undefined);
(0, n.Cg)([s.sH], lh.prototype, "jsondata", undefined);
(0, n.Cg)([s.sH], lh.prototype, "nCommentCount", undefined);
(0, n.Cg)([s.sH], lh.prototype, "nVotesUp", undefined);
(0, n.Cg)([s.sH], lh.prototype, "nVotesDown", undefined);
(0, n.Cg)([s.sH], lh.prototype, "bOldAnnouncement", undefined);
(0, n.Cg)([s.sH], lh.prototype, "announcementClanSteamID", undefined);
(0, n.Cg)([s.sH], lh.prototype, "loadedAllLanguages", undefined);
(0, n.Cg)([s.sH], lh.prototype, "bLoaded", undefined);
(0, n.Cg)([s.sH], lh.prototype, "deleteInProgress", undefined);
(0, n.Cg)([s.sH], lh.prototype, "vecTags", undefined);
(0, n.Cg)([s.sH], lh.prototype, "last_update_steamid", undefined);
(0, n.Cg)([s.sH], lh.prototype, "rtime32_last_modified", undefined);
(0, n.Cg)(
	[s.sH],
	lh.prototype,
	"rtime32_last_solr_search_col_updated",
	undefined,
);
(0, n.Cg)([s.sH], lh.prototype, "rtime32_last_local_modification", undefined);
(0, n.Cg)([s.sH], lh.prototype, "rtime32_moderator_reviewed", undefined);
(0, n.Cg)([s.sH], lh.prototype, "video_preview_type", undefined);
(0, n.Cg)([s.sH], lh.prototype, "video_preview_id", undefined);
(0, n.Cg)([s.sH], lh.prototype, "m_overrideCurrentDay", undefined);
