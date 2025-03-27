import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import i from "./44234.js";
import a from "./12176.js";
import s from "./36383.js";
import o, { Hd } from "./50979.js";
import l, { Gn, z7 } from "./89193.js";
import m from "./83599.js";
import u from "./16761.js";
import "./80663.js";
import _d from "./46970.js";
import A from "./95773.js";
import p from "./52451.js";
import g, { $T } from "./89459.js";
import { u as u_1 } from "./24761.js";
import { s as s_1 } from "./81255.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import f from "./60857.js";
import { Dp } from "./736.js";
import y from "./79769.js";
export class d extends u.o {
	LOG = new m.wd("ChatRoom", () => this.unique_id).Debug;
	m_group;
	m_ulGroupID;
	m_ulChatID;
	m_bVoiceAllowed;
	m_bIsDefaultForGroup;
	m_strName = undefined;
	m_unSortOrder = 0;
	m_lastChatLink = null;
	m_rtLastMention = undefined;
	m_groupVoiceActiveMembers = new _d.uZ(
		Localize("#Chat_MemberGroup_VoiceChatting"),
	);
	m_eDesktopNotificationLevel = 0;
	m_eMobileNotificationLevel = 0;
	m_bUnreadIndicatorMuted = false;
	m_mapMessageReactionReactors = l.sH.map();
	m_NewChatMsgAddedCallbacks = new y.lu();
	constructor(e, t, r, n) {
		super(e.FriendStore, e, e.CMInterface);
		Gn(this);
		this.m_group = t;
		this.m_ulGroupID = t.GetGroupID();
		this.m_ulChatID = r;
		this.m_bIsDefaultForGroup = n;
		this.m_groupVoiceActiveMembers.SetOnHeaderClick(this.StartVoiceChat);
		this.m_MessageSendQueue = new f.G(`${this.m_ulGroupID}.${this.m_ulChatID}`);
		this.m_MessageSendQueue
			.InitFromStorage()
			.then(() => this.InitQueuedMessages());
	}
	get VoiceChatStore() {
		return this.ChatStore.VoiceChat;
	}
	get unread_message_count() {
		switch (this.GetPlatformNotificationLevel()) {
			case 4: {
				return this.m_cUnreadChatMessages;
			}
			case 3:
			case 2: {
				if (this.has_unread_mention) {
					return 1;
				} else {
					return 0;
				}
			}
			default: {
				return 0;
			}
		}
	}
	get time_last_activity() {
		let e = this.GetPlatformNotificationLevel();
		let t = 0;
		let r = this.m_rtFirstUnread || this.time_last_ack;
		if (r) {
			t = Math.max(r, t);
		}
		switch (e) {
			case 4: {
				t = Math.max(this.time_last_message || 0, t);
				break;
			}
			case 3:
			case 2: {
				t = Math.max(this.time_last_mention || 0, t);
				break;
			}
			case 1:
			case 0: {
				break;
			}
			default: {
				AssertMsg(false, `unhandled EChatRoomNotificationLevel: ${e}`);
			}
		}
		return t;
	}
	get has_unread_messages() {
		if (this.BIsUnreadIndicatorMuted()) {
			return this.unread_message_count > 0;
		} else {
			return this.has_any_unread_messages;
		}
	}
	get has_any_unread_messages() {
		return this.m_cUnreadChatMessages > 0;
	}
	get has_unread_mention() {
		return this.m_rtLastMention > this.m_rtLastAckedChatMsg;
	}
	get time_last_mention() {
		return this.m_rtLastMention;
	}
	BHasAckedChatMsg() {
		return this.m_rtLastAckedChatMsg && this.m_rtLastAckedChatMsg != 0;
	}
	LoadChatLogs() {
		return super.LoadChatLogs();
	}
	GetMessagesFromTimeRange(e, t, r, n, i) {
		let o = a.w.Init(s.vI);
		o.Body().set_chat_group_id(this.m_ulGroupID);
		o.Body().set_chat_id(this.m_ulChatID);
		o.Body().set_max_count(i);
		o.Body().set_start_time(e);
		o.Body().set_start_ordinal(t);
		o.Body().set_last_time(r);
		o.Body().set_last_ordinal(n);
		this.LOG(`trying to load ${i} messages in range ${e}:${t} - ${r}:${n}`);
		return s.xP
			.GetMessageHistory(this.m_ChatStore.CMInterface.GetServiceTransport(), o)
			.then((e) => {
				let t = e.GetEResult();
				if (t != 1) {
					throw t;
				}
				return {
					messages: this.GetMessagesFromResponse(e),
					moreAvailable: e.Body().more_available(),
				};
			});
	}
	GetMessagesFromResponse(e) {
		let t = e.Body().messages();
		let r = [];
		if (m.fi.Get().IsDebugLogEnabled("ChatRoom")) {
			let [e] = t;
			let r = t[t.length - 1];
			this.LOG(
				`received ${
					t.length
				} messages in range ${r.server_timestamp()}:${r.ordinal()} to ${e.server_timestamp()}:${e.ordinal()}`,
			);
		}
		for (let e = t.length - 1; e >= 0; e--) {
			let n;
			let i;
			let t_e = t[e];
			let s = t_e.server_message().message() || 0;
			if (s != 0) {
				s = t_e.server_message().message();
				n = t_e.server_message().string_param();
				i = t_e.server_message().accountid_param();
				if (!$T(s)) {
					this.LOG(`unrenderable message ${s}`);
					continue;
				}
			} else if (!t_e.message() || t_e.message().trim().length == 0) {
				continue;
			}
			let o = new g.D8(
				t_e.sender(),
				t_e.server_timestamp(),
				t_e.ordinal() || 0,
				t_e.message(),
				t_e.reactions().map((e) => ({
					eReactionType: e.reaction_type(),
					strReaction: e.reaction(),
					cReactors: e.num_reactors(),
					bUserReacted: e.has_user_reacted(),
				})),
				s,
				n,
				i,
			);
			if (t_e.deleted()) {
				o.eDeleteState = g.$F.Deleted;
			}
			r.push(o);
		}
		return r;
	}
	GetBBCodeParser() {
		return this.m_ChatStore.ChatRoomBBCodeParser;
	}
	OnNewChatMsgAdded(e, t, r, n) {
		if (
			i.TS.IN_CLIENT &&
			Dp("WebChat.OnNewGroupChatMsgAdded") &&
			A.xm.SettingsStore.BClientHasFeatureOrOnWeb("SteamworksChatAPI")
		) {
			SteamClient.WebChat.OnNewGroupChatMsgAdded(
				this.m_ulGroupID,
				this.m_ulChatID,
				e,
				t,
				r,
				n,
			);
		}
		this.m_NewChatMsgAddedCallbacks.Dispatch(
			this.m_ulGroupID,
			this.m_ulChatID,
			e,
			t,
			r,
			n,
		);
	}
	RegisterOnNewChatMsgAdded(e) {
		return this.m_NewChatMsgAddedCallbacks.Register(e);
	}
	AckChatMsgOnServer(e) {
		let t = a.w.Init(s.MH);
		t.Body().set_chat_group_id(this.m_ulGroupID);
		t.Body().set_chat_id(this.m_ulChatID);
		t.Body().set_timestamp(e);
		s.xP.AckChatMessage(this.m_CMInterface.GetServiceTransport(), t);
	}
	GetPlatformNotificationLevel() {
		if (i.TS.IN_MOBILE) {
			return this.GetMobileNotificationLevel();
		} else {
			return this.GetDesktopNotificationLevel();
		}
	}
	GetDesktopNotificationLevel() {
		if (this.m_eDesktopNotificationLevel == 0) {
			return this.m_group.GetDesktopNotificationLevel();
		} else {
			return this.m_eDesktopNotificationLevel;
		}
	}
	GetMobileNotificationLevel() {
		if (this.m_eMobileNotificationLevel === 0) {
			return this.m_group.GetMobileNotificationLevel();
		} else {
			return this.m_eMobileNotificationLevel;
		}
	}
	BIsUnreadIndicatorMuted() {
		return this.m_group.BIsUnreadIndicatorMuted();
	}
	GetDesktopNotificationLevelSetting() {
		return this.m_eDesktopNotificationLevel;
	}
	GetMobileNotificationLevelsetting() {
		return this.m_eMobileNotificationLevel;
	}
	UpdateUserState(e) {
		this.m_rtLastAckedChatMsg = e.time_last_ack();
		this.m_rtLastMention = e.time_last_mention();
		this.m_eDesktopNotificationLevel = e.desktop_notification_level();
		this.m_eMobileNotificationLevel = e.mobile_notification_level();
		this.m_bUnreadIndicatorMuted = e.unread_indicator_muted();
		this.m_rtFirstUnread = e.time_first_unread();
		if ((this.m_rtLastAckedChatMsg || 0) < this.m_rtLastMessageReceived) {
			this.m_cUnreadChatMessages = 1;
			if (this.m_rtLastAckedChatMsg) {
				this.m_rtFirstUnreadChatMsg = this.m_rtLastAckedChatMsg + 1;
			}
			A.xm.FriendStore.UpdateUnreadMessagesGlobal();
		}
	}
	UpdateChatState(e) {
		AssertMsg(this.m_ulChatID == e.chat_id(), "State for different chat room");
		this.m_strName = e.chat_name();
		this.m_bVoiceAllowed = e.voice_allowed();
		let t = false;
		let r = false;
		let n = this.m_FriendStore.self.accountid;
		let a = new Set(this.m_groupVoiceActiveMembers.GetCurrentMemberSet());
		for (let r of e.members_in_voice()) {
			if (!a.delete(r)) {
				this.m_groupVoiceActiveMembers.AddMember(r);
				if (r != n) {
					t = true;
				}
			}
		}
		a.forEach((e) => {
			this.m_groupVoiceActiveMembers.RemoveMember(e);
			let t = this.m_groupVoiceActiveMembers.HasMember(e);
			this.VoiceChatStore.OnUserLeftChatRoomVoiceChat(
				this.m_ulGroupID,
				this.m_ulChatID,
				e,
				t,
			);
			if (e != n) {
				r = true;
			}
		});
		if (this.BVoiceActive()) {
			if (t) {
				A.xm.AudioPlaybackManager.PlayAudioURL(
					`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_voice_channel_enter.m4a?v=1`,
				);
			} else if (r) {
				A.xm.AudioPlaybackManager.PlayAudioURL(
					`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_voice_channel_exit.m4a?v=1`,
				);
			}
		}
		this.m_rtLastMessageReceived = e.time_last_message();
		this.m_strLastMessage = e.last_message();
		this.m_accountIDLastMessage = e.accountid_last_message();
		this.m_unSortOrder = e.sort_order();
	}
	get voice_active_member_list() {
		return this.m_groupVoiceActiveMembers;
	}
	get voice_active_contains_friends() {
		for (
			let e = 0;
			e < this.m_groupVoiceActiveMembers.member_list.length;
			e++
		) {
			if (
				this.m_groupVoiceActiveMembers.member_list[e].is_friend ||
				this.m_groupVoiceActiveMembers.member_list[e] == A.xm.FriendStore.self
			) {
				return true;
			}
		}
		return false;
	}
	get voice_active_contains_self() {
		for (
			let e = 0;
			e < this.m_groupVoiceActiveMembers.member_list.length;
			e++
		) {
			if (
				this.m_groupVoiceActiveMembers.member_list[e] == A.xm.FriendStore.self
			) {
				return true;
			}
		}
		return false;
	}
	get voice_active_contains_only_self() {
		return (
			this.m_groupVoiceActiveMembers.member_list.length == 1 &&
			this.m_groupVoiceActiveMembers.member_list[0] == A.xm.FriendStore.self
		);
	}
	get name() {
		if (this.IsDefaultRoomForGroup()) {
			return "Home";
		} else if (this.IsUnsavedVoiceChannel()) {
			return Localize("#Chat_CreateChatChannel_DefaultName");
		} else {
			return this.m_strName;
		}
	}
	IsUnsavedVoiceChannel() {
		return this.m_strName.length == 0 && !!this.m_bVoiceAllowed;
	}
	GetParentGroupID() {
		return this.m_ulGroupID;
	}
	GetGroup() {
		return this.m_group;
	}
	IsDefaultRoomForGroup() {
		return this.m_bIsDefaultForGroup;
	}
	GetRoomID() {
		return this.m_ulChatID;
	}
	BIsDefaultRoom() {
		return this.m_bIsDefaultForGroup;
	}
	get unique_id() {
		return `cr${this.m_ulChatID}`;
	}
	GetVoiceAllowed() {
		return this.m_bVoiceAllowed;
	}
	IsTempVoiceRoom() {
		return (
			!!this.GetVoiceAllowed() &&
			(!this.m_strName || this.m_strName.length == 0)
		);
	}
	GetSortOrder() {
		return this.m_unSortOrder;
	}
	StartVoiceChat() {
		if (!this.BVoiceActive()) {
			this.ChatStore.VoiceChat.InitiateRoomChat(
				this.m_ulGroupID,
				this.m_ulChatID,
			);
		}
	}
	ToggleVoiceChat() {
		if (this.BVoiceActive()) {
			this.ChatStore.VoiceChat.OnUserEndVoiceChat();
		} else {
			this.StartVoiceChat();
		}
	}
	BVoiceActive() {
		return this.ChatStore.VoiceChat.IsVoiceActiveForRoom(
			this.m_ulGroupID,
			this.m_ulChatID,
		);
	}
	async UpdateMessageReaction(e, t, r, n) {
		const i = a.w.Init(s.kd);
		i.Body().set_chat_group_id(this.m_ulGroupID);
		i.Body().set_chat_id(this.m_ulChatID);
		i.Body().set_reaction_type(t);
		i.Body().set_reaction(r);
		i.Body().set_is_add(n);
		i.Body().set_server_timestamp(e.rtTimestamp);
		i.Body().set_ordinal(e.unOrdinal);
		const o = e.reactions.find((e) => r === e.strReaction);
		const l = n ? 1 : -1;
		const c = o ? o.cReactors + l : l;
		e.UpdateReaction(t, r, c, n);
		const m = await s.xP.UpdateMessageReaction(
			this.m_CMInterface.GetServiceTransport(),
			i,
		);
		if (m.GetEResult() !== 1) {
			e.UpdateReaction(t, r, c - l, !n);
			console.log(
				`Error updating message reaction. EResult: ${m.GetEResult()}`,
			);
		} else if (n && m.Body().num_reactors() === 1) {
			if (t === 1) {
				this.m_ChatStore.EmoticonStore.TrackEmoticonUsage(r, Date.now() / 1000);
			} else if (t === 2) {
				this.m_ChatStore.EmoticonStore.TrackStickerUsage(r, Date.now() / 1000);
			}
		}
		return m.GetEResult();
	}
	GetMessageReactionReactors(e, t, r) {
		const n = [];
		if (
			t.bUserReacted &&
			(n.push(A.xm.FriendStore.self.accountid), t.cReactors === 1)
		) {
			return n;
		}
		const i = this.GetMessageReactionKey(e, t.strReaction);
		const a = () =>
			this.LoadMessageReactionReactors(e, t, r).then((e) => {
				const t = {};
				e.forEach((e) => (t[e] = true));
				this.m_mapMessageReactionReactors.set(i, {
					cRequested: r,
					reactors: t,
				});
			});
		if (this.m_mapMessageReactionReactors.has(i)) {
			const i = this.m_mapMessageReactionReactors.get(
				this.GetMessageReactionKey(e, t.strReaction),
			);
			if (i.cRequested < r && i.cRequested < t.cReactors) {
				a();
			}
			const s = Object.keys(i.reactors)
				.map((e) => parseInt(e))
				.filter((e) => e !== A.xm.FriendStore.self.accountid);
			n.push(...s);
		} else {
			a();
		}
		return n.slice(0, r);
	}
	UpdateMessageReactionReactors(e, t, r, n) {
		const i = this.GetMessageReactionKey(e, t);
		if (this.m_mapMessageReactionReactors.has(i)) {
			const e = this.m_mapMessageReactionReactors.get(i);
			if (e.reactors[r] && !n) {
				delete e.reactors[r];
				e.cRequested--;
				if (e.cRequested == 0) {
					this.m_mapMessageReactionReactors.delete(i);
				}
			} else if (!e.reactors[r] && n) {
				e.reactors[r] = true;
				e.cRequested++;
			}
		} else if (n) {
			this.m_mapMessageReactionReactors.set(i, {
				cRequested: 1,
				reactors: {
					[r]: true,
				},
			});
		}
	}
	GetMessageReactionKey(e, t) {
		return `${e.rtTimestamp}_${e.unOrdinal}_${t}`;
	}
	async LoadMessageReactionReactors(e, t, r) {
		const n = a.w.Init(s.HZ);
		n.Body().set_chat_group_id(this.m_ulGroupID);
		n.Body().set_chat_id(this.m_ulChatID);
		n.Body().set_server_timestamp(e.rtTimestamp);
		n.Body().set_ordinal(e.unOrdinal);
		n.Body().set_reaction_type(1);
		n.Body().set_reaction(t.strReaction);
		n.Body().set_limit(r);
		const i = await s.xP.GetMessageReactionReactors(
			this.m_CMInterface.GetServiceTransport(),
			n,
		);
		if (i.GetEResult() != 1) {
			console.error(
				`Failed to load message reaction reactors: ${i.GetEResult()}`,
			);
			return [];
		} else {
			return i.Body().reactors();
		}
	}
	async SendChatMessageInternal(e) {
		if (!this.GetChatRoomGroup().BCanChat()) {
			let e = this.AppendLocalEchoChatMsg("");
			e.SetErrorSending(g.Bm.NoChatPermissionInGroup);
			return e.eErrorSending;
		}
		let t = a.w.Init(s.VU);
		t.Body().set_chat_group_id(this.m_ulGroupID);
		t.Body().set_chat_id(this.m_ulChatID);
		t.Body().set_message(e);
		let r = this.AppendLocalEchoChatMsg(e);
		this.m_strLastMessage = e;
		this.m_accountIDLastMessage = this.m_FriendStore.self.accountid;
		const n = await this.SendWithRetries(r, () =>
			s.xP.SendChatMessage(
				this.m_ChatStore.CMInterface.GetServiceTransport(),
				t,
			),
		);
		if (n === g.Bm.None) {
			this.m_accountIDLastMessage = this.m_FriendStore.self.accountid;
		}
		return n;
	}
	async DeleteChatMessages(e) {
		let t = e.map((e) => ({
			rtTimestamp: e.rtTimestamp,
			unOrdinal: e.unOrdinal,
		}));
		this.UpdateChatMessageDeletedState(t, g.$F.Deleting);
		let r = a.w.Init(s.lr);
		r.Body().set_chat_group_id(this.m_ulGroupID);
		r.Body().set_chat_id(this.m_ulChatID);
		for (let t of e) {
			let e = r.Body().add_messages();
			e.set_server_timestamp(t.rtTimestamp);
			e.set_ordinal(t.unOrdinal);
		}
		let n = (
			await s.xP.DeleteChatMessages(
				this.m_ChatStore.CMInterface.GetServiceTransport(),
				r,
			)
		).GetEResult();
		if (n != 1) {
			this.UpdateChatMessageDeletedState(t, g.$F.None);
			return n;
		} else {
			this.UpdateChatMessageDeletedState(t, g.$F.Deleted);
			return 1;
		}
	}
	PopulateCommitFileUploadFormData(e, t, r) {
		e.append("chat_group_id", this.m_ulGroupID);
		e.append("chat_id", this.m_ulChatID);
		e.append("spoiler", t.bSpoiler ? "1" : "0");
		if (r.unAssociatedAppID) {
			e.append("associated_appid", r.unAssociatedAppID.toString());
		}
	}
	BShouldTrackUnreadMessages() {
		return (
			this.m_bIsDefaultForGroup ||
			!this.m_bVoiceAllowed ||
			!this.m_bVoiceAllowed ||
			this.BVoiceActive()
		);
	}
	BShouldSilentlyAddMessage(e) {
		return A.xm.FriendStore.GetPlayer(e.unAccountID).is_blocked;
	}
	PlayChatRoomNotificationSound() {
		if (!A.xm.FriendStore.GetUserDoNotDisturb()) {
			A.xm.AudioPlaybackManager.PlayAudioURL(
				`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_chatroom_notification.m4a?v=1`,
			);
		}
	}
	PlayAtMentionSound() {
		if (!A.xm.FriendStore.GetUserDoNotDisturb()) {
			A.xm.AudioPlaybackManager.PlayAudioURL(
				`${i.TS.COMMUNITY_CDN_URL}public/sounds/webui/steam_at_mention.m4a?v=1`,
			);
		}
	}
	OnReceivedNewMessage(e, t, r, n) {
		if (this.BShouldTrackUnreadMessages()) {
			if (!e.BIsLocalEcho() && e.unAccountID != this.self.accountid) {
				let i;
				if (
					e.Mentions.mention_all ||
					e.Mentions.mention_here ||
					e.Mentions.mention_here ||
					e.Mentions.mention_user
				) {
					this.m_rtLastMention = e.rtTimestamp;
				}
				switch (this.GetPlatformNotificationLevel()) {
					case 1: {
						i = false;
						break;
					}
					case 2: {
						i = e.Mentions.mention_user;
						break;
					}
					case 3: {
						i =
							e.Mentions.mention_user ||
							e.Mentions.mention_here ||
							e.Mentions.mention_here ||
							e.Mentions.mention_all;
						break;
					}
					default: {
						i = true;
					}
				}
				if (i && !A.xm.FriendStore.GetUserDoNotDisturb()) {
					let i =
						e.Mentions.mention_all ||
						e.Mentions.mention_here ||
						e.Mentions.mention_here ||
						e.Mentions.mention_user;
					if (A.xm.BPlayChatRoomNotificationSound() && i) {
						this.PlayAtMentionSound();
					} else if (A.xm.BPlayChatRoomNotificationSound() && t < 4) {
						this.PlayChatRoomNotificationSound();
					}
					if (
						A.xm.NotificationManager.BNotificationsPermitted() &&
						t < 4 &&
						A.xm.BShowChatRoomNotification()
					) {
						const t = A.xm.FriendStore.GetPlayer(e.unAccountID);
						t.LoadIfNecessary();
						const a = () => {
							let a = {
								title: this.m_bIsDefaultForGroup
									? this.GetGroup().name
									: `${this.GetGroup().name} | ${this.name}`,
								body: `${t.display_name}: "${r}"`,
								icon: t.persona.avatar_url_medium,
								rawbody: r,
								tag: `groupmsg_${i ? "mention_" : ""}${t.accountid}`,
								steamid: t.persona.m_steamid.ConvertTo64BitString(),
								chatroomgroupid: this.GetParentGroupID(),
								chatroomid: this.GetRoomID(),
							};
							a = this.DecorateNotification(e, a, r, n);
							a.body = this.m_ChatStore.TextFilterStore.FilterText(
								e.unAccountID,
								a.body,
							);
							if (a.body) {
								A.xm.NotificationManager.DisplayNotification(a, (e) =>
									A.xm.UIStore.ShowAndOrActivateChat(e, this, true),
								);
								if (!this.m_bHasUnreadPriorityChatMessages) {
									this.m_bHasUnreadPriorityChatMessages = true;
									A.xm.FriendStore.UpdateUnreadMessagesGlobal();
								}
							}
						};
						z7(() => t.is_ready, a, {
							timeout: 1000,
						});
					}
					if (t < 4) {
						const e = A.xm.SettingsStore.FriendsSettings.nChatFlashMode;
						let t = Promise.resolve(e == 0);
						if (e == 1) {
							t = A.xm.UIStore.IsChatWindowMinimized(this);
						}
						t.then((e) => {
							if (e) {
								A.xm.UIStore.FlashChatWindow(this, true);
							}
						});
					}
				}
			}
			if (
				!this.m_rtFirstUnread ||
				(!this.m_group.BIsUnreadIndicatorMuted() &&
					this.m_rtFirstUnread <= this.m_rtLastAckedChatMsg)
			) {
				this.m_rtFirstUnread = e.rtTimestamp;
			}
		}
	}
	GetChatRoomGroup() {
		return this.m_ChatStore.GetChatRoomGroup(this.m_ulGroupID);
	}
	GetMember(e) {
		return this.GetChatRoomGroup().GetMember(e);
	}
	CreateInviteLink(e) {
		let t = a.w.Init(s.RZ);
		t.Body().set_chat_group_id(this.m_ulGroupID);
		t.Body().set_seconds_valid(e);
		t.Body().set_chat_id(this.m_ulChatID);
		s.xP
			.CreateInviteLink(this.m_ChatStore.CMInterface.GetServiceTransport(), t)
			.then((e) => {
				let t = e.Body().invite_code();
				let r = u_1(t);
				let n = e.Body().seconds_valid();
				if (n != 0) {
					n += Math.floor(Date.now() / 1000);
				}
				this.m_lastChatLink = {
					strInviteURL: r,
					rtExpires: n,
				};
			});
	}
	OnActivate() {
		this.m_ChatStore.OnChatRoomActivated(this);
		super.OnActivate();
	}
	get lastChatLinkInfo() {
		return this.m_lastChatLink;
	}
	BCanDeleteMemberMessages(e) {
		return this.GetChatRoomGroup().BCanDeleteMemberMessages(e);
	}
	ChangeNameWhileWaitingForRenameRequest(e) {
		this.m_strName = e;
	}
	SetNotificationPreferences(e, t, r) {
		let n = a.w.Init(s.gD);
		n.Body().set_chat_group_id(this.m_ulGroupID);
		let i = n.Body().add_chat_room_preferences();
		i.set_chat_id(this.m_ulChatID);
		if (e !== undefined) {
			this.m_eDesktopNotificationLevel = e;
			i.set_desktop_notification_level(e);
			if (e == 4 && this.m_bUnreadIndicatorMuted) {
				r = false;
			}
		}
		if (t !== undefined) {
			this.m_eMobileNotificationLevel = t;
			i.set_mobile_notification_level(t);
		}
		if (r !== undefined) {
			this.m_bUnreadIndicatorMuted = r;
			i.set_unread_indicator_muted(r);
		}
		return s.xP
			.SetUserChatGroupPreferences(A.xm.CMInterface.GetServiceTransport(), n)
			.then((e) => e.GetEResult() == 1);
	}
	async SetupAppCustomServerMsg(e) {
		let t = JSON.parse(e.strMessage) || {};
		let r = new Map();
		if (t.params) {
			for (let e in t.params) {
				r.set(e.toString(), t.params[e].toString());
			}
		}
		e.strServerMsgAppCustomLocalized = "...";
		let n = await A.xm.AppInfoStore.GetRichPresenceLocAsync(
			this.m_group.GetOwnerAppID(),
		);
		if (t.tok) {
			e.strServerMsgAppCustomLocalized = n.Localize(t.tok, r);
		} else if (t.msg) {
			e.strServerMsgAppCustomLocalized = n.SubstituteParams(t.msg, r);
		} else {
			e.strServerMsgAppCustomLocalized = e.strMessage;
		}
		let i = Hd(e.strServerMsgAppCustomLocalized);
		let a = null;
		let s = "";
		let l = false;
		for (let e of i) {
			if (e.type != 1) {
				if (e.type == 2) {
					if (e.tag != "mention") {
						if (e.tag != "spoiler") {
							console.log(`bbcode tag '${e.tag}' not allowed!`);
							l = true;
						}
					} else if (e.args) {
						a ||= {};
						let t = e.args[""];
						if (t == "all") {
							a.mention_all = true;
						} else if (t == "here") {
							a.mention_here = true;
						} else if (t == this.m_FriendStore.self.accountid.toString()) {
							a.mention_user = true;
						}
					}
				}
			} else {
				s += e.text;
			}
		}
		if (l) {
			e.strServerMsgAppCustomLocalized = s;
		}
		if (a) {
			e.Mentions = a;
		}
		return s;
	}
}
Cg([l.sH], d.prototype, "m_strName", undefined);
Cg([l.sH], d.prototype, "m_unSortOrder", undefined);
Cg([l.sH], d.prototype, "m_lastChatLink", undefined);
Cg([l.sH], d.prototype, "m_rtLastMention", undefined);
Cg([l.sH], d.prototype, "m_eDesktopNotificationLevel", undefined);
Cg([l.sH], d.prototype, "m_eMobileNotificationLevel", undefined);
Cg([l.sH], d.prototype, "m_bUnreadIndicatorMuted", undefined);
Cg([l.XI], d.prototype, "UpdateUserState", null);
Cg([l.XI], d.prototype, "UpdateChatState", null);
Cg([l.EW], d.prototype, "name", null);
Cg([p.oI], d.prototype, "StartVoiceChat", null);
Cg([l.XI], d.prototype, "UpdateMessageReactionReactors", null);
Cg([p.oI, s_1(100)], d.prototype, "PlayChatRoomNotificationSound", null);
Cg([p.oI, s_1(100)], d.prototype, "PlayAtMentionSound", null);
Cg([l.XI], d.prototype, "CreateInviteLink", null);
Cg([l.$Z], d.prototype, "OnActivate", null);
Cg([l.XI], d.prototype, "ChangeNameWhileWaitingForRenameRequest", null);
