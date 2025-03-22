var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require("./74110.js");
class o {
	constructor() {
		(0, i.Gn)(this);
	}
	m_CMInterface;
	m_mapRecommendationDetailsByApp = new Map();
	Init(e) {
		this.m_CMInterface = e;
	}
	get CMInterface() {
		return this.m_CMInterface;
	}
	async FetchRecommendationDetails(e, t) {
		let r = a.w.Init(s.uq);
		let n = r.Body().add_requests();
		n.set_steamid(e);
		n.set_appid(t);
		let i = await s.YK.GetIndividualRecommendations(
			x.CMInterface.GetServiceTransport(),
			r,
		);
		if (i.GetEResult() != 1 || i.Body().recommendations().length != 1) {
			return null;
		} else {
			return i.Body().recommendations()[0].toObject();
		}
	}
	async GetReview(e, t, r) {
		if (r == null) {
			r = x.CMInterface.steamid;
		}
		let n = null;
		let a = r.ConvertTo64BitString();
		if (!this.m_mapRecommendationDetailsByApp.has(e)) {
			let t = (0, i.sH)(new Map(), {
				deep: false,
			});
			this.m_mapRecommendationDetailsByApp.set(e, t);
			n = await this.FetchRecommendationDetails(a, e);
			t.set(a, n);
			return n;
		}
		let s = this.m_mapRecommendationDetailsByApp.get(e);
		if (!t && s.has(a)) {
			n = s.get(a);
		} else {
			n = await this.FetchRecommendationDetails(a, e);
			s.set(a, n);
		}
		return n;
	}
	GetStoredReview(e, t) {
		if (t == null) {
			t = x.CMInterface.steamid;
		}
		let r = t.ConvertTo64BitString();
		return this.m_mapRecommendationDetailsByApp.get(e)?.get(r);
	}
}
(0, n.Cg)(
	[i.sH.shallow],
	o.prototype,
	"m_mapRecommendationDetailsByApp",
	undefined,
);
export const x = new o();
window.appReviewStore = x;
