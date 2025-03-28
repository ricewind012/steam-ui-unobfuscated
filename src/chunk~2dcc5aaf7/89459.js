import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./44846.js";
import s from "./95773.js";
import o from "./72476.js";
import { ESteamRealm } from "../../actual_src/clienttypes/realm.js";
const c = {
	"/me": {
		strDescriptionToken: "#SlashCommandDescription_Me",
		bAvailableInChina: true,
	},
	"/code": {
		strDescriptionToken: "#SlashCommandDescription_Code",
		bAvailableInChina: true,
	},
	"/pre": {
		strDescriptionToken: "#SlashCommandDescription_Pre",
		bAvailableInChina: true,
	},
	"/giphy": {
		strDescriptionToken: "#SlashCommandDescription_Giphy",
		bAvailableInChina: false,
	},
	"/spoiler": {
		strDescriptionToken: "#SlashCommandDescription_Spoiler",
		bAvailableInChina: true,
	},
	"/quote": {
		strDescriptionToken: "#SlashCommandDescription_Quote",
		bAvailableInChina: true,
	},
	"/random": {
		strDescriptionToken: "#SlashCommandDescription_Random",
		unExpectedArguments: [1, 2],
		bAvailableInChina: true,
	},
	"/flip": {
		strDescriptionToken: "#SlashCommandDescription_Flip",
		unExpectedArguments: 0,
		bAvailableInChina: true,
	},
	"/store": {
		strDescriptionToken: "#SlashCommandDescription_Store",
		bAvailableInChina: false,
	},
};
let m = null;
function u() {
	if (m == null) {
		m = {};
		for (let e in c) {
			let c_e = c[e];
			if (
				o.TS.EREALM != ESteamRealm.k_ESteamRealmChina ||
				c_e.bAvailableInChina
			) {
				m[e] = c_e;
			}
		}
	}
	return m;
}
export function MC() {
	return Object.keys(u());
}
export function K(e) {
	return u()[e];
}
export let $F;
export let oO;
export let Bm;
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.Deleting = 1)] = "Deleting";
	e[(e.Deleted = 2)] = "Deleted";
})(($F ||= {}));
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.Animating = 1)] = "Animating";
})((oO ||= {}));
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.Generic = 1)] = "Generic";
	e[(e.NotFriends = 2)] = "NotFriends";
	e[(e.NoChatPermissionInGroup = 3)] = "NoChatPermissionInGroup";
	e[(e.RateLimitExceeded = 4)] = "RateLimitExceeded";
})((Bm ||= {}));
export class D8 {
	unAccountID;
	rtTimestamp = undefined;
	unOrdinal = 0;
	strMessageInternal;
	eDeleteState = $F.None;
	eAnimationState = oO.None;
	eServerMsgType;
	strServerMsgParam;
	unServerMsgParamAccountID;
	strServerMsgAppCustomLocalized = undefined;
	m_strSlashCommand;
	m_bNoUserContent;
	m_mentions;
	m_rgReactions = undefined;
	constructor(e, t, r, n, a = [], s, o, l) {
		Gn(this);
		this.unAccountID = e;
		this.rtTimestamp = t;
		this.unOrdinal = r || 0;
		this.m_rgReactions = a;
		if (n && n.length > 13000) {
			this.strMessageInternal = n.substr(0, 13000);
		} else {
			this.strMessageInternal = n;
		}
		this.m_strSlashCommand = ((e) => {
			if (!e) {
				return null;
			}
			const [t, ...r] = e.split(/\s/);
			let n = u();
			if (n[t]) {
				const e = n[t].unExpectedArguments;
				if (
					e === undefined ||
					(typeof e == "number" ? e === r.length : e.includes(r.length))
				) {
					return t;
				}
			}
			return null;
		})(n);
		this.strMessageInternal = this.HandleSpecialMessage(
			this.strMessageInternal,
		);
		if (s !== undefined) {
			this.eServerMsgType = s;
			this.strServerMsgParam = o;
			this.unServerMsgParamAccountID = l;
		}
	}
	get strMessage() {
		return this.strMessageInternal;
	}
	UniqueKey() {
		if (this.unOrdinal) {
			return `${this.rtTimestamp}_${this.unOrdinal}`;
		} else {
			return this.rtTimestamp;
		}
	}
	set Mentions(e) {
		this.m_mentions = e;
	}
	get Mentions() {
		return this.m_mentions || {};
	}
	BIsLocalEcho() {
		return false;
	}
	BHasServerAcknowledged() {
		return true;
	}
	get eErrorSending() {
		return Bm.None;
	}
	BIsServerMessage() {
		return this.eServerMsgType != null && this.eServerMsgType != 0;
	}
	BIsInvite() {
		return this.eServerMsgType == 5;
	}
	GetSlashCommand() {
		return this.m_strSlashCommand;
	}
	BIsOlderThan(e) {
		return (
			this.rtTimestamp < e.rtTimestamp ||
			(this.rtTimestamp == e.rtTimestamp && this.unOrdinal < e.unOrdinal)
		);
	}
	BIsNewerThan(e) {
		return (
			this.rtTimestamp > e.rtTimestamp ||
			(this.rtTimestamp == e.rtTimestamp && this.unOrdinal > e.unOrdinal)
		);
	}
	HasUserContent() {
		return !this.m_bNoUserContent;
	}
	HandleSpecialMessage(e) {
		if (e == "+1") {
			this.m_bNoUserContent = true;
			return "[plusone][/plusone]";
		} else {
			return e;
		}
	}
	OnAnimationEnd() {
		this.eAnimationState = oO.None;
	}
	UpdateReaction(e, t, r, n) {
		const i = this.m_rgReactions.findIndex((e) => e.strReaction === t);
		if (i === -1) {
			if (r > 0) {
				const i = {
					eReactionType: e,
					strReaction: t,
					cReactors: r,
					bUserReacted: n,
				};
				this.m_rgReactions.push(i);
				return i;
			}
			console.error("Did not find reaction we wanted to remove");
			return null;
		}
		if (r === 0) {
			this.m_rgReactions.splice(i, 1);
			return null;
		} else {
			this.m_rgReactions[i].cReactors = r;
			this.m_rgReactions[i].bUserReacted = n;
			return this.m_rgReactions[i];
		}
	}
	get reactions() {
		return this.m_rgReactions;
	}
}
Cg([i.sH], D8.prototype, "rtTimestamp", undefined);
Cg([i.sH], D8.prototype, "unOrdinal", undefined);
Cg([i.sH], D8.prototype, "eDeleteState", undefined);
Cg([i.sH], D8.prototype, "eAnimationState", undefined);
Cg([i.sH], D8.prototype, "strServerMsgAppCustomLocalized", undefined);
Cg([i.sH], D8.prototype, "m_rgReactions", undefined);
export class Lx extends D8 {
	eErrorSendingObservable = Bm.None;
	strMessageObservable = undefined;
	m_iLocalEchoID;
	m_bServerAcknowledged = false;
	static sm_iLocalEchoID = 0;
	constructor(e, t, r) {
		super(e, t, -1, r);
		Gn(this);
		this.strMessageObservable = this.HandleSpecialMessage(r);
		this.m_iLocalEchoID = Lx.sm_iLocalEchoID++;
	}
	get strMessage() {
		return this.strMessageObservable;
	}
	set strMessage(e) {
		this.strMessageObservable = this.HandleSpecialMessage(e);
	}
	get eErrorSending() {
		return this.eErrorSendingObservable;
	}
	SetErrorSending(e) {
		this.eErrorSendingObservable = e;
	}
	BIsLocalEcho() {
		return true;
	}
	UniqueKey() {
		if (this.m_bServerAcknowledged) {
			return super.UniqueKey();
		} else {
			return `localecho_${this.m_iLocalEchoID}`;
		}
	}
	BHasServerAcknowledged() {
		return this.m_bServerAcknowledged;
	}
	OnServerAcknowledged() {
		this.m_bServerAcknowledged = true;
	}
}
Cg([i.sH], Lx.prototype, "eErrorSendingObservable", undefined);
Cg([i.sH], Lx.prototype, "strMessageObservable", undefined);
Cg([i.sH], Lx.prototype, "m_bServerAcknowledged", undefined);
Cg([i.XI], Lx.prototype, "OnServerAcknowledged", null);
export class $G extends D8 {
	static m_nOrdinal = 0;
	constructor(e, t, r) {
		super(e, t, ++$G.m_nOrdinal, r);
	}
}
export class on extends D8 {
	static m_nOrdinal = 0;
	constructor(e, t, r) {
		super(e, t, ++on.m_nOrdinal, r);
	}
}
export function $T(e) {
	switch (e) {
		case 1:
		case 5:
		case 2:
		case 3:
		case 4:
		case 9:
		case 10:
		case 11: {
			return true;
		}
	}
	return false;
}
export class _ {
	m_rgMessageBlocks = i.sH.array([], {
		deep: false,
	});
	m_iIndexLastTimePassesGap = undefined;
	constructor() {
		Gn(this);
		this.Clear();
	}
	get message_blocks() {
		return this.m_rgMessageBlocks;
	}
	get time_passes_index() {
		return this.m_iIndexLastTimePassesGap;
	}
	Clear() {
		this.m_rgMessageBlocks.clear();
		this.m_rgMessageBlocks.push(new w());
		this.m_iIndexLastTimePassesGap = undefined;
	}
	AppendMessage(e) {
		let t = this.m_rgMessageBlocks[this.m_rgMessageBlocks.length - 1];
		if (!t.BCanAccumulateMessage(e)) {
			let r = t;
			t = new w();
			this.m_rgMessageBlocks.push(t);
			r.SetNextBlock(t);
			if (e.rtTimestamp - r.GetRTimeLastMessage() >= 3600) {
				if (
					r.GetRTimeMidnightBeforeBlock() ==
					s.xm.GetLocalMidnightInRTime32(e.rtTimestamp)
				) {
					this.m_iIndexLastTimePassesGap = this.m_rgMessageBlocks.length - 1;
				} else {
					this.m_iIndexLastTimePassesGap = undefined;
				}
			}
		}
		t.AppendMessage(e);
	}
	BuildMessageBlocks(e) {
		this.Clear();
		for (let t of e) {
			this.AppendMessage(t);
		}
	}
	AppendNewMessage(e) {
		this.AppendMessage(e);
	}
	RemoveLocalMessage(e) {
		for (const t of this.m_rgMessageBlocks) {
			if (t.RemoveLocalMessage(e)) {
				return true;
			}
		}
		return false;
	}
	RemoveOldestMessages(e) {
		let t = 0;
		while (e > 0 && !(t >= this.m_rgMessageBlocks.length)) {
			let r = this.m_rgMessageBlocks[t].messages;
			if (r.length > e) {
				break;
			}
			e -= r.length;
			t++;
		}
		if (t == 0) {
			return null;
		}
		let r = null;
		for (let e = t - 1; e >= 0; e--) {
			let t = this.m_rgMessageBlocks[e].messages;
			if (t.length != 0) {
				r = t[t.length - 1];
				break;
			}
		}
		this.m_rgMessageBlocks.splice(0, t);
		return r;
	}
}
Cg([i.sH], _.prototype, "m_iIndexLastTimePassesGap", undefined);
Cg([i.XI], _.prototype, "BuildMessageBlocks", null);
Cg([i.XI], _.prototype, "AppendNewMessage", null);
Cg([i.XI], _.prototype, "RemoveLocalMessage", null);
Cg([i.XI], _.prototype, "RemoveOldestMessages", null);
class w {
	constructor() {
		Gn(this);
	}
	m_rgMessages = [];
	m_nextBlock = undefined;
	m_rtMidnightBeforeBlock;
	m_bMessageBlockIsOnlyEmotes = true;
	CreateVirtualSplitOnTimestamp(e) {
		let t = new w();
		let r = new w();
		t.SetNextBlock(r);
		r.SetNextBlock(this.m_nextBlock);
		for (let n of this.m_rgMessages) {
			if (n.rtTimestamp < e) {
				t.AppendMessage(n);
			} else {
				r.AppendMessage(n);
			}
		}
		return [t, r];
	}
	UniqueKey() {
		if (this.m_rgMessages.length) {
			return this.m_rgMessages[0].UniqueKey();
		} else {
			return "EmptyBlock";
		}
	}
	get messages() {
		return this.m_rgMessages;
	}
	SetNextBlock(e) {
		this.m_nextBlock = e;
	}
	get is_last_block() {
		return this.m_nextBlock === undefined;
	}
	GetRTimeMidnightBeforeBlock() {
		return this.m_rtMidnightBeforeBlock;
	}
	GetRTimeMidnightBeforeNextBlock() {
		if (this.m_nextBlock) {
			return this.m_nextBlock.GetRTimeMidnightBeforeBlock();
		} else {
			return s.xm.GetLocalMidnightInRTime32();
		}
	}
	GetRTimeLastMessage() {
		if (this.m_rgMessages.length) {
			return this.m_rgMessages[this.m_rgMessages.length - 1].rtTimestamp;
		} else {
			return a.TQ;
		}
	}
	GetRTimeFirstMessage() {
		if (this.m_rgMessages.length) {
			return this.m_rgMessages[0].rtTimestamp;
		} else {
			return 0;
		}
	}
	AppendMessage(e) {
		if (e.GetSlashCommand() !== "/me") {
			this.m_bMessageBlockIsOnlyEmotes = false;
		}
		if (!this.m_rgMessages.length) {
			this.m_rtMidnightBeforeBlock = s.xm.GetLocalMidnightInRTime32(
				e.rtTimestamp,
			);
		}
		this.m_rgMessages.push(e);
	}
	BCanAccumulateMessage(e) {
		if (!this.m_rgMessages.length) {
			return true;
		}
		let t = this.m_rgMessages[0].unAccountID;
		let r = this.m_rgMessages[this.m_rgMessages.length - 1].rtTimestamp;
		let n = this.m_rgMessages[this.m_rgMessages.length - 1];
		return (
			e.BIsServerMessage() == this.m_rgMessages[0].BIsServerMessage() &&
			((!!e.BIsServerMessage() &&
				!e.BIsInvite() &&
				!this.m_rgMessages[0].BIsInvite()) ||
				(!!t &&
					t == e.unAccountID &&
					e.BIsInvite() == this.m_rgMessages[0].BIsInvite() &&
					!(e.rtTimestamp - r > 300) &&
					(!this.m_bMessageBlockIsOnlyEmotes ||
						e.GetSlashCommand() === "/me") &&
					!(e instanceof $G) &&
					!(n instanceof $G) &&
					!(
						s.xm.GetLocalMidnightInRTime32(e.rtTimestamp) >
						this.m_rtMidnightBeforeBlock
					) &&
					!(e instanceof on) &&
					!(n instanceof on)))
		);
	}
	BIsInvite() {
		return this.m_rgMessages.length > 0 && this.m_rgMessages[0].BIsInvite();
	}
	BIsServerMsg() {
		return (
			this.m_rgMessages.length > 0 &&
			this.m_rgMessages[0].BIsServerMessage() &&
			!this.m_rgMessages[0].BIsInvite()
		);
	}
	BIsLocalMsg() {
		return this.m_rgMessages.length > 0 && this.m_rgMessages[0] instanceof on;
	}
	RemoveLocalMessage(e) {
		const t = this.m_rgMessages.findIndex(
			(t) => t.BIsLocalEcho() && t.UniqueKey() === e.UniqueKey(),
		);
		return t !== -1 && (this.m_rgMessages.splice(t, 1), true);
	}
}
Cg([i.sH.shallow], w.prototype, "m_rgMessages", undefined);
Cg([i.sH.shallow], w.prototype, "m_nextBlock", undefined);
Cg([i.XI], w.prototype, "CreateVirtualSplitOnTimestamp", null);
