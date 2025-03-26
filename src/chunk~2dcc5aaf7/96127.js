var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./44234.js");
var a = require(/*webcrack:missing*/ "./12176.js");
var s = require("./88724.js");
var o = require(/*webcrack:missing*/ "./16583.js");
var l = require("./21866.js");
var c = require(/*webcrack:missing*/ "./8573.js");
var m = require("./93023.js");
class u extends s.Z {
	UpdateFromMessage(e, t) {
		if ((e & 1) != 0) {
			this.m_bStatusInitialized = true;
			this.m_ePersonaState = t.persona_state() || 0;
			if (this.m_ePersonaState != 0) {
				this.m_unGamePlayedAppID = t.game_played_app_id() || 0;
				this.m_gameid = t.gameid() || "0";
				this.m_strGameExtraInfo = t.game_name() || "";
				this.m_unGameServerIP = t.game_server_ip() || 0;
				this.m_unGameServerPort = t.game_server_port() || 0;
				this.m_game_lobby_id = t.game_lobby_id() || "";
			} else {
				this.Reset();
			}
		}
		if ((e & 2) != 0) {
			this.m_bNameInitialized = true;
			let e = t.player_name() || "";
			this.m_strPlayerName = e;
		}
		if ((e & 64) != 0) {
			this.m_rtLastSeenOnline = t.last_seen_online() || t.last_logoff() || 0;
		}
		if ((e & 16) != 0) {
			let e = t.avatar_hash();
			let r = true;
			if (e) {
				for (let t = 0; t < e.length && r; t++) {
					r = !e[t];
				}
				this.m_strAvatarHash = r ? m.d : (0, o.Kx)(e);
			}
		}
		if (t.persona_state_flags() !== undefined) {
			this.m_unPersonaStateFlags = t.persona_state_flags();
		}
		if (t.on_steam_deck() !== undefined) {
			this.m_bOnSteamDeck = t.on_steam_deck();
		}
		if ((e & 4096) != 0) {
			this.m_mapRichPresence.clear();
			for (let e of t.rich_presence()) {
				this.m_mapRichPresence.set(e.key().toLowerCase(), e.value());
			}
		}
		if ((e & 8192) != 0) {
			this.m_broadcastId = t.broadcast_id();
		}
		if ((e & 16384) != 0) {
			let e = c.b
				.InitFromAccountID(t.watching_broadcast_accountid())
				.ConvertTo64BitString();
			if (e && l.td.stream[e]) {
				this.m_broadcastAccountId = t.watching_broadcast_accountid();
				this.m_broadcastAppId = t.watching_broadcast_appid();
				this.m_broadcastViewerCount = t.watching_broadcast_viewers();
				this.m_strBroadcastTitle = t.watching_broadcast_title();
			} else {
				this.m_broadcastAccountId = 0;
				this.m_broadcastAppId = 0;
				this.m_broadcastViewerCount = 0;
				this.m_strBroadcastTitle = "";
			}
		}
		this.m_bCommunityBanned = t.is_community_banned();
		if (this.m_bNameInitialized && this.m_bStatusInitialized) {
			this.m_bInitialized = true;
		}
		if (t.player_name_pending_review() !== undefined) {
			this.m_bPlayerNamePending = t.player_name_pending_review();
		}
		if (t.avatar_pending_review() !== undefined) {
			this.m_bAvatarPending = t.avatar_pending_review();
		}
	}
}
var d = require("./36383.js");
var A = require(/*webcrack:missing*/ "./82755.js");
var p = require(/*webcrack:missing*/ "./49395.js");
var g = require(/*webcrack:missing*/ "./58663.js");
var h = require(/*webcrack:missing*/ "./48307.js");
require(/*webcrack:missing*/ "./29218.js");
const C = g.Message;
class _ extends C {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!_.prototype.app_id) {
			h.Sg(_.M());
		}
		C.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		_.sm_m ||= {
			proto: _,
			fields: {
				app_id: {
					n: 1,
					br: h.qM.readUint32,
					bw: h.gp.writeUint32,
				},
				steam_id_lobby: {
					n: 2,
					br: h.qM.readFixed64String,
					bw: h.gp.writeFixed64String,
				},
				steam_id_user_invited: {
					n: 3,
					br: h.qM.readFixed64String,
					bw: h.gp.writeFixed64String,
				},
			},
		};
		return _.sm_m;
	}
	static MBF() {
		_.sm_mbf ||= h.w0(_.M());
		return _.sm_mbf;
	}
	toObject(e = false) {
		return _.toObject(e, this);
	}
	static toObject(e, t) {
		return h.BT(_.M(), e, t);
	}
	static fromObject(e) {
		return h.Uq(_.M(), e);
	}
	static deserializeBinary(e) {
		let t = new g.BinaryReader(e);
		let r = new _();
		return _.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return h.zj(_.MBF(), e, t);
	}
	serializeBinary() {
		var e = new g.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		h.i0(_.M(), e, t);
	}
	serializeBase64String() {
		var e = new g.BinaryWriter();
		_.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CMsgClientMMSInviteToLobby";
	}
}
const f = g.Message;
class b extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!b.prototype.impressions) {
			h.Sg(b.M());
		}
		f.initialize(this, e, 0, -1, [1], null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		b.sm_m ||= {
			proto: b,
			fields: {
				impressions: {
					n: 1,
					c: y,
					r: true,
					q: true,
				},
			},
		};
		return b.sm_m;
	}
	static MBF() {
		b.sm_mbf ||= h.w0(b.M());
		return b.sm_mbf;
	}
	toObject(e = false) {
		return b.toObject(e, this);
	}
	static toObject(e, t) {
		return h.BT(b.M(), e, t);
	}
	static fromObject(e) {
		return h.Uq(b.M(), e);
	}
	static deserializeBinary(e) {
		let t = new g.BinaryReader(e);
		let r = new b();
		return b.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return h.zj(b.MBF(), e, t);
	}
	serializeBinary() {
		var e = new g.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		h.i0(b.M(), e, t);
	}
	serializeBase64String() {
		var e = new g.BinaryWriter();
		b.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CProductImpressionsFromClient_Notification";
	}
}
class y extends f {
	static ImplementsStaticInterface() {}
	constructor(e = null) {
		super();
		if (!y.prototype.type) {
			h.Sg(y.M());
		}
		f.initialize(this, e, 0, -1, undefined, null);
	}
	static sm_m;
	static sm_mbf;
	static M() {
		y.sm_m ||= {
			proto: y,
			fields: {
				type: {
					n: 1,
					br: h.qM.readEnum,
					bw: h.gp.writeEnum,
				},
				appid: {
					n: 2,
					br: h.qM.readUint32,
					bw: h.gp.writeUint32,
				},
				num_impressions: {
					n: 3,
					br: h.qM.readUint32,
					bw: h.gp.writeUint32,
				},
			},
		};
		return y.sm_m;
	}
	static MBF() {
		y.sm_mbf ||= h.w0(y.M());
		return y.sm_mbf;
	}
	toObject(e = false) {
		return y.toObject(e, this);
	}
	static toObject(e, t) {
		return h.BT(y.M(), e, t);
	}
	static fromObject(e) {
		return h.Uq(y.M(), e);
	}
	static deserializeBinary(e) {
		let t = new g.BinaryReader(e);
		let r = new y();
		return y.deserializeBinaryFromReader(r, t);
	}
	static deserializeBinaryFromReader(e, t) {
		return h.zj(y.MBF(), e, t);
	}
	serializeBinary() {
		var e = new g.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBuffer();
	}
	static serializeBinaryToWriter(e, t) {
		h.i0(y.M(), e, t);
	}
	serializeBase64String() {
		var e = new g.BinaryWriter();
		y.serializeBinaryToWriter(this, e);
		return e.getResultBase64String();
	}
	getClassName() {
		return "CProductImpressionsFromClient_Notification_Impression";
	}
}
var S;
(function (e) {
	e.ReportProductImpressionsFromClient = function (e, t) {
		return e.SendNotification(
			"ExperimentService.ReportProductImpressionsFromClient#1",
			(0, a.I8)(b, t),
			{
				ePrivilege: 1,
			},
		);
	};
})((S ||= {}));
var w = require("./26052.js");
var B = require("./54946.js");
var v = require("./46066.js");
var I = require("./32493.js");
var E = require("./95773.js");
var M = require(/*webcrack:missing*/ "./89193.js");
var T = require(/*webcrack:missing*/ "./49455.js");
class R {
	m_bInitialized = false;
	m_bGotInitialState = false;
	m_steamid;
	m_eClanRelationship = undefined;
	m_strClanName = "";
	m_strClanTag = "";
	m_strAvatarHash = s.dV;
	m_eClanAccountFlags = 0;
	m_unOGGAppID;
	m_ulChatRoomGroupID = undefined;
	m_cMemberCount = 0;
	m_cUsersOnline = 0;
	m_cUsersInGame = 0;
	m_cChatRoomMembers = 0;
	m_bChatRoomPrivate = undefined;
	m_bPersonaStateDesired = false;
	m_bPersonaStateLoadRequested = false;
	constructor(e, t) {
		(0, M.Gn)(this);
		this.m_steamid = e;
		this.m_eClanRelationship = t;
	}
	BNeedsToLoadPersonaStateData() {
		return !this.m_bInitialized && !this.m_bPersonaStateLoadRequested;
	}
	BPersonaStateDesired() {
		return this.m_bPersonaStateDesired;
	}
	SetPersonaStateDesired() {
		this.m_bPersonaStateDesired = true;
	}
	SetPersonaStateLoadRequested() {
		this.m_bPersonaStateLoadRequested = true;
	}
	get name() {
		if (this.m_bInitialized) {
			return this.m_strClanName;
		} else {
			return "";
		}
	}
	get steamid() {
		return this.m_steamid;
	}
	get clanid() {
		return this.m_steamid.GetAccountID();
	}
	get member_count() {
		return this.m_cMemberCount;
	}
	get users_online() {
		return this.m_cUsersOnline;
	}
	get users_ingame() {
		return this.m_cUsersInGame;
	}
	get count_chat_room_members() {
		return this.m_cChatRoomMembers;
	}
	get chat_room_private() {
		return this.m_bChatRoomPrivate;
	}
	BIsMember() {
		return this.m_eClanRelationship == 3;
	}
	BIsInvite() {
		return this.m_eClanRelationship == 2;
	}
	SetRelationship(e) {
		this.m_eClanRelationship = e;
	}
	BIsOGG() {
		return (
			!!this.m_unOGGAppID ||
			(this.m_bGotInitialState && (this.m_eClanAccountFlags & 16) != 0)
		);
	}
	GetOGGAppID() {
		return this.m_unOGGAppID;
	}
	BMatchesSearchString(e) {
		return this.m_strClanName.toLocaleLowerCase().indexOf(e) !== -1;
	}
	get avatar_url() {
		return (0, s.tp)(this.m_strAvatarHash);
	}
	get avatar_url_medium() {
		if (this.BIsOGG()) {
			return this.avatar_url;
		} else {
			return (0, s.tp)(this.m_strAvatarHash, "medium");
		}
	}
	get avatar_url_full() {
		if (this.BIsOGG()) {
			return this.avatar_url;
		} else {
			return (0, s.tp)(this.m_strAvatarHash, "full");
		}
	}
	OpenChatDialog(e, t = true) {
		return this.GetChatRoomGroupID().then((r) => {
			E.xm.ChatStore.JoinAndShowChatRoomGroup(e, r, t);
			return r;
		});
	}
	ReadPersonaStateUpdate(e, t) {
		this.m_bInitialized = true;
		if ((e & 2) != 0) {
			this.m_strClanName = t.player_name();
		}
		if ((e & 1024) != 0) {
			this.m_strClanTag = t.clan_tag();
			if (t.clan_data().chat_group_id()) {
				this.m_ulChatRoomGroupID = t.clan_data().chat_group_id();
			}
			if (t.clan_data().ogg_app_id()) {
				this.m_unOGGAppID = t.clan_data().ogg_app_id();
			}
		}
		if ((e & 16) != 0) {
			let e = t.avatar_hash();
			let r = true;
			if (e) {
				for (let t = 0; t < e.length && r; t++) {
					r = !e[t];
				}
				this.m_strAvatarHash = r ? s.dV : (0, o.Kx)(e);
			}
		}
	}
	ReadStateUpdate(e) {
		this.m_bGotInitialState = true;
		this.m_eClanAccountFlags = e.clan_account_flags();
		this.m_bChatRoomPrivate = e.chat_room_private();
		if (e.user_counts() !== undefined && e.user_counts().members()) {
			let t = e.user_counts();
			this.m_cMemberCount = t.members();
			this.m_cUsersOnline = t.online();
			this.m_cUsersInGame = t.in_game();
			this.m_cChatRoomMembers = t.chat_room_members();
		}
	}
	GetChatGroupIDIfLoaded() {
		return this.m_ulChatRoomGroupID;
	}
	GetChatRoomGroupID() {
		if (this.m_ulChatRoomGroupID) {
			return Promise.resolve(this.m_ulChatRoomGroupID);
		}
		{
			let e = a.w.Init(d.AF);
			e.Body().set_steamid(this.steamid.ConvertTo64BitString());
			e.Body().set_autocreate(true);
			return d.WA.GetClanChatRoomInfo(
				E.xm.CMInterface.GetServiceTransport(),
				e,
			).then((e) =>
				e.GetEResult() == 1 && e.Body().chat_group_summary().chat_group_id()
					? ((this.m_ulChatRoomGroupID = e
							.Body()
							.chat_group_summary()
							.chat_group_id()),
						this.m_ulChatRoomGroupID)
					: null,
			);
		}
	}
	SetChatGroupID(e) {
		this.m_ulChatRoomGroupID = e;
	}
}
(0, n.Cg)([M.sH], R.prototype, "m_bInitialized", undefined);
(0, n.Cg)([M.sH], R.prototype, "m_bGotInitialState", undefined);
(0, n.Cg)([M.sH], R.prototype, "m_eClanRelationship", undefined);
(0, n.Cg)([M.sH], R.prototype, "m_strAvatarHash", undefined);
(0, n.Cg)([M.sH], R.prototype, "m_ulChatRoomGroupID", undefined);
(0, n.Cg)([M.sH], R.prototype, "m_cMemberCount", undefined);
(0, n.Cg)([M.sH], R.prototype, "m_cUsersOnline", undefined);
(0, n.Cg)([M.sH], R.prototype, "m_cUsersInGame", undefined);
(0, n.Cg)([M.sH], R.prototype, "m_cChatRoomMembers", undefined);
(0, n.Cg)([M.sH], R.prototype, "m_bChatRoomPrivate", undefined);
(0, n.Cg)([M.EW], R.prototype, "avatar_url", null);
(0, n.Cg)([M.EW], R.prototype, "avatar_url_medium", null);
(0, n.Cg)([M.EW], R.prototype, "avatar_url_full", null);
class k {
	m_CMInterface;
	m_FriendStore;
	m_mapClans = M.sH.map();
	m_iIntervalLoadClanData;
	constructor(e) {
		(0, M.Gn)(this);
		this.m_FriendStore = e;
	}
	Init(e) {
		this.m_CMInterface = e;
		this.m_CMInterface.AddOnLogonCallback(this.OnLogOn.bind(this));
		this.m_CMInterface.messageHandlers.RegisterEMessageAction(
			822,
			p.Fk,
			(e) => {
				let t = new c.b(e.Body().steamid_clan());
				this.GetOrCreateClan(t).ReadStateUpdate(e.Body());
			},
		);
	}
	OnLogOn() {}
	get clan_invite_count() {
		let e = 0;
		this.m_mapClans.forEach((t) => {
			if (t.BIsInvite()) {
				e++;
			}
		});
		return e;
	}
	get clan_invites() {
		let e = [];
		this.m_mapClans.forEach((t) => {
			if (t.m_bInitialized && t.BIsInvite()) {
				e.push(t);
			}
		});
		e.sort((e, t) => e.name.localeCompare(t.name));
		return e;
	}
	GetClan(e) {
		let t;
		if (e instanceof c.b) {
			(0, T.w)(e.BIsClanAccount(), "expected clan steamid in GetClan()");
			t = e.GetAccountID();
		} else {
			t = e;
		}
		const r = this.m_mapClans.get(t);
		if (r) {
			this.LoadClanPersonaIfNeeded(r);
		}
		return r;
	}
	JoinClanChatRoom(e, t) {
		let r = this.GetOrCreateClan(t);
		r.OpenChatDialog(e, true);
		this.LoadClanPersonaIfNeeded(r);
	}
	ClearClanMembershipData() {
		this.m_mapClans.forEach((e) => {
			e.SetRelationship(0);
		});
	}
	SetClanChatGroupID(e, t) {
		this.GetOrCreateClan(e).SetChatGroupID(t);
	}
	LoadClanPersonaIfNeeded(e) {
		e.SetPersonaStateDesired();
		if (e.BNeedsToLoadPersonaStateData()) {
			this.ScheduleLoadMissingClanPersonas();
		}
	}
	GetOrCreateClan(e, t) {
		let r;
		r = e instanceof c.b ? e : c.b.InitFromClanID(e);
		let n = this.m_mapClans.get(r.GetAccountID());
		if (n) {
			if (t !== undefined) {
				n.SetRelationship(t);
			}
		} else {
			n = new R(r, t || 0);
			this.m_mapClans.set(r.GetAccountID(), n);
		}
		return n;
	}
	OnClanRelationshipChanged(e, t) {
		this.GetOrCreateClan(e, t);
	}
	RespondToClanInvite(e, t) {
		let r = a.w.Init(I.Ek);
		r.Body().set_steamid(e.ConvertTo64BitString());
		r.Body().set_accept(t);
		return I.oH
			.RespondToClanInvite(this.m_CMInterface.GetServiceTransport(), r)
			.then((e) => e.GetEResult() == 1);
	}
	EnsureInitialStateForClanInvites() {
		let e = a.w.Init(v.d_, 5554);
		this.clan_invites.forEach((t) => {
			if (!t.m_bGotInitialState) {
				e.Body().add_steamid_clans(t.steamid.ConvertTo64BitString());
			}
		});
		if (!(e.Body().steamid_clans().length <= 0)) {
			this.m_CMInterface.Send(e);
		}
	}
	ScheduleLoadMissingClanPersonas() {
		this.m_iIntervalLoadClanData ||= SetBackgroundTimeout(
			this.LoadMissingClanPersonas.bind(this),
			100,
		);
	}
	LoadMissingClanPersonas() {
		if (this.m_iIntervalLoadClanData) {
			ClearBackgroundTimeout(this.m_iIntervalLoadClanData);
			this.m_iIntervalLoadClanData = undefined;
		}
		let e = a.w.Init(A.nz, 815);
		e.Body().set_persona_state_requested(1042);
		this.m_mapClans.forEach((t) => {
			if (t.BPersonaStateDesired() && t.BNeedsToLoadPersonaStateData()) {
				e.Body().add_friends(t.steamid.ConvertTo64BitString());
				t.SetPersonaStateLoadRequested();
			}
		});
		if (e.Body().friends().length) {
			this.m_CMInterface.Send(e);
		}
	}
	OnClanPersonaStateUpdate(e, t) {
		let r = new c.b(t.friendid());
		this.GetOrCreateClan(r).ReadPersonaStateUpdate(e, t);
	}
}
(0, n.Cg)([M.EW], k.prototype, "clan_invite_count", null);
(0, n.Cg)([M.EW], k.prototype, "clan_invites", null);
var D = require("./46970.js");
var N = require("./81386.js");
var F = require(/*webcrack:missing*/ "./44846.js");
var G = require(/*webcrack:missing*/ "./79769.js");
var O = require(/*webcrack:missing*/ "./81255.js");
import { Localize } from "../../actual_src/utils/localization.js";
var L = require(/*webcrack:missing*/ "./52451.js");
var z = require(/*webcrack:missing*/ "./83957.js");
var x = z;
var U = require("./16154.js");
class W {
	m_numStartingTokens = 0;
	m_numTokensPerMillisecond = 0;
	m_numIntervalsPerMillisecond = 0;
	m_TimeLastChecked = 0;
	m_flTokens = 0;
	constructor(e, t, r) {
		this.m_numIntervalsPerMillisecond = 0.001 / Math.max(1, r);
		this.m_numStartingTokens = e;
		this.m_numTokensPerMillisecond =
			Math.max(0, t) * this.m_numIntervalsPerMillisecond;
		this.Reset();
	}
	Reset() {
		this.m_TimeLastChecked = performance.now();
		this.m_flTokens = this.m_numStartingTokens;
	}
	AddTokens() {
		let e = performance.now();
		let t = (e - this.m_TimeLastChecked) * this.m_numTokensPerMillisecond;
		this.m_flTokens = Math.min(this.m_flTokens + t, this.m_numStartingTokens);
		this.m_TimeLastChecked = e;
	}
	BRemoveToken() {
		this.AddTokens();
		return !(this.m_flTokens < 1) && ((this.m_flTokens -= 1), true);
	}
}
var V = require(/*webcrack:missing*/ "./736.js");
var H = require("./95111.js");
const j = new (require(/*webcrack:missing*/ "./83599.js").wd)("FriendsUI")
	.Debug;
export class YS {
	Notifications_ShowInGame = 0;
	Notifications_ShowOnline = 0;
	Notifications_ShowMessage = 0;
	Notifications_SendMobile = 0;
	Sounds_PlayInGame = 0;
	Sounds_PlayOnline = 0;
	Sounds_PlayMessage = 0;
}
export class $c {
	m_persona = undefined;
	m_unAccountID;
	m_eFriendRelationship = 0;
	m_bPersonaStateLoadRequested = false;
	m_bPersonaNameHistoryLoaded = undefined;
	m_rgPersonaNameHistory = [];
	m_strPlayerNameNormalized;
	m_strPlayerNicknameNormalized = undefined;
	m_strGameNameNormalized;
	m_strNickname = undefined;
	m_NotificationSettings = undefined;
	m_bLoadedEquippedProfileItems = false;
	m_bRequestedEquippedProfileItems = false;
	m_equippedProfileItems = {};
	m_nAppIDLastSeenPlaying = 0;
	m_dtLastSeenPlaying;
	m_tsLastPersonaStateUpdate = 0;
	m_miniProfileDataLoader;
	constructor(e, t = null, r = null) {
		(0, M.Gn)(this);
		this.m_unAccountID = e;
		this.m_persona = new u(c.b.InitFromAccountID(e));
		if (e == 0) {
			(0, T.w)(false, "unset accountid");
			this.m_persona.m_bInitialized = true;
		}
		if (t) {
			this.m_persona.UpdateFromMessage(r, t);
		}
	}
	LoadIfNecessary() {
		if (!this.m_persona.m_bInitialized && !this.m_bPersonaStateLoadRequested) {
			this.m_bPersonaStateLoadRequested = true;
			E.xm.FriendStore.QueueFriendPersonaStateLoad(this);
		}
	}
	ClearStateOnDisconnect() {
		if (this.m_persona.m_bInitialized) {
			this.m_persona.ClearStateOnDisconnect();
		}
	}
	BHaveReceivedPersonaUpdateSince(e) {
		return this.m_tsLastPersonaStateUpdate > e;
	}
	SetPersonaStateUpdated() {
		this.m_tsLastPersonaStateUpdate = performance.now();
	}
	get is_ready() {
		return (
			!!this.m_persona.m_bNameInitialized &&
			(Object.defineProperty(this, "is_ready", {
				value: true,
			}),
			true)
		);
	}
	get persona() {
		this.LoadIfNecessary();
		Object.defineProperty(this, "persona", {
			value: this.m_persona,
		});
		return this.m_persona;
	}
	get mutable_persona() {
		return this.m_persona;
	}
	get accountid() {
		return this.m_unAccountID;
	}
	get steamid() {
		return this.m_persona.m_steamid;
	}
	get steamid64() {
		return this.m_persona.m_steamid.ConvertTo64BitString();
	}
	get efriendrelationship() {
		return this.m_eFriendRelationship;
	}
	set efriendrelationship(e) {
		this.m_eFriendRelationship = e;
	}
	get is_friend() {
		return (0, F.S$)(this.m_eFriendRelationship);
	}
	get is_blocked() {
		return (0, F.aP)(this.m_eFriendRelationship);
	}
	GetCommunityProfileURL() {
		return i.TS.COMMUNITY_BASE_URL + "profiles/" + this.steamid64 + "/";
	}
	get has_nickname() {
		return !!this.m_strNickname;
	}
	get nickname() {
		return this.m_strNickname;
	}
	set nickname(e) {
		this.m_strNickname = e;
		this.m_strPlayerNicknameNormalized = e ? $c.NormalizeNameForSearch(e) : "";
	}
	get notification_settings() {
		this.m_NotificationSettings ||= new YS();
		return this.m_NotificationSettings;
	}
	set notification_settings(e) {
		this.m_NotificationSettings = e;
	}
	BShowInGameNotification() {
		return (
			!!E.xm.IsGamepadUIActive() ||
			this.notification_settings.Notifications_ShowInGame == 1 ||
			(E.xm.SettingsStore.FriendsSettings.bNotifications_ShowIngame &&
				this.notification_settings.Notifications_ShowInGame != 2)
		);
	}
	BShowMessageNotification() {
		if (i.TS.IN_MOBILE) {
			return (
				this.notification_settings.Notifications_SendMobile === 1 ||
				(E.xm.BShowDirectChatNotification() &&
					this.notification_settings.Notifications_SendMobile !== 2)
			);
		} else {
			return (
				!!E.xm.IsGamepadUIActive() ||
				this.notification_settings.Notifications_ShowMessage === 1 ||
				(E.xm.BShowDirectChatNotification() &&
					this.notification_settings.Notifications_ShowMessage !== 2)
			);
		}
	}
	BShowOnlineNotification() {
		return (
			!!E.xm.IsGamepadUIActive() ||
			this.notification_settings.Notifications_ShowOnline == 1 ||
			(E.xm.SettingsStore.FriendsSettings.bNotifications_ShowOnline &&
				this.notification_settings.Notifications_ShowOnline != 2)
		);
	}
	BPlayInGameSound() {
		return (
			!E.xm.IsGamepadUIActive() &&
			(this.notification_settings.Sounds_PlayInGame == 1 ||
				(E.xm.SettingsStore.FriendsSettings.bSounds_PlayIngame &&
					this.notification_settings.Sounds_PlayInGame != 2))
		);
	}
	BPlayMessageSound() {
		return (
			!E.xm.IsGamepadUIActive() &&
			(this.notification_settings.Sounds_PlayMessage == 1 ||
				(E.xm.SettingsStore.FriendsSettings.bSounds_PlayMessage &&
					this.notification_settings.Sounds_PlayMessage != 2))
		);
	}
	BPlayOnlineSound() {
		return (
			!E.xm.IsGamepadUIActive() &&
			(this.notification_settings.Sounds_PlayOnline == 1 ||
				(E.xm.SettingsStore.FriendsSettings.bSounds_PlayOnline &&
					this.notification_settings.Sounds_PlayOnline != 2))
		);
	}
	get display_name() {
		if (this.has_nickname) {
			let e = this.primary_display_name;
			if (this.showing_secondary_display_name) {
				e += "\xA0(" + this.secondary_display_name + ")";
			}
			return e;
		}
		return this.persona.m_strPlayerName;
	}
	get primary_display_name() {
		if (this.has_nickname) {
			if (!E.xm.SettingsStore.CommunityPreferences.bParenthesizeNicknames) {
				return this.nickname;
			}
		}
		return this.persona.m_strPlayerName;
	}
	get has_secondary_display_name() {
		return this.has_nickname;
	}
	get showing_secondary_display_name() {
		return (
			!!E.xm.SettingsStore.CommunityPreferences.bParenthesizeNicknames &&
			this.has_secondary_display_name
		);
	}
	get secondary_display_name() {
		if (
			E.xm.SettingsStore.CommunityPreferences.bParenthesizeNicknames &&
			this.has_nickname
		) {
			return this.nickname;
		} else {
			return this.persona.m_strPlayerName;
		}
	}
	get is_display_name_nickname() {
		return (
			this.has_nickname &&
			!E.xm.SettingsStore.CommunityPreferences.bParenthesizeNicknames
		);
	}
	static NormalizeNameForSearch(e) {
		return e.toLocaleLowerCase();
	}
	get player_name_normalized() {
		if (this.m_strPlayerNameNormalized === undefined) {
			if (!this.is_ready) {
				return "";
			}
			let e = () => {
				this.m_strPlayerNameNormalized = $c.NormalizeNameForSearch(
					this.m_persona.m_strPlayerName,
				);
			};
			(0, M.fm)(e);
			if (this.m_strPlayerNameNormalized === undefined) {
				e();
			}
		}
		return this.m_strPlayerNameNormalized;
	}
	get current_game_name() {
		return this.m_persona.GetCurrentGameName();
	}
	get current_game_icon_url() {
		return this.m_persona.GetCurrentGameIconURL();
	}
	is_appinfo_ready() {
		return this.m_persona.BIsAppInfoReady();
	}
	get current_game_rich_presence() {
		return this.m_persona.GetCurrentGameRichPresence();
	}
	get game_name_normalized() {
		if (this.m_strGameNameNormalized === undefined) {
			if (!this.is_ready) {
				return "";
			}
			let e = () => {
				this.m_strGameNameNormalized = $c.NormalizeNameForSearch(
					this.current_game_name,
				);
			};
			(0, M.fm)(e);
			if (this.m_strGameNameNormalized === undefined) {
				e();
			}
		}
		return this.m_strGameNameNormalized;
	}
	MatchSearchString(e) {
		let t = this.player_name_normalized.indexOf(e);
		if (t !== -1) {
			return {
				match: 1,
				iOffset: t,
				bFullMatch: t === 0 && this.player_name_normalized.length === e.length,
			};
		} else if (
			this.has_nickname &&
			((t = this.m_strPlayerNicknameNormalized.indexOf(e)), t !== -1)
		) {
			return {
				match: 2,
				iOffset: t,
				bFullMatch:
					t === 0 && this.m_strPlayerNicknameNormalized.length === e.length,
			};
		} else {
			return {
				match: 0,
			};
		}
	}
	BMatchesSearchString(e, t) {
		if (this.player_name_normalized.indexOf(e) !== -1) {
			return true;
		}
		if (this.has_nickname) {
			if (this.m_strPlayerNicknameNormalized.indexOf(e) !== -1) {
				return true;
			}
		} else if (
			t &&
			this.m_persona.is_ingame &&
			this.game_name_normalized.indexOf(e) !== -1
		) {
			return true;
		}
		return false;
	}
	get persona_name_history() {
		if (this.m_bPersonaNameHistoryLoaded === undefined) {
			let e = a.w.Init(p.rs, 5570);
			e.Body().add_Ids().set_steamid(this.steamid64);
			e.Body().set_id_count(1);
			E.xm.CMInterface.SendMsgAndAwaitResponse(e, p.sZ).then((e) => {
				(0, T.w)(
					e.Body().responses().length == 1,
					"Got an invalid number of responses to CMsgClientAMGetPersonaNameHistory",
				);
				if (e.Body().responses().length != 1) {
					return;
				}
				let t = e.Body().responses()[0];
				(0, T.w)(
					t.steamid() == this.steamid64,
					"Got a response for the wrong user from CMsgClientAMGetPersonaNameHistory",
				);
				if (t.steamid() == this.steamid64) {
					(0, T.w)(
						this.m_rgPersonaNameHistory.length == 0,
						"Got persona name history response for same user twice.",
					);
					(0, M.h5)(() => {
						for (let e of t.names()) {
							this.m_rgPersonaNameHistory.push(e.name());
						}
						this.m_bPersonaNameHistoryLoaded = true;
					});
				}
			});
			this.m_bPersonaNameHistoryLoaded = false;
		}
		return this.m_rgPersonaNameHistory;
	}
	get persona_name_history_loaded() {
		return this.m_bPersonaNameHistoryLoaded === true;
	}
	OpenChatDialog(e) {
		if (this.is_blocked) {
			if (i.TS.IN_MOBILE) {
				E.xm.ShowAlert(
					Localize("#Friend_Chat_OpenError_Blocked"),
					Localize("#Friend_Chat_OpenError_BlockedBody"),
				);
			} else {
				E.xm.OpenURLInBrowser(this.GetCommunityProfileURL(), e);
			}
			return null;
		} else {
			return E.xm.ShowFriendChatDialog(e, this.m_unAccountID, true);
		}
	}
	static get FriendSortStatusComparator() {
		let e = E.xm.SettingsStore.BForceAlphabeticFriendSorting();
		return $c.FriendSortStatusComparatorInternal.bind(null, e);
	}
	static FriendSortStatusComparatorInternal(e, t, r) {
		let n = t.persona;
		let i = r.persona;
		return s.Z.SortStatusComparator(!e, n, i);
	}
	static get DefaultFriendSortComparator() {
		let e = E.xm.SettingsStore.BForceAlphabeticFriendSorting();
		return (t, r) => {
			let n = $c.FriendSortStatusComparatorInternal(e, t, r);
			if (n != 0) {
				return n;
			} else {
				return t.display_name.localeCompare(r.display_name);
			}
		};
	}
	static FriendSortByLastSeenComparator(e, t) {
		let r = e.persona;
		let n = t.persona;
		if (!r.is_online && !n.is_online) {
			let e = E.xm.GetServerRTime32() - r.last_seen_online;
			let t = E.xm.GetServerRTime32() - n.last_seen_online;
			if (e > t) {
				return 1;
			}
			if (t > e) {
				return -1;
			}
		}
		return e.display_name.localeCompare(t.display_name);
	}
	static FriendSortByFriendOrNotComparator(e, t) {
		if ((e.is_friend && !t.is_friend) || (!e.is_friend && t.is_friend)) {
			if (e.is_friend) {
				return -1;
			} else {
				return 1;
			}
		} else {
			return e.display_name.localeCompare(t.display_name);
		}
	}
	get localized_online_status() {
		return this.persona.GetLocalizedOnlineStatus();
	}
	GetBroadcastDescription() {
		if (this.persona.m_strBroadcastTitle) {
			return this.persona.m_strBroadcastTitle;
		}
		if (this.persona.m_broadcastAccountId) {
			let e = E.xm.FriendStore.GetPlayer(this.persona.m_broadcastAccountId);
			let t = this.persona.m_broadcastAppId
				? E.xm.AppInfoStore.GetAppInfo(this.persona.m_broadcastAppId)
				: null;
			if (t && t.is_valid) {
				return Localize(
					"#PersonaStateWatchingBroadcast_PlayerGame",
					e.display_name,
					t.name,
				);
			} else {
				return Localize(
					"#PersonaStateWatchingBroadcast_Player",
					e.display_name,
				);
			}
		}
		return null;
	}
	async LoadEquippedProfileItems(e = false) {
		if (
			!E.xm.CMInterface.logged_on ||
			(this.m_bRequestedEquippedProfileItems && !e)
		) {
			return;
		}
		this.m_bRequestedEquippedProfileItems = true;
		let t = a.w.Init(B.aK);
		t.Body().set_steamid(this.m_persona.m_steamid.ConvertTo64BitString());
		let r = await B.xt
			.GetProfileItemsEquipped(E.xm.CMInterface.GetServiceTransport(), t)
			.catch((e) => console.log("Couldn't get friend equipped items, ", e));
		if (r && r.GetEResult() == 1) {
			this.m_bLoadedEquippedProfileItems = true;
			this.m_equippedProfileItems = r.Body().toObject();
			if (
				this.m_persona.is_golden &&
				this.m_equippedProfileItems.profile_modifier &&
				this.m_equippedProfileItems.profile_modifier.appid
			) {
				if (
					!this.m_equippedProfileItems.avatar_frame.image_small ||
					this.m_equippedProfileItems.avatar_frame.image_small.length == 0
				) {
					this.LoadAndSetGoldenProfileFrame();
				}
			}
		} else {
			this.m_bLoadedEquippedProfileItems = false;
			this.m_bRequestedEquippedProfileItems = false;
		}
	}
	async LoadAndSetGoldenProfileFrame() {
		try {
			const e = {
				appid: this.m_equippedProfileItems.profile_modifier.appid,
				origin: self.origin,
			};
			await x
				.get(`${i.TS.CHAT_BASE_URL}actions/ajaxgetgoldenprofiledata/`, {
					params: e,
				})
				.then((e) => {
					const t = e.data;
					this.m_equippedProfileItems.avatar_frame.image_small = t.frame;
					this.m_equippedProfileItems.avatar_frame.image_large = t.frame;
				});
		} catch (e) {
			let t = (0, U.H)(e);
			console.error(`Error when calling ajaxgetgoldenprofiledata: ${t}`);
		}
	}
	BLoadedEquippedItems() {
		return this.m_bLoadedEquippedProfileItems;
	}
	GetEquippedProfileItems() {
		(0, T.w)(
			this.BLoadedEquippedItems(),
			"Called GetEquippedProfileItems without loading",
		);
		return this.m_equippedProfileItems;
	}
	SetLastSeenPlaying(e) {
		this.m_nAppIDLastSeenPlaying = e;
		this.m_dtLastSeenPlaying = new Date();
	}
	BWasRecentlyPlayingAppID(e, t = 15) {
		return (
			this.m_nAppIDLastSeenPlaying == e &&
			new Date().getTime() - this.m_dtLastSeenPlaying.getTime() < t * 1000
		);
	}
	get miniProfileData() {
		this.m_miniProfileDataLoader ||= new H.n(this.m_unAccountID);
		return this.m_miniProfileDataLoader;
	}
}
(0, n.Cg)([M.sH], $c.prototype, "m_persona", undefined);
(0, n.Cg)([M.sH], $c.prototype, "m_eFriendRelationship", undefined);
(0, n.Cg)([M.sH], $c.prototype, "m_bPersonaNameHistoryLoaded", undefined);
(0, n.Cg)([M.sH], $c.prototype, "m_rgPersonaNameHistory", undefined);
(0, n.Cg)([M.sH], $c.prototype, "m_strPlayerNicknameNormalized", undefined);
(0, n.Cg)([M.sH], $c.prototype, "m_strNickname", undefined);
(0, n.Cg)([M.sH], $c.prototype, "m_NotificationSettings", undefined);
(0, n.Cg)([M.sH], $c.prototype, "m_bLoadedEquippedProfileItems", undefined);
(0, n.Cg)([M.sH], $c.prototype, "m_bRequestedEquippedProfileItems", undefined);
(0, n.Cg)([M.sH], $c.prototype, "m_equippedProfileItems", undefined);
(0, n.Cg)([M.EW], $c.prototype, "display_name", null);
(0, n.Cg)([M.EW], $c.prototype, "secondary_display_name", null);
(0, n.Cg)([M.EW], $c.prototype, "current_game_name", null);
(0, n.Cg)([M.EW], $c.prototype, "current_game_icon_url", null);
(0, n.Cg)([M.EW], $c.prototype, "current_game_rich_presence", null);
(0, n.Cg)([M.EW], $c.prototype, "persona_name_history", null);
(0, n.Cg)([M.EW], $c.prototype, "persona_name_history_loaded", null);
(0, n.Cg)([M.EW], $c.prototype, "localized_online_status", null);
const Z = "FriendStoreLocalPrefs";
class Y {
	m_CMInterface;
	m_currentMsg = null;
	m_mapLastSeenApp = new Map();
	constructor() {
		(0, M.Gn)(this);
	}
	Init(e) {
		this.m_CMInterface = e;
		if (!i.TS.IN_MOBILE) {
			SetBackgroundInterval(this.NotifyImpressions, 120000);
		}
	}
	RecordFriendInGameImpression(e) {
		if (i.TS.IN_MOBILE) {
			return;
		}
		if (e == F.w1 || (e >= F.y4 && e <= F.Iy)) {
			return;
		}
		this.m_currentMsg ||= a.w.Init(b);
		let t = true;
		if (this.m_mapLastSeenApp.has(e)) {
			let r = this.m_mapLastSeenApp.get(e);
			t = Date.now() - r > 86400000;
		}
		let r = null;
		if (t) {
			this.m_mapLastSeenApp.set(e, Date.now());
			r = this.m_currentMsg.Body().add_impressions();
			r.set_appid(e);
			r.set_type(2);
			r.set_num_impressions(0);
		} else {
			for (let t = 0; t < this.m_currentMsg.Body().impressions().length; ++t) {
				let n = this.m_currentMsg.Body().impressions()[t];
				if (n.appid() == e && n.type() == 1) {
					r = n;
					break;
				}
			}
			if (!r) {
				r = this.m_currentMsg.Body().add_impressions();
				r.set_appid(e);
				r.set_type(1);
				r.set_num_impressions(0);
			}
		}
		r.set_num_impressions(r.num_impressions() + 1);
	}
	NotifyImpressions() {
		if (this.m_currentMsg) {
			let e = this.m_currentMsg;
			this.m_currentMsg = null;
			S.ReportProductImpressionsFromClient(
				this.m_CMInterface.GetServiceTransport(),
				e,
			);
		}
	}
}
(0, n.Cg)([M.XI.bound], Y.prototype, "NotifyImpressions", null);
export class VT {
	m_FriendGroupStore = new D.Oz(this);
	m_ClanStore = new k(this);
	m_FavoritesStore = new N.x(this);
	m_self = undefined;
	m_mapPlayerCache = new Map();
	m_mapApprovedNonFriendMessages;
	m_CMInterface;
	m_tsLastConnect;
	m_setFriendsNeedingPersonaStateLoad = new Set();
	m_iIntervalSubscribeToPersonaStateUpdates = 0;
	m_setFriendAccountIDs = new Set();
	m_setIncomingInviteAccountIDs = new Set();
	m_bUserSetPersonaState = false;
	m_eUserPersonaState = 0;
	m_bIsClientIdle = false;
	m_FriendStorePrefs = {
		ePersonaState: 1,
		strNonFriendsAllowedToMsg: "",
	};
	m_fnOnReadyToRender;
	m_cFriendPersonaStatesInitialized = 0;
	m_bReadyToRender = false;
	m_bPerFriendPreferencesLoaded = false;
	m_bReceivedFriendsList = false;
	m_bInitialPersonaStatesLoaded = false;
	m_InitialAppInfoPromises = [];
	m_bInitialAppInfoLoaded = false;
	m_bParentalLocked = undefined;
	m_eUserPersonaStateParental = 1;
	m_rgPersonaStateChangeCallbacks = new G.lu();
	m_rgPlayerGameChangedCallbacks = new G.lu();
	m_nMissingPersonaStateRetryCount = 0;
	m_nMissingPersonaStateMaxRetries = 5;
	m_FriendInGameNotificationStore = new Y();
	m_TokenBucketChangeStatus = new W(200, 1, 10);
	m_vecLastTenChangeStatusReasons = [];
	m_TokenFailureAssertCount = 30;
	constructor() {
		(0, M.Gn)(this);
	}
	Init(e) {
		this.m_CMInterface = e;
		this.m_FriendGroupStore.Init(e);
		this.m_ClanStore.Init(e);
		this.m_FavoritesStore.Init(e);
		this.m_FriendInGameNotificationStore.Init(e);
		const t = async () => {
			const e = this.m_tsLastConnect === undefined;
			this.m_tsLastConnect = performance.now();
			if (e) {
				this.m_self = this.AddPlayerToCache(
					this.m_CMInterface.steamid.GetAccountID(),
					1,
				);
				let e = true;
				if ((0, V.Dp)("WebChat.GetSignIntoFriendsOnStart")) {
					e = await SteamClient.WebChat.GetSignIntoFriendsOnStart();
				}
				E.xm.SettingsStore.GetObjectFromLocalStorage(
					Z,
					this.m_FriendStorePrefs,
				).then((t) => {
					this.m_FriendStorePrefs = t;
					if (e) {
						if (this.m_bParentalLocked) {
							this.m_eUserPersonaStateParental = t.ePersonaState;
						} else {
							this.m_eUserPersonaState = t.ePersonaState;
							this.m_bUserSetPersonaState = false;
							this.SendPersonaStateToServer(true, "LogonCallback");
						}
					}
				});
				if (!this.m_bReadyToRender) {
					SetBackgroundTimeout(this.ForceReadyToRender.bind(this), 1000);
				}
			} else {
				this.SendPersonaStateToServer(true, "MoreLogonCallback");
			}
			this.SetReconnectedSinceLastIdleUpdate();
		};
		this.m_CMInterface.AddOnLogonCallback(() => {
			t();
		});
		this.m_CMInterface.AddOnDisconnectCallback(() => {
			j("Disconnected from Chat server, setting non-friends to offline");
			this.SetPersonasOffline(true);
			this.m_cFriendPersonaStatesInitialized = 0;
		}, 102);
		let r = false;
		this.m_CMInterface.AddOnLogonCallback(() => {
			this.EnsureFriendsListLoaded(r && !E.xm.UIStore.BIsAnyWindowVisible());
			r = true;
			return () => {
				j("Disconnected from FS, setting all friends to offline");
				this.SetPersonasOffline(false);
				this.ResetFriendsListLoadedState();
			};
		}, 47);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			B.QA.NotifyPerFriendPreferencesChangedHandler,
			(e) => {
				let t = this.GetPlayer(e.Body().accountid());
				if (t) {
					let r = e.Body().preferences();
					t.nickname = r.nickname() || undefined;
					let n = new YS();
					this.FillPerFriendNotificationSettingsFromMessage(n, r);
					t.notification_settings = n;
					this.m_rgPersonaStateChangeCallbacks.Dispatch(t);
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			B.QA.NotifyFriendEquippedProfileItemsChangedHandler,
			(e) => {
				let t = this.GetPlayer(e.Body().accountid());
				if (t && t.BLoadedEquippedItems()) {
					t.LoadEquippedProfileItems(true);
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterEMessageAction(
			767,
			A.py,
			(e) => {
				if (e.Body().bincremental()) {
					this.SetFriendsList(e.Body());
				}
			},
		);
		this.m_CMInterface.messageHandlers.RegisterEMessageAction(
			766,
			A.XN,
			this.OnPersonaStateUpdate,
		);
		(0, M.fm)(() => {
			let e =
				E.xm.ParentalStore.BIsFriendsBlocked() ||
				E.xm.SettingsStore.IsSteamInTournamentMode();
			this.OnParentalLockChanged(e);
		});
		this.InitializeIdleTracking();
		if (this.m_bReadyToRender) {
			return Promise.resolve();
		} else {
			return new Promise((e, t) => {
				this.m_fnOnReadyToRender = e;
			});
		}
	}
	OnPersonaStateUpdate(e) {
		let t = e.Body().status_flags();
		let r = new Set();
		let n = new Set();
		for (let i of e.Body().friends()) {
			let e = new c.b(i.friendid());
			if (e.BIsClanAccount()) {
				this.m_ClanStore.OnClanPersonaStateUpdate(t, i);
				continue;
			}
			if (!e.BIsIndividualAccount()) {
				continue;
			}
			let a = this.GetPlayerIfCached(e.GetAccountID());
			a ||= this.GetPlayer(e.GetAccountID());
			let s = a.mutable_persona;
			let o = s.m_ePersonaState;
			let m = s.m_strPlayerName;
			let u = s.m_unGamePlayedAppID;
			let d = s.m_strGameExtraInfo;
			let A = s.is_in_nonsteam_game;
			let p = s.m_broadcastAppId;
			let g = a.BHaveReceivedPersonaUpdateSince(this.m_tsLastConnect);
			a.SetPersonaStateUpdated();
			s.UpdateFromMessage(t, i);
			if (
				!g &&
				s.m_bInitialized &&
				this.m_setFriendAccountIDs.has(a.accountid)
			) {
				this.m_cFriendPersonaStatesInitialized++;
			}
			let h = (t & 1) != 0;
			if (e.GetAccountID() == this.self.accountid && h) {
				let e = !!i.persona_set_by_user();
				let t = s.m_ePersonaState;
				this.UpdateUserPersonaStateInternal(
					t,
					e,
					this.m_bIsClientIdle,
					true,
					"RecvFromSrv",
				);
				if (t == 1 && this.m_bReconnectedSinceLastIdleUpdate) {
					this.m_bReconnectedSinceLastIdleUpdate = false;
					t = this.AdjustPersonaStateForIdleTime(t);
					if (t != 1) {
						this.UpdateUserPersonaStateInternal(
							t,
							false,
							this.m_bIsClientIdle,
							false,
							"AdjustForIdle",
						);
					}
				}
			}
			let C = false;
			let _ = s.m_unGamePlayedAppID;
			let f = s.m_broadcastAppId;
			if (l.td.bValid && p && p != l.td.appID) {
				p = undefined;
			}
			if (l.td.bValid && f && f != l.td.appID) {
				f = undefined;
			}
			let b = false;
			if (_ || u || A || s.is_in_nonsteam_game || f || p) {
				C = u != _;
				if (_) {
					r.add(_);
				}
				if (f) {
					r.add(f);
				}
				if (s.GetAccountID() != this.m_self.accountid) {
					let t = u;
					let r = _;
					if (s.m_ePersonaState == 0) {
						r = 0;
					}
					if (A) {
						t = D.o_;
					}
					if (s.is_in_nonsteam_game) {
						r = D.o_;
					}
					if (!t && p) {
						t = p;
					}
					if (!r && f) {
						r = f;
					}
					if (a.is_friend) {
						this.m_FriendGroupStore.OnFriendGameChanged(e.GetAccountID(), t, r);
					}
					this.m_rgPlayerGameChangedCallbacks.Dispatch(e.GetAccountID(), t, r);
					b = true;
				}
			} else if (s.m_strGameExtraInfo) {
				C = d != s.m_strGameExtraInfo;
			}
			if ((t & 4096 || C) && _ && s.HasCurrentGameRichPresence()) {
				n.add(_);
			}
			if (
				g &&
				a.is_friend &&
				a.accountid != this.m_self.accountid &&
				(o != s.m_ePersonaState || C)
			) {
				if (a.BPlayInGameSound() && C && a.persona.is_ingame) {
					this.PlayJoinGameSound();
				} else if (
					a.BPlayOnlineSound() &&
					o != s.m_ePersonaState &&
					s.m_ePersonaState == 1
				) {
					this.PlayFriendOnlineSound();
				}
				if (u && !a.persona.is_ingame) {
					a.SetLastSeenPlaying(u);
				}
				this.OnFriendPersonaStateChanged(
					a,
					o,
					s.m_ePersonaState,
					C,
					_ && a.BWasRecentlyPlayingAppID(_),
				);
			}
			if (!b && (s.m_ePersonaState != o || !!C || s.m_strPlayerName != m)) {
				this.m_rgPersonaStateChangeCallbacks.Dispatch(a);
			}
		}
		const i = E.xm.AppInfoStore.EnsureAppInfoForAppIDs(r);
		if (!this.m_bInitialPersonaStatesLoaded) {
			this.m_InitialAppInfoPromises.push(i);
		}
		if (!this.m_bInitialPersonaStatesLoaded && n.size) {
			console.log("Preloading Game Rich Presence for AppIDs:", Array.from(n));
			n.forEach((e) => E.xm.AppInfoStore.GetRichPresenceLoc(e));
		}
	}
	m_cLastUnreadPriorityMessageCountPosted = undefined;
	UpdateUnreadMessagesGlobal() {
		if (
			window.SteamClient !== undefined &&
			window.SteamClient.WebChat != null &&
			window.SteamClient.WebChat.SetNumChatsWithUnreadPriorityMessages != null
		) {
			let e = E.xm.ChatStore.GetChatsWithUnreadPriorityMessages().length;
			if (this.m_cLastUnreadPriorityMessageCountPosted !== e) {
				window.SteamClient.WebChat.SetNumChatsWithUnreadPriorityMessages(e);
				this.m_cLastUnreadPriorityMessageCountPosted = e;
			}
		}
	}
	m_bMadeGetFriendsListRequest = false;
	m_iIntervalDelayLoadFriendsList;
	EnsureFriendsListLoaded(e = false) {
		if (
			!this.m_bMadeGetFriendsListRequest &&
			this.m_CMInterface.BIsConnected()
		) {
			if (e) {
				if (!this.m_iIntervalDelayLoadFriendsList) {
					const e = 20 + Math.random() * 120;
					j(
						`Reconnected but inactive, delaying friends list load by ${e} seconds`,
					);
					this.m_iIntervalDelayLoadFriendsList = window.setTimeout(
						() => this.EnsureFriendsListLoaded(false),
						e * 1000,
					);
				}
				return;
			}
			j("Requesting friends list and initial persona states");
			this.ResetFriendsListLoadedState();
			this.m_bMadeGetFriendsListRequest = true;
			this.GetFriendsList();
		}
	}
	ResetFriendsListLoadedState() {
		if (this.m_iIntervalDelayLoadFriendsList) {
			window.clearInterval(this.m_iIntervalDelayLoadFriendsList);
		}
		this.m_bMadeGetFriendsListRequest = false;
		this.m_iIntervalDelayLoadFriendsList = undefined;
	}
	async GetFriendsList() {
		let e = a.w.Init(w.pH);
		let t = await w.DF.GetFriendsList(
			this.m_CMInterface.GetServiceTransport(),
			e,
		);
		if (t.GetEResult() == 1) {
			this.SetFriendsList(t.Body().friendslist());
		} else {
			let e = {
				message: "ShowFriendsErrorRetryDialog",
			};
			window.parent.postMessage(e, "https://steamloopback.host");
			(0, T.w)(false, "GetFriendsList returned", t.GetEResult());
		}
	}
	get not_ready_to_render_reason() {
		if (this.m_bReadyToRender) {
			return "";
		}
		let e = "";
		if (!this.m_bPerFriendPreferencesLoaded) {
			e += "P";
		}
		if (!this.m_bReceivedFriendsList) {
			e += "F";
		}
		if (!this.m_bInitialPersonaStatesLoaded) {
			e += "I";
		}
		if (!this.m_bInitialAppInfoLoaded) {
			e += "A";
		}
		return e;
	}
	UpdateReadyToRenderState() {
		if (!this.m_bReadyToRender) {
			if (
				this.m_bReceivedFriendsList &&
				this.m_bInitialPersonaStatesLoaded &&
				this.m_bPerFriendPreferencesLoaded &&
				this.m_bInitialAppInfoLoaded
			) {
				this.m_bReadyToRender = true;
				if (this.m_fnOnReadyToRender) {
					this.m_fnOnReadyToRender();
					this.m_fnOnReadyToRender = undefined;
				}
			}
		}
	}
	ForceReadyToRender() {
		const e = i.TS.IN_CLIENT ? console.warn : console.error;
		if (this.m_bReceivedFriendsList) {
			if (!this.m_bInitialPersonaStatesLoaded) {
				e(
					`FriendStore.ForceReadyToRender() - Initial Persona States not ready: ${this.m_cFriendPersonaStatesInitialized} received, friends list: ${this.m_setFriendAccountIDs.size} users`,
				);
			}
			if (!this.m_bInitialAppInfoLoaded) {
				e("FriendStore.ForceReadyToRender() - Initial app info not ready");
			}
			if (!this.m_bPerFriendPreferencesLoaded) {
				e(
					"FriendStore.ForceReadyToRender() - Per-friend preferences not ready",
				);
			}
		} else {
			e(
				"FriendStore Initialization - Still no friends list from server.  Waiting.",
			);
		}
		this.m_bInitialPersonaStatesLoaded = true;
		this.m_bPerFriendPreferencesLoaded = true;
		this.m_bInitialAppInfoLoaded = true;
		this.UpdateReadyToRenderState();
	}
	AddPersonaStateChangedCallback(e) {
		return this.m_rgPersonaStateChangeCallbacks.Register(e);
	}
	AddPlayerGameChangedCallback(e) {
		return this.m_rgPlayerGameChangedCallbacks.Register(e);
	}
	BIsInvisibleMode() {
		return this.m_eUserPersonaState == 7;
	}
	BIsOfflineMode() {
		return this.m_eUserPersonaState == 0;
	}
	GetUserDoNotDisturb() {
		return E.xm.SettingsStore.FriendsSettings?.bDoNotDisturbMode;
	}
	SetUserDoNotDisturb(e) {
		E.xm.SettingsStore.FriendsSettings.bDoNotDisturbMode = e;
		E.xm.SettingsStore.BUpdateFriendsSettings(
			E.xm.SettingsStore.FriendsSettings,
		);
	}
	SetUserPersonaState(e, t = true) {
		this.UpdateUserPersonaStateInternal(
			e,
			t,
			false,
			false,
			"SetUserPersonaState",
		);
	}
	EnsureApprovedNonFriendMapReady() {
		if (
			this.m_mapApprovedNonFriendMessages === undefined &&
			((this.m_mapApprovedNonFriendMessages = M.sH.map()),
			this.m_FriendStorePrefs.strNonFriendsAllowedToMsg != null &&
				this.m_FriendStorePrefs.strNonFriendsAllowedToMsg != "")
		) {
			let e = new Date().getTime();
			let t = this.m_FriendStorePrefs.strNonFriendsAllowedToMsg.split(",");
			for (let r = 0; r < t.length; ++r) {
				let n = t[r].split("=");
				if (n.length == 2) {
					let t = Number(n[0]);
					let r = Number(n[1]);
					if (r > e) {
						this.m_mapApprovedNonFriendMessages.set(t, r);
					}
				}
			}
		}
	}
	BApprovedNonFriendMessages(e) {
		this.EnsureApprovedNonFriendMapReady();
		let t = new Date();
		let r = this.m_mapApprovedNonFriendMessages.get(e);
		return r != null && r > t.getTime();
	}
	SetApprovedNonFriendMessages(e) {
		this.EnsureApprovedNonFriendMapReady();
		let t = new Date().getTime();
		this.m_mapApprovedNonFriendMessages.set(e, t + 86400000);
		let r = "";
		this.m_mapApprovedNonFriendMessages.forEach(function (e, n, i) {
			if (e > t) {
				if (r.length != 0) {
					r += ",";
				}
				r += n.toString() + "=" + e.toString();
			}
		});
		this.m_FriendStorePrefs.strNonFriendsAllowedToMsg = r;
		E.xm.SettingsStore.StoreObjectInLocalStorage(Z, this.m_FriendStorePrefs);
	}
	OnParentalLockChanged(e) {
		if (!this.m_bParentalLocked && e) {
			this.m_eUserPersonaStateParental = this.m_eUserPersonaState;
			this.UpdateUserPersonaStateInternal(
				0,
				true,
				this.m_bIsClientIdle,
				false,
				"ParentalLockChange",
			);
			this.m_bParentalLocked = e;
		} else if (this.m_bParentalLocked && !e) {
			this.m_bParentalLocked = e;
			this.UpdateUserPersonaStateInternal(
				this.m_eUserPersonaStateParental,
				true,
				this.m_bIsClientIdle,
				false,
				"ParentalLockChange",
			);
		}
	}
	UpdateUserPersonaStateInternal(e, t, r, n, i) {
		if (this.m_bParentalLocked) {
			return;
		}
		E.xm.UpdatePersonaState(e);
		if (
			e == this.m_eUserPersonaState &&
			this.m_bUserSetPersonaState == t &&
			this.m_bIsClientIdle == r
		) {
			return;
		}
		if (this.m_eUserPersonaState != e && e == 0 && t) {
			E.xm.SignOutOfFriends(undefined);
		}
		if (this.m_eUserPersonaState == 0 && !t) {
			return;
		}
		if (!t && (e == 3 || e == 4)) {
			r = true;
		}
		if (n && this.m_bIsClientIdle != r) {
			n = false;
		}
		let a = this.m_eUserPersonaState;
		let s = this.m_bUserSetPersonaState;
		let o = this.m_bIsClientIdle;
		this.m_eUserPersonaState = e;
		this.m_bUserSetPersonaState = t;
		this.m_bIsClientIdle = r;
		if (!n) {
			if (!this.SendPersonaStateToServer(false, i)) {
				this.m_eUserPersonaState = a;
				this.m_bUserSetPersonaState = s;
				this.m_bIsClientIdle = o;
			}
			if (this.m_eUserPersonaState === 0) {
				this.m_self.mutable_persona.m_ePersonaState = 0;
			}
		}
		if (a === 0 && this.m_eUserPersonaState !== a) {
			E.xm.Reconnect();
		}
		if (
			(!!t || this.m_eUserPersonaState == 1) &&
			this.m_eUserPersonaState !== 0
		) {
			this.m_FriendStorePrefs.ePersonaState = e;
			E.xm.SettingsStore.StoreObjectInLocalStorage(Z, this.m_FriendStorePrefs);
		}
	}
	SendPersonaStateToServer(e, t) {
		this.m_vecLastTenChangeStatusReasons.push(t);
		if (this.m_vecLastTenChangeStatusReasons.length > 10) {
			this.m_vecLastTenChangeStatusReasons =
				this.m_vecLastTenChangeStatusReasons.slice(1);
		}
		if (!this.m_TokenBucketChangeStatus.BRemoveToken()) {
			if (this.m_TokenFailureAssertCount > 0) {
				--this.m_TokenFailureAssertCount;
				(0, T.w)(
					false,
					"No ClientChangeStatus tokens, last 10 reasons: " +
						this.m_vecLastTenChangeStatusReasons.join(","),
				);
			}
			return false;
		}
		let r = a.w.Init(A.el, 716);
		r.Body().set_persona_state(this.m_eUserPersonaState);
		r.Body().set_persona_set_by_user(this.m_bUserSetPersonaState);
		r.Body().set_need_persona_response(e);
		r.Body().set_is_client_idle(this.m_bIsClientIdle);
		this.m_CMInterface.Send(r);
		return true;
	}
	AdjustPersonaStateForIdleTime(e) {
		if ((e == 1 || e == 3) && E.xm.IdleTracker.GetUserIdleTime() >= 7200) {
			return 4;
		} else if (e == 1 && E.xm.IdleTracker.GetUserIdleTime() >= 300) {
			return 3;
		} else {
			return e;
		}
	}
	get FriendGroupStore() {
		return this.m_FriendGroupStore;
	}
	get ClanStore() {
		return this.m_ClanStore;
	}
	get FavoritesStore() {
		return this.m_FavoritesStore;
	}
	get all_friends() {
		return Array.from(this.m_setFriendAccountIDs).map((e) => this.GetFriend(e));
	}
	get online_friends() {
		return this.all_friends.filter((e) => e.persona.is_online);
	}
	get all_friends_accountids() {
		return this.m_setFriendAccountIDs;
	}
	get friends_list_ready() {
		return this.m_bReceivedFriendsList;
	}
	GetFriend(e) {
		let t = this.m_mapPlayerCache.get(e);
		if (t) {
			if (!t.is_friend) {
				return null;
			}
		} else {
			(0, T.w)(false, `Friend missing from cache: ${e}`);
		}
		return t;
	}
	GetPlayer(e) {
		let t = this.m_mapPlayerCache.get(e);
		t ||= this.AddPlayerToCache(e, 3);
		return t;
	}
	AddPlayerToCache(e, t, r = true) {
		if (this.m_mapPlayerCache.has(e)) {
			return this.m_mapPlayerCache.get(e);
		}
		let n = new $c(e);
		this.m_mapPlayerCache.set(e, n);
		return n;
	}
	GetPlayerIfCached(e) {
		return this.m_mapPlayerCache.get(e);
	}
	GetFriendIfCached(e) {
		let t = this.m_mapPlayerCache.get(e);
		if (t && t.is_friend) {
			return t;
		} else {
			return null;
		}
	}
	SetPersonasOffline(e) {
		this.m_mapPlayerCache.forEach((t) => {
			if (!e || (!t.is_friend && t.accountid != this.self.accountid)) {
				t.ClearStateOnDisconnect();
			}
		});
	}
	QueueFriendPersonaStateLoad(e) {
		this.m_setFriendsNeedingPersonaStateLoad.add(e.accountid);
		if (
			!this.m_iIntervalSubscribeToPersonaStateUpdates &&
			this.m_bInitialPersonaStatesLoaded
		) {
			this.m_iIntervalSubscribeToPersonaStateUpdates = SetBackgroundTimeout(
				this.SubscribeToMissingPersonaStates.bind(this),
				50,
			);
		}
	}
	get self() {
		return this.m_self;
	}
	static k_nMSToWaitForFriendData = 1000;
	SubscribeToMissingPersonaStates() {
		if (this.m_iIntervalSubscribeToPersonaStateUpdates) {
			ClearBackgroundTimeout(this.m_iIntervalSubscribeToPersonaStateUpdates);
			this.m_iIntervalSubscribeToPersonaStateUpdates = 0;
		}
		let e = [];
		this.m_setFriendsNeedingPersonaStateLoad.forEach((t) => {
			let r = this.m_mapPlayerCache.get(t);
			if (r && !r.persona.m_bNameInitialized) {
				e.push(r.accountid);
			}
		});
		this.m_setFriendsNeedingPersonaStateLoad.clear();
		if (e.length) {
			let t = a.w.Init(A.nz, 815);
			t.Body().set_persona_state_requested(1106);
			for (let r of e) {
				t.Body().add_friends(c.b.InitFromAccountID(r).ConvertTo64BitString());
			}
			this.m_CMInterface.Send(t);
			SetBackgroundTimeout(() => {
				let t = 0;
				for (let r of e) {
					let e = this.GetPlayer(r);
					if (e && !e.persona.m_bNameInitialized) {
						(0, T.w)(
							e.m_bPersonaStateLoadRequested,
							"PersonaStateLoadRequested not set",
						);
						this.m_setFriendsNeedingPersonaStateLoad.add(r);
						t++;
					}
				}
				if (t > 0) {
					if (
						this.m_nMissingPersonaStateRetryCount <
						this.m_nMissingPersonaStateMaxRetries
					) {
						this.m_nMissingPersonaStateRetryCount++;
						this.m_iIntervalSubscribeToPersonaStateUpdates ||=
							SetBackgroundTimeout(
								this.SubscribeToMissingPersonaStates.bind(this),
								10000,
							);
					} else {
						console.warn(
							"Giving up persona state retries with",
							t,
							"still not filled",
							this.m_setFriendsNeedingPersonaStateLoad,
						);
					}
				} else {
					this.m_nMissingPersonaStateRetryCount = 0;
				}
			}, VT.k_nMSToWaitForFriendData);
		}
	}
	m_bSnoozeCallbackFired = true;
	m_bAwayCallbackFired = true;
	m_bReconnectedSinceLastIdleUpdate = true;
	m_bNextActivityCallbackRegistered = false;
	InitializeIdleTracking() {
		if (this.m_bAwayCallbackFired) {
			this.m_bAwayCallbackFired = false;
			E.xm.IdleTracker.AddOnIdleCallback(this.OnIdle.bind(this, 3), 300);
		}
		if (this.m_bSnoozeCallbackFired) {
			this.m_bSnoozeCallbackFired = false;
			E.xm.IdleTracker.AddOnIdleCallback(this.OnIdle.bind(this, 4), 7200);
		}
	}
	ResetIdleState() {
		this.m_bReconnectedSinceLastIdleUpdate = false;
		let e = this.m_eUserPersonaState;
		if (
			!this.m_bUserSetPersonaState &&
			(this.m_eUserPersonaState == 3 || this.m_eUserPersonaState == 4)
		) {
			e = 1;
		}
		this.UpdateUserPersonaStateInternal(
			e,
			this.m_bUserSetPersonaState,
			false,
			false,
			"ResetIdleState",
		);
		this.m_bNextActivityCallbackRegistered = false;
		this.InitializeIdleTracking();
	}
	SetReconnectedSinceLastIdleUpdate() {
		this.m_bReconnectedSinceLastIdleUpdate = true;
	}
	OnIdle(e) {
		this.m_bReconnectedSinceLastIdleUpdate = false;
		let t = e;
		if (e == 3) {
			this.m_bAwayCallbackFired = true;
			if (this.m_eUserPersonaState == 4) {
				t = 4;
			}
		} else if (e == 4) {
			this.m_bSnoozeCallbackFired = true;
		}
		if (this.m_bUserSetPersonaState) {
			t = this.m_eUserPersonaState;
		}
		this.UpdateUserPersonaStateInternal(
			t,
			this.m_bUserSetPersonaState,
			true,
			false,
			"OnIdle",
		);
		if (!this.m_bNextActivityCallbackRegistered) {
			this.m_bNextActivityCallbackRegistered = true;
			E.xm.IdleTracker.AddOnNextActivityCallback(
				this.ResetIdleState.bind(this),
			);
		}
	}
	GetFriendInviteCount() {
		return this.m_FriendGroupStore.incoming_invites_group.unfiltered_count;
	}
	GetClanInviteCount() {
		return this.m_ClanStore.clan_invite_count;
	}
	GetPendingInviteCount() {
		return this.GetFriendInviteCount() + this.GetClanInviteCount();
	}
	GetOutgoingFriendRequestCount() {
		return this.m_FriendGroupStore.outgoing_invites_group.unfiltered_count;
	}
	GetOnlineFriendCount() {
		return this.online_friends.length;
	}
	async SendFriendInvite(e) {
		return this.SendFriendInviteBySteamID(e.persona.m_steamid);
	}
	async SendFriendInviteBySteamID(e) {
		let t = a.w.Init(B.jP);
		t.Body().set_steamid(e.ConvertTo64BitString());
		let r = await B.xt.AddFriend(this.m_CMInterface.GetServiceTransport(), t);
		let n = 1;
		if (r.Body().result() !== undefined) {
			n = r.Body().result();
		}
		return {
			eResult: n,
			eFriendRelationship: r.Body().friend_relationship(),
		};
	}
	RemoveFriend(e) {
		let t = a.w.Init(B.i$);
		t.Body().set_steamid(e.persona.m_steamid.ConvertTo64BitString());
		return B.xt
			.RemoveFriend(this.m_CMInterface.GetServiceTransport(), t)
			.then((e) => e.Body().friend_relationship());
	}
	BlockPlayer(e, t = false) {
		let r = a.w.Init(B.qW);
		r.Body().set_steamid(e.persona.m_steamid.ConvertTo64BitString());
		if (t) {
			r.Body().set_unignore(true);
		}
		return B.xt
			.IgnoreFriend(this.m_CMInterface.GetServiceTransport(), r)
			.then((e) => e.Body().friend_relationship());
	}
	AddFriend(e, t, r) {
		let n = new c.b(e).GetAccountID();
		let i = this.m_setIncomingInviteAccountIDs.has(n);
		if (t == 2) {
			if (!i) {
				let e = this.AddPlayerToCache(n, 3, false);
				e.efriendrelationship = t;
				if (!r) {
					e.LoadIfNecessary();
				}
				this.m_setIncomingInviteAccountIDs.add(n);
				this.m_FriendGroupStore.OnIncomingInviteAdded(n);
			}
		} else if (i) {
			this.AddPlayerToCache(n, 3, false).efriendrelationship = t;
			this.m_setIncomingInviteAccountIDs.delete(n);
			this.m_FriendGroupStore.OnIncomingInviteRemoved(n);
		}
		if (t == 4) {
			let e = this.AddPlayerToCache(n, 3, false);
			e.efriendrelationship = t;
			if (!r) {
				e.LoadIfNecessary();
			}
			this.m_FriendGroupStore.OnOutgoingInviteAdded(n);
		} else {
			this.m_FriendGroupStore.OnOutgoingInviteRemoved(n);
		}
		if (t == 5 || t == 6) {
			let e = E.xm.ChatStore.GetFriendChat(n, false);
			if (e) {
				E.xm.UIStore.CloseTabByID(e.unique_id);
			}
		}
		let a = this.m_setFriendAccountIDs.has(n);
		if ((0, F.S$)(t)) {
			let e;
			if (a) {
				e = this.GetFriend(n);
			} else {
				this.m_setFriendAccountIDs.add(n);
				e = this.AddPlayerToCache(n, 2, false);
				if (!r) {
					e.LoadIfNecessary();
				}
				this.m_FriendGroupStore.OnFriendAdded(n);
			}
			e.efriendrelationship = t;
		} else {
			if (a) {
				this.m_FriendGroupStore.OnFriendRemoved(n);
				this.m_FavoritesStore.OnFriendRemoved(n);
				this.m_setFriendAccountIDs.delete(n);
			}
			this.AddPlayerToCache(n, 3, false).efriendrelationship = t;
		}
	}
	SetFriendsList(e) {
		let t = e.friends();
		const r = !e.bincremental();
		j(`Received ${r ? "initial" : "delta update"} friends list`);
		if (r) {
			for (let e of this.all_friends) {
				e.efriendrelationship = 0;
			}
			this.m_setFriendAccountIDs.clear();
			this.m_setIncomingInviteAccountIDs.clear();
			this.m_FriendGroupStore.OnFullFriendsListUpdateStart();
			this.m_ClanStore.ClearClanMembershipData();
		}
		for (let e of t) {
			let t = new c.b(e.ulfriendid());
			if (t.BIsIndividualAccount()) {
				let n = e.efriendrelationship();
				this.AddFriend(t.ConvertTo64BitString(), n, r);
			} else if (t.BIsClanAccount()) {
				this.m_ClanStore.OnClanRelationshipChanged(t, e.efriendrelationship());
			}
		}
		if (r) {
			this.m_FriendGroupStore.OnFullFriendsListUpdateComplete();
			this.m_bReceivedFriendsList = true;
			this.RequestPerFriendPreferences();
			this.RequestFriendPersonaStates();
			this.UpdateReadyToRenderState();
		}
	}
	async RequestFriendPersonaStates() {
		const e = performance.now();
		if (this.m_setFriendAccountIDs.size > 0) {
			let e = a.w.Init(d.ky);
			await d.mf.RequestFriendPersonaStates(
				this.m_CMInterface.GetServiceTransport(),
				e,
			);
		}
		const t = performance.now();
		window.setTimeout(() => {
			j(
				`Completed request to load initial persona states in ${(t - e).toFixed(0)}ms (${(performance.now() - this.m_tsLastConnect).toFixed(0)}ms since connect), received ${this.m_cFriendPersonaStatesInitialized} personas`,
			);
			this.m_bInitialPersonaStatesLoaded = true;
			this.StartWaitForInitialAppInfo();
			this.SubscribeToMissingPersonaStates();
			this.UpdateReadyToRenderState();
		}, 1);
	}
	OnFriendPersonaStateChanged(e, t, r, n, i) {
		if (
			!E.xm.NotificationManager.BNotificationsPermitted() ||
			!E.xm.SettingsStore.BReady() ||
			E.xm.FriendStore.GetUserDoNotDisturb()
		) {
			return;
		}
		const a = E.xm.IsGamepadUIActive() || e.BShowInGameNotification();
		if (n && e.persona.is_ingame && a) {
			let t = e.current_game_name;
			if (!e.persona.is_in_nonsteam_game && !i) {
				this.m_FriendInGameNotificationStore.RecordFriendInGameImpression(
					e.persona.m_unGamePlayedAppID,
				);
			}
			if (t) {
				E.xm.NotificationManager.DisplayNotificationFromFriend(e, {
					title: e.display_name,
					body: Localize("#Friend_StateChange_InGame", t),
					rawbody: t,
					tag: "state_" + e.accountid,
					state: "ingame",
					steamid: e.persona.m_steamid.ConvertTo64BitString(),
				});
			}
			return;
		}
		if (t == 0 && r != 0 && e.BShowOnlineNotification()) {
			E.xm.NotificationManager.DisplayNotificationFromFriend(e, {
				title: e.display_name,
				body: Localize("#Friend_StateChange_Online"),
				tag: "state_" + e.accountid,
				state: "online",
				steamid: e.persona.m_steamid.ConvertTo64BitString(),
			});
		}
	}
	PlayJoinGameSound() {
		if (!E.xm.FriendStore.GetUserDoNotDisturb()) {
			E.xm.AudioPlaybackManager.PlayAudioURL(
				i.TS.COMMUNITY_CDN_URL +
					"public/sounds/webui/ui_steam_smoother_friend_join.m4a",
			);
		}
	}
	PlayFriendOnlineSound() {
		if (!E.xm.FriendStore.GetUserDoNotDisturb()) {
			E.xm.AudioPlaybackManager.PlayAudioURL(
				i.TS.COMMUNITY_CDN_URL +
					"public/sounds/webui/ui_steam_smoother_friend_online.m4a",
			);
		}
	}
	FillPerFriendNotificationSettingsFromMessage(e, t) {
		e.Notifications_ShowInGame = t.notifications_showingame();
		e.Notifications_ShowMessage = t.notifications_showmessages();
		e.Notifications_ShowOnline = t.notifications_showonline();
		e.Notifications_SendMobile = t.notifications_sendmobile();
		e.Sounds_PlayInGame = t.sounds_showingame();
		e.Sounds_PlayMessage = t.sounds_showmessages();
		e.Sounds_PlayOnline = t.sounds_showonline();
	}
	RequestPerFriendPreferences() {
		let e = a.w.Init(B.Xt);
		B.xt
			.GetPerFriendPreferences(this.m_CMInterface.GetServiceTransport(), e)
			.then((e) => {
				(0, M.h5)(() => {
					for (let t of e.Body().preferences()) {
						let e = this.GetPlayer(t.accountid());
						if (e) {
							e.nickname = t.nickname() || undefined;
							let r = new YS();
							this.FillPerFriendNotificationSettingsFromMessage(r, t);
							e.notification_settings = r;
							this.m_rgPersonaStateChangeCallbacks.Dispatch(e);
						} else {
							console.log(
								"Got per-friend preferences back for a user we don't have a Player for:",
								t,
							);
						}
					}
					this.m_bPerFriendPreferencesLoaded = true;
					this.UpdateReadyToRenderState();
				});
			});
	}
	async StartWaitForInitialAppInfo() {
		await Promise.all(this.m_InitialAppInfoPromises);
		this.m_bInitialAppInfoLoaded = true;
		this.UpdateReadyToRenderState();
	}
	FillMessageFromPerFriendNotificationSettings(e, t) {
		e.set_notifications_showingame(t.Notifications_ShowInGame);
		e.set_notifications_showmessages(t.Notifications_ShowMessage);
		e.set_notifications_showonline(t.Notifications_ShowOnline);
		e.set_notifications_sendmobile(t.Notifications_SendMobile);
		e.set_sounds_showingame(t.Sounds_PlayInGame);
		e.set_sounds_showmessages(t.Sounds_PlayMessage);
		e.set_sounds_showonline(t.Sounds_PlayOnline);
	}
	SetPlayerNickname(e, t) {
		return this.SetPlayerPerFriendPreferences(e, t, e.notification_settings);
	}
	SetPlayerNotificationSettings(e, t) {
		return this.SetPlayerPerFriendPreferences(e, e.nickname, t);
	}
	SetPlayerPerFriendPreferences(e, t, r) {
		let n = a.w.Init(B.$J);
		let i = n.Body().preferences();
		i.set_accountid(e.accountid);
		i.set_nickname(t);
		this.FillMessageFromPerFriendNotificationSettings(i, r);
		return B.xt
			.SetPerFriendPreferences(E.xm.CMInterface.GetServiceTransport(), n)
			.then((e) => e.GetEResult());
	}
	InviteToGame(e, t, r) {
		let n = a.w.Init(p.sw, 7005);
		n.Hdr().set_routing_appid(t);
		n.Body().set_steam_id_src(
			this.m_CMInterface.steamid.ConvertTo64BitString(),
		);
		n.Body().set_steam_id_dest(
			c.b.InitFromAccountID(e.accountid).ConvertTo64BitString(),
		);
		if (r) {
			n.Body().set_connect_string(r);
		}
		this.m_CMInterface.Send(n);
	}
	InviteToLobby(e, t, r) {
		let n = a.w.Init(_, 6621);
		n.Hdr().set_routing_appid(t);
		n.Body().set_steam_id_lobby(r);
		n.Body().set_steam_id_user_invited(
			c.b.InitFromAccountID(e.accountid).ConvertTo64BitString(),
		);
		this.m_CMInterface.Send(n);
	}
	InviteToWatch(e) {
		E.xm.ShowFriendChatDialog(
			E.xm.GetDefaultBrowserContext(),
			e.accountid,
			true,
		);
		E.xm.BroadcastStore.InviteToWatch(e.accountid).then((e) => {});
	}
	FillInChatUsabilityMetrics(e) {
		let t = 0;
		let r = 0;
		let n = 0;
		for (let e of this.all_friends) {
			if (e.efriendrelationship == 3) {
				t++;
				if (e.persona.is_online) {
					r++;
				}
				if (e.persona.is_ingame) {
					n++;
				}
			}
		}
		e.metrics().set_friends_count(t);
		e.metrics().set_friends_online_count(r);
		e.metrics().set_friends_in_game_count(n);
		this.m_FriendGroupStore.FillInChatUsabilityMetrics(e);
		this.m_FavoritesStore.FillInChatUsabilityMetrics(e);
	}
	GetPersonaStatePreference() {
		return this.m_FriendStorePrefs?.ePersonaState;
	}
}
export function uQ(e) {
	switch (e) {
		case 25:
			return "#Friend_InviteError_LimitExceeded";
		case 15:
			return "#Friend_InviteError_AccessDenied";
		case 40:
			return "#Friend_InviteError_Blocked";
		case 11:
			return "#Friend_InviteError_InvalidState";
		case 84:
			return "#Friend_InviteError_RateLimitExceeded";
		case 24:
			return "#Friend_InviteError_InsufficientPrivilege";
	}
	return "#Friend_InviteError";
}
(0, n.Cg)([M.sH], VT.prototype, "m_self", undefined);
(0, n.Cg)([M.sH], VT.prototype, "m_setFriendAccountIDs", undefined);
(0, n.Cg)([M.sH], VT.prototype, "m_eUserPersonaState", undefined);
(0, n.Cg)([M.sH], VT.prototype, "m_bPerFriendPreferencesLoaded", undefined);
(0, n.Cg)([M.sH], VT.prototype, "m_bReceivedFriendsList", undefined);
(0, n.Cg)([M.sH], VT.prototype, "m_bInitialPersonaStatesLoaded", undefined);
(0, n.Cg)([M.sH], VT.prototype, "m_bInitialAppInfoLoaded", undefined);
(0, n.Cg)([L.oI], VT.prototype, "OnPersonaStateUpdate", null);
(0, n.Cg)([M.EW], VT.prototype, "not_ready_to_render_reason", null);
(0, n.Cg)([M.XI], VT.prototype, "OnParentalLockChanged", null);
(0, n.Cg)([M.EW], VT.prototype, "all_friends", null);
(0, n.Cg)([M.EW], VT.prototype, "online_friends", null);
(0, n.Cg)([M.XI], VT.prototype, "SetPersonasOffline", null);
(0, n.Cg)([M.XI], VT.prototype, "SetFriendsList", null);
(0, n.Cg)([L.oI, (0, O.s)(100)], VT.prototype, "PlayJoinGameSound", null);
(0, n.Cg)([L.oI, (0, O.s)(100)], VT.prototype, "PlayFriendOnlineSound", null);
(0, n.Cg)([M.XI], VT.prototype, "SetPlayerNickname", null);
(0, n.Cg)([M.XI], VT.prototype, "SetPlayerNotificationSettings", null);
(0, n.Cg)([M.XI], VT.prototype, "SetPlayerPerFriendPreferences", null);
(0, n.Cg)([M.XI], VT.prototype, "InviteToGame", null);
(0, n.Cg)([M.XI], VT.prototype, "InviteToLobby", null);
(0, n.Cg)([M.XI], VT.prototype, "InviteToWatch", null);
