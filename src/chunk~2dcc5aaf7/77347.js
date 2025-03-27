import { Localize } from "../../actual_src/utils/localization.js";
import { GetUnixTime } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a, { q3 } from "./90095.js";
import s from "./22222.js";
import o from "./44846.js";
import c from "./93960.js";
import "./67338.js";
import m from "./43397.js";
import u from "./63696.js";
import d from "./51297.js";
import A from "./83599.js";
import { $$, DF } from "./42898.js";
import g from "./72476.js";
import { qw } from "./89748.js";
import _ from "./46422.js";
import { GP } from "./71033.js";
import { ld } from "./38542.js";
const y = new A.wd("SystemNetworkStore");
function S(e) {
	const t = e.split(".");
	if (t.length != 4) {
		return null;
	}
	let r = 0;
	r += parseInt(t[0]) << 24;
	r += parseInt(t[1]) << 16;
	r += parseInt(t[2]) << 8;
	r += parseInt(t[3]) << 0;
	return r;
}
export function yp(e) {
	if (Number.isInteger(e)) {
		return [
			(e >>> 24) & 255,
			(e >>> 16) & 255,
			(e >>> 8) & 255,
			(e >>> 0) & 255,
		].join(".");
	} else {
		return null;
	}
}
class B {
	m_DeviceWapId;
	m_nWirelessAPInfoIndex;
	m_DeviceInfo = undefined;
	m_NoLongerPresent = false;
	get deviceId() {
		return this.m_DeviceInfo.id;
	}
	get deviceWapId() {
		return this.m_DeviceWapId;
	}
	get wirelessAPInfo() {
		if (this.m_nWirelessAPInfoIndex != null) {
			return this.m_DeviceInfo.wireless?.aps[this.m_nWirelessAPInfoIndex];
		} else {
			return null;
		}
	}
	get key() {
		return B.KeyForAccessPointId(this.deviceId, this.deviceWapId);
	}
	static KeyForAccessPointId(e, t) {
		if (t) {
			return `${e.toString()}:${t.toString()}`;
		} else {
			return e.toString();
		}
	}
	get IPv4DNS() {
		return this.m_DeviceInfo?.ip4.dns_ip;
	}
	get IPv6DNS() {
		return this.m_DeviceInfo?.ip6.dns_ip;
	}
	get IPv4Addresses() {
		return this.m_DeviceInfo?.ip4.addresses ?? [];
	}
	get IPv6Addresses() {
		return this.m_DeviceInfo?.ip6.addresses ?? [];
	}
	get IPv4DHCPEnabled() {
		return this.m_DeviceInfo?.ip4.is_dhcp_enabled;
	}
	get isLoopback() {
		for (const e of this.IPv4Addresses) {
			if ((e.ip & 4278190080) == 2130706432) {
				return true;
			}
		}
		return false;
	}
	get displayName() {
		switch (this.type) {
			case s.WO.Wired: {
				return (
					this.m_DeviceInfo.wired?.friendly_name ??
					Localize("#Internet_Network_Type_Wired")
				);
			}
			case s.WO.Wireless: {
				return (
					this.wirelessAPInfo?.ssid ??
					Localize("#Internet_Network_Type_Wireless")
				);
			}
			case s.WO.Virtual: {
				return Localize("#Internet_Network_Type_Virtual");
			}
			case s.WO.Unknown:
			default: {
				return Localize("#Internet_Network_Type_Unknown");
			}
		}
	}
	get type() {
		return this.m_DeviceInfo.etype;
	}
	get isActiveWirelessAccessPoint() {
		return this.wirelessAPInfo?.is_active ?? false;
	}
	get isConnected() {
		return this.state == s.$J.Connected;
	}
	get isDefaultRoute() {
		return (
			!!this.isConnected &&
			(this.m_DeviceInfo.etype != s.WO.Wireless ||
				!!this.isActiveWirelessAccessPoint) &&
			(this.m_DeviceInfo.ip4.is_default_route ?? false)
		);
	}
	get state() {
		if (this.m_NoLongerPresent) {
			return s.$J.NotPresent;
		} else if (this.type != s.WO.Wireless || this.isActiveWirelessAccessPoint) {
			return this.m_DeviceInfo.estate;
		} else {
			return s.$J.Disconnected;
		}
	}
	get showAsLocked() {
		return (
			this.wirelessAPInfo != null && this.wirelessAPInfo.esecurity != s.Df.None
		);
	}
	get macAddress() {
		return this.m_DeviceInfo.mac;
	}
	get isAutoconnectEnabled() {
		return this.wirelessAPInfo?.is_autoconnect ?? false;
	}
	get isConnectable() {
		if (!OQ.Get().networkManagementAvailable) {
			return false;
		}
		if (this.m_DeviceInfo.wired?.is_cable_present === false) {
			return false;
		}
		switch (this.state) {
			case s.$J.Failed:
			case s.$J.Disconnected: {
				return true;
			}
			case s.$J.NotPresent:
			case s.$J.Disconnecting:
			case s.$J.Connecting:
			case s.$J.Connected:
			case s.$J.Retrying: {
				return false;
			}
		}
	}
	get isDisconnectable() {
		if (!OQ.Get().networkManagementAvailable) {
			return false;
		}
		switch (this.state) {
			case s.$J.NotPresent:
			case s.$J.Failed:
			case s.$J.Disconnected:
			case s.$J.Disconnecting:
			case s.$J.Connecting:
			case s.$J.Retrying: {
				return false;
			}
			case s.$J.Connected: {
				return true;
			}
		}
	}
	get isForgettable() {
		return (
			!!OQ.Get().networkManagementAvailable &&
			this.state != s.$J.NotPresent &&
			this.type == s.WO.Wireless &&
			(this.wirelessAPInfo?.is_autoconnect || !!this.wirelessAPInfo?.password)
		);
	}
	async Disconnect() {
		if (!OQ.Get().networkManagementAvailable) {
			return false;
		}
		return (
			(await SteamClient.System.Network.Device.Disconnect(this.deviceId))
				.result == 1
		);
	}
	async Forget() {
		if (!OQ.Get().networkManagementAvailable) {
			return false;
		}
		if (this.type != s.WO.Wireless) {
			return false;
		}
		return (
			(
				await SteamClient.System.Network.Device.WirelessNetwork.Forget(
					this.deviceId,
					this.deviceWapId,
				)
			).result == 1
		);
	}
	async SetAutoconnectEnabled(e) {
		if (!OQ.Get().networkManagementAvailable) {
			return false;
		}
		return (
			(
				await SteamClient.System.Network.Device.WirelessNetwork.SetAutoconnect(
					this.deviceId,
					this.deviceWapId,
					e,
				)
			).result == 1
		);
	}
	constructor(e, t) {
		Gn(this);
		this.m_DeviceWapId = t;
		this.SetDeviceInfo(e);
	}
	SetDeviceInfo(e) {
		this.m_nWirelessAPInfoIndex = null;
		if (e.etype == s.WO.Wireless) {
			const t = e.wireless?.aps ?? [];
			for (let e = 0; e < t.length; e++) {
				if (t[e].id == this.m_DeviceWapId) {
					this.m_nWirelessAPInfoIndex = e;
					break;
				}
			}
		}
		this.m_NoLongerPresent = false;
		this.m_DeviceInfo = e;
	}
	MarkAsNotPresent() {
		this.m_NoLongerPresent = true;
	}
}
Cg([i.sH.ref], B.prototype, "m_DeviceInfo", undefined);
Cg([i.sH], B.prototype, "m_NoLongerPresent", undefined);
export class OQ {
	static s_Singleton = null;
	m_cm = null;
	m_mapNetworkAccessPoints = new i.Es();
	m_bIsConnectedToANetwork = false;
	m_bIsConnectingToANetwork = false;
	m_bIsAwaitingInitialNetworkState = true;
	m_bWifiEnabled = false;
	m_WirelessDevice = null;
	m_connectivityTestState = {
		eConnectivityTestResult: o.ck.k_EConnectivityTestResult_Unknown,
		eFakeState: o.jr.k_ENetFakeLocalSystemState_Normal,
		bChecking: false,
	};
	m_proxyInfo = {
		proxy_mode: s.Xu.k_EHTTPProxyMode_Invalid,
		address: null,
		port: null,
		exclude_local: null,
	};
	static Get() {
		if (OQ.s_Singleton == null) {
			OQ.s_Singleton = new OQ();
			window.SystemNetworkStore = OQ.s_Singleton;
		}
		return OQ.s_Singleton;
	}
	async Init(e) {
		if (!this.m_cm) {
			this.m_cm = e;
			if (SteamClient.System.Network?.RegisterForDeviceChanges) {
				SteamClient.System.Network?.RegisterForDeviceChanges(
					this.OnNetworkDevicesChanged,
				);
			}
			if (SteamClient.System.Network?.GetProxyInfo) {
				SteamClient.System.Network?.GetProxyInfo().then(
					(e) => (this.m_proxyInfo = e),
				);
			}
			SteamClient.System.Network?.RegisterForConnectivityTestChanges(
				this.OnConnectivityTestStateChanged,
			);
			if (!SteamClient.System.Network?.RegisterForDeviceChanges) {
				this.m_bIsAwaitingInitialNetworkState = false;
			}
		}
	}
	constructor() {
		Gn(this);
	}
	get networkManagementAvailable() {
		return g.TS.ON_STEAMOS;
	}
	get connectivityTestState() {
		return this.m_connectivityTestState;
	}
	get hasNetworkConnection() {
		return this.m_bIsConnectedToANetwork;
	}
	get isConnectingToNetwork() {
		return this.m_bIsConnectingToANetwork;
	}
	get hasWirelessDevice() {
		return this.m_WirelessDevice != null;
	}
	get wirelessNetworkDevice() {
		return this.m_WirelessDevice;
	}
	get supportedWirelessSecurityFlags() {
		const e = this.m_WirelessDevice?.wireless?.esecurity_supported ?? s.Df.None;
		return Object.values(s.Df)
			.filter((e) => typeof e == "number")
			.filter((e) => e !== s.Df.Unsupported)
			.filter((t) => {
				n = e;
				return (r = t) == s.Df.None || !!(r & n);
				var r;
				var n;
			});
	}
	get hasInternetConnection() {
		return (
			!!this.hasSteamConnection ||
			(this.hasNetworkConnection &&
				this.connectivityTestState.eConnectivityTestResult ==
					o.ck.k_EConnectivityTestResult_Connected)
		);
	}
	get hasSteamConnection() {
		return this.m_cm.BIsConnected();
	}
	get rtReconnectThrottleStart() {
		return this.m_cm.rtReconnectThrottleStart;
	}
	get rtReconnectThrottleExpiration() {
		return this.m_cm.rtReconnectThrottleExpiration;
	}
	get proxyInfo() {
		return this.m_proxyInfo;
	}
	async SetProxyInfo(e) {
		if (sr(e)) {
			if (
				((e, t) => {
					if (e == null || t == null) {
						return e == t;
					}
					return (
						e.proxy_mode == t.proxy_mode &&
						(e.proxy_mode != s.Xu.k_EHTTPProxyMode_Manual ||
							(e.port == t.port &&
								e.address == t.address &&
								e.exclude_local == t.exclude_local))
					);
				})(this.m_proxyInfo, e)
			) {
				return {
					bSuccess: true,
					bRestartRequired: false,
				};
			} else {
				this.m_proxyInfo = e;
				await SteamClient.System.Network?.SetProxyInfo(
					e.proxy_mode,
					e.address ?? "",
					e.port ?? 0,
					e.exclude_local ?? true,
				);
				y.Debug("Set Proxy Info", {
					...e,
					proxy_mode: s.Xu[e.proxy_mode],
				});
				return {
					bSuccess: true,
					bRestartRequired: true,
				};
			}
		} else {
			return {
				bSuccess: false,
				bRestartRequired: false,
			};
		}
	}
	get isAwaitingInitialNetworkState() {
		return this.m_bIsAwaitingInitialNetworkState;
	}
	get isWifiEnabled() {
		return this.m_bWifiEnabled;
	}
	get accessPoints() {
		return Array.from(this.m_mapNetworkAccessPoints.values()).filter(
			(e) => !e.isLoopback,
		);
	}
	get loopbackAccessPoints() {
		return Array.from(this.m_mapNetworkAccessPoints.values()).filter(
			(e) => e.isLoopback,
		);
	}
	get presentAccessPoints() {
		return this.accessPoints.filter((e) => e.state != s.$J.NotPresent);
	}
	get userVisibleAccessPoints() {
		const e = this.presentAccessPoints.filter((e) => e.type != s.WO.Virtual);
		if (e.length != 0) {
			return e;
		} else {
			return this.presentAccessPoints;
		}
	}
	GetAccessPoint(e, t) {
		const r = B.KeyForAccessPointId(e, t);
		return this.m_mapNetworkAccessPoints.get(r);
	}
	SetNetFakeLocalSystemState(e) {
		SteamClient.System.Network.SetFakeLocalSystemState(e);
	}
	RecheckConnectivity() {
		SteamClient.System.Network.ForceTestConnectivity();
	}
	StartScanningForNetworks() {
		SteamClient.System.Network?.StartScanningForNetworks().then(m.rA);
	}
	StopScanningForNetworks() {
		SteamClient.System.Network?.StopScanningForNetworks().then(m.rA);
	}
	SetWifiEnabled(e) {
		SteamClient.System.Network.SetWifiEnabled(e);
	}
	async Connect(e) {
		y.Debug("Connecting to a network with params:", e);
		let t = new d.pc();
		t.set_device_id(e.deviceId);
		if (e.credentials) {
			t.credentials(true).set_username(e.credentials.username);
			t.credentials(true).set_password(e.credentials.password);
		}
		if (e.customAP) {
			t.ap_custom(true).set_ssid(e.customAP.ssid);
			t.ap_custom(true).set_esecurity(e.customAP.esecurity);
		} else if (e.deviceWapId != null) {
			t.ap_known(true).set_ap_id(e.deviceWapId);
		} else {
			y.Error("Connection params must have either a customAP or deviceWapID.");
		}
		if (e.customIP4) {
			t.ip4(true).set_is_enabled(true);
			t.ip4(true).set_is_dhcp_enabled(false);
			let r = new d.Ck();
			r.set_ip(S(e.customIP4.ip));
			r.set_netmask(S(e.customIP4.netmask));
			t.ip4(true).set_addresses([r]);
			let n = [];
			n.push(S(e.customIP4.primary_dns_ip));
			n.push(S(e.customIP4.secondary_dns_ip));
			t.ip4(true).set_dns_ip(n);
			t.ip4(true).set_gateway_ip(S(e.customIP4.gateway_ip));
		} else {
			t.ip4(true).set_is_dhcp_enabled(true);
		}
		const r = await SteamClient.System.Network.Device.Connect(
			t.serializeBase64String(),
		);
		y.Debug("Connect() resolved with", r);
		return r.result == 1;
	}
	SetDeviceInfo(e, t) {
		const e_id = e.id;
		const n = B.KeyForAccessPointId(e_id, t);
		if (this.m_mapNetworkAccessPoints.has(n)) {
			this.m_mapNetworkAccessPoints.get(n).SetDeviceInfo(e);
		} else {
			this.m_mapNetworkAccessPoints.set(n, new B(e, t));
		}
	}
	OnNetworkDevicesChanged(e) {
		const t = d.co.deserializeBinary(e).toObject();
		const r = new Set();
		let n = null;
		const t_devices = t.devices;
		for (const e of t_devices) {
			const e_id = e.id;
			if (e.etype == s.WO.Wireless) {
				n = e;
				for (const n of e.wireless?.aps ?? []) {
					const n_id = n.id;
					const a = B.KeyForAccessPointId(e_id, n_id);
					r.add(a);
					this.SetDeviceInfo(e, n_id);
				}
			} else {
				const n = B.KeyForAccessPointId(e_id);
				r.add(n);
				this.SetDeviceInfo(e);
			}
		}
		const a = Array.from(this.m_mapNetworkAccessPoints.keys()).filter(
			(e) => !r.has(e),
		);
		for (const e of a) {
			this.m_mapNetworkAccessPoints.get(e).MarkAsNotPresent();
		}
		this.m_bIsConnectedToANetwork = this.IsAnyDeviceConnected();
		this.m_bIsConnectingToANetwork = this.IsAnyDeviceConnecting();
		this.m_bIsAwaitingInitialNetworkState = false;
		this.m_bWifiEnabled = t.is_wifi_enabled;
		this.m_WirelessDevice = n;
		y.Debug(
			"Received New Network Devices Info:",
			{
				"connected to a network?": this.m_bIsConnectedToANetwork,
				"connecting to a network?": this.m_bIsConnectingToANetwork,
				"wifi enabled?": this.m_bWifiEnabled,
				"access points": this.accessPoints.map((e) => ({
					name: e.displayName,
					state: s.$J[e.state],
				})),
			},
			"All info:",
			t,
		);
	}
	OnConnectivityTestStateChanged(e) {
		y.Debug("New Connectivity Test State:", {
			...e,
			eConnectivityTestResult: o.ck[e.eConnectivityTestResult],
		});
		this.m_connectivityTestState = e;
	}
	IsAnyDeviceConnected() {
		for (let e = 0; e < this.accessPoints.length; ++e) {
			if (this.accessPoints[e].isConnected) {
				return true;
			}
		}
		return false;
	}
	IsAnyDeviceConnecting() {
		for (let e = 0; e < this.accessPoints.length; ++e) {
			if (this.accessPoints[e].state == s.$J.Connecting) {
				return true;
			}
		}
		return false;
	}
	async ForgetAllNetworks() {
		for (const e of this.accessPoints) {
			await e.Forget();
		}
	}
}
export function td(e) {
	switch (e) {
		case s.Df.None:
		case s.Df.StaticWep:
		case s.Df.DynamicWep:
		case s.Df.Wpa:
		case s.Df.Wpa2:
		case s.Df.Wpa3:
		case s.Df.Unsupported:
		default: {
			return false;
		}
		case s.Df.WpaEnterprise:
		case s.Df.Wpa2Enterprise: {
			return true;
		}
	}
}
export function Op(e) {
	switch (e) {
		case s.Df.None:
		case s.Df.Unsupported:
		default: {
			return false;
		}
		case s.Df.StaticWep:
		case s.Df.DynamicWep:
		case s.Df.Wpa:
		case s.Df.WpaEnterprise:
		case s.Df.Wpa2:
		case s.Df.Wpa2Enterprise:
		case s.Df.Wpa3: {
			return true;
		}
	}
}
export function Jg(e) {
	switch (e) {
		case s.Df.None: {
			return Localize("#Wireless_Security_Type_None");
		}
		case s.Df.StaticWep: {
			return Localize("#Wireless_Security_Type_Static_WEP");
		}
		case s.Df.DynamicWep: {
			return Localize("#Wireless_Security_Type_Dynamic_WEP");
		}
		case s.Df.Wpa: {
			return Localize("#Wireless_Security_Type_WPA");
		}
		case s.Df.WpaEnterprise: {
			return Localize("#Wireless_Security_Type_WPA_Enterprise");
		}
		case s.Df.Wpa2: {
			return Localize("#Wireless_Security_Type_WPA2");
		}
		case s.Df.Wpa2Enterprise: {
			return Localize("#Wireless_Security_Type_WPA2_Enterprise");
		}
		case s.Df.Wpa3: {
			return Localize("#Wireless_Security_Type_WPA3");
		}
		case s.Df.Unsupported: {
			return Localize("#Wireless_Security_Type_Unsupported");
		}
		default: {
			return Localize("#Wireless_Security_Type_Unknown");
		}
	}
}
export function dw(e) {
	switch (e) {
		case s.Xu.k_EHTTPProxyMode_Invalid:
		default: {
			return Localize("#Settings_Internet_InvalidProxy");
		}
		case s.Xu.k_EHTTPProxyMode_None: {
			return Localize("#Settings_Internet_NoProxy");
		}
		case s.Xu.k_EHTTPProxyMode_Manual: {
			return Localize("#Settings_Internet_ManualProxy");
		}
		case s.Xu.k_EHTTPProxyMode_Automatic: {
			return Localize("#Settings_Internet_AutomaticProxy");
		}
	}
}
export function yL() {
	return q3(() => OQ.Get().isWifiEnabled);
}
export function yt() {
	return q3(() => OQ.Get().hasNetworkConnection);
}
export function Id() {
	return q3(() => OQ.Get().hasSteamConnection);
}
export function If() {
	const [e, setE] = u.useState(0);
	const RRef = u.useRef(undefined);
	const n = Id();
	u.useEffect(() => {
		if (RRef.current !== undefined && n) {
			setE((e) => e + 1);
		}
		RRef.current = n;
	}, [n]);
	return e;
}
export function nM() {
	return q3(() => OQ.Get().isConnectingToNetwork);
}
export function N4() {
	return q3(() => OQ.Get().hasInternetConnection);
}
export function jh() {
	return q3(() => OQ.Get().isAwaitingInitialNetworkState);
}
export function tI() {
	const e = OQ.Get();
	ld(() => {
		e?.StartScanningForNetworks();
		return () => e?.StopScanningForNetworks();
	}, [e]);
}
export function Av() {
	return q3(() => OQ.Get().connectivityTestState);
}
export function qk(e) {
	switch (e) {
		case o.ck.k_EConnectivityTestResult_Unknown:
		case o.ck.k_EConnectivityTestResult_Connected: {
			return false;
		}
		case o.ck.k_EConnectivityTestResult_CaptivePortal:
		case o.ck.k_EConnectivityTestResult_TimedOut:
		case o.ck.k_EConnectivityTestResult_Failed:
		case o.ck.k_EConnectivityTestResult_WifiDisabled:
		case o.ck.k_EConnectivityTestResult_NoLAN: {
			return true;
		}
	}
}
export function f_() {
	const e = N4();
	const t = yt();
	const r =
		Av().eConnectivityTestResult == o.ck.k_EConnectivityTestResult_Unknown;
	return t && !e && !r;
}
export function ED() {
	return q3(() => OQ.Get().hasWirelessDevice);
}
export function mR() {
	return (
		Av().eConnectivityTestResult == o.ck.k_EConnectivityTestResult_CaptivePortal
	);
}
export function rw() {
	return q3(() => OQ.Get().supportedWirelessSecurityFlags);
}
export function qm() {
	return q3(() => OQ.Get().proxyInfo);
}
export function sr(e) {
	switch (e.proxy_mode) {
		case s.Xu.k_EHTTPProxyMode_Invalid:
		default: {
			return false;
		}
		case s.Xu.k_EHTTPProxyMode_None: {
			return true;
		}
		case s.Xu.k_EHTTPProxyMode_Manual: {
			return (
				e.port &&
				e.port > 0 &&
				e.port <= 65535 &&
				e.address &&
				e.address.length > 0
			);
		}
		case s.Xu.k_EHTTPProxyMode_Automatic: {
			return true;
		}
	}
}
export function Ev() {
	return OQ.Get().networkManagementAvailable;
}
export function db() {
	const e = qw().BIsOfflineMode();
	const t = Av().eConnectivityTestResult;
	const r = Id();
	const n = q3(() => OQ.Get().rtReconnectThrottleStart);
	const i = q3(() => OQ.Get().rtReconnectThrottleExpiration);
	if (t != o.ck.k_EConnectivityTestResult_Connected) {
		return false;
	}
	if (e) {
		return false;
	}
	if (r) {
		return false;
	}
	return !(i - n < 5);
}
export function gb() {
	const e = q3(() => OQ.Get().rtReconnectThrottleExpiration);
	const [t, setT] = u.useState(0);
	$$(() => {
		const t = e;
		const n = GetUnixTime();
		setT(t - n);
	}, 500);
	if (e == null || isNaN(t)) {
		return null;
	} else {
		return Math.floor(Math.max(0, t));
	}
}
export function $() {
	const e = yt();
	const t = GP(10);
	const r = nM();
	const n = (() => {
		const e = nM();
		return DF(e, 3000);
	})();
	const i = yL();
	const l = q3(() => {
		for (const e of OQ.Get().accessPoints) {
			if (e.isDefaultRoute) {
				return e;
			}
		}
		return null;
	});
	const c = f_();
	const m = qw().BIsOfflineMode();
	const u = Av().eConnectivityTestResult;
	const d =
		c ||
		((e) => {
			switch (e) {
				case o.ck.k_EConnectivityTestResult_CaptivePortal:
				case o.ck.k_EConnectivityTestResult_TimedOut:
				case o.ck.k_EConnectivityTestResult_Failed:
				case o.ck.k_EConnectivityTestResult_NoLAN: {
					return true;
				}
				default: {
					return false;
				}
			}
		})(u);
	const A = !l || l.type !== s.WO.Wireless;
	const g = l?.wirelessAPInfo?.estrength ?? s.oH.None;
	const h = l?.wirelessAPInfo?.ssid;
	if (m) {
		return {
			icon: 1,
			strength: s.oH.None,
		};
	} else if (e) {
		if (d) {
			if (n) {
				return {
					icon: 2,
					strength: s.oH.None,
				};
			} else if (A) {
				return {
					icon: 3,
					strength: s.oH.None,
				};
			} else {
				return {
					icon: 4,
					strength: g,
					ssid: h,
				};
			}
		} else if (A) {
			return {
				icon: 5,
				strength: s.oH.None,
			};
		} else {
			return {
				icon: 6,
				strength: g,
				ssid: h,
			};
		}
	} else if (i) {
		if (_.oy.BIsInOOBE) {
			return {
				icon: 0,
				strength: s.oH.None,
			};
		} else if (r || t) {
			return {
				icon: 2,
				strength: s.oH.None,
			};
		} else {
			return {
				icon: 6,
				strength: s.oH.None,
			};
		}
	} else {
		return {
			icon: 7,
			strength: s.oH.None,
		};
	}
}
Cg([i.sH], OQ.prototype, "m_bIsConnectedToANetwork", undefined);
Cg([i.sH], OQ.prototype, "m_bIsConnectingToANetwork", undefined);
Cg([i.sH], OQ.prototype, "m_bIsAwaitingInitialNetworkState", undefined);
Cg([i.sH], OQ.prototype, "m_bWifiEnabled", undefined);
Cg([i.sH.ref], OQ.prototype, "m_WirelessDevice", undefined);
Cg([i.sH.ref], OQ.prototype, "m_connectivityTestState", undefined);
Cg([i.sH.ref], OQ.prototype, "m_proxyInfo", undefined);
Cg([i.XI.bound], OQ.prototype, "OnNetworkDevicesChanged", null);
Cg([c.o], OQ.prototype, "OnConnectivityTestStateChanged", null);
