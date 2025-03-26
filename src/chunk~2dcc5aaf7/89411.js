var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./51297.js");
var s = require(/*webcrack:missing*/ "./52451.js");
import { GetUnixTime, Sleep } from "../../actual_src/utils/time.js";
var l = require(/*webcrack:missing*/ "./89193.js");
var c = require("./95979.js");
var m = require("./13869.js");
var u = require("./95311.js");
var d = require(/*webcrack:missing*/ "./90095.js");
import { Localize } from "../../actual_src/utils/localization.js";
export function Yk() {
	return true;
}
class g {
	constructor() {
		(0, l.Gn)(this);
	}
	m_updateState = {
		state: 0,
	};
	m_bUpdateStateForced = false;
	m_spoofer = null;
	async SelectOSBranch(e, t = null) {
		const r = new a.hr();
		if (e == 0) {
			r.set_custom_branch(t);
		} else {
			r.set_branch(e);
		}
		await SteamClient.Updates?.SelectOSBranch(r.serializeBase64String());
		await this.CheckForUpdates(ib);
	}
	SetUpdateState(e) {
		if (
			!this.m_bUpdateStateForced &&
			((this.m_updateState = e), this.m_updateState.state == 7)
		) {
			const e = this.GetApplyResult(3);
			if (e?.eresult == 1) {
				SteamClient.System.RestartPC();
			}
		}
	}
	GetAvailableTypes() {
		let e = [];
		const t = this.m_updateState?.update_check_results;
		for (const r of t) {
			if (r.available) {
				e.push(r.type);
			}
		}
		return e;
	}
	GetMostSpecificCheckResult() {
		const e = this.m_updateState.update_check_results ?? [
			{
				eresult: 1,
			},
		];
		let t = false;
		for (const r of e) {
			if (r.eresult != 1) {
				if (r.eresult != 2) {
					return r.eresult;
				}
				t = true;
			}
		}
		if (t) {
			return 2;
		} else {
			return 1;
		}
	}
	GetMostSpecificApplyResult() {
		const e = this.m_updateState.update_apply_results ?? [
			{
				eresult: 1,
			},
		];
		let t = false;
		for (const r of e) {
			if (r.eresult != 1) {
				if (r.eresult != 2) {
					return r.eresult;
				}
				t = true;
			}
		}
		if (t) {
			return 2;
		} else {
			return 1;
		}
	}
	GetCheckResult(e) {
		return this.m_updateState?.update_check_results?.find((t) => t.type == e);
	}
	GetLastCheckTime() {
		const e = this.m_updateState.update_check_results ?? [{}];
		for (const t of e) {
			if (t.rtime_checked != null) {
				return t.rtime_checked;
			}
		}
		return null;
	}
	GetApplyResult(e) {
		return this.m_updateState?.update_apply_results?.find((t) => t.type == e);
	}
	GetProgressPercent() {
		const e = this.m_updateState.progress?.stage_progress;
		if (e) {
			return Math.floor(e * 100);
		} else {
			return null;
		}
	}
	GetCurrentBytes() {
		return (
			(this.GetUpdateSize() ?? 0) *
			(this.m_updateState.progress?.stage_progress ?? 0)
		);
	}
	GetUpdateSize() {
		if (this.m_spoofer) {
			return this.m_spoofer.GetUpdateSize();
		}
		const e = this.m_updateState.progress?.stage_size_bytes ?? null;
		if (e == null) {
			return null;
		}
		const t = Number(e);
		if (isNaN(t)) {
			return null;
		} else {
			return t;
		}
	}
	async CheckForUpdates(e) {
		const t = await SteamClient.Updates?.CheckForUpdates();
		const r = this.GetMostSpecificCheckResult();
		if (r != 1) {
			console.error("Updater check error:", r);
			if (e) {
				await e({
					eResult: r,
					strMsg: null,
				});
			}
		}
		return t;
	}
	async ApplyUpdate(e, t, r = false) {
		let n = new a.bM();
		await c.Z4.UpdateSystemInfoIfNecessary();
		for (const i of e) {
			n.add_apply_types(i);
			if (!r && i == 3) {
				const r = c.Z4.systemInfo.sBIOSVersion.trim();
				console.log(`Applying BIOS update. Current version: ${r}`);
				const n = this.GetCheckResult(i)?.auto_message;
				if (r == "F7A0100" || r == "F7A0101" || n != null) {
					console.log("Current BIOS updater requires technical screen warning");
					await (0, m.pg)(
						(0, u._o)({
							onOK: () => {
								this.ApplyUpdate(e, t, true);
							},
							onCancel: () => {},
							sOverrideAutoMessage: n,
						}),
						window,
					);
					return {
						result: 22,
						message: "Waiting on confirmation",
					};
				} else {
					console.log(
						"Current BIOS updater does not require sideways screen warning",
					);
					await (0, m.pg)(
						(0, u.D8)({
							onOK: () => {
								this.ApplyUpdate(e, t, true);
							},
							onCancel: () => {},
						}),
						window,
					);
					return {
						result: 22,
						message: "Waiting on confirmation",
					};
				}
			}
		}
		const i = await SteamClient.Updates?.ApplyUpdates(
			n.serializeBase64String(),
		);
		let s = i.result;
		let o = i.message;
		if (s == 1) {
			s = this.GetMostSpecificApplyResult();
			o = null;
		}
		if (s != 1) {
			console.error("Updater apply error: " + s + ": " + o);
			if (t) {
				await t({
					eResult: s,
					strMsg: o,
				});
			}
		}
		return i;
	}
	m_promiseEnsureOOBEUpdateApplying = null;
	m_bOOBEUpdateSucceded = false;
	EnsureOOOBEUpdateApplying() {
		const e = this.m_updateState?.supports_os_updates === false;
		if (this.m_bOOBEUpdateSucceded || e) {
			return new Promise((e) => {
				e(1);
			});
		} else {
			if (this.m_promiseEnsureOOBEUpdateApplying == null) {
				this.m_promiseEnsureOOBEUpdateApplying = this.ApplyUpdate([2], ib).then(
					(e) => {
						this.m_promiseEnsureOOBEUpdateApplying = null;
						const t = this.GetApplyResult(2)?.eresult ?? 2;
						if (t == 1) {
							this.m_bOOBEUpdateSucceded = true;
						}
						return t;
					},
				);
			}
			return this.m_promiseEnsureOOBEUpdateApplying;
		}
	}
	ForceUpdateStateAvailable() {
		this.m_bUpdateStateForced = true;
		this.m_updateState = {
			state: 4,
			update_check_results: [
				{
					type: 5,
					eresult: 1,
					available: true,
					rtime_checked: GetUnixTime(),
				},
			],
		};
	}
	ForceUpdateStateApplying() {
		this.m_bUpdateStateForced = true;
		this.m_updateState = {
			state: 5,
			progress: {
				rtime_estimated_completion: GetUnixTime() + 100,
				stage_progress: 0.6,
				stage_size_bytes: "1000000000",
			},
		};
	}
	ForceUpdateStateRollBack() {
		this.m_bUpdateStateForced = true;
		this.m_updateState = {
			state: 8,
		};
	}
	ToggleFakeUpdate() {
		if (this.m_spoofer) {
			this.m_spoofer = null;
		} else {
			this.m_spoofer = new R(this);
		}
		return this.m_spoofer != null;
	}
}
(0, n.Cg)([l.sH], g.prototype, "m_updateState", undefined);
(0, n.Cg)([l.XI], g.prototype, "SetUpdateState", null);
class h {
	static s_Singleton = null;
	m_currentOSBranch = undefined;
	m_rgOSBranches = [];
	static Get() {
		if (h.s_Singleton == null) {
			h.s_Singleton = new h();
			window.UpdateStore = h.s_Singleton;
		}
		return h.s_Singleton;
	}
	m_updater = new g();
	constructor() {
		(0, l.Gn)(this);
		if (SteamClient.Updates?.RegisterForUpdateStateChanges) {
			SteamClient.Updates.RegisterForUpdateStateChanges(
				this.OnUpdateStateChanged,
			);
		}
	}
	OnUpdateStateChanged(e) {
		const t = a.q.deserializeBinary(e).toObject();
		this.m_updater.SetUpdateState(t);
	}
	ForceUpdateStateAvailable() {
		this.m_updater.ForceUpdateStateAvailable();
	}
	ForceUpdateStateApplying() {
		this.m_updater.ForceUpdateStateApplying();
	}
	ForceUpdateStateRollBack() {
		this.m_updater.ForceUpdateStateRollBack();
	}
	ForceUpdateCurrentOSBranch() {
		this.m_currentOSBranch = undefined;
	}
	get currentOSBranch() {
		if (this.m_currentOSBranch === undefined) {
			this.m_currentOSBranch = {
				eBranch: 0,
				sRawName: "",
			};
			const e = (e) => (this.m_currentOSBranch = e);
			const t = () => this.ForceUpdateStateRollBack();
			SteamClient.Updates?.GetCurrentOSBranch().then(e, t);
		}
		return this.m_currentOSBranch;
	}
	ForceUpdateOSBranches() {
		this.m_rgOSBranches = undefined;
	}
	get osBranches() {
		if (this.m_rgOSBranches === undefined) {
			this.m_rgOSBranches = [];
			SteamClient.Updates?.GetOSBranchList().then((e) => {
				this.m_rgOSBranches = e;
			});
		}
		return this.m_rgOSBranches;
	}
}
export function hi(e) {
	switch (e.eBranch) {
		case 1:
			return (0, Localize)("#Settings_OSBranch_Release");
		case 2:
			return (0, Localize)("#Settings_OSBranch_ReleaseCandidate");
		case 3:
			return (0, Localize)("#Settings_OSBranch_Beta");
		case 4:
			return (0, Localize)("#Settings_OSBranch_BetaCandidate");
		case 5:
			return (0, Localize)("#Settings_OSBranch_Preview");
		case 6:
			return (0, Localize)("#Settings_OSBranch_PreviewCandidate");
		case 7:
			return (0, Localize)("#Settings_OSBranch_Main");
		case 0:
			return e.sRawName;
		default:
			console.warn("Invalid OS branch type");
			return null;
	}
}
export function Bv(e) {
	switch (e.eBranch) {
		case 1:
		case 3:
		case 5:
			return false;
	}
	return true;
}
export function mt(e) {
	switch (e) {
		case 2:
		case 3:
		case 0:
			return false;
		default:
			return true;
	}
}
export function RP(e) {
	switch (e) {
		case 3:
			return (0, Localize)("#Settings_Updates_BIOSUpdaterName");
		case 1:
			return (0, Localize)("#Settings_Updates_ClientUpdaterName");
		case 2:
			return (0, Localize)("#Settings_Updates_OSUpdaterName");
		case 5:
			return (0, Localize)("#Settings_Updates_TestUpdaterName");
		default:
			return (0, Localize)("#Settings_Updates_UnknownUpdaterName");
	}
}
export function Tt() {
	const e = h.Get().m_updater;
	(0, d.q3)(() => e.m_updateState);
	return e;
}
export function C2() {
	return mt(Tt().m_updateState.state);
}
export function wN() {
	const e = Tt().m_updateState;
	const t = e.progress?.rtime_estimated_completion;
	const [r, n] = i.useState(0);
	(0, s.$$)(() => {
		const t = e.progress?.rtime_estimated_completion;
		const r = GetUnixTime();
		n(t - r);
	}, 500);
	if (t == null || r > 172800 || isNaN(r)) {
		return null;
	}
	let a = r < 0 ? 1 : r;
	a = Math.floor(a);
	return a;
}
export function _S() {
	const e = Tt();
	const t = e.GetLastCheckTime();
	const [r, n] = i.useState(t ? GetUnixTime() - t : null);
	(0, s.$$)(() => {
		const t = e.GetLastCheckTime();
		n(t ? GetUnixTime() - t : null);
	}, 100);
	return r;
}
export function KZ() {
	return (0, d.q3)(() => h.Get().osBranches);
}
export function j9() {
	i.useEffect(() => {
		h.Get().ForceUpdateOSBranches();
	}, []);
}
export function NZ() {
	return (0, d.q3)(() => h.Get().currentOSBranch);
}
export function Qc() {
	i.useEffect(() => {
		h.Get().ForceUpdateCurrentOSBranch();
	}, []);
}
export async function ib(e) {
	await (0, m.pg)((0, u.b4)(e), window);
}
(0, n.Cg)([l.sH], h.prototype, "m_currentOSBranch", undefined);
(0, n.Cg)([l.sH], h.prototype, "m_rgOSBranches", undefined);
(0, n.Cg)([l.XI.bound], h.prototype, "OnUpdateStateChanged", null);
class R {
	m_updater;
	constructor(e) {
		this.m_updater = e;
	}
	GetUpdateSize() {
		return 209715200;
	}
	async PerformFakeUpdateCheck(e) {
		this.m_updater.SetUpdateState(this.CreateFakeUpdateMessage(3, 0));
		return new Promise((e, t) =>
			setTimeout(() => {
				this.m_updater.SetUpdateState(this.CreateFakeUpdateMessage(4, 0));
				e({
					result: 1,
					message: null,
					reply: null,
				});
			}, 1000),
		);
	}
	async PerformFakeUpdateApply(e) {
		const t = GetUnixTime() + 5;
		this.m_updater.SetUpdateState(this.CreateFakeUpdateMessage(5, 0, t));
		const r = async (e) => {
			this.m_updater.SetUpdateState(this.CreateFakeUpdateMessage(5, 0, t));
			for (let e = 0; e < 100; e++) {
				await Sleep(50);
				const r = (e + 1) / 100;
				this.m_updater.SetUpdateState(this.CreateFakeUpdateMessage(5, r, t));
			}
			this.m_updater.SetUpdateState(this.CreateFakeUpdateMessage(6, 0, 0));
			e({
				result: 1,
				message: null,
				reply: null,
			});
		};
		return new Promise((e, t) => r(e));
	}
	CreateFakeUpdateMessage(e, t, r) {
		return {
			state: e,
			progress: {
				stage_progress: t,
				stage_size_bytes: "500 MB",
				rtime_estimated_completion: r ?? GetUnixTime() + 2,
			},
			update_check_results: [
				{
					type: 7,
					eresult: 1,
					rtime_checked: GetUnixTime() - 0.5,
					available: true,
					version: "0.0",
				},
			],
			update_apply_results: [
				{
					type: 7,
					eresult: 1,
					requires_client_restart: true,
					requires_system_restart: false,
				},
			],
		};
	}
}
