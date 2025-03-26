var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./44846.js");
var o = require(/*webcrack:missing*/ "./90095.js");
var l = require(/*webcrack:missing*/ "./52451.js");
var c = require("./51297.js");
var m = require("./60917.js");
import("../../actual_src/utils/localization.js");
var u = require("./96555.js");
var d = require("./34792.js");
var A = require(/*webcrack:missing*/ "./43691.js");
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
		(0, a.Gn)(this);
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
	const e = (0, o.q3)(() => Hn.Get().msgDiagnosticInfo);
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
	return (0, o.q3)(() => Hn.Get().msgLimits?.is_dynamic_vrs_available ?? false);
}
export function tv() {
	return (0, o.q3)(
		() => Hn.Get().msgSettingsPerApp?.is_variable_resolution_enabled ?? false,
	);
}
export function Cv(e = 100) {
	const t = (0, u.l5)();
	const r = (0, o.q3)(
		() => !Hn.Get().msgLimits?.disable_refresh_rate_management ?? true,
	);
	const n = (0, o.q3)(
		() =>
			(t
				? Hn.Get().msgSettingsPerApp?.fps_limit_external
				: Hn.Get().msgSettingsPerApp?.fps_limit) ?? 0,
	);
	const i = (0, o.q3)(
		() =>
			(t
				? Hn.Get().msgLimits?.fps_limit_options_external
				: Hn.Get().msgLimits?.fps_limit_options) ?? [],
	);
	const a = (0, l._g)(e);
	return [r, n, i, (e) => a(() => Hn.Get().SetFPSLimit(t, e))];
}
export function Jt() {
	return (0, o.q3)(() => Hn.Get().msgLimits?.is_nis_supported ?? false);
}
export function pB() {
	return [
		!(0, o.q3)(
			() =>
				Hn.Get().msgLimits?.is_split_scaling_and_filtering_supported ?? false,
		),
		(0, o.q3)(() => Hn.Get().msgSettingsPerApp?.scaling_filter ?? 4),
		Hn.Get().SetScalingFilter,
	];
}
export function mx(e = 100) {
	const t = (0, o.q3)(() => Hn.Get().msgSettingsPerApp?.fsr_sharpness ?? 0);
	const r = (0, o.q3)(() => Hn.Get().msgLimits?.fsr_sharpness_min ?? 0);
	const n = (0, o.q3)(() => Hn.Get().msgLimits?.fsr_sharpness_max ?? 8);
	const i = (0, l._g)(e);
	return [t, r, n, (e) => i(() => Hn.Get().SetFSRSharpness(e))];
}
export function fb(e = 100) {
	const t = (0, o.q3)(() => Hn.Get().msgSettingsPerApp?.nis_sharpness ?? 0);
	const r = (0, o.q3)(() => Hn.Get().msgLimits?.nis_sharpness_min ?? 0);
	const n = (0, o.q3)(() => Hn.Get().msgLimits?.nis_sharpness_max ?? 8);
	const i = (0, l._g)(e);
	return [t, r, n, (e) => i(() => Hn.Get().SetNISSharpness(e))];
}
export function LG() {
	const e = (0, o.q3)(
		() => Hn.Get().msgSettingsPerApp?.gpu_performance_level ?? 1,
	);
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
	const t = (0, o.q3)(
		() => Hn.Get().msgLimits?.gpu_performance_manual_min_mhz ?? 0,
	);
	const r = (0, o.q3)(
		() => Hn.Get().msgLimits?.gpu_performance_manual_max_mhz ?? 0,
	);
	const n = (0, o.q3)(
		() => Hn.Get().msgSettingsPerApp?.gpu_performance_manual_mhz ?? 0,
	);
	const i = (0, l._g)(e);
	return [n, t, r, (e) => i(() => Hn.Get().SetGPUPerformanceManualMhz(e))];
}
export function Sq() {
	return [
		(0, o.q3)(
			() => Hn.Get().msgSettingsPerApp?.is_low_latency_mode_enabled ?? false,
		),
		Hn.Get().SetLowLatencyModeEnabled,
	];
}
export function At() {
	return [
		(0, o.q3)(
			() =>
				Hn.Get().msgSettingsGlobal?.is_show_perf_overlay_over_steam_enabled ??
				false,
		),
		Hn.Get().SetShowPerfOverlayOverSteamEnabled,
	];
}
export function aS() {
	return [
		(0, o.q3)(() => Hn.Get().msgSettingsGlobal?.perf_overlay_level ?? 0),
		Hn.Get().SetPerfOverlayLevel,
	];
}
export function _4() {
	return [
		(0, o.q3)(
			() =>
				Hn.Get().msgSettingsGlobal?.allow_external_display_refresh_control ??
				false,
		),
		Hn.Get().SetAllowExternalDisplayRefreshControl,
	];
}
export function zn(e = 700) {
	const t = (0, u.l5)();
	const r = (function (e) {
		const t = (0, o.q3)(
			() =>
				Hn.Get().msgLimits?.is_manual_display_refresh_rate_available ?? false,
		);
		const r = (0, o.q3)(
			() =>
				Hn.Get().msgSettingsGlobal?.allow_external_display_refresh_control ??
				false,
		);
		const n = t && r;
		const i = (0, o.q3)(
			() => Hn.Get().msgLimits?.display_refresh_manual_hz_min ?? 40,
		);
		const a = (0, o.q3)(
			() => Hn.Get().msgLimits?.display_refresh_manual_hz_max ?? 60,
		);
		const s = (0, o.q3)(
			() => Hn.Get().msgSettingsPerApp?.display_refresh_manual_hz ?? 0,
		);
		const l = (0, o.q3)(
			() => Hn.Get().msgLimits?.display_external_refresh_manual_hz_min ?? 40,
		);
		const c = (0, o.q3)(
			() => Hn.Get().msgLimits?.display_external_refresh_manual_hz_max ?? 60,
		);
		const m = (0, o.q3)(
			() => Hn.Get().msgSettingsPerApp?.display_external_refresh_manual_hz ?? 0,
		);
		const u = (0, o.q3)(
			() => Hn.Get().msgLimits?.disable_refresh_rate_management ?? false,
		);
		return {
			bAvailable: e ? n : t && !u,
			nMinHz: e ? l : i,
			nMaxHz: e ? c : a,
			nCurrentHz: e ? m : s,
		};
	})(t);
	const [n, a] = i.useState(r.nCurrentHz);
	const s = i.useCallback(() => {
		if (r.nCurrentHz != n) {
			Hn.Get().SetDisplayRefreshRateManualHz(t, n);
		}
	}, [t, r, n]);
	const { fnStopTimer: c, fnRestartTimer: m } = (0, l.L$)(e, s, false);
	const d = i.useCallback(
		(e) => {
			m();
			a(e);
		},
		[m],
	);
	const A = i.useCallback(
		(e) => {
			c();
			a(e);
			Hn.Get().SetDisplayRefreshRateManualHz(t, e);
		},
		[t, c],
	);
	return [r, d, A];
}
export function uq() {
	return (0, d.VI)("overlay_fps_counter_high_contrast");
}
export function CP() {
	return (0, d.VI)("overlay_fps_counter_corner");
}
export function kS() {
	const e = (0, o.q3)(
		() => Hn.Get().msgLimits?.perf_overlay_is_standalone ?? false,
	);
	const t = (0, o.q3)(
		() => Hn.Get().msgSettingsGlobal?.perf_overlay_service_state ?? 0,
	);
	return [t != 0, t == 2, e];
}
export function CN() {
	const e = (0, o.q3)(
		() => Hn.Get().msgSettingsGlobal?.system_trace_service_state ?? 0,
	);
	return [e != 0, e == 2];
}
export function gU() {
	const e = (0, o.q3)(
		() => Hn.Get().msgSettingsGlobal?.graphics_profiling_service_state ?? 0,
	);
	return [e != 0, e == 2];
}
export function gc() {
	return (0, o.q3)(() => Hn.Get().msgState?.current_game_id ?? "");
}
export function Q3() {
	return (0, o.q3)(() => Hn.Get().msgState?.active_profile_game_id ?? "");
}
export function mM(e) {
	return e == `${s.qx}`;
}
export function M9() {
	return [gc() == Q3(), Hn.Get().SetGameSpecificProfileEnabled];
}
export function xu() {
	return [
		(0, o.q3)(
			() => Hn.Get().msgSettingsGlobal?.is_advanced_settings_enabled ?? false,
		),
		Hn.Get().SetAdvancedSettingsEnabled,
	];
}
export function g7() {
	return [
		(0, o.q3)(() => Hn.Get().msgLimits?.is_vrr_supported ?? false),
		(0, o.q3)(() => Hn.Get().msgSettingsPerApp?.is_vrr_enabled ?? false),
		Hn.Get().SetVRREnabled,
	];
}
export function Sj() {
	return [
		true,
		(0, o.q3)(
			() => Hn.Get().msgSettingsGlobal?.is_color_management_enabled ?? true,
		),
		Hn.Get().SetColorManagmentEnabled,
	];
}
export function vy() {
	return [
		(0, o.q3)(
			() =>
				Hn.Get().msgLimits?.is_dynamic_refresh_rate_in_steam_supported ?? false,
		),
		(0, o.q3)(
			() =>
				Hn.Get().msgSettingsPerApp?.use_dynamic_refresh_rate_in_steam ?? false,
		),
		Hn.Get().SetUseDynamicRefreshRateInSteam,
	];
}
export function bS() {
	return [
		(0, o.q3)(
			() =>
				Hn.Get().msgLimits?.is_split_scaling_and_filtering_supported ?? false,
		),
		(0, o.q3)(() => Hn.Get().msgSettingsPerApp?.split_scaling_filter ?? 0),
		Hn.Get().SetSplitScalingFilter,
	];
}
export function xm() {
	return [
		(0, o.q3)(
			() =>
				Hn.Get().msgLimits?.is_split_scaling_and_filtering_supported ?? false,
		),
		(0, o.q3)(() => Hn.Get().msgSettingsPerApp?.split_scaling_scaler ?? 0),
		Hn.Get().SetSplitScalingScaler,
	];
}
export function eE() {
	const [e, t] = pB();
	const [r, n] = bS();
	if (r) {
		return n;
	} else if (e) {
		return (function (e) {
			switch (e) {
				case 1:
					return 3;
				case 2:
					return 2;
				case 4:
					return 1;
				case 5:
					return 4;
				default:
					return null;
			}
		})(t);
	} else {
		return null;
	}
}
export function WI() {
	return [
		A.TS.IN_GAMESCOPE,
		(0, o.q3)(
			() => Hn.Get().msgSettingsGlobal?.is_hdr_debug_heatmap_enabled ?? false,
		),
		Hn.Get().SetHDRDebugHeatmapEnabled,
	];
}
export function nR() {
	return [
		A.TS.IN_GAMESCOPE,
		(0, o.q3)(() => Hn.Get().msgSettingsGlobal?.sdr_to_hdr_brightness ?? 1),
		Hn.Get().SetHDRSDRContentBrightness,
	];
}
(0, n.Cg)([a.sH], Hn.prototype, "m_msgDiagnosticInfo", undefined);
(0, n.Cg)([a.sH], Hn.prototype, "m_msgState", undefined);
(0, n.Cg)([a.XI.bound], Hn.prototype, "OnDiagnosticInfoChanged", null);
(0, n.Cg)([a.XI.bound], Hn.prototype, "OnStateChanged", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetDiagnosticUpdateRate", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetSystemTracingEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetGraphicsProfilingEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetPerfOverlayEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetPerfOverlayLevel", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetShowPerfOverlayOverSteamEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetGPUPerformanceLevel", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetGPUPerformanceManualMhz", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetFPSLimitEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetFPSLimit", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetVariableResolutionEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetDynamicRefreshRateEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetCPUGovernor", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetCPUGovernorManualMhz", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetScalingFilter", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetFSRSharpness", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetNISSharpness", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetLowLatencyModeEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetDisplayRefreshRateManualHz", null);
(0, n.Cg)([l.oI], Hn.prototype, "SaveGameProfile", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetGameSpecificProfileEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetAdvancedSettingsEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "ResetCurrentPerfProfileSettings", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetAllowExternalDisplayRefreshControl", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetColorManagmentEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetVRREnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetUseDynamicRefreshRateInSteam", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetSplitScalingFilter", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetSplitScalingScaler", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetHDROnSDRTonemapOperator", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetHDRDebugHeatmapEnabled", null);
(0, n.Cg)([l.oI], Hn.prototype, "SetHDRSDRContentBrightness", null);
