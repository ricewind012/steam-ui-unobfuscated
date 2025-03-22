var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./69164.js");
var a = require(/*webcrack:missing*/ "./4690.js");
var s = require("./64608.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require(/*webcrack:missing*/ "./52451.js");
var c = require("./2053.js");
var m = c;
var u = require(/*webcrack:missing*/ "./72476.js");
var d = require(/*webcrack:missing*/ "./11131.js");
var A = require("./12774.js");
var p = require(/*webcrack:missing*/ "./46108.js");
var g = require("./27793.js");
export const D0 = n.forwardRef(function (e, t) {
	const {
		label: r,
		description: a,
		icon: s,
		children: c,
		childrenLayout: h,
		inlineWrap: C,
		childrenContainerWidth: _,
		spacingBetweenLabelAndChild: f,
		padding: b,
		disabled: y,
		bottomSeparator: S,
		className: w,
		highlightOnFocus: B,
		indentLevel: v,
		verticalAlignment: I,
		iconLocation: E,
		tooltip: M,
		explainer: T,
		explainerTitle: R,
		...k
	} = e;
	const D = (0, u.Qn)();
	const N = h ?? "inline";
	const F = E ?? "front";
	const G = F == "front" && !!s;
	const O = F == "before-children" && !!s;
	const P = N == "inline" && !!c;
	const L = N == "below" && !!c;
	const z = C ?? (D ? "shift-children-below" : "keep-inline");
	const x = !!k.onClick || !!k.onActivate || !!k.focusable;
	const U = (s != null && G) || r != null || (P && c != null);
	const W = _ ?? "min";
	const V = f ?? "standard";
	const H = b ?? "standard";
	const j = S ?? "standard";
	const q = B ?? true;
	const Q = v ?? 0;
	const Z = I ?? "center";
	const Y = (function (e, t) {
		const r = (0, d.R7)();
		const i = n.useCallback(() => {
			(0, A.Zw)(e, t, r.ownerWindow ?? window);
		}, [r, e, t]);
		if (t == null) {
			return {};
		}
		const a = (0, p.we)("#Field_MoreInfo_Action");
		return {
			onOptionsButton: i,
			onOptionsActionDescription: a,
		};
	})(R ?? r, T);
	const K = n.useRef();
	const X = (0, l.Ue)(K, e.navRef);
	const J = n.useCallback(
		(e) => {
			K.current?.TakeFocus();
			e.preventDefault();
		},
		[K],
	);
	return n.createElement(
		i.Z,
		{
			focusable: x,
			noFocusRing: true,
			scrollIntoViewWhenChildFocused: true,
			onActivate: (e) => k.onClick?.(e),
			ref: t,
			onMouseDown: x ? undefined : J,
			...k,
			...Y,
			navRef: X,
			className: (0, o.A)(
				w,
				m.Field,
				y && m.Disabled,
				U && m.WithFirstRow,
				P && m.WithChildrenInline,
				L && m.WithChildrenBelow,
				Z == "center" && m.VerticalAlignCenter,
				z == "shift-children-below" && m.InlineWrapShiftsChildrenBelow,
				!!a && m.WithDescription,
				j == "standard" && m.WithBottomSeparatorStandard,
				j == "thick" && m.WithBottomSeparatorThick,
				W == "fixed" && m.ChildrenWidthFixed,
				W == "max" && m.ChildrenWidthGrow,
				V == "standard" && m.ExtraPaddingOnChildrenBelow,
				H == "standard" && m.StandardPadding,
				H == "compact" && m.CompactPadding,
				x && m.Clickable,
				q && m.HighlightOnFocus,
			),
			style: {
				"--indent-level": Q,
			},
		},
		U &&
			n.createElement(
				"div",
				{
					className: m.FieldLabelRow,
				},
				n.createElement(
					"div",
					{
						className: m.FieldLabel,
					},
					G &&
						n.createElement(
							"div",
							{
								className: (0, o.A)(m.FieldIcon, m.Front),
							},
							s,
						),
					r,
					M &&
						n.createElement(g.o, {
							tooltip: M,
						}),
				),
				P &&
					n.createElement(
						"div",
						{
							className: m.FieldChildrenWithIcon,
						},
						O &&
							n.createElement(
								"div",
								{
									className: (0, o.A)(m.FieldIcon, m.BeforeChildren),
								},
								s,
							),
						n.createElement(
							"div",
							{
								className: m.FieldChildrenInner,
							},
							c,
						),
					),
			),
		L &&
			n.createElement(
				"div",
				{
					className: m.FieldChildrenWithIcon,
				},
				O &&
					n.createElement(
						"div",
						{
							className: (0, o.A)(m.FieldIcon, m.BeforeChildren),
						},
						s,
					),
				n.createElement(
					"div",
					{
						className: m.FieldChildrenInner,
					},
					c,
				),
			),
		a &&
			n.createElement(
				"div",
				{
					className: m.FieldDescription,
				},
				a,
			),
	);
});
export function Nv(e) {
	const { layout: t, ...r } = e;
	return n.createElement(
		D0,
		{
			spacingBetweenLabelAndChild: "none",
			childrenLayout: e.layout,
			...r,
		},
		n.createElement(
			"div",
			{
				className: m.LabelFieldValue,
			},
			e.children,
		),
	);
}
export const xh = n.forwardRef(function (e, t) {
	const {
		label: r,
		description: i,
		explainer: a,
		icon: o,
		layout: c,
		disabled: m,
		onActivate: u,
		bottomSeparator: d,
		highlightOnFocus: A,
		childrenContainerWidth: p,
		padding: g,
		inlineWrap: C,
		fieldClassName: _,
		fieldChildren: f,
		...b
	} = e;
	const { refWithValue: y, refForElement: S } = (0, l.RY)(t);
	return n.createElement(
		D0,
		{
			label: r,
			description: i,
			icon: o,
			bottomSeparator: d,
			highlightOnFocus: A,
			childrenLayout: c ?? "inline",
			childrenContainerWidth: p ?? "min",
			onMouseDown: (e) => {
				y.current?.focus();
				e.preventDefault();
			},
			padding: g,
			inlineWrap: C,
			explainer: a,
			className: _,
			disabled: m,
			onActivate: m ? u : undefined,
		},
		n.createElement(s.$n, {
			...b,
			disabled: m,
			ref: S,
		}),
		f,
	);
});
export const qq = n.forwardRef(function (e, t) {
	const {
		label: r,
		description: i,
		icon: a,
		layout: o,
		bottomSeparator: c,
		highlightOnFocus: m,
		...u
	} = e;
	const { refWithValue: d, refForElement: A } = (0, l.RY)(t);
	return n.createElement(
		D0,
		{
			label: r,
			description: i,
			icon: a,
			bottomSeparator: c,
			highlightOnFocus: m,
			childrenLayout: o ?? "inline",
			childrenContainerWidth: "fixed",
			onMouseDown: (e) => {
				d.current?.element?.focus();
				e.preventDefault();
			},
		},
		n.createElement(s.pd, {
			...u,
			ref: A,
		}),
	);
});
export function $S(e) {
	const t = e.alignItems ?? "left";
	const r = e.spacing ?? "standard";
	const s = e.itemMaxSize ?? "gamepad";
	return n.createElement(
		i.Z,
		{
			className: (0, o.A)(
				m.ControlsListOuterPanel,
				t == "left" && m.AlignLeft,
				t == "right" && m.AlignRight,
				t == "center" && m.AlignCenter,
				r == "standard" && m.StandardSpacing,
				r == "extra" && m.ExtraSpacing,
				s == "desktop" && m.ItemMaxSizeDesktop,
				e.fullWidth && m.FullWidth,
			),
			navEntryPreferPosition: a.iU.PREFERRED_CHILD,
		},
		n.Children.map(
			e.children,
			(e) =>
				e &&
				n.createElement(
					"div",
					{
						className: m.ControlsListChild,
					},
					e,
				),
		),
	);
}
export function BC(e) {
	const {
		children: t,
		alignItems: r,
		spacing: i,
		itemMaxSize: a,
		fullWidth: s,
		...o
	} = e;
	const l = {
		fullWidth: s,
		children: t,
		alignItems: r,
		spacing: i,
		itemMaxSize: a,
	};
	return n.createElement(
		D0,
		{
			childrenLayout: "below",
			...o,
		},
		n.createElement($S, {
			...l,
		}),
	);
}
export function T8(e) {
	const t = e.onClick ?? (() => {});
	return n.createElement(
		Nv,
		{
			key: e.name,
			label: e.name,
			onClick: t,
			bottomSeparator: e.bottomSeparator,
		},
		e.value,
	);
}
export function Nu(e) {
	return n.createElement("div", {
		className: (0, o.A)(m.StandaloneFieldSeparator, e.className),
	});
}
