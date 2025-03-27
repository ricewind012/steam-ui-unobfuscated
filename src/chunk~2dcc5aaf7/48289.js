import { Seconds } from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i from "./96127.js";
import a from "./12176.js";
import s from "./82755.js";
import o from "./54946.js";
import { w as w_1 } from "./16583.js";
import c from "./88696.js";
import { qw } from "./89748.js";
import u, { Gn, z7 } from "./89193.js";
import { q3 } from "./90095.js";
import A, { I } from "./61416.js";
import p from "./8573.js";
import { Dp } from "./736.js";
import h from "./17415.js";
import C from "./52451.js";
import { lY } from "./51095.js";
import y from "./63696.js";
import S from "./96000.js";
class _ {
	m_dataMap;
	m_timeoutTocSave;
	m_params;
	m_fetch;
	m_nMinRefreshTime;
	m_onUpdate;
	constructor(e, t, r, n) {
		this.m_params = e;
		this.m_fetch = t;
		this.m_nMinRefreshTime = r;
		this.m_dataMap = new u.Es();
		this.m_onUpdate = n;
	}
	GetStorage() {
		return this.m_params.storage;
	}
	GetStorageKey() {
		return this.m_params.strStorageKey;
	}
	GetStorageVersion() {
		return this.m_params.nStorageVersion;
	}
	async Init() {
		let e = await this.LoadTableOfContents();
		if (!e) {
			return;
		}
		let t = [];
		e.m_rgStorageKeys.forEach((e) => {
			if (!this.m_dataMap.has(e)) {
				let r = this.AddCacheItem(e);
				t.concat(r.Init());
			}
		});
		await Promise.all(t);
	}
	RefreshItem(e) {
		let t = this.m_dataMap.get(e);
		if (t && t.IsOlderThan(this.m_nMinRefreshTime)) {
			t.Refresh();
		}
	}
	LoadTableOfContents() {
		return this.GetStorage().GetObject(this.GetStorageKey());
	}
	SaveTableOfContents() {
		let e = {
			m_rgStorageKeys: Array.from(this.m_dataMap.keys()),
		};
		return this.GetStorage().StoreObject(this.GetStorageKey(), e);
	}
	ScheduleSave() {
		clearTimeout(this.m_timeoutTocSave);
		this.m_timeoutTocSave = window.setTimeout(() => {
			this.SaveTableOfContents();
		}, 2000);
	}
	Get(e) {
		return this.GetOrAddCacheEntry(e).Get();
	}
	GetOrAddCacheEntry(e) {
		let t = this.m_dataMap.get(e);
		t ||= this.AddCacheItem(e);
		return t;
	}
	OnUpdate(e, t) {
		if (this.m_onUpdate) {
			this.m_onUpdate(e, t);
		}
	}
	AddCacheItem(e) {
		let t = {
			...this.m_params,
		};
		t.strStorageKey = `${this.m_params.strStorageKey}_${JSON.stringify(e)}`;
		t.onUpdate = (t) => {
			this.OnUpdate(e, t);
		};
		let r = new h.D(t, () => this.m_fetch(e));
		this.m_dataMap.set(e, r);
		this.ScheduleSave();
		r.Init();
		return r;
	}
}
Cg([C.oI], _.prototype, "Init", null);
Cg([C.oI], _.prototype, "Get", null);
Cg([C.oI], _.prototype, "OnUpdate", null);
const w = Seconds.PerDay * 1000;
const B = Seconds.PerMinute * 1000;
const v = Seconds.PerMinute * 1000;
export function Sw() {
	return q3(() => O$.allFriends);
}
export function oH() {
	const e = Sw();
	return q3(() => ({
		rgInGame: e.filter((e) => e.persona.is_ingame),
		rgOnline: e.filter((e) => e.persona.is_online && !e.persona.is_ingame),
	}));
}
export function OC() {
	return Sw().filter((e) => e.persona.is_online);
}
export function uU(e) {
	return q3(() =>
		e !== undefined
			? O$.GetCountFriendsInGame(e)
			: O$.GetCountFriendsPlayingGames(),
	);
}
export function Lb() {
	return q3(() => O$.favoriteFriends.filter((e) => e.persona.m_bInitialized));
}
export function Uu() {
	return q3(() =>
		O$.allFriends.filter(
			(e) => e.persona.is_ingame && e.persona.m_strGameExtraInfo,
		),
	).sort((e, t) =>
		lY(e.persona.GetCurrentGameName(), t.persona.GetCurrentGameName()),
	);
}
export function bV(e) {
	return q3(() => O$.GetFriendState(e).display_name);
}
export function KM(e) {
	return q3(() => O$.GetFriendState(e).nickname);
}
export function tG(e) {
	return q3(() => e && O$.GetFriendState(e));
}
function G(e, t) {
	return q3(() => e && O$.GetFriendState(e)?.persona[t]);
}
export function Sv(e) {
	return G(e, "avatar_url");
}
export function gt(e) {
	return q3(() => e && O$.GetFriendState(e)?.persona);
}
export function TT(e) {
	return q3(() => !!e && !!O$.GetFriendState(e));
}
export function wI() {
	return gt(O$.currentUserSteamID);
}
export function Bh(e) {
	return G(O$.currentUserSteamID, e);
}
export function L4() {
	return bV(O$.currentUserSteamID);
}
export function Sk() {
	return Bh("avatar_url");
}
export function OU(e) {
	const [t, setT] = y.useState(false);
	const [n, setN] = y.useState("");
	const a = y.useCallback(
		(e) => {
			console.debug(`MultiplayerSessionShareURLChanged: '${e}'`);
			if (e && !t) {
				setT(true);
			}
			setN(e);
		},
		[setN, setT],
	);
	y.useEffect(
		() =>
			SteamClient.Friends.RegisterForMultiplayerSessionShareURLChanged(e, a)
				.unregister,
		[e, a],
	);
	if (t) {
		return n;
	} else {
		return undefined;
	}
}
export function LK() {
	const e = q3(() => qw().GetServicesInitialized());
	return I({
		queryKey: ["FriendsStore", "CurrentUserCachedAvatarURL"],
		queryFn: async () =>
			Dp("WebChat.GetLocalAvatarBase64")
				? await SteamClient.WebChat.GetLocalAvatarBase64()
				: null,
		enabled: e,
	}).data;
}
class j {
	constructor(e) {
		this.setApps = new Set(e);
	}
	setApps;
	toJSON() {
		return {
			setApps: Array.from(this.setApps),
		};
	}
	static Revive(e, t) {
		if (e == "setApps") {
			return new Set(t);
		} else {
			return t;
		}
	}
}
class q {
	constructor() {
		Gn(this);
	}
	m_CMInterface;
	m_FriendsUIFriendStore;
	m_ownedGamesCache = new _(
		{
			storage: new c.A(),
			strStorageKey: "FriendsOwnedGames_storage",
			nStorageVersion: 1,
			nMaxLifetimeMS: w,
			nFailureRetryIntervalMS: B,
			reviver: j.Revive,
		},
		this.FetchOwnedGames,
		v,
		(e, t) => {
			S.md.OnFriendOwnedAppsChanged(e);
		},
	);
	m_mapOwnedGamesCacheErrors = new Map();
	async Init(e, t) {
		this.m_CMInterface = e;
		this.m_FriendsUIFriendStore = t;
		this.m_CMInterface.AddOnLogonCallback(this.OnConnectedToSteam);
		this.m_FriendsUIFriendStore.AddPersonaStateChangedCallback(
			this.OnPersonaStateChanged,
		);
		this.m_ownedGamesCache.Init();
		await this.InitPlayerCache();
	}
	m_mapPlayerCache = new Map();
	m_Storage = new c.A();
	k_strPlayerCacheKey = "friendstore_playercache";
	async InitPlayerCache() {
		const e = await this.m_Storage.GetObject(this.k_strPlayerCacheKey);
		this.m_mapPlayerCache.clear();
		if (e) {
			for (let t of e) {
				const e = new p.b(t.steamid).GetAccountID();
				const r = new s.IC();
				r.set_friendid(t.steamid);
				r.set_player_name(t.persona_name);
				r.set_avatar_hash(w_1(t.avatar_hash));
				const n = new i.$c(e, r, 18);
				n.nickname = t.nickname;
				this.m_mapPlayerCache.set(e, n);
			}
		}
	}
	BShouldCachePlayer(e) {
		return (
			(qw().BIsInFamilyGroup() &&
				qw()
					.GetCurrentUser()
					.rgFamilyGroupMembers.filter(
						(t) => t.accountid == e.steamid.GetAccountID(),
					).length > 0) ||
			S.md.BIsFriendInAnyCollection(e.steamid.GetAccountID())
		);
	}
	OnPersonaStateChanged(e) {
		if (this.BShouldCachePlayer(e)) {
			this.m_mapPlayerCache.set(e.steamid.GetAccountID(), e);
			const t = Array.from(this.m_mapPlayerCache.values()).map((e) => ({
				steamid: e.steamid.ConvertTo64BitString(),
				persona_name: e.persona.m_strPlayerName,
				avatar_hash: e.persona.m_strAvatarHash,
				nickname: e.nickname,
			}));
			this.m_Storage.StoreObject(this.k_strPlayerCacheKey, t);
		}
	}
	OnConnectedToSteam() {
		if (qw().BIsInFamilyGroup()) {
			for (let e of qw().GetCurrentUser().rgFamilyGroupMembers) {
				this.GetFriendState(e.accountid);
			}
		}
	}
	get currentUserSteamID() {
		return this.m_CMInterface.steamid;
	}
	GetCountFriendsInGame(e) {
		return this.m_FriendsUIFriendStore.FriendGroupStore.GetCountFriendsInGame(
			e,
		);
	}
	GetCountFriendsPlayingGames() {
		return this.m_FriendsUIFriendStore.FriendGroupStore.ingame_group
			.unfiltered_count;
	}
	GetMaxCountFriendsInGame() {
		return this.m_FriendsUIFriendStore.FriendGroupStore.GetMaxCountFriendsInGame();
	}
	GetFriendState(e) {
		const t = typeof e == "number" ? e : e.GetAccountID();
		return (
			this.m_mapPlayerCache.get(t) || this.m_FriendsUIFriendStore.GetPlayer(t)
		);
	}
	get allFriends() {
		return this.m_FriendsUIFriendStore.all_friends;
	}
	get favoriteFriends() {
		return this.m_FriendsUIFriendStore.FavoritesStore.favorites
			.map((e) => e.friend)
			.filter((e) => !!e);
	}
	GetFriendsInGame(e) {
		return (
			this.m_FriendsUIFriendStore.FriendGroupStore.GetGameGroup(e)
				?.member_list ?? []
		);
	}
	IsLibraryAccessDenied(e) {
		switch (this.m_mapOwnedGamesCacheErrors.get(e)) {
			case undefined:
			case 1: {
				return false;
			}
			case 15: {
				return true;
			}
			default: {
				return this.GetOwnedGames(e).entries.length == 0;
			}
		}
	}
	GetOwnedGames(e) {
		const t = this.m_ownedGamesCache.Get(e);
		return (t && t.setApps) || new Set();
	}
	RefreshOwnedGames(e) {
		this.m_ownedGamesCache.RefreshItem(e);
	}
	async FetchOwnedGames(e) {
		let t;
		let r = a.w.Init(o.G9);
		r.Body().set_steamid(p.b.InitFromAccountID(e).ConvertTo64BitString());
		r.Body().set_include_played_free_games(true);
		r.Body().set_skip_unvetted_apps(false);
		let n = await o.xt.GetOwnedGames(
			this.m_CMInterface.GetServiceTransport(),
			r,
		);
		let i = n.GetEResult();
		if (i != 1) {
			if (i != 15) {
				console.error(
					"Failed to retrieve friend's games data for steamid",
					e,
					"result was",
					n.GetEResult(),
					"msg",
					n.GetEMsg(),
				);
			}
			this.m_mapOwnedGamesCacheErrors.set(e, n.GetEResult());
			return;
		}
		t = n
			.Body()
			.games()
			.map((e) => e.appid());
		this.m_mapOwnedGamesCacheErrors.delete(e);
		return new j(t);
	}
	async LoadPersonaState(e) {
		const t = this.GetFriendState(e);
		await z7(() => t.persona.m_bInitialized);
		return t.persona;
	}
}
Cg([u.sH], q.prototype, "m_mapOwnedGamesCacheErrors", undefined);
Cg([u.sH], q.prototype, "m_mapPlayerCache", undefined);
Cg([C.oI], q.prototype, "OnPersonaStateChanged", null);
Cg([C.oI], q.prototype, "OnConnectedToSteam", null);
Cg([C.oI], q.prototype, "FetchOwnedGames", null);
Cg([C.oI], q.prototype, "LoadPersonaState", null);
export const O$ = new q();
window.friendStore = O$;
