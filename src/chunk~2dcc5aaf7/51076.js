var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./49519.js");
export function OU(e) {
	const t = (0, i.W6)();
	const [r, a] = n.useState(() => !!(0, i.B6)(t?.location.pathname, e));
	n.useEffect(() => t?.listen((t) => a(!!(0, i.B6)(t.pathname, e))), [t, e]);
	return r;
}
export function Ll(e) {
	const t = (0, i.W6)();
	const [r, a] = n.useState(() => e(t.location.pathname));
	n.useEffect(() => t.listen((t) => a(e(t.pathname))), [t, e]);
	return r;
}
export function SP(e, t) {
	const r = `${e}_HistoryValue`;
	const a = (0, i.W6)();
	const s = (0, i.zy)();
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
	const s = (0, i.W6)();
	const o = (0, i.zy)();
	const l = (o.state && o.state[a]) ?? r;
	const c = n.useRef(false);
	const m = n.useRef();
	const u = n.useRef();
	const d = n.useCallback(
		(e) => {
			if (c.current && ((m.current = e), !u.current)) {
				const e = s.location.pathname;
				u.current = window.setTimeout(() => {
					if (
						s.location.pathname == e &&
						(!s.location.state || s.location.state[a] != m.current)
					) {
						s.replace(s.location.pathname, {
							...(s.location.state || {}),
							[a]: m.current,
						});
					}
					u.current = undefined;
				}, t);
			}
		},
		[s, a, t],
	);
	n.useEffect(() => {
		c.current = true;
	}, []);
	return [l, d];
}
