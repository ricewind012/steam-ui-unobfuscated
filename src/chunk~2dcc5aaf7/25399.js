var n = require(/*webcrack:missing*/ "./58663.js");
var i = require(/*webcrack:missing*/ "./48307.js");
var a = require(/*webcrack:missing*/ "./12176.js");
const s = n.Message;
class o extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!o.prototype.appids) {
			i.Sg(o.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		o.sm_m ||= {
			proto: o,
			fields: {
				appids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
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
		return "CAccountPrivateAppList";
	}
}
export class i9 extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!i9.prototype.appids) {
			i.Sg(i9.M());
		}
		s.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		i9.sm_m ||= {
			proto: i9,
			fields: {
				appids: {
					n: 1,
					r: true,
					q: true,
					br: i.qM.readInt32,
					pbr: i.qM.readPackedInt32,
					bw: i.gp.writeRepeatedInt32,
				},
				private: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return i9.sm_m;
	}
	static MBF() {
		i9.sm_mbf ||= i.w0(i9.M());
		return i9.sm_mbf;
	}
	toObject(e = false) {
		return i9.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(i9.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(i9.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new i9();
		return i9.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(i9.MBF(), e, t);
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		i9.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(i9.M(), e, t);
	}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		i9.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAccountPrivateApps_ToggleAppPrivacy_Request";
	}
}
class c extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return c.toObject(e, this);
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
		return new c();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new c();
		return c.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		c.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAccountPrivateApps_ToggleAppPrivacy_Response";
	}
}
export class Fn extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		s.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return Fn.toObject(e, this);
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
		return new Fn();
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Fn();
		return Fn.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new n.BinaryWriter();
		Fn.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new n.BinaryWriter();
		Fn.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CAccountPrivateApps_GetPrivateAppList_Request";
	}
}
class u extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.private_apps) {
			i.Sg(u.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				private_apps: {
					n: 1,
					c: o,
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
		return "CAccountPrivateApps_GetPrivateAppList_Response";
	}
}
class d extends s {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!d.prototype.private_apps) {
			i.Sg(d.M());
		}
		s.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		d.sm_m ||= {
			proto: d,
			fields: {
				private_apps: {
					n: 1,
					c: o,
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
		return "CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification";
	}
}
export var c4;
export var $y;
(function (e) {
	e.ToggleAppPrivacy = function (e, t) {
		return e.SendMsg(
			"AccountPrivateApps.ToggleAppPrivacy#1",
			(0, a.I8)(i9, t),
			c,
			{
				ePrivilege: 1,
			},
		);
	};
	e.GetPrivateAppList = function (e, t) {
		return e.SendMsg(
			"AccountPrivateApps.GetPrivateAppList#1",
			(0, a.I8)(Fn, t),
			u,
			{
				bConstMethod: true,
				ePrivilege: 1,
			},
		);
	};
})((c4 ||= {}));
(function (e) {
	e.NotifyPrivateAppListChangedHandler = {
		name: "AccountPrivateAppsClient.NotifyPrivateAppListChanged#1",
		request: d,
	};
})(($y ||= {}));
