import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { gc, _g } from "./52451.js";
import s, { Jc } from "./79769.js";
import o from "./51297.js";
import l, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import "./72476.js";
export class mG {
	static s_Singleton = null;
	static Get() {
		if (mG.s_Singleton == null) {
			mG.s_Singleton = new mG();
			window.SystemStoragStore = mG.s_Singleton;
		}
		return mG.s_Singleton;
	}
	m_msgSettings = {};
	m_nIdleSuspendSupressRefCount = 0;
	m_bAirplaneMode = Jc(false);
	m_flDisplayBrightness = Jc(1);
	m_bNightModeAdvancedView = Jc(false);
	get msgSettings() {
		return this.m_msgSettings;
	}
	constructor() {
		Gn(this);
		if (SteamClient.System) {
			SteamClient.System.RegisterForSettingsChanges(this.OnSettingsChanged);
			SteamClient.System.RegisterForAirplaneModeChanges(
				this.OnAirplaneModeChanged,
			);
			SteamClient.System.Display.RegisterForBrightnessChanges(
				this.OnDisplayBrightnessChanged,
			);
		}
	}
	OnSettingsChanged(e) {
		const t = o.sH.deserializeBinary(e).toObject();
		Object.keys(t).forEach((e) => (this.m_msgSettings[e] = t[e]));
	}
	OnAirplaneModeChanged(e) {
		this.m_bAirplaneMode.Set(e.bEnabled);
	}
	OnDisplayBrightnessChanged(e) {
		this.m_flDisplayBrightness.Set(e.flBrightness);
	}
	get DisplayBrightness() {
		return this.m_flDisplayBrightness;
	}
	get AirplaneModeEnabled() {
		return this.m_bAirplaneMode;
	}
	get NightModeAdvancedView() {
		return this.m_bNightModeAdvancedView;
	}
	SetAirplaneMode(e) {
		SteamClient.System.SetAirplaneMode(e);
	}
	SetNightModeAdvancedView(e) {
		this.m_bNightModeAdvancedView.Set(e);
	}
	SetNightModeEnabled(e) {
		let t = new o.sH();
		t.set_display_nightmode_enabled(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetNightModeTintStrength(e) {
		let t = new o.sH();
		t.set_display_nightmode_tintstrength(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetNightModeMaxSat(e) {
		let t = new o.sH();
		t.set_display_nightmode_maxsat(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetNightModeMaxHue(e) {
		let t = new o.sH();
		t.set_display_nightmode_maxhue(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetNightModeUIExp(e) {
		let t = new o.sH();
		t.set_display_nightmode_uiexp(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetNightModeBlend(e) {
		let t = new o.sH();
		t.set_display_nightmode_blend(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetNightModeScheduleEnabled(e) {
		let t = new o.sH();
		t.set_display_nightmode_schedule_enabled(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetNightModeScheduleStartTime(e) {
		let t = new o.sH();
		t.set_display_nightmode_schedule_starttime(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetNightModeScheduleEndTime(e) {
		let t = new o.sH();
		t.set_display_nightmode_schedule_endtime(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	ResetNightMode() {
		let e = new o.sH();
		e.set_display_nightmode_reset(true);
		SteamClient.System?.UpdateSettings(e.serializeBase64String());
	}
	SetIdleBacklightDimSeconds(e, t) {
		let r = new o.sH();
		if (e) {
			r.set_idle_backlight_dim_ac_seconds(t);
		} else {
			r.set_idle_backlight_dim_battery_seconds(t);
		}
		SteamClient.System?.UpdateSettings(r.serializeBase64String());
	}
	SetIdleSuspendSeconds(e, t) {
		let r = new o.sH();
		if (e) {
			r.set_idle_suspend_ac_seconds(t);
		} else {
			r.set_idle_suspend_battery_seconds(t);
		}
		SteamClient.System?.UpdateSettings(r.serializeBase64String());
	}
	SupressIdleSuspend(e) {
		this.m_nIdleSuspendSupressRefCount += e ? 1 : -1;
		this.SetIdleSuspendSuppressed(this.m_nIdleSuspendSupressRefCount > 0);
	}
	SetIdleSuspendSuppressed(e) {
		if (e == (this.m_msgSettings.idle_suspend_supressed ?? false)) {
			return;
		}
		let t = new o.sH();
		t.set_idle_suspend_supressed(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetDisplayAdaptiveBrightnessEnabled(e) {
		let t = new o.sH();
		t.set_display_adaptive_brightness_enabled(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetDisplayDiagnosticsEnabled(e) {
		let t = new o.sH();
		t.set_display_diagnostics_enabled(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetDisplayColorGamut(e) {
		let t = new o.sH();
		t.set_display_colorgamut(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetDisplayColorTemp(e) {
		let t = new o.sH();
		t.set_display_colortemp(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetDisplayColorTempEnabled(e) {
		let t = new o.sH();
		t.set_display_colortemp_enabled(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetDisplayBrightness(e) {
		SteamClient.System?.Display.SetBrightness(e);
	}
	SetWifiPowersaveEnabled(e) {
		let t = new o.sH();
		t.set_is_wifi_powersave_enabled(e);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
	SetFanControlEnabled(e) {
		let t = new o.sH();
		t.set_fan_control_mode(e ? 2 : 1);
		SteamClient.System?.UpdateSettings(t.serializeBase64String());
	}
}
export function yw() {
	return [
		q3(() => mG.Get().msgSettings.is_wifi_powersave_enabled ?? true),
		mG.Get().SetWifiPowersaveEnabled,
	];
}
export function zx() {
	return [
		q3(() => mG.Get().msgSettings?.is_display_brightness_available ?? true),
		gc(mG.Get().DisplayBrightness),
		q3(() => mG.Get().msgSettings?.display_brightness_overdrive_hdr_split ?? 0),
		mG.Get().SetDisplayBrightness,
	];
}
export function IV(e, t = 50) {
	const { secAC, secBattery } = q3(() => ({
		secAC: mG.Get().msgSettings.idle_backlight_dim_ac_seconds,
		secBattery: mG.Get().msgSettings.idle_backlight_dim_battery_seconds,
	}));
	const i = e ? secAC : secBattery;
	const s = _g(t);
	return [i, (t) => s(() => mG.Get().SetIdleBacklightDimSeconds(e, t))];
}
export function $y(e, t = 50) {
	const { secAC, secBattery } = q3(() => ({
		secAC: mG.Get().msgSettings.idle_suspend_ac_seconds,
		secBattery: mG.Get().msgSettings.idle_suspend_battery_seconds,
	}));
	const i = e ? secAC : secBattery;
	const s = _g(t);
	return [i, (t) => s(() => mG.Get().SetIdleSuspendSeconds(e, t))];
}
export function ko() {
	i.useEffect(() => {
		mG.Get().SupressIdleSuspend(true);
		return () => {
			mG.Get().SupressIdleSuspend(false);
		};
	}, []);
}
export function _3() {
	return gc(mG.Get().AirplaneModeEnabled);
}
export function MC() {
	return gc(mG.Get().NightModeAdvancedView);
}
export function _x() {
	return q3(() => mG.Get().msgSettings.display_nightmode_enabled);
}
export function Ru() {
	return [
		q3(() => mG.Get().msgSettings.display_nightmode_tintstrength),
		mG.Get().SetNightModeTintStrength,
	];
}
export function TD() {
	return q3(() => mG.Get().msgSettings.display_nightmode_maxhue);
}
export function T0() {
	return q3(() => mG.Get().msgSettings.display_nightmode_maxsat);
}
export function yc() {
	return [
		q3(
			() =>
				!mG.Get().msgSettings?.is_display_colormanagement_available ?? false,
		),
		q3(() => mG.Get().msgSettings?.display_nightmode_blend ?? 0),
	];
}
export function MK() {
	return [
		q3(() => mG.Get().msgSettings?.is_adaptive_brightness_available ?? false),
		q3(() => mG.Get().msgSettings.display_adaptive_brightness_enabled ?? false),
	];
}
export function xs() {
	return [
		q3(
			() => mG.Get().msgSettings?.is_display_colormanagement_available ?? false,
		),
		q3(() => mG.Get().msgSettings?.display_colorgamut_labelset ?? 0),
		q3(() => mG.Get().msgSettings?.display_colorgamut ?? 0),
		(e) => mG.Get().SetDisplayColorGamut(e),
	];
}
export function Xs() {
	return [
		q3(() => mG.Get().msgSettings?.is_display_colortemp_available ?? false),
		q3(() => mG.Get().msgSettings?.display_colortemp ?? 0),
		q3(() => mG.Get().msgSettings?.display_colortemp_default ?? 6500),
		(e) => mG.Get().SetDisplayColorTemp(e),
	];
}
export function MH() {
	return [
		q3(() => mG.Get().msgSettings?.is_display_colortemp_available ?? false),
		q3(() => mG.Get().msgSettings?.display_colortemp_enabled ?? true),
		(e) => mG.Get().SetDisplayColorTempEnabled(e),
	];
}
export function Wy() {
	return [
		q3(() => mG.Get().msgSettings?.display_nightmode_schedule_enabled ?? false),
		q3(() => mG.Get().msgSettings?.display_nightmode_schedule_starttime ?? 0),
		q3(() => mG.Get().msgSettings?.display_nightmode_schedule_endtime ?? 0),
	];
}
export function zg() {
	return [
		q3(() => mG.Get().msgSettings?.display_diagnostics_enabled ?? false),
		(e) => mG.Get().SetDisplayDiagnosticsEnabled(e),
	];
}
export function rw() {
	return [
		q3(() => mG.Get().msgSettings?.is_fan_control_available ?? false),
		q3(() => mG.Get().msgSettings?.fan_control_mode ?? 0) == 2,
		(e) => mG.Get().SetFanControlEnabled(e),
	];
}
Cg([l.sH], mG.prototype, "m_msgSettings", undefined);
Cg([l.XI.bound], mG.prototype, "OnSettingsChanged", null);
Cg([a.oI], mG.prototype, "OnAirplaneModeChanged", null);
Cg([a.oI], mG.prototype, "OnDisplayBrightnessChanged", null);
