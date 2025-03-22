import * as i from /*webcrack:missing*/ "./63696.js";
import * as n from /*webcrack:missing*/ "./92374.js";
import * as a from /*webcrack:missing*/ "./91720.js";
import * as s from /*webcrack:missing*/ "./68956.js";
import * as l from /*webcrack:missing*/ "./36975.js";
import * as o from /*webcrack:missing*/ "./46382.js";
import * as m from /*webcrack:missing*/ "./61416.js";
import * as c from /*webcrack:missing*/ "./58663.js";
import * as d from /*webcrack:missing*/ "./48307.js";
import * as u from /*webcrack:missing*/ "./12176.js";
const g = c.Message;
class B extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.representation_name) {
			d.Sg(B.M());
		}
		g.initialize(this, e, 0, -1, [11], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				representation_name: {
					n: 2,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				horizontal_resolution: {
					n: 3,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				vertical_resolution: {
					n: 4,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				frame_rate: {
					n: 5,
					br: d.qM.readDouble,
					bw: d.gp.writeDouble,
				},
				bandwidth: {
					n: 6,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				audio_sample_rate: {
					n: 7,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				frame_rate_string: {
					n: 8,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				codec: {
					n: 9,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				audio_channel_config: {
					n: 10,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				segment_info: {
					n: 11,
					c: b,
					r: true,
					q: true,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= d.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(B.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new B();
		return B.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(B.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(B.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgVideoGameRecordingRepresentation";
	}
}
class _ extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.component_name) {
			d.Sg(_.M());
		}
		g.initialize(this, e, 0, -1, [5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				component_name: {
					n: 1,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				contents: {
					n: 2,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				segment_size: {
					n: 3,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				file_type: {
					n: 4,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				representations: {
					n: 5,
					c: B,
					r: true,
					q: true,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= d.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(_.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new _();
		return _.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(_.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(_.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgVideoGameRecordingComponent";
	}
}
class p extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.steamid) {
			d.Sg(p.M());
		}
		g.initialize(this, e, 0, -1, [7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				steamid: {
					n: 1,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				app_id: {
					n: 2,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				num_segments: {
					n: 3,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				length_milliseconds: {
					n: 4,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				segment_duration_timescale: {
					n: 5,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				segment_duration: {
					n: 6,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				components: {
					n: 7,
					c: _,
					r: true,
					q: true,
				},
				start_time_ms: {
					n: 8,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				start_offset_in_timeline_ms: {
					n: 9,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= d.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(p.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new p();
		return p.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(p.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(p.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgVideoGameRecordingDef";
	}
}
class b extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.segment_number) {
			d.Sg(b.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				segment_number: {
					n: 1,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				segment_size_bytes: {
					n: 2,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				component_name: {
					n: 3,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				representation_name: {
					n: 4,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= d.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(b.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new b();
		return b.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(b.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(b.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_GameRecordingSegmentInfo";
	}
}
class y extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.segment_info) {
			d.Sg(y.M());
		}
		g.initialize(this, e, 0, -1, [5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				segment_info: {
					n: 1,
					c: b,
				},
				url_host: {
					n: 2,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				url_path: {
					n: 3,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				use_https: {
					n: 4,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				request_headers: {
					n: 5,
					c: f,
					r: true,
					q: true,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= d.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(y.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new y();
		return y.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(y.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(y.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_GameRecordingSegmentUploadInfo";
	}
}
class f extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.name) {
			d.Sg(f.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				name: {
					n: 1,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				value: {
					n: 2,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
			},
		};
		return f.sm_m;
	}
	static MBF() {
		f.sm_mbf ||= d.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(f.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new f();
		return f.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(f.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(f.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
	}
}
const w = c.Message;
class M extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.video_manager_clip_id) {
			d.Sg(M.M());
		}
		w.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				video_manager_clip_id: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				video_manager_video_id: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				server_timeline_id: {
					n: 3,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				manifest_url: {
					n: 4,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				duration_ms: {
					n: 5,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				start_offset_ms: {
					n: 6,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return M.sm_m;
	}
	static MBF() {
		M.sm_mbf ||= d.w0(M.M());
		return M.sm_mbf;
	}
	toObject(e = false) {
		return M.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(M.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(M.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new M();
		return M.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(M.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(M.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		M.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideoManagerClipID";
	}
}
class z extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.clip_id) {
			d.Sg(z.M());
		}
		w.initialize(this, e, 0, -1, [9], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		z.sm_m ||= {
			proto: z,
			fields: {
				clip_id: {
					n: 1,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				gameid: {
					n: 2,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				date_recorded: {
					n: 4,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				total_file_size_bytes: {
					n: 7,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				video_ids: {
					n: 9,
					c: M,
					r: true,
					q: true,
				},
				owner_steamid: {
					n: 10,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
				upload_complete: {
					n: 11,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
				duration_ms: {
					n: 12,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return z.sm_m;
	}
	static MBF() {
		z.sm_mbf ||= d.w0(z.M());
		return z.sm_mbf;
	}
	toObject(e = false) {
		return z.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(z.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(z.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new z();
		return z.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(z.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(z.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecordingClip";
	}
}
class S extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.clip) {
			d.Sg(S.M());
		}
		w.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				clip: {
					n: 2,
					c: z,
				},
				video_def: {
					n: 3,
					c: p,
					r: true,
					q: true,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= d.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(S.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new S();
		return S.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(S.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(S.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_CreateShareClip_Request";
	}
}
class R extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!R.prototype.clip) {
			d.Sg(R.M());
		}
		w.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		R.sm_m ||= {
			proto: R,
			fields: {
				clip: {
					n: 1,
					c: z,
				},
			},
		};
		return R.sm_m;
	}
	static MBF() {
		R.sm_mbf ||= d.w0(R.M());
		return R.sm_mbf;
	}
	toObject(e = false) {
		return R.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(R.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(R.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new R();
		return R.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(R.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(R.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_CreateShareClip_Response";
	}
}
class h extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.clip_id) {
			d.Sg(h.M());
		}
		w.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				clip_id: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= d.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(h.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new h();
		return h.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(h.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(h.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_DeleteSharedClip_Request";
	}
}
class j extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		w.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return j.toObject(e, this);
	}
	static toObject(e, r) {
		if (e) {
			return {
				$jspbMessageInstance: r,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new j();
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new j();
		return j.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return e;
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_DeleteSharedClip_Response";
	}
}
class U extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.clip_id) {
			d.Sg(U.M());
		}
		w.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		U.sm_m ||= {
			proto: U,
			fields: {
				clip_id: {
					n: 2,
					br: d.qM.readFixed64String,
					bw: d.gp.writeFixed64String,
				},
			},
		};
		return U.sm_m;
	}
	static MBF() {
		U.sm_mbf ||= d.w0(U.M());
		return U.sm_mbf;
	}
	toObject(e = false) {
		return U.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(U.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(U.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new U();
		return U.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(U.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(U.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetSingleSharedClip_Request";
	}
}
class C extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.clip) {
			d.Sg(C.M());
		}
		w.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				clip: {
					n: 1,
					c: z,
				},
			},
		};
		return C.sm_m;
	}
	static MBF() {
		C.sm_mbf ||= d.w0(C.M());
		return C.sm_mbf;
	}
	toObject(e = false) {
		return C.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(C.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(C.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new C();
		return C.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(C.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(C.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetSingleSharedClip_Response";
	}
}
class F extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.recording_id) {
			d.Sg(F.M());
		}
		w.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		F.sm_m ||= {
			proto: F,
			fields: {
				recording_id: {
					n: 1,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				component_name: {
					n: 2,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				representation_name: {
					n: 3,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				segments_to_store: {
					n: 4,
					c: b,
					r: true,
					q: true,
				},
			},
		};
		return F.sm_m;
	}
	static MBF() {
		F.sm_mbf ||= d.w0(F.M());
		return F.sm_mbf;
	}
	toObject(e = false) {
		return F.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(F.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(F.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new F();
		return F.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(F.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(F.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_BeginGameRecordingSegmentsUpload_Request";
	}
}
class W extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W.prototype.segments_needed) {
			d.Sg(W.M());
		}
		w.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W.sm_m ||= {
			proto: W,
			fields: {
				segments_needed: {
					n: 1,
					c: y,
					r: true,
					q: true,
				},
				call_again: {
					n: 2,
					br: d.qM.readBool,
					bw: d.gp.writeBool,
				},
			},
		};
		return W.sm_m;
	}
	static MBF() {
		W.sm_mbf ||= d.w0(W.M());
		return W.sm_mbf;
	}
	toObject(e = false) {
		return W.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(W.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(W.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new W();
		return W.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(W.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(W.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_BeginGameRecordingSegmentsUpload_Response";
	}
}
class v extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.recording_id) {
			d.Sg(v.M());
		}
		w.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				recording_id: {
					n: 1,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				component_name: {
					n: 2,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				representation_name: {
					n: 3,
					br: d.qM.readString,
					bw: d.gp.writeString,
				},
				first_segment_number: {
					n: 4,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				num_segments: {
					n: 5,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
				upload_result: {
					n: 6,
					br: d.qM.readUint32,
					bw: d.gp.writeUint32,
				},
			},
		};
		return v.sm_m;
	}
	static MBF() {
		v.sm_mbf ||= d.w0(v.M());
		return v.sm_mbf;
	}
	toObject(e = false) {
		return v.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(v.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(v.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new v();
		return v.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(v.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(v.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_CommitGameRecordingSegmentsUpload_Request";
	}
}
class T extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		w.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return T.toObject(e, this);
	}
	static toObject(e, r) {
		if (e) {
			return {
				$jspbMessageInstance: r,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new T();
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new T();
		return T.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return e;
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_CommitGameRecordingSegmentsUpload_Response";
	}
}
class q extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.recording_id) {
			d.Sg(q.M());
		}
		w.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				recording_id: {
					n: 1,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
			},
		};
		return q.sm_m;
	}
	static MBF() {
		q.sm_mbf ||= d.w0(q.M());
		return q.sm_mbf;
	}
	toObject(e = false) {
		return q.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(q.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(q.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new q();
		return q.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(q.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(q.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request";
	}
}
class O extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.segments_needed) {
			d.Sg(O.M());
		}
		w.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O.sm_m ||= {
			proto: O,
			fields: {
				segments_needed: {
					n: 1,
					c: y,
					r: true,
					q: true,
				},
			},
		};
		return O.sm_m;
	}
	static MBF() {
		O.sm_mbf ||= d.w0(O.M());
		return O.sm_mbf;
	}
	toObject(e = false) {
		return O.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(O.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(O.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new O();
		return O.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(O.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(O.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response";
	}
}
class I extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.recording_id) {
			d.Sg(I.M());
		}
		w.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				recording_id: {
					n: 1,
					br: d.qM.readUint64String,
					bw: d.gp.writeUint64String,
				},
				segments_uploaded: {
					n: 2,
					c: b,
					r: true,
					q: true,
				},
			},
		};
		return I.sm_m;
	}
	static MBF() {
		I.sm_mbf ||= d.w0(I.M());
		return I.sm_mbf;
	}
	toObject(e = false) {
		return I.toObject(e, this);
	}
	static toObject(e, r) {
		return d.BT(I.M(), e, r);
	}
	static fromObject(e) {
		return d.Uq(I.M(), e);
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new I();
		return I.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return d.zj(I.MBF(), e, r);
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {
		d.i0(I.M(), e, r);
	}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_GameRecordingCommitSegmentUploads_Request";
	}
}
class G extends w {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		w.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return G.toObject(e, this);
	}
	static toObject(e, r) {
		if (e) {
			return {
				$jspbMessageInstance: r,
			};
		} else {
			return {};
		}
	}
	static fromObject(e) {
		return new G();
	}
	static deserializeBinary(e) {
		let r = new c.BinaryReader(e);
		let t = new G();
		return G.deserializeBinaryFromReader(t, r);
	}
	static deserializeBinaryFromReader(e, r) {
		return e;
	}
	serializeBinary() {
		var e = new c.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, r) {}
	serializeBase64String() {
		var e = new c.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_GameRecordingCommitSegmentUploads_Response";
	}
}
var x;
var N;
(function (e) {
	e.CreateShareClip = function (e, r) {
		return e.SendMsg(
			"GameRecordingClip.CreateShareClip#1",
			(0, u.I8)(S, r),
			R,
			{
				ePrivilege: 1,
			},
		);
	};
	e.DeleteSharedClip = function (e, r) {
		return e.SendMsg(
			"GameRecordingClip.DeleteSharedClip#1",
			(0, u.I8)(h, r),
			j,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetSingleSharedClip = function (e, r) {
		return e.SendMsg(
			"GameRecordingClip.GetSingleSharedClip#1",
			(0, u.I8)(U, r),
			C,
			{
				bConstMethod: true,
				ePrivilege: 2,
				eWebAPIKeyRequirement: 1,
			},
		);
	};
})((x ||= {}));
(function (e) {
	e.BeginGameRecordingSegmentsUpload = function (e, r) {
		return e.SendMsg(
			"VideoClip.BeginGameRecordingSegmentsUpload#1",
			(0, u.I8)(F, r),
			W,
			{
				ePrivilege: 1,
			},
		);
	};
	e.CommitGameRecordingSegmentsUpload = function (e, r) {
		return e.SendMsg(
			"VideoClip.CommitGameRecordingSegmentsUpload#1",
			(0, u.I8)(v, r),
			T,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetNextBatchOfSegmentsToUpload = function (e, r) {
		return e.SendMsg(
			"VideoClip.GetNextBatchOfSegmentsToUpload#1",
			(0, u.I8)(q, r),
			O,
			{
				ePrivilege: 1,
			},
		);
	};
	e.CommitSegmentUploads = function (e, r) {
		return e.SendMsg("VideoClip.CommitSegmentUploads#1", (0, u.I8)(I, r), G, {
			ePrivilege: 1,
		});
	};
})((N ||= {}));
import * as E from /*webcrack:missing*/ "./84629.js";
import * as P from "./25025.js";
import * as V from /*webcrack:missing*/ "./35488.js";
function D(e) {
	const { clipID: r } = e;
	const t = (function (e) {
		const r = (0, o.KV)();
		return (0, m.I)({
			queryKey: ["grclip", e],
			queryFn: async () => {
				const t = u.w.Init(U);
				t.Body().set_clip_id(e);
				const i = await x.GetSingleSharedClip(r, t);
				if (i.GetEResult() != 1) {
					(0, E.ZI)("GetSingleSharedClip failed");
					i.DEBUG_LogToConsole();
					throw new Error(`Failed to load clip with result: ${i.GetEResult()}`);
				}
				let n;
				let a = i.Body().toObject().clip;
				let s = [];
				if (a.video_ids.length == 0) {
					(0, E.ZI)("No video ids in clip", e);
					i.DEBUG_LogToConsole();
					throw new Error("No video ids in clip");
				}
				for (let e of a.video_ids) {
					if (!n || n.timeline_id != e.server_timeline_id) {
						n = K(a, e);
						s.push(n);
					}
					n.recordings.push({
						recording_id: e.video_manager_video_id,
						start_offset_ms: e.start_offset_ms.toFixed(0),
						duration_ms: e.duration_ms.toFixed(0),
						recording_type: 4,
						cdn_manifest_url: e.manifest_url,
					});
				}
				return {
					clip_id: a.clip_id,
					game_id: a.gameid,
					timelines: s,
				};
			},
		});
	})(r);
	if (t.data) {
		return i.createElement(A, {
			clip: t.data,
			mode: n.g_.ChatClip,
		});
	} else {
		return i.createElement(
			"div",
			{
				style: {
					color: "white",
				},
			},
			"Loading...",
		);
	}
}
export default (function (e) {
	const { previewURL: r } = e;
	const [t, n] = i.useState(false);
	if (t) {
		return i.createElement(D, {
			...e,
		});
	} else {
		return i.createElement(
			"div",
			{
				className: P.ClipPreview,
				onClick: () => {
					n(true);
				},
			},
			i.createElement("img", {
				className: P.Thumbnail,
				src: r,
			}),
			i.createElement(
				"div",
				{
					className: P.PlayContainer,
				},
				i.createElement(V.Play, {
					className: P.Button,
				}),
			),
		);
	}
});
function K(e, r) {
	return {
		timeline_id: r.server_timeline_id,
		game_id: e.clip_id,
		date_recorded: e.date_recorded,
		duration_ms: e.duration_ms.toFixed(0),
		recordings: [],
	};
}
export function useTimelineLoaderForCommunityClip(e) {
	const r = i.useMemo(() => (0, a.pw)(e), [e]);
	const t = i.useCallback(
		(r) => {
			for (const t of e.timelines) {
				for (const e of t.recordings) {
					if (e.recording_id == r) {
						return e.cdn_manifest_url;
					}
				}
			}
		},
		[e],
	);
	i.useEffect(() => () => r && r.release(), [r]);
	return {
		loader: r.loader,
		fnGetManifest: t,
	};
}
function A(e) {
	const { clip: r, mode: t } = e;
	const { loader: a, fnGetManifest: o } = useTimelineLoaderForCommunityClip(r);
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			n.Ni,
			{
				loader: a,
				fnGetManifest: o,
				mode: t,
			},
			i.createElement(
				"div",
				{
					className: P.ClipDetails,
				},
				i.createElement(
					"div",
					{
						className: P.VideoContainer,
					},
					i.createElement(s.J, {
						positionAbsolute: false,
						autoPlay: t != n.g_.ChatClip,
					}),
				),
				i.createElement(l.h, {
					loader: a,
				}),
			),
		),
	);
}
