var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require(/*webcrack:missing*/ "./82755.js");
const o = n.Message;
export function f5(e) {
	return "unknown EChatRoomMemberStateChange ( " + e + " )";
}
export class ky extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ky.toObject(e, this);
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
		return new ky();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ky();
		return ky.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ky.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ky.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChat_RequestFriendPersonaStates_Request";
	}
}
class m extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return m.toObject(e, this);
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
		return new m();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new m();
		return m.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChat_RequestFriendPersonaStates_Response";
	}
}
class u extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.message) {
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
				message: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				string_param: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				accountid_param: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "ServerMessage";
	}
}
export class SZ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!SZ.prototype.steamid_partner) {
			i.Sg(SZ.M());
		}
		o.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		SZ.sm_m ||= {
			proto: SZ,
			fields: {
				steamid_partner: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				steamid_invited: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid_invitees: {
					n: 4,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
				},
				watching_broadcast_accountid: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				watching_broadcast_channel_id: {
					n: 7,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return SZ.sm_m;
	}
	static MBF() {
		SZ.sm_mbf ||= i.w0(SZ.M());
		return SZ.sm_mbf;
	}
	toObject(e = false) {
		return SZ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(SZ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(SZ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new SZ();
		return SZ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(SZ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		SZ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(SZ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		SZ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_CreateChatRoomGroup_Request";
	}
}
class A extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.chat_group_id) {
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
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				state: {
					n: 2,
					c: P,
				},
				user_chat_state: {
					n: 3,
					c: Dj,
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
		return "CChatRoom_CreateChatRoomGroup_Response";
	}
}
export class yw extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!yw.prototype.chat_group_id) {
			i.Sg(yw.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		yw.sm_m ||= {
			proto: yw,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return yw.sm_m;
	}
	static MBF() {
		yw.sm_mbf ||= i.w0(yw.M());
		return yw.sm_mbf;
	}
	toObject(e = false) {
		return yw.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(yw.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(yw.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new yw();
		return yw.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(yw.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		yw.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(yw.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		yw.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_RenameChatRoomGroup_Request";
	}
}
class g extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.name) {
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
				name: {
					n: 1,
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
		return "CChatRoom_RenameChatRoomGroup_Response";
	}
}
export class Nc extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Nc.prototype.chat_group_id) {
			i.Sg(Nc.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Nc.sm_m ||= {
			proto: Nc,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Nc.sm_m;
	}
	static MBF() {
		Nc.sm_mbf ||= i.w0(Nc.M());
		return Nc.sm_mbf;
	}
	toObject(e = false) {
		return Nc.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Nc.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Nc.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Nc();
		return Nc.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Nc.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Nc.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Nc.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Nc.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SaveChatRoomGroup_Request";
	}
}
class C extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SaveChatRoomGroup_Response";
	}
}
export class GQ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!GQ.prototype.chat_group_id) {
			i.Sg(GQ.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		GQ.sm_m ||= {
			proto: GQ,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				tagline: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return GQ.sm_m;
	}
	static MBF() {
		GQ.sm_mbf ||= i.w0(GQ.M());
		return GQ.sm_mbf;
	}
	toObject(e = false) {
		return GQ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(GQ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(GQ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new GQ();
		return GQ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(GQ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		GQ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(GQ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		GQ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetChatRoomGroupTagline_Request";
	}
}
class f extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetChatRoomGroupTagline_Response";
	}
}
export class mV extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!mV.prototype.chat_group_id) {
			i.Sg(mV.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		mV.sm_m ||= {
			proto: mV,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				avatar_sha: {
					n: 2,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
			},
		};
		return mV.sm_m;
	}
	static MBF() {
		mV.sm_mbf ||= i.w0(mV.M());
		return mV.sm_mbf;
	}
	toObject(e = false) {
		return mV.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(mV.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(mV.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new mV();
		return mV.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(mV.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		mV.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(mV.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		mV.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetChatRoomGroupAvatar_Request";
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
		return "CChatRoom_SetChatRoomGroupAvatar_Response";
	}
}
export class O1 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O1.prototype.chat_group_id) {
			i.Sg(O1.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O1.sm_m ||= {
			proto: O1,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				watching_broadcast_accountid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				watching_broadcast_channel_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return O1.sm_m;
	}
	static MBF() {
		O1.sm_mbf ||= i.w0(O1.M());
		return O1.sm_mbf;
	}
	toObject(e = false) {
		return O1.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(O1.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(O1.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new O1();
		return O1.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(O1.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		O1.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(O1.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		O1.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetChatRoomGroupWatchingBroadcast_Request";
	}
}
class w extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetChatRoomGroupWatchingBroadcast_Response";
	}
}
class B extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.chat_group_id) {
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
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
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
		return "CChatRoom_JoinMiniGameForChatRoomGroup_Request";
	}
}
class v extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.minigame_id) {
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
				minigame_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CChatRoom_JoinMiniGameForChatRoomGroup_Response";
	}
}
class I extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.chat_group_id) {
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
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				minigame_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CChatRoom_EndMiniGameForChatRoomGroup_Request";
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
		return "CChatRoom_EndMiniGameForChatRoomGroup_Response";
	}
}
export class qw extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qw.prototype.chat_group_id) {
			i.Sg(qw.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qw.sm_m ||= {
			proto: qw,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				expiration: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return qw.sm_m;
	}
	static MBF() {
		qw.sm_mbf ||= i.w0(qw.M());
		return qw.sm_mbf;
	}
	toObject(e = false) {
		return qw.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qw.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qw.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qw();
		return qw.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qw.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		qw.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qw.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		qw.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_MuteUser_Request";
	}
}
class T extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return T.toObject(e, this);
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
		return new T();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new T();
		return T.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_MuteUser_Response";
	}
}
export class fC extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!fC.prototype.chat_group_id) {
			i.Sg(fC.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		fC.sm_m ||= {
			proto: fC,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				expiration: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return fC.sm_m;
	}
	static MBF() {
		fC.sm_mbf ||= i.w0(fC.M());
		return fC.sm_mbf;
	}
	toObject(e = false) {
		return fC.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(fC.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(fC.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new fC();
		return fC.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(fC.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		fC.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(fC.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		fC.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_KickUser_Request";
	}
}
class k extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_KickUser_Response";
	}
}
export class xZ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!xZ.prototype.chat_group_id) {
			i.Sg(xZ.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		xZ.sm_m ||= {
			proto: xZ,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				ban_state: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return xZ.sm_m;
	}
	static MBF() {
		xZ.sm_mbf ||= i.w0(xZ.M());
		return xZ.sm_mbf;
	}
	toObject(e = false) {
		return xZ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(xZ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(xZ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new xZ();
		return xZ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(xZ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		xZ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(xZ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		xZ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetUserBanState_Request";
	}
}
class N extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return N.toObject(e, this);
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
		return new N();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new N();
		return N.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetUserBanState_Response";
	}
}
export class HR extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!HR.prototype.chat_group_id) {
			i.Sg(HR.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		HR.sm_m ||= {
			proto: HR,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return HR.sm_m;
	}
	static MBF() {
		HR.sm_mbf ||= i.w0(HR.M());
		return HR.sm_mbf;
	}
	toObject(e = false) {
		return HR.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(HR.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(HR.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new HR();
		return HR.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(HR.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		HR.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(HR.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		HR.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_RevokeInvite_Request";
	}
}
class G extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_RevokeInvite_Response";
	}
}
class O extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.role_id) {
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
				role_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				ordinal: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CChatRole";
	}
}
export class JN extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!JN.prototype.role_id) {
			i.Sg(JN.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		JN.sm_m ||= {
			proto: JN,
			fields: {
				role_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				can_create_rename_delete_channel: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_kick: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_ban: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_invite: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_change_tagline_avatar_name: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_chat: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_view_history: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_change_group_roles: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_change_user_roles: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_mention_all: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_set_watching_broadcast: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return JN.sm_m;
	}
	static MBF() {
		JN.sm_mbf ||= i.w0(JN.M());
		return JN.sm_mbf;
	}
	toObject(e = false) {
		return JN.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(JN.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(JN.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new JN();
		return JN.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(JN.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		JN.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(JN.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		JN.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoleActions";
	}
}
export class uD extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!uD.prototype.chat_group_id) {
			i.Sg(uD.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		uD.sm_m ||= {
			proto: uD,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return uD.sm_m;
	}
	static MBF() {
		uD.sm_mbf ||= i.w0(uD.M());
		return uD.sm_mbf;
	}
	toObject(e = false) {
		return uD.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(uD.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(uD.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new uD();
		return uD.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(uD.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		uD.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(uD.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		uD.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_CreateRole_Request";
	}
}
class _z extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_z.prototype.actions) {
			i.Sg(_z.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_z.sm_m ||= {
			proto: _z,
			fields: {
				actions: {
					n: 2,
					c: JN,
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
		return "CChatRoom_CreateRole_Response";
	}
}
class x extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.app_id) {
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
				app_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steamid_owner: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				beacon_id: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				game_metadata: {
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
		return "CChatPartyBeacon";
	}
}
class U extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.chat_group_id) {
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
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CChatRoom_GetRoles_Request";
	}
}
class W extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W.prototype.roles) {
			i.Sg(W.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W.sm_m ||= {
			proto: W,
			fields: {
				roles: {
					n: 1,
					c: O,
					r: true,
					q: true,
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
		return "CChatRoom_GetRoles_Response";
	}
}
export class Ud extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ud.prototype.chat_group_id) {
			i.Sg(Ud.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ud.sm_m ||= {
			proto: Ud,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				role_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Ud.sm_m;
	}
	static MBF() {
		Ud.sm_mbf ||= i.w0(Ud.M());
		return Ud.sm_mbf;
	}
	toObject(e = false) {
		return Ud.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ud.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ud.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ud();
		return Ud.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ud.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ud.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ud.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ud.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_RenameRole_Request";
	}
}
class H extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return H.toObject(e, this);
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
		return new H();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new H();
		return H.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_RenameRole_Response";
	}
}
export class Tv extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Tv.prototype.chat_group_id) {
			i.Sg(Tv.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Tv.sm_m ||= {
			proto: Tv,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				role_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				ordinal: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Tv.sm_m;
	}
	static MBF() {
		Tv.sm_mbf ||= i.w0(Tv.M());
		return Tv.sm_mbf;
	}
	toObject(e = false) {
		return Tv.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Tv.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Tv.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Tv();
		return Tv.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Tv.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Tv.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Tv.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Tv.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_ReorderRole_Request";
	}
}
class q extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return q.toObject(e, this);
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
		return new q();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new q();
		return q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_ReorderRole_Response";
	}
}
export class lG extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!lG.prototype.chat_group_id) {
			i.Sg(lG.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		lG.sm_m ||= {
			proto: lG,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				role_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return lG.sm_m;
	}
	static MBF() {
		lG.sm_mbf ||= i.w0(lG.M());
		return lG.sm_mbf;
	}
	toObject(e = false) {
		return lG.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(lG.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(lG.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new lG();
		return lG.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(lG.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		lG.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(lG.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		lG.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_DeleteRole_Request";
	}
}
class Z extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new Z();
		return Z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_DeleteRole_Response";
	}
}
class Y extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.chat_group_id) {
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
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				role_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CChatRoom_GetRoleActions_Request";
	}
}
class K extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K.prototype.actions) {
			i.Sg(K.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		K.sm_m ||= {
			proto: K,
			fields: {
				actions: {
					n: 1,
					c: JN,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(K.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetRoleActions_Response";
	}
}
export class Lp extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Lp.prototype.chat_group_id) {
			i.Sg(Lp.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Lp.sm_m ||= {
			proto: Lp,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				role_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				actions: {
					n: 4,
					c: JN,
				},
			},
		};
		return Lp.sm_m;
	}
	static MBF() {
		Lp.sm_mbf ||= i.w0(Lp.M());
		return Lp.sm_mbf;
	}
	toObject(e = false) {
		return Lp.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Lp.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Lp.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Lp();
		return Lp.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Lp.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Lp.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Lp.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Lp.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_ReplaceRoleActions_Request";
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
		return "CChatRoom_ReplaceRoleActions_Response";
	}
}
export class ng extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ng.prototype.chat_group_id) {
			i.Sg(ng.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ng.sm_m ||= {
			proto: ng,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				role_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return ng.sm_m;
	}
	static MBF() {
		ng.sm_mbf ||= i.w0(ng.M());
		return ng.sm_mbf;
	}
	toObject(e = false) {
		return ng.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ng.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ng.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ng();
		return ng.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ng.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ng.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ng.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ng.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_AddRoleToUser_Request";
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
		return "CChatRoom_AddRoleToUser_Response";
	}
}
class te extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!te.prototype.chat_group_id) {
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
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CChatRoom_GetRolesForUser_Request";
	}
}
class re extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.role_ids) {
			i.Sg(re.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		re.sm_m ||= {
			proto: re,
			fields: {
				role_ids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
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
		return "CChatRoom_GetRolesForUser_Response";
	}
}
export class Ig extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ig.prototype.chat_group_id) {
			i.Sg(Ig.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ig.sm_m ||= {
			proto: Ig,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				role_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return Ig.sm_m;
	}
	static MBF() {
		Ig.sm_mbf ||= i.w0(Ig.M());
		return Ig.sm_mbf;
	}
	toObject(e = false) {
		return Ig.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ig.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ig.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ig();
		return Ig.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ig.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ig.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ig.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ig.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_DeleteRoleFromUser_Request";
	}
}
class ie extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ie.toObject(e, this);
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
		return new ie();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ie();
		return ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_DeleteRoleFromUser_Response";
	}
}
class ae extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ae.prototype.header_state) {
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
				header_state: {
					n: 1,
					c: Ae,
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
		return "CChatRoom_ChatRoomHeaderState_Notification";
	}
}
class se extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!se.prototype.accountid) {
			i.Sg(se.M());
		}
		o.initialize(this, e, 0, -1, [7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		se.sm_m ||= {
			proto: se,
			fields: {
				accountid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				state: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				rank: {
					n: 4,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				time_kick_expire: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				role_ids: {
					n: 7,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
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
		return "CChatRoomMember";
	}
}
class oe extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!oe.prototype.chat_group_id) {
			i.Sg(oe.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		oe.sm_m ||= {
			proto: oe,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return oe.sm_m;
	}
	static MBF() {
		oe.sm_mbf ||= i.w0(oe.M());
		return oe.sm_mbf;
	}
	toObject(e = false) {
		return oe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(oe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(oe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new oe();
		return oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(oe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(oe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetChatRoomGroupSummary_Request";
	}
}
class le extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!le.prototype.chat_group_id) {
			i.Sg(le.M());
		}
		o.initialize(this, e, 0, -1, [6, 10, 14, 15, 18], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		le.sm_m ||= {
			proto: le,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_group_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				active_member_count: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				active_voice_member_count: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				default_chat_id: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_rooms: {
					n: 6,
					c: de,
					r: true,
					q: true,
				},
				clanid: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				chat_group_tagline: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				accountid_owner: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				top_members: {
					n: 10,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				chat_group_avatar_sha: {
					n: 11,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				rank: {
					n: 12,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				default_role_id: {
					n: 13,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				role_ids: {
					n: 14,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
				role_actions: {
					n: 15,
					c: JN,
					r: true,
					q: true,
				},
				watching_broadcast_accountid: {
					n: 16,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 17,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				party_beacons: {
					n: 18,
					c: x,
					r: true,
					q: true,
				},
				watching_broadcast_channel_id: {
					n: 19,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				active_minigame_id: {
					n: 20,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				avatar_ugc_url: {
					n: 21,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				disabled: {
					n: 22,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return le.sm_m;
	}
	static MBF() {
		le.sm_mbf ||= i.w0(le.M());
		return le.sm_mbf;
	}
	toObject(e = false) {
		return le.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(le.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(le.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new le();
		return le.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(le.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(le.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetChatRoomGroupSummary_Response";
	}
}
class ce extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ce.prototype.chat_group_id) {
			i.Sg(ce.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ce.sm_m ||= {
			proto: ce,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				requesting_app_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return ce.sm_m;
	}
	static MBF() {
		ce.sm_mbf ||= i.w0(ce.M());
		return ce.sm_mbf;
	}
	toObject(e = false) {
		return ce.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ce.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ce.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ce();
		return ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ce.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ce.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetAppChatRoomGroupForceActive_Request";
	}
}
class me extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!me.prototype.result) {
			i.Sg(me.M());
		}
		o.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		me.sm_m ||= {
			proto: me,
			fields: {
				result: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				accounts_in_channel: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return me.sm_m;
	}
	static MBF() {
		me.sm_mbf ||= i.w0(me.M());
		return me.sm_mbf;
	}
	toObject(e = false) {
		return me.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(me.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(me.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new me();
		return me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(me.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(me.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetAppChatRoomGroupForceActive_Response";
	}
}
class ue extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ue.prototype.chat_group_id) {
			i.Sg(ue.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ue.sm_m ||= {
			proto: ue,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				requesting_app_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return ue.sm_m;
	}
	static MBF() {
		ue.sm_mbf ||= i.w0(ue.M());
		return ue.sm_mbf;
	}
	toObject(e = false) {
		return ue.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ue.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ue.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ue();
		return ue.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ue.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ue.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetAppChatRoomGroupStopForceActive_Notification";
	}
}
class de extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!de.prototype.chat_id) {
			i.Sg(de.M());
		}
		o.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		de.sm_m ||= {
			proto: de,
			fields: {
				chat_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				voice_allowed: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				members_in_voice: {
					n: 4,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				time_last_message: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				sort_order: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_message: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				accountid_last_message: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return de.sm_m;
	}
	static MBF() {
		de.sm_mbf ||= i.w0(de.M());
		return de.sm_mbf;
	}
	toObject(e = false) {
		return de.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(de.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(de.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new de();
		return de.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(de.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(de.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoomState";
	}
}
class Ae extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ae.prototype.chat_group_id) {
			i.Sg(Ae.M());
		}
		o.initialize(this, e, 0, -1, [18, 19, 22], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ae.sm_m ||= {
			proto: Ae,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				clanid: {
					n: 13,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				accountid_owner: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 21,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				tagline: {
					n: 15,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				avatar_sha: {
					n: 16,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				default_role_id: {
					n: 17,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				roles: {
					n: 18,
					c: O,
					r: true,
					q: true,
				},
				role_actions: {
					n: 19,
					c: JN,
					r: true,
					q: true,
				},
				watching_broadcast_accountid: {
					n: 20,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				party_beacons: {
					n: 22,
					c: x,
					r: true,
					q: true,
				},
				watching_broadcast_channel_id: {
					n: 23,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				active_minigame_id: {
					n: 24,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				avatar_ugc_url: {
					n: 25,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				disabled: {
					n: 26,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Ae.sm_m;
	}
	static MBF() {
		Ae.sm_mbf ||= i.w0(Ae.M());
		return Ae.sm_mbf;
	}
	toObject(e = false) {
		return Ae.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ae.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ae.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ae();
		return Ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ae.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ae.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoomGroupHeaderState";
	}
}
export class P extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.header_state) {
			i.Sg(P.M());
		}
		o.initialize(this, e, 0, -1, [2, 5, 7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				header_state: {
					n: 1,
					c: Ae,
				},
				members: {
					n: 2,
					c: se,
					r: true,
					q: true,
				},
				default_chat_id: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_rooms: {
					n: 5,
					c: de,
					r: true,
					q: true,
				},
				kicked: {
					n: 7,
					c: se,
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
		return "CChatRoomGroupState";
	}
}
export class Dj extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Dj.prototype.chat_group_id) {
			i.Sg(Dj.M());
		}
		o.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Dj.sm_m ||= {
			proto: Dj,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				time_joined: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				user_chat_room_state: {
					n: 3,
					c: he,
					r: true,
					q: true,
				},
				desktop_notification_level: {
					n: 4,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mobile_notification_level: {
					n: 5,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				time_last_group_ack: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				unread_indicator_muted: {
					n: 7,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Dj.sm_m;
	}
	static MBF() {
		Dj.sm_mbf ||= i.w0(Dj.M());
		return Dj.sm_mbf;
	}
	toObject(e = false) {
		return Dj.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Dj.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Dj.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Dj();
		return Dj.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Dj.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Dj.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Dj.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Dj.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserChatRoomGroupState";
	}
}
class he extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!he.prototype.chat_id) {
			i.Sg(he.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		he.sm_m ||= {
			proto: he,
			fields: {
				chat_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				time_joined: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_last_ack: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				desktop_notification_level: {
					n: 4,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mobile_notification_level: {
					n: 5,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				time_last_mention: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				unread_indicator_muted: {
					n: 7,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				time_first_unread: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return he.sm_m;
	}
	static MBF() {
		he.sm_mbf ||= i.w0(he.M());
		return he.sm_mbf;
	}
	toObject(e = false) {
		return he.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(he.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(he.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new he();
		return he.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(he.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(he.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserChatRoomState";
	}
}
class Ce extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ce.prototype.user_chat_group_state) {
			i.Sg(Ce.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ce.sm_m ||= {
			proto: Ce,
			fields: {
				user_chat_group_state: {
					n: 1,
					c: Dj,
				},
				group_summary: {
					n: 2,
					c: le,
				},
			},
		};
		return Ce.sm_m;
	}
	static MBF() {
		Ce.sm_mbf ||= i.w0(Ce.M());
		return Ce.sm_mbf;
	}
	toObject(e = false) {
		return Ce.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ce.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ce.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ce();
		return Ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ce.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ce.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoomSummaryPair";
	}
}
export class N5 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N5.prototype.chat_group_id) {
			i.Sg(N5.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N5.sm_m ||= {
			proto: N5,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				allow_voice: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return N5.sm_m;
	}
	static MBF() {
		N5.sm_mbf ||= i.w0(N5.M());
		return N5.sm_mbf;
	}
	toObject(e = false) {
		return N5.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(N5.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(N5.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new N5();
		return N5.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(N5.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		N5.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(N5.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		N5.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_CreateChatRoom_Request";
	}
}
class fe extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!fe.prototype.chat_room) {
			i.Sg(fe.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		fe.sm_m ||= {
			proto: fe,
			fields: {
				chat_room: {
					n: 1,
					c: de,
				},
			},
		};
		return fe.sm_m;
	}
	static MBF() {
		fe.sm_mbf ||= i.w0(fe.M());
		return fe.sm_mbf;
	}
	toObject(e = false) {
		return fe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(fe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(fe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new fe();
		return fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(fe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(fe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_CreateChatRoom_Response";
	}
}
export class WS extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!WS.prototype.chat_group_id) {
			i.Sg(WS.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		WS.sm_m ||= {
			proto: WS,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return WS.sm_m;
	}
	static MBF() {
		WS.sm_mbf ||= i.w0(WS.M());
		return WS.sm_mbf;
	}
	toObject(e = false) {
		return WS.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(WS.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(WS.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new WS();
		return WS.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(WS.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		WS.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(WS.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		WS.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_DeleteChatRoom_Request";
	}
}
class ye extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ye.toObject(e, this);
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
		return new ye();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ye();
		return ye.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_DeleteChatRoom_Response";
	}
}
export class zF extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!zF.prototype.chat_group_id) {
			i.Sg(zF.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		zF.sm_m ||= {
			proto: zF,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return zF.sm_m;
	}
	static MBF() {
		zF.sm_mbf ||= i.w0(zF.M());
		return zF.sm_mbf;
	}
	toObject(e = false) {
		return zF.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(zF.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(zF.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new zF();
		return zF.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(zF.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		zF.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(zF.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		zF.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_RenameChatRoom_Request";
	}
}
class we extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return we.toObject(e, this);
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
		return new we();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new we();
		return we.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_RenameChatRoom_Response";
	}
}
export class wR extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!wR.prototype.chat_group_id) {
			i.Sg(wR.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		wR.sm_m ||= {
			proto: wR,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				move_after_chat_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return wR.sm_m;
	}
	static MBF() {
		wR.sm_mbf ||= i.w0(wR.M());
		return wR.sm_mbf;
	}
	toObject(e = false) {
		return wR.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(wR.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(wR.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new wR();
		return wR.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(wR.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		wR.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(wR.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		wR.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_ReorderChatRoom_Request";
	}
}
class ve extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ve.toObject(e, this);
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
		return new ve();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ve();
		return ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_ReorderChatRoom_Response";
	}
}
class Ie extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ie.prototype.mention_all) {
			i.Sg(Ie.M());
		}
		o.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ie.sm_m ||= {
			proto: Ie,
			fields: {
				mention_all: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				mention_here: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				mention_accountids: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return Ie.sm_m;
	}
	static MBF() {
		Ie.sm_mbf ||= i.w0(Ie.M());
		return Ie.sm_mbf;
	}
	toObject(e = false) {
		return Ie.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ie.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ie.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ie();
		return Ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ie.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ie.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatMentions";
	}
}
class Ee extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ee.prototype.chat_group_id) {
			i.Sg(Ee.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ee.sm_m ||= {
			proto: Ee,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Ee.sm_m;
	}
	static MBF() {
		Ee.sm_mbf ||= i.w0(Ee.M());
		return Ee.sm_mbf;
	}
	toObject(e = false) {
		return Ee.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ee.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ee.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ee();
		return Ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ee.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ee.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetChatRoomGroupState_Request";
	}
}
class Me extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Me.prototype.state) {
			i.Sg(Me.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Me.sm_m ||= {
			proto: Me,
			fields: {
				state: {
					n: 1,
					c: P,
				},
			},
		};
		return Me.sm_m;
	}
	static MBF() {
		Me.sm_mbf ||= i.w0(Me.M());
		return Me.sm_mbf;
	}
	toObject(e = false) {
		return Me.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Me.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Me.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Me();
		return Me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Me.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Me.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetChatRoomGroupState_Response";
	}
}
export class Pv extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Pv.toObject(e, this);
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
		return new Pv();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Pv();
		return Pv.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Pv.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Pv.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetMyChatRoomGroups_Request";
	}
}
class Re extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Re.prototype.chat_room_groups) {
			i.Sg(Re.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Re.sm_m ||= {
			proto: Re,
			fields: {
				chat_room_groups: {
					n: 1,
					c: Ce,
					r: true,
					q: true,
				},
			},
		};
		return Re.sm_m;
	}
	static MBF() {
		Re.sm_mbf ||= i.w0(Re.M());
		return Re.sm_mbf;
	}
	toObject(e = false) {
		return Re.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Re.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Re.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Re();
		return Re.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Re.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Re.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetMyChatRoomGroups_Response";
	}
}
export class c0 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c0.prototype.chat_group_id) {
			i.Sg(c0.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c0.sm_m ||= {
			proto: c0,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				invite_code: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				chat_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return c0.sm_m;
	}
	static MBF() {
		c0.sm_mbf ||= i.w0(c0.M());
		return c0.sm_mbf;
	}
	toObject(e = false) {
		return c0.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(c0.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(c0.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new c0();
		return c0.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(c0.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		c0.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(c0.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		c0.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_JoinChatRoomGroup_Request";
	}
}
class De extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!De.prototype.state) {
			i.Sg(De.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		De.sm_m ||= {
			proto: De,
			fields: {
				state: {
					n: 1,
					c: P,
				},
				user_chat_state: {
					n: 3,
					c: Dj,
				},
				join_chat_id: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				time_expire: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return De.sm_m;
	}
	static MBF() {
		De.sm_mbf ||= i.w0(De.M());
		return De.sm_mbf;
	}
	toObject(e = false) {
		return De.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(De.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(De.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new De();
		return De.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(De.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(De.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_JoinChatRoomGroup_Response";
	}
}
export class eb extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!eb.prototype.chat_group_id) {
			i.Sg(eb.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		eb.sm_m ||= {
			proto: eb,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				chat_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				skip_friendsui_check: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return eb.sm_m;
	}
	static MBF() {
		eb.sm_mbf ||= i.w0(eb.M());
		return eb.sm_mbf;
	}
	toObject(e = false) {
		return eb.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(eb.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(eb.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new eb();
		return eb.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(eb.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		eb.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(eb.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		eb.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_InviteFriendToChatRoomGroup_Request";
	}
}
class Fe extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Fe.toObject(e, this);
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
		return new Fe();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Fe();
		return Fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_InviteFriendToChatRoomGroup_Response";
	}
}
export class rk extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!rk.prototype.chat_group_id) {
			i.Sg(rk.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		rk.sm_m ||= {
			proto: rk,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return rk.sm_m;
	}
	static MBF() {
		rk.sm_mbf ||= i.w0(rk.M());
		return rk.sm_mbf;
	}
	toObject(e = false) {
		return rk.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(rk.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(rk.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new rk();
		return rk.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(rk.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		rk.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(rk.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		rk.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_LeaveChatRoomGroup_Request";
	}
}
class Oe extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Oe.toObject(e, this);
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
		return new Oe();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Oe();
		return Oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_LeaveChatRoomGroup_Response";
	}
}
export class s8 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!s8.prototype.chat_group_id) {
			i.Sg(s8.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		s8.sm_m ||= {
			proto: s8,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return s8.sm_m;
	}
	static MBF() {
		s8.sm_mbf ||= i.w0(s8.M());
		return s8.sm_mbf;
	}
	toObject(e = false) {
		return s8.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(s8.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(s8.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new s8();
		return s8.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(s8.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		s8.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(s8.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		s8.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_JoinVoiceChat_Request";
	}
}
class Le extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Le.prototype.voice_chatid) {
			i.Sg(Le.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Le.sm_m ||= {
			proto: Le,
			fields: {
				voice_chatid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Le.sm_m;
	}
	static MBF() {
		Le.sm_mbf ||= i.w0(Le.M());
		return Le.sm_mbf;
	}
	toObject(e = false) {
		return Le.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Le.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Le.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Le();
		return Le.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Le.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Le.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_JoinVoiceChat_Response";
	}
}
export class z extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.chat_group_id) {
			i.Sg(z.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		z.sm_m ||= {
			proto: z,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		var e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(z.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_LeaveVoiceChat_Request";
	}
}
class xe extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return xe.toObject(e, this);
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
		return new xe();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new xe();
		return xe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		xe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		xe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_LeaveVoiceChat_Response";
	}
}
class Ue extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ue.prototype.chat_id) {
			i.Sg(Ue.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ue.sm_m ||= {
			proto: Ue,
			fields: {
				chat_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_group_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Ue.sm_m;
	}
	static MBF() {
		Ue.sm_mbf ||= i.w0(Ue.M());
		return Ue.sm_mbf;
	}
	toObject(e = false) {
		return Ue.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ue.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ue.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ue();
		return Ue.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ue.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ue.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_NotifyShouldRejoinChatRoomVoiceChat_Notification";
	}
}
export class VU extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!VU.prototype.chat_group_id) {
			i.Sg(VU.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		VU.sm_m ||= {
			proto: VU,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				message: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				echo_to_sender: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return VU.sm_m;
	}
	static MBF() {
		VU.sm_mbf ||= i.w0(VU.M());
		return VU.sm_mbf;
	}
	toObject(e = false) {
		return VU.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(VU.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(VU.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new VU();
		return VU.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(VU.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		VU.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(VU.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		VU.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SendChatMessage_Request";
	}
}
class Ve extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ve.prototype.modified_message) {
			i.Sg(Ve.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ve.sm_m ||= {
			proto: Ve,
			fields: {
				modified_message: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				server_timestamp: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ordinal: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				message_without_bb_code: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Ve.sm_m;
	}
	static MBF() {
		Ve.sm_mbf ||= i.w0(Ve.M());
		return Ve.sm_mbf;
	}
	toObject(e = false) {
		return Ve.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ve.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ve.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ve();
		return Ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ve.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ve.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SendChatMessage_Response";
	}
}
class He extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!He.prototype.chat_group_id) {
			i.Sg(He.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		He.sm_m ||= {
			proto: He,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid_sender: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				message: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				timestamp: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				mentions: {
					n: 6,
					c: Ie,
				},
				ordinal: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				server_message: {
					n: 8,
					c: u,
				},
				message_no_bbcode: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				chat_name: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				notification_key: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return He.sm_m;
	}
	static MBF() {
		He.sm_mbf ||= i.w0(He.M());
		return He.sm_mbf;
	}
	toObject(e = false) {
		return He.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(He.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(He.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new He();
		return He.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(He.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		He.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(He.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		He.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_IncomingChatMessage_Notification";
	}
}
class je extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!je.prototype.chat_group_id) {
			i.Sg(je.M());
		}
		o.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		je.sm_m ||= {
			proto: je,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				messages: {
					n: 3,
					c: qe,
					r: true,
					q: true,
				},
			},
		};
		return je.sm_m;
	}
	static MBF() {
		je.sm_mbf ||= i.w0(je.M());
		return je.sm_mbf;
	}
	toObject(e = false) {
		return je.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(je.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(je.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new je();
		return je.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(je.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		je.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(je.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		je.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_ChatMessageModified_Notification";
	}
}
class qe extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qe.prototype.server_timestamp) {
			i.Sg(qe.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qe.sm_m ||= {
			proto: qe,
			fields: {
				server_timestamp: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ordinal: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				deleted: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return qe.sm_m;
	}
	static MBF() {
		qe.sm_mbf ||= i.w0(qe.M());
		return qe.sm_mbf;
	}
	toObject(e = false) {
		return qe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qe();
		return qe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		qe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		qe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_ChatMessageModified_Notification_ChatMessage";
	}
}
export class vI extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!vI.prototype.chat_group_id) {
			i.Sg(vI.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		vI.sm_m ||= {
			proto: vI,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				last_time: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_ordinal: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				start_time: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				start_ordinal: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				max_count: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return vI.sm_m;
	}
	static MBF() {
		vI.sm_mbf ||= i.w0(vI.M());
		return vI.sm_mbf;
	}
	toObject(e = false) {
		return vI.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(vI.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(vI.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new vI();
		return vI.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(vI.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		vI.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(vI.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		vI.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetMessageHistory_Request";
	}
}
class Ze extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ze.prototype.messages) {
			i.Sg(Ze.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ze.sm_m ||= {
			proto: Ze,
			fields: {
				messages: {
					n: 1,
					c: Ye,
					r: true,
					q: true,
				},
				more_available: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Ze.sm_m;
	}
	static MBF() {
		Ze.sm_mbf ||= i.w0(Ze.M());
		return Ze.sm_mbf;
	}
	toObject(e = false) {
		return Ze.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ze.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ze.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ze();
		return Ze.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ze.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ze.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ze.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ze.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetMessageHistory_Response";
	}
}
class Ye extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ye.prototype.sender) {
			i.Sg(Ye.M());
		}
		o.initialize(this, e, 0, -1, [7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ye.sm_m ||= {
			proto: Ye,
			fields: {
				sender: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				server_timestamp: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				message: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				ordinal: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				server_message: {
					n: 5,
					c: u,
				},
				deleted: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				reactions: {
					n: 7,
					c: Ke,
					r: true,
					q: true,
				},
			},
		};
		return Ye.sm_m;
	}
	static MBF() {
		Ye.sm_mbf ||= i.w0(Ye.M());
		return Ye.sm_mbf;
	}
	toObject(e = false) {
		return Ye.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ye.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ye.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ye();
		return Ye.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ye.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ye.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ye.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ye.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetMessageHistory_Response_ChatMessage";
	}
}
class Ke extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ke.prototype.reaction_type) {
			i.Sg(Ke.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ke.sm_m ||= {
			proto: Ke,
			fields: {
				reaction_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				reaction: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				num_reactors: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				has_user_reacted: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Ke.sm_m;
	}
	static MBF() {
		Ke.sm_mbf ||= i.w0(Ke.M());
		return Ke.sm_mbf;
	}
	toObject(e = false) {
		return Ke.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ke.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ke.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ke();
		return Ke.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ke.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ke.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ke.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ke.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetMessageHistory_Response_ChatMessage_MessageReaction";
	}
}
class Xe extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Xe.prototype.chat_group_id) {
			i.Sg(Xe.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Xe.sm_m ||= {
			proto: Xe,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				member: {
					n: 2,
					c: se,
				},
				change: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return Xe.sm_m;
	}
	static MBF() {
		Xe.sm_mbf ||= i.w0(Xe.M());
		return Xe.sm_mbf;
	}
	toObject(e = false) {
		return Xe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Xe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Xe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Xe();
		return Xe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Xe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Xe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Xe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Xe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_MemberStateChange_Notification";
	}
}
class Je extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Je.prototype.chat_group_id) {
			i.Sg(Je.M());
		}
		o.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Je.sm_m ||= {
			proto: Je,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				default_chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_rooms: {
					n: 3,
					c: de,
					r: true,
					q: true,
				},
			},
		};
		return Je.sm_m;
	}
	static MBF() {
		Je.sm_mbf ||= i.w0(Je.M());
		return Je.sm_mbf;
	}
	toObject(e = false) {
		return Je.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Je.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Je.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Je();
		return Je.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Je.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Je.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Je.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Je.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_ChatRoomGroupRoomsChange_Notification";
	}
}
export class MH extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!MH.prototype.chat_group_id) {
			i.Sg(MH.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		MH.sm_m ||= {
			proto: MH,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				timestamp: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return MH.sm_m;
	}
	static MBF() {
		MH.sm_mbf ||= i.w0(MH.M());
		return MH.sm_mbf;
	}
	toObject(e = false) {
		return MH.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(MH.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(MH.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new MH();
		return MH.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(MH.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		MH.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(MH.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		MH.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_AckChatMessage_Notification";
	}
}
export class RZ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!RZ.prototype.chat_group_id) {
			i.Sg(RZ.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		RZ.sm_m ||= {
			proto: RZ,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				seconds_valid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				chat_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return RZ.sm_m;
	}
	static MBF() {
		RZ.sm_mbf ||= i.w0(RZ.M());
		return RZ.sm_mbf;
	}
	toObject(e = false) {
		return RZ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(RZ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(RZ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new RZ();
		return RZ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(RZ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		RZ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(RZ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		RZ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_CreateInviteLink_Request";
	}
}
class tt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!tt.prototype.invite_code) {
			i.Sg(tt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		tt.sm_m ||= {
			proto: tt,
			fields: {
				invite_code: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				seconds_valid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return tt.sm_m;
	}
	static MBF() {
		tt.sm_mbf ||= i.w0(tt.M());
		return tt.sm_mbf;
	}
	toObject(e = false) {
		return tt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(tt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(tt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new tt();
		return tt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(tt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		tt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(tt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		tt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_CreateInviteLink_Response";
	}
}
export class NX extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!NX.prototype.invite_code) {
			i.Sg(NX.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		NX.sm_m ||= {
			proto: NX,
			fields: {
				invite_code: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return NX.sm_m;
	}
	static MBF() {
		NX.sm_mbf ||= i.w0(NX.M());
		return NX.sm_mbf;
	}
	toObject(e = false) {
		return NX.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(NX.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(NX.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new NX();
		return NX.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(NX.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		NX.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(NX.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		NX.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetInviteLinkInfo_Request";
	}
}
class nt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!nt.prototype.steamid_sender) {
			i.Sg(nt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		nt.sm_m ||= {
			proto: nt,
			fields: {
				steamid_sender: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				time_expires: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				chat_id: {
					n: 6,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				group_summary: {
					n: 8,
					c: le,
				},
				user_chat_group_state: {
					n: 9,
					c: Dj,
				},
				time_kick_expire: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				banned: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return nt.sm_m;
	}
	static MBF() {
		nt.sm_mbf ||= i.w0(nt.M());
		return nt.sm_mbf;
	}
	toObject(e = false) {
		return nt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(nt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(nt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new nt();
		return nt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(nt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		nt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(nt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		nt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetInviteLinkInfo_Response";
	}
}
export class NF extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!NF.prototype.steamid_invitee) {
			i.Sg(NF.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		NF.sm_m ||= {
			proto: NF,
			fields: {
				steamid_invitee: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				chat_group_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				invite_code: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return NF.sm_m;
	}
	static MBF() {
		NF.sm_mbf ||= i.w0(NF.M());
		return NF.sm_mbf;
	}
	toObject(e = false) {
		return NF.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(NF.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(NF.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new NF();
		return NF.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(NF.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		NF.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(NF.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		NF.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetInviteInfo_Request";
	}
}
class at extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!at.prototype.group_summary) {
			i.Sg(at.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		at.sm_m ||= {
			proto: at,
			fields: {
				group_summary: {
					n: 1,
					c: le,
				},
				time_kick_expire: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				banned: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return at.sm_m;
	}
	static MBF() {
		at.sm_mbf ||= i.w0(at.M());
		return at.sm_mbf;
	}
	toObject(e = false) {
		return at.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(at.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(at.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new at();
		return at.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(at.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		at.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(at.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		at.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetInviteInfo_Response";
	}
}
export class IG extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!IG.prototype.chat_group_id) {
			i.Sg(IG.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		IG.sm_m ||= {
			proto: IG,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return IG.sm_m;
	}
	static MBF() {
		IG.sm_mbf ||= i.w0(IG.M());
		return IG.sm_mbf;
	}
	toObject(e = false) {
		return IG.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(IG.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(IG.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new IG();
		return IG.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(IG.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		IG.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(IG.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		IG.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetInviteLinksForGroup_Request";
	}
}
class ot extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ot.prototype.invite_links) {
			i.Sg(ot.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ot.sm_m ||= {
			proto: ot,
			fields: {
				invite_links: {
					n: 1,
					c: lt,
					r: true,
					q: true,
				},
			},
		};
		return ot.sm_m;
	}
	static MBF() {
		ot.sm_mbf ||= i.w0(ot.M());
		return ot.sm_mbf;
	}
	toObject(e = false) {
		return ot.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ot.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ot.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ot();
		return ot.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ot.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ot.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ot.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ot.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetInviteLinksForGroup_Response";
	}
}
class lt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!lt.prototype.invite_code) {
			i.Sg(lt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		lt.sm_m ||= {
			proto: lt,
			fields: {
				invite_code: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid_creator: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				time_expires: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				chat_id: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return lt.sm_m;
	}
	static MBF() {
		lt.sm_mbf ||= i.w0(lt.M());
		return lt.sm_mbf;
	}
	toObject(e = false) {
		return lt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(lt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(lt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new lt();
		return lt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(lt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		lt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(lt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		lt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetInviteLinksForGroup_Response_LinkInfo";
	}
}
export class mG extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!mG.prototype.chat_group_id) {
			i.Sg(mG.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		mG.sm_m ||= {
			proto: mG,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				invite_code: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return mG.sm_m;
	}
	static MBF() {
		mG.sm_mbf ||= i.w0(mG.M());
		return mG.sm_mbf;
	}
	toObject(e = false) {
		return mG.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(mG.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(mG.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new mG();
		return mG.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(mG.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		mG.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(mG.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		mG.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_DeleteInviteLink_Request";
	}
}
class mt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return mt.toObject(e, this);
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
		return new mt();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new mt();
		return mt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		mt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		mt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_DeleteInviteLink_Response";
	}
}
export class ro extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ro.prototype.chat_group_id) {
			i.Sg(ro.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ro.sm_m ||= {
			proto: ro,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return ro.sm_m;
	}
	static MBF() {
		ro.sm_mbf ||= i.w0(ro.M());
		return ro.sm_mbf;
	}
	toObject(e = false) {
		return ro.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ro.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ro.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ro();
		return ro.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ro.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ro.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ro.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ro.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetBanList_Request";
	}
}
class dt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!dt.prototype.bans) {
			i.Sg(dt.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		dt.sm_m ||= {
			proto: dt,
			fields: {
				bans: {
					n: 1,
					c: At,
					r: true,
					q: true,
				},
			},
		};
		return dt.sm_m;
	}
	static MBF() {
		dt.sm_mbf ||= i.w0(dt.M());
		return dt.sm_mbf;
	}
	toObject(e = false) {
		return dt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(dt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(dt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new dt();
		return dt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(dt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		dt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(dt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		dt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetBanList_Response";
	}
}
class At extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!At.prototype.accountid) {
			i.Sg(At.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		At.sm_m ||= {
			proto: At,
			fields: {
				accountid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				accountid_actor: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_banned: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ban_reason: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return At.sm_m;
	}
	static MBF() {
		At.sm_mbf ||= i.w0(At.M());
		return At.sm_mbf;
	}
	toObject(e = false) {
		return At.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(At.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(At.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new At();
		return At.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(At.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		At.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(At.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		At.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetBanList_Response_BanInfo";
	}
}
class pt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pt.prototype.accountid) {
			i.Sg(pt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pt.sm_m ||= {
			proto: pt,
			fields: {
				accountid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				accountid_actor: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_invited: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return pt.sm_m;
	}
	static MBF() {
		pt.sm_mbf ||= i.w0(pt.M());
		return pt.sm_mbf;
	}
	toObject(e = false) {
		return pt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(pt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(pt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new pt();
		return pt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(pt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		pt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(pt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		pt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoomGroupInvite";
	}
}
export class zw extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!zw.prototype.chat_group_id) {
			i.Sg(zw.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		zw.sm_m ||= {
			proto: zw,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return zw.sm_m;
	}
	static MBF() {
		zw.sm_mbf ||= i.w0(zw.M());
		return zw.sm_mbf;
	}
	toObject(e = false) {
		return zw.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(zw.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(zw.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new zw();
		return zw.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(zw.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		zw.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(zw.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		zw.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetInviteList_Request";
	}
}
class ht extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ht.prototype.invites) {
			i.Sg(ht.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ht.sm_m ||= {
			proto: ht,
			fields: {
				invites: {
					n: 1,
					c: pt,
					r: true,
					q: true,
				},
			},
		};
		return ht.sm_m;
	}
	static MBF() {
		ht.sm_mbf ||= i.w0(ht.M());
		return ht.sm_mbf;
	}
	toObject(e = false) {
		return ht.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ht.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ht.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ht();
		return ht.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ht.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ht.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ht.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ht.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetInviteList_Response";
	}
}
export class Jw extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Jw.prototype.chat_group_ids) {
			i.Sg(Jw.M());
		}
		o.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Jw.sm_m ||= {
			proto: Jw,
			fields: {
				chat_group_ids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
				chat_groups_data_requested: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
				virtualize_members_threshold: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return Jw.sm_m;
	}
	static MBF() {
		Jw.sm_mbf ||= i.w0(Jw.M());
		return Jw.sm_mbf;
	}
	toObject(e = false) {
		return Jw.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Jw.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Jw.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Jw();
		return Jw.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Jw.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Jw.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Jw.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Jw.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetSessionActiveChatRoomGroups_Request";
	}
}
class _t extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_t.prototype.chat_states) {
			i.Sg(_t.M());
		}
		o.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_t.sm_m ||= {
			proto: _t,
			fields: {
				chat_states: {
					n: 1,
					c: P,
					r: true,
					q: true,
				},
				virtualize_members_chat_group_ids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
			},
		};
		return _t.sm_m;
	}
	static MBF() {
		_t.sm_mbf ||= i.w0(_t.M());
		return _t.sm_mbf;
	}
	toObject(e = false) {
		return _t.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(_t.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(_t.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _t();
		return _t.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(_t.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		_t.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_t.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		_t.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetSessionActiveChatRoomGroups_Response";
	}
}
export class gD extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!gD.prototype.chat_group_id) {
			i.Sg(gD.M());
		}
		o.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		gD.sm_m ||= {
			proto: gD,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_group_preferences: {
					n: 2,
					c: bt,
				},
				chat_room_preferences: {
					n: 3,
					c: yt,
					r: true,
					q: true,
				},
			},
		};
		return gD.sm_m;
	}
	static MBF() {
		gD.sm_mbf ||= i.w0(gD.M());
		return gD.sm_mbf;
	}
	toObject(e = false) {
		return gD.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(gD.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(gD.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new gD();
		return gD.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(gD.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		gD.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(gD.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		gD.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetUserChatGroupPreferences_Request";
	}
}
class bt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!bt.prototype.desktop_notification_level) {
			i.Sg(bt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		bt.sm_m ||= {
			proto: bt,
			fields: {
				desktop_notification_level: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mobile_notification_level: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				unread_indicator_muted: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return bt.sm_m;
	}
	static MBF() {
		bt.sm_mbf ||= i.w0(bt.M());
		return bt.sm_mbf;
	}
	toObject(e = false) {
		return bt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(bt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(bt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new bt();
		return bt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(bt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		bt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(bt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		bt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetUserChatGroupPreferences_Request_ChatGroupPreferences";
	}
}
class yt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!yt.prototype.chat_id) {
			i.Sg(yt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		yt.sm_m ||= {
			proto: yt,
			fields: {
				chat_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				desktop_notification_level: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mobile_notification_level: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				unread_indicator_muted: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return yt.sm_m;
	}
	static MBF() {
		yt.sm_mbf ||= i.w0(yt.M());
		return yt.sm_mbf;
	}
	toObject(e = false) {
		return yt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(yt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(yt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new yt();
		return yt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(yt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		yt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(yt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		yt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetUserChatGroupPreferences_Request_ChatRoomPreferences";
	}
}
class St extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return St.toObject(e, this);
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
		return new St();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new St();
		return St.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		St.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		St.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SetUserChatGroupPreferences_Response";
	}
}
export class lr extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!lr.prototype.chat_group_id) {
			i.Sg(lr.M());
		}
		o.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		lr.sm_m ||= {
			proto: lr,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				messages: {
					n: 3,
					c: Bt,
					r: true,
					q: true,
				},
			},
		};
		return lr.sm_m;
	}
	static MBF() {
		lr.sm_mbf ||= i.w0(lr.M());
		return lr.sm_mbf;
	}
	toObject(e = false) {
		return lr.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(lr.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(lr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new lr();
		return lr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(lr.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		lr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(lr.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		lr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_DeleteChatMessages_Request";
	}
}
class Bt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Bt.prototype.server_timestamp) {
			i.Sg(Bt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Bt.sm_m ||= {
			proto: Bt,
			fields: {
				server_timestamp: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ordinal: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Bt.sm_m;
	}
	static MBF() {
		Bt.sm_mbf ||= i.w0(Bt.M());
		return Bt.sm_mbf;
	}
	toObject(e = false) {
		return Bt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Bt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Bt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Bt();
		return Bt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Bt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Bt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Bt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Bt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_DeleteChatMessages_Request_Message";
	}
}
class vt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return vt.toObject(e, this);
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
		return new vt();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new vt();
		return vt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		vt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		vt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_DeleteChatMessages_Response";
	}
}
export class Cw extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Cw.prototype.chat_group_id) {
			i.Sg(Cw.M());
		}
		o.initialize(this, e, 0, -1, [7, 8], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Cw.sm_m ||= {
			proto: Cw,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				view_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				start: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				end: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				client_changenumber: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				delete_view: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				persona_subscribe_accountids: {
					n: 7,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
				},
				persona_unsubscribe_accountids: {
					n: 8,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
				},
			},
		};
		return Cw.sm_m;
	}
	static MBF() {
		Cw.sm_mbf ||= i.w0(Cw.M());
		return Cw.sm_mbf;
	}
	toObject(e = false) {
		return Cw.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Cw.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Cw.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Cw();
		return Cw.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Cw.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Cw.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Cw.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Cw.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_UpdateMemberListView_Notification";
	}
}
class Et extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Et.prototype.start) {
			i.Sg(Et.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Et.sm_m ||= {
			proto: Et,
			fields: {
				start: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				end: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				total_count: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				client_changenumber: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				server_changenumber: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return Et.sm_m;
	}
	static MBF() {
		Et.sm_mbf ||= i.w0(Et.M());
		return Et.sm_mbf;
	}
	toObject(e = false) {
		return Et.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Et.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Et.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Et();
		return Et.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Et.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Et.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Et.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Et.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoomMemberListView";
	}
}
class Mt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Mt.prototype.ingame) {
			i.Sg(Mt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Mt.sm_m ||= {
			proto: Mt,
			fields: {
				ingame: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				online: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				offline: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return Mt.sm_m;
	}
	static MBF() {
		Mt.sm_mbf ||= i.w0(Mt.M());
		return Mt.sm_mbf;
	}
	toObject(e = false) {
		return Mt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Mt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Mt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Mt();
		return Mt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Mt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Mt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Mt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Mt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoomMemberSummaryCounts";
	}
}
export class NQ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!NQ.prototype.chat_group_id) {
			i.Sg(NQ.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		NQ.sm_m ||= {
			proto: NQ,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				search_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				search_text: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				max_results: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return NQ.sm_m;
	}
	static MBF() {
		NQ.sm_mbf ||= i.w0(NQ.M());
		return NQ.sm_mbf;
	}
	toObject(e = false) {
		return NQ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(NQ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(NQ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new NQ();
		return NQ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(NQ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		NQ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(NQ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		NQ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SearchMembers_Request";
	}
}
class Rt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Rt.prototype.matching_members) {
			i.Sg(Rt.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Rt.sm_m ||= {
			proto: Rt,
			fields: {
				matching_members: {
					n: 1,
					c: kt,
					r: true,
					q: true,
				},
				status_flags: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Rt.sm_m;
	}
	static MBF() {
		Rt.sm_mbf ||= i.w0(Rt.M());
		return Rt.sm_mbf;
	}
	toObject(e = false) {
		return Rt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Rt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Rt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Rt();
		return Rt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Rt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Rt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Rt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Rt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SearchMembers_Response";
	}
}
class kt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!kt.prototype.accountid) {
			i.Sg(kt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		kt.sm_m ||= {
			proto: kt,
			fields: {
				accountid: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				persona: {
					n: 2,
					c: s.IC,
				},
			},
		};
		return kt.sm_m;
	}
	static MBF() {
		kt.sm_mbf ||= i.w0(kt.M());
		return kt.sm_mbf;
	}
	toObject(e = false) {
		return kt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(kt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(kt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new kt();
		return kt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(kt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		kt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(kt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		kt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_SearchMembers_Response_MemberMatch";
	}
}
export class kd extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!kd.prototype.chat_group_id) {
			i.Sg(kd.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		kd.sm_m ||= {
			proto: kd,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				server_timestamp: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ordinal: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				reaction_type: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				reaction: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_add: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return kd.sm_m;
	}
	static MBF() {
		kd.sm_mbf ||= i.w0(kd.M());
		return kd.sm_mbf;
	}
	toObject(e = false) {
		return kd.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(kd.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(kd.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new kd();
		return kd.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(kd.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		kd.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(kd.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		kd.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_UpdateMessageReaction_Request";
	}
}
class Nt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Nt.prototype.num_reactors) {
			i.Sg(Nt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Nt.sm_m ||= {
			proto: Nt,
			fields: {
				num_reactors: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Nt.sm_m;
	}
	static MBF() {
		Nt.sm_mbf ||= i.w0(Nt.M());
		return Nt.sm_mbf;
	}
	toObject(e = false) {
		return Nt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Nt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Nt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Nt();
		return Nt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Nt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Nt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Nt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Nt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_UpdateMessageReaction_Response";
	}
}
class Ft extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ft.prototype.chat_group_id) {
			i.Sg(Ft.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ft.sm_m ||= {
			proto: Ft,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				server_timestamp: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ordinal: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				reactor: {
					n: 5,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				reaction_type: {
					n: 6,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				reaction: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_add: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Ft.sm_m;
	}
	static MBF() {
		Ft.sm_mbf ||= i.w0(Ft.M());
		return Ft.sm_mbf;
	}
	toObject(e = false) {
		return Ft.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ft.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ft.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ft();
		return Ft.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ft.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ft.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ft.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ft.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_MessageReaction_Notification";
	}
}
export class HZ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!HZ.prototype.chat_group_id) {
			i.Sg(HZ.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		HZ.sm_m ||= {
			proto: HZ,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				chat_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				server_timestamp: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ordinal: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				reaction_type: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				reaction: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				limit: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return HZ.sm_m;
	}
	static MBF() {
		HZ.sm_mbf ||= i.w0(HZ.M());
		return HZ.sm_mbf;
	}
	toObject(e = false) {
		return HZ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(HZ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(HZ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new HZ();
		return HZ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(HZ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		HZ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(HZ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		HZ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetMessageReactionReactors_Request";
	}
}
class Ot extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ot.prototype.reactors) {
			i.Sg(Ot.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ot.sm_m ||= {
			proto: Ot,
			fields: {
				reactors: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return Ot.sm_m;
	}
	static MBF() {
		Ot.sm_mbf ||= i.w0(Ot.M());
		return Ot.sm_mbf;
	}
	toObject(e = false) {
		return Ot.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ot.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ot.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ot();
		return Ot.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ot.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ot.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ot.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ot.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoom_GetMessageReactionReactors_Response";
	}
}
export class AF extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!AF.prototype.steamid) {
			i.Sg(AF.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		AF.sm_m ||= {
			proto: AF,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				autocreate: {
					n: 2,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return AF.sm_m;
	}
	static MBF() {
		AF.sm_mbf ||= i.w0(AF.M());
		return AF.sm_mbf;
	}
	toObject(e = false) {
		return AF.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(AF.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(AF.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new AF();
		return AF.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(AF.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		AF.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(AF.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		AF.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanChatRooms_GetClanChatRoomInfo_Request";
	}
}
class Lt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Lt.prototype.chat_group_summary) {
			i.Sg(Lt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Lt.sm_m ||= {
			proto: Lt,
			fields: {
				chat_group_summary: {
					n: 1,
					c: le,
				},
			},
		};
		return Lt.sm_m;
	}
	static MBF() {
		Lt.sm_mbf ||= i.w0(Lt.M());
		return Lt.sm_mbf;
	}
	toObject(e = false) {
		return Lt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Lt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Lt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Lt();
		return Lt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Lt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Lt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Lt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Lt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanChatRooms_GetClanChatRoomInfo_Response";
	}
}
class zt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!zt.prototype.steamid) {
			i.Sg(zt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		zt.sm_m ||= {
			proto: zt,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				chat_room_private: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return zt.sm_m;
	}
	static MBF() {
		zt.sm_mbf ||= i.w0(zt.M());
		return zt.sm_mbf;
	}
	toObject(e = false) {
		return zt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(zt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(zt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new zt();
		return zt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(zt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		zt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(zt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		zt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanChatRooms_SetClanChatRoomPrivate_Request";
	}
}
class xt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!xt.prototype.chat_room_private) {
			i.Sg(xt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		xt.sm_m ||= {
			proto: xt,
			fields: {
				chat_room_private: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return xt.sm_m;
	}
	static MBF() {
		xt.sm_mbf ||= i.w0(xt.M());
		return xt.sm_mbf;
	}
	toObject(e = false) {
		return xt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(xt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(xt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new xt();
		return xt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(xt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		xt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(xt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		xt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanChatRooms_SetClanChatRoomPrivate_Response";
	}
}
class Ut extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ut.prototype.chat_group_id) {
			i.Sg(Ut.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ut.sm_m ||= {
			proto: Ut,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				user_chat_group_state: {
					n: 2,
					c: Dj,
				},
				group_summary: {
					n: 3,
					c: le,
				},
				user_action: {
					n: 4,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return Ut.sm_m;
	}
	static MBF() {
		Ut.sm_mbf ||= i.w0(Ut.M());
		return Ut.sm_mbf;
	}
	toObject(e = false) {
		return Ut.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ut.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ut.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ut();
		return Ut.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ut.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ut.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ut.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ut.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ChatRoomClient_NotifyChatGroupUserStateChanged_Notification";
	}
}
class Wt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Wt.prototype.chat_group_ids) {
			i.Sg(Wt.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Wt.sm_m ||= {
			proto: Wt,
			fields: {
				chat_group_ids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
			},
		};
		return Wt.sm_m;
	}
	static MBF() {
		Wt.sm_mbf ||= i.w0(Wt.M());
		return Wt.sm_mbf;
	}
	toObject(e = false) {
		return Wt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Wt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Wt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Wt();
		return Wt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Wt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Wt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Wt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Wt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ChatRoomClient_NotifyChatRoomDisconnect_Notification";
	}
}
class Vt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Vt.prototype.chat_group_id) {
			i.Sg(Vt.M());
		}
		o.initialize(this, e, 0, -1, [4, 7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Vt.sm_m ||= {
			proto: Vt,
			fields: {
				chat_group_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				view_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				view: {
					n: 3,
					c: Et,
				},
				members: {
					n: 4,
					c: Ht,
					r: true,
					q: true,
				},
				status_flags: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				member_summary: {
					n: 6,
					c: Mt,
				},
				subscribed_personas: {
					n: 7,
					c: s.IC,
					r: true,
					q: true,
				},
			},
		};
		return Vt.sm_m;
	}
	static MBF() {
		Vt.sm_mbf ||= i.w0(Vt.M());
		return Vt.sm_mbf;
	}
	toObject(e = false) {
		return Vt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Vt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Vt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Vt();
		return Vt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Vt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Vt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Vt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Vt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoomClient_MemberListViewUpdated_Notification";
	}
}
class Ht extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ht.prototype.rank) {
			i.Sg(Ht.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ht.sm_m ||= {
			proto: Ht,
			fields: {
				rank: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				accountid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				persona: {
					n: 3,
					c: s.IC,
				},
			},
		};
		return Ht.sm_m;
	}
	static MBF() {
		Ht.sm_mbf ||= i.w0(Ht.M());
		return Ht.sm_mbf;
	}
	toObject(e = false) {
		return Ht.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ht.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ht.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ht();
		return Ht.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ht.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ht.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ht.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ht.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatRoomClient_MemberListViewUpdated_Notification_MemberListViewEntry";
	}
}
class jt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!jt.prototype.metrics_run_id) {
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
				metrics_run_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CChatUsability_RequestClientUsabilityMetrics_Notification";
	}
}
export class L6 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!L6.prototype.metrics_run_id) {
			i.Sg(L6.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		L6.sm_m ||= {
			proto: L6,
			fields: {
				metrics_run_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				client_build: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				metrics_version: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				in_web: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				settings: {
					n: 10,
					c: Qt,
				},
				voice_settings: {
					n: 11,
					c: Zt,
				},
				ui_state: {
					n: 12,
					c: Yt,
				},
				metrics: {
					n: 13,
					c: Xt,
				},
			},
		};
		return L6.sm_m;
	}
	static MBF() {
		L6.sm_mbf ||= i.w0(L6.M());
		return L6.sm_mbf;
	}
	toObject(e = false) {
		return L6.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(L6.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(L6.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new L6();
		return L6.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(L6.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		L6.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(L6.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		L6.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatUsability_ClientUsabilityMetrics_Notification";
	}
}
class Qt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Qt.prototype.notifications_show_ingame) {
			i.Sg(Qt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Qt.sm_m ||= {
			proto: Qt,
			fields: {
				notifications_show_ingame: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				notifications_show_online: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				notifications_show_message: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				notifications_events_and_announcements: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sounds_play_ingame: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sounds_play_online: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sounds_play_message: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sounds_events_and_announcements: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				always_new_chat_window: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				force_alphabetic_friend_sorting: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				chat_flash_mode: {
					n: 11,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				remember_open_chats: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				compact_quick_access: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				compact_friends_list: {
					n: 14,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				notifications_show_chat_room_notification: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sounds_play_chat_room_notification: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				hide_offline_friends_in_tag_groups: {
					n: 17,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				hide_categorized_friends: {
					n: 18,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				categorize_in_game_friends_by_game: {
					n: 19,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				chat_font_size: {
					n: 20,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				use24hour_clock: {
					n: 21,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				do_not_disturb_mode: {
					n: 22,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				disable_embed_inlining: {
					n: 23,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sign_into_friends: {
					n: 24,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				animated_avatars: {
					n: 25,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Qt.sm_m;
	}
	static MBF() {
		Qt.sm_mbf ||= i.w0(Qt.M());
		return Qt.sm_mbf;
	}
	toObject(e = false) {
		return Qt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Qt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Qt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Qt();
		return Qt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Qt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Qt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Qt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Qt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatUsability_ClientUsabilityMetrics_Notification_Settings";
	}
}
class Zt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Zt.prototype.voice_input_gain) {
			i.Sg(Zt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Zt.sm_m ||= {
			proto: Zt,
			fields: {
				voice_input_gain: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				voice_output_gain: {
					n: 2,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				noise_gate_level: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				voice_use_echo_cancellation: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				voice_use_noise_cancellation: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				voice_use_auto_gain_control: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				selected_non_default_mic: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				selected_non_default_output: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				push_to_talk_enabled: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				push_to_mute_enabled: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				play_ptt_sounds: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Zt.sm_m;
	}
	static MBF() {
		Zt.sm_mbf ||= i.w0(Zt.M());
		return Zt.sm_mbf;
	}
	toObject(e = false) {
		return Zt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Zt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Zt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Zt();
		return Zt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Zt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Zt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Zt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Zt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatUsability_ClientUsabilityMetrics_Notification_VoiceSettings";
	}
}
class Yt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Yt.prototype.friends_list_height) {
			i.Sg(Yt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Yt.sm_m ||= {
			proto: Yt,
			fields: {
				friends_list_height: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				friends_list_width: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				friends_list_docked: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				friends_list_collapsed: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				friends_list_group_chats_height: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				friends_list_visible: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				chat_popups_opened: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				group_chat_tabs_opened: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				friend_chat_tabs_opened: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				chat_window_width: {
					n: 10,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				chat_window_height: {
					n: 11,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				category_collapse: {
					n: 12,
					c: Kt,
				},
				group_chat_left_col_collapsed: {
					n: 13,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				group_chat_right_col_collapsed: {
					n: 14,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				in_one_on_one_voice_chat: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				in_group_voice_chat: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Yt.sm_m;
	}
	static MBF() {
		Yt.sm_mbf ||= i.w0(Yt.M());
		return Yt.sm_mbf;
	}
	toObject(e = false) {
		return Yt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Yt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Yt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Yt();
		return Yt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Yt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Yt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Yt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Yt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatUsability_ClientUsabilityMetrics_Notification_UIState";
	}
}
class Kt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Kt.prototype.in_game_collapsed) {
			i.Sg(Kt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Kt.sm_m ||= {
			proto: Kt,
			fields: {
				in_game_collapsed: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				online_collapsed: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				offline_collapsed: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				game_groups_collapsed: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				categories_collapsed: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return Kt.sm_m;
	}
	static MBF() {
		Kt.sm_mbf ||= i.w0(Kt.M());
		return Kt.sm_mbf;
	}
	toObject(e = false) {
		return Kt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Kt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Kt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Kt();
		return Kt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Kt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Kt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Kt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Kt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatUsability_ClientUsabilityMetrics_Notification_UIState_CategoryCollapseState";
	}
}
class Xt extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Xt.prototype.friends_count) {
			i.Sg(Xt.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Xt.sm_m ||= {
			proto: Xt,
			fields: {
				friends_count: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				friends_category_count: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				friends_categorized_count: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				friends_online_count: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				friends_in_game_count: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				friends_in_game_singleton_count: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				game_group_count: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				friends_favorite_count: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				group_chat_count: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				group_chat_favorite_count: {
					n: 10,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return Xt.sm_m;
	}
	static MBF() {
		Xt.sm_mbf ||= i.w0(Xt.M());
		return Xt.sm_mbf;
	}
	toObject(e = false) {
		return Xt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Xt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Xt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Xt();
		return Xt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Xt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Xt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Xt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Xt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CChatUsability_ClientUsabilityMetrics_Notification_Metrics";
	}
}
export var mf;
export var xP;
export var WA;
export var I0;
export var Or;
export var pB;
(function (e) {
	e.RequestFriendPersonaStates = function (e, t) {
		return e.SendMsg("Chat.RequestFriendPersonaStates#1", (0, a.I8)(ky, t), m, {
			ePrivilege: 1,
		});
	};
})((mf ||= {}));
(function (e) {
	e.CreateChatRoomGroup = function (e, t) {
		return e.SendMsg("ChatRoom.CreateChatRoomGroup#1", (0, a.I8)(SZ, t), A, {
			ePrivilege: 3,
		});
	};
	e.SaveChatRoomGroup = function (e, t) {
		return e.SendMsg("ChatRoom.SaveChatRoomGroup#1", (0, a.I8)(Nc, t), C, {
			ePrivilege: 3,
		});
	};
	e.RenameChatRoomGroup = function (e, t) {
		return e.SendMsg("ChatRoom.RenameChatRoomGroup#1", (0, a.I8)(yw, t), g, {
			ePrivilege: 3,
		});
	};
	e.SetChatRoomGroupTagline = function (e, t) {
		return e.SendMsg(
			"ChatRoom.SetChatRoomGroupTagline#1",
			(0, a.I8)(GQ, t),
			f,
			{
				ePrivilege: 3,
			},
		);
	};
	e.SetChatRoomGroupAvatar = function (e, t) {
		return e.SendMsg("ChatRoom.SetChatRoomGroupAvatar#1", (0, a.I8)(mV, t), y, {
			ePrivilege: 3,
		});
	};
	e.SetChatRoomGroupWatchingBroadcast = function (e, t) {
		return e.SendMsg(
			"ChatRoom.SetChatRoomGroupWatchingBroadcast#1",
			(0, a.I8)(O1, t),
			w,
			{
				ePrivilege: 3,
			},
		);
	};
	e.JoinMiniGameForChatRoomGroup = function (e, t) {
		return e.SendMsg(
			"ChatRoom.JoinMiniGameForChatRoomGroup#1",
			(0, a.I8)(B, t),
			v,
			{
				ePrivilege: 3,
			},
		);
	};
	e.EndMiniGameForChatRoomGroup = function (e, t) {
		return e.SendMsg(
			"ChatRoom.EndMiniGameForChatRoomGroup#1",
			(0, a.I8)(I, t),
			E,
			{
				ePrivilege: 3,
			},
		);
	};
	e.MuteUserInGroup = function (e, t) {
		return e.SendMsg("ChatRoom.MuteUserInGroup#1", (0, a.I8)(qw, t), T, {
			ePrivilege: 3,
		});
	};
	e.KickUserFromGroup = function (e, t) {
		return e.SendMsg("ChatRoom.KickUserFromGroup#1", (0, a.I8)(fC, t), k, {
			ePrivilege: 3,
		});
	};
	e.SetUserBanState = function (e, t) {
		return e.SendMsg("ChatRoom.SetUserBanState#1", (0, a.I8)(xZ, t), N, {
			ePrivilege: 3,
		});
	};
	e.RevokeInviteToGroup = function (e, t) {
		return e.SendMsg("ChatRoom.RevokeInviteToGroup#1", (0, a.I8)(HR, t), G, {
			ePrivilege: 1,
		});
	};
	e.CreateRole = function (e, t) {
		return e.SendMsg("ChatRoom.CreateRole#1", (0, a.I8)(uD, t), _z, {
			ePrivilege: 3,
		});
	};
	e.GetRoles = function (e, t) {
		return e.SendMsg("ChatRoom.GetRoles#1", (0, a.I8)(U, t), W, {
			ePrivilege: 1,
		});
	};
	e.RenameRole = function (e, t) {
		return e.SendMsg("ChatRoom.RenameRole#1", (0, a.I8)(Ud, t), H, {
			ePrivilege: 3,
		});
	};
	e.ReorderRole = function (e, t) {
		return e.SendMsg("ChatRoom.ReorderRole#1", (0, a.I8)(Tv, t), q, {
			ePrivilege: 3,
		});
	};
	e.DeleteRole = function (e, t) {
		return e.SendMsg("ChatRoom.DeleteRole#1", (0, a.I8)(lG, t), Z, {
			ePrivilege: 3,
		});
	};
	e.GetRoleActions = function (e, t) {
		return e.SendMsg("ChatRoom.GetRoleActions#1", (0, a.I8)(Y, t), K, {
			ePrivilege: 1,
		});
	};
	e.ReplaceRoleActions = function (e, t) {
		return e.SendMsg("ChatRoom.ReplaceRoleActions#1", (0, a.I8)(Lp, t), J, {
			ePrivilege: 3,
		});
	};
	e.AddRoleToUser = function (e, t) {
		return e.SendMsg("ChatRoom.AddRoleToUser#1", (0, a.I8)(ng, t), ee, {
			ePrivilege: 3,
		});
	};
	e.GetRolesForUser = function (e, t) {
		return e.SendMsg("ChatRoom.GetRolesForUser#1", (0, a.I8)(te, t), re, {
			ePrivilege: 1,
		});
	};
	e.DeleteRoleFromUser = function (e, t) {
		return e.SendMsg("ChatRoom.DeleteRoleFromUser#1", (0, a.I8)(Ig, t), ie, {
			ePrivilege: 3,
		});
	};
	e.JoinChatRoomGroup = function (e, t) {
		return e.SendMsg("ChatRoom.JoinChatRoomGroup#1", (0, a.I8)(c0, t), De, {
			ePrivilege: 3,
		});
	};
	e.InviteFriendToChatRoomGroup = function (e, t) {
		return e.SendMsg(
			"ChatRoom.InviteFriendToChatRoomGroup#1",
			(0, a.I8)(eb, t),
			Fe,
			{
				ePrivilege: 3,
			},
		);
	};
	e.LeaveChatRoomGroup = function (e, t) {
		return e.SendMsg("ChatRoom.LeaveChatRoomGroup#1", (0, a.I8)(rk, t), Oe, {
			ePrivilege: 1,
		});
	};
	e.CreateChatRoom = function (e, t) {
		return e.SendMsg("ChatRoom.CreateChatRoom#1", (0, a.I8)(N5, t), fe, {
			ePrivilege: 3,
		});
	};
	e.DeleteChatRoom = function (e, t) {
		return e.SendMsg("ChatRoom.DeleteChatRoom#1", (0, a.I8)(WS, t), ye, {
			ePrivilege: 3,
		});
	};
	e.RenameChatRoom = function (e, t) {
		return e.SendMsg("ChatRoom.RenameChatRoom#1", (0, a.I8)(zF, t), we, {
			ePrivilege: 3,
		});
	};
	e.ReorderChatRoom = function (e, t) {
		return e.SendMsg("ChatRoom.ReorderChatRoom#1", (0, a.I8)(wR, t), ve, {
			ePrivilege: 3,
		});
	};
	e.SendChatMessage = function (e, t) {
		return e.SendMsg("ChatRoom.SendChatMessage#1", (0, a.I8)(VU, t), Ve, {
			ePrivilege: 3,
		});
	};
	e.JoinVoiceChat = function (e, t) {
		return e.SendMsg("ChatRoom.JoinVoiceChat#1", (0, a.I8)(s8, t), Le, {
			ePrivilege: 3,
		});
	};
	e.LeaveVoiceChat = function (e, t) {
		return e.SendMsg("ChatRoom.LeaveVoiceChat#1", (0, a.I8)(z, t), xe, {
			ePrivilege: 1,
		});
	};
	e.GetMessageHistory = function (e, t) {
		return e.SendMsg("ChatRoom.GetMessageHistory#1", (0, a.I8)(vI, t), Ze, {
			ePrivilege: 3,
		});
	};
	e.GetMyChatRoomGroups = function (e, t) {
		return e.SendMsg("ChatRoom.GetMyChatRoomGroups#1", (0, a.I8)(Pv, t), Re, {
			ePrivilege: 1,
		});
	};
	e.GetChatRoomGroupState = function (e, t) {
		return e.SendMsg("ChatRoom.GetChatRoomGroupState#1", (0, a.I8)(Ee, t), Me, {
			ePrivilege: 3,
		});
	};
	e.GetChatRoomGroupSummary = function (e, t) {
		return e.SendMsg(
			"ChatRoom.GetChatRoomGroupSummary#1",
			(0, a.I8)(oe, t),
			le,
			{
				ePrivilege: 2,
			},
		);
	};
	e.SetAppChatRoomGroupForceActive = function (e, t) {
		return e.SendMsg(
			"ChatRoom.SetAppChatRoomGroupForceActive#1",
			(0, a.I8)(ce, t),
			me,
			{
				ePrivilege: 1,
			},
		);
	};
	e.SetAppChatRoomGroupStopForceActive = function (e, t) {
		return e.SendNotification(
			"ChatRoom.SetAppChatRoomGroupStopForceActive#1",
			(0, a.I8)(ue, t),
			{
				ePrivilege: 1,
			},
		);
	};
	e.AckChatMessage = function (e, t) {
		return e.SendNotification("ChatRoom.AckChatMessage#1", (0, a.I8)(MH, t), {
			ePrivilege: 1,
		});
	};
	e.CreateInviteLink = function (e, t) {
		return e.SendMsg("ChatRoom.CreateInviteLink#1", (0, a.I8)(RZ, t), tt, {
			ePrivilege: 3,
		});
	};
	e.GetInviteLinkInfo = function (e, t) {
		return e.SendMsg("ChatRoom.GetInviteLinkInfo#1", (0, a.I8)(NX, t), nt, {
			ePrivilege: 2,
		});
	};
	e.GetInviteInfo = function (e, t) {
		return e.SendMsg("ChatRoom.GetInviteInfo#1", (0, a.I8)(NF, t), at, {
			ePrivilege: 1,
		});
	};
	e.GetInviteLinksForGroup = function (e, t) {
		return e.SendMsg(
			"ChatRoom.GetInviteLinksForGroup#1",
			(0, a.I8)(IG, t),
			ot,
			{
				ePrivilege: 3,
			},
		);
	};
	e.GetBanList = function (e, t) {
		return e.SendMsg("ChatRoom.GetBanList#1", (0, a.I8)(ro, t), dt, {
			ePrivilege: 3,
		});
	};
	e.GetInviteList = function (e, t) {
		return e.SendMsg("ChatRoom.GetInviteList#1", (0, a.I8)(zw, t), ht, {
			ePrivilege: 3,
		});
	};
	e.DeleteInviteLink = function (e, t) {
		return e.SendMsg("ChatRoom.DeleteInviteLink#1", (0, a.I8)(mG, t), mt, {
			ePrivilege: 3,
		});
	};
	e.SetSessionActiveChatRoomGroups = function (e, t) {
		return e.SendMsg(
			"ChatRoom.SetSessionActiveChatRoomGroups#1",
			(0, a.I8)(Jw, t),
			_t,
			{
				ePrivilege: 1,
			},
		);
	};
	e.SetUserChatGroupPreferences = function (e, t) {
		return e.SendMsg(
			"ChatRoom.SetUserChatGroupPreferences#1",
			(0, a.I8)(gD, t),
			St,
			{
				ePrivilege: 1,
			},
		);
	};
	e.DeleteChatMessages = function (e, t) {
		return e.SendMsg("ChatRoom.DeleteChatMessages#1", (0, a.I8)(lr, t), vt, {
			ePrivilege: 1,
		});
	};
	e.UpdateMemberListView = function (e, t) {
		return e.SendNotification(
			"ChatRoom.UpdateMemberListView#1",
			(0, a.I8)(Cw, t),
			{
				ePrivilege: 1,
			},
		);
	};
	e.SearchMembers = function (e, t) {
		return e.SendMsg("ChatRoom.SearchMembers#1", (0, a.I8)(NQ, t), Rt, {
			ePrivilege: 1,
		});
	};
	e.UpdateMessageReaction = function (e, t) {
		return e.SendMsg("ChatRoom.UpdateMessageReaction#1", (0, a.I8)(kd, t), Nt, {
			ePrivilege: 1,
		});
	};
	e.GetMessageReactionReactors = function (e, t) {
		return e.SendMsg(
			"ChatRoom.GetMessageReactionReactors#1",
			(0, a.I8)(HZ, t),
			Ot,
			{
				ePrivilege: 1,
			},
		);
	};
})((xP ||= {}));
(function (e) {
	e.GetClanChatRoomInfo = function (e, t) {
		return e.SendMsg(
			"ClanChatRooms.GetClanChatRoomInfo#1",
			(0, a.I8)(AF, t),
			Lt,
			{
				ePrivilege: 2,
			},
		);
	};
	e.SetClanChatRoomPrivate = function (e, t) {
		return e.SendMsg(
			"ClanChatRooms.SetClanChatRoomPrivate#1",
			(0, a.I8)(zt, t),
			xt,
			{
				ePrivilege: 3,
			},
		);
	};
})((WA ||= {}));
(function (e) {
	e.NotifyIncomingChatMessageHandler = {
		name: "ChatRoomClient.NotifyIncomingChatMessage#1",
		request: He,
	};
	e.NotifyChatMessageModifiedHandler = {
		name: "ChatRoomClient.NotifyChatMessageModified#1",
		request: je,
	};
	e.NotifyMemberStateChangeHandler = {
		name: "ChatRoomClient.NotifyMemberStateChange#1",
		request: Xe,
	};
	e.NotifyChatRoomHeaderStateChangeHandler = {
		name: "ChatRoomClient.NotifyChatRoomHeaderStateChange#1",
		request: ae,
	};
	e.NotifyChatRoomGroupRoomsChangeHandler = {
		name: "ChatRoomClient.NotifyChatRoomGroupRoomsChange#1",
		request: Je,
	};
	e.NotifyShouldRejoinChatRoomVoiceChatHandler = {
		name: "ChatRoomClient.NotifyShouldRejoinChatRoomVoiceChat#1",
		request: Ue,
	};
	e.NotifyChatGroupUserStateChangedHandler = {
		name: "ChatRoomClient.NotifyChatGroupUserStateChanged#1",
		request: Ut,
	};
	e.NotifyAckChatMessageEchoHandler = {
		name: "ChatRoomClient.NotifyAckChatMessageEcho#1",
		request: MH,
	};
	e.NotifyChatRoomDisconnectHandler = {
		name: "ChatRoomClient.NotifyChatRoomDisconnect#1",
		request: Wt,
	};
	e.NotifyMemberListViewUpdatedHandler = {
		name: "ChatRoomClient.NotifyMemberListViewUpdated#1",
		request: Vt,
	};
	e.NotifyMessageReactionHandler = {
		name: "ChatRoomClient.NotifyMessageReaction#1",
		request: Ft,
	};
})((I0 ||= {}));
(function (e) {
	e.NotifyClientUsabilityMetrics = function (e, t) {
		return e.SendNotification(
			"ChatUsability.NotifyClientUsabilityMetrics#1",
			(0, a.I8)(L6, t),
			{
				ePrivilege: 1,
			},
		);
	};
})((Or ||= {}));
(function (e) {
	e.NotifyRequestClientUsabilityMetricsHandler = {
		name: "ChatUsabilityClient.NotifyRequestClientUsabilityMetrics#1",
		request: jt,
	};
})((pB ||= {}));
