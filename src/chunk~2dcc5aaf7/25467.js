var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./52451.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./60517.js");
var o = require("./22091.js");
var l = require(/*webcrack:missing*/ "./75144.js");
var c = require(/*webcrack:missing*/ "./61416.js");
var m = require(/*webcrack:missing*/ "./89193.js");
var u = require(/*webcrack:missing*/ "./90095.js");
function d(e) {
	return ["BluetoothManagerService", "State", "Device", e];
}
class A {
	m_bForceShowAllDevices = false;
	m_nDiscoveryRequestCount = 0;
	constructor() {
		(0, m.Gn)(this);
	}
	async Init() {
		s.RF.RegisterForNotifyStateChanged(this.OnStateChanged);
	}
	OnStateChanged(e) {
		l.L.invalidateQueries({
			queryKey: ["BluetoothManagerService", "State"],
		});
		return 1;
	}
	RequestDiscovery() {
		if (this.m_nDiscoveryRequestCount == 0) {
			s.RF.SetDiscovering({
				enabled: true,
			});
		}
		this.m_nDiscoveryRequestCount++;
		return () => {
			this.m_nDiscoveryRequestCount--;
			if (this.m_nDiscoveryRequestCount == 0) {
				s.RF.SetDiscovering({
					enabled: false,
				});
			}
		};
	}
}
(0, n.Cg)([m.sH], A.prototype, "m_bForceShowAllDevices", undefined);
(0, n.Cg)([i.oI], A.prototype, "OnStateChanged", null);
export const Y4 = new A();
function g(e) {
	const t = a.useCallback(async () => {
		const e = await s.RF.GetState({});
		if (!e.BSuccess()) {
			throw new Error("Failed to fetch bluetooth state");
		}
		return e.Body().toObject();
	}, []);
	return (0, c.I)({
		queryKey: ["BluetoothManagerService", "State"],
		queryFn: t,
		staleTime: Infinity,
		select: e,
	});
}
export function Iz() {
	return g((e) => e.is_service_available)?.data ?? false;
}
export function Pi() {
	return g((e) => e.is_enabled)?.data ?? false;
}
export function d$() {
	return [
		g((e) => e.is_discovering)?.data ?? false,
		(e) =>
			s.RF.SetDiscovering({
				enabled: e,
			}),
	];
}
export function cS(e, t) {
	const r = a.useCallback(async () => {
		const t = await s.RF.GetDeviceDetails({
			id: e,
		});
		if (!t.BSuccess()) {
			throw new Error("Failed to fetch bluetooth device details");
		}
		return t.Body().toObject().device;
	}, [e]);
	const n = (0, c.I)({
		queryKey: d(e),
		queryFn: r,
		staleTime: Infinity,
		select: t,
	});
	if (n.isSuccess) {
		return n.data;
	} else {
		return null;
	}
}
function b(e) {
	return e.is_paired || e.is_connected;
}
export function KO(e = false) {
	return (
		g((t) => {
			const r = (t.devices ?? []).filter((t) =>
				(function (e, t) {
					return (
						!!t ||
						(!e.should_hide_hint &&
							!!(function (e) {
								switch (e) {
									case 4:
									case 5:
									case 6:
									case 7:
									case 8:
									case 9:
									case 10:
									case 11:
										return true;
									default:
										return false;
								}
							})(e.etype))
					);
				})(t, e),
			);
			r.sort((e, t) =>
				(function (e, t) {
					if (e.is_connected != t.is_connected) {
						if (e.is_connected) {
							return -1;
						} else {
							return 1;
						}
					} else {
						return t.strength_raw - e.strength_raw;
					}
				})(e, t),
			);
			return {
				rPairedDevices: r.filter((e) => b(e)),
				rAvailableDevices: r.filter((e) => !b(e)),
			};
		})?.data ?? {
			rPairedDevices: [],
			rAvailableDevices: [],
		}
	);
}
export function ws(e) {
	const t = (0, o.kS)(e?.mac ?? "");
	if (e?.battery_percent != null) {
		return e.battery_percent;
	} else {
		return t?.ucBatteryLevel;
	}
}
export function Fi(e) {
	if (e) {
		if (e.name && e.name.length !== 0) {
			return e.name;
		} else {
			return e.mac;
		}
	} else {
		return null;
	}
}
export function cg() {
	return [
		(0, u.q3)(() => Y4.m_bForceShowAllDevices),
		(e) => (Y4.m_bForceShowAllDevices = e),
	];
}
export function sr() {
	(0, a.useEffect)(() => Y4.RequestDiscovery(), []);
}
