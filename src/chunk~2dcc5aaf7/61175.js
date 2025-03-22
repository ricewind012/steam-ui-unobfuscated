var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require("./96593.js");
var s = require("./96000.js");
var o = require("./76356.js");
var l = require("./47979.js");
var c = require("./29547.js");
var m = require(/*webcrack:missing*/ "./88696.js");
var u = require("./34792.js");
var d = require("./46422.js");
var A = require("./14629.js");
var p = require("./31706.js");
var g = require(/*webcrack:missing*/ "./49455.js");
var h = require(/*webcrack:missing*/ "./52451.js");
var C = require(/*webcrack:missing*/ "./72476.js");
var _ = require(/*webcrack:missing*/ "./12176.js");
var f = require("./64880.js");
var b = require("./85606.js");
var y = require("./5859.js");
var S = require(/*webcrack:missing*/ "./83599.js");
var w = require("./18057.js");
var B = require("./5640.js");
var v = require(/*webcrack:missing*/ "./8573.js");
var I = require("./13688.js");
var E = require("./49171.js");
var M = require("./79112.js");
var T = require("./45967.js");
var R = require("./36813.js");
var k = require("./31930.js");
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
		(0, i.Gn)(this);
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
		(0, i.h5)(() => {
			let e = t.eGameListView;
			this.m_eSelectedGameListView = e || 1;
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
		(0, i.fm)(() => {
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
		(0, i.fm)(() => {
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
		const e = (0, M.lF)();
		if ((0, I.dq)(e)) {
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
			e.strCollectionId != this.currentGameListSelection.strCollectionId;
		(0, i.z7)(
			() =>
				t() ||
				l.b.GetSelectedAppsInContext().filter((t) => t.key != e.key).length > 0,
			() => {
				if (t()) {
					l.b.RemoveAnchor(e);
				} else {
					(0, M.lF)().AllCollections();
				}
			},
		);
	}
	SelectGameListView(e, t) {
		if (e != this.selectedGameListView || t != this.currentCollectionID) {
			(0, g.w)(
				e != 11,
				"Should not select kSearchResults explicitly; enter search instead.",
			);
			if (this.selectedGameListView == 11) {
				this.ExitSearch();
			}
			if (e == 10) {
				(0, g.w)(
					!!t,
					"Should not select single-collection mode without specifying the collection.",
				);
				(0, M.lF)().Collection(t);
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
			(0, g.w)(
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
		(0, g.w)(
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
			(0, b.rV)(t);
			(0, b.Bn)(t, {
				include_basic_info: true,
				include_assets: true,
			});
			(0, b.hc)(t, {
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
			case 10:
				const e =
					!!this.currentCollectionID &&
					s.md.GetCollection(this.currentCollectionID);
				if (e) {
					return [e];
				} else {
					return [];
				}
			case 1:
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
			case 11:
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
		const t = (0, A.gS)(e);
		if (!t) {
			D.Debug("Ignoring unrecognized tag", e);
			return;
		}
		const { eGroup: r, option: n, name: i } = t;
		if (i && s.md.BIsSystemCollectionName(i)) {
			D.Debug("Ignoring system name", i);
			return;
		}
		if (i && s.md.GetUserCollectionsByName(i).length > 0) {
			const e = s.md.GetUserCollectionsByName(i)[0];
			D.Debug("Opening existing collection", i);
			(0, M.lF)().Collection(e.id);
			return;
		}
		this.ExitSearch();
		const a = new A.E6();
		a.SelectOption(r, n, true);
		n6.StartSearchByType(a);
		(0, p.x2)(window, i, a);
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
			this.SelectCollectionsAppFilterOption(0, t, e.indexOf(t) >= 0);
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
		(0, g.w)(
			e.startsWith("steam://open/library/") ||
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
		const n = e.Navigator;
		if (t == "open") {
			t = r;
			r = "";
		}
		switch (t) {
			case w.Qc:
				return;
			case "games":
				this.SelectCollectionsAppFilterOption(0, 1, true);
			case "library":
				this.EnsureLargeMode();
				n.Home();
				return;
			case "view":
				this.EnsureLargeMode();
				switch (r) {
					case "all":
						this.ShowCollectionViewWithAppTypes(1, 2, 8192, 2048, 4);
						this.SelectCollectionsAppFilterOption(1, 2, false);
						return;
					case "games":
						this.ShowCollectionViewWithAppTypes(1);
						return;
					case "soundtracks":
						this.SelectCollectionsAppFilterOption(0, 8192, true);
						n.Collection(s.A8.AppType_Soundtracks);
						return;
					case "software":
						this.ShowCollectionViewWithAppTypes(2);
						return;
					case "videos":
						this.ShowCollectionViewWithAppTypes(2048);
						return;
					case "tools":
						this.ShowCollectionViewWithAppTypes(4);
						return;
					case "recent":
						this.SelectGameListView(1);
						this.SetGameListSortedByRecent(true);
						return;
					case "installed":
						this.SelectGameListView(1);
						this.SelectCollectionsAppFilterOption(1, 2, true);
						return;
					case "all-collections":
						n.AllCollections();
						return;
					case "login":
						if ((0, I.dq)(n)) {
							n.Login();
						}
						return;
					default:
						n.Home();
						return;
				}
			case "collection":
				this.EnsureLargeMode();
				if (r == "hidden") {
					this.SelectGameListView(10, r);
				}
				n.Collection(r);
				return;
			case "details":
				{
					this.EnsureLargeMode();
					let e = r.split("|");
					let t = +e[0];
					let i = e[1];
					if (a.tw.GetAppOverviewByAppID(t)) {
						n.App(t, {
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
					let i = e[1];
					if (a.tw.GetAppOverviewByAppID(t)) {
						n.App(t, {
							gidPartnerEvent: i,
						});
						return;
					}
				}
				break;
			case "media":
				if ((0, I.dq)(n)) {
					this.EnsureLargeMode();
					n.Media.Grid();
				}
				return;
			case "downloads":
				this.EnsureLargeMode();
				n.Downloads();
				return;
			case "dynamic-collection":
				this.EnsureLargeMode();
				this.NavigateToCollectionSaveDialog(r);
				return;
			case "shared-apps":
				if ((0, I.dq)(n)) {
					SteamClient.Messaging.PostMessage("Library", "shared-apps", r);
				} else {
					n.Home();
					this.NavigateToSharedAppsDesktopUI(r);
				}
				return;
			default:
				n.Home();
		}
		if (this.IsGamepadUIWindowActive(e)) {
			switch (t) {
				case "gameapiosk":
					E.z.m_history.push(w.BV.GamepadUI.GameAPIOSK());
					return;
				case "search":
					E.z.m_history.push(w.BV.GamepadUI.Search.Tab("All"));
					return;
				case "settings":
					const e = x[r] || w.BV.Settings.General;
					E.z.m_history.push(e());
					return;
				case "settingszoo":
					E.z.m_history.push((d.GA[r] || w.BV.GamepadUI.Zoo.Modals)());
					return;
				case "appproperties":
					{
						const e = r.split("|");
						const t = +e[0];
						const i = e[1];
						n.AppProperties(t, i);
					}
					return;
				case "apprunning":
					d.oy.NavigateToRunningApp(false);
					return;
				case "powermenu":
					d.oy.OpenPowerMenu(null);
					return;
				case "controllerconfigurator":
					{
						const e = r.split("|");
						const t = +e[0];
						const n = e[1];
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
(0, n.Cg)([i.sH], L.prototype, "m_bIsCollectionEditorOpen", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_bIsCollectionRenameOpen", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_bIsSearchByTypePaneOpen", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_gameListSelection", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_eSelectedGameListView", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_currentAppFilter", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_collectionsAppFilter", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_collectionsAppFilterGamepad", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_bGameListGroupedByCollection", undefined);
(0, n.Cg)(
	[i.sH],
	L.prototype,
	"m_bGameListGroupedBySharedLibraries",
	undefined,
);
(0, n.Cg)([i.sH], L.prototype, "m_bGameListSortedByRecent", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_mapLibrarySectionCollapseState", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_RecentGamesFirstApp", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_setStoreSuggestionIds", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_setStoreSuggestions", undefined);
(0, n.Cg)([i.sH], L.prototype, "m_setClientSuggestionIds", undefined);
(0, n.Cg)([i.XI.bound], L.prototype, "SetGameListGroupedByCollection", null);
(0, n.Cg)([i.XI.bound], L.prototype, "SetGameListGroupedBySharedLibrary", null);
(0, n.Cg)([i.XI.bound], L.prototype, "SetGameListSortedByRecent", null);
(0, n.Cg)([i.XI.bound], L.prototype, "SelectCollectionsAppFilterOption", null);
(0, n.Cg)(
	[i.XI.bound],
	L.prototype,
	"SelectGamepadCollectionsAppFilterOption",
	null,
);
(0, n.Cg)([i.XI.bound], L.prototype, "SelectGameListView", null);
(0, n.Cg)([h.oI], L.prototype, "BIsTextSearchActive", null);
(0, n.Cg)([h.oI], L.prototype, "BIsSearchByTypeActive", null);
(0, n.Cg)([h.oI], L.prototype, "BIsSearchActive", null);
(0, n.Cg)([h.oI], L.prototype, "BIsSearchByTypePaneOpen", null);
(0, n.Cg)([h.oI], L.prototype, "SetSearchByTypePaneOpen", null);
(0, n.Cg)([h.oI], L.prototype, "ResetSearch", null);
(0, n.Cg)([h.oI], L.prototype, "ExitSearch", null);
(0, n.Cg)([h.oI], L.prototype, "SetSearchText", null);
(0, n.Cg)([h.oI], L.prototype, "StartSearchByType", null);
(0, n.Cg)([h.oI], L.prototype, "FetchSearchSuggestions", null);
(0, n.Cg)([h.oI], L.prototype, "IsCollapsed", null);
(0, n.Cg)([h.oI], L.prototype, "toggleCollapsed", null);
(0, n.Cg)([h.oI], L.prototype, "SetIsCollapsed", null);
(0, n.Cg)([h.oI], L.prototype, "ExpandAll", null);
(0, n.Cg)([h.oI], L.prototype, "CollapseAll", null);
(0, n.Cg)([i.XI.bound], L.prototype, "ExpandOrCollapseAll", null);
(0, n.Cg)([i.XI], L.prototype, "CleanupCollapseStateMap", null);
(0, n.Cg)([h.oI], L.prototype, "GetVisibleCollections", null);
(0, n.Cg)([h.oI], L.prototype, "GetCollectionList", null);
(0, n.Cg)([i.XI.bound], L.prototype, "NavigateToCollectionSaveDialog", null);
(0, n.Cg)([i.XI.bound], L.prototype, "NavigateToSharedAppsDesktopUI", null);
(0, n.Cg)([i.XI], L.prototype, "SetRecentGamesFirstApp", null);
(0, n.Cg)([i.XI.bound], L.prototype, "OnPostMessage", null);
(0, n.Cg)([h.oI], L.prototype, "OnOpenLibrary", null);
(0, n.Cg)([h.oI], L.prototype, "SaveLocalState", null);
(0, n.Cg)([h.oI], L.prototype, "ShowDurationControlDialog", null);
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
