var n = require("./43520.js");
var i = require("./53622.js");
var a = require("./5640.js");
var s = require(/*webcrack:missing*/ "./41230.js");
var o = require(/*webcrack:missing*/ "./63696.js");
var l = require("./35488.js");
var c = require(/*webcrack:missing*/ "./49519.js");
var m = require(/*webcrack:missing*/ "./69164.js");
var u = require("./21105.js");
var d = require(/*webcrack:missing*/ "./61657.js");
var A = require(/*webcrack:missing*/ "./4690.js");
var p = require(/*webcrack:missing*/ "./71255.js");
var g = require(/*webcrack:missing*/ "./15181.js");
var h = require(/*webcrack:missing*/ "./10975.js");
var C = require("./94361.js");
var _ = require("./43014.js");
var f = require("./22004.js");
var b = require(/*webcrack:missing*/ "./90765.js");
var y = require(/*webcrack:missing*/ "./46108.js");
var S = require(/*webcrack:missing*/ "./52451.js");
var w = require("./62645.js");
var B = w;
var v = require(/*webcrack:missing*/ "./72476.js");
var I = require("./33000.js");
var E = require("./31800.js");
var M = require("./31319.js");
var T = require("./33572.js");
export const xC = (0, s.PA)(function (e) {
	const { tabs: t, ...r } = e;
	const n = t.filter((e) => !e?.feature || !a.jR.BIsFeatureBlocked(e.feature));
	return o.createElement(k, {
		tabs: n,
		...r,
	});
});
function k(e) {
	const {
		activeTab: t,
		autoFocusContents: r,
		cancelSkipTabHeader: n,
		tabs: i,
		onShowTab: a,
		onCancelFromTabHeader: s,
		onFocusWithin: c,
		canBeHeaderBackground: u,
		wrapAround: d,
		bPinnedInOverlayView: A,
		eSortBy: p,
		showSortingContextMenu: g,
		showFilterDialogForCollection: h,
	} = e;
	let C = t;
	let _ = i.find((e) => e.id == C);
	if (!_) {
		_ = i[0];
		C = _?.id;
	}
	let [y, w] = o.useState(false);
	let { navRefContent: R, navRefContainer: k } = (function (e) {
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
			const e = r.current;
			if (e) {
				a.current = t.current.BFocusWithin();
				return e
					.Node()
					.Tree.WindowContext.FocusChangedCallbacks.Register((r, s, o) => {
						if (i.current == n.current) {
							e.SaveState(n.current);
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
			return () => window.clearTimeout(n);
		}, [e, i]);
		return {
			navRefContent: s,
			navRefContainer: t,
		};
	})(C);
	const D = o.useRef(undefined);
	let [N, G] = o.useState(false);
	const O = d ?? true;
	const z = P(i, t, O, a);
	let x = o.useCallback(() => {
		D?.current.TakeFocus();
	}, [D]);
	let U = o.useCallback(
		(e) => {
			w(e);
			if (c) {
				c(e);
			}
		},
		[c],
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
			const t = (0, T.we)();
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
			o.useEffect(() => () => i(), [i]);
			return a;
		})();
		const c = (0, M.X2)();
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
		o.useEffect(() => m(), [m]);
		const u = o.useCallback(() => {
			m(true);
		}, [m]);
		const d = (0, S.Pt)(u);
		o.useLayoutEffect(s);
		(0, E.Mi)(1, "useGamepadTabbedPageBecomesHeaderBackground");
		const A = o.useCallback(
			(e) => {
				a.current = e;
				m();
			},
			[m],
		);
		return (0, S.Ue)(A, d);
	})(u, e.onIsHeaderBackgroundChange, N);
	const V = (0, v.rP)().IN_VR && (g || h);
	const H = (0, I.K9)(V ? p : undefined);
	const j = (function (e, t) {
		let r = o.useRef("");
		let n = o.useRef(f.fz.None);
		if (r.current == t) {
			return n.current;
		}
		let i = e.findIndex((e) => e.id == t);
		let a = i;
		if (r.current.length > 0) {
			a = e.findIndex((e) => r.current == e.id);
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
	})(i, _.id);
	const q = (0, f.K$)(B, j);
	const Q = (0, b.A)(
		B.TabHeaderRowWrapper,
		!y && B.Pinned,
		N && B.ScrolledDown,
	);
	return o.createElement(
		m.Z,
		{
			navRef: k,
			ref: W,
			className: (0, b.A)(
				B.GamepadTabbedPage,
				A && B.OverlayPinnedView,
				u && B.CanBeHeaderBackground,
			),
			onFocusWithin: U,
			onCancelButton: s && s,
		},
		o.createElement(
			"div",
			{
				className: Q,
			},
			o.createElement(JZ, {
				tabs: i,
				activeTab: _.id,
				onShowTab: a,
				navRef: D,
				showGlyphs: y,
				wrapAround: O,
			}),
		),
		o.createElement(
			m.Z,
			{
				onButtonDown: z,
				navRef: R,
				className: (0, b.A)(B.TabContents, N && B.Floating),
				autoFocus: r,
				onCancelButton: !n && x,
			},
			o.createElement(
				f.FF,
				{
					childrenKey: _.id,
					childrenClasses: (0, f.Qh)(B, B.ContentTransition),
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
					g &&
						o.createElement(
							m.Z,
							{
								className: B.SortAndFilterButton,
								onClick: g,
								focusable: false,
							},
							o.createElement(l.SortByGeneric, null),
							H,
						),
					h &&
						o.createElement(
							m.Z,
							{
								className: B.SortAndFilterButton,
								onClick: h,
								focusable: false,
							},
							o.createElement(l.Filter, null),
							o.createElement(I.dq, null),
						),
				),
		),
	);
}
export const Q7 = o.createContext(null);
const N = o.createContext(null);
function F(e) {
	let { page: t, scrolledDown: r } = e;
	let [i, a] = o.useState(null);
	let s = o.useCallback((e) => a(e), []);
	let l = (function (e) {
		let t = o.useCallback(
			(t) => {
				let r = t.currentTarget.scrollTop > 1;
				e(r);
			},
			[e],
		);
		return t;
	})(r);
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
				name: `ScrollingTab${t.id}`,
				scrollDirection: "y",
				ref: s,
				msScrollRestoreDelay: 1,
				className: (0, b.A)(B.TabContentsScroll, "_TabContentsScroll"),
				style: t.scrollStyle,
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
				t && t.content,
			),
		),
	);
}
function G(e) {
	const { elScroll: t, children: r } = e;
	const [n, i] = o.useState(undefined);
	const [a, s] = o.useState(undefined);
	const l = o.useMemo(
		() => ({
			paddingRight: n,
			paddingLeft: a,
		}),
		[n, a],
	);
	o.useLayoutEffect(() => {
		if (t) {
			const e = window.getComputedStyle(t);
			i(e?.paddingRight);
			s(e?.paddingLeft);
		} else {
			i(undefined);
			s(undefined);
		}
	}, [t]);
	return o.createElement(
		Q7.Provider,
		{
			value: t,
		},
		o.createElement(
			N.Provider,
			{
				value: l,
			},
			r,
		),
	);
}
function O(e, t, r, n, i, a) {
	const s = t.findIndex((e) => e.id == r);
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
				case d.pR.BUMPER_LEFT:
					O(-1, e, t, r, n, i);
					break;
				case d.pR.BUMPER_RIGHT:
					O(1, e, t, r, n, i);
			}
		},
		[e, t, r, n],
	);
}
export function JZ(e) {
	const {
		navRef: t,
		activeTab: r,
		tabs: n,
		onShowTab: i,
		showGlyphs: a,
		bleedGlyphs: s,
		wrapAround: l,
		className: c,
	} = e;
	const [m, d] = o.useState(false);
	const h = (0, v.rP)();
	const C = !h.IN_VR;
	const f = h.IN_VR;
	let y = false;
	if (h.IN_GAMEPADUI && n.length > 1) {
		y = !!h.IN_VR || m || a;
	}
	const w = o.useRef(undefined);
	const I = o.useRef(undefined);
	const E = n.map((e) =>
		o.createElement(U, {
			key: e.id,
			tab: e,
			active: e.id == r,
			ref: e.id == r ? w : null,
			onShowTab: i,
		}),
	);
	const M = o.useRef(true);
	o.useEffect(() => {
		(0, p.Pl)(w.current, w.current, M.current ? "auto" : "smooth", "x");
		M.current = false;
	}, [w, I, r]);
	const T = l ?? true;
	const { fnSwitchLeft: R, fnSwitchRight: k } = (function (e, t, r, n) {
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
	})(n, r, T, i);
	const D = P(n, r, T, i);
	const N = o.useRef(r);
	o.useEffect(() => {
		if (N.current != r) {
			if (m) {
				I.current?.TakeFocus();
			}
			N.current = r;
		}
	}, [m, I, r]);
	const F = (0, S.Ue)(I, t);
	const G = T ? g.C3 : {};
	return o.createElement(
		"div",
		{
			className: (0, b.A)(B.TabRow, c, s && B.BleedGlyphs),
		},
		C &&
			o.createElement(z, {
				button: _.g4.LeftBumper,
				visible: y,
			}),
		f &&
			o.createElement(x, {
				direction: "left",
				onClick: R,
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
		f &&
			o.createElement(x, {
				direction: "right",
				onClick: k,
			}),
	);
}
function z(e) {
	const t = (0, b.A)(B.Glyphs, e.visible && B.Show);
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
			className: (0, b.A)(B.Arrows),
			onClick: (t) => e.onClick(t.nativeEvent),
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
		active: c,
		onShowTab: u,
	} = e;
	let d = () => {
		if (!c) {
			h.eZ.PlayNavSound(h.PN.ChangeTabs);
			e.onShowTab(r);
		}
	};
	const A = s
		? s({
				active: c,
			})
		: null;
	const p = l === "right";
	let g = (0, b.A)(
		B.Tab,
		c && B.Selected,
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
			preferredFocus: c,
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
			(0, y.we)(n),
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
	const { children: t, style: r = {}, ...n } = e;
	const i = o.useContext(N);
	if (i && i.paddingRight && i.paddingLeft) {
		const { paddingRight: e, paddingLeft: t } = i;
		r.marginLeft = "-" + t;
		r.marginRight = "-" + e;
	}
	return o.createElement(
		"div",
		{
			style: r,
			...n,
		},
		t,
	);
}
export function ch(e, t = {}) {
	const { strTabParam: r = "id", context: n } = t;
	const i = (0, c.W5)(e());
	const a = (0, c.W6)();
	return {
		strActiveTab: i && i.params[r],
		onShowTab: o.useCallback(
			(t) => {
				const i = e(t, n);
				a.replace(i, a.location.state);
				const s = (0, c.B6)(i, {
					path: e(),
				});
				if (s) {
					const e = s.path.replace(`:${r}`, t);
					C.y.ReportRouteMatch(e);
				}
			},
			[a, e, r, n],
		),
	};
}
Lv.Unbleed = function (e) {
	const { children: t, style: r = {}, ...n } = e;
	const i = o.useContext(N);
	if (i && i.paddingRight && i.paddingLeft) {
		const { paddingRight: e, paddingLeft: t } = i;
		r.paddingLeft = t;
		r.paddingRight = e;
	}
	return o.createElement(
		"div",
		{
			style: r,
			...n,
		},
		t,
	);
};
