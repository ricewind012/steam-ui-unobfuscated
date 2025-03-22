var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./3475.js");
var a = require(/*webcrack:missing*/ "./72476.js");
var s = require(/*webcrack:missing*/ "./53807.js");
var o = require(/*webcrack:missing*/ "./45328.js");
var l = require(/*webcrack:missing*/ "./54644.js");
var c = require(/*webcrack:missing*/ "./90095.js");
var m = require(/*webcrack:missing*/ "./89193.js");
const u = [
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
class d {
	m_steamUrls = null;
	m_nGeneration = 0;
	constructor() {
		(0, m.Gn)(this);
		o.Ay.SetNavEventParams("steamclient", "library");
		SteamClient.URL?.RegisterForSteamURLChanges(() => this.onURLChanges());
	}
	get generation() {
		return this.m_nGeneration;
	}
	async Init() {
		this.m_steamUrls = {};
		const e = await SteamClient.URL.GetSteamURLList([...u]);
		const t = u.length;
		const r = Object.keys(e || {});
		const n = r.length;
		if (t !== n) {
			console.error(`CURLStore requested ${t} URLs but receieved ${n}`);
		}
		r.forEach((t, r) => {
			const n = e[t];
			this.m_steamUrls[t] = n;
			if (t.toLowerCase() !== t) {
				this.m_steamUrls[t.toLowerCase()] = {
					...n,
					bDuplicate: true,
				};
			}
		});
		a.TS.AVATAR_BASE_URL = this.GetAvatarBaseURL();
		a.TS.CHAT_BASE_URL = this.ResolveURL("ChatRoot");
		a.TS.STORE_BASE_URL = this.GetStoreURL();
		a.TS.STORE_CHECKOUT_BASE_URL = this.GetStoreURL();
		a.TS.STORE_CDN_URL = this.GetStoreCDNURL();
		a.TS.PUBLIC_SHARED_URL = this.GetStoreCDNURL() + "public/shared/";
		a.TS.COMMUNITY_BASE_URL = this.GetCommunityURL();
		a.TS.COMMUNITY_CDN_URL = this.GetCommunityCDNURL();
		a.TS.COMMUNITY_CDN_ASSET_URL = this.GetCommunityCDNAssetURL();
		a.TS.MEDIA_CDN_COMMUNITY_URL = this.GetCommunityImageURL();
		a.TS.MEDIA_CDN_URL = this.GetMediaCDNUrl();
		a.TS.BASE_URL_SHARED_CDN = this.GetBaseURLSharedCDN();
		a.TS.STORE_ICON_BASE_URL = this.GetStoreIconBaseURL();
		a.TS.HELP_BASE_URL = this.GetHelpURL();
		a.TS.WEBAPI_BASE_URL = this.GetWebApiURL();
		a.TS.CLAN_CDN_ASSET_URL = this.GetClanCDNAssetURL();
		a.TS.VIDEO_CDN_URL = this.GetVideoCDNAssetURL();
		this.m_nGeneration++;
	}
	onURLChanges() {
		this.Init();
	}
	GetParentalFeature(e) {
		const t = this.m_steamUrls[e];
		if (t) {
			return t.feature;
		} else {
			return 9;
		}
	}
	GetParentalFeatureForFullUrl(e) {
		const t = this.GetMatchingUrls(e);
		if (t.length > 0) {
			return this.m_steamUrls[t[0].urlid].feature;
		}
		if (!e) {
			return 9;
		}
		if (e.startsWith("steam://url/")) {
			const t = e.split("/");
			return this.GetParentalFeature(t[3]);
		}
		if (e.startsWith("data:text/html")) {
			return i.uX;
		} else {
			return 9;
		}
	}
	ResolveURL(e, ...t) {
		const r = this.m_steamUrls[e];
		if (!r) {
			return;
		}
		let n = r.url;
		if (t.length > 0) {
			n = n.replace(/%p(\d+)%/g, function (e, r) {
				if (t[r - 1] !== undefined) {
					return String(t[r - 1]);
				} else {
					return e;
				}
			});
		}
		if (n.startsWith("http://")) {
			n.replace(/^http:\/\//, "https://");
		}
		return n;
	}
	GetMatchingUrls(e) {
		let t = [];
		let r = this.m_steamUrls;
		Object.getOwnPropertyNames(r).forEach((n) => {
			if (!r[n].bDuplicate) {
				if (!r[n].regexMatchURL) {
					let e = r[n].url;
					e = e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
					e = "^" + e;
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
		return this.ResolveURL("CommunityImages") + "assets/";
	}
	GetMediaCDNUrl() {
		let e = this.ResolveURL("CommunityImages");
		return "https://" + (0, s.wm)(e) + "/";
	}
	GetBaseURLSharedCDN() {
		let e = this.ResolveURL("BaseURLSharedCDN");
		return `https://${(0, s.wm)(e)}/`;
	}
	GetClanCDNAssetURL() {
		let e = this.ResolveURL("ClanAssetCDN");
		return `https://${(0, s.wm)(e)}/`;
	}
	GetVideoCDNAssetURL() {
		let e = this.ResolveURL("VideoCDN");
		return `https://${(0, s.wm)(e)}/`;
	}
	GetCommunityCDNURL() {
		return this.ResolveURL("CommunityCDN");
	}
	GetStoreAppImageURL() {
		return this.ResolveURL("StoreAppImages");
	}
	GetStoreIconBaseURL() {
		return this.GetBaseURLSharedCDN() + "store_item_assets/steam/apps/";
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
	BuildSteamURL(e, ...t) {
		return "steam://url/" + e + "/" + t.join("/");
	}
	BuildStoreAppURL(e, t = null) {
		return (0, o.Dn)(e, t);
	}
	BuildStoreAppDlcURL(e, t = null) {
		return (0, o.f2)(e, t);
	}
	BuildAppPointsShopURL(e) {
		return this.ResolveURL("PointsShop") + "app/" + e;
	}
	NavigateToSteamURLInOwningWindow(e, t, ...r) {
		(0, l.uX)(e).location.href = this.BuildSteamURL(t, ...r);
	}
	BuildStoreAssetURL(e, t, r) {
		return `${this.GetStoreAppImageURL()}/${e}/${t}`;
	}
	BuildCachedStoreAssetURL(e, t, r) {
		return `${Uq.Library.Assets}/${e}/${t}?c=${r || 0}`;
	}
	BuildLibraryAssetURL(e, t, r) {
		return `${this.GetStoreAppImageURL()}/${e}/${t}?t=${r || 0}`;
	}
	BuildCachedLibraryAssetURL(e, t, r) {
		return `${Uq.Library.Assets}/${e}/${t}?c=${r || 0}`;
	}
	BuildLegacyCachedLibraryAssetURL(e, t, r) {
		return `${Uq.Library.Assets}/${e}_${t}?c=${r || 0}`;
	}
	BuildCustomAssetURL(e, t, r, n) {
		return `${Uq.Library.CustomImages}/${e}${t}.${r}?v=${n}`;
	}
	BIsSteamURL(e) {
		const t = new URL(e);
		for (const e of [
			a.TS.STORE_BASE_URL,
			a.TS.COMMUNITY_BASE_URL,
			a.TS.HELP_BASE_URL,
		]) {
			const r = new URL(e);
			if (t.host == r.host) {
				return true;
			}
		}
		return false;
	}
}
(0, n.Cg)([m.sH], d.prototype, "m_nGeneration", undefined);
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
export function vh(e, ...t) {
	(0, c.q3)(() => B7.generation);
	return B7.ResolveURL(e, ...t);
}
export const B7 = new d();
window.urlStore = B7;
