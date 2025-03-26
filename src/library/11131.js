export var Wf;
export var Dr;
var s = require(/*webcrack:missing*/ "./34629.js");
var o = require("./44846.js");
var a = require("./85243.js");
var c = require(/*webcrack:missing*/ "./89193.js");
var l = require(/*webcrack:missing*/ "./63696.js");
var u = require("./17385.js");
var m = require("./736.js");
var d = require("./49455.js");
var h = require("./81255.js");
import {
	GetStyleSheetLinks,
	AddStylesheetsToDocument,
	AddMissingStylesheetsToWindow,
} from "../../actual_src/utils/domutils.js";
import { GetConfiguredLocale } from "../../actual_src/utils/localization.js";
var f = require("./52451.js");
var _ = require("./72476.js");
var w = require("./93960.js");
var b = require("./62130.js");
function C() {
	if ((0, _.td)()) {
		return Wf.Composited;
	} else {
		return Wf.None;
	}
}
export function yq(e) {
	let t = Wf.None;
	switch (e) {
		case Dr.Overlay:
			t |= Wf.AlwaysOnTop;
			t |= Wf.NoTaskbarIcon;
			t |= Wf.NotFocusable;
			t |= Wf.TransparentParentWindow;
			return t;
		case Dr.Notification:
			t |= yq(Dr.Overlay);
			t |= Wf.NoWindowShadow;
			t |= Wf.NoRoundedCorners;
			t |= Wf.OverrideRedirect;
			return t;
		case Dr.Tooltip:
			t |= yq(Dr.Overlay);
			t |= Wf.NoRoundedCorners;
			t |= Wf.NoWindowShadow;
			t |= Wf.TooltipHint;
			t |= C();
			return t;
		case Dr.PopupContextMenu:
			t |= Wf.NoTaskbarIcon;
			t |= Wf.NoRoundedCorners;
			t |= Wf.NoWindowShadow;
			t |= Wf.PopUpMenuHint;
			t |= Wf.TransparentParentWindow;
			t |= C();
			return t;
		case Dr.StandaloneContextMenu:
			t = Wf.NoTaskbarIcon;
			t |= Wf.NoRoundedCorners;
			t |= Wf.NoWindowShadow;
			t |= Wf.OverrideRedirect;
			t |= Wf.TransparentParentWindow;
			t |= C();
			return t;
	}
}
export function k5() {
	const { ownerWindow: e } = R7();
	const t = Of.GetPopupForWindow(e);
	return t?.browser_info || u.m;
}
export function c4() {
	const e = R7();
	const t = l.useCallback(
		() => e.ownerWindow.SteamClient.Window.GetWindowDetails(),
		[e],
	);
	const [n, r] = l.useState(0);
	const i = l.useCallback(() => r((e) => e + 1), [r]);
	(0, f.Qi)(e.ownerWindow, ["window_details_changed"], i);
	const s = {
		bGPUEnabled: true,
		bUnderlaySupported: true,
	};
	const o = (0, f.vJ)(t, [t, n], s);
	if (o !== undefined) {
		return o;
	} else {
		return s;
	}
}
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.Minimized = 1)] = "Minimized";
	e[(e.Hidden = 2)] = "Hidden";
	e[(e.TooltipHint = 4)] = "TooltipHint";
	e[(e.NoTaskbarIcon = 8)] = "NoTaskbarIcon";
	e[(e.Resizable = 16)] = "Resizable";
	e[(e.ScalePosition = 32)] = "ScalePosition";
	e[(e.ScaleSize = 64)] = "ScaleSize";
	e[(e.Maximized = 128)] = "Maximized";
	e[(e.Composited = 256)] = "Composited";
	e[(e.NotFocusable = 512)] = "NotFocusable";
	e[(e.FullScreen = 1024)] = "FullScreen";
	e[(e.Fullscreen_Exclusive = 2048)] = "Fullscreen_Exclusive";
	e[(e.ApplyBrowserScaleToDimensions = 4096)] = "ApplyBrowserScaleToDimensions";
	e[(e.AlwaysOnTop = 8192)] = "AlwaysOnTop";
	e[(e.NoWindowShadow = 16384)] = "NoWindowShadow";
	e[(e.NoMinimize = 32768)] = "NoMinimize";
	e[(e.PopUpMenuHint = 65536)] = "PopUpMenuHint";
	e[(e.IgnoreSavedSize = 131072)] = "IgnoreSavedSize";
	e[(e.NoRoundedCorners = 262144)] = "NoRoundedCorners";
	e[(e.ForceRoundedCorners = 524288)] = "ForceRoundedCorners";
	e[(e.OverrideRedirect = 1048576)] = "OverrideRedirect";
	e[(e.IgnoreSteamDisplayScale = 2097152)] = "IgnoreSteamDisplayScale";
	e[(e.TransparentParentWindow = 4194304)] = "TransparentParentWindow";
	e[(e.DisableDPIScale = 8388608)] = "DisableDPIScale";
})((Wf ||= {}));
(function (e) {
	e[(e.Overlay = 0)] = "Overlay";
	e[(e.Notification = 1)] = "Notification";
	e[(e.Tooltip = 2)] = "Tooltip";
	e[(e.PopupContextMenu = 3)] = "PopupContextMenu";
	e[(e.StandaloneContextMenu = 4)] = "StandaloneContextMenu";
})((Dr ||= {}));
export const gs = l.createContext({
	ownerWindow: window,
});
export const R7 = () => l.useContext(gs);
export function kc(e) {
	const { ownerWindow: t, children: n } = e;
	const r = l.useMemo(
		() => ({
			ownerWindow: t,
		}),
		[t],
	);
	return l.createElement(
		gs.Provider,
		{
			value: r,
		},
		n,
	);
}
export class Ad {
	m_strName;
	m_strTitle;
	m_rgParams;
	m_popup;
	m_element;
	m_renderWhenReady;
	m_bCreateHidden;
	m_bCreated = false;
	m_onCreateRender = null;
	m_bFocused = false;
	constructor(e, t) {
		(0, c.Gn)(this);
		(0, d.w)(
			e,
			"Name is required.  This is an internal name, different from title.",
		);
		this.m_strName = e;
		const { title: n, eCreationFlags: i, ...s } = t;
		this.m_rgParams = {
			...s,
			eCreationFlags: i ?? 0,
		};
		if (this.m_rgParams.target_browser) {
			this.m_strName += "_uid" + this.m_rgParams.target_browser.m_unPID;
		}
		this.m_bCreateHidden = !!(this.m_rgParams.eCreationFlags & Wf.Hidden);
		this.m_strTitle = n;
	}
	UpdateParamsBeforeShow(e) {
		return e;
	}
	OnDrop(e) {
		console.log("Ignoring drop onto toplevel window", e);
		e.preventDefault();
		e.stopPropagation();
	}
	OnDragOver(e) {
		e.preventDefault();
		e.dataTransfer.dropEffect = "none";
		e.stopPropagation();
	}
	OnMessage(e) {
		if (e.data == "window_moved") {
			this.OnResize();
		}
		if (e.data == "popup-created") {
			this.OnCreateInternal();
		}
	}
	Show(e = o.iE.k_EWindowBringToFrontAndForceOS) {
		let t;
		t =
			typeof e == "boolean"
				? e
					? o.iE.k_EWindowBringToFrontAndForceOS
					: o.iE.k_EWindowBringToFrontInvalid
				: e;
		if (window.SteamClient) {
			this.m_rgParams.eCreationFlags |= Wf.Hidden;
		}
		if (this.m_rgParams.eCreationFlags & Wf.NotFocusable) {
			t = o.iE.k_EWindowBringToFrontInvalid;
		}
		if (this.BIsValid()) {
			if (this.BIsClosed()) {
				this.m_popup = undefined;
				this.m_element = undefined;
			} else if (t != o.iE.k_EWindowBringToFrontInvalid) {
				this.Focus(t);
			}
		}
		let n;
		let i;
		let s;
		let a = Of.GetExistingPopup(this.m_strName);
		if (!a || !!this.m_rgParams.replace_existing_popup) {
			this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
			if (a) {
				i = a.m_element;
				n = a.m_popup;
				a.ReleasePopup();
				s = a.m_renderWhenReady;
				Of.RemoveTrackedPopup(a);
				n?.removeEventListener("beforeunload", a.OnBeforeUnloadEvent);
				n?.removeEventListener("unload", a.OnUnload);
				n?.removeEventListener("resize", a.OnResizeEvent);
				n?.removeEventListener("focus", this.OnFocusInternal);
				n?.removeEventListener("blur", this.OnBlurInternal);
				n?.removeEventListener("drop", a.OnDrop);
				n?.removeEventListener("dragover", a.OnDragOver);
				n?.removeEventListener("message", this.OnMessage);
			} else {
				({ popup: n, element: i } = k.CreatePopup(this.m_strName, {
					...this.m_rgParams,
					title: this.m_strTitle,
				}));
				s = new b.Q(n?.document, i);
			}
			if (n && i) {
				n.document.title = this.m_strTitle;
				n.addEventListener("beforeunload", this.OnBeforeUnloadEvent);
				n.addEventListener("unload", this.OnUnload);
				n.addEventListener("resize", this.OnResizeEvent);
				n.addEventListener("focus", this.OnFocusInternal);
				n.addEventListener("blur", this.OnBlurInternal);
				n.addEventListener("drop", this.OnDrop);
				n.addEventListener("dragover", this.OnDragOver);
				n.addEventListener("message", this.OnMessage);
				if (_.TS.LANGUAGE) {
					n.document.documentElement.setAttribute(
						"lang",
						GetConfiguredLocale() ?? "",
					);
				}
				this.m_popup = n;
				this.m_element = i;
				this.m_renderWhenReady = s;
				this.m_renderWhenReady?.SetTarget(() => {
					if (this.m_popup && this.m_element) {
						this.RenderInternal(this.m_popup, this.m_element, t);
					}
				});
			}
			Of.AddTrackedPopup(this);
			if (a) {
				this.OnCreateInternal();
				if (t != o.iE.k_EWindowBringToFrontInvalid) {
					this.Focus(t);
				}
			}
		}
	}
	RemoveEventListeners() {
		this.window?.removeEventListener("beforeunload", this.OnBeforeUnloadEvent);
		this.window?.removeEventListener("unload", this.OnUnload);
		this.window?.removeEventListener("resize", this.OnResizeEvent);
		this.window?.removeEventListener("focus", this.OnFocusInternal);
		this.window?.removeEventListener("blur", this.OnBlurInternal);
		this.window?.removeEventListener("drop", this.OnDrop);
		this.window?.removeEventListener("dragover", this.OnDragOver);
		this.window?.removeEventListener("message", this.OnMessage);
	}
	RenderInternal(e, t, n) {
		if (this.m_bCreated) {
			if (this.browser_info && (0, a.BK)(this.browser_info.m_eBrowserType)) {
				t.ownerDocument.body.className += " VR";
			}
			this.Render(e, t);
			this.OnLoad();
			if (e?.SteamClient && !this.m_bCreateHidden) {
				if (n != o.iE.k_EWindowBringToFrontInvalid) {
					e.SteamClient.Window.BringToFront(n);
				} else {
					e.SteamClient.Window.ShowWindow();
				}
			}
		} else {
			this.m_onCreateRender = () => this.RenderInternal(e, t, n);
		}
	}
	OnCreateInternal() {
		if (!this.m_bCreated) {
			this.m_bCreated = true;
			this.OnCreate();
			if (this.m_onCreateRender) {
				this.m_onCreateRender();
				this.m_onCreateRender = null;
			}
		}
	}
	OnCreate() {}
	OnResizeEvent() {
		this.OnResize();
	}
	OnBeforeUnloadEvent() {
		this.OnBeforeUnload();
	}
	OnUnload(e) {
		this.RemoveEventListeners();
		Of.RemoveTrackedPopup(this);
		this.OnClose();
		this.m_popup = undefined;
	}
	get browser_info() {
		return this.m_rgParams.target_browser;
	}
	get window() {
		return this.m_popup;
	}
	get root_element() {
		return this.m_element;
	}
	get title() {
		return this.m_strTitle;
	}
	set title(e) {
		this.m_strTitle = e;
		if (this.m_popup) {
			this.m_popup.document.title = this.m_strTitle;
		}
	}
	get params() {
		return this.m_rgParams;
	}
	Focus(e = o.iE.k_EWindowBringToFrontAndForceOS) {
		if (e != o.iE.k_EWindowBringToFrontInvalid) {
			if (
				this.m_popup &&
				this.m_popup.SteamClient !== undefined &&
				this.m_popup.SteamClient.Window !== undefined
			) {
				this.m_popup.SteamClient.Window.BringToFront(e);
			} else if (this.m_popup) {
				this.m_popup.focus();
			}
		}
	}
	Close() {
		if (this.m_popup) {
			if ((0, m.Fj)(this.m_popup.window, "Window.Close")) {
				this.m_popup.window.SteamClient.Window.Close();
			} else {
				this.m_popup.window.close();
			}
		}
	}
	GetName() {
		return this.m_strName;
	}
	BIsValid() {
		return !!this.m_popup;
	}
	BIsClosed() {
		return !this.m_popup || this.m_popup.closed;
	}
	BIsVisible() {
		return (
			!!this.m_popup &&
			!this.m_popup.closed &&
			this.m_popup.document.visibilityState == "visible"
		);
	}
	BIsFocused() {
		return this.BIsVisible() && !!this.m_popup?.document.hasFocus();
	}
	OnFocusInternal() {
		if (this.m_popup) {
			this.m_popup.document.body.classList.add("WindowFocus");
		}
		this.m_bFocused = true;
		this.OnFocus();
	}
	OnBlurInternal() {
		if (this.m_popup) {
			this.m_popup.document.body.classList.remove("WindowFocus");
		}
		this.m_bFocused = false;
		this.OnBlur();
	}
	get focused() {
		return this.m_bFocused;
	}
	GetWindowRestoreDetails() {
		if (
			(0, m.Fj)(this.m_popup, "Window.GetWindowRestoreDetails") &&
			!this.m_popup.closed
		) {
			return this.m_popup.SteamClient.Window.GetWindowRestoreDetails();
		} else {
			return Promise.resolve("");
		}
	}
	IsMinimized() {
		if (
			(0, m.Fj)(this.m_popup, "Window.IsWindowMinimized") &&
			!this.m_popup.closed
		) {
			return this.m_popup.SteamClient.Window.IsWindowMinimized();
		} else {
			return Promise.resolve(false);
		}
	}
	IsMaximized() {
		if (
			(0, m.Fj)(this.m_popup, "Window.IsWindowMaximized") &&
			!this.m_popup.closed
		) {
			return this.m_popup.SteamClient.Window.IsWindowMaximized();
		} else {
			return Promise.resolve(false);
		}
	}
	ReleasePopup() {
		this.OnClose();
		this.m_popup = null;
	}
	OnResize() {
		this.IsMaximized().then((e) => {
			if (e) {
				this.m_popup?.document.body.classList.add("Maximized");
			} else {
				this.m_popup?.document.body.classList.remove("Maximized");
			}
		});
	}
	OnBeforeUnload() {}
	OnFocus() {}
	OnBlur() {}
}
(0, s.Cg)([c.sH], Ad.prototype, "m_bFocused", undefined);
(0, s.Cg)([w.o], Ad.prototype, "OnMessage", null);
(0, s.Cg)([w.o], Ad.prototype, "RenderInternal", null);
(0, s.Cg)([w.o], Ad.prototype, "OnCreateInternal", null);
(0, s.Cg)([w.o], Ad.prototype, "OnResizeEvent", null);
(0, s.Cg)([w.o], Ad.prototype, "OnBeforeUnloadEvent", null);
(0, s.Cg)([w.o], Ad.prototype, "OnUnload", null);
(0, s.Cg)([w.o], Ad.prototype, "OnFocusInternal", null);
(0, s.Cg)([w.o], Ad.prototype, "OnBlurInternal", null);
export class K9 extends Ad {
	m_strSavedDimensionsKey;
	m_strInitialSavedDimensionsKey;
	m_strInitialRestoreDetails;
	m_bExpires;
	constructor(e, t, n, r) {
		super(e, n);
		this.SetSavedDimensionsKey(t);
		this.m_bExpires = r;
	}
	BIsInOverlay() {
		return (
			this.browser_info &&
			this.browser_info.m_unPID != 0 &&
			this.browser_info.m_nBrowserID != -1
		);
	}
	SetSavedDimensionsKey(e) {
		this.m_strSavedDimensionsKey = e;
	}
	UpdateParamsBeforeShow(e) {
		if (
			!this.m_strSavedDimensionsKey ||
			e.bIgnoreSavedDimensions ||
			e.strRestoreDetails
		) {
			if (e.strRestoreDetails) {
				this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey();
				Of.SetRestoreDetails(
					this.m_strInitialSavedDimensionsKey,
					e.strRestoreDetails,
					this.m_bExpires,
				);
			}
		} else {
			this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey();
			e.strRestoreDetails = Of.GetRestoreDetails(
				this.m_strInitialSavedDimensionsKey,
			);
		}
		return e;
	}
	OnLoad() {
		this.GetWindowRestoreDetails().then((e) => {
			this.m_strInitialRestoreDetails = e;
			this.OnResizeComplete(e);
		});
	}
	OnResize() {
		super.OnResize();
		this.QueryAndStoreWindowPosition();
	}
	OnResizeComplete(e) {}
	QueryAndStoreWindowPosition() {
		if (this.m_strInitialRestoreDetails) {
			let e = this.GetSavedDimensionsKey();
			this.m_popup?.setTimeout(() => {
				this.GetWindowRestoreDetails().then((t) => {
					let n =
						this.m_rgParams.strRestoreDetails == t &&
						e == this.m_strInitialSavedDimensionsKey;
					if (this.m_popup && this.m_strSavedDimensionsKey && t && !n) {
						Of.SetRestoreDetails(e, t, this.m_bExpires);
						this.m_rgParams.strRestoreDetails = t;
						this.m_strInitialSavedDimensionsKey = e;
						this.OnResizeComplete(t);
					}
				});
			}, 30);
		}
	}
	OnBeforeUnload() {
		this.QueryAndStoreWindowPosition();
		super.OnBeforeUnload();
	}
	OnClose() {}
	SaveWindowPosition(e) {
		Of.SetRestoreDetails(this.GetSavedDimensionsKey(), e, false);
		this.m_rgParams.strRestoreDetails = e;
	}
}
(0, s.Cg)([w.o], K9.prototype, "QueryAndStoreWindowPosition", null);
class k {
	m_bShuttingDown = false;
	m_mapPopups = c.sH.map([], {
		deep: false,
	});
	m_rgShutdownCallbacks = [];
	m_rgPopupCreatedCallbacks = [];
	m_unCurrentAccountID = 0;
	m_mapRestoreDetails = new Map();
	m_bSaveRequired = false;
	m_DynamicCSSObserver;
	constructor() {
		if (
			!{
				NODE_ENV: "production",
				STEAM_BUILD: "buildbot",
				BUILD_TIME_LOCAL: "Mar 11 2025 : 16:45:07",
				BUILD_TIME_UTC: "Mar 11 2025 : 23:45:07",
				BUILD_RTIME_UTC: 1741736707,
			}.MOBILE_BUILD &&
			"addEventListener" in window
		) {
			window.addEventListener("beforeunload", (e) => {
				this.m_bShuttingDown = true;
				for (let e of this.m_rgShutdownCallbacks) {
					e();
				}
				let t = [];
				this.m_mapPopups.forEach((e) => {
					if (e.BIsValid() && !e.BIsClosed()) {
						t.push(e);
					}
				});
				for (let e of t) {
					if (
						e.window?.SteamClient.Browser?.SetShouldExitSteamOnBrowserClosed
					) {
						e.window.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed(
							false,
						);
					}
					if (e.window?.SteamClient.Window.SetHideOnClose) {
						e.window?.SteamClient.Window.SetHideOnClose(false);
					}
					e.Close();
				}
				if (this.m_bSaveRequired) {
					this.SaveSavedDimensionStore();
				}
				this.m_mapPopups.clear();
			});
			let e = document.querySelector("head");
			(0, d.w)(e, "Couldn't find head element");
			if (e) {
				this.m_DynamicCSSObserver = new MutationObserver(() => {
					const e = GetStyleSheetLinks();
					this.m_mapPopups.forEach((t) => {
						AddStylesheetsToDocument(t.window.document, e, false);
					});
				});
				this.m_DynamicCSSObserver.observe(e, {
					childList: true,
				});
			}
		}
	}
	BAnyPopupHasFocus() {
		for (const e of this.m_mapPopups.values()) {
			if (e.focused) {
				return true;
			}
		}
		return false;
	}
	BAnyMenuHasFocus() {
		for (const e of this.m_mapPopups.values()) {
			if (e.focused && (e.params.eCreationFlags ?? 0) & Wf.NoTaskbarIcon) {
				return true;
			}
		}
		return false;
	}
	SetCurrentLoggedInAccountID(e) {
		if (this.m_unCurrentAccountID != e) {
			this.m_unCurrentAccountID = e;
			if (e) {
				this.LoadSavedDimensionStore();
			} else {
				this.ClearSavedDimensionStore();
			}
		}
	}
	AddShutdownCallback(e) {
		this.m_rgShutdownCallbacks.push(e);
	}
	AddPopupCreatedCallback(e) {
		this.m_rgPopupCreatedCallbacks.push(e);
	}
	AddTrackedPopup(e) {
		this.m_mapPopups.set(e.GetName(), e);
		if (e.BIsValid()) {
			for (let t of this.m_rgPopupCreatedCallbacks) {
				t(e);
			}
		}
	}
	RemoveTrackedPopup(e) {
		this.m_mapPopups.delete(e.GetName());
	}
	GetExistingPopup(e) {
		return this.m_mapPopups.get(e);
	}
	GetPopups() {
		return this.m_mapPopups.values();
	}
	GetPopupForWindow(e) {
		for (const t of this.m_mapPopups.values()) {
			if (t.window === e) {
				return t;
			}
		}
	}
	ClosePopupsOwnedByBrowser(e) {
		this.m_mapPopups.forEach((t) => {
			if (
				t.browser_info &&
				t.browser_info.m_nBrowserID == e.m_nBrowserID &&
				t.browser_info.m_unPID == e.m_unPID
			) {
				t.Close();
			}
		});
	}
	static CreatePopup(e, t) {
		let n = t.dimensions || {};
		let r = n.width || 300;
		let i = n.height || 300;
		let s = t.title;
		let o = "width=" + r + ",height=" + i;
		if (n.left !== undefined) {
			o += ",left=" + n.left;
		}
		if (n.top !== undefined) {
			o += ",top=" + n.top;
		}
		o += ",resizeable,status=0,toolbar=0,menubar=0,location=0";
		let a = "about:blank";
		let c = [];
		c.push("createflags=" + t.eCreationFlags);
		if (t.minWidth) {
			c.push("minwidth=" + t.minWidth);
		}
		if (t.minHeight) {
			c.push("minheight=" + t.minHeight);
		}
		if (t.maxWidth && t.maxWidth != Infinity) {
			c.push("maxwidth=" + t.maxWidth);
		}
		if (t.maxHeight && t.maxHeight != Infinity) {
			c.push("maxheight=" + t.maxHeight);
		}
		if (t.target_browser) {
			c.push("pid=" + t.target_browser.m_unPID);
			c.push("browser=" + t.target_browser.m_nBrowserID);
			if (t.target_browser.m_eBrowserType) {
				c.push("browserType=" + t.target_browser.m_eBrowserType);
			} else if (t.browserType) {
				c.push("browserType=" + t.browserType);
			}
			if (t.availscreenwidth && t.availscreenheight) {
				c.push("screenavailwidth=" + t.availscreenwidth);
				c.push("screenavailheight=" + t.availscreenheight);
			}
		} else if (t.browserType) {
			c.push("browserType=" + t.browserType);
		}
		if (t.strVROverlayKey) {
			c.push("vrOverlayKey=" + t.strVROverlayKey);
		}
		if (t.strRestoreDetails) {
			c.push("restoredetails=" + t.strRestoreDetails);
		}
		if (t.window_opener_id) {
			c.push("openerid=" + t.window_opener_id);
		}
		if (t.parent_container_popup_id) {
			c.push("parentcontainerpopupid=" + t.parent_container_popup_id);
		}
		if (t.center_on_window && n.left === undefined && n.top === undefined) {
			c.push(
				"centerOnBrowserID=" +
					t.center_on_window.SteamClient.Browser.GetBrowserID(),
			);
		}
		if (t.strUserAgent) {
			c.push("useragent=" + t.strUserAgent);
		}
		if (t.hwndParent) {
			c.push("hwndParent=" + t.hwndParent);
		}
		if (t.bPinned) {
			c.push("pinned=true");
		}
		if (t.bModal) {
			c.push("modal=true");
		}
		if (c) {
			a += "?" + c.join("&");
		}
		let l = (t.owner_window || window).open(a, e, o);
		if (!l) {
			console.error(
				`Failed to create popup, browser/CEF may be blocking popups for "${window.location.origin}"`,
			);
			return {};
		}
		let u = "";
		if (t.html_class) {
			u = `class="${t.html_class}"`;
		}
		let m = "";
		if (t.body_class) {
			m = `class="${t.body_class}"`;
		}
		let d = "";
		if (t.popup_class) {
			d = `class="${t.popup_class}"`;
		}
		let h = `<!DOCTYPE html><html ${u}><head><title></title></head><body ${m}><div id="popup_target" ${d}></div></body></html>`;
		l.document.write(h);
		l.document.title = s;
		AddMissingStylesheetsToWindow(l, GetStyleSheetLinks());
		return {
			popup: l,
			element: l.document.getElementById("popup_target"),
		};
	}
	BShuttingDown() {
		return this.m_bShuttingDown;
	}
	GetLocalStorageKey() {
		return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
	}
	LoadSavedDimensionStore() {
		if (!this.m_unCurrentAccountID) {
			return;
		}
		let e = this.GetLocalStorageKey();
		this.m_mapRestoreDetails.clear();
		let t = window.localStorage.getItem(e);
		if (t) {
			try {
				let e = JSON.parse(t);
				this.m_mapRestoreDetails = new Map(e);
			} catch (e) {}
		}
	}
	SaveSavedDimensionStore() {
		if (!this.m_unCurrentAccountID || !this.m_bSaveRequired) {
			return;
		}
		let e = this.GetLocalStorageKey();
		let t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
		try {
			window.localStorage.setItem(e, t);
			this.m_bSaveRequired = false;
		} catch (n) {
			if ("name" in n && n.name == "QuotaExceededError") {
				console.log("Quota exceeded");
				for (let t of Object.keys(window.localStorage)) {
					if (t.startsWith("PopupSavedDimensions_") && t != e) {
						window.localStorage.removeItem(t);
					}
				}
				window.localStorage.setItem(e, t);
				this.m_bSaveRequired = false;
			}
		}
	}
	DebouncedSaveSavedDimensionStore() {
		this.SaveSavedDimensionStore();
	}
	ClearSavedDimensionStore() {
		this.m_mapRestoreDetails?.clear();
		this.m_bSaveRequired = false;
	}
	GetRestoreDetails(e) {
		if (!this.m_mapRestoreDetails?.has(e)) {
			return "";
		}
		let t = this.m_mapRestoreDetails.get(e);
		t.last_used = Date.now();
		this.m_bSaveRequired = true;
		return t.strRestoreDetails;
	}
	SetRestoreDetails(e, t, n) {
		if (e) {
			if (t) {
				if (this.m_mapRestoreDetails.size > 50) {
					let e = null;
					let t = Date.now();
					for (let n of Array.from(this.m_mapRestoreDetails.keys())) {
						let r = this.m_mapRestoreDetails.get(n);
						if (r.last_used < t && r.bExpires) {
							t = r.last_used;
							e = n;
						}
					}
					if (e) {
						this.m_mapRestoreDetails.delete(e);
					}
				}
				let r = {
					strRestoreDetails: t,
					last_used: Date.now(),
					bExpires: n,
				};
				this.m_mapRestoreDetails.set(e, r);
			} else {
				this.m_mapRestoreDetails.delete(e);
			}
			this.m_bSaveRequired = true;
			if (this.m_bShuttingDown) {
				this.SaveSavedDimensionStore();
			} else {
				this.DebouncedSaveSavedDimensionStore();
			}
		}
	}
}
(0, s.Cg)(
	[w.o, (0, h.s)(100)],
	k.prototype,
	"DebouncedSaveSavedDimensionStore",
	null,
);
export const Of = new k();
window.g_PopupManager = Of;
