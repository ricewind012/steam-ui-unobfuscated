import { Cg } from "./34629.js";
import i from "./63696.js";
import a, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import { _ } from "./67338.js";
import l from "./63367.js";
import c from "./51297.js";
import { CI } from "./72476.js";
import u from "./43691.js";
export function Pb() {
	return u.TS.ON_STEAMOS || CI();
}
class A {
	constructor() {
		Gn(this);
	}
	m_bIsVisible = false;
	m_state = {
		bRunning: false,
		bSubmitting: false,
		eResult: 2,
	};
	get bVisible() {
		return this.m_bIsVisible;
	}
	get state() {
		return this.m_state;
	}
	async Init() {
		const e = "open/systemreport";
		if (Pb()) {
			l.Dt.RegisterForRunSteamURL(7, e, () => this.OnShowSystemReport());
			l.Dt.RegisterForRunSteamURL(4, e, () => this.OnShowSystemReport());
		}
		this.Reset();
	}
	OnShowSystemReport() {
		this.Show();
	}
	async Show() {
		if (this.m_state.bRunning) {
			this.m_bIsVisible = true;
		} else {
			this.Reset();
			this.m_bIsVisible = true;
			const e = await SteamClient.System.Report.GenerateSystemReport();
			this.m_state.eResult = e.result;
			if (this.m_state.eResult == 1) {
				const t = c.tm.deserializeBinary(e.reply).toObject();
				const r = await fetch(`/systemreports/${t.report_id}`);
				if (r.ok) {
					const e = await r.text();
					this.m_state.sReportId = t.report_id;
					this.m_state.sText = e;
				} else {
					this.m_state.eResult = 2;
				}
			}
			this.m_state.bRunning = false;
		}
	}
	Reset() {
		this.m_state.bRunning = false;
		this.m_state.bSubmitting = false;
		this.m_state.eResult = 1;
		this.m_state.sText = null;
	}
	Hide() {
		this.m_bIsVisible = false;
	}
	async Submit(e) {
		this.m_state.bSubmitting = true;
		const t = await SteamClient.System.Report.Submit(e);
		this.m_state.bSubmitting = false;
		return t.result;
	}
	async SaveToDesktop(e) {
		return (await SteamClient.System.Report.SaveToDesktop(e)).result;
	}
}
Cg([a.sH], A.prototype, "m_bIsVisible", undefined);
Cg([a.sH], A.prototype, "m_state", undefined);
Cg([a.XI], A.prototype, "Reset", null);
export const Ty = new A();
export function $8() {
	return [
		q3(() => Ty.bVisible),
		i.useCallback(() => {
			Ty.Hide();
		}, []),
	];
}
export function cp() {
	const e = q3(() => Ty.state);
	_(e);
	return e;
}
window.SystemReportStore = Ty;
