var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./58254.js");
export function M(e) {
	const { children: t, ...r } = e;
	const a = n.useRef(null);
	return n.createElement(
		i.A,
		{
			nodeRef: a,
			...r,
		},
		e.children(a),
	);
}
