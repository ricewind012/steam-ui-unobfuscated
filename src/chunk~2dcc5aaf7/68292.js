export let _k = f._k;
export let tj = S.tj;
var I = require("./53414.js").I;
export let sn = B.s;
export let a$ = v.a$;
export let dJ = w.d;
var n = require("./49180.js");
var i = require(/*webcrack:missing*/ "./92228.js");
var a = require(/*webcrack:missing*/ "./72476.js");
var s = require("./44234.js");
var o = require(/*webcrack:missing*/ "./34629.js");
var l = require(/*webcrack:missing*/ "./94195.js");
var c = require(/*webcrack:missing*/ "./83957.js");
var m = c;
var u = require(/*webcrack:missing*/ "./12176.js");
var d = require(/*webcrack:missing*/ "./52451.js");
var A = require(/*webcrack:missing*/ "./89193.js");
var p = require(/*webcrack:missing*/ "./28987.js");
var g = require(/*webcrack:missing*/ "./8573.js");
var h = require(/*webcrack:missing*/ "./49455.js");
class C {
	m_bLogonFailed = false;
	m_bForcedDisconnect = false;
	m_eSteamRealm = p.TU.k_ESteamRealmUnknown;
	m_bConnectSucceeded = false;
	m_bEverConnected = false;
	m_bEverLoggedOn = false;
	m_CMInterface;
	m_cConsecutiveConnectionFailures = 0;
	m_dtNextLogonAttempt;
	m_bWaitingToReconnect = false;
	m_iTimeoutRetryLogon;
	m_rgdtRecentFailures = [];
	m_eWebLogonState = 0;
	constructor(e, t) {
		(0, A.Gn)(this);
		this.m_CMInterface = e;
		this.m_eSteamRealm = t;
		this.m_CMInterface.AddOnDisconnectCallback(this.OnCMDisconnected);
		this.m_CMInterface.AddOnLogonCallback(this.OnCMLoggedOn);
		this.m_CMInterface.messageHandlers.RegisterEMessageHandler(
			757,
			l.l9,
			(e) => {
				if (e.Body().eresult() == 34) {
					this.m_eWebLogonState = 15;
					this.m_bWaitingToReconnect = true;
				}
			}
		);
	}
	get web_logon_state() {
		return this.m_eWebLogonState;
	}
	BIsInInitialConnect() {
		return this.m_eWebLogonState == 1 || this.m_eWebLogonState == 5;
	}
	BIsWaitingToReconnect() {
		return this.m_bWaitingToReconnect;
	}
	BWillAutoReconnect() {
		return this.m_iTimeoutRetryLogon !== undefined;
	}
	ClearRetryTimeout() {
		if (this.m_iTimeoutRetryLogon) {
			window.clearTimeout(this.m_iTimeoutRetryLogon);
			this.m_iTimeoutRetryLogon = undefined;
		}
	}
	GetMSUntilNextReconnectAttempt() {
		if (this.m_dtNextLogonAttempt) {
			return Math.max(
				0,
				this.m_dtNextLogonAttempt.getTime() - new Date().getTime()
			);
		} else {
			return 0;
		}
	}
	ReconnectNow() {
		if (this.m_bWaitingToReconnect) {
			this.m_rgdtRecentFailures = [];
			this.RetryLogin();
		}
	}
	OnCMDisconnected(e) {
		if (
			this.m_eWebLogonState != 13 &&
			this.m_eWebLogonState != 14 &&
			this.m_eWebLogonState != 15
		) {
			if (this.m_bForcedDisconnect) {
				this.m_bForcedDisconnect = false;
				this.RetryLogin();
				return;
			}
			while (this.m_rgdtRecentFailures.length >= 24) {
				this.m_rgdtRecentFailures.shift();
			}
			this.m_rgdtRecentFailures.push(new Date());
			if (
				this.m_bConnectSucceeded &&
				!this.m_CMInterface.session.m_bWaitingForLogonResponse
			) {
				let e = this.m_CMInterface.session.m_eResultLogonSuccess;
				this.m_eWebLogonState = e != 1 ? (this.m_bEverLoggedOn ? 6 : 8) : 10;
			} else {
				this.m_eWebLogonState = this.m_bEverConnected ? 10 : 2;
			}
			this.m_cConsecutiveConnectionFailures++;
			if (!e) {
				this.RescheduleLogin();
			}
		}
	}
	OnCMLoggedOn() {
		this.m_eWebLogonState = 9;
		this.m_bEverLoggedOn = true;
		this.m_cConsecutiveConnectionFailures = 0;
	}
	PerformInitialLogon(e) {
		if (e.token_use_id) {
			if (window.sessionStorage.getItem("token_use_id") == e.token_use_id) {
				console.log(
					"In-page token has already been consumed, requesting a new token."
				);
				e = null;
			} else {
				window.sessionStorage.setItem("token_use_id", e.token_use_id);
			}
		}
		this.PerformWebLogOn(e);
	}
	PerformWebLogOn(e) {
		this.m_bConnectSucceeded = false;
		this.m_eWebLogonState = this.m_bEverConnected ? 3 : 1;
		if (!e || !e.steamid || !e.token || !e.account_name) {
			this.RetryLogin();
			return;
		}
		s.iA.steamid = e.steamid;
		s.iA.accountid = new g.b(e.steamid).GetAccountID();
		s.iA.account_name = e.account_name;
		let t = u.w.Init(l.ji, 5514);
		t.Body().set_account_name(e.account_name);
		t.Body().set_protocol_version(65580);
		t.Body().set_qos_level(2);
		t.Body().set_client_os_type(4294966596);
		t.Body().set_ui_mode(3);
		t.Body().set_chat_mode(2);
		t.Body().set_web_logon_nonce(e.token);
		t.Hdr().set_steamid(e.steamid);
		(function (e, t) {
			switch (t) {
				case p.TU.k_ESteamRealmChina:
					e.Body().set_launcher_type(7);
					break;
				case p.TU.k_ESteamRealmGlobal:
					break;
				default:
					(0, h.w)(false, "Unknown realm: " + t);
			}
		})(t, this.m_eSteamRealm);
		if (this.m_CMInterface.session.m_nSessionIDLast) {
			t.Body().set_last_session_id(
				this.m_CMInterface.session.m_nSessionIDLast >>> 0
			);
		}
		t.Body().set_client_instance_id(
			this.m_CMInterface.session.m_nClientInstanceID
		);
		this.m_CMInterface.Connect().then(() => {
			s.iA.logged_in = true;
			this.m_bConnectSucceeded = true;
			this.m_bEverConnected = true;
			this.m_eWebLogonState = this.m_bEverLoggedOn ? 7 : 5;
			this.m_CMInterface.Send(t);
		});
	}
	RetryLogin() {
		this.m_bWaitingToReconnect = false;
		this.ClearRetryTimeout();
		if (this.m_CMInterface.BIsConnected() && this.m_bConnectSucceeded) {
			this.m_bForcedDisconnect = true;
			this.m_CMInterface.ForceDisconnect();
			return;
		}
		(0, h.w)(
			this.m_eWebLogonState != 11,
			"RetryLogin called while request in flight"
		);
		if (this.m_eWebLogonState != 11) {
			this.m_eWebLogonState = 11;
			this.m_CMInterface.Connect().catch(() => {});
			m.get(s.TS.TOKEN_URL, {
				method: "POST",
			})
				.then((e) => {
					let t = e.data;
					if (t.logged_in && t.steamid && t.token && t.account_name) {
						let e = new g.b(t.steamid);
						if (
							this.m_bEverLoggedOn &&
							this.m_CMInterface.steamid.GetAccountID() != e.GetAccountID()
						) {
							this.m_eWebLogonState = 14;
							this.m_CMInterface.ForceDisconnect();
						} else {
							this.PerformWebLogOn(t);
						}
					} else {
						this.m_eWebLogonState = 13;
						this.m_CMInterface.ForceDisconnect();
					}
				})
				.catch((e) => {
					this.m_eWebLogonState = 12;
					this.RescheduleLogin();
				});
		}
	}
	RescheduleLogin() {
		let e = 0;
		let t = 0;
		let r = new Date();
		for (let n of this.m_rgdtRecentFailures) {
			if (n.getTime() >= r.getTime() - 60000) {
				e++;
			} else if (n.getTime() >= r.getTime() - 3600000) {
				t++;
			}
		}
		t += e;
		let n = this.m_cConsecutiveConnectionFailures + e;
		if (n <= 2) {
			this.RetryLogin();
		} else if (n <= 10 && t <= 10) {
			let e = (n - 2) * 5000;
			this.m_dtNextLogonAttempt = new Date(new Date().getTime() + e);
			this.m_bWaitingToReconnect = true;
			this.ClearRetryTimeout();
			this.m_iTimeoutRetryLogon = window.setTimeout(() => {
				this.m_dtNextLogonAttempt = undefined;
				this.RetryLogin();
			}, e);
		} else {
			this.m_bWaitingToReconnect = true;
		}
	}
}
(0, o.Cg)([A.sH], C.prototype, "m_eWebLogonState", undefined);
(0, o.Cg)([d.oI], C.prototype, "OnCMDisconnected", null);
(0, o.Cg)([d.oI], C.prototype, "OnCMLoggedOn", null);
var _ = require("./95773.js");
var f = require("./52912.js");
var b = require("./29971.js");
var y = require(/*webcrack:missing*/ "./17385.js");
require("./69930.js");
var S = require("./97422.js");
var w = require("./3756.js");
var B = require("./8653.js");
var v = require("./66146.js");
export function bg() {
	return _.xm?.FriendStore;
}
export function PR() {
	return f.ZM;
}
export const x9 = (e) => {
	let t;
	let r = new f.Yw(e);
	let o = null;
	let l = false;
	const c = {
		GetFriendsUIExportsVersion: () => n.r,
		FriendsListRoot: (e) => (0, b.Yg)(r.FriendStore, r.ChatStore, e),
		FriendsListQuickAccess: (e) => (0, b.p5)(r.FriendStore, r.ChatStore, e),
		GroupsListRoot: (e) => (0, b.vT)(r.FriendStore, r.ChatStore, e),
		FriendsListAndChatsRoot: (e) => (0, b.CN)(r.FriendStore, r.ChatStore, e),
		TabSetRoot: (e) => (0, b.as)(e),
		VoiceChatControlsRoot: (e) => (0, b.nf)(r.ChatStore, e),
		VoiceChatHeaderRoot: (e) => (0, b.cQ)(r.ChatStore, e),
		RemotePlayTogetherControlsRoot: (e) => (0, b.RM)(r.ChatStore, e),
		BShowRemotePlayQuickAccessControls: () =>
			_.xm.RemotePlayStore.BShowQuickAccessControls(),
		UnreadChatMessagesHeaderRoot: (e) => (0, b.V8)(r.ChatStore, e),
		InvitesList: (e) => (0, b.p)(r.FriendStore, e),
		InstrumentWindow: (e) => {
			f.ZM.InstrumentWindow(e);
			(0, f.DW)(e, y.m);
		},
		GetCurrentUserStatusInterface: () => r.GetCurrentUserStatusInterface(),
		GetVoiceInterface: () => r.GetVoiceInterface(),
		SetEmoticonTrackerCallback: (e) => r.SetEmoticonTrackerCallback(e),
		SetStickerTrackerCallback: (e) => r.SetStickerTrackerCallback(e),
		ShowPopupFriendsList: (e) => _.xm.ShowPopupFriendsList(y.m, !e, e),
		Reconnect: () => _.xm.Reconnect(),
		GetPreferredPersonaState: () =>
			_.xm.FriendStore.GetPersonaStatePreference(),
	};
	if (s.TS.IN_CLIENT) {
		(0, a.bf)();
		let e = {
			message: "ChatJavascriptInitialized",
			data: s.TS.BUILD_TIMESTAMP,
		};
		window.parent.postMessage(e, "https://steamloopback.host");
		t = new i.ij();
		l = true;
		t.Connect();
	} else {
		const e = (t = new i.pn(r.Storage));
		o = new C(e, s.TS.EREALM);
		o.PerformInitialLogon(s.iA);
	}
	r.Init(t, l, o);
	if (!l) {
		(0, b.wE)(
			r.FriendStore,
			r.ChatStore,
			document.getElementById("friendslist-container")
		);
	}
	return c;
};
