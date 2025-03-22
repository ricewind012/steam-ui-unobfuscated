var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./61416.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require("./64880.js");
var o = require("./85606.js");
var l = require("./5859.js");
var c = require(/*webcrack:missing*/ "./49455.js");
var m = require(/*webcrack:missing*/ "./46382.js");
const u = n.createContext({});
const d = () => n.useContext(u);
export function E2(e) {
	let { defaultOptions: t, children: r } = e;
	let i = n.useMemo(
		() => ({
			defaultOptions: t || {},
		}),
		[t],
	);
	return n.createElement(
		u.Provider,
		{
			value: i,
		},
		r,
	);
}
const p = "StoreQueryStore";
export function PG(e, t, r, l) {
	let u = d();
	const A = (0, m.KV)();
	if (!u) {
		(0, c.w)(false, "useStoreQuery called outside of a <StoreQueryRoot>");
	}
	let g = u.defaultOptions;
	const C = n.useMemo(() => {
		let e = [];
		if (l?.content_descriptors_excluded) {
			e = l.content_descriptors_excluded;
		} else if (g?.content_descriptors_excluded) {
			e = g.content_descriptors_excluded;
		}
		return {
			...t,
			filters: {
				content_descriptors_excluded: e,
				...t.filters,
			},
		};
	}, [t, l, g]);
	let _;
	if (l?.override_country_code !== undefined) {
		_ = l.override_country_code;
	} else if (g?.override_country_code !== undefined) {
		_ = g.override_country_code;
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
	return (0, i.I)({
		queryKey: b,
		queryFn: () =>
			(async function (e, t, r, n, i) {
				const l = a.w.Init(s.iU);
				(0, o.rV)(l);
				if (n) {
					(0, o.Bn)(l, n);
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
			(0, c.w)(
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
