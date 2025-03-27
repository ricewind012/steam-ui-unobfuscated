import { GetUnixTime } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i from "./31958.js";
import a, { PR } from "./68292.js";
import s, { Gn, fm } from "./89193.js";
import o from "./85243.js";
import l from "./79883.js";
import c from "./88696.js";
import m, { b as b_1 } from "./86172.js";
import u from "./60917.js";
import d, { VI } from "./34792.js";
import A, { qw } from "./89748.js";
import { q3 } from "./90095.js";
import g from "./78057.js";
import h from "./63696.js";
import { Y2 } from "./72476.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import b from "./94361.js";
import y, { q } from "./29285.js";
import { n as n_1 } from "./26667.js";
import w, { KV } from "./46382.js";
import B from "./12176.js";
import v from "./46948.js";
export function wm(e, t, r, n, a) {
	let s = e.BrowserWindow.screen.availWidth;
	let o = e.BrowserWindow.screen.availHeight;
	if (e.IsDesktopOverlayWindow()) {
		const e_params = e.params;
		s = e_params.nScreenWidth;
		o = e_params.nScreenHeight;
	}
	let l = (s - Math.min(s, 1920)) / 2;
	let c = Math.min(s, 1920);
	const [m] = d.rV.GetClientSetting("overlay_toolbar_list_view");
	if (m) {
		const e = 200;
		l += e;
		c -= e;
	}
	return {
		dimensions: {
			left: l,
			top: 0,
			width: i.OQ(Math.floor(c * 0.75), n ?? t, t),
			height: i.OQ(Math.floor(o * 0.75), a ?? r, r),
		},
		screenWidth: s,
		screenHeight: o,
		minWidth: n,
		minHeight: a,
		usableWidth: c,
	};
}
export let w9;
export let tc;
export let GO;
let R;
let k;
((e) => {
	e.FriendsList = "FriendsList";
	e.Settings = "Settings";
	e.Guides = "Guides";
	e.Achievements = "Achievements";
	e.Notes = "Notes";
	e.Discussions = "Discussions";
	e.Controller = "Controller";
	e.SoundtrackPlayer = "SoundtrackPlayer";
	e.GameOverview = "GameOverview";
	e.Browser = "Browser";
	e.Broadcast = "Broadcast";
	e.BroadcastChat = "BroadcastChat";
	e.BroadcastFirstTime = "BroadcastFirstTime";
	e.Screenshots = "Screenshots";
	e.Workshop = "Workshop";
	e.DLC = "DLC";
	e.Players = "Players";
	e.Timer = "Timer";
	e.AIContentReport = "AIContentReport";
	e.Timeline = "Timeline";
	e.RemotePlayTogether = "RemotePlayTogether";
	e.MultiplayerSessionLinkShare = "MultiplayerSessionLinkShare";
})((w9 ||= {}));
((e) => {
	e[(e.Closed = 0)] = "Closed";
	e[(e.Visible = 1)] = "Visible";
	e[(e.Minimized = 2)] = "Minimized";
})((tc ||= {}));
((e) => {
	e.Playtime = "Playtime";
	e.FriendsInGame = "FriendsInGame";
	e.FriendsRecentlyPlayed = "FriendsRecentlyPlayed";
	e.Achievements = "Achievements";
	e.Screenshots = "Screenshots";
	e.FavoriteGuides = "FavoriteGuides";
	e.TopGuides = "TopGuides";
	e.News = "News";
	e.Players = "Players";
})((GO ||= {}));
((e) => {
	e[(e.k_None = 0)] = "k_None";
	e[(e.k_Initialized = 1)] = "k_Initialized";
	e[(e.k_ShuttingDown = 2)] = "k_ShuttingDown";
})((R ||= {}));
((e) => {
	e.WebRequests = "webrequests";
	e.PinnedWindows = "pinned";
	e.FlippedWindows = "flipped";
	e.VisibleWindows = "windows";
	e.GameOverviewSections = "gameoverviewsections";
	e.ClockSettings = "clocksettings";
})((k ||= {}));
const D = {
	[k.WebRequests]: 1,
	[k.PinnedWindows]: 1,
	[k.FlippedWindows]: 1,
	[k.VisibleWindows]: 2,
	[k.GameOverviewSections]: 1,
	[k.ClockSettings]: 1,
};
class N {
	m_appid;
	m_storage;
	constructor(e) {
		this.m_appid = e;
		this.m_storage = new c.A();
	}
	GetSavedDataKey(e) {
		return `OverlaySavedDataV2_${this.m_appid}_${e}`;
	}
	Save(e, t) {
		let r = {
			version: D[e],
			data: t,
		};
		this.m_storage.StoreObject(this.GetSavedDataKey(e), r);
	}
	async Load(e, t) {
		let D_e = D[e];
		let n = await this.m_storage.GetObject(this.GetSavedDataKey(e));
		if (n?.version == D_e) {
			return n.data;
		} else if (t) {
			return t(n);
		} else {
			return undefined;
		}
	}
	Remove(e) {
		this.m_storage.RemoveObject(this.GetSavedDataKey(e));
	}
}
export function d3(e) {
	let t = new N(e);
	Object.values(k).forEach((e) => {
		let r = e;
		t.Remove(r);
	});
}
const G = {
	[w9.FriendsList]: true,
	[w9.Settings]: true,
	[w9.Guides]: false,
	[w9.Achievements]: false,
	[w9.Notes]: true,
	[w9.Discussions]: false,
	[w9.Controller]: true,
	[w9.SoundtrackPlayer]: false,
	[w9.GameOverview]: false,
	[w9.Browser]: true,
	[w9.Broadcast]: false,
	[w9.BroadcastChat]: false,
	[w9.BroadcastFirstTime]: false,
	[w9.Screenshots]: true,
	[w9.Workshop]: false,
	[w9.DLC]: false,
	[w9.Players]: false,
	[w9.Timer]: true,
	[w9.AIContentReport]: false,
	[w9.Timeline]: false,
	[w9.RemotePlayTogether]: false,
	[w9.MultiplayerSessionLinkShare]: false,
};
export function uA(e) {
	return (
		(!Y2() ||
			!!((e) => {
				let t = G.hasOwnProperty(e);
				AssertMsg(t, "OverlayWindowAvailableInChina_t missing key for", e);
				return !!t && G[e];
			})(e)) &&
		!q()
	);
}
export class z1 {
	m_Instance;
	m_storage;
	m_tabbedBrowserStore;
	m_rgAutorunDisposers = [];
	m_bShowedBroadcastAvailableToast = false;
	m_hPlaytimeTimeout = undefined;
	m_lastTimedTrialToast = undefined;
	m_cWatchingPlaytime = 0;
	m_savedWebRequests = undefined;
	m_eState = R.k_None;
	m_bIsOverlayActive = false;
	m_bHasLoadedWebRequests = false;
	m_mapWindowVisibilityState = new s.Es();
	m_mapPinnedWindows = new s.Es();
	m_mapFlippedWindows = new s.Es();
	m_mapPopupForWindow = new Map();
	m_rgGameOverViewSections = [];
	m_clockSettings = {
		eClockTab: 0,
		nClockFontSize: 48,
	};
	m_settingsPage = "InGame";
	m_nMinimalModeRequests = 0;
	m_playtime = undefined;
	m_bPreviewPinnedMode = false;
	m_initialMediaState = undefined;
	m_bTimelineExpanded = false;
	m_fnChangeTimelineExpansion = (e) => {};
	m_bShowClipSavedHint = false;
	m_bShowDurationControlInit = undefined;
	get appid() {
		return this.m_Instance.params.appid;
	}
	get gameid() {
		return this.m_Instance.params.gameid;
	}
	constructor(e) {
		Gn(this);
		this.m_playtime = {
			nPlaytimeLastTwoWeeks: 0,
			nPlaytimeForever: 0,
			rtLastTimePlayed: GetUnixTime(),
		};
		this.m_Instance = e;
		this.m_tabbedBrowserStore = new l.H();
		this.m_storage = new N(e.params.appid);
	}
	Init() {
		u.Tu.AppOverlayRunning(this.appid, true);
		this.QueueStartupToasts();
		this.CheckDurationControlInit();
		this.Load().then(() => (this.m_eState = R.k_Initialized));
	}
	IsInitialized() {
		return this.m_eState == R.k_Initialized;
	}
	Shutdown() {
		this.ClearRefreshPlaytimeTimer();
		u.Tu.AppOverlayRunning(this.appid, false);
		this.m_eState = R.k_ShuttingDown;
		this.m_rgAutorunDisposers.forEach((e) => e());
		this.m_rgAutorunDisposers.length = 0;
	}
	MinimizeAllWindows() {
		Object.keys(w9).forEach((e) => {
			let t = e;
			if (this.m_mapWindowVisibilityState.get(t) == tc.Visible) {
				this.SetWindowVisibility(e, tc.Minimized);
			}
		});
	}
	RestoreMinimizedWindows() {
		Object.keys(w9).forEach((e) => {
			let t = e;
			if (this.m_mapWindowVisibilityState.get(t) == tc.Minimized) {
				this.SetWindowVisibility(t, tc.Visible);
			}
		});
	}
	get has_minimized_windows() {
		let e = this.m_mapWindowVisibilityState.entries();
		for (let t = e.next(); !t.done; t = e.next()) {
			if (t.value[1] == tc.Minimized) {
				return true;
			}
		}
		return false;
	}
	ToggleWindowVisibility(e) {
		let t = this.m_mapWindowVisibilityState.get(e) !== tc.Visible;
		this.SetWindowVisibility(e, t ? tc.Visible : tc.Closed);
		return t;
	}
	SetWindowVisibility(e, t) {
		if (this.minimal_mode && e != w9.FriendsList) {
			return;
		}
		if (t == tc.Visible && !uA(e)) {
			return;
		}
		let r = this.m_mapWindowVisibilityState.get(e) == tc.Visible;
		let n = t == tc.Visible;
		if (r != n) {
			this.m_mapWindowVisibilityState.set(e, t);
			if (e === w9.FriendsList) {
				const e = PR();
				const t = this.m_Instance.params.browserInfo;
				e.SetVisibilityForDesktopUIOverlay(t, n);
				if (n) {
					const r = e.GetFriendsListPopup(t);
					if (r) {
						r.SetOnClose(() =>
							this.SetWindowVisibility(w9.FriendsList, tc.Closed),
						);
					}
				}
			}
			this.SaveVisibleWindows();
		}
	}
	BringWindowToFront(e) {
		this.GetPopupForWindow(e)?.SteamClient.Window.BringToFront();
	}
	async Load() {
		await b_1(`DesktopUIOverlayStore.Load [${this.appid}]`, [
			["RefreshPlaytime", () => this.RefreshPlaytime()],
			["LoadVisibleWindows", () => this.LoadVisibleWindows()],
			["LoadPinnedWindows", () => this.LoadPinnedWindows()],
			["LoadFlippedWindows", () => this.LoadFlippedWindows()],
			[
				"LoadSortedGameOverviewSections",
				() => this.LoadSortedGameOverviewSections(),
			],
			["LoadSortedLoadClockSettings", () => this.LoadClockSettings()],
			["PreloadSavedWebRequests", () => this.PreloadSavedWebRequests()],
		]);
	}
	QueueStartupToasts() {
		u.Tu.AddOverlaySplashScreen(this.appid);
		this.AddBroadcastAvailableToWatchToast();
	}
	AddBroadcastAvailableToWatchToast() {
		this.m_rgAutorunDisposers.push(
			fm(() => {
				if (this.m_bShowedBroadcastAvailableToast) {
					return;
				}
				let e = qw().cm.BIsConnected();
				let [t] = d.rV.GetClientSetting("broadcast_permissions");
				if (e && (t == 2 || t == 3)) {
					this.m_bShowedBroadcastAvailableToast = true;
					u.Tu.AddBroadcastAvailableToWatch(this.appid, t);
				}
			}),
		);
	}
	async CheckDurationControlInit() {
		let e = await SteamClient.Apps.GetDurationControlInfo(this.appid);
		this.m_bShowDurationControlInit = e.bApplicable;
	}
	ShouldShowDurationControlInitDialog() {
		return this.m_bShowDurationControlInit;
	}
	SetShowDurationControlInitDialog(e) {
		this.m_bShowDurationControlInit = e;
	}
	async RefreshPlaytime() {
		this.ClearRefreshPlaytimeTimer();
		if (this.appid) {
			this.m_playtime = await SteamClient.Apps.GetPlaytime(this.appid);
			if (!this.m_hPlaytimeTimeout) {
				this.ShowTimedTrialNotificationIfNeeded();
				if (this.m_playtime.timedTrial || this.m_cWatchingPlaytime > 0) {
					this.m_hPlaytimeTimeout = window.setTimeout(
						() => this.RefreshPlaytime(),
						15000,
					);
				}
			}
		}
	}
	ClearRefreshPlaytimeTimer() {
		if (this.m_hPlaytimeTimeout) {
			window.clearTimeout(this.m_hPlaytimeTimeout);
		}
		this.m_hPlaytimeTimeout = undefined;
	}
	async PreloadSavedWebRequests() {
		this.m_savedWebRequests = await this.m_storage.Load(k.WebRequests);
	}
	LoadWebRequestsIfNeeded(e = true) {
		if (!this.m_bHasLoadedWebRequests) {
			this.m_bHasLoadedWebRequests = true;
			if (
				this.m_savedWebRequests &&
				d.rV.clientSettings.overlay_restore_browser_tabs
			) {
				let e = [];
				let t = 0;
				this.m_savedWebRequests.rgRequests?.forEach((r) => {
					r.strURL = r.strLastURL || r.strURL;
					if (!r.strURL.startsWith("steam://")) {
						e.push(r);
						t = Math.max(r.requestid, t);
					}
				});
				this.m_tabbedBrowserStore.Set(
					this.m_savedWebRequests.activeWebPageRequestID,
					t,
					e,
				);
			}
			if (this.m_tabbedBrowserStore.web_requests.length == 0 && e) {
				this.m_tabbedBrowserStore.AddWebPageRequest(
					d.rV.clientSettings.web_browser_home,
					true,
				);
			}
		}
	}
	SaveWebRequests() {
		if (this.m_eState != R.k_Initialized || !this.m_bHasLoadedWebRequests) {
			return;
		}
		let e = {
			activeWebPageRequestID: this.m_tabbedBrowserStore.active_web_requestid,
			rgRequests: this.m_tabbedBrowserStore.web_requests,
		};
		this.m_storage.Save(k.WebRequests, e);
	}
	async LoadVisibleWindows() {
		let e = true;
		let t = await this.m_storage.Load(k.VisibleWindows);
		if (t) {
			e = false;
			t.forEach((e) => this.SetWindowVisibility(e[0], e[1]));
		}
		if (e) {
			if (this.appid) {
				this.SetWindowVisibility(w9.GameOverview, tc.Visible);
			}
			this.SetWindowVisibility(w9.FriendsList, tc.Visible);
		}
	}
	async LoadPinnedWindows() {
		let e = await this.m_storage.Load(k.PinnedWindows);
		if (e) {
			e.forEach((e) => {
				let [t, r] = e;
				if (r.opacity !== undefined) {
					this.m_mapPinnedWindows.set(t, r);
				}
			});
		}
	}
	async LoadFlippedWindows() {
		let e = await this.m_storage.Load(k.FlippedWindows);
		if (e) {
			e.forEach((e) => {
				let [t, r] = e;
				this.m_mapFlippedWindows.set(t, r);
			});
		}
	}
	async LoadSortedGameOverviewSections() {
		let e = await this.m_storage.Load(k.GameOverviewSections);
		if (e) {
			e.forEach((e) => this.m_rgGameOverViewSections.push(e));
		}
		Object.keys(GO).forEach((e) => {
			let t = e;
			if (!this.m_rgGameOverViewSections.includes(t)) {
				this.m_rgGameOverViewSections.push(t);
			}
		});
	}
	SetSortedGameOverviewSections(e) {
		this.m_rgGameOverViewSections = e;
		this.m_storage.Save(k.GameOverviewSections, e);
	}
	async LoadClockSettings() {
		this.m_clockSettings = await this.m_storage.Load(k.ClockSettings);
	}
	SetClockSettings(e) {
		this.m_clockSettings = e;
		this.m_storage.Save(k.ClockSettings, e);
	}
	SaveVisibleWindows() {
		if (this.m_eState != R.k_Initialized) {
			return;
		}
		let e = Array.from(this.m_mapWindowVisibilityState.entries());
		this.m_storage.Save(k.VisibleWindows, e);
	}
	SavePinnedWindows() {
		if (this.m_eState != R.k_Initialized) {
			return;
		}
		let e = Array.from(this.m_mapPinnedWindows.entries());
		this.m_storage.Save(k.PinnedWindows, e);
	}
	SaveFlippedWindows() {
		if (this.m_eState != R.k_Initialized) {
			return;
		}
		let e = Array.from(this.m_mapFlippedWindows.entries());
		this.m_storage.Save(k.FlippedWindows, e);
	}
	BWindowVisible(e) {
		return (
			!this.minimal_mode && this.m_mapWindowVisibilityState.get(e) == tc.Visible
		);
	}
	GetPopupForWindow(e) {
		if (e == w9.FriendsList) {
			const e = this.m_Instance.params.browserInfo;
			const t = PR().GetFriendsListPopup(e);
			if (t) {
				return t.window;
			}
		}
		return this.m_mapPopupForWindow.get(e);
	}
	SetPopupForWindow(e, t) {
		this.m_mapPopupForWindow.set(e, t);
	}
	GetPopupWindows() {
		let e = [];
		let t = this.m_mapWindowVisibilityState.entries();
		for (let r = t.next(); !r.done; r = t.next()) {
			if (r.value[1] == tc.Visible) {
				let t = this.GetPopupForWindow(r.value[0]);
				if (t) {
					e.push(t);
				}
			}
		}
		return e;
	}
	AddWebPageRequest(e, t = true) {
		this.LoadWebRequestsIfNeeded(false);
		this.m_tabbedBrowserStore.AddWebPageRequest(e, t);
		this.SaveWebRequests();
		this.SetWindowVisibility(w9.Browser, tc.Visible);
		if (!this.m_bIsOverlayActive) {
			SteamClient.Overlay.SetOverlayState(this.gameid, o.I5.Overlay);
		}
	}
	RemoveWebPageRequest(e) {
		if (
			this.m_mapWindowVisibilityState.get(w9.Browser) === tc.Visible &&
			this.m_tabbedBrowserStore.RemoveWebPageRequest(e)
		) {
			this.SaveWebRequests();
		}
	}
	RemoveAllWebPageRequests() {
		this.m_tabbedBrowserStore.RemoveAllRequests();
		this.SaveWebRequests();
	}
	UpdateWebPageRequest(e, t, r) {
		if (this.m_tabbedBrowserStore.UpdateWebPageRequest(e, t, r)) {
			this.SaveWebRequests();
		}
	}
	ReorderWebPageRequest(e, t) {
		this.m_tabbedBrowserStore.ReorderWebPageRequest(e, t);
		this.SaveWebRequests();
	}
	GetWebPageRequestsChangedCallbackList() {
		return this.m_tabbedBrowserStore.GetWebPageRequestsChangedCallbackList();
	}
	ShowSettings(e) {
		this.m_settingsPage = e;
		this.SetWindowVisibility(w9.Settings, tc.Visible);
	}
	ShowMedia(e) {
		this.m_initialMediaState = e;
		this.SetWindowVisibility(w9.Screenshots, tc.Visible);
		this.BringWindowToFront(w9.Screenshots);
	}
	ShowRemotePlayTogether() {
		this.SetWindowVisibility(w9.RemotePlayTogether, tc.Visible);
	}
	ChangeTimelineExpansion(e) {
		this.m_fnChangeTimelineExpansion(e);
	}
	SetFnChangeTimelineExpansion(e) {
		this.m_fnChangeTimelineExpansion = e;
	}
	ChangeTimelineExpansionState(e) {
		this.m_bTimelineExpanded = e;
	}
	EnterMinimalMode() {
		++this.m_nMinimalModeRequests;
		this.SetWindowVisibility(w9.FriendsList, tc.Closed);
		const e = PR();
		const t = this.m_Instance.params.browserInfo;
		e.SetChatWindowsVisibilityForDesktopUIOverlay(t, false);
		if (!this.m_bIsOverlayActive) {
			SteamClient.Overlay.SetOverlayState(
				this.m_Instance.params.gameid,
				o.I5.Overlay,
			);
		}
	}
	ExitMinimalMode() {
		--this.m_nMinimalModeRequests;
		if (this.m_nMinimalModeRequests == 0) {
			SteamClient.Overlay.SetOverlayState(
				this.m_Instance.params.gameid,
				o.I5.Hidden,
			);
		}
	}
	SetIsOverlayActive(e) {
		this.m_bIsOverlayActive = e;
		if (e) {
			this.LoadWebRequestsIfNeeded();
			this.m_bPreviewPinnedMode = false;
		}
	}
	SetWindowPinned(e, t) {
		let r = this.m_mapPinnedWindows.get(e) || {
			bPinned: t,
			opacity: 1,
		};
		r.bPinned = t;
		if (t) {
			b.y.ReportTrackedAction(`/Overlay/PinWindow/${w9[e]}`);
		}
		this.m_mapPinnedWindows.set(e, r);
		this.SavePinnedWindows();
	}
	BWindowPinned(e) {
		let t = this.m_mapPinnedWindows.get(e);
		return t?.bPinned;
	}
	GetPinnedWindowOpacity(e) {
		let t = this.m_mapPinnedWindows.get(e);
		if (t) {
			return t.opacity;
		} else {
			return 1;
		}
	}
	SetPinnedWindowOpacity(e, t) {
		let r = this.m_mapPinnedWindows.get(e) || {
			bPinned: true,
			opacity: 1,
		};
		r.opacity = t;
		this.m_mapPinnedWindows.set(e, r);
		this.SavePinnedWindows();
	}
	SetPinnedWindowData(e, t) {
		let r = this.m_mapPinnedWindows.get(e) || {
			bPinned: false,
			opacity: 1,
		};
		r.extraData = t;
		this.m_mapPinnedWindows.set(e, r);
		this.SavePinnedWindows();
	}
	GetPinnedWindowData(e) {
		let t = this.m_mapPinnedWindows.get(e);
		return t?.extraData;
	}
	SetPreviewPinnedMode(e) {
		this.m_bPreviewPinnedMode = e;
	}
	SetWindowFlipped(e, t) {
		let r = this.m_mapFlippedWindows.get(e) || {
			bFlipped: t,
		};
		r.bFlipped = t;
		if (t) {
			b.y.ReportTrackedAction(`/Overlay/FlipWindow/${w9[e]}`);
		}
		this.m_mapFlippedWindows.set(e, r);
		this.SaveFlippedWindows();
	}
	BWindowFlipped(e) {
		let t = this.m_mapFlippedWindows.get(e);
		return t?.bFlipped;
	}
	ShowTimedTrialNotificationIfNeeded() {
		if (!this.m_playtime.timedTrial) {
			return;
		}
		let e = this.m_playtime.timedTrial;
		let t = this.m_lastTimedTrialToast?.unSecondsLeft || 0;
		let r = Math.max(0, e.unSecondsAllowed - e.unSecondsPlayed);
		let n = false;
		if (
			this.m_lastTimedTrialToast &&
			this.m_lastTimedTrialToast.bOnline == e.bIsOnline
		) {
			if (
				r > t ||
				(t > 1800 && r <= 1800) ||
				(t > 900 && r <= 900) ||
				(t > 300 && r <= 300) ||
				(t > 60 && r <= 60) ||
				(t > 0 && r == 0)
			) {
				n = true;
			}
		} else {
			n = true;
		}
		if (n) {
			this.m_lastTimedTrialToast = {
				bOnline: e.bIsOnline,
				unSecondsLeft: r,
			};
			(async (e, t, r, n) => {
				let i =
					(await g.H.RequestAppDetails(e)).strMasterSubNotificationIcon ?? "";
				u.Tu.AddTimedTrialRemaining(e, i, t, r, n);
			})(this.appid, !e.bIsOnline, e.unSecondsAllowed, e.unSecondsPlayed);
		}
	}
	WatchPlaytime() {
		this.m_cWatchingPlaytime++;
		if (!this.m_hPlaytimeTimeout) {
			this.RefreshPlaytime();
		}
		return () => {
			this.m_cWatchingPlaytime--;
		};
	}
	get instance() {
		return this.m_Instance;
	}
	get web_requests() {
		return this.m_tabbedBrowserStore.web_requests;
	}
	get active_web_requestid() {
		return this.m_tabbedBrowserStore.active_web_requestid;
	}
	set active_web_requestid(e) {
		this.m_tabbedBrowserStore.active_web_requestid = e;
		this.SaveWebRequests();
	}
	get settings_page() {
		return this.m_settingsPage;
	}
	get minimal_mode() {
		return this.m_nMinimalModeRequests != 0;
	}
	get time_session_start() {
		return this.m_playtime?.rtLastTimePlayed;
	}
	get playtime_last_two_weeks() {
		return this.m_playtime?.nPlaytimeLastTwoWeeks;
	}
	get playtime_forever() {
		return this.m_playtime?.nPlaytimeForever;
	}
	get game_overview_sections() {
		return this.m_rgGameOverViewSections;
	}
	get clock_settings() {
		return this.m_clockSettings;
	}
	get overlay_active() {
		return this.m_bIsOverlayActive;
	}
	get preview_pinned_mode() {
		return this.m_bPreviewPinnedMode;
	}
	get timed_trial_platime() {
		return this.m_playtime?.timedTrial;
	}
	get timeline_expanded() {
		return this.m_bTimelineExpanded;
	}
	GetInitialMediaState() {
		return this.m_initialMediaState || {};
	}
}
export function r2(e) {
	return q3(() => {
		let e_timed_trial_platime = e.timed_trial_platime;
		if (e_timed_trial_platime) {
			return {
				bInTrial: true,
				unSecondsAllowed: e_timed_trial_platime.unSecondsAllowed ?? 0,
				unSecondsPlayed: e_timed_trial_platime.unSecondsPlayed ?? 0,
			};
		} else {
			return {
				bInTrial: false,
				unSecondsAllowed: 0,
				unSecondsPlayed: 0,
			};
		}
	});
}
export function B$(e) {
	h.useEffect(() => e.WatchPlaytime(), [e]);
	return q3(() => [e.playtime_forever, e.playtime_last_two_weeks]);
}
Cg([s.sH], z1.prototype, "m_eState", undefined);
Cg([s.sH], z1.prototype, "m_bIsOverlayActive", undefined);
Cg([s.sH], z1.prototype, "m_bHasLoadedWebRequests", undefined);
Cg([s.sH], z1.prototype, "m_mapWindowVisibilityState", undefined);
Cg([s.sH], z1.prototype, "m_mapPinnedWindows", undefined);
Cg([s.sH], z1.prototype, "m_mapFlippedWindows", undefined);
Cg([s.sH], z1.prototype, "m_rgGameOverViewSections", undefined);
Cg([s.sH], z1.prototype, "m_clockSettings", undefined);
Cg([s.sH], z1.prototype, "m_settingsPage", undefined);
Cg([s.sH], z1.prototype, "m_nMinimalModeRequests", undefined);
Cg([s.sH], z1.prototype, "m_playtime", undefined);
Cg([s.sH], z1.prototype, "m_bPreviewPinnedMode", undefined);
Cg([s.sH.ref], z1.prototype, "m_initialMediaState", undefined);
Cg([s.sH], z1.prototype, "m_bTimelineExpanded", undefined);
Cg([s.sH], z1.prototype, "m_bShowClipSavedHint", undefined);
Cg([s.sH], z1.prototype, "m_bShowDurationControlInit", undefined);
Cg([s.XI], z1.prototype, "MinimizeAllWindows", null);
Cg([s.XI], z1.prototype, "RestoreMinimizedWindows", null);
Cg([s.EW], z1.prototype, "has_minimized_windows", null);
Cg([s.XI], z1.prototype, "ToggleWindowVisibility", null);
Cg([s.XI], z1.prototype, "SetWindowVisibility", null);
Cg([s.XI], z1.prototype, "Load", null);
Cg([s.XI.bound], z1.prototype, "CheckDurationControlInit", null);
Cg([s.XI], z1.prototype, "RefreshPlaytime", null);
Cg([s.XI], z1.prototype, "PreloadSavedWebRequests", null);
Cg([s.XI], z1.prototype, "LoadWebRequestsIfNeeded", null);
Cg([s.XI], z1.prototype, "LoadVisibleWindows", null);
Cg([s.XI], z1.prototype, "LoadPinnedWindows", null);
Cg([s.XI], z1.prototype, "LoadFlippedWindows", null);
Cg([s.XI], z1.prototype, "LoadSortedGameOverviewSections", null);
Cg([s.XI], z1.prototype, "SetSortedGameOverviewSections", null);
Cg([s.XI], z1.prototype, "LoadClockSettings", null);
Cg([s.XI], z1.prototype, "SetClockSettings", null);
Cg([s.XI], z1.prototype, "AddWebPageRequest", null);
Cg([s.XI], z1.prototype, "RemoveWebPageRequest", null);
Cg([s.XI], z1.prototype, "RemoveAllWebPageRequests", null);
Cg([s.XI], z1.prototype, "UpdateWebPageRequest", null);
Cg([s.XI], z1.prototype, "ReorderWebPageRequest", null);
Cg([s.XI], z1.prototype, "ShowSettings", null);
Cg([s.XI], z1.prototype, "ShowMedia", null);
Cg([s.XI], z1.prototype, "ShowRemotePlayTogether", null);
Cg([s.XI], z1.prototype, "EnterMinimalMode", null);
Cg([s.XI], z1.prototype, "ExitMinimalMode", null);
Cg([s.XI], z1.prototype, "SetIsOverlayActive", null);
Cg([s.XI], z1.prototype, "SetWindowPinned", null);
Cg([s.XI], z1.prototype, "SetPinnedWindowOpacity", null);
Cg([s.XI], z1.prototype, "SetPinnedWindowData", null);
Cg([s.XI], z1.prototype, "SetPreviewPinnedMode", null);
Cg([s.XI], z1.prototype, "SetWindowFlipped", null);
const x = [
	{
		window: w9.GameOverview,
		visible: true,
	},
	{
		window: w9.Achievements,
		visible: true,
	},
	{
		window: w9.Notes,
		visible: true,
	},
	{
		window: w9.Timer,
		visible: true,
	},
	{
		window: w9.Guides,
		visible: true,
	},
	{
		window: w9.Discussions,
		visible: true,
	},
	{
		window: w9.DLC,
		visible: true,
	},
	{
		window: w9.Workshop,
		visible: true,
	},
	{
		window: w9.Screenshots,
		visible: true,
	},
	{
		window: w9.FriendsList,
		visible: true,
	},
	{
		window: w9.RemotePlayTogether,
		visible: true,
	},
	{
		window: w9.Browser,
		visible: true,
	},
	{
		window: w9.Controller,
		visible: true,
	},
	{
		window: w9.SoundtrackPlayer,
		visible: false,
	},
	{
		window: w9.AIContentReport,
		visible: true,
	},
	{
		window: w9.MultiplayerSessionLinkShare,
		visible: true,
	},
];
export function W6() {
	const [e, t] = (() => {
		const [e, t] = VI("overlay_tabs");
		const [r, setR] = h.useState([]);
		h.useEffect(() => {
			try {
				const r = JSON.parse(e);
				let i = new Set(x.map((e) => e.window));
				let a = r.filter((e) => i.has(e.window));
				let s = a.length != r.length;
				let o = new Set(a.map((e) => e.window));
				for (const e of x) {
					if (!o.has(e.window)) {
						a.push(e);
						s = true;
					}
				}
				setR(a);
				if (s) {
					t(JSON.stringify(a));
				}
			} catch (e) {
				setR(x);
			}
		}, [e, t]);
		return [
			r,
			(e) => {
				setR(e);
				t(JSON.stringify(e));
			},
		];
	})();
	return {
		rTabs: e,
		setTabVisibility: (r, n) => {
			let i = [...e];
			for (let e of i) {
				if (e.window == r) {
					e.visible = n;
				}
			}
			t(i);
		},
		moveTab: (r, n) => {
			let i = e.filter((e) => e.window != r);
			let a = e.find((e) => e.window == r);
			i.splice(n, 0, a);
			t(i);
		},
	};
}
export function Mb(e) {
	return [
		q3(() => e.ShouldShowDurationControlInitDialog() === true),
		() => e.SetShowDurationControlInitDialog(false),
	];
}
export function fg(e) {
	return q3(() => !!e && e.ShouldShowDurationControlInitDialog() !== false);
}
export function vx(e, t, r, n) {
	const i = KV();
	return n_1({
		mutationFn: async () => {
			const r = B.w.Init(v.LI);
			r.Body().set_appid(e);
			r.Body().set_report_type(14);
			r.Body().set_report(t);
			const n = await v.nd.ReportApp(i, r);
			if (n.GetEResult() != 1) {
				throw {
					result: n.GetEResult(),
				};
			}
		},
		onSuccess: r,
		onError: n,
	});
}
