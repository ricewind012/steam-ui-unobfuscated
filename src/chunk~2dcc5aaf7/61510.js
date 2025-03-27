import { Localize } from "../../actual_src/utils/localization.js";
const a = i;
const g = A.Message;
class h extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.unique_name) {
			p.Sg(h.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				unique_name: {
					n: 1,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= p.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(h.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(h.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_CreateBroadcastChannel_Request";
	}
}
class C extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.broadcast_channel_id) {
			p.Sg(C.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return C.sm_m;
	}
	static MBF() {
		C.sm_mbf ||= p.w0(C.M());
		return C.sm_mbf;
	}
	toObject(e = false) {
		return C.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(C.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(C.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(C.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(C.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_CreateBroadcastChannel_Response";
	}
}
class _ extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.unique_name) {
			p.Sg(_.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				unique_name: {
					n: 1,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= p.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(_.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelID_Request";
	}
}
class f extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.broadcast_channel_id) {
			p.Sg(f.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				unique_name: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				steamid: {
					n: 3,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return f.sm_m;
	}
	static MBF() {
		f.sm_mbf ||= p.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(f.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(f.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelID_Response";
	}
}
class b extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.broadcast_channel_id) {
			p.Sg(b.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				name: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				language: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				headline: {
					n: 4,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				summary: {
					n: 5,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				avatar_hash: {
					n: 6,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				schedule: {
					n: 7,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				rules: {
					n: 8,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				panels: {
					n: 9,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= p.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(b.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_SetBroadcastChannelProfile_Request";
	}
}
class y extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return y.toObject(e, this);
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
		return new y();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_SetBroadcastChannelProfile_Response";
	}
}
class S extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.broadcast_channel_id) {
			p.Sg(S.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= p.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(S.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelProfile_Request";
	}
}
class w extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.unique_name) {
			p.Sg(w.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				unique_name: {
					n: 1,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				owner_steamid: {
					n: 2,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				name: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				language: {
					n: 4,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				headline: {
					n: 5,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				summary: {
					n: 6,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				schedule: {
					n: 7,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				rules: {
					n: 8,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				panels: {
					n: 9,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				is_partnered: {
					n: 10,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return w.sm_m;
	}
	static MBF() {
		w.sm_mbf ||= p.w0(w.M());
		return w.sm_mbf;
	}
	toObject(e = false) {
		return w.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(w.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(w.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(w.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(w.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelProfile_Response";
	}
}
class B extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.broadcast_channel_id) {
			p.Sg(B.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				image_type: {
					n: 2,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
				},
				image_index: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				image_width: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				image_height: {
					n: 5,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				file_size: {
					n: 6,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				file_extension: {
					n: 7,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				file_hash: {
					n: 8,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				undo: {
					n: 9,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= p.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(B.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(B.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_SetBroadcastChannelImage_Request";
	}
}
class v extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.replace_image_hash) {
			p.Sg(v.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				replace_image_hash: {
					n: 1,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return v.sm_m;
	}
	static MBF() {
		v.sm_mbf ||= p.w0(v.M());
		return v.sm_mbf;
	}
	toObject(e = false) {
		return v.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(v.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(v.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(v.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(v.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_SetBroadcastChannelImage_Response";
	}
}
class I extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.broadcast_channel_id) {
			p.Sg(I.M());
		}
		g.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				image_types: {
					n: 2,
					r: true,
					q: true,
					br: p.qM.readEnum,
					pbr: p.qM.readPackedEnum,
					bw: p.gp.writeRepeatedEnum,
				},
			},
		};
		return I.sm_m;
	}
	static MBF() {
		I.sm_mbf ||= p.w0(I.M());
		return I.sm_mbf;
	}
	toObject(e = false) {
		return I.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(I.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(I.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(I.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(I.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelImages_Request";
	}
}
class E extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.images) {
			p.Sg(E.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				images: {
					n: 1,
					c: M,
					r: true,
					q: true,
				},
			},
		};
		return E.sm_m;
	}
	static MBF() {
		E.sm_mbf ||= p.w0(E.M());
		return E.sm_mbf;
	}
	toObject(e = false) {
		return E.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(E.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(E.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new E();
		return E.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(E.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(E.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelImages_Response";
	}
}
class M extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.image_type) {
			p.Sg(M.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				image_type: {
					n: 1,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
				},
				image_path: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				image_index: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
			},
		};
		return M.sm_m;
	}
	static MBF() {
		M.sm_mbf ||= p.w0(M.M());
		return M.sm_mbf;
	}
	toObject(e = false) {
		return M.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(M.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(M.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(M.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(M.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelImages_Response_Images";
	}
}
class T extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.broadcast_channel_id) {
			p.Sg(T.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return T.sm_m;
	}
	static MBF() {
		T.sm_mbf ||= p.w0(T.M());
		return T.sm_mbf;
	}
	toObject(e = false) {
		return T.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(T.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(T.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new T();
		return T.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(T.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(T.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelLinks_Request";
	}
}
class R extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.links) {
			p.Sg(R.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				links: {
					n: 1,
					c: k,
					r: true,
					q: true,
				},
			},
		};
		return R.sm_m;
	}
	static MBF() {
		R.sm_mbf ||= p.w0(R.M());
		return R.sm_mbf;
	}
	toObject(e = false) {
		return R.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(R.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(R.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new R();
		return R.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(R.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(R.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelLinks_Response";
	}
}
class k extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.link_index) {
			p.Sg(k.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				link_index: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				url: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				link_description: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				left: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				top: {
					n: 5,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				width: {
					n: 6,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				height: {
					n: 7,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
			},
		};
		return k.sm_m;
	}
	static MBF() {
		k.sm_mbf ||= p.w0(k.M());
		return k.sm_mbf;
	}
	toObject(e = false) {
		return k.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(k.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(k.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new k();
		return k.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(k.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(k.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
	}
}
class D extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.broadcast_channel_id) {
			p.Sg(D.M());
		}
		g.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				links: {
					n: 2,
					c: N,
					r: true,
					q: true,
				},
			},
		};
		return D.sm_m;
	}
	static MBF() {
		D.sm_mbf ||= p.w0(D.M());
		return D.sm_mbf;
	}
	toObject(e = false) {
		return D.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(D.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(D.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(D.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(D.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
	}
}
class N extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.link_index) {
			p.Sg(N.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				link_index: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				url: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				link_description: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				left: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				top: {
					n: 5,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				width: {
					n: 6,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				height: {
					n: 7,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
			},
		};
		return N.sm_m;
	}
	static MBF() {
		N.sm_mbf ||= p.w0(N.M());
		return N.sm_mbf;
	}
	toObject(e = false) {
		return N.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(N.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(N.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new N();
		return N.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(N.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(N.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
	}
}
class F extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return F.toObject(e, this);
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
		return new F();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new F();
		return F.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
	}
}
class G extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.broadcast_channel_id) {
			p.Sg(G.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return G.sm_m;
	}
	static MBF() {
		G.sm_mbf ||= p.w0(G.M());
		return G.sm_mbf;
	}
	toObject(e = false) {
		return G.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(G.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(G.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new G();
		return G.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(G.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(G.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelStatus_Request";
	}
}
class O extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.is_live) {
			p.Sg(O.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O.sm_m ||= {
			proto: O,
			fields: {
				is_live: {
					n: 1,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				is_disabled: {
					n: 2,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				appid: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				viewers: {
					n: 4,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				views: {
					n: 5,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				broadcaster_steamid: {
					n: 6,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				thumbnail_url: {
					n: 7,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				followers: {
					n: 8,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				subscribers: {
					n: 9,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				unique_name: {
					n: 10,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				broadcast_session_id: {
					n: 11,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
			},
		};
		return O.sm_m;
	}
	static MBF() {
		O.sm_mbf ||= p.w0(O.M());
		return O.sm_mbf;
	}
	toObject(e = false) {
		return O.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(O.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(O.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new O();
		return O.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(O.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(O.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelStatus_Response";
	}
}
class P extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.broadcast_channel_id) {
			p.Sg(P.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				unique_name: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				name: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				appid: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				viewers: {
					n: 5,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				views: {
					n: 6,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				thumbnail_url: {
					n: 7,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				followers: {
					n: 8,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				headline: {
					n: 9,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				avatar_url: {
					n: 10,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				broadcaster_steamid: {
					n: 11,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				subscribers: {
					n: 12,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				background_url: {
					n: 13,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				is_featured: {
					n: 14,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				is_disabled: {
					n: 15,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				is_live: {
					n: 16,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				language: {
					n: 17,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				reports: {
					n: 18,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				is_partnered: {
					n: 19,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return P.sm_m;
	}
	static MBF() {
		P.sm_mbf ||= p.w0(P.M());
		return P.sm_mbf;
	}
	toObject(e = false) {
		return P.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(P.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(P.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new P();
		return P.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(P.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(P.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "GetBroadcastChannelEntry";
	}
}
class L extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return L.toObject(e, this);
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
		return new L();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new L();
		return L.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetFollowedChannels_Request";
	}
}
class z extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.results) {
			p.Sg(z.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		z.sm_m ||= {
			proto: z,
			fields: {
				results: {
					n: 1,
					c: P,
					r: true,
					q: true,
				},
			},
		};
		return z.sm_m;
	}
	static MBF() {
		z.sm_mbf ||= p.w0(z.M());
		return z.sm_mbf;
	}
	toObject(e = false) {
		return z.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(z.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new z();
		return z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(z.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(z.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetFollowedChannels_Response";
	}
}
class x extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return x.toObject(e, this);
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
		return new x();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new x();
		return x.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetSubscribedChannels_Request";
	}
}
class U extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.results) {
			p.Sg(U.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		U.sm_m ||= {
			proto: U,
			fields: {
				results: {
					n: 1,
					c: P,
					r: true,
					q: true,
				},
			},
		};
		return U.sm_m;
	}
	static MBF() {
		U.sm_mbf ||= p.w0(U.M());
		return U.sm_mbf;
	}
	toObject(e = false) {
		return U.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(U.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(U.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new U();
		return U.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(U.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(U.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetSubscribedChannels_Response";
	}
}
class W extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W.prototype.broadcast_channel_id) {
			p.Sg(W.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W.sm_m ||= {
			proto: W,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				undo: {
					n: 2,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return W.sm_m;
	}
	static MBF() {
		W.sm_mbf ||= p.w0(W.M());
		return W.sm_mbf;
	}
	toObject(e = false) {
		return W.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(W.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(W.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new W();
		return W.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(W.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(W.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_FollowBroadcastChannel_Request";
	}
}
class V extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.is_followed) {
			p.Sg(V.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		V.sm_m ||= {
			proto: V,
			fields: {
				is_followed: {
					n: 1,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return V.sm_m;
	}
	static MBF() {
		V.sm_mbf ||= p.w0(V.M());
		return V.sm_mbf;
	}
	toObject(e = false) {
		return V.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(V.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(V.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new V();
		return V.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(V.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(V.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_FollowBroadcastChannel_Response";
	}
}
class H extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H.prototype.broadcast_channel_id) {
			p.Sg(H.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H.sm_m ||= {
			proto: H,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return H.sm_m;
	}
	static MBF() {
		H.sm_mbf ||= p.w0(H.M());
		return H.sm_mbf;
	}
	toObject(e = false) {
		return H.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(H.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(H.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new H();
		return H.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(H.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(H.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_SubscribeBroadcastChannel_Request";
	}
}
class j extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!j.prototype.is_subscribed) {
			p.Sg(j.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		j.sm_m ||= {
			proto: j,
			fields: {
				is_subscribed: {
					n: 1,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return j.sm_m;
	}
	static MBF() {
		j.sm_mbf ||= p.w0(j.M());
		return j.sm_mbf;
	}
	toObject(e = false) {
		return j.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(j.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(j.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new j();
		return j.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(j.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(j.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_SubscribeBroadcastChannel_Response";
	}
}
class _q extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_q.prototype.broadcast_channel_id) {
			p.Sg(_q.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_q.sm_m ||= {
			proto: _q,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				reason: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return _q.sm_m;
	}
	static MBF() {
		_q.sm_mbf ||= p.w0(_q.M());
		return _q.sm_mbf;
	}
	toObject(e = false) {
		return _q.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(_q.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(_q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new _q();
		return _q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(_q.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		_q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(_q.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		_q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_ReportBroadcastChannel_Request";
	}
}
class Q extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Q.toObject(e, this);
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
		return new Q();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Q();
		return Q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_ReportBroadcastChannel_Response";
	}
}
class Z extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z.prototype.broadcast_channel_id) {
			p.Sg(Z.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z.sm_m ||= {
			proto: Z,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return Z.sm_m;
	}
	static MBF() {
		Z.sm_mbf ||= p.w0(Z.M());
		return Z.sm_mbf;
	}
	toObject(e = false) {
		return Z.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Z.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Z();
		return Z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Z.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Z.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelInteraction_Request";
	}
}
class Y extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.is_followed) {
			p.Sg(Y.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Y.sm_m ||= {
			proto: Y,
			fields: {
				is_followed: {
					n: 1,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				is_subscribed: {
					n: 2,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return Y.sm_m;
	}
	static MBF() {
		Y.sm_mbf ||= p.w0(Y.M());
		return Y.sm_mbf;
	}
	toObject(e = false) {
		return Y.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Y.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Y();
		return Y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Y.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Y.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelInteraction_Response";
	}
}
class K extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K.prototype.appid) {
			p.Sg(K.M());
		}
		g.initialize(this, e, 0, -1, [5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		K.sm_m ||= {
			proto: K,
			fields: {
				appid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				name: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				image: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				viewers: {
					n: 4,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				channels: {
					n: 5,
					c: P,
					r: true,
					q: true,
				},
				release_date: {
					n: 6,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				developer: {
					n: 7,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				publisher: {
					n: 8,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return K.sm_m;
	}
	static MBF() {
		K.sm_mbf ||= p.w0(K.M());
		return K.sm_mbf;
	}
	toObject(e = false) {
		return K.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(K.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(K.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new K();
		return K.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(K.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(K.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_Game";
	}
}
class X extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!X.prototype.appid) {
			p.Sg(X.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		X.sm_m ||= {
			proto: X,
			fields: {
				appid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				algorithm: {
					n: 2,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
				},
				count: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
			},
		};
		return X.sm_m;
	}
	static MBF() {
		X.sm_mbf ||= p.w0(X.M());
		return X.sm_mbf;
	}
	toObject(e = false) {
		return X.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(X.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(X.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new X();
		return X.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(X.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(X.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetGames_Request";
	}
}
class J extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!J.prototype.results) {
			p.Sg(J.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		J.sm_m ||= {
			proto: J,
			fields: {
				results: {
					n: 1,
					c: K,
					r: true,
					q: true,
				},
			},
		};
		return J.sm_m;
	}
	static MBF() {
		J.sm_mbf ||= p.w0(J.M());
		return J.sm_mbf;
	}
	toObject(e = false) {
		return J.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(J.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(J.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new J();
		return J.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(J.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(J.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetGames_Response";
	}
}
class $ extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$.prototype.algorithm) {
			p.Sg($.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$.sm_m ||= {
			proto: $,
			fields: {
				algorithm: {
					n: 1,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
				},
				count: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				appid: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
			},
		};
		return $.sm_m;
	}
	static MBF() {
		$.sm_mbf ||= p.w0($.M());
		return $.sm_mbf;
	}
	toObject(e = false) {
		return $.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT($.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq($.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new $();
		return $.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj($.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0($.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetChannels_Request";
	}
}
class ee extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ee.prototype.results) {
			p.Sg(ee.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ee.sm_m ||= {
			proto: ee,
			fields: {
				results: {
					n: 1,
					c: P,
					r: true,
					q: true,
				},
			},
		};
		return ee.sm_m;
	}
	static MBF() {
		ee.sm_mbf ||= p.w0(ee.M());
		return ee.sm_mbf;
	}
	toObject(e = false) {
		return ee.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(ee.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(ee.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ee();
		return ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(ee.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ee.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetChannels_Response";
	}
}
class te extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!te.prototype.broadcast_channel_id) {
			p.Sg(te.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		te.sm_m ||= {
			proto: te,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return te.sm_m;
	}
	static MBF() {
		te.sm_mbf ||= p.w0(te.M());
		return te.sm_mbf;
	}
	toObject(e = false) {
		return te.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(te.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(te.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new te();
		return te.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(te.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(te.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
	}
}
class re extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.broadcasters) {
			p.Sg(re.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		re.sm_m ||= {
			proto: re,
			fields: {
				broadcasters: {
					n: 1,
					c: ne,
					r: true,
					q: true,
				},
			},
		};
		return re.sm_m;
	}
	static MBF() {
		re.sm_mbf ||= p.w0(re.M());
		return re.sm_mbf;
	}
	toObject(e = false) {
		return re.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(re.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(re.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new re();
		return re.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(re.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(re.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
	}
}
class ne extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ne.prototype.steamid) {
			p.Sg(ne.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ne.sm_m ||= {
			proto: ne,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				name: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				rtmp_token: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return ne.sm_m;
	}
	static MBF() {
		ne.sm_mbf ||= p.w0(ne.M());
		return ne.sm_mbf;
	}
	toObject(e = false) {
		return ne.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(ne.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(ne.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ne();
		return ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(ne.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ne.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
	}
}
class ie extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ie.prototype.issuer_steamid) {
			p.Sg(ie.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ie.sm_m ||= {
			proto: ie,
			fields: {
				issuer_steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				chatter_steamid: {
					n: 2,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				time_expires: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				permanent: {
					n: 4,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				name: {
					n: 5,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return ie.sm_m;
	}
	static MBF() {
		ie.sm_mbf ||= p.w0(ie.M());
		return ie.sm_mbf;
	}
	toObject(e = false) {
		return ie.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(ie.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(ie.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ie();
		return ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(ie.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ie.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_ChatBan";
	}
}
class ae extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ae.prototype.broadcast_channel_id) {
			p.Sg(ae.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ae.sm_m ||= {
			proto: ae,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				chatter_steamid: {
					n: 2,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				duration: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				permanent: {
					n: 4,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				undo: {
					n: 5,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return ae.sm_m;
	}
	static MBF() {
		ae.sm_mbf ||= p.w0(ae.M());
		return ae.sm_mbf;
	}
	toObject(e = false) {
		return ae.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(ae.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(ae.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ae();
		return ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(ae.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ae.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_AddChatBan_Request";
	}
}
class se extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return se.toObject(e, this);
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
		return new se();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new se();
		return se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_AddChatBan_Response";
	}
}
class oe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!oe.prototype.broadcast_channel_id) {
			p.Sg(oe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		oe.sm_m ||= {
			proto: oe,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return oe.sm_m;
	}
	static MBF() {
		oe.sm_mbf ||= p.w0(oe.M());
		return oe.sm_mbf;
	}
	toObject(e = false) {
		return oe.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(oe.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(oe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new oe();
		return oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(oe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(oe.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetChatBans_Request";
	}
}
class le extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!le.prototype.results) {
			p.Sg(le.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		le.sm_m ||= {
			proto: le,
			fields: {
				results: {
					n: 1,
					c: ie,
					r: true,
					q: true,
				},
			},
		};
		return le.sm_m;
	}
	static MBF() {
		le.sm_mbf ||= p.w0(le.M());
		return le.sm_mbf;
	}
	toObject(e = false) {
		return le.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(le.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(le.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new le();
		return le.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(le.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(le.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetChatBans_Response";
	}
}
class ce extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ce.prototype.broadcast_channel_id) {
			p.Sg(ce.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ce.sm_m ||= {
			proto: ce,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				moderator_steamid: {
					n: 2,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				undo: {
					n: 3,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return ce.sm_m;
	}
	static MBF() {
		ce.sm_mbf ||= p.w0(ce.M());
		return ce.sm_mbf;
	}
	toObject(e = false) {
		return ce.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(ce.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(ce.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ce();
		return ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(ce.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ce.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_AddChatModerator_Request";
	}
}
class me extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return me.toObject(e, this);
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
		return new me();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new me();
		return me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_AddChatModerator_Response";
	}
}
class ue extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ue.prototype.broadcast_channel_id) {
			p.Sg(ue.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ue.sm_m ||= {
			proto: ue,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return ue.sm_m;
	}
	static MBF() {
		ue.sm_mbf ||= p.w0(ue.M());
		return ue.sm_mbf;
	}
	toObject(e = false) {
		return ue.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(ue.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(ue.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ue();
		return ue.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(ue.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ue.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetChatModerators_Request";
	}
}
class de extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!de.prototype.steamid) {
			p.Sg(de.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		de.sm_m ||= {
			proto: de,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				name: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return de.sm_m;
	}
	static MBF() {
		de.sm_mbf ||= p.w0(de.M());
		return de.sm_mbf;
	}
	toObject(e = false) {
		return de.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(de.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(de.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new de();
		return de.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(de.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(de.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_ChatModerator";
	}
}
class Ae extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ae.prototype.results) {
			p.Sg(Ae.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ae.sm_m ||= {
			proto: Ae,
			fields: {
				results: {
					n: 1,
					c: de,
					r: true,
					q: true,
				},
			},
		};
		return Ae.sm_m;
	}
	static MBF() {
		Ae.sm_mbf ||= p.w0(Ae.M());
		return Ae.sm_mbf;
	}
	toObject(e = false) {
		return Ae.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Ae.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Ae.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Ae();
		return Ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Ae.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Ae.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetChatModerators_Response";
	}
}
class pe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pe.prototype.broadcast_channel_id) {
			p.Sg(pe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pe.sm_m ||= {
			proto: pe,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				word: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				undo: {
					n: 3,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return pe.sm_m;
	}
	static MBF() {
		pe.sm_mbf ||= p.w0(pe.M());
		return pe.sm_mbf;
	}
	toObject(e = false) {
		return pe.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(pe.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(pe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new pe();
		return pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(pe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(pe.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_AddWordBan_Request";
	}
}
class ge extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ge.toObject(e, this);
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
		return new ge();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ge();
		return ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_AddWordBan_Response";
	}
}
class he extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!he.prototype.broadcast_channel_id) {
			p.Sg(he.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		he.sm_m ||= {
			proto: he,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return he.sm_m;
	}
	static MBF() {
		he.sm_mbf ||= p.w0(he.M());
		return he.sm_mbf;
	}
	toObject(e = false) {
		return he.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(he.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(he.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new he();
		return he.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(he.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(he.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetWordBans_Request";
	}
}
class Ce extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ce.prototype.results) {
			p.Sg(Ce.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ce.sm_m ||= {
			proto: Ce,
			fields: {
				results: {
					n: 1,
					r: true,
					q: true,
					br: p.qM.readString,
					bw: p.gp.writeRepeatedString,
				},
			},
		};
		return Ce.sm_m;
	}
	static MBF() {
		Ce.sm_mbf ||= p.w0(Ce.M());
		return Ce.sm_mbf;
	}
	toObject(e = false) {
		return Ce.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Ce.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Ce.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Ce();
		return Ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Ce.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Ce.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetWordBans_Response";
	}
}
class _e extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_e.prototype.broadcast_channel_id) {
			p.Sg(_e.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_e.sm_m ||= {
			proto: _e,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return _e.sm_m;
	}
	static MBF() {
		_e.sm_mbf ||= p.w0(_e.M());
		return _e.sm_mbf;
	}
	toObject(e = false) {
		return _e.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(_e.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(_e.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new _e();
		return _e.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(_e.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(_e.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_JoinChat_Request";
	}
}
class fe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!fe.prototype.chat_id) {
			p.Sg(fe.M());
		}
		g.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		fe.sm_m ||= {
			proto: fe,
			fields: {
				chat_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				view_url_template: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				flair_group_ids: {
					n: 3,
					r: true,
					q: true,
					br: p.qM.readUint64String,
					pbr: p.qM.readPackedUint64String,
					bw: p.gp.writeRepeatedUint64String,
				},
			},
		};
		return fe.sm_m;
	}
	static MBF() {
		fe.sm_mbf ||= p.w0(fe.M());
		return fe.sm_mbf;
	}
	toObject(e = false) {
		return fe.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(fe.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(fe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new fe();
		return fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(fe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(fe.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_JoinChat_Response";
	}
}
class be extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!be.prototype.term) {
			p.Sg(be.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		be.sm_m ||= {
			proto: be,
			fields: {
				term: {
					n: 1,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return be.sm_m;
	}
	static MBF() {
		be.sm_mbf ||= p.w0(be.M());
		return be.sm_mbf;
	}
	toObject(e = false) {
		return be.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(be.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(be.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new be();
		return be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(be.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(be.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_Search_Request";
	}
}
class ye extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ye.prototype.results) {
			p.Sg(ye.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ye.sm_m ||= {
			proto: ye,
			fields: {
				results: {
					n: 1,
					c: P,
					r: true,
					q: true,
				},
			},
		};
		return ye.sm_m;
	}
	static MBF() {
		ye.sm_mbf ||= p.w0(ye.M());
		return ye.sm_mbf;
	}
	toObject(e = false) {
		return ye.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(ye.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(ye.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ye();
		return ye.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(ye.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ye.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_Search_Response";
	}
}
class Se extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Se.toObject(e, this);
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
		return new Se();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Se();
		return Se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetSteamTVUserSettings_Request";
	}
}
class we extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!we.prototype.stream_live_email) {
			p.Sg(we.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		we.sm_m ||= {
			proto: we,
			fields: {
				stream_live_email: {
					n: 1,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				stream_live_notification: {
					n: 2,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return we.sm_m;
	}
	static MBF() {
		we.sm_mbf ||= p.w0(we.M());
		return we.sm_mbf;
	}
	toObject(e = false) {
		return we.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(we.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(we.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new we();
		return we.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(we.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(we.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetSteamTVUserSettings_Response";
	}
}
class Be extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Be.prototype.stream_live_email) {
			p.Sg(Be.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Be.sm_m ||= {
			proto: Be,
			fields: {
				stream_live_email: {
					n: 1,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				stream_live_notification: {
					n: 2,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return Be.sm_m;
	}
	static MBF() {
		Be.sm_mbf ||= p.w0(Be.M());
		return Be.sm_mbf;
	}
	toObject(e = false) {
		return Be.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Be.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Be.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Be();
		return Be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Be.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Be.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_SetSteamTVUserSettings_Request";
	}
}
class ve extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ve.toObject(e, this);
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
		return new ve();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ve();
		return ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_SetSteamTVUserSettings_Response";
	}
}
class Ie extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ie.toObject(e, this);
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
		return new Ie();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Ie();
		return Ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetMyBroadcastChannels_Request";
	}
}
class Ee extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ee.prototype.results) {
			p.Sg(Ee.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ee.sm_m ||= {
			proto: Ee,
			fields: {
				results: {
					n: 1,
					c: P,
					r: true,
					q: true,
				},
			},
		};
		return Ee.sm_m;
	}
	static MBF() {
		Ee.sm_mbf ||= p.w0(Ee.M());
		return Ee.sm_mbf;
	}
	toObject(e = false) {
		return Ee.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Ee.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Ee.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Ee();
		return Ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Ee.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Ee.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetMyBroadcastChannels_Response";
	}
}
class Me extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Me.prototype.broadcasts) {
			p.Sg(Me.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Me.sm_m ||= {
			proto: Me,
			fields: {
				broadcasts: {
					n: 1,
					c: P,
					r: true,
					q: true,
				},
			},
		};
		return Me.sm_m;
	}
	static MBF() {
		Me.sm_mbf ||= p.w0(Me.M());
		return Me.sm_mbf;
	}
	toObject(e = false) {
		return Me.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Me.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Me.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Me();
		return Me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Me.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Me.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_HomePageTemplate_Takeover";
	}
}
class Te extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Te.prototype.broadcasts) {
			p.Sg(Te.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Te.sm_m ||= {
			proto: Te,
			fields: {
				broadcasts: {
					n: 1,
					c: P,
					r: true,
					q: true,
				},
				appid: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				title: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return Te.sm_m;
	}
	static MBF() {
		Te.sm_mbf ||= p.w0(Te.M());
		return Te.sm_mbf;
	}
	toObject(e = false) {
		return Te.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Te.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Te.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Te();
		return Te.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Te.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Te.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_HomePageTemplate_SingleGame";
	}
}
class Re extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Re.prototype.appid) {
			p.Sg(Re.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Re.sm_m ||= {
			proto: Re,
			fields: {
				appid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				game_name: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				broadcast: {
					n: 3,
					c: P,
				},
			},
		};
		return Re.sm_m;
	}
	static MBF() {
		Re.sm_mbf ||= p.w0(Re.M());
		return Re.sm_mbf;
	}
	toObject(e = false) {
		return Re.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Re.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Re.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Re();
		return Re.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Re.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Re.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "GameListEntry";
	}
}
class ke extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ke.prototype.entries) {
			p.Sg(ke.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ke.sm_m ||= {
			proto: ke,
			fields: {
				entries: {
					n: 1,
					c: Re,
					r: true,
					q: true,
				},
				title: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return ke.sm_m;
	}
	static MBF() {
		ke.sm_mbf ||= p.w0(ke.M());
		return ke.sm_mbf;
	}
	toObject(e = false) {
		return ke.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(ke.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(ke.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ke();
		return ke.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(ke.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ke.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_HomePageTemplate_GameList";
	}
}
class De extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!De.prototype.broadcasts) {
			p.Sg(De.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		De.sm_m ||= {
			proto: De,
			fields: {
				broadcasts: {
					n: 1,
					c: P,
					r: true,
					q: true,
				},
				title: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return De.sm_m;
	}
	static MBF() {
		De.sm_mbf ||= p.w0(De.M());
		return De.sm_mbf;
	}
	toObject(e = false) {
		return De.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(De.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(De.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new De();
		return De.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(De.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(De.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_HomePageTemplate_QuickExplore";
	}
}
class Ne extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ne.prototype.broadcasts) {
			p.Sg(Ne.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ne.sm_m ||= {
			proto: Ne,
			fields: {
				broadcasts: {
					n: 1,
					c: P,
					r: true,
					q: true,
				},
				title: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return Ne.sm_m;
	}
	static MBF() {
		Ne.sm_mbf ||= p.w0(Ne.M());
		return Ne.sm_mbf;
	}
	toObject(e = false) {
		return Ne.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Ne.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Ne.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Ne();
		return Ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Ne.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Ne.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_HomePageTemplate_ConveyorBelt";
	}
}
class Fe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Fe.prototype.broadcast) {
			p.Sg(Fe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Fe.sm_m ||= {
			proto: Fe,
			fields: {
				broadcast: {
					n: 1,
					c: P,
				},
				title: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				chat_group_id: {
					n: 3,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
			},
		};
		return Fe.sm_m;
	}
	static MBF() {
		Fe.sm_mbf ||= p.w0(Fe.M());
		return Fe.sm_mbf;
	}
	toObject(e = false) {
		return Fe.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Fe.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Fe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Fe();
		return Fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Fe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Fe.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_HomePageTemplate_WatchParty";
	}
}
class Ge extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ge.prototype.broadcast) {
			p.Sg(Ge.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ge.sm_m ||= {
			proto: Ge,
			fields: {
				broadcast: {
					n: 1,
					c: P,
				},
				title: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return Ge.sm_m;
	}
	static MBF() {
		Ge.sm_mbf ||= p.w0(Ge.M());
		return Ge.sm_mbf;
	}
	toObject(e = false) {
		return Ge.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Ge.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Ge.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Ge();
		return Ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Ge.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Ge.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_HomePageTemplate_Developer";
	}
}
class Oe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Oe.prototype.title) {
			p.Sg(Oe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Oe.sm_m ||= {
			proto: Oe,
			fields: {
				title: {
					n: 1,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return Oe.sm_m;
	}
	static MBF() {
		Oe.sm_mbf ||= p.w0(Oe.M());
		return Oe.sm_mbf;
	}
	toObject(e = false) {
		return Oe.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Oe.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Oe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Oe();
		return Oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Oe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Oe.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_HomePageTemplate_Event";
	}
}
class Pe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Pe.prototype.template_type) {
			p.Sg(Pe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Pe.sm_m ||= {
			proto: Pe,
			fields: {
				template_type: {
					n: 1,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
				},
				takeover: {
					n: 2,
					c: Me,
				},
				single_game: {
					n: 3,
					c: Te,
				},
				game_list: {
					n: 4,
					c: ke,
				},
				quick_explore: {
					n: 5,
					c: De,
				},
				conveyor_belt: {
					n: 6,
					c: Ne,
				},
				watch_party: {
					n: 7,
					c: Fe,
				},
				developer: {
					n: 8,
					c: Ge,
				},
				event: {
					n: 9,
					c: Oe,
				},
			},
		};
		return Pe.sm_m;
	}
	static MBF() {
		Pe.sm_mbf ||= p.w0(Pe.M());
		return Pe.sm_mbf;
	}
	toObject(e = false) {
		return Pe.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Pe.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Pe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Pe();
		return Pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Pe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Pe.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_HomePageContentRow";
	}
}
class Le extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Le.toObject(e, this);
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
		return new Le();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Le();
		return Le.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetHomePageContents_Request";
	}
}
class ze extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ze.prototype.rows) {
			p.Sg(ze.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ze.sm_m ||= {
			proto: ze,
			fields: {
				rows: {
					n: 1,
					c: Pe,
					r: true,
					q: true,
				},
			},
		};
		return ze.sm_m;
	}
	static MBF() {
		ze.sm_mbf ||= p.w0(ze.M());
		return ze.sm_mbf;
	}
	toObject(e = false) {
		return ze.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(ze.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(ze.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ze();
		return ze.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(ze.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		ze.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ze.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		ze.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetHomePageContents_Response";
	}
}
class xe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!xe.prototype.broadcast_channel_id) {
			p.Sg(xe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		xe.sm_m ||= {
			proto: xe,
			fields: {
				broadcast_channel_id: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return xe.sm_m;
	}
	static MBF() {
		xe.sm_mbf ||= p.w0(xe.M());
		return xe.sm_mbf;
	}
	toObject(e = false) {
		return xe.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(xe.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(xe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new xe();
		return xe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(xe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		xe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(xe.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		xe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelClips_Request";
	}
}
class Ue extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ue.prototype.broadcast_clip_id) {
			p.Sg(Ue.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ue.sm_m ||= {
			proto: Ue,
			fields: {
				broadcast_clip_id: {
					n: 1,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				channel_id: {
					n: 2,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				app_id: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				broadcaster_steamid: {
					n: 4,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				creator_steamid: {
					n: 5,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				video_description: {
					n: 6,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				live_time: {
					n: 7,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				length_ms: {
					n: 8,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				thumbnail_path: {
					n: 9,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return Ue.sm_m;
	}
	static MBF() {
		Ue.sm_mbf ||= p.w0(Ue.M());
		return Ue.sm_mbf;
	}
	toObject(e = false) {
		return Ue.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Ue.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Ue.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Ue();
		return Ue.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Ue.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Ue.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_BroadcastClipInfo";
	}
}
class We extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!We.prototype.clips) {
			p.Sg(We.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		We.sm_m ||= {
			proto: We,
			fields: {
				clips: {
					n: 1,
					c: Ue,
					r: true,
					q: true,
				},
				thumbnail_host: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return We.sm_m;
	}
	static MBF() {
		We.sm_mbf ||= p.w0(We.M());
		return We.sm_mbf;
	}
	toObject(e = false) {
		return We.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(We.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(We.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new We();
		return We.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(We.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		We.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(We.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		We.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_GetBroadcastChannelClips_Response";
	}
}
class Ve extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ve.prototype.cheer_type) {
			p.Sg(Ve.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ve.sm_m ||= {
			proto: Ve,
			fields: {
				cheer_type: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				cheer_amount: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
			},
		};
		return Ve.sm_m;
	}
	static MBF() {
		Ve.sm_mbf ||= p.w0(Ve.M());
		return Ve.sm_mbf;
	}
	toObject(e = false) {
		return Ve.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Ve.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Ve.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Ve();
		return Ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Ve.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Ve.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_AppCheer_SingleCheerType";
	}
}
class He extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!He.prototype.app_id) {
			p.Sg(He.M());
		}
		g.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		He.sm_m ||= {
			proto: He,
			fields: {
				app_id: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				cheer_target_id: {
					n: 2,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				cheers: {
					n: 3,
					c: Ve,
					r: true,
					q: true,
				},
			},
		};
		return He.sm_m;
	}
	static MBF() {
		He.sm_mbf ||= p.w0(He.M());
		return He.sm_mbf;
	}
	toObject(e = false) {
		return He.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(He.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(He.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new He();
		return He.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(He.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		He.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(He.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		He.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_AppCheer_Request";
	}
}
class je extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!je.prototype.aggregation_delay_ms) {
			p.Sg(je.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		je.sm_m ||= {
			proto: je,
			fields: {
				aggregation_delay_ms: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
			},
		};
		return je.sm_m;
	}
	static MBF() {
		je.sm_mbf ||= p.w0(je.M());
		return je.sm_mbf;
	}
	toObject(e = false) {
		return je.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(je.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(je.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new je();
		return je.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(je.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		je.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(je.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		je.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamTV_AppCheer_Response";
	}
}
let qe;
((e) => {
	e.CreateBroadcastChannel = (e, t) =>
		e.SendMsg("SteamTV.CreateBroadcastChannel#1", (0, l.I8)(h, t), C, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetBroadcastChannelID = (e, t) =>
		e.SendMsg("SteamTV.GetBroadcastChannelID#1", (0, l.I8)(_, t), f, {
			bConstMethod: true,
			ePrivilege: 0,
		});
	e.SetBroadcastChannelProfile = (e, t) =>
		e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", (0, l.I8)(b, t), y, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetBroadcastChannelProfile = (e, t) =>
		e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", (0, l.I8)(S, t), w, {
			bConstMethod: true,
			ePrivilege: 0,
		});
	e.SetBroadcastChannelImage = (e, t) =>
		e.SendMsg("SteamTV.SetBroadcastChannelImage#1", (0, l.I8)(B, t), v, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetBroadcastChannelImages = (e, t) =>
		e.SendMsg("SteamTV.GetBroadcastChannelImages#1", (0, l.I8)(I, t), E, {
			bConstMethod: true,
			ePrivilege: 0,
		});
	e.SetBroadcastChannelLinkRegions = (e, t) =>
		e.SendMsg("SteamTV.SetBroadcastChannelLinkRegions#1", (0, l.I8)(D, t), F, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetBroadcastChannelLinks = (e, t) =>
		e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", (0, l.I8)(T, t), R, {
			bConstMethod: true,
			ePrivilege: 0,
		});
	e.GetBroadcastChannelBroadcasters = (e, t) =>
		e.SendMsg(
			"SteamTV.GetBroadcastChannelBroadcasters#1",
			(0, l.I8)(te, t),
			re,
			{
				bConstMethod: true,
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	e.GetFollowedChannels = (e, t) =>
		e.SendMsg("SteamTV.GetFollowedChannels#1", (0, l.I8)(L, t), z, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetSubscribedChannels = (e, t) =>
		e.SendMsg("SteamTV.GetSubscribedChannels#1", (0, l.I8)(x, t), U, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetBroadcastChannelStatus = (e, t) =>
		e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", (0, l.I8)(G, t), O, {
			bConstMethod: true,
			ePrivilege: 0,
		});
	e.FollowBroadcastChannel = (e, t) =>
		e.SendMsg("SteamTV.FollowBroadcastChannel#1", (0, l.I8)(W, t), V, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.SubscribeBroadcastChannel = (e, t) =>
		e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", (0, l.I8)(H, t), j, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetBroadcastChannelClips = (e, t) =>
		e.SendMsg("SteamTV.GetBroadcastChannelClips#1", (0, l.I8)(xe, t), We, {
			bConstMethod: true,
			ePrivilege: 0,
		});
	e.ReportBroadcastChannel = (e, t) =>
		e.SendMsg("SteamTV.ReportBroadcastChannel#1", (0, l.I8)(_q, t), Q, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetBroadcastChannelInteraction = (e, t) =>
		e.SendMsg("SteamTV.GetBroadcastChannelInteraction#1", (0, l.I8)(Z, t), Y, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetGames = (e, t) =>
		e.SendMsg("SteamTV.GetGames#1", (0, l.I8)(X, t), J, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.GetChannels = (e, t) =>
		e.SendMsg("SteamTV.GetChannels#1", (0, l.I8)($, t), ee, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.AddChatBan = (e, t) =>
		e.SendMsg("SteamTV.AddChatBan#1", (0, l.I8)(ae, t), se, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetChatBans = (e, t) =>
		e.SendMsg("SteamTV.GetChatBans#1", (0, l.I8)(oe, t), le, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.AddChatModerator = (e, t) =>
		e.SendMsg("SteamTV.AddChatModerator#1", (0, l.I8)(ce, t), me, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetChatModerators = (e, t) =>
		e.SendMsg("SteamTV.GetChatModerators#1", (0, l.I8)(ue, t), Ae, {
			bConstMethod: true,
			ePrivilege: 0,
		});
	e.AddWordBan = (e, t) =>
		e.SendMsg("SteamTV.AddWordBan#1", (0, l.I8)(pe, t), ge, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetWordBans = (e, t) =>
		e.SendMsg("SteamTV.GetWordBans#1", (0, l.I8)(he, t), Ce, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.JoinChat = (e, t) =>
		e.SendMsg("SteamTV.JoinChat#1", (0, l.I8)(_e, t), fe, {
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.Search = (e, t) =>
		e.SendMsg("SteamTV.Search#1", (0, l.I8)(be, t), ye, {
			bConstMethod: true,
			ePrivilege: 0,
		});
	e.GetSteamTVUserSettings = (e, t) =>
		e.SendMsg("SteamTV.GetSteamTVUserSettings#1", (0, l.I8)(Se, t), we, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.SetSteamTVUserSettings = (e, t) =>
		e.SendMsg("SteamTV.SetSteamTVUserSettings#1", (0, l.I8)(Be, t), ve, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetMyBroadcastChannels = (e, t) =>
		e.SendMsg("SteamTV.GetMyBroadcastChannels#1", (0, l.I8)(Ie, t), Ee, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetHomePageContents = (e, t) =>
		e.SendMsg("SteamTV.GetHomePageContents#1", (0, l.I8)(Le, t), ze, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.AppCheer = (e, t) =>
		e.SendMsg("SteamTV.AppCheer#1", (0, l.I8)(He, t), je, {
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
})((qe ||= {}));
export class q {
	m_mapChats = new Map();
	GetChat(e, t) {
		return this.m_mapChats.get(e) || this.m_mapChats.get(t);
	}
	GetOrCreateChat(e, t) {
		let r = this.GetChat(e, t);
		if (!r) {
			r = new $e();
			this.m_mapChats.set(e || t, r);
		}
		return r;
	}
	static s_Singleton;
	static Get() {
		if (!q.s_Singleton) {
			q.s_Singleton = new q();
			if (Ke.TS.WEB_UNIVERSE == "dev") {
				window.g_BroadcastChatStore = q.s_Singleton;
			}
		}
		return q.s_Singleton;
	}
	constructor() {
		(0, s.Gn)(this);
	}
}
(0, n.Cg)([s.sH], q.prototype, "m_mapChats", undefined);
class $e {
	m_ulBroadcastChannelID = "";
	m_ulChatID = "";
	m_strFlairGroupID = "";
	m_bAutoScroll = true;
	m_ulBroadcastID = "";
	m_ulBroadcastSteamID = "";
	m_tsFirstRequest = null;
	m_nFromFirstRequestMS = 0;
	m_nNextChatTS = 0;
	m_cConsecutiveErrors = 0;
	m_nNudgeFactorMS = 0;
	m_nLastSleepMS = 0;
	m_bReconnecting = false;
	m_strChatURL;
	m_webApiToken;
	m_unInstanceID = Math.floor(Math.random() * 4294967296);
	m_strUserSteamID = "";
	m_regexUserEmoticons = null;
	m_chatScheduledFunc = null;
	m_webAPIInterface = null;
	m_textFilterStore = null;
	m_bHasAddedWelcomeChat = false;
	m_mapMutedUsers = {};
	m_mapChannelModeratorUsers = new Map();
	m_mapBroadcastModeratorUsers = new Map();
	m_nRateLimitSeconds = 0;
	m_bRateLimited = false;
	m_rgChatMessages = [];
	m_rgAnnouncements = [];
	m_latestAnnouncement = null;
	constructor() {
		(0, s.Gn)(this);
		this.m_webAPIInterface = new m.D(Ke.TS.WEBAPI_BASE_URL, Ke.iA.webapi_token);
	}
	InitTextFilter() {
		this.m_textFilterStore = new Xe.s({
			BIsFriend: (0, Xe.Q)(),
		});
		let e = 0;
		if (Ke.iA.steamid !== "") {
			e = new u.b(Ke.iA.steamid).GetAccountID();
		}
		this.m_textFilterStore.Init(e, null, new c.A());
	}
	get TextFilterStore() {
		return this.m_textFilterStore;
	}
	GetBroadcastSteamID() {
		return this.m_ulBroadcastSteamID;
	}
	GetUserSteamID() {
		return this.m_strUserSteamID;
	}
	StartForSteamID(e, t) {
		this.m_webAPIInterface = new m.D(Ke.TS.WEBAPI_BASE_URL, Ke.iA.webapi_token);
		this.m_ulBroadcastSteamID = e;
		this.m_ulBroadcastID = t;
		this.InitTextFilter();
		this.RequestChatInfo();
	}
	StartForChannel(e) {
		this.m_webAPIInterface = new m.D(Ke.TS.WEBAPI_BASE_URL, Ke.iA.webapi_token);
		this.m_ulBroadcastChannelID = e;
		this.m_strUserSteamID = Ke.iA.steamid;
		this.InitTextFilter();
		this.JoinChannelChat();
	}
	Stop() {
		if (this.m_chatScheduledFunc) {
			this.m_chatScheduledFunc.Cancel();
		}
	}
	async SendMessage(e) {
		const t = e.trim();
		if (t.length != 0) {
			try {
				let e;
				let r;
				let n;
				if (this.m_webApiToken) {
					const e = new FormData();
					e.append("chat_id", this.m_ulChatID);
					e.append("message", t);
					e.append("instance_id", this.m_unInstanceID.toString());
					r = await a.post(
						`${Ke.TS.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
						e,
					);
					n = r.data && r.data.response;
				} else {
					const r = l.w.Init(d.Lw);
					r.SetBodyFields({
						chat_id: this.m_ulChatID,
						message: t,
						instance_id: this.m_unInstanceID.toString(),
					});
					e = await d.DK.PostChatMessage(
						this.m_webAPIInterface.GetServiceTransport(),
						r,
					);
					n = {
						result: e.GetEResult(),
						cooldown_time_seconds: e.Body().cooldown_time_seconds(),
						in_game: e.Body().in_game(),
						persona_name: e.Body().persona_name(),
					};
				}
				if (n && n.result && n.result != 1) {
					let e = "";
					e =
						n.result == 17
							? Localize("#BroadcastChat_YouMuted")
							: n.result == 84
								? Localize("#BroadcastChat_Cooldown", n.cooldown_time_seconds)
								: Localize("#BroadcastChat_FailedToSendMsg", t);
					this.m_rgChatMessages.push({
						type: o.X8.Error,
						msg: e,
						client_ts: Number(new Date()),
						instance_id: this.m_unInstanceID,
						in_game: n.in_game,
						persona_name: n.persona_name,
						steamid: "",
					});
					return;
				}
				this.m_nRateLimitSeconds ||= n.cooldown_time_seconds;
				if (this.m_nRateLimitSeconds) {
					this.m_bRateLimited = true;
					setTimeout(
						() => (this.m_bRateLimited = false),
						this.m_nRateLimitSeconds * 1000,
					);
				}
			} catch {
				this.m_rgChatMessages.push({
					type: o.X8.Error,
					msg: Localize("#BroadcastChat_FailedToSendMsg", t),
					client_ts: Number(new Date()),
					instance_id: this.m_unInstanceID,
					in_game: false,
					persona_name: "",
					steamid: "",
				});
			}
		}
	}
	async RequestChatInfo(e) {
		this.m_cConsecutiveErrors = 0;
		this.m_bReconnecting = false;
		try {
			const t = {
				steamid: this.m_ulBroadcastSteamID,
				broadcastid: this.m_ulBroadcastID,
				sessionid: Ke.TS.SESSIONID,
			};
			const r = await a.get(`${Ke.TS.CHAT_BASE_URL}broadcast/getchatinfo`, {
				params: t,
				withCredentials: true,
				cancelToken: e?.token,
			});
			if (!e || !e.token.reason) {
				(0, s.h5)(() => {
					const e = r.data;
					this.m_strChatURL = e.view_url_template;
					this.m_ulChatID = e.chat_id;
					this.m_strFlairGroupID = e.flair_group_ids && e.flair_group_ids[0];
					if (e.blocked) {
						console.log("User is blocked from chat");
					}
					if (e.steamid) {
						this.m_strUserSteamID = e.steamid;
					}
					if (e.token) {
						this.m_webApiToken = e.token;
					}
					if (e.emoticons) {
						this.SetOwnedEmoticons(e.emoticons);
					}
					if (!this.m_bHasAddedWelcomeChat) {
						this.m_rgChatMessages.push({
							type: o.X8.Notification,
							msg: Localize("#BroadcastChat_DefaultMessage"),
							client_ts: Number(new Date()),
							instance_id: this.m_unInstanceID,
							in_game: false,
							persona_name: "",
							steamid: "",
						});
						this.m_bHasAddedWelcomeChat = true;
					}
					this.m_mapBroadcastModeratorUsers.clear();
					if (e.moderators_steamid) {
						e.moderators_steamid.forEach((e) =>
							this.m_mapBroadcastModeratorUsers.set(e, true),
						);
					}
					this.m_chatScheduledFunc = new Ze.LU();
					this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
				});
			}
		} catch (e) {
			console.error(e);
			console.log("Failed to get chat info!");
		}
	}
	async JoinChannelChat() {
		try {
			const e = l.w.Init(_e);
			e.SetBodyFields({
				broadcast_channel_id: this.m_ulBroadcastChannelID,
			});
			let t = await qe.JoinChat(
				this.m_webAPIInterface.GetServiceTransport(),
				e,
			);
			if (!t.Body().chat_id || !t.Body().view_url_template) {
				console.log("Failed to join channel chat");
				return;
			}
			this.m_strChatURL = t.Body().view_url_template();
			this.m_ulChatID = t.Body().chat_id();
			this.m_strFlairGroupID =
				t.Body().flair_group_ids() && t.Body().flair_group_ids()[0];
			this.FetchChatModerators();
			this.m_rgChatMessages = [];
			this.m_rgChatMessages.push({
				type: o.X8.Notification,
				msg: Localize("#BroadcastChat_DefaultMessage"),
				client_ts: Number(new Date()),
				instance_id: this.m_unInstanceID,
				in_game: false,
				persona_name: "",
				steamid: "",
			});
			this.m_bHasAddedWelcomeChat = true;
			this.m_chatScheduledFunc = new Ze.LU();
			this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
		} catch (e) {
			console.error(e);
			console.log("Failed to join chat!");
		}
	}
	async FetchChatModerators() {
		const e = l.w.Init(ue);
		e.SetBodyFields({
			broadcast_channel_id: this.m_ulBroadcastChannelID,
		});
		const t = (
			await qe.GetChatModerators(
				this.m_webAPIInterface.GetServiceTransport(),
				e,
			)
		)
			.Body()
			.results();
		const r = new Map();
		t.forEach((e) => {
			r.set(e.steamid(), true);
		});
		this.m_mapChannelModeratorUsers = r;
	}
	ReplaceChatAnnouncementIfAny(e) {
		if (e.announcements?.length > 0) {
			this.m_rgAnnouncements = e.announcements.reverse();
			if (
				!this.m_latestAnnouncement ||
				JSON.stringify(this.m_latestAnnouncement) !=
					JSON.stringify(
						this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
					)
			) {
				this.m_latestAnnouncement =
					this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1];
			}
		} else if (this.m_rgAnnouncements.length > 0) {
			this.m_rgAnnouncements = [];
			this.m_latestAnnouncement = null;
		}
	}
	async RequestLoop() {
		const e = {};
		const t = this.m_strChatURL.replace("{0}", this.m_nNextChatTS.toString());
		if (t == this.m_strChatURL && this.m_nNextChatTS > 0) {
			e.t = this.m_nNextChatTS;
		}
		try {
			const r = (
				await a.get(t, {
					params: e,
				})
			).data;
			this.m_cConsecutiveErrors = 0;
			const n = r.messages
				.map((e) => ({
					...e,
					type: o.X8.Chat,
					client_ts: Number(new Date()),
				}))
				.filter((e) => !this.IsUserMutedLocally(e.steamid));
			this.m_rgChatMessages.push(...n);
			this.ReplaceChatAnnouncementIfAny(r);
			const i = this.m_bAutoScroll ? 150 : 300;
			if (this.m_rgChatMessages.length > i) {
				this.m_rgChatMessages.splice(0, this.m_rgChatMessages.length - i);
			}
			if (r.muted) {
				for (const e of r.muted) {
					const t =
						e.muted == this.m_strUserSteamID
							? Localize("#BroadcastChat_YouMuted", e.persona_name)
							: Localize("#BroadcastChat_UserMuted", e.persona_name);
					this.m_rgChatMessages.push({
						type: o.X8.Notification,
						msg: t,
						client_ts: Number(new Date()),
						instance_id: this.m_unInstanceID,
						in_game: false,
						persona_name: "",
						steamid: "",
					});
				}
			}
			if (r.remove_msgs) {
				for (const e of r.remove_msgs) {
					this.RemoveUserMessagesLocal(e.steamid);
				}
			}
			let s = 0;
			if (
				this.m_tsFirstRequest == null ||
				this.m_nNextChatTS == 0 ||
				this.m_nNextChatTS == 0 ||
				r.initial_delay
			) {
				if (r.initial_delay === "undefined") {
					console.log(
						"Need initial_delay to know when to request first chat message",
					);
					return;
				}
				this.m_tsFirstRequest = performance.now() + r.initial_delay;
				this.m_nFromFirstRequestMS = 0;
				this.m_nNextChatTS = r.next_request;
				s = r.initial_delay;
			} else {
				if (r.next_request < this.m_nNextChatTS) {
					console.log("Next request in past");
					return;
				}
				this.m_nFromFirstRequestMS += r.next_request - this.m_nNextChatTS;
				this.m_nNextChatTS = r.next_request;
				s =
					this.m_tsFirstRequest +
					this.m_nFromFirstRequestMS -
					performance.now() +
					this.m_nNudgeFactorMS;
			}
			this.m_bReconnecting &&= false;
			this.m_nLastSleepMS = s;
			if (s < 0) {
				s = 0;
			}
			this.m_chatScheduledFunc.Schedule(s, this.RequestLoop);
		} catch {
			console.log(
				`Failed to get chat messages. Previous sleep set to: ${this.m_nLastSleepMS} firstReq: ${this.m_tsFirstRequest} firstFromRequest: ${this.m_nFromFirstRequestMS} nudge: ${this.m_nNudgeFactorMS}`,
			);
			this.m_cConsecutiveErrors++;
			this.m_nNudgeFactorMS += 10;
			if (this.m_cConsecutiveErrors >= 4) {
				if (this.m_tsFirstRequest == null) {
					this.m_rgChatMessages.push({
						type: o.X8.Error,
						msg: Localize("#BroadcastChat_UnableToJoinChat"),
						client_ts: Number(new Date()),
						instance_id: this.m_unInstanceID,
						in_game: false,
						persona_name: "",
						steamid: "",
					});
					return;
				}
				this.m_cConsecutiveErrors = 0;
				this.m_bReconnecting = true;
				this.SyncChat();
			}
			this.m_chatScheduledFunc.Schedule(500, this.RequestLoop);
		}
	}
	GetUserEmoticons() {
		return this.m_regexUserEmoticons;
	}
	SetOwnedEmoticons(e) {
		let t = [];

		for (let n of e) {
			if (n.length >= 2 && n[0] == ":") {
				t.push(n.substr(1, n.length - 2));
			} else {
				t.push(n);
			}
		}

		let r = `:(${t.join("|")}):`;
		this.m_regexUserEmoticons = new RegExp(r, "g");
	}
	async UpdateBroadcastChatModerator(e, t, r) {
		{
			const n = new FormData();
			n.append("broadcaststeamid", this.m_ulBroadcastSteamID);
			n.append("moderatorsteamid", e);
			n.append("bAdd", t ? "1" : "0");
			n.append("sessionid", Ke.TS.SESSIONID);
			try {
				await a.post(`${Ke.TS.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`, n);
				this.m_mapBroadcastModeratorUsers.set(e, t);
				const i = Localize(
					t
						? "#BroadcastChat_AddedModerator"
						: "#BroadcastChat_RemovedModerator",
					r,
				);
				this.m_rgChatMessages.push({
					type: o.X8.Notification,
					msg: i,
				});
			} catch {
				const e = Localize(
					t
						? "#BroadcastChat_AddModeratorFailed"
						: "#BroadcastChat_RemoveModeratorFailed",
					r,
				);
				this.m_rgChatMessages.push({
					type: o.X8.Error,
					msg: e,
				});
			}
		}
	}
	async UpdateUserChatBan(e, t, r, n, i, s) {
		const o = this.m_ulBroadcastSteamID;
		const c = this.m_strUserSteamID;
		if (this.m_ulBroadcastChannelID) {
			const t = l.w.Init(ae);
			t.SetBodyFields({
				broadcast_channel_id: this.m_ulBroadcastChannelID,
				chatter_steamid: e,
				duration: r * 3600,
				permanent: n,
				undo: s,
			});
			await qe.AddChatBan(this.m_webAPIInterface.GetServiceTransport(), t);
		} else {
			const s = new FormData();
			s.append("broadcaststeamid", o);
			s.append("issuersteamid", c);
			s.append("chattersteamid", e);
			s.append("bantype", t);
			s.append("duration", r.toString());
			s.append("perm", n ? "1" : "0");
			s.append("sessionid", Ke.TS.SESSIONID);
			try {
				await a.post(`${Ke.TS.CHAT_BASE_URL}broadcast/ajaxupdateusermute`, s);
				if (t == 0) {
					delete this.m_mapMutedUsers[e];
				} else {
					this.m_mapMutedUsers[e] = i;
				}
			} catch {
				console.log(`Failed to update mute for ${i}`);
			}
		}
	}
	async MuteUserForSession(e, t) {
		if (e == this.m_strUserSteamID) {
			return;
		}
		if (this.m_ulBroadcastSteamID == e) {
			return;
		}
		let r = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
		if (!this.m_mapMutedUsers[e]) {
			this.m_mapMutedUsers[e] = t;
			try {
				if (this.m_webApiToken) {
					const t = new FormData();
					t.append("chat_id", this.m_ulChatID);
					t.append("user_steamid", e);
					t.append("muted", "1");
					await a.post(
						`${Ke.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
						t,
					);
				} else {
					const t = l.w.Init(d.hW);
					t.SetBodyFields({
						chat_id: this.m_ulChatID,
						user_steamid: e,
						muted: true,
					});
					await d.DK.MuteBroadcastChatUser(
						this.m_webAPIInterface.GetServiceTransport(),
						t,
					);
				}
			} catch {
				if (r) {
					this.m_rgChatMessages.push({
						type: o.X8.Error,
						msg: Localize("#BroadcastChat_UserMuteFailed", t),
						client_ts: Number(new Date()),
						instance_id: this.m_unInstanceID,
						in_game: false,
						persona_name: "",
						steamid: "",
					});
					delete this.m_mapMutedUsers[e];
				}
			}
		}
		if (!r) {
			this.m_rgChatMessages.push({
				type: o.X8.Notification,
				msg: Localize("#BroadcastChat_UserMutedLocal", t),
				client_ts: Number(new Date()),
				instance_id: this.m_unInstanceID,
				in_game: false,
				persona_name: "",
				steamid: "",
			});
		}
	}
	async UnmuteUserForSession(e, t) {
		if (e == this.m_strUserSteamID) {
			return;
		}
		if (this.m_mapMutedUsers[e]) {
			delete this.m_mapMutedUsers[e];
		}
		if (this.m_ulBroadcastSteamID == this.m_strUserSteamID) {
			try {
				if (this.m_webApiToken) {
					const t = new FormData();
					t.append("chat_id", this.m_ulChatID);
					t.append("user_steamid", e);
					t.append("muted", "0");
					await a.post(
						`${Ke.TS.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
						t,
					);
				} else {
					const t = l.w.Init(d.hW);
					t.SetBodyFields({
						chat_id: this.m_ulChatID,
						user_steamid: e,
						muted: false,
					});
					await d.DK.MuteBroadcastChatUser(
						this.m_webAPIInterface.GetServiceTransport(),
						t,
					);
				}
				this.m_rgChatMessages.push({
					type: o.X8.Notification,
					msg: Localize("#BroadcastChat_UserUnmutedLocal", t),
					client_ts: Number(new Date()),
					instance_id: this.m_unInstanceID,
					in_game: false,
					persona_name: "",
					steamid: "",
				});
			} catch {
				this.m_rgChatMessages.push({
					type: o.X8.Error,
					msg: Localize("#BroadcastChat_UserUnmuteFailed", t),
					client_ts: Number(new Date()),
					instance_id: this.m_unInstanceID,
					in_game: false,
					persona_name: "",
					steamid: "",
				});
			}
		} else {
			this.m_rgChatMessages.push({
				type: o.X8.Notification,
				msg: Localize("#BroadcastChat_UserUnmutedLocal", t),
				client_ts: Number(new Date()),
				instance_id: this.m_unInstanceID,
				in_game: false,
				persona_name: "",
				steamid: "",
			});
		}
	}
	RemoveUserMessagesLocal(e) {
		this.m_rgChatMessages = this.m_rgChatMessages.filter(
			(t) => t.steamid !== e,
		);
	}
	async RemoveUserMessagesServer(e, t) {
		if (e != this.m_strUserSteamID) {
			try {
				if (this.m_webApiToken) {
					const t = new FormData();
					t.append("chat_id", this.m_ulChatID);
					t.append("user_steamid", e);
					await a.post(
						`${Ke.TS.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
						t,
					);
				} else {
					const t = l.w.Init(d.ku);
					t.SetBodyFields({
						chat_id: this.m_ulChatID,
						user_steamid: e,
					});
					await d.DK.RemoveUserChatText(
						this.m_webAPIInterface.GetServiceTransport(),
						t,
					);
				}
			} catch {
				this.m_rgChatMessages.push({
					type: o.X8.Error,
					msg: Localize("#BroadcastChat_RemoveMessagesFailed", t),
					client_ts: Number(new Date()),
					instance_id: this.m_unInstanceID,
					in_game: false,
					persona_name: "",
					steamid: "",
				});
			}
		}
	}
	async UpdateChatMessageFlair(e) {
		if (this.m_webApiToken) {
			const t = new FormData();
			t.append("chat_id", this.m_ulChatID);
			t.append("flair", `^${this.m_strFlairGroupID}^:${e}:`);
			await a.post(
				`${Ke.TS.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
				t,
			);
		} else {
			const t = l.w.Init(d.Mn);
			t.SetBodyFields({
				chat_id: this.m_ulChatID,
				flair: `^${this.m_strFlairGroupID}^:${e}:`,
			});
			await d.DK.UpdateChatMessageFlair(
				this.m_webAPIInterface.GetServiceTransport(),
				t,
			);
		}
	}
	IsUserMutedLocally(e) {
		return Boolean(this.m_mapMutedUsers[e]);
	}
	BIsUserBroadcastModerator(e) {
		return this.m_mapBroadcastModeratorUsers.has(e);
	}
	IsUserBroadcaster(e) {
		return e === this.m_ulBroadcastSteamID;
	}
	SyncChat() {
		this.m_tsFirstRequest = null;
		this.m_nFromFirstRequestMS = 0;
		this.m_nNextChatTS = 0;
		this.m_rgChatMessages = [];
	}
}
(0, n.Cg)([s.sH], $e.prototype, "m_mapChannelModeratorUsers", undefined);
(0, n.Cg)([s.sH], $e.prototype, "m_mapBroadcastModeratorUsers", undefined);
(0, n.Cg)([s.sH], $e.prototype, "m_nRateLimitSeconds", undefined);
(0, n.Cg)([s.sH], $e.prototype, "m_bRateLimited", undefined);
(0, n.Cg)([s.sH], $e.prototype, "m_rgChatMessages", undefined);
(0, n.Cg)([s.sH], $e.prototype, "m_latestAnnouncement", undefined);
(0, n.Cg)([Qe.o], $e.prototype, "FetchChatModerators", null);
(0, n.Cg)([Qe.o], $e.prototype, "RequestLoop", null);
(0, n.Cg)([Qe.o], $e.prototype, "MuteUserForSession", null);
