import { AssertMsg } from "../../actual_src/utils/assert.js";
import i, { Q } from "./79099.js";
import a from "./329.js";
import o from "./46422.js";
import { sB, Bj, z8 } from "./67686.js";
import c from "./63696.js";
import m from "./11131.js";
import { OJ } from "./63439.js";
import d from "./37790.js";
import A from "./2862.js";
import p from "./84838.js";
import g from "./79769.js";
import { A as A_1 } from "./90765.js";
import C, { l6 } from "./42898.js";
const s = a;
export const Mb = -2147483648;
export const a$ = "DesktopUI";
export const Ij = m.Wf.Resizable;
export function nB(e) {
	const TRef = c.useRef(undefined);
	if (!TRef.current) {
		TRef.current = true;
		const r = "focus-popup-on-show";
		const n = sessionStorage.getItem(r);
		sessionStorage.setItem(r, String(e.WindowType));
		if (n) {
			return n !== String(e.WindowType);
		} else {
			return Q();
		}
	}
	return TRef.current;
}
export let Uv;
export function _Y(e, t, r, i, a) {
	AssertMsg(
		i.target_browser && i.target_browser.m_eUIMode != -1,
		"useSteamUIPopup - target browser should be specified, along with UI mode!",
		i,
	);
	const [m, setM] = c.useState(false);
	i = sB(t, e, i, {}, true);
	e = Bj(t, e);
	const { popup, element } = OJ(
		e,
		{
			html_class: s.SteamUIPopupHTML,
			popup_class: s.SteamUIPopupWindow,
			eCreationFlags: Ij,
			...i,
			body_class: A_1(
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
		if (!popup) {
			t.SetBrowserWindow(undefined);
			return;
		}
		if (r != Uv.Library) {
			popup.browserInfo = t.params.browserInfo;
		}
		t.SetBrowserWindow(popup);
		setM(true);
		const e = new g.e0();
		if (o.oy.NavigationManager) {
			e.Push(o.oy.NavigationManager.RegisterInputSource(new A.q(popup)));
			e.Push(o.oy.NavigationManager.RegisterInputSource(new p.K(popup)));
			if (r == Uv.GamepadUI) {
				e.Push(o.oy.NavigationManager.RegisterInputSource(new d.Q(popup)));
			}
		}
		return () => e.Unregister();
	}, [t, popup, r]);
	c.useEffect(() => () => t.SetBrowserWindow(undefined), [t]);
	z8(t, popup);
	return {
		popup: popup,
		element: m ? element : undefined,
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
	l6(e?.BrowserWindow, "message", r);
}
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.Library = 1)] = "Library";
	e[(e.GamepadUI = 2)] = "GamepadUI";
	e[(e.DesktopUI = 3)] = "DesktopUI";
})((Uv ||= {}));
