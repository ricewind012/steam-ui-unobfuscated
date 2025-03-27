import n from "./58663.js";
import i from "./56060.js";
import a from "./16583.js";
import s from "./79769.js";
export let N = new (class {
	m_socket;
	m_promiseConnect;
	m_bClientConnectionFailed = false;
	m_bSecurityException = false;
	m_bReady = false;
	m_mapCallbacks = new Map();
	m_RegisterForVRModeChangeHandle;
	m_ConnectCallbacks = new s.lu();
	m_DisconnectCallbacks = new s.lu();
	constructor() {}
	IsConnected() {
		return this.m_bReady && this.m_socket?.readyState == WebSocket.OPEN;
	}
	WaitUntilConnected() {
		if (this.IsConnected()) {
			return Promise.resolve();
		} else {
			return new Promise((e) => {
				let t = this.m_ConnectCallbacks.Register(() => {
					e();
					t.Unregister();
				});
			});
		}
	}
	RegisterOnDisconnect(e) {
		return this.m_DisconnectCallbacks.Register(e);
	}
	BSendMsg(e, t, r) {
		if (!this.IsConnected()) {
			return false;
		}
		try {
			let n = new i.S1();
			n.set_type(e);
			if (r != null) {
				n.set_id(r);
			}
			let s = n.serializeBinary();
			if (s.length > 255) {
				return false;
			}
			let o = t.serializeBinary();
			let l = new Uint8Array(1 + s.length + o.length);
			let c = new a.pV(l);
			c.PutUint8(s.length);
			c.PutBytes(s);
			c.PutBytes(o);
			this.m_socket.send(l);
			return true;
		} catch (e) {
			return false;
		}
	}
	RegisterOnMsg(e, t, r) {
		if (!("SteamClient" in window) || SteamClient == null) {
			return;
		}
		let n = this.m_mapCallbacks.get(e);
		if (!n) {
			n = {
				msgClass: t,
				list: new s.lu(),
			};
			this.m_mapCallbacks.set(e, n);
		}
		let i = n.list.Register(r);
		if (
			!this.m_RegisterForVRModeChangeHandle &&
			SteamClient.OpenVR?.RegisterForVRModeChange
		) {
			this.m_RegisterForVRModeChangeHandle =
				SteamClient.OpenVR.RegisterForVRModeChange((e) => {
					if (e) {
						this.Connect();
					} else {
						this.Disconnect();
					}
				});
		}
		return {
			Unregister: () => {
				i.Unregister();
				if (!this.BHasCallbacks()) {
					this.Disconnect();
					if (this.m_RegisterForVRModeChangeHandle) {
						this.m_RegisterForVRModeChangeHandle.unregister();
						this.m_RegisterForVRModeChangeHandle = undefined;
					}
				}
			},
		};
	}
	BHasCallbacks() {
		return [...this.m_mapCallbacks.values()].some(
			(e) => e.list.CountRegistered() > 0,
		);
	}
	OnSocketMessage(e) {
		try {
			let t = new a.pV(e.data);
			let r = t.GetUint8();
			let s = new i.S1();
			i.S1.deserializeBinaryFromReader(
				s,
				new n.BinaryReader(t.GetPacket(), t.TellGet(), r),
			);
			t.SeekGetCurrent(r);
			let o = this.m_mapCallbacks.get(s.type());
			if (o) {
				let e = new o.msgClass();
				o.msgClass.deserializeBinaryFromReader(
					e,
					new n.BinaryReader(
						t.GetPacket(),
						t.TellGet(),
						t.GetCountBytesRemaining(),
					),
				);
				o.list.Dispatch(e, s.id());
			}
		} catch (e) {
			console.error("Exception deserializing protobuf", e);
		}
	}
	Connect() {
		if ("SteamClient" in window && SteamClient != null) {
			if (this.IsConnected()) {
				return Promise.resolve();
			} else {
				if (!this.m_promiseConnect) {
					this.m_promiseConnect = new Promise(async (e, t) => {
						try {
							this.m_socket = new WebSocket(
								`ws://localhost:27062?secret=${await SteamClient.OpenVR.GetWebSecret()}`,
							);
						} catch (e) {
							console.error("Exception creating websocket connection", e);
							this.m_bSecurityException = true;
							t(e);
							return;
						}
						this.m_socket.onerror = (e) => {
							console.error("Socket error", e);
							t();
						};
						this.m_socket.binaryType = "arraybuffer";
						this.m_socket.onmessage = this.OnSocketMessage.bind(this);
						this.m_socket.onopen = () => {
							this.m_socket.send("steam_connect");
							e();
						};
						this.m_socket.onclose = () => {
							this.m_bReady = false;
							this.m_socket = undefined;
							this.m_DisconnectCallbacks.Dispatch();
						};
					});
					this.m_promiseConnect
						.then(() => {
							this.m_bReady = true;
							this.m_ConnectCallbacks.Dispatch();
						})
						.catch(() => {
							this.m_bClientConnectionFailed = true;
						})
						.finally(() => {
							this.m_promiseConnect = undefined;
						});
				}
				return this.m_promiseConnect;
			}
		}
	}
	Disconnect() {
		if (this.m_socket) {
			this.m_socket.close();
		}
	}
})();
