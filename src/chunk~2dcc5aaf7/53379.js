var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./10975.js");
import { BA, IsHTMLElement } from "../../actual_src/utils/domutils.js";
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require(/*webcrack:missing*/ "./72476.js");
const _l = new WeakMap();
function c(e) {
	if (e) {
		if (!_l.has(e)) {
			_l.set(e, new Set());
		}
		return _l.get(e);
	}
}
export function j(e) {
	const t = (0, o.rP)({
		bSuppressAssert: true,
	}).IN_VR;
	const r = n.useMemo(() => new Map(), []);
	const [i, l] = n.useState(false);
	const m = n.useRef(undefined);
	const u = e.onClick;
	const d = n.useCallback(
		(e) => {
			if (u) {
				u(e);
			}
		},
		[u],
	);
	const A = e.onTouchStart;
	const p = n.useCallback(
		(e) => {
			for (const t of Array.from(e.targetTouches)) {
				const n = c(e.view);
				if (!r.has(t.identifier)) {
					if (n.has(t.identifier)) {
						continue;
					}
					n.add(t.identifier);
					r.set(t.identifier, {
						bReceivedTouchMove: false,
						bScrolled: false,
						elemTouchStart: e.target,
					});
				}
			}
			l(r.size > 0);
			if (A) {
				A(e);
			}
		},
		[A, r],
	);
	const g = e.onTouchMove;
	const h = n.useCallback(
		(e) => {
			for (const t of Array.from(e.changedTouches)) {
				if (r.has(t.identifier)) {
					r.get(t.identifier).bReceivedTouchMove = true;
				}
			}
			if (g) {
				g(e);
			}
		},
		[g, r],
	);
	const C = e.onTouchEnd;
	const _ = n.useCallback(
		(e) => {
			let t = false;
			for (const n of Array.from(e.changedTouches)) {
				if (!r.has(n.identifier)) {
					continue;
				}
				if (t || !m.current) {
					continue;
				}
				const i = r.get(n.identifier);
				r.delete(n.identifier);
				c(e.view)?.delete(n.identifier);
				if (!i.bReceivedTouchMove) {
					continue;
				}
				if (i.bScrolled) {
					continue;
				}
				const s = i.elemTouchStart;
				const o = m.current.ownerDocument.elementFromPoint(
					n.clientX,
					n.clientY,
				);
				const l = (0, BA)(
					IsHTMLElement(s) ? s : undefined,
					IsHTMLElement(o) ? o : undefined,
				);
				if (m.current.contains(l)) {
					l?.click?.();
					t = true;
				}
			}
			l(r.size > 0);
			if (C) {
				C(e);
			}
		},
		[C, r],
	);
	n.useEffect(() => {
		const e = c(m.current?.ownerDocument?.defaultView ?? undefined);
		return () => {
			for (const t of r.keys()) {
				e?.delete(t);
			}
		};
	}, [r]);
	const f = n.useCallback(
		(e) => {
			for (const e of r.values()) {
				e.bScrolled = true;
			}
		},
		[r],
	);
	const b = (0, s.Pt)(i ? f : undefined);
	const y = (0, s.Ue)(m, b);
	if (t && e.onClick) {
		e.onClick = d;
		e.onTouchStart = p;
		e.onTouchMove = h;
		e.onTouchEnd = _;
		return y;
	} else {
		return undefined;
	}
}
export function l(e) {
	const t = (0, o.rP)({
		bSuppressAssert: true,
	}).IN_VR;
	const r = e.onClick;
	const a = n.useCallback(
		(e) => {
			i.eZ.PlayNavSound(i.PN.BasicNav);
			if (r) {
				r(e);
			}
		},
		[r],
	);
	if (t && r) {
		e.onClick = a;
	}
}
