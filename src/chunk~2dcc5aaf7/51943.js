import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import o, { qo } from "./43397.js";
import l from "./74362.js";
import c from "./79769.js";
import { _g } from "./52451.js";
import d from "./36813.js";
import "./43691.js";
const A = "Raven/Raven2/FireFlight/Renoir Audio Processor";
const p = "ACP/ACP3X/ACP6x Audio Coprocessor";
class g {
	static s_mapInputNames = new Map([
		[A, "#Audio_DeviceMicrophone"],
		[p, "#Audio_DeviceMicrophone"],
	]);
	static s_mapOutputNames = new Map([
		[A, "#Audio_DeviceSpeakers"],
		[p, "#Audio_DeviceSpeakers"],
		[
			"Rembrandt Radeon High Definition Audio Controller",
			"#Audio_DeviceExternal",
		],
		["HD-Audio Generic", "#Audio_DeviceExternal"],
	]);
	m_id;
	m_sName;
	m_bHasOutput;
	m_bHasInput;
	m_mapVolumes = new Map();
	m_rtLastUpdate = undefined;
	m_VolumeChangedSubscribable = new c.lu();
	get id() {
		return this.m_id;
	}
	get bHasOutput() {
		return this.m_bHasOutput;
	}
	get bHasInput() {
		return this.m_bHasInput;
	}
	constructor(e) {
		Gn(this);
		this.m_id = e.id;
		this.m_sName = e.sName;
		this.m_bHasOutput = e.bHasOutput;
		this.m_mapVolumes.set(l.z1.AllOutput, e.flOutputVolume);
		this.m_bHasInput = e.bHasInput;
		this.m_mapVolumes.set(l.z1.Input, e.flInputVolume);
	}
	BOnboardAudio() {
		switch (this.m_sName) {
			case A:
			case p: {
				return true;
			}
			default: {
				return false;
			}
		}
	}
	GetName(e) {
		let t = "";
		switch (e) {
			case l.T4.Input: {
				t = g.s_mapInputNames.get(this.m_sName);
				break;
			}
			case l.T4.Output: {
				t = g.s_mapOutputNames.get(this.m_sName);
			}
		}
		if (t) {
			return (0, Localize)(t);
		} else {
			return this.m_sName;
		}
	}
	GetOriginalName() {
		return this.m_sName;
	}
	HasDirection(e) {
		switch (e) {
			case l.T4.Input: {
				return this.m_bHasInput;
			}
			case l.T4.Output: {
				return this.m_bHasOutput;
			}
			default: {
				return false;
			}
		}
	}
	setDeviceVolume(e, t) {
		this.OnVolumeUpdated(e, t);
		SteamClient.System.Audio.SetDeviceVolume(this.m_id, e, t)?.then(o.rA);
	}
	setAsDefaultDevice(e) {
		SteamClient.System.Audio.SetDefaultDeviceOverride(this.m_id, e);
	}
	getDeviceVolume(e) {
		return this.m_mapVolumes.get(e);
	}
	OnVolumeUpdated(e, t) {
		this.m_mapVolumes.set(e, t);
		this.m_rtLastUpdate = Date.now() / 1000;
		this.m_VolumeChangedSubscribable.Dispatch();
	}
}
Cg([a.sH], g.prototype, "m_rtLastUpdate", undefined);
class h {
	id;
	strName;
	pid;
	gameid;
	m_mapVolumes = new Map();
	m_volumeChangedCallbacks = new c.lu();
	m_rtLastUpdate = undefined;
	constructor(e, t, r, n, i) {
		Gn(this);
		this.id = e;
		this.strName = t;
		this.pid = n;
		this.gameid = i;
		this.m_mapVolumes.set(l.z1.AllOutput, r);
	}
	GetVolume() {
		return this.m_mapVolumes.get(l.z1.AllOutput);
	}
	SetVolume(e) {
		this.OnVolumeUpdated(e);
		SteamClient.System.Audio.SetAppVolume(this.id, e)?.then(o.rA);
	}
	OnVolumeUpdated(e) {
		this.m_mapVolumes.set(l.z1.AllOutput, e);
		this.m_rtLastUpdate = Date.now() / 1000;
		this.m_volumeChangedCallbacks.Dispatch();
	}
}
Cg([a.sH], h.prototype, "m_rtLastUpdate", undefined);
class C {
	m_bAvailable = false;
	m_activeOutputDeviceId = l.vn;
	m_activeInputDeviceId = l.vn;
	m_overrideOutputDeviceId = l.vn;
	m_overrideInputDeviceId = l.vn;
	m_mapAudioDevices = new a.Es();
	m_mapAudioApps = new a.Es();
	m_bEnumeratedAudioAppsFirstTime = false;
	m_VolumePressedSubscribable = new c.lu();
	m_nSuppressVolumeOverlayRefCount = 0;
	constructor() {
		Gn(this);
		this.m_bAvailable = SteamClient.System.Audio != null;
		if (this.m_bAvailable) {
			SteamClient.System.Audio.RegisterForServiceConnectionStateChanges(
				this.OnServiceConnectionStateChanged,
			);
			SteamClient.System.Audio.RegisterForDeviceAdded(this.OnAudioDeviceAdded);
			SteamClient.System.Audio.RegisterForDeviceRemoved(
				this.OnAudioDeviceRemoved,
			);
			SteamClient.System.Audio.RegisterForDeviceVolumeChanged(
				this.OnAudioDeviceVolumeChanged,
			);
			SteamClient.System.Audio.RegisterForVolumeButtonPressed(
				this.OnVolumeButtonPressed,
			);
			SteamClient.System.Audio.GetDevices()?.then((e) => {
				this.m_activeOutputDeviceId = e.activeOutputDeviceId;
				this.m_activeInputDeviceId = e.activeInputDeviceId;
				this.m_overrideOutputDeviceId = e.overrideOutputDeviceId;
				this.m_overrideInputDeviceId = e.overrideInputDeviceId;
				e.vecDevices.forEach((e) => this.RegisterDevice(e));
			});
			SteamClient.System.Audio.RegisterForAppAdded(this.OnAppAdded);
			SteamClient.System.Audio.RegisterForAppRemoved(this.OnAppRemoved);
			SteamClient.System.Audio.RegisterForAppVolumeChanged(
				this.OnAppVolumeChanged,
			);
		}
	}
	Init() {
		SteamClient.System.Audio.GetApps()?.then((e) => {
			for (const t of e.rgApps) {
				this.RegisterApp(t.id, t.strName, t.flVolume, t.unPID);
			}
		});
		this.m_bEnumeratedAudioAppsFirstTime = true;
	}
	get bAvailable() {
		return this.m_bAvailable;
	}
	getDevices(e = null) {
		let t = Array.from(this.m_mapAudioDevices.values());
		if (e != null) {
			t = t.filter((t) =>
				((e, t) => {
					if (!e.HasDirection(t)) {
						return false;
					}
					if (e.GetName(t).startsWith("echo-cancel")) {
						return false;
					}
					if (t == l.T4.Output) {
						let r = true;
						if (e.GetName(t).startsWith("input.virtual")) {
							return false;
						}
						if (r && e.GetName(t).startsWith("filter-chain-sink")) {
							return false;
						}
					}
					if (t == l.T4.Input) {
						if (e.GetName(t).startsWith("output.virtual")) {
							return false;
						}
						if (e.GetName(t).startsWith("filter-chain-source")) {
							return false;
						}
					}
					return true;
				})(t, e),
			);
		}
		t.sort((t, r) => qo(t.GetName(e), r.GetName(e)));
		return t;
	}
	getDevice(e) {
		return this.m_mapAudioDevices.get(e);
	}
	getActiveDeviceId(e) {
		switch (e) {
			case l.T4.Input: {
				return this.m_activeInputDeviceId;
			}
			case l.T4.Output: {
				return this.m_activeOutputDeviceId;
			}
			default: {
				console.error("Invaid direction");
				return l.vn;
			}
		}
	}
	getOverrideDeviceId(e) {
		switch (e) {
			case l.T4.Input: {
				return this.m_overrideInputDeviceId;
			}
			case l.T4.Output: {
				return this.m_overrideOutputDeviceId;
			}
			default: {
				console.error("Invaid direction");
				return l.vn;
			}
		}
	}
	OnAudioDeviceAdded(e) {
		if (!this.m_mapAudioDevices.has(e.id)) {
			this.RegisterDevice(e);
		}
		this.UpdateDefaultDevices();
	}
	OnAudioDeviceRemoved(e) {
		this.m_mapAudioDevices.delete(e);
		this.UpdateDefaultDevices();
	}
	OnAudioDeviceVolumeChanged(e, t, r) {
		this.m_mapAudioDevices.get(e)?.OnVolumeUpdated(t, r);
	}
	OnVolumeButtonPressed(e) {
		this.m_VolumePressedSubscribable.Dispatch(e);
	}
	OnServiceConnectionStateChanged(e) {
		if (!e) {
			this.m_mapAudioDevices.clear();
			this.m_mapAudioApps.clear();
		}
	}
	RegisterDevice(e) {
		this.m_mapAudioDevices.set(e.id, new g(e));
	}
	UpdateDefaultDevices() {
		SteamClient.System.Audio.GetDevices()?.then((e) => {
			this.m_activeOutputDeviceId = e.activeOutputDeviceId;
			this.m_activeInputDeviceId = e.activeInputDeviceId;
			this.m_overrideOutputDeviceId = e.overrideOutputDeviceId;
			this.m_overrideInputDeviceId = e.overrideInputDeviceId;
		});
	}
	SuppressVolumeOverlay() {
		this.m_nSuppressVolumeOverlayRefCount++;
	}
	UnSuppressVolumeOverlay() {
		this.m_nSuppressVolumeOverlayRefCount--;
	}
	ClearDefaultDeviceOverride(e) {
		return SteamClient.System.Audio.ClearDefaultDeviceOverride(e);
	}
	GetApps() {
		if (!this.m_bEnumeratedAudioAppsFirstTime) {
			this.Init();
		}
		let e = Array.from(this.m_mapAudioApps.values());
		e = e.filter((e) => Boolean(e.gameid));
		e.sort((e, t) => qo(e.strName, t.strName));
		return e;
	}
	GetApp(e) {
		if (!this.m_bEnumeratedAudioAppsFirstTime) {
			this.Init();
		}
		return this.m_mapAudioApps.get(e);
	}
	RegisterApp(e, t, r, n) {
		d.UP.GetGameIDForPID({
			pid: n,
		}).then((i) => {
			this.m_mapAudioApps.set(e, new h(e, t, r, n, i.Body().gameid()));
		});
	}
	OnAppAdded(e) {
		this.RegisterApp(e.id, e.strName, e.flVolume, e.unPID);
	}
	OnAppRemoved(e) {
		this.m_mapAudioApps.delete(e);
	}
	OnAppVolumeChanged(e, t) {
		this.GetApp(e)?.OnVolumeUpdated(t);
	}
}
Cg([a.sH], C.prototype, "m_bAvailable", undefined);
Cg([a.sH], C.prototype, "m_activeOutputDeviceId", undefined);
Cg([a.sH], C.prototype, "m_activeInputDeviceId", undefined);
Cg([a.sH], C.prototype, "m_overrideOutputDeviceId", undefined);
Cg([a.sH], C.prototype, "m_overrideInputDeviceId", undefined);
Cg([a.sH], C.prototype, "m_nSuppressVolumeOverlayRefCount", undefined);
Cg([a.XI.bound], C.prototype, "OnAudioDeviceAdded", null);
Cg([a.XI.bound], C.prototype, "OnAudioDeviceRemoved", null);
Cg([a.XI.bound], C.prototype, "OnAudioDeviceVolumeChanged", null);
Cg([a.XI.bound], C.prototype, "OnVolumeButtonPressed", null);
Cg([a.XI.bound], C.prototype, "OnServiceConnectionStateChanged", null);
Cg([a.XI.bound], C.prototype, "OnAppAdded", null);
Cg([a.XI.bound], C.prototype, "OnAppRemoved", null);
Cg([a.XI.bound], C.prototype, "OnAppVolumeChanged", null);
export const F5 = new C();
export function In() {
	return q3(() => F5.bAvailable);
}
export function xU(e = null) {
	return q3(() => F5.getDevices(e));
}
function y(e) {
	const t = F5.getDevice(e);
	q3(() => t?.m_rtLastUpdate);
	return t;
}
export function hn(e) {
	return q3(() => F5.getActiveDeviceId(e));
}
export function tQ(e) {
	return q3(() => F5.getOverrideDeviceId(e));
}
export function ml(e) {
	return y(hn(e));
}
export function _t(e, t) {
	const r = y(e);
	const n = t == l.T4.Output ? l.z1.AllOutput : l.z1.Input;
	const i = r?.getDeviceVolume(n);
	const a = _g(50);
	return {
		flVolume: i,
		setVolume: (e) => a(() => r?.setDeviceVolume(n, e)),
	};
}
export function Cu(e) {
	return _t(hn(e), e);
}
export function fW() {
	i.useEffect(() => {
		F5.SuppressVolumeOverlay();
		return () => {
			F5.UnSuppressVolumeOverlay();
		};
	}, []);
}
export function aO() {
	return q3(() => F5.m_nSuppressVolumeOverlayRefCount) > 0;
}
