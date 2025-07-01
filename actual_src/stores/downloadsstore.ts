// Webpack module ID: 97893

import { Localize } from "../utils/localization.js";
import { LocalizeTimeRemaining } from "../utils/localization/datetime.js";
import { useObserver } from "mobx-react-lite";
import { b1, oH } from "./32493.js";
import { tw } from "./96593.js";
import { jR } from "./5640.js";
import { lY } from "./51095.js";
import { tg, $6 } from "./44846.js";
import { w as w_1 } from "./12176.js";
import { CCallbackList } from "../utils/callbackutils/index.js";
import { g } from "./52698.js";
import { wd as CLogger } from "./83599.js";
import { KV } from "./46382.js";
import { I } from "./61416.js";
import { OQ } from "./31958.js";
import { action, makeAutoObservable, observable } from "mobx";

const DownloadOverview_t = {
	paused: false,
	update_appid: 0,
	update_start_time: 0,
	update_state_flags: 0,
	update_state: "None",
	update_seconds_remaining: 0,
	update_is_install: false,
	update_is_workshop: false,
	update_publishedfileid: "",
	update_is_shader: false,
	update_is_prefetch_estimate: false,
	update_network_bytes_per_second: 0,
	update_peak_network_bytes_per_second: 0,
	update_disc_bytes_per_second: 0,
	throttling_suspended: false,
	lan_peer_hostname: "",
	update_is_upload: false,
	progress: [
		{
			bytes_in_progress: 0,
			bytes_total: 0,
		},
		{
			bytes_in_progress: 0,
			bytes_total: 0,
		},
		{
			bytes_in_progress: 0,
			bytes_total: 0,
		},
		{
			bytes_in_progress: 0,
			bytes_total: 0,
		},
		{
			bytes_in_progress: 0,
			bytes_total: 0,
		},
		{
			bytes_in_progress: 0,
			bytes_total: 0,
		},
		{
			bytes_in_progress: 0,
			bytes_total: 0,
		},
	],
};
const logger = new CLogger("DownloadsStore").Debug;

export function zM() {
	return useObserver(() => hj.DownloadOverview);
}

function w(e, t) {
	if (t == 0) {
		return 0;
	} else {
		return OQ(Math.trunc((e * 100) / t), e > 0 ? 1 : 0, 100);
	}
}

export function vO(e) {
	return [
		e.progress.reduce((e, t) => e + t.bytes_in_progress, 0) -
			e.progress[tg.k_EAppUpdateProgress_Download].bytes_in_progress,
		e.progress.reduce((e, t) => e + t.bytes_total, 0) -
			e.progress[tg.k_EAppUpdateProgress_Download].bytes_total,
	];
}

export function MD(e) {
	return w(...vO(e));
}

export function bm(e) {
	return e.progress[tg.k_EAppUpdateProgress_Download].bytes_in_progress;
}

export function v_(e) {
	return e.progress[tg.k_EAppUpdateProgress_Download].bytes_total;
}

export function Z5(e) {
	return e.progress[tg.k_EAppUpdateProgress_Staging].bytes_total;
}

export function JD(e) {
	return w(bm(e), v_(e));
}

function R(e) {
	return e.update_type_info.reduce(
		(e, t) =>
			e + t.progress[tg.k_EAppUpdateProgress_Download].bytes_in_progress,
		0,
	);
}

export function R2(e) {
	return e.update_type_info.reduce(
		(e, t) => e + t.progress[tg.k_EAppUpdateProgress_Download].bytes_total,
		0,
	);
}

export function vH(e) {
	// lmao
	{
		let t = 0;
		let r = 0;
		for (let n of e.update_type_info) {
			let [e, i] = vO(n);
			t += e;
			r += i;
		}
		return [t, r];
	}
}

export function eC(e) {
	return w(...vH(e));
}

export function B7() {
	const eState = zM().update_state;
	const vecQueuedTransfers = useObserver(() => hj.QueuedTransfers);
	const vecCompletedTransfers = useObserver(() => hj.CompletedTransfers);
	const cQueued = vecQueuedTransfers.length;
	const cCompleted = vecCompletedTransfers.length;
	const nTotalProgress = cQueued + cCompleted;

	if (eState == "Downloading") {
		return Localize(
			"#BottomBar_Downloading_Progress",
			cCompleted + 1,
			nTotalProgress,
		);
	} else {
		return Localize(`#Downloads_State_${eState}`);
	}
}

export function JS() {
	return useObserver(() =>
		hj.RecentlyCompleted.filter((e) => {
			const overview = tw.GetAppOverviewByAppID(e.appid);
			return overview && overview.local_per_client_data?.installed;
		}),
	);
}

export class Um {
	@observable historyItems = [];
	@observable peakNetworkBytesPerSecond = 0;
	@observable peakDiskBytesPerSecond = 0;
	@observable totalBytes = 0;

	constructor() {
		makeAutoObservable(this);
		for (let i = 0; i < 130; i++) {
			this.historyItems.push({
				appid: 0,
				rt_sample_time: 0,
				disc_bytes_per_second: 0,
				network_bytes_per_second: 0,
				is_upload: false,
			});
		}
	}
}

const k_strRecentlyCompletedStorageKey = "DownloadsStoreRecentlyCompleted";
class CDownloadsStore {
	@observable m_DownloadOverview = DownloadOverview_t;
	@observable m_DownloadHistory = new Um();
	@observable m_DownloadItems = [];
	m_mapRecentDownloadPreviousBuilds = new Map();
	@observable m_rgRecentlyCompleted = [];
	m_MachineStorage = new g();
	m_fnCallbackOnDownloadItemsUpdate = new CCallbackList();
	m_cmInterface = null;

	constructor() {
		makeAutoObservable(this);
		this.m_MachineStorage
			.GetObject(k_strRecentlyCompletedStorageKey)
			.then((result) => {
				if (result && result.version == 2) {
					this.m_rgRecentlyCompleted = result.data || [];
				} else {
					this.m_rgRecentlyCompleted = [];
				}
				logger("Init recently completed", this.m_rgRecentlyCompleted);
			});
	}

	Init(cm) {
		this.m_cmInterface = cm;
		SteamClient.Downloads.RegisterForDownloadOverview(this.OnDownloadOverview);
		SteamClient.Downloads.RegisterForDownloadItems(this.OnDownloadItems);
	}

	RegisterForDownloadItemsUpdate(e) {
		const callback = this.m_fnCallbackOnDownloadItemsUpdate.Register(e);
		e(true);
		return callback;
	}

	@action OnDownloadOverview(overview) {
		this.m_DownloadOverview = overview;
		this.m_DownloadOverview.history = undefined;
		this.m_DownloadHistory.historyItems = overview.history;
		this.m_DownloadHistory.peakNetworkBytesPerSecond = Math.max(
			...overview.history.map((e) => e.network_bytes_per_second),
		);
		this.m_DownloadHistory.peakDiskBytesPerSecond = Math.max(
			...overview.history.map((e) => e.disc_bytes_per_second),
		);
		this.m_DownloadHistory.totalBytes =
			this.m_DownloadItems.reduce(
				(e, t) =>
					t.appid == this.m_DownloadOverview.update_appid &&
					bm(this.m_DownloadOverview)
						? e
						: e + R(t),
				0,
			) + bm(this.m_DownloadOverview);
	}

	RecentlyCompletedSortFunction(lhs, rhs) {
		return rhs.completed_time - lhs.completed_time || rhs.appid - lhs.appid;
	}

	@action UpdateRecentlyCompleted(vecItems: any[]) {
		let vecCompleted = vecItems.filter((e) => {
			const t = e.update_type_info[$6.k_EAppUpdateContentType_Content];
			return (
				e.completed &&
				(t.has_update || t.completed) &&
				t.progress[tg.k_EAppUpdateProgress_Download].bytes_total > 0 &&
				e.buildid != 0
			);
		});
		logger("Completed items:", vecCompleted);

		vecCompleted = vecCompleted.filter(
			(e) =>
				!this.m_rgRecentlyCompleted.find(
					(t) => t.appid == e.appid && t.completed_time >= e.completed_time,
				),
		);
		logger("Filtered items:", vecCompleted);

		if (vecCompleted.length == 0) {
			return;
		}

		vecCompleted = vecCompleted.map((e) => ({
			...e,
			buildid: this.m_mapRecentDownloadPreviousBuilds.get(e.appid) ?? e.buildid,
		}));
		let vecRemovedUpdated = this.m_rgRecentlyCompleted.filter(
			(e) => !vecCompleted.find((t) => t.appid == e.appid),
		);
		logger("Removed updated apps:", vecRemovedUpdated);

		vecRemovedUpdated.push(...vecCompleted);
		logger("Added new apps:", vecRemovedUpdated);

		vecRemovedUpdated.sort(this.RecentlyCompletedSortFunction);
		logger("Sorted:", vecRemovedUpdated);

		vecRemovedUpdated = vecRemovedUpdated.slice(0, 10);
		logger("Truncated:", vecRemovedUpdated);

		this.m_rgRecentlyCompleted = vecRemovedUpdated;
		this.m_MachineStorage.StoreObject(k_strRecentlyCompletedStorageKey, {
			version: 2,
			data: this.m_rgRecentlyCompleted,
		});
	}

	@action OnDownloadItems(e, t) {
		const r = this.m_DownloadItems.map((e) => e.appid);
		const n = t.map((e) => e.appid);
		const i = r.filter((e) => !n.includes(e));
		const a = n.filter((e) => !r.includes(e));
		if (e || a.length || a.length || i.length) {
			this.m_DownloadItems = t;
			e = true;
		} else {
			this.m_DownloadItems.forEach((e, r) => {
				Object.assign(
					this.m_DownloadItems[r],
					t.find((t) => t.appid == e.appid),
				);
			});
		}
		this.m_DownloadItems.forEach((e) => {
			if (!this.m_mapRecentDownloadPreviousBuilds.has(e.appid)) {
				this.m_mapRecentDownloadPreviousBuilds.set(e.appid, e.buildid);
			}
		});
		this.m_DownloadHistory.totalBytes =
			this.m_DownloadItems.reduce(
				(e, t) =>
					t.appid == this.m_DownloadOverview.update_appid &&
					bm(this.m_DownloadOverview)
						? e
						: e + R(t),
				0,
			) + bm(this.m_DownloadOverview);
		this.UpdateRecentlyCompleted(this.m_DownloadItems);
		i.forEach((e) => this.m_mapRecentDownloadPreviousBuilds.delete(e));
		this.m_fnCallbackOnDownloadItemsUpdate.Dispatch(e);
	}

	get report() {
		this.m_DownloadItems.forEach((e) => {
			logger(`item: ${e.appid}`);
		});
		return `num downloads: ${this.m_DownloadItems.length} paused: ${this.m_DownloadOverview.paused}`;
	}

	GetDownloadItemForAppId(e) {
		return this.m_DownloadItems.find((t) => t.appid == e);
	}

	get DownloadOverview() {
		return this.m_DownloadOverview;
	}

	get DownloadHistory() {
		return this.m_DownloadHistory;
	}

	get RecentlyCompleted() {
		return this.m_rgRecentlyCompleted.filter((e) => !jR.BIsAppBlocked(e.appid));
	}

	get AllTransfers() {
		return this.m_DownloadItems;
	}

	get QueuedTransfers() {
		const vec = this.AllTransfers.filter(
			(e) => e.queue_index !== -1 && e.deferred_time == 0,
		);
		vec.sort((e, t) => e.queue_index - t.queue_index);
		return vec;
	}

	get UnqueuedTransfers() {
		const vec = this.AllTransfers.filter(
			(e) =>
				!e.active && !e.completed && e.queue_index == -1 && !e.deferred_time,
		);
		vec.sort((e, t) => {
			const r = tw.GetAppOverviewByAppID(e.appid);
			const n = tw.GetAppOverviewByAppID(t.appid);
			return lY(r.sort_as, n.sort_as);
		});
		return vec;
	}

	get ScheduledTransfers() {
		const vec = this.AllTransfers.filter(
			(e) => e.queue_index === -1 && e.deferred_time && !e.completed,
		);
		vec.sort((e, t) => e.deferred_time - t.deferred_time);
		return vec;
	}

	get CompletedTransfers() {
		const vec = this.AllTransfers.filter((e) => e.completed);
		vec.sort((e, t) => {
			if (e.completed_time == t.completed_time) {
				const overview1 = tw.GetAppOverviewByAppID(e.appid);
				const overview2 = tw.GetAppOverviewByAppID(t.appid);
				return lY(overview1.sort_as, overview2.sort_as);
			}
			return t.completed_time - e.completed_time;
		});
		return vec;
	}

	get downloadTimeRemaining() {
		if (this.m_DownloadOverview.update_seconds_remaining == -1) {
			return "";
		} else if (this.m_DownloadOverview.update_seconds_remaining <= 60) {
			return Localize(
				"#Downloads_State_SecondsRemaining",
				this.m_DownloadOverview.update_seconds_remaining,
			);
		} else {
			return Localize(
				"#Downloads_State_MinutesRemaining",
				Math.floor(this.m_DownloadOverview.update_seconds_remaining / 60),
			);
		}
	}

	LocalizeTimeRemaining(e) {
		return LocalizeTimeRemaining(e);
	}
}

export function dZ(e) {
	const { appid, buildid, target_buildid } = e;
	const i = KV();
	return I({
		queryKey: ["patchnotes", appid, buildid, target_buildid],
		queryFn: async () => {
			const e = w_1.Init(b1);
			const n = e.Body().add_requests();
			n.set_appid(appid);
			n.set_start_build_id(buildid + 1);
			e.Body().set_count(100);

			const partnerEvents = await oH.GetPartnerEventsByBuildIDRange(i, e);
			if (partnerEvents.GetEResult() == 1) {
				return partnerEvents
					.Body()
					.toObject()
					.matches.sort((e, t) => t.build_id - e.build_id);
			}
			throw partnerEvents.GetErrorMessage();
		},
		enabled: Boolean(
			appid && buildid && target_buildid && target_buildid > buildid,
		),
	});
}

export const hj = new CDownloadsStore();
window.downloadsStore = hj;
