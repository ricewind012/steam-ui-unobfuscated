var n = require(/*webcrack:missing*/ "./85243.js");
var i = require("./38542.js");
var a = require("./96680.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require("./35425.js");
var l = require(/*webcrack:missing*/ "./31084.js");
var c = require(/*webcrack:missing*/ "./63439.js");
var m = require("./45967.js");
var u = require("./80467.js");
var d = u;
var A = require(/*webcrack:missing*/ "./90765.js");
export function WR(e, t, r, n) {
	const o = (0, a.$2)();
	const u = o.BrowserWindow;
	t = sB(o, e, t, r, false);
	e = Bj(o, e);
	const { popup: d, element: A } = (0, c.OJ)(e, t, n);
	s.useEffect(() => {
		if (d) {
			return l.XX.RegisterChildWindow(u, d);
		}
	}, [d, u]);
	(0, i.oH)(d, (e) =>
		m.fR.Debug(
			`Overlay for VRPopup ${d.name} visibility=${e ? "true" : "false"}`,
		),
	);
	z8(o, d);
	return {
		popup: d,
		element: A,
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
				case e.GetMainVROverlayKey():
					t.left = 800;
					t.top = 290;
					break;
				case o.rn:
					t.top = 140;
					break;
				case o.T3:
					t.left = 800;
					t.top = 1090;
					break;
				case o.A0:
					t.left = 1300;
					t.top = 140;
					break;
				default:
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
			r = {
				...r,
				browserType: n.W.EBrowserType_DirectHWND,
				title: r.title + " (Desktop Preview)",
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
				body_class: (0, A.A)(
					r.body_class,
					d.PopupBody,
					"GamepadMode",
					"BasicUI",
				),
			};
		}
	}
	return r;
}
export function Bj(e, t) {
	if (e.IsVRWindow() && e.params.bSimulateOnDesktop) {
		return t + "-Desktop";
	} else {
		return t;
	}
}
