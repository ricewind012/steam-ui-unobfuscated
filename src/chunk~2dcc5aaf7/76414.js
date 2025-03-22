var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./12176.js");
var a = require(/*webcrack:missing*/ "./58663.js");
var s = require(/*webcrack:missing*/ "./48307.js");
const o = a.Message;
class _l extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_l.prototype.country_code) {
			s.Sg(_l.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_l.sm_m ||= {
			proto: _l,
			fields: {
				country_code: {
					n: 1,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
			},
		};
		return _l.sm_m;
	}
	static MBF() {
		_l.sm_mbf ||= s.w0(_l.M());
		return _l.sm_mbf;
	}
	toObject(e = false) {
		return _l.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(_l.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(_l.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new _l();
		return _l.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(_l.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		_l.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(_l.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		_l.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
	}
}
class c extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.promotions) {
			s.Sg(c.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				promotions: {
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
		c.sm_mbf ||= s.w0(c.M());
		return c.sm_mbf;
	}
	toObject(e = false) {
		return c.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(c.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(c.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new c();
		return c.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(c.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(c.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
	}
}
class m extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.promotionid) {
			s.Sg(m.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				promotionid: {
					n: 1,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
				promotion_description: {
					n: 2,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
				minimum_cart_amount: {
					n: 3,
					br: s.qM.readInt64String,
					bw: s.gp.writeInt64String,
				},
				minimum_cart_amount_for_display: {
					n: 4,
					br: s.qM.readInt64String,
					bw: s.gp.writeInt64String,
				},
				discount_amount: {
					n: 5,
					br: s.qM.readInt64String,
					bw: s.gp.writeInt64String,
				},
				currency_code: {
					n: 6,
					br: s.qM.readInt32,
					bw: s.gp.writeInt32,
				},
				available_use_count: {
					n: 7,
					br: s.qM.readInt32,
					bw: s.gp.writeInt32,
				},
				promotional_discount_type: {
					n: 8,
					br: s.qM.readInt32,
					bw: s.gp.writeInt32,
				},
				loyalty_reward_id: {
					n: 9,
					br: s.qM.readInt32,
					bw: s.gp.writeInt32,
				},
				localized_name_token: {
					n: 10,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
				max_use_count: {
					n: 11,
					br: s.qM.readInt32,
					bw: s.gp.writeInt32,
				},
			},
		};
		return m.sm_m;
	}
	static MBF() {
		m.sm_mbf ||= s.w0(m.M());
		return m.sm_mbf;
	}
	toObject(e = false) {
		return m.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(m.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(m.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new m();
		return m.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(m.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(m.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
	}
}
class u extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.has_wallet) {
			s.Sg(u.M());
		}
		o.initialize(this, e, 0, -1, [13], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				has_wallet: {
					n: 1,
					br: s.qM.readBool,
					bw: s.gp.writeBool,
				},
				user_country_code: {
					n: 2,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
				wallet_country_code: {
					n: 3,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
				wallet_state: {
					n: 4,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
				balance: {
					n: 5,
					br: s.qM.readInt64String,
					bw: s.gp.writeInt64String,
				},
				delayed_balance: {
					n: 6,
					br: s.qM.readInt64String,
					bw: s.gp.writeInt64String,
				},
				currency_code: {
					n: 7,
					br: s.qM.readInt32,
					bw: s.gp.writeInt32,
				},
				time_most_recent_txn: {
					n: 8,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
				most_recent_txnid: {
					n: 9,
					br: s.qM.readUint64String,
					bw: s.gp.writeUint64String,
				},
				balance_in_usd: {
					n: 10,
					br: s.qM.readInt64String,
					bw: s.gp.writeInt64String,
				},
				delayed_balance_in_usd: {
					n: 11,
					br: s.qM.readInt64String,
					bw: s.gp.writeInt64String,
				},
				has_wallet_in_other_regions: {
					n: 12,
					br: s.qM.readBool,
					bw: s.gp.writeBool,
				},
				other_regions: {
					n: 13,
					r: true,
					q: true,
					br: s.qM.readInt32,
					pbr: s.qM.readPackedInt32,
					bw: s.gp.writeRepeatedInt32,
				},
				formatted_balance: {
					n: 14,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
				formatted_delayed_balance: {
					n: 15,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
				delayed_balance_available_min_time: {
					n: 16,
					br: s.qM.readInt32,
					bw: s.gp.writeInt32,
				},
				delayed_balance_available_max_time: {
					n: 17,
					br: s.qM.readInt32,
					bw: s.gp.writeInt32,
				},
				delayed_balance_newest_source: {
					n: 18,
					br: s.qM.readInt32,
					bw: s.gp.writeInt32,
				},
			},
		};
		return u.sm_m;
	}
	static MBF() {
		u.sm_mbf ||= s.w0(u.M());
		return u.sm_mbf;
	}
	toObject(e = false) {
		return u.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(u.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(u.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new u();
		return u.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(u.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(u.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_GetWalletDetails_Response";
	}
}
class d extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.include_balance_in_usd) {
			s.Sg(d.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				include_balance_in_usd: {
					n: 1,
					br: s.qM.readBool,
					bw: s.gp.writeBool,
				},
				wallet_region: {
					n: 2,
					d: 1,
					br: s.qM.readInt32,
					bw: s.gp.writeInt32,
				},
				include_formatted_balance: {
					n: 3,
					br: s.qM.readBool,
					bw: s.gp.writeBool,
				},
			},
		};
		return d.sm_m;
	}
	static MBF() {
		d.sm_mbf ||= s.w0(d.M());
		return d.sm_mbf;
	}
	toObject(e = false) {
		return d.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(d.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(d.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new d();
		return d.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(d.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(d.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_GetClientWalletDetails_Request";
	}
}
class A extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return A.toObject(e, this);
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
		return new A();
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new A();
		return A.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_GetAccountLinkStatus_Request";
	}
}
class p extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.pwid) {
			s.Sg(p.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				pwid: {
					n: 1,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
				identity_verification: {
					n: 2,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
				performed_age_verification: {
					n: 3,
					br: s.qM.readBool,
					bw: s.gp.writeBool,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= s.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(p.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(p.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(p.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_GetAccountLinkStatus_Response";
	}
}
class g extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.appid) {
			s.Sg(g.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				appid: {
					n: 1,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= s.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(g.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_CancelLicenseForApp_Request";
	}
}
class h extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		let t = new a.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_CancelLicenseForApp_Response";
	}
}
class C extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.steamid) {
			s.Sg(C.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				steamid: {
					n: 1,
					br: s.qM.readFixed64String,
					bw: s.gp.writeFixed64String,
				},
			},
		};
		return C.sm_m;
	}
	static MBF() {
		C.sm_mbf ||= s.w0(C.M());
		return C.sm_mbf;
	}
	toObject(e = false) {
		return C.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(C.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(C.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(C.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(C.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_GetUserCountry_Request";
	}
}
class _ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.country) {
			s.Sg(_.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				country: {
					n: 1,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= s.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(_.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_GetUserCountry_Response";
	}
}
class f extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.invite_limit) {
			s.Sg(f.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				invite_limit: {
					n: 1,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
				invite_duration: {
					n: 2,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
				invite_note: {
					n: 3,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
			},
		};
		return f.sm_m;
	}
	static MBF() {
		f.sm_mbf ||= s.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(f.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(f.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_CreateFriendInviteToken_Request";
	}
}
class b extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.invite_token) {
			s.Sg(b.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				invite_token: {
					n: 1,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
				invite_limit: {
					n: 2,
					br: s.qM.readUint64String,
					bw: s.gp.writeUint64String,
				},
				invite_duration: {
					n: 3,
					br: s.qM.readUint64String,
					bw: s.gp.writeUint64String,
				},
				time_created: {
					n: 4,
					br: s.qM.readFixed32,
					bw: s.gp.writeFixed32,
				},
				valid: {
					n: 5,
					br: s.qM.readBool,
					bw: s.gp.writeBool,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= s.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(b.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_CreateFriendInviteToken_Response";
	}
}
class _y extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return _y.toObject(e, this);
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
		return new _y();
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new _y();
		return _y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		_y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		_y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_GetFriendInviteTokens_Request";
	}
}
class S extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.tokens) {
			s.Sg(S.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				tokens: {
					n: 1,
					c: b,
					r: true,
					q: true,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= s.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(S.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_GetFriendInviteTokens_Response";
	}
}
class w extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.steamid) {
			s.Sg(w.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				steamid: {
					n: 1,
					br: s.qM.readFixed64String,
					bw: s.gp.writeFixed64String,
				},
				invite_token: {
					n: 2,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
			},
		};
		return w.sm_m;
	}
	static MBF() {
		w.sm_mbf ||= s.w0(w.M());
		return w.sm_mbf;
	}
	toObject(e = false) {
		return w.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(w.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(w.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(w.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(w.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_ViewFriendInviteToken_Request";
	}
}
class B extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.valid) {
			s.Sg(B.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				valid: {
					n: 1,
					br: s.qM.readBool,
					bw: s.gp.writeBool,
				},
				steamid: {
					n: 2,
					br: s.qM.readUint64String,
					bw: s.gp.writeUint64String,
				},
				invite_duration: {
					n: 3,
					br: s.qM.readUint64String,
					bw: s.gp.writeUint64String,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= s.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(B.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(B.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_ViewFriendInviteToken_Response";
	}
}
class v extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.steamid) {
			s.Sg(v.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				steamid: {
					n: 1,
					br: s.qM.readFixed64String,
					bw: s.gp.writeFixed64String,
				},
				invite_token: {
					n: 2,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
			},
		};
		return v.sm_m;
	}
	static MBF() {
		v.sm_mbf ||= s.w0(v.M());
		return v.sm_mbf;
	}
	toObject(e = false) {
		return v.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(v.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(v.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(v.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(v.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_RedeemFriendInviteToken_Request";
	}
}
class I extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		let t = new a.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_RedeemFriendInviteToken_Response";
	}
}
class E extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.invite_token) {
			s.Sg(E.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				invite_token: {
					n: 1,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
			},
		};
		return E.sm_m;
	}
	static MBF() {
		E.sm_mbf ||= s.w0(E.M());
		return E.sm_mbf;
	}
	toObject(e = false) {
		return E.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(E.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(E.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new E();
		return E.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(E.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(E.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_RevokeFriendInviteToken_Request";
	}
}
class M extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
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
		let t = new a.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_RevokeFriendInviteToken_Response";
	}
}
class T extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.compat_tool) {
			s.Sg(T.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				compat_tool: {
					n: 1,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
			},
		};
		return T.sm_m;
	}
	static MBF() {
		T.sm_mbf ||= s.w0(T.M());
		return T.sm_mbf;
	}
	toObject(e = false) {
		return T.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(T.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(T.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new T();
		return T.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(T.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(T.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_RegisterCompatTool_Request";
	}
}
class R extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return R.toObject(e, this);
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
		return new R();
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new R();
		return R.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserAccount_RegisterCompatTool_Response";
	}
}
class k extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.steamid) {
			s.Sg(k.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				steamid: {
					n: 1,
					br: s.qM.readFixed64String,
					bw: s.gp.writeFixed64String,
				},
				client_token: {
					n: 2,
					br: s.qM.readBytes,
					bw: s.gp.writeBytes,
				},
				expiry: {
					n: 3,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
				deviceid: {
					n: 4,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
			},
		};
		return k.sm_m;
	}
	static MBF() {
		k.sm_mbf ||= s.w0(k.M());
		return k.sm_mbf;
	}
	toObject(e = false) {
		return k.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(k.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(k.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new k();
		return k.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(k.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(k.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEmbeddedClient_Token";
	}
}
class D extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.result) {
			s.Sg(D.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				result: {
					n: 1,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
				token: {
					n: 2,
					c: k,
				},
			},
		};
		return D.sm_m;
	}
	static MBF() {
		D.sm_mbf ||= s.w0(D.M());
		return D.sm_mbf;
	}
	toObject(e = false) {
		return D.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(D.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(D.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(D.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(D.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEmbeddedClient_AuthorizeDevice_Response";
	}
}
class N extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.steamid) {
			s.Sg(N.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				steamid: {
					n: 1,
					br: s.qM.readFixed64String,
					bw: s.gp.writeFixed64String,
				},
				appid: {
					n: 2,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
				device_info: {
					n: 3,
					br: s.qM.readString,
					bw: s.gp.writeString,
				},
				deviceid: {
					n: 4,
					br: s.qM.readUint32,
					bw: s.gp.writeUint32,
				},
			},
		};
		return N.sm_m;
	}
	static MBF() {
		N.sm_mbf ||= s.w0(N.M());
		return N.sm_mbf;
	}
	toObject(e = false) {
		return N.toObject(e, this);
	}
	static toObject(e, t) {
		return s.BT(N.M(), e, t);
	}
	static fromObject(e) {
		return s.Uq(N.M(), e);
	}
	static deserializeBinary(e) {
		let t = new a.BinaryReader(e);
		let r = new N();
		return N.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return s.zj(N.MBF(), e, t);
	}
	serializeBinary() {
		var e = new a.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		s.i0(N.M(), e, t);
	}
	serializeBase64String() {
		var e = new a.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CEmbeddedClient_AuthorizeCurrentDevice_Request";
	}
}
var F;
var G;
(function (e) {
	e.GetAvailableValveDiscountPromotions = function (e, t) {
		return e.SendMsg(
			"UserAccount.GetAvailableValveDiscountPromotions#1",
			(0, i.I8)(_l, t),
			c,
			{
				bConstMethod: true,
				ePrivilege: 2,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
	e.GetClientWalletDetails = function (e, t) {
		return e.SendMsg(
			"UserAccount.GetClientWalletDetails#1",
			(0, i.I8)(d, t),
			u,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetAccountLinkStatus = function (e, t) {
		return e.SendMsg("UserAccount.GetAccountLinkStatus#1", (0, i.I8)(A, t), p, {
			ePrivilege: 1,
		});
	};
	e.CancelLicenseForApp = function (e, t) {
		return e.SendMsg("UserAccount.CancelLicenseForApp#1", (0, i.I8)(g, t), h, {
			ePrivilege: 1,
		});
	};
	e.GetUserCountry = function (e, t) {
		return e.SendMsg("UserAccount.GetUserCountry#1", (0, i.I8)(C, t), _, {
			ePrivilege: 1,
		});
	};
	e.CreateFriendInviteToken = function (e, t) {
		return e.SendMsg(
			"UserAccount.CreateFriendInviteToken#1",
			(0, i.I8)(f, t),
			b,
			{
				ePrivilege: 3,
			},
		);
	};
	e.GetFriendInviteTokens = function (e, t) {
		return e.SendMsg(
			"UserAccount.GetFriendInviteTokens#1",
			(0, i.I8)(_y, t),
			S,
			{
				ePrivilege: 1,
			},
		);
	};
	e.ViewFriendInviteToken = function (e, t) {
		return e.SendMsg(
			"UserAccount.ViewFriendInviteToken#1",
			(0, i.I8)(w, t),
			B,
			{
				ePrivilege: 1,
			},
		);
	};
	e.RedeemFriendInviteToken = function (e, t) {
		return e.SendMsg(
			"UserAccount.RedeemFriendInviteToken#1",
			(0, i.I8)(v, t),
			I,
			{
				ePrivilege: 1,
			},
		);
	};
	e.RevokeFriendInviteToken = function (e, t) {
		return e.SendMsg(
			"UserAccount.RevokeFriendInviteToken#1",
			(0, i.I8)(E, t),
			M,
			{
				ePrivilege: 1,
			},
		);
	};
	e.RegisterCompatTool = function (e, t) {
		return e.SendMsg("UserAccount.RegisterCompatTool#1", (0, i.I8)(T, t), R, {
			ePrivilege: 1,
		});
	};
})((F ||= {}));
(function (e) {
	e.AuthorizeCurrentDevice = function (e, t) {
		return e.SendMsg(
			"EmbeddedClient.AuthorizeCurrentDevice#1",
			(0, i.I8)(N, t),
			D,
			{
				ePrivilege: 1,
			},
		);
	};
})((G ||= {}));
var O;
var P = require("./78057.js");
var L = require("./96593.js");
var z = require("./96000.js");
var x = require(/*webcrack:missing*/ "./63696.js");
var U = require(/*webcrack:missing*/ "./49519.js");
var W = require(/*webcrack:missing*/ "./11131.js");
var V = require("./64608.js");
var H = require("./10606.js");
var j = require("./78110.js");
var q = require(/*webcrack:missing*/ "./26853.js");
var Q = require(/*webcrack:missing*/ "./46108.js");
var Z = require(/*webcrack:missing*/ "./52451.js");
var Y = require("./36320.js");
var K = Y;
export function y(e) {
	const t = (0, U.W6)();
	return x.useCallback(() => {
		if (e) {
			t.replace(t.location.pathname, {
				...t.location.state,
				RemoveFreeAppTarget: e,
			});
		}
	}, [t, e]);
}
export function l() {
	const e = (0, U.W6)();
	const [t, r] = x.useState(e.location.state?.RemoveFreeAppTarget);
	x.useEffect(() => e.listen((e) => r(e.state?.RemoveFreeAppTarget)), [e]);
	const n = x.useCallback(() => {
		e.replace(e.location.pathname, {
			...e.location.state,
			RemoveFreeAppTarget: undefined,
		});
	}, [e]);
	const i = (0, P.T)(t);
	if (t) {
		return x.createElement(
			j.w,
			{
				strName: `RemoveFreeApp_${t}`,
				strTitle: $.Title(),
				onlyPopoutIfNeeded: true,
				popupWidth: 680,
				popupHeight: 320,
			},
			x.createElement($, {
				details: i,
				closeModal: n,
			}),
		);
	}
}
(function (e) {
	e[(e.Verification = 0)] = "Verification";
	e[(e.Removing = 1)] = "Removing";
	e[(e.Error = 2)] = "Error";
})((O ||= {}));
class $ extends x.Component {
	static contextType = W.gs;
	state = {
		eStep: O.Verification,
	};
	static Title() {
		return (0, Q.we)("#RemoveFreeApp_Title");
	}
	async OnRemoveLicense() {
		if (this.state.eStep != O.Verification) {
			return;
		}
		let e = this.props.details;
		const t = L.tw.GetAppOverviewByAppID(e.unAppID);
		this.setState({
			eStep: O.Removing,
		});
		if (
			(await (async function (e) {
				let t = i.w.Init(g);
				t.Body().set_appid(e);
				return (
					await F.CancelLicenseForApp(
						P.H.CMInterface().GetServiceTransport(),
						t,
					)
				).GetEResult();
			})(e.unAppID)) == 1
		) {
			for (const r of z.md.userCollections) {
				if (r.bAllowsDragAndDrop && r.apps.has(e.unAppID)) {
					r.AsDragDropCollection().RemoveApps([t]);
				}
			}
			SteamClient.Installs.OpenUninstallWizard([e.unAppID], true);
			this.props.closeModal();
		} else {
			this.setState({
				eStep: O.Error,
			});
		}
	}
	OnCancel() {
		if (this.state.eStep != O.Removing && this.props.closeModal) {
			this.props.closeModal();
		}
	}
	render() {
		let e = this.OnRemoveLicense;
		let t = this.OnCancel;
		let r = this.state.eStep;
		let n = this.props.details;
		let i = n.strDisplayName;
		return x.createElement(
			H.eV,
			{
				onOK: this.OnRemoveLicense,
				onCancel: t,
			},
			x.createElement(V.Y9, null, $.Title()),
			x.createElement(
				V.nB,
				null,
				r == O.Verification &&
					x.createElement(ee, {
						details: n,
						onOK: e,
						onCancel: t,
					}),
				r == O.Removing &&
					x.createElement(te, {
						appName: i,
						onOK: e,
						onCancel: t,
					}),
				r == O.Error &&
					x.createElement(re, {
						appName: i,
						onOK: e,
						onCancel: t,
					}),
			),
		);
	}
}
function ee(e) {
	let t = e.details;
	let r = t.strDisplayName;
	let n = "";
	n = t.unMasterSubAppID
		? (0, Q.we)(
				"#RemoveFreeApp_Description_MasterSub",
				r,
				t.strMasterSubAppName,
			)
		: (0, Q.we)("#RemoveFreeApp_Description", r);
	return x.createElement(
		x.Fragment,
		null,
		x.createElement(
			V.a3,
			null,
			x.createElement("div", null, n),
			x.createElement(
				"div",
				{
					className: K.Question,
				},
				(0, Q.we)("#RemoveFreeApp_Question", r),
			),
		),
		x.createElement(
			V.wi,
			null,
			x.createElement(V.CB, {
				onOK: e.onOK,
				strOKText: (0, Q.we)("#RemoveFreeApp_Remove"),
				onCancel: e.onCancel,
			}),
		),
	);
}
function te(e) {
	return x.createElement(
		x.Fragment,
		null,
		x.createElement(
			V.a3,
			null,
			x.createElement(
				"div",
				{
					className: K.RemovingText,
				},
				(0, Q.we)("#RemoveFreeApp_Removing", e.appName),
			),
		),
		x.createElement(
			V.wi,
			null,
			x.createElement(q.t, {
				size: "medium",
				position: "center",
			}),
		),
	);
}
function re(e) {
	return x.createElement(
		x.Fragment,
		null,
		x.createElement(
			V.a3,
			null,
			x.createElement(
				"div",
				null,
				(0, Q.we)("#RemoveFreeApp_Error", e.appName),
			),
		),
		x.createElement(
			V.wi,
			null,
			x.createElement(
				V.jn,
				{
					onClick: e.onCancel,
				},
				(0, Q.we)("#Button_Close"),
			),
		),
	);
}
(0, n.Cg)([Z.oI], $.prototype, "OnRemoveLicense", null);
(0, n.Cg)([Z.oI], $.prototype, "OnCancel", null);
