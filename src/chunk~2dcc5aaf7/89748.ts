import {
	action,
	makeAutoObservable,
	observable,
	runInAction,
	when,
} from "mobx";
import { useObserver } from "mobx-react-lite";

import { ESteamRealm } from "@actual_src/clienttypes/realm.js";
import { Vw as AppInfoStore } from "@actual_src/stores/appinfostore";
import { Y4 as BluetoothStore } from "@actual_src/stores/bluetoothstore";
import { md as CollectionStore } from "@actual_src/stores/collectionstore.js";
import { Nb as CommunityStore } from "@actual_src/stores/communitystore.js";
import { dn as ConsoleStore } from "@actual_src/stores/consolestore.js";
import { z as ControllerConfigInterstitialStore } from "@actual_src/stores/controllerconfiginterstitialstore.js";
import { hj as DownloadsStore } from "@actual_src/stores/downloadsstore.js";
import { Cf as EAAccessPromptManager } from "@actual_src/stores/eaaccesspromptmgr.js";
import { iP as FocusedAppWindowStore } from "@actual_src/stores/focusedappwindowstore.js";
import { O$ as FriendStore } from "@actual_src/stores/friendstore.js";
import { X$ as GameReleasedStore } from "@actual_src/stores/gamereleasestore.js";
import { IBusConnection } from "@actual_src/stores/ibusconnection.js";
import { fN as InstallFolderStore } from "@actual_src/stores/installfolderstore.js";
import { LoginStore } from "@actual_src/stores/loginstore.js";
import { l as MusicStore } from "@actual_src/stores/musicstore.js";
import { OverlayStore } from "@actual_src/stores/overlaystore.js";
import {
	_r as SystemStorageStore,
	bh as SDCardStore,
} from "@actual_src/stores/sdcardstore.js";
import { yE as SecurityStore } from "@actual_src/stores/securitystore.js";
import { Xw as ServerBrowserStore } from "@actual_src/stores/serverbrowserstore.js";
import { rV as SettingsStore } from "@actual_src/stores/settingsstore.js";
import { N as ShowcaseStore } from "@actual_src/stores/showcasestore.js";
import { Z4 as SystemInfoStore } from "@actual_src/stores/systeminfostore.js";
import { Ty as SystemReportStore } from "@actual_src/stores/systemreportstore.js";
import { B7 as URLStore } from "@actual_src/stores/urlstore";
import { iG as UserProfileStore } from "@actual_src/stores/userprofilestore.js";
import { t as VRAudioSettingsStore } from "@actual_src/stores/vraudiosettingsstore.js";
import { WebUITransportStore } from "@actual_src/stores/webuitransport";
import { AssertMsg } from "@actual_src/utils/assert.js";
import { bind } from "@actual_src/utils/bind.js";

import { jR as ParentalStore } from "./5640.js";
import { Gc as StreamingStore } from "./6160.js";
import { b as b_2 } from "./8573.js";
import { y as AchievementProgress } from "./10927.js";
import { I8, w } from "./12176.js";
import { yX as AppActivityStore } from "./12750.js";
import { Yq as SubscriberAgreementStore } from "./13337.js";
import { EX as LibraryLoyaltyAwardModal } from "./13672.js";
import { H as H_1 } from "./16154.js";
import { Bf } from "./24274.js";
import { Sj } from "./24287.js";
import { D as D_1 } from "./31222.js";
import { N } from "./31930.js";
import { Tg } from "./31958.js";
import { x as AppReviewStore } from "./31993.js";
import { p6 as AchievementStore } from "./32179.js";
import { Qu, uV } from "./32700.js";
import { qF as SteamOSStore } from "./33706.js";
import { Cg } from "./34629.js";
import { O as KeyboardSettingsStore } from "./34776.js";
import { Q as OverlayModalDialogsStore } from "./37499.js";
import { A } from "./37976.js";
import { qL, AP as VRStore } from "./45967.js";
import { oy as SteamUIStore } from "./46422.js";
import { x_ as BadgeStore } from "./47801.js";
import { BT, gp, i0, qM, Sg, Uq, w0, zj } from "./48307.js";
import { z } from "./49171.js";
import { Nt as MarketingStore } from "./49265.js";
import { Bv } from "./50876.js";
import { oI } from "./52451.js";
import { aI as DiscoveryQueueStore } from "./55444.js";
import { dm as LibraryEventStore } from "./57016.js";
import { BinaryReader, BinaryWriter, Message } from "./58663.js";
import {
	Tu as NotificationStore,
	$Z as SteamNotificationsStore,
} from "./60917.js";
import { n6 } from "./61175.js";
import { YS as GamescopeStore } from "./61518.js";
import { aj } from "./63088.js";
import { ht as ht_1, vq } from "./63259.js";
import { Dt as SteamURLStore, zK } from "./63367.js";
import { F as F_1 } from "./63947.js";
import { ut as RemotePlayStore } from "./64004.js";
import { y as ScreenshotStore } from "./65528.js";
import { bg, PR } from "./68292.js";
import { Nd, XP } from "./69767.js";
import { B6 as WorkshopStore } from "./70239.js";
import { Ze as SuspendResumeStore } from "./71033.js";
import { Ab, TS as Config, iA, On, Tc, UF, Y2 } from "./72476.js";
import { Ri as AppSpotlightsStore } from "./74827.js";
import { Mf as VirtualMenuStore } from "./75140.js";
import { L as OnRunPersonaStateURL } from "./75144.js";
import { U as SearchStore } from "./75248.js";
import { I as GameActionStore } from "./76356.js";
import { OQ as SystemNetworkStore } from "./77347.js";
import { H as AppDetailsStore } from "./78057.js";
import { _ as EmojiStore } from "./78475.js";
import { ShowVROverlay } from "./80553.js";
import {
	s7 as CloudStorage,
	Jq as EUserConfigStoreNamespace,
} from "./81482.js";
import { U as U_1 } from "./83184.js";
import { J as TrendingStore } from "./83399.js";
import { Fm as DynamicUserStore } from "./83591.js";
import { wd as CLogger } from "./83599.js";
import * as Ye from "./83957.js";
import { v3 as ControllerConfigStore } from "./85360.js";
import { MeasureExecTime } from "./measureexectime.js";
import { LN as FriendsChatStore } from "./87913.js";
import { I as VRGamepadUIMessages } from "./91369.js";
import { Z9 as GameRecordingStore } from "./91720.js";
import { hG as SettingsZooStore } from "./91745.js";
import { x3 as PlayNextStore } from "./92749.js";
import { o } from "./93960.js";
import { y } from "./94361.js";
import { tw as AppStore } from "./96593.js";
import { EMusicPlayingRepeatStatus } from "@steamclient_types/Music.js";
import { EParentalFeature } from "@steamclient_types/Parental.js";
import { ELanguage } from "@steamclient_types/Settings.js";
import { EResult } from "@steamclient_types/shared.js";
import {
	CurrentUser,
	EFamilyGroupRole,
	ELoginState,
} from "@steamclient_types/User.js";

const rgNavHandlerURLs: [string, number[], (e: any) => void, any][] = [
	[
		"url",
		[7, 4],
		(e) => {
			let { navigate, strRest } = e;
			const [n, ...i] = strRest.split("/");
			const a = URLStore.ResolveURL(n, ...i);
			if (!a) {
				logger_NavHandlers.Error(
					`WebURL ${n} is not registered in URLStore, cannot navigate to ${strRest} `,
				);
				return;
			}
			navigate.SteamWeb(a);
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"helpurl",
		[7, 4],
		(e) => {
			let { strRest: t, navigate: r } = e;
			let n = URLStore.ResolveURL("HelpFrontPage");
			if (t.startsWith("/")) {
				n += t;
			} else {
				n += `/${t}`;
			}
			r.SteamWeb(n);
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"openurl",
		[7, 4],
		(e) => {
			const { navigate: t, strRest: r } = e;
			if (URLStore.BIsSteamURL(r)) {
				t.SteamWeb(r);
			} else if (r.startsWith("http://") || r.startsWith("https://")) {
				t.ExternalWeb(r);
			}
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"openurl_external",
		[7, 4],
		(e) => {
			const { strRest: t, navigate: r } = e;
			if (t.startsWith("http://") || t.startsWith("https://")) {
				r.ExternalWeb(t);
			}
		},
	],
	[
		"openurlforpid",
		[7, 4],
		(e) => {
			const { strRest: t, rgURLParts: r, navigate: n } = e;
			if (r.length < 2) {
				return;
			}
			const i = t.indexOf("/");
			const a = t.substring(i + 1);
			const s = parseInt(r.shift());
			const o = SteamUIStore.GetWindowInstanceForPID(s);
			const c = o?.Navigator || n;
			if (URLStore.BIsSteamURL(a)) {
				c.SteamWeb(a);
			} else {
				c.ExternalWeb(a);
			}
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"openexternalforpid",
		7,
		(e) => {
			const { strRest: t, rgURLParts: r, navigate: n } = e;
			if (r.length < 2) {
				return;
			}
			const i = t.indexOf("/");
			const a = t.substring(i + 1);
			const s = parseInt(r.shift());
			const o = SteamUIStore.GetWindowInstanceForPID(s);
			const c = o?.Navigator || n;
			if (N(a)) {
				c.SteamWebTab(a);
			} else {
				c.ExternalWeb(a);
			}
		},
	],
	[
		"openexternalforpid",
		4,
		(e) => {
			const { url: t, strRest: r, rgURLParts: n, navigate: i } = e;
			if (n.length < 2) {
				return;
			}
			const a = r.indexOf("/");
			const s = r.substring(a + 1);
			const o = parseInt(n.shift());
			const c = SteamUIStore.GetWindowInstanceForPID(o);
			const m = c?.Navigator || i;
			if (N(s)) {
				OverlayModalDialogsStore.OnSteamURLOpenExternalForPID(t);
			} else {
				m.ExternalWeb(s);
			}
		},
	],
	[
		"open/apprunningcontrols",
		4,
		({ navigate: e, url: t, rgURLParts: r }) =>
			e.AppOverlay.AppRunningControls(),
	],
	[
		"publisher",
		[7, 4],
		(e) => {
			const { url: t, navigate: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = URLStore.ResolveURL("StorePublisherPage", i);
				r.SteamWeb(e);
			}
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"open/storefront",
		[7, 4],
		F,
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"open/defaultdialog/maininstance",
		[7, 4],
		G,
		{
			bForceOpenInMainInstance: true,
		},
	],
	["open/defaultdialog", [7, 4], G],
	[
		["store", "purchase", "advertise", "store_demo"],
		[7, 4],
		NavigateSteamWeb,
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"storeurl",
		[7, 4],
		(e) => {
			const { url: t, navigate: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = `${URLStore.GetStoreURL()}/${i}`;
				r.SteamWeb(e);
			}
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"broadcast/watch",
		[7, 4],
		(e) => {
			const { url: t, navigate: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = URLStore.ResolveURL("SteamIDBroadcastPage", i);
				r.SteamWeb(e);
			}
		},
	],
	[
		"video/watch",
		7,
		(e) => {
			const { url: t, navigate: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = Number(i);
				const t = URLStore.ResolveURL("WatchVideo", e);
				r.SteamWeb(t);
			}
		},
	],
	[
		["appnews", "updatenews"],
		7,
		(e) => {
			const { url: t, navigate: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = Number(i);
				const t = URLStore.ResolveURL("AppNewsPage", e);
				r.SteamWeb(t);
			}
		},
		{
			bRequiresLargeMode: true,
		},
	],
	[["open/library", "open/games", "nav/games"], [7, 4, 0], OnRunOpenLibraryURL],
	[
		["open/downloads", "nav/downloads"],
		[7, 4, 0],
		({ navigate: e }) => e.Downloads(),
		{
			bRequiresLargeMode: true,
		},
	],
	[
		"open/minigameslist",
		[7],
		() => {
			const [e, t] = SettingsStore.GetClientSetting("small_mode");
			SteamClient.UI.SetUIMode(7);
			SteamUIStore.WindowStore.EnsureMainWindowCreated();
			t(true);
		},
	],
	[
		"open/largegameslist",
		7,
		() => {
			SteamClient.UI.SetUIMode(7);
			SteamUIStore.WindowStore.EnsureMainWindowCreated();
			n6.EnsureLargeMode();
		},
		{
			bRequiresLargeMode: true,
		},
	],
	["open/largegameslist", 4, OnRunOpenLibraryURL],
	[
		"cdkeys",
		[7, 4],
		(e) => {
			const { url: t, window: r, rgURLParts: n } = e;
			const [i] = n;
			if (i) {
				const e = Number(i);
				const t = AppStore.GetAppOverviewByAppID(e);
				if (t) {
					F_1(r, t);
				}
			}
		},
	],
	["open/friends", 4, ({ navigate: e }) => e.Chat()],
	[
		["open/console", "nav/console"],
		[7, 4],
		({ navigate: e }) => e.Console(),
		{
			bRequiresLargeMode: true,
		},
	],
	["open/screenshots", 4, ({ navigate: e }) => e.Media.Grid()],
	[
		["settings", "open/settings"],
		4,
		({ navigate: e, url: t, rgURLParts: r }) => {
			const [n] = r;
			logger_NavHandlers.Debug("Navigating to gamepad settings page:", t);
			let i = Bv[n];
			if (!i) {
				if (n) {
					logger_NavHandlers.Error("unhandled settings page", n);
				}
				i = "General";
			}
			return e.Settings(i);
		},
	],
	[
		["settings", "open/settings"],
		7,
		(e) => {
			const { url: t, rgURLParts: r } = e;
			let [n] = r;
			if (n == "gr") {
				n = "gamerecording";
			}
			logger_NavHandlers.Debug("Navigating to desktop settings page:", t);
			let i = Bv[n];
			if (!i) {
				if (n) {
					logger_NavHandlers.Error("unhandled settings page", n);
				}
				i = "Account";
			}
			Sj(i);
		},
		{
			bForceOpenInMainInstance: true,
		},
	],
	[
		"currentcontrollerconfig",
		4,
		({ navigate: e, url: t }) => {
			let r = Number(t.split("/").pop());
			if (!r) {
				r = ControllerConfigStore?.EditingConfigurationAppId;
				if (r <= 0) {
					r = SteamUIStore.MainRunningApp?.appid;
				}
			}
			if (r) {
				e.ControllerConfigurator.Main(r);
			}
		},
	],
	[
		"viewfriendsgame",
		[7, 4],
		(e) => {
			const t = e.rgURLParts[0];
			const r = e.instance;
			ServerBrowserStore.ShowUserGameInfoDialog(
				r?.params.browserInfo.m_unPID,
				new b_2(t),
			);
		},
	],
	[
		"joinfriendsgame",
		[7, 4],
		(e) => {
			const t = e.rgURLParts[0];
			ServerBrowserStore.ConnectToFriendsGameBySteamID(new b_2(t), e.window);
		},
	],
	[
		"ClientBeta",
		7,
		(e) => {
			const { window: t, url: r } = e;
			Sj("Interface");
		},
	],
	[
		"ClientBeta",
		4,
		(e) => {
			const { navigate: t } = e;
			t.Settings("System");
		},
	],
	[
		"open/activateproduct",
		7,
		(e) => {
			U_1(e.window);
		},
	],
	[
		"backup",
		7,
		(e) => {
			const t = Number(e.rgURLParts[0]);
			vq([t], e.window);
		},
	],
	[
		"validate",
		7,
		(e) => {
			const t = Number(e.rgURLParts[0]);
			if (AppStore.GetAppOverviewByAppID(t)) {
				GameActionStore.VerifyAppFiles(t);
				e.navigate.App(t);
			}
		},
	],
	[
		["open/tools", "nav/tools"],
		[7, 4],
		(e) => n6.OnOpenLibrary("steam://open/library/view/tools", e.instance),
	],
	[
		"open/restoredialog",
		7,
		(e) => {
			const { window: t } = e;
			ht_1(t);
		},
	],
	[
		"exit",
		[7, 4],
		(e) => {
			SteamClient.User.StartShutdown(true);
		},
	],
	[
		"friends/add",
		[7, 4],
		({ navigate: e }) => {
			e.SteamWeb(URLStore.ResolveURL("CommunityAddFriends"));
		},
	],
	["friends/status/online", [7, 4], () => OnRunPersonaStateURL(1)],
	["friends/status/away", [7, 4], () => OnRunPersonaStateURL(3)],
	["friends/status/invisible", [7, 4], () => OnRunPersonaStateURL(7)],
	["friends/status/offline", [7, 4], () => OnRunPersonaStateURL(0)],
	[
		"friends/ShowChatRoomGroupInvite",
		[7, 4],
		(e) => {
			let t = {
				command: "ShowChatRoomGroupInvite",
				invite_code: e.rgURLParts[0],
			};
			let r = PR();
			let n = e.instance.params.browserInfo;
			r.ExecuteCommand(n, t);
		},
	],
	[
		"itemstore",
		[7, 4],
		({ navigate: e, rgURLParts: t }) => {
			if (t.length != 1) {
				return;
			}
			let r = t[0];
			const n = URLStore.ResolveURL("ItemStorePage", r);
			e.SteamWeb(n);
		},
	],
	[
		"itemstoredetail",
		[7, 4],
		({ navigate: e, rgURLParts: t }) => {
			if (t.length != 2) {
				return;
			}
			let r = t[0];
			let n = t[1];
			const i = URLStore.ResolveURL("ItemStoreDetailPage", r, n);
			e.SteamWeb(i);
		},
	],
	[
		"guestpasses",
		[7, 4],
		({ navigate: e }) => {
			const t = URLStore.ResolveURL("ManageGiftsPage");
			e.SteamWeb(t);
		},
	],
	[
		"connect",
		[7],
		(e) => {
			const { rgURLParts: t } = e;
			let r = t[0];
			let n = 27015;
			let i = r.indexOf(":");
			if (i > 0) {
				n = parseInt(r.slice(i + 1));
				r = r.slice(0, i);
			}
			let a = t.length >= 2 ? t[1] : null;
			const s = {
				ip: r,
				port: n,
				queryPort: n,
			};
			ServerBrowserStore.ShowServerGameInfoDialog(s).then((e) => {
				if (a) {
					e.SetPassword(a);
				}
				e.Connect(false);
			});
		},
	],
	[
		"open/bigpicture/storefront",
		[7, 4],
		F,
		{
			bRequiresLargeMode: true,
		},
	],
	["open/bigpicture/store", [7, 4], NavigateSteamWeb],
	["open/bigpicture/games", [7, 4], OnRunOpenLibraryURL],
	["open/bigpicture/librarydetails", [7, 4], OnRunOpenLibraryURL],
	[
		"open/bigpicture/workshopitem",
		[7, 4],
		({ navigate: e, rgURLParts: t }) => {
			const r = t[0];
			if (r) {
				const t = Number(r);
				const n = URLStore.ResolveURL("CommunityFilePage", t);
				e.SteamWeb(n);
			}
		},
	],
	[
		"open/bigpicture",
		[7, 4],
		({ navigate: e }) => {
			if (qL.IsSteamVRRunning && qL.IsVRHMDAwake) {
				const e = SteamUIStore.WindowStore.GetVRWindowInstance();
				if (e) {
					ShowVROverlay(e.GetMainVROverlayKey());
				}
			} else {
				SteamClient.UI.SetUIMode(4);
			}
		},
	],
	[
		"devmode",
		[7, 4],
		({ rgURLParts: e }) => {
			if (e.length == 1 && (e[0] == "enable" || e[0] == "disable")) {
				const bEnabled = e[0] == "enable";
				Config.DEV_MODE = bEnabled;
				SteamClient._internal?.SetDevMode(bEnabled);
			}
		},
	],
	[
		"webhelper/disablegpu",
		[7, 4],
		({ rgURLParts }) => {
			SteamClient._internal?.RequestDisableGpu();
		},
	],
];
const logger_NavHandlers = new CLogger("NavHandlers");

function RegisterForRunSteamURLs() {
	const callback = (...args) => {
		const [part, rgUIModes, cb, opts] = args;
		const eUIMode = Array.isArray(rgUIModes) ? rgUIModes : [rgUIModes];
		const s = Array.isArray(part) ? part : [part];
		eUIMode.forEach((e) =>
			s.forEach((t) =>
				CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.RegisterForRunSteamURL(
					e,
					t,
					((mode, t, r, n) => (eSource, url) => {
						const { strProtocol, strSteamURL, rgParts, strRest, params } = zK(
							t,
							url,
						);
						if (!Ab(strProtocol)) {
							return;
						}
						if (strSteamURL != t) {
							return;
						}

						if (mode == 7 && n?.bRequiresLargeMode) {
							n6.EnsureLargeMode();
						}
						let instance =
							SteamUIStore.WindowStore.MainWindowInstance ??
							SteamUIStore.ActiveWindowInstance;
						if (
							!n?.bForceOpenInMainInstance &&
							qL.IsSteamVRRunning &&
							qL.IsVRHMDAwake
						) {
							instance =
								SteamUIStore.WindowStore.GetVRWindowInstance() ?? instance;
							if (instance?.IsVRWindow()) {
								ShowVROverlay(instance.GetMainVROverlayKey());
							}
						}
						return r({
							mode,
							eSource,
							url,
							navigate: instance?.Navigator ?? z.GetNavigator(),
							window: instance?.BrowserWindow || window,
							instance,
							rgURLParts: rgParts,
							urlParams: params,
							strSteamURL: t,
							strRest,
						});
					})(e, t, cb, opts),
				),
			),
		);
	};
	rgNavHandlerURLs.forEach((t) => callback(...t));
}

function N(e) {
	return (
		!!On(e, Config.STORE_BASE_URL) ||
		!!On(e, Config.COMMUNITY_BASE_URL) ||
		!!On(e, Config.COMMUNITY_BASE_URL) ||
		!!On(e, Config.HELP_BASE_URL) ||
		!!On(e, Config.COMMUNITY_BASE_URL) ||
		!!On(e, Config.HELP_BASE_URL) ||
		!!On(e, Config.STORE_CHECKOUT_BASE_URL)
	);
}

function F({ navigate }) {
	navigate.SteamWeb(URLStore.GetStoreURL());
}

function G({ navigate }) {
	const [strStartPage] = SettingsStore.GetClientSetting("start_page");
	const [bSmallMode, setSmallMode] =
		SettingsStore.GetClientSetting("small_mode");
	switch (strStartPage) {
		case "library":
		case "friends":
		case "servers": {
			navigate.Home(undefined, {
				bReplace: true,
			});
			break;
		}
		case "console": {
			n6.EnsureLargeMode();
			navigate.Console({
				bReplace: true,
			});
			break;
		}
		case "store": {
			if (bSmallMode || ParentalStore.BIsFeatureBlocked(1)) {
				navigate.Home(undefined, {
					bReplace: true,
				});
			} else {
				setSmallMode(false);
				navigate.SteamWeb(URLStore.ResolveURL("StoreFrontPage"), {
					bReplace: true,
				});
			}
			break;
		}
		default: {
			const startPages = {
				friendactivity: {
					knownUrl: "SteamIDFriendsPage",
					eFeature: EParentalFeature.Friends,
				},
				community: {
					knownUrl: "CommunityHome",
					eFeature: EParentalFeature.Community,
				},
				news: {
					knownUrl: "NewsHomePage",
					eFeature: EParentalFeature.News,
				},
			};
			if (
				strStartPage in startPages &&
				!ParentalStore.BIsFeatureBlocked(startPages[strStartPage].eFeature)
			) {
				setSmallMode(false);
				navigate.SteamWeb(
					URLStore.ResolveURL(startPages[strStartPage].knownUrl),
					{
						bReplace: true,
					},
				);
			} else {
				navigate.Home(undefined, {
					bReplace: true,
				});
			}
		}
	}
}

function NavigateSteamWeb(e) {
	const { navigate, rgURLParts } = e;
	const strFirstPart = rgURLParts[0];
	if (strFirstPart) {
		let url = URLStore.ResolveURL("StoreAppPage", strFirstPart);
		if (url.endsWith("/")) {
			url = url.slice(0, -1);
		}
		navigate.SteamWeb(url);
	} else {
		navigate.SteamWeb(URLStore.GetStoreURL());
	}
}

function OnRunOpenLibraryURL({ url, instance }) {
	return n6.OnOpenLibrary(url, instance);
}

function OnRunPersonaStateURL(e) {
	bg().SetUserPersonaState(e, true);
}

class CBaseTester {
	AssertEq<T>(a: T, b: T, what: string) {
		if (a === b) {
			return true;
		}
		throw Error(`${what} unexpected value: have:'${a}' got:'${b}'`);
	}

	AssertNe<T>(a: T, b: T, what: string) {
		if (a !== b) {
			return true;
		}
		throw Error(`${what} unexpected equality: have:'${a}' got:'${b}'`);
	}

	AssertLt<T>(a: T, b: T, what: string) {
		if (a < b) {
			return true;
		}
		throw Error(`${what} failed lt test: have:'${a}' got:'${b}'`);
	}

	AssertGt<T>(a: T, b: T, what: string) {
		if (a > b) {
			return true;
		}
		throw Error(`${what} failed gt test: have:'${a}' got:'${b}'`);
	}

	async MeasureTestLatency(what: string, ops: number, op: () => Promise<void>) {
		let nAvgMs = 0;
		let nMinMs = Number.MAX_VALUE;
		let nMaxMs = 0;
		for (let e = 0; e < ops; ++e) {
			const t = performance.now();
			await op();
			const s = performance.now() - t;
			nAvgMs += (s - nAvgMs) / (e + 1);
			nMinMs = Math.min(s, nMinMs);
			nMaxMs = Math.max(s, nMaxMs);
		}
		console.log(
			`${what}: avg: ${nAvgMs.toFixed(3)} ms, min: ${nMinMs.toFixed(3)} ms, max: ${nMaxMs.toFixed(
				3,
			)} ms, count: ${ops} ops`,
		);
		return {
			nAvgMs,
			nMinMs,
			nMaxMs,
		};
	}

	async MeasureTestThroughput(what: string, ops: number, op: () => void) {
		const rgOps = [];
		const ts = performance.now();
		for (let i = 0; i < ops; ++i) {
			rgOps.push(op());
		}
		for (const i of rgOps) {
			await i;
		}
		const nElapsedMs = performance.now() - ts;
		const nMsPerOperation = nElapsedMs / ops;
		const nOpsPerSec = (1 / nMsPerOperation) * 1000;
		console.log(
			`${what}: rate: ${nOpsPerSec.toFixed(3)} ops/s, per-op: ${nMsPerOperation.toFixed(
				3,
			)} ms, total time: ${nElapsedMs.toFixed(3)} ms, count: ${ops} ops`,
		);
		return {
			nElapsedMs,
			nMsPerOperation,
			nOpsPerSec,
		};
	}
}

class CTransportValidation_AppendToString_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_AppendToString_Request.prototype.append_strings) {
			Sg(CTransportValidation_AppendToString_Request.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_AppendToString_Request.sm_m ||= {
			proto: CTransportValidation_AppendToString_Request,
			fields: {
				append_strings: {
					n: 1,
					r: true,
					q: true,
					br: qM.readString,
					bw: gp.writeRepeatedString,
				},
			},
		};
		return CTransportValidation_AppendToString_Request.sm_m;
	}
	static MBF() {
		CTransportValidation_AppendToString_Request.sm_mbf ||= w0(
			CTransportValidation_AppendToString_Request.M(),
		);
		return CTransportValidation_AppendToString_Request.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_AppendToString_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_AppendToString_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_AppendToString_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_AppendToString_Request();
		return CTransportValidation_AppendToString_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_AppendToString_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_AppendToString_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_AppendToString_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_AppendToString_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_AppendToString_Request";
	}
}

class CTransportValidation_AppendToString_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_AppendToString_Response.prototype.combined_text) {
			Sg(CTransportValidation_AppendToString_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_AppendToString_Response.sm_m ||= {
			proto: CTransportValidation_AppendToString_Response,
			fields: {
				combined_text: {
					n: 1,
					br: qM.readString,
					bw: gp.writeString,
				},
			},
		};
		return CTransportValidation_AppendToString_Response.sm_m;
	}
	static MBF() {
		CTransportValidation_AppendToString_Response.sm_mbf ||= w0(
			CTransportValidation_AppendToString_Response.M(),
		);
		return CTransportValidation_AppendToString_Response.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_AppendToString_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_AppendToString_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_AppendToString_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_AppendToString_Response();
		return CTransportValidation_AppendToString_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_AppendToString_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_AppendToString_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_AppendToString_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_AppendToString_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_AppendToString_Response";
	}
}

class CTransportValidation_NotifyText_Notification extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_NotifyText_Notification.prototype.text) {
			Sg(CTransportValidation_NotifyText_Notification.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_NotifyText_Notification.sm_m ||= {
			proto: CTransportValidation_NotifyText_Notification,
			fields: {
				text: {
					n: 1,
					br: qM.readString,
					bw: gp.writeString,
				},
			},
		};
		return CTransportValidation_NotifyText_Notification.sm_m;
	}
	static MBF() {
		CTransportValidation_NotifyText_Notification.sm_mbf ||= w0(
			CTransportValidation_NotifyText_Notification.M(),
		);
		return CTransportValidation_NotifyText_Notification.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_NotifyText_Notification.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_NotifyText_Notification.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_NotifyText_Notification.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_NotifyText_Notification();
		return CTransportValidation_NotifyText_Notification.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_NotifyText_Notification.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_NotifyText_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_NotifyText_Notification.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_NotifyText_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_NotifyText_Notification";
	}
}

class CTransportValidation_NotifyNumber_Notification extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_NotifyNumber_Notification.prototype.number) {
			Sg(CTransportValidation_NotifyNumber_Notification.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_NotifyNumber_Notification.sm_m ||= {
			proto: CTransportValidation_NotifyNumber_Notification,
			fields: {
				number: {
					n: 1,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
			},
		};
		return CTransportValidation_NotifyNumber_Notification.sm_m;
	}
	static MBF() {
		CTransportValidation_NotifyNumber_Notification.sm_mbf ||= w0(
			CTransportValidation_NotifyNumber_Notification.M(),
		);
		return CTransportValidation_NotifyNumber_Notification.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_NotifyNumber_Notification.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_NotifyNumber_Notification.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_NotifyNumber_Notification.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_NotifyNumber_Notification();
		return CTransportValidation_NotifyNumber_Notification.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_NotifyNumber_Notification.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_NotifyNumber_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_NotifyNumber_Notification.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_NotifyNumber_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_NotifyNumber_Notification";
	}
}

class CTransportValidation_GetLastNotifyNumber_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CTransportValidation_GetLastNotifyNumber_Request.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new CTransportValidation_GetLastNotifyNumber_Request();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_GetLastNotifyNumber_Request();
		return CTransportValidation_GetLastNotifyNumber_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_GetLastNotifyNumber_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_GetLastNotifyNumber_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_GetLastNotifyNumber_Request";
	}
}

class CTransportValidation_GetLastNotifyNumber_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (
			!CTransportValidation_GetLastNotifyNumber_Response.prototype
				.last_notify_number
		) {
			Sg(CTransportValidation_GetLastNotifyNumber_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_GetLastNotifyNumber_Response.sm_m ||= {
			proto: CTransportValidation_GetLastNotifyNumber_Response,
			fields: {
				last_notify_number: {
					n: 1,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
			},
		};
		return CTransportValidation_GetLastNotifyNumber_Response.sm_m;
	}
	static MBF() {
		CTransportValidation_GetLastNotifyNumber_Response.sm_mbf ||= w0(
			CTransportValidation_GetLastNotifyNumber_Response.M(),
		);
		return CTransportValidation_GetLastNotifyNumber_Response.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_GetLastNotifyNumber_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_GetLastNotifyNumber_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_GetLastNotifyNumber_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_GetLastNotifyNumber_Response();
		return CTransportValidation_GetLastNotifyNumber_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_GetLastNotifyNumber_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_GetLastNotifyNumber_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_GetLastNotifyNumber_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_GetLastNotifyNumber_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_GetLastNotifyNumber_Response";
	}
}

class CTransportValidation_TriggerSyntheticEvents_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_TriggerSyntheticEvents_Request.prototype.count) {
			Sg(CTransportValidation_TriggerSyntheticEvents_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_TriggerSyntheticEvents_Request.sm_m ||= {
			proto: CTransportValidation_TriggerSyntheticEvents_Request,
			fields: {
				count: {
					n: 1,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
			},
		};
		return CTransportValidation_TriggerSyntheticEvents_Request.sm_m;
	}
	static MBF() {
		CTransportValidation_TriggerSyntheticEvents_Request.sm_mbf ||= w0(
			CTransportValidation_TriggerSyntheticEvents_Request.M(),
		);
		return CTransportValidation_TriggerSyntheticEvents_Request.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_TriggerSyntheticEvents_Request.toObject(
			e,
			this,
		);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_TriggerSyntheticEvents_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_TriggerSyntheticEvents_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_TriggerSyntheticEvents_Request();
		return CTransportValidation_TriggerSyntheticEvents_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_TriggerSyntheticEvents_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_TriggerSyntheticEvents_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_TriggerSyntheticEvents_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_TriggerSyntheticEvents_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_TriggerSyntheticEvents_Request";
	}
}

class CTransportValidation_TriggerSyntheticEvents_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CTransportValidation_TriggerSyntheticEvents_Response.toObject(
			e,
			this,
		);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new CTransportValidation_TriggerSyntheticEvents_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_TriggerSyntheticEvents_Response();
		return CTransportValidation_TriggerSyntheticEvents_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_TriggerSyntheticEvents_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_TriggerSyntheticEvents_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_TriggerSyntheticEvents_Response";
	}
}

class CTransportValidation_NotifySyntheticEvent_Notification extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (
			!CTransportValidation_NotifySyntheticEvent_Notification.prototype.sequence
		) {
			Sg(CTransportValidation_NotifySyntheticEvent_Notification.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_NotifySyntheticEvent_Notification.sm_m ||= {
			proto: CTransportValidation_NotifySyntheticEvent_Notification,
			fields: {
				sequence: {
					n: 1,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
			},
		};
		return CTransportValidation_NotifySyntheticEvent_Notification.sm_m;
	}
	static MBF() {
		CTransportValidation_NotifySyntheticEvent_Notification.sm_mbf ||= w0(
			CTransportValidation_NotifySyntheticEvent_Notification.M(),
		);
		return CTransportValidation_NotifySyntheticEvent_Notification.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_NotifySyntheticEvent_Notification.toObject(
			e,
			this,
		);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_NotifySyntheticEvent_Notification.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_NotifySyntheticEvent_Notification.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_NotifySyntheticEvent_Notification();
		return CTransportValidation_NotifySyntheticEvent_Notification.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(
			CTransportValidation_NotifySyntheticEvent_Notification.MBF(),
			e,
			t,
		);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_NotifySyntheticEvent_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_NotifySyntheticEvent_Notification.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_NotifySyntheticEvent_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_NotifySyntheticEvent_Notification";
	}
}

class CTransportValidation_AddNumbers_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_AddNumbers_Request.prototype.numbers) {
			Sg(CTransportValidation_AddNumbers_Request.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_AddNumbers_Request.sm_m ||= {
			proto: CTransportValidation_AddNumbers_Request,
			fields: {
				numbers: {
					n: 1,
					r: true,
					q: true,
					br: qM.readInt32,
					pbr: qM.readPackedInt32,
					bw: gp.writeRepeatedInt32,
				},
			},
		};
		return CTransportValidation_AddNumbers_Request.sm_m;
	}
	static MBF() {
		CTransportValidation_AddNumbers_Request.sm_mbf ||= w0(
			CTransportValidation_AddNumbers_Request.M(),
		);
		return CTransportValidation_AddNumbers_Request.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_AddNumbers_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_AddNumbers_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_AddNumbers_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_AddNumbers_Request();
		return CTransportValidation_AddNumbers_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_AddNumbers_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_AddNumbers_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_AddNumbers_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_AddNumbers_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_AddNumbers_Request";
	}
}

class CTransportValidation_AddNumbers_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_AddNumbers_Response.prototype.accumulated) {
			Sg(CTransportValidation_AddNumbers_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_AddNumbers_Response.sm_m ||= {
			proto: CTransportValidation_AddNumbers_Response,
			fields: {
				accumulated: {
					n: 1,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
			},
		};
		return CTransportValidation_AddNumbers_Response.sm_m;
	}
	static MBF() {
		CTransportValidation_AddNumbers_Response.sm_mbf ||= w0(
			CTransportValidation_AddNumbers_Response.M(),
		);
		return CTransportValidation_AddNumbers_Response.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_AddNumbers_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_AddNumbers_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_AddNumbers_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_AddNumbers_Response();
		return CTransportValidation_AddNumbers_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_AddNumbers_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_AddNumbers_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_AddNumbers_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_AddNumbers_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_AddNumbers_Response";
	}
}

class CTransportValidation_CountOrderedBytes_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (
			!CTransportValidation_CountOrderedBytes_Request.prototype.ordered_bytes
		) {
			Sg(CTransportValidation_CountOrderedBytes_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_CountOrderedBytes_Request.sm_m ||= {
			proto: CTransportValidation_CountOrderedBytes_Request,
			fields: {
				ordered_bytes: {
					n: 1,
					br: qM.readBytes,
					bw: gp.writeBytes,
				},
			},
		};
		return CTransportValidation_CountOrderedBytes_Request.sm_m;
	}
	static MBF() {
		CTransportValidation_CountOrderedBytes_Request.sm_mbf ||= w0(
			CTransportValidation_CountOrderedBytes_Request.M(),
		);
		return CTransportValidation_CountOrderedBytes_Request.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_CountOrderedBytes_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_CountOrderedBytes_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_CountOrderedBytes_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_CountOrderedBytes_Request();
		return CTransportValidation_CountOrderedBytes_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_CountOrderedBytes_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_CountOrderedBytes_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_CountOrderedBytes_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_CountOrderedBytes_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_CountOrderedBytes_Request";
	}
}

class CTransportValidation_CountOrderedBytes_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_CountOrderedBytes_Response.prototype.byte_count) {
			Sg(CTransportValidation_CountOrderedBytes_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_CountOrderedBytes_Response.sm_m ||= {
			proto: CTransportValidation_CountOrderedBytes_Response,
			fields: {
				byte_count: {
					n: 1,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
			},
		};
		return CTransportValidation_CountOrderedBytes_Response.sm_m;
	}
	static MBF() {
		CTransportValidation_CountOrderedBytes_Response.sm_mbf ||= w0(
			CTransportValidation_CountOrderedBytes_Response.M(),
		);
		return CTransportValidation_CountOrderedBytes_Response.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_CountOrderedBytes_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_CountOrderedBytes_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_CountOrderedBytes_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_CountOrderedBytes_Response();
		return CTransportValidation_CountOrderedBytes_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_CountOrderedBytes_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_CountOrderedBytes_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_CountOrderedBytes_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_CountOrderedBytes_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_CountOrderedBytes_Response";
	}
}

class CTransportValidation_ThreadedCount_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_ThreadedCount_Request.prototype.start_num) {
			Sg(CTransportValidation_ThreadedCount_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_ThreadedCount_Request.sm_m ||= {
			proto: CTransportValidation_ThreadedCount_Request,
			fields: {
				start_num: {
					n: 1,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				end_num: {
					n: 2,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
			},
		};
		return CTransportValidation_ThreadedCount_Request.sm_m;
	}
	static MBF() {
		CTransportValidation_ThreadedCount_Request.sm_mbf ||= w0(
			CTransportValidation_ThreadedCount_Request.M(),
		);
		return CTransportValidation_ThreadedCount_Request.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_ThreadedCount_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_ThreadedCount_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_ThreadedCount_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_ThreadedCount_Request();
		return CTransportValidation_ThreadedCount_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_ThreadedCount_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_ThreadedCount_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_ThreadedCount_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_ThreadedCount_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_ThreadedCount_Request";
	}
}

class CTransportValidation_ThreadedCount_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CTransportValidation_ThreadedCount_Response.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new CTransportValidation_ThreadedCount_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_ThreadedCount_Response();
		return CTransportValidation_ThreadedCount_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_ThreadedCount_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_ThreadedCount_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_ThreadedCount_Response";
	}
}

class CTransportValidation_NotifyCount_Notification extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_NotifyCount_Notification.prototype.num) {
			Sg(CTransportValidation_NotifyCount_Notification.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_NotifyCount_Notification.sm_m ||= {
			proto: CTransportValidation_NotifyCount_Notification,
			fields: {
				num: {
					n: 1,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
			},
		};
		return CTransportValidation_NotifyCount_Notification.sm_m;
	}
	static MBF() {
		CTransportValidation_NotifyCount_Notification.sm_mbf ||= w0(
			CTransportValidation_NotifyCount_Notification.M(),
		);
		return CTransportValidation_NotifyCount_Notification.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_NotifyCount_Notification.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_NotifyCount_Notification.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_NotifyCount_Notification.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_NotifyCount_Notification();
		return CTransportValidation_NotifyCount_Notification.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_NotifyCount_Notification.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_NotifyCount_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_NotifyCount_Notification.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_NotifyCount_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_NotifyCount_Notification";
	}
}

class CTransportValidation_RequestInvalidBool_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CTransportValidation_RequestInvalidBool_Request.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new CTransportValidation_RequestInvalidBool_Request();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_RequestInvalidBool_Request();
		return CTransportValidation_RequestInvalidBool_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_RequestInvalidBool_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_RequestInvalidBool_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_RequestInvalidBool_Request";
	}
}

class CTransportValidation_RequestInvalidBool_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_RequestInvalidBool_Response.prototype.before) {
			Sg(CTransportValidation_RequestInvalidBool_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_RequestInvalidBool_Response.sm_m ||= {
			proto: CTransportValidation_RequestInvalidBool_Response,
			fields: {
				before: {
					n: 1,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				output: {
					n: 2,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				after: {
					n: 3,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
			},
		};
		return CTransportValidation_RequestInvalidBool_Response.sm_m;
	}
	static MBF() {
		CTransportValidation_RequestInvalidBool_Response.sm_mbf ||= w0(
			CTransportValidation_RequestInvalidBool_Response.M(),
		);
		return CTransportValidation_RequestInvalidBool_Response.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_RequestInvalidBool_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_RequestInvalidBool_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_RequestInvalidBool_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_RequestInvalidBool_Response();
		return CTransportValidation_RequestInvalidBool_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_RequestInvalidBool_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_RequestInvalidBool_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_RequestInvalidBool_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_RequestInvalidBool_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_RequestInvalidBool_Response";
	}
}

class CTransportValidation_GetLargeResponse_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_GetLargeResponse_Request.prototype.data_size) {
			Sg(CTransportValidation_GetLargeResponse_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_GetLargeResponse_Request.sm_m ||= {
			proto: CTransportValidation_GetLargeResponse_Request,
			fields: {
				data_size: {
					n: 1,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
			},
		};
		return CTransportValidation_GetLargeResponse_Request.sm_m;
	}
	static MBF() {
		CTransportValidation_GetLargeResponse_Request.sm_mbf ||= w0(
			CTransportValidation_GetLargeResponse_Request.M(),
		);
		return CTransportValidation_GetLargeResponse_Request.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_GetLargeResponse_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_GetLargeResponse_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_GetLargeResponse_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_GetLargeResponse_Request();
		return CTransportValidation_GetLargeResponse_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_GetLargeResponse_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_GetLargeResponse_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_GetLargeResponse_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_GetLargeResponse_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_GetLargeResponse_Request";
	}
}

class CTransportValidation_GetLargeResponse_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_GetLargeResponse_Response.prototype.data) {
			Sg(CTransportValidation_GetLargeResponse_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_GetLargeResponse_Response.sm_m ||= {
			proto: CTransportValidation_GetLargeResponse_Response,
			fields: {
				data: {
					n: 1,
					br: qM.readBytes,
					bw: gp.writeBytes,
				},
			},
		};
		return CTransportValidation_GetLargeResponse_Response.sm_m;
	}
	static MBF() {
		CTransportValidation_GetLargeResponse_Response.sm_mbf ||= w0(
			CTransportValidation_GetLargeResponse_Response.M(),
		);
		return CTransportValidation_GetLargeResponse_Response.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_GetLargeResponse_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_GetLargeResponse_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_GetLargeResponse_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_GetLargeResponse_Response();
		return CTransportValidation_GetLargeResponse_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_GetLargeResponse_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_GetLargeResponse_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_GetLargeResponse_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_GetLargeResponse_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_GetLargeResponse_Response";
	}
}

class CTransportValidation_RequestLargeNotification_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (
			!CTransportValidation_RequestLargeNotification_Request.prototype.data_size
		) {
			Sg(CTransportValidation_RequestLargeNotification_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_RequestLargeNotification_Request.sm_m ||= {
			proto: CTransportValidation_RequestLargeNotification_Request,
			fields: {
				data_size: {
					n: 1,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
			},
		};
		return CTransportValidation_RequestLargeNotification_Request.sm_m;
	}
	static MBF() {
		CTransportValidation_RequestLargeNotification_Request.sm_mbf ||= w0(
			CTransportValidation_RequestLargeNotification_Request.M(),
		);
		return CTransportValidation_RequestLargeNotification_Request.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_RequestLargeNotification_Request.toObject(
			e,
			this,
		);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_RequestLargeNotification_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_RequestLargeNotification_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_RequestLargeNotification_Request();
		return CTransportValidation_RequestLargeNotification_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(
			CTransportValidation_RequestLargeNotification_Request.MBF(),
			e,
			t,
		);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_RequestLargeNotification_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_RequestLargeNotification_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_RequestLargeNotification_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_RequestLargeNotification_Request";
	}
}

class CTransportValidation_RequestLargeNotification_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CTransportValidation_RequestLargeNotification_Response.toObject(
			e,
			this,
		);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new CTransportValidation_RequestLargeNotification_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_RequestLargeNotification_Response();
		return CTransportValidation_RequestLargeNotification_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_RequestLargeNotification_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_RequestLargeNotification_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_RequestLargeNotification_Response";
	}
}

class CTransportValidation_NotifyLarge_Notification extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidation_NotifyLarge_Notification.prototype.data) {
			Sg(CTransportValidation_NotifyLarge_Notification.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidation_NotifyLarge_Notification.sm_m ||= {
			proto: CTransportValidation_NotifyLarge_Notification,
			fields: {
				data: {
					n: 1,
					br: qM.readBytes,
					bw: gp.writeBytes,
				},
			},
		};
		return CTransportValidation_NotifyLarge_Notification.sm_m;
	}
	static MBF() {
		CTransportValidation_NotifyLarge_Notification.sm_mbf ||= w0(
			CTransportValidation_NotifyLarge_Notification.M(),
		);
		return CTransportValidation_NotifyLarge_Notification.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidation_NotifyLarge_Notification.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidation_NotifyLarge_Notification.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidation_NotifyLarge_Notification.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidation_NotifyLarge_Notification();
		return CTransportValidation_NotifyLarge_Notification.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidation_NotifyLarge_Notification.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidation_NotifyLarge_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidation_NotifyLarge_Notification.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidation_NotifyLarge_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidation_NotifyLarge_Notification";
	}
}

class CTransportValidationClient_AddNumbers_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidationClient_AddNumbers_Request.prototype.numbers) {
			Sg(CTransportValidationClient_AddNumbers_Request.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidationClient_AddNumbers_Request.sm_m ||= {
			proto: CTransportValidationClient_AddNumbers_Request,
			fields: {
				numbers: {
					n: 1,
					r: true,
					q: true,
					br: qM.readInt32,
					pbr: qM.readPackedInt32,
					bw: gp.writeRepeatedInt32,
				},
			},
		};
		return CTransportValidationClient_AddNumbers_Request.sm_m;
	}
	static MBF() {
		CTransportValidationClient_AddNumbers_Request.sm_mbf ||= w0(
			CTransportValidationClient_AddNumbers_Request.M(),
		);
		return CTransportValidationClient_AddNumbers_Request.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidationClient_AddNumbers_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidationClient_AddNumbers_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidationClient_AddNumbers_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidationClient_AddNumbers_Request();
		return CTransportValidationClient_AddNumbers_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidationClient_AddNumbers_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidationClient_AddNumbers_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidationClient_AddNumbers_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidationClient_AddNumbers_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidationClient_AddNumbers_Request";
	}
}

class CTransportValidationClient_AddNumbers_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportValidationClient_AddNumbers_Response.prototype.accumulated) {
			Sg(CTransportValidationClient_AddNumbers_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportValidationClient_AddNumbers_Response.sm_m ||= {
			proto: CTransportValidationClient_AddNumbers_Response,
			fields: {
				accumulated: {
					n: 1,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
			},
		};
		return CTransportValidationClient_AddNumbers_Response.sm_m;
	}
	static MBF() {
		CTransportValidationClient_AddNumbers_Response.sm_mbf ||= w0(
			CTransportValidationClient_AddNumbers_Response.M(),
		);
		return CTransportValidationClient_AddNumbers_Response.sm_mbf;
	}
	toObject(e = false) {
		return CTransportValidationClient_AddNumbers_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportValidationClient_AddNumbers_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportValidationClient_AddNumbers_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportValidationClient_AddNumbers_Response();
		return CTransportValidationClient_AddNumbers_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportValidationClient_AddNumbers_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportValidationClient_AddNumbers_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportValidationClient_AddNumbers_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportValidationClient_AddNumbers_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportValidationClient_AddNumbers_Response";
	}
}

let TransportValidationService;
let TransportValidationClientService;
((e) => {
	e.AppendToStringHandler = {
		name: "TransportValidation.AppendToString#1",
		request: CTransportValidation_AppendToString_Request,
		response: CTransportValidation_AppendToString_Response,
	};
	e.AppendToString = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.AppendToString#1",
				I8(CTransportValidation_AppendToString_Request, e),
				CTransportValidation_AppendToString_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgAppendToString = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.AppendToString#1",
				I8(CTransportValidation_AppendToString_Request, e),
				CTransportValidation_AppendToString_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.AddNumbersHandler = {
		name: "TransportValidation.AddNumbers#1",
		request: CTransportValidation_AddNumbers_Request,
		response: CTransportValidation_AddNumbers_Response,
	};
	e.AddNumbers = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.AddNumbers#1",
				I8(CTransportValidation_AddNumbers_Request, e),
				CTransportValidation_AddNumbers_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgAddNumbers = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.AddNumbers#1",
				I8(CTransportValidation_AddNumbers_Request, e),
				CTransportValidation_AddNumbers_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.AddNumbersStaticHandler = {
		name: "TransportValidation.AddNumbersStatic#1",
		request: CTransportValidation_AddNumbers_Request,
		response: CTransportValidation_AddNumbers_Response,
	};
	e.AddNumbersStatic = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.AddNumbersStatic#1",
				I8(CTransportValidation_AddNumbers_Request, e),
				CTransportValidation_AddNumbers_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgAddNumbersStatic = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.AddNumbersStatic#1",
				I8(CTransportValidation_AddNumbers_Request, e),
				CTransportValidation_AddNumbers_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyTextHandler = {
		name: "TransportValidation.NotifyText#1",
		request: CTransportValidation_NotifyText_Notification,
	};
	e.RegisterForNotifyText = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(e.NotifyTextHandler, t);
		}
	};
	e.NotifyText = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyText#1",
				I8(CTransportValidation_NotifyText_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyText = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyText#1",
				I8(CTransportValidation_NotifyText_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyNumberHandler = {
		name: "TransportValidation.NotifyNumber#1",
		request: CTransportValidation_NotifyNumber_Notification,
	};
	e.RegisterForNotifyNumber = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(e.NotifyNumberHandler, t);
		}
	};
	e.NotifyNumber = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyNumber#1",
				I8(CTransportValidation_NotifyNumber_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyNumber = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyNumber#1",
				I8(CTransportValidation_NotifyNumber_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetLastNotifyNumberHandler = {
		name: "TransportValidation.GetLastNotifyNumber#1",
		request: CTransportValidation_GetLastNotifyNumber_Request,
		response: CTransportValidation_GetLastNotifyNumber_Response,
	};
	e.GetLastNotifyNumber = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.GetLastNotifyNumber#1",
				I8(CTransportValidation_GetLastNotifyNumber_Request, e),
				CTransportValidation_GetLastNotifyNumber_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetLastNotifyNumber = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.GetLastNotifyNumber#1",
				I8(CTransportValidation_GetLastNotifyNumber_Request, e),
				CTransportValidation_GetLastNotifyNumber_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifySyntheticEventHandler = {
		name: "TransportValidation.NotifySyntheticEvent#1",
		request: CTransportValidation_NotifySyntheticEvent_Notification,
	};
	e.RegisterForNotifySyntheticEvent = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifySyntheticEventHandler,
				t,
			);
		}
	};
	e.NotifySyntheticEvent = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifySyntheticEvent#1",
				I8(CTransportValidation_NotifySyntheticEvent_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifySyntheticEvent = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifySyntheticEvent#1",
				I8(CTransportValidation_NotifySyntheticEvent_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.TriggerSyntheticEventsHandler = {
		name: "TransportValidation.TriggerSyntheticEvents#1",
		request: CTransportValidation_TriggerSyntheticEvents_Request,
		response: CTransportValidation_TriggerSyntheticEvents_Response,
	};
	e.TriggerSyntheticEvents = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.TriggerSyntheticEvents#1",
				I8(CTransportValidation_TriggerSyntheticEvents_Request, e),
				CTransportValidation_TriggerSyntheticEvents_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgTriggerSyntheticEvents = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.TriggerSyntheticEvents#1",
				I8(CTransportValidation_TriggerSyntheticEvents_Request, e),
				CTransportValidation_TriggerSyntheticEvents_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.CountOrderedBytesHandler = {
		name: "TransportValidation.CountOrderedBytes#1",
		request: CTransportValidation_CountOrderedBytes_Request,
		response: CTransportValidation_CountOrderedBytes_Response,
	};
	e.CountOrderedBytes = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.CountOrderedBytes#1",
				I8(CTransportValidation_CountOrderedBytes_Request, e),
				CTransportValidation_CountOrderedBytes_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgCountOrderedBytes = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.CountOrderedBytes#1",
				I8(CTransportValidation_CountOrderedBytes_Request, e),
				CTransportValidation_CountOrderedBytes_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.ThreadedCountHandler = {
		name: "TransportValidation.ThreadedCount#1",
		request: CTransportValidation_ThreadedCount_Request,
		response: CTransportValidation_ThreadedCount_Response,
	};
	e.ThreadedCount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.ThreadedCount#1",
				I8(CTransportValidation_ThreadedCount_Request, e),
				CTransportValidation_ThreadedCount_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgThreadedCount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.ThreadedCount#1",
				I8(CTransportValidation_ThreadedCount_Request, e),
				CTransportValidation_ThreadedCount_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyCountHandler = {
		name: "TransportValidation.NotifyCount#1",
		request: CTransportValidation_NotifyCount_Notification,
	};
	e.RegisterForNotifyCount = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(e.NotifyCountHandler, t);
		}
	};
	e.NotifyCount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyCount#1",
				I8(CTransportValidation_NotifyCount_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyCount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyCount#1",
				I8(CTransportValidation_NotifyCount_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.RequestInvalidBoolHandler = {
		name: "TransportValidation.RequestInvalidBool#1",
		request: CTransportValidation_RequestInvalidBool_Request,
		response: CTransportValidation_RequestInvalidBool_Response,
	};
	e.RequestInvalidBool = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.RequestInvalidBool#1",
				I8(CTransportValidation_RequestInvalidBool_Request, e),
				CTransportValidation_RequestInvalidBool_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgRequestInvalidBool = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.RequestInvalidBool#1",
				I8(CTransportValidation_RequestInvalidBool_Request, e),
				CTransportValidation_RequestInvalidBool_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetLargeResponseHandler = {
		name: "TransportValidation.GetLargeResponse#1",
		request: CTransportValidation_GetLargeResponse_Request,
		response: CTransportValidation_GetLargeResponse_Response,
	};
	e.GetLargeResponse = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.GetLargeResponse#1",
				I8(CTransportValidation_GetLargeResponse_Request, e),
				CTransportValidation_GetLargeResponse_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetLargeResponse = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.GetLargeResponse#1",
				I8(CTransportValidation_GetLargeResponse_Request, e),
				CTransportValidation_GetLargeResponse_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.RequestLargeNotificationHandler = {
		name: "TransportValidation.RequestLargeNotification#1",
		request: CTransportValidation_RequestLargeNotification_Request,
		response: CTransportValidation_RequestLargeNotification_Response,
	};
	e.RequestLargeNotification = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.RequestLargeNotification#1",
				I8(CTransportValidation_RequestLargeNotification_Request, e),
				CTransportValidation_RequestLargeNotification_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgRequestLargeNotification = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidation.RequestLargeNotification#1",
				I8(CTransportValidation_RequestLargeNotification_Request, e),
				CTransportValidation_RequestLargeNotification_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyLargeHandler = {
		name: "TransportValidation.NotifyLarge#1",
		request: CTransportValidation_NotifyLarge_Notification,
	};
	e.RegisterForNotifyLarge = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(e.NotifyLargeHandler, t);
		}
	};
	e.NotifyLarge = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyLarge#1",
				I8(CTransportValidation_NotifyLarge_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyLarge = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportValidation.NotifyLarge#1",
				I8(CTransportValidation_NotifyLarge_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
})((TransportValidationService ||= {}));

((e) => {
	e.AddNumbersHandler = {
		name: "TransportValidationClient.AddNumbers#1",
		request: CTransportValidationClient_AddNumbers_Request,
		response: CTransportValidationClient_AddNumbers_Response,
	};
	e.AddNumbers = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidationClient.AddNumbers#1",
				I8(CTransportValidationClient_AddNumbers_Request, e),
				CTransportValidationClient_AddNumbers_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgAddNumbers = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportValidationClient.AddNumbers#1",
				I8(CTransportValidationClient_AddNumbers_Request, e),
				CTransportValidationClient_AddNumbers_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
})((TransportValidationClientService ||= {}));

class CWebUITester extends CBaseTester {
	@bind
	async Test_CallMethod() {
		const msg = await TransportValidationService.AppendToString({
			append_strings: ["The ", "most ", "important ", "words"],
		});
		this.AssertEq(EResult.OK, msg.GetEResult(), "eresult");
		this.AssertEq(
			"The most important words",
			msg.Body().combined_text(),
			"combined_text",
		);
	}

	@bind
	async Test_CallMethodClient() {
		const msg = await TransportValidationClientService.AddNumbers({
			numbers: [1, 2, 3, 5, 7, 11, 13],
		});
		this.AssertEq(EResult.OK, msg.GetEResult(), "eresult");
		this.AssertEq(42, msg.Body().accumulated(), "accumulated");
	}

	@bind
	async Test_CallMethodClientSimple() {
		const e = await TransportValidationClientService.AddNumbers({
			numbers: [2, 3],
		});
		this.AssertEq(EResult.OK, e.GetEResult(), "eresult");
		this.AssertEq(5, e.Body().accumulated(), "accumulated");
	}

	@bind
	async Test_CallMethodSimple() {
		const e = await TransportValidationService.AddNumbersStatic({
			numbers: [2, 3],
		});
		this.AssertEq(5, e.Body().accumulated(), "accumulated");
	}

	@bind
	async Test_CallMethodBoundSimple() {
		const e = await TransportValidationService.AddNumbers({
			numbers: [2, 3],
		});
		this.AssertEq(5, e.Body().accumulated(), "accumulated");
	}

	@bind
	async Test_CallMethodSendMsgSimple() {
		const e = w.Init(CTransportValidation_AppendToString_Request);
		e.Body().append_strings().push("The ", "most ", "important ", "words");
		const t = await TransportValidationService.SendMsgAppendToString(e);
		this.AssertEq(EResult.OK, t.GetEResult(), "eresult");
		this.AssertEq(
			"The most important words",
			t.Body().combined_text(),
			"combined_text",
		);
	}

	@bind
	async Test_CallMethodLatency() {
		const e = await this.MeasureTestLatency(
			"WebUI steamui transport latency",
			5000,
			this.Test_CallMethodSimple,
		);
		this.AssertGt(2, e.nAvgMs, "nAvgMs");
	}

	@bind
	async Test_CallMethodThroughput() {
		const e = await this.MeasureTestThroughput(
			"WebUI steamui transport throughput",
			10000,
			this.Test_CallMethodSimple,
		);
		this.AssertLt(5000, e.nOpsPerSec, "nOpsPerSec");
	}

	@bind
	async Test_CallBoundMethodLatency() {
		const e = await this.MeasureTestLatency(
			"WebUI steamui+bind transport latency",
			5000,
			this.Test_CallMethodBoundSimple,
		);
		this.AssertGt(2, e.nAvgMs, "nAvgMs");
	}

	@bind
	async Test_CallBoundMethodThroughput() {
		const e = await this.MeasureTestThroughput(
			"WebUI steamui+bind transport throughput",
			10000,
			this.Test_CallMethodBoundSimple,
		);
		this.AssertLt(5000, e.nOpsPerSec, "nOpsPerSec");
	}

	@bind
	async Test_CallSendMsgMethodLatency() {
		const e = await this.MeasureTestLatency(
			"WebUI steamui+sendmsg transport latency",
			5000,
			this.Test_CallMethodSendMsgSimple,
		);
		this.AssertGt(2, e.nAvgMs, "nAvgMs");
	}

	@bind
	async Test_CallSendMsgMethodThroughput() {
		const e = await this.MeasureTestThroughput(
			"WebUI steamui+sendmsg transport throughput",
			10000,
			this.Test_CallMethodSendMsgSimple,
		);
		this.AssertLt(5000, e.nOpsPerSec, "nOpsPerSec");
	}

	@bind
	async Test_CallClientMethodLatency() {
		const e = await this.MeasureTestLatency(
			"WebUI client transport latency",
			100,
			this.Test_CallMethodClientSimple,
		);
		this.AssertGt(60, e.nAvgMs, "nAvgMs");
	}

	@bind
	async Test_CallClientMethodThroughput() {
		const e = await this.MeasureTestThroughput(
			"WebUI client transport throughput",
			10000,
			this.Test_CallMethodClientSimple,
		);
		this.AssertLt(5000, e.nOpsPerSec, "nOpsPerSec");
	}

	@bind
	async Test_SendNotification() {
		const e = TransportValidationService.NotifyText({
			text: "Hello from WebUI",
		});
		this.AssertEq(true, e, "bResult");
	}

	@bind
	async Test_SendNumberNotification() {
		const e = TransportValidationService.NotifyNumber({
			number: 42,
		});
		this.AssertEq(true, e, "bResult");
		const t = await TransportValidationService.GetLastNotifyNumber({});
		this.AssertEq(EResult.OK, t.GetEResult(), "eresult");
		this.AssertEq(42, t.Body().last_notify_number(), "last_notify_number");
	}
	m_nSyntheticEventReceiveCount = 0;

	@bind
	OnSyntheticEvent(e) {
		this.m_nSyntheticEventReceiveCount++;
		return 1;
	}

	@bind
	async Test_ClientToJSNotification() {
		const e = TransportValidationService.RegisterForNotifySyntheticEvent(
			this.OnSyntheticEvent,
		);
		this.m_nSyntheticEventReceiveCount = 0;
		const t = await TransportValidationService.TriggerSyntheticEvents({
			count: 10,
		});
		this.AssertEq(EResult.OK, t.GetEResult(), "eresult");
		this.AssertEq(10, this.m_nSyntheticEventReceiveCount, "event count");
		e.unregister();
	}
	m_nLastCount = 0;
	m_bCountFail = false;

	@bind
	OnCountEvent(e) {
		const num = e.Body().num();
		if (this.m_nLastCount + 1 != num) {
			this.m_bCountFail = true;
		}
		this.m_nLastCount = num;
		return 1;
	}

	@bind
	async Test_ClientToJSThreadedNotification() {
		const e = TransportValidationService.RegisterForNotifyCount(
			this.OnCountEvent,
		);
		this.m_bCountFail = false;
		this.m_nLastCount = 79;
		const t = await TransportValidationService.ThreadedCount({
			start_num: 80,
			end_num: 100,
		});
		this.AssertEq(EResult.OK, t.GetEResult(), "eresult");
		this.AssertEq(this.m_bCountFail, false, "count fail");
		e.unregister();
	}

	@bind
	async Test_TransportError() {
		const e = w.Init(CTransportValidation_AppendToString_Request);
		const t = await N.SendMsg(
			"Test_TransportError.InvalidService",
			e,
			CTransportValidation_AppendToString_Response,
			{
				ePrivilege: 1,
				eClientExecutionSite: 1,
			},
		);
		this.AssertNe(1, t.Hdr().transport_error(), "transport error");
		this.AssertNe(EResult.OK, t.GetEResult(), "eresult");
	}

	@bind
	async SendBinaryMessage(msg) {
		let bytes = new Uint8Array(msg);
		for (let i = 0; i < bytes.length; i++) {
			bytes[i] = i % 256;
		}
		return await TransportValidationService.CountOrderedBytes({
			ordered_bytes: bytes,
		});
	}

	@bind
	async Test_BinaryData() {
		const e = await this.SendBinaryMessage(32);
		this.AssertEq(EResult.OK, e.GetEResult(), "eresult");
		this.AssertEq(32, e.Body().byte_count(), "byte_count");
	}

	@bind
	async Test_LargeRequest() {
		const e = await this.SendBinaryMessage(N.TEST_GetMaximumMsgBodySizeBytes());
		this.AssertEq(EResult.OK, e.GetEResult(), "large message failed to send");
		const t = await this.SendBinaryMessage(N.GetMaximumMsgSizeBytes() + 1);
		this.AssertEq(
			EResult.Fail,
			t.GetEResult(),
			"over-size-limit message must fail to send",
		);
		const r = await this.SendBinaryMessage(
			N.TEST_GetExcessivelyLargeBodySize(),
		);
		this.AssertEq(
			EResult.Fail,
			r.GetEResult(),
			"disconnect message must fail to send",
		);
	}

	@bind
	async Test_LargeResponse() {
		const e = N.TEST_GetMaximumMsgBodySizeBytes();
		const t = await TransportValidationService.GetLargeResponse({
			data_size: e,
		});
		this.AssertEq(EResult.OK, t.GetEResult(), "unexpected eresult");
		const length = t.Body().toObject().data.byteLength;
		this.AssertEq(e, length, "unexpected size");
	}

	@bind
	async Test_OverLimitResponse() {
		const size = N.TEST_GetExcessivelyLargeBodySize();
		const t = await TransportValidationService.GetLargeResponse({
			data_size: size,
		});
		this.AssertEq(EResult.Fail, t.GetEResult(), "unexpected eresult");
	}
	m_nLastLargeNotificationSize = 0;

	@bind
	OnLargeNotification(e) {
		this.m_nLastLargeNotificationSize = e.Body().toObject().data.byteLength;
		return 1;
	}

	@bind
	async Test_LargeNotification() {
		const e = TransportValidationService.RegisterForNotifyLarge(
			this.OnLargeNotification,
		);
		const t = N.TEST_GetMaximumMsgBodySizeBytes();
		const r = await TransportValidationService.RequestLargeNotification({
			data_size: t,
		});
		this.AssertEq(EResult.OK, r.GetEResult(), "unexpected eresult");
		this.AssertEq(t, this.m_nLastLargeNotificationSize, "unexpected size");
		e.unregister();
	}

	@bind
	async Test_OverLimitNotification() {
		const e = N.TEST_GetExcessivelyLargeBodySize();
		const t = await TransportValidationService.RequestLargeNotification({
			data_size: e,
		});
		this.AssertEq(EResult.Fail, t.GetEResult(), "unexpected eresult");
	}

	@bind
	async Test_InvalidBool() {
		const e = await TransportValidationService.RequestInvalidBool({});
		this.AssertEq(EResult.OK, e.GetEResult(), "eresult");
		const t = e.Body().toObject();
		this.AssertEq(1, t.before, "before");
		if (t.after !== undefined) {
			this.AssertEq(3, t.after, "after set");
		} else {
			this.AssertEq(undefined, t.after, "after undefined");
		}
		if (e.Body().output() === true) {
			this.AssertEq(true, e.Body().output(), "check output true");
		} else {
			this.AssertEq(undefined, e.Body().output(), "check output undefined");
		}
	}

	GetName() {
		return "WebUITransportValidation";
	}

	GetTests() {
		return [
			{
				fnRunTest: this.Test_CallMethod,
			},
			{
				fnRunTest: this.Test_CallMethodClient,
			},
			{
				fnRunTest: this.Test_CallMethodSimple,
			},
			{
				fnRunTest: this.Test_CallMethodBoundSimple,
			},
			{
				fnRunTest: this.Test_CallMethodSendMsgSimple,
			},
			{
				fnRunTest: this.Test_InvalidBool,
			},
			{
				fnRunTest: this.Test_SendNotification,
			},
			{
				fnRunTest: this.Test_SendNumberNotification,
			},
			{
				fnRunTest: this.Test_ClientToJSNotification,
			},
			{
				fnRunTest: this.Test_ClientToJSThreadedNotification,
			},
			{
				fnRunTest: this.Test_CallMethodLatency,
			},
			{
				fnRunTest: this.Test_CallMethodThroughput,
			},
			{
				fnRunTest: this.Test_CallBoundMethodLatency,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_CallBoundMethodThroughput,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_CallSendMsgMethodLatency,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_CallSendMsgMethodThroughput,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_CallClientMethodLatency,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_CallClientMethodThroughput,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_TransportError,
				bFullOnly: true,
			},
			{
				fnRunTest: this.Test_BinaryData,
			},
			{
				fnRunTest: this.Test_LargeRequest,
			},
			{
				fnRunTest: this.Test_LargeResponse,
			},
			{
				fnRunTest: this.Test_OverLimitResponse,
			},
			{
				fnRunTest: this.Test_LargeNotification,
			},
			{
				fnRunTest: this.Test_OverLimitNotification,
			},
		];
	}
}

class CSimpleTestSuite {
	static s_Singleton = null;
	static Get() {
		if (CSimpleTestSuite.s_Singleton == null) {
			CSimpleTestSuite.s_Singleton = new CSimpleTestSuite();
		}
		return CSimpleTestSuite.s_Singleton;
	}

	rTestSuites = [];

	constructor() {}

	async Init() {
		0;
	}

	RegisterTestSuite(e) {
		this.rTestSuites.push(e);
	}

	async RunTests(opts = {}) {
		opts = {
			bFullTestPlan: false,
			bRunInParallel: false,
			...opts,
		};
		let t = [];
		let tests = [];
		for (const suite of this.rTestSuites) {
			console.log(`Running test suite: ${suite.GetName()}`);
			for (const i of suite.GetTests()) {
				if (!opts.bFullTestPlan && i.bFullOnly === true) {
					continue;
				}
				const test = this.RunTest(i, t);
				if (opts.bRunInParallel) {
					tests.push(test);
				} else {
					await test;
				}
			}
		}
		await Promise.all(tests);
		if (t.length > 0) {
			console.error(`Failed test count: ${t.length}`);
			for (const e of t) {
				console.error(`    ${e.fnRunTest.name}`);
			}
		} else {
			console.log("All tests passed");
		}
	}

	async RunTest(e, t) {
		try {
			console.log(`    Running Test: ${this.GetTestName(e)}`);
			await e.fnRunTest();
			return true;
		} catch (r) {
			console.error(`    Test Failed: ${this.GetTestName(e)}: ${r.message}`);
			t.push(e);
			return false;
		}
	}

	GetTestName(e) {
		return e.fnRunTest.name.replace("bound Test_", "").trim();
	}
}

const Ke = Ye;

class CFAQModel {
	m_summary;
	@observable m_mapStoredDrafts: Map<ELanguage, any>;
	m_mapLocalUpdates = new Map<ELanguage, any>();

	constructor(summary, drafts) {
		makeAutoObservable(this);
		this.m_summary = summary;
		this.m_mapStoredDrafts = drafts;
		this.m_mapLocalUpdates = new Map();
		for (let lang = ELanguage.English; lang < ELanguage.Max; lang++) {
			this.m_mapLocalUpdates.set(lang, {});
		}
	}

	BNeedsSaving(lang?: ELanguage) {
		if (lang !== undefined) {
			const t = this.m_mapLocalUpdates.get(lang);
			return !!t.strTitle || !!t.strContent;
		}

		return Array.from(this.m_mapLocalUpdates.values()).some(
			(e) => !!e.strTitle || !!e.strContent,
		);
	}

	async SaveDrafts() {
		AssertMsg(
			Boolean(this.m_summary?.faq_id),
			"Attempting to save when we lack a FaqID in the summary object",
		);
		let e = 1;
		let t = new Array();
		for (let lang = ELanguage.English; lang < ELanguage.Max; ++lang) {
			if (
				(this.m_mapLocalUpdates.get(lang).strTitle &&
					this.m_mapLocalUpdates.get(lang).strTitle !==
						this.m_mapStoredDrafts.get(lang)?.title) ||
				(this.m_mapLocalUpdates.get(lang).strContent &&
					this.m_mapLocalUpdates.get(lang).strContent !==
						this.m_mapStoredDrafts.get(lang)?.content)
			) {
				const title = this.GetDraftTitle(lang);
				const content = this.GetDraftContent(lang);
				const a = FAQStore.Get().UpdateDraft(
					this.m_summary?.faq_id,
					lang,
					title,
					content,
				);
				a.then((t) => {
					if (t.eResult == EResult.OK) {
						runInAction(() => {
							if (!this.m_mapStoredDrafts.has(lang)) {
								this.m_mapStoredDrafts.set(lang, {});
							}
							this.m_mapStoredDrafts.get(lang).title = title;
							this.m_mapStoredDrafts.get(lang).content = content;
							this.m_mapStoredDrafts.get(lang).timestamp = t.rtUpdateTime;
							this.m_mapStoredDrafts.get(lang).author_account_id =
								iA.accountid.toString();
							this.m_mapLocalUpdates.get(lang).strTitle = null;
							this.m_mapLocalUpdates.get(lang).strContent = null;
							let e = false;
							this.m_summary.per_language_info.forEach((n) => {
								if (lang == n.language) {
									e = true;
									n.last_update_timestamp = Math.max(
										n.last_update_timestamp,
										t.rtUpdateTime,
									);
								}
							});
							if (!e) {
								this.m_summary.per_language_info.push({
									language: lang,
									last_update_timestamp: t.rtUpdateTime,
								});
							}
						});
					} else if (e == 1) {
						console.error(
							`FAQModel.SaveDraft: Response not ok ${t.eResult}`,
							t,
						);
						e = t.eResult;
					}
				}).catch((t) => {
					console.error(`FAQModel.SaveDrafts: Hit error ${H_1(t).strErrorMsg}`);
					if (e == 1) {
						e = 2;
					}
				});
				t.push(a);
			}
		}
		await Promise.all(t);
		return e;
	}

	GetFAQInternalName() {
		return this.m_summary?.internal_name;
	}

	GetDraftTitle(lang: ELanguage) {
		return (
			this.m_mapLocalUpdates.get(lang).strTitle ??
			this.m_mapStoredDrafts.get(lang)?.title
		);
	}

	GetDraftContent(lang: ELanguage) {
		return (
			this.m_mapLocalUpdates.get(lang).strContent ??
			this.m_mapStoredDrafts.get(lang)?.content
		);
	}

	GetDraftTitleWithFallback(
		lang: ELanguage,
		realm = ESteamRealm.k_ESteamRealmGlobal,
	) {
		const fallbackLang =
			realm == ESteamRealm.k_ESteamRealmChina
				? ELanguage.SimplifiedChinese
				: ELanguage.English;
		return (
			this.m_mapLocalUpdates.get(lang).strTitle ??
			this.m_mapLocalUpdates.get(fallbackLang).strTitle ??
			this.m_mapStoredDrafts.get(lang)?.title ??
			this.m_mapStoredDrafts.get(fallbackLang)?.title ??
			""
		);
	}

	GetDraftContentWithFallback(
		lang: ELanguage,
		realm = ESteamRealm.k_ESteamRealmGlobal,
	) {
		const fallbackLang =
			realm == ESteamRealm.k_ESteamRealmChina
				? ELanguage.SimplifiedChinese
				: ELanguage.English;
		return (
			this.m_mapLocalUpdates.get(lang).strContent ??
			this.m_mapLocalUpdates.get(fallbackLang).strContent ??
			this.m_mapStoredDrafts.get(lang)?.content ??
			this.m_mapStoredDrafts.get(fallbackLang)?.content ??
			""
		);
	}

	GetLastSavedDraftVersion(e) {
		return this.m_mapStoredDrafts.get(e);
	}

	@bind
	BHasSomeTextForLanguage(e) {
		return Boolean(this.GetDraftContent(e) || this.GetDraftTitle(e));
	}

	SetDraftTitle(e, title) {
		if (title === this.m_mapStoredDrafts.get(e)?.title) {
			this.m_mapLocalUpdates.get(e).strTitle = null;
		} else {
			this.m_mapLocalUpdates.get(e).strTitle = title;
		}
	}

	SetDraftContent(e, strContent: string) {
		if (strContent === this.m_mapStoredDrafts.get(e)?.content) {
			this.m_mapLocalUpdates.get(e).strContent = null;
		} else {
			this.m_mapLocalUpdates.get(e).strContent = strContent;
		}
	}

	GetIncludedRealmList() {
		const realms = new Array();
		if (this.m_summary.visible_in_global_realm) {
			realms.push(ESteamRealm.k_ESteamRealmGlobal);
		}
		if (this.m_summary.visible_in_global_realm) {
			realms.push(ESteamRealm.k_ESteamRealmChina);
		}
		if (realms.length == 0) {
			realms.push(ESteamRealm.k_ESteamRealmGlobal);
		}
		AssertMsg(
			realms.length > 0,
			`FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
		);
		return realms;
	}

	BHasPublished() {
		return Boolean(
			this.m_summary.per_language_info.some((e) => !!e.last_publish_timestamp),
		);
	}

	@bind
	GetLastTimeLanguageUpdated(e) {
		return this.GetLastSavedDraftVersion(e)?.timestamp ?? 0;
	}

	GetFAQID() {
		return this.m_summary.faq_id;
	}

	GetSummary() {
		return this.m_summary;
	}
}

class CClanFAQSummary extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQSummary.prototype.faq_id) {
			Sg(CClanFAQSummary.M());
		}
		Message.initialize(this, e, 0, -1, [6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQSummary.sm_m ||= {
			proto: CClanFAQSummary,
			fields: {
				faq_id: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				internal_name: {
					n: 2,
					br: qM.readString,
					bw: gp.writeString,
				},
				visible_in_global_realm: {
					n: 3,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				visible_in_china_realm: {
					n: 4,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				json_data: {
					n: 5,
					br: qM.readString,
					bw: gp.writeString,
				},
				per_language_info: {
					n: 6,
					c: CClanFAQSummary_CLanguageInfo,
					r: true,
					q: true,
				},
				url_code: {
					n: 7,
					br: qM.readString,
					bw: gp.writeString,
				},
			},
		};
		return CClanFAQSummary.sm_m;
	}
	static MBF() {
		CClanFAQSummary.sm_mbf ||= w0(CClanFAQSummary.M());
		return CClanFAQSummary.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQSummary.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQSummary.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQSummary.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQSummary();
		return CClanFAQSummary.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQSummary.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQSummary.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQSummary.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQSummary.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQSummary";
	}
}

class CClanFAQSummary_CLanguageInfo extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQSummary_CLanguageInfo.prototype.language) {
			Sg(CClanFAQSummary_CLanguageInfo.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQSummary_CLanguageInfo.sm_m ||= {
			proto: CClanFAQSummary_CLanguageInfo,
			fields: {
				language: {
					n: 1,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				last_update_timestamp: {
					n: 2,
					br: qM.readFixed32,
					bw: gp.writeFixed32,
				},
				last_publish_timestamp: {
					n: 3,
					br: qM.readFixed32,
					bw: gp.writeFixed32,
				},
			},
		};
		return CClanFAQSummary_CLanguageInfo.sm_m;
	}
	static MBF() {
		CClanFAQSummary_CLanguageInfo.sm_mbf ||= w0(
			CClanFAQSummary_CLanguageInfo.M(),
		);
		return CClanFAQSummary_CLanguageInfo.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQSummary_CLanguageInfo.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQSummary_CLanguageInfo.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQSummary_CLanguageInfo.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQSummary_CLanguageInfo();
		return CClanFAQSummary_CLanguageInfo.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQSummary_CLanguageInfo.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQSummary_CLanguageInfo.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQSummary_CLanguageInfo.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQSummary_CLanguageInfo.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQSummary_CLanguageInfo";
	}
}

class CClanFAQContent extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQContent.prototype.faq_id) {
			Sg(CClanFAQContent.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQContent.sm_m ||= {
			proto: CClanFAQContent,
			fields: {
				faq_id: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				language: {
					n: 2,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				version: {
					n: 3,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				content: {
					n: 4,
					br: qM.readString,
					bw: gp.writeString,
				},
				title: {
					n: 5,
					br: qM.readString,
					bw: gp.writeString,
				},
				timestamp: {
					n: 6,
					br: qM.readFixed32,
					bw: gp.writeFixed32,
				},
				author_account_id: {
					n: 7,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				url_code: {
					n: 8,
					br: qM.readString,
					bw: gp.writeString,
				},
			},
		};
		return CClanFAQContent.sm_m;
	}
	static MBF() {
		CClanFAQContent.sm_mbf ||= w0(CClanFAQContent.M());
		return CClanFAQContent.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQContent.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQContent.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQContent.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQContent();
		return CClanFAQContent.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQContent.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQContent.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQContent.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQContent.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQContent";
	}
}

class CClanFAQS_Create_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_Create_Request.prototype.steamid) {
			Sg(CClanFAQS_Create_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_Create_Request.sm_m ||= {
			proto: CClanFAQS_Create_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				internal_name: {
					n: 2,
					br: qM.readString,
					bw: gp.writeString,
				},
				json_data: {
					n: 3,
					br: qM.readString,
					bw: gp.writeString,
				},
			},
		};
		return CClanFAQS_Create_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_Create_Request.sm_mbf ||= w0(CClanFAQS_Create_Request.M());
		return CClanFAQS_Create_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_Create_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_Create_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_Create_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_Create_Request();
		return CClanFAQS_Create_Request.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_Create_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_Create_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_Create_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_Create_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_Create_Request";
	}
}

class CClanFAQS_Create_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_Create_Response.prototype.faq_id) {
			Sg(CClanFAQS_Create_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_Create_Response.sm_m ||= {
			proto: CClanFAQS_Create_Response,
			fields: {
				faq_id: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
			},
		};
		return CClanFAQS_Create_Response.sm_m;
	}
	static MBF() {
		CClanFAQS_Create_Response.sm_mbf ||= w0(CClanFAQS_Create_Response.M());
		return CClanFAQS_Create_Response.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_Create_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_Create_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_Create_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_Create_Response();
		return CClanFAQS_Create_Response.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_Create_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_Create_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_Create_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_Create_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_Create_Response";
	}
}

class CClanFAQS_Delete_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_Delete_Request.prototype.steamid) {
			Sg(CClanFAQS_Delete_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_Delete_Request.sm_m ||= {
			proto: CClanFAQS_Delete_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
			},
		};
		return CClanFAQS_Delete_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_Delete_Request.sm_mbf ||= w0(CClanFAQS_Delete_Request.M());
		return CClanFAQS_Delete_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_Delete_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_Delete_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_Delete_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_Delete_Request();
		return CClanFAQS_Delete_Request.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_Delete_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_Delete_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_Delete_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_Delete_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_Delete_Request";
	}
}

class CClanFAQS_Delete_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CClanFAQS_Delete_Response.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new CClanFAQS_Delete_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_Delete_Response();
		return CClanFAQS_Delete_Response.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_Delete_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_Delete_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_Delete_Response";
	}
}

class CClanFAQS_UpdateInternalName_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_UpdateInternalName_Request.prototype.steamid) {
			Sg(CClanFAQS_UpdateInternalName_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_UpdateInternalName_Request.sm_m ||= {
			proto: CClanFAQS_UpdateInternalName_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				internal_name: {
					n: 3,
					br: qM.readString,
					bw: gp.writeString,
				},
			},
		};
		return CClanFAQS_UpdateInternalName_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_UpdateInternalName_Request.sm_mbf ||= w0(
			CClanFAQS_UpdateInternalName_Request.M(),
		);
		return CClanFAQS_UpdateInternalName_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_UpdateInternalName_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_UpdateInternalName_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_UpdateInternalName_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_UpdateInternalName_Request();
		return CClanFAQS_UpdateInternalName_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_UpdateInternalName_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateInternalName_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_UpdateInternalName_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateInternalName_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateInternalName_Request";
	}
}

class CClanFAQS_UpdateInternalName_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CClanFAQS_UpdateInternalName_Response.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new CClanFAQS_UpdateInternalName_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_UpdateInternalName_Response();
		return CClanFAQS_UpdateInternalName_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateInternalName_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateInternalName_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateInternalName_Response";
	}
}

class CClanFAQS_UpdateJsonData_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_UpdateJsonData_Request.prototype.steamid) {
			Sg(CClanFAQS_UpdateJsonData_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_UpdateJsonData_Request.sm_m ||= {
			proto: CClanFAQS_UpdateJsonData_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				json_data: {
					n: 3,
					br: qM.readString,
					bw: gp.writeString,
				},
			},
		};
		return CClanFAQS_UpdateJsonData_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_UpdateJsonData_Request.sm_mbf ||= w0(
			CClanFAQS_UpdateJsonData_Request.M(),
		);
		return CClanFAQS_UpdateJsonData_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_UpdateJsonData_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_UpdateJsonData_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_UpdateJsonData_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_UpdateJsonData_Request();
		return CClanFAQS_UpdateJsonData_Request.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_UpdateJsonData_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateJsonData_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_UpdateJsonData_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateJsonData_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateJsonData_Request";
	}
}

class CClanFAQS_UpdateJsonData_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CClanFAQS_UpdateJsonData_Response.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new CClanFAQS_UpdateJsonData_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_UpdateJsonData_Response();
		return CClanFAQS_UpdateJsonData_Response.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateJsonData_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateJsonData_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateJsonData_Response";
	}
}

class CClanFAQS_SetVisibility_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_SetVisibility_Request.prototype.steamid) {
			Sg(CClanFAQS_SetVisibility_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_SetVisibility_Request.sm_m ||= {
			proto: CClanFAQS_SetVisibility_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				visible_in_global_realm: {
					n: 3,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				visible_in_china_realm: {
					n: 4,
					br: qM.readBool,
					bw: gp.writeBool,
				},
			},
		};
		return CClanFAQS_SetVisibility_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_SetVisibility_Request.sm_mbf ||= w0(
			CClanFAQS_SetVisibility_Request.M(),
		);
		return CClanFAQS_SetVisibility_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_SetVisibility_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_SetVisibility_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_SetVisibility_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_SetVisibility_Request();
		return CClanFAQS_SetVisibility_Request.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_SetVisibility_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_SetVisibility_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_SetVisibility_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_SetVisibility_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_SetVisibility_Request";
	}
}

class CClanFAQS_SetVisibility_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CClanFAQS_SetVisibility_Response.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new CClanFAQS_SetVisibility_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_SetVisibility_Response();
		return CClanFAQS_SetVisibility_Response.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_SetVisibility_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_SetVisibility_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_SetVisibility_Response";
	}
}

class CClanFAQS_UpdateDraft_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_UpdateDraft_Request.prototype.steamid) {
			Sg(CClanFAQS_UpdateDraft_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_UpdateDraft_Request.sm_m ||= {
			proto: CClanFAQS_UpdateDraft_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				language: {
					n: 3,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				content: {
					n: 4,
					br: qM.readString,
					bw: gp.writeString,
				},
				title: {
					n: 5,
					br: qM.readString,
					bw: gp.writeString,
				},
			},
		};
		return CClanFAQS_UpdateDraft_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_UpdateDraft_Request.sm_mbf ||= w0(
			CClanFAQS_UpdateDraft_Request.M(),
		);
		return CClanFAQS_UpdateDraft_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_UpdateDraft_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_UpdateDraft_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_UpdateDraft_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_UpdateDraft_Request();
		return CClanFAQS_UpdateDraft_Request.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_UpdateDraft_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateDraft_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_UpdateDraft_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateDraft_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateDraft_Request";
	}
}

class CClanFAQS_UpdateDraft_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_UpdateDraft_Response.prototype.last_update_timestamp) {
			Sg(CClanFAQS_UpdateDraft_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_UpdateDraft_Response.sm_m ||= {
			proto: CClanFAQS_UpdateDraft_Response,
			fields: {
				last_update_timestamp: {
					n: 1,
					br: qM.readFixed32,
					bw: gp.writeFixed32,
				},
			},
		};
		return CClanFAQS_UpdateDraft_Response.sm_m;
	}
	static MBF() {
		CClanFAQS_UpdateDraft_Response.sm_mbf ||= w0(
			CClanFAQS_UpdateDraft_Response.M(),
		);
		return CClanFAQS_UpdateDraft_Response.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_UpdateDraft_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_UpdateDraft_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_UpdateDraft_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_UpdateDraft_Response();
		return CClanFAQS_UpdateDraft_Response.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_UpdateDraft_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateDraft_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_UpdateDraft_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_UpdateDraft_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_UpdateDraft_Response";
	}
}

class CClanFAQS_PublishDraft_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_PublishDraft_Request.prototype.steamid) {
			Sg(CClanFAQS_PublishDraft_Request.M());
		}
		Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_PublishDraft_Request.sm_m ||= {
			proto: CClanFAQS_PublishDraft_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				language: {
					n: 3,
					r: true,
					q: true,
					br: qM.readUint32,
					pbr: qM.readPackedUint32,
					bw: gp.writeRepeatedUint32,
				},
			},
		};
		return CClanFAQS_PublishDraft_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_PublishDraft_Request.sm_mbf ||= w0(
			CClanFAQS_PublishDraft_Request.M(),
		);
		return CClanFAQS_PublishDraft_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_PublishDraft_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_PublishDraft_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_PublishDraft_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_PublishDraft_Request();
		return CClanFAQS_PublishDraft_Request.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_PublishDraft_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_PublishDraft_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_PublishDraft_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_PublishDraft_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_PublishDraft_Request";
	}
}

class CClanFAQS_PublishDraft_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_PublishDraft_Response.prototype.last_publish_timestamp) {
			Sg(CClanFAQS_PublishDraft_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_PublishDraft_Response.sm_m ||= {
			proto: CClanFAQS_PublishDraft_Response,
			fields: {
				last_publish_timestamp: {
					n: 1,
					br: qM.readFixed32,
					bw: gp.writeFixed32,
				},
			},
		};
		return CClanFAQS_PublishDraft_Response.sm_m;
	}
	static MBF() {
		CClanFAQS_PublishDraft_Response.sm_mbf ||= w0(
			CClanFAQS_PublishDraft_Response.M(),
		);
		return CClanFAQS_PublishDraft_Response.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_PublishDraft_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_PublishDraft_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_PublishDraft_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_PublishDraft_Response();
		return CClanFAQS_PublishDraft_Response.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_PublishDraft_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_PublishDraft_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_PublishDraft_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_PublishDraft_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_PublishDraft_Response";
	}
}

class CClanFAQS_PreviewDraft_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_PreviewDraft_Request.prototype.steamid) {
			Sg(CClanFAQS_PreviewDraft_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_PreviewDraft_Request.sm_m ||= {
			proto: CClanFAQS_PreviewDraft_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				language: {
					n: 3,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
			},
		};
		return CClanFAQS_PreviewDraft_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_PreviewDraft_Request.sm_mbf ||= w0(
			CClanFAQS_PreviewDraft_Request.M(),
		);
		return CClanFAQS_PreviewDraft_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_PreviewDraft_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_PreviewDraft_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_PreviewDraft_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_PreviewDraft_Request();
		return CClanFAQS_PreviewDraft_Request.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_PreviewDraft_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_PreviewDraft_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_PreviewDraft_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_PreviewDraft_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_PreviewDraft_Request";
	}
}

class CClanFAQS_PreviewDraft_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_PreviewDraft_Response.prototype.faq) {
			Sg(CClanFAQS_PreviewDraft_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_PreviewDraft_Response.sm_m ||= {
			proto: CClanFAQS_PreviewDraft_Response,
			fields: {
				faq: {
					n: 1,
					c: CClanFAQContent,
				},
			},
		};
		return CClanFAQS_PreviewDraft_Response.sm_m;
	}
	static MBF() {
		CClanFAQS_PreviewDraft_Response.sm_mbf ||= w0(
			CClanFAQS_PreviewDraft_Response.M(),
		);
		return CClanFAQS_PreviewDraft_Response.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_PreviewDraft_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_PreviewDraft_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_PreviewDraft_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_PreviewDraft_Response();
		return CClanFAQS_PreviewDraft_Response.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_PreviewDraft_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_PreviewDraft_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_PreviewDraft_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_PreviewDraft_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_PreviewDraft_Response";
	}
}

class CClanFAQS_GetFAQ_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_GetFAQ_Request.prototype.faq_id) {
			Sg(CClanFAQS_GetFAQ_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_GetFAQ_Request.sm_m ||= {
			proto: CClanFAQS_GetFAQ_Request,
			fields: {
				faq_id: {
					n: 2,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				language: {
					n: 3,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
			},
		};
		return CClanFAQS_GetFAQ_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_GetFAQ_Request.sm_mbf ||= w0(CClanFAQS_GetFAQ_Request.M());
		return CClanFAQS_GetFAQ_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_GetFAQ_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_GetFAQ_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_GetFAQ_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_GetFAQ_Request();
		return CClanFAQS_GetFAQ_Request.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_GetFAQ_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_GetFAQ_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_GetFAQ_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_GetFAQ_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetFAQ_Request";
	}
}

class CClanFAQS_GetFAQ_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_GetFAQ_Response.prototype.faq) {
			Sg(CClanFAQS_GetFAQ_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_GetFAQ_Response.sm_m ||= {
			proto: CClanFAQS_GetFAQ_Response,
			fields: {
				faq: {
					n: 1,
					c: CClanFAQContent,
				},
				faq_exists: {
					n: 2,
					d: false,
					br: qM.readBool,
					bw: gp.writeBool,
				},
			},
		};
		return CClanFAQS_GetFAQ_Response.sm_m;
	}
	static MBF() {
		CClanFAQS_GetFAQ_Response.sm_mbf ||= w0(CClanFAQS_GetFAQ_Response.M());
		return CClanFAQS_GetFAQ_Response.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_GetFAQ_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_GetFAQ_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_GetFAQ_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_GetFAQ_Response();
		return CClanFAQS_GetFAQ_Response.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_GetFAQ_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_GetFAQ_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_GetFAQ_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_GetFAQ_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetFAQ_Response";
	}
}

class CClanFAQS_GetFAQVersion_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_GetFAQVersion_Request.prototype.steamid) {
			Sg(CClanFAQS_GetFAQVersion_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_GetFAQVersion_Request.sm_m ||= {
			proto: CClanFAQS_GetFAQVersion_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				language: {
					n: 3,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				version: {
					n: 4,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
			},
		};
		return CClanFAQS_GetFAQVersion_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_GetFAQVersion_Request.sm_mbf ||= w0(
			CClanFAQS_GetFAQVersion_Request.M(),
		);
		return CClanFAQS_GetFAQVersion_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_GetFAQVersion_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_GetFAQVersion_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_GetFAQVersion_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_GetFAQVersion_Request();
		return CClanFAQS_GetFAQVersion_Request.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_GetFAQVersion_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_GetFAQVersion_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_GetFAQVersion_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_GetFAQVersion_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetFAQVersion_Request";
	}
}

class CClanFAQS_GetFAQVersion_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_GetFAQVersion_Response.prototype.faq) {
			Sg(CClanFAQS_GetFAQVersion_Response.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_GetFAQVersion_Response.sm_m ||= {
			proto: CClanFAQS_GetFAQVersion_Response,
			fields: {
				faq: {
					n: 1,
					c: CClanFAQContent,
				},
			},
		};
		return CClanFAQS_GetFAQVersion_Response.sm_m;
	}
	static MBF() {
		CClanFAQS_GetFAQVersion_Response.sm_mbf ||= w0(
			CClanFAQS_GetFAQVersion_Response.M(),
		);
		return CClanFAQS_GetFAQVersion_Response.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_GetFAQVersion_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_GetFAQVersion_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_GetFAQVersion_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_GetFAQVersion_Response();
		return CClanFAQS_GetFAQVersion_Response.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_GetFAQVersion_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_GetFAQVersion_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_GetFAQVersion_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_GetFAQVersion_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetFAQVersion_Response";
	}
}

class CClanFAQS_GetAllDrafts_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_GetAllDrafts_Request.prototype.steamid) {
			Sg(CClanFAQS_GetAllDrafts_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_GetAllDrafts_Request.sm_m ||= {
			proto: CClanFAQS_GetAllDrafts_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
			},
		};
		return CClanFAQS_GetAllDrafts_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_GetAllDrafts_Request.sm_mbf ||= w0(
			CClanFAQS_GetAllDrafts_Request.M(),
		);
		return CClanFAQS_GetAllDrafts_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_GetAllDrafts_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_GetAllDrafts_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_GetAllDrafts_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_GetAllDrafts_Request();
		return CClanFAQS_GetAllDrafts_Request.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_GetAllDrafts_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllDrafts_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_GetAllDrafts_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllDrafts_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllDrafts_Request";
	}
}

class CClanFAQS_GetAllDrafts_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_GetAllDrafts_Response.prototype.summary) {
			Sg(CClanFAQS_GetAllDrafts_Response.M());
		}
		Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_GetAllDrafts_Response.sm_m ||= {
			proto: CClanFAQS_GetAllDrafts_Response,
			fields: {
				summary: {
					n: 1,
					c: CClanFAQSummary,
				},
				draft: {
					n: 2,
					c: CClanFAQContent,
					r: true,
					q: true,
				},
			},
		};
		return CClanFAQS_GetAllDrafts_Response.sm_m;
	}
	static MBF() {
		CClanFAQS_GetAllDrafts_Response.sm_mbf ||= w0(
			CClanFAQS_GetAllDrafts_Response.M(),
		);
		return CClanFAQS_GetAllDrafts_Response.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_GetAllDrafts_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_GetAllDrafts_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_GetAllDrafts_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_GetAllDrafts_Response();
		return CClanFAQS_GetAllDrafts_Response.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_GetAllDrafts_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllDrafts_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_GetAllDrafts_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllDrafts_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllDrafts_Response";
	}
}

class CClanFAQS_GetAllFAQsForClan_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_GetAllFAQsForClan_Request.prototype.steamid) {
			Sg(CClanFAQS_GetAllFAQsForClan_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_GetAllFAQsForClan_Request.sm_m ||= {
			proto: CClanFAQS_GetAllFAQsForClan_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
			},
		};
		return CClanFAQS_GetAllFAQsForClan_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_GetAllFAQsForClan_Request.sm_mbf ||= w0(
			CClanFAQS_GetAllFAQsForClan_Request.M(),
		);
		return CClanFAQS_GetAllFAQsForClan_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_GetAllFAQsForClan_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_GetAllFAQsForClan_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_GetAllFAQsForClan_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_GetAllFAQsForClan_Request();
		return CClanFAQS_GetAllFAQsForClan_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_GetAllFAQsForClan_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllFAQsForClan_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_GetAllFAQsForClan_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllFAQsForClan_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllFAQsForClan_Request";
	}
}

class CClanFAQS_GetAllFAQsForClan_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_GetAllFAQsForClan_Response.prototype.faq) {
			Sg(CClanFAQS_GetAllFAQsForClan_Response.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_GetAllFAQsForClan_Response.sm_m ||= {
			proto: CClanFAQS_GetAllFAQsForClan_Response,
			fields: {
				faq: {
					n: 1,
					c: CClanFAQSummary,
					r: true,
					q: true,
				},
			},
		};
		return CClanFAQS_GetAllFAQsForClan_Response.sm_m;
	}
	static MBF() {
		CClanFAQS_GetAllFAQsForClan_Response.sm_mbf ||= w0(
			CClanFAQS_GetAllFAQsForClan_Response.M(),
		);
		return CClanFAQS_GetAllFAQsForClan_Response.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_GetAllFAQsForClan_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_GetAllFAQsForClan_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_GetAllFAQsForClan_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_GetAllFAQsForClan_Response();
		return CClanFAQS_GetAllFAQsForClan_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_GetAllFAQsForClan_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllFAQsForClan_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_GetAllFAQsForClan_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllFAQsForClan_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllFAQsForClan_Response";
	}
}

class CClanFAQS_GetAllLatestVersionPublishedFAQS_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.prototype.steamid) {
			Sg(CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.sm_m ||= {
			proto: CClanFAQS_GetAllLatestVersionPublishedFAQS_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				faq_id: {
					n: 2,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
			},
		};
		return CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.sm_mbf ||= w0(
			CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.M(),
		);
		return CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_GetAllLatestVersionPublishedFAQS_Request();
		return CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllLatestVersionPublishedFAQS_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
	}
}

class CClanFAQS_GetAllLatestVersionPublishedFAQS_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.prototype.faqs) {
			Sg(CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.sm_m ||= {
			proto: CClanFAQS_GetAllLatestVersionPublishedFAQS_Response,
			fields: {
				faqs: {
					n: 1,
					c: CClanFAQContent,
					r: true,
					q: true,
				},
			},
		};
		return CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.sm_m;
	}
	static MBF() {
		CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.sm_mbf ||= w0(
			CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.M(),
		);
		return CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.toObject(
			e,
			this,
		);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_GetAllLatestVersionPublishedFAQS_Response();
		return CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_GetAllLatestVersionPublishedFAQS_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
	}
}

class CClanFAQS_CheckFAQPermissions_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_CheckFAQPermissions_Request.prototype.steamid) {
			Sg(CClanFAQS_CheckFAQPermissions_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_CheckFAQPermissions_Request.sm_m ||= {
			proto: CClanFAQS_CheckFAQPermissions_Request,
			fields: {
				steamid: {
					n: 1,
					br: qM.readFixed64String,
					bw: gp.writeFixed64String,
				},
			},
		};
		return CClanFAQS_CheckFAQPermissions_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_CheckFAQPermissions_Request.sm_mbf ||= w0(
			CClanFAQS_CheckFAQPermissions_Request.M(),
		);
		return CClanFAQS_CheckFAQPermissions_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_CheckFAQPermissions_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_CheckFAQPermissions_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_CheckFAQPermissions_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_CheckFAQPermissions_Request();
		return CClanFAQS_CheckFAQPermissions_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_CheckFAQPermissions_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_CheckFAQPermissions_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_CheckFAQPermissions_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_CheckFAQPermissions_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_CheckFAQPermissions_Request";
	}
}

class CClanFAQS_CheckFAQPermissions_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CClanFAQS_CheckFAQPermissions_Response.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new CClanFAQS_CheckFAQPermissions_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_CheckFAQPermissions_Response();
		return CClanFAQS_CheckFAQPermissions_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_CheckFAQPermissions_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_CheckFAQPermissions_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_CheckFAQPermissions_Response";
	}
}

class CClanFAQS_SearchFAQs_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_SearchFAQs_Request.prototype.search_text) {
			Sg(CClanFAQS_SearchFAQs_Request.M());
		}
		Message.initialize(this, e, 0, -1, [2, 5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_SearchFAQs_Request.sm_m ||= {
			proto: CClanFAQS_SearchFAQs_Request,
			fields: {
				search_text: {
					n: 1,
					br: qM.readString,
					bw: gp.writeString,
				},
				elanguages: {
					n: 2,
					r: true,
					q: true,
					br: qM.readInt32,
					pbr: qM.readPackedInt32,
					bw: gp.writeRepeatedInt32,
				},
				count: {
					n: 3,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				cursor: {
					n: 4,
					br: qM.readString,
					bw: gp.writeString,
				},
				filter_clanids: {
					n: 5,
					r: true,
					q: true,
					br: qM.readUint32,
					pbr: qM.readPackedUint32,
					bw: gp.writeRepeatedUint32,
				},
			},
		};
		return CClanFAQS_SearchFAQs_Request.sm_m;
	}
	static MBF() {
		CClanFAQS_SearchFAQs_Request.sm_mbf ||= w0(
			CClanFAQS_SearchFAQs_Request.M(),
		);
		return CClanFAQS_SearchFAQs_Request.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_SearchFAQs_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_SearchFAQs_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_SearchFAQs_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_SearchFAQs_Request();
		return CClanFAQS_SearchFAQs_Request.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_SearchFAQs_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_SearchFAQs_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_SearchFAQs_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_SearchFAQs_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_SearchFAQs_Request";
	}
}

class CClanFAQS_SearchFAQs_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_SearchFAQs_Response.prototype.faqs) {
			Sg(CClanFAQS_SearchFAQs_Response.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_SearchFAQs_Response.sm_m ||= {
			proto: CClanFAQS_SearchFAQs_Response,
			fields: {
				faqs: {
					n: 1,
					c: CClanFAQS_SearchFAQs_Response_CFAQSearchResult,
					r: true,
					q: true,
				},
				num_total_results: {
					n: 2,
					br: qM.readInt32,
					bw: gp.writeInt32,
				},
				next_cursor: {
					n: 3,
					br: qM.readString,
					bw: gp.writeString,
				},
			},
		};
		return CClanFAQS_SearchFAQs_Response.sm_m;
	}
	static MBF() {
		CClanFAQS_SearchFAQs_Response.sm_mbf ||= w0(
			CClanFAQS_SearchFAQs_Response.M(),
		);
		return CClanFAQS_SearchFAQs_Response.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_SearchFAQs_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_SearchFAQs_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_SearchFAQs_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_SearchFAQs_Response();
		return CClanFAQS_SearchFAQs_Response.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_SearchFAQs_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_SearchFAQs_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_SearchFAQs_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_SearchFAQs_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_SearchFAQs_Response";
	}
}

class CClanFAQS_SearchFAQs_Response_CFAQSearchResult extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CClanFAQS_SearchFAQs_Response_CFAQSearchResult.prototype.articleid) {
			Sg(CClanFAQS_SearchFAQs_Response_CFAQSearchResult.M());
		}
		Message.initialize(this, e, 0, -1, [6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CClanFAQS_SearchFAQs_Response_CFAQSearchResult.sm_m ||= {
			proto: CClanFAQS_SearchFAQs_Response_CFAQSearchResult,
			fields: {
				articleid: {
					n: 1,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				name: {
					n: 2,
					br: qM.readString,
					bw: gp.writeString,
				},
				content: {
					n: 3,
					br: qM.readString,
					bw: gp.writeString,
				},
				clan_accountid: {
					n: 4,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				url_code: {
					n: 5,
					br: qM.readString,
					bw: gp.writeString,
				},
				localized_names: {
					n: 6,
					r: true,
					q: true,
					br: qM.readString,
					bw: gp.writeRepeatedString,
				},
			},
		};
		return CClanFAQS_SearchFAQs_Response_CFAQSearchResult.sm_m;
	}
	static MBF() {
		CClanFAQS_SearchFAQs_Response_CFAQSearchResult.sm_mbf ||= w0(
			CClanFAQS_SearchFAQs_Response_CFAQSearchResult.M(),
		);
		return CClanFAQS_SearchFAQs_Response_CFAQSearchResult.sm_mbf;
	}
	toObject(e = false) {
		return CClanFAQS_SearchFAQs_Response_CFAQSearchResult.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CClanFAQS_SearchFAQs_Response_CFAQSearchResult.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CClanFAQS_SearchFAQs_Response_CFAQSearchResult.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CClanFAQS_SearchFAQs_Response_CFAQSearchResult();
		return CClanFAQS_SearchFAQs_Response_CFAQSearchResult.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CClanFAQS_SearchFAQs_Response_CFAQSearchResult.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CClanFAQS_SearchFAQs_Response_CFAQSearchResult.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CClanFAQS_SearchFAQs_Response_CFAQSearchResult.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CClanFAQS_SearchFAQs_Response_CFAQSearchResult.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
	}
}

let ClanFAQsService;
((e) => {
	e.Create = (e, t) =>
		e.SendMsg(
			"ClanFAQS.Create#1",
			I8(CClanFAQS_Create_Request, t),
			CClanFAQS_Create_Response,
			{
				ePrivilege: 1,
			},
		);
	e.Delete = (e, t) =>
		e.SendMsg(
			"ClanFAQS.Delete#1",
			I8(CClanFAQS_Delete_Request, t),
			CClanFAQS_Delete_Response,
			{
				ePrivilege: 1,
			},
		);
	e.UpdateInternalName = (e, t) =>
		e.SendMsg(
			"ClanFAQS.UpdateInternalName#1",
			I8(CClanFAQS_UpdateInternalName_Request, t),
			CClanFAQS_UpdateInternalName_Response,
			{
				ePrivilege: 1,
			},
		);
	e.UpdateJsonData = (e, t) =>
		e.SendMsg(
			"ClanFAQS.UpdateJsonData#1",
			I8(CClanFAQS_UpdateJsonData_Request, t),
			CClanFAQS_UpdateJsonData_Response,
			{
				ePrivilege: 1,
			},
		);
	e.SetVisibility = (e, t) =>
		e.SendMsg(
			"ClanFAQS.SetVisibility#1",
			I8(CClanFAQS_SetVisibility_Request, t),
			CClanFAQS_SetVisibility_Response,
			{
				ePrivilege: 1,
			},
		);
	e.UpdateDraft = (e, t) =>
		e.SendMsg(
			"ClanFAQS.UpdateDraft#1",
			I8(CClanFAQS_UpdateDraft_Request, t),
			CClanFAQS_UpdateDraft_Response,
			{
				ePrivilege: 1,
			},
		);
	e.PublishDraft = (e, t) =>
		e.SendMsg(
			"ClanFAQS.PublishDraft#1",
			I8(CClanFAQS_PublishDraft_Request, t),
			CClanFAQS_PublishDraft_Response,
			{
				ePrivilege: 1,
			},
		);
	e.PreviewDraft = (e, t) =>
		e.SendMsg(
			"ClanFAQS.PreviewDraft#1",
			I8(CClanFAQS_PreviewDraft_Request, t),
			CClanFAQS_PreviewDraft_Response,
			{
				ePrivilege: 1,
			},
		);
	e.GetFAQ = (e, t) =>
		e.SendMsg(
			"ClanFAQS.GetFAQ#1",
			I8(CClanFAQS_GetFAQ_Request, t),
			CClanFAQS_GetFAQ_Response,
			{
				bConstMethod: true,
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	e.GetFAQVersion = (e, t) =>
		e.SendMsg(
			"ClanFAQS.GetFAQVersion#1",
			I8(CClanFAQS_GetFAQVersion_Request, t),
			CClanFAQS_GetFAQVersion_Response,
			{
				ePrivilege: 1,
			},
		);
	e.GetAllDrafts = (e, t) =>
		e.SendMsg(
			"ClanFAQS.GetAllDrafts#1",
			I8(CClanFAQS_GetAllDrafts_Request, t),
			CClanFAQS_GetAllDrafts_Response,
			{
				ePrivilege: 1,
			},
		);
	e.GetAllFAQsForClan = (e, t) =>
		e.SendMsg(
			"ClanFAQS.GetAllFAQsForClan#1",
			I8(CClanFAQS_GetAllFAQsForClan_Request, t),
			CClanFAQS_GetAllFAQsForClan_Response,
			{
				ePrivilege: 1,
			},
		);
	e.GetAllLatestVersionPublishedFAQS = (e, t) =>
		e.SendMsg(
			"ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
			I8(CClanFAQS_GetAllLatestVersionPublishedFAQS_Request, t),
			CClanFAQS_GetAllLatestVersionPublishedFAQS_Response,
			{
				ePrivilege: 1,
			},
		);
	e.CheckFAQPermissions = (e, t) =>
		e.SendMsg(
			"ClanFAQS.CheckFAQPermissions#1",
			I8(CClanFAQS_CheckFAQPermissions_Request, t),
			CClanFAQS_CheckFAQPermissions_Response,
			{
				ePrivilege: 1,
			},
		);
	e.SearchFAQs = (e, t) =>
		e.SendMsg(
			"ClanFAQS.SearchFAQs#1",
			I8(CClanFAQS_SearchFAQs_Request, t),
			CClanFAQS_SearchFAQs_Response,
			{
				bConstMethod: true,
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
})((ClanFAQsService ||= {}));

class FAQStore {
	m_mapFAQSummaries = new Map();
	m_mapFAQPublishedContent = new Map();
	m_mapFAQDrafts = new Map();
	m_bHasFAQEdit = false;
	m_steamInterface = null;

	static s_Singleton;
	static Get() {
		FAQStore.s_Singleton ||= new FAQStore();
		return FAQStore.s_Singleton;
	}

	static Init(e) {
		FAQStore.Get().m_steamInterface = e;
	}

	constructor() {
		makeAutoObservable(this);
		if (Config.WEB_UNIVERSE == "dev") {
			window.g_FAQStore = this;
		}
		if (!Config.IN_STEAMUI) {
			this.ReadInitialPayload();
			this.SetUpWebAPIInterface();
		}
	}

	SetUpWebAPIInterface() {
		const config = Tc("faqstore", "application_config");
		const token = config?.webapi_token;
		this.m_steamInterface = new D_1(Config.WEBAPI_BASE_URL, token);
	}

	ReadInitialPayload() {
		const config = Tc("faqstore", "application_config");
		if (Config.WEB_UNIVERSE == "dev" || Config.WEB_UNIVERSE == "beta") {
			console.log("DEV_DEBUG: CFAQStore loading payload: ", config);
		}
		if (this.BIsConfigValid(config)) {
			if (config.faqs) {
				for (const t in config.faqs) {
					const r = config.faqs[t];
					if (r?.faq_id == t && r?.language !== undefined) {
						if (!this.m_mapFAQPublishedContent.has(t)) {
							this.m_mapFAQPublishedContent.set(t, new Map());
						}
						this.m_mapFAQPublishedContent.get(t).set(r.language, r);
					}
				}
			}
			if (config.alldrafts) {
				for (const t in config.alldrafts) {
					const r = config.alldrafts[t];
					if (!r?.summary || !r.draft) {
						continue;
					}
					this.m_mapFAQSummaries.set(t, r.summary);
					const n = new Map();
					for (const e of r.draft) {
						n.set(e.language, e);
					}
					this.m_mapFAQDrafts.set(
						t,
						new CFAQModel(this.m_mapFAQSummaries.get(t), n),
					);
				}
			}
			if (config.allfaqs) {
				for (const t of config.allfaqs) {
					if (t.faq_id) {
						if (!this.m_mapFAQSummaries.has(t.faq_id)) {
							this.m_mapFAQSummaries.set(t.faq_id, t);
						}
					}
				}
			}
			this.m_bHasFAQEdit = Boolean(config.has_faq_edit);
		} else if (Config.WEB_UNIVERSE == "dev") {
			console.error("CFAQStore Invalid payload");
		}
	}

	BIsConfigValid(e) {
		const t = e;
		return (
			(!!t && !!t.faqs && typeof t.faqs == "object") ||
			(!!t.alldrafts && typeof t.alldrafts == "object") ||
			(!!t.allfaqs && !!Array.isArray(t.allfaqs))
		);
	}

	async CreateFAQ(name) {
		const t = w.Init(CClanFAQS_Create_Request);
		t.Body().set_steamid(UF.CLANSTEAMID);
		t.Body().set_internal_name(name);
		let r;
		let n = 2;
		try {
			const i = await ClanFAQsService.Create(
				this.m_steamInterface.GetServiceTransport(),
				t,
			);
			n = i.GetEResult();
			if (n == 1) {
				r = i.Body().faq_id();
				const t = {
					faq_id: r,
					internal_name: name,
				};
				this.m_mapFAQSummaries.set(r, t);
			} else {
				console.error("FAQStore.CreateFAQ: Create request failed:", n);
			}
		} catch (e) {
			const t = H_1(e);
			console.error(`FAQStore.CreateFAQ: caught error ${t.strErrorMsg}`, t);
		}
		return {
			eResult: n,
			strFaqId: r,
		};
	}

	async UpdateDraft(e, t, r, n) {
		const i = w.Init(CClanFAQS_UpdateDraft_Request);
		i.Body().set_steamid(UF.CLANSTEAMID);
		i.Body().set_faq_id(e);
		i.Body().set_language(t);
		i.Body().set_content(n);
		i.Body().set_title(r);
		let eResult = EResult.Fail;
		let rtUpdateTime = 0;
		try {
			const e = await ClanFAQsService.UpdateDraft(
				this.m_steamInterface.GetServiceTransport(),
				i,
			);
			eResult = e.GetEResult();
			if (eResult != EResult.OK) {
				console.error("FAQStore.UpdateDraft request failed:", eResult);
			} else {
				rtUpdateTime = e.Body().last_update_timestamp();
			}
		} catch (e) {
			const t = H_1(e);
			console.error(`FAQStore.UpdateDraft: caught error ${t.strErrorMsg}`, t);
		}
		return {
			eResult,
			rtUpdateTime,
		};
	}

	async UpdateJsonData(e, t) {
		const r = JSON.stringify(t);
		const n = w.Init(CClanFAQS_UpdateJsonData_Request);
		n.Body().set_steamid(UF.CLANSTEAMID);
		n.Body().set_faq_id(e);
		n.Body().set_json_data(r);
		let eResult = EResult.Fail;
		try {
			eResult = (
				await ClanFAQsService.UpdateJsonData(
					this.m_steamInterface.GetServiceTransport(),
					n,
				)
			).GetEResult();
			if (eResult != eResult.OK) {
				console.error("FAQStore.UpdateJsonData request failed:", eResult);
			} else {
				this.m_mapFAQSummaries.get(e).json_data = r;
			}
		} catch (e) {
			const t = H_1(e);
			console.error(
				`FAQStore.UpdateJsonData: caught error ${t.strErrorMsg}`,
				t,
			);
		}
		return eResult;
	}

	async GetFAQVersion(e, t, r) {
		const n = w.Init(CClanFAQS_GetFAQVersion_Request);
		n.Body().set_steamid(UF.CLANSTEAMID);
		n.Body().set_faq_id(e);
		n.Body().set_version(t);
		n.Body().set_language(r);
		try {
			const e = await ClanFAQsService.GetFAQVersion(
				this.m_steamInterface.GetServiceTransport(),
				n,
			);
			const eResult = e.GetEResult();
			if (eResult == eResult.OK) {
				return e.Body().faq().toObject();
			}
			console.error("FAQStore.GetFAQVersion request failed:", eResult);
		} catch (e) {
			const t = H_1(e);
			console.error(`FAQStore.GetFAQVersion: caught error ${t.strErrorMsg}`, t);
		}
		return null;
	}

	async DeleteFAQ(e) {
		const t = w.Init(CClanFAQS_Delete_Request);
		t.Body().set_steamid(UF.CLANSTEAMID);
		t.Body().set_faq_id(e);
		let eResult = EResult.Fail;
		try {
			eResult = (
				await ClanFAQsService.Delete(
					this.m_steamInterface.GetServiceTransport(),
					t,
				)
			).GetEResult();
			if (eResult != EResult.OK) {
				console.error("FAQStore.DeleteFAQ request failed:", eResult);
			} else {
				this.m_mapFAQDrafts.delete(e);
				this.m_mapFAQPublishedContent.delete(e);
				this.m_mapFAQSummaries.delete(e);
			}
		} catch (e) {
			const t = H_1(e);
			console.error(`FAQStore.DeleteFAQ: caught error ${t.strErrorMsg}`, t);
		}
		return eResult;
	}

	static sm_mapFallbackLanguages = new Map([
		[5, 27],
		[27, 5],
		[29, 6],
	]);

	GetFAQPublishedContent(e, t) {
		const r = this.m_mapFAQPublishedContent.get(e);
		if (!r) {
			return null;
		}
		let n = r.get(t);
		if (!n && FAQStore.sm_mapFallbackLanguages.has(t)) {
			n = r.get(FAQStore.sm_mapFallbackLanguages.get(t));
		}
		if (!n && t != 0 && !Y2()) {
			n = r.get(0);
		}
		return n;
	}

	GetFAQDraftContent(e) {
		return this.m_mapFAQDrafts.get(e);
	}

	GetAllFAQSummaries() {
		return Array.from(this.m_mapFAQSummaries.values());
	}

	GetFAQArticleSummary(e) {
		return this.m_mapFAQSummaries.get(e) || {};
	}

	async LoadFAQDraftContent(e) {
		if (this.m_mapFAQDrafts.has(e)) {
			return this.m_mapFAQDrafts.get(e);
		}

		const t = w.Init(CClanFAQS_GetAllDrafts_Request);
		t.Body().set_steamid(UF.CLANSTEAMID);
		t.Body().set_faq_id(e);
		let eResult = EResult.Fail;
		try {
			const n = await ClanFAQsService.GetAllDrafts(
				this.m_steamInterface.GetServiceTransport(),
				t,
			);
			eResult = n.GetEResult();
			if (eResult != EResult.OK) {
				console.error("FaqStore.LoadFAQDraftContent request failed:", eResult);
				return null;
			}

			{
				const t = n.Body().summary().toObject();
				this.m_mapFAQSummaries.set(e, t);
				const r = new Map();
				n.Body()
					.draft()
					.forEach((e) => r.set(e.language(), e.toObject()));
				const i = new CFAQModel(this.m_mapFAQSummaries.get(e), r);
				this.m_mapFAQDrafts.set(e, i);
				return i;
			}
		} catch (e) {
			const t = H_1(e);
			console.error(
				`FaqStore.LoadFAQDraftContent: exception ${t.strErrorMsg}`,
				t,
			);
		}

		return null;
	}

	async UpdateVisibility(e, t, r) {
		const n = w.Init(CClanFAQS_SetVisibility_Request);
		n.Body().set_steamid(UF.CLANSTEAMID);
		n.Body().set_faq_id(e);
		n.Body().set_visible_in_global_realm(t);
		n.Body().set_visible_in_china_realm(r);
		let eResult = EResult.Fail;
		try {
			eResult = (
				await ClanFAQsService.SetVisibility(
					this.m_steamInterface.GetServiceTransport(),
					n,
				)
			).GetEResult();
			if (eResult === EResult.OK) {
				const n = this.m_mapFAQSummaries.get(e);
				if (n) {
					n.visible_in_global_realm = t;
					n.visible_in_china_realm = r;
					this.m_mapFAQSummaries.set(e, n);
				}
			} else {
				console.error(`FaqStore.UpdateVisibility: Failed ${eResult}`);
			}
		} catch (e) {
			const t = H_1(e);
			console.error(`FaqStore.UpdateVisibility: exception ${t.strErrorMsg}`, t);
		}
		return eResult;
	}

	async PublishDraftByLanguage(e, t) {
		if (!t || t.length == 0) {
			return 1;
		}
		const r = w.Init(CClanFAQS_PublishDraft_Request);
		r.Body().set_steamid(UF.CLANSTEAMID);
		r.Body().set_faq_id(e);
		t.forEach((e) => r.Body().add_language(e));
		let eResult = EResult.Fail;
		try {
			const i = await ClanFAQsService.PublishDraft(
				this.m_steamInterface.GetServiceTransport(),
				r,
			);
			eResult = i.GetEResult();
			if (eResult === EResult.OK) {
				const r = this.m_mapFAQSummaries.get(e);
				if (r) {
					runInAction(() => {
						if (!this.m_mapFAQPublishedContent.has(e)) {
							this.m_mapFAQPublishedContent.set(e, new Map());
						}
						r.per_language_info.forEach((r) => {
							const n = r.language;
							if (t.includes(n)) {
								r.last_publish_timestamp = Math.max(
									r.last_publish_timestamp,
									i.Body().last_publish_timestamp(),
								);
								const t = this.m_mapFAQDrafts
									.get(e)
									?.GetLastSavedDraftVersion(n);
								this.m_mapFAQPublishedContent.get(e).set(n, t);
							}
						});
					});
				}
			} else {
				console.error(`FaqStore.PublishDraftByLanguage: Failed ${eResult}`);
			}
		} catch (e) {
			const t = H_1(e);
			console.error(
				`FaqStore.PublishDraftByLanguage: exception ${t.strErrorMsg}`,
				t,
			);
		}
		return eResult;
	}

	async UpdateInternalName(e, t) {
		const r = w.Init(CClanFAQS_UpdateInternalName_Request);
		r.Body().set_steamid(UF.CLANSTEAMID);
		r.Body().set_faq_id(e);
		r.Body().set_internal_name(t);
		let eResult = EResult.Fail;
		try {
			eResult = (
				await ClanFAQsService.UpdateInternalName(
					this.m_steamInterface.GetServiceTransport(),
					r,
				)
			).GetEResult();
			if (eResult === EResult.OK) {
				runInAction(() => {
					if (this.m_mapFAQSummaries.get(e)?.internal_name) {
						this.m_mapFAQSummaries.get(e).internal_name = t;
					}
					if (this.m_mapFAQDrafts.get(e)?.GetSummary()?.internal_name) {
						this.m_mapFAQDrafts.get(e).GetSummary().internal_name = t;
					}
				});
			} else {
				console.error(`FaqStore.UpdateInternalName: Failed ${eResult}`);
			}
		} catch (e) {
			const t = H_1(e);
			console.error(
				`FaqStore.UpdateInternalName: exception ${t.strErrorMsg}`,
				t,
			);
		}
		return eResult;
	}

	GetLoadedDraftObjs() {
		return Array.from(this.m_mapFAQDrafts.values());
	}

	RemoveAllDirtyDrafts() {
		const e = this.GetLoadedDraftObjs()
			?.filter((e) => e.BNeedsSaving())
			?.map((e) => e.GetFAQID());
		e?.forEach((e) => this.m_mapFAQDrafts.delete(e));
	}

	BHasFAQEdit() {
		return this.m_bHasFAQEdit;
	}

	async ExportEnglishDraftToCrowdin(e) {
		const strURL = `${Config.COMMUNITY_BASE_URL}faqs/${
			UF.VANITY_ID
		}/ajaxpushtocrowdin/${uuid(e)}`;
		await Ke.get(strURL);
	}

	async ImportNonEnglishDraftsFromCrowdin(e, t, r) {
		const strURL = `${Config.COMMUNITY_BASE_URL}faqs/${
			UF.VANITY_ID
		}/ajaxpullfromcrowdin/${uuid(e)}`;
		const form = new FormData();
		form.append("sessionid", Config.SESSIONID);
		form.append("languages", t.join(","));
		let a = null;
		try {
			const response = await Ke.post(strURL, form, {
				withCredentials: true,
				cancelToken: r?.token,
			});
			if (response?.status == 200 && response.data?.success == EResult.OK) {
				const r = response.data.updated;
				const n = r?.[e] ?? [];
				if (
					n.length > 0 &&
					(this.m_mapFAQSummaries.has(e) || this.m_mapFAQDrafts.has(e))
				) {
					this.m_mapFAQDrafts.delete(e);
					await this.LoadFAQDraftContent(e);
				}
				return n;
			}
			a = {
				response,
			};
		} catch (e) {
			a = e;
		}

		const s = H_1(a);
		console.error("Could not import * as from crowdin", e, s.strErrorMsg, s);
		return [];
	}

	BHasLiveEnglishVersion(e) {
		return this.m_mapFAQSummaries
			.get(e)
			.per_language_info.some(
				(e) => e.language == ELanguage.English && e.last_publish_timestamp > 0,
			);
	}

	GetNonEnglishDraftsToPublish(e) {
		return this.m_mapFAQSummaries
			.get(e)
			.per_language_info.filter(
				(e) =>
					e.language != ELanguage.English &&
					e.last_update_timestamp > (e.last_publish_timestamp ?? 0),
			)
			.map((e) => e.language);
	}
}
Cg([observable], FAQStore.prototype, "m_mapFAQSummaries", undefined);
Cg([action], FAQStore.prototype, "RemoveAllDirtyDrafts", null);

function uuid(e) {
	const t = `0000000000000000${A.fromString(e, true, 10).toString(16)}`
		.slice(-16)
		.toUpperCase();
	return `${t.slice(0, 4)}-${t.slice(4, 8)}-${t.slice(8, 12)}-${t.slice(
		12,
		16,
	)}`;
}

class CSteamUIApp {
	m_cm;
	@observable m_eLoginState = ELoginState.None;
	@observable m_bFinishedStage1 = false;
	m_bStartedStage2 = false;
	@observable m_CurrentUser: CurrentUser = undefined;
	@observable m_bSupportAlertModalActive = false;
	m_bHaveShownSupportAlertModal = false;

	constructor() {
		makeAutoObservable(this);
	}

	async Init(cm) {
		this.m_cm = cm;
		this.m_cm.AddOnDisconnectCallback(this.OnCMDisconnect);
		this.m_cm.AddOnLogonCallback(this.OnCMLogon);

		await MeasureExecTime("SteamApp Init - WebUI Transport", [
			["WebUITransportStore", () => WebUITransportStore.Init()],
		]);
		await MeasureExecTime("SteamApp Init - Before Login", [
			["CM Connect", () => cm.Connect()],
			["SteamURLStore", () => SteamURLStore.InitWithoutUser()],
			["BasicUIStore", () => SteamUIStore.InitWithoutUser()],
			["OverlayModalDialogsStore", () => OverlayModalDialogsStore.Init()],
			["SystemNetworkStore", () => SystemNetworkStore.Get().Init(cm)],
			["VirtualMenuStore", () => VirtualMenuStore.Init()],
			["URLStore", () => URLStore.Init()],
			["LoginStore", () => LoginStore.Init()],
			["NotificationStore", () => NotificationStore.Init()],
			[
				"Localization",
				() => (Config.USE_LONGEST_LOC_STRING ? Qu() : uV(Config.LANGUAGE)),
			],
			["FriendsChatStore", () => FriendsChatStore.Init()],
			["SuspendResumeStore", () => SuspendResumeStore.Init()],
			["SteamingStore", () => StreamingStore.Init()],
			["SecurityStore", () => SecurityStore.Init()],
			["KeyboardSettingsStore", () => KeyboardSettingsStore.InitWithoutUser()],
			["IBusConnection", () => IBusConnection.Init()],
			["ConsoleStore", () => ConsoleStore.Init()],
			["FocusedAppWindowStore", () => FocusedAppWindowStore.Init()],
			["SystemReportStore", () => SystemReportStore.Init()],
			["SimpleTests", () => CSimpleTestSuite.Get().Init()],
			["VRGamepadUIMessages", () => VRGamepadUIMessages()],
			["VRStore", () => VRStore()],
			["VRAudioSettingsStore", () => VRAudioSettingsStore.Init()],
		]);
		SteamClient.User.RegisterForLoginStateChange(this.OnLoginStateChange);
		SteamClient.User.RegisterForCurrentUserChanges(this.OnCurrentUserChanges);
		RegisterForRunSteamURLs();
		this.m_bFinishedStage1 = true;
	}

	BFinishedInitStageOne() {
		return this.m_bFinishedStage1;
	}

	get LoginState() {
		return this.m_eLoginState;
	}

	get cm() {
		return this.m_cm;
	}

	@observable m_cloudStorage = undefined;
	@observable m_bWasEverLoggedIn = false;
	@observable m_bServicesInitialized = false;

	GetCloudStorageForLibrary() {
		return this.m_cloudStorage;
	}

	BWasEverLoggedIn() {
		return this.m_bWasEverLoggedIn;
	}

	@bind
	async OnLoginStateChange(
		accountName: string,
		eLoginState: ELoginState,
		eResult: EResult,
		wat,
		percentage: number,
		email: string,
	) {
		if (this.m_eLoginState == ELoginState.Quit) {
			return;
		}

		if (eLoginState == ELoginState.Success) {
			await this.InitStage2();
		}

		let s = this.m_eLoginState == ELoginState.None;
		this.m_eLoginState = eLoginState;
		if (!s && eLoginState == ELoginState.Success) {
			SecurityStore.InitialLoginComplete(accountName);
			if (SteamUIStore.WindowStore.BHasGamepadUIMainWindow()) {
				UserProfileStore.CheckClaimSteamDeckRewards();
			}
		}
	}

	async InitStage2() {
		if (this.m_bStartedStage2) {
			return;
		}

		this.m_bStartedStage2 = true;
		let cm = this.m_cm;
		console.time("SteamApp Init - After Login");
		try {
			await Promise.all([
				CollectionStore.Register(),
				GameReleasedStore.Register(),
			]);
			const t = aj();
			t.Init(
				Config.IN_STEAMUI_SHARED_CONTEXT ? "Shared SteamUI" : "Library",
				CLSTAMP,
				cm.GetServiceTransport(),
				{
					fnGetReportingInterval: GetReportingInterval,
				},
			);
			cm.messageHandlers.InstallErrorReportingStore(t);
			r.InstallErrorReportingStore(t);
			y.Init(
				Config.IN_STEAMUI_SHARED_CONTEXT ? "Shared SteamUI" : "Library",
				CLSTAMP,
				cm.GetServiceTransport(),
			);
			const r = (e, r, n) => {
				if (e instanceof Error) {
					t.ReportError(e);
				} else {
					t.ReportError(new Error(`Startup error in ${r} - ${n}: ${e}`), {
						bIncludeMessageInIdentifier: true,
					});
				}
			};
			await MeasureExecTime(
				"SteamApp Init - After Login - Stage 1",
				[
					[
						"localization",
						() => (Config.USE_LONGEST_LOC_STRING ? Qu() : uV(Config.LANGUAGE)),
					],
					["CM Connection", () => cm.Connect()],
					["CloudStorage", () => CloudStorage.Init(cm)],
					["AppStore", () => AppStore.Init(cm)],
					["AchievementProgress", () => AchievementProgress.Init(cm)],
					["URLStore", () => URLStore.Init()],
					["GameActionStore", () => GameActionStore.Init()],
					["SettingsStore", () => SettingsStore.Init(cm)],
					["SystemInfoStore", () => SystemInfoStore.Init()],
					["SystemNetworkStore", () => SystemNetworkStore.Get().Init(cm)],
					[
						"FriendsChatStore - Startup",
						() => FriendsChatStore.AwaitStartupFinished(),
					],
				],
				true,
				r,
			);
			await MeasureExecTime(
				"SteamApp Init - After Login - Friend Store",
				[["FriendStore", () => FriendStore.Init(cm, bg())]],
				true,
				r,
			);
			this.m_cloudStorage = await CloudStorage.ForNamespace(
				EUserConfigStoreNamespace.k_EUserConfigStoreNamespaceLibrary,
			);
			await MeasureExecTime(
				"SteamApp Init - After Login - Collection Store",
				[["CollectionStore", () => CollectionStore.Init(this.m_cloudStorage)]],
				true,
				r,
			);
			const LibraryUIStore = n6.Init(cm);
			await MeasureExecTime(
				"SteamApp Init - After Login - Stage 2",
				[
					["AppInfoStore", () => AppInfoStore.Init(cm)],
					["AppActivityStore", () => AppActivityStore.Init(cm)],
					["AppDetailsStore", () => AppDetailsStore.Init(cm)],
					["AppReviewStore", () => AppReviewStore.Init(cm)],
					["AppSpotlightsStore", () => AppSpotlightsStore.Init(cm)],
					["LibraryUIStore", () => LibraryUIStore],
					["WorkshopStore", () => WorkshopStore.Init(cm)],
					["CommunityStore", () => CommunityStore.Init(cm)],
					["LibraryEventStore", () => LibraryEventStore.Init(cm)],
					["BadgeStore", () => BadgeStore.Init(cm)],
					["ShowcaseStore", () => ShowcaseStore.Init(this.m_cloudStorage)],
					["SettingsZooStore", () => SettingsZooStore.Init()],
					["PlayNextStore", () => PlayNextStore.Init(cm)],
					["DownloadsStore", () => DownloadsStore.Init(cm)],
					["FAQStore", () => FAQStore.Init(cm)],
					[
						"ParentalStore",
						() => LibraryUIStore.then(() => ParentalStore.Init(cm)),
					],
					["ControllerConfigStore", () => ControllerConfigStore.Init()],
					[
						"ControllerConfigInterstitialStore",
						() => ControllerConfigInterstitialStore.Init(),
					],
					["InstallFolderStore", () => InstallFolderStore.Init()],
					["SubscriberAgreementStore", () => SubscriberAgreementStore.Init(cm)],
					["ScreenshotStore", () => ScreenshotStore.Init(cm)],
					["TrendingStore", () => TrendingStore.Init(cm)],
					[
						"DiscoveryQueueStore",
						() => DiscoveryQueueStore.Init(cm.GetServiceTransport()),
					],
					["DynamicUserStore", () => DynamicUserStore.Get().HintLoad()],
					["UserProfileStore", () => UserProfileStore.Init(cm)],
					["SearchStore", () => SearchStore.Init(cm)],
					["MarketingStore", () => MarketingStore.Init(cm)],
					["AchievementStore", () => AchievementStore.Init()],
					["BasicUIStore - with user", () => SteamUIStore.InitWithUser()],
					["KeyboardSettingsStore", () => KeyboardSettingsStore.Init()],
					[
						"LibraryLoyaltyAwardModal",
						() => LibraryLoyaltyAwardModal.Initialize(cm),
					],
					["RemotePlayStore", () => RemotePlayStore.Init(cm)],
					["OverlayStore", () => OverlayStore.Init(cm)],
					[
						"GameReleasedStore",
						() => GameReleasedStore.Init(this.m_cloudStorage),
					],
					["ServerBrowserStore", () => ServerBrowserStore.Init(cm)],
					["MusicStore", () => MusicStore.Init()],
					["GRS", () => GameRecordingStore(cm.GetServiceTransport(), XP, Nd)],
					["EmojiStore", () => EmojiStore.Init()],
					[
						"SteamNotificationsStore",
						() => SteamNotificationsStore.Initialize(cm),
					],
					["GamescopeStore", () => GamescopeStore.Init()],
					["SystemStorageStore", () => SystemStorageStore.Init()],
					["SDCardStore", () => SDCardStore.Init()],
					["SteamOSStore", () => SteamOSStore.Init()],
					["BluetoothStore", () => BluetoothStore.Init()],
					[
						"EAAccessPromptManager",
						() => EAAccessPromptManager.Init(this.m_cloudStorage),
					],
				],
				true,
				r,
			);
			this.m_bServicesInitialized = true;
			SteamClient.UI.NotifyAppInitialized();
		} catch (e) {
			console.log("FAILED TO INITIALIZE THE STORES", e);
		}
		console.timeEnd("SteamApp Init - After Login");
	}

	GetServicesInitialized() {
		return this.m_bServicesInitialized === true;
	}

	async WaitForServicesInitialized() {
		await when(() => this.m_bServicesInitialized);
		return this.m_bServicesInitialized;
	}

	@bind
	OnCMDisconnect() {
		aj().PauseReporting();
	}

	@bind
	OnCMLogon() {
		aj().PauseReportingForDuration(Tg(0, 300) * 1000);
	}

	PrefetchParentalSettingsForChildren(accountids: number[]) {
		const transport = this.m_cm.GetServiceTransport();
		for (let accountid of accountids) {
			OnRunPersonaStateURL.prefetchQuery(
				Bf(transport, b_2.InitFromAccountID(accountid).ConvertTo64BitString(), {
					staleTime: 60000,
				}),
			);
		}
	}

	@action.bound
	async OnCurrentUserChanges(user: CurrentUser) {
		this.m_CurrentUser = user;
		if (
			this.m_CurrentUser.strFamilyGroupID &&
			this.m_CurrentUser.eFamilyGroupRole == EFamilyGroupRole.Adult
		) {
			this.PrefetchParentalSettingsForChildren(
				this.m_CurrentUser.rgFamilyGroupMembers
					.filter((e) => e.role == EFamilyGroupRole.Child)
					.map((e) => e.accountid),
			);
		}
		if (!this.m_bHaveShownSupportAlertModal && user.bSupportPopupMessage) {
			this.m_bSupportAlertModalActive = true;
			this.m_bHaveShownSupportAlertModal = true;
		}
	}

	BHasCurrentUser() {
		return this.m_eLoginState == ELoginState.Success;
	}

	BIsInOOBE() {
		switch (this.m_eLoginState) {
			case ELoginState.WelcomeDialog:
			case ELoginState.WaitingForCreateUser: {
				return true;
			}
		}
		return false;
	}

	GetCurrentUser() {
		return this.m_CurrentUser;
	}

	BIsInFamilyGroup() {
		return Number(this.m_CurrentUser.strFamilyGroupID) != 0;
	}

	GetFamilyGroupID() {
		return this.m_CurrentUser.strFamilyGroupID;
	}

	BIsFamilyGroupMember(accountid: number) {
		return (
			this.m_CurrentUser.rgFamilyGroupMembers.filter(
				(t) => t.accountid == accountid,
			).length > 0
		);
	}

	GetFamilyGroupName() {
		return this.m_CurrentUser.strFamilyGroupName;
	}

	BIsOfflineMode() {
		return this.m_CurrentUser?.bIsOfflineMode;
	}

	ShowSupportAlertsModal() {
		AssertMsg(
			this.m_CurrentUser.bSupportAlertActive,
			"Can't show support alert modals; no active alerts.",
		);
		if (this.m_CurrentUser.bSupportAlertActive) {
			this.m_bSupportAlertModalActive = true;
		}
	}

	CloseSupportAlertsModal() {
		this.m_bSupportAlertModalActive = false;
	}

	BHasActiveSupportAlerts() {
		return !!this.m_CurrentUser?.bSupportAlertActive;
	}

	BHasAckOnlyActiveSupportAlerts() {
		return !!this.m_CurrentUser?.bSupportAckOnlyMessages;
	}

	BSupportAlertDialogActive() {
		return this.m_bSupportAlertModalActive;
	}

	BMustShowSupportAlertDialog() {
		return !!this.m_CurrentUser?.bSupportPopupMessage;
	}

	BHardwareSurveyPending() {
		return !!this.m_CurrentUser?.bHWSurveyPending;
	}

	SendSurvey() {
		SteamClient.User.SendSurvey();
		this.m_CurrentUser.bHWSurveyPending = false;
	}

	OptOutOfSurvey() {
		SteamClient.User.OptOutOfSurvey();
		this.m_CurrentUser.bHWSurveyPending = false;
	}
}

let g_pSteamUIApp;
export function qw() {
	return g_pSteamUIApp;
}

export function KC() {
	AssertMsg(!g_pSteamUIApp, "SteamUI already initialized");
	g_pSteamUIApp = new CSteamUIApp();
	window.App = g_pSteamUIApp;
	return g_pSteamUIApp;
}

export function gK() {
	return useObserver(() => qw().BFinishedInitStageOne());
}

export function Wx() {
	return useObserver(() => qw().BHasCurrentUser());
}

export function iZ() {
	return useObserver(() => qw().GetCurrentUser());
}

export function QR() {
	return useObserver(() => qw().BIsOfflineMode());
}

export function Pp() {
	return useObserver(
		() => qw().GetCurrentUser() && qw().GetCurrentUser().bIsLimited,
	);
}

export function ZW() {
	return useObserver(() => qw().GetCurrentUser().eFamilyGroupRole);
}

export function IU() {
	return useObserver(() => qw().BIsInFamilyGroup());
}

export function EK() {
	return useObserver(() => qw().GetFamilyGroupID());
}

export function kU() {
	return useObserver(() => qw().GetCurrentUser().rgFamilyGroupMembers);
}

function GetReportingInterval() {
	return Tg(10, 60) * 1000;
}
