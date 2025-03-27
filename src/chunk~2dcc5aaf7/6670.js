import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { Fd } from "./52451.js";
export class N extends i.Component {
	m_elContainer = null;
	m_resizeObserver = null;
	constructor(e) {
		super(e);
		this.state = {
			nWidth: 0,
			nHeight: 0,
		};
	}
	componentWillUnmount() {
		if (this.m_resizeObserver) {
			this.m_resizeObserver.disconnect();
		}
	}
	BindContainerRef(e) {
		if (this.m_resizeObserver) {
			this.m_resizeObserver.disconnect();
			this.m_resizeObserver = null;
		}
		this.m_elContainer = e;
		if (this.m_elContainer) {
			this.m_resizeObserver = Fd(this.m_elContainer, this.OnResize);
			this.UpdateDimensions(
				this.m_elContainer.clientWidth,
				this.m_elContainer.clientHeight,
			);
		}
		if (this.props.refToDiv) {
			this.props.refToDiv(e);
		}
	}
	UpdateDimensions(e, t) {
		if (this.state.nWidth != e || this.state.nHeight != t) {
			this.setState({
				nWidth: e,
				nHeight: t,
			});
		}
	}
	OnResize(e, t) {
		let r = 0;
		let n = 0;
		if (e.length > 0) {
			let t = e[0].contentRect;
			r = t.width;
			n = t.height;
		}
		this.UpdateDimensions(r, n);
	}
	render() {
		const { bUseRelativePosition, className, refToDiv, ...n } = this.props;
		const a = bUseRelativePosition
			? {
					position: "relative",
				}
			: {
					position: "absolute",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				};
		const s = {
			width: this.state.nWidth,
			height: this.state.nHeight,
		};
		const o = this.props.children(s);
		return (
			<div className={className} style={a} ref={this.BindContainerRef} {...n}>
				{o}
			</div>
		);
	}
}
Cg([a.oI], N.prototype, "BindContainerRef", null);
Cg([a.oI], N.prototype, "OnResize", null);
