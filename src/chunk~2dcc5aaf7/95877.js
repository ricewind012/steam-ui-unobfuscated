import n from "./12176.js";
import i from "./46948.js";
import a, { I } from "./61416.js";
import s, { TR, rX } from "./46382.js";
import o from "./75144.js";
import l from "./72476.js";
export function Fv(e = l.TS.LANGUAGE) {
	const t = TR();
	const r = rX();
	return I(m(t, r, e));
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
			c.tags.forEach(({ tagid, name }) =>
				m.set(tagid, {
					tagid: tagid,
					name: name,
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
	const { data } = Fv(t);
	if (e) {
		return data?.get(e);
	} else {
		return undefined;
	}
}
export function LG(e, t = l.TS.LANGUAGE) {
	const { data } = Fv(t);
	return e?.map((e) => data?.get(e)).filter(Boolean);
}
