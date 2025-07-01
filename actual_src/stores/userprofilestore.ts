import { makeAutoObservable, when } from "mobx";
import { useObserver } from "mobx-react-lite";
import { A as A_1 } from "../../src/library/88696.js";
import { iA as UserConfig, TS as Config } from "../../src/library/72476.js";
import { b as CSteamID } from "../../src/library/8573.js";
import { w } from "../../src/library/12176.js";
import { QA, BT, xt, aK, Yk } from "../../src/chunk~2dcc5aaf7/54946.js";
import { g, a9 } from "../../src/chunk~2dcc5aaf7/75888.js";
import A, { Wx, qw } from "../../src/chunk~2dcc5aaf7/89748.js";
import { x_ } from "../../src/library/47801.js";
import { Fd } from "../../src/chunk~2dcc5aaf7/22091.js";
import { Tu } from "../../src/library/60917.js";
import { cq } from "../../src/chunk~2dcc5aaf7/43024.js";
import { BV } from "../../src/chunk~2dcc5aaf7/18057.js";
import { z } from "../../src/chunk~2dcc5aaf7/49171.js";
import { VI, qt } from "./settingsstore.js";
import { Tg } from "../../src/library/31958.js";
import { I as I_1 } from "../../src/chunk~2dcc5aaf7/61416.js";
import { L } from "../../src/chunk~2dcc5aaf7/75144.js";
import { OQ } from "../../src/chunk~2dcc5aaf7/77347.js";
import { Ih } from "../../src/chunk~2dcc5aaf7/10294.js";
import { EResult } from "../steamclient/steamclient/shared.js";
import { EClientNotificationType } from "../steamclient/steamclient/Notifications.js";

const I = "startupmovies";

export function Tr() {
	let e = Wx();
	return useObserver(() => {
		if (!e) {
			return null;
		}
		return iG.GetEquippedItems();
	});
}

export function sf() {
	return useObserver(() => iG.GetKeyboardSkins());
}

export function TR(e) {
	return useObserver(() => e && iG.BHasClaimedSteamDeckRewards(e));
}

export function FZ() {
	const [e] = VI("startup_movie_shuffle");
	const [t] = VI("startup_movie_local_path");
	return I_1({
		queryKey: ["startup_movie_local_path", e, t],
		queryFn: async () => {
			let strUrl = t;
			try {
				if (e) {
					let rgMovies = SteamClient.Customization.GetLocalStartupMovies();
					let rgDownloadedMovies =
						SteamClient.Customization.GetDownloadedStartupMovies(I);
					await Promise.all([rgMovies, rgDownloadedMovies]).then((e) => {
						const t = [...e[0], ...e[1]];
						if (t.length != 0) {
							const e = Tg(0, t.length - 1);
							strUrl = t[e].strMovieURL;
						}
					});
				}
			} catch (e) {
				console.log("Unable to retrieve: startup_movie_local_path");
			}
			return {
				bIsOverride: strUrl != null && strUrl.length != 0,
				strUrl,
			};
		},
		staleTime: Infinity,
	});
}

export function dT() {
	L.invalidateQueries({
		queryKey: ["startup_movie_local_path"],
	});
}

export function oS() {
	let [e] = VI("startup_movie_id");
	return e;
}

class CUserProfileStore {
	constructor() {
		makeAutoObservable(this);
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

	async Init(cm) {
		this.m_CMInterface = cm;
		this.m_localStorage = new A_1();
		SteamClient.Notifications.RegisterForNotifications(this.OnNotification);
		SteamClient.System.RegisterForOnResumeFromSuspend(
			this.OnSystemResumedFromSuspend,
		);
		this.m_FriendEquippedProfileItemsChangedHandler =
			this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
				QA.NotifyFriendEquippedProfileItemsChangedHandler,
				this.OnFriendEquippedProfileItemsChanged,
			);
		this.m_strCachedKeyboardTheme = await this.m_localStorage.GetObject(
			"CurrentKeyboardTheme",
		);
	}

	OnFriendEquippedProfileItemsChanged(msg) {
		let steamid = new CSteamID(UserConfig.steamid);
		if (msg.Body().accountid() == steamid.GetAccountID()) {
			this.ForceRefreshEquippedItems();
		}
		return 1;
	}

	OnNotification(e, eType: EClientNotificationType, protoMsg) {
		if (eType == EClientNotificationType.ItemAnnouncement) {
			if (cq.deserializeBinary(protoMsg).toObject().new_backpack_items) {
				this.m_keyboardSkins = null;
				this.m_startupMovies = null;
			}
		}
	}
	OnSystemResumedFromSuspend() {
		this.CheckClaimSteamDeckRewards();
	}

	BIsValidSteamDeckSerialNumber(serial: string) {
		return (
			serial &&
			(serial.startsWith("FX") ||
				serial.startsWith("FW") ||
				serial.startsWith("FW") ||
				serial.startsWith("FV"))
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
				let rgPaths = [];
				e.steam_deck_startup_movies.forEach((e) => {
					let r = {
						...e,
						movie_webm_local_path: "",
					};
					let path = SteamClient.CommunityItems.GetItemAssetPath(
						r.communityitemid,
						I,
						r.movie_webm,
					);
					path.then((e) => {
						r.movie_webm_local_path = e.path;
						t.push(r);
					});
					rgPaths.push(path);
				});
				Promise.all(rgPaths).then(() => {
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
				qt("startup_movie_id", e.communityitemid),
				qt("startup_movie_local_path", e.movie_webm_local_path),
			]);
			return true;
		} else {
			await Promise.all([
				qt("startup_movie_id", ""),
				qt("startup_movie_local_path", ""),
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
			new CSteamID(UserConfig.steamid),
		);
		this.m_promiseEquipped.then((e) => (this.m_equippedItems = e));
	}

	async EquipKeyboardSkin(strCommunityItemID: string) {
		if (strCommunityItemID == "0") {
			this.m_strCachedKeyboardTheme = "DefaultTheme";
			this.m_localStorage.StoreObject("CurrentKeyboardTheme", "DefaultTheme");
		}
		let t = w.Init(BT);
		t.Body().set_communityitemid(strCommunityItemID);
		let r = await xt.SetSteamDeckKeyboardSkin(
			this.m_CMInterface.GetServiceTransport(),
			t,
		);
		if (r.GetEResult() == EResult.OK) {
			this.ForceRefreshEquippedItems();
		}
		return r.GetEResult();
	}

	GetKeyboardSkinTheme() {
		if (!UserConfig.logged_in) {
			return "DefaultTheme";
		}
		let e = this.GetEquippedItems();
		let t = e?.steam_deck_keyboard_skin;
		if (t?.communityitemid) {
			let strKeyboardTheme = this.m_mapKeyboardSkinThemes.get(
				t.communityitemid,
			);
			if (strKeyboardTheme) {
				return strKeyboardTheme;
			}
			let r = x_.GetCommunityItemDefinition(t.appid, t.item_class, t.item_type);
			if (r) {
				strKeyboardTheme =
					JSON.parse(r.item_key_values).profile_theme_id ?? "DefaultTheme";
				this.m_mapKeyboardSkinThemes.set(t.communityitemid, strKeyboardTheme);
				this.m_localStorage.StoreObject(
					"CurrentKeyboardTheme",
					strKeyboardTheme,
				);
				this.m_strCachedKeyboardTheme = strKeyboardTheme;
				return strKeyboardTheme;
			}
		}
		return this.m_strCachedKeyboardTheme ?? "DefaultTheme";
	}

	CheckClaimSteamDeckRewards() {
		const e = Fd.Get()
			.GetControllers()
			.find((e) => e.eControllerType == 4);
		if (e && this.BIsValidSteamDeckSerialNumber(e.strSerialNumber)) {
			if (
				!this.BHasClaimedSteamDeckRewards(e.strSerialNumber) &&
				!qw().BIsOfflineMode()
			) {
				if (OQ.Get().hasSteamConnection) {
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
		if (Ih.BKioskModeEnabled()) {
			return;
		}
		if (!z.BRouteMatch([BV.GamepadUI.AppRunning()])) {
			Tu.NotifyClaimSteamDeckRewards();
		}
	}

	BHasClaimedSteamDeckRewards(e) {
		let t = this.GetSteamDeckRegistration();
		return (
			!!t &&
			(!!t.bIgnoreRegistrationPrompt ||
				t.strSteamID == UserConfig.steamid ||
				(t.bRegistered && (t.strSerialNumber == "" || t.strSerialNumber == e)))
		);
	}

	IgnoreSteamDeckRewardsPrompt() {
		SteamClient.Settings.IgnoreSteamDeckRewards();
		this.m_steamDeckRegistration = {
			strSerialNumber: "",
			strSteamID: UserConfig.steamid,
			bRegistered: false,
			bIgnoreRegistrationPrompt: true,
		};
	}

	async ClaimSteamDeckRewards(e, t) {
		let r = w.Init(g);
		r.Body().set_serial_number(e);
		r.Body().set_controller_code(t);
		let n = await a9.RegisterForSteamDeckRewards(
			this.m_CMInterface.GetServiceTransport(),
			r,
		);
		switch (n.GetEResult()) {
			case 29:
			case 1: {
				SteamClient.Settings.SetRegisteredSteamDeck(UserConfig.steamid, e);
				this.m_steamDeckRegistration = {
					strSerialNumber: e,
					strSteamID: UserConfig.steamid,
					bRegistered: true,
					bIgnoreRegistrationPrompt: false,
				};
			}
		}
		return {
			result: n.GetEResult(),
			granted_profile_modifier: n.Body().granted_profile_modifier(),
		};
	}

	async GetEquippedProfileItemsForUser(e) {
		await when(() => this.m_CMInterface != null);
		let t = w.Init(aK);
		t.Body().set_steamid(e.ConvertTo64BitString());
		t.Body().set_language(Config.LANGUAGE);
		let r = await xt.GetProfileItemsEquipped(
			this.m_CMInterface.GetServiceTransport(),
			t,
		);
		if (r.GetEResult() == 1) {
			this.m_localStorage.StoreObject(
				`GetEquippedProfileItemsForUser${e.ConvertTo64BitString()}`,
				r.Body().toObject(),
			);
			return r.Body().toObject();
		} else {
			return await this.m_localStorage.GetObject(
				`GetEquippedProfileItemsForUser${e.ConvertTo64BitString()}`,
			);
		}
	}

	async GetProfileItemsOwned(e) {
		let filtersMsg = w.Init(Yk);
		filtersMsg.Body().set_language(Config.LANGUAGE);
		filtersMsg.Body().set_filters(e);
		let itemsMsg = await xt.GetProfileItemsOwned(
			this.m_CMInterface.GetServiceTransport(),
			filtersMsg,
		);
		if (itemsMsg.GetEResult() == EResult.OK) {
			return itemsMsg.Body().toObject();
		} else {
			return null;
		}
	}
}
Cg([a.sH], CUserProfileStore.prototype, "m_equippedItems", undefined);
Cg([a.sH], CUserProfileStore.prototype, "m_keyboardSkins", undefined);
Cg([a.sH], CUserProfileStore.prototype, "m_startupMovies", undefined);
Cg(
	[a.sH.shallow],
	CUserProfileStore.prototype,
	"m_mapKeyboardSkinThemes",
	undefined,
);
Cg([a.sH], CUserProfileStore.prototype, "m_steamDeckRegistration", undefined);
Cg(
	[oI],
	CUserProfileStore.prototype,
	"OnFriendEquippedProfileItemsChanged",
	null,
);
Cg([oI], CUserProfileStore.prototype, "OnNotification", null);
Cg([oI], CUserProfileStore.prototype, "OnSystemResumedFromSuspend", null);
Cg([a.XI], CUserProfileStore.prototype, "PopulateStartupMovies", null);
Cg([a.XI], CUserProfileStore.prototype, "IgnoreSteamDeckRewardsPrompt", null);
Cg([a.XI], CUserProfileStore.prototype, "ClaimSteamDeckRewards", null);
export const iG = new CUserProfileStore();
window.userProfileStore = iG;
