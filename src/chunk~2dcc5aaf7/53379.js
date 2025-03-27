import { BA, IsHTMLElement } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i from "./10975.js";
import s, { Pt, Ue } from "./52451.js";
import o, { rP } from "./72476.js";
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
	const t = rP({
		bSuppressAssert: true,
	}).IN_VR;
	const r = n.useMemo(() => new Map(), []);
	const [i, setI] = n.useState(false);
	const MRef = n.useRef(undefined);

	const { onClick, onTouchStart, onTouchMove, onTouchEnd } = e;

	const d = n.useCallback(
		(e) => {
			if (onClick) {
				onClick(e);
			}
		},
		[onClick],
	);
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
			setI(r.size > 0);
			if (onTouchStart) {
				onTouchStart(e);
			}
		},
		[onTouchStart, r],
	);
	const h = n.useCallback(
		(e) => {
			for (const t of Array.from(e.changedTouches)) {
				if (r.has(t.identifier)) {
					r.get(t.identifier).bReceivedTouchMove = true;
				}
			}
			if (onTouchMove) {
				onTouchMove(e);
			}
		},
		[onTouchMove, r],
	);
	const _ = n.useCallback(
		(e) => {
			let t = false;
			for (const n of Array.from(e.changedTouches)) {
				if (!r.has(n.identifier)) {
					continue;
				}
				if (t || !MRef.current) {
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
				const i_elemTouchStart = i.elemTouchStart;
				const o = MRef.current.ownerDocument.elementFromPoint(
					n.clientX,
					n.clientY,
				);
				const l = (0, BA)(
					IsHTMLElement(i_elemTouchStart) ? i_elemTouchStart : undefined,
					IsHTMLElement(o) ? o : undefined,
				);
				if (MRef.current.contains(l)) {
					l?.click?.();
					t = true;
				}
			}
			setI(r.size > 0);
			if (onTouchEnd) {
				onTouchEnd(e);
			}
		},
		[onTouchEnd, r],
	);
	n.useEffect(() => {
		const e = c(MRef.current?.ownerDocument?.defaultView ?? undefined);
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
	const b = Pt(i ? f : undefined);
	const y = Ue(MRef, b);
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
	const t = rP({
		bSuppressAssert: true,
	}).IN_VR;
	const e_onClick = e.onClick;
	const a = n.useCallback(
		(e) => {
			i.eZ.PlayNavSound(i.PN.BasicNav);
			if (e_onClick) {
				e_onClick(e);
			}
		},
		[e_onClick],
	);
	if (t && e_onClick) {
		e.onClick = a;
	}
}
