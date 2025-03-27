import n from "./58663.js";
import i from "./48307.js";
import { I8 } from "./12176.js";
const n_Message = n.Message;
class o extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!o.prototype.type) {
			i.Sg(o.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		o.sm_m ||= {
			proto: o,
			fields: {
				type: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				value: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				color: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				label: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				name: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return o.sm_m;
	}
	static MBF() {
		o.sm_mbf ||= i.w0(o.M());
		return o.sm_mbf;
	}
	toObject(e = false) {
		return o.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(o.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(o.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new o();
		return o.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(o.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		o.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(o.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		o.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEconItem_DescriptionLine";
	}
}
class l extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.link) {
			i.Sg(l.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		l.sm_m ||= {
			proto: l,
			fields: {
				link: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return l.sm_m;
	}
	static MBF() {
		l.sm_mbf ||= i.w0(l.M());
		return l.sm_mbf;
	}
	toObject(e = false) {
		return l.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(l.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(l.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new l();
		return l.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(l.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(l.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEconItem_Action";
	}
}
class c extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.appid) {
			i.Sg(c.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				category: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				internal_name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				localized_category_name: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				localized_tag_name: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				color: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return c.sm_m;
	}
	static MBF() {
		c.sm_mbf ||= i.w0(c.M());
		return c.sm_mbf;
	}
	toObject(e = false) {
		return c.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(c.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(c.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new c();
		return c.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(c.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(c.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEconItem_Tag";
	}
}
class m extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.appid) {
			i.Sg(m.M());
		}
		n_Message.initialize(this, e, 0, -1, [8, 10, 11, 12, 13, 21, 26], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				classid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				instanceid: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				currency: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				background_color: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon_url: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon_url_large: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				descriptions: {
					n: 8,
					c: o,
					r: true,
					q: true,
				},
				tradable: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				actions: {
					n: 10,
					c: l,
					r: true,
					q: true,
				},
				owner_descriptions: {
					n: 11,
					c: o,
					r: true,
					q: true,
				},
				owner_actions: {
					n: 12,
					c: l,
					r: true,
					q: true,
				},
				fraudwarnings: {
					n: 13,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				name: {
					n: 14,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				name_color: {
					n: 15,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				type: {
					n: 16,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				market_name: {
					n: 17,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				market_hash_name: {
					n: 18,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				market_fee: {
					n: 19,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				market_fee_app: {
					n: 28,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				contained_item: {
					n: 20,
					c: m,
				},
				market_actions: {
					n: 21,
					c: l,
					r: true,
					q: true,
				},
				commodity: {
					n: 22,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				market_tradable_restriction: {
					n: 23,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				market_marketable_restriction: {
					n: 24,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				marketable: {
					n: 25,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				tags: {
					n: 26,
					c,
					r: true,
					q: true,
				},
				item_expiration: {
					n: 27,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				market_buy_country_restriction: {
					n: 30,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				market_sell_country_restriction: {
					n: 31,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				sealed: {
					n: 32,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return m.sm_m;
	}
	static MBF() {
		m.sm_mbf ||= i.w0(m.M());
		return m.sm_mbf;
	}
	toObject(e = false) {
		return m.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(m.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(m.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new m();
		return m.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(m.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(m.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEconItem_Description";
	}
}
class u extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.appid) {
			i.Sg(u.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				contextid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				assetid: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				classid: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				instanceid: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				currencyid: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				amount: {
					n: 7,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				missing: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				est_usd: {
					n: 9,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
			},
		};
		return u.sm_m;
	}
	static MBF() {
		u.sm_mbf ||= i.w0(u.M());
		return u.sm_mbf;
	}
	toObject(e = false) {
		return u.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(u.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(u.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new u();
		return u.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(u.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(u.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEcon_Asset";
	}
}
export class z9 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z9.prototype.steamid) {
			i.Sg(z9.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		z9.sm_m ||= {
			proto: z9,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				contextid: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				get_descriptions: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				for_trade_offer_verification: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				language: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				filters: {
					n: 6,
					c: ur,
				},
				start_assetid: {
					n: 8,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				count: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return z9.sm_m;
	}
	static MBF() {
		z9.sm_mbf ||= i.w0(z9.M());
		return z9.sm_mbf;
	}
	toObject(e = false) {
		return z9.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(z9.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(z9.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new z9();
		return z9.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(z9.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		z9.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(z9.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		z9.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEcon_GetInventoryItemsWithDescriptions_Request";
	}
}
export class ur extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ur.prototype.assetids) {
			i.Sg(ur.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ur.sm_m ||= {
			proto: ur,
			fields: {
				assetids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
				currencyids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				tradable_only: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				marketable_only: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return ur.sm_m;
	}
	static MBF() {
		ur.sm_mbf ||= i.w0(ur.M());
		return ur.sm_mbf;
	}
	toObject(e = false) {
		return ur.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ur.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ur.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ur();
		return ur.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ur.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ur.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ur.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ur.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
	}
}
class p extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.assets) {
			i.Sg(p.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				assets: {
					n: 1,
					c: u,
					r: true,
					q: true,
				},
				descriptions: {
					n: 2,
					c: m,
					r: true,
					q: true,
				},
				missing_assets: {
					n: 3,
					c: u,
					r: true,
					q: true,
				},
				more_items: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				last_assetid: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				total_inventory_count: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= i.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(p.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(p.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(p.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEcon_GetInventoryItemsWithDescriptions_Response";
	}
}
export class Bi extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Bi.prototype.generate_new_token) {
			i.Sg(Bi.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Bi.sm_m ||= {
			proto: Bi,
			fields: {
				generate_new_token: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Bi.sm_m;
	}
	static MBF() {
		Bi.sm_mbf ||= i.w0(Bi.M());
		return Bi.sm_mbf;
	}
	toObject(e = false) {
		return Bi.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Bi.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Bi.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Bi();
		return Bi.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Bi.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Bi.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Bi.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Bi.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEcon_GetTradeOfferAccessToken_Request";
	}
}
class h extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.trade_offer_access_token) {
			i.Sg(h.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				trade_offer_access_token: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= i.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(h.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(h.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEcon_GetTradeOfferAccessToken_Response";
	}
}
class C extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.return_url) {
			i.Sg(C.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				return_url: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return C.sm_m;
	}
	static MBF() {
		C.sm_mbf ||= i.w0(C.M());
		return C.sm_mbf;
	}
	toObject(e = false) {
		return C.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(C.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(C.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(C.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(C.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
	}
}
class _ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.url) {
			i.Sg(_.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				url: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= i.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
	}
}
export class qp extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qp.prototype.language) {
			i.Sg(qp.M());
		}
		n_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qp.sm_m ||= {
			proto: qp,
			fields: {
				language: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				classes: {
					n: 3,
					c: b,
					r: true,
					q: true,
				},
				high_pri: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return qp.sm_m;
	}
	static MBF() {
		qp.sm_mbf ||= i.w0(qp.M());
		return qp.sm_mbf;
	}
	toObject(e = false) {
		return qp.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qp.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qp.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qp();
		return qp.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qp.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		qp.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qp.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		qp.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEcon_GetAssetClassInfo_Request";
	}
}
class b extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.classid) {
			i.Sg(b.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				classid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				instanceid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= i.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(b.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEcon_GetAssetClassInfo_Request_Class";
	}
}
class y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.descriptions) {
			i.Sg(y.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				descriptions: {
					n: 1,
					c: m,
					r: true,
					q: true,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= i.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(y.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(y.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(y.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEcon_GetAssetClassInfo_Response";
	}
}
export let tB;
((e) => {
	e.GetInventoryItemsWithDescriptions = (e, t) =>
		e.SendMsg("Econ.GetInventoryItemsWithDescriptions#1", I8(z9, t), p, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 2,
		});
	e.GetTradeOfferAccessToken = (e, t) =>
		e.SendMsg("Econ.GetTradeOfferAccessToken#1", I8(Bi, t), h, {
			ePrivilege: 1,
		});
	e.ClientGetItemShopOverlayAuthURL = (e, t) =>
		e.SendMsg("Econ.ClientGetItemShopOverlayAuthURL#1", I8(C, t), _, {
			ePrivilege: 1,
		});
	e.GetAssetClassInfo = (e, t) =>
		e.SendMsg("Econ.GetAssetClassInfo#1", I8(qp, t), y, {
			ePrivilege: 1,
		});
})((tB ||= {}));
