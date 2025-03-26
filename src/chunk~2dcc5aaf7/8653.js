var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./31958.js");
var a = require("./44234.js");
var _s = require(/*webcrack:missing*/ "./12176.js");
var o = require(/*webcrack:missing*/ "./8573.js");
var l = require(/*webcrack:missing*/ "./58663.js");
var c = require(/*webcrack:missing*/ "./48307.js");
const m = l.Message;
class u extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.steamid1) {
			c.Sg(u.M());
		}
		m.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				steamid1: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				steamid2: {
					n: 2,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				count: {
					n: 3,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				most_recent_conversation: {
					n: 4,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				rtime32_start_time: {
					n: 5,
					br: c.qM.readFixed32,
					bw: c.gp.writeFixed32,
				},
				bbcode_format: {
					n: 6,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				start_ordinal: {
					n: 7,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				time_last: {
					n: 8,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				ordinal_last: {
					n: 9,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
			},
		};
		return u.sm_m;
	}
	static MBF() {
		u.sm_mbf ||= c.w0(u.M());
		return u.sm_mbf;
	}
	toObject(e = false) {
		return u.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(u.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(u.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new u();
		return u.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(u.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(u.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFriendMessages_GetRecentMessages_Request";
	}
}
class d extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.messages) {
			c.Sg(d.M());
		}
		m.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				messages: {
					n: 1,
					c: A,
					r: true,
					q: true,
				},
				more_available: {
					n: 4,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
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
		return "CFriendMessages_GetRecentMessages_Response";
	}
}
class A extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.accountid) {
			c.Sg(A.M());
		}
		m.initialize(this, e, 0, -1, [5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				accountid: {
					n: 1,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				timestamp: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				message: {
					n: 3,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				ordinal: {
					n: 4,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				reactions: {
					n: 5,
					c: p,
					r: true,
					q: true,
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
		return "CFriendMessages_GetRecentMessages_Response_FriendMessage";
	}
}
class p extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.reaction_type) {
			c.Sg(p.M());
		}
		m.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				reaction_type: {
					n: 1,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				reaction: {
					n: 2,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				reactors: {
					n: 3,
					r: true,
					q: true,
					br: c.qM.readUint32,
					pbr: c.qM.readPackedUint32,
					bw: c.gp.writeRepeatedUint32,
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
		return "CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction";
	}
}
class g extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.lastmessage_since) {
			c.Sg(g.M());
		}
		m.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				lastmessage_since: {
					n: 1,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				only_sessions_with_messages: {
					n: 2,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
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
		return "CFriendsMessages_GetActiveMessageSessions_Request";
	}
}
class h extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.message_sessions) {
			c.Sg(h.M());
		}
		m.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				message_sessions: {
					n: 1,
					c: C,
					r: true,
					q: true,
				},
				timestamp: {
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
		return "CFriendsMessages_GetActiveMessageSessions_Response";
	}
}
class C extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.accountid_friend) {
			c.Sg(C.M());
		}
		m.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				accountid_friend: {
					n: 1,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				last_message: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				last_view: {
					n: 3,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				unread_message_count: {
					n: 4,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
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
		return "CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession";
	}
}
class _ extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.steamid) {
			c.Sg(_.M());
		}
		m.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				steamid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				chat_entry_type: {
					n: 2,
					br: c.qM.readInt32,
					bw: c.gp.writeInt32,
				},
				message: {
					n: 3,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				contains_bbcode: {
					n: 4,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				echo_to_sender: {
					n: 5,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				low_priority: {
					n: 6,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				client_message_id: {
					n: 8,
					br: c.qM.readString,
					bw: c.gp.writeString,
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
		return "CFriendMessages_SendMessage_Request";
	}
}
class f extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.modified_message) {
			c.Sg(f.M());
		}
		m.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				modified_message: {
					n: 1,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				server_timestamp: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				ordinal: {
					n: 3,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				message_without_bb_code: {
					n: 4,
					br: c.qM.readString,
					bw: c.gp.writeString,
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
		return "CFriendMessages_SendMessage_Response";
	}
}
class _b extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_b.prototype.steamid_friend) {
			c.Sg(_b.M());
		}
		m.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_b.sm_m ||= {
			proto: _b,
			fields: {
				steamid_friend: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				chat_entry_type: {
					n: 2,
					br: c.qM.readInt32,
					bw: c.gp.writeInt32,
				},
				from_limited_account: {
					n: 3,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				message: {
					n: 4,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				rtime32_server_timestamp: {
					n: 5,
					br: c.qM.readFixed32,
					bw: c.gp.writeFixed32,
				},
				ordinal: {
					n: 6,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				local_echo: {
					n: 7,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				message_no_bbcode: {
					n: 8,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				low_priority: {
					n: 9,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
			},
		};
		return _b.sm_m;
	}
	static MBF() {
		_b.sm_mbf ||= c.w0(_b.M());
		return _b.sm_mbf;
	}
	toObject(e = false) {
		return _b.toObject(e, this);
	}
	static toObject(e, t) {
		return c.BT(_b.M(), e, t);
	}
	static fromObject(e) {
		return c.Uq(_b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new l.BinaryReader(e);
		let r = new _b();
		return _b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return c.zj(_b.MBF(), e, t);
	}
	serializeBinary() {
		var e = new l.BinaryWriter();
		_b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		c.i0(_b.M(), e, t);
	}
	serializeBase64String() {
		var e = new l.BinaryWriter();
		_b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFriendMessages_IncomingMessage_Notification";
	}
}
class y extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.steamid_partner) {
			c.Sg(y.M());
		}
		m.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				steamid_partner: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				timestamp: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
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
		return "CFriendMessages_AckMessage_Notification";
	}
}
class S extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.steamid) {
			c.Sg(S.M());
		}
		m.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				steamid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
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
		return "CFriendMessages_IsInFriendsUIBeta_Request";
	}
}
class w extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.online_in_friendsui) {
			c.Sg(w.M());
		}
		m.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				online_in_friendsui: {
					n: 1,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
				},
				has_used_friendsui: {
					n: 2,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
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
		return "CFriendMessages_IsInFriendsUIBeta_Response";
	}
}
class B extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.steamid) {
			c.Sg(B.M());
		}
		m.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				steamid: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				server_timestamp: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				ordinal: {
					n: 3,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				reaction_type: {
					n: 4,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				reaction: {
					n: 5,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				is_add: {
					n: 6,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
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
		return "CFriendMessages_UpdateMessageReaction_Request";
	}
}
class v extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.reactors) {
			c.Sg(v.M());
		}
		m.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				reactors: {
					n: 1,
					r: true,
					q: true,
					br: c.qM.readUint32,
					pbr: c.qM.readPackedUint32,
					bw: c.gp.writeRepeatedUint32,
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
		return "CFriendMessages_UpdateMessageReaction_Response";
	}
}
class I extends m {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.steamid_friend) {
			c.Sg(I.M());
		}
		m.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				steamid_friend: {
					n: 1,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				server_timestamp: {
					n: 2,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				ordinal: {
					n: 3,
					br: c.qM.readUint32,
					bw: c.gp.writeUint32,
				},
				reactor: {
					n: 4,
					br: c.qM.readFixed64String,
					bw: c.gp.writeFixed64String,
				},
				reaction_type: {
					n: 5,
					br: c.qM.readEnum,
					bw: c.gp.writeEnum,
				},
				reaction: {
					n: 6,
					br: c.qM.readString,
					bw: c.gp.writeString,
				},
				is_add: {
					n: 7,
					br: c.qM.readBool,
					bw: c.gp.writeBool,
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
		return "CFriendMessages_MessageReaction_Notification";
	}
}
var E;
var M;
(function (e) {
	e.GetRecentMessages = function (e, t) {
		return e.SendMsg(
			"FriendMessages.GetRecentMessages#1",
			(0, _s.I8)(u, t),
			d,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.GetActiveMessageSessions = function (e, t) {
		return e.SendMsg(
			"FriendMessages.GetActiveMessageSessions#1",
			(0, _s.I8)(g, t),
			h,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.SendMessage = function (e, t) {
		return e.SendMsg("FriendMessages.SendMessage#1", (0, _s.I8)(_, t), f, {
			ePrivilege: 1,
		});
	};
	e.AckMessage = function (e, t) {
		return e.SendNotification("FriendMessages.AckMessage#1", (0, _s.I8)(y, t), {
			ePrivilege: 1,
		});
	};
	e.IsInFriendsUIBeta = function (e, t) {
		return e.SendMsg(
			"FriendMessages.IsInFriendsUIBeta#1",
			(0, _s.I8)(S, t),
			w,
			{
				ePrivilege: 1,
			},
		);
	};
	e.UpdateMessageReaction = function (e, t) {
		return e.SendMsg(
			"FriendMessages.UpdateMessageReaction#1",
			(0, _s.I8)(B, t),
			v,
			{
				ePrivilege: 1,
			},
		);
	};
})((E ||= {}));
(function (e) {
	e.IncomingMessageHandler = {
		name: "FriendMessagesClient.IncomingMessage#1",
		request: _b,
	};
	e.NotifyAckMessageEchoHandler = {
		name: "FriendMessagesClient.NotifyAckMessageEcho#1",
		request: y,
	};
	e.MessageReactionHandler = {
		name: "FriendMessagesClient.MessageReaction#1",
		request: I,
	};
})((M ||= {}));
var T = require("./96127.js");
var R = require("./95773.js");
var k = require(/*webcrack:missing*/ "./89193.js");
import { Localize } from "../../actual_src/utils/localization.js";
var N = require("./16761.js");
require("./80663.js");
var F = require("./89459.js");
var G = require(/*webcrack:missing*/ "./52451.js");
var O = require(/*webcrack:missing*/ "./81255.js");
import { Seconds } from "../../actual_src/utils/time.js";
var L = require(/*webcrack:missing*/ "./83599.js");
var z = require("./60857.js");
const x = new L.wd("Chat");
const U = "FriendRecentChats";
export class b {
	m_ChatStore;
	m_rgFriendChats = [];
	m_bReceivedFriendChats = false;
	m_rtLastSessionUpdate = 0;
	m_mapLastChatTimeByFriend = k.sH.map();
	m_mapRecentIgnoreTimeBeforeByFriend = k.sH.map();
	m_LastMessageCache = a.TS.IN_MOBILE ? new H() : new j();
	constructor(e) {
		(0, k.Gn)(this);
		this.m_ChatStore = e;
	}
	Init() {
		this.m_LastMessageCache.Init();
		this.m_ChatStore.CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			M.IncomingMessageHandler,
			(e) => {
				let t = new o.b(e.Body().steamid_friend());
				let r = R.xm.FriendStore.GetPlayerIfCached(t.GetAccountID());
				if (!r) {
					if (e.Body().low_priority()) {
						return 41;
					}
					r = R.xm.FriendStore.GetPlayer(t.GetAccountID());
				}
				if (e.Body().chat_entry_type() == 1) {
					let n = e.Body().local_echo();
					let i = r.is_blocked || (e.Body().low_priority() && !r.is_friend);
					let s = n ? this.m_ChatStore.FriendStore.self.persona.m_steamid : t;
					let o = this.GetFriendChat(t.GetAccountID(), !i);
					if (
						!i &&
						!n &&
						!R.xm.FriendStore.BIsInvisibleMode() &&
						!R.xm.FriendStore.GetUserDoNotDisturb() &&
						R.xm.BShowIncomingChatMessages() &&
						!a.TS.IN_MOBILE
					) {
						R.xm.UIStore.ShowAndOrActivateChat(
							R.xm.GetDefaultBrowserContext(),
							o,
							false,
						);
					}
					if (o) {
						let t = o.GetVisibilityState();
						if (!r.is_friend && t == 0) {
							o.SetShowNonFriendWarning(true);
						}
						if (n || !r.is_blocked) {
							o.AddNewChatMsgAndNotify(
								s.GetAccountID(),
								e.Body().rtime32_server_timestamp(),
								e.Body().ordinal(),
								e.Body().message(),
								e.Body().message_no_bbcode(),
							);
							let t = this.m_ChatStore.TextFilterStore;
							if (!n && !t.BShownFilterTip() && t.BHasFilter()) {
								let r = e.Body().message();
								if (t.FilterText(s.GetAccountID(), r) !== r) {
									o.AddLocalMsg(
										s.GetAccountID(),
										e.Body().rtime32_server_timestamp(),
										(0, Localize)(
											"#Chat_TextFilter_Active",
											this.m_ChatStore.GetTextFilterSettingsURL(),
										),
									);
									t.SetFilterTipShown(true);
								}
							}
						} else {
							o.AppendChatMsg(
								s.GetAccountID(),
								e.Body().rtime32_server_timestamp(),
								e.Body().ordinal(),
								e.Body().message(),
							);
						}
					}
					this.m_mapLastChatTimeByFriend.set(
						t.GetAccountID(),
						e.Body().rtime32_server_timestamp(),
					);
				} else if (
					e.Body().chat_entry_type() == 2 &&
					!e.Body().local_echo() &&
					!r.is_blocked
				) {
					let e = this.GetFriendChat(t.GetAccountID(), false);
					if (e) {
						e.OnFriendTypingNotification();
					}
				}
				return 1;
			},
		);
		this.m_ChatStore.CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			M.NotifyAckMessageEchoHandler,
			(e) => {
				let t = new o.b(e.Body().steamid_partner());
				let r = this.GetFriendChat(t.GetAccountID());
				if (r) {
					r.UpdateLastAckTimeFromServer(e.Body().timestamp());
				}
				return 1;
			},
		);
		this.m_ChatStore.CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			M.MessageReactionHandler,
			(e) => {
				const t = new o.b(e.Body().steamid_friend());
				const r = this.GetFriendChat(t.GetAccountID());
				if (r) {
					const t = r.chat_messages.find(
						(t) =>
							t.rtTimestamp === e.Body().server_timestamp() &&
							t.unOrdinal === e.Body().ordinal(),
					);
					if (t) {
						const { is_add: r, reactor: n, reaction: i } = e.Body().toObject();
						const a = t.reactions.find((e) => e.strReaction === i);
						const s = r ? 1 : -1;
						if (s === -1 && !a) {
							x.Error(
								"Got reaction removal notification but no matching reaction was found",
							);
							return 1;
						}
						let o = !!a && a.bUserReacted;
						if (n === R.xm.FriendStore.self.steamid64) {
							o = r;
						}
						t.UpdateReaction(
							e.Body().reaction_type(),
							e.Body().reaction(),
							a ? a.cReactors + s : s,
							o,
						);
					}
				}
				return 1;
			},
		);
	}
	GetFriendChat(e, t = true) {
		for (let t of this.m_rgFriendChats) {
			if (t.accountid_partner == e) {
				return t;
			}
		}
		if (!t) {
			return null;
		}
		let r = new s(e, this.m_ChatStore, this.m_ChatStore.CMInterface);
		this.m_rgFriendChats.push(r);
		return r;
	}
	OnLogon() {
		this.LoadFriendMessageSessions();
		R.xm.SettingsStore.GetObjectFromLocalStorageWhenReady(U).then((e) => {
			this.m_mapRecentIgnoreTimeBeforeByFriend.clear();
			for (let t in e.ignoretimes) {
				let r = parseInt(t, 10);
				this.m_mapRecentIgnoreTimeBeforeByFriend.set(r, e.ignoretimes[t]);
			}
		});
	}
	RestoreStatePostDisconnect(e) {
		if (e) {
			this.LoadFriendMessageSessions();
		}
		for (let e of this.m_rgFriendChats) {
			e.OnConnectionRestored();
		}
	}
	GetServiceTransport() {
		return this.m_ChatStore.CMInterface.GetServiceTransport();
	}
	LoadFriendMessageSessions() {
		let e = _s.w.Init(g);
		e.Body().set_lastmessage_since(this.m_rtLastSessionUpdate);
		e.Body().set_only_sessions_with_messages(true);
		E.GetActiveMessageSessions(this.GetServiceTransport(), e).then((e) => {
			this.m_rtLastSessionUpdate = e.Body().timestamp();
			for (let t of e.Body().message_sessions()) {
				this.m_mapLastChatTimeByFriend.set(
					t.accountid_friend(),
					t.last_message(),
				);
				this.GetFriendChat(t.accountid_friend()).InitMessageSessionFromServer(
					t.unread_message_count(),
					t.last_view(),
					t.last_message(),
				);
			}
			R.xm.FriendStore.UpdateUnreadMessagesGlobal();
			this.m_bReceivedFriendChats = true;
		});
	}
	GetFriendChatsByLastChatTime() {
		const e = [];
		this.m_mapLastChatTimeByFriend.forEach((t, r) => {
			e.push([t, this.GetFriendChat(r)]);
		});
		return e.sort(([e], [t]) => t - e).map(([e, t]) => t);
	}
	GetFriendsWithUnreadMessages(e) {
		let t = [];
		for (let r of this.m_rgFriendChats) {
			if (
				r.unread_message_count > 0 &&
				(!e || r.GetVisibilityState(e) < 2) &&
				!r.is_blocked_friend
			) {
				t.push(r);
			}
		}
		t.sort((e, t) => e.time_last_message - t.time_last_message);
		return t;
	}
	BIsFriendChatRecent(e) {
		const t = R.xm.GetServerRTime32() - this.RecentChatCutoffDuration;
		const r = this.m_mapLastChatTimeByFriend.get(e);
		if (!r) {
			return false;
		}
		if (r >= t) {
			let t = this.m_mapRecentIgnoreTimeBeforeByFriend.get(e);
			if (!t || t < r) {
				return true;
			}
		}
		return false;
	}
	GetFriendChatsWithRecentMessages() {
		return this.m_rgFriendChats.filter((e) =>
			this.BIsFriendChatRecent(e.accountid_partner),
		);
	}
	GetUnfilteredFriendsWithUnreadMessages() {
		let e = [];
		for (let t of this.m_rgFriendChats) {
			if (t.unread_message_count > 0 && !t.is_blocked_friend) {
				e.push(t);
			}
		}
		e.sort((e, t) => e.time_last_message - t.time_last_message);
		return e;
	}
	GetAllChats() {
		return this.m_rgFriendChats.slice();
	}
	get RecentChatCutoffDuration() {
		return 3600;
	}
	get LastMessageCache() {
		return this.m_LastMessageCache;
	}
	ClearRecentChatsForFriend(e) {
		this.m_mapRecentIgnoreTimeBeforeByFriend.set(e, R.xm.GetServerRTime32());
		this.WriteRecentChatsPrefs();
	}
	WriteRecentChatsPrefs() {
		let e = R.xm.GetServerRTime32() - this.RecentChatCutoffDuration;
		this.m_mapRecentIgnoreTimeBeforeByFriend.forEach((t, r) => {
			if (t < e) {
				this.m_mapRecentIgnoreTimeBeforeByFriend.delete(r);
			}
		});
		R.xm.SettingsStore.StoreObjectInLocalStorage(U, {
			ignoretimes: new Map(this.m_mapRecentIgnoreTimeBeforeByFriend),
		});
	}
	get GetRecentlyChattingFriends() {
		let e = [];
		this.m_mapLastChatTimeByFriend.forEach((t, r) => {
			if (this.BIsFriendChatRecent(r)) {
				let t = R.xm.FriendStore.GetFriend(r);
				if (t) {
					e.push(t);
				}
			}
		});
		e.sort(T.$c.DefaultFriendSortComparator);
		return e;
	}
	GetUnreadFriendMessageCount(e) {
		let t = 0;
		for (let r of this.m_rgFriendChats) {
			if (
				r.unread_message_count > 0 &&
				(!e || r.GetVisibilityState(e) < 2) &&
				!r.is_blocked_friend
			) {
				t += r.unread_message_count;
			}
		}
		return t;
	}
	GetFriendLastChatTime(e) {
		return this.m_mapLastChatTimeByFriend.get(e) || 0;
	}
	AddFriendPushNotificationData(e, t) {
		let r = new o.b(e.steamid_friend()).GetAccountID();
		if (e.chat_entry_type() == 1) {
			let t = e.local_echo()
				? this.m_ChatStore.FriendStore.self.persona.m_steamid.GetAccountID()
				: r;
			let n = this.GetFriendChat(r, false);
			if (!n) {
				return;
			}
			if (e.local_echo() && n.HasClientMessageInFlight(e.client_message_id())) {
				return;
			}
			if (
				!n.HasChatMessage(
					e.previous_message_timestamp(),
					e.previous_message_ordinal(),
				)
			) {
				return;
			}
			n.AppendChatMsg(
				t,
				e.current_message_timestamp(),
				e.current_message_ordinal(),
				e.message(),
			);
			this.m_mapLastChatTimeByFriend.set(r, e.current_message_timestamp());
		}
	}
}
(0, n.Cg)([k.sH], b.prototype, "m_rgFriendChats", undefined);
(0, n.Cg)([k.sH], b.prototype, "m_bReceivedFriendChats", undefined);
(0, n.Cg)([k.XI], b.prototype, "ClearRecentChatsForFriend", null);
(0, n.Cg)([k.EW], b.prototype, "GetRecentlyChattingFriends", null);
export class s extends N.o {
	m_unAccountIDFriend;
	m_iClearFriendIsTypingInterval = undefined;
	m_bFriendIsTyping = false;
	m_tsLastSentTypingNotification;
	m_bNeedsNonFriendWarning = false;
	constructor(e, t, r) {
		super(t.FriendStore, t, r);
		(0, k.Gn)(this);
		this.m_unAccountIDFriend = e;
		this.m_MessageSendQueue = new z.G(e.toString());
		this.m_MessageSendQueue
			.InitFromStorage()
			.then(() => this.InitQueuedMessages());
	}
	GetLastMessage() {
		if (!this.m_strLastMessage && !this.m_bChatLogsLoaded) {
			const e =
				this.m_ChatStore.FriendChatStore.LastMessageCache.GetLastMessage(
					this.m_unAccountIDFriend,
				);
			if (e && this.m_rtLastMessageReceived <= e.rtTime) {
				return e.strMessage;
			}
			this.LoadChatLogs().then(() => {
				const e = this.chat_messages[this.chat_messages.length - 1];
				if (e) {
					this.m_strLastMessage = e.strMessage;
					this.m_accountIDLastMessage = e.unAccountID;
					this.m_rtLastMessageReceived = e.rtTimestamp;
					this.m_ChatStore.FriendChatStore.LastMessageCache.UpdateLastMessage(
						this.m_unAccountIDFriend,
						{
							strMessage: e.strMessage,
							rtTime: e.rtTimestamp,
							unAccountIDSender: e.unAccountID,
						},
					);
				}
			});
			if (e) {
				return e.strMessage;
			}
		}
		return this.m_strLastMessage;
	}
	get time_last_message() {
		if (this.m_rtLastMessageReceived) {
			return this.m_rtLastMessageReceived;
		}
		const e = this.m_ChatStore.FriendChatStore.LastMessageCache.GetLastMessage(
			this.m_unAccountIDFriend,
		);
		if (e) {
			return e.rtTime;
		} else {
			return undefined;
		}
	}
	get accountid_last_message() {
		if (this.m_accountIDLastMessage) {
			return this.m_accountIDLastMessage;
		}
		const e = this.m_ChatStore.FriendChatStore.LastMessageCache.GetLastMessage(
			this.m_unAccountIDFriend,
		);
		if (e) {
			return e.unAccountIDSender;
		} else {
			return undefined;
		}
	}
	get unread_message_count() {
		let e = this.m_ChatStore.VoiceChat.BPartnerHasRequestedAndIsInOneOnOneChat(
			this.m_unAccountIDFriend,
		);
		e = e && !this.BVoiceActive();
		return this.m_cUnreadChatMessages + (e ? 1 : 0);
	}
	get VoiceChatStore() {
		return this.m_ChatStore.VoiceChat;
	}
	SetShowNonFriendWarning(e) {
		this.m_bNeedsNonFriendWarning = e;
	}
	GetShowNonFriendWarning() {
		let e =
			this.m_bNeedsNonFriendWarning &&
			!R.xm.FriendStore.BApprovedNonFriendMessages(this.accountid_partner);
		if (e) {
			let t = R.xm.FriendStore.GetFriend(this.accountid_partner);
			e = !t || !t.is_friend;
		}
		return e;
	}
	GetMessagesFromTimeRange(e, t, r, n, i) {
		let a = _s.w.Init(u);
		a.Body().set_steamid1(this.m_CMInterface.steamid.ConvertTo64BitString());
		a.Body().set_steamid2(
			o.b.InitFromAccountID(this.m_unAccountIDFriend).ConvertTo64BitString(),
		);
		a.Body().set_count(N.o.k_LoadMoreMessageCount);
		a.Body().set_bbcode_format(true);
		a.Body().set_rtime32_start_time(e);
		a.Body().set_start_ordinal(t);
		a.Body().set_time_last(r);
		a.Body().set_ordinal_last(n);
		x.Info(
			`${this.unique_id} friend trying to load ${i} messages in range ${e}:${t} - ${r}:${n}`,
		);
		return E.GetRecentMessages(
			this.m_ChatStore.CMInterface.GetServiceTransport(),
			a,
		).then((e) => {
			let t = e.GetEResult();
			if (t != 1) {
				throw t;
			}
			return {
				messages: this.GetMessagesFromResponse(e),
				moreAvailable: e.Body().more_available(),
			};
		});
	}
	GetMessagesFromResponse(e) {
		let t = e.Body().messages();
		let r = [];
		for (let e = t.length - 1; e >= 0; e--) {
			let n = t[e];
			let i = n.accountid();
			r.push(
				new F.D8(
					i,
					n.timestamp(),
					n.ordinal(),
					n.message() || "",
					n.reactions().map((e) => ({
						eReactionType: e.reaction_type(),
						strReaction: e.reaction(),
						cReactors: e.reactors().length,
						bUserReacted:
							e.reactors().indexOf(R.xm.FriendStore.self.accountid) > -1,
					})),
				),
			);
		}
		return r;
	}
	OnNewChatMsgAdded(e, t, r, n) {}
	GetBBCodeParser() {
		return this.m_ChatStore.FriendChatBBCodeParser;
	}
	AckChatMsgOnServer(e) {
		let t = _s.w.Init(y);
		t.Body().set_steamid_partner(
			o.b.InitFromAccountID(this.accountid_partner).ConvertTo64BitString(),
		);
		t.Body().set_timestamp(e);
		E.AckMessage(this.m_CMInterface.GetServiceTransport(), t);
	}
	CheckShouldNotify(e, t, r) {
		super.CheckShouldNotify(e, t, r);
		this.m_ChatStore.FriendChatStore.LastMessageCache.UpdateLastMessage(
			this.m_unAccountIDFriend,
			{
				rtTime: e.rtTimestamp,
				strMessage: e.strMessage,
				unAccountIDSender: e.unAccountID,
			},
		);
	}
	get name() {
		let e = this.chat_partner;
		if (e) {
			return e.display_name;
		} else {
			return undefined;
		}
	}
	get unique_id() {
		return "f" + this.accountid_partner;
	}
	BIsVoiceAllowed() {
		return (
			!!this.chat_partner.is_friend &&
			this.chat_partner.persona.m_ePersonaState != 0
		);
	}
	GetVoiceNotAllowedReason() {
		if (this.chat_partner.is_friend) {
			if (this.chat_partner.persona.m_ePersonaState == 0) {
				return (0, Localize)(
					"#VoiceChat_Unavailable_NotOnline",
					this.chat_partner.display_name,
				);
			} else {
				return null;
			}
		} else {
			return (0, Localize)(
				"#VoiceChat_Unavailable_NotFriend",
				this.chat_partner.display_name,
			);
		}
	}
	ToggleVoiceChat() {
		if (
			this.ChatStore.VoiceChat.IsVoiceActiveForFriend(this.accountid_partner)
		) {
			this.ChatStore.VoiceChat.OnUserEndVoiceChat();
		} else {
			this.ChatStore.VoiceChat.InitiateFriendChat(this.accountid_partner);
		}
		return true;
	}
	BVoiceActive() {
		return this.ChatStore.VoiceChat.IsVoiceActiveForFriend(
			this.accountid_partner,
		);
	}
	get is_blocked_friend() {
		return this.chat_partner.is_blocked;
	}
	async SendChatMessageInternal(e) {
		if (!this.chat_partner.is_friend) {
			R.xm.FriendStore.SetApprovedNonFriendMessages(
				this.chat_partner.accountid,
			);
		}
		let t = this.AppendLocalEchoChatMsg(e);
		this.m_strLastMessage = e;
		let r = _s.w.Init(_);
		r.Body().set_chat_entry_type(1);
		r.Body().set_message(e);
		r.Body().set_steamid(
			o.b.InitFromAccountID(this.accountid_partner).ConvertTo64BitString(),
		);
		r.Body().set_contains_bbcode(true);
		let n = (function () {
			let e = "";
			for (let t = 0; t < 16; t++) {
				e += i.Tg(0, 15).toString(16);
			}
			return e;
		})();
		r.Body().set_client_message_id(n);
		this.m_setInflightClientMessageID.add(n);
		this.m_tsLastSentTypingNotification = undefined;
		const a = await this.SendWithRetries(t, () =>
			E.SendMessage(this.m_CMInterface.GetServiceTransport(), r),
		);
		this.m_setInflightClientMessageID.delete(n);
		if (a === F.Bm.None) {
			this.m_ChatStore.FriendChatStore.LastMessageCache.UpdateLastMessage(
				this.m_unAccountIDFriend,
				{
					rtTime: t.rtTimestamp,
					unAccountIDSender: this.self.accountid,
					strMessage: t.strMessage,
				},
			);
		}
		return a;
	}
	async UpdateMessageReaction(e, t, r, n) {
		const i = _s.w.Init(B);
		i.Body().set_steamid(
			o.b.InitFromAccountID(this.accountid_partner).ConvertTo64BitString(),
		);
		i.Body().set_reaction_type(t);
		i.Body().set_reaction(r);
		i.Body().set_is_add(n);
		i.Body().set_server_timestamp(e.rtTimestamp);
		i.Body().set_ordinal(e.unOrdinal);
		const a = e.reactions.find((e) => r === e.strReaction);
		const l = n ? 1 : -1;
		const c = a ? a.cReactors + l : l;
		e.UpdateReaction(t, r, c, n);
		const m = await E.UpdateMessageReaction(
			this.m_CMInterface.GetServiceTransport(),
			i,
		);
		if (m.GetEResult() !== 1) {
			e.UpdateReaction(t, r, c - l, !n);
			x.Warning(`Error updating message reaction. EResult: ${m.GetEResult()}`);
		} else if (n && m.Body().reactors().length === 1) {
			if (t === 1) {
				this.m_ChatStore.EmoticonStore.TrackEmoticonUsage(r, Date.now() / 1000);
			} else if (t === 2) {
				this.m_ChatStore.EmoticonStore.TrackStickerUsage(r, Date.now() / 1000);
			}
		}
		return m.GetEResult();
	}
	GetMessageReactionReactors(e, t, r) {
		const n = [];
		if (t.bUserReacted) {
			n.push(R.xm.FriendStore.self.accountid);
		}
		if (t.cReactors > n.length) {
			n.push(this.chat_partner.accountid);
		}
		return n.slice(0, r);
	}
	OnTyping() {
		if (
			!this.m_tsLastSentTypingNotification ||
			performance.now() - this.m_tsLastSentTypingNotification > 10000
		) {
			this.m_tsLastSentTypingNotification = performance.now();
			let e = _s.w.Init(_);
			e.Body().set_chat_entry_type(2);
			e.Body().set_steamid(
				o.b.InitFromAccountID(this.accountid_partner).ConvertTo64BitString(),
			);
			E.SendMessage(this.m_CMInterface.GetServiceTransport(), e);
		}
	}
	get is_friend_typing() {
		return this.m_bFriendIsTyping;
	}
	OnFriendTypingNotification() {
		this.m_bFriendIsTyping ||= true;
		if (this.m_iClearFriendIsTypingInterval !== undefined) {
			window.clearInterval(this.m_iClearFriendIsTypingInterval);
		}
		this.m_iClearFriendIsTypingInterval = window.setTimeout(() => {
			this.m_iClearFriendIsTypingInterval = undefined;
			this.ClearFriendIsTypingState();
		}, 11000);
	}
	PlayFriendMessageSound() {
		if (!R.xm.FriendStore.GetUserDoNotDisturb()) {
			R.xm.AudioPlaybackManager.PlayAudioURL(
				a.TS.COMMUNITY_CDN_URL +
					"public/sounds/webui/ui_steam_message_old_smooth.m4a",
			);
		}
	}
	OnReceivedNewMessage(e, t, r, n) {
		if (!e.BIsLocalEcho() && e.unAccountID != this.self.accountid) {
			this.ClearFriendIsTypingState();
			if (t < 2 && this.is_blocked_friend) {
				return;
			}
			if (
				R.xm.NotificationManager.BNotificationsPermitted() &&
				this.chat_partner.BShowMessageNotification() &&
				t < 4 &&
				!R.xm.FriendStore.GetUserDoNotDisturb()
			) {
				let t = {
					title: this.chat_partner.display_name,
					body: r,
					tag: "message_" + this.chat_partner.accountid,
					steamid: this.chat_partner.persona.m_steamid.ConvertTo64BitString(),
				};
				t = this.DecorateNotification(e, t, r, n);
				t.body = this.m_ChatStore.TextFilterStore.FilterText(
					e.unAccountID,
					t.body,
				);
				if (t.body) {
					if (
						this.GetShowNonFriendWarning() &&
						R.xm.SettingsStore.BClientHasFeatureOrOnWeb(
							"NonFriendMessageHandling",
						)
					) {
						t.body = "";
					}
					R.xm.NotificationManager.DisplayNotificationFromFriend(
						this.chat_partner,
						t,
					);
					if (!this.m_bHasUnreadPriorityChatMessages) {
						this.m_bHasUnreadPriorityChatMessages = true;
						R.xm.FriendStore.UpdateUnreadMessagesGlobal();
					}
				}
			}
			if (this.chat_partner.BPlayMessageSound() && t < 4) {
				this.PlayFriendMessageSound();
			}
			if (t < 4 && !R.xm.FriendStore.GetUserDoNotDisturb()) {
				const e = R.xm.SettingsStore.FriendsSettings.nChatFlashMode;
				let t = Promise.resolve(e == 0);
				if (e == 1) {
					t = R.xm.UIStore.IsChatWindowMinimized(this);
				}
				t.then((e) => {
					if (e) {
						R.xm.UIStore.FlashChatWindow(this, true);
					}
				});
			}
		}
	}
	ClearFriendIsTypingState() {
		if (this.m_iClearFriendIsTypingInterval !== undefined) {
			window.clearInterval(this.m_iClearFriendIsTypingInterval);
			this.m_iClearFriendIsTypingInterval = undefined;
		}
		this.m_bFriendIsTyping = false;
	}
	PopulateCommitFileUploadFormData(e, t, r) {
		e.append(
			"friend_steamid",
			o.b.InitFromAccountID(this.accountid_partner).ConvertTo64BitString(),
		);
		e.append("spoiler", t.bSpoiler ? "1" : "0");
		if (r.unAssociatedAppID) {
			e.append("associated_appid", r.unAssociatedAppID.toString());
		}
	}
	GetMember(e) {
		if (e == this.m_unAccountIDFriend) {
			return this.chat_partner;
		} else if (e == this.self.accountid) {
			return this.self;
		} else {
			return undefined;
		}
	}
	get accountid_partner() {
		return this.m_unAccountIDFriend;
	}
	get chat_partner() {
		return R.xm.FriendStore.GetPlayer(this.m_unAccountIDFriend);
	}
	ViewerNeedsApproval(e) {
		let t = `[broadcastviewrequest requestid="${e}"][/broadcastviewrequest]`;
		this.InternalAppendChatMsg(
			new F.D8(this.chat_partner.accountid, R.xm.GetServerRTime32(), 0, t),
		);
		if (!R.xm.FriendStore.GetUserDoNotDisturb()) {
			R.xm.NotificationManager.DisplayNotificationFromFriend(
				this.chat_partner,
				{
					title: "",
					body: (0, Localize)("#Chat_BroadcastViewRequest_Notification"),
					tag: "message_" + this.chat_partner.accountid,
					steamid: this.chat_partner.persona.m_steamid.ConvertTo64BitString(),
				},
			);
		}
	}
}
(0, n.Cg)([k.sH], s.prototype, "m_bFriendIsTyping", undefined);
(0, n.Cg)([k.sH], s.prototype, "m_bNeedsNonFriendWarning", undefined);
(0, n.Cg)([k.XI], s.prototype, "ToggleVoiceChat", null);
(0, n.Cg)([G.oI, (0, O.s)(100)], s.prototype, "PlayFriendMessageSound", null);
(0, n.Cg)([k.XI], s.prototype, "ClearFriendIsTypingState", null);
(0, n.Cg)([k.XI], s.prototype, "ViewerNeedsApproval", null);
class H {
	static StorageKey = "FriendLastMessageCache";
	m_cache = k.sH.map();
	async Init() {
		try {
			const e = await R.xm.Storage.GetObject(H.StorageKey);
			if (this.Validate(e)) {
				this.m_cache.replace(e);
				this.TrimCache();
			} else {
				this.ClearCache();
			}
		} catch (e) {
			x.Error(
				`There was a problem loading recent friend messages from storage: ${e}`,
			);
			this.ClearCache();
		}
	}
	Validate(e) {
		if (typeof e != "object" || !e) {
			return false;
		}
		for (const t in e) {
			if (isNaN(parseInt(t))) {
				return false;
			}
			const r = e[t];
			if (typeof r != "object") {
				return false;
			}
			if (
				(typeof r.strMessage != "string" && r.strMessage !== null) ||
				typeof r.rtTime != "number" ||
				typeof r.unAccountIDSender != "number"
			) {
				return false;
			}
		}
		return true;
	}
	ClearCache() {
		this.m_cache.clear();
		this.SerializeToStorage();
	}
	SerializeToStorage() {
		return R.xm.Storage.StoreObject(
			H.StorageKey,
			Object.fromEntries(this.m_cache),
		);
	}
	GetLastMessage(e) {
		return this.m_cache.get(e.toString());
	}
	UpdateLastMessage(e, t) {
		this.m_cache.set(e.toString(), t);
		return this.SerializeToStorage();
	}
	TrimCache() {
		const e = Date.now() / 1000;
		this.m_cache.forEach(({ rtTime: t }, r) => {
			if (t < e - Seconds.PerYear / 2) {
				this.m_cache.delete(r);
			}
		});
		this.SerializeToStorage();
	}
}
class j {
	async Init() {}
	GetLastMessage() {}
	async UpdateLastMessage() {}
}
