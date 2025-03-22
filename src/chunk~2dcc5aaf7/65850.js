var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require("./80222.js");
const o = n.Message;
export class St extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!St.prototype.request) {
			i.Sg(St.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		St.sm_m ||= {
			proto: St,
			fields: {
				request: {
					n: 1,
					c: s.eE,
				},
				include_unpublished: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return St.sm_m;
	}
	static MBF() {
		St.sm_mbf ||= i.w0(St.M());
		return St.sm_mbf;
	}
	toObject(e = false) {
		return St.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(St.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(St.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new St();
		return St.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(St.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		St.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(St.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		St.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPartnerStoreBrowse_GetItems_Request";
	}
}
class c extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.ids) {
			i.Sg(c.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				ids: {
					n: 1,
					c: s.O4,
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
		return "CPartnerStoreBrowse_GetCountryRestrictions_Request";
	}
}
class m extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.results) {
			i.Sg(m.M());
		}
		o.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				results: {
					n: 1,
					c: u,
					r: true,
					q: true,
				},
				no_info: {
					n: 2,
					c: s.O4,
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
		return "CPartnerStoreBrowse_GetCountryRestrictions_Response";
	}
}
class u extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.id) {
			i.Sg(u.M());
		}
		o.initialize(this, e, 0, -1, [3, 4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				id: {
					n: 1,
					c: s.O4,
				},
				no_restrictions: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				allowed_countries: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				restricted_countries: {
					n: 4,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
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
		return "CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions";
	}
}
export var BT;
(function (e) {
	e.GetItems = function (e, t) {
		return e.SendMsg("PartnerStoreBrowse.GetItems#1", (0, a.I8)(St, t), s.yE, {
			bConstMethod: true,
			ePrivilege: 1,
		});
	};
	e.GetCountryRestrictions = function (e, t) {
		return e.SendMsg(
			"PartnerStoreBrowse.GetCountryRestrictions#1",
			(0, a.I8)(c, t),
			m,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
})((BT ||= {}));
