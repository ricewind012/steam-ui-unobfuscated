var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./37790.js");
var a = require(/*webcrack:missing*/ "./34629.js");
import {
	AddMissingStylesheetsToWindow,
	GetStyleSheetLinks,
} from "../../actual_src/utils/domutils.js";
var o = require(/*webcrack:missing*/ "./93960.js");
var l = require(/*webcrack:missing*/ "./62130.js");
class c {
	m_viewWindow;
	m_rootElement;
	m_renderWhenReady;
	m_bMounted = false;
	m_browserView;
	m_browserViewName;
	m_DynamicCSSObserver;
	constructor() {}
	CreateView(e, t, r) {
		const { name: n, strVROverlayKey: i, eCreationFlags: a } = t;
		if (this.m_browserView) {
			this.DestroyView();
		}
		let o = r?.ownerWindow?.SteamClient.Browser.GetBrowserID();
		let m = "BrowserViewPopup";
		if (n?.length > 0) {
			m = n;
		}
		if (o) {
			m += "_uid" + o;
		}
		m = c.GetUniqueBrowserViewName(m);
		const u = {
			parentPopupBrowserID: o,
			strVROverlayKey: i,
		};
		let { strCreateURL: d, browserView: A } =
			SteamClient.BrowserView.CreatePopup(u);
		A.SetName(m);
		if (a) {
			d += "&createflags=" + a;
		}
		let p = window.open(
			d,
			m,
			"top=0,left=0,width=540,height=700,resizable=yes,status=0,toolbar=0,menubar=0,location=0",
		);
		if (!p) {
			console.error(
				`Failed to create popup, browser/CEF may be blocking popups for "${window.location.origin}"`,
			);
			return;
		}
		p.document.write(
			'<!DOCTYPE html><html ><head><title></title></head><body  style="overflow: hidden"><div id="browserview_target"></div></body></html>',
		);
		p.document.title = m;
		let g = p.document.getElementById("browserview_target");
		p.addEventListener("unload", this.OnUnload);
		this.m_viewWindow = p;
		this.m_rootElement = g;
		this.m_browserView = A;
		this.m_browserViewName = m;
		AddMissingStylesheetsToWindow(this.m_viewWindow, GetStyleSheetLinks());
		this.m_renderWhenReady = new l.Q(p.document, g);
		this.m_renderWhenReady.SetTarget(e);
	}
	DestroyView() {
		if (this.m_browserView) {
			c.DelayedReleaseBrowserViewName(this.m_browserViewName);
			SteamClient.BrowserView.Destroy(this.m_browserView);
			this.m_browserView = undefined;
		}
		if (this.m_DynamicCSSObserver) {
			this.m_DynamicCSSObserver.disconnect();
			this.m_DynamicCSSObserver = undefined;
		}
	}
	GetBrowserView() {
		return this.m_browserView;
	}
	GetRenderElement() {
		return this.m_rootElement;
	}
	GetViewWindow() {
		return this.m_viewWindow;
	}
	OnUnload() {}
	static m_setActiveBrowserViewNames = new Set();
	static GetUniqueBrowserViewName(e) {
		let t = e;
		let r = 0;
		while (c.m_setActiveBrowserViewNames.has(t)) {
			t = `${e}_${r++}`;
		}
		c.m_setActiveBrowserViewNames.add(t);
		return t;
	}
	static DelayedReleaseBrowserViewName(e) {
		window.setTimeout(() => c.m_setActiveBrowserViewNames.delete(e), 100);
	}
}
(0, a.Cg)([o.o], c.prototype, "OnUnload", null);
var m = require("./7558.js");
var u = require(/*webcrack:missing*/ "./52451.js");
var d = require(/*webcrack:missing*/ "./11131.js");
var A = require("./20326.js");
var p = require(/*webcrack:missing*/ "./736.js");
var g = require(/*webcrack:missing*/ "./72476.js");
var h = require(/*webcrack:missing*/ "./90685.js");
export function sd(e, t) {
	const r = (function (e) {
		const t = (0, d.R7)();
		const [r, i] = n.useState(null);
		const a = e?.name;
		n.useEffect(() => {
			let r = new c();
			r.CreateView(() => i(r), e, t);
			return () => r.DestroyView();
		}, [t, a]);
		return r;
	})(t);
	n.useEffect(() => {
		if (!r) {
			return;
		}
		const t = r.GetRenderElement().ownerDocument.defaultView;
		e(new i.Q(t));
	}, [r, e]);
	(0, A.UV)(r?.GetViewWindow());
	return r;
}
function _(e) {
	if (e.current) {
		e.current.Cancel();
		e.current = null;
	}
}
export const m4 = n.memo(function (e) {
	const { browser: t, visible: r, animateIn: i, underlay: a = false, ...s } = e;
	const [o, l] = n.useState();
	const c = r && o === "visible";
	const A = (0, d.R7)();
	const C = (0, h.GD)(A.ownerWindow);
	const [f, y] = n.useState(false);
	let S = (0, u.p1)();
	let w = (function (e, t, r, i, a) {
		let s = n.useRef(null);
		let o = n.useRef(false);
		let l = n.useRef({
			x: undefined,
			y: undefined,
			height: undefined,
			width: undefined,
		});
		let c = n.useRef(null);
		u = c;
		n.useEffect(
			() => () => {
				_(u);
			},
			[u],
		);
		n.useLayoutEffect(() => {
			if (!s.current || !e) {
				return;
			}
			let r = s.current.getBoundingClientRect();
			let n = {
				x: r.left,
				y: r.top,
				width: r.right - r.left,
				height: r.bottom - r.top,
			};
			let a = l.current;
			if (
				n.x != a.x ||
				n.y != a.y ||
				n.width != a.width ||
				n.height != a.height ||
				o.current != t
			) {
				l.current = n;
				o.current = t;
				_(c);
				if (t && i) {
					let t = {
						...n,
					};
					n = i.fnStep(t, 0);
					let r = (r) => {
						let n = i.fnStep(t, r);
						e.SetBounds(n.x, n.y, n.width, n.height);
					};
					let a = {
						msDuration: i.nDuration,
						onComplete: () => _(c),
					};
					let s = new m.Q8(window, a, r);
					c.current = s;
					s.Start();
				}
				e.SetBounds(n.x, n.y, n.width, n.height);
			}
		});
		var u;
		const d = a ? 2 : 1;
		const A = Fx(e, d);
		n.useLayoutEffect(() => {
			if (t) {
				A();
				e.SetVisible(true);
				return () => e.SetVisible(false);
			}
		}, [t, r, e, A]);
		return s;
	})(t, c, C, i, a);
	(function (e) {
		const t = n.useCallback(
			(t, r, n) => {
				switch (t) {
					case "UnlockH264Request":
						if ((0, p.Dp)("RemotePlay.UnlockH264")) {
							console.log(
								`Request received to unlock H.264: reason: ${r} url: strUrl: ${n}`,
							);
							window.SteamClient.RemotePlay.UnlockH264();
						}
						break;
					case "RequestSupportSystemReport":
						if ((0, p.Dp)("User.RequestSupportSystemReport")) {
							window.SteamClient.User.RequestSupportSystemReport(n).then(
								(t) => {
									let r = JSON.stringify(t);
									e.PostMessage("SupportSystemReport", r);
								},
							);
						} else {
							let t = {
								bSuccess: false,
							};
							let r = JSON.stringify(t);
							e.PostMessage("SupportSystemReport", r);
						}
				}
			},
			[e],
		);
		n.useEffect(
			() => (e ? (e.on("message", t), () => e.off("message", t)) : () => {}),
			[e, t],
		);
	})(t);
	const B = n.useCallback((e) => y(e), [y]);
	n.useEffect(
		() =>
			t ? (t.on("full-screen", B), () => t.off("full-screen", B)) : () => {},
		[t, B],
	);
	n.useEffect(() => {
		const e = w.current;
		if (e) {
			const t = () => {
				l(e.ownerDocument.visibilityState);
			};
			t();
			e.ownerDocument.addEventListener("visibilitychange", t);
			return () => e.ownerDocument.removeEventListener("visibilitychange", t);
		}
		return () => {};
	}, [w]);
	let v = {};
	if (!r) {
		v.display = "none";
	}
	if (f) {
		v.position = "fixed";
		v.top = v.right = v.bottom = v.left = 0;
		if ((0, g.Hn)()) {
			v.bottom = 3;
		}
	}
	let I = (0, u.Ue)(S, w);
	return n.createElement("div", {
		ref: I,
		...s,
		style: {
			...v,
			...s.style,
		},
	});
});
export function Fx(e, t) {
	return n.useCallback(() => {
		if (e) {
			e.SetWindowStackingOrder(t);
		}
	}, [e, t]);
}
