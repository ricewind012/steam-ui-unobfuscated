var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./44846.js");
require(/*webcrack:missing*/ "./53833.js");
var l = require(/*webcrack:missing*/ "./49455.js");
var c = require(/*webcrack:missing*/ "./79769.js");
import {
	LocaleToELanguage,
	Localize,
} from "../../actual_src/utils/localization.js";
var u = require(/*webcrack:missing*/ "./31958.js");
var d = require(/*webcrack:missing*/ "./93960.js");
import { Sleep } from "../../actual_src/utils/time.js";
var p = require(/*webcrack:missing*/ "./72476.js");
var g = require("./59715.js");
var h = require("./99167.js");
function C(e, t) {
	let r = e.getElementsByTagName("MPD");
	if (r && r.length == 1) {
		return r[0];
	} else {
		return null;
	}
}
function _(e, t) {
	for (let r = 0; r < e.children.length; r++) {
		let n = e.children[r];
		if (n.tagName == t) {
			return n;
		}
	}
	return null;
}
function f(e, t) {
	let r = e.getAttribute(t);
	if (!r) {
		return null;
	}
	let n = new Date(r);
	if (Object.prototype.toString.call(n) === "[object Date]") {
		return n;
	} else {
		return null;
	}
}
function b(e, t) {
	let r = e.getAttribute(t);
	if (!r) {
		return null;
	}
	let n = 0;
	let i = r.match(/(\d*)H/);
	if (i) {
		n += parseFloat(i[1]) * 60 * 60;
	}
	i = r.match(/(\d*)M/);
	if (i) {
		n += parseFloat(i[1]) * 60;
	}
	i = r.match(/(\d*\.?\d*)S/);
	if (i) {
		n += parseFloat(i[1]);
	}
	return n;
}
function y(e, t) {
	let r = e.getAttribute(t);
	if (r) {
		r = r.toLowerCase();
		return r == "true" || (r != "false" && null);
	} else {
		return null;
	}
}
function S(e, t) {
	let r = e.getAttribute(t);
	if (r) {
		return parseInt(r);
	} else {
		return null;
	}
}
function w(e, t) {
	let r = e.getAttribute(t);
	return r || "";
}
function B(e, t, r) {
	let n = {
		nTimeScale: S(e, "timescale"),
		nDuration: S(e, "duration"),
		nStartNumber: S(e, "startNumber"),
		strMedia: w(e, "media"),
		strInitialization: "",
	};
	if (t.bContainsGame) {
		n.strInitialization = n.strMedia;
	} else {
		n.strInitialization = w(e, "initialization");
	}
	if (
		n.nTimeScale &&
		n.nDuration &&
		n.nStartNumber &&
		n.strMedia &&
		n.strInitialization
	) {
		n.strMedia = M(n.strMedia, r);
		n.strInitialization = M(n.strInitialization, r);
		return n;
	} else {
		return null;
	}
}
function v(e, t, r) {
	return (e = (e = (e = e.replace("$RepresentationID$", t)).replace(
		"$Number$",
		r.toString(),
	)).replace(/\$Number%(\d+)d\$/g, (e, t) => {
		t = Number.parseInt(t);
		return (Array(t).join("0") + r.toString()).slice(-t);
	}));
}
function I(e) {
	return e.startsWith("http://") || e.startsWith("https://");
}
function E(e, t) {
	let r = e;
	if (!r.endsWith("/")) {
		r += "/";
	}
	let n = t.startsWith("/") ? 1 : 0;
	return r + t.substring(n);
}
function M(e, t) {
	if (I(e) || !I(t)) {
		return e;
	} else {
		return E(t, e);
	}
}
function T(e) {
	return e.rgRoles.length == 0 || e.rgRoles.findIndex((e) => e == "main") >= 0;
}
function R(e) {
	if (!e) {
		return 0;
	}
	let t = e.segmentTemplate;
	if (t.nTimeScale == 1000) {
		return t.nDuration;
	} else {
		return (t.nDuration / t.nTimeScale) * 1000;
	}
}
function k(e, t, r) {
	let n = R(t);
	let i = r + ((e.GetStartTime() * 1000) % n);
	return Math.floor(i / n) + t.segmentTemplate.nStartNumber;
}
function D(e) {
	return v(e.segmentTemplate.strInitialization, e.strID, 0);
}
class N {
	m_strType = undefined;
	m_nMinBufferTime = 0;
	m_dtAvailabilityStartTime = null;
	m_dtPublishTime = null;
	m_nMinimumUpdatePeriod = 0;
	m_nTimeShiftBufferDepth = 0;
	m_nMediaPresentationDuration = 0;
	m_strBaseURL = "";
	m_strStatsLink = "";
	m_strStalledLink = "";
	m_strEventLogLink = "";
	m_rgPeriods = null;
	m_tsLiveContentStart = 0;
	GetType() {
		return this.m_strType;
	}
	GetMinimumUpdatePeriod() {
		return this.m_nMinimumUpdatePeriod;
	}
	GetAvailabilityStartTime() {
		return this.m_dtAvailabilityStartTime;
	}
	GetPeriods() {
		return this.m_rgPeriods;
	}
	GetBaseURL() {
		return this.m_strBaseURL;
	}
	GetTimeShiftBufferDepth() {
		return this.m_nTimeShiftBufferDepth;
	}
	GetMinBufferTime() {
		return this.m_nMinBufferTime;
	}
	GetTimedTextAdaptionSet(e) {
		if (e < 0 || e > this.m_rgPeriods.length) {
			return [];
		} else {
			return this.m_rgPeriods[e].rgAdaptationSets.filter((e) => e.bIsTimedText);
		}
	}
	IsLiveContent() {
		return this.GetType() == "dynamic";
	}
	GetAdaptationByTrackID(e) {
		if (!this.m_rgPeriods || this.m_rgPeriods.length == 0) {
			return null;
		}
		let t = this.m_rgPeriods[0];
		for (let r of t.rgAdaptationSets) {
			if (e == r.strID) {
				return r;
			}
		}
		return null;
	}
	GetVideoAdaption() {
		let e = this.m_rgPeriods[0];
		for (let t of e.rgAdaptationSets) {
			if (t.bContainsVideo) {
				return t;
			}
		}
		return null;
	}
	GetStartTime() {
		if (!this.IsLiveContent() && this.m_rgPeriods.length > 0) {
			return this.m_rgPeriods[0].nStart;
		} else {
			return 0;
		}
	}
	GetEndTime() {
		if (!this.IsLiveContent()) {
			if (this.m_rgPeriods.length > 0 && this.m_rgPeriods[0].nDuration) {
				return this.GetStartTime() + this.m_rgPeriods[0].nDuration;
			}
			if (this.m_nMediaPresentationDuration > 0) {
				return this.GetStartTime() + this.m_nMediaPresentationDuration;
			}
		}
		return Number.MAX_VALUE;
	}
	GetLowestRepresentation(e) {
		let t = this.GetAdaptationByTrackID(e);
		if (!t) {
			return null;
		}
		let r = t.rgRepresentations[0];
		for (let e of t.rgRepresentations) {
			if (e.nBandwidth < r.nBandwidth) {
				r = e;
			}
		}
		return r;
	}
	GetStatsLink() {
		return this.m_strStatsLink;
	}
	GetStalledLink() {
		return this.m_strStalledLink;
	}
	GetEventLink() {
		return this.m_strEventLogLink;
	}
	StartLiveContentNow(e) {
		this.m_tsLiveContentStart = performance.now() - e;
	}
	GetDurationSinceStarted() {
		return performance.now() - this.m_tsLiveContentStart;
	}
	ParseRepresentation(e, t, r, n) {
		const i = t;
		let a = {
			strID: w(e, "id"),
			strMimeType: w(e, "mimeType"),
			strCodecs: w(e, "codecs"),
			nBandwidth: S(e, "bandwidth"),
			segmentTemplate: null,
		};
		let s = _(e, "SegmentTemplate");
		if (s) {
			let e = B(s, t, n);
			if (e) {
				a.segmentTemplate = e;
			}
		} else {
			a.segmentTemplate = {
				...r,
			};
		}
		if (!a.segmentTemplate) {
			(0, g.q_)("MPD - No segment template for representation");
			return null;
		}
		if (i.bContainsVideo) {
			a.nWidth = S(e, "width");
			a.nHeight = S(e, "height");
			a.nFrameRate = S(e, "frameRate");
			(0, g.q_)(
				`representation: ${a.nWidth}w x ${a.nHeight}h x ${a.nFrameRate} fps`,
			);
			if (!a.strID || !a.strMimeType || !a.strCodecs || !a.nBandwidth) {
				(0, g.q_)("MPD - Representation Video Data Missing");
				return null;
			}
		} else if (i.bContainsAudio) {
			a.nAudioSamplingRate = S(e, "audioSamplingRate");
			let t = _(e, "AudioChannelConfiguration");
			if (t) {
				a.nAudioChannels = S(t, "value");
			}
			a.nAudioChannels ||= 2;
			if (
				!a.strID ||
				!a.strMimeType ||
				!a.strCodecs ||
				!a.nAudioSamplingRate ||
				!a.nAudioChannels
			) {
				(0, g.q_)("MPD - Representation Audio Data Missing");
				return null;
			}
		}
		return a;
	}
	BParse(e, t) {
		let r = new DOMParser().parseFromString(e, "application/xml");
		let n = C(r);
		if (!n) {
			return false;
		}
		let i = n.getAttribute("type");
		this.m_nMinBufferTime = b(n, "minBufferTime");
		if (i == "dynamic") {
			this.m_strType = "dynamic";
			this.m_dtAvailabilityStartTime = f(n, "availabilityStartTime");
			this.m_dtPublishTime = f(n, "publishTime");
			this.m_nMinimumUpdatePeriod = b(n, "minimumUpdatePeriod");
			this.m_nTimeShiftBufferDepth = b(n, "timeShiftBufferDepth") || 0;
			if (
				!this.m_dtAvailabilityStartTime ||
				!this.m_dtPublishTime ||
				!this.m_nMinimumUpdatePeriod ||
				this.m_nMinBufferTime === null
			) {
				return false;
			}
		} else {
			if (i != "static") {
				(0, g.q_)("MPD - Unknown type");
				return false;
			}
			this.m_strType = "static";
			this.m_nMediaPresentationDuration = b(n, "mediaPresentationDuration");
			if (!this.m_nMinBufferTime || !this.m_nMediaPresentationDuration) {
				(0, g.q_)("MPD - Missing Buffer Time or Presentation Duration");
				return false;
			}
		}
		let a = _(n, "BaseURL");
		this.m_strBaseURL = a
			? a.textContent
			: (function (e) {
					if (!I(e)) {
						return "";
					}
					let t = new URL(e);
					let r = t.pathname;
					if (r.indexOf(".mpd") >= 0 || r.endsWith("/")) {
						r = r.substring(0, r.lastIndexOf("/"));
					}
					return E(t.origin, r) + "/";
				})(t);
		let s = _(n, "Analytics");
		if (s) {
			this.m_strStatsLink = w(s, "statslink");
			this.m_strStalledLink = w(s, "stalledlink");
			this.m_strEventLogLink = w(s, "eventlink");
		}
		let o = r.getElementsByTagName("Period");
		if (o.length == 0) {
			return false;
		}
		let l = o[0];
		let c = {
			strID: w(l, "id"),
			nStart: b(l, "start"),
			nDuration: b(l, "duration"),
			rgAdaptationSets: [],
		};
		if (!c.strID || c.nStart === null) {
			(0, g.q_)("MPD - Missing Period Information.");
			return false;
		}
		this.m_rgPeriods = [];
		this.m_rgPeriods.push(c);
		let m = l.getElementsByTagName("AdaptationSet");
		for (let e = 0; e < m.length; e++) {
			let t = m[e];
			let r = w(t, "description");
			let n = w(t, "lang");
			let i = {
				bSegmentAlignment: y(t, "segmentAlignment"),
				bIsTimedText: w(t, "mimeType") == "text/vtt",
				strLanguage: w(t, "lang"),
				bContainsVideo: false,
				bContainsAudio: false,
				bContainsGame: false,
				strDescription: r || n,
				strForceSub: w(t, "forceSub"),
				strID: w(t, "id"),
				rgRoles: [],
				rgRepresentations: [],
				thumbnails: null,
			};
			c.rgAdaptationSets.push(i);
			if (i.bIsTimedText) {
				i.rgRoles.push("subtitle");
				let e = t.getElementsByTagName("Role");
				for (let t = 0; t < e.length; t++) {
					let r = w(e[t], "value");
					if (r && r != "subtitle") {
						i.rgRoles.push(r);
					}
				}
				let r = t.getElementsByTagName("Representation");
				for (let e = 0; e < r.length; e++) {
					let t = r[e];
					let n = {
						strID: w(t, "id"),
						nBandwidth: S(t, "bandwidth"),
						strClosedCaptionFile: "",
					};
					let a = _(t, "BaseURL");
					let s = a ? a.textContent : "";
					if (!s) {
						(0, g.q_)(
							"Closed Caption File has no BaseURL for (id): " + n.strID,
						);
						continue;
					}
					n.strClosedCaptionFile = v(s, n.strID, 0);
					if (!n.strClosedCaptionFile.startsWith("http")) {
						n.strClosedCaptionFile = this.m_strBaseURL + n.strClosedCaptionFile;
					}
					if ((0, p.yK)() == "store" || p.TS.WEB_UNIVERSE == "dev") {
						const e = new URL(n.strClosedCaptionFile).pathname.split(
							"/video/",
						)[1];
						n.strClosedCaptionFile = e
							? p.TS.STORE_BASE_URL + "vtt/video/" + e
							: null;
					}
					if (n.strClosedCaptionFile) {
						i.rgRepresentations.push(n);
					}
				}
				continue;
			}
			if (!i.bSegmentAlignment) {
				(0, g.q_)("MPD - Only segment aligned dash manifests is supported");
				return false;
			}
			let a = t.getElementsByTagName("ContentComponent");
			for (let e = 0; e < a.length; e++) {
				let t = w(a[e], "contentType");
				if (t == "video") {
					i.bContainsVideo = true;
				}
				if (t == "audio") {
					i.bContainsAudio = true;
				}
				if (t == "game") {
					i.bContainsGame = true;
				}
			}
			if (a.length == 0) {
				let e = w(t, "contentType");
				if (e == "video") {
					i.bContainsVideo = true;
				}
				if (e == "audio") {
					i.bContainsAudio = true;
				}
			}
			if (i.bContainsVideo) {
				let e = _(t, "Thumbnails");
				if (e) {
					let t = S(e, "sheet");
					let r = S(e, "period");
					i.thumbnails = {
						nPeriod: r,
						strTemplate: w(e, "template"),
						nSheet: t,
						nSheetSeconds: t * r,
					};
				}
			}
			let s = t.getElementsByTagName("Role");
			for (let e = 0; e < s.length; e++) {
				let t = w(s[e], "value");
				if (t) {
					i.rgRoles.push(t);
				}
			}
			let o = null;
			let l = _(t, "SegmentTemplate");
			if (l) {
				let e = B(l, i, this.m_strBaseURL);
				if (!e) {
					(0, g.q_)("MPD - Failed to parse found Adaptation template");
					return false;
				}
				o = e;
			}
			let u = t.getElementsByTagName("Representation");
			for (let e = 0; e < u.length; e++) {
				let t = u[e];
				let r = this.ParseRepresentation(t, i, o, this.m_strBaseURL);
				if (!r) {
					return false;
				}
				i.rgRepresentations.push(r);
			}
		}
		return true;
	}
	BUpdate(e) {
		let t = new DOMParser().parseFromString(e, "application/xml");
		let r = C(t);
		if (!r) {
			return false;
		}
		if (this.IsLiveContent()) {
			switch (w(r, "type")) {
				case "dynamic":
					break;
				case "static":
					(0, g.q_)("Converting MPD from dynamic to static");
					this.m_strType = "static";
					this.m_nMediaPresentationDuration = b(r, "mediaPresentationDuration");
					this.m_nMinBufferTime = b(r, "minBufferTime");
					this.m_dtAvailabilityStartTime = null;
					this.m_dtPublishTime = null;
			}
			let e = t.getElementsByTagName("Period");
			if (e.length == 0) {
				return false;
			}
			let n = e[0].getElementsByTagName("AdaptationSet");
			for (let e = 0; e < n.length; e++) {
				let t = n[e];
				let r = w(t, "id");
				let i = this.GetAdaptationByTrackID(r);
				if (i) {
					let e = null;
					let r = _(t, "SegmentTemplate");
					if (r) {
						let t = B(r, i, this.m_strBaseURL);
						if (!t) {
							(0, g.q_)("MPD - Failed to parse found Adaptation template");
							return false;
						}
						e = t;
					}
					let n = t.getElementsByTagName("Representation");
					if (n.length > 1) {
						for (let t = 0; t < n.length; t++) {
							let r = n[t];
							let a = this.ParseRepresentation(r, i, e, this.m_strBaseURL);
							if (!a) {
								(0, g.q_)("MPD - Failed to parse representation");
								return false;
							}
							let s = null;
							for (let e of i.rgRepresentations) {
								if (a.strID == e.strID) {
									s = e;
									break;
								}
							}
							if (s) {
								s.segmentTemplate.strMedia = a.segmentTemplate.strMedia;
							} else {
								i.rgRepresentations.push(a);
							}
						}
					}
					break;
				}
			}
		}
		let n = _(r, "Analytics");
		if (n) {
			this.m_strStatsLink = w(n, "statslink");
			this.m_strStalledLink = w(n, "stalledlink");
			this.m_strEventLogLink = w(n, "eventlink");
		}
		return true;
	}
}
var F;
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.Append = 1)] = "Append";
	e[(e.Remove = 2)] = "Remove";
})((F ||= {}));
class G {
	m_callbacks = null;
	m_mpd = null;
	m_adaptation = null;
	m_mediaSource = null;
	m_sourceBuffer = null;
	m_nTrackBufferMS = 0;
	m_representation = null;
	m_eBufferUpdate = F.None;
	m_rgBufferedSegments = [];
	m_bNeedInitSegment = true;
	m_nNextSegment = 0;
	m_bRemoveBufferState = false;
	m_bSeekInProgress = false;
	m_tsLastBufferRemove = 0;
	m_schNextDownload = new c.LU();
	m_xhrDownload = null;
	m_listeners = new c.Ji();
	m_rgDownloadLog = [];
	m_nCurDownloadProgress = 0;
	m_nCurDownloadBitrate = 0;
	m_stats;
	m_nNumConsecutiveDownloadGones = 0;
	m_rgGameDataFrames = [];
	m_statsGameData = null;
	constructor(e, t, r, n) {
		this.m_callbacks = e;
		this.m_mpd = t;
		this.m_adaptation = r;
		this.m_stats = n;
	}
	SetMediaSource(e) {
		this.m_mediaSource = e;
	}
	SetBufferMS(e) {
		this.m_nTrackBufferMS = e;
	}
	GetRepresentationsCount() {
		return this.m_adaptation.rgRepresentations.length;
	}
	GetRepresentationByID(e) {
		for (let t of this.m_adaptation.rgRepresentations) {
			if (t.strID == e) {
				return t;
			}
		}
		return null;
	}
	GetNumConsecutiveDownloadGones() {
		return this.m_nNumConsecutiveDownloadGones;
	}
	ContainsVideo() {
		return this.m_adaptation.bContainsVideo;
	}
	ContainsAudio() {
		return this.m_adaptation.bContainsAudio;
	}
	ContainsGame() {
		return this.m_adaptation.bContainsGame;
	}
	GetAdaptation() {
		return this.m_adaptation;
	}
	GetBandwidthRequired() {
		return this.m_representation.nBandwidth;
	}
	GetCurrentSegmentDurationMS() {
		return R(this.m_representation);
	}
	GetCurrentSegmentInitializationURL() {
		return D(this.m_representation);
	}
	BIsCurrentRepresentation(e) {
		return e && e.strID == this.m_representation.strID;
	}
	GetSourceBufferTimeRanges() {
		return this.m_sourceBuffer.buffered;
	}
	GetEstimatedAudioRate() {
		if (this.m_representation && this.ContainsAudio()) {
			return this.m_representation.nBandwidth;
		} else {
			return 0;
		}
	}
	GetDebugName() {
		let e = [];
		if (this.ContainsVideo()) {
			e.push("Video");
		} else if (this.ContainsAudio()) {
			e.push("Audio");
		} else if (this.ContainsGame()) {
			e.push("Game");
		}
		return (
			e.join(" & ") +
			":" +
			this.m_callbacks.GetCurrentPlayTime().toFixed(3).toString()
		);
	}
	GetMaxSegment() {
		if (this.m_mpd.IsLiveContent()) {
			return Number.MAX_VALUE;
		}
		{
			let e = this.m_mpd.GetEndTime() - this.m_mpd.GetStartTime();
			return k(this.m_mpd, this.m_representation, e * 1000);
		}
	}
	GetAmountBufferedInPlayerMS(e) {
		if (!this.m_sourceBuffer) {
			return 0;
		}
		let t = this.m_sourceBuffer.buffered;
		if (t.length == 0) {
			return 0;
		}
		if (e < t.start(0)) {
			e = t.start(0);
		}
		if (e > t.end(0)) {
			e = t.end(0);
		}
		let r = t.end(0) - e;
		return Math.floor(r * 1000);
	}
	GetAmountBufferedMS(e) {
		let t = this.GetAmountBufferedInPlayerMS(e);
		for (let e of this.m_rgBufferedSegments) {
			t += e.nDurationMS;
		}
		return t;
	}
	ChangeRepresentation(e) {
		if (this.m_adaptation.rgRepresentations.indexOf(e) < 0) {
			return null;
		}
		if (this.m_representation == e) {
			return null;
		}
		if (this.ContainsVideo()) {
			(0, g.q_)(
				`${this.GetDebugName()} changing representation to ${e.nHeight || 0}p at ${Math.ceil(e.nBandwidth / 1000)}KB for segment ${this.m_nNextSegment}`,
			);
		}
		this.m_representation = e;
		this.m_bNeedInitSegment = !this.ContainsGame();
		this.m_stats.SetRepresentation(e);
		if (this.ContainsGame()) {
			return e;
		}
		if (!this.m_sourceBuffer) {
			const t = e.strMimeType + ";codecs=" + e.strCodecs;
			try {
				this.m_sourceBuffer = this.m_mediaSource.addSourceBuffer(t);
				(0, g.q_)(t);
				this.m_listeners.AddEventListener(
					this.m_sourceBuffer,
					"updateend",
					this.OnSourceBufferUpdateEnd,
				);
				this.m_listeners.AddEventListener(
					this.m_sourceBuffer,
					"error",
					this.OnSourceBufferError,
				);
				this.m_listeners.AddEventListener(
					this.m_sourceBuffer,
					"abort",
					this.OnSourceBufferAbort,
				);
			} catch (e) {
				if (!(e instanceof DOMException) || e.name !== "NotSupportedError") {
					throw e;
				}
				this.OnMediaUnsupportedError(t);
			}
		}
		return e;
	}
	Close() {
		this.m_listeners.Unregister();
		this.m_sourceBuffer = null;
		this.ForceStopDownloads();
		this.m_eBufferUpdate = F.None;
		this.m_bRemoveBufferState = false;
		this.m_callbacks = null;
		this.m_mpd = null;
		this.m_adaptation = null;
		this.m_mediaSource = null;
		this.m_nTrackBufferMS = 0;
		this.m_representation = null;
		this.m_rgBufferedSegments = [];
		this.m_bNeedInitSegment = true;
		this.m_nNextSegment = 0;
		this.m_bSeekInProgress = false;
		this.m_tsLastBufferRemove = 0;
		this.m_rgDownloadLog = [];
		this.m_stats = null;
		this.m_rgGameDataFrames = [];
		this.m_statsGameData = null;
	}
	GetActiveDownloads() {
		if (this.m_xhrDownload) {
			return 1;
		} else {
			return 0;
		}
	}
	GetActiveDownloadProgress() {
		if (this.GetActiveDownloads()) {
			return this.m_nCurDownloadProgress;
		} else {
			return 0;
		}
	}
	OnSourceBufferUpdateEnd(e) {
		let t = this.m_callbacks.GetCurrentPlayTime();
		let r = this.GetAmountBufferedInPlayerMS(t);
		(0, g.q_)(
			`${this.GetDebugName()} OnSourceBufferUpdateEnd: [playback=${t}][buffered=${r}][start=${this.GetBufferedStart()}][end=${this.GetBufferedEnd()}]`,
		);
		let n = this.m_eBufferUpdate;
		this.m_eBufferUpdate = F.None;
		if (n == F.Append) {
			this.m_callbacks.OnSegmentDownloaded(this);
		}
		if (this.m_bSeekInProgress && n == F.Remove && !this.m_bRemoveBufferState) {
			this.ContinueSeek();
		}
		this.UpdateBuffer();
	}
	OnMediaUnsupportedError(e) {
		console.log("OnMediaUnsupportedError", this.GetDebugName(), e);
		if (this.m_callbacks) {
			this.m_callbacks.OnMediaUnsupportedError(this, e);
		}
	}
	OnSourceBufferError(e) {
		console.log("OnSourceBufferError", this.GetDebugName(), e);
		if (this.m_callbacks) {
			this.m_callbacks.OnMediaSourceError(this);
		}
	}
	OnSourceBufferAbort(e) {
		console.log("OnSourceBufferAbort", this.GetDebugName(), e);
	}
	ScheduleNextDownload() {
		if (this.m_bNeedInitSegment) {
			this.DownloadNextSegment();
			return;
		}
		this.m_schNextDownload.Cancel();
		if (this.m_xhrDownload) {
			(0, g.q_)(
				`${this.GetDebugName()} ScheduleNextDownload - download already going`,
			);
			return;
		}
		if (this.m_bSeekInProgress) {
			(0, g.q_)(`${this.GetDebugName()} ScheduleNextDownload - seeking`);
			return;
		}
		if (this.m_nNextSegment > this.GetMaxSegment()) {
			(0, g.q_)(
				`${this.GetDebugName()} ScheduleNextDownload - reached max segment`,
			);
			return;
		}
		let e = this.m_callbacks.GetCurrentPlayTime();
		let t = this.m_callbacks.GetPlaybackRate();
		let r = (function (e, t, r) {
			if (!e.IsLiveContent()) {
				return 0;
			}
			let n = R(t);
			return (
				(r - t.segmentTemplate.nStartNumber + 1) * n -
				e.GetDurationSinceStarted()
			);
		})(this.m_mpd, this.m_representation, this.m_nNextSegment);
		if (r > 0) {
			(0, g.q_)(
				`${this.GetDebugName()} ScheduleNextDownload - segment in future`,
			);
			this.m_schNextDownload.Schedule(r, this.ScheduleNextDownload);
			return;
		}
		let n = this.GetAmountBufferedMS(e);
		if (t > 1) {
			n /= t;
		}
		if (n < 40000) {
			(0, g.q_)(
				`${this.GetDebugName()} ScheduleNextDownload - have ${n} buffered, desire 40000 - downloading now`,
			);
			this.DownloadNextSegment();
			return;
		}
		let i = R(this.m_representation) * 1.1;
		let a = this.GetAmountBufferedInPlayerMS(
			this.m_callbacks.GetCurrentPlayTime(),
		);
		(0, g.q_)(
			`${this.GetDebugName()} ScheduleNextDownload - buffered, schedule later [sleep=${i}ms][buffer=${a}]`,
		);
		this.m_schNextDownload.Schedule(i, this.ScheduleNextDownload);
	}
	DownloadNextSegment() {
		this.m_schNextDownload.Cancel();
		let e = "";
		let t = 0;
		let r = false;
		if (this.m_bNeedInitSegment) {
			e = D(this.m_representation);
			t = 0;
			r = true;
		} else {
			if (this.m_nNextSegment < 0) {
				console.error(
					"Attempting to download negative segment:",
					this.m_nNextSegment,
				);
				return;
			}
			n = this.m_representation;
			i = this.m_nNextSegment;
			e = v(n.segmentTemplate.strMedia, n.strID, i);
			t = R(this.m_representation);
			this.m_nNextSegment++;
		}
		var n;
		var i;
		this.DownloadSegment(this.m_representation.strID, r, e, t);
	}
	async DownloadSegment(e, t, r, n, i = performance.now()) {
		(0, l.w)(
			this.m_xhrDownload === null,
			"Trying to download another segment while a download is already in flight",
		);
		this.m_schNextDownload.Cancel();
		const s = this.m_callbacks.GetCDNAuthURLParameter();
		if (s) {
			r += s;
		}
		(0, g.q_)(`${this.GetDebugName()} Downloading: ${r}`);
		let o;
		let c = null;
		let m = performance.now();
		let u = a.CancelToken.source();
		try {
			this.m_nCurDownloadProgress = 0;
			this.m_xhrDownload = u;
			let e = {
				cancelToken: this.m_xhrDownload.token,
				timeout: 15000,
				responseType: "arraybuffer",
				onDownloadProgress: (e) => {
					this.m_nCurDownloadProgress = e.loaded / e.total;
					this.m_nCurDownloadBitrate =
						(e.loaded * 8 * 1000) / Math.max(1, performance.now() - m);
				},
			};
			if (this.ContainsGame()) {
				e.responseType = "json";
			}
			c = await a.get(r, e);
		} catch (e) {
			o = e;
			c = e.response;
		}
		if (!this.m_xhrDownload || this.m_xhrDownload != u) {
			(0, g.q_)(`Throwing away cancelled download: ${r}`);
			return;
		}
		if (o) {
			(0, g.q_)(`${this.GetDebugName()} Failed to download segment: ${r}`, o);
		}
		let d = performance.now();
		let A = Math.floor(performance.now() - m);
		let p = c ? c.status : 0;
		this.m_xhrDownload = null;
		if (this.m_bSeekInProgress) {
			(0, g.q_)(
				`${this.GetDebugName()} Throwing away download due to seek: ${r}`,
			);
			this.ContinueSeek();
			return;
		}
		if (!c || c.status != 200) {
			if (this.ContainsGame()) {
				this.ScheduleNextDownload();
				return;
			} else {
				this.m_stats.LogSegmentDownloadFailure(A, c ? c.status : 444);
				if (d - i > 9000) {
					(0, g.q_)(
						`${this.GetDebugName()} HTTP download failed.. stopping loader: ${d - i}ms`,
					);
					this.DownloadFailed();
					return;
				} else if (p == 410) {
					this.m_nNumConsecutiveDownloadGones += 1;
					(0, g.q_)(
						`${this.GetDebugName()} HTTP download gone.. informing the player: ${d - i}ms`,
					);
					this.DownloadGone();
					return;
				} else {
					this.m_schNextDownload.Schedule(500, () =>
						this.DownloadSegment(e, t, r, n, i),
					);
					return;
				}
			}
		}
		this.m_nNumConsecutiveDownloadGones = 0;
		if (t) {
			this.m_bNeedInitSegment = false;
		}
		if (this.ContainsGame()) {
			let e = c.data;
			this.m_rgGameDataFrames ||= [];
			let t = Number.MIN_VALUE;
			let r = Number.MIN_VALUE;
			if (this.m_rgGameDataFrames.length > 0) {
				t = this.m_rgGameDataFrames[this.m_rgGameDataFrames.length - 1].pts;
				r = this.m_rgGameDataFrames[this.m_rgGameDataFrames.length - 1].gdi;
			}
			const n = e.frame;
			if (n) {
				if (n.pts && n.gamedata && n.gdi) {
					if (n.pts <= t) {
						(0, g.q_)("Invalid game pts");
					} else if (n.gdi != r) {
						this.m_rgGameDataFrames.push(n);
					}
				} else {
					(0, g.q_)("Invalid game data");
				}
			}
			this.TrimGameDataIfNecessary();
			this.m_statsGameData = {
				nAppID: e.appid,
				ulBroadcastRelayID: e.broadcastrelayid,
				nSegmentID: e.segmentid,
			};
		} else {
			let t = new Uint8Array(c.data);
			this.m_rgBufferedSegments.push({
				nDurationMS: n,
				data: t,
				representationStrID: e,
			});
			this.LogDownload(m, t.length);
			this.UpdateBuffer();
			(0, g.q_)(`HTTP ${p} (${A}ms, ${Math.floor(t.length / 1000)}k): ${r}`);
		}
		this.ScheduleNextDownload();
	}
	DownloadFailed() {
		this.m_callbacks.OnSegmentDownloadFailed(this);
	}
	DownloadGone() {
		this.m_callbacks.OnSegmentDownloadGone(this);
	}
	TrimGameDataIfNecessary() {}
	UpdateBuffer() {
		if (this.m_eBufferUpdate != F.None) {
			return;
		}
		if (this.m_bRemoveBufferState) {
			this.RemoveAllBuffers();
			return;
		}
		if (!this.m_sourceBuffer) {
			(0, g.q_)("No source buffer?");
			return;
		}
		if (this.m_rgBufferedSegments.length > 0) {
			try {
				this.m_eBufferUpdate = F.Append;
				let e = this.m_rgBufferedSegments[0];
				this.m_sourceBuffer.appendBuffer(e.data);
				this.m_rgBufferedSegments.splice(0, 1);
			} catch (e) {
				if (e.name === "QuotaExceededError") {
					this.m_eBufferUpdate = F.None;
					(0, g.q_)(`${this.GetDebugName()} Buffer - QuotaExceededError`);
				} else {
					(0, g.q_)(`${this.GetDebugName()} Buffer - Exception`, e);
				}
			}
			return;
		}
		let e = performance.now();
		if (!this.m_bSeekInProgress && e - this.m_tsLastBufferRemove > 10000) {
			let t = this.GetBufferedStart();
			let r = this.m_callbacks.GetCurrentPlayTime() - 40;
			if (t < r) {
				let n = Math.min(this.GetBufferedEnd(), r);
				if (n != t) {
					this.m_eBufferUpdate = F.Remove;
					this.m_sourceBuffer.remove(t, n);
					this.m_tsLastBufferRemove = e;
				}
				return;
			}
		}
	}
	RemoveAllBuffers() {
		this.m_rgBufferedSegments = [];
		let e = 0;
		if (this.m_sourceBuffer) {
			let t = this.m_sourceBuffer.buffered;
			for (let r = 0; r < t.length; r++) {
				if (e < t.end(r)) {
					e = t.end(r);
				}
			}
		}
		this.m_bRemoveBufferState = false;
		this.m_eBufferUpdate = F.Remove;
		if (e != 0) {
			this.m_sourceBuffer.remove(0, e + 1);
		} else {
			this.OnSourceBufferUpdateEnd(null);
		}
	}
	GetBufferedStart() {
		if (
			this.m_sourceBuffer &&
			this.m_sourceBuffer.buffered &&
			this.m_sourceBuffer.buffered.length != 0
		) {
			return this.m_sourceBuffer.buffered.start(0);
		} else {
			return 0;
		}
	}
	GetBufferedEnd() {
		if (
			this.m_sourceBuffer &&
			this.m_sourceBuffer.buffered &&
			this.m_sourceBuffer.buffered.length != 0
		) {
			return this.m_sourceBuffer.buffered.end(0);
		} else {
			return 0;
		}
	}
	ForceStopDownloads() {
		this.m_schNextDownload.Cancel();
		if (this.m_xhrDownload) {
			this.m_xhrDownload.cancel();
			this.m_xhrDownload = null;
		}
	}
	ForceRestartDownload() {
		this.ForceStopDownloads();
		this.ScheduleNextDownload();
	}
	Seek(e) {
		let t = this.GetBufferedStart();
		let r = this.GetBufferedEnd();
		let n = e < t || e > r;
		if (t == 0 && r == 0) {
			n = true;
		}
		(0, g.q_)(
			`${this.GetDebugName()} making an ${n ? "unbuffered" : "buffered"} seek to ${e}`,
		);
		if (!this.m_bSeekInProgress && !n && !this.m_bNeedInitSegment) {
			this.ScheduleNextDownload();
			return;
		}
		this.m_bSeekInProgress = true;
		this.ForceStopDownloads();
		const i = e - this.m_mpd.GetStartTime();
		let a = k(this.m_mpd, this.m_representation, i * 1000);
		this.m_nNextSegment = Math.min(a, this.GetMaxSegment());
		(0, g.q_)(
			"Seek To Next Segment: " +
				this.m_nNextSegment +
				" at approx. " +
				(0, g.ap)(
					((this.m_nNextSegment - 1) * this.GetCurrentSegmentDurationMS()) /
						1000,
				) +
				" seconds.",
		);
		if (this.ContainsGame()) {
			this.m_bSeekInProgress = false;
			this.m_rgGameDataFrames = [];
			this.ScheduleNextDownload();
			return;
		}
		this.m_bRemoveBufferState = true;
		this.UpdateBuffer();
	}
	ContinueSeek() {
		if (this.m_bSeekInProgress) {
			if (this.m_eBufferUpdate != F.Remove && !this.m_bRemoveBufferState) {
				this.m_bSeekInProgress = false;
				this.ScheduleNextDownload();
			}
		}
	}
	BHasEnoughBuffered(e) {
		if (this.m_bSeekInProgress) {
			return false;
		}
		if (this.ContainsGame()) {
			return true;
		}
		let t =
			!this.m_xhrDownload &&
			!this.m_schNextDownload.IsScheduled() &&
			this.m_nNextSegment > this.GetMaxSegment();
		return this.GetAmountBufferedInPlayerMS(e) >= this.m_nTrackBufferMS || t;
	}
	LogDownload(e, t) {
		if (this.m_rgDownloadLog.length >= 4) {
			this.m_rgDownloadLog.shift();
		}
		let r = performance.now() - e;
		if (!(r <= 0)) {
			this.m_rgDownloadLog.push({
				cubData: t,
				nDownloadMS: r,
			});
			this.m_stats.LogDownload(t, r);
		}
	}
	GetDownloadHistory() {
		return this.m_rgDownloadLog;
	}
	GetAvgDownloadRate() {
		let e = 0;
		let t = 0;
		for (let r of this.m_rgDownloadLog) {
			e += r.nDownloadMS;
			t += r.cubData;
		}
		if (e <= 0) {
			if (this.m_nCurDownloadBitrate && this.GetActiveDownloads() > 0) {
				return this.m_nCurDownloadBitrate;
			} else {
				return 0;
			}
		} else {
			return (t * 8 * 1000) / e;
		}
	}
	GetGameDataFrames() {
		return this.m_rgGameDataFrames;
	}
	GetLatestGameDataFrameAppID() {
		if (this.m_statsGameData && this.m_statsGameData.nAppID) {
			return this.m_statsGameData.nAppID;
		} else {
			return 0;
		}
	}
}
(0, n.Cg)([d.o], G.prototype, "OnSourceBufferUpdateEnd", null);
(0, n.Cg)([d.o], G.prototype, "OnMediaUnsupportedError", null);
(0, n.Cg)([d.o], G.prototype, "OnSourceBufferError", null);
(0, n.Cg)([d.o], G.prototype, "OnSourceBufferAbort", null);
(0, n.Cg)([d.o], G.prototype, "ScheduleNextDownload", null);
(0, n.Cg)([d.o], G.prototype, "DownloadNextSegment", null);
(0, n.Cg)([d.o], G.prototype, "DownloadFailed", null);
(0, n.Cg)([d.o], G.prototype, "DownloadGone", null);
export const Br = 5;
const P = "auto";
var L;
export var N_;
export var lU;
(function (e) {
	e[(e.HAVE_NOTHING = 0)] = "HAVE_NOTHING";
	e[(e.HAVE_METADATA = 1)] = "HAVE_METADATA";
	e[(e.HAVE_CURRENT_DATA = 2)] = "HAVE_CURRENT_DATA";
	e[(e.HAVE_FUTURE_DATA = 3)] = "HAVE_FUTURE_DATA";
	e[(e.HAVE_ENOUGH_DATA = 4)] = "HAVE_ENOUGH_DATA";
})((L ||= {}));
(function (e) {
	e[(e.Invalid = 0)] = "Invalid";
	e[(e.StreamGone = 1)] = "StreamGone";
})((N_ ||= {}));
(function (e) {
	e[(e.Absolute = 0)] = "Absolute";
	e[(e.FromAvailableStart = 1)] = "FromAvailableStart";
})((lU ||= {}));
export class Zn {
	m_elVideo = null;
	m_strMPD = "";
	m_strHLS = "";
	m_strCDNAuthURLParameters = null;
	m_schUpdateMPD = new c.LU();
	m_xhrUpdateMPD;
	m_mpd;
	m_bUseHLSManifest = false;
	m_strVideoAdaptationID = "";
	m_strAudioAdaptationID = "";
	m_strGameAdaptationID = "";
	m_rgLoaders = [];
	m_mediaSource = null;
	m_nTrackBufferMS = 0;
	m_nLimitFPS = 0;
	m_bIsBuffering = true;
	m_seekingToTime = null;
	m_listeners = new c.Ji();
	m_bFirstPlay = true;
	m_bPlaybackStarted = false;
	m_nTimedText = 0;
	m_schGameDataEventTrigger = new c.LU();
	m_schReportPlayerTrigger = new c.LU();
	m_nGameDataLastFramePTS = -1;
	m_bStatsViewVisible = false;
	m_schCaptureDisplayStatsTrigger = new c.LU();
	m_videoRepSelected = null;
	m_timedTextRepSelected = null;
	m_stats = new h._L();
	m_bClosing = false;
	m_hlsTimeOffset = 0;
	m_bUserPlayChoice = true;
	m_bUserLiveEdgeChoice = true;
	m_schFirstFrameThrottler = new c.LU();
	m_bookMarkAdapter = null;
	m_schBookmarkUpdater = new c.LU();
	constructor(e, t = false) {
		(0, s.Gn)(this);
		this.m_elVideo = e;
		this.m_schReportPlayerTrigger.Schedule(30000, this.ReportPlayerStats);
		this.m_bUseHLSManifest = t;
	}
	CalcVideoStartRelativeToSystemClock(e) {
		let t =
			(e ? new Date(e).getTime() : Date.now()) -
			this.m_mpd.GetAvailabilityStartTime().getTime();
		this.m_mpd.StartLiveContentNow(t);
		(0, g.q_)("server time: " + e);
	}
	GetMPDURL() {
		return this.m_strMPD;
	}
	async PlayMPD(e, t, r, n) {
		this.m_strMPD = e;
		this.m_strHLS = r;
		this.m_strCDNAuthURLParameters = t;
		let i = await this.DownloadMPD();
		if (i) {
			this.m_mpd = new N();
			if (this.m_mpd.BParse(i.data, e)) {
				if (this.IsLiveContent()) {
					if (this.m_mpd.GetMinimumUpdatePeriod() > 0) {
						this.m_schUpdateMPD.Schedule(
							this.m_mpd.GetMinimumUpdatePeriod() * 1000,
							this.UpdateMPD,
						);
					}
					this.CalcVideoStartRelativeToSystemClock(i.headers.date);
				}
				if (this.m_bUseHLSManifest) {
					this.m_elVideo.src = this.m_strHLS;
					this.m_elVideo.addEventListener("loadedmetadata", () => {
						this.m_bIsBuffering = false;
						this.BeginPlayback();
					});
					document.addEventListener(
						"visibilitychange",
						this.OnVisibilityChange,
					);
					return;
				}
				if (this.BCreateLoaders()) {
					this.InitVideoControl();
					this.InitTimedText(n);
				} else {
					this.CloseWithError(
						"playbackerror",
						"Failed to create segment loaders",
					);
				}
			} else {
				this.CloseWithError(
					"playbackerror",
					"Failed to parse MPD file",
					this.m_strMPD,
				);
			}
		}
	}
	InitTimedText(e) {
		this.m_nTimedText = 0;
		this.m_mpd.GetTimedTextAdaptionSet(0).forEach((t) => {
			let r = (0, o.sf)(p.TS.LANGUAGE);
			if (
				t.rgRepresentations.length > 0 &&
				t.rgRepresentations[0].strClosedCaptionFile &&
				t.strLanguage in LocaleToELanguage
			) {
				const n = document.createElement("track");
				n.kind = "subtitles";
				n.label = Localize(
					"#Language_" + (0, o.Lg)(LocaleToELanguage[t.strLanguage]),
				);
				n.srclang = t.strLanguage;
				n.src = t.rgRepresentations[0].strClosedCaptionFile;
				this.m_nTimedText += 1;
				if ((!!e || r != 0) && LocaleToELanguage[t.strLanguage] == r) {
					n.default = true;
					this.m_timedTextRepSelected = t.rgRepresentations[0];
				}
				this.m_elVideo.appendChild(n);
			}
		});
	}
	SetSubtitles(e) {
		let t = null;
		for (let r = 0; r < this.m_elVideo.textTracks.length; r++) {
			const n = this.m_elVideo.textTracks[r];
			if (LocaleToELanguage[n.language] == e) {
				let e = this.GetTimeTextAdaptions(0).filter(
					(e) => e.strLanguage == n.language,
				);
				if (e && e.length > 0 && e[0].rgRepresentations) {
					t = e[0].rgRepresentations[0];
				}
				n.mode = "showing";
			} else {
				n.mode = "disabled";
			}
		}
		this.m_timedTextRepSelected = t;
	}
	PlayWebRTC(e, t, r, n, i) {}
	OnVisibilityChange() {
		if (document.visibilityState === "visible") {
			this.m_elVideo.src = this.m_strHLS;
		}
	}
	Close() {
		this.m_bClosing = true;
		this.m_listeners.Unregister();
		if (this.m_bUseHLSManifest) {
			document.removeEventListener("visibilitychange", this.OnVisibilityChange);
		}
		this.StopDownloads();
		if (this.m_elVideo) {
			this.m_elVideo.pause();
		}
		if (this.m_mediaSource) {
			try {
				if (this.m_mediaSource.readyState != "closed") {
					this.m_mediaSource.endOfStream();
				}
			} catch (e) {}
			this.m_mediaSource = null;
		}
		this.m_bIsBuffering = true;
		this.m_elVideo = null;
		this.m_strMPD = "";
		this.m_mpd = null;
		this.m_bUseHLSManifest = false;
		this.m_strVideoAdaptationID = "";
		this.m_strAudioAdaptationID = "";
		this.m_strGameAdaptationID = "";
		this.m_nTrackBufferMS = 0;
		this.m_nLimitFPS = 0;
		this.m_seekingToTime = null;
		this.m_nGameDataLastFramePTS = -1;
		this.m_bStatsViewVisible = false;
		this.m_videoRepSelected = null;
		if (this.m_stats) {
			this.m_stats.GetFPSMonitor().Close();
		}
		this.m_stats = null;
		this.m_bFirstPlay = true;
		this.m_bPlaybackStarted = false;
	}
	StopDownloads() {
		if (this.m_xhrUpdateMPD) {
			this.m_xhrUpdateMPD.cancel();
			this.m_xhrUpdateMPD = null;
		}
		this.m_schUpdateMPD.Cancel();
		this.m_schGameDataEventTrigger.Cancel();
		this.m_schReportPlayerTrigger.Cancel();
		this.m_schCaptureDisplayStatsTrigger.Cancel();
		this.m_schFirstFrameThrottler.Cancel();
		this.m_schBookmarkUpdater.Cancel();
		if (this.m_elVideo && this.m_elVideo.playbackRate != 1) {
			this.m_elVideo.playbackRate = 1;
		}
		for (let e of this.m_rgLoaders) {
			e.Close();
		}
		this.m_rgLoaders = [];
		this.m_bIsBuffering = true;
	}
	IsBuffering() {
		return this.m_bIsBuffering;
	}
	IsLiveContent() {
		return !!this.m_mpd && this.m_mpd.IsLiveContent();
	}
	async DownloadMPD() {
		if (this.m_xhrUpdateMPD) {
			(0, l.w)(false, "Multiple MPD download requests");
			return null;
		}
		let e = performance.now();
		while (performance.now() - e < 30000) {
			let e = null;
			try {
				this.m_xhrUpdateMPD = a.CancelToken.source();
				const t =
					this.m_strMPD +
					(this.m_strCDNAuthURLParameters
						? this.m_strCDNAuthURLParameters
						: "");
				e = await a.get(t, {
					cancelToken: this.m_xhrUpdateMPD.token,
				});
			} catch (e) {}
			this.m_xhrUpdateMPD = null;
			if (this.m_bClosing) {
				return null;
			}
			if (e && e.status == 200) {
				return e;
			}
			if (e && e.status == 410) {
				this.CloseWithError(
					"playbackerror",
					"Failed to download MPD: 410 Gone",
				);
				return null;
			}
			(0, g.q_)("Failed to download, will retry: " + this.m_strMPD);
			await Sleep(200);
		}
		(0, g.q_)("Failed to download: " + this.m_strMPD);
		return null;
	}
	async UpdateMPD() {
		(0, g.q_)("Updating MPD in player from: " + this.m_strMPD);
		let e = await this.DownloadMPD();
		if (e) {
			if (this.m_mpd.BUpdate(e.data)) {
				if (this.IsLiveContent()) {
					this.CalcVideoStartRelativeToSystemClock(e.headers.date);
				}
				this.m_stats.SetAnalyticLinks(
					this.m_mpd.GetStatsLink(),
					this.m_mpd.GetStalledLink(),
					this.m_mpd.GetEventLink(),
				);
				if (this.m_mpd.GetMinimumUpdatePeriod() > 0) {
					this.m_schUpdateMPD.Schedule(
						this.m_mpd.GetMinimumUpdatePeriod() * 1000,
						this.UpdateMPD,
					);
				}
			} else {
				this.CloseWithError(
					"playbackerror",
					"Failed to parse on Update the MPD file",
				);
			}
		}
	}
	CloseWithError(e, ...t) {
		this.Close();
		(0, g.q_)(...t);
	}
	BCreateLoaders() {
		let e = this.m_mpd.GetPeriods();
		if (e.length == 0) {
			return false;
		}
		let t = e[0];
		this.m_strVideoAdaptationID = "";
		this.m_strAudioAdaptationID = "";
		this.m_strGameAdaptationID = "";
		for (let e of t.rgAdaptationSets) {
			let t = null;
			if (!this.m_strVideoAdaptationID && e.bContainsVideo && T(e)) {
				t = e;
				this.m_strVideoAdaptationID = e.strID;
			}
			if (!this.m_strAudioAdaptationID && e.bContainsAudio && T(e)) {
				t = e;
				this.m_strAudioAdaptationID = e.strID;
			}
			if (!this.m_strGameAdaptationID && e.bContainsGame) {
				t = e;
				this.m_strGameAdaptationID = e.strID;
			}
			if (t) {
				let e = new G(this, this.m_mpd, t, this.m_stats);
				this.m_rgLoaders.push(e);
			}
		}
		return this.m_strVideoAdaptationID.length > 0;
	}
	InitVideoControl() {
		let e = new MediaSource();
		let t = URL.createObjectURL(e);
		this.m_elVideo.pause();
		this.m_elVideo.srcObject = null;
		this.m_elVideo.src = t;
		this.m_mediaSource = e;
		this.m_listeners.AddEventListener(e, "sourceopen", this.OnMediaSourceOpen);
		this.m_listeners.AddEventListener(
			e,
			"sourceended",
			this.OnMediaSourceEnded,
		);
		this.m_listeners.AddEventListener(
			e,
			"sourceclose",
			this.OnMediaSourceClose,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"waiting",
			this.OnVideoWaiting,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"error",
			this.OnVideoError,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"canplay",
			this.OnVideoCanPlay,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"pause",
			this.OnVideoPause,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"resize",
			this.OnVideoResize,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-bufferupdate",
			this.OnVideoTimeUpdate,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"timeupdate",
			this.OnVideoTimeUpdate,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"play",
			this.OnPlayAction,
		);
	}
	OnMediaSourceOpen(e) {
		(0, g.q_)("OnMediaSourceOpen");
		for (let e of this.m_rgLoaders) {
			e.SetMediaSource(this.m_mediaSource);
		}
		this.BeginPlayback();
	}
	HandleMediaSourceError(e) {
		if (!this.m_bClosing && e.target == this.m_mediaSource) {
			this.StopDownloads();
		}
	}
	OnMediaSourceEnded(e) {
		(0, g.q_)("OnMediaSourceEnded", e);
		this.HandleMediaSourceError(e);
	}
	OnMediaSourceClose(e) {
		(0, g.q_)("OnMediaSourceClose", e);
		this.HandleMediaSourceError(e);
	}
	OnVideoWaiting(e) {
		if (
			!this.IsLiveContent() &&
			this.m_mpd &&
			this.m_mpd.GetEndTime() - this.GetCurrentPlayTime() < 1
		) {
			(0, g.q_)(
				`pausing playback due to OnVideoWaiting (endTime=${this.m_mpd.GetEndTime()}, currentPlaytime=${this.GetCurrentPlayTime()} )`,
			);
			this.Pause();
			return;
		}
		if (
			!this.BIsPlayerBufferedBetween(
				this.m_elVideo.currentTime,
				this.m_elVideo.currentTime + 0.5,
			) &&
			!this.m_seekingToTime
		) {
			if (this.m_elVideo && this.m_elVideo.buffered.length > 1) {
				let e = this.m_elVideo.currentTime;
				let t = this.m_elVideo.buffered;
				for (let r = 0; r < t.length; ++r) {
					(0, g.q_)(
						"OnVideoWaiting buffer " +
							r +
							" start:" +
							t.start(r) +
							" end: " +
							t.end(r) +
							" playerTime: " +
							e,
					);
					if (t.start(r) <= e && e <= t.end(r)) {
						(0, g.q_)(
							"OnVideoWaiting - time splitting, jumping to buffer " + r,
						);
						this.Seek(t.start(r));
						return;
					}
				}
			}
			this.m_stats.ReportVideoStalled(this.m_rgLoaders, this.m_elVideo);
			if (this.m_videoRepSelected === null) {
				let e = true;
				let t = this.GetVideoLoader();
				if (t) {
					let r = this.m_mpd.GetLowestRepresentation(
						this.GetCurrentVideoAdaptation().strID,
					);
					if (r && !t.BIsCurrentRepresentation(r)) {
						t.ChangeRepresentation(r);
						(0, g.q_)(
							"OnVideoWaiting - Stalled, forced restart download at resolution: " +
								r.nWidth +
								"x" +
								r.nHeight +
								"@" +
								r.nFrameRate +
								" instead",
						);
						e = false;
					}
					this.Seek(this.m_elVideo.currentTime);
				}
				if (e) {
					(0, g.q_)(
						"OnVideoWaiting - Stalled, already at lowest resolution. No action taken. BHasLoader: " +
							(t != null),
					);
				}
			} else {
				(0, g.q_)(
					"OnVideoWaiting - Stalled, user explicitly chose a resolution: " +
						this.m_videoRepSelected.nWidth +
						"x" +
						this.m_videoRepSelected.nHeight +
						"@" +
						this.m_videoRepSelected.nFrameRate,
				);
			}
		}
	}
	OnVideoPause(e) {
		this.OnVideoBufferProgress();
		this.m_stats.GetFPSMonitor().Close();
		this.SendUpdateToBookmarkServiceIfNeeded();
	}
	OnVideoResize(e) {
		this.m_stats.GetFPSMonitor().SetWindowResized();
	}
	OnDebugPrintEventInfoAndAvailableBuffer(e) {
		let t = -1;
		let r = this.GetVideoLoader();
		if (this.m_elVideo && r) {
			t = r.GetAmountBufferedInPlayerMS(this.m_elVideo.currentTime);
		}
		(0, g.q_)("DebugMessage - Stats: " + e.type + " BufferedMS: " + t);
	}
	OnVideoError(e) {
		(0, g.q_)("OnVideoError");
	}
	OnVideoCanPlay(e) {
		if (!this.m_bIsBuffering) {
			if (this.m_bUserPlayChoice) {
				this.PlayOnElement();
			}
			this.m_stats.LogVideoOnCanPlay(e);
		}
	}
	GetCurrentPlayTime() {
		if (this.m_seekingToTime) {
			if (
				!this.m_bPlaybackStarted &&
				this.m_seekingToTime.eSeekType == lU.FromAvailableStart
			) {
				return 0;
			}
			let e =
				this.m_seekingToTime.eSeekType == lU.FromAvailableStart
					? this.GetAvailableVideoStartTime()
					: 0;
			return this.m_seekingToTime.nTime + e;
		}
		if (this.m_bUseHLSManifest && this.m_mpd) {
			if (this.m_elVideo.currentTime > 0 && this.m_hlsTimeOffset === 0) {
				this.m_hlsTimeOffset =
					this.GetBufferedLiveEdgeTime() - this.m_elVideo.currentTime;
			}
			return this.m_elVideo.currentTime + this.m_hlsTimeOffset;
		} else {
			return this.m_elVideo.currentTime;
		}
	}
	OnVideoTimeUpdate() {
		if (this?.m_elVideo) {
			if (this.m_bUserLiveEdgeChoice && this.IsLiveContent()) {
				let e = this.GetBufferedLiveEdgeTime();
				if (
					this.m_elVideo.playbackRate == 1 &&
					this.m_elVideo.currentTime <= e - 4.5 &&
					this.BIsPlayerBufferedBetween(this.m_elVideo.currentTime, e)
				) {
					let t = e - this.m_elVideo.currentTime;
					this.m_elVideo.playbackRate = 1.1;
					(0, g.q_)(
						"User is behind by " +
							t.toFixed(2) +
							" seconds, increasing playback speed to catch-up to live edge.",
					);
				} else if (
					this.m_elVideo.playbackRate == 1.1 &&
					this.m_elVideo.currentTime >= e - 1
				) {
					this.m_elVideo.playbackRate = 1;
					(0, g.q_)("User is caught up, returning to normal playrate");
				}
			} else {
				const e = this.GetAvailableVideoStartTime();
				const t = this.GetBufferedLiveEdgeTime() - e;
				if (this.GetCurrentPlayTime() - e >= t) {
					this.Pause();
				}
			}
		}
	}
	SetBookmarkAdapter(e) {
		this.m_bookMarkAdapter = e;
	}
	SendUpdateToBookmarkServiceIfNeeded() {
		if (this.m_bookMarkAdapter) {
			let e = this.m_elVideo.currentTime;
			let t = this.GetCurrentVideoAdaptation();
			let r = t && t.strID ? t.strID : null;
			let n = this.GetCurrentAudioAdaptationfunction();
			let i = n && n.strID ? n.strID : null;
			let a = this.GetCurrentTimedTextRepresentation();
			let s = a && a.strID ? a.strID : null;
			this.m_bookMarkAdapter.SetBookmark(e >= 0 ? e : 0, r, i, s);
			if (this.IsPaused()) {
				this.m_schBookmarkUpdater.Cancel();
			} else {
				this.m_schBookmarkUpdater.Schedule(
					60000,
					this.SendUpdateToBookmarkServiceIfNeeded,
				);
			}
		}
	}
	GetCurrentTimedTextRepresentation() {
		return this.m_timedTextRepSelected;
	}
	OnPlayAction() {
		this.SendUpdateToBookmarkServiceIfNeeded();
	}
	BIsPlayerBufferedBetween(e, t) {
		return (
			this.m_elVideo.buffered.length > 0 &&
			e >= this.m_elVideo.buffered.start(0) &&
			t <= this.m_elVideo.buffered.end(0)
		);
	}
	GetLiveContentStartTime() {
		return this.m_mpd.GetAvailabilityStartTime();
	}
	GetTimeTextAdaptions(e) {
		if (this.m_mpd) {
			return this.m_mpd.GetTimedTextAdaptionSet(e);
		} else {
			return [];
		}
	}
	GetAvailableVideoStartTime() {
		if (!this.m_mpd) {
			return 0;
		}
		let e = 0;
		if (this.IsLiveContent()) {
			let t = Math.floor(this.m_mpd.GetDurationSinceStarted() / 1000);
			let r = this.GetBufferedLiveEdgeTime();
			let n = this.m_mpd.GetTimeShiftBufferDepth();
			e = n ? t - n + 10 : 0;
			e = u.OQ(e, 0, r);
		} else {
			e = this.m_mpd.GetStartTime();
		}
		return e;
	}
	GetBufferedLiveEdgeTime() {
		if (!this.m_mpd) {
			return 0;
		}
		let e = 0;
		e = this.IsLiveContent()
			? Math.floor(
					(this.m_mpd.GetDurationSinceStarted() - this.m_nTrackBufferMS) / 1000,
				)
			: this.m_mpd.GetEndTime();
		return e;
	}
	IsPaused() {
		return !this.m_bUserPlayChoice;
	}
	SetUserPlayChoice(e) {
		this.m_bUserPlayChoice = e;
		this.DispatchEvent("valve-userpausechange");
	}
	Play() {
		this.SetUserPlayChoice(true);
		this.Seek(this.GetCurrentPlayTime());
	}
	Pause() {
		this.m_bUserLiveEdgeChoice = false;
		if (this.m_elVideo?.playbackRate == 1.1) {
			this.m_elVideo.playbackRate = 1;
		}
		this.SetUserPlayChoice(false);
		this.m_elVideo?.pause();
	}
	GetPlaybackRate() {
		if (this.m_elVideo.paused) {
			return 0;
		} else {
			return this.m_elVideo.playbackRate;
		}
	}
	GetCDNAuthURLParameter() {
		return this.m_strCDNAuthURLParameters;
	}
	OnSegmentDownloaded(e) {
		(0, g.q_)(e.GetDebugName() + " OnSegmentDownloaded");
		this.UpdateVideoRepresentation(this.m_videoRepSelected);
		this.OnVideoBufferProgress();
		if (e == this.GetVideoLoader()) {
			this.m_stats.SetCurrentVideoBandwidth(e.GetAvgDownloadRate());
		}
	}
	async PlayOnElement() {
		const e = this.m_bFirstPlay;
		this.m_bFirstPlay = false;
		let t = false;
		const r = () => {
			t = true;
			this.m_stats
				.GetFPSMonitor()
				.StartTracking(() => this.m_stats.ExtractFrameInfo(this.m_elVideo));
		};
		try {
			await this.m_elVideo.play();
			r();
		} catch (e) {
			if (e.name === "NotAllowedError" && this.BHasTimedText()) {
				this.m_elVideo.muted = true;
				this.SetSubtitles((0, o.sf)(p.TS.LANGUAGE));
				try {
					await this.m_elVideo.play();
					r();
				} catch (e) {}
			}
		}
		if (!t && e) {
			this.DispatchEvent("valve-userinputneeded");
		}
	}
	OnVideoBufferProgress() {
		if (!this.IsBuffering()) {
			return;
		}
		let e = this.m_rgLoaders.length > 0;
		let t = this.GetPlaybackStartTime(0);
		for (let r of this.m_rgLoaders) {
			if (!r.BHasEnoughBuffered(t)) {
				e = false;
				break;
			}
			t = Math.max(t, r.GetBufferedStart());
		}
		if (e) {
			this.m_bIsBuffering = false;
			this.m_seekingToTime = null;
			if (this.m_elVideo.currentTime != t) {
				this.m_elVideo.currentTime = t;
			} else if (this.m_elVideo.paused && this.m_bUserPlayChoice) {
				this.PlayOnElement();
			}
			this.DispatchEvent("valve-bufferupdate");
		}
	}
	OnSegmentDownloadFailed(e, t) {
		this.StopDownloads();
		this.DispatchEvent("valve-downloadfailed", t);
	}
	OnSegmentDownloadGone(e) {
		if (this.m_bIsBuffering && e.GetNumConsecutiveDownloadGones() <= 3) {
			this.Seek(
				this.GetCurrentPlayTime() + e.GetCurrentSegmentDurationMS() / 1000,
			);
		} else {
			(0, g.q_)(
				"OnSegmentDownloadGone: too many consecutive 'gone', erroring the download: " +
					e.GetNumConsecutiveDownloadGones(),
			);
			this.OnSegmentDownloadFailed(e, N_.StreamGone);
		}
	}
	OnMediaUnsupportedError(e, t) {
		this.DispatchEvent("valve-typeerror", t);
	}
	OnMediaSourceError(e) {
		this.DispatchEvent("valve-playbackerror");
	}
	GetCurrentAudioAdaptationfunction() {
		if (this.m_mpd) {
			return this.m_mpd.GetAdaptationByTrackID(this.m_strAudioAdaptationID);
		} else {
			return null;
		}
	}
	GetCurrentVideoAdaptation() {
		if (this.m_mpd) {
			return this.m_mpd.GetAdaptationByTrackID(this.m_strVideoAdaptationID);
		} else {
			return null;
		}
	}
	GetVideoLoader() {
		for (let e of this.m_rgLoaders) {
			if (e.ContainsVideo()) {
				return e;
			}
		}
		return null;
	}
	GetAudioLoader() {
		for (let e of this.m_rgLoaders) {
			if (e.ContainsAudio()) {
				return e;
			}
		}
		return null;
	}
	GetGameLoader() {
		for (let e of this.m_rgLoaders) {
			if (e.ContainsGame()) {
				return e;
			}
		}
		return null;
	}
	SetTrackBufferMS(e) {
		this.m_nTrackBufferMS = e;
		for (let t of this.m_rgLoaders) {
			t.SetBufferMS(e);
		}
	}
	BeginPlayback() {
		if (!this.m_bUseHLSManifest) {
			let e = this.PickStartingVideoRepresentation();
			for (let t of this.m_rgLoaders) {
				if (t.ContainsVideo()) {
					t.ChangeRepresentation(e);
					let r = t.GetCurrentSegmentDurationMS();
					this.m_schFirstFrameThrottler.Schedule(
						r / 2,
						this.VerifyFirstSegmentDownloadProgress,
					);
				} else if (t.ContainsAudio() || t.ContainsGame()) {
					let e =
						t.GetAdaptation().rgRepresentations.length > 0
							? t.GetAdaptation().rgRepresentations[0]
							: null;
					t.ChangeRepresentation(e);
				}
			}
		}
		this.m_bPlaybackStarted = true;
		let e = 0;
		if (this.IsLiveContent()) {
			let t = this.GetVideoLoader().GetCurrentSegmentDurationMS();
			let r = this.m_mpd.GetMinBufferTime() * 1000;
			let n = Math.max(t, r);
			this.SetTrackBufferMS(n);
			let i = this.GetBufferedLiveEdgeTime();
			e = this.GetPlaybackStartTime(i);
			(0, g.q_)(
				`Begin playback of live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${e}][nLiveEdge=${i}]`,
			);
		} else {
			this.SetTrackBufferMS(8000);
			e = this.GetPlaybackStartTime(0);
			if (this.m_bookMarkAdapter) {
				e = this.m_bookMarkAdapter.GetBeginPlaytime();
				if (this.m_mpd.GetEndTime() - e < 5) {
					e = 0;
				}
			}
			(0, g.q_)(
				`Begin playback of non-live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${e}]`,
			);
		}
		this.m_seekingToTime = null;
		(0, g.q_)("Starting playback at " + e);
		this.m_stats.SetSegmentDurationMS(
			this.GetVideoLoader().GetCurrentSegmentDurationMS(),
		);
		this.m_stats.SetAnalyticLinks(
			this.m_mpd.GetStatsLink(),
			this.m_mpd.GetStalledLink(),
			this.m_mpd.GetEventLink(),
		);
		this.m_stats.SetVideoInitializationURL(
			this.GetVideoLoader().GetCurrentSegmentInitializationURL(),
		);
		this.Seek(e);
		if (this.GetGameLoader()) {
			this.m_schGameDataEventTrigger.Schedule(500, this.GameDataEventTrigger);
		}
	}
	VerifyFirstSegmentDownloadProgress() {
		let e = this.GetVideoLoader();
		if (
			this.m_videoRepSelected === null &&
			e &&
			e.GetDownloadHistory().length <= 1 &&
			e.GetActiveDownloads() > 0 &&
			e.GetActiveDownloadProgress() < 0.55
		) {
			let t = this.DetermineBestVideoRepresentation();
			if (t && !e.BIsCurrentRepresentation(t)) {
				e.ChangeRepresentation(t);
				e.ForceRestartDownload();
				(0, g.q_)(
					"Video download progressing too slowly, choosing " +
						t.nWidth +
						"x" +
						t.nHeight +
						"@" +
						t.nFrameRate +
						" instead",
				);
			}
		}
	}
	PickStartingVideoRepresentation() {
		let e = this.GetVideoLoader();
		if (!e) {
			return null;
		}
		let t = e.GetAdaptation();
		let r = null;
		for (let n = e.GetRepresentationsCount() - 1; n >= 0; n--) {
			let e = t.rgRepresentations[n];
			let i = e.nFrameRate ? e.nFrameRate : 0;
			if (
				(!(this.m_nLimitFPS > 0) || !(i > this.m_nLimitFPS)) &&
				((r = e), this.GetVideoPlayerHeight() <= e.nHeight)
			) {
				break;
			}
		}
		return r;
	}
	DetermineBestVideoRepresentation() {
		let e = this.GetVideoLoader();
		let t = this.GetAudioLoader();
		let r = t && t != e ? t.GetEstimatedAudioRate() : 0;
		let n = this.GetAvgLoaderDownloadRate();
		let i = e.GetRepresentationsCount() - 1;
		let a = e.GetAdaptation().rgRepresentations[i];
		for (let t = i - 1; t >= 0; t--) {
			let i = e.GetAdaptation().rgRepresentations[t];
			let s = (i.nBandwidth + r) * this.m_elVideo.playbackRate * 1.15;
			if (n < s) {
				(0, g.q_)(
					`Video select: Skipping ${t} due to rate: [avg=${n}][required=${s}]`,
				);
				continue;
			}
			let o = i.nFrameRate || 0;
			if (this.IsLiveContent() && o > 30) {
				let e = this.m_stats.GetFPSMonitor();
				if (
					e.BIsDroppingFrames() ||
					(e.BHasCurrentFPS() && Math.ceil(e.GetCurrentFPS()) < 29)
				) {
					(0, g.q_)(
						`Video select: Skipping ${t} due to dropping frames and high FPS representation: [fps:${o}]`,
					);
					continue;
				}
			}
			if (this.m_nLimitFPS > 0 && o > this.m_nLimitFPS) {
				(0, g.q_)(`Video select: Skipping ${t} due to frame rate limit`);
				continue;
			}
			let l = a.nHeight || 0;
			let c = i.nHeight || 0;
			let m = this.GetVideoPlayerHeight();
			if (m > 0 && l > 0) {
				if (c > W(m)) {
					break;
				}
			}
			a = i;
		}
		return a;
	}
	UpdateVideoRepresentation(e) {
		if (e && this.m_videoRepSelected == e) {
			return null;
		}
		let t = this.GetVideoLoader();
		if (!t) {
			return null;
		}
		if (this.IsBuffering()) {
			return null;
		}
		let r = this.DetermineBestVideoRepresentation();
		this.m_videoRepSelected = null;
		return t.ChangeRepresentation(r);
	}
	GetPlaybackStartTime(e) {
		if (!this.m_seekingToTime) {
			return e;
		}
		(0, l.w)(
			this.m_bPlaybackStarted,
			"Missing mpd info to calculate seek time",
		);
		let t =
			this.m_seekingToTime.eSeekType == lU.FromAvailableStart
				? this.GetAvailableVideoStartTime()
				: 0;
		return this.m_seekingToTime.nTime + t;
	}
	CanSeek() {
		return true;
	}
	SeekAndPlay(e) {
		this.SetUserPlayChoice(true);
		return this.Seek(e);
	}
	Seek(e, t = lU.Absolute) {
		if (!this.m_bPlaybackStarted) {
			this.m_seekingToTime = {
				nTime: e,
				eSeekType: t,
			};
			return e;
		}
		if (t == lU.FromAvailableStart) {
			e += this.GetAvailableVideoStartTime();
		}
		let r = this.GetAvailableVideoStartTime();
		let n = this.GetBufferedLiveEdgeTime();
		const i = e;
		if ((e = u.OQ(e, r, n)) != i) {
			(0, g.q_)(`Seek time ${i} was clamped to the range ${r} to ${n}`);
		}
		this.m_bUserLiveEdgeChoice = e >= n - Br;
		let a = this.m_elVideo.paused;
		if (!a) {
			this.m_elVideo.pause();
		}
		if (this.m_bUseHLSManifest) {
			this.m_elVideo.currentTime = e - this.m_hlsTimeOffset;
			this.m_elVideo.play();
		} else {
			this.m_bIsBuffering = true;
			this.m_seekingToTime = {
				nTime: e,
				eSeekType: lU.Absolute,
			};
			for (let t of this.m_rgLoaders) {
				if (t.ContainsGame()) {
					e = this.GetBufferedLiveEdgeTime();
				}
				t.Seek(e);
			}
			this.DispatchEvent("valve-bufferupdate");
			if (a) {
				this.OnVideoBufferProgress();
			}
		}
		return e;
	}
	JumpTime(e) {
		e += this.GetCurrentPlayTime();
		return this.Seek(e);
	}
	GetVideoPlayerHeight() {
		return this.m_elVideo.clientHeight;
	}
	GetAvgLoaderDownloadRate() {
		let e = 0;
		let t = 0;
		let r = [this.GetVideoLoader()];
		for (let n of r) {
			if (n) {
				e += n.GetAvgDownloadRate();
				t++;
			}
		}
		if (t == 0) {
			return 0;
		} else {
			return e / t;
		}
	}
	GameDataEventTrigger() {
		let e = this.GetGameLoader();
		if (!e) {
			return;
		}
		let t = e.GetGameDataFrames();
		let r = -1;
		r = t.length - 1;
		if (r >= 0) {
			let n = t[r];
			if (n.pts != this.m_nGameDataLastFramePTS) {
				this.m_nGameDataLastFramePTS = n.pts;
				n.gamedata.appid = e.GetLatestGameDataFrameAppID();
				this.DispatchEvent("valve-gamedataupdate", n);
			}
		}
		this.m_schGameDataEventTrigger.Schedule(500, this.GameDataEventTrigger);
	}
	DispatchEvent(e, t = null) {
		let r = new CustomEvent(e, {
			cancelable: true,
			bubbles: true,
			detail: t,
		});
		if (this.m_elVideo) {
			this.m_elVideo.dispatchEvent(r);
		} else {
			console.error(
				`dashplayer: attempting to fire ${e} when elVideo not set`,
				t,
			);
		}
	}
	IsMuted() {
		return this.m_elVideo.muted;
	}
	SetMuted(e) {
		this.m_elVideo.muted = e;
	}
	SetVolume(e) {
		e = u.OQ(e, 0, 1);
		this.m_elVideo.volume = e;
	}
	GetVolume() {
		return this.m_elVideo.volume;
	}
	GetDASHPlayerStats() {
		return this.m_stats;
	}
	ReportPlayerStats() {
		this.m_stats.ReportPlayerStats(this.m_rgLoaders, this.m_elVideo);
		this.m_schReportPlayerTrigger.Schedule(300000, this.ReportPlayerStats);
	}
	SetStatsViewIsVisible(e) {
		if (e && !this.m_bStatsViewVisible) {
			this.CaptureStatsForDisplay();
			this.m_schCaptureDisplayStatsTrigger.Schedule(
				250,
				this.CaptureStatsForDisplay,
			);
		} else if (!e && this.m_bStatsViewVisible) {
			this.m_schCaptureDisplayStatsTrigger.Cancel();
		}
		this.m_bStatsViewVisible = e;
	}
	CaptureStatsForDisplay() {
		this.m_stats.SetHTMLVideoPlayerDisplay(
			this.m_elVideo.videoWidth,
			this.m_elVideo.videoHeight,
			this.m_elVideo.clientWidth,
			this.m_elVideo.clientHeight,
		);
		this.m_stats.CaptureFrequentlyUpdatingInformation(
			this.m_elVideo,
			this.m_rgLoaders,
		);
		this.m_schCaptureDisplayStatsTrigger.Schedule(
			250,
			this.CaptureStatsForDisplay,
		);
	}
	GetVideoRepresentations() {
		let e = [];
		e.push({
			id: P,
			displayName: "Auto",
			selected: this.m_videoRepSelected === null,
		});
		if (this.m_bUseHLSManifest) {
			return e;
		}
		let t = this.GetCurrentVideoAdaptation();
		if (t) {
			for (let r of t.rgRepresentations) {
				let t =
					this.m_videoRepSelected && this.m_videoRepSelected.strID == r.strID;
				let n = r.nFrameRate;
				if (n > 50 && r.nFrameRate < 70) {
					n = 60;
				} else if (n > 25 && n < 35) {
					n = 30;
				}
				let i = `${r.nWidth}x${r.nHeight} @ ${n}fps`;
				e.push({
					id: r.strID,
					displayName: i,
					selected: t,
					width: r.nWidth,
					fps: n,
				});
			}
		}
		e.sort((e, t) => (e.width === t.width ? t.fps - e.fps : t.width - e.width));
		return e;
	}
	SetVideoRepresentation(e) {
		let t = true;
		let r = this.GetVideoLoader();
		if (e && e.id != P) {
			let n = r.GetRepresentationByID(e.id);
			if (n) {
				t = false;
				if (
					this.m_videoRepSelected === null ||
					this.m_videoRepSelected.strID != n.strID
				) {
					this.m_videoRepSelected = n;
					r.ChangeRepresentation(n);
					this.Seek(this.GetCurrentPlayTime());
				}
			}
		}
		if (t) {
			this.m_videoRepSelected = null;
		}
	}
	GetThumbnailForTimestamp(e) {
		return "";
	}
	BHasTimedText() {
		return this.m_nTimedText > 0;
	}
}
function W(e) {
	if (e < 360) {
		return 480;
	} else if (e < 480) {
		return 720;
	} else {
		return 4320;
	}
}
(0, n.Cg)([s.sH], Zn.prototype, "m_nTimedText", undefined);
(0, n.Cg)([s.XI], Zn.prototype, "InitTimedText", null);
(0, n.Cg)([d.o], Zn.prototype, "OnVisibilityChange", null);
(0, n.Cg)([d.o], Zn.prototype, "UpdateMPD", null);
(0, n.Cg)([d.o], Zn.prototype, "OnMediaSourceOpen", null);
(0, n.Cg)([d.o], Zn.prototype, "HandleMediaSourceError", null);
(0, n.Cg)([d.o], Zn.prototype, "OnMediaSourceEnded", null);
(0, n.Cg)([d.o], Zn.prototype, "OnMediaSourceClose", null);
(0, n.Cg)([d.o], Zn.prototype, "OnVideoWaiting", null);
(0, n.Cg)([d.o], Zn.prototype, "OnVideoPause", null);
(0, n.Cg)([d.o], Zn.prototype, "OnVideoResize", null);
(0, n.Cg)([d.o], Zn.prototype, "OnDebugPrintEventInfoAndAvailableBuffer", null);
(0, n.Cg)([d.o], Zn.prototype, "OnVideoError", null);
(0, n.Cg)([d.o], Zn.prototype, "OnVideoCanPlay", null);
(0, n.Cg)([d.o], Zn.prototype, "GetCurrentPlayTime", null);
(0, n.Cg)([d.o], Zn.prototype, "OnVideoTimeUpdate", null);
(0, n.Cg)([d.o], Zn.prototype, "SendUpdateToBookmarkServiceIfNeeded", null);
(0, n.Cg)([d.o], Zn.prototype, "OnPlayAction", null);
(0, n.Cg)([d.o], Zn.prototype, "GetPlaybackRate", null);
(0, n.Cg)([d.o], Zn.prototype, "GetCDNAuthURLParameter", null);
(0, n.Cg)([d.o], Zn.prototype, "OnSegmentDownloaded", null);
(0, n.Cg)([d.o], Zn.prototype, "PlayOnElement", null);
(0, n.Cg)([d.o], Zn.prototype, "OnSegmentDownloadFailed", null);
(0, n.Cg)([d.o], Zn.prototype, "OnSegmentDownloadGone", null);
(0, n.Cg)([d.o], Zn.prototype, "OnMediaUnsupportedError", null);
(0, n.Cg)([d.o], Zn.prototype, "OnMediaSourceError", null);
(0, n.Cg)([d.o], Zn.prototype, "VerifyFirstSegmentDownloadProgress", null);
(0, n.Cg)([d.o], Zn.prototype, "GameDataEventTrigger", null);
(0, n.Cg)([d.o], Zn.prototype, "ReportPlayerStats", null);
(0, n.Cg)([s.XI.bound], Zn.prototype, "CaptureStatsForDisplay", null);
