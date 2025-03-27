import { AssertMsg } from "../../actual_src/utils/assert.js";
import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./63696.js";
import s from "./69164.js";
import o from "./61657.js";
import l from "./4690.js";
import c from "./10975.js";
import m from "./44351.js";
import u from "./35488.js";
import { A as A_1 } from "./90765.js";
import A, { xA, Ue } from "./52451.js";
import p from "./42318.js";
import g, { Zt } from "./7514.js";
import h from "./43922.js";
import _ from "./15181.js";
const C = h;
export const I0 = "separator";
export const Vj = "spacer";
class S {
	constructor() {
		Gn(this);
	}
	m_flPageListScrollTop = 0;
	m_flPageScrollTop = 0;
}
Cg([i.sH], S.prototype, "m_flPageListScrollTop", undefined);
Cg([i.sH], S.prototype, "m_flPageScrollTop", undefined);
export class ut {
	static s_Instance;
	static Get() {
		ut.s_Instance ||= new ut();
		return ut.s_Instance;
	}
	constructor() {
		Gn(this);
	}
	m_setPagedSettingsInstances = new Set();
}
function B(e) {
	const {
		stylesheet,
		pages,
		iActivePage,
		onPageSelected,
		PageListItemComponent = v,
		PageListSeparatorComponent = E,
	} = e;
	return pages.map((e, r) => {
		const l = r === iActivePage;
		if (e === I0) {
			const e = r === iActivePage + 1 || r === iActivePage - 1;
			return a.createElement(PageListSeparatorComponent, {
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
			const n = e.identifier || e.title || e.title || r.toString();
			const o = () => onPageSelected(r, e);
			return a.createElement(PageListItemComponent, {
				className: A_1(stylesheet.PagedSettingsDialog_PageListItem, {
					[stylesheet.Active]: l,
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
	const { title, icon, active, className, onClick, ...o } = e;
	return a.createElement(
		"div",
		{
			className: className,
			onClick: onClick,
		},
		icon
			? a.createElement(
					"div",
					{
						className: C.PageListItem_Icon,
					},
					icon,
				)
			: null,
		a.createElement(
			"div",
			{
				className: C.PageListItem_Title,
				...o,
			},
			title,
		),
	);
}
Cg([i.sH], ut.prototype, "m_setPagedSettingsInstances", undefined);
const I = a.forwardRef((e, t) => {
	const { activePage, style, stylesheet } = e;
	const s = activePage?.padding ?? "standard";
	return a.createElement(
		m.UC,
		{
			style: style,
			className: A_1(
				stylesheet?.PagedSettingsDialog_PageContent,
				activePage?.pageClassName,
				s == "none" && stylesheet?.NoPadding,
			),
			refElem: t,
		},
		activePage?.header,
		!activePage?.hideTitle && a.createElement(m.Y9, null, activePage?.title),
		a.createElement(p.tH, null, activePage?.content),
	);
});
function E(e) {
	return a.createElement("div", {
		className: A_1(C.PageListSeparator, {
			[C.Transparent]: e.bTransparent,
		}),
	});
}
export function Bv(e) {
	const t = Zt("PagedSettings", Mw);
	return a.createElement(t, {
		...e,
	});
}
export const Mw = a.forwardRef((e, t) => {
	const { stylesheet = C, pages, onPageRequested } = e;
	const m = e.page == null;
	const [u, p] = a.useState(() =>
		e.startingPage === undefined
			? -1
			: pages.findIndex(
					(t) => typeof t == "object" && t.identifier === e.startingPage,
				),
	);
	let g = u;
	if (!m) {
		g = pages.findIndex((t) => typeof t == "object" && t.identifier === e.page);
	}
	if (g < 0 || g >= pages.length) {
		g = 0;
	}
	let h = null;
	if (typeof pages[g] == "object") {
		h = pages[g];
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
			if (onPageRequested) {
				onPageRequested(t.identifier);
			}
			if (t.click) {
				t.click();
			} else if (m) {
				p(e);
			}
		},
		[m, onPageRequested],
	);
	const T = a.useRef(null);
	const R = e.showTitle ?? true;
	const k = A_1(
		"DialogContentTransition",
		stylesheet.PagedSettingDialog_ContentColumn,
	);
	a.useEffect(() => {
		if (e.bAutoFocusPageContent) {
			T.current?.TakeFocus();
		}
	}, []);
	const { refForPageList, refForPage } = (() => {
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
		const n = xA("scroll", t);
		const i = xA("scroll", r);
		const s = a.useCallback(
			(t) => (e.m_flPageListScrollTop = t?.scrollTop ?? 0),
			[e],
		);
		const o = a.useCallback(
			(t) => (e.m_flPageScrollTop = t?.scrollTop ?? 0),
			[e],
		);
		const l = Ue(n, s);
		const c = Ue(i, o);
		return {
			refForPageList: l,
			refForPage: c,
		};
	})();
	return a.createElement(
		s.Z,
		{
			className: A_1(stylesheet.PagedSettingsDialog, e.className),
			ref: t,
		},
		a.createElement(
			s.Z,
			{
				className: A_1(
					stylesheet.PagedSettingsDialog_PageListColumn,
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
						className: stylesheet.PagedSettingsDialog_Title,
					},
					e.title,
				),
			e.topControls && a.createElement("div", null, e.topControls),
			a.createElement(
				s.Z,
				{
					className: A_1(
						stylesheet.PagedSettingsDialog_PageList,
						e.disablePageListScrolling &&
							stylesheet.PagedSettingsDialog_PageList_DisableScrolling,
						R && stylesheet.PagedSettingsDialog_PageList_ShowTitle,
						e.bNoHeaderPadding &&
							stylesheet.PageSettingsDialog_PageList_NoHeaderPadding,
					),
					navEntryPreferPosition: l.iU.PREFERRED_CHILD,
					ref: refForPageList,
				},
				a.createElement(B, {
					stylesheet: stylesheet,
					pages: pages,
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
				? e.renderPageContent(h, refForPage, I)
				: a.createElement(I, {
						ref: refForPage,
						activePage: h,
						stylesheet: stylesheet,
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
		AssertMsg(e, `Unsupported responsive state: ${e}`);
		return;
	}
}
export function _Z(e) {
	const { onActivate } = e;
	return a.createElement(
		s.Z,
		{
			className: A_1(C.ReturnToPageListButton, C.ListHidden),
			onActivate: onActivate,
			fnCanTakeFocus: _.Nw,
		},
		a.createElement(u.Carat, {
			direction: "left",
		}),
	);
}
export function O7(e) {
	const { pages, stylesheet = C } = e;
	const n = a.useMemo(() => pages.filter((e) => typeof e == "object"), [pages]);
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
					stylesheet: stylesheet,
				}),
			),
	});
}
const NContext = a.createContext(false);
export function v$() {
	return a.useContext(NContext);
}
const G = a.memo((e) => {
	const { isActive, refForPage, page, PageComponent, stylesheet } = e;
	const o = a.useRef(false);
	if (!isActive && !o.current) {
		return null;
	}
	o.current = true;
	const l = isActive || {
		display: "none",
	};
	return a.createElement(
		NContext.Provider,
		{
			value: isActive,
		},
		a.createElement(PageComponent, {
			ref: refForPage,
			style: l,
			activePage: page,
			stylesheet: stylesheet,
		}),
	);
});
function O(e) {
	const { hideList, toggleHideList } = e;
	return a.createElement(
		"div",
		{
			className: A_1(C.HidePageListButton, hideList && C.ListHidden),
			onClick: toggleHideList,
		},
		hideList
			? a.createElement(u.DoubleCarat, {
					direction: "right",
				})
			: a.createElement(u.DoubleCarat, {
					direction: "left",
				}),
	);
}
