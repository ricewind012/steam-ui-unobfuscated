var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./37322.js");
var s = require("./89748.js");
var o = require("./96593.js");
var l = require("./16139.js");
var c = require("./81482.js");
var m = require(/*webcrack:missing*/ "./88696.js");
var u = require("./14629.js");
var d = require("./48289.js");
var A = require("./61175.js");
var p = require("./74995.js");
var g = require(/*webcrack:missing*/ "./49455.js");
import {
	Localize,
	LocalizeCalendarTimeLessGranular,
} from "../../actual_src/utils/localization.js";
var C = require(/*webcrack:missing*/ "./52451.js");
var _ = require("./51095.js");
var f = require("./64004.js");
var b = require(/*webcrack:missing*/ "./83599.js");
require(/*webcrack:missing*/ "./72476.js");
const y = new b.wd("CollectionStore");
const S = new b.wd("CollectionStore_Compute");
function w(e, t, r) {
	const n = new B(e, t);
	n.SetApps(r.map((e) => e.appid));
	return n;
}
class B {
	m_strId;
	m_strName = undefined;
	m_mapFilterToAppCounts = new Map();
	m_setApps = new Set();
	m_rgApps = [];
	constructor(e, t) {
		(0, i.Gn)(this);
		this.m_strId = e;
		this.m_strName = t;
	}
	get id() {
		return this.m_strId;
	}
	get displayName() {
		return this.m_strName;
	}
	get apps() {
		return this.m_setApps;
	}
	get bFiltersOnGameListAppType() {
		return this.id != A8.AppType_Games && this.id != A8.AppType_Soundtracks;
	}
	SetApps(e) {
		this.m_setApps = new Set(e);
		this.m_rgApps = e;
	}
	get allApps() {
		S.Debug(`Computing allApps for ${this.displayName} (${this.id})`);
		return this.m_rgApps
			.map((e) => o.tw.GetAppOverviewByAppID(e))
			.filter((e) => !!e);
	}
	UpdateApps(e, t) {}
	UpdateAllApps() {
		this.UpdateApps(o.tw.allApps, []);
	}
	UpdateFriendOwnedGames(e) {}
	get visibleApps() {
		S.Debug(`Computing visibleApps for ${this.displayName} (${this.id})`);
		return this.allApps.filter((e) => md.BIsVisible(e));
	}
	GetAppCountWithToolsFilter(e) {
		const t = e.hash;
		if (!this.m_mapFilterToAppCounts.has(t)) {
			this.m_mapFilterToAppCounts.set(
				t,
				this.allApps.filter((t) =>
					this.id == A8.Hidden
						? !t.BIsAppBlocked()
						: !!md.BIsVisible(t) &&
							(!t || t.app_type != 4 || !!e.BIncludesTools()) &&
							e.Matches(t),
				).length,
			);
			S.Debug(
				`Counting apps for ${this.displayName} (${this.id})`,
				t,
				this.m_mapFilterToAppCounts.get(t),
			);
		}
		return this.m_mapFilterToAppCounts.get(t);
	}
	ClearAppCounts() {
		this.m_mapFilterToAppCounts.clear();
	}
	get bIsDynamic() {
		return false;
	}
	get bIsDeletable() {
		return false;
	}
	AsDeletableCollection() {
		return null;
	}
	get bIsEditable() {
		return false;
	}
	AsEditableCollection() {
		return null;
	}
	get bAllowsDragAndDrop() {
		return false;
	}
	AsDragDropCollection() {
		return null;
	}
	BIncludesFriend(e) {
		return false;
	}
}
(0, n.Cg)([i.sH], B.prototype, "m_strName", undefined);
(0, n.Cg)([i.sH], B.prototype, "m_setApps", undefined);
(0, n.Cg)([i.sH], B.prototype, "m_rgApps", undefined);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	B.prototype,
	"allApps",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	B.prototype,
	"visibleApps",
	null,
);
class v extends B {
	m_filter = undefined;
	m_setAddedManually = undefined;
	m_setRemovedManually = undefined;
	constructor(e, t) {
		super(e, t);
		(0, i.Gn)(this);
	}
	get displayName() {
		return this.m_strName;
	}
	set displayName(e) {
		this.m_strName = e;
	}
	get allApps() {
		S.Debug(
			`Computing allApps for ${this.displayName} (${this.id}), ${this.bIsDynamic ? "dynamic" : "static"}`,
		);
		return Array.from(this.apps.values())
			.map((e) => o.tw.GetAppOverviewByAppID(e))
			.filter((e) => !!e)
			.sort(o.tw.CompareSortAs);
	}
	UpdateApps(e, t) {
		const r = new Set(this.m_setApps);
		if (this.m_filter && !this.m_filter.bIsEmpty) {
			for (let t of e.filter((e) => e.visible_in_game_list)) {
				if (this.m_filter.Matches(t)) {
					r.add(t.appid);
				} else {
					r.delete(t.appid);
				}
			}
			for (let e of t) {
				r.delete(e);
			}
		} else {
			r.clear();
		}
		this.m_setAddedManually.forEach((e) => r.add(e));
		this.m_setRemovedManually.forEach((e) => r.delete(e));
		if (
			JSON.stringify(Array.from(r.values()).sort()) !=
			JSON.stringify(Array.from(this.m_setApps.values()).sort())
		) {
			if (this.m_setApps.size > 0) {
				y.Debug(
					`Change detected for ${this.displayName} (${this.displayName} (${this.id}))`,
					(0, i.HO)(this.m_setApps),
					"=>",
					r,
				);
			}
			this.m_setApps = r;
			this.ClearAppCounts();
		}
	}
	UpdateFriendOwnedGames(e) {
		if (this.BIncludesFriend(e)) {
			y.Debug(
				`Updating friend ${e} in collection ${this.id} (${this.displayName})`,
			);
			this.UpdateAllApps();
		}
	}
	BIncludesFriend(e) {
		return (this.m_filter?.GetSelectedOptions(6) || []).indexOf(e) >= 0;
	}
	get visibleApps() {
		S.Debug(
			`Computing visibleApps for ${this.displayName} (${this.id}), ${this.bIsDynamic ? "dynamic" : "static"}`,
		);
		return this.allApps.filter((e) =>
			this.id == A8.Hidden ? !e.BIsAppBlocked() : md.BIsVisible(e),
		);
	}
	get bIsDynamic() {
		return !!this.internalAppFilter;
	}
	get bIsDeletable() {
		return !md.BIsSystemCollectionId(this.id);
	}
	AsDeletableCollection() {
		if (this.bIsDeletable) {
			return this;
		} else {
			return null;
		}
	}
	get bIsEditable() {
		return (
			!md.BIsSystemCollectionId(this.id) && !md.BIsPartnerCollectionId(this.id)
		);
	}
	AsEditableCollection() {
		if (this.bIsEditable) {
			return this;
		} else {
			return null;
		}
	}
	get bAllowsDragAndDrop() {
		return !md.BIsPartnerCollectionId(this.id);
	}
	AsDragDropCollection() {
		if (this.bAllowsDragAndDrop) {
			return this;
		} else {
			return null;
		}
	}
	get internalAppFilter() {
		return this.m_filter;
	}
	get internalAddedList() {
		return this.m_setAddedManually;
	}
	get internalRemovedList() {
		return this.m_setRemovedManually;
	}
	async Save() {
		this.UpdateAllApps();
		await md.SaveCollection(this);
	}
	async Delete() {
		await md.DeleteCollection(this.id);
	}
	AddApps(e) {
		const t = new Array();
		for (const r of e) {
			t.push(r.appid);
			this.m_setAddedManually.add(r.appid);
			this.m_setRemovedManually.delete(r.appid);
		}
		this.Save();
	}
	RemoveApps(e) {
		const t = new Array();
		for (const r of e) {
			t.push(r.appid);
			this.m_setAddedManually.delete(r.appid);
			if (this.bIsDynamic) {
				this.m_setRemovedManually.add(r.appid);
			}
		}
		this.Save();
	}
	FreezeToStatic() {
		this.m_filter = undefined;
		this.m_setAddedManually = new Set(this.apps);
		this.m_setRemovedManually = new Set();
		this.m_setApps.clear();
		this.Save();
	}
	ToStorageFormat() {
		const e = {
			id: this.id,
			name: this.displayName,
			added: [],
			removed: [],
		};
		const t = {
			id: this.id,
			added: [],
			removed: [],
		};
		if (this.m_filter) {
			e.filterSpec = this.m_filter.ToStorageFormat();
		}
		for (const r of this.m_setAddedManually) {
			(o.tw.GetAppOverviewByAppID(r)?.BIsModOrShortcut() ? t : e).added.push(r);
		}
		for (const r of this.m_setRemovedManually) {
			(o.tw.GetAppOverviewByAppID(r)?.BIsModOrShortcut() ? t : e).removed.push(
				r,
			);
		}
		return {
			roamingData: e,
			localData: t,
		};
	}
	MergeFromStorageFormat(e) {
		const { roamingData: t, localData: r } = e;
		this.m_setAddedManually = new Set();
		this.m_setRemovedManually = new Set();
		if (md.BIsPartnerCollectionId(this.id)) {
			this.m_filter = u.E6.ForPartner(this.id);
		} else {
			this.m_filter = t.filterSpec && u.E6.FromStorageFormat(t.filterSpec);
			if (t.added) {
				D(t.added, this.m_setAddedManually);
			}
			if (r && r.added) {
				D(r.added, this.m_setAddedManually);
			}
			if (this.bIsDynamic) {
				if (t.removed) {
					D(t.removed, this.m_setRemovedManually);
				}
				if (r && r.removed) {
					D(r.removed, this.m_setRemovedManually);
				}
			}
		}
		this.UpdateAllApps();
	}
	static FromStorageFormat(e) {
		const t = new v(e.roamingData.id, e.roamingData.name);
		t.MergeFromStorageFormat(e);
		return t;
	}
	static NewCollection(e, t, r) {
		const n = new v(
			k(
				(function () {
					const e = new Uint8Array(9);
					window.crypto.getRandomValues(e);
					return "uc-" + a.iI(e);
				})(),
			),
			e,
		);
		n.m_filter = t;
		n.m_setAddedManually = new Set(r.map((e) => e.appid));
		n.m_setRemovedManually = new Set();
		n.UpdateAllApps();
		return n;
	}
	static FromUserTag(e, t) {
		const r = new v(k("from-tag-" + e), e);
		r.m_filter = undefined;
		r.m_setAddedManually = new Set(t.map((e) => e.appid));
		r.m_setRemovedManually = new Set();
		r.UpdateAllApps();
		return r;
	}
	static NewSystemCollection(e, t) {
		const r = new v(e, md.SystemCollectionIdToName(e));
		r.m_filter = undefined;
		r.m_setAddedManually = new Set(t.map((e) => e.appid));
		r.m_setRemovedManually = new Set();
		r.UpdateAllApps();
		return r;
	}
}
(0, n.Cg)([i.sH], v.prototype, "m_filter", undefined);
(0, n.Cg)([i.sH], v.prototype, "m_setAddedManually", undefined);
(0, n.Cg)([i.sH], v.prototype, "m_setRemovedManually", undefined);
(0, n.Cg)([i.XI.bound], v.prototype, "UpdateApps", null);
(0, n.Cg)([i.XI.bound], v.prototype, "UpdateFriendOwnedGames", null);
(0, n.Cg)([C.oI], v.prototype, "AddApps", null);
(0, n.Cg)([C.oI], v.prototype, "RemoveApps", null);
(0, n.Cg)([i.XI.bound], v.prototype, "FreezeToStatic", null);
(0, n.Cg)([C.oI], v.prototype, "ToStorageFormat", null);
(0, n.Cg)([C.oI], v.prototype, "MergeFromStorageFormat", null);
const I = "collection-bootstrap-complete";
const E = "user-collections";
const M = "union-collections";
export var A8;
(function (e) {
	e.Favorites = "favorite";
	e.Uncategorized = "uncategorized";
	e.Hidden = "hidden";
	e.AllAppsAlpha = "all-apps-alpha";
	e.AllAppsRecent = "all-apps-recent";
	e.MyGames = "my-games";
	e.SiteLicense = "site-license";
	e.Recent = "recent";
	e.Shared = "shared-";
	e.FamilyGroup = "shared-familygroup";
	e.DeckGames = "deck-games";
	e.DTst1Games = "dtst1-games";
	e.LocalGames = "local-install";
	e.AllGames = "all-games";
	e.LocalPlayed = "local-played";
	e.RecentPurchased = "recent-purchased";
	e.DeckDesktopApps = "deck-desktop-apps";
	e.RemotePlay = "remote-play";
	e.RemotePlayActive = "remote-play-active";
	e.VR = "vr";
	e.Xbox = "xbox";
	e.PS4 = "ps4";
	e.PS5 = "ps5";
	e.AppType = "type-";
	e.AppType_Games = "type-games";
	e.AppType_Soundtracks = "type-music";
	e.AppType_Software = "type-software";
	e.AppType_Videos = "type-videos";
	e.AppType_Tools = "type-tools";
})((A8 ||= {}));
const R = "favorite";
function k(e) {
	return e.replace(/[%/]/g, (e, t) => {
		switch (e) {
			case "%":
				return "**";
			case "/":
				return "*+";
			default:
				return e;
		}
	});
}
function D(e, t) {
	for (const r of e) {
		t.add(r);
	}
}
function N(e, t) {
	const r = t.timestamp >= e.timestamp;
	if (!e.is_deleted && !t.is_deleted) {
		try {
			const n = JSON.parse(r ? t.value : e.value);
			const i = JSON.parse(r ? e.value : t.value);
			if (i.added) {
				for (const e of i.added) {
					if (!n.added || n.added.findIndex((t) => t == e) < 0) {
						n.added.push(e);
					}
					const t = n.removed && n.removed.findIndex((t) => t == e);
					if (t >= 0) {
						n.removed.splice(t, 1);
					}
				}
				return new c.HB(
					e.key,
					Math.max(t.timestamp, e.timestamp),
					false,
					JSON.stringify(n),
					e.conflictResolutionMethod,
					e.strMethodId,
				);
			}
		} catch {}
	}
	if (r) {
		return null;
	} else {
		return e;
	}
}
class F {
	m_localStorage = new m.A();
	m_cloudStorage;
	m_cloudStorageMap;
	m_shortcutCollectionInfo = {};
	m_mapSystemCollectionIdToName;
	m_mapPartnerCollectionIdToName;
	m_mapCollectionsFromStorage;
	constructor() {
		(0, i.Gn)(this);
	}
	async Register() {
		c.s7.RegisterCustomConflictResolutionMethod(M, N);
	}
	OnCloudStorageChanged(e, t) {
		y.Debug("Change received", e, t);
		this.m_mapCollectionsFromStorage ||= i.sH.map([], {
			deep: false,
		});
		for (let e of t) {
			if (!e.startsWith(E + ".")) {
				continue;
			}
			const t = k(e.slice(17));
			const r = this.m_cloudStorage.Get(e);
			let n;
			if (r) {
				try {
					n = JSON.parse(r);
				} catch {
					console.error(
						`Could not parse collection '${t}' from JSON:'${r}'; deleting it.`,
					);
				}
			}
			if (n && n.id && n.name) {
				if (this.BIsSystemCollectionId(n.id)) {
					n.name = this.SystemCollectionIdToName(n.id);
				}
				if (this.BIsPartnerCollectionId(n.id)) {
					n.name = this.PartnerCollectionIdToName(n.id);
				}
				n.id = t;
				const e = {
					roamingData: n,
					localData: this.m_shortcutCollectionInfo[t],
				};
				this.m_mapCollectionsFromStorage.set(t, v.FromStorageFormat(e));
				const r = this.m_mapCollectionsFromStorage.get(t);
				r.UpdateAllApps();
				r.allApps;
			} else {
				this.m_mapCollectionsFromStorage.delete(t);
			}
		}
		y.Debug(this.m_mapCollectionsFromStorage);
	}
	async Init(e) {
		this.m_cloudStorage = e;
		this.InitSystemCollectionNameMap();
		this.InitPartnerCollectionNameMap();
		this.m_shortcutCollectionInfo =
			(await this.m_localStorage.GetObject(E)) || {};
		this.m_cloudStorageMap = this.m_cloudStorage.GetMapForPrefix(E + ".");
		this.m_cloudStorage.RegisterForChangeNotifications(
			this.OnCloudStorageChanged,
		);
		if (this.m_cloudStorage.Get(I) === "true") {
			if (
				!this.m_mapCollectionsFromStorage?.has(A8.Favorites) ||
				!this.m_mapCollectionsFromStorage?.has(A8.Hidden)
			) {
				this.BootstrapFromUserTags("missing system collections", true);
			}
		} else {
			this.BootstrapFromUserTags("initial run", false);
		}
	}
	OnAppOverviewChange(e, t) {
		if (this.m_mapCollectionsFromStorage) {
			for (let r of this.collectionsFromStorage.values()) {
				r.UpdateApps(e, t);
			}
		}
	}
	OnFriendOwnedAppsChanged(e) {
		if (this.m_mapCollectionsFromStorage) {
			for (let t of this.collectionsFromStorage.values()) {
				t.UpdateFriendOwnedGames(e);
			}
		}
	}
	BIsFriendInAnyCollection(e) {
		if (!this.collectionsFromStorage) {
			return false;
		}
		for (let t of this.collectionsFromStorage.values()) {
			if (t.BIncludesFriend(e)) {
				return true;
			}
		}
		return false;
	}
	get collectionsFromStorage() {
		return this.m_mapCollectionsFromStorage;
	}
	async BootstrapFromUserTags(e, t) {
		y.Warning(
			"Could not load stored collections; converting user tags instead.",
		);
		y.Warning("Reason:", e);
		const r = await SteamClient.Apps.GetLibraryBootstrapData();
		const n = p.V6.deserializeBinary(r);
		return this.ImportUserTags(n, c.x2.InitializationOnly, t);
	}
	async ImportUserTags(e, t, r) {
		const n = new Map();
		const i = new Map();
		const a = [];
		const s = [];
		for (const t of e.app_data()) {
			const e = o.tw.GetAppOverviewByAppID(t.appid());
			if (e) {
				for (const s of t.user_tag()) {
					const t = s.toLocaleLowerCase();
					if (_.kd(t, R) == 0) {
						a.push(e);
					} else if (!r) {
						if (!i.has(t)) {
							i.set(t, s);
							n.set(s, []);
						}
						const r = i.get(t);
						n.get(r).push(e);
					}
				}
				if (t.hidden()) {
					s.push(e);
				}
			} else {
				y.Warning("Cannot import user tags from unknown app #", t.appid());
			}
		}
		const l = [];
		l.push(v.NewSystemCollection(A8.Favorites, a));
		n.forEach((e, t) => {
			l.push(v.FromUserTag(t, e));
		});
		l.push(v.NewSystemCollection(A8.Hidden, s));
		this.m_shortcutCollectionInfo = {};
		const c = [];
		for (const e of l) {
			const r = e.ToStorageFormat();
			if (r.localData.added.length + r.localData.removed.length > 0) {
				this.m_shortcutCollectionInfo[e.id] = r.localData;
			}
			c.push(this.m_cloudStorageMap.StoreObject(e.id, r.roamingData, t));
		}
		c.push(this.WriteLocalStorage());
		await Promise.all(c);
		await this.m_cloudStorage.StoreString(I, "true", t);
	}
	get uncategorizedCollection() {
		let e;
		S.Debug("Computing uncategorizedCollection");
		const t = new Set();
		function r(e) {
			for (let r of e || []) {
				t.add(r);
			}
		}
		this.collectionsFromStorage.forEach((e, t) => {
			if (t != A8.Hidden) {
				r(e.apps);
			}
		});
		r(this.siteLicenseCollection?.apps);
		r(this.GetCollectionForAppType(8192)?.apps);
		if (A.n6.bIsGameListGroupedBySharedLibraries) {
			this.sharedLibrariesCollections.forEach((e) => {
				r(e.apps);
			});
		}
		if (t.size > 0) {
			const r = o.tw.allApps.filter((e) => !t.has(e.appid));
			e = w(
				A8.Uncategorized,
				this.SystemCollectionIdToName(A8.Uncategorized),
				r,
			);
		} else {
			e = w(
				A8.Uncategorized,
				this.SystemCollectionIdToName(A8.AllAppsAlpha),
				o.tw.allApps,
			);
		}
		return e;
	}
	get myGamesCollection() {
		S.Debug("Computing myGamesCollection");
		let e = this.GetCollectionForAppType(1).allApps.filter(
			(e) => e.BIsOwned() && !e.BIsBorrowed(),
		);
		return w(A8.MyGames, Localize("#GameList_View_MyOwnGames"), e);
	}
	get allGamesCollection() {
		S.Debug("Computing allGamesCollection");
		let e = this.GetCollectionForAppType(1).allApps;
		if (A.n6.IsGamepadUIWindowActive()) {
			e = e.filter((e) => !e.BIsShortcut());
		}
		return w(A8.MyGames, Localize("#GameList_View_All"), e);
	}
	BIncludeInFamilyGroupCollection(e) {
		return (0, s.qw)().BIsFamilyGroupMember(e.owner_account_id);
	}
	BIncludeInSharedLibraryCollection(e) {
		return e.BIsOwnedByAnotherUser();
	}
	get sharedLibrariesCollections() {
		S.Debug("Computing sharedLibrariesCollections");
		const e = [];
		let t = [];
		if ((0, s.qw)().BIsInFamilyGroup()) {
			t = o.tw.allApps.filter((e) => this.BIncludeInFamilyGroupCollection(e));
			e.push(
				w(
					A8.FamilyGroup,
					Localize(
						"#GameList_View_FamilyGroup",
						(0, s.qw)().GetCurrentUser().strFamilyGroupName,
					),
					t,
				),
			);
		}
		const r = new Map();
		for (const e of o.tw.allApps) {
			if (!t.includes(e) && this.BIncludeInSharedLibraryCollection(e)) {
				let t = r.get(e.owner_account_id);
				if (!t) {
					t = [];
					r.set(e.owner_account_id, t);
				}
				t.push(e);
			}
		}
		for (const e of l.N.showcases) {
			if (e.strCollectionId.startsWith(A8.Shared)) {
				const t = e.strCollectionId.split("-");
				const n = parseInt(t[1]);
				if (n && !r.has(n)) {
					r.set(n, []);
				}
			}
		}
		r.forEach((t, r) =>
			e.push(
				w(
					`${A8.Shared}${r}`,
					Localize(
						"#GameList_View_GamesSharedByOther",
						d.O$.GetFriendState(r).display_name,
					),
					t,
				),
			),
		);
		return e;
	}
	get sharedLibrariesCollectionMap() {
		S.Debug("Computing sharedLibrariesCollectionMap");
		return new Map(this.sharedLibrariesCollections.map((e) => [e.id, e]));
	}
	get siteLicenseCollection() {
		S.Debug("Computing siteLicenseCollection");
		if (!o.tw.siteLicenseApps) {
			return null;
		}
		const { strSiteName: e, rgApps: t } = o.tw.siteLicenseApps;
		return w(
			A8.SiteLicense,
			Localize("#GameList_View_GamesProvidedByNamedCafe", e),
			t,
		);
	}
	get deckGamesCollection() {
		S.Debug("Computing neptuneGamesCollection");
		if (A.n6.IsGamepadUIWindowActive()) {
			let e = this.GetCollectionForAppType(1).allApps.filter((e) =>
				e.BIsSteamDeckVerified(),
			);
			return w(A8.DeckGames, Localize("#GameList_View_DeviceGames"), e);
		}
		return null;
	}
	get dtestGamesCollection() {
		A.n6.IsGamepadUIWindowActive();
		return null;
	}
	get xboxControllerGamesCollection() {
		S.Debug("Computing xboxControllerGamesCollection");
		if (A.n6.IsGamepadUIWindowActive()) {
			let e = this.GetCollectionForAppType(1).allApps.filter(
				(e) => e.BHasStoreCategory(28) || e.BHasStoreCategory(18),
			);
			return w(A8.Xbox, Localize("#GameList_View_DeviceGames"), e);
		}
		return null;
	}
	get ps4ControllerGamesCollection() {
		S.Debug("Computing ps4ControllerGamesCollection");
		if (A.n6.IsGamepadUIWindowActive()) {
			let e = this.GetCollectionForAppType(1).allApps.filter((e) =>
				e.BHasStoreCategory(55),
			);
			return w(A8.PS4, Localize("#GameList_View_DeviceGames"), e);
		}
		return null;
	}
	get ps5ControllerGamesCollection() {
		S.Debug("Computing ps5ControllerGamesCollection");
		if (A.n6.IsGamepadUIWindowActive()) {
			let e = this.GetCollectionForAppType(1).allApps.filter((e) =>
				e.BHasStoreCategory(57),
			);
			return w(A8.PS5, Localize("#GameList_View_DeviceGames"), e);
		}
		return null;
	}
	get deckDesktopApps() {
		S.Debug("Computing deckDesktopApps");
		if (A.n6.IsGamepadUIWindowActive()) {
			let e = this.GetCollectionForAppType(1).allApps.filter((e) =>
				e.BIsShortcut(),
			);
			return w(A8.DeckDesktopApps, Localize("#GameList_View_NonSteamGames"), e);
		}
		return null;
	}
	get vrAppsCollection() {
		S.Debug("Computing vrAppsCollection");
		let e = this.allRecentAppsCollection.allApps.filter((e) => e.BSupportsVR());
		return w(A8.VR, Localize("#GameList_View_ShowOnlyVR"), e);
	}
	get localGamesCollection() {
		S.Debug("Computing localGamesCollection");
		let e = this.GetCollectionForAppType(1).allApps.filter(
			(e) => e.local_per_client_data?.installed,
		);
		if (A.n6.IsGamepadUIWindowActive()) {
			e = e.filter((e) => !e.BIsShortcut());
		}
		return w(A8.LocalGames, Localize("#GameList_View_LocalGames"), e);
	}
	get userCollections() {
		S.Debug("Computing userCollections");
		const e = Array.from(this.collectionsFromStorage.values())
			.filter((e) => !this.BIsSystemCollectionId(e.id))
			.sort((e, t) => _.Fw(e.displayName, t.displayName));
		if (A.n6.IsGamepadUIWindowActive()) {
			const t = this.localGamesCollection;
			if (t) {
				e.unshift(t);
			}
		}
		const t = this.GetCollectionForAppType(8192);
		if (t) {
			e.push(t);
		}
		const r = this.collectionsFromStorage.get(A8.Favorites);
		if (r) {
			e.unshift(r);
		}
		e.push(this.uncategorizedCollection);
		return e;
	}
	get recentAppCollections() {
		S.Debug("Computing recentAppCollections");
		const e = [];
		const t = this.allRecentAppsCollection.allApps;
		let r;
		let n = 0;
		const i = new Date();
		i.setFullYear(i.getFullYear() - 10);
		const a = i.getTime() / 1000;
		for (let i = 0; i < t.length; i++) {
			const s = t[i];
			const o =
				s.rt_recent_activity_time < a
					? Localize("#GameList_SectionHeader_NoRecentActivity")
					: LocalizeCalendarTimeLessGranular(s.rt_recent_activity_time);
			if (o != r) {
				if (r) {
					e.push(w(`${A8.Recent}-${r}`, r, t.slice(n, i)));
				}
				r = o;
				n = i;
			}
		}
		if (r) {
			e.push(w(`${A8.Recent}-${r}`, r, t.slice(n, t.length)));
		}
		return e;
	}
	get recentAppCollectionMap() {
		S.Debug("Computing recentAppCollectionMap");
		return new Map(this.recentAppCollections.map((e) => [e.id, e]));
	}
	get appTypeCollections() {
		S.Debug("Computing appTypeCollections");
		const e = new Map();
		for (const t of o.tw.allApps) {
			let r = e.get(t.canonicalAppType);
			if (!r) {
				r = [];
				e.set(t.canonicalAppType, r);
			}
			r.push(t);
		}
		return [
			w(A8.AppType_Games, Localize("#AppType_1"), e.get(1) || []),
			w(A8.AppType_Software, Localize("#AppType_2"), e.get(2) || []),
			w(A8.AppType_Soundtracks, Localize("#AppType_2000"), e.get(8192) || []),
			w(A8.AppType_Videos, Localize("#AppType_800"), e.get(2048) || []),
			w(A8.AppType_Tools, Localize("#AppType_4"), e.get(4) || []),
		];
	}
	get appTypeCollectionMap() {
		S.Debug("Computing appTypeCollectionMap");
		return new Map(this.appTypeCollections.map((e) => [e.id, e]));
	}
	get allAppsCollection() {
		S.Debug("Computing allAppsCollection");
		let e = o.tw.allApps;
		if (A.n6.bIsGameListGroupedBySharedLibraries) {
			e = e.filter((e) => e.BIsOwned() && !e.BIsBorrowed());
		}
		return w(
			A8.AllAppsAlpha,
			this.SystemCollectionIdToName(A8.AllAppsAlpha),
			e,
		);
	}
	get allRecentAppsCollection() {
		S.Debug("Computing allRecentAppsCollection");
		return w(
			A8.AllAppsRecent,
			this.SystemCollectionIdToName(A8.AllAppsRecent),
			o.tw.allApps
				.slice()
				.sort(
					(e, t) =>
						t.rt_recent_activity_time - e.rt_recent_activity_time ||
						t.appid - e.appid,
				),
		);
	}
	get recentAppsCollection() {
		S.Debug("Computing recentAppsCollection");
		return w(
			A8.Recent,
			this.SystemCollectionIdToName(A8.Recent),
			this.allRecentAppsCollection.allApps.filter(
				(e) => e.mru_index !== undefined,
			),
		);
	}
	get localPlayedGamesCollection() {
		S.Debug("Computing localPlayedGamesCollection");
		return w(
			A8.LocalPlayed,
			this.SystemCollectionIdToName(A8.LocalPlayed),
			this.allRecentAppsCollection.allApps
				.filter(
					(e) =>
						e.rt_last_time_locally_played !== undefined && !e.BIsMusicAlbum(),
				)
				.sort(
					(e, t) =>
						t.rt_last_time_locally_played - e.rt_last_time_locally_played,
				),
		);
	}
	get recentPurchasedGamesCollection() {
		S.Debug("Computing recentPurchasedGamesCollection");
		const e = Math.floor(Date.now() / 1000) - 604800;
		return w(
			A8.RecentPurchased,
			this.SystemCollectionIdToName(A8.RecentPurchased),
			o.tw.allApps
				.filter(
					(t) =>
						t.rt_purchased_time !== undefined &&
						t.rt_purchased_time > e &&
						!t.BIsMusicAlbum(),
				)
				.sort(
					(e, t) =>
						t.rt_purchased_time - e.rt_purchased_time || t.appid - e.appid,
				),
		);
	}
	get remotePlayCollection() {
		S.Debug("Computing remotePlayCollection");
		let e = o.tw.allApps.filter(
			(e) =>
				e.BHasStoreCategory(41) ||
				e.BHasStoreCategory(42) ||
				e.BHasStoreCategory(43),
		);
		return w(A8.RemotePlay, this.SystemCollectionIdToName(A8.RemotePlay), e);
	}
	get remotePlayActiveCollection() {
		S.Debug("Computing remotePlayActiveCollection");
		const {
			bStreaming: e,
			bStreamingToPhone: t,
			bStreamingToTablet: r,
			bStreamingToTV: n,
		} = f.ut.GetStreamingFormFactors();
		let i = o.tw.allApps.filter(
			(i) =>
				!!i.local_per_client_data?.installed &&
				!!e &&
				(!t || !!i.BHasStoreCategory(41)) &&
				(!r || !!i.BHasStoreCategory(42)) &&
				(!n || !!i.BHasStoreCategory(43)),
		);
		return w(A8.RemotePlay, this.SystemCollectionIdToName(A8.RemotePlay), i);
	}
	SetGamepadCollectionFilter(e) {
		if ((0, u.Pj)(e)) {
			A.n6.SelectGamepadCollectionsAppFilterOption(2, e, true);
		}
	}
	GetCurrentGamepadFilter() {
		return A.n6.collectionsAppFilterGamepad.GetCurrentSteamDeckCompatOption();
	}
	BHasNonGamepadOptions() {
		return A.n6.collectionsAppFilterGamepad.BHasNonGamepadOptions();
	}
	GetCollection(e) {
		if (e) {
			if (e == A8.AllAppsAlpha) {
				return this.allAppsCollection;
			} else if (e == A8.AllAppsRecent) {
				return this.allRecentAppsCollection;
			} else if (e == A8.Recent) {
				return this.recentAppsCollection;
			} else if (e == A8.Uncategorized) {
				return this.uncategorizedCollection;
			} else if (e == A8.MyGames) {
				return this.myGamesCollection;
			} else if (e == A8.DeckGames) {
				return this.deckGamesCollection;
			} else if (e == A8.DTst1Games) {
				return this.dtestGamesCollection;
			} else if (e == A8.SiteLicense) {
				return this.siteLicenseCollection;
			} else if (e == A8.LocalGames) {
				return this.localGamesCollection;
			} else if (e == A8.AllGames) {
				return this.allGamesCollection;
			} else if (e == A8.LocalPlayed) {
				return this.localPlayedGamesCollection;
			} else if (e == A8.RecentPurchased) {
				return this.recentPurchasedGamesCollection;
			} else if (e == A8.DeckDesktopApps) {
				return this.deckDesktopApps;
			} else if (e == A8.RemotePlay) {
				return this.remotePlayCollection;
			} else if (e == A8.RemotePlayActive) {
				return this.remotePlayActiveCollection;
			} else if (e == A8.VR) {
				return this.vrAppsCollection;
			} else if (e == A8.Xbox) {
				return this.xboxControllerGamesCollection;
			} else if (e == A8.PS4) {
				return this.ps4ControllerGamesCollection;
			} else if (e == A8.PS5) {
				return this.ps5ControllerGamesCollection;
			} else if (
				e == "recent-games" ||
				e == "play-next" ||
				e == "all-collections"
			) {
				return null;
			} else {
				return (
					this.collectionsFromStorage.get(e) ||
					this.collectionsFromStorage.get(k(e)) ||
					this.recentAppCollectionMap.get(e) ||
					this.appTypeCollectionMap.get(e) ||
					this.sharedLibrariesCollectionMap.get(e)
				);
			}
		} else {
			return null;
		}
	}
	GetCollectionIDByUserTag(e) {
		if (_.lY(e, R) == 0) {
			return A8.Favorites;
		}
		for (const t of Array.from(this.collectionsFromStorage.values())) {
			if (e == t.displayName) {
				return t.id;
			}
		}
		return null;
	}
	GetCollectionForAppType(e) {
		switch (e) {
			case 1:
				return this.appTypeCollectionMap.get(A8.AppType_Games);
			case 8192:
				return this.appTypeCollectionMap.get(A8.AppType_Soundtracks);
			case 2:
				return this.appTypeCollectionMap.get(A8.AppType_Software);
			case 2048:
				return this.appTypeCollectionMap.get(A8.AppType_Videos);
			case 4:
				return this.appTypeCollectionMap.get(A8.AppType_Tools);
		}
	}
	GetCollectionListForAppID(e) {
		let t = [];
		if (this.userCollections) {
			for (const r of this.userCollections) {
				if (!this.BIsSystemCollectionId(r.id)) {
					if (r.id != A8.Uncategorized && r.apps.has(e)) {
						t.push(r);
					}
				}
			}
		}
		return t;
	}
	AddOrRemoveApp(e, t, r) {
		const n = this.GetCollection(r).AsDragDropCollection();
		const i = e
			.map((e) => o.tw.GetAppOverviewByAppID(e))
			.filter((e) => e !== undefined);
		if (t) {
			n.AddApps(i);
		} else {
			n.RemoveApps(i);
		}
	}
	SetAppsAsFavorite(e, t) {
		this.AddOrRemoveApp(e, t, A8.Favorites);
	}
	SetAppsAsHidden(e, t) {
		this.AddOrRemoveApp(e, t, A8.Hidden);
	}
	BIsFavorite(e) {
		const t = typeof e == "number" ? e : e.appid;
		const r = this.collectionsFromStorage.get(A8.Favorites);
		return !r || r.apps.has(t);
	}
	BIsHidden(e) {
		const t = typeof e == "number" ? e : e.appid;
		const r = this.collectionsFromStorage.get(A8.Hidden);
		return !r || r.apps.has(t);
	}
	BIsVisible(e) {
		const t = typeof e == "number" ? o.tw.GetAppOverviewByAppID(e) : e;
		return (
			(!t || (t.app_type != 256 && !!t.visible_in_game_list)) &&
			t &&
			!t.BIsAppBlocked() &&
			!this.BIsHidden(t.appid)
		);
	}
	InitSystemCollectionNameMap() {
		this.m_mapSystemCollectionIdToName = new Map();
		this.m_mapSystemCollectionIdToName.set(
			A8.Favorites,
			Localize("#GameList_Category_Favorites"),
		);
		this.m_mapSystemCollectionIdToName.set(
			A8.Uncategorized,
			Localize("#GameList_Category_Uncategorized"),
		);
		this.m_mapSystemCollectionIdToName.set(
			A8.Hidden,
			Localize("#GameList_Category_Hidden"),
		);
		this.m_mapSystemCollectionIdToName.set(
			A8.AllAppsAlpha,
			Localize("#GameList_View_All"),
		);
		this.m_mapSystemCollectionIdToName.set(
			A8.AllAppsRecent,
			Localize("#GameList_View_Recent"),
		);
		this.m_mapSystemCollectionIdToName.set(
			A8.Recent,
			Localize("#GameList_View_Recent"),
		);
		this.m_mapSystemCollectionIdToName.set(
			A8.RemotePlay,
			Localize("#GameList_Category_RemotePlay"),
		);
		this.m_mapSystemCollectionIdToName.set(
			A8.RemotePlayActive,
			Localize("#GameList_Category_RemotePlay"),
		);
	}
	InitPartnerCollectionNameMap() {
		this.m_mapPartnerCollectionIdToName = new Map();
		this.m_mapPartnerCollectionIdToName.set(
			"partner-ea-access",
			Localize("#GameList_Category_EAAccess_Trademark"),
		);
	}
	BIsSystemCollectionId(e) {
		return (
			this.m_mapSystemCollectionIdToName.has(e) ||
			e.startsWith(A8.Recent) ||
			e.startsWith(A8.AppType) ||
			e.startsWith(A8.Shared) ||
			e == A8.SiteLicense
		);
	}
	BIsPartnerCollectionId(e) {
		return this.m_mapPartnerCollectionIdToName.has(e);
	}
	SystemCollectionIdToName(e) {
		if (
			e == A8.AllAppsAlpha &&
			A.n6.bIsGameListGroupedBySharedLibraries &&
			this.sharedLibrariesCollections.length > 0
		) {
			return Localize("#GameList_View_MyOwnGames");
		} else {
			return this.m_mapSystemCollectionIdToName.get(e);
		}
	}
	PartnerCollectionIdToName(e) {
		return this.m_mapPartnerCollectionIdToName.get(e);
	}
	BIsSystemCollectionName(e) {
		return Array.from(this.m_mapSystemCollectionIdToName.values()).some(
			(t) => _.lY(e, t) == 0,
		);
	}
	BIsPartnerCollectionName(e) {
		return Array.from(this.m_mapPartnerCollectionIdToName.values()).some(
			(t) => _.lY(e, t) == 0,
		);
	}
	GetUserCollectionsByName(e) {
		return Array.from(this.collectionsFromStorage.values()).filter(
			(t) => _.lY(e, t.displayName) == 0,
		);
	}
	async AddPartnerCollection(e) {
		const t = {
			id: e,
			name: "ea",
		};
		await this.m_cloudStorageMap.StoreObject(e, t);
		SteamClient.Stats.RecordActivationEvent("Collection", "Add-Partner");
	}
	NewUnsavedCollection(e, t, r) {
		return v.NewCollection(e, t, r);
	}
	async SaveCollection(e) {
		const t = !this.GetCollection(e.id);
		if (t) {
			if (this.BIsSystemCollectionName(e.displayName)) {
				throw new Error("Collection name collision.");
			}
			const t = this.GetUserCollectionsByName(e.displayName);
			for (const e of t) {
				if (e.bIsDeletable) {
					await e.AsDeletableCollection().Delete();
				}
			}
		}
		let r = null;
		this.m_cloudStorageMap.forEach((t, n) => {
			if (n != e.id && k(n) == e.id) {
				r = n;
			}
		});
		if (r) {
			console.log("cleaning up", r);
			delete this.m_shortcutCollectionInfo[r];
		}
		const n = e.ToStorageFormat();
		if (n.localData.added.length + n.localData.removed.length > 0) {
			this.m_shortcutCollectionInfo[e.id] = n.localData;
		} else {
			delete this.m_shortcutCollectionInfo[e.id];
		}
		await this.WriteLocalStorage();
		if (r) {
			this.m_cloudStorageMap.delete(r);
		}
		await this.m_cloudStorageMap.StoreObject(
			e.id,
			n.roamingData,
			c.x2.CustomMethod,
			M,
		);
		SteamClient.Stats.RecordActivationEvent(
			"Collection",
			t ? "Save-New" : "Save-Modify",
		);
	}
	async DeleteCollection(e) {
		(0, g.w)(
			!this.BIsSystemCollectionId(e),
			`Cannot delete system collection ${e}`,
		);
		if (this.GetCollection(e)) {
			l.N.OnDeleteCollection(e);
			delete this.m_shortcutCollectionInfo[e];
			await this.WriteLocalStorage();
			this.m_cloudStorageMap.delete(e);
			SteamClient.Stats.RecordActivationEvent("Collection", "Delete");
			return 1;
		} else {
			return 9;
		}
	}
	async WriteLocalStorage() {
		try {
			await this.m_localStorage.RemoveObject(E);
		} catch {}
		return this.m_localStorage.StoreObject(E, this.m_shortcutCollectionInfo);
	}
}
(0, n.Cg)([i.XI.bound], F.prototype, "OnCloudStorageChanged", null);
(0, n.Cg)([i.XI], F.prototype, "OnAppOverviewChange", null);
(0, n.Cg)([i.XI.bound], F.prototype, "OnFriendOwnedAppsChanged", null);
(0, n.Cg)([C.oI], F.prototype, "BootstrapFromUserTags", null);
(0, n.Cg)([i.XI], F.prototype, "ImportUserTags", null);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"uncategorizedCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"myGamesCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"allGamesCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
			equals: i.m3.structural,
		}),
	],
	F.prototype,
	"sharedLibrariesCollections",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"sharedLibrariesCollectionMap",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
			equals: i.m3.structural,
		}),
	],
	F.prototype,
	"siteLicenseCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"deckGamesCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"dtestGamesCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"xboxControllerGamesCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"ps4ControllerGamesCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"ps5ControllerGamesCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"deckDesktopApps",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"vrAppsCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"localGamesCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"userCollections",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"recentAppCollections",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"recentAppCollectionMap",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"appTypeCollections",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"appTypeCollectionMap",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"allAppsCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"allRecentAppsCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"recentAppsCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"localPlayedGamesCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"recentPurchasedGamesCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"remotePlayCollection",
	null,
);
(0, n.Cg)(
	[
		(0, i.EW)({
			keepAlive: true,
		}),
	],
	F.prototype,
	"remotePlayActiveCollection",
	null,
);
(0, n.Cg)([C.oI], F.prototype, "SetGamepadCollectionFilter", null);
(0, n.Cg)([C.oI], F.prototype, "GetCurrentGamepadFilter", null);
(0, n.Cg)([C.oI], F.prototype, "GetCollection", null);
(0, n.Cg)([C.oI], F.prototype, "GetCollectionIDByUserTag", null);
(0, n.Cg)([C.oI], F.prototype, "GetCollectionForAppType", null);
(0, n.Cg)([C.oI], F.prototype, "GetCollectionListForAppID", null);
(0, n.Cg)([C.oI], F.prototype, "SetAppsAsFavorite", null);
(0, n.Cg)([C.oI], F.prototype, "SetAppsAsHidden", null);
(0, n.Cg)([C.oI], F.prototype, "BIsFavorite", null);
(0, n.Cg)([C.oI], F.prototype, "BIsHidden", null);
(0, n.Cg)([C.oI], F.prototype, "BIsVisible", null);
(0, n.Cg)([C.oI], F.prototype, "BIsSystemCollectionId", null);
(0, n.Cg)([C.oI], F.prototype, "BIsPartnerCollectionId", null);
(0, n.Cg)([C.oI], F.prototype, "SystemCollectionIdToName", null);
(0, n.Cg)([C.oI], F.prototype, "PartnerCollectionIdToName", null);
(0, n.Cg)([C.oI], F.prototype, "BIsSystemCollectionName", null);
(0, n.Cg)([C.oI], F.prototype, "BIsPartnerCollectionName", null);
(0, n.Cg)([C.oI], F.prototype, "GetUserCollectionsByName", null);
(0, n.Cg)([C.oI], F.prototype, "AddPartnerCollection", null);
(0, n.Cg)([C.oI], F.prototype, "NewUnsavedCollection", null);
(0, n.Cg)([C.oI], F.prototype, "SaveCollection", null);
(0, n.Cg)([C.oI], F.prototype, "DeleteCollection", null);
(0, n.Cg)([C.oI], F.prototype, "WriteLocalStorage", null);
export const md = new F();
window.collectionStore = md;
