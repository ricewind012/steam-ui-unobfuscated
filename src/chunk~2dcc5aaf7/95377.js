import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./44234.js";
import a, { I8 } from "./12176.js";
import s from "./18644.js";
import o from "./97838.js";
import l from "./91369.js";
import c from "./95773.js";
import m from "./8573.js";
import u from "./58663.js";
import d from "./48307.js";
import O from "./52451.js";
import P, { Gn, lB, mJ, sH, fm, z7 } from "./89193.js";
import "./72476.js";
import L from "./83599.js";
import te from "./36383.js";
import { s as s_1 } from "./81255.js";
import qe from "./6660.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import Ze from "./79769.js";
import Ye from "./49180.js";
export let HT = Ye.H;

const { Message } = u;

class p extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return p.toObject(e, this);
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
		return new p();
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_Ready_Notification";
	}
}
class g extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return g.toObject(e, this);
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
		return new g();
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_Active_Notification";
	}
}
class h extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return h.toObject(e, this);
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
		return new h();
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_Inactive_Notification";
	}
}
class C extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.chat_group_id) {
			d.Sg(C.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				chat_group_id: {
					n: 1,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				chat_room_id: {
					n: 2,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
			},
		};
		return C.sm_m;
	}
	static MBF() {
		C.sm_mbf ||= d.w0(C.M());
		return C.sm_mbf;
	}
	toObject(e = false) {
		return C.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(C.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(C.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(C.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(C.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_InitiateRoomChat_Request";
	}
}
class _ extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return _.toObject(e, this);
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
		return new _();
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_InitiateRoomChat_Response";
	}
}
class f extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.chat_group_id) {
			d.Sg(f.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				chat_group_id: {
					n: 1,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				chat_room_id: {
					n: 2,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
			},
		};
		return f.sm_m;
	}
	static MBF() {
		f.sm_mbf ||= d.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(f.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(f.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_ExitRoomChat_Request";
	}
}
class b extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return b.toObject(e, this);
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
		return new b();
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_ExitRoomChat_Response";
	}
}
class y extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.chat_group_id) {
			d.Sg(y.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				chat_group_id: {
					n: 1,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				chat_room_id: {
					n: 2,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				sender_accountid: {
					n: 3,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				timestamp: {
					n: 4,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				ordinal: {
					n: 5,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				message: {
					n: 6,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= d.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(y.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(y.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(y.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_NewGroupChatMsgAdded_Notification";
	}
}
class S extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.message_with_bbcode) {
			d.Sg(S.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				message_with_bbcode: {
					n: 1,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= d.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(S.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_SendGroupChatMessage_Request";
	}
}
class w extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new u.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_SendGroupChatMessage_Response";
	}
}
class B extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.profile_steamid) {
			d.Sg(B.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				profile_steamid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				avatar_type: {
					n: 2,
					br: d.qM.readEnum,
					bw: d.gp.writeEnum,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= d.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(B.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(B.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_GetAvatarUrl_Request";
	}
}
class v extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.profile_avatar_url) {
			d.Sg(v.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				profile_avatar_url: {
					n: 1,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return v.sm_m;
	}
	static MBF() {
		v.sm_mbf ||= d.w0(v.M());
		return v.sm_mbf;
	}
	toObject(e = false) {
		return v.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(v.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(v.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(v.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(v.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_GetAvatarUrl_Response";
	}
}
class I extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.send) {
			d.Sg(I.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				send: {
					n: 1,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				receive: {
					n: 2,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return I.sm_m;
	}
	static MBF() {
		I.sm_mbf ||= d.w0(I.M());
		return I.sm_mbf;
	}
	toObject(e = false) {
		return I.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(I.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(I.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(I.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(I.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_ConfigureVideo_Request";
	}
}
class E extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new u.BinaryReader(e);
		let r = new E();
		return E.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_ConfigureVideo_Response";
	}
}
class M extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.chat_group_id) {
			d.Sg(M.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				chat_group_id: {
					n: 1,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				chat_room_id: {
					n: 2,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
			},
		};
		return M.sm_m;
	}
	static MBF() {
		M.sm_mbf ||= d.w0(M.M());
		return M.sm_mbf;
	}
	toObject(e = false) {
		return M.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(M.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(M.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(M.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(M.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_SetDefaultSession_Notification";
	}
}
class T extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.accountid) {
			d.Sg(T.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				accountid: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				muted: {
					n: 2,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				gain: {
					n: 3,
					br: d.qM.readFloat,
					bw: d.gp.writeFloat,
				},
			},
		};
		return T.sm_m;
	}
	static MBF() {
		T.sm_mbf ||= d.w0(T.M());
		return T.sm_mbf;
	}
	toObject(e = false) {
		return T.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(T.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(T.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new T();
		return T.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(T.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(T.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_PerUserGainValue_Notification";
	}
}
class R extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.accountid) {
			d.Sg(R.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				accountid: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				mic_muted_locally: {
					n: 2,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				output_muted_locally: {
					n: 3,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return R.sm_m;
	}
	static MBF() {
		R.sm_mbf ||= d.w0(R.M());
		return R.sm_mbf;
	}
	toObject(e = false) {
		return R.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(R.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(R.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new R();
		return R.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(R.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(R.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_PerUserVoiceStatus_Notification";
	}
}
class k extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.accountid) {
			d.Sg(k.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				accountid: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				muted: {
					n: 2,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return k.sm_m;
	}
	static MBF() {
		k.sm_mbf ||= d.w0(k.M());
		return k.sm_mbf;
	}
	toObject(e = false) {
		return k.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(k.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(k.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new k();
		return k.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(k.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(k.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_SetPerUserMuting_Request";
	}
}
class D extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new u.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_SetPerUserMuting_Response";
	}
}
class N extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.accountid) {
			d.Sg(N.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				accountid: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				receive: {
					n: 2,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return N.sm_m;
	}
	static MBF() {
		N.sm_mbf ||= d.w0(N.M());
		return N.sm_mbf;
	}
	toObject(e = false) {
		return N.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(N.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(N.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new N();
		return N.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(N.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(N.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_SetPerUserVideo_Request";
	}
}
class F extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new u.BinaryReader(e);
		let r = new F();
		return F.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_SetPerUserVideo_Response";
	}
}
class G extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.name) {
			d.Sg(G.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				name: {
					n: 1,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return G.sm_m;
	}
	static MBF() {
		G.sm_mbf ||= d.w0(G.M());
		return G.sm_mbf;
	}
	toObject(e = false) {
		return G.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(G.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(G.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new G();
		return G.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(G.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(G.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VoiceChat_GroupName_Notification";
	}
}
class z {
	m_Supplier;
	m_Disposers = [];
	m_Session;
	m_GroupNameDisposer;
	m_SteamVRMsgHandlers = [];
	m_VoiceChatActiveStateChangedHandle;
	m_ChatGroupAddedHandle;
	m_NewChatMsgAddedHandles;
	Log = new L.wd("VR");
	constructor() {
		Gn(this);
	}
	SetSession(e) {
		if (this.m_Session) {
			c.xm.ChatStore.DecRefActiveChatRoomGroup(this.m_Session.groupID);
		}
		this.m_Session = e;
		if (this.m_Session) {
			c.xm.ChatStore.IncRefActiveChatRoomGroup(this.m_Session.groupID, true);
			this.m_VoiceChatActiveStateChangedHandle ||=
				this.m_Supplier?.RegisterForVoiceChatActiveStateChange(
					this.OnVoiceChatActiveStateChanged,
				);
		}
	}
	SendGroupName(e) {
		this.Log.Debug("Group: ", e);
		let t = new G();
		t.set_name(e);
		o.N.BSendMsg(32, t);
	}
	RegisterForNewChatMessages() {
		if (!this.m_Session) {
			this.Log.Debug("RegisterForNewChatMessages: session not set");
			return;
		}
		let e = c.xm.ChatStore.GetChatRoomGroup(this.m_Session.groupID);
		this.Log.Debug("RegisterForNewChatMessages: ", e);
		this.m_NewChatMsgAddedHandles = e?.textRoomList.map((e) =>
			e.RegisterOnNewChatMsgAdded(this.OnNewChatMsgAdded),
		);
		if (e) {
			this.SendGroupName(e.name);
			this.m_GroupNameDisposer = lB(e, "name", (e) =>
				this.SendGroupName(e.newValue),
			);
		}
	}
	UnregisterForNewChatMessages() {
		this.Log.Debug("UnregisterForNewChatMessages: ", this);
		this.m_NewChatMsgAddedHandles?.map((e) => e.Unregister());
		this.m_NewChatMsgAddedHandles = undefined;
		if (this.m_GroupNameDisposer) {
			this.m_GroupNameDisposer();
			this.m_GroupNameDisposer = undefined;
		}
	}
	ClearCurrentSession() {
		this.Log.Debug("ClearCurrentSession: ", this);
		if (this.m_Session) {
			this.SetSession(undefined);
			this.m_Supplier?.OnUserEndVoiceChat();
		}
	}
	OnDisconnect() {
		this.Log.Debug("OnDisconnect: ", this);
		this.ClearCurrentSession();
		this.m_VoiceChatActiveStateChangedHandle?.Unregister();
		this.m_VoiceChatActiveStateChangedHandle = undefined;
		this.m_ChatGroupAddedHandle?.Unregister();
		this.m_ChatGroupAddedHandle = undefined;
		this.UnregisterForNewChatMessages();
	}
	OnInitiateRoomChat(e, t) {
		this.m_Supplier?.SetVoiceLogDetails(true);
		this.ClearCurrentSession();
		const r = e.chat_group_id();
		const n = e.chat_room_id();
		this.SetSession({
			groupID: r,
			roomID: n,
		});
		this.Log.Debug("OnInitiateRoomChat: ", this.m_Session);
		this.m_Supplier?.InitiateRoomChat(r, n);
		let i = new _();
		o.N.BSendMsg(11, i, t);
	}
	OnExitRoomChat(e, t) {
		this.Log.Debug("OnExitRoomChat: ", this);
		if (this.m_Session) {
			this.SetSession(undefined);
			this.m_Supplier?.OnUserEndVoiceChat();
		}
		let r = new b();
		o.N.BSendMsg(13, r, t);
	}
	OnChatGroupAdded(e) {
		this.Log.Debug("OnChatGroupAdded: ", e);
		if (this.m_Session.groupID == e.GetGroupID()) {
			this.UnregisterForNewChatMessages();
			this.RegisterForNewChatMessages();
		}
	}
	OnVoiceChatActiveStateChanged(e) {
		this.Log.Debug("OnVoiceChatActiveStateChanged: ", e);
		this.UnregisterForNewChatMessages();
		this.m_ChatGroupAddedHandle?.Unregister();
		this.m_ChatGroupAddedHandle = undefined;
		if (e) {
			this.RegisterForNewChatMessages();
			this.m_ChatGroupAddedHandle = c.xm.ChatStore.RegisterForGroupAdded(
				this.OnChatGroupAdded,
			);
			let e = new g();
			o.N.BSendMsg(21, e);
		} else {
			let e = new h();
			o.N.BSendMsg(22, e);
		}
	}
	OnNewChatMsgAdded(e, t, r, n, i, a) {
		this.Log.Debug("OnNewChatMsgAdded: ", e, t, r, n, i, a);
		let s = new y();
		s.set_chat_group_id(e);
		s.set_chat_room_id(t);
		s.set_sender_accountid(r);
		s.set_timestamp(n);
		s.set_ordinal(i);
		s.set_message(a);
		o.N.BSendMsg(18, s);
	}
	async OnGetAvatarUrl(e, t) {
		let r = e.profile_steamid();
		let n = await this.m_Supplier.GetPersonaState(r);
		let i = "";
		switch (e.avatar_type()) {
			case 0: {
				i = n?.avatar_url;
				break;
			}
			case 1: {
				i = n?.avatar_url_medium;
				break;
			}
			case 2: {
				i = n?.avatar_url_full;
			}
		}
		let a = new v();
		a.set_profile_avatar_url(i);
		o.N.BSendMsg(17, a, t);
	}
	async OnSendGroupChatMessage(e, t) {
		if (this.m_Session) {
			const t = c.xm.ChatStore.GetChatRoomGroup(this.m_Session.groupID);
			if (t) {
				const r = t.textRoomList;
				if (r.length > 0) {
					const t = r[0];
					const n = e.message_with_bbcode();
					await t.SendChatMessage(n);
				}
			}
		}
		let r = new w();
		o.N.BSendMsg(20, r, t);
	}
	async OnConfigureVideo(e, t) {
		this.m_Supplier?.ConfigureVideo(e.send(), e.receive());
		let r = new E();
		o.N.BSendMsg(24, r, t);
	}
	OnSetPerUserMuting(e, t) {
		this.m_Supplier?.SetPerUserMuting(e.accountid(), e.muted());
		let r = new D();
		o.N.BSendMsg(31, r, t);
	}
	OnSetPerUserVideo(e, t) {
		this.m_Supplier?.SetReceivingVideo(e.accountid(), e.receive());
		let r = new F();
		o.N.BSendMsg(39, r, t);
	}
	OnSetSpatialAudioListener(e) {
		0;
	}
	OnSetSpatialAudioSource(e) {
		0;
	}
	OnAddPerUserGainLevel(e, t) {
		let r = new T();
		r.set_accountid(e);
		r.set_muted(t.muted);
		r.set_gain(t.gain);
		o.N.BSendMsg(28, r);
		this.m_Disposers.push(
			mJ(
				() => t.muted,
				(e) => {
					r.set_muted(e);
					o.N.BSendMsg(28, r);
				},
			),
		);
		this.m_Disposers.push(
			mJ(
				() => t.gain,
				(e) => {
					r.set_gain(e);
					o.N.BSendMsg(28, r);
				},
			),
		);
	}
	OnAddPerUserVoiceStatus(e, t) {
		let r = new R();
		r.set_accountid(e);
		r.set_mic_muted_locally(t.mic_muted_locally);
		r.set_output_muted_locally(t.output_muted_locally);
		o.N.BSendMsg(29, r);
		this.m_Disposers.push(
			mJ(
				() => t.mic_muted_locally,
				(e) => {
					r.set_mic_muted_locally(e);
					o.N.BSendMsg(29, r);
				},
			),
		);
		this.m_Disposers.push(
			mJ(
				() => t.output_muted_locally,
				(e) => {
					r.set_output_muted_locally(e);
					o.N.BSendMsg(29, r);
				},
			),
		);
	}
	OnAddRemoteVideoStream(e, t) {
		if (o.N.IsConnected()) {
			l.p.SteamVR.RemoteVideoStream({
				source_accountid: e,
				video_uniqueid: t,
			});
		}
	}
	set Supplier(e) {
		this.Log.Debug("Supplier: ", e, this);
		if (
			this.m_Supplier != e &&
			((this.m_Supplier = e),
			this.m_Disposers.forEach((e) => e()),
			(this.m_Disposers.length = 0),
			this.m_SteamVRMsgHandlers.forEach((e) => e.Unregister()),
			(this.m_SteamVRMsgHandlers.length = 0),
			e)
		) {
			this.m_Disposers.push(
				lB(e.GetPerUserGainLevels(), (e) => {
					if (e.type === "add") {
						this.OnAddPerUserGainLevel(e.name, e.newValue);
					}
				}),
			);
			this.m_Disposers.push(
				lB(e.GetPerUserVoiceStatus(), (e) => {
					if (e.type === "add") {
						this.OnAddPerUserVoiceStatus(e.name, e.newValue);
					}
				}),
			);
			e.GetPerUserGainLevels().forEach((e, t) =>
				this.OnAddPerUserGainLevel(t, e),
			);
			e.GetPerUserVoiceStatus().forEach((e, t) =>
				this.OnAddPerUserVoiceStatus(t, e),
			);
			this.m_SteamVRMsgHandlers.push(
				o.N.RegisterOnDisconnect(this.OnDisconnect),
			);
			this.m_SteamVRMsgHandlers.push(
				o.N.RegisterOnMsg(10, C, this.OnInitiateRoomChat),
			);
			this.m_SteamVRMsgHandlers.push(
				o.N.RegisterOnMsg(12, f, this.OnExitRoomChat),
			);
			this.m_SteamVRMsgHandlers.push(
				o.N.RegisterOnMsg(16, B, this.OnGetAvatarUrl),
			);
			this.m_SteamVRMsgHandlers.push(
				o.N.RegisterOnMsg(19, S, this.OnSendGroupChatMessage),
			);
			this.m_SteamVRMsgHandlers.push(
				o.N.RegisterOnMsg(23, I, this.OnConfigureVideo),
			);
			this.m_SteamVRMsgHandlers.push(
				o.N.RegisterOnMsg(30, k, this.OnSetPerUserMuting),
			);
			this.m_SteamVRMsgHandlers.push(
				o.N.RegisterOnMsg(38, N, this.OnSetPerUserVideo),
			);
			let t = new p();
			o.N.BSendMsg(37, t);
		}
	}
	get session() {
		return this.m_Session;
	}
	set session(e) {
		this.Log.Debug("session: ", e, this);
		e ||= {
			groupID: "0",
			roomID: "0",
		};
		if (
			this.m_Session &&
			this.m_Session.groupID == e.groupID &&
			this.m_Session.roomID == e.roomID
		) {
			return;
		}
		this.SetSession(e);
		let t = new M();
		t.set_chat_group_id(e.groupID);
		t.set_chat_room_id(e.roomID);
		o.N.BSendMsg(25, t);
	}
}
Cg([O.oI], z.prototype, "OnDisconnect", null);
Cg([O.oI], z.prototype, "OnInitiateRoomChat", null);
Cg([O.oI], z.prototype, "OnExitRoomChat", null);
Cg([O.oI], z.prototype, "OnChatGroupAdded", null);
Cg([O.oI], z.prototype, "OnVoiceChatActiveStateChanged", null);
Cg([O.oI], z.prototype, "OnNewChatMsgAdded", null);
Cg([O.oI], z.prototype, "OnGetAvatarUrl", null);
Cg([O.oI], z.prototype, "OnSendGroupChatMessage", null);
Cg([O.oI], z.prototype, "OnConfigureVideo", null);
Cg([O.oI], z.prototype, "OnSetPerUserMuting", null);
Cg([O.oI], z.prototype, "OnSetPerUserVideo", null);
Cg([P.XI.bound], z.prototype, "OnSetSpatialAudioListener", null);
Cg([P.XI.bound], z.prototype, "OnSetSpatialAudioSource", null);
let x = new z();
class W extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return W.toObject(e, this);
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
		return new W();
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new W();
		return W.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_WebRTC_Active_Notification";
	}
}
class V extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return V.toObject(e, this);
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
		return new V();
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new V();
		return V.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_WebRTC_Inactive_Notification";
	}
}
class H extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H.prototype.label) {
			d.Sg(H.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H.sm_m ||= {
			proto: H,
			fields: {
				label: {
					n: 1,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				ordered: {
					n: 2,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				max_retransmits: {
					n: 3,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				max_packet_life_time: {
					n: 4,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return H.sm_m;
	}
	static MBF() {
		H.sm_mbf ||= d.w0(H.M());
		return H.sm_mbf;
	}
	toObject(e = false) {
		return H.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(H.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(H.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new H();
		return H.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(H.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(H.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_WebRTC_CreateDataChannel_Request";
	}
}
class j extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!j.prototype.channel_id) {
			d.Sg(j.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		j.sm_m ||= {
			proto: j,
			fields: {
				channel_id: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return j.sm_m;
	}
	static MBF() {
		j.sm_mbf ||= d.w0(j.M());
		return j.sm_mbf;
	}
	toObject(e = false) {
		return j.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(j.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(j.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new j();
		return j.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(j.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(j.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_WebRTC_CreateDataChannel_Response";
	}
}
class q extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.channel_id) {
			d.Sg(q.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				channel_id: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return q.sm_m;
	}
	static MBF() {
		q.sm_mbf ||= d.w0(q.M());
		return q.sm_mbf;
	}
	toObject(e = false) {
		return q.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(q.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new q();
		return q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(q.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(q.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_WebRTC_CloseDataChannel_Request";
	}
}
class Q extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new u.BinaryReader(e);
		let r = new Q();
		return Q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_WebRTC_CloseDataChannel_Response";
	}
}
class Z extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z.prototype.source_steamid) {
			d.Sg(Z.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z.sm_m ||= {
			proto: Z,
			fields: {
				source_steamid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				channel_id: {
					n: 2,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				label: {
					n: 3,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return Z.sm_m;
	}
	static MBF() {
		Z.sm_mbf ||= d.w0(Z.M());
		return Z.sm_mbf;
	}
	toObject(e = false) {
		return Z.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Z.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Z();
		return Z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Z.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Z.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_WebRTC_OnDataChannel_Notification";
	}
}
class Y extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.channel_id) {
			d.Sg(Y.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Y.sm_m ||= {
			proto: Y,
			fields: {
				channel_id: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return Y.sm_m;
	}
	static MBF() {
		Y.sm_mbf ||= d.w0(Y.M());
		return Y.sm_mbf;
	}
	toObject(e = false) {
		return Y.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Y.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Y();
		return Y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Y.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Y.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_WebRTC_DataChannel_Open_Notification";
	}
}
class K extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K.prototype.channel_id) {
			d.Sg(K.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		K.sm_m ||= {
			proto: K,
			fields: {
				channel_id: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return K.sm_m;
	}
	static MBF() {
		K.sm_mbf ||= d.w0(K.M());
		return K.sm_mbf;
	}
	toObject(e = false) {
		return K.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(K.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(K.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new K();
		return K.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(K.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(K.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_WebRTC_DataChannel_Close_Notification";
	}
}
class X extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!X.prototype.channel_id) {
			d.Sg(X.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		X.sm_m ||= {
			proto: X,
			fields: {
				channel_id: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				reason: {
					n: 2,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return X.sm_m;
	}
	static MBF() {
		X.sm_mbf ||= d.w0(X.M());
		return X.sm_mbf;
	}
	toObject(e = false) {
		return X.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(X.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(X.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new X();
		return X.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(X.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(X.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_WebRTC_DataChannel_Error_Notification";
	}
}
class J extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!J.prototype.channel_id) {
			d.Sg(J.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		J.sm_m ||= {
			proto: J,
			fields: {
				channel_id: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				data: {
					n: 2,
					br: d.qM.readBytes,
					bw: d.gp.writeBytes,
				},
			},
		};
		return J.sm_m;
	}
	static MBF() {
		J.sm_mbf ||= d.w0(J.M());
		return J.sm_mbf;
	}
	toObject(e = false) {
		return J.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(J.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(J.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new J();
		return J.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(J.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(J.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_WebRTC_DataChannel_Message_Notification";
	}
}
class $ {
	m_Supplier;
	m_Disposer;
	m_PeerConnection;
	m_DataChannels = new Array();
	m_OpenChannels = new Map();
	m_NextChannelId = 0;
	m_DisconnectHandle;
	m_CloseDataChannelHandle;
	m_CreateDataChannelHandle;
	m_DataChannelMessageHandle;
	m_DataChannelCloseHandle;
	m_StatsTimeout = 0;
	m_mapChannelStats = new Map();
	Log = new L.wd("VRWebRTC");
	constructor() {
		Gn(this);
	}
	PadOutput(e, t, r = undefined) {
		if (Math.abs(t) <= e.length) {
			return e;
		}
		let n = Math.max(Math.abs(t) - e.length || 0, 0);
		let i = Array(n + 1).join(String(r || " ").charAt(0));
		if (t < 0) {
			return i + e;
		} else {
			return e + i;
		}
	}
	ProcessStatsReport() {
		this.m_StatsTimeout = SetBackgroundTimeout(this.ProcessStatsReport, 10000);
		if (this.m_mapChannelStats.size != 0) {
			this.Log.Debug("Channel | Bytes Sent | Bytes Received");
			this.m_mapChannelStats.forEach((e, t) => {
				this.Log.Debug(
					`${this.PadOutput(t.toString(), 7)} | ${this.PadOutput(
						e.bytesSent.toString(),
						10,
					)} | ${this.PadOutput(e.bytesReceived.toString(), 14)}`,
				);
			});
			this.m_mapChannelStats.clear();
		}
	}
	BSendData(e, t) {
		let r = new J();
		r.set_channel_id(e);
		r.set_data(t);
		return o.N.BSendMsg(9, r);
	}
	SetupChannel(e, t, r) {
		this.Log.Debug(`OnDataChannel[${t}]:${e?.label}: ${r}`);
		e.onopen = () => this.OnDataChannelOpen(e, t);
		e.onclose = () => this.OnDataChannelClose(e, t);
		e.onerror = (r) => this.OnDataChannelError(r.error, e, t);
		e.binaryType = "arraybuffer";
		e.onmessage = (e) => {
			if (typeof e.data == "string") {
				let r = new X();
				r.set_channel_id(t);
				r.set_reason(e.data);
				o.N.BSendMsg(8, r);
				return;
			}
			this.BSendData(t, e.data);
			let r = this.m_mapChannelStats.get(t);
			if (r) {
				r.bytesReceived += e.data.byteLength;
			} else {
				this.m_mapChannelStats.set(t, {
					bytesSent: 0,
					bytesReceived: e.data.byteLength,
				});
			}
		};
	}
	OnDataChannel(e) {
		let t = this.m_NextChannelId++;
		const r = e.channel;
		let n;
		let i;
		this.SetupChannel(r, t, "remote");
		let a = r.label.lastIndexOf("[");
		if (a != -1) {
			i = r.label.slice(0, a);
			n = r.label.slice(a);
		} else {
			i = r.label;
		}
		let s = new Z();
		s.set_channel_id(t);
		s.set_label(i);
		s.set_source_steamid(m.b.InitFromString(n).ConvertTo64BitString());
		o.N.BSendMsg(5, s);
	}
	OnDataChannelMessage(e) {
		let t = e.channel_id();
		let r = this.m_OpenChannels.get(t);
		if (!r) {
			this.Log.Debug(`OnDataChannelMessage[${t}]: Not open`);
			return;
		}
		if (r.readyState != "open") {
			this.Log.Debug(
				`OnDataChannelMessage[${t}]:${r.label}: readyState=${r.readyState}`,
			);
			return;
		}
		let n = e.data();
		r.send(n);
		let i = this.m_mapChannelStats.get(t);
		if (i) {
			i.bytesSent += n.length;
		} else {
			this.m_mapChannelStats.set(t, {
				bytesSent: n.length,
				bytesReceived: 0,
			});
		}
	}
	OnCloseDataChannel(e, t) {
		let r = e.channel_id();
		this.m_DataChannels = this.m_DataChannels.filter(
			(e) => e.id !== r || (e.channel?.close(), false),
		);
		let n = new Q();
		o.N.BSendMsg(4, n, t);
	}
	OnCreateDataChannel(e, t) {
		let r = {
			id: this.m_NextChannelId++,
			label: e.label(),
			options: {
				ordered: e.ordered(),
				maxRetransmits: e.max_retransmits(),
				maxPacketLifeTime: e.max_packet_life_time(),
			},
		};
		this.m_DataChannels.push(r);
		if (this.m_PeerConnection) {
			if (this.m_Supplier.BSupportsDataChannels()) {
				this.CreateDataChannel(r);
			} else {
				this.m_Supplier.RenegotiateSDP();
			}
		}
		let n = new j();
		n.set_channel_id(r.id);
		o.N.BSendMsg(2, n, t);
	}
	OnDataChannelOpen(e, t) {
		this.Log.Debug(`OnDataChannelOpen[${t}]${e?.label}`);
		this.m_OpenChannels.set(t, e);
		this.m_DataChannelCloseHandle ||= o.N.RegisterOnMsg(7, K, () => {});
		let r = new Y();
		r.set_channel_id(t);
		o.N.BSendMsg(6, r);
	}
	OnDataChannelClose(e, t) {
		this.Log.Debug(`OnDataChannelClose[${t}]${e?.label}`);
		this.m_OpenChannels.delete(t);
		let r = new K();
		r.set_channel_id(t);
		o.N.BSendMsg(7, r);
		if (this.m_OpenChannels.size == 0 && this.m_DataChannelCloseHandle) {
			this.m_DataChannelCloseHandle.Unregister();
			this.m_DataChannelCloseHandle = undefined;
		}
	}
	OnDataChannelError(e, t, r) {
		this.Log.Debug(`OnDataChannelError[${r}]${t?.label}: ${e}`);
		const n = `{ message: ${e.message}${
			e.errorDetail ? `, errorDetail: ${e.errorDetail}` : ""
		}${e.sctpCauseCode ? `, sctpCauseCode: ${e.sctpCauseCode}` : ""}${
			e.sdpLineNumber ? `, sdpLineNumber: ${e.sdpLineNumber}` : ""
		}${e.receivedAlert ? `, receivedAlert: ${e.receivedAlert}` : ""}${
			e.sentAlert ? `, sentAlert: ${e.sentAlert}` : ""
		} }`;
		let i = new X();
		i.set_channel_id(r);
		i.set_reason(n);
		o.N.BSendMsg(8, i);
	}
	OnDisconnect() {
		this.m_DataChannels.forEach((e) => e.channel?.close());
		this.m_DataChannels.length = 0;
		if (this.m_Supplier?.BSupportsDataChannels()) {
			this.m_Supplier.RenegotiateSDP();
		}
	}
	CreateDataChannel(e) {
		try {
			e.channel = this.m_PeerConnection.createDataChannel(e.label, e.options);
		} catch (t) {
			this.Log.Debug("CreateDataChannel:", t, e);
		}
		this.SetupChannel(e.channel, e.id, "local");
	}
	SetPeerConnection(e) {
		if (this.m_PeerConnection != e) {
			this.Log.Debug("SetPeerConnection:", this, e);
			if (!e) {
				this.m_PeerConnection.ondatachannel = undefined;
				this.m_DataChannels.forEach((e) => e.channel?.close());
				ClearBackgroundTimeout(this.m_StatsTimeout);
				this.m_StatsTimeout = 0;
			}
			this.m_PeerConnection = e;
			if (this.m_PeerConnection) {
				this.m_DataChannels.forEach((e) => this.CreateDataChannel(e));
				this.m_PeerConnection.ondatachannel = this.OnDataChannel;
				this.m_StatsTimeout = SetBackgroundTimeout(
					this.ProcessStatsReport,
					10000,
				);
			}
		}
	}
	set ActiveDataChannelSupplier(e) {
		if (this.m_Supplier != e && (!e || o.N.IsConnected())) {
			this.m_Supplier = e;
			if (this.m_Disposer) {
				this.m_Disposer();
				this.m_Disposer = undefined;
			}
			this.m_DisconnectHandle?.Unregister();
			this.m_CloseDataChannelHandle?.Unregister();
			this.m_CreateDataChannelHandle?.Unregister();
			this.m_DataChannelMessageHandle?.Unregister();
			if (e) {
				this.m_Disposer = lB(e, "m_PeerConnection", (e) =>
					this.SetPeerConnection(e.newValue),
				);
				this.m_DisconnectHandle = o.N.RegisterOnDisconnect(this.OnDisconnect);
				this.m_CloseDataChannelHandle = o.N.RegisterOnMsg(
					3,
					q,
					this.OnCloseDataChannel,
				);
				this.m_CreateDataChannelHandle = o.N.RegisterOnMsg(
					1,
					H,
					this.OnCreateDataChannel,
				);
				this.m_DataChannelMessageHandle = o.N.RegisterOnMsg(
					9,
					J,
					this.OnDataChannelMessage,
				);
				let t = new W();
				o.N.BSendMsg(14, t);
			} else {
				let e = new V();
				o.N.BSendMsg(15, e);
				this.SetPeerConnection(undefined);
				this.m_DataChannels.length = 0;
				this.m_CloseDataChannelHandle = undefined;
				this.m_CreateDataChannelHandle = undefined;
				this.m_DataChannelMessageHandle = undefined;
			}
		}
	}
	BHasDataChannels() {
		return this.m_DataChannels.length > 0;
	}
}
Cg([P.XI.bound], $.prototype, "ProcessStatsReport", null);
Cg([P.XI.bound], $.prototype, "OnDataChannel", null);
Cg([P.XI.bound], $.prototype, "OnDataChannelMessage", null);
Cg([P.XI.bound], $.prototype, "OnCloseDataChannel", null);
Cg([P.XI.bound], $.prototype, "OnCreateDataChannel", null);
Cg([P.XI.bound], $.prototype, "OnDataChannelOpen", null);
Cg([P.XI.bound], $.prototype, "OnDataChannelClose", null);
Cg([P.XI.bound], $.prototype, "OnDataChannelError", null);
Cg([P.XI.bound], $.prototype, "OnDisconnect", null);
let ee = new $();
class ne extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ne.prototype.steamid_partner) {
			d.Sg(ne.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ne.sm_m ||= {
			proto: ne,
			fields: {
				steamid_partner: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
			},
		};
		return ne.sm_m;
	}
	static MBF() {
		ne.sm_mbf ||= d.w0(ne.M());
		return ne.sm_mbf;
	}
	toObject(e = false) {
		return ne.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(ne.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(ne.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new ne();
		return ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(ne.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(ne.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_RequestOneOnOneChat_Request";
	}
}
class ie extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ie.prototype.voice_chatid) {
			d.Sg(ie.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ie.sm_m ||= {
			proto: ie,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
			},
		};
		return ie.sm_m;
	}
	static MBF() {
		ie.sm_mbf ||= d.w0(ie.M());
		return ie.sm_mbf;
	}
	toObject(e = false) {
		return ie.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(ie.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(ie.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new ie();
		return ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(ie.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(ie.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_RequestOneOnOneChat_Response";
	}
}
class ae extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ae.prototype.voice_chatid) {
			d.Sg(ae.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ae.sm_m ||= {
			proto: ae,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				steamid_partner: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
			},
		};
		return ae.sm_m;
	}
	static MBF() {
		ae.sm_mbf ||= d.w0(ae.M());
		return ae.sm_mbf;
	}
	toObject(e = false) {
		return ae.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(ae.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(ae.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new ae();
		return ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(ae.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(ae.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_OneOnOneChatRequested_Notification";
	}
}
class se extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!se.prototype.voice_chatid) {
			d.Sg(se.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		se.sm_m ||= {
			proto: se,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				steamid_partner: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				accepted_request: {
					n: 3,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return se.sm_m;
	}
	static MBF() {
		se.sm_mbf ||= d.w0(se.M());
		return se.sm_mbf;
	}
	toObject(e = false) {
		return se.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(se.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(se.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new se();
		return se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(se.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(se.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_AnswerOneOnOneChat_Request";
	}
}
class oe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new u.BinaryReader(e);
		let r = new oe();
		return oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_AnswerOneOnOneChat_Response";
	}
}
class le extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!le.prototype.voicechat_id) {
			d.Sg(le.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		le.sm_m ||= {
			proto: le,
			fields: {
				voicechat_id: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				steamid_partner: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				accepted_request: {
					n: 3,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return le.sm_m;
	}
	static MBF() {
		le.sm_mbf ||= d.w0(le.M());
		return le.sm_mbf;
	}
	toObject(e = false) {
		return le.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(le.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(le.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new le();
		return le.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(le.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(le.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_OneOnOneChatRequestResponse_Notification";
	}
}
class ce extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ce.prototype.steamid_partner) {
			d.Sg(ce.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ce.sm_m ||= {
			proto: ce,
			fields: {
				steamid_partner: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
			},
		};
		return ce.sm_m;
	}
	static MBF() {
		ce.sm_mbf ||= d.w0(ce.M());
		return ce.sm_mbf;
	}
	toObject(e = false) {
		return ce.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(ce.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(ce.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new ce();
		return ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(ce.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(ce.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_EndOneOnOneChat_Request";
	}
}
class me extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return me.toObject(e, this);
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
		return new me();
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new me();
		return me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_EndOneOnOneChat_Response";
	}
}
class ue extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ue.prototype.steamid_partner) {
			d.Sg(ue.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ue.sm_m ||= {
			proto: ue,
			fields: {
				steamid_partner: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				voice_chatid: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
			},
		};
		return ue.sm_m;
	}
	static MBF() {
		ue.sm_mbf ||= d.w0(ue.M());
		return ue.sm_mbf;
	}
	toObject(e = false) {
		return ue.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(ue.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(ue.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new ue();
		return ue.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(ue.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(ue.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_LeaveOneOnOneChat_Request";
	}
}
class de extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return de.toObject(e, this);
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
		return new de();
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new de();
		return de.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_LeaveOneOnOneChat_Response";
	}
}
class Ae extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ae.prototype.voice_chatid) {
			d.Sg(Ae.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ae.sm_m ||= {
			proto: Ae,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				user_steamid: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				chatid: {
					n: 3,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				one_on_one_steamid_lower: {
					n: 4,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				one_on_one_steamid_higher: {
					n: 5,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				chat_group_id: {
					n: 6,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				user_sessionid: {
					n: 7,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return Ae.sm_m;
	}
	static MBF() {
		Ae.sm_mbf ||= d.w0(Ae.M());
		return Ae.sm_mbf;
	}
	toObject(e = false) {
		return Ae.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Ae.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Ae.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Ae();
		return Ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Ae.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Ae.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_UserJoinedVoiceChat_Notification";
	}
}
class pe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pe.prototype.voice_chatid) {
			d.Sg(pe.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pe.sm_m ||= {
			proto: pe,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				user_steamid: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				user_muted_mic_locally: {
					n: 3,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				user_muted_output_locally: {
					n: 4,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				user_has_no_mic_for_session: {
					n: 5,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				user_webaudio_sample_rate: {
					n: 6,
					br: d.qM.readInt32,
					bw: d.gp.writeInt32,
				},
				user_sends_video: {
					n: 7,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return pe.sm_m;
	}
	static MBF() {
		pe.sm_mbf ||= d.w0(pe.M());
		return pe.sm_mbf;
	}
	toObject(e = false) {
		return pe.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(pe.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(pe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new pe();
		return pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(pe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(pe.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_UserVoiceStatus_Notification";
	}
}
class ge extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ge.prototype.voice_chatid) {
			d.Sg(ge.M());
		}
		Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ge.sm_m ||= {
			proto: ge,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				users: {
					n: 2,
					c: pe,
					r: true,
					q: true,
				},
			},
		};
		return ge.sm_m;
	}
	static MBF() {
		ge.sm_mbf ||= d.w0(ge.M());
		return ge.sm_mbf;
	}
	toObject(e = false) {
		return ge.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(ge.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(ge.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new ge();
		return ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(ge.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(ge.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_AllMembersStatus_Notification";
	}
}
class he extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!he.prototype.voice_chatid) {
			d.Sg(he.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		he.sm_m ||= {
			proto: he,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				ip_webrtc_server: {
					n: 2,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				port_webrtc_server: {
					n: 3,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				ip_webrtc_client: {
					n: 4,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				port_webrtc_client: {
					n: 5,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				ssrc_my_sending_stream: {
					n: 6,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				user_agent: {
					n: 7,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				has_audio_worklets_support: {
					n: 8,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				has_webrtc_data_channel: {
					n: 9,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				accepts_webrtc_video: {
					n: 10,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				sends_webrtc_video: {
					n: 11,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return he.sm_m;
	}
	static MBF() {
		he.sm_mbf ||= d.w0(he.M());
		return he.sm_mbf;
	}
	toObject(e = false) {
		return he.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(he.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(he.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new he();
		return he.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(he.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(he.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_UpdateVoiceChatWebRTCData_Request";
	}
}
class Ce extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ce.prototype.send_client_voice_logs) {
			d.Sg(Ce.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ce.sm_m ||= {
			proto: Ce,
			fields: {
				send_client_voice_logs: {
					n: 1,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return Ce.sm_m;
	}
	static MBF() {
		Ce.sm_mbf ||= d.w0(Ce.M());
		return Ce.sm_mbf;
	}
	toObject(e = false) {
		return Ce.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Ce.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Ce.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Ce();
		return Ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Ce.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Ce.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_UpdateVoiceChatWebRTCData_Response";
	}
}
class _e extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_e.prototype.voice_chatid) {
			d.Sg(_e.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_e.sm_m ||= {
			proto: _e,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				user_steamid: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				accept_webrtc_video: {
					n: 3,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return _e.sm_m;
	}
	static MBF() {
		_e.sm_mbf ||= d.w0(_e.M());
		return _e.sm_mbf;
	}
	toObject(e = false) {
		return _e.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(_e.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(_e.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new _e();
		return _e.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(_e.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(_e.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_UpdateUserVideoStatus_Request";
	}
}
class fe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return fe.toObject(e, this);
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
		return new fe();
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new fe();
		return fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_UpdateUserVideoStatus_Response";
	}
}
class be extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!be.prototype.voice_chatid) {
			d.Sg(be.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		be.sm_m ||= {
			proto: be,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				client_voice_logs_new_lines: {
					n: 2,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return be.sm_m;
	}
	static MBF() {
		be.sm_mbf ||= d.w0(be.M());
		return be.sm_mbf;
	}
	toObject(e = false) {
		return be.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(be.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(be.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new be();
		return be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(be.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(be.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_UploadClientVoiceChatLogs_Request";
	}
}
class ye extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new u.BinaryReader(e);
		let r = new ye();
		return ye.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_UploadClientVoiceChatLogs_Response";
	}
}
class Se extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Se.prototype.voice_chatid) {
			d.Sg(Se.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Se.sm_m ||= {
			proto: Se,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
			},
		};
		return Se.sm_m;
	}
	static MBF() {
		Se.sm_mbf ||= d.w0(Se.M());
		return Se.sm_mbf;
	}
	toObject(e = false) {
		return Se.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Se.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Se.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Se();
		return Se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Se.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Se.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_LeaveVoiceChat_Request";
	}
}
class we extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new u.BinaryReader(e);
		let r = new we();
		return we.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_LeaveVoiceChat_Response";
	}
}
class Be extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Be.prototype.voice_chatid) {
			d.Sg(Be.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Be.sm_m ||= {
			proto: Be,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				user_steamid: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				chatid: {
					n: 3,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				one_on_one_steamid_lower: {
					n: 4,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				one_on_one_steamid_higher: {
					n: 5,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				chat_group_id: {
					n: 6,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				user_sessionid: {
					n: 7,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return Be.sm_m;
	}
	static MBF() {
		Be.sm_mbf ||= d.w0(Be.M());
		return Be.sm_mbf;
	}
	toObject(e = false) {
		return Be.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Be.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Be.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Be();
		return Be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Be.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Be.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_UserLeftVoiceChat_Notification";
	}
}
class ve extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ve.prototype.voice_chatid) {
			d.Sg(ve.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ve.sm_m ||= {
			proto: ve,
			fields: {
				voice_chatid: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				one_on_one_steamid_lower: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				one_on_one_steamid_higher: {
					n: 3,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				chatid: {
					n: 4,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				chat_group_id: {
					n: 5,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
			},
		};
		return ve.sm_m;
	}
	static MBF() {
		ve.sm_mbf ||= d.w0(ve.M());
		return ve.sm_mbf;
	}
	toObject(e = false) {
		return ve.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(ve.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(ve.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new ve();
		return ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(ve.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(ve.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVoiceChat_VoiceChatEnded_Notification";
	}
}
let Ie;
let Ee;
((e) => {
	e.UpdateVoiceChatWebRTCData = (e, t) =>
		e.SendMsg("VoiceChat.UpdateVoiceChatWebRTCData#1", I8(he, t), Ce, {
			ePrivilege: 1,
		});
	e.UpdateUserVideoStatus = (e, t) =>
		e.SendMsg("VoiceChat.UpdateUserVideoStatus#1", I8(_e, t), fe, {
			ePrivilege: 1,
		});
	e.NotifyUserVoiceStatus = (e, t) =>
		e.SendNotification("VoiceChat.NotifyUserVoiceStatus#1", I8(pe, t), {
			ePrivilege: 1,
		});
	e.UploadClientVoiceChatLogs = (e, t) =>
		e.SendMsg("VoiceChat.UploadClientVoiceChatLogs#1", I8(be, t), ye, {
			ePrivilege: 1,
		});
	e.LeaveVoiceChat = (e, t) =>
		e.SendMsg("VoiceChat.LeaveVoiceChat#1", I8(Se, t), we, {
			ePrivilege: 1,
		});
	e.RequestOneOnOneChat = (e, t) =>
		e.SendMsg("VoiceChat.RequestOneOnOneChat#1", I8(ne, t), ie, {
			ePrivilege: 1,
		});
	e.AnswerOneOnOneChat = (e, t) =>
		e.SendMsg("VoiceChat.AnswerOneOnOneChat#1", I8(se, t), oe, {
			ePrivilege: 1,
		});
	e.EndOneOnOneChat = (e, t) =>
		e.SendMsg("VoiceChat.EndOneOnOneChat#1", I8(ce, t), me, {
			ePrivilege: 1,
		});
	e.LeaveOneOnOneChat = (e, t) =>
		e.SendMsg("VoiceChat.LeaveOneOnOneChat#1", I8(ue, t), de, {
			ePrivilege: 1,
		});
})((Ie ||= {}));
((e) => {
	e.NotifyUserJoinedVoiceChatHandler = {
		name: "VoiceChatClient.NotifyUserJoinedVoiceChat#1",
		request: Ae,
	};
	e.NotifyUserLeftVoiceChatHandler = {
		name: "VoiceChatClient.NotifyUserLeftVoiceChat#1",
		request: Be,
	};
	e.NotifyVoiceChatEndedHandler = {
		name: "VoiceChatClient.NotifyVoiceChatEnded#1",
		request: ve,
	};
	e.NotifyUserVoiceStatusHandler = {
		name: "VoiceChatClient.NotifyUserVoiceStatus#1",
		request: pe,
	};
	e.NotifyAllUsersVoiceStatusHandler = {
		name: "VoiceChatClient.NotifyAllUsersVoiceStatus#1",
		request: ge,
	};
	e.NotifyOneOnOneChatRequestedHandler = {
		name: "VoiceChatClient.NotifyOneOnOneChatRequested#1",
		request: ae,
	};
	e.NotifyOneOnOneChatResponseHandler = {
		name: "VoiceChatClient.NotifyOneOnOneChatResponse#1",
		request: le,
	};
})((Ee ||= {}));
class Te extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Te.prototype.sdp) {
			d.Sg(Te.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Te.sm_m ||= {
			proto: Te,
			fields: {
				sdp: {
					n: 1,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				browser_name: {
					n: 2,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				browser_version: {
					n: 3,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return Te.sm_m;
	}
	static MBF() {
		Te.sm_mbf ||= d.w0(Te.M());
		return Te.sm_mbf;
	}
	toObject(e = false) {
		return Te.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Te.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Te.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Te();
		return Te.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Te.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Te.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWebRTCClient_InitiateWebRTCConnection_Request";
	}
}
class Re extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Re.prototype.remote_description) {
			d.Sg(Re.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Re.sm_m ||= {
			proto: Re,
			fields: {
				remote_description: {
					n: 1,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return Re.sm_m;
	}
	static MBF() {
		Re.sm_mbf ||= d.w0(Re.M());
		return Re.sm_mbf;
	}
	toObject(e = false) {
		return Re.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Re.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Re.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Re();
		return Re.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Re.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Re.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWebRTCClient_InitiateWebRTCConnection_Response";
	}
}
class ke extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ke.prototype.ip_webrtc_server) {
			d.Sg(ke.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ke.sm_m ||= {
			proto: ke,
			fields: {
				ip_webrtc_server: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				port_webrtc_server: {
					n: 2,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				ip_webrtc_session_client: {
					n: 3,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				port_webrtc_session_client: {
					n: 4,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				sdp: {
					n: 5,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return ke.sm_m;
	}
	static MBF() {
		ke.sm_mbf ||= d.w0(ke.M());
		return ke.sm_mbf;
	}
	toObject(e = false) {
		return ke.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(ke.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(ke.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new ke();
		return ke.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(ke.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(ke.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWebRTCClient_UpdateWebRTCConnection_Request";
	}
}
class De extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!De.prototype.remote_description) {
			d.Sg(De.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		De.sm_m ||= {
			proto: De,
			fields: {
				remote_description: {
					n: 1,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return De.sm_m;
	}
	static MBF() {
		De.sm_mbf ||= d.w0(De.M());
		return De.sm_mbf;
	}
	toObject(e = false) {
		return De.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(De.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(De.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new De();
		return De.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(De.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(De.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWebRTCClient_UpdateWebRTCConnection_Response";
	}
}
class Ne extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ne.prototype.ssrc) {
			d.Sg(Ne.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ne.sm_m ||= {
			proto: Ne,
			fields: {
				ssrc: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				client_ip: {
					n: 2,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				client_port: {
					n: 3,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				server_ip: {
					n: 4,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				server_port: {
					n: 5,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return Ne.sm_m;
	}
	static MBF() {
		Ne.sm_mbf ||= d.w0(Ne.M());
		return Ne.sm_mbf;
	}
	toObject(e = false) {
		return Ne.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Ne.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Ne.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Ne();
		return Ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Ne.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Ne.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWebRTC_WebRTCSessionConnected_Notification";
	}
}
class Fe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Fe.prototype.remote_description) {
			d.Sg(Fe.M());
		}
		Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Fe.sm_m ||= {
			proto: Fe,
			fields: {
				remote_description: {
					n: 1,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				remote_description_version: {
					n: 2,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				ssrcs_to_accountids: {
					n: 3,
					c: Ge,
					r: true,
					q: true,
				},
			},
		};
		return Fe.sm_m;
	}
	static MBF() {
		Fe.sm_mbf ||= d.w0(Fe.M());
		return Fe.sm_mbf;
	}
	toObject(e = false) {
		return Fe.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Fe.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Fe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Fe();
		return Fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Fe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Fe.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWebRTC_WebRTCUpdateRemoteDescription_Notification";
	}
}
class Ge extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ge.prototype.ssrc) {
			d.Sg(Ge.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ge.sm_m ||= {
			proto: Ge,
			fields: {
				ssrc: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				accountid: {
					n: 2,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return Ge.sm_m;
	}
	static MBF() {
		Ge.sm_mbf ||= d.w0(Ge.M());
		return Ge.sm_mbf;
	}
	toObject(e = false) {
		return Ge.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Ge.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Ge.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Ge();
		return Ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Ge.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Ge.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWebRTC_WebRTCUpdateRemoteDescription_Notification_CSSRCToAccountIDMapping";
	}
}
class Oe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Oe.prototype.ip_webrtc_server) {
			d.Sg(Oe.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Oe.sm_m ||= {
			proto: Oe,
			fields: {
				ip_webrtc_server: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				port_webrtc_server: {
					n: 2,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				ip_webrtc_session_client: {
					n: 3,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				port_webrtc_session_client: {
					n: 4,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				remote_description_version: {
					n: 5,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
			},
		};
		return Oe.sm_m;
	}
	static MBF() {
		Oe.sm_mbf ||= d.w0(Oe.M());
		return Oe.sm_mbf;
	}
	toObject(e = false) {
		return Oe.toObject(e, this);
	}
	static toObject(e, t) {
		return d.BT(Oe.M(), e, t);
	}
	static fromObject(e) {
		return d.Uq(Oe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Oe();
		return Oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return d.zj(Oe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		d.i0(Oe.M(), e, t);
	}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWebRTCClient_AcknowledgeUpdatedRemoteDescription_Request";
	}
}
class Pe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Pe.toObject(e, this);
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
		return new Pe();
	}
	static deserializeBinary(e) {
		let t = new u.BinaryReader(e);
		let r = new Pe();
		return Pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new u.BinaryWriter();
		Pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new u.BinaryWriter();
		Pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CWebRTCClient_AcknowledgeUpdatedRemoteDescription_Response";
	}
}
let Le;
let ze;
((e) => {
	e.InitiateWebRTCConnection = (e, t) =>
		e.SendMsg("WebRTCClient.InitiateWebRTCConnection#1", I8(Te, t), Re, {
			ePrivilege: 1,
		});
	e.UpdateWebRTCConnection = (e, t) =>
		e.SendMsg("WebRTCClient.UpdateWebRTCConnection#1", I8(ke, t), De, {
			ePrivilege: 1,
		});
	e.AcknowledgeUpdatedRemoteDescription = (e, t) =>
		e.SendMsg(
			"WebRTCClient.AcknowledgeUpdatedRemoteDescription#1",
			I8(Oe, t),
			Pe,
			{
				ePrivilege: 1,
			},
		);
})((Le ||= {}));
((e) => {
	e.NotifyWebRTCSessionConnectedHandler = {
		name: "WebRTCClientNotifications.NotifyWebRTCSessionConnected#1",
		request: Ne,
	};
	e.NotifyWebRTCUpdateRemoteDescriptionHandler = {
		name: "WebRTCClientNotifications.NotifyWebRTCUpdateRemoteDescription#1",
		request: Fe,
	};
})((ze ||= {}));
class xe {
	constructor(e, t) {
		if (!(e instanceof BaseAudioContext)) {
			throw "Not a valid audio context.";
		}
		t ||= {};
		const r = t.numberOfChannels || 1;
		if (r > 2) {
			throw "The maximum supported number of channels is two.";
		}
		this.context_ = e;
		const n = t.bufferSize || 0;
		this.attack = t.attack || 0;
		this.release = t.release || 0;
		let i = t.timeConstant === undefined ? 0.0025 : t.timeConstant;
		this.threshold = t.threshold === undefined ? -100 : t.threshold;
		this.alpha_ = this.getAlphaFromTimeConstant_(i, this.context_.sampleRate);
		this.noiseGateKernel_ = this.context_.createScriptProcessor(n, r, r);
		this.noiseGateKernel_.onaudioprocess = this.onaudioprocess_.bind(this);
		this.input = new GainNode(this.context_);
		this.output = new GainNode(this.context_);
		this.input.connect(this.noiseGateKernel_).connect(this.output);
		this.previousLevel_ = 0;
		this.previousWeight_ = 1;
		this.channel_ = new Float32Array(this.noiseGateKernel_.bufferSize);
		this.envelope_ = new Float32Array(this.noiseGateKernel_.bufferSize);
		this.weights_ = new Float32Array(this.noiseGateKernel_.bufferSize);
	}
	onaudioprocess_(e) {
		let t = e.inputBuffer;
		let r = t.getChannelData(0);
		if (t.numberOfChannels === 2) {
			let e = t.getChannelData(1);
			for (let t = 0; t < e.length; t++) {
				this.channel_[t] = (r[t] + e[t]) / 2;
			}
		} else {
			this.channel_ = r;
		}
		let n = this.detectLevel_(this.channel_);
		let i = this.computeWeights_(n);
		for (let r = 0; r < t.numberOfChannels; r++) {
			let n = t.getChannelData(r);
			let a = e.outputBuffer.getChannelData(r);
			for (let e = 0; e < n.length; e++) {
				a[e] = i[e] * n[e];
			}
		}
	}
	detectLevel_(e) {
		this.envelope_[0] =
			this.alpha_ * this.previousLevel_ + (1 - this.alpha_) * e[0] ** 2;
		for (let t = 1; t < e.length; t++) {
			this.envelope_[t] =
				this.alpha_ * this.envelope_[t - 1] + (1 - this.alpha_) * e[t] ** 2;
		}
		this.previousLevel_ = this.envelope_[this.envelope_.length - 1];
		return this.envelope_;
	}
	computeWeights_(e) {
		let t = 1;
		let r = 1;
		let n = 1;
		let i = 1;
		if (this.attack > 0) {
			t = Math.ceil(this.context_.sampleRate * this.attack);
			n = 1 / t;
		}
		if (this.release > 0) {
			r = Math.ceil(this.context_.sampleRate * this.release);
			i = 1 / r;
		}
		for (let t = 0; t < e.length; t++) {
			if (xe.toDecibel(e[t] * 2) < this.threshold) {
				const e = this.previousWeight_ - n;
				this.weights_[t] = Math.max(e, 0);
			} else {
				const e = this.previousWeight_ + i;
				this.weights_[t] = Math.min(e, 1);
			}
			this.previousWeight_ = this.weights_[t];
		}
		return this.weights_;
	}
	getAlphaFromTimeConstant_(e, t) {
		return Math.exp(-1 / (t * e));
	}
	static toDecibel(e) {
		return Math.log10(e) * 10;
	}
}
class Ue {
	m_Analyser = undefined;
	m_rgInputNode = [];
	m_hUpdateInterval = 0;
	m_buffer = undefined;
	m_lastTimeNonZero = 0;
	m_flVolume = 0;
	m_flRoundedVolume = 0;
	m_flAveraging = 0.6;
	constructor(e, t) {
		Gn(this);
		this.m_Analyser = t.createAnalyser();
		this.m_Analyser.fftSize = 128;
		this.m_buffer = new Float32Array(this.m_Analyser.fftSize);
		this.m_rgInputNode.push(e);
		e.connect(this.m_Analyser);
		this.StartUpdating();
	}
	GetLastTimeNonZero() {
		return this.m_lastTimeNonZero;
	}
	StartUpdating() {
		this.StopUpdating();
		this.m_hUpdateInterval = SetBackgroundInterval(this.UpdateVolume, 60);
	}
	StopUpdating() {
		if (this.m_hUpdateInterval != 0) {
			ClearBackgroundInterval(this.m_hUpdateInterval);
		}
		this.m_hUpdateInterval = 0;
	}
	UpdateVolume() {
		this.m_Analyser.getFloatTimeDomainData(this.m_buffer);
		let e = 0;

		for (let r of this.m_buffer) {
			e += r * r;
		}

		let t = Math.sqrt(e / this.m_buffer.length);
		this.m_flVolume = Math.max(t, this.m_flVolume * this.m_flAveraging) * 1.2;
		let r = Math.round(this.m_flVolume * 100) / 100;
		if (r != this.m_flRoundedVolume) {
			this.m_flRoundedVolume = r;
		}
		if (this.m_flRoundedVolume > 0) {
			this.m_lastTimeNonZero = performance.now();
		}
	}
	stop() {
		this.StopUpdating();
		this.DisconnectAll();
	}
	Connect(e) {
		this.m_rgInputNode.push(e);
		if (this.m_Analyser != null) {
			e.connect(this.m_Analyser);
		}
	}
	DisconnectAll() {
		for (let e = 0; e < this.m_rgInputNode.length; ++e) {
			if (this.m_Analyser) {
				try {
					this.m_rgInputNode[e].disconnect(this.m_Analyser);
				} catch (e) {}
			}
			this.m_rgInputNode[e] = undefined;
		}
		this.m_rgInputNode = [];
	}
	get rounded_volume() {
		return this.m_flRoundedVolume;
	}
}
Cg([P.sH], Ue.prototype, "m_lastTimeNonZero", undefined);
Cg([P.sH], Ue.prototype, "m_flVolume", undefined);
Cg([P.sH], Ue.prototype, "m_flRoundedVolume", undefined);
Cg([P.XI.bound], Ue.prototype, "UpdateVolume", null);
Cg([P.XI.bound], Ue.prototype, "stop", null);
let We;
let Ve;
((e) => {
	e[(e.k_EAudioStreamType_Microphone = 1)] = "k_EAudioStreamType_Microphone";
	e[(e.k_EAudioStreamType_IncomingStream = 2)] =
		"k_EAudioStreamType_IncomingStream";
})((We ||= {}));
class Ke {
	constructor() {
		Gn(this);
	}
	unique_id;
	stream;
	destination_node = undefined;
	source_node = undefined;
	type;
	elem = undefined;
	accountid = undefined;
	output_gain_node = undefined;
	spatializer_node;
	steamaudio_node;
	position_index;
	muted = false;
	volume_meter = undefined;
}
Cg([P.sH], Ke.prototype, "accountid", undefined);
Cg([P.sH], Ke.prototype, "muted", undefined);
Cg([P.sH], Ke.prototype, "volume_meter", undefined);
class Xe {
	constructor() {
		Gn(this);
	}
	unique_id;
	receive = false;
	stream = null;
	accountid = undefined;
	showOnDesktop = false;
}
function Je(e) {
	switch (e) {
		case Ve.k_EVoiceCallState_None: {
			return "None";
		}
		case Ve.k_EVoiceCallState_ScheduledInitiate: {
			return "ScheduledInitiate";
		}
		case Ve.k_EVoiceCallState_RequestedMicAccess: {
			return "RequestedMicAccess";
		}
		case Ve.k_EVoiceCallState_LocalMicOnly: {
			return "LocalMicOnly";
		}
		case Ve.k_EVoiceCallState_CreatePeerConnection: {
			return "CreatePeerConnection";
		}
		case Ve.k_EVoiceCallState_InitatedWebRTCSession: {
			return "InitiatedWebRTCSession";
		}
		case Ve.k_EVoiceCallState_UpdatingWebRTCSession: {
			return "UpdatingWebRTCSession";
		}
		case Ve.k_EVoiceCallState_WebRTCConnectedWaitingOnIceConnected: {
			return "WaitingOnICEConnected";
		}
		case Ve.k_EVoiceCallState_RequestedPermission: {
			return "RequestedPermission";
		}
		case Ve.k_EVoiceCallState_NotifyingVoiceChatOfWebRTCSession: {
			return "NotifyingVoiceChatOfWebRTCSession";
		}
		case Ve.k_EVoiceCallState_Connected: {
			return "Connected";
		}
	}
}
Cg([P.sH], Xe.prototype, "stream", undefined);
Cg([P.sH], Xe.prototype, "accountid", undefined);
Cg([P.sH], Xe.prototype, "showOnDesktop", undefined);
((e) => {
	e[(e.k_EVoiceCallState_None = 0)] = "k_EVoiceCallState_None";
	e[(e.k_EVoiceCallState_ScheduledInitiate = 1)] =
		"k_EVoiceCallState_ScheduledInitiate";
	e[(e.k_EVoiceCallState_RequestedMicAccess = 2)] =
		"k_EVoiceCallState_RequestedMicAccess";
	e[(e.k_EVoiceCallState_LocalMicOnly = 3)] = "k_EVoiceCallState_LocalMicOnly";
	e[(e.k_EVoiceCallState_CreatePeerConnection = 4)] =
		"k_EVoiceCallState_CreatePeerConnection";
	e[(e.k_EVoiceCallState_InitatedWebRTCSession = 5)] =
		"k_EVoiceCallState_InitatedWebRTCSession";
	e[(e.k_EVoiceCallState_UpdatingWebRTCSession = 6)] =
		"k_EVoiceCallState_UpdatingWebRTCSession";
	e[(e.k_EVoiceCallState_WebRTCConnectedWaitingOnIceConnected = 7)] =
		"k_EVoiceCallState_WebRTCConnectedWaitingOnIceConnected";
	e[(e.k_EVoiceCallState_RequestedPermission = 8)] =
		"k_EVoiceCallState_RequestedPermission";
	e[(e.k_EVoiceCallState_NotifyingVoiceChatOfWebRTCSession = 9)] =
		"k_EVoiceCallState_NotifyingVoiceChatOfWebRTCSession";
	e[(e.k_EVoiceCallState_Connected = 10)] = "k_EVoiceCallState_Connected";
})((Ve ||= {}));
class $e {
	constructor() {
		Gn(this);
	}
	m_eState = Ve.k_EVoiceCallState_None;
	m_targetAccountID = 0;
	m_bInitiatedOneOnOneCall = false;
	m_bWaitingOnOneOnOneRejoin = false;
	m_bPostedOneOnOneEndedMsg = false;
	m_chatRoom = undefined;
	m_voiceChatID = "";
	m_webRTCConnectedNotification = undefined;
	m_webRTCServerIP = 0;
	m_webRTCServerPort = 0;
	m_webRTCClientIP = 0;
	m_webRTCClientPort = 0;
	m_nFailuresThisInitiate = 0;
	m_timeStartedConnecting;
	m_timeFinishedConnecting;
	m_timeEndedVoiceChat;
	m_bOfferUpdateInProgress = false;
	m_msgPendingRemoteDescriptionUpdate = undefined;
	m_bIsConnectionAttemptOverTwoSeconds = false;
	m_nMostRecentRemoteDescriptionVersion = "0";
	BMatchingCall(e, t) {
		return (
			(e != 0 && this.m_targetAccountID == e) ||
			(!!this.m_chatRoom &&
				!!t &&
				this.m_chatRoom.chatID == t.chatID &&
				this.m_chatRoom.groupID == t.groupID)
		);
	}
	BCallActiveForGroup(e) {
		return this.m_chatRoom && this.m_chatRoom.groupID == e;
	}
}
Cg([P.sH], $e.prototype, "m_eState", undefined);
Cg([P.sH], $e.prototype, "m_targetAccountID", undefined);
Cg([P.sH], $e.prototype, "m_bInitiatedOneOnOneCall", undefined);
Cg([P.sH], $e.prototype, "m_bWaitingOnOneOnOneRejoin", undefined);
Cg([P.sH], $e.prototype, "m_bPostedOneOnOneEndedMsg", undefined);
Cg([P.sH], $e.prototype, "m_chatRoom", undefined);
Cg([P.sH], $e.prototype, "m_voiceChatID", undefined);
Cg([P.sH], $e.prototype, "m_nFailuresThisInitiate", undefined);
Cg([P.sH], $e.prototype, "m_bIsConnectionAttemptOverTwoSeconds", undefined);
class et {
	m_SSRC = 0;
	m_BytesReceived = 0;
	m_HeaderBytesReceived = 0;
	m_PacketsReceived = 0;
	m_PacketsLost = 0;
	m_FecPacketsDiscarded = 0;
	m_FecPacketsReceived = 0;
	m_Jitter = 0;
	m_JitterBufferDelay = 0;
	m_JitterBufferEmittedCount = 0;
	m_JitterBufferMinimumDelay = 0;
	m_JitterBufferTargetDelay = 0;
}
class tt extends et {
	m_PacketsDiscarded = 0;
	m_ConcealmentEvents = 0;
	m_ConcealedSamples = 0;
	m_SilentConcealedSamples = 0;
	m_RemovedSamplesForAcceleration = 0;
	m_TotalAudioEnergy = 0;
	m_TotalSamplesDuration = 0;
	m_TotalSamplesReceived = 0;
}
class rt extends et {
	m_FirCount = 0;
	m_PliCount = 0;
	m_NackCount = 0;
	m_PauseCount = 0;
	m_FreezeCount = 0;
	m_KeyFramesDecoded = 0;
	m_FramesDecoded = 0;
	m_FramesDropped = 0;
	m_FramesReceived = 0;
	m_FramesAssembledFromMultiplePackets = 0;
}
const nt = "SteamVoiceSettings";
class it {
	m_VoiceInputGain = 1;
	m_VoiceOutputGain = 1;
	m_NoiseGateLevel = Ye.H.k_ENoiseGateLevel_Medium;
	m_VoiceUseEchoCancellation = true;
	m_VoiceUseNoiseCancellation = true;
	m_VoiceUseAutoGainControl = true;
	m_SelectedMicID = "default";
	m_SelectedOutputID = "default";
	m_bPlayPTTSounds = true;
	m_bSettingsLoaded = false;
	m_bHasResetOpenMicHotkey = false;
	m_bUseSteamAudioSpatialization = false;
	m_SettingsStore;
	constructor(e) {
		Gn(this);
		this.m_SettingsStore = e;
	}
	SaveToLocalStorage() {
		this.m_SettingsStore.StoreObjectInLocalStorage(nt, {
			inputGain: this.m_VoiceInputGain,
			outputGain: this.m_VoiceOutputGain,
			noiseGateLevel: this.m_NoiseGateLevel,
			noiseCancellation: this.m_VoiceUseNoiseCancellation,
			echoCancellation: this.m_VoiceUseEchoCancellation,
			autoGainControl: this.m_VoiceUseAutoGainControl,
			selectedMic: this.m_SelectedMicID,
			selectedOutput: this.m_SelectedOutputID,
			pttSoundsEnabled: this.m_bPlayPTTSounds,
			hasResetOpenMicHotKey: this.m_bHasResetOpenMicHotkey,
			useSteamAudioSpatialization: this.m_bUseSteamAudioSpatialization,
		});
	}
	LoadFromLocalStorage(e) {
		this.m_SettingsStore
			.GetObjectFromLocalStorageWhenReady(nt, undefined)
			.then((t) => {
				if (t != null) {
					if (t.inputGain != null) {
						this.m_VoiceInputGain = t.inputGain;
					}
					if (t.outputGain != null) {
						this.m_VoiceOutputGain = t.outputGain;
					}
					if (t.noiseGateLevel != null) {
						this.m_NoiseGateLevel = t.noiseGateLevel;
					}
					if (t.noiseCancellation != null) {
						this.m_VoiceUseNoiseCancellation = t.noiseCancellation;
					}
					if (t.autoGainControl != null) {
						this.m_VoiceUseAutoGainControl = t.autoGainControl;
					}
					if (t.echoCancellation != null) {
						this.m_VoiceUseEchoCancellation = t.echoCancellation;
					}
					if (t.selectedMic != null) {
						this.m_SelectedMicID = t.selectedMic;
					}
					if (t.selectedOutput != null) {
						this.m_SelectedOutputID = t.selectedOutput;
					}
					if (t.pttSoundsEnabled != null) {
						this.m_bPlayPTTSounds = t.pttSoundsEnabled;
					}
					if (t.hasResetOpenMicHotKey != null) {
						this.m_bHasResetOpenMicHotkey = t.hasResetOpenMicHotKey;
					}
					if (t.useSteamAudioSpatialization != null) {
						this.m_bUseSteamAudioSpatialization = t.useSteamAudioSpatialization;
					}
				}
				this.m_bSettingsLoaded = true;
				e.LogMsg("(VoiceChat) Settings loaded from local storage");
				e.RefreshPushToTalkKeySettings();
			});
	}
}
Cg([P.sH], it.prototype, "m_VoiceInputGain", undefined);
Cg([P.sH], it.prototype, "m_VoiceOutputGain", undefined);
Cg([P.sH], it.prototype, "m_NoiseGateLevel", undefined);
Cg([P.sH], it.prototype, "m_VoiceUseEchoCancellation", undefined);
Cg([P.sH], it.prototype, "m_VoiceUseNoiseCancellation", undefined);
Cg([P.sH], it.prototype, "m_VoiceUseAutoGainControl", undefined);
Cg([P.sH], it.prototype, "m_SelectedMicID", undefined);
Cg([P.sH], it.prototype, "m_SelectedOutputID", undefined);
Cg([P.sH], it.prototype, "m_bPlayPTTSounds", undefined);
Cg([P.sH], it.prototype, "m_bSettingsLoaded", undefined);
Cg([P.sH], it.prototype, "m_bHasResetOpenMicHotkey", undefined);
Cg([P.sH], it.prototype, "m_bUseSteamAudioSpatialization", undefined);
class at {
	constructor() {
		Gn(this);
	}
	muted = false;
	gain = 1;
}
Cg([P.sH], at.prototype, "muted", undefined);
Cg([P.sH], at.prototype, "gain", undefined);
class st {
	constructor() {
		Gn(this);
	}
	mic_muted_locally = false;
	output_muted_locally = false;
	has_no_mic_for_session = false;
	sends_video = false;
}
Cg([P.sH], st.prototype, "mic_muted_locally", undefined);
Cg([P.sH], st.prototype, "output_muted_locally", undefined);
Cg([P.sH], st.prototype, "has_no_mic_for_session", undefined);
Cg([P.sH], st.prototype, "sends_video", undefined);
class ot {
	constructor() {
		Gn(this);
	}
	partner_accountid = 0;
	voice_chatid = "";
	previously_joined = false;
	audio_repeat = 0;
	audio_buffer = undefined;
	ClearAudioRepeats() {
		if (this.audio_repeat != 0) {
			ClearBackgroundTimeout(this.audio_repeat);
			this.audio_repeat = 0;
		}
		if (this.audio_buffer != null) {
			this.audio_buffer.StopPlayback();
			this.audio_buffer = undefined;
		}
	}
}
Cg([P.sH], ot.prototype, "partner_accountid", undefined);
Cg([P.sH], ot.prototype, "voice_chatid", undefined);
Cg([P.sH], ot.prototype, "previously_joined", undefined);
export class F$ {
	m_CMInterface;
	m_VoiceCallState = new $e();
	m_mapOneOnOneCallsWaitingJoinOrAccept = P.sH.map();
	m_hRegisterForPushToTalkStateChange = null;
	m_VoiceChatActiveStateChangeCallbacks = new Ze.lu();
	m_bPushToTalkEnabled = false;
	m_bPushToMuteEnabled = false;
	m_bVoicePTTStateEnabled = false;
	m_VKPushToTalkHotKey = 0;
	m_strPushToTalkDisplayString = "";
	m_hPushToTalkReleaseTimeout = 0;
	m_ConnectionCheck = 0;
	m_ScheduledInitiate = 0;
	m_ScheduledVoiceLogsUpload = 0;
	m_bClientSideLogsUploadInProgress = false;
	m_nLastLogLineUploaded = 0;
	m_StatsTimeout = 0;
	m_bUserHasDeniedMicPermissions = false;
	m_bOutputMuted = false;
	static k_MaxPerUserGainMultiplier = 2;
	static k_MaxInputOutputGainValue = 4;
	m_AudioContext = undefined;
	m_rgAudioStreams = sH([]);
	m_MicVolumeMeter = undefined;
	m_MicNoiseGate = undefined;
	m_MicInputGainNode = undefined;
	m_rgVideoStreams = sH([]);
	m_bSendVideo = false;
	m_bReceiveVideo = false;
	m_bAutoShowVideoStream = false;
	m_rgLogLines = [];
	m_mapSSRCToAccountID = new Map();
	m_mapAccountIDToAudioStats = new Map();
	m_mapAccountIDToVideoStats = new Map();
	m_mapPerUserOutputGain = P.sH.map();
	m_mapUserVoiceStatus = P.sH.map();
	m_PeerConnection = undefined;
	m_Settings = undefined;
	m_LogVoiceChatDetails = false;
	m_VoiceEchoLocalMic = false;
	m_bLocalMicEchoStateBeforeMicTest = false;
	m_bLocalMicTestActive = false;
	m_bForceConnectingStatus = false;
	m_bForceReconnectingStatus = false;
	static k_nMaxPositions = 32;
	m_rgPositions = [];
	m_rgFreePositionIndices = [];
	m_localPose = undefined;
	m_mapRemotePoseForAccountID = new Map();
	constructor(e) {
		Gn(this);
		this.m_Settings = new it(e);
		this.m_Settings.LoadFromLocalStorage(this);
		this.DispatchSetVoiceChatActive(false);
		x.Supplier = this;
		this.GenerateVoicePositions();
	}
	DispatchSetVoiceChatActive(e) {
		this.m_VoiceChatActiveStateChangeCallbacks.Dispatch(e);
		if (
			typeof SteamClient != "undefined" &&
			SteamClient != null &&
			SteamClient.WebChat != null &&
			SteamClient.WebChat.SetVoiceChatActive != null
		) {
			try {
				SteamClient.WebChat.SetVoiceChatActive(e);
			} catch (e) {}
		}
	}
	Init(e) {
		this.m_CMInterface = e;
		window.SetVoiceEchoLocalMic = this.SetVoiceEchoLocalMic;
		window.SetVoiceLogDetails = this.SetVoiceLogDetails;
		window.SetVoiceForceReconnectingStatus = this.ForceReconnectingStatus;
		window.SetVoiceForceConnectingStatus = this.ForceConnectingStatus;
		window.SetVoiceAutoShowVideoStream = this.SetAutoShowVideoStream;
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			Ee.NotifyOneOnOneChatRequestedHandler,
			(e) => {
				let t = new m.b(e.Body().steamid_partner());
				let r = e.Body().voice_chatid();
				let n = c.xm.FriendStore.GetFriend(t.GetAccountID());
				if (
					n == null ||
					n.is_blocked ||
					n.is_blocked ||
					c.xm.FriendStore.BIsInvisibleMode() ||
					n.is_blocked ||
					c.xm.FriendStore.BIsInvisibleMode() ||
					c.xm.FriendStore.GetUserDoNotDisturb()
				) {
					this.LogMsg(
						"(VoiceChat) Rejecting one-on-one voice chat request because partner is not a friend, is blocked, we are invisible, or we are DND",
					);
					this.OnRejectOneOnOneVoiceChat(t, e.Body().voice_chatid());
					return 1;
				}
				let i = new ot();
				i.partner_accountid = this.m_CMInterface.steamid.GetAccountID();
				i.voice_chatid = r;
				i.previously_joined = false;
				let a = this;
				i.audio_repeat = SetBackgroundTimeout(() => {
					i.audio_repeat = 0;
					a.PlayRingSound(t.GetAccountID());
				}, 20000);
				this.m_mapOneOnOneCallsWaitingJoinOrAccept.set(t.GetAccountID(), i);
				this.LogMsg(`(VoiceChat) voice chat request from ${t.GetAccountID()}`);
				this.LogMsg(
					`(VoiceChat) current state ${this.m_VoiceCallState.m_eState}`,
				);
				if (this.m_VoiceCallState.m_targetAccountID == t.GetAccountID()) {
					this.LogMsg(
						"(VoiceChat) We are already trying to one on one chat this user, just auto-acceptting to re-sync.",
					);
					this.OnAcceptOneOnOneVoiceChat(t, r);
					return 1;
				}
				c.xm.NotificationManager.DisplayNotificationFromFriend(n, {
					title: n.display_name,
					body: Localize("#Friend_RequestingOneOnOneChat", n.display_name),
					tag: `state_${n.accountid}`,
					steamid: n.persona.m_steamid.ConvertTo64BitString(),
				});
				let s = c.xm.ChatStore.GetFriendChat(t.GetAccountID(), true);
				if (s != null) {
					s.AddVoiceChannelInviteMsg(
						t.GetAccountID(),
						c.xm.GetServerRTime32(),
						Localize(
							"#FriendMsg_VoiceChannelInvite",
							n.display_name,
							s.self.display_name,
						),
					);
					c.xm.UIStore.ShowAndOrActivateChat(
						c.xm.GetDefaultBrowserContext(),
						s,
						false,
					);
				}
				this.PlayRingSound(n.accountid);
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			Ee.NotifyVoiceChatEndedHandler,
			(e) => {
				let t = e.Body().voice_chatid();
				for (let e of Array.from(
					this.m_mapOneOnOneCallsWaitingJoinOrAccept.keys(),
				)) {
					let r = this.m_mapOneOnOneCallsWaitingJoinOrAccept.get(e);
					if (r != null && r.voice_chatid == t) {
						this.LogMsg(
							`(VoiceChat) OneOnOne VoiceChat we were invited too with ${e} has ended and is no longer joinable.`,
						);
						c.xm.AudioPlaybackManager.PlayAudioURL(
							`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_voice_channel_exit.m4a?v=1`,
						);
						let t = Number(e);
						this.DeleteOneOnOneCallWaitingJoinOrAccept(t);
						let r = c.xm.ChatStore.GetFriendChat(t, false);
						let n = c.xm.FriendStore.GetFriend(t);
						if (r != null) {
							if (n) {
								r.AddVoiceChannelInviteMsg(
									n.accountid,
									c.xm.GetServerRTime32(),
									Localize(
										"#FriendMsg_VoiceChannelEndedExplicit",
										n.display_name,
									),
								);
							} else {
								r.AddVoiceChannelInviteMsg(
									this.m_CMInterface.steamid.GetAccountID(),
									c.xm.GetServerRTime32(),
									Localize("#FriendMsg_VoiceChannelEnded"),
								);
							}
							if (this.m_VoiceCallState.m_targetAccountID == Number(e)) {
								this.m_VoiceCallState.m_bPostedOneOnOneEndedMsg = true;
							}
						}
					}
				}
				if (t == this.m_VoiceCallState.m_voiceChatID) {
					if (this.m_VoiceCallState.m_targetAccountID != 0) {
						let e = c.xm.ChatStore.GetFriendChat(
							this.m_VoiceCallState.m_targetAccountID,
							false,
						);
						if (e != null && !this.m_VoiceCallState.m_bPostedOneOnOneEndedMsg) {
							this.m_VoiceCallState.m_bPostedOneOnOneEndedMsg = true;
							e.AddVoiceChannelInviteMsg(
								this.m_CMInterface.steamid.GetAccountID(),
								c.xm.GetServerRTime32(),
								Localize("#FriendMsg_VoiceChannelEnded"),
							);
						}
					}
					if (
						this.m_VoiceCallState.m_targetAccountID != 0 &&
						this.m_VoiceCallState.m_eState >
							Ve.k_EVoiceCallState_RequestedPermission
					) {
						c.xm.AudioPlaybackManager.PlayAudioURL(
							`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_voice_channel_exit.m4a?v=1`,
						);
					}
					this.LogMsg(
						"(VoiceChat) Got voice chat end notification from server for active chatid",
					);
					this.EndVoiceChatInternal(false);
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			Ee.NotifyUserJoinedVoiceChatHandler,
			(e) => {
				if (e.Body().voice_chatid() == this.m_VoiceCallState.m_voiceChatID) {
					let t = new m.b(e.Body().user_steamid());
					this.LogMsg(
						`(VoiceChat) User ${t.Render()} has just JOINED our active voice chat`,
					);
					if (
						this.m_VoiceCallState.m_targetAccountID != 0 &&
						this.m_VoiceCallState.m_targetAccountID == t.GetAccountID()
					) {
						this.m_VoiceCallState.m_bWaitingOnOneOnOneRejoin = false;
					}
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			Ee.NotifyUserLeftVoiceChatHandler,
			(e) => {
				if (e.Body().voice_chatid() == this.m_VoiceCallState.m_voiceChatID) {
					let t = new m.b(e.Body().user_steamid());
					this.LogMsg(
						`(VoiceChat) User ${t.Render()} has just LEFT our active voice chat`,
					);
					if (
						this.m_VoiceCallState.m_targetAccountID != 0 &&
						this.m_VoiceCallState.m_targetAccountID == t.GetAccountID()
					) {
						this.m_VoiceCallState.m_bWaitingOnOneOnOneRejoin = true;
					}
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			te.I0.NotifyShouldRejoinChatRoomVoiceChatHandler,
			(e) => {
				let t = {
					groupID: e.Body().chat_group_id(),
					chatID: e.Body().chat_id(),
				};
				if (
					this.m_VoiceCallState.m_eState >
						Ve.k_EVoiceCallState_ScheduledInitiate &&
					this.m_VoiceCallState.BMatchingCall(0, t)
				) {
					this.LogMsg(
						"(ChatRoom) Notified that we need to rejoin new voicechat session for chat room... doing so now...",
					);
					this.EndVoiceChatInternal(true);
					this.InitiateVoiceChat(0, t);
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			ze.NotifyWebRTCUpdateRemoteDescriptionHandler,
			(e) =>
				this.m_VoiceCallState.m_eState <
				Ve.k_EVoiceCallState_InitatedWebRTCSession
					? (this.LogMsg(
							`(WebRTC) Hit NotifyWebRTCUpdateRemoteDescriptionHandler in wrong state ${this.m_VoiceCallState.m_eState}`,
						),
						2)
					: (this.m_VoiceCallState.m_bOfferUpdateInProgress
							? (this.LogMsg(
									"(WebRTC) Hit NotifyWebRTCUpdateRemoteDescriptionHandler while already updating, queing work",
								),
								(this.m_VoiceCallState.m_msgPendingRemoteDescriptionUpdate =
									e.Body()))
							: this.ProcessUpdatedRemoteDescription(e.Body()),
						1),
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			ze.NotifyWebRTCSessionConnectedHandler,
			(e) =>
				this.m_VoiceCallState.m_eState <
				Ve.k_EVoiceCallState_InitatedWebRTCSession
					? (this.LogMsg(
							`(WebRTC) Hit NotifyWebRTCSessionConnectedHandler in wrong state ${this.m_VoiceCallState.m_eState}`,
						),
						2)
					: ((this.m_VoiceCallState.m_webRTCConnectedNotification = e.Body()),
						(this.m_VoiceCallState.m_webRTCServerIP =
							this.m_VoiceCallState.m_webRTCConnectedNotification.server_ip()),
						(this.m_VoiceCallState.m_webRTCServerPort =
							this.m_VoiceCallState.m_webRTCConnectedNotification.server_port()),
						(this.m_VoiceCallState.m_webRTCClientIP =
							this.m_VoiceCallState.m_webRTCConnectedNotification.client_ip()),
						(this.m_VoiceCallState.m_webRTCClientPort =
							this.m_VoiceCallState.m_webRTCConnectedNotification.client_port()),
						this.m_PeerConnection.iceConnectionState == "completed" ||
						this.m_PeerConnection.iceConnectionState == "connected"
							? (this.LogMsg(
									"(VoiceChat) ICE state is already connected after successful SetRemoteDescription, joining voice chat immediately",
								),
								this.JoinVoiceChatOrAskForOneOnOneChatNow())
							: (this.LogMsg(
									"(VoiceChat) ICE state is not connected after successful SetRemoteDescription, waiting for UDP connetivity",
								),
								(this.m_VoiceCallState.m_eState =
									Ve.k_EVoiceCallState_WebRTCConnectedWaitingOnIceConnected)),
						1),
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			Ee.NotifyAllUsersVoiceStatusHandler,
			(e) => {
				if (this.m_VoiceCallState.m_voiceChatID != e.Body().voice_chatid()) {
					return 1;
				}

				for (let r of e.Body().users()) {
					this.UpdateUserVoiceStatus(r);
				}

				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			Ee.NotifyUserVoiceStatusHandler,
			(e) => {
				this.UpdateUserVoiceStatus(e.Body());
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			Ee.NotifyOneOnOneChatResponseHandler,
			(e) => {
				if (
					this.m_VoiceCallState.m_eState >=
					Ve.k_EVoiceCallState_RequestedPermission
				) {
					let t = new m.b(e.Body().steamid_partner());
					if (e.Body().voicechat_id() != this.m_VoiceCallState.m_voiceChatID) {
						this.LogMsg(
							`(VoiceChat) Got response from ${t.GetAccountID()} but for different voice chat than we are in, ignoring. `,
						);
					} else if (
						t.GetAccountID() == this.m_VoiceCallState.m_targetAccountID &&
						e.Body().accepted_request() == 1
					) {
						this.LogMsg(
							`(VoiceChat) Got acceptance from ${t.GetAccountID()} ${e
								.Hdr()
								.steamid()}`,
						);
						c.xm.AudioPlaybackManager.PlayAudioURL(
							`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_voice_channel_enter.m4a?v=1`,
						);
						this.OnVoiceChatAccepted(true);
					} else {
						this.LogMsg(`(VoiceChat) Rejected by ${t.GetAccountID()}`);
						let e = c.xm.ChatStore.GetFriendChat(t.GetAccountID(), false);
						let r = c.xm.FriendStore.GetFriend(t.GetAccountID());
						if (e != null && r != null) {
							this.m_VoiceCallState.m_bPostedOneOnOneEndedMsg = true;
							e.AddVoiceChannelInviteMsg(
								t.GetAccountID(),
								c.xm.GetServerRTime32(),
								Localize(
									"#FriendMsg_VoiceChannelEndedExplicit",
									r.display_name,
								),
							);
						}
						this.DeleteOneOnOneCallWaitingJoinOrAccept(t.GetAccountID());
						c.xm.AudioPlaybackManager.PlayAudioURL(
							`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_voice_channel_exit.m4a?v=1`,
						);
						this.OnVoiceChatAccepted(false);
					}
				}
				return 1;
			},
		);
	}
	GetLocalAccountID() {
		return this.m_CMInterface.steamid.GetAccountID();
	}
	RefreshPushToTalkKeySettings() {
		if (
			typeof SteamClient != "undefined" &&
			SteamClient.WebChat != null &&
			SteamClient.WebChat.GetPushToTalkEnabled != null
		) {
			SteamClient.WebChat.GetPushToTalkEnabled().then((e) => {
				this.m_bPushToTalkEnabled = e.bEnabled;
				this.m_VKPushToTalkHotKey = e.vkHotKey;
				if (e.bPushToMute) {
					this.m_bPushToMuteEnabled = e.bEnabled;
					this.m_bPushToTalkEnabled = false;
				}
				this.m_strPushToTalkDisplayString = e.strKeyName || "None";
				if (!this.m_bPushToTalkEnabled && !this.m_bPushToMuteEnabled) {
					if (
						SteamClient.WebChat != null &&
						SteamClient.WebChat.SetPushToTalkHotKey != null
					) {
						AssertMsg(
							this.m_Settings.m_bSettingsLoaded,
							"Settings not loaded but RefreshPushToTalkKeySettings hit",
						);
						if (!this.m_Settings.m_bHasResetOpenMicHotkey) {
							this.m_Settings.m_bHasResetOpenMicHotkey = true;
							this.m_Settings.SaveToLocalStorage();
							console.log(
								"Reset Open Mic hotkey to None on first run of new client in open mic mode",
							);
							SteamClient.WebChat.SetPushToTalkHotKey(0);
							this.RefreshPushToTalkKeySettings();
						}
					}
				}
			});
		}
		if (
			typeof SteamClient != "undefined" &&
			this.m_hRegisterForPushToTalkStateChange === null &&
			SteamClient != null &&
			SteamClient.WebChat != null &&
			SteamClient.WebChat.RegisterForPushToTalkStateChange != null
		) {
			this.m_hRegisterForPushToTalkStateChange =
				SteamClient.WebChat.RegisterForPushToTalkStateChange(
					this.OnPushToTalkStateChange,
				);
		}
	}
	InitiateFriendChat(e) {
		if (this.BPartnerHasRequestedAndIsInOneOnOneChat(e)) {
			this.AcceptPartnersOneOnOneChatRequest(e);
		} else {
			this.InitiateVoiceChat(e, null);
			c.xm.AudioPlaybackManager.PlayAudioURL(
				`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_phonecall.m4a?v=1`,
			);
		}
	}
	InitiateRoomChat(e, t) {
		this.InitiateVoiceChat(0, {
			groupID: e,
			chatID: t,
		});
	}
	RegisterForVoiceChatActiveStateChange(e) {
		return this.m_VoiceChatActiveStateChangeCallbacks.Register(e);
	}
	EndLocalMicTest() {
		this.m_bLocalMicTestActive = false;
		if (this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_LocalMicOnly) {
			this.EndVoiceChatInternal(false);
		}
		this.SetVoiceEchoLocalMic(this.m_bLocalMicEchoStateBeforeMicTest);
	}
	IsLocalMicTestActive() {
		return this.m_bLocalMicTestActive;
	}
	InitiateLocalMicTest() {
		this.m_bLocalMicTestActive = true;
		this.m_bLocalMicEchoStateBeforeMicTest = this.m_VoiceEchoLocalMic;
		this.SetVoiceEchoLocalMic(true);
		if (this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_None) {
			this.InitiateVoiceChat(0, null);
		}
	}
	GetOneOnOneCallsWaitingForJoinOrAccept() {
		return this.m_mapOneOnOneCallsWaitingJoinOrAccept;
	}
	AcceptPartnersOneOnOneChatRequest(e) {
		let t = this.m_mapOneOnOneCallsWaitingJoinOrAccept.get(e);
		if (t == null) {
			return false;
		}
		this.m_VoiceCallState.m_timeStartedConnecting = undefined;
		t.ClearAudioRepeats();
		let r = m.b.InitFromAccountID(e);
		this.OnAcceptOneOnOneVoiceChat(r, t.voice_chatid);
		return true;
	}
	OnRejectOneOnOneVoiceChatForPartner(e) {
		let t = this.m_mapOneOnOneCallsWaitingJoinOrAccept.get(e);
		if (t == null) {
			return false;
		}
		t.ClearAudioRepeats();
		let r = m.b.InitFromAccountID(e);
		this.OnRejectOneOnOneVoiceChat(r, t.voice_chatid);
		this.m_mapOneOnOneCallsWaitingJoinOrAccept.delete(e);
		let n = c.xm.ChatStore.GetFriendChat(e, false);
		let i = c.xm.FriendStore.self;
		if (n != null && i != null) {
			if (
				this.m_VoiceCallState.m_targetAccountID != e ||
				!this.m_VoiceCallState.m_bPostedOneOnOneEndedMsg
			) {
				n.AddVoiceChannelInviteMsg(
					i.accountid,
					c.xm.GetServerRTime32(),
					Localize("#FriendMsg_VoiceChannelEndedExplicit", i.display_name),
				);
			}
			if (this.m_VoiceCallState.m_targetAccountID == e) {
				this.m_VoiceCallState.m_bPostedOneOnOneEndedMsg = true;
			}
		}
		return true;
	}
	OnUserLeaveOneOnOneVoiceChat() {
		if (
			this.m_VoiceCallState.m_targetAccountID != 0 ||
			this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_None
		) {
			this.LogMsg(
				`(VoiceChat) User asking to leave but not end one-on-one chat with: ${this.m_VoiceCallState.m_targetAccountID}`,
			);
			this.EndVoiceChatInternal(false);
		} else {
			this.LogMsg(
				"(VoiceChat) OnUserLeaveOneOnOneVoiceChat called when in a group not one-on-one chat!",
			);
		}
	}
	OnUserEndVoiceChat() {
		if (
			this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_None &&
			this.m_VoiceCallState.m_targetAccountID != 0
		) {
			if (!this.m_VoiceCallState.m_bPostedOneOnOneEndedMsg) {
				let e = c.xm.ChatStore.GetFriendChat(
					this.m_VoiceCallState.m_targetAccountID,
					false,
				);
				let t = c.xm.FriendStore.self;
				if (e != null && t != null) {
					this.m_VoiceCallState.m_bPostedOneOnOneEndedMsg = true;
					e.AddVoiceChannelInviteMsg(
						c.xm.CMInterface.steamid.GetAccountID(),
						c.xm.GetServerRTime32(),
						Localize("#FriendMsg_VoiceChannelEndedExplicit", t.display_name),
					);
				}
			}
			let e = this.m_VoiceCallState.m_targetAccountID;
			this.m_VoiceCallState.m_targetAccountID = 0;
			let t = a.w.Init(ce);
			t.Body().set_steamid_partner(
				m.b.InitFromAccountID(e).ConvertTo64BitString(),
			);
			this.DeleteOneOnOneCallWaitingJoinOrAccept(e);
			Ie.EndOneOnOneChat(this.m_CMInterface.GetServiceTransport(), t).then(
				(t) => {
					if (t.GetEResult() == 1) {
						this.LogMsg(`(VoiceChat) Ended voice chat with ${e}`);
					} else {
						this.LogMsg(`(VoiceChat) Failed ending voice chat with ${e}`);
					}
				},
			);
		}
		if (this.m_VoiceCallState.m_targetAccountID != 0) {
			this.DeleteOneOnOneCallWaitingJoinOrAccept(
				this.m_VoiceCallState.m_targetAccountID,
			);
		}
		this.EndVoiceChatInternal(false);
	}
	m_fnPendingOneOnOneVoiceChatRequestsCallback = null;
	m_pendingOneOnOneVoiceChatRequestsAutorunDisposer = null;
	RegisterForPendingOneOnOneVoiceChatRequests(e) {
		this.m_fnPendingOneOnOneVoiceChatRequestsCallback = e;
		if (this.m_pendingOneOnOneVoiceChatRequestsAutorunDisposer) {
			this.m_pendingOneOnOneVoiceChatRequestsAutorunDisposer();
		}
		this.m_pendingOneOnOneVoiceChatRequestsAutorunDisposer = null;
		if (this.m_fnPendingOneOnOneVoiceChatRequestsCallback) {
			this.m_pendingOneOnOneVoiceChatRequestsAutorunDisposer = fm(() => {
				if (!this.m_fnPendingOneOnOneVoiceChatRequestsCallback) {
					return;
				}
				let e = Array.from(
					this.m_mapOneOnOneCallsWaitingJoinOrAccept.keys(),
				).filter(
					(e) =>
						!this.BSelfHadPreviouslyJoinedOneOnOneChat(e) &&
						this.GetActiveOneOnOneVoiceChatAccountID() != e &&
						this.BPartnerHasRequestedAndIsInOneOnOneChat(e),
				);
				this.m_fnPendingOneOnOneVoiceChatRequestsCallback(e);
			});
		}
	}
	m_fnCurrentUserVoiceLevelCallback = null;
	m_currentUserVoiceLevelAutorunDisposer = null;
	RegisterForCurrentUserVoiceLevel(e) {
		this.m_fnCurrentUserVoiceLevelCallback = e;
		if (this.m_currentUserVoiceLevelAutorunDisposer) {
			this.m_currentUserVoiceLevelAutorunDisposer();
		}
		this.m_currentUserVoiceLevelAutorunDisposer = null;
		if (this.m_fnCurrentUserVoiceLevelCallback) {
			this.m_currentUserVoiceLevelAutorunDisposer = fm(() => {
				if (!this.m_fnCurrentUserVoiceLevelCallback) {
					return;
				}
				let e = this.get_volume(this.GetLocalAccountID());
				this.m_fnCurrentUserVoiceLevelCallback(e);
			});
		}
	}
	SetSelectedMic(e) {
		if (e != this.m_Settings.m_SelectedMicID) {
			this.LogMsg(`(VoiceChat) Set selected mic ${e}`);
			this.m_Settings.m_SelectedMicID = e;
			this.m_Settings.SaveToLocalStorage();
			this.RestartVoiceChatIfConnected();
		}
	}
	SetSelectedOutput(e) {
		if (e != this.m_Settings.m_SelectedOutputID) {
			this.LogMsg(`(VoiceChat) Set selected output ${e}`);
			this.m_Settings.m_SelectedOutputID = e;
			this.m_Settings.SaveToLocalStorage();
			this.RestartVoiceChatIfConnected();
		}
	}
	GetAudioWorkletSupport() {
		return c.xm.AudioPlaybackManager.supports_audio_worklets;
	}
	GetUserDeniedMicAccess() {
		return this.m_bUserHasDeniedMicPermissions;
	}
	GetSelectedMic() {
		return this.m_Settings.m_SelectedMicID;
	}
	GetSelectedOutputDevice() {
		return this.m_Settings.m_SelectedOutputID;
	}
	SetUseEchoCancellation(e) {
		if (e != this.m_Settings.m_VoiceUseEchoCancellation) {
			this.m_Settings.m_VoiceUseEchoCancellation = e;
			this.m_Settings.SaveToLocalStorage();
			this.RestartVoiceChatIfConnected();
		}
	}
	GetUseEchoCancellation() {
		return this.m_Settings.m_VoiceUseEchoCancellation;
	}
	SetUseNoiseCancellation(e) {
		if (e != this.m_Settings.m_VoiceUseNoiseCancellation) {
			this.m_Settings.m_VoiceUseNoiseCancellation = e;
			this.m_Settings.SaveToLocalStorage();
			this.RestartVoiceChatIfConnected();
		}
	}
	GetUseNoiseCancellation() {
		return this.m_Settings.m_VoiceUseNoiseCancellation;
	}
	SetUseAutoGainControl(e) {
		if (e != this.m_Settings.m_VoiceUseAutoGainControl) {
			this.m_Settings.m_VoiceUseAutoGainControl = e;
			this.m_Settings.SaveToLocalStorage();
			this.RestartVoiceChatIfConnected();
		}
	}
	GetUseAutoGainControl() {
		return this.m_Settings.m_VoiceUseAutoGainControl;
	}
	SetVoiceEchoLocalMic(e) {
		this.m_VoiceEchoLocalMic = e;
		this.UpdateNoiseGateOnActiveMic();
	}
	GetVoiceEchoLocalMic() {
		return this.m_VoiceEchoLocalMic;
	}
	GetPushToTalkOrMuteSoundsEnabled() {
		return this.m_Settings.m_bPlayPTTSounds;
	}
	SetPushToTalkOrMuteSoundsEnabled(e) {
		if (this.m_Settings.m_bPlayPTTSounds != e) {
			this.m_Settings.m_bPlayPTTSounds = e;
			this.m_Settings.SaveToLocalStorage();
		}
	}
	SetPushToTalkEnabled(e) {
		this.m_bPushToTalkEnabled = e;
		this.m_bPushToMuteEnabled = false;
	}
	GetPushToTalkEnabled() {
		return this.m_bPushToTalkEnabled;
	}
	SetPushToMuteEnabled(e) {
		this.m_bPushToMuteEnabled = e;
		this.m_bPushToTalkEnabled = false;
	}
	GetPushToMuteEnabled() {
		return this.m_bPushToMuteEnabled;
	}
	GetPushToTalkVoiceStateEnabled() {
		return this.m_bVoicePTTStateEnabled;
	}
	GetPushToTalkHotKeyVK() {
		return this.m_VKPushToTalkHotKey;
	}
	GetPushToTalkHotKeyDisplayString() {
		return this.m_strPushToTalkDisplayString;
	}
	GetUseSteamAudioSpatialization() {
		return this.m_Settings.m_bUseSteamAudioSpatialization;
	}
	SetUseSteamAudioSpatialization(e) {
		if (this.m_Settings.m_bUseSteamAudioSpatialization != e) {
			this.m_Settings.m_bUseSteamAudioSpatialization = e;
			this.m_Settings.SaveToLocalStorage();
		}
	}
	ConfigureVideo(e, t) {
		const r = e != this.m_bSendVideo;
		this.m_bSendVideo = e;
		this.m_bReceiveVideo = t;
		if (r) {
			this.m_rgAudioStreams.forEach((t) => {
				if (t.type == We.k_EAudioStreamType_Microphone) {
					t.stream?.getVideoTracks().forEach((t) => (t.enabled = e));
				}
			});
			this.SendVoiceStatusUpdate();
		}
	}
	SetReceivingVideo(e, t) {
		if (t && !this.m_bReceiveVideo) {
			this.ConfigureVideo(this.m_bSendVideo, true);
			this.RestartVoiceChatIfConnected();
		}
		this.UpdateUserVideoStatus(e, t);
	}
	UpdateUserVideoStatus(e, t) {
		let r = this.m_rgVideoStreams.find((t) => t.accountid == e);
		if (r) {
			r.receive = t;
		}
		if (this.m_VoiceCallState.m_eState < Ve.k_EVoiceCallState_Connected) {
			if (t && !r) {
				this.AddPlaceholderVideoStream(e).receive = true;
			}
			return;
		}
		let n = a.w.Init(_e);
		n.Body().set_voice_chatid(this.m_VoiceCallState.m_voiceChatID);
		n.Body().set_user_steamid(m.b.InitFromAccountID(e).ConvertTo64BitString());
		n.Body().set_accept_webrtc_video(t);
		Ie.UpdateUserVideoStatus(this.m_CMInterface.GetServiceTransport(), n)
			.then((r) => {
				if (r.GetEResult() != 1) {
					this.LogMsg(`(WebRTC) Error updating video status for ${e}`);
					this.UpdateUserVideoStatus(e, t);
				}
			})
			.catch((r) => {
				this.LogMsg(`(WebRTC) Error updating video status for ${e}`);
				this.UpdateUserVideoStatus(e, t);
			});
	}
	GetPerUserGainLevels() {
		return this.m_mapPerUserOutputGain;
	}
	GetPerUserVoiceStatus() {
		return this.m_mapUserVoiceStatus;
	}
	SetVoiceLogDetails(e) {
		this.m_LogVoiceChatDetails = e;
	}
	GetVoiceLogDetails() {
		return this.m_LogVoiceChatDetails;
	}
	SetUseNoiseGateLevel(e) {
		if (e != this.m_Settings.m_NoiseGateLevel) {
			this.LogMsg(`(VoiceChat) Nose Gate Level: ${e}`);
			this.m_Settings.m_NoiseGateLevel = e;
			this.m_Settings.SaveToLocalStorage();
			this.UpdateNoiseGateOnActiveMic();
		}
	}
	GetUseNoiseGateLevel() {
		return this.m_Settings.m_NoiseGateLevel;
	}
	SetVoiceInputGain(e) {
		if (this.m_Settings.m_VoiceInputGain != e) {
			this.m_Settings.m_VoiceInputGain = Math.max(
				0,
				Math.min(e, F$.k_MaxInputOutputGainValue),
			);
			this.LogMsg(
				`(VoiceChat) New mic Input Gain value is ${this.m_Settings.m_VoiceInputGain}`,
			);
			if (this.m_MicInputGainNode != null) {
				this.m_MicInputGainNode.gain.setValueAtTime(
					this.GetCurrentVoiceInputGainTarget(),
					this.m_AudioContext.currentTime,
				);
			}
			const t = this.m_Settings.m_VoiceInputGain == 0 && !this.IsMicMuted();
			const r = this.m_Settings.m_VoiceInputGain != 0 && this.IsMicMuted();
			if (t || r) {
				this.ToggleMicMuting();
			}
			this.m_Settings.SaveToLocalStorage();
		}
	}
	GetVoiceInputGain() {
		return this.m_Settings.m_VoiceInputGain;
	}
	SetVoiceOutputGain(e) {
		if (this.m_Settings.m_VoiceOutputGain != e) {
			this.m_Settings.m_VoiceOutputGain = Math.max(
				0,
				Math.min(e, F$.k_MaxInputOutputGainValue),
			);
			this.LogMsg(
				`(VoiceChat) New global OutputGain value is ${this.m_Settings.m_VoiceOutputGain}`,
			);
			const t = this.m_Settings.m_VoiceOutputGain == 0 && !this.IsOutputMuted();
			const r = this.m_Settings.m_VoiceOutputGain != 0 && this.IsOutputMuted();
			if (t || r) {
				this.ToggleOutputMuting();
			}
			this.m_Settings.SaveToLocalStorage();

			for (let t of this.m_rgAudioStreams) {
				if (t.output_gain_node) {
					if (t.type == We.k_EAudioStreamType_Microphone) {
						t.output_gain_node.gain.setValueAtTime(
							this.m_Settings.m_VoiceOutputGain,
							this.m_AudioContext.currentTime,
						);
					} else {
						t.output_gain_node.gain.setValueAtTime(
							this.m_Settings.m_VoiceOutputGain *
								this.GetPerUserGainLevel(t.accountid),
							this.m_AudioContext.currentTime,
						);
					}
				}
			}
		}
	}
	BIsAccountFullyConnectedToActiveVoiceChat(e) {
		if (e == this.m_CMInterface.steamid.GetAccountID()) {
			return this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_Connected;
		}
		if (this.m_VoiceCallState.m_eState < Ve.k_EVoiceCallState_Connected) {
			return false;
		}

		for (let r of this.m_rgAudioStreams) {
			if (
				r.output_gain_node &&
				r.type == We.k_EAudioStreamType_IncomingStream &&
				r.accountid == e
			) {
				return true;
			}
		}

		return false;
	}
	GetVoiceOutputGain() {
		return this.m_Settings.m_VoiceOutputGain;
	}
	GetUserMutedRemotely(e) {
		let t = this.m_mapUserVoiceStatus.get(e);
		if (t == null) {
			t = new st();
			this.m_mapUserVoiceStatus.set(e, t);
		}
		return t.mic_muted_locally;
	}
	GetOutputMutedRemotely(e) {
		let t = this.m_mapUserVoiceStatus.get(e);
		if (t == null) {
			t = new st();
			this.m_mapUserVoiceStatus.set(e, t);
		}
		return t.output_muted_locally;
	}
	GetUserHasNoMicForSession(e) {
		let t = this.m_mapUserVoiceStatus.get(e);
		if (t == null) {
			t = new st();
			this.m_mapUserVoiceStatus.set(e, t);
		}
		return t.has_no_mic_for_session;
	}
	GetUserSendsVideo(e) {
		let t = this.m_mapUserVoiceStatus.get(e);
		if (t == null) {
			t = new st();
			this.m_mapUserVoiceStatus.set(e, t);
		}
		return t.sends_video;
	}
	ConvertSliderToGainValue(e, t) {
		return (e = e <= 50 ? (e / 50) * 1 : 1 + ((e - 50) / 50) * (t - 1));
	}
	ConvertGainValueToSliderValue(e, t) {
		let r = e;
		r = e <= 1 ? e * 50 : 50 + ((e - 1) / (t - 1)) * 50;
		return r;
	}
	ForceReconnectingStatus(e) {
		this.m_bForceReconnectingStatus = true;
	}
	ForceConnectingStatus(e) {
		this.m_bForceConnectingStatus = true;
	}
	SetAutoShowVideoStream(e) {
		this.m_bAutoShowVideoStream = e;
		if (e) {
			this.m_bReceiveVideo = true;
		}
	}
	GetActiveChatRoomGroupID() {
		if (this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_None) {
			return "";
		} else if (this.m_VoiceCallState.m_chatRoom) {
			return this.m_VoiceCallState.m_chatRoom.groupID;
		} else {
			return "";
		}
	}
	GetActiveVoiceChatID() {
		if (this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_None) {
			return "";
		} else if (this.m_VoiceCallState.m_chatRoom) {
			return this.m_VoiceCallState.m_chatRoom.chatID;
		} else {
			return "";
		}
	}
	BInitiatedOneOnOneChat(e) {
		return (
			this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_None &&
			this.m_VoiceCallState.m_targetAccountID == e &&
			this.m_VoiceCallState.m_bInitiatedOneOnOneCall
		);
	}
	ToggleMicMuting() {
		for (let e = 0; e < this.m_rgAudioStreams.length; ++e) {
			let t = this.m_rgAudioStreams[e];
			if (t.type == We.k_EAudioStreamType_Microphone) {
				t.muted = !t.muted;
				let e = t.stream.getTracks();
				for (let r = 0; r < e.length; r++) {
					e[r].enabled = !t.muted;
				}
				if (t.muted) {
					this.m_MicInputGainNode.gain.setValueAtTime(
						0,
						this.m_AudioContext.currentTime + 0.2,
					);
				} else {
					this.m_MicInputGainNode.gain.setValueAtTime(
						this.GetCurrentVoiceInputGainTarget(),
						this.m_AudioContext.currentTime,
					);
				}
			}
		}
		this.SendVoiceStatusUpdate();
	}
	BHasSampleRateTooHighInBrowser() {
		return (
			!i.TS.IN_CLIENT &&
			c.xm.AudioPlaybackManager.GetLastObservedSampleRate() > 48000
		);
	}
	BNoMicAvailableForSession() {
		if (
			this.m_VoiceCallState.m_eState <= Ve.k_EVoiceCallState_RequestedMicAccess
		) {
			return false;
		}
		if (this.BHasSampleRateTooHighInBrowser()) {
			return true;
		}
		for (let e = 0; e < this.m_rgAudioStreams.length; ++e) {
			if (this.m_rgAudioStreams[e].type == We.k_EAudioStreamType_Microphone) {
				return false;
			}
		}
		return true;
	}
	IsMicMuted() {
		for (let e = 0; e < this.m_rgAudioStreams.length; ++e) {
			if (this.m_rgAudioStreams[e].type == We.k_EAudioStreamType_Microphone) {
				return this.m_rgAudioStreams[e].muted;
			}
		}
		return false;
	}
	ToggleOutputMuting() {
		this.m_bOutputMuted = !this.m_bOutputMuted;
		for (let e = 0; e < this.m_rgAudioStreams.length; ++e) {
			let t = this.m_rgAudioStreams[e];
			if (t.type == We.k_EAudioStreamType_IncomingStream) {
				t.muted = this.m_bOutputMuted || this.GetPerUserMuting(t.accountid);
				let e = t.stream.getTracks();
				for (let t = 0; t < e.length; t++) {
					e[t].enabled = !this.m_bOutputMuted;
				}
			}
		}
		this.SendVoiceStatusUpdate();
	}
	IsOutputMuted() {
		return this.m_bOutputMuted;
	}
	GetActiveOneOnOneVoiceChatAccountID() {
		if (this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_None) {
			return 0;
		} else {
			return this.m_VoiceCallState.m_targetAccountID;
		}
	}
	get audio_streams() {
		return this.m_rgAudioStreams;
	}
	get video_streams() {
		return this.m_rgVideoStreams;
	}
	AddPlaceholderVideoStream(e) {
		let t = new Xe();
		t.accountid = e;
		this.m_rgVideoStreams.push(t);
		if (this.m_bAutoShowVideoStream) {
			t.showOnDesktop = true;
			this.SetReceivingVideo(e, true);
		}
		return t;
	}
	get mic_volume() {
		return this.m_MicVolumeMeter;
	}
	get_volume(e) {
		if (e == this.m_CMInterface.steamid.GetAccountID()) {
			if (
				this.IsMicMuted() ||
				(this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_Connected &&
					this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_LocalMicOnly)
			) {
				return 0;
			}
		} else if (
			this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_Connected
		) {
			return 0;
		}
		let t = 0;

		for (let n of this.m_rgAudioStreams) {
			if (n.accountid == e && n.volume_meter != null) {
				t = Math.max(t, n.volume_meter.rounded_volume);
			}
		}

		return t;
	}
	GetPerUserGainLevel(e) {
		let t = this.m_mapPerUserOutputGain.get(e);
		if (t == null) {
			return 1;
		} else {
			return t.gain;
		}
	}
	GetPerUserMuting(e) {
		let t = this.m_mapPerUserOutputGain.get(e);
		return t != null && t.muted;
	}
	SetPerUserMuting(e, t) {
		let r = this.m_mapPerUserOutputGain.get(e);
		if (r == null) {
			r = new at();
		}
		r.muted = t || this.m_bOutputMuted;
		this.m_mapPerUserOutputGain.set(e, r);
		this.UpdateStreamsForPerUseGainChange(e);
	}
	SetPerUserGainLevel(e, t) {
		let r = Math.max(0, Math.min(4, t));
		let n = this.m_mapPerUserOutputGain.get(e);
		if (n == null) {
			n = new at();
		}
		n.gain = r;
		if (n.gain < 0.001) {
			n.muted = true;
		} else {
			n.muted = false;
		}
		this.m_mapPerUserOutputGain.set(e, n);
		this.UpdateStreamsForPerUseGainChange(e);
	}
	UpdateStreamsForPerUseGainChange(e) {
		let t = this.m_mapPerUserOutputGain.get(e);
		if (t == null) {
			t = new at();
		}

		for (let n of this.m_rgAudioStreams) {
			if (n.accountid == e && n.output_gain_node != null) {
				n.muted = t.muted;
				n.output_gain_node.gain.setValueAtTime(
					this.m_Settings.m_VoiceOutputGain * t.gain,
					this.m_AudioContext.currentTime,
				);
				let e = n.stream.getTracks();
				for (let t = 0; t < e.length; t++) {
					e[t].enabled = !n.muted;
				}
			}
		}
	}
	OnUserLeftChatRoomVoiceChat(e, t, r, n) {
		this.m_rgVideoStreams
			.filter((e) => e.accountid == r)
			.map((e) => (e.stream = null));
		let i = {
			groupID: e,
			chatID: t,
		};
		if (
			this.m_VoiceCallState.m_eState >
				Ve.k_EVoiceCallState_RequestedPermission &&
			this.m_VoiceCallState.BMatchingCall(0, i)
		) {
			if (r == this.m_CMInterface.steamid.GetAccountID() && !n) {
				this.LogMsg(
					`(ChatRoom) We were told that we left chat ${t} but we hadn't initiated that, trying to reconnect...`,
				);
				this.RestartVoiceChatIfConnected();
			}
		}
	}
	IsMicTestActive() {
		return this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_LocalMicOnly;
	}
	IsAnyVoiceActive() {
		return (
			(!(this.m_VoiceCallState.m_eState <= Ve.k_EVoiceCallState_LocalMicOnly) ||
				this.m_VoiceCallState.m_targetAccountID != 0 ||
				this.m_VoiceCallState.m_targetAccountID != 0 ||
				this.m_VoiceCallState.m_chatRoom != null) &&
			(this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_None ||
				this.m_ScheduledInitiate != 0)
		);
	}
	BSelfHasAcceptedOrInitiatedOneOnOneChat(e) {
		return (
			this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_None &&
			this.m_VoiceCallState.m_targetAccountID == e &&
			(!!this.m_VoiceCallState.m_bInitiatedOneOnOneCall ||
				this.m_VoiceCallState.m_eState >=
					Ve.k_EVoiceCallState_NotifyingVoiceChatOfWebRTCSession)
		);
	}
	BSelfHadPreviouslyJoinedOneOnOneChat(e) {
		let t = this.m_mapOneOnOneCallsWaitingJoinOrAccept.get(e);
		if (t == null) {
			return false;
		}
		if (t.partner_accountid != this.m_CMInterface.steamid.GetAccountID()) {
			return false;
		}
		let r = t.voice_chatid;
		return t.previously_joined && r != "";
	}
	BPartnerHasAcceptedOrInitiatedOneOnOneChat(e) {
		return (
			(this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_None &&
				!this.m_VoiceCallState.m_bInitiatedOneOnOneCall &&
				!!this.BPartnerHasRequestedAndIsInOneOnOneChat(e)) ||
			(this.m_VoiceCallState.m_eState >
				Ve.k_EVoiceCallState_RequestedPermission &&
				!this.m_VoiceCallState.m_bWaitingOnOneOnOneRejoin)
		);
	}
	BPartnerHasRequestedAndIsInOneOnOneChat(e) {
		let t = this.m_mapOneOnOneCallsWaitingJoinOrAccept.get(e);
		return (
			t != null &&
			t.partner_accountid == this.m_CMInterface.steamid.GetAccountID() &&
			t.voice_chatid != ""
		);
	}
	IsAttemptingInitialConnection() {
		return (
			(this.m_VoiceCallState.m_targetAccountID == 0 ||
				this.m_VoiceCallState.m_eState !=
					Ve.k_EVoiceCallState_RequestedPermission) &&
			this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_LocalMicOnly &&
			this.IsAnyVoiceActive() &&
			this.m_VoiceCallState.m_nFailuresThisInitiate == 0 &&
			this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_Connected
		);
	}
	HasBeenAttemptingOverTwoSeconds() {
		let e = this.m_VoiceCallState.m_bIsConnectionAttemptOverTwoSeconds;
		let t = this.IsAttemptingInitialConnection();
		return !!this.m_bForceConnectingStatus || (e && t);
	}
	IsAttemptingReconnect() {
		let e = this.IsAnyVoiceActive();
		let t = this.m_VoiceCallState.m_nFailuresThisInitiate;
		let r = this.m_VoiceCallState.m_eState;
		return (
			!!this.m_bForceReconnectingStatus ||
			(e && t > 0 && r != Ve.k_EVoiceCallState_Connected)
		);
	}
	IsVoiceActiveForFriend(e) {
		return this.IsVoiceActive(e, null);
	}
	IsVoiceActiveForRoom(e, t) {
		return this.IsVoiceActive(0, {
			groupID: e,
			chatID: t,
		});
	}
	IsVoiceActiveForGroup(e) {
		return (
			!!this.m_VoiceCallState.BCallActiveForGroup(e) &&
			this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_None
		);
	}
	IsVoiceChatActive() {
		return this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_None;
	}
	LogMsg(e) {
		this.m_rgLogLines.push(e);
		if (this.m_LogVoiceChatDetails) {
			console.log(e);
		}
	}
	GetVoiceLogs() {
		return this.m_rgLogLines.join("\r\n");
	}
	OnPushToTalkReleased() {
		if (
			(this.m_bPushToTalkEnabled &&
				this.m_MicInputGainNode != null &&
				!this.m_bVoicePTTStateEnabled) ||
			(this.m_bPushToMuteEnabled &&
				this.m_MicInputGainNode != null &&
				this.m_bVoicePTTStateEnabled)
		) {
			this.m_MicInputGainNode.gain.setValueAtTime(
				this.GetCurrentVoiceInputGainTarget(),
				this.m_AudioContext.currentTime + 0.2,
			);
		}
	}
	DebouncedToggleMicMuting() {
		this.ToggleMicMuting();
		if (this.GetPushToTalkOrMuteSoundsEnabled()) {
			if (this.IsMicMuted()) {
				c.xm.AudioPlaybackManager.PlayAudioURL(
					`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_ui_ptt_short_02_quiet.m4a`,
				);
			} else {
				c.xm.AudioPlaybackManager.PlayAudioURL(
					`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_ui_ptt_short_01_quiet.m4a`,
				);
			}
		}
	}
	OnPushToTalkStateChange(e) {
		let t = e;
		let r = false;
		if (c.xm.SettingsStore.BClientHasFeatureOrOnWeb("NewVoiceHotKeyState")) {
			r = true;
			if (this.m_bPushToMuteEnabled) {
				t = !e;
			}
		}
		if (
			!r ||
			this.m_bPushToTalkEnabled ||
			this.m_bPushToTalkEnabled ||
			this.m_bPushToMuteEnabled
		) {
			if (t != this.m_bVoicePTTStateEnabled) {
				this.m_bVoicePTTStateEnabled = t;
				if (
					(this.m_bPushToTalkEnabled || this.m_bPushToMuteEnabled) &&
					this.m_MicInputGainNode != null
				) {
					if (this.m_bVoicePTTStateEnabled) {
						if (this.GetPushToTalkOrMuteSoundsEnabled()) {
							c.xm.AudioPlaybackManager.PlayAudioURL(
								`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_ui_ptt_short_01_quiet.m4a`,
							);
						}
						if (this.m_bPushToMuteEnabled) {
							this.m_hPushToTalkReleaseTimeout = SetBackgroundTimeout(
								this.OnPushToTalkReleased,
								100,
							);
						} else {
							this.m_MicInputGainNode.gain.setValueAtTime(
								this.GetCurrentVoiceInputGainTarget(),
								this.m_AudioContext.currentTime,
							);
							if (this.m_hPushToTalkReleaseTimeout != 0) {
								ClearBackgroundTimeout(this.m_hPushToTalkReleaseTimeout);
							}
						}
					} else {
						if (this.GetPushToTalkOrMuteSoundsEnabled()) {
							c.xm.AudioPlaybackManager.PlayAudioURL(
								`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_ui_ptt_short_02_quiet.m4a`,
							);
						}
						if (this.m_bPushToMuteEnabled) {
							this.m_MicInputGainNode.gain.setValueAtTime(
								this.GetCurrentVoiceInputGainTarget(),
								this.m_AudioContext.currentTime,
							);
							if (this.m_hPushToTalkReleaseTimeout != 0) {
								ClearBackgroundTimeout(this.m_hPushToTalkReleaseTimeout);
							}
						} else {
							this.m_hPushToTalkReleaseTimeout = SetBackgroundTimeout(
								this.OnPushToTalkReleased,
								100,
							);
						}
					}
				}
			}
		} else if (e && this.m_MicInputGainNode != null) {
			this.DebouncedToggleMicMuting();
		}
	}
	GetCurrentVoiceInputGainTarget() {
		if (
			(this.m_bPushToTalkEnabled && !this.m_bVoicePTTStateEnabled) ||
			(this.m_bPushToMuteEnabled && !this.m_bVoicePTTStateEnabled)
		) {
			return 0;
		} else {
			return this.m_Settings.m_VoiceInputGain;
		}
	}
	RestartVoiceChatIfConnected() {
		if (
			this.m_VoiceCallState.m_eState > Ve.k_EVoiceCallState_ScheduledInitiate
		) {
			let e = this.m_VoiceCallState.m_targetAccountID;
			let t = this.m_VoiceCallState.m_chatRoom;
			this.LogMsg(
				"(WebRTC) Ending then auto-re-initiating voice chat - without leave of chatroom if joined as attempt is quick rejoin",
			);
			this.EndVoiceChatInternal(true);
			this.InitiateVoiceChat(e, t);
		}
	}
	GetNoiseGateOptions() {
		let e = {
			attack: 2,
			release: 0.01,
			threshold: -80,
			bufferSize: 1024,
		};
		switch (this.m_Settings.m_NoiseGateLevel) {
			case Ye.H.k_ENoiseGateLevel_Off: {
				break;
			}
			case Ye.H.k_ENoiseGateLevel_Low: {
				e = {
					attack: 0.8,
					release: 0.06,
					threshold: -48,
					bufferSize: 1024,
				};
				break;
			}
			case Ye.H.k_ENoiseGateLevel_Medium: {
				e = {
					attack: 0.8,
					release: 0.06,
					threshold: -36,
					bufferSize: 1024,
				};
				break;
			}
			case Ye.H.k_ENoiseGateLevel_High: {
				e = {
					attack: 0.8,
					release: 0.09,
					threshold: -22,
					bufferSize: 1024,
				};
			}
		}
		return e;
	}
	DeleteOneOnOneCallWaitingJoinOrAccept(e) {
		let t = this.m_mapOneOnOneCallsWaitingJoinOrAccept.get(e);
		if (t != null) {
			t.ClearAudioRepeats();
			this.m_mapOneOnOneCallsWaitingJoinOrAccept.delete(e);
		}
	}
	UpdateNoiseGateOnActiveMic() {
		if (this.m_MicInputGainNode != null) {
			let e;

			for (let r of this.m_rgAudioStreams) {
				if (r.type == We.k_EAudioStreamType_Microphone) {
					e = r;
					break;
				}
			}

			if (e != null) {
				if (this.m_MicNoiseGate != null) {
					this.m_MicInputGainNode.disconnect(this.m_MicNoiseGate.input);
					if (this.m_MicNoiseGate.input) {
						this.m_MicNoiseGate.input.disconnect();
						this.m_MicNoiseGate.output.disconnect();
						this.m_MicNoiseGate.noiseGateKernel_.disconnect();
					} else {
						this.m_MicNoiseGate.disconnect();
					}
					this.m_MicNoiseGate = undefined;
				} else {
					this.m_MicInputGainNode.disconnect(e.destination_node);
					try {
						this.m_MicInputGainNode.disconnect(e.output_gain_node);
					} catch (e) {}
				}
				this.m_MicVolumeMeter.stop();
				this.m_MicVolumeMeter = undefined;
				if (e.volume_meter != null) {
					e.volume_meter.stop();
					e.volume_meter = undefined;
				}
				if (this.m_Settings.m_NoiseGateLevel != Ye.H.k_ENoiseGateLevel_Off) {
					this.SetupNoiseGateOnMic(e.destination_node);
				} else {
					this.m_MicInputGainNode.connect(e.destination_node);
				}
				let t = e.source_node;
				if (this.m_MicNoiseGate) {
					t = this.m_MicNoiseGate.output
						? this.m_MicNoiseGate.output
						: this.m_MicNoiseGate;
				}
				this.m_MicVolumeMeter = new Ue(t, this.m_AudioContext);
				e.volume_meter = this.m_MicVolumeMeter;
				if (this.m_VoiceEchoLocalMic && this.m_MicNoiseGate == null) {
					this.m_MicInputGainNode.connect(e.output_gain_node);
				} else if (this.m_VoiceEchoLocalMic) {
					if (this.m_MicNoiseGate.output) {
						this.m_MicNoiseGate.output.connect(e.output_gain_node);
					} else {
						this.m_MicNoiseGate.connect(e.output_gain_node);
					}
				}
			}
		}
	}
	OnAudioContextStateChange() {
		if (this.m_AudioContext != null) {
			this.LogMsg(
				`(WebAudio) Audio context state changed: ${this.m_AudioContext.state}`,
			);
		}
	}
	OnIceCandidate(e) {
		this.LogMsg(`(ICE) Local candidate: ${JSON.stringify(e.candidate)}`);
	}
	AddRemoteIceCandidate(e, t) {
		let r = this.LogMsg;
		r(`(ICE) Candidate from remote peer: ${JSON.stringify(t)}`);
		e.addIceCandidate(t)
			.then(() => {})
			.catch((e) => {
				r(`addIceCandidate error: ${e} ${e.name}`);
			});
	}
	OnSignalingStateChange(e, t) {
		this.LogMsg(`(WebRTC) OnSignalingStateChange: ${e.signalingState}`);
	}
	OnIceConnectionStateChange(e, t) {
		this.LogMsg(`(ICE) OnIceConnectionStateChange: ${e.iceConnectionState}`);
		if (
			e.iceConnectionState == "failed" &&
			this.m_VoiceCallState.m_eState > Ve.k_EVoiceCallState_CreatePeerConnection
		) {
			this.BackOffAndRetryInitiateVoiceChat();
		} else if (
			(e.iceConnectionState == "completed" ||
				e.iceConnectionState == "connected") &&
			this.m_VoiceCallState.m_eState ==
				Ve.k_EVoiceCallState_WebRTCConnectedWaitingOnIceConnected
		) {
			this.LogMsg(
				"(VoiceChat) ICE connection state now 'completed' or 'connected', proceeding to join voice chat",
			);
			this.JoinVoiceChatOrAskForOneOnOneChatNow();
		}
	}
	OnIceGatheringStateChange(e, t) {
		this.LogMsg(`(ICE) OnIceGatheringStateChange: ${e.iceGatheringState}`);
	}
	RemoveStreamToOutput(e) {
		this.LogMsg(
			`(WebRTC) RemoveStreamToOutput - ${e.id} - ${e.getTracks().length}`,
		);
		for (let t = 0; t < this.m_rgAudioStreams.length; ++t) {
			let r = this.m_rgAudioStreams[t];
			if (r.unique_id == e.id) {
				r.elem.pause();
				r.elem.srcObject = undefined;
				r.elem.src = undefined;
				r.elem = undefined;
				if (r.volume_meter != null) {
					r.volume_meter.stop();
					r.volume_meter = undefined;
				}
				if (r.output_gain_node != null) {
					r.output_gain_node.disconnect();
					r.output_gain_node = undefined;
				}
				if (r.source_node != null) {
					try {
						r.source_node.disconnect();
					} catch (e) {}
					r.source_node = undefined;
				}
				this.m_rgAudioStreams.splice(t, 1);
				return;
			}
		}
		for (let t = 0; t < this.m_rgVideoStreams.length; ++t) {
			if (this.m_rgVideoStreams[t].unique_id == e.id) {
				this.m_rgVideoStreams.splice(t, 1);
				return;
			}
		}
	}
	OnRemoveRemoteStream(e) {
		this.RemoveStreamToOutput(e.stream);
	}
	SetupAudioStreamElementAndCreateSourceNode(e, t) {
		let r = this.m_PeerConnection.localDescription.sdp.includes("mozilla...");
		if (e.source_node != null) {
			e.source_node.disconnect();
			e.source_node = undefined;
		}
		if (e.elem == null) {
			e.elem = document.createElement("audio");
		} else {
			e.elem.srcObject = undefined;
		}
		e.elem.srcObject = t;
		if (r) {
			e.elem.play();
			e.source_node = this.m_AudioContext.createMediaElementSource(e.elem);
		} else {
			e.source_node = this.m_AudioContext.createMediaStreamSource(t);
		}
	}
	static DistanceBetween(e, t) {
		const r = e.x - t.x;
		const n = e.y - t.y;
		const i = e.z - t.z;
		return Math.sqrt(r * r + n * n + i * i);
	}
	GenerateVoicePositions() {
		const e = [];
		for (let t = 0; t < F$.k_nMaxPositions; ++t) {
			const r = (Math.PI * 2 * t) / F$.k_nMaxPositions;
			e.push({
				x: Math.cos(r),
				y: 0,
				z: Math.sin(r),
			});
		}
		const t = [];
		const r = new Set();
		t.push(0);
		r.add(0);
		while (t.length < e.length) {
			let n = -1;
			let i = -1;
			for (let a = 0; a < e.length; ++a) {
				if (r.has(a)) {
					continue;
				}
				let s = 10000;
				for (let r = 0; r < t.length; ++r) {
					s = Math.min(s, F$.DistanceBetween(e[t[r]], e[a]));
				}
				if (s > i) {
					i = s;
					n = a;
				}
			}
			t.push(n);
			r.add(n);
		}
		this.m_rgPositions = [];
		for (let r = 0; r < t.length; ++r) {
			this.m_rgPositions.push(e[t[r]]);
		}
		for (let e = t.length - 1; e >= 0; --e) {
			this.m_rgFreePositionIndices.push(e);
		}
	}
	GetNextVoiceChatPositionIndex() {
		return this.m_rgFreePositionIndices.pop();
	}
	GetVoiceChatPosition(e) {
		if (e == null) {
			return {
				x: 0,
				y: 0,
				z: 0,
			};
		}
		const t = Math.min(e, this.m_rgPositions.length - 1);
		return this.m_rgPositions[t];
	}
	SetLocalHMDPose(e) {
		this.m_localPose = e;
		if (this.m_AudioContext) {
			this.m_AudioContext.listener.positionX.setValueAtTime(
				e.position[0],
				this.m_AudioContext.currentTime,
			);
			this.m_AudioContext.listener.positionY.setValueAtTime(
				e.position[1],
				this.m_AudioContext.currentTime,
			);
			this.m_AudioContext.listener.positionZ.setValueAtTime(
				e.position[2],
				this.m_AudioContext.currentTime,
			);
			this.m_AudioContext.listener.forwardX.setValueAtTime(
				e.ahead[0],
				this.m_AudioContext.currentTime,
			);
			this.m_AudioContext.listener.forwardY.setValueAtTime(
				e.ahead[1],
				this.m_AudioContext.currentTime,
			);
			this.m_AudioContext.listener.forwardZ.setValueAtTime(
				e.ahead[2],
				this.m_AudioContext.currentTime,
			);
			this.m_AudioContext.listener.upX.setValueAtTime(
				e.up[0],
				this.m_AudioContext.currentTime,
			);
			this.m_AudioContext.listener.upY.setValueAtTime(
				e.up[1],
				this.m_AudioContext.currentTime,
			);
			this.m_AudioContext.listener.upZ.setValueAtTime(
				e.up[2],
				this.m_AudioContext.currentTime,
			);
		}
	}
	SetRemoteHMDPose(e, t) {
		this.m_mapRemotePoseForAccountID.set(e, t);
		for (const r of this.m_rgAudioStreams) {
			if (r.accountid === e) {
				if (this.m_Settings.m_bUseSteamAudioSpatialization) {
					r.steamaudio_node?.parameters
						.get("posX")
						.setValueAtTime(t.position[0], this.m_AudioContext.currentTime);
					r.steamaudio_node?.parameters
						.get("posY")
						.setValueAtTime(t.position[1], this.m_AudioContext.currentTime);
					r.steamaudio_node?.parameters
						.get("posZ")
						.setValueAtTime(t.position[2], this.m_AudioContext.currentTime);
					r.steamaudio_node?.parameters
						.get("originX")
						.setValueAtTime(
							this.m_AudioContext.listener.positionX.value,
							this.m_AudioContext.currentTime,
						);
					r.steamaudio_node?.parameters
						.get("originY")
						.setValueAtTime(
							this.m_AudioContext.listener.positionY.value,
							this.m_AudioContext.currentTime,
						);
					r.steamaudio_node?.parameters
						.get("originZ")
						.setValueAtTime(
							this.m_AudioContext.listener.positionZ.value,
							this.m_AudioContext.currentTime,
						);
					r.steamaudio_node?.parameters
						.get("aheadX")
						.setValueAtTime(
							this.m_AudioContext.listener.forwardX.value,
							this.m_AudioContext.currentTime,
						);
					r.steamaudio_node?.parameters
						.get("aheadY")
						.setValueAtTime(
							this.m_AudioContext.listener.forwardY.value,
							this.m_AudioContext.currentTime,
						);
					r.steamaudio_node?.parameters
						.get("aheadZ")
						.setValueAtTime(
							this.m_AudioContext.listener.forwardZ.value,
							this.m_AudioContext.currentTime,
						);
					r.steamaudio_node?.parameters
						.get("upX")
						.setValueAtTime(
							this.m_AudioContext.listener.upX.value,
							this.m_AudioContext.currentTime,
						);
					r.steamaudio_node?.parameters
						.get("upY")
						.setValueAtTime(
							this.m_AudioContext.listener.upY.value,
							this.m_AudioContext.currentTime,
						);
					r.steamaudio_node?.parameters
						.get("upZ")
						.setValueAtTime(
							this.m_AudioContext.listener.upZ.value,
							this.m_AudioContext.currentTime,
						);
				} else {
					r.spatializer_node?.positionX.setValueAtTime(
						t.position[0],
						this.m_AudioContext.currentTime,
					);
					r.spatializer_node?.positionY.setValueAtTime(
						t.position[1],
						this.m_AudioContext.currentTime,
					);
					r.spatializer_node?.positionZ.setValueAtTime(
						t.position[2],
						this.m_AudioContext.currentTime,
					);
				}
				break;
			}
		}
	}
	GetLocalHMDPose() {
		return this.m_localPose;
	}
	GetRemoteHMDPose(e) {
		return this.m_mapRemotePoseForAccountID.get(e);
	}
	GetRemoteHMDPoseMap() {
		return this.m_mapRemotePoseForAccountID;
	}
	AddStreamToOutput(e) {
		let t = e.id.match(/Peer-(\d+)-(\d+)-/);
		let r = t && t.length == 3 ? Number(t[2]) : 0;
		if (e.getAudioTracks().length > 0) {
			let t = new Ke();
			this.SetupAudioStreamElementAndCreateSourceNode(t, e);
			t.unique_id = e.id;
			t.stream = e;
			t.type = We.k_EAudioStreamType_IncomingStream;
			t.accountid = r;
			this.LogMsg(
				`(VoiceChat) AddStreamToOutput (audio) ${t.accountid} ${t.unique_id}`,
			);
			t.muted = this.m_bOutputMuted || this.GetPerUserMuting(t.accountid);
			if (t.muted) {
				let e = t.stream.getTracks();
				for (let r = 0; r < e.length; r++) {
					e[r].enabled = !t.muted;
				}
			}
			this.m_rgAudioStreams.push(t);
			t.output_gain_node = this.m_AudioContext.createGain();
			t.output_gain_node.gain.setValueAtTime(
				this.m_Settings.m_VoiceOutputGain *
					this.GetPerUserGainLevel(t.accountid),
				this.m_AudioContext.currentTime,
			);
			t.source_node.connect(t.output_gain_node);
			t.output_gain_node.connect(
				c.xm.AudioPlaybackManager.GetActiveDestination(),
			);
			t.volume_meter = new Ue(t.source_node, this.m_AudioContext);
			t.volume_meter.Connect(t.source_node);
		}
		if (r != 0 && e.getVideoTracks().length > 0) {
			let t =
				this.m_rgVideoStreams.find((e) => e.accountid == r) ??
				this.AddPlaceholderVideoStream(r);
			t.unique_id = e.id;
			t.stream = e;
			this.LogMsg(
				`(VoiceChat) AddStreamToOutput (video) ${t.accountid} ${t.unique_id}`,
			);
			x.OnAddRemoteVideoStream(t.accountid, t.unique_id);
		}
	}
	OnAddTrack(e, t) {
		for (let t = 0; t < this.m_rgAudioStreams.length; ++t) {
			let r = this.m_rgAudioStreams[t];
			if (
				r.unique_id == e.id &&
				(this.LogMsg(
					`(VoiceChat) OnAddTrack to existing stream ${r.accountid} ${r.unique_id}`,
				),
				r.volume_meter.DisconnectAll(),
				this.SetupAudioStreamElementAndCreateSourceNode(r, e),
				r.volume_meter.Connect(r.source_node),
				r.source_node.connect(r.output_gain_node),
				r.muted)
			) {
				let e = r.stream.getTracks();
				for (let t = 0; t < e.length; t++) {
					e[t].enabled = !r.muted;
				}
			}
		}
	}
	OnAddRemoteStream(e) {
		this.LogMsg(
			`(WebRTC) OnAddRemoteStream - ${e.stream.id} - ${
				e.stream.getTracks().length
			}`,
		);
		if (this.m_AudioContext != null) {
			if (e.stream != null && this.m_AudioContext != null) {
				this.AddStreamToOutput(e.stream);
				let t = this;
				e.stream.onaddtrack = function (e) {
					t.OnAddTrack(this, e);
				};
			}
		} else {
			this.LogMsg(
				"(WebRTC)Got OnAddRemoteStream when we don't have audio context... stopped chat?",
			);
		}
	}
	ModifyLocalSDPBeforeSetting(e) {
		let t = /a=rtpmap:(\d+)\sopus(.*)/;
		let r = /a=fmtp:(\d+)\s(.*)/;
		let n = e.sdp.split("\r\n");
		let i = e.sdp.includes("mozilla...");
		let a = false;
		for (let e = 0; e < n.length; ++e) {
			let s = n[e];
			if (s.substr(0, 2) == "m=" && e + 1 < n.length) {
				let o = "0";
				for (let r = e + 1; r < n.length; ++r) {
					s = n[r];
					if (s.substr(0, 2) == "m=") {
						e = r - 1;
						break;
					}
					let i = s.match(t);
					if (i) {
						o = i[1];
						break;
					}
				}
				if (o != "0") {
					for (let t = e + 1; t < n.length; ++t) {
						s = n[t];
						if (s.substr(0, 2) == "m=") {
							e = t - 1;
							break;
						}
						let l = s.match(r);
						if (l && l[1] == o) {
							if (!i) {
								n[t] = `a=fmtp:${l[1]} minptime=10;useinbandfec=1;usedtx=1`;
							}
							a = true;
							break;
						}
					}
				}
			}
		}
		if (a) {
			e.sdp = n.join("\r\n");
		}
		return e;
	}
	OnCreateOfferSuccess(e, t) {
		if (
			this.m_VoiceCallState.m_eState !=
			Ve.k_EVoiceCallState_CreatePeerConnection
		) {
			this.LogMsg(
				`(WebRTC) Hit OnCreateOfferSuccess in wrong state ${this.m_VoiceCallState.m_eState}`,
			);
			return;
		}
		this.LogMsg("(WebRTC) OnCreateOfferSuccess");
		let r = this;
		t = this.ModifyLocalSDPBeforeSetting(t);
		e.setLocalDescription(t)
			.then(() => {
				let e = a.w.Init(Te);
				e.Body().set_sdp(JSON.stringify(t));
				let n = new qe.UAParser(navigator.userAgent).getResult();
				e.Body().set_browser_name(n.browser.name);
				e.Body().set_browser_version(n.browser.version);
				r.LogMsg(`(WebRTC) Offer (Local Description): ${e.Body().sdp()}`);
				r.m_VoiceCallState.m_eState =
					Ve.k_EVoiceCallState_InitatedWebRTCSession;
				Le.InitiateWebRTCConnection(r.m_CMInterface.GetServiceTransport(), e)
					.then((e) => {
						if (r.m_PeerConnection == null) {
							r.LogMsg(
								"(WebRTC) Got response to InitiateWebRTCConnection with no local peer connection",
							);
							r.EndVoiceChatInternal(false);
						} else if (e.GetEResult() == 1) {
							let t = JSON.parse(e.Body().remote_description());
							r.m_PeerConnection
								.setRemoteDescription(new RTCSessionDescription(t))
								.then(() => {
									r.LogMsg(`(WebRTC) Remote Description: ${t.sdp}`);
									if (t.type == "offer") {
										r.LogMsg(
											"(WebRTC) !! received 'offer' rather than 'answer' from InitiateWebRTCConnection, unexpected.",
										);
										r.EndVoiceChatInternal(false);
									} else if (t.type == "answer") {
										r.LogMsg("(WebRTC) setRemoteDescription success");
									}
								})
								.catch((e) => {
									r.LogMsg(`(WebRTC) Remote Description: ${t.sdp}`);
									r.LogMsg(`(WebRTC) setRemoteDescription error: ${e}`);
									r.LogMsg("(VoiceChat) Fatal error, ending chat");
									r.EndVoiceChatInternal(false);
								});
						} else {
							r.LogMsg(
								`(WebRTC) Got failure (${e.GetEResult()}) response from InitiateWebRTCConnection`,
							);
							r.BackOffAndRetryInitiateVoiceChat();
						}
					})
					.catch((e) => {
						r.LogMsg(
							"(WebRTC) Failure in WebRTCClientService.InitiateWebRTCConnection",
						);
						r.BackOffAndRetryInitiateVoiceChat();
					});
			})
			.catch((e) => {
				r.LogMsg(`(WebRTC) setLocalDescription error: ${e}`);
				r.LogMsg("(VoiceChat) Fatal error, ending voice chat");
				r.EndVoiceChatInternal(false);
			});
	}
	OnCreateOfferError(e) {
		this.LogMsg(`(WebRTC) OnCreateOfferError: ${e}`);
		this.LogMsg("(VoiceChat) Fatal Error, ending chat attempt");
		this.EndVoiceChatInternal(false);
	}
	OnUpdatedCreateOfferSuccess(e, t) {
		if (this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_Connected) {
			this.LogMsg(
				`(WebRTC) Hit OnUpdatedCreateOfferSuccess in wrong state ${this.m_VoiceCallState.m_eState}`,
			);
			return;
		}
		this.LogMsg("(WebRTC) OnUpdatedCreateOfferSuccess");
		let r = this;
		t = this.ModifyLocalSDPBeforeSetting(t);
		e.setLocalDescription(t)
			.then(() => {
				let e = a.w.Init(ke);
				e.Body().set_ip_webrtc_server(r.m_VoiceCallState.m_webRTCServerIP);
				e.Body().set_port_webrtc_server(r.m_VoiceCallState.m_webRTCServerPort);
				e.Body().set_ip_webrtc_session_client(
					r.m_VoiceCallState.m_webRTCClientIP,
				);
				e.Body().set_port_webrtc_session_client(
					r.m_VoiceCallState.m_webRTCClientPort,
				);
				e.Body().set_sdp(JSON.stringify(t));
				r.LogMsg(
					`(WebRTC) Updated Offer (Local Description): ${e.Body().sdp()}`,
				);
				r.m_VoiceCallState.m_eState =
					Ve.k_EVoiceCallState_UpdatingWebRTCSession;
				Le.UpdateWebRTCConnection(r.m_CMInterface.GetServiceTransport(), e)
					.then((e) => {
						if (r.m_PeerConnection == null) {
							r.LogMsg(
								"(WebRTC) Got response to UpdateWebRTCConnection with no local peer connection",
							);
							r.EndVoiceChatInternal(false);
						} else if (e.GetEResult() == 1) {
							let t = JSON.parse(e.Body().remote_description());
							r.m_PeerConnection
								.setRemoteDescription(new RTCSessionDescription(t))
								.then(() => {
									r.LogMsg(`(WebRTC) Updated Remote Description: ${t.sdp}`);
									if (t.type == "offer") {
										r.LogMsg(
											"(WebRTC) !! received 'offer' rather than 'answer' from UpdateWebRTCConnection, unexpected.",
										);
										r.EndVoiceChatInternal(false);
									} else if (t.type == "answer") {
										r.LogMsg("(WebRTC) setRemoteDescription success");
										r.OnWebRTCConnectedAndVoiceChatConnected();
									}
								})
								.catch((e) => {
									r.LogMsg(`(WebRTC) Updated Remote Description: ${t.sdp}`);
									r.LogMsg(`(WebRTC) setRemoteDescription error: ${e}`);
									r.LogMsg("(VoiceChat) Fatal error, ending chat");
									r.EndVoiceChatInternal(false);
								});
						} else {
							r.LogMsg(
								`(WebRTC) Got failure (${e.GetEResult()}) response from UpdateWebRTCConnection`,
							);
							r.BackOffAndRetryInitiateVoiceChat();
						}
					})
					.catch((e) => {
						r.LogMsg(
							"(WebRTC) Failure in WebRTCClientService.UpdateWebRTCConnection",
						);
						r.BackOffAndRetryInitiateVoiceChat();
					});
			})
			.catch((e) => {
				r.LogMsg(`(WebRTC) setLocalDescription error: ${e}`);
				r.LogMsg("(VoiceChat) Fatal error, ending voice chat");
				r.EndVoiceChatInternal(false);
			});
	}
	CreatePeerConnection(e) {
		let t = new RTCPeerConnection({
			sdpSemantics: "plan-b",
		});
		t.onicecandidate = (e) => {
			this.OnIceCandidate(e);
		};
		t.onaddstream = this.OnAddRemoteStream;
		t.onremovestream = this.OnRemoveRemoteStream;
		t.oniceconnectionstatechange = (e) => {
			this.OnIceConnectionStateChange(t, e);
		};
		t.onicegatheringstatechange = (e) => {
			this.OnIceGatheringStateChange(t, e);
		};
		t.onsignalingstatechange = (e) => {
			this.OnSignalingStateChange(t, e);
		};
		e?.getTracks().forEach((r) => t.addTrack(r, e));
		this.m_PeerConnection = t;
		return this.m_PeerConnection;
	}
	OnMicStreamInactive(e, t) {
		this.LogMsg(`(WebRTC) Mic Stream went inactive: ${t.type}`);
		if (
			this.m_VoiceCallState.m_eState > Ve.k_EVoiceCallState_RequestedMicAccess
		) {
			this.LogMsg(
				"(WebRTC) Ending then auto-re-initiating voice chat without mic",
			);
			this.RestartVoiceChatIfConnected();
		}
	}
	OnNoiseGateMessage(e) {
		this.LogMsg(`(VoiceChat) ${e.data}`);
	}
	SetupNoiseGateOnMic(e) {
		let t = this.GetNoiseGateOptions();
		let r = c.xm.AudioPlaybackManager.supports_audio_worklets;
		if (r) {
			this.LogMsg(
				"(VoiceChat) Audio Worklets supported - high performance mic noisegate in use!",
			);
			try {
				let r = window;
				this.m_MicNoiseGate = new r.AudioWorkletNode(
					this.m_AudioContext,
					"noisegate-processor",
				);
				this.m_MicNoiseGate.port.onmessage = this.OnNoiseGateMessage;
				this.m_MicInputGainNode.connect(this.m_MicNoiseGate).connect(e);
				this.m_MicNoiseGate.parameters
					.get("threshold")
					.setValueAtTime(t.threshold, this.m_AudioContext.currentTime);
				this.m_MicNoiseGate.parameters
					.get("attack")
					.setValueAtTime(t.attack, this.m_AudioContext.currentTime);
				this.m_MicNoiseGate.parameters
					.get("release")
					.setValueAtTime(t.release, this.m_AudioContext.currentTime);
				this.m_MicNoiseGate.parameters
					.get("sampleRate")
					.setValueAtTime(
						this.m_AudioContext.sampleRate,
						this.m_AudioContext.currentTime,
					);
			} catch (e) {
				this.LogMsg(`(VoiceChat) creating AudioWorkletNode failed: ${e}`);
				r = false;
			}
		}
		if (!r) {
			this.LogMsg(
				"(VoiceChat) Browser doesn't support audio worklets, mic perf will suffer and may stutter/echo during repaint/high CPU usage",
			);
			this.m_MicNoiseGate = new xe(this.m_AudioContext, t);
			this.m_MicInputGainNode.connect(this.m_MicNoiseGate.input);
			this.m_MicNoiseGate.output.connect(e);
		}
	}
	OnGetUserMediaSuccess(e) {
		if (
			this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_RequestedMicAccess
		) {
			this.m_VoiceCallState.m_eState =
				Ve.k_EVoiceCallState_CreatePeerConnection;
			if (e?.getAudioTracks().length > 0) {
				e.id;
				let t = this.m_AudioContext.createMediaStreamSource(e);
				let r = this;
				e.oninactive = function (e) {
					r.OnMicStreamInactive(this, e);
				};
				this.m_MicInputGainNode = this.m_AudioContext.createGain();
				this.m_MicInputGainNode.gain.setValueAtTime(
					this.GetCurrentVoiceInputGainTarget(),
					this.m_AudioContext.currentTime,
				);
				t.connect(this.m_MicInputGainNode);
				let n = this.m_AudioContext.createMediaStreamDestination();
				if (this.m_Settings.m_NoiseGateLevel != Ye.H.k_ENoiseGateLevel_Off) {
					this.SetupNoiseGateOnMic(n);
				} else {
					this.m_MicInputGainNode.connect(n);
				}
				e.getVideoTracks().forEach((e) => {
					this.LogMsg(`(VoiceChat) Adding video track: ${e.id}-${e.label}`);
					n.stream.addTrack(e);
					e.enabled = this.m_bSendVideo;
				});
				e = n.stream;
				let i = new Ke();
				i.unique_id = e.id;
				i.destination_node = n;
				i.stream = e;
				i.source_node = t;
				i.type = We.k_EAudioStreamType_Microphone;
				i.accountid = this.m_CMInterface.steamid.GetAccountID();
				i.muted = false;
				i.elem = undefined;
				i.output_gain_node = this.m_AudioContext.createGain();
				i.output_gain_node.gain.setValueAtTime(
					this.m_Settings.m_VoiceOutputGain,
					this.m_AudioContext.currentTime,
				);
				i.output_gain_node.connect(
					c.xm.AudioPlaybackManager.GetActiveDestination(),
				);
				this.m_rgAudioStreams.push(i);
				let a = t;
				if (this.m_MicNoiseGate) {
					a = this.m_MicNoiseGate.output ?? this.m_MicNoiseGate;
				}
				this.m_MicVolumeMeter = undefined;
				this.m_MicVolumeMeter = new Ue(a, this.m_AudioContext);
				i.volume_meter = this.m_MicVolumeMeter;
				if (this.m_VoiceEchoLocalMic && this.m_MicNoiseGate == null) {
					this.m_MicInputGainNode.connect(i.output_gain_node);
				} else if (this.m_VoiceEchoLocalMic) {
					if (this.m_MicNoiseGate.output) {
						this.m_MicNoiseGate.output.connect(i.output_gain_node);
					} else {
						this.m_MicNoiseGate.connect(i.output_gain_node);
					}
				}
			}
			if (
				this.m_VoiceCallState.m_targetAccountID != 0 ||
				this.m_VoiceCallState.m_chatRoom != null
			) {
				let t = {
					offerToReceiveAudio: 1,
					offerToReceiveVideo: this.m_bReceiveVideo ? 1 : 0,
					voiceActivityDetection: true,
				};
				let r = this.CreatePeerConnection(e);
				let n = this;
				r.createOffer(t)
					.then((e) => {
						n.OnCreateOfferSuccess(r, e);
					})
					.catch((e) => {
						n.OnCreateOfferError(e);
					});
			} else {
				this.m_VoiceCallState.m_eState = Ve.k_EVoiceCallState_LocalMicOnly;
				this.m_VoiceCallState.m_timeFinishedConnecting = performance.now();
			}
		} else {
			for (let t of e.getTracks()) {
				t.stop();
			}
			this.LogMsg(
				`(VoiceChat) Hit OnGetUserMediaSuccess in wrong state ${this.m_VoiceCallState.m_eState}`,
			);
		}
	}
	OnGetUserMediaFailure(e) {
		if (
			this.m_VoiceCallState.m_eState <= Ve.k_EVoiceCallState_ScheduledInitiate
		) {
			return;
		}
		if (this.m_bSendVideo) {
			this.LogMsg(
				`(VoiceChat) The following error occured getting media stream: ${e.name}`,
			);
			this.LogMsg("(VoiceChat) Retrying without video");
			this.m_bSendVideo = false;
			this.m_VoiceCallState.m_eState = Ve.k_EVoiceCallState_ScheduledInitiate;
			this.OnRequestMicrophoneAccess();
			return;
		}
		let t = this;
		let r = navigator;
		if (r.permissions) {
			r.permissions
				.query({
					name: "microphone",
				})
				.then((e) => {
					if (e.state != "granted") {
						if (e.state == "denied") {
							t.m_bUserHasDeniedMicPermissions = true;
						} else {
							e.state;
						}
					}
				});
		}
		this.LogMsg(
			`(WebAudio) The following error occured getting audio stream: ${e.name}`,
		);
		this.OnGetUserMediaSuccess(undefined);
	}
	InitiateChatRoomVoice() {
		if (
			this.m_VoiceCallState.m_eState > Ve.k_EVoiceCallState_ScheduledInitiate
		) {
			this.LogMsg(
				`(VoiceChat) Hit InitiateChatRoomVoice in wrong state ${this.m_VoiceCallState.m_eState}`,
			);
		} else {
			c.xm.AudioPlaybackManager.SetVoiceActive(this.OnRequestMicrophoneAccess);
		}
	}
	JoinVoiceChatOrAskForOneOnOneChatNow() {
		if (this.m_VoiceCallState.m_targetAccountID == 0) {
			this.m_VoiceCallState.m_eState = Ve.k_EVoiceCallState_RequestedPermission;
			let e = a.w.Init(te.s8);
			e.Body().set_chat_group_id(this.m_VoiceCallState.m_chatRoom.groupID);
			e.Body().set_chat_id(this.m_VoiceCallState.m_chatRoom.chatID);
			this.LogMsg(
				`(VoiceChat) InitiateChatRoomVoice request to group: ${this.m_VoiceCallState.m_chatRoom.groupID}, room: ${this.m_VoiceCallState.m_chatRoom.chatID}`,
			);
			te.xP
				.JoinVoiceChat(this.m_CMInterface.GetServiceTransport(), e)
				.then((e) => {
					if (e.GetEResult() == 1) {
						this.m_VoiceCallState.m_voiceChatID = e.Body().voice_chatid();
						this.OnVoiceChatAccepted(true);
					} else if (e.GetEResult() == 2) {
						this.BackOffAndRetryInitiateVoiceChat();
					} else {
						this.OnVoiceChatAccepted(false);
					}
				})
				.catch((e) => {
					this.BackOffAndRetryInitiateVoiceChat();
				});
		} else {
			this.m_VoiceCallState.m_eState = Ve.k_EVoiceCallState_RequestedPermission;
			if (this.m_VoiceCallState.m_voiceChatID == "") {
				let e = a.w.Init(ne);
				e.Body().set_steamid_partner(
					m.b
						.InitFromAccountID(this.m_VoiceCallState.m_targetAccountID)
						.ConvertTo64BitString(),
				);
				this.LogMsg(
					`(VoiceChat) InitiateOneOnOneVoiceChat request to ${this.m_VoiceCallState.m_targetAccountID}`,
				);
				Ie.RequestOneOnOneChat(
					this.m_CMInterface.GetServiceTransport(),
					e,
				).then((e) => {
					if (e.GetEResult() == 1) {
						this.LogMsg(
							`(VoiceChat) Waiting on acceptance from ${this.m_VoiceCallState.m_targetAccountID}`,
						);
						this.m_VoiceCallState.m_voiceChatID = e.Body().voice_chatid();
						let t = c.xm.FriendStore.self;
						let r = c.xm.ChatStore.GetFriendChat(
							this.m_VoiceCallState.m_targetAccountID,
							false,
						);
						if (t != null && r != null) {
							r.AddVoiceChannelInviteMsg(
								this.m_CMInterface.steamid.GetAccountID(),
								c.xm.GetServerRTime32(),
								Localize(
									"#FriendMsg_VoiceChannelInvite",
									t.display_name,
									r.chat_partner.display_name,
								),
							);
						}
					} else {
						this.LogMsg(
							`(VoiceChat) Initiating voice chat to ${this.m_VoiceCallState.m_targetAccountID} has failed.`,
						);
						this.EndVoiceChatInternal(false);
					}
				});
			} else {
				this.OnVoiceChatAccepted(true);
			}
		}
	}
	OnVoiceChatAccepted(e) {
		if (
			this.m_VoiceCallState.m_eState < Ve.k_EVoiceCallState_RequestedPermission
		) {
			this.LogMsg(
				`(VoiceChat) Hit OnVoiceChatAccepted in wrong state ${this.m_VoiceCallState.m_eState}`,
			);
		} else if (this.m_VoiceCallState.m_webRTCConnectedNotification != null) {
			if (e) {
				if (this.m_VoiceCallState.m_targetAccountID) {
					this.m_VoiceCallState.m_bIsConnectionAttemptOverTwoSeconds = false;
					this.m_VoiceCallState.m_timeStartedConnecting = performance.now();
					this.LogMsg(
						`(VoiceChat) Call accepted to individual ${this.m_VoiceCallState.m_targetAccountID}`,
					);
				} else if (this.m_VoiceCallState.m_chatRoom) {
					this.LogMsg(
						`(VoiceChat) Call accepted to room ${this.m_VoiceCallState.m_chatRoom.chatID}`,
					);
				}
				this.OnWebRTCConnectedAndVoiceChatConnected();
			} else if (this.m_VoiceCallState.m_targetAccountID) {
				this.LogMsg(
					`(VoiceChat) Call rejected to individual ${this.m_VoiceCallState.m_targetAccountID}`,
				);
				this.OnUserEndVoiceChat();
			} else if (this.m_VoiceCallState.m_chatRoom) {
				this.LogMsg(
					`(VoiceChat) Call rejected to room ${this.m_VoiceCallState.m_chatRoom.chatID}`,
				);
				this.EndVoiceChatInternal(false);
			}
		} else {
			this.LogMsg(
				"(VoiceChat) Hit OnVoiceChatAccepted without WebRTC connected",
			);
		}
	}
	InitiateOneOnOneVoiceChat(e) {
		if (
			this.m_VoiceCallState.m_eState > Ve.k_EVoiceCallState_ScheduledInitiate
		) {
			this.LogMsg(
				`(VoiceChat) Hit InitiateOneOnOneVoiceChat in wrong state ${this.m_VoiceCallState.m_eState}`,
			);
		} else {
			if (this.m_VoiceCallState.m_timeStartedConnecting == null) {
				this.m_VoiceCallState.m_timeStartedConnecting = performance.now();
			}
			if (this.m_ConnectionCheck == 0) {
				this.m_ConnectionCheck = SetBackgroundInterval(
					this.CheckConnection,
					2000,
				);
			}
			c.xm.AudioPlaybackManager.SetVoiceActive(this.OnRequestMicrophoneAccess);
		}
	}
	IPIntToString(e) {
		return `${e >>> 24}.${(e >> 16) & 255}.${(e >> 8) & 255}.${e & 255}`;
	}
	OnSetUpdatedLocalDescriptionSuccess() {
		this.LogMsg("(WebRTC) OnSetUpdatedLocalDescriptionSuccess");
		let e = a.w.Init(Oe);
		e.Body().set_ip_webrtc_server(this.m_VoiceCallState.m_webRTCServerIP);
		e.Body().set_port_webrtc_server(this.m_VoiceCallState.m_webRTCServerPort);
		e.Body().set_ip_webrtc_session_client(
			this.m_VoiceCallState.m_webRTCClientIP,
		);
		e.Body().set_port_webrtc_session_client(
			this.m_VoiceCallState.m_webRTCClientPort,
		);
		e.Body().set_remote_description_version(
			this.m_VoiceCallState.m_nMostRecentRemoteDescriptionVersion,
		);
		Le.AcknowledgeUpdatedRemoteDescription(
			this.m_CMInterface.GetServiceTransport(),
			e,
		).then((e) => {});
	}
	OnSetUpdatedLocalDescriptionFailure(e) {
		this.LogMsg(`(WebRTC) OnSetUpdatedLocalDescriptionFailure: ${e}`);
		this.EndVoiceChatInternal(false);
	}
	OnCreateAnswerSuccess(e) {
		this.LogMsg(`(WebRTC) OnCreateAnswerSuccess: ${JSON.stringify(e)}`);
		let t = this;
		this.m_PeerConnection
			.setLocalDescription(e)
			.then(() => {
				t.OnSetUpdatedLocalDescriptionSuccess();
			})
			.catch((e) => {
				t.OnSetUpdatedLocalDescriptionFailure(e);
			});
		this.m_VoiceCallState.m_bOfferUpdateInProgress = false;
		if (this.m_VoiceCallState.m_msgPendingRemoteDescriptionUpdate != null) {
			let e = this.m_VoiceCallState.m_msgPendingRemoteDescriptionUpdate;
			this.m_VoiceCallState.m_msgPendingRemoteDescriptionUpdate = undefined;
			this.ProcessUpdatedRemoteDescription(e);
		}
	}
	OnCreateAnswerError(e) {
		this.LogMsg(`(WebRTC) OnCreateAnswerError: ${e}`);
		this.EndVoiceChatInternal(false);
	}
	ProcessUpdatedRemoteDescription(e) {
		this.m_VoiceCallState.m_bOfferUpdateInProgress = true;
		this.m_mapSSRCToAccountID.clear();
		let t = e.ssrcs_to_accountids();

		for (let r of t) {
			this.m_mapSSRCToAccountID.set(r.ssrc(), r.accountid());
		}

		let r = this;
		let n = JSON.parse(e.remote_description());
		this.m_PeerConnection
			.setRemoteDescription(new RTCSessionDescription(n))
			.then(() => {
				r.LogMsg(`(WebRTC) Updated Remote Description: ${n.sdp}`);
				if (n.type == "offer") {
					r.LogMsg("(WebRTC) setRemoteDescription success with new offer");
					r.m_PeerConnection
						.createAnswer()
						.then((e) => {
							r.OnCreateAnswerSuccess(e);
						})
						.catch((e) => {
							r.OnCreateAnswerError(e);
						});
					r.m_VoiceCallState.m_nMostRecentRemoteDescriptionVersion =
						e.remote_description_version();
				} else if (n.type == "answer") {
					r.LogMsg("(WebRTC) setRemoteDescription success");
					r.m_VoiceCallState.m_bOfferUpdateInProgress = false;
				}
			})
			.catch((e) => {
				r.LogMsg(`(WebRTC) Remote Description: ${n.sdp}`);
				r.LogMsg(`(WebRTC) setRemoteDescription error: ${e}`);
				r.LogMsg("(VoiceChat) Fatal error, ending chat");
				r.EndVoiceChatInternal(false);
			});
		return 1;
	}
	SendVoiceStatusUpdate() {
		let e = this.IsMicMuted();
		let t = this.IsOutputMuted();
		let r = a.w.Init(pe);
		r.Body().set_user_steamid(
			this.m_CMInterface.steamid.ConvertTo64BitString(),
		);
		r.Body().set_voice_chatid(this.m_VoiceCallState.m_voiceChatID);
		r.Body().set_user_muted_mic_locally(e);
		r.Body().set_user_muted_output_locally(t);
		r.Body().set_user_has_no_mic_for_session(this.BNoMicAvailableForSession());
		r.Body().set_user_webaudio_sample_rate(
			c.xm.AudioPlaybackManager.GetLastObservedSampleRate(),
		);
		r.Body().set_user_sends_video(this.m_bSendVideo);
		Ie.NotifyUserVoiceStatus(this.m_CMInterface.GetServiceTransport(), r);
		if (
			typeof SteamClient != "undefined" &&
			SteamClient.WebChat != null &&
			SteamClient.WebChat.SetVoiceChatStatus != null
		) {
			SteamClient.WebChat.SetVoiceChatStatus(e, t);
		}
	}
	UpdateUserVoiceStatus(e) {
		if (this.m_VoiceCallState.m_voiceChatID != e.voice_chatid()) {
			return;
		}
		let t = new m.b(e.user_steamid()).GetAccountID();
		let r = this.m_mapUserVoiceStatus.get(t);
		if (r == null) {
			r = new st();
		}
		r.mic_muted_locally = e.user_muted_mic_locally();
		r.output_muted_locally = e.user_muted_output_locally();
		r.has_no_mic_for_session = e.user_has_no_mic_for_session();
		r.sends_video = e.user_sends_video();
		if (r.sends_video) {
			if (!this.m_rgVideoStreams.some((e) => e.accountid == t)) {
				this.AddPlaceholderVideoStream(t);
			}
		}
		let n = c.xm.FriendStore.GetPlayerIfCached(t);
		let i = `[U:1:${t}]`;
		let a = "";
		if (n != null) {
			a = `${n.display_name} `;
		}
		let s = "";
		s = r.has_no_mic_for_session
			? "nomic"
			: r.mic_muted_locally
				? "muted"
				: "on";
		this.LogMsg(
			`(VoiceChat) User ${a}${i} status now: mic(${s}) output(${
				r.output_muted_locally ? "muted" : "on"
			})`,
		);
		this.m_mapUserVoiceStatus.set(t, r);
	}
	OnWebRTCConnectedAndVoiceChatConnected() {
		let e = this.m_VoiceCallState.m_webRTCConnectedNotification;
		this.m_VoiceCallState.m_eState =
			Ve.k_EVoiceCallState_NotifyingVoiceChatOfWebRTCSession;
		this.LogMsg(
			`(WebRTC) WebRTC session connected ${this.IPIntToString(
				e.client_ip(),
			)}:${e.client_port()} => ${this.IPIntToString(
				e.server_ip(),
			)}:${e.server_port()}`,
		);
		if (this.m_VoiceCallState.m_voiceChatID == "") {
			this.LogMsg(
				"(VoiceChat) Reached OnWebRTCConnectedAndVoiceChatConnected without voice chat id? Failing.",
			);
			this.EndVoiceChatInternal(false);
		}
		let t = a.w.Init(he);
		t.Body().set_voice_chatid(this.m_VoiceCallState.m_voiceChatID);
		t.Body().set_ssrc_my_sending_stream(e.ssrc());
		t.Body().set_ip_webrtc_client(e.client_ip());
		t.Body().set_port_webrtc_client(e.client_port());
		t.Body().set_ip_webrtc_server(e.server_ip());
		t.Body().set_port_webrtc_server(e.server_port());
		t.Body().set_sends_webrtc_video(this.m_bSendVideo);
		t.Body().set_accepts_webrtc_video(this.m_bReceiveVideo);
		t.Body().set_has_webrtc_data_channel(this.BSupportsDataChannels());
		t.Body().set_has_audio_worklets_support(
			c.xm.AudioPlaybackManager.supports_audio_worklets,
		);
		t.Body().set_user_agent(navigator.userAgent);
		Ie.UpdateVoiceChatWebRTCData(this.m_CMInterface.GetServiceTransport(), t)
			.then((e) => {
				if (e.GetEResult() == 1) {
					this.m_VoiceCallState.m_eState = Ve.k_EVoiceCallState_Connected;
					this.m_VoiceCallState.m_timeFinishedConnecting = performance.now();
					this.SendVoiceStatusUpdate();
					this.m_rgVideoStreams
						.filter((e) => e.receive)
						.map((e) => this.UpdateUserVideoStatus(e.accountid, true));
					this.LogMsg(
						`(WebRTC) Updated voice session with WebRTC session data ${this.m_VoiceCallState.m_voiceChatID}`,
					);
					if (e.Body().send_client_voice_logs()) {
						this.ScheduleClientVoiceLogsUpload(2);
					}
					this.CheckConnection();
					if (this.BSupportsDataChannels() != ee.BHasDataChannels()) {
						this.RenegotiateSDP();
					}
				} else {
					this.LogMsg(
						`(WebRTC) Error updating voice session with WebRTC session data ${this.m_VoiceCallState.m_voiceChatID}`,
					);
					this.BackOffAndRetryInitiateVoiceChat();
				}
			})
			.catch((e) => {
				this.LogMsg(
					`(WebRTC) Error updating voice session with WebRTC session data ${this.m_VoiceCallState.m_voiceChatID}`,
				);
				this.BackOffAndRetryInitiateVoiceChat();
			});
	}
	OnAcceptOneOnOneVoiceChat(e, t) {
		if (this.m_VoiceCallState.m_targetAccountID != e.GetAccountID()) {
			this.EndVoiceChatInternal(false);
		}
		this.m_VoiceCallState.m_eState = Ve.k_EVoiceCallState_None;
		this.m_VoiceCallState.m_targetAccountID = e.GetAccountID();
		this.m_VoiceCallState.m_bInitiatedOneOnOneCall = false;
		this.m_VoiceCallState.m_bWaitingOnOneOnOneRejoin = false;
		this.m_VoiceCallState.m_bPostedOneOnOneEndedMsg = false;
		this.m_VoiceCallState.m_chatRoom = null;
		this.m_VoiceCallState.m_voiceChatID = t;
		let r = a.w.Init(se);
		r.Body().set_steamid_partner(e.ConvertTo64BitString());
		r.Body().set_accepted_request(true);
		r.Body().set_voice_chatid(t);
		Ie.AnswerOneOnOneChat(this.m_CMInterface.GetServiceTransport(), r).then(
			(t) => {
				if (t.GetEResult() == 1) {
					if (e.GetAccountID()) {
						this.DispatchSetVoiceChatActive(true);
					}
					this.InitiateOneOnOneVoiceChat(e.GetAccountID());
				} else {
					this.LogMsg(
						`(VoiceChat) Failed responding to voice chat from ${e.GetAccountID()}`,
					);
					this.EndVoiceChatInternal(false);
				}
			},
		);
	}
	OnRejectOneOnOneVoiceChat(e, t) {
		let r = a.w.Init(se);
		r.Body().set_steamid_partner(e.ConvertTo64BitString());
		r.Body().set_accepted_request(false);
		r.Body().set_voice_chatid(t);
		Ie.AnswerOneOnOneChat(this.m_CMInterface.GetServiceTransport(), r).then(
			(t) => {
				if (t.GetEResult() != 1) {
					this.LogMsg(
						`(VoiceChat) Failed responding to voice chat from ${e.GetAccountID()}`,
					);
				}
			},
		);
	}
	PlayRingSound(e) {
		this.m_mapOneOnOneCallsWaitingJoinOrAccept.get(e).audio_buffer =
			c.xm.AudioPlaybackManager.PlayAudioURLWithRepeats(
				`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_phonecall.m4a?v=1`,
				1,
			);
	}
	IsVoiceActive(e, t) {
		return (
			!!this.m_VoiceCallState.BMatchingCall(e, t) &&
			this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_None
		);
	}
	CheckVoiceSnoozeTimeout() {
		if (this.m_bAutoShowVideoStream) {
			return;
		}
		if (c.xm.IdleTracker.GetUserIdleTime() > 3600) {
			let e = this.m_MicVolumeMeter.GetLastTimeNonZero();
			if (performance.now() - e > 3600000) {
				this.OnUserEndVoiceChat();
				c.xm
					.ShowAlert(
						Localize("#Voice_LeftIdleVoiceChat_Title"),
						Localize("#Voice_LeftIdleVoiceChat_Body"),
						Localize("#Voice_LeftIdleVoiceChat_OK"),
					)
					.then(() => {})
					.catch(() => true);
			}
		}
	}
	ProcessStatsReport() {
		this.CheckVoiceSnoozeTimeout();
		if (this.m_PeerConnection == null) {
			return;
		}
		this.m_StatsTimeout = SetBackgroundTimeout(this.ProcessStatsReport, 10000);
		if (i.TS.IN_CLIENT) {
			s.W.BClientConnected().then(() => {});
		}
		if (this.m_PeerConnection.localDescription.sdp.includes("mozilla...")) {
			return;
		}
		let e = new Date();
		let t = this;
		let r = this.m_PeerConnection;
		t.LogMsg("-----------------------------------------------------------");
		t.LogMsg(` Voice Report: ${e.toUTCString()}`);
		t.LogMsg("-----------------------------------------------------------");
		let n = r.getSenders();
		if (n.length > 0) {
			this.LogMsg(
				`(WebRTC) ${this.PadOutput("(Sender SSRC)", 40)} ${this.PadOutput(
					"Packets Sent",
					20,
				)} ${this.PadOutput("Connection State", 20)} ${this.PadOutput(
					"Writable",
					20,
				)} ${this.PadOutput("Track State", 20)} ${this.PadOutput(
					"Round Trip MS",
					20,
				)} ${this.PadOutput("Transport Bytes Sent", 24)} ${this.PadOutput(
					"Transport Bytes Received",
					24,
				)} `,
			);
			try {
				n.forEach((e) => {
					e.getStats().then((r) => {
						r.forEach((n) => {
							if (n.type == "outbound-rtp") {
								let i = n.ssrc;
								let a = n.packetsSent;
								let s = "";
								let o = "";
								let l = 0;
								let c = 0;
								let m = 0;
								let u = "";
								let d = e.track;
								if (d != null) {
									u =
										d.ended && d.detached
											? "ended+detached"
											: d.ended
												? "ended"
												: d.detached
													? "detached"
													: "active";
								}
								let A = r.get(n.transportId);
								if (A != null && A.type == "transport") {
									let e = r.get(A.selectedCandidatePairId);
									if (e != null && e.type == "candidate-pair") {
										s = e.state;
										o = e.writable ? "writable" : "not-writable";
										l = e.currentRoundTripTime * 1000;
									}
									c = A.bytesSent;
									m = A.bytesReceived;
								}
								t.LogMsg(
									`(WebRTC) ${t.PadOutput(
										`${n.kind} ${String(i)}`,
										40,
									)} ${t.PadOutput(String(a), 20)} ${t.PadOutput(
										s,
										20,
									)} ${t.PadOutput(o, 20)} ${t.PadOutput(u, 20)} ${t.PadOutput(
										String(l),
										20,
									)} ${t.PadOutput(String(c), 24)} ${t.PadOutput(
										String(m),
										24,
									)}`,
								);
							}
						});
					});
				});
			} catch (e) {
				t.LogMsg("(WebRTC) Can't log sender stats on this browser");
			}
		}
		SetBackgroundTimeout(this.ProcessReceiverStatsReport, 100);
	}
	ProcessReceiverStatsReport() {
		if (this.m_PeerConnection.localDescription.sdp.includes("mozilla...")) {
			return;
		}
		let e = this;
		let t = this.m_PeerConnection;
		try {
			t.getStats().then((t) => {
				t.forEach((t) => {
					if (t.type == "inbound-rtp") {
						if (t.mediaType == "audio") {
							let r = new tt();
							r.m_SSRC = t.ssrc;
							r.m_BytesReceived = t.bytesReceived;
							r.m_HeaderBytesReceived = t.headerBytesReceived;
							r.m_PacketsReceived = t.packetsReceived;
							r.m_PacketsLost = t.packetsLost;
							r.m_PacketsDiscarded = t.packetsDiscarded;
							r.m_FecPacketsDiscarded = t.fecPacketsDiscarded;
							r.m_FecPacketsReceived = t.fecPacketsReceived;
							r.m_Jitter = t.jitter;
							r.m_JitterBufferDelay = t.jitterBufferDelay;
							r.m_JitterBufferEmittedCount = t.jitterBufferEmittedCount;
							r.m_JitterBufferMinimumDelay = t.jitterBufferMinimumDelay;
							r.m_JitterBufferTargetDelay = t.jitterBufferTargetDelay;
							r.m_ConcealmentEvents = t.concealmentEvents;
							r.m_ConcealedSamples = t.concealedSamples;
							r.m_SilentConcealedSamples = t.silentConcealedSamples;
							r.m_RemovedSamplesForAcceleration =
								t.removedSamplesForAcceleration;
							r.m_TotalAudioEnergy = t.totalAudioEnergy;
							r.m_TotalSamplesDuration = t.totalSamplesDuration;
							r.m_TotalSamplesReceived = t.totalSamplesReceived;
							let n = e.m_mapSSRCToAccountID.get(r.m_SSRC);
							if (n != null) {
								e.m_mapAccountIDToAudioStats.set(n, r);
							}
						} else if (t.mediaType == "video") {
							let r = new rt();
							r.m_SSRC = t.ssrc;
							r.m_BytesReceived = t.bytesReceived;
							r.m_HeaderBytesReceived = t.headerBytesReceived;
							r.m_PacketsReceived = t.packetsReceived;
							r.m_PacketsLost = t.packetsLost;
							r.m_FirCount = t.firCount;
							r.m_PliCount = t.pliCount;
							r.m_NackCount = t.nackCount;
							r.m_PauseCount = t.pauseCount;
							r.m_FreezeCount = t.freezeCount;
							r.m_KeyFramesDecoded = t.keyFramesDecoded;
							r.m_FramesDecoded = t.framesDecoded;
							r.m_FramesDropped = t.framesDropped;
							r.m_FramesReceived = t.framesReceived;
							r.m_FramesAssembledFromMultiplePackets =
								t.framesAssembledFromMultiplePackets;
							let n = e.m_mapSSRCToAccountID.get(r.m_SSRC);
							if (n != null) {
								e.m_mapAccountIDToVideoStats.set(n, r);
							}
						}
					}
				});
			});
			e.LogMsg("-----------------------------------------------------------");
			e.LogMsg(
				`(WebRTC) ${e.PadOutput("(Receiving SSRC)", 40)} ${e.PadOutput(
					"Packets Received",
					20,
				)} ${e.PadOutput("Packets Lost", 20)} ${e.PadOutput(
					"Est. Delay MS",
					20,
				)} ${e.PadOutput("Samples Received", 20)}`,
			);
			e.m_mapAccountIDToAudioStats.forEach((t, r) => {
				let n = c.xm.FriendStore.GetPlayerIfCached(r);
				let i = "[unknown]";
				if (n != null) {
					i = n.display_name;
				}
				let a = String(t.m_SSRC);
				i = `${i.substring(0, 39 - a.length)} ${a}`;
				e.LogMsg(
					`(WebRTC) ${e.PadOutput(i, 40)} ${e.PadOutput(
						String(t.m_PacketsReceived),
						20,
					)} ${e.PadOutput(String(t.m_PacketsLost), 20)} ${e.PadOutput(
						String(
							(
								(t.m_JitterBufferDelay * 1000) /
								Math.max(1, t.m_JitterBufferEmittedCount)
							).toFixed(2),
						),
						20,
					)} ${e.PadOutput(String(t.m_TotalSamplesReceived), 20)}`,
				);
			});
			if (e.m_mapAccountIDToVideoStats.size > 0) {
				e.LogMsg("-----------------------------------------------------------");
				e.LogMsg(
					`(WebRTC) ${e.PadOutput("(Receiving SSRC)", 40)} ${e.PadOutput(
						"Packets Received",
						20,
					)} ${e.PadOutput("Packets Lost", 20)} ${e.PadOutput(
						"Est. Delay MS",
						20,
					)} ${e.PadOutput("Frames Received", 20)} ${e.PadOutput(
						"Frames Decoded",
						20,
					)} ${e.PadOutput("Keyframes Decoded", 20)} ${e.PadOutput(
						"FIR/PLI/NACK Sent",
						20,
					)}`,
				);
				e.m_mapAccountIDToVideoStats.forEach((t, r) => {
					let n = c.xm.FriendStore.GetPlayerIfCached(r);
					let i = "[unknown]";
					if (n != null) {
						i = n.display_name;
					}
					let a = String(t.m_SSRC);
					i = `${i.substring(0, 39 - a.length)} ${a}`;
					e.LogMsg(
						`(WebRTC) ${e.PadOutput(i, 40)} ${e.PadOutput(
							String(t.m_PacketsReceived),
							20,
						)} ${e.PadOutput(String(t.m_PacketsLost), 20)} ${e.PadOutput(
							String(
								(
									(t.m_JitterBufferDelay * 1000) /
									Math.max(1, t.m_JitterBufferEmittedCount)
								).toFixed(2),
							),
							20,
						)} ${e.PadOutput(String(t.m_FramesReceived), 20)} ${e.PadOutput(
							String(t.m_FramesDecoded),
							20,
						)} ${e.PadOutput(String(t.m_KeyFramesDecoded), 20)} ${e.PadOutput(
							`${t.m_FirCount}/${t.m_PliCount}/${t.m_NackCount}`,
							20,
						)}`,
					);
				});
			}
			e.LogMsg("-----------------------------------------------------------");
		} catch (e) {}
	}
	PadOutput(e, t, r = undefined) {
		if (Math.abs(t) <= e.length) {
			return e;
		}
		let n = Math.max(Math.abs(t) - e.length || 0, 0);
		let i = Array(n + 1).join(String(r || " ").charAt(0));
		if (t < 0) {
			return i + e;
		} else {
			return e + i;
		}
	}
	CheckConnection() {
		if (
			this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_Connected ||
			this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_LocalMicOnly
		) {
			this.LogMsg(
				`(VoiceChat) Succcess! Voice is fully connected took ${(
					this.m_VoiceCallState.m_timeFinishedConnecting -
					this.m_VoiceCallState.m_timeStartedConnecting
				).toFixed(0)}ms to complete, ${
					this.m_VoiceCallState.m_nFailuresThisInitiate + 1
				} attempts made before success.`,
			);
			ClearBackgroundInterval(this.m_ConnectionCheck);
			this.m_ConnectionCheck = 0;
			this.m_VoiceCallState.m_nFailuresThisInitiate = 0;
			this.m_VoiceCallState.m_bIsConnectionAttemptOverTwoSeconds = false;
			this.m_StatsTimeout ||= SetBackgroundTimeout(
				this.ProcessStatsReport,
				10000,
			);
		} else {
			let e = performance.now() - this.m_VoiceCallState.m_timeStartedConnecting;
			this.m_VoiceCallState.m_bIsConnectionAttemptOverTwoSeconds = e > 2000;
			let t = 60000;
			if (
				this.m_VoiceCallState.m_targetAccountID != 0 &&
				this.m_VoiceCallState.m_eState ==
					Ve.k_EVoiceCallState_RequestedPermission
			) {
				t = 300000;
			}
			if (e > t) {
				this.LogMsg(
					`(VoiceChat) Failure! Gave up after more than one minute trying to connect, last state was ${Je(
						this.m_VoiceCallState.m_eState,
					)}(${this.m_VoiceCallState.m_eState})`,
				);
				this.EndVoiceChatInternal(false);
			}
			this.LogMsg(
				`(VoiceChat) Still trying to connect to voice chat/webrtc ${Je(
					this.m_VoiceCallState.m_eState,
				)}(${this.m_VoiceCallState.m_eState}) ${(
					performance.now() - this.m_VoiceCallState.m_timeStartedConnecting
				).toFixed(0)}ms elapsed...`,
			);
		}
	}
	BSupportsDataChannels() {
		return (
			this.m_PeerConnection?.localDescription.sdp.indexOf(
				"webrtc-datachannel",
			) != -1
		);
	}
	RenegotiateSDP() {
		if (this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_Connected) {
			this.BackOffAndRetryInitiateVoiceChat();
		}
	}
	BackOffAndRetryInitiateVoiceChat() {
		if (this.m_VoiceCallState.m_eState != Ve.k_EVoiceCallState_None) {
			let e = this.m_VoiceCallState.m_nFailuresThisInitiate;
			let t = this.m_VoiceCallState.m_targetAccountID;
			let r = this.m_VoiceCallState.m_chatRoom;
			this.EndVoiceChatInternal(true);
			this.m_VoiceCallState.m_eState = Ve.k_EVoiceCallState_ScheduledInitiate;
			this.m_VoiceCallState.m_targetAccountID = t;
			this.m_VoiceCallState.m_chatRoom = r;
			this.m_VoiceCallState.m_nFailuresThisInitiate = e + 1;
			let n = 250;
			n =
				e < 1
					? 250
					: e < 3
						? 1000
						: e < 5
							? 5000
							: e < 10
								? 10000
								: e < 15
									? 30000
									: 60000;
			this.LogMsg(
				`(VoiceChat) Retrying InitiateVoiceChat in ${n.toFixed(
					0,
				)} milliseconds...`,
			);
			if (
				this.m_VoiceCallState.m_bInitiatedOneOnOneCall ||
				this.m_VoiceCallState.m_targetAccountID == 0
			) {
				this.m_ScheduledInitiate = SetBackgroundTimeout(() => {
					this.ScheduledInitiate(t, r);
				}, n);
			} else {
				this.m_ScheduledInitiate = SetBackgroundTimeout(() => {
					this.ScheduledAcceptOneOnOne(t);
				}, n);
			}
		}
	}
	ScheduledAcceptOneOnOne(e) {
		this.m_ScheduledInitiate = 0;
		this.AcceptPartnersOneOnOneChatRequest(e);
	}
	ScheduledInitiate(e, t) {
		this.m_ScheduledInitiate = 0;
		this.InitiateVoiceChat(e, t);
	}
	InitiateVoiceChat(e, t) {
		s.W.BClientConnected().then(() => {});
		if (t) {
			ee.ActiveDataChannelSupplier = this;
			x.session = {
				groupID: t.groupID,
				roomID: t.chatID,
			};
		}
		let r = new qe.UAParser(navigator.userAgent).getResult();
		let n = r.browser.name == "Chrome";
		let a = r.browser.name == "Edge" && r.engine.name == "Blink";
		if (!n && !a) {
			this.LogMsg(
				`(VoiceChat) Voice chat not supported in browser: ${r.browser.name}`,
			);
			const e = Localize(
				i.TS.IN_MOBILE
					? "#VoiceChat_Unavailable_NotSupported"
					: "#Voice_VoiceUnavailableInBrowser_Title",
			);
			const t = i.TS.IN_MOBILE
				? Localize("#VoiceChat_Unavailable_MobileChat")
				: Localize("#Voice_VoiceUnavailableInBrowser_Body", r.browser.name);
			c.xm
				.ShowAlert(e, t, Localize("#Voice_VoiceUnavailableInBrowser_OK"))
				.then(() => {})
				.catch(() => true);
			return;
		}
		if (e != 0 && t) {
			this.LogMsg("Cant initiate voice chat for both friend & group");
			return;
		}
		let o = this.m_VoiceCallState.BMatchingCall(e, t);
		if (
			!this.m_VoiceCallState.BMatchingCall(e, t) &&
			this.m_VoiceCallState.m_eState > Ve.k_EVoiceCallState_ScheduledInitiate
		) {
			this.LogMsg(
				"(VoiceChat) InitiateVoiceChat called for new target account/room while already connected, ending prior session first",
			);
			this.EndVoiceChatInternal(false);
		}
		if (this.m_ScheduledInitiate) {
			ClearBackgroundTimeout(this.m_ScheduledInitiate);
			this.m_ScheduledInitiate = 0;
		}
		let l = performance.now();
		if (
			this.m_VoiceCallState.m_eState <=
				Ve.k_EVoiceCallState_ScheduledInitiate &&
			this.m_VoiceCallState.m_timeEndedVoiceChat != 0 &&
			l - this.m_VoiceCallState.m_timeEndedVoiceChat < 100
		) {
			this.m_VoiceCallState.m_eState = Ve.k_EVoiceCallState_ScheduledInitiate;
			this.m_VoiceCallState.m_targetAccountID = e;
			this.m_VoiceCallState.m_bInitiatedOneOnOneCall = true;
			this.m_VoiceCallState.m_chatRoom = t;
			let r = 100 - (l - this.m_VoiceCallState.m_timeEndedVoiceChat);
			this.LogMsg(
				`(VoiceChat) Delaying requested InitiateChat for ${r.toFixed(
					0,
				)} milliseconds to let prior EndVoiceChat finish...`,
			);
			this.m_ScheduledInitiate = SetBackgroundTimeout(() => {
				this.ScheduledInitiate(e, t);
			}, r);
			return;
		}
		if (
			!o ||
			this.m_VoiceCallState.m_eState <= Ve.k_EVoiceCallState_ScheduledInitiate
		) {
			if (e) {
				this.LogMsg(
					`Resetting voice chat state and initiating to individual ${e}`,
				);
			} else if (t) {
				this.LogMsg(
					`Resetting voice chat state and initiating to room ${t.chatID}`,
				);
			} else {
				AssertMsg(
					this.m_VoiceEchoLocalMic,
					"Shouldn't hit local mic access only without echo local mic on",
				);
				this.LogMsg(
					"Resetting voice chat state and initiating local mic access only",
				);
			}
			if (
				this.m_VoiceCallState.m_eState <= Ve.k_EVoiceCallState_ScheduledInitiate
			) {
				if (e != 0 || t != null) {
					this.DispatchSetVoiceChatActive(true);
				}
				this.m_VoiceCallState.m_targetAccountID = e;
				this.m_VoiceCallState.m_bInitiatedOneOnOneCall = true;
				this.m_VoiceCallState.m_chatRoom = t;
				this.m_VoiceCallState.m_timeStartedConnecting = performance.now();
				this.m_VoiceCallState.m_nMostRecentRemoteDescriptionVersion = "0";
				this.m_VoiceCallState.m_bIsConnectionAttemptOverTwoSeconds = false;
				this.m_ConnectionCheck = SetBackgroundInterval(
					this.CheckConnection,
					2000,
				);
				if (e != 0) {
					this.InitiateOneOnOneVoiceChat(e);
				} else {
					this.InitiateChatRoomVoice();
				}
			}
		}
	}
	OnRequestMicrophoneAccess() {
		if (
			this.m_VoiceCallState.m_eState > Ve.k_EVoiceCallState_ScheduledInitiate
		) {
			this.LogMsg(
				`(VoiceChat) Hit OnRequestMicrophoneAccess in wrong state ${this.m_VoiceCallState.m_eState}`,
			);
			this.EndVoiceChatInternal(false);
			return;
		}
		if (this.m_AudioContext == null) {
			this.m_AudioContext = c.xm.AudioPlaybackManager.context;
		}
		let e = {
			optional: [
				{
					echoCancellation: this.m_Settings.m_VoiceUseEchoCancellation,
				},
				{
					googEchoCancellation: this.m_Settings.m_VoiceUseEchoCancellation,
				},
				{
					googEchoCancellation2: this.m_Settings.m_VoiceUseEchoCancellation,
				},
				{
					googNoiseSupression: this.m_Settings.m_VoiceUseNoiseCancellation,
				},
				{
					googNoiseSupression2: this.m_Settings.m_VoiceUseNoiseCancellation,
				},
				{
					mozNoiseSuppression: this.m_Settings.m_VoiceUseNoiseCancellation,
				},
				{
					googAutoGainControl: this.m_Settings.m_VoiceUseAutoGainControl,
				},
				{
					googAutoGainControl2: this.m_Settings.m_VoiceUseAutoGainControl,
				},
				{
					mozAutoGainControl: this.m_Settings.m_VoiceUseAutoGainControl,
				},
				{
					googHighpassFilter: true,
				},
				{
					googAudioMirroring: false,
				},
			],
		};
		if (this.m_Settings.m_SelectedMicID != "default") {
			e.optional.push({
				sourceId: this.m_Settings.m_SelectedMicID,
			});
		}
		if (this.m_VoiceCallState.m_targetAccountID) {
			this.LogMsg(
				`(VoiceChat) Call to individual ${this.m_VoiceCallState.m_targetAccountID} now initating getUserMedia/WebRTC`,
			);
		} else if (this.m_VoiceCallState.m_chatRoom) {
			this.LogMsg(
				`(VoiceChat) Call to room ${this.m_VoiceCallState.m_chatRoom.chatID} now initating getUserMedia/WebRTC`,
			);
		}
		this.m_VoiceCallState.m_eState = Ve.k_EVoiceCallState_RequestedMicAccess;
		let t = navigator;
		this.m_bUserHasDeniedMicPermissions = false;
		t.getUserMedia =
			t.getUserMedia ||
			t.webkitGetUserMedia ||
			t.webkitGetUserMedia ||
			t.mozGetUserMedia ||
			t.webkitGetUserMedia ||
			t.mozGetUserMedia ||
			t.msGetUserMedia;
		t.getUserMedia(
			{
				audio: e,
				video: this.m_bSendVideo || this.m_bReceiveVideo,
			},
			(e) => {
				this.OnGetUserMediaSuccess(e);
			},
			this.OnGetUserMediaFailure,
		);
	}
	ScheduleClientVoiceLogsUpload(e) {
		if (this.m_VoiceCallState.m_voiceChatID == "") {
			return;
		}
		if (this.m_ScheduledVoiceLogsUpload) {
			ClearBackgroundTimeout(this.m_ScheduledVoiceLogsUpload);
			this.m_ScheduledVoiceLogsUpload = 0;
		}
		this.m_ScheduledVoiceLogsUpload = SetBackgroundTimeout(
			this.UploadClientSideVoiceLogs,
			e * 1000,
		);
	}
	UploadClientSideVoiceLogs() {
		if (this.m_VoiceCallState.m_voiceChatID == "") {
			return;
		}
		if (this.m_bClientSideLogsUploadInProgress) {
			this.ScheduleClientVoiceLogsUpload(2);
			return;
		}
		this.m_bClientSideLogsUploadInProgress = true;
		let e = a.w.Init(be);
		e.Body().set_voice_chatid(this.m_VoiceCallState.m_voiceChatID);
		let t = this.m_rgLogLines.slice(this.m_nLastLogLineUploaded);
		e.Body().set_client_voice_logs_new_lines(t.join("\r\n"));
		let r = t.length;
		Ie.UploadClientVoiceChatLogs(this.m_CMInterface.GetServiceTransport(), e)
			.then((e) => {
				if (e.GetEResult() == 1) {
					this.m_nLastLogLineUploaded += r;
					this.LogMsg(
						`(VoiceChat) Uploaded ${r} new lines of voice chat log info to server`,
					);
					this.ScheduleClientVoiceLogsUpload(20);
				} else {
					this.LogMsg(
						"(VoiceChat) Error uploading client side logs to voice chat session, will retry soon",
					);
					this.ScheduleClientVoiceLogsUpload(10 + Math.random() * 10);
				}
				this.m_bClientSideLogsUploadInProgress = false;
			})
			.catch((e) => {
				this.LogMsg(
					"(VoiceChat) Error uploading client side logs to voice chat session, will retry soon",
				);
				this.ScheduleClientVoiceLogsUpload(10 + Math.random() * 10);
				this.m_bClientSideLogsUploadInProgress = false;
			});
	}
	EndVoiceChatInternal(e) {
		if (this.m_ScheduledVoiceLogsUpload) {
			this.UploadClientSideVoiceLogs();
		}
		if (this.m_ScheduledInitiate) {
			ClearBackgroundTimeout(this.m_ScheduledInitiate);
			this.m_ScheduledInitiate = 0;
		}
		if (this.m_StatsTimeout) {
			ClearBackgroundTimeout(this.m_StatsTimeout);
			this.m_StatsTimeout = 0;
		}
		this.DispatchSetVoiceChatActive(false);
		if (this.m_VoiceCallState.m_eState == Ve.k_EVoiceCallState_None) {
			return;
		}
		if (!e) {
			if (this.m_VoiceCallState.m_targetAccountID) {
				let e = this.m_VoiceCallState.m_targetAccountID;
				this.m_VoiceCallState.m_targetAccountID = 0;
				let t = this.m_VoiceCallState.m_voiceChatID;
				let r = a.w.Init(ue);
				r.Body().set_steamid_partner(
					m.b.InitFromAccountID(e).ConvertTo64BitString(),
				);
				r.Body().set_voice_chatid(this.m_VoiceCallState.m_voiceChatID);
				let n = this.m_VoiceCallState.m_eState;
				Ie.LeaveOneOnOneChat(this.m_CMInterface.GetServiceTransport(), r).then(
					(r) => {
						if (r.GetEResult() == 1) {
							this.LogMsg(`(VoiceChat) Left voice chat with ${e}`);
							if (n == Ve.k_EVoiceCallState_Connected) {
								let r = new ot();
								r.partner_accountid = this.m_CMInterface.steamid.GetAccountID();
								r.voice_chatid = t;
								r.previously_joined = true;
								this.m_mapOneOnOneCallsWaitingJoinOrAccept.set(e, r);
							} else {
								let t = c.xm.FriendStore.self;
								let r = c.xm.ChatStore.GetFriendChat(e, false);
								if (r && t) {
									r.AddVoiceChannelInviteMsg(
										c.xm.CMInterface.steamid.GetAccountID(),
										c.xm.GetServerRTime32(),
										Localize(
											"#FriendMsg_VoiceChannelEndedExplicit",
											t.display_name,
										),
									);
								}
							}
						} else {
							this.LogMsg(`(VoiceChat) Failed leaving voice chat with ${e}`);
						}
					},
				);
			} else if (this.m_VoiceCallState.m_chatRoom) {
				let e = a.w.Init(te.z);
				e.Body().set_chat_group_id(this.m_VoiceCallState.m_chatRoom.groupID);
				e.Body().set_chat_id(this.m_VoiceCallState.m_chatRoom.chatID);
				let t = this.m_VoiceCallState.m_chatRoom.chatID;
				te.xP
					.LeaveVoiceChat(this.m_CMInterface.GetServiceTransport(), e)
					.then((e) => {
						if (e.GetEResult() == 1) {
							this.LogMsg(`(VoiceChat) Left chat room (${t}) voice chat`);
						} else {
							this.LogMsg(
								`(VoiceChat) Failed leaving chat room (${t}) voice chat`,
							);
						}
					});
			}
			ee.ActiveDataChannelSupplier = undefined;
			this.m_mapUserVoiceStatus.clear();
		}
		this.m_mapSSRCToAccountID.clear();
		this.m_mapAccountIDToAudioStats.clear();
		this.m_mapAccountIDToVideoStats.clear();
		let t =
			this.m_VoiceCallState.m_eState > Ve.k_EVoiceCallState_RequestedPermission;
		this.m_VoiceCallState.m_eState = Ve.k_EVoiceCallState_None;
		this.m_VoiceCallState.m_targetAccountID = 0;
		this.m_VoiceCallState.m_bInitiatedOneOnOneCall = false;
		this.m_VoiceCallState.m_bPostedOneOnOneEndedMsg = false;
		this.m_VoiceCallState.m_bWaitingOnOneOnOneRejoin = false;
		this.m_VoiceCallState.m_chatRoom = null;
		if (!e || !t) {
			this.m_VoiceCallState.m_voiceChatID = "";
		}
		this.m_VoiceCallState.m_nMostRecentRemoteDescriptionVersion = "0";
		this.m_VoiceCallState.m_nFailuresThisInitiate = 0;
		this.m_VoiceCallState.m_timeEndedVoiceChat = performance.now();
		this.m_VoiceCallState.m_webRTCConnectedNotification = undefined;
		this.m_VoiceCallState.m_bOfferUpdateInProgress = false;
		this.m_VoiceCallState.m_msgPendingRemoteDescriptionUpdate = undefined;
		if (this.m_ConnectionCheck) {
			ClearBackgroundInterval(this.m_ConnectionCheck);
			this.m_ConnectionCheck = 0;
		}
		if (e) {
			this.m_rgVideoStreams.map((e) => (e.stream = null));
		} else {
			let e = this.m_rgVideoStreams.pop();
			while (e != null) {
				e = this.m_rgVideoStreams.pop();
			}
		}
		let r = this.m_rgAudioStreams.pop();
		while (r != null) {
			if (r.elem != null) {
				r.elem.pause();
				r.elem.src = undefined;
				r.elem.srcObject = undefined;
				r.elem = undefined;
			}
			if (r.volume_meter != null) {
				r.volume_meter.stop();
				r.volume_meter = undefined;
			}
			r.stream.oninactive = undefined;
			for (let e of r.stream.getTracks()) {
				e.stop();
			}
			if (this.m_AudioContext != null && r.source_node) {
				try {
					r.source_node.disconnect();
					if (
						r.type == We.k_EAudioStreamType_Microphone &&
						r.source_node instanceof MediaStreamAudioSourceNode
					) {
						for (let e of r.source_node.mediaStream.getTracks()) {
							e.stop();
						}
					}
				} catch (e) {}
			}
			if (r.output_gain_node) {
				r.output_gain_node.disconnect();
				r.output_gain_node = undefined;
			}
			r = this.m_rgAudioStreams.pop();
		}
		if (this.m_MicVolumeMeter != null) {
			this.m_MicVolumeMeter.stop();
			this.m_MicVolumeMeter = undefined;
		}
		if (this.m_MicNoiseGate != null) {
			if (this.m_MicNoiseGate.input) {
				this.m_MicNoiseGate.input.disconnect();
				this.m_MicNoiseGate.output.disconnect();
				this.m_MicNoiseGate.noiseGateKernel_.disconnect();
			} else {
				this.m_MicNoiseGate.disconnect();
			}
			this.m_MicNoiseGate = undefined;
		}
		if (this.m_MicInputGainNode != null) {
			this.m_MicInputGainNode.disconnect();
			this.m_MicInputGainNode = undefined;
		}
		if (this.m_AudioContext != null) {
			c.xm.AudioPlaybackManager.SetVoiceNotActive();
			this.m_AudioContext = undefined;
		}
		if (this.m_PeerConnection) {
			this.m_PeerConnection.oniceconnectionstatechange = undefined;
			this.m_PeerConnection.onicegatheringstatechange = undefined;
			this.m_PeerConnection.onsignalingstatechange = undefined;
			this.m_PeerConnection.close();
			this.m_PeerConnection = undefined;
		}
	}
	GetPersonaState(e) {
		const t = new m.b(e);
		const r = c.xm.FriendStore.GetPlayer(t.GetAccountID());
		r.LoadIfNecessary();
		return z7(() => r.is_ready, {
			timeout: 5000,
		}).then(() => r.persona);
	}
	FillInChatUsabilityMetrics(e) {
		let t = e.voice_settings();
		t.set_voice_input_gain(this.m_Settings.m_VoiceInputGain);
		t.set_voice_output_gain(this.m_Settings.m_VoiceOutputGain);
		t.set_noise_gate_level(Math.round(this.m_Settings.m_NoiseGateLevel));
		t.set_voice_use_echo_cancellation(
			this.m_Settings.m_VoiceUseEchoCancellation,
		);
		t.set_voice_use_noise_cancellation(
			this.m_Settings.m_VoiceUseNoiseCancellation,
		);
		t.set_voice_use_auto_gain_control(
			this.m_Settings.m_VoiceUseAutoGainControl,
		);
		t.set_selected_non_default_mic(
			this.m_Settings.m_SelectedMicID !== "default",
		);
		t.set_selected_non_default_output(
			this.m_Settings.m_SelectedOutputID !== "default",
		);
		t.set_push_to_talk_enabled(this.GetPushToTalkEnabled());
		t.set_push_to_mute_enabled(this.GetPushToMuteEnabled());
		t.set_play_ptt_sounds(this.m_Settings.m_bPlayPTTSounds);
		if (this.IsAnyVoiceActive()) {
			if (this.m_VoiceCallState.m_targetAccountID) {
				e.ui_state().set_in_one_on_one_voice_chat(true);
			} else if (this.m_VoiceCallState.m_chatRoom) {
				e.ui_state().set_in_group_voice_chat(true);
			}
		}
	}
}
Cg([P.sH], F$.prototype, "m_VoiceCallState", undefined);
Cg([P.sH], F$.prototype, "m_bPushToTalkEnabled", undefined);
Cg([P.sH], F$.prototype, "m_bPushToMuteEnabled", undefined);
Cg([P.sH], F$.prototype, "m_bVoicePTTStateEnabled", undefined);
Cg([P.sH], F$.prototype, "m_VKPushToTalkHotKey", undefined);
Cg([P.sH], F$.prototype, "m_strPushToTalkDisplayString", undefined);
Cg([P.sH], F$.prototype, "m_bUserHasDeniedMicPermissions", undefined);
Cg([P.sH], F$.prototype, "m_bOutputMuted", undefined);
Cg([P.sH], F$.prototype, "m_AudioContext", undefined);
Cg([P.sH], F$.prototype, "m_rgAudioStreams", undefined);
Cg([P.sH], F$.prototype, "m_MicVolumeMeter", undefined);
Cg([P.sH], F$.prototype, "m_MicNoiseGate", undefined);
Cg([P.sH], F$.prototype, "m_MicInputGainNode", undefined);
Cg([P.sH], F$.prototype, "m_rgVideoStreams", undefined);
Cg([P.sH], F$.prototype, "m_bSendVideo", undefined);
Cg([P.sH], F$.prototype, "m_bReceiveVideo", undefined);
Cg([P.sH], F$.prototype, "m_PeerConnection", undefined);
Cg([P.sH], F$.prototype, "m_Settings", undefined);
Cg([P.sH], F$.prototype, "m_bLocalMicTestActive", undefined);
Cg([P.sH], F$.prototype, "m_bForceConnectingStatus", undefined);
Cg([P.sH], F$.prototype, "m_bForceReconnectingStatus", undefined);
Cg([P.sH], F$.prototype, "m_localPose", undefined);
Cg([P.sH], F$.prototype, "m_mapRemotePoseForAccountID", undefined);
Cg([P.XI.bound], F$.prototype, "SetSelectedMic", null);
Cg([P.XI.bound], F$.prototype, "SetSelectedOutput", null);
Cg([P.XI.bound], F$.prototype, "SetUseEchoCancellation", null);
Cg([P.XI.bound], F$.prototype, "SetUseNoiseCancellation", null);
Cg([P.XI.bound], F$.prototype, "SetUseAutoGainControl", null);
Cg([P.XI.bound], F$.prototype, "SetVoiceEchoLocalMic", null);
Cg([P.XI.bound], F$.prototype, "SetUseSteamAudioSpatialization", null);
Cg([P.XI.bound], F$.prototype, "SetVoiceLogDetails", null);
Cg([P.XI.bound], F$.prototype, "GetVoiceLogDetails", null);
Cg([P.XI.bound], F$.prototype, "SetUseNoiseGateLevel", null);
Cg([P.XI.bound], F$.prototype, "SetVoiceInputGain", null);
Cg([P.XI.bound], F$.prototype, "SetVoiceOutputGain", null);
Cg([P.XI.bound], F$.prototype, "ForceReconnectingStatus", null);
Cg([P.XI.bound], F$.prototype, "ForceConnectingStatus", null);
Cg([P.XI.bound], F$.prototype, "SetAutoShowVideoStream", null);
Cg([P.XI.bound], F$.prototype, "LogMsg", null);
Cg([P.XI.bound], F$.prototype, "GetVoiceLogs", null);
Cg([P.XI.bound], F$.prototype, "OnPushToTalkReleased", null);
Cg([P.XI.bound, s_1(150)], F$.prototype, "DebouncedToggleMicMuting", null);
Cg([P.XI.bound], F$.prototype, "OnPushToTalkStateChange", null);
Cg([P.XI.bound], F$.prototype, "UpdateNoiseGateOnActiveMic", null);
Cg([P.XI.bound], F$.prototype, "OnAudioContextStateChange", null);
Cg([P.XI.bound], F$.prototype, "OnIceCandidate", null);
Cg([P.XI.bound], F$.prototype, "AddRemoteIceCandidate", null);
Cg([P.XI.bound], F$.prototype, "OnSignalingStateChange", null);
Cg([P.XI.bound], F$.prototype, "OnIceConnectionStateChange", null);
Cg([P.XI.bound], F$.prototype, "OnIceGatheringStateChange", null);
Cg([P.XI.bound], F$.prototype, "OnRemoveRemoteStream", null);
Cg([P.XI], F$.prototype, "SetLocalHMDPose", null);
Cg([P.XI], F$.prototype, "SetRemoteHMDPose", null);
Cg([P.XI.bound], F$.prototype, "OnAddRemoteStream", null);
Cg([P.XI.bound], F$.prototype, "ModifyLocalSDPBeforeSetting", null);
Cg([P.XI.bound], F$.prototype, "OnCreateOfferSuccess", null);
Cg([P.XI.bound], F$.prototype, "OnCreateOfferError", null);
Cg([P.XI.bound], F$.prototype, "OnUpdatedCreateOfferSuccess", null);
Cg([P.XI.bound], F$.prototype, "OnNoiseGateMessage", null);
Cg([P.XI.bound], F$.prototype, "SetupNoiseGateOnMic", null);
Cg([P.XI.bound], F$.prototype, "OnGetUserMediaSuccess", null);
Cg([P.XI.bound], F$.prototype, "OnGetUserMediaFailure", null);
Cg([P.XI.bound], F$.prototype, "OnSetUpdatedLocalDescriptionSuccess", null);
Cg([P.XI.bound], F$.prototype, "OnSetUpdatedLocalDescriptionFailure", null);
Cg([P.XI.bound], F$.prototype, "OnCreateAnswerSuccess", null);
Cg([P.XI.bound], F$.prototype, "OnCreateAnswerError", null);
Cg([P.XI.bound], F$.prototype, "OnAcceptOneOnOneVoiceChat", null);
Cg([P.XI.bound], F$.prototype, "OnRejectOneOnOneVoiceChat", null);
Cg([P.XI.bound], F$.prototype, "PlayRingSound", null);
Cg([P.XI.bound], F$.prototype, "ProcessStatsReport", null);
Cg([P.XI.bound], F$.prototype, "ProcessReceiverStatsReport", null);
Cg([P.XI.bound], F$.prototype, "CheckConnection", null);
Cg([P.XI.bound], F$.prototype, "ScheduledAcceptOneOnOne", null);
Cg([P.XI.bound], F$.prototype, "ScheduledInitiate", null);
Cg([P.XI.bound], F$.prototype, "OnRequestMicrophoneAccess", null);
Cg([P.XI.bound], F$.prototype, "UploadClientSideVoiceLogs", null);
