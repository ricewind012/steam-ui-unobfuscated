var _n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require(/*webcrack:missing*/ "./89193.js");
import { Seconds } from "../../actual_src/utils/time.js";
var l = require(/*webcrack:missing*/ "./72476.js");
const c = Seconds.PerMinute;
export class n {
	m_accountid;
	m_bLoadingData = false;
	m_rtLastLoad = 0;
	m_communityData = undefined;
	constructor(e) {
		(0, s.Gn)(this);
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
		const t = Date.now() > this.m_rtLastLoad + c * 1000;
		if (!e || (t && !this.m_bLoadingData)) {
			this.m_bLoadingData = true;
			a.get(
				l.TS.CHAT_BASE_URL +
					"miniprofile/" +
					this.m_accountid +
					"/json/?origin=" +
					(0, l.xv)(),
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
(0, _n.Cg)([s.sH], n.prototype, "m_communityData", undefined);
