import { Localize } from "../../actual_src/utils/localization.js";
import i from "./5859.js";
import a from "./78771.js";
export let bK;
((e) => {
	e[(e.k_eLibrary = 1)] = "k_eLibrary";
	e[(e.k_eWishlist = 2)] = "k_eWishlist";
	e[(e.k_eFollowing = 4)] = "k_eFollowing";
	e[(e.k_eRecommended = 8)] = "k_eRecommended";
	e[(e.k_eSteam = 16)] = "k_eSteam";
	e[(e.k_eRequired = 32)] = "k_eRequired";
	e[(e.k_eFeatured = 64)] = "k_eFeatured";
	e[(e.k_eCurator = 128)] = "k_eCurator";
	e[(e.k_eReposted = 256)] = "k_eReposted";
})((bK ||= {}));
export class NK {
	clanid;
	unique_id;
	event_type;
	appid;
	start_time;
	appInfo;
	clanInfo;
	score;
	GetSource() {
		if (this.appInfo) {
			return this.appInfo.source;
		} else {
			return this.clanInfo.source;
		}
	}
	static GetEntityNameForID(e, t) {
		if (e) {
			return i.A.Get().GetApp(e)?.GetName();
		}
		if (t) {
			const e = a.ac.GetClanInfoByClanAccountID(t);
			if (e) {
				return e.group_name;
			}
		}
		return (0, Localize)("#EventCalendar_MuteApp_Unknown");
	}
	static BHasEntityNameForID(e, t) {
		if (e) {
			return Boolean(i.A.Get().GetApp(e)?.GetName());
		} else {
			return !!t && !!a.ac.GetClanInfoByClanAccountID(t)?.group_name;
		}
	}
	GetEntityName() {
		return NK.GetEntityNameForID(this.appid, this.clanid);
	}
	GetGameCapsule() {
		if (this.appInfo) {
			return i.A.Get()
				.GetApp(this.appInfo.appid)
				?.GetAssets()
				?.GetMainCapsuleURL();
		}
		if (this.clanInfo) {
			let e = a.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
			if (e) {
				return e.avatar_full_url;
			}
		}
		return (0, Localize)("#EventCalendar_MuteApp_Unknown");
	}
	GetGameIcon() {
		if (this.appInfo) {
			return i.A.Get()
				.GetApp(this.appInfo.appid)
				?.GetAssets()
				?.GetCommunityIconURL();
		}
		if (this.clanInfo) {
			let e = a.ac.GetClanInfoByClanAccountID(this.clanInfo.clanid);
			if (e) {
				return e.avatar_full_url;
			}
		}
		return (0, Localize)("#EventCalendar_MuteApp_Unknown");
	}
}
export class dF {
	appid;
	source;
	playtime;
	last_played;
	wishlist_added;
}
export class w2 {
	clanid;
	source;
}
