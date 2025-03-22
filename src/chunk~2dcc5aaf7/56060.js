var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
const a = n.Message;
export class S1 extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S1.prototype.type) {
			i.Sg(S1.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S1.sm_m ||= {
			proto: S1,
			fields: {
				type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return S1.sm_m;
	}
	static MBF() {
		S1.sm_mbf ||= i.w0(S1.M());
		return S1.sm_mbf;
	}
	toObject(e = false) {
		return S1.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(S1.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(S1.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new S1();
		return S1.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(S1.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		S1.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(S1.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		S1.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_Header";
	}
}
export class sR extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!sR.prototype.header) {
			i.Sg(sR.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		sR.sm_m ||= {
			proto: sR,
			fields: {
				header: {
					n: 1,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				payload: {
					n: 2,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
			},
		};
		return sR.sm_m;
	}
	static MBF() {
		sR.sm_mbf ||= i.w0(sR.M());
		return sR.sm_mbf;
	}
	toObject(e = false) {
		return sR.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(sR.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(sR.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new sR();
		return sR.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(sR.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		sR.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(sR.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		sR.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_VRGamepadUI_Message";
	}
}
export class OK extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!OK.prototype.section) {
			i.Sg(OK.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		OK.sm_m ||= {
			proto: OK,
			fields: {
				section: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				settings_key: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				bool: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				int: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				float: {
					n: 5,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				string: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return OK.sm_m;
	}
	static MBF() {
		OK.sm_mbf ||= i.w0(OK.M());
		return OK.sm_mbf;
	}
	toObject(e = false) {
		return OK.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(OK.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(OK.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new OK();
		return OK.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(OK.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		OK.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(OK.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		OK.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_Settings_SetValue_Request";
	}
}
