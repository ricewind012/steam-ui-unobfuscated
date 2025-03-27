import n from "./63696.js";
import { W6, B6, zy } from "./49519.js";
export function OU(e) {
	const t = W6();
	const [r, setR] = n.useState(() => !!B6(t?.location.pathname, e));
	n.useEffect(() => t?.listen((t) => setR(!!B6(t.pathname, e))), [t, e]);
	return r;
}
export function Ll(e) {
	const t = W6();
	const [r, setR] = n.useState(() => e(t.location.pathname));
	n.useEffect(() => t.listen((t) => setR(e(t.pathname))), [t, e]);
	return r;
}
export function SP(e, t) {
	const r = `${e}_HistoryValue`;
	const a = W6();
	const s = zy();
	const o = (s.state && s.state[r]) ?? t;
	const l = n.useCallback(
		(e) => {
			a.replace(a.location.pathname, {
				...a.location.state,
				[r]: e,
			});
		},
		[a, r],
	);
	return [o, l];
}
export function Xz(e, t, r) {
	const a = `${e}_HistoryValue`;
	const s = W6();
	const o = zy();
	const l = (o.state && o.state[a]) ?? r;
	const CRef = n.useRef(false);
	const MRef = n.useRef();
	const URef = n.useRef();
	const d = n.useCallback(
		(e) => {
			if (CRef.current && ((MRef.current = e), !URef.current)) {
				const e = s.location.pathname;
				URef.current = window.setTimeout(() => {
					if (
						s.location.pathname == e &&
						(!s.location.state || s.location.state[a] != MRef.current)
					) {
						s.replace(s.location.pathname, {
							...(s.location.state || {}),
							[a]: MRef.current,
						});
					}
					URef.current = undefined;
				}, t);
			}
		},
		[s, a, t],
	);
	n.useEffect(() => {
		CRef.current = true;
	}, []);
	return [l, d];
}
