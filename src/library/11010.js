export var a8;
var i = require(/*webcrack:missing*/ "./59351.js");
var s = require("./46108.js");
var o = require("./41180.js");
export function Nm(e, t) {
	return Hq(Date.now() / 1000 - e, t);
}
export function Hq(e, t, n) {
	let i;
	if (typeof t == "boolean") {
		i = {
			eSuffix: t ? a8.None : a8.Ago,
			bForceSingleUnits: n,
			bHighGranularity: false,
		};
	} else {
		i = {
			eSuffix: a8.Ago,
			bForceSingleUnits: false,
			bHighGranularity: false,
			...t,
		};
	}
	let a = "#TimeInterval_";
	if (i.eSuffix == a8.Ago) {
		a = "#TimeSince_";
	} else if (i.eSuffix == a8.Remaining) {
		a = "#TimeRemaining_";
	}
	let c = (e) => Math.floor(e);
	if (i.bAllowDecimal) {
		c = (e) => Math.round(e * 10) / 10;
	}
	if (e >= o.Kp.PerYear * 2) {
		return (0, s.we)(a + "XYears", c(e / o.Kp.PerYear));
	}
	if (e >= o.Kp.PerYear) {
		if ((e -= o.Kp.PerYear) >= o.Kp.PerMonth * 2 && !i.bForceSingleUnits) {
			return (0, s.we)(a + "1YearXMonths", c(e / o.Kp.PerMonth));
		} else {
			return (0, s.we)(a + "1Year");
		}
	}
	if (e >= o.Kp.PerMonth * 2) {
		return (0, s.we)(a + "XMonths", c(e / o.Kp.PerMonth));
	}
	if (e >= o.Kp.PerWeek * 2) {
		return (0, s.we)(a + "XWeeks", c(e / o.Kp.PerWeek));
	}
	if (e >= o.Kp.PerWeek) {
		return (0, s.we)(a + "1Week", c(e / o.Kp.PerWeek));
	}
	if (e >= o.Kp.PerDay * 2) {
		return (0, s.we)(a + "XDays", c(e / o.Kp.PerDay));
	}
	if (e >= o.Kp.PerDay) {
		if ((e -= o.Kp.PerDay) >= o.Kp.PerHour * 2 && !i.bForceSingleUnits) {
			return (0, s.we)(a + "1DayXHours", c(e / o.Kp.PerHour));
		} else {
			return (0, s.we)(a + "1Day");
		}
	}
	if (e >= o.Kp.PerHour * 2) {
		return (0, s.we)(a + "XHours", c(e / o.Kp.PerHour));
	}
	if (e >= o.Kp.PerHour) {
		if ((e -= o.Kp.PerHour) >= o.Kp.PerMinute * 2 && !i.bForceSingleUnits) {
			return (0, s.we)(a + "1HourXMinutes", c(e / o.Kp.PerMinute));
		} else {
			return (0, s.we)(a + "1Hour");
		}
	}
	if (e >= o.Kp.PerMinute * 2) {
		const t = Math.floor(e / o.Kp.PerMinute);
		const n = e % o.Kp.PerMinute;
		if (i.bHighGranularity && n != 0) {
			if (n == 1) {
				return (0, s.we)(a + "XMinutes1Second", t);
			} else {
				return (0, s.we)(a + "XMinutesXSeconds", t, n);
			}
		} else {
			return (0, s.we)(a + "XMinutes", c(e / o.Kp.PerMinute));
		}
	}
	if (e >= o.Kp.PerMinute) {
		const t = e % o.Kp.PerMinute;
		if (i.bHighGranularity && t != 0) {
			if (t == 1) {
				return (0, s.we)(a + "1Minute1Second");
			} else {
				return (0, s.we)(a + "1MinuteXSeconds", t);
			}
		} else {
			return (0, s.we)(a + "1Minute");
		}
	}
	if (i.bHighGranularity) {
		if (e == 1) {
			return (0, s.we)(a + "1Second");
		} else {
			return (0, s.we)(a + "XSeconds", e);
		}
	} else {
		return (0, s.we)(a + "LessThanAMinute");
	}
}
export function TW(e, t, n) {
	let r;
	r =
		t === undefined || t === true || t === false
			? {
					weekday: n ? "long" : "short",
					year: t ? undefined : "numeric",
				}
			: t;
	let i = new Date(e * 1000);
	const o = {
		weekday: "short",
		month: "long",
		day: "numeric",
		year: "numeric",
		...r,
	};
	return i.toLocaleDateString(s.pf.GetPreferredLocales(), o);
}
export function Vx(e, t, n = false) {
	let r = new Date(e * 1000);
	let i = new Date(t * 1000);
	if (
		n ||
		(r.getFullYear() == i.getFullYear() &&
			r.getMonth() == i.getMonth() &&
			r.getDate() == i.getDate())
	) {
		return KC(e) + " - " + KC(t);
	} else {
		return (function (e, t) {
			let n = new Date(e * 1000);
			let r = new Date(t * 1000);
			const i = new Date();
			if (
				n.getFullYear() != r.getFullYear() ||
				i.getFullYear() == n.getFullYear()
			) {
				return `${$z(e)} - ${$z(t)}`;
			}
			const o = {
				month: "short",
				day: "numeric",
			};
			const a = n.toLocaleDateString(s.pf.GetPreferredLocales(), o) + " - ";
			if (n.getMonth() == r.getMonth()) {
				const e = {
					day: "numeric",
				};
				return a + r.toLocaleDateString(s.pf.GetPreferredLocales(), e);
			}
			return a + r.toLocaleDateString(s.pf.GetPreferredLocales(), o);
		})(e, t);
	}
}
export function $z(e, t) {
	const n = {
		year: "numeric",
		month: "short",
		day: "numeric",
		...t,
	};
	return new Date(e * 1000).toLocaleDateString(s.pf.GetPreferredLocales(), n);
}
export function CC(e) {
	return sq(new Date(e * 1000));
}
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.Ago = 1)] = "Ago";
	e[(e.Remaining = 2)] = "Remaining";
})((a8 ||= {}));
const h = new Map();
export function KC(e, t, n) {
	const r = new Date(e * 1000);
	const i = s.pf.GetPreferredLocales();
	const o = {
		...(t?.bForce24HourClock ||
		(function (e) {
			let t = h.get(e);
			if (t === true || t === false) {
				return t;
			}
			const n = new Date();
			n.setHours(15);
			t =
				n.toLocaleTimeString(e, {
					hour: "numeric",
				}) ==
				n.toLocaleTimeString(e, {
					hour: "numeric",
					hour12: false,
				});
			h.set(e, t);
			return t;
		})(i[0])
			? {
					hour: "numeric",
					minute: "2-digit",
					hourCycle: "h23",
				}
			: {
					hour: "numeric",
					minute: "2-digit",
				}),
		...n,
	};
	return r.toLocaleTimeString(i, o);
}
const g = new Map();
export function _l(e, t, n = true, r = true, o = false) {
	const a = new Date();
	const c = new Date(e * 1000);
	if (c.getFullYear() != a.getFullYear()) {
		return $z(e);
	}
	if (r) {
		i.tB(new Date().setHours(24, 0, 0, 0) - a.getTime());
	}
	const l = new Date();
	l.setHours(0, 0, 0, 0);
	if (n) {
		if (c >= l) {
			l.setDate(l.getDate() + 1);
			if (c < l) {
				return (0, s.we)("#Time_Today");
			}
			l.setDate(l.getDate() + 1);
			if (c < l) {
				return (0, s.we)("#Time_Tomorrow");
			}
		} else {
			l.setDate(l.getDate() - 1);
			if (c >= l) {
				return (0, s.we)("#Time_Yesterday");
			}
		}
	}
	const u = {
		month: t ? "long" : "short",
		day: "numeric",
	};
	if (o) {
		u.weekday = "long";
	}
	const d = c.setHours(0, 0, 0, 0) + u.month;
	let h = g.get(d);
	return (
		h ||
		((h = c.toLocaleDateString(s.pf.GetPreferredLocales(), u)), g.set(d, h), h)
	);
}
export function P0(e, t, n) {
	return (
		$w(new Date(e * 1000), false, false) +
		" " +
		KC(e, {
			bForce24HourClock: t,
		}) +
		" " +
		n
	);
}
export function lQ(e, t) {
	const n = new Date(e * 1000);
	const r = new Date();
	const a = {
		bGranularFutureTime: false,
		bGranularTodayTimeOnly: false,
		bGranularToday: false,
		bGranularYesterday: false,
		bGranularWeek: false,
		bGranularPast: false,
		bAbbreviateDayOfWeek: false,
		bForce24HourClock: false,
		...t,
	};
	if (n > r) {
		if (!a.bGranularFutureTime) {
			i.tB(n.getTime() - r.getTime());
			if (n.getFullYear() == r.getFullYear()) {
				return x(n);
			} else {
				return sq(n);
			}
		}
		i.tB(new Date().setHours(24, 0, 0, 0) - r.getTime());
		let e = new Date();
		e.setHours(0, 0, 0, 0);
		e.setDate(e.getDate() + 1);
		if (n < e) {
			return (0, s.we)("#Time_Today");
		} else {
			e.setDate(e.getDate() + 1);
			if (n < e) {
				return (0, s.we)("#Time_Tomorrow");
			} else {
				e.setDate(e.getDate() + 5);
				if (n < e) {
					return cc(n);
				} else {
					return $w(n, true, a.bAbbreviateDayOfWeek);
				}
			}
		}
	}
	i.tB(new Date().setHours(24, 0, 0, 0) - r.getTime());
	let c = new Date();
	c.setHours(0, 0, 0, 0);
	if (n >= c) {
		if (a.bGranularToday) {
			if (a.bGranularTodayTimeOnly) {
				return KC(e, {
					bForce24HourClock: a.bForce24HourClock,
				});
			} else {
				return (0, s.we)(
					"#Time_Today_At",
					KC(e, {
						bForce24HourClock: a.bForce24HourClock,
					}),
				);
			}
		} else {
			return (0, s.we)("#Time_Today");
		}
	}
	c.setDate(r.getDate() - 1);
	if (n >= c) {
		if (a.bGranularYesterday) {
			return (0, s.we)(
				"#Time_Yesterday_At",
				KC(e, {
					bForce24HourClock: a.bForce24HourClock,
				}),
			);
		} else {
			return (0, s.we)("#Time_Yesterday");
		}
	}
	c.setDate(r.getDate() - 6);
	const u = new Date(c);
	if (a.bGranularWeek && n >= u) {
		return $w(n, false, !a.bAbbreviateDayOfWeek);
	}
	if (a.bGranularPast) {
		return (0, s.we)(
			"#Time_Past_At",
			TW(e, n.getFullYear() == r.getFullYear(), !a.bAbbreviateDayOfWeek),
			KC(e, {
				bForce24HourClock: a.bForce24HourClock,
			}),
		);
	}
	if (n >= u) {
		return (0, s.we)("#TimeSince_ThisWeek");
	}
	if (n.getMonth() == r.getMonth() && n.getFullYear() == r.getFullYear()) {
		const e =
			Math.floor((u.valueOf() - n.valueOf()) / (o.Kp.PerWeek * 1000)) + 1;
		if (e == 1) {
			return (0, s.we)("#TimeSince_1Week");
		} else {
			return (0, s.we)("#TimeSince_XWeeks", e);
		}
	}
	if (n.getFullYear() == r.getFullYear()) {
		return x(n);
	} else {
		return sq(n);
	}
}
export function gR(e) {
	const t = new Date(e * 1000);
	const n = new Date();
	i.tB(new Date().setHours(24, 0, 0, 0) - n.getTime());
	let r = new Date();
	if (r.getDate() < 15) {
		r.setMonth(r.getMonth() - 1);
	}
	r = (0, o.wi)(r);
	if (t >= r) {
		return (0, s.we)("#Time_Recent");
	} else if (t.getFullYear() == n.getFullYear()) {
		return x(t);
	} else if (n.getMonth() < 6 && t.getFullYear() == n.getFullYear() - 1) {
		return sq(t);
	} else {
		return vl(t);
	}
}
const C = new Map();
const v = new Map();
const M = new Map();
const S = new Map();
const y = new Map();
new Map();
export function $w(e, t = false, n = true) {
	const r = {
		weekday: n ? "long" : "short",
		day: "numeric",
		month: t ? "long" : "short",
	};
	const i = e.setHours(0, 0, 0, 0) + r.weekday + r.month;
	let o = y.get(i);
	return (
		o ||
		((o = e.toLocaleDateString(s.pf.GetPreferredLocales(), r)), y.set(i, o), o)
	);
}
export function cc(e) {
	let t = C.get(e.getDay());
	return (
		t ||
		((t = e.toLocaleDateString(s.pf.GetPreferredLocales(), {
			weekday: "long",
		})),
		C.set(e.getDay(), t),
		t)
	);
}
function x(e) {
	let t = v.get(e.getMonth());
	return (
		t ||
		((t = e.toLocaleDateString(s.pf.GetPreferredLocales(), {
			month: "long",
		})),
		v.set(e.getMonth(), t),
		t)
	);
}
export function vl(e) {
	let t = M.get(e.getFullYear());
	return (
		t ||
		((t = e.toLocaleDateString(s.pf.GetPreferredLocales(), {
			year: "numeric",
		})),
		M.set(e.getFullYear(), t),
		t)
	);
}
export function sq(e) {
	const t = e.getMonth() + e.getFullYear() * 12;
	let n = S.get(t);
	return (
		n ||
		((n = e.toLocaleDateString(s.pf.GetPreferredLocales(), {
			month: "long",
			year: "numeric",
		})),
		S.set(t, n),
		n)
	);
}
export function u6(e, t) {
	switch (e.getUTCMonth()) {
		case 0:
		case 1:
		case 2:
			return (0, s.we)(
				t ? "#Time_QuarterOfYear_Expanded_Q1" : "#Time_QuarterOfYear_Q1",
				e.getUTCFullYear(),
			);
		case 3:
		case 4:
		case 5:
			return (0, s.we)(
				t ? "#Time_QuarterOfYear_Expanded_Q2" : "#Time_QuarterOfYear_Q2",
				e.getUTCFullYear(),
			);
		case 6:
		case 7:
		case 8:
			return (0, s.we)(
				t ? "#Time_QuarterOfYear_Expanded_Q3" : "#Time_QuarterOfYear_Q3",
				e.getUTCFullYear(),
			);
		default:
			return (0, s.we)(
				t ? "#Time_QuarterOfYear_Expanded_Q4" : "#Time_QuarterOfYear_Q4",
				e.getUTCFullYear(),
			);
	}
}
export function R2(e) {
	const t = Math.floor(e / o.Kp.PerYear);
	const n = Math.floor(e / o.Kp.PerMonth);
	const r = Math.floor((e % o.Kp.PerMonth) / o.Kp.PerDay);
	const i = Math.floor((e % o.Kp.PerDay) / o.Kp.PerHour);
	const a = Math.floor((e % o.Kp.PerHour) / o.Kp.PerMinute);
	e %= o.Kp.PerMinute;
	if (t > 0) {
		return (0, s.we)("#TimeRemaining_MoreThanOneYear");
	} else if (n > 0) {
		return (0, s.we)("#TimeRemaining_MonthsDays", n, r);
	} else if (r > 0) {
		return (0, s.we)(
			"#TimeRemaining_DaysHoursMinutes",
			r,
			i.toString().padStart(2, "0"),
			a.toString().padStart(2, "0"),
		);
	} else if (i > 0) {
		return (0, s.we)(
			"#TimeRemaining_HoursMinutesSeconds",
			i.toString().padStart(2, "0"),
			a.toString().padStart(2, "0"),
			e.toString().padStart(2, "0"),
		);
	} else {
		return (0, s.we)(
			"#TimeRemaining_MinutesSeconds",
			a.toString().padStart(2, "0"),
			e.toString().padStart(2, "0"),
		);
	}
}
function T(e, t, n) {
	while (e.length < t) {
		e = n + e;
	}
	return e;
}
function D(e) {
	if (e === undefined || isNaN(e)) {
		e = 0;
	}
	return {
		hours: Math.floor(e / 3600),
		minutes: Math.floor((e % 3600) / 60),
		seconds: Math.floor(e % 60),
		fraction: e - Math.floor(e),
	};
}
export function dt(e, t, n) {
	let r = e < 0;
	const i = D((e = r ? 0 - e : e));
	const o = i.fraction.toFixed(2).split(".")[1];
	const a = t ?? true;
	let c = !a || o == "00";
	if (r && i.hours == 0 && i.minutes == 0 && i.seconds == 0 && c) {
		r = false;
	}
	let l = "";
	if (i.hours) {
		const e = i.hours.toString();
		const t = T(i.minutes.toString(), 2, "0");
		const n = T(i.seconds.toString(), 2, "0");
		const r = a
			? "#Duration_Abbreviation_HourMinuteSecondMillisecond"
			: "#Duration_Abbreviation_HourMinuteSecond";
		l = (0, s.we)(r, e, t, n, o);
	} else if (i.minutes) {
		const e = i.minutes.toString();
		const t = T(i.seconds.toString(), 2, "0");
		const n = a
			? "#Duration_Abbreviation_MinuteSecondMillisecond"
			: "#Duration_Abbreviation_MinuteSecond";
		l = (0, s.we)(n, e, t, o);
	} else if (i.seconds) {
		const e = i.seconds.toString();
		const t = a
			? "#Duration_Abbreviation_SecondMillisecond"
			: "#Duration_Abbreviation_Second";
		l = (0, s.we)(t, e, o);
	}
	if (r) {
		l = n ? (0, s.we)("#Duration_WrittenNegation", l) : "-" + l;
	}
	return l;
}
export function qZ(e, t, n) {
	let r = e < 0;
	const i = D((e = r ? 0 - e : e));
	const o = T(i.seconds.toString(), 2, "0");
	const a = i.fraction.toFixed(2).split(".")[1];
	const c = t ?? true;
	let l = !c || a == "00";
	if (r && i.hours == 0 && i.minutes == 0 && i.seconds == 0 && l) {
		r = false;
	}
	let u = "";
	if (i.hours) {
		const e = T(i.minutes.toString(), 2, "0");
		const t = c
			? "#Duration_HourMinuteSecondMillisecond"
			: "#Duration_HourMinuteSecond";
		u = (0, s.we)(t, i.hours, e, o, a);
	} else {
		const e = i.minutes.toString();
		const t = c
			? "#Duration_MinuteSecondMillisecond"
			: "#Duration_MinuteSecond";
		u = (0, s.we)(t, e, o, a);
	}
	if (r) {
		u = n ? (0, s.we)("#Duration_WrittenNegation", u) : "-" + u;
	}
	return u;
}
