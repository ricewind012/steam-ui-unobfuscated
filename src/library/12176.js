import r from "./58663.js";
import "./1691.js";
import i from "./29218.js";
import s from "./16583.js";
import "./36229.js";
export class lI {
	static sm_ErrorReportingStore;
	static InstallErrorReportingStore(e) {
		this.sm_ErrorReportingStore = e;
	}
	static InitHeaderFromPacket(e) {
		return new lI(undefined, e);
	}
	m_eMsg;
	m_bValid;
	m_netPacket;
	m_cubHeader;
	m_header;
	m_body;
	constructor(e, t, n, s, o, a) {
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
			this.m_header = new i.LH(null);
			this.m_bValid = true;
			if (t) {
				this.m_netPacket = t;
				this.m_netPacket.SeekGetHead();
				this.m_eMsg = this.m_netPacket.GetUint32();
				if (this.m_eMsg & 2147483648) {
					this.m_eMsg = this.m_eMsg & 2147483647;
					this.m_cubHeader = this.m_netPacket.GetUint32();
					try {
						i.LH.deserializeBinaryFromReader(
							this.m_header,
							new r.BinaryReader(
								this.m_netPacket.GetPacket(),
								this.m_netPacket.TellGet(),
								this.m_cubHeader,
							),
						);
						this.m_netPacket.SeekGetCurrent(this.m_cubHeader);
						if (n) {
							this.InitForType(n);
						}
					} catch (e) {
						console.error("Exception deserializing protobuf", e);
						this.m_bValid = false;
					}
				} else {
					this.m_bValid = false;
				}
			} else {
				if (e) {
					this.m_eMsg = e;
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
	InitForType(e) {
		this.m_body = new e();
		if (this.m_netPacket) {
			this.m_netPacket.SeekGetHead(8 + this.m_cubHeader);
			this.ReadBodyFromBuffer(e, this.m_netPacket);
		}
	}
	ReadBodyFromBuffer(e, t) {
		try {
			e.deserializeBinaryFromReader(
				this.m_body,
				new r.BinaryReader(
					t.GetPacket(),
					t.TellGet(),
					t.GetCountBytesRemaining(),
				),
			);
		} catch (e) {
			this.m_bValid = false;
			const lI_sm_ErrorReportingStore = lI.sm_ErrorReportingStore;
			const n = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
			if (lI_sm_ErrorReportingStore) {
				lI_sm_ErrorReportingStore.ReportError(new Error(n), {
					bIncludeMessageInIdentifier: true,
				});
			}
			console.warn(n);
			console.log(e.stack || e);
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
	SetEMsg(e) {
		this.m_eMsg = e;
	}
	GetEResult() {
		return this.Hdr().eresult();
	}
	BSuccess() {
		return this.Hdr().eresult() == 1;
	}
	GetErrorMessage() {
		if (this.Hdr().error_message()) {
			return this.Hdr().error_message();
		} else {
			return `eresult ${this.Hdr().eresult()}`;
		}
	}
	Serialize() {
		const e = this.m_header.serializeBinary();
		const t = this.m_body.serializeBinary();
		const n = this.m_eMsg | 2147483648;
		const r = new Uint8Array(8 + e.length + t.length);
		const i = new s.pV(r);
		i.PutUint32(n);
		i.PutUint32(e.length);
		i.PutBytes(e);
		i.PutBytes(t);
		return r;
	}
	SerializeBody() {
		const e = this.m_body.serializeBinary();
		const t = new Uint8Array(e.length);
		new s.pV(t).PutBytes(e);
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
	SetBodyFields(e) {
		for (const t in e) {
			if (Array.isArray(e[t])) {
				if (this.Body()[`add_${t}`]) {
					e[t].forEach((e) => {
						this.Body()[`add_${t}`](e);
					});
				}
			} else if (this.Body()[`set_${t}`]) {
				this.Body()[`set_${t}`](e[t]);
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
