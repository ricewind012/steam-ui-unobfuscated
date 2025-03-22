var _n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./41230.js");
var s = require("./93050.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require("./3475.js");
var c = require("./5640.js");
var m = require(/*webcrack:missing*/ "./69164.js");
var u = require("./19819.js");
var d = u;
var A = require(/*webcrack:missing*/ "./72476.js");
var p = require("./56726.js");
var g = require("./43520.js");
var h = require("./55116.js");
var C = require("./89748.js");
const _ = (0, i.createContext)({});
function f(e) {
	const { children: t, className: r } = e;
	return i.createElement(
		g.hL,
		{
			spacing: {
				horizontal: parseInt(d.BodyGutter),
			},
		},
		i.createElement(
			"div",
			{
				className: (0, o.A)(d.Body, r),
			},
			t,
			i.createElement(b, null),
		),
	);
}
function b() {
	const {
		primaryAction: e,
		secondaryAction: t,
		renderActions: r,
	} = (0, i.useContext)(_);
	if ((0, A.Qn)() || r === null || (!e && !t)) {
		return null;
	} else if (r) {
		return i.createElement(i.Fragment, null, r(e, t));
	} else if (e && !t) {
		return i.createElement(
			p.TD,
			{
				onClick: e.action,
			},
			e.label,
		);
	} else {
		return i.createElement(
			"div",
			{
				className: d.ButtonContainer,
			},
			t &&
				i.createElement(
					p.Po,
					{
						onClick: t.action,
					},
					t.label,
				),
			e &&
				i.createElement(
					p.TD,
					{
						onClick: e.action,
					},
					e.label,
				),
		);
	}
}
function y(e) {
	const { className: t, ...r } = e;
	return i.createElement("div", {
		className: (0, o.A)(d.Highlight, t),
		...r,
	});
}
export let n = class extends i.Component {
	static Body = f;
	static Highlight = y;
	render() {
		const {
			children: e,
			className: t,
			label: r,
			tooltip: n,
			showRule: a,
			highlight: u,
			feature: A = l.uX,
			availableOffline: p,
			rightColumnSection: g,
			headerClass: f,
			primaryAction: b,
			secondaryAction: y,
			renderActions: S,
			scrollIntoViewWhenChildFocused: w,
			...B
		} = this.props;
		if (c.jR.BIsFeatureBlocked(A) || (!p && (0, C.qw)().BIsOfflineMode())) {
			return null;
		} else {
			return i.createElement(
				_.Provider,
				{
					value: {
						primaryAction: b,
						secondaryAction: y,
						renderActions: S,
					},
				},
				i.createElement(
					m.Z,
					{
						className: (0, o.A)(d.AppDetailsSection, t),
						scrollIntoViewWhenChildFocused: w,
						...B,
					},
					r &&
						i.createElement(s.w, {
							label: r,
							tooltip: n,
							showRule: a,
							className: f,
						}),
					i.createElement(
						m.Z,
						{
							className: (0, o.A)(
								d.AppDetailsSectionContainer,
								r && d.AppDetailsSectionHasLabel,
								g && d.RightColumnSection,
							),
							onOKButton: b?.action,
							onOKActionDescription: b?.label,
							onSecondaryButton: y?.action,
							onSecondaryActionDescription: y?.label,
						},
						i.createElement(h.q, null, u, e),
					),
				),
			);
		}
	}
};
n = (0, _n.Cg)([a.PA], n);
