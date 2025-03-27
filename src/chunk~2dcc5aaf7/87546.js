import { Cg } from "./34629.js";
import a, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import o from "./60917.js";
import { gL } from "./93440.js";
import { pg } from "./13869.js";
import { z5, f0 } from "./63312.js";
import u, { C6 } from "./27325.js";
export let Go;
((e) => {
	e[(e.Low = 0)] = "Low";
	e[(e.Medium = 1)] = "Medium";
	e[(e.High = 2)] = "High";
})((Go ||= {}));
export class Zw {
	static s_Singleton = null;
	static Get() {
		if (Zw.s_Singleton == null) {
			Zw.s_Singleton = new Zw();
			window.SystemPowerStore = Zw.s_Singleton;
		}
		return Zw.s_Singleton;
	}
	m_bHasBattery = false;
	m_eACState = 0;
	m_eBatteryState = 0;
	m_flBatteryLevel = 0;
	m_nBatterySecondsRemaining = 0;
	m_bShutdownRequested = false;
	m_bNotificationToastEnabled = false;
	m_eBatteryTimeConfidence = Go.High;
	m_nBatteryTimeConfidenceTimeoutID = null;
	m_bSayFull = false;
	m_nSayFullTimeoutID = null;
	m_bShowingConnectedSlowDetails = false;
	m_bShuttingDown = false;
	get batteryState() {
		return {
			bHasBattery: this.m_bHasBattery,
			eACState: this.m_eACState,
			eBatteryState: this.m_eBatteryState,
			flLevel: this.m_flBatteryLevel,
			nSecondsRemaining: this.m_nBatterySecondsRemaining,
			bShutdownRequested: this.m_bShutdownRequested,
			bNotificationToastEnabled: this.m_bNotificationToastEnabled,
		};
	}
	get eBatteryTimeConfidence() {
		return this.m_eBatteryTimeConfidence;
	}
	get bSayFull() {
		return this.m_bSayFull;
	}
	constructor() {
		Gn(this);
		SteamClient.System.RegisterForBatteryStateChanges(
			this.OnBatteryStateChanged,
		);
	}
	ShowConnectedSlowDetails() {
		if (!this.m_bShowingConnectedSlowDetails) {
			this.m_bShowingConnectedSlowDetails = true;
			const e = () => {
				this.m_bShowingConnectedSlowDetails = false;
			};
			pg(
				z5({
					onOK: e,
				}),
				window,
			);
		}
	}
	ShowBatteryFullDetails() {
		pg(f0({}), window);
	}
	OnBatteryStateChanged(e) {
		const t = this.m_eACState;
		const r = this.m_eBatteryState;
		this.m_bHasBattery = e.bHasBattery;
		this.m_eACState = e.eACState;
		this.m_eBatteryState = e.eBatteryState;
		this.m_flBatteryLevel = e.flLevel;
		this.m_nBatterySecondsRemaining = e.nSecondsRemaining;
		this.m_bShutdownRequested = e.bShutdownRequested;
		this.m_bNotificationToastEnabled = e.bNotificationToastEnabled;
		if (e.bNotificationToastEnabled) {
			o.Tu.OnBatteryLevelChange(e.flLevel, e.eACState, e.bHasBattery);
		}
		if (e.eACState != t) {
			if (e.eACState == 3) {
				this.ShowConnectedSlowDetails();
			}
			this.m_eBatteryTimeConfidence = Go.Low;
			if (this.m_nBatteryTimeConfidenceTimeoutID != null) {
				window.clearTimeout(this.m_nBatteryTimeConfidenceTimeoutID);
			}
			const t = C6(10, u.Nf.Seconds, u.Nf.Millis);
			this.m_nBatteryTimeConfidenceTimeoutID = window.setTimeout(() => {
				this.m_eBatteryTimeConfidence = Go.Medium;
				const e = C6(1, u.Nf.Minutes, u.Nf.Millis);
				this.m_nBatteryTimeConfidenceTimeoutID = window.setTimeout(() => {
					this.m_eBatteryTimeConfidence = Go.High;
					this.m_nBatteryTimeConfidenceTimeoutID = null;
				}, e);
			}, t);
		}
		if (e.eBatteryState == 3) {
			this.m_bSayFull = true;
			if (this.m_nSayFullTimeoutID != null) {
				window.clearTimeout(this.m_nSayFullTimeoutID);
				this.m_nSayFullTimeoutID = null;
			}
		} else if (r == 3) {
			const e = C6(5, u.Nf.Seconds, u.Nf.Millis);
			this.m_nSayFullTimeoutID = window.setTimeout(() => {
				this.m_bSayFull = false;
				this.m_nSayFullTimeoutID = null;
			}, e);
		}
		if (e.bShutdownRequested && !this.m_bShuttingDown) {
			this.m_bShuttingDown = true;
			gL();
		}
	}
}
export function Qc() {
	return q3(() => Zw.Get().batteryState);
}
export function Ab() {
	return q3(() => Zw.Get().eBatteryTimeConfidence);
}
export function FA() {
	return q3(() => Zw.Get().bSayFull);
}
Cg([a.sH], Zw.prototype, "m_bHasBattery", undefined);
Cg([a.sH], Zw.prototype, "m_eACState", undefined);
Cg([a.sH], Zw.prototype, "m_eBatteryState", undefined);
Cg([a.sH], Zw.prototype, "m_flBatteryLevel", undefined);
Cg([a.sH], Zw.prototype, "m_nBatterySecondsRemaining", undefined);
Cg([a.sH], Zw.prototype, "m_bShutdownRequested", undefined);
Cg([a.sH], Zw.prototype, "m_bNotificationToastEnabled", undefined);
Cg([a.sH], Zw.prototype, "m_eBatteryTimeConfidence", undefined);
Cg([a.sH], Zw.prototype, "m_bSayFull", undefined);
Cg([a.XI.bound], Zw.prototype, "OnBatteryStateChanged", null);
