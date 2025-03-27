import {
	LocalizationManager,
	Localize,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n, { Cg } from "./34629.js";
import i, { useState } from "./63696.js";
import a, { PA } from "./41230.js";
import s, { W6 } from "./49519.js";
import o from "./50376.js";
import l from "./52451.js";
import c from "./61662.js";
import u from "./36563.js";
import { A as A_1 } from "./90765.js";
import A from "./36934.js";
import p from "./78057.js";
import g from "./1965.js";
import h from "./69164.js";
import C from "./26271.js";
import _, { S1 } from "./43520.js";
import f from "./56726.js";
import b from "./55116.js";
import y, { Ms, ry, _h } from "./9808.js";
import S, { bG } from "./18057.js";
import w from "./8573.js";
import { ex, dd, Np, vN } from "./32179.js";
import { iZ } from "./89748.js";
import E from "./66732.js";
import M from "./46422.js";
import { c as c_1 } from "./23600.js";
import R from "./10335.js";
import D, { Gn } from "./89193.js";
import { Co } from "./96593.js";
const k = R;
const F = 10;
function G(e) {
	if (e.flAchieved || e.flAchieved === 0) {
		return Math.max(e.flAchieved, 0.1).toFixed(1);
	}
	return "";
}
class O extends i.Component {
	render() {
		let e;
		let t = this.props.achievement;
		let r = t.flAchieved < F;
		if (t.bAchieved && t.rtUnlocked) {
			const r = Ms();
			e = A.Vw.CMInterface.RTime32ToDate(t.rtUnlocked).toLocaleDateString(
				LocalizationManager.GetPreferredLocales(),
				r,
			);
		} else {
			e = "";
		}
		let n;
		let a;
		let s = G(t);
		if (ry(t)) {
			const e = _h(t);
			if (e) {
				const { flCurrent, flMax, flPercentage } = e;
				n = (
					<div className={k.SingleAchievementProgressContainer}>
						<div className={k.ProgressLabel}>{`${flCurrent} / ${flMax}`}</div>
						<div className={k.SingleAchievementProgressBar}>
							<div
								className={k.AchievementProgress}
								style={{
									width: `${flPercentage}%`,
								}}
							/>
						</div>
					</div>
				);
			}
		}
		if (this.props.yourUnlockDate) {
			const e = Ms();
			a = A.Vw.CMInterface.RTime32ToDate(
				this.props.yourUnlockDate,
			).toLocaleDateString(LocalizationManager.GetPreferredLocales(), e);
		}
		return (
			<c.M
				className={A_1(k.Hover, t.bAchieved ? k.Achieved : k.NotAchieved)}
				blurElement={<img src={t.strImage} />}
			>
				<div className={k.TopSection}>
					<Tv
						className={A_1(k.TopSectionAchievementIcon, k.Icon)}
						achievement={t}
						hidden={this.props.hidden}
					/>
					<div className={k.TextSection}>
						<div className={k.Name}>{t.strName}</div>
						<div className={k.Desc}>{t.strDescription}</div>
						{n}
					</div>
				</div>
				{(e || s) && (
					<div className={k.Unlocked}>
						{e && <div>{Localize("#AppDetails_Achievements_Unlocked", e)}</div>}
						{s && (
							<div className={A_1(r && k.RareLabel)}>
								{Localize("#AppDetails_PctUnlocked", s)}
							</div>
						)}
						{a && (
							<div className={k.YouUnlocked}>
								{Localize("#AppDetails_Achievements_YouUnlocked", a)}
							</div>
						)}
					</div>
				)}
			</c.M>
		);
	}
}
export const Hs = PA((e) => {
	const {
		appid,
		className,
		achievement,
		featured,
		showStats,
		iconClassNames,
		steamidTarget,
		strDisplayName,
		...p
	} = e;
	const g = W6();
	const C = iZ();
	const _ = Co(appid);
	const f = ex(appid);
	const b = dd();
	const y = bG("UserAchievementsPage", steamidTarget, appid);
	const I = bG("SteamIDAchievementsPage", appid);
	const { focused, hovered } = c_1();
	const R = i.useCallback(() => {
		if (steamidTarget != null && steamidTarget !== C?.strSteamID) {
			if (b) {
				g.push(
					S.BV.Library.App.Achievements.Friend.Individual(
						appid,
						new w.b(steamidTarget).GetAccountID(),
					),
				);
			} else {
				y();
			}
		} else if (b) {
			g.push(S.BV.Library.App.Achievements.My.Individual(appid));
		} else {
			I();
		}
	}, [steamidTarget, C, appid, g, b, y, I]);
	let D = false;
	if (f.loading || f.error) {
		D = achievement.bHidden;
	} else {
		let e = null;
		e = achievement.strID
			? () => Np(f.data, achievement.strID)
			: () => vN(f.data, achievement.strName);
		D = achievement.bHidden && !e();
	}
	const F = steamidTarget && C && C.strSteamID != steamidTarget;
	const P = ((e, t, r, n) => {
		const a = i.useCallback(() => {
			if (r) {
				return null;
			}
			if (!t || t.loading) {
				return null;
			}
			let a;
			if (n) {
				for (let r of Object.values(t.data.achieved)) {
					if (
						(e.strID || e.strName) &&
						(!e.strID || e.strID == r.strID) &&
						(!e.strName || e.strName == r.strName)
					) {
						if (r.bAchieved && r.rtUnlocked) {
							a = r.rtUnlocked;
						}
						break;
					}
				}
			}
			return <O achievement={e} hidden={false} yourUnlockDate={a} />;
		}, [r, e, t, n]);
		return a;
	})(achievement, f, D, F);
	const z = G(achievement);
	const x = focused || hovered;
	const U = D ? Localize("#AppDetailsAchievement_Hidden") : achievement.strName;
	const W = D
		? Localize(
				_?.minutes_playtime_forever > 0
					? "#AppDetailsAchievement_HiddenDesc"
					: "#AppDetailsAchievement_HiddenDesc_Unplayed",
			)
		: achievement.strDescription;
	return (
		<h.Z
			focusable
			onActivate={R}
			onOKActionDescription={Localize(
				"#AppActivity_Achieved_View_Achievements",
			)}
			className={A_1(
				className,
				achievement.bAchieved ? k.Achieved : k.NotAchieved,
				featured && k.Featured,
			)}
			{...p}
		>
			<c.z renderHover={P} className={k.AchievementHoverContainer}>
				<Tv
					className={A_1(k.Icon, iconClassNames)}
					achievement={achievement}
					hidden={D}
					pauseAnimation={!x}
				/>
			</c.z>
			{featured && (
				<div className={k.TextSection}>
					<div className={k.Name}>{U}</div>
					<div className={k.Desc}>{W}</div>
					{showStats && z && (
						<div className={k.Stats}>
							{Localize("#AppDetails_PctUnlocked", z)}
						</div>
					)}
				</div>
			)}
		</h.Z>
	);
});
export function Tv(e) {
	const e_achievement = e.achievement;
	return (
		<E._
			imgURL={e_achievement?.strImage}
			glow={
				e_achievement && Qv(e_achievement.bAchieved, e_achievement.flAchieved)
			}
			pauseAnimation={e.pauseAnimation}
			hidden={e.hidden}
			className={e.className}
		/>
	);
}
export function Qv(e, t) {
	return e && t !== undefined && t < F;
}
export function Pr(e) {
	const {
		className,
		nRemaining,
		bShowLabel,
		children,
		eventActorName,
		onActivate,
		...l
	} = e;
	let c = A_1(bShowLabel && k.Featured, className, k.RemainderContainer);
	return (
		<h.Z focusable {...l} className={c} onActivate={onActivate}>
			<div className={A_1(k.Remainder)}>
				{children}
				<div className={k.RemainderText}>+{nRemaining}</div>
			</div>
			{bShowLabel && (
				<div className={k.TextSection}>
					<div className={k.Name}>
						{Localize("#AppActivity_Achieved_PlusMore", nRemaining)}
					</div>
					{eventActorName && (
						<div className={k.Desc}>
							{Localize("#AppActivity_Achieved_PlusMore_Label", eventActorName)}
						</div>
					)}
				</div>
			)}
		</h.Z>
	);
}
function U(e, t) {
	let r = GetOwningWindowForEvent(e);
	M.oy.WindowStore.GetWindowInstanceFromWindow(r).Navigator.MyAchievements(t);
}
export let tm = class extends i.Component {
	unAppID = undefined;
	constructor(e) {
		super(e);
		Gn(this);
		this.unAppID = this.props.details.unAppID;
	}
	componentDidUpdate() {
		this.unAppID = this.props.details.unAppID;
	}
	KeyExtractor(e) {
		return `${this.unAppID}_${e.strID}`;
	}
	RenderItem(e) {
		return (
			<Hs
				className={k.AdditionalItem}
				appid={this.unAppID}
				achievement={e}
				onClick={this.ViewAllAchievements}
			/>
		);
	}
	RenderRest(e) {
		return (
			<Pr
				className={k.AdditionalItem}
				nRemaining={e}
				onActivate={this.ViewAllAchievements}
			/>
		);
	}
	ViewAllAchievements(e) {
		U(e, this.unAppID);
	}
	render() {
		const e = p.H.GetAchievements(this.unAppID);
		if (e.nTotal == 0 || !e.vecHighlight) {
			return null;
		}
		let t = e.vecHighlight.length > 0 && e.vecHighlight[0];
		return (
			<g.n
				feature={3}
				primaryAction={{
					label: Localize("#AppDetails_ViewAllAchievements"),
					action: this.ViewAllAchievements,
				}}
				label={Localize("#AppDetails_SectionTitle_Achievements")}
				highlight={<V achievements={e} appid={this.unAppID} />}
				rightColumnSection
				availableOffline
			>
				<g.n.Body>
					{t && (
						<Hs
							className={k.RightAchievementSection}
							appid={this.unAppID}
							featured
							achievement={t}
							onClick={this.ViewAllAchievements}
						/>
					)}
					{e.vecHighlight.length == 2 && (
						<Hs
							className={k.RightAchievementSection}
							appid={this.unAppID}
							featured
							achievement={e.vecHighlight[1]}
							onClick={this.ViewAllAchievements}
						/>
					)}
					{e.vecHighlight.length > 2 && (
						<u.S
							className={k.Additional}
							keyExtractor={this.KeyExtractor}
							itemRenderer={this.RenderItem}
							remainderRenderer={this.RenderRest}
							items={e.vecHighlight.slice(1)}
							totalItemOverride={e.nAchieved - 1}
						/>
					)}
					{e.vecUnachieved.length > 0 && (
						<div
							className={A_1(
								k.UnachievedSection,
								(t || e.vecHighlight.length > 1) && k.ShowDivider,
							)}
						>
							<div className={k.Label}>
								{Localize("#AppDetails_Achievements_Locked")}
							</div>
							<u.S
								className={A_1(k.Additional, k.UnachievedList)}
								keyExtractor={this.KeyExtractor}
								itemRenderer={this.RenderItem}
								remainderRenderer={this.RenderRest}
								items={e.vecUnachieved}
								totalItemOverride={e.nTotal - e.nAchieved}
							/>
						</div>
					)}
				</g.n.Body>
			</g.n>
		);
	}
};
function V(e) {
	const { appid, achievements } = e;
	const n = Math.floor((achievements.nAchieved * 100) / achievements.nTotal);
	const a = n == 100;
	const s = bG("GlobalAchievementStatsPage", appid);
	return (
		<g.n.Highlight className={A_1(k.HighlightDiv, a && k.AllAchieved)}>
			<div className={k.UnlockedLabel}>
				<span>
					{" "}
					{Localize(
						a
							? "#AppDetails_PlayerUnlockedPercentAll"
							: "#AppDetails_PlayerUnlockedPercent",
						achievements.nAchieved,
						achievements.nTotal,
					)}
				</span>
				<span className={k.UnlockedLabelPercent}>{` (${n}%)`}</span>
			</div>
			<div className={k.AchievementProgressContainer}>
				<div
					className={k.AchievementProgress}
					style={{
						width: `${n}%`,
					}}
				/>
			</div>
			{a && <o.OiG fullcolor className={k.Ribbon} />}
			<div className={k.GlobalStatLabel} onClick={s} />
		</g.n.Highlight>
	);
}
Cg([D.sH], tm.prototype, "unAppID", undefined);
Cg([l.oI], tm.prototype, "KeyExtractor", null);
Cg([l.oI], tm.prototype, "RenderItem", null);
Cg([l.oI], tm.prototype, "RenderRest", null);
Cg([l.oI], tm.prototype, "ViewAllAchievements", null);
tm = Cg([a.PA], tm);
export const Jq = PA((e) => {
	const {
		details: { unAppID: t },
	} = e;
	const r = p.H.GetAchievements(t);
	const n = r.vecHighlight.length > 0;
	const a = r.vecUnachieved.length > 0;
	const [s, setS] = i.useState(n);
	if (r.nTotal == 0 || !r.vecHighlight) {
		return null;
	}
	const l = n && a;
	const c = n || a;
	return (
		<g.n
			feature={3}
			label={Localize("#AppDetails_SectionTitle_Achievements")}
			highlight={<V achievements={r} appid={t} />}
			className={k.BasicAppDetailsAchievementsSection}
			rightColumnSection
			availableOffline
		>
			<g.n.Body
				className={A_1(
					l ? k.BodyStopJiggle : undefined,
					k.BasicAppDetailsAchievementsSectionBody,
				)}
			>
				<J
					appid={t}
					achievements={r.vecHighlight}
					prioritized={s}
					onRequestPriority={() => setS(true)}
				/>
				{r.vecUnachieved.length > 0 && (
					<div className={k.LockedAchievementsLabel}>
						{Localize("#AppDetails_Achievements_Locked")}
					</div>
				)}
				<J
					appid={t}
					achievements={r.vecUnachieved}
					prioritized={!s}
					onRequestPriority={() => setS(false)}
				/>
				{!c && (
					<f.TD onClick={(e) => U(e, t)}>
						{Localize("#AppDetails_ViewAllAchievements")}
					</f.TD>
				)}
			</g.n.Body>
		</g.n>
	);
});
function J(e) {
	const { appid, achievements, prioritized, onRequestPriority } = e;
	const [s, setS] = useState(0);
	const l = S1();
	if (!achievements || achievements.length === 0) {
		return null;
	}
	return (
		<_.VJ>
			<h.Z flow-children="row">
				<b.q>
					<C.Q
						className={k.SummaryCarouselContainer}
						leftMargin={32}
						edgeMask="none"
						fnUpdateArrows={() => {}}
						fnRenderScrollingDiv={({ htmlElementRef, ...t }) => (
							<div {...t} ref={htmlElementRef} style={l} />
						)}
					>
						{achievements.map((e, r) => (
							<Q_1
								key={e.strID}
								achievement={e}
								appid={appid}
								prioritized={prioritized}
								detailed={prioritized && r === s}
								onFocus={(e) => {
									t = r;
									onRequestPriority();
									setS(t);
									return;
									var t;
								}}
							/>
						))}
						<div
							style={{
								width: "16px",
							}}
							data-carousel="ignore"
						/>
					</C.Q>
				</b.q>
			</h.Z>
		</_.VJ>
	);
}
function Q_1(e) {
	const { appid, achievement, prioritized, detailed, onFocus } = e;
	const l = W6();
	const c = dd()
		? () => l.push(S.BV.Library.App.Achievements.My.Individual(appid))
		: (e) =>
				((e, t) => {
					let r = GetOwningWindowForEvent(e);
					M.oy.WindowStore.GetWindowInstanceFromWindow(
						r,
					).Navigator.GlobalAchievements(t);
				})(e, appid);
	return (
		<h.Z
			focusable
			className={A_1(k.AchievementCarouselItem, detailed && k.Detailed)}
			onFocus={onFocus}
			onActivate={c}
			onOKActionDescription={Localize("#AppDetails_ViewAllAchievements")}
		>
			<Hs
				achievement={achievement}
				appid={appid}
				iconClassNames={A_1(k.CarouselIcon, prioritized && k.Prioritized)}
			/>
			{detailed && <Q achievement={achievement} />}
		</h.Z>
	);
}
function Q(e) {
	const {
		achievement: { strName: t, strDescription: r },
	} = e;
	const n = G(e.achievement);
	return (
		<div className={k.AchivementCarouselItemDetails}>
			<div className={k.Name}>{t}</div>
			<div className={k.Description}>{r}</div>
			{n && (
				<div className={k.Achieved}>
					{Localize("#AppDetails_PctUnlocked", n)}
				</div>
			)}
		</div>
	);
}
