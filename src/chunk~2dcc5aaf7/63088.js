var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./12176.js");
var a = require("./99104.js");
var s = require(/*webcrack:missing*/ "./42318.js");
var o = require(/*webcrack:missing*/ "./46108.js");
var l = require("./31930.js");
async function c(e, t = "SHA-256") {
	let r;
	var n;
	if (typeof e == "string") {
		n = e;
		r = new TextEncoder().encode(n).buffer;
	} else {
		r = e;
	}
	const i = await window.crypto.subtle.digest(t, r);
	a = i;
	return Array.prototype.map
		.call(new Uint8Array(a), (e) => ("00" + e.toString(16)).slice(-2))
		.join("");
	var a;
}
const m =
	window.addEventListener ||
	(require.g && require.g.addEventListener) ||
	(() => {});
let u;
let d = [];
let A = (e, t, r) =>
	d.push({
		error: e,
		cCallsitesToIgnore: t,
		strComponentStack: r,
	});
const p = true;
{
	const e = console.assert;
	console.assert = (t, r, ...n) => {
		if (!t) {
			const e = C();
			A(new Error(f(r, ...n)), 2, e);
		}
		e.apply(console, [t, r, ...n]);
	};
	const t = console.error;
	console.error = (e, ...r) => {
		const n = C();
		A(new Error(f(e, ...r)), 1, n);
		t.apply(console, [e, ...r]);
	};
	console.clogerror = (e, r, ...n) => {
		const i = C();
		A(new Error(f(r, ...n)), e + 1, i);
		t.apply(console, [r, ...n]);
	};
	m("error", (e) => {
		A(e.error, 0);
	});
	u = window.setTimeout(() => {
		d = [];
		A = () => {};
	}, 30000);
}
const g = {
	cCallsitesToIgnore: 0,
	bIncludeMessageInIdentifier: false,
};
const h = ["(localhost|127.0.0.1):(?!(80|443))", "chrome-extension://"];
function C() {
	try {
		const e = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		const t = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		if (
			e &&
			typeof e == "object" &&
			typeof e.ReactDebugCurrentFrame == "object" &&
			typeof e.ReactDebugCurrentFrame.getCurrentStack == "function"
		) {
			const t = e.ReactDebugCurrentFrame.getCurrentStack();
			if (typeof t == "string") {
				return t;
			}
		} else if (
			t &&
			typeof t == "object" &&
			typeof t.getCurrentStack == "function"
		) {
			const e = t.getCurrentStack();
			if (typeof e == "string") {
				return e;
			}
		}
	} catch (e) {}
}
class _ {
	m_strProduct;
	m_strVersion;
	m_transport = null;
	m_rgErrorQueue = [];
	m_sendTimer = null;
	m_bReportingPaused = false;
	m_pauseTimer = undefined;
	m_fnGetReportingInterval = T;
	m_bEnabled = true;
	m_bInitialized = false;
	constructor(e = true) {
		if (e) {
			d.forEach(({ error: e, cCallsitesToIgnore: t, strComponentStack: r }) =>
				this.ReportError(e, {
					cCallsitesToIgnore: t,
					strComponentStack: r,
				}),
			);
			A = (e, t, r) =>
				this.ReportError(e, {
					cCallsitesToIgnore: t,
					strComponentStack: r,
				});
		} else {
			A = () => {};
		}
		d = [];
		clearTimeout(u);
		window.setTimeout(() => {
			if (!this.m_bInitialized) {
				this.m_bEnabled = false;
				this.m_rgErrorQueue = [];
			}
		}, 30000);
	}
	Init(e, t, r, n = {}) {
		this.m_bInitialized = true;
		this.m_strProduct = e;
		this.m_strVersion = t;
		this.m_transport = r;
		if (n.fnGetReportingInterval) {
			this.m_fnGetReportingInterval = n.fnGetReportingInterval;
		}
		if (!this.m_bEnabled) {
			console.error(
				"Error reporting was initialized after being disabled, possibly dropping errors.",
			);
			this.m_bEnabled = true;
		}
		if (this.m_rgErrorQueue.length) {
			this.SendErrorReports(this.m_rgErrorQueue);
			this.m_rgErrorQueue = [];
		}
	}
	async ReportError(e, t) {
		if (!e) {
			console.warn(
				"Failed to report error: ReportError() was called without an error to report.",
			);
			return null;
		}
		try {
			const r = {
				...g,
				...t,
			};
			if (!this.m_bEnabled) {
				return null;
			}
			0;
			const n = await (function (e, t) {
				try {
					if (e.stack && e.stack.match(b)) {
						return (async function (e, t) {
							const { cCallsitesToIgnore: r, bIncludeMessageInIdentifier: n } =
								t;
							const i = e.stack?.split("\n") ?? [];
							let a = v(i.filter((e) => !!e.match(b))[r]);
							if (n) {
								a = `${a} ${e.message}`;
							}
							const s = i
								.map((e) => {
									const t = e.match(/(.*)\((.*):(\d+):(\d+)\)/);
									if (!t) {
										return e;
									}
									if (t.length === 5) {
										const [e, r, n, i, a] = t;
										const s = parseInt(i);
										const o = parseInt(a);
										if (!isNaN(s) && !isNaN(o)) {
											return [r, n, s, o];
										}
									}
									return e;
								})
								.filter((e) => !!e);
							return {
								identifier: a,
								identifierHash: await M(a),
								message: s,
							};
						})(e, t);
					} else if (e.stack && e.stack.match(y)) {
						return (async function (e, t) {
							const { cCallsitesToIgnore: r, bIncludeMessageInIdentifier: n } =
								t;
							const i = e.stack?.split("\n") ?? [];
							let a = v(i.filter((e) => !!e.match(y))[r]);
							if (n) {
								a = `${a} ${e.message}`;
							}
							const s = i
								.map((e) => {
									const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
									if (!t) {
										return e;
									}
									if (t.length === 5) {
										const [e, r, n, i, a] = t;
										const s = parseInt(i);
										const o = parseInt(a);
										if (!isNaN(s) && !isNaN(o)) {
											return [r, n, s, o];
										}
									}
									return e;
								})
								.filter((e) => !!e);
							return {
								identifier: a,
								identifierHash: await M(a),
								message: [e.message, ...s],
							};
						})(e, t);
					} else if (e.stack && e.stack.match(S)) {
						return (async function (e, t) {
							const { bIncludeMessageInIdentifier: r, cCallsitesToIgnore: n } =
								t;
							const i = e.stack?.split("\n") ?? [];
							const a = i[n];
							const s = a.split("/");
							let o = s[s.length - 1];
							if (a.indexOf("@") > -1) {
								o = a.split("@")[0] + "@" + o;
							}
							if (r) {
								o = `${o} ${e.message}`;
							}
							const l = i
								.map((e) => {
									const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
									if (!t) {
										return e;
									}
									if (t.length === 5) {
										const [e, r, n, i, a] = t;
										const s = parseInt(i);
										const o = parseInt(a);
										if (!isNaN(s) && !isNaN(o)) {
											return [r, n, s, o];
										}
									}
									return e;
								})
								.filter((e) => !!e);
							return {
								identifier: o,
								identifierHash: await M(o),
								message: [e.message, ...l],
							};
						})(e, t);
					} else {
						if (!B) {
							console.warn(
								"Error reporter does not know how to parse generated stack:",
							);
							console.warn(e.stack);
							B = true;
						}
						return null;
					}
				} catch (e) {
					console.warn(`Failed to normalize error stack: ${e}`);
					return null;
				}
			})(e, r);
			if (n) {
				if (r.strComponentStack) {
					n.strComponentStack = r.strComponentStack;
				}
				this.SendErrorReport(n);
				return n;
			} else {
				return null;
			}
		} catch (e) {
			console.log(`Failed to report error: ${e}`);
			return null;
		}
	}
	PauseReportingForDuration(e) {
		this.PauseReporting();
		this.m_pauseTimer = window.setTimeout(() => this.ResumeReporting(), e);
	}
	PauseReporting() {
		this.m_bReportingPaused = true;
		window.clearTimeout(this.m_pauseTimer);
	}
	ResumeReporting() {
		this.m_bReportingPaused = false;
		window.clearTimeout(this.m_pauseTimer);
		this.ScheduleSend();
	}
	BIsBlacklisted(e) {
		for (let t of e.message) {
			let r = JSON.stringify(t);
			for (let t of h) {
				const n = new RegExp(t);
				if (r.match(n)) {
					console.warn("Report", e, "matched regex", t);
					return true;
				}
			}
		}
		return false;
	}
	SendErrorReport(e) {
		if (!this.BIsBlacklisted(e)) {
			if (this.m_transport) {
				this.QueueReport(e);
			} else {
				this.m_rgErrorQueue.push(e);
			}
		}
	}
	QueueReport(e) {
		this.m_rgErrorQueue.push(e);
		if (!this.m_bReportingPaused) {
			this.ScheduleSend();
		}
	}
	ScheduleSend() {
		this.m_sendTimer ||= window.setTimeout(() => {
			this.SendErrorReports(this.m_rgErrorQueue);
			this.m_rgErrorQueue = [];
			this.m_sendTimer = null;
		}, this.m_fnGetReportingInterval());
	}
	SendErrorReports(e) {
		if (!e || !e.length) {
			return;
		}
		const t = i.w.Init(a.Gf);
		const r = e.reduce((e, t) => {
			if (e[t.identifier]) {
				e[t.identifier].count++;
			} else {
				e[t.identifier] = {
					report: t,
					count: 1,
				};
			}
			return e;
		}, {});
		const n = Object.keys(r).map((e) => {
			const { report: t, count: n } = r[e];
			const i = new a.tF();
			i.set_count(n);
			i.set_identifier(t.identifier + " " + t.identifierHash);
			i.set_message(JSON.stringify(t.message));
			if (t.strComponentStack) {
				i.set_context(
					JSON.stringify({
						componentStack: t.strComponentStack,
					}),
				);
			}
			return i;
		});
		t.Body().set_product(this.m_strProduct);
		t.Body().set_version(this.m_strVersion);
		t.Body().set_errors(n);
		a._5.ReportClientError(this.m_transport, t);
	}
	get version() {
		return this.m_strVersion;
	}
	get product() {
		return this.m_strProduct;
	}
	get reporting_enabled() {
		return p;
	}
}
function f(e, ...t) {
	if (typeof e == "string" && t.length === 0) {
		return e;
	}
	return [e, ...t]
		.map((e) => {
			try {
				return String(e);
			} catch (e) {
				return "[Stringify Error]";
			}
		})
		.join(", ");
}
const b = /^\s*at .*(\S+:\d+|\(native\))/m;
const y = /(^|@)\S+:\d+/;
const S = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
let w;
let B = false;
function v(e) {
	return (function (e) {
		const t = "https://";
		const r = e.indexOf(t);
		if (r === -1) {
			return e;
		}
		const n = e.indexOf("/", r + t.length);
		if (n === -1) {
			return e;
		} else {
			return e.slice(0, r) + e.slice(n);
		}
	})(
		(function (e) {
			const t = e.lastIndexOf("?");
			if (t === -1) {
				return e;
			}
			const r = e.indexOf(":", t);
			if (r === -1) {
				return e;
			} else {
				return e.slice(0, t) + e.slice(r);
			}
		})(e),
	);
}
export const aj = () => {
	if (!w) {
		E(new _());
	}
	return w;
};
const E = (e) => {
	w = e;
	s.tH.InstallErrorReportingStore(w);
	i.lI.InstallErrorReportingStore(w);
	o.A0.InstallErrorReportingStore(w);
	l.U.InstallErrorReportingStore(w);
};
async function M(e) {
	try {
		return (await c(e)).slice(0, 16);
	} catch (e) {
		return "";
	}
}
function T() {
	return 10000;
}
