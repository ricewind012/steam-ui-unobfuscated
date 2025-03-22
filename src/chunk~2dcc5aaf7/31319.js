var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require(/*webcrack:missing*/ "./89193.js");
require("./75248.js");
var o = require("./6242.js");
var l = require(/*webcrack:missing*/ "./79769.js");
var c = require("./18057.js");
var m = require("./33572.js");
var u = require("./5822.js");
var d = require("./97936.js");
var A = require(/*webcrack:missing*/ "./31958.js");
var p = require(/*webcrack:missing*/ "./90095.js");
export class my {
	m_Instance;
	m_Opacity = new o.n((e) => Math.max(0, ...e), "Header Opacity");
	m_BackgroundOpacity = new o.n(
		(e) => Math.max(0, ...e),
		"Header Background Opacity",
	);
	m_ShowUniversalSearch = new o.n(C, "Header Universal Search Visibility");
	m_bSuppressInteraction = new o.n(
		h,
		"Whether to suppress interactions in the header",
	);
	m_TitleText = new o.n(_, "Header Title Text");
	m_iHideHeaderCount = 0;
	m_bForceHeaderAfterResume = false;
	m_hResumeHeaderTimer = undefined;
	m_OpacityInput;
	m_BackgroundInput;
	m_BackgroundForPagedSettingsInput;
	m_currentBrowserAndBackstack = null;
	m_currentBrowserIsExternal = false;
	m_currentBrowserCanEditURL = false;
	m_nNumTabbedPagesActingAsHeaderBackground = 0;
	m_flCurrentHeaderHeight = 0;
	constructor(e) {
		(0, s.Gn)(this);
		this.m_Instance = e;
	}
	Init() {
		SteamClient.System.RegisterForOnSuspendRequest(this.OnSuspendRequest);
		SteamClient.System.RegisterForOnResumeFromSuspend(
			this.OnSystemResumeFromSuspend,
		);
		this.m_OpacityInput = this.m_Opacity.CreateInput("HeaderStore");
		this.m_OpacityInput.Set(0);
		this.m_BackgroundInput =
			this.m_BackgroundOpacity.CreateInput("HeaderStore");
		this.m_BackgroundInput.Set(0);
		this.m_BackgroundForPagedSettingsInput =
			this.m_BackgroundOpacity.CreateInput("Paged Settings Scroll Position");
		this.m_BackgroundForPagedSettingsInput.Set(0);
		return [
			(0, s.fm)(this.OnSideMenuOpen),
			(0, s.fm)(this.UpdateHeaderOpacityForCurrentPagedSettings),
		];
	}
	BShowHeader() {
		let e = this.m_Instance.BRouteMatch([c.BV.GamepadUI.AppRunning()]);
		if (this.m_Instance.MenuStore.GetOpenSideMenu() == u.Ez.Main) {
			e = false;
		}
		if (this.m_bForceHeaderAfterResume) {
			e = false;
		}
		return this.m_iHideHeaderCount == 0 && !e;
	}
	IncrementHideHeader() {
		this.m_iHideHeaderCount++;
	}
	DecrementHideHeader() {
		this.m_iHideHeaderCount--;
	}
	GetForceHeaderAfterResume() {
		return this.m_bForceHeaderAfterResume;
	}
	m_AcceptSearchTextCallbackList = new l.lu();
	OnAcceptSearchText() {
		this.m_AcceptSearchTextCallbackList.Dispatch();
	}
	m_ActivateSearchBoxCallbackList = new l.lu();
	ActivateSearchBox() {
		this.m_ActivateSearchBoxCallbackList.Dispatch();
	}
	m_bFocusSearch = false;
	SetUniversalSearchFocused(e) {
		this.m_bFocusSearch = e;
	}
	GetFlexGrowPriority() {
		if (this.m_bFocusSearch) {
			return "FlexGrowUniversalSearch";
		} else if (this.m_currentBrowserAndBackstack) {
			return "FlexGrowWebBrowserURLBar";
		} else {
			return "FlexGrowUniversalSearch";
		}
	}
	OnSuspendRequest() {}
	OnSystemResumeFromSuspend() {
		this.m_bForceHeaderAfterResume = true;
		this.m_OpacityInput.Set(1);
		if (this.m_Instance.BRouteMatch([c.BV.GamepadUI.AppRunning()])) {
			this.m_BackgroundInput.Set(0.8);
		}
		if (this.m_hResumeHeaderTimer) {
			window.clearTimeout(this.m_hResumeHeaderTimer);
		}
		this.m_hResumeHeaderTimer = window.setTimeout(
			this.ClearHeaderAfterResume,
			6000,
		);
	}
	ClearHeaderAfterResume() {
		this.m_OpacityInput.Set(0);
		this.m_BackgroundInput.Set(0);
		this.m_bForceHeaderAfterResume = false;
		if (this.m_hResumeHeaderTimer) {
			window.clearTimeout(this.m_hResumeHeaderTimer);
		}
		this.m_hResumeHeaderTimer = undefined;
	}
	OnSideMenuOpen() {
		if (
			this.m_bForceHeaderAfterResume &&
			this.m_Instance.MenuStore.GetOpenSideMenu() != u.Ez.None
		) {
			this.ClearHeaderAfterResume();
		}
	}
	UpdateHeaderOpacityForCurrentPagedSettings() {
		const e = d.ut.Get().m_setPagedSettingsInstances;
		if (e.size == 0) {
			this.m_BackgroundForPagedSettingsInput.Set(0);
		} else {
			const t = Array.from(e.values())[0];
			const r = 20;
			const n = Math.max(t.m_flPageListScrollTop, t.m_flPageScrollTop);
			this.m_BackgroundForPagedSettingsInput.Set((0, A.OQ)(n / r, 0, 1));
		}
	}
	GetCurrentBrowserAndBackstack() {
		return {
			browser: this.m_currentBrowserAndBackstack,
			bExternal: this.m_currentBrowserIsExternal,
			bCanEditURL: this.m_currentBrowserCanEditURL,
		};
	}
	GetCurrentBrowserAndBackstackI() {
		return this.m_currentBrowserAndBackstack;
	}
	SetCurrentBrowserAndBackstack(e, t, r) {
		this.m_currentBrowserAndBackstack = e;
		this.m_currentBrowserIsExternal = t;
		this.m_currentBrowserCanEditURL = r;
	}
}
function h(e) {
	for (const t of e) {
		if (t) {
			return true;
		}
	}
	return false;
}
function C(e) {
	let t = "show-icon";
	for (const r of e) {
		switch (r) {
			case "hidden":
				t = "hidden";
				break;
			case "show-expanded":
				if (t != "hidden") {
					t = "show-expanded";
				}
				break;
			case "show-icon":
				if (t != "hidden" && t != "show-expanded") {
					t = "show-icon";
				}
		}
	}
	return t;
}
function _(e) {
	if (e.length == 0) {
		return null;
	} else {
		return e[e.length - 1];
	}
}
export function dM() {
	const e = (0, m.we)();
	return (0, a.gc)(e.m_ShowUniversalSearch.SubscribableValue);
}
export function Xf(e = "show-icon", t) {
	const r = (0, m.we)();
	const n = (0, o.x)(r.m_ShowUniversalSearch, t);
	i.useEffect(() => {
		n.Set(e);
	}, [e, n]);
}
export function mH(e) {
	const t = (0, m.we)();
	(0, a.hL)(t.m_AcceptSearchTextCallbackList, e);
}
export function pw(e = true) {
	const t = (0, m.we)();
	i.useEffect(
		() =>
			e ? (t.IncrementHideHeader(), () => t.DecrementHideHeader()) : () => {},
		[t, e],
	);
}
export function X2() {
	const e = (0, m.we)();
	return (0, p.q3)(() => e?.m_flCurrentHeaderHeight ?? 0);
}
(0, n.Cg)([s.sH], my.prototype, "m_iHideHeaderCount", undefined);
(0, n.Cg)([s.sH], my.prototype, "m_bForceHeaderAfterResume", undefined);
(0, n.Cg)([s.sH], my.prototype, "m_currentBrowserAndBackstack", undefined);
(0, n.Cg)([s.sH], my.prototype, "m_currentBrowserIsExternal", undefined);
(0, n.Cg)([s.sH], my.prototype, "m_currentBrowserCanEditURL", undefined);
(0, n.Cg)(
	[s.sH],
	my.prototype,
	"m_nNumTabbedPagesActingAsHeaderBackground",
	undefined,
);
(0, n.Cg)([s.sH], my.prototype, "m_flCurrentHeaderHeight", undefined);
(0, n.Cg)([s.sH], my.prototype, "m_bFocusSearch", undefined);
(0, n.Cg)([a.oI], my.prototype, "OnSuspendRequest", null);
(0, n.Cg)([a.oI], my.prototype, "OnSystemResumeFromSuspend", null);
(0, n.Cg)([a.oI], my.prototype, "ClearHeaderAfterResume", null);
(0, n.Cg)([a.oI], my.prototype, "OnSideMenuOpen", null);
(0, n.Cg)(
	[a.oI],
	my.prototype,
	"UpdateHeaderOpacityForCurrentPagedSettings",
	null,
);
(0, n.Cg)([s.XI], my.prototype, "SetCurrentBrowserAndBackstack", null);
