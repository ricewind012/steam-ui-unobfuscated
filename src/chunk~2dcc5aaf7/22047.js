import n from "./63696.js";
import { W6, zy, B6 } from "./49519.js";
import a from "./64608.js";
import s from "./97936.js";
import o from "./94361.js";
export function q(e) {
	const { pages, fnSetNavigateToPage, disableRouteReporting, ...c } = e;
	const m = W6();
	const u = zy();
	const d = pages.map((e) => {
		if (typeof e == "string") {
			return e;
		}
		const { route, link, ...n } = e;
		return {
			...n,
			identifier: link || route,
		};
	});
	const A = pages.filter((e) => e != a.I0 && e?.visible !== false);
	const p = A.find(({ route }) => B6(u.pathname, route)) || A[0];
	const g = n.useCallback(
		(e) => {
			if (!B6(e, p.route)) {
				if (!disableRouteReporting) {
					const r = pages.find(
						(t) => typeof t != "string" && (e === t.link || e === t.route),
					);
					if (r && typeof r != "string") {
						o.y.ReportRouteMatch(r.route);
					}
				}
				m.replace(e);
			}
		},
		[p.route, disableRouteReporting, m, pages],
	);
	n.useEffect(() => {
		if (fnSetNavigateToPage) {
			fnSetNavigateToPage(g);
		}
	}, [fnSetNavigateToPage, g]);
	return <s.Bv onPageRequested={g} page={p.link || p.route} pages={d} {...c} />;
}
