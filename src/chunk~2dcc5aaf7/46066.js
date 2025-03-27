import n from "./58663.js";
import i from "./48307.js";
const n_Message = n.Message;
export class d_ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d_.prototype.steamid_clans) {
			i.Sg(d_.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d_.sm_m ||= {
			proto: d_,
			fields: {
				steamid_clans: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
			},
		};
		return d_.sm_m;
	}
	static MBF() {
		d_.sm_mbf ||= i.w0(d_.M());
		return d_.sm_mbf;
	}
	toObject(e = false) {
		return d_.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(d_.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(d_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new d_();
		return d_.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(d_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		d_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(d_.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		d_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientGetClanActivityCounts";
	}
}
export class R2 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R2.prototype.count_new_items) {
			i.Sg(R2.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R2.sm_m ||= {
			proto: R2,
			fields: {
				count_new_items: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				unseen_items: {
					n: 2,
					c: l,
					r: true,
					q: true,
				},
			},
		};
		return R2.sm_m;
	}
	static MBF() {
		R2.sm_mbf ||= i.w0(R2.M());
		return R2.sm_mbf;
	}
	toObject(e = false) {
		return R2.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(R2.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(R2.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new R2();
		return R2.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(R2.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		R2.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(R2.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		R2.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientItemAnnouncements";
	}
}
class l extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.appid) {
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
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				context_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				asset_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				amount: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				rtime32_gained: {
					n: 5,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				source_appid: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CMsgClientItemAnnouncements_UnseenItem";
	}
}
export class dA extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!dA.prototype.offline_messages) {
			i.Sg(dA.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		dA.sm_m ||= {
			proto: dA,
			fields: {
				offline_messages: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				friends_with_offline_messages: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return dA.sm_m;
	}
	static MBF() {
		dA.sm_mbf ||= i.w0(dA.M());
		return dA.sm_mbf;
	}
	toObject(e = false) {
		return dA.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(dA.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(dA.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new dA();
		return dA.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(dA.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		dA.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(dA.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		dA.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientOfflineMessageNotification";
	}
}
export class oe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return oe.toObject(e, this);
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
		return new oe();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new oe();
		return oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientRequestOfflineMessageCount";
	}
}
export class A7 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A7.prototype.published_file_id) {
			i.Sg(A7.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A7.sm_m ||= {
			proto: A7,
			fields: {
				published_file_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				vote_up: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return A7.sm_m;
	}
	static MBF() {
		A7.sm_mbf ||= i.w0(A7.M());
		return A7.sm_mbf;
	}
	toObject(e = false) {
		return A7.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(A7.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(A7.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new A7();
		return A7.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(A7.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		A7.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(A7.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		A7.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgCREUpdateUserPublishedItemVote";
	}
}
export class DA extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!DA.prototype.eresult) {
			i.Sg(DA.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		DA.sm_m ||= {
			proto: DA,
			fields: {
				eresult: {
					n: 1,
					d: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return DA.sm_m;
	}
	static MBF() {
		DA.sm_mbf ||= i.w0(DA.M());
		return DA.sm_mbf;
	}
	toObject(e = false) {
		return DA.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(DA.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(DA.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new DA();
		return DA.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(DA.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		DA.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(DA.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		DA.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgCREUpdateUserPublishedItemVoteResponse";
	}
}
export class LZ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!LZ.prototype.published_file_ids) {
			i.Sg(LZ.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		LZ.sm_m ||= {
			proto: LZ,
			fields: {
				published_file_ids: {
					n: 1,
					c: p,
					r: true,
					q: true,
				},
			},
		};
		return LZ.sm_m;
	}
	static MBF() {
		LZ.sm_mbf ||= i.w0(LZ.M());
		return LZ.sm_mbf;
	}
	toObject(e = false) {
		return LZ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(LZ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(LZ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new LZ();
		return LZ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(LZ.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		LZ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(LZ.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		LZ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgCREGetUserPublishedItemVoteDetails";
	}
}
class p extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.published_file_id) {
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
				published_file_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId";
	}
}
export class ke extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ke.prototype.eresult) {
			i.Sg(ke.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ke.sm_m ||= {
			proto: ke,
			fields: {
				eresult: {
					n: 1,
					d: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				user_item_vote_details: {
					n: 2,
					c: h,
					r: true,
					q: true,
				},
			},
		};
		return ke.sm_m;
	}
	static MBF() {
		ke.sm_mbf ||= i.w0(ke.M());
		return ke.sm_mbf;
	}
	toObject(e = false) {
		return ke.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ke.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ke.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ke();
		return ke.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ke.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ke.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgCREGetUserPublishedItemVoteDetailsResponse";
	}
}
class h extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.published_file_id) {
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
				published_file_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				vote: {
					n: 2,
					d: 0,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail";
	}
}
export class c_ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c_.prototype.appid) {
			i.Sg(c_.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c_.sm_m ||= {
			proto: c_,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				badge_level: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return c_.sm_m;
	}
	static MBF() {
		c_.sm_mbf ||= i.w0(c_.M());
		return c_.sm_mbf;
	}
	toObject(e = false) {
		return c_.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(c_.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(c_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new c_();
		return c_.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(c_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		c_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(c_.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		c_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgBadgeCraftedNotification";
	}
}
