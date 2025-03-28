import { AssertMsg } from "../../actual_src/utils/assert.js";
import n, { KV } from "./46382.js";
import i, { jE } from "./3715.js";
import a from "./63696.js";
import l from "./12176.js";
import c from "./65850.js";
import m from "./80222.js";
import u from "./11682.js";
import A, { zj, HJ, RH } from "./41240.js";
import { ESteamRealm } from "../../actual_src/clienttypes/realm.js";
import "./64880.js";
import C, { vB } from "./90076.js";
function s(e, t) {
	return e.split(t);
}
const d = u;
function g(e, t) {
	t.Body().set_context(
		((e) => {
			const t = new m.TS();
			if (!e.bUsePartnerAPI) {
				t.set_country_code(e.country);
			}
			t.set_language(e.language);
			if (e.realm != ESteamRealm.k_ESteamRealmUnknown) {
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
				const { include_included_items, ...t } = d;
				d.included_item_data_request = t;
			}
			const p = l.w.Init(m.eE);
			let h;
			g(t, p);
			((e, t) => {
				e.Body().set_data_request(m.gn.fromObject(t));
			})(p, d);
			i.forEach((e) => {
				const t = zj(e);
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
					C.set(HJ(e.item_type(), e.id()), e);
				});
			if (n) {
				((e, t, r, n) => {
					e.forEach((e, i) => {
						const a = r.get(i);
						AssertMsg(a, `Missing request data for ${i}`);
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
						...RH(t),
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
const _Context = a.createContext({});
export function eG() {
	return a.useContext(_Context).dataLoader;
}
export function V3(e) {
	const {
		context,
		msDelayBatch,
		serviceTransportOverride,
		legacyCacheStoreItemData,
		children,
	} = e;
	const c = KV();
	const m = jE();
	const u = a.useCallback(
		(e, t) => {
			vB(m, e.toObject(), t);
			if (legacyCacheStoreItemData) {
				legacyCacheStoreItemData(e, t);
			}
		},
		[m, legacyCacheStoreItemData],
	);
	const d = serviceTransportOverride || c;
	const { country, language, realm, bUsePartnerAPI } = context;
	const b = a.useMemo(
		() => ({
			country: country,
			language: language,
			realm: realm,
			bUsePartnerAPI: bUsePartnerAPI,
		}),
		[country, language, realm, bUsePartnerAPI],
	);
	const y = a.useMemo(() => {
		const e = msDelayBatch
			? ((e) => {
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
				})(msDelayBatch)
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
	}, [d, u, b, msDelayBatch]);
	const S = a.useMemo(
		() => ({
			dataLoader: y,
			storeBrowseContext: b,
			cacheStoreItemData: u,
		}),
		[y, b, u],
	);
	return <_Context.Provider value={S}>{children}</_Context.Provider>;
}
