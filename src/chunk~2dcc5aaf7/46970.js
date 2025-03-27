import {
	FindAndRemove,
	CountMatches,
} from "../../actual_src/utils/arrayutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import a from "./12176.js";
import s from "./8573.js";
import o from "./82755.js";
import l from "./54946.js";
import c from "./95773.js";
import m, { Gn, h5 } from "./89193.js";
import d from "./96127.js";
import A from "./26052.js";
import p from "./21866.js";
export const o_ = -6;
export let oy;
((e) => {
	e[(e.eOnlineOnly = 0)] = "eOnlineOnly";
	e[(e.eOnlineOnlyNotInGame = 1)] = "eOnlineOnlyNotInGame";
	e[(e.eOfflineOnly = 2)] = "eOfflineOnly";
	e[(e.eIncomingInvites = 3)] = "eIncomingInvites";
	e[(e.eOutgoingInvites = 4)] = "eOutgoingInvites";
	e[(e.eAll = 5)] = "eAll";
})((oy ||= {}));
export class uZ {
	m_eDisplayType = oy.eAll;
	m_strName = "";
	m_bCollapsed = false;
	m_OnHeaderClick = undefined;
	m_rgAccountIDMembers = m.sH.array();
	m_setMembers = new Set();
	constructor(e) {
		Gn(this);
		this.m_strName = e;
	}
	get name() {
		return this.m_strName;
	}
	set name(e) {
		this.m_strName = e;
	}
	get icon_url() {
		return "";
	}
	get display_type() {
		return this.m_eDisplayType;
	}
	get onheaderclick() {
		return this.m_OnHeaderClick;
	}
	get collapsed() {
		return this.m_bCollapsed;
	}
	set collapsed(e) {
		this.m_bCollapsed = e;
	}
	GetCurrentMemberSet() {
		return this.m_setMembers;
	}
	get member_count() {
		if (this.display_type == oy.eAll) {
			return this.unfiltered_count;
		} else {
			return this.member_list.length;
		}
	}
	get unfiltered_count() {
		return this.member_accountid_list.length;
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
	SetOnHeaderClick(e) {
		this.m_OnHeaderClick = e;
	}
	Clear() {
		this.m_rgAccountIDMembers.clear();
		this.m_setMembers.clear();
	}
	AddMember(e) {
		if (!this.HasMember(e)) {
			this.m_setMembers.add(e);
			this.m_rgAccountIDMembers.push(e);
		}
	}
	RemoveMember(e) {
		if (this.HasMember(e)) {
			this.m_setMembers.delete(e);
			FindAndRemove(this.m_rgAccountIDMembers, e);
		}
	}
	HasMember(e) {
		return this.m_setMembers.has(e);
	}
	get GetRawMemberList() {
		return this.m_rgAccountIDMembers.map((e) => c.xm.FriendStore.GetPlayer(e));
	}
	get member_list() {
		let e = this.member_list_unsorted.slice();
		e.sort(d.$c.DefaultFriendSortComparator);
		return e;
	}
	get member_list_unsorted() {
		let e = [];
		for (let t of this.GetRawMemberList) {
			if (
				(this.display_type != oy.eOnlineOnly || t.persona.is_online) &&
				(this.display_type != oy.eOfflineOnly || !t.persona.is_online)
			) {
				if (this.display_type == oy.eOnlineOnlyNotInGame) {
					if (!t.persona.is_online || t.persona.is_ingame) {
						continue;
					}
					if (
						t.persona.m_broadcastAppId &&
						t.persona.m_broadcastAppId == p.td.appID
					) {
						continue;
					}
				}
				e.push(t);
			}
		}
		return e;
	}
	get member_accountid_list() {
		return this.m_rgAccountIDMembers;
	}
}
Cg([m.sH], uZ.prototype, "m_strName", undefined);
Cg([m.sH], uZ.prototype, "m_bCollapsed", undefined);
Cg([m.EW], uZ.prototype, "member_count", null);
Cg([m.EW], uZ.prototype, "unfiltered_count", null);
Cg([m.EW], uZ.prototype, "member_counts", null);
Cg([m.XI], uZ.prototype, "SetOnHeaderClick", null);
Cg([m.XI], uZ.prototype, "Clear", null);
Cg([m.XI], uZ.prototype, "AddMember", null);
Cg([m.XI], uZ.prototype, "RemoveMember", null);
Cg([m.EW], uZ.prototype, "member_list", null);
Cg([m.EW], uZ.prototype, "member_list_unsorted", null);
class _ extends uZ {
	m_iGroupID;
	m_bModifiable = false;
	m_bAcceptsGroupRemovals = false;
	constructor(e, t = -1, r = false, n = false) {
		super(e);
		Gn(this);
		this.m_iGroupID = t;
		this.m_bModifiable = r;
		this.m_bAcceptsGroupRemovals = n;
	}
	get id() {
		return this.m_iGroupID;
	}
	get unique_id() {
		return `${this.m_iGroupID}`;
	}
	get modifiable() {
		return this.m_bModifiable;
	}
	get accepts_group_removals() {
		return this.m_bAcceptsGroupRemovals;
	}
	get should_filter_categorized_friends() {
		return false;
	}
	get GetRawMemberList() {
		return this.member_accountid_list.map((e) => c.xm.FriendStore.GetPlayer(e));
	}
	GetMembersMatchingSearch(e) {
		let t = [];
		for (let r of this.GetRawMemberList) {
			if (r.BMatchesSearchString(e, false)) {
				t.push(r);
			}
		}
		t.sort(d.$c.DefaultFriendSortComparator);
		return t;
	}
}
Cg([m.EW], _.prototype, "GetRawMemberList", null);
class f extends _ {
	get display_type() {
		if (c.xm.SettingsStore.FriendsSettings.bHideOfflineFriendsInTagGroups) {
			return oy.eOnlineOnly;
		} else {
			return oy.eAll;
		}
	}
}
class b extends _ {
	constructor(e, t) {
		super(e, t, false, true);
		this.m_eDisplayType = oy.eOnlineOnlyNotInGame;
	}
	get unique_id() {
		return "all";
	}
	get display_type() {
		if (c.xm.SettingsStore.FriendsSettings.bCategorizeInGameFriendsByGame) {
			return oy.eOnlineOnlyNotInGame;
		} else {
			return oy.eOnlineOnly;
		}
	}
	get should_filter_categorized_friends() {
		return c.xm.SettingsStore.FriendsSettings.bHideCategorizedFriends;
	}
}
class y extends _ {
	constructor(e, t) {
		super(e, t, false, true);
	}
	get unique_id() {
		return "offline";
	}
	get should_filter_categorized_friends() {
		let e = c.xm.SettingsStore.FriendsSettings;
		return e.bHideCategorizedFriends && !e.bHideOfflineFriendsInTagGroups;
	}
}
class S extends _ {
	constructor(e, t) {
		super(e, t, false, true);
		this.m_eDisplayType = oy.eOutgoingInvites;
	}
	get unique_id() {
		return "outgoing";
	}
}
class w extends _ {
	constructor(e, t) {
		super(e, t, false, true);
	}
	get unique_id() {
		return "ingame";
	}
}
class B extends _ {
	m_mapSteamIDToMutualFriends = m.sH.map();
	m_unMutualFriendsCacheHash = 0;
	constructor(e, t) {
		super(e, t, false, true);
		this.m_eDisplayType = oy.eIncomingInvites;
	}
	get unique_id() {
		return "incominginvites";
	}
	GetMutualFriendsCacheHash() {
		return this.m_unMutualFriendsCacheHash;
	}
	SetMutualFriendsCacheHash(e) {
		this.m_unMutualFriendsCacheHash = e;
	}
	SetMutualFriends(e) {
		this.m_mapSteamIDToMutualFriends.replace(e);
	}
	get map_steamid_to_mutual_friends() {
		return this.m_mapSteamIDToMutualFriends;
	}
}
class v extends _ {
	constructor(e) {
		super("", e, false, false);
		Gn(this);
	}
	get is_initialized() {
		return this.id != 0 && c.xm.AppInfoStore.GetAppInfo(this.id).is_initialized;
	}
	get unique_id() {
		return `game_${this.id}`;
	}
	get name() {
		if (!this.is_initialized || this.id < 0) {
			return "";
		} else {
			return c.xm.AppInfoStore.GetAppInfo(this.id).name;
		}
	}
	set name(e) {}
	get icon_url() {
		if (!this.is_initialized || this.id < 0) {
			return "";
		} else {
			return c.xm.AppInfoStore.GetAppInfo(this.id).icon_url;
		}
	}
	PlayerGroupSortComparator(e, t, r, n) {
		let i = e.persona.player_group;
		let a = t.persona.player_group;
		let s = i ? Math.max(e.persona.player_group_size, r.get(i) || 1) : 1;
		let o = a ? Math.max(t.persona.player_group_size, r.get(a) || 1) : 1;
		if (s != o) {
			return o - s;
		} else if (s > 1 && i != a) {
			return i.localeCompare(a);
		} else {
			return n(e, t);
		}
	}
	get member_list() {
		let e = [];
		let t = new Map();
		for (let r of this.GetRawMemberList) {
			e.push(r);
			if (r.persona.player_group) {
				let e = t.get(r.persona.player_group);
				t.set(r.persona.player_group, e ? e + 1 : 1);
			}
		}
		let r = d.$c.DefaultFriendSortComparator;
		if (this.id == 0) {
			e.sort(r);
		} else {
			e.sort((e, n) => this.PlayerGroupSortComparator(e, n, t, r));
		}
		return e;
	}
}
Cg([m.$Z], v.prototype, "member_list", null);
const I = {
	groups: {
		offline: true,
		outgoing: true,
	},
};
const E = "FriendGroupCollapse";
class M {
	constructor() {
		Gn(this);
	}
	m_mapCollapsePrefs = m.sH.map();
	Init() {
		c.xm.SettingsStore.GetObjectFromLocalStorageWhenReady(E, I).then((e) => {
			this.m_mapCollapsePrefs.clear();
			for (let t in e.groups) {
				if (typeof e.groups[t] == "boolean") {
					this.m_mapCollapsePrefs.set(t, e.groups[t]);
				}
			}
		});
	}
	GetUserGroupCollapsed(e) {
		return !!this.m_mapCollapsePrefs.get(e);
	}
	SetUserGroupCollapsed(e, t) {
		if (!!this.m_mapCollapsePrefs.get(e) != t) {
			if (t || I.groups[e]) {
				this.m_mapCollapsePrefs.set(e, t);
			} else {
				this.m_mapCollapsePrefs.delete(e);
			}
			this.WritePrefs();
		}
	}
	ToggleUserGroupCollapsed(e) {
		this.SetUserGroupCollapsed(e, !this.GetUserGroupCollapsed(e));
	}
	WritePrefs() {
		c.xm.SettingsStore.StoreObjectInLocalStorage(E, {
			groups: Object.fromEntries(this.m_mapCollapsePrefs),
		});
	}
}
Cg([m.XI], M.prototype, "SetUserGroupCollapsed", null);
Cg([m.XI], M.prototype, "ToggleUserGroupCollapsed", null);
export class Oz {
	m_FriendStore;
	m_CMInterface;
	m_FriendGroupDisplayPrefs = new M();
	m_mapGroups = m.sH.map();
	m_mapGameGroups = m.sH.map();
	m_singletonGameGroup = new v(0);
	m_nonSteamGameGroup = new v(o_);
	m_groupAllFriends = new b((0, Localize)("#FriendGroup_Online"), -1);
	m_groupOfflineFriends = new y((0, Localize)("#FriendGroup_Offline"), -3);
	m_groupIngameFriends = new w((0, Localize)("#FriendGroup_InGame"), -4);
	m_groupIncomingInvites = new B(
		(0, Localize)("#FriendGroup_IncomingInvites"),
		-5,
	);
	m_groupOutgoingInvites = new S((0, Localize)("#FriendGroup_Outgoing"), -6);
	constructor(e) {
		Gn(this);
		this.m_FriendStore = e;
		this.m_groupOfflineFriends.m_eDisplayType = oy.eOfflineOnly;
	}
	Init(e) {
		this.m_CMInterface = e;
		this.m_FriendGroupDisplayPrefs.Init();
		const t = async () => {
			let e = a.w.Init(A.SJ);
			let t = await A.DF.GetCategories(
				this.m_CMInterface.GetServiceTransport(),
				e,
			);
			if (t.GetEResult() == 1) {
				this.RecvCategoriesList(t.Body());
			}
		};
		this.m_CMInterface.AddOnLogonCallback(() => {
			t();
		}, 47);
	}
	get all_friends() {
		return this.m_groupAllFriends;
	}
	get ingame_group() {
		return this.m_groupIngameFriends;
	}
	get incoming_invites_group() {
		return this.m_groupIncomingInvites;
	}
	get outgoing_invites_group() {
		return this.m_groupOutgoingInvites;
	}
	get friend_groups() {
		return [...this.game_groups, ...this.user_groups, ...this.default_groups];
	}
	get groupDisplayPrefs() {
		return this.m_FriendGroupDisplayPrefs;
	}
	get user_groups() {
		let e = [];
		this.m_mapGroups.forEach((t) => {
			e.push(t);
		});
		e.sort((e, t) => e.name.localeCompare(t.name));
		return e;
	}
	get game_groups() {
		let e = [];
		let t = 2;
		if (this.m_singletonGameGroup.unfiltered_count == 1) {
			t = 1;
		}
		this.m_mapGameGroups.forEach((r) => {
			if (r.name && r.member_count >= t) {
				e.push(r);
			}
		});
		e.sort((e, t) =>
			e.member_count == t.member_count
				? e.name.localeCompare(t.name)
				: t.member_count - e.member_count,
		);
		return e;
	}
	get singleton_game_group() {
		if (this.m_singletonGameGroup.unfiltered_count == 1) {
			let e = this.m_singletonGameGroup.member_accountid_list[0];
			if (!c.xm.FriendStore.GetPlayer(e).persona.is_in_nonsteam_game) {
				return;
			}
		}
		return this.m_singletonGameGroup;
	}
	get default_groups() {
		return [this.m_groupAllFriends, this.m_groupOfflineFriends];
	}
	get games_with_friends_playing() {
		return Array.from(this.m_mapGameGroups.keys());
	}
	GetGameGroup(e) {
		return this.m_mapGameGroups.get(e);
	}
	GetCountFriendsInGame(e) {
		return this.m_mapGameGroups.get(e)?.unfiltered_count || 0;
	}
	GetMaxCountFriendsInGame() {
		return Array.from(this.m_mapGameGroups.values()).reduce(
			(e, t) => (t.unfiltered_count > e ? t.unfiltered_count : e),
			0,
		);
	}
	OnFullFriendsListUpdateStart() {
		this.m_groupOfflineFriends.Clear();
		this.m_groupAllFriends.Clear();
		this.m_groupIncomingInvites.Clear();
		this.m_groupOutgoingInvites.Clear();
	}
	OnFullFriendsListUpdateComplete() {
		this.m_mapGameGroups.clear();
		this.m_singletonGameGroup.Clear();
		this.m_groupIngameFriends.Clear();
		for (let e of this.m_FriendStore.all_friends) {
			if (e.persona.is_ingame) {
				let t = e.persona.is_in_nonsteam_game
					? o_
					: e.persona.m_unGamePlayedAppID;
				this.OnFriendGameChanged(e.accountid, 0, t);
			}
		}
	}
	OnPersonaStateCacheReset() {
		this.m_mapGameGroups.clear();
		this.m_singletonGameGroup.Clear();
		this.m_groupIngameFriends.Clear();
	}
	OnFriendAdded(e) {
		this.m_groupAllFriends.AddMember(e);
		this.m_groupOfflineFriends.AddMember(e);
	}
	OnFriendRemoved(e) {
		this.m_groupAllFriends.RemoveMember(e);
		this.m_groupOfflineFriends.RemoveMember(e);
		this.m_groupIngameFriends.RemoveMember(e);
		this.m_singletonGameGroup.RemoveMember(e);
		this.m_mapGroups.forEach((t) => {
			t.RemoveMember(e);
		});
		this.m_mapGameGroups.forEach((t) => {
			t.RemoveMember(e);
		});
	}
	OnFriendGameChanged(e, t, r) {
		let n =
			t == o_
				? this.m_nonSteamGameGroup
				: t != 0
					? this.m_mapGameGroups.get(t)
					: null;
		let i =
			r == o_
				? this.m_nonSteamGameGroup
				: r != 0
					? this.m_mapGameGroups.get(r)
					: null;
		if ((!n || !i || !i || t != r) && (!i || !i.HasMember(e))) {
			if (n && n.HasMember(e)) {
				n.RemoveMember(e);
				if (n.unfiltered_count == 0 || n == this.m_nonSteamGameGroup) {
					this.m_singletonGameGroup.RemoveMember(e);
				} else if (n.unfiltered_count == 1) {
					this.m_singletonGameGroup.AddMember(n.member_accountid_list[0]);
				}
			}
			if (!i && r != 0) {
				i = new v(r);
				this.m_mapGameGroups.set(r, i);
			}
			if (i) {
				if (i.unfiltered_count == 0 || i == this.m_nonSteamGameGroup) {
					this.m_singletonGameGroup.AddMember(e);
				} else if (i.unfiltered_count == 1) {
					this.m_singletonGameGroup.RemoveMember(i.member_accountid_list[0]);
				}
				i.AddMember(e);
			}
			if (r != 0) {
				this.m_groupIngameFriends.AddMember(e);
			} else {
				this.m_groupIngameFriends.RemoveMember(e);
			}
		}
	}
	OnIncomingInviteAdded(e) {
		this.m_groupIncomingInvites.AddMember(e);
	}
	OnIncomingInviteRemoved(e) {
		this.m_groupIncomingInvites.RemoveMember(e);
	}
	OnOutgoingInviteAdded(e) {
		this.m_groupOutgoingInvites.AddMember(e);
	}
	OnOutgoingInviteRemoved(e) {
		this.m_groupOutgoingInvites.RemoveMember(e);
	}
	EnsureMutualFriendsForIncomingInvites() {
		function e(e) {
			let t = 2166136261;
			for (let r = 0; r < e.length; ++r) {
				t ^= e.charCodeAt(r);
				t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
			}
			return t >>> 0;
		}
		let t = 0;
		for (let r of this.m_groupIncomingInvites.member_list) {
			t ^= e(`${r.accountid}`);
		}
		if (this.m_groupIncomingInvites.GetMutualFriendsCacheHash() == t) {
			return;
		}
		this.m_groupIncomingInvites.SetMutualFriendsCacheHash(t);
		let r = a.w.Init(l.YH);
		l.xt
			.GetMutualFriendsForIncomingInvites(
				this.m_CMInterface.GetServiceTransport(),
				r,
			)
			.then((e) => {
				if (e.GetEResult() != 1) {
					return;
				}
				if (this.m_groupIncomingInvites.GetMutualFriendsCacheHash() != t) {
					return;
				}
				let r = m.sH.map();
				for (let t of e.Body().incoming_invite_mutual_friends_lists()) {
					let e = new Set();
					for (let r of t.mutual_friend_account_ids()) {
						e.add(r);
					}
					r.set(t.steamid(), e);
				}
				this.m_groupIncomingInvites.SetMutualFriends(r);
			});
	}
	CreateGroup(e, t) {
		let r = a.w.Init(o.oX, 5560);
		r.Body().set_groupname(e);
		if (t) {
			r.Body().set_steamid_friends(t);
		}
		return new Promise((n, i) => {
			this.m_CMInterface
				.SendMsgAndAwaitResponse(r, o.P8)
				.then((r) => {
					if (r.Body().eresult() == 1) {
						h5(() => {
							let n = r.Body().groupid();
							let i = new f(e, r.Body().groupid(), true);
							if (t) {
								for (let e of t) {
									i.AddMember(new s.b(e).GetAccountID());
								}
							}
							this.m_mapGroups.set(n, i);
						});
					}
					n(r.Body().eresult() == 1);
				})
				.catch(() => {
					n(false);
				});
		});
	}
	ManageGroup(e, t, r, n) {
		if (t == e.name && !r && !n) {
			return Promise.resolve(true);
		}
		let i = a.w.Init(o.Fh, 5564);
		i.Body().set_groupid(e.id);
		if (t && t != e.name) {
			i.Body().set_groupname(t);
		}
		if (r) {
			i.Body().set_steamid_friends_added(r);
		}
		if (n) {
			i.Body().set_steamid_friends_removed(n);
		}
		return new Promise((a, l) => {
			this.m_CMInterface
				.SendMsgAndAwaitResponse(i, o.QP)
				.then((i) => {
					if (i.Body().eresult() == 1) {
						e.name = t;
						for (let t of r) {
							e.AddMember(new s.b(t).GetAccountID());
						}
						for (let t of n) {
							e.RemoveMember(new s.b(t).GetAccountID());
						}
					}
					a(i.Body().eresult() == 1);
				})
				.catch(() => {
					a(false);
				});
		});
	}
	RemoveGroup(e) {
		let t = a.w.Init(o.zw, 5562);
		t.Body().set_groupid(e.id);
		this.m_CMInterface.SendMsgAndAwaitResponse(t, o.Ce).then((t) => {
			if (t.Body().eresult() == 1) {
				this.HandleGroupRemoval(e);
			}
		});
	}
	HandleGroupRemoval(e) {
		this.m_mapGroups.delete(e.id);
	}
	get categorized_friend_set() {
		let e = new Set();
		this.m_mapGroups.forEach((t) => {
			t.member_accountid_list.forEach(e.add.bind(e));
		});
		return e;
	}
	RecvCategoriesList(e) {
		this.m_mapGroups.clear();
		for (let t of e.categories()) {
			let e = t.groupid();
			let r = new f(t.name() || "", t.groupid(), true);
			r.m_eDisplayType = oy.eAll;
			this.m_mapGroups.set(e, r);
			for (let e of t.accountid_members()) {
				r.AddMember(e);
			}
		}
	}
	TransferFriendFromToGroup(e, t, r) {
		let n = r && r.modifiable;
		let i = t && t.modifiable;
		let s = [];
		if (n) {
			let t = a.w.Init(o.Pn, 5566);
			t.Body().set_groupid(r.id);
			t.Body().set_steamiduser(e.persona.m_steamid.ConvertTo64BitString());
			s.push(
				this.m_CMInterface
					.SendMsgAndAwaitResponse(t, o.Yi)
					.then(
						(t) => t.Body().eresult() == 1 && (r.AddMember(e.accountid), true),
					),
			);
		}
		if (i) {
			let r = a.w.Init(o.Np, 5568);
			r.Body().set_groupid(t.id);
			r.Body().set_steamiduser(e.persona.m_steamid.ConvertTo64BitString());
			s.push(
				this.m_CMInterface
					.SendMsgAndAwaitResponse(r, o.We)
					.then(
						(r) =>
							r.Body().eresult() == 1 &&
							(t.RemoveMember(e.accountid),
							t.unfiltered_count == 0 && this.HandleGroupRemoval(t),
							true),
					),
			);
		}
		return Promise.all(s);
	}
	FillInChatUsabilityMetrics(e) {
		e.metrics().set_friends_category_count(this.m_mapGroups.size);
		e.metrics().set_friends_categorized_count(this.categorized_friend_set.size);
		if (this.singleton_game_group) {
			e.metrics().set_friends_in_game_singleton_count(
				this.singleton_game_group.unfiltered_count,
			);
		}
		e.metrics().set_game_group_count(this.game_groups.length);
		let t = (e) =>
			this.m_FriendGroupDisplayPrefs.GetUserGroupCollapsed(e.unique_id);
		let r = e.ui_state().category_collapse();
		r.set_in_game_collapsed(t(this.m_singletonGameGroup));
		r.set_online_collapsed(t(this.m_groupAllFriends));
		r.set_offline_collapsed(t(this.m_groupOfflineFriends));
		r.set_categories_collapsed(
			CountMatches(Array.from(this.m_mapGroups.values()), t),
		);
		r.set_game_groups_collapsed(
			CountMatches(Array.from(this.m_mapGameGroups.values()), t),
		);
	}
}
Cg([m.EW], Oz.prototype, "friend_groups", null);
Cg([m.EW], Oz.prototype, "user_groups", null);
Cg([m.EW], Oz.prototype, "game_groups", null);
Cg([m.EW], Oz.prototype, "singleton_game_group", null);
Cg([m.EW], Oz.prototype, "default_groups", null);
Cg([m.EW], Oz.prototype, "games_with_friends_playing", null);
Cg([m.XI], Oz.prototype, "OnFullFriendsListUpdateComplete", null);
Cg([m.XI], Oz.prototype, "OnPersonaStateCacheReset", null);
Cg([m.XI], Oz.prototype, "HandleGroupRemoval", null);
Cg([m.EW], Oz.prototype, "categorized_friend_set", null);
Cg([m.XI], Oz.prototype, "RecvCategoriesList", null);
Cg([m.XI], Oz.prototype, "TransferFriendFromToGroup", null);
