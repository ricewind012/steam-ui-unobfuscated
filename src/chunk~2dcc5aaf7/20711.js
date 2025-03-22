var n = require(/*webcrack:missing*/ "./83957.js");
var i = n;
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require("./31222.js");
var o = require(/*webcrack:missing*/ "./58663.js");
var l = require(/*webcrack:missing*/ "./48307.js");
const c = o.Message;
class m extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.video_id) {
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
				video_id: {
					n: 1,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				client_cellid: {
					n: 2,
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
		return "CVideo_ClientGetVideoURL_Request";
	}
}
class u extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.video_id) {
			l.Sg(u.M());
		}
		c.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				video_id: {
					n: 1,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				video_url: {
					n: 2,
					br: l.qM.readString,
					bw: l.gp.writeString,
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
		return "CVideo_ClientGetVideoURL_Response";
	}
}
class d extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.encryption_key) {
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
				encryption_key: {
					n: 1,
					br: l.qM.readBytes,
					bw: l.gp.writeBytes,
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
		return "CVideo_UnlockedH264_Notification";
	}
}
class A extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.app_id) {
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
				app_id: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				client_cellid: {
					n: 2,
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
		return "CFovasVideo_ClientGetOPFSettings_Request";
	}
}
class p extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.app_id) {
			l.Sg(p.M());
		}
		c.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				app_id: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				opf_settings: {
					n: 2,
					br: l.qM.readString,
					bw: l.gp.writeString,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= l.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(p.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(p.MBF(), e, t);
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(p.M(), e, t);
	}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CFovasVideo_ClientGetOPFSettings_Response";
	}
}
class g extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.app_id) {
			l.Sg(g.M());
		}
		c.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				app_id: {
					n: 1,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				playback_position_in_seconds: {
					n: 2,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				video_track_id: {
					n: 3,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				audio_track_id: {
					n: 4,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				timedtext_track_id: {
					n: 5,
					br: l.qM.readUint64String,
					bw: l.gp.writeUint64String,
				},
				last_modified: {
					n: 6,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
				hide_from_watch_history: {
					n: 7,
					d: false,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				hide_from_library: {
					n: 8,
					d: false,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
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
		return "VideoBookmark";
	}
}
class h extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.bookmarks) {
			l.Sg(h.M());
		}
		c.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				bookmarks: {
					n: 1,
					c: g,
					r: true,
					q: true,
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
		return "CVideo_SetVideoBookmark_Notification";
	}
}
class C extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.appids) {
			l.Sg(C.M());
		}
		c.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				appids: {
					n: 1,
					r: true,
					q: true,
					br: l.qM.readUint32,
					pbr: l.qM.readPackedUint32,
					bw: l.gp.writeRepeatedUint32,
				},
				updated_since: {
					n: 2,
					br: l.qM.readUint32,
					bw: l.gp.writeUint32,
				},
			},
		};
		return C.sm_m;
	}
	static MBF() {
		C.sm_mbf ||= l.w0(C.M());
		return C.sm_mbf;
	}
	toObject(e = false) {
		return C.toObject(e, this);
	}
	static toObject(e, t) {
		return l.BT(C.M(), e, t);
	}
	static fromObject(e) {
		return l.Uq(C.M(), e);
	}
	static deserializeBinary(e) {
		let t = new o.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return l.zj(C.MBF(), e, t);
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		l.i0(C.M(), e, t);
	}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CVideo_GetVideoBookmarks_Request";
	}
}
class _ extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.bookmarks) {
			l.Sg(_.M());
		}
		c.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				bookmarks: {
					n: 1,
					c: g,
					r: true,
					q: true,
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
		return "CVideo_GetVideoBookmarks_Response";
	}
}
var f;
var b;
var y;
(function (e) {
	e.ClientGetVideoURL = function (e, t) {
		return e.SendMsg("Video.ClientGetVideoURL#1", (0, a.I8)(m, t), u, {
			ePrivilege: 1,
		});
	};
	e.SetVideoBookmark = function (e, t) {
		return e.SendNotification("Video.SetVideoBookmark#1", (0, a.I8)(h, t), {
			ePrivilege: 1,
		});
	};
	e.GetVideoBookmarks = function (e, t) {
		return e.SendMsg("Video.GetVideoBookmarks#1", (0, a.I8)(C, t), _, {
			ePrivilege: 1,
		});
	};
})((f ||= {}));
(function (e) {
	e.NotifyUnlockedH264Handler = {
		name: "VideoClient.NotifyUnlockedH264#1",
		request: d,
	};
})((b ||= {}));
(function (e) {
	e.ClientGetOPFSettings = function (e, t) {
		return e.SendMsg("FovasVideo.ClientGetOPFSettings#1", (0, a.I8)(A, t), p, {
			ePrivilege: 1,
		});
	};
})((y ||= {}));
var S = require("./16154.js");
var w = require(/*webcrack:missing*/ "./72476.js");
export class t {
	static s_VODStore;
	m_LoadingOAuth = null;
	m_transport;
	m_mapBookmarks = new Map();
	SetBookmarkForApp(e, t) {
		if (this.ValidateBookmarkData(t)) {
			this.m_mapBookmarks.set(e, g.fromObject(t));
		} else {
			this.InitializeBookmarkForApp(e);
		}
	}
	ValidateBookmarkData(e) {
		const t = e;
		return (
			typeof t == "object" &&
			Number.isInteger(t.playback_position_in_seconds) &&
			Number.isInteger(t.app_id)
		);
	}
	InitializeBookmarkForApp(e) {
		if (!this.m_mapBookmarks.has(e)) {
			let t = {
				app_id: e,
				playback_position_in_seconds: 0,
				video_track_id: "0",
				audio_track_id: "0",
				timedtext_track_id: "0",
				hide_from_watch_history: false,
				hide_from_library: false,
			};
			this.m_mapBookmarks.set(e, new g(t));
		}
	}
	GetBookmarkPlayTimeInSeconds(e) {
		if (this.m_mapBookmarks.has(e)) {
			let t = this.m_mapBookmarks.get(e).playback_position_in_seconds();
			if (Number.isInteger(t)) {
				return t;
			}
		}
		return 0;
	}
	async SendBookMarkedTimeToServer(e, t, r, n, i) {
		if (!w.iA.logged_in) {
			return;
		}
		if (!this.m_transport && (await this.m_LoadingOAuth, !this.m_transport)) {
			console.warn("CVideoBookmarkStore:SetBookMark no auth token / transport");
			return;
		}
		const s = a.w.Init(h);
		if (this.m_mapBookmarks.has(e)) {
			let a = this.m_mapBookmarks.get(e);
			let o = false;
			if (a.app_id() != e) {
				o = true;
				a.set_app_id(e);
			}
			if (a.playback_position_in_seconds() != t) {
				o = true;
				a.set_playback_position_in_seconds(t);
			}
			r = r || "0";
			if (a.video_track_id() != r) {
				a.set_video_track_id(r);
				o = true;
			}
			n = n || "0";
			if (a.audio_track_id() != n) {
				a.set_audio_track_id(n);
				o = true;
			}
			if ((i = i || "0") != a.timedtext_track_id()) {
				a.set_timedtext_track_id(i);
				o = true;
			}
			if (o) {
				s.Body().add_bookmarks(a);
				f.SetVideoBookmark(this.m_transport, s);
			}
		}
	}
	static Get() {
		if (!t.s_VODStore) {
			t.s_VODStore = new t();
			t.s_VODStore.Init();
		}
		return t.s_VODStore;
	}
	Init() {
		if (w.iA.logged_in) {
			this.LoadWatchVideoOAuthToken();
		}
	}
	async LoadWatchVideoOAuthToken() {
		const e =
			(0, w.yK)() == "community"
				? w.TS.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
				: w.TS.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken";
		const t = {};
		try {
			let r = await i.get(e, {
				params: t,
				withCredentials: true,
			});
			if (
				r &&
				r.status == 200 &&
				r.data &&
				r.data.success == 1 &&
				r.data.webapi_token
			) {
				this.m_transport = new s.D(
					w.TS.WEBAPI_BASE_URL,
					r.data.webapi_token,
				).GetServiceTransport();
				return this.m_transport;
			}
		} catch (e) {
			let t = (0, S.H)(e);
			console.error(
				"CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " + t.strErrorMsg,
				t,
			);
		}
		return null;
	}
}
export class M {
	m_appid;
	constructor(e) {
		this.m_appid = e;
	}
	async SetBookmark(e, _t, r, n) {
		if (w.iA.logged_in) {
			t.Get().SendBookMarkedTimeToServer(this.m_appid, Math.floor(e), _t, r, n);
		}
	}
	GetBeginPlaytime() {
		if (w.iA.logged_in) {
			return t.Get().GetBookmarkPlayTimeInSeconds(this.m_appid);
		} else {
			return 0;
		}
	}
}
