var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require("./36383.js");
var s = require(/*webcrack:missing*/ "./12176.js");
var o = require(/*webcrack:missing*/ "./8573.js");
var l = require(/*webcrack:missing*/ "./44846.js");
var c = require("./95773.js");
var m = require("./24761.js");
import { Localize } from "../../actual_src/utils/localization.js";
class d extends m.w {
	constructor(e) {
		super(e);
		(0, i.Gn)(this);
	}
	BIsExpired() {
		return c.xm.GetServerRTime32() >= this.m_rtTimeExpires;
	}
	InitFromInviteLinkInfo(e) {
		this.m_ulChatRoomGroupID = e.group_summary().chat_group_id();
		this.m_ulChatID = e.chat_id();
		let t = new o.b(e.steamid_sender());
		if (t.BIsIndividualAccount()) {
			this.m_unAccountIDInviter = t.GetAccountID();
		}
		this.m_rtTimeExpires = e.time_expires();
		this.m_bIsBanned = e.banned();
		this.m_rtKickExpires = e.time_kick_expire();
		this.m_bValid = true;
		this.m_bReady = true;
	}
	InitInvalid() {
		this.m_bValid = false;
		this.m_bReady = true;
	}
	InitDirectInvite(e, t, r = false, n = undefined) {
		this.m_ulChatRoomGroupID = e;
		this.m_ulChatID = t;
		this.m_bIsBanned = r;
		this.m_rtKickExpires = n;
		this.m_rtTimeExpires = l.TQ;
		this.m_bValid = true;
		this.m_bReady = true;
	}
}
(0, n.Cg)([i.XI], d.prototype, "InitFromInviteLinkInfo", null);
export class oX {
	m_ChatStore;
	m_mapInviteByCode = new Map();
	constructor(e) {
		this.m_ChatStore = e;
	}
	JoinChatGroup(e, t, r) {
		let n = new d();
		n.InitDirectInvite(e, t);
		return this.AcceptInvite(n, r);
	}
	AcceptInvite(e, t) {
		if (t == null) {
			t = c.xm.GetDefaultBrowserContext();
		}
		let r = s.w.Init(a.c0);
		r.Body().set_chat_group_id(e.GetChatRoomGroupID());
		if (e.BIsInviteLink()) {
			r.Body().set_invite_code(e.GetInviteCode());
		}
		if (e.GetChatID()) {
			r.Body().set_chat_id(e.GetChatID());
		}
		return a.xP
			.JoinChatRoomGroup(this.m_ChatStore.CMInterface.GetServiceTransport(), r)
			.then((e) => {
				let r = {
					result: e.GetEResult(),
				};
				if (r.result == 1) {
					let r = this.m_ChatStore.AddJoinedChatRoomGroup(
						e.Body().state(),
						e.Body().user_chat_state(),
					);
					c.xm.UIStore.ShowAndOrActivateChatRoomGroup(t, r, true);
					let n = e.Body().join_chat_id();
					if (r) {
						let e = r.GetChatRoom(n);
						if (e) {
							e.StartVoiceChat();
						}
					}
				} else if (r.result == 15) {
					r.time = e.Body().time_expire();
				}
				return r;
			});
	}
	GetInviteFromCode(e) {
		let t = this.m_mapInviteByCode.get(e);
		if (!t) {
			t = new d(e);
			this.m_mapInviteByCode.set(e, t);
		}
		if (
			!t.BIsReady() ||
			!this.m_ChatStore.GetChatRoomGroup(t.GetChatRoomGroupID())
		) {
			let r = s.w.Init(a.NX);
			r.Body().set_invite_code(e);
			a.xP
				.GetInviteLinkInfo(
					this.m_ChatStore.CMInterface.GetServiceTransport(),
					r,
				)
				.then((e) => {
					if (e.GetEResult() == 1) {
						this.m_ChatStore.AddKnownChatRoomGroup(
							e.Body().group_summary(),
							e.Body().user_chat_group_state(),
						);
						t.InitFromInviteLinkInfo(e.Body());
					} else {
						t.InitInvalid();
					}
				});
		}
		return t;
	}
	GetDirectInviteInfo(e, t, r) {
		let n = new d();
		let i = this.m_ChatStore.GetChatRoomGroup(e);
		if (i && i.GetChatRoom(t)) {
			n.InitDirectInvite(e, t);
		} else {
			let i = s.w.Init(a.NF);
			i.Body().set_steamid_invitee(
				o.b.InitFromAccountID(r).ConvertTo64BitString(),
			);
			i.Body().set_chat_group_id(e);
			i.Body().set_chat_id(t);
			a.xP
				.GetInviteInfo(this.m_ChatStore.CMInterface.GetServiceTransport(), i)
				.then((r) => {
					if (
						r.GetEResult() != 1 ||
						!r.Body().group_summary().chat_group_id()
					) {
						console.log(
							`GetDirectInviteInfo: respose EResult ${r.GetEResult()}`,
						);
						n.InitInvalid();
						return;
					}
					this.m_ChatStore.AddKnownChatRoomGroup(
						r.Body().group_summary(),
						null,
					);
					n.InitDirectInvite(
						e,
						t,
						r.Body().banned(),
						r.Body().time_kick_expire(),
					);
				});
		}
		return n;
	}
}
export function F2(e) {
	if (e.result == 15) {
		if (e.time == 0) {
			console.log("no longer valid");
		}
		let t = c.xm.RTime32ToDate(e.time).toLocaleString([], {
			weekday: "long",
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		});
		return (0, Localize)("#ChatRoom_InviteMessage_Failed_Kicked", t);
	}
	if (e.result == 17) {
		return (0, Localize)("#ChatRoom_InviteMessage_Failed_Banned");
	} else if (e.result == 42) {
		return (0, Localize)("#ChatRoom_InviteMessage_Not_Found");
	} else {
		return null;
	}
}
