var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./52451.js");
var s = require(/*webcrack:missing*/ "./79769.js");
export class m extends i.Component {
	m_elCanvas;
	m_Context;
	m_schUpdate = new s.LU();
	m_bSetupComplete = false;
	componentDidMount() {
		if (this.props.updateRate == 0) {
			this.updateCanvas();
		}
	}
	componentWillUnmount() {
		this.m_schUpdate.Cancel();
	}
	componentDidUpdate() {
		this.updateCanvas();
	}
	BindCanvasRef(e) {
		this.m_elCanvas = e;
	}
	updateCanvas() {
		if (
			this.props.elementRef == null ||
			this.m_elCanvas == null ||
			this.m_bSetupComplete
		) {
			return;
		}
		let e = this.props.scaleFactor || [1, 1];
		let t = this.props.elementRef;
		let r = this.props.updateRate;
		this.m_Context = this.m_elCanvas.getContext("2d");
		let n = Math.floor(
			this.m_elCanvas.clientWidth / this.props.reductionFactor,
		);
		let i = Math.floor(
			this.m_elCanvas.clientHeight / this.props.reductionFactor,
		);
		this.m_elCanvas.width = n;
		this.m_elCanvas.height = i;
		if (this.props.blurAmount > 0) {
			this.m_Context.filter = "blur(" + this.props.blurAmount + "px)";
		}
		let a = () => {
			this.m_Context.drawImage(t, 0, 0, n * e[0], i * e[1]);
			if (r > 0) {
				this.m_schUpdate.Schedule(r, a);
			}
		};
		a();
		this.m_bSetupComplete = true;
	}
	render() {
		return i.createElement("canvas", {
			id: this.props.id,
			className: this.props.className,
			ref: this.BindCanvasRef,
			width: this.props.width,
			height: this.props.height,
		});
	}
}
(0, n.Cg)([a.oI], m.prototype, "BindCanvasRef", null);
(0, n.Cg)([a.oI], m.prototype, "updateCanvas", null);
