export var Cc;
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./48755.js");
var s = a;
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require("./94878.js");
var c = l;
export function rg(e) {
	let {
		quality: t = Cc.M,
		children: r,
		className: a,
		activeBitColor: l = null,
		inactiveBitColor: m = null,
		borderWidth: u = 3,
		typeNumber: d = 6,
	} = e;
	const A = (function (e, t = {}) {
		const { typeNumber: r, errorCorrectLevel: n } = t;
		const [a, o] = (0, i.useState)();
		(0, i.useEffect)(() => {
			o(
				s(e, {
					typeNumber: r,
					errorCorrectLevel: n,
				}).modules,
			);
		}, [e, r, n]);
		return a;
	})(r, {
		typeNumber: d,
		errorCorrectLevel: t,
	});
	if (!A) {
		return null;
	}
	let p = [];
	for (let e = 0; e < u; e++) {
		p.push(Array(A.length + u * 2).fill(false));
	}
	for (let e = 0; e < A.length; e++) {
		p.push([].concat(Array(u).fill(false), A[e], Array(u).fill(false)));
	}
	for (let e = 0; e < u; e++) {
		p.push(Array(A.length + u * 2).fill(false));
	}
	const g = [];
	const h = (0, o.A)(c.Bit);
	const C = (0, o.A)(c.Bit, c.Active);
	const _ =
		l !== null
			? {
					backgroundColor: l,
				}
			: {};
	const f =
		m !== null
			? {
					backgroundColor: m,
				}
			: {};
	for (let e = 0; e < p.length; e++) {
		for (let t = 0; t < p.length; t++) {
			const r = p[e][t];
			g.push(
				i.createElement("div", {
					key: `${e}_${t}`,
					className: r ? C : h,
					style: r ? _ : f,
				}),
			);
		}
	}
	let b = p.length;
	return i.createElement(
		"div",
		{
			className: (0, o.A)(c.QRBits, a),
			style: {
				gridTemplateColumns: `repeat( ${b}, 1fr )`,
			},
		},
		g,
	);
}
(function (e) {
	e[(e.L = 1)] = "L";
	e[(e.M = 0)] = "M";
	e[(e.Q = 3)] = "Q";
	e[(e.H = 2)] = "H";
})((Cc ||= {}));
