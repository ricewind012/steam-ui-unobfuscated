import { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./50376.js";
import { A } from "./90765.js";
import o from "./29158.js";
import c from "./52451.js";
import m from "./69164.js";
import u from "./4690.js";
const l = o;
class D extends i.Component {
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
		let l_Medium = l.Medium;
		if (this.props.buttonSize == "small") {
			l_Medium = l.Small;
		}
		let r = {};
		if (!this.props.bNoHeader && this.props.headerPadding) {
			r.padding = this.props.headerPadding;
		}
		return (
			<m.Z
				flow-children="row"
				navEntryPreferPosition={u.iU.MAINTAIN_X}
				className={A(l.PageableContainer, this.props.className)}
			>
				{!this.props.bNoHeader && (
					<div className={l.HeaderPageControls} style={r}>
						{this.props.customheader ? (
							this.props.customheader
						) : (
							<>
								<div
									className={A(
										l.Name,
										this.props.bClickableHeader && l.Clickable,
									)}
									onClick={this.props.fnOnClickHeader}
								>
									{this.props.name}
								</div>
								{this.props.aftername}
								<div className={l.Rule} />
							</>
						)}
						<div
							className={A(
								l.PageClickContainer,
								this.props.pageContainerStyles,
							)}
						>
							{e && (
								<>
									<div
										className={A(
											l.PageLeft,
											!this.props.bLeftEnabled && l.Disabled,
											l_Medium,
										)}
										onClick={this.props.fnLeftClicked}
									>
										<a.F2T singlearrow angle={0} />
									</div>
									<div
										className={A(
											l.PageRight,
											!this.props.bRightEnabled && l.Disabled,
											l_Medium,
										)}
										onClick={this.props.fnRightClicked}
									>
										<a.F2T singlearrow angle={180} />
									</div>{" "}
								</>
							)}
							{this.props.bShowCloseButton && (
								<div
									className={A(
										l.PageableCloseButton,
										e && l.PageButtonsVisible,
										l_Medium,
									)}
									onClick={this.onCloseButtonClicked}
								>
									<a.sED />
								</div>
							)}
						</div>
					</div>
				)}
				<div className={l.PageableContent}>{this.props.children}</div>
			</m.Z>
		);
	}
}
Cg([c.oI], D.prototype, "onCloseButtonClicked", null);
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
		return (
			<D
				name={this.props.name}
				aftername={this.props.aftername}
				className={this.props.className}
				customheader={this.props.customheader}
				fnOnClickHeader={this.OnHeaderClick}
				bClickableHeader={t}
				fnLeftClicked={this.OnLeftClicked}
				fnRightClicked={this.OnRightClicked}
				bLeftEnabled={this.state.bLeftArrowEnabled}
				bRightEnabled={this.state.bRightArrowEnabled}
				bShowCloseButton={this.props.bShowCloseButton}
				fnOnCloseButtonClicked={this.onCloseButtonClicked}
				bNoHeader={this.props.bNoHeader}
				pageContainerStyles={this.props.pageContainerStyles}
				buttonSize={this.props.buttonSize}
				headerPadding={this.props.headerPadding}
			>
				{e}
			</D>
		);
	}
}
Cg([c.oI], C.prototype, "OnLeftClicked", null);
Cg([c.oI], C.prototype, "OnRightClicked", null);
Cg([c.oI], C.prototype, "ScrollLeft", null);
Cg([c.oI], C.prototype, "ScrollRight", null);
Cg([c.oI], C.prototype, "ScrollToFirstChild", null);
Cg([c.oI], C.prototype, "OnUpdateArrows", null);
Cg([c.oI], C.prototype, "OnHeaderClick", null);
Cg([c.oI], C.prototype, "onCloseButtonClicked", null);
