var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./49519.js");
var a = require("./64608.js");
var s = require("./97936.js");
var o = require("./94361.js");
export function q(e) {
	const {
		pages: t,
		fnSetNavigateToPage: r,
		disableRouteReporting: l,
		...c
	} = e;
	const m = (0, i.W6)();
	const u = (0, i.zy)();
	const d = t.map((e) => {
		if (typeof e == "string") {
			return e;
		}
		const { route: t, link: r, ...n } = e;
		return {
			...n,
			identifier: r || t,
		};
	});
	const A = t.filter((e) => e != a.I0 && e?.visible !== false);
	const p = A.find(({ route: e }) => (0, i.B6)(u.pathname, e)) || A[0];
	const g = n.useCallback(
		(e) => {
			if (!(0, i.B6)(e, p.route)) {
				if (!l) {
					const r = t.find(
						(t) => typeof t != "string" && (e === t.link || e === t.route),
					);
					if (r && typeof r != "string") {
						o.y.ReportRouteMatch(r.route);
					}
				}
				m.replace(e);
			}
		},
		[p.route, l, m, t],
	);
	n.useEffect(() => {
		if (r) {
			r(g);
		}
	}, [r, g]);
	return n.createElement(s.Bv, {
		onPageRequested: g,
		page: p.link || p.route,
		pages: d,
		...c,
	});
}
