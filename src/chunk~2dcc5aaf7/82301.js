var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
const s = n.Message;
class o extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!o.prototype.communityitemid) {
			i.Sg(o.M());
		}
		s.initialize(this, e, 0, -1, [5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		o.sm_m ||= {
			proto: o,
			fields: {
				communityitemid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				item_type: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				owner: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				attributes: {
					n: 5,
					c: l,
					r: true,
					q: true,
				},
				used: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				owner_origin: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				amount: {
					n: 8,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
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
		var e = new n.BinaryWriter();
		o.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(o.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		o.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_CommunityItem";
	}
}
class l extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.attributeid) {
			i.Sg(l.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		l.sm_m ||= {
			proto: l,
			fields: {
				attributeid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				value: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		var e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(l.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_CommunityItem_Attribute";
	}
}
export class cU extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!cU.prototype.filter_appids) {
			i.Sg(cU.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		cU.sm_m ||= {
			proto: cU,
			fields: {
				filter_appids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return cU.sm_m;
	}
	static MBF() {
		cU.sm_mbf ||= i.w0(cU.M());
		return cU.sm_mbf;
	}
	toObject(e = false) {
		return cU.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(cU.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(cU.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new cU();
		return cU.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(cU.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		cU.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(cU.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		cU.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_GetCommunityInventory_Request";
	}
}
class m extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.items) {
			i.Sg(m.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				items: {
					n: 1,
					c: o,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(m.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_GetCommunityInventory_Response";
	}
}
export class RG extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!RG.prototype.appid) {
			i.Sg(RG.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		RG.sm_m ||= {
			proto: RG,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				item_type: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				language: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				broadcast_channel_id: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				keyvalues_as_json: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return RG.sm_m;
	}
	static MBF() {
		RG.sm_mbf ||= i.w0(RG.M());
		return RG.sm_mbf;
	}
	toObject(e = false) {
		return RG.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(RG.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(RG.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new RG();
		return RG.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(RG.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		RG.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(RG.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		RG.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_GetCommunityItemDefinitions_Request";
	}
}
class d extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.item_definitions) {
			i.Sg(d.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				item_definitions: {
					n: 1,
					c: A,
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
		var e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(d.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_GetCommunityItemDefinitions_Response";
	}
}
class A extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.item_type) {
			i.Sg(A.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				item_type: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				item_name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_title: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_description: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_image_small: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_image_large: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_key_values: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_series: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				item_class: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				editor_accountid: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				active: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				item_image_composed: {
					n: 13,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_image_composed_foil: {
					n: 14,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				deleted: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				item_last_changed: {
					n: 16,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				broadcast_channel_id: {
					n: 17,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				item_movie_webm: {
					n: 18,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_movie_mp4: {
					n: 19,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_movie_webm_small: {
					n: 20,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_movie_mp4_small: {
					n: 21,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_internal_name: {
					n: 22,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		var e = new n.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(A.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
	}
}
export class fp extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!fp.prototype.appid) {
			i.Sg(fp.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		fp.sm_m ||= {
			proto: fp,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				communityitemid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				activate: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return fp.sm_m;
	}
	static MBF() {
		fp.sm_mbf ||= i.w0(fp.M());
		return fp.sm_mbf;
	}
	toObject(e = false) {
		return fp.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(fp.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(fp.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new fp();
		return fp.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(fp.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		fp.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(fp.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		fp.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_ActivateProfileModifierItem_Request";
	}
}
class g extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new g();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_ActivateProfileModifierItem_Response";
	}
}
class h extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.timestamp_start) {
			i.Sg(h.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				timestamp_start: {
					n: 1,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				timestamp_end: {
					n: 2,
					d: 4294967295,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(h.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_GetNumTradingCardsEarned_Request";
	}
}
class C extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.num_trading_cards) {
			i.Sg(C.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				num_trading_cards: {
					n: 1,
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
		var e = new n.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(C.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_GetNumTradingCardsEarned_Response";
	}
}
class _ extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.eventid) {
			i.Sg(_.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				eventid: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				include_inactive: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		var e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_VirtualItemRewardDefinition_Request";
	}
}
class f extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.eventid) {
			i.Sg(f.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				eventid: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				item_bucket: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				active: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				rarity: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				package_to_grant: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				game_item_id: {
					n: 7,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				community_item_class: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				community_item_type: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				loyalty_point_type: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				amount: {
					n: 11,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				rtime_time_active: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				loyalty_reward_defid: {
					n: 13,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				user_badge_to_grant: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				user_badge_level: {
					n: 15,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				virtual_item_def_id: {
					n: 16,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(f.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVirtualItemRewardDefinition";
	}
}
class b extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.rewards) {
			i.Sg(b.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				rewards: {
					n: 1,
					c: f,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(b.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_VirtualItemRewardDefinition_Response";
	}
}
class y extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.eventid) {
			i.Sg(y.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				eventid: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				itemsdefs: {
					n: 2,
					c: f,
					r: true,
					q: true,
				},
				action: {
					n: 3,
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
		var e = new n.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(y.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_SetVirtualItemRewardDefinition_Request";
	}
}
class S extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		if (e) {
			return {
				$jspbMessageInstance: t,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new S();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CQuest_SetVirtualItemRewardDefinition_Response";
	}
}
export var uy;
(function (e) {
	e.GetCommunityInventory = function (e, t) {
		return e.SendMsg("Quest.GetCommunityInventory#1", (0, a.I8)(cU, t), m, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
	e.GetCommunityItemDefinitions = function (e, t) {
		return e.SendMsg(
			"Quest.GetCommunityItemDefinitions#1",
			(0, a.I8)(RG, t),
			d,
			{
				bConstMethod: true,
				ePrivilege: 2,
				eWebAPIKeyRequirement: 4,
			},
		);
	};
	e.ActivateProfileModifierItem = function (e, t) {
		return e.SendMsg(
			"Quest.ActivateProfileModifierItem#1",
			(0, a.I8)(fp, t),
			g,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetNumTradingCardsEarned = function (e, t) {
		return e.SendMsg("Quest.GetNumTradingCardsEarned#1", (0, a.I8)(h, t), C, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
	e.GetVirtualItemRewardDefinition = function (e, t) {
		return e.SendMsg(
			"Quest.GetVirtualItemRewardDefinition#1",
			(0, a.I8)(_, t),
			b,
			{
				bConstMethod: true,
				ePrivilege: 4,
			},
		);
	};
	e.SetVirtualItemRewardDefinition = function (e, t) {
		return e.SendMsg(
			"Quest.SetVirtualItemRewardDefinition#1",
			(0, a.I8)(y, t),
			S,
			{
				ePrivilege: 4,
			},
		);
	};
})((uy ||= {}));
