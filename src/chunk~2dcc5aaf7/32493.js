var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
const s = n.Message;
export class Ek extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ek.prototype.steamid) {
			i.Sg(Ek.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ek.sm_m ||= {
			proto: Ek,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				accept: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Ek.sm_m;
	}
	static MBF() {
		Ek.sm_mbf ||= i.w0(Ek.M());
		return Ek.sm_mbf;
	}
	toObject(e = false) {
		return Ek.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ek.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ek.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ek();
		return Ek.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ek.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ek.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ek.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ek.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClan_RespondToClanInvite_Request";
	}
}
class l extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return l.toObject(e, this);
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
		return new l();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new l();
		return l.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClan_RespondToClanInvite_Response";
	}
}
class c extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				rtime_oldest_date: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
	}
}
class m extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.snippets) {
			i.Sg(m.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				snippets: {
					n: 1,
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
		return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
	}
}
class u extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.gid) {
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
				gid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				announcement_gid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				hidden: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				published: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				rtime32_start_time: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				event_name: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				event_type: {
					n: 7,
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
		return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
	}
}
export class b1 extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b1.prototype.requests) {
			i.Sg(b1.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b1.sm_m ||= {
			proto: b1,
			fields: {
				requests: {
					n: 1,
					c: A,
					r: true,
					q: true,
				},
				cursor: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				count: {
					n: 3,
					d: 100,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return b1.sm_m;
	}
	static MBF() {
		b1.sm_mbf ||= i.w0(b1.M());
		return b1.sm_mbf;
	}
	toObject(e = false) {
		return b1.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(b1.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(b1.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new b1();
		return b1.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(b1.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		b1.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(b1.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		b1.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClan_GetPartnerEventsByBuildIDRange_Request";
	}
}
class A extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.appid) {
			i.Sg(A.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				start_build_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				end_build_id: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				branch: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
	}
}
class p extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.matches) {
			i.Sg(p.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				matches: {
					n: 1,
					c: g,
					r: true,
					q: true,
				},
				num_total_results: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				next_cursor: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CClan_GetPartnerEventsByBuildIDRange_Response";
	}
}
class g extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.appid) {
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
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				build_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				branch: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				clan_event_gid: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				clan_account_id: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
	}
}
export var oH;
(function (e) {
	e.RespondToClanInvite = function (e, t) {
		return e.SendMsg("Clan.RespondToClanInvite#1", (0, a.I8)(Ek, t), l, {
			ePrivilege: 1,
		});
	};
	e.GetDraftAndRecentPartnerEventSnippet = function (e, t) {
		return e.SendMsg(
			"Clan.GetDraftAndRecentPartnerEventSnippet#1",
			(0, a.I8)(c, t),
			m,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.GetPartnerEventsByBuildIDRange = function (e, t) {
		return e.SendMsg(
			"Clan.GetPartnerEventsByBuildIDRange#1",
			(0, a.I8)(b1, t),
			p,
			{
				bConstMethod: true,
				ePrivilege: 0,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
})((oH ||= {}));
