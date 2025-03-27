import n, { Cg } from "./34629.js";
import i from "./52451.js";
import a, { useEffect } from "./63696.js";
import s from "./60517.js";
import { kS } from "./22091.js";
import l from "./75144.js";
import { I } from "./61416.js";
import m, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
function d(e) {
	return ["BluetoothManagerService", "State", "Device", e];
}
class A {
	m_bForceShowAllDevices = false;
	m_nDiscoveryRequestCount = 0;
	constructor() {
		Gn(this);
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
Cg([m.sH], A.prototype, "m_bForceShowAllDevices", undefined);
Cg([i.oI], A.prototype, "OnStateChanged", null);
export const Y4 = new A();
function g(e) {
	const t = a.useCallback(async () => {
		const e = await s.RF.GetState({});
		if (!e.BSuccess()) {
			throw new Error("Failed to fetch bluetooth state");
		}
		return e.Body().toObject();
	}, []);
	return I({
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
	const n = I({
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
				((e, t) =>
					!!t ||
					(!e.should_hide_hint &&
						!!((e) => {
							switch (e) {
								case 4:
								case 5:
								case 6:
								case 7:
								case 8:
								case 9:
								case 10:
								case 11: {
									return true;
								}
								default: {
									return false;
								}
							}
						})(e.etype)))(t, e),
			);
			r.sort((e, t) =>
				((e, t) => {
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
	const t = kS(e?.mac ?? "");
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
		q3(() => Y4.m_bForceShowAllDevices),
		(e) => (Y4.m_bForceShowAllDevices = e),
	];
}
export function sr() {
	useEffect(() => Y4.RequestDiscovery(), []);
}
