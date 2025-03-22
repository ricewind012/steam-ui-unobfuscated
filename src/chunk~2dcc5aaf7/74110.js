var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
const s = n.Message;
export class uQ extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!uQ.prototype.recommendationid) {
			i.Sg(uQ.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		uQ.sm_m ||= {
			proto: uQ,
			fields: {
				recommendationid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				review_text: {
					n: 2,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				voted_up: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_public: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				language: {
					n: 5,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				is_in_early_access: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				received_compensation: {
					n: 7,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				comments_disabled: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				hide_in_steam_china: {
					n: 9,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return uQ.sm_m;
	}
	static MBF() {
		uQ.sm_mbf ||= i.w0(uQ.M());
		return uQ.sm_mbf;
	}
	toObject(e = false) {
		return uQ.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(uQ.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(uQ.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new uQ();
		return uQ.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(uQ.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		uQ.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(uQ.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		uQ.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserReviews_Update_Request";
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
		return "CUserReviews_Update_Response";
	}
}
class c extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!c.prototype.reaction_type) {
			i.Sg(c.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		c.sm_m ||= {
			proto: c,
			fields: {
				reaction_type: {
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
		return "CUserReviews_Recommendation_LoyaltyReaction";
	}
}
class m extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.recommendationid) {
			i.Sg(m.M());
		}
		s.initialize(this, e, 0, -1, [27, 40], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		m.sm_m ||= {
			proto: m,
			fields: {
				recommendationid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid: {
					n: 2,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				appid: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				review: {
					n: 4,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				time_created: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				time_updated: {
					n: 6,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				votes_up: {
					n: 7,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				votes_down: {
					n: 8,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				vote_score: {
					n: 9,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				language: {
					n: 10,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				comment_count: {
					n: 11,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				voted_up: {
					n: 12,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				is_public: {
					n: 13,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				moderator_hidden: {
					n: 14,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				flagged_by_developer: {
					n: 15,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				report_score: {
					n: 16,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				steamid_moderator: {
					n: 17,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid_developer: {
					n: 18,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				steamid_dev_responder: {
					n: 19,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				developer_response: {
					n: 20,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				time_developer_responded: {
					n: 21,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				developer_flag_cleared: {
					n: 22,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				written_during_early_access: {
					n: 23,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				votes_funny: {
					n: 24,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				received_compensation: {
					n: 25,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				unverified_purchase: {
					n: 26,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				review_qualities: {
					n: 27,
					r: true,
					q: true,
					br: i.qM.readEnum,
					pbr: i.qM.readPackedEnum,
					bw: i.gp.writeRepeatedEnum,
				},
				weighted_vote_score: {
					n: 28,
					br: i.qM.readFloat,
					bw: i.gp.writeFloat,
				},
				moderation_note: {
					n: 29,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				payment_method: {
					n: 30,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				playtime_2weeks: {
					n: 31,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				playtime_forever: {
					n: 32,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				last_playtime: {
					n: 33,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				comments_disabled: {
					n: 34,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				playtime_at_review: {
					n: 35,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				approved_for_china: {
					n: 36,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				ban_check_result: {
					n: 37,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				refunded: {
					n: 38,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				account_score_spend: {
					n: 39,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				reactions: {
					n: 40,
					c,
					r: true,
					q: true,
				},
				ipaddress: {
					n: 41,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				hidden_in_steam_china: {
					n: 42,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				steam_china_location: {
					n: 43,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				category_ascii_pct: {
					n: 44,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				category_meme_pct: {
					n: 45,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				category_offtopic_pct: {
					n: 46,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				category_uninformative_pct: {
					n: 47,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				category_votefarming_pct: {
					n: 48,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				deck_playtime_at_review: {
					n: 49,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
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
		return "RecommendationDetails";
	}
}
export class KV extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!KV.prototype.appid) {
			i.Sg(KV.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		KV.sm_m ||= {
			proto: KV,
			fields: {
				appid: {
					n: 1,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return KV.sm_m;
	}
	static MBF() {
		KV.sm_mbf ||= i.w0(KV.M());
		return KV.sm_mbf;
	}
	toObject(e = false) {
		return KV.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(KV.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(KV.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new KV();
		return KV.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(KV.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		KV.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(KV.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		KV.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserReviews_GetFriendsRecommendedApp_Request";
	}
}
class d extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.accountids_recommended) {
			i.Sg(d.M());
		}
		s.initialize(this, e, 0, -1, [1, 3], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				accountids_recommended: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
				},
				accountids_not_recommended: {
					n: 3,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
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
		return "CUserReviews_GetFriendsRecommendedApp_Response";
	}
}
export class uq extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!uq.prototype.requests) {
			i.Sg(uq.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		uq.sm_m ||= {
			proto: uq,
			fields: {
				requests: {
					n: 1,
					c: p,
					r: true,
					q: true,
				},
			},
		};
		return uq.sm_m;
	}
	static MBF() {
		uq.sm_mbf ||= i.w0(uq.M());
		return uq.sm_mbf;
	}
	toObject(e = false) {
		return uq.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(uq.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(uq.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new uq();
		return uq.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(uq.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		uq.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(uq.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		uq.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CUserReviews_GetIndividualRecommendations_Request";
	}
}
class p extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.steamid) {
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
				steamid: {
					n: 1,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				appid: {
					n: 2,
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
		return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
	}
}
class g extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.recommendations) {
			i.Sg(g.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				recommendations: {
					n: 1,
					c: m,
					r: true,
					q: true,
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
		return "CUserReviews_GetIndividualRecommendations_Response";
	}
}
export var YK;
(function (e) {
	e.Update = function (e, t) {
		return e.SendMsg("UserReviews.Update#1", (0, a.I8)(uQ, t), l, {
			ePrivilege: 3,
		});
	};
	e.GetFriendsRecommendedApp = function (e, t) {
		return e.SendMsg(
			"UserReviews.GetFriendsRecommendedApp#1",
			(0, a.I8)(KV, t),
			d,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
	e.GetIndividualRecommendations = function (e, t) {
		return e.SendMsg(
			"UserReviews.GetIndividualRecommendations#1",
			(0, a.I8)(uq, t),
			g,
			{
				bConstMethod: true,
				ePrivilege: 1,
				eWebAPIKeyRequirement: 2,
			},
		);
	};
})((YK ||= {}));
