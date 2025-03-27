import {
	ArrayWithoutElement,
	CountMatches,
} from "../../actual_src/utils/arrayutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import a from "./37976.js";
import s from "./83599.js";
import o from "./80663.js";
import l from "./3756.js";
import c from "./8573.js";
import m, { Gn, fm, z7 } from "./89193.js";
import d from "./12176.js";
import _A from "./36383.js";
import p from "./96127.js";
import g from "./95773.js";
import { Kx, w as w_2 } from "./16583.js";
import C from "./44234.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import b, { js } from "./50979.js";
import y from "./5128.js";
class f {
	static sm_ulNextViewID = 1;
	m_ulChatRoomGroupID;
	m_ulViewID;
	m_nClientChangenumber;
	m_nLastClientChangenumberFromServer = -1;
	m_bViewChanged = false;
	m_iStartIndex = undefined;
	m_iEndIndex = undefined;
	m_nLastServerChangenumber = undefined;
	m_iLastServerStartIndex = undefined;
	m_iLastServerEndIndex = undefined;
	m_mapMembers = new Map();
	m_mapRankByAccountID = new Map();
	m_mapPersonaStates = m.sH.map();
	m_cMemberSummaryTotal = undefined;
	m_cMemberSummaryOnline = undefined;
	m_cMemberSummaryInGame = undefined;
	m_mapPersonaSubscriptions = new Map();
	m_setQueuedPersonaSubscriptions = new Set();
	m_setQueuedPersonaUnsubscriptions = new Set();
	m_nPersonaSubscriptionTimer;
	constructor(e) {
		Gn(this);
		this.m_ulChatRoomGroupID = e;
		this.m_nClientChangenumber = 0;
		this.m_ulViewID = `${f.sm_ulNextViewID++}`;
	}
	GetViewID() {
		return this.m_ulViewID;
	}
	m_iTimeoutApplyUpdates;
	m_rgUpdateQueue = [];
	ApplyUpdates() {
		for (const e of this.m_rgUpdateQueue) {
			if (e.view(false)) {
				const t = e.view();
				let r = t.client_changenumber() == this.m_nClientChangenumber;
				let n =
					t.client_changenumber() == this.m_nLastClientChangenumberFromServer;
				this.m_nLastServerChangenumber = t.server_changenumber();
				if (t.start() != this.m_iLastServerStartIndex && n) {
					let e = [];
					for (
						let t = this.m_iLastServerStartIndex;
						t <= this.m_iLastServerEndIndex;
						t++
					) {
						e.push(this.m_mapMembers.get(t));
					}
					for (let r = t.start(); r <= t.end(); r++) {
						let t = e.shift();
						if (!t) {
							continue;
						}
						let n = this.m_mapRankByAccountID.get(t);
						if (n !== undefined && this.m_mapMembers.get(n) == t) {
							this.m_mapMembers.delete(n);
						}
						this.m_mapMembers.set(r, t);
						this.m_mapRankByAccountID.set(t, r);
					}
				}
				this.m_nLastClientChangenumberFromServer = t.client_changenumber();
				this.m_iLastServerStartIndex = t.start();
				this.m_iLastServerEndIndex = t.end();
				if (!this.m_bViewChanged) {
					if (
						this.m_iLastServerStartIndex < this.m_iStartIndex - 10 ||
						this.m_iLastServerEndIndex > this.m_iEndIndex + 10
					) {
						this.PublishViewExtentsToServer(
							this.m_iStartIndex,
							this.m_iEndIndex,
							11,
						);
					}
				}
				if (r) {
					this.m_bViewChanged = false;
				}
			}
			for (let t of e.members()) {
				let r = t.accountid();
				let n = this.m_mapRankByAccountID.get(r);
				if (n !== undefined && this.m_mapMembers.get(n) == r) {
					this.m_mapMembers.delete(n);
				}
				this.m_mapMembers.set(t.rank(), r);
				this.m_mapRankByAccountID.set(r, t.rank());
				if (t.persona()) {
					this.UpdatePersonaState(t.accountid(), e.status_flags(), t.persona());
				}
			}
			let t = e.member_summary(false);
			if (t) {
				this.m_cMemberSummaryTotal = t.offline() + t.online() + t.ingame();
				this.m_cMemberSummaryOnline = t.online() + t.ingame();
				this.m_cMemberSummaryInGame = t.ingame();
			}
		}
		this.m_rgUpdateQueue = [];
		this.m_iTimeoutApplyUpdates = undefined;
	}
	OnServerUpdate(e) {
		this.m_rgUpdateQueue.push(e);
		if (this.m_bViewChanged) {
			if (this.m_iTimeoutApplyUpdates) {
				window.clearInterval(this.m_iTimeoutApplyUpdates);
			}
			this.ApplyUpdates();
		} else {
			this.m_iTimeoutApplyUpdates ||= window.setTimeout(
				() => this.ApplyUpdates(),
				1000,
			);
		}
		for (const t of e.subscribed_personas()) {
			const r = new c.b(t.friendid()).GetAccountID();
			this.UpdatePersonaState(r, e.status_flags(), t);
		}
	}
	GetViewChangenumber() {
		return [
			this.m_nLastClientChangenumberFromServer,
			this.m_nLastServerChangenumber,
		];
	}
	GetAccountIDAt(e) {
		if (
			e >= this.m_iLastServerStartIndex &&
			e <= this.m_iLastServerEndIndex &&
			this.m_mapMembers.has(e)
		) {
			return this.m_mapMembers.get(e);
		} else {
			return null;
		}
	}
	GetMember(e) {
		if (this.m_mapPersonaStates.has(e)) {
			return this.m_mapPersonaStates.get(e);
		} else {
			return g.xm.FriendStore.GetPlayer(e);
		}
	}
	GetMemberCountTotal() {
		return this.m_cMemberSummaryTotal;
	}
	GetMemberCountOnline() {
		return this.m_cMemberSummaryOnline;
	}
	GetMemberCountInGame() {
		return this.m_cMemberSummaryInGame;
	}
	UpdatePersonaState(e, t, r) {
		if (r && r.player_name()) {
			if (this.m_mapPersonaStates.has(e)) {
				this.m_mapPersonaStates.get(e).mutable_persona.UpdateFromMessage(t, r);
			} else {
				let n = g.xm.FriendStore.GetPlayer(e);
				n.mutable_persona.UpdateFromMessage(t, r);
				this.m_mapPersonaStates.set(e, n);
			}
		}
	}
	m_rgQueuedViewExtents = {
		iStartIndex: -1,
		iEndIndex: -1,
	};
	m_hSetViewExtentsInterval;
	m_hResetViewExtentsInterval;
	SetViewExtents(e, t) {
		this.m_rgQueuedViewExtents = {
			iStartIndex: e,
			iEndIndex: t,
		};
		if (!this.m_hSetViewExtentsInterval) {
			this.PublishQueuedViewExtentsToServer();
			this.m_hSetViewExtentsInterval = window.setTimeout(
				() => this.PublishQueuedViewExtentsToServer(),
				400,
			);
		}
	}
	PublishQueuedViewExtentsToServer() {
		this.m_hSetViewExtentsInterval = undefined;
		if (!this.m_rgQueuedViewExtents) {
			return;
		}
		const { iStartIndex: e, iEndIndex: t } = this.m_rgQueuedViewExtents;
		this.m_rgQueuedViewExtents = null;
		this.PublishViewExtentsToServer(e, t, 100);
		if (this.m_hResetViewExtentsInterval) {
			clearInterval(this.m_hResetViewExtentsInterval);
		}
		this.m_hResetViewExtentsInterval = window.setTimeout(() => {
			this.PublishViewExtentsToServer(e, t, 11);
			this.m_hResetViewExtentsInterval = undefined;
		}, 10000);
	}
	PublishViewExtentsToServer(e, t, r) {
		const n = Math.max(e - r, 0);
		const i = t + r;
		if (this.m_iStartIndex == n && this.m_iEndIndex == i) {
			return;
		}
		this.m_iStartIndex = n;
		this.m_iEndIndex = i;
		this.m_nClientChangenumber++;
		this.m_bViewChanged = true;
		let a = d.w.Init(_A.Cw);
		a.Body().set_chat_group_id(this.m_ulChatRoomGroupID);
		a.Body().set_view_id(this.m_ulViewID);
		a.Body().set_client_changenumber(this.m_nClientChangenumber);
		a.Body().set_start(this.m_iStartIndex);
		a.Body().set_end(this.m_iEndIndex);
		_A.xP.UpdateMemberListView(g.xm.CMInterface.GetServiceTransport(), a);
	}
	SubscribeToPersona(e) {
		const t = this.m_mapPersonaSubscriptions.get(e);
		if (t) {
			this.m_mapPersonaSubscriptions.set(e, t + 1);
		} else {
			this.m_mapPersonaSubscriptions.set(e, 1);
			this.m_setQueuedPersonaSubscriptions.add(e);
			this.ScheduleSubscriptionUpdate();
		}
	}
	UnsubscribeFromPersona(e) {
		const t = this.m_mapPersonaSubscriptions.get(e);
		if (t) {
			if (t > 1) {
				this.m_mapPersonaSubscriptions.set(e, t - 1);
			} else {
				this.m_mapPersonaSubscriptions.delete(e);
				this.m_setQueuedPersonaUnsubscriptions.add(e);
				this.ScheduleSubscriptionUpdate();
			}
		} else {
			console.warn(
				`Attempting to unsubscribe from a persona that we are not subscribed to. Chat: ${this.m_ulChatRoomGroupID}, Account: ${e}`,
			);
		}
	}
	ScheduleSubscriptionUpdate() {
		this.m_nPersonaSubscriptionTimer ||= window.setTimeout(() => {
			this.m_nClientChangenumber++;
			let e = d.w.Init(_A.Cw);
			e.Body().set_chat_group_id(this.m_ulChatRoomGroupID);
			e.Body().set_view_id(this.m_ulViewID);
			e.Body().set_client_changenumber(this.m_nClientChangenumber);
			e.Body().set_start(this.m_iStartIndex);
			e.Body().set_end(this.m_iEndIndex);
			if (this.m_setQueuedPersonaSubscriptions.size) {
				e.Body().set_persona_subscribe_accountids(
					Array.from(this.m_setQueuedPersonaSubscriptions),
				);
				this.m_setQueuedPersonaSubscriptions.clear();
			}
			if (this.m_setQueuedPersonaUnsubscriptions.size) {
				e.Body().set_persona_unsubscribe_accountids(
					Array.from(this.m_setQueuedPersonaUnsubscriptions),
				);
				this.m_setQueuedPersonaUnsubscriptions.clear();
			}
			_A.xP.UpdateMemberListView(g.xm.CMInterface.GetServiceTransport(), e);
			this.m_nPersonaSubscriptionTimer = undefined;
		}, 50);
	}
	UnregisterFromServer() {
		let e = d.w.Init(_A.Cw);
		e.Body().set_chat_group_id(this.m_ulChatRoomGroupID);
		e.Body().set_view_id(this.m_ulViewID);
		e.Body().set_delete_view(true);
		_A.xP.UpdateMemberListView(g.xm.CMInterface.GetServiceTransport(), e);
	}
	async PerformSearch(e, t, r) {
		let n = r.toLocaleLowerCase();
		let i = d.w.Init(_A.NQ);
		i.Body().set_chat_group_id(this.m_ulChatRoomGroupID);
		i.Body().set_search_id(t);
		i.Body().set_search_text(n);
		return _A.xP
			.SearchMembers(g.xm.CMInterface.GetServiceTransport(), i)
			.then((e) => {
				let t = [];
				for (let r of e.Body().matching_members()) {
					if (r.persona()) {
						this.UpdatePersonaState(
							r.accountid(),
							e.Body().status_flags(),
							r.persona(),
						);
					}
					let i = this.m_mapPersonaStates.get(r.accountid());
					w_2(i, "Missing persona in member matches");
					if (!i) {
						continue;
					}
					let a = i.MatchSearchString(n);
					t.push({
						friend: i,
						iMatchOffset: a.iOffset,
						bNicknameMatch: a.match == 2,
					});
				}
				return t;
			});
	}
	GetAllKnownPersonas() {
		return Array.from(this.m_mapPersonaStates.values());
	}
}
Cg([m.sH], f.prototype, "m_iStartIndex", undefined);
Cg([m.sH], f.prototype, "m_iEndIndex", undefined);
Cg([m.sH], f.prototype, "m_nLastServerChangenumber", undefined);
Cg([m.sH], f.prototype, "m_iLastServerStartIndex", undefined);
Cg([m.sH], f.prototype, "m_iLastServerEndIndex", undefined);
Cg([m.sH], f.prototype, "m_cMemberSummaryTotal", undefined);
Cg([m.sH], f.prototype, "m_cMemberSummaryOnline", undefined);
Cg([m.sH], f.prototype, "m_cMemberSummaryInGame", undefined);
Cg([m.XI], f.prototype, "ApplyUpdates", null);
Cg([m.XI], f.prototype, "OnServerUpdate", null);
class S {
	m_rank = undefined;
	m_role_ids = undefined;
	constructor(e = 20, t) {
		Gn(this);
		this.m_rank = e;
		this.m_role_ids = t;
	}
	BHasRole(e) {
		return this.m_role_ids.findIndex((t) => t == e) != -1;
	}
}
Cg([m.sH], S.prototype, "m_rank", undefined);
Cg([m.sH], S.prototype, "m_role_ids", undefined);
class w {
	m_roleActions = new _A.JN();
	constructor(e) {
		this.m_roleActions = e;
	}
	BCanPerformAction(e) {
		switch (e) {
			case 1: {
				return this.m_roleActions.can_create_rename_delete_channel();
			}
			case 2: {
				return this.m_roleActions.can_kick();
			}
			case 3: {
				return this.m_roleActions.can_ban();
			}
			case 4: {
				return this.m_roleActions.can_invite();
			}
			case 5: {
				return this.m_roleActions.can_change_tagline_avatar_name();
			}
			case 6: {
				return this.m_roleActions.can_chat();
			}
			case 8: {
				return this.m_roleActions.can_change_group_roles();
			}
			case 9: {
				return this.m_roleActions.can_change_user_roles();
			}
			case 10: {
				return this.m_roleActions.can_mention_all();
			}
			case 11: {
				return this.m_roleActions.can_set_watching_broadcast();
			}
			default: {
				return false;
			}
		}
	}
	SetCanPerformAction(e, t) {
		switch (e) {
			case 1: {
				this.m_roleActions.set_can_create_rename_delete_channel(t);
				break;
			}
			case 2: {
				this.m_roleActions.set_can_kick(t);
				break;
			}
			case 3: {
				this.m_roleActions.set_can_ban(t);
				break;
			}
			case 4: {
				this.m_roleActions.set_can_invite(t);
				break;
			}
			case 5: {
				this.m_roleActions.set_can_change_tagline_avatar_name(t);
				break;
			}
			case 6: {
				this.m_roleActions.set_can_chat(t);
				break;
			}
			case 8: {
				this.m_roleActions.set_can_change_group_roles(t);
				break;
			}
			case 9: {
				this.m_roleActions.set_can_change_user_roles(t);
				break;
			}
			case 10: {
				this.m_roleActions.set_can_mention_all(t);
				break;
			}
			case 11: {
				this.m_roleActions.set_can_set_watching_broadcast(t);
			}
		}
	}
	toString() {
		let e = this.role_id;
		if (this.m_roleActions.can_create_rename_delete_channel()) {
			e += " CreateRenameDeleteChannel";
		}
		if (this.m_roleActions.can_kick()) {
			e += " Kick";
		}
		if (this.m_roleActions.can_ban()) {
			e += " Ban";
		}
		if (this.m_roleActions.can_invite()) {
			e += " Invite";
		}
		if (this.m_roleActions.can_change_tagline_avatar_name()) {
			e += " ChangeTaglineAvatarName";
		}
		if (this.m_roleActions.can_chat()) {
			e += " Chat";
		}
		if (this.m_roleActions.can_change_group_roles()) {
			e += " ChangeGroupRoles";
		}
		if (this.m_roleActions.can_change_user_roles()) {
			e += " ChangeUserRoles";
		}
		return e;
	}
	get role_id() {
		return this.m_roleActions.role_id();
	}
	get roleActions() {
		return this.m_roleActions;
	}
}
export class a$ {
	LOG = new s.wd("ChatRoomGroup", () => this.unique_id).Debug;
	m_chatStore = null;
	m_ulGroupID = "";
	m_ulDefaultChatID = "";
	m_rtTimeJoined = 0;
	m_unClanID;
	m_unAppID;
	m_rtLastAck = 0;
	m_unOwnerAccountID = undefined;
	m_bFullStateLoaded = false;
	m_strName = "";
	m_strTagLine = "";
	m_strAvatarSHA = "";
	m_strAvatarUGCURL = "";
	m_unWatchingBroadcastAccountID = undefined;
	m_strWatchingBroadcastChannelID = "";
	m_mapRooms = m.sH.map(null, {
		deep: false,
	});
	m_rgPartyBeacons = [];
	m_eUserDesktopNotificationLevel = 4;
	m_eUserMobileNotificationLevel = 4;
	m_bUnreadIndicatorMuted = false;
	m_defaultRoleID;
	m_roles = [];
	m_roleActions = [];
	m_rgGroupMembersSummary = undefined;
	m_groupMembers = new R();
	m_cMemberSummaryCount = 0;
	m_bMemberListVirtualized = false;
	constructor(e, t) {
		Gn(this);
		this.m_chatStore = e;
		this.m_ulGroupID = t;
	}
	get ChatStore() {
		return this.m_chatStore;
	}
	BIsValid() {
		return this.m_mapRooms.size > 0;
	}
	IsNamedGroupChat() {
		return !!this.m_strName || this.BIsClanChatRoom();
	}
	GetOwnerAccountID() {
		return this.m_unOwnerAccountID;
	}
	BIsAccountIDOwner(e) {
		if (this.BIsClanChatRoom()) {
			return this.GetMemberRankIfPresent(e) == 50;
		} else {
			return this.GetOwnerAccountID() == e;
		}
	}
	SetOwnerAppID(e) {
		e ||= 0;
		if (this.m_unAppID != e) {
			this.m_unAppID = e;
			if (this.m_unAppID) {
				g.xm.AppInfoStore.GetAppInfo(this.m_unAppID);
				g.xm.AppInfoStore.GetRichPresenceLoc(this.m_unAppID);
			}
		}
	}
	GetOwnerAppID() {
		return this.m_unAppID;
	}
	get name() {
		if (this.m_strName || this.BIsClanChatRoom()) {
			return this.m_strName;
		}
		{
			let e = this.members_to_highlight_name;
			let t = e.members;
			if (!t.length) {
				if (e.remaining_count) {
					return (0, Localize)(
						"#ChatRoom_GenericWithOthers",
						e.remaining_count,
					);
				} else {
					return (0, Localize)("#ChatRoom_GenericEmpty");
				}
			}
			switch (t.length) {
				case 1: {
					if (e.remaining_count > 0) {
						return (0, Localize)(
							"#ChatRoom_OneFriendPlusMore",
							t[0].display_name,
							e.remaining_count,
						);
					} else {
						return (0, Localize)("#ChatRoom_OneFriend", t[0].display_name);
					}
				}
				case 2: {
					if (e.remaining_count > 0) {
						return (0, Localize)(
							"#ChatRoom_TwoPlusMore",
							t[0].display_name,
							t[1].display_name,
							e.remaining_count,
						);
					} else {
						return (0, Localize)(
							"#ChatRoom_TwoFriends",
							t[0].display_name,
							t[1].display_name,
						);
					}
				}
				case 3: {
					return (0, Localize)(
						"#ChatRoom_ThreeFriends",
						t[0].display_name,
						t[1].display_name,
						t[2].display_name,
					);
				}
				default: {
					w_2(false, `unexpected number of friends: ${t.length}`);
					return "";
				}
			}
		}
	}
	get tagline() {
		return this.m_strTagLine;
	}
	get avatarSHA() {
		return this.m_strAvatarSHA;
	}
	get avatarUGCURL() {
		return this.m_strAvatarUGCURL;
	}
	get watching_broadcast_steamid() {
		if (this.m_unWatchingBroadcastAccountID) {
			return c.b.InitFromAccountID(this.m_unWatchingBroadcastAccountID);
		} else {
			return null;
		}
	}
	get watching_broadcast_channel_id() {
		return this.m_strWatchingBroadcastChannelID;
	}
	get hasAvatarSHA() {
		return this.m_strAvatarSHA.length > 0;
	}
	get hasIcon() {
		return this.hasAvatarSHA || this.m_unAppID != 0;
	}
	GetAvatarOrAppIconURL(e) {
		if (this.m_strAvatarUGCURL) {
			return this.m_strAvatarUGCURL;
		}
		if (!this.m_strAvatarSHA && this.m_unAppID) {
			let e = g.xm.AppInfoStore.GetAppInfo(this.m_unAppID);
			if (e.is_valid && e.icon_url) {
				return e.icon_url;
			}
		}
		return ((e, t) => {
			t = t <= 32 ? 32 : t <= 64 ? 64 : 256;
			let r = C.TS.AVATAR_BASE_URL;
			r ||= `${C.TS.MEDIA_CDN_COMMUNITY_URL}images/chaticons/${e.substr(
				0,
				2,
			)}/${e.substr(2, 2)}/${e.substr(4, 2)}/`;
			r += `${e}_${t}.jpg`;
			return r;
		})(this.m_strAvatarSHA, e);
	}
	get avatar_url_small() {
		return this.GetAvatarOrAppIconURL(32);
	}
	get avatar_url_medium() {
		return this.GetAvatarOrAppIconURL(64);
	}
	get avatar_url_full() {
		return this.GetAvatarOrAppIconURL(256);
	}
	get memberCountTotal() {
		if (this.m_bFullStateLoaded) {
			return this.m_groupMembers.unfiltered_count;
		} else {
			return this.m_cMemberSummaryCount;
		}
	}
	get readyToRender() {
		return this.m_bFullStateLoaded;
	}
	get memberCountOnline() {
		if (this.m_bFullStateLoaded) {
			return this.m_groupMembers.member_counts.online;
		} else {
			return this.memberCountTotal;
		}
	}
	get memberCountInGame() {
		return this.m_groupMembers.member_counts.ingame;
	}
	get memberList() {
		return this.m_groupMembers;
	}
	get unique_id() {
		return `cg${this.m_ulGroupID}`;
	}
	get timeJoined() {
		return this.m_rtTimeJoined;
	}
	GetGroupID() {
		return this.m_ulGroupID;
	}
	GetDefaultChatID() {
		return this.m_ulDefaultChatID;
	}
	BIsClanChatRoom() {
		return !!this.m_unClanID;
	}
	BIsVoiceChannel(e) {
		let t = this.GetChatRoom(e);
		return (
			t != null &&
			t.GetVoiceAllowed() &&
			t.GetRoomID() != this.GetDefaultChatID()
		);
	}
	BIsTempVoiceChannel(e) {
		let t = this.GetChatRoom(e);
		return t && t.IsTempVoiceRoom();
	}
	GetClanID() {
		return this.m_unClanID;
	}
	get chatRoomList() {
		let e = Array.from(this.m_mapRooms.values());
		e.sort((e, t) => {
			if (e.GetSortOrder() < t.GetSortOrder()) {
				return -1;
			}
			if (e.GetSortOrder() > t.GetSortOrder()) {
				return 1;
			}
			let r = a.A.fromString(e.GetRoomID());
			let n = a.A.fromString(t.GetRoomID());
			if (r.lessThan(n)) {
				return -1;
			} else if (r.greaterThan(n)) {
				return 1;
			} else {
				return 0;
			}
		});
		return e;
	}
	get textRoomList() {
		return this.chatRoomList.filter(
			(e) => !e.GetVoiceAllowed() || e.GetRoomID() == this.GetDefaultChatID(),
		);
	}
	get voiceRoomList() {
		return this.chatRoomList.filter((e) => e.GetVoiceAllowed());
	}
	get hasVoiceRoom() {
		let e;
		let t = this.m_mapRooms.values();
		while ((e = t.next()) && !e.done) {
			if (e.value.GetVoiceAllowed()) {
				return true;
			}
		}
		return false;
	}
	GetDesktopNotificationLevel(e = false) {
		if (this.m_eUserDesktopNotificationLevel == 0) {
			if (this.BIsClanChatRoom()) {
				return 3;
			} else {
				return 4;
			}
		} else {
			return this.m_eUserDesktopNotificationLevel;
		}
	}
	GetMobileNotificationLevel() {
		if (this.m_eUserMobileNotificationLevel === 0) {
			return 3;
		} else {
			return this.m_eUserMobileNotificationLevel;
		}
	}
	BIsUnreadIndicatorMuted() {
		return this.m_bUnreadIndicatorMuted;
	}
	get hasUnreadChatMessage() {
		let e = Array.from(this.m_mapRooms.values());
		for (let t of e) {
			if (
				(this.m_bUnreadIndicatorMuted
					? t.has_unread_messages
					: t.has_any_unread_messages) &&
				(t.BIsDefaultRoom() ||
					t.time_last_ack >= this.m_rtLastAck ||
					t.time_last_ack >= this.m_rtLastAck ||
					t.time_last_mention > this.m_rtLastAck)
			) {
				return true;
			}
		}
		return false;
	}
	get HasUnreadMention() {
		let e = Array.from(this.m_mapRooms.values());
		for (let t of e) {
			if (t.has_unread_mention) {
				return true;
			}
		}
		return false;
	}
	GetChatRoomsWithUnreadPriorityMessages(e) {
		this.m_mapRooms.forEach((t) => {
			if (t.has_unread_priority_messages) {
				e.push(t);
			}
		});
	}
	get time_last_activity() {
		let e = 0;
		let t = 0;
		this.m_mapRooms.forEach((r) => {
			if (!r.BShouldTrackUnreadMessages()) {
				return;
			}
			let n = r.time_last_activity;
			if (n > this.m_rtLastAck) {
				t = t == 0 ? n : Math.min(n, t);
			} else {
				e = Math.max(n, e);
			}
		});
		let r = t;
		r ||= e;
		if (this.m_rtTimeJoined > r) {
			r = this.m_rtTimeJoined;
		}
		return r;
	}
	get room_with_last_message() {
		let e;
		let t = 0;
		this.m_mapRooms.forEach((r) => {
			if (t < r.time_last_message) {
				e = r;
				t = r.time_last_message;
			}
		});
		return e;
	}
	GetRoomWithLastMessageForUser() {
		let e;
		let t = 0;
		this.m_mapRooms.forEach((r) => {
			if (t < r.time_last_message) {
				e = r;
				t = r.time_last_message;
			}
		});
		return e;
	}
	BHasEverBeenAcked() {
		if (this.m_rtLastAck) {
			return true;
		}
		let e = Array.from(this.m_mapRooms.values());
		for (let t of e) {
			if (t.time_last_ack) {
				return true;
			}
		}
		return false;
	}
	UpdateLastAckTimeFromServer(e) {
		if (this.m_rtLastAck < e) {
			this.m_rtLastAck = e;
		}
	}
	IsInRoom(e) {
		w_2(this.m_bFullStateLoaded, "Group state not fully loaded");
		return this.m_groupMembers.HasMember(e);
	}
	BRoomContainsJustTheseFriendsAndSelf(e) {
		if (!this.BIsCurrentUserAMember()) {
			return false;
		}
		if (this.memberCountTotal != e.length + 1) {
			return false;
		}
		let t = true;
		for (let r of e) {
			if (!this.m_rgGroupMembersSummary.includes(r)) {
				t = false;
				break;
			}
		}
		return t;
	}
	GetMyRank() {
		return this.GetMemberRank(
			this.m_chatStore.CMInterface.steamid.GetAccountID(),
		);
	}
	ChangeMemberRank(e, t) {
		w_2(this.m_groupMembers.HasMember(e), "ChangeMemberRank: missing member");
		this.m_groupMembers.GetExtra(e).m_rank = t;
	}
	GetMemberRank(e) {
		w_2(this.m_groupMembers.HasMember(e), "GetMemberRank: missing member");
		let t = this.m_groupMembers.GetExtra(e);
		if (t && t.m_rank != 0) {
			return t.m_rank;
		} else if (this.BIsClanChatRoom()) {
			return 0;
		} else {
			return 20;
		}
	}
	GetMemberRankIfPresent(e) {
		let t = this.m_groupMembers.GetExtra(e);
		if (t) {
			return t.m_rank;
		} else {
			return 0;
		}
	}
	GetMemberPartyBeacon(e) {
		return this.m_rgPartyBeacons.find((t) => t.account_id == e);
	}
	ChangeMemberRoles(e, t) {
		w_2(this.m_groupMembers.HasMember(e), "GetMemberRank: missing member");
		let r = this.m_groupMembers.GetExtra(e);
		if (r) {
			r.m_role_ids = t;
		}
	}
	GetMemberRankString(e) {
		if (!this.IsInRoom(e)) {
			return "";
		}
		switch (this.GetMemberRank(e)) {
			case 50: {
				return (0, Localize)("#Chat_rank_owner");
			}
			case 40: {
				return (0, Localize)("#Chat_rank_officer");
			}
			case 30: {
				return (0, Localize)("#Chat_rank_moderator");
			}
			case 20: {
				return (0, Localize)("#Chat_rank_member");
			}
			case 15: {
				return (0, Localize)("#Chat_rank_guest");
			}
			case 10: {
				return (0, Localize)("#Chat_rank_viewer");
			}
			case 0: {
				return "";
			}
			default: {
				return (0, Localize)("#Chat_rank_unknown");
			}
		}
	}
	GetMemberRankStringUnlocalized(e) {
		if (!this.IsInRoom(e)) {
			return "";
		}
		switch (this.GetMemberRank(e)) {
			case 50: {
				return "Owner";
			}
			case 40: {
				return "Officer";
			}
			case 30: {
				return "Moderator";
			}
			case 20: {
				return "Member";
			}
			case 15: {
				return "Guest";
			}
			case 10: {
				return "Viewer";
			}
			case 0: {
				return "DefaultRank";
			}
			default: {
				return (0, Localize)("UnknownRank");
			}
		}
	}
	GetMember(e) {
		if (this.IsInRoom(e)) {
			return this.m_chatStore.FriendStore.GetPlayer(e);
		}
		this.m_bFullStateLoaded;
	}
	SetInitialGroupState(e) {
		w_2(
			e.chat_group_id() == this.m_ulGroupID,
			"Chat group id doesn't match header",
		);
		this.UpdateGroupStateFromSummary(e);
		this.UpdateChatRoomState(e.default_chat_id(), e.chat_rooms());
	}
	UpdateGroupStateFromSummary(e) {
		this.m_strTagLine = e.chat_group_tagline();
		if (e.chat_group_avatar_sha() != null) {
			this.m_strAvatarSHA = Kx(e.chat_group_avatar_sha());
		}
		this.m_strAvatarUGCURL = e.avatar_ugc_url() || "";
		this.m_unWatchingBroadcastAccountID = e.watching_broadcast_accountid();
		this.m_strWatchingBroadcastChannelID = e.watching_broadcast_channel_id();
		this.m_cMemberSummaryCount = e.active_member_count();
		this.m_unClanID = e.clanid();
		this.m_unOwnerAccountID = e.accountid_owner();
		this.m_rgGroupMembersSummary = e.top_members();
		this.m_defaultRoleID = e.default_role_id();
		this.m_roleActions = e.role_actions().map((e) => new w(e));
		this.m_groupMembers.AddMember(
			g.xm.CMInterface.steamid.GetAccountID(),
			new S(e.rank(), e.role_ids()),
		);
		this.SetOwnerAppID(e.appid());
		this.SetNameCheckingForAppLocalization(e.chat_group_name());
		this.m_rgPartyBeacons = e.party_beacons().map((e) => ({
			account_id: new c.b(e.steamid_owner()).GetAccountID(),
			app_id: e.app_id(),
			beacon_id: e.beacon_id(),
			game_metadata: e.game_metadata(),
		}));
		g.xm.GroupMemberStore.OnPartyBeaconsUpdated(
			this.m_ulGroupID,
			this.m_rgPartyBeacons,
		);
	}
	SetNameCheckingForAppLocalization(e) {
		let t = null;
		if (!this.m_unOwnerAccountID && this.GetOwnerAppID()) {
			if (e[0] == "#") {
				t = {
					tok: e,
				};
			} else if (e[0] == "{") {
				t = JSON.parse(e);
			}
		}
		if (t && t.tok) {
			this.m_strName = "...";
			g.xm.AppInfoStore.GetRichPresenceLocAsync(this.GetOwnerAppID()).then(
				(e) => {
					let r = new Map();
					if (t.params) {
						for (let e in t.params) {
							r.set(e.toString(), t.params[e].toString());
						}
					}
					this.m_strName = e.Localize(t.tok, r);
				},
			);
		} else {
			this.m_strName = e;
		}
	}
	UpdateGroupState(e) {
		w_2(
			e.header_state().chat_group_id() == this.m_ulGroupID,
			"Chat group id doesn't match header",
		);
		this.UpdateChatRoomHeaderState(e.header_state());
		this.m_groupMembers.Clear();
		let t = [];
		for (let r of e.members()) {
			let e = r.accountid();
			this.m_groupMembers.AddMember(e, new S(r.rank(), r.role_ids()));
			if (t.length < 10) {
				t.push(e);
			}
		}
		if (
			!this.m_rgGroupMembersSummary ||
			this.m_rgGroupMembersSummary.length < t.length
		) {
			this.m_rgGroupMembersSummary = t;
		}
		this.UpdateChatRoomState(e.default_chat_id(), e.chat_rooms());
		this.m_bFullStateLoaded = true;
	}
	SetMemberListVirtualized(e) {
		this.m_bMemberListVirtualized = e;
		this.m_groupMembers.SetMemberDataVirtualized(e);
	}
	BIsMemberListVirtualized() {
		return this.m_bMemberListVirtualized;
	}
	UnloadActiveGroupState() {
		this.UnloadGroupState();
		this.m_mapRooms.forEach((e) => {
			e.UnloadActiveChatState();
		});
	}
	UnloadGroupState() {
		this.m_bFullStateLoaded = false;
		this.m_bMemberListVirtualized = false;
		this.m_groupMembers.Clear();
	}
	UnloadAndResetGroupState() {
		this.UnloadGroupState();
		this.UpdateUserState(new _A.Dj());
		this.m_mapRooms.forEach((e) => {
			e.UnloadChatState();
		});
	}
	OnUserStateChange(e, t) {
		let r = e.accountid();
		if (t == 1) {
			this.LOG(`new member ${r} roles [${e.role_ids().toString()}]`);
			this.m_groupMembers.AddMember(r, new S(e.rank(), e.role_ids()));
			g.xm.GroupMemberStore.OnMemberAdded(this.m_ulGroupID, r);
			if (
				this.m_rgGroupMembersSummary.length < 10 &&
				!this.m_rgGroupMembersSummary.includes(r)
			) {
				this.m_rgGroupMembersSummary = [...this.m_rgGroupMembersSummary, r];
			}
		} else if (t == 2 || t == 3 || t == 3 || t == 10) {
			this.m_groupMembers.RemoveMember(r);
			g.xm.GroupMemberStore.OnMemberRemoved(this.m_ulGroupID, r);
			if (this.m_rgGroupMembersSummary.includes(r)) {
				this.m_rgGroupMembersSummary = ArrayWithoutElement(
					this.m_rgGroupMembersSummary,
					r,
				);
			}
		} else if (t == 7) {
			this.ChangeMemberRank(r, e.rank());
		} else if (t == 12) {
			this.ChangeMemberRoles(r, e.role_ids());
		}
	}
	UpdateChatRoomState(e, t) {
		this.m_ulDefaultChatID = e;
		let r = new Set();
		this.m_mapRooms.forEach((e, t) => r.add(t));
		for (let n of t) {
			let t = n.chat_id();
			r.delete(t);
			let i = this.m_mapRooms.get(t);
			if (!i) {
				i = new l.d(this.m_chatStore, this, t, t == e);
				this.m_mapRooms.set(t, i);
			}
			i.UpdateChatState(n);
		}
		r.forEach((e) => this.m_mapRooms.delete(e));
	}
	UpdateUserState(e) {
		for (let t of e.user_chat_room_state()) {
			let e = t.chat_id();
			let r = this.m_mapRooms.get(e);
			if (r) {
				r.UpdateUserState(t);
			}
		}
		this.m_rtTimeJoined = e.time_joined();
		this.m_rtLastAck = e.time_last_group_ack();
		this.m_eUserDesktopNotificationLevel = e.desktop_notification_level();
		this.m_eUserMobileNotificationLevel = e.mobile_notification_level();
		this.m_bUnreadIndicatorMuted = e.unread_indicator_muted();
	}
	UpdateChatRoomHeaderState(e) {
		w_2(
			e.chat_group_id() == this.m_ulGroupID,
			"Chat group id doesn't match header",
		);
		this.m_strTagLine = e.tagline();
		if (e.avatar_sha() != null) {
			this.m_strAvatarSHA = Kx(e.avatar_sha());
		}
		this.m_strAvatarUGCURL = e.avatar_ugc_url() || "";
		this.m_unWatchingBroadcastAccountID = e.watching_broadcast_accountid();
		this.m_unClanID = e.clanid();
		this.m_unOwnerAccountID = e.accountid_owner();
		this.m_defaultRoleID = e.default_role_id();
		this.m_roles = e.roles().map((e) => ({
			role_id: e.role_id(),
			name: e.name(),
			ordinal: e.ordinal(),
		}));
		for (let e of this.m_roles) {
			this.LOG(`role ${e.role_id} ${e.name}`);
		}
		this.m_roleActions = e.role_actions().map((e) => new w(e));
		for (let e of this.m_roleActions) {
			this.LOG(`role/action ${e.toString()}`);
		}
		this.SetOwnerAppID(e.appid());
		this.SetNameCheckingForAppLocalization(e.chat_name());
		this.m_rgPartyBeacons = e.party_beacons().map((e) => ({
			account_id: new c.b(e.steamid_owner()).GetAccountID(),
			app_id: e.app_id(),
			beacon_id: e.beacon_id(),
			game_metadata: e.game_metadata(),
		}));
		g.xm.GroupMemberStore.OnPartyBeaconsUpdated(
			this.m_ulGroupID,
			this.m_rgPartyBeacons,
		);
	}
	BIsCurrentUserAMember() {
		return !!this.m_rtTimeJoined;
	}
	DefaultRoleID() {
		return this.m_defaultRoleID;
	}
	GetRoleActions(e) {
		for (let t of this.m_roleActions) {
			if (t.role_id == e) {
				return t;
			}
		}
	}
	GetRoles() {
		return this.m_roles;
	}
	GetRoleOrdinal(e) {
		for (let t of this.m_roles) {
			if (t.role_id == e) {
				return t.ordinal;
			}
		}
	}
	BIsUserGroupMember(e) {
		for (let t of this.m_rgGroupMembersSummary) {
			if (t == e.accountid) {
				return true;
			}
		}
		return false;
	}
	GetMemberRoleIDs(e) {
		if (this.m_groupMembers.GetExtra(e) == null) {
			return [];
		} else {
			return this.m_groupMembers.GetExtra(e).m_role_ids;
		}
	}
	ToggleMemberRoleState(e, t) {
		let r = this.BMemberHasRole(e, t);
		return this.SetMemberRoleState(e, t, !r);
	}
	SetMemberRoleState(e, t, r) {
		if (r == this.BMemberHasRole(e, t)) {
			return Promise.resolve(true);
		}
		if (!this.BCanIAssignRole(t)) {
			return Promise.resolve(false);
		}
		let n = c.b.InitFromAccountID(e);
		if (r) {
			let e = d.w.Init(_A.ng);
			e.Body().set_chat_group_id(this.GetGroupID());
			e.Body().set_steamid(n.ConvertTo64BitString());
			e.Body().set_role_id(t);
			return _A.xP
				.AddRoleToUser(g.xm.ChatStore.CMInterface.GetServiceTransport(), e)
				.then((e) => {
					e.GetEResult();
					return e.GetEResult() == 1;
				});
		}
		{
			let e = d.w.Init(_A.Ig);
			e.Body().set_chat_group_id(this.GetGroupID());
			e.Body().set_steamid(n.ConvertTo64BitString());
			e.Body().set_role_id(t);
			return _A.xP
				.DeleteRoleFromUser(g.xm.ChatStore.CMInterface.GetServiceTransport(), e)
				.then((e) => {
					e.GetEResult();
					return e.GetEResult() == 1;
				});
		}
	}
	BDoesRoleAllowAction(e, t) {
		for (let r of this.m_roleActions) {
			if (r.role_id == e && r.BCanPerformAction(t)) {
				return true;
			}
		}
		return false;
	}
	BCanIPerformActionOnUser(e, t, r = false) {
		return (
			(!!r || !!this.BHasMember(e)) &&
			!this.BIsAccountIDOwner(e) &&
			this.BCanIPerformAction(t)
		);
	}
	BHasMember(e) {
		return this.m_groupMembers.GetExtra(e) !== undefined;
	}
	BMemberHasRole(e, t) {
		let r = this.m_groupMembers.GetExtra(e);
		return !!r && r.BHasRole(t);
	}
	BCanIPerformAction(e) {
		if (
			this.BIsAccountIDOwner(
				this.m_chatStore.CMInterface.steamid.GetAccountID(),
			)
		) {
			return true;
		}
		let t = this.m_chatStore.CMInterface.steamid.GetAccountID();
		let r = this.m_groupMembers.GetExtra(t);
		if (r) {
			for (let t of r.m_role_ids) {
				if (this.BDoesRoleAllowAction(t, e)) {
					return true;
				}
			}
		}
		return false;
	}
	BCanKickMember(e) {
		return this.BCanIPerformActionOnUser(e, 2);
	}
	BCanBanMember(e) {
		return this.BCanIPerformActionOnUser(e, 3);
	}
	BCanDeleteMemberMessages(e) {
		if (g.xm.FriendStore.self.accountid == e) {
			return true;
		}
		return (
			this.BCanIPerformActionOnUser(e, 2, true) ||
			this.BCanIPerformActionOnUser(e, 3, true)
		);
	}
	BCanICreateRoles() {
		return this.BCanIPerformAction(8);
	}
	BCanIModifyRole(e) {
		if (
			this.BIsAccountIDOwner(
				this.m_chatStore.CMInterface.steamid.GetAccountID(),
			)
		) {
			return true;
		}
		if (!this.BCanIPerformAction(8)) {
			return false;
		}
		if (!this.GetRoleActions(e)) {
			return false;
		}
		let t = this.GetRoleOrdinal(e);
		if (t == null) {
			return false;
		}
		let r = this.GetHighestRankRoleIDForPermission(
			this.m_chatStore.CMInterface.steamid.GetAccountID(),
			8,
		);
		let n = this.GetRoleOrdinal(r);
		return n != null && n < t;
	}
	BCanIAssignRoles() {
		return this.BCanIPerformAction(9);
	}
	BCanIAssignRole(e) {
		if (this.BIsClanChatRoom()) {
			return false;
		}
		if (e == this.DefaultRoleID()) {
			return false;
		}
		if (
			this.BIsAccountIDOwner(
				this.m_chatStore.CMInterface.steamid.GetAccountID(),
			)
		) {
			return true;
		}
		if (!this.BCanIPerformAction(9)) {
			return false;
		}
		if (!this.GetRoleActions(e)) {
			return false;
		}
		let t = this.GetRoleOrdinal(e);
		if (t == null) {
			return false;
		}
		let r = this.GetHighestRankRoleIDForPermission(
			this.m_chatStore.CMInterface.steamid.GetAccountID(),
			9,
		);
		let n = this.GetRoleOrdinal(r);
		return n != null && n < t;
	}
	BCanIMentionAll() {
		return this.BCanIPerformAction(10);
	}
	BCanIAssociateBroadcast() {
		return this.BCanIPerformAction(11);
	}
	GetHighestRankRoleIDForPermission(e, t) {
		let r;
		let n = Number.MAX_VALUE;
		let i = this.m_groupMembers.GetExtra(e);
		if (i) {
			for (let e of i.m_role_ids) {
				if (this.BDoesRoleAllowAction(e, t)) {
					let t = this.GetRoleOrdinal(e);
					if (t < n) {
						r = e;
						n = t;
					}
				}
			}
			return r;
		}
	}
	GetDefaultChatRoom() {
		return this.m_mapRooms.get(this.m_ulDefaultChatID);
	}
	GetChatRoom(e) {
		return this.m_mapRooms.get(e);
	}
	OnConnectionRestored(e) {
		if (e) {
			this.UnloadGroupState();
		}
		this.m_mapRooms.forEach((e) => e.OnConnectionRestored());
	}
	OnRoomStateChange(e) {
		this.UpdateChatRoomState(e.default_chat_id(), e.chat_rooms());
	}
	OnActivate() {
		if (!this.m_rtLastAck || this.hasUnreadChatMessage) {
			let e = 0;
			this.m_mapRooms.forEach((t) => {
				if (t.time_last_message) {
					e = Math.max(e, t.time_last_message);
				}
			});
			this.m_rtLastAck = e || g.xm.GetServerRTime32();
			let t = d.w.Init(_A.MH);
			t.Body().set_chat_group_id(this.m_ulGroupID);
			t.Body().set_timestamp(this.m_rtLastAck);
			_A.xP.AckChatMessage(g.xm.CMInterface.GetServiceTransport(), t);
		}
	}
	InviteFriend(e, t) {
		let r = c.b.InitFromAccountID(e);
		let n = d.w.Init(_A.eb);
		n.Body().set_chat_group_id(this.m_ulGroupID);
		n.Body().set_steamid(r.ConvertTo64BitString());
		if (t) {
			n.Body().set_chat_id(t.GetRoomID());
		}
		_A.xP
			.InviteFriendToChatRoomGroup(
				this.m_chatStore.CMInterface.GetServiceTransport(),
				n,
			)
			.then((e) => {
				e.GetEResult();
			});
	}
	SaveChatRoomGroup(e) {
		let t = d.w.Init(_A.Nc);
		t.Body().set_chat_group_id(this.m_ulGroupID);
		t.Body().set_name(e);
		return _A.xP
			.SaveChatRoomGroup(this.m_chatStore.CMInterface.GetServiceTransport(), t)
			.then((e) => {
				let t = e.GetEResult();
				if (t != 1) {
					throw t;
				}
			});
	}
	RenameChatRoomGroup(e) {
		if (!e) {
			return Promise.resolve(2);
		}
		let t = this.m_strName;
		this.m_strName = e;
		let r = d.w.Init(_A.yw);
		r.Body().set_chat_group_id(this.m_ulGroupID);
		r.Body().set_name(e);
		return _A.xP
			.RenameChatRoomGroup(
				this.m_chatStore.CMInterface.GetServiceTransport(),
				r,
			)
			.then((e) => {
				if (e.GetEResult() != 1) {
					this.m_strName = t;
				}
				return e.GetEResult();
			});
	}
	SetChatRoomGroupTagline(e) {
		let t = this.m_strTagLine;
		if (e.length > 255) {
			e = e.substring(0, 255);
		}
		if (e == this.m_strTagLine) {
			return Promise.resolve();
		}
		this.m_strTagLine = e;
		let r = d.w.Init(_A.GQ);
		r.Body().set_chat_group_id(this.m_ulGroupID);
		r.Body().set_tagline(e);
		return _A.xP
			.SetChatRoomGroupTagline(
				this.m_chatStore.CMInterface.GetServiceTransport(),
				r,
			)
			.then((e) => {
				if (e.GetEResult() != 1) {
					this.m_strTagLine = t;
				}
			});
	}
	async SetChatRoomGroupWatchingBroadcast(e, t) {
		if (e == this.m_unWatchingBroadcastAccountID && !t) {
			return Promise.resolve();
		}
		let r = d.w.Init(_A.O1);
		r.Body().set_chat_group_id(this.m_ulGroupID);
		r.Body().set_watching_broadcast_accountid(e);
		if (t) {
			r.Body().set_watching_broadcast_channel_id(t);
		}
		const n = (
			await _A.xP.SetChatRoomGroupWatchingBroadcast(
				this.m_chatStore.CMInterface.GetServiceTransport(),
				r,
			)
		).GetEResult();
		if (n !== 1) {
			throw n;
		}
		this.m_unWatchingBroadcastAccountID = e;
		this.m_strWatchingBroadcastChannelID = t;
	}
	SetChatRoomGroupAvatar(e) {
		if (e == this.m_strAvatarSHA) {
			return Promise.resolve();
		}
		let t = d.w.Init(_A.mV);
		t.Body().set_chat_group_id(this.m_ulGroupID);
		t.Body().set_avatar_sha(w_2(e));
		return _A.xP
			.SetChatRoomGroupAvatar(
				this.m_chatStore.CMInterface.GetServiceTransport(),
				t,
			)
			.then((t) => {
				let r = t.GetEResult();
				if (r != 1) {
					throw r;
				}
				this.m_strAvatarSHA = e;
			});
	}
	BCanInvite() {
		return this.BCanIPerformAction(4);
	}
	BCanBan() {
		return this.BCanIPerformAction(3);
	}
	BCanKick() {
		return this.BCanIPerformAction(2);
	}
	BCanAdminChannel() {
		return this.BCanIPerformAction(1);
	}
	BCanAdminGroup() {
		return this.BCanIPerformAction(5);
	}
	BCanChat() {
		return this.BCanIPerformAction(6);
	}
	BCanEditRoles() {
		return !this.BIsClanChatRoom() && this.BCanIPerformAction(9);
	}
	get members_to_highlight_name() {
		return this.InternalGetMembersToHighlight(3, true);
	}
	get members_to_highlight() {
		return this.InternalGetMembersToHighlight(4, false);
	}
	InternalGetMembersToHighlight(e, t) {
		const r = !t;
		const n = !!this.m_rtTimeJoined;
		let i = this.m_bFullStateLoaded
			? this.m_groupMembers.unfiltered_count
			: this.m_cMemberSummaryCount;
		const a = i > e ? e - 1 : e;
		let s = g.xm.FriendStore;
		let o = s.self;
		let l = [];
		let c = s.GetPlayer(this.GetOwnerAccountID());
		if (c && c.accountid != o.accountid) {
			l.push(c);
		}
		if (this.m_rgGroupMembersSummary) {
			for (let e of this.m_rgGroupMembersSummary) {
				if (e == o.accountid || this.BIsAccountIDOwner(e)) {
					continue;
				}
				let r = s.GetFriendIfCached(e);
				if (
					r &&
					(t || r.persona.BHasAvatarSet()) &&
					(l.push(r), l.length >= a)
				) {
					break;
				}
			}
			if (r && l.length < a) {
				for (let e of this.m_rgGroupMembersSummary) {
					if (e == o.accountid || this.BIsAccountIDOwner(e)) {
						continue;
					}
					let r = s.GetPlayer(e);
					if (
						r &&
						!r.is_friend &&
						(t || r.persona.BHasAvatarSet()) &&
						(l.push(r), l.length >= a)
					) {
						break;
					}
				}
			}
		}
		if (n && l.length < a) {
			l.push(o);
		}
		return {
			members: l,
			remaining_count: i - l.length,
		};
	}
	SetUserBanState(e, t) {
		let r = c.b.InitFromAccountID(e).ConvertTo64BitString();
		let n = d.w.Init(_A.xZ);
		n.Body().set_chat_group_id(this.m_ulGroupID);
		n.Body().set_steamid(r);
		n.Body().set_ban_state(t);
		return _A.xP
			.SetUserBanState(this.m_chatStore.CMInterface.GetServiceTransport(), n)
			.then((e) => {
				let t = e.GetEResult();
				if (t != 1 && t != 29) {
					w_2(false, `Failed to change ban state ${t}`);
					throw t;
				}
			});
	}
	MuteUser(e, t) {
		let r = c.b.InitFromAccountID(e).ConvertTo64BitString();
		let n = d.w.Init(_A.qw);
		n.Body().set_chat_group_id(this.m_ulGroupID);
		n.Body().set_steamid(r);
		n.Body().set_expiration(t);
		return _A.xP
			.MuteUserInGroup(this.m_chatStore.CMInterface.GetServiceTransport(), n)
			.then((e) => {
				let t = e.GetEResult();
				if (t != 1) {
					w_2(false, `Failed to change muteexpiration ${t}`);
					throw t;
				}
			});
	}
	KickUser(e, t) {
		let r = c.b.InitFromAccountID(e).ConvertTo64BitString();
		let n = d.w.Init(_A.fC);
		n.Body().set_chat_group_id(this.m_ulGroupID);
		n.Body().set_steamid(r);
		n.Body().set_expiration(t);
		return _A.xP
			.KickUserFromGroup(this.m_chatStore.CMInterface.GetServiceTransport(), n)
			.then((e) => {
				let t = e.GetEResult();
				if (t != 1) {
					this.LOG(`Kick returned ${t}`);
					throw t;
				}
			});
	}
	RevokeInvite(e) {
		let t = c.b.InitFromAccountID(e).ConvertTo64BitString();
		let r = d.w.Init(_A.HR);
		r.Body().set_chat_group_id(this.m_ulGroupID);
		r.Body().set_steamid(t);
		return _A.xP
			.RevokeInviteToGroup(
				this.m_chatStore.CMInterface.GetServiceTransport(),
				r,
			)
			.then((e) => {
				let t = e.GetEResult();
				if (t != 1) {
					this.LOG(`RevokeInvite returned ${t}`);
					throw t;
				}
			});
	}
	CreateChatRoom(e, t) {
		let r = d.w.Init(_A.N5);
		r.Body().set_chat_group_id(this.m_ulGroupID);
		r.Body().set_name(e);
		r.Body().set_allow_voice(t);
		return _A.xP
			.CreateChatRoom(this.m_chatStore.CMInterface.GetServiceTransport(), r)
			.then((e) => {
				let t = e.Body().chat_room().chat_id();
				if (e.GetEResult() != 1 || t == "" || t == "" || t == "0") {
					w_2(false, "Failed to create chat room");
					throw new Error("Failed to create chat room");
				}
				return this.AddCreatedRoom(t, e.Body().chat_room());
			});
	}
	CreateAndJoinTempVoiceRoom() {
		this.CreateChatRoom("", true)
			.then((e) => {
				e.StartVoiceChat();
			})
			.catch(() => {});
	}
	AddCreatedRoom(e, t) {
		let r = this.m_mapRooms.get(e);
		if (!r) {
			r = new l.d(this.m_chatStore, this, e, false);
			this.m_mapRooms.set(e, r);
		}
		r.UpdateChatState(t);
		return r;
	}
	RenameRoom(e, t) {
		if (e == this.m_ulDefaultChatID) {
			return;
		}
		if (!t) {
			return;
		}
		let r = this.GetChatRoom(e);
		if (!r) {
			return;
		}
		let n = r.name;
		r.ChangeNameWhileWaitingForRenameRequest(t);
		let i = d.w.Init(_A.zF);
		i.Body().set_chat_group_id(this.m_ulGroupID);
		i.Body().set_chat_id(e);
		i.Body().set_name(t);
		_A.xP
			.RenameChatRoom(this.m_chatStore.CMInterface.GetServiceTransport(), i)
			.then((e) => {
				if (e.GetEResult() != 1) {
					w_2(false, "Failed to change room name");
					r.ChangeNameWhileWaitingForRenameRequest(n);
				}
			});
	}
	ReorderRoom(e, t) {
		let r = d.w.Init(_A.wR);
		r.Body().set_chat_group_id(this.m_ulGroupID);
		r.Body().set_chat_id(e);
		r.Body().set_move_after_chat_id(t);
		_A.xP
			.ReorderChatRoom(this.m_chatStore.CMInterface.GetServiceTransport(), r)
			.then((e) => {
				if (e.GetEResult() != 1) {
					w_2(false, "Failed to reorder room");
				}
			});
	}
	DeleteChatRoom(e) {
		let t = d.w.Init(_A.WS);
		t.Body().set_chat_group_id(this.m_ulGroupID);
		t.Body().set_chat_id(e);
		_A.xP
			.DeleteChatRoom(this.m_chatStore.CMInterface.GetServiceTransport(), t)
			.then((t) => {
				if (t.GetEResult() == 1) {
					this.RemoveRoom(e);
				} else {
					w_2(false, "Failed to delete chat room");
				}
			});
	}
	RemoveRoom(e) {
		this.m_mapRooms.delete(e);
	}
	LeaveChatRoomGroup(e) {
		this.m_chatStore.LeaveChatRoomGroup(e, this.m_ulGroupID).catch(() => {});
	}
	GetInviteLinksForGroup() {
		let e = d.w.Init(_A.IG);
		e.Body().set_chat_group_id(this.GetGroupID());
		return _A.xP
			.GetInviteLinksForGroup(
				g.xm.ChatStore.CMInterface.GetServiceTransport(),
				e,
			)
			.then((e) => {
				let t;
				t =
					e.GetEResult() != 1
						? {
								loadingState: "failed",
								rgInviteLinks: null,
							}
						: {
								loadingState: "loaded",
								rgInviteLinks: e.Body().invite_links(),
							};
				return t;
			});
	}
	GetInvitedUsersForGroup() {
		let e = d.w.Init(_A.zw);
		e.Body().set_chat_group_id(this.GetGroupID());
		return _A.xP
			.GetInviteList(g.xm.ChatStore.CMInterface.GetServiceTransport(), e)
			.then((e) => {
				let t;
				t =
					e.GetEResult() != 1
						? {
								loadingState: "failed",
								rgInvitedUsers: null,
							}
						: {
								loadingState: "loaded",
								rgInvitedUsers: e.Body().invites(),
							};
				return t;
			});
	}
	GetBanList() {
		let e = d.w.Init(_A.ro);
		e.Body().set_chat_group_id(this.GetGroupID());
		return _A.xP
			.GetBanList(g.xm.ChatStore.CMInterface.GetServiceTransport(), e)
			.then((e) => {
				let t = new L2();
				if (e.GetEResult() == 15) {
					t.loadingState = "denied";
				} else if (e.GetEResult() == 1) {
					t.rgBans = e.Body().bans();
					t.loadingState = "loaded";
				} else {
					t.loadingState = "failed";
				}
				return t;
			});
	}
	GetRoleName(e) {
		let t = this.m_roles.findIndex((t) => t.role_id == e);
		if (t >= 0) {
			return this.m_roles[t].name;
		}
	}
	CreateRole(e) {
		if ((e = e.trim()).length == 0) {
			return Promise.resolve();
		}
		let t = d.w.Init(_A.uD);
		t.Body().set_chat_group_id(this.GetGroupID());
		t.Body().set_name(e);
		this.m_roles.push({
			role_id: "-1",
			name: e,
			ordinal: Number.MAX_VALUE,
		});
		return _A.xP
			.CreateRole(g.xm.ChatStore.CMInterface.GetServiceTransport(), t)
			.then((t) => {
				let r = t.GetEResult();
				if (r != 1) {
					let e = this.m_roles.findIndex((e) => e.role_id == "-1");
					if (e >= 0) {
						this.m_roles.splice(e, 1);
					}
					throw new Error(`unable to create role, error ${r}`);
				}
				this.LOG(`created role ${e}`);
			});
	}
	DeleteRole(e) {
		let t = d.w.Init(_A.lG);
		t.Body().set_chat_group_id(this.GetGroupID());
		t.Body().set_role_id(e);
		return _A.xP
			.DeleteRole(g.xm.ChatStore.CMInterface.GetServiceTransport(), t)
			.then((t) => {
				if (t.GetEResult() != 1) {
					throw new Error(`unable to delete role ${e}`);
				}
				let r = this.m_roles.findIndex((t) => t.role_id == e);
				if (r >= 0) {
					this.m_roles.splice(r, 1);
				}
			});
	}
	RenameRole(e, t) {
		if ((t = t.trim()).length == 0) {
			return Promise.resolve();
		}
		let r = d.w.Init(_A.Ud);
		r.Body().set_chat_group_id(this.GetGroupID());
		r.Body().set_role_id(e);
		r.Body().set_name(t);
		return _A.xP
			.RenameRole(g.xm.ChatStore.CMInterface.GetServiceTransport(), r)
			.then((r) => {
				let n = r.GetEResult();
				if (n != 1) {
					throw new Error(`unable to rename role ${e} ${n}`);
				}
				let i = this.m_roles.findIndex((t) => t.role_id == e);
				if (i >= 0) {
					this.m_roles[i].name = t;
				}
			});
	}
	ReorderRole(e, t) {
		let r = d.w.Init(_A.Tv);
		r.Body().set_chat_group_id(this.GetGroupID());
		r.Body().set_role_id(e);
		r.Body().set_ordinal(t);
		return _A.xP
			.ReorderRole(g.xm.ChatStore.CMInterface.GetServiceTransport(), r)
			.then((e) => e.GetEResult() == 1);
	}
	SetRoleAction(e, t, r) {
		let n = this.GetRoleActions(e);
		if (n) {
			if (r == n.BCanPerformAction(t)) {
				return;
			}
			let i = n.BCanPerformAction(t);
			n.SetCanPerformAction(t, r);
			let a = d.w.Init(_A.Lp);
			a.Body().set_chat_group_id(this.GetGroupID());
			a.Body().set_role_id(e);
			a.Body().set_actions(n.roleActions);
			return _A.xP
				.ReplaceRoleActions(g.xm.ChatStore.CMInterface.GetServiceTransport(), a)
				.then((e) => {
					if (e.GetEResult() != 1) {
						n.SetCanPerformAction(t, i);
						this.LOG(`SetRoleAction error, restoring ${t} to ${i}`);
					}
				});
		}
	}
	DeleteInviteLink(e, t) {
		let r = d.w.Init(_A.mG);
		r.Body().set_chat_group_id(this.GetGroupID());
		r.Body().set_invite_code(e);
		if (t && t.loadingState == "loaded") {
			let r = t.rgInviteLinks.findIndex((t) => t.invite_code() == e);
			if (r >= 0) {
				t.rgInviteLinks.splice(r, 1);
				this.LOG(`removed link ${t.rgInviteLinks}`);
			}
		}
		return _A.xP
			.DeleteInviteLink(g.xm.ChatStore.CMInterface.GetServiceTransport(), r)
			.then((e) => e.GetEResult() == 1);
	}
	SetNotificationPreferences(e, t, r) {
		let n = d.w.Init(_A.gD);
		n.Body().set_chat_group_id(this.m_ulGroupID);
		if (e !== undefined) {
			this.m_eUserDesktopNotificationLevel = e;
			n.Body().chat_group_preferences().set_desktop_notification_level(e);
			if (e == 4 && this.m_bUnreadIndicatorMuted) {
				r = false;
			}
		}
		if (t !== undefined) {
			this.m_eUserMobileNotificationLevel = t;
			n.Body().chat_group_preferences().set_mobile_notification_level(t);
		}
		if (r !== undefined) {
			this.m_bUnreadIndicatorMuted = r;
			n.Body().chat_group_preferences().set_unread_indicator_muted(r);
		}
		return _A.xP
			.SetUserChatGroupPreferences(g.xm.CMInterface.GetServiceTransport(), n)
			.then((e) => e.GetEResult() == 1);
	}
	AddMetaMentionsToResults(e, t) {
		let r = this.BCanIMentionAll()
			? ""
			: (0, Localize)("#ChatMentionSuggest_NoPermission");
		if ("online".startsWith(e)) {
			t.unshift({
				friend: null,
				iMatchOffset: 0,
				bNicknameMatch: false,
				meta_mention: "online",
				strNotSelectable: r,
			});
		}
		if ("all".startsWith(e)) {
			t.unshift({
				friend: null,
				iMatchOffset: 0,
				bNicknameMatch: false,
				meta_mention: "all",
				strNotSelectable: r,
			});
		}
	}
	SearchMembers(e, t = 5, r = false) {
		let n = [];
		let i = e.toLocaleLowerCase();
		let a = this.m_chatStore.CMInterface.steamid.GetAccountID();
		let s = [];
		let o = [];
		for (let e of this.memberList.member_list) {
			if (e.accountid != a) {
				if (i.length) {
					let t = e.MatchSearchString(i);
					let n = t.iOffset === 0;
					if (t.match == 0 || (r && !n)) {
						continue;
					}
					let a = {
						friend: e,
						iMatchOffset: t.iOffset,
						bNicknameMatch: t.match == 2,
					};
					if (n) {
						if (t.bFullMatch) {
							s.unshift(a);
						} else {
							s.push(a);
						}
					} else {
						o.push(a);
					}
				} else {
					n.push({
						friend: e,
						iMatchOffset: 0,
						bNicknameMatch: false,
					});
				}
				if (n.length + s.length >= t) {
					break;
				}
			}
		}
		for (let e = 0; e < s.length && n.length < t; e++) {
			n.push(s[e]);
		}
		for (let e = 0; e < o.length && n.length < t; e++) {
			n.push(o[e]);
		}
		return n;
	}
	BNameMatchesSearch(e) {
		return this.name.toLocaleLowerCase().includes(e);
	}
}
Cg([m.sH], a$.prototype, "m_rtTimeJoined", undefined);
Cg([m.sH], a$.prototype, "m_rtLastAck", undefined);
Cg([m.sH], a$.prototype, "m_unOwnerAccountID", undefined);
Cg([m.sH], a$.prototype, "m_bFullStateLoaded", undefined);
Cg([m.sH], a$.prototype, "m_strName", undefined);
Cg([m.sH], a$.prototype, "m_strTagLine", undefined);
Cg([m.sH], a$.prototype, "m_strAvatarSHA", undefined);
Cg([m.sH], a$.prototype, "m_strAvatarUGCURL", undefined);
Cg([m.sH], a$.prototype, "m_unWatchingBroadcastAccountID", undefined);
Cg([m.sH], a$.prototype, "m_strWatchingBroadcastChannelID", undefined);
Cg([m.sH], a$.prototype, "m_rgPartyBeacons", undefined);
Cg([m.sH], a$.prototype, "m_eUserDesktopNotificationLevel", undefined);
Cg([m.sH], a$.prototype, "m_eUserMobileNotificationLevel", undefined);
Cg([m.sH], a$.prototype, "m_bUnreadIndicatorMuted", undefined);
Cg([m.sH], a$.prototype, "m_roles", undefined);
Cg([m.sH], a$.prototype, "m_rgGroupMembersSummary", undefined);
Cg([m.sH], a$.prototype, "m_cMemberSummaryCount", undefined);
Cg([m.sH], a$.prototype, "m_bMemberListVirtualized", undefined);
Cg([m.EW], a$.prototype, "name", null);
Cg([m.EW], a$.prototype, "hasAvatarSHA", null);
Cg([m.EW], a$.prototype, "hasIcon", null);
Cg([m.EW], a$.prototype, "avatar_url_small", null);
Cg([m.EW], a$.prototype, "avatar_url_medium", null);
Cg([m.EW], a$.prototype, "avatar_url_full", null);
Cg([m.EW], a$.prototype, "chatRoomList", null);
Cg([m.EW], a$.prototype, "textRoomList", null);
Cg([m.EW], a$.prototype, "voiceRoomList", null);
Cg([m.EW], a$.prototype, "hasVoiceRoom", null);
Cg([m.EW], a$.prototype, "hasUnreadChatMessage", null);
Cg([m.EW], a$.prototype, "HasUnreadMention", null);
Cg([m.EW], a$.prototype, "time_last_activity", null);
Cg([m.EW], a$.prototype, "room_with_last_message", null);
Cg([m.XI], a$.prototype, "ChangeMemberRank", null);
Cg([m.XI], a$.prototype, "ChangeMemberRoles", null);
Cg([m.XI], a$.prototype, "SetInitialGroupState", null);
Cg([m.XI], a$.prototype, "UpdateGroupStateFromSummary", null);
Cg([m.XI], a$.prototype, "SetNameCheckingForAppLocalization", null);
Cg([m.XI], a$.prototype, "UpdateGroupState", null);
Cg([m.XI], a$.prototype, "UnloadActiveGroupState", null);
Cg([m.XI], a$.prototype, "UnloadGroupState", null);
Cg([m.XI], a$.prototype, "UnloadAndResetGroupState", null);
Cg([m.XI], a$.prototype, "UpdateChatRoomState", null);
Cg([m.XI], a$.prototype, "UpdateUserState", null);
Cg([m.XI], a$.prototype, "UpdateChatRoomHeaderState", null);
Cg([m.XI], a$.prototype, "OnActivate", null);
Cg([m.EW], a$.prototype, "members_to_highlight_name", null);
Cg([m.EW], a$.prototype, "members_to_highlight", null);
Cg([m.XI], a$.prototype, "AddCreatedRoom", null);
Cg([m.XI], a$.prototype, "RemoveRoom", null);
export class $C extends y.Q {
	LOG = new s.wd("ChatRoomGroup", () => this.GetUniqueID()).Debug;
	m_group;
	m_tabset;
	m_mapChatViews = new Map();
	m_disposeActiveVoice;
	m_disposeChatRooms;
	m_selectedChatView = undefined;
	m_popoverChatView = undefined;
	m_bShowSettingsDialog = false;
	m_ulRenameChatRoomID = undefined;
	m_bShowBroadcast = false;
	m_bShowVerticalBroadcastChat = undefined;
	m_strLocalBroadcastId = undefined;
	m_bChatHidden = false;
	m_bShowGlobalChat = false;
	m_bMemberSearchActive = false;
	m_strMemberSearchString = "";
	m_rgSearchResults = [];
	m_bSearchError = false;
	m_bMemberListCollapsedOverride = undefined;
	m_bChannelListCollapsedOverride = undefined;
	m_VirtualizedMemberList;
	constructor(e, t) {
		super();
		Gn(this);
		this.m_tabset = e;
		this.m_group = t;
		if (this.m_group.BIsValid()) {
			this.SelectChat(this.m_group.GetDefaultChatID());
		}
		this.m_disposeChatRooms = fm(() => {
			let e = this.m_group.chatRoomList;
			if (
				this.m_selectedChatView &&
				e.length &&
				!e.includes(this.m_selectedChatView.chat)
			) {
				this.SelectChat(this.m_group.GetDefaultChatID());
			}
		});
	}
	get search_results() {
		return this.m_rgSearchResults;
	}
	get has_search_error() {
		return this.m_bSearchError;
	}
	GetGroup() {
		return this.m_group;
	}
	GetSelectedChatView() {
		return this.m_selectedChatView;
	}
	GetActiveChatView() {
		return this.GetPopoverChatView() || this.GetSelectedChatView();
	}
	GetPopoverChatView() {
		return this.m_popoverChatView;
	}
	get isBroadcastShown() {
		return this.m_bShowBroadcast;
	}
	ShowBroadcast() {
		this.m_bShowBroadcast = true;
		this.SetLayoutForBroadcast();
	}
	SetLayoutForBroadcast() {
		this.SetChannelListCollapsed(true, false);
		this.SetMemberListCollapsed(true, false);
		SetBackgroundTimeout(() => {
			if (this.GetActiveChatView()) {
				this.GetActiveChatView().OnChatFrameChanged();
			}
		}, 30);
	}
	HideBroadcast() {
		this.m_bShowBroadcast = false;
		this.SetLayoutForHiddenBroadcast();
	}
	SetLayoutForHiddenBroadcast() {
		g.xm.UIStore.SetTheaterMode(false);
		SetBackgroundTimeout(() => {
			if (this.GetActiveChatView()) {
				this.GetActiveChatView().OnChatFrameChanged();
			}
		}, 30);
	}
	SetVerticalBroadcastChat(e) {
		this.m_bShowVerticalBroadcastChat = e;
	}
	ToggleTheaterModeBroadcastChat() {
		g.xm.UIStore.SetTheaterMode(!g.xm.UIStore.GetTheaterMode());
	}
	SetChatHidden(e) {
		this.m_bChatHidden = e;
	}
	SetGlobalBroadcastChatShown(e) {
		this.m_bShowGlobalChat = e;
		if (this.GetActiveChatView()) {
			this.GetActiveChatView().OnChatFrameChanged();
		}
	}
	SetLocalBroadcastId(e) {
		this.m_strLocalBroadcastId = e;
	}
	SetMemberListCollapsed(e, t = true) {
		if (t) {
			this.m_bMemberListCollapsedOverride = undefined;
			const t = this.GetGroup();
			g.xm.ChatStore.ChatRoomGroupDisplayPrefs.SetChatRoomDisplayPref(
				t.GetGroupID(),
				"bMemberListCollapsed",
				e,
			);
		} else {
			this.m_bMemberListCollapsedOverride = e;
		}
	}
	SetChannelListCollapsed(e, t = true) {
		if (t) {
			this.m_bChannelListCollapsedOverride = undefined;
			const t = this.GetGroup();
			g.xm.ChatStore.ChatRoomGroupDisplayPrefs.SetChatRoomDisplayPref(
				t.GetGroupID(),
				"bChannelListCollapsed",
				e,
			);
		} else {
			this.m_bChannelListCollapsedOverride = e;
		}
	}
	ClosePopoverChat() {
		if (this.m_popoverChatView) {
			this.m_popoverChatView.OnViewClosed();
			if (this.m_disposeActiveVoice) {
				this.m_disposeActiveVoice();
			}
			this.m_popoverChatView = null;
		}
	}
	SelectChat(e) {
		let t = this.m_group.GetChatRoom(e);
		if (t) {
			if (t.GetVoiceAllowed() && t != this.m_group.GetDefaultChatRoom()) {
				if (this.m_popoverChatView && this.m_popoverChatView.chat == t) {
					return;
				}
			} else {
				this.ClosePopoverChat();
				if (this.m_selectedChatView && this.m_selectedChatView.chat == t) {
					return;
				}
			}
			if (
				t.GetVoiceAllowed() &&
				this.m_group.GetDefaultChatRoom() != t &&
				!g.xm.IsGamepadUIActive()
			) {
				this.ClosePopoverChat();
				this.m_popoverChatView = this.GetChatViewForRoom(t);
				if (this.m_disposeActiveVoice) {
					this.m_disposeActiveVoice();
				}
				this.m_disposeActiveVoice = z7(
					() => !t.BVoiceActive(),
					() => {
						if (this.m_popoverChatView && this.m_popoverChatView.chat == t) {
							this.ClosePopoverChat();
						}
					},
				);
			} else {
				if (this.m_selectedChatView) {
					this.m_selectedChatView.OnViewClosed();
				}
				this.m_selectedChatView = this.GetChatViewForRoom(t);
			}
			if (this.m_tabset.activeTab == this && this.m_tabset.is_popup_focused) {
				this.OnTabActivate();
			}
		}
	}
	SelectNextChannel() {
		const e = this.GetSelectedChannelIndex();
		const t = this.GetGroup().textRoomList;
		const r = e >= t.length - 1 ? 0 : e + 1;
		this.SelectChat(t[r].GetRoomID());
	}
	SelectPreviousChannel() {
		const e = this.GetSelectedChannelIndex();
		const t = this.GetGroup().textRoomList;
		const r = e <= 0 ? t.length - 1 : e - 1;
		this.SelectChat(t[r].GetRoomID());
	}
	GetSelectedChannelIndex() {
		const e = this.GetSelectedChatView().chat.GetRoomID();
		return this.GetGroup().textRoomList.findIndex((t) => t.GetRoomID() === e);
	}
	GetChatViewForRoom(e) {
		let t = e.GetRoomID();
		let r = this.m_mapChatViews.get(t);
		if (r) {
			this.LOG(`reusing chat for ${t}`);
		} else {
			r = new o.CF(this.m_tabset, e, this);
		}
		return r;
	}
	StartRoomRename(e) {
		this.m_ulRenameChatRoomID = e;
	}
	EndRoomRename() {
		this.m_ulRenameChatRoomID = "";
	}
	IsRoomRenameActive(e) {
		return this.m_ulRenameChatRoomID != "" && this.m_ulRenameChatRoomID == e;
	}
	GetRenameRoomID() {
		return this.m_ulRenameChatRoomID;
	}
	OnTabClosed() {
		if (this.m_disposeActiveVoice) {
			this.m_disposeActiveVoice();
		}
		if (this.m_disposeChatRooms) {
			this.m_disposeChatRooms();
		}
		if (this.m_VirtualizedMemberList) {
			g.xm.ChatStore.UnregisterVirtualizedMemberListView(
				this.m_VirtualizedMemberList,
			);
		}
		this.ClosePopoverChat();
		this.GetSelectedChatView().OnViewClosed();
		g.xm.ChatStore.DecRefActiveChatRoomGroup(this.GetGroup().GetGroupID());
	}
	IsVoiceActive() {
		return (
			g.xm.ChatStore.VoiceChat.GetActiveChatRoomGroupID() ==
			this.m_group.GetGroupID()
		);
	}
	IsTabForChat(e) {
		if (!(e instanceof l.d)) {
			return false;
		}
		let t = e;
		return !!this.m_group.GetChatRoom(t.GetRoomID());
	}
	GetUnreadMessageCount() {
		if (this.m_group.hasUnreadChatMessage) {
			return 1;
		} else {
			return 0;
		}
	}
	UpdateMemberSearch(e) {
		if (!this.m_bMemberSearchActive || this.m_strMemberSearchString != e) {
			this.m_bMemberSearchActive = true;
			this.m_strMemberSearchString = e || "";
			if (e) {
				this.SearchMembers(e, 200).then(
					(e) => {
						this.m_rgSearchResults = e;
						this.m_bSearchError = false;
					},
					(e) => {
						console.warn(`Failed to filter members: ${e}`);
						this.m_bSearchError = true;
					},
				);
			} else {
				this.m_rgSearchResults = undefined;
			}
		}
	}
	ClearMemberSearch() {
		this.m_bMemberSearchActive = false;
		this.m_strMemberSearchString = "";
		this.m_rgSearchResults = undefined;
	}
	IsMemberSearchActive() {
		return this.m_bMemberSearchActive;
	}
	GetMemberSearch() {
		return this.m_strMemberSearchString;
	}
	get normalizedMemberSearch() {
		return this.m_strMemberSearchString.trim().toLocaleLowerCase();
	}
	get isMemberListExpanded() {
		if (this.m_bMemberSearchActive) {
			return true;
		}
		if (this.m_bMemberListCollapsedOverride === undefined) {
			const e = this.GetGroup();
			return !g.xm.ChatStore.ChatRoomGroupDisplayPrefs.GetChatRoomDisplayPref(
				e.GetGroupID(),
				"bMemberListCollapsed",
			);
		}
		return !this.m_bMemberListCollapsedOverride;
	}
	get isChannelListCollapsed() {
		if (this.m_bChannelListCollapsedOverride === undefined) {
			const e = this.GetGroup();
			return g.xm.ChatStore.ChatRoomGroupDisplayPrefs.GetChatRoomDisplayPref(
				e.GetGroupID(),
				"bChannelListCollapsed",
			);
		}
		return this.m_bChannelListCollapsedOverride;
	}
	GetTabName() {
		return this.m_group.name;
	}
	GetUniqueID() {
		return this.m_group.unique_id;
	}
	OnTabFocus() {
		let e = this.GetActiveChatView();
		if (e) {
			e.OnFocus();
		}
	}
	InternalOnTabActivate() {
		let e = this.GetActiveChatView();
		if (e) {
			e.OnActivate();
		}
	}
	OnTabDeactivate() {
		let e = this.GetActiveChatView();
		if (e) {
			e.OnDeactivate();
		}
	}
	IsChatRoom() {
		return true;
	}
	GetChatView() {
		return this.GetActiveChatView();
	}
	GetMemberCountTotal() {
		if (this.m_group.BIsMemberListVirtualized()) {
			return this.GetVirtualizedMemberListView().GetMemberCountTotal();
		} else {
			return this.m_group.memberCountTotal;
		}
	}
	GetMemberCountOnline() {
		if (this.m_group.BIsMemberListVirtualized()) {
			return this.GetVirtualizedMemberListView().GetMemberCountOnline();
		} else {
			return this.m_group.memberCountOnline;
		}
	}
	GetMemberCountInGame() {
		if (this.m_group.BIsMemberListVirtualized()) {
			return this.GetVirtualizedMemberListView().GetMemberCountInGame();
		} else {
			return this.m_group.memberCountInGame;
		}
	}
	GetVirtualizedMemberListView() {
		if (!this.m_VirtualizedMemberList) {
			this.m_VirtualizedMemberList = new f(this.m_group.GetGroupID());
			g.xm.ChatStore.RegisterVirtualizedMemberListView(
				this.m_VirtualizedMemberList,
			);
		}
		return this.m_VirtualizedMemberList;
	}
	async SearchMembers(e, t) {
		if (this.m_group.BIsMemberListVirtualized()) {
			return this.GetVirtualizedMemberListView().PerformSearch(
				this.m_group,
				"1",
				e,
			);
		} else {
			return this.m_group.SearchMembers(e, t);
		}
	}
	BIsMemberNameAmbiguous(e) {
		if (this.m_group.BIsMemberListVirtualized()) {
			return true;
		}
		return this.m_group.SearchMembers(e, 2, true).length >= 2;
	}
	ProcessMentions(e) {
		e.replace(/＠/g, "@");
		let t = e.indexOf("@");
		while (t !== -1) {
			let r;
			let n;
			let i;
			let a = e.indexOf("@", t + 1);
			let s = e.indexOf(" ", t + 1);
			let o = Math.min(a === -1 ? e.length : a, s === -1 ? e.length : s);
			let l = e.substr(t + 1, o - t - 1).toLocaleLowerCase();
			i = this.m_group.BIsMemberListVirtualized()
				? this.GetVirtualizedMemberListView().GetAllKnownPersonas()
				: this.m_group.memberList.member_list_unsorted;
			for (let a of i) {
				let i = js(a.player_name_normalized);
				let s = `${i}#${a.accountid.toString(36)}`;
				if (s.startsWith(l)) {
					let o;
					let c = s.length === l.length;
					let m = c || i.length === l.length;
					if (m || c) {
						o = l.length;
					}
					if (
						!c &&
						e.length - t - 1 >= s.length &&
						e.substr(t + 1, s.length).toLocaleLowerCase() === s
					) {
						m = true;
						c = true;
						o = s.length;
					}
					if (
						!m &&
						e.length - t - 1 >= i.length &&
						e.substr(t + 1, i.length).toLocaleLowerCase() === i
					) {
						o = i.length;
					}
					if (o && (n === undefined || o >= n)) {
						r = a;
						n = o;
					}
				}
			}
			let c;
			let m;
			let u;
			let d = false;
			if (this.m_group.BCanIMentionAll()) {
				d =
					l == "online" ||
					l == "online#0" ||
					l == "online#0" ||
					l == "all" ||
					l == "online#0" ||
					l == "all" ||
					l == "all#0";
			}
			if (d && (n === undefined || n <= l.length)) {
				let e = l;
				if (l.includes("#")) {
					e = l.substr(0, l.indexOf("#"));
				}
				c = e;
				m = e;
				u = l.length;
				if (c == "online") {
					c = "here";
				}
			} else if (r && n !== undefined) {
				c = `${r.accountid}`;
				m = r.persona.m_strPlayerName;
				u = n;
			}
			if (m && u !== undefined) {
				let r = e.substr(0, t);
				let n = e.substr(t + 1 + u);
				let i = `[mention=${c}]@${js(m)}[/mention]`;
				a = (e = r + i + n).indexOf("@", r.length + i.length);
			}
			t = a;
		}
		return e;
	}
}
Cg([m.sH], $C.prototype, "m_selectedChatView", undefined);
Cg([m.sH], $C.prototype, "m_popoverChatView", undefined);
Cg([m.sH], $C.prototype, "m_bShowSettingsDialog", undefined);
Cg([m.sH], $C.prototype, "m_ulRenameChatRoomID", undefined);
Cg([m.sH], $C.prototype, "m_bShowBroadcast", undefined);
Cg([m.sH], $C.prototype, "m_bShowVerticalBroadcastChat", undefined);
Cg([m.sH], $C.prototype, "m_strLocalBroadcastId", undefined);
Cg([m.sH], $C.prototype, "m_bChatHidden", undefined);
Cg([m.sH], $C.prototype, "m_bShowGlobalChat", undefined);
Cg([m.sH], $C.prototype, "m_bMemberSearchActive", undefined);
Cg([m.sH], $C.prototype, "m_strMemberSearchString", undefined);
Cg([m.sH.ref], $C.prototype, "m_rgSearchResults", undefined);
Cg([m.sH], $C.prototype, "m_bSearchError", undefined);
Cg([m.sH], $C.prototype, "m_bMemberListCollapsedOverride", undefined);
Cg([m.sH], $C.prototype, "m_bChannelListCollapsedOverride", undefined);
Cg([m.XI], $C.prototype, "ShowBroadcast", null);
Cg([m.XI.bound], $C.prototype, "HideBroadcast", null);
Cg([m.XI.bound], $C.prototype, "SetVerticalBroadcastChat", null);
Cg([m.XI], $C.prototype, "ToggleTheaterModeBroadcastChat", null);
Cg([m.XI], $C.prototype, "SetChatHidden", null);
Cg([m.XI], $C.prototype, "SetGlobalBroadcastChatShown", null);
Cg([m.XI], $C.prototype, "SetLocalBroadcastId", null);
Cg([m.XI], $C.prototype, "SetMemberListCollapsed", null);
Cg([m.XI], $C.prototype, "SetChannelListCollapsed", null);
Cg([m.XI], $C.prototype, "ClosePopoverChat", null);
Cg([m.XI], $C.prototype, "SelectChat", null);
Cg([m.XI], $C.prototype, "SelectNextChannel", null);
Cg([m.XI], $C.prototype, "SelectPreviousChannel", null);
Cg([m.XI], $C.prototype, "StartRoomRename", null);
Cg([m.XI], $C.prototype, "EndRoomRename", null);
Cg([m.XI], $C.prototype, "OnTabClosed", null);
Cg([m.XI], $C.prototype, "UpdateMemberSearch", null);
Cg([m.XI], $C.prototype, "ClearMemberSearch", null);
Cg([m.EW], $C.prototype, "isMemberListExpanded", null);
Cg([m.EW], $C.prototype, "isChannelListCollapsed", null);
export class L2 {
	constructor() {
		Gn(this);
	}
	loadingState = "pending";
	rgBans = undefined;
}
Cg([m.sH], L2.prototype, "loadingState", undefined);
Cg([m.sH], L2.prototype, "rgBans", undefined);
const E = {
	bMemberListCollapsed: undefined,
	bChannelListCollapsed: undefined,
};
const M = "ChatRoomGroupDisplayPrefs";
export class A {
	constructor() {
		Gn(this);
	}
	m_SettingsStore;
	m_mapDisplayPrefs = m.sH.map();
	Init(e) {
		this.m_SettingsStore = e;
		this.m_SettingsStore.GetObjectFromLocalStorageWhenReady(M).then((e) => {
			this.m_mapDisplayPrefs.clear();
			for (let t in e.chatRoomGroups) {
				const r = e.chatRoomGroups[t];
				if (typeof r == "object") {
					if (
						typeof r.bMemberListCollapsed == "boolean" ||
						typeof r.bChannelListCollapsed == "boolean"
					) {
						this.m_mapDisplayPrefs.set(t, e.chatRoomGroups[t]);
					}
				}
			}
		});
	}
	GetChatRoomDisplayPref(e, t) {
		return (this.m_mapDisplayPrefs.get(e) || E)[t];
	}
	ToggleChatRoomDisplayPref(e, t) {
		let r = this.GetChatRoomDisplayPref(e, t);
		this.SetChatRoomDisplayPref(e, t, !r);
	}
	SetChatRoomDisplayPref(e, t, r) {
		let n = this.m_mapDisplayPrefs.get(e);
		if (!n || n[t] !== r) {
			if (!n) {
				this.m_mapDisplayPrefs.set(e, Object.assign({}, E));
				n = this.m_mapDisplayPrefs.get(e);
			}
			n[t] = r;
			this.WritePrefs();
		}
	}
	WritePrefs() {
		this.m_SettingsStore.StoreObjectInLocalStorage(M, {
			chatRoomGroups: Object.fromEntries(this.m_mapDisplayPrefs),
		});
	}
	FillInChatUsabilityMetrics(e) {
		let t = Array.from(this.m_mapDisplayPrefs.values());
		e.ui_state().set_group_chat_left_col_collapsed(
			CountMatches(t, (e) => e.bChannelListCollapsed),
		);
		e.ui_state().set_group_chat_right_col_collapsed(
			CountMatches(t, (e) => e.bMemberListCollapsed),
		);
	}
}
Cg([m.XI], A.prototype, "SetChatRoomDisplayPref", null);
class R {
	m_mapAccountToExtra = m.sH.map();
	m_bMemberDataVirtualized = false;
	constructor() {
		Gn(this);
	}
	GetCurrentMemberSet() {
		let e = new Set();
		this.m_mapAccountToExtra.forEach((t, r) => {
			e.add(r);
		});
		return e;
	}
	SetMemberDataVirtualized(e) {
		this.m_bMemberDataVirtualized = e;
	}
	get unfiltered_count() {
		return this.m_mapAccountToExtra.size;
	}
	get member_counts() {
		let e = 0;
		let t = 0;
		for (let r of this.member_list_unsorted) {
			if (r.persona.is_online) {
				e++;
				if (r.persona.is_ingame) {
					t++;
				}
			}
		}
		return {
			online: e,
			ingame: t,
		};
	}
	Clear() {
		this.m_mapAccountToExtra.clear();
		this.m_bMemberDataVirtualized = false;
	}
	AddMember(e, t = undefined) {
		if (!this.HasMember(e)) {
			this.m_mapAccountToExtra.set(e, t);
		}
	}
	RemoveMember(e) {
		if (this.HasMember(e)) {
			this.m_mapAccountToExtra.delete(e);
		}
	}
	GetExtra(e) {
		return this.m_mapAccountToExtra.get(e);
	}
	HasMember(e) {
		return this.m_mapAccountToExtra.has(e);
	}
	get member_list() {
		let e = this.member_list_unsorted.slice();
		e.sort(p.$c.DefaultFriendSortComparator);
		return e;
	}
	get member_list_unsorted() {
		w_2(
			!this.m_bMemberDataVirtualized,
			"Shouldn't be accessing member_list when virtualized",
		);
		let e = [];
		if (!this.m_bMemberDataVirtualized) {
			this.m_mapAccountToExtra.forEach((t, r) => {
				e.push(g.xm.FriendStore.GetPlayer(r));
			});
		}
		return e;
	}
}
Cg([m.EW], R.prototype, "unfiltered_count", null);
Cg([m.EW], R.prototype, "member_counts", null);
Cg([m.XI], R.prototype, "Clear", null);
Cg([m.XI], R.prototype, "AddMember", null);
Cg([m.XI], R.prototype, "RemoveMember", null);
Cg([m.EW], R.prototype, "member_list", null);
Cg([m.EW], R.prototype, "member_list_unsorted", null);
