var n = require("./95773.js");
var i = require(/*webcrack:missing*/ "./46108.js");
let a = {
	TimeOfDay: new Intl.DateTimeFormat(i.pf.GetPreferredLocales(), {
		hour: "numeric",
		minute: "numeric",
	}),
	TimeOfDayWithSecs: new Intl.DateTimeFormat(i.pf.GetPreferredLocales(), {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	}),
	TimeInWeek: Intl.DateTimeFormat(i.pf.GetPreferredLocales(), {
		weekday: "long",
		hour: "numeric",
		minute: "numeric",
	}),
	FullTimestamp: Intl.DateTimeFormat(i.pf.GetPreferredLocales(), {
		weekday: "long",
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	}),
	FullTimestampNoWeekday: Intl.DateTimeFormat(i.pf.GetPreferredLocales(), {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	}),
};
let s = {
	TimeOfDay: new Intl.DateTimeFormat(i.pf.GetPreferredLocales(), {
		hour: "numeric",
		minute: "numeric",
		hourCycle: "h23",
	}),
	TimeOfDayWithSecs: new Intl.DateTimeFormat(i.pf.GetPreferredLocales(), {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hourCycle: "h23",
	}),
	TimeInWeek: Intl.DateTimeFormat(i.pf.GetPreferredLocales(), {
		weekday: "long",
		hour: "numeric",
		minute: "numeric",
		hourCycle: "h23",
	}),
	FullTimestamp: Intl.DateTimeFormat(i.pf.GetPreferredLocales(), {
		weekday: "long",
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hourCycle: "h23",
	}),
	FullTimestampNoWeekday: Intl.DateTimeFormat(i.pf.GetPreferredLocales(), {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hourCycle: "h23",
	}),
};
export function j(e, t) {
	if (t.bIncludeWeekday == null) {
		t.bIncludeWeekday = true;
	}
	if (t.bRelativeDate == null) {
		t.bRelativeDate = true;
	}
	let r;
	let o = n.xm.RTime32ToDate(e);
	let l = n.xm.GetLocalMidnightInRTime32();
	let c = 86400;
	let m = n.xm.SettingsStore.FriendsSettings.b24HourClock ? s : a;
	let u = t.Format;
	if (u == null) {
		u =
			t.bTimeOnly || e >= l - c
				? t.bIncludeSeconds
					? m.TimeOfDayWithSecs
					: m.TimeOfDay
				: t.bRelativeDate && e >= l - 432000
					? m.TimeInWeek
					: t.bIncludeWeekday
						? m.FullTimestamp
						: m.FullTimestampNoWeekday;
	}
	try {
		r = u.format(o);
	} catch (e) {
		r = (0, i.we)("#ChatRoom_Timestamp_InvalidDate");
	}
	if (!t.bTimeOnly && t.bRelativeDate && e >= l - c && e < l) {
		r = (0, i.we)("#ChatRoom_Timestamp_Yesterday", r);
	}
	return r;
}
