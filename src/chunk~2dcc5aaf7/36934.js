var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./44846.js");
var o = require(/*webcrack:missing*/ "./12176.js");
var l = require("./92031.js");
var c = require(/*webcrack:missing*/ "./72476.js");
class m {
	m_nLastUpdated = 0;
	m_mapLanguages = i.sH.map();
	m_appid;
	m_fetching = null;
	constructor(e) {
		this.m_appid = e;
	}
	GetAppID() {
		return this.m_appid;
	}
	GetTokenList(e) {
		if (this.m_mapLanguages.has(e)) {
			return this.m_mapLanguages.get(e);
		} else {
			return null;
		}
	}
	Localize(e, t) {
		let r = c.TS.LANGUAGE;
		return u(
			e,
			this.GetTokenList(r),
			r != "english" ? this.GetTokenList("english") : null,
			this.m_appid,
			t,
		);
	}
	SubstituteParams(e, t) {
		let r = c.TS.LANGUAGE;
		return d(
			e,
			this.GetTokenList(r),
			r != "english" ? this.GetTokenList("english") : null,
			this.m_appid,
			t,
		);
	}
}
function u(e, t, r, n, i) {
	if (!e.startsWith("#")) {
		console.log("Token doesn't start with #:", e, "appid", n, "tokens", t);
		return "";
	}
	let a = e;
	e = e.toLowerCase();
	let s = "";
	if (t && t.has(e)) {
		s = t.get(e);
	}
	if (!s && r && r.has(e)) {
		s = r.get(e);
	}
	if (s) {
		s = d(s, t, r, n, i);
	} else {
		if (t || r) {
			console.log("No loc found for appid", n, a, "Tokens:", t, "Fallback:", r);
		}
		if (t && c.TS.EUNIVERSE != 1) {
			return e;
		}
	}
	return s;
}
function d(e, t, r, n, i) {
	let a = e.match(/{[A-za-z0-9_%#:]+}/g);
	if (a) {
		for (let s of a) {
			let a = u(A(s.slice(1, -1), i), t, r, n, i);
			if (!a) {
				return "";
			}
			e = e.replace(s, a);
		}
	}
	return (e = A(e, i));
}
function A(e, t) {
	let r = e.match(/%[A-Za-z0-9_:]+%/g);
	if (r) {
		for (let n of r) {
			let r = n.slice(1, -1).toLowerCase();
			let i = t.get(r);
			if (i == null) {
				console.log("No rich presence found for", r);
			} else {
				e = e.replace(n, i);
			}
		}
	}
	return e;
}
var p = require("./10812.js");
var g = require(/*webcrack:missing*/ "./49455.js");
var h = require(/*webcrack:missing*/ "./79769.js");
export function Xe(e) {
	return (0, a.q3)(() => Vw.GetAppInfo(e));
}
export function gx(e) {
	return (0, a.q3)(() => e.map((e) => Vw.GetAppInfo(e)));
}
class f {
	m_CMInterface;
	m_mapAppInfo = i.sH.map();
	m_mapRichPresenceLoc = i.sH.map();
	m_cAppInfoRequestsInFlight = 0;
	m_setPendingAppInfo = new Set();
	m_PendingAppInfoPromise;
	m_PendingAppInfoResolve;
	m_CacheStorage = null;
	m_fnCallbackOnAppInfoLoaded = new h.lu();
	constructor() {
		(0, i.Gn)(this);
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
	RegisterCallbackOnLoad(e) {
		if (!this.BHavePendingAppInfoRequests()) {
			(0, g.w)(
				false,
				"Registering for callback on appinfo load, but nothing queued",
			);
			e();
			return;
		}
		this.m_fnCallbackOnAppInfoLoaded.Register(e);
	}
	IsLoadingAppID(e) {
		return this.m_setPendingAppInfo.has(e);
	}
	GetAppInfo(e) {
		(0, g.w)(this.m_CMInterface, "CAppInfoStore.GetAppInfo called before Init");
		if (!this.m_mapAppInfo.has(e)) {
			let t = new l.by(e);
			this.m_mapAppInfo.set(e, t);
			this.QueueAppInfoRequest(e);
		}
		return this.m_mapAppInfo.get(e);
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
		const e = this.m_PendingAppInfoResolve;
		const t = Array.from(this.m_setPendingAppInfo);
		this.m_PendingAppInfoPromise = undefined;
		this.m_PendingAppInfoResolve = undefined;
		this.m_setPendingAppInfo.clear();
		await this.LoadAppInfoBatch(t);
		e?.();
	}
	async LoadAppInfoBatch(e) {
		this.m_cAppInfoRequestsInFlight++;
		let t = await this.LoadAppInfoBatchFromLocalCache(e);
		if (t.length) {
			console.log("Loading batch of App Info from Steam: ", t);
			await this.m_CMInterface?.WaitUntilLoggedOn();
			let e = o.w.Init(p._z);
			e.Body().set_language((0, s.sf)(c.TS.LANGUAGE));
			const r = 50;
			while (t.length > 0) {
				const n = Math.min(r, t.length);
				const i = t.slice(0, n);
				t = t.slice(n);
				e.Body().set_appids(i);
				const a = await p.BE.GetApps(
					this.m_CMInterface.GetServiceTransport(),
					e,
				);
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
	OnGetAppsResponse(e) {
		let t = [];
		for (let r of e.Body().apps()) {
			let e = this.m_mapAppInfo.get(r.appid());
			(0, g.w)(e, `Got AppInfo response for unrequested AppID: ${r.appid()}`);
			if (e) {
				e = new l.by(r.appid());
				e.DeserializeFromMessage(r);
				this.m_mapAppInfo.set(r.appid(), e);
				t.push(e);
			}
		}
		this.SaveAppInfoBatchToLocalCache(t);
	}
	OnAppOverviewChange(e) {
		for (let t of e) {
			const e = new l.by(t.appid());
			e.DeserializeFromAppOverview(t);
			if (e.is_initialized) {
				this.m_mapAppInfo.set(t.appid(), e);
			}
		}
	}
	async EnsureAppInfoForAppIDs(e) {
		let t = false;
		e.forEach((e) => {
			let r = this.m_mapAppInfo.get(e);
			if (r) {
				if (!r.is_valid) {
					t = true;
				}
			} else {
				r = new l.by(e);
				this.m_mapAppInfo.set(e, r);
				this.QueueAppInfoRequest(e);
				t = true;
			}
		});
		if (t && this.m_PendingAppInfoPromise !== undefined) {
			return this.m_PendingAppInfoPromise;
		} else {
			return Promise.resolve();
		}
	}
	SetCacheStorage(e) {
		this.m_CacheStorage = e;
	}
	GetCacheKeyForAppID(e) {
		return "APPINFO_" + e;
	}
	async LoadAppInfoBatchFromLocalCache(e) {
		if (!this.m_CacheStorage) {
			return e;
		}
		console.log("Loading batch of App Info from Local Cache: ", e);
		const t = new Date(new Date().getTime() - 1209600000);
		const r = async (e) => {
			const r = await this.m_CacheStorage?.GetObject(
				this.GetCacheKeyForAppID(e),
			);
			if (!r) {
				return e;
			}
			let n = this.m_mapAppInfo.get(e);
			(0, g.w)(
				n,
				"Didn't find AppInfo in our map when loading from cache but it should've been there?",
			);
			if (n) {
				n = new l.by(e);
				n.DeserializeFromCacheObject(r);
				if (n.is_initialized) {
					this.m_mapAppInfo.set(e, n);
					if (n.time_updated_from_server < t) {
						return e;
					} else {
						return null;
					}
				} else {
					console.warn("Failed to deserialize cached App Info: ", e, r);
					return e;
				}
			} else {
				return e;
			}
		};
		let n = e.map((e) => r(e));
		return (await Promise.all(n)).filter((e) => e !== null);
	}
	async SaveAppInfoBatchToLocalCache(e) {
		if (this.m_CacheStorage) {
			console.log(
				"Saving batch of App Info to Local Cache: ",
				e.map((e) => e.appid),
			);
			for (const t of e) {
				const e = t.SerializeToCacheObject();
				if (e) {
					this.m_CacheStorage.StoreObject(this.GetCacheKeyForAppID(t.appid), e);
				}
			}
		}
	}
	Localize(e, t, r) {
		const n = this.GetRichPresenceLoc(e);
		if (n) {
			return n.Localize(t, r);
		} else if (c.TS.EUNIVERSE != 1) {
			console.log(
				`Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`,
			);
			return t;
		} else {
			return "";
		}
	}
	GetRichPresenceLoc(e) {
		if (this.m_mapRichPresenceLoc.has(e.toString())) {
			let t = this.m_mapRichPresenceLoc.get(e.toString());
			if (t.m_nLastUpdated + l.IU * 60000 < Date.now()) {
				this.QueueRichPresenceLocRequest(t);
			}
			return t;
		}
		let t = new m(e);
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
					let t = o.w.Init(p.zQ);
					t.Body().set_appid(e.GetAppID());
					t.Body().set_language(c.TS.LANGUAGE);
					return p.BE.GetAppRichPresenceLocalization(
						this.m_CMInterface.GetServiceTransport(),
						t,
					);
				})
				.then((t) => {
					e.m_fetching = null;
					if (t.GetEResult() != 1) {
						return Promise.reject();
					} else {
						this.OnRichPresenceLocUpdate(e, t.Body().token_lists());
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
(0, n.Cg)([i.XI], f.prototype, "OnGetAppsResponse", null);
(0, n.Cg)([i.XI], f.prototype, "OnRichPresenceLocUpdate", null);
export const Vw = new f();
