import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./52451.js";
export class c extends i.Component {
	m_refImage = i.createRef();
	constructor(e) {
		super(e);
		this.state = {
			nImage: 0,
		};
	}
	componentDidUpdate(e) {
		if (JSON.stringify(this.props.rgSources) != JSON.stringify(e.rgSources)) {
			this.setState({
				nImage: 0,
			});
		}
	}
	get src() {
		let e = "";
		if (
			this.props.rgSources &&
			this.props.rgSources.length > this.state.nImage
		) {
			e = this.props.rgSources[this.state.nImage];
		}
		if (!e) {
			console.warn(
				"MultiSourceImage created with no image src",
				this.props,
				this.state.nImage,
			);
			e = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
		}
		return e;
	}
	get imgRef() {
		return this.m_refImage;
	}
	OnImageError(e) {
		if (this.props.onIncrementalError) {
			this.props.onIncrementalError(
				e,
				this.props.rgSources[this.state.nImage],
				this.state.nImage,
			);
		}
		let t = this.state.nImage + 1;
		if (t >= this.props.rgSources.length && this.props.onError) {
			this.props.onError(e);
		}
		if (t < this.props.rgSources.length) {
			this.setState({
				nImage: t,
			});
		}
	}
	render() {
		const { rgSources, onIncrementalError, onError, ...n } = this.props;
		const a = this.src;
		return (
			<img ref={this.m_refImage} {...n} src={a} onError={this.OnImageError} />
		);
	}
}
Cg([a.oI], c.prototype, "OnImageError", null);
