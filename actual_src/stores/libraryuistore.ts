import {
	observable,
	action,
	makeAutoObservable,
	runInAction,
	autorun,
	when,
} from "mobx";
import { tw as AppStore } from "./96593.js";
import {
	md as CollectionStore,
	A8 as ESystemCollection,
} from "./collectionstore.js";
import { I as GameActionStore } from "./76356.js";
import { b as MultiSelectStore } from "../../src/chunk~2dcc5aaf7/47979.js";
import { q } from "../../src/chunk~2dcc5aaf7/29547.js";
import { A as CStorage_Local } from "../../src/library/88696.js";
import { rV as SettingsStore } from "./settingsstore.js";
import { oy as SteamUIStore, GA } from "./46422.js";
import { zG, E6, gS } from "../../src/chunk~2dcc5aaf7/14629.js";
import { x2 } from "../../src/chunk~2dcc5aaf7/31706.js";
import { AssertMsg } from "../utils/assert.js";
import { TS as Config } from "../../src/library/72476.js";
import { w as w_1 } from "../../src/library/12176.js";
import { pI, Fs } from "../../src/chunk~2dcc5aaf7/64880.js";
import { rV, Bn, hc } from "../../src/chunk~2dcc5aaf7/85606.js";
import { A as CStoreItemCache } from "../../src/chunk~2dcc5aaf7/5859.js";
import { wd as CLogger } from "../../src/library/83599.js";
import { BV as ClientRoutes, Qc } from "../../src/chunk~2dcc5aaf7/18057.js";
import { jR as CParentalFeaturesStore } from "./5640.js";
import { b as CSteamID } from "../../src/library/8573.js";
import { dq } from "../../src/chunk~2dcc5aaf7/13688.js";
import { z } from "../../src/chunk~2dcc5aaf7/49171.js";
import { lF } from "../../src/chunk~2dcc5aaf7/79112.js";
import { qL } from "../../src/chunk~2dcc5aaf7/45967.js";
import { s4, UP } from "../../src/chunk~2dcc5aaf7/36813.js";
import { N } from "../../src/chunk~2dcc5aaf7/31930.js";
import { EAppType } from "../steamclient/steamclient/App.js";
import { EResult } from "../steamclient/steamclient/shared.js";

const logger = new CLogger("LibraryUIStore/BasicUIStore");

export const B6 = 593110;
export const aF = 1675200;
export const gV = 1675180;

const k_strStateStorageKey = Config.IN_STEAMUI_SHARED_CONTEXT
	? "UIStoreLocalSteamUIState"
	: "UIStoreLocalState";

class LibraryState_t {
	nVersion = 1;
	eGameListView = 1;
	collectionFilter;
	collectionFilterGamepad;
	bGroupedByCollection = true;
	bSortedByRecent = false;
	mapCollapsedState = [];
	currentSelection = {};
	bGroupBySharedLibraries = false;
}

class CLibraryUIStore {
	constructor() {
		makeAutoObservable(this);
	}

	m_localStorage = new CStorage_Local();
	m_cm;
	@observable m_bIsCollectionEditorOpen = false;
	@observable m_bIsCollectionRenameOpen = false;
	@observable m_bIsSearchByTypePaneOpen = false;
	@observable m_gameListSelection = undefined;
	@observable m_eSelectedGameListView = undefined;
	@observable m_currentAppFilter = undefined;
	@observable m_collectionsAppFilter = undefined;
	@observable m_collectionsAppFilterGamepad = undefined;
	@observable m_bGameListGroupedByCollection = undefined;
	@observable m_bGameListGroupedBySharedLibraries = undefined;
	@observable m_bGameListSortedByRecent = undefined;
	@observable m_mapLibrarySectionCollapseState: Map<string, boolean> =
		undefined;
	@observable m_RecentGamesFirstApp = undefined;
	m_latchedMostRecentApp;
	@observable m_setStoreSuggestionIds = new Set();
	@observable m_setStoreSuggestions = undefined;
	@observable m_setClientSuggestionIds = new Set();

	get currentUserSteamID() {
		return this.m_cm.steamid;
	}

	async Init(cm) {
		console.time("CUIStore Init");
		this.m_cm = cm;
		GameActionStore.SetShowDurationControlDialogCallback(
			this.ShowDurationControlDialog,
		);
		let state = await this.m_localStorage.GetObject(k_strStateStorageKey);
		if (!state || state.nVersion != 1) {
			state = new LibraryState_t();
		}

		runInAction(() => {
			let t_eGameListView = state.eGameListView;
			this.m_eSelectedGameListView = t_eGameListView || 1;
			this.m_bGameListGroupedByCollection = state.bGroupedByCollection;
			this.m_bGameListGroupedBySharedLibraries = state.bGroupBySharedLibraries;
			this.m_bGameListSortedByRecent = state.bSortedByRecent;
			this.m_mapLibrarySectionCollapseState = new Map(state.mapCollapsedState);
			this.m_gameListSelection = state.currentSelection;
			this.m_collectionsAppFilter = this.InitializeAppFilter(
				state.collectionFilter,
				false,
			);
			this.m_collectionsAppFilterGamepad = this.InitializeAppFilter(
				localStorage.collectionFilterGamepad || localStorage.collectionFilter,
				true,
			);
			this.SaveLocalState();
			this.m_currentAppFilter = this.m_collectionsAppFilter;
		});

		const r =
			this.currentCollectionID &&
			CollectionStore.GetCollection(this.currentCollectionID);
		if (
			this.m_eSelectedGameListView != 1 &&
			(this.m_eSelectedGameListView != 10 || !r)
		) {
			this.SelectGameListView(1);
		}
		SteamClient.Messaging.RegisterForMessages(
			"PostToLibrary",
			this.OnPostMessage,
		);
		autorun(() => {
			const collection = CollectionStore.GetCollection(
				ESystemCollection.Recent,
			);
			if (!collection || collection.visibleApps.length == 0) {
				return;
			}
			const pFirstApp = collection.visibleApps[0];
			if (pFirstApp && pFirstApp.appid != this.m_latchedMostRecentApp) {
				this.m_latchedMostRecentApp = pFirstApp.appid;
				this.SetRecentGamesFirstApp(pFirstApp.appid);
			}
		});
		console.timeEnd("CUIStore Init");
	}

	InitializeAppFilter(e, t) {
		let r = e && zG.FromStorageFormat(e);
		if (r) {
			if (r.GetSelectedOptions(0).length == 0) {
				r.SelectOption(0, EAppType.Game, true);
				r.SelectOption(0, EAppType.Application, true);
				r.SelectOption(0, EAppType.MusicAlbum, true);
				r.SelectOption(0, EAppType.Video, true);
				r.SelectOption(0, EAppType.Tool, true);
			}
			if (!t) {
				for (let group = 1; group <= 6; group++) {
					for (const option of r.GetSelectedOptions(group)) {
						if (group != 1 || option != 2) {
							console.error(
								"Found invalid filter option",
								option,
								"in group",
								group,
								"- clearing",
							);
							r.SelectOption(group, option, false);
						}
					}
				}
			}
		} else {
			r = new zG();
			r.SelectOption(0, EAppType.Game, true);
			r.SelectOption(0, EAppType.Application, true);
			if (t) {
				r.SelectOption(0, EAppType.MusicAlbum, true);
			}
		}
		return r;
	}

	RestoreNavigation() {
		const e = window.history.state?.uistore;
		if (e?.m_eMainPanelMode) {
			let keys = Object.keys(e);
			let r = this;
			for (let n of keys) {
				r[n] = e[n];
			}
		}
	}

	PreserveNavigation() {
		autorun(() => {
			const e = {
				m_RecentGamesFirstApp: this.m_RecentGamesFirstApp,
			};
			window.history.replaceState(
				{
					...(window.history.state ?? {}),
					uistore: e,
				},
				"",
			);
		});
	}

	get currentCollectionID() {
		return this.m_gameListSelection.strCollectionId;
	}
	get currentGameListSelection() {
		return this.m_gameListSelection;
	}

	SetGameListSelection(strCollectionId: string, nAppId: number) {
		if (
			!this.m_gameListSelection ||
			this.m_gameListSelection.nAppId != nAppId ||
			this.m_gameListSelection.nAppId != nAppId ||
			this.m_gameListSelection.strCollectionId != strCollectionId
		) {
			this.m_gameListSelection = {
				strCollectionId,
				nAppId,
			};
			this.SetMultiSelectHooksForGameListSelection();
			this.SaveLocalState();
		}
	}

	get currentAppFilter() {
		return this.m_currentAppFilter;
	}
	get collectionsAppFilter() {
		const e = lF();
		if (dq(e)) {
			return this.m_collectionsAppFilterGamepad;
		} else {
			return this.m_collectionsAppFilter;
		}
	}
	get collectionsAppFilterGamepad() {
		return this.m_collectionsAppFilterGamepad;
	}
	get selectedGameListView() {
		if (this.BIsSearchActive()) {
			return 11;
		} else {
			return this.m_eSelectedGameListView;
		}
	}
	get bIsGameListGroupedByCollection() {
		return this.m_bGameListGroupedByCollection;
	}
	get bIsGameListGroupedBySharedLibraries() {
		return this.m_bGameListGroupedBySharedLibraries;
	}

	@action SetGameListGroupedByCollection(e) {
		this.m_bGameListGroupedByCollection = !!e;
		this.SaveLocalState();
		this.UpdateGameListSelection();
	}

	@action SetGameListGroupedBySharedLibrary(bGrouped: boolean) {
		SteamClient.Stats.RecordActivationEvent(
			"SetGameListGroupedBySharedLibrary",
			bGrouped ? "Enabled" : "Disabled",
		);
		this.m_bGameListGroupedBySharedLibraries = !!bGrouped;
		this.SaveLocalState();
		this.UpdateGameListSelection();
	}

	get bIsGameListSortedByRecent() {
		return this.m_bGameListSortedByRecent;
	}

	@action SetGameListSortedByRecent(bSorted: boolean) {
		this.m_bGameListSortedByRecent = !!bSorted;
		this.SaveLocalState();
		if (!bSorted) {
			this.UpdateGameListSelection();
		}
	}

	@action SelectCollectionsAppFilterOption(e, eAppType: EAppType, r: boolean) {
		this.m_collectionsAppFilter.SelectOption(e, eAppType, r);
		this.SaveLocalState();
	}

	@action SelectGamepadCollectionsAppFilterOption(
		e,
		eAppType: EAppType,
		r: boolean,
	) {
		this.m_collectionsAppFilterGamepad.SelectOption(e, eAppType, r);
		this.SaveLocalState();
	}

	SetMultiSelectHooksForGameListSelection() {
		if (
			!this.currentGameListSelection.nAppId ||
			!this.currentGameListSelection.strCollectionId ||
			!this.currentGameListSelection.strCollectionId ||
			!z.BRouteMatch(ClientRoutes.Library.App.Root())
		) {
			return;
		}
		const e = new q(
			this.currentGameListSelection.nAppId,
			this.currentGameListSelection.strCollectionId,
		);
		MultiSelectStore.SetAnchor(e);
		const t = () =>
			!z.BRouteMatch(ClientRoutes.Library.App.Root()) ||
			e.appid != this.currentGameListSelection.nAppId ||
			e.appid != this.currentGameListSelection.nAppId ||
			e.strCollectionId != this.currentGameListSelection.strCollectionId;
		when(
			() =>
				t() ||
				MultiSelectStore.GetSelectedAppsInContext().filter(
					(t) => t.key != e.key,
				).length > 0,
			() => {
				if (t()) {
					MultiSelectStore.RemoveAnchor(e);
				} else {
					lF().AllCollections();
				}
			},
		);
	}

	@action SelectGameListView(eSearchResult, collectionID?) {
		if (
			eSearchResult != this.selectedGameListView ||
			collectionID != this.currentCollectionID
		) {
			AssertMsg(
				eSearchResult != 11,
				"Should not select kSearchResults explicitly; enter search instead.",
			);
			if (this.selectedGameListView == 11) {
				this.ExitSearch();
			}
			if (eSearchResult == 10) {
				AssertMsg(
					!!collectionID,
					"Should not select single-collection mode without specifying the collection.",
				);
				lF().Collection(collectionID);
				this.SetIsCollapsed(collectionID, false);
			}
			this.m_eSelectedGameListView = eSearchResult;
			this.SaveLocalState();
			this.m_currentAppFilter = this.collectionsAppFilter;
			this.UpdateGameListSelection();
		}
	}

	@bind BIsTextSearchActive() {
		return (
			this.BIsSearchActive() && this.m_currentAppFilter.searchText.length > 0
		);
	}

	@bind BIsSearchByTypeActive() {
		return (
			this.BIsSearchActive() &&
			!this.BIsTextSearchActive() &&
			!this.m_currentAppFilter.bIsEmpty
		);
	}

	@bind BIsSearchActive() {
		return this.m_currentAppFilter != this.collectionsAppFilter;
	}

	@bind BIsSearchByTypePaneOpen() {
		return this.m_bIsSearchByTypePaneOpen;
	}

	@bind SetSearchByTypePaneOpen(bOpen: boolean) {
		this.m_bIsSearchByTypePaneOpen = bOpen;
	}

	@bind ResetSearch() {
		this.m_setStoreSuggestionIds = new Set();
		this.m_setClientSuggestionIds = new Set();
		this.m_currentAppFilter = this.collectionsAppFilter;
		this.UpdateGameListSelection();
		MultiSelectStore.ClearSelection();
		this.SetIsCollapsed(ESystemCollection.Hidden, true);
	}

	@bind ExitSearch() {
		this.ResetSearch();
		this.SetSearchByTypePaneOpen(false);
	}

	@bind async SetSearchText(strText: string) {
		if (!this.BIsSearchActive() && strText.length > 0) {
			AssertMsg(
				!this.BIsSearchActive(),
				"Cannot start text search while other search is already active.",
			);
			MultiSelectStore.ClearSelection();
			this.m_currentAppFilter = new E6();
			SteamClient.Stats.RecordActivationEvent("Search", "Text");
		}
		this.m_currentAppFilter.SetSearchText(strText);
		if (strText.length == 0) {
			this.ResetSearch();
		} else {
			this.FetchSearchSuggestions(strText);
		}
	}

	@bind StartSearchByType(filter) {
		AssertMsg(
			!this.BIsSearchActive(),
			"Cannot start search by type while other search is already active.",
		);
		this.m_currentAppFilter = filter;
		MultiSelectStore.ClearSelection();
		SteamClient.Stats.RecordActivationEvent("Search", "Advanced");
	}

	@bind async FetchSearchSuggestions(strQuery: string) {
		if (strQuery.length < 2) {
			this.m_setStoreSuggestions = [];
			this.m_setStoreSuggestionIds = new Set();
			this.m_setClientSuggestionIds = new Set();
			return;
		}
		{
			const t = w_1.Init(s4);
			t.Body().set_search_term(strQuery);
			t.Body().set_max_results(20);
			let r = await UP.SendMsgSearchAppDataCacheByStoreKeywords(t, N);
			if (this.m_currentAppFilter.searchText == strQuery) {
				if (r.GetEResult() == EResult.OK) {
					this.m_setClientSuggestionIds = new Set(r.Body().appids());
				} else {
					this.m_setClientSuggestionIds = new Set();
				}
			}
		}
		{
			let t = w_1.Init(pI);
			rV(t);
			Bn(t, {
				include_basic_info: true,
				include_assets: true,
			});
			hc(t, {
				type_filters: {
					include_apps: true,
					include_software: true,
				},
			});
			t.Body().set_query_name("LibraryUIStore.FetchSearchSuggestions");
			t.Body().set_search_term(strQuery);
			t.Body().set_max_results(20);
			t.Body().set_use_spellcheck(true);
			let r = await Fs.SearchSuggestions(this.m_cm.GetServiceTransport(), t);
			if (this.m_currentAppFilter.searchText == strQuery) {
				if (r.GetEResult() == EResult.OK) {
					this.m_setStoreSuggestions = CStoreItemCache.Get().ReadResults(
						r.Body().store_items(),
						t.Body().data_request().toObject(),
					);
					this.m_setStoreSuggestionIds = new Set(
						r
							.Body()
							.store_items()
							.map((e) => e.id()),
					);
				} else {
					this.m_setStoreSuggestions = [];
					this.m_setStoreSuggestionIds = new Set();
				}
			}
		}
	}

	BIsSuggestionVisible(appid) {
		return (
			(!CParentalFeaturesStore.BIsFeatureBlocked(1) ||
				AppStore.GetAppOverviewByAppID(appid)?.visible_in_game_list) &&
			!CParentalFeaturesStore.BIsAppBlocked(appid)
		);
	}

	get searchSuggestions() {
		return this.m_setStoreSuggestions?.filter((e) =>
			this.BIsSuggestionVisible(e.GetAppID()),
		);
	}
	get searchSuggestionIds() {
		return new Set(
			Array.from(this.m_setStoreSuggestionIds.values()).filter((e) =>
				this.BIsSuggestionVisible(e),
			),
		);
	}
	get clientSearchSuggestionIds() {
		return new Set(
			Array.from(this.m_setClientSuggestionIds.values()).filter((e) =>
				this.BIsSuggestionVisible(e),
			),
		);
	}
	get isCollectionEditorOpen() {
		return this.m_bIsCollectionEditorOpen;
	}
	get isCollectionRenameOpen() {
		return this.m_bIsCollectionRenameOpen;
	}

	SetCollectionEditorOpen(e) {
		this.m_bIsCollectionEditorOpen = e;
	}

	SetCollectionRenameOpen(e) {
		this.m_bIsCollectionRenameOpen = e;
	}

	@bind IsCollapsed(name: string) {
		if (!this.m_mapLibrarySectionCollapseState.has(name)) {
			const bHidden = name == ESystemCollection.Hidden;
			this.m_mapLibrarySectionCollapseState.set(name, bHidden);
		}
		return this.m_mapLibrarySectionCollapseState.get(name);
	}

	@bind toggleCollapsed(name: string) {
		this.SetIsCollapsed(name, !this.IsCollapsed(name));
	}

	@bind SetIsCollapsed(name: string, bCollapsesd: boolean) {
		this.m_mapLibrarySectionCollapseState.set(name, bCollapsesd);
		this.CleanupCollapseStateMap();
		this.SaveLocalState();
	}

	@bind ExpandAll() {
		this.ExpandOrCollapseAll(false);
	}

	@bind CollapseAll() {
		this.ExpandOrCollapseAll(true);
	}

	@action ExpandOrCollapseAll(state: boolean) {
		let rgCollections = this.GetVisibleCollections();
		for (let collection of rgCollections) {
			this.m_mapLibrarySectionCollapseState.set(collection.id, state);
		}
		this.CleanupCollapseStateMap();
		this.SaveLocalState();
	}

	@action CleanupCollapseStateMap() {
		this.m_mapLibrarySectionCollapseState.forEach((e, t) => {
			if (!CollectionStore.GetCollection(t)) {
				this.m_mapLibrarySectionCollapseState.delete(t);
			}
		});
	}

	@bind GetVisibleCollections() {
		return this.GetCollectionList().filter(
			(e) => e.visibleApps.filter(n6.currentAppFilter.Matches).length > 0,
		);
	}

	@bind GetCollectionList() {
		switch (this.selectedGameListView) {
			case 10: {
				const e =
					!!this.currentCollectionID &&
					CollectionStore.GetCollection(this.currentCollectionID);
				if (e) {
					return [e];
				} else {
					return [];
				}
			}
			case 1: {
				if (this.bIsGameListSortedByRecent) {
					return CollectionStore.recentAppCollections;
				}
				let list = this.bIsGameListGroupedByCollection
					? CollectionStore.userCollections
					: [CollectionStore.allAppsCollection];
				if (CollectionStore.siteLicenseCollection) {
					list = [CollectionStore.siteLicenseCollection].concat(list);
				}
				if (this.bIsGameListGroupedBySharedLibraries) {
					list = list.concat(CollectionStore.sharedLibrariesCollections);
				}
				return list;
			}
			case 11: {
				const list = this.bIsGameListSortedByRecent
					? CollectionStore.recentAppCollections.slice()
					: CollectionStore.appTypeCollections.slice();
				const hidden = CollectionStore.GetCollection(ESystemCollection.Hidden);
				if (hidden) {
					list.push(hidden);
				}
				return list;
			}
		}
	}

	UpdateGameListSelection() {
		const nAppId = this.m_gameListSelection?.nAppId;
		const list = nAppId && this.GetCollectionList();
		if (
			nAppId &&
			(!this.currentCollectionID ||
				!list.find((e) => e.id == this.currentCollectionID))
		) {
			const r = list.find((t) => t.apps.has(nAppId));
			if (r) {
				this.SetIsCollapsed(r.id, false);
				this.SetGameListSelection(r.id, this.m_gameListSelection.nAppId);
			}
			MultiSelectStore.ClearSelection();
		}
	}

	IsGamepadUIWindowActive(e) {
		return SteamUIStore.IsGamepadUIWindowActive(e);
	}

	NavigateForward() {
		const wnd = SteamUIStore.ActiveWindowInstance;
		if (this.IsGamepadUIWindowActive(wnd)) {
			z.m_history.goForward();
		}
	}

	@action NavigateToCollectionSaveDialog(e) {
		const pTag = gS(e);
		if (!pTag) {
			logger.Debug("Ignoring unrecognized tag", e);
			return;
		}
		const { eGroup, option, name } = pTag;
		if (name && CollectionStore.BIsSystemCollectionName(name)) {
			logger.Debug("Ignoring system name", name);
			return;
		}
		if (name && CollectionStore.GetUserCollectionsByName(name).length > 0) {
			const collection = CollectionStore.GetUserCollectionsByName(name)[0];
			logger.Debug("Opening existing collection", name);
			lF().Collection(collection.id);
			return;
		}
		this.ExitSearch();
		const a = new E6();
		a.SelectOption(eGroup, option, true);
		n6.StartSearchByType(a);
		x2(window, name, a);
	}

	ShowSharedAppsInLibrary(e, t) {
		let steamid = new CSteamID(this.currentUserSteamID);
		let n = t.filter((e) => e != steamid.GetAccountID());
		e.Reset();
		e.SelectOption(2, EAppType.Demo, true);
		n.filter((e) => e != steamid.GetAccountID()).forEach((t) => {
			e.SelectOption(6, t, true);
		});
		n6.StartSearchByType(e);
		n6.SetSearchByTypePaneOpen(true);
	}

	@action NavigateToSharedAppsDesktopUI(strJSON: string) {
		let t = JSON.parse(strJSON);
		this.ShowSharedAppsInLibrary(new E6(), t);
	}

	ShowCollectionViewWithAppTypes(...appTypes: EAppType[]) {
		this.SelectGameListView(1);
		this.SetGameListSortedByRecent(false);
		for (const eType of [
			EAppType.Game,
			EAppType.Application,
			EAppType.MusicAlbum,
			EAppType.Video,
			EAppType.Tool,
		]) {
			this.SelectCollectionsAppFilterOption(0, eType, appTypes.includes(eType));
		}
	}

	GetRecentGamesFirstApp() {
		return this.m_RecentGamesFirstApp;
	}

	@action SetRecentGamesFirstApp(e) {
		this.m_RecentGamesFirstApp = e;
	}

	GetActiveWindowInstance() {
		let e = SteamUIStore.ActiveWindowInstance;
		if (qL.IsSteamVRRunning && qL.IsVRHMDAwake) {
			e = SteamUIStore.WindowStore.GetVRWindowInstance();
		}
		return e;
	}

	@action OnPostMessage(e, t, r) {
		this.NavigateLibrary(undefined, t, r);
	}

	@bind OnOpenLibrary(steamURL: string, t) {
		if (SteamUIStore.IsDesktopUIWindowActive(t)) {
			SteamUIStore.WindowStore.EnsureMainWindowCreated();
		}
		if (SettingsStore.clientSettings.small_mode) {
			return;
		}
		steamURL = steamURL.replace(
			"steam://open/bigpicture/librarydetails/",
			"steam://open/library/details/",
		);
		AssertMsg(
			steamURL.startsWith("steam://open/library/") ||
				steamURL.startsWith("steam://open/games/") ||
				steamURL.startsWith("steam://open/games/") ||
				steamURL.startsWith("steam://nav/games/") ||
				steamURL.startsWith("steam://open/games/") ||
				steamURL.startsWith("steam://nav/games/") ||
				steamURL == "steam://open/library" ||
				steamURL.startsWith("steam://open/games/") ||
				steamURL.startsWith("steam://nav/games/") ||
				steamURL == "steam://open/library" ||
				steamURL == "steam://open/games",
			`Bogus url ${steamURL} passed to OnOpenLibrary`,
		);
		const r = steamURL.split("/");
		const n = r.pop();
		const i = r.pop();
		this.NavigateLibrary(t, i, n);
	}

	NavigateLibrary(e, t, r) {
		e = e ?? this.GetActiveWindowInstance();
		if (!this.IsGamepadUIWindowActive(e)) {
			this.ExitSearch();
		}
		const nav = e.Navigator;
		if (t == "open") {
			t = r;
			r = "";
		}
		switch (t) {
			case Qc: {
				return;
			}
			case "games": {
				this.SelectCollectionsAppFilterOption(0, EAppType.Game, true);
			}
			case "library": {
				this.EnsureLargeMode();
				nav.Home();
				return;
			}
			case "view": {
				this.EnsureLargeMode();
				switch (r) {
					case "all": {
						this.ShowCollectionViewWithAppTypes(
							EAppType.Game,
							EAppType.Application,
							EAppType.MusicAlbum,
							EAppType.Video,
							EAppType.Tool,
						);
						this.SelectCollectionsAppFilterOption(
							1,
							EAppType.Application,
							false,
						);
						return;
					}
					case "games": {
						this.ShowCollectionViewWithAppTypes(EAppType.Game);
						return;
					}
					case "soundtracks": {
						this.SelectCollectionsAppFilterOption(0, EAppType.MusicAlbum, true);
						nav.Collection(ESystemCollection.AppType_Soundtracks);
						return;
					}
					case "software": {
						this.ShowCollectionViewWithAppTypes(EAppType.Application);
						return;
					}
					case "videos": {
						this.ShowCollectionViewWithAppTypes(EAppType.Video);
						return;
					}
					case "tools": {
						this.ShowCollectionViewWithAppTypes(EAppType.Tool);
						return;
					}
					case "recent": {
						this.SelectGameListView(1);
						this.SetGameListSortedByRecent(true);
						return;
					}
					case "installed": {
						this.SelectGameListView(1);
						this.SelectCollectionsAppFilterOption(
							1,
							EAppType.Application,
							true,
						);
						return;
					}
					case "all-collections": {
						nav.AllCollections();
						return;
					}
					case "login": {
						if (dq(nav)) {
							nav.Login();
						}
						return;
					}
					default: {
						nav.Home();
						return;
					}
				}
			}
			case "collection": {
				this.EnsureLargeMode();
				if (r == "hidden") {
					this.SelectGameListView(10, r);
				}
				nav.Collection(r);
				return;
			}
			case "details":
				{
					this.EnsureLargeMode();
					let e = r.split("|");
					let t = +e[0];
					let [, i] = e;
					if (AppStore.GetAppOverviewByAppID(t)) {
						nav.App(t, {
							strCollectionId: i,
						});
						return;
					}
				}
				break;
			case "event":
				{
					this.EnsureLargeMode();
					let e = decodeURIComponent(r).split("|");
					let t = +e[0];
					let [, i] = e;
					if (AppStore.GetAppOverviewByAppID(t)) {
						nav.App(t, {
							gidPartnerEvent: i,
						});
						return;
					}
				}
				break;
			case "media": {
				if (dq(nav)) {
					this.EnsureLargeMode();
					nav.Media.Grid();
				}
				return;
			}
			case "downloads": {
				this.EnsureLargeMode();
				nav.Downloads();
				return;
			}
			case "dynamic-collection": {
				this.EnsureLargeMode();
				this.NavigateToCollectionSaveDialog(r);
				return;
			}
			case "shared-apps": {
				if (dq(nav)) {
					SteamClient.Messaging.PostMessage("Library", "shared-apps", r);
				} else {
					nav.Home();
					this.NavigateToSharedAppsDesktopUI(r);
				}
				return;
			}
			default: {
				nav.Home();
			}
		}
		if (this.IsGamepadUIWindowActive(e)) {
			switch (t) {
				case "gameapiosk": {
					z.m_history.push(ClientRoutes.GamepadUI.GameAPIOSK());
					return;
				}
				case "search": {
					z.m_history.push(ClientRoutes.GamepadUI.Search.Tab("All"));
					return;
				}
				case "settings": {
					const e = GamepadRoutes[r] || ClientRoutes.Settings.General;
					z.m_history.push(e());
					return;
				}
				case "settingszoo": {
					z.m_history.push((GA[r] || ClientRoutes.GamepadUI.Zoo.Modals)());
					return;
				}
				case "appproperties":
					{
						const e = r.split("|");
						const t = +e[0];
						const [, i] = e;
						nav.AppProperties(t, i);
					}
					return;
				case "apprunning": {
					SteamUIStore.NavigateToRunningApp(false);
					return;
				}
				case "powermenu": {
					SteamUIStore.OpenPowerMenu(null);
					return;
				}
				case "controllerconfigurator":
					{
						const e = r.split("|");
						const t = +e[0];
						const [, n] = e;
						const i = JSON.parse(e[2]);
						z.m_history.push(
							(
								GamepadControllerRoutes[n] ||
								ClientRoutes.GamepadUI.ControllerConfigurator.Main
							)(t),
							i,
						);
					}
					return;
			}
		}
		console.error("Unrecognized request", t, r);
	}

	EnsureLargeMode() {
		const [bSmallMode, SetSmallMode] =
			SettingsStore.GetClientSetting("small_mode");
		if (bSmallMode) {
			SetSmallMode(false);
		}
	}

	@bind async SaveLocalState() {
		const state = new LibraryState_t();
		state.eGameListView = this.m_eSelectedGameListView;
		state.collectionFilter = this.m_collectionsAppFilter.ToStorageFormat();
		state.collectionFilterGamepad =
			this.m_collectionsAppFilterGamepad.ToStorageFormat();
		state.bGroupedByCollection = this.m_bGameListGroupedByCollection;
		state.bSortedByRecent = this.m_bGameListSortedByRecent;
		state.mapCollapsedState = Array.from(
			this.m_mapLibrarySectionCollapseState,
		).filter((e) => e[1] || e[0] == ESystemCollection.Hidden);
		state.currentSelection = this.m_gameListSelection;
		state.bGroupBySharedLibraries = this.m_bGameListGroupedBySharedLibraries;
		return this.m_localStorage.StoreObject(k_strStateStorageKey, state);
	}

	@bind ShowDurationControlDialog(e) {
		GameActionStore.SetActiveDurationControlHandler(e);
	}
}

export const n6 = new CLibraryUIStore();
window.uiStore = n6;

const GamepadRoutes = {
	general: ClientRoutes.Settings.General,
	display: ClientRoutes.Settings.Display,
	internet: ClientRoutes.Settings.Internet,
	bluetooth: ClientRoutes.Settings.Bluetooth,
	audio: ClientRoutes.Settings.Audio,
	storage: ClientRoutes.Settings.Storage,
	system: ClientRoutes.Settings.System,
	internal: ClientRoutes.Settings.Internal,
	developer: ClientRoutes.Settings.Developer,
	controller: ClientRoutes.Settings.Controller,
	downloads: ClientRoutes.Settings.Downloads,
	remoteplay: ClientRoutes.Settings.RemotePlay,
	library: ClientRoutes.Settings.Library,
	family: ClientRoutes.Settings.Family,
};

const GamepadControllerRoutes = {
	Main: ClientRoutes.GamepadUI.ControllerConfigurator.Main,
	Summary: ClientRoutes.GamepadUI.ControllerConfigurator.Summary,
	Preview: ClientRoutes.GamepadUI.ControllerConfigurator.Preview,
	ActionSets: ClientRoutes.GamepadUI.ControllerConfigurator.ActionSets,
	Buttons: ClientRoutes.GamepadUI.ControllerConfigurator.Buttons,
	Triggers: ClientRoutes.GamepadUI.ControllerConfigurator.Triggers,
	Sticks: ClientRoutes.GamepadUI.ControllerConfigurator.Sticks,
	Touchpads: ClientRoutes.GamepadUI.ControllerConfigurator.Touchpads,
	Gyroscopes: ClientRoutes.GamepadUI.ControllerConfigurator.Gyroscopes,
	VirtualMenus: ClientRoutes.GamepadUI.ControllerConfigurator.VirtualMenus,
	ChooseBinding: ClientRoutes.GamepadUI.ControllerConfigurator.ChooseBinding,
};
