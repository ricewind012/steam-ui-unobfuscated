// Webpack module ID: TODO

import {
	Localize,
	LocalizeCalendarTimeLessGranular,
} from "../utils/localization.js";
import { observable, action, makeAutoObservable, computed, toJS } from "mobx";
import { iI } from "../../src/library/37322.js";
import { qw } from "../../src/library/89748.js";
import { tw as AppOverview } from "./96593.js";
import { N as N_1 } from "../../src/library/16139.js";
import { HB, s7, x2 as EConflictResolutionMethod } from "./81482.js";
import { A as CStorage_Local } from "../../src/library/88696.js";
import { E6, Pj } from "../../src/chunk~2dcc5aaf7/14629.js";
import { O$ } from "../../src/library/48289.js";
import { n6 } from "./libraryuistore";
import { V6 } from "../../src/chunk~2dcc5aaf7/74995.js";
import { AssertMsg } from "../utils/assert.js";
import { oI } from "../../src/library/52451.js";
import { kd, Fw, lY } from "../../src/chunk~2dcc5aaf7/51095.js";
import { ut } from "../../src/library/64004.js";
import { wd as CLogger } from "../../src/library/83599.js";
import "../../src/chunk~2dcc5aaf7/72476.js";
import { bind } from "../utils/bind.js";

interface CollectionApp_t {
	appid: number;
}

const y = new CLogger("CollectionStore");
const loggerCompute = new CLogger("CollectionStore_Compute");

function InitCollection(
	strId: string,
	strName: string,
	rgApps: CollectionApp_t[],
) {
	const collection = new CCollectionBase(strId, strName);
	collection.SetApps(rgApps.map((e) => e.appid));
	return collection;
}

class CCollectionBase {
	m_strId: string;
	@observable m_strName: string = undefined;
	m_mapFilterToAppCounts = new Map();
	@observable m_setApps = new Set<CollectionApp_t>();
	@observable m_rgApps: CollectionApp_t[] = [];

	constructor(strId: string, strName: string) {
		makeAutoObservable(this);
		this.m_strId = strId;
		this.m_strName = strName;
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

	SetApps(rgApps: number[]) {
		this.m_setApps = new Set(rgApps);
		this.m_rgApps = rgApps;
	}

	@computed get allApps() {
		loggerCompute.Debug(
			`Computing allApps for ${this.displayName} (${this.id})`,
		);
		return this.m_rgApps
			.map((e) => AppOverview.GetAppOverviewByAppID(e))
			.filter((e) => !!e);
	}

	UpdateApps(e, t) {}

	UpdateAllApps() {
		this.UpdateApps(AppOverview.allApps, []);
	}

	UpdateFriendOwnedGames(e) {}

	@computed get visibleApps() {
		loggerCompute.Debug(
			`Computing visibleApps for ${this.displayName} (${this.id})`,
		);
		return this.allApps.filter((e) => md.BIsVisible(e));
	}

	GetAppCountWithToolsFilter(e) {
		const e_hash = e.hash;
		if (!this.m_mapFilterToAppCounts.has(e_hash)) {
			this.m_mapFilterToAppCounts.set(
				e_hash,
				this.allApps.filter((t) =>
					this.id == A8.Hidden
						? !t.BIsAppBlocked()
						: !!md.BIsVisible(t) &&
							(!t ||
								t.app_type != 4 ||
								t.app_type != 4 ||
								!!e.BIncludesTools()) &&
							e.Matches(t),
				).length,
			);
			loggerCompute.Debug(
				`Counting apps for ${this.displayName} (${this.id})`,
				e_hash,
				this.m_mapFilterToAppCounts.get(e_hash),
			);
		}
		return this.m_mapFilterToAppCounts.get(e_hash);
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

class CCollection extends CCollectionBase {
	@observable m_filter = undefined;
	@observable m_setAddedManually = undefined;
	@observable m_setRemovedManually = undefined;

	constructor(strId: string, strName: string) {
		super(strId, strName);
		makeAutoObservable(this);
	}

	get displayName() {
		return this.m_strName;
	}

	set displayName(e) {
		this.m_strName = e;
	}

	get allApps() {
		loggerCompute.Debug(
			`Computing allApps for ${this.displayName} (${this.id}), ${
				this.bIsDynamic ? "dynamic" : "static"
			}`,
		);
		return Array.from(this.apps.values())
			.map((e) => AppOverview.GetAppOverviewByAppID(e))
			.filter((e) => !!e)
			.sort(AppOverview.CompareSortAs);
	}

	@action UpdateApps(e, t) {
		const setApps = new Set(this.m_setApps);
		if (this.m_filter && !this.m_filter.bIsEmpty) {
			for (let t of e.filter((e) => e.visible_in_game_list)) {
				if (this.m_filter.Matches(t)) {
					setApps.add(t.appid);
				} else {
					setApps.delete(t.appid);
				}
			}
			for (let e of t) {
				setApps.delete(e);
			}
		} else {
			setApps.clear();
		}
		this.m_setAddedManually.forEach((e) => setApps.add(e));
		this.m_setRemovedManually.forEach((e) => setApps.delete(e));
		if (
			JSON.stringify(Array.from(setApps.values()).sort()) !=
			JSON.stringify(Array.from(this.m_setApps.values()).sort())
		) {
			if (this.m_setApps.size > 0) {
				y.Debug(
					`Change detected for ${this.displayName} (${this.displayName} (${this.id}))`,
					toJS(this.m_setApps),
					"=>",
					setApps,
				);
			}
			this.m_setApps = setApps;
			this.ClearAppCounts();
		}
	}

	@action UpdateFriendOwnedGames(e) {
		if (this.BIncludesFriend(e)) {
			y.Debug(
				`Updating friend ${e} in collection ${this.id} (${this.displayName})`,
			);
			this.UpdateAllApps();
		}
	}

	BIncludesFriend(e) {
		return (this.m_filter?.GetSelectedOptions(6) || []).includes(e);
	}

	get visibleApps() {
		loggerCompute.Debug(
			`Computing visibleApps for ${this.displayName} (${this.id}), ${
				this.bIsDynamic ? "dynamic" : "static"
			}`,
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

	AddApps(rgApps) {
		const t = new Array();
		for (const r of rgApps) {
			t.push(r.appid);
			this.m_setAddedManually.add(r.appid);
			this.m_setRemovedManually.delete(r.appid);
		}
		this.Save();
	}

	RemoveApps(rgApps) {
		const t = new Array();
		for (const r of rgApps) {
			t.push(r.appid);
			this.m_setAddedManually.delete(r.appid);
			if (this.bIsDynamic) {
				this.m_setRemovedManually.add(r.appid);
			}
		}
		this.Save();
	}

	@action FreezeToStatic() {
		this.m_filter = undefined;
		this.m_setAddedManually = new Set(this.apps);
		this.m_setRemovedManually = new Set();
		this.m_setApps.clear();
		this.Save();
	}

	@bind ToStorageFormat() {
		const roamingData = {
			id: this.id,
			name: this.displayName,
			added: [],
			removed: [],
		};
		const localData = {
			id: this.id,
			added: [],
			removed: [],
		};
		if (this.m_filter) {
			roamingData.filterSpec = this.m_filter.ToStorageFormat();
		}
		for (const r of this.m_setAddedManually) {
			(AppOverview.GetAppOverviewByAppID(r)?.BIsModOrShortcut()
				? localData
				: roamingData
			).added.push(r);
		}
		for (const r of this.m_setRemovedManually) {
			(AppOverview.GetAppOverviewByAppID(r)?.BIsModOrShortcut()
				? localData
				: roamingData
			).removed.push(r);
		}
		return {
			roamingData,
			localData,
		};
	}

	@bind MergeFromStorageFormat(data) {
		const { roamingData, localData } = data;
		this.m_setAddedManually = new Set();
		this.m_setRemovedManually = new Set();
		if (md.BIsPartnerCollectionId(this.id)) {
			this.m_filter = E6.ForPartner(this.id);
		} else {
			this.m_filter =
				roamingData.filterSpec && E6.FromStorageFormat(roamingData.filterSpec);
			if (roamingData.added) {
				D(roamingData.added, this.m_setAddedManually);
			}
			if (localData && localData.added) {
				D(localData.added, this.m_setAddedManually);
			}
			if (this.bIsDynamic) {
				if (roamingData.removed) {
					D(roamingData.removed, this.m_setRemovedManually);
				}
				if (localData && localData.removed) {
					D(localData.removed, this.m_setRemovedManually);
				}
			}
		}
		this.UpdateAllApps();
	}

	static FromStorageFormat(e) {
		const t = new CCollection(e.roamingData.id, e.roamingData.name);
		t.MergeFromStorageFormat(e);
		return t;
	}

	static NewCollection(strName: string, filter, rgApps) {
		const pCollection = new CCollection(
			k(
				(() => {
					const e = new Uint8Array(9);
					window.crypto.getRandomValues(e);
					return `uc-${iI(e)}`;
				})(),
			),
			strName,
		);
		pCollection.m_filter = filter;
		pCollection.m_setAddedManually = new Set(rgApps.map((e) => e.appid));
		pCollection.m_setRemovedManually = new Set();
		pCollection.UpdateAllApps();
		return pCollection;
	}

	static FromUserTag(e, t) {
		const pCollection = new CCollection(k(`from-tag-${e}`), e);
		pCollection.m_filter = undefined;
		pCollection.m_setAddedManually = new Set(t.map((e) => e.appid));
		pCollection.m_setRemovedManually = new Set();
		pCollection.UpdateAllApps();
		return pCollection;
	}

	static NewSystemCollection(strId: string, rgApps) {
		const pCollection = new CCollection(
			strId,
			md.SystemCollectionIdToName(strId),
		);
		pCollection.m_filter = undefined;
		pCollection.m_setAddedManually = new Set(rgApps.map((e) => e.appid));
		pCollection.m_setRemovedManually = new Set();
		pCollection.UpdateAllApps();
		return pCollection;
	}
}

const I = "collection-bootstrap-complete";
const k_strShortcutInfoStoragegKey = "user-collections";
const M = "union-collections";

export enum A8 {
	Favorites = "favorite",
	Uncategorized = "uncategorized",
	Hidden = "hidden",
	AllAppsAlpha = "all-apps-alpha",
	AllAppsRecent = "all-apps-recent",
	MyGames = "my-games",
	SiteLicense = "site-license",
	Recent = "recent",
	Shared = "shared-",
	FamilyGroup = "shared-familygroup",
	DeckGames = "deck-games",
	DTst1Games = "dtst1-games",
	LocalGames = "local-install",
	AllGames = "all-games",
	LocalPlayed = "local-played",
	RecentPurchased = "recent-purchased",
	DeckDesktopApps = "deck-desktop-apps",
	RemotePlay = "remote-play",
	RemotePlayActive = "remote-play-active",
	VR = "vr",
	Xbox = "xbox",
	PS4 = "ps4",
	PS5 = "ps5",
	AppType = "type-",
	AppType_Games = "type-games",
	AppType_Soundtracks = "type-music",
	AppType_Software = "type-software",
	AppType_Videos = "type-videos",
	AppType_Tools = "type-tools",
}

const R = "favorite";

function k(e) {
	return e.replace(/[%/]/g, (e, t) => {
		switch (e) {
			case "%": {
				return "**";
			}
			case "/": {
				return "*+";
			}
			default: {
				return e;
			}
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
				return new HB(
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

class CCollectionStore {
	m_localStorage = new CStorage_Local();
	m_cloudStorage;
	m_cloudStorageMap;
	m_shortcutCollectionInfo = {};
	m_mapSystemCollectionIdToName;
	m_mapPartnerCollectionIdToName;
	m_mapCollectionsFromStorage;

	constructor() {
		makeAutoObservable(this);
	}

	async Register() {
		s7.RegisterCustomConflictResolutionMethod(M, N);
	}

	@action OnCloudStorageChanged(e, t: string[]) {
		y.Debug("Change received", e, t);
		this.m_mapCollectionsFromStorage ||= observable.map([], {
			deep: false,
		});
		for (let e of t) {
			if (!e.startsWith(`${k_strShortcutInfoStoragegKey}.`)) {
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
				this.m_mapCollectionsFromStorage.set(
					t,
					CCollection.FromStorageFormat(e),
				);
				const r = this.m_mapCollectionsFromStorage.get(t);
				r.UpdateAllApps();
				r.allApps;
			} else {
				this.m_mapCollectionsFromStorage.delete(t);
			}
		}
		y.Debug(this.m_mapCollectionsFromStorage);
	}

	async Init(storage) {
		this.m_cloudStorage = storage;
		this.InitSystemCollectionNameMap();
		this.InitPartnerCollectionNameMap();
		this.m_shortcutCollectionInfo =
			(await this.m_localStorage.GetObject(k_strShortcutInfoStoragegKey)) || {};
		this.m_cloudStorageMap = this.m_cloudStorage.GetMapForPrefix(
			`${k_strShortcutInfoStoragegKey}.`,
		);
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

	@action OnAppOverviewChange(e, t) {
		if (this.m_mapCollectionsFromStorage) {
			for (let r of this.collectionsFromStorage.values()) {
				r.UpdateApps(e, t);
			}
		}
	}

	@action OnFriendOwnedAppsChanged(e) {
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

	@bind async BootstrapFromUserTags(e, t) {
		y.Warning(
			"Could not load stored collections; converting user tags instead.",
		);
		y.Warning("Reason:", e);
		const data = await SteamClient.Apps.GetLibraryBootstrapData();
		const msg = V6.deserializeBinary(data);
		return this.ImportUserTags(
			msg,
			EConflictResolutionMethod.InitializationOnly,
			t,
		);
	}

	@action async ImportUserTags(protoMsg, method: EConflictResolutionMethod, r) {
		const n = new Map();
		const i = new Map();
		const a = [];
		const s = [];
		for (const data of protoMsg.app_data()) {
			const overview = AppOverview.GetAppOverviewByAppID(data.appid());
			if (overview) {
				for (const s of data.user_tag()) {
					const t = s.toLocaleLowerCase();
					if (kd(t, R) == 0) {
						a.push(overview);
					} else if (!r) {
						if (!i.has(t)) {
							i.set(t, s);
							n.set(s, []);
						}
						const r = i.get(t);
						n.get(r).push(overview);
					}
				}
				if (data.hidden()) {
					s.push(overview);
				}
			} else {
				y.Warning("Cannot import user tags from unknown app #", data.appid());
			}
		}
		const rgSysCollections: CCollection[] = [];
		rgSysCollections.push(CCollection.NewSystemCollection(A8.Favorites, a));
		n.forEach((e, index) => {
			rgSysCollections.push(CCollection.FromUserTag(index, e));
		});
		rgSysCollections.push(CCollection.NewSystemCollection(A8.Hidden, s));
		this.m_shortcutCollectionInfo = {};
		const rgPromises = [];
		for (const collection of rgSysCollections) {
			const data = collection.ToStorageFormat();
			if (data.localData.added.length + data.localData.removed.length > 0) {
				this.m_shortcutCollectionInfo[collection.id] = data.localData;
			}
			rgPromises.push(
				this.m_cloudStorageMap.StoreObject(
					collection.id,
					data.roamingData,
					method,
				),
			);
		}
		rgPromises.push(this.WriteLocalStorage());
		await Promise.all(rgPromises);
		await this.m_cloudStorage.StoreString(I, "true", method);
	}

	@computed get uncategorizedCollection() {
		let collection: CCollectionBase;
		loggerCompute.Debug("Computing uncategorizedCollection");
		const setApps = new Set();
		function PutAppsIntoSet(rgApps) {
			for (let app of rgApps || []) {
				setApps.add(app);
			}
		}
		this.collectionsFromStorage.forEach((collection, index) => {
			if (index != A8.Hidden) {
				PutAppsIntoSet(collection.apps);
			}
		});
		PutAppsIntoSet(this.siteLicenseCollection?.apps);
		PutAppsIntoSet(this.GetCollectionForAppType(8192)?.apps);
		if (n6.bIsGameListGroupedBySharedLibraries) {
			this.sharedLibrariesCollections.forEach((e) => {
				PutAppsIntoSet(e.apps);
			});
		}
		if (setApps.size > 0) {
			const rgApps = AppOverview.allApps.filter((e) => !setApps.has(e.appid));
			collection = InitCollection(
				A8.Uncategorized,
				this.SystemCollectionIdToName(A8.Uncategorized),
				rgApps,
			);
		} else {
			collection = InitCollection(
				A8.Uncategorized,
				this.SystemCollectionIdToName(A8.AllAppsAlpha),
				AppOverview.allApps,
			);
		}
		return collection;
	}

	@computed get myGamesCollection() {
		loggerCompute.Debug("Computing myGamesCollection");
		let e = this.GetCollectionForAppType(1).allApps.filter(
			(e) => e.BIsOwned() && !e.BIsBorrowed(),
		);
		return InitCollection(A8.MyGames, Localize("#GameList_View_MyOwnGames"), e);
	}

	@computed get allGamesCollection() {
		loggerCompute.Debug("Computing allGamesCollection");
		let e = this.GetCollectionForAppType(1).allApps;
		if (n6.IsGamepadUIWindowActive()) {
			e = e.filter((e) => !e.BIsShortcut());
		}
		return InitCollection(A8.MyGames, Localize("#GameList_View_All"), e);
	}

	BIncludeInFamilyGroupCollection(e) {
		return qw().BIsFamilyGroupMember(e.owner_account_id);
	}

	BIncludeInSharedLibraryCollection(e) {
		return e.BIsOwnedByAnotherUser();
	}

	@computed get sharedLibrariesCollections() {
		loggerCompute.Debug("Computing sharedLibrariesCollections");
		const e:CCollectionBase[] = [];
		let t = [];
		if (qw().BIsInFamilyGroup()) {
			t = AppOverview.allApps.filter((e) =>
				this.BIncludeInFamilyGroupCollection(e),
			);
			e.push(
				InitCollection(
					A8.FamilyGroup,
					Localize(
						"#GameList_View_FamilyGroup",
						qw().GetCurrentUser().strFamilyGroupName,
					),
					t,
				),
			);
		}
		const r = new Map();
		for (const e of AppOverview.allApps) {
			if (!t.includes(e) && this.BIncludeInSharedLibraryCollection(e)) {
				let t = r.get(e.owner_account_id);
				if (!t) {
					t = [];
					r.set(e.owner_account_id, t);
				}
				t.push(e);
			}
		}
		for (const e of N_1.showcases) {
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
				InitCollection(
					`${A8.Shared}${r}`,
					Localize(
						"#GameList_View_GamesSharedByOther",
						O$.GetFriendState(r).display_name,
					),
					t,
				),
			),
		);
		return e;
	}

	@computed get sharedLibrariesCollectionMap() {
		loggerCompute.Debug("Computing sharedLibrariesCollectionMap");
		return new Map(this.sharedLibrariesCollections.map((e) => [e.id, e]));
	}

	@computed get siteLicenseCollection() {
		loggerCompute.Debug("Computing siteLicenseCollection");
		if (!AppOverview.siteLicenseApps) {
			return null;
		}
		const { strSiteName, rgApps } = AppOverview.siteLicenseApps;
		return InitCollection(
			A8.SiteLicense,
			Localize("#GameList_View_GamesProvidedByNamedCafe", strSiteName),
			rgApps,
		);
	}

	@computed get deckGamesCollection() {
		loggerCompute.Debug("Computing neptuneGamesCollection");
		if (n6.IsGamepadUIWindowActive()) {
			let e = this.GetCollectionForAppType(1).allApps.filter((e) =>
				e.BIsSteamDeckVerified(),
			);
			return InitCollection(
				A8.DeckGames,
				Localize("#GameList_View_DeviceGames"),
				e,
			);
		}
		return null;
	}

	// TODO: what lol
	@computed get dtestGamesCollection(): null {
		n6.IsGamepadUIWindowActive();
		return null;
	}

	@computed get xboxControllerGamesCollection() {
		loggerCompute.Debug("Computing xboxControllerGamesCollection");
		if (n6.IsGamepadUIWindowActive()) {
			let e = this.GetCollectionForAppType(1).allApps.filter(
				(e) => e.BHasStoreCategory(28) || e.BHasStoreCategory(18),
			);
			return InitCollection(A8.Xbox, Localize("#GameList_View_DeviceGames"), e);
		}
		return null;
	}

	@computed get ps4ControllerGamesCollection() {
		loggerCompute.Debug("Computing ps4ControllerGamesCollection");
		if (n6.IsGamepadUIWindowActive()) {
			let e = this.GetCollectionForAppType(1).allApps.filter((e) =>
				e.BHasStoreCategory(55),
			);
			return InitCollection(A8.PS4, Localize("#GameList_View_DeviceGames"), e);
		}
		return null;
	}

	@computed get ps5ControllerGamesCollection() {
		loggerCompute.Debug("Computing ps5ControllerGamesCollection");
		if (n6.IsGamepadUIWindowActive()) {
			let e = this.GetCollectionForAppType(1).allApps.filter((e) =>
				e.BHasStoreCategory(57),
			);
			return InitCollection(A8.PS5, Localize("#GameList_View_DeviceGames"), e);
		}
		return null;
	}

	@computed get deckDesktopApps() {
		loggerCompute.Debug("Computing deckDesktopApps");
		if (n6.IsGamepadUIWindowActive()) {
			let e = this.GetCollectionForAppType(1).allApps.filter((e) =>
				e.BIsShortcut(),
			);
			return InitCollection(
				A8.DeckDesktopApps,
				Localize("#GameList_View_NonSteamGames"),
				e,
			);
		}
		return null;
	}

	@computed get vrAppsCollection() {
		loggerCompute.Debug("Computing vrAppsCollection");
		let rgApps = this.allRecentAppsCollection.allApps.filter((e) =>
			e.BSupportsVR(),
		);
		return InitCollection(A8.VR, Localize("#GameList_View_ShowOnlyVR"), rgApps);
	}

	@computed get localGamesCollection() {
		loggerCompute.Debug("Computing localGamesCollection");
		let e = this.GetCollectionForAppType(1).allApps.filter(
			(e) => e.local_per_client_data?.installed,
		);
		if (n6.IsGamepadUIWindowActive()) {
			e = e.filter((e) => !e.BIsShortcut());
		}
		return InitCollection(
			A8.LocalGames,
			Localize("#GameList_View_LocalGames"),
			e,
		);
	}

	@computed get userCollections() {
		loggerCompute.Debug("Computing userCollections");
		const e = Array.from(this.collectionsFromStorage.values())
			.filter((e) => !this.BIsSystemCollectionId(e.id))
			.sort((e, t) => Fw(e.displayName, t.displayName)) as CCollectionBase[];
		if (n6.IsGamepadUIWindowActive()) {
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

	@computed get recentAppCollections() {
		loggerCompute.Debug("Computing recentAppCollections");
		const rgCollections: CCollectionBase[] = [];
		const rgRecentApps = this.allRecentAppsCollection.allApps;
		let strName: string;
		let nIndex = 0;
		const dt = new Date();
		dt.setFullYear(dt.getFullYear() - 10);
		const a = dt.getTime() / 1000;

		rgRecentApps.forEach((app, index) => {
			const text =
				app.rt_recent_activity_time < a
					? Localize("#GameList_SectionHeader_NoRecentActivity")
					: LocalizeCalendarTimeLessGranular(app.rt_recent_activity_time);
			if (text != strName) {
				if (strName) {
					rgCollections.push(
						InitCollection(
							`${A8.Recent}-${strName}`,
							strName,
							rgRecentApps.slice(nIndex, index),
						),
					);
				}
				strName = text;
				nIndex = index;
			}
		});

		if (strName) {
			rgCollections.push(
				InitCollection(
					`${A8.Recent}-${strName}`,
					strName,
					rgRecentApps.slice(nIndex, rgRecentApps.length),
				),
			);
		}
		return rgCollections;
	}

	@computed get recentAppCollectionMap() {
		loggerCompute.Debug("Computing recentAppCollectionMap");
		return new Map(this.recentAppCollections.map((e) => [e.id, e]));
	}

	@computed get appTypeCollections() {
		loggerCompute.Debug("Computing appTypeCollections");
		const e = new Map();
		for (const t of AppOverview.allApps) {
			let r = e.get(t.canonicalAppType);
			if (!r) {
				r = [];
				e.set(t.canonicalAppType, r);
			}
			r.push(t);
		}
		return [
			InitCollection(A8.AppType_Games, Localize("#AppType_1"), e.get(1) || []),
			InitCollection(
				A8.AppType_Software,
				Localize("#AppType_2"),
				e.get(2) || [],
			),
			InitCollection(
				A8.AppType_Soundtracks,
				Localize("#AppType_2000"),
				e.get(8192) || [],
			),
			InitCollection(
				A8.AppType_Videos,
				Localize("#AppType_800"),
				e.get(2048) || [],
			),
			InitCollection(A8.AppType_Tools, Localize("#AppType_4"), e.get(4) || []),
		];
	}

	@computed get appTypeCollectionMap() {
		loggerCompute.Debug("Computing appTypeCollectionMap");
		return new Map(this.appTypeCollections.map((e) => [e.id, e]));
	}

	@computed get allAppsCollection() {
		loggerCompute.Debug("Computing allAppsCollection");
		let e = AppOverview.allApps;
		if (n6.bIsGameListGroupedBySharedLibraries) {
			e = e.filter((e) => e.BIsOwned() && !e.BIsBorrowed());
		}
		return InitCollection(
			A8.AllAppsAlpha,
			this.SystemCollectionIdToName(A8.AllAppsAlpha),
			e,
		);
	}

	@computed get allRecentAppsCollection() {
		loggerCompute.Debug("Computing allRecentAppsCollection");
		return InitCollection(
			A8.AllAppsRecent,
			this.SystemCollectionIdToName(A8.AllAppsRecent),
			AppOverview.allApps
				.slice()
				.sort(
					(e, t) =>
						t.rt_recent_activity_time - e.rt_recent_activity_time ||
						t.appid - e.appid,
				),
		);
	}

	@computed get recentAppsCollection() {
		loggerCompute.Debug("Computing recentAppsCollection");
		return InitCollection(
			A8.Recent,
			this.SystemCollectionIdToName(A8.Recent),
			this.allRecentAppsCollection.allApps.filter(
				(e) => e.mru_index !== undefined,
			),
		);
	}

	@computed get localPlayedGamesCollection() {
		loggerCompute.Debug("Computing localPlayedGamesCollection");
		return InitCollection(
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

	@computed get recentPurchasedGamesCollection() {
		loggerCompute.Debug("Computing recentPurchasedGamesCollection");
		const e = Math.floor(Date.now() / 1000) - 604800;
		return InitCollection(
			A8.RecentPurchased,
			this.SystemCollectionIdToName(A8.RecentPurchased),
			AppOverview.allApps
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

	@computed get remotePlayCollection() {
		loggerCompute.Debug("Computing remotePlayCollection");
		let e = AppOverview.allApps.filter(
			(e) =>
				e.BHasStoreCategory(41) ||
				e.BHasStoreCategory(42) ||
				e.BHasStoreCategory(42) ||
				e.BHasStoreCategory(43),
		);
		return InitCollection(
			A8.RemotePlay,
			this.SystemCollectionIdToName(A8.RemotePlay),
			e,
		);
	}

	@computed get remotePlayActiveCollection() {
		loggerCompute.Debug("Computing remotePlayActiveCollection");
		const {
			bStreaming,
			bStreamingToPhone,
			bStreamingToTablet,
			bStreamingToTV,
		} = ut.GetStreamingFormFactors();
		let i = AppOverview.allApps.filter(
			(i) =>
				!!i.local_per_client_data?.installed &&
				!!bStreaming &&
				(!bStreamingToPhone || !!i.BHasStoreCategory(41)) &&
				(!bStreamingToTablet || !!i.BHasStoreCategory(42)) &&
				(!bStreamingToTV || !!i.BHasStoreCategory(43)),
		);
		return InitCollection(
			A8.RemotePlay,
			this.SystemCollectionIdToName(A8.RemotePlay),
			i,
		);
	}

	SetGamepadCollectionFilter(e) {
		if (Pj(e)) {
			n6.SelectGamepadCollectionsAppFilterOption(2, e, true);
		}
	}

	GetCurrentGamepadFilter() {
		return n6.collectionsAppFilterGamepad.GetCurrentSteamDeckCompatOption();
	}

	BHasNonGamepadOptions() {
		return n6.collectionsAppFilterGamepad.BHasNonGamepadOptions();
	}

	GetCollection(collectionID: string): CCollectionBase | null {
		if (collectionID) {
			if (collectionID == A8.AllAppsAlpha) {
				return this.allAppsCollection;
			} else if (collectionID == A8.AllAppsRecent) {
				return this.allRecentAppsCollection;
			} else if (collectionID == A8.Recent) {
				return this.recentAppsCollection;
			} else if (collectionID == A8.Uncategorized) {
				return this.uncategorizedCollection;
			} else if (collectionID == A8.MyGames) {
				return this.myGamesCollection;
			} else if (collectionID == A8.DeckGames) {
				return this.deckGamesCollection;
			} else if (collectionID == A8.DTst1Games) {
				return this.dtestGamesCollection;
			} else if (collectionID == A8.SiteLicense) {
				return this.siteLicenseCollection;
			} else if (collectionID == A8.LocalGames) {
				return this.localGamesCollection;
			} else if (collectionID == A8.AllGames) {
				return this.allGamesCollection;
			} else if (collectionID == A8.LocalPlayed) {
				return this.localPlayedGamesCollection;
			} else if (collectionID == A8.RecentPurchased) {
				return this.recentPurchasedGamesCollection;
			} else if (collectionID == A8.DeckDesktopApps) {
				return this.deckDesktopApps;
			} else if (collectionID == A8.RemotePlay) {
				return this.remotePlayCollection;
			} else if (collectionID == A8.RemotePlayActive) {
				return this.remotePlayActiveCollection;
			} else if (collectionID == A8.VR) {
				return this.vrAppsCollection;
			} else if (collectionID == A8.Xbox) {
				return this.xboxControllerGamesCollection;
			} else if (collectionID == A8.PS4) {
				return this.ps4ControllerGamesCollection;
			} else if (collectionID == A8.PS5) {
				return this.ps5ControllerGamesCollection;
			} else if (
				collectionID == "recent-games" ||
				collectionID == "play-next" ||
				collectionID == "play-next" ||
				collectionID == "all-collections"
			) {
				return null;
			} else {
				return (
					this.collectionsFromStorage.get(collectionID) ||
					this.collectionsFromStorage.get(k(collectionID)) ||
					this.collectionsFromStorage.get(k(collectionID)) ||
					this.recentAppCollectionMap.get(collectionID) ||
					this.collectionsFromStorage.get(k(collectionID)) ||
					this.recentAppCollectionMap.get(collectionID) ||
					this.appTypeCollectionMap.get(collectionID) ||
					this.collectionsFromStorage.get(k(collectionID)) ||
					this.recentAppCollectionMap.get(collectionID) ||
					this.appTypeCollectionMap.get(collectionID) ||
					this.sharedLibrariesCollectionMap.get(collectionID)
				);
			}
		} else {
			return null;
		}
	}

	GetCollectionIDByUserTag(e) {
		if (lY(e, R) == 0) {
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
			case 1: {
				return this.appTypeCollectionMap.get(A8.AppType_Games);
			}
			case 8192: {
				return this.appTypeCollectionMap.get(A8.AppType_Soundtracks);
			}
			case 2: {
				return this.appTypeCollectionMap.get(A8.AppType_Software);
			}
			case 2048: {
				return this.appTypeCollectionMap.get(A8.AppType_Videos);
			}
			case 4: {
				return this.appTypeCollectionMap.get(A8.AppType_Tools);
			}
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
			.map((e) => AppOverview.GetAppOverviewByAppID(e))
			.filter((e) => e !== undefined);
		if (t) {
			n.AddApps(i);
		} else {
			n.RemoveApps(i);
		}
	}

	@bind SetAppsAsFavorite(e, t) {
		this.AddOrRemoveApp(e, t, A8.Favorites);
	}

	@bind SetAppsAsHidden(e, t) {
		this.AddOrRemoveApp(e, t, A8.Hidden);
	}

	@bind BIsFavorite(e) {
		const t = typeof e == "number" ? e : e.appid;
		const r = this.collectionsFromStorage.get(A8.Favorites);
		return !r || r.apps.has(t);
	}

	@bind BIsHidden(e) {
		const t = typeof e == "number" ? e : e.appid;
		const r = this.collectionsFromStorage.get(A8.Hidden);
		return !r || r.apps.has(t);
	}

	@bind BIsVisible(e) {
		const t = typeof e == "number" ? AppOverview.GetAppOverviewByAppID(e) : e;
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

	@bind BIsSystemCollectionId(e) {
		return (
			this.m_mapSystemCollectionIdToName.has(e) ||
			e.startsWith(A8.Recent) ||
			e.startsWith(A8.Recent) ||
			e.startsWith(A8.AppType) ||
			e.startsWith(A8.Recent) ||
			e.startsWith(A8.AppType) ||
			e.startsWith(A8.Shared) ||
			e.startsWith(A8.Recent) ||
			e.startsWith(A8.AppType) ||
			e.startsWith(A8.Shared) ||
			e == A8.SiteLicense
		);
	}

	@bind BIsPartnerCollectionId(e) {
		return this.m_mapPartnerCollectionIdToName.has(e);
	}

	@bind SystemCollectionIdToName(e) {
		if (
			e == A8.AllAppsAlpha &&
			n6.bIsGameListGroupedBySharedLibraries &&
			this.sharedLibrariesCollections.length > 0
		) {
			return Localize("#GameList_View_MyOwnGames");
		} else {
			return this.m_mapSystemCollectionIdToName.get(e);
		}
	}

	@bind PartnerCollectionIdToName(e) {
		return this.m_mapPartnerCollectionIdToName.get(e);
	}

	@bind BIsSystemCollectionName(e) {
		return Array.from(this.m_mapSystemCollectionIdToName.values()).some(
			(t) => lY(e, t) == 0,
		);
	}

	@bind BIsPartnerCollectionName(e) {
		return Array.from(this.m_mapPartnerCollectionIdToName.values()).some(
			(t) => lY(e, t) == 0,
		);
	}

	@bind GetUserCollectionsByName(e) {
		return Array.from(this.collectionsFromStorage.values()).filter(
			(t) => lY(e, t.displayName) == 0,
		) as CCollectionBase[];
	}

	@bind async AddPartnerCollection(e) {
		const t = {
			id: e,
			name: "ea",
		};
		await this.m_cloudStorageMap.StoreObject(e, t);
		SteamClient.Stats.RecordActivationEvent("Collection", "Add-Partner");
	}

	@bind NewUnsavedCollection(strName, filter, rgApps) {
		return CCollection.NewCollection(strName, filter, rgApps);
	}

	@bind async SaveCollection(e) {
		const t = !this.GetCollection(e.id);
		if (t) {
			if (this.BIsSystemCollectionName(e.displayName)) {
				throw new Error("Collection name collision.");
			}
			const t = this.GetUserCollectionsByName(e.displayName);
			for (const collection of t) {
				if (collection.bIsDeletable) {
					await collection.AsDeletableCollection().Delete();
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
			EConflictResolutionMethod.CustomMethod,
			M,
		);
		SteamClient.Stats.RecordActivationEvent(
			"Collection",
			t ? "Save-New" : "Save-Modify",
		);
	}

	@bind async DeleteCollection(e) {
		AssertMsg(
			!this.BIsSystemCollectionId(e),
			`Cannot delete system collection ${e}`,
		);
		if (this.GetCollection(e)) {
			N_1.OnDeleteCollection(e);
			delete this.m_shortcutCollectionInfo[e];
			await this.WriteLocalStorage();
			this.m_cloudStorageMap.delete(e);
			SteamClient.Stats.RecordActivationEvent("Collection", "Delete");
			return 1;
		} else {
			return 9;
		}
	}

	@bind async WriteLocalStorage() {
		try {
			await this.m_localStorage.RemoveObject(k_strShortcutInfoStoragegKey);
		} catch {}
		return this.m_localStorage.StoreObject(
			k_strShortcutInfoStoragegKey,
			this.m_shortcutCollectionInfo,
		);
	}
}

Cg([oI], CCollectionStore.prototype, "SetGamepadCollectionFilter", null);
Cg([oI], CCollectionStore.prototype, "GetCurrentGamepadFilter", null);
Cg([oI], CCollectionStore.prototype, "GetCollection", null);
Cg([oI], CCollectionStore.prototype, "GetCollectionIDByUserTag", null);
Cg([oI], CCollectionStore.prototype, "GetCollectionForAppType", null);
Cg([oI], CCollectionStore.prototype, "GetCollectionListForAppID", null);

export const md = new CCollectionStore();
window.collectionStore = md;
