import n from "./58663.js";
import i from "./48307.js";
import { I8 } from "./12176.js";
const n_Message = n.Message;
export class zm extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!zm.prototype.count) {
			i.Sg(zm.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		zm.sm_m ||= {
			proto: zm,
			fields: {
				count: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				starttime: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				endtime: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				language: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				filterflags: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				filterappid: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return zm.sm_m;
	}
	static MBF() {
		zm.sm_mbf ||= i.w0(zm.M());
		return zm.sm_mbf;
	}
	toObject(e = false) {
		return zm.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(zm.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(zm.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new zm();
		return zm.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(zm.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		zm.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(zm.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		zm.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserNews_GetUserNews_Request";
	}
}
class l extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.news) {
			i.Sg(l.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		l.sm_m ||= {
			proto: l,
			fields: {
				news: {
					n: 1,
					c: Bi,
					r: true,
					q: true,
				},
				achievement_display_data: {
					n: 2,
					c: m,
					r: true,
					q: true,
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
		return "CUserNews_GetUserNews_Response";
	}
}
export class Bi extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Bi.prototype.eventtype) {
			i.Sg(Bi.M());
		}
		n_Message.initialize(this, e, 0, -1, [8, 13], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Bi.sm_m ||= {
			proto: Bi,
			fields: {
				eventtype: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				eventtime: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steamid_actor: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				steamid_target: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				gameid: {
					n: 5,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				packageid: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				shortcutid: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				achievement_names: {
					n: 8,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				clan_eventid: {
					n: 9,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				clan_announcementid: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				publishedfileid: {
					n: 11,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				event_last_mod_time: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appids: {
					n: 13,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				event_post_time: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Bi.sm_m;
	}
	static MBF() {
		Bi.sm_mbf ||= i.w0(Bi.M());
		return Bi.sm_mbf;
	}
	toObject(e = false) {
		return Bi.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Bi.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Bi.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Bi();
		return Bi.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Bi.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Bi.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Bi.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Bi.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserNews_Event";
	}
}
class m extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.appid) {
			i.Sg(m.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				achievements: {
					n: 2,
					c: u,
					r: true,
					q: true,
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
		return "CUserNewsAchievementDisplayData";
	}
}
class u extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.name) {
			i.Sg(u.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				display_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				display_description: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				unlocked_pct: {
					n: 5,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				hidden: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		const e = new n.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(u.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserNewsAchievementDisplayData_CAchievement";
	}
}
export class cZ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!cZ.prototype.appid) {
			i.Sg(cZ.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		cZ.sm_m ||= {
			proto: cZ,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				include_already_seen: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return cZ.sm_m;
	}
	static MBF() {
		cZ.sm_mbf ||= i.w0(cZ.M());
		return cZ.sm_mbf;
	}
	toObject(e = false) {
		return cZ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(cZ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(cZ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new cZ();
		return cZ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(cZ.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		cZ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(cZ.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		cZ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserNews_GetAppDetailsSpotlight_Request";
	}
}
class A extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.events) {
			i.Sg(A.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				events: {
					n: 1,
					c: p,
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
		return "CUserNews_GetAppDetailsSpotlight_Response";
	}
}
class p extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.event_type) {
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
				event_type: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				event_time: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				clan_id: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				clan_announcementid: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				appid: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime32_last_modified: {
					n: 6,
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
		return "CUserNews_GetAppDetailsSpotlight_Response_FeaturedEvent";
	}
}
export class HN extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!HN.prototype.timestamp) {
			i.Sg(HN.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		HN.sm_m ||= {
			proto: HN,
			fields: {
				timestamp: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				event_type: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				event_sub_type: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				data1: {
					n: 5,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				data2: {
					n: 6,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				data3: {
					n: 7,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				data4: {
					n: 8,
					br: i.qM.readInt64String,
					bw: i.gp.writeInt64String,
				},
				item_appid: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				item_contextid: {
					n: 11,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				item_assetid: {
					n: 12,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				proto_data: {
					n: 13,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
			},
		};
		return HN.sm_m;
	}
	static MBF() {
		HN.sm_mbf ||= i.w0(HN.M());
		return HN.sm_mbf;
	}
	toObject(e = false) {
		return HN.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(HN.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(HN.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new HN();
		return HN.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(HN.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		HN.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(HN.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		HN.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserGameActivity_Event";
	}
}
export class Uk extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Uk.prototype.steamid) {
			i.Sg(Uk.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Uk.sm_m ||= {
			proto: Uk,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				count: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				starttime: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				endtime: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Uk.sm_m;
	}
	static MBF() {
		Uk.sm_mbf ||= i.w0(Uk.M());
		return Uk.sm_mbf;
	}
	toObject(e = false) {
		return Uk.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Uk.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Uk.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Uk();
		return Uk.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Uk.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Uk.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Uk.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Uk.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserGameActivity_GetActivity_Request";
	}
}
class C extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.steamid) {
			i.Sg(C.M());
		}
		n_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				events: {
					n: 3,
					c: HN,
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
		return "CUserGameActivity_GetActivity_Response";
	}
}
export let eW;
export let ag;
((e) => {
	e.GetUserNews = (e, t) =>
		e.SendMsg("UserNews.GetUserNews#1", I8(zm, t), l, {
			ePrivilege: 1,
		});
	e.GetAppDetailsSpotlight = (e, t) =>
		e.SendMsg("UserNews.GetAppDetailsSpotlight#1", I8(cZ, t), A, {
			ePrivilege: 1,
		});
})((eW ||= {}));
((e) => {
	e.GetActivity = (e, t) =>
		e.SendMsg("UserGameActivity.GetActivity#1", I8(Uk, t), C, {
			ePrivilege: 1,
		});
})((ag ||= {}));
