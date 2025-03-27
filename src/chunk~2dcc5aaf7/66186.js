import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { Gn } from "./89193.js";
import s from "./44846.js";
import { q3 } from "./90095.js";
import l, { _g, L$ } from "./52451.js";
import c from "./51297.js";
import m from "./60917.js";
import u, { l5 } from "./96555.js";
import d, { VI } from "./34792.js";
import A from "./43691.js";
import("../../actual_src/utils/localization.js");
export class Hn {
	static s_Singleton = null;
	static Get() {
		if (Hn.s_Singleton == null) {
			Hn.s_Singleton = new Hn();
			window.SystemPerfStore = Hn.s_Singleton;
		}
		return Hn.s_Singleton;
	}
	m_msgDiagnosticInfo = {};
	m_msgState = {};
	get msgDiagnosticInfo() {
		return this.m_msgDiagnosticInfo;
	}
	get msgState() {
		return this.m_msgState;
	}
	get msgLimits() {
		return this.m_msgState?.limits;
	}
	get msgSettingsGlobal() {
		return this.m_msgState?.settings?.global;
	}
	get msgSettingsPerApp() {
		return this.m_msgState?.settings?.per_app;
	}
	get nCurrentGameID() {
		return this.msgState.current_game_id;
	}
	get nActiveProfileGameID() {
		return this.msgState.active_profile_game_id;
	}
	get nBatteryTemperatureC() {
		return this.msgDiagnosticInfo?.battery_temp_c;
	}
	constructor() {
		Gn(this);
		SteamClient.System.Perf?.RegisterForDiagnosticInfoChanges(
			this.OnDiagnosticInfoChanged,
		);
		SteamClient.System.Perf?.RegisterForStateChanges(this.OnStateChanged);
	}
	OnDiagnosticInfoChanged(e) {
		const t = c.bm.deserializeBinary(e).toObject();
		Object.keys(t).forEach((e) => (this.m_msgDiagnosticInfo[e] = t[e]));
		if (this.nBatteryTemperatureC !== undefined) {
			m.Tu.OnBatteryTemperatureChange(this.nBatteryTemperatureC);
		}
	}
	OnStateChanged(e) {
		const t = c.cI.deserializeBinary(e).toObject();
		Object.keys(t).forEach((e) => (this.m_msgState[e] = t[e]));
	}
	CreateSettingsUpdateRequest(e = null) {
		if (e == null) {
			e = this.nActiveProfileGameID;
		}
		let t = new c.TR();
		t.set_gameid(e.toString());
		return t;
	}
	SetDiagnosticUpdateRate(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().global(true).set_diagnostic_update_rate(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetSystemTracingEnabled(e) {
		const t = e ? 2 : 1;
		let r = this.CreateSettingsUpdateRequest();
		r.settings_delta().global(true).set_system_trace_service_state(t);
		SteamClient.System.Perf?.UpdateSettings(r.serializeBase64String());
	}
	SetGraphicsProfilingEnabled(e) {
		const t = e ? 2 : 1;
		let r = this.CreateSettingsUpdateRequest();
		r.settings_delta().global(true).set_graphics_profiling_service_state(t);
		SteamClient.System.Perf?.UpdateSettings(r.serializeBase64String());
	}
	SetPerfOverlayEnabled(e) {
		const t = e ? 2 : 1;
		let r = this.CreateSettingsUpdateRequest();
		r.settings_delta().global(true).set_perf_overlay_service_state(t);
		SteamClient.System.Perf?.UpdateSettings(r.serializeBase64String());
	}
	SetPerfOverlayLevel(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().global(true).set_perf_overlay_level(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetShowPerfOverlayOverSteamEnabled(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta()
			.global(true)
			.set_is_show_perf_overlay_over_steam_enabled(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetGPUPerformanceLevel(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_gpu_performance_level(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetGPUPerformanceManualMhz(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_gpu_performance_manual_mhz(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetFPSLimitEnabled(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_is_fps_limit_enabled(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetFPSLimit(e, t) {
		let r = this.CreateSettingsUpdateRequest();
		if (e) {
			r.settings_delta().per_app(true).set_fps_limit_external(Math.round(t));
		} else {
			r.settings_delta().per_app(true).set_fps_limit(Math.round(t));
		}
		SteamClient.System.Perf?.UpdateSettings(r.serializeBase64String());
	}
	SetVariableResolutionEnabled(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_is_variable_resolution_enabled(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetDynamicRefreshRateEnabled(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_is_dynamic_refresh_rate_enabled(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetCPUGovernor(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_cpu_governor(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetCPUGovernorManualMhz(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_cpu_governor_manual_mhz(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetScalingFilter(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_scaling_filter(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetFSRSharpness(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_fsr_sharpness(Math.round(e));
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetNISSharpness(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_nis_sharpness(Math.round(e));
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetLowLatencyModeEnabled(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_is_low_latency_mode_enabled(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetDisplayRefreshRateManualHz(e, t) {
		let r = this.CreateSettingsUpdateRequest();
		if (e) {
			r.settings_delta()
				.per_app(true)
				.set_display_external_refresh_manual_hz(t);
		} else {
			r.settings_delta().per_app(true).set_display_refresh_manual_hz(t);
		}
		SteamClient.System.Perf?.UpdateSettings(r.serializeBase64String());
	}
	SaveGameProfile() {
		const e = c.SW.fromObject(this.msgState.settings);
		let t = this.CreateSettingsUpdateRequest(this.nCurrentGameID);
		t.set_settings_delta(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetGameSpecificProfileEnabled(e) {
		let t = this.CreateSettingsUpdateRequest(this.nCurrentGameID);
		t.settings_delta().per_app(true).set_is_game_perf_profile_enabled(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetAdvancedSettingsEnabled(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().global(true).set_is_advanced_settings_enabled(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	ResetCurrentPerfProfileSettings() {
		let e = this.CreateSettingsUpdateRequest();
		e.set_reset_to_default(true);
		SteamClient.System.Perf?.UpdateSettings(e.serializeBase64String());
	}
	SetAllowExternalDisplayRefreshControl(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta()
			.global(true)
			.set_allow_external_display_refresh_control(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetColorManagmentEnabled(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().global(true).set_is_color_management_enabled(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetVRREnabled(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_is_vrr_enabled(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetUseDynamicRefreshRateInSteam(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_use_dynamic_refresh_rate_in_steam(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetSplitScalingFilter(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_split_scaling_filter(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetSplitScalingScaler(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().per_app(true).set_split_scaling_scaler(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetHDROnSDRTonemapOperator(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().global(true).set_hdr_on_sdr_tonemap_operator(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetHDRDebugHeatmapEnabled(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().global(true).set_is_hdr_debug_heatmap_enabled(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
	SetHDRSDRContentBrightness(e) {
		let t = this.CreateSettingsUpdateRequest();
		t.settings_delta().global(true).set_sdr_to_hdr_brightness(e);
		SteamClient.System.Perf?.UpdateSettings(t.serializeBase64String());
	}
}
export function C9() {
	const e = q3(() => Hn.Get().msgDiagnosticInfo);
	let t = 0;
	let r = 0;
	for (const n of e.interfaces ?? []) {
		t += n.rx_bytes_per_sec ?? 0;
		r += n.tx_bytes_per_sec ?? 0;
	}
	return [t, r];
}
export function N$() {
	const [e, t] = Cv();
	return t != 0;
}
export function pq() {
	return q3(() => Hn.Get().msgLimits?.is_dynamic_vrs_available ?? false);
}
export function tv() {
	return q3(
		() => Hn.Get().msgSettingsPerApp?.is_variable_resolution_enabled ?? false,
	);
}
export function Cv(e = 100) {
	const t = l5();
	const r = q3(
		() => !Hn.Get().msgLimits?.disable_refresh_rate_management ?? true,
	);
	const n = q3(
		() =>
			(t
				? Hn.Get().msgSettingsPerApp?.fps_limit_external
				: Hn.Get().msgSettingsPerApp?.fps_limit) ?? 0,
	);
	const i = q3(
		() =>
			(t
				? Hn.Get().msgLimits?.fps_limit_options_external
				: Hn.Get().msgLimits?.fps_limit_options) ?? [],
	);
	const a = _g(e);
	return [r, n, i, (e) => a(() => Hn.Get().SetFPSLimit(t, e))];
}
export function Jt() {
	return q3(() => Hn.Get().msgLimits?.is_nis_supported ?? false);
}
export function pB() {
	return [
		!q3(
			() =>
				Hn.Get().msgLimits?.is_split_scaling_and_filtering_supported ?? false,
		),
		q3(() => Hn.Get().msgSettingsPerApp?.scaling_filter ?? 4),
		Hn.Get().SetScalingFilter,
	];
}
export function mx(e = 100) {
	const t = q3(() => Hn.Get().msgSettingsPerApp?.fsr_sharpness ?? 0);
	const r = q3(() => Hn.Get().msgLimits?.fsr_sharpness_min ?? 0);
	const n = q3(() => Hn.Get().msgLimits?.fsr_sharpness_max ?? 8);
	const i = _g(e);
	return [t, r, n, (e) => i(() => Hn.Get().SetFSRSharpness(e))];
}
export function fb(e = 100) {
	const t = q3(() => Hn.Get().msgSettingsPerApp?.nis_sharpness ?? 0);
	const r = q3(() => Hn.Get().msgLimits?.nis_sharpness_min ?? 0);
	const n = q3(() => Hn.Get().msgLimits?.nis_sharpness_max ?? 8);
	const i = _g(e);
	return [t, r, n, (e) => i(() => Hn.Get().SetNISSharpness(e))];
}
export function LG() {
	const e = q3(() => Hn.Get().msgSettingsPerApp?.gpu_performance_level ?? 1);
	return [
		e == 2,
		e == 5,
		i.useCallback((e) => {
			const t = e ? 2 : 1;
			Hn.Get().SetGPUPerformanceLevel(t);
		}, []),
	];
}
export function Pc(e = 100) {
	const t = q3(() => Hn.Get().msgLimits?.gpu_performance_manual_min_mhz ?? 0);
	const r = q3(() => Hn.Get().msgLimits?.gpu_performance_manual_max_mhz ?? 0);
	const n = q3(
		() => Hn.Get().msgSettingsPerApp?.gpu_performance_manual_mhz ?? 0,
	);
	const i = _g(e);
	return [n, t, r, (e) => i(() => Hn.Get().SetGPUPerformanceManualMhz(e))];
}
export function Sq() {
	return [
		q3(() => Hn.Get().msgSettingsPerApp?.is_low_latency_mode_enabled ?? false),
		Hn.Get().SetLowLatencyModeEnabled,
	];
}
export function At() {
	return [
		q3(
			() =>
				Hn.Get().msgSettingsGlobal?.is_show_perf_overlay_over_steam_enabled ??
				false,
		),
		Hn.Get().SetShowPerfOverlayOverSteamEnabled,
	];
}
export function aS() {
	return [
		q3(() => Hn.Get().msgSettingsGlobal?.perf_overlay_level ?? 0),
		Hn.Get().SetPerfOverlayLevel,
	];
}
export function _4() {
	return [
		q3(
			() =>
				Hn.Get().msgSettingsGlobal?.allow_external_display_refresh_control ??
				false,
		),
		Hn.Get().SetAllowExternalDisplayRefreshControl,
	];
}
export function zn(e = 700) {
	const t = l5();
	const r = ((e) => {
		const t = q3(
			() =>
				Hn.Get().msgLimits?.is_manual_display_refresh_rate_available ?? false,
		);
		const r = q3(
			() =>
				Hn.Get().msgSettingsGlobal?.allow_external_display_refresh_control ??
				false,
		);
		const n = t && r;
		const i = q3(() => Hn.Get().msgLimits?.display_refresh_manual_hz_min ?? 40);
		const a = q3(() => Hn.Get().msgLimits?.display_refresh_manual_hz_max ?? 60);
		const s = q3(
			() => Hn.Get().msgSettingsPerApp?.display_refresh_manual_hz ?? 0,
		);
		const l = q3(
			() => Hn.Get().msgLimits?.display_external_refresh_manual_hz_min ?? 40,
		);
		const c = q3(
			() => Hn.Get().msgLimits?.display_external_refresh_manual_hz_max ?? 60,
		);
		const m = q3(
			() => Hn.Get().msgSettingsPerApp?.display_external_refresh_manual_hz ?? 0,
		);
		const u = q3(
			() => Hn.Get().msgLimits?.disable_refresh_rate_management ?? false,
		);
		return {
			bAvailable: e ? n : t && !u,
			nMinHz: e ? l : i,
			nMaxHz: e ? c : a,
			nCurrentHz: e ? m : s,
		};
	})(t);
	const [n, setN] = i.useState(r.nCurrentHz);
	const s = i.useCallback(() => {
		if (r.nCurrentHz != n) {
			Hn.Get().SetDisplayRefreshRateManualHz(t, n);
		}
	}, [t, r, n]);
	const { fnStopTimer, fnRestartTimer } = L$(e, s, false);
	const d = i.useCallback(
		(e) => {
			fnRestartTimer();
			setN(e);
		},
		[fnRestartTimer],
	);
	const A = i.useCallback(
		(e) => {
			fnStopTimer();
			setN(e);
			Hn.Get().SetDisplayRefreshRateManualHz(t, e);
		},
		[t, fnStopTimer],
	);
	return [r, d, A];
}
export function uq() {
	return VI("overlay_fps_counter_high_contrast");
}
export function CP() {
	return VI("overlay_fps_counter_corner");
}
export function kS() {
	const e = q3(() => Hn.Get().msgLimits?.perf_overlay_is_standalone ?? false);
	const t = q3(
		() => Hn.Get().msgSettingsGlobal?.perf_overlay_service_state ?? 0,
	);
	return [t != 0, t == 2, e];
}
export function CN() {
	const e = q3(
		() => Hn.Get().msgSettingsGlobal?.system_trace_service_state ?? 0,
	);
	return [e != 0, e == 2];
}
export function gU() {
	const e = q3(
		() => Hn.Get().msgSettingsGlobal?.graphics_profiling_service_state ?? 0,
	);
	return [e != 0, e == 2];
}
export function gc() {
	return q3(() => Hn.Get().msgState?.current_game_id ?? "");
}
export function Q3() {
	return q3(() => Hn.Get().msgState?.active_profile_game_id ?? "");
}
export function mM(e) {
	return e == `${s.qx}`;
}
export function M9() {
	return [gc() == Q3(), Hn.Get().SetGameSpecificProfileEnabled];
}
export function xu() {
	return [
		q3(() => Hn.Get().msgSettingsGlobal?.is_advanced_settings_enabled ?? false),
		Hn.Get().SetAdvancedSettingsEnabled,
	];
}
export function g7() {
	return [
		q3(() => Hn.Get().msgLimits?.is_vrr_supported ?? false),
		q3(() => Hn.Get().msgSettingsPerApp?.is_vrr_enabled ?? false),
		Hn.Get().SetVRREnabled,
	];
}
export function Sj() {
	return [
		true,
		q3(() => Hn.Get().msgSettingsGlobal?.is_color_management_enabled ?? true),
		Hn.Get().SetColorManagmentEnabled,
	];
}
export function vy() {
	return [
		q3(
			() =>
				Hn.Get().msgLimits?.is_dynamic_refresh_rate_in_steam_supported ?? false,
		),
		q3(
			() =>
				Hn.Get().msgSettingsPerApp?.use_dynamic_refresh_rate_in_steam ?? false,
		),
		Hn.Get().SetUseDynamicRefreshRateInSteam,
	];
}
export function bS() {
	return [
		q3(
			() =>
				Hn.Get().msgLimits?.is_split_scaling_and_filtering_supported ?? false,
		),
		q3(() => Hn.Get().msgSettingsPerApp?.split_scaling_filter ?? 0),
		Hn.Get().SetSplitScalingFilter,
	];
}
export function xm() {
	return [
		q3(
			() =>
				Hn.Get().msgLimits?.is_split_scaling_and_filtering_supported ?? false,
		),
		q3(() => Hn.Get().msgSettingsPerApp?.split_scaling_scaler ?? 0),
		Hn.Get().SetSplitScalingScaler,
	];
}
export function eE() {
	const [e, t] = pB();
	const [r, n] = bS();
	if (r) {
		return n;
	} else if (e) {
		return ((e) => {
			switch (e) {
				case 1: {
					return 3;
				}
				case 2: {
					return 2;
				}
				case 4: {
					return 1;
				}
				case 5: {
					return 4;
				}
				default: {
					return null;
				}
			}
		})(t);
	} else {
		return null;
	}
}
export function WI() {
	return [
		A.TS.IN_GAMESCOPE,
		q3(() => Hn.Get().msgSettingsGlobal?.is_hdr_debug_heatmap_enabled ?? false),
		Hn.Get().SetHDRDebugHeatmapEnabled,
	];
}
export function nR() {
	return [
		A.TS.IN_GAMESCOPE,
		q3(() => Hn.Get().msgSettingsGlobal?.sdr_to_hdr_brightness ?? 1),
		Hn.Get().SetHDRSDRContentBrightness,
	];
}
Cg([a.sH], Hn.prototype, "m_msgDiagnosticInfo", undefined);
Cg([a.sH], Hn.prototype, "m_msgState", undefined);
Cg([a.XI.bound], Hn.prototype, "OnDiagnosticInfoChanged", null);
Cg([a.XI.bound], Hn.prototype, "OnStateChanged", null);
Cg([l.oI], Hn.prototype, "SetDiagnosticUpdateRate", null);
Cg([l.oI], Hn.prototype, "SetSystemTracingEnabled", null);
Cg([l.oI], Hn.prototype, "SetGraphicsProfilingEnabled", null);
Cg([l.oI], Hn.prototype, "SetPerfOverlayEnabled", null);
Cg([l.oI], Hn.prototype, "SetPerfOverlayLevel", null);
Cg([l.oI], Hn.prototype, "SetShowPerfOverlayOverSteamEnabled", null);
Cg([l.oI], Hn.prototype, "SetGPUPerformanceLevel", null);
Cg([l.oI], Hn.prototype, "SetGPUPerformanceManualMhz", null);
Cg([l.oI], Hn.prototype, "SetFPSLimitEnabled", null);
Cg([l.oI], Hn.prototype, "SetFPSLimit", null);
Cg([l.oI], Hn.prototype, "SetVariableResolutionEnabled", null);
Cg([l.oI], Hn.prototype, "SetDynamicRefreshRateEnabled", null);
Cg([l.oI], Hn.prototype, "SetCPUGovernor", null);
Cg([l.oI], Hn.prototype, "SetCPUGovernorManualMhz", null);
Cg([l.oI], Hn.prototype, "SetScalingFilter", null);
Cg([l.oI], Hn.prototype, "SetFSRSharpness", null);
Cg([l.oI], Hn.prototype, "SetNISSharpness", null);
Cg([l.oI], Hn.prototype, "SetLowLatencyModeEnabled", null);
Cg([l.oI], Hn.prototype, "SetDisplayRefreshRateManualHz", null);
Cg([l.oI], Hn.prototype, "SaveGameProfile", null);
Cg([l.oI], Hn.prototype, "SetGameSpecificProfileEnabled", null);
Cg([l.oI], Hn.prototype, "SetAdvancedSettingsEnabled", null);
Cg([l.oI], Hn.prototype, "ResetCurrentPerfProfileSettings", null);
Cg([l.oI], Hn.prototype, "SetAllowExternalDisplayRefreshControl", null);
Cg([l.oI], Hn.prototype, "SetColorManagmentEnabled", null);
Cg([l.oI], Hn.prototype, "SetVRREnabled", null);
Cg([l.oI], Hn.prototype, "SetUseDynamicRefreshRateInSteam", null);
Cg([l.oI], Hn.prototype, "SetSplitScalingFilter", null);
Cg([l.oI], Hn.prototype, "SetSplitScalingScaler", null);
Cg([l.oI], Hn.prototype, "SetHDROnSDRTonemapOperator", null);
Cg([l.oI], Hn.prototype, "SetHDRDebugHeatmapEnabled", null);
Cg([l.oI], Hn.prototype, "SetHDRSDRContentBrightness", null);
