import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./52451.js";
import s from "./83957.js";
import l from "./83599.js";
import "./72476.js";
const o = s;
const c = `${require.p}noisegate-audio-worklet.js?contenthash=e6e508d0677b0dce3e6d`;
require.p;
const m = new l.wd("AudioPlaybackManager");
export class u {
	m_Context;
	m_mapPlaybackObjs = new Map();
	m_bVoiceActive = false;
	m_hCloseContextTimeout = undefined;
	m_voiceStore = undefined;
	m_nLastObservedSampleRate = 0;
	m_bSupportsAudioWorkletProcessors = false;
	m_MediaStreamDestination = undefined;
	m_MediaStreamAudioElem = undefined;
	static sm_instance = null;
	constructor() {
		Gn(this);
		_u3.sm_instance = this;
	}
	static Get() {
		return u.sm_instance;
	}
	get context() {
		return this.m_Context;
	}
	get supports_audio_worklets() {
		return this.m_bSupportsAudioWorkletProcessors;
	}
	SetVoiceStore(e) {
		this.m_voiceStore = e;
	}
	GetActiveDestination() {
		this.CreateContextIfNeeded();
		if (
			this.m_voiceStore &&
			this.m_voiceStore.IsAnyVoiceActive() &&
			this.m_voiceStore.GetSelectedOutputDevice() != "default"
		) {
			if (this.m_MediaStreamDestination == null) {
				let e = this.m_Context;
				this.m_MediaStreamDestination = e.createMediaStreamDestination();
				this.m_MediaStreamAudioElem = document.createElement("audio");
				this.m_MediaStreamAudioElem.srcObject =
					this.m_MediaStreamDestination.stream;
				this.m_MediaStreamAudioElem.play();
				try {
					this.m_MediaStreamAudioElem.setSinkId(
						this.m_voiceStore.GetSelectedOutputDevice(),
					);
				} catch (e) {
					m.Error(
						`Failed setting audio output device to ${this.m_voiceStore.GetSelectedOutputDevice()}: ${e}`,
					);
				}
			}
			return this.m_MediaStreamDestination;
		}
		return this.m_Context.destination;
	}
	PlayAudioURL(e, t = 1) {
		return this.PlayAudioURLWithRepeats(e);
	}
	PlayAudioURLWithRepeats(e, t = 0) {
		m.Debug(`web audio playback requested: ${e}`);
		this.CreateContextIfNeeded();
		let r = new d(this, e, t);
		this.m_mapPlaybackObjs.set(r, true);
		return r;
	}
	PlaybackFinished(e) {
		this.m_mapPlaybackObjs.delete(e);
		this.CleanupContextIfUneeded(false);
	}
	SetVoiceActive(e) {
		this.m_bVoiceActive = true;
		this.CreateContextIfNeeded(e);
	}
	SetVoiceNotActive() {
		this.m_bVoiceActive = false;
		this.CleanupContextIfUneeded(true);
	}
	GetLastObservedSampleRate() {
		return this.m_nLastObservedSampleRate;
	}
	CreateContextIfNeeded(e = undefined) {
		if (this.m_Context == null) {
			m.Debug("new context");
			let t = window;
			let r =
				t.AudioContext || t.webkitAudioContext || t.webkitAudioContext || false;
			this.m_Context = new r();
			this.m_Context.onstatechange = this.OnAudioContextStateChange;
			m.Debug(`sample rate ${this.m_Context.sampleRate}`);
			this.m_nLastObservedSampleRate = this.m_Context.sampleRate;
			let n = this.m_Context;
			if (n.audioWorklet != null) {
				this.m_bSupportsAudioWorkletProcessors = true;
				n.audioWorklet
					.addModule(c)
					.then(() => {
						m.Debug("noisegate-audio-worklet.js worklet processor loaded");
						if (e) {
							e();
						}
					})
					.catch((t) => {
						m.Error(
							"Failed to load noisegate-audio-worklet.js worklet processor",
						);
						if (e) {
							e();
						}
					});
			} else if (e) {
				e();
			}
		} else if (e) {
			e();
		}
	}
	DelayedCleanupContextIfInactive() {
		this.m_hCloseContextTimeout = undefined;
		if (this.m_mapPlaybackObjs.size == 0 && this.m_bVoiceActive == 0) {
			m.Debug("close context");
			if (this.m_MediaStreamAudioElem != null) {
				this.m_MediaStreamAudioElem.pause();
				this.m_MediaStreamAudioElem.src = undefined;
				this.m_MediaStreamAudioElem.srcObject = undefined;
			}
			this.m_MediaStreamAudioElem = undefined;
			this.m_MediaStreamDestination = undefined;
			this.m_Context.close();
			this.m_Context = undefined;
		}
	}
	CleanupContextIfUneeded(e) {
		if (this.m_mapPlaybackObjs.size == 0 && this.m_bVoiceActive == 0) {
			if (this.m_hCloseContextTimeout != null) {
				clearTimeout(this.m_hCloseContextTimeout);
				this.m_hCloseContextTimeout = undefined;
			}
			if (e) {
				this.DelayedCleanupContextIfInactive();
				return;
			}
			this.m_hCloseContextTimeout = SetBackgroundTimeout(
				this.DelayedCleanupContextIfInactive,
				10000,
			);
		}
	}
	OnAudioContextStateChange() {
		if (this.m_Context != null) {
			m.Debug(`web audio context state changed: ${this.m_Context.state}`);
		}
	}
}
Cg([i.sH], u.prototype, "m_nLastObservedSampleRate", undefined);
Cg([i.sH], u.prototype, "m_bSupportsAudioWorkletProcessors", undefined);
Cg([a.oI], u.prototype, "DelayedCleanupContextIfInactive", null);
Cg([i.XI.bound], u.prototype, "OnAudioContextStateChange", null);
class d {
	m_Manager;
	m_URL;
	m_Source = undefined;
	m_RepeatCount = 0;
	m_TimesPlayed = 0;
	m_Cancelled = false;
	m_cbPlaybackFinished = null;
	constructor(e, t, r) {
		Gn(this);
		this.m_Manager = e;
		this.m_URL = t;
		this.m_RepeatCount = r;
		o.get(t, {
			responseType: "arraybuffer",
		})
			.then((t) => {
				e.context
					.decodeAudioData(t.data)
					.then((t) => {
						if (this.m_Cancelled) {
							this.NotifyPlaybackFinished();
						} else {
							let r = e.context.createBufferSource();
							r.buffer = t;
							r.connect(e.GetActiveDestination());
							r.start(0);
							r.onended = this.OnPlaybackEnded;
							this.m_Source = r;
						}
					})
					.catch((e) => {
						this.OnFailure();
					});
			})
			.catch((e) => {
				this.OnFailure();
			});
	}
	StopPlayback() {
		this.m_Cancelled = true;
		if (this.m_Source) {
			this.m_Source.stop(0);
			this.m_Source.disconnect();
			this.m_Source = undefined;
			this.NotifyPlaybackFinished();
		}
	}
	get url() {
		return this.m_URL;
	}
	OnFailure() {
		SetBackgroundTimeout(() => this.m_Manager.PlaybackFinished(this), 1);
	}
	OnPlaybackEnded() {
		this.m_TimesPlayed += 1;
		if (!this.m_Cancelled && this.m_TimesPlayed <= this.m_RepeatCount) {
			let e = this.m_Manager.context.createBufferSource();
			e.buffer = this.m_Source.buffer;
			e.connect(this.m_Manager.GetActiveDestination());
			e.start(0);
			e.onended = this.OnPlaybackEnded;
			this.m_Source.disconnect();
			this.m_Source = undefined;
			this.m_Source = e;
			return;
		}
		if (this.m_Source) {
			this.m_Source.disconnect();
			this.m_Source = undefined;
		}
		this.NotifyPlaybackFinished();
	}
	NotifyPlaybackFinished() {
		if (this.m_cbPlaybackFinished) {
			this.m_cbPlaybackFinished();
		}
		this.m_Manager.PlaybackFinished(this);
	}
	RegisterOnPlaybackFinished(e) {
		this.m_cbPlaybackFinished = e;
	}
}
Cg([i.XI.bound], d.prototype, "OnFailure", null);
Cg([i.XI.bound], d.prototype, "OnPlaybackEnded", null);
