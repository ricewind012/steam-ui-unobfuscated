import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./44846.js";
import s from "./44234.js";
export class w {
	m_strInviteCode;
	m_bReady = false;
	m_bValid = false;
	m_ulChatRoomGroupID;
	m_ulChatID;
	m_unAccountIDInviter;
	m_rtTimeExpires;
	m_bIsBanned;
	m_rtKickExpires;
	constructor(e) {
		Gn(this);
		this.m_strInviteCode = e;
	}
	BIsReady() {
		return this.m_bReady;
	}
	BIsValid() {
		return this.m_bValid;
	}
	BIsInviteLink() {
		return !!this.m_strInviteCode;
	}
	GetInviteCode() {
		return this.m_strInviteCode;
	}
	BNeverExpires() {
		return this.m_rtTimeExpires == a.TQ;
	}
	GetChatRoomGroupID() {
		return this.m_ulChatRoomGroupID;
	}
	BIsVoiceChatInvite() {
		return !!this.m_ulChatID;
	}
	GetChatID() {
		return this.m_ulChatID;
	}
	GetURL() {
		if (this.m_strInviteCode) {
			return u(this.m_strInviteCode);
		} else {
			return null;
		}
	}
	BIsUserBanned() {
		return this.m_bIsBanned;
	}
	GetTimeKickExpires() {
		return this.m_rtKickExpires;
	}
	get time_expires() {
		return this.m_rtTimeExpires;
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
		this.m_rtTimeExpires = a.TQ;
		this.m_bValid = true;
		this.m_bReady = true;
	}
}
export function u(e) {
	if (s.TS.WEB_UNIVERSE == "public") {
		return `https://s.team/chat/${e}`;
	} else {
		return `${s.TS.COMMUNITY_BASE_URL}chat/invite/${e}`;
	}
}
Cg([i.sH], w.prototype, "m_bReady", undefined);
Cg([i.XI], w.prototype, "InitInvalid", null);
Cg([i.XI], w.prototype, "InitDirectInvite", null);
