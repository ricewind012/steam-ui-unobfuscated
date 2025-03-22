var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./18057.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require(/*webcrack:missing*/ "./49519.js");
var c = require("./55700.js");
var m = require(/*webcrack:missing*/ "./93960.js");
var u = require(/*webcrack:missing*/ "./72476.js");
var d = require("./87935.js");
var A = require(/*webcrack:missing*/ "./83599.js");
var p = require("./79883.js");
var g = require("./18869.js");
var h = require("./34792.js");
var C = require("./93966.js");
var _ = require("./18052.js");
const f = ["data:text/html"];
const b = new A.wd("BrowserBackstack");
class y {
	m_lastActiveTab = "store";
	m_rootTabURLs = {
		store: "StoreFrontPage",
		community: "CommunityFrontPage",
		me: "SteamIDMyProfile",
	};
	m_lastActiveTabURLs = {};
	m_browser;
	m_browserHistory;
	m_lastLocation;
	m_history;
	m_tsWaitingForBrowserChange = undefined;
	m_bExpectImportantReplace = false;
	m_bRouterChangeTriggeredBySync = false;
	m_URLRequested = null;
	m_URL = "";
	m_loadErrorCode = undefined;
	m_loadErrorURL = undefined;
	m_loadErrorDesc = undefined;
	m_bLoading = false;
	m_strTitle = "";
	m_pageSecurity = null;
	m_tabbedBrowserStore;
	constructor(e, t) {
		(0, a.Gn)(this);
		this.m_browser = e;
		this.m_history = t;
		this.m_lastLocation = t.location;
		this.m_tabbedBrowserStore = new p.H();
		e.on("history-changed", (e) => this.OnHistoryChanged(e));
		e.on("start-request", this.OnStartRequest);
		e.on("start-loading", this.OnStartLoad);
		e.on("finished-request", this.OnFinishedRequest);
		e.on("page-security", this.OnPageSecurity);
		e.on("set-title", this.OnSetTitle);
		e.on("new-tab", this.OnNewTab);
		t.listen((e, t) => this.SyncWithNewRouterEvent(e, t));
	}
	OnHistoryChanged(e) {
		b.Debug("OnHistoryChanges", JSON.stringify(e?.entries));
		this.SyncWithNewBrowserHistory(e);
	}
	UpdateActiveTab(e) {
		const t = this.GetTabForURL(e);
		if (t !== "ignore") {
			if (t !== "maintain") {
				this.m_lastActiveTab = t;
			}
			this.m_lastActiveTabURLs[this.m_lastActiveTab] = e;
		}
	}
	OnStartRequest(e) {
		this.UpdateActiveTab(e);
		this.m_bLoading = true;
		this.m_URLRequested = e;
		this.m_loadErrorCode = null;
		this.m_loadErrorURL = null;
		this.m_loadErrorDesc = null;
	}
	OnStartLoad(e, t) {
		this.m_URLRequested = e;
	}
	OnFinishedRequest(e, t) {
		this.m_strTitle = t;
		this.m_URL = e;
		this.m_bLoading = false;
	}
	OnPageSecurity(e, t) {
		this.m_pageSecurity = t;
	}
	OnSetTitle(e) {
		this.m_strTitle = e;
	}
	OnNewTab(e, t) {
		this.m_tabbedBrowserStore.AddWebPageRequest(e, t);
	}
	SyncWithNewBrowserHistory(e) {
		b.Debug("Browser history changed: ", e);
		const t = E(this.m_lastLocation);
		if (this.m_browserHistory) {
			const r =
				this.m_tsWaitingForBrowserChange !== undefined
					? Math.floor(performance.now() - this.m_tsWaitingForBrowserChange)
					: undefined;
			const n = this.BIsWaitingForHistoryCallback();
			const i = e.index - this.m_browserHistory.index;
			b.Debug(
				`Browser history - ${n ? "expected " : ""}change.  Delta: ${i}.${r ? `  ${r}ms since navigation.` : ""}`,
			);
			if (n) {
				let t =
					e.index !== this.m_browserHistory.index ||
					e.entries.length !== this.m_browserHistory.entries.length;
				if (
					!t &&
					this.m_bExpectImportantReplace &&
					e.index === this.m_browserHistory.index &&
					e.entries.length === this.m_browserHistory.entries.length &&
					e.entries[e.index]?.url !==
						this.m_browserHistory.entries[this.m_browserHistory.index]?.url
				) {
					t = true;
					this.m_bExpectImportantReplace = false;
				}
				if (t) {
					this.m_tsWaitingForBrowserChange = undefined;
				}
				if (i < -1) {
					this.m_bRouterChangeTriggeredBySync = true;
					this.m_history.go(i + 1);
					b.Debug(
						`Moved history back by an additional ${i + 1} to account for browser delta.`,
					);
				} else if (i > 1) {
					this.m_bRouterChangeTriggeredBySync = true;
					this.m_history.go(i - 1);
					b.Debug(
						`Moved history back by an additional ${i - 1} to account for browser delta.`,
					);
				} else {
					b.Debug(
						"Did not need to update router history - this was an expected change.",
					);
				}
			} else if (t) {
				const t = (function (e, t) {
					if (e.index === t.index) {
						return "REPLACE";
					}
					if (e.entries.length !== t.entries.length) {
						return "PUSH";
					}
					if (t.index !== e.index) {
						let r = t.entries[e.index];
						let n = e.entries[e.index];
						if (r.url != n.url) {
							return "PUSH";
						}
					}
					0;
					return "POP";
				})(e, this.m_browserHistory);
				b.Debug(`Processing "${t}" from browser history change.`);
				switch (t) {
					case "POP":
						const t = e.index - this.m_browserHistory.index;
						this.m_bRouterChangeTriggeredBySync = true;
						this.m_history.go(t);
						break;
					case "PUSH":
						const { state: r, ...n } = this.m_history.location;
						const i = r && typeof r == "object" ? r : {};
						const a = e.entries[e.index].url;
						const s = this.m_history.entries[this.m_history.length - 1]?.state;
						if (a == s?.strURL && s?.bExternal) {
							b.Warning("Skipping duplicate url", a, s);
						} else {
							this.m_bRouterChangeTriggeredBySync = true;
							this.m_history.push({
								...n,
								state: {
									...i,
									strURL: a,
									bExternal: false,
								},
							});
						}
				}
			} else {
				b.Debug(
					"Browser history updated while browser is not active. Ignoring history sync.",
				);
			}
		}
		this.m_browserHistory = e;
		const r = e.entries[e.index].url;
		if (!r.startsWith(`data:text/html,%3Cbody%3E%3C%2Fbody%3E%3C!--${M}:`)) {
			this.m_URL = r;
		}
		if (this.m_history.index !== this.m_browserHistory.index) {
			if (this.m_history.length != this.m_browserHistory.entries.length) {
				b.Warning(
					`Router history length != browser history length! ${this.m_history.length} != ${this.m_browserHistory.entries.length}.`,
					this.m_history,
					this.m_browserHistory,
				);
				b.Debug(JSON.stringify(this.m_history?.entries.map((e) => e.state)));
				b.Debug(JSON.stringify(this.m_browserHistory.entries));
			}
			b.Warning(
				`Router history index != browser history index! ${this.m_history.index} != ${this.m_browserHistory.index}.`,
			);
		}
	}
	SyncWithNewRouterEvent(e, t) {
		b.Debug("Router history changed: ", t, e, this.m_history);
		b.Debug(JSON.stringify(this.m_history?.entries));
		const r = this.m_bRouterChangeTriggeredBySync;
		this.m_bRouterChangeTriggeredBySync = false;
		const n = E(e);
		switch (t) {
			case "POP":
				if (r) {
					break;
				}
				const t = this.m_history.entries.findIndex(
					({ key: e }) => e === this.m_lastLocation.key,
				);
				const i = this.m_history.index - t;
				if (i === 0) {
					break;
				}
				if (Math.abs(i) > 1) {
					b.Error(
						`A POP event with delta ${i} was found, but deltas resulting in more than one step are likely a mistake and will not be handled correctly by the browser.`,
					);
				}
				this.StartWaitingForHistoryCallback();
				if (i > 0) {
					b.Debug("Sending browser forward");
					this.m_browser.GoForward();
				} else {
					b.Debug("Sending browser back");
					this.m_browser.GoBack();
				}
				break;
			case "PUSH":
				if (!n) {
					this.StartWaitingForHistoryCallback();
					this.LoadURL(T(`${e.key}:${e.pathname}`));
				}
				break;
			case "REPLACE":
				if (k(this.m_browserHistory) && !n) {
					this.StartWaitingForHistoryCallback();
					this.LoadURL(T(`${e.key}:${e.pathname}`));
				}
		}
		this.m_lastLocation = e;
	}
	ActivateTab(e) {
		if (
			e === this.m_lastActiveTab &&
			(0, l.B6)(this.m_history.location.pathname, {
				path: i.BV.Browser(),
			})
		) {
			this.ShowURL(d.B7.ResolveURL(this.m_rootTabURLs[e]));
		} else {
			const t =
				this.m_lastActiveTabURLs[e] || d.B7.ResolveURL(this.m_rootTabURLs[e]);
			this.UpdateActiveTab(t);
			this.ShowURL(t);
		}
	}
	GetTabForURL(e) {
		if (e.startsWith(u.TS.STORE_BASE_URL)) {
			return "store";
		}
		const t = d.B7.ResolveURL("SteamIDMyProfile");
		const r = t?.endsWith("/") ? t.slice(0, t.length - 1) : t;
		if (e === r || [`${r}/`, `${r}?`, `${r}#`].some((t) => e.includes(t))) {
			return "me";
		} else if (e.startsWith(u.TS.COMMUNITY_BASE_URL)) {
			return "community";
		} else if (R(e)) {
			return "ignore";
		} else {
			return "maintain";
		}
	}
	LoadURL(e) {
		if (k(this.m_browserHistory)) {
			this.m_bExpectImportantReplace = true;
			this.m_browser.ReplaceURL(e);
		} else {
			this.m_browser.LoadURL(e);
		}
	}
	ShowURL(e, t) {
		b.Debug("ShowURL", e, t);
		(0, g.We)(this.m_history, i.BV.Browser(), {
			...t,
			state: {
				bExternal: true,
				strURL: e,
			},
		});
		this.StartWaitingForHistoryCallback();
		this.LoadURL(e);
	}
	Reload() {
		this.m_browser.Reload();
	}
	GetLastActiveTab() {
		return this.m_lastActiveTab;
	}
	get DisplayURL() {
		if (this.m_bLoading) {
			return this.m_URLRequested;
		} else {
			return this.m_URL;
		}
	}
	get PageSecurity() {
		return this.m_pageSecurity;
	}
	get Loading() {
		return this.m_bLoading;
	}
	get Title() {
		return this.m_strTitle;
	}
	get LoadErrorCode() {
		return this.m_loadErrorCode;
	}
	get LoadErrorURL() {
		return this.m_loadErrorURL;
	}
	get LoadErrorDescription() {
		return this.m_loadErrorDesc;
	}
	get TabbedBrowserStore() {
		return this.m_tabbedBrowserStore;
	}
	StartWaitingForHistoryCallback() {
		this.m_tsWaitingForBrowserChange = performance.now();
	}
	BIsWaitingForHistoryCallback() {
		return (
			this.m_tsWaitingForBrowserChange !== undefined &&
			performance.now() - this.m_tsWaitingForBrowserChange < 2000
		);
	}
}
let S;
export function no() {
	const e = (0, l.W5)(i.BV.Browser());
	const t = X1;
	return (0, s.q3)(() =>
		S
			? {
					activeTab: e ? S.GetLastActiveTab() : null,
					activateTab: S.ActivateTab,
					reload: S.Reload,
					pageSecurity: S.PageSecurity,
					displayURL: S.DisplayURL,
					loading: S.Loading,
					showURL: t,
					tabbedBrowserStore: S.TabbedBrowserStore,
				}
			: {
					activeTab: null,
					activateTab: () => {
						b.Error(
							"Attempted to activate main window browser tab without a browser manager available!",
						);
					},
					pageSecurity: null,
					displayURL: null,
					loading: false,
					showURL: t,
					tabbedBrowserStore: null,
				},
	);
}
export function X1(e, t) {
	if (!S) {
		b.Error(
			"Attempted to show a URL in the main window browser without a browser manager available!",
		);
	}
	const [r, n] = h.rV.GetClientSetting("small_mode");
	if (r) {
		n(false);
	}
	return S?.ShowURL(e, t);
}
export function Ff(e) {
	if (!S) {
		b.Error(
			"Attempted to show a URL in the main window browser without a browser manager available!",
		);
	}
	return S.TabbedBrowserStore.AddWebPageRequest(e, true);
}
export function TO(e) {
	const [t, r] = (0, c.v)(e, "SteamBrowser", {
		bOnlyAllowTrustedPopups: false,
		strURL: _.p,
	});
	const n = (0, i.jB)();
	(0, o.useEffect)(() => {
		if (t) {
			S = new y(t, n);
			window.MainWindowBrowserManager = S;
		}
	}, [t, n]);
	const a = (0, o.useCallback)(() => S?.BIsWaitingForHistoryCallback(), []);
	(0, C.VM)(a);
	return [t, r];
}
function E(e) {
	return !!(0, l.B6)(e.pathname, {
		path: i.BV.Browser(),
	});
}
(0, n.Cg)([a.sH], y.prototype, "m_lastActiveTab", undefined);
(0, n.Cg)([a.sH], y.prototype, "m_URLRequested", undefined);
(0, n.Cg)([a.sH], y.prototype, "m_URL", undefined);
(0, n.Cg)([a.sH], y.prototype, "m_loadErrorCode", undefined);
(0, n.Cg)([a.sH], y.prototype, "m_loadErrorURL", undefined);
(0, n.Cg)([a.sH], y.prototype, "m_loadErrorDesc", undefined);
(0, n.Cg)([a.sH], y.prototype, "m_bLoading", undefined);
(0, n.Cg)([a.sH], y.prototype, "m_strTitle", undefined);
(0, n.Cg)([a.sH], y.prototype, "m_pageSecurity", undefined);
(0, n.Cg)([a.XI.bound], y.prototype, "OnStartRequest", null);
(0, n.Cg)([a.XI.bound], y.prototype, "OnStartLoad", null);
(0, n.Cg)([a.XI.bound], y.prototype, "OnFinishedRequest", null);
(0, n.Cg)([a.XI.bound], y.prototype, "OnPageSecurity", null);
(0, n.Cg)([a.XI.bound], y.prototype, "OnSetTitle", null);
(0, n.Cg)([a.XI.bound], y.prototype, "OnNewTab", null);
(0, n.Cg)([a.XI], y.prototype, "SyncWithNewBrowserHistory", null);
(0, n.Cg)([m.o], y.prototype, "ActivateTab", null);
(0, n.Cg)([m.o], y.prototype, "ShowURL", null);
(0, n.Cg)([m.o], y.prototype, "Reload", null);
const M = "tracking";
function T(e) {
	return `data:text/html,%3Cbody%3E%3C%2Fbody%3E%3C!--${M}:${e}--%3E`;
}
function R(e) {
	return f.some((t) => e.startsWith(t));
}
function k(e) {
	return (
		e?.entries.length === 1 &&
		R(e.entries[0].url) &&
		!e.entries[0].url.includes(M)
	);
}
