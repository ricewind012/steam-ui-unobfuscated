var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./45328.js");
var a = require("./83591.js");
var s = require("./9536.js");
var o = require(/*webcrack:missing*/ "./61416.js");
var l = require(/*webcrack:missing*/ "./12176.js");
var c = require(/*webcrack:missing*/ "./46382.js");
var m = require("./92031.js");
var u = require(/*webcrack:missing*/ "./58663.js");
var d = require(/*webcrack:missing*/ "./48307.js");
const A = u.Message;
class p extends A {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.packageid) {
			d.Sg(p.M());
		}
		A.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				packageid: {
					n: 1,
					br: d.qM.readInt32,
					bw: d.gp.writeInt32,
				},
				country_code: {
					n: 2,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= d.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(p.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(p.MBF(), e, t);
	}
	serializeBinary() {
		var e = new u.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(p.M(), e, t);
	}
	serializeBase64String() {
		var e = new u.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPhysicalGoods_CheckInventoryAvailableByPackage_Request";
	}
}
class g extends A {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.inventory_available) {
			d.Sg(g.M());
		}
		A.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				inventory_available: {
					n: 1,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				high_pending_orders: {
					n: 2,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= d.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		var e = new u.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(g.M(), e, t);
	}
	serializeBase64String() {
		var e = new u.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPhysicalGoods_CheckInventoryAvailableByPackage_Response";
	}
}
var _h;
(function (e) {
	e.CheckInventoryAvailableByPackage = function (e, t) {
		return e.SendMsg(
			"PhysicalGoods.CheckInventoryAvailableByPackage#1",
			(0, l.I8)(p, t),
			g,
			{
				bConstMethod: true,
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
})((_h ||= {}));
var C = require(/*webcrack:missing*/ "./43691.js");
const _ = {
	high_pending_orders: false,
	inventory_available: true,
};
function f(e) {
	const t = (0, c.rW)();
	const r = (0, o.I)({
		queryKey: [e?.GetID() || m.sc, e?.GetStoreItemType() || "invalid"],
		queryFn: () =>
			(async function (e, t) {
				if (!e || e.GetStoreItemType() !== 1 || e.GetAppType() !== 10) {
					return _;
				}
				const r = l.w.Init(p);
				r.Body().set_packageid(e.GetID());
				r.Body().set_country_code(C.iA.country_code);
				const n = await _h.CheckInventoryAvailableByPackage(t, r);
				if (n.GetEResult() !== 1) {
					console.error(
						"Received error from FetchPhysicalGoodsStock",
						n.GetEResult(),
					);
					throw new Error(
						`Error from FetchPhysicalGoodsStock: ${n.GetEResult()}`,
					);
				}
				return n.Body().toObject();
			})(e, t),
		enabled: Boolean(e?.GetID() && e.GetAppType() === 10),
	});
	if (r.isLoading) {
		return null;
	} else {
		return r.data;
	}
}
var b = require("./58839.js");
var y = require("./82594.js");
var S = require("./43397.js");
var w = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var v = require(/*webcrack:missing*/ "./72476.js");
var I = require(/*webcrack:missing*/ "./26853.js");
var E = require("./4014.js");
var M = E;
var T = require(/*webcrack:missing*/ "./92059.js");
export function h(e) {
	const { info: t, className: r } = e;
	const s = (0, T.n9)();
	const [o] = (0, y.G6)(t.id, (0, b.SW)(t.type), {});
	const l = f(o);
	(0, n.useEffect)(() => {
		a.Fm.Get().HintLoad();
	}, []);
	const c = (0, n.useCallback)(() => {
		(0, S.Id)(window, `steam://run/${o?.GetAppIDToRun()}`);
	}, [o]);
	if (!o || o.GetAppType() == 8) {
		return null;
	}
	const m = o.GetBestPurchaseOption();
	const u =
		o.BIsFree() ||
		o.GetBestPurchasePriceFormatted() == "0" ||
		o.GetBestPurchaseOption().discount_pct >= 100;
	if (o.GetStoreItemType() == 1) {
		if (o.GetAppType() == 10) {
			if (!l) {
				return n.createElement(I.t, {
					size: "small",
					position: "center",
				});
			}
			if (!l.inventory_available) {
				return n.createElement(
					"div",
					{
						className: (0, w.A)(M.ActionOutOfStock, r),
					},
					n.createElement(
						"span",
						null,
						" ",
						(0, Localize)("#Sale_ReserveExhausted"),
					),
				);
			}
		} else if (u && o.GetIncludedAppIDs().length > 1) {
			return null;
		}
	}
	if (o.GetStoreItemType() == 0) {
		if (o.BIsComingSoon() && !m?.packageid) {
			return null;
		}
		const e = a.Fm.Get().BOwnsApp(o.GetAppID());
		if (e && o.GetAppType() === 10) {
			return null;
		}
		if (!e && m?.is_free_to_keep) {
			if (v.TS.IN_CLIENT || (0, v.yK)() != "store") {
				const e = (0, i.wJ)(
					`${v.TS.IN_CLIENT ? "steam://openurl/" : ""}${o.GetStorePageURL()}`,
					s,
				);
				return n.createElement(
					"div",
					{
						onClick: (t) => (0, S.Id)(t, e),
						className: (0, w.A)(M.Action, r),
					},
					n.createElement(
						"span",
						null,
						(0, Localize)("#EventDisplay_CallToAction_VisitStore"),
					),
				);
			}
			{
				const e = (0, i.wJ)(
					`${v.TS.STORE_BASE_URL}freelicense/addfreelicense`,
					s,
				);
				return n.createElement(
					"form",
					{
						action: e,
						method: "POST",
					},
					n.createElement("input", {
						type: "hidden",
						name: "subid",
						value: m.packageid,
					}),
					n.createElement("input", {
						type: "hidden",
						name: "sessionid",
						value: v.TS.SESSIONID,
					}),
					n.createElement(
						"button",
						{
							className: (0, w.A)(M.Action, r),
							type: "submit",
						},
						(0, Localize)("#EventDisplay_CallToAction_AddToAccount"),
					),
				);
			}
		}
		if ((e || u) && !o.BIsComingSoon()) {
			let t = (0, Localize)("#EventDisplay_CallToAction_PlayNowForFree");
			if (e) {
				t = (0, Localize)("#EventDisplay_CallToAction_PlayNow");
			} else if (o.BIsFreeTemporary()) {
				t = (0, Localize)("#EventDisplay_CallToAction_AddToAccount");
			}
			return n.createElement(
				"div",
				{
					className: (0, w.A)(M.Action, r),
					onClick: c,
				},
				n.createElement("span", null, t),
			);
		}
		if (o.GetBestPurchasePriceFormatted() == "") {
			const e = (0, i.wJ)(o.GetStorePageURL(), s);
			return n.createElement(
				"a",
				{
					href: e,
					className: (0, w.A)(M.Action, r),
				},
				(0, Localize)("#EventDisplay_CallToAction_VisitStore"),
			);
		}
	}
	return n.createElement(k, {
		className: r,
		storeItem: o,
		info: t,
	});
}
function k(e) {
	const { className: t, storeItem: r, info: o } = e;
	const l = (0, T.n9)();
	const c = (0, s.v)();
	const m = (0, n.useCallback)(
		(e) => {
			let t;
			let n;
			if (r?.GetStoreItemType() == 2 || r?.GetBestPurchaseOption().bundleid) {
				t =
					r?.GetStoreItemType() == 2
						? o.id
						: r?.GetBestPurchaseOption().bundleid;
			} else {
				n = r?.GetBestPurchaseOption().packageid;
			}
			if (
				window.g_bUseNewCartAPI !== undefined &&
				window.g_bUseNewCartAPI &&
				typeof window.AddItemToCart == "function"
			) {
				window.AddItemToCart(n, t, (0, T.pn)(l));
				return true;
			}
			{
				const r = `${v.TS.STORE_BASE_URL}cart/addtocart`;
				const s = `${v.TS.STORE_BASE_URL}cart`;
				const o = (0, i.L3)(l);
				a.Fm.Get().AddToCart(e, n, r, s, o, t, c);
			}
			return true;
		},
		[r, l, o.id, c],
	);
	return n.createElement(
		"div",
		{
			className: (0, w.A)(M.Action, t),
			onClick: m,
		},
		n.createElement("span", null, (0, Localize)("#Store_AddToCart")),
	);
}
