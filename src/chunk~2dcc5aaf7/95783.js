var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require("./86454.js");
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
		const {
			placeholderWidth: e,
			placeholderHeight: t,
			onRender: r,
			style: n,
			mode: a,
			...o
		} = this.props;
		const l = this.state.bRenderChildren;
		let c = n;
		if (!l) {
			const r = this.state.nPrevRenderWidth || e;
			const i = this.state.nPrevRenderHeight || t;
			if (i !== undefined || r !== undefined) {
				c = {
					...n,
					minHeight: i,
					minWidth: r,
				};
			}
		}
		const m = this.BLoadAndUnload() ? "repeated" : "once";
		return i.createElement(
			s.J,
			{
				ref: this.m_refContainer,
				style: c,
				...o,
				onVisibilityChange: this.OnVisibilityChange,
				trigger: m,
			},
			l && this.props.children,
		);
	}
}
(0, n.Cg)([a.oI], K.prototype, "OnVisibilityChange", null);
