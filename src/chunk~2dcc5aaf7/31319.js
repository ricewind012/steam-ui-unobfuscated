import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { gc, hL } from "./52451.js";
import s, { Gn, fm } from "./89193.js";
import "./75248.js";
import o, { x } from "./6242.js";
import { CCallbackList } from "../../actual_src/utils/callbackutils";
import c from "./18057.js";
import { we } from "./33572.js";
import u from "./5822.js";
import d from "./97936.js";
import { OQ } from "./31958.js";
import { q3 } from "./90095.js";
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
		Gn(this);
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
			fm(this.OnSideMenuOpen),
			fm(this.UpdateHeaderOpacityForCurrentPagedSettings),
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
	m_AcceptSearchTextCallbackList = new CCallbackList();
	OnAcceptSearchText() {
		this.m_AcceptSearchTextCallbackList.Dispatch();
	}
	m_ActivateSearchBoxCallbackList = new CCallbackList();
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
			this.m_BackgroundForPagedSettingsInput.Set(OQ(n / r, 0, 1));
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
			case "hidden": {
				t = "hidden";
				break;
			}
			case "show-expanded": {
				if (t != "hidden") {
					t = "show-expanded";
				}
				break;
			}
			case "show-icon": {
				if (t != "hidden" && t != "show-expanded") {
					t = "show-icon";
				}
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
	const e = we();
	return gc(e.m_ShowUniversalSearch.SubscribableValue);
}
export function Xf(e = "show-icon", t) {
	const r = we();
	const n = x(r.m_ShowUniversalSearch, t);
	i.useEffect(() => {
		n.Set(e);
	}, [e, n]);
}
export function mH(e) {
	const t = we();
	hL(t.m_AcceptSearchTextCallbackList, e);
}
export function pw(e = true) {
	const t = we();
	i.useEffect(
		() =>
			e ? (t.IncrementHideHeader(), () => t.DecrementHideHeader()) : () => {},
		[t, e],
	);
}
export function X2() {
	const e = we();
	return q3(() => e?.m_flCurrentHeaderHeight ?? 0);
}
Cg([s.sH], my.prototype, "m_iHideHeaderCount", undefined);
Cg([s.sH], my.prototype, "m_bForceHeaderAfterResume", undefined);
Cg([s.sH], my.prototype, "m_currentBrowserAndBackstack", undefined);
Cg([s.sH], my.prototype, "m_currentBrowserIsExternal", undefined);
Cg([s.sH], my.prototype, "m_currentBrowserCanEditURL", undefined);
Cg(
	[s.sH],
	my.prototype,
	"m_nNumTabbedPagesActingAsHeaderBackground",
	undefined,
);
Cg([s.sH], my.prototype, "m_flCurrentHeaderHeight", undefined);
Cg([s.sH], my.prototype, "m_bFocusSearch", undefined);
Cg([a.oI], my.prototype, "OnSuspendRequest", null);
Cg([a.oI], my.prototype, "OnSystemResumeFromSuspend", null);
Cg([a.oI], my.prototype, "ClearHeaderAfterResume", null);
Cg([a.oI], my.prototype, "OnSideMenuOpen", null);
Cg([a.oI], my.prototype, "UpdateHeaderOpacityForCurrentPagedSettings", null);
Cg([s.XI], my.prototype, "SetCurrentBrowserAndBackstack", null);
