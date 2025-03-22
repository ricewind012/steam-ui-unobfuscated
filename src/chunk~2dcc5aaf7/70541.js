var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./83599.js");
var s = require("./97838.js");
var o = require(/*webcrack:missing*/ "./58663.js");
var l = require(/*webcrack:missing*/ "./48307.js");
const c = o.Message;
class m extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.main) {
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
				main: {
					n: 1,
					c: u,
				},
				audio_mirror: {
					n: 2,
					c: u,
				},
				microphone: {
					n: 3,
					c: u,
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
		return "CSteamVR_AudioSettings_Settings";
	}
}
class u extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.available) {
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
				available: {
					n: 1,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				muted: {
					n: 2,
					br: l.qM.readBool,
					bw: l.gp.writeBool,
				},
				volume: {
					n: 3,
					br: l.qM.readFloat,
					bw: l.gp.writeFloat,
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
		return "CSteamVR_AudioSettings_Settings_Channel";
	}
}
class d extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		c.initialize(this, e, 0, -1, undefined, null);
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
		let t = new o.BinaryReader(e);
		let r = new d();
		return d.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		var e = new o.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		var e = new o.BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_AudioSettings_RegisterForSettings_Request";
	}
}
class A extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.settings) {
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
				settings: {
					n: 1,
					c: m,
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
		return "CSteamVR_AudioSettings_ChangeSettings_Request";
	}
}
class p extends c {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.settings) {
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
				settings: {
					n: 1,
					c: m,
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
		return "CSteamVR_AudioSettings_SettingsChanged_Notification";
	}
}
var g = require(/*webcrack:missing*/ "./93960.js");
const h = new a.wd("VR");
const C = {
	available: false,
	muted: false,
	volume: 0,
};
class _ {
	constructor() {
		(0, i.Gn)(this);
	}
	m_MainVolume = C;
	m_AudioMirrorVolume = C;
	m_MicrophoneVolume = C;
	async Init() {
		h.Debug("Initialized VR audio settings store.");
		s.N.RegisterOnMsg(36, p, this.OnSettingsChangedNotification);
		s.N.WaitUntilConnected().then(() => {
			s.N.BSendMsg(34, new d());
		});
	}
	OnSettingsChangedNotification(e) {
		const t = e?.toObject() ?? {};
		h.Debug("Received Audio Settings:", t);
		this.m_MainVolume = {
			...this.m_MainVolume,
			...t?.settings?.main,
		};
		this.m_AudioMirrorVolume = {
			...this.m_AudioMirrorVolume,
			...t?.settings?.audio_mirror,
		};
		this.m_MicrophoneVolume = {
			...this.m_MicrophoneVolume,
			...t?.settings?.microphone,
		};
	}
	SetMainVolumeSettings(e) {
		this.SetVolumeSettings("main", e);
	}
	SetAudioMirrorVolumeSettings(e) {
		this.SetVolumeSettings("audio_mirror", e);
	}
	SetMicrophoneVolumeSettings(e) {
		this.SetVolumeSettings("microphone", e);
	}
	SetVolumeSettings(e, t) {
		const r = {
			[e]: {
				...t,
			},
		};
		delete r[e].available;
		const n = A.fromObject({
			settings: r,
		});
		if (h.IsDebugEnabled()) {
			h.Debug("Sending Audio ChangeSettings request:", n.toObject());
		}
		s.N.BSendMsg(35, n);
	}
}
(0, n.Cg)([i.sH], _.prototype, "m_MainVolume", undefined);
(0, n.Cg)([i.sH], _.prototype, "m_AudioMirrorVolume", undefined);
(0, n.Cg)([i.sH], _.prototype, "m_MicrophoneVolume", undefined);
(0, n.Cg)([i.XI.bound], _.prototype, "OnSettingsChangedNotification", null);
(0, n.Cg)([g.o], _.prototype, "SetMainVolumeSettings", null);
(0, n.Cg)([g.o], _.prototype, "SetAudioMirrorVolumeSettings", null);
(0, n.Cg)([g.o], _.prototype, "SetMicrophoneVolumeSettings", null);
export const t = new _();
window.vrAudioSettingsStore = t;
