import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./79769.js";
export class H {
	m_nWebPageRequestID = 0;
	m_nActiveWebpageRequestID = 0;
	m_rgWebPageRequests = [];
	m_cbWebPageRequestsChanged = new a.lu();
	constructor() {
		Gn(this);
	}
	AddWebPageRequest(e, t) {
		let r = {
			requestid: ++this.m_nWebPageRequestID,
			strURL: e,
		};
		this.m_rgWebPageRequests.push(r);
		if (t || this.m_rgWebPageRequests.length == 1) {
			this.m_nActiveWebpageRequestID = r.requestid;
		}
		this.m_cbWebPageRequestsChanged.Dispatch();
	}
	RemoveWebPageRequest(e) {
		let t = this.m_rgWebPageRequests.findIndex((t) => t.requestid == e);
		return (
			t != -1 &&
			(this.m_rgWebPageRequests.splice(t, 1),
			e == this.m_nActiveWebpageRequestID &&
				(this.m_rgWebPageRequests.length != 0
					? this.m_rgWebPageRequests.length > t
						? (this.m_nActiveWebpageRequestID =
								this.m_rgWebPageRequests[t].requestid)
						: (this.m_nActiveWebpageRequestID =
								this.m_rgWebPageRequests[t - 1].requestid)
					: (this.m_nActiveWebpageRequestID = 0)),
			this.m_cbWebPageRequestsChanged.Dispatch(),
			true)
		);
	}
	UpdateWebPageRequest(e, t, r) {
		let n = this.m_rgWebPageRequests.findIndex((t) => t.requestid == e);
		return (
			n != -1 &&
			((this.m_rgWebPageRequests[n].strLastURL = t),
			(this.m_rgWebPageRequests[n].strURL = t),
			(this.m_rgWebPageRequests[n].strTitle = r),
			true)
		);
	}
	ReorderWebPageRequest(e, t) {
		this.m_rgWebPageRequests = ((e, t, r) => {
			const n = Array.from(e);
			const [i] = n.splice(t, 1);
			n.splice(r, 0, i);
			return n;
		})(this.m_rgWebPageRequests, e, t);
		this.m_cbWebPageRequestsChanged.Dispatch();
	}
	RemoveAllRequests() {
		this.m_nActiveWebpageRequestID = 0;
		this.m_rgWebPageRequests = [];
		this.m_cbWebPageRequestsChanged.Dispatch();
	}
	GetWebPageRequestsChangedCallbackList() {
		return this.m_cbWebPageRequestsChanged;
	}
	Set(e, t, r) {
		this.m_nActiveWebpageRequestID = e;
		this.m_nWebPageRequestID = t;
		this.m_rgWebPageRequests = r;
		this.m_cbWebPageRequestsChanged.Dispatch();
	}
	get web_requests() {
		return this.m_rgWebPageRequests;
	}
	get active_web_requestid() {
		return this.m_nActiveWebpageRequestID;
	}
	set active_web_requestid(e) {
		this.m_nActiveWebpageRequestID = e;
	}
}
Cg([i.sH], H.prototype, "m_nActiveWebpageRequestID", undefined);
Cg([i.XI], H.prototype, "AddWebPageRequest", null);
Cg([i.XI], H.prototype, "RemoveWebPageRequest", null);
Cg([i.XI], H.prototype, "UpdateWebPageRequest", null);
Cg([i.XI], H.prototype, "ReorderWebPageRequest", null);
Cg([i.XI], H.prototype, "RemoveAllRequests", null);
Cg([i.XI], H.prototype, "Set", null);
