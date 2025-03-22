var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
const s = n.Message;
class o extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!o.prototype.publishedfileid) {
			i.Sg(o.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		o.sm_m ||= {
			proto: o,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				vote_up: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return o.sm_m;
	}
	static MBF() {
		o.sm_mbf ||= i.w0(o.M());
		return o.sm_mbf;
	}
	toObject(e = false) {
		return o.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(o.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(o.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new o();
		return o.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(o.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		o.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(o.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		o.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_Vote_Request";
	}
}
class l extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return l.toObject(e, this);
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
		return new l();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new l();
		return l.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		l.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_Vote_Response";
	}
}
export class d5 extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d5.prototype.publishedfileid) {
			i.Sg(d5.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d5.sm_m ||= {
			proto: d5,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				list_type: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				notify_client: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_dependencies: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return d5.sm_m;
	}
	static MBF() {
		d5.sm_mbf ||= i.w0(d5.M());
		return d5.sm_mbf;
	}
	toObject(e = false) {
		return d5.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(d5.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(d5.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new d5();
		return d5.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(d5.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		d5.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(d5.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		d5.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_Subscribe_Request";
	}
}
class m extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_Subscribe_Response";
	}
}
export class Mg extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Mg.prototype.publishedfileid) {
			i.Sg(Mg.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Mg.sm_m ||= {
			proto: Mg,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				list_type: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				notify_client: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Mg.sm_m;
	}
	static MBF() {
		Mg.sm_mbf ||= i.w0(Mg.M());
		return Mg.sm_mbf;
	}
	toObject(e = false) {
		return Mg.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Mg.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Mg.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Mg();
		return Mg.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Mg.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Mg.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Mg.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Mg.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_Unsubscribe_Request";
	}
}
class d extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
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
		var e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_Unsubscribe_Response";
	}
}
class A extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.publishedfileid) {
			i.Sg(A.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CPublishedFile_CanSubscribe_Request";
	}
}
class p extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.can_subscribe) {
			i.Sg(p.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				can_subscribe: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CPublishedFile_CanSubscribe_Response";
	}
}
class g extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.sectionid) {
			i.Sg(g.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				sectionid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				title: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				description_text: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				sort_order: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		var e = new n.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(g.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "PublishedFileSubSection";
	}
}
export class Gl extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Gl.prototype.publishedfileid) {
			i.Sg(Gl.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Gl.sm_m ||= {
			proto: Gl,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				for_table_of_contents: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				specific_sectionid: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				desired_revision: {
					n: 4,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
			},
		};
		return Gl.sm_m;
	}
	static MBF() {
		Gl.sm_mbf ||= i.w0(Gl.M());
		return Gl.sm_mbf;
	}
	toObject(e = false) {
		return Gl.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Gl.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Gl.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Gl();
		return Gl.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Gl.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Gl.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Gl.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Gl.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_GetSubSectionData_Request";
	}
}
class C extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.sub_sections) {
			i.Sg(C.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				sub_sections: {
					n: 1,
					c: g,
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
		return "CPublishedFile_GetSubSectionData_Response";
	}
}
export class mU extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!mU.prototype.appid) {
			i.Sg(mU.M());
		}
		s.initialize(this, e, 0, -1, [13], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		mU.sm_m ||= {
			proto: mU,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				consumer_appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				cloudfilename: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				preview_cloudfilename: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				title: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				file_description: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				file_type: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				consumer_shortcut_name: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				youtube_username: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				youtube_videoid: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				visibility: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				redirect_uri: {
					n: 12,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				tags: {
					n: 13,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				collection_type: {
					n: 14,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_type: {
					n: 15,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				url: {
					n: 16,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return mU.sm_m;
	}
	static MBF() {
		mU.sm_mbf ||= i.w0(mU.M());
		return mU.sm_mbf;
	}
	toObject(e = false) {
		return mU.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(mU.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(mU.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new mU();
		return mU.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(mU.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		mU.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(mU.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		mU.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_Publish_Request";
	}
}
class f extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.publishedfileid) {
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
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				redirect_uri: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CPublishedFile_Publish_Response";
	}
}
class b extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.timestamp) {
			i.Sg(b.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				timestamp: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				game_branch_min: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_branch_max: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				manifestid: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "PublishedFileAuthorSnapshot";
	}
}
class y extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.result) {
			i.Sg(y.M());
		}
		s.initialize(this, e, 0, -1, [51, 52, 53, 54, 72, 69, 70, 75], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				result: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				publishedfileid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				creator: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				creator_appid: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				consumer_appid: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				consumer_shortcutid: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				filename: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				file_size: {
					n: 8,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				preview_file_size: {
					n: 9,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				file_url: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				preview_url: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				youtubevideoid: {
					n: 12,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				url: {
					n: 13,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				hcontent_file: {
					n: 14,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				hcontent_preview: {
					n: 15,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				title: {
					n: 16,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				file_description: {
					n: 17,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				short_description: {
					n: 18,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				time_created: {
					n: 19,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_updated: {
					n: 20,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				visibility: {
					n: 21,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				flags: {
					n: 22,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				workshop_file: {
					n: 23,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				workshop_accepted: {
					n: 24,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				show_subscribe_all: {
					n: 25,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				num_comments_developer: {
					n: 26,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				num_comments_public: {
					n: 27,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				banned: {
					n: 28,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				ban_reason: {
					n: 29,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				banner: {
					n: 30,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				can_be_deleted: {
					n: 31,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				incompatible: {
					n: 32,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				app_name: {
					n: 33,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				file_type: {
					n: 34,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				can_subscribe: {
					n: 35,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				subscriptions: {
					n: 36,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				favorited: {
					n: 37,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				followers: {
					n: 38,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				lifetime_subscriptions: {
					n: 39,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				lifetime_favorited: {
					n: 40,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				lifetime_followers: {
					n: 41,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				lifetime_playtime: {
					n: 62,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				lifetime_playtime_sessions: {
					n: 63,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				views: {
					n: 42,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				image_width: {
					n: 43,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				image_height: {
					n: 44,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				image_url: {
					n: 45,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				spoiler_tag: {
					n: 46,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				shortcutid: {
					n: 47,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				shortcutname: {
					n: 48,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				num_children: {
					n: 49,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				num_reports: {
					n: 50,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				previews: {
					n: 51,
					c: w,
					r: true,
					q: true,
				},
				tags: {
					n: 52,
					c: S,
					r: true,
					q: true,
				},
				children: {
					n: 53,
					c: B,
					r: true,
					q: true,
				},
				kvtags: {
					n: 54,
					c: v,
					r: true,
					q: true,
				},
				vote_data: {
					n: 55,
					c: I,
				},
				playtime_stats: {
					n: 64,
					c: M,
				},
				time_subscribed: {
					n: 56,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				for_sale_data: {
					n: 57,
					c: E,
				},
				metadata: {
					n: 58,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				language: {
					n: 61,
					d: 0,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				maybe_inappropriate_sex: {
					n: 65,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				maybe_inappropriate_violence: {
					n: 66,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				content_descriptorids: {
					n: 72,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				revision_change_number: {
					n: 67,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				revision: {
					n: 68,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				available_revisions: {
					n: 69,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				reactions: {
					n: 70,
					c: T,
					r: true,
					q: true,
				},
				ban_text_check_result: {
					n: 71,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				search_score: {
					n: 73,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				external_asset_id: {
					n: 74,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				author_snapshots: {
					n: 75,
					c: b,
					r: true,
					q: true,
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
		return "PublishedFileDetails";
	}
}
class S extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.tag) {
			i.Sg(S.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				tag: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				adminonly: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_name: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "PublishedFileDetails_Tag";
	}
}
class w extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.previewid) {
			i.Sg(w.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				previewid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				sortorder: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				url: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				size: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				filename: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				youtubevideoid: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				preview_type: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				external_reference: {
					n: 8,
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
		return "PublishedFileDetails_Preview";
	}
}
class B extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.publishedfileid) {
			i.Sg(B.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				sortorder: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				file_type: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "PublishedFileDetails_Child";
	}
}
class v extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.key) {
			i.Sg(v.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				value: {
					n: 2,
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
		return "PublishedFileDetails_KVTag";
	}
}
class I extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.score) {
			i.Sg(I.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				score: {
					n: 1,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				votes_up: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				votes_down: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				trusted_score: {
					n: 4,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				trusted_votes_up: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				trusted_votes_down: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "PublishedFileDetails_VoteData";
	}
}
class E extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!E.prototype.is_for_sale) {
			i.Sg(E.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		E.sm_m ||= {
			proto: E,
			fields: {
				is_for_sale: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				price_category: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				estatus: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				price_category_floor: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				price_is_pay_what_you_want: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				discount_percentage: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "PublishedFileDetails_ForSaleData";
	}
}
class M extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M.prototype.playtime_seconds) {
			i.Sg(M.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M.sm_m ||= {
			proto: M,
			fields: {
				playtime_seconds: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				num_sessions: {
					n: 2,
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
		return "PublishedFileDetails_PlaytimeStats";
	}
}
class T extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!T.prototype.reactionid) {
			i.Sg(T.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		T.sm_m ||= {
			proto: T,
			fields: {
				reactionid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				count: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "PublishedFileDetails_Reaction";
	}
}
export class TA extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!TA.prototype.publishedfileids) {
			i.Sg(TA.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		TA.sm_m ||= {
			proto: TA,
			fields: {
				publishedfileids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
				},
				includetags: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				includeadditionalpreviews: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				includechildren: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				includekvtags: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				includevotes: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				short_description: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				includeforsaledata: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				includemetadata: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				language: {
					n: 12,
					d: 0,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				return_playtime_stats: {
					n: 13,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				strip_description_bbcode: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				desired_revision: {
					n: 16,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				includereactions: {
					n: 17,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				admin_query: {
					n: 18,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return TA.sm_m;
	}
	static MBF() {
		TA.sm_mbf ||= i.w0(TA.M());
		return TA.sm_mbf;
	}
	toObject(e = false) {
		return TA.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(TA.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(TA.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new TA();
		return TA.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(TA.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		TA.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(TA.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		TA.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_GetDetails_Request";
	}
}
class k extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!k.prototype.publishedfiledetails) {
			i.Sg(k.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		k.sm_m ||= {
			proto: k,
			fields: {
				publishedfiledetails: {
					n: 1,
					c: y,
					r: true,
					q: true,
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
		return "CPublishedFile_GetDetails_Response";
	}
}
class D extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.appid) {
			i.Sg(D.M());
		}
		s.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_time_updated: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				workshop_items: {
					n: 3,
					c: N,
					r: true,
					q: true,
				},
			},
		};
		return D.sm_m;
	}
	static MBF() {
		D.sm_mbf ||= i.w0(D.M());
		return D.sm_mbf;
	}
	toObject(e = false) {
		return D.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(D.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(D.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(D.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(D.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_GetItemInfo_Request";
	}
}
class N extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.published_file_id) {
			i.Sg(N.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				published_file_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				time_updated: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				desired_revision: {
					n: 3,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "CPublishedFile_GetItemInfo_Request_WorkshopItem";
	}
}
class F extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.update_time) {
			i.Sg(F.M());
		}
		s.initialize(this, e, 0, -1, [2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		F.sm_m ||= {
			proto: F,
			fields: {
				update_time: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				workshop_items: {
					n: 2,
					c: G,
					r: true,
					q: true,
				},
				private_items: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
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
		return "CPublishedFile_GetItemInfo_Response";
	}
}
class G extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.published_file_id) {
			i.Sg(G.M());
		}
		s.initialize(this, e, 0, -1, [6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				published_file_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				time_updated: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				manifest_id: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				flags: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				revision: {
					n: 5,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				author_snapshots: {
					n: 6,
					c: b,
					r: true,
					q: true,
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
		return "CPublishedFile_GetItemInfo_Response_WorkshopItemInfo";
	}
}
export class NZ extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!NZ.prototype.steamid) {
			i.Sg(NZ.M());
		}
		s.initialize(this, e, 0, -1, [10, 11, 30, 34, 37], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		NZ.sm_m ||= {
			proto: NZ,
			fields: {
				steamid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				shortcutid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				page: {
					n: 4,
					d: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				numperpage: {
					n: 5,
					d: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				type: {
					n: 6,
					d: "myfiles",
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				sortmethod: {
					n: 7,
					d: "lastupdated",
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				privacy: {
					n: 9,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				requiredtags: {
					n: 10,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				excludedtags: {
					n: 11,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				required_kv_tags: {
					n: 30,
					c: P,
					r: true,
					q: true,
				},
				filetype: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				creator_appid: {
					n: 15,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				match_cloud_filename: {
					n: 16,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				cache_max_age_seconds: {
					n: 27,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				language: {
					n: 29,
					d: 0,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				taggroups: {
					n: 34,
					c: L,
					r: true,
					q: true,
				},
				excluded_content_descriptors: {
					n: 37,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				admin_query: {
					n: 38,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				totalonly: {
					n: 17,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				ids_only: {
					n: 18,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_vote_data: {
					n: 19,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_tags: {
					n: 20,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_kv_tags: {
					n: 21,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_previews: {
					n: 22,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_children: {
					n: 23,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_short_description: {
					n: 24,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_for_sale_data: {
					n: 26,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_metadata: {
					n: 28,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_playtime_stats: {
					n: 31,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				strip_description_bbcode: {
					n: 32,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_reactions: {
					n: 35,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				startindex_override: {
					n: 25,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				desired_revision: {
					n: 33,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				return_apps: {
					n: 36,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return NZ.sm_m;
	}
	static MBF() {
		NZ.sm_mbf ||= i.w0(NZ.M());
		return NZ.sm_mbf;
	}
	toObject(e = false) {
		return NZ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(NZ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(NZ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new NZ();
		return NZ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(NZ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		NZ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(NZ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		NZ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_GetUserFiles_Request";
	}
}
class P extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.key) {
			i.Sg(P.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				value: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CPublishedFile_GetUserFiles_Request_KVTag";
	}
}
class L extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!L.prototype.tags) {
			i.Sg(L.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		L.sm_m ||= {
			proto: L,
			fields: {
				tags: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
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
		return "CPublishedFile_GetUserFiles_Request_TagGroup";
	}
}
class z extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.total) {
			i.Sg(z.M());
		}
		s.initialize(this, e, 0, -1, [3, 4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		z.sm_m ||= {
			proto: z,
			fields: {
				total: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				startindex: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				publishedfiledetails: {
					n: 3,
					c: y,
					r: true,
					q: true,
				},
				apps: {
					n: 4,
					c: x,
					r: true,
					q: true,
				},
			},
		};
		return z.sm_m;
	}
	static MBF() {
		z.sm_mbf ||= i.w0(z.M());
		return z.sm_mbf;
	}
	toObject(e = false) {
		return z.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(z.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new z();
		return z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(z.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(z.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_GetUserFiles_Response";
	}
}
class x extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.appid) {
			i.Sg(x.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		x.sm_m ||= {
			proto: x,
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
				shortcutid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				private: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CPublishedFile_GetUserFiles_Response_App";
	}
}
class U extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.appid) {
			i.Sg(U.M());
		}
		s.initialize(this, e, 0, -1, [6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		U.sm_m ||= {
			proto: U,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				publishedfileid: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				title: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				file_description: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				visibility: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				tags: {
					n: 6,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				filename: {
					n: 7,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				preview_filename: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				spoiler_tag: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				image_width: {
					n: 15,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				image_height: {
					n: 16,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				language: {
					n: 17,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CPublishedFile_Update_Request";
	}
}
class W extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return W.toObject(e, this);
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
		return new W();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new W();
		return W.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_Update_Response";
	}
}
export class qH extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qH.prototype.publishedfileid) {
			i.Sg(qH.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qH.sm_m ||= {
			proto: qH,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				appid: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return qH.sm_m;
	}
	static MBF() {
		qH.sm_mbf ||= i.w0(qH.M());
		return qH.sm_mbf;
	}
	toObject(e = false) {
		return qH.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qH.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qH.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qH();
		return qH.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qH.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		qH.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qH.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		qH.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_Delete_Request";
	}
}
class H extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return H.toObject(e, this);
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
		return new H();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new H();
		return H.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_Delete_Response";
	}
}
class j extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!j.prototype.publishedfileid) {
			i.Sg(j.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		j.sm_m ||= {
			proto: j,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				timestamp: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				language: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CPublishedFile_GetChangeHistoryEntry_Request";
	}
}
class q extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.change_description) {
			i.Sg(q.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				change_description: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				language: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				saved_snapshot: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				snapshot_game_branch_min: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				snapshot_game_branch_max: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				manifest_id: {
					n: 6,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CPublishedFile_GetChangeHistoryEntry_Response";
	}
}
class Q extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q.prototype.publishedfileid) {
			i.Sg(Q.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q.sm_m ||= {
			proto: Q,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				total_only: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				startindex: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				count: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				language: {
					n: 5,
					d: 0,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CPublishedFile_GetChangeHistory_Request";
	}
}
class Z extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z.prototype.changes) {
			i.Sg(Z.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z.sm_m ||= {
			proto: Z,
			fields: {
				changes: {
					n: 1,
					c: Y,
					r: true,
					q: true,
				},
				total: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CPublishedFile_GetChangeHistory_Response";
	}
}
class Y extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.timestamp) {
			i.Sg(Y.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Y.sm_m ||= {
			proto: Y,
			fields: {
				timestamp: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				change_description: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				language: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				saved_snapshot: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				snapshot_game_branch_min: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				snapshot_game_branch_max: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				manifest_id: {
					n: 7,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
			},
		};
		return Y.sm_m;
	}
	static MBF() {
		Y.sm_mbf ||= i.w0(Y.M());
		return Y.sm_mbf;
	}
	toObject(e = false) {
		return Y.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Y.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Y();
		return Y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Y.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Y.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_GetChangeHistory_Response_ChangeLog";
	}
}
class K extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!K.prototype.appid) {
			i.Sg(K.M());
		}
		s.initialize(this, e, 0, -1, [3, 5, 7], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		K.sm_m ||= {
			proto: K,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				matching_file_type: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				tags: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				match_all_tags: {
					n: 4,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				excluded_tags: {
					n: 5,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				desired_queue_size: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				desired_revision: {
					n: 8,
					d: 0,
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
		return "CPublishedFile_RefreshVotingQueue_Request";
	}
}
class X extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return X.toObject(e, this);
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
		return new X();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new X();
		return X.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_RefreshVotingQueue_Response";
	}
}
export class WJ extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!WJ.prototype.query_type) {
			i.Sg(WJ.M());
		}
		s.initialize(
			this,
			e,
			0,
			-1,
			[6, 7, 9, 10, 34, 42, 46, 25, 26, 27, 29],
			null,
		);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		WJ.sm_m ||= {
			proto: WJ,
			fields: {
				query_type: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				page: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				cursor: {
					n: 39,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				numperpage: {
					n: 3,
					d: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				creator_appid: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				requiredtags: {
					n: 6,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				excludedtags: {
					n: 7,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				match_all_tags: {
					n: 8,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				required_flags: {
					n: 9,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				omitted_flags: {
					n: 10,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
				search_text: {
					n: 11,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				filetype: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				child_publishedfileid: {
					n: 13,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				days: {
					n: 14,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				include_recent_votes_only: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				cache_max_age_seconds: {
					n: 31,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				language: {
					n: 33,
					d: 0,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				required_kv_tags: {
					n: 34,
					c: $,
					r: true,
					q: true,
				},
				taggroups: {
					n: 42,
					c: ee,
					r: true,
					q: true,
				},
				date_range_created: {
					n: 44,
					c: te,
				},
				date_range_updated: {
					n: 45,
					c: te,
				},
				excluded_content_descriptors: {
					n: 46,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				admin_query: {
					n: 47,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				totalonly: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				ids_only: {
					n: 35,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_vote_data: {
					n: 17,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_tags: {
					n: 18,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_kv_tags: {
					n: 19,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_previews: {
					n: 20,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_children: {
					n: 21,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_short_description: {
					n: 22,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_for_sale_data: {
					n: 30,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_metadata: {
					n: 32,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				return_playtime_stats: {
					n: 36,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				return_details: {
					n: 37,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				strip_description_bbcode: {
					n: 38,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				desired_revision: {
					n: 40,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				return_reactions: {
					n: 43,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return WJ.sm_m;
	}
	static MBF() {
		WJ.sm_mbf ||= i.w0(WJ.M());
		return WJ.sm_mbf;
	}
	toObject(e = false) {
		return WJ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(WJ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(WJ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new WJ();
		return WJ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(WJ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		WJ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(WJ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		WJ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_QueryFiles_Request";
	}
}
class $ extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$.prototype.key) {
			i.Sg($.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$.sm_m ||= {
			proto: $,
			fields: {
				key: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				value: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CPublishedFile_QueryFiles_Request_KVTag";
	}
}
class ee extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ee.prototype.tags) {
			i.Sg(ee.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ee.sm_m ||= {
			proto: ee,
			fields: {
				tags: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
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
		return "CPublishedFile_QueryFiles_Request_TagGroup";
	}
}
class te extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!te.prototype.timestamp_start) {
			i.Sg(te.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		te.sm_m ||= {
			proto: te,
			fields: {
				timestamp_start: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				timestamp_end: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CPublishedFile_QueryFiles_Request_DateRange";
	}
}
class re extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.total) {
			i.Sg(re.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		re.sm_m ||= {
			proto: re,
			fields: {
				total: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				publishedfiledetails: {
					n: 2,
					c: y,
					r: true,
					q: true,
				},
				next_cursor: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CPublishedFile_QueryFiles_Response";
	}
}
class ne extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ne.prototype.publishedfileid) {
			i.Sg(ne.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ne.sm_m ||= {
			proto: ne,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				relationship: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CPublishedFile_AddAppRelationship_Request";
	}
}
class ie extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ie.toObject(e, this);
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
		return new ie();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ie();
		return ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_AddAppRelationship_Response";
	}
}
class ae extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ae.prototype.publishedfileid) {
			i.Sg(ae.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ae.sm_m ||= {
			proto: ae,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				relationship: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CPublishedFile_RemoveAppRelationship_Request";
	}
}
class se extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return se.toObject(e, this);
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
		return new se();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new se();
		return se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_RemoveAppRelationship_Response";
	}
}
class oe extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!oe.prototype.publishedfileid) {
			i.Sg(oe.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		oe.sm_m ||= {
			proto: oe,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CPublishedFile_GetAppRelationships_Request";
	}
}
class le extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!le.prototype.app_relationships) {
			i.Sg(le.M());
		}
		s.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		le.sm_m ||= {
			proto: le,
			fields: {
				app_relationships: {
					n: 3,
					c: ce,
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
		return "CPublishedFile_GetAppRelationships_Response";
	}
}
class ce extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ce.prototype.appid) {
			i.Sg(ce.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ce.sm_m ||= {
			proto: ce,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				relationship: {
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
		return "CPublishedFile_GetAppRelationships_Response_AppRelationship";
	}
}
class me extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!me.prototype.publishedfileids) {
			i.Sg(me.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		me.sm_m ||= {
			proto: me,
			fields: {
				publishedfileids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
				filter_relationship: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CPublishedFile_GetAppRelationshipsBatched_Request";
	}
}
class ue extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ue.prototype.relationships) {
			i.Sg(ue.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ue.sm_m ||= {
			proto: ue,
			fields: {
				relationships: {
					n: 1,
					c: Ae,
					r: true,
					q: true,
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
		return "CPublishedFile_GetAppRelationshipsBatched_Response";
	}
}
class de extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!de.prototype.appid) {
			i.Sg(de.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		de.sm_m ||= {
			proto: de,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				relationship: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CPublishedFile_GetAppRelationshipsBatched_Response_AppRelationship";
	}
}
class Ae extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ae.prototype.publishedfileid) {
			i.Sg(Ae.M());
		}
		s.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ae.sm_m ||= {
			proto: Ae,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				result: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				app_relationships: {
					n: 3,
					c: de,
					r: true,
					q: true,
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
		return "CPublishedFile_GetAppRelationshipsBatched_Response_PublishedFileAppRelationship";
	}
}
class pe extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pe.prototype.appid) {
			i.Sg(pe.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pe.sm_m ||= {
			proto: pe,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				publishedfileids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
			},
		};
		return pe.sm_m;
	}
	static MBF() {
		pe.sm_mbf ||= i.w0(pe.M());
		return pe.sm_mbf;
	}
	toObject(e = false) {
		return pe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(pe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(pe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new pe();
		return pe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(pe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(pe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		pe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_StartPlaytimeTracking_Request";
	}
}
class ge extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return ge.toObject(e, this);
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
		return new ge();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ge();
		return ge.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ge.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_StartPlaytimeTracking_Response";
	}
}
class he extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!he.prototype.appid) {
			i.Sg(he.M());
		}
		s.initialize(this, e, 0, -1, [2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		he.sm_m ||= {
			proto: he,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				publishedfileids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
			},
		};
		return he.sm_m;
	}
	static MBF() {
		he.sm_mbf ||= i.w0(he.M());
		return he.sm_mbf;
	}
	toObject(e = false) {
		return he.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(he.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(he.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new he();
		return he.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(he.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(he.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		he.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_StopPlaytimeTracking_Request";
	}
}
class Ce extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ce.toObject(e, this);
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
		return new Ce();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ce();
		return Ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_StopPlaytimeTracking_Response";
	}
}
class _e extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_e.prototype.appid) {
			i.Sg(_e.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_e.sm_m ||= {
			proto: _e,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return _e.sm_m;
	}
	static MBF() {
		_e.sm_mbf ||= i.w0(_e.M());
		return _e.sm_mbf;
	}
	toObject(e = false) {
		return _e.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(_e.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(_e.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _e();
		return _e.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(_e.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_e.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		_e.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_StopPlaytimeTrackingForAllAppItems_Request";
	}
}
class fe extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return fe.toObject(e, this);
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
		return new fe();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new fe();
		return fe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		fe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_StopPlaytimeTrackingForAllAppItems_Response";
	}
}
class _be extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_be.prototype.appid) {
			i.Sg(_be.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_be.sm_m ||= {
			proto: _be,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				controller_config_usage: {
					n: 2,
					c: ye,
					r: true,
					q: true,
				},
			},
		};
		return _be.sm_m;
	}
	static MBF() {
		_be.sm_mbf ||= i.w0(_be.M());
		return _be.sm_mbf;
	}
	toObject(e = false) {
		return _be.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(_be.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(_be.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new _be();
		return _be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(_be.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		_be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(_be.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		_be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_SetPlaytimeForControllerConfigs_Request";
	}
}
class ye extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ye.prototype.publishedfileid) {
			i.Sg(ye.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ye.sm_m ||= {
			proto: ye,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				seconds_active: {
					n: 2,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
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
		return "CPublishedFile_SetPlaytimeForControllerConfigs_Request_ControllerConfigUsage";
	}
}
class Se extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Se.toObject(e, this);
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
		return new Se();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Se();
		return Se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_SetPlaytimeForControllerConfigs_Response";
	}
}
class we extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!we.prototype.publishedfileid) {
			i.Sg(we.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		we.sm_m ||= {
			proto: we,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				child_publishedfileid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
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
		return "CPublishedFile_AddChild_Request";
	}
}
class Be extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Be.toObject(e, this);
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
		return new Be();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Be();
		return Be.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Be.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_AddChild_Response";
	}
}
class ve extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ve.prototype.publishedfileid) {
			i.Sg(ve.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ve.sm_m ||= {
			proto: ve,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				child_publishedfileid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return ve.sm_m;
	}
	static MBF() {
		ve.sm_mbf ||= i.w0(ve.M());
		return ve.sm_mbf;
	}
	toObject(e = false) {
		return ve.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ve.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ve.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ve();
		return ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ve.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ve.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_RemoveChild_Request";
	}
}
class Ie extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Ie.toObject(e, this);
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
		return new Ie();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ie();
		return Ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_RemoveChild_Response";
	}
}
export class WG extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!WG.prototype.appid) {
			i.Sg(WG.M());
		}
		s.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		WG.sm_m ||= {
			proto: WG,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				publishedfileid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				children: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readUint64String,
					pbr: i.qM.readPackedUint64String,
					bw: i.gp.writeRepeatedUint64String,
				},
			},
		};
		return WG.sm_m;
	}
	static MBF() {
		WG.sm_mbf ||= i.w0(WG.M());
		return WG.sm_mbf;
	}
	toObject(e = false) {
		return WG.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(WG.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(WG.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new WG();
		return WG.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(WG.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		WG.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(WG.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		WG.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_SetCollectionChildren_Request";
	}
}
class Me extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Me.toObject(e, this);
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
		return new Me();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Me();
		return Me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_SetCollectionChildren_Response";
	}
}
export class GV extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!GV.prototype.appid) {
			i.Sg(GV.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		GV.sm_m ||= {
			proto: GV,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				list_type: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				publishedfileid: {
					n: 3,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				add_only: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return GV.sm_m;
	}
	static MBF() {
		GV.sm_mbf ||= i.w0(GV.M());
		return GV.sm_mbf;
	}
	toObject(e = false) {
		return GV.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(GV.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(GV.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new GV();
		return GV.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(GV.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		GV.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(GV.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		GV.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_SetSubscriptionListFromCollection_Request";
	}
}
class Re extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
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
		return "CPublishedFile_SetSubscriptionListFromCollection_Response";
	}
}
export class oA extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!oA.prototype.appid) {
			i.Sg(oA.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		oA.sm_m ||= {
			proto: oA,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				publishedfileids: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
				},
				listtype: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				filetype: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				workshopfiletype: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return oA.sm_m;
	}
	static MBF() {
		oA.sm_mbf ||= i.w0(oA.M());
		return oA.sm_mbf;
	}
	toObject(e = false) {
		return oA.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(oA.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(oA.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new oA();
		return oA.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(oA.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		oA.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(oA.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		oA.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_AreFilesInSubscriptionList_Request";
	}
}
class De extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!De.prototype.files) {
			i.Sg(De.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		De.sm_m ||= {
			proto: De,
			fields: {
				files: {
					n: 1,
					c: Ne,
					r: true,
					q: true,
				},
			},
		};
		return De.sm_m;
	}
	static MBF() {
		De.sm_mbf ||= i.w0(De.M());
		return De.sm_mbf;
	}
	toObject(e = false) {
		return De.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(De.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(De.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new De();
		return De.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(De.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(De.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		De.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_AreFilesInSubscriptionList_Response";
	}
}
class Ne extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ne.prototype.publishedfileid) {
			i.Sg(Ne.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ne.sm_m ||= {
			proto: Ne,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				inlist: {
					n: 2,
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
		return "CPublishedFile_AreFilesInSubscriptionList_Response_InList";
	}
}
export class qu extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qu.prototype.publishedfileids) {
			i.Sg(qu.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qu.sm_m ||= {
			proto: qu,
			fields: {
				publishedfileids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readFixed64String,
					pbr: i.qM.readPackedFixed64String,
					bw: i.gp.writeRepeatedFixed64String,
				},
			},
		};
		return qu.sm_m;
	}
	static MBF() {
		qu.sm_mbf ||= i.w0(qu.M());
		return qu.sm_mbf;
	}
	toObject(e = false) {
		return qu.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qu.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qu.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qu();
		return qu.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qu.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		qu.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qu.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		qu.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_GetUserVoteSummary_Request";
	}
}
class Ge extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ge.prototype.summaries) {
			i.Sg(Ge.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ge.sm_m ||= {
			proto: Ge,
			fields: {
				summaries: {
					n: 1,
					c: Oe,
					r: true,
					q: true,
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
		return "CPublishedFile_GetUserVoteSummary_Response";
	}
}
class Oe extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Oe.prototype.publishedfileid) {
			i.Sg(Oe.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Oe.sm_m ||= {
			proto: Oe,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				vote_for: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				vote_against: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				reported: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CPublishedFile_GetUserVoteSummary_Response_VoteSummary";
	}
}
class Pe extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Pe.prototype.appid) {
			i.Sg(Pe.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Pe.sm_m ||= {
			proto: Pe,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_time_updated: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				num_items_max: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				desired_revision: {
					n: 4,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
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
		return "CPublishedFile_GetItemChanges_Request";
	}
}
class Le extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Le.prototype.update_time) {
			i.Sg(Le.M());
		}
		s.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Le.sm_m ||= {
			proto: Le,
			fields: {
				update_time: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				workshop_items: {
					n: 2,
					c: ze,
					r: true,
					q: true,
				},
			},
		};
		return Le.sm_m;
	}
	static MBF() {
		Le.sm_mbf ||= i.w0(Le.M());
		return Le.sm_mbf;
	}
	toObject(e = false) {
		return Le.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Le.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Le.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Le();
		return Le.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Le.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Le.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_GetItemChanges_Response";
	}
}
class ze extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ze.prototype.published_file_id) {
			i.Sg(ze.M());
		}
		s.initialize(this, e, 0, -1, [4], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ze.sm_m ||= {
			proto: ze,
			fields: {
				published_file_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				time_updated: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				manifest_id: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				author_snapshots: {
					n: 4,
					c: b,
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
		return "CPublishedFile_GetItemChanges_Response_WorkshopItemInfo";
	}
}
class xe extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!xe.prototype.publishedfileid) {
			i.Sg(xe.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		xe.sm_m ||= {
			proto: xe,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
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
		return "CPublishedFile_GetContentDescriptors_Request";
	}
}
class Ue extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ue.prototype.content_descriptors) {
			i.Sg(Ue.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ue.sm_m ||= {
			proto: Ue,
			fields: {
				content_descriptors: {
					n: 1,
					c: We,
					r: true,
					q: true,
				},
			},
		};
		return Ue.sm_m;
	}
	static MBF() {
		Ue.sm_mbf ||= i.w0(Ue.M());
		return Ue.sm_mbf;
	}
	toObject(e = false) {
		return Ue.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ue.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ue.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ue();
		return Ue.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ue.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ue.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ue.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ue.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_GetContentDescriptors_Response";
	}
}
class We extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!We.prototype.descriptorid) {
			i.Sg(We.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		We.sm_m ||= {
			proto: We,
			fields: {
				descriptorid: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				accountid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				timestamp: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				moderator_set: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CPublishedFile_GetContentDescriptors_Response_ContentDescriptor";
	}
}
class Ve extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ve.prototype.publishedfileid) {
			i.Sg(Ve.M());
		}
		s.initialize(this, e, 0, -1, [2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ve.sm_m ||= {
			proto: Ve,
			fields: {
				publishedfileid: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				descriptors_to_add: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				descriptors_to_remove: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
			},
		};
		return Ve.sm_m;
	}
	static MBF() {
		Ve.sm_mbf ||= i.w0(Ve.M());
		return Ve.sm_mbf;
	}
	toObject(e = false) {
		return Ve.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ve.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ve.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ve();
		return Ve.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ve.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ve.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ve.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_UpdateContentDescriptors_Request";
	}
}
class He extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!He.prototype.timestamp_updated) {
			i.Sg(He.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		He.sm_m ||= {
			proto: He,
			fields: {
				timestamp_updated: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
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
		return "CPublishedFile_UpdateContentDescriptors_Response";
	}
}
class je extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!je.prototype.published_file_id) {
			i.Sg(je.M());
		}
		s.initialize(this, e, 0, -1, [8], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		je.sm_m ||= {
			proto: je,
			fields: {
				published_file_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				app_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				file_hcontent: {
					n: 3,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				file_size: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime_subscribed: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				is_depot_content: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				rtime_updated: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				revision: {
					n: 9,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				revisions: {
					n: 8,
					c: qe,
					r: true,
					q: true,
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
		return "CPublishedFile_FileSubscribed_Notification";
	}
}
class qe extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qe.prototype.revision) {
			i.Sg(qe.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qe.sm_m ||= {
			proto: qe,
			fields: {
				revision: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				file_hcontent: {
					n: 2,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				rtime_updated: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				game_branch_min: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_branch_max: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return qe.sm_m;
	}
	static MBF() {
		qe.sm_mbf ||= i.w0(qe.M());
		return qe.sm_mbf;
	}
	toObject(e = false) {
		return qe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qe();
		return qe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		qe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		qe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_FileSubscribed_Notification_RevisionData";
	}
}
class Qe extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Qe.prototype.published_file_id) {
			i.Sg(Qe.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Qe.sm_m ||= {
			proto: Qe,
			fields: {
				published_file_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				app_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Qe.sm_m;
	}
	static MBF() {
		Qe.sm_mbf ||= i.w0(Qe.M());
		return Qe.sm_mbf;
	}
	toObject(e = false) {
		return Qe.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Qe.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Qe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Qe();
		return Qe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Qe.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Qe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Qe.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Qe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_FileUnsubscribed_Notification";
	}
}
class Ze extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Ze.prototype.published_file_id) {
			i.Sg(Ze.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Ze.sm_m ||= {
			proto: Ze,
			fields: {
				published_file_id: {
					n: 1,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				app_id: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return Ze.sm_m;
	}
	static MBF() {
		Ze.sm_mbf ||= i.w0(Ze.M());
		return Ze.sm_mbf;
	}
	toObject(e = false) {
		return Ze.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Ze.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Ze.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Ze();
		return Ze.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Ze.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Ze.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Ze.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Ze.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CPublishedFile_FileDeleted_Client_Notification";
	}
}
export var a5;
export var be;
(function (e) {
	e.Vote = function (e, t) {
		return e.SendMsg("PublishedFile.Vote#1", (0, a.I8)(o, t), l, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 5,
		});
	};
	e.Subscribe = function (e, t) {
		return e.SendMsg("PublishedFile.Subscribe#1", (0, a.I8)(d5, t), m, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	};
	e.Unsubscribe = function (e, t) {
		return e.SendMsg("PublishedFile.Unsubscribe#1", (0, a.I8)(Mg, t), d, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	};
	e.CanSubscribe = function (e, t) {
		return e.SendMsg("PublishedFile.CanSubscribe#1", (0, a.I8)(A, t), p, {
			bConstMethod: true,
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	};
	e.GetSubSectionData = function (e, t) {
		return e.SendMsg("PublishedFile.GetSubSectionData#1", (0, a.I8)(Gl, t), C, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 2,
		});
	};
	e.Publish = function (e, t) {
		return e.SendMsg("PublishedFile.Publish#1", (0, a.I8)(mU, t), f, {
			ePrivilege: 3,
		});
	};
	e.GetDetails = function (e, t) {
		return e.SendMsg("PublishedFile.GetDetails#1", (0, a.I8)(TA, t), k, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 2,
		});
	};
	e.GetItemInfo = function (e, t) {
		return e.SendMsg("PublishedFile.GetItemInfo#1", (0, a.I8)(D, t), F, {
			ePrivilege: 2,
		});
	};
	e.GetUserFiles = function (e, t) {
		return e.SendMsg("PublishedFile.GetUserFiles#1", (0, a.I8)(NZ, t), z, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 2,
		});
	};
	e.GetUserFileCount = function (e, t) {
		return e.SendMsg("PublishedFile.GetUserFileCount#1", (0, a.I8)(NZ, t), z, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 2,
		});
	};
	e.AreFilesInSubscriptionList = function (e, t) {
		return e.SendMsg(
			"PublishedFile.AreFilesInSubscriptionList#1",
			(0, a.I8)(oA, t),
			De,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.Update = function (e, t) {
		return e.SendMsg("PublishedFile.Update#1", (0, a.I8)(U, t), W, {
			ePrivilege: 3,
		});
	};
	e.Delete = function (e, t) {
		return e.SendMsg("PublishedFile.Delete#1", (0, a.I8)(qH, t), H, {
			ePrivilege: 3,
			eWebAPIKeyRequirement: 5,
		});
	};
	e.GetChangeHistoryEntry = function (e, t) {
		return e.SendMsg(
			"PublishedFile.GetChangeHistoryEntry#1",
			(0, a.I8)(j, t),
			q,
			{
				bConstMethod: true,
				ePrivilege: 0,
			},
		);
	};
	e.GetChangeHistory = function (e, t) {
		return e.SendMsg("PublishedFile.GetChangeHistory#1", (0, a.I8)(Q, t), Z, {
			bConstMethod: true,
			ePrivilege: 0,
		});
	};
	e.RefreshVotingQueue = function (e, t) {
		return e.SendMsg("PublishedFile.RefreshVotingQueue#1", (0, a.I8)(K, t), X, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 5,
		});
	};
	e.QueryFiles = function (e, t) {
		return e.SendMsg("PublishedFile.QueryFiles#1", (0, a.I8)(WJ, t), re, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 2,
		});
	};
	e.AddAppRelationship = function (e, t) {
		return e.SendMsg(
			"PublishedFile.AddAppRelationship#1",
			(0, a.I8)(ne, t),
			ie,
			{
				ePrivilege: 1,
			},
		);
	};
	e.RemoveAppRelationship = function (e, t) {
		return e.SendMsg(
			"PublishedFile.RemoveAppRelationship#1",
			(0, a.I8)(ae, t),
			se,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetAppRelationships = function (e, t) {
		return e.SendMsg(
			"PublishedFile.GetAppRelationships#1",
			(0, a.I8)(oe, t),
			le,
			{
				bConstMethod: true,
				ePrivilege: 0,
			},
		);
	};
	e.GetAppRelationshipsBatched = function (e, t) {
		return e.SendMsg(
			"PublishedFile.GetAppRelationshipsBatched#1",
			(0, a.I8)(me, t),
			ue,
			{
				bConstMethod: true,
				ePrivilege: 0,
			},
		);
	};
	e.StartPlaytimeTracking = function (e, t) {
		return e.SendMsg(
			"PublishedFile.StartPlaytimeTracking#1",
			(0, a.I8)(pe, t),
			ge,
			{
				ePrivilege: 1,
			},
		);
	};
	e.StopPlaytimeTracking = function (e, t) {
		return e.SendMsg(
			"PublishedFile.StopPlaytimeTracking#1",
			(0, a.I8)(he, t),
			Ce,
			{
				ePrivilege: 1,
			},
		);
	};
	e.StopPlaytimeTrackingForAllAppItems = function (e, t) {
		return e.SendMsg(
			"PublishedFile.StopPlaytimeTrackingForAllAppItems#1",
			(0, a.I8)(_e, t),
			fe,
			{
				ePrivilege: 1,
			},
		);
	};
	e.SetPlaytimeForControllerConfigs = function (e, t) {
		return e.SendMsg(
			"PublishedFile.SetPlaytimeForControllerConfigs#1",
			(0, a.I8)(_be, t),
			Se,
			{
				ePrivilege: 1,
			},
		);
	};
	e.AddChild = function (e, t) {
		return e.SendMsg("PublishedFile.AddChild#1", (0, a.I8)(we, t), Be, {
			ePrivilege: 1,
		});
	};
	e.RemoveChild = function (e, t) {
		return e.SendMsg("PublishedFile.RemoveChild#1", (0, a.I8)(ve, t), Ie, {
			ePrivilege: 1,
		});
	};
	e.SetCollectionChildren = function (e, t) {
		return e.SendMsg(
			"PublishedFile.SetCollectionChildren#1",
			(0, a.I8)(WG, t),
			Me,
			{
				ePrivilege: 1,
			},
		);
	};
	e.SetSubscriptionListFromCollection = function (e, t) {
		return e.SendMsg(
			"PublishedFile.SetSubscriptionListFromCollection#1",
			(0, a.I8)(GV, t),
			Re,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetUserVoteSummary = function (e, t) {
		return e.SendMsg(
			"PublishedFile.GetUserVoteSummary#1",
			(0, a.I8)(qu, t),
			Ge,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.GetItemChanges = function (e, t) {
		return e.SendMsg("PublishedFile.GetItemChanges#1", (0, a.I8)(Pe, t), Le, {
			ePrivilege: 1,
		});
	};
	e.GetContentDescriptors = function (e, t) {
		return e.SendMsg(
			"PublishedFile.GetContentDescriptors#1",
			(0, a.I8)(xe, t),
			Ue,
			{
				ePrivilege: 0,
			},
		);
	};
	e.UpdateContentDescriptors = function (e, t) {
		return e.SendMsg(
			"PublishedFile.UpdateContentDescriptors#1",
			(0, a.I8)(Ve, t),
			He,
			{
				ePrivilege: 1,
			},
		);
	};
})((a5 ||= {}));
(function (e) {
	e.NotifyFileSubscribedHandler = {
		name: "PublishedFileClient.NotifyFileSubscribed#1",
		request: je,
	};
	e.NotifyFileUnsubscribedHandler = {
		name: "PublishedFileClient.NotifyFileUnsubscribed#1",
		request: Qe,
	};
	e.NotifyFileDeletedHandler = {
		name: "PublishedFileClient.NotifyFileDeleted#1",
		request: Ze,
	};
})((be ||= {}));
