// Webpack module ID: 11010

// some of these functions return an observable value, some don't.  Look for references to MobxUtils.now().
// MobxUtils.now() can batch updates, but as used here it will probably not do that effectively.
//var i = require(/*webcrack:missing*/ "./59351.js");
import { now } from "mobx-utils";
import { Localize, LocalizationManager } from "../localization.js";
import { Seconds, RoundToBeginningOfMonth } from "../time.js";

export function Nm(nSeconds: number, optsOrBoolean: LocalizeTimeSinceOptions) {
	return LocalizeTimeSince(Date.now() / 1000 - nSeconds, optsOrBoolean);
}

interface LocalizeTimeSinceOptions {
	eSuffix: ETimeSinceSuffix;
	bAllowDecimal?: boolean;
	bForceSingleUnits: boolean;
	bHighGranularity: boolean;
}

interface LocalizeDateOptions {
	bGranularFutureTime?: boolean;
	bGranularTodayTimeOnly?: boolean;
	bGranularToday?: boolean;
	bGranularYesterday?: boolean;
	bGranularWeek?: boolean;
	bGranularPast?: boolean;
	bAbbreviateDayOfWeek?: boolean;
	bForce24HourClock?: boolean;
}

export function LocalizeTimeSince(
	nSeconds: number,
	optsOrBoolean: LocalizeTimeSinceOptions,
	bForceSingleUnits?: boolean,
) {
	let options: LocalizeTimeSinceOptions;
	if (typeof optsOrBoolean == "boolean") {
		options = {
			eSuffix: optsOrBoolean ? ETimeSinceSuffix.None : ETimeSinceSuffix.Ago,
			bForceSingleUnits: bForceSingleUnits,
			bHighGranularity: false,
		};
	} else {
		options = {
			eSuffix: ETimeSinceSuffix.Ago,
			bForceSingleUnits: false,
			bHighGranularity: false,
			...optsOrBoolean,
		};
	}
	let strLocPrefix = "#TimeInterval_";
	if (options.eSuffix == ETimeSinceSuffix.Ago) {
		strLocPrefix = "#TimeSince_";
	} else if (options.eSuffix == ETimeSinceSuffix.Remaining) {
		strLocPrefix = "#TimeRemaining_";
	}
	let c = (e: number) => Math.floor(e);
	if (options.bAllowDecimal) {
		c = (e: number) => Math.round(e * 10) / 10;
	}
	if (nSeconds >= Seconds.PerYear * 2) {
		return Localize(strLocPrefix + "XYears", c(nSeconds / Seconds.PerYear));
	}
	if (nSeconds >= Seconds.PerYear) {
		if (
			(nSeconds -= Seconds.PerYear) >= Seconds.PerMonth * 2 &&
			!options.bForceSingleUnits
		) {
			return Localize(
				strLocPrefix + "1YearXMonths",
				c(nSeconds / Seconds.PerMonth),
			);
		} else {
			return Localize(strLocPrefix + "1Year");
		}
	}
	if (nSeconds >= Seconds.PerMonth * 2) {
		return Localize(strLocPrefix + "XMonths", c(nSeconds / Seconds.PerMonth));
	}
	if (nSeconds >= Seconds.PerWeek * 2) {
		return Localize(strLocPrefix + "XWeeks", c(nSeconds / Seconds.PerWeek));
	}
	if (nSeconds >= Seconds.PerWeek) {
		return Localize(strLocPrefix + "1Week", c(nSeconds / Seconds.PerWeek));
	}
	if (nSeconds >= Seconds.PerDay * 2) {
		return Localize(strLocPrefix + "XDays", c(nSeconds / Seconds.PerDay));
	}
	if (nSeconds >= Seconds.PerDay) {
		if (
			(nSeconds -= Seconds.PerDay) >= Seconds.PerHour * 2 &&
			!options.bForceSingleUnits
		) {
			return Localize(
				strLocPrefix + "1DayXHours",
				c(nSeconds / Seconds.PerHour),
			);
		} else {
			return Localize(strLocPrefix + "1Day");
		}
	}
	if (nSeconds >= Seconds.PerHour * 2) {
		return Localize(strLocPrefix + "XHours", c(nSeconds / Seconds.PerHour));
	}
	if (nSeconds >= Seconds.PerHour) {
		if (
			(nSeconds -= Seconds.PerHour) >= Seconds.PerMinute * 2 &&
			!options.bForceSingleUnits
		) {
			return Localize(
				strLocPrefix + "1HourXMinutes",
				c(nSeconds / Seconds.PerMinute),
			);
		} else {
			return Localize(strLocPrefix + "1Hour");
		}
	}
	if (nSeconds >= Seconds.PerMinute * 2) {
		const nMinutes = Math.floor(nSeconds / Seconds.PerMinute);
		const nSecondsRemaining = nSeconds % Seconds.PerMinute;
		if (options.bHighGranularity && nSecondsRemaining != 0) {
			if (nSecondsRemaining == 1) {
				return Localize(strLocPrefix + "XMinutes1Second", nMinutes);
			} else {
				return Localize(
					strLocPrefix + "XMinutesXSeconds",
					nMinutes,
					nSecondsRemaining,
				);
			}
		} else {
			return Localize(
				strLocPrefix + "XMinutes",
				c(nSeconds / Seconds.PerMinute),
			);
		}
	}
	if (nSeconds >= Seconds.PerMinute) {
		const nSecondsRemaining = nSeconds % Seconds.PerMinute;
		if (options.bHighGranularity && nSecondsRemaining != 0) {
			if (nSecondsRemaining == 1) {
				return Localize(strLocPrefix + "1Minute1Second");
			} else {
				return Localize(strLocPrefix + "1MinuteXSeconds", nSecondsRemaining);
			}
		} else {
			return Localize(strLocPrefix + "1Minute");
		}
	}
	if (options.bHighGranularity) {
		if (nSeconds == 1) {
			return Localize(strLocPrefix + "1Second");
		} else {
			return Localize(strLocPrefix + "XSeconds", nSeconds);
		}
	} else {
		return Localize(strLocPrefix + "LessThanAMinute");
	}
}

/**
 * Purpose: Localize the date to a human readable string, e.g. Fri, October 26, 2018 in English
 *  Input is unix time in seconds (or rtime32)
 */
export function LocalizeDateHumanReadable(
	rtime: number,
	bHideYear: boolean,
	bShowFullWeekday: boolean,
) {
	let r;
	r =
		bHideYear === undefined || bHideYear === true || bHideYear === false
			? {
					weekday: bShowFullWeekday ? "long" : "short",
					year: bHideYear ? undefined : "numeric",
				}
			: bHideYear;
	let strDate = new Date(rtime * 1000);
	const dateOptions = {
		weekday: "short",
		month: "long",
		day: "numeric",
		year: "numeric",
		...r,
	};
	return strDate.toLocaleDateString(
		LocalizationManager.GetPreferredLocales(),
		dateOptions,
	);
}

export function Vx(e: number, t: number, n = false) {
	let r = new Date(e * 1000);
	let i = new Date(t * 1000);
	if (
		n ||
		(r.getFullYear() == i.getFullYear() &&
			r.getMonth() == i.getMonth() &&
			r.getDate() == i.getDate())
	) {
		return (
			LocalizeRTimeToHourAndMinutes(e) +
			" - " +
			LocalizeRTimeToHourAndMinutes(t)
		);
	} else {
		// inlined function
		return (function (e, t) {
			let n = new Date(e * 1000);
			let r = new Date(t * 1000);
			const i = new Date();
			if (
				n.getFullYear() != r.getFullYear() ||
				i.getFullYear() == n.getFullYear()
			) {
				return `${LocalizeRtime32ToShortDate(e)} - ${LocalizeRtime32ToShortDate(t)}`;
			}
			const o = {
				month: "short",
				day: "numeric",
			};
			const a =
				n.toLocaleDateString(LocalizationManager.GetPreferredLocales(), o) +
				" - ";
			if (n.getMonth() == r.getMonth()) {
				const e = {
					day: "numeric",
				};
				return (
					a + r.toLocaleDateString(LocalizationManager.GetPreferredLocales(), e)
				);
			}
			return (
				a + r.toLocaleDateString(LocalizationManager.GetPreferredLocales(), o)
			);
		})(e, t);
	}
}

/**
 * Purpose: Localize the date to a short form string, e.g. Oct 26, 2018 in English
 *  Input is unix time in seconds (or rtime32)
 */
export function LocalizeRtime32ToShortDate(
	rtime: number,
	opts?: Intl.DateTimeFormatOptions,
) {
	const dateOptions: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
		...opts,
	};
	return new Date(rtime * 1000).toLocaleDateString(
		LocalizationManager.GetPreferredLocales(),
		dateOptions,
	);
}

export function CC(rtime: number) {
	return LocalizeCalendarMonthAndYear(new Date(rtime * 1000));
}

export enum ETimeSinceSuffix {
	None,
	Ago,
	Remaining,
}

const g_mapCachedLocaleUses24HourClock = new Map();
/**
 * Purpose: Localizes the time into a short hour and minutes format in the correct timezone. e.g. "7:00 PM" or "19:00".
 */
export function LocalizeRTimeToHourAndMinutes(
	rtime: number,
	options?: LocalizeDateOptions,
	dateOptions?: Intl.DateTimeFormatOptions,
) {
	const date = new Date(rtime * 1000);
	const rgLocales = LocalizationManager.GetPreferredLocales();
	const finalOptions = {
		...(options?.bForce24HourClock ||
		// inlined BDoesLocaleUse24Hourclock
		(function (strLocale) {
			let bUses24HourClock = g_mapCachedLocaleUses24HourClock.get(strLocale);
			if (bUses24HourClock === true || bUses24HourClock === false) {
				return bUses24HourClock;
			}
			const dt = new Date();
			dt.setHours(15);
			bUses24HourClock =
				dt.toLocaleTimeString(strLocale, {
					hour: "numeric",
				}) ==
				dt.toLocaleTimeString(strLocale, {
					hour: "numeric",
					hour12: false,
				});
			g_mapCachedLocaleUses24HourClock.set(strLocale, bUses24HourClock);
			return bUses24HourClock;
		})(rgLocales[0])
			? {
					hour: "numeric",
					minute: "2-digit",
					hourCycle: "h23",
				}
			: {
					hour: "numeric",
					minute: "2-digit",
				}),
		...dateOptions,
	};
	return date.toLocaleTimeString(rgLocales, finalOptions);
}

const g_mapCachedLocalizedShorterDate = new Map();

/**
 * Localizes the date to an even shorter form string, e.g. Tomorrow, Yesterday or Oct 26 in English.
 * If observed (e.g. used in a render function), the string will recompute at End Of Day.
 * Only includes the year if it's different from the current one.
 *  Input is unix time in seconds (or rtime32)
 *
 * bUseRelativeNames = default true, use Today/Tomorrow/Yesterday
 */
export function LocalizeRtime32ToShorterDate(
	rtime: number,
	fullmonthname: string,
	bUseRelativeNames = true,
	bMobx = true,
	bLongWeekDay = false,
) {
	const dtNow = new Date();
	const dt = new Date(rtime * 1000);
	if (dt.getFullYear() != dtNow.getFullYear()) {
		return LocalizeRtime32ToShortDate(rtime);
	}
	if (bMobx) {
		now(new Date().setHours(24, 0, 0, 0) - dtNow.getTime());
	}
	const dtCompare = new Date();
	dtCompare.setHours(0, 0, 0, 0);
	if (bUseRelativeNames) {
		if (dt >= dtCompare) {
			dtCompare.setDate(dtCompare.getDate() + 1);
			if (dt < dtCompare) {
				return Localize("#Time_Today");
			}
			dtCompare.setDate(dtCompare.getDate() + 1);
			if (dt < dtCompare) {
				return Localize("#Time_Tomorrow");
			}
		} else {
			dtCompare.setDate(dtCompare.getDate() - 1);
			if (dt >= dtCompare) {
				return Localize("#Time_Yesterday");
			}
		}
	}
	const dateOptions: Intl.DateTimeFormatOptions = {
		month: fullmonthname ? "long" : "short",
		day: "numeric",
	};
	if (bLongWeekDay) {
		dateOptions.weekday = "long";
	}
	const key = dt.setHours(0, 0, 0, 0) + dateOptions.month;
	let strDate = g_mapCachedLocalizedShorterDate.get(key);
	return (
		strDate ||
		((strDate = dt.toLocaleDateString(
			LocalizationManager.GetPreferredLocales(),
			dateOptions,
		)),
		g_mapCachedLocalizedShorterDate.set(key, strDate),
		strDate)
	);
}

export function P0(rtime: number, bForce24HourClock: boolean, n) {
	return (
		LocalizeCalendarWeekdayAndDayMonth(new Date(rtime * 1000), false, false) +
		" " +
		LocalizeRTimeToHourAndMinutes(rtime, {
			bForce24HourClock: bForce24HourClock,
		}) +
		" " +
		n
	);
}

/**
 * With no options:
 * If Today was Tuesday, March 20th, 2019
 *
 * 										// future timestamps are not supported.. will just default to <month> <year>
 *
 * Today								// March 20th at noon
 * Yesterday							// March 19th at 11pm
 * This week							// 2 days ago
 * ...
 * A week ago							// Anything <= Tuesday of previous week
 * Two weeks ago						// Keep using * weeks ago for at least 3 weeks, then change to Month
 * ...
 * February								// Show just month until year no longer matches
 * December 2018						// Everything earlier
 * ...
 */
export function LocalizeCalendarTime(rtime: number, opts: LocalizeDateOptions) {
	const dt = new Date(rtime * 1000);
	const dtNow = new Date();
	const options = {
		bGranularFutureTime: false,
		bGranularTodayTimeOnly: false,
		bGranularToday: false,
		bGranularYesterday: false,
		bGranularWeek: false,
		bGranularPast: false,
		bAbbreviateDayOfWeek: false,
		bForce24HourClock: false,
		...opts,
	};
	if (dt > dtNow) {
		if (!options.bGranularFutureTime) {
			now(dt.getTime() - dtNow.getTime());
			if (dt.getFullYear() == dtNow.getFullYear()) {
				return LocalizeCalendarMonth(dt);
			} else {
				return LocalizeCalendarMonthAndYear(dt);
			}
		}
		now(new Date().setHours(24, 0, 0, 0) - dtNow.getTime());
		let dtCompare = new Date();
		dtCompare.setHours(0, 0, 0, 0);
		dtCompare.setDate(dtCompare.getDate() + 1);
		if (dt < dtCompare) {
			return Localize("#Time_Today");
		} else {
			dtCompare.setDate(dtCompare.getDate() + 1);
			if (dt < dtCompare) {
				return Localize("#Time_Tomorrow");
			} else {
				dtCompare.setDate(dtCompare.getDate() + 5);
				if (dt < dtCompare) {
					return LocalizeCalendarWeekday(dt);
				} else {
					return LocalizeCalendarWeekdayAndDayMonth(
						dt,
						true,
						options.bAbbreviateDayOfWeek,
					);
				}
			}
		}
	}
	now(new Date().setHours(24, 0, 0, 0) - dtNow.getTime());
	let dtCompare = new Date();
	dtCompare.setHours(0, 0, 0, 0);
	if (dt >= dtCompare) {
		if (options.bGranularToday) {
			if (options.bGranularTodayTimeOnly) {
				return LocalizeRTimeToHourAndMinutes(rtime, {
					bForce24HourClock: options.bForce24HourClock,
				});
			} else {
				return Localize(
					"#Time_Today_At",
					LocalizeRTimeToHourAndMinutes(rtime, {
						bForce24HourClock: options.bForce24HourClock,
					}),
				);
			}
		} else {
			return Localize("#Time_Today");
		}
	}
	dtCompare.setDate(dtNow.getDate() - 1);
	if (dt >= dtCompare) {
		if (options.bGranularYesterday) {
			return Localize(
				"#Time_Yesterday_At",
				LocalizeRTimeToHourAndMinutes(rtime, {
					bForce24HourClock: options.bForce24HourClock,
				}),
			);
		} else {
			return Localize("#Time_Yesterday");
		}
	}
	dtCompare.setDate(dtNow.getDate() - 6);
	const u = new Date(dtCompare);
	if (options.bGranularWeek && dt >= u) {
		return LocalizeCalendarWeekdayAndDayMonth(
			dt,
			false,
			!options.bAbbreviateDayOfWeek,
		);
	}
	if (options.bGranularPast) {
		return Localize(
			"#Time_Past_At",
			LocalizeDateHumanReadable(
				rtime,
				dt.getFullYear() == dtNow.getFullYear(),
				!options.bAbbreviateDayOfWeek,
			),
			LocalizeRTimeToHourAndMinutes(rtime, {
				bForce24HourClock: options.bForce24HourClock,
			}),
		);
	}
	if (dt >= u) {
		return Localize("#TimeSince_ThisWeek");
	}
	if (
		dt.getMonth() == dtNow.getMonth() &&
		dt.getFullYear() == dtNow.getFullYear()
	) {
		const nWeeks =
			Math.floor((u.valueOf() - dt.valueOf()) / (Seconds.PerWeek * 1000)) + 1;
		if (nWeeks == 1) {
			return Localize("#TimeSince_1Week");
		} else {
			return Localize("#TimeSince_XWeeks", nWeeks);
		}
	}
	if (dt.getFullYear() == dtNow.getFullYear()) {
		return LocalizeCalendarMonth(dt);
	} else {
		return LocalizeCalendarMonthAndYear(dt);
	}
}

/**
 * If Today was Tuesdsay, March 20th, 2019
 *
 * Recent								// March 20th at noon
 * Recent								// Anything on or after March 1
 * February								// Show just month until year no longer matches
 * December 2018						// Anything last year
 * 2017									// Anything 2+ years ago (just shows year)
 * ...
 *
 */
export function LocalizeCalendarTimeLessGranular(rtime: number) {
	const dt = new Date(rtime * 1000);
	const dtNow = new Date();
	now(new Date().setHours(24, 0, 0, 0) - dtNow.getTime());
	let dtCompare = new Date();
	if (dtCompare.getDate() < 15) {
		dtCompare.setMonth(dtCompare.getMonth() - 1);
	}
	dtCompare = RoundToBeginningOfMonth(dtCompare);
	if (dt >= dtCompare) {
		return Localize("#Time_Recent");
	} else if (dt.getFullYear() == dtNow.getFullYear()) {
		return LocalizeCalendarMonth(dt);
	} else if (
		dtNow.getMonth() < 6 &&
		dt.getFullYear() == dtNow.getFullYear() - 1
	) {
		return LocalizeCalendarMonthAndYear(dt);
	} else {
		return LocalizeCalendarYear(dt);
	}
}

const g_mapCachedLocalizedWeekday = new Map();
const g_mapCachedLocalizedMonth = new Map();
const g_mapCachedLocalizedYear = new Map();
const g_mapCachedLocalizedMonthAndYear = new Map();
const g_mapCachedLocalizedWeekdayAndDayMonth = new Map();

/** @returns e.g. "Friday, May 22 " */
export function LocalizeCalendarWeekdayAndDayMonth(
	date: Date,
	fullmonthname = false,
	fulldayname = true,
) {
	const dateOptions = {
		weekday: fulldayname ? "long" : "short",
		day: "numeric",
		month: fullmonthname ? "long" : "short",
	};
	const strMapKey =
		date.setHours(0, 0, 0, 0) + dateOptions.weekday + dateOptions.month;
	let strWeekday = g_mapCachedLocalizedWeekdayAndDayMonth.get(strMapKey);
	return (
		strWeekday ||
		((strWeekday = date.toLocaleDateString(
			LocalizationManager.GetPreferredLocales(),
			dateOptions,
		)),
		g_mapCachedLocalizedWeekdayAndDayMonth.set(strMapKey, strWeekday),
		strWeekday)
	);
}

export function LocalizeCalendarWeekday(date: Date) {
	let strWeekday = g_mapCachedLocalizedWeekday.get(date.getDay());
	return (
		strWeekday ||
		((strWeekday = date.toLocaleDateString(
			LocalizationManager.GetPreferredLocales(),
			{
				weekday: "long",
			},
		)),
		g_mapCachedLocalizedWeekday.set(date.getDay(), strWeekday),
		strWeekday)
	);
}

function LocalizeCalendarMonth(date: Date) {
	let strYear = g_mapCachedLocalizedMonth.get(date.getMonth());
	return (
		strYear ||
		((strYear = date.toLocaleDateString(
			LocalizationManager.GetPreferredLocales(),
			{
				month: "long",
			},
		)),
		g_mapCachedLocalizedMonth.set(date.getMonth(), strYear),
		strYear)
	);
}

/** Returns just 4 digit year as a string */
export function LocalizeCalendarYear(date: Date) {
	let strYear = g_mapCachedLocalizedYear.get(date.getFullYear());
	return (
		strYear ||
		((strYear = date.toLocaleDateString(
			LocalizationManager.GetPreferredLocales(),
			{
				year: "numeric",
			},
		)),
		g_mapCachedLocalizedYear.set(date.getFullYear(), strYear),
		strYear)
	);
}

export function LocalizeCalendarMonthAndYear(date: Date) {
	const nMapKey = date.getMonth() + date.getFullYear() * 12;
	let strMonthAndYear = g_mapCachedLocalizedMonthAndYear.get(nMapKey);
	return (
		strMonthAndYear ||
		((strMonthAndYear = date.toLocaleDateString(
			LocalizationManager.GetPreferredLocales(),
			{
				month: "long",
				year: "numeric",
			},
		)),
		g_mapCachedLocalizedMonthAndYear.set(nMapKey, strMonthAndYear),
		strMonthAndYear)
	);
}

export function LocalizeQuarterOfYear(date: Date, bExpanded: boolean) {
	switch (date.getUTCMonth()) {
		case 0:
		case 1:
		case 2:
			return Localize(
				bExpanded
					? "#Time_QuarterOfYear_Expanded_Q1"
					: "#Time_QuarterOfYear_Q1",
				date.getUTCFullYear(),
			);
		case 3:
		case 4:
		case 5:
			return Localize(
				bExpanded
					? "#Time_QuarterOfYear_Expanded_Q2"
					: "#Time_QuarterOfYear_Q2",
				date.getUTCFullYear(),
			);
		case 6:
		case 7:
		case 8:
			return Localize(
				bExpanded
					? "#Time_QuarterOfYear_Expanded_Q3"
					: "#Time_QuarterOfYear_Q3",
				date.getUTCFullYear(),
			);
		default:
			return Localize(
				bExpanded
					? "#Time_QuarterOfYear_Expanded_Q4"
					: "#Time_QuarterOfYear_Q4",
				date.getUTCFullYear(),
			);
	}
}

export function LocalizeTimeRemaining(rtime: number) {
	const nYears = Math.floor(rtime / Seconds.PerYear);
	const nMonths = Math.floor(rtime / Seconds.PerMonth);
	const nDays = Math.floor((rtime % Seconds.PerMonth) / Seconds.PerDay);
	const nHours = Math.floor((rtime % Seconds.PerDay) / Seconds.PerHour);
	const nMinutes = Math.floor((rtime % Seconds.PerHour) / Seconds.PerMinute);
	rtime %= Seconds.PerMinute;
	if (nYears > 0) {
		return Localize("#TimeRemaining_MoreThanOneYear");
	} else if (nMonths > 0) {
		return Localize("#TimeRemaining_MonthsDays", nMonths, nDays);
	} else if (nDays > 0) {
		return Localize(
			"#TimeRemaining_DaysHoursMinutes",
			nDays,
			nHours.toString().padStart(2, "0"),
			nMinutes.toString().padStart(2, "0"),
		);
	} else if (nHours > 0) {
		return Localize(
			"#TimeRemaining_HoursMinutesSeconds",
			nHours.toString().padStart(2, "0"),
			nMinutes.toString().padStart(2, "0"),
			rtime.toString().padStart(2, "0"),
		);
	} else {
		return Localize(
			"#TimeRemaining_MinutesSeconds",
			nMinutes.toString().padStart(2, "0"),
			rtime.toString().padStart(2, "0"),
		);
	}
}

function T(e, t, n) {
	while (e.length < t) {
		e = n + e;
	}
	return e;
}

function D(rtime: number) {
	if (rtime === undefined || isNaN(rtime)) {
		rtime = 0;
	}
	return {
		hours: Math.floor(rtime / 3600),
		minutes: Math.floor((rtime % 3600) / 60),
		seconds: Math.floor(rtime % 60),
		fraction: rtime - Math.floor(rtime),
	};
}

export function LocalizeDurationAbbreviation(
	e: number,
	bMilliseconds: boolean,
	n: boolean,
) {
	let r = e < 0;
	const dt = D((e = r ? 0 - e : e));
	const strMilliseconds = dt.fraction.toFixed(2).split(".")[1];
	const bMs = bMilliseconds ?? true;
	let bRemoveMs = !bMs || strMilliseconds == "00";
	if (r && dt.hours == 0 && dt.minutes == 0 && dt.seconds == 0 && bRemoveMs) {
		r = false;
	}
	let strLocalized = "";
	if (dt.hours) {
		const strHours = dt.hours.toString();
		const strMinutes = T(dt.minutes.toString(), 2, "0");
		const strSeconds = T(dt.seconds.toString(), 2, "0");
		const strToken = bMs
			? "#Duration_Abbreviation_HourMinuteSecondMillisecond"
			: "#Duration_Abbreviation_HourMinuteSecond";
		strLocalized = Localize(
			strToken,
			strHours,
			strMinutes,
			strSeconds,
			strMilliseconds,
		);
	} else if (dt.minutes) {
		const strMinutes = dt.minutes.toString();
		const strSeconds = T(dt.seconds.toString(), 2, "0");
		const strToken = bMs
			? "#Duration_Abbreviation_MinuteSecondMillisecond"
			: "#Duration_Abbreviation_MinuteSecond";
		strLocalized = Localize(strToken, strMinutes, strSeconds, strMilliseconds);
	} else if (dt.seconds) {
		const strSeconds = dt.seconds.toString();
		const strToken = bMs
			? "#Duration_Abbreviation_SecondMillisecond"
			: "#Duration_Abbreviation_Second";
		strLocalized = Localize(strToken, strSeconds, strMilliseconds);
	}
	if (r) {
		strLocalized = n
			? Localize("#Duration_WrittenNegation", strLocalized)
			: "-" + strLocalized;
	}
	return strLocalized;
}

export function qZ(e: number, bMilliseconds: boolean, n: boolean) {
	let r = e < 0;
	const dt = D((e = r ? 0 - e : e));
	const strSeconds = T(dt.seconds.toString(), 2, "0");
	const strMilliseconds = dt.fraction.toFixed(2).split(".")[1];
	const bMs = bMilliseconds ?? true;
	let l = !bMs || strMilliseconds == "00";
	if (r && dt.hours == 0 && dt.minutes == 0 && dt.seconds == 0 && l) {
		r = false;
	}
	let strLocalized = "";
	if (dt.hours) {
		const strMinutes = T(dt.minutes.toString(), 2, "0");
		const strToken = bMs
			? "#Duration_HourMinuteSecondMillisecond"
			: "#Duration_HourMinuteSecond";
		strLocalized = Localize(
			strToken,
			dt.hours,
			strMinutes,
			strSeconds,
			strMilliseconds,
		);
	} else {
		const strMinutes = dt.minutes.toString();
		const strToken = bMs
			? "#Duration_MinuteSecondMillisecond"
			: "#Duration_MinuteSecond";
		strLocalized = Localize(strToken, strMinutes, strSeconds, strMilliseconds);
	}
	if (r) {
		strLocalized = n
			? Localize("#Duration_WrittenNegation", strLocalized)
			: "-" + strLocalized;
	}
	return strLocalized;
}
