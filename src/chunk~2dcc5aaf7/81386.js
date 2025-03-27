import {
	MoveElement,
	FindAndRemoveWhere,
	CountMatches,
} from "../../actual_src/utils/arrayutils.js";
import { Cg } from "./34629.js";
import i from "./12176.js";
import a from "./26052.js";
import s from "./95773.js";
import o, { Gn, z7 } from "./89193.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
export function f(e, t) {
	return (
		e == t ||
		(e && t && e.friend == t.friend && e.clan == t.clan && e.chat == t.chat)
	);
}
export class x {
	m_FriendStore;
	m_ClanStore;
	m_ChatStore;
	m_CMInterface;
	m_rgFavorites = o.sH.array();
	constructor(e) {
		Gn(this);
		this.m_FriendStore = e;
		this.m_ClanStore = e.ClanStore;
	}
	Init(e) {
		this.m_CMInterface = e;
		this.m_ChatStore = s.xm.ChatStore;
		this.m_CMInterface.AddOnLogonCallback(() => {
			let e = i.w.Init(a.J3);
			a.DF.GetFavorites(this.m_CMInterface.GetServiceTransport(), e).then(
				(e) => {
					if (e.GetEResult() == 1) {
						this.RecvFavoritesList(e.Body().favorites());
					}
				},
			);
		}, 47);
		this.m_CMInterface.messageHandlers.RegisterServiceNotificationHandlerAction(
			a.AJ.FavoritesChangedHandler,
			(e) => {
				this.RecvFavoritesList(e.Body().favorites());
				return 1;
			},
		);
	}
	BIsFavorited(e) {
		for (let t of this.m_rgFavorites) {
			if (f(t, e)) {
				return true;
			}
		}
		return false;
	}
	get favorites() {
		return this.m_rgFavorites;
	}
	AddToFavorites(e, t) {
		let r = this.m_rgFavorites.findIndex((t) => f(t, e));
		if (r === -1 || (t !== undefined && r !== t)) {
			if (r !== -1) {
				MoveElement(this.m_rgFavorites, r, t > r ? t - 1 : t);
			} else if (t !== undefined) {
				this.m_rgFavorites.splice(t, 0, e);
			} else {
				this.m_rgFavorites.push(e);
			}
			return this.SaveFavorites();
		} else {
			return Promise.resolve(true);
		}
	}
	RemoveFromFavorites(e) {
		if (FindAndRemoveWhere(this.m_rgFavorites, (t) => f(t, e))) {
			return this.SaveFavorites();
		} else {
			return Promise.resolve(true);
		}
	}
	OnFriendRemoved(e) {
		let t = this.m_FriendStore.GetPlayer(e);
		this.RemoveFromFavorites({
			friend: t,
		});
	}
	SaveFavorites() {
		let e = i.w.Init(a.n_);
		for (let t of this.m_rgFavorites) {
			let r = e.Body().add_favorites();
			if (t.friend) {
				r.set_accountid(t.friend.accountid);
			} else if (t.clan) {
				r.set_clanid(t.clan.clanid);
			} else if (t.chat) {
				r.set_chat_group_id(t.chat.GetGroupID());
			} else {
				AssertMsg(false, "empty favorite struct");
			}
		}
		return a.DF.SetFavorites(this.m_CMInterface.GetServiceTransport(), e).then(
			(e) => e.GetEResult() == 1,
		);
	}
	ReadFavorites(e) {
		this.m_rgFavorites.clear();
		for (let t of e) {
			if (t.accountid()) {
				let e = this.m_FriendStore.GetFriend(t.accountid());
				if (e) {
					this.m_rgFavorites.push({
						friend: e,
					});
				}
			} else if (t.clanid()) {
				let e = this.m_ClanStore.GetClan(t.clanid());
				if (e) {
					this.m_rgFavorites.push({
						clan: e,
					});
				}
			} else if (t.chat_group_id()) {
				let e = this.m_ChatStore.GetChatRoomGroup(t.chat_group_id());
				if (e) {
					this.m_rgFavorites.push({
						chat: e,
					});
				}
			}
		}
	}
	RecvFavoritesList(e) {
		z7(
			() =>
				this.m_FriendStore.friends_list_ready &&
				this.m_ChatStore.chat_group_list_ready,
			this.ReadFavorites.bind(this, e),
		);
	}
	FillInChatUsabilityMetrics(e) {
		e.metrics().set_friends_favorite_count(
			CountMatches(this.m_rgFavorites, (e) => !!e.friend),
		);
		e.metrics().set_group_chat_favorite_count(
			CountMatches(this.m_rgFavorites, (e) => !!e.chat || !!e.clan),
		);
	}
}
Cg([o.XI], x.prototype, "AddToFavorites", null);
Cg([o.XI], x.prototype, "RemoveFromFavorites", null);
Cg([o.XI], x.prototype, "OnFriendRemoved", null);
Cg([o.XI], x.prototype, "ReadFavorites", null);
