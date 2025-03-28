import {
	AddMissingStylesheetsToWindow,
	GetStyleSheetLinks,
} from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i from "./37790.js";
import a, { Cg } from "./34629.js";
import o from "./93960.js";
import l from "./62130.js";
import m from "./7558.js";
import u, { p1, Ue } from "./52451.js";
import d, { R7 } from "./11131.js";
import A, { UV } from "./20326.js";
import { BSharedJSContextHasMethod } from "../../actual_src/steamclient/clientinterfacehelpers.js";
import g, { Hn } from "./72476.js";
import { GD } from "./90685.js";
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
		const { name, strVROverlayKey, eCreationFlags } = t;
		if (this.m_browserView) {
			this.DestroyView();
		}
		let o = r?.ownerWindow?.SteamClient.Browser.GetBrowserID();
		let m = "BrowserViewPopup";
		if (name?.length > 0) {
			m = name;
		}
		if (o) {
			m += `_uid${o}`;
		}
		m = c.GetUniqueBrowserViewName(m);
		const u = {
			parentPopupBrowserID: o,
			strVROverlayKey: strVROverlayKey,
		};
		let { strCreateURL, browserView } = SteamClient.BrowserView.CreatePopup(u);
		browserView.SetName(m);
		if (eCreationFlags) {
			strCreateURL += `&createflags=${eCreationFlags}`;
		}
		let p = window.open(
			strCreateURL,
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
		this.m_browserView = browserView;
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
Cg([o.o], c.prototype, "OnUnload", null);
export function sd(e, t) {
	const r = ((e) => {
		const t = R7();
		const [r, setR] = n.useState(null);
		const a = e?.name;
		n.useEffect(() => {
			let r = new c();
			r.CreateView(() => setR(r), e, t);
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
	UV(r?.GetViewWindow());
	return r;
}
function _(e) {
	if (e.current) {
		e.current.Cancel();
		e.current = null;
	}
}
export const m4 = n.memo((e) => {
	const { browser, visible, animateIn, underlay = false, ...s } = e;
	const [o, setO] = n.useState();
	const c = visible && o === "visible";
	const A = R7();
	const C = GD(A.ownerWindow);
	const [f, setF] = n.useState(false);
	let S = p1();
	let w = ((e, t, r, i, a) => {
		let SRef = n.useRef(null);
		let ORef = n.useRef(false);
		let LRef = n.useRef({
			x: undefined,
			y: undefined,
			height: undefined,
			width: undefined,
		});
		let CRef = n.useRef(null);
		u = CRef;
		n.useEffect(
			() => () => {
				_(u);
			},
			[u],
		);
		n.useLayoutEffect(() => {
			if (!SRef.current || !e) {
				return;
			}
			let r = SRef.current.getBoundingClientRect();
			let n = {
				x: r.left,
				y: r.top,
				width: r.right - r.left,
				height: r.bottom - r.top,
			};
			let l_current = LRef.current;
			if (
				n.x != l_current.x ||
				n.y != l_current.y ||
				n.y != l_current.y ||
				n.width != l_current.width ||
				n.y != l_current.y ||
				n.width != l_current.width ||
				n.height != l_current.height ||
				n.y != l_current.y ||
				n.width != l_current.width ||
				n.height != l_current.height ||
				ORef.current != t
			) {
				LRef.current = n;
				ORef.current = t;
				_(CRef);
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
						onComplete: () => _(CRef),
					};
					let s = new m.Q8(window, a, r);
					CRef.current = s;
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
		return SRef;
	})(browser, c, C, animateIn, underlay);
	((e) => {
		const t = n.useCallback(
			(t, r, n) => {
				switch (t) {
					case "UnlockH264Request": {
						if (BSharedJSContextHasMethod("RemotePlay.UnlockH264")) {
							console.log(
								`Request received to unlock H.264: reason: ${r} url: strUrl: ${n}`,
							);
							window.SteamClient.RemotePlay.UnlockH264();
						}
						break;
					}
					case "RequestSupportSystemReport": {
						if (BSharedJSContextHasMethod("User.RequestSupportSystemReport")) {
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
				}
			},
			[e],
		);
		n.useEffect(
			() => (e ? (e.on("message", t), () => e.off("message", t)) : () => {}),
			[e, t],
		);
	})(browser);
	const B = n.useCallback((e) => setF(e), [setF]);
	n.useEffect(
		() =>
			browser
				? (browser.on("full-screen", B), () => browser.off("full-screen", B))
				: () => {},
		[browser, B],
	);
	n.useEffect(() => {
		const w_current = w.current;
		if (w_current) {
			const t = () => {
				setO(w_current.ownerDocument.visibilityState);
			};
			t();
			w_current.ownerDocument.addEventListener("visibilitychange", t);
			return () =>
				w_current.ownerDocument.removeEventListener("visibilitychange", t);
		}
		return () => {};
	}, [w]);
	let v = {};
	if (!visible) {
		v.display = "none";
	}
	if (f) {
		v.position = "fixed";
		v.top = 0;
		v.right = 0;
		v.bottom = 0;
		v.left = 0;
		if (Hn()) {
			v.bottom = 3;
		}
	}
	let I = Ue(S, w);
	return (
		<div
			ref={I}
			{...s}
			style={{
				...v,
				...s.style,
			}}
		/>
	);
});
export function Fx(e, t) {
	return n.useCallback(() => {
		if (e) {
			e.SetWindowStackingOrder(t);
		}
	}, [e, t]);
}
