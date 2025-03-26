var n;
var i = require(/*webcrack:missing*/ "./34629.js");
var a = require(/*webcrack:missing*/ "./83957.js");
var s = a;
var o = require(/*webcrack:missing*/ "./89193.js");
var l = require("./16154.js");
var c = require(/*webcrack:missing*/ "./72476.js");
var m = require(/*webcrack:missing*/ "./63696.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var d = require(/*webcrack:missing*/ "./49810.js");
(function (e) {
	e[(e.AnyController = 0)] = "AnyController";
	e[(e.XboxController = 1)] = "XboxController";
	e[(e.Ps3Controller = 2)] = "Ps3Controller";
	e[(e.Ps4Controller = 3)] = "Ps4Controller";
	e[(e.Ps5Controller = 4)] = "Ps5Controller";
	e[(e.SwitchController = 5)] = "SwitchController";
	e[(e.SteamController = 6)] = "SteamController";
	e[(e.SteamDeckNeptune = 7)] = "SteamDeckNeptune";
	e[(e.SteamDeckGalileo = 8)] = "SteamDeckGalileo";
})((n ||= {}));
const A = {
	any_controller: n.AnyController,
	xbox_controller: n.XboxController,
	ps3_controller: n.Ps3Controller,
	ps4_controller: n.Ps4Controller,
	ps5_controller: n.Ps5Controller,
	switch_controller: n.SwitchController,
	steam_controller: n.SteamController,
	steam_deck_neptune: n.SteamDeckNeptune,
	steam_deck_galileo: n.SteamDeckGalileo,
};
const p = "unUserdataVersion";
export class Fm {
	m_setWishList = new Set();
	m_wishlistInOrder = Array();
	m_setOwnedPackages = new Set();
	m_setOwnedApps = new Set();
	m_setFollowedApps = new Set();
	m_setExcludedTagsIds = new Set();
	m_setExcludedContentDescriptors = new Set();
	m_setRecommendedApps = new Set();
	m_recAppInOrder = new Array();
	m_mapIgnoredApps = new Map();
	m_mapIgnoredPackages = new Map();
	m_setCuratorsFollowed = new Set();
	m_setCuratorsIgnored = new Set();
	m_bShowFilteredUserReviewScores = true;
	m_setPreferredPlatforms = new Set();
	m_bAllowAppImpressions = false;
	m_primaryLanguage = -1;
	m_secondaryLanguages = new Set();
	m_rgRecommendedTags = [];
	m_mapRecommendingCuratorsForApp = new Map();
	m_setPackagesInCart = new Set();
	m_setAppsInCart = new Set();
	m_nCartLineItemCount = 0;
	m_rgHardwareUsed = new Set();
	m_bIsLoaded = false;
	m_promise;
	m_bAjaxInFlight = false;
	BIsLoaded() {
		return this.m_bIsLoaded;
	}
	GetWishlistGamesInUserOrder() {
		return this.m_wishlistInOrder;
	}
	GetWishlistGameCount() {
		return this.m_setWishList.size;
	}
	GetRecommendedGamesInIRPriorityOrder() {
		return this.m_recAppInOrder;
	}
	GetFollowedCuratorCount() {
		return this.m_setCuratorsFollowed.size;
	}
	GetFollowedCuratorsAccountID() {
		return Array.from(this.m_setCuratorsFollowed);
	}
	GetPackagesInCartCount() {
		return this.m_setPackagesInCart.size;
	}
	GetAppInCartCount() {
		return this.m_setAppsInCart.size;
	}
	GetCartLineItemCount() {
		return this.m_nCartLineItemCount;
	}
	GetIgnoredAppsCount() {
		return this.m_mapIgnoredApps.size;
	}
	BIsFollowingCurator(e) {
		const t =
			typeof e == "object" && "GetAccountID" in e ? e.GetAccountID() : e;
		return this.m_setCuratorsFollowed.has(t);
	}
	BIsFollowingCreator(e) {
		return this.BIsFollowingCurator(e);
	}
	BIsIgnoringCurator(e) {
		const t =
			typeof e == "object" && "GetAccountID" in e ? e.GetAccountID() : e;
		return this.m_setCuratorsIgnored.has(t);
	}
	get ExcludedContentDescriptor() {
		return Array.from(this.m_setExcludedContentDescriptors);
	}
	BExcludesTag(e) {
		return e.some((e) => this.m_setExcludedTagsIds.has(Number(e.tagid)));
	}
	BExcludeTagIDs(e) {
		return e.some((e) => this.m_setExcludedTagsIds.has(e));
	}
	GetExcludedTagsSortedByID() {
		return Array.from(this.m_setExcludedTagsIds).sort();
	}
	BExcludesContentDescriptor(e) {
		return e.some((e) => this.m_setExcludedContentDescriptors.has(e));
	}
	BIncludesContentDescriptor(e) {
		return !this.m_setExcludedContentDescriptors.has(e);
	}
	BIsGameWishlisted(e) {
		return this.m_setWishList.has(Number(e));
	}
	BIsGameRecommended(e) {
		return this.m_setRecommendedApps.has(Number(e));
	}
	BIsGameIgnored(e) {
		return this.m_mapIgnoredApps && this.m_mapIgnoredApps.has(e);
	}
	BIsPackageIgnored(e) {
		return this.m_mapIgnoredPackages?.has(e);
	}
	BIsGameOwned(e) {
		return this.m_setOwnedApps.has(Number(e));
	}
	BOwnsApp(e) {
		return Boolean(e) && this.m_setOwnedApps.has(Number(e));
	}
	BFollowsApp(e) {
		return this.m_setFollowedApps.has(Number(e));
	}
	BOwnsPackage(e) {
		return this.m_setOwnedPackages.has(Number(e));
	}
	BHasUsedHardware(e) {
		return this.m_rgHardwareUsed.has(e);
	}
	BShowFilteredUserReviewScores() {
		return this.m_bShowFilteredUserReviewScores;
	}
	BAppImpressionsAllowed() {
		return this.m_bAllowAppImpressions;
	}
	GetPrimaryLanguage() {
		return this.m_primaryLanguage;
	}
	GetSecondaryLanguages() {
		return this.m_secondaryLanguages;
	}
	BIsAnyLanguageEnabled(e) {
		return (
			this.m_primaryLanguage == null ||
			this.m_primaryLanguage <= -1 ||
			this.m_primaryLanguage >= 31 ||
			e.some(
				(e) => this.m_primaryLanguage === e || this.m_secondaryLanguages.has(e),
			)
		);
	}
	GetRecommendedTags() {
		return this.m_rgRecommendedTags;
	}
	BIsAjaxInFlight() {
		return this.m_bAjaxInFlight;
	}
	BIsAppRecommendedBySomeCurator(e) {
		return this.m_mapRecommendingCuratorsForApp.has(e);
	}
	GetRecommendingCuratorsForApp(e) {
		return this.m_mapRecommendingCuratorsForApp.get(e);
	}
	GetOwnedApps() {
		return this.m_setOwnedApps;
	}
	GetWishlistedApps() {
		return this.m_setWishList;
	}
	async HintLoad() {
		this.m_promise ||= this.InternalLoad();
		return this.m_promise;
	}
	async InternalLoad() {
		let e = window.localStorage.getItem(p) || "0";
		let t = {
			v: e == "0" ? undefined : e,
			id: "" + c.iA.accountid,
			cc: "" + c.TS.COUNTRY,
			origin: self.origin,
		};
		let r = c.TS.STORE_BASE_URL + "dynamicstore/userdata/";
		try {
			let e = await s.get(r, {
				params: t,
				withCredentials: true,
			});
			if (e && e.status == 200) {
				(0, o.h5)(() => {
					this.m_bIsLoaded = true;
					if (e.data.rgCurators) {
						this.m_setCuratorsFollowed = new Set();
						for (const t in e.data.rgCurators) {
							this.m_setCuratorsFollowed.add(Number(t));
						}
					}
					if (e.data.rgCuratorsIgnored) {
						this.m_setCuratorsIgnored = new Set(
							e.data.rgCuratorsIgnored.map((e) => Number(e)),
						);
					}
					if (e.data.rgWishlist) {
						this.m_wishlistInOrder = e.data.rgWishlist.map((e) => Number(e));
						this.m_setWishList = new Set(
							e.data.rgWishlist.map((e) => Number(e)),
						);
					}
					if (e.data.rgFollowedApps) {
						this.m_setFollowedApps = new Set(
							e.data.rgFollowedApps.map((e) => Number(e)),
						);
					}
					if (e.data.rgOwnedApps) {
						this.m_setOwnedApps = new Set(
							e.data.rgOwnedApps.map((e) => Number(e)),
						);
					}
					if (e.data.rgOwnedPackages) {
						this.m_setOwnedPackages = new Set(
							e.data.rgOwnedPackages.map((e) => Number(e)),
						);
					}
					if (e.data.rgIgnoredApps) {
						const t = e.data.rgIgnoredApps;
						this.m_mapIgnoredApps = new Map();
						for (const e in t) {
							this.m_mapIgnoredApps.set(Number(e), Number(t[e]));
						}
					}
					if (e.data.rgIgnoredPackages) {
						const t = e.data.rgIgnoredPackages;
						this.m_mapIgnoredPackages = new Map();
						for (const e in t) {
							this.m_mapIgnoredPackages.set(Number(e), Number(t[e]));
						}
					}
					if (e.data.rgExcludedTags) {
						this.m_setExcludedTagsIds = new Set(
							e.data.rgExcludedTags.map((e) => Number(e.tagid)),
						);
					}
					if (e.data.rgExcludedContentDescriptorIDs) {
						this.m_setExcludedContentDescriptors = new Set(
							e.data.rgExcludedContentDescriptorIDs.map((e) => Number(e)),
						);
					}
					if (e.data.rgRecommendedApps) {
						this.m_recAppInOrder = e.data.rgRecommendedApps.map((e) =>
							Number(e),
						);
						this.m_setRecommendedApps = new Set(
							e.data.rgRecommendedApps.map((e) => Number(e)),
						);
					}
					if (e.data.rgPreferredPlatforms) {
						this.m_setPreferredPlatforms = new Set(e.data.rgPreferredPlatforms);
					}
					if (e.data.bAllowAppImpressions) {
						this.m_bAllowAppImpressions = e.data.bAllowAppImpressions;
					}
					this.m_bShowFilteredUserReviewScores =
						!!e.data.bShowFilteredUserReviewScores;
					if (e.data.rgPrimaryLanguage !== undefined) {
						this.m_primaryLanguage = e.data.rgPrimaryLanguage;
					}
					if (e.data.rgSecondaryLanguages) {
						this.m_secondaryLanguages = new Set(e.data.rgSecondaryLanguages);
					}
					if (e.data.rgRecommendedTags) {
						this.m_rgRecommendedTags = e.data.rgRecommendedTags.map(
							(e) => e.tagid,
						);
					}
					if (e.data.rgAppsInCart) {
						this.m_setAppsInCart = new Set(e.data.rgAppsInCart);
					}
					if (e.data.rgPackagesInCart) {
						this.m_setPackagesInCart = new Set(e.data.rgPackagesInCart);
					}
					if (e.data.nCartLineItemCount) {
						this.m_nCartLineItemCount = e.data.nCartLineItemCount;
					}
					if (e.data.rgCurations) {
						for (const t of Object.keys(e.data.rgCurations)) {
							const r = [];
							for (const n of Object.keys(e.data.rgCurations[t])) {
								if (e.data.rgCurations[t][n] === 0) {
									r.push(Number(n));
								}
							}
							this.m_mapRecommendingCuratorsForApp.set(Number(t), r);
						}
					}
					if (e.data.rgHardwareUsed) {
						for (const t of e.data.rgHardwareUsed) {
							const e = A[t];
							if (e) {
								this.m_rgHardwareUsed.add(e);
							}
						}
					}
				});
			}
		} catch (e) {
			let t = (0, l.H)(e);
			console.error("CDynamicStore.InternalLoad", t.strErrorMsg, t);
		}
		return this;
	}
	async UpdateFollowOrIgnoreCurator(e, t, r) {
		let n =
			c.TS.STORE_BASE_URL + "curators/" + (t ? "ajaxfollow/" : "ajaxignore/");
		const i = e.GetAccountID();
		const a = new FormData();
		a.append("clanid", "" + i);
		a.append("sessionid", c.TS.SESSIONID);
		a.append(t ? "follow" : "ignore", r ? "1" : "0");
		let o = await s.post(n, a, {
			withCredentials: true,
		});
		if (o && o.status == 200) {
			this.InvalidateCache();
			const e = t ? this.m_setCuratorsFollowed : this.m_setCuratorsIgnored;
			if (r) {
				e.add(i);
			} else {
				e.delete(i);
			}
		}
		return o.data;
	}
	async UpdateAppIgnore(e, t, r, n = 0) {
		let i = c.TS.STORE_BASE_URL + "recommended/ignorerecommendation";
		const a = new FormData();
		a.append("sessionid", c.TS.SESSIONID);
		a.append("appid", "" + e);
		a.append("remove", t ? "0" : "1");
		a.append("snr", r);
		a.append("ignore_reason", "" + n);
		try {
			this.m_bAjaxInFlight = true;
			let r = await s.post(i, a, {
				withCredentials: true,
			});
			if (r && r.status == 200) {
				(0, o.h5)(() => {
					this.InvalidateCache();
					if (t) {
						this.m_mapIgnoredApps.set(e, n);
					} else {
						this.m_mapIgnoredApps.delete(e);
					}
				});
			}
			this.m_bAjaxInFlight = false;
			return r.data;
		} catch (e) {
			let t = (0, l.H)(e);
			console.error("UpdateAppIgnore", t.strErrorMsg, t);
		}
		this.m_bAjaxInFlight = false;
		return {
			success: 2,
		};
	}
	async UpdateGameWishlist(e, t, r, n) {
		let i =
			c.TS.STORE_BASE_URL +
			"api/" +
			(t ? "addtowishlist" : "removefromwishlist");
		const a = new FormData();
		a.append("appid", "" + e);
		a.append("sessionid", c.TS.SESSIONID);
		if (r) {
			a.append("snr", r);
		}
		const o = this.m_setWishList.has(e)
			? this.m_wishlistInOrder.findIndex((t) => t == e)
			: -1;
		this.ApplyWishlistUpdate(e, t);
		this.m_bAjaxInFlight = true;
		let l = await s.post(i, a, {
			withCredentials: true,
			cancelToken: n ? n.token : undefined,
		});
		this.m_bAjaxInFlight = false;
		if (n && n.token.reason) {
			return {
				success: 52,
			};
		} else {
			l.data.success = l.data.success == 1 ? 1 : 2;
			if (l.data.success != 1) {
				this.ApplyWishlistUpdate(e, o != -1, o);
			}
			return l.data;
		}
	}
	ApplyWishlistUpdate(e, t, r = -1) {
		this.InvalidateCache();
		e = Number(e);
		if (t) {
			if (!this.m_setWishList.has(e)) {
				if (r == -1) {
					this.m_wishlistInOrder.push(e);
				} else {
					this.m_wishlistInOrder.splice(r, 0, e);
				}
			}
			this.m_setWishList.add(e);
		} else {
			if (this.m_setWishList.has(e)) {
				const t = this.m_wishlistInOrder.findIndex((t) => t == e);
				if (t != -1) {
					this.m_wishlistInOrder.splice(t, 1);
				}
			}
			this.m_setWishList.delete(e);
		}
	}
	async AddToCart(e, t, r, n, i, a, o) {
		if (
			window.g_bUseNewCartAPI !== undefined &&
			window.g_bUseNewCartAPI &&
			typeof window.AddItemToCart == "function"
		) {
			let e;
			if (i) {
				e = d.A.ParseSNR(i);
			}
			window.AddItemToCart(t, a, e);
			return true;
		}
		const l = new FormData();
		l.append("action", "add_to_cart");
		if (a) {
			l.append("bundleid", a.toString());
		} else {
			l.append("subid", "" + t);
		}
		if (i) {
			l.append("snr", i);
		}
		l.append("sessionid", c.TS.SESSIONID);
		l.append("quantity", "1");
		const m = GetOwningWindowForEvent(e);
		e.preventDefault();
		try {
			await s.post(r, l, {
				withCredentials: true,
			});
			this.InvalidateCache();
			if (o?.fnSetURL) {
				o.fnSetURL(n);
			} else {
				m.location.href = n;
			}
		} catch (e) {
			console.log("HandleOnAddToCart", e);
			return false;
		}
		return true;
	}
	async AddLicenseForFreeGame(e) {
		if (this.BOwnsApp(e)) {
			return 1;
		}
		try {
			const t = new FormData();
			t.append("sessionid", c.TS.SESSIONID);
			t.append("appid", "" + e);
			t.append("cc", c.TS.COUNTRY);
			let r = c.TS.STORE_BASE_URL + "actions/addappformastersubscription";
			let n = await s.post(r, t, {
				withCredentials: true,
			});
			this.InvalidateCache();
			if (!n.data.success || n.data.success !== 1) {
				if (n.data.success) {
					return n.data.success;
				} else {
					return 2;
				}
			}
			this.m_setOwnedApps.add(Number(e));
		} catch (e) {
			let t = (0, l.H)(e);
			console.log("AddLicense request failed:", t.strErrorMsg, t);
			return 2;
		}
		return 1;
	}
	async UpdateFollowingApp(e, t) {
		try {
			const r = c.TS.STORE_BASE_URL + "explore/followgame";
			const n = new FormData();
			n.append("appid", "" + e);
			n.append("sessionid", c.TS.SESSIONID);
			if (!t) {
				n.append("unfollow", "1");
			}
			const i = await s.post(r, n, {
				withCredentials: true,
			});
			if (!i.data) {
				return 2;
			}
			this.InvalidateCache();
			if (t) {
				this.m_setFollowedApps.add(Number(e));
			} else {
				this.m_setFollowedApps.delete(Number(e));
			}
		} catch (e) {
			console.log("Follow game request failed");
			return 2;
		}
		return 1;
	}
	BHasPlatformPreferenceSet() {
		return (
			this.m_setPreferredPlatforms.size > 0 &&
			this.m_setPreferredPlatforms.size < 3
		);
	}
	BIsPreferredPlatform(e) {
		return this.m_setPreferredPlatforms.has(e);
	}
	InvalidateCache() {
		window.localStorage.setItem(
			p,
			(Number.parseInt(window.localStorage.getItem(p) || "0") + 1).toString(),
		);
	}
	static s_globalSingletonStore;
	static Get() {
		if (!Fm.s_globalSingletonStore) {
			Fm.s_globalSingletonStore = new Fm();
			if (c.TS.WEB_UNIVERSE == "dev") {
				window.DUS = Fm.s_globalSingletonStore;
			}
		}
		return Fm.s_globalSingletonStore;
	}
	constructor() {
		(0, o.Gn)(this);
	}
}
export function L2() {
	const [e, t] = (0, m.useState)(!Fm.Get().BIsLoaded());
	(0, m.useEffect)(() => {
		if (e) {
			Fm.Get()
				.HintLoad()
				.finally(() => t(!Fm.Get().BIsLoaded()));
		}
	}, [e]);
	return [e, Fm.Get()];
}
export function Lg(e) {
	const [t, r] = L2();
	return !t && r.BOwnsApp(e);
}
(0, i.Cg)([o.sH], Fm.prototype, "m_setWishList", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_setOwnedPackages", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_setOwnedApps", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_setFollowedApps", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_setExcludedTagsIds", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_setExcludedContentDescriptors", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_setRecommendedApps", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_mapIgnoredApps", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_mapIgnoredPackages", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_setCuratorsFollowed", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_setCuratorsIgnored", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_bShowFilteredUserReviewScores", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_primaryLanguage", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_secondaryLanguages", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_rgRecommendedTags", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_mapRecommendingCuratorsForApp", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_setPackagesInCart", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_setAppsInCart", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_nCartLineItemCount", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_rgHardwareUsed", undefined);
(0, i.Cg)([o.sH], Fm.prototype, "m_bAjaxInFlight", undefined);
(0, i.Cg)([o.EW], Fm.prototype, "ExcludedContentDescriptor", null);
(0, i.Cg)([o.XI], Fm.prototype, "UpdateAppIgnore", null);
