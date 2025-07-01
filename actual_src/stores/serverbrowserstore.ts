// Webpack module ID: TODO

import { wd as CLogger } from "../../src/library/83599.js";
import { b as CSteamID } from "../../src/library/8573.js";
import { TS as Config } from "../../src/library/43691.js";
import { O$ as FriendStore } from "./friendstore.js";
import {
	action,
	computed,
	makeAutoObservable,
	observable,
	ObservableMap,
} from "mobx";
import {
	EJoinServerError,
	ServerBrowserDialog,
	ServerBrowserPlayer,
} from "../steamclient/steamclient/ServerBrowser.js";

new CLogger("ServerBrowserStore");

class GameServerItem_t {
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

class CServerBrowserDialog {
	m_dialogID: number;
	m_pid: number;
	m_steamID = null;
	m_window = null;
	@observable m_gameInfo = null;
	@observable m_gameServerItem = new GameServerItem_t();
	@observable m_playerList = [];
	m_playerListPending = [];
	@observable m_hQueryServer = undefined;
	m_hQueryPlayerList = undefined;
	@observable m_autoRetry = "None";
	@observable m_strPassword = "";
	@observable m_eConnectAttemptStatus: EJoinServerError = undefined;
	@observable m_bInitialPingAttempt = true;

	constructor(dialogID: number, pid: number) {
		makeAutoObservable(this);
		this.m_dialogID = dialogID;
		this.m_pid = pid;
	}

	InitForUser(steamid) {
		this.m_steamID = steamid;
		this.m_gameServerItem = {
			bHadSuccessfulResponse: false,
		};
		this.Init();
		this.Refresh();
	}

	InitForServer(ip: string, port: number, queryPort: number) {
		this.m_gameServerItem = {
			ip,
			port,
			queryPort,
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

	OnFriendGamePlayed(gameInfo) {
		this.m_gameInfo = gameInfo;
		if (
			this.m_gameServerItem.ip != gameInfo.ip ||
			this.m_gameServerItem.port != gameInfo.port ||
			this.m_gameServerItem.port != gameInfo.port ||
			this.m_gameServerItem.queryPort != gameInfo.queryPort ||
			this.m_gameServerItem.port != gameInfo.port ||
			this.m_gameServerItem.queryPort != gameInfo.queryPort ||
			this.m_gameServerItem.appid != gameInfo.appid
		) {
			this.m_gameServerItem = {
				ip: gameInfo.ip,
				port: gameInfo.port,
				queryPort: gameInfo.queryPort,
				appid: gameInfo.appid,
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

	OnServerInfo(server: GameServerItem_t) {
		this.m_bInitialPingAttempt = false;
		this.m_gameServerItem = server;
		if (this.m_hQueryServer) {
			SteamClient.ServerBrowser.CancelServerQuery(
				this.m_dialogID,
				this.m_hQueryServer,
			);
		}
		this.m_hQueryServer = undefined;
		if (this.m_eConnectAttemptStatus != EJoinServerError.Pinging) {
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
			this.m_eConnectAttemptStatus = EJoinServerError.PingFailed;
		}
	}

	OnPlayerDetails(details: ServerBrowserPlayer) {
		if (this.m_hQueryPlayerList) {
			SteamClient.ServerBrowser.CancelServerQuery(
				this.m_dialogID,
				this.m_hQueryPlayerList,
			);
		}
		this.m_hQueryPlayerList = undefined;
		if (details.bRefreshComplete) {
			this.m_playerList = this.m_playerListPending;
			this.m_playerListPending = [];
		} else if (details.bSuccess) {
			this.m_playerListPending.push(details);
			console.log(`player${details.playerName}`);
		}
	}

	async Connect(bForceConnect: boolean) {
		this.m_eConnectAttemptStatus = EJoinServerError.Connecting;
		if (this.m_steamID) {
			Xw.ConnectToFriendsGameBySteamID(this.m_steamID, this.m_window);
			Xw.CloseGameInfoDialog(this.m_dialogID);
		} else if (
			this.gameServerItem.appid &&
			(this.gameServerItem.bHadSuccessfulResponse || bForceConnect)
		) {
			console.log(
				`ServerBrowser.ConnectToServer( ${this.gameServerItem.ip}:${this.gameServerItem.port} )`,
			);
			this.m_eConnectAttemptStatus =
				await SteamClient.ServerBrowser.ConnectToServer(
					this.m_dialogID,
					this.m_strPassword,
				);
			if (this.m_eConnectAttemptStatus == EJoinServerError.None) {
				Xw.CloseGameInfoDialog(this.m_dialogID);
			}
		} else {
			this.m_eConnectAttemptStatus = EJoinServerError.Pinging;
			if (this.m_hQueryServer == null) {
				this.PingServer();
			}
		}
	}

	SetWindow(wnd: Window) {
		this.m_window = wnd;
	}
	SetPassword(pw: string) {
		this.m_strPassword = pw;
	}
	ClearConnectAttemptStatus() {
		this.m_eConnectAttemptStatus = EJoinServerError.None;
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
	@computed get bPingInProgress() {
		return this.m_hQueryServer !== undefined;
	}
}
Cg([XI], CServerBrowserDialog.prototype, "InitForUser", null);
Cg([XI], CServerBrowserDialog.prototype, "InitForServer", null);
Cg([XI.bound], CServerBrowserDialog.prototype, "OnFriendGamePlayed", null);
Cg([XI], CServerBrowserDialog.prototype, "PingServer", null);
Cg([XI], CServerBrowserDialog.prototype, "RequestPlayerList", null);
Cg([XI.bound], CServerBrowserDialog.prototype, "OnServerInfo", null);
Cg([XI.bound], CServerBrowserDialog.prototype, "OnPlayerDetails", null);

class CServerBrowserStore {
	m_mapGameInfoDialogs = new ObservableMap<number, CServerBrowserDialog>();
	m_listPendingPromise = [];

	constructor() {
		makeAutoObservable(this);
	}

	Init(e) {
		SteamClient.ServerBrowser.RegisterForGameInfoDialogs(
			this.OnGameInfoDialogs,
		);
	}

	@action OnGameInfoDialogs(dialogs: ServerBrowserDialog[]) {
		dialogs.forEach((dialog) => {
			if (!this.m_mapGameInfoDialogs.has(dialog.dialogID)) {
				let dialog = new CServerBrowserDialog(dialog.dialogID, dialog.pid);
				if (dialog.steamID) {
					dialog.InitForUser(new CSteamID(dialog.steamID));
				} else {
					dialog.InitForServer(dialog.ip, dialog.port, dialog.queryPort);
				}
				this.m_mapGameInfoDialogs.set(dialog.dialogID, dialog);
			}
		});
		const promises = this.m_listPendingPromise;
		this.m_listPendingPromise = [];
		for (let { dialogID, resolve, reject } of promises) {
			const t = this.m_mapGameInfoDialogs.get(dialogID);
			if (t) {
				resolve(t);
			} else {
				reject("Failed");
			}
		}
	}

	ConnectToFriendsGameBySteamID(e, wnd: Window) {
		let friend = FriendStore.GetFriendState(e);
		this.ConnectToFriendsGame(friend.persona, wnd);
	}

	ConnectToFriendsGame(e, wnd: Window) {
		let r = ((
			accountid: number,
			unGamePlayedAppID,
			connect_string,
			game_lobby_id,
			i,
		) => {
			let steamURL: string;
			let steamid = CSteamID.InitFromAccountID(accountid);
			if (i != null) {
				steamURL = `steam://joinlobby/${unGamePlayedAppID}/${i}/${steamid.ConvertTo64BitString()}`;
			} else if (game_lobby_id) {
				steamURL = Config.IN_MOBILE
					? `https://s.team/remoteplay/connect/${steamid.ConvertTo64BitString()}?appid=${unGamePlayedAppID}&${game_lobby_id}`
					: `steam://remoteplay/connect/${steamid.ConvertTo64BitString()}?appid=${unGamePlayedAppID}&${game_lobby_id}`;
			} else {
				steamURL = `steam://rungame/${unGamePlayedAppID}/${steamid.ConvertTo64BitString()}`;
				if (connect_string !== undefined) {
					steamURL += `/${encodeURIComponent(connect_string)}`;
				}
			}
			return steamURL;
		})(
			e.GetAccountID(),
			e.m_unGamePlayedAppID,
			e.connect_string,
			e.is_in_valid_lobby && e.m_game_lobby_id,
		);
		wnd.location.href = r;
	}

	@action ShowUserGameInfoDialog(pid: number, steamid) {
		let existingDialog = Array.from(this.m_mapGameInfoDialogs.values()).find(
			(r) =>
				r.pid == pid && r.steamid?.GetAccountID() == steamid.GetAccountID(),
		);

		if (existingDialog) {
			existingDialog.BringToFront();
		} else {
			SteamClient.ServerBrowser.CreateFriendGameInfoDialog(
				pid,
				steamid.ConvertTo64BitString(),
			);
		}
	}

	@action ShowServerGameInfoDialog(server: GameServerItem_t) {
		const { ip, port, queryPort } = server;
		const appid = server.appid ?? 0;
		let existingDialog = Array.from(this.m_mapGameInfoDialogs.values()).find(
			(e) =>
				!e.steamid &&
				e.gameServerItem.ip == ip &&
				e.gameServerItem.port == port &&
				e.gameServerItem.queryPort == queryPort,
		);

		if (existingDialog) {
			existingDialog.BringToFront();
			return Promise.resolve(existingDialog);
		} else {
			return new Promise((resolve, reject) =>
				SteamClient.ServerBrowser.CreateServerGameInfoDialog(
					ip,
					port,
					queryPort,
					appid,
				)
					.then((dialogID) =>
						this.m_listPendingPromise.push({
							dialogID,
							resolve,
							reject,
						}),
					)
					.catch(reject),
			);
		}
	}

	@action CloseGameInfoDialog(pid: number) {
		let dialog = this.m_mapGameInfoDialogs.get(pid);
		if (dialog) {
			dialog.Destroy();
			this.m_mapGameInfoDialogs.delete(pid);
		}
	}

	GetGameInfoDialogs(pid: number) {
		return [...this.m_mapGameInfoDialogs.values()].filter((t) => t.pid == pid);
	}
}

export const Xw = new CServerBrowserStore();
window.serverBrowserStore = Xw;
