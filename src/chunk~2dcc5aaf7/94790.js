var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./78325.js");
var a = require(/*webcrack:missing*/ "./91435.js");
var s = require(/*webcrack:missing*/ "./3673.js");
var o = require(/*webcrack:missing*/ "./98995.js");
export function E(e) {
	const { active: t, children: r } = e;
	const l = (0, a.yk)() || (0, s.tx)(window);
	const c = (0, a.oJ)();
	const [m, u] = n.useState(null);
	const [d, A] = n.useState(false);
	const p = n.useRef();
	n.useEffect(() => {
		if (t) {
			const e = l.ShowPortalModal();
			const t = e.OnElementReadyCallbacks.Register(u);
			const r = e.OnModalActiveCallbacks.Register(A);
			p.current = e.key;
			return () => {
				u(null);
				A(false);
				e.Close();
				t.Unregister();
				r.Unregister();
			};
		}
	}, [l, t]);
	if (!m || !t) {
		return null;
	}
	let g = n.createElement(o.C$, null, r);
	if (c) {
		g = n.createElement(
			c,
			{
				active: d,
				modalKey: p.current,
			},
			g,
		);
	}
	return i.createPortal(g, m);
}
