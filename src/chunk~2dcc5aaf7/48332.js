import n, { Cg } from "./34629.js";
import i from "./83957.js";
import _s from "./37322.js";
import o, { Gn } from "./89193.js";
import { S$ } from "./44846.js";
import c from "./12176.js";
import m from "./8573.js";
import u from "./54946.js";
import d, { xv } from "./72476.js";
import { aj } from "./63088.js";
import { w } from "./49455.js";
import g from "./36813.js";
import h from "./31930.js";
import C from "./93960.js";
const a = i;
function _() {
	if (d.TS.IN_MOBILE) {
		return d.NQ;
	} else {
		return xv();
	}
}
const f = "(1)";
export class s {
	m_WebUIServiceTransport;
	m_unAccountID;
	m_Transport = null;
	m_Storage = null;
	m_TextFilterPreferences = {
		eTextFilterSetting: 3,
		bIgnoreFriends: false,
	};
	m_TextFilterWords;
	m_mapPlayerCache = new Map();
	m_strBannedWords = "";
	m_strProfanityWords = "";
	m_strCleanWords = "";
	m_strBannedPattern = "";
	m_strCleanPattern = "";
	m_regexBannedWords = null;
	m_regexCleanWords = null;
	m_bShownFilterTip = false;
	m_bInitialized = false;
	m_DataAccess;
	constructor(e) {
		Gn(this);
		let t = new u.B4();
		this.m_TextFilterPreferences = {
			eTextFilterSetting: t.text_filter_setting(),
			bIgnoreFriends: t.text_filter_ignore_friends(),
		};
		this.m_TextFilterWords = new u.Ey();
		this.m_DataAccess = e;
	}
	async Init(e = 0, t = null, r = null) {
		this.m_bInitialized = false;
		this.m_WebUIServiceTransport = h.N;
		this.m_unAccountID = e;
		this.m_Transport = t;
		this.m_Storage = r;
		this.m_strBannedWords = "";
		this.m_strProfanityWords = "";
		this.m_strCleanWords = "";
		this.InitSteamEngineLanguages();
		await this.LoadFilter();
		await this.LoadTextFilterPreferences();
		await this.LoadTextFilterWords();
		await this.RequestUpdatedSettings();
		await this.LoadLanguages();
		this.OnFilterDataChanged();
		this.m_bInitialized = true;
	}
	InitSteamEngineLanguages() {
		if (this.m_WebUIServiceTransport.BIsValid()) {
			this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
				g.UP.NotifyTextFilterDictionaryChangedHandler,
				this.OnTextFilterDictionaryChanged,
			);
			this.InitSteamEngineLanguage(d.TS.LANGUAGE);
			if (d.TS.LANGUAGE !== "english") {
				this.InitSteamEngineLanguage("english");
			}
		}
	}
	OnTextFilterDictionaryChanged(e) {
		this.LoadLanguages().then(() => {
			this.OnFilterDataChanged();
		});
		return 1;
	}
	InitSteamEngineLanguage(e) {
		const t = c.w.Init(g.fx);
		t.Body().set_language(e);
		t.Body().set_type("profanity");
		g.UP.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport);
		t.Body().set_type("banned");
		g.UP.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport);
	}
	GetSteamEngineTextFilterDictionary(e, t) {
		const r = c.w.Init(g.i6);
		r.Body().set_language(e);
		r.Body().set_type(t);
		return g.UP.SendMsgGetTextFilterDictionary(r, this.m_WebUIServiceTransport);
	}
	GetStorageKey(e) {
		return `${e}_${this.m_unAccountID}`;
	}
	async LoadTextFilterPreferences() {
		if (this.m_Storage) {
			let e = await this.m_Storage.GetObject(
				this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
			);
			if (e) {
				this.m_TextFilterPreferences = e;
			}
		}
	}
	SaveTextFilterPreferences() {
		if (this.m_Storage) {
			this.m_Storage.StoreObject(
				this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
				this.m_TextFilterPreferences,
			);
		}
	}
	ObfuscateString(e) {
		try {
			const t = new TextEncoder().encode(f + e);
			return _s.iI(t);
		} catch (e) {
			return "";
		}
	}
	DeobfuscateString(e) {
		try {
			const t = _s.bg(e);
			let r = new TextDecoder().decode(t);
			if (r.startsWith(f)) {
				r = r.slice(3);
				return r;
			} else {
				console.log(
					`DeobfuscateString given invalid base64 data, ignoring: ${e}`,
				);
				return "";
			}
		} catch (e) {
			return "";
		}
	}
	async LoadObfuscatedString(e) {
		if (this.m_Storage) {
			let t = await this.m_Storage.GetString(this.GetStorageKey(e));
			if (t) {
				return this.DeobfuscateString(t);
			}
		}
		return null;
	}
	async SaveObfuscatedString(e, t) {
		if (this.m_Storage) {
			this.m_Storage.StoreString(
				this.GetStorageKey(e),
				this.ObfuscateString(t),
			);
		}
	}
	async LoadTextFilterWords() {
		let e = await this.LoadObfuscatedString("CTextFilterStore_TextFilterWords");
		if (e) {
			try {
				this.m_TextFilterWords = u.Ey.fromObject(JSON.parse(e));
			} catch (t) {
				console.warn("Error parsing cached text filter word list", e);
				this.m_TextFilterWords = new u.Ey();
			}
		}
	}
	SaveTextFilterWords() {
		this.SaveObfuscatedString(
			"CTextFilterStore_TextFilterWords",
			JSON.stringify(this.m_TextFilterWords.toObject()),
		);
	}
	async LoadFilter() {
		let e = await this.LoadObfuscatedString(
			"CTextFilterStore_strBannedPattern",
		);
		let t = await this.LoadObfuscatedString("CTextFilterStore_strCleanPattern");
		if (e != null && t != null) {
			this.BRebuildFilter(e, t);
		}
	}
	SaveFilter() {
		this.SaveObfuscatedString(
			"CTextFilterStore_strBannedPattern",
			this.m_strBannedPattern,
		);
		this.SaveObfuscatedString(
			"CTextFilterStore_strCleanPattern",
			this.m_strCleanPattern,
		);
	}
	async RequestUpdatedSettings() {
		let e = new u.B4();
		if (this.m_unAccountID !== 0) {
			try {
				if (this.m_Transport) {
					let t = c.w.Init(u.tz);
					e = (await u.xt.GetCommunityPreferences(this.m_Transport, t))
						.Body()
						.preferences();
				} else {
					let t = {
						sessionid: d.TS.SESSIONID,
						origin: _(),
					};
					const r = await a.get(
						`${d.TS.COMMUNITY_BASE_URL}textfilter/ajaxgetcommunitypreferences`,
						{
							params: t,
							withCredentials: true,
						},
					);
					e = u.B4.fromObject(r.data.preferences);
				}
			} catch (e) {}
		}
		this.UpdateCommunityPreferences(e);
		if (
			e.text_filter_words_revision() !==
			this.m_TextFilterWords.text_filter_words_revision()
		) {
			let t = new u.Ey();
			if (e.text_filter_words_revision() !== 0) {
				try {
					if (this.m_Transport) {
						let e = c.w.Init(u.SC);
						t = (await u.xt.GetTextFilterWords(this.m_Transport, e))
							.Body()
							.words();
					} else {
						let e = {
							sessionid: d.TS.SESSIONID,
							origin: _(),
						};
						const r = await a.get(
							`${d.TS.COMMUNITY_BASE_URL}textfilter/ajaxgettextfiltercustomwords`,
							{
								params: e,
								withCredentials: true,
							},
						);
						t = u.Ey.fromObject(r.data.words);
					}
				} catch (e) {}
			}
			this.UpdateTextFilterWords(t);
		}
	}
	UpdateCommunityPreferences(e) {
		let t = false;
		if (
			e.text_filter_setting() !==
			this.m_TextFilterPreferences?.eTextFilterSetting
		) {
			this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting();
			t = true;
		}
		if (
			e.text_filter_ignore_friends() !==
			this.m_TextFilterPreferences.bIgnoreFriends
		) {
			this.m_TextFilterPreferences.bIgnoreFriends =
				e.text_filter_ignore_friends();
			t = true;
		}
		if (t) {
			this.SaveTextFilterPreferences();
		}
	}
	get TextFilterPreferences() {
		return this.m_TextFilterPreferences;
	}
	UpdateTextFilterWords(e) {
		this.m_TextFilterWords = e;
		this.SaveTextFilterWords();
	}
	m_nLoadLanguagesRetryTimeout = undefined;
	async LoadLanguages(e = 15) {
		this.m_strBannedWords = "";
		this.m_strProfanityWords = "";
		this.m_strCleanWords = "";
		try {
			await this.LoadLanguage(d.TS.LANGUAGE);
			if (d.TS.LANGUAGE !== "english") {
				await this.LoadLanguage("english");
			}
		} catch (t) {
			if (this.m_nLoadLanguagesRetryTimeout) {
				w(
					!this.m_nLoadLanguagesRetryTimeout,
					"Got two concurrent calls to TextFilteringStore.LoadLanguages",
				);
				window.clearTimeout(this.m_nLoadLanguagesRetryTimeout);
				this.m_nLoadLanguagesRetryTimeout = undefined;
			}
			e = Math.min(e * 2, 3600);
			console.warn("LoadLanguages caught", t, "retry in", e, "seconds");
			this.m_nLoadLanguagesRetryTimeout = window.setTimeout(async () => {
				this.m_nLoadLanguagesRetryTimeout = undefined;
				await this.LoadLanguages(e);
				this.OnFilterDataChanged();
			}, e * 1000);
		}
	}
	async LoadLanguage(e) {
		let t = "";
		let r = false;
		if (this.m_WebUIServiceTransport.BIsValid()) {
			try {
				{
					const t = await this.GetSteamEngineTextFilterDictionary(e, "banned");
					this.m_strBannedWords += t.Body().dictionary();
				}
				{
					const t = await this.GetSteamEngineTextFilterDictionary(
						e,
						"profanity",
					);
					this.m_strProfanityWords += t.Body().dictionary();
				}
				r = true;
			} catch (e) {
				console.warn("LoadLanguage caught while loading from cache:", e);
			}
		}
		if (!r) {
			t = `${
				d.TS.COMMUNITY_CDN_URL
			}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${_()}`;
			{
				const e = await a.get(t);
				this.m_strBannedWords += e.data;
			}
			t = `${
				d.TS.COMMUNITY_CDN_URL
			}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${_()}`;
			{
				const e = await a.get(t);
				this.m_strProfanityWords += e.data;
			}
		}
		t = `${
			d.TS.COMMUNITY_CDN_URL
		}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${_()}`;
		{
			const e = await a.get(t);
			this.m_strCleanWords += e.data;
		}
	}
	CreatePattern(e) {
		let t = e.filter((e) =>
			((e) => {
				if (e === "") {
					return false;
				}
				try {
					new RegExp(`\\b(${e})\\b`, "ugi");
					return true;
				} catch (t) {
					console.log(
						`'${e}' is an invalid expression, removing from text filter`,
					);
					return false;
				}
			})(e),
		);
		if (t.length > 0) {
			return `\\b(${t.join("|")})\\b`;
		} else {
			return "";
		}
	}
	OnFilterDataChanged() {
		let e = new RegExp(/\s*[\r\n]+\s*/g);
		let t = [];
		let r = [];
		switch (this.m_TextFilterPreferences.eTextFilterSetting) {
			case 0:
			case 3: {
				break;
			}
			case 2: {
				t = t.concat(this.m_strBannedWords.split(e));
				break;
			}
			default: {
				t = t.concat(
					this.m_strProfanityWords.split(e),
					this.m_strBannedWords.split(e),
				);
			}
		}
		t = t.concat(this.m_TextFilterWords.text_filter_custom_banned_words());
		r = this.m_strCleanWords.split(e);
		r = r.concat(this.m_TextFilterWords.text_filter_custom_clean_words());
		let n = this.CreatePattern(t);
		let i = this.CreatePattern(r);
		if (i != "") {
			i = `^(${i})$`;
		}
		if (this.BRebuildFilter(n, i)) {
			this.SaveFilter();
		}
	}
	BRebuildFilter(e, t) {
		if (e === this.m_strBannedPattern && t === this.m_strCleanPattern) {
			return false;
		}
		this.m_regexBannedWords = null;
		this.m_strBannedPattern = e;
		if (e !== "") {
			try {
				this.m_regexBannedWords = new RegExp(e, "ugi");
			} catch (e) {
				console.warn("Couldn't compile textfilter bannedwords regex");
				aj().ReportError(
					new Error(`Couldn't compile textfilter bannedwords regex: ${e}`),
				);
				this.m_strBannedPattern = "";
			}
		}
		this.m_regexCleanWords = null;
		this.m_strCleanPattern = t;
		if (t !== "") {
			try {
				this.m_regexCleanWords = new RegExp(t, "ugi");
			} catch (e) {
				console.warn("Couldn't compile textfilter cleanwords regex");
				aj().ReportError(
					new Error(`Couldn't compile textfilter cleanwords regex: ${e}`),
				);
				this.m_strCleanPattern = "";
			}
		}
		return true;
	}
	CreateProfanityReplacement(e) {
		return "♥".repeat(e);
	}
	BHasFilter() {
		return this.m_regexBannedWords != null;
	}
	BShownFilterTip() {
		return this.m_bShownFilterTip;
	}
	SetFilterTipShown(e) {
		this.m_bShownFilterTip = e;
	}
	FilterText(e, t) {
		if (!this.m_regexBannedWords) {
			return t;
		}
		let r = 0;
		if (typeof e == "string" && e !== "") {
			r = new m.b(e).GetAccountID();
		} else if (typeof e == "number") {
			r = e;
		}
		if (
			!t ||
			r == this.m_unAccountID ||
			(e &&
				this.m_TextFilterPreferences.bIgnoreFriends &&
				this.m_DataAccess.BIsFriend(r))
		) {
			return t;
		} else {
			return t.replace(this.m_regexBannedWords, (e) =>
				this.m_regexCleanWords && e.search(this.m_regexCleanWords) == 0
					? e
					: this.CreateProfanityReplacement(e.length),
			);
		}
	}
}
let y;
export function Q() {
	if (!y) {
		const e = new Set();
		let t = {
			sessionid: d.TS.SESSIONID,
			origin: _(),
		};
		a.get(`${d.TS.COMMUNITY_BASE_URL}textfilter/ajaxgetfriendslist`, {
			params: t,
			withCredentials: true,
		}).then((t) => {
			for (const r of t.data.friendslist?.friends ?? []) {
				if (S$(r.efriendrelationship)) {
					e.add(new m.b(r.ulfriendid).GetAccountID());
				}
			}
		});
		y = (t) => e.has(t);
	}
	return y;
}
Cg([o.sH], s.prototype, "m_TextFilterPreferences", undefined);
Cg([o.sH], s.prototype, "m_mapPlayerCache", undefined);
Cg([o.sH], s.prototype, "m_regexBannedWords", undefined);
Cg([o.sH], s.prototype, "m_regexCleanWords", undefined);
Cg([o.sH], s.prototype, "m_bInitialized", undefined);
Cg([o.XI], s.prototype, "Init", null);
Cg([C.o], s.prototype, "OnTextFilterDictionaryChanged", null);
Cg([o.XI], s.prototype, "UpdateCommunityPreferences", null);
Cg([o.XI], s.prototype, "BRebuildFilter", null);
