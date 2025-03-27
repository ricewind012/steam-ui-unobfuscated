import { Localize } from "../../actual_src/utils/localization.js";
import n from "./43520.js";
import i from "./53622.js";
import a from "./5640.js";
import s, { PA } from "./41230.js";
import o from "./63696.js";
import l from "./35488.js";
import c, { W5, W6, B6 } from "./49519.js";
import m from "./69164.js";
import u from "./21105.js";
import d from "./61657.js";
import A from "./4690.js";
import p, { Pl } from "./71255.js";
import g from "./15181.js";
import h from "./10975.js";
import C from "./94361.js";
import _ from "./43014.js";
import f, { K$, Qh } from "./22004.js";
import { A as A_1 } from "./90765.js";
import { Pt, Ue } from "./52451.js";
import w from "./62645.js";
import { rP } from "./72476.js";
import I, { K9 } from "./33000.js";
import E, { Mi } from "./31800.js";
import M, { X2 } from "./31319.js";
import T, { we } from "./33572.js";
var B = w;
export const xC = PA(function (e) {
	const { tabs, ...r } = e;
	const n = tabs.filter((e) => {
		return !e?.feature || !a.jR.BIsFeatureBlocked(e.feature);
	});
	return o.createElement(k, {
		tabs: n,
		...r,
	});
});
function k(e) {
	const {
		activeTab,
		autoFocusContents,
		cancelSkipTabHeader,
		tabs,
		onShowTab,
		onCancelFromTabHeader,
		onFocusWithin,
		canBeHeaderBackground,
		wrapAround,
		bPinnedInOverlayView,
		eSortBy,
		showSortingContextMenu,
		showFilterDialogForCollection,
	} = e;
	let C = activeTab;
	let _ = tabs.find((e) => {
		return e.id == C;
	});
	if (!_) {
		_ = tabs[0];
		C = _?.id;
	}
	let [y, w] = o.useState(false);
	let { navRefContent, navRefContainer } = (function (e) {
		const t = o.useRef(undefined);
		const r = o.useRef(undefined);
		const n = o.useRef(e);
		const i = o.useRef(e);
		const a = o.useRef(undefined);
		n.current = e;
		const s = o.useCallback((e) => {
			r.current = e;
		}, []);
		o.useEffect(() => {
			const r_current = r.current;
			if (r_current) {
				a.current = t.current.BFocusWithin();
				return r_current
					.Node()
					.Tree.WindowContext.FocusChangedCallbacks.Register((r, s, o) => {
						if (i.current == n.current) {
							r_current.SaveState(n.current);
							a.current = t.current?.BFocusWithin();
						}
					}).Unregister;
			}
		}, []);
		o.useEffect(() => {
			if (i.current == e) {
				return;
			}
			const n = window.setTimeout(() => {
				if (r.current) {
					r.current.RestoreState(e, 2);
					t.current.NavTree().Controller.RestoreHistoryTransaction(() => {
						if (a.current) {
							t.current.TakeFocus();
						}
					});
					i.current = e;
				}
			}, 10);
			return () => {
				return window.clearTimeout(n);
			};
		}, [e, i]);
		return {
			navRefContent: s,
			navRefContainer: t,
		};
	})(C);
	const D = o.useRef(undefined);
	let [N, G] = o.useState(false);
	const O = wrapAround ?? true;
	const z = P(tabs, activeTab, O, onShowTab);
	let x = o.useCallback(() => {
		D?.current.TakeFocus();
	}, [D]);
	let U = o.useCallback(
		(e) => {
			w(e);
			if (onFocusWithin) {
				onFocusWithin(e);
			}
		},
		[onFocusWithin],
	);
	const W = (function (e, t, r) {
		const n = o.useRef(undefined);
		n.current = t;
		o.useRef(undefined).current = r;
		const i = o.useRef(false);
		const a = o.useRef(undefined);
		const s = o.useCallback((e) => {
			if (i.current) {
				a.current?.classList.add(B.IsUnderHeader);
			} else {
				a.current?.classList.remove(B.IsUnderHeader);
			}
			if (e) {
				a.current?.classList.add(B.AnimateDownwardExpansion);
			} else {
				a.current?.classList.remove(B.AnimateDownwardExpansion);
			}
		}, []);
		const l = (function () {
			const e = o.useRef(false);
			const t = we();
			const r = o.useRef(undefined);
			r.current = t;
			const n = o.useCallback(() => {
				if (!e.current) {
					r.current.m_nNumTabbedPagesActingAsHeaderBackground++;
					e.current = true;
				}
			}, []);
			const i = o.useCallback(() => {
				if (e.current) {
					r.current.m_nNumTabbedPagesActingAsHeaderBackground--;
					e.current = false;
				}
			}, []);
			const a = o.useCallback(
				(e) => {
					if (e) {
						n();
					} else {
						i();
					}
				},
				[n, i],
			);
			o.useEffect(() => {
				return () => {
					return i();
				};
			}, [i]);
			return a;
		})();
		const c = X2();
		const m = o.useCallback(
			(t) => {
				let o = false;
				if (a.current != null) {
					if (e == "always") {
						o = true;
					} else if (e == "on-outer-scroll") {
						o =
							Math.round(a.current?.getBoundingClientRect().top ?? 0) <=
							Math.round(i.current ? 0 : c);
					}
				}
				if (i.current != o) {
					n.current?.(o);
					i.current = o;
					l(o);
					s(t && !r);
				}
			},
			[e, c, s, l, r],
		);
		o.useEffect(() => {
			return m();
		}, [m]);
		const u = o.useCallback(() => {
			m(true);
		}, [m]);
		const d = Pt(u);
		o.useLayoutEffect(s);
		Mi(1, "useGamepadTabbedPageBecomesHeaderBackground");
		const A = o.useCallback(
			(e) => {
				a.current = e;
				m();
			},
			[m],
		);
		return Ue(A, d);
	})(canBeHeaderBackground, e.onIsHeaderBackgroundChange, N);
	const V =
		rP().IN_VR && (showSortingContextMenu || showFilterDialogForCollection);
	const H = K9(V ? eSortBy : undefined);
	const j = (function (e, t) {
		let r = o.useRef("");
		let n = o.useRef(f.fz.None);
		if (r.current == t) {
			return n.current;
		}
		let i = e.findIndex((e) => {
			return e.id == t;
		});
		let a = i;
		if (r.current.length > 0) {
			a = e.findIndex((e) => {
				return r.current == e.id;
			});
		}
		let s = f.fz.None;
		if (a < i) {
			s = f.fz.Right;
		} else if (a > i) {
			s = f.fz.Left;
		}
		r.current = t;
		n.current = s;
		return s;
	})(tabs, _.id);
	const q = K$(B, j);
	const Q = A_1(B.TabHeaderRowWrapper, !y && B.Pinned, N && B.ScrolledDown);
	return o.createElement(
		m.Z,
		{
			navRef: navRefContainer,
			ref: W,
			className: A_1(
				B.GamepadTabbedPage,
				bPinnedInOverlayView && B.OverlayPinnedView,
				canBeHeaderBackground && B.CanBeHeaderBackground,
			),
			onFocusWithin: U,
			onCancelButton: onCancelFromTabHeader && onCancelFromTabHeader,
		},
		o.createElement(
			"div",
			{
				className: Q,
			},
			o.createElement(JZ, {
				tabs: tabs,
				activeTab: _.id,
				onShowTab: onShowTab,
				navRef: D,
				showGlyphs: y,
				wrapAround: O,
			}),
		),
		o.createElement(
			m.Z,
			{
				onButtonDown: z,
				navRef: navRefContent,
				className: A_1(B.TabContents, N && B.Floating),
				autoFocus: autoFocusContents,
				onCancelButton: !cancelSkipTabHeader && x,
			},
			o.createElement(
				f.FF,
				{
					childrenKey: _.id,
					childrenClasses: Qh(B, B.ContentTransition),
					directionClass: q,
				},
				o.createElement(F, {
					page: _,
					scrolledDown: G,
				}),
			),
			V &&
				o.createElement(
					"div",
					{
						className: B.SortAndFilterContainer,
					},
					showSortingContextMenu &&
						o.createElement(
							m.Z,
							{
								className: B.SortAndFilterButton,
								onClick: showSortingContextMenu,
								focusable: false,
							},
							o.createElement(l.SortByGeneric, null),
							H,
						),
					showFilterDialogForCollection &&
						o.createElement(
							m.Z,
							{
								className: B.SortAndFilterButton,
								onClick: showFilterDialogForCollection,
								focusable: false,
							},
							o.createElement(l.Filter, null),
							o.createElement(I.dq, null),
						),
				),
		),
	);
}
export const Q7Context = o.createContext(null);
const N = o.createContext(null);
function F(e) {
	let { page, scrolledDown } = e;
	let [i, a] = o.useState(null);
	let s = o.useCallback((e) => {
		return a(e);
	}, []);
	let l = (function (e) {
		let t = o.useCallback(
			(t) => {
				let r = t.currentTarget.scrollTop > 1;
				e(r);
			},
			[e],
		);
		return t;
	})(scrolledDown);
	let c = (function (e) {
		let t = o.useCallback(
			(t) => {
				if (e) {
					e.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
				}
				return false;
			},
			[e],
		);
		return t;
	})(i);
	return o.createElement(
		G,
		{
			elScroll: i,
		},
		o.createElement(
			u.i6,
			{
				name: `ScrollingTab${page.id}`,
				scrollDirection: "y",
				ref: s,
				msScrollRestoreDelay: 1,
				className: A_1(B.TabContentsScroll, "_TabContentsScroll"),
				style: page.scrollStyle,
				onMoveUp: c,
				onScroll: l,
			},
			o.createElement(
				n.hL,
				{
					spacing: {
						horizontal: parseInt(B.contentPadding),
					},
				},
				page && page.content,
			),
		),
	);
}
function G(e) {
	const { elScroll, children } = e;
	const [n, i] = o.useState(undefined);
	const [a, s] = o.useState(undefined);
	const l = o.useMemo(() => {
		return {
			paddingRight: n,
			paddingLeft: a,
		};
	}, [n, a]);
	o.useLayoutEffect(() => {
		if (elScroll) {
			const e = window.getComputedStyle(elScroll);
			i(e?.paddingRight);
			s(e?.paddingLeft);
		} else {
			i(undefined);
			s(undefined);
		}
	}, [elScroll]);
	return o.createElement(
		Q7Context.Provider,
		{
			value: elScroll,
		},
		o.createElement(
			N.Provider,
			{
				value: l,
			},
			children,
		),
	);
}
function O(e, t, r, n, i, a) {
	const s = t.findIndex((e) => {
		return e.id == r;
	});
	const o = n ? (s + e + t.length) % t.length : s + e;
	if (o >= 0 && o < t.length) {
		i(t[o].id);
		h.eZ.PlayNavSound(h.PN.ChangeTabs);
	} else {
		h.eZ.PlayNavSound(h.PN.FailedNav);
	}
	a.preventDefault();
	a.stopPropagation();
}
function P(e, t, r, n) {
	return o.useCallback(
		(i) => {
			switch (i.detail.button) {
				case d.pR.BUMPER_LEFT: {
					O(-1, e, t, r, n, i);
					break;
				}
				case d.pR.BUMPER_RIGHT: {
					O(1, e, t, r, n, i);
				}
			}
		},
		[e, t, r, n],
	);
}
export function JZ(e) {
	const {
		navRef,
		activeTab,
		tabs,
		onShowTab,
		showGlyphs,
		bleedGlyphs,
		wrapAround,
		className,
	} = e;
	const [m, d] = o.useState(false);
	const h = rP();
	const C = !h.IN_VR;
	const h_IN_VR = h.IN_VR;
	let y = false;
	if (h.IN_GAMEPADUI && tabs.length > 1) {
		y = !!h.IN_VR || m || m || showGlyphs;
	}
	const w = o.useRef(undefined);
	const I = o.useRef(undefined);
	const E = tabs.map((e) => {
		return o.createElement(U, {
			key: e.id,
			tab: e,
			active: e.id == activeTab,
			ref: e.id == activeTab ? w : null,
			onShowTab: onShowTab,
		});
	});
	const M = o.useRef(true);
	o.useEffect(() => {
		Pl(w.current, w.current, M.current ? "auto" : "smooth", "x");
		M.current = false;
	}, [w, I, activeTab]);
	const T = wrapAround ?? true;
	const { fnSwitchLeft, fnSwitchRight } = (function (e, t, r, n) {
		return {
			fnSwitchLeft: o.useCallback(
				(i) => {
					O(-1, e, t, r, n, i);
				},
				[e, t, r, n],
			),
			fnSwitchRight: o.useCallback(
				(i) => {
					O(1, e, t, r, n, i);
				},
				[e, t, r, n],
			),
		};
	})(tabs, activeTab, T, onShowTab);
	const D = P(tabs, activeTab, T, onShowTab);
	const N = o.useRef(activeTab);
	o.useEffect(() => {
		if (N.current != activeTab) {
			if (m) {
				I.current?.TakeFocus();
			}
			N.current = activeTab;
		}
	}, [m, I, activeTab]);
	const F = Ue(I, navRef);
	const G = T ? g.C3 : {};
	return o.createElement(
		"div",
		{
			className: A_1(B.TabRow, className, bleedGlyphs && B.BleedGlyphs),
		},
		C &&
			o.createElement(z, {
				button: _.g4.LeftBumper,
				visible: y,
			}),
		h_IN_VR &&
			o.createElement(x, {
				direction: "left",
				onClick: fnSwitchLeft,
			}),
		o.createElement(
			"div",
			{
				className: B.TabRowTabs,
			},
			o.createElement(
				"div",
				{
					className: B.TabsRowScroll,
				},
				o.createElement(
					u.MS,
					{
						scrollDirection: "x",
						navRef: F,
						className: B.FixCenterAlignScroll,
						navEntryPreferPosition: A.iU.PREFERRED_CHILD,
						scrollIntoViewType: A.Yo.NoTransform,
						onFocusWithin: d,
						onButtonDown: D,
						...G,
					},
					o.createElement(V, null),
					E,
					o.createElement(V, null),
				),
			),
		),
		C &&
			o.createElement(z, {
				button: _.g4.RightBumper,
				visible: y,
			}),
		h_IN_VR &&
			o.createElement(x, {
				direction: "right",
				onClick: fnSwitchRight,
			}),
	);
}
function z(e) {
	const t = A_1(B.Glyphs, e.visible && B.Show);
	return o.createElement(
		"div",
		{
			className: t,
		},
		o.createElement(i.W, {
			button: e.button,
		}),
	);
}
function x(e) {
	return o.createElement(
		m.Z,
		{
			className: A_1(B.Arrows),
			onClick: (t) => {
				return e.onClick(t.nativeEvent);
			},
			focusable: false,
		},
		o.createElement(l.Chevron, {
			direction: e.direction,
		}),
	);
}
const U = o.forwardRef(function (e, t) {
	const {
		tab: {
			id: r,
			title: n,
			icon: i,
			footer: a,
			renderTabAddon: s,
			tabAddonPosition: l = "right",
		},
		active,
		onShowTab,
	} = e;
	let d = () => {
		if (!active) {
			h.eZ.PlayNavSound(h.PN.ChangeTabs);
			e.onShowTab(r);
		}
	};
	const A = s
		? s({
				active: active,
			})
		: null;
	const p = l === "right";
	let g = A_1(
		B.Tab,
		active && B.Selected,
		A && B.HasAddon,
		p ? B.RightAddon : B.LeftAddon,
	);
	return o.createElement(
		m.Z,
		{
			ref: t,
			className: g,
			onActivate: d,
			onFocus: d,
			noFocusRing: true,
			preferredFocus: active,
			...a,
		},
		i &&
			o.createElement(
				"span",
				{
					className: B.TabIcon,
				},
				i,
			),
		l === "left" && A,
		o.createElement(
			"span",
			{
				className: B.TabTitle,
			},
			(0, Localize)(n),
		),
		l === "right" && A,
	);
});
export function h7(e) {
	return o.createElement(
		"span",
		{
			className: B.TabCount,
		},
		e.count,
	);
}
function V() {
	return o.createElement("div", {
		className: B.TabRowSpacer,
	});
}
export function Lv(e) {
	const { children, style = {}, ...n } = e;
	const i = o.useContext(N);
	if (i && i.paddingRight && i.paddingLeft) {
		const { paddingRight, paddingLeft } = i;
		style.marginLeft = "-" + paddingLeft;
		style.marginRight = "-" + paddingRight;
	}
	return o.createElement(
		"div",
		{
			style: style,
			...n,
		},
		children,
	);
}
export function ch(e, t = {}) {
	const { strTabParam = "id", context } = t;
	const i = W5(e());
	const a = W6();
	return {
		strActiveTab: i && i.params[r],
		onShowTab: o.useCallback(
			(t) => {
				const i = e(t, context);
				a.replace(i, a.location.state);
				const s = B6(i, {
					path: e(),
				});
				if (s) {
					const e = s.path.replace(`:${strTabParam}`, t);
					C.y.ReportRouteMatch(e);
				}
			},
			[a, e, strTabParam, context],
		),
	};
}
Lv.Unbleed = function (e) {
	const { children, style = {}, ...n } = e;
	const i = o.useContext(N);
	if (i && i.paddingRight && i.paddingLeft) {
		const { paddingRight, paddingLeft } = i;
		style.paddingLeft = paddingLeft;
		style.paddingRight = paddingRight;
	}
	return o.createElement(
		"div",
		{
			style: style,
			...n,
		},
		children,
	);
};
