export let vl = l.vl;
export let lQ = l.lQ;
export let gR = l.gR;
export let cc = l.cc;
export let _l = l._l;
export let TW = l.TW;
export let Nm = l.Nm;
export let Hq = l.Hq;
export let $z = l.$z;
export let $w = l.$w;
var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./44846.js");
var s = require("./28987.js");
var o = require("./72476.js");
var a = require("./53833.js");
var c = require("./79769.js");
var l = require("./11010.js");
export class A0 {
	m_mapTokens = new Map();
	m_mapFallbackTokens = new Map();
	m_cbkTokensChanged = new c.lu();
	m_rgLocalesToUse;
	static sm_ErrorReportingStore;
	static InstallErrorReportingStore(e) {
		this.sm_ErrorReportingStore = e;
	}
	static GetLanguageFallback(e) {
		if (e === "sc_schinese") {
			return "schinese";
		} else {
			return "english";
		}
	}
	static GetELanguageFallback(e) {
		if (e === 29) {
			return 6;
		} else {
			return 0;
		}
	}
	static IsELanguageValidInRealm(e, t) {
		return (
			t === (e === 29 ? s.TU.k_ESteamRealmChina : s.TU.k_ESteamRealmGlobal)
		);
	}
	static GetLanguageListForRealms(e) {
		const t = new Array();
		for (let n = 0; n < 31; n++) {
			for (const r of e) {
				if (this.IsELanguageValidInRealm(n, r)) {
					t.push(n);
					break;
				}
			}
		}
		return t;
	}
	InitFromObjects(e, t, n, r, i) {
		if (!i) {
			this.m_mapTokens.clear();
		}
		const s = {
			...(n || {}),
			...e,
		};
		const o = {
			...(r || {}),
			...(t || {}),
		};
		this.AddTokens(s, o);
		this.m_cbkTokensChanged.Dispatch();
	}
	InitDirect(e, t) {
		this.m_mapTokens.clear();
		this.m_mapFallbackTokens.clear();
		this.AddTokens(e, t);
		this.m_cbkTokensChanged.Dispatch();
	}
	AddTokens(e, t) {
		Object.keys(e).forEach((t) => {
			this.m_mapTokens.set(t, e[t]);
		});
		if (t) {
			Object.keys(t).forEach((e) => {
				if (!this.m_mapTokens.has(e)) {
					this.m_mapTokens.set(e, t[e]);
				}
				this.m_mapFallbackTokens.set(e, t[e]);
			});
		}
	}
	GetTokensChangedCallbackList() {
		return this.m_cbkTokensChanged;
	}
	GetPreferredLocales() {
		if (this.m_rgLocalesToUse) {
			return this.m_rgLocalesToUse;
		} else if (navigator && navigator.languages) {
			return navigator.languages;
		} else {
			return ["en-US"];
		}
	}
	GetELanguageFallbackOrder(e = null) {
		let t = new Array();
		t.push((0, i.sf)(o.TS.LANGUAGE));
		(o.TS.SUPPORTED_LANGUAGES || []).forEach((e) => {
			if (e.value != o.TS.LANGUAGE) {
				t.push((0, i.sf)(e.value));
			}
		});
		if (e) {
			A0.GetLanguageListForRealms(e).forEach((e) => {
				if (t.indexOf(e) == -1) {
					t.push(e);
				}
			});
		}
		return t;
	}
	SetPreferredLocales(e) {
		this.m_rgLocalesToUse = e;
	}
	BLooksLikeToken(e) {
		return !!e && e.length > 0 && e.charAt(0) == "#";
	}
	LocalizeIfToken(e, t) {
		if (this.BLooksLikeToken(e)) {
			return this.LocalizeString(e, t);
		} else {
			return e;
		}
	}
	LocalizeString(e, t) {
		if (!this.BLooksLikeToken(e)) {
			return;
		}
		let n = this.m_mapTokens.get(e.substring(1));
		if (n !== undefined) {
			return n;
		}
		if (!t && A0.sm_ErrorReportingStore) {
			A0.sm_ErrorReportingStore.ReportError(
				new Error(
					`Unable to find localization token '${e}' for language '${o.TS.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`,
				),
				{
					bIncludeMessageInIdentifier: true,
				},
			);
		}
	}
	LocalizeStringFromFallback(e) {
		if (!e || e.length == 0 || e.charAt(0) != "#") {
			return;
		}
		let t = this.m_mapFallbackTokens.get(e.substring(1));
		if (t !== undefined) {
			return t;
		} else {
			return undefined;
		}
	}
	static GetTokenWithFallback(e) {
		if (!e) {
			return "";
		}
		const t = (0, i.sf)(o.TS.LANGUAGE);
		const n = e.find((e) => e.language == t);
		if (n) {
			return n.localized_string;
		}
		const r = A0.GetELanguageFallback(t);
		const s = e.find((e) => e.language == r);
		return s?.localized_string ?? "";
	}
	static BHasTokenLanguage(e, t) {
		return Boolean(t.find((t) => t.language == e));
	}
}
export function c9(e) {
	return pf.LocalizeString(e, true) != null;
}
export function we(e, ...t) {
	let n = pf.LocalizeString(e);
	if (n === undefined) {
		return e;
	} else {
		return b(n, ...t);
	}
}
export function PP(e, ...t) {
	let n = pf.LocalizeString(e);
	if (n === undefined) {
		return e;
	}
	let i;
	let s = [];
	let o = /(.*?)%(\d+)\$s/g;
	let a = 0;
	while ((i = o.exec(n))) {
		a += i[0].length;
		s.push(i[1]);
		let e = parseInt(i[2]);
		if (e >= 1 && e <= t.length) {
			s.push(t[e - 1]);
		}
	}
	s.push(n.substr(a));
	return r.createElement(r.Fragment, null, ...s);
}
export function TG(e, t, ...n) {
	if (t === 1 || t === "1") {
		return PP(e, t, ...n);
	} else {
		return PP(e + "_Plural", t.toLocaleString(), ...n);
	}
}
export function oW(e, ...t) {
	let n = pf.LocalizeIfToken(e);
	if (n === undefined) {
		return e;
	} else {
		return _(n, ...t);
	}
}
export function um(e, t, ...n) {
	let r;
	r = we(t === 1 || t === "1" ? e : e + "_Plural", t);
	if (r === undefined) {
		return e;
	} else {
		return _(r, ...n);
	}
}
function _(e, ...t) {
	let n;
	let i = [];
	let s = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
	let o = 0;
	while ((n = s.exec(e))) {
		o += n[0].length;
		i.push(n[1]);
		let e = parseInt(n[2]);
		let s = n[3] || "";
		let a = _(s, ...t);
		let c = (e >= 1 && e <= t.length ? t[e - 1] : null)
			? r.cloneElement(t[e - 1], {}, s ? a : null)
			: s;
		i.push(c);
	}
	i.push(e.substr(o));
	return r.createElement(r.Fragment, null, ...i);
}
export function Yp(e, t, ...n) {
	if (t === 1 || t === "1") {
		return we(e, t, ...n);
	} else {
		return we(e + "_Plural", t, ...n);
	}
}
function b(e, ...t) {
	if (t.length == 0) {
		return e;
	} else {
		return (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, n) {
			if (n <= t.length && n >= 1) {
				let e = t[n - 1];
				return String(e == null ? "" : e);
			}
			return e;
		}));
	}
}
export class NT {
	static Set(e, t, n) {
		if (e.length <= t) {
			if (t >= 31) {
				return e;
			}
			e = (0, a.$Y)(e, t + 1, null);
		}
		e[t] = n;
		return e;
	}
	static Get(e, t) {
		return (e && e.length > t && e[t]) || "";
	}
	static GetWithFallback(e, t) {
		if (e) {
			return NT.Get(e, t) || NT.Get(e, A0.GetELanguageFallback(t));
		}
		return null;
	}
}
const v = {
	english: "en",
	german: "de",
	french: "fr",
	italian: "it",
	korean: "ko",
	latam: "es-419",
	spanish: "es",
	schinese: "zh-cn",
	tchinese: "zh-tw",
	russian: "ru",
	thai: "th",
	japanese: "ja",
	brazilian: "pt-br",
	portuguese: "pt",
	polish: "pl",
	danish: "da",
	dutch: "nl",
	finnish: "fi",
	norwegian: "no",
	swedish: "sv",
	hungarian: "hu",
	czech: "cs",
	romanian: "ro",
	turkish: "tr",
	arabic: "ar",
	bulgarian: "bg",
	greek: "el",
	ukrainian: "uk",
	vietnamese: "vi",
	indonesian: "id",
	sc_schinese: "zh-cn",
	koreana: "ko",
};
export const bi = {
	"en-US": 0,
	"de-DE": 1,
	"fr-FR": 2,
	"it-IT": 3,
	"ko-KR": 4,
	"es-ES": 5,
	"zh-CH": 6,
	"zh-CN": 7,
	"ru-RU": 8,
	"th-TH": 9,
	"ja-JP": 10,
	"pt-PT": 11,
	"pl-PL": 12,
	"da-DK": 13,
	"nl-NL": 14,
	"fi-FI": 15,
	"nb-NO": 16,
	"sv-SE": 17,
	"hu-HU": 18,
	"cs-CZ": 19,
	"ro-RO": 20,
	"tr-TR": 21,
	"pt-BR": 22,
	"bg-BG": 23,
	"el-GR": 24,
	"ar-SA": 25,
	"uk-UA": 26,
	"es-419": 27,
	"vi-VN": 28,
	"id-ID": 30,
};
export function l4() {
	return v[o.TS.LANGUAGE] || null;
}
export function pN(e) {
	let t;
	let n = new Promise((e) => (t = e));
	let r = Array(e.length);
	let i = e.length;
	e.forEach((e, n) => {
		Promise.resolve(e)
			.then((e) => {
				r[n] = e;
				i--;
				if (i == 0) {
					t(r);
				}
			})
			.catch((e) => {
				console.error("Failed to load localization file: " + e);
				r[n] = {};
				i--;
				if (i == 0) {
					t(r);
				}
			});
	});
	return n;
}
export const pf = new A0();
window.LocalizationManager = pf;
