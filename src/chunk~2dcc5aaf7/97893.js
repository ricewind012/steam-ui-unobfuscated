import { Localize } from "../../actual_src/utils/localization.js";
import { LocalizeTimeRemaining } from "../../actual_src/utils/localization/datetime.js";
import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a, { q3 } from "./90095.js";
import s from "./32493.js";
import o from "./96593.js";
import l from "./5640.js";
import { lY } from "./51095.js";
import u from "./44846.js";
import p from "./12176.js";
import { CCallbackList } from "../../actual_src/utils/callbackutils";
import h from "./52698.js";
import C from "./83599.js";
import { KV } from "./46382.js";
import { I } from "./61416.js";
import { OQ } from "./31958.js";
const d = {
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
const y = new C.wd("DownloadsStore").Debug;
export function zM() {
	return q3(() => hj.DownloadOverview);
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
			e.progress[u.tg.k_EAppUpdateProgress_Download].bytes_in_progress,
		e.progress.reduce((e, t) => e + t.bytes_total, 0) -
			e.progress[u.tg.k_EAppUpdateProgress_Download].bytes_total,
	];
}
export function MD(e) {
	return w(...vO(e));
}
export function bm(e) {
	return e.progress[u.tg.k_EAppUpdateProgress_Download].bytes_in_progress;
}
export function v_(e) {
	return e.progress[u.tg.k_EAppUpdateProgress_Download].bytes_total;
}
export function Z5(e) {
	return e.progress[u.tg.k_EAppUpdateProgress_Staging].bytes_total;
}
export function JD(e) {
	return w(bm(e), v_(e));
}
function R(e) {
	return e.update_type_info.reduce(
		(e, t) =>
			e + t.progress[u.tg.k_EAppUpdateProgress_Download].bytes_in_progress,
		0,
	);
}
export function R2(e) {
	return e.update_type_info.reduce(
		(e, t) => e + t.progress[u.tg.k_EAppUpdateProgress_Download].bytes_total,
		0,
	);
}
export function vH(e) {
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
	const e = zM().update_state;
	const t = q3(() => hj.QueuedTransfers);
	const r = q3(() => hj.CompletedTransfers);
	const t_length = t.length;
	const r_length = r.length;
	const s = t_length + r_length;
	if (e == "Downloading") {
		return Localize("#BottomBar_Downloading_Progress", r_length + 1, s);
	} else {
		return Localize(`#Downloads_State_${e}`);
	}
}
export function JS() {
	return q3(() =>
		hj.RecentlyCompleted.filter((e) => {
			const t = o.tw.GetAppOverviewByAppID(e.appid);
			return t && t.local_per_client_data?.installed;
		}),
	);
}
export class Um {
	historyItems = [];
	peakNetworkBytesPerSecond = 0;
	peakDiskBytesPerSecond = 0;
	totalBytes = 0;
	constructor() {
		Gn(this);
		for (let e = 0; e < 130; e++) {
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
Cg([i.sH.shallow], Um.prototype, "historyItems", undefined);
Cg([i.sH], Um.prototype, "peakNetworkBytesPerSecond", undefined);
Cg([i.sH], Um.prototype, "peakDiskBytesPerSecond", undefined);
Cg([i.sH], Um.prototype, "totalBytes", undefined);
const P = "DownloadsStoreRecentlyCompleted";
class L {
	m_DownloadOverview = d;
	m_DownloadHistory = new Um();
	m_DownloadItems = [];
	m_mapRecentDownloadPreviousBuilds = new Map();
	m_rgRecentlyCompleted = [];
	m_MachineStorage = new h.g();
	m_fnCallbackOnDownloadItemsUpdate = new CCallbackList();
	m_cmInterface = null;
	constructor() {
		Gn(this);
		this.m_MachineStorage.GetObject(P).then((e) => {
			if (e && e.version == 2) {
				this.m_rgRecentlyCompleted = e.data || [];
			} else {
				this.m_rgRecentlyCompleted = [];
			}
			y("Init recently completed", this.m_rgRecentlyCompleted);
		});
	}
	Init(e) {
		this.m_cmInterface = e;
		SteamClient.Downloads.RegisterForDownloadOverview(this.OnDownloadOverview);
		SteamClient.Downloads.RegisterForDownloadItems(this.OnDownloadItems);
	}
	RegisterForDownloadItemsUpdate(e) {
		const t = this.m_fnCallbackOnDownloadItemsUpdate.Register(e);
		e(true);
		return t;
	}
	OnDownloadOverview(e) {
		this.m_DownloadOverview = e;
		this.m_DownloadOverview.history = undefined;
		this.m_DownloadHistory.historyItems = e.history;
		this.m_DownloadHistory.peakNetworkBytesPerSecond = Math.max(
			...e.history.map((e) => e.network_bytes_per_second),
		);
		this.m_DownloadHistory.peakDiskBytesPerSecond = Math.max(
			...e.history.map((e) => e.disc_bytes_per_second),
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
	RecentlyCompletedSortFunction(e, t) {
		return t.completed_time - e.completed_time || t.appid - e.appid;
	}
	UpdateRecentlyCompleted(e) {
		let t = e.filter((e) => {
			const t = e.update_type_info[u.$6.k_EAppUpdateContentType_Content];
			return (
				e.completed &&
				(t.has_update || t.completed) &&
				t.progress[u.tg.k_EAppUpdateProgress_Download].bytes_total > 0 &&
				e.buildid != 0
			);
		});
		y("Completed items:", t);
		t = t.filter(
			(e) =>
				!this.m_rgRecentlyCompleted.find(
					(t) => t.appid == e.appid && t.completed_time >= e.completed_time,
				),
		);
		y("Filtered items:", t);
		if (t.length == 0) {
			return;
		}
		t = t.map((e) => ({
			...e,
			buildid: this.m_mapRecentDownloadPreviousBuilds.get(e.appid) ?? e.buildid,
		}));
		let r = this.m_rgRecentlyCompleted.filter(
			(e) => !t.find((t) => t.appid == e.appid),
		);
		y("Removed updated apps:", r);
		r.push(...t);
		y("Added new apps:", r);
		r.sort(this.RecentlyCompletedSortFunction);
		y("Sorted:", r);
		r = r.slice(0, 10);
		y("Truncated:", r);
		this.m_rgRecentlyCompleted = r;
		this.m_MachineStorage.StoreObject(P, {
			version: 2,
			data: this.m_rgRecentlyCompleted,
		});
	}
	OnDownloadItems(e, t) {
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
			y(`item: ${e.appid}`);
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
		return this.m_rgRecentlyCompleted.filter(
			(e) => !l.jR.BIsAppBlocked(e.appid),
		);
	}
	get AllTransfers() {
		return this.m_DownloadItems;
	}
	get QueuedTransfers() {
		const e = this.AllTransfers.filter(
			(e) => e.queue_index !== -1 && e.deferred_time == 0,
		);
		e.sort((e, t) => e.queue_index - t.queue_index);
		return e;
	}
	get UnqueuedTransfers() {
		const e = this.AllTransfers.filter(
			(e) =>
				!e.active && !e.completed && e.queue_index == -1 && !e.deferred_time,
		);
		e.sort((e, t) => {
			const r = o.tw.GetAppOverviewByAppID(e.appid);
			const n = o.tw.GetAppOverviewByAppID(t.appid);
			return lY(r.sort_as, n.sort_as);
		});
		return e;
	}
	get ScheduledTransfers() {
		const e = this.AllTransfers.filter(
			(e) => e.queue_index === -1 && e.deferred_time && !e.completed,
		);
		e.sort((e, t) => e.deferred_time - t.deferred_time);
		return e;
	}
	get CompletedTransfers() {
		const e = this.AllTransfers.filter((e) => e.completed);
		e.sort((e, t) => {
			if (e.completed_time == t.completed_time) {
				const r = o.tw.GetAppOverviewByAppID(e.appid);
				const n = o.tw.GetAppOverviewByAppID(t.appid);
				return lY(r.sort_as, n.sort_as);
			}
			return t.completed_time - e.completed_time;
		});
		return e;
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
			const e = p.w.Init(s.b1);
			const n = e.Body().add_requests();
			n.set_appid(appid);
			n.set_start_build_id(buildid + 1);
			e.Body().set_count(100);
			const a = await s.oH.GetPartnerEventsByBuildIDRange(i, e);
			if (a.GetEResult() == 1) {
				return a
					.Body()
					.toObject()
					.matches.sort((e, t) => t.build_id - e.build_id);
			}
			throw a.GetErrorMessage();
		},
		enabled: Boolean(
			appid && buildid && target_buildid && target_buildid > buildid,
		),
	});
}
Cg([i.sH], L.prototype, "m_DownloadOverview", undefined);
Cg([i.sH], L.prototype, "m_DownloadHistory", undefined);
Cg([i.sH], L.prototype, "m_DownloadItems", undefined);
Cg([i.sH.shallow], L.prototype, "m_rgRecentlyCompleted", undefined);
Cg([i.XI.bound], L.prototype, "OnDownloadOverview", null);
Cg([i.XI], L.prototype, "UpdateRecentlyCompleted", null);
Cg([i.XI.bound], L.prototype, "OnDownloadItems", null);
export const hj = new L();
window.downloadsStore = hj;
