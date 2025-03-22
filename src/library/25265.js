var r = require(/*webcrack:missing*/ "./34629.js");
var i = require("./12176.js");
require("./1691.js");
var s = require(/*webcrack:missing*/ "./89193.js");
export class $ {
	constructor() {
		(0, s.Gn)(this);
	}
	m_mapCallbacks = new Map();
	m_rgRegisteredEMsgs = [];
	m_mapServiceMethodHandlers = new Map();
	m_rgRegisteredServiceMethodHandlers = [];
	m_ErrorReportingStore;
	InstallErrorReportingStore(e) {
		this.m_ErrorReportingStore = e;
	}
	DispatchMsgToHandlers(e, t) {
		let n = e.GetEMsg();
		if (n == 146) {
			let n = e.Hdr().target_job_name();
			if (n) {
				let r = this.m_mapServiceMethodHandlers.get(n);
				if (r) {
					this.DEBUG_LogMessageDispatch(e, r[0]);
					for (let i of r) {
						try {
							i.invoke(e, t);
						} catch (e) {
							if (e instanceof Error && this.m_ErrorReportingStore) {
								this.m_ErrorReportingStore.ReportError(e);
							} else {
								console.error(
									`MessageHandlers failed to dispatch message to handler (${n}): `,
									e,
								);
							}
						}
					}
					return true;
				}
			}
		} else {
			let t = this.m_mapCallbacks.get(n);
			if (t) {
				this.DEBUG_LogMessageDispatch(e, t[0]);
				for (let n of t) {
					try {
						n.invoke(e);
					} catch (e) {
						if (e instanceof Error && this.m_ErrorReportingStore) {
							this.m_ErrorReportingStore.ReportError(e);
						} else {
							console.error(
								"MessageHandlers failed to dispatch message to handler: ",
								e,
							);
						}
					}
				}
				return true;
			}
		}
		return false;
	}
	DEBUG_LogMessageDispatch(e, t) {
		0;
	}
	get emsg_list() {
		return this.m_rgRegisteredEMsgs;
	}
	get servicemethod_list() {
		return this.m_rgRegisteredServiceMethodHandlers;
	}
	AddCallback(e, t, n) {
		let r = this.m_mapCallbacks.get(e);
		if (!r) {
			r = [];
			this.m_mapCallbacks.set(e, r);
			this.m_rgRegisteredEMsgs.push(e);
		}
		r.push({
			invoke: n,
			msgClass: t,
		});
		return {
			invoke: n,
			unregister: () => {
				let t = this.m_mapCallbacks.get(e);
				if (t) {
					for (let e = 0; e < t.length; e++) {
						if (t[e].invoke == n) {
							t.splice(e, 1);
							e--;
						}
					}
				}
			},
		};
	}
	AddServiceMethodHandler(e, t) {
		let n = (n, r) => {
			let s = i.w.InitFromMsg(e.request, n);
			let o = i.w.Init(e.response, 147);
			let a = t(s, o);
			let c = (e) => {
				o.Hdr().set_eresult(e);
				r(o);
			};
			if (a instanceof Promise) {
				a.then(c).catch(() => {
					c(2);
				});
			} else {
				c(a);
			}
		};
		if (this.m_mapServiceMethodHandlers.has(e.name)) {
			console.error("Duplicate registration for method " + e.name);
		} else {
			this.m_mapServiceMethodHandlers.set(e.name, [
				{
					invoke: n,
					msgClass: e.request,
				},
			]);
			this.m_rgRegisteredServiceMethodHandlers.push(e.name);
		}
		return {
			invoke: n,
			unregister: () => {
				let t = this.m_mapServiceMethodHandlers.get(e.name);
				if (t) {
					for (let e = 0; e < t.length; e++) {
						if (t[e].invoke == n) {
							t.splice(e, 1);
							e--;
						}
					}
				}
			},
		};
	}
	AddServiceNotificationHandler(e, t) {
		let n = (n, r) => {
			let s = i.w.InitFromMsg(e.request, n);
			t(s);
		};
		let r = this.m_mapServiceMethodHandlers.get(e.name);
		if (!r) {
			r = [];
			this.m_mapServiceMethodHandlers.set(e.name, r);
			this.m_rgRegisteredServiceMethodHandlers.push(e.name);
		}
		r.push({
			invoke: n,
			msgClass: e.request,
		});
		return {
			invoke: n,
			unregister: () => {
				let t = this.m_mapServiceMethodHandlers.get(e.name);
				if (t) {
					for (let e = 0; e < t.length; e++) {
						if (t[e].invoke == n) {
							t.splice(e, 1);
							e--;
						}
					}
				}
			},
		};
	}
	RegisterBaseEMessageHandler(e, t) {
		return this.AddCallback(e, undefined, t);
	}
	RegisterEMessageHandler(e, t, n) {
		return this.AddCallback(e, t, (e) => {
			n(i.w.InitFromMsg(t, e));
		});
	}
	RegisterEMessageAction(e, t, n) {
		return this.AddCallback(e, t, (e) => {
			(0, s.h5)(() => {
				n(i.w.InitFromMsg(t, e));
			});
		});
	}
	RegisterServiceNotificationHandler(e, t) {
		return this.AddServiceNotificationHandler(e, t);
	}
	RegisterServiceNotificationHandlerAction(e, t) {
		return this.AddServiceNotificationHandler(e, (e) => {
			let n;
			(0, s.h5)(() => {
				n = t(e);
			});
			return n;
		});
	}
	RegisterServiceMethodHandler(e, t) {
		return this.AddServiceMethodHandler(e, t);
	}
	RegisterServiceMethodHandlerAction(e, t) {
		return this.AddServiceMethodHandler(e, (e, n) => {
			let r;
			(0, s.h5)(() => {
				r = t(e, n);
			});
			return r;
		});
	}
}
(0, r.Cg)([s.sH], $.prototype, "m_rgRegisteredEMsgs", undefined);
(0, r.Cg)(
	[s.sH],
	$.prototype,
	"m_rgRegisteredServiceMethodHandlers",
	undefined,
);
