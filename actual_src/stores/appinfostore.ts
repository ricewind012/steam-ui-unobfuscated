import { useObserver } from "mobx-react-lite";
import { sf } from "./44846.js";
import { w } from "./12176.js";
import { by, IU } from "./92031.js";
import { TS as Config } from "./72476.js";
import { _z, BE, zQ } from "./10812.js";
import { AssertMsg } from "../utils/assert.js";
import { CCallbackList } from "../utils/callbackutils/index.js";
import { makeAutoObservable, ObservableMap } from "mobx";
import { ESteamRealm } from "../clienttypes/realm.js";

class CRichPresenceLocalization {
	m_nLastUpdated = 0;
	// i.sH.map() ? whatever that is
	m_mapLanguages = new ObservableMap<string, any>();
	m_appid;
	m_fetching = null;

	constructor(appid) {
		this.m_appid = appid;
	}

	GetAppID() {
		return this.m_appid;
	}

	GetTokenList(strLang: string) {
		if (this.m_mapLanguages.has(strLang)) {
			return this.m_mapLanguages.get(strLang);
		} else {
			return null;
		}
	}

	Localize(strToken: string, tokens) {
		let lang = Config.LANGUAGE;
		return u(
			strToken,
			this.GetTokenList(lang),
			lang != "english" ? this.GetTokenList("english") : null,
			this.m_appid,
			tokens,
		);
	}

	SubstituteParams(e, t) {
		let strLang = Config.LANGUAGE;
		return d(
			e,
			this.GetTokenList(strLang),
			strLang != "english" ? this.GetTokenList("english") : null,
			this.m_appid,
			t,
		);
	}
}

function u(strToken: string, tokens, fallback, appid, i) {
	if (!strToken.startsWith("#")) {
		console.log(
			"Token doesn't start with #:",
			strToken,
			"appid",
			appid,
			"tokens",
			tokens,
		);
		return "";
	}
	let token = strToken;
	strToken = strToken.toLowerCase();
	let s = "";
	if (tokens && tokens.has(strToken)) {
		s = tokens.get(strToken);
	}
	if (!s && fallback && fallback.has(strToken)) {
		s = fallback.get(strToken);
	}
	if (s) {
		s = d(s, tokens, fallback, appid, i);
	} else {
		if (tokens || fallback) {
			console.log(
				"No loc found for appid",
				appid,
				token,
				"Tokens:",
				tokens,
				"Fallback:",
				fallback,
			);
		}
		if (tokens && Config.EUNIVERSE != ESteamRealm.k_ESteamRealmGlobal) {
			return strToken;
		}
	}
	return s;
}

function d(e, tokens, fallback, appid, i) {
	let rgMatches = e.match(/{[A-za-z0-9_%#:]+}/g);
	if (rgMatches) {
		for (let match of rgMatches) {
			let a = u(A(match.slice(1, -1), i), tokens, fallback, appid, i);
			if (!a) {
				return "";
			}
			e = e.replace(match, a);
		}
	}
	return (e = A(e, i));
}

function A(e, t) {
	let rgMatches = e.match(/%[A-Za-z0-9_:]+%/g);
	if (rgMatches) {
		for (let match of rgMatches) {
			let r = match.slice(1, -1).toLowerCase();
			let i = t.get(r);
			if (i == null) {
				console.log("No rich presence found for", r);
			} else {
				e = e.replace(match, i);
			}
		}
	}
	return e;
}

export function Xe(e) {
	return useObserver(() => Vw.GetAppInfo(e));
}

export function gx(e) {
	return useObserver(() => e.map((e) => Vw.GetAppInfo(e)));
}

class CAppInfoStore {
	m_CMInterface;
	m_mapAppInfo = i.sH.map();
	m_mapRichPresenceLoc = i.sH.map();
	m_cAppInfoRequestsInFlight = 0;
	m_setPendingAppInfo = new Set();
	m_PendingAppInfoPromise;
	m_PendingAppInfoResolve;
	m_CacheStorage = null;
	m_fnCallbackOnAppInfoLoaded = new CCallbackList();

	constructor() {
		makeAutoObservable(this);
	}

	Init(e) {
		this.m_CMInterface = e;
	}

	BHavePendingAppInfoRequests() {
		return (
			this.m_setPendingAppInfo.size > 0 || this.m_cAppInfoRequestsInFlight > 0
		);
	}

	get CMInterface() {
		return this.m_CMInterface;
	}

	RegisterCallbackOnLoad(callback: () => void) {
		if (!this.BHavePendingAppInfoRequests()) {
			AssertMsg(
				false,
				"Registering for callback on appinfo load, but nothing queued",
			);
			callback();
			return;
		}
		this.m_fnCallbackOnAppInfoLoaded.Register(callback);
	}

	IsLoadingAppID(appid) {
		return this.m_setPendingAppInfo.has(appid);
	}

	GetAppInfo(appid) {
		AssertMsg(
			this.m_CMInterface,
			"CAppInfoStore.GetAppInfo called before Init",
		);
		if (!this.m_mapAppInfo.has(appid)) {
			let info = new by(appid);
			this.m_mapAppInfo.set(appid, info);
			this.QueueAppInfoRequest(appid);
		}
		return this.m_mapAppInfo.get(appid);
	}

	QueueAppInfoRequest(e) {
		if (e) {
			if (!this.m_setPendingAppInfo.size) {
				this.m_PendingAppInfoPromise = new Promise(
					(e) => (this.m_PendingAppInfoResolve = e),
				);
				window.setTimeout(() => this.FlushPendingAppInfo(), 25);
			}
			this.m_setPendingAppInfo.add(e);
			return this.m_PendingAppInfoPromise;
		} else {
			return Promise.resolve();
		}
	}

	async FlushPendingAppInfo() {
		const resolve = this.m_PendingAppInfoResolve;
		const rgAppInfoBatch = Array.from(this.m_setPendingAppInfo);
		this.m_PendingAppInfoPromise = undefined;
		this.m_PendingAppInfoResolve = undefined;
		this.m_setPendingAppInfo.clear();
		await this.LoadAppInfoBatch(rgAppInfoBatch);
		resolve?.();
	}

	async LoadAppInfoBatch(rgAppInfoBatch: any[]) {
		this.m_cAppInfoRequestsInFlight++;
		let t = await this.LoadAppInfoBatchFromLocalCache(rgAppInfoBatch);
		if (t.length) {
			console.log("Loading batch of App Info from Steam: ", t);
			await this.m_CMInterface?.WaitUntilLoggedOn();
			let e = w.Init(_z);
			e.Body().set_language(sf(Config.LANGUAGE));
			const r = 50;
			while (t.length > 0) {
				const n = Math.min(r, t.length);
				const i = t.slice(0, n);
				t = t.slice(n);
				e.Body().set_appids(i);
				const a = await BE.GetApps(this.m_CMInterface.GetServiceTransport(), e);
				if (a.GetEResult() == 1) {
					this.OnGetAppsResponse(a);
				} else {
					console.error(
						`Error when calling CommunityService.GetApps: EResult=${a.GetEResult()}, AppIDs:`,
						i,
					);
				}
			}
		}
		if (
			--this.m_cAppInfoRequestsInFlight == 0 &&
			this.m_setPendingAppInfo.size == 0
		) {
			this.m_fnCallbackOnAppInfoLoaded.Dispatch();
			this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks();
		}
	}

	OnGetAppsResponse(msg) {
		let rgAppInfoBatch = [];
		for (let app of msg.Body().apps()) {
			let info = this.m_mapAppInfo.get(app.appid());
			AssertMsg(
				info,
				`Got AppInfo response for unrequested AppID: ${app.appid()}`,
			);
			if (info) {
				info = new by(app.appid());
				info.DeserializeFromMessage(app);
				this.m_mapAppInfo.set(app.appid(), info);
				rgAppInfoBatch.push(info);
			}
		}
		this.SaveAppInfoBatchToLocalCache(rgAppInfoBatch);
	}

	OnAppOverviewChange(e) {
		for (let t of e) {
			const info = new by(t.appid());
			info.DeserializeFromAppOverview(t);
			if (info.is_initialized) {
				this.m_mapAppInfo.set(t.appid(), info);
			}
		}
	}

	async EnsureAppInfoForAppIDs(rgAppIDs: any[]) {
		let bMaybeSuccess = false;
		rgAppIDs.forEach((appid) => {
			let info = this.m_mapAppInfo.get(appid);
			if (info) {
				if (!info.is_valid) {
					bMaybeSuccess = true;
				}
			} else {
				info = new by(appid);
				this.m_mapAppInfo.set(appid, info);
				this.QueueAppInfoRequest(appid);
				bMaybeSuccess = true;
			}
		});
		if (bMaybeSuccess && this.m_PendingAppInfoPromise !== undefined) {
			return this.m_PendingAppInfoPromise;
		} else {
			return Promise.resolve();
		}
	}

	SetCacheStorage(storage) {
		this.m_CacheStorage = storage;
	}

	GetCacheKeyForAppID(appid) {
		return `APPINFO_${appid}`;
	}

	async LoadAppInfoBatchFromLocalCache(rgAppInfoBatch: any[]) {
		if (!this.m_CacheStorage) {
			return rgAppInfoBatch;
		}
		console.log("Loading batch of App Info from Local Cache: ", rgAppInfoBatch);
		const dt = new Date(new Date().getTime() - 1209600000);
		const r = async (e) => {
			const data = await this.m_CacheStorage?.GetObject(
				this.GetCacheKeyForAppID(e),
			);
			if (!data) {
				return e;
			}
			let info = this.m_mapAppInfo.get(e);
			AssertMsg(
				info,
				"Didn't find AppInfo in our map when loading from cache but it should've been there?",
			);
			if (info) {
				info = new by(e);
				info.DeserializeFromCacheObject(data);
				if (info.is_initialized) {
					this.m_mapAppInfo.set(e, info);
					if (info.time_updated_from_server < dt) {
						return e;
					} else {
						return null;
					}
				} else {
					console.warn("Failed to deserialize cached App Info: ", e, data);
					return e;
				}
			} else {
				return e;
			}
		};
		let n = rgAppInfoBatch.map((e) => r(e));
		return (await Promise.all(n)).filter((e) => e !== null);
	}

	async SaveAppInfoBatchToLocalCache(rgAppInfoBatch: any[]) {
		if (this.m_CacheStorage) {
			console.log(
				"Saving batch of App Info to Local Cache: ",
				rgAppInfoBatch.map((e) => e.appid),
			);
			for (const t of rgAppInfoBatch) {
				const e = t.SerializeToCacheObject();
				if (e) {
					this.m_CacheStorage.StoreObject(this.GetCacheKeyForAppID(t.appid), e);
				}
			}
		}
	}

	Localize(appid, strToken: string, r) {
		const n = this.GetRichPresenceLoc(appid);
		if (n) {
			return n.Localize(strToken, r);
		} else if (Config.EUNIVERSE != ESteamRealm.k_ESteamRealmGlobal) {
			console.log(
				`Unable to find app localization information for app ${appid} token ${strToken}, this may not have had a chance to load yet`,
			);
			return strToken;
		} else {
			return "";
		}
	}

	GetRichPresenceLoc(e) {
		if (this.m_mapRichPresenceLoc.has(e.toString())) {
			let t = this.m_mapRichPresenceLoc.get(e.toString());
			if (t.m_nLastUpdated + IU * 60000 < Date.now()) {
				this.QueueRichPresenceLocRequest(t);
			}
			return t;
		}
		let t = new CRichPresenceLocalization(e);
		this.m_mapRichPresenceLoc.set(e.toString(), t);
		this.QueueRichPresenceLocRequest(t);
		return t;
	}

	GetRichPresenceLocAsync(e) {
		let t = this.GetRichPresenceLoc(e);
		if (t.m_nLastUpdated) {
			return Promise.resolve(t);
		} else {
			return t.m_fetching;
		}
	}

	OnRichPresenceLocUpdate(e, t) {
		e.m_nLastUpdated = Date.now();
		for (let r of t) {
			let t = r.language();
			let n = e.m_mapLanguages.get(t);
			if (n) {
				n.clear();
			} else {
				e.m_mapLanguages.set(t, new Map());
				n = e.m_mapLanguages.get(t);
			}
			for (let e of r.tokens()) {
				n?.set(e.name().toLowerCase(), e.value());
			}
		}
	}

	QueueRichPresenceLocRequest(e) {
		if (!e.m_fetching) {
			e.m_fetching = this.m_CMInterface
				.WaitUntilLoggedOn()
				.then(() => {
					let msg = w.Init(zQ);
					msg.Body().set_appid(e.GetAppID());
					msg.Body().set_language(Config.LANGUAGE);
					return BE.GetAppRichPresenceLocalization(
						this.m_CMInterface.GetServiceTransport(),
						msg,
					);
				})
				.then((msg) => {
					e.m_fetching = null;
					if (msg.GetEResult() != 1) {
						return Promise.reject();
					} else {
						this.OnRichPresenceLocUpdate(e, msg.Body().token_lists());
						return Promise.resolve(e);
					}
				});
			e.m_fetching.catch(() => {
				e.m_fetching = null;
			});
		}
		return e.m_fetching;
	}
}
Cg([i.XI], CAppInfoStore.prototype, "OnGetAppsResponse", null);
Cg([i.XI], CAppInfoStore.prototype, "OnRichPresenceLocUpdate", null);
export const Vw = new CAppInfoStore();
