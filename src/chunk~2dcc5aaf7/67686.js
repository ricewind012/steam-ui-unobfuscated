import n from "./85243.js";
import i, { oH } from "./38542.js";
import a, { $2 } from "./96680.js";
import s from "./63696.js";
import o from "./35425.js";
import l from "./31084.js";
import { OJ } from "./63439.js";
import m from "./45967.js";
import u from "./80467.js";
import A, { A as A_1 } from "./90765.js";
const d = u;
export function WR(e, t, r, n) {
	const o = $2();
	const o_BrowserWindow = o.BrowserWindow;
	t = sB(o, e, t, r, false);
	e = Bj(o, e);
	const { popup, element } = OJ(e, t, n);
	s.useEffect(() => {
		if (popup) {
			return l.XX.RegisterChildWindow(o_BrowserWindow, popup);
		}
	}, [popup, o_BrowserWindow]);
	oH(popup, (e) =>
		m.fR.Debug(
			`Overlay for VRPopup ${popup.name} visibility=${e ? "true" : "false"}`,
		),
	);
	z8(o, popup);
	return {
		popup: popup,
		element: element,
	};
}
const g = new Set();
let h = false;
export function z8(e, t) {
	s.useEffect(() => {
		if (t && t && e.IsVRWindow() && e.params.bSimulateOnDesktop) {
			const e = () => {
				if (!h) {
					h = true;
					for (const e of g.values()) {
						e.SteamClient?.Window?.BringToFront();
					}
					t.SteamClient?.Window?.BringToFront();
					setTimeout(() => (h = false), 1000);
				}
			};
			g.add(t);
			t.addEventListener("focus", e);
			return () => {
				t.removeEventListener("focus", e);
				g.delete(t);
			};
		}
	}, [e, t]);
}
export function sB(e, t, r, i, a) {
	if (e.IsVRWindow()) {
		if (e.params.bSimulateOnDesktop) {
			const t = {
				left: 50,
				top: 50,
			};
			switch (r.strVROverlayKey) {
				case e.GetMainVROverlayKey(): {
					t.left = 800;
					t.top = 290;
					break;
				}
				case o.rn: {
					t.top = 140;
					break;
				}
				case o.T3: {
					t.left = 800;
					t.top = 1090;
					break;
				}
				case o.A0: {
					t.left = 1300;
					t.top = 140;
					break;
				}
				default: {
					const n = r.strVROverlayKey.split(".") ?? [];
					let i = Number.parseInt(n[n.length - 1]);
					i = Number.isInteger(i) ? i - 1 : 0;
					if (r.strVROverlayKey.startsWith(o.uO)) {
						t.left = 400;
						t.top = 290;
					} else if (r.strVROverlayKey.startsWith(o.Ey)) {
						t.left += (r.dimensions?.width ?? 0) * 1.2 * i;
						t.top = 50;
					} else if (r.strVROverlayKey.startsWith(o.r)) {
						t.top = 290;
					}
				}
			}
			r = {
				...r,
				browserType: n.W.EBrowserType_DirectHWND,
				title: `${r.title} (Desktop Preview)`,
				dimensions: {
					...r?.dimensions,
					...t,
				},
			};
			("-Desktop");
		} else if (e.params.bViaGamescope && a) {
			r = {
				...r,
				browserType: n.W.EBrowserType_DirectHWND,
				title: "Steam",
				dimensions: {
					left: 50,
					top: 50,
					...r?.dimensions,
				},
			};
		}
		if (!i?.bSuppressGamepadUIStyles) {
			r = {
				...r,
				body_class: A_1(r.body_class, d.PopupBody, "GamepadMode", "BasicUI"),
			};
		}
	}
	return r;
}
export function Bj(e, t) {
	if (e.IsVRWindow() && e.params.bSimulateOnDesktop) {
		return `${t}-Desktop`;
	} else {
		return t;
	}
}
