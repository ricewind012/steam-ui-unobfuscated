var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require("./87935.js");
var o = require("./96593.js");
var l = require("./1252.js");
var c = require(/*webcrack:missing*/ "./12176.js");
var m = require(/*webcrack:missing*/ "./52451.js");
var u = require("./96538.js");
var d = require("./16053.js");
var A = require(/*webcrack:missing*/ "./83957.js");
var p = A;
var g = require("./51095.js");
var h = require(/*webcrack:missing*/ "./79769.js");
var C = require(/*webcrack:missing*/ "./72476.js");
var _ = require(/*webcrack:missing*/ "./44846.js");
var f = require(/*webcrack:missing*/ "./90095.js");
export function T(e) {
	i.useEffect(
		() => (e ? H.RegisterForAppData(e, () => {}).unregister : () => {}),
		[e],
	);
	return (0, f.q3)(() => (e ? H.GetAppDetails(e) : null));
}
class y {
	constructor() {
		(0, a.Gn)(this);
	}
	details = null;
	associationData = null;
	appDetailsSpotlight = null;
	descriptionsData = null;
	customImageInfo = null;
	customImageInfoRtime = 0;
	cRegistered = 0;
	listeners = [];
	hAppDetails = null;
	bLoadingAchievments = false;
}
(0, n.Cg)([a.sH], y.prototype, "details", undefined);
(0, n.Cg)([a.sH.ref], y.prototype, "associationData", undefined);
(0, n.Cg)([a.sH.ref], y.prototype, "appDetailsSpotlight", undefined);
(0, n.Cg)([a.sH.ref], y.prototype, "descriptionsData", undefined);
(0, n.Cg)([a.sH.ref], y.prototype, "customImageInfo", undefined);
const S = "associations";
const w = "descriptions";
const B = "achievements";
const v = "customimage";
class I {
	constructor() {
		(0, a.Gn)(this);
	}
	m_mapAppData = new a.Es();
	m_setDetailsInProgress = new Set();
	m_CMInterface;
	m_mapRecentlyLaunchedApps = new a.Es();
	Init(e) {
		this.m_CMInterface = e;
	}
	CMInterface() {
		return this.m_CMInterface;
	}
	GetAppData(e) {
		if (!this.m_mapAppData.has(e)) {
			this.m_mapAppData.set(e, new y());
		}
		return this.m_mapAppData.get(e);
	}
	RegisterForAppData(e, t) {
		let r = this.GetAppData(e);
		if (r.cRegistered == 0) {
			r.hAppDetails = SteamClient.Apps.RegisterForAppDetails(
				e,
				this.AppDetailsChanged,
			);
		}
		r.cRegistered++;
		if (t) {
			r.listeners.push(t);
			t(r.details);
		}
		return {
			unregister: () => {
				this.UnregisterForAppData(r, t);
			},
		};
	}
	UnregisterForAppData(e, t) {
		e.cRegistered--;
		if (t) {
			e.listeners = e.listeners.filter((e) => e !== t);
		}
		if (e.cRegistered == 0) {
			e.hAppDetails.unregister();
		}
	}
	AppDetailsChanged(e) {
		if (!this.m_mapAppData.has(e.unAppID)) {
			console.log(
				"AppDetailsStore error - received app details when we aren't subscribed?",
			);
		}
		let t = this.GetAppData(e.unAppID);
		t.details = e;
		if (e && e.achievements && e.achievements.vecHighlight !== undefined) {
			u.O.SetCachedDataForApp(e.unAppID, B, 2, e.achievements);
		}
		if (e) {
			t.listeners.forEach((t) => t(e));
		}
	}
	GetAppDetails(e) {
		return this.GetAppData(e).details;
	}
	async RequestAppDetails(e) {
		const t = this.GetAppDetails(e);
		return (
			t ||
			new Promise((t) => {
				let r = false;
				let n = this.RegisterForAppData(e, (e) => {
					if (e) {
						if (!r) {
							r = true;
							t(e);
						}
						if (r && n) {
							n.unregister();
							n = null;
						}
					}
				});
			})
		);
	}
	GetAchievements(e) {
		let t = this.GetAppData(e);
		if (t.details?.achievements.vecHighlight === undefined) {
			this.RequestAchievements(e);
		}
		return t.details?.achievements;
	}
	async RequestAchievements(e) {
		let t = this.GetAppData(e);
		if (
			!t.bLoadingAchievments &&
			t.details.achievements.vecHighlight === undefined
		) {
			t.bLoadingAchievments = true;
			let r = await u.O.GetCachedDataForApp(e, B, 2);
			t.bLoadingAchievments = false;
			if (r) {
				t.details.achievements = r;
			}
		}
	}
	BAchievementIsHiddenAndAchieved(e, t) {
		let r = this.GetAchievements(e);
		if (!r) {
			return false;
		}
		for (let e of r.vecAchievedHidden) {
			if (e.strName == t) {
				return true;
			}
		}
		return false;
	}
	GetAssociations(e) {
		let t = this.GetAppData(e);
		if (!t.associationData) {
			this.RequestAssociationData(e);
		}
		return t.associationData;
	}
	GetDescriptions(e) {
		let t = this.GetAppData(e);
		if (!t.descriptionsData) {
			this.RequestDescriptionsData(e);
		}
		return t.descriptionsData;
	}
	async RequestAssociationData(e) {
		let t = this.GetAppData(e);
		if (t.associationData === null) {
			let r = await u.O.GetCachedDataForApp(e, S, 2);
			if (r) {
				t.associationData = r;
			}
		}
		let r = await this.GetAjaxLibraryAppDetails(e);
		if (r) {
			this.SetAjaxLibraryAppDetails(e, t, r);
		}
	}
	async RequestDescriptionsData(e) {
		let t = this.GetAppData(e);
		if (t.descriptionsData === null) {
			let r = await u.O.GetCachedDataForApp(e, w, 1);
			if (r) {
				t.descriptionsData = r;
			}
		}
		let r = await this.GetAjaxLibraryAppDetails(e);
		if (r) {
			this.SetAjaxLibraryAppDetails(e, t, r);
		}
	}
	SetAjaxLibraryAppDetails(e, t, r) {
		t.associationData = {
			rgDevelopers: [],
			rgPublishers: [],
			rgFranchises: [],
		};
		if (r.rgDevelopers) {
			for (const e of r.rgDevelopers) {
				t.associationData.rgDevelopers.push({
					strName: e.name,
					strURL: e.url,
				});
			}
		}
		if (r.rgPublishers) {
			for (const e of r.rgPublishers) {
				t.associationData.rgPublishers.push({
					strName: e.name,
					strURL: e.url,
				});
			}
		}
		if (r.rgFranchises) {
			for (const e of r.rgFranchises) {
				t.associationData.rgFranchises.push({
					strName: e.name,
					strURL: e.url,
				});
			}
		}
		u.O.SetCachedDataForApp(e, S, 2, t.associationData);
		t.descriptionsData = {
			strFullDescription: r.strFullDescription,
			strSnippet: (0, g.EK)(r.strSnippet),
		};
		u.O.SetCachedDataForApp(e, w, 1, t.descriptionsData);
	}
	async GetAjaxLibraryAppDetails(e) {
		if (this.m_setDetailsInProgress.has(e)) {
			return null;
		}
		this.m_setDetailsInProgress.add(e);
		try {
			let t = await l.g.get(s.B7.ResolveURL("LibraryAppDetails", e), {
				retrycount: 1,
			});
			this.m_setDetailsInProgress.delete(e);
			if (t.status == 1) {
				return t;
			} else {
				return null;
			}
		} catch (e) {
			return null;
		}
	}
	GetAppDetailsSpotlight(e) {
		let t = this.GetAppData(e);
		if (t.appDetailsSpotlight) {
			return t.appDetailsSpotlight.data;
		} else {
			this.RequestAppDetailsSpotlight(e);
			return null;
		}
	}
	async RequestAppDetailsSpotlight(e) {
		let t = c.w.Init(d.cZ);
		t.Body().set_appid(e);
		let r = await d.eW.GetAppDetailsSpotlight(
			this.m_CMInterface.GetServiceTransport(),
			t,
		);
		if (r.GetEResult() != 1) {
			console.log(`Failed to load app details spotlight for ${e}`);
			return;
		}
		let n = r.Body().toObject();
		this.GetAppData(e).appDetailsSpotlight = {
			dtLoaded: new Date(),
			data: n,
		};
	}
	GetCustomLogoPosition(e) {
		let t = this.GetAppData(e.appid);
		if (
			t.customImageInfo === null ||
			t.customImageInfoRtime != e.rt_custom_image_mtime
		) {
			this.RequestCustomImageInfo(e);
		}
		return t.customImageInfo && t.customImageInfo.logoPosition;
	}
	ValidateCustomImageInfo(e) {
		if (!e) {
			return false;
		}
		if (!e.nVersion || e.nVersion != 1) {
			return false;
		}
		if (!e.logoPosition) {
			return false;
		}
		const t = e.logoPosition;
		const r = t.pinnedPosition;
		return (
			(r == "UpperLeft" ||
				r == "BottomLeft" ||
				r == "UpperCenter" ||
				r == "CenterCenter" ||
				r == "BottomCenter") &&
			!!t.nWidthPct &&
			!!t.nHeightPct &&
			!(t.nWidthPct < 0) &&
			!(t.nWidthPct > 100) &&
			!(t.nHeightPct < 0) &&
			!(t.nHeightPct > 100)
		);
	}
	async RequestCustomImageInfo(e) {
		const t = e.appid;
		let r = this.GetAppData(t);
		if (r.customImageInfo == null) {
			let n = await u.O.GetCachedDataForApp(t, v, 1);
			if (n) {
				r.customImageInfo = n;
				r.customImageInfoRtime = e.rt_custom_image_mtime;
			}
		}
		const n = s.B7.BuildCustomAssetURL(t, "", "json", e.rt_custom_image_mtime);
		try {
			const i = await p.get(n, {
				withCredentials: false,
			});
			if (this.ValidateCustomImageInfo(i.data)) {
				const n = i.data;
				if (JSON.stringify(n) != JSON.stringify(r.customImageInfo)) {
					r.customImageInfo = n;
					u.O.SetCachedDataForApp(t, v, 1, n);
				}
				r.customImageInfoRtime = e.rt_custom_image_mtime;
			} else {
				r.customImageInfo = undefined;
				r.customImageInfoRtime = e.rt_custom_image_mtime;
				u.O.SetCachedDataForApp(t, v, 1, undefined);
			}
		} catch (n) {
			r.customImageInfo = undefined;
			r.customImageInfoRtime = e.rt_custom_image_mtime;
			u.O.SetCachedDataForApp(t, v, 1, undefined);
		}
	}
	async SaveCustomLogoPosition(e, t) {
		const r = {
			nVersion: 1,
			logoPosition: t,
		};
		return SteamClient.Apps.SetCustomLogoPositionForApp(
			e.appid,
			JSON.stringify(r),
		).then(() => {
			let n = this.GetAppData(e.appid);
			n.customImageInfo = r;
			n.customImageInfoRtime = e.rt_custom_image_mtime;
			u.O.SetCachedDataForApp(e.appid, v, 1, t);
		});
	}
	ClearCustomLogoPosition(e) {
		u.O.SetCachedDataForApp(e.appid, v, 1, undefined);
		return SteamClient.Apps.ClearCustomLogoPositionForApp(e.appid).then(() => {
			let t = this.GetAppData(e.appid);
			t.customImageInfo = undefined;
			t.customImageInfoRtime = e.rt_custom_image_mtime;
		});
	}
	GetHeroImages(e) {
		let t = e.appid;
		const r = e.rt_store_asset_mtime;
		let n = o.tw.GetCustomHeroImageURLs(e);
		let i = this.GetHeroImagesForAppId(t, e.local_cache_version, r);
		let a =
			e.optional_parent_app_id &&
			this.GetHeroImagesForAppId(
				e.optional_parent_app_id,
				e.local_cache_version,
				e.rt_store_asset_mtime,
			);
		if ((!i.bHasHeroImage || i.rgHeroImages.length == 0) && !!a) {
			t = e.optional_parent_app_id;
			i = a;
		}
		return {
			rgHeroImages: [...n, ...i.rgHeroImages],
			bHasHeroImage: i.bHasHeroImage,
			appid: t,
		};
	}
	GetHeroImagesForAppId(e, t, r) {
		let n = [];
		let i = false;
		const a = this.GetAppDetails(e);
		if (a) {
			const o = a.libraryAssets;
			if (o && o.strHeroImage) {
				i = true;
				n.push(s.B7.BuildCachedLibraryAssetURL(e, o.strHeroImage, t));
				n.push(s.B7.BuildLegacyCachedLibraryAssetURL(e, "library_hero.jpg", t));
				n.push(s.B7.BuildLibraryAssetURL(e, o.strHeroImage, r));
			}
		}
		return {
			rgHeroImages: n,
			bHasHeroImage: i,
		};
	}
	GetHeroBlurImages(e) {
		let t = Array(o.tw.GetCustomHeroImageURLs(e).length).fill("");
		const r = e.rt_store_asset_mtime;
		const n = this.GetHeroImages(e);
		t.push(
			...this.GetHeroBlurImagesForAppId(n.appid, e.local_cache_version, r),
		);
		return t;
	}
	GetHeroBlurImagesForAppId(e, t, r) {
		let n = [];
		const i = this.GetAppDetails(e);
		if (i) {
			const a = i.libraryAssets;
			if (a && a.strHeroBlurImage) {
				n.push(s.B7.BuildCachedLibraryAssetURL(e, a.strHeroBlurImage, t));
				n.push(
					s.B7.BuildLegacyCachedLibraryAssetURL(e, "library_hero_blur.jpg", t),
				);
				n.push(s.B7.BuildLibraryAssetURL(e, a.strHeroBlurImage, r));
			}
		}
		return n;
	}
	GetLogoImages(e) {
		const t = e.appid;
		const r = e.rt_store_asset_mtime;
		let { rgLogoImages: n, logoPosition: i } = this.GetLogoImagesForAppId(
			t,
			e.local_cache_version,
			r,
		);
		let a = o.tw.GetCustomLogoImageURLs(e);
		let s =
			e.optional_parent_app_id &&
			this.GetLogoImagesForAppId(
				e.optional_parent_app_id,
				e.local_cache_version,
				e.rt_store_asset_mtime,
			);
		if (n.length == 0 && s) {
			n = s.rgLogoImages;
		}
		if (!i && s) {
			i = s.logoPosition;
		}
		return {
			rgLogoImages: [...a, ...n],
			logoPosition: i,
		};
	}
	GetLogoImagesForAppId(e, t, r) {
		let n = [];
		let i = null;
		const a = this.GetAppDetails(e);
		if (a && a.libraryAssets && a.libraryAssets.strLogoImage) {
			const o = a.libraryAssets;
			i = o.logoPosition;
			n.push(s.B7.BuildCachedLibraryAssetURL(e, o.strLogoImage, t));
			n.push(s.B7.BuildLegacyCachedLibraryAssetURL(e, "logo.png", t));
			n.push(s.B7.BuildLibraryAssetURL(e, o.strLogoImage, r));
		}
		return {
			rgLogoImages: n,
			logoPosition: i,
		};
	}
	GetHeaderImages(e) {
		let t = e.appid;
		const r = e.rt_store_asset_mtime;
		let n = o.tw.GetCustomLandcapeImageURLs(e);
		let i = this.GetHeaderImagesForAppId(t, e.local_cache_version, r);
		if (i.length == 0) {
			const r = e.header_filename ? e.header_filename : "header.jpg";
			i.push(s.B7.BuildCachedLibraryAssetURL(t, r, e.local_cache_version ?? 0));
			i.push(
				s.B7.BuildLegacyCachedLibraryAssetURL(
					t,
					"header.jpg",
					e.local_cache_version ?? 0,
				),
			);
			i.push(
				s.B7.BuildLibraryAssetURL(e.appid, r, e.rt_store_asset_mtime ?? 0),
			);
		}
		return [...n, ...i];
	}
	GetHeaderImagesForAppId(e, t, r) {
		let n = [];
		const i = this.GetAppDetails(e);
		if (i && i.libraryAssets && i.libraryAssets.strHeaderImage) {
			const a = i.libraryAssets;
			n.push(s.B7.BuildCachedLibraryAssetURL(e, a.strHeaderImage, t));
			n.push(s.B7.BuildLegacyCachedLibraryAssetURL(e, "header.jpg", t));
			n.push(s.B7.BuildLibraryAssetURL(e, a.strHeaderImage, r));
		}
		return n;
	}
	BHasRecentlyLaunched(e) {
		return this.m_mapRecentlyLaunchedApps.has(e);
	}
	MarkAppAsRecentlyLaunched(e) {
		let t = e == 1172380 ? 20000 : 0;
		if (t == 0) {
			return;
		}
		let r = this.m_mapRecentlyLaunchedApps.get(e);
		if (!r) {
			r = new h.LU();
			this.m_mapRecentlyLaunchedApps.set(e, r);
		}
		r.Schedule(t, () => this.m_mapRecentlyLaunchedApps.delete(e));
	}
	BIsWorkshopVisible(e) {
		return !(0, _.ID)(C.TS.LAUNCHER_TYPE) && e.bWorkshopVisible;
	}
	BHasMarketPresence(e) {
		return !(0, _.ID)(C.TS.LAUNCHER_TYPE) && e.bCommunityMarketPresence;
	}
}
(0, n.Cg)([m.oI], I.prototype, "AppDetailsChanged", null);
(0, n.Cg)([m.oI], I.prototype, "RequestAchievements", null);
(0, n.Cg)([m.oI], I.prototype, "RequestAssociationData", null);
(0, n.Cg)([m.oI], I.prototype, "RequestDescriptionsData", null);
(0, n.Cg)([a.XI.bound], I.prototype, "SetAjaxLibraryAppDetails", null);
(0, n.Cg)([m.oI], I.prototype, "GetAjaxLibraryAppDetails", null);
export const H = new I();
window.appDetailsStore = H;
