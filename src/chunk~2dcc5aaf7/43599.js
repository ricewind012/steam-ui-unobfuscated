import n, { Cg } from "./34629.js";
import i from "./83599.js";
import a from "./8573.js";
import s from "./43691.js";
import o from "./48289.js";
import l, { Gn } from "./89193.js";
new i.wd("ServerBrowserStore");
class c {
	name;
	ip;
	port;
	queryPort;
	ping;
	bHadSuccessfulResponse;
	bDoNotRefresh;
	gameDir;
	map;
	gameDesc;
	appid;
	players = 0;
	maxPlayers = 0;
	botPlayers;
	bPassword;
	bSecure;
	lastPlayed;
	serverVersion;
	gameTags;
	steamID;
}
class m {
	m_dialogID;
	m_pid;
	m_steamID = null;
	m_window = null;
	m_gameInfo = null;
	m_gameServerItem = new c();
	m_playerList = [];
	m_playerListPending = [];
	m_hQueryServer = undefined;
	m_hQueryPlayerList = undefined;
	m_autoRetry = "None";
	m_strPassword = "";
	m_eConnectAttemptStatus = undefined;
	m_bInitialPingAttempt = true;
	constructor(e, t) {
		Gn(this);
		this.m_dialogID = e;
		this.m_pid = t;
	}
	InitForUser(e) {
		this.m_steamID = e;
		this.m_gameServerItem = {
			bHadSuccessfulResponse: false,
		};
		this.Init();
		this.Refresh();
	}
	InitForServer(e, t, r) {
		this.m_gameServerItem = {
			ip: e,
			port: t,
			queryPort: r,
			bHadSuccessfulResponse: false,
		};
		this.Init();
		this.Refresh();
	}
	Destroy() {
		SteamClient.ServerBrowser.DestroyGameInfoDialog(this.m_dialogID);
	}
	Init() {
		if (this.m_steamID) {
			SteamClient.ServerBrowser.RegisterForFriendGamePlayed(
				this.m_dialogID,
				this.OnFriendGamePlayed,
			);
		}
		SteamClient.ServerBrowser.RegisterForServerInfo(
			this.m_dialogID,
			this.OnServerInfo,
		);
		SteamClient.ServerBrowser.RegisterForPlayerDetails(
			this.m_dialogID,
			this.OnPlayerDetails,
		);
	}
	Refresh() {
		this.PingServer();
	}
	OnFriendGamePlayed(e) {
		this.m_gameInfo = e;
		if (
			this.m_gameServerItem.ip != e.ip ||
			this.m_gameServerItem.port != e.port ||
			this.m_gameServerItem.port != e.port ||
			this.m_gameServerItem.queryPort != e.queryPort ||
			this.m_gameServerItem.port != e.port ||
			this.m_gameServerItem.queryPort != e.queryPort ||
			this.m_gameServerItem.appid != e.appid
		) {
			this.m_gameServerItem = {
				ip: e.ip,
				port: e.port,
				queryPort: e.queryPort,
				appid: e.appid,
				bHadSuccessfulResponse: false,
			};
			this.PingServer();
		}
	}
	PingServer() {
		if (this.m_hQueryServer) {
			SteamClient.ServerBrowser.CancelServerQuery(
				this.m_dialogID,
				this.m_hQueryServer,
			);
		}
		this.m_hQueryServer = 0;
		SteamClient.ServerBrowser.PingServer(this.m_dialogID).then(
			(e) => (this.m_hQueryServer = e),
		);
	}
	RequestPlayerList() {
		if (this.m_hQueryPlayerList) {
			SteamClient.ServerBrowser.CancelServerQuery(
				this.m_dialogID,
				this.m_hQueryPlayerList,
			);
		}
		this.m_hQueryPlayerList = 0;
		this.m_playerListPending = [];
		SteamClient.ServerBrowser.RequestPlayerDetails(this.m_dialogID).then(
			(e) => (this.m_hQueryPlayerList = e),
		);
	}
	OnServerInfo(e) {
		this.m_bInitialPingAttempt = false;
		this.m_gameServerItem = e;
		if (this.m_hQueryServer) {
			SteamClient.ServerBrowser.CancelServerQuery(
				this.m_dialogID,
				this.m_hQueryServer,
			);
		}
		this.m_hQueryServer = undefined;
		if (this.m_eConnectAttemptStatus != -1) {
			this.RequestPlayerList();
			if (
				this.m_gameServerItem.ping >= 0 &&
				this.m_gameServerItem.players < this.m_gameServerItem.maxPlayers
			) {
				switch (this.m_autoRetry) {
					case "None": {
						break;
					}
					case "AutoRetryAlert": {
						this.m_window?.SteamClient.Window.BringToFront();
						break;
					}
					case "AutoRetryJoin": {
						this.Connect(true);
					}
				}
			}
		} else if (
			this.m_gameServerItem.ping >= 0 &&
			this.m_gameServerItem.bHadSuccessfulResponse &&
			this.m_gameServerItem.appid
		) {
			if (this.m_gameServerItem.bPassword) {
				this.m_eConnectAttemptStatus = 0;
			} else {
				this.Connect(true);
			}
		} else {
			this.m_eConnectAttemptStatus = -3;
		}
	}
	OnPlayerDetails(e) {
		if (this.m_hQueryPlayerList) {
			SteamClient.ServerBrowser.CancelServerQuery(
				this.m_dialogID,
				this.m_hQueryPlayerList,
			);
		}
		this.m_hQueryPlayerList = undefined;
		if (e.bRefreshComplete) {
			this.m_playerList = this.m_playerListPending;
			this.m_playerListPending = [];
		} else if (e.bSuccess) {
			this.m_playerListPending.push(e);
			console.log(`player${e.playerName}`);
		}
	}
	async Connect(e) {
		this.m_eConnectAttemptStatus = -2;
		if (this.m_steamID) {
			Xw.ConnectToFriendsGameBySteamID(this.m_steamID, this.m_window);
			Xw.CloseGameInfoDialog(this.m_dialogID);
		} else if (
			this.gameServerItem.appid &&
			(this.gameServerItem.bHadSuccessfulResponse || e)
		) {
			console.log(
				`ServerBrowser.ConnectToServer( ${this.gameServerItem.ip}:${this.gameServerItem.port} )`,
			);
			this.m_eConnectAttemptStatus =
				await SteamClient.ServerBrowser.ConnectToServer(
					this.m_dialogID,
					this.m_strPassword,
				);
			if (this.m_eConnectAttemptStatus == 0) {
				Xw.CloseGameInfoDialog(this.m_dialogID);
			}
		} else {
			this.m_eConnectAttemptStatus = -1;
			if (this.m_hQueryServer == null) {
				this.PingServer();
			}
		}
	}
	SetWindow(e) {
		this.m_window = e;
	}
	SetPassword(e) {
		this.m_strPassword = e;
	}
	ClearConnectAttemptStatus() {
		this.m_eConnectAttemptStatus = 0;
	}
	BringToFront() {
		this.m_window?.SteamClient.Window.BringToFront();
	}
	get id() {
		return this.m_dialogID;
	}
	get pid() {
		return this.m_pid;
	}
	get steamid() {
		return this.m_steamID;
	}
	get userGameInfo() {
		return this.m_gameInfo;
	}
	get gameServerItem() {
		return this.m_gameServerItem;
	}
	get playerList() {
		return this.m_playerList;
	}
	get autoRetry() {
		return this.m_autoRetry;
	}
	set autoRetry(e) {
		this.m_autoRetry = e;
	}
	get password() {
		return this.m_strPassword;
	}
	get connectAttemptStatus() {
		return this.m_eConnectAttemptStatus;
	}
	get bInitialPingAttempt() {
		return this.m_bInitialPingAttempt;
	}
	get bPingInProgress() {
		return this.m_hQueryServer !== undefined;
	}
}
Cg([l.sH], m.prototype, "m_gameInfo", undefined);
Cg([l.sH], m.prototype, "m_gameServerItem", undefined);
Cg([l.sH], m.prototype, "m_playerList", undefined);
Cg([l.sH], m.prototype, "m_hQueryServer", undefined);
Cg([l.sH], m.prototype, "m_autoRetry", undefined);
Cg([l.sH], m.prototype, "m_strPassword", undefined);
Cg([l.sH], m.prototype, "m_eConnectAttemptStatus", undefined);
Cg([l.sH], m.prototype, "m_bInitialPingAttempt", undefined);
Cg([l.XI], m.prototype, "InitForUser", null);
Cg([l.XI], m.prototype, "InitForServer", null);
Cg([l.XI.bound], m.prototype, "OnFriendGamePlayed", null);
Cg([l.XI], m.prototype, "PingServer", null);
Cg([l.XI], m.prototype, "RequestPlayerList", null);
Cg([l.XI.bound], m.prototype, "OnServerInfo", null);
Cg([l.XI.bound], m.prototype, "OnPlayerDetails", null);
Cg([l.EW], m.prototype, "bPingInProgress", null);
class u {
	m_mapGameInfoDialogs = new l.Es();
	m_listPendingPromise = [];
	constructor() {
		Gn(this);
	}
	Init(e) {
		SteamClient.ServerBrowser.RegisterForGameInfoDialogs(
			this.OnGameInfoDialogs,
		);
	}
	OnGameInfoDialogs(e) {
		e.forEach((e) => {
			if (!this.m_mapGameInfoDialogs.has(e.dialogID)) {
				let t = new m(e.dialogID, e.pid);
				if (e.steamID) {
					t.InitForUser(new a.b(e.steamID));
				} else {
					t.InitForServer(e.ip, e.port, e.queryPort);
				}
				this.m_mapGameInfoDialogs.set(e.dialogID, t);
			}
		});
		const t = this.m_listPendingPromise;
		this.m_listPendingPromise = [];
		for (let { dialogID, resolve, reject } of t) {
			const t = this.m_mapGameInfoDialogs.get(dialogID);
			if (t) {
				resolve(t);
			} else {
				reject("Failed");
			}
		}
	}
	ConnectToFriendsGameBySteamID(e, t) {
		let r = o.O$.GetFriendState(e);
		this.ConnectToFriendsGame(r.persona, t);
	}
	ConnectToFriendsGame(e, t) {
		let r = ((e, t, r, n, i) => {
			let o;
			let l = a.b.InitFromAccountID(e);
			if (i != null) {
				o = `steam://joinlobby/${t}/${i}/${l.ConvertTo64BitString()}`;
			} else if (n) {
				o = s.TS.IN_MOBILE
					? `https://s.team/remoteplay/connect/${l.ConvertTo64BitString()}?appid=${t}&${n}`
					: `steam://remoteplay/connect/${l.ConvertTo64BitString()}?appid=${t}&${n}`;
			} else {
				o = `steam://rungame/${t}/${l.ConvertTo64BitString()}`;
				if (r !== undefined) {
					o += `/${encodeURIComponent(r)}`;
				}
			}
			return o;
		})(
			e.GetAccountID(),
			e.m_unGamePlayedAppID,
			e.connect_string,
			e.is_in_valid_lobby && e.m_game_lobby_id,
		);
		t.location.href = r;
	}
	ShowUserGameInfoDialog(e, t) {
		let r = Array.from(this.m_mapGameInfoDialogs.values()).find(
			(r) => r.pid == e && r.steamid?.GetAccountID() == t.GetAccountID(),
		);
		if (r) {
			r.BringToFront();
		} else {
			SteamClient.ServerBrowser.CreateFriendGameInfoDialog(
				e,
				t.ConvertTo64BitString(),
			);
		}
	}
	ShowServerGameInfoDialog(e) {
		const { ip, port, queryPort } = e;

		const i = e.appid ?? 0;
		let a = Array.from(this.m_mapGameInfoDialogs.values()).find(
			(e) =>
				!e.steamid &&
				e.gameServerItem.ip == ip &&
				e.gameServerItem.port == port &&
				e.gameServerItem.queryPort == queryPort,
		);
		if (a) {
			a.BringToFront();
			return Promise.resolve(a);
		} else {
			return new Promise((e, a) =>
				SteamClient.ServerBrowser.CreateServerGameInfoDialog(
					ip,
					port,
					queryPort,
					i,
				)
					.then((t) =>
						this.m_listPendingPromise.push({
							dialogID: t,
							resolve: e,
							reject: a,
						}),
					)
					.catch(a),
			);
		}
	}
	CloseGameInfoDialog(e) {
		let t = this.m_mapGameInfoDialogs.get(e);
		if (t) {
			t.Destroy();
			this.m_mapGameInfoDialogs.delete(e);
		}
	}
	GetGameInfoDialogs(e) {
		return [...this.m_mapGameInfoDialogs.values()].filter((t) => t.pid == e);
	}
}
Cg([l.XI.bound], u.prototype, "OnGameInfoDialogs", null);
Cg([l.XI], u.prototype, "ShowUserGameInfoDialog", null);
Cg([l.XI], u.prototype, "ShowServerGameInfoDialog", null);
Cg([l.XI], u.prototype, "CloseGameInfoDialog", null);
export const Xw = new u();
window.serverBrowserStore = Xw;
