import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, {
	useState,
	useRef,
	useMemo,
	useCallback,
	useEffect,
} from "./63696.js";
import i, { A } from "./90765.js";
export function m(e, t, r) {
	const [i, setI] = useState(null);
	const ORef = useRef(0);
	const LRef = useRef(null);
	const CRef = useRef(null);
	const MRef = useRef(null);
	const u = useMemo(() => t.map((e) => e.id), [t]);
	const d = useCallback(() => {
		window.cancelAnimationFrame(LRef.current);
		LRef.current = null;
		CRef.current.removeEventListener("mousemove", MRef.current);
	}, []);
	useEffect(() => {
		let t = {};
		let r = 0;
		e.forEach((e) => {
			const n = u.findIndex((t) => t === e.id);
			if (n >= 0) {
				r += Number(e.width);
			}
			if (!e.disableResizing) {
				t[e.id] = {
					minFlexRatio: Number(e.minWidth),
					maxFlexRatio: Number(e.maxWidth),
					flexRatio: Number(e.width),
					dependentColumnKeys: u.slice(n + 1),
				};
			}
		});
		ORef.current = r;
		setI(t);
	}, [u, e]);
	useEffect(
		() => () => {
			if (LRef.current) {
				window.cancelAnimationFrame(LRef.current);
			}
			if (CRef.current) {
				CRef.current.removeEventListener("mousemove", MRef.current);
				CRef.current.removeEventListener("mouseup", d);
			}
		},
		[d],
	);
	const A = (e, t) => {
		LRef.current ||= CRef.current.requestAnimationFrame(() =>
			((e, t) => {
				window.cancelAnimationFrame(LRef.current);
				LRef.current = null;
				const { flexRatio, minFlexRatio, maxFlexRatio, dependentColumnKeys } =
					i[t];
				const u = r.current.getBoundingClientRect().width / ORef.current;
				let d = e.movementX / u;
				const A = flexRatio + d;
				let p = A;
				if (A < minFlexRatio) {
					p = minFlexRatio;
					d = minFlexRatio - flexRatio;
				} else if (A > maxFlexRatio) {
					p = maxFlexRatio;
					d = maxFlexRatio - flexRatio;
				}
				const g = {
					...i,
				};
				const h = d / dependentColumnKeys.length;
				dependentColumnKeys.forEach((e) => {
					const t = g[e].flexRatio - h;
					g[e].flexRatio = t;
				});
				g[t].flexRatio = p;
				setI(g);
			})(e, t),
		);
	};
	return {
		columnWidths: i,
		OnMouseDown: (e, t) => {
			CRef.current = GetOwningWindowForEvent(e);
			MRef.current = (e) => {
				A(e, t);
			};
			CRef.current.addEventListener("mousemove", MRef.current);
			CRef.current.addEventListener("mouseup", d, {
				once: true,
			});
		},
	};
}
export function j(e, t, r, n) {
	e.className = A(e.className, r.className, r.isSorted && t);
	e.style.minWidth = r.minWidth;
	e.style.maxWidth = r.maxWidth;
	if (r.canResize && n) {
		e.style.width = undefined;
		delete e.style.flex;
		e.style.flexGrow = n[r.id].flexRatio;
		e.style.flexBasis = n[r.id].flexRatio;
	} else {
		e.style.width = r.width;
		delete e.style.flex;
		delete e.style.flexGrow;
		delete e.style.flexShrink;
		delete e.style.flexBasis;
	}
}
