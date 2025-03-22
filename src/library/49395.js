var r = require(/*webcrack:missing*/ "./58663.js");
var i = require("./48307.js");
require("./29218.js");
r.Message;
const s = r.Message;
export class sw extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!sw.prototype.steam_id_dest) {
			i.Sg(sw.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		sw.sm_m ||= {
			proto: sw,
			fields: {
				steam_id_dest: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				steam_id_src: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				connect_string: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				remote_play: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return sw.sm_m;
	}
	static MBF() {
		sw.sm_mbf ||= i.w0(sw.M());
		return sw.sm_mbf;
	}
	toObject(e = false) {
		return sw.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(sw.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(sw.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new sw();
		return sw.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(sw.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		sw.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(sw.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		sw.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientInviteToGame";
	}
}
export class HW extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!HW.prototype.server_types_available) {
			i.Sg(HW.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		HW.sm_m ||= {
			proto: HW,
			fields: {
				server_types_available: {
					n: 1,
					c,
					r: true,
					q: true,
				},
				server_type_for_auth_services: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return HW.sm_m;
	}
	static MBF() {
		HW.sm_mbf ||= i.w0(HW.M());
		return HW.sm_mbf;
	}
	toObject(e = false) {
		return HW.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(HW.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(HW.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new HW();
		return HW.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(HW.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		HW.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(HW.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		HW.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientServersAvailable";
	}
}
class c extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.server) {
			i.Sg(c.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				server: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				changed: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		let t = new r.BinaryReader(e);
		let n = new c();
		return c.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(c.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(c.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientServersAvailable_Server_Types_Available";
	}
}
export class rs extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!rs.prototype.id_count) {
			i.Sg(rs.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		rs.sm_m ||= {
			proto: rs,
			fields: {
				id_count: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				Ids: {
					n: 2,
					c: u,
					r: true,
					q: true,
				},
			},
		};
		return rs.sm_m;
	}
	static MBF() {
		rs.sm_mbf ||= i.w0(rs.M());
		return rs.sm_mbf;
	}
	toObject(e = false) {
		return rs.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(rs.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(rs.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new rs();
		return rs.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(rs.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		rs.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(rs.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		rs.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientAMGetPersonaNameHistory";
	}
}
class u extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.steamid) {
			i.Sg(u.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		let t = new r.BinaryReader(e);
		let n = new u();
		return u.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(u.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(u.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientAMGetPersonaNameHistory_IdInstance";
	}
}
export class sZ extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!sZ.prototype.responses) {
			i.Sg(sZ.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		sZ.sm_m ||= {
			proto: sZ,
			fields: {
				responses: {
					n: 2,
					c: d,
					r: true,
					q: true,
				},
			},
		};
		return sZ.sm_m;
	}
	static MBF() {
		sZ.sm_mbf ||= i.w0(sZ.M());
		return sZ.sm_mbf;
	}
	toObject(e = false) {
		return sZ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(sZ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(sZ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new sZ();
		return sZ.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(sZ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		sZ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(sZ.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		sZ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientAMGetPersonaNameHistoryResponse";
	}
}
class d extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.eresult) {
			i.Sg(d.M());
		}
		s.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				eresult: {
					n: 1,
					d: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				names: {
					n: 3,
					c: h,
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
		let t = new r.BinaryReader(e);
		let n = new d();
		return d.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(d.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(d.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance";
	}
}
class h extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.name_since) {
			i.Sg(h.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				name_since: {
					n: 1,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		let t = new r.BinaryReader(e);
		let n = new h();
		return h.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(h.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance";
	}
}
export class Fk extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Fk.prototype.steamid_clan) {
			i.Sg(Fk.M());
		}
		s.initialize(this, e, 0, -1, [6, 7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Fk.sm_m ||= {
			proto: Fk,
			fields: {
				steamid_clan: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				clan_account_flags: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				name_info: {
					n: 4,
					c: g,
				},
				user_counts: {
					n: 5,
					c: f,
				},
				events: {
					n: 6,
					c: _,
					r: true,
					q: true,
				},
				announcements: {
					n: 7,
					c: _,
					r: true,
					q: true,
				},
				chat_room_private: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Fk.sm_m;
	}
	static MBF() {
		Fk.sm_mbf ||= i.w0(Fk.M());
		return Fk.sm_mbf;
	}
	toObject(e = false) {
		return Fk.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Fk.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Fk.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new Fk();
		return Fk.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Fk.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		Fk.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Fk.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		Fk.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientClanState";
	}
}
class g extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.clan_name) {
			i.Sg(g.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				clan_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				sha_avatar: {
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
		let t = new r.BinaryReader(e);
		let n = new g();
		return g.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(g.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientClanState_NameInfo";
	}
}
class f extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.members) {
			i.Sg(f.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				members: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				online: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				chatting: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				in_game: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				chat_room_members: {
					n: 5,
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
		let t = new r.BinaryReader(e);
		let n = new f();
		return f.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(f.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientClanState_UserCounts";
	}
}
class _ extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.gid) {
			i.Sg(_.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				gid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				event_time: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				headline: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_id: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				just_posted: {
					n: 5,
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
		let t = new r.BinaryReader(e);
		let n = new _();
		return _.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientClanState_Event";
	}
}
