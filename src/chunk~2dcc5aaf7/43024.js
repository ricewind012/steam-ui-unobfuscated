var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
const a = n.Message;
export class A_ extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A_.prototype.appid) {
			i.Sg(A_.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A_.sm_m ||= {
			proto: A_,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return A_.sm_m;
	}
	static MBF() {
		A_.sm_mbf ||= i.w0(A_.M());
		return A_.sm_mbf;
	}
	toObject(e = false) {
		return A_.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(A_.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(A_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new A_();
		return A_.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(A_.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		A_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(A_.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		A_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationCloudSyncFailure";
	}
}
export class W9 extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W9.prototype.appid) {
			i.Sg(W9.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W9.sm_m ||= {
			proto: W9,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return W9.sm_m;
	}
	static MBF() {
		W9.sm_mbf ||= i.w0(W9.M());
		return W9.sm_mbf;
	}
	toObject(e = false) {
		return W9.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(W9.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(W9.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new W9();
		return W9.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(W9.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		W9.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(W9.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		W9.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationCloudSyncConflict";
	}
}
export class sS extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!sS.prototype.screenshot_handle) {
			i.Sg(sS.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		sS.sm_m ||= {
			proto: sS,
			fields: {
				screenshot_handle: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				description: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				local_url: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return sS.sm_m;
	}
	static MBF() {
		sS.sm_mbf ||= i.w0(sS.M());
		return sS.sm_mbf;
	}
	toObject(e = false) {
		return sS.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(sS.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(sS.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new sS();
		return sS.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(sS.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		sS.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(sS.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		sS.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationScreenshot";
	}
}
export class Vn extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Vn.prototype.appid) {
			i.Sg(Vn.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Vn.sm_m ||= {
			proto: Vn,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				dlc_appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Vn.sm_m;
	}
	static MBF() {
		Vn.sm_mbf ||= i.w0(Vn.M());
		return Vn.sm_mbf;
	}
	toObject(e = false) {
		return Vn.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Vn.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Vn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Vn();
		return Vn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Vn.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Vn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Vn.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Vn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationDownloadCompleted";
	}
}
export class H1 extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H1.prototype.new_invite_count) {
			i.Sg(H1.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H1.sm_m ||= {
			proto: H1,
			fields: {
				new_invite_count: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return H1.sm_m;
	}
	static MBF() {
		H1.sm_mbf ||= i.w0(H1.M());
		return H1.sm_mbf;
	}
	toObject(e = false) {
		return H1.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(H1.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(H1.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new H1();
		return H1.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(H1.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		H1.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(H1.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		H1.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationFriendInviteRollup";
	}
}
export class DQ extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!DQ.prototype.steamid) {
			i.Sg(DQ.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		DQ.sm_m ||= {
			proto: DQ,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				game_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return DQ.sm_m;
	}
	static MBF() {
		DQ.sm_mbf ||= i.w0(DQ.M());
		return DQ.sm_mbf;
	}
	toObject(e = false) {
		return DQ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(DQ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(DQ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new DQ();
		return DQ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(DQ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		DQ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(DQ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		DQ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationFriendInGame";
	}
}
export class jn extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!jn.prototype.steamid) {
			i.Sg(jn.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		jn.sm_m ||= {
			proto: jn,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return jn.sm_m;
	}
	static MBF() {
		jn.sm_mbf ||= i.w0(jn.M());
		return jn.sm_mbf;
	}
	toObject(e = false) {
		return jn.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(jn.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(jn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new jn();
		return jn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(jn.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		jn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(jn.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		jn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationFriendOnline";
	}
}
export class R8 extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R8.prototype.achievement_id) {
			i.Sg(R8.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R8.sm_m ||= {
			proto: R8,
			fields: {
				achievement_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				description: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				image_url: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				achieved: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				rtime_unlocked: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				min_progress: {
					n: 8,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				current_progress: {
					n: 9,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				max_progress: {
					n: 10,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				global_achieved_pct: {
					n: 11,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
			},
		};
		return R8.sm_m;
	}
	static MBF() {
		R8.sm_mbf ||= i.w0(R8.M());
		return R8.sm_mbf;
	}
	toObject(e = false) {
		return R8.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(R8.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(R8.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new R8();
		return R8.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(R8.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		R8.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(R8.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		R8.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationAchievement";
	}
}
export class bX extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!bX.prototype.pct_remaining) {
			i.Sg(bX.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		bX.sm_m ||= {
			proto: bX,
			fields: {
				pct_remaining: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
			},
		};
		return bX.sm_m;
	}
	static MBF() {
		bX.sm_mbf ||= i.w0(bX.M());
		return bX.sm_mbf;
	}
	toObject(e = false) {
		return bX.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(bX.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(bX.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new bX();
		return bX.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(bX.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		bX.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(bX.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		bX.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationLowBattery";
	}
}
export class M extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.type) {
			i.Sg(M.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		var e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(M.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationSystemUpdate";
	}
}
export class zz extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!zz.prototype.tag) {
			i.Sg(zz.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		zz.sm_m ||= {
			proto: zz,
			fields: {
				tag: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				title: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				body: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				notificationid: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				response_steamurl: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return zz.sm_m;
	}
	static MBF() {
		zz.sm_mbf ||= i.w0(zz.M());
		return zz.sm_mbf;
	}
	toObject(e = false) {
		return zz.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(zz.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(zz.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new zz();
		return zz.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(zz.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		zz.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(zz.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		zz.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationFriendMessage";
	}
}
export class kE extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!kE.prototype.tag) {
			i.Sg(kE.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		kE.sm_m ||= {
			proto: kE,
			fields: {
				tag: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamid_sender: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				chat_group_id: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				chat_id: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				title: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				body: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				rawbody: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				notificationid: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return kE.sm_m;
	}
	static MBF() {
		kE.sm_mbf ||= i.w0(kE.M());
		return kE.sm_mbf;
	}
	toObject(e = false) {
		return kE.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(kE.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(kE.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new kE();
		return kE.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(kE.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		kE.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(kE.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		kE.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationGroupChatMessage";
	}
}
export class zY extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!zY.prototype.accountid_owner) {
			i.Sg(zY.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		zY.sm_m ||= {
			proto: zY,
			fields: {
				accountid_owner: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				authorized: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return zY.sm_m;
	}
	static MBF() {
		zY.sm_mbf ||= i.w0(zY.M());
		return zY.sm_mbf;
	}
	toObject(e = false) {
		return zY.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(zY.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(zY.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new zY();
		return zY.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(zY.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		zY.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(zY.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		zY.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationFamilySharingDeviceAuthorizationChanged";
	}
}
export class gF extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!gF.prototype.accountid_owner) {
			i.Sg(gF.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		gF.sm_m ||= {
			proto: gF,
			fields: {
				accountid_owner: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				seconds_remaining: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return gF.sm_m;
	}
	static MBF() {
		gF.sm_mbf ||= i.w0(gF.M());
		return gF.sm_mbf;
	}
	toObject(e = false) {
		return gF.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(gF.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(gF.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new gF();
		return gF.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(gF.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		gF.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(gF.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		gF.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationFamilySharingStopPlaying";
	}
}
export class mu extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!mu.prototype.accountid_owner) {
			i.Sg(mu.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		mu.sm_m ||= {
			proto: mu,
			fields: {
				accountid_owner: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return mu.sm_m;
	}
	static MBF() {
		mu.sm_mbf ||= i.w0(mu.M());
		return mu.sm_mbf;
	}
	toObject(e = false) {
		return mu.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(mu.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(mu.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new mu();
		return mu.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(mu.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		mu.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(mu.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		mu.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationFamilySharingLibraryAvailable";
	}
}
export class qr extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qr.prototype.steamid) {
			i.Sg(qr.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qr.sm_m ||= {
			proto: qr,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return qr.sm_m;
	}
	static MBF() {
		qr.sm_mbf ||= i.w0(qr.M());
		return qr.sm_mbf;
	}
	toObject(e = false) {
		return qr.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qr.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qr();
		return qr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qr.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		qr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qr.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		qr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationIncomingVoiceChat";
	}
}
export class X$ extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		a.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return X$.toObject(e, this);
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
		return new X$();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new X$();
		return X$.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		X$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		X$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationClaimSteamDeckRewards";
	}
}
export class cq extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!cq.prototype.new_item_count) {
			i.Sg(cq.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		cq.sm_m ||= {
			proto: cq,
			fields: {
				new_item_count: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				new_backpack_items: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return cq.sm_m;
	}
	static MBF() {
		cq.sm_mbf ||= i.w0(cq.M());
		return cq.sm_mbf;
	}
	toObject(e = false) {
		return cq.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(cq.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(cq.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new cq();
		return cq.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(cq.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		cq.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(cq.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		cq.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationItemAnnouncement";
	}
}
export class fU extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		a.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return fU.toObject(e, this);
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
		return new fU();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new fU();
		return fU.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		fU.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		fU.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationHardwareSurveyPending";
	}
}
export class jv extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!jv.prototype.folder_index) {
			i.Sg(jv.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		jv.sm_m ||= {
			proto: jv,
			fields: {
				folder_index: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return jv.sm_m;
	}
	static MBF() {
		jv.sm_mbf ||= i.w0(jv.M());
		return jv.sm_mbf;
	}
	toObject(e = false) {
		return jv.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(jv.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(jv.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new jv();
		return jv.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(jv.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		jv.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(jv.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		jv.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationLowDiskSpace";
	}
}
export class DO extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!DO.prototype.temperature) {
			i.Sg(DO.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		DO.sm_m ||= {
			proto: DO,
			fields: {
				temperature: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				notification_type: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return DO.sm_m;
	}
	static MBF() {
		DO.sm_mbf ||= i.w0(DO.M());
		return DO.sm_mbf;
	}
	toObject(e = false) {
		return DO.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(DO.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(DO.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new DO();
		return DO.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(DO.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		DO.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(DO.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		DO.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationBatteryTemperature";
	}
}
export class TP extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		a.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return TP.toObject(e, this);
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
		return new TP();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new TP();
		return TP.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		TP.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		TP.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationDockUnsupportedFirmware";
	}
}
export class Bn extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Bn.prototype.controller_index) {
			i.Sg(Bn.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Bn.sm_m ||= {
			proto: Bn,
			fields: {
				controller_index: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return Bn.sm_m;
	}
	static MBF() {
		Bn.sm_mbf ||= i.w0(Bn.M());
		return Bn.sm_mbf;
	}
	toObject(e = false) {
		return Bn.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Bn.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Bn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Bn();
		return Bn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Bn.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Bn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Bn.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Bn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationCannotReadControllerGuideButton";
	}
}
export class d6 extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		a.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return d6.toObject(e, this);
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
		return new d6();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new d6();
		return d6.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		d6.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		d6.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationOverlaySplashScreen";
	}
}
export class Mr extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Mr.prototype.broadcast_permission) {
			i.Sg(Mr.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Mr.sm_m ||= {
			proto: Mr,
			fields: {
				broadcast_permission: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return Mr.sm_m;
	}
	static MBF() {
		Mr.sm_mbf ||= i.w0(Mr.M());
		return Mr.sm_mbf;
	}
	toObject(e = false) {
		return Mr.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Mr.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Mr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Mr();
		return Mr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Mr.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Mr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Mr.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Mr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationBroadcastAvailableToWatch";
	}
}
export class $V extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$V.prototype.appid) {
			i.Sg($V.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$V.sm_m ||= {
			proto: $V,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				icon: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				offline: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				allowed_seconds: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				played_seconds: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return $V.sm_m;
	}
	static MBF() {
		$V.sm_mbf ||= i.w0($V.M());
		return $V.sm_mbf;
	}
	toObject(e = false) {
		return $V.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT($V.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq($V.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new $V();
		return $V.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj($V.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		$V.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0($V.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		$V.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationTimedTrialRemaining";
	}
}
export class oS extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		a.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return oS.toObject(e, this);
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
		return new oS();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new oS();
		return oS.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		oS.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		oS.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationLoginRefresh";
	}
}
export class ol extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		a.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ol.toObject(e, this);
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
		return new ol();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ol();
		return ol.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ol.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ol.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationTimerExpired";
	}
}
export class Yn extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Yn.prototype.controller_index) {
			i.Sg(Yn.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Yn.sm_m ||= {
			proto: Yn,
			fields: {
				controller_index: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				action_set_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Yn.sm_m;
	}
	static MBF() {
		Yn.sm_mbf ||= i.w0(Yn.M());
		return Yn.sm_mbf;
	}
	toObject(e = false) {
		return Yn.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Yn.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Yn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Yn();
		return Yn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Yn.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Yn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Yn.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Yn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationSteamInputActionSetChanged";
	}
}
export class Vz extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Vz.prototype.machine) {
			i.Sg(Vz.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Vz.sm_m ||= {
			proto: Vz,
			fields: {
				machine: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				connected: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Vz.sm_m;
	}
	static MBF() {
		Vz.sm_mbf ||= i.w0(Vz.M());
		return Vz.sm_mbf;
	}
	toObject(e = false) {
		return Vz.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Vz.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Vz.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Vz();
		return Vz.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Vz.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Vz.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Vz.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Vz.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationRemoteClientConnection";
	}
}
export class dY extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!dY.prototype.machine) {
			i.Sg(dY.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		dY.sm_m ||= {
			proto: dY,
			fields: {
				machine: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return dY.sm_m;
	}
	static MBF() {
		dY.sm_mbf ||= i.w0(dY.M());
		return dY.sm_mbf;
	}
	toObject(e = false) {
		return dY.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(dY.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(dY.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new dY();
		return dY.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(dY.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		dY.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(dY.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		dY.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationRemoteClientStartStream";
	}
}
export class R0 extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R0.prototype.hostname) {
			i.Sg(R0.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R0.sm_m ||= {
			proto: R0,
			fields: {
				hostname: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				machine: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				connected: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return R0.sm_m;
	}
	static MBF() {
		R0.sm_mbf ||= i.w0(R0.M());
		return R0.sm_mbf;
	}
	toObject(e = false) {
		return R0.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(R0.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(R0.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new R0();
		return R0.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(R0.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		R0.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(R0.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		R0.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationStreamingClientConnection";
	}
}
export class Fn extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Fn.prototype.type) {
			i.Sg(Fn.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Fn.sm_m ||= {
			proto: Fn,
			fields: {
				type: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				playtime_remaining: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Fn.sm_m;
	}
	static MBF() {
		Fn.sm_mbf ||= i.w0(Fn.M());
		return Fn.sm_mbf;
	}
	toObject(e = false) {
		return Fn.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Fn.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Fn.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Fn();
		return Fn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Fn.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Fn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Fn.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Fn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationPlaytimeWarning";
	}
}
export class h3 extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h3.prototype.game_id) {
			i.Sg(h3.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h3.sm_m ||= {
			proto: h3,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				error_type: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return h3.sm_m;
	}
	static MBF() {
		h3.sm_mbf ||= i.w0(h3.M());
		return h3.sm_mbf;
	}
	toObject(e = false) {
		return h3.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(h3.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(h3.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new h3();
		return h3.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(h3.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		h3.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(h3.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		h3.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationGameRecordingError";
	}
}
export class FE extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!FE.prototype.game_id) {
			i.Sg(FE.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		FE.sm_m ||= {
			proto: FE,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return FE.sm_m;
	}
	static MBF() {
		FE.sm_mbf ||= i.w0(FE.M());
		return FE.sm_mbf;
	}
	toObject(e = false) {
		return FE.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(FE.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(FE.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new FE();
		return FE.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(FE.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		FE.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(FE.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		FE.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationGameRecordingStart";
	}
}
export class lr extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!lr.prototype.game_id) {
			i.Sg(lr.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		lr.sm_m ||= {
			proto: lr,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				clip_id: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				duration_secs: {
					n: 3,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
			},
		};
		return lr.sm_m;
	}
	static MBF() {
		lr.sm_mbf ||= i.w0(lr.M());
		return lr.sm_mbf;
	}
	toObject(e = false) {
		return lr.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(lr.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(lr.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new lr();
		return lr.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(lr.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		lr.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(lr.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		lr.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationGameRecordingStop";
	}
}
export class K_ extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K_.prototype.game_id) {
			i.Sg(K_.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		K_.sm_m ||= {
			proto: K_,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return K_.sm_m;
	}
	static MBF() {
		K_.sm_mbf ||= i.w0(K_.M());
		return K_.sm_mbf;
	}
	toObject(e = false) {
		return K_.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(K_.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(K_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new K_();
		return K_.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(K_.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		K_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(K_.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		K_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationGameRecordingUserMarkerAdded";
	}
}
export class qt extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qt.prototype.game_id) {
			i.Sg(qt.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qt.sm_m ||= {
			proto: qt,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				clip_id: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				duration_secs: {
					n: 3,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
			},
		};
		return qt.sm_m;
	}
	static MBF() {
		qt.sm_mbf ||= i.w0(qt.M());
		return qt.sm_mbf;
	}
	toObject(e = false) {
		return qt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qt();
		return qt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qt.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		qt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qt.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		qt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClientNotificationGameRecordingInstantClip";
	}
}
