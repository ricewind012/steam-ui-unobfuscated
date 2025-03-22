var n = require("./33572.js");
var i = require("./96680.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./31084.js");
var o = require(/*webcrack:missing*/ "./61657.js");
var l = require("./10606.js");
var c = require("./73375.js");
var m = require(/*webcrack:missing*/ "./89193.js");
export function k6(e, t, r) {
	const o = (0, n.ch)();
	const m = (0, i.$2)().BrowserWindow;
	a.useEffect(() => {
		if (t) {
			t.GetBrowserView().SetTouchGesturesToCancel([9, 10]);
		}
	}, [t]);
	a.useEffect(() => {
		if (t && r) {
			const e = t.GetViewWindow();
			return l.BR.RegisterModalManager(r, e);
		}
	}, [t, r]);
	a.useEffect(() => {
		if (t) {
			const e = t.GetViewWindow();
			return s.XX.RegisterChildWindow(m, e);
		}
	}, [t, m]);
	const u = (0, c.Fx)(t?.GetBrowserView(), 1);
	return {
		fnOnFocusNavActivated: a.useCallback(() => {
			t?.GetBrowserView().SetFocus(true);
			u();
			o.ToggleSideMenu(e, true);
		}, [o, e, t, u]),
		fnOnFocusNavDeactivated: a.useCallback(() => {
			t?.GetBrowserView().SetFocus(false);
			o.OnMenuDeactivated(e);
		}, [o, e, t]),
	};
}
export function on() {
	const e = (0, i.$2)();
	return a.useCallback(
		(t) => {
			if (t.detail.button == o.pR.STEAM_GUIDE) {
				console.log(`onGlobalMenuButtonDown ${e.BrowserWindow.name}`);
				e.OnHomeButtonPressed();
				t.stopPropagation();
			} else if (t.detail.button == o.pR.STEAM_QUICK_MENU) {
				e.OnQuickAccessButtonPressed();
				t.stopPropagation();
			}
		},
		[e],
	);
}
export function Y$(e) {
	const t = (0, n.ch)();
	const [r, i] = a.useState(() => t.GetLastRequestedSideMenu() == e);
	a.useEffect(
		() => (0, m.fm)(() => i(t.GetLastRequestedSideMenu() == e)),
		[t, e],
	);
	return r;
}
