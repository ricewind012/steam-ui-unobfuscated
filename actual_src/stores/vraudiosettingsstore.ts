import { wd as CLogger } from "./83599.js";
import { N } from "./97838.js";
import { Message, BinaryReader, BinaryWriter } from "./58663.js";
import { Sg, w0, BT, Uq, zj, i0, qM, gp } from "./48307.js";
import { action, makeAutoObservable, observable } from "mobx";
import { bind } from "../utils/bind.js";

const o_Message = Message;

class m extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!m.prototype.main) {
			Sg(m.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
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
		m.sm_mbf ||= w0(m.M());
		return m.sm_mbf;
	}
	toObject(e = false) {
		return m.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(m.M(), e, t);
	}
	static fromObject(e) {
		return Uq(m.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new m();
		return m.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(m.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(m.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		m.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_AudioSettings_Settings";
	}
}

class u extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!u.prototype.available) {
			Sg(u.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		u.sm_m ||= {
			proto: u,
			fields: {
				available: {
					n: 1,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				muted: {
					n: 2,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				volume: {
					n: 3,
					br: qM.readFloat,
					bw: gp.writeFloat,
				},
			},
		};
		return u.sm_m;
	}
	static MBF() {
		u.sm_mbf ||= w0(u.M());
		return u.sm_mbf;
	}
	toObject(e = false) {
		return u.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(u.M(), e, t);
	}
	static fromObject(e) {
		return Uq(u.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new u();
		return u.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(u.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(u.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		u.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_AudioSettings_Settings_Channel";
	}
}

class d extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new BinaryReader(e);
		let r = new d();
		return d.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		d.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_AudioSettings_RegisterForSettings_Request";
	}
}

class A extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!A.prototype.settings) {
			Sg(A.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
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
		A.sm_mbf ||= w0(A.M());
		return A.sm_mbf;
	}
	toObject(e = false) {
		return A.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(A.M(), e, t);
	}
	static fromObject(e) {
		return Uq(A.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new A();
		return A.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(A.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(A.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		A.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_AudioSettings_ChangeSettings_Request";
	}
}

class p extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!p.prototype.settings) {
			Sg(p.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
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
		p.sm_mbf ||= w0(p.M());
		return p.sm_mbf;
	}
	toObject(e = false) {
		return p.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(p.M(), e, t);
	}
	static fromObject(e) {
		return Uq(p.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new p();
		return p.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(p.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(p.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		p.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CSteamVR_AudioSettings_SettingsChanged_Notification";
	}
}

const g_VRLogger = new CLogger("VR");
const Volume_t = {
	available: false,
	muted: false,
	volume: 0,
};

class CVRAudioSettingsStore {
	constructor() {
		makeAutoObservable(this);
	}

	@observable m_MainVolume = Volume_t;
	@observable m_AudioMirrorVolume = Volume_t;
	@observable m_MicrophoneVolume = Volume_t;

	async Init() {
		g_VRLogger.Debug("Initialized VR audio settings store.");
		N.RegisterOnMsg(36, p, this.OnSettingsChangedNotification);
		N.WaitUntilConnected().then(() => {
			N.BSendMsg(34, new d());
		});
	}

	@action OnSettingsChangedNotification(protoMsg) {
		const settings = protoMsg?.toObject() ?? {};
		g_VRLogger.Debug("Received Audio Settings:", settings);
		this.m_MainVolume = {
			...this.m_MainVolume,
			...settings?.settings?.main,
		};
		this.m_AudioMirrorVolume = {
			...this.m_AudioMirrorVolume,
			...settings?.settings?.audio_mirror,
		};
		this.m_MicrophoneVolume = {
			...this.m_MicrophoneVolume,
			...settings?.settings?.microphone,
		};
	}

	@bind SetMainVolumeSettings(e) {
		this.SetVolumeSettings("main", e);
	}

	@bind SetAudioMirrorVolumeSettings(e) {
		this.SetVolumeSettings("audio_mirror", e);
	}

	@bind SetMicrophoneVolumeSettings(e) {
		this.SetVolumeSettings("microphone", e);
	}

	SetVolumeSettings(key: string, value) {
		const r = {
			[key]: {
				...value,
			},
		};
		delete r[key].available;
		const n = A.fromObject({
			settings: r,
		});
		if (g_VRLogger.IsDebugEnabled()) {
			g_VRLogger.Debug("Sending Audio ChangeSettings request:", n.toObject());
		}
		N.BSendMsg(35, n);
	}
}
export const t = new CVRAudioSettingsStore();
window.vrAudioSettingsStore = t;
