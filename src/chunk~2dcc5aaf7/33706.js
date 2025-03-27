import { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./52451.js";
import { I as I_1 } from "./61416.js";
import o from "./75144.js";
import l from "./90389.js";
import { VI } from "./34792.js";
const m = "SteamOSService";
const u = "State";
function d() {
	return [m, u, "Manager"];
}
function A() {
	return [m, u, "Telemetry"];
}
class p {
	async Init() {
		l.Bd.RegisterForNotifyStateChanged(this.OnStateChanged);
		l.GV.RegisterForNotifyStateChanged(this.OnTelemetryStateChanged);
	}
	OnStateChanged(e) {
		o.L.invalidateQueries({
			queryKey: d(),
		});
		return 1;
	}
	OnTelemetryStateChanged(e) {
		o.L.invalidateQueries({
			queryKey: A(),
		});
		return 1;
	}
}
function g(e) {
	const t = i.useCallback(async () => {
		const e = await l.Bd.GetState({});
		if (!e.BSuccess()) {
			throw new Error("Failed to fetch steamos manager state");
		}
		return e.Body().toObject().state;
	}, []);
	return I_1({
		queryKey: d(),
		queryFn: t,
		staleTime: Infinity,
		select: e,
	});
}
export function PU() {
	const e = g((e) => e.is_mandatory_update_available ?? false);
	return e.isSuccess && e.data;
}
export function bP() {
	const e = g((e) => e.is_status_led_control_available ?? false);
	return e.isSuccess && e.data;
}
export function CU() {
	return g((e) => e.startup_movie_variant ?? 1);
}
export function KL() {
	const e = g((e) => e.factory_reset_state);
	if (e.isSuccess) {
		return e.data;
	} else {
		return null;
	}
}
export function Vu() {
	const e = g((e) => e.is_tdp_limit_available ?? false);
	return e.isSuccess && e.data;
}
export function lm() {
	const e = Vu();
	const [t] = VI("steamos_tdp_limit_enabled");
	const r = g((r) => ({
		visible: t && e,
		min: r.tdp_limit_min,
		max: r.tdp_limit_max,
	}));
	if (r.isSuccess) {
		return r.data;
	} else {
		return {
			visible: false,
		};
	}
}
export function HG() {
	const e = g((e) => e.is_cec_available ?? false);
	return e.isSuccess && e.data;
}
export function Ge() {
	const e = g((e) => e.is_wifi_debug_supported ?? false);
	return e.isSuccess && e.data;
}
export function pi() {
	const e = g((e) => e.is_wifi_force_wpa_supplicant_supported ?? false);
	return e.isSuccess && e.data;
}
export function cL() {
	const e = g((e) => e.is_wifi_debug_force_disabled ?? false);
	return e.isSuccess && e.data;
}
function I(e) {
	const t = i.useCallback(async () => {
		const e = await l.GV.GetState({});
		if (!e.BSuccess()) {
			throw new Error("Failed to fetch steamos telemetry state");
		}
		return e.Body().toObject().state;
	}, []);
	return I_1({
		queryKey: A(),
		queryFn: t,
		staleTime: Infinity,
		select: e,
	});
}
export function bv() {
	const e = I((e) => e.is_available);
	return e.isSuccess && e.data;
}
export function AJ() {
	const e = I((e) => ({
		bAvailable: e.is_available,
		bEnabled: e.is_enabled,
	}));
	if (e.isSuccess) {
		return {
			bAvailable: e.data?.bAvailable ?? false,
			bEnabled: e.data?.bEnabled ?? false,
			setEnabled: (e) =>
				l.GV.SetEnabled({
					enabled: e,
				}),
		};
	} else {
		return {
			bAvailable: false,
		};
	}
}
export function BN(e) {
	const t = ((e) => {
		const t = I((t) => t.plugins?.find((t) => t.etype == e));
		return t.isSuccess && t.data;
	})(e);
	const r = i.useCallback(
		(t) => {
			l.GV.SetPluginEnabled({
				etype: e,
				enabled: t,
			});
		},
		[e],
	);
	return {
		bAvailable: t?.is_available ?? false,
		bEnabled: t?.is_enabled ?? false,
		setEnabled: r,
	};
}
Cg([a.oI], p.prototype, "OnStateChanged", null);
Cg([a.oI], p.prototype, "OnTelemetryStateChanged", null);
export const qF = new p();
