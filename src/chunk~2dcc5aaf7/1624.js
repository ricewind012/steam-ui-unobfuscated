var n = require("./87432.js");
var i = require(/*webcrack:missing*/ "./44846.js");
import { AssertMsg } from "../../actual_src/utils/assert.js";
var s = require(/*webcrack:missing*/ "./42898.js");
var o = require(/*webcrack:missing*/ "./14628.js");
var l = require(/*webcrack:missing*/ "./90095.js");
var c = require(/*webcrack:missing*/ "./63696.js");
var m = require("./16117.js");
var u = require("./31222.js");
var d = require(/*webcrack:missing*/ "./12176.js");
var A = require(/*webcrack:missing*/ "./58663.js");
var p = require(/*webcrack:missing*/ "./48307.js");
const g = A.Message;
class h extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.clan_event_gid) {
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
				clan_event_gid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				steamid: {
					n: 2,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				registration_group_id: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				registration_session_id: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				guest_count: {
					n: 5,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				jsondata: {
					n: 7,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				skip_email: {
					n: 8,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
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
		var e = new A.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(h.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_UpdateRegistration_Request";
	}
}
class C extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
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
		let t = new A.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_UpdateRegistration_Response";
	}
}
class _ extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.clan_event_gid) {
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
				clan_event_gid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
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
		var e = new A.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(_.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_GetAvailability_Request";
	}
}
class f extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.availability) {
			p.Sg(f.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				availability: {
					n: 1,
					c: b,
					r: true,
					q: true,
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
		var e = new A.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(f.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_GetAvailability_Response";
	}
}
class b extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.group_id) {
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
				group_id: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				session_id: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				guest_count: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(b.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_GetAvailability_Response_Session";
	}
}
class y extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.clan_event_gid) {
			p.Sg(y.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				clan_event_gid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				steamid: {
					n: 2,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= p.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(y.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(y.MBF(), e, t);
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(y.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_GetRegistrations_Request";
	}
}
class S extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.registrations) {
			p.Sg(S.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				registrations: {
					n: 1,
					c: w,
					r: true,
					q: true,
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
		var e = new A.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(S.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_GetRegistrations_Response";
	}
}
class w extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.group_id) {
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
				group_id: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				session_id: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				steamid: {
					n: 3,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				guests_registered: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				jsondata: {
					n: 5,
					br: p.qM.readString,
					bw: p.gp.writeString,
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
		var e = new A.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(w.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_GetRegistrations_Response_Registration";
	}
}
class B extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.clan_event_gid) {
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
				clan_event_gid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				steamid: {
					n: 2,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
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
		var e = new A.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(B.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_EmailInvitees_Request";
	}
}
class v extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.num_emailed) {
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
				num_emailed: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				num_skipped: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(v.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_EmailInvitees_Response";
	}
}
class I extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.clan_event_gid) {
			p.Sg(I.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				clan_event_gid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				steamid: {
					n: 2,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
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
		var e = new A.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(I.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParterMeetSteam_TestFireEmails_Request";
	}
}
class E extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.sessionids) {
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
				sessionids: {
					n: 1,
					r: true,
					q: true,
					br: p.qM.readUint32,
					pbr: p.qM.readPackedUint32,
					bw: p.gp.writeRepeatedUint32,
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
		var e = new A.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(E.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CParterMeetSteam_TestFireEmails_Response";
	}
}
class M extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.rt_oldest_date) {
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
				rt_oldest_date: {
					n: 1,
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
		var e = new A.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(M.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_GetSaleEventOrganizers_Request";
	}
}
class T extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.accountid) {
			p.Sg(T.M());
		}
		g.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				accountid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				clan_event_gids: {
					n: 2,
					r: true,
					q: true,
					br: p.qM.readFixed64String,
					pbr: p.qM.readPackedFixed64String,
					bw: p.gp.writeRepeatedFixed64String,
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
		var e = new A.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(T.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleEventOrganizerInfo";
	}
}
class R extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.info) {
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
				info: {
					n: 1,
					c: T,
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
		var e = new A.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(R.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_GetSaleEventOrganizers_Response";
	}
}
class k extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.accountids) {
			p.Sg(k.M());
		}
		g.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				accountids: {
					n: 1,
					r: true,
					q: true,
					br: p.qM.readUint32,
					pbr: p.qM.readPackedUint32,
					bw: p.gp.writeRepeatedUint32,
				},
				partnerids: {
					n: 2,
					r: true,
					q: true,
					br: p.qM.readUint32,
					pbr: p.qM.readPackedUint32,
					bw: p.gp.writeRepeatedUint32,
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
		var e = new A.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(k.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request";
	}
}
class D extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.accountid) {
			p.Sg(D.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				accountid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				partnerid: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				realname: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				email: {
					n: 4,
					br: p.qM.readString,
					bw: p.gp.writeString,
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
		var e = new A.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(D.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerEmailAndName";
	}
}
class N extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.info) {
			p.Sg(N.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				info: {
					n: 1,
					c: D,
					r: true,
					q: true,
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
		var e = new A.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(N.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response";
	}
}
var F;
(function (e) {
	e.UpdateRegistration = function (e, t) {
		return e.SendMsg(
			"PartnerMeetSteam.UpdateRegistration#1",
			(0, d.I8)(h, t),
			C,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.GetAvailability = function (e, t) {
		return e.SendMsg("PartnerMeetSteam.GetAvailability#1", (0, d.I8)(_, t), f, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
	e.GetRegistrations = function (e, t) {
		return e.SendMsg(
			"PartnerMeetSteam.GetRegistrations#1",
			(0, d.I8)(y, t),
			S,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.EmailInvitees = function (e, t) {
		return e.SendMsg("PartnerMeetSteam.EmailInvitees#1", (0, d.I8)(B, t), v, {
			ePrivilege: 4,
		});
	};
	e.TestFireEmails = function (e, t) {
		return e.SendMsg("PartnerMeetSteam.TestFireEmails#1", (0, d.I8)(I, t), E, {
			ePrivilege: 4,
		});
	};
	e.GetSaleEventOrganizers = function (e, t) {
		return e.SendMsg(
			"PartnerMeetSteam.GetSaleEventOrganizers#1",
			(0, d.I8)(M, t),
			R,
			{
				bConstMethod: true,
				ePrivilege: 4,
			},
		);
	};
	e.GetBatchPartnerEmailAndName = function (e, t) {
		return e.SendMsg(
			"PartnerMeetSteam.GetBatchPartnerEmailAndName#1",
			(0, d.I8)(k, t),
			N,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
})((F ||= {}));
const G = A.Message;
class O extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.total_playtime_seconds) {
			p.Sg(O.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O.sm_m ||= {
			proto: O,
			fields: {
				total_playtime_seconds: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				total_sessions: {
					n: 20,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				vr_sessions: {
					n: 21,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				deck_sessions: {
					n: 22,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				controller_sessions: {
					n: 23,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				linux_sessions: {
					n: 24,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				macos_sessions: {
					n: 25,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				windows_sessions: {
					n: 26,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				total_playtime_percentagex100: {
					n: 27,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				vr_playtime_percentagex100: {
					n: 28,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				deck_playtime_percentagex100: {
					n: 29,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				controller_playtime_percentagex100: {
					n: 30,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				linux_playtime_percentagex100: {
					n: 31,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				macos_playtime_percentagex100: {
					n: 32,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				windows_playtime_percentagex100: {
					n: 33,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(O.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlaytimeStats";
	}
}
class P extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.appid) {
			p.Sg(P.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				appid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(P.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlaytimeStreakGame";
	}
}
class L extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!L.prototype.longest_consecutive_days) {
			p.Sg(L.M());
		}
		G.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		L.sm_m ||= {
			proto: L,
			fields: {
				longest_consecutive_days: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				rtime_start: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				streak_games: {
					n: 3,
					c: P,
					r: true,
					q: true,
				},
			},
		};
		return L.sm_m;
	}
	static MBF() {
		L.sm_mbf ||= p.w0(L.M());
		return L.sm_mbf;
	}
	toObject(e = false) {
		return L.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(L.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(L.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new L();
		return L.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(L.MBF(), e, t);
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(L.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlaytimeStreak";
	}
}
class z extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.overall_rank) {
			p.Sg(z.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		z.sm_m ||= {
			proto: z,
			fields: {
				overall_rank: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				vr_rank: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				deck_rank: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				controller_rank: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				linux_rank: {
					n: 5,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				mac_rank: {
					n: 6,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				windows_rank: {
					n: 7,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(z.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlaytimeRanks";
	}
}
class x extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.appid) {
			p.Sg(x.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		x.sm_m ||= {
			proto: x,
			fields: {
				appid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				stats: {
					n: 2,
					c: O,
				},
				playtime_streak: {
					n: 3,
					c: L,
				},
				playtime_ranks: {
					n: 4,
					c: z,
				},
				rtime_first_played: {
					n: 5,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				relative_game_stats: {
					n: 6,
					c: O,
				},
			},
		};
		return x.sm_m;
	}
	static MBF() {
		x.sm_mbf ||= p.w0(x.M());
		return x.sm_mbf;
	}
	toObject(e = false) {
		return x.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(x.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(x.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new x();
		return x.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(x.MBF(), e, t);
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(x.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGamePlaytimeStats";
	}
}
class U extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.appid) {
			p.Sg(U.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		U.sm_m ||= {
			proto: U,
			fields: {
				appid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				new_this_year: {
					n: 2,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				rtime_first_played_lifetime: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				demo: {
					n: 4,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				playtest: {
					n: 5,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				played_during_early_access: {
					n: 6,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				played_vr: {
					n: 7,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				played_deck: {
					n: 8,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				played_controller: {
					n: 9,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				played_linux: {
					n: 10,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				played_mac: {
					n: 11,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				played_windows: {
					n: 12,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				total_playtime_percentagex100: {
					n: 13,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				total_sessions: {
					n: 14,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				rtime_release_date: {
					n: 15,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				parent_appid: {
					n: 16,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(U.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameSummary";
	}
}
class W extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W.prototype.appid) {
			p.Sg(W.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W.sm_m ||= {
			proto: W,
			fields: {
				appid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				total_playtime_percentagex100: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				relative_playtime_percentagex100: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(W.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSimpleGameSummary";
	}
}
class V extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.appid) {
			p.Sg(V.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		V.sm_m ||= {
			proto: V,
			fields: {
				appid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				rank: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				relative_playtime_percentagex100: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(V.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRank";
	}
}
class H extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H.prototype.category) {
			p.Sg(H.M());
		}
		G.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H.sm_m ||= {
			proto: H,
			fields: {
				category: {
					n: 1,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				rankings: {
					n: 2,
					c: V,
					r: true,
					q: true,
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
		var e = new A.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(H.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRankingCategory";
	}
}
class j extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!j.prototype.overall_ranking) {
			p.Sg(j.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		j.sm_m ||= {
			proto: j,
			fields: {
				overall_ranking: {
					n: 1,
					c: H,
				},
				vr_ranking: {
					n: 2,
					c: H,
				},
				deck_ranking: {
					n: 3,
					c: H,
				},
				controller_ranking: {
					n: 4,
					c: H,
				},
				linux_ranking: {
					n: 5,
					c: H,
				},
				mac_ranking: {
					n: 6,
					c: H,
				},
				windows_ranking: {
					n: 7,
					c: H,
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
		var e = new A.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(j.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRankings";
	}
}
class q extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.total_achievements) {
			p.Sg(q.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				total_achievements: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				total_games_with_achievements: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				total_rare_achievements: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
			},
		};
		return q.sm_m;
	}
	static MBF() {
		q.sm_mbf ||= p.w0(q.M());
		return q.sm_mbf;
	}
	toObject(e = false) {
		return q.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(q.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new q();
		return q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(q.MBF(), e, t);
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(q.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserPlaytimeSummaryStats";
	}
}
class Q extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q.prototype.stats) {
			p.Sg(Q.M());
		}
		G.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q.sm_m ||= {
			proto: Q,
			fields: {
				stats: {
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
		Q.sm_mbf ||= p.w0(Q.M());
		return Q.sm_mbf;
	}
	toObject(e = false) {
		return Q.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Q.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Q();
		return Q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Q.MBF(), e, t);
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Q.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserTagStats";
	}
}
class Z extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z.prototype.tag_id) {
			p.Sg(Z.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z.sm_m ||= {
			proto: Z,
			fields: {
				tag_id: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				tag_weight: {
					n: 2,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				tag_weight_pre_selection: {
					n: 3,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
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
		var e = new A.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Z.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserTagStats_Tag";
	}
}
class Y extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.screenshots_shared) {
			p.Sg(Y.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Y.sm_m ||= {
			proto: Y,
			fields: {
				screenshots_shared: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				gifts_sent: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				loyalty_reactions: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				written_reviews: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				guides_submitted: {
					n: 5,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				workshop_contributions: {
					n: 6,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				badges_earned: {
					n: 7,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				friends_added: {
					n: 8,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				forum_posts: {
					n: 9,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				workshop_subscriptions: {
					n: 10,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				guide_subscribers: {
					n: 11,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				workshop_subscribers: {
					n: 12,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				games_played_pct: {
					n: 13,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				achievements_pct: {
					n: 14,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				game_streak_pct: {
					n: 15,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				games_played_avg: {
					n: 16,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				achievements_avg: {
					n: 17,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				game_streak_avg: {
					n: 18,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Y.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlaytimeByNumbers";
	}
}
class K extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K.prototype.total_stats) {
			p.Sg(K.M());
		}
		G.initialize(this, e, 0, -1, [2, 5, 6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		K.sm_m ||= {
			proto: K,
			fields: {
				total_stats: {
					n: 1,
					c: O,
				},
				games: {
					n: 2,
					c: x,
					r: true,
					q: true,
				},
				playtime_streak: {
					n: 3,
					c: L,
				},
				months: {
					n: 5,
					c: X,
					r: true,
					q: true,
				},
				game_summary: {
					n: 6,
					c: U,
					r: true,
					q: true,
				},
				demos_played: {
					n: 7,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				game_rankings: {
					n: 8,
					c: j,
				},
				playtests_played: {
					n: 9,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				summary_stats: {
					n: 10,
					c: q,
				},
				substantial: {
					n: 11,
					d: true,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				tag_stats: {
					n: 12,
					c: Q,
				},
				by_numbers: {
					n: 13,
					c: Y,
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
		var e = new A.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(K.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserPlaytimeStats";
	}
}
class X extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!X.prototype.rtime_month) {
			p.Sg(X.M());
		}
		G.initialize(this, e, 0, -1, [4, 6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		X.sm_m ||= {
			proto: X,
			fields: {
				rtime_month: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				stats: {
					n: 2,
					c: O,
				},
				appid: {
					n: 4,
					c: x,
					r: true,
					q: true,
				},
				relative_monthly_stats: {
					n: 5,
					c: O,
				},
				game_summary: {
					n: 6,
					c: W,
					r: true,
					q: true,
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
		var e = new A.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(X.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMonthlyPlaytimeStats";
	}
}
class J extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!J.prototype.account_id) {
			p.Sg(J.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		J.sm_m ||= {
			proto: J,
			fields: {
				account_id: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				year: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				playtime_stats: {
					n: 3,
					c: K,
				},
				privacy_state: {
					n: 4,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
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
		var e = new A.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(J.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserYearInReviewStats";
	}
}
class $ extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$.prototype.from_dbo) {
			p.Sg($.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$.sm_m ||= {
			proto: $,
			fields: {
				from_dbo: {
					n: 1,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				overall_time_ms: {
					n: 2,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				dbo_load_ms: {
					n: 3,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				query_execution_ms: {
					n: 4,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				message_population_ms: {
					n: 5,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
				},
				dbo_lock_load_ms: {
					n: 6,
					br: p.qM.readUint64String,
					bw: p.gp.writeUint64String,
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
		var e = new A.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0($.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CYearInReviewPerformanceStats";
	}
}
class ee extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ee.prototype.statid) {
			p.Sg(ee.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ee.sm_m ||= {
			proto: ee,
			fields: {
				statid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				fieldid: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				achievement_name_internal: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				rtime_unlocked: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ee.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAchievementDetails";
	}
}
class te extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!te.prototype.appid) {
			p.Sg(te.M());
		}
		G.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		te.sm_m ||= {
			proto: te,
			fields: {
				appid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				achievements: {
					n: 2,
					c: ee,
					r: true,
					q: true,
				},
				all_time_unlocked_achievements: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				unlocked_more_in_future: {
					n: 4,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
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
		var e = new A.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(te.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameAchievements";
	}
}
class re extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.median_achievements) {
			p.Sg(re.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		re.sm_m ||= {
			proto: re,
			fields: {
				median_achievements: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				median_games: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				median_streak: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(re.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGlobalPercentiles";
	}
}
class ne extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ne.prototype.new_releases) {
			p.Sg(ne.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ne.sm_m ||= {
			proto: ne,
			fields: {
				new_releases: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				recent_releases: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				classic_releases: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				recent_cutoff_year: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ne.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGlobalPlaytimeDistribution";
	}
}
class ie extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ie.prototype.games_played) {
			p.Sg(ie.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ie.sm_m ||= {
			proto: ie,
			fields: {
				games_played: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				unlocked_achievements: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				longest_streak: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ie.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPreviousYIRSummaryData";
	}
}
class ae extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ae.prototype.steamid) {
			p.Sg(ae.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ae.sm_m ||= {
			proto: ae,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				year: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				force_regenerate: {
					n: 3,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				access_source: {
					n: 4,
					br: p.qM.readInt32,
					bw: p.gp.writeInt32,
				},
				fetch_previous_year_summary: {
					n: 5,
					d: false,
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
		var e = new A.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ae.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserYearInReview_Request";
	}
}
class se extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!se.prototype.stats) {
			p.Sg(se.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		se.sm_m ||= {
			proto: se,
			fields: {
				stats: {
					n: 1,
					c: J,
				},
				performance_stats: {
					n: 2,
					c: $,
				},
				percentiles: {
					n: 3,
					c: re,
				},
				distribution: {
					n: 4,
					c: ne,
				},
				previous_year_summary: {
					n: 5,
					c: ie,
				},
			},
		};
		return se.sm_m;
	}
	static MBF() {
		se.sm_mbf ||= p.w0(se.M());
		return se.sm_mbf;
	}
	toObject(e = false) {
		return se.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(se.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(se.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new se();
		return se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(se.MBF(), e, t);
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(se.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserYearInReview_Response";
	}
}
class oe extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!oe.prototype.steamid) {
			p.Sg(oe.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		oe.sm_m ||= {
			proto: oe,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				year: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				privacy_state: {
					n: 3,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
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
		var e = new A.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(oe.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_SetUserSharingPermissions_Request";
	}
}
class le extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!le.prototype.privacy_state) {
			p.Sg(le.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		le.sm_m ||= {
			proto: le,
			fields: {
				privacy_state: {
					n: 1,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
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
		var e = new A.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(le.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_SetUserSharingPermissions_Response";
	}
}
class ce extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ce.prototype.steamid) {
			p.Sg(ce.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ce.sm_m ||= {
			proto: ce,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				year: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ce.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserSharingPermissions_Request";
	}
}
class me extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!me.prototype.privacy_state) {
			p.Sg(me.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		me.sm_m ||= {
			proto: me,
			fields: {
				privacy_state: {
					n: 1,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
				},
				generated_value: {
					n: 2,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				steamid: {
					n: 3,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				rt_privacy_updated: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
			},
		};
		return me.sm_m;
	}
	static MBF() {
		me.sm_mbf ||= p.w0(me.M());
		return me.sm_mbf;
	}
	toObject(e = false) {
		return me.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(me.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(me.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new me();
		return me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(me.MBF(), e, t);
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(me.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserSharingPermissions_Response";
	}
}
class ue extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ue.prototype.steamid) {
			p.Sg(ue.M());
		}
		G.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ue.sm_m ||= {
			proto: ue,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				year: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				appids: {
					n: 3,
					r: true,
					q: true,
					br: p.qM.readUint32,
					pbr: p.qM.readPackedUint32,
					bw: p.gp.writeRepeatedUint32,
				},
				total_only: {
					n: 4,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
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
		var e = new A.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ue.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserYearAchievements_Request";
	}
}
class de extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!de.prototype.game_achievements) {
			p.Sg(de.M());
		}
		G.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		de.sm_m ||= {
			proto: de,
			fields: {
				game_achievements: {
					n: 1,
					c: te,
					r: true,
					q: true,
				},
				total_achievements: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				total_rare_achievements: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				total_games_with_achievements: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(de.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserYearAchievements_Response";
	}
}
class Ae extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ae.prototype.steamid) {
			p.Sg(Ae.M());
		}
		G.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ae.sm_m ||= {
			proto: Ae,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				year: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				appids: {
					n: 3,
					r: true,
					q: true,
					br: p.qM.readUint32,
					pbr: p.qM.readPackedUint32,
					bw: p.gp.writeRepeatedUint32,
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
		var e = new A.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Ae.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserYearScreenshots_Request";
	}
}
class pe extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pe.prototype.apps) {
			p.Sg(pe.M());
		}
		G.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pe.sm_m ||= {
			proto: pe,
			fields: {
				apps: {
					n: 1,
					c: he,
					r: true,
					q: true,
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
		var e = new A.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(pe.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserYearScreenshots_Response";
	}
}
class ge extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ge.prototype.image_url) {
			p.Sg(ge.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ge.sm_m ||= {
			proto: ge,
			fields: {
				image_url: {
					n: 1,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				preview_url: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				image_width: {
					n: 3,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				image_height: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				maybe_inappropriate_sex: {
					n: 5,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				maybe_inappropriate_violence: {
					n: 6,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				visibility: {
					n: 7,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				spoiler_tag: {
					n: 8,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return ge.sm_m;
	}
	static MBF() {
		ge.sm_mbf ||= p.w0(ge.M());
		return ge.sm_mbf;
	}
	toObject(e = false) {
		return ge.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(ge.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(ge.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ge();
		return ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(ge.MBF(), e, t);
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ge.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
	}
}
class he extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!he.prototype.appid) {
			p.Sg(he.M());
		}
		G.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		he.sm_m ||= {
			proto: he,
			fields: {
				appid: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				screenshots: {
					n: 2,
					c: ge,
					r: true,
					q: true,
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
		var e = new A.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(he.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
	}
}
class Ce extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ce.prototype.steamid) {
			p.Sg(Ce.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ce.sm_m ||= {
			proto: Ce,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				gid: {
					n: 2,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				type: {
					n: 3,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
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
		var e = new A.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Ce.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserActionData_Request";
	}
}
class _e extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_e.prototype.jsondata) {
			p.Sg(_e.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_e.sm_m ||= {
			proto: _e,
			fields: {
				jsondata: {
					n: 1,
					br: p.qM.readString,
					bw: p.gp.writeString,
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
		var e = new A.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(_e.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserActionData_Response";
	}
}
class fe extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!fe.prototype.steamid) {
			p.Sg(fe.M());
		}
		G.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		fe.sm_m ||= {
			proto: fe,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				gids: {
					n: 2,
					r: true,
					q: true,
					br: p.qM.readFixed64String,
					pbr: p.qM.readPackedFixed64String,
					bw: p.gp.writeRepeatedFixed64String,
				},
				type: {
					n: 3,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
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
		var e = new A.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(fe.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetMultipleUserActionData_Request";
	}
}
class be extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!be.prototype.entries) {
			p.Sg(be.M());
		}
		G.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		be.sm_m ||= {
			proto: be,
			fields: {
				entries: {
					n: 1,
					c: ye,
					r: true,
					q: true,
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
		var e = new A.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(be.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetMultipleUserActionData_Response";
	}
}
class ye extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ye.prototype.gid) {
			p.Sg(ye.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ye.sm_m ||= {
			proto: ye,
			fields: {
				gid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				jsondata: {
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
		var e = new A.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ye.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
	}
}
class Se extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Se.prototype.steamid) {
			p.Sg(Se.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Se.sm_m ||= {
			proto: Se,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				year: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				return_private: {
					n: 3,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return Se.sm_m;
	}
	static MBF() {
		Se.sm_mbf ||= p.w0(Se.M());
		return Se.sm_mbf;
	}
	toObject(e = false) {
		return Se.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Se.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Se.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Se();
		return Se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Se.MBF(), e, t);
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Se.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetFriendsSharedYearInReview_Request";
	}
}
class we extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!we.prototype.steamid) {
			p.Sg(we.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		we.sm_m ||= {
			proto: we,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				privacy_state: {
					n: 3,
					br: p.qM.readEnum,
					bw: p.gp.writeEnum,
				},
				rt_privacy_updated: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				privacy_override: {
					n: 5,
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
		var e = new A.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(we.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFriendSharedYearInView";
	}
}
class Be extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Be.prototype.friend_shares) {
			p.Sg(Be.M());
		}
		G.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Be.sm_m ||= {
			proto: Be,
			fields: {
				friend_shares: {
					n: 1,
					c: we,
					r: true,
					q: true,
				},
				year: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Be.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetFriendsSharedYearInReview_Response";
	}
}
class ve extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ve.prototype.steamid) {
			p.Sg(ve.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ve.sm_m ||= {
			proto: ve,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
				},
				year: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				language: {
					n: 3,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
			},
		};
		return ve.sm_m;
	}
	static MBF() {
		ve.sm_mbf ||= p.w0(ve.M());
		return ve.sm_mbf;
	}
	toObject(e = false) {
		return ve.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(ve.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(ve.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new ve();
		return ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(ve.MBF(), e, t);
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(ve.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserYearInReviewShareImage_Request";
	}
}
class Ie extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ie.prototype.images) {
			p.Sg(Ie.M());
		}
		G.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ie.sm_m ||= {
			proto: Ie,
			fields: {
				images: {
					n: 1,
					c: Ee,
					r: true,
					q: true,
				},
			},
		};
		return Ie.sm_m;
	}
	static MBF() {
		Ie.sm_mbf ||= p.w0(Ie.M());
		return Ie.sm_mbf;
	}
	toObject(e = false) {
		return Ie.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(Ie.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(Ie.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new Ie();
		return Ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(Ie.MBF(), e, t);
	}
	serializeBinary() {
		var e = new A.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Ie.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserYearInReviewShareImage_Response";
	}
}
class Ee extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ee.prototype.name) {
			p.Sg(Ee.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ee.sm_m ||= {
			proto: Ee,
			fields: {
				name: {
					n: 1,
					br: p.qM.readString,
					bw: p.gp.writeString,
				},
				url_path: {
					n: 2,
					br: p.qM.readString,
					bw: p.gp.writeString,
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
		var e = new A.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Ee.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
	}
}
class Me extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Me.prototype.steamid) {
			p.Sg(Me.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Me.sm_m ||= {
			proto: Me,
			fields: {
				steamid: {
					n: 1,
					br: p.qM.readFixed64String,
					bw: p.gp.writeFixed64String,
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
		var e = new A.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Me.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
	}
}
class Te extends G {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Te.prototype.year) {
			p.Sg(Te.M());
		}
		G.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Te.sm_m ||= {
			proto: Te,
			fields: {
				year: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				month: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				games_played: {
					n: 4,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				top_played_appid: {
					n: 5,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				longest_streak_days: {
					n: 6,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				rt_streak_start: {
					n: 7,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				achievements: {
					n: 8,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				screenshots: {
					n: 9,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
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
		var e = new A.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(Te.M(), e, t);
	}
	serializeBase64String() {
		var e = new A.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
	}
}
var Re;
(function (e) {
	e.GetUserYearInReview = function (e, t) {
		return e.SendMsg(
			"SaleFeature.GetUserYearInReview#1",
			(0, d.I8)(ae, t),
			se,
			{
				bConstMethod: true,
				ePrivilege: 2,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.GetUserSharingPermissions = function (e, t) {
		return e.SendMsg(
			"SaleFeature.GetUserSharingPermissions#1",
			(0, d.I8)(ce, t),
			me,
			{
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	};
	e.SetUserSharingPermissions = function (e, t) {
		return e.SendMsg(
			"SaleFeature.SetUserSharingPermissions#1",
			(0, d.I8)(oe, t),
			le,
			{
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	};
	e.GetUserYearAchievements = function (e, t) {
		return e.SendMsg(
			"SaleFeature.GetUserYearAchievements#1",
			(0, d.I8)(ue, t),
			de,
			{
				bConstMethod: true,
				ePrivilege: 2,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.GetUserYearScreenshots = function (e, t) {
		return e.SendMsg(
			"SaleFeature.GetUserYearScreenshots#1",
			(0, d.I8)(Ae, t),
			pe,
			{
				bConstMethod: true,
				ePrivilege: 2,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.GetUserActionData = function (e, t) {
		return e.SendMsg("SaleFeature.GetUserActionData#1", (0, d.I8)(Ce, t), _e, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	};
	e.GetMultipleUserActionData = function (e, t) {
		return e.SendMsg(
			"SaleFeature.GetMultipleUserActionData#1",
			(0, d.I8)(fe, t),
			be,
			{
				bConstMethod: true,
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	};
	e.GetFriendsSharedYearInReview = function (e, t) {
		return e.SendMsg(
			"SaleFeature.GetFriendsSharedYearInReview#1",
			(0, d.I8)(Se, t),
			Be,
			{
				bConstMethod: true,
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	};
	e.GetUserYearInReviewShareImage = function (e, t) {
		return e.SendMsg(
			"SaleFeature.GetUserYearInReviewShareImage#1",
			(0, d.I8)(ve, t),
			Ie,
			{
				bConstMethod: true,
				ePrivilege: 2,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.GetYIRCurrentMonthlySummary = function (e, t) {
		return e.SendMsg(
			"SaleFeature.GetYIRCurrentMonthlySummary#1",
			(0, d.I8)(Me, t),
			Te,
			{
				bConstMethod: true,
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	};
})((Re ||= {}));
var ke = require(/*webcrack:missing*/ "./37322.js");
var De = require(/*webcrack:missing*/ "./16583.js");
var Ne = require(/*webcrack:missing*/ "./36229.js");
function Fe(e) {
	try {
		if (!e || typeof e != "string") {
			return null;
		}
		const t = e.split(".");
		if (t.length !== 3) {
			return null;
		}
		const [r, n] = t;
		const i = Oe(r);
		const a = Oe(n);
		if (i && a) {
			return {
				header: JSON.parse(i),
				body: JSON.parse(a),
			};
		} else {
			return null;
		}
	} catch (e) {
		console.error(`Exception while attempting to decode token: "${e}"`);
		return null;
	}
}
function Ge(e) {
	if (e) {
		return e.body.exp;
	} else {
		return 0;
	}
}
function Oe(e) {
	return atob(e.replace(/-/g, "+").replace(/_/g, "/"));
}
const Pe = {
	name: "steamLoginSpoofSteamID",
	options: {
		path: "/",
		secure: true,
	},
	preferenceControls: {
		isTechnicallyNecessary: true,
	},
};
class Le {
	m_ServiceTransport;
	m_AnonymousServiceTransport;
	m_strWebAPIBaseURL;
	m_webApiAccessToken = "";
	m_bJsonMode = false;
	m_bJWTToken = false;
	m_fnRequestNewAccessToken;
	m_refreshAccessTokenPromise;
	m_dtLastExpireCheck = 0;
	m_strSpoofedSteamID = "";
	constructor(e, t = "", r = false, n) {
		this.m_strWebAPIBaseURL = e;
		this.m_webApiAccessToken = t;
		this.m_bJsonMode = r;
		this.m_fnRequestNewAccessToken = n;
		this.m_bJWTToken = Fe(t) != null;
		this.m_ServiceTransport = {
			SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
				bSendAuth: true,
			}),
			SendNotification: this.SendNotification.bind(this, {
				bSendAuth: true,
			}),
			MakeReady: this.MakeReady.bind(this),
		};
		this.m_AnonymousServiceTransport = {
			SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
				bSendAuth: false,
			}),
			SendNotification: this.SendNotification.bind(this, {
				bSendAuth: false,
			}),
			MakeReady: this.MakeReady.bind(this),
		};
		const i = (function (e) {
			if (!document.cookie) {
				return;
			}
			const t = document.cookie.match("(^|; )" + e.name + "=([^;]*)");
			if (t && t[2]) {
				return decodeURIComponent(t[2]);
			} else {
				return undefined;
			}
		})(Pe);
		if (i && /[0-9]+/g.test(i)) {
			this.m_strSpoofedSteamID = i;
		}
	}
	WaitUntilLoggedOn() {
		return Promise.resolve();
	}
	GetServerRTime32() {
		return Number(new Date());
	}
	get steamid() {
		return new Ne.b2();
	}
	RTime32ToDate(e) {
		return new Date(e * 1000);
	}
	MakeReady() {
		return Promise.resolve({
			result: 1,
			message: "ready",
		});
	}
	GetServiceTransport() {
		return this.m_ServiceTransport;
	}
	GetWebAPIAccessToken() {
		return this.m_webApiAccessToken;
	}
	GetAnonymousServiceTransport() {
		return this.m_AnonymousServiceTransport;
	}
	async SendMsgAndAwaitResponse(e, t, r, n, i) {
		let a;
		try {
			if (this.m_bJWTToken && e.bSendAuth) {
				const e = Date.now() / 1000;
				if (this.m_refreshAccessTokenPromise) {
					await this.m_refreshAccessTokenPromise;
				} else if (
					this.m_fnRequestNewAccessToken &&
					e - this.m_dtLastExpireCheck > 60
				) {
					this.m_dtLastExpireCheck = e;
					if (
						(function (e) {
							const t = Ge(e);
							const r = (function (e) {
								if (e) {
									return e.body.nbf || e.body.iat;
								} else {
									return 0;
								}
							})(e);
							let n = 900;
							const i = t - r;
							if (i < 1350) {
								n = i <= 60 ? 0 : 60;
							}
							return Ge(e) - n < Date.now() / 1000;
						})(Fe(this.m_webApiAccessToken))
					) {
						this.m_refreshAccessTokenPromise = this.m_fnRequestNewAccessToken(
							this.m_webApiAccessToken,
						);
						this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise;
						this.m_refreshAccessTokenPromise = undefined;
					}
				}
			}
			const s = await this.Send(e, t, r, i);
			if (s.status != 200) {
				throw new Error("Request Error");
			}
			a = d.w.Init(n, 147);
			if (s.headers) {
				if (s.headers.get("x-eresult")) {
					a.Hdr().set_eresult(parseInt(s.headers.get("x-eresult")));
				}
				if (s.headers.get("x-error_message")) {
					a.Hdr().set_error_message(s.headers.get("x-error_message"));
				}
			}
			if (this.m_bJsonMode) {
				a.SetBodyJSON(await s.json());
			} else {
				const e = new De.pV(await s.arrayBuffer());
				a.ReadBodyFromBuffer(n, e);
			}
			0;
		} catch (t) {
			const r = t?.response?.status === 401;
			const i = r ? "Unauthorized" : undefined;
			a = this.CreateFailedMsgProtobuf(n, 3, i);
			if (
				r &&
				!this.m_refreshAccessTokenPromise &&
				this.m_bJWTToken &&
				e.bSendAuth &&
				this.m_fnRequestNewAccessToken
			) {
				this.m_refreshAccessTokenPromise = this.m_fnRequestNewAccessToken(
					this.m_webApiAccessToken,
				);
				this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise;
				this.m_refreshAccessTokenPromise = undefined;
			}
		}
		return a;
	}
	SendNotification(e, t, r, n) {
		this.Send(e, t, r, n);
		return true;
	}
	Send(e, t, r, n) {
		const i = this.CreateWebAPIURL(t);
		const a = r.SerializeBody();
		const s = ke.iI(a);
		const o = n.eWebAPIKeyRequirement;
		const l = n.ePrivilege == 0 && o == 1;
		const c = {};
		const m = new URLSearchParams();
		if (!e.bSendAuth && o != 1) {
			console.error(
				`Attempting to invoke service ${t} without auth, but auth is required.`,
			);
		}
		if (this.m_webApiAccessToken && e.bSendAuth && !l) {
			m.append("access_token", this.m_webApiAccessToken);
			if (this.m_strSpoofedSteamID) {
				m.append("spoof_steamid", this.m_strSpoofedSteamID);
			}
		}
		if (n.bConstMethod) {
			m.append("origin", self.origin);
			if (this.m_bJsonMode) {
				m.append("input_json", JSON.stringify(r.Body().toObject()));
			} else {
				m.append("input_protobuf_encoded", s);
			}
			return fetch(`${i}?${m.toString()}`, c);
		}
		{
			const e = new FormData();
			if (this.m_bJsonMode) {
				e.append("input_json", JSON.stringify(r.Body().toObject()));
			} else {
				e.append("input_protobuf_encoded", s);
			}
			return fetch(`${i}?${m.toString()}`, {
				...c,
				method: "POST",
				body: e,
			});
		}
	}
	CreateWebAPIURL(e) {
		const t = e.match(/([^\.]+)\.(.+)#(\d+)/);
		if (!t || t.length != 4) {
			throw `Invalid service name: ${e}`;
		}
		return `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`;
	}
	CreateFailedMsgProtobuf(e, t, r) {
		const n = d.w.Init(e);
		n.Hdr().set_eresult(2);
		n.Hdr().set_transport_error(t);
		if (r) {
			n.Hdr().set_error_message(r);
		}
		return n;
	}
}
var ze = require(/*webcrack:missing*/ "./61416.js");
import { Seconds } from "../../actual_src/utils/time.js";
function Ue(e, t, r) {
	return (0, ze.I)({
		queryKey: We(t, r),
		queryFn: async () => {
			const t = d.w.Init(_);
			t.Body().set_clan_event_gid(r);
			const n = await F.GetAvailability(e, t);
			if (n.BSuccess()) {
				return n
					.Body()
					.availability()
					.map((e) => e.toObject());
			} else {
				return [];
			}
		},
		enabled: H7() == t,
		staleTime: Seconds.PerMinute * 10,
	});
}
const We = (e, t) => ["useMeetSteamGetAvailability", e, t];
function Ve(e, t, r, n) {
	return (0, ze.I)({
		queryKey: He(t, r),
		queryFn: async () => {
			const e = d.w.Init(Ce);
			e.Body().set_type(6);
			e.Body().set_steamid(n.ConvertTo64BitString());
			e.Body().set_gid(r);
			const t = (function () {
				const e = window;
				e.g_wapitRefreshEnabled = false;
				const t = typeof e.g_wapitRefresh == "function";
				let r;
				if (!o.TS.IN_CLIENT && t) {
					r = () =>
						new Promise((t, r) => {
							e.g_wapitRefresh((e) => {
								t(e);
							});
							window.setTimeout(() => r("Refresh Timeout"), 10000);
						});
				}
				return new Le(o.TS.WEBAPI_BASE_URL, e.g_wapit, false, r);
			})();
			const i = await Re.GetUserActionData(t.GetServiceTransport(), e);
			if (i.BSuccess() && i.Body().jsondata()) {
				return JSON.parse(i.Body().jsondata());
			} else {
				return {};
			}
		},
		enabled: H7() == t,
	});
}
const He = (e, t) => ["useMeetSteamGetRegistrationDetails", e, t];
var je = require("./10606.js");
var qe = require(/*webcrack:missing*/ "./26853.js");
var Qe = require(/*webcrack:missing*/ "./90765.js");
import {
	CLocLanguageArray,
	Localize,
} from "../../actual_src/utils/localization.js";
import * as Ye from "../../actual_src/utils/localization/datetime.js";
var Ke = require(/*webcrack:missing*/ "./43691.js");
var Xe = require(/*webcrack:missing*/ "./9731.js");
import { PadArray } from "../../actual_src/utils/arrayutils.js";
var $e = require(/*webcrack:missing*/ "./8573.js");
var et = require("./64608.js");
function tt(e) {
	const {
		transport: t,
		eventModel: r,
		fnConfirm: n,
		fnHideModal: a,
		nMaxPerTeam: s,
		bAddingOrChangingSessions: l,
	} = e;
	const m = (0, i.sf)(Ke.TS.LANGUAGE);
	const [u, d] = c.useState({});
	const [A, p] = c.useState(false);
	const g = c.useCallback(
		(e) => {
			d({
				...u,
				...e,
			});
		},
		[u],
	);
	const h = Ve(0, r.clanSteamID.GetAccountID(), r.GID, new $e.b(o.iA.steamid));
	const {
		sUserAccountEmail: C,
		sUserAccountRealName: _,
		rgPartners: f,
	} = c.useMemo(
		() => ({
			sUserAccountRealName: (0, Xe.Tc)("realname", "application_config"),
			sUserAccountEmail: (0, Xe.Tc)("email", "application_config"),
			rgPartners: (0, Xe.Tc)("partners", "application_config") ?? [],
		}),
		[],
	);
	const [b, y] = c.useState(undefined);
	const [S, w] = c.useState(undefined);
	const B = c.useMemo(() => {
		const e = [];
		if (S == null) {
			e.push({
				data: undefined,
				label: Localize("#MeetSteam_ChoosePartner"),
			});
		}
		e.push(
			...f.map((e, t) => ({
				data: e.partnerid,
				label: e.partner_name,
			})),
		);
		e.push({
			data: 0,
			label: Localize("#MeetSteam_ChoosePartnerOther"),
		});
		return e;
	}, [f, S]);
	c.useEffect(() => {
		if (!h.isSuccess) {
			return;
		}
		const e = f.find((e) => e.partnerid == h.data.partner_id);
		const t = h.data.partner_id === 0 ? 0 : e?.partnerid;
		w(t);
		y(t);
		d(h.data);
	}, [h.isSuccess, h.data, f]);
	const v = f?.length > 0;
	const I = !v || S != null;
	const E = I && S === 0;
	c.useEffect(() => {
		if (S == b) {
			return;
		}
		y(S);
		if (!v || !I) {
			return;
		}
		let e;
		const t = f.find((e) => e.partnerid == S);
		var r;
		e =
			E || !t
				? {
						name: C?.length > 0 ? _ : undefined,
						email_override: C?.length > 0 ? C : undefined,
						partner_id: 0,
					}
				: {
						name:
							t.partneruserrealname?.length > 0
								? t.partneruserrealname
								: undefined,
						company: t.partner_name?.length > 0 ? t.partner_name : undefined,
						email_override:
							t.partneruseremail?.length > 0 ? t.partneruseremail : undefined,
						partner_id: t.partnerid,
					};
		if (Object.values(e).some((e) => e != null)) {
			g(
				((r = e),
				Object.fromEntries(
					Object.entries(r).filter(([e, t]) => t !== undefined),
				)),
			);
		}
	}, [I, E, v, S, b, f, C, _, g]);
	const M = h.isLoading || A;
	const T = l
		? Localize("#MeetSteam_Register_title", r.GetNameWithFallback(m))
		: Localize("#MeetSteam_Unregister_title");
	const R =
		!l ||
		(I &&
			u.name?.length > 0 &&
			(!u.guest_names || u.guest_names?.every((e) => e.length > 0)) &&
			u.email_override?.length > 0 &&
			u.company?.length > 0);
	return c.createElement(
		je.EN,
		{
			active: true,
		},
		M &&
			c.createElement(
				je.eV,
				{
					bOKDisabled: true,
					bHideCloseIcon: true,
					onCancel: () => false,
				},
				c.createElement(qe.t, {
					size: "medium",
					position: "center",
					string: A ? Localize("#Saving") : Localize("#Loading"),
				}),
			),
		!M &&
			c.createElement(
				je.o0,
				{
					strTitle: T,
					onCancel: a,
					bOKDisabled: !R,
					onOK: async () => {
						p(true);
						await n(u);
						p(false);
						h.refetch();
						a();
					},
				},
				l &&
					c.createElement(
						c.Fragment,
						null,
						c.createElement("div", null, Localize("#MeetSteam_Reg_Intro")),
						c.createElement("br", null),
					),
				l &&
					c.createElement(
						c.Fragment,
						null,
						v &&
							c.createElement(et.m, {
								label: Localize("#MeetSteam_Reg_Preset"),
								tooltip: Localize("#MeetSteam_Reg_Preset_ttip"),
								rgOptions: B,
								selectedOption: S,
								onChange: (e) => w(e.data),
							}),
						I &&
							c.createElement(
								c.Fragment,
								null,
								c.createElement(et.pd, {
									type: "text",
									label: Localize("#MeetSteam_Reg_Name"),
									value: u.name || "",
									onChange: (e) =>
										g({
											name: e.currentTarget.value,
										}),
								}),
								c.createElement(et.pd, {
									type: "text",
									label: Localize("#MeetSteam_Reg_Email"),
									value: u.email_override || "",
									mustBeEmail: true,
									onChange: (e) =>
										g({
											email_override: e.currentTarget.value,
										}),
								}),
								c.createElement(et.pd, {
									type: "text",
									label: Localize("#MeetSteam_Reg_Company"),
									value: u.company || "",
									onChange: (e) =>
										g({
											company: e.currentTarget.value,
										}),
								}),
								c.createElement(et.pd, {
									type: "text",
									label: Localize("#MeetSteam_Reg_Game"),
									value: u.game || "",
									onChange: (e) =>
										g({
											game: e.currentTarget.value,
										}),
								}),
								Boolean(s > 0) &&
									c.createElement(et.m, {
										label: Localize("#MeetSteam_Reg_GuestCount", s),
										tooltip: Localize("#MeetSteam_Reg_GuestCount_ttip"),
										rgOptions: Array.from({
											length: s,
										}).map((e, t) => ({
											data: t,
											label: t,
										})),
										selectedOption: (u.guests_registered ?? 1) - 1,
										onChange: (e) =>
											g({
												guests_registered: e.data + 1,
												guest_names:
													u.guest_names?.length > e.data
														? u.guest_names.slice(0, e.data)
														: PadArray(u.guest_names ?? [], e.data, ""),
											}),
									}),
								Boolean(u.guests_registered > 1) &&
									c.createElement(
										"div",
										null,
										c.createElement(
											"div",
											null,
											Localize("#MeetSteam_Reg_Others"),
										),
										u.guest_names.map((e, t) =>
											c.createElement(et.pd, {
												key: "guesname_" + t,
												type: "text",
												label: Localize("#MeetSteam_Reg_Others_name"),
												value: e,
												onChange: (e) => {
													const r = [...u.guest_names];
													r[t] = e.currentTarget.value;
													g({
														guest_names: r,
													});
												},
											}),
										),
									),
							),
					),
			),
	);
}
var rt = require(/*webcrack:missing*/ "./34629.js");
var nt = require(/*webcrack:missing*/ "./89193.js");
class it {
	m_isLoading = false;
	m_existingRegistrations = new Map();
	m_selections = new Map();
	m_transport;
	m_userAccountID;
	m_clanAccountID;
	m_gidClanEvent;
	static s_Singleton;
	static Get() {
		it.s_Singleton ||= new it();
		return it.s_Singleton;
	}
	constructor() {
		(0, nt.Gn)(this);
	}
	Init(e, t, r, n) {
		this.m_transport = e;
		this.m_userAccountID = t;
		this.m_clanAccountID = r;
		this.m_gidClanEvent = n;
	}
	async Load() {
		if (this.m_isLoading) {
			return;
		}
		if (this.m_clanAccountID != H7()) {
			return;
		}
		const e = d.w.Init(y);
		const t = $e.b.InitFromAccountID(this.m_userAccountID);
		e.Body().set_clan_event_gid(this.m_gidClanEvent);
		e.Body().set_steamid(t.ConvertTo64BitString());
		this.m_existingRegistrations.clear();
		this.m_selections.clear();
		this.m_isLoading = true;
		const r = await F.GetRegistrations(this.m_transport, e);
		this.m_isLoading = false;
		if (r.BSuccess()) {
			(0, nt.h5)(() => {
				r.Body()
					.registrations()
					.forEach((e) => {
						const t = e.toObject();
						const r = {
							...t,
							regmodel: t.jsondata ? JSON.parse(t.jsondata) : undefined,
						};
						this.m_existingRegistrations.set(r.group_id, r);
						this.m_selections.set(r.group_id, r.session_id);
					});
			});
		}
	}
	SetSelection(e, t) {
		if (t > 0) {
			this.m_selections.set(e, t);
		} else {
			this.m_selections.delete(e);
		}
	}
	BIsLoading() {
		return this.m_isLoading;
	}
	GetSelectedGroups() {
		return Array.from(this.m_selections.keys());
	}
	GetSelection(e) {
		return this.m_selections.get(e);
	}
	GetRegistrationStatus(e, t) {
		const r = this.m_existingRegistrations.get(e)?.session_id == t;
		const n = this.m_selections.get(e) == t;
		if (r && n) {
			return 1;
		} else if (!r && n) {
			return 2;
		} else if (r && !n) {
			return 3;
		} else {
			return 0;
		}
	}
	BHaveSelectionsChanged() {
		return (
			(this.m_selections.size != 0 || this.m_existingRegistrations.size != 0) &&
			(this.m_selections.size != this.m_existingRegistrations.size ||
				!Array.from(this.m_selections.entries()).every(
					(e) => this.m_existingRegistrations.get(e[0])?.session_id == e[1],
				))
		);
	}
	BIsAddingOrChangingSelections() {
		return Array.from(this.m_selections.entries()).some(
			(e) =>
				!this.m_existingRegistrations.get(e[0]) ||
				this.m_existingRegistrations.get(e[0]).session_id != e[1],
		);
	}
	BHasAlreadyRegistered() {
		return this.m_existingRegistrations.size > 0;
	}
	async Save(e) {
		const t = [];
		e = Object.fromEntries(
			Object.entries(e).filter(([e]) => !e.startsWith("registration_emailed_")),
		);
		for (const [r, n] of this.m_selections) {
			const i = d.w.Init(h);
			i.Body().set_clan_event_gid(this.m_gidClanEvent);
			i.Body().set_steamid(
				$e.b.InitFromAccountID(this.m_userAccountID).ConvertTo64BitString(),
			);
			i.Body().set_registration_group_id(r);
			i.Body().set_registration_session_id(n);
			i.Body().set_guest_count(e.guests_registered ?? 1);
			i.Body().set_jsondata(JSON.stringify(e));
			t.push(i);
		}
		for (const [e, r] of this.m_existingRegistrations) {
			if (this.m_selections.has(r.group_id)) {
				continue;
			}
			const n = d.w.Init(h);
			n.Body().set_clan_event_gid(this.m_gidClanEvent);
			n.Body().set_steamid(
				$e.b.InitFromAccountID(this.m_userAccountID).ConvertTo64BitString(),
			);
			n.Body().set_registration_group_id(e);
			n.Body().set_registration_session_id(0);
			n.Body().set_guest_count(0);
			n.Body().set_jsondata(JSON.stringify({}));
			t.push(n);
		}
		let r = true;
		for (let e = 0; e < t.length; e++) {
			const n = t[e];
			const i = e == t.length - 1;
			n.Body().set_skip_email(!i);
			const a = await F.UpdateRegistration(this.m_transport, n);
			r = r && a.BSuccess();
		}
		await this.Load();
		return r;
	}
}
function at() {
	return (0, l.q3)(() => it.Get().BIsLoading());
}
(0, rt.Cg)([nt.sH], it.prototype, "m_isLoading", undefined);
(0, rt.Cg)([nt.sH], it.prototype, "m_existingRegistrations", undefined);
(0, rt.Cg)([nt.sH], it.prototype, "m_selections", undefined);
(0, rt.Cg)([nt.XI.bound], it.prototype, "SetSelection", null);
var st = require("./13665.js");
var ot = require("./4816.js");
var lt = require("./13869.js");
var ct = require(/*webcrack:missing*/ "./18339.js");
export const H7 = () => (Ke.TS.EUNIVERSE === 2 ? 2581 : 45267781);
export function ac(e) {
	const t = e.context.event;
	const r = e.context.showErrorInfo;
	const n = (0, m.j$)(e.args, "group_id");
	const i = Number.parseInt(n);
	const a = (0, l.q3)(() => _t(t, i));
	if (a) {
		if (t.clanSteamID.GetAccountID() != H7()) {
			if (r) {
				return c.createElement("div", null, "Only support on special group");
			} else {
				return null;
			}
		} else {
			return c.createElement(
				c.Fragment,
				null,
				c.createElement(At, {
					groupData: a,
					eventModel: t,
				}),
				c.createElement(Ct, {
					eventModel: t,
				}),
			);
		}
	} else if (r) {
		return c.createElement("div", null, "Failed to find session group id ", i);
	} else {
		return null;
	}
}
function dt() {
	const e = (0, Xe.Tc)("promotion_operation_token", "application_config");
	AssertMsg(Boolean(e), "require promotion_operation_token");
	const [t] = c.useState(() =>
		new u.D(Ke.TS.WEBAPI_BASE_URL, e).GetServiceTransport(),
	);
	return t;
}
function At(e) {
	const { groupData: t, eventModel: r } = e;
	const i = dt();
	const a = at();
	const s = Ue(i, r.clanSteamID.GetAccountID(), r.GID);
	const m = t?.sessions;
	const u = ft();
	const d = (0, l.q3)(() =>
		m?.reduce(
			(e, r) => e.set(r.id, it.Get().GetRegistrationStatus(t.group_id, r.id)),
			new Map(),
		),
	);
	const A = new $e.b(o.iA.steamid ? o.iA.steamid : null);
	const p = Ve(0, r.clanSteamID.GetAccountID(), r.GID, A);
	const g = p.isSuccess && !!p.data.allow_registration_if_full;
	if (!s.isSuccess || (a && o.iA.accountid)) {
		return c.createElement(qe.t, {
			size: "medium",
			position: "center",
			string: Localize("#Loading"),
		});
	}
	return c.createElement(
		pt,
		{
			groupData: t,
		},
		m?.map((e, r) => {
			const i = s.data.find(
				(r) => r.group_id === t.group_id && r.session_id === e.id,
			);
			const a = d.get(e.id);
			const o = r + 1 < m.length;
			return c.createElement(
				c.Fragment,
				{
					key: "timecol_" + t.group_id + "_" + e.id,
				},
				c.createElement(
					"div",
					{
						className: n.SessionColumnCtn,
					},
					c.createElement(gt, {
						sessionData: e,
						onClick: () =>
							u(() =>
								((e) => {
									const r = it.Get().GetSelection(t.group_id) == e;
									it.Get().SetSelection(t.group_id, r ? undefined : e);
								})(e.id),
							),
						nGuestReservations: i?.guest_count || 0,
						eRegistrationStatus: a,
						bAllowedToRegisterIfFull: g,
					}),
				),
				o && c.createElement(ht, null),
			);
		}),
	);
}
function pt(e) {
	const { groupData: t, children: r } = e;
	const a = (0, i.sf)(Ke.TS.LANGUAGE);
	const s = CLocLanguageArray.GetWithFallback(t?.localized_session_title, a);
	const o = CLocLanguageArray.GetWithFallback(
		t?.localized_session_description,
		a,
	);
	if (t) {
		return c.createElement(
			"div",
			{
				className: (0, Qe.A)({
					[n.Ctn]: true,
					[n.CtnRegistered]: false,
				}),
			},
			Boolean(s) &&
				c.createElement(
					"div",
					{
						className: n.SessionTitle,
					},
					s,
				),
			Boolean(o) &&
				c.createElement(
					"div",
					{
						className: n.SessionDesc,
					},
					o,
				),
			c.createElement(
				"div",
				{
					className: n.SessionOptions,
				},
				r,
			),
		);
	} else {
		return null;
	}
}
function gt(e) {
	const {
		sessionData: t,
		onClick: r,
		nGuestReservations: i,
		eRegistrationStatus: a = 0,
		bAllowedToRegisterIfFull: s,
	} = e;
	const [o, m, u] = (0, l.q3)(() => [
		t.rtime_start,
		t.rtime_end,
		t.max_capacity,
	]);
	const d = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const A =
		t.location_type === "in_person"
			? (t.in_person_time_zone ?? "US/Pacific")
			: d;
	const p = ct.unix(o);
	const g = ct.unix(o).tz(A).utcOffset() - p.utcOffset();
	const h = ct.unix(m);
	const C = ct.unix(m).tz(A);
	const _ = C.utcOffset() - h.utcOffset();
	const f = Math.max(0, u - (i || 0));
	const b = s || (a === 0 && f > 0) || a === 1 || a === 2 || a === 3;
	let y = null;
	let S = null;
	if (a == 1) {
		y = Localize("#MeetSteam_Registered");
		S = n.Registered;
	} else if (a == 2) {
		y = Localize("#MeetSteam_Registering");
		S = n.Registering;
	} else if (a == 3) {
		y = Localize("#MeetSteam_Unegistering");
		S = n.Unregistering;
	}
	return c.createElement(
		c.Fragment,
		null,
		c.createElement(
			"div",
			{
				className: (0, Qe.A)(n.SessionInstance, S),
			},
			c.createElement(
				"div",
				{
					className: n.StatusText,
				},
				c.createElement("span", null, y),
			),
			c.createElement(
				"button",
				{
					className: n.Button,
					disabled: !b,
					onClick: r,
				},
				c.createElement(
					"div",
					{
						className: n.Title,
					},
					(0, Ye.LocalizeCalendarWeekdayAndDayMonth)(
						new Date((o + g * 60) * 1000),
					),
				),
				c.createElement(
					"div",
					{
						className: n.TimeFrame,
					},
					(0, Ye.Vx)(o + g * 60, m + _ * 60, true),
					" ",
					C.format("z"),
				),
			),
			s ||
				c.createElement(
					c.Fragment,
					null,
					" ",
					f < 1
						? c.createElement(
								"div",
								{
									className: n.SoldOut,
								},
								Localize("#MeetSteam_SoldOut"),
							)
						: c.createElement(
								"div",
								{
									className: n.MaxSize,
								},
								LocalizePlural("#MeetSteam_Spot", f.toLocaleString()),
							),
					" ",
				),
		),
	);
}
function ht() {
	return c.createElement(
		"div",
		{
			className: n.InstanceDivider,
		},
		Localize("#MeetSteam_Or"),
	);
}
function Ct(e) {
	const { eventModel: t } = e;
	const r = "complete-registration-marker";
	const { refIsLast: i, bIsLast: a } = (function (e) {
		const [t, r] = c.useState(false);
		const n = c.useRef(null);
		c.useEffect(() => {
			const t = document.querySelectorAll("." + e);
			if (n.current && t.length > 0) {
				r(t[t.length - 1] === n.current);
			}
		}, [e]);
		return {
			refIsLast: n,
			bIsLast: t,
		};
	})(r);
	const m = dt();
	const [u, d] = c.useState(false);
	const [A, p] = c.useState(false);
	(function (e, t, r, n) {
		c.useEffect(() => {
			(async () => {
				it.Get().Init(e, t, r, n);
				await it.Get().Load();
			})();
		}, [e, t, r, n]);
	})(m, o.iA.accountid, t.clanSteamID.GetAccountID(), t.GID);
	const g = Ue(m, t.clanSteamID.GetAccountID(), t.GID);
	const [h, C, _] = (0, s.uD)();
	const f = ft();
	const b = at();
	const y = u || b;
	const S = (0, l.q3)(() => it.Get().BHaveSelectionsChanged());
	const w = (0, l.q3)(() => it.Get().BIsAddingOrChangingSelections());
	const B = (0, l.q3)(() => it.Get().BHasAlreadyRegistered());
	const v = (0, l.q3)(() =>
		it
			.Get()
			.GetSelectedGroups()
			.reduce((e, r) => {
				const n = _t(t, r);
				const i = it.Get().GetSelection(n.group_id);
				const a = n.sessions?.find((e) => e.id == i)?.max_per_team ?? 1;
				return Math.max(e, a);
			}, 1),
	);
	(function (e) {
		c.useEffect(() => {
			if (e) {
				window.onbeforeunload = () => Localize("#EventEditor_UnsavedChanges");
				return () => {
					window.onbeforeunload = () => {};
				};
			}
		}, [e]);
	})(S);
	return c.createElement(
		"div",
		{
			ref: i,
			className: (0, Qe.A)(r, n.CompleteRegistrationCtn, a && S && n.Visible),
		},
		c.createElement(
			"p",
			null,
			B
				? Localize("#MeetSteam_UpdateRegistration_Desc")
				: Localize("#MeetSteam_CompleteRegistration_Desc"),
		),
		a &&
			c.createElement(
				c.Fragment,
				null,
				!y &&
					c.createElement(
						et.jn,
						{
							disabled: !S,
							onClick: () => f(() => p(true)),
						},
						B
							? Localize("#MeetSteam_UpdateRegistration")
							: Localize("#MeetSteam_CompleteRegistration"),
					),
				y &&
					c.createElement(qe.t, {
						size: "small",
						position: "center",
						string: Localize("#Saving"),
					}),
				A &&
					c.createElement(tt, {
						transport: m,
						eventModel: t,
						fnConfirm: async (e) => {
							d(true);
							if (!(await it.Get().Save(e))) {
								C();
							}
							g.refetch();
							d(false);
						},
						fnHideModal: () => p(false),
						nMaxPerTeam: v,
						bAddingOrChangingSessions: w,
					}),
				h &&
					c.createElement(
						je.EN,
						{
							active: true,
						},
						c.createElement(je.Ee, {
							strTitle: Localize("#Error_Generic"),
							strDescription: Localize("#MeetSteam_RegistrationFailed"),
							closeModal: _,
						}),
					),
			),
	);
}
function _t(e, t) {
	const r = e?.jsondata?.meet_steam_groups || [];
	return r?.find((e) => e.group_id == t);
}
function ft() {
	if (st.KN.Get().BIsUserLoggedIn()) {
		return (e) => e();
	} else {
		return () =>
			(0, lt.pg)(
				c.createElement(je.o0, {
					strTitle: Localize("#EventDisplay_Share_NotLoggedIn"),
					strDescription: Localize(
						"#EventDisplay_Share_NotLoggedIn_Description",
					),
					strOKButtonText: Localize("#MobileLogin_SignIn"),
					onOK: () => (0, ot.vg)(),
				}),
				window,
			);
	}
}
