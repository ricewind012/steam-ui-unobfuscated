import {
	Localize,
	LocalizationManager,
	LocalizePlural,
} from "../../actual_src/utils/localization.js";
import { _f } from "../../actual_src/utils/domutils.js";
import n, { useState, useEffect } from "./63696.js";
import i, { Ms } from "./9808.js";
import a from "./30449.js";
import "./48289.js";
import s from "./69164.js";
import o from "./17231.js";
import l from "./35488.js";
import c, { A as A_1 } from "./90765.js";
import u, { Qv } from "./57665.js";
import d from "./66732.js";
import A, { Te } from "./55007.js";
import g, { V3 } from "./60155.js";
import h from "./18980.js";
import C, { Qn } from "./72476.js";
function _(e, t) {
	return `${f(e)} / ${f(t)}`;
}
function f(e) {
	let t = Number.isInteger(e) ? 0 : 1;
	return e.toLocaleString(undefined, {
		maximumFractionDigits: t,
	});
}
export function Om(e) {
	const { title, children, className } = e;
	return (
		<s.Z flow-children="column" className={A_1(h.AchievementList, className)}>
			{title && <YG>{title}</YG>}
			{children}
		</s.Z>
	);
}
export function YG(e) {
	const { className, children, ...i } = e;
	return (
		<div className={A_1(className, h.ListTitle)} {...i}>
			{children}
		</div>
	);
}
function S(e) {
	const { media, children, right, footer, ...o } = e;
	return (
		<s.Z
			focusable
			onOKActionDescription={null}
			className={h.AchievementListItemBase}
			{...o}
		>
			<div className={h.Container}>
				<div className={h.Media}>{media}</div>
				<div className={h.Content}>{children}</div>
				{right && <div className={h.Right}>{right}</div>}
			</div>
			{footer && <div className={h.Footer}>{footer}</div>}
		</s.Z>
	);
}
export function fm(e) {
	const {
		title,
		description,
		imgUrl,
		unlockDate,
		percentGlobalUnlocked,
		progress,
		footer,
		hidden,
		glow,
		...A
	} = e;
	const p = !!unlockDate;
	const g = unlockDate ? <M rtime={unlockDate} /> : null;
	const C = progress ? <T {...progress} showCount={!g} /> : null;
	return (
		<S
			media={<d._ hidden={hidden} glow={glow} imgURL={imgUrl} />}
			right={
				<I className={h.AlignEnd}>
					{g}
					{C}
				</I>
			}
			footer={footer}
			{...A}
		>
			<I className={h.AchievementContent}>
				<B>
					{hidden
						? Localize("#Achievements_HiddenAchievementItem_Individual_Title")
						: title}
				</B>
				<V>
					{hidden
						? Localize("#Achievements_HiddenAchievementItem_Description")
						: description}
				</V>
				{typeof percentGlobalUnlocked == "number" && p && (
					<T0 percentage={percentGlobalUnlocked} />
				)}
			</I>
		</S>
	);
}
const B = (e) => <div className={h.AchievementTitle}>{e.children}</div>;
const V = (e) => <div className={h.AchievementDescription}>{e.children}</div>;
const I = (e) => (
	<div className={A_1(h.VerticalContent, e.className)}>{e.children}</div>
);
export function T0(e) {
	const { percentage, className } = e;
	if (!percentage) {
		return null;
	}
	const i = Localize("#AppDetails_PctUnlocked", percentage.toFixed(1));
	return (
		<div className={A_1(h.AchievementGlobalPercentage, h.InBody, className)}>
			{i}
		</div>
	);
}
function M(e) {
	const { rtime, className } = e;
	const a = new Date(rtime * 1000).toLocaleDateString(
		LocalizationManager.GetPreferredLocales(),
		Ms(),
	);
	return (
		<div className={A_1(h.UnlockDate, className)}>
			{Localize("#Achievements_ListItem_UnlockDateTime", a)}
		</div>
	);
}
function T(e) {
	const { flCurrent, flMax, flPercentage, showCount } = e;
	const o = (
		<div className={h.ProgressBar}>
			<a.z2 nProgress={flPercentage} />
		</div>
	);
	if (showCount) {
		return (
			<I className={h.AlignEnd}>
				<div className={h.ProgressCount}>{_(flCurrent, flMax)}</div>
				{o}
			</I>
		);
	} else {
		return o;
	}
}
export function Eu(e) {
	const { count, ...r } = e;
	return (
		<S media={<u.Tv achievement={null} hidden pauseAnimation />} {...r}>
			<I className={h.HiddenAchievementContent}>
				<B>
					{LocalizePlural("#Achievements_HiddenAchievementItem_Title", count)}
				</B>
				<V>
					{LocalizePlural(
						"#Achievements_HiddenAchievementItem_Description",
						count,
					)}
				</V>
			</I>
		</S>
	);
}
export function ui(e) {
	const {
		title,
		description,
		imgUrl,
		hidden,
		percentGlobalUnlocked,
		primaryAchiever,
		secondaryAchiever,
		...c
	} = e;
	return (
		<S
			media={
				<d._
					hidden={hidden}
					glow={Qv(!!primaryAchiever.unlockDate, percentGlobalUnlocked)}
					imgURL={imgUrl}
				/>
			}
			right={
				<I className={h.ComparisonAchieverColumn}>
					<D {...primaryAchiever} primary />
					{secondaryAchiever && <D {...secondaryAchiever} primary={false} />}
				</I>
			}
			{...c}
		>
			<I className={h.AchievementContent}>
				<B>
					{hidden
						? Localize("#Achievements_HiddenAchievementItem_Individual_Title")
						: title}
				</B>
				<V>
					{hidden
						? Localize("#Achievements_HiddenAchievementItem_Description")
						: description}
				</V>
			</I>
		</S>
	);
}
function D(e) {
	const { primary, avatarURL, progress, unlockDate } = e;
	return (
		<div
			className={A_1(
				h.ComparisonAchieverInfo,
				primary ? h.Primary : h.Secondary,
				unlockDate ? h.Achieved : h.Unachieved,
			)}
		>
			{unlockDate > 0 && <M className={h.UnlockDate} rtime={unlockDate} />}
			{progress && !unlockDate && (
				<>
					<div className={h.ProgressContainer}>
						<a.z2
							nProgress={progress.flPercentage}
							color={primary || "var(--gpColor-Yellow, #ffc82c)"}
						/>
					</div>
					<div className={h.ProgressLabel}>
						{_(progress.flCurrent, progress.flMax)}
					</div>
				</>
			)}
			<div className={h.AvatarContainer}>
				<o.Ul statusPosition="none" strAvatarURL={avatarURL} size="X-Small" />
			</div>
		</div>
	);
}
export function Wh(e) {
	const { achievements, avatarURL } = e;
	const [i, a, s] = V3(achievements);
	const [l, setL] = useState(false);
	useEffect(() => {
		window.setTimeout(() => setL(true), 50);
	}, []);
	const URef = n.useRef(undefined);
	const d = n.useCallback((e) => {
		URef.current = e ? (0, _f)(e) : null;
	}, []);
	const C = Te({
		count: s.length,
		getScrollElement: () => URef.current,
		estimateSize: n.useCallback(
			(e) => parseInt(h.nGlobalAchievementHeight) + parseInt(h.nAchievementGap),
			[],
		),
		overscan: 5,
	});
	if (!l) {
		return null;
	}
	const _ = (
		<div className={h.Avatar}>
			<o.Ul statusPosition="none" strAvatarURL={avatarURL} size="Small" />
		</div>
	);
	const f = (
		<div className={h.HeaderText}>
			{Localize("#Achievements_GlobalAchievement_PercentUnlockedLabel")}
		</div>
	);
	return (
		<Om>
			<g.zp strFilter={i} onChangeFilter={a} leftContent={_} rightContent={f} />
			<div
				className={h.ListWrapper}
				ref={d}
				style={{
					height: `${C.getTotalSize()}px`,
					width: "100%",
					position: "relative",
				}}
			>
				{C.getVirtualItems().map((e) => {
					const t = {
						position: "absolute",
						top: e.start,
						left: 0,
						width: "100%",
						height: e.size - parseInt(h.nAchievementGap),
					};
					return <F key={e.key} {...s[e.index]} style={t} />;
				})}
			</div>
		</Om>
	);
}
function F(e) {
	const {
		strName,
		strDescription,
		imgUrl,
		percentGlobalUnlocked = 0,
		unlocked,
		className,
		hidden,
		...p
	} = e;
	const [g, setG] = n.useState(false);
	const f = Qn();
	const b = !hidden || g;
	const y = Localize(
		f
			? "#Achievements_HiddenAchievementItem_Individual_Reveal_Gamepad"
			: "#Achievements_HiddenAchievementItem_Individual_Reveal_Desktop",
	);
	const S =
		b || Localize("#Achievements_HiddenAchievementItem_Individual_Reveal");
	return (
		<s.Z
			focusable
			onClick={() => setG(true)}
			onActivate={() => setG(true)}
			onOKActionDescription={S}
			className={A_1(h.GlobalAchievementListItem, className)}
			{...p}
		>
			<div className={h.UnlockContainer}>{unlocked && <l.Checkmark />}</div>
			<div className={A_1(h.Content, !b && h.Hidden)}>
				<div className={h.ImageContainer}>
					<d._ hidden={!b} glow={false} imgURL={imgUrl} />
				</div>
				<div className={h.Right}>
					<div className={h.Info}>
						<div className={h.Title}>
							{b
								? strName
								: Localize(
										"#Achievements_HiddenAchievementItem_Individual_Title",
									)}
						</div>
						<div className={h.Description}>
							{b
								? strDescription
								: Localize("#Achievements_HiddenAchievementItem_Description")}
						</div>
					</div>
					<div className={h.Percent}>{percentGlobalUnlocked.toFixed(1)}%</div>
					{!b && <div className={h.SpoilerWarning}>{y}</div>}
				</div>
				<div
					className={h.ProgressFill}
					style={{
						width: `${percentGlobalUnlocked}%`,
					}}
				/>
			</div>
		</s.Z>
	);
}
