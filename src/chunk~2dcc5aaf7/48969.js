import n from "./58663.js";
import i from "./48307.js";
const n_Message = n.Message;
export class qN extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!qN.prototype.width) {
			i.Sg(qN.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		qN.sm_m ||= {
			proto: qN,
			fields: {
				width: {
					n: 1,
					q: true,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				height: {
					n: 2,
					q: true,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				refresh_rate: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				refresh_rate_numerator: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				refresh_rate_denominator: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
			},
		};
		return qN.sm_m;
	}
	static MBF() {
		qN.sm_mbf ||= i.w0(qN.M());
		return qN.sm_mbf;
	}
	toObject(e = false) {
		return qN.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(qN.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(qN.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new qN();
		return qN.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(qN.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		qN.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(qN.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		qN.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStreamVideoMode";
	}
}
export class ye extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!ye.prototype.codec) {
			i.Sg(ye.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		ye.sm_m ||= {
			proto: ye,
			fields: {
				codec: {
					n: 1,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				mode: {
					n: 2,
					c: qN,
				},
				bitrate_kbps: {
					n: 3,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				burst_bitrate_kbps: {
					n: 4,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
			},
		};
		return ye.sm_m;
	}
	static MBF() {
		ye.sm_mbf ||= i.w0(ye.M());
		return ye.sm_mbf;
	}
	toObject(e = false) {
		return ye.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(ye.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(ye.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new ye();
		return ye.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(ye.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(ye.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		ye.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStreamVideoLimit";
	}
}
export class fO extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!fO.prototype.quality) {
			i.Sg(fO.M());
		}
		n_Message.initialize(this, e, 0, -1, [24], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		fO.sm_m ||= {
			proto: fO,
			fields: {
				quality: {
					n: 1,
					d: 2,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				desired_resolution_x: {
					n: 2,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				desired_resolution_y: {
					n: 3,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				desired_framerate_numerator: {
					n: 4,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				desired_framerate_denominator: {
					n: 5,
					br: i.qM.readUint32,
					bw: i.gp.writeUint32,
				},
				desired_bitrate_kbps: {
					n: 6,
					d: -1,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				enable_hardware_decoding: {
					n: 7,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_performance_overlay: {
					n: 8,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_video_streaming: {
					n: 9,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_audio_streaming: {
					n: 10,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_input_streaming: {
					n: 11,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				audio_channels: {
					n: 12,
					d: 2,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				enable_video_hevc: {
					n: 13,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_performance_icons: {
					n: 14,
					d: true,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_microphone_streaming: {
					n: 15,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				controller_overlay_hotkey: {
					n: 16,
					br: i.qM.readString,
					bw: i.gp.writeString,
				},
				enable_touch_controller_OBSOLETE: {
					n: 17,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				p2p_scope: {
					n: 19,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				enable_audio_uncompressed: {
					n: 20,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				display_limit: {
					n: 21,
					c: ye,
				},
				quality_limit: {
					n: 22,
					c: ye,
				},
				runtime_limit: {
					n: 23,
					c: ye,
				},
				decoder_limit: {
					n: 24,
					c: ye,
					r: true,
					q: true,
				},
				enable_unreliable_fec: {
					n: 25,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_video_av1: {
					n: 26,
					d: false,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return fO.sm_m;
	}
	static MBF() {
		fO.sm_mbf ||= i.w0(fO.M());
		return fO.sm_mbf;
	}
	toObject(e = false) {
		return fO.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(fO.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(fO.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new fO();
		return fO.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(fO.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		fO.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(fO.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		fO.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStreamingClientConfig";
	}
}
export class Fh extends n_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!Fh.prototype.change_desktop_resolution) {
			i.Sg(Fh.M());
		}
		n_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		Fh.sm_m ||= {
			proto: Fh,
			fields: {
				change_desktop_resolution: {
					n: 1,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				dynamically_adjust_resolution_OBSOLETE: {
					n: 2,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_capture_nvfbc: {
					n: 3,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_hardware_encoding_nvidia_OBSOLETE: {
					n: 4,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_hardware_encoding_amd_OBSOLETE: {
					n: 5,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				enable_hardware_encoding_intel_OBSOLETE: {
					n: 6,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				software_encoding_threads: {
					n: 7,
					br: i.qM.readInt32,
					bw: i.gp.writeInt32,
				},
				enable_traffic_priority: {
					n: 8,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
				host_play_audio: {
					n: 9,
					d: 0,
					br: i.qM.readEnum,
					bw: i.gp.writeEnum,
				},
				enable_hardware_encoding: {
					n: 10,
					br: i.qM.readBool,
					bw: i.gp.writeBool,
				},
			},
		};
		return Fh.sm_m;
	}
	static MBF() {
		Fh.sm_mbf ||= i.w0(Fh.M());
		return Fh.sm_mbf;
	}
	toObject(e = false) {
		return Fh.toObject(e, this);
	}
	static toObject(e, t) {
		return i.BT(Fh.M(), e, t);
	}
	static fromObject(e) {
		return i.Uq(Fh.M(), e);
	}
	static deserializeBinary(e) {
		let t = new n.BinaryReader(e);
		let r = new Fh();
		return Fh.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return i.zj(Fh.MBF(), e, t);
	}
	serializeBinary() {
		const e = new n.BinaryWriter();
		Fh.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i.i0(Fh.M(), e, t);
	}
	serializeBase64String() {
		const e = new n.BinaryWriter();
		Fh.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStreamingServerConfig";
	}
}
