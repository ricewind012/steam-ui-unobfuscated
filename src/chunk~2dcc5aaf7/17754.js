var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require(/*webcrack:missing*/ "./79769.js");
var o = require("./37499.js");
var l = require(/*webcrack:missing*/ "./89193.js");
var c = require(/*webcrack:missing*/ "./53807.js");
export function iT(e, t) {
	return i.useCallback(() => {
		let r = e.current;
		return !r || (r.BTryGoBack() || t(), true);
	}, [e, t]);
}
export function wB(e, t, r) {
	let n = i.useRef(undefined);
	let s = i.useRef(undefined);
	s.current = r;
	let o = i.useCallback(() => {
		if (s.current) {
			s.current();
		}
	}, [s]);
	return [
		(0, a.QS)(
			(r) => {
				if (r) {
					n.current = new d(r, e, t, o);
					return () => n.current.Close();
				}
			},
			[n, e, t],
		),
		n,
	];
}
class d {
	m_browser;
	m_unAppID;
	m_rgRegisteredProtocols = [];
	m_hProtocolCallback;
	m_id = 0;
	m_URLRequested = null;
	m_URL = "";
	m_loadErrorCode = undefined;
	m_loadErrorURL = undefined;
	m_loadErrorDesc = undefined;
	m_bLoading = false;
	m_strTitle = "";
	m_pageSecurity = null;
	m_bCanGoBackward = false;
	m_bCanGoForward = false;
	m_rgFavIconURLs = [];
	m_onStartRequestCallbacks = new s.lu();
	m_onStartLoadingCallbacks = new s.lu();
	m_onFinishedRequestCallbacks = new s.lu();
	m_onBeforeCloseCallbacks = new s.lu();
	m_onNewTabCallbacks = new s.lu();
	m_rgSteamURLCallbacks = [];
	constructor(e, t, r, n) {
		(0, l.Gn)(this);
		this.m_browser = e;
		this.m_id = r;
		this.m_unAppID = t;
		this.m_onBeforeCloseCallbacks.Register(n);
		this.m_hProtocolCallback = o.Q.GetOverlayBrowserProtocolCallback().Register(
			this.OnOverlayBrowserProtocolRegistration,
		);
		this.InitBrowser();
		this.SendOverlayProtocols();
	}
	Close() {
		if (this.m_hProtocolCallback) {
			this.m_hProtocolCallback.Unregister();
		}
	}
	InitBrowser() {
		this.m_browser.SetSteamURLCallback(this.OnSteamURL);
		this.m_browser.on("blocked-request", this.OnBlockedRequest);
		this.m_browser.on("before-close", this.OnBeforeClose);
		this.m_browser.on("start-request", this.OnStartRequest);
		this.m_browser.on("start-loading", this.OnStartLoad);
		this.m_browser.on("finished-request", this.OnFinishedRequest);
		this.m_browser.on("history-changed", this.OnHistoryChanged);
		this.m_browser.on(
			"can-go-back-forward-changed",
			this.OnCanGoBackForwardChanged,
		);
		this.m_browser.on("page-security", this.OnPageSecurity);
		this.m_browser.on("set-title", this.OnSetTitle);
		this.m_browser.on("new-tab", this.OnNewTab);
		this.m_browser.on("favicon-urls-changed", this.OnFavIconURLChanged);
	}
	OnBeforeClose() {
		this.m_onBeforeCloseCallbacks.Dispatch();
	}
	OnBlockedRequest(e) {
		for (let t of this.m_rgRegisteredProtocols) {
			if (e.startsWith(t.m_strScheme + "://")) {
				SteamClient.Overlay.HandleProtocolForOverlayBrowser(this.m_unAppID, e);
			}
		}
	}
	OnStartRequest(e) {
		this.m_bLoading = true;
		this.m_URLRequested = e;
		this.m_loadErrorCode = null;
		this.m_loadErrorURL = null;
		this.m_loadErrorDesc = null;
		this.m_onStartRequestCallbacks.Dispatch(e);
	}
	OnStartLoad(e, t) {
		this.m_URLRequested = e;
		this.m_onStartLoadingCallbacks.Dispatch(e, t);
	}
	OnFinishedRequest(e, t) {
		this.m_strTitle = t;
		this.m_URL = e;
		this.m_bLoading = false;
		this.m_onFinishedRequestCallbacks.Dispatch(e, t);
	}
	OnCanGoBackForwardChanged(e, t) {
		this.m_bCanGoBackward = e;
		this.m_bCanGoForward = t;
	}
	OnPageSecurity(e, t) {
		this.m_pageSecurity = t;
	}
	OnSetTitle(e) {
		this.m_strTitle = e;
	}
	OnNewTab(e, t) {
		this.m_onNewTabCallbacks.Dispatch(e, t);
	}
	OnFavIconURLChanged(e) {
		this.m_rgFavIconURLs = e;
	}
	OnSteamURL(e) {
		for (let t = 0; t < this.m_rgSteamURLCallbacks.length; ++t) {
			if ((0, this.m_rgSteamURLCallbacks[t])(e)) {
				return true;
			}
		}
		if ((0, c.Ln)(e)) {
			this.OnBeforeClose();
			return true;
		} else {
			return (
				!!e.startsWith("steam://gamewebcallback/") &&
				(SteamClient.Overlay.HandleGameWebCallback(e),
				this.OnBeforeClose(),
				true)
			);
		}
	}
	OnOverlayBrowserProtocolRegistration(e) {
		if (this.m_unAppID == e) {
			this.SendOverlayProtocols();
		}
	}
	OnHistoryChanged(e) {
		if (e.entries[e.index].url != this.m_URL) {
			this.OnFinishedRequest(e.entries[e.index].url, this.m_strTitle);
		}
	}
	SendOverlayProtocols() {
		this.m_rgRegisteredProtocols = o.Q.GetOverlayBrowserProtocols(
			this.m_unAppID,
		).slice();
		let e = this.m_rgRegisteredProtocols.map((e) => e.m_strScheme).join(";");
		this.m_browser.SetBlockedProtocols(e);
	}
	BTryGoBack() {
		return !!this.m_browser.CanGoBackward() && (this.m_browser.GoBack(), true);
	}
	AddSteamURLCallback(e) {
		this.m_rgSteamURLCallbacks.push(e);
	}
	RemoveSteamURLCallback(e) {
		let t = this.m_rgSteamURLCallbacks.indexOf(e);
		if (t != -1) {
			this.m_rgSteamURLCallbacks.splice(t, 1);
		}
	}
	Reload() {
		this.m_browser.Reload();
	}
	GoBack() {
		this.m_browser.GoBack();
	}
	GoForward() {
		this.m_browser.GoForward();
	}
	get Browser() {
		return this.m_browser;
	}
	get ID() {
		return this.m_id;
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
	get CanGoBackward() {
		return this.m_bCanGoBackward;
	}
	get CanGoForward() {
		return this.m_bCanGoForward;
	}
	get FavIconURLs() {
		return this.m_rgFavIconURLs;
	}
	get StartRequestCallbacks() {
		return this.m_onStartRequestCallbacks;
	}
	get StartLoadingCallbacks() {
		return this.m_onStartLoadingCallbacks;
	}
	get FinishedRequestCallbacks() {
		return this.m_onFinishedRequestCallbacks;
	}
	get BeforeCloseCallbacks() {
		return this.m_onBeforeCloseCallbacks;
	}
	get NewTabCallbacks() {
		return this.m_onNewTabCallbacks;
	}
}
(0, n.Cg)([l.sH], d.prototype, "m_URLRequested", undefined);
(0, n.Cg)([l.sH], d.prototype, "m_URL", undefined);
(0, n.Cg)([l.sH], d.prototype, "m_loadErrorCode", undefined);
(0, n.Cg)([l.sH], d.prototype, "m_loadErrorURL", undefined);
(0, n.Cg)([l.sH], d.prototype, "m_loadErrorDesc", undefined);
(0, n.Cg)([l.sH], d.prototype, "m_bLoading", undefined);
(0, n.Cg)([l.sH], d.prototype, "m_strTitle", undefined);
(0, n.Cg)([l.sH], d.prototype, "m_pageSecurity", undefined);
(0, n.Cg)([l.sH], d.prototype, "m_bCanGoBackward", undefined);
(0, n.Cg)([l.sH], d.prototype, "m_bCanGoForward", undefined);
(0, n.Cg)([l.sH], d.prototype, "m_rgFavIconURLs", undefined);
(0, n.Cg)([a.oI], d.prototype, "OnBeforeClose", null);
(0, n.Cg)([a.oI], d.prototype, "OnBlockedRequest", null);
(0, n.Cg)([l.XI.bound], d.prototype, "OnStartRequest", null);
(0, n.Cg)([l.XI.bound], d.prototype, "OnStartLoad", null);
(0, n.Cg)([l.XI.bound], d.prototype, "OnFinishedRequest", null);
(0, n.Cg)([l.XI.bound], d.prototype, "OnCanGoBackForwardChanged", null);
(0, n.Cg)([l.XI.bound], d.prototype, "OnPageSecurity", null);
(0, n.Cg)([l.XI.bound], d.prototype, "OnSetTitle", null);
(0, n.Cg)([a.oI], d.prototype, "OnNewTab", null);
(0, n.Cg)([a.oI], d.prototype, "OnFavIconURLChanged", null);
(0, n.Cg)([a.oI], d.prototype, "OnSteamURL", null);
(0, n.Cg)([a.oI], d.prototype, "OnOverlayBrowserProtocolRegistration", null);
(0, n.Cg)([l.XI.bound], d.prototype, "OnHistoryChanged", null);
(0, n.Cg)([a.oI], d.prototype, "Reload", null);
(0, n.Cg)([a.oI], d.prototype, "GoBack", null);
(0, n.Cg)([a.oI], d.prototype, "GoForward", null);
