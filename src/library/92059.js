var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./49810.js");
var s = require("./14628.js");
const o = r.createContext({});
r.createContext(undefined);
export function nn(e) {
	const { children: t, ...n } = e;
	const i = n9();
	const s = r.useMemo(
		() => ({
			...i,
			...n,
		}),
		[i, n.domain, n.controller, n.method, n.submethod, n.feature, n.depth],
	);
	return r.createElement(
		o.Provider,
		{
			value: s,
		},
		t,
	);
}
export function n9() {
	return r.useContext(o);
}
export function pn(e, t, n) {
	return {
		...e,
		feature: t || e.feature,
		depth: n || e.depth,
		countrycode: s.TS.COUNTRY,
		is_client: s.TS.IN_CLIENT,
	};
}
export function aL(e, t, n) {
	const i = n9();
	return r.useMemo(() => e && bV(i, e, t, n), [e, i, t, n]);
}
export function ru(e, t) {
	const n = n9();
	return r.useMemo(
		() =>
			i.A.GetLinkParam(
				{
					...n,
					feature: e || n.feature,
				},
				t,
			),
		[n, e, t],
	);
}
export function bV(e, t, n, r) {
	const s = i.A.GetLinkParam(
		{
			...e,
			feature: n || e.feature,
		},
		r,
	);
	return i.A.AddNavParamToURL(t, s);
}
export function Fh(e) {
	const { href: t, ...n } = e;
	const i = aL(t);
	return r.createElement("a", {
		...n,
		href: i,
	});
}
