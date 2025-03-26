var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require("./22176.js");
var s = require("./96680.js");
var o = require("./55700.js");
var l = require("./73375.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require("./69913.js");
var u = require("./83718.js");
var d = require("./24590.js");
var A = require(/*webcrack:missing*/ "./34629.js");
var p = require("./63032.js");
var g = require(/*webcrack:missing*/ "./89193.js");
function h(e) {
	let t = n.useRef(undefined);
	if (!t.current) {
		t.current = new C(e);
		t.current.Init();
	}
	return t.current;
}
class C {
	m_unAppID;
	m_storage;
	m_rgBookmarks = [];
	constructor(e) {
		(0, g.Gn)(this);
		this.m_unAppID = e;
		this.m_storage = new p.O();
	}
	GetKey() {
		return `BrowserBookmarks_${this.m_unAppID}`;
	}
	async Init() {
		let e = await this.m_storage.GetObject(this.GetKey());
		if (e) {
			this.m_rgBookmarks = e;
		}
	}
	async Save() {
		let e = this.GetKey();
		this.m_storage
			.RemoveObject(e)
			.finally(() =>
				this.m_storage.StoreObject(this.GetKey(), this.m_rgBookmarks),
			);
	}
	AddBookmark(e, t) {
		if (!this.BIsBookmarked(t)) {
			this.m_rgBookmarks.push({
				name: e,
				url: t,
			});
			this.Save();
		}
	}
	RemoveBookmark(e) {
		let t = this.m_rgBookmarks.findIndex((t) => t.url == e);
		if (t >= 0) {
			this.m_rgBookmarks.splice(t, 1);
			this.Save();
		}
	}
	SetBookmarks(e) {
		this.m_rgBookmarks = e;
		this.Save();
	}
	UpdateBookmark(e, t, r) {
		this.m_rgBookmarks[e] = {
			name: t,
			url: r,
		};
		this.Save();
	}
	BIsBookmarked(e) {
		return !!this.m_rgBookmarks.find((t) => t.url == e);
	}
	get bookmarks() {
		return this.m_rgBookmarks;
	}
	get appid() {
		return this.m_unAppID;
	}
}
(0, A.Cg)([g.sH], C.prototype, "m_rgBookmarks", undefined);
(0, A.Cg)([g.XI], C.prototype, "AddBookmark", null);
(0, A.Cg)([g.XI], C.prototype, "RemoveBookmark", null);
(0, A.Cg)([g.XI], C.prototype, "SetBookmarks", null);
(0, A.Cg)([g.XI], C.prototype, "UpdateBookmark", null);
var _ = require("./39940.js");
var _f = require("./78057.js");
var b = require("./46422.js");
var y = require("./48180.js");
var S = require("./32411.js");
var w = require("./17754.js");
var B = require(/*webcrack:missing*/ "./41230.js");
var v = require(/*webcrack:missing*/ "./79671.js");
var I = require(/*webcrack:missing*/ "./44846.js");
var E = require(/*webcrack:missing*/ "./31084.js");
var M = require(/*webcrack:missing*/ "./11131.js");
var T = require(/*webcrack:missing*/ "./88750.js");
var R = require("./64608.js");
var k = require(/*webcrack:missing*/ "./42318.js");
var D = require("./35488.js");
var N = require("./10606.js");
var F = require(/*webcrack:missing*/ "./50376.js");
var G = require(/*webcrack:missing*/ "./98995.js");
var O = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var L = require("./39002.js");
var z = require("./1756.js");
var x = require("./57337.js");
var U = require("./5640.js");
var W = require("./28934.js");
function V(e, t, r, i) {
	let [a, s] = (0, w.wB)(t, i, r);
	n.useEffect(() => {
		(0, c.cZ)(a, e);
	}, [e, a]);
	return s.current;
}
function H(e) {
	const t = (0, s.$2)();
	return n.useCallback(
		(e) => {
			const r = "steam://openexternalforpid/";
			let n = e.indexOf(r);
			if (n != -1) {
				const r = e.substring(n + 27);
				n = r.indexOf("/");
				if (n != -1) {
					const e = r.substring(n + 1);
					t.Navigator.ExternalWeb(e);
					return true;
				}
			}
			return false;
		},
		[t],
	);
}
function j(e) {
	const { onClick: t, tooltip: r, bDisabled: i, bToggled: a, children: s } = e;
	return n.createElement(
		G.he,
		{
			className: (0, O.A)(
				y.StatusIcon,
				y.NavigationButton,
				i && y.Disabled,
				a && y.Toggled,
			),
			onClick: i ? undefined : t,
			toolTipContent: r,
		},
		s,
	);
}
const q = (0, k.Nr)((e) => {
	const {
		className: t,
		popup: r,
		manager: a,
		bookmarks: s,
		bCanChangeURL: o,
		strHomeURL: l,
	} = e;
	const m = (0, i.q3)(() => a.Loading);
	const u = (0, i.q3)(() => a.PageSecurity);
	const d = (0, i.q3)(() => a.Title);
	const A = (0, i.q3)(() => a.DisplayURL);
	const p = (0, i.q3)(() => a.CanGoBackward);
	const g = (0, i.q3)(() => a.CanGoForward);
	const h = !m && A;
	const C = a.Reload;
	const _ = a.GoBack;
	const f = a.GoForward;
	const b = n.useRef(undefined);
	const w = (0, i.q3)(() => s && s.BIsBookmarked(A));
	let [B, v, I] = (0, S.J6)(r, A);
	const E = n.useCallback(() => {
		a.Browser.LoadURL(l);
	}, [a.Browser, l]);
	const M = n.useCallback(
		(e) => {
			const t = e.target;
			if (e.key === "Enter") {
				a.Browser.LoadURL(t.value);
			}
		},
		[a.Browser],
	);
	const T = n.useCallback(
		(e, t) => {
			if (s.BIsBookmarked(t)) {
				s.RemoveBookmark(t);
			} else {
				s.AddBookmark(e || t, t);
			}
		},
		[s],
	);
	const k = n.useCallback((e) => {
		if (b.current?.element) {
			b.current.element.value = e;
		}
	}, []);
	const N = n.useCallback((e, t) => {
		if (b.current?.element) {
			b.current.element.value = e;
		}
	}, []);
	const F = n.useCallback((e, t) => {
		if (b.current?.element) {
			b.current.element.value = e;
		}
	}, []);
	(0, c.hL)(a.StartRequestCallbacks, k);
	(0, c.hL)(a.StartLoadingCallbacks, N);
	(0, c.hL)(a.FinishedRequestCallbacks, F);
	let L = m ? n.createElement(D.Spinner, null) : n.createElement(D.Globe, null);
	let z = (0, Localize)("#Browser_Loading");
	if (!m && A && A.startsWith("https://") && u?.bIsSecure) {
		if (u?.bHasCertError) {
			L = n.createElement(D.Caution, {
				className: y.CertError,
			});
			z = (0, Localize)("#Browser_NotSecure");
		} else {
			L = n.createElement(D.Lock, {
				locked: true,
			});
			z = u?.certName;
		}
	}
	return n.createElement(
		"div",
		{
			className: (0, O.A)(y.URLBar, t),
		},
		n.createElement(
			j,
			{
				tooltip: (0, Localize)("#BrowserContextMenu_GoBack"),
				onClick: _,
				bDisabled: !p,
			},
			n.createElement(D.Arrow, {
				direction: "left",
			}),
		),
		n.createElement(
			j,
			{
				tooltip: (0, Localize)("#BrowserContextMenu_GoForward"),
				onClick: f,
				bDisabled: !g,
			},
			n.createElement(D.Arrow, {
				direction: "right",
			}),
		),
		n.createElement(
			j,
			{
				tooltip: (0, Localize)("#BrowserContextMenu_Reload"),
				onClick: C,
				bDisabled: !h,
			},
			n.createElement(D.Refresh, null),
		),
		s &&
			n.createElement(
				j,
				{
					tooltip: (0, Localize)(
						w ? "#Browser_RemoveBookmark" : "#Browser_AddBookmark",
					),
					onClick: () => T(d, A),
					bToggled: w,
				},
				n.createElement(D.Bookmark, null),
			),
		l &&
			n.createElement(
				j,
				{
					tooltip: (0, Localize)("#Browser_Home"),
					onClick: E,
				},
				n.createElement(D.Home, null),
			),
		n.createElement(
			"div",
			{
				className: y.URLBarText,
				onClick: o ? undefined : v,
			},
			!o &&
				n.createElement(S.hL, {
					data: B,
					onAnimationComplete: I,
				}),
			n.createElement(
				G.he,
				{
					className: (0, O.A)(y.StatusIcon, y.LockIcon),
					toolTipContent: z,
				},
				L,
			),
			n.createElement(
				"div",
				{
					className: (0, O.A)(y.URL, u?.bHasCertError && y.CertError),
				},
				!o && A,
				o &&
					n.createElement(R.pd, {
						type: "input",
						ref: (e) => {
							b.current = e;
							if (e?.element) {
								e.element.value = A;
							}
						},
						onKeyPress: M,
						spellCheck: false,
					}),
			),
		),
	);
});
function Q(e) {
	return n.createElement(
		"div",
		{
			className: y.LoadingThrobber,
		},
		n.createElement("img", {
			alt: "Steam Spinner",
			src: _.A,
		}),
	);
}
function Z(e) {
	const {
		appid: t,
		strHomeURL: r,
		onCloseTab: a,
		onSelectTab: s,
		onTabNavigate: o,
		onAddTab: l,
		onNewTab: m,
		onReorderTab: u,
		onBrowserFocusChanged: d,
		activeRequestID: A,
		rgPages: p,
		nMaxTabs: g,
		popup: C,
		onTitleChange: _,
		bPinned: f,
		bShowPinnedView: b,
	} = e;
	const S = g || 100;
	const w = p.length < S;
	const B = h(t);
	let v = n.useRef(undefined);
	v.current ||= new Map();
	const [I, E] = n.useState();
	const M = n.useCallback(
		(e) => {
			a(e);
			v.current.delete(e);
		},
		[a],
	);
	n.useCallback(() => {
		a(A);
		v.current.delete(A);
	}, [a, A]);
	const T = H();
	const R = n.useCallback(
		(e) =>
			e
				? (v.current.set(e.ID, e),
					e.ID == A && E(e),
					e.AddSteamURLCallback(T),
					() => e?.RemoveSteamURLCallback(T))
				: () => {},
		[v, T, A],
	);
	const k = n.useCallback(
		(e) => {
			s(e);
			E(v.current.get(e));
		},
		[s, v],
	);
	n.useEffect(() => {
		if (!v.current.has(A)) {
			E(undefined);
		}
	}, [A]);
	const D = (0, i.q3)(() => I?.Title);
	const N = (0, i.q3)(() => I?.DisplayURL);
	const F = (0, U.sO)(N);
	n.useEffect(() => {
		_(F ? (0, Localize)("#DisplayStatus_Compact_ParentalBlocked") : D);
	}, [D, _, F]);
	const [G, L, z] = (0, c.uD)(false);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(_$, {
			className: (0, O.A)(b && y.PinnedView),
			popup: C,
			browserManagers: v.current,
			bookmarks: B,
			activeRequestID: A,
			rgPages: p,
			onAddTab: l,
			onSelectTab: k,
			onCloseTab: M,
			onReorderTab: u,
			onOrganizeBookmarks: L,
			bShowAddTabButton: w,
		}),
		I &&
			n.createElement(q, {
				className: b ? y.PinnedViewURLBar : undefined,
				popup: C,
				manager: I,
				bookmarks: B,
				strHomeURL: r,
				bCanChangeURL: true,
			}),
		p.map((e) =>
			n.createElement(re, {
				key: e.requestid,
				popup: C,
				appid: t,
				tab: e,
				bActive: e.requestid == A && !G,
				refBrowserManager: R,
				onNavigate: o,
				onCloseTab: M,
				onNewTab: m,
				onBrowserFocusChanged: d,
				bPinned: f,
				bShowPinnedView: b,
			}),
		),
		G &&
			n.createElement(X, {
				bookmarks: B,
				closeModal: z,
			}),
	);
}
function Y(e) {
	const { bookmarks: t, bookmark: r, idx: i, onEditBookmark: a } = e;
	const s = n.useCallback(() => {
		t.RemoveBookmark(r.url);
	}, [t, r.url]);
	return n.createElement(
		v.sx,
		{
			draggableId: r.url,
			index: i,
		},
		(e, t) =>
			n.createElement(
				"div",
				{
					className: (0, O.A)(
						y.ManageBookmarkField,
						t.isDragging && y.IsDragging,
					),
					ref: e.innerRef,
					...e.draggableProps,
					...e.dragHandleProps,
					style: (0, L.gQ)(e.draggableProps.style),
				},
				n.createElement(
					R.D0,
					{
						label: r.name,
						description: n.createElement(
							"div",
							{
								className: y.URL,
							},
							r.url,
						),
						icon: n.createElement(D.Rows, {
							className: y.DragHandle,
						}),
					},
					n.createElement(
						"div",
						{
							className: y.ManageBookmarkButtons,
						},
						n.createElement(
							R.$n,
							{
								className: y.ManageBookmarkButton,
								onClick: a,
							},
							(0, Localize)("#Browser_OrganizeBookmarks_Edit"),
						),
						n.createElement(
							R.$n,
							{
								className: y.ManageBookmarkButton,
								onClick: s,
							},
							(0, Localize)("#Browser_OrganizeBookmarks_Remove"),
						),
					),
				),
			),
	);
}
function K(e) {
	const { name: t, url: r, onOK: i, closeModal: a } = e;
	const [s, o] = n.useState(t);
	const [l, c] = n.useState(r);
	const m = n.useRef(undefined);
	const u = n.useRef(undefined);
	return n.createElement(
		N.EN,
		{
			active: true,
		},
		n.createElement(
			N.o0,
			{
				strTitle: (0, Localize)("#Browser_OrganizeBookmarks_EditBookmark"),
				onOK: () => i(s, l),
				closeModal: a,
				bOKDisabled: s.length == 0 || l.length == 0,
			},
			n.createElement(
				"div",
				{
					className: y.EditBookmarkDialog,
				},
				n.createElement(R.pd, {
					ref: m,
					value: s,
					onChange: (e) => o(e.currentTarget.value),
					label: (0, Localize)("#Browser_OrganizeBookmarks_EditName"),
				}),
				n.createElement(R.pd, {
					ref: u,
					value: l,
					onChange: (e) => c(e.currentTarget.value),
					label: (0, Localize)("#Browser_OrganizeBookmarks_EditLink"),
				}),
			),
		),
	);
}
const X = (0, B.PA)((e) => {
	const { bookmarks: t, closeModal: r } = e;
	const i = t.bookmarks;
	const a = (0, _f.T)(t.appid);
	const s = t.appid == I.w1 ? (0, Localize)("#Menu_Steam") : a.strDisplayName;
	const [o, l, m] = (0, c.uD)(false);
	const [u, d] = n.useState(0);
	const A = i[u];
	const { ownerWindow: p } = (0, M.R7)();
	const g = n.useCallback(
		(e) => {
			d(e);
			l();
		},
		[l],
	);
	const h = n.useCallback(
		(e, r) => {
			if (!e.destination) {
				return;
			}
			let n = (0, L.Yb)(t.bookmarks, e.source.index, e.destination.index);
			t.SetBookmarks(n);
		},
		[t],
	);
	return n.createElement(
		N.EN,
		{
			active: true,
		},
		n.createElement(
			N.o0,
			{
				bAlertDialog: true,
				strTitle: (0, Localize)("#Browser_OrganizeBookmarks_Title", s),
				closeModal: r,
				onCancel: r,
			},
			n.createElement(
				v.JY,
				{
					onDragEnd: h,
					stylesInsertionPoint: p?.document?.head,
				},
				n.createElement(
					v.gL,
					{
						droppableId: "droppable",
					},
					(e, r) =>
						n.createElement(
							"div",
							{
								className: (0, O.A)(
									y.ManageBookmarksList,
									r.isDraggingOver && y.IsDraggingOver,
								),
								...e.droppableProps,
								ref: e.innerRef,
							},
							i.map((e, r) =>
								n.createElement(Y, {
									key: e.url,
									bookmarks: t,
									idx: r,
									bookmark: e,
									onEditBookmark: () => g(r),
								}),
							),
							e.placeholder,
						),
				),
			),
		),
		o &&
			n.createElement(K, {
				name: A?.name,
				url: A?.url,
				onOK: (e, r) => {
					t.UpdateBookmark(u, e, r);
				},
				closeModal: m,
			}),
	);
});
function J(e) {
	const { bookmarks: t, onAddTab: r, onOrganizeBookmarks: i } = e;
	const a = n.useCallback(
		(e) => {
			if (t && t.bookmarks.length != 0) {
				(0, E.lX)(
					n.createElement(
						T.tz,
						null,
						n.createElement(
							T.kt,
							{
								onSelected: (e) => r(),
							},
							(0, Localize)("#Browser_NewTab"),
						),
						n.createElement(T.K5, null),
						n.createElement(
							T.kt,
							{
								onSelected: i,
							},
							(0, Localize)("#Browser_OrganizeBookmarks"),
						),
						n.createElement(T.K5, null),
						t.bookmarks.map((e, t) =>
							n.createElement(
								T.kt,
								{
									key: t,
									onSelected: (t) => r(e.url),
								},
								n.createElement(
									"div",
									{
										className: y.ContextMenuBookmarkName,
									},
									e.name,
								),
							),
						),
					),
					e,
					{
						bForcePopup: true,
					},
				);
			} else {
				r();
			}
		},
		[t, r, i],
	);
	return n.createElement(
		"div",
		{
			className: y.BrowserTab,
			onClick: a,
		},
		n.createElement(F.FWt, {
			className: y.AddTabButton,
		}),
	);
}
const _$ = (0, k.Nr)((e) => {
	const {
		className: t,
		popup: r,
		browserManagers: i,
		bookmarks: a,
		activeRequestID: s,
		onCloseTab: o,
		onSelectTab: l,
		onAddTab: c,
		onReorderTab: m,
		onOrganizeBookmarks: u,
		bShowAddTabButton: d,
		rgPages: A,
	} = e;
	const p = n.useCallback(
		(e, t) => {
			if (m) {
				m(e.source.index, e.destination.index);
			}
		},
		[m],
	);
	return n.createElement(
		n.Fragment,
		null,
		r?.document?.head &&
			n.createElement(
				v.JY,
				{
					onDragEnd: p,
					stylesInsertionPoint: r?.document?.head,
				},
				n.createElement(
					v.gL,
					{
						droppableId: "droppable",
						direction: "horizontal",
					},
					(e, r) =>
						n.createElement(
							"div",
							{
								className: (0, O.A)(y.BrowserTabs, t),
								...e.droppableProps,
								ref: e.innerRef,
							},
							A.map((e, t) =>
								n.createElement(
									v.sx,
									{
										draggableId: `${e.requestid}`,
										index: t,
										key: e.requestid,
									},
									(t, r) =>
										n.createElement(
											"div",
											{
												ref: t.innerRef,
												...t.draggableProps,
												...t.dragHandleProps,
												style: (0, L.$b)(t.draggableProps.style),
											},
											n.createElement(ee, {
												tab: e,
												browserManager: i.get(e.requestid),
												bActive: e.requestid == s,
												onSelectTab: l,
												onCloseTab: o,
											}),
										),
								),
							),
							e.placeholder,
							d &&
								n.createElement(J, {
									bookmarks: a,
									onAddTab: c,
									onOrganizeBookmarks: u,
								}),
						),
				),
			),
	);
});
const ee = (0, k.Nr)((e) => {
	const {
		tab: t,
		browserManager: r,
		bActive: a,
		onSelectTab: s,
		onCloseTab: o,
	} = e;
	const l = n.useRef(undefined);
	const c = (0, i.q3)(
		() => r?.Title || t.strTitle || r?.DisplayURL || t.strURL,
	);
	const m = (0, U.sO)(t.strURL);
	n.useEffect(() => {
		if (l.current && a) {
			l.current.scrollIntoView();
		}
	}, [a]);
	const u = n.useCallback(
		(e) => {
			if (e.button == 1) {
				o(t.requestid);
			}
		},
		[t, o],
	);
	return n.createElement(
		"div",
		{
			ref: l,
			className: (0, O.A)(y.BrowserTab, a && y.Active),
			onClick: a ? undefined : () => s(t.requestid),
			onMouseDown: u,
		},
		n.createElement(te, {
			browserManager: r,
		}),
		n.createElement(
			"div",
			{
				className: y.TabTitle,
			},
			m ? (0, Localize)("#DisplayStatus_Compact_ParentalBlocked") : c,
		),
		n.createElement(D.Close, {
			className: y.CloseTabButton,
			onClick: (e) => {
				o(t.requestid);
				e.stopPropagation();
			},
		}),
	);
});
function te(e) {
	const { browserManager: t } = e;
	const r = (0, i.q3)(() => t?.Loading);
	const a = (0, i.q3)(() => t?.FavIconURLs);
	if (!t || r) {
		return n.createElement(D.Spinner, {
			className: y.BrowserTabIcon,
		});
	} else if (a && a.length != 0) {
		return n.createElement("img", {
			className: y.BrowserTabIcon,
			src: a[0],
		});
	} else {
		return n.createElement(D.Browse, {
			className: y.BrowserTabIcon,
		});
	}
}
const re = (0, k.Nr)((e) => {
	const {
		popup: t,
		appid: r,
		tab: i,
		bActive: a,
		onNavigate: m,
		onCloseTab: u,
		onNewTab: A,
		onBrowserFocusChanged: p,
		refBrowser: g,
		refBrowserManager: h,
		bPinned: C,
		bShowPinnedView: _,
	} = e;
	const f = `OverlayTab${i.requestid}`;
	const S = r == I.w1 ? "Valve Steam Client" : "Valve Steam GameOverlay";
	const [w, B] = (0, o.v)(t, f, {
		strUserAgentIdentifier: S,
		bOnlyAllowTrustedPopups: false,
		strURL: i.strURL,
	});
	(0, d.D)(w);
	const v = (0, s.$2)();
	const E = (0, z.M)(f, t, v.params.browserInfo, w, b.oy.NavigationManager, a);
	const M = (0, x.b)(t, v.params.browserInfo, w);
	const T = n.useCallback(() => {
		u(i.requestid);
	}, [u, i.requestid]);
	const R = V(w, r, T, i.requestid);
	const k = n.useCallback(
		(e, t) => {
			m(i.requestid, e, t);
		},
		[i.requestid, m],
	);
	(0, c.hL)(R?.FinishedRequestCallbacks, k);
	(0, c.hL)(R?.NewTabCallbacks, A);
	const D = (0, U.OJ)(i.strURL);
	const N = D != 0;
	n.useEffect(() => {
		if (w) {
			let e = JSON.stringify({
				bPinned: C == 1,
				bShowPinnedView: _ == 1,
			});
			w.PostMessage("PinnedView", e);
		}
	}, [w, C, _]);
	const F = n.useCallback(() => {
		let e = JSON.stringify({
			bPinned: C == 1,
			bShowPinnedView: _ == 1,
		});
		w.PostMessage("PinnedView", e);
	}, [w, C, _]);
	(0, c.hL)(R?.FinishedRequestCallbacks, F);
	n.useEffect(() => {
		(0, c.cZ)(g, w);
		if (w) {
			w.on("focus-changed", p);
		}
		return () => {
			if (w) {
				w.off("focus-changed", p);
			}
			(0, c.cZ)(g, null);
		};
	}, [g, w, p]);
	n.useEffect(() => {
		(0, c.cZ)(h, R);
		return () => (0, c.cZ)(h, null);
	}, [h, R]);
	n.useEffect(() => {}, [N]);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(l.m4, {
			browser: w,
			visible: B && a && !N,
			className: y.BrowserViewHost,
		}),
		!B && a && n.createElement(Q, null),
		B &&
			a &&
			N &&
			n.createElement(
				"div",
				{
					className: y.ParentalPINDialogWrapper,
				},
				n.createElement(W.g5, {
					blockReason: D,
				}),
			),
		E,
		M,
	);
});
var ne = require("./51582.js");
function ie(e) {
	const {
		appid: t,
		strName: r,
		strInitialURL: m,
		onClose: u,
		onNewTab: A,
		popup: p,
		onTitleChange: g,
		refBrowserManager: C,
		bTemporary: _,
		bCanChangeURL: f,
		bUseSavedSettings: y,
		bPinned: S,
		bShowPinnedView: w,
	} = e;
	const B = `OverlayPopupURL${t}_${r}`;
	const v = (y ? window.localStorage.getItem(B) : null) || m;
	const [I, E] = (0, o.v)(p, r, {
		strURL: v,
		strUserAgentIdentifier: "Valve Steam GameOverlay",
		bOnlyAllowTrustedPopups: false,
	});
	const M = V(I, t, u);
	const T = h(t);
	const R = (0, i.q3)(() => M?.Title);
	(0, d.D)(I);
	const k = (0, s.$2)();
	const D = (0, z.M)(
		r,
		p,
		k.params.browserInfo,
		I,
		b.oy.NavigationManager,
		true,
	);
	const N = (0, x.b)(p, k.params.browserInfo, I);
	n.useEffect(() => {
		g(R);
	}, [R, g]);
	n.useEffect(() => {
		(0, c.cZ)(C, M);
		return () => (0, c.cZ)(C, null);
	}, [C, M]);
	const F = n.useCallback(() => {
		if (y && M) {
			window.localStorage.setItem(B, M.DisplayURL);
		}
	}, [y, B, M]);
	(0, c.hL)(M?.BeforeCloseCallbacks, F);
	(0, c.hL)(M?.NewTabCallbacks, A);
	n.useEffect(() => {
		if (I) {
			let e = JSON.stringify({
				bPinned: S == 1,
				bShowPinnedView: w == 1,
			});
			I.PostMessage("PinnedView", e);
		}
	}, [I, S, w]);
	const G = n.useCallback(() => {
		let e = JSON.stringify({
			bPinned: S == 1,
			bShowPinnedView: w == 1,
		});
		I.PostMessage("PinnedView", e);
	}, [I, S, w]);
	(0, c.hL)(M?.FinishedRequestCallbacks, G);
	const O = H();
	n.useEffect(() => {
		if (M) {
			M.AddSteamURLCallback(O);
		}
		let e = M;
		return () => e?.RemoveSteamURLCallback(O);
	}, [O, M]);
	return n.createElement(
		n.Fragment,
		null,
		!!M &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(q, {
					className: w ? a.PinnedViewURLBar : undefined,
					popup: p,
					manager: M,
					bookmarks: !_ && T,
					strHomeURL: !_ && m,
					bCanChangeURL: f,
				}),
				n.createElement(l.m4, {
					browser: I,
					visible: E,
					className: a.BrowserViewHost,
				}),
			),
		!M && n.createElement(Q, null),
		D,
		N,
	);
}
export function f(e) {
	const {
		strName: t,
		appid: r,
		bUseSavedDimensions: i,
		refPopup: a,
		onClose: o,
		pinnedProps: l,
		...d
	} = e;
	const [A, p] = n.useState();
	const [g, h] = n.useState();
	const C = (0, s.$2)();
	const _ = n.useCallback(
		(e) => {
			const {
				dimensions: t,
				minWidth: r,
				minHeight: n,
			} = (0, m.wm)(C, 1280, 1024, 600, 300);
			e.dimensions = t;
			e.dimensions.left = undefined;
			e.dimensions.top = undefined;
			e.minWidth = r;
			e.minHeight = n;
			return e;
		},
		[C],
	);
	const f = (0, ne.nv)(C, 1280, 1024, 600, 300);
	const b = i ? f : _;
	return n.createElement(
		u.rG,
		{
			strName: t,
			refPopup: (e) => {
				(0, c.cZ)(a, e);
				p(e);
			},
			title: g,
			updateParamsBeforeShow: b,
			bUseSavedDimensions: i,
			onClose: o,
			...l,
		},
		n.createElement(ie, {
			appid: r,
			...d,
			strName: t,
			onTitleChange: h,
			popup: A,
			onClose: o,
			bShowPinnedView: l?.bShowPinnedView,
			bPinned: l?.bPinned,
		}),
	);
}
export function $(e) {
	const {
		strName: t,
		strTitle: r,
		appid: i,
		refPopup: a,
		onClose: o,
		pinnedProps: l,
		bShowMin: d,
		bShowMax: A,
		onMinimize: p,
		onMaximize: g,
		...h
	} = e;
	const [C, _] = n.useState();
	const [f, b] = n.useState();
	const y = (0, s.$2)();
	const S = n.useCallback(
		(e) => {
			const {
				dimensions: t,
				minWidth: r,
				minHeight: n,
			} = (0, m.wm)(y, 1280, 1024, 300, 300);
			e.dimensions = t;
			e.dimensions.left = undefined;
			e.dimensions.top = undefined;
			e.minWidth = r;
			e.minHeight = n;
			return e;
		},
		[y],
	);
	const w = (0, ne.nv)(y, 1280, 1024, 300, 300);
	const B = i !== I.w1 ? w : S;
	const [v, E] = n.useState(false);
	const T = n.useCallback((e) => {
		E(e);
	}, []);
	const R = i == I.w1;
	return n.createElement(
		u.rG,
		{
			strName: t,
			strTitle: r,
			refPopup: (e) => {
				(0, c.cZ)(a, e);
				_(e);
			},
			title: f,
			bForceWindowFocused: v,
			updateParamsBeforeShow: B,
			eCreationFlags: M.Wf.Resizable | M.Wf.Composited,
			bUseSavedDimensions: true,
			bShowMin: R || d,
			bShowMax: R || A,
			onMinimize: p,
			onMaximize: g,
			onClose: o,
			...l,
		},
		n.createElement(Z, {
			appid: i,
			onBrowserFocusChanged: T,
			...h,
			onTitleChange: b,
			popup: C,
			bShowPinnedView: l?.bShowPinnedView,
			bPinned: l?.bPinned,
		}),
	);
}
