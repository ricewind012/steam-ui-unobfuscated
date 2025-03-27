import n from "./11682.js";
import a, { I } from "./61416.js";
import s from "./12176.js";
import o from "./10812.js";
import { KV, rX } from "./46382.js";
import c from "./43691.js";
import { sf } from "./44846.js";
const i = n;
let u;
const d = 86400000;
function A(e) {
	return `appinfo_${e}_${c.TS.LANGUAGE}`;
}
function p(e) {
	return Boolean(e && Date.now() - e.timeCached < d);
}
export function X(e) {
	const t = KV();
	const r = rX();
	return I({
		queryKey: ["appinfo", e],
		queryFn: async () =>
			((e, t) => {
				u ||= new i(
					async (r) => {
						const n = new Map();
						(await Promise.all(r.map((e) => t.GetObject(A(e)))))
							.filter(p)
							.forEach(({ value }) => n.set(value.appid, value));
						const i = r.slice().filter((e) => !n.has(e));
						if (i.length) {
							const r = s.w.Init(o._z);
							r.Body().set_language(sf(c.TS.LANGUAGE));
							r.Body().set_appids(i);
							const a = await o.BE.GetApps(e, r);
							if (a.GetEResult() != 1) {
								throw a.GetErrorMessage();
							}
							a.Body()
								.toObject()
								.apps.forEach((e) => {
									t.StoreObject(A(e.appid), {
										timeCached: Date.now(),
										value: e,
									});
									n.set(e.appid, e);
								});
						}
						return r.map((e) => n.get(e));
					},
					{
						cache: false,
					},
				);
				return u;
			})(t, r).load(e),
		staleTime: d,
		enabled: !!e,
	}).data;
}
