import n from "./58663.js";
import i from "./48307.js";
import { I8 } from "./12176.js";
import s from "./29218.js";
const n_Message = n.Message;
class l extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CPlayer_GetRecentPlaytimeSessionsForChild_Request";
	}
}
class c extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.sessions) {
			i.Sg(c.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				sessions: {
					n: 1,
					c: m,
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
		const e = new n.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(c.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetRecentPlaytimeSessionsForChild_Response";
	}
}
class m extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.time_start) {
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
				time_start: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_end: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				device_type: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				disconnected: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession";
	}
}
class u extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.min_last_played) {
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
				min_last_played: {
					n: 1,
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
		return "CPlayer_GetLastPlayedTimes_Request";
	}
}
class d extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.games) {
			i.Sg(d.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				games: {
					n: 1,
					c: A,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(d.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetLastPlayedTimes_Response";
	}
}
class A extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.appid) {
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
				appid: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				last_playtime: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				playtime_2weeks: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				playtime_forever: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				first_playtime: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				playtime_windows_forever: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				playtime_mac_forever: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				playtime_linux_forever: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				playtime_deck_forever: {
					n: 16,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				first_windows_playtime: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				first_mac_playtime: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				first_linux_playtime: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				first_deck_playtime: {
					n: 17,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_windows_playtime: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_mac_playtime: {
					n: 13,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_linux_playtime: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_deck_playtime: {
					n: 18,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				playtime_disconnected: {
					n: 15,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CPlayer_GetLastPlayedTimes_Response_Game";
	}
}
class p extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.steamids) {
			i.Sg(p.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				steamids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
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
		return "CPlayer_GetPlayerLinkDetails_Request";
	}
}
class g extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.accounts) {
			i.Sg(g.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				accounts: {
					n: 1,
					c: h,
					r: true,
					q: true,
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
		return "CPlayer_GetPlayerLinkDetails_Response";
	}
}
class h extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.public_data) {
			i.Sg(h.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				public_data: {
					n: 1,
					c: C,
				},
				private_data: {
					n: 2,
					c: _,
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
		const e = new n.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(h.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
	}
}
class C extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.steamid) {
			i.Sg(C.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				steamid: {
					n: 1,
					q: true,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				visibility_state: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				privacy_state: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				profile_state: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				ban_expires_time: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				account_flags: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				sha_digest_avatar: {
					n: 9,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				persona_name: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				profile_url: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				content_country_restricted: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
	}
}
class _ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.persona_state) {
			i.Sg(_.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				persona_state: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				persona_state_flags: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_created: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				game_id: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				game_server_steam_id: {
					n: 5,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				game_server_ip_address: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				game_server_port: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				game_extra_info: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				account_name: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				lobby_steam_id: {
					n: 10,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				rich_presence_kv: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				broadcast_session_id: {
					n: 12,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				watching_broadcast_accountid: {
					n: 13,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				watching_broadcast_appid: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				watching_broadcast_viewers: {
					n: 15,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				watching_broadcast_title: {
					n: 16,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				last_logoff_time: {
					n: 17,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_seen_online: {
					n: 18,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				game_os_type: {
					n: 19,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				game_device_type: {
					n: 20,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				game_device_name: {
					n: 21,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_is_private: {
					n: 22,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= i.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
	}
}
export class YH extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return YH.toObject(e, this);
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
		return new YH();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new YH();
		return YH.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		YH.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		YH.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
	}
}
class b extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.steamid) {
			i.Sg(b.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				mutual_friend_account_ids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
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
		return "CPlayer_IncomingInviteMutualFriendList";
	}
}
class y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.incoming_invite_mutual_friends_lists) {
			i.Sg(y.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				incoming_invite_mutual_friends_lists: {
					n: 1,
					c: b,
					r: true,
					q: true,
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
		return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
	}
}
export class G9 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G9.prototype.steamid) {
			i.Sg(G9.M());
		}
		n_Message.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G9.sm_m ||= {
			proto: G9,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				include_appinfo: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_played_free_games: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				appids_filter: {
					n: 4,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				include_free_sub: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				skip_unvetted_apps: {
					n: 6,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				language: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				include_extended_appinfo: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return G9.sm_m;
	}
	static MBF() {
		G9.sm_mbf ||= i.w0(G9.M());
		return G9.sm_mbf;
	}
	toObject(e = false) {
		return G9.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(G9.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(G9.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new G9();
		return G9.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(G9.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		G9.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(G9.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		G9.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetOwnedGames_Request";
	}
}
class w extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.game_count) {
			i.Sg(w.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				game_count: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				games: {
					n: 2,
					c: B,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(w.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetOwnedGames_Response";
	}
}
class B extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.appid) {
			i.Sg(B.M());
		}
		n_Message.initialize(this, e, 0, -1, [18], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				playtime_2weeks: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				playtime_forever: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				img_icon_url: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				has_community_visible_stats: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				playtime_windows_forever: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				playtime_mac_forever: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				playtime_linux_forever: {
					n: 10,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				playtime_deck_forever: {
					n: 20,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				rtime_last_played: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				capsule_filename: {
					n: 12,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				sort_as: {
					n: 13,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				has_workshop: {
					n: 14,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				has_market: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				has_dlc: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				has_leaderboards: {
					n: 17,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				content_descriptorids: {
					n: 18,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				playtime_disconnected: {
					n: 19,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		const e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(B.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetOwnedGames_Response_Game";
	}
}
export class rx extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!rx.prototype.max_age_seconds) {
			i.Sg(rx.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		rx.sm_m ||= {
			proto: rx,
			fields: {
				max_age_seconds: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ignore_appids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return rx.sm_m;
	}
	static MBF() {
		rx.sm_mbf ||= i.w0(rx.M());
		return rx.sm_mbf;
	}
	toObject(e = false) {
		return rx.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(rx.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(rx.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new rx();
		return rx.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(rx.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		rx.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(rx.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		rx.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPlayNext_Request";
	}
}
class I extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.last_update_time) {
			i.Sg(I.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				last_update_time: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
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
		return "CPlayer_GetPlayNext_Response";
	}
}
class E extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.play_sessions) {
			i.Sg(E.M());
		}
		n_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				play_sessions: {
					n: 3,
					c: M,
					r: true,
					q: true,
				},
			},
		};
		return E.sm_m;
	}
	static MBF() {
		E.sm_mbf ||= i.w0(E.M());
		return E.sm_mbf;
	}
	toObject(e = false) {
		return E.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(E.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(E.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new E();
		return E.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(E.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(E.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_RecordDisconnectedPlaytime_Request";
	}
}
class M extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.appid) {
			i.Sg(M.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				session_time_start: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				seconds: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				offline: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				owner: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return M.sm_m;
	}
	static MBF() {
		M.sm_mbf ||= i.w0(M.M());
		return M.sm_mbf;
	}
	toObject(e = false) {
		return M.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(M.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(M.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(M.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(M.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
	}
}
class T extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_RecordDisconnectedPlaytime_Response";
	}
}
class R extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.appid) {
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
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CPlayer_GetGameBadgeLevels_Request";
	}
}
class k extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.player_level) {
			i.Sg(k.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				player_level: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				badges: {
					n: 2,
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
		const e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(k.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetGameBadgeLevels_Response";
	}
}
class D extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.level) {
			i.Sg(D.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				level: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				series: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				border_color: {
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
		const e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(D.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetGameBadgeLevels_Response_Badge";
	}
}
class N extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.communityitemid) {
			i.Sg(N.M());
		}
		n_Message.initialize(this, e, 0, -1, [15], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				communityitemid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				image_small: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				image_large: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				name: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_title: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				item_description: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				appid: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				item_type: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				item_class: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				movie_webm: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				movie_mp4: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				movie_webm_small: {
					n: 13,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				movie_mp4_small: {
					n: 14,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				equipped_flags: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				profile_colors: {
					n: 15,
					c: F,
					r: true,
					q: true,
				},
				tiled: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "ProfileItem";
	}
}
class F extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.style_name) {
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
				style_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				color: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "ProfileItem_ProfileColor";
	}
}
class G extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.steamid) {
			i.Sg(G.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				language: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		const e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(G.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetProfileBackground_Request";
	}
}
class O extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.profile_background) {
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
				profile_background: {
					n: 1,
					c: N,
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
		return "CPlayer_GetProfileBackground_Response";
	}
}
class P extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.communityitemid) {
			i.Sg(P.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				communityitemid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CPlayer_SetProfileBackground_Request";
	}
}
class L extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new L();
		return L.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetProfileBackground_Response";
	}
}
class z extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.steamid) {
			i.Sg(z.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		z.sm_m ||= {
			proto: z,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				language: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		const e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(z.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetMiniProfileBackground_Request";
	}
}
class x extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.profile_background) {
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
				profile_background: {
					n: 1,
					c: N,
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
		return "CPlayer_GetMiniProfileBackground_Response";
	}
}
class U extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.communityitemid) {
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
				communityitemid: {
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
		return "CPlayer_SetMiniProfileBackground_Request";
	}
}
class W extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new W();
		return W.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetMiniProfileBackground_Response";
	}
}
class V extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				language: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CPlayer_GetAvatarFrame_Request";
	}
}
class H extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H.prototype.avatar_frame) {
			i.Sg(H.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H.sm_m ||= {
			proto: H,
			fields: {
				avatar_frame: {
					n: 1,
					c: N,
				},
			},
		};
		return H.sm_m;
	}
	static MBF() {
		H.sm_mbf ||= i.w0(H.M());
		return H.sm_mbf;
	}
	toObject(e = false) {
		return H.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(H.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(H.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new H();
		return H.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(H.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(H.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetAvatarFrame_Response";
	}
}
class j extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!j.prototype.communityitemid) {
			i.Sg(j.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		j.sm_m ||= {
			proto: j,
			fields: {
				communityitemid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return j.sm_m;
	}
	static MBF() {
		j.sm_mbf ||= i.w0(j.M());
		return j.sm_mbf;
	}
	toObject(e = false) {
		return j.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(j.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(j.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new j();
		return j.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(j.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(j.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetAvatarFrame_Request";
	}
}
class q extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetAvatarFrame_Response";
	}
}
class Q extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q.prototype.steamid) {
			i.Sg(Q.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q.sm_m ||= {
			proto: Q,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				language: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Q.sm_m;
	}
	static MBF() {
		Q.sm_mbf ||= i.w0(Q.M());
		return Q.sm_mbf;
	}
	toObject(e = false) {
		return Q.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Q.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Q();
		return Q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Q.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Q.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetAnimatedAvatar_Request";
	}
}
class Z extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z.prototype.avatar) {
			i.Sg(Z.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z.sm_m ||= {
			proto: Z,
			fields: {
				avatar: {
					n: 1,
					c: N,
				},
			},
		};
		return Z.sm_m;
	}
	static MBF() {
		Z.sm_mbf ||= i.w0(Z.M());
		return Z.sm_mbf;
	}
	toObject(e = false) {
		return Z.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Z.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Z();
		return Z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Z.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Z.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetAnimatedAvatar_Response";
	}
}
class Y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.communityitemid) {
			i.Sg(Y.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Y.sm_m ||= {
			proto: Y,
			fields: {
				communityitemid: {
					n: 1,
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
		const e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Y.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetAnimatedAvatar_Request";
	}
}
class K extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return K.toObject(e, this);
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
		return new K();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new K();
		return K.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetAnimatedAvatar_Response";
	}
}
class X extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!X.prototype.steamid) {
			i.Sg(X.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		X.sm_m ||= {
			proto: X,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				language: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return X.sm_m;
	}
	static MBF() {
		X.sm_mbf ||= i.w0(X.M());
		return X.sm_mbf;
	}
	toObject(e = false) {
		return X.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(X.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(X.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new X();
		return X.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(X.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(X.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetSteamDeckKeyboardSkin_Request";
	}
}
class J extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!J.prototype.steam_deck_keyboard_skin) {
			i.Sg(J.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		J.sm_m ||= {
			proto: J,
			fields: {
				steam_deck_keyboard_skin: {
					n: 1,
					c: N,
				},
			},
		};
		return J.sm_m;
	}
	static MBF() {
		J.sm_mbf ||= i.w0(J.M());
		return J.sm_mbf;
	}
	toObject(e = false) {
		return J.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(J.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(J.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new J();
		return J.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(J.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(J.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetSteamDeckKeyboardSkin_Response";
	}
}
export class BT extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!BT.prototype.communityitemid) {
			i.Sg(BT.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		BT.sm_m ||= {
			proto: BT,
			fields: {
				communityitemid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return BT.sm_m;
	}
	static MBF() {
		BT.sm_mbf ||= i.w0(BT.M());
		return BT.sm_mbf;
	}
	toObject(e = false) {
		return BT.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(BT.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(BT.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new BT();
		return BT.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(BT.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		BT.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(BT.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		BT.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetSteamDeckKeyboardSkin_Request";
	}
}
class ee extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetSteamDeckKeyboardSkin_Response";
	}
}
export class Yk extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Yk.prototype.language) {
			i.Sg(Yk.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Yk.sm_m ||= {
			proto: Yk,
			fields: {
				language: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				filters: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
			},
		};
		return Yk.sm_m;
	}
	static MBF() {
		Yk.sm_mbf ||= i.w0(Yk.M());
		return Yk.sm_mbf;
	}
	toObject(e = false) {
		return Yk.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Yk.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Yk.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Yk();
		return Yk.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Yk.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Yk.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Yk.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Yk.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetProfileItemsOwned_Request";
	}
}
class re extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.profile_backgrounds) {
			i.Sg(re.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		re.sm_m ||= {
			proto: re,
			fields: {
				profile_backgrounds: {
					n: 1,
					c: N,
					r: true,
					q: true,
				},
				mini_profile_backgrounds: {
					n: 2,
					c: N,
					r: true,
					q: true,
				},
				avatar_frames: {
					n: 3,
					c: N,
					r: true,
					q: true,
				},
				animated_avatars: {
					n: 4,
					c: N,
					r: true,
					q: true,
				},
				profile_modifiers: {
					n: 5,
					c: N,
					r: true,
					q: true,
				},
				steam_deck_keyboard_skins: {
					n: 6,
					c: N,
					r: true,
					q: true,
				},
				steam_deck_startup_movies: {
					n: 7,
					c: N,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(re.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetProfileItemsOwned_Response";
	}
}
export class aK extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!aK.prototype.steamid) {
			i.Sg(aK.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		aK.sm_m ||= {
			proto: aK,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				language: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return aK.sm_m;
	}
	static MBF() {
		aK.sm_mbf ||= i.w0(aK.M());
		return aK.sm_mbf;
	}
	toObject(e = false) {
		return aK.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(aK.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(aK.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new aK();
		return aK.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(aK.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		aK.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(aK.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		aK.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetProfileItemsEquipped_Request";
	}
}
class ie extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ie.prototype.profile_background) {
			i.Sg(ie.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ie.sm_m ||= {
			proto: ie,
			fields: {
				profile_background: {
					n: 1,
					c: N,
				},
				mini_profile_background: {
					n: 2,
					c: N,
				},
				avatar_frame: {
					n: 3,
					c: N,
				},
				animated_avatar: {
					n: 4,
					c: N,
				},
				profile_modifier: {
					n: 5,
					c: N,
				},
				steam_deck_keyboard_skin: {
					n: 6,
					c: N,
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
		const e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ie.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetProfileItemsEquipped_Response";
	}
}
class ae extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ae.prototype.communityitemid) {
			i.Sg(ae.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ae.sm_m ||= {
			proto: ae,
			fields: {
				communityitemid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				flags: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		const e = new n.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ae.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetEquippedProfileItemFlags_Request";
	}
}
class se extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return se.toObject(e, this);
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
		return new se();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new se();
		return se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetEquippedProfileItemFlags_Response";
	}
}
class oe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetEmoticonList_Request";
	}
}
class le extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!le.prototype.emoticons) {
			i.Sg(le.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		le.sm_m ||= {
			proto: le,
			fields: {
				emoticons: {
					n: 1,
					c: ce,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(le.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetEmoticonList_Response";
	}
}
class ce extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ce.prototype.name) {
			i.Sg(ce.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ce.sm_m ||= {
			proto: ce,
			fields: {
				name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				count: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				time_last_used: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				use_count: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_received: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 6,
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
		const e = new n.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ce.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetEmoticonList_Response_Emoticon";
	}
}
class me extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!me.prototype.steamid) {
			i.Sg(me.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		me.sm_m ||= {
			proto: me,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				badgeid: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		const e = new n.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(me.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetCommunityBadgeProgress_Request";
	}
}
class ue extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ue.prototype.quests) {
			i.Sg(ue.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ue.sm_m ||= {
			proto: ue,
			fields: {
				quests: {
					n: 1,
					c: de,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ue.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetCommunityBadgeProgress_Response";
	}
}
class de extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!de.prototype.questid) {
			i.Sg(de.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		de.sm_m ||= {
			proto: de,
			fields: {
				questid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				completed: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		const e = new n.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(de.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetCommunityBadgeProgress_Response_Quest";
	}
}
export class kV extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!kV.prototype.appid) {
			i.Sg(kV.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		kV.sm_m ||= {
			proto: kV,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				status_text: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return kV.sm_m;
	}
	static MBF() {
		kV.sm_mbf ||= i.w0(kV.M());
		return kV.sm_mbf;
	}
	toObject(e = false) {
		return kV.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(kV.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(kV.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new kV();
		return kV.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(kV.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		kV.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(kV.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		kV.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_PostStatusToFriends_Request";
	}
}
class pe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return pe.toObject(e, this);
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
		return new pe();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new pe();
		return pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_PostStatusToFriends_Response";
	}
}
export class d5 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d5.prototype.steamid) {
			i.Sg(d5.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d5.sm_m ||= {
			proto: d5,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				postid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return d5.sm_m;
	}
	static MBF() {
		d5.sm_mbf ||= i.w0(d5.M());
		return d5.sm_mbf;
	}
	toObject(e = false) {
		return d5.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(d5.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(d5.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new d5();
		return d5.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(d5.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		d5.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(d5.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		d5.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPostedStatus_Request";
	}
}
class he extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!he.prototype.accountid) {
			i.Sg(he.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		he.sm_m ||= {
			proto: he,
			fields: {
				accountid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				postid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				status_text: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				deleted: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				appid: {
					n: 5,
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
		const e = new n.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(he.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPostedStatus_Response";
	}
}
export class Av extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Av.prototype.postid) {
			i.Sg(Av.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Av.sm_m ||= {
			proto: Av,
			fields: {
				postid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Av.sm_m;
	}
	static MBF() {
		Av.sm_mbf ||= i.w0(Av.M());
		return Av.sm_mbf;
	}
	toObject(e = false) {
		return Av.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Av.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Av.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Av();
		return Av.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Av.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Av.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Av.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Av.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_DeletePostedStatus_Request";
	}
}
class _e extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return _e.toObject(e, this);
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
		return new _e();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _e();
		return _e.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_DeletePostedStatus_Response";
	}
}
class fe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!fe.prototype.steamid) {
			i.Sg(fe.M());
		}
		n_Message.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		fe.sm_m ||= {
			proto: fe,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				language: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				max_achievements: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appids: {
					n: 4,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
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
		const e = new n.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(fe.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetTopAchievementsForGames_Request";
	}
}
class _be extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_be.prototype.games) {
			i.Sg(_be.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_be.sm_m ||= {
			proto: _be,
			fields: {
				games: {
					n: 1,
					c: Se,
					r: true,
					q: true,
				},
			},
		};
		return _be.sm_m;
	}
	static MBF() {
		_be.sm_mbf ||= i.w0(_be.M());
		return _be.sm_mbf;
	}
	toObject(e = false) {
		return _be.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(_be.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(_be.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _be();
		return _be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(_be.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		_be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_be.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		_be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetTopAchievementsForGames_Response";
	}
}
class ye extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ye.prototype.statid) {
			i.Sg(ye.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ye.sm_m ||= {
			proto: ye,
			fields: {
				statid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				bit: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				desc: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon_gray: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				hidden: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				player_percent_unlocked: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return ye.sm_m;
	}
	static MBF() {
		ye.sm_mbf ||= i.w0(ye.M());
		return ye.sm_mbf;
	}
	toObject(e = false) {
		return ye.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ye.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ye.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ye();
		return ye.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ye.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ye.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
	}
}
class Se extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Se.prototype.appid) {
			i.Sg(Se.M());
		}
		n_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Se.sm_m ||= {
			proto: Se,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				total_achievements: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				achievements: {
					n: 3,
					c: ye,
					r: true,
					q: true,
				},
			},
		};
		return Se.sm_m;
	}
	static MBF() {
		Se.sm_mbf ||= i.w0(Se.M());
		return Se.sm_mbf;
	}
	toObject(e = false) {
		return Se.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Se.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Se.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Se();
		return Se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Se.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Se.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetTopAchievementsForGames_Response_Game";
	}
}
export class dC extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!dC.prototype.steamid) {
			i.Sg(dC.M());
		}
		n_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		dC.sm_m ||= {
			proto: dC,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				language: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				appids: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				include_unvetted_apps: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return dC.sm_m;
	}
	static MBF() {
		dC.sm_mbf ||= i.w0(dC.M());
		return dC.sm_mbf;
	}
	toObject(e = false) {
		return dC.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(dC.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(dC.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new dC();
		return dC.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(dC.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		dC.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(dC.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		dC.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetAchievementsProgress_Request";
	}
}
class Be extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Be.prototype.achievement_progress) {
			i.Sg(Be.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Be.sm_m ||= {
			proto: Be,
			fields: {
				achievement_progress: {
					n: 1,
					c: ve,
					r: true,
					q: true,
				},
			},
		};
		return Be.sm_m;
	}
	static MBF() {
		Be.sm_mbf ||= i.w0(Be.M());
		return Be.sm_mbf;
	}
	toObject(e = false) {
		return Be.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Be.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Be.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Be();
		return Be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Be.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Be.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetAchievementsProgress_Response";
	}
}
class ve extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ve.prototype.appid) {
			i.Sg(ve.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ve.sm_m ||= {
			proto: ve,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				unlocked: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				total: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				percentage: {
					n: 4,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				all_unlocked: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				cache_time: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				vetted: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return ve.sm_m;
	}
	static MBF() {
		ve.sm_mbf ||= i.w0(ve.M());
		return ve.sm_mbf;
	}
	toObject(e = false) {
		return ve.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ve.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ve.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ve();
		return ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ve.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ve.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
	}
}
class Ie extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ie.prototype.appid) {
			i.Sg(Ie.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ie.sm_m ||= {
			proto: Ie,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				language: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		const e = new n.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ie.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetGameAchievements_Request";
	}
}
class Ee extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ee.prototype.achievements) {
			i.Sg(Ee.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ee.sm_m ||= {
			proto: Ee,
			fields: {
				achievements: {
					n: 1,
					c: Me,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ee.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetGameAchievements_Response";
	}
}
class Me extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Me.prototype.internal_name) {
			i.Sg(Me.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Me.sm_m ||= {
			proto: Me,
			fields: {
				internal_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				localized_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				localized_desc: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon_gray: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				hidden: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				player_percent_unlocked: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		const e = new n.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Me.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetGameAchievements_Response_Achievement";
	}
}
class Te extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Te.prototype.steamid) {
			i.Sg(Te.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Te.sm_m ||= {
			proto: Te,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Te.sm_m;
	}
	static MBF() {
		Te.sm_mbf ||= i.w0(Te.M());
		return Te.sm_mbf;
	}
	toObject(e = false) {
		return Te.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Te.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Te.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Te();
		return Te.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Te.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Te.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetFavoriteBadge_Request";
	}
}
class Re extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Re.prototype.has_favorite_badge) {
			i.Sg(Re.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Re.sm_m ||= {
			proto: Re,
			fields: {
				has_favorite_badge: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				badgeid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				communityitemid: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				item_type: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				border_color: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				level: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		const e = new n.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Re.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetFavoriteBadge_Response";
	}
}
class ke extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ke.prototype.communityitemid) {
			i.Sg(ke.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ke.sm_m ||= {
			proto: ke,
			fields: {
				communityitemid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				badgeid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return ke.sm_m;
	}
	static MBF() {
		ke.sm_mbf ||= i.w0(ke.M());
		return ke.sm_mbf;
	}
	toObject(e = false) {
		return ke.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ke.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ke.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ke();
		return ke.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ke.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ke.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetFavoriteBadge_Request";
	}
}
class De extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return De.toObject(e, this);
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
		return new De();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new De();
		return De.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetFavoriteBadge_Response";
	}
}
class Ne extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ne.prototype.slot) {
			i.Sg(Ne.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ne.sm_m ||= {
			proto: Ne,
			fields: {
				slot: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				publishedfileid: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				item_assetid: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				item_contextid: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				notes: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				title: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				accountid: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				badgeid: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				border_color: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				item_classid: {
					n: 11,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				item_instanceid: {
					n: 12,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				ban_check_result: {
					n: 13,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				replay_year: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Ne.sm_m;
	}
	static MBF() {
		Ne.sm_mbf ||= i.w0(Ne.M());
		return Ne.sm_mbf;
	}
	toObject(e = false) {
		return Ne.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ne.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ne.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ne();
		return Ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ne.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ne.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ProfileCustomizationSlot";
	}
}
class Fe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Fe.prototype.customization_type) {
			i.Sg(Fe.M());
		}
		n_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Fe.sm_m ||= {
			proto: Fe,
			fields: {
				customization_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				large: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				slots: {
					n: 3,
					c: Ne,
					r: true,
					q: true,
				},
				active: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				customization_style: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				purchaseid: {
					n: 6,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				level: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Fe.sm_m;
	}
	static MBF() {
		Fe.sm_mbf ||= i.w0(Fe.M());
		return Fe.sm_mbf;
	}
	toObject(e = false) {
		return Fe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Fe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Fe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Fe();
		return Fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Fe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Fe.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ProfileCustomization";
	}
}
class Ge extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ge.prototype.theme_id) {
			i.Sg(Ge.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ge.sm_m ||= {
			proto: Ge,
			fields: {
				theme_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				title: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Ge.sm_m;
	}
	static MBF() {
		Ge.sm_mbf ||= i.w0(Ge.M());
		return Ge.sm_mbf;
	}
	toObject(e = false) {
		return Ge.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ge.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ge.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ge();
		return Ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ge.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ge.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ProfileTheme";
	}
}
class Oe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Oe.prototype.hide_profile_awards) {
			i.Sg(Oe.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Oe.sm_m ||= {
			proto: Oe,
			fields: {
				hide_profile_awards: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Oe.sm_m;
	}
	static MBF() {
		Oe.sm_mbf ||= i.w0(Oe.M());
		return Oe.sm_mbf;
	}
	toObject(e = false) {
		return Oe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Oe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Oe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Oe();
		return Oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Oe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Oe.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ProfilePreferences";
	}
}
class Pe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Pe.prototype.steamid) {
			i.Sg(Pe.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Pe.sm_m ||= {
			proto: Pe,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				include_inactive_customizations: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_purchased_customizations: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Pe.sm_m;
	}
	static MBF() {
		Pe.sm_mbf ||= i.w0(Pe.M());
		return Pe.sm_mbf;
	}
	toObject(e = false) {
		return Pe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Pe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Pe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Pe();
		return Pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Pe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Pe.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetProfileCustomization_Request";
	}
}
class Le extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Le.prototype.customizations) {
			i.Sg(Le.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Le.sm_m ||= {
			proto: Le,
			fields: {
				customizations: {
					n: 1,
					c: Fe,
					r: true,
					q: true,
				},
				slots_available: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				profile_theme: {
					n: 3,
					c: Ge,
				},
				purchased_customizations: {
					n: 4,
					c: ze,
					r: true,
					q: true,
				},
				profile_preferences: {
					n: 5,
					c: Oe,
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
		const e = new n.BinaryWriter();
		Le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Le.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetProfileCustomization_Response";
	}
}
class ze extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ze.prototype.purchaseid) {
			i.Sg(ze.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ze.sm_m ||= {
			proto: ze,
			fields: {
				purchaseid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				customization_type: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				level: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return ze.sm_m;
	}
	static MBF() {
		ze.sm_mbf ||= i.w0(ze.M());
		return ze.sm_mbf;
	}
	toObject(e = false) {
		return ze.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ze.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ze.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ze();
		return ze.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ze.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ze.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ze.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ze.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
	}
}
class xe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!xe.prototype.steamid) {
			i.Sg(xe.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		xe.sm_m ||= {
			proto: xe,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return xe.sm_m;
	}
	static MBF() {
		xe.sm_mbf ||= i.w0(xe.M());
		return xe.sm_mbf;
	}
	toObject(e = false) {
		return xe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(xe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(xe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new xe();
		return xe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(xe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		xe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(xe.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		xe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPurchasedProfileCustomizations_Request";
	}
}
class Ue extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ue.prototype.purchased_customizations) {
			i.Sg(Ue.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ue.sm_m ||= {
			proto: Ue,
			fields: {
				purchased_customizations: {
					n: 1,
					c: We,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		Ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ue.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPurchasedProfileCustomizations_Response";
	}
}
class We extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!We.prototype.purchaseid) {
			i.Sg(We.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		We.sm_m ||= {
			proto: We,
			fields: {
				purchaseid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				customization_type: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return We.sm_m;
	}
	static MBF() {
		We.sm_mbf ||= i.w0(We.M());
		return We.sm_mbf;
	}
	toObject(e = false) {
		return We.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(We.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(We.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new We();
		return We.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(We.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		We.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(We.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		We.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
	}
}
class Ve extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ve.prototype.steamid) {
			i.Sg(Ve.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ve.sm_m ||= {
			proto: Ve,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		const e = new n.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ve.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
	}
}
class He extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!He.prototype.purchased_customizations) {
			i.Sg(He.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		He.sm_m ||= {
			proto: He,
			fields: {
				purchased_customizations: {
					n: 1,
					c: je,
					r: true,
					q: true,
				},
				upgraded_customizations: {
					n: 2,
					c: qe,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		He.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(He.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		He.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
	}
}
class je extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!je.prototype.customization_type) {
			i.Sg(je.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		je.sm_m ||= {
			proto: je,
			fields: {
				customization_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				count: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		const e = new n.BinaryWriter();
		je.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(je.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		je.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
	}
}
class qe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qe.prototype.customization_type) {
			i.Sg(qe.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qe.sm_m ||= {
			proto: qe,
			fields: {
				customization_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				level: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		const e = new n.BinaryWriter();
		qe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qe.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		qe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
	}
}
class Qe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Qe.toObject(e, this);
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
		return new Qe();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Qe();
		return Qe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Qe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Qe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetProfileThemesAvailable_Request";
	}
}
class Ze extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ze.prototype.profile_themes) {
			i.Sg(Ze.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ze.sm_m ||= {
			proto: Ze,
			fields: {
				profile_themes: {
					n: 1,
					c: Ge,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		Ze.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ze.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ze.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetProfileThemesAvailable_Response";
	}
}
class Ye extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ye.prototype.theme_id) {
			i.Sg(Ye.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ye.sm_m ||= {
			proto: Ye,
			fields: {
				theme_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		const e = new n.BinaryWriter();
		Ye.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ye.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ye.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetProfileTheme_Request";
	}
}
class Ke extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ke.toObject(e, this);
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
		return new Ke();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ke();
		return Ke.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ke.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ke.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetProfileTheme_Response";
	}
}
class Xe extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Xe.prototype.profile_preferences) {
			i.Sg(Xe.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Xe.sm_m ||= {
			proto: Xe,
			fields: {
				profile_preferences: {
					n: 1,
					c: Oe,
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
		const e = new n.BinaryWriter();
		Xe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Xe.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Xe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetProfilePreferences_Request";
	}
}
class Je extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Je.toObject(e, this);
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
		return new Je();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Je();
		return Je.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Je.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Je.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetProfilePreferences_Response";
	}
}
export class tl extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!tl.prototype.appid) {
			i.Sg(tl.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		tl.sm_m ||= {
			proto: tl,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return tl.sm_m;
	}
	static MBF() {
		tl.sm_mbf ||= i.w0(tl.M());
		return tl.sm_mbf;
	}
	toObject(e = false) {
		return tl.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(tl.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(tl.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new tl();
		return tl.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(tl.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		tl.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(tl.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		tl.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetFriendsGameplayInfo_Request";
	}
}
class et extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!et.prototype.your_info) {
			i.Sg(et.M());
		}
		n_Message.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		et.sm_m ||= {
			proto: et,
			fields: {
				your_info: {
					n: 1,
					c: rt,
				},
				in_game: {
					n: 2,
					c: tt,
					r: true,
					q: true,
				},
				played_recently: {
					n: 3,
					c: tt,
					r: true,
					q: true,
				},
				played_ever: {
					n: 4,
					c: tt,
					r: true,
					q: true,
				},
				owns: {
					n: 5,
					c: tt,
					r: true,
					q: true,
				},
				in_wishlist: {
					n: 6,
					c: tt,
					r: true,
					q: true,
				},
			},
		};
		return et.sm_m;
	}
	static MBF() {
		et.sm_mbf ||= i.w0(et.M());
		return et.sm_mbf;
	}
	toObject(e = false) {
		return et.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(et.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(et.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new et();
		return et.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(et.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		et.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(et.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		et.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetFriendsGameplayInfo_Response";
	}
}
class tt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!tt.prototype.steamid) {
			i.Sg(tt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		tt.sm_m ||= {
			proto: tt,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				minutes_played: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				minutes_played_forever: {
					n: 3,
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
		const e = new n.BinaryWriter();
		tt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(tt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		tt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
	}
}
class rt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!rt.prototype.steamid) {
			i.Sg(rt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		rt.sm_m ||= {
			proto: rt,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				minutes_played: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				minutes_played_forever: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				in_wishlist: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				owned: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return rt.sm_m;
	}
	static MBF() {
		rt.sm_mbf ||= i.w0(rt.M());
		return rt.sm_mbf;
	}
	toObject(e = false) {
		return rt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(rt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(rt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new rt();
		return rt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(rt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		rt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(rt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		rt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
	}
}
export class bn extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return bn.toObject(e, this);
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
		return new bn();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new bn();
		return bn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		bn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		bn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetTimeSSAAccepted_Request";
	}
}
class it extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!it.prototype.time_ssa_accepted) {
			i.Sg(it.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		it.sm_m ||= {
			proto: it,
			fields: {
				time_ssa_accepted: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_ssa_updated: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_chinassa_accepted: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return it.sm_m;
	}
	static MBF() {
		it.sm_mbf ||= i.w0(it.M());
		return it.sm_mbf;
	}
	toObject(e = false) {
		return it.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(it.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(it.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new it();
		return it.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(it.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		it.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(it.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		it.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetTimeSSAAccepted_Response";
	}
}
export class Nr extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Nr.prototype.agreement_type) {
			i.Sg(Nr.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Nr.sm_m ||= {
			proto: Nr,
			fields: {
				agreement_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				time_signed_utc: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Nr.sm_m;
	}
	static MBF() {
		Nr.sm_mbf ||= i.w0(Nr.M());
		return Nr.sm_mbf;
	}
	toObject(e = false) {
		return Nr.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Nr.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Nr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Nr();
		return Nr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Nr.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Nr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Nr.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Nr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_AcceptSSA_Request";
	}
}
class st extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return st.toObject(e, this);
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
		return new st();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new st();
		return st.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		st.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		st.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_AcceptSSA_Response";
	}
}
export class dN extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return dN.toObject(e, this);
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
		return new dN();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new dN();
		return dN.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		dN.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		dN.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetNicknameList_Request";
	}
}
class lt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!lt.prototype.nicknames) {
			i.Sg(lt.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		lt.sm_m ||= {
			proto: lt,
			fields: {
				nicknames: {
					n: 1,
					c: ct,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		lt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(lt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		lt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetNicknameList_Response";
	}
}
class ct extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ct.prototype.accountid) {
			i.Sg(ct.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ct.sm_m ||= {
			proto: ct,
			fields: {
				accountid: {
					n: 1,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				nickname: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return ct.sm_m;
	}
	static MBF() {
		ct.sm_mbf ||= i.w0(ct.M());
		return ct.sm_mbf;
	}
	toObject(e = false) {
		return ct.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ct.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ct.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ct();
		return ct.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ct.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ct.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ct.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ct.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetNicknameList_Response_PlayerNickname";
	}
}
class mt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!mt.prototype.accountid) {
			i.Sg(mt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		mt.sm_m ||= {
			proto: mt,
			fields: {
				accountid: {
					n: 1,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				nickname: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				notifications_showingame: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				notifications_showonline: {
					n: 4,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				notifications_showmessages: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				sounds_showingame: {
					n: 6,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				sounds_showonline: {
					n: 7,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				sounds_showmessages: {
					n: 8,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				notifications_sendmobile: {
					n: 9,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return mt.sm_m;
	}
	static MBF() {
		mt.sm_mbf ||= i.w0(mt.M());
		return mt.sm_mbf;
	}
	toObject(e = false) {
		return mt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(mt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(mt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new mt();
		return mt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(mt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		mt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(mt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		mt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "PerFriendPreferences";
	}
}
export class Xt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Xt.toObject(e, this);
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
		return new Xt();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Xt();
		return Xt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Xt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Xt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPerFriendPreferences_Request";
	}
}
class dt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!dt.prototype.preferences) {
			i.Sg(dt.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		dt.sm_m ||= {
			proto: dt,
			fields: {
				preferences: {
					n: 1,
					c: mt,
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
		const e = new n.BinaryWriter();
		dt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(dt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		dt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPerFriendPreferences_Response";
	}
}
export class $J extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$J.prototype.preferences) {
			i.Sg($J.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$J.sm_m ||= {
			proto: $J,
			fields: {
				preferences: {
					n: 1,
					c: mt,
				},
			},
		};
		return $J.sm_m;
	}
	static MBF() {
		$J.sm_mbf ||= i.w0($J.M());
		return $J.sm_mbf;
	}
	toObject(e = false) {
		return $J.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT($J.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq($J.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new $J();
		return $J.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj($J.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		$J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0($J.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		$J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetPerFriendPreferences_Request";
	}
}
class pt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return pt.toObject(e, this);
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
		return new pt();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new pt();
		return pt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		pt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		pt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetPerFriendPreferences_Response";
	}
}
export class jP extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!jP.prototype.steamid) {
			i.Sg(jP.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		jP.sm_m ||= {
			proto: jP,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return jP.sm_m;
	}
	static MBF() {
		jP.sm_mbf ||= i.w0(jP.M());
		return jP.sm_mbf;
	}
	toObject(e = false) {
		return jP.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(jP.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(jP.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new jP();
		return jP.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(jP.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		jP.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(jP.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		jP.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_AddFriend_Request";
	}
}
class ht extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ht.prototype.invite_sent) {
			i.Sg(ht.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ht.sm_m ||= {
			proto: ht,
			fields: {
				invite_sent: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				friend_relationship: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				result: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		const e = new n.BinaryWriter();
		ht.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ht.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ht.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_AddFriend_Response";
	}
}
export class i$ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!i$.prototype.steamid) {
			i.Sg(i$.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		i$.sm_m ||= {
			proto: i$,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return i$.sm_m;
	}
	static MBF() {
		i$.sm_mbf ||= i.w0(i$.M());
		return i$.sm_mbf;
	}
	toObject(e = false) {
		return i$.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(i$.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(i$.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new i$();
		return i$.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(i$.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		i$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(i$.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		i$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_RemoveFriend_Request";
	}
}
class _t extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_t.prototype.friend_relationship) {
			i.Sg(_t.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_t.sm_m ||= {
			proto: _t,
			fields: {
				friend_relationship: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		const e = new n.BinaryWriter();
		_t.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_t.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		_t.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_RemoveFriend_Response";
	}
}
export class qW extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qW.prototype.steamid) {
			i.Sg(qW.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qW.sm_m ||= {
			proto: qW,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				unignore: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return qW.sm_m;
	}
	static MBF() {
		qW.sm_mbf ||= i.w0(qW.M());
		return qW.sm_mbf;
	}
	toObject(e = false) {
		return qW.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qW.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qW.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qW();
		return qW.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qW.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		qW.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qW.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		qW.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_IgnoreFriend_Request";
	}
}
class bt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!bt.prototype.friend_relationship) {
			i.Sg(bt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		bt.sm_m ||= {
			proto: bt,
			fields: {
				friend_relationship: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		const e = new n.BinaryWriter();
		bt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(bt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		bt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_IgnoreFriend_Response";
	}
}
export class B4 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B4.prototype.parenthesize_nicknames) {
			i.Sg(B4.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B4.sm_m ||= {
			proto: B4,
			fields: {
				parenthesize_nicknames: {
					n: 4,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				text_filter_setting: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				text_filter_ignore_friends: {
					n: 6,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				text_filter_words_revision: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				timestamp_updated: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return B4.sm_m;
	}
	static MBF() {
		B4.sm_mbf ||= i.w0(B4.M());
		return B4.sm_mbf;
	}
	toObject(e = false) {
		return B4.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(B4.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(B4.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new B4();
		return B4.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(B4.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		B4.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(B4.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		B4.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_CommunityPreferences";
	}
}
export class tz extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return tz.toObject(e, this);
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
		return new tz();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new tz();
		return tz.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		tz.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		tz.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetCommunityPreferences_Request";
	}
}
class wt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!wt.prototype.preferences) {
			i.Sg(wt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		wt.sm_m ||= {
			proto: wt,
			fields: {
				preferences: {
					n: 1,
					c: B4,
				},
				content_descriptor_preferences: {
					n: 2,
					c: s.u2,
				},
			},
		};
		return wt.sm_m;
	}
	static MBF() {
		wt.sm_mbf ||= i.w0(wt.M());
		return wt.sm_mbf;
	}
	toObject(e = false) {
		return wt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(wt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(wt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new wt();
		return wt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(wt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		wt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(wt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		wt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetCommunityPreferences_Response";
	}
}
export class pr extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pr.prototype.preferences) {
			i.Sg(pr.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pr.sm_m ||= {
			proto: pr,
			fields: {
				preferences: {
					n: 1,
					c: B4,
				},
			},
		};
		return pr.sm_m;
	}
	static MBF() {
		pr.sm_mbf ||= i.w0(pr.M());
		return pr.sm_mbf;
	}
	toObject(e = false) {
		return pr.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(pr.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(pr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new pr();
		return pr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(pr.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		pr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(pr.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		pr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetCommunityPreferences_Request";
	}
}
class vt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		vt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		vt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_SetCommunityPreferences_Response";
	}
}
export class Ey extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ey.prototype.text_filter_custom_banned_words) {
			i.Sg(Ey.M());
		}
		n_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ey.sm_m ||= {
			proto: Ey,
			fields: {
				text_filter_custom_banned_words: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				text_filter_custom_clean_words: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				text_filter_words_revision: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Ey.sm_m;
	}
	static MBF() {
		Ey.sm_mbf ||= i.w0(Ey.M());
		return Ey.sm_mbf;
	}
	toObject(e = false) {
		return Ey.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ey.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ey.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ey();
		return Ey.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ey.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ey.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ey.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ey.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_TextFilterWords";
	}
}
export class SC extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return SC.toObject(e, this);
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
		return new SC();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new SC();
		return SC.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		SC.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		SC.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetTextFilterWords_Request";
	}
}
class Mt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Mt.prototype.words) {
			i.Sg(Mt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Mt.sm_m ||= {
			proto: Mt,
			fields: {
				words: {
					n: 1,
					c: Ey,
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
		const e = new n.BinaryWriter();
		Mt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Mt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Mt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetTextFilterWords_Response";
	}
}
export class gz extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!gz.prototype.language) {
			i.Sg(gz.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		gz.sm_m ||= {
			proto: gz,
			fields: {
				language: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return gz.sm_m;
	}
	static MBF() {
		gz.sm_mbf ||= i.w0(gz.M());
		return gz.sm_mbf;
	}
	toObject(e = false) {
		return gz.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(gz.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(gz.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new gz();
		return gz.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(gz.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		gz.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(gz.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		gz.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetNewSteamAnnouncementState_Request";
	}
}
class Rt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Rt.prototype.state) {
			i.Sg(Rt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Rt.sm_m ||= {
			proto: Rt,
			fields: {
				state: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				announcement_headline: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				announcement_url: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				time_posted: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				announcement_gid: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		const e = new n.BinaryWriter();
		Rt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Rt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Rt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetNewSteamAnnouncementState_Response";
	}
}
export class GN extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!GN.prototype.announcement_gid) {
			i.Sg(GN.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		GN.sm_m ||= {
			proto: GN,
			fields: {
				announcement_gid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				time_posted: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return GN.sm_m;
	}
	static MBF() {
		GN.sm_mbf ||= i.w0(GN.M());
		return GN.sm_mbf;
	}
	toObject(e = false) {
		return GN.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(GN.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(GN.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new GN();
		return GN.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(GN.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		GN.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(GN.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		GN.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
	}
}
class Dt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Dt.toObject(e, this);
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
		return new Dt();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Dt();
		return Dt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Dt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Dt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
	}
}
class Nt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Nt.prototype.privacy_state) {
			i.Sg(Nt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Nt.sm_m ||= {
			proto: Nt,
			fields: {
				privacy_state: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				privacy_state_inventory: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				privacy_state_gifts: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				privacy_state_ownedgames: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				privacy_state_playtime: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				privacy_state_friendslist: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		const e = new n.BinaryWriter();
		Nt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Nt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Nt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPrivacySettings";
	}
}
export class be extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return be.toObject(e, this);
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
		return new be();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new be();
		return be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPrivacySettings_Request";
	}
}
class Gt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Gt.prototype.privacy_settings) {
			i.Sg(Gt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Gt.sm_m ||= {
			proto: Gt,
			fields: {
				privacy_settings: {
					n: 1,
					c: Nt,
				},
			},
		};
		return Gt.sm_m;
	}
	static MBF() {
		Gt.sm_mbf ||= i.w0(Gt.M());
		return Gt.sm_mbf;
	}
	toObject(e = false) {
		return Gt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Gt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Gt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Gt();
		return Gt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Gt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Gt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Gt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Gt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetPrivacySettings_Response";
	}
}
class Ot extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ot.prototype.appid) {
			i.Sg(Ot.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ot.sm_m ||= {
			proto: Ot,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		const e = new n.BinaryWriter();
		Ot.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ot.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ot.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetDurationControl_Request";
	}
}
class Pt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Pt.prototype.is_enabled) {
			i.Sg(Pt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Pt.sm_m ||= {
			proto: Pt,
			fields: {
				is_enabled: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				seconds: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				seconds_today: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				is_steamchina_account: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_age_verified: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				seconds_allowed_today: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				age_verification_pending: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				block_minors: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Pt.sm_m;
	}
	static MBF() {
		Pt.sm_mbf ||= i.w0(Pt.M());
		return Pt.sm_mbf;
	}
	toObject(e = false) {
		return Pt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Pt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Pt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Pt();
		return Pt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Pt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Pt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Pt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Pt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_GetDurationControl_Response";
	}
}
class Lt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Lt.prototype.games) {
			i.Sg(Lt.M());
		}
		n_Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Lt.sm_m ||= {
			proto: Lt,
			fields: {
				games: {
					n: 1,
					c: A,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		Lt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Lt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Lt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_LastPlayedTimes_Notification";
	}
}
class zt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!zt.prototype.accountid) {
			i.Sg(zt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		zt.sm_m ||= {
			proto: zt,
			fields: {
				accountid: {
					n: 1,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				nickname: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_echo_to_self: {
					n: 3,
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
		const e = new n.BinaryWriter();
		zt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(zt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		zt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_FriendNicknameChanged_Notification";
	}
}
class _xt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_xt.prototype.accountid) {
			i.Sg(_xt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_xt.sm_m ||= {
			proto: _xt,
			fields: {
				accountid: {
					n: 1,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
			},
		};
		return _xt.sm_m;
	}
	static MBF() {
		_xt.sm_mbf ||= i.w0(_xt.M());
		return _xt.sm_mbf;
	}
	toObject(e = false) {
		return _xt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(_xt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(_xt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _xt();
		return _xt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(_xt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		_xt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_xt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		_xt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
	}
}
class Ut extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ut.prototype.state) {
			i.Sg(Ut.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ut.sm_m ||= {
			proto: Ut,
			fields: {
				state: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				announcement_headline: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				announcement_url: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				time_posted: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				announcement_gid: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		const e = new n.BinaryWriter();
		Ut.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ut.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ut.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_NewSteamAnnouncementState_Notification";
	}
}
class Wt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Wt.prototype.preferences) {
			i.Sg(Wt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Wt.sm_m ||= {
			proto: Wt,
			fields: {
				preferences: {
					n: 1,
					c: B4,
				},
				content_descriptor_preferences: {
					n: 2,
					c: s.u2,
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
		const e = new n.BinaryWriter();
		Wt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Wt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Wt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_CommunityPreferencesChanged_Notification";
	}
}
class Vt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Vt.prototype.words) {
			i.Sg(Vt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Vt.sm_m ||= {
			proto: Vt,
			fields: {
				words: {
					n: 1,
					c: Ey,
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
		const e = new n.BinaryWriter();
		Vt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Vt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Vt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_TextFilterWordsChanged_Notification";
	}
}
class Ht extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ht.prototype.accountid) {
			i.Sg(Ht.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ht.sm_m ||= {
			proto: Ht,
			fields: {
				accountid: {
					n: 1,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				preferences: {
					n: 2,
					c: mt,
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
		const e = new n.BinaryWriter();
		Ht.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ht.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ht.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_PerFriendPreferencesChanged_Notification";
	}
}
class jt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!jt.prototype.privacy_settings) {
			i.Sg(jt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		jt.sm_m ||= {
			proto: jt,
			fields: {
				privacy_settings: {
					n: 1,
					c: Nt,
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
		const e = new n.BinaryWriter();
		jt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(jt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		jt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPlayer_PrivacySettingsChanged_Notification";
	}
}
export let xt;
export let QA;
((e) => {
	e.GetRecentPlaytimeSessionsForChild = (e, t) =>
		e.SendMsg("Player.GetRecentPlaytimeSessionsForChild#1", I8(l, t), c, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetPlayerLinkDetails = (e, t) =>
		e.SendMsg("Player.GetPlayerLinkDetails#1", I8(p, t), g, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 2,
		});
	e.GetMutualFriendsForIncomingInvites = (e, t) =>
		e.SendMsg("Player.GetMutualFriendsForIncomingInvites#1", I8(YH, t), y, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetOwnedGames = (e, t) =>
		e.SendMsg("Player.GetOwnedGames#1", I8(G9, t), w, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 2,
		});
	e.GetPlayNext = (e, t) =>
		e.SendMsg("Player.GetPlayNext#1", I8(rx, t), I, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetFriendsGameplayInfo = (e, t) =>
		e.SendMsg("Player.GetFriendsGameplayInfo#1", I8(tl, t), et, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetGameBadgeLevels = (e, t) =>
		e.SendMsg("Player.GetGameBadgeLevels#1", I8(R, t), k, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetProfileBackground = (e, t) =>
		e.SendMsg("Player.GetProfileBackground#1", I8(G, t), O, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.SetProfileBackground = (e, t) =>
		e.SendMsg("Player.SetProfileBackground#1", I8(P, t), L, {
			ePrivilege: 1,
		});
	e.GetMiniProfileBackground = (e, t) =>
		e.SendMsg("Player.GetMiniProfileBackground#1", I8(z, t), x, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.SetMiniProfileBackground = (e, t) =>
		e.SendMsg("Player.SetMiniProfileBackground#1", I8(U, t), W, {
			ePrivilege: 1,
		});
	e.GetAvatarFrame = (e, t) =>
		e.SendMsg("Player.GetAvatarFrame#1", I8(V, t), H, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.SetAvatarFrame = (e, t) =>
		e.SendMsg("Player.SetAvatarFrame#1", I8(j, t), q, {
			ePrivilege: 1,
		});
	e.GetAnimatedAvatar = (e, t) =>
		e.SendMsg("Player.GetAnimatedAvatar#1", I8(Q, t), Z, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.SetAnimatedAvatar = (e, t) =>
		e.SendMsg("Player.SetAnimatedAvatar#1", I8(Y, t), K, {
			ePrivilege: 1,
		});
	e.GetSteamDeckKeyboardSkin = (e, t) =>
		e.SendMsg("Player.GetSteamDeckKeyboardSkin#1", I8(X, t), J, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.SetSteamDeckKeyboardSkin = (e, t) =>
		e.SendMsg("Player.SetSteamDeckKeyboardSkin#1", I8(BT, t), ee, {
			ePrivilege: 1,
		});
	e.GetProfileItemsOwned = (e, t) =>
		e.SendMsg("Player.GetProfileItemsOwned#1", I8(Yk, t), re, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetProfileItemsEquipped = (e, t) =>
		e.SendMsg("Player.GetProfileItemsEquipped#1", I8(aK, t), ie, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.SetEquippedProfileItemFlags = (e, t) =>
		e.SendMsg("Player.SetEquippedProfileItemFlags#1", I8(ae, t), se, {
			ePrivilege: 1,
		});
	e.GetEmoticonList = (e, t) =>
		e.SendMsg("Player.GetEmoticonList#1", I8(oe, t), le, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetCommunityBadgeProgress = (e, t) =>
		e.SendMsg("Player.GetCommunityBadgeProgress#1", I8(me, t), ue, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 2,
		});
	e.GetTopAchievementsForGames = (e, t) =>
		e.SendMsg("Player.GetTopAchievementsForGames#1", I8(fe, t), _be, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 2,
		});
	e.GetAchievementsProgress = (e, t) =>
		e.SendMsg("Player.GetAchievementsProgress#1", I8(dC, t), Be, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.GetGameAchievements = (e, t) =>
		e.SendMsg("Player.GetGameAchievements#1", I8(Ie, t), Ee, {
			bConstMethod: true,
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
	e.GetFavoriteBadge = (e, t) =>
		e.SendMsg("Player.GetFavoriteBadge#1", I8(Te, t), Re, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.SetFavoriteBadge = (e, t) =>
		e.SendMsg("Player.SetFavoriteBadge#1", I8(ke, t), De, {
			ePrivilege: 1,
		});
	e.GetProfileCustomization = (e, t) =>
		e.SendMsg("Player.GetProfileCustomization#1", I8(Pe, t), Le, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.GetPurchasedProfileCustomizations = (e, t) =>
		e.SendMsg("Player.GetPurchasedProfileCustomizations#1", I8(xe, t), Ue, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.GetPurchasedAndUpgradedProfileCustomizations = (e, t) =>
		e.SendMsg(
			"Player.GetPurchasedAndUpgradedProfileCustomizations#1",
			I8(Ve, t),
			He,
			{
				bConstMethod: true,
				ePrivilege: 2,
				eWebAPIKeyRequirement: 1,
			},
		);
	e.GetProfileThemesAvailable = (e, t) =>
		e.SendMsg("Player.GetProfileThemesAvailable#1", I8(Qe, t), Ze, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.SetProfileTheme = (e, t) =>
		e.SendMsg("Player.SetProfileTheme#1", I8(Ye, t), Ke, {
			ePrivilege: 1,
		});
	e.SetProfilePreferences = (e, t) =>
		e.SendMsg("Player.SetProfilePreferences#1", I8(Xe, t), Je, {
			ePrivilege: 1,
		});
	e.PostStatusToFriends = (e, t) =>
		e.SendMsg("Player.PostStatusToFriends#1", I8(kV, t), pe, {
			ePrivilege: 3,
		});
	e.GetPostedStatus = (e, t) =>
		e.SendMsg("Player.GetPostedStatus#1", I8(d5, t), he, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.DeletePostedStatus = (e, t) =>
		e.SendMsg("Player.DeletePostedStatus#1", I8(Av, t), _e, {
			ePrivilege: 1,
		});
	e.ClientGetLastPlayedTimes = (e, t) =>
		e.SendMsg("Player.ClientGetLastPlayedTimes#1", I8(u, t), d, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	e.GetTimeSSAAccepted = (e, t) =>
		e.SendMsg("Player.GetTimeSSAAccepted#1", I8(bn, t), it, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.AcceptSSA = (e, t) =>
		e.SendMsg("Player.AcceptSSA#1", I8(Nr, t), st, {
			ePrivilege: 1,
		});
	e.GetNicknameList = (e, t) =>
		e.SendMsg("Player.GetNicknameList#1", I8(dN, t), lt, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.GetPerFriendPreferences = (e, t) =>
		e.SendMsg("Player.GetPerFriendPreferences#1", I8(Xt, t), dt, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.SetPerFriendPreferences = (e, t) =>
		e.SendMsg("Player.SetPerFriendPreferences#1", I8($J, t), pt, {
			ePrivilege: 1,
		});
	e.AddFriend = (e, t) =>
		e.SendMsg("Player.AddFriend#1", I8(jP, t), ht, {
			ePrivilege: 1,
		});
	e.RemoveFriend = (e, t) =>
		e.SendMsg("Player.RemoveFriend#1", I8(i$, t), _t, {
			ePrivilege: 1,
		});
	e.IgnoreFriend = (e, t) =>
		e.SendMsg("Player.IgnoreFriend#1", I8(qW, t), bt, {
			ePrivilege: 1,
		});
	e.GetCommunityPreferences = (e, t) =>
		e.SendMsg("Player.GetCommunityPreferences#1", I8(tz, t), wt, {
			ePrivilege: 1,
		});
	e.SetCommunityPreferences = (e, t) =>
		e.SendMsg("Player.SetCommunityPreferences#1", I8(pr, t), vt, {
			ePrivilege: 1,
		});
	e.GetTextFilterWords = (e, t) =>
		e.SendMsg("Player.GetTextFilterWords#1", I8(SC, t), Mt, {
			ePrivilege: 1,
		});
	e.GetNewSteamAnnouncementState = (e, t) =>
		e.SendMsg("Player.GetNewSteamAnnouncementState#1", I8(gz, t), Rt, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	e.UpdateSteamAnnouncementLastRead = (e, t) =>
		e.SendMsg("Player.UpdateSteamAnnouncementLastRead#1", I8(GN, t), Dt, {
			ePrivilege: 1,
		});
	e.GetPrivacySettings = (e, t) =>
		e.SendMsg("Player.GetPrivacySettings#1", I8(be, t), Gt, {
			ePrivilege: 1,
		});
	e.GetDurationControl = (e, t) =>
		e.SendMsg("Player.GetDurationControl#1", I8(Ot, t), Pt, {
			ePrivilege: 1,
		});
	e.RecordDisconnectedPlaytime = (e, t) =>
		e.SendMsg("Player.RecordDisconnectedPlaytime#1", I8(E, t), T, {
			ePrivilege: 1,
		});
})((xt ||= {}));
((e) => {
	e.NotifyLastPlayedTimesHandler = {
		name: "PlayerClient.NotifyLastPlayedTimes#1",
		request: Lt,
	};
	e.NotifyFriendNicknameChangedHandler = {
		name: "PlayerClient.NotifyFriendNicknameChanged#1",
		request: zt,
	};
	e.NotifyFriendEquippedProfileItemsChangedHandler = {
		name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
		request: _xt,
	};
	e.NotifyNewSteamAnnouncementStateHandler = {
		name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
		request: Ut,
	};
	e.NotifyCommunityPreferencesChangedHandler = {
		name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
		request: Wt,
	};
	e.NotifyTextFilterWordsChangedHandler = {
		name: "PlayerClient.NotifyTextFilterWordsChanged#1",
		request: Vt,
	};
	e.NotifyPerFriendPreferencesChangedHandler = {
		name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
		request: Ht,
	};
	e.NotifyPrivacyPrivacySettingsChangedHandler = {
		name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
		request: jt,
	};
})((QA ||= {}));
