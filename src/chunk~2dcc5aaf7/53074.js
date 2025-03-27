import { IsDateSameDay, ToUnixTime } from "../../actual_src/utils/time.js";
import {
	Localize,
	LocalizeRtime32ToShorterDate,
} from "../../actual_src/utils/localization.js";
import n from "./68854.js";
import a from "./63696.js";
import s, { q3 } from "./90095.js";
import l, { A as A_1 } from "./90765.js";
import c from "./21597.js";
import m from "./57665.js";
import u from "./22165.js";
import A from "./26271.js";
import p from "./4584.js";
import g from "./74827.js";
import h, { Qn } from "./72476.js";
import C from "./69164.js";
import _ from "./55116.js";
import f, { Bo } from "./3499.js";
import b from "./94729.js";
import y, { bY } from "./67429.js";
const i = n;
export function T(e) {
	let { details } = e;
	let r = q3(() => g.Ri.GetPostGameSummary(details.unAppID));
	if (r) {
		return <W details={details} summary={r} />;
	} else {
		return null;
	}
}
function W(e) {
	let { details, summary } = e;
	let n = Qn();
	let c = q3(() =>
		((e, t, r) => {
			let n = true;
			let s = bY(e);
			let l = [];
			let c = null;
			let u = null;
			let d = null;
			for (let A = t.length - 1; A >= 0; A--) {
				let t_A = t[A];
				if (d === t_A) {
					continue;
				}
				let g = null;
				let h = "";
				let C = null;
				let _ = null;
				if (t_A.m_screenshot) {
					g = new Date(t_A.m_screenshot.nCreated * 1000);
					h = `SummaryScreenshot_${t_A.m_screenshot.nAppID}_${t_A.m_screenshot.hHandle}`;
					C = <N screenshot={t_A.m_screenshot} />;
					n = false;
					_ = 0;
				} else if (t_A.m_clip) {
					g = new Date(t_A.m_clip.date_clipped * 1000);
					h = `SummaryClip_${t_A.m_clip.clip_id}`;
					C = <b.$d clip={t_A.m_clip} />;
					n = false;
					_ = 3;
				} else if (t_A.m_recordingHighlights) {
					g = E(t_A.m_recordingHighlights);
					h = "RecordingHighlights";
					C = <b.$B gameID={s} highlights={t_A.m_recordingHighlights} />;
					n = false;
					_ = 4;
				} else if (t_A.m_achievement) {
					g = new Date(t_A.m_achievement.achievement.rtUnlocked * 1000);
					h = `Ach_${t_A.m_achievement.achievement.strID}`;
					if (r) {
						C = (
							<m.hs
								key={t_A.m_achievement.achievement.strID}
								className={i.SummaryAchievement}
								iconClassNames={i.SummaryAchievementIcon}
								appid={e}
								achievement={t_A.m_achievement.achievement}
								featured
								showStats
							/>
						);
					} else {
						let r = B(t, A - 1, g);
						let i = [t_A.m_achievement.achievement];
						if (r) {
							i.push(r.m_achievement.achievement);
							d = r;
						}
						C = <D appid={e} achievements={i} />;
						if (i.length > 1) {
							n = false;
						}
					}
					_ = 2;
				} else {
					if (!t_A.m_tradingCard) {
						continue;
					}
					g = new Date(t_A.m_tradingCard.rtReceived * 1000);
					h = `SummaryTradingCard_${t_A.m_tradingCard.strName}`;
					C = <F card={t_A.m_tradingCard} />;
					n = false;
					_ = 1;
				}
				let f = c != null && IsDateSameDay(c, g);
				let y = c != null && !f;
				if (A != t.length - 1 && !y) {
					let e = I(u, _);
					l.push(<R key={`Separator_${A}`} spaceOnly={e} />);
				}
				if (y) {
					l.push(<_T key={`Separator_${g.getTime()}`} />);
				}
				c = g;
				u = _;
				l.push(
					<K key={h} created={g} includeHeader={!f} noanim>
						{C}
					</K>,
				);
			}
			return {
				children: l,
				bShort: n,
			};
		})(details.unAppID, summary.GetSessionEvents(), n),
	);
	let u = (
		<div className={i.GamePlaySummaryHeader}>
			{Localize("#AppSpotlight_PostGameSummary")}
		</div>
	);
	let f = a.useCallback(() => {
		g.Ri.StopShowingGamePlaySpotlight(details.unAppID);
	}, [details.unAppID]);
	let S = A_1(i.GamePlaySummaryContainer, c.bShort && i.GamePlaySummaryShort);
	const w = ({ htmlElementRef, className, ...r }) => (
		<div
			className={A_1(className, i.SummaryCarouselScrollingContainer)}
			{...r}
			ref={htmlElementRef}
		/>
	);
	return (
		<C.Z className={S}>
			<_.q>
				{n && u}
				<p.C
					name={Localize("#LibraryHome_NewUpdates")}
					bNoHeader={n}
					customheader={u}
					bShowCloseButton
					onCloseButtonClicked={f}
					buttonSize="small"
					headerPadding="0px 8px 0px 0px"
				>
					{(e, t) => (
						<A.Q
							className={i.SummaryCarouselContainer}
							leftMargin={32}
							ref={e}
							fnUpdateArrows={t}
							edgeMask="none"
							fnRenderScrollingDiv={w}
						>
							{c.children}
							<div className={i.ForcedCarouselPadding} data-carousel="ignore" />
						</A.Q>
					)}
				</p.C>
			</_.q>
		</C.Z>
	);
}
function B(e, t, r) {
	for (let n = t; n >= 0; n--) {
		let e_n = e[n];
		if (!e_n.m_achievement) {
			continue;
		}
		let i = new Date(e_n.m_achievement.achievement.rtUnlocked * 1000);
		if (IsDateSameDay(r, i)) {
			return e_n;
		} else {
			return null;
		}
	}
	return null;
}
function v(e) {
	switch (e) {
		case 0:
		case 3:
		case 4: {
			return true;
		}
	}
	return false;
}
function I(e, t) {
	return e == t || (!!v(e) && !!v(t));
}
function E(e) {
	if (e.length == 0) {
		return new Date();
	}
	let t = e.reduce(
		(e, t) => (t.rt_created > e ? t.rt_created : e),
		e[0].rt_created,
	);
	return new Date(t * 1000);
}
function M(e) {
	let t = "";
	if (e.rtime > 0) {
		t = LocalizeRtime32ToShorterDate(e.rtime);
	}
	return <div className={i.EventHeaderBlock}>{t}</div>;
}
function _T() {
	return <div className={i.EventDaySeparator} data-carousel="ignore" />;
}
function R(e) {
	return (
		<div
			className={A_1(i.TypeSeparator, e.spaceOnly && i.SpaceOnly)}
			data-carousel="ignore"
		/>
	);
}
function K(e) {
	let t = e.includeHeader ? ToUnixTime(e.created) : 0;
	return (
		<div className={A_1(i.SummaryContainer, e.noanim && i.NoAnimation)}>
			<M rtime={t} />
			<div className={i.SummaryContainerChildren}>{e.children}</div>
		</div>
	);
}
function D(e) {
	let t = e.achievements.slice(0, 2);
	return (
		<C.Z flow-children="column" className={i.SummaryAchievementStack}>
			{t.map((t) => (
				<m.hs
					key={t.strID}
					className={i.SummaryAchievement}
					appid={e.appid}
					achievement={t}
					featured
					showStats
				/>
			))}
		</C.Z>
	);
}
function N(e) {
	return (
		<c.R
			className={i.SummaryScreenshot}
			screenshot={Bo(e.screenshot)}
			sizeAxis="height"
		/>
	);
}
function F(e) {
	return (
		<u.dI
			className={i.SummaryTradingCard}
			bMaxed={false}
			data={e.card}
			animateHover
			cardScale={1.1}
		/>
	);
}
