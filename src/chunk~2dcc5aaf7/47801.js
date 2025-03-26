var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./72476.js");
var s = require(/*webcrack:missing*/ "./12176.js");
var o = require("./87935.js");
var l = require("./1252.js");
var c = require("./96538.js");
var m = require("./46066.js");
var u = require("./82301.js");
var d = require(/*webcrack:missing*/ "./90095.js");
import { Seconds } from "../../actual_src/utils/time.js";
const p = "badge";
const g = "community_items";
class h {
	constructor() {
		(0, i.Gn)(this);
	}
	m_CMInterface;
	m_mapBadgeData = new Map();
	m_mapCommunityItemDefs = new Map();
	Init(e) {
		this.m_CMInterface = e;
		this.m_CMInterface.messageHandlers.RegisterEMessageAction(
			5625,
			m.c_,
			(e) => {
				let t = e.Body().appid();
				if (t) {
					this.InvalidateBadgeData(t);
				}
			},
		);
		this.m_CMInterface.messageHandlers.RegisterEMessageAction(
			5576,
			m.R2,
			(e) => {
				let t = new Map();
				for (let r = 0; r < e.Body().unseen_items().length; ++r) {
					let n = e.Body().unseen_items()[r].source_appid();
					if (n != 0) {
						t.set(n, n);
					}
				}
				t.forEach((e) => this.InvalidateBadgeData(e));
			},
		);
	}
	async FetchBadgeData(e) {
		let t = this.m_mapBadgeData.get(e);
		if (Date.now() < t.dtNextRetry) {
			return;
		}
		t.dtNextRetry = Infinity;
		t = await c.O.GetCachedDataForApp(e, p, 1);
		if (t) {
			this.m_mapBadgeData.set(e, {
				...t,
				dtNextRetry: Date.now() + Seconds.PerHour * 1000,
			});
		}
		let r = o.B7.ResolveURL("SteamIDBadgeInfo", e);
		let n = await l.g.get(r, {
			retrycount: 1,
		});
		if (n.badgedata) {
			t = {
				dtNextRetry: Infinity,
			};
			t.strName = n.badgedata.name;
			t.strIconURL = n.badgedata.iconurl;
			t.nLevel = n.badgedata.level;
			t.nMaxLevel = n.badgedata.maxlevel;
			t.nXP = n.badgedata.xp;
			t.bMaxed = n.badgedata.bMaxed;
			t.strNextLevelName = n.badgedata.nextlevelname;
			t.nNextLevelXP = n.badgedata.nextlevelxp;
			t.rgCards = [];
			for (let e of n.badgedata.rgCards) {
				let r = {
					strName: e.name,
					strTitle: e.title,
					strImgURL: e.imgurl,
					strArtworkURL: e.arturl,
					strMarketHash: e.markethash,
					nOwned: e.owned,
				};
				t.rgCards.push(r);
			}
			this.m_mapBadgeData.set(e, t);
			c.O.SetCachedDataForApp(e, p, 1, t);
		}
	}
	GetBadgeData(e) {
		if (!this.m_mapBadgeData.has(e)) {
			this.m_mapBadgeData.set(e, {
				dtNextRetry: 0,
			});
		}
		this.FetchBadgeData(e);
		return this.m_mapBadgeData.get(e);
	}
	async FetchCommunityItemDefinitions(e) {
		let t = await c.O.GetCachedDataForApp(e, g, 1);
		if (t) {
			this.m_mapCommunityItemDefs.set(e, t);
		}
		let r = s.w.Init(u.RG);
		r.Body().set_appid(e);
		r.Body().set_language(a.TS.LANGUAGE);
		r.Body().set_keyvalues_as_json(true);
		let n = await u.uy.GetCommunityItemDefinitions(
			this.m_CMInterface.GetServiceTransport(),
			r,
		);
		if (n.GetEResult() == 1) {
			t = n.Body().toObject().item_definitions;
			this.m_mapCommunityItemDefs.set(e, t);
			c.O.SetCachedDataForApp(e, g, 1, t);
		}
	}
	GetCommunityItemDefinitions(e) {
		if (!this.m_mapCommunityItemDefs.has(e)) {
			this.m_mapCommunityItemDefs.set(e, []);
			this.FetchCommunityItemDefinitions(e);
		}
		return this.m_mapCommunityItemDefs.get(e);
	}
	GetCommunityItemDefinition(e, t, r) {
		let n = this.GetCommunityItemDefinitions(e);
		if (n) {
			for (let e of n) {
				if (e.item_class == t && e.item_type == r) {
					return e;
				}
			}
		}
		return null;
	}
	InvalidateBadgeData(e) {
		const t = this.m_mapBadgeData.get(e);
		this.m_mapBadgeData.set(e, {
			...t,
			dtNextRetry: 0,
		});
	}
}
(0, n.Cg)([i.sH.shallow], h.prototype, "m_mapBadgeData", undefined);
(0, n.Cg)([i.sH.shallow], h.prototype, "m_mapCommunityItemDefs", undefined);
export const x_ = new h();
export function H_(e) {
	return (0, d.q3)(() => x_.GetBadgeData(e));
}
window.badgeStore = x_;
