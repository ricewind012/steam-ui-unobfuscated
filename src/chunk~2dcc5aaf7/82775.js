var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./98995.js");
import {
	GetConfiguredLocale,
	LocalizeDateHumanReadable,
	Localize,
	LocalizeReact,
	Hq,
} from "../../actual_src/utils/localization.js";
var o = require(/*webcrack:missing*/ "./41230.js");
var l = require(/*webcrack:missing*/ "./90765.js");
import {
	IsDateSameDay,
	IsDateSameYear,
	Seconds,
} from "../../actual_src/utils/time.js";
var m = require("./24585.js");
var u = m;
var d = require("./12956.js");
const A = require(/*webcrack:missing*/ "./18339.js");
export function yi(e, t) {
	const r = A.tz.guess();
	const n = A.unix(e).tz(r);
	const o = GetConfiguredLocale();
	if (o) {
		n.locale(o);
	}
	return i.createElement(
		i.Fragment,
		null,
		n.format("LT"),
		t
			? i.createElement(
					a.Gq,
					{
						toolTipContent: n.format("Z") + ", " + r,
					},
					i.createElement("span", null, "\xA0", n.zoneAbbr()),
				)
			: null,
	);
}
const g = (0, o.PA)((e) => {
	const { dateAndTime: t, bSingleLine: r, bOnlyTime: n, bOnlyDate: a } = e;
	const o = !n && Boolean(t);
	const l = !a && Boolean(t);
	const c = o && LocalizeDateHumanReadable(t);
	const m = e.stylesmodule
		? {
				...u,
				...e.stylesmodule,
			}
		: u;
	if (r) {
		return i.createElement(
			"span",
			{
				className: n || a ? m.DateAndTimeInline : m.DateAndTime,
			},
			o && c,
			o && l ? i.createElement("span", null, "\xA0") : undefined,
			Boolean(t && l) && yi(t, l),
		);
	} else {
		return i.createElement(
			"div",
			{
				className: m.DateAndTime,
			},
			o &&
				i.createElement(
					i.Fragment,
					null,
					i.createElement(
						"div",
						{
							className: m.LocalizedDate,
						},
						c,
					),
					" ",
					i.createElement(
						"span",
						{
							className: m.At,
						},
						"@",
					),
				),
			i.createElement(
				"div",
				{
					className: m.LocalizedTime,
				},
				Boolean(t && l) && yi(t, l),
			),
		);
	}
});
const h = (e) => {
	const t = i.createElement(
		"div",
		{
			className: e.stylesmodule.DateToolTip,
		},
		i.createElement(g, {
			dateAndTime: e.rtFullDate,
			bSingleLine: true,
			stylesmodule: e.stylesmodule,
		}),
	);
	return i.createElement(
		a.m9,
		{
			toolTipContent: t,
			direction: "top",
			className: e.className,
			bTopmost: true,
		},
		e.children,
	);
};
let C = class extends i.Component {
	render() {
		const { startDateAndTime: e, endDateAndTime: t } = this.props;
		const r = this.props.stylesmodule
			? {
					...u,
					...this.props.stylesmodule,
				}
			: u;
		let n =
			this.props.bHideEndTime ||
			this.props.endDateAndTime == null ||
			this.props.endDateAndTime < 1;
		if (e == null || e == 0) {
			return i.createElement(
				"div",
				{
					className: r.DateAndTime,
				},
				i.createElement(
					"span",
					{
						className: r.RightSideTitles,
					},
					(0, Localize)("#EventDisplay_TimeRange"),
				),
				(0, Localize)("#EventDisplay_TimeDisplayNone"),
			);
		}
		let a = d.HD.GetTimeNowWithOverride();
		if (n) {
			return i.createElement(
				"div",
				{
					className: r.StartDate,
				},
				i.createElement(
					"div",
					{
						className: r.RightSideTitles,
					},
					(0, Localize)(
						e < a ? "#EventDisplay_TimeInPast" : "#EventDisplay_TimeUpcoming",
					),
					"\xA0",
				),
				i.createElement(g, {
					stylesmodule: r,
					dateAndTime: e,
				}),
			);
		}
		let o = e <= a && a <= t;
		const m = IsDateSameDay(new Date(e * 1000), new Date(t * 1000));
		return i.createElement(
			"div",
			{
				className: r.MultiDateAndTime,
			},
			i.createElement(
				"div",
				{
					className: r.StartDate,
				},
				i.createElement(
					"span",
					{
						className: r.RightSideTitles,
					},
					(0, Localize)(
						e >= a
							? "#EventDisplay_TimeBeginsOn"
							: t >= a
								? "#EventDisplay_TimeBeginsOn_Past"
								: "#EventDisplay_TimeBeginsOn_StartAndEnd_Past",
					),
				),
				i.createElement(g, {
					stylesmodule: r,
					bSingleLine: true,
					dateAndTime: e,
				}),
			),
			i.createElement(
				"div",
				{
					className: r.EndDate,
				},
				i.createElement(
					"span",
					{
						className: r.RightSideTitles,
					},
					(0, Localize)(
						t < a
							? "#EventDisplay_TimeEndsOn_Past"
							: "#EventDisplay_TimeEndsOn",
					),
				),
				i.createElement(g, {
					stylesmodule: r,
					bSingleLine: true,
					bOnlyTime: m,
					dateAndTime: t,
				}),
			),
			o &&
				i.createElement(
					"span",
					{
						className: r.ActiveEvent,
					},
					i.createElement(
						"span",
						{
							className: (0, l.A)(r.RightSideTitles, r.ActiveEventCallOut),
						},
						(0, Localize)("#Time_Now"),
					),
				),
		);
	}
};
C = (0, n.Cg)([o.PA], C);
export let u1 = class extends i.Component {
	render() {
		const {
			startDateAndTime: e,
			endDateAndTime: t,
			bHideEndTime: r,
		} = this.props;
		const n = this.props.stylesmodule
			? {
					...u,
					...this.props.stylesmodule,
				}
			: u;
		if (e == null || e == 0) {
			return i.createElement(
				"div",
				{
					className: n.DateAndTime,
				},
				i.createElement(
					"span",
					{
						className: n.RightSideTitles,
					},
					(0, Localize)("#EventDisplay_TimeRange"),
				),
				(0, Localize)("#EventDisplay_TimeDisplayNone"),
			);
		}
		const a = d.HD.GetTimeNowWithOverrideAsDate();
		const o = d.HD.GetTimeNowWithOverride();
		const l = IsDateSameYear(new Date(e * 1000), a);
		const m = i.createElement(
			"div",
			{
				className: n.ShortDateAndTime,
			},
			LocalizeDateHumanReadable(e, l),
		);
		let A = i.createElement(
			h,
			{
				rtFullDate: e,
				stylesmodule: n,
			},
			i.createElement(
				"div",
				{
					className: n.RightSideTitles,
				},
				(0, Localize)(
					e < o ? "#EventDisplay_TimeInPast" : "#EventDisplay_TimeUpcoming",
				),
			),
			m,
		);
		if (o < e && e < o + Seconds.PerWeek) {
			A = i.createElement(
				h,
				{
					rtFullDate: e,
					stylesmodule: n,
				},
				i.createElement(
					"div",
					{
						className: n.RightSideTitles,
					},
					LocalizeReact(
						"#EventDisplay_EventUpcoming_WithDateAndTime",
						m,
						i.createElement(
							"div",
							{
								className: n.ShortDateAndTime,
							},
							yi(e),
							" ",
						),
					),
				),
			);
		}
		if (r || t == null || t < 1) {
			return A;
		}
		const g = e <= o && o <= t;
		if (g) {
			A = i.createElement(
				h,
				{
					rtFullDate: e,
					className: n.ActiveEvent,
					stylesmodule: n,
				},
				i.createElement(
					"span",
					{
						className: n.ActiveEventCallOut,
					},
					(0, Localize)("#Time_Now"),
				),
			);
		}
		let C = null;
		const _ = g ? t - o : t - e;
		if (_ <= Seconds.PerDay) {
			const e = i.createElement(
				"div",
				{
					className: n.ShortDateAndTime,
				},
				(0, Hq)(_, true),
			);
			C =
				t < o
					? i.createElement(
							"div",
							{
								className: n.RightSideTitles,
							},
							(0, Localize)("#EventDisplay_TimeEndsOn_Ran"),
							e,
						)
					: i.createElement(
							"div",
							{
								className: n.RightSideTitles,
							},
							LocalizeReact(
								g ? "#EventDisplay_TimeLeft" : "#EventDisplay_RunsForDuration",
								e,
							),
						);
		} else {
			const e = a.getFullYear() == new Date(t * 1000).getFullYear();
			C = i.createElement(
				i.Fragment,
				null,
				i.createElement(
					"div",
					{
						className: n.RightSideTitles,
					},
					(0, Localize)(
						t < o
							? "#EventDisplay_TimeEndsOn_Past"
							: "#EventDisplay_TimeEndsOn",
					),
				),
				i.createElement(
					"div",
					{
						className: n.ShortDateAndTime,
					},
					LocalizeDateHumanReadable(t, e),
				),
			);
		}
		const f = i.createElement(
			h,
			{
				rtFullDate: t,
				stylesmodule: n,
			},
			C,
		);
		return i.createElement(
			"div",
			{
				className: n.ShortDateRange,
			},
			A,
			f,
		);
	}
};
u1 = (0, n.Cg)([o.PA], u1);
