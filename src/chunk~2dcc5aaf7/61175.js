import n, { Cg } from "./34629.js";
import i, { Gn, h5, fm, z7 } from "./89193.js";
import a from "./96593.js";
import s from "./96000.js";
import o from "./76356.js";
import l from "./47979.js";
import c from "./29547.js";
import m from "./88696.js";
import u from "./34792.js";
import d from "./46422.js";
import A, { gS } from "./14629.js";
import { x2 } from "./31706.js";
import { w as w_1 } from "./49455.js";
import h from "./52451.js";
import C from "./72476.js";
import _ from "./12176.js";
import f from "./64880.js";
import b, { rV, Bn, hc } from "./85606.js";
import y from "./5859.js";
import S from "./83599.js";
import w from "./18057.js";
import B from "./5640.js";
import v from "./8573.js";
import I, { dq } from "./13688.js";
import E from "./49171.js";
import { lF } from "./79112.js";
import T from "./45967.js";
import R from "./36813.js";
import k from "./31930.js";
const D = new S.wd("LibraryUIStore/BasicUIStore");
export const B6 = 593110;
export const aF = 1675200;
export const gV = 1675180;
const O = C.TS.IN_STEAMUI_SHARED_CONTEXT
	? "UIStoreLocalSteamUIState"
	: "UIStoreLocalState";
class P {
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
class L {
	constructor() {
		Gn(this);
	}
	m_localStorage = new m.A();
	m_cm;
	m_bIsCollectionEditorOpen = false;
	m_bIsCollectionRenameOpen = false;
	m_bIsSearchByTypePaneOpen = false;
	m_gameListSelection = undefined;
	m_eSelectedGameListView = undefined;
	m_currentAppFilter = undefined;
	m_collectionsAppFilter = undefined;
	m_collectionsAppFilterGamepad = undefined;
	m_bGameListGroupedByCollection = undefined;
	m_bGameListGroupedBySharedLibraries = undefined;
	m_bGameListSortedByRecent = undefined;
	m_mapLibrarySectionCollapseState = undefined;
	m_RecentGamesFirstApp = undefined;
	m_latchedMostRecentApp;
	m_setStoreSuggestionIds = new Set();
	m_setStoreSuggestions = undefined;
	m_setClientSuggestionIds = new Set();
	get currentUserSteamID() {
		return this.m_cm.steamid;
	}
	async Init(e) {
		console.time("CUIStore Init");
		this.m_cm = e;
		o.I.SetShowDurationControlDialogCallback(this.ShowDurationControlDialog);
		let t = await this.m_localStorage.GetObject(O);
		if (!t || t.nVersion != 1) {
			t = new P();
		}
		h5(() => {
			let t_eGameListView = t.eGameListView;
			this.m_eSelectedGameListView = t_eGameListView || 1;
			this.m_bGameListGroupedByCollection = t.bGroupedByCollection;
			this.m_bGameListGroupedBySharedLibraries = t.bGroupBySharedLibraries;
			this.m_bGameListSortedByRecent = t.bSortedByRecent;
			this.m_mapLibrarySectionCollapseState = new Map(t.mapCollapsedState);
			this.m_gameListSelection = t.currentSelection;
			this.m_collectionsAppFilter = this.InitializeAppFilter(
				t.collectionFilter,
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
			this.currentCollectionID && s.md.GetCollection(this.currentCollectionID);
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
		fm(() => {
			const e = s.md.GetCollection(s.A8.Recent);
			if (!e || e.visibleApps.length == 0) {
				return;
			}
			const t = e.visibleApps[0];
			if (t && t.appid != this.m_latchedMostRecentApp) {
				this.m_latchedMostRecentApp = t.appid;
				this.SetRecentGamesFirstApp(t.appid);
			}
		});
		console.timeEnd("CUIStore Init");
	}
	InitializeAppFilter(e, t) {
		let r = e && A.zG.FromStorageFormat(e);
		if (r) {
			if (r.GetSelectedOptions(0).length == 0) {
				r.SelectOption(0, 1, true);
				r.SelectOption(0, 2, true);
				r.SelectOption(0, 8192, true);
				r.SelectOption(0, 2048, true);
				r.SelectOption(0, 4, true);
			}
			if (!t) {
				for (let e = 1; e <= 6; e++) {
					for (const t of r.GetSelectedOptions(e)) {
						if (e != 1 || t != 2) {
							console.error(
								"Found invalid filter option",
								t,
								"in group",
								e,
								"- clearing",
							);
							r.SelectOption(e, t, false);
						}
					}
				}
			}
		} else {
			r = new A.zG();
			r.SelectOption(0, 1, true);
			r.SelectOption(0, 2, true);
			if (t) {
				r.SelectOption(0, 8192, true);
			}
		}
		return r;
	}
	RestoreNavigation() {
		const e = window.history.state?.uistore;
		if (e?.m_eMainPanelMode) {
			let t = Object.keys(e);
			let r = this;
			for (let n of t) {
				r[n] = e[n];
			}
		}
	}
	PreserveNavigation() {
		fm(() => {
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
	SetGameListSelection(e, t) {
		if (
			!this.m_gameListSelection ||
			this.m_gameListSelection.nAppId != t ||
			this.m_gameListSelection.nAppId != t ||
			this.m_gameListSelection.strCollectionId != e
		) {
			this.m_gameListSelection = {
				strCollectionId: e,
				nAppId: t,
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
	SetGameListGroupedByCollection(e) {
		this.m_bGameListGroupedByCollection = !!e;
		this.SaveLocalState();
		this.UpdateGameListSelection();
	}
	SetGameListGroupedBySharedLibrary(e) {
		SteamClient.Stats.RecordActivationEvent(
			"SetGameListGroupedBySharedLibrary",
			e ? "Enabled" : "Disabled",
		);
		this.m_bGameListGroupedBySharedLibraries = !!e;
		this.SaveLocalState();
		this.UpdateGameListSelection();
	}
	get bIsGameListSortedByRecent() {
		return this.m_bGameListSortedByRecent;
	}
	SetGameListSortedByRecent(e) {
		this.m_bGameListSortedByRecent = !!e;
		this.SaveLocalState();
		if (!e) {
			this.UpdateGameListSelection();
		}
	}
	SelectCollectionsAppFilterOption(e, t, r) {
		this.m_collectionsAppFilter.SelectOption(e, t, r);
		this.SaveLocalState();
	}
	SelectGamepadCollectionsAppFilterOption(e, t, r) {
		this.m_collectionsAppFilterGamepad.SelectOption(e, t, r);
		this.SaveLocalState();
	}
	SetMultiSelectHooksForGameListSelection() {
		if (
			!this.currentGameListSelection.nAppId ||
			!this.currentGameListSelection.strCollectionId ||
			!this.currentGameListSelection.strCollectionId ||
			!E.z.BRouteMatch(w.BV.Library.App.Root())
		) {
			return;
		}
		const e = new c.q(
			this.currentGameListSelection.nAppId,
			this.currentGameListSelection.strCollectionId,
		);
		l.b.SetAnchor(e);
		const t = () =>
			!E.z.BRouteMatch(w.BV.Library.App.Root()) ||
			e.appid != this.currentGameListSelection.nAppId ||
			e.appid != this.currentGameListSelection.nAppId ||
			e.strCollectionId != this.currentGameListSelection.strCollectionId;
		z7(
			() =>
				t() ||
				l.b.GetSelectedAppsInContext().filter((t) => t.key != e.key).length > 0,
			() => {
				if (t()) {
					l.b.RemoveAnchor(e);
				} else {
					lF().AllCollections();
				}
			},
		);
	}
	SelectGameListView(e, t) {
		if (e != this.selectedGameListView || t != this.currentCollectionID) {
			w_1(
				e != 11,
				"Should not select kSearchResults explicitly; enter search instead.",
			);
			if (this.selectedGameListView == 11) {
				this.ExitSearch();
			}
			if (e == 10) {
				w_1(
					!!t,
					"Should not select single-collection mode without specifying the collection.",
				);
				lF().Collection(t);
				this.SetIsCollapsed(t, false);
			}
			this.m_eSelectedGameListView = e;
			this.SaveLocalState();
			this.m_currentAppFilter = this.collectionsAppFilter;
			this.UpdateGameListSelection();
		}
	}
	BIsTextSearchActive() {
		return (
			this.BIsSearchActive() && this.m_currentAppFilter.searchText.length > 0
		);
	}
	BIsSearchByTypeActive() {
		return (
			this.BIsSearchActive() &&
			!this.BIsTextSearchActive() &&
			!this.m_currentAppFilter.bIsEmpty
		);
	}
	BIsSearchActive() {
		return this.m_currentAppFilter != this.collectionsAppFilter;
	}
	BIsSearchByTypePaneOpen() {
		return this.m_bIsSearchByTypePaneOpen;
	}
	SetSearchByTypePaneOpen(e) {
		this.m_bIsSearchByTypePaneOpen = e;
	}
	ResetSearch() {
		this.m_setStoreSuggestionIds = new Set();
		this.m_setClientSuggestionIds = new Set();
		this.m_currentAppFilter = this.collectionsAppFilter;
		this.UpdateGameListSelection();
		l.b.ClearSelection();
		this.SetIsCollapsed(s.A8.Hidden, true);
	}
	ExitSearch() {
		this.ResetSearch();
		this.SetSearchByTypePaneOpen(false);
	}
	async SetSearchText(e) {
		if (!this.BIsSearchActive() && e.length > 0) {
			w_1(
				!this.BIsSearchActive(),
				"Cannot start text search while other search is already active.",
			);
			l.b.ClearSelection();
			this.m_currentAppFilter = new A.E6();
			SteamClient.Stats.RecordActivationEvent("Search", "Text");
		}
		this.m_currentAppFilter.SetSearchText(e);
		if (e.length == 0) {
			this.ResetSearch();
		} else {
			this.FetchSearchSuggestions(e);
		}
	}
	StartSearchByType(e) {
		w_1(
			!this.BIsSearchActive(),
			"Cannot start search by type while other search is already active.",
		);
		this.m_currentAppFilter = e;
		l.b.ClearSelection();
		SteamClient.Stats.RecordActivationEvent("Search", "Advanced");
	}
	async FetchSearchSuggestions(e) {
		if (e.length < 2) {
			this.m_setStoreSuggestions = [];
			this.m_setStoreSuggestionIds = new Set();
			this.m_setClientSuggestionIds = new Set();
			return;
		}
		{
			const t = _.w.Init(R.s4);
			t.Body().set_search_term(e);
			t.Body().set_max_results(20);
			let r = await R.UP.SendMsgSearchAppDataCacheByStoreKeywords(t, k.N);
			if (this.m_currentAppFilter.searchText == e) {
				if (r.GetEResult() == 1) {
					this.m_setClientSuggestionIds = new Set(r.Body().appids());
				} else {
					this.m_setClientSuggestionIds = new Set();
				}
			}
		}
		{
			let t = _.w.Init(f.pI);
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
			t.Body().set_search_term(e);
			t.Body().set_max_results(20);
			t.Body().set_use_spellcheck(true);
			let r = await f.Fs.SearchSuggestions(this.m_cm.GetServiceTransport(), t);
			if (this.m_currentAppFilter.searchText == e) {
				if (r.GetEResult() == 1) {
					this.m_setStoreSuggestions = y.A.Get().ReadResults(
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
	BIsSuggestionVisible(e) {
		return (
			(!B.jR.BIsFeatureBlocked(1) ||
				a.tw.GetAppOverviewByAppID(e)?.visible_in_game_list) &&
			!B.jR.BIsAppBlocked(e)
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
	IsCollapsed(e) {
		if (!this.m_mapLibrarySectionCollapseState.has(e)) {
			const t = e == s.A8.Hidden;
			this.m_mapLibrarySectionCollapseState.set(e, t);
		}
		return this.m_mapLibrarySectionCollapseState.get(e);
	}
	toggleCollapsed(e) {
		this.SetIsCollapsed(e, !this.IsCollapsed(e));
	}
	SetIsCollapsed(e, t) {
		this.m_mapLibrarySectionCollapseState.set(e, t);
		this.CleanupCollapseStateMap();
		this.SaveLocalState();
	}
	ExpandAll() {
		this.ExpandOrCollapseAll(false);
	}
	CollapseAll() {
		this.ExpandOrCollapseAll(true);
	}
	ExpandOrCollapseAll(e) {
		let t = this.GetVisibleCollections();
		for (let r of t) {
			this.m_mapLibrarySectionCollapseState.set(r.id, e);
		}
		this.CleanupCollapseStateMap();
		this.SaveLocalState();
	}
	CleanupCollapseStateMap() {
		this.m_mapLibrarySectionCollapseState.forEach((e, t) => {
			if (!s.md.GetCollection(t)) {
				this.m_mapLibrarySectionCollapseState.delete(t);
			}
		});
	}
	GetVisibleCollections() {
		return this.GetCollectionList().filter(
			(e) => e.visibleApps.filter(n6.currentAppFilter.Matches).length > 0,
		);
	}
	GetCollectionList() {
		switch (this.selectedGameListView) {
			case 10: {
				const e =
					!!this.currentCollectionID &&
					s.md.GetCollection(this.currentCollectionID);
				if (e) {
					return [e];
				} else {
					return [];
				}
			}
			case 1: {
				if (this.bIsGameListSortedByRecent) {
					return s.md.recentAppCollections;
				}
				let t = this.bIsGameListGroupedByCollection
					? s.md.userCollections
					: [s.md.allAppsCollection];
				if (s.md.siteLicenseCollection) {
					t = [s.md.siteLicenseCollection].concat(t);
				}
				if (this.bIsGameListGroupedBySharedLibraries) {
					t = t.concat(s.md.sharedLibrariesCollections);
				}
				return t;
			}
			case 11: {
				const r = this.bIsGameListSortedByRecent
					? s.md.recentAppCollections.slice()
					: s.md.appTypeCollections.slice();
				const n = s.md.GetCollection(s.A8.Hidden);
				if (n) {
					r.push(n);
				}
				return r;
			}
		}
	}
	UpdateGameListSelection() {
		const e = this.m_gameListSelection?.nAppId;
		const t = e && this.GetCollectionList();
		if (
			e &&
			(!this.currentCollectionID ||
				!t.find((e) => e.id == this.currentCollectionID))
		) {
			const r = t.find((t) => t.apps.has(e));
			if (r) {
				this.SetIsCollapsed(r.id, false);
				this.SetGameListSelection(r.id, this.m_gameListSelection.nAppId);
			}
			l.b.ClearSelection();
		}
	}
	IsGamepadUIWindowActive(e) {
		return d.oy.IsGamepadUIWindowActive(e);
	}
	NavigateForward() {
		const e = d.oy.ActiveWindowInstance;
		if (this.IsGamepadUIWindowActive(e)) {
			E.z.m_history.goForward();
		}
	}
	NavigateToCollectionSaveDialog(e) {
		const t = gS(e);
		if (!t) {
			D.Debug("Ignoring unrecognized tag", e);
			return;
		}
		const { eGroup, option, name } = t;
		if (name && s.md.BIsSystemCollectionName(name)) {
			D.Debug("Ignoring system name", name);
			return;
		}
		if (name && s.md.GetUserCollectionsByName(name).length > 0) {
			const e = s.md.GetUserCollectionsByName(name)[0];
			D.Debug("Opening existing collection", name);
			lF().Collection(e.id);
			return;
		}
		this.ExitSearch();
		const a = new A.E6();
		a.SelectOption(eGroup, option, true);
		n6.StartSearchByType(a);
		x2(window, name, a);
	}
	ShowSharedAppsInLibrary(e, t) {
		let r = new v.b(this.currentUserSteamID);
		let n = t.filter((e) => e != r.GetAccountID());
		e.Reset();
		e.SelectOption(2, 8, true);
		n.filter((e) => e != r.GetAccountID()).forEach((t) => {
			e.SelectOption(6, t, true);
		});
		n6.StartSearchByType(e);
		n6.SetSearchByTypePaneOpen(true);
	}
	NavigateToSharedAppsDesktopUI(e) {
		let t = JSON.parse(e);
		this.ShowSharedAppsInLibrary(new A.E6(), t);
	}
	ShowCollectionViewWithAppTypes(...e) {
		this.SelectGameListView(1);
		this.SetGameListSortedByRecent(false);
		for (const t of [1, 2, 8192, 2048, 4]) {
			this.SelectCollectionsAppFilterOption(0, t, e.includes(t));
		}
	}
	GetRecentGamesFirstApp() {
		return this.m_RecentGamesFirstApp;
	}
	SetRecentGamesFirstApp(e) {
		this.m_RecentGamesFirstApp = e;
	}
	GetActiveWindowInstance() {
		let e = d.oy.ActiveWindowInstance;
		if (T.qL.IsSteamVRRunning && T.qL.IsVRHMDAwake) {
			e = d.oy.WindowStore.GetVRWindowInstance();
		}
		return e;
	}
	OnPostMessage(e, t, r) {
		this.NavigateLibrary(undefined, t, r);
	}
	OnOpenLibrary(e, t) {
		if (d.oy.IsDesktopUIWindowActive(t)) {
			d.oy.WindowStore.EnsureMainWindowCreated();
		}
		if (u.rV.clientSettings.small_mode) {
			return;
		}
		e = e.replace(
			"steam://open/bigpicture/librarydetails/",
			"steam://open/library/details/",
		);
		w_1(
			e.startsWith("steam://open/library/") ||
				e.startsWith("steam://open/games/") ||
				e.startsWith("steam://open/games/") ||
				e.startsWith("steam://nav/games/") ||
				e.startsWith("steam://open/games/") ||
				e.startsWith("steam://nav/games/") ||
				e == "steam://open/library" ||
				e.startsWith("steam://open/games/") ||
				e.startsWith("steam://nav/games/") ||
				e == "steam://open/library" ||
				e == "steam://open/games",
			`Bogus url ${e} passed to OnOpenLibrary`,
		);
		const r = e.split("/");
		const n = r.pop();
		const i = r.pop();
		this.NavigateLibrary(t, i, n);
	}
	NavigateLibrary(e, t, r) {
		e = e ?? this.GetActiveWindowInstance();
		if (!this.IsGamepadUIWindowActive(e)) {
			this.ExitSearch();
		}
		const e_Navigator = e.Navigator;
		if (t == "open") {
			t = r;
			r = "";
		}
		switch (t) {
			case w.Qc: {
				return;
			}
			case "games": {
				this.SelectCollectionsAppFilterOption(0, 1, true);
			}
			case "library": {
				this.EnsureLargeMode();
				e_Navigator.Home();
				return;
			}
			case "view": {
				this.EnsureLargeMode();
				switch (r) {
					case "all": {
						this.ShowCollectionViewWithAppTypes(1, 2, 8192, 2048, 4);
						this.SelectCollectionsAppFilterOption(1, 2, false);
						return;
					}
					case "games": {
						this.ShowCollectionViewWithAppTypes(1);
						return;
					}
					case "soundtracks": {
						this.SelectCollectionsAppFilterOption(0, 8192, true);
						e_Navigator.Collection(s.A8.AppType_Soundtracks);
						return;
					}
					case "software": {
						this.ShowCollectionViewWithAppTypes(2);
						return;
					}
					case "videos": {
						this.ShowCollectionViewWithAppTypes(2048);
						return;
					}
					case "tools": {
						this.ShowCollectionViewWithAppTypes(4);
						return;
					}
					case "recent": {
						this.SelectGameListView(1);
						this.SetGameListSortedByRecent(true);
						return;
					}
					case "installed": {
						this.SelectGameListView(1);
						this.SelectCollectionsAppFilterOption(1, 2, true);
						return;
					}
					case "all-collections": {
						e_Navigator.AllCollections();
						return;
					}
					case "login": {
						if (dq(e_Navigator)) {
							e_Navigator.Login();
						}
						return;
					}
					default: {
						e_Navigator.Home();
						return;
					}
				}
			}
			case "collection": {
				this.EnsureLargeMode();
				if (r == "hidden") {
					this.SelectGameListView(10, r);
				}
				e_Navigator.Collection(r);
				return;
			}
			case "details":
				{
					this.EnsureLargeMode();
					let e = r.split("|");
					let t = +e[0];
					let [, i] = e;
					if (a.tw.GetAppOverviewByAppID(t)) {
						e_Navigator.App(t, {
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
					if (a.tw.GetAppOverviewByAppID(t)) {
						e_Navigator.App(t, {
							gidPartnerEvent: i,
						});
						return;
					}
				}
				break;
			case "media": {
				if (dq(e_Navigator)) {
					this.EnsureLargeMode();
					e_Navigator.Media.Grid();
				}
				return;
			}
			case "downloads": {
				this.EnsureLargeMode();
				e_Navigator.Downloads();
				return;
			}
			case "dynamic-collection": {
				this.EnsureLargeMode();
				this.NavigateToCollectionSaveDialog(r);
				return;
			}
			case "shared-apps": {
				if (dq(e_Navigator)) {
					SteamClient.Messaging.PostMessage("Library", "shared-apps", r);
				} else {
					e_Navigator.Home();
					this.NavigateToSharedAppsDesktopUI(r);
				}
				return;
			}
			default: {
				e_Navigator.Home();
			}
		}
		if (this.IsGamepadUIWindowActive(e)) {
			switch (t) {
				case "gameapiosk": {
					E.z.m_history.push(w.BV.GamepadUI.GameAPIOSK());
					return;
				}
				case "search": {
					E.z.m_history.push(w.BV.GamepadUI.Search.Tab("All"));
					return;
				}
				case "settings": {
					const e = x[r] || w.BV.Settings.General;
					E.z.m_history.push(e());
					return;
				}
				case "settingszoo": {
					E.z.m_history.push((d.GA[r] || w.BV.GamepadUI.Zoo.Modals)());
					return;
				}
				case "appproperties":
					{
						const e = r.split("|");
						const t = +e[0];
						const [, i] = e;
						e_Navigator.AppProperties(t, i);
					}
					return;
				case "apprunning": {
					d.oy.NavigateToRunningApp(false);
					return;
				}
				case "powermenu": {
					d.oy.OpenPowerMenu(null);
					return;
				}
				case "controllerconfigurator":
					{
						const e = r.split("|");
						const t = +e[0];
						const [, n] = e;
						const i = JSON.parse(e[2]);
						E.z.m_history.push(
							(U[n] || w.BV.GamepadUI.ControllerConfigurator.Main)(t),
							i,
						);
					}
					return;
			}
		}
		console.error("Unrecognized request", t, r);
	}
	EnsureLargeMode() {
		const [e, t] = u.rV.GetClientSetting("small_mode");
		if (e) {
			t(false);
		}
	}
	async SaveLocalState() {
		const e = new P();
		e.eGameListView = this.m_eSelectedGameListView;
		e.collectionFilter = this.m_collectionsAppFilter.ToStorageFormat();
		e.collectionFilterGamepad =
			this.m_collectionsAppFilterGamepad.ToStorageFormat();
		e.bGroupedByCollection = this.m_bGameListGroupedByCollection;
		e.bSortedByRecent = this.m_bGameListSortedByRecent;
		e.mapCollapsedState = Array.from(
			this.m_mapLibrarySectionCollapseState,
		).filter((e) => e[1] || e[0] == s.A8.Hidden);
		e.currentSelection = this.m_gameListSelection;
		e.bGroupBySharedLibraries = this.m_bGameListGroupedBySharedLibraries;
		return this.m_localStorage.StoreObject(O, e);
	}
	ShowDurationControlDialog(e) {
		o.I.SetActiveDurationControlHandler(e);
	}
}
Cg([i.sH], L.prototype, "m_bIsCollectionEditorOpen", undefined);
Cg([i.sH], L.prototype, "m_bIsCollectionRenameOpen", undefined);
Cg([i.sH], L.prototype, "m_bIsSearchByTypePaneOpen", undefined);
Cg([i.sH], L.prototype, "m_gameListSelection", undefined);
Cg([i.sH], L.prototype, "m_eSelectedGameListView", undefined);
Cg([i.sH], L.prototype, "m_currentAppFilter", undefined);
Cg([i.sH], L.prototype, "m_collectionsAppFilter", undefined);
Cg([i.sH], L.prototype, "m_collectionsAppFilterGamepad", undefined);
Cg([i.sH], L.prototype, "m_bGameListGroupedByCollection", undefined);
Cg([i.sH], L.prototype, "m_bGameListGroupedBySharedLibraries", undefined);
Cg([i.sH], L.prototype, "m_bGameListSortedByRecent", undefined);
Cg([i.sH], L.prototype, "m_mapLibrarySectionCollapseState", undefined);
Cg([i.sH], L.prototype, "m_RecentGamesFirstApp", undefined);
Cg([i.sH], L.prototype, "m_setStoreSuggestionIds", undefined);
Cg([i.sH], L.prototype, "m_setStoreSuggestions", undefined);
Cg([i.sH], L.prototype, "m_setClientSuggestionIds", undefined);
Cg([i.XI.bound], L.prototype, "SetGameListGroupedByCollection", null);
Cg([i.XI.bound], L.prototype, "SetGameListGroupedBySharedLibrary", null);
Cg([i.XI.bound], L.prototype, "SetGameListSortedByRecent", null);
Cg([i.XI.bound], L.prototype, "SelectCollectionsAppFilterOption", null);
Cg([i.XI.bound], L.prototype, "SelectGamepadCollectionsAppFilterOption", null);
Cg([i.XI.bound], L.prototype, "SelectGameListView", null);
Cg([h.oI], L.prototype, "BIsTextSearchActive", null);
Cg([h.oI], L.prototype, "BIsSearchByTypeActive", null);
Cg([h.oI], L.prototype, "BIsSearchActive", null);
Cg([h.oI], L.prototype, "BIsSearchByTypePaneOpen", null);
Cg([h.oI], L.prototype, "SetSearchByTypePaneOpen", null);
Cg([h.oI], L.prototype, "ResetSearch", null);
Cg([h.oI], L.prototype, "ExitSearch", null);
Cg([h.oI], L.prototype, "SetSearchText", null);
Cg([h.oI], L.prototype, "StartSearchByType", null);
Cg([h.oI], L.prototype, "FetchSearchSuggestions", null);
Cg([h.oI], L.prototype, "IsCollapsed", null);
Cg([h.oI], L.prototype, "toggleCollapsed", null);
Cg([h.oI], L.prototype, "SetIsCollapsed", null);
Cg([h.oI], L.prototype, "ExpandAll", null);
Cg([h.oI], L.prototype, "CollapseAll", null);
Cg([i.XI.bound], L.prototype, "ExpandOrCollapseAll", null);
Cg([i.XI], L.prototype, "CleanupCollapseStateMap", null);
Cg([h.oI], L.prototype, "GetVisibleCollections", null);
Cg([h.oI], L.prototype, "GetCollectionList", null);
Cg([i.XI.bound], L.prototype, "NavigateToCollectionSaveDialog", null);
Cg([i.XI.bound], L.prototype, "NavigateToSharedAppsDesktopUI", null);
Cg([i.XI], L.prototype, "SetRecentGamesFirstApp", null);
Cg([i.XI.bound], L.prototype, "OnPostMessage", null);
Cg([h.oI], L.prototype, "OnOpenLibrary", null);
Cg([h.oI], L.prototype, "SaveLocalState", null);
Cg([h.oI], L.prototype, "ShowDurationControlDialog", null);
export const n6 = new L();
window.uiStore = n6;
const x = {
	general: w.BV.Settings.General,
	display: w.BV.Settings.Display,
	internet: w.BV.Settings.Internet,
	bluetooth: w.BV.Settings.Bluetooth,
	audio: w.BV.Settings.Audio,
	storage: w.BV.Settings.Storage,
	system: w.BV.Settings.System,
	internal: w.BV.Settings.Internal,
	developer: w.BV.Settings.Developer,
	controller: w.BV.Settings.Controller,
	downloads: w.BV.Settings.Downloads,
	remoteplay: w.BV.Settings.RemotePlay,
	library: w.BV.Settings.Library,
	family: w.BV.Settings.Family,
};
const U = {
	Main: w.BV.GamepadUI.ControllerConfigurator.Main,
	Summary: w.BV.GamepadUI.ControllerConfigurator.Summary,
	Preview: w.BV.GamepadUI.ControllerConfigurator.Preview,
	ActionSets: w.BV.GamepadUI.ControllerConfigurator.ActionSets,
	Buttons: w.BV.GamepadUI.ControllerConfigurator.Buttons,
	Triggers: w.BV.GamepadUI.ControllerConfigurator.Triggers,
	Sticks: w.BV.GamepadUI.ControllerConfigurator.Sticks,
	Touchpads: w.BV.GamepadUI.ControllerConfigurator.Touchpads,
	Gyroscopes: w.BV.GamepadUI.ControllerConfigurator.Gyroscopes,
	VirtualMenus: w.BV.GamepadUI.ControllerConfigurator.VirtualMenus,
	ChooseBinding: w.BV.GamepadUI.ControllerConfigurator.ChooseBinding,
};
