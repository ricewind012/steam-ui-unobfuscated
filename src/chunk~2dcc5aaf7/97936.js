var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./69164.js");
var o = require(/*webcrack:missing*/ "./61657.js");
var l = require(/*webcrack:missing*/ "./4690.js");
var c = require(/*webcrack:missing*/ "./10975.js");
var m = require("./44351.js");
var u = require("./35488.js");
var d = require(/*webcrack:missing*/ "./90765.js");
var A = require(/*webcrack:missing*/ "./52451.js");
var p = require(/*webcrack:missing*/ "./42318.js");
var g = require("./7514.js");
var h = require("./43922.js");
var C = h;
var _ = require(/*webcrack:missing*/ "./15181.js");
var f = require(/*webcrack:missing*/ "./85688.js");
export const I0 = "separator";
export const Vj = "spacer";
class S {
	constructor() {
		(0, i.Gn)(this);
	}
	m_flPageListScrollTop = 0;
	m_flPageScrollTop = 0;
}
(0, n.Cg)([i.sH], S.prototype, "m_flPageListScrollTop", undefined);
(0, n.Cg)([i.sH], S.prototype, "m_flPageScrollTop", undefined);
export class ut {
	static s_Instance;
	static Get() {
		ut.s_Instance ||= new ut();
		return ut.s_Instance;
	}
	constructor() {
		(0, i.Gn)(this);
	}
	m_setPagedSettingsInstances = new Set();
}
function B(e) {
	const {
		stylesheet: t,
		pages: r,
		iActivePage: n,
		onPageSelected: i,
		PageListItemComponent: s = v,
		PageListSeparatorComponent: o = E,
	} = e;
	return r.map((e, r) => {
		const l = r === n;
		if (e === I0) {
			const e = r === n + 1 || r === n - 1;
			return a.createElement(o, {
				key: r,
				bTransparent: e,
			});
		}
		if (e === Vj) {
			return a.createElement("div", {
				key: r,
				className: C.PageListSpacer,
			});
		}
		{
			if (e.visible === false) {
				return null;
			}
			const n = e.identifier || e.title || r.toString();
			const o = () => i(r, e);
			return a.createElement(s, {
				className: (0, d.A)(t.PagedSettingsDialog_PageListItem, {
					[t.Active]: l,
				}),
				key: n,
				onClick: o,
				title: e.title,
				icon: e.icon,
				active: l,
			});
		}
	});
}
function v(e) {
	const { title: t, icon: r, active: n, className: i, onClick: s, ...o } = e;
	return a.createElement(
		"div",
		{
			className: i,
			onClick: s,
		},
		r
			? a.createElement(
					"div",
					{
						className: C.PageListItem_Icon,
					},
					r,
				)
			: null,
		a.createElement(
			"div",
			{
				className: C.PageListItem_Title,
				...o,
			},
			t,
		),
	);
}
(0, n.Cg)([i.sH], ut.prototype, "m_setPagedSettingsInstances", undefined);
const I = a.forwardRef(function (e, t) {
	const { activePage: r, style: n, stylesheet: i } = e;
	const s = r?.padding ?? "standard";
	return a.createElement(
		m.UC,
		{
			style: n,
			className: (0, d.A)(
				i?.PagedSettingsDialog_PageContent,
				r?.pageClassName,
				s == "none" && i?.NoPadding,
			),
			refElem: t,
		},
		r?.header,
		!r?.hideTitle && a.createElement(m.Y9, null, r?.title),
		a.createElement(p.tH, null, r?.content),
	);
});
function E(e) {
	return a.createElement("div", {
		className: (0, d.A)(C.PageListSeparator, {
			[C.Transparent]: e.bTransparent,
		}),
	});
}
export function Bv(e) {
	const t = (0, g.Zt)("PagedSettings", Mw);
	return a.createElement(t, {
		...e,
	});
}
export const Mw = a.forwardRef(function (e, t) {
	const { stylesheet: r = C, pages: n, onPageRequested: i } = e;
	const m = e.page == null;
	const [u, p] = a.useState(() =>
		e.startingPage === undefined
			? -1
			: n.findIndex(
					(t) => typeof t == "object" && t.identifier === e.startingPage,
				),
	);
	let g = u;
	if (!m) {
		g = n.findIndex((t) => typeof t == "object" && t.identifier === e.page);
	}
	if (g < 0 || g >= n.length) {
		g = 0;
	}
	let h = null;
	if (typeof n[g] == "object") {
		h = n[g];
	}
	const _ = a.useRef(null);
	const f = a.useCallback(() => _.current?.TakeFocus() || false, [_]);
	const [b, y] = a.useState(false);
	const v = b ? f : undefined;
	const E = a.useCallback((e) => {
		if (e) {
			y(true);
		}
	}, []);
	const M = a.useCallback(
		(e, t) => {
			y(true);
			c.eZ.PlayNavSound(c.PN.PagedNavigation);
			if (i) {
				i(t.identifier);
			}
			if (t.click) {
				t.click();
			} else if (m) {
				p(e);
			}
		},
		[m, i],
	);
	const T = a.useRef(null);
	const R = e.showTitle ?? true;
	const k = (0, d.A)(
		"DialogContentTransition",
		r.PagedSettingDialog_ContentColumn,
	);
	a.useEffect(() => {
		if (e.bAutoFocusPageContent) {
			T.current?.TakeFocus();
		}
	}, []);
	const { refForPageList: D, refForPage: N } = (function () {
		const e = a.useMemo(() => new S(), []);
		a.useEffect(() => {
			ut.Get().m_setPagedSettingsInstances.add(e);
			return () => {
				ut.Get().m_setPagedSettingsInstances.delete(e);
			};
		}, [e]);
		const t = a.useCallback(
			(t) => (e.m_flPageListScrollTop = t.currentTarget.scrollTop),
			[e],
		);
		const r = a.useCallback(
			(t) => (e.m_flPageScrollTop = t.currentTarget.scrollTop),
			[e],
		);
		const n = (0, A.xA)("scroll", t);
		const i = (0, A.xA)("scroll", r);
		const s = a.useCallback(
			(t) => (e.m_flPageListScrollTop = t?.scrollTop ?? 0),
			[e],
		);
		const o = a.useCallback(
			(t) => (e.m_flPageScrollTop = t?.scrollTop ?? 0),
			[e],
		);
		const l = (0, A.Ue)(n, s);
		const c = (0, A.Ue)(i, o);
		return {
			refForPageList: l,
			refForPage: c,
		};
	})();
	return a.createElement(
		s.Z,
		{
			className: (0, d.A)(r.PagedSettingsDialog, e.className),
			ref: t,
		},
		a.createElement(
			s.Z,
			{
				className: (0, d.A)(
					r.PagedSettingsDialog_PageListColumn,
					e.hideList && C.Hidden,
					"PageListColumn",
				),
				navRef: _,
				onButtonDown: (e) => {
					if (e.detail.button == o.pR.OK) {
						T.current?.TakeFocus(e.detail.button);
					}
				},
				onFocusWithin: E,
			},
			R &&
				a.createElement(
					"div",
					{
						className: r.PagedSettingsDialog_Title,
					},
					e.title,
				),
			e.topControls && a.createElement("div", null, e.topControls),
			a.createElement(
				s.Z,
				{
					className: (0, d.A)(
						r.PagedSettingsDialog_PageList,
						e.disablePageListScrolling &&
							r.PagedSettingsDialog_PageList_DisableScrolling,
						R && r.PagedSettingsDialog_PageList_ShowTitle,
						e.bNoHeaderPadding && r.PageSettingsDialog_PageList_NoHeaderPadding,
					),
					navEntryPreferPosition: l.iU.PREFERRED_CHILD,
					ref: D,
				},
				a.createElement(B, {
					stylesheet: r,
					pages: n,
					iActivePage: g,
					onPageSelected: M,
					PageListItemComponent: e.PageListItemComponent,
					PageListSeparatorComponent: e.PageListSeparatorComponent,
				}),
			),
			e.bottomControls && a.createElement("div", null, e.bottomControls),
		),
		a.createElement(
			s.Z,
			{
				className: k,
				onCancelButton: v,
				navRef: T,
			},
			e.toggleHideList &&
				a.createElement(O, {
					hideList: e.hideList,
					toggleHideList: e.toggleHideList,
				}),
			e.renderPageContent
				? e.renderPageContent(h, N, I)
				: a.createElement(I, {
						ref: N,
						activePage: h,
						stylesheet: r,
					}),
		),
	);
});
export function vn(e) {
	if (e == "PageList") {
		return C.ResponsivePageList;
	} else if (e == "ActivePage") {
		return C.ResponsiveActivePage;
	} else {
		(0, f.z)(e, `Unsupported responsive state: ${e}`);
		return;
	}
}
export function _Z(e) {
	const { onActivate: t } = e;
	return a.createElement(
		s.Z,
		{
			className: (0, d.A)(C.ReturnToPageListButton, C.ListHidden),
			onActivate: t,
			fnCanTakeFocus: _.Nw,
		},
		a.createElement(u.Carat, {
			direction: "left",
		}),
	);
}
export function O7(e) {
	const { pages: t, stylesheet: r = C } = e;
	const n = a.useMemo(() => t.filter((e) => typeof e == "object"), [t]);
	return a.createElement(Bv, {
		...e,
		renderPageContent: (e, t, i) =>
			n.map((n) =>
				a.createElement(G, {
					key: n.identifier,
					page: n,
					isActive: n === e,
					refForPage: n === e ? t : undefined,
					PageComponent: i,
					stylesheet: r,
				}),
			),
	});
}
const N = a.createContext(false);
export function v$() {
	return a.useContext(N);
}
const G = a.memo(function (e) {
	const {
		isActive: t,
		refForPage: r,
		page: n,
		PageComponent: i,
		stylesheet: s,
	} = e;
	const o = a.useRef(false);
	if (!t && !o.current) {
		return null;
	}
	o.current = true;
	const l = t
		? undefined
		: {
				display: "none",
			};
	return a.createElement(
		N.Provider,
		{
			value: t,
		},
		a.createElement(i, {
			ref: r,
			style: l,
			activePage: n,
			stylesheet: s,
		}),
	);
});
function O(e) {
	const { hideList: t, toggleHideList: r } = e;
	return a.createElement(
		"div",
		{
			className: (0, d.A)(C.HidePageListButton, t && C.ListHidden),
			onClick: r,
		},
		t
			? a.createElement(u.DoubleCarat, {
					direction: "right",
				})
			: a.createElement(u.DoubleCarat, {
					direction: "left",
				}),
	);
}
