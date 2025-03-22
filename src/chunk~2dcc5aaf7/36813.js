var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require("./12251.js");
const o = n.Message;
export class fx extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!fx.prototype.language) {
			i.Sg(fx.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		fx.sm_m ||= {
			proto: fx,
			fields: {
				language: {
					n: 1,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				type: {
					n: 2,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return fx.sm_m;
	}
	static MBF() {
		fx.sm_mbf ||= i.w0(fx.M());
		return fx.sm_mbf;
	}
	toObject(e = false) {
		return fx.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(fx.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(fx.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new fx();
		return fx.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(fx.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		fx.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(fx.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		fx.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamEngine_UpdateTextFilterDictionary_Notification";
	}
}
export class i6 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!i6.prototype.language) {
			i.Sg(i6.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		i6.sm_m ||= {
			proto: i6,
			fields: {
				language: {
					n: 1,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				type: {
					n: 2,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
			},
		};
		return i6.sm_m;
	}
	static MBF() {
		i6.sm_mbf ||= i.w0(i6.M());
		return i6.sm_mbf;
	}
	toObject(e = false) {
		return i6.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(i6.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(i6.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new i6();
		return i6.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(i6.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		i6.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(i6.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		i6.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamEngine_GetTextFilterDictionary_Request";
	}
}
class m extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.dictionary) {
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
				dictionary: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CSteamEngine_GetTextFilterDictionary_Response";
	}
}
class u extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.language) {
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
				language: {
					n: 1,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				type: {
					n: 2,
					q: true,
					br: i.qM.readString,
					bw: i.gp.writeString,
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
		return "CSteamEngine_TextFilterDictionaryChanged_Notification";
	}
}
class d extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.pid) {
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
				pid: {
					n: 1,
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
		return "CSteamEngine_GetGameIDForPID_Request";
	}
}
class A extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.gameid) {
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
				gameid: {
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
		return "CSteamEngine_GetGameIDForPID_Response";
	}
}
class p extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.gameid) {
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
				gameid: {
					n: 1,
					q: true,
					br: i.qM.readUint64String,
					bw: i.gp.writeUint64String,
				},
				should_handle: {
					n: 2,
					q: true,
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
		return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
	}
}
export class s4 extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!s4.prototype.search_term) {
			i.Sg(s4.M());
		}
		o.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		s4.sm_m ||= {
			proto: s4,
			fields: {
				search_term: {
					n: 1,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				max_results: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return s4.sm_m;
	}
	static MBF() {
		s4.sm_mbf ||= i.w0(s4.M());
		return s4.sm_mbf;
	}
	toObject(e = false) {
		return s4.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(s4.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(s4.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new s4();
		return s4.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(s4.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		s4.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(s4.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		s4.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
	}
}
class h extends o {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!h.prototype.appids) {
			i.Sg(h.M());
		}
		o.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		h.sm_m ||= {
			proto: h,
			fields: {
				appids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readUint32,
					pbr: i.qM.readPackedUint32,
					bw: i.gp.writeRepeatedUint32,
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
		return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
	}
}
export var UP;
(function (e) {
	e.UpdateTextFilterDictionaryHandler = {
		name: "SteamEngine.UpdateTextFilterDictionary#1",
		request: fx,
	};
	e.RegisterForUpdateTextFilterDictionary = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.UpdateTextFilterDictionaryHandler,
				t,
			);
		}
	};
	e.UpdateTextFilterDictionary = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamEngine.UpdateTextFilterDictionary#1",
				(0, a.I8)(fx, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgUpdateTextFilterDictionary = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamEngine.UpdateTextFilterDictionary#1",
				(0, a.I8)(fx, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.GetTextFilterDictionaryHandler = {
		name: "SteamEngine.GetTextFilterDictionary#1",
		request: i6,
		response: m,
	};
	e.GetTextFilterDictionary = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"SteamEngine.GetTextFilterDictionary#1",
				(0, a.I8)(i6, e),
				m,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgGetTextFilterDictionary = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"SteamEngine.GetTextFilterDictionary#1",
				(0, a.I8)(i6, e),
				m,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.NotifyTextFilterDictionaryChangedHandler = {
		name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
		request: u,
	};
	e.RegisterForNotifyTextFilterDictionaryChanged = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyTextFilterDictionaryChangedHandler,
				t,
			);
		}
	};
	e.NotifyTextFilterDictionaryChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamEngine.NotifyTextFilterDictionaryChanged#1",
				(0, a.I8)(u, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgNotifyTextFilterDictionaryChanged = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamEngine.NotifyTextFilterDictionaryChanged#1",
				(0, a.I8)(u, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.GetGameIDForPIDHandler = {
		name: "SteamEngine.GetGameIDForPID#1",
		request: d,
		response: A,
	};
	e.GetGameIDForPID = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, a.I8)(d, e), A, {
				ePrivilege: 1,
				eClientExecutionSite: 2,
			});
		}
	};
	e.SendMsgGetGameIDForPID = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, a.I8)(d, e), A, {
				ePrivilege: 1,
				eClientExecutionSite: 2,
			});
		}
	};
	e.SetOverlayEscapeKeyHandlingHandler = {
		name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
		request: p,
	};
	e.RegisterForSetOverlayEscapeKeyHandling = function (t, r) {
		if ((r = r || (0, s.OI)().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.SetOverlayEscapeKeyHandlingHandler,
				t,
			);
		}
	};
	e.SetOverlayEscapeKeyHandling = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamEngine.SetOverlayEscapeKeyHandling#1",
				(0, a.I8)(p, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgSetOverlayEscapeKeyHandling = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"SteamEngine.SetOverlayEscapeKeyHandling#1",
				(0, a.I8)(p, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SearchAppDataCacheByStoreKeywordsHandler = {
		name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
		request: s4,
		response: h,
	};
	e.SearchAppDataCacheByStoreKeywords = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"SteamEngine.SearchAppDataCacheByStoreKeywords#1",
				(0, a.I8)(s4, e),
				h,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
	e.SendMsgSearchAppDataCacheByStoreKeywords = function (e, t) {
		if ((t = t || (0, s.OI)().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"SteamEngine.SearchAppDataCacheByStoreKeywords#1",
				(0, a.I8)(s4, e),
				h,
				{
					ePrivilege: 1,
					eClientExecutionSite: 2,
				},
			);
		}
	};
})((UP ||= {}));
