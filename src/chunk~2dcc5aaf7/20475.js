import {
	SortedInsert,
	FindAndRemoveWhere,
	FindAndRemove,
} from "../../actual_src/utils/arrayutils.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { Cg } from "./34629.js";
import a from "./52451.js";
import s from "./96127.js";
import o from "./95773.js";
import c from "./83599.js";
import m from "./46970.js";
import { z7 } from "./89193.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
export const fW = -1;
const p = -2;
export class rV {
	m_id;
	m_strName;
	m_rgMembers;
	m_fnSort;
	m_fnOnUpdate;
	constructor(e, t, r) {
		this.m_id = e;
		this.m_rgMembers = [];
		this.m_fnSort = t;
		this.m_fnOnUpdate = r;
	}
	get id() {
		return this.m_id;
	}
	get name() {
		if (this.m_id == p) {
			if (this.m_rgMembers.length == 1) {
				return Localize("#FriendGroup_InGame");
			} else {
				return Localize("#FriendGroup_InGame_Others");
			}
		} else if (this.m_id == 0) {
			return Localize("#Chat_MemberGroup_Online");
		} else if (this.m_id == fW) {
			return Localize("#Chat_MemberGroup_PartyBeacon");
		} else if (this.m_strName) {
			return this.m_strName;
		} else if (o.xm.AppInfoStore.GetAppInfo(this.m_id).is_initialized) {
			this.m_strName = o.xm.AppInfoStore.GetAppInfo(this.m_id).name;
			return this.m_strName;
		} else {
			o.xm.AppInfoStore.RegisterCallbackOnLoad(this.OnAppInfoLoaded);
			return "";
		}
	}
	OnAppInfoLoaded() {
		this.m_strName = o.xm.AppInfoStore.GetAppInfo(this.m_id).name;
		this.m_fnOnUpdate();
	}
	get member_list() {
		return this.m_rgMembers;
	}
	BReadyToDisplay() {
		return !this.BIsGameGroup() || !!this.name;
	}
	BIsGameGroup() {
		return this.m_id > 0;
	}
	ClearMemberList() {
		this.m_rgMembers = [];
	}
	BHasMember(e) {
		return this.m_rgMembers.findIndex((t) => t.accountid === e) >= 0;
	}
	SetMembers(e) {
		this.m_rgMembers = e;
		this.Sort();
	}
	SortedInsert(e) {
		AssertMsg(
			!this.BHasMember(e.accountid),
			"Double insert into bucket for accountid",
			e.accountid,
		);
		SortedInsert(this.m_rgMembers, e, this.m_fnSort);
	}
	Remove(e) {
		return FindAndRemoveWhere(this.m_rgMembers, (t) => t.accountid === e);
	}
	Sort() {
		this.m_rgMembers.sort(this.m_fnSort);
	}
}
Cg([a.oI], rV.prototype, "OnAppInfoLoaded", null);
class h {
	rgRegistered = [];
	bFlatList = undefined;
	mapBuckets = new Map();
	groupSingletons;
	nLastUpdate = 0;
	hDelayUpdate;
	bReSortPending;
	msSpentSorting = 0;
	constructor(e, t) {
		this.groupSingletons = new rV(p, e, t);
	}
}
export class me {
	m_mapGroupBuckets = new Map();
	m_mapGroupBeacons = new Map();
	m_disposePersonaStateChanged;
	m_disposePlayerGameChanged;
	m_bShowMembersInGameGroups = undefined;
	LOG = new c.wd("GroupMemberStore").Debug;
	constructor() {}
	Init() {
		this.m_disposePersonaStateChanged =
			o.xm.FriendStore.AddPersonaStateChangedCallback(
				this.OnPersonaStateChanged,
			);
		this.m_disposePlayerGameChanged =
			o.xm.FriendStore.AddPlayerGameChangedCallback(this.OnPlayerGameChanged);
		o.xm.SettingsStore.RunOnReady(this.ListenForSettingsChanges);
		o.xm.CMInterface.AddOnDisconnectCallback(() => {
			this.Reset();
		}, 102);
	}
	ListenForSettingsChanges() {
		this.m_bShowMembersInGameGroups =
			o.xm.SettingsStore.FriendsSettings.bCategorizeInGameFriendsByGame;
		z7(
			() =>
				o.xm.SettingsStore.FriendsSettings.bCategorizeInGameFriendsByGame !==
				this.m_bShowMembersInGameGroups,
			() => {
				this.Reset();
				this.ListenForSettingsChanges();
			},
		);
	}
	Reset() {
		this.m_mapGroupBuckets.forEach((e, t) => {
			e.bFlatList = undefined;
			this.PerformInitialPopulate(t);
			this.FireMemberListChanged(e);
		});
	}
	RegisterForGroupMemberList(e, t) {
		if (!this.m_mapGroupBuckets.has(t)) {
			this.m_mapGroupBuckets.set(
				t,
				new h(this.FriendSortFunc, () => {
					this.OnGroupUpdate(t);
				}),
			);
			this.PerformInitialPopulate(t);
		}
		this.m_mapGroupBuckets.get(t).rgRegistered.push(e);
		return {
			unregister: () => this.UnregisterForGroupMemberList(e, t),
		};
	}
	OnGroupUpdate(e) {
		let t = this.m_mapGroupBuckets.get(e);
		if (t) {
			this.FireMemberListChanged(t);
		}
	}
	UnregisterForGroupMemberList(e, t) {
		let r = this.m_mapGroupBuckets.get(t);
		if (r) {
			FindAndRemove(r.rgRegistered, e);
			if (r.rgRegistered.length == 0) {
				this.m_mapGroupBuckets.delete(t);
			}
		}
	}
	GroupSortFunc(e, t) {
		if (t.id == fW && e.id != fW) {
			return 1;
		} else if (e.id == fW && t.id != fW) {
			return -1;
		} else if (e.id <= 0 && t.id <= 0) {
			return e.id - t.id;
		} else if (e.id <= 0 && t.id > 0) {
			return 1;
		} else if (t.id <= 0 && e.id > 0) {
			return -1;
		} else if (
			t.member_list.length == e.member_list.length &&
			t.name &&
			e.name
		) {
			return t.name.localeCompare(e.name);
		} else {
			return t.member_list.length - e.member_list.length;
		}
	}
	GetGroupMemberList(e) {
		let t = this.m_mapGroupBuckets.get(e);
		if (t.bFlatList) {
			AssertMsg(t.mapBuckets.size == 1, "Flat list has too many buckets");
			return [t.mapBuckets.get(0)];
		}
		{
			let e = [];
			t.mapBuckets.forEach((t) => {
				if (
					t.BReadyToDisplay() &&
					(t.member_list.length > 1 || !this.BucketCanBeSingleton(t))
				) {
					e.push(t);
				}
			});
			if (t.groupSingletons.member_list.length > 0) {
				t.groupSingletons.Sort();
				e.push(t.groupSingletons);
			}
			return e.sort(this.GroupSortFunc);
		}
	}
	SetGroupListFlat(e, t) {
		let r = this.m_mapGroupBuckets.get(e);
		if (r && r.bFlatList != t) {
			r.bFlatList = t;
			this.PerformInitialPopulate(e);
			this.FireMemberListChanged(r);
		}
	}
	ScheduledFireMemberListChanged(e) {
		e.hDelayUpdate = undefined;
		this.FireMemberListChanged(e);
	}
	FireMemberListChanged(e) {
		if (e.hDelayUpdate) {
			return;
		}
		let t = performance.now();
		if (t - e.nLastUpdate < 1000) {
			e.hDelayUpdate = SetBackgroundTimeout(
				() => this.ScheduledFireMemberListChanged(e),
				1000,
			);
			this.LOG("DELAY UPDATE");
			return;
		}
		e.nLastUpdate = t;
		for (let t of e.rgRegistered) {
			t();
		}
	}
	OnPlayerGameChanged(e, t, r) {
		this.m_mapGroupBuckets.forEach((n, i) => {
			let a = o.xm.ChatStore.GetChatRoomGroup(i);
			if (!a.GetMemberPartyBeacon(e) && a.BHasMember(e)) {
				let a = o.xm.FriendStore.GetPlayer(e);
				a.is_appinfo_ready();
				this.LOG("OnPlayerGameChanged", a.display_name, t, r);
				if (n.bFlatList) {
					n.mapBuckets.get(0).Remove(e);
					n.mapBuckets.get(0).SortedInsert(o.xm.FriendStore.GetPlayer(e));
					this.FireMemberListChanged(n);
					return;
				}
				if (t == r) {
					let t = r == m.o_ ? n.groupSingletons : n.mapBuckets.get(r);
					if (t && t.BHasMember(e)) {
						this.UpdatePersonaForGroup(i, a);
						return;
					}
				}
				this.RemoveMemberFromBucket(n, t, e);
				this.AddMemberToBucketID(n, r, o.xm.FriendStore.GetPlayer(e));
				this.FireMemberListChanged(n);
			}
		});
	}
	OnPersonaStateChanged(e) {
		this.m_mapGroupBuckets.forEach((t, r) => {
			let n = o.xm.ChatStore.GetChatRoomGroup(r);
			if (n.BHasMember(e.accountid)) {
				this.LOG("CGroupMemberStore - persona state", r, e.display_name);
				if (t.bReSortPending) {
					this.LOG(e.display_name, "not ready");
					e.is_appinfo_ready();
					return;
				}
				if (e.is_appinfo_ready()) {
					this.UpdatePersonaForGroup(n.GetGroupID(), e);
				} else {
					this.LOG(`Delay sorting player ${e.accountid}`);
					o.xm.AppInfoStore.RegisterCallbackOnLoad(
						this.UpdatePersonaForGroup.bind(this, r, e),
					);
				}
			}
		});
	}
	UpdatePersonaForGroup(e, t) {
		let r = this.m_mapGroupBuckets.get(e);
		if (!r) {
			return;
		}
		let n = performance.now();
		let i = false;
		if (r.bFlatList) {
			AssertMsg(r.mapBuckets.size == 1, "Flat map is too large");
			r.mapBuckets.get(0).Remove(t.accountid);
			r.mapBuckets.get(0).SortedInsert(t);
			i = true;
		} else {
			let e = this.FindCurrentBucketForMember(r, t.accountid);
			if (e !== undefined) {
				let n;
				if (e == p) {
					n = r.groupSingletons;
				} else {
					n = r.mapBuckets.get(e);
					if (n.member_list.length == 1 && this.BucketCanBeSingleton(n)) {
						n = r.groupSingletons;
					}
				}
				if (n.member_list.length > 1 || !this.BucketCanBeSingleton(n)) {
					this.LOG("Resorting user", t.display_name, "in bucket", e);
					n.Remove(t.accountid);
					n.SortedInsert(t);
					i = true;
				}
			}
		}
		let a = performance.now();
		r.msSpentSorting += a - n;
		this.LOG(
			`${e}: Resort user ${t.display_name} took ${a - n}ms (total ${
				r.msSpentSorting
			}ms)`,
		);
		if (i) {
			this.FireMemberListChanged(r);
		}
	}
	OnPartyBeaconsUpdated(e, t) {
		this.m_mapGroupBeacons.set(e, t);
		let r = this.m_mapGroupBuckets.get(e);
		let n = [];
		let i = false;
		if (!r) {
			return;
		}
		for (let e of t) {
			n.push(e.account_id);
			let t = this.FindCurrentBucketForMember(r, e.account_id);
			if (t == fW) {
				continue;
			}
			let a = o.xm.FriendStore.GetPlayer(e.account_id);
			a.is_appinfo_ready();
			i = true;
			this.RemoveMemberFromBucket(r, t, e.account_id);
			this.AddMemberToBucketID(r, fW, a);
		}
		let a = r.mapBuckets.get(fW);
		if (a) {
			for (let t of a.member_list) {
				if (!n.includes(t.accountid)) {
					i = true;
					let n = this.GetBucketIdForPlayer(r, t, e);
					this.RemoveMemberFromBucket(r, fW, t.accountid);
					this.AddMemberToBucketID(r, n, t);
				}
			}
		}
		if (i) {
			this.ReSortGroup(e);
		}
	}
	ReSortGroup(e) {
		let t = this.m_mapGroupBuckets.get(e);
		if (t) {
			if (t.bFlatList) {
				AssertMsg(t.mapBuckets.size == 1, "Flat list has too many buckets");
				let r = performance.now();
				let n = t.mapBuckets.get(0);
				n.Sort();
				let i = performance.now();
				t.msSpentSorting += i - r;
				this.LOG(
					`${e}: List ReSort took ${i - r}ms (total ${
						t.msSpentSorting
					}ms) for ${n.member_list.length} members`,
				);
			} else {
				t.mapBuckets.get(0).Sort();
				t.groupSingletons.Sort();
			}
			t.bReSortPending = false;
			this.FireMemberListChanged(t);
		}
	}
	FriendSortFunc(e, t) {
		let r = s.$c.FriendSortStatusComparator(e, t);
		if (r != 0) {
			return r;
		}
		if (e.persona.is_ingame && t.persona.is_ingame) {
			if (e.persona.is_in_nonsteam_game) {
				if (!t.persona.is_in_nonsteam_game) {
					return 1;
				}
			} else if (t.persona.is_in_nonsteam_game) {
				return -1;
			}
			const e_current_game_name = e.current_game_name;
			const t_current_game_name = t.current_game_name;
			if (e_current_game_name) {
				if (!t_current_game_name) {
					return -1;
				}
				if (e_current_game_name != t_current_game_name) {
					if (e_current_game_name < t_current_game_name) {
						return -1;
					} else {
						return 1;
					}
				}
			} else if (t_current_game_name) {
				return 1;
			}
		}
		return e.display_name.localeCompare(t.display_name);
	}
	PerformInitialPopulate(e) {
		let t = this.m_mapGroupBuckets.get(e);
		t.mapBuckets.clear();
		t.groupSingletons.ClearMemberList();
		AssertMsg(t, "PerformInitialPopulate didn't find group");
		let r = performance.now();
		let n =
			o.xm.ChatStore.GetChatRoomGroup(
				e,
			).memberList.member_list_unsorted.slice();
		if (t.bFlatList === undefined) {
			t.bFlatList =
				n.length > 100 ||
				!o.xm.SettingsStore.FriendsSettings.bCategorizeInGameFriendsByGame;
		}
		if (t.bFlatList) {
			n.forEach((e) => {
				e.is_appinfo_ready();
			});
			let e = new rV(0, this.FriendSortFunc, () => {
				this.FireMemberListChanged(t);
			});
			e.SetMembers(n);
			t.mapBuckets.set(0, e);
		} else {
			for (let r of n) {
				let n = this.GetBucketIdForPlayer(t, r, e);
				this.AddMemberToBucketID(t, n, r);
			}
		}
		if (o.xm.AppInfoStore.BHavePendingAppInfoRequests()) {
			t.bReSortPending = true;
			o.xm.AppInfoStore.RegisterCallbackOnLoad(this.ReSortGroup.bind(this, e));
		}
		let i = performance.now();
		t.msSpentSorting += i - r;
		this.LOG(
			`List sort took ${i - r} ms for ${n.length} members of group ${e}`,
		);
	}
	FindCurrentBucketForMember(e, t) {
		let r;
		e.mapBuckets.forEach((e) => {
			if (e.BHasMember(t)) {
				r = e.id;
			}
		});
		if (r !== undefined) {
			return r;
		} else if (e.groupSingletons.BHasMember(t)) {
			return p;
		} else {
			return undefined;
		}
	}
	BIsMemberInAnyBucket(e, t) {
		return this.FindCurrentBucketForMember(e, t) !== undefined;
	}
	AddMemberToBucketID(e, t, r) {
		AssertMsg(
			!this.BIsMemberInAnyBucket(e, r.accountid),
			"Trying to double add accountid",
			r.accountid,
			"which is already in bucket",
			this.FindCurrentBucketForMember(e, r.accountid),
		);
		AssertMsg(
			!e.bFlatList || t == 0,
			"Trying to add to non-default bucket in flat list",
		);
		if (t != p) {
			if (e.mapBuckets.has(t)) {
				if (!e.bFlatList) {
					let r = e.mapBuckets.get(t);
					if (r.member_list.length == 1 && this.BucketCanBeSingleton(r)) {
						this.RemoveFromSingletons(e, r.member_list[0].accountid);
					}
				}
				e.mapBuckets.get(t).SortedInsert(r);
			} else {
				let n = new rV(t, this.FriendSortFunc, () => {
					this.FireMemberListChanged(e);
				});
				n.SortedInsert(r);
				e.mapBuckets.set(t, n);
				if (!e.bFlatList && this.BucketCanBeSingleton(n)) {
					this.AddToSingletons(e, r);
				}
			}
		} else {
			this.AddToSingletons(e, r);
		}
	}
	BucketCanBeSingleton(e) {
		return e.id != fW && e.id != 0;
	}
	AddToSingletons(e, t) {
		AssertMsg(!e.bFlatList, "Adding to singletons in flat list");
		e.groupSingletons.SortedInsert(t);
	}
	RemoveFromSingletons(e, t) {
		AssertMsg(!e.bFlatList, "Removing from singletons in flat list");
		return e.groupSingletons.Remove(t);
	}
	GetBucketIdForPlayer(e, t, r) {
		if (e.bFlatList) {
			return 0;
		}
		let n = this.m_mapGroupBeacons.get(r);
		if (n) {
			if (n.find((e) => e.account_id == t.accountid)) {
				return fW;
			}
		}
		if (t.persona.is_ingame) {
			if (t.persona.is_in_nonsteam_game) {
				return p;
			}
			return t.persona.m_unGamePlayedAppID;
		}
		if (t.persona.m_broadcastAppId) {
			return t.persona.m_broadcastAppId;
		} else {
			return 0;
		}
	}
	RemoveMemberFromBucket(e, t, r) {
		if (t == p) {
			this.RemoveFromSingletons(e, r);
			return true;
		}
		let n = e.mapBuckets.get(t);
		return (
			!!n &&
			!!n.Remove(r) &&
			(n.member_list.length == 0
				? (this.RemoveFromSingletons(e, r),
					this.LOG("Deleting bucket", t),
					e.mapBuckets.delete(t))
				: n.member_list.length == 1 &&
					!e.bFlatList &&
					this.BucketCanBeSingleton(n) &&
					(this.LOG(
						"Removing member, adding",
						n.member_list[0].accountid,
						"to singletons",
					),
					this.AddToSingletons(e, n.member_list[0])),
			true)
		);
	}
	AddUserAndFireCallback(e, t, r) {
		let n = o.xm.FriendStore.GetPlayer(t);
		let i = this.GetBucketIdForPlayer(e, n, r);
		this.AddMemberToBucketID(e, i, n);
		this.FireMemberListChanged(e);
	}
	OnMemberAdded(e, t) {
		let r = this.m_mapGroupBuckets.get(e);
		if (r) {
			this.AddUserAndFireCallback(r, t, e);
		}
	}
	OnMemberRemoved(e, t) {
		let r = this.m_mapGroupBuckets.get(e);
		if (r) {
			for (let e of Array.from(r.mapBuckets.keys())) {
				if (this.RemoveMemberFromBucket(r, e, t)) {
					this.FireMemberListChanged(r);
					return;
				}
			}
			if (this.RemoveMemberFromBucket(r, p, t)) {
				this.FireMemberListChanged(r);
			}
		}
	}
}
Cg([a.oI], me.prototype, "ListenForSettingsChanges", null);
Cg([a.oI], me.prototype, "OnPlayerGameChanged", null);
Cg([a.oI], me.prototype, "OnPersonaStateChanged", null);
Cg([a.oI], me.prototype, "OnPartyBeaconsUpdated", null);
