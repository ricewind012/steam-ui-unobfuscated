import n from "./58663.js";
import i from "./48307.js";
const n_Message = n.Message;
export class DX extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!DX.prototype.name) {
			i.Sg(DX.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		DX.sm_m ||= {
			proto: DX,
			fields: {
				name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				message_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				response_to_message_id: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				is_error_response: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return DX.sm_m;
	}
	static MBF() {
		DX.sm_mbf ||= i.w0(DX.M());
		return DX.sm_mbf;
	}
	toObject(e = false) {
		return DX.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(DX.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(DX.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new DX();
		return DX.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(DX.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		DX.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(DX.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		DX.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUI_Message_Header";
	}
}
export class iM extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!iM.prototype.error) {
			i.Sg(iM.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		iM.sm_m ||= {
			proto: iM,
			fields: {
				error: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				description: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				origin: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return iM.sm_m;
	}
	static MBF() {
		iM.sm_mbf ||= i.w0(iM.M());
		return iM.sm_mbf;
	}
	toObject(e = false) {
		return iM.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(iM.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(iM.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new iM();
		return iM.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(iM.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		iM.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(iM.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		iM.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUI_Message_Error_Response";
	}
}
export function Ut(e) {
	return `unknown CVRGamepadUI_Message_Error_Response_ErrorCode ( ${e} )`;
}
class c extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.tab_id) {
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
				tab_id: {
					n: 1,
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
		return "CVRGamepadUI_Message_DashboardTabClicked_Request";
	}
}
class m extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return m.toObject(e, this);
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
		return new m();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new m();
		return m.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUI_Message_DashboardTabClicked_Response";
	}
}
class u extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.action_id) {
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
				action_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				toggle_value: {
					n: 2,
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
		return "CVRGamepadUI_Message_DashboardActionInvoked_Request";
	}
}
class d extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUI_Message_DashboardActionInvoked_Response";
	}
}
class A extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.window_id) {
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
				window_id: {
					n: 1,
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
		return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Request";
	}
}
class p extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return p.toObject(e, this);
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
		return new p();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Response";
	}
}
class g extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.dashboard_popup_request_id) {
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
				dashboard_popup_request_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				popup_overlay_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				parent_enum: {
					n: 15,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				parent_overlay_key: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				parent_device_path: {
					n: 13,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				origin_on_parent: {
					n: 4,
					c: h,
				},
				origin_on_popup: {
					n: 5,
					c: h,
				},
				offset: {
					n: 6,
					c: C,
				},
				rotation: {
					n: 7,
					c: _,
				},
				inherit_parent_pitch: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				inherit_parent_curvature: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				clip_rect: {
					n: 10,
					c: f,
				},
				interactive: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				requires_laser: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sort_order: {
					n: 14,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "CVRGamepadUI_Message_ShowDashboardPopup_Request";
	}
}
class h extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.x) {
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
				x: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				y: {
					n: 2,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
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
		return "CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition";
	}
}
class C extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.x_pixels) {
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
				x_pixels: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				y_pixels: {
					n: 2,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				z_pixels: {
					n: 3,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				x_meters: {
					n: 4,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				y_meters: {
					n: 5,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				z_meters: {
					n: 6,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
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
		return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Position";
	}
}
class _ extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.pitch_degrees) {
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
				pitch_degrees: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				yaw_degrees: {
					n: 2,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
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
		return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rotation";
	}
}
class f extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.u_min) {
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
				u_min: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				v_min: {
					n: 2,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				u_max: {
					n: 3,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				v_max: {
					n: 4,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
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
		return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rect";
	}
}
class b extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return b.toObject(e, this);
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
		return new b();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUI_Message_ShowDashboardPopup_Response";
	}
}
class y extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.dashboard_popup_request_id) {
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
				dashboard_popup_request_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CVRGamepadUI_Message_HideDashboardPopup_Request";
	}
}
class S extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return S.toObject(e, this);
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
		return new S();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUI_Message_HideDashboardPopup_Response";
	}
}
class w extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.source_accountid) {
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
				source_accountid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				video_uniqueid: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CVRGamepadUI_Message_RemoteVideoStream_Request";
	}
}
class B extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUI_Message_RemoteVideoStream_Response";
	}
}
class v extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.overlay_key) {
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
				overlay_key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CVRGamepadUI_Message_ShowGame_Request";
	}
}
class I extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUI_Message_ShowGame_Response";
	}
}
class E extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.overlay_key) {
			i.Sg(E.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				overlay_key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CVRGamepadUI_Message_ShowOverlay_Request";
	}
}
class M extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		const e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUI_Message_ShowOverlay_Response";
	}
}
class T extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.url) {
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
				url: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CVRGamepadUI_Message_ExecuteSteamURL_Request";
	}
}
class R extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		n_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new n.BinaryReader(e);
		let r = new R();
		return R.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUI_Message_ExecuteSteamURL_Response";
	}
}
export class _i {
	m_Client;
	constructor(e) {
		this.m_Client = e;
	}
	DashboardTabClicked(e) {
		return this.m_Client.SendVRGamepadUIRequest(
			"DashboardTabClicked#1",
			c.fromObject(e ?? {}),
			m,
		);
	}
	DashboardActionInvoked(e) {
		return this.m_Client.SendVRGamepadUIRequest(
			"DashboardActionInvoked#1",
			u.fromObject(e ?? {}),
			d,
		);
	}
	DashboardDesktopWindowClicked(e) {
		return this.m_Client.SendVRGamepadUIRequest(
			"DashboardDesktopWindowClicked#1",
			A.fromObject(e ?? {}),
			p,
		);
	}
	ShowDashboardPopup(e) {
		return this.m_Client.SendVRGamepadUIRequest(
			"ShowDashboardPopup#1",
			g.fromObject(e ?? {}),
			b,
		);
	}
	HideDashboardPopup(e) {
		return this.m_Client.SendVRGamepadUIRequest(
			"HideDashboardPopup#1",
			y.fromObject(e ?? {}),
			S,
		);
	}
	RemoteVideoStream(e) {
		return this.m_Client.SendVRGamepadUIRequest(
			"RemoteVideoStream#1",
			w.fromObject(e ?? {}),
			B,
		);
	}
	ShowGame(e) {
		return this.m_Client.SendVRGamepadUIRequest(
			"ShowGame#1",
			v.fromObject(e ?? {}),
			I,
		);
	}
	ShowOverlay(e) {
		return this.m_Client.SendVRGamepadUIRequest(
			"ShowOverlay#1",
			E.fromObject(e ?? {}),
			M,
		);
	}
}
export const nV = {
	"ExecuteSteamURL#1": {
		msgClassRequest_t: T,
		msgClassResponse_t: R,
		strMethod: "ExecuteSteamURL",
	},
};
