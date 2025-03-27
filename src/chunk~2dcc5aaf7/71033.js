import { Sleep } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i from "./44846.js";
import a from "./52451.js";
import s from "./83599.js";
import o, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import c from "./63696.js";
import u from "./56970.js";
import { Di } from "./13925.js";
import A from "./46422.js";
const p = new s.wd("SuspendResume");
const g = false;
class h {
	constructor() {
		Gn(this);
	}
	m_eSuspendResumeProgress = i.jH.k_ESuspendResumeProgressState_Invalid;
	m_bSuspending = false;
	m_bResuming = false;
	m_bShowResumeUI = false;
	m_nSuspendSleepMS = 0;
	m_cSuspendBlockers = 0;
	Init() {
		SteamClient.System.RegisterForOnResumeFromSuspend(
			this.OnSystemResumedFromSuspend,
		);
		SteamClient.System.RegisterForOnSuspendRequest(this.OnSuspendRequest);
		SteamClient.User.RegisterForPrepareForSystemSuspendProgress(
			this.OnPrepareForSuspendProgress,
		);
		SteamClient.User.RegisterForResumeSuspendedGamesProgress(
			this.OnResumeSuspendedGamesProgress,
		);
	}
	GetSuspendResumeState() {
		return this.m_eSuspendResumeProgress;
	}
	NotifyResumeUIDone() {
		this.m_bShowResumeUI = false;
	}
	get suspending() {
		return this.m_bSuspending;
	}
	get resuming() {
		return this.m_bResuming;
	}
	get show_resume_ui() {
		return this.m_bShowResumeUI;
	}
	InitiateSleep() {
		this.OnSuspendRequest();
	}
	InitiateResume() {
		this.OnSystemResumedFromSuspend();
	}
	BShowSuspendResumeDialogs() {
		return A.oy.MainInstanceUIMode == 4;
	}
	async OnSuspendRequest() {
		p.Info("Received suspend request");
		if (this.m_cSuspendBlockers > 0) {
			p.Info("Suspend request ignored due to suspend blockers");
			return;
		}
		if (this.m_bSuspending == 1) {
			p.Warning(
				"Ignoring suspend request while a suspend operation is in progress:",
				this.m_eSuspendResumeProgress,
			);
			return;
		}
		this.m_bSuspending = true;
		this.m_bResuming = false;
		this.m_bShowResumeUI = false;
		this.m_eSuspendResumeProgress = i.jH.k_ESuspendResumeProgressState_Invalid;
		if (this.BShowSuspendResumeDialogs()) {
			this.m_nSuspendSleepMS = 900;
		} else {
			this.m_nSuspendSleepMS = 0;
		}
		let e = await SteamClient.User.PrepareForSystemSuspend();
		if (e.result != 1) {
			p.Error("PrepareForSystemSuspend failed", e);
			if (e.result != 108) {
				this.m_bSuspending = false;
			}
			return;
		}
		p.Info("PrepareForSystemSuspend succeeded");
		this.m_eSuspendResumeProgress = i.jH.k_ESuspendResumeProgressState_Complete;
		await Sleep(this.m_nSuspendSleepMS);
		if (!px()) {
			SteamClient.System.SuspendPC();
		}
	}
	OnPrepareForSuspendProgress(e) {
		p.Info("OnPrepareForSuspendProgress", e);
		let e_state = e.state;
		this.m_eSuspendResumeProgress = e_state;
		if (
			this.BShowSuspendResumeDialogs() &&
			this.m_eSuspendResumeProgress !=
				i.jH.k_ESuspendResumeProgressState_Complete
		) {
			this.m_nSuspendSleepMS = 1700;
		}
	}
	async OnSystemResumedFromSuspend() {
		p.Info("Received resume request");
		this.m_eSuspendResumeProgress = i.jH.k_ESuspendResumeProgressState_Invalid;
		this.m_bSuspending = false;
		this.m_bResuming = true;
		this.m_bShowResumeUI = true;
		if (this.BShowSuspendResumeDialogs()) {
			if (u.yE.GetSettings().bLockOnWake) {
				Di({
					preventCancel: true,
					preventSteamButtons: true,
				});
			}
		}
		let e = await SteamClient.User.ResumeSuspendedGames(true);
		if (e.result != 1) {
			p.Error("OnSystemResumedFromSuspend failed", e);
			this.m_bResuming = false;
			this.m_bShowResumeUI = false;
			return;
		}
	}
	OnResumeSuspendedGamesProgress(e) {
		p.Info("OnResumeSuspendedGamesProgress", e);
		let e_state = e.state;
		this.m_eSuspendResumeProgress = e_state;
		if (
			!e.bGameSuspended ||
			e_state == i.jH.k_ESuspendResumeProgressState_Invalid ||
			e_state == i.jH.k_ESuspendResumeProgressState_Invalid ||
			e_state == i.jH.k_ESuspendResumeProgressState_Complete
		) {
			this.m_bResuming = false;
		}
	}
	BlockSuspendAction() {
		this.m_cSuspendBlockers++;
		return () => {
			this.m_cSuspendBlockers--;
		};
	}
}
Cg([o.sH], h.prototype, "m_eSuspendResumeProgress", undefined);
Cg([o.sH], h.prototype, "m_bSuspending", undefined);
Cg([o.sH], h.prototype, "m_bResuming", undefined);
Cg([o.sH], h.prototype, "m_bShowResumeUI", undefined);
Cg([o.XI], h.prototype, "NotifyResumeUIDone", null);
Cg([o.XI.bound], h.prototype, "OnSuspendRequest", null);
Cg([a.oI], h.prototype, "OnPrepareForSuspendProgress", null);
Cg([o.XI.bound], h.prototype, "OnSystemResumedFromSuspend", null);
Cg([o.XI.bound], h.prototype, "OnResumeSuspendedGamesProgress", null);
export const Ze = new h();
export function px() {
	return g;
}
export function sp() {
	return q3(() => Ze.GetSuspendResumeState());
}
export function Tx() {
	return q3(() => Ze.suspending);
}
export function _0() {
	return q3(() => Ze.show_resume_ui || Ze.resuming);
}
export function Nx(e = true) {
	c.useEffect(() => {
		if (e) {
			return Ze.BlockSuspendAction();
		}
	}, [e]);
}
export function GP(e) {
	const [t, setT] = c.useState(false);
	const NRef = c.useRef(0);
	const i = c.useCallback(() => {
		setT(true);
		window.clearTimeout(NRef.current);
		NRef.current = window.setTimeout(() => setT(false), e * 1000);
	}, [e, NRef]);
	c.useEffect(() => {
		const e = SteamClient.System.RegisterForOnResumeFromSuspend(i);
		return () => e.unregister();
	}, [i]);
	c.useEffect(() => () => window.clearTimeout(NRef.current), []);
	return t;
}
window.SuspendResumeStore = Ze;
