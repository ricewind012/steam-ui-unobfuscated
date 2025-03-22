var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./51297.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require("./31930.js");
var l = require(/*webcrack:missing*/ "./93960.js");
const c = new (require(/*webcrack:missing*/ "./83599.js").wd)(
	"WebUITransportStore",
);
class m {
	m_bConnected = false;
	m_transport;
	m_nConnectCount = 0;
	constructor() {
		(0, a.Gn)(this);
	}
	GetTransport() {
		return this.m_transport;
	}
	async Init() {
		this.m_transport = o.N;
		await this.m_transport.Init();
		this.m_transport.SetStatusEventHandler(this.OnConnectionStatus);
		this.m_transport.SetReconnectErrorHandler(this.OnReconnectError);
		if ((await this.m_transport.MakeReady()).result != 1) {
			await this.NotifyTransportFailure();
		}
	}
	OnConnectionStatus(e) {
		c.Info("Connection status:", e.bConnected ? "connected" : "disconnected");
		this.m_bConnected = e.bConnected;
		if (this.m_bConnected) {
			this.m_nConnectCount++;
		}
	}
	OnReconnectError(e) {
		this.NotifyTransportFailure();
	}
	NotifyTransportFailure() {
		const e = new i.YX();
		e.set_connect_count(this.m_nConnectCount);
		return SteamClient.WebUITransport.NotifyTransportFailure(
			e.serializeBase64String(),
		);
	}
	InstallErrorReportingStore(e) {
		this.m_transport.messageHandlers.InstallErrorReportingStore(e);
	}
}
(0, n.Cg)([a.sH], m.prototype, "m_bConnected", undefined);
(0, n.Cg)([l.o], m.prototype, "OnConnectionStatus", null);
(0, n.Cg)([l.o], m.prototype, "OnReconnectError", null);
export const r = new m();
export function q() {
	return {
		bConnected: (0, s.q3)(() => r.m_bConnected),
	};
}
