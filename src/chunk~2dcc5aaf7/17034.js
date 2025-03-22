var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
const a = n.Message;
class s extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!s.prototype.enum) {
			i.Sg(s.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		s.sm_m ||= {
			proto: s,
			fields: {
				enum: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				overlay: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				hwnd: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		s.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(s.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		s.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUIShared_DashboardTabIcon";
	}
}
export class UQ extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!UQ.prototype.tabs) {
			i.Sg(UQ.M());
		}
		a.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		UQ.sm_m ||= {
			proto: UQ,
			fields: {
				tabs: {
					n: 1,
					c: l,
					r: true,
					q: true,
				},
				selected_tab_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				vr_settings_tab_id: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				vr_steam_tab_id: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return UQ.sm_m;
	}
	static MBF() {
		UQ.sm_mbf ||= i.w0(UQ.M());
		return UQ.sm_mbf;
	}
	toObject(e = false) {
		return UQ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(UQ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(UQ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new UQ();
		return UQ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(UQ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		UQ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(UQ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		UQ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUIShared_PathProperty_DashboardTabs";
	}
	static getVRPathPropertyKey() {
		return "/vrgamepadui/steamvr/dashboard_tabs";
	}
	getVRPathPropertyKey() {
		return UQ.getVRPathPropertyKey();
	}
}
class l extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.tab_id) {
			i.Sg(l.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		l.sm_m ||= {
			proto: l,
			fields: {
				tab_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				display_name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon: {
					n: 4,
					c: s,
				},
				visible_in_dashboard_bar: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				visible_in_dashboard_menu: {
					n: 5,
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
		return "CVRGamepadUIShared_PathProperty_DashboardTabs_Tab";
	}
}
class c extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.enum) {
			i.Sg(c.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				enum: {
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
		return "CVRGamepadUIShared_DashboardActionIcon";
	}
}
class m extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.action_id) {
			i.Sg(m.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				action_id: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				enabled: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_name: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				visible_in_dashboard_bar: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				visible_in_menu: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_menu: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				parent_menu_action_id: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				icon: {
					n: 5,
					c,
				},
				icon_active: {
					n: 6,
					c,
				},
				invocation: {
					n: 7,
					d: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				special_invocation: {
					n: 9,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				active: {
					n: 8,
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
		return "CVRGamepadUIShared_DashboardAction";
	}
}
export class $1 extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$1.prototype.actions) {
			i.Sg($1.M());
		}
		a.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$1.sm_m ||= {
			proto: $1,
			fields: {
				actions: {
					n: 1,
					c: m,
					r: true,
					q: true,
				},
			},
		};
		return $1.sm_m;
	}
	static MBF() {
		$1.sm_mbf ||= i.w0($1.M());
		return $1.sm_mbf;
	}
	toObject(e = false) {
		return $1.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT($1.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq($1.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new $1();
		return $1.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj($1.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		$1.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0($1.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		$1.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUIShared_PathProperty_DashboardActions";
	}
	static getVRPathPropertyKey() {
		return "/vrgamepadui/steamvr/dashboard_actions";
	}
	getVRPathPropertyKey() {
		return $1.getVRPathPropertyKey();
	}
}
export class J$ extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!J$.prototype.windows) {
			i.Sg(J$.M());
		}
		a.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		J$.sm_m ||= {
			proto: J$,
			fields: {
				windows: {
					n: 1,
					c: A,
					r: true,
					q: true,
				},
			},
		};
		return J$.sm_m;
	}
	static MBF() {
		J$.sm_mbf ||= i.w0(J$.M());
		return J$.sm_mbf;
	}
	toObject(e = false) {
		return J$.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(J$.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(J$.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new J$();
		return J$.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(J$.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		J$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(J$.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		J$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUIShared_PathProperty_DesktopWindows";
	}
	static getVRPathPropertyKey() {
		return "/vrgamepadui/steamvr/desktop_windows";
	}
	getVRPathPropertyKey() {
		return J$.getVRPathPropertyKey();
	}
}
class A extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.window_id) {
			i.Sg(A.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
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
				hwnd: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				title: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				tab_id: {
					n: 4,
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
		return "CVRGamepadUIShared_PathProperty_DesktopWindows_Window";
	}
}
export class T4 extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T4.prototype.can_sleep) {
			i.Sg(T4.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T4.sm_m ||= {
			proto: T4,
			fields: {
				can_sleep: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_shutdown: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_restart_system: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				can_exitvr: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return T4.sm_m;
	}
	static MBF() {
		T4.sm_mbf ||= i.w0(T4.M());
		return T4.sm_mbf;
	}
	toObject(e = false) {
		return T4.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(T4.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(T4.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new T4();
		return T4.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(T4.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		T4.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(T4.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		T4.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVRGamepadUIShared_PathProperty_PowerOptions";
	}
	static getVRPathPropertyKey() {
		return "/vrgamepadui/steamvr/power_options";
	}
	getVRPathPropertyKey() {
		return T4.getVRPathPropertyKey();
	}
}
