var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require("./12251.js");
const o = n.Message;
class l extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return l.toObject(e, this);
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
		return new l();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new l();
		return l.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_GetState_Request";
	}
}
class c extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.id) {
			i.Sg(c.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(c.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgBluetoothManagerAdapterInfo";
	}
}
class m extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.id) {
			i.Sg(m.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				should_hide_hint: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				etype: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				is_connected: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_paired: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				strength_raw: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CMsgBluetoothManagerDeviceInfo";
	}
}
class u extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.is_service_available) {
			i.Sg(u.M());
		}
		o.initialize(this, e, 0, -1, [4, 5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				is_service_available: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_enabled: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_discovering: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				adapters: {
					n: 4,
					c,
					r: true,
					q: true,
				},
				devices: {
					n: 5,
					c: m,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(u.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_GetState_Response";
	}
}
class d extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.id) {
			i.Sg(d.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CBluetoothManager_GetAdapterDetails_Request";
	}
}
class A extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.id) {
			i.Sg(A.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				id: {
					n: 1,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				mac: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_enabled: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_discovering: {
					n: 5,
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
		return "CMsgBluetoothManagerAdapterDetails";
	}
}
class p extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.adapter) {
			i.Sg(p.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				adapter: {
					n: 1,
					c: A,
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
		var e = new n.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(p.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_GetAdapterDetails_Response";
	}
}
class g extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.id) {
			i.Sg(g.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(g.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_GetDeviceDetails_Request";
	}
}
class h extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.id) {
			i.Sg(h.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				id: {
					n: 1,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				adapter_id: {
					n: 2,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				etype: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mac: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				name: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_connected: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_paired: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_pairing: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				wake_allowed: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				wake_allowed_supported: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				battery_percent: {
					n: 11,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				operation_in_progress: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_trusted: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CMsgBluetoothManagerDeviceDetails";
	}
}
class C extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.device) {
			i.Sg(C.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				device: {
					n: 1,
					c: h,
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
		return "CBluetoothManager_GetDeviceDetails_Response";
	}
}
class _ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return _.toObject(e, this);
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
		return new _();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_StateChanged_Notification";
	}
}
class f extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.enabled) {
			i.Sg(f.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				enabled: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CBluetoothManager_SetDiscovering_Request";
	}
}
class b extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return b.toObject(e, this);
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
		return new b();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_SetDiscovering_Response";
	}
}
class y extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.device) {
			i.Sg(y.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				device: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CBluetoothManager_Pair_Request";
	}
}
class S extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		return "CBluetoothManager_Pair_Response";
	}
}
class w extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.device) {
			i.Sg(w.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				device: {
					n: 1,
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
		var e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(w.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_CancelPair_Request";
	}
}
class B extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return B.toObject(e, this);
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
		return new B();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_CancelPair_Response";
	}
}
class v extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.device) {
			i.Sg(v.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				device: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(v.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_Forget_Request";
	}
}
class I extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return I.toObject(e, this);
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
		return new I();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_Forget_Response";
	}
}
class E extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.device) {
			i.Sg(E.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				device: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(E.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_Connect_Request";
	}
}
class M extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_Connect_Response";
	}
}
class T extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.device) {
			i.Sg(T.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				device: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(T.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_Disconnect_Request";
	}
}
class R extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return R.toObject(e, this);
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
		return new R();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new R();
		return R.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_Disconnect_Response";
	}
}
class k extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.device) {
			i.Sg(k.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				device: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				allowed: {
					n: 2,
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
		var e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(k.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_SetWakeAllowed_Request";
	}
}
class D extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return D.toObject(e, this);
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
		return new D();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_SetWakeAllowed_Response";
	}
}
class N extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.device) {
			i.Sg(N.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				device: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				trusted: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		var e = new n.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(N.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_SetTrusted_Request";
	}
}
class F extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new F();
		return F.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CBluetoothManager_SetTrusted_Response";
	}
}
export var RF;
(function (e) {
	e.GetStateHandler = {
		name: "BluetoothManager.GetState#1",
		request: l,
		response: u,
	};
	e.GetState = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.GetState#1", (0, a.I8)(l, e), u, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgGetState = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.GetState#1", (0, a.I8)(l, e), u, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.GetAdapterDetailsHandler = {
		name: "BluetoothManager.GetAdapterDetails#1",
		request: d,
		response: p,
	};
	e.GetAdapterDetails = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"BluetoothManager.GetAdapterDetails#1",
				(0, a.I8)(d, e),
				p,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetAdapterDetails = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"BluetoothManager.GetAdapterDetails#1",
				(0, a.I8)(d, e),
				p,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetDeviceDetailsHandler = {
		name: "BluetoothManager.GetDeviceDetails#1",
		request: g,
		response: C,
	};
	e.GetDeviceDetails = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"BluetoothManager.GetDeviceDetails#1",
				(0, a.I8)(g, e),
				C,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetDeviceDetails = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"BluetoothManager.GetDeviceDetails#1",
				(0, a.I8)(g, e),
				C,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyStateChangedHandler = {
		name: "BluetoothManager.NotifyStateChanged#1",
		request: _,
	};
	e.RegisterForNotifyStateChanged = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
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
	e.NotifyStateChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"BluetoothManager.NotifyStateChanged#1",
				(0, a.I8)(_, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyStateChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"BluetoothManager.NotifyStateChanged#1",
				(0, a.I8)(_, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SetDiscoveringHandler = {
		name: "BluetoothManager.SetDiscovering#1",
		request: f,
		response: b,
	};
	e.SetDiscovering = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"BluetoothManager.SetDiscovering#1",
				(0, a.I8)(f, e),
				b,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgSetDiscovering = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"BluetoothManager.SetDiscovering#1",
				(0, a.I8)(f, e),
				b,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.PairHandler = {
		name: "BluetoothManager.Pair#1",
		request: y,
		response: S,
	};
	e.Pair = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.Pair#1", (0, a.I8)(y, e), S, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgPair = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.Pair#1", (0, a.I8)(y, e), S, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.CancelPairHandler = {
		name: "BluetoothManager.CancelPair#1",
		request: w,
		response: B,
	};
	e.CancelPair = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.CancelPair#1", (0, a.I8)(w, e), B, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgCancelPair = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.CancelPair#1", (0, a.I8)(w, e), B, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.ForgetHandler = {
		name: "BluetoothManager.Forget#1",
		request: v,
		response: I,
	};
	e.Forget = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.Forget#1", (0, a.I8)(v, e), I, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgForget = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.Forget#1", (0, a.I8)(v, e), I, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.ConnectHandler = {
		name: "BluetoothManager.Connect#1",
		request: E,
		response: M,
	};
	e.Connect = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.Connect#1", (0, a.I8)(E, e), M, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgConnect = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.Connect#1", (0, a.I8)(E, e), M, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.DisconnectHandler = {
		name: "BluetoothManager.Disconnect#1",
		request: T,
		response: R,
	};
	e.Disconnect = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.Disconnect#1", (0, a.I8)(T, e), R, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgDisconnect = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.Disconnect#1", (0, a.I8)(T, e), R, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SetWakeAllowedHandler = {
		name: "BluetoothManager.SetWakeAllowed#1",
		request: k,
		response: D,
	};
	e.SetWakeAllowed = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"BluetoothManager.SetWakeAllowed#1",
				(0, a.I8)(k, e),
				D,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgSetWakeAllowed = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"BluetoothManager.SetWakeAllowed#1",
				(0, a.I8)(k, e),
				D,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SetTrustedHandler = {
		name: "BluetoothManager.SetTrusted#1",
		request: N,
		response: F,
	};
	e.SetTrusted = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.SetTrusted#1", (0, a.I8)(N, e), F, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgSetTrusted = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("BluetoothManager.SetTrusted#1", (0, a.I8)(N, e), F, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
})((RF ||= {}));
