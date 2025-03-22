var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./94790.js");
var s = require("./46701.js");
var o = require("./78110.js");
export const mt = ({
	active: e,
	onDismiss: t,
	className: r,
	modalClassName: o,
	children: l,
}) =>
	n.createElement(
		a.E,
		{
			active: e,
		},
		n.createElement(
			s.x_,
			{
				onEscKeypress: t,
				className: o,
			},
			n.createElement(
				i.UC,
				{
					className: r,
				},
				l,
			),
		),
	);
export function hM(e) {
	const {
		onDismiss: t,
		className: r,
		modalClassName: a,
		children: l,
		...c
	} = e;
	return n.createElement(
		o.t,
		{
			...c,
			onDismiss: t,
		},
		n.createElement(
			s.x_,
			{
				onEscKeypress: t,
				className: a,
			},
			n.createElement(
				i.UC,
				{
					className: r,
				},
				l,
			),
		),
	);
}
export const Q9 = (e) =>
	hM({
		modal: true,
		...e,
	});
