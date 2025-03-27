import n from "./63696.js";
import i, { W6 } from "./49519.js";
import a from "./90242.js";
import s, { w } from "./49455.js";
import o, { yK } from "./72476.js";
import u, { wJ } from "./45328.js";
import { NT } from "./53807.js";
import { n9 } from "./92059.js";
import p, { H7 } from "./1624.js";
const LContext = n.createContext({
	bCanUseLink: false,
});
export let PH;
export let _;
((e) => {
	e.k_eView = "view";
	e.k_eViewWebSiteHub = "websitehub";
	e.k_eCommunityView = "communityview";
	e.k_eCommunityEdit = "edit";
	e.k_eCommunityEditBroadcast = "editBroadcast";
	e.k_eCommunityAdminPage = "admin";
	e.k_eCommunityPublish = "publish";
	e.k_eCommunityMigrate = "migrate";
	e.k_eCommunityPreview = "preview";
	e.k_eCommunityPreviewSale = "previewsale";
	e.k_eCommunityAnnouncementHub = "community_announcehub";
	e.k_eStoreView = "storeview";
	e.k_eStoreNewsHub = "newshub";
	e.k_eStoreOwnerPage = "store";
	e.k_eStoreSalePage = "sale";
	e.k_eStoreUsersNewsHub = "usernewshub";
})((PH ||= {}));
((e) => {
	e.k_eFacebook = "facebook";
	e.k_eTwitter = "twitter";
	e.k_eReddit = "reddit";
})((_ ||= {}));
const g =
	/(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
function h(e, t) {
	const r = yK() === "store";
	const n = ((e) => {
		const t = e.match(g);
		return t?.[1];
	})(window.location.href);
	const i = r && n == "news";
	const a = yK() === "community";
	const l = t.appid ? "games" : "groups";
	const m =
		a &&
		l == n &&
		((t.appid && t.appid === o.UF.APPID) ||
			(!t.appid && t.clanSteamID.GetAccountID() === o.UF.CLANACCOUNTID));
	switch (e) {
		case PH.k_eView: {
			return m || i;
		}
		case PH.k_eCommunityView:
		case PH.k_eCommunityEdit:
		case PH.k_eCommunityEditBroadcast:
		case PH.k_eCommunityAdminPage:
		case PH.k_eCommunityPublish:
		case PH.k_eCommunityMigrate:
		case PH.k_eCommunityPreview:
		case PH.k_eCommunityPreviewSale:
		case PH.k_eCommunityAnnouncementHub: {
			return m;
		}
		case PH.k_eViewWebSiteHub: {
			return m || i;
		}
		case PH.k_eStoreView:
		case PH.k_eStoreNewsHub:
		case PH.k_eStoreOwnerPage:
		case PH.k_eStoreUsersNewsHub: {
			return i;
		}
		case PH.k_eStoreSalePage: {
			return false;
		}
		default: {
			w(false, `Unknown route specified for link: ${e}`);
			return false;
		}
	}
}
export function Bd(e, t) {
	const r = `${
		o.TS.COMMUNITY_BASE_URL
	}gid/${e.clanSteamID.ConvertTo64BitString()}/announcements/share/${
		e.AnnouncementGID
	}?site=${t}`;
	if (t === _.k_eFacebook) {
		return `${r}&t=${Math.random()}`;
	} else {
		return r;
	}
}
export function cq(e) {
	return y(e, PH.k_eStoreView, "absolute");
}
function f(e, t, r) {
	if (r) {
		return `${e ? `/games/${o.UF.VANITY_ID}` : `/groups/${o.UF.VANITY_ID}`}/`;
	}
	const n = e ? `ogg/${e}` : `gid/${t.ConvertTo64BitString()}`;
	return `${o.TS.COMMUNITY_BASE_URL + n}/`;
}
export function LJ() {
	return "news";
}
function y(e, t, r) {
	const n = r === "relative";
	const i = yK() === "community";
	const a = n ? "/" : o.TS.STORE_BASE_URL;
	const l = f(e.appid, e.clanSteamID, n);
	if (t === PH.k_eView) {
		t = i ? PH.k_eCommunityView : PH.k_eStoreView;
	} else if (t === PH.k_eViewWebSiteHub) {
		t = i ? PH.k_eCommunityAnnouncementHub : PH.k_eStoreNewsHub;
	}
	const m = e.GID ? e.GID : "";
	const u = e.AnnouncementGID ? e.AnnouncementGID : "";
	switch (t) {
		case PH.k_eCommunityPublish: {
			return (
				l +
				(e.bOldAnnouncement
					? `partnerevents/migrate_announcement/${u}`
					: `partnerevents/publish/${m}?tab=publishing`)
			);
		}
		case PH.k_eCommunityEdit: {
			return (
				l +
				(e.bOldAnnouncement
					? `partnerevents/migrate_announcement/${u}`
					: `partnerevents/edit/${m}`)
			);
		}
		case PH.k_eCommunityEditBroadcast: {
			return `${
				l +
				(e.bOldAnnouncement
					? `partnerevents/migrate_announcement/${u}`
					: `partnerevents/edit/${m}`)
			}?tab=broadcast`;
		}
		case PH.k_eCommunityMigrate: {
			return `${l}partnerevents/migrate_announcement/${u}`;
		}
		case PH.k_eCommunityPreview: {
			return (
				l +
				(e.bOldAnnouncement
					? `partnerevents/preview_old_announcement/${u}`
					: `partnerevents/preview/${m}`)
			);
		}
		case PH.k_eCommunityPreviewSale: {
			return `${l}partnerevents/previewsale/${m}`;
		}
		case PH.k_eCommunityAdminPage: {
			return `${l}partnerevents`;
		}
		case PH.k_eCommunityAnnouncementHub: {
			return `${l}announcements`;
		}
		case PH.k_eStoreNewsHub: {
			return `${a}news/${
				e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`
			}`;
		}
		case PH.k_eStoreOwnerPage: {
			return (
				a +
				(e.appid ? `app/${e.appid}` : `curator/${e.clanSteamID.GetAccountID()}`)
			);
		}
		case PH.k_eStoreSalePage: {
			if (e.jsondata.bSaleEnabled) {
				return (
					a +
					(e.jsondata.sale_vanity_id_valve_approved_for_sale_subpath
						? "sale/"
						: `curator/${e.clanSteamID.GetAccountID()}/sale/`) +
					e.jsondata.sale_vanity_id
				);
			} else {
				return a;
			}
		}
		case PH.k_eCommunityView: {
			return `${l}announcements/detail/${u}`;
		}
		case PH.k_eStoreView: {
			if (e.clanSteamID.GetAccountID() == H7()) {
				return `${o.TS.STORE_BASE_URL}meetsteam/${m}`;
			}
			return `${a}news/${
				e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`
			}/${e.bOldAnnouncement ? `old_view/${u}` : `view/${m}`}`;
		}
		case PH.k_eStoreUsersNewsHub: {
			return `${a}news/`;
		}
		default: {
			w(false, "Unknown route specified for link");
			return "";
		}
	}
}
export function qT(e, t, r) {
	return y(e, t, r === "forceAbsolute" || !h(t, e) ? "absolute" : "relative");
}
export function Hx(e, t, r) {
	const n = f(e, t, false);
	if (r === "admin") {
		return `${n}partnerevents`;
	} else {
		return "";
	}
}
export function tj(e) {
	const { preferredFocus } = e;
	const { bCanUseLink } = n.useContext(LContext);
	const s = n9();
	const o = W6();
	if (!e.eventModel) {
		return null;
	}
	const c = bCanUseLink && h(e.route, e.eventModel);
	const m = y(e.eventModel, e.route, c ? "relative" : "absolute");
	const p = c ? m : NT(m);
	const g = c ? p : wJ(p, s);
	if (c) {
		return (
			<a.Ii
				style={e.style}
				className={e.className}
				href={o.createHref({
					pathname: g,
				})}
				onClick={(t) => {
					e.onClick?.(t);
					o.push(g);
					t.preventDefault();
				}}
				preferredFocus={preferredFocus}
			>
				{e.children}
			</a.Ii>
		);
	} else {
		return (
			<a.Ii
				href={g}
				style={e.style}
				className={e.className}
				onClick={e.onClick}
				preferredFocus={preferredFocus}
			>
				{e.children}
			</a.Ii>
		);
	}
}
