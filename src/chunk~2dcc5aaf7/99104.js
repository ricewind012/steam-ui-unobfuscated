import n from "./58663.js";
import i from "./48307.js";
import { I8 } from "./12176.js";

const { Message } = n;

class o extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!o.prototype.original_hostname) {
			i.Sg(o.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		o.sm_m ||= {
			proto: o,
			fields: {
				original_hostname: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				actual_hostname: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				path: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				base_name: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				success: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				status_code: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				address_of_request_url: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				response_time_ms: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				bytes_received: {
					n: 9,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				num_retries: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CClientMetrics_ClientBootstrap_RequestInfo";
	}
}
class l extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.launcher_type) {
			i.Sg(l.M());
		}
		Message.initialize(this, e, 0, -1, [7, 8], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		l.sm_m ||= {
			proto: l,
			fields: {
				launcher_type: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steam_realm: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				beta_name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				download_completed: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				total_time_ms: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				manifest_requests: {
					n: 7,
					c: o,
					r: true,
					q: true,
				},
				package_requests: {
					n: 8,
					c: o,
					r: true,
					q: true,
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
		return "CClientMetrics_ClientBootstrap_Summary";
	}
}
class c extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.class_100) {
			i.Sg(c.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				class_100: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				class_200: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				class_300: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				class_400: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				class_500: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				no_response: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				class_unknown: {
					n: 7,
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
		return "CClientMetrics_ContentDownloadResponse_Counts";
	}
}
class m extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.hostname) {
			i.Sg(m.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				hostname: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				source_type: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				counts: {
					n: 3,
					c,
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
		return "CClientMetrics_ContentDownloadResponse_HostCounts";
	}
}
class u extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.hosts) {
			i.Sg(u.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				hosts: {
					n: 1,
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
		return "CClientMetrics_ContentDownloadResponse_Hosts";
	}
}
class A extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.raw_version) {
			i.Sg(A.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				raw_version: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				requested_interface_type: {
					n: 2,
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
		return "CClientMetrics_AppInterfaceCreation";
	}
}
class p extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.interface_name) {
			i.Sg(p.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				interface_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				method_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				call_count: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CClientMetrics_AppInterfaceMethodCounts";
	}
}
class g extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.game_id) {
			i.Sg(g.M());
		}
		Message.initialize(this, e, 0, -1, [2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				interfaces_created: {
					n: 2,
					c: A,
					r: true,
					q: true,
				},
				methods_called: {
					n: 3,
					c: p,
					r: true,
					q: true,
				},
				session_length_seconds: {
					n: 4,
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
		return "CClientMetrics_AppInterfaceStats_Notification";
	}
}
class h extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.protocol_tested) {
			i.Sg(h.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				protocol_tested: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				connectivity_state: {
					n: 2,
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
		return "CClientMetrics_IPv6Connectivity_Result";
	}
}
class C extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.cell_id) {
			i.Sg(C.M());
		}
		Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				cell_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				results: {
					n: 2,
					c: h,
					r: true,
					q: true,
				},
				private_ip_is_rfc6598: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CClientMetrics_IPv6Connectivity_Notification";
	}
}
export class bc extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!bc.prototype.product) {
			i.Sg(bc.M());
		}
		Message.initialize(this, e, 0, -1, [3, 4, 5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		bc.sm_m ||= {
			proto: bc,
			fields: {
				product: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				version: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				routes: {
					n: 3,
					c: N4,
					r: true,
					q: true,
				},
				components: {
					n: 4,
					c: Zd,
					r: true,
					q: true,
				},
				actions: {
					n: 5,
					c: Ys,
					r: true,
					q: true,
				},
			},
		};
		return bc.sm_m;
	}
	static MBF() {
		bc.sm_mbf ||= i.w0(bc.M());
		return bc.sm_mbf;
	}
	toObject(e = false) {
		return bc.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(bc.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(bc.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new bc();
		return bc.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(bc.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		bc.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(bc.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		bc.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientMetrics_ReportReactUsage_Notification";
	}
}
export class N4 extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N4.prototype.route) {
			i.Sg(N4.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N4.sm_m ||= {
			proto: N4,
			fields: {
				route: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				count: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return N4.sm_m;
	}
	static MBF() {
		N4.sm_mbf ||= i.w0(N4.M());
		return N4.sm_mbf;
	}
	toObject(e = false) {
		return N4.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(N4.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(N4.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new N4();
		return N4.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(N4.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		N4.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(N4.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		N4.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientMetrics_ReportReactUsage_Notification_RouteData";
	}
}
export class Zd extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Zd.prototype.component) {
			i.Sg(Zd.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Zd.sm_m ||= {
			proto: Zd,
			fields: {
				component: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				count: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Zd.sm_m;
	}
	static MBF() {
		Zd.sm_mbf ||= i.w0(Zd.M());
		return Zd.sm_mbf;
	}
	toObject(e = false) {
		return Zd.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Zd.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Zd.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Zd();
		return Zd.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Zd.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Zd.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Zd.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Zd.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientMetrics_ReportReactUsage_Notification_ComponentData";
	}
}
export class Ys extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ys.prototype.action) {
			i.Sg(Ys.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ys.sm_m ||= {
			proto: Ys,
			fields: {
				action: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				count: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Ys.sm_m;
	}
	static MBF() {
		Ys.sm_mbf ||= i.w0(Ys.M());
		return Ys.sm_mbf;
	}
	toObject(e = false) {
		return Ys.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ys.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ys.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ys();
		return Ys.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ys.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ys.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ys.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ys.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientMetrics_ReportReactUsage_Notification_ActionData";
	}
}
export class Gf extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Gf.prototype.product) {
			i.Sg(Gf.M());
		}
		Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Gf.sm_m ||= {
			proto: Gf,
			fields: {
				product: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				version: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				errors: {
					n: 3,
					c: tF,
					r: true,
					q: true,
				},
			},
		};
		return Gf.sm_m;
	}
	static MBF() {
		Gf.sm_mbf ||= i.w0(Gf.M());
		return Gf.sm_mbf;
	}
	toObject(e = false) {
		return Gf.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Gf.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Gf.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Gf();
		return Gf.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Gf.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Gf.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Gf.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Gf.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientMetrics_ReportClientError_Notification";
	}
}
export class tF extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!tF.prototype.identifier) {
			i.Sg(tF.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		tF.sm_m ||= {
			proto: tF,
			fields: {
				identifier: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				message: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				count: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				context: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return tF.sm_m;
	}
	static MBF() {
		tF.sm_mbf ||= i.w0(tF.M());
		return tF.sm_mbf;
	}
	toObject(e = false) {
		return tF.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(tF.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(tF.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new tF();
		return tF.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(tF.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		tF.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(tF.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		tF.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientMetrics_ReportClientError_Notification_Error";
	}
}
class B extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.type) {
			i.Sg(B.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				num_ops: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				num_bytes: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				busy_time_ms: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				idle_time_ms: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				sum_run_time_ms: {
					n: 6,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				sum_wait_time_ms: {
					n: 7,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CClientMetrics_SteamPipeWorkStats_Operation";
	}
}
class v extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.appid) {
			i.Sg(v.M());
		}
		Message.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				depotid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				work_type: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				operations: {
					n: 4,
					c: B,
					r: true,
					q: true,
				},
				hardware_type: {
					n: 5,
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
		return "CClientMetrics_SteamPipeWorkStats_Notification";
	}
}
class I extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.summary) {
			i.Sg(I.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				summary: {
					n: 1,
					c: l,
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
		return "CClientMetrics_ClientBootstrap_Notification";
	}
}
class E extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.cell_id) {
			i.Sg(E.M());
		}
		Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				cell_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				stats: {
					n: 2,
					c: M,
					r: true,
					q: true,
				},
				throttling_kbps: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				os_type: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				device_type: {
					n: 5,
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
		return "CClientMetrics_DownloadRates_Notification";
	}
}
class M extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.source_type) {
			i.Sg(M.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				source_type: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				source_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				bytes: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				host_name: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				microseconds: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				used_ipv6: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				proxied: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				used_http2: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				cache_hits: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				cache_misses: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				hit_bytes: {
					n: 11,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				miss_bytes: {
					n: 12,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CClientMetrics_DownloadRates_Notification_StatsInfo";
	}
}
class T extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.validation_result) {
			i.Sg(T.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				validation_result: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				app_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				staged_files: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				user_initiated: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				early_out: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				chunks_scanned: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				chunks_corrupt: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				bytes_scanned: {
					n: 8,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chunk_bytes_corrupt: {
					n: 9,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				total_file_size_corrupt: {
					n: 10,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CClientMetrics_ContentValidation_Notification";
	}
}
class R extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.app_id) {
			i.Sg(R.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				app_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				platform_type: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				preload: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				blocking_app_launch: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				files_uploaded: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				files_downloaded: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				files_deleted: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				bytes_uploaded: {
					n: 8,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				bytes_downloaded: {
					n: 9,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				microsec_total: {
					n: 10,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				microsec_init_caches: {
					n: 11,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				microsec_validate_state: {
					n: 12,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				microsec_ac_launch: {
					n: 13,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				microsec_ac_prep_user_files: {
					n: 14,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				microsec_ac_exit: {
					n: 15,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				microsec_build_sync_list: {
					n: 16,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				microsec_delete_files: {
					n: 17,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				microsec_download_files: {
					n: 18,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				microsec_upload_files: {
					n: 19,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				hardware_type: {
					n: 20,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				files_managed: {
					n: 21,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CClientMetrics_CloudAppSyncStats_Notification";
	}
}
class k extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.cell_id) {
			i.Sg(k.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				cell_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				data: {
					n: 2,
					c: u,
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
		return "CClientMetrics_ContentDownloadResponse_Counts_Notification";
	}
}
class D extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.eresult) {
			i.Sg(D.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				eresult: {
					n: 1,
					d: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				share_method: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				seconds: {
					n: 3,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				bytes: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				gameid: {
					n: 5,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CClientMetrics_ClipShare_Notification";
	}
}
export class IR extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!IR.prototype.original_range_method) {
			i.Sg(IR.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		IR.sm_m ||= {
			proto: IR,
			fields: {
				original_range_method: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				start: {
					n: 2,
					c: F,
				},
				end: {
					n: 3,
					c: F,
				},
				seconds: {
					n: 4,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				gameid: {
					n: 5,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return IR.sm_m;
	}
	static MBF() {
		IR.sm_mbf ||= i.w0(IR.M());
		return IR.sm_mbf;
	}
	toObject(e = false) {
		return IR.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(IR.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(IR.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new IR();
		return IR.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(IR.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		IR.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(IR.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		IR.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientMetrics_ClipRange_Notification";
	}
}
class F extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.original_range_method) {
			i.Sg(F.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		F.sm_m ||= {
			proto: F,
			fields: {
				original_range_method: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				latest_range_method: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				delta_ms: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CClientMetrics_ClipRange_Notification_RelativeRangeEdge";
	}
}
class G extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.recording_type) {
			i.Sg(G.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				recording_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				seconds: {
					n: 2,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				bytes: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				gameid: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				instant_clip: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CClientMetrics_EndGameRecording_Notification";
	}
}
class O extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.client_args) {
			i.Sg(O.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O.sm_m ||= {
			proto: O,
			fields: {
				client_args: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				gpu_webview_regkey_disabled: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				suppress_gpu_chrome: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				browser_not_supported: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				hw_accel_video_regkey_disabled: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				mini_mode_enabled: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				fps_counter_enabled: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				library_low_bandwidth_mode_enabled: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				library_low_perf_mode_enabled: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				gr_mode: {
					n: 10,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CClientMetrics_ReportClientArgs_Notification";
	}
}
class P extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.glibc_version_major) {
			i.Sg(P.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				glibc_version_major: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				glibc_version_minor: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				account_type: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				launcher_type: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				game_server_appid: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				process_name: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CClientMetrics_ReportLinuxStats_Notification";
	}
}
export let _5;
((e) => {
	e.ClientAppInterfaceStatsReport = (e, t) =>
		e.SendNotification(
			"ClientMetrics.ClientAppInterfaceStatsReport#1",
			I8(g, t),
			{
				ePrivilege: 1,
			},
		);
	e.ClientIPv6ConnectivityReport = (e, t) =>
		e.SendNotification(
			"ClientMetrics.ClientIPv6ConnectivityReport#1",
			I8(C, t),
			{
				ePrivilege: 1,
			},
		);
	e.SteamPipeWorkStatsReport = (e, t) =>
		e.SendNotification("ClientMetrics.SteamPipeWorkStatsReport#1", I8(v, t), {
			ePrivilege: 1,
		});
	e.ReportReactUsage = (e, t) =>
		e.SendNotification("ClientMetrics.ReportReactUsage#1", I8(bc, t), {
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.ReportClientError = (e, t) =>
		e.SendNotification("ClientMetrics.ReportClientError#1", I8(Gf, t), {
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.ClientBootstrapReport = (e, t) =>
		e.SendNotification("ClientMetrics.ClientBootstrapReport#1", I8(I, t), {
			ePrivilege: 1,
		});
	e.ClientDownloadRatesReport = (e, t) =>
		e.SendNotification("ClientMetrics.ClientDownloadRatesReport#1", I8(E, t), {
			ePrivilege: 1,
		});
	e.ClientContentValidationReport = (e, t) =>
		e.SendNotification(
			"ClientMetrics.ClientContentValidationReport#1",
			I8(T, t),
			{
				ePrivilege: 1,
			},
		);
	e.ClientCloudAppSyncStats = (e, t) =>
		e.SendNotification("ClientMetrics.ClientCloudAppSyncStats#1", I8(R, t), {
			ePrivilege: 1,
		});
	e.ClientDownloadResponseCodeCounts = (e, t) =>
		e.SendNotification(
			"ClientMetrics.ClientDownloadResponseCodeCounts#1",
			I8(k, t),
			{
				ePrivilege: 1,
			},
		);
	e.ReportClientArgs = (e, t) =>
		e.SendNotification("ClientMetrics.ReportClientArgs#1", I8(O, t), {
			ePrivilege: 1,
		});
	e.ReportLinuxStats = (e, t) =>
		e.SendNotification("ClientMetrics.ReportLinuxStats#1", I8(P, t), {
			ePrivilege: 1,
		});
	e.ReportClipShare = (e, t) =>
		e.SendNotification("ClientMetrics.ReportClipShare#1", I8(D, t), {
			ePrivilege: 1,
		});
	e.ReportClipRange = (e, t) =>
		e.SendNotification("ClientMetrics.ReportClipRange#1", I8(IR, t), {
			ePrivilege: 1,
		});
	e.ReportEndGameRecording = (e, t) =>
		e.SendNotification("ClientMetrics.ReportEndGameRecording#1", I8(G, t), {
			ePrivilege: 1,
		});
})((_5 ||= {}));
