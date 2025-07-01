import {
	LocalizeCalendarYear,
	Localize,
	LocalizeCalendarTimeLessGranular,
	LocalizationManager,
} from "../../actual_src/utils/localization.js";

import n, { Cg } from "./34629.js";
import * as i from "./46422.js";
import * as a from "./37976.js";
import s, { Gn, EW } from "./89193.js";
import o, { q3 } from "./90095.js";
import l, { ak } from "./44846.js";
import * as c from "./36934.js";
import * as m from "./74995.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import * as A from "./83599.js";
import * as p from "./52451.js";
import * as g from "./5640.js";
import * as h from "./34792.js";
import * as C from "./87935.js";
import * as _ from "./96000.js";
import { YI } from "./95877.js";
import * as b from "./91789.js";
const y = new A.wd("AppStore");
const S = {
	appid: {},
	display_name: {},
	visible_in_game_list: {},
	subscribed_to: {},
	sort_as: {
		fnCustomSetter: (e, t) => e.SetSortAs(t),
		fnCustomComparator: (e, t) => e.BIsSortAsEqual(t),
	},
	app_type: {},
	mru_index: {
		observable: true,
	},
	rt_recent_activity_time: {
		observable: true,
	},
	minutes_playtime_forever: {
		observable: true,
	},
	minutes_playtime_last_two_weeks: {
		observable: true,
	},
	rt_last_time_played: {
		fnCustomSetter: (e, t) => e.SetLastTimePlayed(t),
		fnCustomComparator: (e, t) => e.BIsLastTimePlayedEqual(t),
		observable: true,
	},
	store_tag: {
		fnCustomSetter: (e, t) => e.SetStoreTags(t),
		fnCustomComparator: (e, t) => e.BAreStoreTagsEqual(t),
	},
	store_category: {
		fnCustomSetter: (e, t) => e.SetStoreCategories(t),
		fnCustomComparator: (e, t) => e.BAreCategoriesEqual(t),
	},
	rt_original_release_date: {},
	rt_steam_release_date: {},
	icon_hash: {},
	xbox_controller_support: {},
	vr_supported: {},
	metacritic_score: {},
	size_on_disk: {},
	third_party_mod: {},
	icon_data: {},
	icon_data_format: {},
	gameid: {
		fnCustomSetter: (e, t) => e.SetGameID(t),
		fnCustomComparator: (e, t) => e.BIsGameIDEqual(t),
	},
	library_capsule_filename: {},
	per_client_data: {
		fnCustomSetter: (e, t) => e.SetPerClientData(t),
		fnCustomComparator: (e, t) => e.BIsPerClientDataEqual(t),
		observable: true,
	},
	most_available_clientid: {
		observable: true,
	},
	selected_clientid: {
		observable: true,
	},
	rt_store_asset_mtime: {},
	rt_custom_image_mtime: {},
	optional_parent_app_id: {},
	owner_account_id: {},
	review_score_with_bombs: {
		default: 0,
	},
	review_percentage_with_bombs: {
		default: 0,
	},
	review_score_without_bombs: {
		default: 0,
	},
	review_percentage_without_bombs: {
		default: 0,
	},
	library_id: {},
	vr_only: {},
	mastersub_appid: {},
	mastersub_includedwith_logo: {},
	site_license_site_name: {},
	shortcut_override_appid: {},
	rt_last_time_locally_played: {
		observable: true,
	},
	rt_purchased_time: {},
	header_filename: {},
	local_cache_version: {},
	number_of_copies: {
		default: 1,
	},
	steam_hw_compat_category_packed: {
		default: 0,
	},
	album_cover_hash: {},
};
export function AG(e) {
	return e
		.toLowerCase()
		.replace(/[^\p{L}\p{N}\p{Z}]/gu, "")
		.replace(/^(the |a |an )/, "")
		.trim();
}
class B {
	LOG_CHANGE = new A.wd("AppOverviewImpl", () => String(this.appid)).Debug;
	constructor() {}
	BHasObservables() {
		return false;
	}
	appid;
	shortcut_override_appid;
	display_name;
	sort_as;
	app_type;
	mru_index = undefined;
	rt_recent_activity_time = undefined;
	minutes_playtime_forever = undefined;
	minutes_playtime_last_two_weeks = undefined;
	rt_last_time_played = undefined;
	rt_last_time_played_or_installed;
	rt_last_time_locally_played = undefined;
	rt_purchased_time;
	visible_in_game_list;
	subscribed_to;
	optional_parent_app_id;
	m_setStoreTags;
	get store_tag() {
		return Array.from(this.m_setStoreTags);
	}
	m_setStoreCategories;
	get store_category() {
		return Array.from(this.m_setStoreCategories);
	}
	rt_original_release_date;
	rt_steam_release_date;
	icon_hash;
	xbox_controller_support;
	get ps4_controller_support() {
		if (this.BHasStoreCategory(56)) {
			return 2;
		} else if (this.BHasStoreCategory(55)) {
			return 1;
		} else {
			return 0;
		}
	}
	get ps5_controller_support() {
		if (this.BHasStoreCategory(58)) {
			return 2;
		} else if (this.BHasStoreCategory(57)) {
			return 1;
		} else {
			return 0;
		}
	}
	get gamepad_preferred() {
		return this.BHasStoreCategory(60);
	}
	vr_supported;
	vr_only;
	metacritic_score;
	size_on_disk;
	library_id;
	third_party_mod;
	icon_data;
	icon_data_format;
	mastersub_appid;
	mastersub_includedwith_logo;
	m_gameid;
	m_ulGameId;
	get gameid() {
		return this.GetGameID();
	}
	library_capsule_filename;
	header_filename;
	album_cover_hash;
	per_client_data = undefined;
	most_available_clientid = undefined;
	selected_clientid = undefined;
	rt_store_asset_mtime;
	rt_custom_image_mtime;
	local_cache_version;
	canonicalAppType;
	BHasStoreCategory(e) {
		return this.m_setStoreCategories.has(e);
	}
	BHasStoreTag(e) {
		return this.m_setStoreTags.has(e);
	}
	GetStoreTags() {
		return this.m_setStoreTags;
	}
	BIsNewToLibrary() {
		const e = Date.now() / 1000 - 2592000;
		return (
			!this.rt_last_time_played_or_installed &&
			this.rt_recent_activity_time &&
			this.rt_recent_activity_time > e
		);
	}
	GetCanonicalReleaseDate() {
		if (this.rt_original_release_date) {
			return this.rt_original_release_date;
		} else {
			return this.rt_steam_release_date;
		}
	}
	__cachedReleaseYearString;
	GetCanonicalReleaseYear() {
		if (this.__cachedReleaseYearString) {
			return this.__cachedReleaseYearString;
		}
		{
			let e = this.GetCanonicalReleaseDate();
			this.__cachedReleaseYearString = e
				? LocalizeCalendarYear(new Date(e * 1000))
				: Localize("#GridSection_UnknownReleaseDate");
			return this.__cachedReleaseYearString;
		}
	}
	__cachedLastPlayedSection;
	__cachedLastPlayedTime;
	GetLastPlayedSectionName() {
		const e = this.GetLastTimePlayed();
		if (!this.__cachedLastPlayedSection || this.__cachedLastPlayedTime != e) {
			this.__cachedLastPlayedSection = this.ComputeLastPlayedSectionName(e);
			this.__cachedLastPlayedTime = e;
		}
		return this.__cachedLastPlayedSection;
	}
	BIsOwned() {
		return this.visible_in_game_list && this.subscribed_to;
	}
	BIsBorrowed() {
		return this.BIsOwned() && !!this.owner_account_id;
	}
	BIsOwnedByAnotherUser() {
		return this.visible_in_game_list && !!this.owner_account_id;
	}
	BIsUnreleased() {
		return (
			this.display_status == 13 ||
			this.display_status == 10 ||
			this.display_status == 10 ||
			this.display_status == 16
		);
	}
	GetLastTimePlayed() {
		if (!this.rt_last_time_played || this.rt_last_time_played < 31536000) {
			return 0;
		} else {
			return this.rt_last_time_played;
		}
	}
	BIsModOrShortcut() {
		return this.third_party_mod || this.app_type == 1073741824;
	}
	BIsShortcut() {
		return this.app_type == 1073741824;
	}
	BIsApplicationOrTool() {
		return this.app_type == 4 || this.app_type == 2;
	}
	BIsMusicAlbum() {
		return this.app_type == 8192;
	}
	BIsHardware() {
		return this.app_type == 512;
	}
	BIsDemo() {
		return this.app_type == 8;
	}
	GetPrimaryAppID() {
		if (this.BIsModOrShortcut()) {
			return this.m_ulGameId.low & 4095;
		} else {
			return this.appid;
		}
	}
	BIsAppInBlockList() {
		return g.jR.BIsAppInBlockList(this.GetPrimaryAppID());
	}
	BIsAppBlocked() {
		return g.jR.BIsAppBlocked(this.GetPrimaryAppID());
	}
	GetGameID() {
		if (this.BIsModOrShortcut()) {
			return this.m_gameid;
		} else {
			return this.appid.toString();
		}
	}
	BIsSelectedClientLocal() {
		return !this.selected_clientid || this.selected_clientid == "0";
	}
	BIsPerClientDataLocal(e) {
		return e && (!e.clientid || e.clientid == "0");
	}
	BHasCustomImages() {
		return this.rt_custom_image_mtime > 0;
	}
	BIsVisibleInMRUList() {
		return (
			!this.BIsUnreleased() &&
			this.app_type != 16384 &&
			this.app_type != 1024 &&
			!!this.is_available_on_current_platform &&
			this.appid != l.w1 &&
			!this.BIsAppBlocked() &&
			this.app_type != 8192
		);
	}
	get display_status() {
		return this.most_available_per_client_data.display_status;
	}
	get status_percentage() {
		return this.most_available_per_client_data.status_percentage;
	}
	get installed() {
		return this.most_available_per_client_data.installed;
	}
	get active_beta() {
		return this.most_available_per_client_data.active_beta;
	}
	get is_available_on_current_platform() {
		return (
			this.local_per_client_data &&
			this.local_per_client_data.is_available_on_current_platform
		);
	}
	get is_invalid_os_type() {
		return this.most_available_per_client_data.is_invalid_os_type;
	}
	get selected_per_client_data() {
		let e = this.per_client_data.find(
			(e) => e.clientid == this.selected_clientid,
		);
		e ||= this.most_available_per_client_data;
		return e;
	}
	get most_available_per_client_data() {
		let e = this.per_client_data.find(
			(e) => e.clientid == this.most_available_clientid,
		);
		e ||= this.per_client_data[0];
		return e;
	}
	get local_per_client_data() {
		return this.per_client_data.find((e) => e.clientid == "0");
	}
	owner_account_id;
	site_license_site_name;
	number_of_copies;
	review_score_with_bombs;
	review_percentage_with_bombs;
	review_score_without_bombs;
	review_percentage_without_bombs;
	steam_hw_compat_category_packed;
	get steam_deck_compat_category() {
		return this.steam_hw_compat_category_packed & 3 || 0;
	}
	BIsSteamDeckVerified() {
		return this.steam_deck_compat_category == 3;
	}
	BSupportsVR() {
		return this.vr_supported;
	}
	BIsSteamVR() {
		return ak(this.appid);
	}
	get review_score() {
		if (h.rV.storePreferences.eReviewScorePreference == 1) {
			return this.review_score_with_bombs;
		} else {
			return this.review_score_without_bombs;
		}
	}
	get review_percentage() {
		if (h.rV.storePreferences.eReviewScorePreference == 1) {
			return this.review_percentage_with_bombs;
		} else {
			return this.review_percentage_without_bombs;
		}
	}
	GetPerClientData(e) {
		let t;
		switch (e) {
			case "local": {
				t = this.local_per_client_data;
				break;
			}
			case "mostavailable": {
				t = this.most_available_per_client_data;
				break;
			}
			default: {
				t = this.selected_per_client_data;
			}
		}
		return t;
	}
	InitFromProto(e) {
		for (let t in S) {
			const r = t;
			const S_r = S[r];
			if (S_r.fnCustomSetter) {
				S_r.fnCustomSetter(this, e);
			} else {
				const t = e[r]() ?? S_r.default;
				this[r] = t;
			}
		}
		this.canonicalAppType =
			this.app_type == 1073741824 ||
			this.app_type == 65536 ||
			this.app_type == 65536 ||
			this.app_type == 8
				? 1
				: this.app_type;
	}
	ComputeLastPlayedSectionName(e) {
		if (!e) {
			return Localize("#GridSection_Never");
		}
		let t = "";
		t =
			new Date(e * 1000).getFullYear() >= new Date().getFullYear() - 10
				? LocalizeCalendarTimeLessGranular(e)
				: Localize("#GridSection_MoreThan10YearsAgo");
		return t;
	}
	SetGameID(e) {
		this.m_gameid = e.gameid();
		if (this.m_gameid) {
			this.m_ulGameId = a.A.fromString(this.m_gameid);
		}
	}
	BIsGameIDEqual(e) {
		return this.m_gameid == e.gameid();
	}
	SetSortAs(e) {
		this.sort_as = AG(e.sort_as() ? e.sort_as() : e.display_name());
	}
	BIsSortAsEqual(e) {
		const t = AG(e.sort_as() ? e.sort_as() : e.display_name());
		return this.sort_as == t;
	}
	SetLastTimePlayed(e) {
		this.rt_last_time_played_or_installed = e.rt_last_time_played();
		if (this.minutes_playtime_forever > 0 || this.BIsModOrShortcut()) {
			this.rt_last_time_played = this.rt_last_time_played_or_installed;
		} else {
			this.rt_last_time_played = 0;
		}
	}
	BIsLastTimePlayedEqual(e) {
		return this.rt_last_time_played_or_installed == e.rt_last_time_played();
	}
	BAreSetsEqual(e, t) {
		return e.size == t.length && t.every((t) => e.has(t));
	}
	SetStoreCategories(e) {
		this.m_setStoreCategories = new Set(e.store_category().values());
	}
	BAreCategoriesEqual(e) {
		return this.BAreSetsEqual(this.m_setStoreCategories, e.store_category());
	}
	SetStoreTags(e) {
		this.m_setStoreTags = new Set(e.store_tag().values());
	}
	BAreStoreTagsEqual(e) {
		return this.BAreSetsEqual(this.m_setStoreTags, e.store_tag());
	}
	SetPerClientData(e) {
		if (!this.per_client_data || !this.BIsPerClientDataEqual(e)) {
			this.per_client_data = [];
			for (let t = 0; t < e.per_client_data().length; t++) {
				this.per_client_data.push(e.per_client_data()[t].toObject());
			}
		}
	}
	BIsPerClientDataEqual(e) {
		if (this.per_client_data.length != e.per_client_data().length) {
			this.LOG_CHANGE("Observable per_client_data length changed");
			return false;
		}
		for (let t = 0; t < this.per_client_data.length; t++) {
			let r = JSON.stringify(this.per_client_data[t]);
			let n = JSON.stringify(e.per_client_data()[t].toObject());
			if (r != n) {
				this.LOG_CHANGE(`Observable per_client_data ${t} changed`, r, n);
				return false;
			}
		}
		return true;
	}
	BHasObservableChange(e) {
		for (let t in S) {
			const r = t;
			const S_r = S[r];
			if (S_r.observable) {
				let i = false;
				const a = this[r];
				const s = e[r]() ?? S_r.default;
				i = S_r.fnCustomComparator ? !S_r.fnCustomComparator(this, e) : a != s;
				if (i) {
					this.LOG_CHANGE(`Observable ${t} changed`, a, s, this, e.toObject());
					return true;
				}
			}
		}
		return false;
	}
	BHasNonObservableChange(e) {
		for (let t in S) {
			const r = t;
			const S_r = S[r];
			if (!S_r.observable) {
				let i = false;
				const a = this[r];
				const s = e[r]() ?? S_r.default;
				i = S_r.fnCustomComparator ? !S_r.fnCustomComparator(this, e) : a != s;
				if (i) {
					this.LOG_CHANGE(
						`Non-observable ${t} changed`,
						a,
						s,
						this,
						e.toObject(),
					);
					return true;
				}
			}
		}
		return false;
	}
}
Cg([p.oI], B.prototype, "BHasStoreTag", null);
export class fd extends B {
	constructor() {
		super();
		Gn(this, {
			InitFromProto: s.XI,
			mru_index: s.sH,
			rt_recent_activity_time: s.sH,
			minutes_playtime_forever: s.sH,
			minutes_playtime_last_two_weeks: s.sH,
			rt_last_time_played: s.sH,
			rt_last_time_locally_played: s.sH,
			per_client_data: s.sH,
			most_available_clientid: s.sH,
			selected_clientid: s.sH,
		});
	}
	BHasObservables() {
		return true;
	}
}
class I {
	constructor() {
		Gn(this);
	}
	m_mapApps = new Map();
	m_bIsInitialized = false;
	m_mapStoreTagLocalization = new Map();
	m_msTagMapLoaded = performance.now();
	m_collator;
	m_cm;
	async Init(e) {
		console.time("CAppStore Init");
		this.m_cm = e;
		this.m_collator = new Intl.Collator(
			LocalizationManager.GetPreferredLocales(),
		);
		let t = YI(e, new b.A());
		await new Promise((e, t) => {
			let r = e;
			SteamClient.Apps.RegisterForAppOverviewChanges((e) => {
				if (this.UpdateAppOverview(e)) {
					this.m_bIsInitialized = true;
					if (r) {
						r();
					}
					r = null;
				}
			});
		});
		this.m_mapStoreTagLocalization = await t;
		console.timeEnd("CAppStore Init");
	}
	UpdateAppOverview(e) {
		const t = m.bs.deserializeBinary(e);
		const r = t.full_update();
		let n = t.app_overview();
		let a = t.removed_appid();
		const s = [];
		c.Vw.OnAppOverviewChange(n);
		let o = new Set();
		let l = false;
		y.Debug(
			`${r ? "Full" : "Partial"} update of`,
			n.length,
			t.update_complete() ? "complete" : "in progress",
			e.byteLength,
			"bytes",
		);
		if (!r) {
			y.Debug(
				"Apps changed",
				n.map((e) => e.appid()),
				a,
			);
		}
		for (let e of n) {
			let t = this.m_mapApps.get(e.appid());
			const n = t?.local_per_client_data?.display_status;
			let i = t?.BHasNonObservableChange(e);
			let a = t?.BHasObservableChange(e);
			if (!r && t && !i && !a) {
				y.Debug(`No changes for ${e.appid()}`);
				continue;
			}
			const c = i || !t || !t || !t.BHasObservables();
			if (c) {
				if (!r) {
					y.Debug(`Replacing IAppOverview for ${e.appid()}`);
				}
				if (this.m_bIsInitialized && !r && a) {
					y.Debug(`Making ${e.appid()} observable`);
					t = new fd();
				} else {
					t = new B();
				}
			}
			t.InitFromProto(e);
			if (c) {
				this.m_mapApps.set(t.appid, t);
			}
			s.push(t);
			let m = t.local_per_client_data?.display_status;
			if (m != n) {
				if (
					m == 4 ||
					m == 1 ||
					m == 1 ||
					m == 2 ||
					m == 1 ||
					m == 2 ||
					n == 4 ||
					m == 1 ||
					m == 2 ||
					n == 4 ||
					n == 1 ||
					m == 1 ||
					m == 2 ||
					n == 4 ||
					n == 1 ||
					n == 2
				) {
					l = true;
				}
			}
			t.GetStoreTags().forEach((e) => o.add(e));
		}
		for (let e of a) {
			this.m_mapApps.delete(e);
		}
		if (l) {
			i.oy.ScopeRunningApps();
		}
		_.md.OnAppOverviewChange(s, a);
		return t.update_complete();
	}
	GetAppOverviewByAppID(e) {
		if (this.m_mapApps.has(e)) {
			return this.m_mapApps.get(e);
		} else {
			return null;
		}
	}
	GetAppOverviewByGameID(e) {
		const t = this.GetAppOverviewByAppID(parseInt(e));
		return t || Array.from(this.m_mapApps.values()).find((t) => t.gameid == e);
	}
	CompareSortAs(e, t) {
		return this.m_collator.compare(e.sort_as, t.sort_as);
	}
	get allApps() {
		return Array.from(this.m_mapApps.values())
			.filter((e) => e && e.visible_in_game_list)
			.sort((e, t) => this.CompareSortAs(e, t));
	}
	get storeTagCounts() {
		const e = new Map();
		this.m_mapApps.forEach(
			(t) =>
				t &&
				t.visible_in_game_list &&
				t.GetStoreTags().forEach((t) => {
					const r = e.get(t) || 0;
					e.set(t, r + 1);
				}),
		);
		return e;
	}
	GetTopStoreTags(e) {
		const t = e && e.toLocaleLowerCase();
		const r = [];
		this.m_mapStoreTagLocalization.forEach(({ name }, n) => {
			if (!!name && (!t || !!name.toLowerCase().includes(t))) {
				r.push(n);
			}
		});
		const n = this.storeTagCounts;
		return r
			.map((e) => ({
				nTagId: e,
				nCount: n.get(e) || 0,
			}))
			.sort((e, t) => t.nCount - e.nCount);
	}
	RefreshTagsIfNeeded() {
		if (
			performance.now() - this.m_msTagMapLoaded > 3600000 &&
			this.m_cm.BIsConnected()
		) {
			this.m_msTagMapLoaded = performance.now();
			YI(this.m_cm, new b.A()).then(
				(e) => (this.m_mapStoreTagLocalization = e),
			);
		}
	}
	GetLocalizationForStoreTag(e) {
		this.RefreshTagsIfNeeded();
		return this.m_mapStoreTagLocalization.get(e)?.name;
	}
	get sharedLibraryAccountIds() {
		const e = new Set();
		this.allApps.forEach(
			(t) => t.owner_account_id && e.add(t.owner_account_id),
		);
		return Array.from(e).sort();
	}
	get siteLicenseApps() {
		let e;
		const t = [];
		for (const r of this.allApps) {
			if (r.site_license_site_name) {
				if (e != r.site_license_site_name) {
					AssertMsg(
						!e,
						`Found two site servers: ${e} != ${r.site_license_site_name}`,
					);
					if (e) {
						continue;
					}
					e = r.site_license_site_name;
				}
				t.push(r);
			}
		}
		if (e) {
			return {
				strSiteName: e,
				rgApps: t,
			};
		} else {
			return null;
		}
	}
	GetIconURLForApp(e) {
		if (e.icon_hash) {
			return `${C.B7.GetCommunityImageURL()}images/apps/${e.appid}/${
				e.icon_hash
			}.jpg`;
		} else if (e.icon_data) {
			return `data:image/${e.icon_data_format};base64,${e.icon_data}`;
		} else if (e.app_type == 8192 && e.album_cover_hash) {
			return this.GetAlbumCoverURLForApp(e);
		} else if (e.BIsModOrShortcut() && e.icon_data === undefined) {
			SteamClient.Apps.RequestIconDataForApp(e.appid);
			return null;
		} else {
			return null;
		}
	}
	GetVerticalCapsuleURLForApp(e) {
		const e_appid = e.appid;
		if (e.library_capsule_filename) {
			return C.B7.BuildLibraryAssetURL(
				e_appid,
				e.library_capsule_filename,
				e.rt_store_asset_mtime,
			);
		} else {
			return C.B7.BuildLibraryAssetURL(
				e_appid,
				"library_600x900.jpg",
				e.rt_store_asset_mtime,
			);
		}
	}
	GetPregeneratedVerticalCapsuleForApp(e) {
		const e_appid = e.appid;
		return `${C.B7.GetStoreAppImageURL()}/${e_appid}/portrait.png?v=2`;
	}
	GetCachedAlbumCoverURL(e) {
		if (e.album_cover_hash) {
			return C.B7.BuildCachedLibraryAssetURL(
				e.appid,
				`${e.album_cover_hash}.jpg`,
				e.local_cache_version,
			);
		} else {
			return null;
		}
	}
	GetAlbumCoverURLForApp(e) {
		if (e.album_cover_hash) {
			return `${C.B7.GetCommunityImageURL()}images/apps/${e.appid}/${
				e.album_cover_hash
			}.jpg`;
		} else {
			return null;
		}
	}
	GetCachedVerticalCapsuleURL(e) {
		return [
			C.B7.BuildCachedLibraryAssetURL(
				e.appid,
				e.library_capsule_filename
					? e.library_capsule_filename
					: "library_600x900.jpg",
				e.local_cache_version,
			),
			C.B7.BuildLegacyCachedLibraryAssetURL(
				e.appid,
				"library_600x900.jpg",
				e.local_cache_version,
			),
		];
	}
	GetCustomImageURLs(e, t) {
		if (e.BHasCustomImages()) {
			return ["jpg", "png"].map((r) =>
				C.B7.BuildCustomAssetURL(e.appid, t, r, e.rt_custom_image_mtime),
			);
		} else {
			return [];
		}
	}
	GetCustomVerticalCapsuleURLs(e) {
		return this.GetCustomImageURLs(e, "p");
	}
	GetCustomLandcapeImageURLs(e) {
		return this.GetCustomImageURLs(e, "");
	}
	GetCustomHeroImageURLs(e) {
		return this.GetCustomImageURLs(e, "_hero");
	}
	GetCustomLogoImageURLs(e) {
		return this.GetCustomImageURLs(e, "_logo");
	}
	GetStorePageURLForApp(e) {
		if (e.BIsApplicationOrTool()) {
			return `${C.B7.GetStoreURL()}search/?term=${encodeURIComponent(
				e.display_name,
			)}`;
		} else if (e.BIsModOrShortcut()) {
			return null;
		} else {
			return `${C.B7.GetStoreURL()}app/${e.appid}`;
		}
	}
}
Cg([s.sH.shallow], I.prototype, "m_mapApps", undefined);
Cg([s.XI.bound], I.prototype, "UpdateAppOverview", null);
Cg([p.oI], I.prototype, "CompareSortAs", null);
Cg(
	[
		EW({
			keepAlive: true,
		}),
	],
	I.prototype,
	"allApps",
	null,
);
Cg([p.oI], I.prototype, "GetLocalizationForStoreTag", null);
Cg(
	[
		EW({
			keepAlive: true,
			equals: s.m3.structural,
		}),
	],
	I.prototype,
	"sharedLibraryAccountIds",
	null,
);
export const tw = new I();
export function Co(e) {
	return q3(() => (e ? tw.GetAppOverviewByAppID(e) : null));
}
export function li(e) {
	return q3(() => e.map((e) => tw.GetAppOverviewByAppID(e)));
}
export function _R(e) {
	return q3(() => (e ? tw.GetAppOverviewByGameID(e) : null));
}
export function mM(e) {
	return q3(() => e && e.BIsOwned());
}
window.appStore = tw;
window.appInfoStore = c.Vw;
