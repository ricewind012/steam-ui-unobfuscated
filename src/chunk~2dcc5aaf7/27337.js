var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./23038.js");
var a = require(/*webcrack:missing*/ "./58254.js");
var s = require(/*webcrack:missing*/ "./90765.js");
const o = 500;
export class H extends n.Component {
	render() {
		let {
			keyExtractor: e,
			style: t,
			duration: r = o,
			className: l,
			children: c,
			childRef: m,
			...u
		} = this.props;
		const d = {
			...(t || {}),
			transitionDuration: r / 1000 + "s",
		};
		return n.createElement(
			i.A,
			{
				...u,
				className: (0, s.A)("crossfade", l),
			},
			n.createElement(
				a.A,
				{
					nodeRef: m,
					classNames: "crossfade-anim",
					timeout: r,
					key: e(),
					style: d,
				},
				c,
			),
		);
	}
}
export function y(e) {
	const { src: t, ...r } = e;
	const i = {
		backgroundImage: `url(${t})`,
	};
	const a = n.useRef(null);
	return n.createElement(
		H,
		{
			style: i,
			keyExtractor: () => t,
			childRef: a,
			...r,
		},
		n.createElement("div", {
			ref: a,
			className: "crossfade-img",
		}),
	);
}
