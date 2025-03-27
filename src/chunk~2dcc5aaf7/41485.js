import n from "./58663.js";
import i from "./48307.js";
const n_Message = n.Message;
class s extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!s.prototype.key) {
			i.Sg(s.M());
		}
		n_Message.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		s.sm_m ||= {
			proto: s,
			fields: {
				key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				display_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				modes: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
			},
		};
		return s.sm_m;
	}
	static MBF() {
		s.sm_mbf ||= i.w0(s.M());
		return s.sm_mbf;
	}
	toObject(e = false) {
		return s.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(s.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(s.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new s();
		return s.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(s.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		s.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(s.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		s.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgGameAction";
	}
}
class o extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!o.prototype.key) {
			i.Sg(o.M());
		}
		n_Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		o.sm_m ||= {
			proto: o,
			fields: {
				key: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				actions: {
					n: 2,
					c: s,
					r: true,
					q: true,
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
		const e = new n.BinaryWriter();
		o.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(o.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		o.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgGameActionBindingType";
	}
}
class l extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.key) {
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
				key: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				int_value: {
					n: 2,
					br: i.qM.readSint32,
					bw: i.gp.writeSint32,
				},
				int_min: {
					n: 3,
					br: i.qM.readSint32,
					bw: i.gp.writeSint32,
				},
				int_max: {
					n: 4,
					br: i.qM.readSint32,
					bw: i.gp.writeSint32,
				},
				int_default: {
					n: 5,
					br: i.qM.readSint32,
					bw: i.gp.writeSint32,
				},
				parentset_setting: {
					n: 6,
					c: l,
				},
				long_value: {
					n: 7,
					br: i.qM.readSint64String,
					bw: i.gp.writeSint64String,
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
		return "CMsgControllerSetting";
	}
}
class c extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.key) {
			i.Sg(c.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				key: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "CMsgControllerInputKeyBinding";
	}
}
class m extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.button) {
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
				button: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "CMsgControllerInputMouseButtonBinding";
	}
}
class u extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.button) {
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
				button: {
					n: 1,
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
		return "CMsgControllerInputGamepadButtonBinding";
	}
}
class d extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.button) {
			i.Sg(d.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				button: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "CMsgControllerInputMouseWheelBinding";
	}
}
class A extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.source) {
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
				source: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "CMsgControllerInputModeShiftBinding";
	}
}
class p extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.action_set_key) {
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
				action_set_key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_key: {
					n: 2,
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
		return "CMsgControllerInputGameActionBinding";
	}
}
class g extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.x) {
			i.Sg(g.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				x: {
					n: 1,
					br: i.qM.readSint32,
					bw: i.gp.writeSint32,
				},
				y: {
					n: 2,
					br: i.qM.readSint32,
					bw: i.gp.writeSint32,
				},
				restore: {
					n: 3,
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
		return "CMsgControllerInputControllerActionMouseBinding";
	}
}
class h extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.camera_dip_angle) {
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
				camera_dip_angle: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				delay_duration: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				camera_horizon_reset_angle: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CMsgControllerInputControllerActionCameraHorizonReset";
	}
}
class C extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.spin_by_amount) {
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
				spin_by_amount: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				spin_duration: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CMsgControllerInputControllerActionDotsPer360CalibrationSpin";
	}
}
class _ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.source_of_direction) {
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
				source_of_direction: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				turn_duration: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				use_last_direction_if_deadzoned: {
					n: 3,
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
		return "CMsgControllerInputControllerActionTurnToFaceDirection";
	}
}
class f extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.preset_type) {
			i.Sg(f.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				preset_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				action_set_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				display: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				beep: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CMsgControllerInputControllerActionGameActionSetBinding";
	}
}
class b extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.setting) {
			i.Sg(b.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				setting: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				brightness: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				saturation: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				color_r: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				color_g: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				color_b: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CMsgControllerInputControllerActionLEDColorBinding";
	}
}
class y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.player_number) {
			i.Sg(y.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				player_number: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CMsgControllerInputControllerActionChangePlayerNumberBinding";
	}
}
class S extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.action) {
			i.Sg(S.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				action: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mouse: {
					n: 2,
					c: g,
				},
				camera_horizon_reset: {
					n: 3,
					c: h,
				},
				dots_per_360_calibration_spin: {
					n: 4,
					c: C,
				},
				turn_to_face_direction: {
					n: 5,
					c: _,
				},
				action_set: {
					n: 6,
					c: f,
				},
				led_color: {
					n: 7,
					c: b,
				},
				change_player_number: {
					n: 8,
					c: y,
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
		const e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(S.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgControllerInputControllerActionBinding";
	}
}
class w extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.type) {
			i.Sg(w.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				type: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				key_binding_data: {
					n: 2,
					c: v,
				},
				keyboard_key: {
					n: 3,
					c,
				},
				mouse_button: {
					n: 4,
					c: m,
				},
				gamepad_button: {
					n: 5,
					c: u,
				},
				mouse_wheel: {
					n: 6,
					c: d,
				},
				mode_shift: {
					n: 7,
					c: A,
				},
				game_action: {
					n: 8,
					c: p,
				},
				controller_action: {
					n: 9,
					c: S,
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
		return "CMsgControllerInputBinding";
	}
}
class B extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.icon_filename) {
			i.Sg(B.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				icon_filename: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon_url: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				color_foreground: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				color_background: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CMsgControllerInputBinding_IconBindingData";
	}
}
class v extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.keys_bound_utf8) {
			i.Sg(v.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				keys_bound_utf8: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				friendly_name_utf8: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon_data: {
					n: 3,
					c: B,
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
		const e = new n.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(v.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgControllerInputBinding_KeyBindingData";
	}
}
class I extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.activation) {
			i.Sg(I.M());
		}
		n_Message.initialize(this, e, 0, -1, [2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				activation: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				bindings: {
					n: 2,
					c: w,
					r: true,
					q: true,
				},
				settings: {
					n: 3,
					c: l,
					r: true,
					q: true,
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
		return "CMsgControllerInputActivator";
	}
}
class E extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.key) {
			i.Sg(E.M());
		}
		n_Message.initialize(this, e, 0, -1, [2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				key: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				activators: {
					n: 2,
					c: I,
					r: true,
					q: true,
				},
				disabled_activators: {
					n: 3,
					c: I,
					r: true,
					q: true,
				},
				inherited_from_parentset: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CMsgControllerInput";
	}
}
class M extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.mode) {
			i.Sg(M.M());
		}
		n_Message.initialize(this, e, 0, -1, [3, 4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				mode: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				game_action: {
					n: 2,
					c: p,
				},
				inputs: {
					n: 3,
					c: E,
					r: true,
					q: true,
				},
				settings: {
					n: 4,
					c: l,
					r: true,
					q: true,
				},
				modeid: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				mode_shift: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				mode_shift_source_group: {
					n: 7,
					c: M,
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
		return "CMsgControllerSourceGroup";
	}
}
class T extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.key) {
			i.Sg(T.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				key: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				active_group: {
					n: 2,
					c: M,
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
		const e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(T.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgControllerSources";
	}
}
class R extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.key) {
			i.Sg(R.M());
		}
		n_Message.initialize(this, e, 0, -1, [4, 5, 6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				display_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				legacy_set: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				layers: {
					n: 4,
					c: R,
					r: true,
					q: true,
				},
				action_binding_types: {
					n: 5,
					c: o,
					r: true,
					q: true,
				},
				source_bindings: {
					n: 6,
					c: T,
					r: true,
					q: true,
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
		return "CMsgGameActionSet";
	}
}
class k extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.key_index) {
			i.Sg(k.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				key_index: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				bound: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				x: {
					n: 3,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				y: {
					n: 4,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				width: {
					n: 5,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				height: {
					n: 6,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				description: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				label: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				glyph_path: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon_filename: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				color_foreground: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				color_background: {
					n: 12,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				quadrants: {
					n: 13,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				binding_type: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CVirtualMenuKey";
	}
}
class D extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.source) {
			i.Sg(D.M());
		}
		n_Message.initialize(this, e, 0, -1, [9], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				source: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				x_pos: {
					n: 2,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				y_pos: {
					n: 3,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				opacity: {
					n: 4,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				scale: {
					n: 5,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				show_labels: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				menu_style: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				force_on: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				keys: {
					n: 9,
					c: k,
					r: true,
					q: true,
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
		return "CMsgControllerVirtualMenuPreviewInfo";
	}
}
class N extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.mode) {
			i.Sg(N.M());
		}
		n_Message.initialize(this, e, 0, -1, [4, 5, 11], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				mode: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				modeid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				description: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				inputs: {
					n: 4,
					c: E,
					r: true,
					q: true,
				},
				settings: {
					n: 5,
					c: l,
					r: true,
					q: true,
				},
				friendlyname: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				source: {
					n: 7,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				virtual_menu_info: {
					n: 8,
					c: D,
				},
				mode_shift: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				reference_modeid: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				mode_shift_buttons: {
					n: 11,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
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
		return "CMsgControllerMode";
	}
}
export class u9 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u9.prototype.cursor_visible_action_set_key) {
			i.Sg(u9.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u9.sm_m ||= {
			proto: u9,
			fields: {
				cursor_visible_action_set_key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				cursor_hidden_action_set_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return u9.sm_m;
	}
	static MBF() {
		u9.sm_mbf ||= i.w0(u9.M());
		return u9.sm_mbf;
	}
	toObject(e = false) {
		return u9.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(u9.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(u9.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new u9();
		return u9.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(u9.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		u9.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(u9.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		u9.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgControllerActionSetMiscSettings";
	}
}
export class ln extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ln.prototype.binding_handle) {
			i.Sg(ln.M());
		}
		n_Message.initialize(this, e, 0, -1, [6, 7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ln.sm_m ||= {
			proto: ln,
			fields: {
				binding_handle: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				display_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				description: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				creator: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				controller_type: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				sets: {
					n: 6,
					c: R,
					r: true,
					q: true,
				},
				modes: {
					n: 7,
					c: N,
					r: true,
					q: true,
				},
				error_msg: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_block_path: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				misc_action_set_settings: {
					n: 10,
					c: u9,
				},
				url: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return ln.sm_m;
	}
	static MBF() {
		ln.sm_mbf ||= i.w0(ln.M());
		return ln.sm_mbf;
	}
	toObject(e = false) {
		return ln.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ln.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ln.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ln();
		return ln.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ln.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ln.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ln.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ln.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgControllerConfiguration";
	}
}
export class DL extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!DL.prototype.action_set_key) {
			i.Sg(DL.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		DL.sm_m ||= {
			proto: DL,
			fields: {
				action_set_key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_set_layer_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				new_display_name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_set_to_copy_key: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return DL.sm_m;
	}
	static MBF() {
		DL.sm_mbf ||= i.w0(DL.M());
		return DL.sm_mbf;
	}
	toObject(e = false) {
		return DL.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(DL.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(DL.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new DL();
		return DL.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(DL.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		DL.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(DL.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		DL.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSetControllerActionSet";
	}
}
export class Rh extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Rh.prototype.action_set_key) {
			i.Sg(Rh.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Rh.sm_m ||= {
			proto: Rh,
			fields: {
				action_set_key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_set_layer_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				source_binding_key: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mode_shift: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				new_mode: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				new_game_action: {
					n: 6,
					c: p,
				},
				new_setting: {
					n: 7,
					c: l,
				},
				new_name: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				modeid: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				change_mode: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				new_virtual_menu: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_virtual_menu_support: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Rh.sm_m;
	}
	static MBF() {
		Rh.sm_mbf ||= i.w0(Rh.M());
		return Rh.sm_mbf;
	}
	toObject(e = false) {
		return Rh.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Rh.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Rh.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Rh();
		return Rh.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Rh.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Rh.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Rh.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Rh.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSetControllerSourceMode";
	}
}
export class $k extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$k.prototype.action_set_key_a) {
			i.Sg($k.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$k.sm_m ||= {
			proto: $k,
			fields: {
				action_set_key_a: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_set_layer_key_a: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				source_a: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				action_set_key_b: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_set_layer_key_b: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				source_b: {
					n: 6,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return $k.sm_m;
	}
	static MBF() {
		$k.sm_mbf ||= i.w0($k.M());
		return $k.sm_mbf;
	}
	toObject(e = false) {
		return $k.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT($k.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq($k.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new $k();
		return $k.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj($k.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		$k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0($k.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		$k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSwapControllerSourceModes";
	}
}
export class Ob extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ob.prototype.action_set_key) {
			i.Sg(Ob.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ob.sm_m ||= {
			proto: Ob,
			fields: {
				action_set_key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_set_layer_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				source_binding_key: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mode_shift: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				input_key: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				activator_index: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				new_activation: {
					n: 7,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				new_setting: {
					n: 8,
					c: l,
				},
				modeid: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return Ob.sm_m;
	}
	static MBF() {
		Ob.sm_mbf ||= i.w0(Ob.M());
		return Ob.sm_mbf;
	}
	toObject(e = false) {
		return Ob.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ob.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ob.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ob();
		return Ob.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ob.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Ob.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ob.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Ob.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSetControllerInputActivator";
	}
}
export class u6 extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u6.prototype.action_set_key) {
			i.Sg(u6.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u6.sm_m ||= {
			proto: u6,
			fields: {
				action_set_key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_set_layer_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				source_binding_key: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mode_shift: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				input_key: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				activator_index: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				binding_index: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				new_binding: {
					n: 8,
					c: w,
				},
				source_mode: {
					n: 9,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				modeid: {
					n: 10,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return u6.sm_m;
	}
	static MBF() {
		u6.sm_mbf ||= i.w0(u6.M());
		return u6.sm_mbf;
	}
	toObject(e = false) {
		return u6.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(u6.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(u6.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new u6();
		return u6.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(u6.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		u6.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(u6.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		u6.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSetControllerInputBinding";
	}
}
export class XU extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!XU.prototype.action_set_key) {
			i.Sg(XU.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		XU.sm_m ||= {
			proto: XU,
			fields: {
				action_set_key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_set_layer_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				source_binding_key: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mode_shift: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				input_key: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				activator_index: {
					n: 6,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				enabled: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				modeid: {
					n: 8,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return XU.sm_m;
	}
	static MBF() {
		XU.sm_mbf ||= i.w0(XU.M());
		return XU.sm_mbf;
	}
	toObject(e = false) {
		return XU.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(XU.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(XU.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new XU();
		return XU.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(XU.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		XU.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(XU.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		XU.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSetControllerInputActivatorEnabled";
	}
}
export class xz extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!xz.prototype.action_set_key) {
			i.Sg(xz.M());
		}
		n_Message.initialize(this, e, 0, -1, [6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		xz.sm_m ||= {
			proto: xz,
			fields: {
				action_set_key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_set_layer_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				source_binding_key: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mode_shift: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				modeid: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				swaps: {
					n: 6,
					c: V,
					r: true,
					q: true,
				},
			},
		};
		return xz.sm_m;
	}
	static MBF() {
		xz.sm_mbf ||= i.w0(xz.M());
		return xz.sm_mbf;
	}
	toObject(e = false) {
		return xz.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(xz.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(xz.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new xz();
		return xz.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(xz.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		xz.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(xz.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		xz.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSwapModeInputBindings";
	}
}
class V extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.old_key) {
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
				old_key: {
					n: 1,
					q: true,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				new_key: {
					n: 2,
					q: true,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "CMsgSwapModeInputBindings_CModeInputSwap";
	}
}
export class Yc extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Yc.prototype.action_set_key) {
			i.Sg(Yc.M());
		}
		n_Message.initialize(this, e, 0, -1, [5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Yc.sm_m ||= {
			proto: Yc,
			fields: {
				action_set_key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				action_set_layer_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				modeid: {
					n: 3,
					q: true,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				source: {
					n: 4,
					q: true,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mode_shift_buttons_digital_io: {
					n: 5,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
			},
		};
		return Yc.sm_m;
	}
	static MBF() {
		Yc.sm_mbf ||= i.w0(Yc.M());
		return Yc.sm_mbf;
	}
	toObject(e = false) {
		return Yc.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Yc.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Yc.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Yc();
		return Yc.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Yc.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Yc.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Yc.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Yc.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSetModeShiftButton";
	}
}
export class sx extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!sx.prototype.created) {
			i.Sg(sx.M());
		}
		n_Message.initialize(this, e, 0, -1, [13], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		sx.sm_m ||= {
			proto: sx,
			fields: {
				created: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				controller_idx: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				menu_idx: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				source: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				x_position: {
					n: 5,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				y_position: {
					n: 6,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				opacity: {
					n: 7,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				scale: {
					n: 8,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				show_labels: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				force_on: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				appID: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				menu_style: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				popup_keys: {
					n: 13,
					c: q,
					r: true,
					q: true,
				},
			},
		};
		return sx.sm_m;
	}
	static MBF() {
		sx.sm_mbf ||= i.w0(sx.M());
		return sx.sm_mbf;
	}
	toObject(e = false) {
		return sx.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(sx.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(sx.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new sx();
		return sx.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(sx.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		sx.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(sx.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		sx.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVirtualMenuCreateDestroy";
	}
}
class q extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.key_idx) {
			i.Sg(q.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				key_idx: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				bound: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				placeholder: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				binding_type: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				x: {
					n: 5,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				y: {
					n: 6,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				width: {
					n: 7,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				height: {
					n: 8,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				description: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				label: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				glyph_path: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon_filename: {
					n: 12,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				color_foreground: {
					n: 13,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				color_background: {
					n: 14,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				quandrants: {
					n: 15,
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
		const e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(q.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVirtualMenuCreateDestroy_TouchMenuKey";
	}
}
