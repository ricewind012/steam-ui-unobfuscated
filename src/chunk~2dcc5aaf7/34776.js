var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./52698.js");
var a = require(/*webcrack:missing*/ "./88696.js");
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./93960.js");
var l = require(/*webcrack:missing*/ "./83599.js");
var c = require("./53453.js");
var m = require(/*webcrack:missing*/ "./44846.js");
var u = require("./42983.js");
var d = require(/*webcrack:missing*/ "./72476.js");
const A = new l.wd("KeyboardPersonalization");
export var X;
(function (e) {
	e[(e.Off = 0)] = "Off";
	e[(e.Low = 1)] = "Low";
	e[(e.Medium = 2)] = "Medium";
	e[(e.High = 3)] = "High";
	e[(e.Custom = 10)] = "Custom";
})((X ||= {}));
const g = {
	currentLayout: 0,
	selectedLayouts: [],
};
class h {
	static k_strStorageKeyPreset = "keyboard_haptic_preset";
	static k_strStorageKeyCustomSettings = "keyboard_haptic_custom";
	static k_strStorageKeyTrackpadTypingScale = "keyboard_trackpad_typing_scale";
	static k_strStorageKeyTrackpadTypingTriggerAsClick =
		"keyboard_trackpding_typing_trigger_as_click";
	static k_strStorageKeyKeyboardLayout = "keyboard_layout";
	static k_strStorageKeyInitialLocationDesktop =
		"keyboard_initial_location_desktop";
	static k_strStorageKeyInitialLocationOverlay =
		"keyboard_initial_location_overlay";
	static k_Presets = {
		[X.Off]: {
			eHapticType: 0,
			unIntensity: 0,
			ndBGain: 0,
		},
		[X.Low]: {
			eHapticType: c.n.Tick,
			unIntensity: 2,
			ndBGain: -2,
		},
		[X.Medium]: {
			eHapticType: c.n.Click,
			unIntensity: 4,
			ndBGain: -5,
		},
		[X.High]: {
			eHapticType: c.n.Click,
			unIntensity: 3,
			ndBGain: -3,
		},
	};
	m_ePreset = undefined;
	m_customSetting = undefined;
	m_trackpadTypingInputScale = undefined;
	m_trackpadTypingTriggerAsClick = undefined;
	m_initialLocationDesktop = undefined;
	m_initialLocationOverlay = undefined;
	m_machineStorage;
	m_localStorage;
	m_machineLayoutSettings = g;
	m_userLayoutSettings = undefined;
	constructor() {
		(0, s.Gn)(this);
		this.m_ePreset = X.Medium;
		this.m_customSetting = h.k_Presets[X.Medium];
		this.m_trackpadTypingInputScale = 1;
		this.m_trackpadTypingTriggerAsClick = true;
		this.m_initialLocationDesktop = "center-bottom";
		this.m_initialLocationOverlay = "center-bottom";
	}
	async InitWithoutUser() {
		this.m_machineStorage = new i.g();
		return this.m_machineStorage
			.GetObject(h.k_strStorageKeyKeyboardLayout)
			.then((e) => {
				this.m_machineLayoutSettings = e || g;
			});
	}
	async Init() {
		this.m_localStorage = new a.A();
		await this.Load();
		(0, s.fm)(this.Save);
	}
	get HapticSettings() {
		if (this.m_ePreset == X.Custom) {
			return this.m_customSetting;
		} else {
			return h.k_Presets[this.m_ePreset];
		}
	}
	get HapticPreset() {
		return this.m_ePreset;
	}
	SetHapticSettings(e) {
		if (typeof e == "number") {
			this.m_ePreset = e;
		} else {
			this.m_ePreset = X.Custom;
			this.m_customSetting = e;
		}
	}
	get TrackPadTypingInputScale() {
		return this.m_trackpadTypingInputScale;
	}
	set TrackPadTypingInputScale(e) {
		this.m_trackpadTypingInputScale = e;
	}
	get TrackpadTypingTriggerAsClick() {
		return this.m_trackpadTypingTriggerAsClick;
	}
	set TrackpadTypingTriggerAsClick(e) {
		this.m_trackpadTypingTriggerAsClick = e;
	}
	get InitialLocationDesktop() {
		return this.m_initialLocationDesktop;
	}
	set InitialLocationDesktop(e) {
		this.m_initialLocationDesktop = e;
	}
	get InitialLocationOverlay() {
		return this.m_initialLocationOverlay;
	}
	set InitialLocationOverlay(e) {
		this.m_initialLocationOverlay = e;
	}
	async Load() {
		let e = this.m_localStorage.GetObject(h.k_strStorageKeyPreset);
		let t = this.m_localStorage.GetObject(h.k_strStorageKeyCustomSettings);
		let r = this.m_localStorage.GetObject(h.k_strStorageKeyTrackpadTypingScale);
		let n = this.m_localStorage.GetObject(
			h.k_strStorageKeyTrackpadTypingTriggerAsClick,
		);
		let i = this.m_localStorage.GetObject(h.k_strStorageKeyKeyboardLayout);
		let a = this.m_localStorage.GetObject(
			h.k_strStorageKeyInitialLocationDesktop,
		);
		let s = this.m_localStorage.GetObject(
			h.k_strStorageKeyInitialLocationOverlay,
		);
		await Promise.all([e, t, r, n, i, a, s]).then(([e, t, r, n, i, a, s]) => {
			this.m_ePreset = e ?? this.m_ePreset;
			this.m_customSetting = t ?? this.m_customSetting;
			this.m_trackpadTypingInputScale = r ?? this.m_trackpadTypingInputScale;
			this.m_trackpadTypingTriggerAsClick =
				n ?? this.m_trackpadTypingTriggerAsClick;
			this.m_userLayoutSettings = i ?? g;
			this.m_initialLocationDesktop = a ?? "center-bottom";
			this.m_initialLocationOverlay = s ?? "center-bottom";
			if (this.m_userLayoutSettings.selectedLayouts.length == 0) {
				this.AddValidKeyboardLayoutByLanguage((0, m.sf)(d.TS.LANGUAGE));
			}
			A.Debug(
				"Loaded keyboard haptic settings:",
				X[this.m_ePreset],
				this.m_customSetting,
			);
			A.Debug(
				"Loaded keyboard trackpad settings:",
				this.m_trackpadTypingInputScale,
				this.m_trackpadTypingTriggerAsClick,
			);
			A.Debug("Loaded keyboard layout settings: ", this.m_userLayoutSettings);
			A.Debug(
				"Loaded keyboard location settings: ",
				this.m_initialLocationDesktop,
				this.m_initialLocationOverlay,
			);
		});
	}
	async Save() {
		const e = [
			this.m_localStorage.StoreObject(h.k_strStorageKeyPreset, this.m_ePreset),
			this.m_localStorage.StoreObject(
				h.k_strStorageKeyCustomSettings,
				this.m_customSetting,
			),
			this.m_localStorage.StoreObject(
				h.k_strStorageKeyTrackpadTypingScale,
				this.m_trackpadTypingInputScale,
			),
			this.m_localStorage.StoreObject(
				h.k_strStorageKeyTrackpadTypingTriggerAsClick,
				this.m_trackpadTypingTriggerAsClick,
			),
			this.m_localStorage.StoreObject(
				h.k_strStorageKeyKeyboardLayout,
				this.m_userLayoutSettings,
			),
			this.m_localStorage.StoreObject(
				h.k_strStorageKeyInitialLocationDesktop,
				this.m_initialLocationDesktop,
			),
			this.m_localStorage.StoreObject(
				h.k_strStorageKeyInitialLocationOverlay,
				this.m_initialLocationOverlay,
			),
		];
		await Promise.all(e);
		A.Debug(
			"Saved keyboard haptic settings:",
			X[this.m_ePreset],
			this.m_customSetting,
		);
		A.Debug(
			"Saved keyboard trackpad settings:",
			this.m_trackpadTypingInputScale,
			this.m_trackpadTypingTriggerAsClick,
		);
		A.Debug("Saved keyboard layout settings: ", this.m_userLayoutSettings);
		A.Debug(
			"Saved keyboard location settings: ",
			this.m_initialLocationDesktop,
			this.m_initialLocationOverlay,
		);
	}
	GetKeyboardLayoutSettings() {
		return this.m_userLayoutSettings ?? this.m_machineLayoutSettings;
	}
	SetKeyboardLayout(e) {
		this.m_machineLayoutSettings.currentLayout = e;
		this.m_machineStorage.StoreObject(
			h.k_strStorageKeyKeyboardLayout,
			this.m_machineLayoutSettings,
		);
		if (this.m_userLayoutSettings) {
			this.m_userLayoutSettings.currentLayout = e;
		}
	}
	SetValidKeyboardLayouts(e) {
		if (this.m_userLayoutSettings) {
			if (!e.includes(this.m_userLayoutSettings.currentLayout)) {
				if (e.length == 0) {
					e.push(this.m_userLayoutSettings.currentLayout);
				} else {
					this.m_userLayoutSettings.currentLayout = e[0];
				}
			}
			this.m_userLayoutSettings.selectedLayouts = e;
		}
	}
	AddValidKeyboardLayoutByLanguage(e) {
		let t = u.zB[e] ?? 0;
		if (
			t !== undefined &&
			!this.m_userLayoutSettings.selectedLayouts.includes(t)
		) {
			this.m_userLayoutSettings.selectedLayouts.push(t);
		}
	}
}
(0, n.Cg)([s.sH], h.prototype, "m_ePreset", undefined);
(0, n.Cg)([s.sH], h.prototype, "m_customSetting", undefined);
(0, n.Cg)([s.sH], h.prototype, "m_trackpadTypingInputScale", undefined);
(0, n.Cg)([s.sH], h.prototype, "m_trackpadTypingTriggerAsClick", undefined);
(0, n.Cg)([s.sH], h.prototype, "m_initialLocationDesktop", undefined);
(0, n.Cg)([s.sH], h.prototype, "m_initialLocationOverlay", undefined);
(0, n.Cg)([s.sH.deep], h.prototype, "m_machineLayoutSettings", undefined);
(0, n.Cg)([s.sH.deep], h.prototype, "m_userLayoutSettings", undefined);
(0, n.Cg)([s.XI], h.prototype, "SetHapticSettings", null);
(0, n.Cg)([o.o], h.prototype, "Save", null);
(0, n.Cg)([s.XI], h.prototype, "SetValidKeyboardLayouts", null);
(0, n.Cg)([s.XI], h.prototype, "AddValidKeyboardLayoutByLanguage", null);
export const O = new h();
