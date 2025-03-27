import r from "./42898.js";
import i, { Ue as Ue_1 } from "./28864.js";
import s, { BL, wY as wY_1 } from "./99251.js";
import o, { useState, useCallback, useEffect } from "./63696.js";
import l from "./62272.js";
import u from "./93960.js";
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
export function hd() {
	const [e, setE] = useState(false);
	const n = BL(useCallback((e) => setE(e.isIntersecting), []));
	const { style, ref } = (() => {
		const [e, setE_1] = useState(null);
		const [n, setN] = useState(null);
		useEffect(() => {
			if (e) {
				setN(window.getComputedStyle(e));
			}
		}, [e]);
		return {
			style: n,
			ref: setE_1,
		};
	})();
	const c = Ue_1(n, ref);
	const l = !style || style.visibility !== "hidden";
	return {
		bVisible: e && l,
		ref: c,
	};
}
export function X() {
	const [e, setE] = o.useState(0);
	const n = o.useCallback(
		(n) => {
			const r = n.target.clientHeight;
			if (r > e) {
				setE(r);
			}
		},
		[e],
	);
	return {
		strMinHeightStyle: `${e}px`,
		refForResizeObserver: wY_1(n),
	};
}
