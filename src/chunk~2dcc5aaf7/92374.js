export var g_;
export var HE;
var a = require(/*webcrack:missing*/ "./34629.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./52451.js");
var l = require(/*webcrack:missing*/ "./89193.js");
var c = require("./84629.js");
var m = require("./94361.js");
var u = require("./91720.js");
var d = require("./22588.js");
var A = require(/*webcrack:missing*/ "./31958.js");
var p = require("./72061.js");
import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
var h = require("./84921.js");
var C = require("./34891.js");
var _ = require("./61738.js");
var f = require(/*webcrack:missing*/ "./90095.js");
(function (e) {
	e.Overlay = "Overlay";
	e.Clips = "Clips";
	e.Background = "Background";
	e.CommunityClip = "Community";
	e.ChatClip = "Chat";
	e.Partner = "Partner";
})((g_ ||= {}));
(function (e) {
	e.Never = "Never";
	e.Always = "Always";
	e.Manual = "Manual";
})((HE ||= {}));
const b = d.kh * 3;
const y = d.kh * 5;
const S = d.kh + 2000;
export const Xq = 1000;
class B {
	m_gameRecordingVideo = null;
	m_timelineLoader = null;
	m_fnUnregisterLoader = null;
	m_rgListeners = [];
	m_videoRef;
	m_bHidePlayer = false;
	m_fnGetManifest;
	m_strRecordingID = null;
	m_nPendingSeekSec = -1;
	m_playbackDefinition = null;
	m_pendingStop = null;
	m_durationMS = (0, p.Sb)(null);
	m_lastRecordingGlobalMS = (0, p.Sb)(null);
	m_bWasLiveEdge = false;
	m_nGlobalTimelinePlaybackMS = null;
	m_nGlobalTimelinePlaybackSec = null;
	m_fnUnregisterAutorun = [];
	m_eGameRecordingMode;
	m_rgSeekPerf = [];
	m_eRecordingState = C.KB.NotRecording;
	m_eRecordingSetting = HE.Never;
	m_bGamepadMode = false;
	m_bControlsVisible = true;
	m_fnRenderGlyph = undefined;
	m_previousHighlightEntry = null;
	m_nextHighlightEntry = null;
	m_displayHighlightEntry = null;
	m_nRelativeTimeForDisplay = undefined;
	m_rgClipOffsets = [];
	m_phasePreview = undefined;
	constructor(e, t, r, n, i, a, s, o) {
		(0, l.Gn)(this);
		this.m_fnGetManifest = t;
		this.m_gameRecordingVideo = new h.si(true);
		this.m_eGameRecordingMode = r;
		this.m_bGamepadMode = i;
		this.m_playbackDefinition = s;
		if (n != null) {
			this.m_bControlsVisible = n;
		}
		if (r === "Overlay") {
			this.m_bHidePlayer = true;
		}
		if (o) {
			this.SetClipOffsets(o);
		}
		this.m_fnRenderGlyph = a;
		this.m_fnUnregisterAutorun.push(
			(0, l.mJ)(
				() => ({
					bIsAtEnd: this.m_gameRecordingVideo.IsAtEnd(),
					bIsPaused: this.m_gameRecordingVideo.IsPaused(),
				}),
				(e) => {
					if (e.bIsAtEnd && !e.bIsPaused) {
						this.PlayNextTimelineRecording();
					}
				},
				{
					fireImmediately: true,
				},
			),
		);
		this.m_fnUnregisterAutorun.push(
			(0, l.mJ)(
				() => this.m_gameRecordingVideo.GetPlaybackTime(),
				(e) => {
					if (
						this.m_pendingStop &&
						this.m_pendingStop.m_strRecordingID == this.m_strRecordingID &&
						this.m_pendingStop.m_nOffsetMS <= e * 1000
					) {
						if (this.m_playbackDefinition) {
							this.StartPlaybackForRange();
							return;
						}
						this.m_gameRecordingVideo.Pause();
						this.m_pendingStop = null;
					}
				},
				{
					fireImmediately: true,
				},
			),
		);
		this.m_fnUnregisterAutorun.push(
			(0, l.mJ)(
				() => ({
					playback: this.m_gameRecordingVideo.GetPlaybackTime(),
					bVideoPlaying: this.m_gameRecordingVideo.BVideoElementPlaying(),
				}),
				(e) => {
					if (e.bVideoPlaying) {
						const t =
							this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
								this.m_strRecordingID,
								e.playback * 1000,
								0,
							);
						if (t) {
							this.UpdateGlobalPlayTime(t.nGlobalOffsetMS);
							if (
								t.nGlobalOffsetMS > this.GetLiveEdgeMS().valMS &&
								this.m_eGameRecordingMode === "Overlay" &&
								this.m_gameRecordingVideo.GetPlaybackSpeed() > 1
							) {
								console.log(" hitting live edge, slow down the playback ");
								this.m_gameRecordingVideo.SetPlaybackSpeed(1);
							}
						} else {
							const e = this.GetLiveEdgeMS();
							if (!isNaN(e.valMS)) {
								this.SetPlaytimeFromGlobalMS(e);
								this.FocusGlobalMS(e);
							}
						}
					}
				},
				{
					fireImmediately: true,
				},
			),
		);
		this.m_fnUnregisterAutorun.push(
			(0, l.mJ)(
				() => ({
					globalPlaybackMS: this.m_nGlobalTimelinePlaybackMS,
					bVideoPaused: this.m_gameRecordingVideo.IsPaused(),
					bHidePlayer: this.m_bHidePlayer,
				}),
				(e) => {
					if (!this.m_timelineLoader?.BInitialized()) {
						return;
					}
					if (e.bHidePlayer) {
						this.SetEntriesForLiveEdge();
						return;
					}
					if (
						!this.m_previousHighlightEntry ||
						!this.m_nextHighlightEntry ||
						(this.m_nextHighlightEntry?.globalMS &&
							e.globalPlaybackMS >= this.m_nextHighlightEntry.globalMS.valMS) ||
						(this.m_previousHighlightEntry?.globalMS &&
							e.globalPlaybackMS <=
								this.m_previousHighlightEntry.globalMS.valMS) ||
						(e.bVideoPaused &&
							this.m_previousHighlightEntry?.globalMS &&
							e.globalPlaybackMS >=
								this.m_previousHighlightEntry.globalMS.valMS + Xq)
					) {
						this.CalculatePreviousHighlightEntry(
							e.globalPlaybackMS,
							e.bVideoPaused,
						);
						this.CalculateNextHighlightEntry(
							e.globalPlaybackMS,
							e.bVideoPaused,
						);
					}
				},
				{
					fireImmediately: true,
				},
			),
		);
		this.m_fnUnregisterAutorun.push(
			(0, l.mJ)(
				() => this.m_gameRecordingVideo.BSeekReadyToPlay(),
				(e) => {
					if (e) {
						const e = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
						try {
							const t = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
							const r = performance.measure(t, e);
							(0, c.q_)(
								`CGameRecordingVideo:: perf measure ${e} duration ${r.duration}`,
							);
							if (r) {
								this.m_rgSeekPerf.push(r.duration);
							}
						} catch (t) {
							(0, c.q_)(`CGameRecordingVideo:: cant measure ${e}, error: ${t}`);
						}
					}
				},
				{
					fireImmediately: true,
				},
			),
		);
		this.SetLoader(e);
	}
	AddEventListener(e) {
		this.m_rgListeners.push(e);
		return () => FindAndRemove(this.m_rgListeners, e);
	}
	FireEvent(e, ...t) {
		for (let r of this.m_rgListeners) {
			let n = r[e];
			if (n instanceof Function) {
				n.apply(r, t);
			}
		}
	}
	dispose() {
		this.m_fnUnregisterAutorun.forEach((e) => e());
		if (this.m_fnUnregisterLoader) {
			this.m_fnUnregisterLoader();
			this.m_fnUnregisterLoader = null;
		}
	}
	SetVideoElement(e) {
		if (e) {
			if (this.m_videoRef === e) {
				return;
			}
			this.m_videoRef = e;
			if (this.m_strRecordingID) {
				const e = this.m_nPendingSeekSec > 0 ? this.m_nPendingSeekSec : 0;
				this.m_nPendingSeekSec = -1;
				this.ChangePlaybackRecording(this.m_strRecordingID, e);
			} else {
				this.TryPlayInitialTimelineVideo();
			}
		} else {
			this.m_gameRecordingVideo.Stop();
			this.m_videoRef = null;
		}
	}
	OnInvalidateRecording(e, t) {
		const r = this.m_fnGetManifest(t);
		if (this.m_gameRecordingVideo.GetMPDURL() == r) {
			(0, c.q_)(`Recording invalidated for ${t}. Reloading MPD`);
			this.m_gameRecordingVideo.UpdateMPD();
		}
	}
	OnLoaderInitialized() {
		this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS();
		this.m_lastRecordingGlobalMS = this.m_timelineLoader.GetEndOfRecordingsMS();
		this.m_bWasLiveEdge = true;
		this.TryPlayInitialTimelineVideo();
		const e = (0, u.RV)(this.m_timelineLoader.GetGameID());
		this.SetClipOffsets(e);
	}
	OnInvalidate(e) {
		this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS();
		this.m_lastRecordingGlobalMS = this.m_timelineLoader.GetEndOfRecordingsMS();
		if (this.m_bHidePlayer && this.m_timelineLoader.IsActiveTimeline(e)) {
			this.SetEntriesForLiveEdge();
		} else {
			if (this.m_previousHighlightEntry && this.m_nextHighlightEntry) {
				const t = this.m_timelineLoader.GetTimelineMetadataIndex(e);
				const r = this.m_timelineLoader.GetTimelineMetadataIndex(
					this.m_previousHighlightEntry.timelineID,
				);
				const n = this.m_timelineLoader.GetTimelineMetadataIndex(
					this.m_nextHighlightEntry.timelineID,
				);
				if (t < r || t > n) {
					return;
				}
			}
			this.CalculatePreviousHighlightEntry(
				this.m_nGlobalTimelinePlaybackMS,
				this.GetGameRecordingVideo().IsPaused(),
			);
			this.CalculateNextHighlightEntry(
				this.m_nGlobalTimelinePlaybackMS,
				this.GetGameRecordingVideo().IsPaused(),
			);
		}
	}
	OnTimelineLoaded(e) {
		if (
			this.m_previousHighlightEntry &&
			this.m_previousHighlightEntry.timelineID === e
		) {
			this.CalculatePreviousHighlightEntry(
				this.m_nGlobalTimelinePlaybackMS,
				this.GetGameRecordingVideo().IsPaused(),
			);
		}
		if (
			this.m_nextHighlightEntry &&
			this.m_nextHighlightEntry.timelineID === e
		) {
			this.CalculateNextHighlightEntry(
				this.m_nGlobalTimelinePlaybackMS,
				this.GetGameRecordingVideo().IsPaused(),
			);
		}
	}
	SetEntriesForLiveEdge() {
		const e = this.GetLiveEdgeMS();
		this.CalculatePreviousHighlightEntry(e.valMS, true);
		this.m_nextHighlightEntry = null;
	}
	CalculatePreviousHighlightEntry(e, t) {
		const r = t ? 1 : Xq * this.m_gameRecordingVideo.GetPlaybackSpeed();
		const n = this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
			e - r,
		);
		if (n.timelineState !== "loaded" || n.entry) {
			this.m_previousHighlightEntry = n;
		} else {
			this.m_previousHighlightEntry =
				this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(e);
		}
	}
	CalculateNextHighlightEntry(e, t) {
		const r = this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(e);
		if (r.timelineState !== "loaded" || r.entry) {
			this.m_nextHighlightEntry = r;
		} else {
			const r = t ? 1 : Xq * this.m_gameRecordingVideo.GetPlaybackSpeed();
			this.m_nextHighlightEntry =
				this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(e - r);
		}
	}
	GetPreviousHighlightEntry() {
		return this.m_previousHighlightEntry;
	}
	GetNextHighlightEntry() {
		return this.m_nextHighlightEntry;
	}
	GetDisplayHighlightEntry() {
		return this.m_displayHighlightEntry;
	}
	SetDisplayHighlightEntry(e, t) {
		this.m_displayHighlightEntry = {
			entry: e,
			duration: t,
		};
	}
	GetPhasePreview() {
		return this.m_phasePreview;
	}
	SetPhasePreview(e) {
		this.m_phasePreview = e;
	}
	GetRelativeTimeForDisplay() {
		return this.m_nRelativeTimeForDisplay;
	}
	ClearRelativeTimeDisplay() {
		this.m_nRelativeTimeForDisplay = undefined;
	}
	GetClipOffsets() {
		return this.m_rgClipOffsets;
	}
	SetClipOffsets(e) {
		if (!this.m_timelineLoader?.BInitialized()) {
			return;
		}
		let t = [];
		if (e && e.length) {
			e.forEach((e) => {
				const r = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
					e.start_timeline_id,
					0,
				);
				if (!r) {
					return;
				}
				const n = r.nGlobalOffsetMS + parseInt(e.start_offset_ms);
				t.push({
					strClipID: e.clip_id,
					nGlobalOffsetMS: n,
					nDurationMS: parseInt(e.duration_ms),
				});
			});
		}
		this.m_rgClipOffsets = t;
	}
	GetTotalMS() {
		return this.m_durationMS;
	}
	GetIsActiveTimeline(e) {
		return this.m_timelineLoader.IsActiveTimeline(e);
	}
	BIsVideoElementPaused() {
		return this.m_gameRecordingVideo.IsPaused();
	}
	BInitialized() {
		return this.m_timelineLoader.BInitialized();
	}
	GetHidePlayer() {
		return this.m_bHidePlayer;
	}
	SetHidePlayer(e) {
		if (e) {
			this.m_strRecordingID = null;
		}
		this.m_bHidePlayer = e;
	}
	BPlayerInitialized() {
		return this.m_gameRecordingVideo.IsInitialized();
	}
	GetGameRecordingVideo() {
		return this.m_gameRecordingVideo;
	}
	GetGameID() {
		return this.m_timelineLoader.GetGameID();
	}
	GetClipID() {
		return this.m_timelineLoader.GetClipID();
	}
	GetRecordingState() {
		return this.m_eRecordingState;
	}
	SetRecordingState(e) {
		this.m_eRecordingState = e;
	}
	GetLoader() {
		return this.m_timelineLoader;
	}
	SetLoader(e) {
		if (this.m_timelineLoader != e) {
			if (this.m_fnUnregisterLoader) {
				this.m_fnUnregisterLoader();
			}
			this.m_timelineLoader = e;
			this.m_fnUnregisterLoader = this.m_timelineLoader.AddEventListener(this);
			if (e.BInitialized()) {
				this.OnLoaderInitialized();
			}
		}
	}
	SetGetManifest(e) {
		this.m_fnGetManifest = e;
	}
	GetRecordingID() {
		return this.m_strRecordingID;
	}
	GetRecordingSetting() {
		return this.m_eRecordingSetting;
	}
	SetRecordingSetting(e) {
		this.m_eRecordingSetting = e;
	}
	GetRecordingMode() {
		return this.m_eGameRecordingMode;
	}
	ShouldModeShowClipControls() {
		switch (this.m_eGameRecordingMode) {
			case g_.Overlay:
			case g_.Clips:
			case g_.Background:
				return true;
			default:
				return false;
		}
	}
	CanModeAddMarker() {
		switch (this.m_eGameRecordingMode) {
			case g_.Overlay:
			case g_.Clips:
			case g_.Background:
				return true;
			default:
				return false;
		}
	}
	GetPlaybackStats() {
		if (!this.m_rgSeekPerf.length) {
			return null;
		}
		const e = this.m_rgSeekPerf.length;
		const t = this.m_rgSeekPerf.reduce((e, t) => e + t) / e;
		const r = Math.sqrt(
			this.m_rgSeekPerf.map((e) => Math.pow(e - t, 2)).reduce((e, t) => e + t) /
				e,
		);
		const n = Math.max(...this.m_rgSeekPerf);
		const i = Math.min(...this.m_rgSeekPerf);
		return {
			nMean: t,
			nStdDev: r,
			nMax: n,
			nMin: i,
			nLength: e,
			nLastVal: this.m_rgSeekPerf[e - 1],
		};
	}
	async StartPlaybackForRange() {
		let e;
		let t = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
			this.m_playbackDefinition.m_strTimelineID,
			0,
		);
		let r = t?.nGlobalOffsetMS || 0;
		r += this.m_playbackDefinition.m_nTimelineStartMS;
		e = this.m_playbackDefinition.m_strEntryID
			? await this.m_timelineLoader.FindRecordingAndOffsetForEntry(
					this.m_playbackDefinition.m_strEntryID,
				)
			: this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(r);
		if (e) {
			if (this.m_playbackDefinition.m_nDurationMS) {
				let e = r + this.m_playbackDefinition.m_nDurationMS;
				let t =
					this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
						e,
					);
				this.m_pendingStop = {
					m_strRecordingID: t.strRecordingID,
					m_nOffsetMS: t.nRecordingOffsetMS,
				};
			}
			this.UpdateGlobalPlayTime(r);
			this.ChangePlaybackRecording(
				e.strRecordingID,
				e.nRecordingOffsetMS / 1000,
			);
		}
	}
	TryPlayInitialTimelineVideo() {
		if (this.m_timelineLoader.BInitialized() && !this.m_bHidePlayer) {
			if (this.m_playbackDefinition) {
				this.StartPlaybackForRange();
			} else if (this.m_eGameRecordingMode === g_.Overlay) {
				const e = this.GetLiveEdgeMS();
				const t =
					this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession();
				const r = this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
					t,
					0,
					0,
				);
				if (r && e.valMS < r.nGlobalOffsetMS) {
					this.UpdateGlobalPlayTime(r.nGlobalOffsetMS);
					this.ChangePlaybackRecording(t, 0);
				} else if (!isNaN(e.valMS)) {
					this.SetPlaytimeFromGlobalMS(e, false, true);
				}
			} else if (this.m_eGameRecordingMode === g_.Background) {
				const e =
					this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession();
				this.SetPlaytimeFromRecordingOffset(e, 0);
			} else {
				const e = this.m_timelineLoader.GetFirstRecording();
				this.SetPlaytimeFromRecordingOffset(e, 0);
			}
		}
	}
	GetTotalSeconds() {
		return Math.floor(
			this.m_timelineLoader.GetGlobalTimelineEndMS().valMS / 1000,
		);
	}
	GetCurrentPlaybackGlobalMS(e = 0) {
		const t =
			Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1000) + e;
		return this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
			this.m_strRecordingID,
			t,
			0,
		);
	}
	GetIsLiveEdge() {
		const e = this.GetGlobalMSPlaytime().valMS || 0;
		if (this.m_eGameRecordingMode === "Overlay") {
			return !!this.m_lastRecordingGlobalMS && this.m_bWasLiveEdge;
		} else {
			return this.GetTotalMS().valMS - e < 1;
		}
	}
	GetLiveEdgeBufferWindowStartMS() {
		if (
			this.m_eGameRecordingMode === "Overlay" &&
			this.m_lastRecordingGlobalMS
		) {
			const e = Math.max(0, this.m_lastRecordingGlobalMS.valMS - b - 1000);
			return (0, p.Sb)(e);
		}
		return this.GetTotalMS();
	}
	GetLiveEdgeMS() {
		if (
			this.m_eGameRecordingMode === "Overlay" &&
			this.m_lastRecordingGlobalMS
		) {
			const e = Math.max(0, this.m_lastRecordingGlobalMS.valMS - S);
			return (0, p.Sb)(e);
		}
		return (0, p.Sb)(Math.max(0, this.GetTotalMS().valMS - 1));
	}
	GetTimelineAndOffsetRelativeToCurrentPlayback(e = 0) {
		const t = this.GetCurrentPlaybackGlobalMS(e);
		return (
			t ||
			((0, c.ZI)(
				`failed to find offset for ${this.m_strRecordingID} at ${Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1000)} MS`,
			),
			null)
		);
	}
	SeekDeltaMS(e) {
		const t = this.GetGlobalMSPlaytime();
		if (!this.m_strRecordingID) {
			const r =
				e > 0
					? this.GetClosestNextRecordingForGlobalMS(t)
					: this.GetClosestPreviousRecordingForGlobalMS(t);
			if (r) {
				const t = e > 0 ? e : Math.max(parseInt(r.duration_ms) + e, 0);
				this.SetPlaytimeFromRecordingOffset(r.recording_id, t, e < 0);
				return;
			}
		}
		const r =
			this.m_eGameRecordingMode === "Overlay"
				? this.GetLiveEdgeMS().valMS
				: this.GetTotalMS().valMS;
		const n = A.OQ(t.valMS + e, 0, r - 1000);
		this.SetPlaytimeFromGlobalMS((0, p.Sb)(n));
	}
	ConvertGlobaOffsetToRecordingAndRelativeOffset(e) {
		return this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
			e,
		);
	}
	PlayNextTimelineRecording(e) {
		if (this.m_playbackDefinition) {
			this.StartPlaybackForRange();
			return;
		}
		let t;
		if (this.m_strRecordingID) {
			t = this.m_timelineLoader.GetNextRecording(this.m_strRecordingID);
		} else {
			const e = this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
				(0, p.Sb)(this.m_nGlobalTimelinePlaybackMS),
			);
			t = e?.recording_id;
		}
		if (t) {
			this.SetPlaytimeFromRecordingOffset(t, 0);
		} else {
			this.m_gameRecordingVideo.Pause();
			if (e) {
				this.TryPlayInitialTimelineVideo();
			}
		}
	}
	GetClipsAtGlobalMS(e) {
		return (
			this.m_rgClipOffsets.filter(
				(t) =>
					t.nGlobalOffsetMS <= e.valMS &&
					t.nGlobalOffsetMS + t.nDurationMS >= e.valMS,
			) || []
		);
	}
	GetClosestPreviousRecordingForGlobalMS(e) {
		return this.m_timelineLoader.GetClosestPreviousRecordingInGlobalTimeline(e);
	}
	GetClosestNextRecordingForGlobalMS(e) {
		return this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(e);
	}
	SetPlaytimeFromRecordingOffset(e, t, r, n) {
		let i = t;
		if (r) {
			i = this.m_timelineLoader.ConvertRecordingTimeMStoPreTrimTimeMS(e, t);
		}
		const a = this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
			e,
			i,
			0,
		);
		if (a) {
			this.UpdateGlobalPlayTime(a.nGlobalOffsetMS);
			this.ChangePlaybackRecording(e, i / 1000, n);
		}
	}
	GetManifestFromRecordingID(e) {
		return this.m_fnGetManifest(e);
	}
	ChangePlaybackRecording(e, t = 0, r) {
		this.m_bHidePlayer = false;
		const n = this.m_gameRecordingVideo.IsPaused();
		if (
			this.m_strRecordingID === e &&
			this.m_gameRecordingVideo.IsInitialized()
		) {
			this.m_gameRecordingVideo.Seek(t);
			return;
		}
		this.m_gameRecordingVideo.Stop();
		this.m_strRecordingID = e;
		if (!e) {
			return;
		}
		if (!this.m_videoRef) {
			this.m_nPendingSeekSec = t;
			return;
		}
		const i = this.GetManifestFromRecordingID(e);
		const a = this.m_timelineLoader.BRecordingHasZeroOffset(e)
			? _.lU.Absolute
			: _.lU.FromAvailableStart;
		this.m_gameRecordingVideo.Start(this.m_videoRef, i, t, a);
		if (r || n) {
			this.m_gameRecordingVideo.Pause();
		}
	}
	StopPlayback() {
		this.m_gameRecordingVideo.Stop();
	}
	TogglePlayPause() {
		if (
			this.m_gameRecordingVideo.IsPaused() ||
			!this.m_gameRecordingVideo.IsInitialized()
		) {
			if (
				this.m_nGlobalTimelinePlaybackMS > this.m_lastRecordingGlobalMS?.valMS
			) {
				this.TryPlayInitialTimelineVideo();
			}
			if (
				this.m_gameRecordingVideo.GetTimelineDuration() -
					this.m_gameRecordingVideo.GetPlaybackTime() <
				0.05
			) {
				this.PlayNextTimelineRecording(true);
			} else {
				this.m_gameRecordingVideo.Play();
			}
		} else {
			this.m_gameRecordingVideo.Pause();
		}
	}
	GetGlobalMSPlaytime() {
		return (0, p.Sb)(this.m_nGlobalTimelinePlaybackMS);
	}
	GetGlobalPlaytimeSec() {
		return this.m_nGlobalTimelinePlaybackSec;
	}
	UpdateGlobalPlayTime(e) {
		this.m_nGlobalTimelinePlaybackMS = e;
		this.m_nGlobalTimelinePlaybackSec = Math.floor(e / 1000);
		if (
			this.m_lastRecordingGlobalMS &&
			this.m_lastRecordingGlobalMS.valMS !== null
		) {
			const e = this.m_bWasLiveEdge ? y : b;
			this.m_bWasLiveEdge =
				this.m_lastRecordingGlobalMS.valMS -
					(this.GetGlobalMSPlaytime()?.valMS || 0) <
				e;
		}
	}
	HandleSeekToPreviousRecording(e, t, r) {
		const n = this.GetClosestPreviousRecordingForGlobalMS(e);
		if (n) {
			const e = parseInt(n.duration_ms);
			const i = Math.max(e - 5000, e * 0.75);
			if (!r) {
				this.m_nRelativeTimeForDisplay = i / 1000;
			}
			this.UpdateGlobalPlayTime(
				this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
					n.recording_id,
					i,
					0,
				).nGlobalOffsetMS,
			);
			this.ChangePlaybackRecording(n?.recording_id, i / 1000, t);
		} else {
			if (!r) {
				this.m_nRelativeTimeForDisplay = 0;
			}
			this.UpdateGlobalPlayTime(0);
			this.ChangePlaybackRecording(this.m_strRecordingID, 0, t);
		}
	}
	HandleSeekToNextRecording(e, t, r) {
		const n = this.GetClosestNextRecordingForGlobalMS(e);
		if (n) {
			if (!r) {
				this.m_nRelativeTimeForDisplay = 0;
			}
			this.UpdateGlobalPlayTime(
				this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
					n.recording_id,
					0,
					0,
				).nGlobalOffsetMS,
			);
			this.ChangePlaybackRecording(n?.recording_id, 0, t);
		} else {
			if (!r) {
				this.m_nRelativeTimeForDisplay = this.GetTotalMS().valMS;
			}
			this.ChangePlaybackRecording(
				this.m_strRecordingID,
				this.GetTotalMS().valMS / 1000,
				t,
			);
		}
	}
	SetPlaytimeFromGlobalMS(e, t, r, n) {
		this.m_pendingStop = null;
		let i =
			this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
				e.valMS,
			);
		if (i) {
			if (!r) {
				this.m_nRelativeTimeForDisplay = e.valMS;
			}
			this.UpdateGlobalPlayTime(e.valMS);
			this.ChangePlaybackRecording(
				i?.strRecordingID,
				i?.nRecordingOffsetMS / 1000,
				t,
			);
		} else if (n) {
			this.ChangePlaybackRecording(
				i?.strRecordingID,
				i?.nRecordingOffsetMS / 1000,
				t,
			);
		} else if (e.valMS > this.m_nGlobalTimelinePlaybackMS) {
			this.HandleSeekToNextRecording(e, t, r);
		} else {
			this.HandleSeekToPreviousRecording(e, t, r);
		}
	}
	ConvertGlobalOffsetToTimelineRelativeOffset(e) {
		return this.m_timelineLoader.GetTimelineOffsetFromGlobal(e, 0);
	}
	MakeRelativeToTimelineEndIfActive(e, t) {
		return this.m_timelineLoader.MakeRelativeToTimelineEndIfActive(e, t);
	}
	GetTimelineDuration(e) {
		if (!this.m_timelineLoader.BInitialized()) {
			return null;
		}
		const t = this.m_timelineLoader.GetTimelineMetadata(e);
		if (t) {
			return parseInt(t.metadata.duration_ms);
		} else {
			return null;
		}
	}
	GetTimelineFirstRecordingOffset(e) {
		if (!this.m_timelineLoader.BInitialized()) {
			return null;
		}
		const t = this.m_timelineLoader.GetTimelineMetadata(e);
		if (!t) {
			return null;
		}
		const r = t.metadata.recordings;
		if (r.length) {
			return parseInt(r[0].start_offset_ms);
		} else {
			return null;
		}
	}
	async AddUserMarkerAtGlobalMS(e, t, r) {
		const n = this.m_timelineLoader.GetTimelineOffsetFromGlobal(e.valMS, 0);
		if (n) {
			const e = this.m_timelineLoader.GetGameID();
			const { fnCreateUserTimelineMarkers: i } = (0, u.Fc)();
			const a = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
				n.strTimelineID,
			);
			m.y.ReportTrackedAction(t);
			const s = "steam_marker";
			const o = await i(e, this.GetClipID(), {
				timeline_id: n.strTimelineID,
				entry_id: "",
				time: "" + Math.floor(n.nTimelineOffsetMS.valMS + a),
				type: 5,
				marker_icon: s,
				marker_priority: 0,
			});
			if (o.eResult == 1) {
				this.m_timelineLoader.AddUserMarker(
					n.strTimelineID,
					Math.floor(n.nTimelineOffsetMS.valMS),
					s,
					o.entry_id,
				);
				if (r) {
					r(o.entry_id, n.strTimelineID);
				}
			}
		}
	}
	async RemoveUserMarker(e, t) {
		const { fnRemoveUserTimelineMarker: r } = (0, u.Fc)();
		const n = this.m_timelineLoader.GetGameID();
		if ((await r(n, this.GetClipID(), e, t)) == 1) {
			this.m_timelineLoader.RemoveUserMarker(e, t);
			return true;
		} else {
			(0, c.tG)(`Failed to delete user marker for timeline ${e} entry ${t}`);
			return false;
		}
	}
	async UpdateUserMarker(e, t, r, n) {
		const { fnUpdateUserTimelineMarkers: i } = (0, u.Fc)();
		const a = this.m_timelineLoader.GetGameID();
		const s = {
			timeline_id: e,
			entry_id: t.id,
			time: t.time,
			type: 5,
			marker_icon: t.icon,
			marker_priority: t.priority,
			range_title: r,
			marker_description: n,
		};
		if ((await i(a, this.GetClipID(), s)) == 1) {
			const i = {
				strIcon: t.icon,
				name: r,
				description: n,
				nTimelineOffsetMS: parseInt(t.time),
			};
			this.m_timelineLoader.UpdateUserMarker(e, t.id, i);
			return true;
		}
		return false;
	}
	FocusGlobalMS(e) {
		this.FireEvent("OnFocusGlobalMS", e);
	}
	SetPlaybackStop(e) {
		const t = this.ConvertGlobaOffsetToRecordingAndRelativeOffset(e.valMS);
		if (t) {
			this.m_pendingStop = {
				m_strRecordingID: t.strRecordingID,
				m_nOffsetMS: t.nRecordingOffsetMS,
			};
		}
	}
	ClearPlaybackStop() {
		this.m_pendingStop = null;
	}
	GenerateClipNameFromTimeline(e, t, r, n) {
		return this.m_timelineLoader.GenerateClipNameFromTimeline(e, t, r, n);
	}
	GetRenderGlyph() {
		if (this.m_bGamepadMode) {
			return this.m_fnRenderGlyph;
		} else {
			return undefined;
		}
	}
	SetRenderGlyph(e) {
		this.m_fnRenderGlyph = e;
	}
	GetGamepadMode() {
		return this.m_bGamepadMode;
	}
	SetGamepadMode(e) {
		this.m_bGamepadMode = e;
	}
	GetControlsVisible() {
		return this.m_bControlsVisible;
	}
	SetControlsVisible(e) {
		if (e != null) {
			this.m_bControlsVisible = e;
		}
	}
}
(0, a.Cg)([l.sH], B.prototype, "m_bHidePlayer", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_strRecordingID", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_durationMS", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_lastRecordingGlobalMS", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_nGlobalTimelinePlaybackMS", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_nGlobalTimelinePlaybackSec", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_rgSeekPerf", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_eRecordingState", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_eRecordingSetting", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_bGamepadMode", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_bControlsVisible", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_fnRenderGlyph", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_previousHighlightEntry", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_nextHighlightEntry", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_displayHighlightEntry", undefined);
(0, a.Cg)([l.sH], B.prototype, "m_nRelativeTimeForDisplay", undefined);
(0, a.Cg)([l.sH.ref], B.prototype, "m_rgClipOffsets", undefined);
(0, a.Cg)([l.sH.ref], B.prototype, "m_phasePreview", undefined);
(0, a.Cg)([o.oI], B.prototype, "SetVideoElement", null);
(0, a.Cg)([o.oI], B.prototype, "OnInvalidateRecording", null);
(0, a.Cg)([l.XI], B.prototype, "OnLoaderInitialized", null);
(0, a.Cg)([o.oI], B.prototype, "OnInvalidate", null);
(0, a.Cg)([o.oI], B.prototype, "OnTimelineLoaded", null);
(0, a.Cg)([o.oI], B.prototype, "GetLiveEdgeMS", null);
(0, a.Cg)([o.oI], B.prototype, "StopPlayback", null);
(0, a.Cg)([o.oI], B.prototype, "TogglePlayPause", null);
(0, a.Cg)([l.XI], B.prototype, "UpdateGlobalPlayTime", null);
const v = s.createContext({
	timelinePlaybackCoordinator: null,
});
export function Ni(e) {
	const {
		children: t,
		mode: r,
		fnGetManifest: n,
		loader: i,
		recordingState: a,
		controlsVisible: o,
		gamepadMode: l,
		renderGlyph: c,
		recordingSetting: m,
		playbackDefinition: u,
		clipSummaries: d,
	} = e;
	const [A] = s.useState(() => new B(i, n, r, o, l, c, u, d));
	(0, s.useEffect)(() => {
		A.SetLoader(i);
	}, [A, i]);
	(0, s.useEffect)(() => {
		A.SetRecordingState(a);
	}, [A, a]);
	(0, s.useEffect)(() => {
		A.SetRecordingSetting(m);
	}, [A, m]);
	(0, s.useEffect)(() => {
		A.SetGetManifest(n);
	}, [A, n]);
	(0, s.useEffect)(() => {
		A.SetControlsVisible(o);
	}, [A, o]);
	(0, s.useEffect)(() => {
		A.SetGamepadMode(l);
	}, [A, l]);
	(0, s.useEffect)(() => {
		A.SetRenderGlyph(c);
	}, [A, c]);
	(0, s.useEffect)(() => {
		A.SetClipOffsets(d);
	}, [A, d]);
	(0, s.useEffect)(() => () => A.dispose(), [A]);
	const p = s.useMemo(
		() => ({
			timelinePlaybackCoordinator: A,
		}),
		[A],
	);
	return s.createElement(
		v.Provider,
		{
			value: p,
		},
		t,
	);
}
export function aO() {
	return (0, s.useContext)(v).timelinePlaybackCoordinator;
}
export function Bl() {
	const e = aO();
	return [
		(0, f.q3)(() => e?.GetPhasePreview() || null),
		(t) => e?.SetPhasePreview(t),
	];
}
