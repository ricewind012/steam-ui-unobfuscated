var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
const a = n.Message;
export function kd(e) {
	return "unknown EDisplayStatus ( " + e + " )";
}
class o extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!o.prototype.clientid) {
			i.Sg(o.M());
		}
		a.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		o.sm_m ||= {
			proto: o,
			fields: {
				clientid: {
					n: 1,
					d: "0",
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				client_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				display_status: {
					n: 3,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				status_percentage: {
					n: 4,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				active_beta: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				installed: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				bytes_downloaded: {
					n: 7,
					d: "0",
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				bytes_total: {
					n: 8,
					d: "0",
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				streaming_to_local_client: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_available_on_current_platform: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_invalid_os_type: {
					n: 11,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				playtime_left: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				update_available_but_disabled_by_app: {
					n: 14,
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
		return "CAppOverview_PerClientData";
	}
}
class l extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l.prototype.appid) {
			i.Sg(l.M());
		}
		a.initialize(this, e, 0, -1, [19, 23, 43], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		l.sm_m ||= {
			proto: l,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				display_name: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				visible_in_game_list: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				subscribed_to: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sort_as: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				app_type: {
					n: 7,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mru_index: {
					n: 13,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rt_recent_activity_time: {
					n: 14,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				minutes_playtime_forever: {
					n: 16,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				minutes_playtime_last_two_weeks: {
					n: 17,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rt_last_time_played: {
					n: 18,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				store_tag: {
					n: 19,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				store_category: {
					n: 23,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				rt_original_release_date: {
					n: 25,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rt_steam_release_date: {
					n: 26,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				icon_hash: {
					n: 27,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				xbox_controller_support: {
					n: 31,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				vr_supported: {
					n: 32,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				metacritic_score: {
					n: 36,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				size_on_disk: {
					n: 37,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				third_party_mod: {
					n: 38,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				icon_data: {
					n: 39,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				icon_data_format: {
					n: 40,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				gameid: {
					n: 41,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				library_capsule_filename: {
					n: 42,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				per_client_data: {
					n: 43,
					c: o,
					r: true,
					q: true,
				},
				most_available_clientid: {
					n: 44,
					d: "0",
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				selected_clientid: {
					n: 45,
					d: "0",
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				rt_store_asset_mtime: {
					n: 46,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rt_custom_image_mtime: {
					n: 47,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				optional_parent_app_id: {
					n: 48,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				owner_account_id: {
					n: 49,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				review_score_with_bombs: {
					n: 53,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				review_percentage_with_bombs: {
					n: 54,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				review_score_without_bombs: {
					n: 55,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				review_percentage_without_bombs: {
					n: 56,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				library_id: {
					n: 57,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				vr_only: {
					n: 58,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				mastersub_appid: {
					n: 59,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				mastersub_includedwith_logo: {
					n: 60,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				site_license_site_name: {
					n: 62,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				shortcut_override_appid: {
					n: 63,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rt_last_time_locally_played: {
					n: 65,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rt_purchased_time: {
					n: 66,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				header_filename: {
					n: 67,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				local_cache_version: {
					n: 68,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				number_of_copies: {
					n: 72,
					d: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steam_hw_compat_category_packed: {
					n: 73,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				album_cover_hash: {
					n: 74,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CAppOverview";
	}
}
export class bs extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!bs.prototype.app_overview) {
			i.Sg(bs.M());
		}
		a.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		bs.sm_m ||= {
			proto: bs,
			fields: {
				app_overview: {
					n: 1,
					c: l,
					r: true,
					q: true,
				},
				removed_appid: {
					n: 2,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				full_update: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				update_complete: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return bs.sm_m;
	}
	static MBF() {
		bs.sm_mbf ||= i.w0(bs.M());
		return bs.sm_mbf;
	}
	toObject(e = false) {
		return bs.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(bs.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(bs.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new bs();
		return bs.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(bs.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		bs.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(bs.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		bs.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAppOverview_Change";
	}
}
class m extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.appid) {
			i.Sg(m.M());
		}
		a.initialize(this, e, 0, -1, [3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				hidden: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				user_tag: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeRepeatedString,
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
		return "CAppBootstrapData";
	}
}
export class V6 extends a {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V6.prototype.app_data) {
			i.Sg(V6.M());
		}
		a.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		V6.sm_m ||= {
			proto: V6,
			fields: {
				app_data: {
					n: 1,
					c: m,
					r: true,
					q: true,
				},
			},
		};
		return V6.sm_m;
	}
	static MBF() {
		V6.sm_mbf ||= i.w0(V6.M());
		return V6.sm_mbf;
	}
	toObject(e = false) {
		return V6.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(V6.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(V6.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new V6();
		return V6.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(V6.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		V6.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(V6.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		V6.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CLibraryBootstrapData";
	}
}
