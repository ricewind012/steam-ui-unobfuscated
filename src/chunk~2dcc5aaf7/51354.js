import n, { Cg } from "./34629.js";
import i from "./83957.js";
import s, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import { aj } from "./63088.js";
import c from "./79769.js";
import m from "./52451.js";
import u from "./72476.js";
const a = i;
export class b {
	m_AppID;
	m_onEulasDone;
	m_onCancelAction;
	m_acceptEulaFn;
	m_bDone = false;
	m_stateContinueFn = undefined;
	m_stateCancelFn = undefined;
	m_currentEula = undefined;
	m_EULALoader;
	m_EULAVector;
	useEulaApprovalState() {
		return q3(() => ({
			continueFn: this.m_stateContinueFn,
			cancelFn: this.m_stateCancelFn,
			currentEula: this.m_currentEula,
			bDone: this.m_bDone,
		}));
	}
	constructor(e, t, r, n) {
		Gn(this);
		this.m_AppID = e;
		this.m_onEulasDone = t;
		this.m_onCancelAction = r;
		this.m_acceptEulaFn = n;
	}
	CancelAction() {
		if (!this.m_bDone) {
			if (this.m_onCancelAction) {
				this.m_onCancelAction();
			}
		}
	}
	SetActiveEULA(e) {
		this.m_currentEula = e;
		this.m_EULALoader = e ? new A(e.url, u.TS.LANGUAGE) : null;
	}
	GetEULALoader() {
		return this.m_EULALoader;
	}
	Start() {
		SteamClient.Apps.LoadEula(this.m_AppID).then(this.StartEulaFlow);
	}
	StartEulaFlow(e) {
		this.m_EULAVector = e;
		this.m_stateContinueFn = this.ContinueEula;
		this.m_stateCancelFn = this.CancelAction;
		this.ContinueEula();
	}
	ContinueEula() {
		if (this.m_currentEula) {
			console.log("accepted eula", this.m_currentEula.id);
			this.m_acceptEulaFn(
				this.m_AppID,
				this.m_currentEula.id,
				this.m_currentEula.version,
			);
		}
		const e = this.m_EULAVector.shift();
		if (e) {
			this.SetActiveEULA(e);
			console.log("prompt for eula", this.m_currentEula.id);
			return;
		}
		console.log("eulas complete", this.m_currentEula.id);
		this.m_bDone = true;
		this.SetActiveEULA(undefined);
		this.m_stateContinueFn = undefined;
		this.m_stateCancelFn = undefined;
		this.m_onEulasDone();
	}
}
Cg([s.sH], b.prototype, "m_stateContinueFn", undefined);
Cg([s.sH], b.prototype, "m_stateCancelFn", undefined);
Cg([s.sH], b.prototype, "m_currentEula", undefined);
Cg([m.oI], b.prototype, "CancelAction", null);
Cg([s.XI], b.prototype, "SetActiveEULA", null);
Cg([s.XI.bound], b.prototype, "StartEulaFlow", null);
Cg([s.XI.bound], b.prototype, "ContinueEula", null);
class A {
	m_url;
	m_eulaLang;
	m_data = null;
	m_bError = false;
	m_OnReadyCallbacks = new c.lu();
	constructor(e, t) {
		this.m_url = e.replace("http://", "https://");
		this.m_eulaLang = t;
	}
	GetURL() {
		return this.m_url;
	}
	BHadError() {
		return this.m_bError;
	}
	GetEULAData() {
		return this.m_data;
	}
	GetLanguage() {
		return this.m_eulaLang;
	}
	GetOnReadyCallbacks() {
		return this.m_OnReadyCallbacks;
	}
	Retry() {
		this.m_bError = false;
		this.LoadEULA();
		this.m_OnReadyCallbacks.Dispatch(null);
	}
	SetLanguage(e) {
		if (this.m_eulaLang != e) {
			this.m_eulaLang = e;
		}
	}
	async LoadEULA() {
		const e = this.m_eulaLang;
		const t = new URL(this.m_url);
		let r;
		t.searchParams.append("eulaLang", e);
		t.searchParams.append("json", "1");
		try {
			r = await a.get(t.toString());
		} catch (e) {
			aj().ReportError(e);
		}
		if (this.m_eulaLang == e) {
			if (r && r.data.content) {
				this.m_data = r.data;
			} else {
				this.m_bError = true;
			}
			this.m_OnReadyCallbacks.Dispatch(this.m_data);
		}
	}
}
