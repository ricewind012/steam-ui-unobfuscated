import { Localize } from "../../actual_src/utils/localization.js";
import n, { useEffect, useCallback } from "./63696.js";
import { wJ, L3 } from "./45328.js";
import a from "./83591.js";
import s, { v as v_1 } from "./9536.js";
import o, { I as I_1 } from "./61416.js";
import l, { I8 } from "./12176.js";
import c, { rW } from "./46382.js";
import m from "./92031.js";
import u from "./58663.js";
import d from "./48307.js";
import C from "./43691.js";
import { SW } from "./58839.js";
import { G6 } from "./82594.js";
import { Id } from "./43397.js";
import w, { u_Message as A_1 } from "./90765.js";
import v, { yK } from "./72476.js";
import I from "./26853.js";
import E from "./4014.js";
import { n9, pn } from "./92059.js";
const u_Message = u.Message;
class p extends u_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.packageid) {
			d.Sg(p.M());
		}
		u_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new u.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(p.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPhysicalGoods_CheckInventoryAvailableByPackage_Request";
	}
}
class g extends u_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.inventory_available) {
			d.Sg(g.M());
		}
		u_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new u.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(g.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPhysicalGoods_CheckInventoryAvailableByPackage_Response";
	}
}
let _h;
((e) => {
	e.CheckInventoryAvailableByPackage = (e, t) =>
		e.SendMsg("PhysicalGoods.CheckInventoryAvailableByPackage#1", I8(p, t), g, {
			bConstMethod: true,
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
})((_h ||= {}));
const _ = {
	high_pending_orders: false,
	inventory_available: true,
};
function f(e) {
	const t = rW();
	const r = I_1({
		queryKey: [e?.GetID() || m.sc, e?.GetStoreItemType() || "invalid"],
		queryFn: () =>
			(async (e, t) => {
				if (
					!e ||
					e.GetStoreItemType() !== 1 ||
					e.GetStoreItemType() !== 1 ||
					e.GetAppType() !== 10
				) {
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
var M = E;
export function h(e) {
	const { info: t, className: r } = e;
	const s = n9();
	const [o] = G6(t.id, SW(t.type), {});
	const l = f(o);
	useEffect(() => {
		a.Fm.Get().HintLoad();
	}, []);
	const c = useCallback(() => {
		Id(window, `steam://run/${o?.GetAppIDToRun()}`);
	}, [o]);
	if (!o || o.GetAppType() == 8) {
		return null;
	}
	const m = o.GetBestPurchaseOption();
	const u =
		o.BIsFree() ||
		o.GetBestPurchasePriceFormatted() == "0" ||
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
						className: A_1(M.ActionOutOfStock, r),
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
			if (v.TS.IN_CLIENT || yK() != "store") {
				const e = wJ(
					`${v.TS.IN_CLIENT ? "steam://openurl/" : ""}${o.GetStorePageURL()}`,
					s,
				);
				return n.createElement(
					"div",
					{
						onClick: (t) => Id(t, e),
						className: A_1(M.Action, r),
					},
					n.createElement(
						"span",
						null,
						(0, Localize)("#EventDisplay_CallToAction_VisitStore"),
					),
				);
			}
			{
				const e = wJ(`${v.TS.STORE_BASE_URL}freelicense/addfreelicense`, s);
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
							className: A_1(M.Action, r),
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
					className: A_1(M.Action, r),
					onClick: c,
				},
				n.createElement("span", null, t),
			);
		}
		if (o.GetBestPurchasePriceFormatted() == "") {
			const e = wJ(o.GetStorePageURL(), s);
			return n.createElement(
				"a",
				{
					href: e,
					className: A_1(M.Action, r),
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
	const l = n9();
	const c = v_1();
	const m = useCallback(
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
				window.AddItemToCart(n, t, pn(l));
				return true;
			}
			{
				const r = `${v.TS.STORE_BASE_URL}cart/addtocart`;
				const s = `${v.TS.STORE_BASE_URL}cart`;
				const o = L3(l);
				a.Fm.Get().AddToCart(e, n, r, s, o, t, c);
			}
			return true;
		},
		[r, l, o.id, c],
	);
	return n.createElement(
		"div",
		{
			className: A_1(M.Action, t),
			onClick: m,
		},
		n.createElement("span", null, (0, Localize)("#Store_AddToCart")),
	);
}
