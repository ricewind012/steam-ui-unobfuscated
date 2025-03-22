var n = require(/*webcrack:missing*/ "./85688.js");
var i = require(/*webcrack:missing*/ "./79099.js");
var a = require("./329.js");
var s = a;
var o = require("./46422.js");
var l = require("./67686.js");
var c = require(/*webcrack:missing*/ "./63696.js");
var m = require(/*webcrack:missing*/ "./11131.js");
var u = require(/*webcrack:missing*/ "./63439.js");
var d = require("./37790.js");
var A = require("./2862.js");
var p = require("./84838.js");
var g = require(/*webcrack:missing*/ "./79769.js");
var h = require(/*webcrack:missing*/ "./90765.js");
var C = require(/*webcrack:missing*/ "./42898.js");
export const Mb = -2147483648;
export const a$ = "DesktopUI";
export const Ij = m.Wf.Resizable;
export function nB(e) {
	const t = c.useRef(undefined);
	if (!t.current) {
		t.current = true;
		const r = "focus-popup-on-show";
		const n = sessionStorage.getItem(r);
		sessionStorage.setItem(r, String(e.WindowType));
		if (n) {
			return n !== String(e.WindowType);
		} else {
			return (0, i.Q)();
		}
	}
	return t.current;
}
export var Uv;
export function _Y(e, t, r, i, a) {
	(0, n.w)(
		i.target_browser && i.target_browser.m_eUIMode != -1,
		"useSteamUIPopup - target browser should be specified, along with UI mode!",
		i,
	);
	const [m, C] = c.useState(false);
	i = (0, l.sB)(t, e, i, {}, true);
	e = (0, l.Bj)(t, e);
	const { popup: _, element: y } = (0, u.OJ)(
		e,
		{
			html_class: s.SteamUIPopupHTML,
			popup_class: s.SteamUIPopupWindow,
			eCreationFlags: Ij,
			...i,
			body_class: (0, h.A)(
				i.body_class,
				s.SteamUIPopupWindowBody,
				r == Uv.GamepadUI && s.GamepadUIPopupWindowBody,
				r == Uv.DesktopUI && a$,
			),
			target_browser: i.target_browser,
		},
		a,
	);
	c.useLayoutEffect(() => {
		if (!_) {
			t.SetBrowserWindow(undefined);
			return;
		}
		if (r != Uv.Library) {
			_.browserInfo = t.params.browserInfo;
		}
		t.SetBrowserWindow(_);
		C(true);
		const e = new g.e0();
		if (o.oy.NavigationManager) {
			e.Push(o.oy.NavigationManager.RegisterInputSource(new A.q(_)));
			e.Push(o.oy.NavigationManager.RegisterInputSource(new p.K(_)));
			if (r == Uv.GamepadUI) {
				e.Push(o.oy.NavigationManager.RegisterInputSource(new d.Q(_)));
			}
		}
		return () => e.Unregister();
	}, [t, _, r]);
	c.useEffect(() => () => t.SetBrowserWindow(undefined), [t]);
	(0, l.z8)(t, _);
	return {
		popup: _,
		element: m ? y : undefined,
	};
}
export function yu(e, t) {
	const r = c.useCallback(
		(r) => {
			if (r.data == "window_enter_fullscreen") {
				e?.BrowserWindow.SteamClient.Window.ToggleFullScreen(true);
			} else if (r.data == "window_exit_fullscreen" && (t ?? 1)) {
				e?.BrowserWindow.SteamClient.Window.ToggleFullScreen(false);
			}
		},
		[t, e?.BrowserWindow],
	);
	(0, C.l6)(e?.BrowserWindow, "message", r);
}
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.Library = 1)] = "Library";
	e[(e.GamepadUI = 2)] = "GamepadUI";
	e[(e.DesktopUI = 3)] = "DesktopUI";
})((Uv ||= {}));
