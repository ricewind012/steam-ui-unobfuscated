var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require("./12251.js");
const o = n.Message;
class l extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.timeline_id) {
			i.Sg(l.M());
		}
		o.initialize(this, e, 0, -1, [5, 6, 7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		l.sm_m ||= {
			proto: l,
			fields: {
				timeline_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				date_recorded: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				duration_ms: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				recordings: {
					n: 5,
					c,
					r: true,
					q: true,
				},
				phases: {
					n: 6,
					c: u,
					r: true,
					q: true,
				},
				significant_events: {
					n: 7,
					c: m,
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
		return "CGameRecordingTimelineMetadata";
	}
}
class c extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.recording_id) {
			i.Sg(c.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				recording_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				start_offset_ms: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				duration_ms: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				recording_type: {
					n: 4,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				delete_on_cleanup: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				video_manager_clip_id: {
					n: 6,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				video_manager_video_id: {
					n: 7,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				cdn_manifest_url: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				file_size: {
					n: 9,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				recording_zero_timeline_offset_ms: {
					n: 10,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CGameRecordingTimelineMetadata_Recording";
	}
}
class m extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.game_id) {
			i.Sg(m.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				rt_created: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				possible_clip: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				timeline_id: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				entry_id: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				timeline_offset_ms: {
					n: 6,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				duration_ms: {
					n: 7,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				marker_icon: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				marker_title: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				user_marker: {
					n: 10,
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
		return "CGameRecordingTimelineEvent";
	}
}
class u extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.phase_id) {
			i.Sg(u.M());
		}
		o.initialize(this, e, 0, -1, [6, 7, 9], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				phase_id: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				duration_ms: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				tags: {
					n: 6,
					c: d,
					r: true,
					q: true,
				},
				contained_tags: {
					n: 7,
					c: d,
					r: true,
					q: true,
				},
				background_timeline_offset: {
					n: 8,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				attributes: {
					n: 9,
					c: p,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(u.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecordingPhase";
	}
}
class d extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.name) {
			i.Sg(d.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				group: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		var e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(d.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecordingPhase_Tag";
	}
}
class A extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.name) {
			i.Sg(A.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				group: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				priority: {
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
		return "CTimelineTag";
	}
}
class p extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.group) {
			i.Sg(p.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				group: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				value: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				priority: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(p.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPhaseAttribute";
	}
}
const g = n.Message;
class h extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return h.toObject(e, this);
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
		return new h();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetAppsWithBackgroundVideo_Request";
	}
}
class C extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.apps) {
			i.Sg(C.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				apps: {
					n: 1,
					c: _,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(C.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetAppsWithBackgroundVideo_Response";
	}
}
class _ extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.game_id) {
			i.Sg(_.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				most_recent_start_time: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				recording_type: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				video_duration_seconds: {
					n: 4,
					br: i.qM.readDouble,
					bw: i.gp.writeDouble,
				},
				timeline_duration_seconds: {
					n: 5,
					br: i.qM.readDouble,
					bw: i.gp.writeDouble,
				},
				is_active: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				file_size: {
					n: 7,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		var e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetAppsWithBackgroundVideo_Response_App";
	}
}
class f extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.game_id) {
			i.Sg(f.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		var e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(f.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetTimelinesForApp_Request";
	}
}
class b extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.timelines) {
			i.Sg(b.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				timelines: {
					n: 1,
					c: l,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(b.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetTimelinesForApp_Response";
	}
}
class y extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.clip_id) {
			i.Sg(y.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				clip_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		var e = new n.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(y.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetTimelinesForClip_Request";
	}
}
class S extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.game_id) {
			i.Sg(S.M());
		}
		g.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				timelines: {
					n: 2,
					c: l,
					r: true,
					q: true,
				},
				first_timeline_start_offset_ms: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		var e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(S.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetTimelinesForClip_Response";
	}
}
class w extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.page) {
			i.Sg(w.M());
		}
		g.initialize(this, e, 0, -1, [12], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				page: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				count: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				filter_gameid: {
					n: 10,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				filter_search_string: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				filter_tags: {
					n: 12,
					c: B,
					r: true,
					q: true,
				},
				filter_phase_id: {
					n: 13,
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
		var e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(w.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_QueryPhases_Request";
	}
}
class B extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.group) {
			i.Sg(B.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				group: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				name: {
					n: 2,
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
		var e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(B.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_QueryPhases_Request_Tag";
	}
}
class v extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.phases) {
			i.Sg(v.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				phases: {
					n: 1,
					c: I,
					r: true,
					q: true,
				},
				total_count: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(v.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_QueryPhases_Response";
	}
}
class I extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.game_id) {
			i.Sg(I.M());
		}
		g.initialize(this, e, 0, -1, [7, 8, 10, 13, 16, 17], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				date_recorded: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				duration_ms: {
					n: 6,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				tags: {
					n: 7,
					c: A,
					r: true,
					q: true,
				},
				contained_tags: {
					n: 8,
					c: A,
					r: true,
					q: true,
				},
				background_recording: {
					n: 9,
					c: E,
				},
				clip_ids: {
					n: 10,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				type: {
					n: 11,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				start_ms: {
					n: 12,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				screenshots: {
					n: 13,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				active: {
					n: 14,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				phase_id: {
					n: 15,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				significant_events: {
					n: 16,
					c: O,
					r: true,
					q: true,
				},
				attributes: {
					n: 17,
					c: p,
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
		var e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(I.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_QueryPhases_Response_Phase";
	}
}
class E extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.timeline_id) {
			i.Sg(E.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				timeline_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				offset: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				duration_ms: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		var e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(E.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		E.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_QueryPhases_Response_Phase_BackgroundRecording";
	}
}
class M extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.game_id) {
			i.Sg(M.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CGameRecording_GetTags_Request";
	}
}
class T extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.tags) {
			i.Sg(T.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				tags: {
					n: 1,
					c: A,
					r: true,
					q: true,
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
		var e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(T.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		T.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetTags_Response";
	}
}
class R extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		R.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetEnoughDiskSpace_Request";
	}
}
class k extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.enough_space) {
			i.Sg(k.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				enough_space: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		var e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(k.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		k.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetEnoughDiskSpace_Response";
	}
}
class D extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return D.toObject(e, this);
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
		return new D();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetAvailableDiskSpace_Request";
	}
}
class N extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.size) {
			i.Sg(N.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				size: {
					n: 1,
					br: i.qM.readDouble,
					bw: i.gp.writeDouble,
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
		var e = new n.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(N.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetAvailableDiskSpace_Response";
	}
}
class F extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.notification_type) {
			i.Sg(F.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		F.sm_m ||= {
			proto: F,
			fields: {
				notification_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				timeline_id: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				start_time: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				duration_ms: {
					n: 5,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return F.sm_m;
	}
	static MBF() {
		F.sm_mbf ||= i.w0(F.M());
		return F.sm_mbf;
	}
	toObject(e = false) {
		return F.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(F.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(F.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new F();
		return F.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(F.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(F.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_TimelineChanged_Notification";
	}
}
class G extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.notification_type) {
			i.Sg(G.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				notification_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				timeline_id: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_id: {
					n: 4,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				session_id: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				start_offset: {
					n: 6,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				duration_ms: {
					n: 7,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				recording_type: {
					n: 8,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return G.sm_m;
	}
	static MBF() {
		G.sm_mbf ||= i.w0(G.M());
		return G.sm_mbf;
	}
	toObject(e = false) {
		return G.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(G.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(G.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new G();
		return G.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(G.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(G.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_RecordingSessionChanged_Notification";
	}
}
class O extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.timeline_id) {
			i.Sg(O.M());
		}
		g.initialize(this, e, 0, -1, [17, 19], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O.sm_m ||= {
			proto: O,
			fields: {
				timeline_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				entry_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				time: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				type: {
					n: 4,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				game_mode: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				range_title: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				range_duration: {
					n: 8,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				range_possible_clip: {
					n: 9,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				timestamp_title: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				marker_icon: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				marker_description: {
					n: 13,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				marker_priority: {
					n: 14,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				screenshot_handle: {
					n: 15,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				achievement_name: {
					n: 16,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				tag: {
					n: 17,
					c: A,
					r: true,
					q: true,
				},
				phase_id: {
					n: 18,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				attributes: {
					n: 19,
					c: p,
					r: true,
					q: true,
				},
			},
		};
		return O.sm_m;
	}
	static MBF() {
		O.sm_mbf ||= i.w0(O.M());
		return O.sm_mbf;
	}
	toObject(e = false) {
		return O.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(O.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(O.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new O();
		return O.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(O.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(O.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTimelineEntry";
	}
}
class P extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.entry) {
			i.Sg(P.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				entry: {
					n: 1,
					c: O,
				},
				game_id: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return P.sm_m;
	}
	static MBF() {
		P.sm_mbf ||= i.w0(P.M());
		return P.sm_mbf;
	}
	toObject(e = false) {
		return P.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(P.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(P.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new P();
		return P.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(P.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(P.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_TimelineEntryChanged_Notification";
	}
}
class L extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!L.prototype.game_id) {
			i.Sg(L.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		L.sm_m ||= {
			proto: L,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				timeline_id: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				entry_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return L.sm_m;
	}
	static MBF() {
		L.sm_mbf ||= i.w0(L.M());
		return L.sm_mbf;
	}
	toObject(e = false) {
		return L.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(L.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(L.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new L();
		return L.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(L.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(L.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_TimelineEntryRemoved_Notification";
	}
}
class z extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return z.toObject(e, this);
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
		return new z();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new z();
		return z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_LowDiskSpace_Notification";
	}
}
class x extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.game_id) {
			i.Sg(x.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		x.sm_m ||= {
			proto: x,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return x.sm_m;
	}
	static MBF() {
		x.sm_mbf ||= i.w0(x.M());
		return x.sm_mbf;
	}
	toObject(e = false) {
		return x.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(x.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(x.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new x();
		return x.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(x.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(x.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_PostGameHighlightsChanged_Notification";
	}
}
class U extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.game_id) {
			i.Sg(U.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		U.sm_m ||= {
			proto: U,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				phase_id: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return U.sm_m;
	}
	static MBF() {
		U.sm_mbf ||= i.w0(U.M());
		return U.sm_mbf;
	}
	toObject(e = false) {
		return U.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(U.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(U.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new U();
		return U.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(U.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(U.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_OpenOverlayToGamePhase_Notification";
	}
}
class W extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W.prototype.game_id) {
			i.Sg(W.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W.sm_m ||= {
			proto: W,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				entry_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return W.sm_m;
	}
	static MBF() {
		W.sm_mbf ||= i.w0(W.M());
		return W.sm_mbf;
	}
	toObject(e = false) {
		return W.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(W.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(W.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new W();
		return W.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(W.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(W.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_OpenOverlayToTimelineEvent_Notification";
	}
}
class V extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return V.toObject(e, this);
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
		return new V();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new V();
		return V.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_PhaseListChanged_Notification";
	}
}
class H extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!H.prototype.clip_id) {
			i.Sg(H.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		H.sm_m ||= {
			proto: H,
			fields: {
				clip_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				duration_ms: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				date_recorded: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				start_timeline_id: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				start_offset_ms: {
					n: 6,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				published_file_id: {
					n: 7,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				file_size: {
					n: 8,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				name: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				date_clipped: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				temporary: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				original_device: {
					n: 12,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				original_gaming_device_type: {
					n: 13,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				date_downloaded: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				thumbnail_url: {
					n: 15,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				thumbnail_width: {
					n: 16,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				thumbnail_height: {
					n: 17,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return H.sm_m;
	}
	static MBF() {
		H.sm_mbf ||= i.w0(H.M());
		return H.sm_mbf;
	}
	toObject(e = false) {
		return H.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(H.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(H.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new H();
		return H.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(H.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(H.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ClipSummary";
	}
}
class j extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!j.prototype.game_id) {
			i.Sg(j.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		j.sm_m ||= {
			proto: j,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				start: {
					n: 2,
					c: q,
				},
				end: {
					n: 3,
					c: q,
				},
				name: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				src_clip_id: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				temporary: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				force_thumbnail: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return j.sm_m;
	}
	static MBF() {
		j.sm_mbf ||= i.w0(j.M());
		return j.sm_mbf;
	}
	toObject(e = false) {
		return j.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(j.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(j.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new j();
		return j.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(j.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(j.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_SaveClip_Request";
	}
}
class q extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.timeline_id) {
			i.Sg(q.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				timeline_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				offset_ms: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		var e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(q.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_SaveClip_Request_Position";
	}
}
class Q extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q.prototype.summary) {
			i.Sg(Q.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q.sm_m ||= {
			proto: Q,
			fields: {
				summary: {
					n: 1,
					c: H,
				},
			},
		};
		return Q.sm_m;
	}
	static MBF() {
		Q.sm_mbf ||= i.w0(Q.M());
		return Q.sm_mbf;
	}
	toObject(e = false) {
		return Q.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Q.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Q();
		return Q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Q.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Q.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_SaveClip_Response";
	}
}
class Z extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z.prototype.clip_id) {
			i.Sg(Z.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z.sm_m ||= {
			proto: Z,
			fields: {
				clip_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Z.sm_m;
	}
	static MBF() {
		Z.sm_mbf ||= i.w0(Z.M());
		return Z.sm_mbf;
	}
	toObject(e = false) {
		return Z.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Z.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Z();
		return Z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Z.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Z.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_DeleteClip_Request";
	}
}
class Y extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Y.toObject(e, this);
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
		return new Y();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Y();
		return Y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_DeleteClip_Response";
	}
}
class K extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K.prototype.bitrate_kbps) {
			i.Sg(K.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		K.sm_m ||= {
			proto: K,
			fields: {
				bitrate_kbps: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				width: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				height: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				frames_per_second: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				codec: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return K.sm_m;
	}
	static MBF() {
		K.sm_mbf ||= i.w0(K.M());
		return K.sm_mbf;
	}
	toObject(e = false) {
		return K.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(K.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(K.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new K();
		return K.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(K.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(K.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ExportClip_Settings";
	}
}
class X extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!X.prototype.clip_id) {
			i.Sg(X.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		X.sm_m ||= {
			proto: X,
			fields: {
				clip_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				export_mp4_path: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				settings: {
					n: 3,
					c: K,
				},
				use_unique_filename: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return X.sm_m;
	}
	static MBF() {
		X.sm_mbf ||= i.w0(X.M());
		return X.sm_mbf;
	}
	toObject(e = false) {
		return X.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(X.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(X.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new X();
		return X.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(X.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(X.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ExportClip_Request";
	}
}
class J extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return J.toObject(e, this);
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
		return new J();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new J();
		return J.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ExportClip_Response";
	}
}
class $ extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$.prototype.clip_id) {
			i.Sg($.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$.sm_m ||= {
			proto: $,
			fields: {
				clip_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				settings: {
					n: 2,
					c: K,
				},
				run_policy_checks: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return $.sm_m;
	}
	static MBF() {
		$.sm_mbf ||= i.w0($.M());
		return $.sm_mbf;
	}
	toObject(e = false) {
		return $.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT($.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq($.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new $();
		return $.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj($.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0($.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ExportClipPreview_Request";
	}
}
class ee extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ee.prototype.estimated_size) {
			i.Sg(ee.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ee.sm_m ||= {
			proto: ee,
			fields: {
				estimated_size: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				settings: {
					n: 2,
					c: K,
				},
			},
		};
		return ee.sm_m;
	}
	static MBF() {
		ee.sm_mbf ||= i.w0(ee.M());
		return ee.sm_mbf;
	}
	toObject(e = false) {
		return ee.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ee.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ee.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ee();
		return ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ee.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ee.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ExportClipPreview_Response";
	}
}
class te extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!te.prototype.game_id) {
			i.Sg(te.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		te.sm_m ||= {
			proto: te,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				timeline_id: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				timeline_offset_ms: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return te.sm_m;
	}
	static MBF() {
		te.sm_mbf ||= i.w0(te.M());
		return te.sm_mbf;
	}
	toObject(e = false) {
		return te.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(te.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(te.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new te();
		return te.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(te.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(te.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_TakeScreenshot_Request";
	}
}
class re extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.screenshot_id) {
			i.Sg(re.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		re.sm_m ||= {
			proto: re,
			fields: {
				screenshot_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return re.sm_m;
	}
	static MBF() {
		re.sm_mbf ||= i.w0(re.M());
		return re.sm_mbf;
	}
	toObject(e = false) {
		return re.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(re.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(re.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new re();
		return re.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(re.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(re.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_TakeScreenshot_Response";
	}
}
class ne extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ne.prototype.clip_id) {
			i.Sg(ne.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ne.sm_m ||= {
			proto: ne,
			fields: {
				clip_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				title: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				desc: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				visibility: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return ne.sm_m;
	}
	static MBF() {
		ne.sm_mbf ||= i.w0(ne.M());
		return ne.sm_mbf;
	}
	toObject(e = false) {
		return ne.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ne.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ne.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ne();
		return ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ne.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ne.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_UploadClipToSteam_Request";
	}
}
class ie extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ie.prototype.summary) {
			i.Sg(ie.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ie.sm_m ||= {
			proto: ie,
			fields: {
				summary: {
					n: 1,
					c: H,
				},
			},
		};
		return ie.sm_m;
	}
	static MBF() {
		ie.sm_mbf ||= i.w0(ie.M());
		return ie.sm_mbf;
	}
	toObject(e = false) {
		return ie.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ie.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ie.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ie();
		return ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ie.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ie.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_UploadClipToSteam_Response";
	}
}
class ae extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ae.prototype.clip_id) {
			i.Sg(ae.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ae.sm_m ||= {
			proto: ae,
			fields: {
				clip_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return ae.sm_m;
	}
	static MBF() {
		ae.sm_mbf ||= i.w0(ae.M());
		return ae.sm_mbf;
	}
	toObject(e = false) {
		return ae.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ae.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ae.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ae();
		return ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ae.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ae.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ZipClip_Request";
	}
}
class se extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!se.prototype.zip_path) {
			i.Sg(se.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		se.sm_m ||= {
			proto: se,
			fields: {
				zip_path: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return se.sm_m;
	}
	static MBF() {
		se.sm_mbf ||= i.w0(se.M());
		return se.sm_mbf;
	}
	toObject(e = false) {
		return se.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(se.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(se.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new se();
		return se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(se.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(se.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ZipClip_Response";
	}
}
class oe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!oe.prototype.game_id) {
			i.Sg(oe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		oe.sm_m ||= {
			proto: oe,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				created_after: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				include_temporary: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return oe.sm_m;
	}
	static MBF() {
		oe.sm_mbf ||= i.w0(oe.M());
		return oe.sm_mbf;
	}
	toObject(e = false) {
		return oe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(oe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(oe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new oe();
		return oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(oe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(oe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetClips_Request";
	}
}
class le extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!le.prototype.clip) {
			i.Sg(le.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		le.sm_m ||= {
			proto: le,
			fields: {
				clip: {
					n: 1,
					c: H,
					r: true,
					q: true,
				},
			},
		};
		return le.sm_m;
	}
	static MBF() {
		le.sm_mbf ||= i.w0(le.M());
		return le.sm_mbf;
	}
	toObject(e = false) {
		return le.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(le.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(le.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new le();
		return le.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(le.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(le.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetClips_Response";
	}
}
class ce extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ce.prototype.game_id) {
			i.Sg(ce.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ce.sm_m ||= {
			proto: ce,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				created_after: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return ce.sm_m;
	}
	static MBF() {
		ce.sm_mbf ||= i.w0(ce.M());
		return ce.sm_mbf;
	}
	toObject(e = false) {
		return ce.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ce.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ce.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ce();
		return ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ce.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ce.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetAndTrimPostGameHighlights_Request";
	}
}
class me extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!me.prototype.events) {
			i.Sg(me.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		me.sm_m ||= {
			proto: me,
			fields: {
				events: {
					n: 1,
					c: m,
					r: true,
					q: true,
				},
			},
		};
		return me.sm_m;
	}
	static MBF() {
		me.sm_mbf ||= i.w0(me.M());
		return me.sm_mbf;
	}
	toObject(e = false) {
		return me.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(me.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(me.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new me();
		return me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(me.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(me.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetAndTrimPostGameHighlights_Response";
	}
}
class ue extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ue.prototype.game_id) {
			i.Sg(ue.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ue.sm_m ||= {
			proto: ue,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				entry: {
					n: 2,
					c: O,
				},
				clip_id: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return ue.sm_m;
	}
	static MBF() {
		ue.sm_mbf ||= i.w0(ue.M());
		return ue.sm_mbf;
	}
	toObject(e = false) {
		return ue.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ue.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ue.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ue();
		return ue.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ue.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ue.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_UserAddTimelineEntry_Request";
	}
}
class de extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!de.prototype.entry_id) {
			i.Sg(de.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		de.sm_m ||= {
			proto: de,
			fields: {
				entry_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return de.sm_m;
	}
	static MBF() {
		de.sm_mbf ||= i.w0(de.M());
		return de.sm_mbf;
	}
	toObject(e = false) {
		return de.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(de.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(de.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new de();
		return de.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(de.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(de.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		de.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_UserAddTimelineEntry_Response";
	}
}
class Ae extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ae.prototype.game_id) {
			i.Sg(Ae.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ae.sm_m ||= {
			proto: Ae,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				entry: {
					n: 2,
					c: O,
				},
				clip_id: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return Ae.sm_m;
	}
	static MBF() {
		Ae.sm_mbf ||= i.w0(Ae.M());
		return Ae.sm_mbf;
	}
	toObject(e = false) {
		return Ae.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ae.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ae.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ae();
		return Ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ae.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ae.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_UserUpdateTimelineEntry_Request";
	}
}
class pe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return pe.toObject(e, this);
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
		return new pe();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new pe();
		return pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_UserUpdateTimelineEntry_Response";
	}
}
class ge extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ge.prototype.game_id) {
			i.Sg(ge.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ge.sm_m ||= {
			proto: ge,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				timeline_id: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				entry_id: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				clip_id: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return ge.sm_m;
	}
	static MBF() {
		ge.sm_mbf ||= i.w0(ge.M());
		return ge.sm_mbf;
	}
	toObject(e = false) {
		return ge.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ge.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ge.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ge();
		return ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ge.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ge.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_UserRemoveTimelineEntry_Request";
	}
}
class he extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return he.toObject(e, this);
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
		return new he();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new he();
		return he.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_UserRemoveTimelineEntry_Response";
	}
}
class Ce extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ce.prototype.game_ids) {
			i.Sg(Ce.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ce.sm_m ||= {
			proto: Ce,
			fields: {
				game_ids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
			},
		};
		return Ce.sm_m;
	}
	static MBF() {
		Ce.sm_mbf ||= i.w0(Ce.M());
		return Ce.sm_mbf;
	}
	toObject(e = false) {
		return Ce.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ce.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ce.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ce();
		return Ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ce.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ce.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ManuallyDeleteRecordingsForApps_Request";
	}
}
class _e extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return _e.toObject(e, this);
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
		return new _e();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _e();
		return _e.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ManuallyDeleteRecordingsForApps_Response";
	}
}
class fe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!fe.prototype.folder_path) {
			i.Sg(fe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		fe.sm_m ||= {
			proto: fe,
			fields: {
				folder_path: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				type: {
					n: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return fe.sm_m;
	}
	static MBF() {
		fe.sm_mbf ||= i.w0(fe.M());
		return fe.sm_mbf;
	}
	toObject(e = false) {
		return fe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(fe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(fe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new fe();
		return fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(fe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(fe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetTotalDiskSpaceUsage_Request";
	}
}
class be extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!be.prototype.size) {
			i.Sg(be.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		be.sm_m ||= {
			proto: be,
			fields: {
				size: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return be.sm_m;
	}
	static MBF() {
		be.sm_mbf ||= i.w0(be.M());
		return be.sm_mbf;
	}
	toObject(e = false) {
		return be.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(be.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(be.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new be();
		return be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(be.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(be.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetTotalDiskSpaceUsage_Response";
	}
}
class ye extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ye.prototype.recording_id) {
			i.Sg(ye.M());
		}
		g.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ye.sm_m ||= {
			proto: ye,
			fields: {
				recording_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				clip_id: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				timeline_id: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				start_offset_us: {
					n: 4,
					r: true,
					q: true,
					br: i.qM.readInt64String,
					pbr: i.qM.readPackedInt64String,
					bw: i.gp.writeRepeatedInt64String,
				},
				major_axis: {
					n: 5,
					d: 512,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_precision: {
					n: 6,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				format: {
					n: 8,
					d: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return ye.sm_m;
	}
	static MBF() {
		ye.sm_mbf ||= i.w0(ye.M());
		return ye.sm_mbf;
	}
	toObject(e = false) {
		return ye.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ye.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ye.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ye();
		return ye.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ye.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ye.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetThumbnails_Request";
	}
}
class Se extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Se.prototype.thumbnails) {
			i.Sg(Se.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Se.sm_m ||= {
			proto: Se,
			fields: {
				thumbnails: {
					n: 1,
					c: we,
					r: true,
					q: true,
				},
			},
		};
		return Se.sm_m;
	}
	static MBF() {
		Se.sm_mbf ||= i.w0(Se.M());
		return Se.sm_mbf;
	}
	toObject(e = false) {
		return Se.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Se.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Se.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Se();
		return Se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Se.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Se.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetThumbnails_Response";
	}
}
class we extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!we.prototype.image_data) {
			i.Sg(we.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		we.sm_m ||= {
			proto: we,
			fields: {
				image_data: {
					n: 1,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				width: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				height: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return we.sm_m;
	}
	static MBF() {
		we.sm_mbf ||= i.w0(we.M());
		return we.sm_mbf;
	}
	toObject(e = false) {
		return we.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(we.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(we.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new we();
		return we.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(we.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(we.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		we.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetThumbnails_Response_Thumbnail";
	}
}
class Be extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Be.prototype.game_id) {
			i.Sg(Be.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Be.sm_m ||= {
			proto: Be,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Be.sm_m;
	}
	static MBF() {
		Be.sm_mbf ||= i.w0(Be.M());
		return Be.sm_mbf;
	}
	toObject(e = false) {
		return Be.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Be.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Be.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Be();
		return Be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Be.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Be.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_StartRecording_Request";
	}
}
class ve extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ve.toObject(e, this);
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
		return new ve();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ve();
		return ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_StartRecording_Response";
	}
}
class Ie extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ie.prototype.game_id) {
			i.Sg(Ie.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ie.sm_m ||= {
			proto: Ie,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Ie.sm_m;
	}
	static MBF() {
		Ie.sm_mbf ||= i.w0(Ie.M());
		return Ie.sm_mbf;
	}
	toObject(e = false) {
		return Ie.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ie.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ie.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ie();
		return Ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ie.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ie.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_StopRecording_Request";
	}
}
class Ee extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ee.prototype.summary) {
			i.Sg(Ee.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ee.sm_m ||= {
			proto: Ee,
			fields: {
				summary: {
					n: 1,
					c: H,
				},
			},
		};
		return Ee.sm_m;
	}
	static MBF() {
		Ee.sm_mbf ||= i.w0(Ee.M());
		return Ee.sm_mbf;
	}
	toObject(e = false) {
		return Ee.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ee.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ee.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ee();
		return Ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ee.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ee.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_StopRecording_Response";
	}
}
class Me extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Me.prototype.game_id) {
			i.Sg(Me.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Me.sm_m ||= {
			proto: Me,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Me.sm_m;
	}
	static MBF() {
		Me.sm_mbf ||= i.w0(Me.M());
		return Me.sm_mbf;
	}
	toObject(e = false) {
		return Me.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Me.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Me.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Me();
		return Me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Me.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Me.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetRecordingSize_Request";
	}
}
class Te extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Te.prototype.file_size) {
			i.Sg(Te.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Te.sm_m ||= {
			proto: Te,
			fields: {
				file_size: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Te.sm_m;
	}
	static MBF() {
		Te.sm_mbf ||= i.w0(Te.M());
		return Te.sm_mbf;
	}
	toObject(e = false) {
		return Te.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Te.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Te.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Te();
		return Te.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Te.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Te.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetRecordingSize_Response";
	}
}
class Re extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Re.toObject(e, this);
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
		return new Re();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Re();
		return Re.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_CleanupBackgroundRecordings_Request";
	}
}
class ke extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ke.toObject(e, this);
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
		return new ke();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ke();
		return ke.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ke.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_CleanupBackgroundRecordings_Response";
	}
}
class De extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return De.toObject(e, this);
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
		return new De();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new De();
		return De.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetPlatformCapabilities_Request";
	}
}
class Ne extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ne.prototype.per_process_audio_capture) {
			i.Sg(Ne.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ne.sm_m ||= {
			proto: Ne,
			fields: {
				per_process_audio_capture: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Ne.sm_m;
	}
	static MBF() {
		Ne.sm_mbf ||= i.w0(Ne.M());
		return Ne.sm_mbf;
	}
	toObject(e = false) {
		return Ne.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ne.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ne.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ne();
		return Ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ne.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ne.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetPlatformCapabilities_Response";
	}
}
class Fe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Fe.prototype.summary) {
			i.Sg(Fe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Fe.sm_m ||= {
			proto: Fe,
			fields: {
				summary: {
					n: 1,
					c: H,
				},
			},
		};
		return Fe.sm_m;
	}
	static MBF() {
		Fe.sm_mbf ||= i.w0(Fe.M());
		return Fe.sm_mbf;
	}
	toObject(e = false) {
		return Fe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Fe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Fe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Fe();
		return Fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Fe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Fe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ClipCreated_Notification";
	}
}
class Ge extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ge.prototype.clip_id) {
			i.Sg(Ge.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ge.sm_m ||= {
			proto: Ge,
			fields: {
				clip_id: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_id: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Ge.sm_m;
	}
	static MBF() {
		Ge.sm_mbf ||= i.w0(Ge.M());
		return Ge.sm_mbf;
	}
	toObject(e = false) {
		return Ge.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ge.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ge.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ge();
		return Ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ge.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ge.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ClipDeleted_Notification";
	}
}
class Oe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Oe.prototype.progress) {
			i.Sg(Oe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Oe.sm_m ||= {
			proto: Oe,
			fields: {
				progress: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				clip_id: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				eresult: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return Oe.sm_m;
	}
	static MBF() {
		Oe.sm_mbf ||= i.w0(Oe.M());
		return Oe.sm_mbf;
	}
	toObject(e = false) {
		return Oe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Oe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Oe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Oe();
		return Oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Oe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Oe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_ExportProgress_Notification";
	}
}
class Pe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Pe.prototype.gameid) {
			i.Sg(Pe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Pe.sm_m ||= {
			proto: Pe,
			fields: {
				gameid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				enabled: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				minutes: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				bitrate: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				infinite: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Pe.sm_m;
	}
	static MBF() {
		Pe.sm_mbf ||= i.w0(Pe.M());
		return Pe.sm_mbf;
	}
	toObject(e = false) {
		return Pe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Pe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Pe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Pe();
		return Pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Pe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Pe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_PerGameSettings";
	}
}
class Le extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Le.toObject(e, this);
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
		return new Le();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Le();
		return Le.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetPerGameSettings_Request";
	}
}
class ze extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ze.prototype.settings) {
			i.Sg(ze.M());
		}
		g.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ze.sm_m ||= {
			proto: ze,
			fields: {
				settings: {
					n: 1,
					c: Pe,
					r: true,
					q: true,
				},
			},
		};
		return ze.sm_m;
	}
	static MBF() {
		ze.sm_mbf ||= i.w0(ze.M());
		return ze.sm_mbf;
	}
	toObject(e = false) {
		return ze.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ze.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ze.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ze();
		return ze.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ze.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ze.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ze.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ze.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_GetPerGameSettings_Response";
	}
}
class xe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!xe.prototype.game_settings) {
			i.Sg(xe.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		xe.sm_m ||= {
			proto: xe,
			fields: {
				game_settings: {
					n: 1,
					c: Pe,
				},
			},
		};
		return xe.sm_m;
	}
	static MBF() {
		xe.sm_mbf ||= i.w0(xe.M());
		return xe.sm_mbf;
	}
	toObject(e = false) {
		return xe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(xe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(xe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new xe();
		return xe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(xe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		xe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(xe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		xe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_SetPerGameSettings_Request";
	}
}
class Ue extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ue.toObject(e, this);
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
		return new Ue();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ue();
		return Ue.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_SetPerGameSettings_Response";
	}
}
class We extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!We.prototype.gameid) {
			i.Sg(We.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		We.sm_m ||= {
			proto: We,
			fields: {
				gameid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return We.sm_m;
	}
	static MBF() {
		We.sm_mbf ||= i.w0(We.M());
		return We.sm_mbf;
	}
	toObject(e = false) {
		return We.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(We.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(We.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new We();
		return We.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(We.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		We.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(We.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		We.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_DeletePerGameSettings_Request";
	}
}
class Ve extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ve.toObject(e, this);
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
		return new Ve();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ve();
		return Ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_DeletePerGameSettings_Response";
	}
}
class He extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!He.prototype.progress) {
			i.Sg(He.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		He.sm_m ||= {
			proto: He,
			fields: {
				progress: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				clip_id: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				eresult: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return He.sm_m;
	}
	static MBF() {
		He.sm_mbf ||= i.w0(He.M());
		return He.sm_mbf;
	}
	toObject(e = false) {
		return He.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(He.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(He.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new He();
		return He.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(He.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		He.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(He.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		He.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_UploadProgress_Notification";
	}
}
class je extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!je.prototype.game_id) {
			i.Sg(je.M());
		}
		g.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		je.sm_m ||= {
			proto: je,
			fields: {
				game_id: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return je.sm_m;
	}
	static MBF() {
		je.sm_mbf ||= i.w0(je.M());
		return je.sm_mbf;
	}
	toObject(e = false) {
		return je.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(je.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(je.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new je();
		return je.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(je.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		je.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(je.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		je.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_SwitchBackgroundRecordingGame_Request";
	}
}
class qe extends g {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		g.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return qe.toObject(e, this);
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
		return new qe();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qe();
		return qe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		qe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		qe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CGameRecording_SwitchBackgroundRecordingGame_Response";
	}
}
export var xM;
(function (e) {
	e.GetAppsWithBackgroundVideoHandler = {
		name: "GameRecording.GetAppsWithBackgroundVideo#1",
		request: h,
		response: C,
	};
	e.GetAppsWithBackgroundVideo = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetAppsWithBackgroundVideo#1",
				(0, a.I8)(h, e),
				C,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetAppsWithBackgroundVideo = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetAppsWithBackgroundVideo#1",
				(0, a.I8)(h, e),
				C,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetTimelinesForAppHandler = {
		name: "GameRecording.GetTimelinesForApp#1",
		request: f,
		response: b,
	};
	e.GetTimelinesForApp = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetTimelinesForApp#1",
				(0, a.I8)(f, e),
				b,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetTimelinesForApp = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetTimelinesForApp#1",
				(0, a.I8)(f, e),
				b,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetTimelinesForClipHandler = {
		name: "GameRecording.GetTimelinesForClip#1",
		request: y,
		response: S,
	};
	e.GetTimelinesForClip = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetTimelinesForClip#1",
				(0, a.I8)(y, e),
				S,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetTimelinesForClip = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetTimelinesForClip#1",
				(0, a.I8)(y, e),
				S,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.QueryPhasesHandler = {
		name: "GameRecording.QueryPhases#1",
		request: w,
		response: v,
	};
	e.QueryPhases = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.QueryPhases#1", (0, a.I8)(w, e), v, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgQueryPhases = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.QueryPhases#1", (0, a.I8)(w, e), v, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.GetTagsHandler = {
		name: "GameRecording.GetTags#1",
		request: M,
		response: T,
	};
	e.GetTags = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.GetTags#1", (0, a.I8)(M, e), T, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgGetTags = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.GetTags#1", (0, a.I8)(M, e), T, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.GetEnoughDiskSpaceHandler = {
		name: "GameRecording.GetEnoughDiskSpace#1",
		request: R,
		response: k,
	};
	e.GetEnoughDiskSpace = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetEnoughDiskSpace#1",
				(0, a.I8)(R, e),
				k,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetEnoughDiskSpace = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetEnoughDiskSpace#1",
				(0, a.I8)(R, e),
				k,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetAvailableDiskSpaceHandler = {
		name: "GameRecording.GetAvailableDiskSpace#1",
		request: D,
		response: N,
	};
	e.GetAvailableDiskSpace = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetAvailableDiskSpace#1",
				(0, a.I8)(D, e),
				N,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetAvailableDiskSpace = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetAvailableDiskSpace#1",
				(0, a.I8)(D, e),
				N,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SaveClipHandler = {
		name: "GameRecording.SaveClip#1",
		request: j,
		response: Q,
	};
	e.SaveClip = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.SaveClip#1", (0, a.I8)(j, e), Q, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgSaveClip = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.SaveClip#1", (0, a.I8)(j, e), Q, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.DeleteClipHandler = {
		name: "GameRecording.DeleteClip#1",
		request: Z,
		response: Y,
	};
	e.DeleteClip = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.DeleteClip#1", (0, a.I8)(Z, e), Y, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgDeleteClip = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.DeleteClip#1", (0, a.I8)(Z, e), Y, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.GetClipsHandler = {
		name: "GameRecording.GetClips#1",
		request: oe,
		response: le,
	};
	e.GetClips = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.GetClips#1", (0, a.I8)(oe, e), le, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgGetClips = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.GetClips#1", (0, a.I8)(oe, e), le, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.UploadClipToSteamHandler = {
		name: "GameRecording.UploadClipToSteam#1",
		request: ne,
		response: ie,
	};
	e.UploadClipToSteam = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.UploadClipToSteam#1",
				(0, a.I8)(ne, e),
				ie,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgUploadClipToSteam = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.UploadClipToSteam#1",
				(0, a.I8)(ne, e),
				ie,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.ExportClipHandler = {
		name: "GameRecording.ExportClip#1",
		request: X,
		response: J,
	};
	e.ExportClip = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.ExportClip#1", (0, a.I8)(X, e), J, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgExportClip = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.ExportClip#1", (0, a.I8)(X, e), J, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.ExportClipPreviewHandler = {
		name: "GameRecording.ExportClipPreview#1",
		request: $,
		response: ee,
	};
	e.ExportClipPreview = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.ExportClipPreview#1",
				(0, a.I8)($, e),
				ee,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgExportClipPreview = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.ExportClipPreview#1",
				(0, a.I8)($, e),
				ee,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.TakeScreenshotHandler = {
		name: "GameRecording.TakeScreenshot#1",
		request: te,
		response: re,
	};
	e.TakeScreenshot = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.TakeScreenshot#1", (0, a.I8)(te, e), re, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgTakeScreenshot = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.TakeScreenshot#1", (0, a.I8)(te, e), re, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.ZipClipHandler = {
		name: "GameRecording.ZipClip#1",
		request: ae,
		response: se,
	};
	e.ZipClip = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.ZipClip#1", (0, a.I8)(ae, e), se, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgZipClip = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.ZipClip#1", (0, a.I8)(ae, e), se, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.StartRecordingHandler = {
		name: "GameRecording.StartRecording#1",
		request: Be,
		response: ve,
	};
	e.StartRecording = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.StartRecording#1", (0, a.I8)(Be, e), ve, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgStartRecording = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.StartRecording#1", (0, a.I8)(Be, e), ve, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.StopRecordingHandler = {
		name: "GameRecording.StopRecording#1",
		request: Ie,
		response: Ee,
	};
	e.StopRecording = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.StopRecording#1", (0, a.I8)(Ie, e), Ee, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgStopRecording = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.StopRecording#1", (0, a.I8)(Ie, e), Ee, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.GetBackgroundRecordingFileSizeHandler = {
		name: "GameRecording.GetBackgroundRecordingFileSize#1",
		request: Me,
		response: Te,
	};
	e.GetBackgroundRecordingFileSize = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetBackgroundRecordingFileSize#1",
				(0, a.I8)(Me, e),
				Te,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetBackgroundRecordingFileSize = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetBackgroundRecordingFileSize#1",
				(0, a.I8)(Me, e),
				Te,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.CleanupBackgroundRecordingsHandler = {
		name: "GameRecording.CleanupBackgroundRecordings#1",
		request: Re,
		response: ke,
	};
	e.CleanupBackgroundRecordings = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.CleanupBackgroundRecordings#1",
				(0, a.I8)(Re, e),
				ke,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgCleanupBackgroundRecordings = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.CleanupBackgroundRecordings#1",
				(0, a.I8)(Re, e),
				ke,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetAndTrimPostGameHighlightsHandler = {
		name: "GameRecording.GetAndTrimPostGameHighlights#1",
		request: ce,
		response: me,
	};
	e.GetAndTrimPostGameHighlights = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetAndTrimPostGameHighlights#1",
				(0, a.I8)(ce, e),
				me,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetAndTrimPostGameHighlights = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetAndTrimPostGameHighlights#1",
				(0, a.I8)(ce, e),
				me,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetThumbnailsHandler = {
		name: "GameRecording.GetThumbnails#1",
		request: ye,
		response: Se,
	};
	e.GetThumbnails = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.GetThumbnails#1", (0, a.I8)(ye, e), Se, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.SendMsgGetThumbnails = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("GameRecording.GetThumbnails#1", (0, a.I8)(ye, e), Se, {
				ePrivilege: 1,
				eClientExecutionSite: 1,
			});
		}
	};
	e.GetPlatformCapabilitiesHandler = {
		name: "GameRecording.GetPlatformCapabilities#1",
		request: De,
		response: Ne,
	};
	e.GetPlatformCapabilities = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetPlatformCapabilities#1",
				(0, a.I8)(De, e),
				Ne,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetPlatformCapabilities = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetPlatformCapabilities#1",
				(0, a.I8)(De, e),
				Ne,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyTimelineChangedHandler = {
		name: "GameRecording.NotifyTimelineChanged#1",
		request: F,
	};
	e.RegisterForNotifyTimelineChanged = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyTimelineChangedHandler,
				t,
			);
		}
	};
	e.NotifyTimelineChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyTimelineChanged#1",
				(0, a.I8)(F, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyTimelineChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyTimelineChanged#1",
				(0, a.I8)(F, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyRecordingSessionChangedHandler = {
		name: "GameRecording.NotifyRecordingSessionChanged#1",
		request: G,
	};
	e.RegisterForNotifyRecordingSessionChanged = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyRecordingSessionChangedHandler,
				t,
			);
		}
	};
	e.NotifyRecordingSessionChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyRecordingSessionChanged#1",
				(0, a.I8)(G, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyRecordingSessionChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyRecordingSessionChanged#1",
				(0, a.I8)(G, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyTimelineEntryChangedHandler = {
		name: "GameRecording.NotifyTimelineEntryChanged#1",
		request: P,
	};
	e.RegisterForNotifyTimelineEntryChanged = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyTimelineEntryChangedHandler,
				t,
			);
		}
	};
	e.NotifyTimelineEntryChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyTimelineEntryChanged#1",
				(0, a.I8)(P, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyTimelineEntryChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyTimelineEntryChanged#1",
				(0, a.I8)(P, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyTimelineEntryRemovedHandler = {
		name: "GameRecording.NotifyTimelineEntryRemoved#1",
		request: L,
	};
	e.RegisterForNotifyTimelineEntryRemoved = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyTimelineEntryRemovedHandler,
				t,
			);
		}
	};
	e.NotifyTimelineEntryRemoved = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyTimelineEntryRemoved#1",
				(0, a.I8)(L, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyTimelineEntryRemoved = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyTimelineEntryRemoved#1",
				(0, a.I8)(L, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyClipCreatedHandler = {
		name: "GameRecording.NotifyClipCreated#1",
		request: Fe,
	};
	e.RegisterForNotifyClipCreated = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyClipCreatedHandler,
				t,
			);
		}
	};
	e.NotifyClipCreated = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyClipCreated#1",
				(0, a.I8)(Fe, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyClipCreated = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyClipCreated#1",
				(0, a.I8)(Fe, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyClipDeletedHandler = {
		name: "GameRecording.NotifyClipDeleted#1",
		request: Ge,
	};
	e.RegisterForNotifyClipDeleted = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyClipDeletedHandler,
				t,
			);
		}
	};
	e.NotifyClipDeleted = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyClipDeleted#1",
				(0, a.I8)(Ge, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyClipDeleted = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyClipDeleted#1",
				(0, a.I8)(Ge, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyExportProgressHandler = {
		name: "GameRecording.NotifyExportProgress#1",
		request: Oe,
	};
	e.RegisterForNotifyExportProgress = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyExportProgressHandler,
				t,
			);
		}
	};
	e.NotifyExportProgress = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyExportProgress#1",
				(0, a.I8)(Oe, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyExportProgress = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyExportProgress#1",
				(0, a.I8)(Oe, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyUploadProgressHandler = {
		name: "GameRecording.NotifyUploadProgress#1",
		request: He,
	};
	e.RegisterForNotifyUploadProgress = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyUploadProgressHandler,
				t,
			);
		}
	};
	e.NotifyUploadProgress = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyUploadProgress#1",
				(0, a.I8)(He, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyUploadProgress = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyUploadProgress#1",
				(0, a.I8)(He, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyLowDiskSpaceHandler = {
		name: "GameRecording.NotifyLowDiskSpace#1",
		request: z,
	};
	e.RegisterForNotifyLowDiskSpace = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyLowDiskSpaceHandler,
				t,
			);
		}
	};
	e.NotifyLowDiskSpace = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyLowDiskSpace#1",
				(0, a.I8)(z, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyLowDiskSpace = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyLowDiskSpace#1",
				(0, a.I8)(z, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyPostGameHighlightsChangedHandler = {
		name: "GameRecording.NotifyPostGameHighlightsChanged#1",
		request: x,
	};
	e.RegisterForNotifyPostGameHighlightsChanged = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyPostGameHighlightsChangedHandler,
				t,
			);
		}
	};
	e.NotifyPostGameHighlightsChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyPostGameHighlightsChanged#1",
				(0, a.I8)(x, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyPostGameHighlightsChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyPostGameHighlightsChanged#1",
				(0, a.I8)(x, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyOpenOverlayToGamePhaseHandler = {
		name: "GameRecording.NotifyOpenOverlayToGamePhase#1",
		request: U,
	};
	e.RegisterForNotifyOpenOverlayToGamePhase = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyOpenOverlayToGamePhaseHandler,
				t,
			);
		}
	};
	e.NotifyOpenOverlayToGamePhase = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyOpenOverlayToGamePhase#1",
				(0, a.I8)(U, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyOpenOverlayToGamePhase = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyOpenOverlayToGamePhase#1",
				(0, a.I8)(U, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyOpenOverlayToTimelineEventHandler = {
		name: "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
		request: W,
	};
	e.RegisterForNotifyOpenOverlayToTimelineEvent = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyOpenOverlayToTimelineEventHandler,
				t,
			);
		}
	};
	e.NotifyOpenOverlayToTimelineEvent = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyOpenOverlayToTimelineEvent#1",
				(0, a.I8)(W, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyOpenOverlayToTimelineEvent = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyOpenOverlayToTimelineEvent#1",
				(0, a.I8)(W, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyPhaseListChangedHandler = {
		name: "GameRecording.NotifyPhaseListChanged#1",
		request: V,
	};
	e.RegisterForNotifyPhaseListChanged = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyPhaseListChangedHandler,
				t,
			);
		}
	};
	e.NotifyPhaseListChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyPhaseListChanged#1",
				(0, a.I8)(V, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyPhaseListChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"GameRecording.NotifyPhaseListChanged#1",
				(0, a.I8)(V, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetPerGameSettingsHandler = {
		name: "GameRecording.GetPerGameSettings#1",
		request: Le,
		response: ze,
	};
	e.GetPerGameSettings = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetPerGameSettings#1",
				(0, a.I8)(Le, e),
				ze,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetPerGameSettings = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetPerGameSettings#1",
				(0, a.I8)(Le, e),
				ze,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SetPerGameSettingsHandler = {
		name: "GameRecording.SetPerGameSettings#1",
		request: xe,
		response: Ue,
	};
	e.SetPerGameSettings = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.SetPerGameSettings#1",
				(0, a.I8)(xe, e),
				Ue,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgSetPerGameSettings = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.SetPerGameSettings#1",
				(0, a.I8)(xe, e),
				Ue,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.DeletePerGameSettingsHandler = {
		name: "GameRecording.DeletePerGameSettings#1",
		request: We,
		response: Ve,
	};
	e.DeletePerGameSettings = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.DeletePerGameSettings#1",
				(0, a.I8)(We, e),
				Ve,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgDeletePerGameSettings = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.DeletePerGameSettings#1",
				(0, a.I8)(We, e),
				Ve,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.UserAddTimelineEntryHandler = {
		name: "GameRecording.UserAddTimelineEntry#1",
		request: ue,
		response: de,
	};
	e.UserAddTimelineEntry = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.UserAddTimelineEntry#1",
				(0, a.I8)(ue, e),
				de,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgUserAddTimelineEntry = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.UserAddTimelineEntry#1",
				(0, a.I8)(ue, e),
				de,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.UserUpdateTimelineEntryHandler = {
		name: "GameRecording.UserUpdateTimelineEntry#1",
		request: Ae,
		response: pe,
	};
	e.UserUpdateTimelineEntry = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.UserUpdateTimelineEntry#1",
				(0, a.I8)(Ae, e),
				pe,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgUserUpdateTimelineEntry = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.UserUpdateTimelineEntry#1",
				(0, a.I8)(Ae, e),
				pe,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.UserRemoveTimelineEntryHandler = {
		name: "GameRecording.UserRemoveTimelineEntry#1",
		request: ge,
		response: he,
	};
	e.UserRemoveTimelineEntry = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.UserRemoveTimelineEntry#1",
				(0, a.I8)(ge, e),
				he,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgUserRemoveTimelineEntry = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.UserRemoveTimelineEntry#1",
				(0, a.I8)(ge, e),
				he,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.ManuallyDeleteRecordingsForAppsHandler = {
		name: "GameRecording.ManuallyDeleteRecordingsForApps#1",
		request: Ce,
		response: _e,
	};
	e.ManuallyDeleteRecordingsForApps = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.ManuallyDeleteRecordingsForApps#1",
				(0, a.I8)(Ce, e),
				_e,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgManuallyDeleteRecordingsForApps = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.ManuallyDeleteRecordingsForApps#1",
				(0, a.I8)(Ce, e),
				_e,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetTotalDiskSpaceUsageHandler = {
		name: "GameRecording.GetTotalDiskSpaceUsage#1",
		request: fe,
		response: be,
	};
	e.GetTotalDiskSpaceUsage = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetTotalDiskSpaceUsage#1",
				(0, a.I8)(fe, e),
				be,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetTotalDiskSpaceUsage = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.GetTotalDiskSpaceUsage#1",
				(0, a.I8)(fe, e),
				be,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SwitchBackgroundRecordingGameHandler = {
		name: "GameRecording.SwitchBackgroundRecordingGame#1",
		request: je,
		response: qe,
	};
	e.SwitchBackgroundRecordingGame = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.SwitchBackgroundRecordingGame#1",
				(0, a.I8)(je, e),
				qe,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgSwitchBackgroundRecordingGame = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"GameRecording.SwitchBackgroundRecordingGame#1",
				(0, a.I8)(je, e),
				qe,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
})((xM ||= {}));
