import { Cg } from "./34629.js";
import i from "./51297.js";
import a, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import o from "./31930.js";
import l from "./93960.js";
const c = new (require(/*webcrack:missing*/ "./83599.js").wd)(
	"WebUITransportStore",
);
class m {
	m_bConnected = false;
	m_transport;
	m_nConnectCount = 0;
	constructor() {
		Gn(this);
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
Cg([a.sH], m.prototype, "m_bConnected", undefined);
Cg([l.o], m.prototype, "OnConnectionStatus", null);
Cg([l.o], m.prototype, "OnReconnectError", null);
export const r = new m();
export function q() {
	return {
		bConnected: q3(() => r.m_bConnected),
	};
}
