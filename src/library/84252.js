var r = require("./42898.js");
var i = require("./28864.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require("./28869.js");
var a = require("./79734.js");
var c = require("./35560.js");
var l = require("./3524.js");
var u = require("./87481.js");
export const B2 = s.forwardRef(function (e, t) {
	const {
		navID: n,
		onActivated: r,
		onDeactivated: i,
		navTreeRef: a,
		enabled: c,
		modal: l,
		virtualFocus: u,
		parentEmbeddedNavTree: m,
		onGlobalButtonDown: h,
		disableFocusClasses: p,
		disabledRoot: g,
		"flow-children": f,
		..._
	} = e;
	const { elemProps: w, navOptions: b, gamepadEvents: C } = (0, o.sl)(_);
	return s.createElement(
		d,
		{
			navID: n,
			onActivated: r,
			onDeactivated: i,
			navTreeRef: a,
			enabled: c,
			modal: l,
			virtualFocus: u,
			parentEmbeddedNavTree: m,
			onGlobalButtonDown: h,
			disableFocusClasses: p,
			disabledRoot: g,
			"flow-children": f,
			...b,
			...C,
		},
		s.createElement("div", {
			...w,
			ref: t,
		}),
	);
});
function d(e) {
	const {
		navID: t,
		onActivated: n,
		onDeactivated: m,
		navTreeRef: d,
		enabled: h = true,
		modal: g = false,
		virtualFocus: f = false,
		children: _,
		parentEmbeddedNavTree: w,
		onGlobalButtonDown: b,
		disableFocusClasses: C = false,
		disabledRoot: v = false,
		"flow-children": M,
		...S
	} = e;
	const { elemProps: y, navOptions: E, gamepadEvents: B } = (0, o.sl)(S);
	const { refDiv: x, tree: L } = (function (e) {
		const {
			navID: t,
			virtualFocus: n,
			parentEmbeddedNavTree: r,
			disabledRoot: a,
			enabled: u,
			modal: m,
			navTreeRef: d,
			onGlobalButtonDown: h,
		} = e;
		const p = (0, c.Vu)();
		const g = (0, l.nN)() || p.GetDefaultContext();
		const f = s.useContext(o.TJ);
		const [_] = s.useState(() =>
			p.NewGamepadNavigationTree(g, t, r ?? f?.Tree),
		);
		let w = s.useRef(null);
		_.SetUseVirtualFocus(n);
		_.SetModal(m);
		_.SetIsEmbeddedInLegacyTree(!!r);
		_.SetOnGlobalButtonDown(h);
		s.useEffect(() => _.RegisterNavigationItem(_.Root, w.current), [_, w]);
		s.useEffect(() => {
			_.SetIsEnabled(u);
		}, [_, u]);
		s.useEffect(() => {
			if (!a) {
				return p.RegisterGamepadNavigationTree(
					_,
					w.current.ownerDocument.defaultView,
				);
			}
		}, [p, _, a]);
		s.useEffect(() => {
			(0, i.cZ)(d, _);
			return () => (0, i.cZ)(d, null);
		}, [d, _]);
		return {
			refDiv: w,
			tree: _,
		};
	})({
		navID: t,
		virtualFocus: f,
		parentEmbeddedNavTree: w,
		disabledRoot: v,
		enabled: h,
		modal: g,
		onGlobalButtonDown: b,
		navTreeRef: d,
	});
	(0, r.hL)(L.OnActivateCallbacks, n);
	(0, r.hL)(L.OnDeactivateCallbacks, m);
	(0, u.KF)(B, x, L);
	s.useLayoutEffect(() => {
		const e = (0, a.O)(M);
		L.Root.SetProperties({
			...E,
			layout: e,
		});
	});
	const k = (0, i.Ue)(x, _.ref);
	return s.createElement(
		p,
		{
			tree: v ? null : L,
			disableFocusClasses: C || v,
		},
		s.createElement(
			o.TJ.Provider,
			{
				value: v ? null : L.Root,
			},
			s.cloneElement(_, {
				id: t,
				"data-react-nav-root": t,
				ref: k,
			}),
		),
	);
}
const h = s.createContext({
	bActiveTree: false,
	bActiveTreeWithinContext: false,
	bDisableFocusClasses: false,
});
function p(e) {
	const { tree: t, disableFocusClasses: n = false, children: r } = e;
	const [i, o] = s.useState(t?.BIsActive() || false);
	const [a, c] = s.useState(t?.BIsActiveWithinContext() || false);
	s.useEffect(
		() =>
			t
				? (o(t.BIsActive()),
					c(t.BIsActiveWithinContext()),
					t.OnActiveStateChangedCallbacks.Register(() => {
						o(t.BIsActive());
						c(t.BIsActiveWithinContext());
					}).Unregister)
				: (o(false), void c(false)),
		[t],
	);
	const l = s.useMemo(
		() => ({
			bActiveTree: i,
			bActiveTreeWithinContext: a,
			bDisableFocusClasses: n,
		}),
		[i, n, a],
	);
	return s.createElement(
		h.Provider,
		{
			value: l,
		},
		r,
	);
}
export function qR() {
	return s.useContext(h);
}
