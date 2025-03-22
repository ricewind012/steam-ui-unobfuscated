var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./16117.js");
var o = require(/*webcrack:missing*/ "./44846.js");
var l = require("./46162.js");
var c = require(/*webcrack:missing*/ "./92251.js");
require(/*webcrack:missing*/ "./98995.js");
var m = require(/*webcrack:missing*/ "./52451.js");
var u = require(/*webcrack:missing*/ "./72476.js");
var d = require("./8090.js");
var A = require("./1521.js");
function p(e) {
	return new A.OJ(new A.R8(), 0);
}
function g(e) {
	const { text: t, languageOverride: r } = e;
	const [n] = (0, a.useState)(
		new d.B(new Map([...Array.from(s.W4.entries())]), p, r),
	);
	return a.createElement(a.Fragment, null, n.ParseBBCode(t, {}));
}
var h = require("./61964.js");
var C = h;
export const $k = (0, i.PA)((e) => {
	const t = e.photo ? (0, s._D)(e.photo, (0, o.sf)(u.TS.LANGUAGE)) : null;
	const r = e.photo ? (typeof t == "string" ? t : t[1]) : null;
	const n = Boolean(e.title);
	const i = Boolean(e.company);
	return a.createElement(
		"div",
		{
			className: C.SpeakerPopup,
			onMouseLeave: e.fnClose,
		},
		a.createElement(
			"div",
			{
				className: C.SpeakerInfoOuter,
			},
			e.photo &&
				a.createElement("img", {
					src: r,
				}),
			a.createElement(
				"div",
				{
					className: C.SpeakerInfoInner,
				},
				a.createElement("div", null, e.name),
				(n || i) &&
					a.createElement(
						"div",
						null,
						n &&
							a.createElement(
								"span",
								{
									className: C.SpeakerTitle,
								},
								e.title,
							),
						n && i && a.createElement("span", null, ", "),
						i && a.createElement("span", null, e.company),
					),
			),
		),
		e.bio &&
			a.createElement(
				"div",
				{
					className: C.SpeakerBio,
				},
				e.bio,
				e.bioString &&
					a.createElement(g, {
						text: e.bioString,
					}),
			),
	);
});
export class fI extends a.Component {
	static sm_embeddedElements = new l.MX("presenter-hover-source-elements");
	m_refAnchor = a.createRef();
	m_fnHidePopup;
	m_nScrollPosAtHoverStart;
	ClosePopup() {
		if (this.m_fnHidePopup) {
			this.m_fnHidePopup();
			this.m_fnHidePopup = null;
			window.removeEventListener("scroll", this.OnScroll);
		}
	}
	componentWillUnmount() {
		this.ClosePopup();
	}
	OnScroll() {
		if (Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50) {
			this.ClosePopup();
		}
	}
	OnHover(e) {
		const t = this.m_refAnchor.current;
		if (!t) {
			return;
		}
		const r = {
			direction: "right",
			bEnablePointerEvents: true,
			style: {
				maxWidth: 640,
				minHeight: t.clientHeight,
			},
			target: t,
		};
		const n = "presenter-hover-" + Math.floor(Math.random() * 100000000);
		this.m_fnHidePopup = () =>
			fI.sm_embeddedElements.HideElement(t.ownerDocument, n);
		window.addEventListener("scroll", this.OnScroll);
		this.m_nScrollPosAtHoverStart = window.scrollY;
		fI.sm_embeddedElements.ShowElementDelayed(
			t.ownerDocument,
			150,
			a.createElement(
				c.g,
				{
					...r,
				},
				a.createElement($k, {
					...this.props,
					fnClose: this.OnLeave,
				}),
			),
			n,
		);
	}
	OnLeave(e) {
		this.ClosePopup();
	}
	render() {
		return a.createElement(
			"div",
			{
				className: C.SpeakerHover,
				ref: this.m_refAnchor,
				onMouseEnter: this.OnHover,
				onFocus: this.OnHover,
				onMouseLeave: this.OnLeave,
				onBlur: this.OnLeave,
			},
			this.props.children,
		);
	}
}
(0, n.Cg)([m.oI], fI.prototype, "ClosePopup", null);
(0, n.Cg)([m.oI], fI.prototype, "OnScroll", null);
(0, n.Cg)([m.oI], fI.prototype, "OnHover", null);
(0, n.Cg)([m.oI], fI.prototype, "OnLeave", null);
export class S8 extends a.Component {
	render() {
		const e = this.props.photo
			? (0, s._D)(this.props.photo, (0, o.sf)(u.TS.LANGUAGE))
			: null;
		const t =
			this.props.photo && !this.props.hidePhotoInCompactView
				? typeof e == "string"
					? e
					: e[1]
				: null;
		const r = Boolean(this.props.title);
		const n = Boolean(this.props.company);
		return a.createElement(
			"div",
			{
				className: C.SpeakerOuter,
			},
			a.createElement(
				fI,
				{
					...this.props,
				},
				a.createElement(
					"div",
					{
						className: C.Speaker,
					},
					a.createElement(
						"div",
						{
							className: C.SpeakerInfoOuter,
						},
						!!t &&
							a.createElement("img", {
								src: t,
							}),
						a.createElement(
							"div",
							{
								className: C.SpeakerInfoInner,
							},
							a.createElement("div", null, this.props.name),
							(r || n) &&
								a.createElement(
									"div",
									null,
									r &&
										a.createElement(
											"span",
											{
												className: C.SpeakerTitle,
											},
											this.props.title,
										),
									r && n && a.createElement("span", null, ", "),
									n && a.createElement("span", null, this.props.company),
								),
						),
					),
				),
			),
		);
	}
}
