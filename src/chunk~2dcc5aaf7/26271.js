import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./27939.js";
import { A as A_1 } from "./90765.js";
import l, { Fd } from "./52451.js";
import c, { s as s_1 } from "./81255.js";
import m from "./7558.js";
const s = a;
export class Q extends i.Component {
	m_elContents = null;
	m_resizeObserver;
	m_scrollAnimation = null;
	constructor(e) {
		super(e);
		this.state = {
			bAnimatingScroll: false,
			bOnLastPage: false,
		};
	}
	componentDidMount() {
		if (
			this.m_elContents &&
			((this.m_resizeObserver = Fd(this.m_elContents, this.UpdateScrollArrows)),
			this.props.initialScrollToChild != null)
		) {
			const e = this.m_elContents.children[this.props.initialScrollToChild];
			if (e) {
				this.ScrollToElement(e, true);
			}
		}
		this.UpdateScrollArrows();
	}
	componentWillUnmount() {
		this.m_resizeObserver?.disconnect();
	}
	BindContents(e) {
		this.m_elContents = e;
	}
	ScrollLeft(e) {
		if (!this.m_elContents) {
			return;
		}
		let t = this.m_elContents;
		let r = p(t);
		if (r < 0 || r == 0) {
			this.ScrollToOffset(0, false);
			return;
		}
		let n = t.children[r];
		let i = null;
		for (let e = r - 1; e >= 0; e--) {
			let r = t.children[e];
			if (!g(r) && !A(n, t, d(n) - d(r))) {
				i = r;
				break;
			}
		}
		if (!i || e.shiftKey) {
			this.ScrollToOffset(0, false);
		} else {
			this.ScrollToElement(i, false);
		}
		this.ScheduleUpdateScrollArrows();
	}
	ScrollRight(e) {
		if (!this.m_elContents) {
			return;
		}
		let t = this.m_elContents;
		let r = p(t);
		if (r < 0) {
			return;
		}
		let n = this.m_elContents.children;
		let i = null;
		for (let e = r; e < n.length; e++) {
			let n_e = n[e];
			if (!g(n_e) && !A(n_e, t)) {
				i = n_e;
				break;
			}
		}
		if (!i || e.shiftKey) {
			this.ScrollToOffset(this.m_elContents.scrollWidth, false);
		} else {
			this.ScrollToElement(i, false);
		}
		this.ScheduleUpdateScrollArrows();
	}
	UpdateScrollArrows() {
		if (!this.m_elContents) {
			return;
		}
		const e = this.m_elContents.scrollLeft >= 1;
		const t =
			this.m_elContents.scrollLeft + this.m_elContents.clientWidth <
			this.m_elContents.scrollWidth;
		this.setState({
			bOnLastPage: !t,
		});
		this.props.fnUpdateArrows(e, t);
		if (this.props.fnOnChildrenVisible) {
			let e = this.m_elContents;
			let t = p(e);
			let r = t;
			let n = this.m_elContents.children;
			for (r = t; r < n.length; r++) {
				let n_r = n[r];
				if (!g(n_r) && !A(n_r, e)) {
					r--;
					break;
				}
			}
			if (r < t) {
				t = r;
			}
			this.props.fnOnChildrenVisible(t, r);
		}
	}
	ScheduleUpdateScrollArrows() {
		setTimeout(() => {
			this.UpdateScrollArrows();
		}, 1510);
	}
	ScrollToElement(e, t) {
		if (!this.m_elContents) {
			return;
		}
		let r = d(e) - (this.props.leftMargin || 0);
		this.ScrollToOffset(r, t);
	}
	ScrollToOffset(e, t) {
		if (this.m_elContents && !this.m_scrollAnimation) {
			if (t) {
				this.m_elContents.scrollLeft = e;
			} else {
				let t = {
					msDuration: 500,
					timing: "cubic-in-out",
					onComplete: this.OnScrollComplete,
				};
				this.m_scrollAnimation = new m.JV(
					this.m_elContents,
					{
						scrollLeft: e,
					},
					t,
				);
				this.m_scrollAnimation.Start();
				this.setState({
					bAnimatingScroll: true,
				});
			}
		}
	}
	OnScrollComplete() {
		this.m_scrollAnimation = null;
		this.setState({
			bAnimatingScroll: false,
		});
	}
	ScrollToFirstChild() {
		if (this.m_elContents && this.m_elContents.children.length > 0) {
			this.ScrollToElement(this.m_elContents.children[0], false);
		}
	}
	componentDidUpdate() {
		this.UpdateScrollArrows();
	}
	render() {
		const {
			className,
			leftMargin,
			edgeMask,
			initialScrollToChild,
			customPadding,
			fnUpdateArrows,
			fnOnChildrenVisible,
			fnRenderScrollingDiv,
			...u
		} = this.props;
		let d;
		let A = A_1(s.BoxCarousel, className);
		if (this.props.edgeMask && this.props.edgeMask != "old") {
			if (this.props.edgeMask == "new") {
				d = s.MaskRightNew;
			}
		} else {
			d = s.MaskRight;
		}
		let p = {};
		if (this.props.customPadding) {
			p.padding = this.props.customPadding;
		}
		if (this.props.gap) {
			p.gap = this.props.gap;
		}
		const g = A_1(
			s.BoxCarouselContents,
			d,
			this.state.bAnimatingScroll && s.AnimatingScroll,
			this.state.bOnLastPage && s.OnLastPage,
		);
		return (
			<div className={A} {...u}>
				{fnRenderScrollingDiv ? (
					fnRenderScrollingDiv({
						htmlElementRef: this.BindContents,
						className: g,
						onScroll: this.UpdateScrollArrows,
						children: this.props.children,
					})
				) : (
					<div
						ref={this.BindContents}
						className={g}
						onScroll={this.UpdateScrollArrows}
						style={p}
					>
						{this.props.children}
					</div>
				)}
			</div>
		);
	}
}
function d(e) {
	return e.offsetLeft;
}
function A(e, t, r = 0) {
	let n = e.offsetLeft + r;
	let i = n + e.offsetWidth;
	let a = t.scrollLeft + t.clientWidth;
	return n >= t.scrollLeft && i < a;
}
function p(e) {
	let { scrollLeft, children } = e;

	for (let e = 0; e < children.length; e++) {
		if (d(children[e]) >= scrollLeft) {
			return e;
		}
	}
	return -1;
}
function g(e) {
	return e.getAttribute("data-carousel") == "ignore";
}
Cg([l.oI], Q.prototype, "BindContents", null);
Cg([l.oI], Q.prototype, "ScrollLeft", null);
Cg([l.oI], Q.prototype, "ScrollRight", null);
Cg([l.oI, s_1(250)], Q.prototype, "UpdateScrollArrows", null);
Cg([l.oI], Q.prototype, "OnScrollComplete", null);
Cg([l.oI], Q.prototype, "ScrollToFirstChild", null);
