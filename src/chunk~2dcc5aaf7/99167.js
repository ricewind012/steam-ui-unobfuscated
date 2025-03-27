import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./83957.js";
import o from "./8573.js";
import { ap, q_ as q } from "./59715.js";
import c from "./72476.js";
import m from "./79769.js";
import { dm } from "./34428.js";
const s = a;
const A = 1000000;
class p {
	steamid;
	host;
	playback_position;
	playback_speed = 1;
	video_res;
	audio_rate;
	audio_ch;
	bw_avg;
	bw_required;
	broadcast_accountid;
	useragent;
	sessionid;
	broadcast_origin;
}
class g extends p {
	video_buffer;
	audio_buffer;
	seconds_delta;
	bytes_received;
	frames_dropped;
	frames_decoded;
	failed_segments;
	bw_min;
	bw_max;
	seg_time_avg;
	seg_time_min;
	seg_time_max;
	initial_vid_res;
	ttff;
	seg_duration;
}
class h extends p {
	last_segment_response;
	audio_stalled;
	active_downloads;
	vid_down_progress;
	segment_stalled;
	segment1_bytes;
	segment1_time;
	segment2_bytes;
	segment2_time;
	segment3_bytes;
	segment3_time;
}
export class _L {
	m_steamIDBroadcast = "";
	m_steamIDViewer = "";
	m_broadcastID = "";
	m_ulViewerToken = "";
	m_strCDNAuthUrlParameters = undefined;
	m_host = "";
	m_strBroadcastOrigin = "";
	m_strStatsLink = "";
	m_strStalledLink = "";
	m_strEventLogLink = "";
	m_allTimeSnapshot = new _(0);
	m_rgSnapShots = new Array(new _(0));
	m_videoResolution = 0;
	m_audioRate = 0;
	m_audioChannel = 0;
	m_frameRate = 0;
	m_strBufferingVideoResolution = "0x0@0";
	m_nPlaybackVideoResolution = 0;
	m_strPlaybackVideoResolution = "0x0";
	m_htmlVideoResolution = 0;
	m_strHtmlVideoDisplay = "";
	m_nAudioBandwidth = 0;
	m_nVideoBandwidth = 0;
	m_nBandwidthRequired = 0;
	m_nCurBandwidthVideo = 0;
	m_nAudioBufferedMS = 0;
	m_nVideoBufferedMS = 0;
	m_nActiveDownloads = 0;
	m_nVideoDownloadProgress = 0;
	m_videoBufferedRanges = null;
	m_audioBufferedRanges = null;
	m_nSegmentDurationMS = 0;
	m_nPlaybackRate = 0;
	m_nTimeToFirstFrameMS = -1;
	m_fpsMonitor = new b();
	constructor() {
		Gn(this);
	}
	GetBytesReceivedToDisplay() {
		return dm(this.m_allTimeSnapshot.m_nBytesReceived, 1);
	}
	GetBufferingResolutionToDisplay() {
		return this.m_strBufferingVideoResolution;
	}
	GetPlaybackResolutionToDisplay() {
		return this.m_strPlaybackVideoResolution;
	}
	GetHTMLVideoResolutionToDisplay() {
		return this.m_strHtmlVideoDisplay;
	}
	GetDroppedFramesToDisplay() {
		return `${this.m_allTimeSnapshot.m_nFramesDropped}/${this.m_allTimeSnapshot.m_nFramesDecoded}`;
	}
	GetStalledEventsToDisplay() {
		return String(this.m_allTimeSnapshot.m_nStallEvents);
	}
	GetFailedDownloadsToDisplay() {
		return String(this.m_allTimeSnapshot.m_nFailedSegments);
	}
	GetNumBufferedVideoRanges() {
		if (this.m_videoBufferedRanges) {
			return this.m_videoBufferedRanges.length;
		} else {
			return 0;
		}
	}
	GetNumBufferedAudioRanges() {
		if (this.m_audioBufferedRanges) {
			return this.m_audioBufferedRanges.length;
		} else {
			return 0;
		}
	}
	GetBufferedVideoSegmentForDisplay(e) {
		if (this.m_videoBufferedRanges && e < this.m_videoBufferedRanges.length) {
			return `${ap(this.m_videoBufferedRanges.start(e))} - ${ap(
				this.m_videoBufferedRanges.end(e),
			)}`;
		} else {
			return (0, Localize)("#DASHPlayerStats_VideoNoRangeInformation");
		}
	}
	GetBufferedAudioSegmentForDisplay(e) {
		if (this.m_audioBufferedRanges && e < this.m_audioBufferedRanges.length) {
			return `${ap(this.m_audioBufferedRanges.start(e))} - ${ap(
				this.m_audioBufferedRanges.end(e),
			)}`;
		} else {
			return (0, Localize)("#DASHPlayerStats_AudioNoRangeInformation");
		}
	}
	GetBandwidthStatsToDisplay() {
		if (this.m_rgSnapShots.length < 2) {
			return `${(this.m_allTimeSnapshot.m_nBandwidthMin / A).toFixed(3)} / ${(
				this.m_allTimeSnapshot.m_nBandwidthMax / A
			).toFixed(3)} / ${(
				this.m_allTimeSnapshot.GetAverageBandwidth() / A
			).toFixed(3)}`;
		}
		{
			let e = this.m_rgSnapShots[this.m_rgSnapShots.length - 2];
			let t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
			return `${(
				(t.m_nBandwidthMin == 0
					? e.m_nBandwidthMin
					: Math.min(e.m_nBandwidthMin, t.m_nBandwidthMin)) / A
			).toFixed(3)} / ${(
				Math.max(e.m_nBandwidthMax, t.m_nBandwidthMax) / A
			).toFixed(3)} / ${(e.GetAverageBandwidthFromTwo(t) / A).toFixed(3)}`;
		}
	}
	GetDownloadTimeStatsToDisplay() {
		if (this.m_rgSnapShots.length < 2) {
			return `${(
				this.m_allTimeSnapshot.m_nSegmentDownloadTimeMinMS / 1000
			).toFixed(3)} / ${(
				this.m_allTimeSnapshot.m_nSegmentDownloadTimeMaxMS / 1000
			).toFixed(3)} / ${(
				this.m_allTimeSnapshot.GetAverageDownloadTime() / 1000
			).toFixed(3)}`;
		}
		{
			let e = this.m_rgSnapShots[this.m_rgSnapShots.length - 2];
			let t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
			return `${(
				(t.m_nSegmentDownloadTimeMinMS == 0
					? e.m_nSegmentDownloadTimeMinMS
					: Math.min(
							e.m_nSegmentDownloadTimeMinMS,
							t.m_nSegmentDownloadTimeMinMS,
						)) / 1000
			).toFixed(3)} / ${(
				Math.max(e.m_nSegmentDownloadTimeMaxMS, t.m_nSegmentDownloadTimeMaxMS) /
				1000
			).toFixed(3)} / ${(e.GetAverageDownloadTimeFromTwo(t) / 1000).toFixed(
				3,
			)}`;
		}
	}
	BHasFrameInformation() {
		return this.m_allTimeSnapshot.m_nFramesDecoded > 0;
	}
	GetBandwidthRequiredToDisplay() {
		return (this.m_nBandwidthRequired / A).toFixed(3);
	}
	GetBandwithVideoToDisplay() {
		return (this.m_nCurBandwidthVideo / A).toFixed(3);
	}
	GetContentServerToDisplay() {
		return this.m_host;
	}
	GetVideoBufferedToDisplay() {
		return (this.m_nVideoBufferedMS / 1000).toFixed(3);
	}
	GetAudioBufferedToDisplay() {
		return (this.m_nAudioBufferedMS / 1000).toFixed(3);
	}
	GetActiveDownloadsToDisplay() {
		return String(this.m_nActiveDownloads);
	}
	GetVideoDownloadProgressToDisplay() {
		if (this.m_nVideoDownloadProgress) {
			return `${String(Math.round(this.m_nVideoDownloadProgress * 100))}%`;
		} else {
			return "100%";
		}
	}
	GetTimeToFirstFrameToDisplay() {
		if (this.m_nTimeToFirstFrameMS == -1) {
			return "Unknown";
		} else {
			return String(this.m_nTimeToFirstFrameMS);
		}
	}
	GetPersistentFrameDropsForDisplay() {
		return String(this.m_fpsMonitor.BIsDroppingFrames());
	}
	GetCurrentFPSForDisplay() {
		if (this.m_fpsMonitor.BHasCurrentFPS()) {
			return this.m_fpsMonitor.GetCurrentFPS().toFixed(1);
		} else {
			return (0, Localize)("#DASHPlayerStats_Tracking");
		}
	}
	GetPlaybackRateForDisplay() {
		return `${this.m_nPlaybackRate.toFixed(1)}x`;
	}
	GetFPSMonitor() {
		return this.m_fpsMonitor;
	}
	SetHTMLVideoPlayerDisplay(e, t, r, n) {
		if (this.m_htmlVideoResolution != n) {
			this.m_htmlVideoResolution = n;
			this.m_strHtmlVideoDisplay = `${r}x${n}`;
		}
		if (this.m_nPlaybackVideoResolution != t) {
			this.m_nPlaybackVideoResolution = t;
			this.m_strPlaybackVideoResolution = `${e}x${t}`;
		}
	}
	SetVideoPlaybackResolution(e, t, r) {
		if (this.m_videoResolution == 0) {
			this.m_allTimeSnapshot.m_nInitialVideoResolution = t;
			this.m_rgSnapShots[
				this.m_rgSnapShots.length - 1
			].m_nInitialVideoResolution = t;
		}
		this.m_strBufferingVideoResolution = `${e}x${t}@${r}`;
		this.m_videoResolution = t;
		this.m_frameRate = r;
	}
	SetRepresentation(e) {
		if (e) {
			if (e.nAudioSamplingRate) {
				this.m_audioRate = Math.round(e.nBandwidth / 1000);
				this.m_audioChannel = e.nAudioChannels;
				this.m_nAudioBandwidth = e.nBandwidth;
			} else if (e.nFrameRate) {
				this.SetVideoPlaybackResolution(e.nWidth, e.nHeight, e.nFrameRate);
				this.m_nVideoBandwidth = e.nBandwidth;
			}
			this.m_nBandwidthRequired =
				this.m_nAudioBandwidth + this.m_nVideoBandwidth;
		}
	}
	SetCurrentVideoBandwidth(e) {
		this.m_nCurBandwidthVideo = e;
	}
	SetSegmentDurationMS(e) {
		this.m_nSegmentDurationMS = e;
	}
	SetBroadcasterAndViewerInfo(e, t, r, n, i) {
		this.m_steamIDBroadcast = e;
		this.m_steamIDViewer = t;
		this.m_broadcastID = r;
		this.m_ulViewerToken = n;
		this.m_strCDNAuthUrlParameters = i;
	}
	SetAnalyticLinks(e, t, r) {
		this.m_strStatsLink = e;
		this.m_strStalledLink = t;
		this.m_strEventLogLink = r;
	}
	SetVideoInitializationURL(e) {
		let t = new URL(e);
		this.m_host = t.hostname;
		this.m_strBroadcastOrigin = t.searchParams.get("broadcast_origin") || "";
		let r = this.m_strBroadcastOrigin.indexOf(":");
		if (r !== -1) {
			this.m_strBroadcastOrigin = this.m_strBroadcastOrigin.substr(0, r);
		}
	}
	SetAudioRate(e) {
		this.m_audioRate = e;
	}
	CaptureFrequentlyUpdatingInformation(e, t) {
		let r = this.ExtractFrameInfo(e);
		this.LogFrameInfo(r);
		this.LogBufferDuration(t, e);
	}
	LogDownload(e, t) {
		this.m_allTimeSnapshot.SegmentReceived(e, t);
		this.m_rgSnapShots[this.m_rgSnapShots.length - 1].SegmentReceived(e, t);
	}
	LogSegmentDownloadFailure(e, t) {
		this.m_allTimeSnapshot.m_nFailedSegments += 1;
		this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nFailedSegments += 1;
		this.m_allTimeSnapshot.m_nLastSegementDownloadStatus = t;
		this.m_rgSnapShots[
			this.m_rgSnapShots.length - 1
		].m_nLastSegementDownloadStatus = t;
		this.LogDownload(0, e);
	}
	LogVideoError(e) {}
	LogVideoOnCanPlay(e) {
		if (this.m_nTimeToFirstFrameMS === -1) {
			this.m_nTimeToFirstFrameMS = Date.now() - this.m_allTimeSnapshot.m_timeMS;
		}
	}
	LogErrorEvent(e, t) {}
	ReportVideoStalled(e, t) {
		if (this.m_strStalledLink.length == 0) {
			return;
		}
		let r = this.FindBehindSegmentLoader(e, t);
		if (!r) {
			q("DASHStats: Did not find any audio or video loaders");
			return;
		}
		this.m_allTimeSnapshot.m_nStallEvents += 1;
		this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nStallEvents += 1;
		let n = new h();
		this.GatherCommonStats(
			n,
			t,
			r.GetBandwidthRequired(),
			r.GetAvgDownloadRate(),
		);
		n.last_segment_response =
			this.m_rgSnapShots[
				this.m_rgSnapShots.length - 1
			].m_nLastSegementDownloadStatus;
		n.audio_stalled = r.ContainsAudio();
		this.CaptureActiveDownloads(e);
		n.active_downloads = this.m_nActiveDownloads;
		n.vid_down_progress = this.m_nVideoDownloadProgress;
		let i = r.GetDownloadHistory();
		let a = 0;
		for (let e = i.length - 1; e >= 0 && a < 3; --e) {
			++a;
			n[`segment${a}_bytes`] = i[e].cubData;
			n[`segment${a}_time`] = Math.round(i[e].nDownloadMS) / 1000;
		}
		this.SendReportToServer(n, this.m_strStalledLink);
	}
	FindBehindSegmentLoader(e, t) {
		let r = false;
		let n = false;
		let t_currentTime = t.currentTime;
		let a = null;
		let s = null;
		for (let t of e) {
			s = t.ContainsAudio() ? t : s;
			a = t.ContainsVideo() ? t : s;
			if (t.BHasEnoughBuffered(t_currentTime)) {
				n = n || t.ContainsAudio();
				r = r || t.ContainsVideo();
			}
		}
		n = n || s == null;
		if (!r || (r && n)) {
			return a;
		} else {
			return s;
		}
	}
	ExtractFrameInfo(e) {
		let t = 0;
		let r = 0;
		if (e.getVideoPlaybackQuality) {
			try {
				let n = e.getVideoPlaybackQuality();
				r = n.totalVideoFrames;
				t = n.droppedVideoFrames;
			} catch (e) {
				q(
					"Browser does not support HTMLVideoElement.getVideoPlaybackQuality()",
					e.message,
				);
			}
		} else if (e.webkitDecodedFrames) {
			r = e.webkitDecodedFrames;
			t = e.webkitDroppedFrames;
		} else if (e.webkitDecodedFrameCount) {
			r = e.webkitDecodedFrameCount;
			t = e.webkitDroppedFrameCount;
		}
		return {
			framesDecoded: r,
			framesDropped: t,
		};
	}
	LogFrameInfo(e) {
		this.m_allTimeSnapshot.m_nFramesDecoded = e.framesDecoded;
		this.m_allTimeSnapshot.m_nFramesDropped = e.framesDropped;
		let t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
		if (this.m_rgSnapShots.length == 1) {
			t.m_nFramesDecoded = e.framesDecoded;
			t.m_nFramesDropped = e.framesDropped;
		} else {
			let r = this.m_rgSnapShots[this.m_rgSnapShots.length - 2];
			t.m_nFramesDecoded = e.framesDecoded - r.m_nFramesDecoded;
			t.m_nFramesDropped = e.framesDropped - r.m_nFramesDropped;
		}
	}
	LogBufferDuration(e, t) {
		this.m_nActiveDownloads = 0;
		for (let r of e) {
			if (r.ContainsAudio()) {
				this.m_nAudioBufferedMS = r.GetAmountBufferedMS(t.currentTime);
				this.m_audioBufferedRanges = r.GetSourceBufferTimeRanges();
			} else if (r.ContainsVideo()) {
				this.m_nVideoBufferedMS = r.GetAmountBufferedMS(t.currentTime);
				this.m_videoBufferedRanges = r.GetSourceBufferTimeRanges();
			}
			this.m_nActiveDownloads += r.GetActiveDownloads();
			if (r.ContainsVideo()) {
				this.m_nVideoDownloadProgress = r.GetActiveDownloadProgress();
			}
		}
		this.m_nPlaybackRate = t.playbackRate;
	}
	CaptureActiveDownloads(e) {
		this.m_nActiveDownloads = 0;
		for (let t of e) {
			this.m_nActiveDownloads += t.GetActiveDownloads();
			if (t.ContainsVideo()) {
				this.m_nVideoDownloadProgress = t.GetActiveDownloadProgress();
			}
		}
	}
	ReportPlayerStats(e, t) {
		if (this.m_strStatsLink.length == 0) {
			return;
		}
		let r = this.ExtractFrameInfo(t);
		if (
			r.framesDecoded == this.m_allTimeSnapshot.m_nFramesDecoded &&
			this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nBytesReceived == 0
		) {
			this.CreateNewEmptySnapshot(t.videoHeight);
			return;
		}
		this.LogFrameInfo(r);
		this.LogBufferDuration(e, t);
		let n = new g();
		let i = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
		n.frames_decoded = i.m_nFramesDecoded;
		n.frames_dropped = i.m_nFramesDropped;
		n.bytes_received = i.m_nBytesReceived;
		n.seconds_delta = Math.round((Date.now() - i.m_timeMS) / 1000);
		n.failed_segments = i.m_nFailedSegments;
		n.bw_min = i.m_nBandwidthMin;
		n.bw_max = i.m_nBandwidthMax;
		n.audio_buffer = Math.round(this.m_nAudioBufferedMS / 1000);
		n.video_buffer = Math.round(this.m_nVideoBufferedMS / 1000);
		n.seg_time_avg = Math.round(i.GetAverageDownloadTime()) / 1000;
		n.seg_time_min = Math.round(i.m_nSegmentDownloadTimeMinMS) / 1000;
		n.seg_time_max = Math.round(i.m_nSegmentDownloadTimeMaxMS) / 1000;
		n.initial_vid_res = i.m_nInitialVideoResolution;
		n.ttff = this.m_nTimeToFirstFrameMS;
		n.seg_duration = this.m_nSegmentDurationMS;
		this.GatherCommonStats(
			n,
			t,
			this.m_nBandwidthRequired,
			i.GetAverageBandwidth(),
		);
		this.CreateNewEmptySnapshot(t.videoHeight);
		this.SendReportToServer(n, this.m_strStatsLink);
	}
	async SendReportToServer(e, t) {
		let r = new URL(t);
		let n = new FormData();
		for (let t of Object.keys(e)) {
			n.append(t, e[t]);
		}
		n.append("l", r.searchParams.get("l"));
		n.append("e", r.searchParams.get("e"));
		n.append("h", r.searchParams.get("h"));
		q("CDASHStats Sending Report to Server", e);
		s.post(t, n).catch((e) => {
			q("Failed to upload stats: ", e);
		});
	}
	CreateNewEmptySnapshot(e) {
		if (this.m_rgSnapShots.length >= 5) {
			this.m_rgSnapShots.shift();
		}
		this.m_rgSnapShots.push(new _(e));
	}
	GatherCommonStats(e, t, r, n) {
		e.steamid = this.m_steamIDViewer;
		e.host = this.m_host;
		e.playback_position = Math.round(t.currentTime);
		e.video_res = this.m_videoResolution;
		e.audio_rate = this.m_audioRate;
		e.audio_ch = this.m_audioChannel;
		e.bw_required = r;
		e.bw_avg = Math.round(n);
		e.broadcast_accountid = this.m_steamIDBroadcast
			? new o.b(this.m_steamIDBroadcast).GetAccountID()
			: 0;
		e.useragent = window.navigator.userAgent;
		e.sessionid = c.TS.SESSIONID;
		e.broadcast_origin = this.m_strBroadcastOrigin;
	}
}
Cg([i.sH], _L.prototype, "m_allTimeSnapshot", undefined);
Cg([i.sH], _L.prototype, "m_strBufferingVideoResolution", undefined);
Cg([i.sH], _L.prototype, "m_strPlaybackVideoResolution", undefined);
Cg([i.sH], _L.prototype, "m_strHtmlVideoDisplay", undefined);
Cg([i.sH], _L.prototype, "m_nBandwidthRequired", undefined);
Cg([i.sH], _L.prototype, "m_nCurBandwidthVideo", undefined);
Cg([i.sH], _L.prototype, "m_nAudioBufferedMS", undefined);
Cg([i.sH], _L.prototype, "m_nVideoBufferedMS", undefined);
Cg([i.sH], _L.prototype, "m_nActiveDownloads", undefined);
Cg([i.sH], _L.prototype, "m_nVideoDownloadProgress", undefined);
Cg([i.sH], _L.prototype, "m_videoBufferedRanges", undefined);
Cg([i.sH], _L.prototype, "m_audioBufferedRanges", undefined);
Cg([i.sH], _L.prototype, "m_nPlaybackRate", undefined);
Cg([i.XI], _L.prototype, "SetVideoPlaybackResolution", null);
Cg([i.XI], _L.prototype, "SetRepresentation", null);
Cg([i.XI], _L.prototype, "SetCurrentVideoBandwidth", null);
Cg([i.XI], _L.prototype, "CaptureFrequentlyUpdatingInformation", null);
Cg([i.XI], _L.prototype, "LogDownload", null);
Cg([i.XI], _L.prototype, "LogSegmentDownloadFailure", null);
Cg([i.XI], _L.prototype, "LogFrameInfo", null);
Cg([i.XI], _L.prototype, "LogBufferDuration", null);
class _ {
	m_timeMS = Date.now();
	m_nBytesReceived = 0;
	m_nInitialVideoResolution = 0;
	m_nFailedSegments = 0;
	m_nStallEvents = 0;
	m_nEntries = 0;
	m_nSegmentDownloadTimeTotalMS = 0;
	m_nSegmentDownloadTimeMaxMS = 0;
	m_nSegmentDownloadTimeMinMS = 0;
	m_nBandwidthTotal = 0;
	m_nBandwidthMin = 0;
	m_nBandwidthMax = 0;
	m_nLastSegementDownloadStatus = 200;
	m_nFramesDecoded = 0;
	m_nFramesDropped = 0;
	constructor(e) {
		Gn(this);
		this.m_nInitialVideoResolution = e;
	}
	GetAverageBandwidth() {
		return this.m_nBandwidthTotal / Math.max(1, this.m_nEntries);
	}
	GetAverageDownloadTime() {
		return this.m_nSegmentDownloadTimeTotalMS / Math.max(1, this.m_nEntries);
	}
	GetAverageBandwidthFromTwo(e) {
		return (
			(e.m_nBandwidthTotal + this.m_nBandwidthTotal) /
			Math.max(1, e.m_nEntries + this.m_nEntries)
		);
	}
	GetAverageDownloadTimeFromTwo(e) {
		return (
			(e.m_nSegmentDownloadTimeTotalMS + this.m_nSegmentDownloadTimeTotalMS) /
			Math.max(1, e.m_nEntries + this.m_nEntries)
		);
	}
	SegmentReceived(e, t) {
		this.m_nBytesReceived += e;
		if (e < 1024) {
			return;
		}
		let r = Math.round((e * 8 * 1000) / Math.max(t, 1));
		if (this.m_nEntries == 0) {
			this.m_nSegmentDownloadTimeMinMS = t;
			this.m_nBandwidthMin = r;
		} else {
			this.m_nSegmentDownloadTimeMinMS = Math.min(
				t,
				this.m_nSegmentDownloadTimeMinMS,
			);
			this.m_nBandwidthMin = Math.min(r, this.m_nBandwidthMin);
		}
		this.m_nBandwidthMax = Math.max(r, this.m_nBandwidthMax);
		this.m_nSegmentDownloadTimeMaxMS = Math.max(
			t,
			this.m_nSegmentDownloadTimeMaxMS,
		);
		this.m_nBandwidthTotal += r;
		this.m_nSegmentDownloadTimeTotalMS += t;
		this.m_nEntries += 1;
	}
}
Cg([i.sH], _.prototype, "m_nBytesReceived", undefined);
Cg([i.sH], _.prototype, "m_nFailedSegments", undefined);
Cg([i.sH], _.prototype, "m_nStallEvents", undefined);
Cg([i.sH], _.prototype, "m_nSegmentDownloadTimeMaxMS", undefined);
Cg([i.sH], _.prototype, "m_nSegmentDownloadTimeMinMS", undefined);
Cg([i.sH], _.prototype, "m_nBandwidthMin", undefined);
Cg([i.sH], _.prototype, "m_nBandwidthMax", undefined);
Cg([i.sH], _.prototype, "m_nFramesDecoded", undefined);
Cg([i.sH], _.prototype, "m_nFramesDropped", undefined);
Cg([i.XI], _.prototype, "SegmentReceived", null);
class f {
	bDropReading;
	nTotalDecodedFrames;
	reset(e, t) {
		this.bDropReading = e;
		this.nTotalDecodedFrames = t;
	}
}
class b {
	constructor() {
		Gn(this);
	}
	k_nTestFrequencyMS = 1000;
	k_nSlidingWindow = 6;
	k_nDroppedFramesThreshold = 1;
	k_nFailThreshold = 3;
	k_nIgnoreReadingAroundResizeMS = 2000;
	m_schTracker = new m.LU();
	m_rgResultsWindow = [];
	m_nLastResizeMS = 0;
	m_lastFrameInfo;
	m_bDroppingFrameDetected = false;
	m_nCurrentFPS = 0;
	m_fnRequestDecoded;
	StartTracking(e) {
		this.m_schTracker.Schedule(this.k_nTestFrequencyMS, this.TakeReading);
		this.m_fnRequestDecoded = e;
		this.m_lastFrameInfo = this.m_fnRequestDecoded();
		this.m_bDroppingFrameDetected = false;
	}
	BHasCurrentFPS() {
		return this.m_nCurrentFPS != 0;
	}
	GetCurrentFPS() {
		return this.m_nCurrentFPS;
	}
	BIsDroppingFrames() {
		return this.m_bDroppingFrameDetected;
	}
	SetWindowResized() {
		this.m_nLastResizeMS = Date.now();
	}
	BIsInResizeTimeWindow() {
		return (
			this.m_nLastResizeMS &&
			Date.now() - this.m_nLastResizeMS < this.k_nIgnoreReadingAroundResizeMS
		);
	}
	Close() {
		this.m_schTracker.Cancel();
		this.m_rgResultsWindow = [];
		this.m_bDroppingFrameDetected = false;
	}
	LogResizeAction() {
		this.m_nLastResizeMS = Date.now();
	}
	TakeReading() {
		this.m_schTracker.Schedule(this.k_nTestFrequencyMS, this.TakeReading);
		let e = false;
		let t = this.m_fnRequestDecoded();
		if (!this.BIsInResizeTimeWindow()) {
			e =
				this.m_lastFrameInfo.framesDropped > 0 &&
				t.framesDropped - this.m_lastFrameInfo.framesDropped >
					this.k_nDroppedFramesThreshold;
		}
		this.AppendReading(e, t.framesDecoded);
		this.m_bDroppingFrameDetected = this.ComputeDroppingFrames();
		this.m_nCurrentFPS =
			t.framesDecoded -
			this.m_lastFrameInfo.framesDecoded -
			(t.framesDropped - this.m_lastFrameInfo.framesDropped);
		this.m_lastFrameInfo = t;
	}
	ComputeDroppingFrames() {
		return (
			this.m_rgResultsWindow.length == this.k_nSlidingWindow &&
			this.m_rgResultsWindow.filter((e) => e.bDropReading).length >=
				this.k_nFailThreshold
		);
	}
	AppendReading(e, t) {
		let r;
		r =
			this.m_rgResultsWindow.length >= this.k_nSlidingWindow
				? this.m_rgResultsWindow.shift()
				: new f();
		r.reset(e, t);
		this.m_rgResultsWindow.push(r);
	}
}
Cg([i.sH], b.prototype, "m_bDroppingFrameDetected", undefined);
Cg([i.sH], b.prototype, "m_nCurrentFPS", undefined);
Cg([i.XI.bound], b.prototype, "TakeReading", null);
