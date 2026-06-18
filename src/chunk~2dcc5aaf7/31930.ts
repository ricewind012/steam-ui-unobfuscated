import { CCMInterfaceMessageHandlers } from "@actual_src/cminterface_messagehandlers";
import { AssertMsg } from "@actual_src/utils/assert.js";
import { bind } from "@actual_src/utils/bind.js";

import { I8, w } from "./12176.js";
import { OI } from "./12251.js";
import { pV } from "./16583.js";
import { OQ } from "./31958.js";
import { Cg } from "./34629.js";
import { TS as Config } from "./43691.js";
import { kF } from "./44846.js";
import { BT, gp, i0, qM, Sg, Uq, w0, zj } from "./48307.js";
import * as a from "./52451.js";
import { BinaryReader, BinaryWriter, Message } from "./58663.js";
import { wd as CLogger } from "./83599.js";
import { EResult, OperationResponse } from "@steamclient_types/shared.js";

class CTransportAuth_Authenticate_Request extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!CTransportAuth_Authenticate_Request.prototype.auth_key) {
			Sg(CTransportAuth_Authenticate_Request.M());
		}
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		CTransportAuth_Authenticate_Request.sm_m ||= {
			proto: CTransportAuth_Authenticate_Request,
			fields: {
				auth_key: {
					n: 1,
					br: qM.readString,
					bw: gp.writeString,
				},
			},
		};
		return CTransportAuth_Authenticate_Request.sm_m;
	}
	static MBF() {
		CTransportAuth_Authenticate_Request.sm_mbf ||= w0(
			CTransportAuth_Authenticate_Request.M(),
		);
		return CTransportAuth_Authenticate_Request.sm_mbf;
	}
	toObject(e = false) {
		return CTransportAuth_Authenticate_Request.toObject(e, this);
	}
	static toObject(e, t) {
		return BT(CTransportAuth_Authenticate_Request.M(), e, t);
	}
	static fromObject(e) {
		return Uq(CTransportAuth_Authenticate_Request.M(), e);
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportAuth_Authenticate_Request();
		return CTransportAuth_Authenticate_Request.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return zj(CTransportAuth_Authenticate_Request.MBF(), e, t);
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportAuth_Authenticate_Request.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		i0(CTransportAuth_Authenticate_Request.M(), e, t);
	}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportAuth_Authenticate_Request.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportAuth_Authenticate_Request";
	}
}

class CTransportAuth_Authenticate_Response extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CTransportAuth_Authenticate_Response.toObject(e, this);
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
		return new CTransportAuth_Authenticate_Response();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportAuth_Authenticate_Response();
		return CTransportAuth_Authenticate_Response.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportAuth_Authenticate_Response.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportAuth_Authenticate_Response.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportAuth_Authenticate_Response";
	}
}

class CTransportAuth_StartShutdown_Notification extends Message {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		Message.initialize(this, e, 0, -1, undefined, null);
	}
	toObject(e = false) {
		return CTransportAuth_StartShutdown_Notification.toObject(e, this);
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
		return new CTransportAuth_StartShutdown_Notification();
	}
	static deserializeBinary(e) {
		let t = new BinaryReader(e);
		let r = new CTransportAuth_StartShutdown_Notification();
		return CTransportAuth_StartShutdown_Notification.deserializeBinaryFromReader(
			r,
			t,
		);
	}
	static deserializeBinaryFromReader(e, t) {
		return e;
	}
	serializeBinary() {
		const e = new BinaryWriter();
		CTransportAuth_StartShutdown_Notification.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {}
	serializeBase64String() {
		const e = new BinaryWriter();
		CTransportAuth_StartShutdown_Notification.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CTransportAuth_StartShutdown_Notification";
	}
}

let TransportAuthService;
((e) => {
	e.AuthenticateHandler = {
		name: "TransportAuth.Authenticate#1",
		request: CTransportAuth_Authenticate_Request,
		response: CTransportAuth_Authenticate_Response,
	};
	e.Authenticate = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportAuth.Authenticate#1",
				I8(CTransportAuth_Authenticate_Request, e),
				CTransportAuth_Authenticate_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 3,
				},
			);
		}
	};
	e.SendMsgAuthenticate = (e, t) => {
		if ((t = t || OI().GetDefaultTransport()) == null) {
			return new Promise((e, t) => {
				console.error("Transport Error: no transport is available for request");
				t("Transport Error: no transport is available for request");
			});
		} else {
			return t.SendMsg(
				"TransportAuth.Authenticate#1",
				I8(CTransportAuth_Authenticate_Request, e),
				CTransportAuth_Authenticate_Response,
				{
					ePrivilege: 1,
					eClientExecutionSite: 3,
				},
			);
		}
	};
	e.NotifyStartShutdownHandler = {
		name: "TransportAuth.NotifyStartShutdown#1",
		request: CTransportAuth_StartShutdown_Notification,
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
				I8(CTransportAuth_StartShutdown_Notification, e),
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
				I8(CTransportAuth_StartShutdown_Notification, e),
				{
					ePrivilege: 1,
					eClientExecutionSite: 3,
				},
			);
		}
	};
})((TransportAuthService ||= {}));

interface WebSocketConnectionOptions {
	fnOnMessageHandler;
	fnOnCloseHandler;
	fnOnReconnectStartHandler?;
	fnOnReconnectFinishHandler?;
	nConnectAttemptsMax?: number;
	nConnectAttemptTimeoutMs?: number;
	bReconnectOnFailure?: boolean;
	nReconnectAttemptsMax?: number;
	nReconnectAttemptTimeoutMs?: number;
}

class CWebSocketConnection {
	m_socket: WebSocket = null;
	m_sName: string;
	m_sURL: string;
	Log = new CLogger("CWebSocketConnection", () => this.m_sName);
	m_bDisconnectRequested = false;
	m_bConnecting = false;
	m_fnOnMessageHandler;
	m_fnOnCloseHandler;
	m_fnOnReconnectStartHandler;
	m_fnOnReconnectFinishHandler;
	m_nConnectAttemptsMax: number;
	m_nConnectAttemptTimeoutMs: number;
	m_bReconnectOnFailure: boolean;
	m_nReconnectAttemptTimeoutMs: number;
	m_nReconnectAttemptsMax: number;

	constructor(sName: string, options: WebSocketConnectionOptions) {
		this.m_sName = sName;
		this.m_fnOnMessageHandler = options.fnOnMessageHandler;
		this.m_fnOnCloseHandler = options.fnOnCloseHandler;
		this.m_fnOnReconnectStartHandler =
			options.fnOnReconnectStartHandler ?? (() => {});
		this.m_fnOnReconnectFinishHandler =
			options.fnOnReconnectFinishHandler ?? (() => {});
		this.m_nConnectAttemptsMax = options.nConnectAttemptsMax ?? 8;
		this.m_nConnectAttemptTimeoutMs = options.nConnectAttemptTimeoutMs ?? 1000;
		this.m_bReconnectOnFailure = options.bReconnectOnFailure ?? false;
		this.m_nReconnectAttemptsMax = options.nReconnectAttemptsMax ?? 30000;
		this.m_nReconnectAttemptTimeoutMs =
			options.nReconnectAttemptTimeoutMs ?? 10000;
	}

	get name() {
		return this.m_sName;
	}

	async Connect(sURL: string) {
		this.m_sURL = sURL;
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

	async ConnectWithRetry(sURL: string, t, r): Promise<OperationResponse> {
		this.m_bConnecting = true;
		let nTries = 0;
		do {
			try {
				const resp = await this.ConnectToSocket(sURL, r);
				if (resp.result == EResult.OK) {
					this.m_bConnecting = false;
					return resp;
				}
				this.Log.Warning(
					`connect attempt failed: ${resp.result} - ${resp.message}`,
				);
			} catch (ex) {
				this.Log.Warning(
					`connect attempt failed: exception ${ex.name} - ${ex}`,
				);
			}
			const nTimout = this.GetInterAttemptBackoffMs(nTries);
			this.Log.Info(`connect retry: attempt:${nTries}/${t} backoff:${nTimout}`);
			await new Promise((e) => setTimeout(e, nTimout));
			this.m_socket = null;
			nTries += 1;
		} while (nTries < t);
		this.Log.Warning(
			`websocket connect retry: limit exceeeded, bailing - ${this.name}`,
		);
		this.m_bConnecting = false;
		if (this.BShouldReconnect()) {
			this.StartReconnect();
		}

		return {
			result: EResult.Fail,
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
		if ((await this.Reconnect()).result != EResult.OK) {
			this.Log.Warning("failed to re-connect to websocket after close");
			this.m_fnOnReconnectFinishHandler({
				connection: this,
				eResult: EResult.Fail,
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
			eResult: EResult.OK,
		});
	}

	async ConnectToSocket(
		sURL: string,
		nTries: number,
	): Promise<OperationResponse> {
		if (this.m_socket != null) {
			if (this.m_socket.readyState != WebSocket.OPEN) {
				this.Log.Error(
					`websocket in an unexpected state: ${this.m_socket.readyState}`,
				);
				return {
					result: EResult.Fail,
					message: "websocket in an unexpected state",
				};
			} else {
				return {
					result: EResult.OK,
					message: "ready",
				};
			}
		}

		try {
			this.m_socket = new WebSocket(sURL);
		} catch (ex) {
			this.Log.Warning("failed to initialize websocket connection");
			return {
				result: EResult.ConnectFailed,
				message: "Failed to initialize websocket connection",
			};
		}

		this.m_socket.binaryType = "arraybuffer";
		this.m_socket.onerror = this.OnSocketError;
		this.m_socket.onmessage = this.OnSocketMessage;
		this.m_socket.onopen = this.OnSocketOpen;
		this.m_socket.onclose = this.OnSocketClose;
		if (await this.WaitForSocketOpen(this.m_socket, nTries)) {
			this.Log.Info("connection ready");
			return {
				result: EResult.OK,
				message: "ready",
			};
		} else {
			this.Log.Warning("failed to reach open state");
			return {
				result: EResult.Fail,
				message: "failed to reach open state",
			};
		}
	}

	async WaitForSocketOpen(pSocket: WebSocket, nTries: number) {
		if (pSocket.readyState != WebSocket.CONNECTING) {
			return pSocket.readyState == WebSocket.OPEN;
		}

		let r = nTries / 100;
		while (pSocket.readyState == WebSocket.CONNECTING && r > 0) {
			r--;
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
		return pSocket.readyState == WebSocket.OPEN;
	}

	BCanSendMessages() {
		return this.m_socket != null && this.m_socket.readyState == WebSocket.OPEN;
	}

	@bind
	OnSocketError(e) {
		this.Log.Warning("websocket error");
	}

	@bind
	OnSocketOpen(e) {
		this.Log.Info("websocket open");
	}

	@bind
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
		const bIsExpectedToReconnect = this.BShouldReconnect();
		this.m_fnOnCloseHandler({
			connection: this,
			bError: true,
			bIsExpectedToReconnect,
		});
		if (bIsExpectedToReconnect) {
			this.StartReconnect();
		}
	}

	@bind
	async OnSocketMessage(ev: MessageEvent<Blob>) {
		this.m_fnOnMessageHandler(ev.data);
	}

	SendSerializedMessage(
		data: string | ArrayBufferLike | Blob | ArrayBufferView<ArrayBufferLike>,
	) {
		try {
			this.m_socket.send(data);
			return EResult.OK;
		} catch (e) {
			return EResult.Fail;
		}
	}
}

const WebUITransportLog = new CLogger("WebUITransport");

enum EClientExecutionSite {
	Invalid,
	SteamUI,
	Clientdll,
	Any,
}

interface WebUITransportDetails {
	connection: CWebSocketConnection;
	sUrl: string;
	sAuthKey: string;
	eClientExecutionSite: EClientExecutionSite;
}

interface PendingMethodRequest {
	m_iSeq: number;
	m_responseClass: any;
	m_fnCallback: any;
	m_fnError: (msg: string) => void;
}

export class U {
	m_iMsgSeq = 1;
	m_mapPendingMethodRequests = new Map<number, PendingMethodRequest>();
	m_messageHandlers = new CCMInterfaceMessageHandlers();
	m_mapServiceCallErrorCount = new Map<string, number>();
	m_mapConnectionDetails = new Map<
		EClientExecutionSite,
		WebUITransportDetails
	>();
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

	ReportError(msg: string) {
		WebUITransportLog.Warning(msg);
		const store = U.sm_ErrorReportingStore;
		if (store) {
			store.ReportError(new Error(msg), {
				bIncludeMessageInIdentifier: true,
				cCallsitesToIgnore: 1,
			});
		}
	}

	async Init() {
		if (!Config.IN_CLIENT) {
			return;
		}

		const info = await SteamClient.WebUITransport.GetTransportInfo();
		this.m_nMaximumMsgSizeBytes = info.nMaximumMsgSizeBytes;
		this.CreateConnection(
			EClientExecutionSite.SteamUI,
			"steamUI",
			info.portSteamUI,
			info.authKeySteamUI,
		);
		this.CreateConnection(
			EClientExecutionSite.Clientdll,
			"clientdll",
			info.portClientdll,
			info.authKeyClientdll,
		);
		OI().SetDefaultTransport(this);
		OI().SetDefaultHandlerRegistry(this.m_messageHandlers);
		TransportAuthService.RegisterForNotifyStartShutdown(this.OnStartShutdown);
	}

	get messageHandlers() {
		return this.m_messageHandlers;
	}

	SetStatusEventHandler(callback) {
		this.m_fnOnStatusEventHandler = callback;
	}

	SetReconnectErrorHandler(callback) {
		this.m_fnOnReconnectErrorHandler = callback;
	}

	CreateConnection(
		eClientExecutionSite: EClientExecutionSite,
		sName: string,
		unPort: number,
		sAuthKey: string,
	) {
		const options = {
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
		const details: WebUITransportDetails = {
			connection: new CWebSocketConnection(sName, options),
			sUrl: `ws://localhost:${unPort}/transportsocket/`,
			sAuthKey,
			eClientExecutionSite,
		};
		this.m_mapConnectionDetails.set(eClientExecutionSite, details);
	}

	SendMsg(sName: string, proto_base_msg, responseClass, n) {
		return new Promise((resolve, reject) => {
			const eClientExecutionSite = n.eClientExecutionSite;
			if (eClientExecutionSite == null || eClientExecutionSite == 0) {
				WebUITransportLog.Error(
					`SendMsg: Invalid client execution site: ${eClientExecutionSite}`,
				);
				reject(
					`Transport SendMsg: invalid client execution site ${eClientExecutionSite}`,
				);
				return;
			}

			const details = this.m_mapConnectionDetails.get(eClientExecutionSite);
			if (details == null) {
				WebUITransportLog.Error(
					`SendMsg: could not find connection for execution site: ${eClientExecutionSite}`,
				);
				reject(
					`Transport SendMsg: could not find connection for execution site ${eClientExecutionSite}`,
				);
				return;
			}

			const conn = details.connection;
			if (!conn.BCanSendMessages()) {
				const nCallErrors = this.m_mapServiceCallErrorCount.get(sName) ?? 1;
				this.m_mapServiceCallErrorCount.set(sName, nCallErrors + 1);
				const msg = `SendMsg: Attempt to send message but socket wasn't ready: ${conn.name} - ${sName}`;
				if (nCallErrors == 1) {
					this.ReportError(msg);
				}
				WebUITransportLog.Warning(`${msg} error count: ${nCallErrors}`);
				reject("Transport SendMsg: socket not ready");
				return;
			}

			const iSeq = this.m_iMsgSeq++;
			proto_base_msg.SetEMsg(146);
			proto_base_msg.Hdr().set_target_job_name(sName);
			proto_base_msg.Hdr().set_jobid_source(`${iSeq}`);
			const serialized = proto_base_msg.Serialize();
			if (serialized.byteLength >= this.m_nMaximumMsgSizeBytes) {
				WebUITransportLog.Error(
					`SendMsg: message exceeds maximum size: ${serialized.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
				);
				const e = w.Init(responseClass);
				e.Hdr().set_eresult(EResult.Fail);
				resolve(e);
				return;
			}

			if (conn.SendSerializedMessage(serialized) != EResult.OK) {
				WebUITransportLog.Error("SendMsg: Failed to send message");
				reject("Transport SendMsg: failed to send message");
				return;
			}
			this.m_mapPendingMethodRequests.set(iSeq, {
				m_iSeq: iSeq,
				m_responseClass: responseClass,
				m_fnCallback: resolve,
				m_fnError: reject,
			});
		});
	}

	SendNotification(e, proto_base_msg, r) {
		const eClientExecutionSite = r.eClientExecutionSite;
		if (eClientExecutionSite == null || eClientExecutionSite == 0) {
			WebUITransportLog.Error(
				`SendNotification: Invalid client execution site: ${eClientExecutionSite}`,
			);
			return false;
		}

		const details = this.m_mapConnectionDetails.get(eClientExecutionSite);
		if (details == null) {
			WebUITransportLog.Error(
				`SendNotification: could not find connection for execution site: ${eClientExecutionSite}`,
			);
			return false;
		}

		const conn = details.connection;
		if (!conn.BCanSendMessages()) {
			const errCount = this.m_mapServiceCallErrorCount.get(e) ?? 1;
			this.m_mapServiceCallErrorCount.set(e, errCount + 1);
			const errMsg = `SendNotification: Attempt to send message but socket wasn't ready: ${conn.name} - ${e}`;
			if (errCount == 1) {
				this.ReportError(errMsg);
			}
			WebUITransportLog.Warning(`${errMsg} error count: ${errCount}`);
			return false;
		}

		proto_base_msg.SetEMsg(146);
		proto_base_msg.Hdr().set_target_job_name(e);
		return conn.SendSerializedMessage(proto_base_msg.Serialize()) == EResult.OK;
	}

	async ConnectToSite(details: WebUITransportDetails) {
		const conn = details.connection;
		const resp = await conn.Connect(details.sUrl);
		if (resp.result != EResult.OK) {
			return resp;
		}

		if ((await this.SendAuthMessage(details)).BSuccess()) {
			return {
				result: EResult.OK,
				message: "connected",
			};
		} else {
			return {
				result: EResult.Fail,
				message: "client auth failed",
			};
		}
	}

	async MakeReady() {
		const rgPromises = [];
		for (const [t, r] of this.m_mapConnectionDetails) {
			rgPromises.push(this.ConnectToSite(r));
		}
		const rgResponses = await Promise.all(rgPromises);
		this.m_bInitialized = true;
		this.DispatchTransportStatusUpdate();
		for (const resp of rgResponses) {
			if (resp.result != EResult.OK) {
				return resp;
			}
		}

		return {
			result: EResult.OK,
			message: "ready",
		};
	}

	GetConnectionDetails(conn: CWebSocketConnection) {
		for (const [t, details] of this.m_mapConnectionDetails) {
			if (details.connection === conn) {
				return details;
			}
		}

		WebUITransportLog.Error(
			"GetConnectionDetails: failed to identify connection",
		);
		return null;
	}

	DispatchTransportStatusUpdate() {
		if (!this.m_fnOnStatusEventHandler) {
			return;
		}

		let bConnected = true;
		for (const [t, details] of this.m_mapConnectionDetails) {
			if (!details.connection.BCanSendMessages()) {
				bConnected = false;
			}
		}
		this.m_fnOnStatusEventHandler({
			bConnected,
		});
	}

	@bind
	OnWebsocketReconnectStart(e) {
		this.DispatchTransportStatusUpdate();
	}

	@bind
	OnWebsocketReconnectFinish(e) {
		this.DispatchTransportStatusUpdate();
		if (e.eResult != 1) {
			WebUITransportLog.Warning(
				"OnWebsocketReconnect: Failed to reconnect to steam client",
			);
			this.m_fnOnReconnectErrorHandler?.({});
			return;
		}
		this.FailAllPendingRequests();
		const t = this.GetConnectionDetails(e.connection);
		if (t) {
			this.SendAuthMessage(t);
		}
	}

	@bind
	OnWebsocketClose(e) {
		if (!e.bIsExpectedToReconnect) {
			this.FailAllPendingRequests();
		}
	}

	@bind
	OnWebsocketMessage(e) {
		const t = new pV(e);
		const r = w.InitHeaderFromPacket(t);
		if (r.Hdr().jobid_target() && r.Hdr().jobid_target() !== kF) {
			this.DispatchMethodResponse(r);
		} else {
			this.DispatchNotification(r);
		}
	}

	DispatchMethodResponse(e) {
		const t = parseInt(e.Hdr().jobid_target());
		const r = this.m_mapPendingMethodRequests.get(t);
		if (r == null) {
			AssertMsg(false, "Transport Error: no pending callback for request");
			return;
		}
		AssertMsg(t == r.m_iSeq, "Transport Error: mistmatched request sequence");
		this.m_mapPendingMethodRequests.delete(t);
		const n = w.InitFromMsg(r.m_responseClass, e);
		r.m_fnCallback(n);
	}

	DispatchNotification(e) {
		this.m_messageHandlers.DispatchMsgToHandlers(e, (e) => {
			AssertMsg(
				false,
				"Transport Error: A notification should not generate a response",
			);
		});
	}

	FailAllPendingRequests() {
		for (const [e, req] of this.m_mapPendingMethodRequests) {
			this.ReportError(
				`FailAllPendingRequests: forcing failure for request: ${req.m_responseClass.name}`,
			);
			let responseMsg = w.Init(req.m_responseClass);
			responseMsg.Hdr().set_eresult(EResult.Fail);
			req.m_fnCallback(responseMsg);
		}
		this.m_mapPendingMethodRequests.clear();
	}

	async SendAuthMessage(details: WebUITransportDetails) {
		const name = TransportAuthService.AuthenticateHandler.name;
		const r = {
			eClientExecutionSite: details.eClientExecutionSite,
		};
		const authReq = w.Init(CTransportAuth_Authenticate_Request);
		authReq.Hdr().set_webui_auth_key(details.sAuthKey);
		return await this.SendMsg(
			name,
			authReq,
			TransportAuthService.AuthenticateHandler.response,
			r,
		);
	}

	@bind
	OnStartShutdown(e) {
		for (const [e, details] of this.m_mapConnectionDetails) {
			details.connection.PrepareForShutdown();
		}
		return EResult.OK;
	}
}

export const N = new U();
