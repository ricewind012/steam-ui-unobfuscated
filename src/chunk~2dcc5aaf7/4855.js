var n = require(/*webcrack:missing*/ "./46382.js");
var i = require(/*webcrack:missing*/ "./3715.js");
var a = require(/*webcrack:missing*/ "./63696.js");
function s(e, t) {
	return e.split(t);
}
var o = require(/*webcrack:missing*/ "./85688.js");
var l = require(/*webcrack:missing*/ "./12176.js");
var c = require("./65850.js");
var m = require("./80222.js");
var u = require(/*webcrack:missing*/ "./11682.js");
var d = u;
var A = require("./41240.js");
var p = require(/*webcrack:missing*/ "./28987.js");
require("./64880.js");
function g(e, t) {
	t.Body().set_context(
		(function (e) {
			const t = new m.TS();
			if (!e.bUsePartnerAPI) {
				t.set_country_code(e.country);
			}
			t.set_language(e.language);
			if (e.realm != p.TU.k_ESteamRealmUnknown) {
				t.set_steam_realm(e.realm);
			}
			return t;
		})(e),
	);
}
function h(e, t, r, n) {
	return new d(
		async (r) => {
			const i = new Set();
			const a = new Map();
			const u = new Set();
			u.add("default_info");
			const d = {};
			r.forEach((e) => {
				const [t, r = "default_info"] = s(e, "|");
				i.add(t);
				if (!u.has(r)) {
					if (r == "top_tags") {
						d.include_tag_count = 10;
					} else if (r != "default_info") {
						d[r] = true;
					}
					u.add(r);
				}
				let n = a.get(t);
				if (!n) {
					n = new Set();
					a.set(t, n);
				}
				n.add(r);
			});
			if (d.include_included_items) {
				const { include_included_items: e, ...t } = d;
				d.included_item_data_request = t;
			}
			const p = l.w.Init(m.eE);
			let h;
			g(t, p);
			(function (e, t) {
				e.Body().set_data_request(m.gn.fromObject(t));
			})(p, d);
			i.forEach((e) => {
				const t = (0, A.zj)(e);
				if (t) {
					p.Body().add_ids(m.O4.fromObject(t));
				}
			});
			if (t.bUsePartnerAPI) {
				const t = l.w.Init(c.St);
				t.Body().set_request(p.Body());
				h = await c.BT.GetItems(e, t);
			} else {
				h = await m.$4.GetItems(e, p);
			}
			const C = new Map();
			h.Body()
				.store_items()
				.forEach((e) => {
					C.set((0, A.HJ)(e.item_type(), e.id()), e);
				});
			if (n) {
				(function (e, t, r, n) {
					e.forEach((e, i) => {
						const a = r.get(i);
						(0, o.w)(a, `Missing request data for ${i}`);
						if (!a) {
							return;
						}
						let s = false;
						const l = {};
						t.forEach((e) => {
							if (!a.has(e)) {
								s = true;
								if (e == "top_tags") {
									l.include_tag_count = 10;
								} else if (e && e != "default_info") {
									l[e] = true;
								}
							}
						});
						if (s) {
							n(e, l);
						}
					});
				})(C, u, a, n);
			}
			return r.map((e) => {
				const [t] = s(e, "|");
				const r = C.get(t);
				if (r) {
					return r.toObject();
				} else {
					return {
						...(0, A.RH)(t),
						success: 2,
					};
				}
			});
		},
		{
			maxBatchSize: 500,
			cache: false,
			...r,
		},
	);
}
var C = require("./90076.js");
const _ = a.createContext({});
export function eG() {
	return a.useContext(_).dataLoader;
}
export function V3(e) {
	const {
		context: t,
		msDelayBatch: r,
		serviceTransportOverride: s,
		legacyCacheStoreItemData: o,
		children: l,
	} = e;
	const c = (0, n.KV)();
	const m = (0, i.jE)();
	const u = a.useCallback(
		(e, t) => {
			(0, C.vB)(m, e.toObject(), t);
			if (o) {
				o(e, t);
			}
		},
		[m, o],
	);
	const d = s || c;
	const { country: A, language: p, realm: g, bUsePartnerAPI: f } = t;
	const b = a.useMemo(
		() => ({
			country: A,
			language: p,
			realm: g,
			bUsePartnerAPI: f,
		}),
		[A, p, g, f],
	);
	const y = a.useMemo(() => {
		const e = r
			? (function (e) {
					let t = 0;
					return (r) => {
						let n;
						const i = performance.now() - t;
						if (i < e) {
							n = e - i;
						}
						setTimeout(() => {
							t = performance.now();
							r();
						}, n);
					};
				})(r)
			: undefined;
		return h(
			d,
			b,
			{
				cache: false,
				batchScheduleFn: e,
			},
			u,
		);
	}, [d, u, b, r]);
	const S = a.useMemo(
		() => ({
			dataLoader: y,
			storeBrowseContext: b,
			cacheStoreItemData: u,
		}),
		[y, b, u],
	);
	return a.createElement(
		_.Provider,
		{
			value: S,
		},
		l,
	);
}
