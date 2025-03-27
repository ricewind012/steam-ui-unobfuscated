import n, { Cg } from "./34629.js";
import i, { I8 } from "./12176.js";
import a from "./31222.js";
import s from "./58663.js";
import o from "./48307.js";
import l from "./75888.js";
import M, { w as w_1 } from "./49455.js";
import T, { Tc } from "./72476.js";
import { useState, useEffect } from "./63696.js";
import { H } from "./16154.js";
import D from "./79769.js";
import N, { hL } from "./52451.js";
import { HO } from "./89193.js";
import G from "./82301.js";
import { KV } from "./46382.js";
import { I as I_1 } from "./61416.js";

const { Message } = s;

class m extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.item_type) {
			o.Sg(m.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				item_type: {
					n: 1,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				appid: {
					n: 2,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				item_name: {
					n: 3,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				item_title: {
					n: 4,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				item_description: {
					n: 5,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				item_image_small: {
					n: 6,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				item_image_large: {
					n: 7,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				item_key_values: {
					n: 8,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				item_series: {
					n: 9,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				item_class: {
					n: 10,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				editor_accountid: {
					n: 11,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				active: {
					n: 12,
					br: o.qM.readBool,
					bw: o.gp.writeBool,
				},
				item_image_composed: {
					n: 13,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				item_image_composed_foil: {
					n: 14,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				deleted: {
					n: 15,
					br: o.qM.readBool,
					bw: o.gp.writeBool,
				},
				item_last_changed: {
					n: 16,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				broadcast_channel_id: {
					n: 17,
					br: o.qM.readUint64String,
					bw: o.gp.writeUint64String,
				},
				item_movie_webm: {
					n: 18,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				item_movie_mp4: {
					n: 19,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				item_movie_webm_small: {
					n: 20,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				item_movie_mp4_small: {
					n: 21,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				item_internal_name: {
					n: 22,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
			},
		};
		return m.sm_m;
	}
	static MBF() {
		m.sm_mbf ||= o.w0(m.M());
		return m.sm_mbf;
	}
	toObject(e = false) {
		return m.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(m.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(m.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new m();
		return m.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(m.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(m.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CommunityItemDefinition";
	}
}
class d extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.appid) {
			o.Sg(d.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				appid: {
					n: 1,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				community_item_type: {
					n: 2,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				community_item_class: {
					n: 3,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				community_definition: {
					n: 4,
					c: m,
				},
			},
		};
		return d.sm_m;
	}
	static MBF() {
		d.sm_mbf ||= o.w0(d.M());
		return d.sm_mbf;
	}
	toObject(e = false) {
		return d.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(d.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(d.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new d();
		return d.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(d.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(d.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "SaleReward_ItemDefinition";
	}
}
class A extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.communityitemid) {
			o.Sg(A.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				communityitemid: {
					n: 1,
					br: o.qM.readUint64String,
					bw: o.gp.writeUint64String,
				},
				time_granted: {
					n: 2,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				item_definition: {
					n: 3,
					c: d,
				},
			},
		};
		return A.sm_m;
	}
	static MBF() {
		A.sm_mbf ||= o.w0(A.M());
		return A.sm_mbf;
	}
	toObject(e = false) {
		return A.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(A.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(A.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new A();
		return A.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(A.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(A.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "SaleItemRewardGrant";
	}
}
class p extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.language) {
			o.Sg(p.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				language: {
					n: 1,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= o.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(p.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(p.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(p.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_ClaimItem_Request";
	}
}
class g extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.communityitemid) {
			o.Sg(g.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				communityitemid: {
					n: 1,
					br: o.qM.readUint64String,
					bw: o.gp.writeUint64String,
				},
				next_claim_time: {
					n: 2,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				reward_item: {
					n: 3,
					c: l.l3,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= o.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(g.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_ClaimItem_Response";
	}
}
class h extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.language) {
			o.Sg(h.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				language: {
					n: 1,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= o.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(h.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(h.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_CanClaimItem_Request";
	}
}
class C extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.can_claim) {
			o.Sg(C.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				can_claim: {
					n: 1,
					br: o.qM.readBool,
					bw: o.gp.writeBool,
				},
				next_claim_time: {
					n: 2,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				reward_item: {
					n: 3,
					c: l.l3,
				},
			},
		};
		return C.sm_m;
	}
	static MBF() {
		C.sm_mbf ||= o.w0(C.M());
		return C.sm_mbf;
	}
	toObject(e = false) {
		return C.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(C.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(C.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(C.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(C.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_CanClaimItem_Response";
	}
}
class _ extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.sale_reward_def_id) {
			o.Sg(_.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				sale_reward_def_id: {
					n: 1,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				appid: {
					n: 2,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				virtual_item_reward_event_id: {
					n: 3,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				rtime_start_time: {
					n: 4,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				rtime_end_time: {
					n: 5,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				num_items_per_def: {
					n: 6,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
				reward_def_type: {
					n: 7,
					br: o.qM.readEnum,
					bw: o.gp.writeEnum,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= o.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(_.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamItemRewardDefinition";
	}
}
class f extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.virtual_item_reward_event_id) {
			o.Sg(f.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				virtual_item_reward_event_id: {
					n: 1,
					br: o.qM.readUint32,
					bw: o.gp.writeUint32,
				},
			},
		};
		return f.sm_m;
	}
	static MBF() {
		f.sm_mbf ||= o.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(f.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(f.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_GetRewardDefinitions_Request";
	}
}
class b extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.definitions) {
			o.Sg(b.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				definitions: {
					n: 1,
					c: _,
					r: true,
					q: true,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= o.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(b.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_GetRewardDefinitions_Response";
	}
}
class y extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.definitions) {
			o.Sg(y.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				definitions: {
					n: 1,
					c: _,
					r: true,
					q: true,
				},
				action: {
					n: 2,
					br: o.qM.readEnum,
					bw: o.gp.writeEnum,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= o.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(y.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(y.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(y.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_SetRewardDefinitions_Request";
	}
}
class S extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.definitions) {
			o.Sg(S.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				definitions: {
					n: 1,
					c: _,
					r: true,
					q: true,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= o.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(S.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_SetRewardDefinitions_Response";
	}
}
class w extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.sale_def_type) {
			o.Sg(w.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				sale_def_type: {
					n: 1,
					br: o.qM.readEnum,
					bw: o.gp.writeEnum,
				},
				language: {
					n: 2,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				include_community_item_def: {
					n: 3,
					br: o.qM.readBool,
					bw: o.gp.writeBool,
				},
			},
		};
		return w.sm_m;
	}
	static MBF() {
		w.sm_mbf ||= o.w0(w.M());
		return w.sm_mbf;
	}
	toObject(e = false) {
		return w.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(w.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(w.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(w.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(w.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_GetClaimedSaleRewards_Request";
	}
}
class B extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.num_items_granted) {
			o.Sg(B.M());
		}
		Message.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				num_items_granted: {
					n: 1,
					br: o.qM.readInt32,
					bw: o.gp.writeInt32,
				},
				num_items_earned: {
					n: 2,
					br: o.qM.readInt32,
					bw: o.gp.writeInt32,
				},
				current_def: {
					n: 3,
					c: _,
				},
				reward_items: {
					n: 4,
					c: A,
					r: true,
					q: true,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= o.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(B.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(B.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_GetClaimedSaleRewards_Response";
	}
}
class v extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.sale_def_type) {
			o.Sg(v.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				sale_def_type: {
					n: 1,
					br: o.qM.readEnum,
					bw: o.gp.writeEnum,
				},
				language: {
					n: 2,
					br: o.qM.readString,
					bw: o.gp.writeString,
				},
				include_community_item_def: {
					n: 3,
					br: o.qM.readBool,
					bw: o.gp.writeBool,
				},
			},
		};
		return v.sm_m;
	}
	static MBF() {
		v.sm_mbf ||= o.w0(v.M());
		return v.sm_mbf;
	}
	toObject(e = false) {
		return v.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(v.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(v.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(v.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(v.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_GetCurrentDefinition_Request";
	}
}
class I extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.definition) {
			o.Sg(I.M());
		}
		Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				definition: {
					n: 1,
					c: _,
				},
				reward_items: {
					n: 2,
					c: d,
					r: true,
					q: true,
				},
			},
		};
		return I.sm_m;
	}
	static MBF() {
		I.sm_mbf ||= o.w0(I.M());
		return I.sm_mbf;
	}
	toObject(e = false) {
		return I.toObject(e, this);
	}
	static toObject(e, t) {
		return o.BT(I.M(), e, t);
	}
	static fromObject(e) {
		return o.Uq(I.M(), e);
	}
	static deserializeBinary(e) {
		let t = new s.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return o.zj(I.MBF(), e, t);
	}
	serializeBinary() {
		const e = new s.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		o.i0(I.M(), e, t);
	}
	serializeBase64String() {
		const e = new s.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleItemRewards_GetCurrentDefinition_Response";
	}
}
let E;
((e) => {
	e.ClaimItem = (e, t) =>
		e.SendMsg("SaleItemRewards.ClaimItem#1", I8(p, t), g, {
			ePrivilege: 1,
		});
	e.CanClaimItem = (e, t) =>
		e.SendMsg("SaleItemRewards.CanClaimItem#1", I8(h, t), C, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetRewardDefinitions = (e, t) =>
		e.SendMsg("SaleItemRewards.GetRewardDefinitions#1", I8(f, t), b, {
			bConstMethod: true,
			ePrivilege: 4,
		});
	e.SetRewardDefinitions = (e, t) =>
		e.SendMsg("SaleItemRewards.SetRewardDefinitions#1", I8(y, t), S, {
			ePrivilege: 4,
		});
	e.GetClaimedSaleRewards = (e, t) =>
		e.SendMsg("SaleItemRewards.GetClaimedSaleRewards#1", I8(w, t), B, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetCurrentDefinition = (e, t) =>
		e.SendMsg("SaleItemRewards.GetCurrentDefinition#1", I8(v, t), I, {
			bConstMethod: true,
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
})((E ||= {}));
class L {
	m_claimState = {
		bCanClaimNewItem: false,
		bAlreadyClaimedCurrentItem: false,
	};
	m_claimedFreeItemDef;
	m_rtNextClaimTime;
	m_claimTimer;
	m_SteamInterface = null;
	m_canClaimPromise = null;
	m_claimPromise = null;
	m_claimStateChangeCallback = new D.lu();
	m_testNextClaimFakeResponse = null;
	m_bInTestMode = false;
	GetClaimItemState() {
		return this.m_claimState;
	}
	GetClaimStateChangeCallback() {
		return this.m_claimStateChangeCallback;
	}
	GetClaimedSaleRewardItemDef() {
		return this.m_claimedFreeItemDef;
	}
	GetNextClaimTime() {
		if (!this.m_rtNextClaimTime) {
			return null;
		}
		return new Date(this.m_rtNextClaimTime * 1000);
	}
	TEST_OverrideClaimState(e) {
		this.m_bInTestMode = true;
		this.m_canClaimPromise = null;
		this.m_claimPromise = null;
		if (e.bCanClaimNewItem) {
			this.m_testNextClaimFakeResponse = {
				bAlreadyClaimedCurrentItem: true,
				bCanClaimNewItem: false,
				rtNextClaimTime: Math.floor(Date.now() / 1000) + 3600,
				appid: 2243810,
				community_item_type: 2,
				community_item_class: 11,
			};
		} else {
			this.m_testNextClaimFakeResponse = null;
		}
		this.m_claimState = e;
		this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
	}
	async ActivateProfileModifier(e) {
		const t = i.w.Init(G.fp);
		t.Body().set_communityitemid(e.communityitemid);
		t.Body().set_appid(e.appid);
		t.Body().set_activate(true);
		const r = await G.uy.ActivateProfileModifierItem(
			this.m_SteamInterface.GetServiceTransport(),
			t,
		);
		if (r.GetEResult() != 1) {
			console.error(
				`Error when calling QuestService.ActivateProfileModifierItem: EResult=${r.GetEResult()}`,
			);
		}
		return r.GetEResult();
	}
	async LoadCanUserClaimItem() {
		if (this.m_bInTestMode) {
			return this.m_claimState;
		} else {
			this.m_canClaimPromise ||= this.InternalLoadCanUserClaimItem();
			return this.m_canClaimPromise;
		}
	}
	async InternalLoadCanUserClaimItem() {
		w_1(
			T.iA.logged_in,
			"User must be logged to use CSaleItemClaimableRewardsStore",
		);
		const e = i.w.Init(h);
		e.Body().set_language(T.TS.LANGUAGE);
		let t = null;
		try {
			const r = await E.CanClaimItem(
				this.m_SteamInterface.GetServiceTransport(),
				e,
			);
			if (r.GetEResult() == 1) {
				this.m_claimedFreeItemDef = Boolean(r.Body().reward_item()?.defid())
					? r.Body().reward_item().toObject()
					: null;
				this.m_claimState = {
					bCanClaimNewItem: r.Body().can_claim(),
					bAlreadyClaimedCurrentItem: Boolean(this.m_claimedFreeItemDef),
					appid: this.m_claimedFreeItemDef?.appid,
					community_item_type: this.m_claimedFreeItemDef?.community_item_type,
					community_item_class: this.m_claimedFreeItemDef?.community_item_class,
					rtNextClaimTime:
						r.Body().next_claim_time() > 0
							? r.Body().next_claim_time()
							: undefined,
				};
				this.m_rtNextClaimTime = r.Body().next_claim_time();
				this.SetClaimTimer();
				this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
				return this.m_claimState;
			}
			t = H(r);
		} catch (e) {
			t = H(e);
		}
		console.error(
			`CSaleItemClaimableRewardsStore.InternalLoadCanUserClaimItem failed: error: ${t?.strErrorMsg}`,
			t,
		);
		return {
			bCanClaimNewItem: false,
			bAlreadyClaimedCurrentItem: false,
		};
	}
	async UserClaimItem() {
		if (this.m_testNextClaimFakeResponse) {
			console.log(
				"CSaleItemClaimableRewardsStore - testing, pretending claim action succeeded",
				HO(this.m_testNextClaimFakeResponse),
			);
			this.m_claimState = this.m_testNextClaimFakeResponse;
			this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
			this.m_rtNextClaimTime = this.m_claimState.rtNextClaimTime;
			this.SetClaimTimer();
			this.m_testNextClaimFakeResponse = null;
		}
		if (this.m_bInTestMode) {
			return this.m_claimState;
		} else {
			this.m_claimPromise ||= this.InternalUserClaimItem();
			return this.m_claimPromise;
		}
	}
	async InternalUserClaimItem() {
		w_1(
			T.iA.logged_in,
			"User must be logged to use CSaleItemClaimableRewardsStore",
		);
		w_1(
			this.m_claimState.bCanClaimNewItem,
			"Only should be called when we previously verified you can claim something. ",
		);
		const e = i.w.Init(p);
		e.Body().set_language(T.TS.LANGUAGE);
		let t = null;
		try {
			const r = await E.ClaimItem(
				this.m_SteamInterface.GetServiceTransport(),
				e,
			);
			if (r.GetEResult() == 1) {
				this.m_claimedFreeItemDef = r.Body().reward_item().toObject();
				this.m_claimState = {
					bCanClaimNewItem: false,
					bAlreadyClaimedCurrentItem: Boolean(this.m_claimedFreeItemDef),
					appid: this.m_claimedFreeItemDef.appid,
					community_item_type: this.m_claimedFreeItemDef.community_item_type,
					community_item_class: this.m_claimedFreeItemDef.community_item_class,
					rtNextClaimTime:
						r.Body().next_claim_time() > 0
							? r.Body().next_claim_time()
							: undefined,
				};
				this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
				this.m_rtNextClaimTime = r.Body().next_claim_time();
				this.SetClaimTimer();
				return this.m_claimState;
			}
			if (r.GetEResult() == 29) {
				this.m_canClaimPromise = this.InternalLoadCanUserClaimItem();
				return this.m_canClaimPromise;
			}
			t = H(r);
		} catch (e) {
			t = H(e);
		}
		console.error(
			`CSaleItemClaimableRewardsStore.InternalUserClaimItem failed: error: ${t?.strErrorMsg}`,
			t,
		);
		return {
			bCanClaimNewItem: false,
			bAlreadyClaimedCurrentItem: false,
		};
	}
	SetClaimTimer() {
		if (this.m_claimTimer) {
			return;
		}
		if (!this.m_rtNextClaimTime) {
			return;
		}
		const e = Date.now();
		let t = new Date(this.m_rtNextClaimTime * 1000);
		const r = Math.max(0, Math.min(1, t.getTime() - e));
		this.m_claimTimer = window.setTimeout(
			() => {
				this.m_claimTimer = undefined;
				if (Date.now() > t.getTime()) {
					this.m_canClaimPromise = null;
					this.m_claimPromise = null;
					this.m_claimedFreeItemDef = null;
					this.m_claimState = {
						bCanClaimNewItem: true,
						bAlreadyClaimedCurrentItem: false,
						rtNextClaimTime: undefined,
					};
					this.GetClaimStateChangeCallback().Dispatch(this.m_claimState);
				} else {
					this.SetClaimTimer();
				}
			},
			r > 300000 ? r / 2 : r,
		);
	}
	static s_Singleton;
	static Get() {
		if (!L.s_Singleton) {
			L.s_Singleton = new L();
			L.s_Singleton.Init();
			if (T.TS.WEB_UNIVERSE == "dev") {
				window.g_SaleItemClaimableRewardsStore = L.s_Singleton;
			}
		}
		return L.s_Singleton;
	}
	constructor() {}
	Init() {
		const e = Tc("loyalty_webapi_token", "application_config");
		w_1(
			e,
			"CQuestCommunityInventoryStore: missing loyalty_webapi_token oauth permission",
		);
		this.m_SteamInterface = new a.D(T.TS.WEBAPI_BASE_URL, e);
	}
}
export function Oz() {
	const [e, t] = useState(L.Get().GetClaimItemState());
	const [r, n] = useState(true);
	useEffect(() => {
		L.Get()
			.LoadCanUserClaimItem()
			.then(t)
			.finally(() => n(false));
	}, []);
	hL(L.Get().GetClaimStateChangeCallback(), t);
	return {
		...e,
		bLoading: r,
	};
}
export function CC() {
	return {
		fnClaimItem: L.Get().UserClaimItem,
	};
}
export async function ns(e) {
	return L.Get().ActivateProfileModifier(e);
}
export function Qt(e, t, r) {
	const n = KV();
	return I_1({
		queryKey: [`SaleRewardsGetDefinition_${e}_${t}_${r}`],
		queryFn: async () =>
			(async (e, t, r, n) => {
				const a = i.w.Init(v);
				a.Body().set_sale_def_type(t);
				a.Body().set_language(r);
				a.Body().set_include_community_item_def(n);
				return (await E.GetCurrentDefinition(e, a)).Body().toObject();
			})(n, e, t, r),
		staleTime: Infinity,
	});
}
export function os(e, t, r, n) {
	const a = KV();
	return I_1({
		queryKey: [`GetClaimedSaleRewards_${e}_${t}_${r}_${n}`],
		queryFn: async () =>
			(async (e, t, r, n) => {
				const a = i.w.Init(w);
				a.Body().set_sale_def_type(t);
				a.Body().set_language(r);
				a.Body().set_include_community_item_def(n);
				return (await E.GetClaimedSaleRewards(e, a)).Body().toObject();
			})(a, e, t, r),
		staleTime: Infinity,
	});
}
Cg([N.oI], L.prototype, "TEST_OverrideClaimState", null);
Cg([N.oI], L.prototype, "UserClaimItem", null);
