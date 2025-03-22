var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./12176.js");
var o = require("./67185.js");
var l = require("./46948.js");
var c = require(/*webcrack:missing*/ "./79769.js");
var m = require(/*webcrack:missing*/ "./52451.js");
var u = require("./51095.js");
var d = require(/*webcrack:missing*/ "./72476.js");
function A(e, t) {
	const r = t?.nSaleTagID;
	const n = t?.strContentHubType;
	const i = t?.strContentHubCategory;
	const a = t?.nContentHubTagID;
	const s = t?.bDiscountsOnly;
	const o = t?.bPrioritizeDiscounts;
	const l = t?.strOptInName;
	const c = t?.nOptInTagID;
	const m = t?.nPruneTagID;
	let u = e.toString();
	if (r) {
		u += "_" + r;
	} else if (n) {
		u += "_" + n;
		if (n === "category" && i) {
			u += "_" + i;
		} else if (n === "tags" && a) {
			u += "_" + a;
		}
		if (s) {
			u += "_d";
		} else if (o) {
			u += "_p";
		}
		if (l && c && m) {
			u += "_" + l;
		}
	}
	return u;
}
function p(e) {
	const t = e?.nSaleTagID;
	const r = e?.strContentHubType;
	const n = e?.strContentHubCategory;
	const i = e?.nContentHubTagID;
	const a = e?.bDiscountsOnly;
	const s = e?.bPrioritizeDiscounts;
	const l = e?.strOptInName;
	const c = e?.nOptInTagID;
	const m = e?.nPruneTagID;
	const u = e?.bOptInOnly;
	const d = new o.S7();
	if (t) {
		const e = new o.hw();
		e.set_sale_tagid(t);
		d.set_sale_filter(e);
	} else if (r) {
		const e = new o.rd();
		e.set_hub_type(r);
		if (r === "category") {
			e.set_hub_category(n);
		} else if (r === "tags") {
			e.set_hub_tagid(i);
		}
		if (a) {
			e.set_discount_filter(1);
		} else if (s) {
			e.set_discount_filter(2);
		}
		if (l) {
			const t = new o.Q7();
			t.set_name(l);
			t.set_optin_tagid(c);
			t.set_prune_tagid(m);
			t.set_optin_only(u);
			e.set_optin(t);
		}
		d.set_content_hub_filter(e);
	}
	return d;
}
export function Bk(e) {
	return (0, u.bt)(JSON.stringify(e));
}
export class aI {
	m_transport;
	m_mapDiscoveryQueues = new Map();
	m_mapSkippedApps = new Map();
	m_mapSkippedAppCount = new Map();
	m_mapInClientCompleted = new Map();
	m_mapInClientCompletedCallback = new Map();
	m_setExhuasted = new Set();
	m_mapExhuastedCallback = new Map();
	GetTotalSkippedAppsForDiscoveryQueue(e, t) {
		const r = A(e, t);
		return this.m_mapDiscoveryQueues.get(r).skipped;
	}
	GetNumAppsSeenForDiscoveryQueue(e, t) {
		const r = A(e, t);
		return this.m_mapSkippedAppCount.get(r) || 0;
	}
	GetSkippedAppKey(e, t, r) {
		return `${e}_${A(t, r)}`;
	}
	GetInClientCompletedQueues(e, t) {
		const r = A(e, t);
		return this.m_mapInClientCompleted.get(r) || 0;
	}
	GetInClientCompletedQueuesCallback(e, t) {
		const r = A(e, t);
		if (!this.m_mapInClientCompletedCallback.has(r)) {
			this.m_mapInClientCompletedCallback.set(r, new c.lu());
		}
		return this.m_mapInClientCompletedCallback.get(r);
	}
	GetExhaustedCallback(e, t) {
		const r = A(e, t);
		if (!this.m_mapExhuastedCallback.has(r)) {
			this.m_mapExhuastedCallback.set(r, new c.lu());
		}
		return this.m_mapExhuastedCallback.get(r);
	}
	BIsExhausted(e, t) {
		const r = A(e, t);
		return this.m_setExhuasted.has(r);
	}
	async LoadDiscoveryQueue(e, t, r) {
		const n = A(e, r);
		const i = s.w.Init(l.BL);
		i.Body().set_queue_type(e);
		i.Body().set_country_code(d.TS.COUNTRY || "US");
		i.Body().set_rebuild_queue(t);
		i.Body().set_rebuild_queue_if_stale(true);
		if (e === 1 || e === 9) {
			i.Body().settings().set_include_coming_soon(true);
		}
		if (Boolean(r?.nSaleTagID) || Boolean(r?.strContentHubType)) {
			i.Body().set_store_page_filter(p(r));
		}
		const a = await l.nd.GetDiscoveryQueue(this.m_transport, i);
		const o = a.GetEResult();
		if (o == 1) {
			const t = a.Body().toObject();
			this.m_mapDiscoveryQueues.set(n, t);
			if (t.exhausted) {
				if (!this.m_setExhuasted.has(n)) {
					this.m_setExhuasted.add(n);
					this.GetExhaustedCallback(e, r).Dispatch(true);
				}
			} else if (this.m_setExhuasted.has(n)) {
				this.m_setExhuasted.delete(n);
				this.GetExhaustedCallback(e, r).Dispatch(false);
			}
			this.m_mapSkippedAppCount.set(n, t.skipped || 0);
		} else {
			console.warn(
				"Error",
				o,
				"failed to get discovery queue type",
				e,
				"key",
				n,
			);
		}
		return o;
	}
	async GetDiscoveryQueueAppsOfType(e, t, r) {
		const n = A(e, r);
		if (!!t || !this.m_mapDiscoveryQueues.has(n)) {
			await this.LoadDiscoveryQueue(e, t, r);
		}
		return {
			appids: this.m_mapDiscoveryQueues.get(n).appids,
			exhausted: this.m_mapDiscoveryQueues.get(n).exhausted,
		};
	}
	async SkipDiscoveryQueueItem(e, t, r) {
		A(t, r);
		const n = this.GetSkippedAppKey(e, t, r);
		if (!this.m_mapSkippedApps.has(n)) {
			const i = A(t, r);
			const a = this.m_mapDiscoveryQueues.get(i).appids;
			const o = a[a.length - 1] == e;
			this.m_mapSkippedApps.set(n, true);
			this.m_mapSkippedAppCount.set(
				i,
				(this.m_mapSkippedAppCount.get(i) || 0) + 1,
			);
			const c = s.w.Init(l.fe);
			c.Body().set_appid(e);
			c.Body().set_queue_type(t);
			if (Boolean(r?.nSaleTagID) || Boolean(r?.strContentHubType)) {
				c.Body().set_store_page_filter(p(r));
			}
			const m = (
				await l.nd.SkipDiscoveryQueueItem(this.m_transport, c)
			).GetEResult();
			if (m != 1 && m != 29) {
				console.warn("Error", m, "failed to skip appid ", e);
				this.m_mapSkippedApps.delete(n);
			} else if (o) {
				this.MarkDiscoveryQueueCompleted(t, r);
			}
		}
		return Promise.resolve();
	}
	MarkDiscoveryQueueCompleted(e, t) {
		const r = A(e, t);
		if (this.m_mapInClientCompleted.has(r)) {
			const n = this.m_mapInClientCompleted.get(r) + 1;
			this.m_mapInClientCompleted.set(r, n);
			this.GetInClientCompletedQueuesCallback(e, t).Dispatch(n);
		} else {
			this.m_mapInClientCompleted.set(r, 0);
			this.GetInClientCompletedQueuesCallback(e, t).Dispatch(0);
		}
	}
	async LoadSkippedApps(e, t) {
		A(e, t);
		const r = s.w.Init(l.pS);
		r.Body().set_steamid(d.iA.steamid);
		r.Body().set_queue_type(e);
		if (Boolean(t?.nSaleTagID) || Boolean(t?.strContentHubType)) {
			r.Body().set_store_page_filter(p(t));
		}
		const n = await l.nd.GetDiscoveryQueueSkippedApps(this.m_transport, r);
		if (n.GetEResult() === 1) {
			return n.Body().appids() || [];
		} else {
			console.warn(
				"Failed to retrieve skipped apps for discovery queue.",
				e,
				t,
				n.GetEResult(),
			);
			return [];
		}
	}
	static s_DiscoveryQueueStore = null;
	static Init(e) {
		aI.Get().m_transport = e;
	}
	static BHasTransport() {
		return Boolean(aI.Get().m_transport);
	}
	static Get() {
		this.s_DiscoveryQueueStore ||= new aI();
		return this.s_DiscoveryQueueStore;
	}
	constructor() {
		(0, a.Gn)(this);
	}
}
export function IH(e, t) {
	const [r, n] = (0, i.useState)(aI.Get().BIsExhausted(e, t));
	(0, m.hL)(aI.Get().GetExhaustedCallback(e, t), n);
	return r;
}
export function WX(e, t) {
	const r = i.useMemo(
		() => (0, d.Tc)("discovery_queue_name", "application_config"),
		[],
	);
	if (typeof r == "string" && r.length > 0) {
		return r;
	} else {
		return "";
	}
}
(0, n.Cg)([a.sH], aI.prototype, "m_mapDiscoveryQueues", undefined);
