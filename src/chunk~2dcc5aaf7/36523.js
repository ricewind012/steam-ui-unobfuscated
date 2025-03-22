var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require(/*webcrack:missing*/ "./29218.js");
const o = n.Message;
export class qu extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qu.prototype.account_name) {
			i.Sg(qu.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qu.sm_m ||= {
			proto: qu,
			fields: {
				account_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return qu.sm_m;
	}
	static MBF() {
		qu.sm_mbf ||= i.w0(qu.M());
		return qu.sm_mbf;
	}
	toObject(e = false) {
		return qu.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qu.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qu.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qu();
		return qu.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qu.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		qu.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qu.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		qu.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_GetPasswordRSAPublicKey_Request";
	}
}
class c extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.publickey_mod) {
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
				publickey_mod: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				publickey_exp: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				timestamp: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CAuthentication_GetPasswordRSAPublicKey_Response";
	}
}
export class tS extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!tS.prototype.device_friendly_name) {
			i.Sg(tS.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		tS.sm_m ||= {
			proto: tS,
			fields: {
				device_friendly_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				platform_type: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				os_type: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				gaming_device_type: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				client_count: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				machine_id: {
					n: 6,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				app_type: {
					n: 7,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return tS.sm_m;
	}
	static MBF() {
		tS.sm_mbf ||= i.w0(tS.M());
		return tS.sm_mbf;
	}
	toObject(e = false) {
		return tS.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(tS.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(tS.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new tS();
		return tS.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(tS.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		tS.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(tS.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		tS.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_DeviceDetails";
	}
}
class u extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.confirmation_type) {
			i.Sg(u.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				confirmation_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				associated_message: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CAuthentication_AllowedConfirmation";
	}
}
export class R9 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R9.prototype.device_friendly_name) {
			i.Sg(R9.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R9.sm_m ||= {
			proto: R9,
			fields: {
				device_friendly_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				platform_type: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				device_details: {
					n: 3,
					c: tS,
				},
				website_id: {
					n: 4,
					d: "Unknown",
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return R9.sm_m;
	}
	static MBF() {
		R9.sm_mbf ||= i.w0(R9.M());
		return R9.sm_mbf;
	}
	toObject(e = false) {
		return R9.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(R9.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(R9.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new R9();
		return R9.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(R9.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		R9.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(R9.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		R9.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_BeginAuthSessionViaQR_Request";
	}
}
class A extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.client_id) {
			i.Sg(A.M());
		}
		o.initialize(this, e, 0, -1, [5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				client_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				challenge_url: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				request_id: {
					n: 3,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				interval: {
					n: 4,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				allowed_confirmations: {
					n: 5,
					c: u,
					r: true,
					q: true,
				},
				version: {
					n: 6,
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
		return "CAuthentication_BeginAuthSessionViaQR_Response";
	}
}
export class iP extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!iP.prototype.device_friendly_name) {
			i.Sg(iP.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		iP.sm_m ||= {
			proto: iP,
			fields: {
				device_friendly_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				account_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				encrypted_password: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				encryption_timestamp: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				remember_login: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				platform_type: {
					n: 6,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				persistence: {
					n: 7,
					d: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				website_id: {
					n: 8,
					d: "Unknown",
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				device_details: {
					n: 9,
					c: tS,
				},
				guard_data: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				language: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				qos_level: {
					n: 12,
					d: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return iP.sm_m;
	}
	static MBF() {
		iP.sm_mbf ||= i.w0(iP.M());
		return iP.sm_mbf;
	}
	toObject(e = false) {
		return iP.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(iP.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(iP.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new iP();
		return iP.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(iP.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		iP.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(iP.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		iP.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_BeginAuthSessionViaCredentials_Request";
	}
}
class g extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.client_id) {
			i.Sg(g.M());
		}
		o.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				client_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				request_id: {
					n: 2,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				interval: {
					n: 3,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				allowed_confirmations: {
					n: 4,
					c: u,
					r: true,
					q: true,
				},
				steamid: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				weak_token: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				agreement_session_url: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				extended_error_message: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CAuthentication_BeginAuthSessionViaCredentials_Response";
	}
}
export class Ev extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ev.prototype.client_id) {
			i.Sg(Ev.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ev.sm_m ||= {
			proto: Ev,
			fields: {
				client_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				request_id: {
					n: 2,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				token_to_revoke: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return Ev.sm_m;
	}
	static MBF() {
		Ev.sm_mbf ||= i.w0(Ev.M());
		return Ev.sm_mbf;
	}
	toObject(e = false) {
		return Ev.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ev.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ev.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ev();
		return Ev.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ev.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ev.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ev.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ev.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_PollAuthSessionStatus_Request";
	}
}
class C extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.new_client_id) {
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
				new_client_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				new_challenge_url: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				refresh_token: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				access_token: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				had_remote_interaction: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				account_name: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				new_guard_data: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				agreement_session_url: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CAuthentication_PollAuthSessionStatus_Response";
	}
}
class _ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.client_id) {
			i.Sg(_.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				client_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CAuthentication_GetAuthSessionInfo_Request";
	}
}
class f extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.ip) {
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
				ip: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				geoloc: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				city: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				state: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				country: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				platform_type: {
					n: 6,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				device_friendly_name: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				version: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				login_history: {
					n: 9,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				requestor_location_mismatch: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				high_usage_login: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				requested_persistence: {
					n: 12,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				device_trust: {
					n: 13,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				app_type: {
					n: 14,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "CAuthentication_GetAuthSessionInfo_Response";
	}
}
class b extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.client_id) {
			i.Sg(b.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				client_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				language: {
					n: 2,
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
		return "CAuthentication_GetAuthSessionRiskInfo_Request";
	}
}
class y extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.location_confirmer) {
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
				location_confirmer: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				location_requestor: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				location_other: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				platform_type: {
					n: 4,
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
		return "CAuthentication_GetAuthSessionRiskInfo_Response";
	}
}
class S extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.client_id) {
			i.Sg(S.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				client_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				results: {
					n: 2,
					c: w,
				},
				selected_action: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				did_confirm_login: {
					n: 4,
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
		var e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(S.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_NotifyRiskQuizResults_Notification";
	}
}
class w extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.platform) {
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
				platform: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				location: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				action: {
					n: 3,
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
		return "CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults";
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
		return "CAuthentication_GetAuthSessionsForAccount_Request";
	}
}
class v extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.client_ids) {
			i.Sg(v.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				client_ids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
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
		return "CAuthentication_GetAuthSessionsForAccount_Response";
	}
}
class I extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.version) {
			i.Sg(I.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				version: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				client_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				signature: {
					n: 4,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				confirm: {
					n: 5,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				persistence: {
					n: 6,
					d: 1,
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
		var e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(I.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
	}
}
class E extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new E();
		return E.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
	}
}
export class Qc extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Qc.prototype.client_id) {
			i.Sg(Qc.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Qc.sm_m ||= {
			proto: Qc,
			fields: {
				client_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				code: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				code_type: {
					n: 4,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return Qc.sm_m;
	}
	static MBF() {
		Qc.sm_mbf ||= i.w0(Qc.M());
		return Qc.sm_mbf;
	}
	toObject(e = false) {
		return Qc.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Qc.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Qc.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Qc();
		return Qc.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Qc.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Qc.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Qc.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Qc.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
	}
}
class T extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.agreement_session_url) {
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
				agreement_session_url: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
	}
}
class R extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.refresh_token) {
			i.Sg(R.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				refresh_token: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				renewal_type: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		var e = new n.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(R.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_AccessToken_GenerateForApp_Request";
	}
}
class k extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.access_token) {
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
				access_token: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				refresh_token: {
					n: 2,
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
		return "CAuthentication_AccessToken_GenerateForApp_Response";
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
		return "CAuthentication_RefreshToken_Enumerate_Request";
	}
}
class N extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.refresh_tokens) {
			i.Sg(N.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				refresh_tokens: {
					n: 1,
					c: G,
					r: true,
					q: true,
				},
				requesting_token: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CAuthentication_RefreshToken_Enumerate_Response";
	}
}
class F extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.time) {
			i.Sg(F.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		F.sm_m ||= {
			proto: F,
			fields: {
				time: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ip: {
					n: 2,
					c: s.kK,
				},
				locale: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				country: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				state: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				city: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		var e = new n.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(F.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
	}
}
class G extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.token_id) {
			i.Sg(G.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				token_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				token_description: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				time_updated: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				platform_type: {
					n: 4,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				logged_in: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				os_platform: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				auth_type: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				gaming_device_type: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				first_seen: {
					n: 9,
					c: F,
				},
				last_seen: {
					n: 10,
					c: F,
				},
				os_type: {
					n: 11,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				authentication_type: {
					n: 12,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		var e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(G.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
	}
}
class O extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.token) {
			i.Sg(O.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O.sm_m ||= {
			proto: O,
			fields: {
				token: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				revoke_action: {
					n: 2,
					d: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		var e = new n.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(O.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_Token_Revoke_Request";
	}
}
class P extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return P.toObject(e, this);
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
		return new P();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new P();
		return P.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_Token_Revoke_Response";
	}
}
class L extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!L.prototype.token_id) {
			i.Sg(L.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		L.sm_m ||= {
			proto: L,
			fields: {
				token_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				revoke_action: {
					n: 3,
					d: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				signature: {
					n: 4,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
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
		var e = new n.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(L.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_RefreshToken_Revoke_Request";
	}
}
class z extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return z.toObject(e, this);
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
		return new z();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new z();
		return z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_RefreshToken_Revoke_Response";
	}
}
class x extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.steamid) {
			i.Sg(x.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		x.sm_m ||= {
			proto: x,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				token: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				signature: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		var e = new n.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(x.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_MigrateMobileSession_Request";
	}
}
class U extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.refresh_token) {
			i.Sg(U.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		U.sm_m ||= {
			proto: U,
			fields: {
				refresh_token: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				access_token: {
					n: 2,
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
		var e = new n.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(U.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthentication_MigrateMobileSession_Response";
	}
}
class W extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W.prototype.token_id) {
			i.Sg(W.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W.sm_m ||= {
			proto: W,
			fields: {
				token_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				token_description: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				time_updated: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				platform_type: {
					n: 4,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				token_state: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				owner_steamid: {
					n: 6,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				os_platform: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				os_type: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				auth_type: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				gaming_device_type: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				first_seen: {
					n: 11,
					c: V,
				},
				last_seen: {
					n: 12,
					c: V,
				},
			},
		};
		return W.sm_m;
	}
	static MBF() {
		W.sm_mbf ||= i.w0(W.M());
		return W.sm_mbf;
	}
	toObject(e = false) {
		return W.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(W.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(W.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new W();
		return W.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(W.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(W.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSupportRefreshTokenDescription";
	}
}
class V extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.time) {
			i.Sg(V.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		V.sm_m ||= {
			proto: V,
			fields: {
				time: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ip: {
					n: 2,
					c: s.kK,
				},
				country: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				state: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				city: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		var e = new n.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(V.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSupportRefreshTokenDescription_TokenUsageEvent";
	}
}
class H extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H.prototype.action) {
			i.Sg(H.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H.sm_m ||= {
			proto: H,
			fields: {
				action: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				time: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ip: {
					n: 3,
					c: s.kK,
				},
				actor: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		var e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(H.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSupportRefreshTokenAudit";
	}
}
class j extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!j.prototype.steamid) {
			i.Sg(j.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		j.sm_m ||= {
			proto: j,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				include_revoked_tokens: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return j.sm_m;
	}
	static MBF() {
		j.sm_mbf ||= i.w0(j.M());
		return j.sm_mbf;
	}
	toObject(e = false) {
		return j.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(j.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(j.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new j();
		return j.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(j.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(j.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
	}
}
class q extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.refresh_tokens) {
			i.Sg(q.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				refresh_tokens: {
					n: 1,
					c: W,
					r: true,
					q: true,
				},
				last_token_reset: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		var e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(q.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
	}
}
class Q extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q.prototype.token_id) {
			i.Sg(Q.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q.sm_m ||= {
			proto: Q,
			fields: {
				token_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		var e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Q.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthenticationSupport_QueryRefreshTokenByID_Request";
	}
}
class Z extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z.prototype.refresh_tokens) {
			i.Sg(Z.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z.sm_m ||= {
			proto: Z,
			fields: {
				refresh_tokens: {
					n: 1,
					c: W,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Z.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
	}
}
class Y extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.token_id) {
			i.Sg(Y.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Y.sm_m ||= {
			proto: Y,
			fields: {
				token_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		var e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Y.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthenticationSupport_RevokeToken_Request";
	}
}
class K extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return K.toObject(e, this);
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
		return new K();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new K();
		return K.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthenticationSupport_RevokeToken_Response";
	}
}
class X extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!X.prototype.token_id) {
			i.Sg(X.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		X.sm_m ||= {
			proto: X,
			fields: {
				token_id: {
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
		var e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(X.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthenticationSupport_GetTokenHistory_Request";
	}
}
class J extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!J.prototype.history) {
			i.Sg(J.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		J.sm_m ||= {
			proto: J,
			fields: {
				history: {
					n: 1,
					c: H,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(J.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthenticationSupport_GetTokenHistory_Response";
	}
}
class $ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$.prototype.steamid) {
			i.Sg($.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$.sm_m ||= {
			proto: $,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				token_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		var e = new n.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0($.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthenticationSupport_MarkTokenCompromised_Request";
	}
}
class ee extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAuthenticationSupport_MarkTokenCompromised_Response";
	}
}
class te extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!te.prototype.platform) {
			i.Sg(te.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		te.sm_m ||= {
			proto: te,
			fields: {
				platform: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(te.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudGaming_CreateNonce_Request";
	}
}
class re extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.nonce) {
			i.Sg(re.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		re.sm_m ||= {
			proto: re,
			fields: {
				nonce: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				expiry: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(re.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudGaming_CreateNonce_Response";
	}
}
class ne extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ne.prototype.appid) {
			i.Sg(ne.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ne.sm_m ||= {
			proto: ne,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				minutes_remaining: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ne.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudGaming_TimeRemaining";
	}
}
class ie extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ie.prototype.platform) {
			i.Sg(ie.M());
		}
		o.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ie.sm_m ||= {
			proto: ie,
			fields: {
				platform: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				appid_list: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return ie.sm_m;
	}
	static MBF() {
		ie.sm_mbf ||= i.w0(ie.M());
		return ie.sm_mbf;
	}
	toObject(e = false) {
		return ie.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ie.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ie.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ie();
		return ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ie.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ie.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudGaming_GetTimeRemaining_Request";
	}
}
class ae extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ae.prototype.entries) {
			i.Sg(ae.M());
		}
		o.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ae.sm_m ||= {
			proto: ae,
			fields: {
				entries: {
					n: 2,
					c: ne,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ae.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCloudGaming_GetTimeRemaining_Response";
	}
}
export var kX;
var oe;
var le;
(function (e) {
	e.GetPasswordRSAPublicKey = function (e, t) {
		return e.SendMsg(
			"Authentication.GetPasswordRSAPublicKey#1",
			(0, a.I8)(qu, t),
			c,
			{
				bConstMethod: true,
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.BeginAuthSessionViaQR = function (e, t) {
		return e.SendMsg(
			"Authentication.BeginAuthSessionViaQR#1",
			(0, a.I8)(R9, t),
			A,
			{
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.BeginAuthSessionViaCredentials = function (e, t) {
		return e.SendMsg(
			"Authentication.BeginAuthSessionViaCredentials#1",
			(0, a.I8)(iP, t),
			g,
			{
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.PollAuthSessionStatus = function (e, t) {
		return e.SendMsg(
			"Authentication.PollAuthSessionStatus#1",
			(0, a.I8)(Ev, t),
			C,
			{
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.GetAuthSessionInfo = function (e, t) {
		return e.SendMsg(
			"Authentication.GetAuthSessionInfo#1",
			(0, a.I8)(_, t),
			f,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetAuthSessionRiskInfo = function (e, t) {
		return e.SendMsg(
			"Authentication.GetAuthSessionRiskInfo#1",
			(0, a.I8)(b, t),
			y,
			{
				ePrivilege: 1,
			},
		);
	};
	e.NotifyRiskQuizResults = function (e, t) {
		return e.SendNotification(
			"Authentication.NotifyRiskQuizResults#1",
			(0, a.I8)(S, t),
			{
				ePrivilege: 1,
			},
		);
	};
	e.UpdateAuthSessionWithMobileConfirmation = function (e, t) {
		return e.SendMsg(
			"Authentication.UpdateAuthSessionWithMobileConfirmation#1",
			(0, a.I8)(I, t),
			E,
			{
				ePrivilege: 1,
			},
		);
	};
	e.UpdateAuthSessionWithSteamGuardCode = function (e, t) {
		return e.SendMsg(
			"Authentication.UpdateAuthSessionWithSteamGuardCode#1",
			(0, a.I8)(Qc, t),
			T,
			{
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.GenerateAccessTokenForApp = function (e, t) {
		return e.SendMsg(
			"Authentication.GenerateAccessTokenForApp#1",
			(0, a.I8)(R, t),
			k,
			{
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.EnumerateTokens = function (e, t) {
		return e.SendMsg("Authentication.EnumerateTokens#1", (0, a.I8)(D, t), N, {
			ePrivilege: 1,
		});
	};
	e.GetAuthSessionsForAccount = function (e, t) {
		return e.SendMsg(
			"Authentication.GetAuthSessionsForAccount#1",
			(0, a.I8)(B, t),
			v,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.MigrateMobileSession = function (e, t) {
		return e.SendMsg(
			"Authentication.MigrateMobileSession#1",
			(0, a.I8)(x, t),
			U,
			{
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.RevokeToken = function (e, t) {
		return e.SendMsg("Authentication.RevokeToken#1", (0, a.I8)(O, t), P, {
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
	};
	e.RevokeRefreshToken = function (e, t) {
		return e.SendMsg(
			"Authentication.RevokeRefreshToken#1",
			(0, a.I8)(L, t),
			z,
			{
				ePrivilege: 2,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
})((kX ||= {}));
(function (e) {
	e.QueryRefreshTokensByAccount = function (e, t) {
		return e.SendMsg(
			"AuthenticationSupport.QueryRefreshTokensByAccount#1",
			(0, a.I8)(j, t),
			q,
			{
				bConstMethod: true,
				ePrivilege: 5,
			},
		);
	};
	e.QueryRefreshTokenByID = function (e, t) {
		return e.SendMsg(
			"AuthenticationSupport.QueryRefreshTokenByID#1",
			(0, a.I8)(Q, t),
			Z,
			{
				bConstMethod: true,
				ePrivilege: 5,
			},
		);
	};
	e.RevokeToken = function (e, t) {
		return e.SendMsg(
			"AuthenticationSupport.RevokeToken#1",
			(0, a.I8)(Y, t),
			K,
			{
				ePrivilege: 5,
			},
		);
	};
	e.GetTokenHistory = function (e, t) {
		return e.SendMsg(
			"AuthenticationSupport.GetTokenHistory#1",
			(0, a.I8)(X, t),
			J,
			{
				bConstMethod: true,
				ePrivilege: 5,
			},
		);
	};
	e.MarkTokenCompromised = function (e, t) {
		return e.SendMsg(
			"AuthenticationSupport.MarkTokenCompromised#1",
			(0, a.I8)($, t),
			ee,
			{
				ePrivilege: 5,
			},
		);
	};
})((oe ||= {}));
(function (e) {
	e.CreateNonce = function (e, t) {
		return e.SendMsg("CloudGaming.CreateNonce#1", (0, a.I8)(te, t), re, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
	e.GetTimeRemaining = function (e, t) {
		return e.SendMsg("CloudGaming.GetTimeRemaining#1", (0, a.I8)(ie, t), ae, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
})((le ||= {}));
