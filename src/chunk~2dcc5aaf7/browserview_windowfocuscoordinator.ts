import { useEffect, type RefObject } from "react";

import { FindAndRemove } from "../../actual_src/utils/arrayutils.js";
import { AssertMsg } from "../../actual_src/utils/assert.js";
import { bind } from "../../actual_src/utils/bind.js";
import { e0 } from "../../actual_src/utils/callbackutils/index.js";

import { nN } from "../library/3524.js";
import { R7 } from "../library/11131.js";
import { QS as some_react_utils_func } from "../library/52451.js";
import CLogger from "../library/83599.js";

// later
type CNavigationTree_t = any;

// lmao
interface TreeInThisFile_t {
	name;
	tree;
	browser?;
	browserContext;
}

const LogDebug = new CLogger.wd("FocusNavigation").Debug;
// ??? this is named browserContext, but has an ownerWindow property?
const LogBrowser = (browserContext, ...t) => {
	const [r, ...n] = t;
	LogDebug(`(${(browserContext?.ownerWindow || window).name}) ${r}`, ...n);
};

class CBrowserViewWindowFocusCoordinator {
	m_rgTrees: TreeInThisFile_t[] = [];
	m_mapChildTreeCleanup = new Map<CNavigationTree_t, () => void>();

	FindTree(tree) {
		return this.m_rgTrees.find((t) => t.tree == tree);
	}

	FindTreeByName(name) {
		return this.m_rgTrees.find((t) => t.name == name);
	}

	FindTreeByBrowser(browser) {
		return this.m_rgTrees.find((t) => t.browser == browser);
	}

	RegisterNavTree(name, tree, browserContext) {
		AssertMsg(!this.FindTreeByName(name), `Duplicate focus nav tree ${name}`);
		LogDebug(`Registering tree ${name}`);
		const n = new e0();
		const navTree: TreeInThisFile_t = {
			name,
			tree,
			browserContext,
		};
		this.m_rgTrees.push(navTree);
		n.Push(() => FindAndRemove(this.m_rgTrees, navTree));
		n.Push(tree.OnActivateCallbacks.Register(this.OnTreeActivated).Unregister);
		n.Push(
			tree.OnDeactivateCallbacks.Register(this.OnTreeDeactivated).Unregister,
		);
		n.Push(
			tree.OnChildTreesChangedCallbacks.Register((t, n) =>
				this.OnChildTreesChanged(name, browserContext, t, n),
			).Unregister,
		);
		n.Push(() => tree.ChildTrees.forEach((e) => this.UnregisterChildTree(e)));
		if (tree.BIsActive()) {
			this.OnTreeActivated(tree);
		}
		return n.GetUnregisterFunc();
	}

	OnChildTreesChanged(e, pChildTree, strAction: "add" | "remove", pTree) {
		if (strAction == "add") {
			this.RegisterChildTree(e, pChildTree, pTree);
		} else if (strAction == "remove") {
			this.UnregisterChildTree(pTree);
		}
	}

	RegisterChildTree(e, pChildTree, pTree) {
		const strTreeID = `${e}/${pTree.id}`;
		this.m_mapChildTreeCleanup.set(
			pTree,
			this.RegisterNavTree(strTreeID, pTree, pChildTree),
		);
		pTree.ChildTrees.forEach((tree) =>
			this.RegisterChildTree(strTreeID, pChildTree, tree),
		);
	}

	UnregisterChildTree(e) {
		const t = this.m_mapChildTreeCleanup.get(e);
		if (t) {
			t();
		}
		this.m_mapChildTreeCleanup.delete(e);
	}

	SetBrowserViewFocus(pBrowserView, t) {
		const r = this.FindTree(t);
		LogBrowser(
			r?.browserContext,
			`CBrowserViewWindowFocusCoordinator Focusing browser view in ${
				r?.name
			}, ${r ? "blurring main window" : "not changing main window focus"}`,
		);
		if (r) {
			r.browser = pBrowserView;
			DisableKeyFocus(r.browserContext);
		}
		pBrowserView.SetFocus(true);
	}

	SetBrowserViewBlurred(pBrowserView, t) {
		const pTree = this.FindTree(t);
		LogBrowser(
			pTree?.browserContext,
			`CBrowserViewWindowFocusCoordinator Blurring browser view in ${
				pTree?.name
			}, ${pTree ? "giving main window focus" : "not changing main window focus"}`,
		);
		pBrowserView.SetFocus(false);
		if (pTree) {
			delete pTree.browser;
			EnableKeyFocus(pTree.browserContext);
		}
	}

	@bind OnTreeActivated(e) {
		const pTree = this.FindTree(e);
		if (pTree.browser) {
			LogBrowser(
				pTree?.browserContext,
				`CBrowserViewWindowFocusCoordinator Activating tree ${pTree?.name} but browser view has focus`,
			);
			pTree.browser.SetFocus(true);
		} else {
			((browser) => {
				const pWnd = browser?.ownerWindow ?? window;
				LogBrowser(browser, "Invoking SteamClient.Window.MarkLastFocused()");
				pWnd.SteamClient.Window.MarkLastFocused();
			})(pTree?.browserContext);
			if (e.BIsContextActive()) {
				LogBrowser(
					pTree?.browserContext,
					`CBrowserViewWindowFocusCoordinator Activating tree ${pTree?.name} and giving main window focus`,
				);
				EnableKeyFocus(pTree.browserContext);
			} else {
				LogBrowser(
					pTree?.browserContext,
					`CBrowserViewWindowFocusCoordinator tree ${pTree?.name} was activated, but ignoring because the window is not active`,
				);
			}
		}
	}

	@bind OnTreeDeactivated(e, t) {
		const pTree1 = this.FindTree(e);
		const pTree2 = this.FindTree(t);
		if (pTree2) {
			LogBrowser(
				pTree1?.browserContext,
				`CBrowserViewWindowFocusCoordinator Focus transfer from ${pTree1?.name} to ${pTree2?.name}, both within main window`,
			);
		} else if (pTree1.browser) {
			LogBrowser(
				pTree1?.browserContext,
				"CBrowserViewWindowFocusCoordinator From tree had browser, blurring the browser",
			);
			pTree1.browser.SetFocus(false);
		} else {
			LogBrowser(
				pTree1?.browserContext,
				"CBrowserViewWindowFocusCoordinator Blurring main window",
			);
			DisableKeyFocus(pTree1.browserContext);
		}
	}
}
const BrowserViewWindowFocusCoordinator =
	new CBrowserViewWindowFocusCoordinator();

export function a() {
	const e = R7();
	return some_react_utils_func(
		(pTree: CNavigationTree_t) => {
			if (pTree) {
				return BrowserViewWindowFocusCoordinator.RegisterNavTree(
					pTree.id,
					pTree,
					e,
				);
			}
		},
		[e],
	);
}

export function Z(
	strBrowserName: string,
	pBrowserView,
	navRef: RefObject<CNavigationTree_t>,
	bFocus?: boolean,
) {
	useEffect(() => {
		if (!bFocus) {
			return;
		}
		AssertMsg(
			navRef.current.BFocusWithin(),
			"Nav system expected to match bFocused state",
		);
		const pNavTree = navRef.current.NavTree();
		BrowserViewWindowFocusCoordinator.SetBrowserViewFocus(
			pBrowserView,
			pNavTree,
		);
		return () =>
			BrowserViewWindowFocusCoordinator.SetBrowserViewBlurred(
				pBrowserView,
				pNavTree,
			);
	}, [pBrowserView, navRef, bFocus]);
	const { ownerWindow } = R7();
	const c = nN();
	useEffect(() => {
		const fnOnFocusChanged = (bActivate: boolean) => {
			if (bActivate) {
				c.OnActivateBrowserView(ownerWindow, strBrowserName);
			} else {
				c.OnDeactivateBrowserView(ownerWindow, strBrowserName);
			}
		};
		pBrowserView.on("focus-changed", fnOnFocusChanged);
		return () => pBrowserView.off("focus-changed", fnOnFocusChanged);
	}, [pBrowserView, strBrowserName, c, ownerWindow]);
}

function EnableKeyFocus(browser) {
	const pWnd = browser.ownerWindow ?? window;
	LogBrowser(browser, "Invoking SteamClient.Window.SetKeyFocus( true )");
	pWnd.SteamClient.Window.SetKeyFocus(true);
}

function DisableKeyFocus(browser) {
	const pWnd = browser.ownerWindow ?? window;
	LogBrowser(browser, "Invoking SteamClient.Window.SetKeyFocus( false )");
	pWnd.SteamClient.Window.SetKeyFocus(false);
}
