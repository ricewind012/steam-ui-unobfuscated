import {
	action,
	autorun,
	IReactionDisposer,
	makeAutoObservable,
	observable,
} from "mobx";

import { EMsgToString } from "@actual_src/cminterface_emsg_utils";
import { CCMInterfaceMessageHandlers } from "@actual_src/cminterface_messagehandlers.js";
import { BSharedJSContextHasMethod } from "@actual_src/steamclient/clientinterfacehelpers.js";
import { AssertMsg } from "@actual_src/utils/assert.js";
import { CCallbackList } from "@actual_src/utils/callbackutils/index.js";
import { GetUnixTime } from "@actual_src/utils/time.js";

import { b as CSteamID } from "../src/library/8573.js";
import {
	lI as CBaseProtoBufMsg,
	w as CProtoBufMsg,
} from "../src/library/12176.js";
import { pV } from "../src/library/16583.js";
import { gF } from "../src/library/29218.js";
import { kF } from "../src/library/44846.js";
import { HW } from "../src/library/49395.js";
import { TS as Config, iA } from "../src/library/72476.js";
import { el } from "../src/library/82755.js";
import { c1, dX, Q_, Sb, s5 } from "../src/library/94195.js";
import { bg, iI } from "./37322.js";
import { inflate } from "./53048.js";
import * as E from "./83957.js";
import { LogonInfo } from "@steamclient_types/SharedConnection.js";
import { EResult } from "@steamclient_types/shared.js";

type EServerType = number;

class CCMCallbackList {
	m_bRunOnce = false;
	m_ClientConnectionCallbacks = new CCallbackList();
	m_mapServerTypeCallbacks = new Map();

	constructor(bRunOnce = false) {
		this.m_bRunOnce = bRunOnce;
	}

	RunCallbacks(eServerType: EServerType, ...args) {
		if (eServerType === undefined) {
			this.m_ClientConnectionCallbacks.Dispatch(...args);
			if (this.m_bRunOnce) {
				this.m_ClientConnectionCallbacks.ClearAllCallbacks();
			}
		} else if (this.m_mapServerTypeCallbacks.has(eServerType)) {
			this.m_mapServerTypeCallbacks.get(eServerType).Dispatch(...args);
			if (this.m_bRunOnce) {
				this.m_mapServerTypeCallbacks.delete(eServerType);
			}
		}
	}

	RunAllCallbacks(vecServerTypes: EServerType[], ...args) {
		this.RunCallbacks(undefined, ...args);
		vecServerTypes.forEach((e) => this.RunCallbacks(e, ...args));
	}

	AddCallback(callback: () => void, eServerType?: EServerType) {
		let callbacks = this.m_ClientConnectionCallbacks;
		if (eServerType !== undefined) {
			if (!this.m_mapServerTypeCallbacks.has(eServerType)) {
				this.m_mapServerTypeCallbacks.set(eServerType, new CCallbackList());
			}
			callbacks = this.m_mapServerTypeCallbacks.get(eServerType);
		}
		return callbacks.Register(callback);
	}
}

abstract class CMInterface {
	@observable m_steamid = new CSteamID();
	@observable m_bLoggedOn = false;
	@observable m_bCompletedInitialConnect = false;
	@observable m_unAccountFlags = 0;
	@observable m_strIPCountry = "";
	@observable m_strPersonaName = "";
	@observable m_rtReconnectThrottleStart = 0;
	@observable m_rtReconnectThrottleExpiration = 0;
	@observable m_bConnected = false;
	m_bConnectionFailed = false;
	m_ServiceTransport;
	m_onConnect;
	m_setConnectedServers = new Set<EServerType>();
	m_callbacksOnConnectOneTime = new CCMCallbackList(true);
	m_callbacksOnConnect = new CCMCallbackList();
	m_callbacksOnDisconnect = new CCMCallbackList();
	m_callbacksOnDisconnectOneTime = new CCMCallbackList(true);
	m_bForceDisconnect = false;
	@observable m_bPerformedInitialClockAdjustment = false;
	m_nWallClockDriftMS = 0;
	m_nPerfClockServerMSOffset = new Date().getTime() - performance.now();
	m_messageHandlers = new CCMInterfaceMessageHandlers();

	abstract Disconnect(): void;
	abstract SendInternal: any;
	abstract SendMsgAndAwaitResponse: any;

	constructor() {
		makeAutoObservable(this);
		this.m_ServiceTransport = {
			MakeReady: this.MakeReady.bind(this),
			SendMsg: (target_job_name, proto_msg_base, n) => {
				if (
					proto_msg_base.GetEMsg() === undefined ||
					proto_msg_base.GetEMsg() != 9804
				) {
					proto_msg_base.SetEMsg(151);
				}
				proto_msg_base.Hdr().set_target_job_name(target_job_name);
				return this.SendMsgAndAwaitResponse(proto_msg_base, n);
			},
			SendNotification: (target_job_name, proto_msg_base) => {
				if (
					proto_msg_base.GetEMsg() === undefined ||
					proto_msg_base.GetEMsg() != 9804
				) {
					proto_msg_base.SetEMsg(151);
				}
				proto_msg_base.Hdr().set_target_job_name(target_job_name);
				return this.Send(proto_msg_base);
			},
		};
		if (window && window.addEventListener) {
			window.addEventListener("unload", (e) => {
				this.ForceDisconnect();
			});
		}
	}

	get steamid() {
		return this.m_steamid;
	}

	get logged_on() {
		return this.m_bLoggedOn;
	}

	get persona_name() {
		return this.m_strPersonaName;
	}

	get messageHandlers() {
		return this.m_messageHandlers;
	}

	get rtReconnectThrottleStart() {
		return this.m_rtReconnectThrottleStart;
	}

	get rtReconnectThrottleExpiration() {
		return this.m_rtReconnectThrottleExpiration;
	}

	BDisconnected() {
		return !this.logged_on && this.m_steamid.BIsValid();
	}

	BConnectedToServer(server?: EServerType) {
		if (server === undefined) {
			return this.m_bLoggedOn;
		} else {
			return this.m_setConnectedServers.has(server);
		}
	}

	get has_completed_initial_connect() {
		return this.m_bCompletedInitialConnect;
	}

	get account_flags() {
		return this.m_unAccountFlags;
	}

	GetServiceTransport() {
		return this.m_ServiceTransport;
	}

	GetAnonymousServiceTransport() {
		return this.m_ServiceTransport;
	}

	MakeReady() {
		return SteamClient.User.Connect();
	}

	RunWhenLoggedOn(e, server?: number) {
		let callback = ((e, name) => () => {
			try {
				e();
			} catch (e) {
				console.error(`Error in ${name} callback:`, e);
			}
		})(e, "RunWhenLoggedOn");
		if (this.BConnectedToServer(server)) {
			callback();
		} else {
			this.m_callbacksOnConnectOneTime.AddCallback(callback, server);
		}
	}

	WaitUntilLoggedOn() {
		return new Promise((e) => this.RunWhenLoggedOn(e));
	}

	AddOnLogonCallback(callback: () => void, eServerType: EServerType) {
		let cb = () => {
			try {
				const cb = callback();
				if (cb) {
					this.m_callbacksOnDisconnectOneTime.AddCallback(cb, eServerType);
				}
			} catch (e) {
				console.error("Error in AddOnLogonCallback callback:", e);
			}
		};
		if (this.BConnectedToServer(eServerType)) {
			cb();
		}
		return this.m_callbacksOnConnect.AddCallback(cb, eServerType);
	}

	AddOnDisconnectCallback(callback: () => void, eServerType: EServerType) {
		let cb = (
			(e, t) =>
			(...n) => {
				try {
					e(...n);
				} catch (e) {
					console.error(`Error in ${t} callback:`, e);
				}
			}
		)(callback, "AddOnDisconnectCallback");
		return this.m_callbacksOnDisconnect.AddCallback(cb, eServerType);
	}

	ForceDisconnect() {
		this.m_bForceDisconnect = true;
		this.Disconnect();
	}

	Send(e) {
		return (
			!!this.BIsConnected() &&
			(this.DEBUG_LogCMInterfaceActivity(e, "send"), this.SendInternal(e))
		);
	}

	BInternalShouldDispatchMessage(e) {
		return true;
	}

	ResolveAwaitWithTransportError(
		callback: (msg) => void,
		msg_init,
		eTransportError: number,
		strErrorMsg: string,
	) {
		let msg = CProtoBufMsg.Init(msg_init);
		msg.Hdr().set_eresult(EResult.Fail);
		msg.Hdr().set_transport_error(eTransportError);
		if (strErrorMsg) {
			msg.Hdr().set_error_message(strErrorMsg);
		}
		callback(msg);
	}

	@action DispatchMessage(msg) {
		try {
			if (!this.BInternalShouldDispatchMessage(msg)) {
				return;
			}
			if (msg.BIsValid()) {
				let t = (t) => {
					t.Hdr().set_jobid_target(msg.Hdr().jobid_source());
					this.Send(t);
				};
				if (!this.m_messageHandlers.DispatchMsgToHandlers(msg, t)) {
					this.DEBUG_LogCMInterfaceActivity(msg, "receive", false);
				}
			} else {
				console.error(
					`CMInterface RECV could not parse message of type ${EMsgToString(
						msg.GetEMsg(),
					)} ${msg.GetEMsg()}`,
				);
			}
		} catch (ex) {
			console.error(
				`CMInterface RECV exception thrown while processing message of type ${EMsgToString(
					msg.GetEMsg(),
				)}`,
				ex,
			);
			msg.DEBUG_LogToConsole();
		}
	}

	BIsConnected() {
		return this.m_bConnected;
	}

	OnConnect() {
		this.m_bConnected = true;
		this.m_bConnectionFailed = false;
		this.m_bForceDisconnect = false;
	}

	OnLoggedOn() {
		this.m_bCompletedInitialConnect = true;
		this.InternalAdjustClock();
		this.m_callbacksOnConnect.RunAllCallbacks(this.m_setConnectedServers);
		this.m_callbacksOnConnectOneTime.RunAllCallbacks(
			this.m_setConnectedServers,
		);
	}

	@action OnDisconnect() {
		this.m_bConnected = false;
		this.m_bConnectionFailed = true;
		this.m_onConnect = undefined;
		this.m_bLoggedOn = false;
		this.m_unAccountFlags = 0;
		this.m_strIPCountry = "";
		this.RunOnDisconnectCallbacks(
			this.m_setConnectedServers,
			this.m_bForceDisconnect,
		);
		this.m_setConnectedServers.clear();
	}

	RunOnDisconnectCallbacks(servers: Set<number> | number[], args) {
		if (servers instanceof Set) {
			this.m_callbacksOnDisconnect.RunAllCallbacks(servers, args);
			this.m_callbacksOnDisconnectOneTime.RunAllCallbacks(servers, args);
		} else {
			this.m_callbacksOnDisconnect.RunCallbacks(servers, args);
			this.m_callbacksOnDisconnectOneTime.RunCallbacks(servers, args);
		}
	}

	ClientServersAvailableHandler = this.m_messageHandlers.RegisterEMessageAction(
		5501,
		HW,
		(msg) => {
			let setConnectedServers = new Set(this.m_setConnectedServers);
			for (let server_types_available of msg.Body().server_types_available()) {
				let server = server_types_available.server();
				if (server !== undefined) {
					if (this.m_bLoggedOn) {
						if (
							!this.m_setConnectedServers.has(server) ||
							!!server_types_available.changed()
						) {
							if (
								server_types_available.changed() &&
								this.m_setConnectedServers.has(server)
							) {
								this.RunOnDisconnectCallbacks(server, false);
							}
							this.m_callbacksOnConnect.RunCallbacks(server);
							this.m_callbacksOnConnectOneTime.RunCallbacks(server);
						}
					}
					this.m_setConnectedServers.add(server);
					setConnectedServers.delete(server);
				}
			}
			setConnectedServers.forEach((e) => {
				this.m_setConnectedServers.delete(e);
				if (this.m_bLoggedOn) {
					this.RunOnDisconnectCallbacks(e, false);
				}
			});
		},
	);

	DEBUG_LogCMInterfaceActivity(e, t, n = true) {
		0;
	}

	DEBUG_LogMessage(e, ...t) {
		0;
	}

	async InternalAdjustClock() {
		let msg = CProtoBufMsg.Init(Sb, 9802);
		msg
			.Body()
			.set_client_request_timestamp(Math.floor(performance.now()).toString());
		return this.SendMsgAndAwaitResponse(msg, Q_).then((resp_msg) => {
			let timestamp = performance.now();
			let dtNow = new Date();
			let r = parseInt(resp_msg.Body().client_request_timestamp());
			let i =
				parseInt(resp_msg.Body().server_timestamp_ms()) -
				((timestamp - r) >> 1);
			if (i && !isNaN(i) && timestamp && !isNaN(timestamp)) {
				this.m_bPerformedInitialClockAdjustment = true;
				this.m_nPerfClockServerMSOffset = i - timestamp;
				this.m_nWallClockDriftMS = dtNow.getTime() - i;
			} else {
				AssertMsg(
					false,
					`Error computing server time, server echo: ${r} server time ${i}`,
				);
			}
			return true;
		});
	}

	BPerformedInitialClockAdjustment() {
		return this.m_bPerformedInitialClockAdjustment;
	}

	GetServerTimeMS() {
		return performance.now() + this.m_nPerfClockServerMSOffset;
	}

	GetServerRTime32() {
		return Math.floor(
			(performance.now() + this.m_nPerfClockServerMSOffset) / 1000,
		);
	}

	RTime32ToDate(ts: number) {
		return new Date(ts * 1000 + this.m_nWallClockDriftMS);
	}
}

export class CMInterfaceSharedClientConnection extends CMInterface {
	m_hSharedConnection: number;
	m_hEMsgRegistrationObserver: IReactionDisposer;
	m_setEMsgHandlers = new Set();
	m_setServiceMethodHandlers = new Set();

	constructor() {
		super();
		makeAutoObservable(this);
		if (
			BSharedJSContextHasMethod("User.RegisterForConnectionAttemptsThrottled")
		) {
			SteamClient.User.RegisterForConnectionAttemptsThrottled(
				this.OnConnectionAttemptThrottled,
			);
		}
	}

	SendMsgAndAwaitResponse(msg, t) {
		return new Promise((resolve, reject) => {
			if (this.m_hSharedConnection) {
				this.DEBUG_LogCMInterfaceActivity(msg, "send");
				let r = iI(msg.Serialize());
				if (
					SteamClient.SharedConnection.SendMsgAndAwaitBinaryResponse !==
					undefined
				) {
					SteamClient.SharedConnection.SendMsgAndAwaitBinaryResponse(
						this.m_hSharedConnection,
						r,
					)
						.then((e) => {
							let packet = new pV(e);
							let msg = CProtoBufMsg.InitFromPacket(t, packet);
							this.DEBUG_LogCMInterfaceActivity(msg, "receive", true);
							if (msg.BIsValid()) {
								resolve(msg);
							} else {
								this.ResolveAwaitWithTransportError(
									resolve,
									t,
									102,
									"Failed to parse response from server",
								);
							}
						})
						.catch((ex) => {
							this.ResolveAwaitWithTransportError(resolve, t, 2, ex);
						});
				} else {
					SteamClient.SharedConnection.SendMsgAndAwaitResponse(
						this.m_hSharedConnection,
						r,
					)
						.then((e) => {
							let r = new pV(bg(e));
							let s = CProtoBufMsg.InitFromPacket(t, r);
							this.DEBUG_LogCMInterfaceActivity(s, "receive", true);
							if (s.BIsValid()) {
								resolve(s);
							} else {
								this.ResolveAwaitWithTransportError(
									resolve,
									t,
									102,
									"Failed to parse response from server",
								);
							}
						})
						.catch((e) => {
							this.ResolveAwaitWithTransportError(resolve, t, 2, e);
						});
				}
			} else {
				this.ResolveAwaitWithTransportError(
					resolve,
					t,
					102,
					"Shared connection handle is empty, dropping traffic",
				);
				console.warn("Shared connection handle is empty, dropping traffic");
			}
		});
	}

	SendInternal(e) {
		let t = iI(e.Serialize());
		SteamClient.SharedConnection.SendMsg(this.m_hSharedConnection, t);
		return true;
	}

	OnMsgRecvd(e) {
		let t = new pV(e);
		let n = CBaseProtoBufMsg.InitHeaderFromPacket(t);
		this.DispatchMessage(n);
	}

	@action
	OnLogonInfoChanged(info: LogonInfo) {
		this.DEBUG_LogMessage("Login info from client: ", info);
		this.m_bLoggedOn = info.bLoggedOn;
		Config.EUNIVERSE = info.eUniverse;
		Config.MEDIA_CDN_COMMUNITY_URL = info.strCommunityImagesURL;
		Config.COUNTRY = info.strUserCountry;
		if (info.strSteamid) {
			this.m_steamid = new CSteamID(info.strSteamid);
			this.m_strPersonaName = info.strPersonaName;
			iA.logged_in = info.bLoggedOn;
			iA.steamid = info.strSteamid;
			iA.accountid = this.m_steamid.GetAccountID();
			iA.account_name = info.strAccountName;
		} else if (this.m_steamid.GetAccountID() != 0) {
			this.m_steamid = new CSteamID();
		}
		if (this.m_bLoggedOn) {
			if (!this.m_bConnected) {
				this.OnConnect();
			}
			this.OnLoggedOn();
		} else {
			this.OnDisconnect();
		}
	}

	Connect() {
		if (this.m_hSharedConnection) {
			return Promise.resolve();
		} else {
			return (this.m_onConnect = new Promise((resolve, reject) => {
				SteamClient.SharedConnection.AllocateSharedConnection()
					.then((conn) => {
						if (conn) {
							this.OnSharedConnectionEstablished(conn);
							this.DEBUG_LogMessage(
								"obtained handle ",
								this.m_hSharedConnection,
							);
							this.OnConnect();
							resolve();
						} else {
							reject();
						}
					})
					.catch(reject);
			}));
		}
	}

	OnSharedConnectionEstablished(hConnection: number) {
		this.m_hSharedConnection = hConnection;
		this.m_setEMsgHandlers.clear();
		this.m_setServiceMethodHandlers.clear();
		if (this.m_hEMsgRegistrationObserver) {
			this.m_hEMsgRegistrationObserver();
		}
		this.m_hEMsgRegistrationObserver = autorun(() => {
			if (this.m_hSharedConnection) {
				for (let emsg of this.m_messageHandlers.emsg_list) {
					if (!this.m_setEMsgHandlers.has(emsg)) {
						this.m_setEMsgHandlers.add(emsg);
						SteamClient.SharedConnection.SubscribeToEMsg(
							this.m_hSharedConnection,
							emsg,
						);
					}
				}
				for (let e of this.m_messageHandlers.servicemethod_list) {
					if (!this.m_setServiceMethodHandlers.has(e)) {
						this.m_setServiceMethodHandlers.add(e);
						SteamClient.SharedConnection.SubscribeToClientServiceMethod(
							this.m_hSharedConnection,
							e,
						);
					}
				}
			}
		});
		let t = false;
		SteamClient.SharedConnection.RegisterOnLogonInfoChanged(
			this.m_hSharedConnection,
			(e) => {
				this.OnLogonInfoChanged(e);
				if (!t) {
					t = true;
					if (
						SteamClient.SharedConnection.RegisterOnBinaryMessageReceived !==
						undefined
					) {
						SteamClient.SharedConnection.RegisterOnBinaryMessageReceived(
							this.m_hSharedConnection,
							this.OnMsgRecvd.bind(this),
						);
					} else {
						SteamClient.SharedConnection.RegisterOnMessageReceived(
							this.m_hSharedConnection,
							(e) => this.OnMsgRecvd(bg(e)),
						);
					}
				}
			},
		);
	}

	OnConnect() {
		super.OnConnect();
	}

	Disconnect() {
		if (this.m_hSharedConnection) {
			let e = CProtoBufMsg.Init(el, 716);
			e.Body().set_persona_state(0);
			e.Body().set_persona_set_by_user(false);
			this.Send(e);
			SteamClient.SharedConnection.Close(this.m_hSharedConnection);
			this.OnSharedConnectionClosed();
		}
	}

	OnSharedConnectionClosed() {
		super.OnDisconnect();
		this.m_hSharedConnection = undefined;
		this.m_setEMsgHandlers.clear();
		if (this.m_hEMsgRegistrationObserver) {
			this.m_hEMsgRegistrationObserver();
			this.m_hEMsgRegistrationObserver = undefined;
		}
	}

	SendHeartbeat() {}
	ClearHeartbeatInterval() {}
	ResetHeartbeatInterval() {}

	@action.bound
	OnConnectionAttemptThrottled(e) {
		if (e.rtCooldownExpiration == 0) {
			this.m_rtReconnectThrottleStart = 0;
		} else if (this.m_rtReconnectThrottleStart == 0) {
			this.m_rtReconnectThrottleStart = GetUnixTime();
		}
		this.m_rtReconnectThrottleExpiration = e.rtCooldownExpiration;
	}
}

const B = E;

class CCMList {
	m_CMList = {
		rgCMList: [],
		rtLastLoaded: 0,
	};
	m_Storage;
	m_InitPromise;

	Init(storage) {
		this.m_Storage = storage;
		this.m_InitPromise = this.LoadFromCache();
	}

	async LoadFromCache() {
		if (this.m_InitPromise) {
			return this.m_InitPromise;
		}

		const data = await this.m_Storage.GetObject(this.GetLocalStorageKey());
		if (
			(t = data) &&
			typeof t == "object" &&
			Array.isArray(t.rgCMList) &&
			typeof t.rtLastLoaded == "number"
		) {
			this.m_CMList = data;
			return this.m_CMList;
		} else {
			this.m_CMList = {
				rgCMList: [],
				rtLastLoaded: 0,
			};
			this.WriteCMListToLocalStorage();
			return this.m_CMList;
		}
		var t;
	}

	async GetBestCMsToConnectTo() {
		try {
			let e = await this.LoadFromCache();
			if (!e.rgCMList.length || Date.now() / 1000 - e.rtLastLoaded > 604800) {
				this.m_CMList = await this.GetCMListFromWebAPI();
				this.WriteCMListToLocalStorage();
			}
		} catch (ex) {
			console.error(
				`There was a problem loading CM list. Attempting to use stale data. ${ex}`,
			);
		}
		return this.PingCMs();
	}

	RecordCMDisconnected(e) {
		e.nConnectFailures = (e.nConnectFailures || 0) + 1;
		e.msPing = Number.MAX_SAFE_INTEGER;
		e.nCMLoad = Number.MAX_SAFE_INTEGER;
		this.WriteCMListToLocalStorage();
	}

	BuildCMWebSocketURL(sURL: string) {
		return `wss://${this.FixDevHost(sURL)}/cmsocket/`;
	}

	FixDevHost(sURL: string) {
		if (
			Config.EUNIVERSE == 4 &&
			Config.WEB_UNIVERSE == "dev" &&
			sURL.match(/^127\.0\.0\.1/)
		) {
			let t = Config.WEBAPI_BASE_URL.match(/https?:\/\/([^\/:]*)/);
			if (t && t[1]) {
				return sURL.replace(/^127\.0\.0\.1/, t[1]);
			}
		}
		return sURL;
	}

	GetLocalStorageKey() {
		return `CCMList_${Config.EUNIVERSE}`;
	}

	WriteCMListToLocalStorage() {
		this.m_Storage.StoreObject(this.GetLocalStorageKey(), this.m_CMList);
	}

	async GetCMListFromWebAPI() {
		try {
			const n = await ((e = L),
			(t = 10000),
			() =>
				new Promise((n, r) => {
					let i = false;
					const s = window.setTimeout(() => {
						i = true;
						r(new Error("Timed out"));
					}, t);
					e().then(
						(e) => {
							if (!i) {
								clearTimeout(s);
								n(e);
							}
						},
						(e) => {
							if (!i) {
								clearTimeout(s);
								r(e);
							}
						},
					);
				}))();
			const r = this.m_CMList.rgCMList.reduce(
				(e, t) => ({
					...e,
					[t.strHost]: t,
				}),
				{},
			);
			return {
				rgCMList: n.map((e) => ({
					...(r[e.strHost] || {}),
					...e,
				})),
				rtLastLoaded: new Date().getTime() / 1000,
			};
		} catch (e) {
			throw new Error("Failed to load CM List from webapi");
		}
		var e;
		var t;
	}

	PingCMs() {
		let e = new Date().getTime() / 1000 - 18000;
		let t = [];
		const n = {};
		for (const r of this.m_CMList.rgCMList) {
			const i = k(r);
			const o = !i || r.rtLastCheck < e;
			if (o && t.length < 20) {
				t.push(r);
			}
			if (!o || !!Config.IN_MOBILE) {
				if (i && i < 10000) {
					n[r.strHost] = r;
				}
			}
		}
		t.length;
		let r = false;
		return new Promise((e, i) => {
			let o;
			let a;
			let c = "immediate";
			let l = (t) => {
				AssertMsg(!r, "fnPingingComplete called a second time");
				if (!r) {
					const n = Object.keys(t)
						.map((e) => t[e])
						.sort((e, t) => k(e) - k(t));
					n.length;
					if (n.length) {
						n[0].strHost;
					}
					r = true;
					this.WriteCMListToLocalStorage();
					if (o) {
						window.clearTimeout(o);
					}
					if (a) {
						window.clearTimeout(a);
					}
					if (n.length) {
						return e(n);
					}
					const s = this.GetCMWithFewestDisconnects();
					if (s) {
						return e([s]);
					}
					i("No CMs available");
				}
			};
			if (
				t.length === 0 ||
				Object.keys(n).some((e) => this.BCMOkToUse(n[e], c)) ||
				(Config.IN_MOBILE && Object.keys(n).length)
			) {
				if (Object.keys(n).length) {
					Config.IN_MOBILE;
				}
				l(n);
			}
			if (!r) {
				o = window.setTimeout(() => {
					c = "timeout";
					if (!r && Object.keys(n).some((e) => this.BCMOkToUse(n[e], c))) {
						l(n);
					}
				}, 400);
				a = window.setTimeout(() => {
					c = "seriouslytimeout";
					l(n);
				}, 12000);
			}
			let u;
			let m = 0;
			let d = 0;
			let h = (e) => {
				if (!r && this.BCMOkToUse(e, c)) {
					l({
						[e.strHost]: e,
					});
				} else {
					n[e.strHost] = e;
				}
				if (!!r || !u()) {
					if (--d == 0) {
						if (r) {
							this.WriteCMListToLocalStorage();
						} else if (this.BCMOkToUse(e, "seriouslytimeout")) {
							l({
								[e.strHost]: e,
							});
						} else {
							n[e.strHost] = e;
							l(n);
						}
					}
				}
			};
			u = () => {
				if (m < t.length) {
					let e = t[m++];
					this.PingCM(e).then(() => {
						h(e);
					});
					return true;
				}
				return false;
			};
			for (let e = 0; e < 4; e++) {
				if (u()) {
					d++;
				}
			}
		});
	}

	GetCMWithFewestDisconnects() {
		if (!this.m_CMList.rgCMList.length) {
			return;
		}
		let e = this.m_CMList.rgCMList[0];
		let t = 1;
		while (e.nConnectFailures > 0 && t < this.m_CMList.rgCMList.length) {
			let n = this.m_CMList.rgCMList[t++];
			if (!n.nConnectFailures || n.nConnectFailures < e.nConnectFailures) {
				e = n;
			}
		}
		if (e) {
			this.FixDevHost(e.strHost);
		}
		return e;
	}

	BCMOkToUse(e, t) {
		if (!e) {
			return false;
		}
		let n = e.msPing + e.nCMLoad;
		return (
			(n < 80 && e.msPing < 60) ||
			(t !== "immediate" &&
				((n < 140 && e.msPing < 100) ||
					(t !== "timeout" && n < 350 && e.msPing < 275)))
		);
	}

	async PingCM(e) {
		let t = `https://${this.FixDevHost(e.strHost)}/cmping/`;
		let n = performance.now();
		const r = B.CancelToken.source();
		let i = window.setTimeout(() => {
			e.strHost;
			r.cancel();
		}, 1000);
		try {
			let s = await B.head(t, {
				cancelToken: r.token,
			});
			e.strHost;
			window.clearTimeout(i);
			let o = performance.now() - n;
			let a = s.headers["x-steam-cmload"]
				? parseInt(s.headers["x-steam-cmload"])
				: undefined;
			e.strHost;
			e.msPing = o;
			e.nCMLoad = a;
		} catch (t) {
			if (B.isCancel(t)) {
				e.strHost;
			} else {
				window.clearTimeout(i);
			}
			e.msPing = 10000;
			e.nCMLoad = 0;
		}
		e.rtLastCheck = new Date().getTime() / 1000;
		return e.msPing;
	}
}

async function L() {
	const strURL = `${Config.WEBAPI_BASE_URL}ISteamDirectory/GetCMListForConnect/v1/?cellid=0&cmtype=websockets&origin=${self.origin}`;
	const t = (await B.get(strURL)).data;
	const n = (t && t.response && t.response.serverlist) || [];
	n.length;
	return n.map((e, t) => ({
		nPriority: t,
		strHost: e.endpoint,
	}));
}

function k(e) {
	return (e.msPing || 0) + (e.nCMLoad || 0);
}

export class CMInterfaceWebSocket extends CMInterface {
	m_Session = {
		m_bWaitingForLogonResponse: false,
		m_eResultLogonSuccess: 2,
		m_nClientInstanceID: "0",
		m_nSessionID: 0,
		m_nSessionIDLast: 0,
	};
	m_Socket: WebSocket;
	m_SocketCMHost: WebSocket;
	m_bLoadingCMList = false;
	m_iIntervalHeartbeat;
	m_iCallSeq = 1;
	m_mapWaitingCallbacks = new Map();
	m_CMList = new CCMList();

	constructor(e) {
		super();
		makeAutoObservable(this);
		this.m_CMList.Init(e);
	}

	BIsConnected() {
		return this.m_Socket && this.m_Socket.readyState == WebSocket.OPEN;
	}

	Connect() {
		if (!this.m_onConnect) {
			console.log("Loading CM List");
			this.m_bConnected = false;
			this.m_bLoggedOn = false;
			this.m_bForceDisconnect = false;
			this.m_Session.m_bWaitingForLogonResponse = true;
			this.m_bLoadingCMList = true;
			this.m_onConnect = this.m_CMList
				.GetBestCMsToConnectTo()
				.then((e) => {
					this.m_bLoadingCMList = false;
					return new Promise((t, n) => {
						let r = 0;
						let i = false;
						e.slice(0, 3).forEach((e, s, o) =>
							this.AttemptHostConnect(e).then(
								(n) => {
									if (i) {
										n.close(4000);
									} else {
										i = true;
										this.m_Socket = n;
										this.m_SocketCMHost = e;
										this.m_bConnected = true;
										this.OnConnect();
										t();
									}
								},
								() => {
									console.log(
										`Failed to connect to CM ${s + 1} of ${o.length}: ${
											e.strHost
										}`,
									);
									r++;
									if (r === o.length) {
										console.log(
											`Failed to connect to all ${o.length} best CMs`,
										);
										n();
									}
								},
							),
						);
					});
				})
				.catch((e) => {
					this.m_bLoadingCMList = false;
					this.OnDisconnect();
					throw e;
				});
		}
		return this.m_onConnect;
	}

	AttemptHostConnect(e) {
		console.log(`Attempting to connect to host ${e.strHost}`);
		let ws = new WebSocket(this.m_CMList.BuildCMWebSocketURL(e.strHost));
		ws.binaryType = "arraybuffer";
		ws.onmessage = (e) => {
			let t = new pV(e.data);
			let n = CBaseProtoBufMsg.InitHeaderFromPacket(t);
			if (n.GetEMsg() == 1) {
				this.DecodeAndDispatchMultiMsg(CProtoBufMsg.InitFromMsg(gF, n));
			} else {
				this.DispatchMessage(n);
			}
		};
		return new Promise((n, r) => {
			let i = false;
			const s = window.setTimeout(() => {
				console.warn(`Socket connection timed out after 3000ms: ${e.strHost}`);
				i = true;
				ws.close(4000);
				this.m_CMList.RecordCMDisconnected(e);
				r();
			}, 3000);
			ws.onopen = () => {
				console.log(`Connected socket to host ${e.strHost}`);
				AssertMsg(!i, "Socket connection was opened after timing out.");
				if (!i) {
					window.clearTimeout(s);
				}
				n(ws);
			};
			ws.onerror = (t) => {
				if (!i) {
					window.clearTimeout(s);
					AssertMsg(false, "Socket connect failed", t);
					console.log(t);
					if (t.message) {
						console.log(t.message);
					} else {
						console.log("No message");
					}
					this.m_CMList.RecordCMDisconnected(e);
					r();
				}
			};
		});
	}

	get session() {
		return this.m_Session;
	}

	ClearHeartbeatInterval() {
		if (this.m_iIntervalHeartbeat) {
			window.clearInterval(this.m_iIntervalHeartbeat);
			this.m_iIntervalHeartbeat = undefined;
		}
	}

	ResetHeartbeatInterval() {
		this.ClearHeartbeatInterval();
		this.m_iIntervalHeartbeat = window.setInterval(
			() => this.SendHeartbeat(),
			27000,
		);
	}

	SendHeartbeat() {
		let e = CProtoBufMsg.Init(s5, 703);
		this.Send(e);
	}

	OnConnect() {
		super.OnConnect();
		if (this.m_Socket) {
			this.m_Socket.onerror = (e) => {};
			this.ResetHeartbeatInterval();
			this.m_Socket.onclose = (e) => {
				this.OnDisconnect();
			};
		}
	}

	Disconnect() {
		if (this.m_Socket) {
			this.m_Socket.close();
		}
	}

	OnDisconnect() {
		this.m_Socket = undefined;
		this.m_SocketCMHost = undefined;
		this.m_onConnect = undefined;
		this.ClearHeartbeatInterval();
		super.OnDisconnect();
	}

	SendMsgAndAwaitResponse(msg, msgClass) {
		return new Promise((fnCallback, r) => {
			let iSeq = this.m_iCallSeq++;
			msg.Hdr().set_jobid_source(`${iSeq}`);
			if (this.Send(msg)) {
				this.m_mapWaitingCallbacks.set(iSeq, {
					fnCallback,
					iSeq,
					msgClass,
				});
			} else {
				this.ResolveAwaitWithTransportError(
					fnCallback,
					msgClass,
					2,
					"Web socket not connected",
				);
			}
		});
	}

	SendInternal(msg) {
		return (
			!!this.m_Socket &&
			(this.m_steamid.BIsValid() &&
				msg.Hdr().set_steamid(this.m_steamid.ConvertTo64BitString()),
			this.m_Session.m_nSessionID &&
				msg.Hdr().set_client_sessionid(this.m_Session.m_nSessionID),
			this.m_Socket.send(msg.Serialize()),
			msg.GetEMsg() != 703 && this.ResetHeartbeatInterval(),
			true)
		);
	}

	BInternalShouldDispatchMessage(msg) {
		if (
			msg.BIsValid() &&
			msg.Hdr().jobid_target() &&
			msg.Hdr().jobid_target() !== kF
		) {
			let strTargetJobID = parseInt(msg.Hdr().jobid_target());
			if (this.m_mapWaitingCallbacks.has(strTargetJobID)) {
				let target_job_callbacks =
					this.m_mapWaitingCallbacks.get(strTargetJobID);
				if (target_job_callbacks) {
					let msg2 = CProtoBufMsg.InitFromMsg(
						target_job_callbacks.msgClass,
						msg,
					);
					this.DEBUG_LogCMInterfaceActivity(msg2, "receive", true);
					if (msg2.BIsValid()) {
						target_job_callbacks.fnCallback(msg2);
					} else {
						this.ResolveAwaitWithTransportError(
							target_job_callbacks.fnCallback,
							target_job_callbacks.msgClass,
							102,
							"Failed to parse response from server",
						);
					}
					this.m_mapWaitingCallbacks.delete(strTargetJobID);
				}
				return false;
			}
			this.DEBUG_LogCMInterfaceActivity(msg, "receive", false);
		}
		return true;
	}

	LogOnResponseHandler = this.messageHandlers.RegisterEMessageAction(
		751,
		c1,
		(msg) => {
			let eResult = msg.Body().eresult();
			this.m_Session.m_bWaitingForLogonResponse = false;
			this.m_Session.m_eResultLogonSuccess = eResult;
			if (eResult == EResult.OK) {
				this.m_steamid = new CSteamID(msg.Body().client_supplied_steamid());
				this.m_bLoggedOn = true;
				this.m_Session.m_nSessionID = msg.Hdr().client_sessionid();
				this.m_Session.m_nSessionIDLast = this.m_Session.m_nSessionID;
				this.m_Session.m_nClientInstanceID = msg.Body().client_instance_id();
				this.OnLoggedOn();
			} else {
				console.warn(
					"Received error code from LogOnResponse, disconnecting. EResult=",
					msg.Body().eresult(),
				);
				if (eResult == EResult.TryAnotherCM) {
					this.m_CMList.RecordCMDisconnected(this.m_SocketCMHost);
				}
				this.Disconnect();
			}
		},
	);

	ClientAccountInfoHandler = this.messageHandlers.RegisterEMessageAction(
		768,
		dX,
		(msg) => {
			this.m_unAccountFlags = msg.Body().account_flags() || 0;
			this.m_strIPCountry = msg.Body().ip_country() || "";
			this.m_strPersonaName = msg.Body().persona_name() || "";
		},
	);

	@action
	DecodeAndDispatchMultiMsg(msg) {
		let body = msg.Body().message_body();
		if (!body) {
			return;
		}

		if (msg.Body().size_unzipped()) {
			body = inflate(body);
		}
		let packet = new pV(body);
		while (packet.GetCountBytesRemaining() > 0) {
			let bytes = packet.GetUint32();
			let hdr = CBaseProtoBufMsg.InitHeaderFromPacket(
				new pV(packet.GetPacket(), packet.TellGet(), bytes),
			);
			this.DispatchMessage(hdr);
			packet.SeekGetCurrent(bytes);
		}
	}
}
