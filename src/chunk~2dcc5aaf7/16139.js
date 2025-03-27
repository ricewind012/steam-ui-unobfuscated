import { Cg } from "./34629.js";
import i, { Gn, h5 } from "./89193.js";
import a from "./96000.js";
import s from "./81482.js";
import o from "./88696.js";
import l from "./63032.js";
import c from "./52451.js";
const _m = {
	nShowcaseId: -1,
	strCollectionId: "",
	eSortBy: 1,
	bExpanded: false,
};
const u = "showcases";
const d = "sc-version";
export class m {
	constructor() {
		Gn(this);
	}
	m_cloudStorage;
	m_mapCollectionStorage;
	m_localStorage = new o.A();
	m_roamingStorage = new l.O();
	m_mapShowcases = new Map();
	async Init(e) {
		this.m_cloudStorage = e;
		this.m_mapCollectionStorage = this.m_cloudStorage.GetMapForPrefix(`${u}.`);
		return this.LoadShowcases();
	}
	static GetOrderForShowcase(e) {
		if (e.nOrder == null) {
			return e.nShowcaseId;
		} else {
			return e.nOrder;
		}
	}
	static ShowcaseSortFunction(e, t) {
		return m.GetOrderForShowcase(t) - m.GetOrderForShowcase(e);
	}
	get showcases() {
		return Array.from(this.m_mapShowcases.values()).sort(
			m.ShowcaseSortFunction,
		);
	}
	get maxShowcases() {
		return 20;
	}
	SetSortBy(e, t) {
		let r = this.m_mapShowcases.get(e);
		if (r) {
			r.eSortBy = t;
			r.nLastChangedMS = Date.now();
			this.SaveShowcase(r);
		}
	}
	SetCollectionId(e, t) {
		let r = this.m_mapShowcases.get(e);
		if (r) {
			r.strCollectionId = t;
			r.nLastChangedMS = Date.now();
			this.SaveShowcase(r);
		}
	}
	SetExpanded(e, t) {
		let r = this.m_mapShowcases.get(e);
		if (r) {
			r.bExpanded = t;
			r.nLastChangedMS = Date.now();
			this.SaveShowcase(r);
		}
	}
	SetOrder(e, t) {
		let r = this.m_mapShowcases.get(e);
		if (r) {
			r.nOrder = t;
			this.SaveShowcase(r);
		}
	}
	SetDeleting(e, t) {
		let r = this.m_mapShowcases.get(e);
		if (r) {
			r.bDeleting = t;
			this.SaveShowcase(r);
		}
	}
	DeleteShowcase(e) {
		this.m_mapShowcases.delete(e);
		SteamClient.Stats.RecordActivationEvent("Showcases", "Delete");
		this.m_mapCollectionStorage.delete(e.toString());
	}
	AddNewShowcase(e = "") {
		const t = Date.now();
		const r = {
			nShowcaseId: t,
			strCollectionId: e,
			eSortBy: 1,
			nLastChangedMS: Date.now(),
		};
		this.m_mapShowcases.set(t, r);
		this.SaveShowcase(r);
	}
	BHasEmptyShowcase() {
		return this.showcases.findIndex((e) => !e.strCollectionId) !== -1;
	}
	OnDeleteCollection(e) {
		const t = Array.from(this.m_mapShowcases.values()).filter(
			(t) => t.strCollectionId == e,
		);
		for (const e of t) {
			this.DeleteShowcase(e.nShowcaseId);
		}
	}
	get defaultShowcases() {
		return [
			{
				nIntroducedInVersion: 4,
				showcase: {
					nShowcaseId: 2,
					strCollectionId: "recent-games",
					eSortBy: 1,
					bExpanded: false,
				},
			},
			{
				nIntroducedInVersion: 5,
				strInsertAfterCollectionId: "recent-games",
				showcase: {
					nShowcaseId: 3,
					strCollectionId: "play-next",
					eSortBy: 1,
					bExpanded: false,
				},
			},
			{
				nIntroducedInVersion: 0,
				showcase: {
					nShowcaseId: 0,
					strCollectionId: a.md.GetCollectionForAppType(1).id,
					eSortBy: 1,
					bExpanded: true,
				},
			},
			{
				nIntroducedInVersion: 0,
				showcase: _m,
			},
		];
	}
	LoadShowcaseDataFromCloud() {
		this.m_mapShowcases.clear();
		this.m_mapCollectionStorage.forEach((e) => {
			const t = JSON.parse(e);
			if (t.nShowcaseId != -1) {
				this.m_mapShowcases.set(t.nShowcaseId, t);
			}
		});
	}
	async LoadShowcases() {
		this.m_mapCollectionStorage.OnChange(this.LoadShowcaseDataFromCloud);
		if (this.m_mapCollectionStorage.size > 0) {
			this.LoadShowcaseDataFromCloud();
			this.MaybeUpgrade();
			return;
		}
		try {
			const e = await this.m_roamingStorage.GetObject(u);
			h5(() => {
				for (let t of e) {
					this.SaveShowcase(t, s.x2.InitializationOnly);
				}
				this.SaveShowcase(_m, s.x2.InitializationOnly);
			});
			return;
		} catch (e) {}
		h5(() => {
			for (let e of this.defaultShowcases) {
				this.SaveShowcase(e.showcase, s.x2.InitializationOnly);
			}
		});
	}
	async MaybeUpgrade() {
		const e = await this.m_cloudStorage.GetObject(d);
		if (e < 6) {
			if (e < 4) {
				console.log("Performing sanity purge on dev-versioned showcase.");
				this.m_mapShowcases.forEach((e, t) => {
					if (
						t > 1000 &&
						(e.strCollectionId == "recent-friend-activity" ||
							e.strCollectionId == "recent-games")
					) {
						this.DeleteShowcase(t);
					}
				});
			}
			this.m_mapShowcases.forEach((e, t) => {
				if (e.strCollectionId == "recent-friend-activity") {
					this.DeleteShowcase(t);
				}
			});
			const t = Date.now();
			for (let r of this.defaultShowcases) {
				if (r.nIntroducedInVersion > e) {
					console.log(
						`Migrating showcase store for showcase ${r.showcase.nShowcaseId}, storage was on version ${e} which predates ${r.nIntroducedInVersion}`,
					);
					r.showcase.nOrder = t + r.showcase.nShowcaseId * 100;
					if (r.strInsertAfterCollectionId) {
						console.log(
							`Attempting to place showcase after ${r.strInsertAfterCollectionId}`,
						);
						const e = this.showcases;
						for (let t = 0; t < e.length; t++) {
							if (e[t].strCollectionId == r.strInsertAfterCollectionId) {
								console.log(
									`Found existing showcase at index ${t} of ${e.length}`,
								);
								if (t == e.length - 1) {
									r.showcase.nOrder = e[t].nOrder - 50;
								} else {
									r.showcase.nOrder = (e[t].nOrder + e[t + 1].nOrder) / 2;
								}
								break;
							}
						}
					}
					this.m_mapShowcases.set(r.showcase.nShowcaseId, r.showcase);
					this.SaveShowcase(r.showcase, s.x2.InitializationOnly);
				}
			}
			this.m_cloudStorage.StoreObject(d, 6);
		}
	}
	SaveShowcase(e, t) {
		const r = e.nShowcaseId.toString();
		SteamClient.Stats.RecordActivationEvent(
			"Showcases",
			this.m_mapCollectionStorage.has(r) ? "Save-Modify" : "Save-New",
		);
		return this.m_mapCollectionStorage.StoreObject(r, e, t);
	}
}
Cg([i.sH], m.prototype, "m_mapShowcases", undefined);
Cg([i.EW], m.prototype, "showcases", null);
Cg([c.oI], m.prototype, "LoadShowcaseDataFromCloud", null);
export const N = new m();
window.showcaseStore = N;
