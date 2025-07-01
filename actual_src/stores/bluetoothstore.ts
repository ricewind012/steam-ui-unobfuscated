// Webpack module ID: 25467

import { useCallback, useEffect } from "react";
import { RF as some_transport_shit_maybe } from "../../src/chunk~2dcc5aaf7/60517.js";
import { kS } from "../../src/chunk~2dcc5aaf7/22091.js";
import { L } from "../../src/library/75144.js";
import { useQuery } from "@tanstack/react-query";
import { makeAutoObservable, observable } from "mobx";
import { bind } from "../utils/bind.js";
import { useObserver } from "mobx-react-lite";

function query_key_for_something(e: string) {
	return ["BluetoothManagerService", "State", "Device", e];
}

class CBluetoothStore {
	@observable m_bForceShowAllDevices = false;
	m_nDiscoveryRequestCount = 0;

	constructor() {
		makeAutoObservable(this);
	}

	async Init() {
		some_transport_shit_maybe.RegisterForNotifyStateChanged(
			this.OnStateChanged,
		);
	}

	@bind OnStateChanged(e) {
		L.invalidateQueries({
			queryKey: ["BluetoothManagerService", "State"],
		});
		return 1;
	}

	RequestDiscovery() {
		if (this.m_nDiscoveryRequestCount == 0) {
			some_transport_shit_maybe.SetDiscovering({
				enabled: true,
			});
		}
		this.m_nDiscoveryRequestCount++;
		return () => {
			this.m_nDiscoveryRequestCount--;
			if (this.m_nDiscoveryRequestCount == 0) {
				some_transport_shit_maybe.SetDiscovering({
					enabled: false,
				});
			}
		};
	}
}
export const Y4 = new CBluetoothStore();

function g(select) {
	const queryFn = useCallback(async () => {
		const msg = await some_transport_shit_maybe.GetState({});
		if (!msg.BSuccess()) {
			throw new Error("Failed to fetch bluetooth state");
		}
		return msg.Body().toObject();
	}, []);
	return useQuery({
		queryKey: ["BluetoothManagerService", "State"],
		queryFn,
		staleTime: Infinity,
		select,
	});
}

export function Iz() {
	return g((device) => device.is_service_available)?.data ?? false;
}

export function Pi() {
	return g((device) => device.is_enabled)?.data ?? false;
}

export function d$() {
	return [
		g((device) => device.is_discovering)?.data ?? false,
		(enabled) =>
			some_transport_shit_maybe.SetDiscovering({
				enabled,
			}),
	];
}

export function cS(id: string, select) {
	const queryFn = useCallback(async () => {
		const msg = await some_transport_shit_maybe.GetDeviceDetails({
			id,
		});
		if (!msg.BSuccess()) {
			throw new Error("Failed to fetch bluetooth device details");
		}
		return msg.Body().toObject().device;
	}, [id]);
	const query = useQuery({
		queryKey: query_key_for_something(id),
		queryFn,
		staleTime: Infinity,
		select,
	});
	if (query.isSuccess) {
		return query.data;
	} else {
		return null;
	}
}

function BIsDevicePairedOrConnected(device) {
	return device.is_paired || device.is_connected;
}

export function KO(e = false) {
	return (
		g((t) => {
			const vecDevices = (t.devices ?? []).filter((t) =>
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
			vecDevices.sort((e, t) =>
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
				rPairedDevices: vecDevices.filter((e) => BIsDevicePairedOrConnected(e)),
				rAvailableDevices: vecDevices.filter(
					(e) => !BIsDevicePairedOrConnected(e),
				),
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
		useObserver(() => Y4.m_bForceShowAllDevices),
		(bForceShowAllDevices: boolean) =>
			(Y4.m_bForceShowAllDevices = bForceShowAllDevices),
	];
}

export function sr() {
	useEffect(() => Y4.RequestDiscovery(), []);
}
