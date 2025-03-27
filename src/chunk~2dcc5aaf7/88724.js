import { Localize, Hq } from "../../actual_src/utils/localization.js";
import { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import { tB } from "./59351.js";
import s from "./36934.js";
import l from "./72476.js";
import c, { t } from "./93023.js";
export let tp = c.t;
export let dV = c.d;
export function rO(e) {
	let t = "offline";
	if (e) {
		if (e.is_ingame) {
			t = "ingame";
		} else if (e.m_broadcastAccountId) {
			t = "watchingbroadcast";
		} else if (e.is_online) {
			t = "online";
		}
		if (e.is_awayOrSnooze) {
			t += " awayOrSnooze";
		}
	}
	return t;
}
export class Z {
	m_steamid;
	m_bInitialized = false;
	m_ePersonaState = 0;
	m_unGamePlayedAppID = 0;
	m_gameid = "0";
	m_unPersonaStateFlags = 0;
	m_strPlayerName = "";
	m_strAvatarHash = c.d;
	m_strAccountName = "";
	m_rtLastSeenOnline = 0;
	m_strGameExtraInfo = "";
	m_unGameServerIP = 0;
	m_unGameServerPort = 0;
	m_game_lobby_id = "";
	m_bPlayerNamePending = false;
	m_bAvatarPending = false;
	m_broadcastId = undefined;
	m_broadcastAccountId = undefined;
	m_broadcastAppId = undefined;
	m_broadcastViewerCount = undefined;
	m_strBroadcastTitle = undefined;
	m_bCommunityBanned = undefined;
	m_bOnSteamDeck = false;
	m_mapRichPresence = i.sH.map();
	m_bNameInitialized = false;
	m_bStatusInitialized = false;
	m_strProfileURL = undefined;
	constructor(e) {
		Gn(this);
		this.m_steamid = e;
	}
	Reset() {
		this.m_ePersonaState = 0;
		this.m_unGamePlayedAppID = 0;
		this.m_gameid = "0";
		this.m_strGameExtraInfo = "";
		this.m_unGameServerIP = 0;
		this.m_unGameServerPort = 0;
		this.m_game_lobby_id = "";
		this.m_mapRichPresence.clear();
		this.m_broadcastId = undefined;
		this.m_broadcastAccountId = undefined;
		this.m_broadcastAppId = undefined;
		this.m_broadcastViewerCount = undefined;
		this.m_strBroadcastTitle = undefined;
		this.m_bOnSteamDeck = false;
	}
	GetAccountID() {
		return this.m_steamid.GetAccountID();
	}
	get is_online() {
		return this.m_ePersonaState != 0 && this.m_ePersonaState != 7;
	}
	get is_ingame() {
		return (
			this.is_online && (this.m_unGamePlayedAppID != 0 || this.m_gameid != "0")
		);
	}
	get is_watchingbroadcast() {
		return !!this.m_broadcastAccountId;
	}
	get is_in_nonsteam_game() {
		return this.m_unGamePlayedAppID == 0 && this.m_gameid != "0";
	}
	get is_in_joinable_game() {
		return (
			this.has_joinable_game_flag ||
			this.is_in_valid_lobby ||
			this.is_in_valid_lobby ||
			this.has_server_ip
		);
	}
	get has_joinable_game_flag() {
		return ((this.m_unPersonaStateFlags ?? 0) & 2) != 0;
	}
	get connect_string() {
		return this.m_mapRichPresence.get("connect");
	}
	get is_in_valid_lobby() {
		return this.m_game_lobby_id != null && this.m_game_lobby_id != "0";
	}
	get has_server_ip() {
		return this.m_unGameServerIP != 0;
	}
	get is_awayOrSnooze() {
		return this.m_ePersonaState == 3 || this.m_ePersonaState == 4;
	}
	HasStateFlag(e) {
		return ((this.m_unPersonaStateFlags ?? 0) & e) != 0;
	}
	get last_seen_online() {
		return this.m_rtLastSeenOnline;
	}
	ClearStateOnDisconnect() {
		if (this.m_ePersonaState != 0) {
			this.Reset();
		}
	}
	get is_golden() {
		return this.HasStateFlag(4);
	}
	IsOnSteamDeck() {
		return this.m_bOnSteamDeck;
	}
	GetCurrentGameName() {
		if (this.m_strGameExtraInfo) {
			return this.m_strGameExtraInfo;
		} else if (this.m_unGamePlayedAppID) {
			return s.Vw.GetAppInfo(this.m_unGamePlayedAppID).name;
		} else {
			return "";
		}
	}
	GetCurrentGameIconURL() {
		if (this.m_unGamePlayedAppID) {
			return s.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url;
		} else {
			return "";
		}
	}
	BIsAppInfoReady() {
		return (
			!this.m_unGamePlayedAppID ||
			s.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
		);
	}
	HasCurrentGameRichPresence() {
		return this.m_mapRichPresence.has("steam_display");
	}
	HasRichPresenceForViewGameInfo() {
		return (
			!!this.m_mapRichPresence.has("status") ||
			!!this.m_mapRichPresence.has("connect") ||
			!!this.m_mapRichPresence.has("connect") ||
			!!this.m_mapRichPresence.has("connect_private")
		);
	}
	GetCurrentGameRichPresence() {
		if (this.HasCurrentGameRichPresence()) {
			let e = s.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
			if (e) {
				let t = this.m_mapRichPresence.get("steam_display");
				return e.Localize(t, this.m_mapRichPresence);
			}
		} else if (this.HasStateFlag(8)) {
			return (0, Localize)("#PersonaStateRemotePlayTogether");
		}
		return "";
	}
	GetCurrentGameStatus() {
		return (
			this.GetCurrentGameRichPresence() ||
			this.m_mapRichPresence.get("status") ||
			this.m_mapRichPresence.get("status") ||
			""
		);
	}
	GetOfflineStatusUpdateRate() {
		if (this.last_seen_online == 0) {
			return 30000;
		}
		const e = 3600;
		let t = 1000;
		const r = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
		t *= r > 86400 ? e : r > 7200 ? 60 : 15;
		return t;
	}
	GetOfflineStatusTime() {
		if (this.last_seen_online == 0) {
			return (0, Localize)("#PersonaStateOffline");
		}
		let e = this.GetOfflineStatusUpdateRate();
		if (!l.TS.IN_MOBILE || e <= 60) {
			tB(e);
		}
		let t = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
		if (t < 60) {
			return (0, Localize)("#PersonaStateLastSeen_JustNow");
		} else {
			return (0, Localize)("#PersonaStateLastSeen", (0, Hq)(t));
		}
	}
	GetLocalizedOnlineStatus() {
		switch (this.m_ePersonaState) {
			case 0:
			case 7: {
				return this.GetOfflineStatusTime();
			}
			case 1: {
				return (0, Localize)("#PersonaStateOnline");
			}
			case 2: {
				return (0, Localize)("#PersonaStateBusy");
			}
			case 3: {
				return (0, Localize)("#PersonaStateAway");
			}
			case 4: {
				return (0, Localize)("#PersonaStateSnooze");
			}
			case 5: {
				return (0, Localize)("#PersonaStateLookingToTrade");
			}
			case 6: {
				return (0, Localize)("#PersonaStateLookingToPlay");
			}
			default: {
				return "";
			}
		}
	}
	get has_public_party_beacon() {
		return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
	}
	get player_group() {
		if (this.m_mapRichPresence.has("steam_player_group")) {
			return this.m_mapRichPresence.get("steam_player_group");
		} else {
			return "";
		}
	}
	get player_group_size() {
		if (this.m_mapRichPresence.has("steam_player_group_size")) {
			return Number.parseInt(
				this.m_mapRichPresence.get("steam_player_group_size"),
			);
		} else {
			return 0;
		}
	}
	get online_state() {
		if (this.is_online) {
			if (this.is_ingame) {
				return "in-game";
			} else if (this.m_broadcastAccountId) {
				return "watchingbroadcast";
			} else {
				return "online";
			}
		} else {
			return "offline";
		}
	}
	BHasAvatarSet() {
		return this.m_strAvatarHash != c.d;
	}
	get avatar_url() {
		return t(this.m_strAvatarHash);
	}
	get avatar_url_medium() {
		return t(this.m_strAvatarHash, "medium");
	}
	get avatar_url_full() {
		return t(this.m_strAvatarHash, "full");
	}
	static SortStatusComparator(e, t, r) {
		if (t.has_public_party_beacon) {
			if (!r.has_public_party_beacon) {
				return -1;
			}
		} else {
			if (r.has_public_party_beacon) {
				return 1;
			}
			if (t.is_ingame) {
				if (!r.is_ingame) {
					return -1;
				}
				if (!e) {
					return 0;
				}
				if (t.is_awayOrSnooze) {
					if (!r.is_awayOrSnooze) {
						return 1;
					}
				} else if (r.is_awayOrSnooze) {
					return -1;
				}
			} else if (r.is_ingame) {
				return 1;
			}
		}
		if (t.is_online) {
			if (!r.is_online) {
				return -1;
			}
		} else if (r.is_online) {
			return 1;
		}
		if (e) {
			if (t.is_awayOrSnooze) {
				if (!r.is_awayOrSnooze) {
					return 1;
				}
			} else if (r.is_awayOrSnooze) {
				return -1;
			}
		}
		return 0;
	}
	GetCommunityProfileURL() {
		if (this.m_strProfileURL) {
			return `${l.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`;
		} else {
			return `${
				l.TS.COMMUNITY_BASE_URL
			}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
		}
	}
}
Cg([i.sH], Z.prototype, "m_bInitialized", undefined);
Cg([i.sH], Z.prototype, "m_ePersonaState", undefined);
Cg([i.sH], Z.prototype, "m_unGamePlayedAppID", undefined);
Cg([i.sH], Z.prototype, "m_gameid", undefined);
Cg([i.sH], Z.prototype, "m_unPersonaStateFlags", undefined);
Cg([i.sH], Z.prototype, "m_strPlayerName", undefined);
Cg([i.sH], Z.prototype, "m_strAvatarHash", undefined);
Cg([i.sH], Z.prototype, "m_strAccountName", undefined);
Cg([i.sH], Z.prototype, "m_rtLastSeenOnline", undefined);
Cg([i.sH], Z.prototype, "m_strGameExtraInfo", undefined);
Cg([i.sH], Z.prototype, "m_unGameServerIP", undefined);
Cg([i.sH], Z.prototype, "m_unGameServerPort", undefined);
Cg([i.sH], Z.prototype, "m_game_lobby_id", undefined);
Cg([i.sH], Z.prototype, "m_bPlayerNamePending", undefined);
Cg([i.sH], Z.prototype, "m_bAvatarPending", undefined);
Cg([i.sH], Z.prototype, "m_broadcastId", undefined);
Cg([i.sH], Z.prototype, "m_broadcastAccountId", undefined);
Cg([i.sH], Z.prototype, "m_broadcastAppId", undefined);
Cg([i.sH], Z.prototype, "m_broadcastViewerCount", undefined);
Cg([i.sH], Z.prototype, "m_strBroadcastTitle", undefined);
Cg([i.sH], Z.prototype, "m_bCommunityBanned", undefined);
Cg([i.sH], Z.prototype, "m_bOnSteamDeck", undefined);
