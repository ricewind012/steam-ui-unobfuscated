import n from "./58663.js";
import i from "./48307.js";
const n_Message = n.Message;
class s extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!s.prototype.appid) {
			i.Sg(s.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		s.sm_m ||= {
			proto: s,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				is_allowed: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "ParentalApp";
	}
}
export class lx extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!lx.prototype.allowed_time_windows) {
			i.Sg(lx.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		lx.sm_m ||= {
			proto: lx,
			fields: {
				allowed_time_windows: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				allowed_daily_minutes: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return lx.sm_m;
	}
	static MBF() {
		lx.sm_mbf ||= i.w0(lx.M());
		return lx.sm_mbf;
	}
	toObject(e = false) {
		return lx.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(lx.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(lx.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new lx();
		return lx.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(lx.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		lx.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(lx.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		lx.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ParentalPlaytimeDay";
	}
}
class l extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.apply_playtime_restrictions) {
			i.Sg(l.M());
		}
		n_Message.initialize(this, e, 0, -1, [15], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		l.sm_m ||= {
			proto: l,
			fields: {
				apply_playtime_restrictions: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				playtime_days: {
					n: 15,
					c: lx,
					r: true,
					q: true,
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
		return "ParentalPlaytimeRestrictions";
	}
}
export class $A extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$A.prototype.restrictions) {
			i.Sg($A.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$A.sm_m ||= {
			proto: $A,
			fields: {
				restrictions: {
					n: 1,
					c: lx,
				},
				rtime_expires: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return $A.sm_m;
	}
	static MBF() {
		$A.sm_mbf ||= i.w0($A.M());
		return $A.sm_mbf;
	}
	toObject(e = false) {
		return $A.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT($A.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq($A.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new $A();
		return $A.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj($A.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		$A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0($A.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		$A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ParentalTemporaryPlaytimeRestrictions";
	}
}
export class Zc extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Zc.prototype.steamid) {
			i.Sg(Zc.M());
		}
		n_Message.initialize(this, e, 0, -1, [4, 5, 17, 18, 19], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Zc.sm_m ||= {
			proto: Zc,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				applist_base_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				applist_base_description: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				applist_base: {
					n: 4,
					c: s,
					r: true,
					q: true,
				},
				applist_custom: {
					n: 5,
					c: s,
					r: true,
					q: true,
				},
				passwordhashtype: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				salt: {
					n: 7,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				passwordhash: {
					n: 8,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				is_enabled: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enabled_features: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				recovery_email: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_site_license_lock: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				temporary_enabled_features: {
					n: 13,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime_temporary_feature_expiration: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				playtime_restrictions: {
					n: 15,
					c: l,
				},
				temporary_playtime_restrictions: {
					n: 16,
					c: $A,
				},
				excluded_store_content_descriptors: {
					n: 17,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				excluded_community_content_descriptors: {
					n: 18,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				utility_appids: {
					n: 19,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return Zc.sm_m;
	}
	static MBF() {
		Zc.sm_mbf ||= i.w0(Zc.M());
		return Zc.sm_mbf;
	}
	toObject(e = false) {
		return Zc.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Zc.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Zc.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Zc();
		return Zc.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Zc.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Zc.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Zc.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Zc.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ParentalSettings";
	}
}
export class Nh extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Nh.prototype.requestid) {
			i.Sg(Nh.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Nh.sm_m ||= {
			proto: Nh,
			fields: {
				requestid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				family_groupid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				steamid: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				features: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_requested: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				approved: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				steamid_responder: {
					n: 7,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				time_responded: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Nh.sm_m;
	}
	static MBF() {
		Nh.sm_mbf ||= i.w0(Nh.M());
		return Nh.sm_mbf;
	}
	toObject(e = false) {
		return Nh.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Nh.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Nh.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Nh();
		return Nh.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Nh.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Nh.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Nh.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Nh.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ParentalFeatureRequest";
	}
}
export class kt extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!kt.prototype.requestid) {
			i.Sg(kt.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		kt.sm_m ||= {
			proto: kt,
			fields: {
				requestid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				family_groupid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				steamid: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				current_playtime_restrictions: {
					n: 4,
					c: lx,
				},
				time_expires: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_requested: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				approved: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				steamid_responder: {
					n: 8,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				time_responded: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				restrictions_approved: {
					n: 10,
					c: $A,
				},
			},
		};
		return kt.sm_m;
	}
	static MBF() {
		kt.sm_mbf ||= i.w0(kt.M());
		return kt.sm_mbf;
	}
	toObject(e = false) {
		return kt.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(kt.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(kt.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new kt();
		return kt.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(kt.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		kt.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(kt.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		kt.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "ParentalPlaytimeRequest";
	}
}
