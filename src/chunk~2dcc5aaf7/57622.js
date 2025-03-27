import * as n from "./34629.js";
import * as i from "./89193.js";
import * as a from "./52451.js";
import * as s from "./12176.js";
import * as o from "./44926.js";
import * as l from "./99104.js";
import * as c from "./22588.js";
import * as m from "./84629.js";
import * as u from "./67429.js";
import * as d from "./49455.js";
import * as A from "./43691.js";
import { LocalizeRtime32ToShortDate } from "../../actual_src/utils/localization.js";
export const k_strGRFAQ = "23B7-49AD-4A28-9590";
export class CGameRecordingStore {
	constructor() {
		(0, i.Gn)(this);
	}
	m_rgAppsWithBackgroundVideo = [];
	m_mapTimelineLoaders = new Map();
	m_mapClipLoaders = new Map();
	m_mapSharedClipLoaders = new Map();
	m_mapActiveTimelines = new Map();
	m_mapManualRecordingCallbacks = new Map();
	m_fnGetAchievementInfo;
	m_strLastClipID;
	m_transport;
	m_bLoadingClips = true;
	m_bLoadingAppsWithBackgroundVideo = true;
	m_bClipLoadingTriggered = false;
	m_clips = new Map();
	m_clipsGroupByGame = new Map();
	m_clipExportProgress = new Map();
	m_currentlyExportingClip = null;
	m_recordingState = null;
	m_bEnoughDiskSpace = false;
	async Init(e, t) {
		this.m_transport = e;
		this.m_fnGetAchievementInfo = t;
		if (A.TS.IN_STEAMUI) {
			o.xM.RegisterForNotifyTimelineChanged(this.OnTimelineChanged);
			o.xM.RegisterForNotifyRecordingSessionChanged(
				this.OnRecordingSessionChanged,
			);
			o.xM.RegisterForNotifyTimelineEntryChanged(this.OnTimelineEntryChanged);
			o.xM.RegisterForNotifyTimelineEntryRemoved(this.OnTimelineEntryRemoved);
			o.xM.RegisterForNotifyClipCreated(this.OnClipCreated);
			o.xM.RegisterForNotifyExportProgress(this.OnExportProgress);
			o.xM.RegisterForNotifyLowDiskSpace(this.OnLowDiskSpace);
			await this.LoadAppsWithBackgroundVideo();
			await this.CheckEnoughDiskSpace();
		}
	}
	GetAppsWithBackgroundVideo() {
		return this.m_rgAppsWithBackgroundVideo;
	}
	GetTimelineLoaderForGame(e) {
		(0, d.w)(e, `Invalid GameID: ${e}`);
		let t = this.m_mapTimelineLoaders.get(e);
		if (!t) {
			let r = new c.SX();
			r.LoadTimelinesForBackgroundVideo(e);
			t = {
				loader: r,
				nRefCount: 0,
			};
			this.m_mapTimelineLoaders.set(e, t);
		}
		t.nRefCount++;
		(0, m.tG)(
			`CGameRecordingStore::GetTimelineLoaderForGame incrementing refCount ${
				t.nRefCount
			} for ${e}${t.nRefCount == 1 ? " and it was created" : ""}`,
		);
		return {
			loader: t.loader,
			release: () => {
				t.nRefCount--;
				(0, m.tG)(
					`CGameRecordingStore::GetTimelineLoaderForGame reducing refCount ${
						t.nRefCount
					} for ${e}${t.nRefCount <= 0 ? " will delete" : ""}`,
				);
				if (t.nRefCount <= 0) {
					this.m_mapTimelineLoaders.delete(e);
				}
			},
		};
	}
	GetTimelineLoaderForClip(e) {
		(0, d.w)(e, `Invalid ClipID: ${e}`);
		let t = this.m_mapClipLoaders.get(e);
		if (!t) {
			let r = new c.SX();
			r.LoadTimelinesForClip(e);
			t = {
				loader: r,
				nRefCount: 0,
			};
			this.m_mapClipLoaders.set(e, t);
		}
		t.nRefCount++;
		return {
			loader: t.loader,
			release: () => {
				t.nRefCount--;
				if (t.nRefCount <= 0) {
					this.m_mapTimelineLoaders.delete(e);
				}
			},
		};
	}
	GetTimelineLoaderForSharedClip(e) {
		(0, d.w)(e, "Invalid clip");
		let t = this.m_mapSharedClipLoaders.get(e.clip_id);
		if (!t) {
			let r = new c.SX();
			r.LoadTimelinesForSharedClip(e);
			t = {
				loader: r,
				nRefCount: 0,
			};
			this.m_mapClipLoaders.set(e.clip_id, t);
		}
		t.nRefCount++;
		return {
			loader: t.loader,
			release: () => {
				t.nRefCount--;
				if (t.nRefCount <= 0) {
					this.m_mapTimelineLoaders.delete(e.clip_id);
				}
			},
		};
	}
	OnTimelineChanged(e) {
		if ((0, m.xv)()) {
			e.DEBUG_LogToConsole();
		}
		this.ReloadAppsWithBackgroundVideoIfNecessary(e);
		let t = e.Body().notification_type();
		let r = e.Body().timeline_id();
		let n = e.Body().game_id();
		switch (t) {
			case 1:
			case 4: {
				let t = this.GetTimelineLoaderForGame(n);
				this.m_mapActiveTimelines.set(r, t);
				t.loader.AddRunningTimeline(r, n, e.Body().start_time());
				break;
			}
			case 2: {
				let t = this.m_mapActiveTimelines.get(r);
				if (t) {
					t.loader.RunningTimelineStopped(r, e.Body().duration_ms());
					t.release();
				}
				break;
			}
			case 3: {
				let e = this.m_mapTimelineLoaders.get(n);
				if (e) {
					e.loader.TimelineDeleted(r);
				}
				break;
			}
		}
		return 1;
	}
	OnRecordingSessionChanged(e) {
		const t = e.Body().toObject();
		const r = t.game_id;
		const n = t.notification_type;
		if (this.m_mapManualRecordingCallbacks.has(r)) {
			this.m_mapManualRecordingCallbacks.get(r)(t);
		}
		switch (n) {
			case 1: {
				this.m_recordingState = {
					m_gameID: r,
				};
				break;
			}
			case 2: {
				this.m_recordingState = null;
			}
		}
		let i = this.m_mapTimelineLoaders.get(r);
		if (i) {
			i.loader.RecordingSessionChanged(t);
			return 1;
		} else {
			return 1;
		}
	}
	OnTimelineEntryChanged(e) {
		if (!e.Body().entry(false)) {
			(0, d.w)(false, "OnTimelineEntryChanged received an invalid protobuf");
			return 1;
		}
		const { entry: t } = e.Body().toObject();
		if (!t) {
			(0, d.w)(
				false,
				"OnTimelineEntryChanged received an invalid protobuf after conversion",
			);
			return 1;
		}
		const r = this.m_mapActiveTimelines.get(t.timeline_id);
		if (r) {
			const e = r.loader;
			if (e.BIsTimelineRunning(t.timeline_id)) {
				e.AddRunningTimelineEntry(t);
				return 1;
			}
		}
		if (e.Body().game_id()) {
			let r = this.m_mapTimelineLoaders.get(e.Body().game_id());
			if (r) {
				r.loader.AddEventToTimeline(
					t.timeline_id,
					parseInt(t.time),
					t.marker_icon,
					t.entry_id,
					t.marker_priority,
					t.range_title,
					t.marker_description,
					parseInt(t.range_duration),
				);
				return 1;
			}
		}
		return 1;
	}
	OnTimelineEntryRemoved(e) {
		const { entry_id: t, timeline_id: r, game_id: n } = e.Body().toObject();
		if (n) {
			const e = this.m_mapTimelineLoaders.get(n);
			if (e) {
				e.loader.RemoveTimelineEvent(r, t);
			}
		}
		return 1;
	}
	OnClipCreated(e) {
		const t = e.Body().summary().toObject();
		this.InternalAddClipSummary(t);
		(0, m.tG)("New clip saved:", t);
		return 1;
	}
	async UploadClip(e, t, r, n) {
		const i = await o.xM.UploadClipToSteam({
			clip_id: e,
			title: t,
			desc: r,
			visibility: n,
		});
		let a;
		if (i.GetEResult() == 1) {
			const e = i.Body().summary().toObject();
			this.InternalAddClipSummary(e);
			a = `${A.TS.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${e.published_file_id}`;
		}
		return {
			eResult: i.GetEResult(),
			strURL: a,
		};
	}
	async LoadAppsWithBackgroundVideo() {
		try {
			const e = await o.xM.GetAppsWithBackgroundVideo({});
			if (!e.BSuccess()) {
				this.m_bLoadingAppsWithBackgroundVideo = false;
				return;
			}
			(0, m.q_)(`Loaded ${e.Body().apps().length} apps with timelines`);
			(0, i.h5)(() => {
				this.m_bLoadingAppsWithBackgroundVideo = false;
				this.m_rgAppsWithBackgroundVideo = e
					.Body()
					.toObject()
					.apps.sort(
						(e, t) => t.most_recent_start_time - e.most_recent_start_time,
					);
			});
		} catch (e) {
			(0, m.ZI)("Failed to load apps with timelines", e);
			this.m_bLoadingAppsWithBackgroundVideo = false;
		}
	}
	ReloadAppsWithBackgroundVideoIfNecessary(e) {
		if (!this.m_rgAppsWithBackgroundVideo) {
			return;
		}
		let t = e.Body().game_id();
		if (
			((e, t) => {
				switch (e) {
					case 1: {
						return !t;
					}
					case 3: {
						return t;
					}
					default: {
						return true;
					}
				}
			})(
				e.Body().notification_type(),
				this.m_rgAppsWithBackgroundVideo.findIndex((e) => e.game_id == t) >= 0,
			)
		) {
			this.LoadAppsWithBackgroundVideo();
		}
	}
	InternalAddClipSummary(e) {
		if (this.m_clips.has(e.clip_id) && this.m_clipsGroupByGame.has(e.game_id)) {
			const t = this.m_clipsGroupByGame.get(e.game_id);
			this.m_clipsGroupByGame.set(
				e.game_id,
				t.filter((t) => t.clip_id != e.clip_id),
			);
		}
		this.m_clips.set(e.clip_id, e);
		if (!this.m_clipsGroupByGame.has(e.game_id)) {
			this.m_clipsGroupByGame.set(e.game_id, []);
		}
		this.m_clipsGroupByGame.get(e.game_id).push(e);
	}
	async SaveClip(e, t, r, n, i, a, s) {
		const l = await o.xM.SaveClip({
			game_id: e,
			start: n,
			end: i,
			name: r,
			src_clip_id: t,
			temporary: a,
			force_thumbnail: s,
		});
		if (l.GetEResult() == 1) {
			const e = l.Body().summary().toObject();
			this.InternalAddClipSummary(e);
			(0, m.tG)("Saved clip", e);
			this.m_strLastClipID = e.clip_id;
			return {
				clipSummary: e,
				result: 1,
			};
		}
		(0, m.tH)("Failed to save clip");
		return {
			result: l.GetEResult(),
		};
	}
	async DeleteClip(e) {
		const t = await o.xM.DeleteClip({
			clip_id: e,
		});
		if (t.GetEResult() == 1) {
			const t = this.m_clips.get(e);
			this.m_clips.delete(e);
			let r = this.m_clipsGroupByGame.get(t.game_id);
			let n = r.findIndex((t) => t.clip_id == e);
			r.splice(n, 1);
			(0, m.tG)("Deleted clip", e);
		} else {
			(0, m.tH)("Failed to delete clip", e);
		}
		return t.GetEResult();
	}
	async ExportClip(e, t, r, n) {
		if (this.m_currentlyExportingClip) {
			(0, m.tH)("Export in progress, cannot start another one", e);
			return 10;
		}
		this.m_clipExportProgress.set(e, {
			exportPath: t,
			progress: 0,
			resultStatus: 22,
		});
		this.m_currentlyExportingClip = e;
		const i = await o.xM.ExportClip({
			clip_id: e,
			export_mp4_path: t,
			settings: r,
			use_unique_filename: n,
		});
		if (i.GetEResult() === 1) {
			(0, m.tG)(`Exporting clip ${e} to ${t}`);
			this.m_currentlyExportingClip = null;
			this.m_clipExportProgress.set(e, {
				exportPath: t,
				progress: 1,
				resultStatus: 1,
			});
		} else {
			this.m_clipExportProgress.set(e, {
				exportPath: t,
				progress: 0,
				resultStatus: i.GetEResult(),
			});
			this.m_currentlyExportingClip = null;
			(0, m.tH)("Failed to export clip", e);
		}
		return i.GetEResult();
	}
	UpdateClipExportPath(e, t) {
		let r = this.m_clipExportProgress.get(e);
		if (r) {
			this.m_clipExportProgress.set(e, {
				...r,
				exportPath: t,
			});
		}
	}
	OnExportProgress(e) {
		const t = e.Body().clip_id();
		if (
			t &&
			this.m_clipExportProgress.has(t) &&
			this.m_currentlyExportingClip === t
		) {
			const r = this.m_clipExportProgress.get(t);
			const n = e.Body().eresult();
			if (!n && e.Body().progress() < 1) {
				this.m_clipExportProgress.set(t, {
					...r,
					progress: e.Body().progress(),
				});
				return 1;
			} else if (e.Body().progress() === 1 && n === 1) {
				this.m_currentlyExportingClip = null;
				this.m_clipExportProgress.set(t, {
					...r,
					progress: e.Body().progress(),
					resultStatus: 1,
				});
				return n;
			} else {
				this.m_currentlyExportingClip = null;
				this.m_clipExportProgress.set(t, {
					...r,
					progress: 0,
					resultStatus: e.GetEResult(),
				});
				return n;
			}
		}
		return 8;
	}
	GetClipExportProgress(e) {
		return this.m_clipExportProgress.get(e);
	}
	GetCurrentExportingClip() {
		return this.m_currentlyExportingClip;
	}
	async TakeScreenshot(e, t, r) {
		const n = await o.xM.TakeScreenshot({
			game_id: e,
			timeline_id: t,
			timeline_offset_ms: Math.floor(r).toString(),
		});
		if (n.GetEResult() == 1) {
			n.Body().toObject();
			return {
				handle: parseInt(n.Body().screenshot_id()),
				result: 1,
			};
		}
		(0, m.tH)("Failed to take screenshot");
		return {
			result: n.GetEResult(),
		};
	}
	async LazyLoadClips() {
		if (!this.m_bClipLoadingTriggered) {
			try {
				this.m_bClipLoadingTriggered = true;
				const e = await o.xM.GetClips({});
				(0, i.h5)(() => {
					e.Body()
						.clip()
						.forEach((e) => this.InternalAddClipSummary(e.toObject()));
					this.m_bLoadingClips = false;
				});
			} catch (e) {
				(0, m.ZI)("Failed to load clips", e);
				this.m_bLoadingClips = false;
			}
		}
	}
	BLoadingClips() {
		return this.m_bLoadingClips;
	}
	BLoadingAppsWithBackgroundVideo() {
		return this.m_bLoadingAppsWithBackgroundVideo;
	}
	GetClipIDs(e) {
		this.LazyLoadClips();
		if (e) {
			const t = new u.VS(e);
			return (
				this.m_clipsGroupByGame
					.get(t.ConvertTo64BitString())
					?.map((e) => e.clip_id) || []
			);
		}
		const t = [];
		this.m_clips.forEach((e) => t.push(e.clip_id));
		return t;
	}
	GetClipSummary(e) {
		this.LazyLoadClips();
		if (this.m_clips.has(e)) {
			return this.m_clips.get(e);
		} else {
			return undefined;
		}
	}
	GetClipSummaries(e) {
		this.LazyLoadClips();
		return e
			.map((e) => (this.m_clips.has(e) ? this.m_clips.get(e) : undefined))
			.filter(Boolean);
	}
	GetClipSummariesForGame(e) {
		this.LazyLoadClips();
		if (this.m_clipsGroupByGame.has(e)) {
			return [...this.m_clipsGroupByGame.get(e)];
		} else {
			return null;
		}
	}
	RegisterManualRecordingCallback(e, t) {
		this.m_mapManualRecordingCallbacks.delete(e);
		this.m_mapManualRecordingCallbacks.set(e, t);
		return () => {
			this.m_mapManualRecordingCallbacks.delete(e);
		};
	}
	async StartRecording(e) {
		(0, m.q_)("Start manual recording");
		return o.xM.StartRecording({
			game_id: e,
		});
	}
	async StopRecording(e) {
		(0, m.q_)("Stop manual recording");
		const t = await o.xM.StopRecording({
			game_id: e,
		});
		if (t.BSuccess()) {
			const e = t.Body().summary().toObject();
			this.InternalAddClipSummary(e);
		}
	}
	async SwitchRecordedGame(e) {
		(0, m.q_)(`Switch recorded game: ${e}`);
		return o.xM.SwitchBackgroundRecordingGame({
			game_id: e,
		});
	}
	async CreateUserTimelineMarkers(e, t, r) {
		const n = await o.xM.UserAddTimelineEntry({
			game_id: e,
			clip_id: t,
			entry: r,
		});
		if (n.GetEResult() == 1) {
			(0, m.tG)("User Marker Created: ", r);
		} else {
			(0, m.tH)(
				`Failed to create User Marker at ${
					r.time
				} for game ${e} with error code ${n.GetEResult()}`,
			);
		}
		return {
			eResult: n.GetEResult(),
			entry_id: n.Body().entry_id(),
		};
	}
	async UpdateUserTimelineMarkers(e, t, r) {
		const n = await o.xM.UserUpdateTimelineEntry({
			game_id: e,
			clip_id: t,
			entry: r,
		});
		if (n.GetEResult() == 1) {
			(0, m.tG)("User Marker Updated: ", r);
		} else {
			(0, m.tH)(
				`Failed to Update existing User Marker ${r.entry_id} at ${
					r.time
				} time under timeline ${
					r.timeline_id
				} for game ${e} with error code ${n.GetEResult()}`,
			);
		}
		return n.GetEResult();
	}
	async RemoveUserTimelineMarker(e, t, r, n) {
		const i = await o.xM.UserRemoveTimelineEntry({
			game_id: e,
			clip_id: t,
			entry_id: n,
			timeline_id: r,
		});
		if (i.GetEResult() == 1) {
			(0, m.tG)(`User Marker remove at ${n}`);
		} else {
			(0, m.tH)(
				`Failed to remove User Marker id ${n} for game ${e} on timeline ${r} with error code ${i.GetEResult()}`,
			);
		}
		return i.GetEResult();
	}
	async LoadThumbnails(e, t, r, n, i, a) {
		return (
			await o.xM.GetThumbnails({
				recording_id: e,
				clip_id: t,
				timeline_id: r,
				start_offset_us: n.map((e) => Math.floor(e).toString()),
				major_axis: i,
				time_precision: a ? 0 : 1,
			})
		)
			.Body()
			.thumbnails();
	}
	GetAchievementInfo(e, t) {
		return this.m_fnGetAchievementInfo?.(e, t);
	}
	GetLastClip() {
		if (this.m_strLastClipID) {
			return this.m_clips.get(this.m_strLastClipID);
		}
	}
	GetBestClipTitle(e) {
		const t = this.GetClipSummary(e);
		if (t) {
			return t.name || LocalizeRtime32ToShortDate(t.date_recorded);
		} else {
			return "";
		}
	}
	ManuallyDeleteRecordingForApps(e) {
		o.xM.ManuallyDeleteRecordingsForApps({
			game_ids: e,
		});
	}
	async GetTotalDiskSpaceUsage(e, t) {
		const r = t ? 0 : 1;
		const n = await o.xM.GetTotalDiskSpaceUsage({
			folder_path: e,
			type: r,
		});
		if (n.BSuccess()) {
			const e = n.Body().size();
			return Number(e);
		}
		return 0;
	}
	async GetAvailableDiskSpace() {
		const e = await o.xM.GetAvailableDiskSpace({});
		if (e.BSuccess()) {
			return e.Body().size();
		} else {
			return 0;
		}
	}
	ReportClipShare(e, t, r, n, i) {
		(0, m.q_)(`ReportClipShare ${JSON.stringify(e)} ${t} ${r} ${n} ${i}`);
		l._5.ReportClipShare(this.m_transport, {
			gameid: e.ConvertTo64BitString(),
			share_method: t,
			seconds: r,
			bytes: n.toString(),
			eresult: i,
		});
	}
	ReportClipRange(e, t, r, n, i) {
		(0, m.q_)("ReportClipRange", JSON.stringify(e), t, r, n, i);
		const a = s.w.Init(l.IR);
		a.Body().set_gameid(e.ConvertTo64BitString());
		a.Body().set_original_range_method(t);
		a.Body().set_seconds(r);
		a.Body().start().set_original_range_method(n.originalRangeMethod);
		a.Body().start().set_latest_range_method(n.latestRangeMethod);
		a.Body().start().set_delta_ms(Math.ceil(n.relativeMS));
		a.Body().end().set_original_range_method(i.originalRangeMethod);
		a.Body().end().set_latest_range_method(i.latestRangeMethod);
		a.Body().end().set_delta_ms(Math.ceil(i.relativeMS));
		l._5.ReportClipRange(this.m_transport, a);
	}
	GetRecordingState() {
		return this.m_recordingState;
	}
	BEnoughDiskSpace() {
		return this.m_bEnoughDiskSpace;
	}
	OnLowDiskSpace(e) {
		this.m_bEnoughDiskSpace = false;
		return 1;
	}
	async CheckEnoughDiskSpace() {
		const e = await o.xM.GetEnoughDiskSpace({});
		if (e.BSuccess()) {
			this.m_bEnoughDiskSpace = e.Body().enough_space();
		} else {
			(0, m.tH)(`Failed to get recording drive free space ${e.GetEResult()}`);
		}
	}
	async GetRecordingHighlights(e, t) {
		return (
			(
				await o.xM.GetAndTrimPostGameHighlights({
					game_id: e,
					created_after: t,
				})
			)
				.Body()
				.events() || []
		).map((e) => e.toObject());
	}
}
(0, n.Cg)(
	[i.sH.shallow],
	CGameRecordingStore.prototype,
	"m_rgAppsWithBackgroundVideo",
	undefined,
);
(0, n.Cg)([i.sH], CGameRecordingStore.prototype, "m_bLoadingClips", undefined);
(0, n.Cg)(
	[i.sH],
	CGameRecordingStore.prototype,
	"m_bLoadingAppsWithBackgroundVideo",
	undefined,
);
(0, n.Cg)([i.sH], CGameRecordingStore.prototype, "m_clips", undefined);
(0, n.Cg)(
	[i.sH],
	CGameRecordingStore.prototype,
	"m_clipsGroupByGame",
	undefined,
);
(0, n.Cg)(
	[i.sH],
	CGameRecordingStore.prototype,
	"m_clipExportProgress",
	undefined,
);
(0, n.Cg)(
	[i.sH],
	CGameRecordingStore.prototype,
	"m_currentlyExportingClip",
	undefined,
);
(0, n.Cg)([i.sH], CGameRecordingStore.prototype, "m_recordingState", undefined);
(0, n.Cg)(
	[i.sH],
	CGameRecordingStore.prototype,
	"m_bEnoughDiskSpace",
	undefined,
);
(0, n.Cg)(
	[a.oI],
	CGameRecordingStore.prototype,
	"GetTimelineLoaderForGame",
	null,
);
(0, n.Cg)(
	[a.oI],
	CGameRecordingStore.prototype,
	"GetTimelineLoaderForClip",
	null,
);
(0, n.Cg)(
	[a.oI],
	CGameRecordingStore.prototype,
	"GetTimelineLoaderForSharedClip",
	null,
);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "OnTimelineChanged", null);
(0, n.Cg)(
	[a.oI],
	CGameRecordingStore.prototype,
	"OnRecordingSessionChanged",
	null,
);
(0, n.Cg)(
	[a.oI],
	CGameRecordingStore.prototype,
	"OnTimelineEntryChanged",
	null,
);
(0, n.Cg)(
	[a.oI],
	CGameRecordingStore.prototype,
	"OnTimelineEntryRemoved",
	null,
);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "OnClipCreated", null);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "UploadClip", null);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "SaveClip", null);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "DeleteClip", null);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "ExportClip", null);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "UpdateClipExportPath", null);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "OnExportProgress", null);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "TakeScreenshot", null);
(0, n.Cg)(
	[a.oI],
	CGameRecordingStore.prototype,
	"RegisterManualRecordingCallback",
	null,
);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "StartRecording", null);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "StopRecording", null);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "SwitchRecordedGame", null);
(0, n.Cg)(
	[a.oI],
	CGameRecordingStore.prototype,
	"CreateUserTimelineMarkers",
	null,
);
(0, n.Cg)(
	[a.oI],
	CGameRecordingStore.prototype,
	"UpdateUserTimelineMarkers",
	null,
);
(0, n.Cg)(
	[a.oI],
	CGameRecordingStore.prototype,
	"RemoveUserTimelineMarker",
	null,
);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "LoadThumbnails", null);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "GetAchievementInfo", null);
(0, n.Cg)([a.oI], CGameRecordingStore.prototype, "OnLowDiskSpace", null);
export default CGameRecordingStore;
