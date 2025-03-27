import n from "./58663.js";
import i from "./48307.js";
const n_Message = n.Message;
export class S7 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S7.prototype.sale_filter) {
			i.Sg(S7.M());
		}
		n_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S7.sm_m ||= {
			proto: S7,
			fields: {
				sale_filter: {
					n: 1,
					c: hw,
				},
				content_hub_filter: {
					n: 2,
					c: rd,
				},
				store_filters: {
					n: 3,
					c: m,
					r: true,
					q: true,
				},
			},
		};
		return S7.sm_m;
	}
	static MBF() {
		S7.sm_mbf ||= i.w0(S7.M());
		return S7.sm_mbf;
	}
	toObject(e = false) {
		return S7.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(S7.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(S7.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new S7();
		return S7.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(S7.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		S7.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(S7.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		S7.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorePageFilter";
	}
}
export class hw extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!hw.prototype.sale_tagid) {
			i.Sg(hw.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		hw.sm_m ||= {
			proto: hw,
			fields: {
				sale_tagid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return hw.sm_m;
	}
	static MBF() {
		hw.sm_mbf ||= i.w0(hw.M());
		return hw.sm_mbf;
	}
	toObject(e = false) {
		return hw.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(hw.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(hw.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new hw();
		return hw.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(hw.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		hw.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(hw.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		hw.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorePageFilter_SalePageFilter";
	}
}
export class rd extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!rd.prototype.hub_type) {
			i.Sg(rd.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		rd.sm_m ||= {
			proto: rd,
			fields: {
				hub_type: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				hub_category: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				hub_tagid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				discount_filter: {
					n: 4,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				optin: {
					n: 5,
					c: Q7,
				},
			},
		};
		return rd.sm_m;
	}
	static MBF() {
		rd.sm_mbf ||= i.w0(rd.M());
		return rd.sm_mbf;
	}
	toObject(e = false) {
		return rd.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(rd.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(rd.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new rd();
		return rd.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(rd.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		rd.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(rd.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		rd.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorePageFilter_ContentHubFilter";
	}
}
export class Q7 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q7.prototype.name) {
			i.Sg(Q7.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q7.sm_m ||= {
			proto: Q7,
			fields: {
				name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				optin_tagid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				prune_tagid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				optin_only: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Q7.sm_m;
	}
	static MBF() {
		Q7.sm_mbf ||= i.w0(Q7.M());
		return Q7.sm_mbf;
	}
	toObject(e = false) {
		return Q7.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Q7.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Q7.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Q7();
		return Q7.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Q7.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Q7.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Q7.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Q7.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorePageFilter_ContentHubFilter_OptInInfo";
	}
}
class m extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.filter_json) {
			i.Sg(m.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				filter_json: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				cache_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CStorePageFilter_StoreFilter";
	}
}
