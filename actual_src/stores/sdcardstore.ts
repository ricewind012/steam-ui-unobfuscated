// Webpack module ID: 24496

import { useCallback } from "react";
import { makeAutoObservable } from "mobx";
import { Message, BinaryReader, BinaryWriter } from "./58663.js";
import { Sg, qM, gp, w0, BT, Uq, zj, i0 } from "./48307.js";
import { I8 } from "./12176.js";
import { OI } from "./12251.js";
import { L } from "./75144.js";
import { I as I_1 } from "./61416.js";

const o_Message = Message;

class CStorageDeviceManager_IsServiceAvailable_Request extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CStorageDeviceManager_IsServiceAvailable_Request.toObject(e, this);
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
		return new CStorageDeviceManager_IsServiceAvailable_Request();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_IsServiceAvailable_Request();
		return CStorageDeviceManager_IsServiceAvailable_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_IsServiceAvailable_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_IsServiceAvailable_Request.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_IsServiceAvailable_Request";
	}
}

class CStorageDeviceManager_IsServiceAvailable_Response extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (
			!CStorageDeviceManager_IsServiceAvailable_Response.prototype.is_available
		) {
			Sg(CStorageDeviceManager_IsServiceAvailable_Response.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CStorageDeviceManager_IsServiceAvailable_Response.sm_m ||= {
			proto: CStorageDeviceManager_IsServiceAvailable_Response,
			fields: {
				is_available: {
					n: 1,
					br: qM.readBool,
					bw: gp.writeBool,
				},
			},
		};
		return CStorageDeviceManager_IsServiceAvailable_Response.sm_m;
	}
	static MBF() {
		CStorageDeviceManager_IsServiceAvailable_Response.sm_mbf ||= w0(
			CStorageDeviceManager_IsServiceAvailable_Response.M(),
		);
		return CStorageDeviceManager_IsServiceAvailable_Response.sm_mbf;
	}
	toObject(e = false) {
		return CStorageDeviceManager_IsServiceAvailable_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CStorageDeviceManager_IsServiceAvailable_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CStorageDeviceManager_IsServiceAvailable_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_IsServiceAvailable_Response();
		return CStorageDeviceManager_IsServiceAvailable_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CStorageDeviceManager_IsServiceAvailable_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_IsServiceAvailable_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CStorageDeviceManager_IsServiceAvailable_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_IsServiceAvailable_Response.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_IsServiceAvailable_Response";
	}
}

class CStorageDeviceManagerDrive extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CStorageDeviceManagerDrive.prototype.id) {
			Sg(CStorageDeviceManagerDrive.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CStorageDeviceManagerDrive.sm_m ||= {
			proto: CStorageDeviceManagerDrive,
			fields: {
				id: {
					n: 1,
					d: 0,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				model: {
					n: 2,
					br: qM.readString,
					bw: gp.writeString,
				},
				vendor: {
					n: 3,
					br: qM.readString,
					bw: gp.writeString,
				},
				serial: {
					n: 4,
					br: qM.readString,
					bw: gp.writeString,
				},
				is_ejectable: {
					n: 5,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				size_bytes: {
					n: 6,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				media_type: {
					n: 7,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				is_unformatted: {
					n: 8,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				adopt_stage: {
					n: 9,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				is_formattable: {
					n: 10,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				is_media_available: {
					n: 11,
					br: qM.readBool,
					bw: gp.writeBool,
				},
			},
		};
		return CStorageDeviceManagerDrive.sm_m;
	}
	static MBF() {
		CStorageDeviceManagerDrive.sm_mbf ||= w0(CStorageDeviceManagerDrive.M());
		return CStorageDeviceManagerDrive.sm_mbf;
	}
	toObject(e = false) {
		return CStorageDeviceManagerDrive.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CStorageDeviceManagerDrive.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CStorageDeviceManagerDrive.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManagerDrive();
		return CStorageDeviceManagerDrive.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CStorageDeviceManagerDrive.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManagerDrive.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CStorageDeviceManagerDrive.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManagerDrive.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManagerDrive";
	}
}

class CStorageDeviceManagerBlockDevice extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CStorageDeviceManagerBlockDevice.prototype.id) {
			Sg(CStorageDeviceManagerBlockDevice.M());
		}
		o_Message.initialize(this, e, 0, -1, [12], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CStorageDeviceManagerBlockDevice.sm_m ||= {
			proto: CStorageDeviceManagerBlockDevice,
			fields: {
				id: {
					n: 1,
					d: 0,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				drive_id: {
					n: 2,
					d: 0,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				path: {
					n: 3,
					br: qM.readString,
					bw: gp.writeString,
				},
				friendly_path: {
					n: 4,
					br: qM.readString,
					bw: gp.writeString,
				},
				label: {
					n: 5,
					br: qM.readString,
					bw: gp.writeString,
				},
				size_bytes: {
					n: 6,
					br: qM.readUint64String,
					bw: gp.writeUint64String,
				},
				is_formattable: {
					n: 7,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				is_read_only: {
					n: 8,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				is_root_device: {
					n: 9,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				content_type: {
					n: 10,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				filesystem_type: {
					n: 11,
					br: qM.readEnum,
					bw: gp.writeEnum,
				},
				mount_paths: {
					n: 12,
					r: true,
					q: true,
					br: qM.readString,
					bw: gp.writeRepeatedString,
				},
				is_unmounting: {
					n: 13,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				has_steam_library: {
					n: 14,
					br: qM.readBool,
					bw: gp.writeBool,
				},
			},
		};
		return CStorageDeviceManagerBlockDevice.sm_m;
	}
	static MBF() {
		CStorageDeviceManagerBlockDevice.sm_mbf ||= w0(
			CStorageDeviceManagerBlockDevice.M(),
		);
		return CStorageDeviceManagerBlockDevice.sm_mbf;
	}
	toObject(e = false) {
		return CStorageDeviceManagerBlockDevice.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CStorageDeviceManagerBlockDevice.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CStorageDeviceManagerBlockDevice.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManagerBlockDevice();
		return CStorageDeviceManagerBlockDevice.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CStorageDeviceManagerBlockDevice.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManagerBlockDevice.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CStorageDeviceManagerBlockDevice.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManagerBlockDevice.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManagerBlockDevice";
	}
}

class CStorageDeviceManagerState extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CStorageDeviceManagerState.prototype.drives) {
			Sg(CStorageDeviceManagerState.M());
		}
		o_Message.initialize(this, e, 0, -1, [1, 2], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CStorageDeviceManagerState.sm_m ||= {
			proto: CStorageDeviceManagerState,
			fields: {
				drives: {
					n: 1,
					c: CStorageDeviceManagerDrive,
					r: true,
					q: true,
				},
				block_devices: {
					n: 2,
					c: CStorageDeviceManagerBlockDevice,
					r: true,
					q: true,
				},
				is_unmount_supported: {
					n: 3,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				is_trim_supported: {
					n: 4,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				is_trim_running: {
					n: 5,
					br: qM.readBool,
					bw: gp.writeBool,
				},
				is_adopt_supported: {
					n: 6,
					br: qM.readBool,
					bw: gp.writeBool,
				},
			},
		};
		return CStorageDeviceManagerState.sm_m;
	}
	static MBF() {
		CStorageDeviceManagerState.sm_mbf ||= w0(CStorageDeviceManagerState.M());
		return CStorageDeviceManagerState.sm_mbf;
	}
	toObject(e = false) {
		return CStorageDeviceManagerState.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CStorageDeviceManagerState.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CStorageDeviceManagerState.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManagerState();
		return CStorageDeviceManagerState.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CStorageDeviceManagerState.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManagerState.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CStorageDeviceManagerState.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManagerState.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManagerState";
	}
}
class CStorageDeviceManager_GetState_Request extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CStorageDeviceManager_GetState_Request.toObject(e, this);
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
		return new CStorageDeviceManager_GetState_Request();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_GetState_Request();
		return CStorageDeviceManager_GetState_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_GetState_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_GetState_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_GetState_Request";
	}
}

class CStorageDeviceManager_GetState_Response extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CStorageDeviceManager_GetState_Response.prototype.state) {
			Sg(CStorageDeviceManager_GetState_Response.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CStorageDeviceManager_GetState_Response.sm_m ||= {
			proto: CStorageDeviceManager_GetState_Response,
			fields: {
				state: {
					n: 1,
					c: CStorageDeviceManagerState,
				},
			},
		};
		return CStorageDeviceManager_GetState_Response.sm_m;
	}
	static MBF() {
		CStorageDeviceManager_GetState_Response.sm_mbf ||= w0(
			CStorageDeviceManager_GetState_Response.M(),
		);
		return CStorageDeviceManager_GetState_Response.sm_mbf;
	}
	toObject(e = false) {
		return CStorageDeviceManager_GetState_Response.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CStorageDeviceManager_GetState_Response.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CStorageDeviceManager_GetState_Response.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_GetState_Response();
		return CStorageDeviceManager_GetState_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CStorageDeviceManager_GetState_Response.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_GetState_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CStorageDeviceManager_GetState_Response.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_GetState_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_GetState_Response";
	}
}

class CStorageDeviceManager_StateChanged_Notification extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CStorageDeviceManager_StateChanged_Notification.toObject(e, this);
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
		return new CStorageDeviceManager_StateChanged_Notification();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_StateChanged_Notification();
		return CStorageDeviceManager_StateChanged_Notification.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_StateChanged_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_StateChanged_Notification.serializeBinaryToWriter(
			this,
			e,
		);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_StateChanged_Notification";
	}
}

class CStorageDeviceManager_Eject_Request extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CStorageDeviceManager_Eject_Request.prototype.drive_id) {
			Sg(CStorageDeviceManager_Eject_Request.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CStorageDeviceManager_Eject_Request.sm_m ||= {
			proto: CStorageDeviceManager_Eject_Request,
			fields: {
				drive_id: {
					n: 1,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
			},
		};
		return CStorageDeviceManager_Eject_Request.sm_m;
	}
	static MBF() {
		CStorageDeviceManager_Eject_Request.sm_mbf ||= w0(
			CStorageDeviceManager_Eject_Request.M(),
		);
		return CStorageDeviceManager_Eject_Request.sm_mbf;
	}
	toObject(e = false) {
		return CStorageDeviceManager_Eject_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CStorageDeviceManager_Eject_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CStorageDeviceManager_Eject_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_Eject_Request();
		return CStorageDeviceManager_Eject_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CStorageDeviceManager_Eject_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Eject_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CStorageDeviceManager_Eject_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Eject_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Eject_Request";
	}
}

class CStorageDeviceManager_Eject_Response extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CStorageDeviceManager_Eject_Response.toObject(e, this);
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
		return new CStorageDeviceManager_Eject_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_Eject_Response();
		return CStorageDeviceManager_Eject_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Eject_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Eject_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Eject_Response";
	}
}

class CStorageDeviceManager_Adopt_Request extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CStorageDeviceManager_Adopt_Request.prototype.drive_id) {
			Sg(CStorageDeviceManager_Adopt_Request.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CStorageDeviceManager_Adopt_Request.sm_m ||= {
			proto: CStorageDeviceManager_Adopt_Request,
			fields: {
				drive_id: {
					n: 1,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
				label: {
					n: 2,
					br: qM.readString,
					bw: gp.writeString,
				},
				validate: {
					n: 3,
					br: qM.readBool,
					bw: gp.writeBool,
				},
			},
		};
		return CStorageDeviceManager_Adopt_Request.sm_m;
	}
	static MBF() {
		CStorageDeviceManager_Adopt_Request.sm_mbf ||= w0(
			CStorageDeviceManager_Adopt_Request.M(),
		);
		return CStorageDeviceManager_Adopt_Request.sm_mbf;
	}
	toObject(e = false) {
		return CStorageDeviceManager_Adopt_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CStorageDeviceManager_Adopt_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CStorageDeviceManager_Adopt_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_Adopt_Request();
		return CStorageDeviceManager_Adopt_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CStorageDeviceManager_Adopt_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Adopt_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CStorageDeviceManager_Adopt_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Adopt_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Adopt_Request";
	}
}

class CStorageDeviceManager_Adopt_Response extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CStorageDeviceManager_Adopt_Response.toObject(e, this);
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
		return new CStorageDeviceManager_Adopt_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_Adopt_Response();
		return CStorageDeviceManager_Adopt_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Adopt_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Adopt_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Adopt_Response";
	}
}

class CStorageDeviceManager_Format_Request extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CStorageDeviceManager_Format_Request.prototype.block_device_id) {
			Sg(CStorageDeviceManager_Format_Request.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CStorageDeviceManager_Format_Request.sm_m ||= {
			proto: CStorageDeviceManager_Format_Request,
			fields: {
				block_device_id: {
					n: 1,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
			},
		};
		return CStorageDeviceManager_Format_Request.sm_m;
	}
	static MBF() {
		CStorageDeviceManager_Format_Request.sm_mbf ||= w0(
			CStorageDeviceManager_Format_Request.M(),
		);
		return CStorageDeviceManager_Format_Request.sm_mbf;
	}
	toObject(e = false) {
		return CStorageDeviceManager_Format_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CStorageDeviceManager_Format_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CStorageDeviceManager_Format_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_Format_Request();
		return CStorageDeviceManager_Format_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CStorageDeviceManager_Format_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Format_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CStorageDeviceManager_Format_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Format_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Format_Request";
	}
}

class CStorageDeviceManager_Format_Response extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CStorageDeviceManager_Format_Response.toObject(e, this);
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
		return new CStorageDeviceManager_Format_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_Format_Response();
		return CStorageDeviceManager_Format_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Format_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Format_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Format_Response";
	}
}

class CStorageDeviceManager_Unmount_Request extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CStorageDeviceManager_Unmount_Request.prototype.block_device_id) {
			Sg(CStorageDeviceManager_Unmount_Request.M());
		}
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CStorageDeviceManager_Unmount_Request.sm_m ||= {
			proto: CStorageDeviceManager_Unmount_Request,
			fields: {
				block_device_id: {
					n: 1,
					br: qM.readUint32,
					bw: gp.writeUint32,
				},
			},
		};
		return CStorageDeviceManager_Unmount_Request.sm_m;
	}
	static MBF() {
		CStorageDeviceManager_Unmount_Request.sm_mbf ||= w0(
			CStorageDeviceManager_Unmount_Request.M(),
		);
		return CStorageDeviceManager_Unmount_Request.sm_mbf;
	}
	toObject(e = false) {
		return CStorageDeviceManager_Unmount_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CStorageDeviceManager_Unmount_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CStorageDeviceManager_Unmount_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_Unmount_Request();
		return CStorageDeviceManager_Unmount_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CStorageDeviceManager_Unmount_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Unmount_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CStorageDeviceManager_Unmount_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Unmount_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Unmount_Request";
	}
}

class CStorageDeviceManager_Unmount_Response extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CStorageDeviceManager_Unmount_Response.toObject(e, this);
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
		return new CStorageDeviceManager_Unmount_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_Unmount_Response();
		return CStorageDeviceManager_Unmount_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Unmount_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_Unmount_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_Unmount_Response";
	}
}

class CStorageDeviceManager_TrimAll_Request extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CStorageDeviceManager_TrimAll_Request.toObject(e, this);
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
		return new CStorageDeviceManager_TrimAll_Request();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_TrimAll_Request();
		return CStorageDeviceManager_TrimAll_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_TrimAll_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_TrimAll_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_TrimAll_Request";
	}
}

class CStorageDeviceManager_TrimAll_Response extends o_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		o_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CStorageDeviceManager_TrimAll_Response.toObject(e, this);
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
		return new CStorageDeviceManager_TrimAll_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CStorageDeviceManager_TrimAll_Response();
		return CStorageDeviceManager_TrimAll_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CStorageDeviceManager_TrimAll_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CStorageDeviceManager_TrimAll_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CStorageDeviceManager_TrimAll_Response";
	}
}

let R;
((e) => {
	e.IsServiceAvailableHandler = {
		name: "StorageDeviceManager.IsServiceAvailable#1",
		request: CStorageDeviceManager_IsServiceAvailable_Request,
		response: CStorageDeviceManager_IsServiceAvailable_Response,
	};
	e.IsServiceAvailable = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.IsServiceAvailable#1",
				I8(CStorageDeviceManager_IsServiceAvailable_Request, e),
				CStorageDeviceManager_IsServiceAvailable_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgIsServiceAvailable = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.IsServiceAvailable#1",
				I8(CStorageDeviceManager_IsServiceAvailable_Request, e),
				CStorageDeviceManager_IsServiceAvailable_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.GetStateHandler = {
		name: "StorageDeviceManager.GetState#1",
		request: CStorageDeviceManager_GetState_Request,
		response: CStorageDeviceManager_GetState_Response,
	};
	e.GetState = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.GetState#1",
				I8(CStorageDeviceManager_GetState_Request, e),
				CStorageDeviceManager_GetState_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgGetState = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.GetState#1",
				I8(CStorageDeviceManager_GetState_Request, e),
				CStorageDeviceManager_GetState_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.NotifyStateChangedHandler = {
		name: "StorageDeviceManager.NotifyStateChanged#1",
		request: CStorageDeviceManager_StateChanged_Notification,
	};
	e.RegisterForNotifyStateChanged = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyStateChangedHandler,
				t,
			);
		}
	};
	e.NotifyStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"StorageDeviceManager.NotifyStateChanged#1",
				I8(CStorageDeviceManager_StateChanged_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgNotifyStateChanged = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"StorageDeviceManager.NotifyStateChanged#1",
				I8(CStorageDeviceManager_StateChanged_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.AdoptHandler = {
		name: "StorageDeviceManager.Adopt#1",
		request: CStorageDeviceManager_Adopt_Request,
		response: CStorageDeviceManager_Adopt_Response,
	};
	e.Adopt = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.Adopt#1",
				I8(CStorageDeviceManager_Adopt_Request, e),
				CStorageDeviceManager_Adopt_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgAdopt = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.Adopt#1",
				I8(CStorageDeviceManager_Adopt_Request, e),
				CStorageDeviceManager_Adopt_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.EjectHandler = {
		name: "StorageDeviceManager.Eject#1",
		request: CStorageDeviceManager_Eject_Request,
		response: CStorageDeviceManager_Eject_Response,
	};
	e.Eject = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.Eject#1",
				I8(CStorageDeviceManager_Eject_Request, e),
				CStorageDeviceManager_Eject_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgEject = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.Eject#1",
				I8(CStorageDeviceManager_Eject_Request, e),
				CStorageDeviceManager_Eject_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.FormatHandler = {
		name: "StorageDeviceManager.Format#1",
		request: CStorageDeviceManager_Format_Request,
		response: CStorageDeviceManager_Format_Response,
	};
	e.Format = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.Format#1",
				I8(CStorageDeviceManager_Format_Request, e),
				CStorageDeviceManager_Format_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgFormat = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.Format#1",
				I8(CStorageDeviceManager_Format_Request, e),
				CStorageDeviceManager_Format_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.UnmountHandler = {
		name: "StorageDeviceManager.Unmount#1",
		request: CStorageDeviceManager_Unmount_Request,
		response: CStorageDeviceManager_Unmount_Response,
	};
	e.Unmount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.Unmount#1",
				I8(CStorageDeviceManager_Unmount_Request, e),
				CStorageDeviceManager_Unmount_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgUnmount = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.Unmount#1",
				I8(CStorageDeviceManager_Unmount_Request, e),
				CStorageDeviceManager_Unmount_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.TrimAllHandler = {
		name: "StorageDeviceManager.TrimAll#1",
		request: CStorageDeviceManager_TrimAll_Request,
		response: CStorageDeviceManager_TrimAll_Response,
	};
	e.TrimAll = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.TrimAll#1",
				I8(CStorageDeviceManager_TrimAll_Request, e),
				CStorageDeviceManager_TrimAll_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
	e.SendMsgTrimAll = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"StorageDeviceManager.TrimAll#1",
				I8(CStorageDeviceManager_TrimAll_Request, e),
				CStorageDeviceManager_TrimAll_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 1,
				},
			);
		}
	};
})((R ||= {}));

const N = "SystemStorageService";
const F = "State";
const G = "IsServiceAvailable";

function O() {
	return [N, F];
}

class CSystemStorageStore {
	async Init() {
		R.RegisterForNotifyStateChanged(this.OnStateChanged);
	}

	OnStateChanged(e) {
		L.invalidateQueries({
			queryKey: O(),
		});
		return 1;
	}

	async Adopt(drive_id, label, validate) {
		return (
			await R.Adopt({
				drive_id,
				label,
				validate,
			})
		).GetEResult();
	}

	async TrimAll() {
		return (await R.TrimAll({})).GetEResult();
	}

	async Unmount(block_device_id) {
		return (
			await R.Unmount({
				block_device_id,
			})
		).GetEResult();
	}
}

export function vM(select) {
	const enabled = (() => {
		const queryFn = useCallback(async () => {
			const e = await R.IsServiceAvailable({});
			return e.BSuccess() && e.Body().is_available();
		}, []);
		const t = I_1({
			queryKey: [N, G],
			queryFn,
			staleTime: Infinity,
		});
		return t?.data === true;
	})();
	const queryFn = useCallback(async () => {
		const msg = await R.GetState({});
		if (!msg.BSuccess()) {
			throw new Error("Failed to fetch storage device manager state");
		}
		return msg.Body().toObject().state;
	}, []);
	return I_1({
		queryKey: O(),
		queryFn,
		staleTime: Infinity,
		select,
		enabled,
	});
}

export function CN(e) {
	const t = vM((t) => t?.drives?.find((t) => t.id == e));
	if (t.isSuccess && e !== null) {
		return t.data;
	} else {
		return null;
	}
}

export function fu(e) {
	const t = vM((t) => t?.block_devices?.filter((t) => t.drive_id == e));
	if (t.isSuccess) {
		return t.data;
	} else {
		return null;
	}
}

export function Ff() {
	return (
		vM((e) =>
			e?.drives?.filter(
				(t) =>
					!!((e) => e.is_formattable && e.is_unformatted)(t) ||
					!((e, t) => {
						for (const r of t) {
							if (r.drive_id == e.id && r.has_steam_library) {
								return true;
							}
						}
						return false;
					})(t, e.block_devices),
			),
		).data ?? []
	);
}

export function VW() {
	const e = vM((e) => e.is_adopt_supported);
	return e.isSuccess && e.data;
}

export function De() {
	const e = vM((e) => e.is_unmount_supported);
	return e.isSuccess && e.data;
}

export function V(e) {
	const t = vM((t) => {
		if (e === null) {
			return null;
		}
		for (const r of t.block_devices) {
			if (r.mount_paths?.includes(e)) {
				return r;
			}
		}
		return null;
	});
	if (t.isSuccess) {
		return t.data;
	} else {
		return null;
	}
}

export function Dt() {
	const e = vM((e) => ({
		bSupported: e.is_trim_supported,
		bRunning: e.is_trim_running,
	}));
	return [
		e.isSuccess
			? e.data
			: {
					bSupported: false,
					bRunning: false,
				},
		_r.TrimAll,
	];
}

function q() {
	const e = vM((e) => {
		for (const t of e.block_devices) {
			if (t.path.startsWith("/dev/mmcblk0")) {
				return t;
			}
		}
		return null;
	});
	if (e.isSuccess) {
		return e.data;
	} else {
		return null;
	}
}

export function hb() {
	return q() != null;
}

export function gf() {
	const e = q();
	const t = CN(e?.drive_id);
	return !!e && !!t && t.is_unformatted;
}

Cg([oI], CSystemStorageStore.prototype, "OnStateChanged", null);
Cg([oI], CSystemStorageStore.prototype, "Adopt", null);
Cg([oI], CSystemStorageStore.prototype, "TrimAll", null);
Cg([oI], CSystemStorageStore.prototype, "Unmount", null);
export const _r = new CSystemStorageStore();

class CSDCardStore {
	m_bIsSDCardFormatting = false;
	m_progressFormat = null;

	get bIsSDCardFormatting() {
		return this.m_bIsSDCardFormatting;
	}
	get progressFormat() {
		return this.m_progressFormat;
	}

	constructor() {
		makeAutoObservable(this);
		this.ClearFormatProgress();
	}

	async Init() {
		if (SteamClient.System.RegisterForFormatStorageProgress) {
			SteamClient.System.RegisterForFormatStorageProgress(
				this.OnFormatStorageProgress,
			);
		}
	}

	OnFormatStorageProgress(e) {
		this.m_progressFormat = e;
	}

	ClearFormatProgress() {
		this.m_progressFormat = {
			flProgress: 0,
			rtEstimatedCompletionTime: 0,
			eStage: 1,
		};
	}

	async FormatSDCard(e) {
		if (this.m_bIsSDCardFormatting) {
			return 108;
		}
		this.ClearFormatProgress();
		this.m_bIsSDCardFormatting = true;
		const t = await SteamClient.System.FormatStorage(e);
		this.m_bIsSDCardFormatting = false;
		return t.result;
	}
}
Cg([a.sH], CSDCardStore.prototype, "m_bIsSDCardFormatting", undefined);
Cg([a.sH], CSDCardStore.prototype, "m_progressFormat", undefined);
Cg([a.XI.bound], CSDCardStore.prototype, "OnFormatStorageProgress", null);
Cg([a.XI.bound], CSDCardStore.prototype, "ClearFormatProgress", null);
export const bh = new CSDCardStore();
