import {
	FindAndRemove,
	SortedFindLessOrEqual,
	SortedInsert,
} from "../../actual_src/utils/arrayutils.js";
import { GetUnixTime } from "../../actual_src/utils/time.js";
import { AssertMsg } from "../../actual_src/utils/assert.js";
import n, { Cg } from "./34629.js";
import i from "./83957.js";
import s from "./44926.js";
import l, { q_ as q, ZI, tG } from "./84629.js";
import c, { rU, hT, Te, eJ, N$ } from "./76835.js";
import u from "./79769.js";
import d from "./93960.js";
import A, { Sb, sK } from "./72061.js";
import p from "./63696.js";
import { Y$, kP } from "./91720.js";
import h, { Gn } from "./89193.js";
import C from "./67429.js";
import _ from "./36934.js";
const a = i;
export const kh = 3000;
const y = kh + 1000;
export class SX {
	constructor() {
		Gn(this);
	}
	m_bInitialized = false;
	m_rgListeners = [];
	m_gameID;
	m_clipID;
	m_ulFirstTimelineOffsetMS = 0;
	m_rgTimelineMetadata = [];
	m_mapTimelineData = new Map();
	m_mapRunningTimelines = new Map();
	m_schUpdateRunning = new u.LU();
	m_fnTimelineURLBuilder;
	BInitialized() {
		return this.m_bInitialized;
	}
	GetTimelines() {
		return this.m_rgTimelineMetadata;
	}
	GetTimelineMetadataIndex(e) {
		return this.m_rgTimelineMetadata.findIndex(
			(t) => t.metadata.timeline_id === e,
		);
	}
	GetTimelineMetadata(e) {
		return this.m_rgTimelineMetadata.find((t) => t.metadata.timeline_id === e);
	}
	GetGameID() {
		return this.m_gameID;
	}
	GetClipID() {
		return this.m_clipID;
	}
	BIsTimelineRunning(e) {
		return this.m_mapRunningTimelines.has(e);
	}
	AddEventListener(e) {
		this.m_rgListeners.push(e);
		return () => FindAndRemove(this.m_rgListeners, e);
	}
	async LoadTimelinesForBackgroundVideo(e) {
		this.m_gameID = e;
		const t = await s.xM.GetTimelinesForApp({
			game_id: e,
		});
		const { timelines = [] } = t.Body().toObject();
		this.m_mapRunningTimelines.forEach((e, t) => {
			if (!timelines.find((e) => e.timeline_id == t)) {
				timelines.push(e.m_metadata);
			}
		});
		this.UpdateTimelineMetadata(timelines);
		this.m_fnTimelineURLBuilder = (e) =>
			`https://steamloopback.host/gamerecordings/timelines/${e}.json`;
		this.m_bInitialized = true;
		this.FireEvent("OnLoaderInitialized");
	}
	async LoadTimelinesForClip(e) {
		this.m_clipID = e;
		const t = await s.xM.GetTimelinesForClip({
			clip_id: e,
		});
		if (t.GetEResult() != 1) {
			throw new Error(`Unable to load clip ${e}`);
		}
		const {
			timelines = [],
			game_id,
			first_timeline_start_offset_ms,
		} = t.Body().toObject();
		this.m_gameID = game_id;
		this.UpdateTimelineMetadata(timelines);
		for (let t of this.m_rgTimelineMetadata) {
			q(`Loaded clip ${e} timeline ${t.metadata.timeline_id}`);
			for (let e of t.metadata.recordings) {
				q(`Clip recording ${e.recording_id} duration ${e.duration_ms}`);
			}
		}
		this.m_ulFirstTimelineOffsetMS = parseInt(first_timeline_start_offset_ms);
		this.m_fnTimelineURLBuilder = (e) =>
			`https://steamloopback.host/gamerecordings/clips/${this.m_clipID}/timelines/${e}.json`;
		this.m_bInitialized = true;
		this.FireEvent("OnLoaderInitialized");
	}
	UpdateTimelineMetadata(e) {
		const t = e.slice().sort((e, t) => e.date_recorded - t.date_recorded);
		let r = [];
		let n = 0;
		const i = {};
		t.forEach((t) => {
			t.recordings ||= [];
			if (i[t.timeline_id]) {
				console.error(
					"Duplicate timelines found in UpdateTimelineMetadata()",
					t.timeline_id,
					e,
				);
			} else {
				r.push({
					nGlobalOffsetMS: Sb(n),
					metadata: t,
				});
				n += parseInt(t.duration_ms);
				i[t.timeline_id] = true;
			}
		});
		this.m_rgTimelineMetadata = r;
	}
	LoadTimelinesForSharedClip(e) {
		this.SetPreloadedTimelines(0, e.clip_id, e.game_id, e.timelines, undefined);
	}
	LoadTimelinesForTestGame(e, t) {
		this.SetPreloadedTimelines(
			0,
			undefined,
			e,
			t,
			(e) => `https://steamloopback.host/gamerecordings/timelines/${e}.json`,
		);
	}
	LoadTimelinesForTestClip(e, t, r, n) {
		this.SetPreloadedTimelines(e, t, r, n, undefined);
	}
	SetPreloadedTimelines(e, t, r, n, i) {
		this.m_gameID = r;
		this.m_clipID = t;
		this.m_ulFirstTimelineOffsetMS = e;
		const a = n.slice();
		this.m_mapRunningTimelines.forEach((e, t) => {
			if (!a.find((e) => e.timeline_id == t)) {
				a.push(e.m_metadata);
			}
		});
		this.UpdateTimelineMetadata(a);
		this.m_fnTimelineURLBuilder = i;
		this.m_bInitialized = true;
		this.FireEvent("OnLoaderInitialized");
	}
	FireEvent(e, ...t) {
		for (let r of this.m_rgListeners) {
			let r_e = r[e];
			if (r_e instanceof Function) {
				r_e.apply(r, t);
			}
		}
	}
	async LoadTimelineData(e) {
		let t = this.m_mapTimelineData.get(e);
		if (t && t.m_strState === "loading") {
			await t.m_promise;
			return;
		}
		if (t && t.m_strState == "error") {
			return;
		}
		if (this.IsActiveTimeline(e) && t.m_strState == "loaded") {
			return;
		}
		const r = {
			m_rgGameModeChanges: [],
			m_rgStateDescriptions: [],
			m_rgEntries: [],
			m_rgPhases: [],
		};
		if (this.m_fnTimelineURLBuilder) {
			const t = this.m_fnTimelineURLBuilder(e);
			const n = a
				.get(t, {
					withCredentials: false,
				})
				.then(
					(t) => {
						if (t.status == 200 && t.data) {
							const r = this.ProcessTimelineEntries(t.data);
							this.m_mapTimelineData.set(e, r);
						} else {
							this.m_mapTimelineData.set(e, {
								...r,
								m_strState: "error",
							});
						}
					},
					(t) => {
						this.m_mapTimelineData.set(e, {
							...r,
							m_strState: "error",
						});
					},
				)
				.finally(() => this.FireEvent("OnTimelineLoaded", e));
			this.m_mapTimelineData.set(e, {
				m_strState: "loading",
				m_promise: n,
				...r,
			});
		} else {
			this.m_mapTimelineData.set(e, {
				m_strState: "loaded",
				...r,
			});
		}
	}
	ProcessTimelineEntries(e) {
		let t = {
			m_strState: "loaded",
			m_rgGameModeChanges: [],
			m_rgStateDescriptions: [],
			m_rgEntries: [],
			m_rgPhases: [],
		};
		if (e.entries) {
			const r = [];
			const n = [];
			const i = [];
			const a = [];
			for (const t of e.entries) {
				switch (t.type) {
					case "phase": {
						i.push(t);
						break;
					}
					case "gamemode": {
						r.push(t);
						break;
					}
					case "state_description": {
						n.push(t);
						break;
					}
					case "achievement":
					case "error":
					case "event":
					case "screenshot":
					case "usermarker": {
						a.push(t);
						break;
					}
					default: {
						console.error(`Unknown timeline entry type ${t.type}`);
					}
				}
			}
			const s = (e, t) => parseInt(e.time) - parseInt(t.time);
			t.m_rgGameModeChanges = r.sort(s);
			t.m_rgStateDescriptions = n.sort(s);
			t.m_rgPhases = i.sort(s);
			t.m_rgEntries = a.sort(s);
			if (
				t.m_rgGameModeChanges.length > 0 &&
				parseInt(t.m_rgGameModeChanges[0].time) < 10000
			) {
				t.m_rgGameModeChanges[0].time = "0";
			}
		}
		return t;
	}
	static ApplyTimelineRounding(e, t) {
		if (t === 0) {
			return e;
		}
		const r = e % t;
		if (r == 0) {
			return e;
		} else {
			return e + (t - r);
		}
	}
	FindTimelineAtOffset(e, t) {
		const r = e + this.m_ulFirstTimelineOffsetMS;
		let n = 0;
		for (let e of this.m_rgTimelineMetadata) {
			const i = this.GetTimelineStartBeforeGlobalZeroMS(e.metadata.timeline_id);
			let a = parseInt(e.metadata.duration_ms) + i;
			if (n + a > r) {
				return {
					timeline: e,
					nTimelineOffsetMS: r - n,
					ulGlobalToTimelineOffset: i,
				};
			}
			n += SX.ApplyTimelineRounding(a, t);
		}
		return null;
	}
	GetGlobalOffsetDataForTimeline(e, t) {
		let r = 0;
		for (let n of this.m_rgTimelineMetadata) {
			let i = parseInt(n.metadata.duration_ms);
			let a = SX.ApplyTimelineRounding(i, t);
			if (n.metadata.timeline_id == e) {
				return {
					nGlobalOffsetMS: r,
					nRoundedDurationMS: a,
				};
			}
			r += a;
		}
		return null;
	}
	CreateGlobalRangeForTimeline(e, t, r, n) {
		let i = t - r;
		let a = t + n;
		return this.ClampGlobalRangeToTimeline(e, i, a);
	}
	ClampGlobalRangeToTimeline(e, t, r) {
		let n = this.GetGlobalOffsetDataForTimeline(e, 0);
		if (n) {
			return [
				Math.max(t, n.nGlobalOffsetMS),
				Math.min(r, n.nGlobalOffsetMS + n.nRoundedDurationMS - 1),
			];
		} else {
			return [0, 0];
		}
	}
	GetTimelineOffsetFromGlobal(e, t) {
		const r = this.m_ulFirstTimelineOffsetMS + e;
		let n = 0;
		for (let e of this.m_rgTimelineMetadata) {
			const i = this.GetTimelineStartBeforeGlobalZeroMS(e.metadata.timeline_id);
			const a = parseInt(e.metadata.duration_ms) + i;
			if (r < n + SX.ApplyTimelineRounding(a, t)) {
				return {
					strTimelineID: e.metadata.timeline_id,
					nTimelineOffsetMS: sK(r - n - i),
				};
			}
			n += a;
		}
		return {
			strTimelineID: undefined,
			nTimelineOffsetMS: sK(NaN),
		};
	}
	ConvertRecordingOffsetToGlobalOffset(e, t, r) {
		let n = 0;
		for (let i of this.m_rgTimelineMetadata) {
			let a = parseInt(i.metadata.duration_ms);
			const s = this.GetTimelineStartBeforeGlobalZeroMS(i.metadata.timeline_id);
			let o = SX.ApplyTimelineRounding(a, r);
			for (let r of i.metadata.recordings) {
				if (r.recording_id === e) {
					let e =
						(isNaN(parseInt(r.recording_zero_timeline_offset_ms))
							? 0
							: parseInt(r.recording_zero_timeline_offset_ms) - s) + t;
					n += e;
					return {
						nGlobalOffsetMS: n,
						nRoundedDurationMS: o,
						strTimelineID: i.metadata.timeline_id,
						nTimelineOffsetMS: e,
					};
				}
			}
			n += o;
		}
		return null;
	}
	IsActiveTimeline(e) {
		return !!e && this.m_mapRunningTimelines.has(e);
	}
	MakeRelativeToTimelineEndIfActive(e, t) {
		if (!this.IsActiveTimeline(e)) {
			return t;
		}
		const r = this.GetTimelineMetadata(e);
		if (!r) {
			return t;
		}
		let n = parseInt(r.metadata.duration_ms);
		return Math.min(t - n, 0);
	}
	IsActiveRecording(e) {
		for (let t of this.m_rgTimelineMetadata) {
			for (let r of t.metadata.recordings) {
				if (r.recording_id === e) {
					const r = this.m_mapRunningTimelines.get(t.metadata.timeline_id);
					return (
						!!r &&
						!!r.m_runningRecording &&
						r.m_runningRecording.recording_id === e
					);
				}
			}
		}
		return false;
	}
	GetRunningTimelineDurationMS(e) {
		let t = this.m_mapRunningTimelines.get(e);
		if (!t) {
			return 0;
		}
		let r = performance.now() - t.m_perfCounterStart + t.m_nPerfCounterOffsetMS;
		let n = parseInt(t.m_metadata.duration_ms) || 0;
		return Math.max(r, n);
	}
	GetRunningTimelineForRecording(e, t) {
		const r = this.m_mapRunningTimelines.get(e);
		if (r && r.m_runningRecording && r.m_runningRecording.recording_id === t) {
			return r;
		} else {
			return null;
		}
	}
	ConvertGlobaOffsetToRecordingAndRelativeOffset(e) {
		if (!this.m_bInitialized) {
			return null;
		}
		let t = this.FindTimelineAtOffset(e, 0);
		if (!t) {
			return null;
		}
		let r = t.nTimelineOffsetMS - t.ulGlobalToTimelineOffset;
		for (let e of t.timeline.metadata.recordings) {
			let n = parseInt(e.start_offset_ms);
			if (n + parseInt(e.duration_ms) < r || n > r) {
				continue;
			}
			let i = parseInt(e.recording_zero_timeline_offset_ms);
			let a = Math.max(r - n, 0);
			if (!isNaN(i)) {
				a = Math.max(t.nTimelineOffsetMS - i, 0);
			}
			return {
				strRecordingID: e.recording_id,
				nRecordingOffsetMS: a,
				nStartOffsetMS: n,
			};
		}
		return null;
	}
	async FindRecordingAndOffsetForEntry(e) {
		for (const t of this.m_mapRunningTimelines.keys()) {
			if (!this.IsActiveTimeline(t)) {
				continue;
			}
			await this.LoadTimelineData(t);
			const r = this.m_mapTimelineData.get(t);
			const n = this.m_mapRunningTimelines.get(t);
			if (r && n) {
				for (const t of r.m_rgEntries) {
					if (t.id == e) {
						const e = parseInt(t.time);
						for (const t of n.m_metadata.recordings) {
							const r = parseInt(t.start_offset_ms);
							const n = r + parseInt(t.duration_ms);
							if (e >= r && e <= n) {
								return {
									strRecordingID: t.recording_id,
									nRecordingOffsetMS: e,
									nStartOffsetMS: r,
								};
							}
						}
					}
				}
				break;
			}
		}
	}
	GetClosestNextRecordingInGlobalTimeline(e) {
		for (let t of this.m_rgTimelineMetadata) {
			for (let r of t.metadata.recordings) {
				if (parseInt(r.start_offset_ms) + t.nGlobalOffsetMS.valMS > e.valMS) {
					return r;
				}
			}
		}
		return null;
	}
	GetClosestPreviousRecordingInGlobalTimeline(e) {
		let t = null;
		for (let r of this.m_rgTimelineMetadata) {
			for (let n of r.metadata.recordings) {
				if (parseInt(n.start_offset_ms) + r.nGlobalOffsetMS.valMS > e.valMS) {
					return t;
				}
				t = n;
			}
		}
		return t;
	}
	ConvertRecordingTimeMStoPreTrimTimeMS(e, t) {
		for (let r of this.m_rgTimelineMetadata) {
			for (let n of r.metadata.recordings) {
				if (n.recording_id === e) {
					const e = parseInt(n.recording_zero_timeline_offset_ms);
					const i = this.GetTimelineStartBeforeGlobalZeroMS(
						r.metadata.timeline_id,
					);
					if (!i || isNaN(e)) {
						return t;
					} else {
						return t + i - e;
					}
				}
			}
		}
		return t;
	}
	GetTimelineDataOrStartLoad(e) {
		if (!e) {
			return null;
		}
		let t = this.m_mapTimelineData.get(e);
		if (!t) {
			this.LoadTimelineData(e);
			t = this.m_mapTimelineData.get(e);
		}
		return t;
	}
	GetTimelineData(e) {
		return this.m_mapTimelineData.get(e);
	}
	SetTimelineData(e, t) {
		const r = this.ProcessTimelineEntries(t);
		this.m_mapTimelineData.set(e, r);
	}
	GetClosestPreviousEntryInTimeline(e, t) {
		const r = this.GetTimelineMetadata(e);
		const n = this.GetTimelineStartBeforeGlobalZeroMS(e);
		const i = this.GetTimelineDataOrStartLoad(e);
		let a = null;
		if (i && i.m_strState === "loaded") {
			const e = i.m_rgEntries.filter((e) => {
				const t = parseInt(e.time);
				return t < n + parseInt(r.metadata.duration_ms) && t > n;
			});
			const s = SortedFindLessOrEqual(e, (e) => t.valMS - 1 - parseInt(e.time));
			if (s !== -1) {
				a = e[s];
			}
		}
		return {
			entry: a,
			timelineState: i?.m_strState,
		};
	}
	GetClosestNextEntryInTimeline(e, t) {
		const r = this.GetTimelineMetadata(e);
		const n = this.GetTimelineStartBeforeGlobalZeroMS(e);
		const i = this.GetTimelineDataOrStartLoad(e);
		let a = null;
		if (i && i.m_strState === "loaded") {
			const e = i.m_rgEntries.filter((e) => {
				const t = parseInt(e.time);
				return t < n + parseInt(r.metadata.duration_ms) && t > n;
			});
			const s = SortedFindLessOrEqual(e, (e) => t.valMS - parseInt(e.time));
			if (s < e.length - 1) {
				a = e[s + 1];
			}
		}
		return {
			entry: a,
			timelineState: i?.m_strState,
		};
	}
	GetClosestPreviousEntryInGlobalTimeline(e) {
		const t = this.GetTimelineOffsetFromGlobal(e, 0);
		const r = this.GetTimelineData(t.strTimelineID);
		if (!r || r.m_strState !== "loaded") {
			return {
				timelineID: t?.strTimelineID,
				timelineState: r?.m_strState,
				entry: null,
				globalMS: null,
			};
		}
		const n = this.GetTimelineStartBeforeGlobalZeroMS(t.strTimelineID);
		const i = t.nTimelineOffsetMS.valMS + n;
		const a = SortedFindLessOrEqual(r.m_rgEntries, (e) => i - parseInt(e.time));
		if (a !== -1) {
			const e = r.m_rgEntries[a];
			const i =
				this.GetTimelineMetadata(t.strTimelineID).nGlobalOffsetMS.valMS -
				n +
				parseInt(e.time);
			if (i < 0) {
				return {
					timelineID: t.strTimelineID,
					timelineState: r.m_strState,
					entry: null,
					globalMS: null,
				};
			} else {
				return {
					timelineID: t.strTimelineID,
					timelineState: r.m_strState,
					entry: e,
					globalMS: Sb(i),
				};
			}
		}
		let s = this.GetTimelineMetadataIndex(t.strTimelineID);
		if (s < 1) {
			return {
				timelineID: t.strTimelineID,
				timelineState: r.m_strState,
				entry: null,
				globalMS: null,
			};
		}
		for (let e = s - 1; e >= 0; e--) {
			const t = this.m_rgTimelineMetadata[e];
			const r = this.GetTimelineData(t.metadata.timeline_id);
			if (r) {
				if (r.m_strState !== "loaded") {
					return {
						timelineID: t.metadata.timeline_id,
						timelineState: r.m_strState,
						entry: null,
						globalMS: null,
					};
				}
				if (r.m_rgEntries.length) {
					const e = r.m_rgEntries[r.m_rgEntries.length - 1];
					const n = this.GetTimelineStartBeforeGlobalZeroMS(
						t.metadata.timeline_id,
					);
					const i = t.nGlobalOffsetMS.valMS - n + parseInt(e.time);
					if (i < 0) {
						return {
							timelineID: t.metadata.timeline_id,
							timelineState: r.m_strState,
							entry: null,
							globalMS: null,
						};
					} else {
						return {
							timelineID: t.metadata.timeline_id,
							timelineState: r.m_strState,
							entry: e,
							globalMS: Sb(i),
						};
					}
				}
			}
		}
		return {
			timelineID: this.m_rgTimelineMetadata[0].metadata.timeline_id,
			timelineState: "loaded",
			entry: null,
			globalMS: null,
		};
	}
	GetClosestNextEntryInGlobalTimeline(e) {
		const t = this.GetTimelineOffsetFromGlobal(e, 0);
		const r = this.GetTimelineData(t.strTimelineID);
		if (!r || r.m_strState !== "loaded") {
			return {
				timelineID: t?.strTimelineID,
				timelineState: r?.m_strState,
				entry: null,
				globalMS: null,
			};
		}
		const n = this.GetTimelineStartBeforeGlobalZeroMS(t.strTimelineID);
		const i = t.nTimelineOffsetMS.valMS + n;
		const a =
			SortedFindLessOrEqual(r.m_rgEntries, (e) => i - parseInt(e.time)) + 1;
		if (a <= r.m_rgEntries.length - 1) {
			const e = r.m_rgEntries[a];
			const i =
				this.GetTimelineMetadata(t.strTimelineID).nGlobalOffsetMS.valMS -
				n +
				parseInt(e.time);
			if (i < this.GetGlobalTimelineEndMS().valMS) {
				return {
					timelineID: t.strTimelineID,
					timelineState: r.m_strState,
					entry: e,
					globalMS: Sb(i),
				};
			} else {
				return {
					timelineID: t.strTimelineID,
					timelineState: r.m_strState,
					entry: null,
					globalMS: null,
				};
			}
		}
		const s = this.m_rgTimelineMetadata.length;
		let l = this.GetTimelineMetadataIndex(t.strTimelineID);
		if (l === -1 || l === s - 1) {
			return {
				timelineID: t.strTimelineID,
				timelineState: r.m_strState,
				entry: null,
				globalMS: null,
			};
		}
		for (let e = l + 1; e < s; e++) {
			const t = this.m_rgTimelineMetadata[e];
			const r = this.GetTimelineData(t.metadata.timeline_id);
			if (r) {
				if (r.m_strState !== "loaded") {
					return {
						timelineID: t.metadata.timeline_id,
						timelineState: r.m_strState,
						entry: null,
						globalMS: null,
					};
				}
				if (r.m_rgEntries.length) {
					const e = r.m_rgEntries[0];
					const n = this.GetTimelineStartBeforeGlobalZeroMS(
						t.metadata.timeline_id,
					);
					const i = t.nGlobalOffsetMS.valMS - n + parseInt(e.time);
					if (i < this.GetGlobalTimelineEndMS().valMS) {
						return {
							timelineID: t.metadata.timeline_id,
							timelineState: r.m_strState,
							entry: e,
							globalMS: Sb(i),
						};
					} else {
						return {
							timelineID: t.metadata.timeline_id,
							timelineState: r.m_strState,
							entry: null,
							globalMS: null,
						};
					}
				}
			}
		}
		return {
			timelineID: this.m_rgTimelineMetadata[s - 1].metadata.timeline_id,
			timelineState: "loaded",
			entry: null,
			globalMS: null,
		};
	}
	FindRangeEventsAtGlobalMS(e) {
		const t = this.GetTimelineOffsetFromGlobal(e, 0);
		const r = this.GetTimelineDataOrStartLoad(t.strTimelineID);
		if (!r || r.m_strState !== "loaded") {
			return [];
		}
		const n = [];
		for (const e of r.m_rgEntries) {
			if (parseInt(e.time) > t.nTimelineOffsetMS.valMS) {
				break;
			}
			if (e.type !== "event" || parseInt(e.duration) == 0) {
				continue;
			}
			const r = parseInt(e.time);
			const i = r + parseInt(e.duration);
			if (r <= t.nTimelineOffsetMS.valMS && i >= t.nTimelineOffsetMS.valMS) {
				n.push(e);
			}
		}
		return n;
	}
	GetStateDescriptionAtGlobalMS(e) {
		const t = this.GetTimelineOffsetFromGlobal(e.valMS, 0);
		const r = this.GetTimelineDataOrStartLoad(t.strTimelineID);
		if (!r || r.m_strState !== "loaded") {
			return null;
		}
		const n = SortedFindLessOrEqual(
			r.m_rgStateDescriptions,
			(e) => t.nTimelineOffsetMS.valMS - parseInt(e.time),
		);
		if (n > -1) {
			return r.m_rgStateDescriptions[n];
		} else {
			return null;
		}
	}
	AdvanceGameModeIndex(e) {
		let e_m_iGameModeChanges = e.m_iGameModeChanges;
		while (e_m_iGameModeChanges + 1 < e.m_data.m_rgGameModeChanges.length) {
			let r = e.m_data.m_rgGameModeChanges[e_m_iGameModeChanges + 1];
			if (parseInt(r.time) > e.m_nTimelineOffsetMS) {
				break;
			}
			e_m_iGameModeChanges++;
		}
		e.m_iGameModeChanges = e_m_iGameModeChanges;
	}
	AdvanceEntriesIndex(e) {
		for (
			e.m_iEntries == -1 && e.m_iEntries++;
			e.m_iEntries < e.m_data.m_rgEntries.length;

		) {
			let t = e.m_data.m_rgEntries[e.m_iEntries];
			if (parseInt(t.time) >= e.m_nTimelineOffsetMS) {
				break;
			}
			e.m_iEntries++;
		}
	}
	CreateTimelineIterator(e, t) {
		let r = this.FindTimelineAtOffset(e, t);
		if (!r) {
			return {
				m_timeline: null,
				m_data: null,
				m_nTimelineOffsetMS: 0,
				m_iGameModeChanges: -1,
				m_iEntries: -1,
			};
		}
		let n = this.GetTimelineDataOrStartLoad(r.timeline.metadata.timeline_id);
		let i = -1;
		let a = -1;
		if (n?.m_strState == "loaded") {
			let e = (e) => r.ulGlobalToTimelineOffset - parseInt(e.time);
			i = SortedFindLessOrEqual(n.m_rgGameModeChanges, e);
			a = SortedFindLessOrEqual(n.m_rgEntries, e);
		}
		let s = {
			m_timeline: r.timeline.metadata,
			m_data: n,
			m_nTimelineOffsetMS: Math.max(r.ulGlobalToTimelineOffset, 0),
			m_iGameModeChanges: i,
			m_iEntries: a,
		};
		this.AdvanceEntriesIndex(s);
		this.AdvanceGameModeIndex(s);
		return s;
	}
	HasIteratorReachedEnd(e) {
		return !e.m_timeline;
	}
	AdvanceIterator(e, t) {
		let r = parseInt(e.m_timeline.duration_ms);
		if (e.m_nTimelineOffsetMS + t < r + this.m_ulFirstTimelineOffsetMS) {
			e.m_nTimelineOffsetMS += t;
			this.AdvanceEntriesIndex(e);
			this.AdvanceGameModeIndex(e);
			return;
		}
		let n = this.m_rgTimelineMetadata.findIndex(
			(t) => t.metadata == e.m_timeline,
		);
		if (n < 0 || n == this.m_rgTimelineMetadata.length - 1) {
			e.m_timeline = null;
		} else {
			n++;
			e.m_timeline = this.m_rgTimelineMetadata[n].metadata;
			e.m_data = this.GetTimelineDataOrStartLoad(e.m_timeline.timeline_id);
			e.m_nTimelineOffsetMS = 0;
			e.m_iGameModeChanges = 0;
			e.m_iEntries = 0;
		}
	}
	GetIteratorTimelineState(e) {
		return e.m_data.m_strState;
	}
	GetIteratorGameMode(e) {
		if (
			e.m_iGameModeChanges < 0 ||
			e.m_iGameModeChanges >= e.m_data.m_rgGameModeChanges.length
		) {
			return c.il.Playing;
		} else {
			return e.m_data.m_rgGameModeChanges[e.m_iGameModeChanges].mode;
		}
	}
	*GetIteratorEntriesWithin(e, t) {
		let r = e.m_data.m_rgEntries;
		for (let n = e.m_iEntries; n >= 0 && n < r.length; n++) {
			let r_n = r[n];
			if (parseInt(r_n.time) >= e.m_nTimelineOffsetMS + t) {
				break;
			}
			yield r_n;
		}
	}
	*GetIteratorGameModesWithin(e, t) {
		let r = e.m_data.m_rgGameModeChanges;
		for (let n = e.m_iEntries; n >= 0 && n < r.length; n++) {
			let r_n = r[n];
			if (parseInt(r_n.time) >= e.m_nTimelineOffsetMS + t) {
				break;
			}
			yield r_n;
		}
	}
	GetFirstRecording() {
		if (!this.m_bInitialized) {
			return "";
		}
		const e = this.m_rgTimelineMetadata[0];
		if (!e) {
			return "";
		}
		const t = e.metadata.recordings[0];
		if (t) {
			return t.recording_id;
		} else {
			return "";
		}
	}
	GetFirstRecordingOfLastTimelineSession() {
		if (!this.m_bInitialized) {
			return "";
		}
		const e = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
		if (!e) {
			return "";
		}
		const t = e.metadata.recordings[0];
		if (t) {
			return t.recording_id;
		} else {
			return "";
		}
	}
	GetNextRecording(e) {
		if (!this.m_bInitialized || !e) {
			return "";
		}
		let t = false;
		for (let r of this.m_rgTimelineMetadata) {
			for (let n of r.metadata.recordings) {
				if (t) {
					return n.recording_id;
				}
				if (n.recording_id == e) {
					t = true;
				}
			}
		}
		return "";
	}
	BRecordingHasZeroOffset(e) {
		if (!this.m_bInitialized) {
			return false;
		}
		for (let t of this.m_rgTimelineMetadata) {
			for (let r of t.metadata.recordings) {
				if (r.recording_id == e) {
					return !isNaN(parseInt(r.recording_zero_timeline_offset_ms));
				}
			}
		}
		return false;
	}
	GetTimelineDateMS(e, t) {
		if (!this.m_bInitialized) {
			return 0;
		}
		let r = this.FindTimelineAtOffset(e, t);
		if (r) {
			return r.timeline.metadata.date_recorded * 1000 + r.nTimelineOffsetMS;
		} else {
			return 0;
		}
	}
	InsertEntryIntoTimelineSorted(e, t) {
		SortedInsert(
			e.m_rgEntries,
			t,
			(e, t) => parseInt(e.time) - parseInt(t.time),
		);
	}
	AddEventToTimeline(e, t, r, n, i, a, s, o) {
		if (!this.m_bInitialized) {
			ZI("timeline loader not initialized, unexpected");
			return false;
		}
		const c = this.m_mapTimelineData.get(e);
		if (!c) {
			ZI(`failed to find timeline ${e}`);
			return false;
		}
		const m = t + this.GetTimelineStartBeforeGlobalZeroMS(e);
		const u = {
			id: n,
			time: `${m}`,
			type: "event",
			icon: r,
			title: a,
			description: s,
			priority: i,
			duration: `${o}`,
			possible_clip: 2,
		};
		tG(`adding timeline event marker at ${e} at ${m} MS`);
		this.InsertEntryIntoTimelineSorted(c, u);
		this.FireEvent("OnInvalidate", e);
		return true;
	}
	RemoveTimelineEvent(e, t) {
		if (!this.m_bInitialized) {
			ZI("timeline loader not initialized, unexpected");
			return false;
		}
		const r = this.m_mapTimelineData.get(e);
		if (!r) {
			ZI(`failed to find timeline ${e}`);
			return false;
		}
		const n = r.m_rgEntries.findIndex((e) => e.id === t);
		if (n < 0) {
			ZI(`failed to find entry by id: ${t}`);
			return false;
		} else {
			r.m_rgEntries.splice(n, 1);
			this.FireEvent("OnInvalidate", e);
			return true;
		}
	}
	AddUserMarker(e, t, r, n) {
		if (!this.m_bInitialized) {
			ZI("timeline loader not initialized, unexpected");
			return false;
		}
		const i = this.m_mapTimelineData.get(e);
		if (!i) {
			ZI(`failed to find timeline ${e}`);
			return false;
		}
		const a = t + this.GetTimelineStartBeforeGlobalZeroMS(e);
		const s = {
			id: n,
			time: `${a}`,
			type: "usermarker",
			icon: r,
			title: "",
			description: "",
			priority: 0,
		};
		tG(`adding user marker at ${e} at ${a} MS`);
		this.InsertEntryIntoTimelineSorted(i, s);
		this.FireEvent("OnInvalidate", e);
		return true;
	}
	UpdateUserMarker(e, t, r) {
		if (!this.m_bInitialized) {
			ZI("timeline loader not initialized, unexpected");
			return false;
		}
		const n = this.m_mapTimelineData.get(e);
		if (!n) {
			ZI(`failed to find timeline ${e}`);
			return false;
		}
		const i = n.m_rgEntries.findIndex((e) => e.id === t);
		if (i < 0) {
			ZI(`failed to find entry by id: ${t}`);
			return false;
		}
		const a = n.m_rgEntries[i];
		const a_time = a.time;
		a.icon = r.strIcon;
		a.time = `${r.nTimelineOffsetMS}`;
		a.title = r.name;
		a.description = r.description;
		if (a_time != a.time) {
			n.m_rgEntries.splice(i, 1);
			this.InsertEntryIntoTimelineSorted(n, a);
		}
		this.FireEvent("OnInvalidate", e);
		return true;
	}
	RemoveUserMarker(e, t) {
		if (!this.m_bInitialized) {
			ZI("timeline loader not initialized, unexpected");
			return false;
		}
		const r = this.m_mapTimelineData.get(e);
		if (!r) {
			ZI(`failed to find timeline ${e}`);
			return false;
		}
		const n = r.m_rgEntries.findIndex((e) => e.id === t);
		if (n < 0) {
			ZI(`failed to find entry by id: ${t}`);
			return false;
		} else {
			r.m_rgEntries.splice(n, 1);
			this.FireEvent("OnInvalidate", e);
			return true;
		}
	}
	AddRunningTimeline(e, t, r) {
		if (this.m_rgTimelineMetadata.find((t) => t.metadata.timeline_id == e)) {
			return;
		}
		const n = {
			timeline_id: e,
			game_id: t,
			date_recorded: r,
			recordings: [],
		};
		const i = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
		const a = i
			? i.nGlobalOffsetMS.valMS + parseInt(i.metadata.duration_ms)
			: 0;
		SortedInsert(
			this.m_rgTimelineMetadata,
			{
				nGlobalOffsetMS: Sb(a),
				metadata: n,
			},
			(e, t) => e.metadata.date_recorded - t.metadata.date_recorded,
		);
		this.m_mapTimelineData.set(e, {
			m_strState: "loaded",
			m_rgGameModeChanges: [],
			m_rgStateDescriptions: [],
			m_rgEntries: [],
			m_rgPhases: [],
		});
		let s = {
			m_metadata: n,
			m_globalStartMS: a,
			m_perfCounterStart: performance.now(),
			m_nPerfCounterOffsetMS: Math.max(0, GetUnixTime() - r) * 1000,
			m_runningRecording: null,
		};
		this.m_mapRunningTimelines.set(e, s);
		if (!this.m_schUpdateRunning.IsScheduled()) {
			this.m_schUpdateRunning.Schedule(y, this.UpdateRunningTimelines);
		}
		this.FireEvent("OnInvalidate", e);
	}
	UpdateRunningTimelines() {
		let e;
		this.m_mapRunningTimelines.forEach((t) => {
			e = t.m_metadata.timeline_id;
			let r =
				performance.now() - t.m_perfCounterStart + t.m_nPerfCounterOffsetMS;
			if (r > (parseInt(t.m_metadata.duration_ms) || 0)) {
				t.m_metadata.duration_ms = r.toString();
			}
		});
		if (this.m_mapRunningTimelines.size > 0) {
			this.m_schUpdateRunning.Schedule(y, this.UpdateRunningTimelines);
		}
		this.FireEvent("OnInvalidate", e);
	}
	RunningTimelineStopped(e, t) {
		let r = this.m_mapRunningTimelines.get(e);
		if (r) {
			r.m_metadata.duration_ms = t;
			this.m_mapRunningTimelines.delete(e);
			this.FireEvent("OnInvalidate", e);
		}
	}
	AddRunningTimelineEntry(e) {
		let t = this.m_mapRunningTimelines.get(e.timeline_id);
		let r = this.m_mapTimelineData.get(e.timeline_id);
		if (!t || !r) {
			return;
		}
		let n = rU(e);
		if (!n) {
			return;
		}
		if (hT(n)) {
			SortedInsert(
				r.m_rgGameModeChanges,
				n,
				(e, t) => parseInt(e.time) - parseInt(t.time),
			);
		} else if (Te(n)) {
			SortedInsert(
				r.m_rgStateDescriptions,
				n,
				(e, t) => parseInt(e.time) - parseInt(t.time),
			);
		} else {
			SortedInsert(
				r.m_rgEntries,
				n,
				(e, t) => parseInt(e.time) - parseInt(t.time),
			);
		}
		let i = parseInt(t.m_metadata.duration_ms) || 0;
		let a = parseInt(e.time);
		if (i < a) {
			t.m_metadata.duration_ms = a.toString();
		}
		this.FireEvent("OnInvalidate", e.timeline_id);
	}
	TimelineDeleted(e) {
		const t = this.m_rgTimelineMetadata
			.filter((t) => t.metadata.timeline_id !== e)
			.map((e) => e.metadata);
		this.UpdateTimelineMetadata(t);
		this.m_mapTimelineData.delete(e);
		this.FireEvent("OnInvalidate", e);
	}
	RecordingSessionChanged(e) {
		let { session_id, notification_type } = e;

		if (notification_type == 1) {
			const r = this.m_mapRunningTimelines.get(e.timeline_id);
			if (!r) {
				this.FireEvent("OnInvalidateRecording", e.timeline_id, session_id);
				AssertMsg(
					false,
					"Received recording started message before timeline info",
				);
				return;
			}
			const n = {
				recording_id: session_id,
				start_offset_ms: e.start_offset,
				recording_zero_timeline_offset_ms: e.start_offset,
				duration_ms: e.duration_ms,
				recording_type: e.recording_type,
			};
			r.m_metadata.recordings.push(n);
			r.m_runningRecording = n;
		} else if (notification_type == 2) {
			const r = this.GetRunningTimelineForRecording(e.timeline_id, session_id);
			if (!r) {
				return;
			}
			r.m_runningRecording.duration_ms = e.duration_ms;
			r.m_runningRecording = null;
			this.FireEvent("OnInvalidateRecording", e.timeline_id, session_id);
		} else if (notification_type == 4) {
			const r = this.GetTimelineMetadata(e.timeline_id);
			if (r) {
				const n = r.metadata.recordings.find(
					(e) => e.recording_id === session_id,
				);
				if (n) {
					n.start_offset_ms = e.start_offset;
					n.duration_ms = e.duration_ms;
					const t = parseInt(e.start_offset) + parseInt(e.duration_ms);
					if (t > (parseInt(r.metadata.duration_ms) || 0)) {
						r.metadata.duration_ms = t.toString();
					}
				}
			}
			if (!this.GetRunningTimelineForRecording(e.timeline_id, session_id)) {
				this.FireEvent("OnInvalidateRecording", e.timeline_id, session_id);
			}
		} else if (notification_type == 3) {
			const r = this.GetTimelineMetadata(e.timeline_id);
			if (r) {
				const e = r.metadata.recordings.filter(
					(e) => e.recording_id !== session_id,
				);
				r.metadata.recordings = e;
			}
		}
		this.FireEvent("OnInvalidate", e.timeline_id);
	}
	GetGlobalTimelineEndMS() {
		const e = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
		if (e) {
			const t = isNaN(parseInt(e.metadata.duration_ms))
				? 0
				: parseInt(e.metadata.duration_ms);
			return Sb(e.nGlobalOffsetMS.valMS + t);
		}
		return Sb(0);
	}
	GetEndOfRecordingsMS() {
		const e = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
		if (e) {
			const t = e.metadata.recordings[e.metadata.recordings.length - 1];
			if (t) {
				const r = this.m_mapRunningTimelines.has(e.metadata.timeline_id);
				const n = isNaN(parseInt(t.start_offset_ms))
					? 0
					: parseInt(t.start_offset_ms);
				const i = isNaN(parseInt(e.metadata.duration_ms))
					? 0
					: parseInt(e.metadata.duration_ms);
				let a = 0;
				if (r) {
					a = Math.max(0, i - n);
				} else if (!isNaN(parseInt(t.duration_ms))) {
					a = parseInt(t.duration_ms);
				}
				return Sb(e.nGlobalOffsetMS.valMS + n + a);
			}
		}
		return null;
	}
	GetTotalRecordingDuration() {
		let e = 0;
		this.m_rgTimelineMetadata.forEach((t) => {
			t.metadata.recordings.forEach((t) => {
				if (!isNaN(parseInt(t.duration_ms))) {
					e += parseInt(t.duration_ms);
				}
			});
		});
		return e;
	}
	GetTimelineStartBeforeGlobalZeroMS(e) {
		if (e == this.m_rgTimelineMetadata[0].metadata.timeline_id) {
			return this.m_ulFirstTimelineOffsetMS;
		} else {
			return 0;
		}
	}
	async GenerateNamePartsFromTimeline(e, t, r, n) {
		let i;
		let a;
		let s;
		let o;
		let l;
		let m = false;
		for (let u of this.m_rgTimelineMetadata) {
			let d = false;
			if (!m) {
				if (u.metadata.timeline_id != e) {
					continue;
				}
				d = true;
				m = true;
			}
			const A = u.metadata.timeline_id == r;
			await this.LoadTimelineData(u.metadata.timeline_id);
			const p = this.m_mapTimelineData.get(u.metadata.timeline_id);
			if (d) {
				o = u.metadata.date_recorded + Math.floor(t / 1000);
			}
			if (A) {
				l = u.metadata.date_recorded + Math.floor(n / 1000);
			}
			for (let e of p.m_rgEntries) {
				const r = parseInt(e.time);
				if (d && r < t) {
					continue;
				}
				if (A && r > n) {
					continue;
				}
				if (!eJ(e) && !N$(e)) {
					continue;
				}
				const a = w(e);
				if (!i || (a && a.rank > i.rank)) {
					i = a;
				}
			}
			for (let e of p.m_rgStateDescriptions) {
				const t = parseInt(e.time);
				if (!A || !(t > n)) {
					if (!a || s < t) {
						a = e;
						s = t;
					}
				}
			}
			if (A) {
				break;
			}
		}
		const u = i?.strTitle ?? a?.title;
		const d = new C.VS(this.GetGameID());
		const A = _.Vw.GetAppInfo(d.GetInternalAppID());
		const p = A?.name;
		return {
			strTimelinePart: u,
			strAppNamePart: p,
			rtStart: o,
			rtEnd: l,
		};
	}
	async GenerateClipNameFromTimeline(e, t, r, n) {
		const { strTimelinePart, strAppNamePart } =
			await this.GenerateNamePartsFromTimeline(e, t, r, n);
		const s = new Date();
		const o = [
			strAppNamePart,
			`${s.getFullYear()}-${(s.getMonth() + 1).toString().padStart(2, "0")}-${s
				.getDate()
				.toString()
				.padStart(2, "0")} ${s.toLocaleTimeString()}`,
			strTimelinePart,
		]
			.filter((e) => e)
			.join(" - ");
		q(`Generated clip name "${o}"`);
		return o;
	}
}
function w(e) {
	switch (e.type) {
		case "event": {
			const t = e;
			return {
				rank: 50000 + e.priority,
				strTitle: t.title,
			};
		}
		case "usermarker": {
			const r = e;
			if (r.title || r.description) {
				return {
					rank: 100000 + e.priority,
					strTitle: e.title || e.description,
				};
			} else {
				return null;
			}
		}
		case "state_description": {
			return {
				rank: 40000,
				strTitle: e.title,
			};
		}
		case "achievement": {
			return {
				rank: 90000,
				strTitle: e.title,
			};
		}
	}
	return null;
}
export function Ni(e) {
	const t = p.useMemo(() => Y$(e), [e]);
	const r = p.useCallback(
		(t) =>
			`https://steamloopback.host/gamerecordings/clips/${e}/video/${t}/session.mpd`,
		[e],
	);
	p.useEffect(() => () => t && t.release(), [t]);
	return {
		loader: t.loader,
		fnGetManifest: r,
	};
}
export function Fc(e) {
	const t = p.useMemo(() => kP(e), [e]);
	const r = p.useCallback(
		(e) => `https://steamloopback.host/gamerecordings/video/${e}/session.mpd`,
		[],
	);
	p.useEffect(() => () => t && t.release(), [t]);
	return {
		loader: t.loader,
		fnGetManifest: r,
	};
}
Cg([h.sH], SX.prototype, "m_bInitialized", undefined);
Cg([d.o], SX.prototype, "UpdateRunningTimelines", null);
