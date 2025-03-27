import i, { useState, useEffect } from "./63696.js";
import a from "./48755.js";
import o, { A } from "./90765.js";
import l from "./94878.js";
export let Cc;
const s = a;
const c = l;
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
	const A = ((e, t = {}) => {
		const { typeNumber: r, errorCorrectLevel: n } = t;
		const [a, o] = useState();
		useEffect(() => {
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
	const h = A(c.Bit);
	const C = A(c.Bit, c.Active);
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
			g.push(<div key={`${e}_${t}`} className={r ? C : h} style={r ? _ : f} />);
		}
	}
	let b = p.length;
	return (
		<div
			className={A(c.QRBits, a)}
			style={{
				gridTemplateColumns: `repeat( ${b}, 1fr )`,
			}}
		>
			{g}
		</div>
	);
}
((e) => {
	e[(e.L = 1)] = "L";
	e[(e.M = 0)] = "M";
	e[(e.Q = 3)] = "Q";
	e[(e.H = 2)] = "H";
})((Cc ||= {}));
