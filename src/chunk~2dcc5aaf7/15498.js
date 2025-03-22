var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
const s = n.Message;
class o extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!o.prototype.version) {
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
				version: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				preference_state: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				content_customization: {
					n: 3,
					c: l,
				},
				valve_analytics: {
					n: 4,
					c,
				},
				third_party_analytics: {
					n: 5,
					c: m,
				},
				third_party_content: {
					n: 6,
					c: u,
				},
				utm_enabled: {
					n: 7,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CAccountPrivacyCookiePreferences";
	}
}
class l extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.recentapps) {
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
				recentapps: {
					n: 1,
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
		return "CAccountPrivacyCookiePreferences_ContentCustomization";
	}
}
class c extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.product_impressions_tracking) {
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
				product_impressions_tracking: {
					n: 1,
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
		return "CAccountPrivacyCookiePreferences_ValveAnalytics";
	}
}
class m extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.google_analytics) {
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
				google_analytics: {
					n: 1,
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
		return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
	}
}
class u extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.youtube) {
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
				youtube: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				vimeo: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sketchfab: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				twitter: {
					n: 4,
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
		return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
	}
}
class d extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return d.toObject(e, this);
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
		return new d();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new d();
		return d.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAccountPrivacy_GetCookiePreferences_Request";
	}
}
class A extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.preferences) {
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
				preferences: {
					n: 1,
					c: o,
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
		return "CAccountPrivacy_GetCookiePreferences_Response";
	}
}
var p;
(function (e) {
	e.GetCookiePreferences = function (e, t) {
		return e.SendMsg(
			"AccountPrivacy.GetCookiePreferences#1",
			(0, a.I8)(d, t),
			A,
			{
				ePrivilege: 1,
			},
		);
	};
})((p ||= {}));
var g = require(/*webcrack:missing*/ "./63696.js");
var h = require(/*webcrack:missing*/ "./79769.js");
var C = require(/*webcrack:missing*/ "./52451.js");
export class _ {
	m_cm;
	m_CookiePreferences;
	m_PromiseLoading;
	m_CookiePreferencesChangedCallbacks = new h.lu();
	constructor(e) {
		this.m_cm = e;
	}
	GetCookiePreferences() {
		this.EnsureLoaded();
		return this.m_CookiePreferences;
	}
	get PreferencesChangedCallbacks() {
		return this.m_CookiePreferencesChangedCallbacks;
	}
	CheckThirdPartyCookiePreference(e, t) {
		switch (e.preference_state) {
			case 0:
			case 1:
				return true;
			case 2:
				return false;
			default:
				switch (t) {
					case "youtube":
						return e.third_party_content?.youtube;
					case "vimeo":
						return e.third_party_content?.vimeo;
					case "sketchfab":
						return e.third_party_content?.sketchfab;
					case "generic":
						return false;
				}
		}
	}
	async LoadCookiePreferences() {
		const e = a.w.Init(d);
		try {
			let t = await p.GetCookiePreferences(this.m_cm.GetServiceTransport(), e);
			if (t.GetEResult() == 1) {
				this.m_CookiePreferences = t.Body().preferences().toObject();
			}
		} catch (e) {}
		if (!this.m_CookiePreferences || !this.m_CookiePreferences.version) {
			this.m_CookiePreferences = {
				version: 1,
				preference_state: 0,
			};
		}
		this.m_CookiePreferencesChangedCallbacks.Dispatch(this.m_CookiePreferences);
		return this.m_CookiePreferences;
	}
	EnsureLoaded() {
		this.m_PromiseLoading ||= this.LoadCookiePreferences();
	}
}
export function k(e) {
	let [t, r] = g.useState(e.GetCookiePreferences());
	(0, C.hL)(e.PreferencesChangedCallbacks, r);
	return t;
}
