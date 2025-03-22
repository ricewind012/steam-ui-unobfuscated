var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
const s = n.Message;
class o extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!o.prototype.name) {
			i.Sg(o.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		o.sm_m ||= {
			proto: o,
			fields: {
				name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return o.sm_m;
	}
	static MBF() {
		o.sm_mbf ||= i.w0(o.M());
		return o.sm_mbf;
	}
	toObject(e = false) {
		return o.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(o.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(o.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new o();
		return o.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(o.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		o.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(o.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		o.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_CreateFamilyGroup_Request";
	}
}
class l extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.family_groupid) {
			i.Sg(l.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		l.sm_m ||= {
			proto: l,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				cooldown_skip_granted: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		var e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(l.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_CreateFamilyGroup_Response";
	}
}
export class qb extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qb.prototype.family_groupid) {
			i.Sg(qb.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qb.sm_m ||= {
			proto: qb,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				send_running_apps: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return qb.sm_m;
	}
	static MBF() {
		qb.sm_mbf ||= i.w0(qb.M());
		return qb.sm_mbf;
	}
	toObject(e = false) {
		return qb.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qb.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qb.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qb();
		return qb.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qb.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		qb.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qb.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		qb.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_GetFamilyGroup_Request";
	}
}
class m extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.steamid) {
			i.Sg(m.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				role: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				time_joined: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				cooldown_seconds_remaining: {
					n: 4,
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
		var e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(m.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "FamilyGroupMember";
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
				role: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "FamilyGroupPendingInvite";
	}
}
class d extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "FamilyGroupFormerMember";
	}
}
class A extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.name) {
			i.Sg(A.M());
		}
		s.initialize(this, e, 0, -1, [2, 3, 7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				members: {
					n: 2,
					c: m,
					r: true,
					q: true,
				},
				pending_invites: {
					n: 3,
					c: u,
					r: true,
					q: true,
				},
				free_spots: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				country: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				slot_cooldown_remaining_seconds: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				former_members: {
					n: 7,
					c: d,
					r: true,
					q: true,
				},
				slot_cooldown_overrides: {
					n: 8,
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
		return "CFamilyGroups_GetFamilyGroup_Response";
	}
}
class p extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.family_groupid) {
			i.Sg(p.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				role: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				inviter_steamid: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				awaiting_2fa: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		var e = new n.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(p.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "FamilyGroupPendingInviteForUser";
	}
}
class g extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				include_family_group_response: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CFamilyGroups_GetFamilyGroupForUser_Request";
	}
}
class h extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.family_groupid) {
			i.Sg(h.M());
		}
		s.initialize(this, e, 0, -1, [5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				is_not_member_of_any_group: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				latest_time_joined: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				latest_joined_family_groupid: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				pending_group_invites: {
					n: 5,
					c: p,
					r: true,
					q: true,
				},
				role: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				cooldown_seconds_remaining: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				family_group: {
					n: 8,
					c: A,
				},
				can_undelete_last_joined_family: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CFamilyGroups_GetFamilyGroupForUser_Response";
	}
}
class C extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.family_groupid) {
			i.Sg(C.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				family_groupid: {
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
		return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
	}
}
class _ extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
	}
}
class f extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.family_groupid) {
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
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				receiver_steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				receiver_role: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "CFamilyGroups_InviteToFamilyGroup_Request";
	}
}
class b extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.invite_id) {
			i.Sg(b.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				invite_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				two_factor_method: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		var e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(b.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_InviteToFamilyGroup_Response";
	}
}
class y extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.family_groupid) {
			i.Sg(y.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				nonce: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		var e = new n.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(y.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_JoinFamilyGroup_Request";
	}
}
class S extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.two_factor_method) {
			i.Sg(S.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				two_factor_method: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				cooldown_skip_granted: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				invite_already_accepted: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= i.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(S.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_JoinFamilyGroup_Response";
	}
}
class w extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.family_groupid) {
			i.Sg(w.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid_to_remove: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CFamilyGroups_RemoveFromFamilyGroup_Request";
	}
}
class B extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return B.toObject(e, this);
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
		return new B();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_RemoveFromFamilyGroup_Response";
	}
}
class v extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.family_groupid) {
			i.Sg(v.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid_to_cancel: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CFamilyGroups_CancelFamilyGroupInvite_Request";
	}
}
class I extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return I.toObject(e, this);
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
		return new I();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_CancelFamilyGroupInvite_Response";
	}
}
class E extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.family_groupid) {
			i.Sg(E.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		var e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(E.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_DeleteFamilyGroup_Request";
	}
}
class M extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return M.toObject(e, this);
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
		return new M();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_DeleteFamilyGroup_Response";
	}
}
class T extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.family_groupid) {
			i.Sg(T.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				client_instance_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CFamilyGroups_GetUsersSharingDevice_Request";
	}
}
class R extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.users) {
			i.Sg(R.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				users: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
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
		return "CFamilyGroups_GetUsersSharingDevice_Response";
	}
}
class k extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.family_groupid) {
			i.Sg(k.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				gidshoppingcart: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				store_country_code: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				use_account_cart: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CFamilyGroups_RequestPurchase_Request";
	}
}
class D extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.gidshoppingcart) {
			i.Sg(D.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				gidshoppingcart: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				request_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CFamilyGroups_RequestPurchase_Response";
	}
}
class N extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.family_groupid) {
			i.Sg(N.M());
		}
		s.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				request_ids: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
				rt_include_completed_since: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CFamilyGroups_GetPurchaseRequests_Request";
	}
}
class F extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.requester_steamid) {
			i.Sg(F.M());
		}
		s.initialize(this, e, 0, -1, [9, 10, 11, 12], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		F.sm_m ||= {
			proto: F,
			fields: {
				requester_steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				gidshoppingcart: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				time_requested: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_responded: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				responder_steamid: {
					n: 5,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				response_action: {
					n: 6,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				is_completed: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				request_id: {
					n: 8,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				requested_packageids: {
					n: 9,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				purchased_packageids: {
					n: 10,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				requested_bundleids: {
					n: 11,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				purchased_bundleids: {
					n: 12,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
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
		return "PurchaseRequest";
	}
}
class G extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.requests) {
			i.Sg(G.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				requests: {
					n: 1,
					c: F,
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
		return "CFamilyGroups_GetPurchaseRequests_Response";
	}
}
class O extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.family_groupid) {
			i.Sg(O.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O.sm_m ||= {
			proto: O,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				action: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				request_id: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CFamilyGroups_RespondToRequestedPurchase_Request";
	}
}
class P extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return P.toObject(e, this);
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
		return new P();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new P();
		return P.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_RespondToRequestedPurchase_Response";
	}
}
class L extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!L.prototype.family_groupid) {
			i.Sg(L.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		L.sm_m ||= {
			proto: L,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				running_apps: {
					n: 2,
					c: x,
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
		return "CFamilyGroupsClient_NotifyRunningApps_Notification";
	}
}
class z extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.member_steamid) {
			i.Sg(z.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		z.sm_m ||= {
			proto: z,
			fields: {
				member_steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				owner_steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
	}
}
class x extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.appid) {
			i.Sg(x.M());
		}
		s.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		x.sm_m ||= {
			proto: x,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				playing_members: {
					n: 3,
					c: z,
					r: true,
					q: true,
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
		return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
	}
}
class U extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return U.toObject(e, this);
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
		return new U();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new U();
		return U.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroupsClient_InviteStatus_Notification";
	}
}
class W extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W.prototype.family_groupid) {
			i.Sg(W.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W.sm_m ||= {
			proto: W,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CFamilyGroupsClient_GroupChanged_Notification";
	}
}
class V extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.family_groupid) {
			i.Sg(V.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		V.sm_m ||= {
			proto: V,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CFamilyGroups_GetChangeLog_Request";
	}
}
class H extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H.prototype.changes) {
			i.Sg(H.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H.sm_m ||= {
			proto: H,
			fields: {
				changes: {
					n: 1,
					c: j,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(H.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_GetChangeLog_Response";
	}
}
class j extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!j.prototype.timestamp) {
			i.Sg(j.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		j.sm_m ||= {
			proto: j,
			fields: {
				timestamp: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				actor_steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				type: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				body: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				by_support: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		var e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(j.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_GetChangeLog_Response_Change";
	}
}
class q extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.steamid) {
			i.Sg(q.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
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
				first_played: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				latest_played: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				seconds_played: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return q.sm_m;
	}
	static MBF() {
		q.sm_mbf ||= i.w0(q.M());
		return q.sm_mbf;
	}
	toObject(e = false) {
		return q.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(q.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new q();
		return q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(q.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(q.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_PlaytimeEntry";
	}
}
class Q extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q.prototype.family_groupid) {
			i.Sg(Q.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q.sm_m ||= {
			proto: Q,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		var e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Q.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_GetPlaytimeSummary_Request";
	}
}
class Z extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z.prototype.entries) {
			i.Sg(Z.M());
		}
		s.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z.sm_m ||= {
			proto: Z,
			fields: {
				entries: {
					n: 1,
					c: q,
					r: true,
					q: true,
				},
				entries_by_owner: {
					n: 2,
					c: q,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Z.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_GetPlaytimeSummary_Response";
	}
}
class Y extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.family_groupid) {
			i.Sg(Y.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Y.sm_m ||= {
			proto: Y,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				cooldown_count: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
	}
}
class K extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
	}
}
class X extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!X.prototype.family_groupid) {
			i.Sg(X.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		X.sm_m ||= {
			proto: X,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				include_own: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_excluded: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				language: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				max_apps: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				include_non_games: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				steamid: {
					n: 8,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		var e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(X.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_GetSharedLibraryApps_Request";
	}
}
class J extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!J.prototype.apps) {
			i.Sg(J.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		J.sm_m ||= {
			proto: J,
			fields: {
				apps: {
					n: 1,
					c: $,
					r: true,
					q: true,
				},
				owner_steamid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		var e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(J.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_GetSharedLibraryApps_Response";
	}
}
class $ extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$.prototype.appid) {
			i.Sg($.M());
		}
		s.initialize(this, e, 0, -1, [2, 15], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$.sm_m ||= {
			proto: $,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				owner_steamids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
				},
				name: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				sort_as: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				capsule_filename: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				img_icon_hash: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				exclude_reason: {
					n: 10,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				rt_time_acquired: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rt_last_played: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rt_playtime: {
					n: 13,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				app_type: {
					n: 14,
					d: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				content_descriptors: {
					n: 15,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
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
		return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
	}
}
class ee extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ee.prototype.family_groupid) {
			i.Sg(ee.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ee.sm_m ||= {
			proto: ee,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				invite_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				nonce: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
	}
}
class te extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return te.toObject(e, this);
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
		return new te();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new te();
		return te.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
	}
}
class re extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.family_groupid) {
			i.Sg(re.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		re.sm_m ||= {
			proto: re,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				invite_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				nonce: {
					n: 3,
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
		return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
	}
}
class ne extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ne.toObject(e, this);
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
		return new ne();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ne();
		return ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
	}
}
class ie extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ie.prototype.family_groupid) {
			i.Sg(ie.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ie.sm_m ||= {
			proto: ie,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
	}
}
class ae extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ae.toObject(e, this);
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
		return new ae();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ae();
		return ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
	}
}
class se extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!se.prototype.family_groupid) {
			i.Sg(se.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		se.sm_m ||= {
			proto: se,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				lender_steamid: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CFamilyGroups_SetPreferredLender_Request";
	}
}
class oe extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
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
		return "CFamilyGroups_SetPreferredLender_Response";
	}
}
class le extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!le.prototype.family_groupid) {
			i.Sg(le.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		le.sm_m ||= {
			proto: le,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CFamilyGroups_GetPreferredLenders_Request";
	}
}
class ce extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ce.prototype.members) {
			i.Sg(ce.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ce.sm_m ||= {
			proto: ce,
			fields: {
				members: {
					n: 1,
					c: me,
					r: true,
					q: true,
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
		return "CFamilyGroups_GetPreferredLenders_Response";
	}
}
class me extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!me.prototype.steamid) {
			i.Sg(me.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		me.sm_m ||= {
			proto: me,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				preferred_appids: {
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
		return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
	}
}
class ue extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ue.prototype.family_groupid) {
			i.Sg(ue.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ue.sm_m ||= {
			proto: ue,
			fields: {
				family_groupid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CFamilyGroups_UndeleteFamilyGroup_Request";
	}
}
class de extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new de();
		return de.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_UndeleteFamilyGroup_Response";
	}
}
class Ae extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ae.prototype.family_groupid) {
			i.Sg(Ae.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ae.sm_m ||= {
			proto: Ae,
			fields: {
				family_groupid: {
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
		return "CFamilyGroups_ForceAcceptInvite_Request";
	}
}
class pe extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_ForceAcceptInvite_Response";
	}
}
class ge extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ge.prototype.family_groupid) {
			i.Sg(ge.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ge.sm_m ||= {
			proto: ge,
			fields: {
				family_groupid: {
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
		return ge.sm_m;
	}
	static MBF() {
		ge.sm_mbf ||= i.w0(ge.M());
		return ge.sm_mbf;
	}
	toObject(e = false) {
		return ge.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ge.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ge.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ge();
		return ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ge.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ge.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_GetInviteCheckResults_Request";
	}
}
class he extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!he.prototype.wallet_country_matches) {
			i.Sg(he.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		he.sm_m ||= {
			proto: he,
			fields: {
				wallet_country_matches: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				ip_match: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				join_restriction: {
					n: 3,
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
		return "CFamilyGroups_GetInviteCheckResults_Response";
	}
}
class Ce extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ce.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				invite_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CFamilyGroups_ClearCooldownSkip_Request";
	}
}
class _e extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFamilyGroups_ClearCooldownSkip_Response";
	}
}
export var Ex;
export var j7;
(function (e) {
	e.CreateFamilyGroup = function (e, t) {
		return e.SendMsg("FamilyGroups.CreateFamilyGroup#1", (0, a.I8)(o, t), l, {
			ePrivilege: 1,
		});
	};
	e.GetFamilyGroup = function (e, t) {
		return e.SendMsg("FamilyGroups.GetFamilyGroup#1", (0, a.I8)(qb, t), A, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
	e.GetFamilyGroupForUser = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.GetFamilyGroupForUser#1",
			(0, a.I8)(g, t),
			h,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.ModifyFamilyGroupDetails = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.ModifyFamilyGroupDetails#1",
			(0, a.I8)(C, t),
			_,
			{
				ePrivilege: 1,
			},
		);
	};
	e.InviteToFamilyGroup = function (e, t) {
		return e.SendMsg("FamilyGroups.InviteToFamilyGroup#1", (0, a.I8)(f, t), b, {
			ePrivilege: 1,
		});
	};
	e.ConfirmInviteToFamilyGroup = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.ConfirmInviteToFamilyGroup#1",
			(0, a.I8)(ee, t),
			te,
			{
				ePrivilege: 1,
			},
		);
	};
	e.ResendInvitationToFamilyGroup = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.ResendInvitationToFamilyGroup#1",
			(0, a.I8)(ie, t),
			ae,
			{
				ePrivilege: 1,
			},
		);
	};
	e.JoinFamilyGroup = function (e, t) {
		return e.SendMsg("FamilyGroups.JoinFamilyGroup#1", (0, a.I8)(y, t), S, {
			ePrivilege: 1,
		});
	};
	e.ConfirmJoinFamilyGroup = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.ConfirmJoinFamilyGroup#1",
			(0, a.I8)(re, t),
			ne,
			{
				ePrivilege: 1,
			},
		);
	};
	e.RemoveFromFamilyGroup = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.RemoveFromFamilyGroup#1",
			(0, a.I8)(w, t),
			B,
			{
				ePrivilege: 1,
			},
		);
	};
	e.CancelFamilyGroupInvite = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.CancelFamilyGroupInvite#1",
			(0, a.I8)(v, t),
			I,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetUsersSharingDevice = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.GetUsersSharingDevice#1",
			(0, a.I8)(T, t),
			R,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.DeleteFamilyGroup = function (e, t) {
		return e.SendMsg("FamilyGroups.DeleteFamilyGroup#1", (0, a.I8)(E, t), M, {
			ePrivilege: 1,
		});
	};
	e.UndeleteFamilyGroup = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.UndeleteFamilyGroup#1",
			(0, a.I8)(ue, t),
			de,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetPlaytimeSummary = function (e, t) {
		return e.SendMsg("FamilyGroups.GetPlaytimeSummary#1", (0, a.I8)(Q, t), Z, {
			ePrivilege: 1,
		});
	};
	e.RequestPurchase = function (e, t) {
		return e.SendMsg("FamilyGroups.RequestPurchase#1", (0, a.I8)(k, t), D, {
			ePrivilege: 1,
		});
	};
	e.GetPurchaseRequests = function (e, t) {
		return e.SendMsg("FamilyGroups.GetPurchaseRequests#1", (0, a.I8)(N, t), G, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
	e.RespondToRequestedPurchase = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.RespondToRequestedPurchase#1",
			(0, a.I8)(O, t),
			P,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetChangeLog = function (e, t) {
		return e.SendMsg("FamilyGroups.GetChangeLog#1", (0, a.I8)(V, t), H, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
	e.SetFamilyCooldownOverrides = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.SetFamilyCooldownOverrides#1",
			(0, a.I8)(Y, t),
			K,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetSharedLibraryApps = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.GetSharedLibraryApps#1",
			(0, a.I8)(X, t),
			J,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.SetPreferredLender = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.SetPreferredLender#1",
			(0, a.I8)(se, t),
			oe,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetPreferredLenders = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.GetPreferredLenders#1",
			(0, a.I8)(le, t),
			ce,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.ForceAcceptInvite = function (e, t) {
		return e.SendMsg("FamilyGroups.ForceAcceptInvite#1", (0, a.I8)(Ae, t), pe, {
			ePrivilege: 5,
		});
	};
	e.GetInviteCheckResults = function (e, t) {
		return e.SendMsg(
			"FamilyGroups.GetInviteCheckResults#1",
			(0, a.I8)(ge, t),
			he,
			{
				bConstMethod: true,
				ePrivilege: 5,
			},
		);
	};
	e.ClearCooldownSkip = function (e, t) {
		return e.SendMsg("FamilyGroups.ClearCooldownSkip#1", (0, a.I8)(Ce, t), _e, {
			ePrivilege: 5,
		});
	};
})((Ex ||= {}));
(function (e) {
	e.NotifyRunningAppsHandler = {
		name: "FamilyGroupsClient.NotifyRunningApps#1",
		request: L,
	};
	e.NotifyInviteStatusHandler = {
		name: "FamilyGroupsClient.NotifyInviteStatus#1",
		request: U,
	};
	e.NotifyGroupChangedHandler = {
		name: "FamilyGroupsClient.NotifyGroupChanged#1",
		request: W,
	};
})((j7 ||= {}));
