var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./61416.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require(/*webcrack:missing*/ "./44846.js");
var o = require(/*webcrack:missing*/ "./12176.js");
var l = require(/*webcrack:missing*/ "./58663.js");
var c = require(/*webcrack:missing*/ "./48307.js");
var m = require("./80222.js");
const u = l.Message;
class d extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.gid) {
			c.Sg(d.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				title: {
					n: 2,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				type: {
					n: 3,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				visibility: {
					n: 4,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				priority: {
					n: 5,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				association_type: {
					n: 6,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				associated_id: {
					n: 7,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				associated_name: {
					n: 8,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				start_date: {
					n: 9,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				end_date: {
					n: 10,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				country_allow: {
					n: 11,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				country_deny: {
					n: 12,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				ownership_restrictions_overridden: {
					n: 13,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				must_own_appid: {
					n: 14,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				must_not_own_appid: {
					n: 15,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				must_own_packageid: {
					n: 16,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				must_not_own_packageid: {
					n: 17,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				must_have_launched_appid: {
					n: 18,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				additional_restrictions: {
					n: 19,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				template_type: {
					n: 20,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				template_vars: {
					n: 21,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				flags: {
					n: 22,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				creator_name: {
					n: 23,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				template_vars_json: {
					n: 24,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				additional_restrictions_json: {
					n: 25,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
			},
		};
		return d.sm_m;
	}
	static MBF() {
		d.sm_mbf ||= c.w0(d.M());
		return d.sm_mbf;
	}
	toObject(e = false) {
		return d.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(d.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(d.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new d();
		return d.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(d.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(d.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessageProto";
	}
}
class A extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.gid) {
			c.Sg(A.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				title: {
					n: 2,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				type: {
					n: 3,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				associated_item_id: {
					n: 4,
					c: m.O4,
				},
				associated_item: {
					n: 5,
					c: m.vB,
				},
				associated_name: {
					n: 6,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				template_type: {
					n: 10,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				template_vars_json: {
					n: 11,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
			},
		};
		return A.sm_m;
	}
	static MBF() {
		A.sm_mbf ||= c.w0(A.M());
		return A.sm_mbf;
	}
	toObject(e = false) {
		return A.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(A.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(A.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new A();
		return A.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(A.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(A.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CDisplayMarketingMessage";
	}
}
class p extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.country) {
			c.Sg(p.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				country: {
					n: 1,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				anonymous_user: {
					n: 2,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= c.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(p.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(p.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(p.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetActiveMarketingMessages_Request";
	}
}
class g extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.messages) {
			c.Sg(g.M());
		}
		u.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				messages: {
					n: 1,
					c: d,
					r: true,
					q: true,
				},
				time_next_message_age: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= c.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(g.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetActiveMarketingMessages_Response";
	}
}
class h extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.start_past_days) {
			c.Sg(h.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				start_past_days: {
					n: 1,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				upto_past_days: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= c.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(h.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(h.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetPastMarketingMessages_Request";
	}
}
class C extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.messages) {
			c.Sg(C.M());
		}
		u.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				messages: {
					n: 1,
					c: d,
					r: true,
					q: true,
				},
			},
		};
		return C.sm_m;
	}
	static MBF() {
		C.sm_mbf ||= c.w0(C.M());
		return C.sm_mbf;
	}
	toObject(e = false) {
		return C.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(C.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(C.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(C.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(C.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetPastMarketingMessages_Response";
	}
}
class _ extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.include_seen_messages) {
			c.Sg(_.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				include_seen_messages: {
					n: 1,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				country_code: {
					n: 2,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				elanguage: {
					n: 3,
					br: c.qM.readInt32,
					bw: c.gp.writeInt32,
				},
				operating_system: {
					n: 4,
					br: c.qM.readInt32,
					bw: c.gp.writeInt32,
				},
				client_package_version: {
					n: 5,
					br: c.qM.readInt32,
					bw: c.gp.writeInt32,
				},
				context: {
					n: 6,
					c: m.TS,
				},
				data_request: {
					n: 7,
					c: m.gn,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= c.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(_.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetMarketingMessagesForUser_Request";
	}
}
class f extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.messages) {
			c.Sg(f.M());
		}
		u.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				messages: {
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
		f.sm_mbf ||= c.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(f.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(f.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetMarketingMessagesForUser_Response";
	}
}
class b extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.already_seen) {
			c.Sg(b.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				already_seen: {
					n: 1,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				message: {
					n: 2,
					c: A,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= c.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(b.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
	}
}
class y extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.country_code) {
			c.Sg(y.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				country_code: {
					n: 2,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				elanguage: {
					n: 3,
					br: c.qM.readInt32,
					bw: c.gp.writeInt32,
				},
				operating_system: {
					n: 4,
					br: c.qM.readInt32,
					bw: c.gp.writeInt32,
				},
				client_package_version: {
					n: 5,
					br: c.qM.readInt32,
					bw: c.gp.writeInt32,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= c.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(y.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(y.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(y.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Request";
	}
}
class S extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.has_pending_messages) {
			c.Sg(S.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				has_pending_messages: {
					n: 1,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				pending_message_count: {
					n: 2,
					br: c.qM.readInt32,
					bw: c.gp.writeInt32,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= c.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(S.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
	}
}
class w extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.gid) {
			c.Sg(w.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				context: {
					n: 2,
					c: m.TS,
				},
				data_request: {
					n: 3,
					c: m.gn,
				},
			},
		};
		return w.sm_m;
	}
	static MBF() {
		w.sm_mbf ||= c.w0(w.M());
		return w.sm_mbf;
	}
	toObject(e = false) {
		return w.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(w.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(w.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(w.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(w.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetDisplayMarketingMessage_Request";
	}
}
class B extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.message) {
			c.Sg(B.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				message: {
					n: 1,
					c: A,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= c.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(B.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(B.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetDisplayMarketingMessage_Response";
	}
}
class v extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.gid) {
			c.Sg(v.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				display_index: {
					n: 2,
					d: 0,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				template_type: {
					n: 3,
					d: 0,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
			},
		};
		return v.sm_m;
	}
	static MBF() {
		v.sm_mbf ||= c.w0(v.M());
		return v.sm_mbf;
	}
	toObject(e = false) {
		return v.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(v.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(v.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(v.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(v.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_MarkMessageSeen_Notification";
	}
}
class I extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.gid) {
			c.Sg(I.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				display_index: {
					n: 2,
					d: 0,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				template_type: {
					n: 3,
					d: 0,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				click_location: {
					n: 4,
					d: 0,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
			},
		};
		return I.sm_m;
	}
	static MBF() {
		I.sm_mbf ||= c.w0(I.M());
		return I.sm_mbf;
	}
	toObject(e = false) {
		return I.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(I.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(I.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(I.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(I.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_MarkMessageClicked_Notification";
	}
}
class E extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.gid) {
			c.Sg(E.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
			},
		};
		return E.sm_m;
	}
	static MBF() {
		E.sm_mbf ||= c.w0(E.M());
		return E.sm_mbf;
	}
	toObject(e = false) {
		return E.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(E.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(E.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new E();
		return E.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(E.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(E.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetMarketingMessage_Request";
	}
}
class M extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.message) {
			c.Sg(M.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				message: {
					n: 1,
					c: d,
				},
			},
		};
		return M.sm_m;
	}
	static MBF() {
		M.sm_mbf ||= c.w0(M.M());
		return M.sm_mbf;
	}
	toObject(e = false) {
		return M.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(M.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(M.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(M.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(M.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetMarketingMessage_Response";
	}
}
class T extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.lookup_type) {
			c.Sg(T.M());
		}
		u.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				lookup_type: {
					n: 1,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				gid: {
					n: 2,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				message_type: {
					n: 3,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				gidlist: {
					n: 4,
					r: true,
					q: true,
					br: c.qM.readFixed64String,
					pbr: c.qM.readPackedFixed64String,
					bw: c.gp.writeRepeatedFixed64String,
				},
				title: {
					n: 5,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
			},
		};
		return T.sm_m;
	}
	static MBF() {
		T.sm_mbf ||= c.w0(T.M());
		return T.sm_mbf;
	}
	toObject(e = false) {
		return T.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(T.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(T.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new T();
		return T.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(T.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(T.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_FindMarketingMessages_Request";
	}
}
class R extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.messages) {
			c.Sg(R.M());
		}
		u.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				messages: {
					n: 1,
					c: d,
					r: true,
					q: true,
				},
			},
		};
		return R.sm_m;
	}
	static MBF() {
		R.sm_mbf ||= c.w0(R.M());
		return R.sm_mbf;
	}
	toObject(e = false) {
		return R.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(R.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(R.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new R();
		return R.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(R.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(R.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_FindMarketingMessages_Response";
	}
}
class k extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.message) {
			c.Sg(k.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				message: {
					n: 1,
					c: d,
				},
				from_json: {
					n: 2,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
			},
		};
		return k.sm_m;
	}
	static MBF() {
		k.sm_mbf ||= c.w0(k.M());
		return k.sm_mbf;
	}
	toObject(e = false) {
		return k.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(k.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(k.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new k();
		return k.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(k.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(k.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_CreateMarketingMessage_Request";
	}
}
class D extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.gid) {
			c.Sg(D.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
			},
		};
		return D.sm_m;
	}
	static MBF() {
		D.sm_mbf ||= c.w0(D.M());
		return D.sm_mbf;
	}
	toObject(e = false) {
		return D.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(D.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(D.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(D.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(D.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_CreateMarketingMessage_Response";
	}
}
class N extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.gid) {
			c.Sg(N.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				message: {
					n: 2,
					c: d,
				},
				from_json: {
					n: 3,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
			},
		};
		return N.sm_m;
	}
	static MBF() {
		N.sm_mbf ||= c.w0(N.M());
		return N.sm_mbf;
	}
	toObject(e = false) {
		return N.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(N.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(N.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new N();
		return N.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(N.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(N.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_UpdateMarketingMessage_Request";
	}
}
class F extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		u.initialize(this, e, 0, -1, undefined, null);
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
		let t = new l.BinaryReader(e);
		let r = new F();
		return F.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_UpdateMarketingMessage_Response";
	}
}
class G extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.gid) {
			c.Sg(G.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
			},
		};
		return G.sm_m;
	}
	static MBF() {
		G.sm_mbf ||= c.w0(G.M());
		return G.sm_mbf;
	}
	toObject(e = false) {
		return G.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(G.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(G.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new G();
		return G.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(G.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(G.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_DeleteMarketingMessage_Request";
	}
}
class O extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		u.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return O.toObject(e, this);
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
		return new O();
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new O();
		return O.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_DeleteMarketingMessage_Response";
	}
}
class P extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.gid) {
			c.Sg(P.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
			},
		};
		return P.sm_m;
	}
	static MBF() {
		P.sm_mbf ||= c.w0(P.M());
		return P.sm_mbf;
	}
	toObject(e = false) {
		return P.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(P.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(P.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new P();
		return P.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(P.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(P.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetMarketingMessageViewerStats_Request";
	}
}
class L extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!L.prototype.rt_time_hour) {
			c.Sg(L.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		L.sm_m ||= {
			proto: L,
			fields: {
				rt_time_hour: {
					n: 1,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				seen_count: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				template_type: {
					n: 3,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				display_index: {
					n: 4,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
			},
		};
		return L.sm_m;
	}
	static MBF() {
		L.sm_mbf ||= c.w0(L.M());
		return L.sm_mbf;
	}
	toObject(e = false) {
		return L.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(L.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(L.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new L();
		return L.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(L.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(L.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessageHourlyStats";
	}
}
class z extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.stats) {
			c.Sg(z.M());
		}
		u.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		z.sm_m ||= {
			proto: z,
			fields: {
				stats: {
					n: 1,
					c: L,
					r: true,
					q: true,
				},
			},
		};
		return z.sm_m;
	}
	static MBF() {
		z.sm_mbf ||= c.w0(z.M());
		return z.sm_mbf;
	}
	toObject(e = false) {
		return z.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(z.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new z();
		return z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(z.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(z.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetMarketingMessageViewerStats_Response";
	}
}
class x extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.rt_start_time) {
			c.Sg(x.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		x.sm_m ||= {
			proto: x,
			fields: {
				rt_start_time: {
					n: 1,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				rt_end_time: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
			},
		};
		return x.sm_m;
	}
	static MBF() {
		x.sm_mbf ||= c.w0(x.M());
		return x.sm_mbf;
	}
	toObject(e = false) {
		return x.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(x.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(x.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new x();
		return x.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(x.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(x.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request";
	}
}
class U extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.stats) {
			c.Sg(U.M());
		}
		u.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		U.sm_m ||= {
			proto: U,
			fields: {
				stats: {
					n: 1,
					c: L,
					r: true,
					q: true,
				},
			},
		};
		return U.sm_m;
	}
	static MBF() {
		U.sm_mbf ||= c.w0(U.M());
		return U.sm_mbf;
	}
	toObject(e = false) {
		return U.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(U.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(U.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new U();
		return U.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(U.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(U.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response";
	}
}
class W extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W.prototype.rt_time_hour) {
			c.Sg(W.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W.sm_m ||= {
			proto: W,
			fields: {
				rt_time_hour: {
					n: 1,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				clicked_count: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				display_index: {
					n: 3,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				template_type: {
					n: 4,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				click_location: {
					n: 5,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
			},
		};
		return W.sm_m;
	}
	static MBF() {
		W.sm_mbf ||= c.w0(W.M());
		return W.sm_mbf;
	}
	toObject(e = false) {
		return W.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(W.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(W.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new W();
		return W.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(W.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(W.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessageClickedHourlyStats";
	}
}
class V extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.gid) {
			c.Sg(V.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		V.sm_m ||= {
			proto: V,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
			},
		};
		return V.sm_m;
	}
	static MBF() {
		V.sm_mbf ||= c.w0(V.M());
		return V.sm_mbf;
	}
	toObject(e = false) {
		return V.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(V.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(V.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new V();
		return V.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(V.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(V.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetMarketingMessageClickedStats_Request";
	}
}
class H extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H.prototype.stats) {
			c.Sg(H.M());
		}
		u.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H.sm_m ||= {
			proto: H,
			fields: {
				stats: {
					n: 1,
					c: W,
					r: true,
					q: true,
				},
			},
		};
		return H.sm_m;
	}
	static MBF() {
		H.sm_mbf ||= c.w0(H.M());
		return H.sm_mbf;
	}
	toObject(e = false) {
		return H.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(H.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(H.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new H();
		return H.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(H.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(H.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetMarketingMessageClickedStats_Response";
	}
}
class j extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!j.prototype.partnerid) {
			c.Sg(j.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		j.sm_m ||= {
			proto: j,
			fields: {
				partnerid: {
					n: 1,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
			},
		};
		return j.sm_m;
	}
	static MBF() {
		j.sm_mbf ||= c.w0(j.M());
		return j.sm_mbf;
	}
	toObject(e = false) {
		return j.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(j.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(j.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new j();
		return j.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(j.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(j.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetPartnerReadyToPublishMessages_Request";
	}
}
class q extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.messages) {
			c.Sg(q.M());
		}
		u.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				messages: {
					n: 1,
					c: A,
					r: true,
					q: true,
				},
			},
		};
		return q.sm_m;
	}
	static MBF() {
		q.sm_mbf ||= c.w0(q.M());
		return q.sm_mbf;
	}
	toObject(e = false) {
		return q.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(q.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new q();
		return q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(q.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(q.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetPartnerReadyToPublishMessages_Response";
	}
}
class Q extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q.prototype.gid) {
			c.Sg(Q.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q.sm_m ||= {
			proto: Q,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				partnerid: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
			},
		};
		return Q.sm_m;
	}
	static MBF() {
		Q.sm_mbf ||= c.w0(Q.M());
		return Q.sm_mbf;
	}
	toObject(e = false) {
		return Q.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(Q.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(Q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new Q();
		return Q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(Q.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(Q.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_PartnerPublishMessage_Request";
	}
}
class Z extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		u.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Z.toObject(e, this);
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
		return new Z();
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new Z();
		return Z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_PartnerPublishMessage_Response";
	}
}
class Y extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.gid) {
			c.Sg(Y.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Y.sm_m ||= {
			proto: Y,
			fields: {
				gid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				partnerid: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
			},
		};
		return Y.sm_m;
	}
	static MBF() {
		Y.sm_mbf ||= c.w0(Y.M());
		return Y.sm_mbf;
	}
	toObject(e = false) {
		return Y.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(Y.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(Y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new Y();
		return Y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(Y.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(Y.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetPartnerMessagePreview_Request";
	}
}
class K extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K.prototype.message) {
			c.Sg(K.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		K.sm_m ||= {
			proto: K,
			fields: {
				message: {
					n: 1,
					c: d,
				},
			},
		};
		return K.sm_m;
	}
	static MBF() {
		K.sm_mbf ||= c.w0(K.M());
		return K.sm_mbf;
	}
	toObject(e = false) {
		return K.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(K.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(K.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new K();
		return K.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(K.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(K.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessages_GetPartnerMessagePreview_Response";
	}
}
class X extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!X.prototype.appids) {
			c.Sg(X.M());
		}
		u.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		X.sm_m ||= {
			proto: X,
			fields: {
				appids: {
					n: 1,
					r: true,
					q: true,
					br: c.qM.readUint32,
					pbr: c.qM.readPackedUint32,
					bw: c.gp.writeRepeatedUint32,
				},
			},
		};
		return X.sm_m;
	}
	static MBF() {
		X.sm_mbf ||= c.w0(X.M());
		return X.sm_mbf;
	}
	toObject(e = false) {
		return X.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(X.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(X.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new X();
		return X.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(X.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(X.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessage_GetMarketingMessagesForApps_Request";
	}
}
class J extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!J.prototype.messages) {
			c.Sg(J.M());
		}
		u.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		J.sm_m ||= {
			proto: J,
			fields: {
				messages: {
					n: 1,
					c: d,
					r: true,
					q: true,
				},
			},
		};
		return J.sm_m;
	}
	static MBF() {
		J.sm_mbf ||= c.w0(J.M());
		return J.sm_mbf;
	}
	toObject(e = false) {
		return J.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(J.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(J.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new J();
		return J.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(J.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(J.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessage_GetMarketingMessagesForApps_Response";
	}
}
class $ extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$.prototype.partnerid) {
			c.Sg($.M());
		}
		u.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$.sm_m ||= {
			proto: $,
			fields: {
				partnerid: {
					n: 1,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
			},
		};
		return $.sm_m;
	}
	static MBF() {
		$.sm_mbf ||= c.w0($.M());
		return $.sm_mbf;
	}
	toObject(e = false) {
		return $.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT($.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq($.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new $();
		return $.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj($.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0($.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessage_GetMarketingMessagesForPartner_Request";
	}
}
class ee extends u {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ee.prototype.messages) {
			c.Sg(ee.M());
		}
		u.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ee.sm_m ||= {
			proto: ee,
			fields: {
				messages: {
					n: 1,
					c: d,
					r: true,
					q: true,
				},
			},
		};
		return ee.sm_m;
	}
	static MBF() {
		ee.sm_mbf ||= c.w0(ee.M());
		return ee.sm_mbf;
	}
	toObject(e = false) {
		return ee.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(ee.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(ee.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new ee();
		return ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(ee.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(ee.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMarketingMessage_GetMarketingMessagesForPartner_Response";
	}
}
var te;
(function (e) {
	e.GetActiveMarketingMessages = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetActiveMarketingMessages#1",
			(0, o.I8)(p, t),
			g,
			{
				bConstMethod: true,
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.GetPastMarketingMessages = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetPastMarketingMessages#1",
			(0, o.I8)(h, t),
			C,
			{
				bConstMethod: true,
				ePrivilege: 4,
			},
		);
	};
	e.GetMarketingMessagesForUser = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetMarketingMessagesForUser#1",
			(0, o.I8)(_, t),
			f,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.DoesUserHavePendingMarketingMessages = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.DoesUserHavePendingMarketingMessages#1",
			(0, o.I8)(y, t),
			S,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.GetDisplayMarketingMessage = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetDisplayMarketingMessage#1",
			(0, o.I8)(w, t),
			B,
			{
				bConstMethod: true,
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.GetDisplayMarketingMessageForUser = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetDisplayMarketingMessageForUser#1",
			(0, o.I8)(w, t),
			B,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.GetDisplayMarketingMessageAdmin = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetDisplayMarketingMessageAdmin#1",
			(0, o.I8)(w, t),
			B,
			{
				bConstMethod: true,
				ePrivilege: 4,
			},
		);
	};
	e.MarkMessageSeen = function (e, t) {
		return e.SendNotification(
			"MarketingMessages.MarkMessageSeen#1",
			(0, o.I8)(v, t),
			{
				ePrivilege: 1,
			},
		);
	};
	e.MarkMessageClicked = function (e, t) {
		return e.SendNotification(
			"MarketingMessages.MarkMessageClicked#1",
			(0, o.I8)(I, t),
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetMarketingMessage = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetMarketingMessage#1",
			(0, o.I8)(E, t),
			M,
			{
				ePrivilege: 2,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.CreateMarketingMessage = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.CreateMarketingMessage#1",
			(0, o.I8)(k, t),
			D,
			{
				ePrivilege: 4,
			},
		);
	};
	e.UpdateMarketingMessage = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.UpdateMarketingMessage#1",
			(0, o.I8)(N, t),
			F,
			{
				ePrivilege: 5,
			},
		);
	};
	e.DeleteMarketingMessage = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.DeleteMarketingMessage#1",
			(0, o.I8)(G, t),
			O,
			{
				ePrivilege: 4,
			},
		);
	};
	e.FindMarketingMessages = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.FindMarketingMessages#1",
			(0, o.I8)(T, t),
			R,
			{
				ePrivilege: 5,
			},
		);
	};
	e.GetMarketingMessageViewerStats = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetMarketingMessageViewerStats#1",
			(0, o.I8)(P, t),
			z,
			{
				ePrivilege: 4,
			},
		);
	};
	e.GetMarketingMessagesViewerRangeStats = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetMarketingMessagesViewerRangeStats#1",
			(0, o.I8)(x, t),
			U,
			{
				ePrivilege: 4,
			},
		);
	};
	e.GetMarketingMessageClickedStats = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetMarketingMessageClickedStats#1",
			(0, o.I8)(V, t),
			H,
			{
				ePrivilege: 4,
			},
		);
	};
	e.GetPartnerReadyToPublishMessages = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetPartnerReadyToPublishMessages#1",
			(0, o.I8)(j, t),
			q,
			{
				bConstMethod: true,
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	};
	e.PublishPartnerMessage = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.PublishPartnerMessage#1",
			(0, o.I8)(Q, t),
			Z,
			{
				bConstMethod: true,
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	};
	e.GetPartnerMessagePreview = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetPartnerMessagePreview#1",
			(0, o.I8)(Y, t),
			K,
			{
				bConstMethod: true,
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	};
	e.GetMarketingMessagesForPartner = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetMarketingMessagesForPartner#1",
			(0, o.I8)($, t),
			ee,
			{
				bConstMethod: true,
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	};
	e.GetMarketingMessagesForApps = function (e, t) {
		return e.SendMsg(
			"MarketingMessages.GetMarketingMessagesForApps#1",
			(0, o.I8)(X, t),
			J,
			{
				ePrivilege: 4,
			},
		);
	};
})((te ||= {}));
var re = require(/*webcrack:missing*/ "./72476.js");
var ne = require("./85606.js");
var ie = require(/*webcrack:missing*/ "./67784.js");
var ae = require(/*webcrack:missing*/ "./49455.js");
var se = require(/*webcrack:missing*/ "./89193.js");
var oe = require("./5859.js");
var le = require(/*webcrack:missing*/ "./46108.js");
export class Nt {
	m_SteamInterface;
	m_SteamInterfacePromotions;
	m_setMessagesSeen = new Set();
	static sm_DefaultDataRequest = {
		include_release: true,
		include_assets: true,
	};
	constructor(e) {
		this.m_SteamInterface = e;
	}
	static sm_Instance;
	static Init(e) {
		Nt.sm_Instance = new Nt(e);
	}
	SetSteamInterfacePromotions(e) {
		this.m_SteamInterfacePromotions = e;
	}
	static Get() {
		(0, ae.w)(Nt.sm_Instance, "MarketingMessages store not initialized");
		return Nt.sm_Instance;
	}
	async GetMessageList(e, t = false) {
		if (!re.iA.logged_in) {
			return [];
		}
		const r = o.w.Init(_);
		r.Body().set_country_code(re.TS.COUNTRY);
		r.Body().set_elanguage((0, s.sf)(re.TS.LANGUAGE));
		r.Body().set_client_package_version(e.nClientPackageVersion);
		r.Body().set_operating_system(e.eOSType);
		if (t) {
			r.Body().set_include_seen_messages(true);
		}
		(0, ne.rV)(r);
		(0, ne.Bn)(r, Nt.sm_DefaultDataRequest);
		const n = await te.GetMarketingMessagesForUser(
			this.m_SteamInterface.GetServiceTransport(),
			r,
		);
		if (n.GetEResult() != 1) {
			throw `Error loading marketing messages: ${n.GetEResult()}`;
		}
		if (t) {
			for (const e of n.Body().messages()) {
				if (e.already_seen()) {
					this.m_setMessagesSeen.add(e.message().gid());
				}
			}
		}
		return n.Body().messages();
	}
	async GetSingleMessage(e, t) {
		const r = o.w.Init(w);
		let n;
		r.Body().set_gid(e);
		(0, ne.rV)(r);
		(0, ne.Bn)(r, Nt.sm_DefaultDataRequest);
		n =
			t || re.iA.logged_in
				? await te.GetDisplayMarketingMessageForUser(
						this.m_SteamInterface.GetServiceTransport(),
						r,
					)
				: await te.GetDisplayMarketingMessage(
						this.m_SteamInterface.GetAnonymousServiceTransport(),
						r,
					);
		if (n.GetEResult() != 1) {
			throw `Error loading marketing messages: ${n.GetEResult()}`;
		}
		return n.Body().message();
	}
	MarkMessageSeen(e, t, r) {
		if (this.m_setMessagesSeen.has(e)) {
			return;
		}
		const n = o.w.Init(v);
		n.Body().set_gid(e);
		n.Body().set_display_index(t);
		n.Body().set_template_type(r);
		te.MarkMessageSeen(this.m_SteamInterface.GetServiceTransport(), n);
		this.m_setMessagesSeen.add(e);
	}
	BIsMessageSeen(e) {
		return this.m_setMessagesSeen.has(e);
	}
}
export class rT {
	m_message;
	m_templateVars = undefined;
	m_item;
	constructor(e) {
		(0, se.Gn)(this);
		this.m_message = e;
		if (e.associated_item(false)) {
			this.m_item = oe.A.Get().ReadItem(
				e.associated_item(),
				Nt.sm_DefaultDataRequest,
			);
		}
		this.m_templateVars = (function (e) {
			if (!e) {
				return null;
			}
			try {
				const t = JSON.parse(e);
				t.use_additional_fields &&=
					t.use_additional_fields === "true" || t.use_additional_fields === 1;
				t.use_custom_legal_text &&=
					t.use_custom_legal_text === "true" || t.use_custom_legal_text === 1;
				t.last_asset_mtime &&= parseInt(t.last_asset_mtime);
				t.ll_image = t.ll_image || {};
				return t;
			} catch (e) {
				if (re.TS.WEB_UNIVERSE == "dev") {
					console.error(
						"MarketingMessageReadAndParseTemplateVars: Failed to prase",
						e,
					);
				}
			}
			return null;
		})(e.template_vars_json());
	}
	get id() {
		return this.m_message.gid();
	}
	GetType() {
		return this.m_message.type();
	}
	static GetTypeAsLocalizedString(e) {
		switch (e) {
			case 2:
				return (0, le.we)("#spotlight_weekend_deal");
			case 11:
				return (0, le.we)("#spotlight_midweek_madness");
			case 12:
				return (0, le.we)("#spotlight_daily_deal");
			case 1:
				return (0, le.we)("#msg_available_everywhere");
			case 3:
				return (0, le.we)("#msg_prepurchase_now");
			case 4:
				return (0, le.we)("#msg_play_now");
			case 5:
				return (0, le.we)("#label_pre_load_now");
			case 10:
				return (0, le.we)("#label_just_updated");
			case 13:
				return (0, le.we)("#label_new_dlc_available");
			case 14:
				return (0, le.we)("#label_free_weekend");
			case 15:
				return (0, le.we)("#msg_on_sale_now");
			case 16:
				return (0, le.we)("#msg_play_beta_now");
		}
		return null;
	}
	GetTemplateType() {
		return this.m_message.template_type();
	}
	GetTemplateTypeForReporting() {
		if (
			this.GetTemplateVars().custom_display &&
			this.GetTemplateVars().custom_display.startsWith("replay")
		) {
			return 5;
		}
		switch (this.GetTemplateVars().custom_display) {
			case "dlc_override":
				return 4;
			case "mm_auto_render":
				return 7;
			case "partner_event":
				return 6;
			case "featured_video":
				return 3;
		}
		return 1;
	}
	GetTemplateVars() {
		return this.m_templateVars;
	}
	GetTemplateImage() {
		let e = this.m_templateVars.ll_image[re.TS.LANGUAGE];
		let t = (0, s.sf)(re.TS.LANGUAGE);
		if (!e && re.TS.LANGUAGE == (0, s.Lg)(27)) {
			e = this.m_templateVars.ll_image.LATAM;
			t = 27;
		}
		if (!e) {
			e = this.m_templateVars.ll_image.english;
			t = 0;
		}
		return [e?.path, t];
	}
	GetTemplateBackgroundImage() {
		let e = this.m_templateVars.background[re.TS.LANGUAGE];
		let t = (0, s.sf)(re.TS.LANGUAGE);
		if (!e) {
			e = this.m_templateVars.background.english;
			t = 0;
		}
		return [e?.path, t];
	}
	GetFeaturedVideoMP4URL() {
		return this.m_templateVars.featured_video_mp4;
	}
	GetFeaturedVideoWebMURL() {
		return this.m_templateVars.featured_video_webm;
	}
	GetFeaturedVideoAutoPlay() {
		return this.m_templateVars.featured_video_autoplay;
	}
	GetFeaturedVideoLoop() {
		return this.m_templateVars.featured_video_loop;
	}
	GetPosterImage() {
		let e = this.m_templateVars.poster[re.TS.LANGUAGE];
		let t = (0, s.sf)(re.TS.LANGUAGE);
		if (!e) {
			e = this.m_templateVars.poster.english;
			t = 0;
		}
		return [e?.path, t];
	}
	GetSubtitleObj() {
		return this.m_templateVars.subtitles;
	}
	GetDLCAppIDs() {
		return this.m_templateVars.additional_featuring
			.filter((e) => Boolean(e.appid))
			.map((e) => e.appid);
	}
	GetGID() {
		return this.m_message.gid();
	}
	SetDLCAppIDOverride(e) {
		this.m_templateVars.additional_featuring = e.map((e) => ({
			appid: e,
		}));
		this.m_templateVars.custom_display = "dlc_override";
	}
	OverrideCustomText(e) {
		this.m_templateVars.button_text_custom = e;
	}
	OverrideURL(e) {
		this.m_templateVars.linkurl = e;
	}
	BHasTemplateAnimatedAssets() {
		return this.m_templateVars.has_animated_assets;
	}
	BHasTemplateAnimatedAssetForLanguage(e) {
		const t = (0, s.Lg)(e);
		return Boolean(this.m_templateVars.mp4[t]);
	}
	GetTemplateWebM(e) {
		const t = (0, s.Lg)(e);
		return this.m_templateVars.webm[t]?.path;
	}
	GetTemplateMP4(e) {
		const t = (0, s.Lg)(e);
		return this.m_templateVars.mp4[t]?.path;
	}
	GetLegalHTML() {
		if (this.GetTemplateVars().use_custom_legal_text) {
			return this.GetTemplateVars().custom_legal_text;
		} else {
			e = this.GetTemplateVars().partner;
			return `© ${new Date().getFullYear()} Valve Corporation${e ? " and " + e : ""}. <br/>All trademarks are property of their respective owners in the US and other countries.`;
		}
		var e;
	}
	get associated_item() {
		return this.m_item;
	}
}
(0, n.Cg)([se.sH], rT.prototype, "m_templateVars", undefined);
export function Ho(e, t, r) {
	const n = r?.enabled !== false;
	const { data: s } = (0, i.I)({
		queryKey: ["MarketingMessages", "ClientParameters"],
		queryFn: async () => ({
			eOSType: await SteamClient.System.GetOSType(),
			nClientPackageVersion: (0, ie.MP)(),
		}),
		enabled: n,
	});
	return (function (e, t, r) {
		const { bIncludeSeenMessages: n, ...s } = t;
		const {
			data: o,
			isLoading: l,
			isError: c,
		} = (0, i.I)({
			queryKey: [
				"MarketingMessages",
				"List",
				s,
				{
					bIncludeSeenMessages: !!n,
				},
			],
			queryFn: () => e.GetMessageList(s, n),
			...r,
		});
		const m = a.useMemo(() => o?.map((e) => new rT(e.message())), [o]);
		return {
			rgMessages: l ? null : m,
			isError: c,
		};
	})(
		e,
		{
			...s,
			...t,
		},
		{
			...r,
			enabled: !!s && n,
		},
	);
}
