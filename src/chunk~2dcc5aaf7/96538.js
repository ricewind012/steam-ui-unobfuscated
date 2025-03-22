var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
class a {
	constructor() {
		(0, i.Gn)(this);
	}
	m_mapAppDetailsCache = new Map();
	BHasDataForApp(e) {
		return this.m_mapAppDetailsCache.has(e);
	}
	LookupCachedDataForApp(e, t, r) {
		let n = this.m_mapAppDetailsCache.get(e).get(t);
		if (n) {
			if (n.version === r) {
				return n.data;
			}
			console.warn(
				"App data cache data mismatch",
				e,
				t,
				r,
				"Got version",
				n.version,
			);
		}
	}
	async GetCachedDataForApp(e, t, r) {
		if (!this.BHasDataForApp(e)) {
			await this.FetchDataForApp(e);
		}
		return this.LookupCachedDataForApp(e, t, r);
	}
	async FetchDataForApp(e) {
		if (this.m_mapAppDetailsCache.has(e)) {
			return;
		}
		let t;
		try {
			let r = await SteamClient.Apps.GetCachedAppDetails(e);
			t = JSON.parse(r);
		} catch (e) {}
		if (t) {
			let r = new Map(t);
			this.m_mapAppDetailsCache.set(e, r);
		} else {
			console.warn("Failed to load app details cache data for", e);
			this.m_mapAppDetailsCache.set(e, new Map());
		}
	}
	SetCachedDataForApp(e, t, r, n) {
		if (!this.m_mapAppDetailsCache.has(e)) {
			this.m_mapAppDetailsCache.set(e, new Map());
		}
		this.m_mapAppDetailsCache.get(e).set(t, {
			version: r,
			data: n,
		});
		let i = this.m_mapAppDetailsCache.get(e);
		return SteamClient.Apps.SetCachedAppDetails(
			e,
			JSON.stringify(Array.from(i)),
		);
	}
}
(0, n.Cg)([i.sH.shallow], a.prototype, "m_mapAppDetailsCache", undefined);
(0, n.Cg)([i.XI], a.prototype, "SetCachedDataForApp", null);
export const O = new a();
window.appDetailsCache = O;
