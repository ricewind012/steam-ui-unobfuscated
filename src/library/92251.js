import r, { Cg } from "./34629.js";
import i from "./41230.js";
import s from "./63696.js";
import o, { A } from "./90765.js";
import a from "./52451.js";
import c from "./24793.js";
const l = c;
export let g = class extends s.Component {
	m_elHover;
	m_bNoSpace = false;
	static defaultProps = {
		direction: "right",
		nBodyAlignment: 0.5,
		nAllowOffscreenPx: 10,
		nBodyDistance: 8,
		nMaxLateralMoveOnScreen: undefined,
	};
	state = {
		x: undefined,
		y: undefined,
		hoverPositionReady: false,
	};
	bindHover(e) {
		this.m_elHover = e || undefined;
		this.positionHover();
	}
	componentDidUpdate() {
		this.positionHover();
	}
	render() {
		const {
			target,
			visibilityObserver,
			className,
			style,
			bEnablePointerEvents,
			direction,
			nBodyAlignment,
			nBodyDistance,
			nAllowOffscreenPx,
			nMaxLateralMoveOnScreen,
			children,
			onNoSpace,
			bTopmost,
			...f
		} = this.props;
		let _ = Object.assign(
			{
				left: this.state.x,
				top: this.state.y,
			},
			style,
		);
		let w = !visibilityObserver || visibilityObserver.visible;
		return (
			<div className={A(l.HoverPositionOuter, bTopmost && l.HoverAboveModal)}>
				<div
					{...f}
					className={A(
						l.HoverPosition,
						w && this.state.hoverPositionReady && l.Ready,
						this.m_bNoSpace && l.NoSpace,
						bEnablePointerEvents && l.EnablePointerEvents,
						className,
					)}
					style={_}
					ref={this.bindHover}
				>
					{children}
				</div>
			</div>
		);
	}
	positionHover() {
		let e = this.m_elHover;
		let t = this.props.target;
		if (!e || !t) {
			return;
		}
		if (
			this.state.hoverPositionReady &&
			this.props.visibilityObserver &&
			!this.props.visibilityObserver.visible
		) {
			return;
		}
		let n = t.ownerDocument.defaultView;
		if (!n || n.closed) {
			return;
		}
		const r = e.querySelector(".hover_arrow.left");
		const i = e.querySelector(".hover_arrow.right");
		const s = e.querySelector(".hover_arrow.top");
		const o = e.querySelector(".hover_arrow.bottom");
		const a = t.getBoundingClientRect();
		const c = e.getBoundingClientRect();
		const l =
			this.props.direction == "overlay" ||
			this.props.direction == "overlay-center";
		if (r) {
			r.setAttribute("style", "display: none;");
		}
		if (i) {
			i.setAttribute("style", "display: none;");
		}
		if (s) {
			s.setAttribute("style", "display: none;");
		}
		if (o) {
			o.setAttribute("style", "display: none;");
		}
		let {
			nBodyDistance = 8,
			direction = "right",
			nBodyAlignment = 0.5,
		} = this.props;
		let { nLeft, nTop, nOverflow, nLateralOverflow } = m(
			direction,
			nBodyAlignment,
			nBodyDistance,
			a,
			c,
			n.innerWidth,
			n.innerHeight,
		);
		if (nOverflow > (this.props.nAllowOffscreenPx ?? 10) && !l) {
			const t = ((e) => {
				switch (e) {
					case "right": {
						return "left";
					}
					case "left": {
						return "right";
					}
					case "bottom": {
						return "top";
					}
					case "top": {
						return "bottom";
					}
					case "overlay": {
						return "overlay";
					}
					case "overlay-center": {
						return "overlay-center";
					}
				}
			})(this.props.direction ?? "right");
			const {
				nLeft: nLeft_1,
				nTop: nTop_1,
				nOverflow: nOverflow_1,
				nLateralOverflow: nLateralOverflow_1,
			} = m(
				t,
				nBodyAlignment,
				nBodyDistance,
				a,
				c,
				n.innerWidth,
				n.innerHeight,
			);
			if (nOverflow_1 < nOverflow) {
				direction = t;
				nLeft = nLeft_1;
				nTop = nTop_1;
				nOverflow = nOverflow_1;
				nLateralOverflow = nLateralOverflow_1;
			}
			if (nOverflow > (this.props.nAllowOffscreenPx ?? 10)) {
				console.log(
					"Not showing hover because it didn't fit in the main or alt direction",
				);
				e.setAttribute("style", "display: none;");
				this.m_bNoSpace = true;
				if (this.props.onNoSpace) {
					this.props.onNoSpace();
				}
				return;
			}
		}
		if (this.props.nMaxLateralMoveOnScreen !== 0 && !l) {
			[nTop, nLeft] = ((e, t, n, r, i) => {
				let s = Math.max(t[0], t[1]);
				if (e !== undefined) {
					s = Math.min(e, s);
				}
				s = Math.max(0, s);
				const o = t[0] > t[1] ? s : -s;
				if (n === "left" || n === "right") {
					r += o;
				} else {
					i += o;
				}
				return [r, i];
			})(
				this.props.nMaxLateralMoveOnScreen,
				nLateralOverflow,
				direction ?? "right",
				nTop,
				nLeft,
			);
		}
		let w = null;
		switch (direction) {
			case "left": {
				w = i;
				break;
			}
			case "right": {
				w = r;
				break;
			}
			case "top": {
				w = o;
				break;
			}
			case "bottom": {
				w = s;
			}
		}
		if (w) {
			w.setAttribute("style", "");
		}
		if (nLeft != this.state.x) {
			this.setState({
				x: nLeft,
			});
		}
		if (nTop != this.state.y) {
			this.setState({
				y: nTop,
			});
		}
		if (!this.state.hoverPositionReady) {
			this.setState({
				hoverPositionReady: true,
			});
		}
	}
};
function m(e, t, n, r, i, s, o) {
	const a = s;
	const c = o;
	let l;
	let u;
	let m;
	let h;
	switch (e) {
		case "right": {
			l = r.right + n;
			u = d(r.top, r.height, i.height, t);
			m = Math.max(0, l + i.width - a);
			h = [Math.max(0, 0 - u), Math.max(0, u + i.height - c)];
			break;
		}
		case "left": {
			l = r.left - n - i.width;
			u = d(r.top, r.height, i.height, t);
			m = Math.max(0, 0 - l);
			h = [Math.max(0, 0 - u), Math.max(0, u + i.height - c)];
			break;
		}
		case "bottom": {
			l = d(r.left, r.width, i.width, t);
			u = r.bottom + n;
			m = Math.max(0, u + i.height - c);
			h = [Math.max(0, 0 - l), Math.max(0, l + i.width - a)];
			break;
		}
		case "top": {
			l = d(r.left, r.width, i.width, t);
			u = r.top - n - i.height;
			m = Math.max(0, 0 - u);
			h = [Math.max(0, 0 - l), Math.max(0, l + i.width - a)];
			break;
		}
		case "overlay": {
			l = r.left;
			u = r.top;
			m = 0;
			h = [0, 0];
			break;
		}
		case "overlay-center": {
			l = r.left + r.width * 0.5 - i.width * 0.5;
			u = r.top + r.height * 0.5 - i.height * 0.5;
			m = 0;
			h = [0, 0];
		}
	}
	return {
		nLeft: l,
		nTop: u,
		nOverflow: m,
		nLateralOverflow: h,
	};
}
function d(e, t, n, r) {
	return Math.max(0, Math.min(1, r)) * (t - n) + e;
}
Cg([a.oI], g.prototype, "bindHover", null);
g = Cg([i.PA], g);
