import n, { Cg } from "./34629.js";
import * as i from "./63696.js";
import a, { Gn } from "./89193.js";
import * as s from "./87935.js";
import * as o from "./96593.js";
import * as l from "./1252.js";
import * as c from "./12176.js";
import * as m from "./52451.js";
import * as u from "./96538.js";
import * as d from "./16053.js";
import * as A from "./83957.js";
import g, { EK } from "./51095.js";
import { CScheduledFunc } from "../../actual_src/utils/callbackutils";
import * as C from "./72476.js";
import { ID } from "./44846.js";
import { q3 } from "./90095.js";
const p = A;
export function T(e) {
	i.useEffect(
		() => (e ? H.RegisterForAppData(e, () => {}).unregister : () => {}),
		[e],
	);
	return q3(() => (e ? H.GetAppDetails(e) : null));
}
class y {
	constructor() {
		Gn(this);
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
Cg([a.sH], y.prototype, "details", undefined);
Cg([a.sH.ref], y.prototype, "associationData", undefined);
Cg([a.sH.ref], y.prototype, "appDetailsSpotlight", undefined);
Cg([a.sH.ref], y.prototype, "descriptionsData", undefined);
Cg([a.sH.ref], y.prototype, "customImageInfo", undefined);
const S = "associations";
const w = "descriptions";
const B = "achievements";
const v = "customimage";
class I {
	constructor() {
		Gn(this);
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
			strSnippet: EK(r.strSnippet),
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
		const e_logoPosition = e.logoPosition;
		const e_logoPosition_pinnedPosition = e_logoPosition.pinnedPosition;
		return (
			(e_logoPosition_pinnedPosition == "UpperLeft" ||
				e_logoPosition_pinnedPosition == "BottomLeft" ||
				e_logoPosition_pinnedPosition == "BottomLeft" ||
				e_logoPosition_pinnedPosition == "UpperCenter" ||
				e_logoPosition_pinnedPosition == "BottomLeft" ||
				e_logoPosition_pinnedPosition == "UpperCenter" ||
				e_logoPosition_pinnedPosition == "CenterCenter" ||
				e_logoPosition_pinnedPosition == "BottomLeft" ||
				e_logoPosition_pinnedPosition == "UpperCenter" ||
				e_logoPosition_pinnedPosition == "CenterCenter" ||
				e_logoPosition_pinnedPosition == "BottomCenter") &&
			!!e_logoPosition.nWidthPct &&
			!!e_logoPosition.nHeightPct &&
			!(e_logoPosition.nWidthPct < 0) &&
			!(e_logoPosition.nWidthPct > 100) &&
			!(e_logoPosition.nHeightPct < 0) &&
			!(e_logoPosition.nHeightPct > 100)
		);
	}
	async RequestCustomImageInfo(e) {
		const e_appid = e.appid;
		let r = this.GetAppData(e_appid);
		if (r.customImageInfo == null) {
			let n = await u.O.GetCachedDataForApp(e_appid, v, 1);
			if (n) {
				r.customImageInfo = n;
				r.customImageInfoRtime = e.rt_custom_image_mtime;
			}
		}
		const n = s.B7.BuildCustomAssetURL(
			e_appid,
			"",
			"json",
			e.rt_custom_image_mtime,
		);
		try {
			const i = await p.get(n, {
				withCredentials: false,
			});
			if (this.ValidateCustomImageInfo(i.data)) {
				const i_data = i.data;
				if (JSON.stringify(i_data) != JSON.stringify(r.customImageInfo)) {
					r.customImageInfo = i_data;
					u.O.SetCachedDataForApp(e_appid, v, 1, i_data);
				}
				r.customImageInfoRtime = e.rt_custom_image_mtime;
			} else {
				r.customImageInfo = undefined;
				r.customImageInfoRtime = e.rt_custom_image_mtime;
				u.O.SetCachedDataForApp(e_appid, v, 1, undefined);
			}
		} catch (n) {
			r.customImageInfo = undefined;
			r.customImageInfoRtime = e.rt_custom_image_mtime;
			u.O.SetCachedDataForApp(e_appid, v, 1, undefined);
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
		let { appid, rt_store_asset_mtime } = e;

		let n = o.tw.GetCustomHeroImageURLs(e);
		let i = this.GetHeroImagesForAppId(
			appid,
			e.local_cache_version,
			rt_store_asset_mtime,
		);
		let a =
			e.optional_parent_app_id &&
			this.GetHeroImagesForAppId(
				e.optional_parent_app_id,
				e.local_cache_version,
				e.rt_store_asset_mtime,
			);
		if ((!i.bHasHeroImage || i.rgHeroImages.length == 0) && !!a) {
			appid = e.optional_parent_app_id;
			i = a;
		}
		return {
			rgHeroImages: [...n, ...i.rgHeroImages],
			bHasHeroImage: i.bHasHeroImage,
			appid: appid,
		};
	}
	GetHeroImagesForAppId(e, t, r) {
		let n = [];
		let i = false;
		const a = this.GetAppDetails(e);
		if (a) {
			const a_libraryAssets = a.libraryAssets;
			if (a_libraryAssets && a_libraryAssets.strHeroImage) {
				i = true;
				n.push(
					s.B7.BuildCachedLibraryAssetURL(e, a_libraryAssets.strHeroImage, t),
				);
				n.push(s.B7.BuildLegacyCachedLibraryAssetURL(e, "library_hero.jpg", t));
				n.push(s.B7.BuildLibraryAssetURL(e, a_libraryAssets.strHeroImage, r));
			}
		}
		return {
			rgHeroImages: n,
			bHasHeroImage: i,
		};
	}
	GetHeroBlurImages(e) {
		let t = Array(o.tw.GetCustomHeroImageURLs(e).length).fill("");
		const e_rt_store_asset_mtime = e.rt_store_asset_mtime;
		const n = this.GetHeroImages(e);
		t.push(
			...this.GetHeroBlurImagesForAppId(
				n.appid,
				e.local_cache_version,
				e_rt_store_asset_mtime,
			),
		);
		return t;
	}
	GetHeroBlurImagesForAppId(e, t, r) {
		let n = [];
		const i = this.GetAppDetails(e);
		if (i) {
			const i_libraryAssets = i.libraryAssets;
			if (i_libraryAssets && i_libraryAssets.strHeroBlurImage) {
				n.push(
					s.B7.BuildCachedLibraryAssetURL(
						e,
						i_libraryAssets.strHeroBlurImage,
						t,
					),
				);
				n.push(
					s.B7.BuildLegacyCachedLibraryAssetURL(e, "library_hero_blur.jpg", t),
				);
				n.push(
					s.B7.BuildLibraryAssetURL(e, i_libraryAssets.strHeroBlurImage, r),
				);
			}
		}
		return n;
	}
	GetLogoImages(e) {
		const { appid, rt_store_asset_mtime } = e;

		let { rgLogoImages, logoPosition } = this.GetLogoImagesForAppId(
			appid,
			e.local_cache_version,
			rt_store_asset_mtime,
		);
		let a = o.tw.GetCustomLogoImageURLs(e);
		let s =
			e.optional_parent_app_id &&
			this.GetLogoImagesForAppId(
				e.optional_parent_app_id,
				e.local_cache_version,
				e.rt_store_asset_mtime,
			);
		if (rgLogoImages.length == 0 && s) {
			rgLogoImages = s.rgLogoImages;
		}
		if (!logoPosition && s) {
			logoPosition = s.logoPosition;
		}
		return {
			rgLogoImages: [...a, ...rgLogoImages],
			logoPosition: logoPosition,
		};
	}
	GetLogoImagesForAppId(e, t, r) {
		let n = [];
		let i = null;
		const a = this.GetAppDetails(e);
		if (a && a.libraryAssets && a.libraryAssets.strLogoImage) {
			const a_libraryAssets = a.libraryAssets;
			i = a_libraryAssets.logoPosition;
			n.push(
				s.B7.BuildCachedLibraryAssetURL(e, a_libraryAssets.strLogoImage, t),
			);
			n.push(s.B7.BuildLegacyCachedLibraryAssetURL(e, "logo.png", t));
			n.push(s.B7.BuildLibraryAssetURL(e, a_libraryAssets.strLogoImage, r));
		}
		return {
			rgLogoImages: n,
			logoPosition: i,
		};
	}
	GetHeaderImages(e) {
		let { appid, rt_store_asset_mtime } = e;

		let n = o.tw.GetCustomLandcapeImageURLs(e);
		let i = this.GetHeaderImagesForAppId(
			appid,
			e.local_cache_version,
			rt_store_asset_mtime,
		);
		if (i.length == 0) {
			const r = e.header_filename ? e.header_filename : "header.jpg";
			i.push(
				s.B7.BuildCachedLibraryAssetURL(appid, r, e.local_cache_version ?? 0),
			);
			i.push(
				s.B7.BuildLegacyCachedLibraryAssetURL(
					appid,
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
			const i_libraryAssets = i.libraryAssets;
			n.push(
				s.B7.BuildCachedLibraryAssetURL(e, i_libraryAssets.strHeaderImage, t),
			);
			n.push(s.B7.BuildLegacyCachedLibraryAssetURL(e, "header.jpg", t));
			n.push(s.B7.BuildLibraryAssetURL(e, i_libraryAssets.strHeaderImage, r));
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
			r = new CScheduledFunc();
			this.m_mapRecentlyLaunchedApps.set(e, r);
		}
		r.Schedule(t, () => this.m_mapRecentlyLaunchedApps.delete(e));
	}
	BIsWorkshopVisible(e) {
		return !ID(C.TS.LAUNCHER_TYPE) && e.bWorkshopVisible;
	}
	BHasMarketPresence(e) {
		return !ID(C.TS.LAUNCHER_TYPE) && e.bCommunityMarketPresence;
	}
}
Cg([m.oI], I.prototype, "AppDetailsChanged", null);
Cg([m.oI], I.prototype, "RequestAchievements", null);
Cg([m.oI], I.prototype, "RequestAssociationData", null);
Cg([m.oI], I.prototype, "RequestDescriptionsData", null);
Cg([a.XI.bound], I.prototype, "SetAjaxLibraryAppDetails", null);
Cg([m.oI], I.prototype, "GetAjaxLibraryAppDetails", null);
export const H = new I();
window.appDetailsStore = H;
