var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require("./67338.js");
var l = require("./63367.js");
var c = require("./51297.js");
var m = require(/*webcrack:missing*/ "./72476.js");
var u = require(/*webcrack:missing*/ "./43691.js");
export function Pb() {
	return u.TS.ON_STEAMOS || (0, m.CI)();
}
class A {
	constructor() {
		(0, a.Gn)(this);
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
				const r = await fetch("/systemreports/" + t.report_id);
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
(0, n.Cg)([a.sH], A.prototype, "m_bIsVisible", undefined);
(0, n.Cg)([a.sH], A.prototype, "m_state", undefined);
(0, n.Cg)([a.XI], A.prototype, "Reset", null);
export const Ty = new A();
export function $8() {
	return [
		(0, s.q3)(() => Ty.bVisible),
		i.useCallback(() => {
			Ty.Hide();
		}, []),
	];
}
export function cp() {
	const e = (0, s.q3)(() => Ty.state);
	(0, o._)(e);
	return e;
}
window.SystemReportStore = Ty;
