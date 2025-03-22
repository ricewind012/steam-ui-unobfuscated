var n = require(/*webcrack:missing*/ "./43691.js");
let i = {
	success: true,
	result: 1,
};
class a {
	m_mapWaitingCallbacks = new Map();
	m_socket;
	m_iCallSeq = 1;
	m_bReady = false;
	m_bClientConnectionFailed = false;
	m_bSecurityException = false;
	m_promiseConnect;
	m_ClientInfo = {
		ulVersion: "",
		bFriendsUIEnabled: false,
		unAccountID: 0,
		rgSupportedMessages: [],
	};
	constructor() {}
	get ClientInfo() {
		return this.m_ClientInfo;
	}
	get ready() {
		return this.m_bReady;
	}
	get browser_supported() {
		return !this.m_bSecurityException;
	}
	get connected_to_client() {
		return !!this.m_socket && this.m_socket.readyState == WebSocket.OPEN;
	}
	SendMsgAndAwaitResponse(e) {
		return new Promise((t, r) => {
			let n = this.m_iCallSeq++;
			if (this.BSendMsg(e, n)) {
				this.m_mapWaitingCallbacks.set(n, {
					iSeq: n,
					fnCallback: t,
					fnError: r,
				});
			} else {
				r();
			}
		});
	}
	BSendMsg(e, t) {
		if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN) {
			return false;
		}
		let r = Object.assign({}, e, {
			universe: n.TS.EUNIVERSE,
			accountid: n.iA.accountid,
		});
		if (t !== undefined) {
			r.sequenceid = t;
		}
		try {
			this.m_socket.send(JSON.stringify(r));
			return true;
		} catch (e) {
			return false;
		}
	}
	OnSocketMessage(e) {
		try {
			let t = JSON.parse(e.data);
			if (t.sequenceid) {
				let e = this.m_mapWaitingCallbacks.get(t.sequenceid);
				if (e) {
					this.m_mapWaitingCallbacks.delete(t.sequenceid);
					e.fnCallback(t);
					return;
				}
			}
		} catch (e) {
			console.error("exception parsing response", e);
		}
	}
	Connect() {
		if (this.m_bReady && this.m_socket?.readyState === WebSocket.OPEN) {
			return Promise.resolve();
		}
		if (this.m_promiseConnect) {
			return this.m_promiseConnect;
		}
		let e = new Promise((e, t) => {
			try {
				this.m_socket = new WebSocket("ws://127.0.0.1:27060/clientsocket/");
			} catch (e) {
				this.m_bSecurityException = true;
				t(e);
				return;
			}
			this.m_socket.onerror = (e) => {
				t();
			};
			this.m_socket.onmessage = this.OnSocketMessage.bind(this);
			this.m_socket.onopen = () => {
				this.SendMsgAndAwaitResponse({
					message: "GetClientInfo",
				})
					.then((r) => {
						if (r.success == 1) {
							this.m_ClientInfo.ulVersion = r.clientversion;
							this.m_ClientInfo.bFriendsUIEnabled = !!r.friendsui;
							this.m_ClientInfo.unAccountID = r.accountid;
							if (r.supported_messages) {
								this.m_ClientInfo.rgSupportedMessages = r.supported_messages;
							}
							e();
						} else {
							t();
						}
					})
					.catch(t);
			};
		});
		this.m_promiseConnect = e;
		this.m_promiseConnect
			.then(() => {
				this.m_bReady = true;
				this.m_promiseConnect = undefined;
			})
			.catch(() => {
				this.m_bClientConnectionFailed = true;
				this.m_promiseConnect = undefined;
			});
		return this.m_promiseConnect;
	}
}
export let W = new (class {
	m_connection = new a();
	FailureResult(e = 2) {
		let t = {
			success: false,
			result: e,
		};
		if (this.m_connection && !this.m_connection.browser_supported) {
			t.browser_unsupported = true;
		}
		if (this.m_connection && !this.m_connection.connected_to_client) {
			t.connect_failed = true;
		}
		if (e == 7) {
			t.call_unsupported = true;
		}
		return t;
	}
	BClientConnected() {
		return this.m_connection.Connect().then(
			() => i,
			() => this.FailureResult(),
		);
	}
	BClientConnectedAndSupportsMessage(e) {
		return this.m_connection
			.Connect()
			.then(() => this.BClientSupportsMessage(e))
			.catch(() => false);
	}
	BClientSupportsMessage(e) {
		return (
			!!this.m_connection.connected_to_client &&
			!!this.m_connection.ready &&
			this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e) !== -1
		);
	}
	OpenFriendChatDialog(e) {
		let t = {
			message: "ShowFriendChatDialog",
			steamid: e,
		};
		return this.GenericEResultCall(t);
	}
	OpenChatRoomGroupDialog(e, t) {
		let r = {
			message: "ShowChatRoomGroupDialog",
			chat_group_id: e,
		};
		if (t) {
			r.chat_room_id = t;
		}
		return this.GenericEResultCall(r);
	}
	ShowChatRoomGroupInvite(e, t = true) {
		let r = {
			message: "ShowChatRoomGroupInvite",
			invite_code: e,
		};
		return this.GenericEResultCall(r, t);
	}
	m_mapCacheSubscribedApp = new Map();
	BIsSubscribedApp(e) {
		if (this.m_mapCacheSubscribedApp.has(e)) {
			return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
		}
		let t = {
			message: "IsSubscribedApp",
			appid: e,
		};
		return this.GenericEResultCall(t, true).then((t) => {
			if (t.connect_failed) {
				return;
			}
			let r = t.result == 1;
			this.m_mapCacheSubscribedApp.set(e, r);
			return r;
		});
	}
	OpenFriendsDialog() {
		return this.GenericEResultCall({
			message: "OpenFriendsDialog",
		});
	}
	OpenSteamURL(e, t = false) {
		let r = {
			message: "OpenSteamURL",
			url: e,
		};
		return this.GenericEResultCall(r, t);
	}
	BClientAccountMatches() {
		return (
			!n.iA.logged_in ||
			n.iA.accountid == this.m_connection.ClientInfo.unAccountID
		);
	}
	GenericEResultCall(e, t = false) {
		return this.m_connection
			.Connect()
			.then(() =>
				t && !this.BClientAccountMatches()
					? {
							success: false,
							result: 19,
							account_mismatch: true,
						}
					: this.m_connection
							.SendMsgAndAwaitResponse(e)
							.then((e) =>
								e.success === 1 ? i : this.FailureResult(e.success),
							),
			)
			.catch(() => this.FailureResult());
	}
})();
window.ClientConnectionAPI = W;
