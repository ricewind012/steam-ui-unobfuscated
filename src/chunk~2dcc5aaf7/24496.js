import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { Gn } from "./89193.js";
import s from "./52451.js";
import o from "./58663.js";
import l from "./48307.js";
import c, { I8 } from "./12176.js";
import { OI } from "./12251.js";
import k from "./75144.js";
import { I as I_1 } from "./61416.js";
const o_Message = o.Message;
class d extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return d.toObject(e, this);
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
		return new d();
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new d();
		return d.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_IsServiceAvailable_Request";
	}
}
class A extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.is_available) {
			l.Sg(A.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				is_available: {
					n: 1,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
			},
		};
		return A.sm_m;
	}
	static MBF() {
		A.sm_mbf ||= l.w0(A.M());
		return A.sm_mbf;
	}
	toObject(e = false) {
		return A.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(A.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(A.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new A();
		return A.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(A.MBF(), e, t);
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(A.M(), e, t);
	}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_IsServiceAvailable_Response";
	}
}
class p extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.id) {
			l.Sg(p.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				id: {
					n: 1,
					d: 0,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				model: {
					n: 2,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				vendor: {
					n: 3,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				serial: {
					n: 4,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				is_ejectable: {
					n: 5,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				size_bytes: {
					n: 6,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				media_type: {
					n: 7,
					br: l.qM.readEnum,
					bw: l.gp.writeEnum,
				},
				is_unformatted: {
					n: 8,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				adopt_stage: {
					n: 9,
					br: l.qM.readEnum,
					bw: l.gp.writeEnum,
				},
				is_formattable: {
					n: 10,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				is_media_available: {
					n: 11,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= l.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(p.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(p.MBF(), e, t);
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(p.M(), e, t);
	}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManagerDrive";
	}
}
class g extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.id) {
			l.Sg(g.M());
		}
		o_Message.initialize(this, e, 0, -1, [12], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				id: {
					n: 1,
					d: 0,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				drive_id: {
					n: 2,
					d: 0,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				path: {
					n: 3,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				friendly_path: {
					n: 4,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				label: {
					n: 5,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				size_bytes: {
					n: 6,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				is_formattable: {
					n: 7,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				is_read_only: {
					n: 8,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				is_root_device: {
					n: 9,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				content_type: {
					n: 10,
					br: l.qM.readEnum,
					bw: l.gp.writeEnum,
				},
				filesystem_type: {
					n: 11,
					br: l.qM.readEnum,
					bw: l.gp.writeEnum,
				},
				mount_paths: {
					n: 12,
					r: true,
					q: true,
					br: l.qM.readString,
					bw: l.gp.writeRepeatedString,
				},
				is_unmounting: {
					n: 13,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				has_steam_library: {
					n: 14,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= l.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(g.M(), e, t);
	}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManagerBlockDevice";
	}
}
class h extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.drives) {
			l.Sg(h.M());
		}
		o_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				drives: {
					n: 1,
					c: p,
					r: true,
					q: true,
				},
				block_devices: {
					n: 2,
					c: g,
					r: true,
					q: true,
				},
				is_unmount_supported: {
					n: 3,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				is_trim_supported: {
					n: 4,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				is_trim_running: {
					n: 5,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				is_adopt_supported: {
					n: 6,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= l.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(h.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(h.M(), e, t);
	}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManagerState";
	}
}
class C extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return C.toObject(e, this);
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
		return new C();
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_GetState_Request";
	}
}
class _ extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.state) {
			l.Sg(_.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				state: {
					n: 1,
					c: h,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= l.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(_.M(), e, t);
	}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_GetState_Response";
	}
}
class f extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return f.toObject(e, this);
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
		return new f();
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_StateChanged_Notification";
	}
}
class b extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.drive_id) {
			l.Sg(b.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				drive_id: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= l.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(b.M(), e, t);
	}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Eject_Request";
	}
}
class y extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new o.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Eject_Response";
	}
}
class S extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.drive_id) {
			l.Sg(S.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				drive_id: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				label: {
					n: 2,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				validate: {
					n: 3,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= l.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(S.M(), e, t);
	}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Adopt_Request";
	}
}
class w extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return w.toObject(e, this);
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
		return new w();
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Adopt_Response";
	}
}
class B extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.block_device_id) {
			l.Sg(B.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				block_device_id: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= l.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(B.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(B.M(), e, t);
	}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Format_Request";
	}
}
class v extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new o.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Format_Response";
	}
}
class I extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.block_device_id) {
			l.Sg(I.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				block_device_id: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
			},
		};
		return I.sm_m;
	}
	static MBF() {
		I.sm_mbf ||= l.w0(I.M());
		return I.sm_mbf;
	}
	toObject(e = false) {
		return I.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(I.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(I.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(I.MBF(), e, t);
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(I.M(), e, t);
	}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Unmount_Request";
	}
}
class E extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return E.toObject(e, this);
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
		return new E();
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new E();
		return E.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Unmount_Response";
	}
}
class M extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return M.toObject(e, this);
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
		return new M();
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_TrimAll_Request";
	}
}
class T extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return T.toObject(e, this);
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
		return new T();
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new T();
		return T.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new o.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new o.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_TrimAll_Response";
	}
}
let R;
((e) => {
	e.IsServiceAvailableHandler = {
		name: "StorageDeviceManager.IsServiceAvailable#1",
		request: d,
		response: A,
	};
	e.IsServiceAvailable = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.IsServiceAvailable#1",
				I8(d, e),
				A,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgIsServiceAvailable = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.IsServiceAvailable#1",
				I8(d, e),
				A,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetStateHandler = {
		name: "StorageDeviceManager.GetState#1",
		request: C,
		response: _,
	};
	e.GetState = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.GetState#1", I8(C, e), _, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgGetState = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.GetState#1", I8(C, e), _, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.NotifyStateChangedHandler = {
		name: "StorageDeviceManager.NotifyStateChanged#1",
		request: f,
	};
	e.RegisterForNotifyStateChanged = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyStateChangedHandler,
				t,
			);
		}
	};
	e.NotifyStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"StorageDeviceManager.NotifyStateChanged#1",
				I8(f, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"StorageDeviceManager.NotifyStateChanged#1",
				I8(f, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.AdoptHandler = {
		name: "StorageDeviceManager.Adopt#1",
		request: S,
		response: w,
	};
	e.Adopt = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.Adopt#1", I8(S, e), w, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgAdopt = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.Adopt#1", I8(S, e), w, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.EjectHandler = {
		name: "StorageDeviceManager.Eject#1",
		request: b,
		response: y,
	};
	e.Eject = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.Eject#1", I8(b, e), y, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgEject = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.Eject#1", I8(b, e), y, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.FormatHandler = {
		name: "StorageDeviceManager.Format#1",
		request: B,
		response: v,
	};
	e.Format = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.Format#1", I8(B, e), v, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgFormat = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.Format#1", I8(B, e), v, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.UnmountHandler = {
		name: "StorageDeviceManager.Unmount#1",
		request: I,
		response: E,
	};
	e.Unmount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.Unmount#1", I8(I, e), E, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgUnmount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.Unmount#1", I8(I, e), E, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.TrimAllHandler = {
		name: "StorageDeviceManager.TrimAll#1",
		request: M,
		response: T,
	};
	e.TrimAll = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.TrimAll#1", I8(M, e), T, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgTrimAll = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("StorageDeviceManager.TrimAll#1", I8(M, e), T, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
})((R ||= {}));
const N = "SystemStorageService";
const F = "State";
const G = "IsServiceAvailable";
function O() {
	return [N, F];
}
class P {
	async Init() {
		R.RegisterForNotifyStateChanged(this.OnStateChanged);
	}
	OnStateChanged(e) {
		k.L.invalidateQueries({
			queryKey: O(),
		});
		return 1;
	}
	async Adopt(e, t, r) {
		return (
			await R.Adopt({
				drive_id: e,
				label: t,
				validate: r,
			})
		).GetEResult();
	}
	async TrimAll() {
		return (await R.TrimAll({})).GetEResult();
	}
	async Unmount(e) {
		return (
			await R.Unmount({
				block_device_id: e,
			})
		).GetEResult();
	}
}
export function vM(e) {
	const t = (() => {
		const e = i.useCallback(async () => {
			const e = await R.IsServiceAvailable({});
			return e.BSuccess() && e.Body().is_available();
		}, []);
		const t = I_1({
			queryKey: [N, G],
			queryFn: e,
			staleTime: Infinity,
		});
		return t?.data === true;
	})();
	const r = i.useCallback(async () => {
		const e = await R.GetState({});
		if (!e.BSuccess()) {
			throw new Error("Failed to fetch storage device manager state");
		}
		return e.Body().toObject().state;
	}, []);
	return I_1({
		queryKey: O(),
		queryFn: r,
		staleTime: Infinity,
		select: e,
		enabled: t,
	});
}
export function CN(e) {
	const t = vM((t) => t?.drives?.find((t) => t.id == e));
	if (t.isSuccess && e !== null) {
		return t.data;
	} else {
		return null;
	}
}
export function fu(e) {
	const t = vM((t) => t?.block_devices?.filter((t) => t.drive_id == e));
	if (t.isSuccess) {
		return t.data;
	} else {
		return null;
	}
}
export function Ff() {
	return (
		vM((e) =>
			e?.drives?.filter(
				(t) =>
					!!((e) => e.is_formattable && e.is_unformatted)(t) ||
					!((e, t) => {
						for (const r of t) {
							if (r.drive_id == e.id && r.has_steam_library) {
								return true;
							}
						}
						return false;
					})(t, e.block_devices),
			),
		).data ?? []
	);
}
export function VW() {
	const e = vM((e) => e.is_adopt_supported);
	return e.isSuccess && e.data;
}
export function De() {
	const e = vM((e) => e.is_unmount_supported);
	return e.isSuccess && e.data;
}
export function V(e) {
	const t = vM((t) => {
		if (e === null) {
			return null;
		}
		for (const r of t.block_devices) {
			if (r.mount_paths?.includes(e)) {
				return r;
			}
		}
		return null;
	});
	if (t.isSuccess) {
		return t.data;
	} else {
		return null;
	}
}
export function Dt() {
	const e = vM((e) => ({
		bSupported: e.is_trim_supported,
		bRunning: e.is_trim_running,
	}));
	return [
		e.isSuccess
			? e.data
			: {
					bSupported: false,
					bRunning: false,
				},
		_r.TrimAll,
	];
}
function q() {
	const e = vM((e) => {
		for (const t of e.block_devices) {
			if (t.path.startsWith("/dev/mmcblk0")) {
				return t;
			}
		}
		return null;
	});
	if (e.isSuccess) {
		return e.data;
	} else {
		return null;
	}
}
export function hb() {
	return q() != null;
}
export function gf() {
	const e = q();
	const t = CN(e?.drive_id);
	return !!e && !!t && t.is_unformatted;
}
Cg([s.oI], P.prototype, "OnStateChanged", null);
Cg([s.oI], P.prototype, "Adopt", null);
Cg([s.oI], P.prototype, "TrimAll", null);
Cg([s.oI], P.prototype, "Unmount", null);
export const _r = new P();
class K {
	m_bIsSDCardFormatting = false;
	m_progressFormat = null;
	get bIsSDCardFormatting() {
		return this.m_bIsSDCardFormatting;
	}
	get progressFormat() {
		return this.m_progressFormat;
	}
	constructor() {
		Gn(this);
		this.ClearFormatProgress();
	}
	async Init() {
		if (SteamClient.System.RegisterForFormatStorageProgress) {
			SteamClient.System.RegisterForFormatStorageProgress(
				this.OnFormatStorageProgress,
			);
		}
	}
	OnFormatStorageProgress(e) {
		this.m_progressFormat = e;
	}
	ClearFormatProgress() {
		this.m_progressFormat = {
			flProgress: 0,
			rtEstimatedCompletionTime: 0,
			eStage: 1,
		};
	}
	async FormatSDCard(e) {
		if (this.m_bIsSDCardFormatting) {
			return 108;
		}
		this.ClearFormatProgress();
		this.m_bIsSDCardFormatting = true;
		const t = await SteamClient.System.FormatStorage(e);
		this.m_bIsSDCardFormatting = false;
		return t.result;
	}
}
Cg([a.sH], K.prototype, "m_bIsSDCardFormatting", undefined);
Cg([a.sH], K.prototype, "m_progressFormat", undefined);
Cg([a.XI.bound], K.prototype, "OnFormatStorageProgress", null);
Cg([a.XI.bound], K.prototype, "ClearFormatProgress", null);
export const bh = new K();
