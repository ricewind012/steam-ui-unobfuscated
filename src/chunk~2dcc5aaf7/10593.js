import n from "./63696.js";
import i, { I } from "./61416.js";
import a from "./12176.js";
import s from "./64880.js";
import { rV, Bn } from "./85606.js";
import l from "./5859.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import { KV } from "./46382.js";
const UContext = n.createContext({});
const d = () => n.useContext(UContext);
export function E2(e) {
	let { defaultOptions, children } = e;
	let i = n.useMemo(
		() => ({
			defaultOptions: defaultOptions || {},
		}),
		[defaultOptions],
	);
	return <UContext.Provider value={i}>{children}</UContext.Provider>;
}
const p = "StoreQueryStore";
export function PG(e, t, r, l) {
	let u = d();
	const A = KV();
	if (!u) {
		AssertMsg(false, "useStoreQuery called outside of a <StoreQueryRoot>");
	}
	let u_defaultOptions = u.defaultOptions;
	const C = n.useMemo(() => {
		let e = [];
		if (l?.content_descriptors_excluded) {
			e = l.content_descriptors_excluded;
		} else if (u_defaultOptions?.content_descriptors_excluded) {
			e = u_defaultOptions.content_descriptors_excluded;
		}
		return {
			...t,
			filters: {
				content_descriptors_excluded: e,
				...t.filters,
			},
		};
	}, [t, l, u_defaultOptions]);
	let _;
	if (l?.override_country_code !== undefined) {
		_ = l.override_country_code;
	} else if (u_defaultOptions?.override_country_code !== undefined) {
		_ = u_defaultOptions.override_country_code;
	}
	let f = {
		staleTime: 3600000,
	};
	if (l?.reactQuery) {
		f = {
			...f,
			...l.reactQuery,
		};
	}
	const b = [p, C, r, l];
	return I({
		queryKey: b,
		queryFn: () =>
			(async (e, t, r, n, i) => {
				const l = a.w.Init(s.iU);
				rV(l);
				if (n) {
					Bn(l, n);
				}
				if (i) {
					l.Body().set_override_country_code(i);
				}
				l.Body().set_query(s.nu.fromObject(r));
				l.Body().set_query_name(t);
				const c = await s.Fs.Query(e, l);
				if (c.GetEResult() != 1) {
					throw `Error executing StoreQuery "${t}", EResult: ${c.GetEResult()}`;
				}
				return new h(c, n);
			})(A, e, C, r, _),
		...f,
	});
}
class h {
	m_Items;
	m_rgItemIDs;
	m_metadata;
	constructor(e, t) {
		this.ReadResults(e, t);
	}
	GetItems() {
		return this.m_Items;
	}
	GetItemIDs() {
		return this.m_rgItemIDs;
	}
	GetMetadata() {
		return this.m_metadata;
	}
	ReadResults(e, t) {
		if (!this.m_Items) {
			AssertMsg(
				e.Body().metadata().start() == 0,
				"Empty item list - expected to start at 0",
			);
			this.m_Items = [];
		}
		const r = e.Body().ids() || [];
		this.m_rgItemIDs = r.map((e) => e.toObject());
		if (e.Body().store_items()) {
			for (const r of e.Body().store_items()) {
				this.m_Items.push(l.A.Get().ReadItem(r, t));
			}
		}
		this.m_metadata = e.Body().metadata().toObject();
	}
}
