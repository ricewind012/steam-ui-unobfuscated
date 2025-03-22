var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require(/*webcrack:missing*/ "./52451.js");
export class b extends i.Component {
	m_elOuterContainer = null;
	m_resizeObserver = undefined;
	constructor(e) {
		super(e);
		this.state = {
			strResponsiveClasses: "",
		};
	}
	componentWillUnmount() {
		this.m_resizeObserver?.disconnect();
	}
	GetOwningWindow() {
		return this.m_elOuterContainer.ownerDocument.defaultView;
	}
	OnResize() {
		let e = [];
		const t = this.m_elOuterContainer.clientWidth;
		const r = this.m_elOuterContainer.clientHeight;
		if (this.props.breakShort && r <= this.props.breakShort[0]) {
			e.push(this.props.breakShort[1]);
		}
		if (this.props.breakTall && r >= this.props.breakTall[0]) {
			e.push(this.props.breakTall[1]);
		}
		if (this.props.breakUltraNarrow && t <= this.props.breakUltraNarrow[0]) {
			e.push(this.props.breakUltraNarrow[1]);
		}
		if (this.props.breakNarrow && t <= this.props.breakNarrow[0]) {
			e.push(this.props.breakNarrow[1]);
		}
		if (this.props.breakWide && t <= this.props.breakWide[0]) {
			e.push(this.props.strMedium);
		}
		if (this.props.breakUltraWide && t >= this.props.breakUltraWide[0]) {
			e.push(this.props.breakUltraWide[1]);
		}
		if (this.props.breakWide && t >= this.props.breakWide[0]) {
			e.push(this.props.breakWide[1]);
		}
		if (this.props.fnDimensionsChanged) {
			this.props.fnDimensionsChanged(t, r);
		}
		if ((0, a.A)(...e) != this.state.strResponsiveClasses) {
			this.setState({
				strResponsiveClasses: (0, a.A)(...e),
			});
		}
	}
	BindOuterContainer(e) {
		this.m_elOuterContainer = e;
		if (e) {
			this.m_resizeObserver?.disconnect();
			this.m_resizeObserver = (0, s.Fd)(e, this.OnResize);
			this.OnResize();
		}
	}
	render() {
		const {
			className: e,
			breakUltraNarrow: t,
			breakNarrow: r,
			breakWide: n,
			breakUltraWide: s,
			breakShort: o,
			breakTall: l,
			strMedium: c,
			fnDimensionsChanged: m,
			...u
		} = this.props;
		return i.createElement(
			"div",
			{
				className: (0, a.A)(e, this.state.strResponsiveClasses),
				...u,
				ref: this.BindOuterContainer,
			},
			this.props.children,
		);
	}
}
(0, n.Cg)([s.oI], b.prototype, "OnResize", null);
(0, n.Cg)([s.oI], b.prototype, "BindOuterContainer", null);
