var r = require(/*webcrack:missing*/ "./58663.js");
var i = require("./48307.js");
const s = r.Message;
export class kK extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!kK.prototype.v4) {
			i.Sg(kK.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		kK.sm_m ||= {
			proto: kK,
			fields: {
				v4: {
					n: 1,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				v6: {
					n: 2,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
			},
		};
		return kK.sm_m;
	}
	static MBF() {
		kK.sm_mbf ||= i.w0(kK.M());
		return kK.sm_mbf;
	}
	toObject(e = false) {
		return kK.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(kK.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(kK.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new kK();
		return kK.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(kK.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		kK.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(kK.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		kK.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgIPAddress";
	}
}
class a extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!a.prototype.dst_gcid_queue) {
			i.Sg(a.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		a.sm_m ||= {
			proto: a,
			fields: {
				dst_gcid_queue: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				dst_gc_dir_index: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return a.sm_m;
	}
	static MBF() {
		a.sm_mbf ||= i.w0(a.M());
		return a.sm_mbf;
	}
	toObject(e = false) {
		return a.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(a.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(a.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new a();
		return a.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(a.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		a.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(a.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		a.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgGCRoutingProtoBufHeader";
	}
}
export class LH extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!LH.prototype.steamid) {
			i.Sg(LH.M());
		}
		s.initialize(this, e, 0, -1, [27, 41], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		LH.sm_m ||= {
			proto: LH,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				client_sessionid: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				routing_appid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				jobid_source: {
					n: 10,
					d: "18446744073709551615",
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				jobid_target: {
					n: 11,
					d: "18446744073709551615",
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				target_job_name: {
					n: 12,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				seq_num: {
					n: 24,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				eresult: {
					n: 13,
					d: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				error_message: {
					n: 14,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				ip: {
					n: 15,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ip_v6: {
					n: 29,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				auth_account_flags: {
					n: 16,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				token_source: {
					n: 22,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				admin_spoofing_user: {
					n: 23,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				transport_error: {
					n: 17,
					d: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				messageid: {
					n: 18,
					d: "18446744073709551615",
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				publisher_group_id: {
					n: 19,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				sysid: {
					n: 20,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				trace_tag: {
					n: 21,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				webapi_key_id: {
					n: 25,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				is_from_external_source: {
					n: 26,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				forward_to_sysid: {
					n: 27,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				cm_sysid: {
					n: 28,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				launcher_type: {
					n: 31,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				realm: {
					n: 32,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				timeout_ms: {
					n: 33,
					d: -1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				debug_source: {
					n: 34,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				debug_source_string_index: {
					n: 35,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				token_id: {
					n: 36,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				routing_gc: {
					n: 37,
					c: a,
				},
				session_disposition: {
					n: 38,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				wg_token: {
					n: 39,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				webui_auth_key: {
					n: 40,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				exclude_client_sessionids: {
					n: 41,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
				},
				admin_request_spoofing_steamid: {
					n: 43,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return LH.sm_m;
	}
	static MBF() {
		LH.sm_mbf ||= i.w0(LH.M());
		return LH.sm_mbf;
	}
	toObject(e = false) {
		return LH.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(LH.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(LH.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new LH();
		return LH.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(LH.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		LH.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(LH.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		LH.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgProtoBufHeader";
	}
}
export class gF extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!gF.prototype.size_unzipped) {
			i.Sg(gF.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		gF.sm_m ||= {
			proto: gF,
			fields: {
				size_unzipped: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				message_body: {
					n: 2,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
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
		let t = new r.BinaryReader(e);
		let n = new gF();
		return gF.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(gF.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		gF.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(gF.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		gF.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgMulti";
	}
}
export class TT extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!TT.prototype.estate) {
			i.Sg(TT.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		TT.sm_m ||= {
			proto: TT,
			fields: {
				estate: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				eresult: {
					n: 2,
					d: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steamid: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				gameid: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				h_steam_pipe: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ticket_crc: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ticket: {
					n: 7,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				server_secret: {
					n: 8,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				ticket_type: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return TT.sm_m;
	}
	static MBF() {
		TT.sm_mbf ||= i.w0(TT.M());
		return TT.sm_mbf;
	}
	toObject(e = false) {
		return TT.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(TT.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(TT.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new TT();
		return TT.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(TT.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		TT.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(TT.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		TT.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgAuthTicket";
	}
}
export class WV extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!WV.prototype.appid) {
			i.Sg(WV.M());
		}
		s.initialize(this, e, 0, -1, [17], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		WV.sm_m ||= {
			proto: WV,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				tool: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				demo: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				media: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				community_visible_stats: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				friendly_name: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				propagation: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				has_adult_content: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_visible_in_steam_china: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				app_type: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				has_adult_content_sex: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				has_adult_content_violence: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				content_descriptorids: {
					n: 17,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return WV.sm_m;
	}
	static MBF() {
		WV.sm_mbf ||= i.w0(WV.M());
		return WV.sm_mbf;
	}
	toObject(e = false) {
		return WV.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(WV.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(WV.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new WV();
		return WV.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(WV.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		WV.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(WV.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		WV.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CCDDBAppDetailCommon";
	}
}
class d extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.clanid) {
			i.Sg(d.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				clanid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				event_gid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				announcement_gid: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				rtime_start: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime_end: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				priority_score: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				type: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				clamp_range_slot: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime32_last_modified: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		let t = new r.BinaryReader(e);
		let n = new d();
		return d.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(d.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(d.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanEventUserNewsTuple";
	}
}
export class h2 extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h2.prototype.rtime_before) {
			i.Sg(h2.M());
		}
		s.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h2.sm_m ||= {
			proto: h2,
			fields: {
				rtime_before: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime_after: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				qualified: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				events: {
					n: 4,
					c: d,
					r: true,
					q: true,
				},
			},
		};
		return h2.sm_m;
	}
	static MBF() {
		h2.sm_mbf ||= i.w0(h2.M());
		return h2.sm_mbf;
	}
	toObject(e = false) {
		return h2.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(h2.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(h2.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new h2();
		return h2.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(h2.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		h2.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(h2.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		h2.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CClanMatchEventByRange";
	}
}
export class ke extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ke.prototype.packageid) {
			i.Sg(ke.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ke.sm_m ||= {
			proto: ke,
			fields: {
				packageid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				reservation_state: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				queue_position: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				total_queue_size: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				reservation_country_code: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				expired: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				time_expires: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_reserved: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime_estimated_notification: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				notificaton_token: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return ke.sm_m;
	}
	static MBF() {
		ke.sm_mbf ||= i.w0(ke.M());
		return ke.sm_mbf;
	}
	toObject(e = false) {
		return ke.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ke.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ke.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new ke();
		return ke.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ke.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ke.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPackageReservationStatus";
	}
}
export class u2 extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u2.prototype.content_descriptors_to_exclude) {
			i.Sg(u2.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u2.sm_m ||= {
			proto: u2,
			fields: {
				content_descriptors_to_exclude: {
					n: 1,
					c: f,
					r: true,
					q: true,
				},
			},
		};
		return u2.sm_m;
	}
	static MBF() {
		u2.sm_mbf ||= i.w0(u2.M());
		return u2.sm_mbf;
	}
	toObject(e = false) {
		return u2.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(u2.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(u2.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new u2();
		return u2.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(u2.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		u2.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(u2.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		u2.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "UserContentDescriptorPreferences";
	}
}
class f extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.content_descriptorid) {
			i.Sg(f.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				content_descriptorid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				timestamp_added: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		let t = new r.BinaryReader(e);
		let n = new f();
		return f.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(f.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "UserContentDescriptorPreferences_ContentDescriptor";
	}
}
