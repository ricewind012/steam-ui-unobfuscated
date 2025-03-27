import n, { Cg } from "./34629.js";
import i from "./44846.js";
import a from "./52451.js";
import s from "./16583.js";
import o, { I8 } from "./12176.js";
import l, { OI } from "./12251.js";
import c from "./83599.js";
import m, { w } from "./49455.js";
import u from "./25265.js";
import d from "./58663.js";
import A from "./48307.js";
import f from "./43691.js";
import { OQ } from "./31958.js";
const d_Message = d.Message;
class g extends d_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!g.prototype.auth_key) {
			A.Sg(g.M());
		}
		d_Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		g.sm_m ||= {
			proto: g,
			fields: {
				auth_key: {
					n: 1,
					br: A.qM.readString,
					bw: A.gp.writeString,
				},
			},
		};
		return g.sm_m;
	}
	static MBF() {
		g.sm_mbf ||= A.w0(g.M());
		return g.sm_mbf;
	}
	toObject(e = false) {
		return g.toObject(e, this);
	}
	static toObject(e, t) {
		return A.BT(g.M(), e, t);
	}
	static fromObject(e) {
		return A.Uq(g.M(), e);
	}
	static deserializeBinary(e) {
		let t = new d.BinaryReader(e);
		let r = new g();
		return g.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return A.zj(g.MBF(), e, t);
	}
	serializeBinary() {
		const e = new d.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		A.i0(g.M(), e, t);
	}
	serializeBase64String() {
		const e = new d.BinaryWriter();
		g.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportAuth_Authenticate_Request";
	}
}
class h extends d_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		d_Message.initialize(this, e, 0, -1, undefined, null);
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
		let t = new d.BinaryReader(e);
		let r = new h();
		return h.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new d.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new d.BinaryWriter();
		h.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportAuth_Authenticate_Response";
	}
}
class C extends d_Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		d_Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return C.toObject(e, this);
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
		return new C();
	}
	static deserializeBinary(e) {
		let t = new d.BinaryReader(e);
		let r = new C();
		return C.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new d.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new d.BinaryWriter();
		C.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportAuth_StartShutdown_Notification";
	}
}
let _;
((e) => {
	e.AuthenticateHandler = {
		name: "TransportAuth.Authenticate#1",
		request: g,
		response: h,
	};
	e.Authenticate = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("TransportAuth.Authenticate#1", I8(g, e), h, {
				ePrivilege: 1,
				eClientExecutionSite: 3,
			});
		}
	};
	e.SendMsgAuthenticate = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg("TransportAuth.Authenticate#1", I8(g, e), h, {
				ePrivilege: 1,
				eClientExecutionSite: 3,
			});
		}
	};
	e.NotifyStartShutdownHandler = {
		name: "TransportAuth.NotifyStartShutdown#1",
		request: C,
	};
	e.RegisterForNotifyStartShutdown = (t, r) => {
		if ((r = r || OI().GetDefaultHandlerRegistry()) == null) {
			console.error(
				"Transport Error: no default registry is available for request",
			);
			return null;
		} else {
			return r.RegisterServiceNotificationHandler(
				e.NotifyStartShutdownHandler,
				t,
			);
		}
	};
	e.NotifyStartShutdown = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportAuth.NotifyStartShutdown#1",
				I8(C, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 3,
				},
			);
		}
	};
	e.SendMsgNotifyStartShutdown = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			console.error("Transport Error: no transport is available for request");
			return false;
		} else {
			return t.SendNotification(
				"TransportAuth.NotifyStartShutdown#1",
				I8(C, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 3,
				},
			);
		}
	};
})((_ ||= {}));
class y {
	m_socket = null;
	m_sName;
	m_sURL;
	Log = new c.wd("CWebSocketConnection", () => this.m_sName);
	m_bDisconnectRequested = false;
	m_bConnecting = false;
	m_fnOnMessageHandler;
	m_fnOnCloseHandler;
	m_fnOnReconnectStartHandler;
	m_fnOnReconnectFinishHandler;
	m_nConnectAttemptsMax;
	m_nConnectAttemptTimeoutMs;
	m_bReconnectOnFailure;
	m_nReconnectAttemptTimeoutMs;
	m_nReconnectAttemptsMax;
	constructor(e, t) {
		this.m_sName = e;
		this.m_fnOnMessageHandler = t.fnOnMessageHandler;
		this.m_fnOnCloseHandler = t.fnOnCloseHandler;
		this.m_fnOnReconnectStartHandler =
			t.fnOnReconnectStartHandler ?? (() => {});
		this.m_fnOnReconnectFinishHandler =
			t.fnOnReconnectFinishHandler ?? (() => {});
		this.m_nConnectAttemptsMax = t.nConnectAttemptsMax ?? 8;
		this.m_nConnectAttemptTimeoutMs = t.nConnectAttemptTimeoutMs ?? 1000;
		this.m_bReconnectOnFailure = t.bReconnectOnFailure ?? false;
		this.m_nReconnectAttemptsMax = t.nReconnectAttemptsMax ?? 30000;
		this.m_nReconnectAttemptTimeoutMs = t.nReconnectAttemptTimeoutMs ?? 10000;
	}
	get name() {
		return this.m_sName;
	}
	async Connect(e) {
		this.m_sURL = e;
		return this.ConnectWithRetry(
			this.m_sURL,
			this.m_nConnectAttemptsMax,
			this.m_nConnectAttemptTimeoutMs,
		);
	}
	async Reconnect() {
		return this.ConnectWithRetry(
			this.m_sURL,
			this.m_nReconnectAttemptsMax,
			this.m_nReconnectAttemptTimeoutMs,
		);
	}
	GetInterAttemptBackoffMs(e) {
		return OQ(e, 1, 5) * 1000;
	}
	async ConnectWithRetry(e, t, r) {
		this.m_bConnecting = true;
		let n = 0;
		do {
			try {
				const t = await this.ConnectToSocket(e, r);
				if (t.result == 1) {
					this.m_bConnecting = false;
					return t;
				}
				this.Log.Warning(`connect attempt failed: ${t.result} - ${t.message}`);
			} catch (e) {
				this.Log.Warning(`connect attempt failed: exception ${e.name} - ${e}`);
			}
			const i = this.GetInterAttemptBackoffMs(n);
			this.Log.Info(`connect retry: attempt:${n}/${t} backoff:${i}`);
			await new Promise((e) => setTimeout(e, i));
			this.m_socket = null;
			n += 1;
		} while (n < t);
		this.Log.Warning(
			`websocket connect retry: limit exceeeded, bailing - ${this.name}`,
		);
		this.m_bConnecting = false;
		if (this.BShouldReconnect()) {
			this.StartReconnect();
		}
		return {
			result: 2,
			message: "not ready, exceeded retry count",
		};
	}
	Disconnect() {
		this.Log.Info("disconnect requested");
		this.m_bDisconnectRequested = true;
		this.m_socket.close();
	}
	PrepareForShutdown() {
		this.Log.Info("shutdown pending");
		this.m_bDisconnectRequested = true;
	}
	BShouldReconnect() {
		return (
			!this.m_bConnecting &&
			!!this.m_bReconnectOnFailure &&
			!this.m_bDisconnectRequested
		);
	}
	async StartReconnect() {
		this.Log.Info("start reconnect");
		this.m_socket = null;
		this.m_fnOnReconnectStartHandler({
			connection: this,
		});
		if ((await this.Reconnect()).result != 1) {
			this.Log.Warning("failed to re-connect to websocket after close");
			this.m_fnOnReconnectFinishHandler({
				connection: this,
				eResult: 2,
			});
			this.m_fnOnCloseHandler({
				connection: this,
				bError: true,
				bIsExpectedToReconnect: false,
			});
			return;
		}
		this.Log.Info("reconnect successful");
		this.m_fnOnReconnectFinishHandler({
			connection: this,
			eResult: 1,
		});
	}
	async ConnectToSocket(e, t) {
		if (this.m_socket != null) {
			if (this.m_socket.readyState != WebSocket.OPEN) {
				this.Log.Error(
					`websocket in an unexpected state: ${this.m_socket.readyState}`,
				);
				return {
					result: 2,
					message: "websocket in an unexpected state",
				};
			} else {
				return {
					result: 1,
					message: "ready",
				};
			}
		}
		try {
			this.m_socket = new WebSocket(e);
		} catch (e) {
			this.Log.Warning("failed to initialize websocket connection");
			return {
				result: 35,
				message: "Failed to initialize websocket connection",
			};
		}
		this.m_socket.binaryType = "arraybuffer";
		this.m_socket.onerror = this.OnSocketError;
		this.m_socket.onmessage = this.OnSocketMessage;
		this.m_socket.onopen = this.OnSocketOpen;
		this.m_socket.onclose = this.OnSocketClose;
		if (await this.WaitForSocketOpen(this.m_socket, t)) {
			this.Log.Info("connection ready");
			return {
				result: 1,
				message: "ready",
			};
		} else {
			this.Log.Warning("failed to reach open state");
			return {
				result: 2,
				message: "failed to reach open state",
			};
		}
	}
	async WaitForSocketOpen(e, t) {
		if (e.readyState != WebSocket.CONNECTING) {
			return e.readyState == WebSocket.OPEN;
		}
		let r = t / 100;
		while (e.readyState == WebSocket.CONNECTING && r > 0) {
			r--;
			await new Promise((e) => setTimeout(e, 100));
		}
		return e.readyState == WebSocket.OPEN;
	}
	BCanSendMessages() {
		return this.m_socket != null && this.m_socket.readyState == WebSocket.OPEN;
	}
	OnSocketError(e) {
		this.Log.Warning("websocket error");
	}
	OnSocketOpen(e) {
		this.Log.Info("websocket open");
	}
	OnSocketClose(e) {
		if (this.m_bDisconnectRequested) {
			this.Log.Info("websocket closed");
			this.m_fnOnCloseHandler({
				connection: this,
				bError: false,
				bIsExpectedToReconnect: false,
			});
			return;
		}
		if (this.m_bConnecting) {
			return;
		}
		this.Log.Warning("websocket unexpectedly closed");
		const t = this.BShouldReconnect();
		this.m_fnOnCloseHandler({
			connection: this,
			bError: true,
			bIsExpectedToReconnect: t,
		});
		if (t) {
			this.StartReconnect();
		}
	}
	async OnSocketMessage(e) {
		this.m_fnOnMessageHandler(e.data);
	}
	SendSerializedMessage(e) {
		try {
			this.m_socket.send(e);
			return 1;
		} catch (e) {
			return 2;
		}
	}
}
Cg([a.oI], y.prototype, "OnSocketError", null);
Cg([a.oI], y.prototype, "OnSocketOpen", null);
Cg([a.oI], y.prototype, "OnSocketClose", null);
Cg([a.oI], y.prototype, "OnSocketMessage", null);
const S = new c.wd("WebUITransport");
export class U {
	m_iMsgSeq = 1;
	m_mapPendingMethodRequests = new Map();
	m_messageHandlers = new u.$();
	m_mapServiceCallErrorCount = new Map();
	m_mapConnectionDetails = new Map();
	m_fnOnStatusEventHandler;
	m_fnOnReconnectErrorHandler;
	m_bInitialized = false;
	m_nMaximumMsgSizeBytes = 1024;
	static sm_ErrorReportingStore;
	static InstallErrorReportingStore(e) {
		this.sm_ErrorReportingStore = e;
	}
	BIsValid() {
		return this.m_bInitialized;
	}
	GetMaximumMsgSizeBytes() {
		return this.m_nMaximumMsgSizeBytes;
	}
	TEST_GetMaximumMsgBodySizeBytes() {
		return (
			this.m_nMaximumMsgSizeBytes - this.TEST_GetMsgHeaderEstimatedSizeBytes()
		);
	}
	TEST_GetMsgHeaderEstimatedSizeBytes() {
		return 128;
	}
	TEST_GetExcessivelyLargeBodySize() {
		return 67108864;
	}
	ReportError(e) {
		S.Warning(e);
		const t = U.sm_ErrorReportingStore;
		if (t) {
			t.ReportError(new Error(e), {
				bIncludeMessageInIdentifier: true,
				cCallsitesToIgnore: 1,
			});
		}
	}
	async Init() {
		if (!f.TS.IN_CLIENT) {
			return;
		}
		const e = await SteamClient.WebUITransport.GetTransportInfo();
		this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes;
		this.CreateConnection(1, "steamUI", e.portSteamUI, e.authKeySteamUI);
		this.CreateConnection(2, "clientdll", e.portClientdll, e.authKeyClientdll);
		OI().SetDefaultTransport(this);
		OI().SetDefaultHandlerRegistry(this.m_messageHandlers);
		_.RegisterForNotifyStartShutdown(this.OnStartShutdown);
	}
	get messageHandlers() {
		return this.m_messageHandlers;
	}
	SetStatusEventHandler(e) {
		this.m_fnOnStatusEventHandler = e;
	}
	SetReconnectErrorHandler(e) {
		this.m_fnOnReconnectErrorHandler = e;
	}
	CreateConnection(e, t, r, n) {
		const i = {
			bReconnectOnFailure: true,
			fnOnMessageHandler: this.OnWebsocketMessage,
			fnOnCloseHandler: this.OnWebsocketClose,
			fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
			fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
			nConnectAttemptsMax: 8,
			nConnectAttemptTimeoutMs: 10000,
			nReconnectAttemptsMax: 8,
			nReconnectAttemptTimeoutMs: 10000,
		};
		const a = {
			connection: new y(t, i),
			sUrl: `ws://localhost:${r}/transportsocket/`,
			sAuthKey: n,
			eClientExecutionSite: e,
		};
		this.m_mapConnectionDetails.set(e, a);
	}
	SendMsg(e, t, r, n) {
		return new Promise((i, a) => {
			const s = n.eClientExecutionSite;
			if (s == null || s == 0) {
				S.Error(`SendMsg: Invalid client execution site: ${s}`);
				a(`Transport SendMsg: invalid client execution site ${s}`);
				return;
			}
			const l = this.m_mapConnectionDetails.get(s);
			if (l == null) {
				S.Error(`SendMsg: could not find connection for execution site: ${s}`);
				a(
					`Transport SendMsg: could not find connection for execution site ${s}`,
				);
				return;
			}
			const c = l.connection;
			if (!c.BCanSendMessages()) {
				const t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
				this.m_mapServiceCallErrorCount.set(e, t + 1);
				const r = `SendMsg: Attempt to send message but socket wasn't ready: ${c.name} - ${e}`;
				if (t == 1) {
					this.ReportError(r);
				}
				S.Warning(`${r} error count: ${t}`);
				a("Transport SendMsg: socket not ready");
				return;
			}
			const m = this.m_iMsgSeq++;
			t.SetEMsg(146);
			t.Hdr().set_target_job_name(e);
			t.Hdr().set_jobid_source(`${m}`);
			const u = t.Serialize();
			if (u.byteLength >= this.m_nMaximumMsgSizeBytes) {
				S.Error(
					`SendMsg: message exceeds maximum size: ${u.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
				);
				const e = o.w.Init(r);
				e.Hdr().set_eresult(2);
				i(e);
				return;
			}
			if (c.SendSerializedMessage(u) != 1) {
				S.Error("SendMsg: Failed to send message");
				a("Transport SendMsg: failed to send message");
				return;
			}
			this.m_mapPendingMethodRequests.set(m, {
				m_iSeq: m,
				m_responseClass: r,
				m_fnCallback: i,
				m_fnError: a,
			});
		});
	}
	SendNotification(e, t, r) {
		const n = r.eClientExecutionSite;
		if (n == null || n == 0) {
			S.Error(`SendNotification: Invalid client execution site: ${n}`);
			return false;
		}
		const i = this.m_mapConnectionDetails.get(n);
		if (i == null) {
			S.Error(
				`SendNotification: could not find connection for execution site: ${n}`,
			);
			return false;
		}
		const a = i.connection;
		if (!a.BCanSendMessages()) {
			const t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
			this.m_mapServiceCallErrorCount.set(e, t + 1);
			const r = `SendNotification: Attempt to send message but socket wasn't ready: ${a.name} - ${e}`;
			if (t == 1) {
				this.ReportError(r);
			}
			S.Warning(`${r} error count: ${t}`);
			return false;
		}
		t.SetEMsg(146);
		t.Hdr().set_target_job_name(e);
		return a.SendSerializedMessage(t.Serialize()) == 1;
	}
	async ConnectToSite(e) {
		const t = e.connection;
		const r = await t.Connect(e.sUrl);
		if (r.result != 1) {
			return r;
		}
		if ((await this.SendAuthMessage(e)).BSuccess()) {
			return {
				result: 1,
				message: "connected",
			};
		} else {
			return {
				result: 2,
				message: "client auth failed",
			};
		}
	}
	async MakeReady() {
		const e = [];
		for (const [t, r] of this.m_mapConnectionDetails) {
			e.push(this.ConnectToSite(r));
		}
		const t = await Promise.all(e);
		this.m_bInitialized = true;
		this.DispatchTransportStatusUpdate();
		for (const e of t) {
			if (e.result != 1) {
				return e;
			}
		}
		return {
			result: 1,
			message: "ready",
		};
	}
	GetConnectionDetails(e) {
		for (const [t, r] of this.m_mapConnectionDetails) {
			if (r.connection === e) {
				return r;
			}
		}
		S.Error("GetConnectionDetails: failed to identify connection");
		return null;
	}
	DispatchTransportStatusUpdate() {
		if (!this.m_fnOnStatusEventHandler) {
			return;
		}
		let e = true;
		for (const [t, r] of this.m_mapConnectionDetails) {
			if (!r.connection.BCanSendMessages()) {
				e = false;
			}
		}
		this.m_fnOnStatusEventHandler({
			bConnected: e,
		});
	}
	OnWebsocketReconnectStart(e) {
		this.DispatchTransportStatusUpdate();
	}
	OnWebsocketReconnectFinish(e) {
		this.DispatchTransportStatusUpdate();
		if (e.eResult != 1) {
			S.Warning("OnWebsocketReconnect: Failed to reconnect to steam client");
			this.m_fnOnReconnectErrorHandler?.({});
			return;
		}
		this.FailAllPendingRequests();
		const t = this.GetConnectionDetails(e.connection);
		if (t) {
			this.SendAuthMessage(t);
		}
	}
	OnWebsocketClose(e) {
		if (!e.bIsExpectedToReconnect) {
			this.FailAllPendingRequests();
		}
	}
	OnWebsocketMessage(e) {
		const t = new s.pV(e);
		const r = o.w.InitHeaderFromPacket(t);
		if (r.Hdr().jobid_target() && r.Hdr().jobid_target() !== i.kF) {
			this.DispatchMethodResponse(r);
		} else {
			this.DispatchNotification(r);
		}
	}
	DispatchMethodResponse(e) {
		const t = parseInt(e.Hdr().jobid_target());
		const r = this.m_mapPendingMethodRequests.get(t);
		if (r == null) {
			w(false, "Transport Error: no pending callback for request");
			return;
		}
		w(t == r.m_iSeq, "Transport Error: mistmatched request sequence");
		this.m_mapPendingMethodRequests.delete(t);
		const n = o.w.InitFromMsg(r.m_responseClass, e);
		r.m_fnCallback(n);
	}
	DispatchNotification(e) {
		this.m_messageHandlers.DispatchMsgToHandlers(e, (e) => {
			w(
				false,
				"Transport Error: A notification should not generate a response",
			);
		});
	}
	FailAllPendingRequests() {
		for (const [e, t] of this.m_mapPendingMethodRequests) {
			this.ReportError(
				`FailAllPendingRequests: forcing failure for request: ${t.m_responseClass.name}`,
			);
			let e = o.w.Init(t.m_responseClass);
			e.Hdr().set_eresult(2);
			t.m_fnCallback(e);
		}
		this.m_mapPendingMethodRequests.clear();
	}
	async SendAuthMessage(e) {
		const t = _.AuthenticateHandler.name;
		const r = {
			eClientExecutionSite: e.eClientExecutionSite,
		};
		const n = o.w.Init(g);
		n.Hdr().set_webui_auth_key(e.sAuthKey);
		return await this.SendMsg(t, n, _.AuthenticateHandler.response, r);
	}
	OnStartShutdown(e) {
		for (const [e, t] of this.m_mapConnectionDetails) {
			t.connection.PrepareForShutdown();
		}
		return 1;
	}
}
Cg([a.oI], U.prototype, "OnWebsocketReconnectStart", null);
Cg([a.oI], U.prototype, "OnWebsocketReconnectFinish", null);
Cg([a.oI], U.prototype, "OnWebsocketClose", null);
Cg([a.oI], U.prototype, "OnWebsocketMessage", null);
Cg([a.oI], U.prototype, "OnStartShutdown", null);
export const N = new U();
