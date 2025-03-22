var n = require(/*webcrack:missing*/ "./12176.js");
var i = require("./46948.js");
var a = require(/*webcrack:missing*/ "./61416.js");
var s = require(/*webcrack:missing*/ "./46382.js");
var o = require(/*webcrack:missing*/ "./75144.js");
var l = require(/*webcrack:missing*/ "./72476.js");
export function Fv(e = l.TS.LANGUAGE) {
	const t = (0, s.TR)();
	const r = (0, s.rX)();
	return (0, a.I)(m(t, r, e));
}
function m(e, t, r) {
	return {
		queryKey: ["LocalizedTagNames", r],
		queryFn: async () => {
			const a = `LocalizedTagNames_${r}`;
			const s = await t.GetObject(a);
			const o = n.w.Init(i.Gr);
			o.Body().set_language(r);
			if (s?.version_hash) {
				o.Body().set_have_version_hash(s.version_hash);
			}
			const l = await i.nd.GetTagList(e.GetAnonymousServiceTransport(), o);
			let c;
			if (l.GetEResult() == 1) {
				c = l.Body().toObject();
				t.StoreObject(a, c);
			} else if (l.GetEResult() == 29) {
				c = s;
			} else {
				if (!s) {
					throw l.GetErrorMessage();
				}
				console.warn(
					"Couldn't load updated tag localization, will continue with what we have from storage.",
				);
				c = s;
			}
			const m = new Map();
			c.tags.forEach(({ tagid: e, name: t }) =>
				m.set(e, {
					tagid: e,
					name: t,
				}),
			);
			return m;
		},
		staleTime: 3600000,
	};
}
export async function YI(e, t, r = l.TS.LANGUAGE) {
	return o.L.fetchQuery(m(e, t, r));
}
export function MB(e, t = l.TS.LANGUAGE) {
	const { data: r } = Fv(t);
	if (e) {
		return r?.get(e);
	} else {
		return undefined;
	}
}
export function LG(e, t = l.TS.LANGUAGE) {
	const { data: r } = Fv(t);
	return e?.map((e) => r?.get(e)).filter(Boolean);
}
