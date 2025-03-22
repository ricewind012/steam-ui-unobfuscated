export class pV {
	m_nOffset;
	m_nLength;
	m_viewPacket;
	m_rgubPacket;
	m_iGet;
	m_iPut;
	constructor(e, t = 0, n) {
		this.m_nOffset = t || 0;
		if (e instanceof Uint8Array || e instanceof DataView) {
			this.m_nLength = n || e.byteLength - this.m_nOffset;
			this.m_nOffset += e.byteOffset;
			this.m_viewPacket = new DataView(
				e.buffer,
				this.m_nOffset,
				this.m_nLength,
			);
		} else {
			this.m_nLength = n || e.byteLength - this.m_nOffset;
			this.m_viewPacket = new DataView(e, this.m_nOffset, this.m_nLength);
		}
		this.m_rgubPacket = new Uint8Array(
			this.m_viewPacket.buffer,
			this.m_viewPacket.byteOffset,
			this.m_viewPacket.byteLength,
		);
		this.m_iGet = 0;
		this.m_iPut = 0;
	}
	TellGet() {
		return this.m_iGet + this.m_viewPacket.byteOffset;
	}
	GetPacket() {
		return this.m_viewPacket.buffer;
	}
	GetUint8() {
		return this.m_viewPacket.getUint8(this.m_iGet++);
	}
	GetUint32(e = true) {
		const t = this.m_viewPacket.getUint32(this.m_iGet, e);
		this.m_iGet += 4;
		return t;
	}
	SeekGetHead(e = 0) {
		this.m_iGet = e || 0;
	}
	SeekGetCurrent(e) {
		this.m_iGet += e;
	}
	TellPut() {
		return this.m_iPut + this.m_viewPacket.byteOffset;
	}
	TellMaxPut() {
		return this.m_viewPacket.byteLength;
	}
	PutUint8(e) {
		this.m_viewPacket.setUint8(this.m_iPut++, e);
	}
	PutUint32(e, t = true) {
		this.m_viewPacket.setUint32(this.m_iPut, e, t);
		this.m_iPut += 4;
	}
	PutBytes(e) {
		this.m_rgubPacket.set(e, this.m_iPut);
		this.m_iPut += e.length;
	}
	SeekPut(e) {
		this.m_iPut += e;
	}
	GetCountBytesRemaining() {
		return this.m_viewPacket.byteLength - this.m_iGet;
	}
}
const i = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
];
export function Kx(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) {
		const r = e[n];
		t += i[r >>> 4] + i[r & 15];
	}
	return t;
}
export function w(e) {
	const t = new Uint8Array(e.length / 2);
	for (let n = 0; n < e.length - 1; n += 2) {
		t[n / 2] = parseInt(e.substr(n, 2), 16);
	}
	return t;
}
