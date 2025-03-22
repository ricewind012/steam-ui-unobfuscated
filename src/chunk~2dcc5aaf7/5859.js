var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require("./31222.js");
var o = require("./65850.js");
var l = require("./80222.js");
var c = require(/*webcrack:missing*/ "./49455.js");
var m = require("./16154.js");
var u = require(/*webcrack:missing*/ "./72476.js");
var d = require("./85606.js");
var _A = require("./58839.js");
var p = require(/*webcrack:missing*/ "./46108.js");
var g = require(/*webcrack:missing*/ "./11010.js");
function h(e) {
	return (function (e, t, r, n) {
		switch (e) {
			case "date_full":
				return (0, p.$z)(t);
			case "date_month":
				return (0, g.sq)(new Date(t * 1000));
			case "date_quarter":
				return (0, g.u6)(new Date(t * 1000), n);
			case "date_year":
				return (0, g.vl)(new Date(t * 1000));
			case "text_comingsoon":
				return r || (0, p.we)("#Store_ComingSoon_ComingSoon");
			case "text_tba":
				return r || (0, p.we)("#Store_ComingSoon_TBA");
			default:
				return "";
		}
	})(
		e.coming_soon_display,
		e.steam_release_date,
		e.custom_release_date_message,
	);
}
class C {
	m_eItemType;
	m_unID;
	m_bVisible = false;
	m_strName;
	m_strStoreURLPath;
	m_unAppID;
	m_eAppType;
	m_rgIncludedAppTypes;
	m_rgIncludedAppIDs;
	m_bIsFree;
	m_bIsFreeTemporary;
	m_bIsComingSoon;
	m_bIsEarlyAccess;
	m_RelatedItems;
	m_ContentDescriptorIDs;
	m_StoreCategories;
	m_ReviewInfo;
	m_BasicInfo;
	m_rgStoreTags = [];
	m_rgStoreTagIDs = [];
	m_Assets;
	m_AssetsWithoutOverrides;
	m_ReleaseInfo;
	m_Platforms;
	m_BestPurchaseOption;
	m_SelfPurchaseOption;
	m_rgPurchaseOptions;
	m_Screenshots;
	m_Trailers;
	m_rgSupportedLanguages;
	m_strStoreURLPathOverride;
	m_freeWeekend;
	m_DataRequested = {
		include_tag_count: 0,
	};
	m_strInternalName;
	m_rgLinks;
	constructor(e, t) {
		this.m_eItemType = e.item_type();
		this.m_unID = e.id();
		this.m_bVisible = !!e.visible();
		this.m_strName = e.name();
		this.m_strStoreURLPath = e.store_url_path();
		this.m_unAppID = e.appid();
		this.m_eAppType = e.type();
		this.m_rgIncludedAppTypes = e.included_types();
		this.m_rgIncludedAppIDs = e.included_appids();
		this.m_bIsFree = !!e.is_free();
		this.m_bIsFreeTemporary = !!e.is_free_temporarily();
		this.m_bIsComingSoon = !!e.is_coming_soon();
		this.m_bIsEarlyAccess = !!e.is_early_access();
		this.m_RelatedItems = e.related_items()?.toObject();
		this.m_ContentDescriptorIDs = e.content_descriptorids();
		this.m_StoreCategories = e.categories().toObject();
		this.m_BestPurchaseOption = e.best_purchase_option()?.toObject();
		this.m_strStoreURLPathOverride = e.store_url_path_override();
		this.m_freeWeekend = e.free_weekend()?.toObject();
		this.m_strInternalName = e.internal_name();
		if (this.m_eItemType == 1 || this.m_eItemType == 2) {
			this.m_SelfPurchaseOption = e.self_purchase_option(false)
				? e.self_purchase_option().toObject()
				: this.m_BestPurchaseOption;
		}
		this.MergeData(e, t);
	}
	MergeData(e, t) {
		if (t.include_assets && !this.m_Assets) {
			this.m_Assets = new f(e.assets(), e.id());
			this.m_DataRequested.include_assets = true;
		}
		if (t.include_assets_without_overrides && !this.m_AssetsWithoutOverrides) {
			this.m_AssetsWithoutOverrides = new f(
				e.assets_without_overrides(),
				e.id(),
			);
			this.m_DataRequested.include_assets_without_overrides = true;
		}
		if (t.include_release && !this.m_ReleaseInfo) {
			this.m_ReleaseInfo = e.release().toObject();
			this.m_DataRequested.include_release = true;
		}
		if (t.include_platforms && !this.m_Platforms) {
			this.m_Platforms = e.platforms().toObject();
			this.m_DataRequested.include_platforms = true;
		}
		if (t.include_all_purchase_options && !this.m_rgPurchaseOptions) {
			this.m_rgPurchaseOptions = e.purchase_options().map((e) => e.toObject());
			this.m_DataRequested.include_all_purchase_options = true;
		}
		if (t.include_screenshots && !this.m_Screenshots) {
			this.m_Screenshots = new S(e.screenshots());
			this.m_DataRequested.include_screenshots = true;
		}
		if (t.include_trailers && !this.m_Trailers) {
			this.m_Trailers = new b(e.trailers());
			this.m_DataRequested.include_trailers = true;
		}
		if (
			t.include_tag_count &&
			t.include_tag_count > this.m_rgStoreTags.length &&
			this.m_DataRequested.include_tag_count < t.include_tag_count
		) {
			this.m_rgStoreTags = e.tags().map((e) => e.toObject());
			this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid);
			this.m_DataRequested.include_tag_count = Math.max(
				t.include_tag_count,
				this.m_rgStoreTags.length || 0,
			);
		}
		if (t.include_reviews && !this.m_ReviewInfo) {
			this.m_ReviewInfo = e.reviews().toObject();
			this.m_DataRequested.include_reviews = true;
		}
		if (t.include_basic_info && !this.m_BasicInfo) {
			this.m_BasicInfo = e.basic_info().toObject();
			this.m_DataRequested.include_basic_info = true;
		}
		if (t.include_supported_languages && !this.m_rgSupportedLanguages) {
			this.m_rgSupportedLanguages = e
				.supported_languages()
				.map((e) => e.toObject());
			this.m_DataRequested.include_supported_languages = true;
		}
		if (t.include_links && !this.m_rgLinks) {
			this.m_rgLinks = e.links().map((e) => e.toObject());
			this.m_DataRequested.include_links = true;
		}
	}
	static BDataRequestContainsOtherDataRequest(e, t) {
		return Boolean(
			(!t.include_assets || e.include_assets) &&
				(!t.include_assets_without_overrides ||
					e.include_assets_without_overrides) &&
				(!t.include_release || e.include_release) &&
				(!t.include_platforms || e.include_platforms) &&
				(!t.include_all_purchase_options || e.include_all_purchase_options) &&
				(!t.include_screenshots || e.include_screenshots) &&
				(!t.include_trailers || e.include_trailers) &&
				(!t.include_ratings || e.include_ratings) &&
				(!t.include_tag_count ||
					(e.include_tag_count || 0) >= t.include_tag_count) &&
				(!t.include_reviews || e.include_reviews) &&
				(!t.include_basic_info || e.include_basic_info) &&
				(!t.include_supported_languages || e.include_supported_languages) &&
				(!t.include_links || e.include_links),
		);
	}
	BContainDataRequest(e) {
		return C.BDataRequestContainsOtherDataRequest(this.m_DataRequested, e);
	}
	BCheckDataRequestIncluded(e) {
		if (u.TS.WEB_UNIVERSE == "dev" || u.TS.WEB_UNIVERSE == "beta") {
			(0, c.w)(
				this.BContainDataRequest(e),
				`Requested data without for ${(0, _A.Rz)(this.m_eItemType)} @ ${this.m_unID}`,
				e,
				this.m_DataRequested,
			);
		}
	}
	GetStoreItemType() {
		return this.m_eItemType;
	}
	GetID() {
		return this.m_unID;
	}
	GetUniqueID() {
		return this.m_eItemType + "_" + this.m_unID;
	}
	BIsVisible() {
		return this.m_bVisible;
	}
	GetName() {
		return this.m_strName;
	}
	GetStorePageURL(e = false) {
		if (e && this.HasDemoStandaloneStorePage()) {
			return (
				u.TS.STORE_BASE_URL +
				"app/" +
				this.GetDemoStandaloneStorePageAppIDs()[0]
			);
		} else {
			return u.TS.STORE_BASE_URL + this.m_strStoreURLPath;
		}
	}
	GetStorePageURLWithOverride() {
		if (
			this.m_strStoreURLPathOverride &&
			this.m_strStoreURLPathOverride.length > 0
		) {
			return this.GetStorePageURLOverride();
		} else {
			return this.GetStorePageURL();
		}
	}
	GetStorePageURLOverride() {
		return this.m_strStoreURLPathOverride;
	}
	GetCommunityPageURL() {
		if (this.GetAppID()) {
			return u.TS.COMMUNITY_BASE_URL + "app/" + this.GetAppID();
		} else {
			return null;
		}
	}
	GetCommunityDiscussionForumsURL() {
		if (this.GetAppID()) {
			return (
				u.TS.COMMUNITY_BASE_URL + "app/" + this.GetAppID() + "/discussions/"
			);
		} else {
			return null;
		}
	}
	GetAppID() {
		return this.m_unAppID;
	}
	GetAppIDToRun() {
		const e = this.GetParentAppID();
		if (e && this.m_eAppType != 11) {
			return e;
		} else {
			return this.GetAppID();
		}
	}
	GetAppType() {
		return this.m_eAppType;
	}
	BIsApplicationOrTool() {
		return this.GetAppType() == 6 || this.GetAppType() == 13;
	}
	k_regexSalePage =
		/^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
	BIsSalePage() {
		return (
			this.GetStoreItemType() === 0 &&
			this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
		);
	}
	GetSalePageVanityURL() {
		let e = this.GetStorePageURLWithOverride();
		if (this.GetStoreItemType() === 0) {
			e = this.GetStorePageURLWithOverride().replace(this.k_regexSalePage, "");
			if (e.endsWith("/")) {
				e = e.replace("/", "");
			}
		}
		return e;
	}
	GetIncludedAppTypes() {
		return this.m_rgIncludedAppTypes;
	}
	GetIncludedAppIDs() {
		return this.m_rgIncludedAppIDs;
	}
	GetIncludedAppIDsOrSelf() {
		if (this.GetStoreItemType() == 0) {
			return [this.GetID()];
		} else {
			return this.GetIncludedAppIDs();
		}
	}
	BIsFree() {
		return this.m_bIsFree;
	}
	BIsFreeTemporary() {
		return this.m_bIsFreeTemporary;
	}
	BIsFreeWeekend() {
		const e = Date.now() / 1000;
		return (
			Boolean(this.m_freeWeekend) &&
			this.m_freeWeekend.start_time <= e &&
			e <= this.m_freeWeekend.end_time
		);
	}
	GetFreeWeekendEnd() {
		return this.m_freeWeekend?.end_time;
	}
	GetFreeWeekendPlayTextOverride() {
		return this.m_freeWeekend?.text;
	}
	BIsEarlyAccess() {
		return this.m_bIsEarlyAccess;
	}
	GetParentAppID() {
		return this.m_RelatedItems?.parent_appid;
	}
	BHasDemo() {
		return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
	}
	GetDemoAppIDs() {
		return this.m_RelatedItems?.demo_appid ?? [];
	}
	HasDemoStandaloneStorePage() {
		return (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0;
	}
	GetDemoStandaloneStorePageAppIDs() {
		return this.m_RelatedItems?.standalone_demo_appid ?? [];
	}
	GetContentDescriptorIDs() {
		return this.m_ContentDescriptorIDs;
	}
	HasContentDescriptorID(e) {
		return this.m_ContentDescriptorIDs?.includes(e);
	}
	GetStoreCategories_SupportedPlayers() {
		return this.m_StoreCategories?.supported_player_categoryids || [];
	}
	GetStoreCategories_Features() {
		return this.m_StoreCategories?.feature_categoryids || [];
	}
	GetStoreCategories_Controller() {
		return this.m_StoreCategories?.controller_categoryids || [];
	}
	BHasStoreCategory(e) {
		return Boolean(
			this.GetStoreCategories_SupportedPlayers().find((t) => e === t) ||
				this.GetStoreCategories_Features().find((t) => e === t) ||
				this.GetStoreCategories_Controller().find((t) => e === t),
		);
	}
	GetFilteredReviewSummary() {
		this.BCheckDataRequestIncluded({
			include_reviews: true,
		});
		return this.m_ReviewInfo?.summary_filtered;
	}
	GetUnfilteredReviewSummary() {
		this.BCheckDataRequestIncluded({
			include_reviews: true,
		});
		return (
			this.m_ReviewInfo?.summary_unfiltered ||
			this.m_ReviewInfo?.summary_filtered
		);
	}
	GetShortDescription() {
		this.BCheckDataRequestIncluded({
			include_basic_info: true,
		});
		return this.m_BasicInfo?.short_description ?? "";
	}
	GetDeveloperNames() {
		this.BCheckDataRequestIncluded({
			include_basic_info: true,
		});
		return (
			this.m_BasicInfo?.developers
				?.map((e) => e.name.trim())
				?.filter((e) => e?.length > 0) ?? []
		);
	}
	GetFranchiseNames() {
		this.BCheckDataRequestIncluded({
			include_basic_info: true,
		});
		return (
			this.m_BasicInfo?.franchises
				?.map((e) => e.name.trim())
				?.filter((e) => e?.length > 0) ?? []
		);
	}
	GetPublisherNames() {
		this.BCheckDataRequestIncluded({
			include_basic_info: true,
		});
		const e =
			this.m_BasicInfo?.publishers
				?.map((e) => e.name.trim())
				?.filter((e) => e?.length > 0) ?? [];
		if (e?.length > 0) {
			return e;
		} else {
			return this.GetDeveloperNames();
		}
	}
	GetAllCreatorClanIDs() {
		this.BCheckDataRequestIncluded({
			include_basic_info: true,
		});
		if (this.m_BasicInfo) {
			return _([
				...this.m_BasicInfo.developers,
				...this.m_BasicInfo.publishers,
				...this.m_BasicInfo.franchises,
			]);
		} else {
			return [];
		}
	}
	GetAllPublisherCreatorClans() {
		this.BCheckDataRequestIncluded({
			include_basic_info: true,
		});
		if (this.m_BasicInfo) {
			return _(this.m_BasicInfo.publishers);
		} else {
			return [];
		}
	}
	GetAllDeveloperCreatorClans() {
		this.BCheckDataRequestIncluded({
			include_basic_info: true,
		});
		if (this.m_BasicInfo) {
			return _(this.m_BasicInfo.developers);
		} else {
			return [];
		}
	}
	GetAllFranchiseCreatorClans() {
		this.BCheckDataRequestIncluded({
			include_basic_info: true,
		});
		if (this.m_BasicInfo) {
			return _(this.m_BasicInfo.franchises);
		} else {
			return [];
		}
	}
	GetCapsuleHeadline() {
		this.BCheckDataRequestIncluded({
			include_basic_info: true,
		});
		return this.m_BasicInfo?.capsule_headline;
	}
	GetTags() {
		this.BCheckDataRequestIncluded({
			include_tag_count: 1,
		});
		return this.m_rgStoreTags;
	}
	GetTagIDs() {
		this.BCheckDataRequestIncluded({
			include_tag_count: 1,
		});
		return this.m_rgStoreTagIDs;
	}
	BHasTags() {
		this.BCheckDataRequestIncluded({
			include_tag_count: 1,
		});
		return this.m_rgStoreTagIDs?.length > 0;
	}
	GetAssets() {
		this.BCheckDataRequestIncluded({
			include_assets: true,
		});
		return this.m_Assets;
	}
	GetAssetsWithoutOverrides() {
		this.BCheckDataRequestIncluded({
			include_assets_without_overrides: true,
		});
		return this.m_AssetsWithoutOverrides;
	}
	GetOriginalReleaseDateRTime() {
		this.BCheckDataRequestIncluded({
			include_release: true,
		});
		let e = this.m_ReleaseInfo?.original_steam_release_date;
		e ||= this.GetReleaseDateRTime();
		return e;
	}
	GetReleaseDateRTime(e = false) {
		this.BCheckDataRequestIncluded({
			include_release: true,
		});
		if (this.m_ReleaseInfo?.is_coming_soon && !e) {
			return 0;
		}
		let t = this.m_ReleaseInfo?.steam_release_date;
		t ||= this.m_ReleaseInfo?.original_release_date;
		return t;
	}
	GetFormattedSteamReleaseDate() {
		this.BCheckDataRequestIncluded({
			include_release: true,
		});
		if (this.m_ReleaseInfo?.is_coming_soon) {
			if (this.m_ReleaseInfo?.coming_soon_display) {
				return h(this.m_ReleaseInfo);
			}
			if (this.m_ReleaseInfo?.custom_release_date_message) {
				return this.m_ReleaseInfo.custom_release_date_message;
			}
			const e = this.m_ReleaseInfo?.steam_release_date;
			if (e) {
				if (this.m_ReleaseInfo?.is_abridged_release_date) {
					return (0, g.sq)(new Date(e * 1000));
				} else {
					return (0, p.$z)(e);
				}
			} else {
				return "";
			}
		}
		const e = this.GetReleaseDateRTime();
		if (e) {
			return (0, p.$z)(e);
		} else {
			return "";
		}
	}
	BIsComingSoon() {
		return this.m_bIsComingSoon;
	}
	BIsCustomComingSoonDisplay() {
		this.BCheckDataRequestIncluded({
			include_release: true,
		});
		return (
			!!this.BIsComingSoon() &&
			(this.m_ReleaseInfo?.coming_soon_display
				? ["text_tba", "text_comingsoon"].includes(
						this.m_ReleaseInfo.coming_soon_display,
					)
				: !!this.m_ReleaseInfo?.custom_release_date_message)
		);
	}
	BIsPrePurchase() {
		return (
			this.BIsComingSoon() && Boolean(this.GetBestPurchaseOption()?.packageid)
		);
	}
	BIsReleased() {
		return !this.BIsComingSoon();
	}
	GetPlatforms() {
		this.BCheckDataRequestIncluded({
			include_platforms: true,
		});
		return this.m_Platforms;
	}
	GetBestPurchaseOption() {
		return this.m_BestPurchaseOption;
	}
	GetBestPurchasePriceInCents() {
		if (this.m_BestPurchaseOption?.final_price_in_cents) {
			return Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents);
		}
	}
	GetBestPurchasePriceFormatted() {
		return this.m_BestPurchaseOption?.formatted_final_price;
	}
	GetBestPurchaseOriginalPriceInCents() {
		if (this.m_BestPurchaseOption?.original_price_in_cents) {
			return Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents);
		} else {
			return this.GetBestPurchasePriceInCents();
		}
	}
	GetBestPurchaseOriginalPriceFormatted() {
		return (
			this.m_BestPurchaseOption?.formatted_original_price ??
			this.m_BestPurchaseOption?.formatted_final_price
		);
	}
	GetAllPurchaseOptions() {
		this.BCheckDataRequestIncluded({
			include_all_purchase_options: true,
		});
		return this.m_rgPurchaseOptions;
	}
	GetSelfPurchaseOption() {
		return this.m_SelfPurchaseOption;
	}
	BHasAgeSafeScreenshots() {
		return this.GetOnlyAllAgesSafeScreenshots().length > 0;
	}
	GetOnlyAllAgesSafeScreenshots() {
		this.BCheckDataRequestIncluded({
			include_screenshots: true,
		});
		return this.m_Screenshots?.GetOnlyAllAgesScreenshots() || [];
	}
	GetBothAllAgesSafeAndMatureScreenshots() {
		this.BCheckDataRequestIncluded({
			include_screenshots: true,
		});
		return this.m_Screenshots?.GetAllAgesAndMatureScreenshots() || [];
	}
	BHasTrailers() {
		this.BCheckDataRequestIncluded({
			include_trailers: true,
		});
		return this.m_Trailers?.BHasTrailers();
	}
	BHasHighlightTrailers() {
		this.BCheckDataRequestIncluded({
			include_trailers: true,
		});
		return (this.m_Trailers?.GetHighlightTrailers()?.length ?? 0) > 0;
	}
	GetAllTrailers() {
		this.BCheckDataRequestIncluded({
			include_trailers: true,
		});
		return this.m_Trailers;
	}
	BHasSomeLanguageSupport(e) {
		this.BCheckDataRequestIncluded({
			include_supported_languages: true,
		});
		return (
			this.m_rgSupportedLanguages?.some(
				(t) => t.elanguage == e && (t.supported || t.subtitles || t.full_audio),
			) || false
		);
	}
	GetAllLanguagesWithSomeSupport() {
		this.BCheckDataRequestIncluded({
			include_supported_languages: true,
		});
		return (
			this.m_rgSupportedLanguages
				?.filter((e) => e.supported || e.subtitles || e.full_audio)
				.map((e) => e.elanguage) || []
		);
	}
	GetDataRequest() {
		return this.m_DataRequested;
	}
	GetMicroTrailer() {
		this.BCheckDataRequestIncluded({
			include_trailers: true,
		});
		let e = null;
		if (this.m_Trailers) {
			this.m_Trailers.GetHighlightTrailers().forEach((t) => {
				if (!e && t.GetMicroTrailer()) {
					e = t.GetMicroTrailer();
				}
			});
			if (!e) {
				this.m_Trailers.GetOtherTrailers().forEach((t) => {
					if (!e && t.GetMicroTrailer()) {
						e = t.GetMicroTrailer();
					}
				});
			}
		}
		return e;
	}
	GetLinks() {
		this.BCheckDataRequestIncluded({
			include_links: true,
		});
		return this.m_rgLinks;
	}
	ReplaceBestPurchaseOption(e) {
		this.m_BestPurchaseOption = e;
	}
	GetInternalName() {
		return this.m_strInternalName;
	}
}
function _(e) {
	if (!e?.length) {
		return [];
	}
	const t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
	return Array.from(new Set(t));
}
class f {
	m_strMainCapsuleURL;
	m_strSmallCapsuleURL;
	m_strHeaderURL;
	m_strPackageHeaderURL;
	m_strPageBackgroundURL;
	m_strHeroCapsuleURL;
	m_strHeroCapsuleURL_2x;
	m_strLibraryCapsuleURL;
	m_strLibraryCapsuleURL_2x;
	m_strLibraryHeroURL;
	m_strLibraryHeroURL_2x;
	m_strCommunityIcon;
	m_strCommunityIcon_Full;
	constructor(e, t) {
		const r = e.asset_url_format();
		if (r) {
			if (e.main_capsule()) {
				this.m_strMainCapsuleURL = this.ConstructAssetURL(r, e.main_capsule());
			}
			if (e.small_capsule()) {
				this.m_strSmallCapsuleURL = this.ConstructAssetURL(
					r,
					e.small_capsule(),
				);
			}
			if (e.header()) {
				this.m_strHeaderURL = this.ConstructAssetURL(r, e.header());
			}
			if (e.package_header()) {
				this.m_strPackageHeaderURL = this.ConstructAssetURL(
					r,
					e.package_header(),
				);
			}
			if (e.page_background()) {
				this.m_strPageBackgroundURL = this.ConstructAssetURL(
					r,
					e.page_background(),
				);
			}
			if (e.hero_capsule()) {
				this.m_strHeroCapsuleURL = this.ConstructAssetURL(r, e.hero_capsule());
			}
			if (e.hero_capsule_2x()) {
				this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
					r,
					e.hero_capsule_2x(),
				);
			}
			if (e.library_capsule()) {
				this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
					r,
					e.library_capsule(),
				);
			}
			if (e.library_capsule_2x()) {
				this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
					r,
					e.library_capsule_2x(),
				);
			}
			if (e.library_hero()) {
				this.m_strLibraryHeroURL = this.ConstructAssetURL(r, e.library_hero());
			}
			if (e.library_hero_2x()) {
				this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
					r,
					e.library_hero_2x(),
				);
			}
		}
		if (e.community_icon()) {
			this.m_strCommunityIcon = `${u.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}.jpg`;
			this.m_strCommunityIcon_Full = `${u.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}_full.jpg`;
		}
	}
	GetMainCapsuleURL() {
		return this.m_strMainCapsuleURL;
	}
	GetSmallCapsuleURL() {
		return this.m_strSmallCapsuleURL;
	}
	GetHeaderURL() {
		return this.m_strHeaderURL;
	}
	GetPackageHeaderURL() {
		return this.m_strPackageHeaderURL;
	}
	GetPageBackgroundURL() {
		return this.m_strPageBackgroundURL;
	}
	GetHeroCapsuleURL() {
		return this.m_strHeroCapsuleURL;
	}
	GetHeroCapsuleURL_2x() {
		return this.m_strHeroCapsuleURL_2x;
	}
	GetLibraryCapsuleURL() {
		return this.m_strLibraryCapsuleURL;
	}
	GetLibraryCapsuleURL_2x() {
		return this.m_strLibraryCapsuleURL_2x;
	}
	GetLibraryHeroURL() {
		return this.m_strLibraryHeroURL;
	}
	GetLibraryHeroURL_2x() {
		return this.m_strLibraryHeroURL_2x;
	}
	ConstructAssetURL(e, t) {
		return (
			u.TS.BASE_URL_SHARED_CDN +
			"/store_item_assets/" +
			e.replace("${FILENAME}", t)
		);
	}
	GetCommunityIconURL() {
		return this.m_strCommunityIcon;
	}
	GetCommunityIconURL_Full() {
		return this.m_strCommunityIcon_Full;
	}
}
class b {
	m_mapTrailer = new Map();
	m_higherTrailers = new Array();
	m_otherTrailers = new Array();
	constructor(e) {
		if (e.highlights()) {
			e.highlights().forEach((e) => {
				let t = new y(e);
				this.m_mapTrailer.set(t.GetTrailerID(), t);
				this.m_higherTrailers.push(t);
			});
		}
		if (e.other_trailers()) {
			e.other_trailers().forEach((e) => {
				let t = new y(e);
				this.m_mapTrailer.set(t.GetTrailerID(), t);
				this.m_otherTrailers.push(t);
			});
		}
	}
	BHasTrailers() {
		return this.m_higherTrailers.length > 0 || this.m_otherTrailers.length > 0;
	}
	GetHighlightTrailers() {
		return this.m_higherTrailers;
	}
	GetOtherTrailers() {
		return this.m_otherTrailers;
	}
	GetTrailerByID(e) {
		return this.m_mapTrailer.get(e);
	}
}
class y {
	m_strTrailerName;
	m_eTrailerCategory;
	m_nBaseID;
	m_Trailer480p;
	m_TrailerMax;
	m_MicroTrailer;
	m_strScreenshotMedium;
	m_strScreenshotFull;
	constructor(e) {
		this.m_strTrailerName = e.trailer_name();
		this.m_nBaseID = e.trailer_base_id();
		this.m_eTrailerCategory = e.trailer_category();
		const t = e.trailer_url_format();
		if (t) {
			if (e.trailer_480p()) {
				this.m_Trailer480p = this.ExtractTrailerFormats(t, e.trailer_480p());
			}
			if (e.trailer_max()) {
				this.m_TrailerMax = this.ExtractTrailerFormats(t, e.trailer_max());
			}
			if (e.microtrailer()) {
				this.m_MicroTrailer = this.ExtractTrailerFormats(t, e.microtrailer());
			}
			if (e.screenshot_medium()) {
				this.m_strScreenshotMedium = this.ConstructScreenshotURL(
					t,
					e.screenshot_medium(),
				);
			}
			if (e.screenshot_full()) {
				this.m_strScreenshotFull = this.ConstructScreenshotURL(
					t,
					e.screenshot_full(),
				);
			}
		}
	}
	GetName() {
		return this.m_strTrailerName;
	}
	GetTrailerID() {
		return this.m_nBaseID;
	}
	GetTrailerCategory() {
		return this.m_eTrailerCategory;
	}
	GetTrailer480p() {
		return this.m_Trailer480p;
	}
	GetTrailerMax() {
		return this.m_TrailerMax;
	}
	GetMicroTrailer() {
		return this.m_MicroTrailer;
	}
	GetScreenshot() {
		if (this.m_strScreenshotFull) {
			return this.m_strScreenshotFull;
		} else {
			return this.m_strScreenshotMedium;
		}
	}
	ExtractTrailerFormats(e, t) {
		let r = {};
		t.forEach((t) => {
			if (t.type() == "video/mp4") {
				r.strMP4URL = this.ConstructAssetURL(e, t.filename());
			} else if (t.type() == "video/webm") {
				r.strWebMURL = this.ConstructAssetURL(e, t.filename());
			}
		});
		return r;
	}
	ConstructScreenshotURL(e, t) {
		return (
			u.TS.BASE_URL_SHARED_CDN +
			"/store_item_assets/" +
			e.replace("${FILENAME}", t)
		);
	}
	ConstructAssetURL(e, t) {
		return (
			u.TS.VIDEO_CDN_URL + "/store_trailers/" + e.replace("${FILENAME}", t)
		);
	}
}
class S {
	m_rgAllScreenshots = new Array();
	m_rgOnlyAllAgesScreenshots = new Array();
	constructor(e) {
		let t = 0;
		let r = 0;
		const n = e.all_ages_screenshots() || [];
		const i = e.mature_content_screenshots() || [];
		while (t < n.length || r < i.length) {
			let e = t < n.length;
			if (t < n.length && r < i.length) {
				e = n[t].ordinal() < i[r].ordinal();
			}
			if (e) {
				const e =
					u.TS.BASE_URL_SHARED_CDN + "/store_item_assets/" + n[t].filename();
				this.m_rgAllScreenshots.push(e);
				this.m_rgOnlyAllAgesScreenshots.push(e);
				t += 1;
			} else {
				const e =
					u.TS.BASE_URL_SHARED_CDN + "/store_item_assets/" + i[r].filename();
				this.m_rgAllScreenshots.push(e);
				r += 1;
			}
		}
	}
	GetAllAgesAndMatureScreenshots() {
		return this.m_rgAllScreenshots;
	}
	GetOnlyAllAgesScreenshots() {
		return this.m_rgOnlyAllAgesScreenshots;
	}
}
var w = require(/*webcrack:missing*/ "./93960.js");
function B(e, t) {
	if (!e) {
		return t;
	}
	if (!t) {
		return e;
	}
	return {
		include_assets: e.include_assets || t.include_assets,
		include_release: e.include_release || t.include_release,
		include_platforms: e.include_platforms || t.include_platforms,
		include_all_purchase_options:
			e.include_all_purchase_options || t.include_all_purchase_options,
		include_screenshots: e.include_screenshots || t.include_screenshots,
		include_trailers: e.include_trailers || t.include_trailers,
		include_ratings: e.include_ratings || t.include_ratings,
		include_tag_count:
			Math.max(e.include_tag_count || 0, t.include_tag_count || 0) || undefined,
		include_reviews: e.include_reviews || t.include_reviews,
		include_basic_info: e.include_basic_info || t.include_basic_info,
		include_supported_languages:
			e.include_supported_languages || t.include_supported_languages,
		include_full_description:
			e.include_full_description || t.include_full_description,
		include_included_items:
			e.include_included_items || t.include_included_items,
		include_assets_without_overrides:
			e.include_assets_without_overrides || t.include_assets_without_overrides,
		apply_user_filters: e.apply_user_filters || t.apply_user_filters,
		include_links: e.include_links || t.include_links,
	};
}
async function v(e, t) {
	const r = await e;
	const n = await t;
	if (r != 1) {
		return r;
	} else {
		return n;
	}
}
export class A {
	k_QueueWaitUntilRequestMS = 5;
	k_nMaxBatchSize = 250;
	m_bReturnUnavailableItems = false;
	m_mapApps = new Map();
	m_mapPackages = new Map();
	m_mapBundles = new Map();
	m_mapTags = new Map();
	m_mapCreators = new Map();
	m_mapHubCategories = new Map();
	m_setUnavailableApps = new Set();
	m_setUnavailablePackages = new Set();
	m_setUnavailableBundles = new Set();
	m_setUnavailableTags = new Set();
	m_setUnavailableCreators = new Set();
	m_setUnavailableHubCategories = new Set();
	m_setUnavailableDueToCountryRestrictionApps = new Set();
	m_setUnavailableDueToCountryRestrictionPackages = new Set();
	m_setUnavailableDueToCountryRestrictionBundles = new Set();
	m_mapAppsInFlight = new Map();
	m_mapPackageInFlight = new Map();
	m_mapBundleInFlight = new Map();
	m_mapTagsInFlight = new Map();
	m_mapCreatorsInFlight = new Map();
	m_mapHubCategoriesInFlight = new Map();
	m_serviceTransport;
	m_bUsePartnerAPI = false;
	m_bInitialized = false;
	m_bActivelyResettingCache = false;
	m_setPendingAppInfo = new Set();
	m_setPendingBundleInfo = new Set();
	m_setPendingPackageInfo = new Set();
	m_setPendingTagInfo = new Set();
	m_setPendingCreatorInfo = new Set();
	m_setPendingHubCategoryInfo = new Set();
	m_setPendingDataRequest = {};
	m_PendingInfoPromise;
	m_PendingInfoResolve = undefined;
	m_PendingTimer = undefined;
	k_AlreadyResolvedOK = Promise.resolve(1);
	k_AlreadyResolvedInvalid = Promise.resolve(8);
	k_AlreadyResolvedBusy = Promise.resolve(10);
	static sm_instance;
	static Get() {
		if (!A.sm_instance) {
			A.sm_instance = new A();
			window.StoreItemCache = A.sm_instance;
		}
		return A.sm_instance;
	}
	static Initialize(e, t) {
		const r = A.Get();
		(0, c.w)(
			!r.m_bInitialized,
			"CStoreItemCache was already initialized; initialize it only once.",
		);
		r.m_serviceTransport = e;
		r.m_bUsePartnerAPI = !!t;
		r.m_bInitialized = true;
		return () => {
			r.m_serviceTransport = undefined;
			r.m_bUsePartnerAPI = false;
			r.m_bInitialized = false;
		};
	}
	SetSteamInterface(e) {
		this.SetServiceTransport(e.GetServiceTransport());
	}
	SetServiceTransport(e) {
		this.m_serviceTransport = e;
	}
	SetReturnUnavailableItems(e) {
		this.m_bReturnUnavailableItems = e;
	}
	GetReturnUnavailableItems() {
		return this.m_bReturnUnavailableItems;
	}
	async ResetCache() {
		this.m_bActivelyResettingCache = true;
		this.FlushPendingInfo();
		let e = [];
		this.m_mapAppsInFlight.forEach((t) => {
			e.push(t.promise);
		});
		this.m_mapBundleInFlight.forEach((t) => {
			e.push(t.promise);
		});
		this.m_mapPackageInFlight.forEach((t) => {
			e.push(t.promise);
		});
		this.m_mapTagsInFlight.forEach((t) => {
			e.push(t.promise);
		});
		this.m_mapCreatorsInFlight.forEach((t) => {
			e.push(t.promise);
		});
		this.m_mapHubCategoriesInFlight.forEach((t) => {
			e.push(t.promise);
		});
		await Promise.all(e);
		this.m_mapApps.clear();
		this.m_mapBundles.clear();
		this.m_mapPackages.clear();
		this.m_mapTagsInFlight.clear();
		this.m_mapCreatorsInFlight.clear();
		this.m_mapHubCategoriesInFlight.clear();
		this.m_bActivelyResettingCache = false;
	}
	static BIsInitialized() {
		return A.Get().m_bInitialized;
	}
	static k_DataRequest_CommonOnly = {};
	static k_DataRequest_BasicInfo = {
		include_basic_info: true,
	};
	static k_DataRequest_Assets = {
		include_assets: true,
	};
	static k_DataRequest_IncludeAll = {
		include_assets: true,
		include_release: true,
		include_platforms: true,
		include_all_purchase_options: true,
		include_screenshots: true,
		include_trailers: true,
		include_ratings: true,
		include_tag_count: 20,
		include_reviews: true,
		include_basic_info: true,
		include_supported_languages: true,
		include_links: true,
	};
	async QueueAppRequest(e, t) {
		return this.QueueStoreItemRequest(e, 0, t);
	}
	async QueuePackageRequest(e, t) {
		return this.QueueStoreItemRequest(e, 1, t);
	}
	async QueueBundleRequest(e, t) {
		return this.QueueStoreItemRequest(e, 2, t);
	}
	async QueueTagRequest(e, t) {
		return this.QueueStoreItemRequest(e, 4, t);
	}
	async QueueCreatorRequest(e, t) {
		return this.QueueStoreItemRequest(e, 5, t);
	}
	async QueueHubCategoryRequest(e, t) {
		return this.QueueStoreItemRequest(e, 6, t);
	}
	static ValidateDataRequest(e) {
		const t = [
			e.include_assets,
			e.include_release,
			e.include_platforms,
			e.include_all_purchase_options,
			e.include_screenshots,
			e.include_trailers,
			e.include_ratings,
			e.include_reviews,
			e.include_basic_info,
			e.include_supported_languages,
			e.include_links,
		];
		for (const e of t) {
			if (e !== true && e !== undefined) {
				return false;
			}
		}
		return true;
	}
	async QueueMultipleAppRequests(e, t) {
		if (!e || e.length == 0) {
			return 1;
		}
		const r = (
			await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 0, t)))
		).filter((e) => e != 1);
		if (r.length > 0) {
			return r[0];
		} else {
			return 1;
		}
	}
	async QueueMultiplePackageRequests(e, t) {
		if (!e || e.length == 0) {
			return 1;
		}
		const r = (
			await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 1, t)))
		).filter((e) => e != 1);
		if (r.length > 0) {
			return r[0];
		} else {
			return 1;
		}
	}
	async QueueMultipleBundleRequests(e, t) {
		if (!e || e.length == 0) {
			return 1;
		}
		const r = (
			await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 2, t)))
		).filter((e) => e != 1);
		if (r.length > 0) {
			return r[0];
		} else {
			return 1;
		}
	}
	async QueueMultipleTagRequests(e, t) {
		if (!e || e.length == 0) {
			return 1;
		}
		const r = (
			await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 4, t)))
		).filter((e) => e != 1);
		if (r.length > 0) {
			return r[0];
		} else {
			return 1;
		}
	}
	async QueueMultipleCreatorRequests(e, t) {
		if (!e || e.length == 0) {
			return 1;
		}
		const r = (
			await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 5, t)))
		).filter((e) => e != 1);
		if (r.length > 0) {
			return r[0];
		} else {
			return 1;
		}
	}
	async QueueMultipleHubCategoryRequests(e, t) {
		if (!e || e.length == 0) {
			return 1;
		}
		const r = (
			await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 6, t)))
		).filter((e) => e != 1);
		if (r.length > 0) {
			return r[0];
		} else {
			return 1;
		}
	}
	async QueueMultipleStoreItemRequests(e, t, r) {
		if (!e || e.length == 0) {
			return 1;
		}
		const n = (
			await Promise.all(e.map((e, n) => this.QueueStoreItemRequest(e, t[n], r)))
		).filter((e) => e != 1);
		if (n.length > 0) {
			return n[0];
		} else {
			return 1;
		}
	}
	async QueueStoreItemRequest(e, t, r) {
		(0, c.w)(
			A.ValidateDataRequest(r),
			"Invalid Data Request: " + JSON.stringify(r),
		);
		if (typeof e == "string") {
			e = parseInt(e);
		}
		if (this.m_bActivelyResettingCache) {
			console.log(
				"Rejecting store item request due to currently clearing the cache",
			);
			return this.k_AlreadyResolvedBusy;
		}
		if (!e) {
			(0, c.w)(!e, `unexpected id ${e} of zero or undefined for type ${t}`);
			return this.k_AlreadyResolvedInvalid;
		}
		const n = this.GetPreviousSupersetLoadPromise(e, t, r);
		if (n) {
			return n;
		}
		if (!this.m_PendingInfoPromise) {
			this.m_PendingInfoPromise = new Promise(
				(e) => (this.m_PendingInfoResolve = e),
			);
			this.m_PendingTimer = window.setTimeout(
				() => this.FlushPendingInfo(),
				this.k_QueueWaitUntilRequestMS,
			);
		}
		this.m_setPendingDataRequest = B(this.m_setPendingDataRequest, r);
		switch (t) {
			case 0:
				this.m_setPendingAppInfo.add(e);
				break;
			case 2:
				this.m_setPendingBundleInfo.add(e);
				break;
			case 1:
				this.m_setPendingPackageInfo.add(e);
				break;
			case 4:
				this.m_setPendingTagInfo.add(e);
				break;
			case 5:
				this.m_setPendingCreatorInfo.add(e);
				break;
			case 6:
				this.m_setPendingHubCategoryInfo.add(e);
				break;
			default:
				(0, c.w)(false, `Unexpected Type ${t}`);
		}
		const i = this.m_PendingInfoPromise;
		if (
			this.m_setPendingAppInfo.size +
				this.m_setPendingPackageInfo.size +
				this.m_setPendingBundleInfo.size >=
			this.k_nMaxBatchSize
		) {
			if (this.m_PendingTimer) {
				window.clearTimeout(this.m_PendingTimer);
			}
			this.FlushPendingInfo();
		}
		return i;
	}
	async FlushPendingInfo() {
		if (this.m_PendingInfoResolve === undefined) {
			return;
		}
		const e = this.m_PendingInfoResolve;
		const t = Array.from(this.m_setPendingAppInfo);
		const r = Array.from(this.m_setPendingPackageInfo);
		const n = Array.from(this.m_setPendingBundleInfo);
		const i = Array.from(this.m_setPendingTagInfo);
		const a = Array.from(this.m_setPendingCreatorInfo);
		const s = Array.from(this.m_setPendingHubCategoryInfo);
		const o = this.m_setPendingDataRequest;
		this.m_PendingInfoPromise = undefined;
		this.m_PendingInfoResolve = undefined;
		this.m_setPendingAppInfo.clear();
		this.m_setPendingBundleInfo.clear();
		this.m_setPendingPackageInfo.clear();
		this.m_setPendingTagInfo.clear();
		this.m_setPendingCreatorInfo.clear();
		this.m_setPendingHubCategoryInfo.clear();
		this.m_setPendingDataRequest = {};
		this.m_PendingTimer = undefined;
		this.HintLoadStoreItems(t, r, n, i, a, s, o).then((t) => e(t));
	}
	async HintLoadStoreApps(e, t) {
		return this.HintLoadStoreItems(e, null, null, null, null, null, t);
	}
	async HintLoadStorePackages(e, t) {
		return this.HintLoadStoreItems(null, e, null, null, null, null, t);
	}
	async HintLoadStoreBundles(e, t) {
		return this.HintLoadStoreItems(null, null, e, null, null, null, t);
	}
	GetPreviousSupersetLoadPromise(e, t, r) {
		if (this.BHasStoreItem(e, t, r) || this.BIsStoreItemMissing(e, t)) {
			return this.k_AlreadyResolvedOK;
		}
		let n = null;
		switch (t) {
			case 0:
				n = this.m_mapAppsInFlight.get(e);
				break;
			case 1:
				n = this.m_mapPackageInFlight.get(e);
				break;
			case 2:
				n = this.m_mapBundleInFlight.get(e);
				break;
			case 4:
				n = this.m_mapTagsInFlight.get(e);
				break;
			case 5:
				n = this.m_mapCreatorsInFlight.get(e);
				break;
			case 6:
				n = this.m_mapHubCategoriesInFlight.get(e);
		}
		if (n && C.BDataRequestContainsOtherDataRequest(n.dataRequest, r)) {
			return n.promise;
		} else {
			return null;
		}
	}
	async HintLoadStoreItems(e, t, r, n, i, a, s) {
		let o = null;
		const c = new Promise((e) => (o = e));
		let m = [];
		let u = [];
		(e || []).forEach((e) => {
			const t = this.GetPreviousSupersetLoadPromise(e, 0, s);
			if (t) {
				u.push(t);
			} else {
				m.push(
					l.O4.fromObject({
						appid: e,
					}),
				);
				let t = B(this.GetStoreItemDataRequest(e, 0), s);
				const r = this.m_mapAppsInFlight.get(e);
				t = B(r?.dataRequest, t);
				if (r) {
					u.push(r.promise);
				}
				this.m_mapAppsInFlight.set(e, {
					promise: r ? v(r.promise, c) : c,
					dataRequest: t,
				});
			}
		});
		(t || []).forEach((e) => {
			const t = this.GetPreviousSupersetLoadPromise(e, 1, s);
			if (t) {
				u.push(t);
			} else {
				m.push(
					l.O4.fromObject({
						packageid: e,
					}),
				);
				let t = B(this.GetStoreItemDataRequest(e, 1), s);
				const r = this.m_mapPackageInFlight.get(e);
				t = B(r?.dataRequest, t);
				if (r) {
					u.push(r.promise);
				}
				this.m_mapPackageInFlight.set(e, {
					promise: r ? v(r.promise, c) : c,
					dataRequest: t,
				});
			}
		});
		(r || []).forEach((e) => {
			const t = this.GetPreviousSupersetLoadPromise(e, 2, s);
			if (t) {
				u.push(t);
			} else {
				m.push(
					l.O4.fromObject({
						bundleid: e,
					}),
				);
				let t = B(this.GetStoreItemDataRequest(e, 2), s);
				const r = this.m_mapBundleInFlight.get(e);
				t = B(r?.dataRequest, t);
				if (r) {
					u.push(r.promise);
				}
				this.m_mapBundleInFlight.set(e, {
					promise: r ? v(r.promise, c) : c,
					dataRequest: t,
				});
			}
		});
		(n || []).forEach((e) => {
			const t = this.GetPreviousSupersetLoadPromise(e, 4, s);
			if (t) {
				u.push(t);
			} else {
				m.push(
					l.O4.fromObject({
						tagid: e,
					}),
				);
				let t = B(this.GetStoreItemDataRequest(e, 4), s);
				const r = this.m_mapTagsInFlight.get(e);
				t = B(r?.dataRequest, t);
				if (r) {
					u.push(r.promise);
				}
				this.m_mapTagsInFlight.set(e, {
					promise: r ? v(r.promise, c) : c,
					dataRequest: t,
				});
			}
		});
		(i || []).forEach((e) => {
			const t = this.GetPreviousSupersetLoadPromise(e, 5, s);
			if (t) {
				u.push(t);
			} else {
				m.push(
					l.O4.fromObject({
						creatorid: e,
					}),
				);
				let t = B(this.GetStoreItemDataRequest(e, 5), s);
				const r = this.m_mapCreatorsInFlight.get(e);
				t = B(r?.dataRequest, t);
				if (r) {
					u.push(r.promise);
				}
				this.m_mapCreatorsInFlight.set(e, {
					promise: r ? v(r.promise, c) : c,
					dataRequest: t,
				});
			}
		});
		(a || []).forEach((e) => {
			const t = this.GetPreviousSupersetLoadPromise(e, 6, s);
			if (t) {
				u.push(t);
			} else {
				m.push(
					l.O4.fromObject({
						hubcategoryid: e,
					}),
				);
				let t = B(this.GetStoreItemDataRequest(e, 6), s);
				const r = this.m_mapHubCategoriesInFlight.get(e);
				t = B(r?.dataRequest, t);
				if (r) {
					u.push(r.promise);
				}
				this.m_mapHubCategoriesInFlight.set(e, {
					promise: r ? v(r.promise, c) : c,
					dataRequest: t,
				});
			}
		});
		let d = 1;
		if (m.length > 0) {
			d = await this.InternalHandleLoadStoreItems(m, s);
		}
		o(d);
		if (u.length > 0) {
			const e = await Promise.all(u);
			for (const t of e) {
				if (t != 1 && d == 1) {
					d = t;
				}
			}
		}
		(e || []).forEach((e) => this.m_mapAppsInFlight.delete(e));
		(t || []).forEach((e) => this.m_mapPackageInFlight.delete(e));
		(r || []).forEach((e) => this.m_mapBundleInFlight.delete(e));
		(n || []).forEach((e) => this.m_mapTagsInFlight.delete(e));
		(i || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e));
		(a || []).forEach((e) => this.m_mapHubCategoriesInFlight.delete(e));
		return d;
	}
	MarkStoreItemIDUnavailable(e) {
		(e || []).forEach((e) => {
			if (e.appid()) {
				this.m_setUnavailableApps.add(e.appid());
				this.m_mapApps.delete(e.appid());
			} else if (e.packageid()) {
				this.m_setUnavailablePackages.add(e.packageid());
				this.m_mapPackages.delete(e.packageid());
			} else if (e.bundleid()) {
				this.m_setUnavailableBundles.add(e.bundleid());
				this.m_mapBundles.delete(e.bundleid());
			} else if (e.tagid()) {
				this.m_setUnavailableTags.add(e.tagid());
				this.m_mapTags.delete(e.tagid());
			} else if (e.creatorid()) {
				this.m_setUnavailableCreators.add(e.creatorid());
				this.m_mapCreators.delete(e.creatorid());
			} else if (e.hubcategoryid()) {
				this.m_setUnavailableHubCategories.add(e.hubcategoryid());
				this.m_mapHubCategories.delete(e.hubcategoryid());
			}
		});
	}
	SortStoreItems(e) {
		let t = e.slice();
		t.sort((e, t) => {
			let r = e.appid() ?? 0;
			let n = t.appid() ?? 0;
			if (r != n) {
				return r - n;
			}
			let i = e.packageid() ?? 0;
			let a = t.packageid() ?? 0;
			if (i != a) {
				return i - a;
			}
			let s = e.bundleid() ?? 0;
			let o = t.bundleid() ?? 0;
			if (s != o) {
				return s - o;
			}
			let l = e.tagid() ?? 0;
			let c = t.tagid() ?? 0;
			if (l != c) {
				return l - c;
			}
			let m = e.creatorid() ?? 0;
			let u = t.creatorid() ?? 0;
			if (m != u) {
				return m - u;
			}
			let d = e.hubcategoryid() ?? 0;
			let A = t.hubcategoryid() ?? 0;
			if (d != A) {
				return d - A;
			} else {
				return 0;
			}
		});
		return t;
	}
	GetServiceTransport() {
		if (!this.m_serviceTransport) {
			console.warn("Service transport not initialized for StoreItemCache");
			this.m_serviceTransport = new s.D(
				u.TS.WEBAPI_BASE_URL,
			).GetAnonymousServiceTransport();
		}
		return this.m_serviceTransport;
	}
	async InternalHandleLoadStoreItems(e, t) {
		let r = 1;
		e = this.SortStoreItems(e);
		if (t.include_included_items) {
			t = {
				...t,
				included_item_data_request: {
					...t,
					include_included_items: false,
				},
			};
		}
		const n = new Array();
		try {
			const s = [];
			while (e.length > 0) {
				const r = e.splice(0, this.k_nMaxBatchSize);
				n.push(r);
				if (this.m_bUsePartnerAPI) {
					const e = a.w.Init(o.St);
					e.Body().set_include_unpublished(false);
					const n = e.Body().request(true);
					n.set_context((0, d.hS)(this.m_bUsePartnerAPI));
					n.set_data_request(l.gn.fromObject(t));
					n.set_ids(r);
					s.push(o.BT.GetItems(this.GetServiceTransport(), e));
				} else {
					const e = a.w.Init(l.eE);
					(0, d.rV)(e, this.m_bUsePartnerAPI);
					(0, d.Bn)(e, t);
					e.Body().set_ids(r);
					s.push(l.$4.GetItems(this.GetServiceTransport(), e));
				}
			}
			(await Promise.all(s)).forEach((a, s) => {
				if (a.GetEResult() == 1) {
					a.Body()
						.store_items()
						.forEach((r) => {
							const n = r.id();
							const s = r.item_type();
							let o = this.m_bReturnUnavailableItems && r.success() == 15;
							let l = r.success() == 1 && !this.BIsStoreItemMissing(n, s);
							if (o || l) {
								this.ReadItem(r, t);
							} else {
								if (u.TS.WEB_UNIVERSE == "dev") {
									console.warn(
										`Failed to load ${n} type ${s} with error ${r.success()}`,
										r,
									);
								}
								switch (s) {
									case 0:
										this.m_setUnavailableApps.add(n);
										this.m_mapApps.delete(n);
										break;
									case 1:
										this.m_setUnavailablePackages.add(n);
										this.m_mapPackages.delete(n);
										break;
									case 2:
										this.m_setUnavailableBundles.add(n);
										this.m_mapBundles.delete(n);
										break;
									case 4:
										this.m_setUnavailableTags.add(n);
										this.m_mapTags.delete(n);
										break;
									case 5:
										this.m_setUnavailableCreators.add(n);
										this.m_mapCreators.delete(n);
										break;
									case 6:
										this.m_setUnavailableHubCategories.add(n);
										this.m_mapHubCategories.delete(n);
										break;
									default:
										console.error(
											"CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
												s +
												" " +
												n,
										);
								}
								if (r.unvailable_for_country_restriction()) {
									switch (s) {
										case 0:
											this.m_setUnavailableDueToCountryRestrictionApps.add(n);
											break;
										case 1:
											this.m_setUnavailableDueToCountryRestrictionPackages.add(
												n,
											);
											break;
										case 2:
											this.m_setUnavailableDueToCountryRestrictionBundles.add(
												n,
											);
											break;
										case 4:
										case 5:
										case 6:
											console.error(
												"CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: " +
													a.GetEResult() +
													" message: " +
													a.Hdr().error_message(),
												(0, i.HO)(e),
											);
									}
								}
							}
						});
				} else {
					console.warn(
						"CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
							a.GetEResult() +
							" message: " +
							a.Hdr().error_message(),
						(0, i.HO)(e),
					);
					if (a.Hdr().transport_error() == 1 || u.TS.FROM_WEB) {
						this.MarkStoreItemIDUnavailable(n[s]);
					}
					if (r == 1) {
						r = a.GetEResult();
					}
				}
			});
		} catch (e) {
			const t = (0, m.H)(e);
			console.error(
				"CStoreItemCache::InternalHandleLoadStoreItems failed: " +
					t.strErrorMsg,
				t,
			);
			n.forEach((e) => this.MarkStoreItemIDUnavailable(e));
			return 79;
		}
		return r;
	}
	GetMapForType(e) {
		let t;
		switch (e) {
			case 0:
				t = this.m_mapApps;
				break;
			case 2:
				t = this.m_mapBundles;
				break;
			case 1:
				t = this.m_mapPackages;
				break;
			case 4:
				t = this.m_mapTags;
				break;
			case 5:
				t = this.m_mapCreators;
				break;
			case 6:
				t = this.m_mapHubCategories;
				break;
			default:
				console.error("Invalid map type requested", e);
		}
		return t;
	}
	BHasStoreItem(e, t, r) {
		let n = this.GetMapForType(t);
		return Boolean(n && n.has(e) && (!r || n.get(e).BContainDataRequest(r)));
	}
	GetStoreItem(e, t) {
		if (t == -1 || t == 3) {
			return;
		}
		const r = this.GetMapForType(t);
		return r?.get(e);
	}
	GetStoreItemWithLegacyVisibilityCheck(e, t) {
		const r = this.GetStoreItem(e, t);
		if (r && (this.m_bReturnUnavailableItems || r.BIsVisible())) {
			return r;
		} else {
			return undefined;
		}
	}
	GetStoreItemDataRequest(e, t) {
		return this.GetMapForType(t)?.get(e)?.GetDataRequest() || null;
	}
	BHasApp(e, t) {
		return this.BHasStoreItem(e, 0, t);
	}
	GetApp(e) {
		return this.GetStoreItem(e, 0);
	}
	BHasPackage(e, t) {
		return this.BHasStoreItem(e, 1, t);
	}
	GetPackage(e) {
		return this.GetStoreItem(e, 1);
	}
	BHasBundle(e, t) {
		return this.BHasStoreItem(e, 2, t);
	}
	GetBundle(e) {
		return this.GetStoreItem(e, 2);
	}
	BHasTag(e, t) {
		return this.BHasStoreItem(e, 4, t);
	}
	GetTag(e) {
		return this.GetStoreItem(e, 4);
	}
	BHasCreator(e, t) {
		return this.BHasStoreItem(e, 5, t);
	}
	GetCreator(e) {
		return this.GetStoreItem(e, 5);
	}
	BHasHubCategory(e, t) {
		return this.BHasStoreItem(e, 6, t);
	}
	GetHubCategory(e) {
		return this.GetStoreItem(e, 6);
	}
	BIsStoreItemMissing(e, t) {
		switch (t) {
			case 0:
				return this.BIsAppMissing(e);
			case 1:
				return this.BIsPackageMissing(e);
			case 2:
				return this.BIsBundleMissing(e);
			case 4:
				return this.BIsTagMissing(e);
			case 5:
				return this.BIsCreatorMissing(e);
			case 6:
				return this.BIsHubCategoryMissing(e);
			default:
				console.error("BStoreItemMissing invalid type", t);
				return true;
		}
	}
	BIsAppMissing(e) {
		return this.m_setUnavailableApps.has(e);
	}
	BIsPackageMissing(e) {
		return this.m_setUnavailablePackages.has(e);
	}
	BIsBundleMissing(e) {
		return this.m_setUnavailableBundles.has(e);
	}
	BIsTagMissing(e) {
		return this.m_setUnavailableTags.has(e);
	}
	BIsCreatorMissing(e) {
		return this.m_setUnavailableCreators.has(e);
	}
	BIsHubCategoryMissing(e) {
		return this.m_setUnavailableHubCategories.has(e);
	}
	BIsStoreItemUnavailableDueToCountryRestriction(e, t) {
		switch (t) {
			case 0:
				return this.BIsAppUnavailableDueToCountryRestriction(e);
			case 1:
				return this.BIsPackageUnavailableDueToCountryRestriction(e);
			case 2:
				return this.BIsBundleUnavailableDueToCountryRestriction(e);
			case 4:
			case 5:
			case 6:
				console.error(
					"BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: ",
					t,
				);
				return true;
			default:
				console.error("BStoreItemMissing invalid type", t);
				return true;
		}
	}
	BIsAppUnavailableDueToCountryRestriction(e) {
		return this.m_setUnavailableDueToCountryRestrictionApps.has(e);
	}
	BIsPackageUnavailableDueToCountryRestriction(e) {
		return this.m_setUnavailableDueToCountryRestrictionPackages.has(e);
	}
	BIsBundleUnavailableDueToCountryRestriction(e) {
		return this.m_setUnavailableDueToCountryRestrictionBundles.has(e);
	}
	ReadResults(e, t) {
		let r = [];
		for (const n of e) {
			r.push(this.ReadItem(n, t));
		}
		return r;
	}
	ReadItem(e, t) {
		const r = e.item_type();
		let n = null;
		switch (r) {
			case 0:
				n = this.m_mapApps;
				break;
			case 1:
				n = this.m_mapPackages;
				break;
			case 2:
				n = this.m_mapBundles;
				break;
			case 4:
				n = this.m_mapTags;
				break;
			case 5:
				n = this.m_mapCreators;
				break;
			case 6:
				n = this.m_mapHubCategories;
				break;
			default:
				console.error(`Invalid item type: ${r}`);
				return null;
		}
		let i = n.get(e.id());
		if (i) {
			i.MergeData(e, t);
		} else {
			i = new C(e, t);
			n.set(e.id(), i);
		}
		if (t.include_included_items && e.included_items(false)) {
			for (const r of e.included_items().included_apps()) {
				this.ReadItem(r, t.included_item_data_request);
			}
			for (const r of e.included_items().included_packages()) {
				this.ReadItem(r, t.included_item_data_request);
			}
		}
		return i;
	}
}
(0, n.Cg)([w.o], A.prototype, "ReadItem", null);
