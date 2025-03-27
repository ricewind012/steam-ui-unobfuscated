import { Seconds } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i from "./44234.js";
import a, { $T } from "./89459.js";
import s, { Hd } from "./50979.js";
import _o, { Gn, h5 } from "./89193.js";
import l from "./44846.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import m from "./83599.js";
import p from "./95773.js";
class d {
	static k_QueueForEffect = {
		snowball: "snowball",
		snow: "confetti_snow",
		confetti: "confetti_snow",
		goldfetti: "confetti_snow",
		firework: "festive",
		balloons: "festive",
		lny2020_lanterns: "festive",
		lny2020_firework: "festive",
		lny2020_confetti: "confetti_snow",
	};
	name;
	timestamp;
	expires;
	settings;
	constructor(e, t) {
		if (!t.hasOwnProperty(e)) {
			throw new Error(`Room effect ${e} is not defined.`);
		}
		this.name = e;
		this.timestamp = Date.now();
		this.settings = t[e];
		this.expires = this.timestamp + this.settings.timeout;
	}
	static QueueFor(e) {
		return d.k_QueueForEffect[e];
	}
	Queue() {
		return d.k_QueueForEffect[this.name];
	}
	bIsExpired() {
		return Date.now() > this.expires;
	}
	bIsActive() {
		const e = Date.now();
		return this.timestamp <= e && this.expires > e;
	}
	iTimeToExpiry() {
		return this.expires - Date.now();
	}
	render() {
		if (this.bIsActive()) {
			return this.settings.render(this);
		} else {
			return null;
		}
	}
}
class A {
	static k_MaxRoomEffectRunning = {
		default: 1,
		snowball: 10,
		confetti_snow: 3,
		festive: 10,
	};
	m_mapRoomEffectQueue = {
		default: [],
		snowball: [],
		confetti_snow: [],
		festive: [],
	};
	m_effectSettings;
	m_rgRunningEffects = [];
	constructor(e) {
		Gn(this);
		this.m_effectSettings = e;
	}
	AddRoomEffect(e) {
		this.QueueRoomEffect(e);
		this.UpdateRunningRoomEffects();
	}
	QueueRoomEffect(e) {
		this.m_mapRoomEffectQueue[d.QueueFor(e)].push(e);
	}
	ActivateRoomEffect(e) {
		try {
			const t = new d(e, this.m_effectSettings);
			this.m_rgRunningEffects.push(t);
			window.setTimeout(() => {
				this.UpdateRunningRoomEffects();
			}, t.iTimeToExpiry() + 100);
		} catch (e) {
			console.log(e);
		}
	}
	BIsQueueFull(e) {
		return (
			this.m_rgRunningEffects.filter((t) => t.Queue() == e).length >=
			A.k_MaxRoomEffectRunning[e]
		);
	}
	UpdateRunningRoomEffects() {
		this.m_rgRunningEffects = this.m_rgRunningEffects.filter(
			(e) => !e.bIsExpired(),
		);
		for (let e in this.m_mapRoomEffectQueue) {
			const t = e;
			while (this.m_mapRoomEffectQueue[t].length > 0 && !this.BIsQueueFull(t)) {
				this.ActivateRoomEffect(this.m_mapRoomEffectQueue[t].shift());
			}
		}
	}
}
Cg([_o.sH], A.prototype, "m_rgRunningEffects", undefined);
const Seconds_PerMinute = Seconds.PerMinute;
const h = Seconds.PerHour * 6;
export class o {
	BASELOG = new m.wd("Chat", () => this.unique_id).Debug;
	m_FriendStore;
	m_ChatStore;
	m_CMInterface;
	m_rgChatViews = [];
	m_bChatLogsLoaded = false;
	m_bReceivedChatLogs = false;
	static k_InitialMessageCount = 100;
	static k_KeepLoadedWhenAtScrollBottom = o.k_InitialMessageCount * 2;
	static k_LoadMoreMessageCount = 50;
	m_bMoreAvailable = false;
	m_nLoadingHistoryInProgressCount = 0;
	m_rgChatMessages = [];
	m_ChatMessageBlockList = new a._();
	m_cUnreadChatMessages = 0;
	m_bHasUnreadPriorityChatMessages = false;
	m_rtFirstUnreadChatMsg = 0;
	m_rtLastAckedChatMsg = 0;
	m_rtLastServerAckedChatMsg = 0;
	m_rtLastMessageReceived = 0;
	m_rtLastServerMessageReceived = 0;
	m_strLastMessage = undefined;
	m_accountIDLastMessage = undefined;
	m_rtFirstUnread = 0;
	m_chatRoomEffects;
	m_oldestMessageTime;
	m_oldestMessageOrdinal;
	m_msTimeActivated = 0;
	m_setInflightClientMessageID = new Set();
	m_MessageSendQueue;
	constructor(e, t, r) {
		Gn(this);
		this.m_FriendStore = e;
		this.m_ChatStore = t;
		this.m_CMInterface = r;
		this.m_chatRoomEffects = new A(t.ChatRoomEffectSettings);
	}
	UnloadChatState() {
		this.UnloadActiveChatState();
		this.m_rtLastMessageReceived = 0;
		this.m_rtLastServerMessageReceived = 0;
	}
	UnloadActiveChatState() {
		this.m_rgChatMessages = [];
		this.m_ChatMessageBlockList.Clear();
		this.m_bChatLogsLoaded = false;
		this.m_bReceivedChatLogs = false;
	}
	m_bPrepended = false;
	get BIsPrepend() {
		return this.m_bPrepended;
	}
	ResetPrepended() {
		this.m_bPrepended = false;
	}
	OnTyping() {}
	get is_friend_typing() {
		return false;
	}
	OnReceivedNewMessage(e, t, r, n) {}
	BShouldTrackUnreadMessages() {
		return true;
	}
	BIsVoiceAllowed() {
		return true;
	}
	GetVoiceNotAllowedReason() {
		return null;
	}
	async SendChatMessage(e) {
		const t = this.m_MessageSendQueue.Add(e);
		try {
			const r = await this.SendChatMessageInternal(e);
			if (r === a.Bm.None) {
				this.m_MessageSendQueue.RemoveItem(t);
			} else {
				this.m_MessageSendQueue.SetItemFailed(t, r);
			}
		} catch (e) {
			this.m_MessageSendQueue.SetItemFailed(t, a.Bm.Generic);
		}
	}
	async SendWithRetries(e, t) {
		let r = 1;
		const n = Date.now();
		while (Date.now() - Seconds_PerMinute * 1000 < n) {
			try {
				const n = await t();
				if (n.GetEResult() === 1) {
					return h5(() => {
						e.rtTimestamp = n.Body().server_timestamp();
						e.unOrdinal = n.Body().ordinal() || 0;
						this.OnUserChatEcho(
							e.rtTimestamp,
							e.unOrdinal,
							e.strMessage,
							n.Body().message_without_bb_code() || e.strMessage,
						);
						let t = n.Body().modified_message();
						if (t) {
							this.m_ChatStore.EmoticonStore.TrackEmoticonUsage(
								t,
								e.rtTimestamp,
							);
							e.strMessage = t;
							this.m_strLastMessage = t;
							this.m_accountIDLastMessage = this.m_FriendStore.self.accountid;
							this.AddRoomEffectIfNeeded(t);
						}
						e.OnServerAcknowledged();
						return a.Bm.None;
					});
				}
				switch (n.GetEResult()) {
					case 15: {
						e.SetErrorSending(a.Bm.NotFriends);
						return e.eErrorSending;
					}
					case 84: {
						e.SetErrorSending(a.Bm.RateLimitExceeded);
						return e.eErrorSending;
					}
					default: {
						if (n.Hdr().transport_error() === 3) {
							e.SetErrorSending(a.Bm.Generic);
							return e.eErrorSending;
						}
						console.warn(
							`Error sending message (Attempt #${r}). Got EResult ${n.GetEResult()}`,
						);
					}
				}
			} catch (e) {
				console.warn(`Error sending message (Attempt #${r}). Got error ${e}`);
			}
			const n = 2 ** (r - 1) * 1;
			await new Promise((e) => setTimeout(e, n * 1000));
			r++;
		}
		e.SetErrorSending(a.Bm.Generic);
		return e.eErrorSending;
	}
	InitMessageSessionFromServer(e, t, r) {
		if (this.GetVisibilityState() !== 4) {
			this.m_cUnreadChatMessages = e;
		}
		this.m_bHasUnreadPriorityChatMessages = false;
		this.m_rtLastAckedChatMsg = t;
		this.m_rtLastServerAckedChatMsg = t;
		this.m_rtLastMessageReceived = r;
		if (this.m_rtLastAckedChatMsg < this.m_rtLastMessageReceived) {
			this.m_rtFirstUnreadChatMsg = this.m_rtLastAckedChatMsg + 1;
		}
	}
	AddChatView(e) {
		this.m_rgChatViews.push(e);
	}
	RemoveChatView(e) {
		let t = this.m_rgChatViews.indexOf(e);
		if (t != -1) {
			this.m_rgChatViews.splice(t, 1);
		}
	}
	IsMoreHistoryAvailable() {
		return this.m_bMoreAvailable;
	}
	RoomEffectManager() {
		return this.m_chatRoomEffects;
	}
	InternalLoadChatLogs(e = false) {
		let t;
		let r;
		let n;
		let i;
		if (e) {
			let e = this.GetMostRecentChatMsg();
			if (e) {
				t = e.rtTimestamp;
				r = e.unOrdinal;
			} else {
				t = l.ME;
				r = 0;
			}
		} else {
			t = l.ME;
			r = 0;
		}
		n = l.TQ;
		i = 0;
		this.m_nLoadingHistoryInProgressCount += 1;
		return this.GetMessagesFromTimeRange(t, r, n, 0, o.k_InitialMessageCount)
			.then(({ messages: e, moreAvailable: t }) => {
				this.AddMessagesToHistory(e, t);
				this.m_nLoadingHistoryInProgressCount -= 1;
				this.m_bReceivedChatLogs = true;
			})
			.catch((e) => {
				this.m_nLoadingHistoryInProgressCount -= 1;
				return Promise.reject(e);
			});
	}
	LoadMoreHistory() {
		if (this.m_nLoadingHistoryInProgressCount != 0) {
			return Promise.resolve(true);
		} else {
			this.m_nLoadingHistoryInProgressCount += 1;
			return this.GetMessagesFromTimeRange(
				l.ME,
				0,
				this.m_oldestMessageTime,
				this.m_oldestMessageOrdinal,
				o.k_LoadMoreMessageCount,
			)
				.then(({ messages: e, moreAvailable: t }) => {
					this.AddMessagesToHistory(e, t);
					this.m_nLoadingHistoryInProgressCount -= 1;
					return true;
				})
				.catch((e) => {
					this.m_nLoadingHistoryInProgressCount -= 1;
					return Promise.reject(e);
				});
		}
	}
	AddMessagesToHistory(e, t) {
		this.BASELOG(`merging ${e.length} messages`);
		this.MergeChatHistoryChunk(e);
		this.BASELOG(`${this.m_rgChatMessages.length} total messages`);
		this.m_bMoreAvailable = t;
		this.BASELOG(
			`friend chat oldest time ${this.m_oldestMessageTime} oldest ordinal ${this.m_oldestMessageOrdinal} bMoreAvailable ${this.m_bMoreAvailable}`,
		);
	}
	get ChatStore() {
		return this.m_ChatStore;
	}
	OnActivate() {
		if (this.m_cUnreadChatMessages || this.m_bHasUnreadPriorityChatMessages) {
			this.m_cUnreadChatMessages = 0;
			this.m_bHasUnreadPriorityChatMessages = false;
			if (this.m_rtLastMessageReceived) {
				this.m_rtLastAckedChatMsg = this.m_rtLastMessageReceived;
				this.AckChatMsg(this.m_rtLastMessageReceived);
			}
			p.xm.FriendStore.UpdateUnreadMessagesGlobal();
			p.xm.UIStore.FlashChatWindow(this, false);
		}
	}
	OnDeactivate() {
		this.m_rtFirstUnreadChatMsg = 0;
	}
	get self() {
		return this.m_FriendStore.self;
	}
	InternalAppendChatMsg(e) {
		if (this.m_rgChatViews.length != 0 || this.m_bChatLogsLoaded) {
			if (!this.HasChatMessage(e.rtTimestamp, e.unOrdinal)) {
				this.m_rgChatMessages.push(e);
				this.m_ChatMessageBlockList.AppendNewMessage(e);
				this.TrimLogsIfPossible();
			}
		}
	}
	TrimLogsIfPossible() {
		let e = this.m_rgChatMessages.length - o.k_KeepLoadedWhenAtScrollBottom;
		if (e <= 0) {
			return;
		}
		for (let e of this.m_rgChatViews) {
			if (!e.is_scrolled_to_bottom) {
				return;
			}
		}
		let t = this.m_ChatMessageBlockList.RemoveOldestMessages(e);
		if (!t) {
			return;
		}
		let r = this.m_rgChatMessages.indexOf(t);
		if (r < 0) {
			AssertMsg(false, "Failed to find message being removed");
		} else {
			this.m_rgChatMessages.splice(0, r + 1);
		}
	}
	HasChatMessage(e, t) {
		for (let r = this.m_rgChatMessages.length - 1; r >= 0; r--) {
			let n = this.m_rgChatMessages[r];
			if (n.rtTimestamp == e && n.unOrdinal == t) {
				return true;
			}
		}
		return false;
	}
	HasClientMessageInFlight(e) {
		return this.m_setInflightClientMessageID.has(e);
	}
	AppendChatMsg(e, t, r, n) {
		let i = new a.D8(e, t, r, n);
		i.eAnimationState = a.oO.Animating;
		this.InternalAppendChatMsg(i);
		return i;
	}
	AppendLocalEchoChatMsg(e) {
		let t = new a.Lx(this.self.accountid, p.xm.GetServerRTime32(), e);
		t.eAnimationState = a.oO.Animating;
		this.InternalAppendChatMsg(t);
		return t;
	}
	RemoveMessage(e) {
		const t = this.m_rgChatMessages.findIndex(
			(t) => t.UniqueKey() === e.UniqueKey(),
		);
		if (t === -1) {
			console.warn("Could not find message to remove.");
		} else {
			this.m_rgChatMessages.splice(t, 1);
		}
		this.m_ChatMessageBlockList.RemoveLocalMessage(e);
		this.TrimLogsIfPossible();
	}
	RetryFailedMessage(e) {
		if (e.eErrorSending !== a.Bm.None) {
			this.RemoveMessage(e);
			this.SendChatMessage(e.strMessage);
		} else {
			console.log(
				"RetryFailedMessage called with a non-failed message. Ignoring.",
			);
		}
	}
	AddNewChatMsgAndNotify(e, t, r, n, i, a) {
		let s = this.AppendChatMsg(e, t, r, n);
		s.Mentions = a;
		this.OnNewChatMsgAdded(e, t, r, n);
		let o = i !== undefined;
		this.CheckShouldNotify(s, o ? i : n, n);
		this.AddRoomEffectIfNeeded(s.strMessage);
	}
	AddRoomEffectIfNeeded(e) {
		const t = Hd(e);
		if (t && t[0] && t[0].tag === "roomeffect") {
			this.m_chatRoomEffects.AddRoomEffect(t[0].args.type);
		}
	}
	UpdateChatMessageDeletedState(e, t) {
		for (let r of this.m_rgChatMessages) {
			for (let n of e) {
				if (
					r.rtTimestamp == n.rtTimestamp &&
					r.unOrdinal == n.unOrdinal &&
					r.eDeleteState != a.$F.Deleted
				) {
					r.eDeleteState = t;
				}
			}
		}
	}
	BShouldSilentlyAddMessage(e) {
		return false;
	}
	DecorateNotification(e, t, r, n) {
		if (n !== r) {
			const r = this.m_ChatStore.NotificationBBCodeParser;
			const i = {
				chat: this,
				unAccountIDSender: e.unAccountID,
				key: e.UniqueKey(),
				rtTimestamp: e.rtTimestamp,
				onLoad: () => {},
			};
			const a = r.ParseBBCode(n, i);
			if (a) {
				return {
					...t,
					...a,
				};
			}
		}
		return t;
	}
	CheckShouldNotify(e, t, r) {
		let n = this.self.accountid == e.unAccountID;
		let i = false;
		let a = false;
		let s = this.GetVisibilityState();
		let o = this.BShouldSilentlyAddMessage(e);
		let l = e.Mentions;
		if (
			e.BIsServerMessage() &&
			!l.mention_all &&
			!l.mention_here &&
			!l.mention_user
		) {
			this.m_rtLastServerMessageReceived = e.rtTimestamp;
			return;
		}
		if (n) {
			i = true;
			a = true;
		} else if ((o && this.m_cUnreadChatMessages == 0) || s == 4) {
			i = true;
		} else if (s == 3 && this.m_cUnreadChatMessages == 0) {
			p.xm.IdleTracker.AddOnNextActivityCallback(() => {
				if (this.GetVisibilityState() == 4) {
					this.OnActivate();
				}
			});
		}
		this.m_rtLastMessageReceived = e.rtTimestamp;
		this.m_strLastMessage = e.strMessage;
		this.m_accountIDLastMessage = e.unAccountID;
		let c = this.m_cUnreadChatMessages;
		let m = this.m_bHasUnreadPriorityChatMessages;
		if (this.BShouldTrackUnreadMessages()) {
			if (i) {
				this.m_rtLastAckedChatMsg = e.rtTimestamp;
				this.m_cUnreadChatMessages = 0;
				this.m_bHasUnreadPriorityChatMessages = false;
				if (!a) {
					this.AckChatMsg(e.rtTimestamp);
				}
			} else {
				if (this.m_rtFirstUnreadChatMsg == 0) {
					this.m_rtFirstUnreadChatMsg = this.m_rtLastMessageReceived;
				}
				this.m_cUnreadChatMessages++;
			}
		}
		if (!o) {
			this.OnReceivedNewMessage(e, s, t, r);
		}
		if (
			c != this.m_cUnreadChatMessages ||
			m != this.m_bHasUnreadPriorityChatMessages
		) {
			p.xm.FriendStore.UpdateUnreadMessagesGlobal();
		}
	}
	AddVoiceChannelInviteMsg(e, t, r) {
		this.InternalAppendChatMsg(new a.$G(e, t, r));
	}
	AddLocalMsg(e, t, r) {
		this.InternalAppendChatMsg(new a.on(e, t, r));
	}
	AddNewServerMsg(e, t, r, n, i, s, o) {
		if (!$T(n)) {
			return;
		}
		let l = new a.D8(e, t, r, i, [], n, s, o);
		if (l.eServerMsgType == 11) {
			this.SetupAppCustomServerMsg(l).then((n) => {
				this.OnNewChatMsgAdded(e, t, r, n);
				this.CheckShouldNotify(l, n, l.strServerMsgAppCustomLocalized);
			});
		}
		this.InternalAppendChatMsg(l);
	}
	AckChatMsg(e) {
		if (
			this.m_cUnreadChatMessages > 0 ||
			this.m_rtLastServerAckedChatMsg != e
		) {
			this.AckChatMsgOnServer(e);
			this.m_rtLastServerAckedChatMsg = e;
		}
	}
	OnUserChatEcho(e, t, r, n) {
		if (e >= this.m_rtLastAckedChatMsg) {
			this.m_rtLastMessageReceived = e;
			this.UpdateLastAckTimeFromServer(e);
		}
		this.OnNewChatMsgAdded(this.m_FriendStore.self.accountid, e, t, r);
	}
	UpdateLastAckTimeFromServer(e) {
		if (this.m_rtLastServerAckedChatMsg <= e) {
			this.m_rtLastServerAckedChatMsg = e;
			this.m_rtLastAckedChatMsg = e;
			if (this.m_rtLastMessageReceived <= e) {
				this.m_cUnreadChatMessages = 0;
				this.m_bHasUnreadPriorityChatMessages = false;
				p.xm.FriendStore.UpdateUnreadMessagesGlobal();
				p.xm.UIStore.FlashChatWindow(this, false);
			}
		}
	}
	GetMostRecentChatMsg() {
		for (let e = this.m_rgChatMessages.length - 1; e >= 0; e--) {
			if (this.m_rgChatMessages[e].unOrdinal != -1) {
				return this.m_rgChatMessages[e];
			}
		}
		return null;
	}
	MergeChatHistoryChunk(e) {
		if (!e.length) {
			return;
		}
		let t;
		let r = e[0];
		let n = e[e.length - 1];
		let i = 0;
		for (t = this.m_rgChatMessages.length - 1; t >= 0; t--) {
			if (this.m_rgChatMessages[t].unOrdinal != -1) {
				if (this.m_rgChatMessages[t].BIsOlderThan(r)) {
					break;
				}
				if (this.m_rgChatMessages[t].BIsNewerThan(n)) {
					i++;
				}
			}
		}
		for (let t of e) {
			this.MsgLoadedFromHistory(t);
		}
		t++;
		this.m_rgChatMessages.splice(t, this.m_rgChatMessages.length - t - i, ...e);
		t = 0;
		for (
			;
			t < this.m_rgChatMessages.length &&
			this.m_rgChatMessages[t].unOrdinal == -1;
			t++
		) {}
		if (t >= this.m_rgChatMessages.length) {
			this.m_oldestMessageTime = l.TQ;
			this.m_oldestMessageOrdinal = 0;
		} else {
			this.m_oldestMessageTime = this.m_rgChatMessages[t].rtTimestamp;
			this.m_oldestMessageOrdinal = this.m_rgChatMessages[t].unOrdinal;
		}
		this.m_ChatMessageBlockList.BuildMessageBlocks(this.m_rgChatMessages);
		this.m_bPrepended = true;
	}
	InitQueuedMessages() {
		const e = this.m_MessageSendQueue.queued_messages;
		if (e.length === 0) {
			return;
		}
		const t = [];
		e.forEach(({ timestamp: e, message: r, eError: n, id: i }) => {
			if (n === undefined || n === a.Bm.None) {
				if (Date.now() - h * 1000 < e) {
					this.m_MessageSendQueue.RemoveItem(i);
					this.SendChatMessage(r);
				}
			} else {
				const i = new a.Lx(this.self.accountid, p.xm.GetServerRTime32(), r);
				i.rtTimestamp = e;
				i.SetErrorSending(n);
				t.push(i);
			}
		});
		this.MergeLocalMessages(t);
	}
	MergeLocalMessages(e) {
		e.sort((e, t) => e.rtTimestamp - t.rtTimestamp);
		const t = [];
		let r = 0;
		let n = 0;
		while (r < this.m_rgChatMessages.length || n < e.length) {
			if (r >= this.m_rgChatMessages.length) {
				t.push(e[n++]);
			} else if (n >= e.length) {
				t.push(this.m_rgChatMessages[r++]);
			} else if (this.m_rgChatMessages[r].rtTimestamp < e[n].rtTimestamp) {
				t.push(e[n++]);
			} else {
				t.push(this.m_rgChatMessages[r++]);
			}
		}
		this.m_rgChatMessages = t;
	}
	GetBeginFileUploadURL() {
		return `${i.TS.CHAT_BASE_URL}chat/beginfileupload/`;
	}
	GetCommitFileUploadURL() {
		return `${i.TS.CHAT_BASE_URL}chat/commitfileupload/`;
	}
	LogFileUploadMessage(e) {
		this.BASELOG(e);
	}
	GetMaxFileSizeMB() {
		return 30;
	}
	MsgLoadedFromHistory(e) {
		if (e.eServerMsgType == 11) {
			this.SetupAppCustomServerMsg(e);
		}
	}
	async SetupAppCustomServerMsg(e) {
		console.warn(
			"App custom server message should only be used in a class that knows what to do with it",
		);
		return "";
	}
	GetVisibilityState(e) {
		let t = 0;
		for (let r of this.m_rgChatViews) {
			if (e && !r.BIsInBrowserContext(e)) {
				continue;
			}
			let n = r.GetVisibilityState();
			if (n > t) {
				t = n;
			}
		}
		return t;
	}
	GetLastMessage() {
		return this.m_strLastMessage;
	}
	get accountid_last_message() {
		return this.m_accountIDLastMessage;
	}
	get unread_message_count() {
		return this.m_cUnreadChatMessages;
	}
	get has_unread_priority_messages() {
		return this.m_bHasUnreadPriorityChatMessages;
	}
	get first_unread_msg_time() {
		return this.m_rtFirstUnreadChatMsg;
	}
	get time_last_message() {
		return this.m_rtLastMessageReceived;
	}
	get time_last_ack() {
		return this.m_rtLastAckedChatMsg;
	}
	get chat_messages() {
		return this.m_rgChatMessages;
	}
	get chat_message_blocks() {
		return this.m_ChatMessageBlockList;
	}
	get last_voice_participation_time() {
		return this.m_rtLastAckedChatMsg;
	}
	async LoadChatLogs() {
		if (!this.m_bChatLogsLoaded && this.m_CMInterface.logged_on) {
			this.m_bChatLogsLoaded = true;
			return this.InternalLoadChatLogs(false);
		}
	}
	OnConnectionRestored() {
		if (this.m_bChatLogsLoaded) {
			this.InternalLoadChatLogs(true);
		}
	}
}
Cg([_o.sH], o.prototype, "m_bReceivedChatLogs", undefined);
Cg([_o.sH], o.prototype, "m_bMoreAvailable", undefined);
Cg([_o.sH.shallow], o.prototype, "m_rgChatMessages", undefined);
Cg([_o.sH], o.prototype, "m_cUnreadChatMessages", undefined);
Cg([_o.sH], o.prototype, "m_rtFirstUnreadChatMsg", undefined);
Cg([_o.sH], o.prototype, "m_rtLastAckedChatMsg", undefined);
Cg([_o.sH], o.prototype, "m_rtLastMessageReceived", undefined);
Cg([_o.sH], o.prototype, "m_rtLastServerMessageReceived", undefined);
Cg([_o.sH], o.prototype, "m_strLastMessage", undefined);
Cg([_o.sH], o.prototype, "m_accountIDLastMessage", undefined);
Cg([_o.sH], o.prototype, "m_rtFirstUnread", undefined);
Cg([_o.XI], o.prototype, "InitMessageSessionFromServer", null);
Cg([_o.XI], o.prototype, "AddMessagesToHistory", null);
Cg([_o.XI], o.prototype, "OnActivate", null);
Cg([_o.XI], o.prototype, "OnDeactivate", null);
Cg([_o.XI], o.prototype, "AppendChatMsg", null);
Cg([_o.XI], o.prototype, "AppendLocalEchoChatMsg", null);
Cg([_o.XI], o.prototype, "AddNewChatMsgAndNotify", null);
Cg([_o.XI], o.prototype, "UpdateChatMessageDeletedState", null);
Cg([_o.XI], o.prototype, "AddVoiceChannelInviteMsg", null);
Cg([_o.XI], o.prototype, "AddLocalMsg", null);
Cg([_o.XI], o.prototype, "AddNewServerMsg", null);
