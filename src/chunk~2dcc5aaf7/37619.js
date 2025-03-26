var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./3524.js");
var _a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./11131.js");
import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
var l = require(/*webcrack:missing*/ "./49455.js");
var c = require(/*webcrack:missing*/ "./79769.js");
var m = require(/*webcrack:missing*/ "./83599.js");
var u = require(/*webcrack:missing*/ "./52451.js");
const d = new m.wd("FocusNavigation").Debug;
const A = (e, ...t) => {
	const [r, ...n] = t;
	d(`(${(e?.ownerWindow || window).name}) ${r}`, ...n);
};
class p {
	m_rgTrees = [];
	m_mapChildTreeCleanup = new Map();
	FindTree(e) {
		return this.m_rgTrees.find((t) => t.tree == e);
	}
	FindTreeByName(e) {
		return this.m_rgTrees.find((t) => t.name == e);
	}
	FindTreeByBrowser(e) {
		return this.m_rgTrees.find((t) => t.browser == e);
	}
	RegisterNavTree(e, t, r) {
		(0, l.w)(!this.FindTreeByName(e), `Duplicate focus nav tree ${e}`);
		d(`Registering tree ${e}`);
		const n = new c.e0();
		const i = {
			name: e,
			tree: t,
			browserContext: r,
		};
		this.m_rgTrees.push(i);
		n.Push(() => FindAndRemove(this.m_rgTrees, i));
		n.Push(t.OnActivateCallbacks.Register(this.OnTreeActivated).Unregister);
		n.Push(t.OnDeactivateCallbacks.Register(this.OnTreeDeactivated).Unregister);
		n.Push(
			t.OnChildTreesChangedCallbacks.Register((t, n) =>
				this.OnChildTreesChanged(e, r, t, n),
			).Unregister,
		);
		n.Push(() => t.ChildTrees.forEach((e) => this.UnregisterChildTree(e)));
		if (t.BIsActive()) {
			this.OnTreeActivated(t);
		}
		return n.GetUnregisterFunc();
	}
	OnChildTreesChanged(e, t, r, n) {
		if (r == "add") {
			this.RegisterChildTree(e, t, n);
		} else if (r == "remove") {
			this.UnregisterChildTree(n);
		}
	}
	RegisterChildTree(e, t, r) {
		const n = `${e}/${r.id}`;
		this.m_mapChildTreeCleanup.set(r, this.RegisterNavTree(n, r, t));
		r.ChildTrees.forEach((e) => this.RegisterChildTree(n, t, e));
	}
	UnregisterChildTree(e) {
		const t = this.m_mapChildTreeCleanup.get(e);
		if (t) {
			t();
		}
		this.m_mapChildTreeCleanup.delete(e);
	}
	SetBrowserViewFocus(e, t) {
		const r = this.FindTree(t);
		A(
			r?.browserContext,
			`CBrowserViewWindowFocusCoordinator Focusing browser view in ${r?.name}, ${r ? "blurring main window" : "not changing main window focus"}`,
		);
		if (r) {
			r.browser = e;
			f(r.browserContext);
		}
		e.SetFocus(true);
	}
	SetBrowserViewBlurred(e, t) {
		const r = this.FindTree(t);
		A(
			r?.browserContext,
			`CBrowserViewWindowFocusCoordinator Blurring browser view in ${r?.name}, ${r ? "giving main window focus" : "not changing main window focus"}`,
		);
		e.SetFocus(false);
		if (r) {
			delete r.browser;
			_(r.browserContext);
		}
	}
	OnTreeActivated(e) {
		const t = this.FindTree(e);
		if (t.browser) {
			A(
				t?.browserContext,
				`CBrowserViewWindowFocusCoordinator Activating tree ${t?.name} but browser view has focus`,
			);
			t.browser.SetFocus(true);
		} else {
			(function (e) {
				const t = e?.ownerWindow ?? window;
				A(e, "Invoking SteamClient.Window.MarkLastFocused()");
				t.SteamClient.Window.MarkLastFocused();
			})(t?.browserContext);
			if (e.BIsContextActive()) {
				A(
					t?.browserContext,
					`CBrowserViewWindowFocusCoordinator Activating tree ${t?.name} and giving main window focus`,
				);
				_(t.browserContext);
			} else {
				A(
					t?.browserContext,
					`CBrowserViewWindowFocusCoordinator tree ${t?.name} was activated, but ignoring because the window is not active`,
				);
			}
		}
	}
	OnTreeDeactivated(e, t) {
		const r = this.FindTree(e);
		const n = this.FindTree(t);
		if (n) {
			A(
				r?.browserContext,
				`CBrowserViewWindowFocusCoordinator Focus transfer from ${r?.name} to ${n?.name}, both within main window`,
			);
		} else if (r.browser) {
			A(
				r?.browserContext,
				"CBrowserViewWindowFocusCoordinator From tree had browser, blurring the browser",
			);
			r.browser.SetFocus(false);
		} else {
			A(
				r?.browserContext,
				"CBrowserViewWindowFocusCoordinator Blurring main window",
			);
			f(r.browserContext);
		}
	}
}
(0, n.Cg)([u.oI], p.prototype, "OnTreeActivated", null);
(0, n.Cg)([u.oI], p.prototype, "OnTreeDeactivated", null);
const g = new p();
export function a() {
	const e = (0, s.R7)();
	return (0, u.QS)(
		(t) => {
			if (t) {
				return g.RegisterNavTree(t.id, t, e);
			}
		},
		[e],
	);
}
export function Z(e, t, r, n) {
	_a.useEffect(() => {
		if (!n) {
			return;
		}
		(0, l.w)(
			r.current.BFocusWithin(),
			"Nav system expected to match bFocused state",
		);
		const e = r.current.NavTree();
		g.SetBrowserViewFocus(t, e);
		return () => g.SetBrowserViewBlurred(t, e);
	}, [t, r, n]);
	const { ownerWindow: o } = (0, s.R7)();
	const c = (0, i.nN)();
	_a.useEffect(() => {
		const r = (t) => {
			if (t) {
				c.OnActivateBrowserView(o, e);
			} else {
				c.OnDeactivateBrowserView(o, e);
			}
		};
		t.on("focus-changed", r);
		return () => t.off("focus-changed", r);
	}, [t, e, c, o]);
}
function _(e) {
	const t = e.ownerWindow ?? window;
	A(e, "Invoking SteamClient.Window.SetKeyFocus( true )");
	t.SteamClient.Window.SetKeyFocus(true);
}
function f(e) {
	const t = e.ownerWindow ?? window;
	A(e, "Invoking SteamClient.Window.SetKeyFocus( false )");
	t.SteamClient.Window.SetKeyFocus(false);
}
