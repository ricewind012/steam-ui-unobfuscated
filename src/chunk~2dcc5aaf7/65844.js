var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./31958.js");
import { SortedFindLessOrEqual } from "../../actual_src/utils/arrayutils.js";
var o = require("./84629.js");
var l = require(/*webcrack:missing*/ "./63696.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require("./29516.js");
var u = require("./72061.js");
const d = 300000;
export var Jv;
(function (e) {
	e.Playhead = "Playhead";
	e.RangeLeft = "RangeLeft";
	e.RangeRight = "RangeRight";
	e.Highlight = "Highlight";
})((Jv ||= {}));
class p {
	m_fnUnregisterFromLoader;
	m_loader;
	m_maskBounds = [-1, -1];
	m_eventTarget;
	constructor(e, t) {
		(0, i.Gn)(this);
		this.m_loader = e;
		this.m_eventTarget = t;
	}
	Init() {
		this.m_fnUnregisterFromLoader = this.m_loader.AddEventListener(this);
		if (this.m_loader.BInitialized()) {
			this.OnLoaderInitialized();
		}
	}
	GetGameID() {
		return this.m_loader.GetGameID();
	}
	BInitialized() {
		return this.m_loader.BInitialized();
	}
	IsActiveRecording(e) {
		return this.m_loader.IsActiveRecording(e);
	}
	IsActiveTimeline(e) {
		return this.m_loader.IsActiveTimeline(e);
	}
	GetStateDescriptionAtGlobalMS(e) {
		return this.m_loader.GetStateDescriptionAtGlobalMS((0, u.Sb)(e));
	}
	GetTimelineOffsetFromGlobal(e, t) {
		return this.m_loader.GetTimelineOffsetFromGlobal(e, t);
	}
	GetTimelineStartTime(e) {
		const t = this.m_loader.GetTimelineMetadata(e);
		if (t?.metadata) {
			return t.metadata.date_recorded;
		} else {
			return null;
		}
	}
	BEmpty() {
		return false;
	}
	GetTimelines() {
		return this.m_loader.GetTimelines();
	}
	GetGlobalTimelineEndMS() {
		return this.m_loader.GetGlobalTimelineEndMS();
	}
	GetTimelineDataOrStartLoad(e) {
		return this.m_loader.GetTimelineDataOrStartLoad(e);
	}
	GetTimelineStartBeforeGlobalZeroMS(e) {
		return this.m_loader.GetTimelineStartBeforeGlobalZeroMS(e);
	}
	MakeRelativeToTimelineEndIfActive(e, t) {
		return this.m_loader.MakeRelativeToTimelineEndIfActive(e, t);
	}
	FindRangeEventsAtGlobalMS(e) {
		return this.m_loader.FindRangeEventsAtGlobalMS(e);
	}
	Close() {
		if (this.m_fnUnregisterFromLoader) {
			this.m_fnUnregisterFromLoader();
			this.m_fnUnregisterFromLoader = undefined;
		}
		this.m_loader = null;
	}
	OnLoaderInitialized() {
		if (this.m_eventTarget.OnLoaderInitialized) {
			this.m_eventTarget.OnLoaderInitialized();
		}
	}
	OnInvalidate(e) {
		if (this.m_eventTarget.OnInvalidate) {
			this.m_eventTarget.OnInvalidate(e);
		}
	}
	OnTimelineLoaded(e) {
		if (this.m_eventTarget.OnTimelineLoaded) {
			this.m_eventTarget.OnTimelineLoaded(e);
		}
	}
	OnInvalidateRecording(e, t) {
		if (this.m_eventTarget.OnInvalidateRecording) {
			this.m_eventTarget.OnInvalidateRecording(e, t);
		}
	}
}
class g {
	m_playbackCoordinator;
	m_fnUnregisterPlaybackCoordinator;
	m_refTimelineParentCtn;
	m_timelineMask;
	m_durationMS = 0;
	m_mapTimelineClips = i.sH.map([], {
		deep: false,
	});
	m_scrollLeftPX = 0;
	m_scrollWindowWidth = null;
	m_scrollWindowOffsetPX = null;
	m_bAutoScrollPaused = false;
	m_autoScrollPauseTimeout = null;
	m_msVisible = 0;
	m_bCustomZoom = false;
	m_bUserClipping = false;
	m_prevLeftAndVisible = null;
	m_rgTimelineOffsets = [];
	m_mapTimelineEntries = i.sH.map([], {
		deep: false,
	});
	m_bInitialized = false;
	m_eThumbnailComponent = null;
	m_nGlobalRelativeThumbnailPositionPX = undefined;
	m_thumbnailHighlightEntry = undefined;
	m_phaseToHighlight = undefined;
	constructor(e, t, r) {
		(0, i.Gn)(this);
		this.m_playbackCoordinator = t;
		this.m_timelineMask = new p(e, this);
		this.m_fnUnregisterPlaybackCoordinator = t.AddEventListener(this);
		this.UpdateClipSummaries(r);
		this.m_timelineMask.Init();
	}
	BInitialized() {
		return this.m_bInitialized;
	}
	OnLoaderInitialized() {
		this.m_durationMS = this.m_timelineMask.GetGlobalTimelineEndMS().valMS;
		this.OnInvalidate();
		this.InitDefaultsIfReady();
	}
	InitDefaultsIfReady() {
		if (
			!this.m_bInitialized &&
			this.m_scrollWindowWidth &&
			this.m_timelineMask.BInitialized()
		) {
			this.m_bInitialized = true;
			this.m_msVisible = this.ComputeDefaultMSVisible();
			this.ScrollToCenteredGlobalMS(
				this.m_playbackCoordinator.GetGlobalMSPlaytime().valMS,
			);
		}
	}
	OnTimelineLoaded(e) {
		(0, o.q_)("OnTimelineLoaded", e);
		if (this.FindTimelineOffsets(e)) {
			this.ComputeEntriesForTimeline(e);
		} else {
			(0, o.tG)("Missing timeline offset metadata for", e);
		}
	}
	OnInvalidate(e) {
		(0, o.q_)("on invalidate", e);
		const t = this.m_timelineMask.GetGlobalTimelineEndMS().valMS;
		const r = t - this.m_durationMS;
		const n = this.m_durationMS <= 0;
		let i;
		this.m_durationMS = t;
		let s = this.IsTempZoom() || this.m_bCustomZoom || this.m_bUserClipping;
		if (r > 0 && n) {
			this.m_msVisible = this.ComputeDefaultMSVisible();
		} else if (r > 0 && !this.m_bAutoScrollPaused && !s) {
			this.m_msVisible = this.ComputeDefaultMSVisible();
		} else if (r < 0 && this.m_msVisible > t) {
			this.m_msVisible = this.ComputeDefaultMSVisible();
			this.ScrollToOffset(0);
		} else if (r < 0) {
			const e = this.FindClosestTimelineStartForOffsetPX(this.m_scrollLeftPX);
			if (e) {
				const t = this.ConvertGlobalMSToGlobalPXOffset(e.globalOffsetMS);
				const r = this.ConvertDeltaPXToDurationMS(this.m_scrollLeftPX - t);
				i = {
					strTimelineID: e.timelineID,
					nTimelineOffsetMS: r,
				};
			}
		}
		const l = this.m_timelineMask.GetTimelines();
		let c = 0;
		if (this.BInitialized() && e) {
			const t = l.findIndex((t) => t.metadata.timeline_id === e);
			if (t >= 0) {
				c = t;
			}
		}
		this.m_rgTimelineOffsets = l.map((e, t) =>
			t >= c ? this.ComputeTimelineOffset(e) : this.m_rgTimelineOffsets[t],
		);
		if (i) {
			const e = this.FindTimelineOffsets(i.strTimelineID);
			if (e) {
				const t = e.globalOffsetMS + i.nTimelineOffsetMS;
				const r = (0, a.OQ)(
					this.ConvertGlobalMSToGlobalPXOffset(t),
					0,
					this.GetMaxScrollLeftPX(),
				);
				this.ScrollToOffset(r);
			}
		}
		l.forEach((e, t) => {
			if (t >= c) {
				this.ComputeEntriesForTimeline(e.metadata.timeline_id);
			}
		});
	}
	OnFocusGlobalMS(e) {
		this.ScrollToCenteredGlobalMS(e.valMS);
	}
	GetGameID() {
		return this.m_timelineMask.GetGameID();
	}
	SetTimelineParentCtnRef(e) {
		this.m_refTimelineParentCtn = e;
	}
	GetTimelineParentCtnRef() {
		return this.m_refTimelineParentCtn;
	}
	SetThumbnailComponent(e) {
		this.m_eThumbnailComponent = e;
		if (!e) {
			this.m_nGlobalRelativeThumbnailPositionPX = undefined;
		}
		if (e !== Jv.Highlight) {
			this.m_thumbnailHighlightEntry = null;
		}
	}
	GetThumbnailComponent() {
		return this.m_eThumbnailComponent;
	}
	SetThumbnailPosition(e) {
		this.m_nGlobalRelativeThumbnailPositionPX = e;
	}
	GetThumbnailPosition() {
		return this.m_nGlobalRelativeThumbnailPositionPX;
	}
	SetThumbnailEntry(e) {
		this.m_thumbnailHighlightEntry = e;
	}
	GetThumbnailEntry() {
		if (this.m_eThumbnailComponent === Jv.Highlight) {
			return this.m_thumbnailHighlightEntry;
		} else {
			return null;
		}
	}
	Close() {
		this.m_timelineMask.Close();
		this.m_timelineMask = null;
		if (this.m_fnUnregisterPlaybackCoordinator) {
			this.m_fnUnregisterPlaybackCoordinator();
		}
		this.m_fnUnregisterPlaybackCoordinator = null;
		this.m_bInitialized = false;
		if (this.m_autoScrollPauseTimeout) {
			this.ClearAutoScrollPauseTimeout();
		}
	}
	ComputeDefaultMSVisible() {
		const e = this.GetTimelineMarginWidth() * 2;
		const t = (this.m_rgTimelineOffsets.length - 1) * 10;
		const r = Math.max(1, this.m_scrollWindowWidth - t - e);
		const n = Math.ceil(
			((e + t) * this.m_durationMS) / (this.m_scrollWindowWidth - (e + t)),
		);
		const i = r * 1000;
		return Math.min(this.m_durationMS + n, i);
	}
	ZoomIn(e, t) {
		if (this.m_msVisible <= 1000) {
			return;
		}
		const r = this.m_msVisible - this.m_msVisible / 1.1 ** e;
		const n = r * t;
		const i = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX);
		const a = Math.max(this.m_msVisible - r, 1000);
		this.m_msVisible = a;
		this.m_bCustomZoom = true;
		this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(i + n));
	}
	ZoomOut(e, t) {
		const r =
			this.m_durationMS +
			this.ConvertDeltaPXToDurationMS(
				(this.m_rgTimelineOffsets.length - 1) * 10 +
					this.GetTimelineMarginWidth() * 2,
			);
		if (this.m_msVisible >= r) {
			return;
		}
		const n = this.m_msVisible * 1.1 ** e - this.m_msVisible;
		const i = n * t;
		const a = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX);
		const s = Math.min(this.m_msVisible + n, r);
		this.m_msVisible = s;
		this.m_bCustomZoom = true;
		this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(a - i));
	}
	IsTempZoom() {
		return !!this.m_prevLeftAndVisible;
	}
	SetTempZoomScale(e, t) {
		let r = Math.max(e, 0);
		let n = Math.min(t, this.m_durationMS);
		this.m_prevLeftAndVisible = [this.m_scrollLeftPX, this.m_msVisible];
		this.m_msVisible = n - r;
		const i = this.ConvertGlobalMSToGlobalPXOffset(r);
		this.ScrollToOffset(i);
	}
	ClearTempZoomScale() {
		if (!this.m_prevLeftAndVisible) {
			return;
		}
		const [e, t] = this.m_prevLeftAndVisible;
		this.m_prevLeftAndVisible = null;
		this.ScrollToOffset(e);
		this.m_msVisible = t;
	}
	SetUserIsClipping(e) {
		this.m_bUserClipping = e;
	}
	GetTimelineGapWidth() {
		return 10;
	}
	GetTimelineMarginWidth() {
		return 12;
	}
	UpdateClipSummaries(e = []) {
		this.m_mapTimelineClips.clear();
		e.forEach((e) => {
			const t = e.start_timeline_id;
			if (!this.m_mapTimelineClips.has(t)) {
				this.m_mapTimelineClips.set(t, []);
			}
			const r = {
				clipID: e.clip_id,
				msDuration: parseInt(e.duration_ms),
				msTimelineOffset: parseInt(e.start_offset_ms),
				timelineID: t,
			};
			this.m_mapTimelineClips.get(t).push(r);
		});
	}
	BEmpty() {
		return this.m_timelineMask.BEmpty();
	}
	ComputeTimelineOffset(e) {
		const t = isNaN(parseInt(e.metadata.duration_ms))
			? 0
			: parseInt(e.metadata.duration_ms);
		const r = e.metadata.recordings.map((e) => {
			const r = parseInt(e.start_offset_ms);
			let n = parseInt(e.duration_ms);
			if (isNaN(n) && this.m_timelineMask.IsActiveRecording(e.recording_id)) {
				n = t - r;
			}
			return {
				recordingID: e.recording_id,
				timelineOffsetMS: r,
				nDurationMS: n,
				bIsActive: this.m_timelineMask.IsActiveRecording(e.recording_id),
				recordingType: e.recording_type,
			};
		});
		const n = (e.metadata.phases || []).map((e) => ({
			timelineOffsetMS: parseInt(e.background_timeline_offset),
			nDurationMS: parseInt(e.duration_ms),
			phase: e,
		}));
		return {
			timelineID: e.metadata.timeline_id,
			globalOffsetMS: e.nGlobalOffsetMS.valMS,
			nDurationMS: t,
			recordingOffsets: r,
			phaseOffsets: n,
		};
	}
	GetCurrentZoomScale() {
		return this.m_msVisible / (this.m_scrollWindowWidth || 1) || 1;
	}
	GetClipsForTimeline(e) {
		return this.m_mapTimelineClips.get(e) || [];
	}
	ComputeEntriesForTimeline(e) {
		const t = this.m_timelineMask.GetTimelineDataOrStartLoad(e);
		if (t && t.m_strState == "loaded") {
			this.m_mapTimelineEntries.set(e, {
				rgGameModes: t.m_rgGameModeChanges,
				rgHighlights: t.m_rgEntries,
			});
		}
	}
	GetVisibleTimelineGameModes(e) {
		return this.m_mapTimelineEntries.get(e)?.rgGameModes;
	}
	GetVisibleTimelineHighlights(e) {
		return this.m_mapTimelineEntries.get(e)?.rgHighlights;
	}
	GetStateDescriptionAtGlobalMS(e) {
		return this.m_timelineMask.GetStateDescriptionAtGlobalMS(e);
	}
	FindRangeEventsAtGlobalMS(e) {
		return this.m_timelineMask.FindRangeEventsAtGlobalMS(e);
	}
	GetTimelineOffsetMS(e) {
		return this.m_timelineMask.GetTimelineStartBeforeGlobalZeroMS(e);
	}
	ScrollToCenteredGlobalMS(e) {
		const t = this.ConvertGlobalMSToGlobalPXOffset(e);
		this.ScrollToOffsetCentered(t);
	}
	ScrollToOffset(e) {
		this.m_scrollLeftPX = (0, a.OQ)(e, 0, this.GetMaxScrollLeftPX());
	}
	ScrollToOffsetCentered(e) {
		const t = Math.max(0, e - this.m_scrollWindowWidth * 0.5);
		this.ScrollToOffset(t);
	}
	ScrollBy(e) {
		const t = this.m_scrollLeftPX + e;
		this.ScrollToOffset(t);
	}
	GetAutoScrollPaused() {
		return this.m_bAutoScrollPaused;
	}
	SetAutoScrollPaused(e) {
		this.ClearAutoScrollPauseTimeout();
		this.m_bAutoScrollPaused = e;
	}
	GetAutoScrollPauseTimeout() {
		return this.m_autoScrollPauseTimeout;
	}
	ClearAutoScrollPauseTimeout() {
		if (this.m_autoScrollPauseTimeout) {
			clearTimeout(this.m_autoScrollPauseTimeout);
		}
		this.m_autoScrollPauseTimeout = null;
	}
	SetAutoScrollPauseTimeout(e = 5000) {
		this.ClearAutoScrollPauseTimeout();
		this.m_autoScrollPauseTimeout = window.setTimeout(() => {
			this.SetAutoScrollPaused(false);
		}, e);
	}
	ScrollToEnd() {
		this.ScrollToOffset(this.GetMaxScrollLeftPX());
	}
	SetScrollWindowWidth(e) {
		this.m_scrollWindowWidth = e;
		if (this.m_timelineMask.BInitialized()) {
			this.ScrollToOffset(this.m_scrollLeftPX);
			this.InitDefaultsIfReady();
		}
	}
	SetScrollWindowOffset(e) {
		this.m_scrollWindowOffsetPX = e;
	}
	GetScrollWindowOffset() {
		return this.m_scrollWindowOffsetPX;
	}
	GetScrollableWidthPX() {
		if (!this.m_rgTimelineOffsets?.length) {
			return 0;
		}
		const e = this.m_rgTimelineOffsets.length - 1;
		const t = this.m_rgTimelineOffsets[e];
		return (
			e * 10 + this.ConvertDurationMSToDeltaPX(t.globalOffsetMS + t.nDurationMS)
		);
	}
	GetOverscanWidth() {
		return (this.GetScrollWindowWidth() * 10) / 100;
	}
	GetScrollWindowWidth() {
		return this.m_scrollWindowWidth;
	}
	GetMaxScrollLeftPX() {
		return Math.max(
			0,
			this.GetScrollableWidthPX() -
				this.GetScrollWindowWidth() +
				this.GetTimelineMarginWidth() * 2,
		);
	}
	BReachedMaxScroll() {
		return (
			Math.ceil(this.m_scrollLeftPX) === Math.ceil(this.GetMaxScrollLeftPX())
		);
	}
	BReachedMinScroll() {
		return this.m_scrollLeftPX === 0;
	}
	GetVisualWindowStartPX() {
		return this.m_scrollLeftPX;
	}
	GetVisualWidth() {
		return Math.min(
			this.m_scrollWindowWidth,
			this.GetScrollableWidthPX() + this.GetTimelineMarginWidth() * 2,
		);
	}
	GetVirtualWindowStartPX() {
		return Math.max(this.m_scrollLeftPX - this.GetOverscanWidth(), 0);
	}
	GetVirtualWindowWidthPX() {
		const e = (0, a.OQ)(this.m_scrollLeftPX, 0, this.GetOverscanWidth());
		const t = Math.min(
			this.GetScrollableWidthPX() -
				(this.m_scrollLeftPX + this.m_scrollWindowWidth),
			this.GetOverscanWidth(),
		);
		return e + this.m_scrollWindowWidth + t;
	}
	GetVirtualWindowEndPX() {
		return this.GetVirtualWindowStartPX() + this.GetVirtualWindowWidthPX();
	}
	GetVisibleTimelines() {
		const e =
			this.FindIndexOfClosestTimelineEndForOffsetPX(
				this.GetVirtualWindowStartPX(),
			) + 1;
		const t = this.FindIndexOfClosestTimelineStartForOffsetPX(
			this.GetVirtualWindowEndPX(),
		);
		return this.m_rgTimelineOffsets.slice(e, t + 1).map((e) => {
			const t = Math.max(
				e.globalOffsetMS,
				this.ConvertPXOffsetToGlobalMS(this.GetVirtualWindowStartPX()),
			);
			const r = Math.min(
				e.nDurationMS - (t - e.globalOffsetMS),
				this.ConvertDeltaPXToDurationMS(this.GetVirtualWindowWidthPX()),
			);
			const n = this.ConvertGlobalMSToGlobalPXOffset(t);
			const i = this.ConvertDurationMSToDeltaPX(r);
			const a = this.ConvertGlobalMSToGlobalPXOffset(e.globalOffsetMS);
			const s = this.ConvertDurationMSToDeltaPX(e.nDurationMS);
			return {
				...e,
				pxStart: a,
				pxDuration: s,
				msVisibleStart: t,
				msVisibleDuration: r,
				pxVisibleStart: n,
				pxVisibleDuration: i,
			};
		});
	}
	GetVisibleRecordings() {
		const e = [];
		this.GetVisibleTimelines().forEach((t) => {
			t.recordingOffsets.forEach((r) => {
				const n = t.pxStart + this.GetPXForDuration(r.timelineOffsetMS);
				const i = n + this.GetPXForDuration(r.nDurationMS);
				if (
					!(i < this.GetVirtualWindowStartPX()) &&
					!(n > this.GetVirtualWindowEndPX())
				) {
					e.push({
						recordingID: r.recordingID,
						nStartPX: n,
						nEndPX: i,
						bIsActive: r.bIsActive,
						recordingType: r.recordingType,
					});
				}
			});
		});
		return e;
	}
	GetVisibleClips() {
		const e = [];
		this.GetVisibleTimelines().forEach((t) => {
			const r = this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS);
			this.GetClipsForTimeline(t.timelineID).forEach((n) => {
				const i = r + this.GetPXForDuration(n.msTimelineOffset);
				const a = Math.min(
					this.GetVirtualWindowEndPX(),
					this.ConvertGlobalMSToGlobalPXOffset(
						t.globalOffsetMS + n.msTimelineOffset + n.msDuration,
					),
				);
				if (
					!(a < this.GetVirtualWindowStartPX()) &&
					!(i > this.GetVirtualWindowEndPX())
				) {
					e.push({
						clipID: n.clipID,
						pxClipStart: i,
						pxClipEnd: a,
					});
				}
			});
		});
		return e;
	}
	GetPXForDuration(e) {
		return e / this.GetCurrentZoomScale();
	}
	GetVisibleTimelinesInWindow() {
		const e =
			this.FindIndexOfClosestTimelineEndForOffsetPX(this.m_scrollLeftPX) + 1;
		const t = this.FindIndexOfClosestTimelineStartForOffsetPX(
			this.m_scrollLeftPX + this.m_scrollWindowWidth,
		);
		return this.m_rgTimelineOffsets.slice(e, t + 1);
	}
	GetVisibleWindowRelativeTimelines() {
		return this.GetVisibleTimelinesInWindow().map((e) => {
			const t = this.m_scrollLeftPX;
			const r = this.GetVirtualWindowEndPX() - this.GetOverscanWidth();
			const n = this.ConvertGlobalMSToGlobalPXOffset(e.globalOffsetMS);
			const i = n + this.ConvertDurationMSToDeltaPX(e.nDurationMS);
			const a = Math.max(n, t);
			const s = Math.min(i, r);
			return {
				timelineID: e.timelineID,
				nVisibleStartPX: a,
				nEndPX: s,
				nTimelineStartMS: this.ConvertPXToTimelineRelativeMS(t),
				nGlobalStartMS: this.ConvertPXOffsetToGlobalMS(t),
			};
		});
	}
	ConvertPXToTimelineRelativeMS(e, t = "start") {
		const r = this.ConvertPXOffsetToGlobalMS(e);
		let n = this.m_timelineMask.GetTimelineOffsetFromGlobal(r, 0);
		if (
			t == "end-if-active" &&
			n.strTimelineID &&
			this.m_timelineMask.IsActiveTimeline(n.strTimelineID)
		) {
			return this.m_timelineMask.MakeRelativeToTimelineEndIfActive(
				n.strTimelineID,
				n.nTimelineOffsetMS.valMS,
			);
		} else {
			return n.nTimelineOffsetMS.valMS;
		}
	}
	GetTimeRecorded(e) {
		return this.m_timelineMask.GetTimelineStartTime(e);
	}
	ConvertGlobalMSToClipOrNone(e) {
		const t = this.m_timelineMask.GetTimelineOffsetFromGlobal(e, 0);
		if (!t) {
			return null;
		}
		const { nTimelineOffsetMS: r, strTimelineID: n } = t;
		if (!n) {
			return null;
		}
		if (this.m_mapTimelineClips.has(n)) {
			return this.m_mapTimelineClips
				.get(n)
				.find(
					(e) =>
						e.msTimelineOffset <= r.valMS &&
						e.msTimelineOffset + e.msDuration >= r.valMS,
				);
		}
		return null;
	}
	ConvertGlobalMSToScrollWindowPXOffset(e) {
		return this.ConvertGlobalMSToGlobalPXOffset(e) - this.m_scrollLeftPX;
	}
	ConvertGlobalMSToGlobalPXOffset(e, t = -1) {
		if (t < 0) {
			t = SortedFindLessOrEqual(
				this.m_rgTimelineOffsets,
				(t) => e - t.globalOffsetMS,
			);
		}
		const r = t * 10;
		return this.ConvertDurationMSToDeltaPX(e) + r;
	}
	ConvertPXOffsetToGlobalMS(e, t = true) {
		if (this.BPositionInGap(e)) {
			if (!t) {
				return null;
			}
			const r = this.FindClosestTimelineEndForOffsetPX(e);
			if (r) {
				return r.globalOffsetMS + r.nDurationMS;
			} else {
				return 0;
			}
		}
		const r = this.FindClosestTimelineStartForOffsetPX(e);
		if (!r) {
			return null;
		}
		const n = this.ConvertGlobalMSToGlobalPXOffset(r.globalOffsetMS);
		const i = this.ConvertDeltaPXToDurationMS(e - n);
		return r.globalOffsetMS + i;
	}
	FindClosestTimelineEndForOffsetPX(e) {
		const t = this.FindIndexOfClosestTimelineEndForOffsetPX(e);
		if (t < 0) {
			return null;
		}
		return this.m_rgTimelineOffsets[t];
	}
	FindClosestTimelineStartForOffsetPX(e) {
		const t = this.FindIndexOfClosestTimelineStartForOffsetPX(e);
		if (t < 0) {
			return null;
		}
		return this.m_rgTimelineOffsets[t];
	}
	FindIndexOfClosestTimelineEndForOffsetPX(e) {
		return SortedFindLessOrEqual(this.m_rgTimelineOffsets, (t) => {
			const r =
				this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS) +
				this.ConvertDurationMSToDeltaPX(t.nDurationMS);
			return e - r;
		});
	}
	FindIndexOfClosestTimelineStartForOffsetPX(e) {
		return SortedFindLessOrEqual(this.m_rgTimelineOffsets, (t) => {
			const r = this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS);
			return e - r;
		});
	}
	FindTimelineOffsets(e) {
		return this.m_rgTimelineOffsets.find((t) => t.timelineID === e);
	}
	BPositionInGap(e) {
		const t = this.FindIndexOfClosestTimelineEndForOffsetPX(e);
		if (t < 0) {
			return false;
		}
		const r = t + 1;
		if (r >= this.m_rgTimelineOffsets.length) {
			return false;
		}
		const n = this.m_rgTimelineOffsets[t];
		const i = this.m_rgTimelineOffsets[r];
		const a = this.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS);
		return (
			e < this.ConvertGlobalMSToGlobalPXOffset(i.globalOffsetMS) && e !== a
		);
	}
	ConvertDurationMSToDeltaPX(e) {
		return e / this.GetCurrentZoomScale();
	}
	ConvertDeltaPXToDurationMS(e) {
		return e * this.GetCurrentZoomScale();
	}
	SetPhaseToHighlight(e) {
		this.m_phaseToHighlight = e;
	}
	GetPhaseToHighlight() {
		return this.m_phaseToHighlight;
	}
}
(0, n.Cg)([i.sH], g.prototype, "m_durationMS", undefined);
(0, n.Cg)([i.sH], g.prototype, "m_scrollLeftPX", undefined);
(0, n.Cg)([i.sH], g.prototype, "m_scrollWindowWidth", undefined);
(0, n.Cg)([i.sH], g.prototype, "m_scrollWindowOffsetPX", undefined);
(0, n.Cg)([i.sH], g.prototype, "m_bAutoScrollPaused", undefined);
(0, n.Cg)([i.sH], g.prototype, "m_autoScrollPauseTimeout", undefined);
(0, n.Cg)([i.sH], g.prototype, "m_msVisible", undefined);
(0, n.Cg)([i.sH.ref], g.prototype, "m_rgTimelineOffsets", undefined);
(0, n.Cg)([i.sH], g.prototype, "m_bInitialized", undefined);
(0, n.Cg)([i.sH], g.prototype, "m_eThumbnailComponent", undefined);
(0, n.Cg)(
	[i.sH],
	g.prototype,
	"m_nGlobalRelativeThumbnailPositionPX",
	undefined,
);
(0, n.Cg)([i.sH], g.prototype, "m_thumbnailHighlightEntry", undefined);
(0, n.Cg)([i.sH], g.prototype, "m_phaseToHighlight", undefined);
(0, n.Cg)([i.XI], g.prototype, "OnLoaderInitialized", null);
(0, n.Cg)([i.XI], g.prototype, "InitDefaultsIfReady", null);
(0, n.Cg)([i.XI], g.prototype, "OnInvalidate", null);
(0, n.Cg)([i.XI], g.prototype, "ZoomIn", null);
(0, n.Cg)([i.XI], g.prototype, "ZoomOut", null);
(0, n.Cg)([i.XI], g.prototype, "SetTempZoomScale", null);
(0, n.Cg)([i.XI], g.prototype, "ClearTempZoomScale", null);
(0, n.Cg)([i.XI], g.prototype, "UpdateClipSummaries", null);
(0, n.Cg)([c.oI], g.prototype, "BReachedMaxScroll", null);
(0, n.Cg)([c.oI], g.prototype, "BReachedMinScroll", null);
const h = l.createContext(null);
export function _T(e) {
	let {
		loader: t,
		playbackCoordinator: r,
		children: n,
		clipSummaries: i,
		refTimelineParentCtn: a,
	} = e;
	let [s, o] = (0, l.useState)(null);
	(0, l.useEffect)(() => {
		if (!t) {
			return;
		}
		let e = new g(t, r, i);
		o(e);
		return () => e.Close();
	}, [t]);
	(0, l.useEffect)(() => {
		if (s) {
			s.UpdateClipSummaries(i);
		}
	}, [s, i]);
	(0, l.useEffect)(() => {
		if (s && a) {
			s.SetTimelineParentCtnRef(a.current);
		}
	}, [s, a]);
	(function (e) {
		let t = (0, m.Pm)();
		(0, l.useEffect)(() => {
			if (e) {
				e.SetUserIsClipping(t);
			}
		}, [e, t]);
	})(s);
	(function (e) {
		let t = l.useCallback(
			(t, r) => {
				if (!e) {
					return;
				}
				if (!t || !r) {
					e.ClearTempZoomScale();
					return;
				}
				let n = Math.floor((r.valMS - t.valMS) * 0.1);
				let i = r.valMS - t.valMS;
				if (i < d * 0.9) {
					n = Math.floor((d - i) / 2);
				}
				let a = t.valMS - n;
				let s = r.valMS + n;
				e.SetTempZoomScale(a, s);
			},
			[e],
		);
		(0, m.vv)(t);
	})(s);
	if (s) {
		return l.createElement(
			h.Provider,
			{
				value: s,
			},
			n,
		);
	} else {
		return null;
	}
}
export function uR() {
	return (0, l.useContext)(h);
}
