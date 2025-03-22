var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./83957.js");
var o = s;
var l = require(/*webcrack:missing*/ "./72476.js");
var c = require(/*webcrack:missing*/ "./12176.js");
var m = require("./90869.js");
var u = require(/*webcrack:missing*/ "./44846.js");
var d = require(/*webcrack:missing*/ "./90095.js");
var A = require(/*webcrack:missing*/ "./52451.js");
var p = require("./87232.js");
var g = require("./36523.js");
var h = require("./31222.js");
var C = require(/*webcrack:missing*/ "./58663.js");
var _ = require(/*webcrack:missing*/ "./48307.js");
const f = C.Message;
class b extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.sender_time) {
			_.Sg(b.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				sender_time: {
					n: 1,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= _.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(b.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_Time_Request";
	}
}
class y extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.server_time) {
			_.Sg(y.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				server_time: {
					n: 1,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				skew_tolerance_seconds: {
					n: 2,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				large_time_jink: {
					n: 3,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				probe_frequency_seconds: {
					n: 4,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				adjusted_time_probe_frequency_seconds: {
					n: 5,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				hint_probe_frequency_seconds: {
					n: 6,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				sync_timeout: {
					n: 7,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				try_again_seconds: {
					n: 8,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				max_attempts: {
					n: 9,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= _.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(y.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(y.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(y.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_Time_Response";
	}
}
class S extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.steamid) {
			_.Sg(S.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				steamid: {
					n: 1,
					br: _.qM.readFixed64String,
					bw: _.gp.writeFixed64String,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= _.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(S.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_Status_Request";
	}
}
class w extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.state) {
			_.Sg(w.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				state: {
					n: 1,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				inactivation_reason: {
					n: 2,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				authenticator_type: {
					n: 3,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				authenticator_allowed: {
					n: 4,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				steamguard_scheme: {
					n: 5,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				token_gid: {
					n: 6,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				email_validated: {
					n: 7,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				device_identifier: {
					n: 8,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				time_created: {
					n: 9,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				revocation_attempts_remaining: {
					n: 10,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				classified_agent: {
					n: 11,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				allow_external_authenticator: {
					n: 12,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				time_transferred: {
					n: 13,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				version: {
					n: 14,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
			},
		};
		return w.sm_m;
	}
	static MBF() {
		w.sm_mbf ||= _.w0(w.M());
		return w.sm_mbf;
	}
	toObject(e = false) {
		return w.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(w.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(w.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(w.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(w.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_Status_Response";
	}
}
class B extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.steamid) {
			_.Sg(B.M());
		}
		f.initialize(this, e, 0, -1, [7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				steamid: {
					n: 1,
					br: _.qM.readFixed64String,
					bw: _.gp.writeFixed64String,
				},
				authenticator_time: {
					n: 2,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				serial_number: {
					n: 3,
					br: _.qM.readFixed64String,
					bw: _.gp.writeFixed64String,
				},
				authenticator_type: {
					n: 4,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				device_identifier: {
					n: 5,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				http_headers: {
					n: 7,
					r: true,
					q: true,
					br: _.qM.readString,
					bw: _.gp.writeRepeatedString,
				},
				version: {
					n: 8,
					d: 1,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= _.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(B.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(B.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_AddAuthenticator_Request";
	}
}
class v extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.shared_secret) {
			_.Sg(v.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				shared_secret: {
					n: 1,
					br: _.qM.readBytes,
					bw: _.gp.writeBytes,
				},
				serial_number: {
					n: 2,
					br: _.qM.readFixed64String,
					bw: _.gp.writeFixed64String,
				},
				revocation_code: {
					n: 3,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				uri: {
					n: 4,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				server_time: {
					n: 5,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				account_name: {
					n: 6,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				token_gid: {
					n: 7,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				identity_secret: {
					n: 8,
					br: _.qM.readBytes,
					bw: _.gp.writeBytes,
				},
				secret_1: {
					n: 9,
					br: _.qM.readBytes,
					bw: _.gp.writeBytes,
				},
				status: {
					n: 10,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				phone_number_hint: {
					n: 11,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				confirm_type: {
					n: 12,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
			},
		};
		return v.sm_m;
	}
	static MBF() {
		v.sm_mbf ||= _.w0(v.M());
		return v.sm_mbf;
	}
	toObject(e = false) {
		return v.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(v.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(v.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(v.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(v.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_AddAuthenticator_Response";
	}
}
class I extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.steamid) {
			_.Sg(I.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				steamid: {
					n: 1,
					br: _.qM.readFixed64String,
					bw: _.gp.writeFixed64String,
				},
				email_type: {
					n: 2,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				include_activation_code: {
					n: 3,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
			},
		};
		return I.sm_m;
	}
	static MBF() {
		I.sm_mbf ||= _.w0(I.M());
		return I.sm_mbf;
	}
	toObject(e = false) {
		return I.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(I.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(I.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(I.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(I.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_SendEmail_Request";
	}
}
class E extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		f.initialize(this, e, 0, -1, undefined, null);
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
		let t = new C.BinaryReader(e);
		let r = new E();
		return E.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_SendEmail_Response";
	}
}
class M extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.steamid) {
			_.Sg(M.M());
		}
		f.initialize(this, e, 0, -1, [5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				steamid: {
					n: 1,
					br: _.qM.readFixed64String,
					bw: _.gp.writeFixed64String,
				},
				authenticator_code: {
					n: 2,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				authenticator_time: {
					n: 3,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				activation_code: {
					n: 4,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				http_headers: {
					n: 5,
					r: true,
					q: true,
					br: _.qM.readString,
					bw: _.gp.writeRepeatedString,
				},
				validate_sms_code: {
					n: 6,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
			},
		};
		return M.sm_m;
	}
	static MBF() {
		M.sm_mbf ||= _.w0(M.M());
		return M.sm_mbf;
	}
	toObject(e = false) {
		return M.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(M.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(M.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(M.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(M.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_FinalizeAddAuthenticator_Request";
	}
}
class T extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.success) {
			_.Sg(T.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				success: {
					n: 1,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				server_time: {
					n: 3,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				status: {
					n: 4,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
			},
		};
		return T.sm_m;
	}
	static MBF() {
		T.sm_mbf ||= _.w0(T.M());
		return T.sm_mbf;
	}
	toObject(e = false) {
		return T.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(T.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(T.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new T();
		return T.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(T.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(T.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_FinalizeAddAuthenticator_Response";
	}
}
class R extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.revocation_code) {
			_.Sg(R.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				revocation_code: {
					n: 2,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				revocation_reason: {
					n: 5,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				steamguard_scheme: {
					n: 6,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				remove_all_steamguard_cookies: {
					n: 7,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
			},
		};
		return R.sm_m;
	}
	static MBF() {
		R.sm_mbf ||= _.w0(R.M());
		return R.sm_mbf;
	}
	toObject(e = false) {
		return R.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(R.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(R.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new R();
		return R.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(R.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(R.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_RemoveAuthenticator_Request";
	}
}
class k extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.success) {
			_.Sg(k.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				success: {
					n: 1,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				server_time: {
					n: 3,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				revocation_attempts_remaining: {
					n: 5,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
			},
		};
		return k.sm_m;
	}
	static MBF() {
		k.sm_mbf ||= _.w0(k.M());
		return k.sm_mbf;
	}
	toObject(e = false) {
		return k.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(k.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(k.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new k();
		return k.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(k.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(k.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_RemoveAuthenticator_Response";
	}
}
class D extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		f.initialize(this, e, 0, -1, undefined, null);
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
		let t = new C.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
	}
}
class N extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.success) {
			_.Sg(N.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				success: {
					n: 1,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
			},
		};
		return N.sm_m;
	}
	static MBF() {
		N.sm_mbf ||= _.w0(N.M());
		return N.sm_mbf;
	}
	toObject(e = false) {
		return N.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(N.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(N.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new N();
		return N.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(N.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(N.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
	}
}
class F extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.sms_code) {
			_.Sg(F.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		F.sm_m ||= {
			proto: F,
			fields: {
				sms_code: {
					n: 1,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				generate_new_token: {
					n: 2,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				version: {
					n: 3,
					d: 1,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
			},
		};
		return F.sm_m;
	}
	static MBF() {
		F.sm_mbf ||= _.w0(F.M());
		return F.sm_mbf;
	}
	toObject(e = false) {
		return F.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(F.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(F.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new F();
		return F.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(F.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(F.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
	}
}
class G extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.shared_secret) {
			_.Sg(G.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				shared_secret: {
					n: 1,
					br: _.qM.readBytes,
					bw: _.gp.writeBytes,
				},
				serial_number: {
					n: 2,
					br: _.qM.readFixed64String,
					bw: _.gp.writeFixed64String,
				},
				revocation_code: {
					n: 3,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				uri: {
					n: 4,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				server_time: {
					n: 5,
					br: _.qM.readUint64String,
					bw: _.gp.writeUint64String,
				},
				account_name: {
					n: 6,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				token_gid: {
					n: 7,
					br: _.qM.readString,
					bw: _.gp.writeString,
				},
				identity_secret: {
					n: 8,
					br: _.qM.readBytes,
					bw: _.gp.writeBytes,
				},
				secret_1: {
					n: 9,
					br: _.qM.readBytes,
					bw: _.gp.writeBytes,
				},
				status: {
					n: 10,
					br: _.qM.readInt32,
					bw: _.gp.writeInt32,
				},
				steamguard_scheme: {
					n: 11,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				steamid: {
					n: 12,
					br: _.qM.readFixed64String,
					bw: _.gp.writeFixed64String,
				},
			},
		};
		return G.sm_m;
	}
	static MBF() {
		G.sm_mbf ||= _.w0(G.M());
		return G.sm_mbf;
	}
	toObject(e = false) {
		return G.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(G.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(G.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new G();
		return G.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(G.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(G.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
	}
}
class O extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.success) {
			_.Sg(O.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O.sm_m ||= {
			proto: O,
			fields: {
				success: {
					n: 1,
					br: _.qM.readBool,
					bw: _.gp.writeBool,
				},
				replacement_token: {
					n: 2,
					c: G,
				},
			},
		};
		return O.sm_m;
	}
	static MBF() {
		O.sm_mbf ||= _.w0(O.M());
		return O.sm_mbf;
	}
	toObject(e = false) {
		return O.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(O.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(O.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new O();
		return O.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(O.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(O.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
	}
}
class P extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.steamid) {
			_.Sg(P.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				steamid: {
					n: 1,
					br: _.qM.readFixed64String,
					bw: _.gp.writeFixed64String,
				},
				version: {
					n: 2,
					br: _.qM.readUint32,
					bw: _.gp.writeUint32,
				},
				signature: {
					n: 3,
					br: _.qM.readBytes,
					bw: _.gp.writeBytes,
				},
			},
		};
		return P.sm_m;
	}
	static MBF() {
		P.sm_mbf ||= _.w0(P.M());
		return P.sm_mbf;
	}
	toObject(e = false) {
		return P.toObject(e, this);
	}
	static toObject(e, t) {
		return _.BT(P.M(), e, t);
	}
	static fromObject(e) {
		return _.Uq(P.M(), e);
	}
	static deserializeBinary(e) {
		let t = new C.BinaryReader(e);
		let r = new P();
		return P.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return _.zj(P.MBF(), e, t);
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		_.i0(P.M(), e, t);
	}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_UpdateTokenVersion_Request";
	}
}
class L extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		f.initialize(this, e, 0, -1, undefined, null);
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
		let t = new C.BinaryReader(e);
		let r = new L();
		return L.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new C.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new C.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTwoFactor_UpdateTokenVersion_Response";
	}
}
var z;
(function (e) {
	e.QueryTime = function (e, t) {
		return e.SendMsg("TwoFactor.QueryTime#1", (0, c.I8)(b, t), y, {
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
	};
	e.QueryStatus = function (e, t) {
		return e.SendMsg("TwoFactor.QueryStatus#1", (0, c.I8)(S, t), w, {
			ePrivilege: 1,
		});
	};
	e.AddAuthenticator = function (e, t) {
		return e.SendMsg("TwoFactor.AddAuthenticator#1", (0, c.I8)(B, t), v, {
			ePrivilege: 1,
		});
	};
	e.SendEmail = function (e, t) {
		return e.SendMsg("TwoFactor.SendEmail#1", (0, c.I8)(I, t), E, {
			ePrivilege: 1,
		});
	};
	e.FinalizeAddAuthenticator = function (e, t) {
		return e.SendMsg(
			"TwoFactor.FinalizeAddAuthenticator#1",
			(0, c.I8)(M, t),
			T,
			{
				ePrivilege: 1,
			},
		);
	};
	e.UpdateTokenVersion = function (e, t) {
		return e.SendMsg("TwoFactor.UpdateTokenVersion#1", (0, c.I8)(P, t), L, {
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
	};
	e.RemoveAuthenticator = function (e, t) {
		return e.SendMsg("TwoFactor.RemoveAuthenticator#1", (0, c.I8)(R, t), k, {
			ePrivilege: 9,
		});
	};
	e.RemoveAuthenticatorViaChallengeStart = function (e, t) {
		return e.SendMsg(
			"TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
			(0, c.I8)(D, t),
			N,
			{
				ePrivilege: 9,
			},
		);
	};
	e.RemoveAuthenticatorViaChallengeContinue = function (e, t) {
		return e.SendMsg(
			"TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
			(0, c.I8)(F, t),
			O,
			{
				ePrivilege: 9,
			},
		);
	};
})((z ||= {}));
class x extends m.gf {
	m_eStatus = 0;
	m_steamid;
	m_strAccountName;
	m_strConfirmationAssociatedMessage = "";
	m_bUsingCodeOverride = false;
	m_strWeakAuthToken = "";
	m_weakAuthWebInterface;
	m_onGetMachineAuth;
	m_replacementAuthenticator;
	m_strErrorReference = "";
	m_onLoginComplete;
	constructor(e) {
		super(
			e.transport,
			(e) => this.onAuthComplete(e),
			e.onDeviceDetails,
			e.onShowAgreement,
		);
		(0, a.Gn)(this);
		this.m_onLoginComplete = e.onComplete;
		this.m_onGetMachineAuth = e.onGetMachineAuth;
	}
	async Start(e, t, r) {
		if (this.m_eStatus !== 0 && this.m_eStatus !== 2) {
			(0, p.ZI)(
				"Cannot start an already started auth session. Create a new session instance.",
			);
			return 29;
		}
		const n = e.replace(/[^\x00-\x7F]/g, "");
		const i = t.replace(/[^\x00-\x7F]/g, "").slice(0, 64);
		if (!n.length || !i.length) {
			return 8;
		}
		this.m_eStatus = 1;
		this.m_bUsingCodeOverride = false;
		if (e == "anonymous") {
			this.SetFailureState(m.eF.AnonymousLogin, q.EResult(12));
			return 12;
		}
		try {
			const t = await (async function (e, t) {
				const r = c.w.Init(g.qu);
				r.Body().set_account_name(t);
				r.SetEMsg(9804);
				try {
					await e.MakeReady();
					const t = await g.kX.GetPasswordRSAPublicKey(e, r);
					t.DEBUG_LogToConsole();
					if (t.GetEResult() !== 1) {
						(0, p.ZI)(`Failed to get RSA key with EResult: ${t.GetEResult()}`);
						return null;
					}
					const {
						publickey_exp: n,
						publickey_mod: i,
						timestamp: a,
					} = t.Body().toObject();
					if (n && i && a) {
						return {
							publickey_exp: n,
							publickey_mod: i,
							timestamp: a,
						};
					} else {
						(0, p.ZI)(
							`Missing expected field in RSA Key: ${JSON.stringify({
								publickey_exp: n,
								publickey_mod: i,
								timestamp: a,
							})}`,
						);
						return null;
					}
				} catch (e) {
					(0, p.ZI)(`Failed to get RSA key: ${JSON.stringify(e)}`);
					return null;
				}
			})(this.m_transport, n);
			if (!t) {
				(0, p.ZI)("Cannot start auth session without a valid RSA key");
				this.SetFailureState(m.eF.Network, q.EResult(20));
				return 20;
			}
			const d = (0, p.P8)(i, t);
			const A = c.w.Init(g.iP);
			A.SetEMsg(9804);
			A.Body().set_account_name(n);
			A.Body().set_encrypted_password(d);
			A.Body().set_encryption_timestamp(t.timestamp);
			A.Body().set_remember_login(!!r);
			A.Body().set_persistence(r ? 1 : 0);
			A.Body().set_website_id(l.TS.WEBSITE_ID);
			try {
				A.Body().set_device_details(await this.GetDeviceDetails());
			} catch (e) {
				(0, p.ZI)("Failed to GetDeviceDetails");
				(0, p.ZI)(e);
			}
			A.Body().set_language((0, u.sf)(l.TS.LANGUAGE));
			if (this.m_onGetMachineAuth != null) {
				const e = await this.m_onGetMachineAuth(n);
				if (e.eresult == 1) {
					A.Body().set_guard_data(e.data);
				}
			}
			await this.m_transport.MakeReady();
			const h = await g.kX.BeginAuthSessionViaCredentials(this.m_transport, A);
			h.DEBUG_LogToConsole();
			return (0, a.h5)(async () => {
				const t = h.GetEResult();
				const r = h.Hdr().transport_error();
				if (t !== 1) {
					switch (t) {
						case 5:
							this.m_eStatus = 2;
							return t;
						case 20:
						case 3:
							this.SetFailureState(m.eF.Network, q.EResult(20));
							return t;
						case 84:
							this.SetFailureState(m.eF.RateLimitExceeded, q.EResult(t));
							return t;
						case 118:
							if (this.m_onShowAgreement) {
								this.m_onShowAgreement(h.Body().agreement_session_url());
							} else {
								const e = h.Body().agreement_session_url();
								const t = document.location.href;
								window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
							}
							this.m_onCompleteCallback({
								bSuccess: false,
							});
							this.m_eStatus = 0;
							return t;
						default:
							(0, p.ZI)(
								`Failed to start auth session. Result: ${t} Transport: ${r}`,
							);
							this.SetFailureState(
								m.eF.Generic,
								q.EResult(t),
								h.Body().extended_error_message(),
							);
							this.m_onCompleteCallback({
								bSuccess: false,
							});
							return t;
					}
				}
				this.m_strAccountName = e;
				const {
					client_id: n,
					request_id: i,
					interval: a,
					allowed_confirmations: c,
					steamid: u,
					weak_token: d,
				} = h.Body().toObject();
				this.m_msPollInterval = a * 1000;
				this.m_strClientID = n;
				this.m_rgRequestID = i;
				this.m_steamid = u;
				this.m_strWeakAuthToken = d;
				if (c.find(({ confirmation_type: e }) => e === 6)) {
					const e = new FormData();
					e.append("clientid", n);
					e.append("steamid", this.m_steamid);
					const t = `${l.TS.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
					try {
						if (
							(
								await o.post(t, e, {
									headers: {
										"Content-Type": "multipart/form-data",
									},
									withCredentials: true,
								})
							).data.result == 1
						) {
							this.m_eStatus = 4;
							this.StartPolling(true);
							return 1;
						}
					} catch (e) {
						(0, p.tG)(`checkdevice ajax to ${t} failed: ${e.message}`);
						if (e instanceof s.AxiosError) {
							const t = e;
							if (t.response) {
								this.SetFailureState(
									m.eF.Network,
									q.AjaxFailureWithCode(t.response.status),
								);
								return 20;
							} else {
								this.SetFailureState(m.eF.Network, q.AjaxFailureNoCode());
								return 20;
							}
						}
						this.SetFailureState(m.eF.Network, q.EResult(79));
						return 79;
					}
				}
				const A = (function (e) {
					let t = e[0] || 0;
					if (e.length > 1) {
						t = e.sort((e, t) => U[e] - U[t])[0];
					}
					return t;
				})(c.map(({ confirmation_type: e }) => e));
				const g = c.find(({ confirmation_type: e }) => e === A);
				if (g && g.associated_message) {
					this.m_strConfirmationAssociatedMessage = g.associated_message;
				}
				switch (A) {
					case 1:
						this.m_eStatus = 13;
						this.StartPolling();
						return t;
					case 2:
						this.m_eStatus = 3;
						break;
					case 5:
						this.m_eStatus = 4;
						this.StartPolling(false);
						break;
					case 3:
						this.m_eStatus = 5;
						this.StartPolling(false);
						break;
					case 4:
						this.m_eStatus = 6;
						this.StartPolling(false);
				}
				return t;
			});
		} catch (e) {
			(0, p.ZI)(
				`Failed to start auth session. Exception: ${JSON.stringify(e)}`,
			);
			(0, p.tG)(e);
			this.SetFailureState(m.eF.Generic, q.FailedToStart());
			this.m_onCompleteCallback({
				bSuccess: false,
			});
			return 2;
		}
	}
	Stop() {
		this.StopPolling();
		this.m_eStatus = 16;
	}
	GetStatus() {
		return this.m_eStatus;
	}
	GetConfirmationAssociatedMessage() {
		return this.m_strConfirmationAssociatedMessage;
	}
	GetAccountName() {
		return this.m_strAccountName;
	}
	GetSteamID() {
		return this.m_steamid;
	}
	GetReplacementAuthenticator() {
		return this.m_replacementAuthenticator;
	}
	GetErrorReference() {
		return this.m_strErrorReference;
	}
	async SendSteamGuardCode(e, t = true) {
		if (e.length == 0) {
			switch (this.m_eStatus) {
				case 10:
					this.m_eStatus = 3;
					break;
				case 11:
					this.m_eStatus = 5;
					break;
				case 5:
				case 3:
					break;
				default:
					throw new Error("Attempted to clear code in invalid state");
			}
			return Promise.resolve(1);
		}
		try {
			await this.m_transport.MakeReady();
			const r = this.m_eStatus === 3 || this.m_eStatus === 10;
			const n = c.w.Init(g.Qc);
			n.SetEMsg(9804);
			n.Body().set_client_id(this.m_strClientID);
			n.Body().set_steamid(this.m_steamid);
			n.Body().set_code(e);
			n.Body().set_code_type(r ? 2 : 3);
			const i = await g.kX.UpdateAuthSessionWithSteamGuardCode(
				this.m_transport,
				n,
			);
			const a = i.GetEResult();
			if (a !== 1) {
				if (!t) {
					(0, p.ZI)(
						`Failed to automatically update session with local SG info. Result ${a}. Transport ${i.Hdr().transport_error()}`,
					);
					return a;
				}
				switch (a) {
					case 65:
					case 88:
						this.m_eStatus = r ? 10 : 11;
						return a;
					case 27:
						this.SetFailureState(m.eF.Expired, q.EResult(a));
						this.m_onCompleteCallback({
							bSuccess: false,
						});
						return a;
					case 84:
						this.SetFailureState(m.eF.RateLimitExceeded, q.EResult(a));
						this.m_onCompleteCallback({
							bSuccess: false,
						});
						return a;
					case 118:
						if (this.m_onShowAgreement) {
							this.m_onShowAgreement(i.Body().agreement_session_url());
						} else {
							const e = i.Body().agreement_session_url();
							const t = document.location.href;
							window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
						}
						this.m_onCompleteCallback({
							bSuccess: false,
						});
						this.m_eStatus = 0;
						return a;
					default:
						(0, p.ZI)(
							`Failed to update auth session with SG code. Result: ${a}`,
						);
						this.SetFailureState(m.eF.Generic, q.EResult(a));
						this.m_onCompleteCallback({
							bSuccess: false,
						});
						return a;
				}
			}
			this.m_eStatus = 13;
			this.StartPolling();
			return a;
		} catch (e) {
			(0, p.ZI)(`Failed to update auth session with SG code. ${e}`);
			this.SetFailureState(m.eF.Generic, q.FailedToAddCode());
			this.m_onCompleteCallback({
				bSuccess: false,
			});
			return 2;
		}
	}
	UseCodeOverride() {
		switch (this.m_eStatus) {
			case 6:
				this.m_bUsingCodeOverride = true;
				this.m_eStatus = 5;
				return;
			case 4:
				this.m_bUsingCodeOverride = true;
				this.m_eStatus = 3;
				return;
			default:
				(0, p.ZI)(
					`Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
				);
				return;
		}
	}
	CantAccessCode() {
		this.m_eStatus = 7;
	}
	async StartMoveAuthenticator() {
		this.m_weakAuthWebInterface = new h.D(
			l.TS.WEBAPI_BASE_URL,
			this.m_strWeakAuthToken,
		);
		try {
			const e = c.w.Init(D);
			const t = await z.RemoveAuthenticatorViaChallengeStart(
				this.m_weakAuthWebInterface.GetServiceTransport(),
				e,
			);
			if (t.GetEResult() != 1) {
				t.DEBUG_LogToConsole();
				(0, p.ZI)(
					"An unexpected error occured while adding an authenticator",
					t.GetEResult(),
				);
				this.SetFailureState(m.eF.MoveAuthenticator, q.EResult(t.GetEResult()));
			} else {
				this.m_eStatus = 8;
			}
		} catch (e) {
			(0, p.ZI)("An unexpected error occured while moving an authenticator", e);
			this.SetFailureState(m.eF.MoveAuthenticator, q.EResult(2));
		}
	}
	async ResendMoveCode() {
		const e = c.w.Init(D);
		const t = await z.RemoveAuthenticatorViaChallengeStart(
			this.m_weakAuthWebInterface.GetServiceTransport(),
			e,
		);
		if (t.GetEResult() != 1) {
			t.DEBUG_LogToConsole();
			(0, p.ZI)(
				"An unexpected error occured while adding an authenticator",
				t.GetEResult(),
			);
			this.SetFailureState(m.eF.MoveAuthenticator, q.EResult(t.GetEResult()));
		} else {
			this.m_eStatus = 8;
		}
	}
	async FinishMoveAuthenticator(e) {
		const t = c.w.Init(F);
		t.Body().set_sms_code(e);
		t.Body().set_generate_new_token(true);
		t.Body().set_version(2);
		const r = await z.RemoveAuthenticatorViaChallengeContinue(
			this.m_weakAuthWebInterface.GetServiceTransport(),
			t,
		);
		if (r.GetEResult() == 94) {
			this.m_eStatus = 12;
		} else if (r.Body().success()) {
			r.DEBUG_LogToConsole();
			this.m_replacementAuthenticator = (0, m.FU)(
				r.Body().replacement_token().toObject(),
			);
			this.m_eStatus = 9;
			this.m_bUsingCodeOverride = false;
		} else {
			r.DEBUG_LogToConsole();
			(0, p.ZI)(
				"Error when calling RemoveAuthenticatorViaChallengeContinue",
				r.GetEResult(),
			);
			this.SetFailureState(m.eF.MoveAuthenticator, q.EResult(r.GetEResult()));
		}
	}
	FinishMoveRecovery() {
		this.m_eStatus = 5;
	}
	BCanGoBack() {
		switch (this.m_eStatus) {
			case 5:
			case 11:
			case 3:
			case 10:
			case 6:
			case 4:
			case 7:
			case 8:
			case 12:
				return true;
			default:
				return false;
		}
	}
	GoBack() {
		switch (this.m_eStatus) {
			case 6:
			case 4:
				this.m_eStatus = 0;
				break;
			case 5:
			case 11:
				this.m_eStatus = this.m_bUsingCodeOverride ? 6 : 0;
				break;
			case 7:
			case 8:
			case 12:
				this.m_eStatus = (this.m_bUsingCodeOverride, 5);
				break;
			case 3:
			case 10:
				this.m_eStatus = this.m_bUsingCodeOverride ? 4 : 0;
				break;
			default:
				(0, p.ZI)(
					`Don't know how to GoBack from login session status ${this.m_eStatus}`,
				);
				return;
		}
	}
	SetFailureState(e, t, r = "") {
		this.m_eStatus = 15;
		this.m_eFailureState = e;
		this.m_strErrorReference = t;
		this.m_strExtendedErrorMessage = r;
	}
	onAuthComplete = (e) => {
		this.m_eStatus = e.bSuccess ? 14 : 15;
		const t = e.bSuccess
			? {
					...e,
					strAccountName: this.m_strAccountName,
					steamid: this.m_steamid,
				}
			: e;
		if (this.m_onLoginComplete) {
			this.m_onLoginComplete(t);
		}
	};
	SetOnLoginComplete(e) {
		this.m_onLoginComplete = e;
	}
}
(0, n.Cg)([a.sH], x.prototype, "m_eStatus", undefined);
(0, n.Cg)([a.sH], x.prototype, "m_strErrorReference", undefined);
(0, n.Cg)([A.oI], x.prototype, "Start", null);
(0, n.Cg)([A.oI], x.prototype, "SendSteamGuardCode", null);
(0, n.Cg)([A.oI], x.prototype, "UseCodeOverride", null);
(0, n.Cg)([A.oI], x.prototype, "CantAccessCode", null);
(0, n.Cg)([A.oI], x.prototype, "StartMoveAuthenticator", null);
(0, n.Cg)([A.oI], x.prototype, "ResendMoveCode", null);
(0, n.Cg)([A.oI], x.prototype, "FinishMoveAuthenticator", null);
(0, n.Cg)([A.oI], x.prototype, "FinishMoveRecovery", null);
(0, n.Cg)([A.oI], x.prototype, "GoBack", null);
(0, n.Cg)([a.XI], x.prototype, "SetFailureState", null);
(0, n.Cg)([A.oI], x.prototype, "SetOnLoginComplete", null);
const U = [4, 3, 2, 1, 0, 5].reduce((e, t, r) => {
	e[t] = r;
	return e;
}, {});
export function pY(e) {
	const [t, r] = (0, i.useState)(new x(e));
	(0, i.useEffect)(() => {
		t?.SetOnLoginComplete(e.onComplete);
	}, [t, e.onComplete]);
	return (0, d.q3)(() => ({
		strAccountName: t.GetAccountName(),
		steamid: t.GetSteamID(),
		eFailureState: t.GetFailureState(),
		strExtendedErrorMessage: t.GetExtendedErrorMessage(),
		strErrorReference: t.GetErrorReference(),
		strConfirmationAssociatedMessage: t.GetConfirmationAssociatedMessage(),
		eStatus: t.GetStatus(),
		bCanGoBack: t.BCanGoBack(),
		start: t.Start,
		addCode: t.SendSteamGuardCode,
		useCodeOverride: t.UseCodeOverride,
		cantAccessCode: t.CantAccessCode,
		startMoveAuthenticator: t.StartMoveAuthenticator,
		resendMoveCode: t.ResendMoveCode,
		finishMoveAuthenticator: t.FinishMoveAuthenticator,
		finishMoveRecovery: t.FinishMoveRecovery,
		replacementAuthenticator: t.GetReplacementAuthenticator(),
		reset: () => r(new x(e)),
		goBack: t.GoBack,
		setTokenToRevoke: t.SetTokenToRevoke,
	}));
}
export function H(e) {
	if (e) {
		return 7;
	} else {
		return 5;
	}
}
export function JP(e, t) {
	return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(e) && e.length <= H(t);
}
export function e1(e, t) {
	return JP(e, t) && e.length === H(t);
}
const q = {
	EResult: (e) => `e${e}`,
	FailedToStart: () => "c-fts",
	FailedToAddCode: () => "c-ftac",
	AjaxFailureNoCode: () => "af",
	AjaxFailureWithCode: (e) => `af-${e}`,
};
