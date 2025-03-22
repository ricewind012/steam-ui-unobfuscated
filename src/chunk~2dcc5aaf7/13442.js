var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./31319.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require("./18057.js");
require("./33572.js");
var o = require("./5822.js");
var l = require("./55489.js");
require("./44234.js");
class c {
	m_Instance;
	m_iHideFooterCount = 0;
	m_bKeyboardVisible = false;
	m_flCurrentFooterHeight = 0;
	constructor(e) {
		(0, a.Gn)(this);
		this.m_Instance = e;
	}
	Init() {
		const e = [];
		e.push(
			this.m_Instance.VirtualKeyboardManager.IsShowingVirtualKeyboard.Subscribe(
				(e) => (this.m_bKeyboardVisible = e),
			).Unsubscribe,
		);
		this.m_bKeyboardVisible =
			this.m_Instance.VirtualKeyboardManager.IsShowingVirtualKeyboard.Value;
		return e;
	}
	HideFooter() {
		this.m_iHideFooterCount++;
		let e = false;
		return {
			unhide: () => {
				if (!e) {
					this.m_iHideFooterCount--;
					e = true;
				}
			},
		};
	}
	BShowFooter() {
		if (this.m_iHideFooterCount > 0) {
			return false;
		}
		if (this.m_Instance.IsVRWindow()) {
			return false;
		}
		if (this.m_bKeyboardVisible) {
			return false;
		}
		if (this.m_Instance.GetShowingGlobalModal()) {
			return true;
		}
		let e = this.m_Instance.BRouteMatch([s.BV.GamepadUI.AppRunning()]);
		const t =
			this.m_Instance.CompositionStateStore.GetCurrentlyFocusedAppidSubscribableValue()
				.Value === l.VE;
		return (
			(!e || this.m_Instance.MenuStore.GetOpenSideMenu() != o.Ez.None || !!t) &&
			(this.m_Instance.MenuStore.GetOpenSideMenu() != o.Ez.QuickAccess ||
				(!e && !!t))
		);
	}
}
(0, n.Cg)([a.sH], c.prototype, "m_iHideFooterCount", undefined);
(0, n.Cg)([a.sH], c.prototype, "m_bKeyboardVisible", undefined);
(0, n.Cg)([a.sH], c.prototype, "m_flCurrentFooterHeight", undefined);
var m = require(/*webcrack:missing*/ "./49455.js");
var u = require("./10606.js");
var d = require(/*webcrack:missing*/ "./49519.js");
var A = require("./46422.js");
var p = require("./96593.js");
var g = require(/*webcrack:missing*/ "./72476.js");
var h = require(/*webcrack:missing*/ "./93960.js");
var C = require(/*webcrack:missing*/ "./90039.js");
var _ = require(/*webcrack:missing*/ "./79769.js");
var f = require(/*webcrack:missing*/ "./83599.js");
var b = require("./82011.js");
(0, n.Cg)(
	[h.o],
	class {
		m_fnCallback = undefined;
		constructor() {
			SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
		}
		RegisterForMessage(e) {
			this.m_fnCallback = e;
		}
		PostMessage(e) {
			let t = JSON.stringify(e);
			SteamClient.BrowserView.PostMessageToParent(b.T, t);
		}
		OnMessage(e, t) {
			if (e == b.T) {
				const e = JSON.parse(t);
				this.m_fnCallback(e);
			} else if (e == "Checkout") {
				let e = JSON.parse(t);
				if (e.action == "paypal_success") {
					try {
						window.OnPayPalSuccess(e.transid);
					} catch (e) {}
				} else if (e.action == "paypal_cancel") {
					try {
						window.OnPayPalCancel(e.transid);
					} catch (e) {}
				}
			} else if (e == "PinnedView") {
				let e = JSON.parse(t);
				try {
					window.HandleOverlayWindowPinnedView(
						e.bPinned == 1,
						e.bShowPinnedView == 1,
					);
				} catch (e) {}
			}
		}
	}.prototype,
	"OnMessage",
	null,
);
(0, n.Cg)(
	[h.o],
	class {
		m_postWindow;
		m_fnCallback = undefined;
		constructor(e) {
			this.m_postWindow = e;
			window.addEventListener("message", this.OnMessage);
		}
		RegisterForMessage(e) {
			this.m_fnCallback = e;
		}
		PostMessage(e) {
			let t = JSON.stringify(e);
			this.m_postWindow.postMessage(
				{
					gamepadMessage: b.T,
					args: t,
				},
				"*",
			);
		}
		OnMessage(e) {
			let t = e?.data;
			if (t && t.gamepadMessage == b.T && t.args) {
				const e = JSON.parse(t.args);
				this.m_fnCallback(e);
			}
		}
	}.prototype,
	"OnMessage",
	null,
);
const y = new f.wd("WebBrowser").Debug;
class S {
	m_NavigationController;
	m_postMessage;
	m_eGameInputSupportLevel = (0, _.Jc)(b.h.Unknown);
	m_CallbackOnUnhandledInput = new C.l();
	m_CallbackUpdateActionDescriptions = new C.l();
	m_lastActionDescriptions;
	constructor(e, t) {
		this.m_NavigationController = e;
		this.m_postMessage = t;
		this.m_postMessage.RegisterForMessage(this.OnMessage);
	}
	OnMessage(e) {
		switch (e.type) {
			case "ButtonPressed":
				this.m_CallbackOnUnhandledInput.Dispatch(e.data.button);
				break;
			case "GameInputState":
				this.SetGameInputSupportLevel(e.data.support, e.data.source);
				break;
			case "PageUnloading":
				this.SetGameInputSupportLevel(b.h.PageUnloading, "PageUnloading");
				this.m_CallbackUpdateActionDescriptions.Dispatch({});
				break;
			case "UpdateActionDescriptions":
				this.m_lastActionDescriptions = e.data.descriptions;
				this.m_CallbackUpdateActionDescriptions.Dispatch(e.data.descriptions);
		}
	}
	TakeFocus() {
		this.m_postMessage.PostMessage({
			type: "TakeFocus",
		});
	}
	ForwardGamepadEventDetail(e, t) {
		const r = {
			type: "ForwardedGameEventDetail",
			data: {
				event: e,
				details: t,
			},
		};
		this.m_postMessage.PostMessage(r);
	}
	OnUnhandledInputCallbacks() {
		return this.m_CallbackOnUnhandledInput;
	}
	GetGameInputSupportLevel() {
		return this.m_eGameInputSupportLevel;
	}
	BClientManagesVirtualKeyboard() {
		switch (this.m_eGameInputSupportLevel.Value) {
			case b.h.Full:
			case b.h.Basic:
				return true;
			default:
				return false;
		}
	}
	SetGameInputSupportLevel(e, t) {
		if (this.m_eGameInputSupportLevel.Value != e) {
			y(`SetGameInputSupportLevel ( ${t} ): ${e.toString()}`);
			this.m_eGameInputSupportLevel.Set(e);
		}
	}
	RegisterOnActionDescriptionsChangedCallback(e) {
		if (this.m_lastActionDescriptions) {
			e(this.m_lastActionDescriptions);
		}
		return this.m_CallbackUpdateActionDescriptions.Register(e).Unregister;
	}
}
(0, n.Cg)([h.o], S.prototype, "OnMessage", null);
class w {
	m_browser;
	m_fnCallback;
	constructor(e) {
		this.m_browser = e;
		this.m_browser.on("message", this.OnMessage);
	}
	RegisterForMessage(e) {
		this.m_fnCallback = e;
	}
	PostMessage(e) {
		let t = JSON.stringify(e);
		try {
			this.m_browser.PostMessage(b.T, t);
		} catch (e) {}
	}
	OnMessage(e, t) {
		if (e == b.T) {
			const e = JSON.parse(t);
			if (this.m_fnCallback) {
				this.m_fnCallback(e);
			}
		}
	}
}
(0, n.Cg)([h.o], w.prototype, "OnMessage", null);
var B = require(/*webcrack:missing*/ "./736.js");
var v = require(/*webcrack:missing*/ "./85688.js");
const I = "VirtualKeyboardMessage";
function E(e) {
	return e && e.type === I;
}
class M {
	m_ownerWindow;
	constructor() {}
	Init(e) {
		this.m_ownerWindow = e;
		this.m_ownerWindow.addEventListener("message", this.OnMessage);
		return () => {
			this.m_ownerWindow.removeEventListener("message", this.OnMessage);
			this.m_ownerWindow = undefined;
		};
	}
	CreateVirtualKeyboardRef() {
		return {
			ShowVirtualKeyboard: this.ShowVirtualKeyboard,
			ShowModalKeyboard: this.ShowModalKeyboard,
			SetAsCurrentVirtualKeyboardTarget: () => {},
			HideVirtualKeyboard: this.HideVirtualKeyboard,
			DelayHideVirtualKeyboard: this.HideVirtualKeyboard,
			BIsActive: () => true,
			BIsElementValidForInput: () => true,
		};
	}
	ShowVirtualKeyboard() {
		this.SendMessage({
			message: "ShowVirtualKeyboard",
		});
	}
	ShowModalKeyboard() {
		this.SendMessage({
			message: "ShowModalKeyboard",
		});
	}
	HideVirtualKeyboard(e) {
		this.SendMessage({
			message: "HideVirtualKeyboard",
			msDelay: e,
		});
	}
	OnBrowserViewMessage(e, t) {
		if (e == I) {
			this.InternalDispatchMessage(JSON.parse(t));
		}
	}
	OnMessage(e) {
		this.InternalDispatchMessage(e.data);
	}
	InternalDispatchMessage(e) {
		if (E(e)) {
			e.message;
		}
	}
	SendMessage(e) {
		const t = {
			type: "VirtualKeyboardMessage",
			...e,
		};
		if ((0, B.Dp)("BrowserView.PostMessageToParent")) {
			SteamClient.BrowserView.PostMessageToParent(t.type, JSON.stringify(t));
		} else if (this.m_ownerWindow) {
			(0, v.w)(
				this.m_ownerWindow.parent &&
					this.m_ownerWindow.parent != this.m_ownerWindow,
				"CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
			);
			this.m_ownerWindow.parent.postMessage(t, "*");
		}
	}
}
(0, n.Cg)([h.o], M.prototype, "ShowVirtualKeyboard", null);
(0, n.Cg)([h.o], M.prototype, "ShowModalKeyboard", null);
(0, n.Cg)([h.o], M.prototype, "HideVirtualKeyboard", null);
(0, n.Cg)([h.o], M.prototype, "OnBrowserViewMessage", null);
(0, n.Cg)([h.o], M.prototype, "OnMessage", null);
class _T {
	m_showKeyboard;
	m_showModalKeyboard;
	m_hideKeyboard;
	constructor(e, t, r, n) {
		this.m_showKeyboard = t;
		this.m_showModalKeyboard = r;
		this.m_hideKeyboard = n;
		e.on("message", this.OnMessage);
	}
	OnMessage(e, t, r) {
		if (e == I) {
			const e = JSON.parse(t);
			if (E(e)) {
				switch (e.message) {
					case "ShowVirtualKeyboard":
						this.m_showKeyboard();
						break;
					case "ShowModalKeyboard":
						this.m_showModalKeyboard();
						break;
					case "HideVirtualKeyboard":
						this.m_hideKeyboard();
				}
			}
		}
	}
}
(0, n.Cg)([h.o], _T.prototype, "OnMessage", null);
var R = require("./43152.js");
var k = require(/*webcrack:missing*/ "./54644.js");
class D {
	Log = new f.wd("WebBrowser", () => this.m_strName).Debug;
	m_strName;
	m_strUserAgentIdentifier;
	m_strUserAgentOverride;
	m_strVROverlayKey;
	m_strInitialURL;
	m_bUseVRKeyboard;
	m_browserView = null;
	m_refKeyboard;
	m_virtualKeyboardHost;
	m_gamepadBridge;
	m_mapMessageCallbacks;
	m_bIsDestroying = false;
	m_fnBeforeCloseHandler = null;
	m_history = undefined;
	m_loadErrorCode = undefined;
	m_loadErrorURL = undefined;
	m_loadErrorDesc = undefined;
	m_bLoading = false;
	m_bExternalRequest = false;
	m_bSeenLoadStartForExternalRequest = true;
	m_URLRequested = null;
	m_URL = "";
	m_strTitle = "";
	m_bCanGoBackward = false;
	m_bCanGoForward = false;
	m_fnGoBackOverride = undefined;
	constructor(e, t) {
		(0, a.Gn)(this);
		this.m_strName = e;
		this.m_strUserAgentIdentifier =
			t?.strUserAgentIdentifier ?? "Valve Steam Client";
		this.m_strUserAgentOverride = t?.strUserAgentOverride ?? "";
		this.m_strVROverlayKey = t?.strVROverlayKey;
		this.m_strInitialURL = t?.strInitialURL;
	}
	get name() {
		return this.m_strName;
	}
	Init(e, t, r) {
		this.m_bUseVRKeyboard = t.BIsVRKeyboard();
		this.m_browserView = SteamClient.BrowserView.Create({
			parentPopupBrowserID: r?.SteamClient.Browser.GetBrowserID(),
			strUserAgentIdentifier: this.m_strUserAgentIdentifier,
			strUserAgentOverride: this.m_strUserAgentOverride,
			strVROverlayKey: this.m_strVROverlayKey,
			strInitialURL: this.m_strInitialURL,
		});
		this.m_browserView.SetName(this.m_strName);
		this.m_browserView.SetVisible(false);
		this.m_browserView.on("start-request", this.OnStartRequest);
		this.m_browserView.on("start-loading", this.OnStartLoad);
		this.m_browserView.on("finished-request", this.OnFinishedRequest);
		this.m_browserView.on("node-has-focus", this.OnNodeHasFocus);
		this.m_browserView.on("history-changed", this.OnHistoryChanged);
		this.m_browserView.on("load-error", this.OnLoadError);
		this.m_browserView.on("before-close", this.OnBeforeClose);
		this.m_browserView.on("set-title", this.OnSetTitle);
		this.m_browserView.on(
			"can-go-back-forward-changed",
			this.OnCanGoBackForwardChanged,
		);
		this.m_refKeyboard = t.CreateVirtualKeyboardRef({
			onTextEntered: this.OnVirtualKeyboardPress,
		});
		if (this.m_bUseVRKeyboard) {
			this.m_virtualKeyboardHost = new _T(
				this.m_browserView,
				() => this.m_browserView.SetVRKeyboardVisibility(true),
				() => this.m_browserView.SetVRKeyboardVisibility(true),
				() => this.m_browserView.SetVRKeyboardVisibility(false),
			);
		} else {
			this.m_virtualKeyboardHost = new _T(
				this.m_browserView,
				() => this.m_refKeyboard.ShowVirtualKeyboard(),
				() => this.m_refKeyboard.ShowModalKeyboard(),
				() => this.m_refKeyboard.HideVirtualKeyboard(),
			);
		}
		this.m_gamepadBridge = (function (e, t) {
			return new S(e, new w(t));
		})(e, this.m_browserView);
	}
	Destroy() {
		if (this.m_browserView) {
			this.m_bIsDestroying = true;
			SteamClient.BrowserView.Destroy(this.m_browserView);
			this.m_browserView = null;
		}
	}
	GetGameInputSupportLevel() {
		return this.m_gamepadBridge.GetGameInputSupportLevel();
	}
	ForwardGamepadEventDetail(e, t) {
		if (this.m_browserView) {
			this.m_browserView.NotifyUserActivation();
			this.m_gamepadBridge.ForwardGamepadEventDetail(e, t);
		}
	}
	OnUnhandledInputCallbacks() {
		return this.m_gamepadBridge.OnUnhandledInputCallbacks();
	}
	RegisterOnActionDescriptionsChangedCallback(e) {
		console.log("RegisterOnActionDescriptionsChangedCallback");
		return this.m_gamepadBridge.RegisterOnActionDescriptionsChangedCallback(e);
	}
	GetBrowser() {
		return this.m_browserView;
	}
	SetBeforeCloseHandler(e) {
		this.m_fnBeforeCloseHandler = e;
	}
	SetGoBackOverride(e) {
		this.m_fnGoBackOverride = e;
	}
	OnStartRequest(e) {
		this.Log(`OnStartRequest ${e}`);
		this.m_bLoading = true;
		this.m_URLRequested = e;
		this.m_loadErrorCode = null;
		this.m_loadErrorURL = null;
		this.m_loadErrorDesc = null;
		this.m_gamepadBridge.SetGameInputSupportLevel(
			b.h.Unknown,
			"OnStartRequest",
		);
		this.m_onStartRequestCallbacks.Dispatch(e);
	}
	OnStartLoad(e, t) {
		this.Log(`OnStartLoad ${e}`);
		this.m_URLRequested = e;
		if (this.m_bSeenLoadStartForExternalRequest) {
			this.m_bExternalRequest = false;
		}
		this.m_bSeenLoadStartForExternalRequest = true;
		this.m_onStartLoadingCallbacks.Dispatch(e, t);
	}
	OnFinishedRequest(e, t) {
		this.Log(`OnFinishedRequest ${e}`);
		this.m_strTitle = t;
		this.m_URL = e;
		this.m_bLoading = false;
		this.m_onFinishedRequestCallbacks.Dispatch(e, t);
		setTimeout(() => {
			switch (this.m_gamepadBridge.GetGameInputSupportLevel().Value) {
				case b.h.Unknown:
				case b.h.PageUnloading:
					this.m_gamepadBridge.SetGameInputSupportLevel(
						b.h.None,
						"OnFinishedRequest",
					);
			}
		}, 1);
	}
	OnBeforeClose() {
		if (this.m_fnBeforeCloseHandler) {
			this.m_fnBeforeCloseHandler(this.m_bIsDestroying);
		}
	}
	OnSetTitle(e) {
		this.m_strTitle = e;
	}
	OnCanGoBackForwardChanged(e, t) {
		this.m_bCanGoBackward = e;
		this.m_bCanGoForward = t;
	}
	OnHistoryChanged(e) {
		this.m_history = e;
	}
	OnLoadError(e, t, r) {
		this.Log(`OnLoadError (${t}): "${r}" (${e})`);
		this.m_loadErrorCode = e;
		this.m_loadErrorURL = t;
		this.m_loadErrorDesc = r;
	}
	OnVirtualKeyboardPress(e) {
		this.m_browserView.SetFocus(false);
		this.m_browserView.SetFocus(true);
		if (this.m_bUseVRKeyboard) {
			(0, R._1)(e);
		} else {
			(0, R.iv)(e);
		}
	}
	BIsLoadingURL() {
		return this.m_bLoading;
	}
	BExternalTriggeredLoad() {
		return this.m_bExternalRequest;
	}
	get DisplayURL() {
		if (this.m_bLoading) {
			return this.m_URLRequested;
		} else {
			return this.m_URL;
		}
	}
	get URL() {
		return this.m_URL;
	}
	get History() {
		return this.m_history;
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
	Reload() {
		this.m_browserView.Reload();
	}
	GoBack() {
		if (!this.m_fnGoBackOverride || !this.m_fnGoBackOverride()) {
			this.m_browserView.GoBack();
		}
	}
	GoForward() {
		this.m_browserView.GoForward();
	}
	LoadURL(e) {
		if (this.m_browserView) {
			this.m_bExternalRequest = true;
			this.m_bSeenLoadStartForExternalRequest = false;
			this.m_bLoading = true;
			this.m_URLRequested = e;
			this.m_gamepadBridge.SetGameInputSupportLevel(b.h.Unknown, "LoadURL");
			this.m_browserView.LoadURL(e);
		}
	}
	OnNodeHasFocus(e, t, r, n, i) {
		if (!i || !this.m_gamepadBridge.BClientManagesVirtualKeyboard()) {
			if (this.m_bUseVRKeyboard) {
				if ((0, k.TV)(t, r)) {
					this.m_browserView.SetVRKeyboardVisibility(true);
				} else {
					this.m_browserView.SetVRKeyboardVisibility(false);
				}
			} else if ((0, k.TV)(t, r)) {
				this.m_refKeyboard.ShowVirtualKeyboard();
			} else {
				this.m_refKeyboard.HideVirtualKeyboard();
			}
		}
	}
	GetOnMessageCallbacks(e) {
		if (!this.m_mapMessageCallbacks) {
			this.m_mapMessageCallbacks = new Map();
			this.m_browserView.on("message", this.BrowserViewOnMessage);
		}
		if (!this.m_mapMessageCallbacks.has(e)) {
			this.m_mapMessageCallbacks.set(e, new _.lu());
		}
		return this.m_mapMessageCallbacks.get(e);
	}
	BrowserViewOnMessage(e, t, r) {
		const n = this.m_mapMessageCallbacks.get(e);
		if (n) {
			n.Dispatch(t, r);
		}
	}
	m_onStartRequestCallbacks = new _.lu();
	m_onStartLoadingCallbacks = new _.lu();
	m_onFinishedRequestCallbacks = new _.lu();
	get StartRequestCallbacks() {
		return this.m_onStartRequestCallbacks;
	}
	get StartLoadingCallbacks() {
		return this.m_onStartLoadingCallbacks;
	}
	get FinishedRequestCallbacks() {
		return this.m_onFinishedRequestCallbacks;
	}
}
(0, n.Cg)([a.sH.ref], D.prototype, "m_history", undefined);
(0, n.Cg)([a.sH], D.prototype, "m_loadErrorCode", undefined);
(0, n.Cg)([a.sH], D.prototype, "m_loadErrorURL", undefined);
(0, n.Cg)([a.sH], D.prototype, "m_loadErrorDesc", undefined);
(0, n.Cg)([a.sH], D.prototype, "m_bLoading", undefined);
(0, n.Cg)([a.sH], D.prototype, "m_bExternalRequest", undefined);
(0, n.Cg)([a.sH], D.prototype, "m_URLRequested", undefined);
(0, n.Cg)([a.sH], D.prototype, "m_URL", undefined);
(0, n.Cg)([a.sH], D.prototype, "m_strTitle", undefined);
(0, n.Cg)([a.sH], D.prototype, "m_bCanGoBackward", undefined);
(0, n.Cg)([a.sH], D.prototype, "m_bCanGoForward", undefined);
(0, n.Cg)([a.sH], D.prototype, "m_fnGoBackOverride", undefined);
(0, n.Cg)([a.XI.bound], D.prototype, "OnStartRequest", null);
(0, n.Cg)([a.XI.bound], D.prototype, "OnStartLoad", null);
(0, n.Cg)([a.XI.bound], D.prototype, "OnFinishedRequest", null);
(0, n.Cg)([h.o], D.prototype, "OnBeforeClose", null);
(0, n.Cg)([a.XI.bound], D.prototype, "OnSetTitle", null);
(0, n.Cg)([a.XI.bound], D.prototype, "OnCanGoBackForwardChanged", null);
(0, n.Cg)([h.o], D.prototype, "OnHistoryChanged", null);
(0, n.Cg)([a.XI.bound], D.prototype, "OnLoadError", null);
(0, n.Cg)([h.o], D.prototype, "OnVirtualKeyboardPress", null);
(0, n.Cg)([h.o], D.prototype, "Reload", null);
(0, n.Cg)([h.o], D.prototype, "GoBack", null);
(0, n.Cg)([h.o], D.prototype, "GoForward", null);
(0, n.Cg)([a.XI], D.prototype, "LoadURL", null);
(0, n.Cg)([h.o], D.prototype, "OnNodeHasFocus", null);
(0, n.Cg)([h.o], D.prototype, "BrowserViewOnMessage", null);
var N = require(/*webcrack:missing*/ "./85243.js");
var F = require(/*webcrack:missing*/ "./44846.js");
var G = require("./43014.js");
var O = require(/*webcrack:missing*/ "./46108.js");
var P = require("./69913.js");
var L = require("./22969.js");
var z = require("./35425.js");
var x = require("./18052.js");
new f.wd("VR");
export class T {
	m_params = undefined;
	m_bIsGamepadApplicationUIInitialized = false;
	m_HeaderStore = new i.my(this);
	m_FooterStore = new c(this);
	m_CompositionStateStore = new l._n(this);
	m_MenuStore = new o.QG(this);
	m_VirtualKeyboardManager = new R.PE();
	m_DesktopOverlay;
	m_ModalManager;
	m_Navigator;
	m_VRPooledPopupStore;
	m_FocusNavContext;
	m_ActionDescriptionStore = new G.Ww();
	m_flLastHomePressMS = 0;
	m_flLastQuickAccessPressMS = 0;
	m_lastControllerConfigURL = undefined;
	m_BrowserWindow = undefined;
	m_bShowingGlobalModal = false;
	m_history;
	m_locationPathname = undefined;
	m_StoreBrowser;
	m_fnFocusApplicationRoot;
	m_notificationPosition = undefined;
	m_arrBackstack = [];
	m_currentBackstackLevel = 0;
	constructor(e) {
		(0, a.Gn)(this);
		this.m_params = e;
		let t =
			e.eWindowType != N.W7.OverlayDesktopUI &&
			e.eWindowType != N.W7.OverlayGamepadUI &&
			(0, g.Pr)()
				? F.WU.k_EPositionTopRight
				: F.WU.k_EPositionBottomRight;
		this.m_notificationPosition = {
			position: t,
			horizontalInset: 0,
			verticalInset: 0,
		};
	}
	BIsGamepadApplicationUIInitialized() {
		return this.m_bIsGamepadApplicationUIInitialized;
	}
	get params() {
		return this.m_params;
	}
	get HeaderStore() {
		return this.m_HeaderStore;
	}
	get FooterStore() {
		return this.m_FooterStore;
	}
	get CompositionStateStore() {
		return this.m_CompositionStateStore;
	}
	get MenuStore() {
		return this.m_MenuStore;
	}
	get DesktopOverlay() {
		if (!this.m_DesktopOverlay && this.IsDesktopOverlayWindow()) {
			this.m_DesktopOverlay = new P.z1(this);
		}
		return this.m_DesktopOverlay;
	}
	get VirtualKeyboardManager() {
		return this.m_VirtualKeyboardManager;
	}
	get ModalManager() {
		return this.m_ModalManager;
	}
	get BrowserWindow() {
		return this.m_BrowserWindow;
	}
	get ActionDescriptionStore() {
		return this.m_ActionDescriptionStore;
	}
	get Navigator() {
		return this.m_Navigator;
	}
	get VRPooledPopupStore() {
		return this.m_VRPooledPopupStore;
	}
	FocusApplicationRoot() {
		if (this.m_ModalManager?.modals.length) {
			console.warn(
				"Not focusing application root because there is a visible modal",
			);
		} else if (this.m_fnFocusApplicationRoot) {
			this.m_fnFocusApplicationRoot();
		} else {
			(0, m.w)(false, "FocusApplicationRoot called before ready");
		}
	}
	get forcedAppID() {
		if (this.m_params.eWindowType == N.W7.OverlayGamepadUI) {
			return this.m_params.appid;
		} else {
			return undefined;
		}
	}
	get NotificationPosition() {
		return this.m_notificationPosition;
	}
	SetNotificationPosition(e, t, r) {
		if (e != F.WU.k_EPositionInvalid) {
			this.m_notificationPosition.position = e;
		}
		if (t >= 0 && r >= 0) {
			this.m_notificationPosition.horizontalInset = t;
			this.m_notificationPosition.verticalInset = r;
		}
	}
	BUseSeparateOverlayWindows() {
		return !this.IsGamepadUIOverlayWindow() && !g.TS.IN_GAMESCOPE;
	}
	get RunningApps() {
		if (!this.BUseSeparateOverlayWindows()) {
			return A.oy.RunningApps;
		}
		const e = this.MainRunningApp;
		if (e) {
			return [e];
		} else {
			return [];
		}
	}
	get MainRunningApp() {
		const e = this.MainRunningAppID;
		return e && p.tw.GetAppOverviewByAppID(e);
	}
	get MainRunningAppID() {
		if (this.BUseSeparateOverlayWindows()) {
			if (this.IsGamepadUIOverlayWindow() || this.IsDesktopOverlayWindow()) {
				return this.m_params.appid;
			} else {
				return undefined;
			}
		} else {
			return A.oy.MainRunningAppID;
		}
	}
	Init() {
		const e = [];
		e.push(...this.m_CompositionStateStore.Init());
		this.m_VirtualKeyboardManager.Init(
			this.BUseVRKeyboard(),
			this.m_BrowserWindow,
		);
		e.push(
			this.m_VirtualKeyboardManager.IsShowingVirtualKeyboard.Subscribe((e) =>
				this.OnVirtualKeyboardShown(e),
			).Unsubscribe,
		);
		return () => e.forEach((e) => e());
	}
	InitGamepadApplicationUI(e) {
		const t = [];
		t.push(...this.m_HeaderStore.Init());
		t.push(...this.m_FooterStore.Init());
		if (this.BHasMenus()) {
			t.push(...this.m_MenuStore.Init());
		}
		if (this.IsVRWindow()) {
			this.m_VRPooledPopupStore = new L.ou(this);
			t.push(...this.m_VRPooledPopupStore.Init());
		}
		this.m_ModalManager = e;
		if (this.IsMainGamepadUIWindow() || this.IsVRWindowInGamescope()) {
			t.push(u.BR.RegisterModalManager(e, window));
			t.push(
				e.ModalCountChangedCallbacks.Register(A.oy.OnModalCountChanged)
					.Unregister,
			);
		}
		this.InitializeDefaultActions();
		t.push(
			O.pf
				.GetTokensChangedCallbackList()
				.Register(() => this.InitializeDefaultActions()).Unregister,
		);
		t.push(() => {
			if (this.m_StoreBrowser) {
				this.m_StoreBrowser.Destroy();
				this.m_StoreBrowser = undefined;
			}
		});
		this.OnApplicationUIInitComplete();
		return () => t.forEach((e) => e());
	}
	InitFocusNavContext(e) {
		const t = [];
		this.m_FocusNavContext = e;
		if (e) {
			t.push(this.ActionDescriptionStore.InitContext(this.m_FocusNavContext));
			t.push(
				A.oy.GamepadUIAudio.RegisterFocusNavContext(this.m_FocusNavContext),
			);
		}
		return () => t.forEach((e) => e());
	}
	InitDesktopHistory(e) {
		this.m_history = e;
		this.m_locationPathname = e.location.pathname;
		this.m_fnFocusApplicationRoot = () => {
			this.BrowserWindow?.SteamClient.Window.BringToFront(
				F.iE.k_EWindowBringToFrontAndForceOS,
			);
		};
		const t = this.m_history.listen((e) => {
			if (this.m_locationPathname != e.pathname) {
				this.m_locationPathname = e.pathname;
			}
		});
		return () => {
			t();
			this.m_history = undefined;
		};
	}
	InitNavigation(e, t) {
		this.m_history = e;
		this.m_locationPathname = e.location.pathname;
		this.m_fnFocusApplicationRoot = t;
		const r = this.m_history.listen((e, t) => {
			if (this.m_locationPathname != e.pathname) {
				this.m_locationPathname = e.pathname;
				switch (t) {
					case "POP": {
						let e = this.m_arrBackstack.findIndex(
							(e) => e == this.m_locationPathname,
						);
						if (e < 0) {
							this.m_arrBackstack = [this.m_locationPathname];
							this.m_currentBackstackLevel = 0;
						} else {
							this.m_arrBackstack = this.m_arrBackstack.slice(0, e + 1);
							this.m_currentBackstackLevel = e;
						}
						break;
					}
					case "PUSH": {
						let e = this.m_arrBackstack.findIndex(
							(e) => e == this.m_locationPathname,
						);
						if (e != -1) {
							this.m_currentBackstackLevel = e;
							this.m_arrBackstack = this.m_arrBackstack.slice(0, e + 1);
						} else {
							this.m_arrBackstack.push(this.m_locationPathname);
							this.m_currentBackstackLevel = this.m_arrBackstack.length - 1;
						}
						break;
					}
					case "REPLACE":
						this.m_arrBackstack.pop();
						this.m_arrBackstack.push(this.m_locationPathname);
				}
			}
		});
		this.OnApplicationUIInitComplete();
		return () => {
			r();
			this.m_history = undefined;
			this.m_fnFocusApplicationRoot = undefined;
		};
	}
	OnApplicationUIInitComplete() {
		if (this.m_ModalManager && this.m_history) {
			this.m_bIsGamepadApplicationUIInitialized = true;
		}
	}
	SetBrowserWindow(e) {
		this.m_BrowserWindow = e;
		if (!e) {
			this.m_history = undefined;
			this.m_fnFocusApplicationRoot = undefined;
			this.m_locationPathname = undefined;
			this.m_bIsGamepadApplicationUIInitialized = false;
		}
	}
	SetNavigator(e) {
		this.m_Navigator = e;
	}
	BRouteMatch(e) {
		return !!(0, d.B6)(this.m_locationPathname, e);
	}
	BIsOverlayPath() {
		return A.oy.BIsOverlayPath(this.m_locationPathname);
	}
	get LocationPathName() {
		return this.m_locationPathname;
	}
	Navigate(e, t = false, r = false, n = undefined) {
		if (!r || !this.BRouteMatch(e)) {
			if (t) {
				this.m_history.replace(e, n);
			} else {
				this.m_history.push(e, n);
			}
		}
		this.FocusApplicationRoot();
	}
	NavigateWithoutChangingFocus(e, t = false, r = false, n = undefined) {
		if (!r || !this.BRouteMatch(e)) {
			if (t) {
				this.m_history.replace(e, n);
			} else {
				this.m_history.push(e, n);
			}
		}
	}
	BViewingPreLoginRoute() {
		console.log("BViewingPreLoginRoute", this.m_locationPathname);
		if (
			!this.m_locationPathname ||
			this.m_locationPathname == "/" ||
			this.m_locationPathname == "/index.html" ||
			this.m_locationPathname == "/sp.html"
		) {
			return true;
		}
		let e = [s.BV.GamepadUI.Login()];
		return this.BRouteMatch(e);
	}
	NavigateBackToRoute(e) {
		let t = this.m_arrBackstack.findIndex((t) => t == e);
		if (t >= 0) {
			this.m_history.go(t - this.m_currentBackstackLevel);
		} else {
			this.Navigate(e, false, true);
		}
	}
	NavigateToRunningApp(e = false) {
		this.Navigate(s.BV.GamepadUI.AppRunning(), e, true);
	}
	NavigateToStandaloneAppRunningControls(e = false) {
		this.Navigate(s.BV.GamepadUI.AppOverlay.AppRunningControls(), e, true);
	}
	NavigateToSteamWeb(e) {
		this.m_Navigator.SteamWeb(e);
	}
	NavigateBack() {
		this.m_history.goBack();
	}
	NavigateHistory(e) {
		this.m_history.go(e);
	}
	BHasMenus() {
		return this.IsGamepadUIWindow();
	}
	IsGamepadUIWindow() {
		return (
			!!this.IsMainGamepadUIWindow() ||
			!!this.IsGamepadUIOverlayWindow() ||
			!!this.IsVRWindow() ||
			!!this.IsStandaloneKeyboardWindow()
		);
	}
	IsDesktopUIWindow() {
		return (
			!!this.IsMainDesktopWindow() ||
			!!this.IsDesktopOverlayWindow() ||
			!!this.IsSteamChinaReviewLauncher()
		);
	}
	IsMainGamepadUIWindow() {
		return this.params.eWindowType == N.W7.MainGamepadUI;
	}
	IsMainDesktopWindow() {
		return this.params.eWindowType == N.W7.MainDesktopUI;
	}
	IsSteamChinaReviewLauncher() {
		return this.params.eWindowType == N.W7.SteamChinaReviewLauncher;
	}
	IsGamepadUIOverlayWindow() {
		return this.params.eWindowType == N.W7.OverlayGamepadUI;
	}
	IsDesktopOverlayWindow() {
		return this.params.eWindowType == N.W7.OverlayDesktopUI;
	}
	IsStandaloneKeyboardWindow() {
		return this.params.eWindowType == N.W7.Keyboard;
	}
	IsControllerConfiguratorWindow() {
		return this.params.eWindowType == N.W7.ControllerConfigurator;
	}
	IsVRWindow() {
		return this.params.eWindowType == N.W7.VR;
	}
	IsVRSimulatedOnDesktopWindow() {
		return this.IsVRWindow() && this.params.bSimulateOnDesktop;
	}
	IsVRWindowInGamescope() {
		return this.IsVRWindow() && this.params.bViaGamescope;
	}
	IsDesktopLoginWindow() {
		return this.params.eWindowType == N.W7.DesktopLogin;
	}
	get WindowType() {
		return this.params.eWindowType;
	}
	BUseVRKeyboard() {
		return this.IsVRWindow();
	}
	OnHomeButtonPressed() {
		if (!A.oy.BHomeAndQuickAccessButtonsEnabled()) {
			return;
		}
		if (this.m_VirtualKeyboardManager.IsShowingVirtualKeyboard.Value) {
			this.m_VirtualKeyboardManager.SetVirtualKeyboardHidden();
		}
		let e = performance.now();
		if (e - this.m_flLastHomePressMS < 300) {
			if (this.m_MenuStore.GetOpenSideMenu() == o.Ez.QuickAccess) {
				this.m_MenuStore.CloseSideMenus();
			}
			return;
		}
		this.m_flLastHomePressMS = e;
		const t =
			this.m_CompositionStateStore.GetCurrentlyFocusedAppidSubscribableValue()
				.Value === l.VE;
		const r = !!this.MainRunningAppID;
		if (r && this.m_lastControllerConfigURL !== undefined) {
			if (
				!(0, d.B6)(this.m_lastControllerConfigURL, {
					path: s.BV.GamepadUI.ControllerConfigurator.Root(
						this.MainRunningAppID,
					),
					exact: true,
				})
			) {
				this.Navigate(
					s.BV.GamepadUI.ControllerConfigurator.Root(this.MainRunningAppID),
				);
			}
			if (
				(0, d.B6)(this.m_lastControllerConfigURL, {
					path: s.BV.GamepadUI.ControllerConfigurator.ChooseBinding(
						this.MainRunningAppID,
					),
					exact: false,
				}) ||
				(0, d.B6)(this.m_lastControllerConfigURL, {
					path: s.BV.GamepadUI.ControllerConfigurator.ModeSettings(
						this.MainRunningAppID,
					),
					exact: false,
				})
			) {
				this.Navigate(
					s.BV.GamepadUI.ControllerConfigurator.Buttons(this.MainRunningAppID),
				);
			}
			this.Navigate(this.m_lastControllerConfigURL);
			this.m_lastControllerConfigURL = undefined;
			return;
		}
		if (r && !t) {
			if (
				(0, d.B6)(this.m_history.location.pathname, s.BV.GamepadUI.GameAPIOSK())
			) {
				SteamClient.Input.SetGamepadKeyboardText(false, "");
			}
			this.MenuStore.ToggleSideMenu(o.Ez.Main);
			return;
		}
		if (
			r &&
			(0, d.B6)(
				this.m_history.location.pathname,
				s.BV.GamepadUI.ControllerConfigurator.Root(),
			)
		) {
			this.m_lastControllerConfigURL = this.m_history.location.pathname;
			this.NavigateBackToRoute(s.BV.GamepadUI.AppRunning());
			return;
		}
		this.m_lastControllerConfigURL = undefined;
		this.MenuStore.ToggleSideMenu(o.Ez.Main);
	}
	OnQuickAccessButtonPressed() {
		if (
			!A.oy.BHomeAndQuickAccessButtonsEnabled() ||
			A.oy.WindowStore.BHasStandaloneKeyboard()
		) {
			return;
		}
		if (this.m_VirtualKeyboardManager.IsShowingVirtualKeyboard.Value) {
			this.m_VirtualKeyboardManager.SetVirtualKeyboardHidden();
		}
		let e = performance.now();
		if (!(e - this.m_flLastQuickAccessPressMS < 300)) {
			this.m_flLastQuickAccessPressMS = e;
			this.m_MenuStore.ToggleSideMenu(o.Ez.QuickAccess);
		}
	}
	OnVirtualKeyboardShown(e) {
		if (!e) {
			SteamClient.Input.ModalKeyboardDismissed();
		}
	}
	BCanPopVRDashboardForCurrentPath() {
		return (
			this.IsVRWindow() &&
			!this.BRouteMatch([s.BV.GamepadUI.AppRunning(), s.BV.Library.App.Root()])
		);
	}
	GetMainVROverlayKey() {
		if (this.IsVRWindow()) {
			return z.M9;
		} else {
			return undefined;
		}
	}
	SetShowingGlobalModal(e) {
		this.m_bShowingGlobalModal = e;
	}
	GetShowingGlobalModal() {
		return this.m_bShowingGlobalModal;
	}
	CreateBrowserView(e, t) {
		const r = new D(e, {
			strUserAgentIdentifier: this.params.strUserAgentIdentifier,
			...t,
		});
		let n = t?.ownerWindow ?? this.m_BrowserWindow;
		r.Init(A.oy.NavigationManager, this.m_VirtualKeyboardManager, n);
		return r;
	}
	GetStoreBrowser() {
		this.m_StoreBrowser ||= this.CreateBrowserView("MainBrowser", {
			strInitialURL: x.p,
		});
		return this.m_StoreBrowser;
	}
	SetStoreBrowserGlass(e) {
		if (this.m_StoreBrowser && this.m_StoreBrowser.GetBrowser()) {
			let t = e != o.Ez.None;
			let r = e != o.Ez.Main;
			let n = t;
			this.m_StoreBrowser.GetBrowser().AddGlass(t, r, n);
		}
	}
	get FocusNavActiveSubscribableValue() {
		return this.m_FocusNavContext.IsActive;
	}
	InitializeDefaultActions() {
		const e = {
			[G.g4.HomeMenu]: "#ActionButtonLabelMenu",
			[G.g4.A]: "#ActionButtonLabelSelect",
			[G.g4.B]: "#ActionButtonLabelBack",
		};
		this.ActionDescriptionStore.SetDefaultAction(G.g4.QuickMenu, null);
		this.ActionDescriptionStore.SetDefaultAction(
			G.g4.HomeMenu,
			(0, O.we)(e[G.g4.HomeMenu]),
		);
		this.ActionDescriptionStore.SetDefaultAction(G.g4.A, (0, O.we)(e[G.g4.A]));
		this.ActionDescriptionStore.SetDefaultAction(G.g4.B, (0, O.we)(e[G.g4.B]));
	}
}
(0, n.Cg)([a.sH], T.prototype, "m_params", undefined);
(0, n.Cg)(
	[a.sH],
	T.prototype,
	"m_bIsGamepadApplicationUIInitialized",
	undefined,
);
(0, n.Cg)([a.sH], T.prototype, "m_BrowserWindow", undefined);
(0, n.Cg)([a.sH], T.prototype, "m_bShowingGlobalModal", undefined);
(0, n.Cg)([a.sH], T.prototype, "m_locationPathname", undefined);
(0, n.Cg)([a.sH.deep], T.prototype, "m_notificationPosition", undefined);
(0, n.Cg)([h.o], T.prototype, "FocusApplicationRoot", null);
(0, n.Cg)([a.XI.bound], T.prototype, "SetNotificationPosition", null);
