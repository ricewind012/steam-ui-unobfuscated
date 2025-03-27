import n from "./58663.js";
import i from "./48307.js";
import { I8 } from "./12176.js";
import s from "./81383.js";
const n_Message = n.Message;
class l extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.password) {
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
				password: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				settings: {
					n: 2,
					c: s.Zc,
				},
				sessionid: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				enablecode: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steamid: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CParental_EnableParentalSettings_Request";
	}
}
class c extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return c.toObject(e, this);
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
		return new c();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new c();
		return c.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_EnableParentalSettings_Response";
	}
}
class m extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.password) {
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
				password: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CParental_DisableParentalSettings_Request";
	}
}
class u extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return u.toObject(e, this);
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
		return new u();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new u();
		return u.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_DisableParentalSettings_Response";
	}
}
export class QG extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!QG.prototype.steamid) {
			i.Sg(QG.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		QG.sm_m ||= {
			proto: QG,
			fields: {
				steamid: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return QG.sm_m;
	}
	static MBF() {
		QG.sm_mbf ||= i.w0(QG.M());
		return QG.sm_mbf;
	}
	toObject(e = false) {
		return QG.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(QG.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(QG.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new QG();
		return QG.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(QG.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		QG.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(QG.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		QG.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_GetParentalSettings_Request";
	}
}
class A extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.settings) {
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
				settings: {
					n: 1,
					c: s.Zc,
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
		return "CParental_GetParentalSettings_Response";
	}
}
class p extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.priority) {
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
				priority: {
					n: 1,
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
		return "CParental_GetSignedParentalSettings_Request";
	}
}
class g extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.serialized_settings) {
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
				serialized_settings: {
					n: 1,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				signature: {
					n: 2,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
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
		return "CParental_GetSignedParentalSettings_Response";
	}
}
export class U0 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U0.prototype.password) {
			i.Sg(U0.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		U0.sm_m ||= {
			proto: U0,
			fields: {
				password: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				settings: {
					n: 2,
					c: s.Zc,
				},
				new_password: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				sessionid: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return U0.sm_m;
	}
	static MBF() {
		U0.sm_mbf ||= i.w0(U0.M());
		return U0.sm_mbf;
	}
	toObject(e = false) {
		return U0.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(U0.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(U0.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new U0();
		return U0.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(U0.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		U0.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(U0.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		U0.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_SetParentalSettings_Request";
	}
}
class C extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_SetParentalSettings_Response";
	}
}
export class R2 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R2.prototype.unlock_token) {
			i.Sg(R2.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R2.sm_m ||= {
			proto: R2,
			fields: {
				unlock_token: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CParental_ValidateToken_Request";
	}
}
class f extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_ValidateToken_Response";
	}
}
export class Rk extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Rk.prototype.password) {
			i.Sg(Rk.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Rk.sm_m ||= {
			proto: Rk,
			fields: {
				password: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				session: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				send_unlock_on_success: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Rk.sm_m;
	}
	static MBF() {
		Rk.sm_mbf ||= i.w0(Rk.M());
		return Rk.sm_mbf;
	}
	toObject(e = false) {
		return Rk.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Rk.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Rk.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Rk();
		return Rk.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Rk.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Rk.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Rk.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Rk.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_ValidatePassword_Request";
	}
}
class y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.token) {
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
				token: {
					n: 1,
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
		return "CParental_ValidatePassword_Response";
	}
}
class S extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.session) {
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
				session: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CParental_LockClient_Request";
	}
}
class w extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_LockClient_Response";
	}
}
class B extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_RequestRecoveryCode_Request";
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
		return "CParental_RequestRecoveryCode_Response";
	}
}
class I extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.recovery_code) {
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
				recovery_code: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steamid: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CParental_DisableWithRecoveryCode_Request";
	}
}
class E extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_DisableWithRecoveryCode_Response";
	}
}
export class p2 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p2.prototype.features) {
			i.Sg(p2.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p2.sm_m ||= {
			proto: p2,
			fields: {
				features: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steamid: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return p2.sm_m;
	}
	static MBF() {
		p2.sm_mbf ||= i.w0(p2.M());
		return p2.sm_mbf;
	}
	toObject(e = false) {
		return p2.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(p2.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(p2.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new p2();
		return p2.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(p2.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		p2.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(p2.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		p2.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_RequestFeatureAccess_Request";
	}
}
class T extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.requestid) {
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
				requestid: {
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
		return "CParental_RequestFeatureAccess_Response";
	}
}
class R extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.approve) {
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
				approve: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				requestid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				features: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				duration: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steamid: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CParental_ApproveFeatureAccess_Request";
	}
}
class k extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return k.toObject(e, this);
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
		return new k();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new k();
		return k.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_ApproveFeatureAccess_Response";
	}
}
export class hW extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!hW.prototype.time_expires) {
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
				time_expires: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				current_playtime_restrictions: {
					n: 2,
					c: s.lx,
				},
				steamid: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CParental_RequestPlaytime_Request";
	}
}
class N extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.requestid) {
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
				requestid: {
					n: 1,
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
		return "CParental_RequestPlaytime_Response";
	}
}
class F extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.approve) {
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
				approve: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				requestid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				restrictions_approved: {
					n: 3,
					c: s.$A,
				},
				steamid: {
					n: 10,
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
		return "CParental_ApprovePlaytime_Request";
	}
}
class G extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return G.toObject(e, this);
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
		return new G();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new G();
		return G.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_ApprovePlaytime_Response";
	}
}
class O extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.rt_include_completed_since) {
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
				rt_include_completed_since: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				family_groupid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CParental_GetRequests_Request";
	}
}
class P extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.feature_requests) {
			i.Sg(P.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				feature_requests: {
					n: 1,
					c: s.Nh,
					r: true,
					q: true,
				},
				playtime_requests: {
					n: 2,
					c: s.kt,
					r: true,
					q: true,
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
		return "CParental_GetRequests_Response";
	}
}
class L extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!L.prototype.day_of_week) {
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
				day_of_week: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				minutes_used: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steamid: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CParental_ReportPlaytimeAndNotify_Request";
	}
}
class z extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_ReportPlaytimeAndNotify_Response";
	}
}
class x extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.serialized_settings) {
			i.Sg(x.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		x.sm_m ||= {
			proto: x,
			fields: {
				serialized_settings: {
					n: 1,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				signature: {
					n: 2,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				password: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				sessionid: {
					n: 4,
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
		return "CParental_ParentalSettingsChange_Notification";
	}
}
class U extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.password) {
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
				password: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				sessionid: {
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
		return "CParental_ParentalUnlock_Notification";
	}
}
class W extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W.prototype.sessionid) {
			i.Sg(W.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W.sm_m ||= {
			proto: W,
			fields: {
				sessionid: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		const e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(W.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParental_ParentalLock_Notification";
	}
}
class V extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.day_of_week) {
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
				day_of_week: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				minutes_used: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CParental_PlaytimeUsed_Notification";
	}
}
export let JL;
export let w0;
((e) => {
	e.EnableParentalSettings = (e, t) =>
		e.SendMsg("Parental.EnableParentalSettings#1", I8(l, t), c, {
			ePrivilege: 1,
		});
	e.DisableParentalSettings = (e, t) =>
		e.SendMsg("Parental.DisableParentalSettings#1", I8(m, t), u, {
			ePrivilege: 1,
		});
	e.GetParentalSettings = (e, t) =>
		e.SendMsg("Parental.GetParentalSettings#1", I8(QG, t), A, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetSignedParentalSettings = (e, t) =>
		e.SendMsg("Parental.GetSignedParentalSettings#1", I8(p, t), g, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.SetParentalSettings = (e, t) =>
		e.SendMsg("Parental.SetParentalSettings#1", I8(U0, t), C, {
			ePrivilege: 1,
		});
	e.ValidateToken = (e, t) =>
		e.SendMsg("Parental.ValidateToken#1", I8(R2, t), f, {
			ePrivilege: 1,
		});
	e.ValidatePassword = (e, t) =>
		e.SendMsg("Parental.ValidatePassword#1", I8(Rk, t), y, {
			ePrivilege: 1,
		});
	e.LockClient = (e, t) =>
		e.SendMsg("Parental.LockClient#1", I8(S, t), w, {
			ePrivilege: 1,
		});
	e.RequestRecoveryCode = (e, t) =>
		e.SendMsg("Parental.RequestRecoveryCode#1", I8(B, t), v, {
			ePrivilege: 1,
		});
	e.DisableWithRecoveryCode = (e, t) =>
		e.SendMsg("Parental.DisableWithRecoveryCode#1", I8(I, t), E, {
			ePrivilege: 0,
		});
	e.RequestFeatureAccess = (e, t) =>
		e.SendMsg("Parental.RequestFeatureAccess#1", I8(p2, t), T, {
			ePrivilege: 1,
		});
	e.ApproveFeatureAccess = (e, t) =>
		e.SendMsg("Parental.ApproveFeatureAccess#1", I8(R, t), k, {
			ePrivilege: 1,
		});
	e.RequestPlaytime = (e, t) =>
		e.SendMsg("Parental.RequestPlaytime#1", I8(hW, t), N, {
			ePrivilege: 1,
		});
	e.ApprovePlaytime = (e, t) =>
		e.SendMsg("Parental.ApprovePlaytime#1", I8(F, t), G, {
			ePrivilege: 1,
		});
	e.GetRequests = (e, t) =>
		e.SendMsg("Parental.GetRequests#1", I8(O, t), P, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.ReportPlaytimeAndNotify = (e, t) =>
		e.SendMsg("Parental.ReportPlaytimeAndNotify#1", I8(L, t), z, {
			ePrivilege: 1,
		});
})((JL ||= {}));
((e) => {
	e.NotifySettingsChangeHandler = {
		name: "ParentalClient.NotifySettingsChange#1",
		request: x,
	};
	e.NotifyUnlockHandler = {
		name: "ParentalClient.NotifyUnlock#1",
		request: U,
	};
	e.NotifyLockHandler = {
		name: "ParentalClient.NotifyLock#1",
		request: W,
	};
	e.NotifyPlaytimeUsedHandler = {
		name: "ParentalClient.NotifyPlaytimeUsed#1",
		request: V,
	};
})((w0 ||= {}));
