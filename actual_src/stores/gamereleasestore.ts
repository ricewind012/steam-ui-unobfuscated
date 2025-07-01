import { FilterInPlace } from "../utils/arrayutils.js";
import { Seconds, GetUnixTime } from "../utils/time.js";
import { useCallback } from "react";
import {
	s7,
	x2 as EConflictResolutionMethod,
	HB as CStorageEntry,
} from "./81482.js";
import { observable, makeAutoObservable, autorun } from "mobx";
import { lc as EAppReleaseState } from "../../src/library/44846.js";
import { sc } from "../../src/chunk~2dcc5aaf7/92031.js";
import { o } from "../../src/chunk~2dcc5aaf7/93960.js";
import { CScheduledFunc } from "../utils/callbackutils/index.js";
import { useObserver } from "mobx-react-lite";

const ThreeHours = Seconds.PerHour * 3;
const k_strCloudDataKey = "GameReleased";
const h = "GameReleased_Merge";

function C(e, t) {
	return e < t;
}

class CGameReleaseStore {
	constructor() {
		makeAutoObservable(this);
	}

	m_cloudStorage;
	m_hPrePurchasedAppChanges;
	m_hCloudAutorun;
	m_schUpdate = new CScheduledFunc();
	m_nUpdating = 0;
	m_nShownAppID = sc;
	m_cloudData: {
		apps: {
			appid: number;
			bDismissed?: boolean;
			rtShown?: number;
			state: any;
		}[];
		lastChangeNumber: 0;
	};
	m_bForceCloudUpdate = false;

	async Register() {
		s7.RegisterCustomConflictResolutionMethod(h, f);
	}

	async Init(storage) {
		this.m_cloudStorage = storage;
		this.m_hCloudAutorun = autorun(this.ReadCloudData);
		this.m_hPrePurchasedAppChanges =
			SteamClient.Apps.RegisterForPrePurchasedAppChanges(() =>
				this.ScheduleUpdate(0),
			);
	}

	GetShownAppID() {
		return this.m_nShownAppID;
	}

	DismissShownApp() {
		if (this.m_nShownAppID == sc) {
			return;
		}
		let pShownApp = this.m_cloudData.apps.find(
			(e) => this.m_nShownAppID == e.appid,
		);
		if (pShownApp) {
			pShownApp.bDismissed = true;
			delete pShownApp.rtShown;
			this.m_bForceCloudUpdate = true;
		}
		this.m_nShownAppID = sc;
		this.ScheduleUpdate(0);
	}

	ReadCloudData() {
		let cloudData;
		let strData = this.m_cloudStorage.Get(k_strCloudDataKey);
		if (strData) {
			cloudData = JSON.parse(strData);
		}
		if (!cloudData || !Array.isArray(cloudData.apps)) {
			cloudData = {
				apps: [],
				lastChangeNumber: 0,
			};
			this.m_bForceCloudUpdate = true;
		}
		this.m_cloudData = cloudData;
		this.Update();
	}

	ScheduleUpdate(nTimeoutMS: number) {
		nTimeoutMS = Math.max(nTimeoutMS, 0);
		this.m_schUpdate.Schedule(nTimeoutMS, () => this.Update());
	}

	async Update() {
		this.m_schUpdate.Cancel();
		if (!this.m_cloudData) {
			return;
		}
		if (this.m_nUpdating > 0) {
			this.m_nUpdating++;
			return;
		}
		this.m_nUpdating = 1;
		let rgPrePurchasedApps = null;
		while (true) {
			let t = this.m_nUpdating;
			let r = this.m_cloudData.apps.map((e) => e.appid);
			rgPrePurchasedApps = await SteamClient.Apps.GetPrePurchasedApps(r);
			if (t == this.m_nUpdating) {
				break;
			}
		}
		if (
			this.m_cloudData.lastChangeNumber > rgPrePurchasedApps.lastChangeNumber
		) {
			return;
		}
		let bForceCloudUpdate = this.m_bForceCloudUpdate;
		this.m_bForceCloudUpdate = false;
		if (
			((e) => {
				let t = false;
				let r = GetUnixTime() - ThreeHours;
				for (let n of e.apps) {
					if (n.rtShown && n.rtShown <= r && !n.bDismissed) {
						n.bDismissed = true;
						delete n.rtShown;
						t = true;
					}
				}
				return t;
			})(this.m_cloudData)
		) {
			bForceCloudUpdate = true;
		}
		if (
			((cloudData, rgApps) => {
				let r = false;
				for (let app of rgApps) {
					if (!cloudData.apps.find((e) => app.nAppID == e.appid)) {
						cloudData.apps.push({
							appid: app.nAppID,
							state: app.eState,
						});
						r = true;
					}
				}
				FilterInPlace(cloudData.apps, (app) => {
					let n = rgApps.find((t) => t.nAppID == app.appid);
					if (n) {
						if (C(app.state, n.eState)) {
							app.state = n.eState;
							delete app.rtShown;
							delete app.bDismissed;
							r = true;
						}
						return (
							app.state != EAppReleaseState.k_EAppReleaseState_Released ||
							!app.bDismissed ||
							!app.bDismissed ||
							((r = true), false)
						);
					} else {
						r = true;
						return false;
					}
				});
				return r;
			})(this.m_cloudData, rgPrePurchasedApps.apps)
		) {
			bForceCloudUpdate = true;
		}
		let [bFoundDownloadableApp, pDownloadableApp] = ((e) => {
			let bFoundDownloadableApp = false;
			let pDownloadableApp = e.apps.find((e) => e.rtShown && !e.bDismissed);
			if (!pDownloadableApp) {
				pDownloadableApp = e.apps.find((e) => {
					return (
						!e.bDismissed &&
						((t = e.state) == EAppReleaseState.k_EAppReleaseState_PreloadOnly ||
							t == EAppReleaseState.k_EAppReleaseState_Released)
					);
					var t;
				});
				if (pDownloadableApp) {
					pDownloadableApp.rtShown = GetUnixTime();
					bFoundDownloadableApp = true;
				}
			}
			return [bFoundDownloadableApp, pDownloadableApp];
		})(this.m_cloudData);
		if (bFoundDownloadableApp) {
			bForceCloudUpdate = true;
		}
		if (
			this.m_cloudData.lastChangeNumber != rgPrePurchasedApps.lastChangeNumber
		) {
			this.m_cloudData.lastChangeNumber = rgPrePurchasedApps.lastChangeNumber;
			bForceCloudUpdate = true;
		}
		if (pDownloadableApp) {
			this.m_nShownAppID = pDownloadableApp.appid;
			let e = GetUnixTime() - pDownloadableApp.rtShown;
			let t = ThreeHours - e;
			this.ScheduleUpdate(t * 1000);
		} else {
			this.m_nShownAppID = sc;
		}
		if (bForceCloudUpdate) {
			this.m_cloudStorage.StoreObject(
				k_strCloudDataKey,
				this.m_cloudData,
				EConflictResolutionMethod.CustomMethod,
				h,
			);
		}
		this.m_nUpdating = 0;
	}
}

function f(e, t) {
	let json;
	let pCloudData;
	let i = JSON.parse(e.value);
	let a = JSON.parse(t.value);
	if (i.lastChangeNumber > a.lastChangeNumber) {
		json = i;
		pCloudData = a;
	} else {
		json = a;
		pCloudData = i;
	}
	for (let app of json.apps) {
		let t = pCloudData.apps.find((t) => t.appid == app.appid);
		if (t) {
			if (C(app.state, t.state)) {
				app = t;
			} else if (app.state == t.state) {
				app.bDismissed = !!app.bDismissed || !!t.bDismissed;
				if (app.bDismissed) {
					delete app.rtShown;
				}
			}
		}
	}
	let pJSONData = JSON.stringify(json);
	return new CStorageEntry(
		t.key,
		Math.max(e.timestamp, t.timestamp),
		false,
		pJSONData,
		t.conflictResolutionMethod,
		t.strMethodId,
	);
}
Cg([observable], CGameReleaseStore.prototype, "m_nShownAppID", undefined);
Cg([o], CGameReleaseStore.prototype, "DismissShownApp", null);
Cg([o], CGameReleaseStore.prototype, "ReadCloudData", null);
Cg([o], CGameReleaseStore.prototype, "ScheduleUpdate", null);
Cg([o], CGameReleaseStore.prototype, "Update", null);
export const X$ = new CGameReleaseStore();

export function i5() {
	return useObserver(() => X$.GetShownAppID());
}

export function JV() {
	return useCallback(() => X$.DismissShownApp(), []);
}

window.gameReleaseStore = X$;
