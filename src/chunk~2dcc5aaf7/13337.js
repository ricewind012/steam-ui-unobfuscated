var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./12176.js");
var a = require("./54946.js");
var s = require(/*webcrack:missing*/ "./79769.js");
var o = require(/*webcrack:missing*/ "./52451.js");
export function mb(e) {
	let [t, r] = n.useState(e.GetSubscriberAgreementInfo());
	(0, o.hL)(e.SubscriberAgreementInfoChangedCallbacks, r);
	return t;
}
export const Yq = new (class {
	m_cm;
	m_SubscriberAgreementInfo;
	m_PromiseLoading;
	m_SubscriberAgreementInfoChangedCallbacks = new s.lu();
	constructor() {}
	Init(e) {
		this.m_cm = e;
	}
	get CMInterface() {
		return this.m_cm;
	}
	GetSubscriberAgreementInfo() {
		this.EnsureLoaded();
		return this.m_SubscriberAgreementInfo;
	}
	get SubscriberAgreementInfoChangedCallbacks() {
		return this.m_SubscriberAgreementInfoChangedCallbacks;
	}
	async AcceptSSA(e) {
		const t = i.w.Init(a.Nr);
		t.Body().set_agreement_type(e);
		t.Body().set_time_signed_utc(Math.floor(Date.now() / 1000));
		try {
			await a.xt.AcceptSSA(this.m_cm.GetServiceTransport(), t);
			this.m_PromiseLoading = this.LoadSubscriberAgreementInfo();
		} catch (e) {}
	}
	async LoadSubscriberAgreementInfo() {
		const e = i.w.Init(a.bn);
		try {
			let t = await a.xt.GetTimeSSAAccepted(this.m_cm.GetServiceTransport(), e);
			if (t.GetEResult() == 1) {
				this.m_SubscriberAgreementInfo = {
					time_ssa_accepted: t.Body().time_ssa_accepted(),
					time_ssa_updated: t.Body().time_ssa_updated(),
				};
			}
		} catch (e) {
			this.m_SubscriberAgreementInfo = undefined;
		}
		this.m_SubscriberAgreementInfo ||= {
			time_ssa_accepted: 0,
			time_ssa_updated: 0,
		};
		this.m_SubscriberAgreementInfoChangedCallbacks.Dispatch(
			this.m_SubscriberAgreementInfo,
		);
		return this.m_SubscriberAgreementInfo;
	}
	EnsureLoaded() {
		this.m_PromiseLoading ||= this.LoadSubscriberAgreementInfo();
	}
})();
window.subscriberAgreementStore = Yq;
