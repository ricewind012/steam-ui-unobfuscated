import n from "./58663.js";
import i from "./48307.js";
import { I8 } from "./12176.js";
import s from "./67185.js";
const n_Message = n.Message;
export function md(e) {
	return `unknown EStoreItemType ( ${e} )`;
}
class c extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.type) {
			i.Sg(c.M());
		}
		n_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				type: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				rating: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				descriptors: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				interactive_elements: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				required_age: {
					n: 10,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				use_age_gate: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				image_url: {
					n: 20,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				image_target: {
					n: 21,
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
		return "StoreGameRating";
	}
}
export class vB extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!vB.prototype.item_type) {
			i.Sg(vB.M());
		}
		n_Message.initialize(
			this,
			e,
			0,
			-1,
			[11, 12, 20, 21, 25, 41, 42, 52, 71],
			null,
		);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		vB.sm_m ||= {
			proto: vB,
			fields: {
				item_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				success: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				visible: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				unvailable_for_country_restriction: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				name: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				store_url_path: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				appid: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				type: {
					n: 10,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				included_types: {
					n: 11,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				included_appids: {
					n: 12,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				is_free: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_early_access: {
					n: 14,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				related_items: {
					n: 15,
					c: u,
				},
				included_items: {
					n: 16,
					c: d,
				},
				content_descriptorids: {
					n: 20,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				tagids: {
					n: 21,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				categories: {
					n: 22,
					c: A,
				},
				reviews: {
					n: 23,
					c: p,
				},
				basic_info: {
					n: 24,
					c: h,
				},
				tags: {
					n: 25,
					c: _,
					r: true,
					q: true,
				},
				assets: {
					n: 30,
					c: f,
				},
				release: {
					n: 31,
					c: b,
				},
				platforms: {
					n: 32,
					c: y,
				},
				game_rating: {
					n: 33,
					c,
				},
				is_coming_soon: {
					n: 34,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				best_purchase_option: {
					n: 40,
					c: w,
				},
				purchase_options: {
					n: 41,
					c: w,
					r: true,
					q: true,
				},
				accessories: {
					n: 42,
					c: w,
					r: true,
					q: true,
				},
				self_purchase_option: {
					n: 43,
					c: w,
				},
				screenshots: {
					n: 50,
					c: I,
				},
				trailers: {
					n: 51,
					c: M,
				},
				supported_languages: {
					n: 52,
					c: k,
					r: true,
					q: true,
				},
				store_url_path_override: {
					n: 53,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				free_weekend: {
					n: 54,
					c: D,
				},
				unlisted: {
					n: 55,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				game_count: {
					n: 56,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				internal_name: {
					n: 57,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				full_description: {
					n: 58,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_free_temporarily: {
					n: 59,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				assets_without_overrides: {
					n: 60,
					c: f,
				},
				user_filter_failure: {
					n: 70,
					c: te,
				},
				links: {
					n: 71,
					c: N,
					r: true,
					q: true,
				},
			},
		};
		return vB.sm_m;
	}
	static MBF() {
		vB.sm_mbf ||= i.w0(vB.M());
		return vB.sm_mbf;
	}
	toObject(e = false) {
		return vB.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(vB.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(vB.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new vB();
		return vB.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(vB.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		vB.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(vB.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		vB.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem";
	}
}
class u extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.parent_appid) {
			i.Sg(u.M());
		}
		n_Message.initialize(this, e, 0, -1, [2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				parent_appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				demo_appid: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				standalone_demo_appid: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
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
		return "StoreItem_RelatedItems";
	}
}
class d extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.included_apps) {
			i.Sg(d.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				included_apps: {
					n: 1,
					c: vB,
					r: true,
					q: true,
				},
				included_packages: {
					n: 2,
					c: vB,
					r: true,
					q: true,
				},
			},
		};
		return d.sm_m;
	}
	static MBF() {
		d.sm_mbf ||= i.w0(d.M());
		return d.sm_mbf;
	}
	toObject(e = false) {
		return d.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(d.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(d.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new d();
		return d.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(d.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(d.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_IncludedItems";
	}
}
class A extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.supported_player_categoryids) {
			i.Sg(A.M());
		}
		n_Message.initialize(this, e, 0, -1, [2, 3, 4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				supported_player_categoryids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				feature_categoryids: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				controller_categoryids: {
					n: 4,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return A.sm_m;
	}
	static MBF() {
		A.sm_mbf ||= i.w0(A.M());
		return A.sm_mbf;
	}
	toObject(e = false) {
		return A.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(A.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(A.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new A();
		return A.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(A.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(A.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_Categories";
	}
}
class p extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.summary_filtered) {
			i.Sg(p.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				summary_filtered: {
					n: 1,
					c: g,
				},
				summary_unfiltered: {
					n: 2,
					c: g,
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
		return "StoreItem_Reviews";
	}
}
class g extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.review_count) {
			i.Sg(g.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				review_count: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				percent_positive: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				review_score: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				review_score_label: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= i.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(g.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_Reviews_StoreReviewSummary";
	}
}
class h extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.short_description) {
			i.Sg(h.M());
		}
		n_Message.initialize(this, e, 0, -1, [2, 3, 4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				short_description: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				publishers: {
					n: 2,
					c: C,
					r: true,
					q: true,
				},
				developers: {
					n: 3,
					c: C,
					r: true,
					q: true,
				},
				franchises: {
					n: 4,
					c: C,
					r: true,
					q: true,
				},
				capsule_headline: {
					n: 5,
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
		return "StoreItem_BasicInfo";
	}
}
class C extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.name) {
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
				name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				creator_clan_account_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "StoreItem_BasicInfo_CreatorHomeLink";
	}
}
class _ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.tagid) {
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
				tagid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				weight: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "StoreItem_Tag";
	}
}
class f extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.asset_url_format) {
			i.Sg(f.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				asset_url_format: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				main_capsule: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				small_capsule: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				header: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				package_header: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				page_background: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				hero_capsule: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				hero_capsule_2x: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				library_capsule: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				library_capsule_2x: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				library_hero: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				library_hero_2x: {
					n: 12,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				community_icon: {
					n: 13,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				clan_avatar: {
					n: 14,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return f.sm_m;
	}
	static MBF() {
		f.sm_mbf ||= i.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(f.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(f.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_Assets";
	}
}
class b extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.steam_release_date) {
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
				steam_release_date: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				original_release_date: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				original_steam_release_date: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				is_coming_soon: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_preload: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				custom_release_date_message: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_abridged_release_date: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				coming_soon_display: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_early_access: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				mac_release_date: {
					n: 20,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				linux_release_date: {
					n: 21,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "StoreItem_ReleaseInfo";
	}
}
class y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.windows) {
			i.Sg(y.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				windows: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				mac: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				steamos_linux: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				vr_support: {
					n: 10,
					c: S,
				},
				steam_deck_compat_category: {
					n: 11,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "StoreItem_Platforms";
	}
}
class S extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.vrhmd) {
			i.Sg(S.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				vrhmd: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				vrhmd_only: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				htc_vive: {
					n: 40,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				oculus_rift: {
					n: 41,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				windows_mr: {
					n: 42,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				valve_index: {
					n: 43,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= i.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(S.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_Platforms_VRSupport";
	}
}
class w extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.packageid) {
			i.Sg(w.M());
		}
		n_Message.initialize(this, e, 0, -1, [20], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				packageid: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				bundleid: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				purchase_option_name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				final_price_in_cents: {
					n: 5,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				original_price_in_cents: {
					n: 6,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				formatted_final_price: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				formatted_original_price: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				discount_pct: {
					n: 10,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				bundle_discount_pct: {
					n: 12,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_free_to_keep: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				price_before_bundle_discount: {
					n: 14,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				formatted_price_before_bundle_discount: {
					n: 15,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				active_discounts: {
					n: 20,
					c: B,
					r: true,
					q: true,
				},
				user_can_purchase_as_gift: {
					n: 31,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_commercial_license: {
					n: 40,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				should_suppress_discount_pct: {
					n: 41,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				hide_discount_pct_for_compliance: {
					n: 42,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				included_game_count: {
					n: 43,
					d: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				lowest_recent_price_in_cents: {
					n: 44,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				requires_shipping: {
					n: 45,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				recurrence_info: {
					n: 46,
					c: v,
				},
				free_to_keep_ends: {
					n: 47,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return w.sm_m;
	}
	static MBF() {
		w.sm_mbf ||= i.w0(w.M());
		return w.sm_mbf;
	}
	toObject(e = false) {
		return w.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(w.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(w.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(w.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(w.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_PurchaseOption";
	}
}
class B extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.discount_amount) {
			i.Sg(B.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				discount_amount: {
					n: 1,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				discount_description: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				discount_end_date: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= i.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(B.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(B.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_PurchaseOption_Discount";
	}
}
class v extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.packageid) {
			i.Sg(v.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				packageid: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				billing_agreement_type: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				renewal_time_unit: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				renewal_time_period: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				renewal_price_in_cents: {
					n: 5,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				formatted_renewal_price: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return v.sm_m;
	}
	static MBF() {
		v.sm_mbf ||= i.w0(v.M());
		return v.sm_mbf;
	}
	toObject(e = false) {
		return v.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(v.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(v.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(v.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(v.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_PurchaseOption_RecurrenceInfo";
	}
}
class I extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.all_ages_screenshots) {
			i.Sg(I.M());
		}
		n_Message.initialize(this, e, 0, -1, [2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				all_ages_screenshots: {
					n: 2,
					c: E,
					r: true,
					q: true,
				},
				mature_content_screenshots: {
					n: 3,
					c: E,
					r: true,
					q: true,
				},
			},
		};
		return I.sm_m;
	}
	static MBF() {
		I.sm_mbf ||= i.w0(I.M());
		return I.sm_mbf;
	}
	toObject(e = false) {
		return I.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(I.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(I.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(I.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(I.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_Screenshots";
	}
}
class E extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.filename) {
			i.Sg(E.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				filename: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				ordinal: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return E.sm_m;
	}
	static MBF() {
		E.sm_mbf ||= i.w0(E.M());
		return E.sm_mbf;
	}
	toObject(e = false) {
		return E.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(E.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(E.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new E();
		return E.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(E.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(E.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_Screenshots_Screenshot";
	}
}
class M extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.highlights) {
			i.Sg(M.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				highlights: {
					n: 1,
					c: R,
					r: true,
					q: true,
				},
				other_trailers: {
					n: 2,
					c: R,
					r: true,
					q: true,
				},
			},
		};
		return M.sm_m;
	}
	static MBF() {
		M.sm_mbf ||= i.w0(M.M());
		return M.sm_mbf;
	}
	toObject(e = false) {
		return M.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(M.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(M.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(M.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(M.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_Trailers";
	}
}
class T extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.filename) {
			i.Sg(T.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				filename: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				type: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return T.sm_m;
	}
	static MBF() {
		T.sm_mbf ||= i.w0(T.M());
		return T.sm_mbf;
	}
	toObject(e = false) {
		return T.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(T.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(T.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new T();
		return T.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(T.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(T.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_Trailers_VideoSource";
	}
}
class R extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.trailer_name) {
			i.Sg(R.M());
		}
		n_Message.initialize(this, e, 0, -1, [3, 4, 5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				trailer_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				trailer_url_format: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				trailer_category: {
					n: 13,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				trailer_480p: {
					n: 3,
					c: T,
					r: true,
					q: true,
				},
				trailer_max: {
					n: 4,
					c: T,
					r: true,
					q: true,
				},
				microtrailer: {
					n: 5,
					c: T,
					r: true,
					q: true,
				},
				screenshot_medium: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				screenshot_full: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				trailer_base_id: {
					n: 12,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return R.sm_m;
	}
	static MBF() {
		R.sm_mbf ||= i.w0(R.M());
		return R.sm_mbf;
	}
	toObject(e = false) {
		return R.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(R.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(R.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new R();
		return R.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(R.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(R.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_Trailers_Trailer";
	}
}
class k extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.elanguage) {
			i.Sg(k.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				elanguage: {
					n: 1,
					d: -1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				eadditionallanguage: {
					n: 5,
					d: -1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				supported: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				full_audio: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				subtitles: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return k.sm_m;
	}
	static MBF() {
		k.sm_mbf ||= i.w0(k.M());
		return k.sm_mbf;
	}
	toObject(e = false) {
		return k.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(k.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(k.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new k();
		return k.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(k.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(k.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_SupportedLanguage";
	}
}
class D extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.start_time) {
			i.Sg(D.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				start_time: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				end_time: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				text: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return D.sm_m;
	}
	static MBF() {
		D.sm_mbf ||= i.w0(D.M());
		return D.sm_mbf;
	}
	toObject(e = false) {
		return D.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(D.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(D.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(D.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(D.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_FreeWeekend";
	}
}
class N extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.link_type) {
			i.Sg(N.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				link_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				url: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				text: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return N.sm_m;
	}
	static MBF() {
		N.sm_mbf ||= i.w0(N.M());
		return N.sm_mbf;
	}
	toObject(e = false) {
		return N.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(N.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(N.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new N();
		return N.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(N.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(N.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItem_Link";
	}
}
export class gn extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!gn.prototype.include_assets) {
			i.Sg(gn.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		gn.sm_m ||= {
			proto: gn,
			fields: {
				include_assets: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_release: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_platforms: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_all_purchase_options: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_screenshots: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_trailers: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_ratings: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_tag_count: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				include_reviews: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_basic_info: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_supported_languages: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_full_description: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_included_items: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				included_item_data_request: {
					n: 14,
					c: gn,
				},
				include_assets_without_overrides: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				apply_user_filters: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_links: {
					n: 17,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return gn.sm_m;
	}
	static MBF() {
		gn.sm_mbf ||= i.w0(gn.M());
		return gn.sm_mbf;
	}
	toObject(e = false) {
		return gn.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(gn.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(gn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new gn();
		return gn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(gn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		gn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(gn.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		gn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreBrowseItemDataRequest";
	}
}
export class TS extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!TS.prototype.language) {
			i.Sg(TS.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		TS.sm_m ||= {
			proto: TS,
			fields: {
				language: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				elanguage: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				country_code: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steam_realm: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return TS.sm_m;
	}
	static MBF() {
		TS.sm_mbf ||= i.w0(TS.M());
		return TS.sm_mbf;
	}
	toObject(e = false) {
		return TS.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(TS.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(TS.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new TS();
		return TS.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(TS.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		TS.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(TS.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		TS.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreBrowseContext";
	}
}
export class O4 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O4.prototype.appid) {
			i.Sg(O4.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O4.sm_m ||= {
			proto: O4,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				packageid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				bundleid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				tagid: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				creatorid: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				hubcategoryid: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return O4.sm_m;
	}
	static MBF() {
		O4.sm_mbf ||= i.w0(O4.M());
		return O4.sm_mbf;
	}
	toObject(e = false) {
		return O4.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(O4.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(O4.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new O4();
		return O4.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(O4.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		O4.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(O4.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		O4.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreItemID";
	}
}
export class eE extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!eE.prototype.ids) {
			i.Sg(eE.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		eE.sm_m ||= {
			proto: eE,
			fields: {
				ids: {
					n: 1,
					c: O4,
					r: true,
					q: true,
				},
				context: {
					n: 2,
					c: TS,
				},
				data_request: {
					n: 3,
					c: gn,
				},
			},
		};
		return eE.sm_m;
	}
	static MBF() {
		eE.sm_mbf ||= i.w0(eE.M());
		return eE.sm_mbf;
	}
	toObject(e = false) {
		return eE.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(eE.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(eE.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new eE();
		return eE.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(eE.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		eE.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(eE.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		eE.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetItems_Request";
	}
}
export class yE extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!yE.prototype.store_items) {
			i.Sg(yE.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		yE.sm_m ||= {
			proto: yE,
			fields: {
				store_items: {
					n: 1,
					c: vB,
					r: true,
					q: true,
				},
			},
		};
		return yE.sm_m;
	}
	static MBF() {
		yE.sm_mbf ||= i.w0(yE.M());
		return yE.sm_mbf;
	}
	toObject(e = false) {
		return yE.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(yE.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(yE.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new yE();
		return yE.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(yE.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		yE.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(yE.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		yE.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetItems_Response";
	}
}
class z extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.language) {
			i.Sg(z.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		z.sm_m ||= {
			proto: z,
			fields: {
				language: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				elanguage: {
					n: 2,
					d: -1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return z.sm_m;
	}
	static MBF() {
		z.sm_mbf ||= i.w0(z.M());
		return z.sm_mbf;
	}
	toObject(e = false) {
		return z.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(z.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new z();
		return z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(z.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(z.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetStoreCategories_Request";
	}
}
class x extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.categories) {
			i.Sg(x.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		x.sm_m ||= {
			proto: x,
			fields: {
				categories: {
					n: 1,
					c: U,
					r: true,
					q: true,
				},
			},
		};
		return x.sm_m;
	}
	static MBF() {
		x.sm_mbf ||= i.w0(x.M());
		return x.sm_mbf;
	}
	toObject(e = false) {
		return x.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(x.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(x.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new x();
		return x.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(x.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(x.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetStoreCategories_Response";
	}
}
class U extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.categoryid) {
			i.Sg(U.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		U.sm_m ||= {
			proto: U,
			fields: {
				categoryid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				type: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				internal_name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				display_name: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				image_url: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				show_in_search: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				computed: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				edit_url: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				edit_sort_order: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return U.sm_m;
	}
	static MBF() {
		U.sm_mbf ||= i.w0(U.M());
		return U.sm_mbf;
	}
	toObject(e = false) {
		return U.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(U.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(U.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new U();
		return U.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(U.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(U.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetStoreCategories_Response_Category";
	}
}
class W extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W.prototype.country_code) {
			i.Sg(W.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W.sm_m ||= {
			proto: W,
			fields: {
				country_code: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				currency_code: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return W.sm_m;
	}
	static MBF() {
		W.sm_mbf ||= i.w0(W.M());
		return W.sm_mbf;
	}
	toObject(e = false) {
		return W.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(W.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(W.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new W();
		return W.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(W.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(W.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetPriceStops_Request";
	}
}
class V extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.price_stops) {
			i.Sg(V.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		V.sm_m ||= {
			proto: V,
			fields: {
				price_stops: {
					n: 1,
					c: H,
					r: true,
					q: true,
				},
				currency_code: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return V.sm_m;
	}
	static MBF() {
		V.sm_mbf ||= i.w0(V.M());
		return V.sm_mbf;
	}
	toObject(e = false) {
		return V.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(V.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(V.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new V();
		return V.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(V.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(V.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetPriceStops_Response";
	}
}
class H extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H.prototype.formatted_amount) {
			i.Sg(H.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H.sm_m ||= {
			proto: H,
			fields: {
				formatted_amount: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				amount_in_cents: {
					n: 2,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
			},
		};
		return H.sm_m;
	}
	static MBF() {
		H.sm_mbf ||= i.w0(H.M());
		return H.sm_mbf;
	}
	toObject(e = false) {
		return H.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(H.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(H.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new H();
		return H.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(H.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(H.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetPriceStops_Response_PriceStop";
	}
}
class j extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!j.prototype.context) {
			i.Sg(j.M());
		}
		n_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		j.sm_m ||= {
			proto: j,
			fields: {
				context: {
					n: 1,
					c: TS,
				},
				store_page_filter: {
					n: 2,
					c: s.S7,
				},
				appids: {
					n: 3,
					c: O4,
					r: true,
					q: true,
				},
				steamid: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return j.sm_m;
	}
	static MBF() {
		j.sm_mbf ||= i.w0(j.M());
		return j.sm_mbf;
	}
	toObject(e = false) {
		return j.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(j.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(j.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new j();
		return j.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(j.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(j.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetDLCForApps_Request";
	}
}
class q extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.dlc_data) {
			i.Sg(q.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				dlc_data: {
					n: 1,
					c: Q,
					r: true,
					q: true,
				},
				playtime: {
					n: 2,
					c: Z,
					r: true,
					q: true,
				},
			},
		};
		return q.sm_m;
	}
	static MBF() {
		q.sm_mbf ||= i.w0(q.M());
		return q.sm_mbf;
	}
	toObject(e = false) {
		return q.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(q.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new q();
		return q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(q.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(q.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetDLCForApps_Response";
	}
}
class Q extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q.prototype.appid) {
			i.Sg(Q.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q.sm_m ||= {
			proto: Q,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				parentappid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				release_date: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				coming_soon: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				price: {
					n: 5,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				discount: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				free: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Q.sm_m;
	}
	static MBF() {
		Q.sm_mbf ||= i.w0(Q.M());
		return Q.sm_mbf;
	}
	toObject(e = false) {
		return Q.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Q.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Q();
		return Q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Q.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Q.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetDLCForApps_Response_DLCData";
	}
}
class Z extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z.prototype.appid) {
			i.Sg(Z.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z.sm_m ||= {
			proto: Z,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				playtime: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_played: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Z.sm_m;
	}
	static MBF() {
		Z.sm_mbf ||= i.w0(Z.M());
		return Z.sm_mbf;
	}
	toObject(e = false) {
		return Z.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Z.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Z();
		return Z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Z.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Z.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp";
	}
}
class Y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.context) {
			i.Sg(Y.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Y.sm_m ||= {
			proto: Y,
			fields: {
				context: {
					n: 1,
					c: TS,
				},
				appids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				flavor: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				count: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				store_page_filter: {
					n: 5,
					c: s.S7,
				},
			},
		};
		return Y.sm_m;
	}
	static MBF() {
		Y.sm_mbf ||= i.w0(Y.M());
		return Y.sm_mbf;
	}
	toObject(e = false) {
		return Y.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Y.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Y();
		return Y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Y.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Y.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetDLCForAppsSolr_Request";
	}
}
class K extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K.prototype.dlc_lists) {
			i.Sg(K.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		K.sm_m ||= {
			proto: K,
			fields: {
				dlc_lists: {
					n: 1,
					c: X,
					r: true,
					q: true,
				},
			},
		};
		return K.sm_m;
	}
	static MBF() {
		K.sm_mbf ||= i.w0(K.M());
		return K.sm_mbf;
	}
	toObject(e = false) {
		return K.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(K.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(K.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new K();
		return K.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(K.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(K.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetDLCForAppsSolr_Response";
	}
}
class X extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!X.prototype.parent_appid) {
			i.Sg(X.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		X.sm_m ||= {
			proto: X,
			fields: {
				parent_appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				dlc_appids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return X.sm_m;
	}
	static MBF() {
		X.sm_mbf ||= i.w0(X.M());
		return X.sm_mbf;
	}
	toObject(e = false) {
		return X.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(X.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(X.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new X();
		return X.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(X.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(X.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetDLCForAppsSolr_Response_DLCList";
	}
}
class J extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!J.prototype.packageid) {
			i.Sg(J.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		J.sm_m ||= {
			proto: J,
			fields: {
				packageid: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				context: {
					n: 2,
					c: TS,
				},
			},
		};
		return J.sm_m;
	}
	static MBF() {
		J.sm_mbf ||= i.w0(J.M());
		return J.sm_mbf;
	}
	toObject(e = false) {
		return J.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(J.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(J.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new J();
		return J.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(J.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(J.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetHardwareItems_Request";
	}
}
class $ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$.prototype.packageid) {
			i.Sg($.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$.sm_m ||= {
			proto: $,
			fields: {
				packageid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				inventory_available: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				high_pending_orders: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				account_restricted_from_purchasing: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				requires_reservation: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				rtime_estimated_notification: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				notificaton_token: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				reservation_state: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				expired: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				time_expires: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_reserved: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				allow_quantity_purchase: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				max_quantity_per_purchase: {
					n: 14,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				allow_purchase_in_country: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				estimated_delivery_soonest_business_days: {
					n: 17,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				estimated_delivery_latest_business_days: {
					n: 18,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return $.sm_m;
	}
	static MBF() {
		$.sm_mbf ||= i.w0($.M());
		return $.sm_mbf;
	}
	toObject(e = false) {
		return $.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT($.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq($.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new $();
		return $.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj($.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0($.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CHardwarePackageDetails";
	}
}
class ee extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ee.prototype.details) {
			i.Sg(ee.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ee.sm_m ||= {
			proto: ee,
			fields: {
				details: {
					n: 1,
					c: $,
					r: true,
					q: true,
				},
			},
		};
		return ee.sm_m;
	}
	static MBF() {
		ee.sm_mbf ||= i.w0(ee.M());
		return ee.sm_mbf;
	}
	toObject(e = false) {
		return ee.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ee.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ee.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ee();
		return ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ee.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ee.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreBrowse_GetHardwareItems_Response";
	}
}
class te extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!te.prototype.filter_failure) {
			i.Sg(te.M());
		}
		n_Message.initialize(this, e, 0, -1, [21, 30], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		te.sm_m ||= {
			proto: te,
			fields: {
				filter_failure: {
					n: 1,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				already_owned: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				on_wishlist: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				ignored: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				not_in_users_language: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				not_on_users_platform: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				demo_for_owned_game: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				dlc_for_unowned_game: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				nonpreferred_product_type: {
					n: 20,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				excluded_tagids: {
					n: 21,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				excluded_content_descriptorids: {
					n: 30,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
			},
		};
		return te.sm_m;
	}
	static MBF() {
		te.sm_mbf ||= i.w0(te.M());
		return te.sm_mbf;
	}
	toObject(e = false) {
		return te.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(te.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(te.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new te();
		return te.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(te.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(te.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "StoreBrowseFilterFailure";
	}
}
export let $4;
((e) => {
	e.GetItems = (e, t) =>
		e.SendMsg("StoreBrowse.GetItems#1", I8(eE, t), yE, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.GetStoreCategories = (e, t) =>
		e.SendMsg("StoreBrowse.GetStoreCategories#1", I8(z, t), x, {
			bConstMethod: true,
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
	e.GetPriceStops = (e, t) =>
		e.SendMsg("StoreBrowse.GetPriceStops#1", I8(W, t), V, {
			bConstMethod: true,
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
	e.GetDLCForApps = (e, t) =>
		e.SendMsg("StoreBrowse.GetDLCForApps#1", I8(j, t), q, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetDLCForAppsSolr = (e, t) =>
		e.SendMsg("StoreBrowse.GetDLCForAppsSolr#1", I8(Y, t), K, {
			bConstMethod: true,
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
	e.GetHardwareItems = (e, t) =>
		e.SendMsg("StoreBrowse.GetHardwareItems#1", I8(J, t), ee, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
})(($4 ||= {}));
