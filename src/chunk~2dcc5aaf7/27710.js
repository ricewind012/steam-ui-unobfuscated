var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require(/*webcrack:missing*/ "./52451.js");
var l = require("./51297.js");
var c = require(/*webcrack:missing*/ "./41180.js");
var m = require("./89411.js");
export class Rk {
	static s_Singleton = null;
	static Get() {
		if (Rk.s_Singleton == null) {
			Rk.s_Singleton = new Rk();
			window.SystemDockStore = Rk.s_Singleton;
		}
		return Rk.s_Singleton;
	}
	m_eUpdateState = 0;
	m_msgState = {};
	m_bUpdateStateForced = false;
	get msgState() {
		return this.m_msgState;
	}
	get eUpdateState() {
		return this.m_eUpdateState;
	}
	constructor() {
		(0, a.Gn)(this);
		SteamClient.System.Dock?.RegisterForStateChanges(this.OnStateChanged);
	}
	OnStateChanged(e) {
		if (this.m_bUpdateStateForced) {
			return;
		}
		const t = l.KF.deserializeBinary(e).toObject();
		Object.keys(t).forEach((e) => (this.m_msgState[e] = t[e]));
		this.m_eUpdateState = t?.update_state?.state ?? 0;
	}
	FirmwareUpdateSendMsg(e) {
		let t = new l.pM();
		t.set_check_only(e);
		return SteamClient.System.Dock?.UpdateFirmware(t.serializeBase64String());
	}
	CheckForUpdate() {
		return this.FirmwareUpdateSendMsg(true);
	}
	ApplyUpdate() {
		return this.FirmwareUpdateSendMsg(false);
	}
	DisarmSafetyNet() {
		return SteamClient.System.Dock?.DisarmSafetyNet();
	}
	ForceUpdateStateAvailable() {
		this.m_bUpdateStateForced = true;
		this.m_eUpdateState = 4;
		this.m_msgState = {
			update_state: {
				state: 4,
				rtime_last_checked: (0, c._2)() - 10,
				version_current: "0.3.6",
				version_available: "0.3.7",
			},
		};
	}
	ForceUpdateStateApplying() {
		this.m_bUpdateStateForced = true;
		this.m_eUpdateState = 5;
		this.m_msgState = {
			update_state: {
				state: 5,
				rtime_last_checked: (0, c._2)() - 10,
				version_current: "0.3.6",
				version_available: "0.3.7",
				stage_progress: 0.3,
				rtime_estimated_completion: (0, c._2)() + 100,
			},
		};
	}
}
export function AF() {
	return [
		(0, s.q3)(() => Rk.Get().eUpdateState),
		Rk.Get().CheckForUpdate,
		Rk.Get().ApplyUpdate,
	];
}
export function Kh() {
	return (0, s.q3)(() => Rk.Get().msgState?.update_state);
}
export function Mi() {
	const e = Kh();
	const t = e?.rtime_estimated_completion;
	const [r, n] = i.useState(null);
	(0, o.$$)(() => {
		const t = (0, c._2)();
		const r = e?.rtime_estimated_completion;
		n(r - t);
	}, 500);
	if (t <= 0 || isNaN(r)) {
		return null;
	} else {
		return r;
	}
}
export function Qi() {
	const e = Kh();
	const t = e?.rtime_last_checked ?? 0;
	const [r, n] = i.useState(t ? (0, c._2)() - t : null);
	(0, o.$$)(() => {
		const t = e?.rtime_last_checked;
		n(t ? (0, c._2)() - t : null);
	}, 250);
	return r;
}
export function P7() {
	const [e] = AF();
	return (0, m.mt)(e);
}
(0, n.Cg)([a.sH], Rk.prototype, "m_eUpdateState", undefined);
(0, n.Cg)([a.sH], Rk.prototype, "m_msgState", undefined);
(0, n.Cg)([a.XI.bound], Rk.prototype, "OnStateChanged", null);
(0, n.Cg)([o.oI], Rk.prototype, "CheckForUpdate", null);
(0, n.Cg)([o.oI], Rk.prototype, "ApplyUpdate", null);
(0, n.Cg)([o.oI], Rk.prototype, "DisarmSafetyNet", null);
