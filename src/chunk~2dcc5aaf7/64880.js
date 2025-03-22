var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require("./67185.js");
var o = require("./80222.js");
const l = n.Message;
export class M$ extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!M$.prototype.released_only) {
			i.Sg(M$.M());
		}
		l.initialize(this, e, 0, -1, [4, 10, 11, 15, 16, 45], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		M$.sm_m ||= {
			proto: M$,
			fields: {
				released_only: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				coming_soon_only: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				type_filters: {
					n: 3,
					c: m,
				},
				exclude_from: {
					n: 4,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				predefined_filter: {
					n: 5,
					c: u,
				},
				tagids_must_match: {
					n: 10,
					c: d,
					r: true,
					q: true,
				},
				tagids_exclude: {
					n: 11,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
				},
				price_filters: {
					n: 12,
					c: A,
				},
				content_descriptors_must_match: {
					n: 15,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				content_descriptors_excluded: {
					n: 16,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				regional_top_n_sellers: {
					n: 40,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				global_top_n_sellers: {
					n: 41,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				regional_long_term_top_n_sellers: {
					n: 42,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				global_long_term_top_n_sellers: {
					n: 43,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				store_page_filter: {
					n: 44,
					c: s.S7,
				},
				parent_appids: {
					n: 45,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
			},
		};
		return M$.sm_m;
	}
	static MBF() {
		M$.sm_mbf ||= i.w0(M$.M());
		return M$.sm_mbf;
	}
	toObject(e = false) {
		return M$.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(M$.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(M$.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new M$();
		return M$.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(M$.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		M$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(M$.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		M$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreQueryFilters";
	}
}
class m extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.include_apps) {
			i.Sg(m.M());
		}
		l.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				include_apps: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_packages: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_bundles: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_games: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_demos: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_mods: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_dlc: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_software: {
					n: 14,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_video: {
					n: 15,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_hardware: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_series: {
					n: 17,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_music: {
					n: 18,
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
		return "CStoreQueryFilters_TypeFilters";
	}
}
class u extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.filter_type) {
			i.Sg(u.M());
		}
		l.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				filter_type: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				language_preferences: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
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
		return "CStoreQueryFilters_PredefinedFilter";
	}
}
class d extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.tagids) {
			i.Sg(d.M());
		}
		l.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				tagids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
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
		return "CStoreQueryFilters_TagFilter";
	}
}
class A extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.only_free_items) {
			i.Sg(A.M());
		}
		l.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		A.sm_m ||= {
			proto: A,
			fields: {
				only_free_items: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				exclude_free_items: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				min_discount_percent: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "CStoreQueryFilters_PriceFilters";
	}
}
export class nu extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!nu.prototype.start) {
			i.Sg(nu.M());
		}
		l.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		nu.sm_m ||= {
			proto: nu,
			fields: {
				start: {
					n: 1,
					d: 0,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				count: {
					n: 2,
					d: 10,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				sort: {
					n: 10,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				filters: {
					n: 20,
					c: M$,
				},
			},
		};
		return nu.sm_m;
	}
	static MBF() {
		nu.sm_mbf ||= i.w0(nu.M());
		return nu.sm_mbf;
	}
	toObject(e = false) {
		return nu.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(nu.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(nu.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new nu();
		return nu.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(nu.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		nu.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(nu.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		nu.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreQueryParams";
	}
}
class g extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.id) {
			i.Sg(g.M());
		}
		l.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				id: {
					n: 1,
					c: o.O4,
				},
				score: {
					n: 2,
					br: i.qM.readDouble,
					bw: i.gp.writeDouble,
				},
				spellcheck_generated_result: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CStoreQueryPerResultMetadata";
	}
}
class h extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.total_matching_records) {
			i.Sg(h.M());
		}
		l.initialize(this, e, 0, -1, [4, 5], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				total_matching_records: {
					n: 1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				start: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				count: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				per_result_metadata: {
					n: 4,
					c: g,
					r: true,
					q: true,
				},
				spellcheck_suggestions: {
					n: 5,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
				},
			},
		};
		return h.sm_m;
	}
	static MBF() {
		h.sm_mbf ||= i.w0(h.M());
		return h.sm_mbf;
	}
	toObject(e = false) {
		return h.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(h.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(h.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(h.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(h.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreQueryResultMetadata";
	}
}
export class iU extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!iU.prototype.query_name) {
			i.Sg(iU.M());
		}
		l.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		iU.sm_m ||= {
			proto: iU,
			fields: {
				query_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				query: {
					n: 2,
					c: nu,
				},
				context: {
					n: 3,
					c: o.TS,
				},
				data_request: {
					n: 4,
					c: o.gn,
				},
				override_country_code: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return iU.sm_m;
	}
	static MBF() {
		iU.sm_mbf ||= i.w0(iU.M());
		return iU.sm_mbf;
	}
	toObject(e = false) {
		return iU.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(iU.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(iU.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new iU();
		return iU.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(iU.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		iU.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(iU.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		iU.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreQuery_Query_Request";
	}
}
class _ extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.metadata) {
			i.Sg(_.M());
		}
		l.initialize(this, e, 0, -1, [2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				metadata: {
					n: 1,
					c: h,
				},
				ids: {
					n: 2,
					c: o.O4,
					r: true,
					q: true,
				},
				store_items: {
					n: 3,
					c: o.vB,
					r: true,
					q: true,
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
		return "CStoreQuery_Query_Response";
	}
}
export class pI extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!pI.prototype.query_name) {
			i.Sg(pI.M());
		}
		l.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		pI.sm_m ||= {
			proto: pI,
			fields: {
				query_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				context: {
					n: 2,
					c: o.TS,
				},
				search_term: {
					n: 3,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				max_results: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				filters: {
					n: 5,
					c: M$,
				},
				data_request: {
					n: 6,
					c: o.gn,
				},
				use_spellcheck: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				search_tags: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				search_creators: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				prefilter_creators: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return pI.sm_m;
	}
	static MBF() {
		pI.sm_mbf ||= i.w0(pI.M());
		return pI.sm_mbf;
	}
	toObject(e = false) {
		return pI.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(pI.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(pI.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new pI();
		return pI.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(pI.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		pI.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(pI.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		pI.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStoreQuery_SearchSuggestions_Request";
	}
}
class b extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.metadata) {
			i.Sg(b.M());
		}
		l.initialize(this, e, 0, -1, [2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				metadata: {
					n: 1,
					c: h,
				},
				ids: {
					n: 2,
					c: o.O4,
					r: true,
					q: true,
				},
				store_items: {
					n: 3,
					c: o.vB,
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
		return "CStoreQuery_SearchSuggestions_Response";
	}
}
class y extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.filters) {
			i.Sg(y.M());
		}
		l.initialize(this, e, 0, -1, [6], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				filters: {
					n: 2,
					c: s.S7,
				},
				sections: {
					n: 6,
					c: S,
					r: true,
					q: true,
				},
				context: {
					n: 5,
					c: o.TS,
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
		return "CStoreQuery_GetItemsByUserRecommendedTags_Request";
	}
}
class S extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.sort) {
			i.Sg(S.M());
		}
		l.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				sort: {
					n: 1,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				min_items: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				randomize: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_packages: {
					n: 4,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_bundles: {
					n: 5,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
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
		return "CStoreQuery_GetItemsByUserRecommendedTags_Request_Section";
	}
}
class w extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.sections) {
			i.Sg(w.M());
		}
		l.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				sections: {
					n: 1,
					c: B,
					r: true,
					q: true,
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
		return "CStoreQuery_GetItemsByUserRecommendedTags_Response";
	}
}
class B extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.tagid) {
			i.Sg(B.M());
		}
		l.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				tagid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				store_item_ids: {
					n: 2,
					c: o.O4,
					r: true,
					q: true,
				},
				tag_name: {
					n: 3,
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
		return "CStoreQuery_GetItemsByUserRecommendedTags_Response_Section";
	}
}
class v extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.sort) {
			i.Sg(v.M());
		}
		l.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				sort: {
					n: 1,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				max_items: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				randomize: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_packages: {
					n: 4,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				include_bundles: {
					n: 5,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				filters: {
					n: 6,
					c: s.S7,
				},
				context: {
					n: 7,
					c: o.TS,
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
		return "CStoreQuery_GetItemByUserCombinedTagsPriority_Request";
	}
}
class I extends l {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.tagid) {
			i.Sg(I.M());
		}
		l.initialize(this, e, 0, -1, [1, 2, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				tagid: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				store_item_ids: {
					n: 2,
					c: o.O4,
					r: true,
					q: true,
				},
				tag_name: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
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
		return "CStoreQuery_GetItemByUserCombinedTagsPriority_Response";
	}
}
export var Fs;
(function (e) {
	e.Query = function (e, t) {
		return e.SendMsg("StoreQuery.Query#1", (0, a.I8)(iU, t), _, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	};
	e.SearchSuggestions = function (e, t) {
		return e.SendMsg("StoreQuery.SearchSuggestions#1", (0, a.I8)(pI, t), b, {
			bConstMethod: true,
			ePrivilege: 2,
			eWebAPIKeyRequirement: 1,
		});
	};
	e.GetItemsByUserRecommendedTags = function (e, t) {
		return e.SendMsg(
			"StoreQuery.GetItemsByUserRecommendedTags#1",
			(0, a.I8)(y, t),
			w,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.GetItemByUserCombinedTagsPriority = function (e, t) {
		return e.SendMsg(
			"StoreQuery.GetItemByUserCombinedTagsPriority#1",
			(0, a.I8)(v, t),
			I,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
})((Fs ||= {}));
