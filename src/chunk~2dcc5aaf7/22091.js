import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a, { _g, hL } from "./52451.js";
import s, { Gn } from "./89193.js";
import o from "./79769.js";
import c, { q3 } from "./90095.js";
import { pg } from "./13869.js";
import { wY } from "./85182.js";
import d from "./34792.js";
import A from "./58663.js";
import p from "./48307.js";
import { I8 } from "./12176.js";
import { OI } from "./12251.js";
const A_Message = A.Message;
class _ extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.controller_index) {
			p.Sg(_.M());
		}
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				controller_index: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				dpad_up: {
					n: 2,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				dpad_down: {
					n: 3,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				dpad_left: {
					n: 4,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				dpad_right: {
					n: 5,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				button_south: {
					n: 6,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				button_east: {
					n: 7,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				button_west: {
					n: 8,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				button_north: {
					n: 9,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				button_back_view: {
					n: 10,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				button_start_options: {
					n: 11,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				button_steam: {
					n: 12,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				button_quick_access: {
					n: 13,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				button_mute_capture: {
					n: 14,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				left_stick_click: {
					n: 15,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				left_stick_touch: {
					n: 16,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				left_stick_deflect: {
					n: 17,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				right_stick_click: {
					n: 18,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				right_stick_touch: {
					n: 19,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				right_stick_deflect: {
					n: 20,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				center_trackpad_touch: {
					n: 21,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				center_trackpad_click: {
					n: 22,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				left_trackpad_touch: {
					n: 23,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				left_trackpad_click: {
					n: 24,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				right_trackpad_touch: {
					n: 25,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				right_trackpad_click: {
					n: 26,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				left_bumper: {
					n: 27,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				left_trigger: {
					n: 28,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				l4: {
					n: 29,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				l5: {
					n: 30,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				left_aux: {
					n: 31,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				right_bumper: {
					n: 32,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				right_trigger: {
					n: 33,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				r4: {
					n: 34,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				r5: {
					n: 35,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
				right_aux: {
					n: 36,
					br: p.qM.readBool,
					bw: p.gp.writeBool,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= p.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(_.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamInputService_ControllerButtonStateChanged_Notification";
	}
}
class f extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.x) {
			p.Sg(f.M());
		}
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				x: {
					n: 1,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				y: {
					n: 2,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
			},
		};
		return f.sm_m;
	}
	static MBF() {
		f.sm_mbf ||= p.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(f.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(f.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ControllerVector2";
	}
}
class b extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.x) {
			p.Sg(b.M());
		}
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				x: {
					n: 1,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				y: {
					n: 2,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				z: {
					n: 3,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= p.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(b.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ControllerVector3";
	}
}
class y extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.w) {
			p.Sg(y.M());
		}
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				w: {
					n: 1,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				x: {
					n: 2,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				y: {
					n: 3,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				z: {
					n: 4,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= p.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(y.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(y.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(y.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ControllerQuaternion";
	}
}
class S extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.pitch) {
			p.Sg(S.M());
		}
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				pitch: {
					n: 1,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				yaw: {
					n: 2,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				roll: {
					n: 3,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= p.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(S.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ControllerGyroEulerAngles";
	}
}
class w extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.controller_index) {
			p.Sg(w.M());
		}
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				controller_index: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				joystick_left: {
					n: 2,
					c: f,
				},
				joystick_right: {
					n: 3,
					c: f,
				},
				trackpad_left: {
					n: 4,
					c: f,
				},
				trackpad_right: {
					n: 5,
					c: f,
				},
				trackpad_center: {
					n: 6,
					c: f,
				},
				trackpad_pressure_left: {
					n: 7,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				trackpad_pressure_right: {
					n: 8,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				trigger_left: {
					n: 9,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				trigger_right: {
					n: 10,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
			},
		};
		return w.sm_m;
	}
	static MBF() {
		w.sm_mbf ||= p.w0(w.M());
		return w.sm_mbf;
	}
	toObject(e = false) {
		return w.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(w.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(w.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(w.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(w.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamInputService_ControllerAxesStateChange_Notification";
	}
}
class B extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.controller_index) {
			p.Sg(B.M());
		}
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				controller_index: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				imu_index: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				gyro_raw_quaternion: {
					n: 3,
					c: y,
				},
				gyro_filtered_quaternion: {
					n: 4,
					c: y,
				},
				imu_sensor_delta_time: {
					n: 5,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				packet_number: {
					n: 6,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= p.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(B.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(B.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamInputService_GyroQuaternionChanged_Notification";
	}
}
class v extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.controller_index) {
			p.Sg(v.M());
		}
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				controller_index: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				imu_index: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				gyro_raw_speed: {
					n: 3,
					c: S,
				},
				gyro_filtered_speed: {
					n: 4,
					c: S,
				},
			},
		};
		return v.sm_m;
	}
	static MBF() {
		v.sm_mbf ||= p.w0(v.M());
		return v.sm_mbf;
	}
	toObject(e = false) {
		return v.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(v.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(v.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(v.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(v.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamInputService_GyroSpeedChanged_Notification";
	}
}
class I extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.controller_index) {
			p.Sg(I.M());
		}
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				controller_index: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				imu_index: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				acceleromter_1g: {
					n: 4,
					c: b,
				},
				trusted_gravity_1g: {
					n: 5,
					c: b,
				},
			},
		};
		return I.sm_m;
	}
	static MBF() {
		I.sm_mbf ||= p.w0(I.M());
		return I.sm_mbf;
	}
	toObject(e = false) {
		return I.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(I.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(I.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(I.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(I.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamInputService_GyroAccelerometerChanged_Notification";
	}
}
class E extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.controller_index) {
			p.Sg(E.M());
		}
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				controller_index: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				imu_index: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				acceleromter_noise: {
					n: 3,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				gyroscope_noise: {
					n: 4,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
				calibration_progress: {
					n: 5,
					br: p.qM.readFloat,
					bw: p.gp.writeFloat,
				},
			},
		};
		return E.sm_m;
	}
	static MBF() {
		E.sm_mbf ||= p.w0(E.M());
		return E.sm_mbf;
	}
	toObject(e = false) {
		return E.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(E.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(E.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new E();
		return E.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(E.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(E.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamInputService_GyroCalibration_Notification";
	}
}
class M extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.controller_index) {
			p.Sg(M.M());
		}
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				controller_index: {
					n: 1,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
				flow_mode: {
					n: 2,
					br: p.qM.readUint32,
					bw: p.gp.writeUint32,
				},
			},
		};
		return M.sm_m;
	}
	static MBF() {
		M.sm_mbf ||= p.w0(M.M());
		return M.sm_mbf;
	}
	toObject(e = false) {
		return M.toObject(e, this);
	}
	static toObject(e, t) {
		return p.BT(M.M(), e, t);
	}
	static fromObject(e) {
		return p.Uq(M.M(), e);
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new M();
		return M.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return p.zj(M.MBF(), e, t);
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		p.i0(M.M(), e, t);
	}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamInputService_ControllerStateFlow_Request";
	}
}
class T extends A_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		A_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return T.toObject(e, this);
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
		return new T();
	}
	static deserializeBinary(e) {
		let t = new A.BinaryReader(e);
		let r = new T();
		return T.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new A.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new A.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamInputService_ControllerStateFlow_Response";
	}
}
let R;
((e) => {
	e.NotifyButtonStateChangedHandler = {
		name: "SteamInputManager.NotifyButtonStateChanged#1",
		request: _,
	};
	e.RegisterForNotifyButtonStateChanged = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyButtonStateChangedHandler,
				t,
			);
		}
	};
	e.NotifyButtonStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyButtonStateChanged#1",
				I8(_, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgNotifyButtonStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyButtonStateChanged#1",
				I8(_, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.NotifyAxesStateChangedHandler = {
		name: "SteamInputManager.NotifyAxesStateChanged#1",
		request: w,
	};
	e.RegisterForNotifyAxesStateChanged = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyAxesStateChangedHandler,
				t,
			);
		}
	};
	e.NotifyAxesStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyAxesStateChanged#1",
				I8(w, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgNotifyAxesStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyAxesStateChanged#1",
				I8(w, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.NotifyGyroQuaternionStateChangedHandler = {
		name: "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
		request: B,
	};
	e.RegisterForNotifyGyroQuaternionStateChanged = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyGyroQuaternionStateChangedHandler,
				t,
			);
		}
	};
	e.NotifyGyroQuaternionStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyGyroQuaternionStateChanged#1",
				I8(B, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgNotifyGyroQuaternionStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyGyroQuaternionStateChanged#1",
				I8(B, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.NotifyGyroSpeedStateChangedHandler = {
		name: "SteamInputManager.NotifyGyroSpeedStateChanged#1",
		request: v,
	};
	e.RegisterForNotifyGyroSpeedStateChanged = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyGyroSpeedStateChangedHandler,
				t,
			);
		}
	};
	e.NotifyGyroSpeedStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyGyroSpeedStateChanged#1",
				I8(v, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgNotifyGyroSpeedStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyGyroSpeedStateChanged#1",
				I8(v, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.NotifyGyroAccelerometerStateChangedHandler = {
		name: "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
		request: I,
	};
	e.RegisterForNotifyGyroAccelerometerStateChanged = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyGyroAccelerometerStateChangedHandler,
				t,
			);
		}
	};
	e.NotifyGyroAccelerometerStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
				I8(I, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgNotifyGyroAccelerometerStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
				I8(I, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.NotifyGyroCalibrationStateChangedHandler = {
		name: "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
		request: E,
	};
	e.RegisterForNotifyGyroCalibrationStateChanged = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyGyroCalibrationStateChangedHandler,
				t,
			);
		}
	};
	e.NotifyGyroCalibrationStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyGyroCalibrationStateChanged#1",
				I8(E, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgNotifyGyroCalibrationStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamInputManager.NotifyGyroCalibrationStateChanged#1",
				I8(E, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.StartControllerStateFlowHandler = {
		name: "SteamInputManager.StartControllerStateFlow#1",
		request: M,
		response: T,
	};
	e.StartControllerStateFlow = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"SteamInputManager.StartControllerStateFlow#1",
				I8(M, e),
				T,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgStartControllerStateFlow = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"SteamInputManager.StartControllerStateFlow#1",
				I8(M, e),
				T,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.EndControllerStateFlowHandler = {
		name: "SteamInputManager.EndControllerStateFlow#1",
		request: M,
		response: T,
	};
	e.EndControllerStateFlow = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"SteamInputManager.EndControllerStateFlow#1",
				I8(M, e),
				T,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgEndControllerStateFlow = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"SteamInputManager.EndControllerStateFlow#1",
				I8(M, e),
				T,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
})((R ||= {}));
export const F0 = 16;
const D = {
	[-1]: "controller_none",
	20: "controller_unknown",
	0: "controller_unknown",
	1: "controller_generic",
	2: "controller_steamcontroller_gordon",
	3: "controller_steamcontroller_unknown",
	4: "controller_steamcontroller_neptune",
	30: "controller_generic",
	31: "controller_xbox360",
	32: "controller_xboxone",
	33: "controller_ps3",
	34: "controller_ps4",
	47: "controller_ps4",
	35: "controller_wii",
	36: "controller_apple",
	37: "controller_android",
	38: "controller_switch_pro",
	42: "controller_switch_pro",
	44: "controller_switch_pro",
	43: "controller_mobile_touch",
	45: "controller_ps5",
	48: "controller_ps5_edge",
	46: "controller_xboxelite",
	49: "controller_hori_steam",
	39: "controller_switch_joycon_left",
	40: "controller_switch_joycon_right",
	41: "controller_switch_joycon_pair",
	50: "controller_unknown",
	400: "controller_unknown",
	800: "controller_unknown",
};
class N {
	m_controllerButtonState = {
		nControllerIndex: 0,
		bDpadUp: false,
		bDpadDown: false,
		bDpadLeft: false,
		bDpadRight: false,
		bButtonSouth: false,
		bButtonEast: false,
		bButtonWest: false,
		bButtonNorth: false,
		bButtonBackView: false,
		bButtonStartOptions: false,
		bButtonSteam: false,
		bButtonQuickAccess: false,
		bButtonMuteCapture: false,
		bLeftStickClick: false,
		bLeftStickTouch: false,
		bLeftStickDeflect: false,
		bRightStickClick: false,
		bRightStickTouch: false,
		bRightStickDeflect: false,
		bCenterTrackpadTouch: false,
		bCenterTrackpadClick: false,
		bLeftTrackpadTouch: false,
		bLeftTrackpadClick: false,
		bRightTrackpadTouch: false,
		bRightTrackpadClick: false,
		bLeftBumper: false,
		bLeftTrigger: false,
		bL4: false,
		bL5: false,
		bLeftAux: false,
		bRightBumper: false,
		bRightTrigger: false,
		bR4: false,
		bR5: false,
		bRightAux: false,
	};
	m_controllerGyroState = {
		nControllerIndex: 0,
		nIMUIndex: 0,
		GyroRawQuaternion: {
			w: 1,
			x: 0,
			y: 0,
			z: 0,
		},
		GyroFilteredQuaternion: {
			w: 1,
			x: 0,
			y: 0,
			z: 0,
		},
		unSensorDeltaTimeUS: 0,
		unPacketNumber: 0,
	};
	m_controllerAxesState = {
		nControllerIndex: 0,
		LeftJoystick: {
			x: 0,
			y: 0,
		},
		RightJoystick: {
			x: 0,
			y: 0,
		},
		LeftTrackpad: {
			x: 0,
			y: 0,
		},
		RightTrackpad: {
			x: 0,
			y: 0,
		},
		CenterTrackpad: {
			x: 0,
			y: 0,
		},
		flLeftTrackpadPressure: 0,
		flRightTrackpadPressure: 0,
		flLeftTrigger: 0,
		flRightTrigger: 0,
	};
	m_controllerGyroSpeedState = {
		nControllerIndex: 0,
		nIMUIndex: 0,
		GyroRawSpeed: {
			pitch: 0,
			yaw: 0,
			roll: 0,
		},
		GyroFilteredSpeed: {
			pitch: 0,
			yaw: 0,
			roll: 0,
		},
	};
	m_controllerGyroAccelerometerState = {
		nControllerIndex: 0,
		nIMUIndex: 0,
		Accelerometer1G: {
			x: 0,
			y: 0,
			z: 0,
		},
		TrustedGravity1G: {
			x: 0,
			y: 0,
			z: 0,
		},
	};
	m_controllerGyroCalibrationState = {
		nControllerIndex: 0,
		nIMUIndex: 0,
		AccelerometerNoise: 0,
		GyroscopeNoise: 0,
		CalibrationProgress: 0,
	};
	constructor(e) {
		Gn(this);
		this.m_controllerButtonState.nControllerIndex = e;
		this.m_controllerGyroState.nControllerIndex = e;
		this.m_controllerAxesState.nControllerIndex = e;
		this.m_controllerGyroSpeedState.nControllerIndex = e;
		this.m_controllerGyroAccelerometerState.nControllerIndex = e;
		this.m_controllerGyroCalibrationState.nControllerIndex = e;
	}
}
Cg([s.sH], N.prototype, "m_controllerButtonState", undefined);
Cg([s.sH], N.prototype, "m_controllerGyroState", undefined);
Cg([s.sH], N.prototype, "m_controllerAxesState", undefined);
Cg([s.sH], N.prototype, "m_controllerGyroSpeedState", undefined);
Cg([s.sH], N.prototype, "m_controllerGyroAccelerometerState", undefined);
Cg([s.sH], N.prototype, "m_controllerGyroCalibrationState", undefined);
export class Fd {
	static s_ControllerStore = null;
	m_unboundControllerList = [];
	m_controllerList = [];
	m_controllerSupportState = undefined;
	m_cbkDeviceSupportState = new o.lu();
	m_nSupportCounter = 0;
	m_controllerStateDeviceIdx = 0;
	m_controllerDeviceState = undefined;
	m_GyroCalibrationActive = false;
	m_steamControllerDonglePresent = null;
	m_strXboxInstallState = "Uninstalled";
	m_bDualSenseUpdateNoticeVisible = false;
	m_strDualSenseUpdateProduct = null;
	m_controllerFeedStates = [];
	constructor() {
		Gn(this);
		SteamClient.Input.RegisterForUnboundControllerListChanges(
			this.OnUnboundControllerListChanged,
		);
		SteamClient.Input.RegisterForControllerListChanges(
			this.OnControllerListChanged,
		);
		SteamClient.Input.RegisterForControllerBatteryChanges(
			this.OnControllerBatteryChange,
		);
		SteamClient.Input.RegisterForDualSenseUpdateNotification(
			this.ShowDualSenseUpdateNotice,
		);
		R.RegisterForNotifyButtonStateChanged(this.fnOnRawButtonStateChanged);
		R.RegisterForNotifyGyroQuaternionStateChanged(
			this.fnOnGyroQuaternionStateChanged,
		);
		R.RegisterForNotifyAxesStateChanged(this.fnOnAxesStateChanged);
		R.RegisterForNotifyGyroSpeedStateChanged(this.fnOnGyroSpeedStateChanged);
		R.RegisterForNotifyGyroAccelerometerStateChanged(
			this.fnOnGyroAccelerometerStateChanged,
		);
		R.RegisterForNotifyGyroCalibrationStateChanged(
			this.fnOnGyroCalibrationStateChanged,
		);
		this.m_controllerFeedStates = s.sH.array(new Array(F0));
		for (let e = 0; e < F0; e++) {
			this.m_controllerFeedStates[e] = new N(e);
		}
	}
	static Get() {
		this.s_ControllerStore ||= new Fd();
		return this.s_ControllerStore;
	}
	OnUnboundControllerListChanged(e) {
		this.m_unboundControllerList = e;
	}
	OnControllerListChanged(e) {
		this.m_controllerList = e;
	}
	OnControllerBatteryChange(e) {
		e?.forEach((e, t) => {
			if (this.m_controllerList.length > t) {
				this.m_controllerList[t].ucBatteryLevel = e;
			}
		});
	}
	static GetControllerTypeString(e) {
		return D[e];
	}
	GetControllerTypeStringByIndex(e) {
		if (this.m_controllerList.length > 0) {
			if (!e) {
				return Localize(`#${D[this.m_controllerList[0].eControllerType]}`);
			}
			let t;
			this.m_controllerList.forEach((r) => {
				if (r.nControllerIndex == e) {
					t = Localize(`#${D[r.eControllerType]}`);
				}
			});
			return t;
		}
		return "";
	}
	HasGyro(e) {
		return (
			this.m_controllerList.length > 0 &&
			this.m_controllerList.some(
				(t) =>
					(!e || t.nControllerIndex == e) && (t.unCapabilities & 2048) != 0,
			)
		);
	}
	GetUnboundControllers() {
		return this.m_unboundControllerList;
	}
	GetControllers() {
		return this.m_controllerList;
	}
	GetControllersSorted(e) {
		if (e) {
			return [...this.m_controllerList].sort((e, t) =>
				e.nXInputIndex < t.nXInputIndex
					? -1
					: e.nXInputIndex > t.nXInputIndex
						? 1
						: e.nControllerIndex - t.nControllerIndex,
			);
		} else {
			return this.m_controllerList;
		}
	}
	GetController(e) {
		return this.m_controllerList.find((t) => t.nControllerIndex == e);
	}
	ProcessSupportFlowUpdates(e) {
		this.m_cbkDeviceSupportState?.Dispatch(e);
		this.m_controllerSupportState = e;
	}
	get ControllerDeviceSupportStateCallback() {
		return this.m_cbkDeviceSupportState;
	}
	get ControllerSupportFlowState() {
		return this.m_controllerSupportState;
	}
	StartControllerSupportFlow(e, t) {
		if (this.m_nSupportCounter++ == 0) {
			SteamClient.Input.StartControllerDeviceSupportFlow(
				e,
				t,
				this.ProcessSupportFlowUpdates,
			);
		}
	}
	ChangeControllerSupportFlow(e, t) {
		if (this.m_nSupportCounter > 0) {
			SteamClient.Input.StartControllerDeviceSupportFlow(
				e,
				t,
				this.ProcessSupportFlowUpdates,
			);
		} else {
			console.error(
				"Tried to change controller support flow when no flow active",
			);
		}
	}
	EndControllerSupportFlow() {
		if (--this.m_nSupportCounter == 0) {
			SteamClient.Input.EndControllerDeviceSupportFlow();
		} else if (this.m_nSupportCounter < 0) {
			console.error("Controller Device Support calls mismatched");
		}
	}
	ResetControllerBindings(e) {
		SteamClient.Input.ResetControllerBindings(e);
	}
	BHasExternalGamepadConnected() {
		return this.m_controllerList.some((e) => e.eControllerType != 4);
	}
	fnUpdateControllerState(e) {
		this.m_controllerDeviceState = e.find(
			(e) => e.unControllerIndex == this.m_controllerStateDeviceIdx,
		);
	}
	fnOnRawButtonStateChanged(e) {
		const t = e.Body().toObject();
		if (this.m_controllerStateDeviceIdx != t.controller_index) {
			return 2;
		}
		const r = {
			nControllerIndex: t.controller_index,
			bDpadUp: t.dpad_up,
			bDpadDown: t.dpad_down,
			bDpadLeft: t.dpad_left,
			bDpadRight: t.dpad_right,
			bButtonSouth: t.button_south,
			bButtonEast: t.button_east,
			bButtonWest: t.button_west,
			bButtonNorth: t.button_north,
			bButtonBackView: t.button_back_view,
			bButtonStartOptions: t.button_start_options,
			bButtonSteam: t.button_steam,
			bButtonQuickAccess: t.button_quick_access,
			bButtonMuteCapture: t.button_mute_capture,
			bLeftStickClick: t.left_stick_click,
			bLeftStickTouch: t.left_stick_touch,
			bLeftStickDeflect: t.left_stick_deflect,
			bRightStickClick: t.right_stick_click,
			bRightStickTouch: t.right_stick_touch,
			bRightStickDeflect: t.right_stick_deflect,
			bCenterTrackpadTouch: t.center_trackpad_touch,
			bCenterTrackpadClick: t.center_trackpad_click,
			bLeftTrackpadTouch: t.left_trackpad_touch,
			bLeftTrackpadClick: t.left_trackpad_click,
			bRightTrackpadTouch: t.right_trackpad_touch,
			bRightTrackpadClick: t.right_trackpad_click,
			bLeftBumper: t.left_bumper,
			bLeftTrigger: t.left_trigger,
			bL4: t.l4,
			bL5: t.l5,
			bLeftAux: t.left_aux,
			bRightBumper: t.right_bumper,
			bRightTrigger: t.right_trigger,
			bR4: t.r4,
			bR5: t.r5,
			bRightAux: t.right_aux,
		};
		this.m_controllerFeedStates[t.controller_index].m_controllerButtonState = r;
		return 1;
	}
	fnOnAxesStateChanged(e) {
		const t = e.Body().toObject();
		if (this.m_controllerStateDeviceIdx != t.controller_index) {
			return 2;
		}
		const r = {
			nControllerIndex: t.controller_index,
			LeftJoystick: {
				x: t.joystick_left.x,
				y: t.joystick_left.y,
			},
			RightJoystick: {
				x: t.joystick_right.x,
				y: t.joystick_right.y,
			},
			LeftTrackpad: {
				x: t.trackpad_left.x,
				y: t.trackpad_left.y,
			},
			RightTrackpad: {
				x: t.trackpad_right.x,
				y: t.trackpad_right.y,
			},
			CenterTrackpad: {
				x: t.trackpad_center.x,
				y: t.trackpad_center.y,
			},
			flLeftTrackpadPressure: t.trackpad_pressure_left,
			flRightTrackpadPressure: t.trackpad_pressure_right,
			flLeftTrigger: t.trigger_left,
			flRightTrigger: t.trigger_right,
		};
		this.m_controllerFeedStates[t.controller_index].m_controllerAxesState = r;
		return 1;
	}
	fnOnGyroQuaternionStateChanged(e) {
		const t = e.Body().toObject();
		const r = {
			nControllerIndex: t.controller_index,
			nIMUIndex: t.imu_index,
			GyroRawQuaternion: {
				w: t.gyro_raw_quaternion.w,
				x: t.gyro_raw_quaternion.x,
				y: t.gyro_raw_quaternion.y,
				z: t.gyro_raw_quaternion.z,
			},
			GyroFilteredQuaternion: {
				w: t.gyro_filtered_quaternion.w,
				x: t.gyro_filtered_quaternion.x,
				y: t.gyro_filtered_quaternion.y,
				z: t.gyro_filtered_quaternion.z,
			},
			unSensorDeltaTimeUS: t.imu_sensor_delta_time,
			unPacketNumber: t.packet_number,
		};
		this.m_controllerFeedStates[t.controller_index].m_controllerGyroState = r;
		return 1;
	}
	fnOnGyroSpeedStateChanged(e) {
		const t = e.Body().toObject();
		const r = {
			nControllerIndex: t.controller_index,
			nIMUIndex: t.imu_index,
			GyroRawSpeed: {
				pitch: t.gyro_raw_speed.pitch,
				yaw: t.gyro_raw_speed.yaw,
				roll: t.gyro_raw_speed.roll,
			},
			GyroFilteredSpeed: {
				pitch: t.gyro_filtered_speed.pitch,
				yaw: t.gyro_filtered_speed.yaw,
				roll: t.gyro_filtered_speed.roll,
			},
		};
		this.m_controllerFeedStates[t.controller_index].m_controllerGyroSpeedState =
			r;
		return 1;
	}
	fnOnGyroAccelerometerStateChanged(e) {
		const t = e.Body().toObject();
		const r = {
			nControllerIndex: t.controller_index,
			nIMUIndex: t.imu_index,
			Accelerometer1G: {
				x: t.acceleromter_1g.x,
				y: t.acceleromter_1g.y,
				z: t.acceleromter_1g.z,
			},
			TrustedGravity1G: {
				x: t.trusted_gravity_1g.x,
				y: t.trusted_gravity_1g.y,
				z: t.trusted_gravity_1g.z,
			},
		};
		this.m_controllerFeedStates[
			t.controller_index
		].m_controllerGyroAccelerometerState = r;
		return 1;
	}
	fnOnGyroCalibrationStateChanged(e) {
		const t = e.Body().toObject();
		const r = {
			nControllerIndex: t.controller_index,
			nIMUIndex: t.imu_index,
			AccelerometerNoise: t.acceleromter_noise,
			GyroscopeNoise: t.gyroscope_noise,
			CalibrationProgress: t.calibration_progress,
		};
		this.m_controllerFeedStates[
			t.controller_index
		].m_controllerGyroCalibrationState = r;
		return 1;
	}
	CommitControllerSettings(e) {
		SteamClient.Input.SetControllerPersonalizationSetting(
			"nLStickDeadzone",
			e.nLStickDeadzone,
		);
		SteamClient.Input.SetControllerPersonalizationSetting(
			"nRStickDeadzone",
			e.nRStickDeadzone,
		);
		SteamClient.Input.SetControllerPersonalizationSetting(
			"bSWAntiDrift",
			e.bSWAntiDrift ? 1 : 0,
		);
		SteamClient.Input.SetControllerPersonalizationSetting(
			"nLHapticStrength",
			e.nLHapticStrength,
		);
		SteamClient.Input.SetControllerPersonalizationSetting(
			"nRHapticStrength",
			e.nRHapticStrength,
		);
		SteamClient.Input.SetControllerPersonalizationSetting(
			"flLPadPressureCurve",
			e.flLPadPressureCurve * 100,
		);
		SteamClient.Input.SetControllerPersonalizationSetting(
			"flRPadPressureCurve",
			e.flRPadPressureCurve * 100,
		);
		SteamClient.Input.SetControllerPersonalizationSettingFloat(
			"flGyroStationaryTolerance",
			e.flGyroStationaryTolerance,
		);
		SteamClient.Input.SetControllerPersonalizationSettingFloat(
			"flAccelerometerStationaryTolerance",
			e.flAccelerometerStationaryTolerance,
		);
		SteamClient.Input.SaveControllerCalibration(
			this.m_controllerStateDeviceIdx,
		);
		SteamClient.Input.InitializeControllerPersonalizationSettings(
			this.m_controllerStateDeviceIdx,
		);
	}
	DiscardCalibration() {
		SteamClient.Input.RestoreControllerPersonalizationSettings(
			this.m_controllerStateDeviceIdx,
		);
	}
	get GyroCalibrationActive() {
		return this.m_GyroCalibrationActive;
	}
	fnGyroCalibrationDone() {
		this.m_GyroCalibrationActive = false;
	}
	CalibrateGyroInSW() {
		this.m_GyroCalibrationActive = true;
		SteamClient.Input.StartGyroSWCalibration(this.fnGyroCalibrationDone);
	}
	CalibrateSteamControllerGyro() {
		SteamClient.Input.CalibrateControllerIMU(this.m_controllerStateDeviceIdx);
	}
	CalibrateSteamControllerJoystick() {
		SteamClient.Input.CalibrateControllerJoystick(
			this.m_controllerStateDeviceIdx,
		);
	}
	CalibrateSteamControllerTrackpads() {
		SteamClient.Input.CalibrateControllerTrackpads(
			this.m_controllerStateDeviceIdx,
		);
	}
	get ControllerState() {
		return this.m_controllerDeviceState;
	}
	StartControllerCalibrationFlow(e) {
		this.m_controllerStateDeviceIdx = e;
		SteamClient.Input.RegisterForControllerStateChanges(
			this.fnUpdateControllerState,
		);
		SteamClient.Input.InitializeControllerPersonalizationSettings(e);
	}
	EndControllerCalibrationFlow() {
		SteamClient.Input.UnregisterForControllerStateChanges();
	}
	ControllerFeedStates() {
		return this.m_controllerFeedStates;
	}
	ClearSteamControllerDongleState() {
		this.m_steamControllerDonglePresent = null;
	}
	GetSteamControllerDonglePresent() {
		if (this.m_steamControllerDonglePresent === null) {
			SteamClient.Input.GetSteamControllerDongleState().then((e) => {
				this.m_steamControllerDonglePresent = e;
			});
		}
		return this.m_steamControllerDonglePresent;
	}
	async SetXboxDriverInstallState(e, t) {
		let r;
		await SteamClient.Input?.SetXboxDriverInstallState(e).then((e) => (r = e));
		this.m_strXboxInstallState = r?.strState;
		pg(
			wY({
				bInstall: e,
				result: r,
			}),
			t ?? window,
		);
	}
	async QueryXboxDriverInstallState() {
		await SteamClient.Input?.GetXboxDriverInstallState().then(
			(e) => (this.m_strXboxInstallState = e?.strState),
		);
	}
	get XboxDriverInstallState() {
		return this.m_strXboxInstallState;
	}
	GetConsolidatedControllerType(e) {
		switch (e) {
			case 31:
			case 32:
			case 46: {
				return "Xbox";
			}
			case 33:
			case 34:
			case 45:
			case 48: {
				return "PlayStation";
			}
			case 39:
			case 40:
			case 41:
			case 38:
			case 42: {
				return "NintendoSwitch";
			}
			case 2:
			case 3:
			case 4:
			case 49: {
				return "Steam";
			}
			default: {
				return "Generic";
			}
		}
	}
	BControllerInMask(e, t) {
		switch (e) {
			case "Xbox": {
				return (t & 2) != 0;
			}
			case "PlayStation": {
				return (t & 1) != 0;
			}
			case "NintendoSwitch": {
				return (t & 8) != 0;
			}
			case "Generic": {
				return (t & 4) != 0;
			}
			case "Steam": {
				return true;
			}
			default: {
				return false;
			}
		}
	}
	BSteamInputEnabledForAnyConnectedController(e, t) {
		return (
			this.m_controllerList.length != 0 &&
			this.m_controllerList.some((r) => {
				if (r.bRemoteDevice) {
					return true;
				}
				const n = this.GetConsolidatedControllerType(r.eControllerType);
				return (
					n == "Steam" ||
					(t.eEnableThirdPartyControllerConfiguration != 0 &&
						(!!this.BControllerInMask(n, t.eSteamInputControllerMask) ||
							!!this.BControllerInMask(n, e)))
				);
			})
		);
	}
	GetControllerMappingString(e) {
		return SteamClient.Input.GetControllerMappingString(e);
	}
	SetControllerMappingString(e) {
		SteamClient.Input.SetControllerMappingString(e);
	}
	ShowDualSenseUpdateNotice(e) {
		this.m_strDualSenseUpdateProduct = e;
		this.m_bDualSenseUpdateNoticeVisible = true;
	}
	HideDualSenseUpdateNotice() {
		this.m_bDualSenseUpdateNoticeVisible = false;
	}
	get bDualSenseUpdateNoticeVisible() {
		return this.m_bDualSenseUpdateNoticeVisible;
	}
	get DualSenseUpdateProduct() {
		return this.m_strDualSenseUpdateProduct;
	}
	BHasPSController() {
		let e = false;
		let t = false;
		Fd.Get()
			.GetControllers()
			.forEach((r) => {
				if (r.eControllerType == 34) {
					e = true;
				} else if (r.eControllerType == 45 || r.eControllerType == 48) {
					t = true;
				}
			});
		return [e, t];
	}
	BPSControllerSupportMismatch(e, t) {
		return this.m_controllerList.some((r) => {
			switch (r.eControllerType) {
				case 34: {
					return (
						(!t && !!r.bBluetooth && !e.BHasStoreCategory(55)) ||
						!e.BHasStoreCategory(55)
					);
				}
				case 45:
				case 48: {
					return (
						(!t && !!r.bBluetooth && !e.BHasStoreCategory(58)) ||
						!e.BHasStoreCategory(57)
					);
				}
				default: {
					return false;
				}
			}
		});
	}
}
export function A9() {
	const e = _g(50);
	const [t, r] = i.useState(() => Fd.Get().ControllerSupportFlowState);
	hL(Fd.Get().ControllerDeviceSupportStateCallback, (t) => e(() => r(t)));
	return t;
}
export function tk() {
	return q3(() => Fd.Get().GetControllers());
}
export function _Y() {
	return q3(() => Fd.Get().GetControllers()?.length > 0);
}
export function as(e) {
	return q3(() => Fd.Get().GetController(e));
}
export function kS(e) {
	t = (t) => (t.vecMacAddrs?.indexOf(e) ?? -1) >= 0;
	return q3(() => Fd.Get().GetControllers().find(t));
	var t;
}
export function wy(e) {
	return q3(() => Fd.Get().GetControllersSorted(e));
}
export function Sz() {
	return q3(() => Fd.Get().GetUnboundControllers());
}
export function q_(e) {
	return -e - 1;
}
export function Id(e) {
	return -1 - e;
}
export function Lb() {
	return [
		q3(() => Fd.Get().bDualSenseUpdateNoticeVisible),
		i.useCallback(() => {
			Fd.Get().HideDualSenseUpdateNotice();
		}, []),
	];
}
export function RS() {
	return q3(() => Fd.Get().BHasPSController());
}
export function g7(e, t) {
	const [r] = d.rV.GetClientSetting("controller_generic_support");
	const [n] = d.rV.GetClientSetting("controller_xbox_support");
	const [i] = d.rV.GetClientSetting("controller_ps_support");
	const [a] = d.rV.GetClientSetting("controller_switch_support");
	let s = r ? 4 : 0;
	s += n ? 2 : 0;
	if (i == 2 || (i == 1 && Fd.Get().BPSControllerSupportMismatch(e, false))) {
		s += 1;
	}
	s += a ? 8 : 0;
	return Fd.Get().BSteamInputEnabledForAnyConnectedController(s, t);
}
function Q(e, t, r) {
	i.useEffect(() => {
		const r = {
			controller_index: e,
			flow_mode: t,
		};
		R.StartControllerStateFlow(r);
		return () => {
			const r = {
				controller_index: e,
				flow_mode: t,
			};
			R.EndControllerStateFlow(r);
		};
	}, [e, t]);
	return q3(() => r(e));
}
export function Rh(e) {
	return Q(
		e,
		2,
		(e) => Fd.Get().ControllerFeedStates()[e].m_controllerGyroState,
	);
}
export function Aq(e) {
	return Q(
		e,
		3,
		(e) => Fd.Get().ControllerFeedStates()[e].m_controllerGyroSpeedState,
	);
}
export function hy(e) {
	return Q(
		e,
		4,
		(e) =>
			Fd.Get().ControllerFeedStates()[e].m_controllerGyroAccelerometerState,
	);
}
export function nF(e) {
	return Q(
		e,
		5,
		(e) => Fd.Get().ControllerFeedStates()[e].m_controllerGyroCalibrationState,
	);
}
Cg([s.sH], Fd.prototype, "m_unboundControllerList", undefined);
Cg([s.sH], Fd.prototype, "m_controllerList", undefined);
Cg([s.sH], Fd.prototype, "m_controllerSupportState", undefined);
Cg([s.sH], Fd.prototype, "m_controllerDeviceState", undefined);
Cg([s.sH], Fd.prototype, "m_GyroCalibrationActive", undefined);
Cg([s.sH], Fd.prototype, "m_steamControllerDonglePresent", undefined);
Cg([s.sH], Fd.prototype, "m_strXboxInstallState", undefined);
Cg([s.sH], Fd.prototype, "m_bDualSenseUpdateNoticeVisible", undefined);
Cg([s.sH], Fd.prototype, "m_controllerFeedStates", undefined);
Cg([a.oI], Fd.prototype, "OnUnboundControllerListChanged", null);
Cg([a.oI], Fd.prototype, "OnControllerListChanged", null);
Cg([a.oI], Fd.prototype, "OnControllerBatteryChange", null);
Cg([a.oI], Fd.prototype, "ProcessSupportFlowUpdates", null);
Cg([a.oI], Fd.prototype, "fnUpdateControllerState", null);
Cg([s.XI.bound], Fd.prototype, "fnOnRawButtonStateChanged", null);
Cg([s.XI.bound], Fd.prototype, "fnOnAxesStateChanged", null);
Cg([s.XI.bound], Fd.prototype, "fnOnGyroQuaternionStateChanged", null);
Cg([s.XI.bound], Fd.prototype, "fnOnGyroSpeedStateChanged", null);
Cg([s.XI.bound], Fd.prototype, "fnOnGyroAccelerometerStateChanged", null);
Cg([s.XI.bound], Fd.prototype, "fnOnGyroCalibrationStateChanged", null);
Cg([a.oI], Fd.prototype, "fnGyroCalibrationDone", null);
Cg([a.oI], Fd.prototype, "ShowDualSenseUpdateNotice", null);
