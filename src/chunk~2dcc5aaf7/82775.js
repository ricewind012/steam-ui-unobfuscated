import {
	GetConfiguredLocale,
	LocalizeDateHumanReadable,
	Localize,
	LocalizeReact,
	Hq,
} from "../../actual_src/utils/localization.js";

import {
	IsDateSameDay,
	IsDateSameYear,
	Seconds,
} from "../../actual_src/utils/time.js";
import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./98995.js";
import o, { PA } from "./41230.js";
import l, { A as A_1 } from "./90765.js";
import m from "./24585.js";
import d from "./12956.js";
import A from "./18339.js";
const u = m;
export function yi(e, t) {
	const r = A.tz.guess();
	const n = A.unix(e).tz(r);
	const o = GetConfiguredLocale();
	if (o) {
		n.locale(o);
	}
	return (
		<>
			{n.format("LT")}
			{t ? (
				<a.Gq toolTipContent={`${n.format("Z")}, ${r}`}>
					<span>
						{"\xA0"}
						{n.zoneAbbr()}
					</span>
				</a.Gq>
			) : null}
		</>
	);
}
const G = PA((e) => {
	const { dateAndTime, bSingleLine, bOnlyTime, bOnlyDate } = e;
	const o = !bOnlyTime && Boolean(dateAndTime);
	const l = !bOnlyDate && Boolean(dateAndTime);
	const c = o && LocalizeDateHumanReadable(dateAndTime);
	const m = e.stylesmodule
		? {
				...u,
				...e.stylesmodule,
			}
		: u;
	if (bSingleLine) {
		return (
			<span
				className={bOnlyTime || bOnlyDate ? m.DateAndTimeInline : m.DateAndTime}
			>
				{o && c}
				{o && l ? <span>{"\xA0"}</span> : undefined}
				{Boolean(dateAndTime && l) && yi(dateAndTime, l)}
			</span>
		);
	} else {
		return (
			<div className={m.DateAndTime}>
				{o && (
					<>
						<div className={m.LocalizedDate}>{c}</div>{" "}
						<span className={m.At}>@</span>
					</>
				)}
				<div className={m.LocalizedTime}>
					{Boolean(dateAndTime && l) && yi(dateAndTime, l)}
				</div>
			</div>
		);
	}
});
const H = (e) => {
	const t = (
		<div className={e.stylesmodule.DateToolTip}>
			<G dateAndTime={e.rtFullDate} bSingleLine stylesmodule={e.stylesmodule} />
		</div>
	);
	return (
		<a.m9 toolTipContent={t} direction="top" className={e.className} bTopmost>
			{e.children}
		</a.m9>
	);
};
let C = class extends i.Component {
	render() {
		const { startDateAndTime, endDateAndTime } = this.props;
		const r = this.props.stylesmodule
			? {
					...u,
					...this.props.stylesmodule,
				}
			: u;
		let n =
			this.props.bHideEndTime ||
			this.props.endDateAndTime == null ||
			this.props.endDateAndTime == null ||
			this.props.endDateAndTime < 1;
		if (startDateAndTime == null || startDateAndTime == 0) {
			return (
				<div className={r.DateAndTime}>
					<span className={r.RightSideTitles}>
						{(0, Localize)("#EventDisplay_TimeRange")}
					</span>
					{(0, Localize)("#EventDisplay_TimeDisplayNone")}
				</div>
			);
		}
		let a = d.HD.GetTimeNowWithOverride();
		if (n) {
			return (
				<div className={r.StartDate}>
					<div className={r.RightSideTitles}>
						{(0, Localize)(
							startDateAndTime < a
								? "#EventDisplay_TimeInPast"
								: "#EventDisplay_TimeUpcoming",
						)}
						{"\xA0"}
					</div>
					<G stylesmodule={r} dateAndTime={startDateAndTime} />
				</div>
			);
		}
		let o = startDateAndTime <= a && a <= endDateAndTime;
		const m = IsDateSameDay(
			new Date(startDateAndTime * 1000),
			new Date(endDateAndTime * 1000),
		);
		return (
			<div className={r.MultiDateAndTime}>
				<div className={r.StartDate}>
					<span className={r.RightSideTitles}>
						{(0, Localize)(
							startDateAndTime >= a
								? "#EventDisplay_TimeBeginsOn"
								: endDateAndTime >= a
									? "#EventDisplay_TimeBeginsOn_Past"
									: "#EventDisplay_TimeBeginsOn_StartAndEnd_Past",
						)}
					</span>
					<G stylesmodule={r} bSingleLine dateAndTime={startDateAndTime} />
				</div>
				<div className={r.EndDate}>
					<span className={r.RightSideTitles}>
						{(0, Localize)(
							endDateAndTime < a
								? "#EventDisplay_TimeEndsOn_Past"
								: "#EventDisplay_TimeEndsOn",
						)}
					</span>
					<G
						stylesmodule={r}
						bSingleLine
						bOnlyTime={m}
						dateAndTime={endDateAndTime}
					/>
				</div>
				{o && (
					<span className={r.ActiveEvent}>
						<span className={A_1(r.RightSideTitles, r.ActiveEventCallOut)}>
							{(0, Localize)("#Time_Now")}
						</span>
					</span>
				)}
			</div>
		);
	}
};
C = Cg([o.PA], C);
export let u1 = class extends i.Component {
	render() {
		const { startDateAndTime, endDateAndTime, bHideEndTime } = this.props;
		const n = this.props.stylesmodule
			? {
					...u,
					...this.props.stylesmodule,
				}
			: u;
		if (startDateAndTime == null || startDateAndTime == 0) {
			return (
				<div className={n.DateAndTime}>
					<span className={n.RightSideTitles}>
						{(0, Localize)("#EventDisplay_TimeRange")}
					</span>
					{(0, Localize)("#EventDisplay_TimeDisplayNone")}
				</div>
			);
		}
		const a = d.HD.GetTimeNowWithOverrideAsDate();
		const o = d.HD.GetTimeNowWithOverride();
		const l = IsDateSameYear(new Date(startDateAndTime * 1000), a);
		const m = (
			<div className={n.ShortDateAndTime}>
				{LocalizeDateHumanReadable(startDateAndTime, l)}
			</div>
		);
		let A = (
			<H rtFullDate={startDateAndTime} stylesmodule={n}>
				<div className={n.RightSideTitles}>
					{(0, Localize)(
						startDateAndTime < o
							? "#EventDisplay_TimeInPast"
							: "#EventDisplay_TimeUpcoming",
					)}
				</div>
				{m}
			</H>
		);
		if (o < startDateAndTime && startDateAndTime < o + Seconds.PerWeek) {
			A = (
				<H rtFullDate={startDateAndTime} stylesmodule={n}>
					<div className={n.RightSideTitles}>
						{LocalizeReact(
							"#EventDisplay_EventUpcoming_WithDateAndTime",
							m,
							<div className={n.ShortDateAndTime}>{yi(startDateAndTime)} </div>,
						)}
					</div>
				</H>
			);
		}
		if (
			bHideEndTime ||
			endDateAndTime == null ||
			endDateAndTime == null ||
			endDateAndTime < 1
		) {
			return A;
		}
		const g = startDateAndTime <= o && o <= endDateAndTime;
		if (g) {
			A = (
				<H
					rtFullDate={startDateAndTime}
					className={n.ActiveEvent}
					stylesmodule={n}
				>
					<span className={n.ActiveEventCallOut}>
						{(0, Localize)("#Time_Now")}
					</span>
				</H>
			);
		}
		let C = null;
		const _ = g ? endDateAndTime - o : endDateAndTime - startDateAndTime;
		if (_ <= Seconds.PerDay) {
			const e = <div className={n.ShortDateAndTime}>{(0, Hq)(_, true)}</div>;
			C =
				endDateAndTime < o ? (
					<div className={n.RightSideTitles}>
						{(0, Localize)("#EventDisplay_TimeEndsOn_Ran")}
						{e}
					</div>
				) : (
					<div className={n.RightSideTitles}>
						{LocalizeReact(
							g ? "#EventDisplay_TimeLeft" : "#EventDisplay_RunsForDuration",
							e,
						)}
					</div>
				);
		} else {
			const e =
				a.getFullYear() == new Date(endDateAndTime * 1000).getFullYear();
			C = (
				<>
					<div className={n.RightSideTitles}>
						{(0, Localize)(
							endDateAndTime < o
								? "#EventDisplay_TimeEndsOn_Past"
								: "#EventDisplay_TimeEndsOn",
						)}
					</div>
					<div className={n.ShortDateAndTime}>
						{LocalizeDateHumanReadable(endDateAndTime, e)}
					</div>
				</>
			);
		}
		const f = (
			<H rtFullDate={endDateAndTime} stylesmodule={n}>
				{C}
			</H>
		);
		return (
			<div className={n.ShortDateRange}>
				{A}
				{f}
			</div>
		);
	}
};
u1 = Cg([o.PA], u1);
