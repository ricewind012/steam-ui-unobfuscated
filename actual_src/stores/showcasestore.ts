import { md as CollectionStore } from "./collectionstore.js";
import { x2 as EConflictResolutionMethod } from "./81482.js";
import { A as CStorage_Local } from "../../src/library/88696.js";
import { O as CStorage_Roaming } from "../../src/chunk~2dcc5aaf7/63032.js";
import { computed, makeAutoObservable, observable, runInAction } from "mobx";
import { bind } from "../utils/bind.js";

interface Showcase_t {
	nLastChangedMS?: number;
	nOrder?: number;
	nShowcaseId: number;
	strCollectionId: string;
	eSortBy: number;
	bDeleting?: boolean;
	bExpanded?: boolean;
}

const ShowcaseBase_t = {
	nShowcaseId: -1,
	strCollectionId: "",
	eSortBy: 1,
	bExpanded: false,
};

const k_strShowcasesStorageKey = "showcases";
const k_strShowcasesVersionStorageKey = "sc-version";

export class m {
	constructor() {
		makeAutoObservable(this);
	}

	m_cloudStorage;
	m_mapCollectionStorage;
	m_localStorage = new CStorage_Local();
	m_roamingStorage = new CStorage_Roaming();
	@observable m_mapShowcases = new Map<number, Showcase_t>();

	async Init(storage) {
		this.m_cloudStorage = storage;
		this.m_mapCollectionStorage = this.m_cloudStorage.GetMapForPrefix(
			`${k_strShowcasesStorageKey}.`,
		);
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

	@computed get showcases() {
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

	AddNewShowcase(strCollectionId = "") {
		const dt = Date.now();
		const showcase: Showcase_t = {
			nShowcaseId: dt,
			strCollectionId,
			eSortBy: 1,
			nLastChangedMS: Date.now(),
		};
		this.m_mapShowcases.set(dt, showcase);
		this.SaveShowcase(showcase);
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

	get defaultShowcases(): {
		nIntroducedInVersion: number;
		strInsertAfterCollectionId?: string;
		showcase: Showcase_t;
	}[] {
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
					strCollectionId: CollectionStore.GetCollectionForAppType(1).id,
					eSortBy: 1,
					bExpanded: true,
				},
			},
			{
				nIntroducedInVersion: 0,
				showcase: ShowcaseBase_t,
			},
		];
	}

	@bind LoadShowcaseDataFromCloud() {
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
			const e = await this.m_roamingStorage.GetObject(k_strShowcasesStorageKey);
			runInAction(() => {
				for (let t of e) {
					this.SaveShowcase(t, EConflictResolutionMethod.InitializationOnly);
				}
				this.SaveShowcase(
					ShowcaseBase_t,
					EConflictResolutionMethod.InitializationOnly,
				);
			});
			return;
		} catch (e) {}
		runInAction(() => {
			for (let e of this.defaultShowcases) {
				this.SaveShowcase(
					e.showcase,
					EConflictResolutionMethod.InitializationOnly,
				);
			}
		});
	}

	async MaybeUpgrade() {
		const nVersion = await this.m_cloudStorage.GetObject(
			k_strShowcasesVersionStorageKey,
		);
		if (nVersion < 6) {
			if (nVersion < 4) {
				console.log("Performing sanity purge on dev-versioned showcase.");
				this.m_mapShowcases.forEach((showcase, index) => {
					if (
						index > 1000 &&
						(showcase.strCollectionId == "recent-friend-activity" ||
							showcase.strCollectionId == "recent-games")
					) {
						this.DeleteShowcase(index);
					}
				});
			}
			this.m_mapShowcases.forEach((showcase, index) => {
				if (showcase.strCollectionId == "recent-friend-activity") {
					this.DeleteShowcase(index);
				}
			});
			const dt = Date.now();
			for (let r of this.defaultShowcases) {
				if (r.nIntroducedInVersion > nVersion) {
					console.log(
						`Migrating showcase store for showcase ${r.showcase.nShowcaseId}, storage was on version ${nVersion} which predates ${r.nIntroducedInVersion}`,
					);
					r.showcase.nOrder = dt + r.showcase.nShowcaseId * 100;
					if (r.strInsertAfterCollectionId) {
						console.log(
							`Attempting to place showcase after ${r.strInsertAfterCollectionId}`,
						);
						const rgShowcases = this.showcases;
						for (let i = 0; i < rgShowcases.length; i++) {
							if (
								rgShowcases[i].strCollectionId == r.strInsertAfterCollectionId
							) {
								console.log(
									`Found existing showcase at index ${i} of ${rgShowcases.length}`,
								);
								if (i == rgShowcases.length - 1) {
									r.showcase.nOrder = rgShowcases[i].nOrder - 50;
								} else {
									r.showcase.nOrder =
										(rgShowcases[i].nOrder + rgShowcases[i + 1].nOrder) / 2;
								}
								break;
							}
						}
					}
					this.m_mapShowcases.set(r.showcase.nShowcaseId, r.showcase);
					this.SaveShowcase(
						r.showcase,
						EConflictResolutionMethod.InitializationOnly,
					);
				}
			}
			this.m_cloudStorage.StoreObject(k_strShowcasesVersionStorageKey, 6);
		}
	}

	SaveShowcase(showcase: Showcase_t, t?) {
		const strID = showcase.nShowcaseId.toString();
		SteamClient.Stats.RecordActivationEvent(
			"Showcases",
			this.m_mapCollectionStorage.has(strID) ? "Save-Modify" : "Save-New",
		);
		return this.m_mapCollectionStorage.StoreObject(strID, showcase, t);
	}
}
export const N = new m();
window.showcaseStore = N;
