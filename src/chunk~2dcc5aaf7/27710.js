import { GetUnixTime } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import o, { $$ } from "./52451.js";
import l from "./51297.js";
import { mt } from "./89411.js";
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
		Gn(this);
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
				rtime_last_checked: GetUnixTime() - 10,
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
				rtime_last_checked: GetUnixTime() - 10,
				version_current: "0.3.6",
				version_available: "0.3.7",
				stage_progress: 0.3,
				rtime_estimated_completion: GetUnixTime() + 100,
			},
		};
	}
}
export function AF() {
	return [
		q3(() => Rk.Get().eUpdateState),
		Rk.Get().CheckForUpdate,
		Rk.Get().ApplyUpdate,
	];
}
export function Kh() {
	return q3(() => Rk.Get().msgState?.update_state);
}
export function Mi() {
	const e = Kh();
	const t = e?.rtime_estimated_completion;
	const [r, setR] = i.useState(null);
	$$(() => {
		const t = GetUnixTime();
		const r = e?.rtime_estimated_completion;
		setR(r - t);
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
	const [r, setR] = i.useState(t ? GetUnixTime() - t : null);
	$$(() => {
		const t = e?.rtime_last_checked;
		setR(t ? GetUnixTime() - t : null);
	}, 250);
	return r;
}
export function P7() {
	const [e] = AF();
	return mt(e);
}
Cg([a.sH], Rk.prototype, "m_eUpdateState", undefined);
Cg([a.sH], Rk.prototype, "m_msgState", undefined);
Cg([a.XI.bound], Rk.prototype, "OnStateChanged", null);
Cg([o.oI], Rk.prototype, "CheckForUpdate", null);
Cg([o.oI], Rk.prototype, "ApplyUpdate", null);
Cg([o.oI], Rk.prototype, "DisarmSafetyNet", null);
