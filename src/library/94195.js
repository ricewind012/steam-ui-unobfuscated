var r = require(/*webcrack:missing*/ "./58663.js");
var i = require("./48307.js");
var s = require("./29218.js");
const o = r.Message;
export class s5 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!s5.prototype.send_reply) {
			i.Sg(s5.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		s5.sm_m ||= {
			proto: s5,
			fields: {
				send_reply: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return s5.sm_m;
	}
	static MBF() {
		s5.sm_mbf ||= i.w0(s5.M());
		return s5.sm_mbf;
	}
	toObject(e = false) {
		return s5.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(s5.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(s5.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new s5();
		return s5.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(s5.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		s5.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(s5.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		s5.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientHeartBeat";
	}
}
export class Sb extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Sb.prototype.client_request_timestamp) {
			i.Sg(Sb.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Sb.sm_m ||= {
			proto: Sb,
			fields: {
				client_request_timestamp: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Sb.sm_m;
	}
	static MBF() {
		Sb.sm_mbf ||= i.w0(Sb.M());
		return Sb.sm_mbf;
	}
	toObject(e = false) {
		return Sb.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Sb.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Sb.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new Sb();
		return Sb.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Sb.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		Sb.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Sb.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		Sb.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientServerTimestampRequest";
	}
}
export class Q_ extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q_.prototype.client_request_timestamp) {
			i.Sg(Q_.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q_.sm_m ||= {
			proto: Q_,
			fields: {
				client_request_timestamp: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				server_timestamp_ms: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return Q_.sm_m;
	}
	static MBF() {
		Q_.sm_mbf ||= i.w0(Q_.M());
		return Q_.sm_mbf;
	}
	toObject(e = false) {
		return Q_.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Q_.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Q_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new Q_();
		return Q_.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Q_.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		Q_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Q_.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		Q_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientServerTimestampResponse";
	}
}
class u extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.version) {
			i.Sg(u.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				version: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				appid: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				deviceid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				nonce: {
					n: 4,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				hmac: {
					n: 5,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
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
		let t = new r.BinaryReader(e);
		let n = new u();
		return u.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(u.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(u.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientSecret";
	}
}
export class ji extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ji.prototype.protocol_version) {
			i.Sg(ji.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ji.sm_m ||= {
			proto: ji,
			fields: {
				protocol_version: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				deprecated_obfustucated_private_ip: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				cell_id: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				last_session_id: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				client_package_version: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				client_language: {
					n: 6,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				client_os_type: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				should_remember_password: {
					n: 8,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				wine_version: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				deprecated_10: {
					n: 10,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				obfuscated_private_ip: {
					n: 11,
					c: s.kK,
				},
				deprecated_public_ip: {
					n: 20,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				qos_level: {
					n: 21,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				client_supplied_steam_id: {
					n: 22,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				public_ip: {
					n: 23,
					c: s.kK,
				},
				machine_id: {
					n: 30,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				launcher_type: {
					n: 31,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				ui_mode: {
					n: 32,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				chat_mode: {
					n: 33,
					d: 0,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steam2_auth_ticket: {
					n: 41,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				email_address: {
					n: 42,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				rtime32_account_creation: {
					n: 43,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				account_name: {
					n: 50,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				password: {
					n: 51,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_server_token: {
					n: 52,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				login_key: {
					n: 60,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				was_converted_deprecated_msg: {
					n: 70,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				anon_user_target_account_name: {
					n: 80,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				resolved_user_steam_id: {
					n: 81,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				eresult_sentryfile: {
					n: 82,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				sha_sentryfile: {
					n: 83,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				auth_code: {
					n: 84,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				otp_type: {
					n: 85,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				otp_value: {
					n: 86,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				otp_identifier: {
					n: 87,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steam2_ticket_request: {
					n: 88,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sony_psn_ticket: {
					n: 90,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				sony_psn_service_id: {
					n: 91,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				create_new_psn_linked_account_if_needed: {
					n: 92,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				sony_psn_name: {
					n: 93,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				game_server_app_id: {
					n: 94,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				steamguard_dont_remember_computer: {
					n: 95,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				machine_name: {
					n: 96,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				machine_name_userchosen: {
					n: 97,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				country_override: {
					n: 98,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_steam_box: {
					n: 99,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				client_instance_id: {
					n: 100,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				two_factor_code: {
					n: 101,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				supports_rate_limit_response: {
					n: 102,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				web_logon_nonce: {
					n: 103,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				priority_reason: {
					n: 104,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				embedded_client_secret: {
					n: 105,
					c: u,
				},
				disable_partner_autogrants: {
					n: 106,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_steam_deck: {
					n: 107,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				access_token: {
					n: 108,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_chrome_os: {
					n: 109,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_tesla: {
					n: 110,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return ji.sm_m;
	}
	static MBF() {
		ji.sm_mbf ||= i.w0(ji.M());
		return ji.sm_mbf;
	}
	toObject(e = false) {
		return ji.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ji.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ji.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new ji();
		return ji.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ji.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		ji.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ji.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		ji.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientLogon";
	}
}
export class c1 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c1.prototype.eresult) {
			i.Sg(c1.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c1.sm_m ||= {
			proto: c1,
			fields: {
				eresult: {
					n: 1,
					d: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				legacy_out_of_game_heartbeat_seconds: {
					n: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				heartbeat_seconds: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				deprecated_public_ip: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				rtime32_server_time: {
					n: 5,
					br: i.qM.readFixed32,
					bw: i.gp.writeFixed32,
				},
				account_flags: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				cell_id: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				email_domain: {
					n: 8,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steam2_ticket: {
					n: 9,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				eresult_extended: {
					n: 10,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				cell_id_ping_threshold: {
					n: 12,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				deprecated_use_pics: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				vanity_url: {
					n: 14,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				public_ip: {
					n: 15,
					c: s.kK,
				},
				user_country: {
					n: 16,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				client_supplied_steamid: {
					n: 20,
					br: i.qM.readFixed64String,
					bw: i.gp.writeFixed64String,
				},
				ip_country_code: {
					n: 21,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				parental_settings: {
					n: 22,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				parental_setting_signature: {
					n: 23,
					br: i.qM.readBytes,
					bw: i.gp.writeBytes,
				},
				count_loginfailures_to_migrate: {
					n: 24,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				count_disconnects_to_migrate: {
					n: 25,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				ogs_data_report_time_window: {
					n: 26,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				client_instance_id: {
					n: 27,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				force_client_update_check: {
					n: 28,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				agreement_session_url: {
					n: 29,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				token_id: {
					n: 30,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				family_group_id: {
					n: 31,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
			},
		};
		return c1.sm_m;
	}
	static MBF() {
		c1.sm_mbf ||= i.w0(c1.M());
		return c1.sm_mbf;
	}
	toObject(e = false) {
		return c1.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(c1.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(c1.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new c1();
		return c1.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(c1.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		c1.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(c1.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		c1.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientLogonResponse";
	}
}
export class l9 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!l9.prototype.eresult) {
			i.Sg(l9.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		l9.sm_m ||= {
			proto: l9,
			fields: {
				eresult: {
					n: 1,
					d: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return l9.sm_m;
	}
	static MBF() {
		l9.sm_mbf ||= i.w0(l9.M());
		return l9.sm_mbf;
	}
	toObject(e = false) {
		return l9.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(l9.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(l9.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new l9();
		return l9.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(l9.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		l9.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(l9.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		l9.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientLoggedOff";
	}
}
export class dX extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!dX.prototype.persona_name) {
			i.Sg(dX.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		dX.sm_m ||= {
			proto: dX,
			fields: {
				persona_name: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				ip_country: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				count_authed_computers: {
					n: 5,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				account_flags: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				facebook_id: {
					n: 8,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				facebook_name: {
					n: 9,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				steamguard_machine_name_user_chosen: {
					n: 15,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_phone_verified: {
					n: 16,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				two_factor_state: {
					n: 17,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				is_phone_identifying: {
					n: 18,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_phone_needing_reverify: {
					n: 19,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return dX.sm_m;
	}
	static MBF() {
		dX.sm_mbf ||= i.w0(dX.M());
		return dX.sm_mbf;
	}
	toObject(e = false) {
		return dX.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(dX.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(dX.M(), e);
	}
	static deserializeBinary(e) {
		let t = new r.BinaryReader(e);
		let n = new dX();
		return dX.deserializeBinaryFromReader(n, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(dX.MBF(), e, t);
	}
	serializeBinary() {
		var e = new r.BinaryWriter();
		dX.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(dX.M(), e, t);
	}
	serializeBase64String() {
		var e = new r.BinaryWriter();
		dX.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientAccountInfo";
	}
}
