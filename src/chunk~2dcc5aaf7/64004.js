import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import s from "./63696.js";
import o from "./48969.js";
import l from "./93960.js";
const c = new (require(/*webcrack:missing*/ "./83599.js").wd)(
	"FriendsUI/RemotePlay",
);
class m {
	constructor() {
		Gn(this);
	}
	m_settings = {};
	m_serverConfig = new o.Fh();
	m_clientConfig = new o.fO();
	m_devices = [];
	m_bRestrictedSession = false;
	m_bRemoteDeviceClientPairingDialogVisible = false;
	m_bRemoteDeviceHostPairingDialogVisible = false;
	m_bAudioDriverDialogVisible = false;
	m_bInputDriverDialogVisible = false;
	m_bInputDriverRestartNoticeVisible = false;
	m_setAdditionalParentalBlocks = new Set();
	m_sRemoteDeviceBeingPaired = undefined;
	m_sRemoteDevicePairingPIN = undefined;
	Init(e) {
		SteamClient.RemotePlay.RegisterForSettingsChanges(this.OnSettingsChanged);
		SteamClient.RemotePlay.RegisterForDevicesChanges(this.OnDevicesChanged);
		SteamClient.RemotePlay.RegisterForRestrictedSessionChanges(
			this.OnRestrictedSessionChanged,
		);
		SteamClient.RemotePlay.RegisterForRemoteDevicePairingPINChanged(
			this.OnRemoteDevicePairingPINChanged,
		);
		SteamClient.RemotePlay.RegisterForRemoteDeviceAuthorizationRequested(
			this.OnRemoteDeviceAuthorizationRequested,
		);
		SteamClient.RemotePlay.RegisterForRemoteDeviceAuthorizationCancelled(
			this.OnRemoteDeviceAuthorizationCancelled,
		);
		SteamClient.RemotePlay.RegisterForAudioDriverPrompt(
			this.OnAudioDriverPrompt,
		);
		SteamClient.RemotePlay.RegisterForInputDriverPrompt(
			this.OnInputDriverPrompt,
		);
		SteamClient.RemotePlay.RegisterForInputDriverRestartNotice(
			this.OnInputDriverRestartNotice,
		);
		SteamClient.RemotePlay.RegisterForAdditionalParentalBlocks(
			this.OnAdditionalParentalBlocks,
		);
	}
	get settings() {
		return this.m_settings;
	}
	get serverConfig() {
		return this.m_serverConfig;
	}
	set serverConfig(e) {
		SteamClient.RemotePlay.SetStreamingServerConfig(e.serializeBase64String());
	}
	get clientConfig() {
		return this.m_clientConfig;
	}
	set clientConfig(e) {
		SteamClient.RemotePlay.SetStreamingClientConfig(
			e.serializeBase64String(),
			this.m_settings.unStreamingSessionID,
		);
	}
	OnSettingsChanged(e) {
		this.m_settings = e;
		this.m_serverConfig = o.Fh.deserializeBinary(e.RemotePlayServerConfig);
		this.m_clientConfig = o.fO.deserializeBinary(e.RemotePlayClientConfig);
	}
	get devices() {
		return this.m_devices;
	}
	OnDevicesChanged(e) {
		this.m_devices = e;
	}
	OnRestrictedSessionChanged(e) {
		this.m_bRestrictedSession = e;
	}
	GetStreamingFormFactors() {
		let e = false;
		let t = false;
		let r = false;
		let n = false;
		for (const i of this.m_devices) {
			if (i.status == "Streaming") {
				e = true;
				switch (i.formFactor) {
					case 1: {
						t = true;
						break;
					}
					case 2: {
						r = true;
						break;
					}
					case 4: {
						n = true;
					}
				}
			}
		}
		return {
			bStreaming: e,
			bStreamingToPhone: t,
			bStreamingToTablet: r,
			bStreamingToTV: n,
		};
	}
	ShowRemoteDeviceClientPairingDialog(e) {
		this.m_sRemoteDeviceBeingPaired = e;
		this.m_bRemoteDeviceClientPairingDialogVisible = true;
	}
	HideRemoteDeviceClientPairingDialog() {
		this.m_bRemoteDeviceClientPairingDialogVisible = false;
	}
	get bRemoteDeviceClientPairingDialogVisible() {
		return this.m_bRemoteDeviceClientPairingDialogVisible;
	}
	ShowRemoteDeviceHostPairingDialog(e) {
		this.m_sRemoteDeviceBeingPaired = e;
		this.m_bRemoteDeviceHostPairingDialogVisible = true;
	}
	HideRemoteDeviceHostPairingDialog() {
		this.m_bRemoteDeviceHostPairingDialogVisible = false;
	}
	get bRemoteDeviceHostPairingDialogVisible() {
		return this.m_bRemoteDeviceHostPairingDialogVisible;
	}
	get sRemoteDeviceBeingPaired() {
		return this.m_sRemoteDeviceBeingPaired;
	}
	get sRemoteDevicePairingPIN() {
		return this.m_sRemoteDevicePairingPIN;
	}
	async OnRemoteDevicePairingPINChanged(e, t) {
		this.m_sRemoteDevicePairingPIN = t;
		if (t === "") {
			this.HideRemoteDeviceClientPairingDialog();
		} else {
			this.ShowRemoteDeviceClientPairingDialog(e);
		}
	}
	async OnRemoteDeviceAuthorizationRequested(e) {
		this.ShowRemoteDeviceHostPairingDialog(e);
	}
	OnRemoteDeviceAuthorizationCancelled() {
		this.HideRemoteDeviceHostPairingDialog();
	}
	ShowAudioDriverDialog() {
		this.m_bAudioDriverDialogVisible = true;
	}
	HideAudioDriverDialog() {
		this.m_bAudioDriverDialogVisible = false;
	}
	get bAudioDriverDialogVisible() {
		return this.m_bAudioDriverDialogVisible;
	}
	OnAudioDriverPrompt() {
		this.ShowAudioDriverDialog();
	}
	ShowInputDriverDialog() {
		this.m_bInputDriverDialogVisible = true;
	}
	HideInputDriverDialog() {
		this.m_bInputDriverDialogVisible = false;
	}
	get bInputDriverDialogVisible() {
		return this.m_bInputDriverDialogVisible;
	}
	OnInputDriverPrompt() {
		this.ShowInputDriverDialog();
	}
	ShowInputDriverRestartNotice() {
		this.m_bInputDriverRestartNoticeVisible = true;
	}
	HideInputDriverRestartNotice() {
		this.m_bInputDriverRestartNoticeVisible = false;
	}
	get bInputDriverRestartNoticeVisible() {
		return this.m_bInputDriverRestartNoticeVisible;
	}
	OnInputDriverRestartNotice() {
		this.ShowInputDriverRestartNotice();
	}
	OnAdditionalParentalBlocks(e) {
		c.Debug("Received additional parental blocks:", e);
		this.m_setAdditionalParentalBlocks.clear();
		for (const t of e) {
			this.m_setAdditionalParentalBlocks.add(t);
		}
	}
	BHasParentalBlock(e) {
		return (
			(!!this.m_bRestrictedSession &&
				(e == 1 || e == 2 || e == 2 || e == 4 || e == 2 || e == 4 || e == 9)) ||
			this.m_setAdditionalParentalBlocks.has(e)
		);
	}
	BHasParentalBlocks() {
		return (
			this.m_bRestrictedSession || this.m_setAdditionalParentalBlocks.size > 0
		);
	}
}
Cg([i.sH], m.prototype, "m_settings", undefined);
Cg([i.sH], m.prototype, "m_serverConfig", undefined);
Cg([i.sH], m.prototype, "m_clientConfig", undefined);
Cg([i.sH], m.prototype, "m_devices", undefined);
Cg([i.sH], m.prototype, "m_bRestrictedSession", undefined);
Cg([i.sH], m.prototype, "m_bRemoteDeviceClientPairingDialogVisible", undefined);
Cg([i.sH], m.prototype, "m_bRemoteDeviceHostPairingDialogVisible", undefined);
Cg([i.sH], m.prototype, "m_bAudioDriverDialogVisible", undefined);
Cg([i.sH], m.prototype, "m_bInputDriverDialogVisible", undefined);
Cg([i.sH], m.prototype, "m_bInputDriverRestartNoticeVisible", undefined);
Cg([i.sH], m.prototype, "m_setAdditionalParentalBlocks", undefined);
Cg([i.sH], m.prototype, "m_sRemoteDeviceBeingPaired", undefined);
Cg([i.sH], m.prototype, "m_sRemoteDevicePairingPIN", undefined);
Cg([l.o], m.prototype, "OnSettingsChanged", null);
Cg([l.o], m.prototype, "OnDevicesChanged", null);
Cg([l.o], m.prototype, "OnRestrictedSessionChanged", null);
Cg([l.o], m.prototype, "OnRemoteDevicePairingPINChanged", null);
Cg([l.o], m.prototype, "OnRemoteDeviceAuthorizationRequested", null);
Cg([l.o], m.prototype, "OnRemoteDeviceAuthorizationCancelled", null);
Cg([l.o], m.prototype, "OnAudioDriverPrompt", null);
Cg([l.o], m.prototype, "OnInputDriverPrompt", null);
Cg([l.o], m.prototype, "OnInputDriverRestartNotice", null);
Cg([i.XI.bound], m.prototype, "OnAdditionalParentalBlocks", null);
export const ut = new m();
export function F2() {
	return q3(() => ut.settings);
}
export function TN() {
	return [q3(() => ut.serverConfig), (e) => (ut.serverConfig = e)];
}
export function d0() {
	return [q3(() => ut.clientConfig), (e) => (ut.clientConfig = e)];
}
export function dN() {
	return q3(() => ut.devices);
}
export function Gs() {
	return dN().filter((e) => e.status === "Streaming").length > 0;
}
export function z5() {
	return [
		q3(() => ut.bRemoteDeviceClientPairingDialogVisible),
		s.useCallback(() => {
			ut.HideRemoteDeviceClientPairingDialog();
		}, []),
	];
}
export function OQ() {
	return [
		q3(() => ut.bRemoteDeviceHostPairingDialogVisible),
		s.useCallback(() => {
			ut.HideRemoteDeviceHostPairingDialog();
		}, []),
	];
}
export function ij() {
	return q3(() => ut.sRemoteDeviceBeingPaired);
}
export function Xs() {
	return q3(() => ut.sRemoteDevicePairingPIN);
}
export function Ct() {
	return [
		q3(() => ut.bAudioDriverDialogVisible),
		s.useCallback(() => {
			ut.HideAudioDriverDialog();
		}, []),
	];
}
export function kb() {
	return [
		q3(() => ut.bInputDriverDialogVisible),
		s.useCallback(() => {
			ut.HideInputDriverDialog();
		}, []),
	];
}
export function VA() {
	return [
		q3(() => ut.bInputDriverRestartNoticeVisible),
		s.useCallback(() => {
			ut.HideInputDriverRestartNotice();
		}, []),
	];
}
window.RemotePlayStore_SteamUI = ut;
