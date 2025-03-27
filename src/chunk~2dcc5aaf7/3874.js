import {
	Localize,
	LocalizeInlineReactWithFallback,
	Nm,
} from "../../actual_src/utils/localization.js";
import {
	qZ,
	LocalizeTimeRemaining,
} from "../../actual_src/utils/localization/datetime.js";
import { BElementFullscreen } from "../../actual_src/utils/domutils.js";
import n, { useState, useMemo, useRef } from "./63696.js";
import i from "./44846.js";
import a from "./27541.js";
import s, { sT, Gb, uX } from "./91720.js";
import o, { tG } from "./84629.js";
import l, { f as f_1 } from "./661.js";
import c, { I8 } from "./12176.js";
import m from "./58663.js";
import u from "./48307.js";
import pe from "./44926.js";
import { bG } from "./18057.js";
import "./18869.js";
import he from "./30449.js";
import Ce, { yZ } from "./34461.js";
import { Mk, B as B_1, Fo, aQ, Q1, Dp } from "./68438.js";
import { q3 } from "./90095.js";
import { I as I_1 } from "./61416.js";
import { KV } from "./46382.js";
import { lX } from "./31084.js";
import { R7, k5 } from "./11131.js";
import Be from "./90601.js";
import ve from "./64608.js";
import Ie from "./35488.js";
import Ee from "./10606.js";
import { pg } from "./13869.js";
import Te from "./5482.js";
import Re from "./50376.js";
import { w as w_1 } from "./49455.js";
import { A as A_1 } from "./90765.js";
import Ge, { Pr, TL, hf, Y2, Qn } from "./72476.js";
import Oe, { kM, GJ } from "./39730.js";
import Pe from "./11484.js";
import Le from "./99736.js";
import ze from "./93092.js";
import xe, { VI } from "./34792.js";
import { U8, gO, hF } from "./10905.js";
import { Fj } from "./736.js";
import Ve from "./12774.js";
import He from "./24695.js";
import je from "./58254.js";
import { T as T_1 } from "./78057.js";
import { Pp } from "./89748.js";

const { Message } = m;

class A extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return A.toObject(e, this);
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
		return new A();
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new A();
		return A.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobilePerAccount_GetSettings_Request";
	}
}
class p extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.has_settings) {
			u.Sg(p.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		p.sm_m ||= {
			proto: p,
			fields: {
				has_settings: {
					n: 4,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				allow_sale_push: {
					n: 2,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				allow_wishlist_push: {
					n: 3,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				chat_notification_level: {
					n: 5,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				notify_direct_chat: {
					n: 6,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				notify_group_chat: {
					n: 7,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				allow_event_push: {
					n: 8,
					d: true,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
			},
		};
		return p.sm_m;
	}
	static MBF() {
		p.sm_mbf ||= u.w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(p.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(p.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(p.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobilePerAccount_GetSettings_Response";
	}
}
class g extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.allow_sale_push) {
			u.Sg(g.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				allow_sale_push: {
					n: 2,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				allow_wishlist_push: {
					n: 3,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				chat_notification_level: {
					n: 4,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				notify_direct_chat: {
					n: 5,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				notify_group_chat: {
					n: 6,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				allow_event_push: {
					n: 7,
					d: true,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= u.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(g.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobilePerAccount_SetSettings_Request";
	}
}
class h extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new m.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobilePerAccount_SetSettings_Response";
	}
}
class C extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!C.prototype.deviceid) {
			u.Sg(C.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		C.sm_m ||= {
			proto: C,
			fields: {
				deviceid: {
					n: 1,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				language: {
					n: 2,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				push_enabled: {
					n: 3,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				app_version: {
					n: 4,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				os_version: {
					n: 5,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				device_model: {
					n: 6,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				twofactor_device_identifier: {
					n: 7,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				mobile_app: {
					n: 8,
					br: u.qM.readEnum,
					bw: u.gp.writeEnum,
				},
			},
		};
		return C.sm_m;
	}
	static MBF() {
		C.sm_mbf ||= u.w0(C.M());
		return C.sm_mbf;
	}
	toObject(e = false) {
		return C.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(C.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(C.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(C.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(C.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobileDevice_RegisterMobileDevice_Request";
	}
}
class _ extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.unique_deviceid) {
			u.Sg(_.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				unique_deviceid: {
					n: 2,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= u.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(_.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobileDevice_RegisterMobileDevice_Response";
	}
}
class f extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!f.prototype.deviceid) {
			u.Sg(f.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		f.sm_m ||= {
			proto: f,
			fields: {
				deviceid: {
					n: 1,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
			},
		};
		return f.sm_m;
	}
	static MBF() {
		f.sm_mbf ||= u.w0(f.M());
		return f.sm_mbf;
	}
	toObject(e = false) {
		return f.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(f.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(f.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new f();
		return f.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(f.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(f.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		f.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobileDevice_DeregisterMobileDevice_Notification";
	}
}
class b extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.app_type) {
			u.Sg(b.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				app_type: {
					n: 1,
					br: u.qM.readEnum,
					bw: u.gp.writeEnum,
				},
				push_enabled_only: {
					n: 2,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				minimum_version: {
					n: 3,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= u.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(b.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobileDevice_HasMobileDevice_Request";
	}
}
class y extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.found_device) {
			u.Sg(y.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				found_device: {
					n: 1,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				up_to_date: {
					n: 2,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= u.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(y.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(y.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(y.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobileDevice_HasMobileDevice_Response";
	}
}
class S extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!S.prototype.steamid) {
			u.Sg(S.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		S.sm_m ||= {
			proto: S,
			fields: {
				steamid: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				token: {
					n: 2,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				signature: {
					n: 3,
					br: u.qM.readBytes,
					bw: u.gp.writeBytes,
				},
				device_details: {
					n: 4,
					c: w,
				},
			},
		};
		return S.sm_m;
	}
	static MBF() {
		S.sm_mbf ||= u.w0(S.M());
		return S.sm_mbf;
	}
	toObject(e = false) {
		return S.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(S.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(S.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new S();
		return S.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(S.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(S.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		S.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobileAuth_MigrateMobileSession_Request";
	}
}
class w extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!w.prototype.device_friendly_name) {
			u.Sg(w.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		w.sm_m ||= {
			proto: w,
			fields: {
				device_friendly_name: {
					n: 1,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				platform_type: {
					n: 2,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				os_type: {
					n: 3,
					br: u.qM.readInt32,
					bw: u.gp.writeInt32,
				},
				gaming_device_type: {
					n: 4,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
			},
		};
		return w.sm_m;
	}
	static MBF() {
		w.sm_mbf ||= u.w0(w.M());
		return w.sm_mbf;
	}
	toObject(e = false) {
		return w.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(w.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(w.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new w();
		return w.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(w.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(w.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		w.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobileAuth_MigrateMobileSession_Request_DeviceDetails";
	}
}
class B extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!B.prototype.refresh_token) {
			u.Sg(B.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		B.sm_m ||= {
			proto: B,
			fields: {
				refresh_token: {
					n: 1,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				access_token: {
					n: 2,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
			},
		};
		return B.sm_m;
	}
	static MBF() {
		B.sm_mbf ||= u.w0(B.M());
		return B.sm_mbf;
	}
	toObject(e = false) {
		return B.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(B.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(B.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new B();
		return B.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(B.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(B.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		B.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobileAuth_MigrateMobileSession_Response";
	}
}
class v extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!v.prototype.authenticator_gid) {
			u.Sg(v.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		v.sm_m ||= {
			proto: v,
			fields: {
				authenticator_gid: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
			},
		};
		return v.sm_m;
	}
	static MBF() {
		v.sm_mbf ||= u.w0(v.M());
		return v.sm_mbf;
	}
	toObject(e = false) {
		return v.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(v.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(v.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new v();
		return v.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(v.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(v.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		v.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobileApp_GetMobileSummary_Request";
	}
}
class I extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!I.prototype.stale_time_seconds) {
			u.Sg(I.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		I.sm_m ||= {
			proto: I,
			fields: {
				stale_time_seconds: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				is_authenticator_valid: {
					n: 2,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				owned_games: {
					n: 3,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				friend_count: {
					n: 4,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				wallet_balance: {
					n: 5,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				language: {
					n: 6,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
			},
		};
		return I.sm_m;
	}
	static MBF() {
		I.sm_mbf ||= u.w0(I.M());
		return I.sm_mbf;
	}
	toObject(e = false) {
		return I.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(I.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(I.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new I();
		return I.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(I.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(I.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		I.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMobileApp_GetMobileSummary_Response";
	}
}
let E;
var M;
let T;
let R;
((e) => {
	e.GetSettings = (e, t) =>
		e.SendMsg("MobilePerAccount.GetSettings#1", I8(A, t), p, {
			ePrivilege: 1,
		});
	e.SetSettings = (e, t) =>
		e.SendMsg("MobilePerAccount.SetSettings#1", I8(g, t), h, {
			ePrivilege: 1,
		});
})((E ||= {}));
((e) => {
	e.RegisterMobileDevice = (e, t) =>
		e.SendMsg("MobileDevice.RegisterMobileDevice#1", I8(C, t), _, {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.DeregisterMobileDevice = (e, t) =>
		e.SendNotification("MobileDevice.DeregisterMobileDevice#1", I8(f, t), {
			ePrivilege: 1,
			eWebAPIKeyRequirement: 2,
		});
	e.HasMobileDevice = (e, t) =>
		e.SendMsg("MobileDevice.HasMobileDevice#1", I8(b, t), y, {
			bConstMethod: true,
			ePrivilege: 1,
		});
})((M ||= {}));
((e) => {
	e.MigrateMobileSession = (e, t) =>
		e.SendMsg("MobileAuth.MigrateMobileSession#1", I8(S, t), B, {
			ePrivilege: 0,
			eWebAPIKeyRequirement: 1,
		});
})((T ||= {}));
((e) => {
	e.GetMobileSummary = (e, t) =>
		e.SendMsg("MobileApp.GetMobileSummary#1", I8(v, t), I, {
			ePrivilege: 1,
		});
})((R ||= {}));
class D extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!D.prototype.pin) {
			u.Sg(D.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		D.sm_m ||= {
			proto: D,
			fields: {
				pin: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
			},
		};
		return D.sm_m;
	}
	static MBF() {
		D.sm_mbf ||= u.w0(D.M());
		return D.sm_mbf;
	}
	toObject(e = false) {
		return D.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(D.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(D.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new D();
		return D.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(D.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(D.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		D.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_GetPairingInfo_Request";
	}
}
class N extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!N.prototype.session_id) {
			u.Sg(N.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		N.sm_m ||= {
			proto: N,
			fields: {
				session_id: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				device_id: {
					n: 2,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				request: {
					n: 3,
					br: u.qM.readBytes,
					bw: u.gp.writeBytes,
				},
			},
		};
		return N.sm_m;
	}
	static MBF() {
		N.sm_mbf ||= u.w0(N.M());
		return N.sm_mbf;
	}
	toObject(e = false) {
		return N.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(N.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(N.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new N();
		return N.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(N.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(N.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		N.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_GetPairingInfo_Response";
	}
}
class F extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!F.prototype.session_id) {
			u.Sg(F.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		F.sm_m ||= {
			proto: F,
			fields: {
				session_id: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				steamid: {
					n: 2,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				device_id: {
					n: 3,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
			},
		};
		return F.sm_m;
	}
	static MBF() {
		F.sm_mbf ||= u.w0(F.M());
		return F.sm_mbf;
	}
	toObject(e = false) {
		return F.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(F.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(F.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new F();
		return F.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(F.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(F.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		F.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_RegisterStatusUpdate_Notification";
	}
}
class G extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!G.prototype.session_id) {
			u.Sg(G.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		G.sm_m ||= {
			proto: G,
			fields: {
				session_id: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				steamid: {
					n: 2,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
			},
		};
		return G.sm_m;
	}
	static MBF() {
		G.sm_mbf ||= u.w0(G.M());
		return G.sm_mbf;
	}
	toObject(e = false) {
		return G.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(G.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(G.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new G();
		return G.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(G.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(G.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		G.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_UnregisterStatusUpdate_Notification";
	}
}
class O extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!O.prototype.device_friendly_name) {
			u.Sg(O.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		O.sm_m ||= {
			proto: O,
			fields: {
				device_friendly_name: {
					n: 1,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				os_type: {
					n: 2,
					br: u.qM.readInt32,
					bw: u.gp.writeInt32,
				},
				gaming_device_type: {
					n: 3,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
			},
		};
		return O.sm_m;
	}
	static MBF() {
		O.sm_mbf ||= u.w0(O.M());
		return O.sm_mbf;
	}
	toObject(e = false) {
		return O.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(O.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(O.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new O();
		return O.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(O.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(O.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		O.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_DeviceDetails";
	}
}
class P extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!P.prototype.steamid) {
			u.Sg(P.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		P.sm_m ||= {
			proto: P,
			fields: {
				steamid: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				remote_client_id: {
					n: 2,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				device_details: {
					n: 3,
					c: O,
				},
			},
		};
		return P.sm_m;
	}
	static MBF() {
		P.sm_mbf ||= u.w0(P.M());
		return P.sm_mbf;
	}
	toObject(e = false) {
		return P.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(P.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(P.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new P();
		return P.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(P.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(P.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		P.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_Online_Notification";
	}
}
class L extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return L.toObject(e, this);
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
		return new L();
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new L();
		return L.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		L.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_GetRecentClients_Request";
	}
}
class z extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!z.prototype.remote_client_id) {
			u.Sg(z.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		z.sm_m ||= {
			proto: z,
			fields: {
				remote_client_id: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				device_details: {
					n: 2,
					c: O,
				},
				last_seen: {
					n: 4,
					br: u.qM.readUint64String,
					bw: u.gp.writeUint64String,
				},
				city: {
					n: 5,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				state: {
					n: 6,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				country: {
					n: 7,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				is_online: {
					n: 8,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
			},
		};
		return z.sm_m;
	}
	static MBF() {
		z.sm_mbf ||= u.w0(z.M());
		return z.sm_mbf;
	}
	toObject(e = false) {
		return z.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(z.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new z();
		return z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(z.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(z.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_ClientDetails";
	}
}
class x extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!x.prototype.clients) {
			u.Sg(x.M());
		}
		Message.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		x.sm_m ||= {
			proto: x,
			fields: {
				clients: {
					n: 1,
					c: z,
					r: true,
					q: true,
				},
			},
		};
		return x.sm_m;
	}
	static MBF() {
		x.sm_mbf ||= u.w0(x.M());
		return x.sm_mbf;
	}
	toObject(e = false) {
		return x.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(x.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(x.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new x();
		return x.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(x.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(x.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		x.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_GetRecentClients_Response";
	}
}
class U extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!U.prototype.type) {
			u.Sg(U.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		U.sm_m ||= {
			proto: U,
			fields: {
				type: {
					n: 1,
					br: u.qM.readEnum,
					bw: u.gp.writeEnum,
				},
				task_id: {
					n: 2,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				url: {
					n: 3,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
				file_id: {
					n: 4,
					br: u.qM.readInt64String,
					bw: u.gp.writeInt64String,
				},
			},
		};
		return U.sm_m;
	}
	static MBF() {
		U.sm_mbf ||= u.w0(U.M());
		return U.sm_mbf;
	}
	toObject(e = false) {
		return U.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(U.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(U.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new U();
		return U.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(U.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(U.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		U.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_Task";
	}
}
class W extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!W.prototype.remote_client_id) {
			u.Sg(W.M());
		}
		Message.initialize(this, e, 0, -1, [2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		W.sm_m ||= {
			proto: W,
			fields: {
				remote_client_id: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				tasklist: {
					n: 2,
					c: U,
					r: true,
					q: true,
				},
			},
		};
		return W.sm_m;
	}
	static MBF() {
		W.sm_mbf ||= u.w0(W.M());
		return W.sm_mbf;
	}
	toObject(e = false) {
		return W.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(W.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(W.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new W();
		return W.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(W.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(W.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		W.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_TaskList_Notification";
	}
}
class V extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!V.prototype.remote_client_id) {
			u.Sg(V.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		V.sm_m ||= {
			proto: V,
			fields: {
				remote_client_id: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				task_id: {
					n: 2,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				content_id: {
					n: 3,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
			},
		};
		return V.sm_m;
	}
	static MBF() {
		V.sm_mbf ||= u.w0(V.M());
		return V.sm_mbf;
	}
	toObject(e = false) {
		return V.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(V.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(V.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new V();
		return V.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(V.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(V.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		V.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_MarkTaskComplete_Request";
	}
}
class H extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new m.BinaryReader(e);
		let r = new H();
		return H.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		H.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_MarkTaskComplete_Response";
	}
}
class j extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!j.prototype.session_id) {
			u.Sg(j.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		j.sm_m ||= {
			proto: j,
			fields: {
				session_id: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				steamid: {
					n: 2,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				payload: {
					n: 4,
					br: u.qM.readBytes,
					bw: u.gp.writeBytes,
				},
			},
		};
		return j.sm_m;
	}
	static MBF() {
		j.sm_mbf ||= u.w0(j.M());
		return j.sm_mbf;
	}
	toObject(e = false) {
		return j.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(j.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(j.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new j();
		return j.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(j.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(j.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		j.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_RemotePacket_Notification";
	}
}
class q extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!q.prototype.session_id) {
			u.Sg(q.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		q.sm_m ||= {
			proto: q,
			fields: {
				session_id: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				payload: {
					n: 2,
					br: u.qM.readBytes,
					bw: u.gp.writeBytes,
				},
			},
		};
		return q.sm_m;
	}
	static MBF() {
		q.sm_mbf ||= u.w0(q.M());
		return q.sm_mbf;
	}
	toObject(e = false) {
		return q.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(q.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new q();
		return q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(q.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(q.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_ReplyPacket_Notification";
	}
}
class Q extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Q.prototype.cellid) {
			u.Sg(Q.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Q.sm_m ||= {
			proto: Q,
			fields: {
				cellid: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				credentials: {
					n: 2,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
			},
		};
		return Q.sm_m;
	}
	static MBF() {
		Q.sm_mbf ||= u.w0(Q.M());
		return Q.sm_mbf;
	}
	toObject(e = false) {
		return Q.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(Q.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(Q.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new Q();
		return Q.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(Q.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(Q.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		Q.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_AllocateRelayServer_Request";
	}
}
class Z extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Z.prototype.relay_server) {
			u.Sg(Z.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Z.sm_m ||= {
			proto: Z,
			fields: {
				relay_server: {
					n: 1,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
			},
		};
		return Z.sm_m;
	}
	static MBF() {
		Z.sm_mbf ||= u.w0(Z.M());
		return Z.sm_mbf;
	}
	toObject(e = false) {
		return Z.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(Z.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(Z.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new Z();
		return Z.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(Z.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(Z.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		Z.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_AllocateRelayServer_Response";
	}
}
class Y extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Y.prototype.appid) {
			u.Sg(Y.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Y.sm_m ||= {
			proto: Y,
			fields: {
				appid: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
			},
		};
		return Y.sm_m;
	}
	static MBF() {
		Y.sm_mbf ||= u.w0(Y.M());
		return Y.sm_mbf;
	}
	toObject(e = false) {
		return Y.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(Y.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(Y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new Y();
		return Y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(Y.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(Y.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		Y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_AllocateSDR_Request";
	}
}
class K extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return K.toObject(e, this);
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
		return new K();
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new K();
		return K.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		K.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_AllocateSDR_Response";
	}
}
class X extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!X.prototype.steamid) {
			u.Sg(X.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		X.sm_m ||= {
			proto: X,
			fields: {
				steamid: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				clientid: {
					n: 2,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				payload: {
					n: 3,
					br: u.qM.readBytes,
					bw: u.gp.writeBytes,
				},
			},
		};
		return X.sm_m;
	}
	static MBF() {
		X.sm_mbf ||= u.w0(X.M());
		return X.sm_mbf;
	}
	toObject(e = false) {
		return X.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(X.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(X.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new X();
		return X.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(X.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(X.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		X.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_SteamBroadcast_Notification";
	}
}
class J extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!J.prototype.steamid) {
			u.Sg(J.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		J.sm_m ||= {
			proto: J,
			fields: {
				steamid: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				src_clientid: {
					n: 2,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				dst_clientid: {
					n: 3,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				secretid: {
					n: 4,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				encrypted_payload: {
					n: 5,
					br: u.qM.readBytes,
					bw: u.gp.writeBytes,
				},
			},
		};
		return J.sm_m;
	}
	static MBF() {
		J.sm_mbf ||= u.w0(J.M());
		return J.sm_mbf;
	}
	toObject(e = false) {
		return J.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(J.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(J.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new J();
		return J.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(J.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(J.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		J.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_SteamToSteam_Notification";
	}
}
class $ extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!$.prototype.host_account_id) {
			u.Sg($.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		$.sm_m ||= {
			proto: $,
			fields: {
				host_account_id: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				client_account_id: {
					n: 2,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				appid: {
					n: 3,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				device_form_factor: {
					n: 4,
					br: u.qM.readInt32,
					bw: u.gp.writeInt32,
				},
				remote_play_together: {
					n: 5,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				guest_session: {
					n: 6,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
			},
		};
		return $.sm_m;
	}
	static MBF() {
		$.sm_mbf ||= u.w0($.M());
		return $.sm_mbf;
	}
	toObject(e = false) {
		return $.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT($.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq($.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new $();
		return $.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj($.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0($.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		$.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemotePlay_SessionStarted_Request";
	}
}
class ee extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ee.prototype.record_id) {
			u.Sg(ee.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ee.sm_m ||= {
			proto: ee,
			fields: {
				record_id: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
			},
		};
		return ee.sm_m;
	}
	static MBF() {
		ee.sm_mbf ||= u.w0(ee.M());
		return ee.sm_mbf;
	}
	toObject(e = false) {
		return ee.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(ee.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(ee.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new ee();
		return ee.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(ee.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(ee.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		ee.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemotePlay_SessionStarted_Response";
	}
}
class te extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!te.prototype.record_id) {
			u.Sg(te.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		te.sm_m ||= {
			proto: te,
			fields: {
				record_id: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				used_x264: {
					n: 2,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				used_h264: {
					n: 3,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				used_hevc: {
					n: 4,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
			},
		};
		return te.sm_m;
	}
	static MBF() {
		te.sm_mbf ||= u.w0(te.M());
		return te.sm_mbf;
	}
	toObject(e = false) {
		return te.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(te.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(te.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new te();
		return te.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(te.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(te.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		te.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemotePlay_SessionStopped_Notification";
	}
}
class re extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!re.prototype.steamid) {
			u.Sg(re.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		re.sm_m ||= {
			proto: re,
			fields: {
				steamid: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				group_updated: {
					n: 2,
					c: se,
				},
			},
		};
		return re.sm_m;
	}
	static MBF() {
		re.sm_mbf ||= u.w0(re.M());
		return re.sm_mbf;
	}
	toObject(e = false) {
		return re.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(re.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(re.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new re();
		return re.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(re.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(re.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		re.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemotePlayTogether_Notification";
	}
}
class ne extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ne.prototype.steamid) {
			u.Sg(ne.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ne.sm_m ||= {
			proto: ne,
			fields: {
				steamid: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				guestid: {
					n: 2,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				avatar_hash: {
					n: 3,
					br: u.qM.readBytes,
					bw: u.gp.writeBytes,
				},
				keyboard_enabled: {
					n: 4,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				mouse_enabled: {
					n: 5,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				controller_enabled: {
					n: 6,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
			},
		};
		return ne.sm_m;
	}
	static MBF() {
		ne.sm_mbf ||= u.w0(ne.M());
		return ne.sm_mbf;
	}
	toObject(e = false) {
		return ne.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(ne.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(ne.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new ne();
		return ne.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(ne.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(ne.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		ne.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemotePlayTogether_Notification_Player";
	}
}
class ie extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ie.prototype.slotid) {
			u.Sg(ie.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ie.sm_m ||= {
			proto: ie,
			fields: {
				slotid: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				steamid: {
					n: 2,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
			},
		};
		return ie.sm_m;
	}
	static MBF() {
		ie.sm_mbf ||= u.w0(ie.M());
		return ie.sm_mbf;
	}
	toObject(e = false) {
		return ie.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(ie.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(ie.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new ie();
		return ie.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(ie.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(ie.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		ie.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemotePlayTogether_Notification_ControllerSlot_obsolete";
	}
}
class ae extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ae.prototype.slotid) {
			u.Sg(ae.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ae.sm_m ||= {
			proto: ae,
			fields: {
				slotid: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				player: {
					n: 2,
					c: ne,
				},
				controller_type: {
					n: 3,
					br: u.qM.readInt32,
					bw: u.gp.writeInt32,
				},
			},
		};
		return ae.sm_m;
	}
	static MBF() {
		ae.sm_mbf ||= u.w0(ae.M());
		return ae.sm_mbf;
	}
	toObject(e = false) {
		return ae.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(ae.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(ae.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new ae();
		return ae.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(ae.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(ae.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		ae.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemotePlayTogether_Notification_ControllerSlot";
	}
}
class se extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!se.prototype.host_steamid) {
			u.Sg(se.M());
		}
		Message.initialize(this, e, 0, -1, [3, 5, 7, 8], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		se.sm_m ||= {
			proto: se,
			fields: {
				host_steamid: {
					n: 1,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				host_clientid: {
					n: 2,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				players_obsolete: {
					n: 3,
					r: true,
					q: true,
					br: u.qM.readFixed64String,
					pbr: u.qM.readPackedFixed64String,
					bw: u.gp.writeRepeatedFixed64String,
				},
				host_gameid: {
					n: 4,
					br: u.qM.readFixed64String,
					bw: u.gp.writeFixed64String,
				},
				controller_slots_obsolete: {
					n: 5,
					c: ie,
					r: true,
					q: true,
				},
				has_new_players: {
					n: 6,
					br: u.qM.readBool,
					bw: u.gp.writeBool,
				},
				player_slots: {
					n: 7,
					c: ne,
					r: true,
					q: true,
				},
				controller_slots: {
					n: 8,
					c: ae,
					r: true,
					q: true,
				},
			},
		};
		return se.sm_m;
	}
	static MBF() {
		se.sm_mbf ||= u.w0(se.M());
		return se.sm_mbf;
	}
	toObject(e = false) {
		return se.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(se.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(se.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new se();
		return se.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(se.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(se.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		se.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemotePlayTogether_Notification_GroupUpdated";
	}
}
class oe extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!oe.prototype.appid) {
			u.Sg(oe.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		oe.sm_m ||= {
			proto: oe,
			fields: {
				appid: {
					n: 1,
					br: u.qM.readUint32,
					bw: u.gp.writeUint32,
				},
				launch_parameters: {
					n: 2,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
			},
		};
		return oe.sm_m;
	}
	static MBF() {
		oe.sm_mbf ||= u.w0(oe.M());
		return oe.sm_mbf;
	}
	toObject(e = false) {
		return oe.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(oe.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(oe.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new oe();
		return oe.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(oe.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(oe.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		oe.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_CreateRemotePlayTogetherInvitation_Request";
	}
}
class le extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!le.prototype.invitation_code) {
			u.Sg(le.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		le.sm_m ||= {
			proto: le,
			fields: {
				invitation_code: {
					n: 1,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
			},
		};
		return le.sm_m;
	}
	static MBF() {
		le.sm_mbf ||= u.w0(le.M());
		return le.sm_mbf;
	}
	toObject(e = false) {
		return le.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(le.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(le.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new le();
		return le.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(le.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(le.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		le.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_CreateRemotePlayTogetherInvitation_Response";
	}
}
class ce extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ce.prototype.invitation_code) {
			u.Sg(ce.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ce.sm_m ||= {
			proto: ce,
			fields: {
				invitation_code: {
					n: 1,
					br: u.qM.readString,
					bw: u.gp.writeString,
				},
			},
		};
		return ce.sm_m;
	}
	static MBF() {
		ce.sm_mbf ||= u.w0(ce.M());
		return ce.sm_mbf;
	}
	toObject(e = false) {
		return ce.toObject(e, this);
	}
	static toObject(e, t) {
		return u.BT(ce.M(), e, t);
	}
	static fromObject(e) {
		return u.Uq(ce.M(), e);
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new ce();
		return ce.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return u.zj(ce.MBF(), e, t);
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		u.i0(ce.M(), e, t);
	}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		ce.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_DeleteRemotePlayTogetherInvitation_Request";
	}
}
class me extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return me.toObject(e, this);
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
		return new me();
	}
	static deserializeBinary(e) {
		let t = new m.BinaryReader(e);
		let r = new me();
		return me.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new m.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new m.BinaryWriter();
		me.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CRemoteClient_DeleteRemotePlayTogetherInvitation_Response";
	}
}
let ue;
let de;
((e) => {
	e.GetPairingInfo = (e, t) =>
		e.SendMsg("RemoteClient.GetPairingInfo#1", I8(D, t), N, {
			ePrivilege: 1,
		});
	e.NotifyOnline = (e, t) =>
		e.SendNotification("RemoteClient.NotifyOnline#1", I8(P, t), {
			ePrivilege: 1,
		});
	e.GetRecentClients = (e, t) =>
		e.SendMsg("RemoteClient.GetRecentClients#1", I8(L, t), x, {
			ePrivilege: 1,
		});
	e.MarkTaskComplete = (e, t) =>
		e.SendMsg("RemoteClient.MarkTaskComplete#1", I8(V, t), H, {
			ePrivilege: 1,
		});
	e.NotifyReplyPacket = (e, t) =>
		e.SendNotification("RemoteClient.NotifyReplyPacket#1", I8(q, t), {
			ePrivilege: 1,
		});
	e.AllocateRelayServer = (e, t) =>
		e.SendMsg("RemoteClient.AllocateRelayServer#1", I8(Q, t), Z, {
			ePrivilege: 1,
		});
	e.AllocateSDR = (e, t) =>
		e.SendMsg("RemoteClient.AllocateSDR#1", I8(Y, t), K, {
			ePrivilege: 1,
		});
	e.SendSteamBroadcastPacket = (e, t) =>
		e.SendNotification("RemoteClient.SendSteamBroadcastPacket#1", I8(X, t), {
			ePrivilege: 1,
		});
	e.SendSteamToSteamPacket = (e, t) =>
		e.SendNotification("RemoteClient.SendSteamToSteamPacket#1", I8(J, t), {
			ePrivilege: 1,
		});
	e.SendRemotePlaySessionStarted = (e, t) =>
		e.SendMsg("RemoteClient.SendRemotePlaySessionStarted#1", I8($, t), ee, {
			ePrivilege: 1,
		});
	e.SendRemotePlaySessionStopped = (e, t) =>
		e.SendNotification(
			"RemoteClient.SendRemotePlaySessionStopped#1",
			I8(te, t),
			{
				ePrivilege: 1,
			},
		);
	e.SendRemotePlayTogetherPacket = (e, t) =>
		e.SendNotification(
			"RemoteClient.SendRemotePlayTogetherPacket#1",
			I8(re, t),
			{
				ePrivilege: 1,
			},
		);
	e.CreateRemotePlayTogetherInvitation = (e, t) =>
		e.SendMsg(
			"RemoteClient.CreateRemotePlayTogetherInvitation#1",
			I8(oe, t),
			le,
			{
				ePrivilege: 1,
			},
		);
	e.DeleteRemotePlayTogetherInvitation = (e, t) =>
		e.SendMsg(
			"RemoteClient.DeleteRemotePlayTogetherInvitation#1",
			I8(ce, t),
			me,
			{
				ePrivilege: 1,
			},
		);
})((ue ||= {}));
((e) => {
	e.NotifyRegisterStatusUpdateHandler = {
		name: "RemoteClientSteamClient.NotifyRegisterStatusUpdate#1",
		request: F,
	};
	e.NotifyUnregisterStatusUpdateHandler = {
		name: "RemoteClientSteamClient.NotifyUnregisterStatusUpdate#1",
		request: G,
	};
	e.NotifyRemotePacketHandler = {
		name: "RemoteClientSteamClient.NotifyRemotePacket#1",
		request: j,
	};
	e.NotifySteamBroadcastPacketHandler = {
		name: "RemoteClientSteamClient.NotifySteamBroadcastPacket#1",
		request: X,
	};
	e.NotifySteamToSteamPacketHandler = {
		name: "RemoteClientSteamClient.NotifySteamToSteamPacket#1",
		request: J,
	};
	e.NotifyRemotePlayTogetherPacketHandler = {
		name: "RemoteClientSteamClient.NotifyRemotePlayTogetherPacket#1",
		request: re,
	};
	e.NotifyTaskListHandler = {
		name: "RemoteClientSteamClient.NotifyTaskList#1",
		request: W,
	};
})((de ||= {}));
let Ae;
((e) => {
	e[(e.k_EPlatformTypeUnknown = 0)] = "k_EPlatformTypeUnknown";
	e[(e.k_EPlatformTypeWin32 = 1)] = "k_EPlatformTypeWin32";
	e[(e.k_EPlatformTypeWin64 = 2)] = "k_EPlatformTypeWin64";
	e[(e.k_EPlatformTypeLinux64 = 3)] = "k_EPlatformTypeLinux64";
	e[(e.k_EPlatformTypeOSX = 4)] = "k_EPlatformTypeOSX";
	e[(e.k_EPlatformTypePS3 = 5)] = "k_EPlatformTypePS3";
	e[(e.k_EPlatformTypeLinux32 = 6)] = "k_EPlatformTypeLinux32";
	e[(e.k_EPlatformTypeAndroid32 = 7)] = "k_EPlatformTypeAndroid32";
	e[(e.k_EPlatformTypeAndroid64 = 8)] = "k_EPlatformTypeAndroid64";
	e[(e.k_EPlatformTypeIOS32 = 9)] = "k_EPlatformTypeIOS32";
	e[(e.k_EPlatformTypeIOS64 = 10)] = "k_EPlatformTypeIOS64";
	e[(e.k_EPlatformTypeTVOS = 11)] = "k_EPlatformTypeTVOS";
	e[(e.k_EPlatformTypeEmbeddedClient = 12)] = "k_EPlatformTypeEmbeddedClient";
	e[(e.k_EPlatformTypeBrowser = 13)] = "k_EPlatformTypeBrowser";
	e[(e.k_EPlatformTypeMax = 14)] = "k_EPlatformTypeMax";
})((Ae ||= {}));
function qe(e) {
	const { closeModal: t, clipCreationRequest: r } = e;
	const i = I_1({
		queryKey: ["ExportClip", r.strSuggestedClipName ?? r.strSrcClipID],
		queryFn: async () => {
			const e = await r.create(true, true);
			if (e.result != 1) {
				sT(r.gameID, 3, r.nClipLengthSeconds, 0, e.result);
				return {
					result: e.result,
				};
			}
			const t = await pe.xM.ExportClipPreview({
				clip_id: e.clipSummary.clip_id,
				settings: {},
				run_policy_checks: false,
			});
			if (t.GetEResult() != 1) {
				sT(r.gameID, 3, r.nClipLengthSeconds, 0, t.GetEResult());
				return {
					result: t.GetEResult(),
					clipSummary: e.clipSummary,
				};
			} else {
				return {
					clipSummary: e.clipSummary,
					nativePreview: t.Body().toObject(),
					result: 1,
				};
			}
		},
	});
	if (!i.data) {
		return null;
	}
	const a = () => {
		r.cleanup();
		t();
	};
	const o = i.data;
	if (o.result != 1) {
		return n.createElement(
			Ve.o0,
			{
				closeModal: a,
			},
			Localize("#ClipExport_PreviewError", o.result),
		);
	}
	const { clipSummary: l, nativePreview: c } = o;
	return n.createElement(
		Ee.eV,
		{
			closeModal: a,
			className: Le.Dialog,
		},
		n.createElement(ve.Y9, null, " ", Localize("#ClipExport_Title"), " "),
		n.createElement(Ze, {
			clipCreationRequest: r,
			clipSummary: l,
			nativePreview: c,
			closeModal: a,
		}),
	);
}
const Qe = [0, 1, 2];
function Ze(e) {
	const { closeModal: t, nativePreview: r, clipSummary: i } = e;
	const [a] = VI("gamerecording_export_limit_type");
	const [o, l] = n.useState(a);
	const {
		exportOptions: c,
		exportSettings: m,
		setExportOptions: u,
	} = ((e, t, r) => {
		const [i, a] = useState(() =>
			((e, t, r) => {
				let n = 0;
				const i = Mk(parseInt(e.duration_ms) / 1000) / 1048576;
				while (i > ot[n] && n < ot.length) {
					n++;
				}
				const a =
					((e) => {
						let t = 0;
						while (t < ot.length - 1 && e > ot[t]) {
							t++;
						}
						return t;
					})(r.gamerecording_export_limit_size_mb) - n;
				const s = r.gamerecording_export_limit_width;
				const o = r.gamerecording_export_limit_height;
				let l = r.gamerecording_export_codec;
				if (wt().findIndex((e) => e.data == l) < 0) {
					l = 0;
				}
				const c = l == 0 ? t.settings.codec : l;
				const m = new gt(t.settings.width, t.settings.height, c);
				const u = r.gamerecording_export_limit_frame_rate;
				const d = r.gamerecording_export_limit_bitrate;
				return {
					0: {},
					1: {
						nCurrentFileSizeIndex: a,
						nMinFileSizeIndex: n,
					},
					2: {
						eCurrentCodec: c,
						nCurrentBitrateIndex: d > rt ? tt : d,
						nCurrentFrameRate: u,
						nCurrentResolutionIndex: m.WidthAndHeightToIndex(s, o),
						resolutions: m,
					},
				};
			})(t, r, xe.rV.clientSettings),
		);
		return {
			exportOptions: i,
			exportSettings: useMemo(
				() =>
					((e, t, r, n) => {
						switch (e) {
							case 0: {
								return {};
							}
							case 1: {
								const { nCurrentFileSizeIndex: e, nMinFileSizeIndex: i } = t[1];
								const a = ot[e + i];
								return B_1(
									parseInt(r.duration_ms) / 1000,
									a * 1024 * 1024,
									n.settings.bitrate_kbps,
								);
							}
							case 2: {
								const {
									eCurrentCodec: e,
									nCurrentBitrateIndex: r,
									nCurrentFrameRate: i,
									nCurrentResolutionIndex: a,
								} = t[2];
								const s = new gt(n.settings.width, n.settings.height, e);
								const o = Math.min(a, s.length - 1);
								const l = St(n.settings, s.res(o), i);
								return {
									frames_per_second: i,
									bitrate_kbps: l[r]?.bitrate_kbps,
									width: s.res(o).nWidth,
									height: s.res(o).nHeight,
									codec: e,
								};
							}
						}
					})(e, i, t, r),
				[e, i, t, r],
			),
			setExportOptions: a,
		};
	})(o, i, r);
	const d = {
		...e,
		exportType: o,
		exportOptions: c,
		exportSettings: m,
		setExportOptions: u,
	};
	const A = ((e) => {
		const {
			exportType: t,
			clipCreationRequest: r,
			clipSummary: i,
			closeModal: a,
			exportSettings: o,
		} = e;
		const [l, c] = VI("gamerecording_export_directory");
		const [m, u] = n.useState(
			((e) => {
				const t = kM(e);
				if (t) {
					return `${t}.mp4`;
				} else {
					return `${Localize(
						"#DefaultClipSaveName",
					)}_${Date.now().toLocaleString()}.mp4`;
				}
			})(r.strSuggestedClipName),
		);
		const [d, A] = n.useState(l);
		const p = R7();
		const [g, h] = n.useState(false);
		const [C, _] = VI("gamerecording_export_limit_type");
		const [f, b] = VI("gamerecording_export_limit_width");
		const [y, S] = VI("gamerecording_export_limit_height");
		const [w, B] = VI("gamerecording_export_limit_frame_rate");
		const [v, I] = VI("gamerecording_export_limit_bitrate");
		const [E, M] = VI("gamerecording_export_limit_size_mb");
		const [T, R] = VI("gamerecording_export_codec");
		const [k, D] = n.useState({
			m_bExporting: false,
		});
		const N = ((e, t, r) => {
			const n = I_1({
				queryKey: ["ExportClip", e, t, r],
				queryFn: async () => {
					const e = await pe.xM.ExportClipPreview({
						clip_id: t,
						settings: r,
						run_policy_checks: true,
					});
					return {
						nativePreview: e.Body().toObject(),
						result: e.GetEResult(),
					};
				},
			});
			let i = "#ClipExport_NoFileSizeLimit";
			if (e === 1) {
				i = "#ClipExport_NoNative";
			} else if (e === 2) {
				i = "#ClipExport_NoAdvanced";
			}
			const a = n.data?.result ?? 1;
			const s = a == 1 || Localize(i, a);
			const o = n.data?.nativePreview;
			return {
				eExportPreviewResult: a,
				strPreviewError: s,
				exportPreview: o,
			};
		})(t, i.clip_id, o);
		const F = async () => {
			const e = await (async (e, t) => {
				const r = {
					strTitle: Localize("#ExportClip_Title"),
					bSaveMode: true,
					strInitialFile: t,
					rgFilters: [
						{
							rFilePatterns: ["*.mp4"],
							strFileTypeName: Localize("#ExportClip_MP4_Desc"),
							bUseAsDefault: true,
						},
					],
				};
				if (!Fj(e, "System.OpenFileDialog")) {
					e = window;
				}
				try {
					return await e.SteamClient.System?.OpenFileDialog(r);
				} catch (e) {
					if (e.result == 52) {
						return;
					}
					throw e;
				}
			})(p.ownerWindow, U8([d, m]));
			if (e) {
				O(e);
				h(true);
			}
		};
		const G = async (e, t, n, o) => {
			D({
				m_bExporting: true,
				m_nProgress: 0,
				m_strError: undefined,
			});
			let l = (e) => {
				D((t) => ({
					...t,
					m_nProgress: e,
				}));
			};
			const u = U8([d, m]);
			const A = await Fo(i, undefined, l, u, e, !g);
			sT(r.gameID, 3, r.nClipLengthSeconds, parseInt(i.file_size), A.eResult);
			if (A.eResult != 1) {
				console.error("Failed to export", A.eResult);
				D({
					m_bExporting: false,
					m_nProgress: undefined,
					m_strError: nt(A.eResult, d),
				});
			} else {
				switch (t) {
					case 1: {
						M(n);
						break;
					}
					case 2: {
						b(e.width ?? 0);
						S(e.height ?? 0);
						B(e.frames_per_second ?? 0);
						I(o ?? tt);
						R(e.codec);
					}
				}
				_(t);
				c(d);
				a();
			}
		};
		const O = (e) => {
			u(gO(e));
			A(hF(e));
		};
		return {
			strPath: d,
			strFilename: m,
			promptForExportPath: F,
			onPerformExport: G,
			exportState: k,
			strExportDirectory: l,
			setExportDirectory: c,
			...N,
		};
	})(d);
	return n.createElement(
		"div",
		{
			className: Le.Content,
		},
		n.createElement(
			ve.zW,
			{
				value: o,
				onChange: (e) => l(e),
				classNames: Le.TypeSwitcher,
			},
			Qe.map((e) =>
				n.createElement(
					ve.a,
					{
						value: e,
						key: e,
						color: "",
					},
					((e) => {
						switch (e) {
							case 0: {
								return Localize("#ClipExport_LimitType_Native");
							}
							case 1: {
								return Localize("#ClipExport_LimitType_FileSize");
							}
							case 2: {
								return Localize("#ClipExport_LimitType_Advanced");
							}
							default: {
								return "";
							}
						}
					})(e),
				),
			),
		),
		n.createElement(Ye, {
			...d,
			...A,
		}),
		n.createElement(Ke, {
			...d,
			...A,
		}),
		n.createElement(Xe, {
			exporting: A.exportState.m_bExporting,
			onExport: () => {
				switch (o) {
					case 0: {
						return A.onPerformExport(e.nativePreview.settings, o);
					}
					case 1: {
						const { nCurrentFileSizeIndex: t, nMinFileSizeIndex: r } = c[1];
						const n = ot[t + r];
						return A.onPerformExport(m, o, n);
					}
					case 2: {
						const { nCurrentBitrateIndex: i } = c[2];
						return A.onPerformExport(m, 2, undefined, i);
					}
				}
			},
			closeModal: t,
		}),
	);
}
function Ye(e) {
	const {
		clipCreationRequest: t,
		clipSummary: r,
		nativePreview: i,
		exportPreview: a,
		strFilename: s,
		strPath: o,
		promptForExportPath: l,
	} = e;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(It, {
			clipCreationRequest: t,
			clipSummary: r,
			exportPreview: a,
			nativePreview: i,
		}),
		n.createElement("hr", null),
		n.createElement(
			"div",
			{
				className: Le.PathRow,
			},
			n.createElement(
				"div",
				{
					className: Le.PathAndFile,
				},
				n.createElement(
					"div",
					{
						className: Le.File,
					},
					s,
				),
				n.createElement(
					"div",
					{
						className: Le.Path,
					},
					o,
				),
			),
			n.createElement(
				ve.$n,
				{
					onClick: l,
				},
				n.createElement(Re.vdG, {
					className: Le.DiskIcon,
				}),
			),
		),
		n.createElement("hr", null),
	);
}
function Ke(e) {
	const { exportType: t } = e;
	return n.createElement(
		"div",
		{
			className: Le.ExportFieldsContainer,
		},
		n.createElement(
			He.A,
			null,
			n.createElement(
				Je,
				{
					key: t,
				},
				t === 0 &&
					n.createElement(st, {
						...e,
					}),
				t === 1 &&
					n.createElement(lt, {
						...e,
					}),
				t === 2 &&
					n.createElement(Bt, {
						...e,
					}),
			),
		),
	);
}
function Xe(e) {
	const { exporting: t, closeModal: r, onExport: i } = e;
	return n.createElement(
		ve.wi,
		null,
		n.createElement(ve.CB, {
			strOKText: Localize("#ClipExport_OKButton"),
			onOK: i,
			onCancel: r,
			focusButton: undefined,
			bOKDisabled: t,
			bCancelDisabled: t,
		}),
	);
}
function Je(e) {
	const { children: t, className: r, ...i } = e;
	const a = useRef(undefined);
	return n.createElement(
		je.A,
		{
			appear: true,
			nodeRef: a,
			classNames: $e,
			addEndListener: (e) =>
				a.current.addEventListener("transitionend", e, false),
			...i,
		},
		n.createElement(
			"div",
			{
				ref: a,
				className: A_1(Le.ExportFields, r),
			},
			t,
		),
	);
}
const $e = {
	enter: Le.TransitionEnter,
	exit: Le.TransitionExit,
	enterActive: Le.TransitionEnterActive,
	exitActive: Le.TransitionExitActive,
	enterDone: Le.TransitionEnterDone,
	exitDone: Le.TransitionExitDone,
	appear: Le.TransitionAppear,
	appearActive: Le.TransitionAppearActive,
	appearDone: Le.TransitionAppearDone,
};
function et(e) {
	const { children: t, exportState: r, strPreviewError: i } = e;
	let a = r.m_strError || i;
	return n.createElement(
		n.Fragment,
		null,
		t,
		Boolean(a) &&
			n.createElement(
				"div",
				{
					className: Le.Error,
				},
				a,
			),
		n.createElement(
			Ee.mt,
			{
				active: !!r.m_nProgress,
				onDismiss: undefined,
				className: Le.ProgressDialog,
			},
			n.createElement(
				"div",
				{
					className: Le.Content,
				},
				n.createElement(
					"div",
					{
						className: Le.Description,
					},
					Localize("#ClipExport_ExportProgressDescription"),
				),
				n.createElement(he.z2, {
					nProgress: r.m_nProgress,
				}),
			),
		),
	);
}
const tt = 1;
const rt = 3;
function nt(e, t) {
	switch (e) {
		default:
		case 2: {
			return `${Localize("#ExportClip_Error")} (${e})`;
		}
		case 9: {
			return Localize("#ExportClip_Error_FileNotFound");
		}
		case 15: {
			return Localize("#ExportClip_Error_AccessDenied");
		}
		case 54: {
			return Localize("#ExportClip_Error_DiskFull", t);
		}
	}
}
const it = false;
function at(e) {
	const { nativePreview: t, exportSettings: r, exportPreview: i } = e;
	if (it) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(
				"div",
				{
					className: Le.DebugData,
				},
				JSON.stringify(t, undefined, 3),
			),
			r &&
				n.createElement(
					"div",
					{
						className: Le.DebugData,
					},
					JSON.stringify(r, undefined, 3),
				),
			i &&
				n.createElement(
					"div",
					{
						className: Le.DebugData,
					},
					JSON.stringify(i, undefined, 3),
				),
		);
	} else {
		return null;
	}
}
function st(e) {
	return n.createElement(et, {
		...e,
	});
}
const ot = [2, 5, 10, 25, 35, 50, 100, 250, 500, 1024];
function lt(e) {
	const {
		nativePreview: t,
		exportPreview: r,
		exportOptions: i,
		exportSettings: a,
		setExportOptions: s,
	} = e;
	const { nCurrentFileSizeIndex: o, nMinFileSizeIndex: l } = i[1];
	return n.createElement(
		et,
		{
			...e,
		},
		n.createElement(
			"div",
			{
				className: Le.SliderHeader,
			},
			Localize("#ClipExport_SetLimitHeader"),
		),
		n.createElement(ve.A0, {
			className: Le.Slider,
			value: o,
			notchCount: ot.length - l,
			notchLabels: ot.slice(l).map((e, t) => {
				return {
					label:
						((r = e),
						r < 1024
							? Localize("#ClipExport_FileSizeLimit_MB", r)
							: Localize(
									"#ClipExport_FileSizeLimit_GB",
									(r / 1024).toFixed(0),
								)),
					notchIndex: t,
				};
				var r;
			}),
			min: 0,
			max: ot.length - 1 - l,
			onChange: (e) => {
				s({
					...i,
					1: {
						...i[1],
						nCurrentFileSizeIndex: e,
					},
				});
			},
			renderNotch: vt,
			extraNotchPadding: "20px",
		}),
		n.createElement(at, {
			nativePreview: t,
			exportSettings: a,
			exportPreview: r,
		}),
	);
}
function ct(e, t, r) {
	return {
		strLabel: e,
		nWidth: t,
		nHeight: r,
	};
}
const mt = [
	ct("#ClipExport_720p", 1280, 720),
	ct("#ClipExport_1080p", 1920, 1080),
	ct("#ClipExport_1440p", 2560, 1440),
	ct("#ClipExport_4K", 3840, 2160),
];
const ut = [
	ct("#ClipExport_800p", 1280, 800),
	ct("#ClipExport_1200p", 1920, 1200),
	ct("#ClipExport_1600p", 2560, 1600),
];
function dt(e, t, r) {
	let n = [];
	for (const t of r) {
		if (t.nWidth > e) {
			break;
		}
		n.push({
			...t,
			strLabel: Localize(t.strLabel),
		});
	}
	if (n.length == 0 || n[n.length - 1].nWidth != e) {
		n.push({
			strLabel: `${e}x${t}`,
			nWidth: e,
			nHeight: t,
		});
	}
	return n;
}
function At(e, t, r) {
	switch (e) {
		case 0: {
			return false;
		}
		case 2: {
			return true;
		}
		case 1: {
			return t <= 3840 && r <= 3840;
		}
	}
}
function pt(e, t) {
	return Math.abs(e - t) < 0.01;
}
class gt {
	m_resolutions;
	constructor(e, t, r) {
		const n = e / t;
		if (pt(n, 16 / 9)) {
			this.m_resolutions = dt(e, t, mt);
		} else if (pt(n, 1.6)) {
			this.m_resolutions = dt(e, t, ut);
		} else {
			this.m_resolutions = [];
			let n = [1, 0.75, 0.5, 0.25];
			for (const i of n) {
				const n = Math.round(e * i);
				const a = Math.round(t * i);
				if (n < 640 || a < 360) {
					break;
				}
				if (At(r, n, a)) {
					this.m_resolutions.push({
						strLabel: `${n}x${a}`,
						nWidth: n,
						nHeight: a,
					});
				}
			}
			this.m_resolutions.reverse();
			tG("Using resolutions", this.m_resolutions);
		}
	}
	WidthAndHeightToIndex(e, t) {
		for (let r = 0; r < this.m_resolutions.length; r++) {
			if (
				this.m_resolutions[r].nWidth == e &&
				this.m_resolutions[r].nHeight == t
			) {
				return r;
			}
		}
		return this.m_resolutions.length - 1;
	}
	get notches() {
		return this.m_resolutions.map((e, t) => ({
			label: e.strLabel,
			notchIndex: t,
		}));
	}
	get length() {
		return this.m_resolutions.length;
	}
	res(e) {
		return this.m_resolutions[e];
	}
}
function ht(e, t, r) {
	return {
		nPixelCount: e * t,
		nBitrateKbps: r,
	};
}
let Ct = [
	ht(1280, 720, 7500),
	ht(1920, 1080, 12000),
	ht(2560, 1440, 22000),
	ht(3840, 2160, 38000),
];
function _t(e) {
	if (e < 20000) {
		return Localize("#ClipExport_Bitrate_Mbps", (e / 1000).toFixed(1));
	} else {
		return Localize("#ClipExport_Bitrate_Mbps", (e / 1000).toFixed(0));
	}
}
const ft = 1.25;
const bt = 0.75;
const yt = 0.5;
function St(e, t, r) {
	const n = r < 40 ? 0.75 : 1;
	const i =
		((e) => {
			for (const t of Ct) {
				if (e <= t.nPixelCount) {
					return t.nBitrateKbps;
				}
			}
			return Ct[Ct.length - 1].nBitrateKbps;
		})(t.nWidth * t.nHeight) * n;
	const a = i * ft;
	let s = [
		{
			strLabel: "#ClipExport_Bitrate_Ultra",
			bitrate_kbps: a,
			enabled: true,
			native: false,
		},
		{
			strLabel: "#ClipExport_Bitrate_High",
			bitrate_kbps: i,
			enabled: true,
			native: false,
		},
		{
			strLabel: "#ClipExport_Bitrate_Medium",
			bitrate_kbps: i * bt,
			enabled: true,
			native: false,
		},
		{
			strLabel: "#ClipExport_Bitrate_Low",
			bitrate_kbps: i * yt,
			enabled: true,
			native: false,
		},
	];
	if (a <= e.bitrate_kbps) {
		if (e.width == t.nWidth && e.height == t.nHeight) {
			s[0].bitrate_kbps = e.bitrate_kbps;
			delete s[0].strLabel;
			s[0].native = true;
		}
	} else {
		let t = false;
		for (let r of s) {
			l = r.bitrate_kbps;
			c = e.bitrate_kbps;
			if (Math.abs(l - c) < 100) {
				r.bitrate_kbps = e.bitrate_kbps;
				r.native = true;
			} else if (r.bitrate_kbps > e.bitrate_kbps) {
				r.enabled = false;
			} else if (!t) {
				r.native = true;
				r.bitrate_kbps = e.bitrate_kbps;
				delete r.strLabel;
				t = true;
			}
		}
	}
	var l;
	var c;
	tG("Using bitrates", s);
	return s;
}
function wt() {
	let e = [
		{
			data: 0,
			label: Localize("#ClipExport_DefaultCodec"),
		},
		{
			data: 1,
			label: Localize("#ClipExport_H264"),
		},
	];
	if (!Pr() && !TL()) {
		e.push({
			data: 2,
			label: Localize("#ClipExport_H265"),
		});
	}
	return e;
}
function Bt(e) {
	const {
		nativePreview: t,
		exportPreview: r,
		exportSettings: i,
		exportOptions: a,
		setExportOptions: s,
	} = e;
	const {
		eCurrentCodec: o,
		nCurrentBitrateIndex: l,
		nCurrentFrameRate: c,
		nCurrentResolutionIndex: m,
		resolutions: u,
	} = a[2];
	const d = wt();
	const A = Math.min(m, u.length - 1);
	const p = n.useMemo(() => St(t.settings, u.res(A), c), [t, u, A, c]);
	const g = (e, t) => {
		s({
			...a,
			2: {
				...a[2],
				[e]: t,
			},
		});
	};
	return n.createElement(
		et,
		{
			...e,
		},
		n.createElement(
			"div",
			{
				className: Le.SliderHeader,
			},
			Localize("#ClipExport_SetResolutionHeader"),
		),
		u.length > 1 &&
			n.createElement(ve.A0, {
				className: Le.Slider,
				value: A,
				notchCount: u.length,
				notchLabels: u.notches,
				min: 0,
				max: u.length - 1,
				onChange: (e) => g("nCurrentResolutionIndex", e),
				renderNotch: vt,
				extraNotchPadding: "30px",
			}),
		u.length == 1 &&
			n.createElement("div", null, Localize("#ClipExport_NoResolutionOptions")),
		n.createElement("hr", null),
		n.createElement(
			"div",
			{
				className: Le.SettingRow,
			},
			n.createElement(
				"div",
				{
					className: Le.Label,
				},
				Localize("#ClipExport_FrameRateLabel"),
			),
			n.createElement(ve.ZU, {
				arrowClassName: Le.DropArrow,
				rgOptions: [
					{
						data: 30,
						label: 30,
					},
					{
						data: 60,
						label: 60,
					},
				],
				selectedOption: c,
				onChange: (e) => g("nCurrentFrameRate", e.data),
				strDropDownButtonClassName: Le.Dropdown,
			}),
		),
		n.createElement("hr", null),
		n.createElement(
			"div",
			{
				className: Le.SettingRow,
			},
			n.createElement(
				"div",
				{
					className: Le.Label,
				},
				Localize("#ClipExport_Bitrate_Label"),
			),
			n.createElement(ve.ZU, {
				arrowClassName: Le.DropArrow,
				rgOptions: p.map((e, t) => {
					const r = ((e) => {
						let t;
						t = e.strLabel
							? `${Localize(e.strLabel)} (${_t(e.bitrate_kbps)})`
							: `${_t(e.bitrate_kbps)}`;
						if (e.native) {
							t += ` ${Localize("#ClipExport_Bitrate_Native")}`;
						}
						return t;
					})(e);
					return {
						data: t,
						label: r,
					};
				}),
				selectedOption: l,
				onChange: (e) => g("nCurrentBitrateIndex", e.data),
				strDropDownButtonClassName: Le.Dropdown,
				contextMenuPositionOptions: {
					bGrowToElementWidth: true,
					bMatchWidth: false,
				},
			}),
		),
		n.createElement("hr", null),
		n.createElement(
			"div",
			{
				className: Le.SettingRow,
			},
			n.createElement(
				"div",
				{
					className: Le.Label,
				},
				Localize("#ClipExport_CodecLabel"),
			),
			n.createElement(ve.ZU, {
				arrowClassName: Le.DropArrow,
				rgOptions: d,
				selectedOption: o,
				onChange: (e) => g("eCurrentCodec", e.data),
				strDropDownButtonClassName: Le.Dropdown,
			}),
		),
		n.createElement(at, {
			nativePreview: t,
			exportSettings: i,
			exportPreview: r,
		}),
	);
}
function vt(e) {
	const { alignLeftEnd: t, alignRightEnd: r, active: i } = e;
	return n.createElement(
		n.Fragment,
		null,
		e.notchTicksVisible &&
			n.createElement("div", {
				className: A_1(Le.ResolutionNotchTick, i && Le.TickActive),
			}),
		e.notchLabel &&
			n.createElement(
				"div",
				{
					className: A_1(
						Le.ResolutionNotchLabel,
						t && Le.AlignToLeft,
						r && Le.AlignToRight,
					),
				},
				e.notchLabel?.label,
			),
	);
}
function It(e) {
	const {
		clipCreationRequest: t,
		clipSummary: r,
		exportPreview: i,
		nativePreview: a,
	} = e;
	const s = i
		? {
				...a,
				...i,
			}
		: a;
	const o = {
		...a.settings,
		...s.settings,
	};
	let l = "";
	switch (o.codec) {
		case 1: {
			l = Localize("#ClipExport_H264");
			break;
		}
		case 2: {
			l = Localize("#ClipExport_H265");
		}
	}
	const c = (parseInt(s.estimated_size) ?? 0) / 1048576;
	return n.createElement(
		"div",
		{
			className: Le.ExportPreview,
		},
		n.createElement(ze.d, {
			clipSummary: r,
			className: Le.Thumbnail,
		}),
		n.createElement(
			"div",
			{
				className: Le.DetailsAndFilename,
			},
			n.createElement(
				"div",
				{
					className: Le.Details,
				},
				n.createElement(
					"div",
					{
						className: Le.DetailBlock,
					},
					n.createElement(
						"div",
						{
							className: Le.Header,
						},
						Localize("#ClipExport_Preview_Length"),
					),
					n.createElement(
						"div",
						{
							className: Le.Primary,
						},
						(0, qZ)(t.nClipLengthSeconds, false, false),
					),
					n.createElement("div", null, o.width, "x", o.height),
					o.frames_per_second &&
						o.frames_per_second <= 1000 &&
						n.createElement("div", null, o.frames_per_second, "fps"),
				),
				n.createElement(
					"div",
					{
						className: Le.DetailBlock,
					},
					n.createElement(
						"div",
						{
							className: Le.Header,
						},
						Localize("#ClipExport_Preview_Size"),
					),
					n.createElement(
						"div",
						{
							className: Le.Primary,
						},
						Localize("#ClipExport_FileSizeLimit_MB", c.toFixed(2)),
					),
					n.createElement("div", null, l),
					n.createElement("div", null, _t(o?.bitrate_kbps)),
				),
			),
		),
	);
}
export function IP(e) {
	const { children: t, ...r } = e;
	const i = ((e) => {
		const t = yZ();
		return n.useCallback(
			(r, i) => {
				const a = {
					bOverlapHorizontal: true,
				};
				if (BElementFullscreen(i)) {
					a.bDisableMouseOverlay = true;
					a.bAlwaysOnTop = true;
					a.bPreferPopTop = true;
					a.bForcePopup = true;
				}
				lX(
					n.createElement(
						l.m,
						{
							...e,
						},
						n.createElement(
							Ce.Zz,
							{
								showConfirmationOverride: t,
							},
							n.createElement(kt, {
								key: Date.now(),
								clipCreationRequest: r,
								onNavigateToClip: e.onNavigateToClip,
								summoningElement: i,
								showConfirmation: t,
							}),
						),
					),
					i,
					a,
				);
			},
			[t, e],
		);
	})(r);
	return n.createElement(
		l.m,
		{
			...r,
		},
		n.createElement(
			a.x,
			{
				onSaveOrShareClipRequested: i,
			},
			t,
		),
	);
}
function kt(e) {
	const {
		clipCreationRequest: t,
		showConfirmation: r,
		children: i,
		onNavigateToClip: a,
		...o
	} = e;
	const { summoningElement: c } = o;
	const {
		rgTopOptions: m,
		rgBottomOptions: u,
		sendToChat: d,
		chatSendForbiddenMessage: A,
	} = ((e, t, r, i) => {
		const {
			copyToClipboard: a,
			saveToFile: o,
			openFileLocation: c,
			sendToChat: m,
			createFileLink: u,
			sendToPhone: d,
			bAlreadySaved: A,
		} = ((e, t, r) => {
			const [i, a] = n.useState(false);
			const o = aQ(e, Ft * 1024 * 1024);
			const c = aQ(e, Gt * 1024 * 1024);
			const m = Dt();
			const { onShowProgressBar: u, onShowError: d } = f_1();
			const A = (() => {
				const e = R7();
				return async (t, r, i) => {
					if (r.eResult == 1) {
						pg(
							n.createElement(jt, {
								clipCreationRequest: t,
								onExportClipToFit: r.fnExportClipToFit,
							}),
							e.ownerWindow,
						);
					} else {
						console.warn("Unable to send to phone", r.eResult);
					}
				};
			})();
			const p = k5();
			const g = R7();
			let h;
			if (t) {
				const e = t.getBoundingClientRect();
				h = {
					clientX: e.x,
					clientY: e.y,
				};
			}
			const C = async (t) => {
				u(
					async (t) => {
						const r = Q1(e, {
							browserContext: g,
						});
						if (t) {
							t(1);
						}
						const n = await r(t);
						sT(e.gameID, 2, e.nClipLengthSeconds, n.file?.size ?? 0, n.eResult);
						if (n.eResult != 1) {
							console.error("CopyToClipboard failed in clip save", n.eResult);
							return {
								eResult: n.eResult,
							};
						} else {
							SteamClient.System.CopyFilesToClipboard([n.strExportPath]);
							return {
								eResult: 1,
								strTitle: Localize("#ExportClip_CopyClipboard_Complete_Title"),
							};
						}
					},
					Localize("#ExportClip_CopyClipboard_Title"),
					h,
				);
			};
			const _ = async () => {
				pg(
					n.createElement(qe, {
						clipCreationRequest: e,
					}),
					g.ownerWindow,
				);
			};
			const f = async (t) => {
				if (o.eResult == 1) {
					GJ(
						o.fnExportClipToFit,
						t,
						p,
						e.nClipLengthSeconds,
						e.gameID,
						e.strSuggestedClipName,
					);
				}
			};
			const b = async () => {
				const t = await e.create(true);
				if (t.result == 1) {
					e.cleanup();
				} else {
					console.error("CopyToClipboard failed in clip save", t.result);
				}
			};
			const y = () => m(e, o, t);
			const S = () => A(e, c, t);
			return {
				copyToClipboard: C,
				saveToFile: _,
				openFileLocation: b,
				sendToChat: f,
				createFileLink: y,
				sendToPhone: S,
				bAlreadySaved: i,
			};
		})(e, t);
		const {
			saveNewClip: p,
			sendClip: g,
			showReplaceClipConfirmation: h,
		} = ((e, t) => {
			const r = R7();
			const i = async () => {
				const t = await e.create(true);
				if (t.result != 1) {
					return;
				}
				const i = t.clipSummary.clip_id;
				const a = (async (e) => {
					const t = await pe.xM.ZipClip({
						clip_id: e,
					});
					if (t.GetEResult() != 1) {
						return null;
					} else {
						return t.Body().zip_path();
					}
				})(i);
				pg(
					n.createElement(Vt, {
						handle: i,
						zipResult: a,
						clipCreationRequest: e,
					}),
					r.ownerWindow,
					{
						bNeverPopOut: true,
					},
				);
			};
			const a = async () => {
				const r = await e.create(false);
				sT(e.gameID, 5, Number(r.clipSummary.duration_ms) / 1000, 0, r.result);
				if (r.result == 1 && t) {
					t(r.clipSummary.clip_id);
				}
			};
			const o = async () => {
				const { fnDeleteClip: r } = Gb();
				if (!e.strSrcClipID || !r) {
					return;
				}
				const n = await e.create(false);
				sT(e.gameID, 5, Number(n.clipSummary.duration_ms) / 1000, 0, n.result);
				if (n.result == 1) {
					await r(e.strSrcClipID);
					if (t) {
						t(n.clipSummary.clip_id, {
							bReplaceRoute: true,
						});
					}
				}
			};
			const l = async () => {
				pg(
					n.createElement(Ee.o0, {
						className: Pe.ReplaceConfirmationDialog,
						strTitle: Localize("#Clip_ReplaceWarning_Title"),
						strDescription: Localize("#Clip_ReplaceWarning_Description"),
						onOK: o,
					}),
					r.ownerWindow,
					{
						bNeverPopOut: true,
					},
				);
			};
			return {
				sendClip: i,
				saveNewClip: a,
				showReplaceClipConfirmation: l,
			};
		})(e, i);
		const C = hf();
		const _ = Y2();
		const f = Pp();
		const { strSave: b, strSaveNew: y } = ((e, t) => {
			if (e?.strSrcClipID) {
				return {
					strSaveNew: Localize("#ShareClip_SaveNewClip"),
					strSave: Localize("#ShareClip_SaveClip"),
				};
			} else {
				return {
					strSaveNew: t
						? n.createElement(
								"span",
								{
									className: "SaveClipSpan",
								},
								Localize("#ShareClip_SaveToRecordings"),
							)
						: Localize("#ShareClip_SaveToRecordings_BPM"),
				};
			}
		})(e, C);
		const S =
			e?.nClipLengthSeconds > Ot
				? Localize(
						"#SendToChat_ClipTooLong",
						LocalizeTimeRemaining(Math.round(e.nClipLengthSeconds)),
						Ot,
					)
				: undefined;
		const w = T_1(e.gameID.GetAppID());
		const B =
			w && w.bDisableUserMediaUpload
				? Localize("#ShareSheet_ClipUploadNotAllowed")
				: undefined;
		const v = f ? Localize("#ShareSheet_LimitedClipNotAllowed") : undefined;
		const I = [
			!e.bExistingClip &&
				b && {
					key: "save",
					onSelected: h,
					icon: n.createElement(Ie.Download, null),
					label: b,
				},
			!e.bExistingClip && {
				key: "saveas",
				onSelected: p,
				icon: n.createElement(Ie.SaveDownloadNew, null),
				label: y,
			},
			C &&
				!A && {
					key: "savetofile",
					onSelected: o,
					icon: n.createElement(Ie.Video, null),
					label: Localize("#ExportClip_Export"),
				},
			C &&
				A && {
					key: "openfile",
					onSelected: c,
					icon: n.createElement(Re.vdG, null),
					label: Localize("#ExportClip_OpenFolder"),
				},
		].filter(Boolean);
		const E = [
			C && {
				key: "clipboard",
				onSelected: a,
				icon: n.createElement(Ie.Copy, null),
				label: Localize("#ExportClip_CopyClipboard"),
			},
			!_ && {
				key: "send",
				onSelected: g,
				icon: n.createElement(Ie.Envelope, null),
				label: Localize("#ExportClip_SendClip"),
				disabled: B || v,
			},
			!_ && {
				key: "sendmobile",
				onSelected: d,
				icon: n.createElement(Ie.Mobile, null),
				label: Localize("#ExportClip_SendToPhone"),
				disabled: !!S || B || B || v,
			},
			!_ && {
				key: "link",
				onSelected: u,
				icon: n.createElement(Ie.Hyperlink, null),
				label: Localize(
					C ? "#CreateLink_Button" : "#CreateLink_Button_Gamepad",
				),
				disabled: !!S || B || B || v,
			},
		].filter(Boolean);
		return {
			rgTopOptions: I,
			rgBottomOptions: E,
			sendToChat: m,
			strLargeClipWarning: S,
			chatSendForbiddenMessage: S
				? {
						strMessage: S,
						bHeader: true,
					}
				: B || v,
		};
	})(t, c, 0, a);
	if (t) {
		return n.createElement(
			Oe.zu,
			{
				...o,
				onSendToChat: d,
				chatSendForbiddenMessage: A,
			},
			m.length > 0 &&
				n.createElement(
					"div",
					{
						className: A_1(Pe.SectionTitle, Pe.FirstSectionTitle),
					},
					Localize("#ShareClip_Save"),
				),
			n.createElement(Oe.t$, {
				options: m,
			}),
			m.length > 0 && n.createElement(Oe.sL, null),
			u.length > 0 &&
				n.createElement(
					"div",
					{
						className: Pe.SectionTitle,
					},
					Localize("#ShareClip"),
				),
			n.createElement(Oe.t$, {
				options: u,
			}),
			i,
		);
	} else {
		return null;
	}
}
function Dt() {
	const e = yZ();
	const t = R7();
	return async (r, i, a) => {
		if (i.eResult != 1) {
			console.warn("Unable to create link", i.eResult);
			return;
		}
		const s = Pt({
			dataToUpload: i.fnExportClipToFit,
			eBucket: 1,
			eMediaType: 1,
			gameID: r.gameID,
			clipLength: r.nClipLengthSeconds,
		});
		pg(
			n.createElement(Lt, {
				clipCreationRequest: r,
				showConfirmation: e,
				uploadInProgress: s,
			}),
			t.ownerWindow,
		);
	};
}
async function Nt(e, t, r, n, i, a) {
	let o;
	if (typeof e != "function") {
		o = await e;
	}
	try {
		if (o) {
			if (r == 2) {
				await a.SetOtherFileToUpload(o);
			} else {
				await a.SetImageFileToUpload(o);
			}
		} else {
			await a.StartFileExportToUpload(e);
		}
		const i = await a.BeginFileUpload();
		let l;
		let c;
		switch (r) {
			case 2: {
				l = 4;
				break;
			}
			case 3:
			case 1: {
				l = 6;
				break;
			}
			default: {
				w_1(false, `Invalid temp cloud bucket ${r} for share action`);
			}
		}
		if (l) {
			sT(t, l, n, a.file.size, i.ok ? 1 : 2);
		}
		if (i.ok) {
			c = await i.json();
		}
		return {
			strPublicURL: c?.url,
			file: o,
		};
	} catch (e) {
		return {
			strError: a.file_upload_props.strErrorDescription || e,
			file: o,
		};
	}
}
const Ft = 30;
const Gt = 100;
const Ot = 60;
function Pt({
	dataToUpload: e,
	eBucket: t,
	gameID: r,
	clipLength: n,
	strClientID: i,
	strMachineName: a,
	eMediaType: s,
}) {
	if (!e) {
		return null;
	}
	const l = new Be.i6({
		PopulateBeginFileUploadFormData: () => {},
		PopulateCommitFileUploadFormData: (e) => {
			e.append("bucket", `${t}`);
			e.append("media_type", `${s}`);
			if (i) {
				e.append("client_id", i);
			}
			if (r) {
				e.append("content_game_id", r.ConvertTo64BitString());
			}
			if (n) {
				e.append("duration_seconds", n.toFixed(0));
			}
			e.append("machine_name", a);
		},
		GetBeginFileUploadURL: () =>
			`${Ge.TS.COMMUNITY_BASE_URL}tempcloud/beginfileupload/`,
		GetCommitFileUploadURL: () =>
			`${Ge.TS.COMMUNITY_BASE_URL}tempcloud/commitfileupload/`,
		LogFileUploadMessage: (e) => {
			tG(e);
		},
		GetMaxFileSizeMB: () => {
			switch (t) {
				default:
				case 1: {
					return Ft;
				}
				case 3:
				case 2: {
					return Gt;
				}
			}
		},
		GetFileNameOverride: () => Localize("#ClipUpload_Filename"),
	});
	return {
		fileUpload: l,
		result: Nt(e, r, t, n, 0, l),
	};
}
function Lt(e) {
	const {
		closeModal: t,
		clipCreationRequest: r,
		showConfirmation: i,
		uploadInProgress: a,
	} = e;
	const [s, o] = n.useState();
	const l = n.useRef(undefined);
	const [c, m] = n.useState();
	const u = R7();
	const [d, A] = n.useState();
	const [p, g] = q3(() => [
		a?.fileUpload.file_upload_props.eUploadState,
		a?.fileUpload.file_upload_props.uploadProgress,
	]);
	const h = Qn();
	const [C, _] = n.useState(h);
	n.useEffect(() => {
		if (a) {
			a.result.then((e) => {
				if (e.strError) {
					m(e.strError);
				} else {
					o(e.strPublicURL);
				}
				A(e.file);
			});
		}
	}, [a]);
	const f = p === 2 || p === 7;
	const b = Math.ceil((d?.size || 0) / 1048576).toFixed(0);
	return n.createElement(
		Ee.eV,
		{
			closeModal: t,
			className: Pe.CreateLinkDialog,
		},
		n.createElement(ve.Y9, null, " ", Localize("#CreateLink_Title"), " "),
		n.createElement(
			"div",
			{
				className: Pe.Content,
			},
			n.createElement(
				"div",
				{
					className: Pe.Description,
				},
				Localize("#CreateLink_Description"),
			),
			c &&
				n.createElement(
					"div",
					{
						className: Pe.Error,
					},
					Localize("#CreateLink_Error", c),
				),
			p == 4
				? n.createElement(
						"div",
						{
							className: Pe.FileTooLargeHelp,
						},
						Localize("#CreateLink_FileTooLarge", b),
					)
				: n.createElement(
						n.Fragment,
						null,
						!h &&
							s &&
							n.createElement(
								"div",
								{
									className: Pe.InputRow,
								},
								n.createElement(
									ve.$n,
									{
										className: Pe.CopyButton,
										disabled: !s,
										onClick: (e) => {
											u?.ownerWindow?.navigator.clipboard.writeText(s);
											i(e, Localize("#Browser_URLCopied"));
										},
									},
									Localize("#CreateLink_CopyToClipboard"),
								),
								n.createElement("input", {
									type: "text",
									value: s ?? "",
									readOnly: true,
									ref: l,
								}),
							),
						f &&
							n.createElement(he.z2, {
								nProgress: g,
							}),
						s &&
							!C &&
							n.createElement(
								n.Fragment,
								null,
								n.createElement(
									ve.$n,
									{
										onClick: () => _(true),
									},
									Localize("#CreateLink_ShowQRCode"),
								),
								n.createElement(
									"div",
									{
										className: Pe.Description,
									},
									Localize("#CreateLink_QRCodePrompt"),
								),
							),
						s &&
							C &&
							n.createElement(
								n.Fragment,
								null,
								n.createElement(
									"div",
									{
										className: Pe.QRContainer,
									},
									n.createElement(
										Te.rg,
										{
											borderWidth: 5,
											activeBitColor: "#212328",
											inactiveBitColor: "white",
											className: Pe.QRCode,
											typeNumber: 12,
										},
										s,
									),
								),
								n.createElement(
									"div",
									{
										className: A_1(Pe.Description, Pe.TopPadding),
									},
									Localize("#CreateLink_QRCodeDescription"),
								),
							),
					),
		),
		n.createElement(
			ve.wi,
			null,
			n.createElement(
				ve.jn,
				{
					onClick: t,
					autoFocus: true,
				},
				Localize("#Button_Done"),
			),
		),
	);
}
const zt = false;
function xt(e) {
	const { clientDetails: t } = e;
	return n.createElement(
		"div",
		{
			className: Pe.ClientDetails,
		},
		n.createElement(Ut, {
			...e,
		}),
		n.createElement(
			"div",
			{
				className: Pe.Name,
			},
			t.device_details.device_friendly_name,
		),
		n.createElement(Wt, {
			...e,
		}),
	);
}
function Ut(e) {
	const { clientDetails: t } = e;
	switch (t.device_details.gaming_device_type) {
		default:
		case i.zm.k_EGamingDeviceType_StandardPC: {
			const e = ((e) => {
				switch (e) {
					case 0: {
						return "Windows";
					}
					case 1: {
						return "Windows 3.11";
					}
					case 2: {
						return "Windows 95";
					}
					case 3: {
						return "Windows 98";
					}
					case 4: {
						return "Windows ME";
					}
					case 5: {
						return "Windows NT";
					}
					case 6: {
						return "Windows 2000";
					}
					case 7: {
						return "Windows XP";
					}
					case 8: {
						return "Windows 2003";
					}
					case 9: {
						return "Windows Vista";
					}
					case 10: {
						return "Windows 7";
					}
					case 11: {
						return "Windows 2008";
					}
					case 12: {
						return "Windows 2012";
					}
					case 15: {
						return "Windows 2012 R2";
					}
					case 13: {
						return "Windows 8";
					}
					case 14: {
						return "Windows 8.1";
					}
					case 16: {
						return "Windows 10";
					}
					case 17: {
						return "Windows 2016";
					}
					case 18: {
						return "Windows 2019";
					}
					case 19: {
						return "Windows 2022";
					}
					case 20: {
						return "Windows 11";
					}
					case -102: {
						return "Mac OS";
					}
					case -101: {
						return "MacOS 10.4";
					}
					case -100: {
						return "MacOS 10.5";
					}
					case -99: {
						return "MacOS 10.5.8";
					}
					case -95: {
						return "MacOS 10.6";
					}
					case -94: {
						return "MacOS 10.6.3";
					}
					case -93: {
						return "MacOS 10.6.4 with Apple's Snow Leopard Graphics Update";
					}
					case -92: {
						return "MacOS 10.6.7";
					}
					case -90: {
						return "MacOS 10.7";
					}
					case -89: {
						return "MacOS 10.8";
					}
					case -88: {
						return "MacOS 10.9";
					}
					case -87: {
						return "MacOS 10.10";
					}
					case -86: {
						return "MacOS 10.11";
					}
					case -85: {
						return "MacOS 10.12";
					}
					case -84: {
						return "MacOS 10.13";
					}
					case -83: {
						return "MacOS 10.14";
					}
					case -82: {
						return "MacOS 10.15";
					}
					case -81: {
						return "MacOS 11 (as 10.16)";
					}
					case -75: {
						return "MacOS 12 (as 10.17)";
					}
					case -70: {
						return "MacOS 13 (as 10.18)";
					}
					case -80: {
						return "MacOS 11";
					}
					case -79: {
						return "MacOS 11.1";
					}
					case -74: {
						return "MacOS 12";
					}
					case -69: {
						return "MacOS 13";
					}
					case -68: {
						return "MacOS 14";
					}
					case -67: {
						return "MacOS 15";
					}
					case -203: {
						return "Linux";
					}
					case -202: {
						return "Linux 2.2";
					}
					case -201: {
						return "Linux 2.4";
					}
					case -200: {
						return "Linux 2.6";
					}
					case -199: {
						return "Linux 3.2";
					}
					case -198: {
						return "Linux 3.5";
					}
					case -197: {
						return "Linux 3.6";
					}
					case -196: {
						return "Linux 3.10";
					}
					case -195: {
						return "Linux 3.16";
					}
					case -194: {
						return "Linux 3.18";
					}
					case -193: {
						return "Linux 3.x";
					}
					case -191: {
						return "Linux 4.1";
					}
					case -190: {
						return "Linux 4.4";
					}
					case -189: {
						return "Linux 4.9";
					}
					case -188: {
						return "Linux 4.14";
					}
					case -187: {
						return "Linux 4.19";
					}
					case -192: {
						return "Linux 4.x";
					}
					case -186: {
						return "Linux 5.x";
					}
					case -185: {
						return "Linux 5.4";
					}
					case -184: {
						return "Linux 6.x";
					}
					case -183: {
						return "Linux 7.x";
					}
					case -182: {
						return "Linux 5.10";
					}
					case -300: {
						return "PS3";
					}
					case -700: {
						return "Web Client";
					}
					case -500: {
						return "Android";
					}
					case -499: {
						return "Android 6.x";
					}
					case -498: {
						return "Android 7.x";
					}
					case -497: {
						return "Android 8.x";
					}
					case -496: {
						return "Android 9.x";
					}
					case -600: {
						return "iOS";
					}
					case -599: {
						return "iOS 1";
					}
					case -598: {
						return "iOS 2";
					}
					case -597: {
						return "iOS 3";
					}
					case -596: {
						return "iOS 4";
					}
					case -595: {
						return "iOS 5";
					}
					case -594: {
						return "iOS 6";
					}
					case -593: {
						return "iOS 6.1";
					}
					case -592: {
						return "iOS 7";
					}
					case -591: {
						return "iOS 7.1";
					}
					case -590: {
						return "iOS 8";
					}
					case -589: {
						return "iOS 8.1";
					}
					case -588: {
						return "iOS 8.2";
					}
					case -587: {
						return "iOS 8.3";
					}
					case -586: {
						return "iOS 8.4";
					}
					case -585: {
						return "iOS 9";
					}
					case -584: {
						return "iOS 9.1";
					}
					case -583: {
						return "iOS 9.2";
					}
					case -582: {
						return "iOS 9_.3";
					}
					case -581: {
						return "iOS 10";
					}
					case -580: {
						return "iOS 10.1";
					}
					case -579: {
						return "iOS 10.2";
					}
					case -578: {
						return "iOS 10.3";
					}
					case -577: {
						return "iOS 11";
					}
					case -576: {
						return "iOS 11.1";
					}
					case -575: {
						return "iOS 11.2";
					}
					case -574: {
						return "iOS 11.3";
					}
					case -573: {
						return "iOS 11.4";
					}
					case -572: {
						return "iOS 12";
					}
					case -571: {
						return "iOS 12.1";
					}
					default: {
						return "Unknown";
					}
				}
			})(t.device_details.os_type);
			if (e.includes("Windows")) {
				return n.createElement(Re.eJJ, {
					className: Pe.PlatformIcon,
					height: "22px",
				});
			} else if (e.includes("Mac")) {
				return n.createElement(Re.kPc, {
					className: Pe.PlatformIcon,
				});
			} else if (e.includes("Linux")) {
				return n.createElement(Re.QcV, {
					className: Pe.PlatformIcon,
				});
			} else {
				return n.createElement(Ie.SteamLogo, {
					className: Pe.PlatformIcon,
					height: "22px",
				});
			}
		}
		case i.zm.k_EGamingDeviceType_SteamDeck: {
			return n.createElement(Ie.DeckLogo, {
				className: Pe.PlatformIcon,
				height: "22px",
			});
		}
	}
}
function Wt(e) {
	const { clientDetails: t } = e;
	if (!t.city || !t.last_seen) {
		return null;
	}
	const r = [
		e.clientDetails.city,
		e.clientDetails.state,
		e.clientDetails.country,
	]
		.filter((e) => e)
		.join(", ");
	return n.createElement(
		"div",
		{
			className: A_1(t.is_online && Pe.Online, Pe.LastSeen),
		},
		n.createElement(
			"div",
			{
				className: Pe.Location,
			},
			r,
		),
		n.createElement(
			"div",
			{
				className: Pe.Time,
			},
			t.is_online
				? Localize("#SendClip_Online")
				: (0, Nm)(parseInt(t.last_seen)),
		),
	);
}
function Vt(e) {
	const {
		closeModal: t,
		zipResult: r,
		onCancel: i,
		clipCreationRequest: a,
		handle: o,
	} = e;
	const [l, c] = n.useState();
	const m = n.useRef(undefined);
	const { filePromise: u } = Dp(r, m.current);
	const [d, A] = n.useState(false);
	const p = (() => {
		const e = KV();
		return I_1({
			queryKey: ["targetclients"],
			queryFn: async () => {
				const t = await ue.GetRecentClients(e, {});
				if (!t.BSuccess()) {
					throw new Error(t.GetErrorMessage());
				}
				const r = await SteamClient.RemotePlay.GetClientID();
				return (t.Body().toObject().clients ?? [])
					.filter((e) => zt || e.remote_client_id != r)
					.map((e) => ({
						label: n.createElement(xt, {
							clientDetails: e,
						}),

						data: e,
					}));
			},
		}).data;
	})();
	const [g, h] = n.useState();
	const [C, _] = n.useState();
	const f = uX(o);
	const b = async () => {
		const e = g || p[0].data;
		const t = Pt({
			dataToUpload: u,
			eBucket: 2,
			eMediaType: 1,
			gameID: a.gameID,
			clipLength: a.nClipLengthSeconds,
			strClientID: e.remote_client_id,
		});
		_(t);
		const r = await t.result;
		if (r.strError) {
			c(r.strError);
		} else {
			A(true);
		}
		_(undefined);
	};
	const y = () => {
		if (i) {
			i();
		}
		t();
	};
	const S = Math.ceil(parseInt(f?.file_size || "0") / 1048576);
	let w;
	let B;
	let v = y;
	let I = "";
	let E = Pe.Normal;
	let M = false;
	let T = false;
	let R = true;
	if (p?.length == 0) {
		I = Localize("#SendClip_NoClients2");
		E = A_1(Pe.DescriptionWarning, Pe.TopPadding);
		M = true;
		R = false;
	} else if (f && S > Gt) {
		E = Pe.Error;
		I = Localize("#SendClip_FileTooLarge", S.toFixed(0), Gt);
		M = true;
	} else if (l) {
		w = Localize("#Button_Close");
		I = l;
		E = Pe.Error;
	} else if (C || d) {
		if (C) {
			w = Localize("#Button_Cancel");
			I = Localize("#SendClip_Uploading");
			T = true;
		} else {
			w = Localize("#Button_Close");
			I = n.createElement(
				"div",
				{
					className: A_1(Pe.DialogBodyText, Pe.Success, Pe.ResultMessage, E),
				},
				n.createElement(Ie.Checkmark, {
					className: Pe.Checkmark,
				}),
				Localize("#SendClip_Finished"),
			);
			B = t;
			T = true;
		}
	} else {
		w = Localize("#SendClip_Upload");
		if (p?.length) {
			B = b;
		} else {
			M = true;
		}
	}
	return n.createElement(
		Ee.eV,
		{
			closeModal: y,
			className: Pe.SendClipDialog,
		},
		n.createElement(ve.Y9, null, " ", Localize("#SendClip_Title"), " "),
		n.createElement("div", {
			ref: m,
		}),
		n.createElement(
			"div",
			{
				className: Pe.Content,
			},
			n.createElement(
				"div",
				{
					className: Pe.Description,
				},
				Localize("#SendClip_Description3"),
			),
			R &&
				n.createElement(
					n.Fragment,
					null,
					!!p?.length &&
						n.createElement(ve.ZU, {
							strDropDownButtonClassName: Pe.DropDown,
							rgOptions: p,
							onChange: (e) => h(e?.data),
							selectedOption: g || p[0].data,
							strDefaultLabel: Localize("#SendClip_SelectTarget"),
						}),
				),
			n.createElement(
				"div",
				{
					className: E,
				},
				I,
			),
			C &&
				n.createElement(Zt, {
					upload: C.fileUpload,
				}),
		),
		n.createElement(
			ve.wi,
			null,
			!T &&
				n.createElement(ve.CB, {
					onCancel: y,
					bCancelDisabled: !v,
					strCancelText: Localize("#Button_Cancel"),
					onOK: B,
					bOKDisabled: M,
					strOKText: w,
					focusButton: "primary",
				}),
			T &&
				n.createElement(
					ve.jn,
					{
						autoFocus: true,
						onClick: B,
					},
					w,
				),
		),
	);
}
const Ht = "3.9.0";
function jt(e) {
	const { clipCreationRequest: t, onExportClipToFit: r, ...i } = e;
	const a = aQ(t, Ft * 1024 * 1024);
	const [s, o] = n.useState(0);
	const l = Dt();
	return n.createElement(Or, {
		...i,
		onSendToPhone: async ({ setError: e, performUpload: n }) => {
			let i = "";
			try {
				i = await SteamClient.Auth.GetLocalHostname();
			} catch (e) {
				console.error("Couldn't determine local hostname", e);
			}
			const a = await r((e) => {
				o(e);
			});
			if (a.eResult == 1) {
				await n({
					dataToUpload: a.file,
					eBucket: 3,
					eMediaType: 1,
					gameID: t.gameID,
					clipLength: t.nClipLengthSeconds,
					strMachineName: i,
				});
				o(0);
			} else {
				e("");
			}
		},
		onShowCreateLink: (e) => l(t, a, e.currentTarget),
		minAppVersion: Ht,
		exportProgress: s,
	});
}
export function Or(e) {
	const {
		closeModal: t,
		onCancel: r,
		onSendToPhone: i,
		onShowCreateLink: a,
		minAppVersion: s,
		exportProgress: o,
	} = e;
	const [l, m] = n.useState();
	const u = n.useRef(undefined);
	const [d, A] = n.useState(false);
	const [p, g] = n.useState();
	const h = KV();
	const C = I_1({
		queryKey: ["userhasphone"],
		queryFn: async () => {
			const e = c.w.Init(b);
			e.Body().set_push_enabled_only(true);
			e.Body().set_app_type(0);
			e.Body().set_minimum_version(s);
			const t = await M.HasMobileDevice(h, e);
			if (t.GetEResult() != 1) {
				throw t.GetErrorMessage();
			}
			return {
				bFoundDevice: t.Body().found_device(),
				bUpToDate: t.Body().up_to_date(),
			};
		},
	});
	const _ = bG("Mobile");
	const f = () =>
		i({
			setError: m,
			performUpload: async (...e) => {
				const t = Pt(...e);
				g(t);
				const r = await t.result;
				if (r.strError) {
					m(r.strError);
				} else {
					A(true);
				}
				g(undefined);
			},
		});
	const y = () => {
		if (r) {
			r();
		}
		t();
	};
	let S;
	let w;
	let B = y;
	let v = "";
	let I = Pe.Normal;
	let E = false;
	let T = false;
	let R = false;
	if (C.isError) {
		v = Localize("#SendToPhone_CantRequestDevice", C.error.toString());
		I = Pe.Error;
		E = true;
	} else if (C.isLoading) {
		v = Localize("#SendToPhone_LoadingPhone");
		I = Pe.Description;
		E = true;
	} else if (C.data.bFoundDevice && !C.data.bUpToDate) {
		v = Localize("#SendToPhone_Update", s);
		I = Pe.DescriptionWarning;
		E = true;
	} else if (C.data.bFoundDevice) {
		if (l) {
			S = Localize("#Button_Close");
			v = l;
			I = Pe.Error;
		} else if (p || d || d || o) {
			if (!p && o) {
				S = Localize("#Button_Cancel");
				v = Localize("#SendToPhone_Exporting");
				R = true;
			} else if (p) {
				S = Localize("#Button_Cancel");
				v = Localize("#SendToPhone_Uploading");
				R = true;
			} else {
				S = Localize("#Button_Close");
				v = n.createElement(
					"div",
					{
						className: A_1(Pe.DialogBodyText, Pe.Success, Pe.ResultMessage, I),
					},
					n.createElement(Ie.Checkmark, {
						className: Pe.Checkmark,
					}),
					Localize("#SendToPhone_Finished"),
				);
				w = t;
				R = true;
			}
		} else {
			S = Localize("#SendToPhone_Upload");
			w = f;
		}
	} else {
		v = Localize("#SendToPhone_NoPhone");
		I = Pe.DescriptionWarning;
		E = true;
		T = true;
	}
	return n.createElement(
		Ee.eV,
		{
			closeModal: y,
			className: Pe.SendClipDialog,
		},
		n.createElement(ve.Y9, null, " ", Localize("#SendToPhone_Title"), " "),
		n.createElement("div", {
			ref: u,
		}),
		n.createElement(
			"div",
			{
				className: Pe.Content,
			},
			n.createElement(
				"div",
				{
					className: A_1(Pe.Description, Pe.TopPadding),
				},
				Localize("#SendToPhone_Description"),
			),
			a &&
				n.createElement(
					"div",
					{
						className: Pe.DescriptionSmall,
					},
					LocalizeInlineReactWithFallback(
						"#SendToPhone_DescriptionMobileQR",
						n.createElement(Qt, {
							onClick: (e) => {
								t();
								a(e);
							},
						}),
					),
				),
			n.createElement(
				"div",
				{
					className: I,
				},
				v,
			),
			T &&
				n.createElement(
					"div",
					{
						className: A_1(Pe.DescriptionSmall, Pe.TopPadding),
					},
					" ",
					LocalizeInlineReactWithFallback(
						"#SendToPhone_DescriptionMobile",
						n.createElement(Qt, {
							onClick: () => _(),
						}),
					),
				),
			(!!p || !!o) &&
				n.createElement(Zt, {
					upload: p?.fileUpload,
					extraWorkProgress: o,
				}),
		),
		n.createElement(
			ve.wi,
			null,
			!R &&
				n.createElement(ve.CB, {
					onCancel: y,
					bCancelDisabled: !B,
					strCancelText: Localize("#Button_Cancel"),
					onOK: w,
					bOKDisabled: E,
					strOKText: S,
					focusButton: "primary",
				}),
			R &&
				n.createElement(
					ve.jn,
					{
						autoFocus: true,
						onClick: w,
					},
					S,
				),
		),
	);
}
function Qt(e) {
	const { onClick: t, children: r } = e;
	return n.createElement(
		"span",
		{
			className: Pe.MobileLink,
			onClick: t,
		},
		r,
	);
}
function Zt(e) {
	const { upload: t, extraWorkProgress: r } = e;
	const [i] = q3(() => [t?.file_upload_props.uploadProgress || 0]);
	const a = typeof r == "number" ? (r + i) / 2 : i;
	return n.createElement(he.z2, {
		className: Pe.Progress,
		nProgress: a,
	});
}
