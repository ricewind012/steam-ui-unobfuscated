var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./52451.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require(/*webcrack:missing*/ "./88696.js");
var l = require(/*webcrack:missing*/ "./72476.js");
var c = require(/*webcrack:missing*/ "./8573.js");
var m = require(/*webcrack:missing*/ "./12176.js");
var u = require("./54946.js");
var d = require("./75888.js");
var A = require("./89748.js");
var p = require("./47801.js");
var g = require("./22091.js");
var h = require("./60917.js");
var C = require("./43024.js");
var _ = require("./18057.js");
var f = require("./49171.js");
var b = require("./34792.js");
var y = require(/*webcrack:missing*/ "./31958.js");
var S = require(/*webcrack:missing*/ "./61416.js");
var w = require(/*webcrack:missing*/ "./75144.js");
var B = require("./77347.js");
var v = require("./10294.js");
const I = "startupmovies";
export function Tr() {
	let e = (0, A.Wx)();
	return (0, s.q3)(() => {
		if (!e) {
			return null;
		}
		return iG.GetEquippedItems();
	});
}
export function sf() {
	return (0, s.q3)(() => iG.GetKeyboardSkins());
}
export function TR(e) {
	return (0, s.q3)(() => e && iG.BHasClaimedSteamDeckRewards(e));
}
export function FZ() {
	const [e] = (0, b.VI)("startup_movie_shuffle");
	const [t] = (0, b.VI)("startup_movie_local_path");
	return (0, S.I)({
		queryKey: ["startup_movie_local_path", e, t],
		queryFn: async () => {
			let r = t;
			try {
				if (e) {
					let e = SteamClient.Customization.GetLocalStartupMovies();
					let t = SteamClient.Customization.GetDownloadedStartupMovies(I);
					await Promise.all([e, t]).then((e) => {
						const t = [...e[0], ...e[1]];
						if (t.length != 0) {
							const e = y.Tg(0, t.length - 1);
							r = t[e].strMovieURL;
						}
					});
				}
			} catch (e) {
				console.log("Unable to retrieve: startup_movie_local_path");
			}
			return {
				bIsOverride: r != null && r.length != 0,
				strUrl: r,
			};
		},
		staleTime: Infinity,
	});
}
export function dT() {
	w.L.invalidateQueries({
		queryKey: ["startup_movie_local_path"],
	});
}
export function oS() {
	let [e] = (0, b.VI)("startup_movie_id");
	return e;
}
class N {
	constructor() {
		(0, a.Gn)(this);
	}
	m_CMInterface;
	m_localStorage;
	m_promiseEquipped;
	m_strCachedKeyboardTheme = null;
	m_equippedItems = null;
	m_keyboardSkins = null;
	m_startupMovies = null;
	m_mapKeyboardSkinThemes = new Map();
	m_steamDeckRegistration = null;
	m_notifyClaimRewardsTimer;
	m_FriendEquippedProfileItemsChangedHandler = null;
	async Init(e) {
		this.m_CMInterface = e;
		this.m_localStorage = new o.A();
		SteamClient.Notifications.RegisterForNotifications(this.OnNotification);
		SteamClient.System.RegisterForOnResumeFromSuspend(
			this.OnSystemResumedFromSuspend,
		);
		this.m_FriendEquippedProfileItemsChangedHandler =
			this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
				u.QA.NotifyFriendEquippedProfileItemsChangedHandler,
				this.OnFriendEquippedProfileItemsChanged,
			);
		this.m_strCachedKeyboardTheme = await this.m_localStorage.GetObject(
			"CurrentKeyboardTheme",
		);
	}
	OnFriendEquippedProfileItemsChanged(e) {
		let t = new c.b(l.iA.steamid);
		if (e.Body().accountid() == t.GetAccountID()) {
			this.ForceRefreshEquippedItems();
		}
		return 1;
	}
	OnNotification(e, t, r) {
		if (t == 20) {
			if (C.cq.deserializeBinary(r).toObject().new_backpack_items) {
				this.m_keyboardSkins = null;
				this.m_startupMovies = null;
			}
		}
	}
	OnSystemResumedFromSuspend() {
		this.CheckClaimSteamDeckRewards();
	}
	BIsValidSteamDeckSerialNumber(e) {
		return (
			e && (e.startsWith("FX") || e.startsWith("FW") || e.startsWith("FV"))
		);
	}
	GetKeyboardSkins() {
		if (!this.m_keyboardSkins) {
			this.m_keyboardSkins = [];
			this.GetProfileItemsOwned([16]).then((e) => {
				if (e) {
					this.m_keyboardSkins = e.steam_deck_keyboard_skins;
					this.m_localStorage.StoreObject(
						"GetKeyboardSkins",
						this.m_keyboardSkins,
					);
				} else {
					this.m_localStorage.GetObject("GetKeyboardSkins").then((e) => {
						this.m_keyboardSkins = e;
					});
				}
			});
		}
		return this.m_keyboardSkins;
	}
	PopulateStartupMovies() {
		let e = this.GetProfileItemsOwned([17]);
		let t = SteamClient.Customization.GetLocalStartupMovies();
		Promise.all([e, t]).then(([e, t]) => {
			let r = [];
			t.forEach((e) =>
				r.push({
					communityitemid: "",
					item_title: e.strMovieURL.substring(
						e.strMovieURL.lastIndexOf("/") + 1,
					),
					movie_webm_small: e.strMovieURL,
					movie_webm: e.strMovieURL,
					image_large: e.strPreviewImageURL,
					image_small: e.strPreviewImageURL,
					movie_webm_local_path: e.strMovieURL,
				}),
			);
			if (e) {
				let t = [];
				let n = [];
				e.steam_deck_startup_movies.forEach((e) => {
					let r = {
						...e,
						movie_webm_local_path: "",
					};
					let i = SteamClient.CommunityItems.GetItemAssetPath(
						r.communityitemid,
						I,
						r.movie_webm,
					);
					i.then((e) => {
						r.movie_webm_local_path = e.path;
						t.push(r);
					});
					n.push(i);
				});
				Promise.all(n).then(() => {
					this.m_startupMovies = [...t, ...r];
					this.m_localStorage.StoreObject("GetStartupMovies", t);
				});
			} else {
				this.m_localStorage.GetObject("GetStartupMovies").then((e) => {
					this.m_startupMovies = [...e, ...r];
				});
			}
		});
	}
	GetStartupMovies() {
		SteamClient.Customization.GenerateLocalStartupMoviesThumbnails(2).then(
			(e) => {
				if (e > 0) {
					this.PopulateStartupMovies();
				}
			},
		);
		if (!this.m_startupMovies) {
			this.m_startupMovies = [];
			this.PopulateStartupMovies();
		}
		return this.m_startupMovies;
	}
	async SetStartupMovie(e) {
		if (e) {
			await Promise.all([
				(0, b.qt)("startup_movie_id", e.communityitemid),
				(0, b.qt)("startup_movie_local_path", e.movie_webm_local_path),
			]);
			return true;
		} else {
			await Promise.all([
				(0, b.qt)("startup_movie_id", ""),
				(0, b.qt)("startup_movie_local_path", ""),
			]);
			return true;
		}
	}
	async DownloadMovie(e) {
		if (e.movie_webm_local_path.length != 0) {
			return true;
		}
		let t = await SteamClient.CommunityItems.DownloadItemAsset(
			e.communityitemid,
			I,
			e.movie_webm,
		);
		let r = t.result == 1;
		if (r) {
			e.movie_webm_local_path = t.path;
			let r = [];
			this.m_startupMovies.forEach((t) => {
				if (t.movie_webm == e.movie_webm) {
					r.push(e);
				} else {
					r.push(t);
				}
			});
			this.m_startupMovies = r;
		}
		return r;
	}
	async RemoveMovieFromDisk(e) {
		if (e.movie_webm_local_path.length == 0) {
			return true;
		}
		let t = await SteamClient.CommunityItems.RemoveDownloadedItemAsset(
			e.communityitemid,
			I,
			e.movie_webm,
		);
		if (t) {
			e.movie_webm_local_path = "";
			let t = [];
			this.m_startupMovies.forEach((r) => {
				if (r.movie_webm == e.movie_webm) {
					t.push(e);
				} else {
					t.push(r);
				}
			});
			this.m_startupMovies = t;
		}
		return t;
	}
	GetEquippedItems() {
		if (!this.m_promiseEquipped) {
			this.ForceRefreshEquippedItems();
		}
		return this.m_equippedItems;
	}
	ForceRefreshEquippedItems() {
		this.m_promiseEquipped = this.GetEquippedProfileItemsForUser(
			new c.b(l.iA.steamid),
		);
		this.m_promiseEquipped.then((e) => (this.m_equippedItems = e));
	}
	async EquipKeyboardSkin(e) {
		if (e == "0") {
			this.m_strCachedKeyboardTheme = "DefaultTheme";
			this.m_localStorage.StoreObject("CurrentKeyboardTheme", "DefaultTheme");
		}
		let t = m.w.Init(u.BT);
		t.Body().set_communityitemid(e);
		let r = await u.xt.SetSteamDeckKeyboardSkin(
			this.m_CMInterface.GetServiceTransport(),
			t,
		);
		if (r.GetEResult() == 1) {
			this.ForceRefreshEquippedItems();
		}
		return r.GetEResult();
	}
	GetKeyboardSkinTheme() {
		if (!l.iA.logged_in) {
			return "DefaultTheme";
		}
		let e = this.GetEquippedItems();
		let t = e?.steam_deck_keyboard_skin;
		if (t?.communityitemid) {
			let e = this.m_mapKeyboardSkinThemes.get(t.communityitemid);
			if (e) {
				return e;
			}
			let r = p.x_.GetCommunityItemDefinition(
				t.appid,
				t.item_class,
				t.item_type,
			);
			if (r) {
				e = JSON.parse(r.item_key_values).profile_theme_id ?? "DefaultTheme";
				this.m_mapKeyboardSkinThemes.set(t.communityitemid, e);
				this.m_localStorage.StoreObject("CurrentKeyboardTheme", e);
				this.m_strCachedKeyboardTheme = e;
				return e;
			}
		}
		return this.m_strCachedKeyboardTheme ?? "DefaultTheme";
	}
	CheckClaimSteamDeckRewards() {
		const e = g.Fd.Get()
			.GetControllers()
			.find((e) => e.eControllerType == 4);
		if (e && this.BIsValidSteamDeckSerialNumber(e.strSerialNumber)) {
			if (
				!this.BHasClaimedSteamDeckRewards(e.strSerialNumber) &&
				!(0, A.qw)().BIsOfflineMode()
			) {
				if (B.OQ.Get().hasSteamConnection) {
					if (this.m_notifyClaimRewardsTimer) {
						window.clearTimeout(this.m_notifyClaimRewardsTimer);
					}
					this.m_notifyClaimRewardsTimer = window.setTimeout(
						() => this.NotifyToClaimSteamDeckRewards(e.strSerialNumber),
						300000,
					);
				}
			}
		}
	}
	GetSteamDeckRegistration() {
		if (this.m_steamDeckRegistration === null) {
			SteamClient.Settings.GetRegisteredSteamDeck().then((e) => {
				this.m_steamDeckRegistration = e;
			});
		}
		return this.m_steamDeckRegistration;
	}
	NotifyToClaimSteamDeckRewards(e) {
		if (this.BHasClaimedSteamDeckRewards(e)) {
			return;
		}
		if (v.Ih.BKioskModeEnabled()) {
			return;
		}
		if (!f.z.BRouteMatch([_.BV.GamepadUI.AppRunning()])) {
			h.Tu.NotifyClaimSteamDeckRewards();
		}
	}
	BHasClaimedSteamDeckRewards(e) {
		let t = this.GetSteamDeckRegistration();
		return (
			!!t &&
			(!!t.bIgnoreRegistrationPrompt ||
				t.strSteamID == l.iA.steamid ||
				(t.bRegistered && (t.strSerialNumber == "" || t.strSerialNumber == e)))
		);
	}
	IgnoreSteamDeckRewardsPrompt() {
		SteamClient.Settings.IgnoreSteamDeckRewards();
		this.m_steamDeckRegistration = {
			strSerialNumber: "",
			strSteamID: l.iA.steamid,
			bRegistered: false,
			bIgnoreRegistrationPrompt: true,
		};
	}
	async ClaimSteamDeckRewards(e, t) {
		let r = m.w.Init(d.g);
		r.Body().set_serial_number(e);
		r.Body().set_controller_code(t);
		let n = await d.a9.RegisterForSteamDeckRewards(
			this.m_CMInterface.GetServiceTransport(),
			r,
		);
		switch (n.GetEResult()) {
			case 29:
			case 1:
				SteamClient.Settings.SetRegisteredSteamDeck(l.iA.steamid, e);
				this.m_steamDeckRegistration = {
					strSerialNumber: e,
					strSteamID: l.iA.steamid,
					bRegistered: true,
					bIgnoreRegistrationPrompt: false,
				};
		}
		return {
			result: n.GetEResult(),
			granted_profile_modifier: n.Body().granted_profile_modifier(),
		};
	}
	async GetEquippedProfileItemsForUser(e) {
		await (0, a.z7)(() => this.m_CMInterface != null);
		let t = m.w.Init(u.aK);
		t.Body().set_steamid(e.ConvertTo64BitString());
		t.Body().set_language(l.TS.LANGUAGE);
		let r = await u.xt.GetProfileItemsEquipped(
			this.m_CMInterface.GetServiceTransport(),
			t,
		);
		if (r.GetEResult() == 1) {
			this.m_localStorage.StoreObject(
				"GetEquippedProfileItemsForUser" + e.ConvertTo64BitString(),
				r.Body().toObject(),
			);
			return r.Body().toObject();
		} else {
			return await this.m_localStorage.GetObject(
				"GetEquippedProfileItemsForUser" + e.ConvertTo64BitString(),
			);
		}
	}
	async GetProfileItemsOwned(e) {
		let t = m.w.Init(u.Yk);
		t.Body().set_language(l.TS.LANGUAGE);
		t.Body().set_filters(e);
		let r = await u.xt.GetProfileItemsOwned(
			this.m_CMInterface.GetServiceTransport(),
			t,
		);
		if (r.GetEResult() == 1) {
			return r.Body().toObject();
		} else {
			return null;
		}
	}
}
(0, n.Cg)([a.sH], N.prototype, "m_equippedItems", undefined);
(0, n.Cg)([a.sH], N.prototype, "m_keyboardSkins", undefined);
(0, n.Cg)([a.sH], N.prototype, "m_startupMovies", undefined);
(0, n.Cg)([a.sH.shallow], N.prototype, "m_mapKeyboardSkinThemes", undefined);
(0, n.Cg)([a.sH], N.prototype, "m_steamDeckRegistration", undefined);
(0, n.Cg)([i.oI], N.prototype, "OnFriendEquippedProfileItemsChanged", null);
(0, n.Cg)([i.oI], N.prototype, "OnNotification", null);
(0, n.Cg)([i.oI], N.prototype, "OnSystemResumedFromSuspend", null);
(0, n.Cg)([a.XI], N.prototype, "PopulateStartupMovies", null);
(0, n.Cg)([a.XI], N.prototype, "IgnoreSteamDeckRewardsPrompt", null);
(0, n.Cg)([a.XI], N.prototype, "ClaimSteamDeckRewards", null);
export const iG = new N();
window.userProfileStore = iG;
