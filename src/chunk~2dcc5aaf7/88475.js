import n from "./58663.js";
import i from "./48307.js";
import { I8 } from "./12176.js";
const n_Message = n.Message;
export function p$(e) {
	return `unknown ESteamNotificationType ( ${e} )`;
}
class l extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.notification_id) {
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
				notification_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				notification_targets: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				notification_type: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				body_data: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				read: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				timestamp: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				hidden: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				expiry: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				viewed: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "SteamNotificationData";
	}
}
export class GG extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!GG.prototype.include_hidden) {
			i.Sg(GG.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		GG.sm_m ||= {
			proto: GG,
			fields: {
				include_hidden: {
					n: 1,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				language: {
					n: 2,
					d: 0,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				include_confirmation_count: {
					n: 3,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_pinned_counts: {
					n: 4,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_read: {
					n: 5,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				count_only: {
					n: 6,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return GG.sm_m;
	}
	static MBF() {
		GG.sm_mbf ||= i.w0(GG.M());
		return GG.sm_mbf;
	}
	toObject(e = false) {
		return GG.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(GG.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(GG.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new GG();
		return GG.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(GG.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		GG.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(GG.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		GG.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamNotification_GetSteamNotifications_Request";
	}
}
class m extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.notifications) {
			i.Sg(m.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				notifications: {
					n: 1,
					c: l,
					r: true,
					q: true,
				},
				confirmation_count: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				pending_gift_count: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				pending_friend_count: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				unread_count: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				pending_family_invite_count: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CSteamNotification_GetSteamNotifications_Response";
	}
}
export class V4 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V4.prototype.timestamp) {
			i.Sg(V4.M());
		}
		n_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		V4.sm_m ||= {
			proto: V4,
			fields: {
				timestamp: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				notification_type: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				notification_ids: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
				mark_all_read: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return V4.sm_m;
	}
	static MBF() {
		V4.sm_mbf ||= i.w0(V4.M());
		return V4.sm_mbf;
	}
	toObject(e = false) {
		return V4.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(V4.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(V4.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new V4();
		return V4.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(V4.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		V4.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(V4.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		V4.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamNotification_MarkNotificationsRead_Notification";
	}
}
export class nH extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!nH.prototype.remote_client_id) {
			i.Sg(nH.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		nH.sm_m ||= {
			proto: nH,
			fields: {
				remote_client_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				target_client_type: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return nH.sm_m;
	}
	static MBF() {
		nH.sm_mbf ||= i.w0(nH.M());
		return nH.sm_mbf;
	}
	toObject(e = false) {
		return nH.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(nH.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(nH.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new nH();
		return nH.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(nH.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		nH.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(nH.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		nH.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamNotification_MarkNotificationsViewed_Notification";
	}
}
export class Z8 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z8.prototype.notification_type) {
			i.Sg(Z8.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z8.sm_m ||= {
			proto: Z8,
			fields: {
				notification_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				notification_targets: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Z8.sm_m;
	}
	static MBF() {
		Z8.sm_mbf ||= i.w0(Z8.M());
		return Z8.sm_mbf;
	}
	toObject(e = false) {
		return Z8.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Z8.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Z8.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Z8();
		return Z8.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Z8.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Z8.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Z8.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Z8.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "SteamNotificationPreference";
	}
}
export class gm extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!gm.prototype.preferences) {
			i.Sg(gm.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		gm.sm_m ||= {
			proto: gm,
			fields: {
				preferences: {
					n: 1,
					c: Z8,
					r: true,
					q: true,
				},
			},
		};
		return gm.sm_m;
	}
	static MBF() {
		gm.sm_mbf ||= i.w0(gm.M());
		return gm.sm_mbf;
	}
	toObject(e = false) {
		return gm.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(gm.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(gm.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new gm();
		return gm.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(gm.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		gm.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(gm.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		gm.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamNotification_SetPreferences_Request";
	}
}
class g extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamNotification_SetPreferences_Response";
	}
}
export class aJ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return aJ.toObject(e, this);
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
		return new aJ();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new aJ();
		return aJ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		aJ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		aJ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamNotification_GetPreferences_Request";
	}
}
class C extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.preferences) {
			i.Sg(C.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				preferences: {
					n: 1,
					c: Z8,
					r: true,
					q: true,
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
		return "CSteamNotification_GetPreferences_Response";
	}
}
export class b$ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b$.prototype.notification_ids) {
			i.Sg(b$.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b$.sm_m ||= {
			proto: b$,
			fields: {
				notification_ids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
			},
		};
		return b$.sm_m;
	}
	static MBF() {
		b$.sm_mbf ||= i.w0(b$.M());
		return b$.sm_mbf;
	}
	toObject(e = false) {
		return b$.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(b$.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(b$.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new b$();
		return b$.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(b$.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		b$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(b$.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		b$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamNotification_HideNotification_Notification";
	}
}
class f extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.notifications) {
			i.Sg(f.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				notifications: {
					n: 1,
					c: l,
					r: true,
					q: true,
				},
				pending_gift_count: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				pending_friend_count: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				pending_family_invite_count: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		const e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(f.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamNotification_NotificationsReceived_Notification";
	}
}
class b extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.preferences) {
			i.Sg(b.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				preferences: {
					n: 1,
					c: Z8,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(b.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamNotification_PreferencesUpdated_Notification";
	}
}
export let Fn;
export let sC;
((e) => {
	e.GetSteamNotifications = (e, t) =>
		e.SendMsg("SteamNotification.GetSteamNotifications#1", I8(GG, t), m, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.MarkNotificationsRead = (e, t) =>
		e.SendNotification("SteamNotification.MarkNotificationsRead#1", I8(V4, t), {
			ePrivilege: 1,
		});
	e.MarkNotificationsViewed = (e, t) =>
		e.SendNotification(
			"SteamNotification.MarkNotificationsViewed#1",
			I8(nH, t),
			{
				ePrivilege: 1,
			},
		);
	e.HideNotification = (e, t) =>
		e.SendNotification("SteamNotification.HideNotification#1", I8(b$, t), {
			ePrivilege: 1,
		});
	e.SetPreferences = (e, t) =>
		e.SendMsg("SteamNotification.SetPreferences#1", I8(gm, t), g, {
			ePrivilege: 1,
		});
	e.GetPreferences = (e, t) =>
		e.SendMsg("SteamNotification.GetPreferences#1", I8(aJ, t), C, {
			bConstMethod: true,
			ePrivilege: 1,
		});
})((Fn ||= {}));
((e) => {
	e.NotificationsReceivedHandler = {
		name: "SteamNotificationClient.NotificationsReceived#1",
		request: f,
	};
	e.PreferencesUpdatedHandler = {
		name: "SteamNotificationClient.PreferencesUpdated#1",
		request: b,
	};
})((sC ||= {}));
