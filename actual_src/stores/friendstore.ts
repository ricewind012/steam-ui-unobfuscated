// Webpack module ID: 48289

import { Seconds } from "../utils/time.js";
import { $c } from "../../src/chunk~2dcc5aaf7/96127.js";
import { w as w_2 } from "../../src/library/12176.js";
import { IC } from "../../src/library/82755.js";
import { G9, xt } from "../../src/chunk~2dcc5aaf7/54946.js";
import { w as w_1 } from "../../src/library/16583.js";
import { A } from "../../src/library/88696.js";
import { qw } from "../../src/chunk~2dcc5aaf7/89748.js";
import { ObservableMap, makeAutoObservable, observable, when } from "mobx";
import { useObserver } from "mobx-react-lite";
import { useQuery } from "@tanstack/react-query";
import { b as CSteamID } from "../../src/library/8573.js";
import { BSharedJSContextHasMethod } from "../steamclient/clientinterfacehelpers.js";
import { D } from "../../src/chunk~2dcc5aaf7/17415.js";
import { lY } from "../../src/chunk~2dcc5aaf7/51095.js";
import { useState, useCallback, useEffect } from "react";
import { md as CollectionStore } from "./collectionstore.js";
import { bind } from "../utils/bind.js";
import { EResult } from "../steamclient/steamclient/shared.js";

interface OwnedGamesCacheParams {
	storage: any;
	strStorageKey: string;
	nStorageVersion: number;
	nMaxLifetimeMS: number;
	nFailureRetryIntervalMS: number;
	reviver: (e: string, apps: any[]) => Set<any> | any[];
	onUpdate?: () => any;
}

class CFriendsOwnedGamesCache {
	// any = D in 17415.js
	m_dataMap: ObservableMap<string, any>;
	m_timeoutTocSave;
	m_params: OwnedGamesCacheParams;
	m_fetch;
	m_nMinRefreshTime: number;
	m_onUpdate;

	constructor(
		params: OwnedGamesCacheParams,
		fetch,
		nMinRefreshTime: number,
		onUpdate,
	) {
		this.m_params = params;
		this.m_fetch = fetch;
		this.m_nMinRefreshTime = nMinRefreshTime;
		this.m_dataMap = new ObservableMap();
		this.m_onUpdate = onUpdate;
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

	@bind async Init() {
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

	@bind Get(e) {
		return this.GetOrAddCacheEntry(e).Get();
	}

	GetOrAddCacheEntry(e) {
		let t = this.m_dataMap.get(e);
		t ||= this.AddCacheItem(e);
		return t;
	}

	@bind OnUpdate(e, t) {
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
		let r = new D(t, () => this.m_fetch(e));
		this.m_dataMap.set(e, r);
		this.ScheduleSave();
		r.Init();
		return r;
	}
}

const w = Seconds.PerDay * 1000;
const B = Seconds.PerMinute * 1000;
const v = Seconds.PerMinute * 1000;

export function Sw() {
	return useObserver(() => O$.allFriends);
}
export function oH() {
	const e = Sw();
	return useObserver(() => ({
		rgInGame: e.filter((e) => e.persona.is_ingame),
		rgOnline: e.filter((e) => e.persona.is_online && !e.persona.is_ingame),
	}));
}
export function OC() {
	return Sw().filter((e) => e.persona.is_online);
}
export function uU(e) {
	return useObserver(() =>
		e !== undefined
			? O$.GetCountFriendsInGame(e)
			: O$.GetCountFriendsPlayingGames(),
	);
}
export function Lb() {
	return useObserver(() =>
		O$.favoriteFriends.filter((e) => e.persona.m_bInitialized),
	);
}
export function Uu() {
	return useObserver(() =>
		O$.allFriends.filter(
			(e) => e.persona.is_ingame && e.persona.m_strGameExtraInfo,
		),
	).sort((e, t) =>
		lY(e.persona.GetCurrentGameName(), t.persona.GetCurrentGameName()),
	);
}
export function bV(e) {
	return useObserver(() => O$.GetFriendState(e).display_name);
}
export function KM(e) {
	return useObserver(() => O$.GetFriendState(e).nickname);
}
export function tG(e) {
	return useObserver(() => e && O$.GetFriendState(e));
}
function G(e, t) {
	return useObserver(() => e && O$.GetFriendState(e)?.persona[t]);
}
export function Sv(e) {
	return G(e, "avatar_url");
}
export function gt(e) {
	return useObserver(() => e && O$.GetFriendState(e)?.persona);
}
export function TT(e) {
	return useObserver(() => !!e && !!O$.GetFriendState(e));
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
	const [t, setT] = useState(false);
	const [n, setN] = useState("");
	const a = useCallback(
		(e) => {
			console.debug(`MultiplayerSessionShareURLChanged: '${e}'`);
			if (e && !t) {
				setT(true);
			}
			setN(e);
		},
		[setN, setT],
	);
	useEffect(
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
	const e = useObserver(() => qw().GetServicesInitialized());
	return useQuery({
		queryKey: ["FriendsStore", "CurrentUserCachedAvatarURL"],
		queryFn: async () =>
			BSharedJSContextHasMethod("WebChat.GetLocalAvatarBase64")
				? await SteamClient.WebChat.GetLocalAvatarBase64()
				: null,
		enabled: e,
	}).data;
}

class CReviver {
	constructor(apps: any[]) {
		this.setApps = new Set(apps);
	}

	setApps: Set<any>;

	toJSON() {
		return {
			setApps: Array.from(this.setApps),
		};
	}

	static Revive(e: string, apps: any[]) {
		if (e == "setApps") {
			return new Set(apps);
		} else {
			return apps;
		}
	}
}

class CFriendStore {
	constructor() {
		makeAutoObservable(this);
	}

	m_CMInterface;
	m_FriendsUIFriendStore;
	m_ownedGamesCache = new CFriendsOwnedGamesCache(
		{
			storage: new A(),
			strStorageKey: "FriendsOwnedGames_storage",
			nStorageVersion: 1,
			nMaxLifetimeMS: w,
			nFailureRetryIntervalMS: B,
			reviver: CReviver.Revive,
		},
		this.FetchOwnedGames,
		v,
		(e, t) => {
			CollectionStore.OnFriendOwnedAppsChanged(e);
		},
	);
	@observable m_mapOwnedGamesCacheErrors = new Map<number, EResult>();

	async Init(cm, friendsUIFriendStore) {
		this.m_CMInterface = cm;
		this.m_FriendsUIFriendStore = friendsUIFriendStore;
		this.m_CMInterface.AddOnLogonCallback(this.OnConnectedToSteam);
		this.m_FriendsUIFriendStore.AddPersonaStateChangedCallback(
			this.OnPersonaStateChanged,
		);
		this.m_ownedGamesCache.Init();
		await this.InitPlayerCache();
	}

	@observable m_mapPlayerCache = new Map();
	m_Storage = new A();
	k_strPlayerCacheKey = "friendstore_playercache";

	async InitPlayerCache() {
		const e = await this.m_Storage.GetObject(this.k_strPlayerCacheKey);
		this.m_mapPlayerCache.clear();
		if (e) {
			for (let t of e) {
				const e = new CSteamID(t.steamid).GetAccountID();
				const r = new IC();
				r.set_friendid(t.steamid);
				r.set_player_name(t.persona_name);
				r.set_avatar_hash(w_1(t.avatar_hash));
				const n = new $c(e, r, 18);
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
			CollectionStore.BIsFriendInAnyCollection(e.steamid.GetAccountID())
		);
	}

	@bind OnPersonaStateChanged(e) {
		if (this.BShouldCachePlayer(e)) {
			this.m_mapPlayerCache.set(e.steamid.GetAccountID(), e);
			const playerCache = Array.from(this.m_mapPlayerCache.values()).map(
				(e) => ({
					steamid: e.steamid.ConvertTo64BitString(),
					persona_name: e.persona.m_strPlayerName,
					avatar_hash: e.persona.m_strAvatarHash,
					nickname: e.nickname,
				}),
			);
			this.m_Storage.StoreObject(this.k_strPlayerCacheKey, playerCache);
		}
	}

	@bind OnConnectedToSteam() {
		if (qw().BIsInFamilyGroup()) {
			for (let steamid of qw().GetCurrentUser().rgFamilyGroupMembers) {
				this.GetFriendState(steamid.accountid);
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

	// any = CSteamID
	GetFriendState(steamid: number | any) {
		const accountid =
			typeof steamid == "number" ? steamid : steamid.GetAccountID();
		return (
			this.m_mapPlayerCache.get(accountid) ||
			this.m_FriendsUIFriendStore.GetPlayer(accountid)
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

	IsLibraryAccessDenied(accountid: number) {
		switch (this.m_mapOwnedGamesCacheErrors.get(accountid)) {
			case undefined:
			case EResult.OK: {
				return false;
			}
			case EResult.AccessDenied: {
				return true;
			}
			default: {
				return this.GetOwnedGames(accountid).entries.length == 0;
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

	@bind async FetchOwnedGames(accountid: number) {
		let rgGames;
		let r = w_2.Init(G9);
		r.Body().set_steamid(
			CSteamID.InitFromAccountID(accountid).ConvertTo64BitString(),
		);
		r.Body().set_include_played_free_games(true);
		r.Body().set_skip_unvetted_apps(false);
		let ownedGamesMsg = await xt.GetOwnedGames(
			this.m_CMInterface.GetServiceTransport(),
			r,
		);
		let result = ownedGamesMsg.GetEResult();
		if (result != EResult.OK) {
			if (result != EResult.AccessDenied) {
				console.error(
					"Failed to retrieve friend's games data for steamid",
					accountid,
					"result was",
					ownedGamesMsg.GetEResult(),
					"msg",
					ownedGamesMsg.GetEMsg(),
				);
			}
			this.m_mapOwnedGamesCacheErrors.set(
				accountid,
				ownedGamesMsg.GetEResult(),
			);
			return;
		}
		rgGames = ownedGamesMsg
			.Body()
			.games()
			.map((e) => e.appid());
		this.m_mapOwnedGamesCacheErrors.delete(accountid);
		return new CReviver(rgGames);
	}

	@bind async LoadPersonaState(e) {
		const t = this.GetFriendState(e);
		await when(() => t.persona.m_bInitialized);
		return t.persona;
	}
}

export const O$ = new CFriendStore();
window.friendStore = O$;
