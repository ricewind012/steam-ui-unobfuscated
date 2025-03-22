var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./8573.js");
var o = require(/*webcrack:missing*/ "./58663.js");
var l = require(/*webcrack:missing*/ "./48307.js");
o.Message;
const c = o.Message;
class m extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.out_packets_per_sec_x10) {
			l.Sg(m.M());
		}
		c.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				out_packets_per_sec_x10: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				out_bytes_per_sec: {
					n: 2,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				in_packets_per_sec_x10: {
					n: 3,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				in_bytes_per_sec: {
					n: 4,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_ms: {
					n: 5,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				packets_dropped_pct: {
					n: 6,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				packets_weird_sequence_pct: {
					n: 7,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				peak_jitter_usec: {
					n: 8,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
			},
		};
		return m.sm_m;
	}
	static MBF() {
		m.sm_mbf ||= l.w0(m.M());
		return m.sm_mbf;
	}
	toObject(e = false) {
		return m.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(m.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(m.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new m();
		return m.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(m.MBF(), e, t);
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(m.M(), e, t);
	}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSteamDatagramLinkInstantaneousStats";
	}
}
class u extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.connected_seconds) {
			l.Sg(u.M());
		}
		c.initialize(this, e, 0, -1, [12, 13], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				connected_seconds: {
					n: 2,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				packets_sent: {
					n: 3,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				kb_sent: {
					n: 4,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				packets_recv: {
					n: 5,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				kb_recv: {
					n: 6,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				packets_recv_sequenced: {
					n: 7,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				packets_recv_dropped: {
					n: 8,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				packets_recv_out_of_order: {
					n: 9,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				packets_recv_out_of_order_corrected: {
					n: 15,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				packets_recv_duplicate: {
					n: 10,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				packets_recv_lurch: {
					n: 11,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				multipath_packets_recv_sequenced: {
					n: 12,
					r: true,
					q: true,
					br: l.qM.readUint64String,
					pbr: l.qM.readPackedUint64String,
					bw: l.gp.writeRepeatedUint64String,
				},
				multipath_packets_recv_later: {
					n: 13,
					r: true,
					q: true,
					br: l.qM.readUint64String,
					pbr: l.qM.readPackedUint64String,
					bw: l.gp.writeRepeatedUint64String,
				},
				multipath_send_enabled: {
					n: 14,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_histogram_100: {
					n: 21,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_histogram_99: {
					n: 22,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_histogram_97: {
					n: 23,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_histogram_95: {
					n: 24,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_histogram_90: {
					n: 25,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_histogram_75: {
					n: 26,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_histogram_50: {
					n: 27,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_histogram_1: {
					n: 28,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_histogram_dead: {
					n: 29,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_ntile_2nd: {
					n: 30,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_ntile_5th: {
					n: 31,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_ntile_25th: {
					n: 32,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				quality_ntile_50th: {
					n: 33,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_histogram_25: {
					n: 41,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_histogram_50: {
					n: 42,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_histogram_75: {
					n: 43,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_histogram_100: {
					n: 44,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_histogram_125: {
					n: 45,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_histogram_150: {
					n: 46,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_histogram_200: {
					n: 47,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_histogram_300: {
					n: 48,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_histogram_max: {
					n: 49,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_ntile_5th: {
					n: 50,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_ntile_50th: {
					n: 51,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_ntile_75th: {
					n: 52,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_ntile_95th: {
					n: 53,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_ntile_98th: {
					n: 54,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				jitter_histogram_negligible: {
					n: 61,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				jitter_histogram_1: {
					n: 62,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				jitter_histogram_2: {
					n: 63,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				jitter_histogram_5: {
					n: 64,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				jitter_histogram_10: {
					n: 65,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				jitter_histogram_20: {
					n: 66,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
			},
		};
		return u.sm_m;
	}
	static MBF() {
		u.sm_mbf ||= l.w0(u.M());
		return u.sm_mbf;
	}
	toObject(e = false) {
		return u.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(u.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(u.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new u();
		return u.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(u.MBF(), e, t);
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(u.M(), e, t);
	}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSteamDatagramLinkLifetimeStats";
	}
}
class d extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.instantaneous) {
			l.Sg(d.M());
		}
		c.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				instantaneous: {
					n: 1,
					c: m,
				},
				lifetime: {
					n: 2,
					c: u,
				},
			},
		};
		return d.sm_m;
	}
	static MBF() {
		d.sm_mbf ||= l.w0(d.M());
		return d.sm_mbf;
	}
	toObject(e = false) {
		return d.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(d.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(d.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new d();
		return d.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(d.MBF(), e, t);
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(d.M(), e, t);
	}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSteamDatagramConnectionQuality";
	}
}
class A extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.failure_reason_code) {
			l.Sg(A.M());
		}
		c.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				failure_reason_code: {
					n: 7,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				local_candidate_types: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				remote_candidate_types: {
					n: 2,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				initial_route_kind: {
					n: 3,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				initial_ping: {
					n: 4,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				initial_score: {
					n: 6,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				negotiation_ms: {
					n: 5,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				best_route_kind: {
					n: 16,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				best_ping: {
					n: 17,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				best_score: {
					n: 18,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				best_time: {
					n: 19,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				selected_seconds: {
					n: 12,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				user_settings: {
					n: 13,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ice_enable_var: {
					n: 14,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				local_candidate_types_allowed: {
					n: 15,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
			},
		};
		return A.sm_m;
	}
	static MBF() {
		A.sm_mbf ||= l.w0(A.M());
		return A.sm_mbf;
	}
	toObject(e = false) {
		return A.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(A.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(A.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new A();
		return A.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(A.MBF(), e, t);
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(A.M(), e, t);
	}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSteamNetworkingICESessionSummary";
	}
}
const p = o.Message;
class g extends p {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.initial_ping) {
			l.Sg(g.M());
		}
		p.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				initial_ping: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				initial_ping_front_local: {
					n: 2,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				initial_ping_front_remote: {
					n: 3,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				initial_score: {
					n: 4,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				initial_pop_local: {
					n: 5,
					br: l.qM.readFixed32,
					bw: l.gp.writeFixed32,
				},
				initial_pop_remote: {
					n: 6,
					br: l.qM.readFixed32,
					bw: l.gp.writeFixed32,
				},
				best_ping: {
					n: 11,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				best_ping_front_local: {
					n: 12,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				best_ping_front_remote: {
					n: 13,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				best_score: {
					n: 14,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				best_pop_local: {
					n: 15,
					br: l.qM.readFixed32,
					bw: l.gp.writeFixed32,
				},
				best_pop_remote: {
					n: 16,
					br: l.qM.readFixed32,
					bw: l.gp.writeFixed32,
				},
				best_time: {
					n: 17,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				negotiation_ms: {
					n: 7,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				selected_seconds: {
					n: 8,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= l.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(g.M(), e, t);
	}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSteamNetworkingP2PSDRRoutingSummary";
	}
}
class h extends p {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.ice) {
			l.Sg(h.M());
		}
		p.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				ice: {
					n: 2,
					c: A,
				},
				sdr: {
					n: 3,
					c: g,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= l.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(h.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(h.M(), e, t);
	}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgSteamDatagramP2PRoutingSummary";
	}
}
const C = o.Message;
class _ extends C {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.connection_key) {
			l.Sg(_.M());
		}
		C.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				connection_key: {
					n: 1,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				appid: {
					n: 2,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				connection_id_local: {
					n: 3,
					br: l.qM.readFixed32,
					bw: l.gp.writeFixed32,
				},
				identity_local: {
					n: 4,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				identity_remote: {
					n: 5,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				connection_state: {
					n: 10,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				start_time: {
					n: 12,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				close_time: {
					n: 13,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				close_reason: {
					n: 14,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				close_message: {
					n: 15,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				status_loc_token: {
					n: 16,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				transport_kind: {
					n: 20,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				sdrpopid_local: {
					n: 21,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				sdrpopid_remote: {
					n: 22,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				address_remote: {
					n: 23,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				p2p_routing: {
					n: 24,
					c: h,
				},
				ping_interior: {
					n: 25,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_remote_front: {
					n: 26,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ping_default_internet_route: {
					n: 27,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				e2e_quality_local: {
					n: 30,
					c: d,
				},
				e2e_quality_remote: {
					n: 31,
					c: d,
				},
				e2e_quality_remote_instantaneous_time: {
					n: 32,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				e2e_quality_remote_lifetime_time: {
					n: 33,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				front_quality_local: {
					n: 40,
					c: d,
				},
				front_quality_remote: {
					n: 41,
					c: d,
				},
				front_quality_remote_instantaneous_time: {
					n: 42,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				front_quality_remote_lifetime_time: {
					n: 43,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= l.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(_.M(), e, t);
	}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameNetworkingUI_ConnectionState";
	}
}
class f extends C {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.transport_kind) {
			l.Sg(f.M());
		}
		C.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				transport_kind: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				connection_state: {
					n: 8,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				sdrpop_local: {
					n: 2,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				sdrpop_remote: {
					n: 3,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
				ping_ms: {
					n: 4,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				packet_loss: {
					n: 5,
					br: l.qM.readFloat,
					bw: l.gp.writeFloat,
				},
				ping_default_internet_route: {
					n: 6,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ip_was_shared: {
					n: 7,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
			},
		};
		return f.sm_m;
	}
	static MBF() {
		f.sm_mbf ||= l.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(f.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(f.M(), e, t);
	}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameNetworkingUI_ConnectionSummary";
	}
}
class b extends C {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.appid) {
			l.Sg(b.M());
		}
		C.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				appid: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				ip_was_shared_with_friend: {
					n: 10,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				ip_was_shared_with_nonfriend: {
					n: 11,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				active_connections: {
					n: 20,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				main_cxn: {
					n: 30,
					c: f,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= l.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(b.M(), e, t);
	}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameNetworkingUI_AppSummary";
	}
}
var y;
export var WD;
var w = require(/*webcrack:missing*/ "./46108.js");
function B(e) {
	switch (e.connection_state()) {
		case y.Connecting:
		case y.FindingRoute:
		case y.Connected:
		case y.Linger:
			return true;
	}
	return false;
}
function v(e) {
	let t = parseInt(e.packets_recv_sequenced());
	if (!t) {
		return;
	}
	let r = parseInt(e.packets_recv_dropped());
	if (r != null) {
		return (r * 100) / (t + r);
	} else {
		return undefined;
	}
}
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.Connecting = 1)] = "Connecting";
	e[(e.FindingRoute = 2)] = "FindingRoute";
	e[(e.Connected = 3)] = "Connected";
	e[(e.ClosedByPeer = 4)] = "ClosedByPeer";
	e[(e.ProblemDetectedLocally = 5)] = "ProblemDetectedLocally";
	e[(e.Linger = -2)] = "Linger";
})((y ||= {}));
(function (e) {
	e[(e.k_ESteamNetTransport_Unknown = 0)] = "k_ESteamNetTransport_Unknown";
	e[(e.k_ESteamNetTransport_LoopbackBuffers = 1)] =
		"k_ESteamNetTransport_LoopbackBuffers";
	e[(e.k_ESteamNetTransport_LocalHost = 2)] = "k_ESteamNetTransport_LocalHost";
	e[(e.k_ESteamNetTransport_UDP = 3)] = "k_ESteamNetTransport_UDP";
	e[(e.k_ESteamNetTransport_UDPProbablyLocal = 4)] =
		"k_ESteamNetTransport_UDPProbablyLocal";
	e[(e.k_ESteamNetTransport_TURN = 5)] = "k_ESteamNetTransport_TURN";
	e[(e.k_ESteamNetTransport_SDRP2P = 6)] = "k_ESteamNetTransport_SDRP2P";
	e[(e.k_ESteamNetTransport_SDRHostedServer = 7)] =
		"k_ESteamNetTransport_SDRHostedServer";
})((WD ||= {}));
export class yC {
	constructor() {
		(0, i.Gn)(this);
	}
	m_mapConnectionState = new Map();
	m_mapConnectionSummaries = new Map();
	m_rgActiveConnectionKeys = i.sH.array();
	m_rgClosedConnectionKeys = i.sH.array();
	ResetConnections() {
		this.m_mapConnectionState.clear();
		this.m_mapConnectionSummaries.clear();
		this.m_rgActiveConnectionKeys.clear();
		this.m_rgClosedConnectionKeys.clear();
	}
	updateConnection(e) {
		if (e.transport_kind() == WD.k_ESteamNetTransport_LoopbackBuffers) {
			return;
		}
		const t = e.connection_key();
		let r = this.m_mapConnectionState.get(t);
		const n = B(e);
		let a = this.m_mapConnectionSummaries.get(t);
		if (!r || !a || B(r.cxn) != n) {
			this.m_rgClosedConnectionKeys.remove(t);
			this.m_rgActiveConnectionKeys.remove(t);
			if (n) {
				this.m_rgActiveConnectionKeys.push(t);
			} else {
				this.m_rgClosedConnectionKeys.unshift(t);
				if (this.m_rgClosedConnectionKeys.length > 20) {
					let e = this.m_rgClosedConnectionKeys.pop();
					this.m_mapConnectionSummaries.delete(e);
				}
			}
			if (!r) {
				r = {
					cxn: e,
					seqnum: (0, i.sH)({
						value: 0,
					}),
				};
				this.m_mapConnectionState.set(t, r);
			}
		}
		r.cxn = e;
		r.seqnum.value += 1;
		if (!a) {
			console.log("New connection: " + t);
			const r =
				(o = e.identity_remote()) && o.startsWith("steamid:")
					? new s.b(o.slice(8))
					: null;
			const n =
				e.transport_kind() == WD.k_ESteamNetTransport_SDRHostedServer ||
				(r && r.GetAccountType() == 3) ||
				(r && r.GetAccountType() == 4);
			a = (0, i.sH)({
				key: t,
				appid: e.appid(),
				state: e.connection_state(),
				status: "",
				transport: e.transport_kind(),
				start_time: e.start_time(),
				remote_steamid: r,
				is_gameserver: n,
			});
			this.m_mapConnectionSummaries.set(t, a);
		}
		var o;
		let l;
		let c;
		let m;
		a.state = e.connection_state();
		a.transport = e.transport_kind();
		a.sdrpopid_local = e.sdrpopid_local();
		a.sdrpopid_remote = e.sdrpopid_remote();
		a.address = e.address_remote();
		if (n) {
			let t;
			let r;
			let n;
			let i;
			const s = e.e2e_quality_local()
				? e.e2e_quality_local().instantaneous()
				: undefined;
			if (s) {
				l = s.ping_ms();
				m = s.packets_dropped_pct();
				r = s.in_bytes_per_sec() / 1024;
				t = s.out_bytes_per_sec() / 1024;
				i = s.in_packets_per_sec_x10() / 10;
				n = s.out_packets_per_sec_x10() / 10;
			}
			const o = e.e2e_quality_remote()
				? e.e2e_quality_remote().instantaneous()
				: undefined;
			if (o) {
				c = o.packets_dropped_pct();
			}
			a.send_kb_rate = t;
			a.recv_kb_rate = r;
			a.send_pkts_rate = n;
			a.recv_pkts_rate = i;
		} else {
			a.close_time = e.close_time();
		}
		const u = e.e2e_quality_local()
			? e.e2e_quality_local().lifetime()
			: undefined;
		if (u) {
			if (!n) {
				l = u.ping_ntile_50th();
				m = v(u);
			}
			a.recv_kb_total = parseInt(u.kb_recv());
			a.send_kb_total = parseInt(u.kb_sent());
			a.recv_pkts_total = parseInt(u.packets_recv());
			a.send_pkts_total = parseInt(u.packets_sent());
		}
		if (!n) {
			const t = e.e2e_quality_remote()
				? e.e2e_quality_remote().lifetime()
				: undefined;
			if (t) {
				c = v(t);
			}
		}
		a.ping = l;
		let d = c;
		if (d == null || m > d) {
			d = m;
		}
		a.quality = d == null ? undefined : 100 - d;
		let A = "";
		if (e.status_loc_token()) {
			A = (0, w.we)(e.status_loc_token());
		}
		if (n) {
			a.short_status = A || "Active";
			a.full_status = "";
			a.status_warning = false;
		} else {
			a.full_status = A;
			const t = e.close_reason();
			if (e.connection_state() == y.ProblemDetectedLocally || t >= 3000) {
				a.short_status = "Disconnected";
				a.status_warning = true;
			} else {
				a.short_status = "Closed";
				a.status_warning = t >= 2000;
			}
		}
		a.routing_moreinfo =
			e.ping_default_internet_route() != null ||
			!!e.sdrpopid_local() ||
			e.transport_kind() == WD.k_ESteamNetTransport_SDRP2P ||
			e.transport_kind() == WD.k_ESteamNetTransport_SDRHostedServer ||
			(!!e.p2p_routing() && !!e.p2p_routing().ice());
	}
	activeConnectionKeys() {
		return this.m_rgActiveConnectionKeys;
	}
	closedConnectionKeys() {
		return this.m_rgClosedConnectionKeys;
	}
	connectionSummary(e) {
		let t = this.m_mapConnectionSummaries.get(e);
		console.assert(t, "No connection %s", e);
		return t;
	}
	getConnectionDetailsObserved(e) {
		const t = this.m_mapConnectionState.get(e);
		console.assert(t, "No connection %s", e);
		t.seqnum.value;
		return t.cxn;
	}
	static Get() {
		const e = window;
		e.NetworkDiagnosticsStore ||= new yC();
		return e.NetworkDiagnosticsStore;
	}
	m_nRefCountDetailedConnectionStateUpdates = 0;
	m_hcallbackConnectionStatsUpdate = undefined;
	BeginDetailedConnectionStateUpdates() {
		if (this.m_nRefCountDetailedConnectionStateUpdates == 0) {
			console.assert(!this.m_hcallbackConnectionStatsUpdate);
			const e = this;
			const t = (t) => {
				let r = _.deserializeBinary(t);
				e.updateConnection(r);
			};
			console.log(
				"NetworkDiagnosticsStore - registering for detailed connection state updates",
			);
			this.m_hcallbackConnectionStatsUpdate =
				SteamClient.System.Network.RegisterForConnectionStateUpdate(t);
		}
		++this.m_nRefCountDetailedConnectionStateUpdates;
	}
	EndDetailedConnectionStateUpdates() {
		console.assert(this.m_nRefCountDetailedConnectionStateUpdates > 0);
		console.assert(this.m_hcallbackConnectionStatsUpdate);
		--this.m_nRefCountDetailedConnectionStateUpdates;
		if (this.m_nRefCountDetailedConnectionStateUpdates <= 0) {
			console.log(
				"NetworkDiagnosticsStore - unregistering for detailed connection state updates",
			);
			this.m_nRefCountDetailedConnectionStateUpdates = 0;
			if (this.m_hcallbackConnectionStatsUpdate) {
				this.m_hcallbackConnectionStatsUpdate.unregister();
				this.m_hcallbackConnectionStatsUpdate = undefined;
			}
			this.ResetConnections();
		}
	}
	m_nRefCountAppSummaryUpdates = 0;
	m_hcallbackAppSummaryUpdate = undefined;
	m_mapAppIDSummaries = new Map();
	InternalGetAppSummary(e) {
		let t = this.m_mapAppIDSummaries.get(e);
		if (!t) {
			t = {
				summary: null,
				seqnum: (0, i.sH)({
					value: 0,
				}),
			};
			this.m_mapAppIDSummaries.set(e, t);
		}
		return t;
	}
	BeginAppSummaryUpdates(e) {
		if (this.m_nRefCountAppSummaryUpdates == 0) {
			console.assert(!this.m_hcallbackAppSummaryUpdate);
			const e = this;
			const t = (t) => {
				let r = e.InternalGetAppSummary(t.nAppID);
				console.log(
					`NetworkDiagnosticsStore - got app summary ${t.nAppID} update`,
				);
				r.summary = b.deserializeBinary(t.serializedMsg).toObject();
				r.seqnum.value += 1;
			};
			console.log(
				"NetworkDiagnosticsStore - registering for app summary updates",
			);
			this.m_hcallbackAppSummaryUpdate =
				SteamClient.System.Network.RegisterForAppSummaryUpdate(t);
		}
		++this.m_nRefCountAppSummaryUpdates;
	}
	EndAppSummaryUpdates(e) {
		console.assert(this.m_nRefCountAppSummaryUpdates > 0);
		console.assert(this.m_hcallbackAppSummaryUpdate);
		--this.m_nRefCountAppSummaryUpdates;
		if (this.m_nRefCountAppSummaryUpdates <= 0) {
			console.log(
				"NetworkDiagnosticsStore - unregistering for detailed connection state updates",
			);
			this.m_nRefCountAppSummaryUpdates = 0;
			if (this.m_hcallbackAppSummaryUpdate) {
				this.m_hcallbackAppSummaryUpdate.unregister();
				this.m_hcallbackAppSummaryUpdate = undefined;
			}
			this.m_mapAppIDSummaries.clear();
		}
	}
	GetAppSummaryObserved(e) {
		const t = this.InternalGetAppSummary(e);
		t.seqnum.value;
		return t.summary;
	}
}
export function $A(e) {
	return (0, a.q3)(() => yC.Get().GetAppSummaryObserved(e));
}
(0, n.Cg)([i.XI], yC.prototype, "updateConnection", null);
