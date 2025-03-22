var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./50376.js");
var s = require(/*webcrack:missing*/ "./90765.js");
var o = require("./29158.js");
var l = o;
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require(/*webcrack:missing*/ "./69164.js");
var u = require(/*webcrack:missing*/ "./4690.js");
class d extends i.Component {
	onCloseButtonClicked(e) {
		if (
			this.props.bShowCloseButton &&
			this.props.fnOnCloseButtonClicked &&
			this.props.bShowCloseButton &&
			this.props.fnOnCloseButtonClicked
		) {
			this.props.fnOnCloseButtonClicked(e);
		}
	}
	render() {
		let e = this.props.bLeftEnabled || this.props.bRightEnabled;
		let t = l.Medium;
		if (this.props.buttonSize == "small") {
			t = l.Small;
		}
		let r = {};
		if (!this.props.bNoHeader && this.props.headerPadding) {
			r.padding = this.props.headerPadding;
		}
		return i.createElement(
			m.Z,
			{
				"flow-children": "row",
				navEntryPreferPosition: u.iU.MAINTAIN_X,
				className: (0, s.A)(l.PageableContainer, this.props.className),
			},
			!this.props.bNoHeader &&
				i.createElement(
					"div",
					{
						className: l.HeaderPageControls,
						style: r,
					},
					this.props.customheader
						? this.props.customheader
						: i.createElement(
								i.Fragment,
								null,
								i.createElement(
									"div",
									{
										className: (0, s.A)(
											l.Name,
											this.props.bClickableHeader && l.Clickable,
										),
										onClick: this.props.fnOnClickHeader,
									},
									this.props.name,
								),
								this.props.aftername,
								i.createElement("div", {
									className: l.Rule,
								}),
							),
					i.createElement(
						"div",
						{
							className: (0, s.A)(
								l.PageClickContainer,
								this.props.pageContainerStyles,
							),
						},
						e &&
							i.createElement(
								i.Fragment,
								null,
								i.createElement(
									"div",
									{
										className: (0, s.A)(
											l.PageLeft,
											!this.props.bLeftEnabled && l.Disabled,
											t,
										),
										onClick: this.props.fnLeftClicked,
									},
									i.createElement(a.F2T, {
										singlearrow: true,
										angle: 0,
									}),
								),
								i.createElement(
									"div",
									{
										className: (0, s.A)(
											l.PageRight,
											!this.props.bRightEnabled && l.Disabled,
											t,
										),
										onClick: this.props.fnRightClicked,
									},
									i.createElement(a.F2T, {
										singlearrow: true,
										angle: 180,
									}),
								),
								" ",
							),
						this.props.bShowCloseButton &&
							i.createElement(
								"div",
								{
									className: (0, s.A)(
										l.PageableCloseButton,
										e && l.PageButtonsVisible,
										t,
									),
									onClick: this.onCloseButtonClicked,
								},
								i.createElement(a.sED, null),
							),
					),
				),
			i.createElement(
				"div",
				{
					className: l.PageableContent,
				},
				this.props.children,
			),
		);
	}
}
(0, n.Cg)([c.oI], d.prototype, "onCloseButtonClicked", null);
export class C extends i.Component {
	state = {
		bLeftArrowEnabled: false,
		bRightArrowEnabled: false,
	};
	m_refCarousel = i.createRef();
	OnLeftClicked(e) {
		this.ScrollLeft(e);
	}
	OnRightClicked(e) {
		this.ScrollRight(e);
	}
	ScrollLeft(e) {
		let t = this.m_refCarousel.current;
		if (t) {
			t.ScrollLeft(e);
		}
	}
	ScrollRight(e) {
		let t = this.m_refCarousel.current;
		if (t) {
			t.ScrollRight(e);
		}
	}
	ScrollToFirstChild() {
		let e = this.m_refCarousel.current;
		if (e) {
			e.ScrollToFirstChild();
		}
	}
	OnUpdateArrows(e, t) {
		if (
			this.state.bLeftArrowEnabled != e ||
			this.state.bRightArrowEnabled != t
		) {
			this.setState({
				bLeftArrowEnabled: e,
				bRightArrowEnabled: t,
			});
		}
		if (this.props.fnUpdateArrows) {
			this.props.fnUpdateArrows(e, t);
		}
	}
	OnHeaderClick(e) {
		if (this.props.bHeaderClickScrollToFirst) {
			if (this.props.onClickHeader) {
				this.props.onClickHeader(e);
			}
			if (this.m_refCarousel.current) {
				this.m_refCarousel.current.ScrollToFirstChild();
			}
		}
	}
	onCloseButtonClicked(e) {
		if (
			this.props.bShowCloseButton &&
			this.props.onCloseButtonClicked &&
			this.props.bShowCloseButton &&
			this.props.onCloseButtonClicked
		) {
			this.props.onCloseButtonClicked(e);
		}
	}
	render() {
		let e = this.props.children(this.m_refCarousel, this.OnUpdateArrows);
		let t =
			this.props.bHeaderClickScrollToFirst && this.state.bLeftArrowEnabled;
		return i.createElement(
			d,
			{
				name: this.props.name,
				aftername: this.props.aftername,
				className: this.props.className,
				customheader: this.props.customheader,
				fnOnClickHeader: this.OnHeaderClick,
				bClickableHeader: t,
				fnLeftClicked: this.OnLeftClicked,
				fnRightClicked: this.OnRightClicked,
				bLeftEnabled: this.state.bLeftArrowEnabled,
				bRightEnabled: this.state.bRightArrowEnabled,
				bShowCloseButton: this.props.bShowCloseButton,
				fnOnCloseButtonClicked: this.onCloseButtonClicked,
				bNoHeader: this.props.bNoHeader,
				pageContainerStyles: this.props.pageContainerStyles,
				buttonSize: this.props.buttonSize,
				headerPadding: this.props.headerPadding,
			},
			e,
		);
	}
}
(0, n.Cg)([c.oI], C.prototype, "OnLeftClicked", null);
(0, n.Cg)([c.oI], C.prototype, "OnRightClicked", null);
(0, n.Cg)([c.oI], C.prototype, "ScrollLeft", null);
(0, n.Cg)([c.oI], C.prototype, "ScrollRight", null);
(0, n.Cg)([c.oI], C.prototype, "ScrollToFirstChild", null);
(0, n.Cg)([c.oI], C.prototype, "OnUpdateArrows", null);
(0, n.Cg)([c.oI], C.prototype, "OnHeaderClick", null);
(0, n.Cg)([c.oI], C.prototype, "onCloseButtonClicked", null);
