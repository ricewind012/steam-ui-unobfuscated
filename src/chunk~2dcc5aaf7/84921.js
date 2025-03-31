import i, { Cg } from "./34629.js";
import a, { Gn } from "./89193.js";
import s from "./61738.js";
import { CTrackedEventListeners } from "../../actual_src/utils/callbackutils";
import l, { QS } from "./52451.js";
import { q_ as q, tG, ZI, fX } from "./84629.js";
export let ep;
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.DownloadFailed = 1)] = "DownloadFailed";
	e[(e.PlaybackError = 2)] = "PlaybackError";
	e[(e.MediaTypeError = 3)] = "MediaTypeError";
})((ep ||= {}));
export class si {
	m_elVideo = null;
	m_player = null;
	m_listeners = new CTrackedEventListeners();
	m_nDownloadFailureCount = 0;
	m_bInitailized = false;
	m_bPaused = false;
	m_bAtEnd = false;
	m_strMediaTypeError = null;
	m_ePlayerError = ep.None;
	m_bUserInputNeeded = false;
	m_bMuted = false;
	m_bSeekReadyToPlay = false;
	m_bVideoElementPlaying = false;
	m_nPlaybackSpeed = 1;
	m_bIsWaiting = true;
	m_bAutoPlay;
	m_bLoadedMetadata = false;
	m_nPlaybackTime = 0;
	m_nVideoStartTime = 0;
	m_nVideoDuration = 0;
	m_nVolume = 1;
	m_eSeekType = s.lU.Absolute;
	constructor(e) {
		Gn(this);
		this.m_bAutoPlay = !!e;
	}
	IsPaused() {
		return this.m_bPaused;
	}
	IsAtEnd() {
		return this.m_bAtEnd;
	}
	BSeekReadyToPlay() {
		return this.m_bSeekReadyToPlay;
	}
	GetMediaTypeError() {
		return this.m_strMediaTypeError;
	}
	GetPlaybackError() {
		return this.m_ePlayerError;
	}
	GetUserInputNeeded() {
		return this.m_bUserInputNeeded;
	}
	GetPlaybackTime() {
		if (this.m_eSeekType === s.lU.Absolute) {
			return this.m_nPlaybackTime;
		} else {
			return this.m_nPlaybackTime - this.m_nVideoStartTime;
		}
	}
	GetTimelineDuration() {
		if (this.m_eSeekType === s.lU.Absolute) {
			return this.m_nVideoDuration;
		} else {
			return this.m_nVideoDuration - this.m_nVideoStartTime;
		}
	}
	GetVolume() {
		return this.m_nVolume;
	}
	GetMuted() {
		return this.m_bMuted;
	}
	GetMPDURL() {
		return this.m_player?.GetMPDURL();
	}
	GetVideoElementCurrentTime() {
		return this.m_elVideo?.currentTime;
	}
	BVideoElementPlaying() {
		return this.m_bVideoElementPlaying;
	}
	BVideoElementWaiting() {
		return this.m_bIsWaiting;
	}
	GetVideoHeight() {
		return this.m_elVideo?.clientHeight || 0;
	}
	GetVideoWidth() {
		return this.m_elVideo?.clientWidth || 0;
	}
	GetLoadedMetadata() {
		return this.m_bLoadedMetadata;
	}
	Start(e, t, r, n = s.lU.Absolute) {
		this.Stop();
		this.m_bAtEnd = false;
		this.m_elVideo = e;
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-userpausechange",
			this.OnUserPauseChange,
		);
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
		this.m_listeners.AddEventListener(this.m_elVideo, "ended", this.OnVideoEnd);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-bufferupdate",
			this.OnVideoTimeUpdate,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-downloadfailed",
			this.OnDownloadFailed,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-typeerror",
			this.OnMediaTypeError,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-playbackerror",
			this.OnPlaybackError,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"valve-userinputneeded",
			this.OnUserInputNeeded,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"waiting",
			this.OnVideoWaiting,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"volumechange",
			this.OnVolumeChange,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"canplay",
			this.OnCanPlay,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"seeking",
			this.OnSeeking,
		);
		this.m_listeners.AddEventListener(
			this.m_elVideo,
			"loadedmetadata",
			this.OnLoadedMetadata,
		);
		this.m_player = new s.Zn(this.m_elVideo, false);
		this.m_player.SetUserPlayChoice(this.m_bAutoPlay);
		this.m_player.PlayMPD(t, null, null, false);
		this.m_bMuted = p("muted");
		this.m_nVolume = p("volume");
		this.m_player.SetMuted(this.m_bMuted);
		this.m_player.SetVolume(this.m_nVolume);
		this.m_bSeekReadyToPlay = false;
		this.m_eSeekType = n;
		const i = `seeking_${t}_${r.toFixed(3)}`;
		q(`CGameRecordingVideo:: perf mark ${i}`);
		performance.mark(i);
		this.m_player.Seek(r, this.m_eSeekType);
		this.m_bPaused = this.m_player.IsPaused();
		this.m_bInitailized = true;
	}
	Stop() {
		this.m_listeners.Unregister();
		if (this.m_player) {
			this.m_player.Close();
		}
		this.m_elVideo = null;
		this.m_player = null;
		this.m_bInitailized = false;
		this.m_bPaused = false;
		this.m_bAtEnd = false;
		this.m_bSeekReadyToPlay = false;
		this.m_bVideoElementPlaying = false;
		this.m_ePlayerError = ep.None;
		this.m_bUserInputNeeded = false;
		this.m_nPlaybackTime = 0;
		this.m_nVideoStartTime = 0;
		this.m_nVideoDuration = 0;
		this.m_bLoadedMetadata = false;
		this.m_bIsWaiting = true;
	}
	async UpdateMPD() {
		await this.m_player?.UpdateMPD();
	}
	IsInitialized() {
		return this.m_bInitailized;
	}
	OnCanPlay() {
		this.m_bSeekReadyToPlay = true;
		this.m_bAtEnd = false;
	}
	OnUserPauseChange() {
		this.m_bPaused = this.m_player.IsPaused();
	}
	OnVideoPlaying() {
		this.m_bVideoElementPlaying = true;
		this.m_bIsWaiting = false;
		this.SetPlaybackSpeed(this.m_nPlaybackSpeed);
		tG("video playing");
	}
	OnVideoPause() {
		this.m_bVideoElementPlaying = false;
		tG("video paused");
	}
	OnVideoTimeUpdate() {
		this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime();
		this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime();
		this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime();
		if (
			this.m_nPlaybackTime >= this.m_nVideoDuration &&
			this.m_bVideoElementPlaying
		) {
			this.m_bVideoElementPlaying = false;
			this.m_bAtEnd = true;
		}
	}
	OnVideoEnd() {
		this.m_bVideoElementPlaying = false;
		this.m_bAtEnd = true;
		tG("video ended");
	}
	OnSeeking() {
		tG("video on seeking");
		this.m_bVideoElementPlaying = false;
		if (this.m_nVideoDuration - this.m_nPlaybackTime < 1) {
			this.m_bAtEnd = true;
		} else {
			this.m_bIsWaiting = true;
			this.m_bAtEnd = false;
		}
	}
	OnLoadedMetadata() {
		this.m_bLoadedMetadata = true;
	}
	async OnDownloadFailed() {
		ZI("video download failed");
		if (this.m_nDownloadFailureCount < 2) {
			await this.m_player?.UpdateMPD();
			this.m_nDownloadFailureCount++;
		} else {
			this.m_ePlayerError = ep.DownloadFailed;
		}
	}
	OnMediaTypeError(e) {
		if (typeof e.detail == "string") {
			this.m_strMediaTypeError = e.detail;
		}
		ZI("media type error", e.detail);
		this.m_ePlayerError = ep.MediaTypeError;
	}
	OnPlaybackError() {
		this.m_bVideoElementPlaying = false;
		ZI("video playback error");
		this.m_ePlayerError = ep.PlaybackError;
	}
	OnUserInputNeeded() {
		this.m_bUserInputNeeded = true;
		if (!this.m_bMuted && this.m_elVideo.autoplay) {
			fX("Failed to autoplay video. Muting and trying again.");
			this.SetMute(true);
			this.Play();
		}
	}
	OnVolumeChange() {
		tG("volume change");
	}
	OnVideoWaiting() {
		this.m_bIsWaiting = true;
		this.m_bVideoElementPlaying = false;
		if (this.GetTimelineDuration() - this.GetPlaybackTime() < 1) {
			this.m_bAtEnd = true;
		}
	}
	UserInputReceived() {
		if (this.IsInitialized()) {
			this.m_bUserInputNeeded = false;
			this.m_player.SeekAndPlay(0);
		}
	}
	SetVolume(e) {
		this.m_nVolume = e;
		g("volume", e);
		if (e > 0) {
			this.SetMute(false, true);
		} else {
			this.SetMute(true, true);
		}
		if (this.IsInitialized()) {
			this.m_player.SetVolume(e);
		}
	}
	SetMute(e, t) {
		if (this.IsInitialized()) {
			this.m_player.SetMuted(e);
		}
		this.m_bMuted = e;
		if (t) {
			g("muted", e);
		}
	}
	TogglePlayPause() {
		if (this.IsInitialized()) {
			if (this.m_player.IsPaused()) {
				this.Play();
			} else {
				this.Pause();
			}
		}
	}
	Play() {
		if (this.IsInitialized()) {
			this.m_player.Play();
		}
	}
	Pause() {
		if (this.IsInitialized()) {
			this.m_player.Pause();
			this.m_bIsWaiting = false;
		}
	}
	SetPlaybackSpeed(e) {
		this.m_nPlaybackSpeed = e;
		if (this.IsInitialized()) {
			this.m_elVideo.playbackRate = e;
		}
	}
	GetPlaybackSpeed() {
		return this.m_nPlaybackSpeed;
	}
	Seek(e) {
		if (!this.IsInitialized()) {
			return;
		}
		const t = `seeking_${this.m_player.GetMPDURL()}_${e.toFixed(3)}`;
		this.m_bAtEnd = false;
		this.m_bSeekReadyToPlay = false;
		performance.mark(t);
		q(`CGameRecordingVideo:: perf mark ${t}`);
		q(`CGameRecordingVideo::Seek to ${e}`);
		this.m_nPlaybackTime = e;
		this.m_player.Seek(e, this.m_eSeekType);
	}
}
export function xE(e, t) {
	return QS(
		(r) => {
			t(r);
			return () => e();
		},
		[t],
	);
}
let d;
function A() {
	if (!d) {
		let e;
		let t = window.localStorage.getItem("gameRecordingPlayer") || "{}";
		try {
			e = JSON.parse(t);
		} catch (t) {
			e = {};
		}
		d = {
			muted: e.muted || false,
			volume: e.volume || 1,
		};
	}
	return d;
}
function p(e) {
	return A()[e];
}
function g(e, t) {
	let r = A();
	r[e] = t;
	let n = JSON.stringify(r);
	window.localStorage.setItem("gameRecordingPlayer", n);
}
Cg([a.sH], si.prototype, "m_bInitailized", undefined);
Cg([a.sH], si.prototype, "m_bPaused", undefined);
Cg([a.sH], si.prototype, "m_bAtEnd", undefined);
Cg([a.sH], si.prototype, "m_strMediaTypeError", undefined);
Cg([a.sH], si.prototype, "m_ePlayerError", undefined);
Cg([a.sH], si.prototype, "m_bUserInputNeeded", undefined);
Cg([a.sH], si.prototype, "m_bMuted", undefined);
Cg([a.sH], si.prototype, "m_bSeekReadyToPlay", undefined);
Cg([a.sH], si.prototype, "m_bVideoElementPlaying", undefined);
Cg([a.sH], si.prototype, "m_nPlaybackSpeed", undefined);
Cg([a.sH], si.prototype, "m_bIsWaiting", undefined);
Cg([a.sH], si.prototype, "m_bLoadedMetadata", undefined);
Cg([a.sH], si.prototype, "m_nPlaybackTime", undefined);
Cg([a.sH], si.prototype, "m_nVideoStartTime", undefined);
Cg([a.sH], si.prototype, "m_nVideoDuration", undefined);
Cg([a.sH], si.prototype, "m_nVolume", undefined);
Cg([a.sH], si.prototype, "m_eSeekType", undefined);
Cg([a.XI], si.prototype, "Start", null);
Cg([a.XI], si.prototype, "Stop", null);
Cg([l.oI], si.prototype, "OnCanPlay", null);
Cg([l.oI], si.prototype, "OnUserPauseChange", null);
Cg([l.oI], si.prototype, "OnVideoPlaying", null);
Cg([l.oI], si.prototype, "OnVideoPause", null);
Cg([l.oI], si.prototype, "OnVideoTimeUpdate", null);
Cg([l.oI], si.prototype, "OnVideoEnd", null);
Cg([l.oI], si.prototype, "OnSeeking", null);
Cg([l.oI], si.prototype, "OnLoadedMetadata", null);
Cg([l.oI], si.prototype, "OnDownloadFailed", null);
Cg([l.oI], si.prototype, "OnMediaTypeError", null);
Cg([l.oI], si.prototype, "OnPlaybackError", null);
Cg([l.oI], si.prototype, "OnUserInputNeeded", null);
Cg([l.oI], si.prototype, "OnVolumeChange", null);
Cg([l.oI], si.prototype, "OnVideoWaiting", null);
Cg([l.oI], si.prototype, "UserInputReceived", null);
