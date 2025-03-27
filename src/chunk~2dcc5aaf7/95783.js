import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./52451.js";
import s from "./86454.js";
export class K extends i.Component {
	state = {
		bRenderChildren: false,
		nPrevRenderWidth: 0,
		nPrevRenderHeight: 0,
	};
	m_refContainer = i.createRef();
	BLoadAndUnload() {
		return (this.props.mode || "JustLoad") == "LoadAndUnload";
	}
	OnVisibilityChange(e) {
		let t = this.state.bRenderChildren;
		if (t == e) {
			return;
		}
		if (t && !this.BLoadAndUnload()) {
			return;
		}
		let r = 0;
		let n = 0;
		if (this.m_refContainer.current) {
			const e = this.m_refContainer.current.GetBoundingClientRect();
			if (e) {
				r = e.width;
				n = e.height;
			}
		}
		this.setState({
			bRenderChildren: e,
			nPrevRenderWidth: r,
			nPrevRenderHeight: n,
		});
		if (e && this.props.onRender) {
			this.props.onRender();
		}
	}
	render() {
		const { placeholderWidth, placeholderHeight, onRender, style, mode, ...o } =
			this.props;
		const l = this.state.bRenderChildren;
		let c = style;
		if (!l) {
			const r = this.state.nPrevRenderWidth || placeholderWidth;
			const i = this.state.nPrevRenderHeight || placeholderHeight;
			if (i !== undefined || r !== undefined) {
				c = {
					...style,
					minHeight: i,
					minWidth: r,
				};
			}
		}
		const m = this.BLoadAndUnload() ? "repeated" : "once";
		return (
			<s.J
				ref={this.m_refContainer}
				style={c}
				{...o}
				onVisibilityChange={this.OnVisibilityChange}
				trigger={m}
			>
				{l && this.props.children}
			</s.J>
		);
	}
}
Cg([a.oI], K.prototype, "OnVisibilityChange", null);
