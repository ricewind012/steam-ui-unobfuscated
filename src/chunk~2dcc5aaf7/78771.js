var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require(/*webcrack:missing*/ "./8573.js");
var c = require(/*webcrack:missing*/ "./49455.js");
var m = require(/*webcrack:missing*/ "./72476.js");
var u = require("./823.js");
class d {
	constructor() {
		(0, s.Gn)(this);
	}
	m_mapAppIDToClanInfo = new Map();
	m_mapVanityToClanInfo = new Map();
	m_mapClanAccountIDToClanInfo = new Map();
	m_mapPromisesLoading = new Map();
	m_rgQueuedEventsClanIDs = new Array();
	m_bLoadedFromConfig = false;
	Init() {
		this.LazyInit();
	}
	LazyInit() {
		if (!this.m_bLoadedFromConfig) {
			(0, s.h5)(() => {
				let e = (0, m.Fd)("groupvanityinfo", "application_config");
				if (this.ValidateClanConfig(e)) {
					e.forEach((e) => {
						this.InternalSetupValue(e);
					});
				}
			});
			this.m_bLoadedFromConfig = true;
		}
	}
	AddGroupVanities(e) {
		(0, s.h5)(() => {
			if (this.ValidateClanConfig(e)) {
				e.forEach((e) => {
					this.InternalSetupValue(e);
				});
			}
		});
	}
	ValidateClanConfig(e) {
		const t = e;
		return (
			!!t &&
			!!Array.isArray(t) &&
			!!(t.length > 0) &&
			typeof t[0] == "object" &&
			typeof t[0].clanAccountID == "number" &&
			(typeof t[0].appid == "number" || typeof t[0].vanity_url == "string")
		);
	}
	BHasClanInfoLoaded(e) {
		(0, c.w)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo");
		(0, c.w)(
			e.BIsClanAccount(),
			"Clan SteamID is not a clan account id when requesting clan info ",
		);
		return this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID());
	}
	BHasClanInfoLoadedByAccountID(e) {
		return this.m_mapClanAccountIDToClanInfo.has(e);
	}
	RegisterClanData(e) {
		for (const t of e) {
			this.InternalSetupValue(t);
		}
	}
	InternalSetupValue(e) {
		const t = {
			clanAccountID: e.clanAccountID,
			clanSteamID: new l.b(e.clanSteamIDString),
			appid: e.appid,
			vanity_url: e.vanity_url,
			member_count: e.member_count,
			is_ogg: e.is_ogg,
			is_creator_home: e.is_creator_home,
			is_curator: e.is_curator,
			has_visible_store_page: e.has_visible_store_page,
			has_rss_feed: e.has_rss_feed,
			rss_language: e.rss_language ? e.rss_language : 0,
			avatar_full_url: e.avatar_full_url,
			avatar_medium_url: e.avatar_medium_url,
			group_name: e.group_name,
			creator_page_bg_url: e.creator_page_bg_url,
			partner_events_enabled: e.partner_events_enabled,
		};
		if (e.appid != 0) {
			this.m_mapAppIDToClanInfo.set(e.appid, t);
		}
		if (e.vanity_url && e.vanity_url.length > 0) {
			this.m_mapVanityToClanInfo.set(e.vanity_url.toLocaleLowerCase(), t);
		}
		this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, t);
	}
	GetRequestParam() {
		return {
			origin: self.origin,
		};
	}
	async LoadOGGClanInfoForAppID(e) {
		this.LazyInit();
		if (typeof e == "string") {
			e = parseInt(e);
		}
		(0, c.w)(e != 0, "LoadOGGClanInfoForAppID called with appid of zero");
		if (e == 0) {
			return null;
		}
		if (this.m_mapAppIDToClanInfo.has(e)) {
			return this.m_mapAppIDToClanInfo.get(e);
		}
		let t = "appid_" + e;
		if (!this.m_mapPromisesLoading.has(t)) {
			this.m_mapPromisesLoading.set(t, this.InternalLoadOGGClanInfoForAppID(e));
		}
		return this.m_mapPromisesLoading.get(t);
	}
	async InternalLoadOGGClanInfoForAppID(e) {
		const t = m.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
		let r = null;
		try {
			r = (
				await a.get(t, {
					params: this.GetRequestParam(),
				})
			).data;
		} catch (e) {}
		if (r) {
			this.InternalSetupValue(r);
			return this.m_mapAppIDToClanInfo.get(e);
		} else {
			return null;
		}
	}
	async LoadOGGClanInfoForIdentifier(e) {
		this.LazyInit();
		if (this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase())) {
			return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
		}
		let t = "storevanity_" + e?.toLocaleLowerCase();
		if (!this.m_mapPromisesLoading.has(t)) {
			this.m_mapPromisesLoading.set(
				t,
				this.InternalLoadOGGClanInfoForIdentifier(e),
			);
		}
		return this.m_mapPromisesLoading.get(t);
	}
	async InternalLoadOGGClanInfoForIdentifier(e) {
		const t =
			m.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
		let r = await a.get(t, {
			params: this.GetRequestParam(),
		});
		this.InternalSetupValue(r.data);
		return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
	}
	async LoadOGGClanInfoForGroupVanity(e) {
		this.LazyInit();
		if (this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase())) {
			return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
		}
		let t = "community_name_" + e;
		if (!this.m_mapPromisesLoading.has(t)) {
			this.m_mapPromisesLoading.set(
				t,
				this.InternalLoadOGGClanInfoForGroupVanity(e?.toLocaleLowerCase()),
			);
		}
		return this.m_mapPromisesLoading.get(t);
	}
	async InternalLoadOGGClanInfoForGroupVanity(e) {
		const t =
			m.TS.COMMUNITY_BASE_URL + "groups/" + e + "/ajaxgetvanityandclanid/";
		let r = await a.get(t, {
			params: this.GetRequestParam(),
		});
		this.InternalSetupValue(r.data);
		return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
	}
	async LoadClanInfoForClanSteamID(e) {
		this.LazyInit();
		let t = e.GetAccountID();
		if (this.m_mapClanAccountIDToClanInfo.has(t)) {
			return this.m_mapClanAccountIDToClanInfo.get(t);
		}
		let r = "clanaccountid_" + t;
		if (!this.m_mapPromisesLoading.has(r)) {
			this.m_mapPromisesLoading.set(
				r,
				this.InternalLoadClanInfoForClanSteamID(e),
			);
		}
		return this.m_mapPromisesLoading.get(r);
	}
	async LoadClanInfoForClanAccountID(e) {
		const t = l.b.InitFromClanID(e);
		return this.LoadClanInfoForClanSteamID(t);
	}
	async InternalLoadClanInfoForClanSteamID(e) {
		let t = e.GetAccountID();
		const r =
			m.TS.COMMUNITY_BASE_URL +
			"gid/" +
			e.ConvertTo64BitString() +
			"/ajaxgetvanityandclanid/";
		let n = await a.get(r, {
			params: this.GetRequestParam(),
		});
		this.InternalSetupValue(n.data);
		return this.m_mapClanAccountIDToClanInfo.get(t);
	}
	GetOGGClanInfo(e) {
		if (typeof e == "string") {
			return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
		} else {
			return this.m_mapAppIDToClanInfo.get(e);
		}
	}
	GetClanSteamIDForAppID(e) {
		this.LazyInit();
		if (this.m_mapAppIDToClanInfo.has(e)) {
			return l.b.InitFromClanID(this.m_mapAppIDToClanInfo.get(e).clanAccountID);
		}
	}
	GetClanVanityForAppID(e) {
		this.LazyInit();
		if (this.m_mapAppIDToClanInfo.has(e)) {
			return this.m_mapAppIDToClanInfo.get(e).vanity_url;
		}
	}
	GetClanVanityForClanSteamID(e) {
		this.LazyInit();
		if (this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())) {
			return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID()).vanity_url;
		}
	}
	HasLoadedClanAccountID(e) {
		this.LazyInit();
		return this.m_mapClanAccountIDToClanInfo.has(e);
	}
	GetClanMemberCount(e) {
		if (this.m_mapAppIDToClanInfo.has(e)) {
			return this.m_mapAppIDToClanInfo.get(e).member_count;
		} else {
			return 0;
		}
	}
	GetClanInfoByClanAccountID(e) {
		this.LazyInit();
		(0, c.w)(
			!!e,
			"Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
		);
		return this.m_mapClanAccountIDToClanInfo.get(e);
	}
	GetCreatorStoreURL(e) {
		let t = u.pF.GetCreatorHome(e);
		if (t) {
			return t.GetCreatorHomeURL("developer");
		}
		let r = this.GetClanInfoByClanAccountID(e.GetAccountID());
		return (
			m.TS.COMMUNITY_BASE_URL +
			(r.vanity_url
				? "groups/" + r.vanity_url
				: "gid/" + e.ConvertTo64BitString())
		);
	}
}
(0, n.Cg)([s.sH], d.prototype, "m_mapAppIDToClanInfo", undefined);
(0, n.Cg)([s.sH], d.prototype, "m_mapVanityToClanInfo", undefined);
(0, n.Cg)([s.sH], d.prototype, "m_mapClanAccountIDToClanInfo", undefined);
(0, n.Cg)([s.XI], d.prototype, "RegisterClanData", null);
(0, n.Cg)([s.XI], d.prototype, "InternalSetupValue", null);
export const ac = new d();
export function TB(e) {
	const [t, r] = (0, o.useState)(
		e ? ac.GetClanInfoByClanAccountID(e) : undefined,
	);
	const [n, i] = (0, o.useState)(!!e && !ac.BHasClanInfoLoadedByAccountID(e));
	(0, o.useEffect)(() => {
		if (e) {
			if (ac.BHasClanInfoLoadedByAccountID(e)) {
				r(ac.GetClanInfoByClanAccountID(e));
				i(false);
			} else {
				i(true);
				const t = l.b.InitFromClanID(
					typeof e == "string" ? Number.parseInt(e) : e,
				);
				ac.LoadClanInfoForClanSteamID(t).then((e) => {
					r(e ?? undefined);
					i(false);
				});
			}
		} else {
			r(undefined);
			i(false);
		}
	}, [e]);
	return [n, t];
}
window.g_ClanStore = ac;
