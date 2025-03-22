var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require("./92556.js");
var o = s;
class l extends n.PureComponent {
	render() {
		const { className: e, ...t } = this.props;
		return n.createElement(
			i.$n,
			{
				className: (0, a.A)(o.AppDetailsButton, e),
				...t,
			},
			this.props.children,
		);
	}
}
export function eJ(e) {
	return n.createElement(l, {
		...e,
	});
}
export function TD(e) {
	const { className: t, ...r } = e;
	return n.createElement(l, {
		className: (0, a.A)(o.BottomRight, t),
		...r,
	});
}
export function bw(e) {
	const { className: t, ...r } = e;
	return n.createElement(l, {
		className: (0, a.A)(o.Center, t),
		...r,
	});
}
export function Po(e) {
	const { className: t, ...r } = e;
	return n.createElement(l, {
		className: (0, a.A)(o.Left, t),
		...r,
	});
}
export function Xs(e) {
	const { className: t, ...r } = e;
	return n.createElement(l, {
		className: (0, a.A)(o.MoreVisible, t),
		...r,
	});
}
