var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./83957.js");
var a = i;
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require("./21866.js");
var l = require("./18118.js");
function c(e, t, r) {
	return [e, t, r];
}
class m extends Error {}
class u extends l.J8 {
	m_appid;
	constructor(e) {
		super();
		this.m_appid = e || 0;
	}
	GetAppID() {
		return this.m_appid;
	}
	parseColor(e) {
		if (typeof e != "string" || !e.match(/^#[0-9a-fA-F]{6}$/)) {
			throw new m("expected color string");
		}
		return [
			parseInt(e.substring(1, 3), 16),
			parseInt(e.substring(3, 5), 16),
			parseInt(e.substring(5, 7), 16),
		];
	}
	parseString(e) {
		if (typeof e == "string") {
			return e;
		}
		throw new m("expected string");
	}
	parseNumber(e) {
		if (typeof e == "number") {
			return e;
		}
		throw new m("expected number");
	}
	parseDate(e) {
		if (typeof e == "number") {
			return new Date(e);
		}
		throw new m("expected timestamp");
	}
	parseArray(e, t) {
		let r = [];
		if (typeof e != "object" || !Array.isArray(e)) {
			throw new m("expected array");
		}
		let n = e.length;
		for (let i = 0; i < n; ++i) {
			try {
				r.push(t(e[i]));
			} catch (e) {
				e.message += "\n...while parsing array element " + i;
				throw e;
			}
		}
		return r;
	}
	parseDict(e, t) {
		let r = new Map();
		if (typeof e != "object" || Array.isArray(e)) {
			throw new m("expected object");
		}
		for (let n in e) {
			try {
				r.set(n, t(e[n]));
			} catch (e) {
				e.message += "\n...while parsing dictionary element " + n;
				throw e;
			}
		}
		return r;
	}
	parseBracket(e) {
		let t = {
			name: this.parseString(e.name),
			start: this.parseDate(e.start),
			color: [255, 0, 255],
		};
		if ("params" in e) {
			t.params = this.parseDict(e.params, this.parseString.bind(this));
		}
		if ("end" in e) {
			t.end = this.parseDate(e.end);
		}
		if ("color" in e) {
			t.color = this.parseColor(e.color);
		}
		return t;
	}
	parseMarker(e) {
		let t = {
			time: this.parseDate(e.time),
			color: [0, 255, 255],
		};
		if ("name" in e) {
			t.name = this.parseString(e.name);
		}
		if ("params" in e) {
			t.params = this.parseDict(e.params, this.parseString.bind(this));
		}
		if ("color" in e) {
			t.color = this.parseColor(e.color);
		}
		return t;
	}
	parseSoundTrack(e) {
		let t = {};
		if ("song_title" in e) {
			t.song_title = this.parseString(e.song_title);
		}
		if ("appid" in e) {
			t.appid = this.parseNumber(e.appid);
		}
		if ("song_index" in e) {
			t.song_index = this.parseNumber(e.song_index);
		}
		return t;
	}
	parseBroadcastGameData(e) {
		let t = {
			appid: 0,
			brackets: [],
			markers: [],
		};
		if ("appid" in e) {
			t.appid = this.parseNumber(e.appid);
		}
		if ("brackets" in e) {
			t.brackets = this.parseArray(e.brackets, this.parseBracket.bind(this));
		}
		if ("markers" in e) {
			t.markers = this.parseArray(e.markers, this.parseMarker.bind(this));
		}
		if ("soundtrack" in e) {
			t.soundtrack = this.parseSoundTrack(e.soundtrack);
		}
		return t;
	}
	convertTime(e, t) {
		return e - t / 1000;
	}
	UpdateMarkers(e, t) {
		let r = [];
		let n = [];
		for (const i of e) {
			if (i.persistent) {
				if (n.length > 0) {
					n[n.length - 1].nTimeEnd = this.convertTime(i.Timestamp, t);
				}
				if (i.name.length > 0) {
					n.push({
						strTemplateName: i.name,
						nTimeStart: this.convertTime(i.Timestamp, t),
						nTimeEnd: -1,
						color: c(i.color_r, i.color_g, i.color_b),
					});
				}
			} else {
				r.push({
					strTemplateName: i.name,
					nTime: this.convertTime(i.Timestamp, t),
					color: c(i.color_r, i.color_g, i.color_b),
				});
			}
		}
		return {
			rgMarkers: r,
			rgSegments: n,
		};
	}
	UpdateRegions(e) {
		let t = [];
		for (const r of e) {
			t.push({
				strTemplateName: r.name,
				min: {
					x: r.min_x,
					y: r.min_y,
				},
				max: {
					x: r.max_x,
					y: r.max_y,
				},
				behavior: r.behavior,
			});
		}
		return t;
	}
	UpdateSoundtrack(e, t) {}
}
var d = require("./59715.js");
var A = require("./61738.js");
var p = require(/*webcrack:missing*/ "./31958.js");
var g = require(/*webcrack:missing*/ "./72476.js");
var h = require(/*webcrack:missing*/ "./93960.js");
var C = require("./99167.js");
var _ = require(/*webcrack:missing*/ "./79769.js");
class f {
	m_elVideo = null;
	m_peerConnection = null;
	m_strBroadcastSteamID = undefined;
	m_ulWebRTCSessionID = undefined;
	m_schCandidateTimer = new _.LU();
	m_nHostCandidateGeneration = undefined;
	m_nCandidateUpdateIntervalMS = undefined;
	m_listeners = new _.Ji();
	m_bFirstPlay = true;
	m_bStatsViewVisible = false;
	m_schCaptureDisplayStatsTrigger = new _.LU();
	m_stats = new C._L();
	constructor(e) {
		(0, s.Gn)(this);
		this.m_elVideo = e;
	}
	async PlayMPD(e) {}
	async PlayWebRTC(e, t, r, n, i) {
		this.m_strBroadcastSteamID = e;
		this.m_ulWebRTCSessionID = r;
		this.m_nHostCandidateGeneration = 0;
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
		let s = {
			iceServers: [
				{
					urls: ["stun:" + n],
				},
				{
					urls: ["turn:" + n],
					username: t,
					credential: r,
				},
			],
			iceTransportPolicy: "relay",
		};
		this.m_peerConnection = new RTCPeerConnection(s);
		this.m_peerConnection.oniceconnectionstatechange = ((e) => {
			if (this.m_peerConnection) {
				console.log(
					"BroadcastWebRTC: ICE connection state changed to " +
						this.m_peerConnection.iceConnectionState,
				);
				if (this.m_peerConnection.iceConnectionState === "failed") {
					this.OnWebRTCConnectionFailed();
				} else if (
					this.m_peerConnection.iceConnectionState === "disconnected"
				) {
					this.OnWebRTCConnectionRetry();
				}
			}
		}).bind(this);
		this.m_peerConnection.onicecandidate = ((e) => {
			if (e.candidate) {
				const t = new FormData();
				t.append("broadcaststeamid", this.m_strBroadcastSteamID);
				t.append("webrtc_session_id", this.m_ulWebRTCSessionID);
				t.append("sdp_mid", e.candidate.sdpMid);
				t.append("sdp_mline_index", String(e.candidate.sdpMLineIndex));
				t.append("candidate", e.candidate.candidate);
				a.post(`${g.TS.CHAT_BASE_URL}broadcast/addbroadcastwebrtccandidate`, t)
					.then((e) => {
						const t = e.data;
						if (!t.success || t.success != 1) {
							console.log(
								"Failed to add a WebRTC session ICE candidate: " +
									String(t.success),
							);
						}
					})
					.catch((e) =>
						console.log("Failed to add a WebRTC session ICE candidate" + e),
					);
			}
		}).bind(this);
		this.m_peerConnection.ontrack = ((e) => {
			if (e.track.kind === "video") {
				this.m_elVideo.src = null;
				this.m_elVideo.srcObject = e.streams[0];
				this.Play();
			}
		}).bind(this);
		this.m_peerConnection
			.setRemoteDescription({
				type: "offer",
				sdp: i,
			})
			.then(async () => {
				await this.m_peerConnection.setLocalDescription(
					await this.m_peerConnection.createAnswer(),
				);
				const e = new FormData();
				e.append("broadcaststeamid", this.m_strBroadcastSteamID);
				e.append("webrtc_session_id", this.m_ulWebRTCSessionID);
				e.append("answer", this.m_peerConnection.localDescription.sdp);
				try {
					await a
						.post(`${g.TS.CHAT_BASE_URL}broadcast/setbroadcastwebrtcanswer`, e)
						.then((e) => {
							const t = e.data;
							if (!t.success || t.success != 1) {
								throw new Error(String(t.success));
							}
						});
				} catch (e) {
					console.log("Failed to set the WebRTC session answer: " + e);
					this.OnWebRTCConnectionRetry();
					return;
				}
				this.m_nCandidateUpdateIntervalMS = 250;
				this.m_schCandidateTimer.Schedule(
					this.m_nCandidateUpdateIntervalMS,
					() => this.GetHostCandidates(),
				);
			});
	}
	async GetHostCandidates() {
		const e = new FormData();
		e.append("broadcaststeamid", this.m_strBroadcastSteamID);
		e.append("webrtc_session_id", this.m_ulWebRTCSessionID);
		e.append("candidate_generation", String(this.m_nHostCandidateGeneration));
		try {
			await a
				.post(`${g.TS.CHAT_BASE_URL}broadcast/getbroadcastwebrtccandidates`, e)
				.then((e) => {
					const t = e.data;
					const r = t.data;
					if (!t.success || t.success != 1) {
						throw new Error(String(t.success));
					}
					if (r.candidate_generation > this.m_nHostCandidateGeneration) {
						r.candidates.forEach((e) => {
							const t = new RTCIceCandidate({
								sdpMid: e.sdp_mid,
								sdpMLineIndex: e.sdp_mline_index,
								candidate: e.candidate,
							});
							this.m_peerConnection
								.addIceCandidate(t)
								.catch((e) => console.error(e));
						});
						this.m_nHostCandidateGeneration = r.candidate_generation;
					} else if (this.m_nHostCandidateGeneration > 0) {
						this.m_nCandidateUpdateIntervalMS *= 2;
					}
				});
		} catch (e) {
			console.log("Failed to get WebRTC session ICE candidates" + e);
			this.OnWebRTCConnectionRetry();
			return;
		}
		this.m_schCandidateTimer.Schedule(this.m_nCandidateUpdateIntervalMS, () =>
			this.GetHostCandidates(),
		);
	}
	DispatchEvent(e, t = null) {
		let r = new CustomEvent(e, {
			cancelable: true,
			bubbles: true,
			detail: t,
		});
		this.m_elVideo.dispatchEvent(r);
	}
	OnWebRTCConnectionRetry() {
		this.DispatchEvent("valve-webrtcretry");
	}
	OnWebRTCConnectionFailed() {
		this.DispatchEvent("valve-webrtcfailed");
	}
	Close() {
		this.m_listeners.Unregister();
		this.m_schCandidateTimer.Cancel();
		this.m_schCaptureDisplayStatsTrigger.Cancel();
		if (this.m_peerConnection) {
			this.m_peerConnection.close();
			this.m_peerConnection = null;
		}
		this.m_elVideo.pause();
		this.m_elVideo.srcObject = null;
		if (this.m_stats) {
			this.m_stats.GetFPSMonitor().Close();
			this.m_stats = null;
		}
		this.m_bFirstPlay = true;
	}
	IsBuffering() {
		return false;
	}
	GetCurrentPlayTime() {
		return 0;
	}
	GetLiveContentStartTime() {
		return null;
	}
	GetAvailableVideoStartTime() {
		return 0;
	}
	GetBufferedLiveEdgeTime() {
		return 0;
	}
	IsPaused() {
		return this.m_elVideo.paused;
	}
	async Play() {
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
			e.name;
		}
		if (!t && e) {
			this.DispatchEvent("valve-userinputneeded");
		}
	}
	Pause() {
		this.m_elVideo.pause();
	}
	CanSeek() {
		return false;
	}
	SeekAndPlay(e) {
		this.Play();
		return 0;
	}
	Seek(e) {
		return 0;
	}
	JumpTime(e) {
		return 0;
	}
	IsMuted() {
		return this.m_elVideo.muted;
	}
	SetMuted(e) {
		this.m_elVideo.muted = e;
	}
	SetVolume(e) {
		e = p.OQ(e, 0, 1);
		this.m_elVideo.volume = e;
	}
	GetVolume() {
		return this.m_elVideo.volume;
	}
	GetDASHPlayerStats() {
		return this.m_stats;
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
		this.m_schCaptureDisplayStatsTrigger.Schedule(
			250,
			this.CaptureStatsForDisplay,
		);
	}
	OnVideoPause(e) {
		this.m_stats.GetFPSMonitor().Close();
	}
	OnVideoResize(e) {
		this.m_stats.GetFPSMonitor().SetWindowResized();
	}
	GetVideoRepresentations() {
		let e = [];
		e.push({
			id: "auto",
			displayName: "Auto",
			selected: true,
		});
		return e;
	}
	SetVideoRepresentation(e) {}
	IsLiveContent() {
		return true;
	}
	GetThumbnailForTimestamp(e) {
		return "";
	}
	BHasTimedText() {
		return false;
	}
}
(0, n.Cg)([h.o], f.prototype, "PlayWebRTC", null);
(0, n.Cg)([s.XI.bound], f.prototype, "CaptureStatsForDisplay", null);
(0, n.Cg)([h.o], f.prototype, "OnVideoPause", null);
(0, n.Cg)([h.o], f.prototype, "OnVideoResize", null);
import { FindAndRemoveWhere } from "../../actual_src/utils/arrayutils.js";
var y = require(/*webcrack:missing*/ "./49455.js");
import {
	Localize,
	LocaleToELanguage,
} from "../../actual_src/utils/localization.js";
var w = require("./16154.js");
var B = require("./44058.js");
var v = require("./20711.js");
var I = require(/*webcrack:missing*/ "./736.js");
export const fO = 7;
export var fK;
export var a0;
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.Unlocking = 1)] = "Unlocking";
	e[(e.Loading = 2)] = "Loading";
	e[(e.Ready = 3)] = "Ready";
	e[(e.Error = 4)] = "Error";
})((fK ||= {}));
class R {
	m_rtUnlockTime = 0;
	m_schUnlockTimeout = new _.LU();
	m_broadcast;
	m_video;
	UnlockH264(e, t) {
		if (this.BCanUnlockH264()) {
			e.SetState(fK.Unlocking, "");
			console.log("Unlocking H.264 for broadcast video playback");
			this.RequestUnlockH264();
			this.m_broadcast = e;
			this.m_video = t;
			this.m_rtUnlockTime = Date.now();
			this.m_schUnlockTimeout.Schedule(100, () => this.CheckUnlockState());
		} else {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_MinBrowser"));
		}
	}
	BCanUnlockH264() {
		if ((0, I.Dp)("RemotePlay.UnlockH264")) {
			console.log("Client supports direct H.264 unlock");
			return true;
		} else if ((0, I.Dp)("BrowserView.PostMessageToParent")) {
			console.log("Client supports browserview H.264 unlock");
			return true;
		} else {
			console.log("Client does not support H.264 unlock");
			return false;
		}
	}
	RequestUnlockH264() {
		if ((0, I.Dp)("RemotePlay.UnlockH264")) {
			console.log("Requesting direct H.264 unlock");
			SteamClient.RemotePlay.UnlockH264();
		} else if ((0, I.Dp)("BrowserView.PostMessageToParent")) {
			console.log("Requesting browserview unlock");
			SteamClient.BrowserView.PostMessageToParent(
				"UnlockH264Request",
				"CUnlockH264Helper",
			);
		} else {
			console.log("Failed to request H.264 unlock: no method supported");
		}
	}
	CheckUnlockState() {
		if (this.m_broadcast.m_eWatchState != fK.Unlocking) {
			return;
		}
		if ((0, d.Mc)() || (0, d.aM)()) {
			console.log("Unlocking H.264 successful");
			this.m_broadcast.SetState(fK.None, "");
			this.m_video.Restart();
			return;
		}
		if (Date.now() - this.m_rtUnlockTime > 6000) {
			console.log(
				"Unlocking H.264 timed out (Steam client or servers offline?)",
			);
			this.m_broadcast.SetState(
				fK.Error,
				(0, Localize)("#BroadcastWatch_MinBrowser"),
			);
		} else {
			this.m_schUnlockTimeout.Schedule(100, () => this.CheckUnlockState());
		}
	}
}
class k {
	constructor() {
		(0, s.Gn)(this);
	}
	m_steamIDBroadcast = "";
	m_ulBroadcastID = "";
	m_ulViewerToken = "";
	m_strCDNAuthUrlParameters = undefined;
	m_bWebRTC = false;
	m_data;
	m_eWatchState = fK.None;
	m_strStateDescription = "";
	m_rgVideos = [];
	m_schManifestTimeout = new _.LU();
	m_schHeartbeatTimeout = new _.LU();
	SetState(e, t = "") {
		this.m_eWatchState = e;
		this.m_strStateDescription = t;
		if (e == fK.Error) {
			console.log(this.m_strStateDescription);
		}
	}
}
(0, n.Cg)([s.sH], k.prototype, "m_ulBroadcastID", undefined);
(0, n.Cg)([s.sH], k.prototype, "m_eWatchState", undefined);
(0, n.Cg)([s.sH], k.prototype, "m_strStateDescription", undefined);
(0, n.Cg)([s.XI], k.prototype, "SetState", null);
class D {
	m_steamIDBroadcast = "";
	m_bInitialized = false;
	m_strTitle = "";
	m_strAppId = "" + fO;
	m_nAppID = fO;
	m_strAppTitle = "";
	m_strThumbnailUrl = "";
	m_nViewerCount = 0;
	m_bIsOnline = false;
	m_schUpdateTimeout = new _.LU();
	m_nRefCount = 0;
	constructor(e) {
		(0, s.Gn)(this);
		this.m_steamIDBroadcast = e;
	}
}
(0, n.Cg)([s.sH], D.prototype, "m_bInitialized", undefined);
(0, n.Cg)([s.sH], D.prototype, "m_strTitle", undefined);
(0, n.Cg)([s.sH], D.prototype, "m_strAppId", undefined);
(0, n.Cg)([s.sH], D.prototype, "m_nAppID", undefined);
(0, n.Cg)([s.sH], D.prototype, "m_strAppTitle", undefined);
(0, n.Cg)([s.sH], D.prototype, "m_strThumbnailUrl", undefined);
(0, n.Cg)([s.sH], D.prototype, "m_nViewerCount", undefined);
(0, n.Cg)([s.sH], D.prototype, "m_bIsOnline", undefined);
class N {
	constructor() {
		(0, s.Gn)(this);
	}
	m_eWatchState = fK.None;
	m_strStateDescription = "";
	m_rgVideos = [];
	SetState(e, t = "") {
		this.m_eWatchState = e;
		this.m_strStateDescription = t;
		if (e == fK.Error) {
			console.log(this.m_strStateDescription);
		}
	}
}
(0, n.Cg)([s.sH], N.prototype, "m_eWatchState", undefined);
(0, n.Cg)([s.sH], N.prototype, "m_strStateDescription", undefined);
(0, n.Cg)([s.XI], N.prototype, "SetState", null);
class F extends N {
	m_clipID;
	m_data;
}
class G extends N {
	m_nAppIDVOD;
	m_manifestURL;
}
class O {
	m_mapBroadcasts = new Map();
	m_mapClips = new Map();
	m_mapVODs = new Map();
	m_activeVideo = null;
	m_broadcastSettings = {
		nVolume: 1,
		bMuted: false,
		ulViewerToken: "0",
	};
	m_schSaveSettings = new _.LU();
	m_broadcastInfos = {};
	constructor() {
		(0, s.Gn)(this);
		this.LoadBroadcastSettings();
	}
	GetBroadcastState(e) {
		if (e.IsBroadcastClip()) {
			let t = this.m_mapClips.get(e.GetBroadcastClipID());
			if (t) {
				return t.m_eWatchState;
			} else {
				return fK.None;
			}
		}
		if (e.IsBroadcastVOD()) {
			const t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
			if (t) {
				return t.m_eWatchState;
			} else {
				return fK.None;
			}
		}
		{
			let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
			if (t) {
				return t.m_eWatchState;
			} else {
				return fK.None;
			}
		}
	}
	GetBroadcastStateDescription(e) {
		if (e.IsBroadcastClip()) {
			let t = this.m_mapClips.get(e.GetBroadcastClipID());
			if (t) {
				return t.m_strStateDescription;
			} else {
				return "";
			}
		}
		if (e.IsBroadcastVOD()) {
			const t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
			if (t) {
				return t.m_strStateDescription;
			} else {
				return "";
			}
		}
		{
			let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
			if (t) {
				return t.m_strStateDescription;
			} else {
				return "";
			}
		}
	}
	CreateBroadcastVideo(e, t, r, n) {
		let i = this.GetOrCreateBroadcast(t);
		let { nVolume: a, bMuted: s } = this.m_broadcastSettings;
		let o = new P(e, a, s, r);
		o.SetBroadcastSteamID(t);
		i.m_rgVideos.push(o);
		i.m_bWebRTC = n;
		if (!(0, d.Mc)() && !(0, d.aM)()) {
			new R().UnlockH264(i, o);
			return o;
		}
		return o;
	}
	CreateClipVideo(e, t, r) {
		let n = this.GetOrCreateClip(t);
		let { nVolume: i, bMuted: a } = this.m_broadcastSettings;
		let s = new P(e, i, a, r);
		s.SetBroadcastClipID(t);
		n.m_rgVideos.push(s);
		if (!(0, d.Mc)() && !(0, d.aM)()) {
			new R().UnlockH264(n, s);
			return s;
		}
		return s;
	}
	CreateVODVideo(e, t, r) {
		let n = this.GetOrCreateVOD(t);
		let { nVolume: i, bMuted: a } = this.m_broadcastSettings;
		let s = new P(e, i, a, r);
		s.SetBroadcastAppIDVOD(t);
		n.m_rgVideos.push(s);
		if (!(0, d.Mc)() && !(0, d.aM)()) {
			new R().UnlockH264(n, s);
			return s;
		}
		return s;
	}
	StartVideo(e) {
		if (e.IsBroadcastClip()) {
			console.log(`Starting clip for ${e.GetBroadcastClipID()}`);
			let t = this.m_mapClips.get(e.GetBroadcastClipID());
			if (!t) {
				return;
			}
			this.SetActiveVideo(e);
			if (t.m_eWatchState == fK.None) {
				this.GetClipManifest(t, e.GetWatchLocation());
			} else if (t.m_eWatchState == fK.Ready) {
				e.StartClip(t);
			}
		} else if (e.IsBroadcastVOD()) {
			console.log(`Starting VOD for ${e.GetBroadcastAppIDVOD()}`);
			let t = this.m_mapVODs.get(e.GetBroadcastAppIDVOD());
			if (!t) {
				return;
			}
			this.SetActiveVideo(e);
			if (t.m_eWatchState == fK.None) {
				this.GetVODManifest(t, e.GetWatchLocation());
			} else if (t.m_eWatchState == fK.Ready) {
				e.StartVOD(t);
			}
		} else {
			let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
			if (!t) {
				return;
			}
			this.SetActiveVideo(e);
			if (t.m_eWatchState == fK.None) {
				this.GetBroadcastManifest(t, e.GetWatchLocation());
			} else if (t.m_eWatchState == fK.Ready) {
				e.StartBroadcast(t);
			}
		}
	}
	SetActiveVideo(e) {
		this.m_mapBroadcasts.forEach((t) => {
			for (let r of t.m_rgVideos) {
				if (r != e) {
					r.StopPlaybackTillUserInput();
				}
			}
		});
		this.m_mapClips.forEach((t) => {
			for (let r of t.m_rgVideos) {
				if (r != e) {
					r.StopPlaybackTillUserInput();
				}
			}
		});
		this.m_activeVideo = e;
	}
	PauseAllVideo() {
		this.m_mapBroadcasts.forEach((e) => {
			for (let t of e.m_rgVideos) {
				t.StopPlaybackTillUserInput();
			}
		});
	}
	async StopVideo(e) {
		let t = e.GetBroadcastSteamID();
		let r = this.m_mapBroadcasts.get(t);
		e.Stop();
		if (r) {
			if (r.m_ulBroadcastID) {
				(async function (e, t, r) {
					if (!t) {
						return;
					}
					let n = new FormData();
					n.append("steamid", e);
					n.append("broadcastid", t);
					n.append("viewertoken", r);
					try {
						await a.post(g.TS.CHAT_BASE_URL + "broadcast/stopwatching", n);
					} catch {}
				})(t, r.m_ulBroadcastID, this.m_broadcastSettings.ulViewerToken);
			}
			FindAndRemoveWhere(r.m_rgVideos, (t) => t == e);
			this.RemoveBroadcastIfUnused(r);
		}
	}
	StartInfo(e) {
		const t = this.GetOrCreateBroadcastInfo(e);
		t.m_nRefCount++;
		if (!t.m_bInitialized || !t.m_schUpdateTimeout.IsScheduled()) {
			this.LoadBroadcastInfo(t);
		}
		return t;
	}
	StopInfo(e) {
		e.m_nRefCount--;
	}
	GetOrCreateBroadcastInfo(e) {
		if (!e) {
			return new D("");
		}
		if (!this.m_broadcastInfos[e]) {
			const t = (0, s.sH)(new D(e));
			this.m_broadcastInfos[e] = t;
		}
		return this.m_broadcastInfos[e];
	}
	GetOrCreateBroadcast(e) {
		let t = this.m_mapBroadcasts.get(e);
		return (
			t ||
			((t = new k()),
			(t.m_steamIDBroadcast = e),
			(t.m_eWatchState = fK.None),
			this.m_mapBroadcasts.set(e, t),
			t)
		);
	}
	GetBroadcast(e) {
		return this.m_mapBroadcasts.get(e);
	}
	GetBroadcastClip(e) {
		return this.m_mapClips.get(e);
	}
	GetBroadcastVOD(e) {
		return this.m_mapVODs.get(e);
	}
	RemoveBroadcastIfUnused(e) {
		if (!e.m_rgVideos.length) {
			e.m_schHeartbeatTimeout.Cancel();
			e.m_schManifestTimeout.Cancel();
			this.m_mapBroadcasts.delete(e.m_steamIDBroadcast);
		}
	}
	GetOrCreateClip(e) {
		let t = this.m_mapClips.get(e);
		return (
			t ||
			((t = new F()),
			(t.m_clipID = e),
			(t.m_eWatchState = fK.None),
			this.m_mapClips.set(e, t),
			t)
		);
	}
	GetOrCreateVOD(e) {
		let t = this.m_mapVODs.get(e);
		return (
			t ||
			((t = new G()),
			(t.m_nAppIDVOD = e),
			(t.m_eWatchState = fK.None),
			this.m_mapVODs.set(e, t),
			t)
		);
	}
	async LoadBroadcastInfo(e) {
		let t = "0";
		let r = this.m_mapBroadcasts.get(e.m_steamIDBroadcast);
		if (r) {
			t = r.m_ulBroadcastID;
		}
		if (e.m_nRefCount == 0) {
			return;
		}
		const n = {
			steamid: e.m_steamIDBroadcast,
			broadcastid: t,
			location:
				r &&
				r.m_rgVideos &&
				r.m_rgVideos[0] &&
				r.m_rgVideos[0].GetWatchLocation(),
		};
		try {
			const t = await a.get(
				`${g.TS.CHAT_BASE_URL}broadcast/getbroadcastinfo/`,
				{
					params: n,
				},
			);
			if (!t || !t.data || !t.data.success || t.data.success != 1) {
				e.m_bInitialized = true;
				return;
			}
			const r = t.data;
			(0, s.h5)(() => {
				e.m_bInitialized = true;
				e.m_strTitle = r.title;
				e.m_strAppId = r.appid;
				e.m_nAppID = Number.parseInt(r.appid);
				e.m_strAppTitle = r.app_title;
				e.m_strThumbnailUrl = r.thumbnail_url;
				e.m_nViewerCount = r.viewer_count;
				e.m_bIsOnline = r.is_online;
				if (!e.m_strTitle && o.td) {
					e.m_strTitle = o.td.name;
					e.m_strAppTitle = o.td.appName || o.td.name;
				}
				const t = r.update_interval;
				if (t && typeof t == "number") {
					e.m_schUpdateTimeout.Schedule(t * 1000, () =>
						this.LoadBroadcastInfo(e),
					);
				}
			});
		} catch (e) {
			console.error(e);
		}
	}
	DelayedGetBroadcastManifest(e, t, r = Date.now()) {
		e.m_schManifestTimeout.Schedule(5000, () =>
			this.GetBroadcastManifest(e, t, r),
		);
	}
	async GetBroadcastManifest(e, t, r = Date.now()) {
		e.SetState(fK.Loading, "");
		let n = {
			steamid: e.m_steamIDBroadcast,
			broadcastid: 0,
			viewertoken: this.m_broadcastSettings.ulViewerToken,
			watchlocation: t,
			sessionid: g.TS.SESSIONID,
			is_webrtc: e.m_bWebRTC,
		};
		let i = null;
		try {
			i = await a.get(g.TS.CHAT_BASE_URL + "broadcast/getbroadcastmpd/", {
				params: n,
				withCredentials: true,
			});
		} catch (e) {
			let t = (0, w.H)(e);
			console.error("Failed to get broadcast manifest!" + t.strErrorMsg, t);
		}
		if (!i || i.status != 200) {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_RequestFailed"));
			return;
		}
		let s = i.data;
		if (s.viewertoken) {
			this.SetViewerToken(s.viewertoken);
		}
		let o = s.success;
		if (o == "ready") {
			e.SetState(fK.Ready);
			e.m_ulBroadcastID = s.broadcastid;
			e.m_ulViewerToken = this.m_broadcastSettings.ulViewerToken;
			e.m_strCDNAuthUrlParameters = s.cdn_auth_url_parameters;
			e.m_bWebRTC = s.is_webrtc;
			e.m_data = s;
			this.LoadBroadcast(e);
			setTimeout(() => {
				e.m_schHeartbeatTimeout.Schedule(
					e.m_data.heartbeat_interval * 1000,
					() => this.HeartbeatBroadcast(e),
				);
			}, Math.random() * 30000);
		} else if (o == "waiting") {
			e.SetState(
				fK.Loading,
				(0, Localize)("#BroadcastWatch_WaitingForResponse"),
			);
			let n = Date.now() - r;
			if (n > 60000) {
				e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_NotAvailable"));
				return;
			}
			let i = n > 30000 ? s.retry : 5000;
			e.m_schManifestTimeout.Schedule(i, () =>
				this.GetBroadcastManifest(e, t, r),
			);
		} else if (o == "waiting_for_start") {
			e.SetState(fK.Loading, (0, Localize)("#BroadcastWatch_WaitingForStart"));
			e.m_schManifestTimeout.Schedule(s.retry, () =>
				this.GetBroadcastManifest(e, t, r),
			);
		} else if (o == "waiting_for_reconnect") {
			e.SetState(
				fK.Loading,
				(0, Localize)("#BroadcastWatch_WaitingForReconnect"),
			);
			e.m_schManifestTimeout.Schedule(s.retry, () =>
				this.GetBroadcastManifest(e, t, r),
			);
		} else if (o == "end") {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_NotAvailable"));
		} else if (o == "too_many_broadcasts") {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_TooManyBroadcasts"));
		} else if (o == "system_not_supported") {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_SystemNotSupported"));
		} else if (o == "user_restricted") {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_UserRestricted"));
		} else if (o == "poor_upload_quality") {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_PoorUploadQuality"));
		} else if (o == "request_failed") {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_RequestFailed"));
		} else if (o == "too_many_viewers") {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_TooManyViewers"));
		} else {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_NotAvailable"));
		}
	}
	async GetClipManifest(e, t) {
		e.SetState(fK.Loading, "");
		let r = {
			clipid: e.m_clipID,
			watchlocation: t,
			sessionid: g.TS.SESSIONID,
		};
		let n = null;
		try {
			n = await a.get(g.TS.CHAT_BASE_URL + "broadcast/getclipdetails", {
				params: r,
				withCredentials: true,
			});
		} catch (e) {
			console.error(e);
			console.log("Failed to get clip manifest!");
		}
		if (!n || n.status != 200) {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_RequestFailed"));
			return;
		}
		let i = n.data;
		if (i.success == 1) {
			e.SetState(fK.Ready);
			e.m_data = i;
			this.LoadClip(e);
		} else {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_RequestFailed"));
		}
	}
	async GetVODManifest(e, t) {
		e.SetState(fK.Loading, "");
		let r = await B.K.Get().LoadVODForAppID(e.m_nAppIDVOD);
		if (r) {
			e.SetState(fK.Ready);
			e.m_manifestURL = r.video_url;
			this.LoadVOD(e);
		} else {
			e.SetState(fK.Error, (0, Localize)("#BroadcastWatch_RequestFailed"));
		}
	}
	async HeartbeatBroadcast(e) {
		let t = new FormData();
		t.append("steamid", e.m_steamIDBroadcast);
		t.append("broadcastid", e.m_ulBroadcastID);
		t.append("viewertoken", this.m_broadcastSettings.ulViewerToken);
		a.post(g.TS.CHAT_BASE_URL + "broadcast/heartbeat/", t);
		e.m_schHeartbeatTimeout.Schedule(e.m_data.heartbeat_interval * 1000, () =>
			this.HeartbeatBroadcast(e),
		);
	}
	LoadBroadcast(e) {
		if (e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0) {
			this.m_activeVideo.StartBroadcast(e);
		}
	}
	LoadClip(e) {
		if (e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0) {
			this.m_activeVideo.StartClip(e);
		}
	}
	LoadVOD(e) {
		if (e.m_rgVideos.findIndex((e) => e == this.m_activeVideo) >= 0) {
			this.m_activeVideo.StartVOD(e);
		}
	}
	BroadcastDownloadFailed(e, t = true, r = A.N_.Invalid) {
		e.Stop();
		let n = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
		if (n && n.m_eWatchState != fK.Loading) {
			if (n.m_bWebRTC && t) {
				n.m_bWebRTC = false;
			}
			if (r == A.N_.StreamGone) {
				this.DelayedGetBroadcastManifest(n, e.GetWatchLocation());
			} else {
				this.GetBroadcastManifest(n, e.GetWatchLocation());
			}
		}
	}
	UserInputClickVideo(e) {
		if (
			this.m_activeVideo != e &&
			(this.PauseAllVideo(),
			(this.m_activeVideo = e),
			!e.IsBroadcastClip() && !e.IsBroadcastVOD())
		) {
			let t = this.m_mapBroadcasts.get(e.GetBroadcastSteamID());
			this.GetBroadcastManifest(t, e.GetWatchLocation());
		}
		e.UserInputClick();
	}
	LoadBroadcastSettings() {
		if (!window.localStorage) {
			return;
		}
		let e = window.localStorage.getItem("broadcastSettings");
		if (!e) {
			return;
		}
		let t = JSON.parse(e);
		if (!t) {
			return;
		}
		Object.assign(this.m_broadcastSettings, t);
		let r = this.m_broadcastSettings;
		r.bMuted = !!r.bMuted;
		r.nVolume = p.OQ(r.nVolume, 0, 1);
		if (typeof r.ulViewerToken != "string") {
			r.ulViewerToken = "0";
		}
	}
	SaveBroadcastSettings() {
		if (window.localStorage) {
			this.m_schSaveSettings.Schedule(1000, () => {
				try {
					window.localStorage.setItem(
						"broadcastSettings",
						JSON.stringify(this.m_broadcastSettings),
					);
				} catch (e) {}
			});
		}
	}
	SetViewerToken(e) {
		if (this.m_broadcastSettings.ulViewerToken != e) {
			this.m_broadcastSettings.ulViewerToken = e;
			this.SaveBroadcastSettings();
		}
	}
	GetViewerToken() {
		return this.m_broadcastSettings.ulViewerToken;
	}
	SaveVolumeChange(e, t) {
		if (
			this.m_broadcastSettings.nVolume != e ||
			this.m_broadcastSettings.bMuted != t
		) {
			this.m_broadcastSettings.nVolume = e;
			this.m_broadcastSettings.bMuted = t;
			this.SaveBroadcastSettings();
		}
	}
}
(0, n.Cg)([s.sH], O.prototype, "m_mapBroadcasts", undefined);
(function (e) {
	e[(e.Timeline = 1)] = "Timeline";
	e[(e.Minimap = 2)] = "Minimap";
})((a0 ||= {}));
class P {
	m_elVideo = null;
	m_player = null;
	m_listeners = new _.Ji();
	m_gameDataParser = null;
	m_eWatchLocation = 0;
	m_bStartWithSubtitles = false;
	m_steamIDBroadcast = null;
	m_BroadcastInfo = null;
	m_broadcastClipID = null;
	m_nBroadcastAppIDVOD = null;
	m_bPaused = false;
	m_nPlaybackTime = 0;
	m_bBuffering = false;
	m_bOnLiveEdge = false;
	m_nVolume = 0;
	m_bMuted = false;
	m_bUserInputNeeded = false;
	m_bIsReplay = false;
	m_nTimelineDuration = 1800;
	m_nVideoStartPos = 0;
	m_nVideoEndPos = 0;
	m_editorStartTime = 0;
	m_editorEndTime = 0;
	m_rgMarkers = s.sH.array();
	m_rgSegments = s.sH.array();
	m_rgRegions = s.sH.array();
	m_fnOnVideoEnd;
	m_videoEndingTimer;
	constructor(e, t, r, n) {
		(0, s.Gn)(this);
		this.m_elVideo = e;
		this.m_nVolume = t;
		this.m_bMuted = r;
		this.m_eWatchLocation = n;
	}
	SetBroadcastSteamID(e) {
		this.m_steamIDBroadcast = e;
	}
	GetBroadcastSteamID() {
		return this.m_steamIDBroadcast;
	}
	GetWatchLocation() {
		return this.m_eWatchLocation;
	}
	IsPaused() {
		return this.m_bPaused;
	}
	GetPlaybackTime() {
		return this.m_nPlaybackTime;
	}
	SetStatsViewIsVisible(e) {
		if (this.m_player) {
			this.m_player.SetStatsViewIsVisible(e);
		}
	}
	GetDASHPlayerStats() {
		return this.m_player.GetDASHPlayerStats();
	}
	BHasDASHStats() {
		return this.m_player != null;
	}
	IsTimelineMapActive() {
		return false;
	}
	CanSeek() {
		return this.m_player && this.m_player.CanSeek();
	}
	IsBuffering() {
		return this.m_bBuffering;
	}
	IsOnLiveEdge() {
		return this.m_bOnLiveEdge;
	}
	GetVideoAvailableStartTime() {
		return this.m_nVideoStartPos;
	}
	GetVolume() {
		return this.m_nVolume;
	}
	GetUserInputNeeded() {
		return this.m_bUserInputNeeded;
	}
	IsReplay() {
		return this.m_bIsReplay;
	}
	IsBroadcastClip() {
		return this.m_broadcastClipID != null;
	}
	SetBroadcastClipID(e) {
		this.m_broadcastClipID = e;
	}
	GetBroadcastClipID() {
		return this.m_broadcastClipID;
	}
	IsBroadcastVOD() {
		return this.m_nBroadcastAppIDVOD != null;
	}
	SetBroadcastAppIDVOD(e) {
		this.m_nBroadcastAppIDVOD = e;
	}
	GetBroadcastAppIDVOD() {
		return this.m_nBroadcastAppIDVOD;
	}
	GetVideoRepresentations() {
		if (this.m_player) {
			return this.m_player.GetVideoRepresentations();
		} else {
			return [];
		}
	}
	SetVideoRepresentation(e) {
		this.m_player.SetVideoRepresentation(e);
	}
	GetBroadcastInfo() {
		return this.m_BroadcastInfo;
	}
	BHasTimedText() {
		return this.m_player?.BHasTimedText();
	}
	BHasPlayer() {
		return Boolean(this.m_player);
	}
	ListSubtitles() {
		return this.m_elVideo.textTracks;
	}
	GetSubtitles() {
		for (let e = 0; e < this.m_elVideo.textTracks.length; e++) {
			const t = this.m_elVideo.textTracks[e];
			if (t.mode === "showing") {
				return t;
			}
		}
		return null;
	}
	SetSubtitles(e) {
		let t = e ? LocaleToELanguage[e] : -1;
		this.m_player.SetSubtitles(t);
	}
	SetStartWithSubtitles(e) {
		this.m_bStartWithSubtitles = e;
	}
	GetBroadcastState() {
		return BroadcastWatchStore.GetBroadcastState(this);
	}
	GetBroadcastStateDescription() {
		return BroadcastWatchStore.GetBroadcastStateDescription(this);
	}
	SetOnVideoCallback(e) {
		this.m_fnOnVideoEnd = e;
	}
	InitPlayer() {
		(0, y.w)(!this.m_player, "Initialized twice?");
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"playing",
			this.OnVideoPlaying,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"pause",
			this.OnVideoPause,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"timeupdate",
			this.OnVideoTimeUpdate,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"volumechange",
			this.OnVolumeUpdated,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-bufferupdate",
			this.OnVideoTimeUpdate,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-gamedataupdate",
			this.OnGameDataUpdate,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-downloadfailed",
			this.OnDownloadFailed,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-webrtcretry",
			this.OnWebRTCRetry,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-webrtcfailed",
			this.OnWebRTCFailed,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-userinputneeded",
			this.OnUserInputNeeded,
		);
		this.m_bPaused = false;
		this.m_nPlaybackTime = 0;
		this.m_bBuffering = false;
		this.m_nTimelineDuration = 1800;
		this.m_nVideoStartPos = 0;
		this.m_nVideoEndPos = 0;
		this.m_rgMarkers.clear();
		this.m_rgSegments.clear();
		this.m_bUserInputNeeded = false;
		this.m_bIsReplay = false;
	}
	Restart() {
		if (!this.IsMuted() && !this.IsPaused() && !this.GetUserInputNeeded()) {
			this.Play();
		}
	}
	StartBroadcast(e) {
		this.InitPlayer();
		if (e.m_data.url) {
			this.m_player = new A.Zn(this.m_elVideo, !(0, d.Mc)() && (0, d.aM)());
			this.m_player.PlayMPD(
				e.m_data.url,
				e.m_strCDNAuthUrlParameters,
				e.m_data.hls_url,
				this.m_bStartWithSubtitles,
			);
		} else {
			this.m_player = new f(this.m_elVideo);
			this.m_player.PlayWebRTC(
				this.m_steamIDBroadcast,
				e.m_ulViewerToken,
				e.m_data.webrtc_session_id,
				e.m_data.webrtc_turn_server,
				e.m_data.webrtc_offer_sdp,
			);
		}
		this.SetVolume(this.m_nVolume);
		this.m_player.SetMuted(this.m_bMuted);
		let t = this.m_player.GetDASHPlayerStats();
		if (t) {
			t.SetBroadcasterAndViewerInfo(
				this.m_steamIDBroadcast,
				g.iA.steamid,
				e.m_ulBroadcastID,
				e.m_ulViewerToken,
				e.m_strCDNAuthUrlParameters,
			);
		}
		this.m_BroadcastInfo = BroadcastWatchStore.StartInfo(
			this.m_steamIDBroadcast,
		);
	}
	StartClip(e) {
		this.InitPlayer();
		this.m_player = new A.Zn(this.m_elVideo);
		this.m_player.PlayMPD(
			e.m_data.clip_url,
			null,
			null,
			this.m_bStartWithSubtitles,
		);
		this.SetVolume(this.m_nVolume);
		this.m_player.SetMuted(this.m_bMuted);
	}
	StartVOD(e) {
		this.InitPlayer();
		let t = new A.Zn(this.m_elVideo, !(0, d.Mc)() && (0, d.aM)());
		this.m_player = t;
		if (g.iA.logged_in && e.m_nAppIDVOD) {
			t.SetBookmarkAdapter(new v.M(e.m_nAppIDVOD));
		}
		this.m_player.PlayMPD(
			e.m_manifestURL,
			null,
			null,
			this.m_bStartWithSubtitles,
		);
		this.SetVolume(this.m_nVolume);
		this.m_player.SetMuted(this.m_bMuted);
	}
	Stop() {
		this.m_listeners.Unregister();
		if (this.m_BroadcastInfo) {
			BroadcastWatchStore.StopInfo(this.m_BroadcastInfo);
			this.m_BroadcastInfo = null;
		}
		this.m_gameDataParser = null;
		if (this.m_player) {
			this.m_player.Close();
			this.m_player = null;
		}
	}
	TogglePlayPause() {
		if (!this.m_player || this.m_player.IsPaused()) {
			this.Play();
		} else {
			this.Pause();
		}
	}
	Play() {
		const e = this.GetBroadcastState();
		if (e == fK.None || this.IsBroadcastClip()) {
			BroadcastWatchStore.StartVideo(this);
		} else if (e == fK.Ready) {
			BroadcastWatchStore.SetActiveVideo(this);
			if (this.m_player) {
				this.m_player.Play();
			} else if (this.IsBroadcastVOD()) {
				this.StartVOD(
					BroadcastWatchStore.GetBroadcastVOD(this.m_nBroadcastAppIDVOD),
				);
			} else {
				this.StartBroadcast(
					BroadcastWatchStore.GetBroadcast(this.m_steamIDBroadcast),
				);
			}
		}
	}
	Pause() {
		console.log(
			"Pause ",
			this.m_steamIDBroadcast,
			this.m_nBroadcastAppIDVOD,
			this.m_broadcastClipID,
		);
		if (this.m_player) {
			this.m_player.Pause();
		}
	}
	JumpTime(e) {
		this.m_player.JumpTime(e);
	}
	Seek(e) {
		this.m_player?.Seek(e);
	}
	SeekAndPlay(e) {
		this.m_player.SeekAndPlay(e);
	}
	JumpToLiveEdge() {
		if (this.m_player.IsLiveContent()) {
			this.SeekAndPlay(this.m_player.GetBufferedLiveEdgeTime());
		} else {
			this.SeekAndPlay(this.m_player.GetAvailableVideoStartTime());
		}
	}
	SetVolume(e) {
		if (this.m_player) {
			this.m_player.SetVolume(e);
		}
		this.m_nVolume = this.m_player.GetVolume();
		BroadcastWatchStore.SaveVolumeChange(e, this.m_bMuted);
	}
	SetMute(e) {
		if (this.m_player) {
			this.m_player.SetMuted(e);
		}
		this.m_bMuted = e;
		BroadcastWatchStore.SaveVolumeChange(this.m_nVolume, e);
	}
	IsMuted() {
		return this.m_bMuted;
	}
	OnVideoPlaying() {
		this.m_bPaused = false;
		if (this.m_editorStartTime === 0 && this.m_editorEndTime === 0) {
			this.m_editorStartTime = this.GetVideoAvailableStartTime();
			this.m_editorEndTime =
				this.GetVideoAvailableStartTime() + this.GetTimelineDuration();
		}
	}
	OnVideoPause() {
		this.m_bPaused = true;
	}
	OnVideoTimeUpdate() {
		window.clearTimeout(this.m_videoEndingTimer);
		if (this.IsBroadcastClip()) {
			this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime();
			this.m_nVideoStartPos = this.m_player.GetAvailableVideoStartTime();
			this.m_nVideoEndPos = this.m_player.GetBufferedLiveEdgeTime();
			this.m_nTimelineDuration = this.m_nVideoEndPos - this.m_nVideoStartPos;
			this.m_bOnLiveEdge = false;
			this.m_bBuffering = this.m_player.IsBuffering();
		} else {
			this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime();
			this.m_nVideoStartPos = this.m_player.GetAvailableVideoStartTime();
			this.m_nVideoEndPos = Math.max(
				this.m_player.GetBufferedLiveEdgeTime(),
				this.m_nPlaybackTime,
			);
			if (
				this.IsBroadcastVOD() &&
				((this.m_nTimelineDuration = this.m_nVideoEndPos),
				this.m_fnOnVideoEnd &&
					this.m_nVideoEndPos - this.m_nPlaybackTime < A.Br)
			) {
				const e = 400;
				this.m_videoEndingTimer = window.setTimeout(() => {
					this.m_fnOnVideoEnd();
				}, e);
			}
			this.m_bBuffering = this.m_player.IsBuffering();
			this.m_bOnLiveEdge = this.m_nVideoEndPos - this.m_nPlaybackTime < A.Br;
			if (this.m_player.IsPaused()) {
				this.m_bOnLiveEdge = false;
			}
		}
	}
	OnVolumeUpdated() {
		this.m_nVolume = this.m_player.GetVolume();
		this.m_bMuted = this.m_player.IsMuted();
	}
	OnGameDataUpdate(e) {
		let t = e.detail;
		if (!t || typeof t.gamedata != "object") {
			return;
		}
		if (
			!this.m_gameDataParser ||
			this.m_gameDataParser.GetAppID() != t.gamedata.__appid
		) {
			this.m_gameDataParser = new u(t.gamedata.__appid);
		}
		const r = this.m_player.GetLiveContentStartTime().getTime();
		if ("timelinemarkers" in t.gamedata) {
			const e = this.m_gameDataParser.UpdateMarkers(
				t.gamedata.__timelinemarkers,
				r,
			);
			if (e) {
				this.m_rgMarkers.replace(e.rgMarkers || []);
				this.m_rgSegments.replace(e.rgSegments || []);
			}
			const n = this.m_gameDataParser.UpdateRegions(t.gamedata.__regions);
			if (n) {
				this.m_rgRegions.replace(n);
			}
		} else if ("soundtrack" in t.gamedata) {
			this.m_gameDataParser.UpdateSoundtrack(
				this.m_steamIDBroadcast,
				t.gamedata.soundtrack,
			);
		}
	}
	OnDownloadFailed(e) {
		let t = e.detail || A.N_.Invalid;
		BroadcastWatchStore.BroadcastDownloadFailed(this, true, t);
	}
	OnWebRTCRetry() {
		BroadcastWatchStore.BroadcastDownloadFailed(this, false);
	}
	OnWebRTCFailed() {
		BroadcastWatchStore.BroadcastDownloadFailed(this, true);
	}
	OnUserInputNeeded() {
		this.m_bUserInputNeeded = true;
	}
	UserInputClick() {
		this.m_bUserInputNeeded = false;
		if (this.m_player) {
			this.JumpToLiveEdge();
		} else {
			this.Play();
		}
	}
	StopPlaybackTillUserInput() {
		this.Stop();
		this.OnUserInputNeeded();
	}
	GetTimelineStartPos() {
		return this.m_nVideoEndPos - this.m_nTimelineDuration;
	}
	GetTimelineDuration() {
		return this.m_nTimelineDuration;
	}
	GetTimeAtMousePosition(e, t, r, n) {
		let i = p.Fu(e, t.left, t.right, r, n);
		return Math.floor(i + 0.5);
	}
	GetPercentOffsetFromTime(e, t) {
		let r = 0;
		let n = 0;
		if (t == a0.Timeline) {
			n = this.m_nVideoEndPos;
			r = n - this.m_nTimelineDuration;
		} else {
			r = 0;
			n = 0;
		}
		return p.Fu(e, r, n, 0, 100);
	}
	GetTimelineMarkers() {
		return this.m_rgMarkers;
	}
	GetTimelineSegments() {
		return this.m_rgSegments;
	}
	GetGameDataRegions() {
		return this.m_rgRegions;
	}
	BHasMarkersOrSegments() {
		return this.has_segments || this.has_markers;
	}
	GetThumbnailForTimestamp(e) {
		return this.m_player.GetThumbnailForTimestamp(e);
	}
	get has_markers() {
		return this.m_rgMarkers.length > 0;
	}
	get has_segments() {
		return this.m_rgSegments.length > 0;
	}
}
(0, n.Cg)([s.sH], P.prototype, "m_player", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_bPaused", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_nPlaybackTime", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_bBuffering", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_bOnLiveEdge", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_nVolume", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_bMuted", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_bUserInputNeeded", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_bIsReplay", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_nTimelineDuration", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_nVideoStartPos", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_nVideoEndPos", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_editorStartTime", undefined);
(0, n.Cg)([s.sH], P.prototype, "m_editorEndTime", undefined);
(0, n.Cg)([s.XI.bound], P.prototype, "StartBroadcast", null);
(0, n.Cg)([s.XI.bound], P.prototype, "StartClip", null);
(0, n.Cg)([s.XI.bound], P.prototype, "StartVOD", null);
(0, n.Cg)([h.o], P.prototype, "OnVideoPlaying", null);
(0, n.Cg)([h.o], P.prototype, "OnVideoPause", null);
(0, n.Cg)([s.XI.bound], P.prototype, "OnVideoTimeUpdate", null);
(0, n.Cg)([h.o], P.prototype, "OnVolumeUpdated", null);
(0, n.Cg)([s.XI.bound], P.prototype, "OnGameDataUpdate", null);
(0, n.Cg)([h.o], P.prototype, "OnDownloadFailed", null);
(0, n.Cg)([h.o], P.prototype, "OnWebRTCRetry", null);
(0, n.Cg)([h.o], P.prototype, "OnWebRTCFailed", null);
(0, n.Cg)([h.o], P.prototype, "OnUserInputNeeded", null);
export const BroadcastWatchStore = new O();
window.uiBroadcastWatchStore = BroadcastWatchStore;
