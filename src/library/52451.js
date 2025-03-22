export let DF = r.DF;
export let uH = r.uH;
export let eV = r.eV;
export let L$ = r.L$;
export let Z3 = r.Z3;
export let _g = r._g;
export let x2 = r.x2;
export let gc = r.gc;
export let D5 = i.D5;
export let aA = r.aA;
export let wY = s.wY;
export let bB = r.bB;
export let QS = i.QS;
export let RY = i.RY;
export let ob = r.ob;
export let vJ = r.vJ;
export let Sz = r.Sz;
export let Pt = l.Pt;
export let Ue = i.Ue;
export let AX = r.AX;
export let uD = r.uD;
export let bs = r.bs;
export let xM = r.xM;
export let $$ = r.$$;
export let xx = r.xx;
export let OP = r.OP;
export let SK = r.SK;
export let Qi = r.Qi;
export let l6 = r.l6;
export let p1 = s.p1;
export let CH = r.CH;
export let xA = r.xA;
export let ML = r.ML;
export let w6 = l.w6;
export let o4 = r.o4;
export let uN = r.uN;
export let dh = r.dh;
export let hL = r.hL;
export let cZ = i.cZ;
export let xP = r.xP;
export let oI = u.o;
export let XB = i.XB;
export let Fd = s.Fd;
export let md = s.md;
var r = require("./42898.js");
var i = require("./28864.js");
var s = require("./99251.js");
var o = require(/*webcrack:missing*/ "./63696.js");
export function hd() {
	const [e, t] = (0, o.useState)(false);
	const n = (0, s.BL)((0, o.useCallback)((e) => t(e.isIntersecting), []));
	const { style: r, ref: a } = (function () {
		const [e, t] = (0, o.useState)(null);
		const [n, r] = (0, o.useState)(null);
		(0, o.useEffect)(() => {
			if (e) {
				r(window.getComputedStyle(e));
			}
		}, [e]);
		return {
			style: n,
			ref: t,
		};
	})();
	const c = (0, i.Ue)(n, a);
	const l = !r || r.visibility !== "hidden";
	return {
		bVisible: e && l,
		ref: c,
	};
}
export function X() {
	const [e, t] = o.useState(0);
	const n = o.useCallback(
		(n) => {
			const r = n.target.clientHeight;
			if (r > e) {
				t(r);
			}
		},
		[e],
	);
	return {
		strMinHeightStyle: e + "px",
		refForResizeObserver: (0, s.wY)(n),
	};
}
var l = require("./62272.js");
var u = require("./93960.js");
