import { BinaryReader } from "./58663.js";
import "./1691.js";
import { pV } from "./16583.js";
import { LH } from "./29218.js";
import "./36229.js";
import { EResult } from "@steamclient_types/shared.js";

const k_uFixedHeaderSize = 8;

export class lI {
	static sm_ErrorReportingStore;
	static InstallErrorReportingStore(e) {
		this.sm_ErrorReportingStore = e;
	}

	static InitHeaderFromPacket(e) {
		return new lI(undefined, e);
	}

	m_eMsg: number;
	m_bValid;
	m_netPacket;
	m_cubHeader;
	m_header;
	m_body;

	constructor(eMsg: number, pNetPacket, n, s, o, a) {
		if (s) {
			this.m_eMsg = s.m_eMsg;
			this.m_bValid = s.m_bValid;
			if (this.m_bValid) {
				this.m_netPacket = s.m_netPacket;
				this.m_cubHeader = s.m_cubHeader;
				this.m_header = s.m_header;
				this.InitForType(n);
			}
		} else {
			this.m_header = new LH(null);
			this.m_bValid = true;
			if (pNetPacket) {
				this.m_netPacket = pNetPacket;
				this.m_netPacket.SeekGetHead();
				this.m_eMsg = this.m_netPacket.GetUint32();
				if (this.m_eMsg & 2147483648) {
					this.m_eMsg = this.m_eMsg & 2147483647;
					this.m_cubHeader = this.m_netPacket.GetUint32();
					try {
						LH.deserializeBinaryFromReader(
							this.m_header,
							new BinaryReader(
								this.m_netPacket.GetPacket(),
								this.m_netPacket.TellGet(),
								this.m_cubHeader,
							),
						);
						this.m_netPacket.SeekGetCurrent(this.m_cubHeader);
						if (n) {
							this.InitForType(n);
						}
					} catch (ex) {
						console.error("Exception deserializing protobuf", ex);
						this.m_bValid = false;
					}
				} else {
					this.m_bValid = false;
				}
			} else {
				if (eMsg) {
					this.m_eMsg = eMsg;
				}
				if (a && n) {
					this.m_body = n.fromObject(a);
				} else if (n) {
					this.m_body = new n();
				}
			}
			if (o) {
				this.m_header.set_jobid_target(o.Hdr().jobid_target());
			}
		}
	}

	InitForType(proto) {
		this.m_body = new proto();
		if (this.m_netPacket) {
			this.m_netPacket.SeekGetHead(k_uFixedHeaderSize + this.m_cubHeader);
			this.ReadBodyFromBuffer(proto, this.m_netPacket);
		}
	}

	ReadBodyFromBuffer(proto, packet) {
		try {
			proto.deserializeBinaryFromReader(
				this.m_body,
				new BinaryReader(
					packet.GetPacket(),
					packet.TellGet(),
					packet.GetCountBytesRemaining(),
				),
			);
		} catch (ex) {
			this.m_bValid = false;
			const store = lI.sm_ErrorReportingStore;
			const msg = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
			if (store) {
				store.ReportError(new Error(msg), {
					bIncludeMessageInIdentifier: true,
				});
			}
			console.warn(msg);
			console.log(ex.stack || ex);
		}
	}

	BIsValid() {
		return this.m_bValid;
	}

	Body() {
		return this.m_body;
	}

	SetBodyJSON(e) {
		e.toObject = () => e;
		this.m_body = e;
	}

	Hdr() {
		return this.m_header;
	}

	GetEMsg() {
		return this.m_eMsg;
	}

	SetEMsg(eMsg: number) {
		this.m_eMsg = eMsg;
	}

	GetEResult() {
		return this.Hdr().eresult();
	}

	BSuccess() {
		return this.Hdr().eresult() == EResult.OK;
	}

	GetErrorMessage() {
		if (this.Hdr().error_message()) {
			return this.Hdr().error_message();
		} else {
			return `eresult ${this.Hdr().eresult()}`;
		}
	}

	Serialize() {
		const binHeader = this.m_header.serializeBinary();
		const binBody = this.m_body.serializeBinary();
		const n = this.m_eMsg | 2147483648;
		const r = new Uint8Array(
			k_uFixedHeaderSize + binHeader.length + binBody.length,
		);
		const i = new pV(r);
		i.PutUint32(n);
		i.PutUint32(binHeader.length);
		i.PutBytes(binHeader);
		i.PutBytes(binBody);
		return r;
	}

	SerializeBody() {
		const bin = this.m_body.serializeBinary();
		const t = new Uint8Array(bin.length);
		new pV(t).PutBytes(bin);
		return t;
	}

	DEBUG_ToObject() {
		return {};
	}

	DEBUG_LogToConsole() {
		0;
	}
}

export class w extends lI {
	constructor(e, t = 0, n, r, i) {
		super(t, n, e, r, undefined, i);
	}

	static InitFromPacket(e, t) {
		return new w(e, 0, t);
	}

	static InitFromMsg(e, t) {
		return new w(e, undefined, undefined, t);
	}

	static Init(e, t) {
		return new w(e, t);
	}

	static InitFromObject(e, t) {
		return new w(e, undefined, undefined, undefined, t);
	}

	Body() {
		return super.Body();
	}

	SetBodyFields(fields: Record<string, string>) {
		for (const field in fields) {
			if (Array.isArray(fields[field])) {
				if (this.Body()[`add_${field}`]) {
					fields[field].forEach((e) => {
						this.Body()[`add_${field}`](e);
					});
				}
			} else if (this.Body()[`set_${field}`]) {
				this.Body()[`set_${field}`](fields[field]);
			}
		}
	}
}

export function I8(e, t) {
	if (t instanceof w) {
		return t;
	} else {
		return w.InitFromObject(e, t);
	}
}
