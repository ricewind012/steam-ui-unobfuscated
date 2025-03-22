var r = require(/*webcrack:missing*/ "./58663.js");
var i = require("./48307.js");
const s = r.Message;
export class py extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!py.prototype.bincremental) {
			i.Sg(py.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		py.sm_m ||= {
			proto: py,
			fields: {
				bincremental: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				friends: {
					n: 2,
					c: a,
					r: true,
					q: true,
				},
				max_friend_count: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				active_friend_count: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				friends_limit_hit: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return py.sm_m;
	}
	static MBF() {
		py.sm_mbf ||= i.w0(py.M());
		return py.sm_mbf;
	}
	toObject(e = false) {
		return py.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(py.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(py.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new py();
		return py.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(py.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		py.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(py.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		py.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientFriendsList";
	}
}
class a extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!a.prototype.ulfriendid) {
			i.Sg(a.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		a.sm_m ||= {
			proto: a,
			fields: {
				ulfriendid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				efriendrelationship: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return a.sm_m;
	}
	static MBF() {
		a.sm_mbf ||= i.w0(a.M());
		return a.sm_mbf;
	}
	toObject(e = false) {
		return a.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(a.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(a.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new a();
		return a.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(a.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		a.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(a.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		a.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientFriendsList_Friend";
	}
}
export class nz extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!nz.prototype.persona_state_requested) {
			i.Sg(nz.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		nz.sm_m ||= {
			proto: nz,
			fields: {
				persona_state_requested: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				friends: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
				},
			},
		};
		return nz.sm_m;
	}
	static MBF() {
		nz.sm_mbf ||= i.w0(nz.M());
		return nz.sm_mbf;
	}
	toObject(e = false) {
		return nz.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(nz.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(nz.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new nz();
		return nz.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(nz.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		nz.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(nz.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		nz.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientRequestFriendData";
	}
}
export class el extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!el.prototype.persona_state) {
			i.Sg(el.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		el.sm_m ||= {
			proto: el,
			fields: {
				persona_state: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				player_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_auto_generated_name: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				high_priority: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				persona_set_by_user: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				persona_state_flags: {
					n: 6,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				need_persona_response: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_client_idle: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return el.sm_m;
	}
	static MBF() {
		el.sm_mbf ||= i.w0(el.M());
		return el.sm_mbf;
	}
	toObject(e = false) {
		return el.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(el.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(el.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new el();
		return el.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(el.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		el.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(el.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		el.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientChangeStatus";
	}
}
export class XN extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!XN.prototype.status_flags) {
			i.Sg(XN.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		XN.sm_m ||= {
			proto: XN,
			fields: {
				status_flags: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				friends: {
					n: 2,
					c: IC,
					r: true,
					q: true,
				},
			},
		};
		return XN.sm_m;
	}
	static MBF() {
		XN.sm_mbf ||= i.w0(XN.M());
		return XN.sm_mbf;
	}
	toObject(e = false) {
		return XN.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(XN.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(XN.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new XN();
		return XN.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(XN.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		XN.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(XN.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		XN.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientPersonaState";
	}
}
export class IC extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!IC.prototype.friendid) {
			i.Sg(IC.M());
		}
		s.initialize(this, e, 0, -1, [71], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		IC.sm_m ||= {
			proto: IC,
			fields: {
				friendid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				persona_state: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				game_played_app_id: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				game_server_ip: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				game_server_port: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				persona_state_flags: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				online_session_instances: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				persona_set_by_user: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				player_name: {
					n: 15,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				query_port: {
					n: 20,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steamid_source: {
					n: 25,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				avatar_hash: {
					n: 31,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				last_logoff: {
					n: 45,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_logon: {
					n: 46,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_seen_online: {
					n: 47,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				clan_rank: {
					n: 50,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				game_name: {
					n: 55,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				gameid: {
					n: 56,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				game_data_blob: {
					n: 60,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				clan_data: {
					n: 64,
					c: d,
				},
				clan_tag: {
					n: 65,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				rich_presence: {
					n: 71,
					c: h,
					r: true,
					q: true,
				},
				broadcast_id: {
					n: 72,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				game_lobby_id: {
					n: 73,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				watching_broadcast_accountid: {
					n: 74,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				watching_broadcast_appid: {
					n: 75,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				watching_broadcast_viewers: {
					n: 76,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				watching_broadcast_title: {
					n: 77,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_community_banned: {
					n: 78,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				player_name_pending_review: {
					n: 79,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				avatar_pending_review: {
					n: 80,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				on_steam_deck: {
					n: 81,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return IC.sm_m;
	}
	static MBF() {
		IC.sm_mbf ||= i.w0(IC.M());
		return IC.sm_mbf;
	}
	toObject(e = false) {
		return IC.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(IC.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(IC.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new IC();
		return IC.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(IC.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		IC.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(IC.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		IC.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientPersonaState_Friend";
	}
}
class d extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.ogg_app_id) {
			i.Sg(d.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				ogg_app_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				chat_group_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CMsgClientPersonaState_Friend_ClanData";
	}
}
class h extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.key) {
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
				key: {
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
		return "CMsgClientPersonaState_Friend_KV";
	}
}
export class oX extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!oX.prototype.steamid) {
			i.Sg(oX.M());
		}
		s.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		oX.sm_m ||= {
			proto: oX,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				groupname: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid_friends: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
				},
			},
		};
		return oX.sm_m;
	}
	static MBF() {
		oX.sm_mbf ||= i.w0(oX.M());
		return oX.sm_mbf;
	}
	toObject(e = false) {
		return oX.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(oX.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(oX.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new oX();
		return oX.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(oX.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		oX.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(oX.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		oX.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientCreateFriendsGroup";
	}
}
export class P8 extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P8.prototype.eresult) {
			i.Sg(P8.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P8.sm_m ||= {
			proto: P8,
			fields: {
				eresult: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				groupid: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return P8.sm_m;
	}
	static MBF() {
		P8.sm_mbf ||= i.w0(P8.M());
		return P8.sm_mbf;
	}
	toObject(e = false) {
		return P8.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(P8.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(P8.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new P8();
		return P8.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(P8.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		P8.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(P8.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		P8.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientCreateFriendsGroupResponse";
	}
}
export class zw extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!zw.prototype.steamid) {
			i.Sg(zw.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		zw.sm_m ||= {
			proto: zw,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				groupid: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		let t = new r.BinaryReader(e);
		let n = new zw();
		return zw.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(zw.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		zw.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(zw.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		zw.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientDeleteFriendsGroup";
	}
}
export class Ce extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ce.prototype.eresult) {
			i.Sg(Ce.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ce.sm_m ||= {
			proto: Ce,
			fields: {
				eresult: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		let t = new r.BinaryReader(e);
		let n = new Ce();
		return Ce.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ce.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ce.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientDeleteFriendsGroupResponse";
	}
}
export class Fh extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Fh.prototype.groupid) {
			i.Sg(Fh.M());
		}
		s.initialize(this, e, 0, -1, [3, 4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Fh.sm_m ||= {
			proto: Fh,
			fields: {
				groupid: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				groupname: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid_friends_added: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
				},
				steamid_friends_removed: {
					n: 4,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
				},
			},
		};
		return Fh.sm_m;
	}
	static MBF() {
		Fh.sm_mbf ||= i.w0(Fh.M());
		return Fh.sm_mbf;
	}
	toObject(e = false) {
		return Fh.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Fh.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Fh.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new Fh();
		return Fh.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Fh.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		Fh.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Fh.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		Fh.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientManageFriendsGroup";
	}
}
export class QP extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!QP.prototype.eresult) {
			i.Sg(QP.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		QP.sm_m ||= {
			proto: QP,
			fields: {
				eresult: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return QP.sm_m;
	}
	static MBF() {
		QP.sm_mbf ||= i.w0(QP.M());
		return QP.sm_mbf;
	}
	toObject(e = false) {
		return QP.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(QP.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(QP.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new QP();
		return QP.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(QP.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		QP.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(QP.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		QP.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientManageFriendsGroupResponse";
	}
}
export class Pn extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Pn.prototype.groupid) {
			i.Sg(Pn.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Pn.sm_m ||= {
			proto: Pn,
			fields: {
				groupid: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				steamiduser: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return Pn.sm_m;
	}
	static MBF() {
		Pn.sm_mbf ||= i.w0(Pn.M());
		return Pn.sm_mbf;
	}
	toObject(e = false) {
		return Pn.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Pn.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Pn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new Pn();
		return Pn.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Pn.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		Pn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Pn.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		Pn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientAddFriendToGroup";
	}
}
export class Yi extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Yi.prototype.eresult) {
			i.Sg(Yi.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Yi.sm_m ||= {
			proto: Yi,
			fields: {
				eresult: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Yi.sm_m;
	}
	static MBF() {
		Yi.sm_mbf ||= i.w0(Yi.M());
		return Yi.sm_mbf;
	}
	toObject(e = false) {
		return Yi.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Yi.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Yi.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new Yi();
		return Yi.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Yi.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		Yi.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Yi.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		Yi.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientAddFriendToGroupResponse";
	}
}
export class Np extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Np.prototype.groupid) {
			i.Sg(Np.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Np.sm_m ||= {
			proto: Np,
			fields: {
				groupid: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				steamiduser: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return Np.sm_m;
	}
	static MBF() {
		Np.sm_mbf ||= i.w0(Np.M());
		return Np.sm_mbf;
	}
	toObject(e = false) {
		return Np.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Np.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Np.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new Np();
		return Np.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Np.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		Np.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Np.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		Np.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientRemoveFriendFromGroup";
	}
}
export class We extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!We.prototype.eresult) {
			i.Sg(We.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		We.sm_m ||= {
			proto: We,
			fields: {
				eresult: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		let t = new r.BinaryReader(e);
		let n = new We();
		return We.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(We.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		We.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(We.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		We.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientRemoveFriendFromGroupResponse";
	}
}
export class Ql extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ql.toObject(e, this);
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
		return new Ql();
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new Ql();
		return Ql.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		Ql.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		Ql.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientGetEmoticonList";
	}
}
export class q8 extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q8.prototype.emoticons) {
			i.Sg(q8.M());
		}
		s.initialize(this, e, 0, -1, [1, 2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q8.sm_m ||= {
			proto: q8,
			fields: {
				emoticons: {
					n: 1,
					c: B,
					r: true,
					q: true,
				},
				stickers: {
					n: 2,
					c: x,
					r: true,
					q: true,
				},
				effects: {
					n: 3,
					c: L,
					r: true,
					q: true,
				},
			},
		};
		return q8.sm_m;
	}
	static MBF() {
		q8.sm_mbf ||= i.w0(q8.M());
		return q8.sm_mbf;
	}
	toObject(e = false) {
		return q8.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(q8.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(q8.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new q8();
		return q8.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(q8.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		q8.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(q8.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		q8.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientEmoticonList";
	}
}
class B extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.name) {
			i.Sg(B.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
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
		let t = new r.BinaryReader(e);
		let n = new B();
		return B.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(B.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientEmoticonList_Emoticon";
	}
}
class x extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.name) {
			i.Sg(x.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		x.sm_m ||= {
			proto: x,
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
				time_received: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_last_used: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				use_count: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		let t = new r.BinaryReader(e);
		let n = new x();
		return x.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(x.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(x.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientEmoticonList_Sticker";
	}
}
class L extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!L.prototype.name) {
			i.Sg(L.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		L.sm_m ||= {
			proto: L,
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
				time_received: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				infinite_use: {
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
		let t = new r.BinaryReader(e);
		let n = new L();
		return L.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(L.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(L.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientEmoticonList_Effect";
	}
}
