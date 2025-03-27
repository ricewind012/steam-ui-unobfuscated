import n from "./58663.js";
import i from "./48307.js";
const n_Message = n.Message;
export class Ck extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ck.prototype.ip) {
			i.Sg(Ck.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ck.sm_m ||= {
			proto: Ck,
			fields: {
				ip: {
					n: 1,
					d: 0,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				netmask: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return Ck.sm_m;
	}
	static MBF() {
		Ck.sm_mbf ||= i.w0(Ck.M());
		return Ck.sm_mbf;
	}
	toObject(e = false) {
		return Ck.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ck.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ck.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ck();
		return Ck.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ck.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ck.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ck.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ck.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgNetworkDeviceIP4Address";
	}
}
class o extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!o.prototype.addresses) {
			i.Sg(o.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		o.sm_m ||= {
			proto: o,
			fields: {
				addresses: {
					n: 1,
					c: Ck,
					r: true,
					q: true,
				},
				dns_ip: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
				},
				gateway_ip: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_dhcp_enabled: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_default_route: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_enabled: {
					n: 6,
					d: false,
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
		return "CMsgNetworkDeviceIP4Config";
	}
}
class l extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.ip) {
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
				ip: {
					n: 1,
					d: "",
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
		return "CMsgNetworkDeviceIP6Address";
	}
}
class c extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.addresses) {
			i.Sg(c.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				addresses: {
					n: 1,
					c: l,
					r: true,
					q: true,
				},
				dns_ip: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				gateway_ip: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_dhcp_enabled: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_default_route: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_enabled: {
					n: 6,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CMsgNetworkDeviceIP6Config";
	}
}
export class co extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!co.prototype.devices) {
			i.Sg(co.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		co.sm_m ||= {
			proto: co,
			fields: {
				devices: {
					n: 1,
					c: u,
					r: true,
					q: true,
				},
				is_wifi_enabled: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_wifi_scanning_enabled: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return co.sm_m;
	}
	static MBF() {
		co.sm_mbf ||= i.w0(co.M());
		return co.sm_mbf;
	}
	toObject(e = false) {
		return co.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(co.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(co.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new co();
		return co.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(co.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		co.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(co.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		co.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgNetworkDevicesData";
	}
}
class u extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.id) {
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
				id: {
					n: 1,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				etype: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				estate: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				mac: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				vendor: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				product: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				ip4: {
					n: 7,
					c: o,
				},
				ip6: {
					n: 8,
					c,
				},
				wired: {
					n: 9,
					c: d,
				},
				wireless: {
					n: 10,
					c: A,
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
		return "CMsgNetworkDevicesData_Device";
	}
}
class d extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.is_cable_present) {
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
				is_cable_present: {
					n: 1,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				speed_mbit: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				friendly_name: {
					n: 3,
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
		return "CMsgNetworkDevicesData_Device_Wired";
	}
}
class A extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.aps) {
			i.Sg(A.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				aps: {
					n: 1,
					c: p,
					r: true,
					q: true,
				},
				esecurity_supported: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CMsgNetworkDevicesData_Device_Wireless";
	}
}
class p extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.id) {
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
				id: {
					n: 1,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				estrength: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				ssid: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_active: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_autoconnect: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				esecurity: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				user_name: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				password: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				strength_raw: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CMsgNetworkDevicesData_Device_Wireless_AP";
	}
}
export class pc extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pc.prototype.device_id) {
			i.Sg(pc.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pc.sm_m ||= {
			proto: pc,
			fields: {
				device_id: {
					n: 1,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ap_known: {
					n: 2,
					c: h,
				},
				ap_custom: {
					n: 3,
					c: C,
				},
				credentials: {
					n: 4,
					c: _,
				},
				ip4: {
					n: 5,
					c: o,
				},
				ip6: {
					n: 6,
					c,
				},
			},
		};
		return pc.sm_m;
	}
	static MBF() {
		pc.sm_mbf ||= i.w0(pc.M());
		return pc.sm_mbf;
	}
	toObject(e = false) {
		return pc.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(pc.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(pc.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new pc();
		return pc.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(pc.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		pc.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(pc.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		pc.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgNetworkDeviceConnect";
	}
}
class h extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.ap_id) {
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
				ap_id: {
					n: 1,
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
		return "CMsgNetworkDeviceConnect_KnownAP";
	}
}
class C extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.ssid) {
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
				ssid: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				esecurity: {
					n: 2,
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
		return "CMsgNetworkDeviceConnect_CustomAP";
	}
}
class _ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.username) {
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
				username: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				password: {
					n: 2,
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
		return "CMsgNetworkDeviceConnect_Credentials";
	}
}
class f extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.operation) {
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
				operation: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				machine_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				client_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				time_last_updated: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				os_type: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				device_type: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CCloud_PendingRemoteOperation";
	}
}
export class lx extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!lx.prototype.operations) {
			i.Sg(lx.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		lx.sm_m ||= {
			proto: lx,
			fields: {
				operations: {
					n: 1,
					c: f,
					r: true,
					q: true,
				},
			},
		};
		return lx.sm_m;
	}
	static MBF() {
		lx.sm_mbf ||= i.w0(lx.M());
		return lx.sm_mbf;
	}
	toObject(e = false) {
		return lx.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(lx.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(lx.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new lx();
		return lx.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(lx.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		lx.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(lx.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		lx.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgCloudPendingRemoteOperations";
	}
}
class y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.name) {
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
				name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				value: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CMsgSystemPerfDiagnosticEntry";
	}
}
class S extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.name) {
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
				name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				timestamp: {
					n: 2,
					br: i.qM.readDouble,
					bw: i.gp.writeDouble,
				},
				tx_bytes_total: {
					n: 3,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				rx_bytes_total: {
					n: 4,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				tx_bytes_per_sec: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				rx_bytes_per_sec: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CMsgSystemPerfNetworkInterface";
	}
}
export class bm extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!bm.prototype.entries) {
			i.Sg(bm.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		bm.sm_m ||= {
			proto: bm,
			fields: {
				entries: {
					n: 1,
					c: y,
					r: true,
					q: true,
				},
				interfaces: {
					n: 2,
					c: S,
					r: true,
					q: true,
				},
				battery_temp_c: {
					n: 3,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
			},
		};
		return bm.sm_m;
	}
	static MBF() {
		bm.sm_mbf ||= i.w0(bm.M());
		return bm.sm_mbf;
	}
	toObject(e = false) {
		return bm.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(bm.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(bm.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new bm();
		return bm.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(bm.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		bm.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(bm.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		bm.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemPerfDiagnosticInfo";
	}
}
class B extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.cpu_governor_manual_min_mhz) {
			i.Sg(B.M());
		}
		n_Message.initialize(this, e, 0, -1, [10, 13, 21, 26, 27], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				cpu_governor_manual_min_mhz: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				cpu_governor_manual_max_mhz: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				fsr_sharpness_min: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				fsr_sharpness_max: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				gpu_performance_manual_min_mhz: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				gpu_performance_manual_max_mhz: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				perf_overlay_is_standalone: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_dynamic_vrs_available: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_manual_display_refresh_rate_available: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				gpu_performance_levels_available: {
					n: 10,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				display_refresh_manual_hz_min: {
					n: 11,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				display_refresh_manual_hz_max: {
					n: 12,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				fps_limit_options: {
					n: 13,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
				},
				tdp_limit_min: {
					n: 14,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				tdp_limit_max: {
					n: 15,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_nis_supported: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				nis_sharpness_min: {
					n: 17,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				nis_sharpness_max: {
					n: 18,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				display_external_refresh_manual_hz_min: {
					n: 19,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				display_external_refresh_manual_hz_max: {
					n: 20,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				fps_limit_options_external: {
					n: 21,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
				},
				is_vrr_supported: {
					n: 23,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_dynamic_refresh_rate_in_steam_supported: {
					n: 24,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_split_scaling_and_filtering_supported: {
					n: 25,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				split_scaling_filters_available: {
					n: 26,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				split_scaling_scalers_available: {
					n: 27,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				disable_refresh_rate_management: {
					n: 30,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CMsgSystemPerfLimits";
	}
}
class v extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.diagnostic_update_rate) {
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
				diagnostic_update_rate: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				system_trace_service_state: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				graphics_profiling_service_state: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				perf_overlay_service_state: {
					n: 4,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				perf_overlay_level: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				is_show_perf_overlay_over_steam_enabled: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_advanced_settings_enabled: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				allow_external_display_refresh_control: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				hdr_on_sdr_tonemap_operator: {
					n: 12,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				is_hdr_debug_heatmap_enabled: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				force_hdr_wide_gammut_for_sdr: {
					n: 15,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sdr_to_hdr_brightness: {
					n: 22,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				is_color_management_enabled: {
					n: 21,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CMsgSystemPerfSettingsGlobal";
	}
}
class I extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.gpu_performance_manual_mhz) {
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
				gpu_performance_manual_mhz: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				fps_limit: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_variable_resolution_enabled: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_dynamic_refresh_rate_enabled: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				tdp_limit: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				cpu_governor: {
					n: 6,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				cpu_governor_manual_mhz: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				scaling_filter: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				fsr_sharpness: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_fps_limit_enabled: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_tdp_limit_enabled: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_low_latency_mode_enabled: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_refresh_manual_hz: {
					n: 13,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_game_perf_profile_enabled: {
					n: 14,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				gpu_performance_level: {
					n: 15,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				nis_sharpness: {
					n: 16,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				display_external_refresh_manual_hz: {
					n: 17,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				fps_limit_external: {
					n: 18,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_tearing_enabled: {
					n: 19,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_vrr_enabled: {
					n: 20,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				use_dynamic_refresh_rate_in_steam: {
					n: 23,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				split_scaling_filter: {
					n: 24,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				split_scaling_scaler: {
					n: 25,
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
		return "CMsgSystemPerfSettingsPerApp";
	}
}
export class SW extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!SW.prototype.global) {
			i.Sg(SW.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		SW.sm_m ||= {
			proto: SW,
			fields: {
				global: {
					n: 1,
					c: v,
				},
				per_app: {
					n: 2,
					c: I,
				},
			},
		};
		return SW.sm_m;
	}
	static MBF() {
		SW.sm_mbf ||= i.w0(SW.M());
		return SW.sm_mbf;
	}
	toObject(e = false) {
		return SW.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(SW.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(SW.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new SW();
		return SW.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(SW.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		SW.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(SW.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		SW.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemPerfSettings";
	}
}
export class cI extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!cI.prototype.limits) {
			i.Sg(cI.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		cI.sm_m ||= {
			proto: cI,
			fields: {
				limits: {
					n: 1,
					c: B,
				},
				settings: {
					n: 2,
					c: SW,
				},
				current_game_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				active_profile_game_id: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return cI.sm_m;
	}
	static MBF() {
		cI.sm_mbf ||= i.w0(cI.M());
		return cI.sm_mbf;
	}
	toObject(e = false) {
		return cI.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(cI.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(cI.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new cI();
		return cI.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(cI.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		cI.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(cI.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		cI.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemPerfState";
	}
}
export class TR extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!TR.prototype.gameid) {
			i.Sg(TR.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		TR.sm_m ||= {
			proto: TR,
			fields: {
				gameid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				reset_to_default: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				settings_delta: {
					n: 3,
					c: SW,
				},
				skip_storage_update: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return TR.sm_m;
	}
	static MBF() {
		TR.sm_mbf ||= i.w0(TR.M());
		return TR.sm_mbf;
	}
	toObject(e = false) {
		return TR.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(TR.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(TR.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new TR();
		return TR.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(TR.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		TR.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(TR.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		TR.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemPerfUpdateSettings";
	}
}
class R extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.state) {
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
				state: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				rtime_last_checked: {
					n: 2,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				version_current: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				version_available: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				stage_progress: {
					n: 5,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				rtime_estimated_completion: {
					n: 6,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				old_fw_workaround: {
					n: 7,
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
		return "CMsgSystemDockUpdateState";
	}
}
export class KF extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!KF.prototype.update_state) {
			i.Sg(KF.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		KF.sm_m ||= {
			proto: KF,
			fields: {
				update_state: {
					n: 1,
					c: R,
				},
			},
		};
		return KF.sm_m;
	}
	static MBF() {
		KF.sm_mbf ||= i.w0(KF.M());
		return KF.sm_mbf;
	}
	toObject(e = false) {
		return KF.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(KF.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(KF.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new KF();
		return KF.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(KF.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		KF.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(KF.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		KF.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemDockState";
	}
}
export class pM extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pM.prototype.check_only) {
			i.Sg(pM.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pM.sm_m ||= {
			proto: pM,
			fields: {
				check_only: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return pM.sm_m;
	}
	static MBF() {
		pM.sm_mbf ||= i.w0(pM.M());
		return pM.sm_mbf;
	}
	toObject(e = false) {
		return pM.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(pM.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(pM.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new pM();
		return pM.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(pM.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		pM.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(pM.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		pM.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemDockUpdateFirmware";
	}
}
class N extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.entries) {
			i.Sg(N.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				entries: {
					n: 1,
					c: F,
					r: true,
					q: true,
				},
				is_muted: {
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
		return "CMsgSystemAudioVolume";
	}
}
class F extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.echannel) {
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
				echannel: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				volume: {
					n: 2,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
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
		return "CMsgSystemAudioVolume_ChannelEntry";
	}
}
class G extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.id) {
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
				id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime_last_update: {
					n: 2,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
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
		return "CMsgSystemAudioManagerObject";
	}
}
class O extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.base) {
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
				base: {
					n: 1,
					c: G,
				},
				name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				nick: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				description: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				api: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CMsgSystemAudioManagerDevice";
	}
}
class P extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.base) {
			i.Sg(P.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				base: {
					n: 1,
					c: G,
				},
				device_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				nick: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				description: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				edirection: {
					n: 6,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				volume: {
					n: 7,
					c: N,
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
		return "CMsgSystemAudioManagerNode";
	}
}
class L extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!L.prototype.base) {
			i.Sg(L.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		L.sm_m ||= {
			proto: L,
			fields: {
				base: {
					n: 1,
					c: G,
				},
				node_id: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				name: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				alias: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				etype: {
					n: 6,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				edirection: {
					n: 7,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				is_physical: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_terminal: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_control: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_monitor: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return L.sm_m;
	}
	static MBF() {
		L.sm_mbf ||= i.w0(L.M());
		return L.sm_mbf;
	}
	toObject(e = false) {
		return L.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(L.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(L.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new L();
		return L.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(L.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(L.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemAudioManagerPort";
	}
}
class z extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.base) {
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
				base: {
					n: 1,
					c: G,
				},
				output_node_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				output_port_id: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				input_node_id: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				input_port_id: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CMsgSystemAudioManagerLink";
	}
}
class x extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.devices) {
			i.Sg(x.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2, 3, 4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		x.sm_m ||= {
			proto: x,
			fields: {
				devices: {
					n: 1,
					c: O,
					r: true,
					q: true,
				},
				nodes: {
					n: 2,
					c: P,
					r: true,
					q: true,
				},
				ports: {
					n: 3,
					c: L,
					r: true,
					q: true,
				},
				links: {
					n: 4,
					c: z,
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
		return "CMsgSystemAudioManagerStateHW";
	}
}
export class K6 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K6.prototype.rtime_filter) {
			i.Sg(K6.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		K6.sm_m ||= {
			proto: K6,
			fields: {
				rtime_filter: {
					n: 1,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				counter: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				hw: {
					n: 3,
					c: x,
				},
			},
		};
		return K6.sm_m;
	}
	static MBF() {
		K6.sm_mbf ||= i.w0(K6.M());
		return K6.sm_mbf;
	}
	toObject(e = false) {
		return K6.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(K6.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(K6.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new K6();
		return K6.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(K6.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		K6.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(K6.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		K6.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemAudioManagerState";
	}
}
export class id extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!id.prototype.counter) {
			i.Sg(id.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		id.sm_m ||= {
			proto: id,
			fields: {
				counter: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return id.sm_m;
	}
	static MBF() {
		id.sm_mbf ||= i.w0(id.M());
		return id.sm_mbf;
	}
	toObject(e = false) {
		return id.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(id.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(id.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new id();
		return id.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(id.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		id.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(id.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		id.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemAudioManagerUpdateSomething";
	}
}
class V extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.id) {
			i.Sg(V.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		V.sm_m ||= {
			proto: V,
			fields: {
				id: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				width: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				height: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				refresh_hz: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CMsgSystemDisplayMode";
	}
}
class H extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H.prototype.id) {
			i.Sg(H.M());
		}
		n_Message.initialize(this, e, 0, -1, [11, 18], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H.sm_m ||= {
			proto: H,
			fields: {
				id: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				description: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_primary: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_enabled: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_internal: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				has_mode_override: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				width_mm: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				height_mm: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				current_mode_id: {
					n: 10,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				modes: {
					n: 11,
					c: V,
					r: true,
					q: true,
				},
				refresh_rate_min: {
					n: 12,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				refresh_rate_max: {
					n: 13,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_vrr_capable: {
					n: 14,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_vrr_output_active: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_hdr_capable: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_hdr_output_active: {
					n: 17,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				supported_refresh_rates: {
					n: 18,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
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
		return "CMsgSystemDisplay";
	}
}
export class EX extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!EX.prototype.displays) {
			i.Sg(EX.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		EX.sm_m ||= {
			proto: EX,
			fields: {
				displays: {
					n: 1,
					c: H,
					r: true,
					q: true,
				},
				is_mode_switching_supported: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				compatibility_mode: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return EX.sm_m;
	}
	static MBF() {
		EX.sm_mbf ||= i.w0(EX.M());
		return EX.sm_mbf;
	}
	toObject(e = false) {
		return EX.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(EX.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(EX.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new EX();
		return EX.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(EX.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		EX.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(EX.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		EX.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemDisplayManagerState";
	}
}
export class YW extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!YW.prototype.display_id) {
			i.Sg(YW.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		YW.sm_m ||= {
			proto: YW,
			fields: {
				display_id: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				mode_id: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return YW.sm_m;
	}
	static MBF() {
		YW.sm_mbf ||= i.w0(YW.M());
		return YW.sm_mbf;
	}
	toObject(e = false) {
		return YW.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(YW.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(YW.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new YW();
		return YW.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(YW.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		YW.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(YW.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		YW.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemDisplayManagerSetMode";
	}
}
export class sH extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!sH.prototype.idle_backlight_dim_battery_seconds) {
			i.Sg(sH.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		sH.sm_m ||= {
			proto: sH,
			fields: {
				idle_backlight_dim_battery_seconds: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				idle_backlight_dim_ac_seconds: {
					n: 2,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				idle_suspend_battery_seconds: {
					n: 3,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				idle_suspend_ac_seconds: {
					n: 4,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				idle_suspend_supressed: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_adaptive_brightness_available: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_adaptive_brightness_enabled: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_nightmode_enabled: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_nightmode_tintstrength: {
					n: 11,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_nightmode_maxhue: {
					n: 12,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_nightmode_maxsat: {
					n: 13,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_nightmode_uiexp: {
					n: 14,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_nightmode_blend: {
					n: 15,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_nightmode_reset: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_nightmode_schedule_enabled: {
					n: 17,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_nightmode_schedule_starttime: {
					n: 18,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_nightmode_schedule_endtime: {
					n: 19,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_diagnostics_enabled: {
					n: 20,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				als_lux_primary: {
					n: 21,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				als_lux_median: {
					n: 22,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_backlight_raw: {
					n: 23,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_brightness_adaptivemin: {
					n: 24,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_brightness_adaptivemax: {
					n: 25,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				is_wifi_powersave_enabled: {
					n: 26,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_fan_control_available: {
					n: 27,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				fan_control_mode: {
					n: 28,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				is_display_brightness_available: {
					n: 29,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_display_colormanagement_available: {
					n: 31,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_colorgamut: {
					n: 32,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				als_lux_alternate: {
					n: 33,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				is_display_colortemp_available: {
					n: 34,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_colortemp: {
					n: 35,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_colortemp_default: {
					n: 36,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				display_colortemp_enabled: {
					n: 37,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_colorgamut_labelset: {
					n: 38,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				display_brightness_overdrive_hdr_split: {
					n: 39,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
			},
		};
		return sH.sm_m;
	}
	static MBF() {
		sH.sm_mbf ||= i.w0(sH.M());
		return sH.sm_mbf;
	}
	toObject(e = false) {
		return sH.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(sH.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(sH.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new sH();
		return sH.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(sH.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		sH.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(sH.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		sH.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemManagerSettings";
	}
}
export class hr extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!hr.prototype.branch) {
			i.Sg(hr.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		hr.sm_m ||= {
			proto: hr,
			fields: {
				branch: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				custom_branch: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return hr.sm_m;
	}
	static MBF() {
		hr.sm_mbf ||= i.w0(hr.M());
		return hr.sm_mbf;
	}
	toObject(e = false) {
		return hr.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(hr.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(hr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new hr();
		return hr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(hr.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		hr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(hr.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		hr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSelectOSBranchParams";
	}
}
class Y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.stage_progress) {
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
				stage_progress: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				stage_size_bytes: {
					n: 2,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				rtime_estimated_completion: {
					n: 3,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
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
		return "CMsgSystemUpdateProgress";
	}
}
class K extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K.prototype.type) {
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
				type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				eresult: {
					n: 2,
					d: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime_checked: {
					n: 3,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				available: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				version: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				auto_message: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				system_restart_pending: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CMsgSystemUpdateCheckResult";
	}
}
export class bM extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!bM.prototype.apply_types) {
			i.Sg(bM.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		bM.sm_m ||= {
			proto: bM,
			fields: {
				apply_types: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
			},
		};
		return bM.sm_m;
	}
	static MBF() {
		bM.sm_mbf ||= i.w0(bM.M());
		return bM.sm_mbf;
	}
	toObject(e = false) {
		return bM.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(bM.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(bM.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new bM();
		return bM.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(bM.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		bM.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(bM.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		bM.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSystemUpdateApplyParams";
	}
}
class J extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!J.prototype.type) {
			i.Sg(J.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		J.sm_m ||= {
			proto: J,
			fields: {
				type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				eresult: {
					n: 2,
					d: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				requires_client_restart: {
					n: 3,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				requires_system_restart: {
					n: 4,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CMsgSystemUpdateApplyResult";
	}
}
export class q extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.state) {
			i.Sg(q.M());
		}
		n_Message.initialize(this, e, 0, -1, [3, 4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				state: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				progress: {
					n: 2,
					c: Y,
				},
				update_check_results: {
					n: 3,
					c: K,
					r: true,
					q: true,
				},
				update_apply_results: {
					n: 4,
					c: J,
					r: true,
					q: true,
				},
				supports_os_updates: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CMsgSystemUpdateState";
	}
}
export class ke extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ke.prototype.appid) {
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
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CMsgAchievementChange";
	}
}
export class Z5 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z5.prototype.selected_display_name) {
			i.Sg(Z5.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z5.sm_m ||= {
			proto: Z5,
			fields: {
				selected_display_name: {
					n: 1,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				monitors: {
					n: 2,
					c: re,
					r: true,
					q: true,
				},
			},
		};
		return Z5.sm_m;
	}
	static MBF() {
		Z5.sm_mbf ||= i.w0(Z5.M());
		return Z5.sm_mbf;
	}
	toObject(e = false) {
		return Z5.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Z5.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Z5.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Z5();
		return Z5.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Z5.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Z5.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Z5.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Z5.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgMonitorInfo";
	}
}
class re extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.monitor_device_name) {
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
				monitor_device_name: {
					n: 1,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				monitor_display_name: {
					n: 2,
					q: true,
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
		return "CMsgMonitorInfo_MonitorInfo";
	}
}
export class tm extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!tm.prototype.report_id) {
			i.Sg(tm.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		tm.sm_m ||= {
			proto: tm,
			fields: {
				report_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return tm.sm_m;
	}
	static MBF() {
		tm.sm_mbf ||= i.w0(tm.M());
		return tm.sm_mbf;
	}
	toObject(e = false) {
		return tm.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(tm.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(tm.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new tm();
		return tm.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(tm.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		tm.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(tm.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		tm.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgGenerateSystemReportReply";
	}
}
export class YX extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!YX.prototype.connect_count) {
			i.Sg(YX.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		YX.sm_m ||= {
			proto: YX,
			fields: {
				connect_count: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return YX.sm_m;
	}
	static MBF() {
		YX.sm_mbf ||= i.w0(YX.M());
		return YX.sm_mbf;
	}
	toObject(e = false) {
		return YX.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(YX.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(YX.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new YX();
		return YX.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(YX.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		YX.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(YX.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		YX.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgWebUITransportFailure";
	}
}
