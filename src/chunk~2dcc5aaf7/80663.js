import { CountMatches } from "../../actual_src/utils/arrayutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import { Seconds } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i from "./44234.js";
import a from "./89459.js";
import s from "./95773.js";
import o, { Gn, h5 } from "./89193.js";
import u from "./48301.js";
import d from "./58215.js";
import A from "./60857.js";
import p from "./66146.js";
import g from "./8653.js";
import h from "./12176.js";
import C from "./8573.js";
import { BSharedJSContextHasMethod } from "../../actual_src/steamclient/clientinterfacehelpers.js";
import f, { f5 } from "./36383.js";
import b from "./77644.js";
import y from "./54946.js";
import S from "./48332.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import k from "./38849.js";
import D from "./79769.js";
import "./16761.js";
export let CF = k.CF;
class l {
	bCollapsed = false;
	nDefaultWidth;
	nDesiredWidth;
	IsEmpty() {
		return (
			!this.bCollapsed &&
			this.nDefaultWidth === undefined &&
			this.nDesiredWidth === undefined
		);
	}
}
const c = "ChatEmbeds";
class m {
	m_mapEmbed = new o.Es();
	Init() {
		s.xm.SettingsStore.GetObjectFromLocalStorageWhenReady(c, {}).then((e) => {
			this.m_mapEmbed.clear();
			for (let t in e) {
				let r = new l();
				Object.assign(r, e[t]);
				this.m_mapEmbed.set(t, r);
			}
		});
	}
	GetKey(e, t) {
		return `${t}_${e}`;
	}
	EvictOldestIfNecessary() {
		if (this.m_mapEmbed.size > 100) {
			let e = Array.from(this.m_mapEmbed.keys()).sort()[0];
			this.m_mapEmbed.delete(e);
		}
	}
	GetOrCreateEmbedData(e, t) {
		let r = this.GetKey(e, t);
		let n = this.m_mapEmbed.get(r);
		if (!n) {
			n = new l();
			n.bCollapsed = false;
		}
		return n;
	}
	SaveEmbedData(e, t, r) {
		if (r.IsEmpty()) {
			this.m_mapEmbed.delete(this.GetKey(e, t));
		} else {
			this.m_mapEmbed.set(this.GetKey(e, t), r);
		}
		this.EvictOldestIfNecessary();
		this.WriteToLocalStorage();
	}
	WriteToLocalStorage() {
		s.xm.SettingsStore.StoreObjectInLocalStorage(c, this.m_mapEmbed);
	}
	GetCollapsedState(e, t) {
		let r = this.m_mapEmbed.get(this.GetKey(e, t));
		return !!r && !!r.bCollapsed;
	}
	SetCollapsedState(e, t, r) {
		let n = this.GetOrCreateEmbedData(e, t);
		n.bCollapsed = r;
		this.SaveEmbedData(e, t, n);
	}
	GetWidths(e, t) {
		let r = this.m_mapEmbed.get(this.GetKey(e, t));
		if (r && r.nDesiredWidth && r.nDefaultWidth) {
			return {
				nDesiredWidth: r.nDesiredWidth,
				nDefaultWidth: r.nDefaultWidth,
			};
		}
	}
	SetWidths(e, t, r, n) {
		let i = this.GetOrCreateEmbedData(e, t);
		if (r == n) {
			delete i.nDefaultWidth;
			delete i.nDesiredWidth;
		} else {
			i.nDesiredWidth = r;
			i.nDefaultWidth = n;
		}
		this.SaveEmbedData(e, t, i);
	}
}
class w extends S.s {
	m_CMInterface;
	async InitCM(e, t) {
		if (this.m_CMInterface != null) {
			return null;
		} else {
			this.m_CMInterface = e;
			await this.m_CMInterface.WaitUntilLoggedOn();
			this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
				y.QA.NotifyCommunityPreferencesChangedHandler,
				(e) => {
					this.UpdateCommunityPreferences(e.Body().preferences());
					this.OnFilterDataChanged();
					return 1;
				},
			);
			this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
				y.QA.NotifyTextFilterWordsChangedHandler,
				(e) => {
					this.UpdateTextFilterWords(e.Body().words());
					this.OnFilterDataChanged();
					return 1;
				},
			);
			return this.Init(
				this.m_CMInterface.steamid.GetAccountID(),
				this.m_CMInterface.GetServiceTransport(),
				t,
			);
		}
	}
}
function E(e, t) {
	if (!e || !t) {
		return [];
	}
	let r = [];
	let n = e.values();
	let i = n.next();
	while (!i.done) {
		if (t(i.value)) {
			r.push(i.value);
		}
		i = n.next();
	}
	return r;
}
async function M(e, t) {
	const r = Math.floor(Math.random() * t * 1000);
	await new Promise((e) => setTimeout(e, r));
	return e();
}
class R {
	static strSettingsStorageKey = "RecentChats.HiddenItems";
	m_storage;
	m_settings;
	m_bReady = false;
	constructor() {
		Gn(this);
	}
	Init(e) {
		this.m_storage = e;
		this.InitFromStorage();
	}
	get bReady() {
		return this.m_bReady;
	}
	async InitFromStorage() {
		try {
			const e = await this.m_storage.GetObject(R.strSettingsStorageKey);
			if (!e) {
				this.m_settings = o.sH.object({
					friends: {},
					groups: {},
				});
				this.m_bReady = true;
				return;
			}
			if (!this.ParseStoredObject(e)) {
				throw new Error(
					"Stored object was malformed. Could not parse correctly.",
				);
			}
			this.m_settings = o.sH.object(e);
			this.m_bReady = true;
		} catch (e) {
			console.error(
				`CHiddenRecentItemsSettings: Problem initializing from cache: ${e}`,
			);
			this.m_storage.RemoveObject(R.strSettingsStorageKey);
			this.m_settings = o.sH.object({
				friends: {},
				groups: {},
			});
			this.m_bReady = true;
		}
	}
	ParseStoredObject(e) {
		try {
			if (typeof e != "object") {
				return false;
			}
			const t = e;
			return (
				typeof t.friends == "object" &&
				typeof t.groups == "object" &&
				!Object.keys(t.friends).some((e) => typeof t.friends[e] != "number") &&
				!Object.keys(t.groups).some((e) => typeof t.groups[e] != "number")
			);
		} catch (e) {
			return false;
		}
	}
	BIsFriendHidden(e, t) {
		if (!this.m_bReady) {
			return false;
		}
		const r = this.m_settings.friends[e.accountid.toString()];
		return r && r >= t;
	}
	BIsGroupHidden(e, t) {
		if (!this.m_bReady) {
			return false;
		}
		const r = this.m_settings.groups[e.GetGroupID()];
		return r && r >= t;
	}
	SetHiddenTimeForFriend(e, t) {
		this.m_settings.friends[e.accountid.toString()] = t;
		this.m_settings.bHasEverHiddenFriend = true;
		return this.Save();
	}
	SetHiddenTimeForGroup(e, t) {
		this.m_settings.groups[e.GetGroupID()] = t;
		this.m_settings.bHasEverHiddenGroup = true;
		return this.Save();
	}
	Save() {
		return this.m_storage.StoreObject(R.strSettingsStorageKey, this.m_settings);
	}
	BHasEverHiddenFriend() {
		return this.m_settings.bHasEverHiddenFriend;
	}
	BHasEverHiddenGroup() {
		return this.m_settings.bHasEverHiddenGroup;
	}
}
Cg([o.sH], R.prototype, "m_bReady", undefined);
export class fl {
	m_FriendStore;
	m_CMInterface;
	m_VoiceChat;
	m_EmoticonStore = new b.r();
	m_FriendChatStore = new g.b(this);
	m_InviteStore = new d.oX(this);
	m_GameInviteStore = new u.e7();
	m_ChatRoomGroupDisplayPrefs = new p.A();
	m_EmbedStore = new m();
	m_TextFilterStore = new w({
		BIsFriend: (e) => !!this.m_FriendStore.GetFriendIfCached(e),
	});
	m_ChatRoomBBCodeParser;
	m_FriendChatBBCodeParser;
	m_NotificationBBCodeParser;
	m_ChatRoomEffectSettings;
	m_mapChatGroups = o.sH.map();
	m_mapActiveChatGroupsToRefCount = o.sH.map();
	m_mapVirtualizedMemberListViews = new Map();
	m_mapClanChatsByClanID = new Map();
	m_HiddenRecentChatSettings = new R();
	m_GroupAddedCallbacks = new D.lu();
	m_bReceivedChatGroupList = false;
	m_bReadyToRender = false;
	m_fnOnReadyToRender;
	constructor(e) {
		Gn(this);
		this.m_FriendStore = e;
	}
	Init(e, t) {
		this.m_CMInterface = e;
		this.m_EmoticonStore.Init(e);
		this.m_VoiceChat = t;
		this.m_ChatRoomBBCodeParser = s.xm.GetChatRoomBBCodeParser();
		this.m_FriendChatBBCodeParser = s.xm.GetFriendChatBBCodeParser();
		this.m_NotificationBBCodeParser = s.xm.GetNotificationBBCodeParser();
		this.m_ChatRoomEffectSettings = s.xm.GetChatRoomEffectSettings();
		this.m_ChatRoomGroupDisplayPrefs.Init(s.xm.SettingsStore);
		this.m_EmbedStore.Init();
		this.m_FriendChatStore.Init();
		this.m_HiddenRecentChatSettings.Init(s.xm.Storage);
		this.m_TextFilterStore.InitCM(this.m_CMInterface, s.xm.Storage);
		let r = false;
		let n = 0;
		this.m_CMInterface.AddOnLogonCallback(() => {
			if (r) {
				const e = n < Date.now() / 1000 - Seconds.PerMinute / 2;
				if (e) {
					M(() => this.RestoreStatePostDisconnect(e), 4);
				} else {
					this.RestoreStatePostDisconnect(e);
				}
			} else {
				A.C.Init(s.xm.Storage, e.steamid.GetAccountID().toString()).then(() =>
					this.LoadMyChatRooms(),
				);
				this.m_FriendChatStore.OnLogon();
				r = true;
			}
			this.m_GameInviteStore.Init();
		}, 102);
		this.m_CMInterface.AddOnDisconnectCallback(
			() => (n = Date.now() / 1000),
			102,
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			f.I0.NotifyIncomingChatMessageHandler,
			(e) => {
				let t = e.Body();
				let r = this.FindChatRoom(t.chat_group_id(), t.chat_id());
				if (!r) {
					return 2;
				}
				let n = new C.b(t.steamid_sender());
				if ((t.server_message().message() || 0) != 0) {
					r.AddNewServerMsg(
						n.GetAccountID(),
						t.timestamp(),
						t.ordinal() || 0,
						t.server_message().message(),
						t.message(),
						t.server_message().string_param(),
						t.server_message().accountid_param(),
					);
				} else {
					let e = t.mentions();
					let i = null;
					if (e) {
						i = {};
						if (e.mention_all()) {
							i.mention_all = true;
						}
						if (e.mention_here()) {
							i.mention_here = true;
						}
						if (
							e.mention_accountids() &&
							e.mention_accountids().includes(this.m_FriendStore.self.accountid)
						) {
							i.mention_user = true;
						}
					}
					r.AddNewChatMsgAndNotify(
						n.GetAccountID(),
						t.timestamp(),
						t.ordinal() || 0,
						t.message(),
						t.message_no_bbcode(),
						i,
					);
					let a = this.m_TextFilterStore;
					if (!a.BShownFilterTip() && a.BHasFilter()) {
						let e = t.message();
						if (this.m_TextFilterStore.FilterText(n.GetAccountID(), e) !== e) {
							r.AddLocalMsg(
								n.GetAccountID(),
								t.timestamp(),
								(0, Localize)(
									"#Chat_TextFilter_Active",
									this.GetTextFilterSettingsURL(),
								),
							);
							a.SetFilterTipShown(true);
						}
					}
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			f.I0.NotifyChatMessageModifiedHandler,
			(e) => {
				let t = e.Body();
				let r = this.FindChatRoom(t.chat_group_id(), t.chat_id());
				if (!r) {
					return 2;
				}
				let n = [];
				for (let t of e.Body().messages()) {
					if (t.deleted) {
						n.push({
							rtTimestamp: t.server_timestamp(),
							unOrdinal: t.ordinal(),
						});
					}
				}
				r.UpdateChatMessageDeletedState(n, a.$F.Deleting);
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			f.I0.NotifyChatRoomHeaderStateChangeHandler,
			(e) => {
				let t = e.Body().header_state().chat_group_id();
				let r = this.m_mapChatGroups.get(t);
				if (r) {
					r.UpdateChatRoomHeaderState(e.Body().header_state());
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			f.I0.NotifyMemberStateChangeHandler,
			(e) => {
				let t = e.Body().chat_group_id();
				let r = e.Body().change();
				let n = e.Body().member();
				if (
					i.TS.IN_CLIENT &&
					BSharedJSContextHasMethod("WebChat.OnGroupChatUserStateChange") &&
					s.xm.SettingsStore.BClientHasFeatureOrOnWeb("SteamworksChatAPI")
				) {
					SteamClient.WebChat.OnGroupChatUserStateChange(t, n.accountid(), r);
				}
				let a = this.m_mapChatGroups.get(t);
				if (a) {
					a.OnUserStateChange(n, r);
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			f.I0.NotifyChatRoomGroupRoomsChangeHandler,
			(e) => {
				let t = e.Body();
				let r = this.m_mapChatGroups.get(t.chat_group_id());
				if (r) {
					r.OnRoomStateChange(t);
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			f.I0.NotifyChatGroupUserStateChangedHandler,
			(e) => {
				let t = e.Body();
				let r = t.chat_group_id();
				let n = t.user_action();
				if (
					i.TS.IN_CLIENT &&
					BSharedJSContextHasMethod("WebChat.OnGroupChatUserStateChange") &&
					s.xm.SettingsStore.BClientHasFeatureOrOnWeb("SteamworksChatAPI")
				) {
					SteamClient.WebChat.OnGroupChatUserStateChange(r, i.iA.accountid, n);
				}
				switch (n) {
					case 1: {
						let e = this.AddJoinedChatRoomGroup(
							t.group_summary(),
							t.user_chat_group_state(),
						);
						s.xm.UIStore.ShowAndOrActivateChatRoomGroup(
							s.xm.GetDefaultBrowserContext(),
							e,
							false,
						);
						break;
					}
					case 2:
					case 3:
					case 10: {
						if (s.xm.VoiceStore.GetActiveChatRoomGroupID() == r) {
							s.xm.VoiceStore.OnUserEndVoiceChat();
						}
						let e = this.GetChatRoomGroup(r);
						let t = e ? e.name : undefined;
						this.RemoveChatRoomGroup(r);
						if (t) {
							if (n == 3) {
								s.xm.ShowAlert(
									(0, Localize)("#Alert_YouWereKickedTitle"),
									(0, Localize)("#Alert_YouWereKickedDescription", t),
								);
							} else if (n == 10) {
								s.xm.ShowAlert(
									(0, Localize)("#Alert_YouWereBannedTitle"),
									(0, Localize)("#Alert_YouWereBannedDescription", t),
								);
							}
						}
						break;
					}
					case 7:
					case 0: {
						let e = this.GetChatRoomGroup(r);
						AssertMsg(
							e,
							"Got state change for ChatRoomGroup we don't know about",
						);
						if (e) {
							e.UpdateUserState(t.user_chat_group_state());
						}
						break;
					}
					case 4: {
						break;
					}
					default: {
						AssertMsg(
							false,
							`Don't know how to handle state change of type ${f5(n)} `,
						);
					}
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			f.I0.NotifyAckChatMessageEchoHandler,
			(e) => {
				let t = e.Body().chat_group_id();
				let r = e.Body().chat_id();
				let n = e.Body().timestamp();
				let i = this.GetChatRoomGroup(t);
				if (!i) {
					return 2;
				}
				if (r) {
					let e = i.GetChatRoom(r);
					if (!e) {
						return 11;
					}
					e.UpdateLastAckTimeFromServer(n);
				} else {
					i.UpdateLastAckTimeFromServer(n);
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			f.I0.NotifyMessageReactionHandler,
			(e) => {
				const {
					chat_group_id,
					chat_id,
					server_timestamp,
					ordinal,
					is_add,
					reactor,
					reaction,
					reaction_type,
				} = e.Body().toObject();
				const m = this.GetChatRoomGroup(chat_group_id);
				if (m) {
					const e = m.GetChatRoom(chat_id);
					if (e) {
						const t = e.chat_messages.find(
							(e) =>
								e.rtTimestamp === server_timestamp && e.unOrdinal === ordinal,
						);
						if (t) {
							const r = t.reactions.find((e) => e.strReaction === reaction);
							const n = is_add ? 1 : -1;
							if (n === -1 && !r) {
								console.error(
									"ChatRoomClientService.NotifyMessageReaction: Got reaction removal notifiaction but no matching reaction was found.",
								);
								return 1;
							}
							let i = !!r && r.bUserReacted;
							if (reactor === s.xm.FriendStore.self.steamid64) {
								i = is_add;
							}
							t.UpdateReaction(
								reaction_type,
								reaction,
								r ? r.cReactors + n : n,
								i,
							);
							const m = new C.b(reactor);
							e.UpdateMessageReactionReactors(
								t,
								reaction,
								m.GetAccountID(),
								is_add,
							);
						}
					}
				}
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			f.I0.NotifyChatRoomDisconnectHandler,
			(e) => {
				M(
					() =>
						h5(() => {
							for (let t of e.Body().chat_group_ids()) {
								let e = this.m_mapChatGroups.get(t);
								if (e) {
									e.OnConnectionRestored(true);
								}
							}
							this.SendActiveChatRoomGroupsToServer();
						}),
					4,
				);
				return 1;
			},
		);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandler(
			f.I0.NotifyMemberListViewUpdatedHandler,
			(e) => {
				let t = this.m_mapVirtualizedMemberListViews.get(e.Body().view_id());
				if (t) {
					t.OnServerUpdate(e.Body());
				}
				return 1;
			},
		);
		return new Promise((e) => {
			this.m_fnOnReadyToRender = e;
		});
	}
	SetReadyToRender() {
		if (!this.m_bReadyToRender) {
			this.m_bReadyToRender = true;
			if (this.m_fnOnReadyToRender) {
				this.m_fnOnReadyToRender();
				this.m_fnOnReadyToRender = undefined;
			}
		}
	}
	RestoreStatePostDisconnect(e) {
		if (e) {
			this.LoadMyChatRooms();
		}
		const t = Array.from(this.m_mapActiveChatGroupsToRefCount.values()).some(
			(e) => e > 0,
		);
		this.m_FriendChatStore.RestoreStatePostDisconnect(e);
		this.m_mapChatGroups.forEach((t) => t.OnConnectionRestored(e));
		if (t) {
			this.SendActiveChatRoomGroupsToServer();
		}
	}
	LoadMyChatRooms() {
		let e = false;
		let t = h.w.Init(f.Pv);
		f.xP
			.GetMyChatRoomGroups(this.m_CMInterface.GetServiceTransport(), t)
			.then((t) => {
				h5(() => {
					if (t.GetEResult() != 1) {
						e = true;
					}
					let r = t.Body().chat_room_groups();
					for (let t of r) {
						let r = t.group_summary().chat_group_id();
						if (!r) {
							e = true;
							continue;
						}
						let n = this.m_mapChatGroups.get(r);
						if (!n) {
							n = new p.a$(this, r);
							this.m_mapChatGroups.set(r, n);
						}
						n.SetInitialGroupState(t.group_summary());
						n.UpdateUserState(t.user_chat_group_state());
						this.OnGroupAdded(n);
						if (!n.BHasEverBeenAcked()) {
							s.xm.UIStore.ShowUnackedGroup(n);
						}
					}
					this.SetReadyToRender();
					this.m_bReceivedChatGroupList = true;
				});
			})
			.catch((e) => {
				console.error("Failed to load chat rooms from server", e);
				this.SetReadyToRender();
			});
	}
	OnGroupAdded(e) {
		if (e.GetClanID()) {
			this.m_mapClanChatsByClanID.set(e.GetClanID(), e.GetGroupID());
			this.m_FriendStore.ClanStore.SetClanChatGroupID(
				e.GetClanID(),
				e.GetGroupID(),
			);
		}
		this.m_GroupAddedCallbacks.Dispatch(e);
	}
	RegisterForGroupAdded(e) {
		return this.m_GroupAddedCallbacks.Register(e);
	}
	OnChatRoomActivated(e) {
		e.GetGroup().OnActivate();
	}
	JoinAndShowChatRoomGroup(e, t, r) {
		let n = this.GetChatRoomGroup(t);
		if (n && n.BIsCurrentUserAMember()) {
			s.xm.UIStore.ShowAndOrActivateChatRoomGroup(e, n, r);
		} else {
			this.m_InviteStore.JoinChatGroup(t, null, e);
		}
	}
	AddCreatedChatRoomGroup(e, t, r, n) {
		if (this.m_mapChatGroups.has(t)) {
			return;
		}
		let i = new p.a$(this, t);
		this.m_mapChatGroups.set(t, i);
		i.UpdateGroupState(r);
		i.UpdateUserState(n);
		this.OnGroupAdded(i);
		s.xm.UIStore.ShowAndOrActivateChatRoomGroup(e, i, true);
	}
	AddKnownChatRoomGroup(e, t) {
		let r = e.chat_group_id();
		if (this.m_mapChatGroups.has(r)) {
			this.m_mapChatGroups.get(r).SetInitialGroupState(e);
		} else {
			let n = new p.a$(this, r);
			this.m_mapChatGroups.set(r, n);
			n.SetInitialGroupState(e);
			if (t) {
				n.UpdateUserState(t);
			}
			this.OnGroupAdded(n);
		}
	}
	AddJoinedChatRoomGroup(e, t) {
		let r = t.chat_group_id();
		let n = this.m_mapChatGroups.get(r);
		if (!n) {
			n = new p.a$(this, r);
			this.m_mapChatGroups.set(r, n);
		}
		if (e instanceof f.P) {
			n.UpdateGroupState(e);
		} else {
			n.SetInitialGroupState(e);
		}
		this.OnGroupAdded(n);
		n.UpdateUserState(t);
		return n;
	}
	RemoveChatRoomGroup(e) {
		let t = this.m_mapChatGroups.get(e);
		if (!t) {
			return;
		}
		let r = this.m_mapChatGroups.get(e);
		if (r) {
			s.xm.UIStore.CloseTabByID(r.unique_id);
		}
		if (this.GetRefCountActiveChatRoomGroup(e) <= 0) {
			t.UnloadAndResetGroupState();
		}
	}
	FindChatRoom_Deprecated(e) {
		let t = null;
		this.m_mapChatGroups.forEach((r) => {
			let n = r.GetChatRoom(e);
			if (n) {
				t = n;
			}
		});
		return t;
	}
	FindChatRoom(e, t) {
		let r = this.m_mapChatGroups.get(e);
		if (r) {
			return r.GetChatRoom(t);
		} else {
			return null;
		}
	}
	get chat_group_list_ready() {
		return this.m_bReceivedChatGroupList;
	}
	get FriendStore() {
		return this.m_FriendStore;
	}
	get CMInterface() {
		return this.m_CMInterface;
	}
	get VoiceChat() {
		return this.m_VoiceChat;
	}
	get ChatRoomBBCodeParser() {
		return this.m_ChatRoomBBCodeParser;
	}
	get FriendChatBBCodeParser() {
		return this.m_FriendChatBBCodeParser;
	}
	get NotificationBBCodeParser() {
		return this.m_NotificationBBCodeParser;
	}
	get ChatRoomEffectSettings() {
		return this.m_ChatRoomEffectSettings;
	}
	get FriendChatStore() {
		return this.m_FriendChatStore;
	}
	get EmoticonStore() {
		return this.m_EmoticonStore;
	}
	get InviteStore() {
		return this.m_InviteStore;
	}
	get GameInviteStore() {
		return this.m_GameInviteStore;
	}
	get EmbedStore() {
		return this.m_EmbedStore;
	}
	get TextFilterStore() {
		return this.m_TextFilterStore;
	}
	GetTextFilterStatus() {
		let e = this.m_TextFilterStore.TextFilterPreferences;
		switch (e.eTextFilterSetting) {
			case 0: {
				return (0, Localize)("#TextFilterStatus_SteamLabOptedOut");
			}
			case 1: {
				if (e.bIgnoreFriends) {
					return (0, Localize)("#TextFilterStatus_Enabled_IgnoreFriends");
				} else {
					return (0, Localize)("#TextFilterStatus_Enabled");
				}
			}
			case 2: {
				if (e.bIgnoreFriends) {
					return (0, Localize)(
						"#TextFilterStatus_EnabledAllowProfanity_IgnoreFriends",
					);
				} else {
					return (0, Localize)("#TextFilterStatus_EnabledAllowProfanity");
				}
			}
			case 3: {
				return (0, Localize)("#TextFilterStatus_Disabled");
			}
			default: {
				return "";
			}
		}
	}
	GetTextFilterSettingsURL() {
		return `${i.TS.STORE_BASE_URL}account/preferences#CommunityContentPreferences`;
	}
	get ChatRoomGroupDisplayPrefs() {
		return this.m_ChatRoomGroupDisplayPrefs;
	}
	BIsEligibleForVoiceChat(e, t) {
		let r;
		if (t && t instanceof g.s) {
			r = t;
		}
		let n = e.efriendrelationship == 2;
		let i = e.efriendrelationship == 4;
		return e.persona.is_online && !r && !n && !i && !e.is_blocked;
	}
	GetActiveVoiceChat() {
		let e = this.m_VoiceChat.GetActiveVoiceChatID();
		if (e != "") {
			let t = this.FindChatRoom_Deprecated(e);
			if (t) {
				return t;
			}
		} else {
			let e = this.m_VoiceChat.GetActiveOneOnOneVoiceChatAccountID();
			if (e != 0) {
				let t = this.GetFriendChat(e, false);
				if (t) {
					return t;
				}
			}
		}
	}
	GetActiveVoiceChannelName() {
		let e = this.GetActiveVoiceChat();
		if (e != null) {
			return e.name;
		} else {
			return "";
		}
	}
	GetFriendChat(e, t = true) {
		if (e == this.FriendStore.self.accountid) {
			return null;
		} else {
			return this.m_FriendChatStore.GetFriendChat(e, t);
		}
	}
	GetFilteredChats(e) {
		const t = Array.from(s.xm.FriendStore.all_friends_accountids)
			.map((e) => s.xm.ChatStore.GetFriendChat(e))
			.filter(
				(t) =>
					!this.m_HiddenRecentChatSettings.BIsFriendHidden(
						t.chat_partner,
						F(t),
					) && t.chat_partner.BMatchesSearchString(e.toLowerCase(), false),
			);
		const r = this.FindChatRoomGroupsMatchingSearch(e);
		return this.SortAndMergeChats(t, r);
	}
	GetRecentChats() {
		const e = s.xm.ChatStore.FriendChatStore.GetAllChats().filter(
			(e) =>
				!this.m_HiddenRecentChatSettings.BIsFriendHidden(
					e.chat_partner,
					F(e),
				) && F(e) > 0,
		);
		const t = s.xm.ChatStore.currentChatRoomGroups.filter(
			(e) =>
				!!e.room_with_last_message &&
				!this.m_HiddenRecentChatSettings.BIsGroupHidden(e, G(e)),
		);
		return this.SortAndMergeChats(e, t);
	}
	SortAndMergeChats(e, t) {
		const r = e.slice().sort((e, t) => F(t) - F(e));
		const n = t.slice().sort((e, t) => G(t) - G(e));
		const i = [];
		for (let e = 0, t = 0; e + t < r.length + n.length; ) {
			if (e === r.length) {
				i.push(n[t++]);
			} else if (t === n.length) {
				i.push(r[e++]);
			} else if (n[t].room_with_last_message) {
				if (F(r[e]) < G(n[t])) {
					i.push(n[t++]);
				} else {
					i.push(r[e++]);
				}
			} else {
				t++;
			}
		}
		return i;
	}
	GetChatRoomGroup(e) {
		return this.m_mapChatGroups.get(e);
	}
	get currentChatRoomGroups() {
		return E(this.m_mapChatGroups, (e) => e.BIsCurrentUserAMember());
	}
	FindChatRoomGroupsMatchingSearch(e) {
		return this.currentChatRoomGroups.filter((t) =>
			t.name.toLocaleLowerCase().includes(e),
		);
	}
	get ClanChatRooms() {
		return E(this.m_mapChatGroups, (e) => e.BIsClanChatRoom());
	}
	GetRefCountActiveChatRoomGroup(e) {
		let t = this.m_mapActiveChatGroupsToRefCount.get(e);
		if (t === undefined) {
			t = 0;
		}
		return t;
	}
	IncRefActiveChatRoomGroup(e, t) {
		let r = this.m_mapActiveChatGroupsToRefCount.get(e);
		if (r === undefined) {
			r = 0;
		}
		r += 1;
		this.m_mapActiveChatGroupsToRefCount.set(e, r);
		if (r == 1 && t) {
			this.SendActiveChatRoomGroupsToServer();
		}
		return r;
	}
	DecRefActiveChatRoomGroup(e) {
		let t = this.m_mapActiveChatGroupsToRefCount.get(e);
		let r = t !== undefined && t > 0;
		AssertMsg(
			r,
			"Attempting to DecRef a Chat Group that has no existing references. Doing nothing.",
		);
		if (!r) {
			return 0;
		}
		t -= 1;
		if (t <= 0) {
			this.m_mapActiveChatGroupsToRefCount.delete(e);
			let t = this.m_mapChatGroups.get(e);
			if (t) {
				t.UnloadActiveGroupState();
			}
			this.SendActiveChatRoomGroupsToServer();
		} else {
			this.m_mapActiveChatGroupsToRefCount.set(e, t);
		}
		return t;
	}
	OnRestorePopupsComplete() {
		if (this.m_mapActiveChatGroupsToRefCount.size > 0) {
			this.SendActiveChatRoomGroupsToServer();
		}
	}
	m_bSendingActiveGroups = false;
	m_bSendActiveGroupsQueued = false;
	async SendActiveChatRoomGroupsToServer() {
		if (this.m_bSendingActiveGroups) {
			this.m_bSendActiveGroupsQueued = true;
			return;
		}
		let e = 0.5;
		const t = async () => {
			try {
				return await this.InternalSendActiveChatRoomGroupsToServer();
			} catch (e) {
				return false;
			}
		};
		while (!(await t())) {
			await new Promise((t) => setTimeout(t, e * 1000));
			e *= 2;
		}
	}
	async InternalSendActiveChatRoomGroupsToServer() {
		return new Promise((e) => {
			let t = [];
			let r = h.w.Init(f.Jw);
			this.m_mapActiveChatGroupsToRefCount.forEach((e, n) => {
				AssertMsg(
					e > 0,
					"SendActiveChatRoomGroupsToServer found invalid ref count for chat group.",
				);
				if (e <= 0) {
					return;
				}
				r.Body().add_chat_group_ids(n);
				let i = this.m_mapChatGroups.get(n);
				if (!i || !i.readyToRender) {
					r.Body().add_chat_groups_data_requested(n);
				}
				if (
					s.xm.SettingsStore.BClientHasFeatureOrOnWeb(
						"ServerVirtualizedMemberLists",
					)
				) {
					r.Body().set_virtualize_members_threshold(100);
				}
				if (i && i.BIsClanChatRoom()) {
					t.push(i.GetClanID());
				}
			});
			const n = (r) => {
				if (i.TS.IN_CLIENT) {
					SteamClient.WebChat.SetActiveClanChatIDs(t);
				}
				if (r && a !== undefined) {
					ClearBackgroundTimeout(a);
				}
				this.m_bSendingActiveGroups = false;
				if (this.m_bSendActiveGroupsQueued) {
					e(false);
				} else {
					e(r);
				}
			};
			const a = SetBackgroundTimeout(() => {
				this.m_bSendActiveGroupsQueued = true;
				n(false);
			}, 10000);
			this.m_bSendActiveGroupsQueued = false;
			this.m_bSendingActiveGroups = true;
			f.xP
				.SetSessionActiveChatRoomGroups(
					this.m_CMInterface.GetServiceTransport(),
					r,
				)
				.then(
					(e) => {
						let r = false;
						h5(() => {
							if (e.GetEResult() == 1) {
								for (let n of e.Body().chat_states()) {
									let e = this.m_mapChatGroups.get(
										n.header_state().chat_group_id(),
									);
									if (e) {
										try {
											e.UpdateGroupState(n);
											if (e.BIsClanChatRoom() && !t.includes(e.GetClanID())) {
												t.push(e.GetClanID());
											}
										} catch (t) {
											r = true;
											console.error(
												`exception processing group update for group ${e.GetGroupID()}`,
												t,
											);
										}
									}
								}
								for (let t of e.Body().virtualize_members_chat_group_ids()) {
									let e = this.m_mapChatGroups.get(t);
									if (e) {
										e.SetMemberListVirtualized(true);
									}
								}
							} else {
								r = true;
							}
						});
						return !r;
					},
					() => false,
				)
				.then(n);
		});
	}
	CreateChatRoomGroup(e, t, r, n = {}) {
		const { unBroadcastAccountId } = n;
		let a = h.w.Init(f.SZ);
		a.Body().set_name(t);
		for (let e of r) {
			a.Body().add_steamid_invitees(e);
		}
		if (unBroadcastAccountId) {
			a.Body().set_watching_broadcast_accountid(unBroadcastAccountId);
		}
		return f.xP
			.CreateChatRoomGroup(this.m_CMInterface.GetServiceTransport(), a)
			.then((t) => {
				let r = t.GetEResult();
				if (r != 1) {
					throw r;
				}
				this.AddCreatedChatRoomGroup(
					e,
					t.Body().chat_group_id(),
					t.Body().state(),
					t.Body().user_chat_state(),
				);
				return t.Body().chat_group_id();
			});
	}
	LeaveChatRoomGroup(e, t) {
		let r = h.w.Init(f.rk);
		r.Body().set_chat_group_id(t);
		return f.xP
			.LeaveChatRoomGroup(this.m_CMInterface.GetServiceTransport(), r)
			.then((e) => {
				let r = e.GetEResult();
				if (r != 1) {
					throw r;
				}
				this.RemoveChatRoomGroup(t);
			});
	}
	FindNamelessChatGroupWithFriends(e) {
		if (e.length == 0) {
			return null;
		}
		let t = e.map((e) => new C.b(e).GetAccountID());
		let r = Array.from(this.m_mapChatGroups.values());
		for (let e of r) {
			if (!e.IsNamedGroupChat() && e.BRoomContainsJustTheseFriendsAndSelf(t)) {
				return e;
			}
		}
		return null;
	}
	FillInChatUsabilityMetrics(e) {
		e.metrics().set_group_chat_count(
			CountMatches(Array.from(this.m_mapChatGroups.values()), (e) =>
				e.BIsCurrentUserAMember(),
			),
		);
		this.m_ChatRoomGroupDisplayPrefs.FillInChatUsabilityMetrics(e);
	}
	GetChatsWithUnreadPriorityMessages() {
		let e = [];
		let t = this.FriendChatStore.GetFriendsWithUnreadMessages(null);
		for (let r of t) {
			if (r.has_unread_priority_messages) {
				e.push(r);
			}
		}
		let r = this;
		this.m_mapActiveChatGroupsToRefCount.forEach((t, n) => {
			r.m_mapChatGroups.get(n).GetChatRoomsWithUnreadPriorityMessages(e);
		});
		return e;
	}
	GetChatToActivateForOldestUnread(e) {
		let t = null;
		let r = (r) =>
			(!!r.has_unread_priority_messages || r.GetVisibilityState(e) != 0) &&
			(!t ||
				((!t.has_unread_priority_messages ||
					!!r.has_unread_priority_messages) &&
					((!t.has_unread_priority_messages &&
						!!r.has_unread_priority_messages) ||
						t.m_msTimeActivated < r.m_msTimeActivated ||
						(!(t.m_msTimeActivated > r.m_msTimeActivated) &&
							t.time_last_message < r.time_last_message))));
		this.m_mapActiveChatGroupsToRefCount.forEach((e, n) => {
			const i = this.m_mapChatGroups.get(n).chatRoomList;
			for (let e of i) {
				if (r(e)) {
					t = e;
				}
			}
		});
		const n = this.m_FriendChatStore.GetAllChats();
		for (let e of n) {
			if (r(e)) {
				t = e;
			}
		}
		return t;
	}
	RegisterVirtualizedMemberListView(e) {
		this.m_mapVirtualizedMemberListViews.set(e.GetViewID(), e);
	}
	UnregisterVirtualizedMemberListView(e) {
		if (e) {
			this.m_mapVirtualizedMemberListViews.delete(e.GetViewID());
			e.UnregisterFromServer();
		}
	}
}
function F(e) {
	return Math.max(e.time_last_ack, e.time_last_message);
}
function G(e) {
	return e.time_last_activity;
}
Cg([o.sH], fl.prototype, "m_bReceivedChatGroupList", undefined);
Cg([s.Nw], fl.prototype, "JoinAndShowChatRoomGroup", null);
Cg([o.XI], fl.prototype, "AddCreatedChatRoomGroup", null);
Cg([o.XI], fl.prototype, "AddKnownChatRoomGroup", null);
Cg([o.XI], fl.prototype, "AddJoinedChatRoomGroup", null);
Cg([o.XI], fl.prototype, "RemoveChatRoomGroup", null);
Cg([o.EW], fl.prototype, "currentChatRoomGroups", null);
Cg([o.EW], fl.prototype, "ClanChatRooms", null);
