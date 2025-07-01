import { GetOwningWindowForEvent } from "../utils/domutils.js";
import { uX as k_EParentalFeature_None } from "../../src/chunk~2dcc5aaf7/3475.js";
import { TS as Config } from "../../src/library/72476.js";
import { wm as GetHostname } from "../../src/library/53807.js";
import {
	Ay as CStoreNavEvents,
	Dn as BuildStoreAppURL,
	f2 as BuildStoreAppDlcURL,
} from "../../src/library/45328.js";
import { useObserver } from "mobx-react-lite";
import { makeAutoObservable, observable } from "mobx";

const k_rgSteamURLList = [
	"AllNotifications",
	"AppHoverPublic",
	"AppHoverPublicFull",
	"AppNewsPage",
	"AsyncGames",
	"AvatarBaseURL",
	"BaseURLSharedCDN",
	"Chat",
	"ChatRoot",
	"ClaimEntitlements",
	"ClanAssetCDN",
	"CommentNotifications",
	"CommunityHome",
	"CommunityAddFriends",
	"CommunityCDN",
	"CommunityFilePage",
	"CommunityFriendsThatPlay",
	"CommunityFrontPage",
	"CommunityGroupSearch",
	"CommunityImages",
	"CommunityInventory",
	"CommunityMarket",
	"CommunityMarketApp",
	"CommunityRecommendations",
	"CommunityScreenshots",
	"CommunitySingleScreenshot",
	"CurrentlyPlayedWith",
	"EventAnnouncementPage",
	"FamilyManagement",
	"FamilySharing",
	"GameHub",
	"GameHubBroadcasts",
	"GameHubDiscussions",
	"GameHubGuides",
	"GameHubNews",
	"GameHubReviews",
	"GlobalAchievementStatsPage",
	"GlobalLeaderboardsPage",
	"GroupSteamIDPage",
	"HardwareSurvey",
	"HelpAppPage",
	"HelpChangeEmail",
	"HelpChangePassword",
	"HelpFAQ",
	"HelpFrontPage",
	"HelpWithLogin",
	"HelpWithLoginInfo",
	"HelpWithSteamGuardCode",
	"HelpVacBans",
	"ItemStorePage",
	"ItemStoreDetailPage",
	"JoinTrade",
	"LegalInformation",
	"LibraryAppDetails",
	"LibraryAppReview",
	"LibraryFeaturedBroadcasts",
	"ManageGiftsPage",
	"ManageSteamGuard",
	"ModeratorMessages",
	"Mobile",
	"MyHelpRequests",
	"OfficialGameGroupPage",
	"NewsHomePage",
	"ParentalBlocked",
	"ParentalSetup",
	"PendingFriends",
	"PendingGift",
	"PointsShop",
	"PrivacyPolicy",
	"RecommendGame",
	"RedeemWalletVoucher",
	"RegisterKey",
	"RegisterKeyNoParams",
	"SSA",
	"SteamAnnouncements",
	"SteamClientBetaBugReports",
	"SteamClientBetaNewsPage",
	"SteamClientBetaNewsPageFancy",
	"SteamClientNewsPage",
	"SteamClientPatchNotes",
	"SteamClientBetaPatchNotes",
	"SteamDiscussions",
	"SteamIDAchievementsPage",
	"SteamIDAppTradingCardsPage",
	"SteamIDBadgeInfo",
	"SteamIDBadgePage",
	"SteamIDBroadcastPage",
	"SteamIDEditPage",
	"SteamIDEditPrivacyPage",
	"SteamIDFriendsList",
	"SteamIDFriendsPage",
	"SteamIDGroupsPage",
	"SteamIDMyProfile",
	"SteamIDPage",
	"SteamLanguage",
	"SteamPreferences",
	"SteamVRHMDHelp",
	"SteamWorkshop",
	"SteamWorkshopPage",
	"SteamWorkshopSubscriptions",
	"SteamWorkshopUpdatedSubscriptions",
	"StoreAccount",
	"StoreAddFundsPage",
	"StoreAppHover",
	"StoreAppImages",
	"StoreAppPage",
	"StoreAppPageAddToCart",
	"StoreCart",
	"StoreCDN",
	"StoreDlcPage",
	"StoreExplore",
	"StoreExploreNew",
	"StoreFreeToPlay",
	"StoreFrontPage",
	"StoreGameSearchPage",
	"StoreGreatOnDeck",
	"StorePublisherPage",
	"StoreSpecials",
	"StoreStats",
	"StoreVR",
	"StoreWebMicroTxnPage",
	"SupportMessages",
	"TextFilterSettings",
	"TodayPage",
	"TradeOffers",
	"VideoCDN",
	"UserAchievementsPage",
	"UserLeaderboardsPage",
	"UserStatsPage",
	"UserWishlist",
	"WatchVideo",
	"WebAPI",
	"WorkshopEula",
	"YearInReview",
];

class CURLStore {
	m_steamUrls = null;
	@observable m_nGeneration = 0;

	constructor() {
		makeAutoObservable(this);
		CStoreNavEvents.SetNavEventParams("steamclient", "library");
		SteamClient.URL?.RegisterForSteamURLChanges(() => this.onURLChanges());
	}

	get generation() {
		return this.m_nGeneration;
	}

	async Init() {
		this.m_steamUrls = {};
		const rgURLs = await SteamClient.URL.GetSteamURLList([...k_rgSteamURLList]);
		const cURLs = k_rgSteamURLList.length;
		const rgRecvURLs = Object.keys(rgURLs || {});
		const cRecvURLs = rgRecvURLs.length;
		if (cURLs !== cRecvURLs) {
			console.error(
				`CURLStore requested ${cURLs} URLs but receieved ${cRecvURLs}`,
			);
		}
		rgRecvURLs.forEach((url, index) => {
			const e_t = rgURLs[url];
			this.m_steamUrls[url] = e_t;
			if (url.toLowerCase() !== url) {
				this.m_steamUrls[url.toLowerCase()] = {
					...e_t,
					bDuplicate: true,
				};
			}
		});

		Config.AVATAR_BASE_URL = this.GetAvatarBaseURL();
		Config.CHAT_BASE_URL = this.ResolveURL("ChatRoot");
		Config.STORE_BASE_URL = this.GetStoreURL();
		Config.STORE_CHECKOUT_BASE_URL = this.GetStoreURL();
		Config.STORE_CDN_URL = this.GetStoreCDNURL();
		Config.PUBLIC_SHARED_URL = `${this.GetStoreCDNURL()}public/shared/`;
		Config.COMMUNITY_BASE_URL = this.GetCommunityURL();
		Config.COMMUNITY_CDN_URL = this.GetCommunityCDNURL();
		Config.COMMUNITY_CDN_ASSET_URL = this.GetCommunityCDNAssetURL();
		Config.MEDIA_CDN_COMMUNITY_URL = this.GetCommunityImageURL();
		Config.MEDIA_CDN_URL = this.GetMediaCDNUrl();
		Config.BASE_URL_SHARED_CDN = this.GetBaseURLSharedCDN();
		Config.STORE_ICON_BASE_URL = this.GetStoreIconBaseURL();
		Config.HELP_BASE_URL = this.GetHelpURL();
		Config.WEBAPI_BASE_URL = this.GetWebApiURL();
		Config.CLAN_CDN_ASSET_URL = this.GetClanCDNAssetURL();
		Config.VIDEO_CDN_URL = this.GetVideoCDNAssetURL();
		this.m_nGeneration++;
	}

	onURLChanges() {
		this.Init();
	}

	GetParentalFeature(url) {
		const t = this.m_steamUrls[url];
		if (t) {
			return t.feature;
		} else {
			return 9;
		}
	}

	GetParentalFeatureForFullUrl(strURL: string) {
		const rgMatches = this.GetMatchingUrls(strURL);
		if (rgMatches.length > 0) {
			return this.m_steamUrls[rgMatches[0].urlid].feature;
		}

		if (!strURL) {
			return 9;
		}

		if (strURL.startsWith("steam://url/")) {
			const rgSplit = strURL.split("/");
			return this.GetParentalFeature(rgSplit[3]);
		}

		if (strURL.startsWith("data:text/html")) {
			return k_EParentalFeature_None;
		} else {
			return 9;
		}
	}

	ResolveURL(name: string, ...args: any[]) {
		const r = this.m_steamUrls[name];
		if (!r) {
			return;
		}
		let r_url = r.url;
		if (args.length > 0) {
			r_url = r_url.replace(/%p(\d+)%/g, (e, r) => {
				if (args[r - 1] !== undefined) {
					return String(args[r - 1]);
				} else {
					return e;
				}
			});
		}
		if (r_url.startsWith("http://")) {
			r_url.replace(/^http:\/\//, "https://");
		}
		return r_url;
	}

	GetMatchingUrls(e) {
		let t = [];
		let r = this.m_steamUrls;
		Object.getOwnPropertyNames(r).forEach((n) => {
			if (!r[n].bDuplicate) {
				if (!r[n].regexMatchURL) {
					let e = r[n].url;
					e = e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
					e = `^${e}`;
					e = e.replace("http://", "https?://");
					e = e.replace("%p1%", ".+");
					e = e.replace("%p2%", ".+");
					if (e.slice(-1) == "/") {
						e += "?";
					}
					r[n].regexMatchURL = new RegExp(e);
				}
				if (r[n].regexMatchURL.test(e)) {
					t.push({
						urlid: n,
						length: r[n].url.length,
					});
				}
			}
		});
		t.sort((e, t) => t.length - e.length);
		return t;
	}

	GetCommunityURL() {
		return this.ResolveURL("CommunityFrontPage");
	}
	GetCommunityImageURL() {
		return this.ResolveURL("CommunityImages");
	}
	GetAvatarBaseURL() {
		return this.ResolveURL("AvatarBaseURL");
	}
	GetCommunityCDNAssetURL() {
		return `${this.ResolveURL("CommunityImages")}assets/`;
	}
	GetMediaCDNUrl() {
		let e = this.ResolveURL("CommunityImages");
		return `https://${GetHostname(e)}/`;
	}
	GetBaseURLSharedCDN() {
		let e = this.ResolveURL("BaseURLSharedCDN");
		return `https://${GetHostname(e)}/`;
	}
	GetClanCDNAssetURL() {
		let e = this.ResolveURL("ClanAssetCDN");
		return `https://${GetHostname(e)}/`;
	}
	GetVideoCDNAssetURL() {
		let e = this.ResolveURL("VideoCDN");
		return `https://${GetHostname(e)}/`;
	}
	GetCommunityCDNURL() {
		return this.ResolveURL("CommunityCDN");
	}
	GetStoreAppImageURL() {
		return this.ResolveURL("StoreAppImages");
	}
	GetStoreIconBaseURL() {
		return `${this.GetBaseURLSharedCDN()}store_item_assets/steam/apps/`;
	}
	GetStoreGreatOnDeckURL() {
		return this.ResolveURL("StoreGreatOnDeck");
	}
	GetStoreVRURL() {
		return this.ResolveURL("StoreVR");
	}
	GetStoreURL() {
		return this.ResolveURL("StoreFrontPage");
	}
	GetStoreCDNURL() {
		return this.ResolveURL("StoreCDN");
	}
	GetHelpURL() {
		return this.ResolveURL("HelpFrontPage");
	}
	GetWebApiURL() {
		return this.ResolveURL("WebAPI");
	}

	BuildSteamURL(navigate: string, ...args: any[]) {
		return `steam://url/${navigate}/${args.join("/")}`;
	}
	BuildStoreAppURL(appid, t = null) {
		return BuildStoreAppURL(appid, t);
	}
	BuildStoreAppDlcURL(appid, t = null) {
		return BuildStoreAppDlcURL(appid, t);
	}
	BuildAppPointsShopURL(appid) {
		return `${this.ResolveURL("PointsShop")}app/${appid}`;
	}
	NavigateToSteamURLInOwningWindow(e, navigate: string, ...args: any[]) {
		GetOwningWindowForEvent(e).location.href = this.BuildSteamURL(
			navigate,
			...args,
		);
	}
	BuildStoreAssetURL(appid, assetName: string, r) {
		return `${this.GetStoreAppImageURL()}/${appid}/${assetName}`;
	}
	BuildCachedStoreAssetURL(appid, assetName: string, rtime: number) {
		return `${Uq.Library.Assets}/${appid}/${assetName}?c=${rtime || 0}`;
	}
	BuildLibraryAssetURL(appid, assetName: string, rtime: number) {
		return `${this.GetStoreAppImageURL()}/${appid}/${assetName}?t=${rtime || 0}`;
	}
	BuildCachedLibraryAssetURL(appid, assetName: string, rtime: number) {
		return `${Uq.Library.Assets}/${appid}/${assetName}?c=${rtime || 0}`;
	}
	BuildLegacyCachedLibraryAssetURL(appid, assetName: string, rtime: number) {
		return `${Uq.Library.Assets}/${appid}_${assetName}?c=${rtime || 0}`;
	}
	BuildCustomAssetURL(appid, t, r, rtime: number) {
		return `${Uq.Library.CustomImages}/${appid}${t}.${r}?v=${rtime}`;
	}

	BIsSteamURL(strURL: string) {
		const pURL = new URL(strURL);
		for (const url of [
			Config.STORE_BASE_URL,
			Config.COMMUNITY_BASE_URL,
			Config.HELP_BASE_URL,
		]) {
			const pCheckAgainstMeURL = new URL(url);
			if (pURL.host == pCheckAgainstMeURL.host) {
				return true;
			}
		}
		return false;
	}
}

export const Uq = {
	Library: {
		Assets: "/assets",
		CustomImages: "/customimages",
		AppDetails: "/appdetails",
	},
	Controller: {
		Icons: "/appcontrollericons",
		Glyphs: "/steaminputglyphs",
		UserIcons: "/steaminputuservirtualmenuicon/",
	},
};

export function $B(e, t) {
	if (!t.endsWith("/")) {
		t += "/";
	}
	return e && e.startsWith(t);
}

export function vh(e, ...args: any[]) {
	useObserver(() => B7.generation);
	return B7.ResolveURL(e, ...args);
}

export const B7 = new CURLStore();
window.urlStore = B7;
