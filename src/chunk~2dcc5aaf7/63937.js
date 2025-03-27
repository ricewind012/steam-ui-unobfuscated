import { Localize } from "../../actual_src/utils/localization.js";
import n, { useContext, createContext, useEffect } from "./63696.js";
import i, { I8 } from "./12176.js";
import { I as I_1 } from "./61416.js";
import { LH } from "./24295.js";
import { KV } from "./46382.js";
import l from "./59401.js";
import "./54946.js";
import m from "./58663.js";
import u from "./48307.js";
import L from "./43691.js";
import "./24274.js";
import "./36229.js";
const m_Message = m.Message;
class A extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.steamid_requester) {
			u.Sg(A.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				steamid_requester: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				purchase_request_id: {
					n: 2,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
			},
		};
		return A.sm_m;
	}
	static MBF() {
		A.sm_mbf ||= u.w0(A.M());
		return A.sm_mbf;
	}
	toObject(e = false) {
		return A.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(A.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(A.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new A();
		return A.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(A.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(A.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_CreateNew_Request";
	}
}
class p extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.gidshoppingcart) {
			u.Sg(p.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				gidshoppingcart: {
					n: 1,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= u.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(p.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(p.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(p.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_CreateNew_Response";
	}
}
class g extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.amount) {
			u.Sg(g.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				amount: {
					n: 1,
					br: u.qM.readInt64String,
					bw: u.gp.writeInt64String,
				},
				currencycode: {
					n: 2,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= u.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(g.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_Amount";
	}
}
class h extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.packageid) {
			u.Sg(h.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				packageid: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				costwhenadded: {
					n: 2,
					c: g,
				},
				is_gift: {
					n: 3,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				gidbundle: {
					n: 4,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				quantity: {
					n: 5,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= u.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(h.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(h.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_PackageItem";
	}
}
class C extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.walletcredit) {
			u.Sg(C.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				walletcredit: {
					n: 1,
					c: g,
				},
			},
		};
		return C.sm_m;
	}
	static MBF() {
		C.sm_mbf ||= u.w0(C.M());
		return C.sm_mbf;
	}
	toObject(e = false) {
		return C.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(C.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(C.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(C.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(C.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_WalletCreditItem";
	}
}
class _ extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.couponid) {
			u.Sg(_.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				couponid: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				gidcoupontarget: {
					n: 2,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				packageid: {
					n: 3,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				gidcoupon: {
					n: 4,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= u.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(_.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_CouponItem";
	}
}
class f extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.microtxnappid) {
			u.Sg(f.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				microtxnappid: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				microtxnassetclassid: {
					n: 2,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
			},
		};
		return f.sm_m;
	}
	static MBF() {
		f.sm_mbf ||= u.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(f.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(f.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_MicroTxnAsset";
	}
}
class b extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.bundleid) {
			u.Sg(b.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				bundleid: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				quantity: {
					n: 2,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= u.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(b.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_BundleItem";
	}
}
class y extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.reward_id) {
			u.Sg(y.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				reward_id: {
					n: 1,
					br: u.qM.readInt32,
					bw: u.gp.writeInt32,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= u.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(y.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(y.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(y.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_LoyaltyRewardItem";
	}
}
class S extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.gidparent) {
			u.Sg(S.M());
		}
		m_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				gidparent: {
					n: 1,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				children: {
					n: 2,
					c: S,
					r: true,
					q: true,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= u.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(S.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_RelationShip";
	}
}
class w extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.couponid) {
			u.Sg(w.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				couponid: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				gidcoupon: {
					n: 2,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				gidlineitem: {
					n: 3,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
			},
		};
		return w.sm_m;
	}
	static MBF() {
		w.sm_mbf ||= u.w0(w.M());
		return w.sm_mbf;
	}
	toObject(e = false) {
		return w.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(w.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(w.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(w.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(w.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_AvailableCoupon";
	}
}
class B extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.gidlineitem) {
			u.Sg(B.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				gidlineitem: {
					n: 1,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				package_item: {
					n: 2,
					c: h,
				},
				wallet_credit_item: {
					n: 3,
					c: C,
				},
				coupon_item: {
					n: 4,
					c: _,
				},
				micro_item: {
					n: 5,
					c: f,
				},
				bundle_item: {
					n: 7,
					c: b,
				},
				loyalty_item: {
					n: 8,
					c: y,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= u.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(B.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(B.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_Item";
	}
}
class v extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.coupons) {
			u.Sg(v.M());
		}
		m_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				coupons: {
					n: 1,
					c: w,
					r: true,
					q: true,
				},
			},
		};
		return v.sm_m;
	}
	static MBF() {
		v.sm_mbf ||= u.w0(v.M());
		return v.sm_mbf;
	}
	toObject(e = false) {
		return v.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(v.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(v.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(v.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(v.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_Potentials";
	}
}
class I extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.gidshoppingcart) {
			u.Sg(I.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				gidshoppingcart: {
					n: 1,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
			},
		};
		return I.sm_m;
	}
	static MBF() {
		I.sm_mbf ||= u.w0(I.M());
		return I.sm_mbf;
	}
	toObject(e = false) {
		return I.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(I.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(I.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(I.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(I.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_GetContents_Request";
	}
}
class E extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.lineitems) {
			u.Sg(E.M());
		}
		m_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				lineitems: {
					n: 1,
					c: B,
					r: true,
					q: true,
				},
				treeview: {
					n: 2,
					c: S,
					r: true,
					q: true,
				},
				potentials: {
					n: 3,
					c: v,
				},
			},
		};
		return E.sm_m;
	}
	static MBF() {
		E.sm_mbf ||= u.w0(E.M());
		return E.sm_mbf;
	}
	toObject(e = false) {
		return E.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(E.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(E.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new E();
		return E.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(E.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(E.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_Contents";
	}
}
class M extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.gidshoppingcart) {
			u.Sg(M.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				gidshoppingcart: {
					n: 1,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				contents: {
					n: 2,
					c: E,
				},
				time_created: {
					n: 3,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				merged_into_account_cart: {
					n: 4,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				steamid_requester: {
					n: 5,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				purchase_request_id: {
					n: 6,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
			},
		};
		return M.sm_m;
	}
	static MBF() {
		M.sm_mbf ||= u.w0(M.M());
		return M.sm_mbf;
	}
	toObject(e = false) {
		return M.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(M.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(M.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(M.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(M.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_GetContents_Response";
	}
}
class T extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.gidshoppingcart) {
			u.Sg(T.M());
		}
		m_Message.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				gidshoppingcart: {
					n: 1,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				browserid: {
					n: 2,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				cart_items: {
					n: 4,
					c: h,
					r: true,
					q: true,
				},
				store_country_code: {
					n: 5,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				beta_mode: {
					n: 6,
					d: false,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
			},
		};
		return T.sm_m;
	}
	static MBF() {
		T.sm_mbf ||= u.w0(T.M());
		return T.sm_mbf;
	}
	toObject(e = false) {
		return T.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(T.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(T.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new T();
		return T.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(T.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(T.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_AddPackages_Request";
	}
}
class R extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.gidshoppingcart) {
			u.Sg(R.M());
		}
		m_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				gidshoppingcart: {
					n: 1,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				contents: {
					n: 2,
					c: E,
				},
				result_details: {
					n: 3,
					r: true,
					q: true,
					br: u.qM.readUint32,
					pbr: u.qM.readPackedUint32,
					bw: u.gp.writeRepeatedUint32,
				},
			},
		};
		return R.sm_m;
	}
	static MBF() {
		R.sm_mbf ||= u.w0(R.M());
		return R.sm_mbf;
	}
	toObject(e = false) {
		return R.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(R.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(R.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new R();
		return R.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(R.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(R.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_AddPackages_Response";
	}
}
class k extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.gidshoppingcart) {
			u.Sg(k.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				gidshoppingcart: {
					n: 1,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				gidlineitem: {
					n: 2,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				quantity: {
					n: 3,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
			},
		};
		return k.sm_m;
	}
	static MBF() {
		k.sm_mbf ||= u.w0(k.M());
		return k.sm_mbf;
	}
	toObject(e = false) {
		return k.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(k.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(k.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new k();
		return k.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(k.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(k.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_UpdatePackageQuantity_Request";
	}
}
class D extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.gidshoppingcart) {
			u.Sg(D.M());
		}
		m_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				gidshoppingcart: {
					n: 1,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				contents: {
					n: 2,
					c: E,
				},
				result_details: {
					n: 3,
					r: true,
					q: true,
					br: u.qM.readUint32,
					pbr: u.qM.readPackedUint32,
					bw: u.gp.writeRepeatedUint32,
				},
			},
		};
		return D.sm_m;
	}
	static MBF() {
		D.sm_mbf ||= u.w0(D.M());
		return D.sm_mbf;
	}
	toObject(e = false) {
		return D.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(D.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(D.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(D.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(D.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_UpdatePackageQuantity_Response";
	}
}
class N extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.gidshoppingcart) {
			u.Sg(N.M());
		}
		m_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				gidshoppingcart: {
					n: 1,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				bundleid: {
					n: 2,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				browserid: {
					n: 3,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				store_country: {
					n: 5,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				quantity: {
					n: 6,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				beta_mode: {
					n: 7,
					d: false,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
			},
		};
		return N.sm_m;
	}
	static MBF() {
		N.sm_mbf ||= u.w0(N.M());
		return N.sm_mbf;
	}
	toObject(e = false) {
		return N.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(N.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(N.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new N();
		return N.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(N.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(N.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_AddBundle_Request";
	}
}
class F extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.contents) {
			u.Sg(F.M());
		}
		m_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		F.sm_m ||= {
			proto: F,
			fields: {
				contents: {
					n: 1,
					c: E,
				},
				result_details: {
					n: 2,
					r: true,
					q: true,
					br: u.qM.readUint32,
					pbr: u.qM.readPackedUint32,
					bw: u.gp.writeRepeatedUint32,
				},
			},
		};
		return F.sm_m;
	}
	static MBF() {
		F.sm_mbf ||= u.w0(F.M());
		return F.sm_mbf;
	}
	toObject(e = false) {
		return F.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(F.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(F.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new F();
		return F.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(F.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(F.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_AddBundle_Response";
	}
}
class G extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.gidshoppingcart) {
			u.Sg(G.M());
		}
		m_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				gidshoppingcart: {
					n: 1,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				gidlineitems: {
					n: 2,
					r: true,
					q: true,
					br: u.qM.readUint64String,
					pbr: u.qM.readPackedUint64String,
					bw: u.gp.writeRepeatedUint64String,
				},
				browserid: {
					n: 3,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
			},
		};
		return G.sm_m;
	}
	static MBF() {
		G.sm_mbf ||= u.w0(G.M());
		return G.sm_mbf;
	}
	toObject(e = false) {
		return G.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(G.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(G.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new G();
		return G.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(G.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(G.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_RemoveLineItems_Request";
	}
}
class O extends m_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.contents) {
			u.Sg(O.M());
		}
		m_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O.sm_m ||= {
			proto: O,
			fields: {
				contents: {
					n: 1,
					c: E,
				},
				result_details: {
					n: 2,
					r: true,
					q: true,
					br: u.qM.readUint32,
					pbr: u.qM.readPackedUint32,
					bw: u.gp.writeRepeatedUint32,
				},
			},
		};
		return O.sm_m;
	}
	static MBF() {
		O.sm_mbf ||= u.w0(O.M());
		return O.sm_mbf;
	}
	toObject(e = false) {
		return O.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(O.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(O.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new O();
		return O.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(O.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(O.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CShoppingCart_RemoveLineItems_Response";
	}
}
let P;
((e) => {
	e.CreateNewShoppingCart = (e, t) =>
		e.SendMsg("ShoppingCart.CreateNewShoppingCart#1", I8(A, t), p, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 1,
		});
	e.GetShoppingCartContents = (e, t) =>
		e.SendMsg("ShoppingCart.GetShoppingCartContents#1", I8(I, t), M, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 1,
		});
	e.AddPackages = (e, t) =>
		e.SendMsg("ShoppingCart.AddPackages#1", I8(T, t), R, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 1,
		});
	e.UpdatePackageQuantity = (e, t) =>
		e.SendMsg("ShoppingCart.UpdatePackageQuantity#1", I8(k, t), D, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 1,
		});
	e.AddBundle = (e, t) =>
		e.SendMsg("ShoppingCart.AddBundle#1", I8(N, t), F, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 1,
		});
	e.RemoveLineItems = (e, t) =>
		e.SendMsg("ShoppingCart.RemoveLineItems#1", I8(G, t), O, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 1,
		});
})((P ||= {}));
export const j$ = (e, t) =>
	t === undefined
		? ["get_family_group_for_user ", e]
		: ["get_family_group_for_user ", e, t];
export const JM = (e) => ["get_family_group", e];
export const cr = (e) => ["get_family_history", e];
function W(e, t) {
	if (e != 1) {
		throw e;
	}
}
const V = n.createContext({
	staleTimeMs: Infinity,
});
export function Hs(e) {
	const t = KV();
	const r = useContext(V).staleTimeMs;
	return I_1({
		queryKey: JM(e),
		queryFn: async () => {
			if (e) {
				const r = i.w.Init(l.qb);
				r.Body().set_family_groupid(e);
				const n = await l.Ex.GetFamilyGroup(t, r);
				W(n.GetEResult());
				return n.Body();
			}
			throw 42;
		},
		staleTime: r,
	});
}
export function ll(e) {
	const t = LH();
	const r = Hs(e);
	return r.data
		?.members()
		.find((e) => e.steamid() == t)
		?.role();
}
const q = createContext({
	errorMessage: null,
	setErrorMessage: (e) => {},
});
let Q;
((e) => {
	e[(e.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone";
	e[(e.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily";
	e[(e.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily";
	e[(e.k_EFamilyQueryDeclineInvite = 3)] = "k_EFamilyQueryDeclineInvite";
	e[(e.k_EFamilyQueryInviteToFamily = 4)] = "k_EFamilyQueryInviteToFamily";
	e[(e.k_EFamilyQueryCreateFamily = 5)] = "k_EFamilyQueryCreateFamily";
	e[(e.k_EFamilyQueryDeleteFamily = 6)] = "k_EFamilyQueryDeleteFamily";
	e[(e.k_EFamilyQueryModifyFamily = 7)] = "k_EFamilyQueryModifyFamily";
	e[(e.k_EFamilyQueryRemoveFromFamily = 8)] = "k_EFamilyQueryRemoveFromFamily";
	e[(e.k_EFamilyQueryGetUsersSharingDevice = 9)] =
		"k_EFamilyQueryGetUsersSharingDevice";
	e[(e.k_EFamilyQueryPurchaseRequest = 10)] = "k_EFamilyQueryPurchaseRequest";
	e[(e.k_EFamilyQueryGetPurchaseRequests = 11)] =
		"k_EFamilyQueryGetPurchaseRequests";
	e[(e.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
		"k_EFamilyQueryDeclinePurchaseRequest";
	e[(e.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory";
	e[(e.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart";
	e[(e.k_EFamilyQuerySetCooldownOverrides = 15)] =
		"k_EFamilyQuerySetCooldownOverrides";
	e[(e.k_EFamilyQueryResendInvite = 16)] = "k_EFamilyQueryResendInvite";
})((Q ||= {}));
Q.k_EFamilyQueryCreateFamily;
Q.k_EFamilyQueryCreateFamily;
Q.k_EFamilyQueryJoinFamily;
Q.k_EFamilyQueryJoinFamily;
Q.k_EFamilyQueryCreateFamily;
Q.k_EFamilyQueryJoinFamily;
Q.k_EFamilyQueryRemoveFromFamily;
Q.k_EFamilyQueryJoinFamily;
Q.k_EFamilyQueryInviteToFamily;
Q.k_EFamilyQueryRemoveFromFamily;
Q.k_EFamilyQueryInviteToFamily;
function Z() {
	const { setErrorMessage: e } = useContext(q);
	return {
		setErrorMessage: e,
	};
}
export function p8(e, t) {
	const { setErrorMessage: r } = Z();
	useEffect(() => {
		if (e.isError) {
			r((0, Localize)(t));
		}
	}, [r, e.isError, t]);
}
export function w1(e, t) {
	return `${L.TS.STORE_BASE_URL}cart/purchaserequest/${e}/${t}`;
}
