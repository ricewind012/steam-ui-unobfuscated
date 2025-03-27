import { Seconds } from "../../actual_src/utils/time.js";
import { Cg } from "./34629.js";
import i from "./83957.js";
import s, { Gn } from "./89193.js";
import l, { xv } from "./72476.js";
const a = i;
const Seconds_PerMinute = Seconds.PerMinute;
export class n {
	m_accountid;
	m_bLoadingData = false;
	m_rtLastLoad = 0;
	m_communityData = undefined;
	constructor(e) {
		Gn(this);
		this.m_accountid = e;
	}
	get community_data() {
		return this.m_communityData;
	}
	get community_data_ready() {
		return this.m_communityData !== undefined;
	}
	get player_level() {
		return this.m_communityData && this.m_communityData.level;
	}
	get player_level_class() {
		return this.m_communityData && this.m_communityData.level_class;
	}
	get player_badge() {
		return this.m_communityData && this.m_communityData.favorite_badge;
	}
	get profile_background() {
		return this.m_communityData && this.m_communityData.profile_background;
	}
	Reload() {
		this.m_rtLastLoad = 0;
		this.EnsureCommunityDataLoaded();
	}
	EnsureCommunityDataLoaded() {
		const e = this.m_communityData || this.m_bLoadingData;
		const t = Date.now() > this.m_rtLastLoad + Seconds_PerMinute * 1000;
		if (!e || (t && !this.m_bLoadingData)) {
			this.m_bLoadingData = true;
			a.get(
				`${l.TS.CHAT_BASE_URL}miniprofile/${
					this.m_accountid
				}/json/?origin=${xv()}`,
			)
				.then((e) => {
					let t = e.data;
					if (typeof t.level == "number" && typeof t.level_class == "string") {
						this.m_communityData = t;
					}
					this.m_bLoadingData = false;
					this.m_rtLastLoad = Date.now();
				})
				.catch((e) => {
					this.m_bLoadingData = false;
				});
		}
	}
}
Cg([s.sH], n.prototype, "m_communityData", undefined);
