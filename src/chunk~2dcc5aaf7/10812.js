var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require(/*webcrack:missing*/ "./29218.js");
const o = n.Message;
export class _z extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_z.prototype.appids) {
			i.Sg(_z.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_z.sm_m ||= {
			proto: _z,
			fields: {
				appids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
				},
				language: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return _z.sm_m;
	}
	static MBF() {
		_z.sm_mbf ||= i.w0(_z.M());
		return _z.sm_mbf;
	}
	toObject(e = false) {
		return _z.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(_z.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(_z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _z();
		return _z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(_z.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		_z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_z.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		_z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_GetApps_Request";
	}
}
class c extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.apps) {
			i.Sg(c.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				apps: {
					n: 1,
					c: s.WV,
					r: true,
					q: true,
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
		return "CCommunity_GetApps_Response";
	}
}
export class zQ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!zQ.prototype.appid) {
			i.Sg(zQ.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		zQ.sm_m ||= {
			proto: zQ,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				language: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return zQ.sm_m;
	}
	static MBF() {
		zQ.sm_mbf ||= i.w0(zQ.M());
		return zQ.sm_mbf;
	}
	toObject(e = false) {
		return zQ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(zQ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(zQ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new zQ();
		return zQ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(zQ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		zQ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(zQ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		zQ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_GetAppRichPresenceLocalization_Request";
	}
}
class u extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.appid) {
			i.Sg(u.M());
		}
		o.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				token_lists: {
					n: 2,
					c: A,
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
		return "CCommunity_GetAppRichPresenceLocalization_Response";
	}
}
class d extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.name) {
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
		return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
	}
}
class A extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.language) {
			i.Sg(A.M());
		}
		o.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				language: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				tokens: {
					n: 2,
					c: d,
					r: true,
					q: true,
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
		return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
	}
}
export class ZP extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ZP.prototype.steamid) {
			i.Sg(ZP.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ZP.sm_m ||= {
			proto: ZP,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				comment_thread_type: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				gidfeature: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				gidfeature2: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				commentthreadid: {
					n: 5,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				start: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				count: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				upvoters: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				include_deleted: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				gidcomment: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				time_oldest: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				oldest_first: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return ZP.sm_m;
	}
	static MBF() {
		ZP.sm_mbf ||= i.w0(ZP.M());
		return ZP.sm_mbf;
	}
	toObject(e = false) {
		return ZP.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ZP.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ZP.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ZP();
		return ZP.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ZP.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ZP.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ZP.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ZP.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_GetCommentThread_Request";
	}
}
class g extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.gidcomment) {
			i.Sg(g.M());
		}
		o.initialize(this, e, 0, -1, [12], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				gidcomment: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				timestamp: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				text: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				upvotes: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				hidden: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				hidden_by_user: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				deleted: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				ipaddress: {
					n: 9,
					c: s.kK,
				},
				total_hidden: {
					n: 10,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				upvoted_by_user: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				reactions: {
					n: 12,
					c: h,
					r: true,
					q: true,
				},
				gidparentcomment: {
					n: 13,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CCommunity_Comment";
	}
}
class h extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.reactionid) {
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
				reactionid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				count: {
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
		return "CCommunity_Comment_Reaction";
	}
}
class C extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.comments) {
			i.Sg(C.M());
		}
		o.initialize(this, e, 0, -1, [1, 2, 9], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				comments: {
					n: 1,
					c: g,
					r: true,
					q: true,
				},
				deleted_comments: {
					n: 2,
					c: g,
					r: true,
					q: true,
				},
				steamid: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				commentthreadid: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				start: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				count: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				total_count: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				upvotes: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				upvoters: {
					n: 9,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				user_subscribed: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				user_upvoted: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				answer_commentid: {
					n: 12,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				answer_actor: {
					n: 13,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				answer_actor_rank: {
					n: 14,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				can_post: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				comment_thread_type: {
					n: 16,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				gidfeature: {
					n: 17,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				gidfeature2: {
					n: 18,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CCommunity_GetCommentThread_Response";
	}
}
export class aw extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!aw.prototype.steamid) {
			i.Sg(aw.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		aw.sm_m ||= {
			proto: aw,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				comment_thread_type: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				gidfeature: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				gidfeature2: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				text: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				gidparentcomment: {
					n: 7,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				suppress_notifications: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_report: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				start_hidden: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return aw.sm_m;
	}
	static MBF() {
		aw.sm_mbf ||= i.w0(aw.M());
		return aw.sm_mbf;
	}
	toObject(e = false) {
		return aw.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(aw.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(aw.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new aw();
		return aw.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(aw.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		aw.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(aw.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		aw.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_PostCommentToThread_Request";
	}
}
class f extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.gidcomment) {
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
				gidcomment: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				commentthreadid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				count: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				upvotes: {
					n: 4,
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
		return "CCommunity_PostCommentToThread_Response";
	}
}
export class s4 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!s4.prototype.steamid) {
			i.Sg(s4.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		s4.sm_m ||= {
			proto: s4,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				comment_thread_type: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				gidfeature: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				gidfeature2: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				gidcomment: {
					n: 5,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				undelete: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return s4.sm_m;
	}
	static MBF() {
		s4.sm_mbf ||= i.w0(s4.M());
		return s4.sm_mbf;
	}
	toObject(e = false) {
		return s4.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(s4.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(s4.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new s4();
		return s4.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(s4.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		s4.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(s4.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		s4.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_DeleteCommentFromThread_Request";
	}
}
class y extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_DeleteCommentFromThread_Response";
	}
}
export class jt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!jt.prototype.commentthreadtype) {
			i.Sg(jt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		jt.sm_m ||= {
			proto: jt,
			fields: {
				commentthreadtype: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				gidfeature: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				gidfeature2: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				gidcomment: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				rate_up: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				suppress_notifications: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return jt.sm_m;
	}
	static MBF() {
		jt.sm_mbf ||= i.w0(jt.M());
		return jt.sm_mbf;
	}
	toObject(e = false) {
		return jt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(jt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(jt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new jt();
		return jt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(jt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		jt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(jt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		jt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_RateCommentThread_Request";
	}
}
class w extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.gidcomment) {
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
				gidcomment: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				commentthreadid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				count: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				upvotes: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				has_upvoted: {
					n: 5,
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
		return "CCommunity_RateCommentThread_Response";
	}
}
class B extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.commentthreadtype) {
			i.Sg(B.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				commentthreadtype: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				gidfeature: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				gidfeature2: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				gidcomment: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				max_results: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(B.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_GetCommentThreadRatings_Request";
	}
}
class v extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.commentthreadid) {
			i.Sg(v.M());
		}
		o.initialize(this, e, 0, -1, [5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				commentthreadid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				gidcomment: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				upvotes: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				has_upvoted: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				upvoter_accountids: {
					n: 5,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
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
		return "CCommunity_GetCommentThreadRatings_Response";
	}
}
export class QU extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!QU.prototype.announcementid) {
			i.Sg(QU.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		QU.sm_m ||= {
			proto: QU,
			fields: {
				announcementid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				vote_up: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				clan_accountid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return QU.sm_m;
	}
	static MBF() {
		QU.sm_mbf ||= i.w0(QU.M());
		return QU.sm_mbf;
	}
	toObject(e = false) {
		return QU.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(QU.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(QU.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new QU();
		return QU.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(QU.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		QU.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(QU.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		QU.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_RateClanAnnouncement_Request";
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
		return "CCommunity_RateClanAnnouncement_Response";
	}
}
export class $Y extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$Y.prototype.announcementid) {
			i.Sg($Y.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$Y.sm_m ||= {
			proto: $Y,
			fields: {
				announcementid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return $Y.sm_m;
	}
	static MBF() {
		$Y.sm_mbf ||= i.w0($Y.M());
		return $Y.sm_mbf;
	}
	toObject(e = false) {
		return $Y.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT($Y.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq($Y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new $Y();
		return $Y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj($Y.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		$Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0($Y.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		$Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_GetClanAnnouncementVoteForUser_Request";
	}
}
class T extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.voted_up) {
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
				voted_up: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				voted_down: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CCommunity_GetClanAnnouncementVoteForUser_Response";
	}
}
class R extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				filter_user_uploaded_only: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CCommunity_GetAvatarHistory_Request";
	}
}
class k extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.avatars) {
			i.Sg(k.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				avatars: {
					n: 1,
					c: D,
					r: true,
					q: true,
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
		return "CCommunity_GetAvatarHistory_Response";
	}
}
class D extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.avatar_sha1) {
			i.Sg(D.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				avatar_sha1: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				user_uploaded: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				timestamp: {
					n: 3,
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
		var e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(D.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_GetAvatarHistory_Response_AvatarData";
	}
}
class N extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.priority) {
			i.Sg(N.M());
		}
		o.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				priority: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
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
		return "CAppPriority";
	}
}
class F extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.count) {
			i.Sg(F.M());
		}
		o.initialize(this, e, 0, -1, [5, 6, 8], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		F.sm_m ||= {
			proto: F,
			fields: {
				count: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				offset: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime32_start_time: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime32_end_time: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				language_preference: {
					n: 5,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				filter_event_type: {
					n: 6,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				filter_to_appid: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				app_list: {
					n: 8,
					c: N,
					r: true,
					q: true,
				},
				count_after: {
					n: 9,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				count_before: {
					n: 10,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CCommunity_GetUserPartnerEventNews_Request";
	}
}
class G extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.results) {
			i.Sg(G.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				results: {
					n: 1,
					c: s.h2,
					r: true,
					q: true,
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
		return "CCommunity_GetUserPartnerEventNews_Response";
	}
}
class O extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.include_steam_blog) {
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
				include_steam_blog: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				filter_to_played_within_days: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				include_only_game_updates: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CCommunity_GetBestEventsForUser_Request";
	}
}
class P extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.clanid) {
			i.Sg(P.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				clanid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				event_gid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				announcement_gid: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				appid: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				possible_takeover: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				rtime32_last_modified: {
					n: 6,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				user_app_priority: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		var e = new n.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(P.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_PartnerEventResult";
	}
}
class L extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!L.prototype.results) {
			i.Sg(L.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		L.sm_m ||= {
			proto: L,
			fields: {
				results: {
					n: 1,
					c: P,
					r: true,
					q: true,
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
		return "CCommunity_GetBestEventsForUser_Response";
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
		return "CCommunity_ClearUserPartnerEventsAppPriorities_Request";
	}
}
class x extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return x.toObject(e, this);
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
		return new x();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new x();
		return x.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
	}
}
class U extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.appid) {
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
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				user_app_priority: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CCommunity_PartnerEventsAppPriority";
	}
}
export class rm extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return rm.toObject(e, this);
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
		return new rm();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new rm();
		return rm.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		rm.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		rm.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_GetUserPartnerEventsAppPriorities_Request";
	}
}
class V extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.priorities) {
			i.Sg(V.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		V.sm_m ||= {
			proto: V,
			fields: {
				priorities: {
					n: 1,
					c: U,
					r: true,
					q: true,
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
		return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
	}
}
export class rF extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!rF.prototype.appid) {
			i.Sg(rF.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		rF.sm_m ||= {
			proto: rF,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return rF.sm_m;
	}
	static MBF() {
		rF.sm_mbf ||= i.w0(rF.M());
		return rF.sm_mbf;
	}
	toObject(e = false) {
		return rF.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(rF.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(rF.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new rF();
		return rF.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(rF.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		rF.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(rF.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		rF.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_ClearSinglePartnerEventsAppPriority_Request";
	}
}
class j extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
	}
}
export class bi extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!bi.prototype.appid) {
			i.Sg(bi.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		bi.sm_m ||= {
			proto: bi,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return bi.sm_m;
	}
	static MBF() {
		bi.sm_mbf ||= i.w0(bi.M());
		return bi.sm_mbf;
	}
	toObject(e = false) {
		return bi.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(bi.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(bi.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new bi();
		return bi.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(bi.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		bi.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(bi.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		bi.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_PartnerEventsShowMoreForApp_Request";
	}
}
class Q extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Q.toObject(e, this);
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
		return new Q();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Q();
		return Q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_PartnerEventsShowMoreForApp_Response";
	}
}
export class H4 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H4.prototype.appid) {
			i.Sg(H4.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H4.sm_m ||= {
			proto: H4,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return H4.sm_m;
	}
	static MBF() {
		H4.sm_mbf ||= i.w0(H4.M());
		return H4.sm_mbf;
	}
	toObject(e = false) {
		return H4.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(H4.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(H4.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new H4();
		return H4.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(H4.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		H4.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(H4.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		H4.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_PartnerEventsShowLessForApp_Request";
	}
}
class Y extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Y.toObject(e, this);
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
		return new Y();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Y();
		return Y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_PartnerEventsShowLessForApp_Response";
	}
}
export class wS extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!wS.prototype.markings) {
			i.Sg(wS.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		wS.sm_m ||= {
			proto: wS,
			fields: {
				markings: {
					n: 1,
					c: kZ,
					r: true,
					q: true,
				},
			},
		};
		return wS.sm_m;
	}
	static MBF() {
		wS.sm_mbf ||= i.w0(wS.M());
		return wS.sm_mbf;
	}
	toObject(e = false) {
		return wS.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(wS.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(wS.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new wS();
		return wS.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(wS.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		wS.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(wS.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		wS.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_MarkPartnerEventsForUser_Request";
	}
}
export class kZ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!kZ.prototype.clanid) {
			i.Sg(kZ.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		kZ.sm_m ||= {
			proto: kZ,
			fields: {
				clanid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				event_gid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				display_location: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mark_shown: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				mark_read: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return kZ.sm_m;
	}
	static MBF() {
		kZ.sm_mbf ||= i.w0(kZ.M());
		return kZ.sm_mbf;
	}
	toObject(e = false) {
		return kZ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(kZ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(kZ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new kZ();
		return kZ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(kZ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		kZ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(kZ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		kZ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
	}
}
class J extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_MarkPartnerEventsForUser_Response";
	}
}
class $ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$.prototype.event_gids) {
			i.Sg($.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$.sm_m ||= {
			proto: $,
			fields: {
				event_gids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
				},
				include_read_events_only: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CCommunity_GetUserPartnerEventViewStatus_Request";
	}
}
class ee extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ee.prototype.events) {
			i.Sg(ee.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ee.sm_m ||= {
			proto: ee,
			fields: {
				events: {
					n: 1,
					c: te,
					r: true,
					q: true,
				},
			},
		};
		return ee.sm_m;
	}
	static MBF() {
		ee.sm_mbf ||= i.w0(ee.M());
		return ee.sm_mbf;
	}
	toObject(e = false) {
		return ee.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ee.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ee.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ee();
		return ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ee.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ee.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_GetUserPartnerEventViewStatus_Response";
	}
}
class te extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!te.prototype.event_gid) {
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
				event_gid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				last_shown_time: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_read_time: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				clan_account_id: {
					n: 4,
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
		return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
	}
}
class re extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				itemid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CCommunity_GetClanEventCrowdInMetadata_Request";
	}
}
class ne extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ne.prototype.crowdin_project_id) {
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
				crowdin_project_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				crowdin_file_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CCommunity_GetClanEventCrowdInMetadata_Response";
	}
}
class ie extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ie.prototype.steamid) {
			i.Sg(ie.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ie.sm_m ||= {
			proto: ie,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CCommunity_GetClanCrowdInMetadata_Request";
	}
}
class ae extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ae.prototype.crowdin_project_id) {
			i.Sg(ae.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ae.sm_m ||= {
			proto: ae,
			fields: {
				crowdin_project_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				crowdin_directory_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				push_by_default: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CCommunity_GetClanCrowdInMetadata_Response";
	}
}
class se extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!se.prototype.steamid) {
			i.Sg(se.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		se.sm_m ||= {
			proto: se,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				itemid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				language: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(se.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_FetchTranslationFromCrowdIn_Request";
	}
}
class oe extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return oe.toObject(e, this);
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
		return new oe();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new oe();
		return oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCommunity_FetchTranslationFromCrowdIn_Response";
	}
}
export var BE;
(function (e) {
	e.GetApps = function (e, t) {
		return e.SendMsg("Community.GetApps#1", (0, a.I8)(_z, t), c, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	};
	e.GetAppRichPresenceLocalization = function (e, t) {
		return e.SendMsg(
			"Community.GetAppRichPresenceLocalization#1",
			(0, a.I8)(zQ, t),
			u,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetCommentThread = function (e, t) {
		return e.SendMsg("Community.GetCommentThread#1", (0, a.I8)(ZP, t), C, {
			ePrivilege: 2,
		});
	};
	e.PostCommentToThread = function (e, t) {
		return e.SendMsg("Community.PostCommentToThread#1", (0, a.I8)(aw, t), f, {
			ePrivilege: 3,
		});
	};
	e.DeleteCommentFromThread = function (e, t) {
		return e.SendMsg(
			"Community.DeleteCommentFromThread#1",
			(0, a.I8)(s4, t),
			y,
			{
				ePrivilege: 1,
			},
		);
	};
	e.RateCommentThread = function (e, t) {
		return e.SendMsg("Community.RateCommentThread#1", (0, a.I8)(jt, t), w, {
			ePrivilege: 3,
		});
	};
	e.GetCommentThreadRatings = function (e, t) {
		return e.SendMsg(
			"Community.GetCommentThreadRatings#1",
			(0, a.I8)(B, t),
			v,
			{
				ePrivilege: 2,
			},
		);
	};
	e.RateClanAnnouncement = function (e, t) {
		return e.SendMsg("Community.RateClanAnnouncement#1", (0, a.I8)(QU, t), E, {
			ePrivilege: 3,
		});
	};
	e.GetClanAnnouncementVoteForUser = function (e, t) {
		return e.SendMsg(
			"Community.GetClanAnnouncementVoteForUser#1",
			(0, a.I8)($Y, t),
			T,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetAvatarHistory = function (e, t) {
		return e.SendMsg("Community.GetAvatarHistory#1", (0, a.I8)(R, t), k, {
			ePrivilege: 1,
		});
	};
	e.GetClanEventCrowdInMetadata = function (e, t) {
		return e.SendMsg(
			"Community.GetClanEventCrowdInMetadata#1",
			(0, a.I8)(re, t),
			ne,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.GetClanCrowdInMetadata = function (e, t) {
		return e.SendMsg(
			"Community.GetClanCrowdInMetadata#1",
			(0, a.I8)(ie, t),
			ae,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.FetchTranslationFromCrowdIn = function (e, t) {
		return e.SendMsg(
			"Community.FetchTranslationFromCrowdIn#1",
			(0, a.I8)(se, t),
			oe,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetUserPartnerEventNews = function (e, t) {
		return e.SendMsg(
			"Community.GetUserPartnerEventNews#1",
			(0, a.I8)(F, t),
			G,
			{
				bConstMethod: true,
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	};
	e.GetBestEventsForUser = function (e, t) {
		return e.SendMsg("Community.GetBestEventsForUser#1", (0, a.I8)(O, t), L, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	};
	e.MarkPartnerEventsForUser = function (e, t) {
		return e.SendMsg(
			"Community.MarkPartnerEventsForUser#1",
			(0, a.I8)(wS, t),
			J,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetUserPartnerEventViewStatus = function (e, t) {
		return e.SendMsg(
			"Community.GetUserPartnerEventViewStatus#1",
			(0, a.I8)($, t),
			ee,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.PartnerEventsShowMoreForApp = function (e, t) {
		return e.SendMsg(
			"Community.PartnerEventsShowMoreForApp#1",
			(0, a.I8)(bi, t),
			Q,
			{
				ePrivilege: 1,
			},
		);
	};
	e.PartnerEventsShowLessForApp = function (e, t) {
		return e.SendMsg(
			"Community.PartnerEventsShowLessForApp#1",
			(0, a.I8)(H4, t),
			Y,
			{
				ePrivilege: 1,
			},
		);
	};
	e.ClearUserPartnerEventsAppPriorities = function (e, t) {
		return e.SendMsg(
			"Community.ClearUserPartnerEventsAppPriorities#1",
			(0, a.I8)(z, t),
			x,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetUserPartnerEventsAppPriorities = function (e, t) {
		return e.SendMsg(
			"Community.GetUserPartnerEventsAppPriorities#1",
			(0, a.I8)(rm, t),
			V,
			{
				ePrivilege: 1,
			},
		);
	};
	e.ClearSinglePartnerEventsAppPriority = function (e, t) {
		return e.SendMsg(
			"Community.ClearSinglePartnerEventsAppPriority#1",
			(0, a.I8)(rF, t),
			j,
			{
				ePrivilege: 1,
			},
		);
	};
})((BE ||= {}));
