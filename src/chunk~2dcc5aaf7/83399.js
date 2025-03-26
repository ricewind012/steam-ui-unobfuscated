var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require(/*webcrack:missing*/ "./12176.js");
var o = require("./46948.js");
import { Seconds } from "../../actual_src/utils/time.js";
var c = require(/*webcrack:missing*/ "./8573.js");
var m = require("./5859.js");
var u = require("./5640.js");
var d = require("./17415.js");
var A = require(/*webcrack:missing*/ "./88696.js");
export function T() {
	return (0, i.q3)(() => J.TrendingApps);
}
const g = Seconds.PerDay * 1000;
const h = Seconds.PerHour * 1000;
class C extends d.x {
	m_CMInterface;
	constructor() {
		super({
			storage: new A.A(),
			strStorageKey: "trendingstore_storage",
			nStorageVersion: 2,
			nMaxLifetimeMS: g,
			nFailureRetryIntervalMS: h,
		});
	}
	async Init(e) {
		this.m_CMInterface = e;
		await this.LoadFromStorage();
		return this.GetData() && this.OnDataLoad(this.GetData());
	}
	async OnDataLoad(e) {
		return this.RequestStoreItems(e.map((e) => e.appid));
	}
	async RequestStoreItems(e) {
		await m.A.Get().HintLoadStoreApps(e, {
			include_assets: true,
			include_platforms: true,
		});
	}
	get TrendingApps() {
		return this.GetData()?.filter((e) => !u.jR.BIsAppBlocked(e.appid)) || [];
	}
	async FetchData() {
		let e = s.w.Init(o.y1);
		e.Body().set_num_apps(50);
		e.Body().set_num_top_friends(8);
		const t = await o.nd.GetTrendingAppsAmongFriends(
			this.m_CMInterface.GetServiceTransport(),
			e,
		);
		let r;
		if (t.GetEResult() == 1) {
			r = t
				.Body()
				.trending_apps()
				.map((e) => ({
					appid: e.appid(),
					rgAccountIDs: e
						.steamids_top_friends()
						.map((e) => new c.b(e).GetAccountID()),
					totalFriends: e.total_friends(),
				}));
			await this.OnDataLoad(r);
		} else {
			console.warn(
				"Error",
				t.GetEResult(),
				"fetching trending games, retry in",
				this.GetFailureRetryIntervalMS(),
				"ms",
			);
		}
		return r;
	}
}
(0, n.Cg)([a.oI], C.prototype, "FetchData", null);
export const J = new C();
window.trendingStore = J;
