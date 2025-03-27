import n from "./58663.js";
import i from "./48307.js";
import { I8 } from "./12176.js";
const n_Message = n.Message;
class o extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!o.prototype.permission) {
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
				permission: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				gameid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				client_instance_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				title: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				cellid: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtmp_token: {
					n: 6,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				thumbnail_upload: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sysid: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				allow_webrtc: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CBroadcast_BeginBroadcastSession_Request";
	}
}
class l extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.broadcast_id) {
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
				broadcast_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				thumbnail_upload_address: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				thumbnail_upload_token: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				thumbnail_interval_seconds: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				heartbeat_interval_seconds: {
					n: 5,
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
		return "CBroadcast_BeginBroadcastSession_Response";
	}
}
class c extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.broadcast_id) {
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
				broadcast_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CBroadcast_EndBroadcastSession_Request";
	}
}
class m extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return m.toObject(e, this);
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
		return new m();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new m();
		return m.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_EndBroadcastSession_Response";
	}
}
class u extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.broadcast_id) {
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
				broadcast_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				cellid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				as_rtmp: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				delay_seconds: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtmp_token: {
					n: 5,
					d: "0",
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				upload_ip_address: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				is_replay: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sysid: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CBroadcast_StartBroadcastUpload_Request";
	}
}
class d extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.upload_token) {
			i.Sg(d.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				upload_token: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				upload_address: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				broadcast_upload_id: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				enable_replay: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				http_address: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CBroadcast_StartBroadcastUpload_Response";
	}
}
class A extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.broadcast_id) {
			i.Sg(A.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				broadcast_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				upload_token: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				upload_address: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				http_address: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				broadcast_upload_id: {
					n: 5,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				heartbeat_interval_seconds: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				is_rtmp: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CBroadcast_BroadcastUploadStarted_Notification";
	}
}
export class jl extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!jl.prototype.steamid) {
			i.Sg(jl.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		jl.sm_m ||= {
			proto: jl,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				broadcast_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return jl.sm_m;
	}
	static MBF() {
		jl.sm_mbf ||= i.w0(jl.M());
		return jl.sm_mbf;
	}
	toObject(e = false) {
		return jl.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(jl.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(jl.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new jl();
		return jl.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(jl.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		jl.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(jl.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		jl.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBroadcastStatus_Request";
	}
}
class g extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.gameid) {
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
				gameid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				title: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				num_viewers: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				permission: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_rtmp: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				seconds_delay: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_publisher: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				thumbnail_url: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				update_interval: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_uploading: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				duration: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				is_replay: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_capturing_vod: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_store_whitelisted: {
					n: 14,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CBroadcast_GetBroadcastStatus_Response";
	}
}
export class XZ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!XZ.prototype.steamid) {
			i.Sg(XZ.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		XZ.sm_m ||= {
			proto: XZ,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				broadcast_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return XZ.sm_m;
	}
	static MBF() {
		XZ.sm_mbf ||= i.w0(XZ.M());
		return XZ.sm_mbf;
	}
	toObject(e = false) {
		return XZ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(XZ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(XZ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new XZ();
		return XZ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(XZ.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		XZ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(XZ.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		XZ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBroadcastThumbnail_Request";
	}
}
class C extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.thumbnail_url) {
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
				thumbnail_url: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				update_interval: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				num_viewers: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				duration: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CBroadcast_GetBroadcastThumbnail_Response";
	}
}
class _ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				existing_broadcast_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				viewer_token: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				client_cell: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				watch_location: {
					n: 6,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				is_webrtc: {
					n: 7,
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
		return "CBroadcast_WatchBroadcast_Request";
	}
}
class f extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.response) {
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
				response: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mpd_url: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				broadcast_id: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				gameid: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				title: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				num_viewers: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				permission: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_rtmp: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				seconds_delay: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				viewer_token: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				hls_m3u8_master_url: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				heartbeat_interval: {
					n: 12,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				thumbnail_url: {
					n: 13,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_webrtc: {
					n: 14,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				webrtc_session_id: {
					n: 15,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				webrtc_offer_sdp: {
					n: 16,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				webrtc_turn_server: {
					n: 17,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_replay: {
					n: 18,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				duration: {
					n: 19,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				cdn_auth_url_parameters: {
					n: 20,
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
		return "CBroadcast_WatchBroadcast_Response";
	}
}
class b extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				broadcast_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				viewer_token: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				representation: {
					n: 4,
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
		return "CBroadcast_HeartbeatBroadcast_Notification";
	}
}
class y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				broadcast_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				viewer_token: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CBroadcast_StopWatchingBroadcast_Notification";
	}
}
class S extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				approval_response: {
					n: 2,
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
		return "CBroadcast_InviteToBroadcast_Request";
	}
}
class w extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.success) {
			i.Sg(w.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				success: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CBroadcast_InviteToBroadcast_Response";
	}
}
class B extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.permission) {
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
				permission: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				gameid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				title: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_data_config: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CBroadcast_SendBroadcastStateToServer_Request";
	}
}
class v extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return v.toObject(e, this);
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
		return new v();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_SendBroadcastStateToServer_Response";
	}
}
class I extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.steamid) {
			i.Sg(I.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				state: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "CBroadcast_BroadcastViewerState_Notification";
	}
}
class E extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.broadcast_id) {
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
				broadcast_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CBroadcast_WaitingBroadcastViewer_Notification";
	}
}
class M extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.broadcast_id) {
			i.Sg(M.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				broadcast_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				broadcast_relay_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				upload_result: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				too_many_poor_uploads: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CBroadcast_StopBroadcastUpload_Notification";
	}
}
class T extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.broadcast_id) {
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
				broadcast_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CBroadcast_SessionClosed_Notification";
	}
}
class R extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.broadcast_id) {
			i.Sg(R.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				broadcast_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				num_viewers: {
					n: 2,
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
		return "CBroadcast_BroadcastStatus_Notification";
	}
}
class k extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.broadcast_channel_id) {
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
				broadcast_channel_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				broadcast_channel_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				broadcast_channel_avatar: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CBroadcast_BroadcastChannelLive_Notification";
	}
}
class D extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.thumbnail_upload_token) {
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
				thumbnail_upload_token: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				thumbnail_broadcast_session_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				thumbnail_data: {
					n: 3,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				thumbnail_width: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				thumbnail_height: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CBroadcast_SendThumbnailToRelay_Notification";
	}
}
class N extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.broadcast_upload_id) {
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
				broadcast_upload_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				upload_result: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CBroadcast_NotifyBroadcastUploadStop_Notification";
	}
}
class F extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.broadcaster_steamid) {
			i.Sg(F.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		F.sm_m ||= {
			proto: F,
			fields: {
				broadcaster_steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return F.sm_m;
	}
	static MBF() {
		F.sm_mbf ||= i.w0(F.M());
		return F.sm_mbf;
	}
	toObject(e = false) {
		return F.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(F.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(F.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new F();
		return F.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(F.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(F.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_ViewerBroadcastInvite_Notification";
	}
}
class G extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.broadcast_id) {
			i.Sg(G.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				broadcast_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return G.sm_m;
	}
	static MBF() {
		G.sm_mbf ||= i.w0(G.M());
		return G.sm_mbf;
	}
	toObject(e = false) {
		return G.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(G.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(G.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new G();
		return G.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(G.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(G.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
	}
}
class O extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.steamid) {
			i.Sg(O.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O.sm_m ||= {
			proto: O,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				broadcast_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				client_ip: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				client_cell: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return O.sm_m;
	}
	static MBF() {
		O.sm_mbf ||= i.w0(O.M());
		return O.sm_mbf;
	}
	toObject(e = false) {
		return O.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(O.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(O.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new O();
		return O.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(O.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(O.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBroadcastChatInfo_Request";
	}
}
class P extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.chat_id) {
			i.Sg(P.M());
		}
		n_Message.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				chat_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				view_url_template: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				flair_group_ids: {
					n: 4,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return P.sm_m;
	}
	static MBF() {
		P.sm_mbf ||= i.w0(P.M());
		return P.sm_mbf;
	}
	toObject(e = false) {
		return P.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(P.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(P.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new P();
		return P.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(P.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(P.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBroadcastChatInfo_Response";
	}
}
export class Lw extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Lw.prototype.chat_id) {
			i.Sg(Lw.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Lw.sm_m ||= {
			proto: Lw,
			fields: {
				chat_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				message: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				instance_id: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				language: {
					n: 4,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				country_code: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Lw.sm_m;
	}
	static MBF() {
		Lw.sm_mbf ||= i.w0(Lw.M());
		return Lw.sm_mbf;
	}
	toObject(e = false) {
		return Lw.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Lw.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Lw.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Lw();
		return Lw.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Lw.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Lw.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Lw.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Lw.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_PostChatMessage_Request";
	}
}
class z extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.persona_name) {
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
				persona_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				in_game: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				result: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				cooldown_time_seconds: {
					n: 4,
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
		return "CBroadcast_PostChatMessage_Response";
	}
}
export class Mn extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Mn.prototype.chat_id) {
			i.Sg(Mn.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Mn.sm_m ||= {
			proto: Mn,
			fields: {
				chat_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				flair: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Mn.sm_m;
	}
	static MBF() {
		Mn.sm_mbf ||= i.w0(Mn.M());
		return Mn.sm_mbf;
	}
	toObject(e = false) {
		return Mn.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Mn.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Mn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Mn();
		return Mn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Mn.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Mn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Mn.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Mn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_UpdateChatMessageFlair_Request";
	}
}
class U extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.result) {
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
				result: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				chat_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				flair: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CBroadcast_UpdateChatMessageFlair_Response";
	}
}
export class hW extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!hW.prototype.chat_id) {
			i.Sg(hW.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		hW.sm_m ||= {
			proto: hW,
			fields: {
				chat_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				user_steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				muted: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return hW.sm_m;
	}
	static MBF() {
		hW.sm_mbf ||= i.w0(hW.M());
		return hW.sm_mbf;
	}
	toObject(e = false) {
		return hW.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(hW.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(hW.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new hW();
		return hW.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(hW.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		hW.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(hW.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		hW.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_MuteBroadcastChatUser_Request";
	}
}
class V extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return V.toObject(e, this);
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
		return new V();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new V();
		return V.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_MuteBroadcastChatUser_Response";
	}
}
export class ku extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ku.prototype.chat_id) {
			i.Sg(ku.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ku.sm_m ||= {
			proto: ku,
			fields: {
				chat_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				user_steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return ku.sm_m;
	}
	static MBF() {
		ku.sm_mbf ||= i.w0(ku.M());
		return ku.sm_mbf;
	}
	toObject(e = false) {
		return ku.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ku.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ku.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ku();
		return ku.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ku.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ku.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ku.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ku.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_RemoveUserChatText_Request";
	}
}
class j extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return j.toObject(e, this);
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
		return new j();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new j();
		return j.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_RemoveUserChatText_Response";
	}
}
class q extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.chat_id) {
			i.Sg(q.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				chat_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				user_steamid: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
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
		return "CBroadcast_GetBroadcastChatUserNames_Request";
	}
}
class Q extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q.prototype.persona_names) {
			i.Sg(Q.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q.sm_m ||= {
			proto: Q,
			fields: {
				persona_names: {
					n: 1,
					c: Z,
					r: true,
					q: true,
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
		return "CBroadcast_GetBroadcastChatUserNames_Response";
	}
}
class Z extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z.prototype.steam_id) {
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
				steam_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				persona: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
	}
}
class Y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.steamid) {
			i.Sg(Y.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Y.sm_m ||= {
			proto: Y,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				broadcast_session_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				first_segment: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				num_segments: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				clip_description: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CBroadcast_StartBuildClip_Request";
	}
}
class K extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K.prototype.broadcast_clip_id) {
			i.Sg(K.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		K.sm_m ||= {
			proto: K,
			fields: {
				broadcast_clip_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CBroadcast_StartBuildClip_Response";
	}
}
class X extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!X.prototype.broadcast_clip_id) {
			i.Sg(X.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		X.sm_m ||= {
			proto: X,
			fields: {
				broadcast_clip_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CBroadcast_GetBuildClipStatus_Request";
	}
}
class J extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return J.toObject(e, this);
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
		return new J();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new J();
		return J.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBuildClipStatus_Response";
	}
}
class $ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$.prototype.broadcast_clip_id) {
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
				broadcast_clip_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				start_time: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				end_time: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				video_description: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CBroadcast_SetClipDetails_Request";
	}
}
class ee extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ee.toObject(e, this);
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
		return new ee();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ee();
		return ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_SetClipDetails_Response";
	}
}
class te extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!te.prototype.broadcast_clip_id) {
			i.Sg(te.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		te.sm_m ||= {
			proto: te,
			fields: {
				broadcast_clip_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CBroadcast_GetClipDetails_Request";
	}
}
class re extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.broadcast_clip_id) {
			i.Sg(re.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		re.sm_m ||= {
			proto: re,
			fields: {
				broadcast_clip_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				video_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				channel_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				app_id: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				accountid_broadcaster: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				accountid_clipmaker: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				video_description: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				start_time: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				length_milliseconds: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				thumbnail_path: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return re.sm_m;
	}
	static MBF() {
		re.sm_mbf ||= i.w0(re.M());
		return re.sm_mbf;
	}
	toObject(e = false) {
		return re.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(re.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(re.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new re();
		return re.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(re.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(re.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetClipDetails_Response";
	}
}
class ne extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ne.prototype.broadcast_permission) {
			i.Sg(ne.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ne.sm_m ||= {
			proto: ne,
			fields: {
				broadcast_permission: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				update_token: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				broadcast_delay: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				app_id: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				required_app_id: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				broadcast_chat_permission: {
					n: 6,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				broadcast_buffer: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				steamid: {
					n: 8,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				chat_rate_limit: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				enable_replay: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_partner_chat_only: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				wordban_list: {
					n: 12,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return ne.sm_m;
	}
	static MBF() {
		ne.sm_mbf ||= i.w0(ne.M());
		return ne.sm_mbf;
	}
	toObject(e = false) {
		return ne.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ne.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ne.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ne();
		return ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ne.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ne.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_SetRTMPInfo_Request";
	}
}
class ie extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ie.toObject(e, this);
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
		return new ie();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ie();
		return ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_SetRTMPInfo_Response";
	}
}
class ae extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ae.prototype.ip) {
			i.Sg(ae.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ae.sm_m ||= {
			proto: ae,
			fields: {
				ip: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return ae.sm_m;
	}
	static MBF() {
		ae.sm_mbf ||= i.w0(ae.M());
		return ae.sm_mbf;
	}
	toObject(e = false) {
		return ae.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ae.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ae.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ae();
		return ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ae.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ae.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetRTMPInfo_Request";
	}
}
class se extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!se.prototype.broadcast_permission) {
			i.Sg(se.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		se.sm_m ||= {
			proto: se,
			fields: {
				broadcast_permission: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				rtmp_host: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				rtmp_token: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				broadcast_delay: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				app_id: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				required_app_id: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				broadcast_chat_permission: {
					n: 7,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				broadcast_buffer: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				steamid: {
					n: 9,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				chat_rate_limit: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				enable_replay: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_partner_chat_only: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				wordban_list: {
					n: 13,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return se.sm_m;
	}
	static MBF() {
		se.sm_mbf ||= i.w0(se.M());
		return se.sm_mbf;
	}
	toObject(e = false) {
		return se.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(se.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(se.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new se();
		return se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(se.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(se.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetRTMPInfo_Response";
	}
}
class oe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!oe.prototype.row_limit) {
			i.Sg(oe.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		oe.sm_m ||= {
			proto: oe,
			fields: {
				row_limit: {
					n: 1,
					d: 100,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				start_time: {
					n: 2,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				upload_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				session_id: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return oe.sm_m;
	}
	static MBF() {
		oe.sm_mbf ||= i.w0(oe.M());
		return oe.sm_mbf;
	}
	toObject(e = false) {
		return oe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(oe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(oe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new oe();
		return oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(oe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(oe.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBroadcastUploadStats_Request";
	}
}
class le extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!le.prototype.upload_stats) {
			i.Sg(le.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		le.sm_m ||= {
			proto: le,
			fields: {
				upload_stats: {
					n: 1,
					c: ce,
					r: true,
					q: true,
				},
			},
		};
		return le.sm_m;
	}
	static MBF() {
		le.sm_mbf ||= i.w0(le.M());
		return le.sm_mbf;
	}
	toObject(e = false) {
		return le.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(le.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(le.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new le();
		return le.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(le.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(le.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBroadcastUploadStats_Response";
	}
}
class ce extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ce.prototype.upload_result) {
			i.Sg(ce.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ce.sm_m ||= {
			proto: ce,
			fields: {
				upload_result: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_stopped: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				seconds_uploaded: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				max_viewers: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				resolution_x: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				resolution_y: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				avg_bandwidth: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				total_bytes: {
					n: 8,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				app_id: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				total_unique_viewers: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				total_seconds_watched: {
					n: 11,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				time_started: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				upload_id: {
					n: 13,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				local_address: {
					n: 14,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				remote_address: {
					n: 15,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				frames_per_second: {
					n: 16,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				num_representations: {
					n: 17,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				app_name: {
					n: 18,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_replay: {
					n: 19,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				session_id: {
					n: 20,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return ce.sm_m;
	}
	static MBF() {
		ce.sm_mbf ||= i.w0(ce.M());
		return ce.sm_mbf;
	}
	toObject(e = false) {
		return ce.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ce.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ce.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ce();
		return ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ce.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ce.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
	}
}
class me extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!me.prototype.upload_id) {
			i.Sg(me.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		me.sm_m ||= {
			proto: me,
			fields: {
				upload_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return me.sm_m;
	}
	static MBF() {
		me.sm_mbf ||= i.w0(me.M());
		return me.sm_mbf;
	}
	toObject(e = false) {
		return me.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(me.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(me.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new me();
		return me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(me.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(me.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBroadcastViewerStats_Request";
	}
}
class ue extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ue.prototype.viewer_stats) {
			i.Sg(ue.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ue.sm_m ||= {
			proto: ue,
			fields: {
				viewer_stats: {
					n: 1,
					c: de,
					r: true,
					q: true,
				},
				country_stats: {
					n: 2,
					c: Ae,
					r: true,
					q: true,
				},
			},
		};
		return ue.sm_m;
	}
	static MBF() {
		ue.sm_mbf ||= i.w0(ue.M());
		return ue.sm_mbf;
	}
	toObject(e = false) {
		return ue.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ue.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ue.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ue();
		return ue.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ue.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ue.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBroadcastViewerStats_Response";
	}
}
class de extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!de.prototype.time) {
			i.Sg(de.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		de.sm_m ||= {
			proto: de,
			fields: {
				time: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				num_viewers: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return de.sm_m;
	}
	static MBF() {
		de.sm_mbf ||= i.w0(de.M());
		return de.sm_mbf;
	}
	toObject(e = false) {
		return de.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(de.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(de.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new de();
		return de.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(de.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(de.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
	}
}
class Ae extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ae.prototype.country_code) {
			i.Sg(Ae.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ae.sm_m ||= {
			proto: Ae,
			fields: {
				country_code: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				num_viewers: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Ae.sm_m;
	}
	static MBF() {
		Ae.sm_mbf ||= i.w0(Ae.M());
		return Ae.sm_mbf;
	}
	toObject(e = false) {
		return Ae.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ae.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ae.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ae();
		return Ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ae.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ae.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
	}
}
class pe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pe.prototype.webrtc_session_id) {
			i.Sg(pe.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pe.sm_m ||= {
			proto: pe,
			fields: {
				webrtc_session_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				started: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				offer: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				resolution_x: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				resolution_y: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				fps: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return pe.sm_m;
	}
	static MBF() {
		pe.sm_mbf ||= i.w0(pe.M());
		return pe.sm_mbf;
	}
	toObject(e = false) {
		return pe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(pe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(pe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new pe();
		return pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(pe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(pe.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCStartResult_Request";
	}
}
class ge extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new ge();
		return ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCStartResult_Response";
	}
}
class he extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!he.prototype.webrtc_session_id) {
			i.Sg(he.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		he.sm_m ||= {
			proto: he,
			fields: {
				webrtc_session_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return he.sm_m;
	}
	static MBF() {
		he.sm_mbf ||= i.w0(he.M());
		return he.sm_mbf;
	}
	toObject(e = false) {
		return he.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(he.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(he.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new he();
		return he.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(he.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(he.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCStopped_Request";
	}
}
class Ce extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ce.toObject(e, this);
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
		return new Ce();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ce();
		return Ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCStopped_Response";
	}
}
class _e extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_e.prototype.broadcaster_steamid) {
			i.Sg(_e.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_e.sm_m ||= {
			proto: _e,
			fields: {
				broadcaster_steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				webrtc_session_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				answer: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return _e.sm_m;
	}
	static MBF() {
		_e.sm_mbf ||= i.w0(_e.M());
		return _e.sm_mbf;
	}
	toObject(e = false) {
		return _e.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(_e.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(_e.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _e();
		return _e.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(_e.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_e.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCSetAnswer_Request";
	}
}
class fe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return fe.toObject(e, this);
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
		return new fe();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new fe();
		return fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCSetAnswer_Response";
	}
}
class be extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!be.prototype.sdp_mid) {
			i.Sg(be.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		be.sm_m ||= {
			proto: be,
			fields: {
				sdp_mid: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				sdp_mline_index: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				candidate: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return be.sm_m;
	}
	static MBF() {
		be.sm_mbf ||= i.w0(be.M());
		return be.sm_mbf;
	}
	toObject(e = false) {
		return be.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(be.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(be.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new be();
		return be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(be.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(be.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTC_Candidate";
	}
}
class ye extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ye.prototype.webrtc_session_id) {
			i.Sg(ye.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ye.sm_m ||= {
			proto: ye,
			fields: {
				webrtc_session_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				candidate: {
					n: 2,
					c: be,
				},
			},
		};
		return ye.sm_m;
	}
	static MBF() {
		ye.sm_mbf ||= i.w0(ye.M());
		return ye.sm_mbf;
	}
	toObject(e = false) {
		return ye.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ye.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ye.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ye();
		return ye.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ye.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ye.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCAddHostCandidate_Request";
	}
}
class Se extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new Se();
		return Se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCAddHostCandidate_Response";
	}
}
class we extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!we.prototype.broadcaster_steamid) {
			i.Sg(we.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		we.sm_m ||= {
			proto: we,
			fields: {
				broadcaster_steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				webrtc_session_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				candidate: {
					n: 3,
					c: be,
				},
			},
		};
		return we.sm_m;
	}
	static MBF() {
		we.sm_mbf ||= i.w0(we.M());
		return we.sm_mbf;
	}
	toObject(e = false) {
		return we.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(we.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(we.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new we();
		return we.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(we.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(we.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCAddViewerCandidate_Request";
	}
}
class Be extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Be.toObject(e, this);
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
		return new Be();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Be();
		return Be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCAddViewerCandidate_Response";
	}
}
class ve extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ve.prototype.broadcaster_steamid) {
			i.Sg(ve.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ve.sm_m ||= {
			proto: ve,
			fields: {
				broadcaster_steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				webrtc_session_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				candidate_generation: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return ve.sm_m;
	}
	static MBF() {
		ve.sm_mbf ||= i.w0(ve.M());
		return ve.sm_mbf;
	}
	toObject(e = false) {
		return ve.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ve.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ve.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ve();
		return ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ve.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ve.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCGetHostCandidates_Request";
	}
}
class Ie extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ie.prototype.candidate_generation) {
			i.Sg(Ie.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ie.sm_m ||= {
			proto: Ie,
			fields: {
				candidate_generation: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				candidates: {
					n: 2,
					c: be,
					r: true,
					q: true,
				},
			},
		};
		return Ie.sm_m;
	}
	static MBF() {
		Ie.sm_mbf ||= i.w0(Ie.M());
		return Ie.sm_mbf;
	}
	toObject(e = false) {
		return Ie.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ie.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ie.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ie();
		return Ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ie.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ie.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCGetHostCandidates_Response";
	}
}
class Ee extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ee.prototype.broadcast_session_id) {
			i.Sg(Ee.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ee.sm_m ||= {
			proto: Ee,
			fields: {
				broadcast_session_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return Ee.sm_m;
	}
	static MBF() {
		Ee.sm_mbf ||= i.w0(Ee.M());
		return Ee.sm_mbf;
	}
	toObject(e = false) {
		return Ee.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ee.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ee.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ee();
		return Ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ee.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ee.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCNeedTURNServer_Notification";
	}
}
class Me extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Me.prototype.cellid) {
			i.Sg(Me.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Me.sm_m ||= {
			proto: Me,
			fields: {
				cellid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Me.sm_m;
	}
	static MBF() {
		Me.sm_mbf ||= i.w0(Me.M());
		return Me.sm_mbf;
	}
	toObject(e = false) {
		return Me.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Me.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Me.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Me();
		return Me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Me.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Me.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCLookupTURNServer_Request";
	}
}
class Te extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Te.prototype.turn_server) {
			i.Sg(Te.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Te.sm_m ||= {
			proto: Te,
			fields: {
				turn_server: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Te.sm_m;
	}
	static MBF() {
		Te.sm_mbf ||= i.w0(Te.M());
		return Te.sm_mbf;
	}
	toObject(e = false) {
		return Te.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Te.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Te.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Te();
		return Te.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Te.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Te.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCLookupTURNServer_Response";
	}
}
class Re extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Re.prototype.broadcast_session_id) {
			i.Sg(Re.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Re.sm_m ||= {
			proto: Re,
			fields: {
				broadcast_session_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				turn_server: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Re.sm_m;
	}
	static MBF() {
		Re.sm_mbf ||= i.w0(Re.M());
		return Re.sm_mbf;
	}
	toObject(e = false) {
		return Re.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Re.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Re.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Re();
		return Re.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Re.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Re.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCHaveTURNServer_Notification";
	}
}
class ke extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ke.prototype.broadcast_session_id) {
			i.Sg(ke.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ke.sm_m ||= {
			proto: ke,
			fields: {
				broadcast_session_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				webrtc_session_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				viewer_steamid: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				viewer_token: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CBroadcast_WebRTCStart_Notification";
	}
}
class De extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!De.prototype.broadcast_session_id) {
			i.Sg(De.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		De.sm_m ||= {
			proto: De,
			fields: {
				broadcast_session_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				webrtc_session_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				answer: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return De.sm_m;
	}
	static MBF() {
		De.sm_mbf ||= i.w0(De.M());
		return De.sm_mbf;
	}
	toObject(e = false) {
		return De.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(De.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(De.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new De();
		return De.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(De.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(De.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCSetAnswer_Notification";
	}
}
class Ne extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ne.prototype.broadcast_session_id) {
			i.Sg(Ne.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ne.sm_m ||= {
			proto: Ne,
			fields: {
				broadcast_session_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				webrtc_session_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				candidate: {
					n: 3,
					c: be,
				},
			},
		};
		return Ne.sm_m;
	}
	static MBF() {
		Ne.sm_mbf ||= i.w0(Ne.M());
		return Ne.sm_mbf;
	}
	toObject(e = false) {
		return Ne.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ne.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ne.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ne();
		return Ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ne.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ne.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBroadcast_WebRTCAddViewerCandidate_Notification";
	}
}
export let DK;
let Ge;
((e) => {
	e.BeginBroadcastSession = (e, t) =>
		e.SendMsg("Broadcast.BeginBroadcastSession#1", I8(o, t), l, {
			ePrivilege: 1,
		});
	e.EndBroadcastSession = (e, t) =>
		e.SendMsg("Broadcast.EndBroadcastSession#1", I8(c, t), m, {
			ePrivilege: 1,
		});
	e.StartBroadcastUpload = (e, t) =>
		e.SendMsg("Broadcast.StartBroadcastUpload#1", I8(u, t), d, {
			ePrivilege: 1,
		});
	e.NotifyBroadcastUploadStop = (e, t) =>
		e.SendNotification("Broadcast.NotifyBroadcastUploadStop#1", I8(N, t), {
			ePrivilege: 1,
		});
	e.WatchBroadcast = (e, t) =>
		e.SendMsg("Broadcast.WatchBroadcast#1", I8(_, t), f, {
			ePrivilege: 2,
		});
	e.HeartbeatBroadcast = (e, t) =>
		e.SendNotification("Broadcast.HeartbeatBroadcast#1", I8(b, t), {
			ePrivilege: 2,
		});
	e.StopWatchingBroadcast = (e, t) =>
		e.SendNotification("Broadcast.StopWatchingBroadcast#1", I8(y, t), {
			ePrivilege: 2,
		});
	e.GetBroadcastStatus = (e, t) =>
		e.SendMsg("Broadcast.GetBroadcastStatus#1", I8(jl, t), g, {
			ePrivilege: 2,
		});
	e.GetBroadcastThumbnail = (e, t) =>
		e.SendMsg("Broadcast.GetBroadcastThumbnail#1", I8(XZ, t), C, {
			ePrivilege: 2,
		});
	e.InviteToBroadcast = (e, t) =>
		e.SendMsg("Broadcast.InviteToBroadcast#1", I8(S, t), w, {
			ePrivilege: 1,
		});
	e.SendBroadcastStateToServer = (e, t) =>
		e.SendMsg("Broadcast.SendBroadcastStateToServer#1", I8(B, t), v, {
			ePrivilege: 1,
		});
	e.NotifyBroadcastSessionHeartbeat = (e, t) =>
		e.SendNotification(
			"Broadcast.NotifyBroadcastSessionHeartbeat#1",
			I8(G, t),
			{
				ePrivilege: 1,
			},
		);
	e.GetBroadcastChatInfo = (e, t) =>
		e.SendMsg("Broadcast.GetBroadcastChatInfo#1", I8(O, t), P, {
			ePrivilege: 2,
		});
	e.PostChatMessage = (e, t) =>
		e.SendMsg("Broadcast.PostChatMessage#1", I8(Lw, t), z, {
			ePrivilege: 3,
		});
	e.UpdateChatMessageFlair = (e, t) =>
		e.SendMsg("Broadcast.UpdateChatMessageFlair#1", I8(Mn, t), U, {
			ePrivilege: 1,
		});
	e.MuteBroadcastChatUser = (e, t) =>
		e.SendMsg("Broadcast.MuteBroadcastChatUser#1", I8(hW, t), V, {
			ePrivilege: 3,
		});
	e.RemoveUserChatText = (e, t) =>
		e.SendMsg("Broadcast.RemoveUserChatText#1", I8(ku, t), j, {
			ePrivilege: 3,
		});
	e.GetBroadcastChatUserNames = (e, t) =>
		e.SendMsg("Broadcast.GetBroadcastChatUserNames#1", I8(q, t), Q, {
			ePrivilege: 1,
		});
	e.StartBuildClip = (e, t) =>
		e.SendMsg("Broadcast.StartBuildClip#1", I8(Y, t), K, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetBuildClipStatus = (e, t) =>
		e.SendMsg("Broadcast.GetBuildClipStatus#1", I8(X, t), J, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.SetClipDetails = (e, t) =>
		e.SendMsg("Broadcast.SetClipDetails#1", I8($, t), ee, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetClipDetails = (e, t) =>
		e.SendMsg("Broadcast.GetClipDetails#1", I8(te, t), re, {
			bConstMethod: true,
			ePrivilege: 0,
			eWebAPIKeyRequirement: 2,
		});
	e.SetRTMPInfo = (e, t) =>
		e.SendMsg("Broadcast.SetRTMPInfo#1", I8(ne, t), ie, {
			ePrivilege: 1,
		});
	e.GetRTMPInfo = (e, t) =>
		e.SendMsg("Broadcast.GetRTMPInfo#1", I8(ae, t), se, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.NotifyWebRTCHaveTURNServer = (e, t) =>
		e.SendNotification("Broadcast.NotifyWebRTCHaveTURNServer#1", I8(Re, t), {
			ePrivilege: 1,
		});
	e.WebRTCStartResult = (e, t) =>
		e.SendMsg("Broadcast.WebRTCStartResult#1", I8(pe, t), ge, {
			ePrivilege: 1,
		});
	e.WebRTCStopped = (e, t) =>
		e.SendMsg("Broadcast.WebRTCStopped#1", I8(he, t), Ce, {
			ePrivilege: 1,
		});
	e.WebRTCSetAnswer = (e, t) =>
		e.SendMsg("Broadcast.WebRTCSetAnswer#1", I8(_e, t), fe, {
			ePrivilege: 1,
		});
	e.WebRTCLookupTURNServer = (e, t) =>
		e.SendMsg("Broadcast.WebRTCLookupTURNServer#1", I8(Me, t), Te, {
			ePrivilege: 1,
		});
	e.WebRTCAddHostCandidate = (e, t) =>
		e.SendMsg("Broadcast.WebRTCAddHostCandidate#1", I8(ye, t), Se, {
			ePrivilege: 1,
		});
	e.WebRTCAddViewerCandidate = (e, t) =>
		e.SendMsg("Broadcast.WebRTCAddViewerCandidate#1", I8(we, t), Be, {
			ePrivilege: 1,
		});
	e.WebRTCGetHostCandidates = (e, t) =>
		e.SendMsg("Broadcast.WebRTCGetHostCandidates#1", I8(ve, t), Ie, {
			ePrivilege: 1,
		});
	e.GetBroadcastUploadStats = (e, t) =>
		e.SendMsg("Broadcast.GetBroadcastUploadStats#1", I8(oe, t), le, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetBroadcastViewerStats = (e, t) =>
		e.SendMsg("Broadcast.GetBroadcastViewerStats#1", I8(me, t), ue, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
})((DK ||= {}));
((e) => {
	e.NotifyBroadcastViewerStateHandler = {
		name: "BroadcastClient.NotifyBroadcastViewerState#1",
		request: I,
	};
	e.NotifyWaitingBroadcastViewerHandler = {
		name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
		request: E,
	};
	e.NotifyBroadcastUploadStartedHandler = {
		name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
		request: A,
	};
	e.NotifyStopBroadcastUploadHandler = {
		name: "BroadcastClient.NotifyStopBroadcastUpload#1",
		request: M,
	};
	e.NotifySessionClosedHandler = {
		name: "BroadcastClient.NotifySessionClosed#1",
		request: T,
	};
	e.NotifyViewerBroadcastInviteHandler = {
		name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
		request: F,
	};
	e.NotifyBroadcastStatusHandler = {
		name: "BroadcastClient.NotifyBroadcastStatus#1",
		request: R,
	};
	e.NotifyBroadcastChannelLiveHandler = {
		name: "BroadcastClient.NotifyBroadcastChannelLive#1",
		request: k,
	};
	e.SendThumbnailToRelayHandler = {
		name: "BroadcastClient.SendThumbnailToRelay#1",
		request: D,
	};
	e.NotifyWebRTCNeedTURNServerHandler = {
		name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
		request: Ee,
	};
	e.NotifyWebRTCStartHandler = {
		name: "BroadcastClient.NotifyWebRTCStart#1",
		request: ke,
	};
	e.NotifyWebRTCSetAnswerHandler = {
		name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
		request: De,
	};
	e.NotifyWebRTCAddViewerCandidateHandler = {
		name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
		request: Ne,
	};
})((Ge ||= {}));
