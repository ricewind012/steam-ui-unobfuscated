var n = require(/*webcrack:missing*/ "./11682.js");
var i = n;
var a = require(/*webcrack:missing*/ "./61416.js");
var s = require(/*webcrack:missing*/ "./12176.js");
var o = require("./10812.js");
var l = require(/*webcrack:missing*/ "./46382.js");
var c = require(/*webcrack:missing*/ "./43691.js");
var m = require(/*webcrack:missing*/ "./44846.js");
let u;
const d = 86400000;
function A(e) {
	return `appinfo_${e}_${c.TS.LANGUAGE}`;
}
function p(e) {
	return Boolean(e && Date.now() - e.timeCached < d);
}
export function X(e) {
	const t = (0, l.KV)();
	const r = (0, l.rX)();
	return (0, a.I)({
		queryKey: ["appinfo", e],
		queryFn: async () =>
			(function (e, t) {
				u ||= new i(
					async (r) => {
						const n = new Map();
						(await Promise.all(r.map((e) => t.GetObject(A(e)))))
							.filter(p)
							.forEach(({ value: e }) => n.set(e.appid, e));
						const i = r.slice().filter((e) => !n.has(e));
						if (i.length) {
							const r = s.w.Init(o._z);
							r.Body().set_language((0, m.sf)(c.TS.LANGUAGE));
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
