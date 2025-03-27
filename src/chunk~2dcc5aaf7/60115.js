import { ch } from "./33572.js";
import i, { $2 } from "./96680.js";
import a from "./63696.js";
import s from "./31084.js";
import o from "./61657.js";
import l from "./10606.js";
import { Fx } from "./73375.js";
import m, { fm } from "./89193.js";
export function k6(e, t, r) {
	const o = ch();
	const m = $2().BrowserWindow;
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
	const u = Fx(t?.GetBrowserView(), 1);
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
	const e = $2();
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
	const t = ch();
	const [r, setR] = a.useState(() => t.GetLastRequestedSideMenu() == e);
	a.useEffect(() => fm(() => setR(t.GetLastRequestedSideMenu() == e)), [t, e]);
	return r;
}
