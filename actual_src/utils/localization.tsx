// Webpack module ID: 46108

export let LocalizeCalendarYear = DateTime.LocalizeCalendarYear;
export let LocalizeCalendarTime = DateTime.LocalizeCalendarTime;
export let LocalizeCalendarTimeLessGranular =
	DateTime.LocalizeCalendarTimeLessGranular;
export let LocalizeCalendarWeekday = DateTime.LocalizeCalendarWeekday;
export let LocalizeRtime32ToShorterDate = DateTime.LocalizeRtime32ToShorterDate;
export let LocalizeDateHumanReadable = DateTime.LocalizeDateHumanReadable;
export let Nm = DateTime.Nm;
export let LocalizeTimeSince = DateTime.LocalizeTimeSince;
export let LocalizeRtime32ToShortDate = DateTime.LocalizeRtime32ToShortDate;
export let LocalizeCalendarWeekdayAndDayMonth =
	DateTime.LocalizeCalendarWeekdayAndDayMonth;

import React from "react";

import { sf as PchLanguageToELanguage } from "../../src/library/44846.js";
import { ESteamRealm } from "../clienttypes/realm.js";
import { TS as Config } from "../../src/library/72476.js";
import { PadArray } from "./arrayutils.js";
import { CCallbackList } from "./callbackutils";
// TODO: LMAO wtf
import * as DateTime from "./localization/datetime.js";

enum ELanguage {
	None = -1,
	English,
	German,
	French,
	Italian,
	Korean,
	Spanish,
	SimplifiedChinese,
	TraditionalChinese,
	Russian,
	Thai,
	Japanese,
	Portuguese,
	Polish,
	Danish,
	Dutch,
	Finnish,
	Norwegian,
	Swedish,
	Hungarian,
	Czech,
	Romanian,
	Turkish,
	Brazilian,
	Bulgarian,
	Greek,
	Arabic,
	Ukrainian,
	LatamSpanish,
	Vietnamese,
	SteamChina_SChinese,
	Max,
}

export class CLocalizationManager {
	m_mapTokens = new Map<string, string>();
	m_mapFallbackTokens = new Map<string, string>();
	m_cbkTokensChanged = new CCallbackList();
	m_rgLocalesToUse: string[];

	static sm_ErrorReportingStore;

	static InstallErrorReportingStore(store) {
		this.sm_ErrorReportingStore = store;
	}

	// Given a language (such as english or sc_schinese), this will return the language that should be used as a fallback (such as english or schinese)
	// and should be used instead of assuming English since that may not be the desired fallback in all cases
	static GetLanguageFallback(sLanguage: string) {
		if (sLanguage === "sc_schinese") {
			return "schinese";
		} else {
			return "english";
		}
	}

	// Same as the above, but operates on the language enum
	static GetELanguageFallback(language: ELanguage) {
		if (language === ELanguage.SteamChina_SChinese) {
			return ELanguage.SimplifiedChinese;
		} else {
			return ELanguage.English;
		}
	}

	// Given a language, this determines if it is valid in the specified realm or not
	static IsELanguageValidInRealm(language: ELanguage, realm) {
		return (
			realm ===
			(language === ELanguage.SteamChina_SChinese
				? ESteamRealm.k_ESteamRealmChina
				: ESteamRealm.k_ESteamRealmGlobal)
		);
	}

	static GetLanguageListForRealms(realmList) {
		const rv = new Array();
		for (let language = 0; language < ELanguage.Max; language++) {
			for (const realm of realmList) {
				if (this.IsELanguageValidInRealm(language, realm)) {
					rv.push(language);
					break;
				}
			}
		}
		return rv;
	}

	InitFromObjects(primary, fallback, sharedPrimary, sharedFallback, bAppend) {
		if (!bAppend) {
			this.m_mapTokens.clear();
		}

		const allPrimary = {
			...(sharedPrimary || {}),
			...primary,
		};
		const allFallback = {
			...(sharedFallback || {}),
			...(fallback || {}),
		};
		this.AddTokens(allPrimary, allFallback);
		this.m_cbkTokensChanged.Dispatch();
	}

	InitDirect(dict: Record<string, string>, fallback: Record<string, string>) {
		this.m_mapTokens.clear();
		this.m_mapFallbackTokens.clear();
		this.AddTokens(dict, fallback);
		this.m_cbkTokensChanged.Dispatch();
	}

	AddTokens(dict: Record<string, string>, fallback: Record<string, string>) {
		Object.keys(dict).forEach((key) => {
			this.m_mapTokens.set(key, dict[key]);
		});
		// add any missing keys from the fallback language
		if (fallback) {
			Object.keys(fallback).forEach((key) => {
				if (!this.m_mapTokens.has(key)) {
					this.m_mapTokens.set(key, fallback[key]);
				}
				this.m_mapFallbackTokens.set(key, fallback[key]);
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
			// Fallback to english
			return ["en-US"];
		}
	}

	// Similar to the PHP version, gives me the list of languages in fallback order to lookup localization tokens
	GetELanguageFallbackOrder(rgIncludeRealmLanguages = null) {
		let langs = new Array();
		langs.push(PchLanguageToELanguage(Config.LANGUAGE));
		let rgLanguages = Config.SUPPORTED_LANGUAGES || [];
		rgLanguages.forEach((lang) => {
			if (lang.value != Config.LANGUAGE) {
				langs.push(PchLanguageToELanguage(lang.value));
			}
		});
		if (rgIncludeRealmLanguages) {
			CLocalizationManager.GetLanguageListForRealms(
				rgIncludeRealmLanguages,
			).forEach((lang) => {
				if (langs.indexOf(lang) == -1) {
					langs.push(lang);
				}
			});
		}
		return langs;
	}

	SetPreferredLocales(rgLocales: string[]) {
		this.m_rgLocalesToUse = rgLocales;
	}

	BLooksLikeToken(strToken: string) {
		return !!strToken && strToken.length > 0 && strToken.charAt(0) == "#";
	}

	LocalizeIfToken(strToken: string, bFailSilently?: boolean) {
		if (this.BLooksLikeToken(strToken)) {
			return this.LocalizeString(strToken, bFailSilently);
		} else {
			return strToken;
		}
	}

	LocalizeString(strToken: string, bFailSilently?: boolean) {
		if (!this.BLooksLikeToken(strToken)) {
			return;
		}

		let strValue = this.m_mapTokens.get(strToken.substring(1));
		if (strValue !== undefined) {
			return strValue;
		}

		if (!bFailSilently && CLocalizationManager.sm_ErrorReportingStore) {
			CLocalizationManager.sm_ErrorReportingStore.ReportError(
				new Error(
					`Unable to find localization token '${strToken}' for language '${Config.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`,
				),
				{
					bIncludeMessageInIdentifier: true,
				},
			);
		}
	}

	LocalizeStringFromFallback(strToken: string) {
		if (!strToken || strToken.length == 0 || strToken.charAt(0) != "#") {
			return;
		}

		let strValue = this.m_mapFallbackTokens.get(strToken.substring(1));
		if (strValue !== undefined) {
			return strValue;
		} else {
			return undefined;
		}
	}

	static GetTokenWithFallback(strToken: string) {
		if (!strToken) {
			return "";
		}

		const elanguage = PchLanguageToELanguage(Config.LANGUAGE);
		const n = strToken.find((e) => e.language == elanguage);
		if (n) {
			return n.localized_string;
		}
		const fallback = CLocalizationManager.GetELanguageFallback(elanguage);
		const s = strToken.find((e) => e.language == fallback);

		return s?.localized_string ?? "";
	}

	static BHasTokenLanguage(lang, t) {
		return Boolean(t.find((t) => t.language == lang));
	}
}

export function BLocStringExists(strToken: string) {
	return LocalizationManager.LocalizeString(strToken, true) != null;
}

//-----------------------------------------------------------------------------
// Purpose: Localizes token
// Parameters:	strToken - token to look up, starting with #
//				Variable number of trailing arguments which will be used to replace %1$s, %2$s, etc. in strings
//-----------------------------------------------------------------------------
export function Localize(strToken: string, ...args) {
	let strValue = LocalizationManager.LocalizeString(strToken);
	if (strValue === undefined) {
		return strToken;
	} else {
		return ReplaceArgumentsInString(strValue, ...args);
	}
}

//-----------------------------------------------------------------------------
// Purpose: Localizes token, substituting strings or react elements for arguments
// Parameters:	strToken - token to look up, starting with #
//				Variable number of trailing arguments which will be used to replace %1$s, %2$s, etc. in strings
//
//	The output is expected to be used in JSX, eg: <div>{ LocalizeReact( '#foo', <MyReactElement /> ) }</div>
//-----------------------------------------------------------------------------
export function LocalizeReact(strToken: string, ...args) {
	let strValue = LocalizationManager.LocalizeString(strToken);
	if (strValue === undefined) {
		return strToken;
	}
	let match;
	let output = [];
	let regex = /(.*?)%(\d+)\$s/g;
	let cCharactersConsumed = 0;
	while ((match = regex.exec(strValue))) {
		cCharactersConsumed += match[0].length;
		output.push(match[1]);
		let index = parseInt(match[2]);
		if (index >= 1 && index <= args.length) {
			output.push(args[index - 1]);
		}
	}
	output.push(strValue.substr(cCharactersConsumed));
	return <>{...output}</>;
}

//-----------------------------------------------------------------------------
// Purpose: Localizes token with a number, substituting strings or react elements for arguments - expects token to be the
//		singular number case, will look for a token with "_Plural" if number is not 1
// Parameters:	strToken - token to look up, starting with #
//				A number, which will replace %1$s in the resulting string.  Can be a string (formatted number)
//				Variable number of trailing arguments which will be used to replace %2$s, %3$s etc. in strings
//
//	The output is expected to be used in JSX, eg: <div>{ LocalizeReact( '#foo', <MyReactElement /> ) }</div>
//-----------------------------------------------------------------------------
export function LocalizeReactPlural(strToken: string, number: number, ...args) {
	if (number === 1 || number === "1") {
		return LocalizeReact(strToken, number, ...args);
	} else {
		return LocalizeReact(
			strToken + "_Plural",
			number.toLocaleString(),
			...args,
		);
	}
}

export function LocalizeInlineReactWithFallback(strToken: string, ...args) {
	let strValue = LocalizationManager.LocalizeIfToken(strToken);
	if (strValue === undefined) {
		return strToken;
	} else {
		return LocalizeInlineReact(strValue, ...args);
	}
}

export function LocalizeInlineReactPlural(strToken: string, number, ...args) {
	let strValue;
	strValue = Localize(
		number === 1 || number === "1" ? strToken : strToken + "_Plural",
		number,
	);
	if (strValue === undefined) {
		return strToken;
	} else {
		return LocalizeInlineReact(strValue, ...args);
	}
}

/**
 * Uses the specified localization token and React elements to create a formatted, localized string. The localization token is parsed
 * for matching <#> ... </#> segments, and the text from those segments is set as the children of each matching arg parameter.
 *
 * Example token:
 * 		"TestToken": "Press the <1>Enter</1> Button"
 * Can be used with:
 * 		let str = LocalizeInlineReact( '#TestToken', <span style={ {color: 'red'} } /> ) }
 */
function LocalizeInlineReact(strToken: string, ...args) {
	let match;
	let output = [];
	let regex = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
	let cCharactersConsumed = 0;
	while ((match = regex.exec(strToken))) {
		cCharactersConsumed += match[0].length;
		output.push(match[1]);
		let index = parseInt(match[2]);
		let strInner = match[3] || "";
		let arg = LocalizeInlineReact(strInner, ...args);
		let rct = (index >= 1 && index <= args.length ? args[index - 1] : null)
			? React.cloneElement(args[index - 1], {}, strInner ? arg : null)
			: strInner;
		output.push(rct);
	}
	output.push(strToken.substr(cCharactersConsumed));
	return <>{...output}</>;
}

//-----------------------------------------------------------------------------
// Purpose: Localizes token with a number - expects token to be the singular number case, will look
//		for a token with "_Plural" if number is not 1
// Parameters:	strToken - token to look up, starting with #
//				A number, which will replace %1$s in the resulting string.  Can be a string (formatted number)
//				Variable number of trailing arguments which will be used to replace %2$s, %3$s etc. in strings
//-----------------------------------------------------------------------------
export function LocalizePlural(strToken: string, number, ...args) {
	if (number === 1 || number === "1") {
		return Localize(strToken, number, ...args);
	} else {
		return Localize(strToken + "_Plural", number, ...args);
	}
}

function ReplaceArgumentsInString(strLocalized: string, ...args) {
	// found a matching token
	if (args.length == 0) {
		return strLocalized;
	} else {
		return strLocalized.replace(/%(?:(\d+)\$)?s/g, function (match, index) {
			// Subtract one from index because loc strings are 1-based and
			// the args array is 0-based.
			if (index <= args.length && index >= 1) {
				let arg = args[index - 1];
				return String(arg == null ? "" : arg);
			}
			return match;
		});
	}
}

// A somewhat common pattern is to have an array that can be indexed by the language for storing a collection of localized strings. This
// class provides a collection of utilities to help deal with setting and getting those values based upon language. This takes the array
// in for modification rather than is an object that can be used, since a lot of these cases are saved/loaded to JSON which doesn't support
// objects
export class CLocLanguageArray {
	//given a language array, this will set the specified value for the provided language. This returns the provided array as a return
	//value to allow for chaining assignment
	static Set(rgLanguageStrings: string[], language: ELanguage, newValue) {
		//make sure that we have room in this array
		if (rgLanguageStrings.length <= language) {
			//sanity check that we aren't making an exessively large array
			if (language >= ELanguage.Max) {
				return rgLanguageStrings;
			}
			rgLanguageStrings = PadArray(rgLanguageStrings, language + 1, null);
		}
		rgLanguageStrings[language] = newValue;
		return rgLanguageStrings;
	}

	//looks up the provided language from the specified array. If nothing is set (i.e. null) or this language is outside of the range of the array
	//an empty string will be returned
	static Get(rgLanguageStrings, language: ELanguage) {
		return (
			(rgLanguageStrings &&
				rgLanguageStrings.length > language &&
				rgLanguageStrings[language]) ||
			""
		);
	}

	//this is the same as above, but with the catch that if the provided language isn't found, it will lookup a fallback language and
	//check for that, and return that if nothing is found for the primary language
	static GetWithFallback(rgLanguageStrings, language: ELanguage) {
		if (rgLanguageStrings) {
			return (
				CLocLanguageArray.Get(rgLanguageStrings, language) ||
				CLocLanguageArray.Get(
					rgLanguageStrings,
					CLocalizationManager.GetELanguageFallback(language),
				)
			);
		}
		return null;
	}
}

/**
 * Returns a map of language names in that language.
 * These strings do not need to be localized as they do not change between languages.
 */
const LanguageICUNames = {
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
	//These alias to other languages to allow them to be used on the back end, but still map to meaningful locales
	sc_schinese: "zh-cn",
	koreana: "ko",
};

/**
 * Map common locales to ELanguage. Used by the VOD code - look at dash_player.js
 */
export const LocaleToELanguage = {
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

/** @returns the locale (short code, e.g. 'de, 'zh-cn') for the current language from Steam Settings, or null if unknown. */
export function GetConfiguredLocale() {
	return LanguageICUNames[Config.LANGUAGE] || null;
}

export function LoadLocalizationStrings(e) {
	let t;
	let n = new Promise((e) => (t = e));
	let r = Array(e.length);
	let i = e.length;
	e.forEach((e, index) => {
		Promise.resolve(e)
			.then((e) => {
				r[index] = e;
				i--;
				if (i == 0) {
					t(r);
				}
			})
			.catch((ex) => {
				console.error("Failed to load localization file: " + ex);
				r[index] = {};
				i--;
				if (i == 0) {
					t(r);
				}
			});
	});
	return n;
}

export const LocalizationManager = new CLocalizationManager();
(window as any).LocalizationManager = LocalizationManager;
