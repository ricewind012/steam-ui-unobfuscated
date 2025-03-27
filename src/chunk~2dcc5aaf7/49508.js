import {
	LocalizeTimeSince,
	qZ,
} from "../../actual_src/utils/localization/datetime.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n, { useContext, useMemo, forwardRef, useState } from "./63696.js";
import i, { A as A_1 } from "./90765.js";
import s, { _R } from "./96593.js";
import o from "./98995.js";
import l, { nY, Hy, DV, sn } from "./2773.js";
import c from "./28220.js";
import m, { Fc } from "./22588.js";
import u, { y$ } from "./91720.js";
import d, { rX } from "./6967.js";
import A, { br } from "./18869.js";
import p, { ZQ, NN } from "./3499.js";
import g from "./91486.js";
import h from "./40848.js";
import C, { wY } from "./99251.js";
import f from "./86454.js";
import b from "./35488.js";
import { lX } from "./31084.js";
import S from "./88750.js";
import w from "./60291.js";
import { q3 } from "./90095.js";
import "./44351.js";
import v from "./32676.js";
import { f as f_1 } from "./661.js";
import E from "./3874.js";
const M = "#1A9FFF";
const T = "#E4BE52";
export function UJ(e) {
	const { topPadding, filter } = e;
	const i = nY(filter);
	const i_isLoading = i.isLoading;
	const s = ((e) => !e.gameid && !e.phaseID && !e.strSearch && !e.tags)(filter);
	const o = i.data?.pages.length && i.data.pages[0].total_count > 0;
	const c = {
		paddingTop: `${topPadding}px`,
	};
	if (o && i.hasNextPage) {
		const e = i.data.pages[i.data.pages.length - 1];
		c.minHeight = `${(e.total_count || 0) * 100}px`;
	}
	return (
		<div
			className={h.PhaseListContainer}
			style={{
				maxWidth: "100vw",
				"--stickyHeaderHeight": `${topPadding}px`,
			}}
		>
			<div className={h.PhaseList} style={c}>
				{!i_isLoading && !o && <K_1 isDefaultFilter={s} />}
				{!i_isLoading && o && (
					<>
						<O filter={filter} phases={i} />
						{i.isFetchingNextPage && <Oe />}
						<f.J
							trigger="repeated"
							onVisibilityChange={(e) => {
								if (e && i.hasNextPage && !i.isFetching) {
									i.fetchNextPage();
								}
							}}
						/>
					</>
				)}
				{i_isLoading && <Oe />}
			</div>
		</div>
	);
}
function K_1(e) {
	const { isDefaultFilter } = e;
	const r = isDefaultFilter
		? "#PhaseList_AllContentFilteredOut"
		: "#PhaseList_NoResults";
	return <div className={h.NoContent}>{(0, Localize)(r)}</div>;
}
function D(e) {
	const { tags, selectedTagName, onTagSelected, gameID } = e;
	const s = tags.length > 4;
	let o = tags;
	if (selectedTagName) {
		const e = o.findIndex(({ name }) => selectedTagName === name);
		if (e > -1 && e > (s ? 2 : 3)) {
			o = [o[e], ...o.filter((t, r) => r !== e)];
		}
	}
	if (s) {
		o = o.slice(0, 3);
	}
	return (
		<div className={h.TagFilter}>
			<div className={h.GroupName}>{tags[0].group}</div>
			{o.map((e) => (
				<N
					tag={e}
					gameID={gameID}
					key={e.name}
					onTagSelected={onTagSelected}
					selectedTagName={selectedTagName}
				/>
			))}
			{s && (
				<F
					onClick={(t) => lX(<G {...e} />, t)}
					title={(0, Localize)("#PhaseList_FilterOverflowTooltip")}
				>
					<b.Dots className={h.OverflowDots} />
				</F>
			)}
		</div>
	);
}
function N(e) {
	const { gameID, tag, onTagSelected, selectedTagName } = e;
	return (
		<F
			selected={tag.name === selectedTagName}
			key={tag.name}
			title={tag.name}
			onClick={() => onTagSelected(tag)}
		>
			<c.N gameID={gameID} icon={tag.icon} />
		</F>
	);
}
function F(e) {
	const { selected, title, ...a } = e;
	return (
		<o.Gq toolTipContent={title}>
			<div
				className={A_1(h.FilterOptionButton, selected && h.Selected)}
				{...a}
			/>
		</o.Gq>
	);
}
function G(e) {
	const { tags, selectedTagName, onTagSelected, gameID } = e;
	const s = useContext(S.P);
	const o = (e) => {
		s.instance.ForceHide();
		onTagSelected(e);
	};
	return (
		<S.tz>
			<div className={h.OverflowGrid}>
				{tags.map((e) => (
					<N
						tag={e}
						gameID={gameID}
						key={e.name}
						onTagSelected={o}
						selectedTagName={selectedTagName}
					/>
				))}
			</div>
		</S.tz>
	);
}
function O(e) {
	const { phases, filter } = e;
	const i = ((e, t) => {
		const r = false;
		return useMemo(() => {
			if (!e) {
				return [];
			}
			const t = [];
			let n = "";
			let i = "";
			for (const s of e.pages) {
				for (const e of s.phases) {
					if (r || !ne(e)) {
						if (e.game_id !== n) {
							const r = LocalizeTimeSince(Date.now() / 1000 - e.date_recorded);
							if (r !== i) {
								t.push({
									type: "date",
									strTimeSince: r,
								});
								i = r;
							}
							t.push({
								type: "game",
								gameid: e.game_id,
							});
							n = e.game_id;
						}
						t.push({
							type: "phase",
							phase: e,
						});
					}
				}
			}
			return t;
		}, [e, r]);
	})(phases.data);
	if (phases.isError) {
		return (
			<div>
				{"Error... "}
				{phases.error.message}
			</div>
		);
	} else {
		return (
			<>
				{i.map((e, t) => (
					<P {...e} key={`${t}_${e.type}`} />
				))}
			</>
		);
	}
}
function P(e) {
	switch (e.type) {
		case "phase": {
			return <Z_1 {...e} />;
		}
		case "date": {
			return <div className={h.DateHeader}>{e.strTimeSince}</div>;
		}
		case "game": {
			return <L {...e} />;
		}
	}
}
function L(e) {
	const { gameid } = e;
	const r = _R(gameid);
	if (r) {
		return (
			<div className={h.GameHeader}>
				<g.z app={r} eAssetType={4} className={h.Icon} />
				{r.display_name}
			</div>
		);
	} else {
		return null;
	}
}
function Z_1(e) {
	const { phase } = e;
	if (re(phase)) {
		return <X_1 {...e} />;
	} else {
		return <H {...e} />;
	}
}
function X_1(e) {
	const { phase } = e;
	const r = ne(phase);
	return (
		<>
			<V empty={r}>
				<Eg time={phase.date_recorded} />
			</V>
			{!r && <Q {...e} />}
			{r && (
				<V empty={r}>
					<div className={h.LoneDurationContainer}>
						<J_1
							duration={
								parseInt(phase.background_recording?.duration_ms || "0") / 1000
							}
							color={M}
						/>
					</div>
				</V>
			)}
		</>
	);
}
export function Eg(e) {
	const { time } = e;
	const { strDate, strTime } = Hy(time);
	return (
		<div className={h.PhaseTimestamp}>
			{strDate && <div className={h.Date}>{strDate}</div>}
			<div>{strTime}</div>
		</div>
	);
}
function W(e) {
	return (
		<div className={h.ActiveTagContainer}>
			<div className={h.ColorBar} />
			<div className={h.ActiveLabel}>
				{(0, Localize)("#PhaseList_NowPlaying")}
			</div>
		</div>
	);
}
const V = forwardRef((props, ref) => (
	<div
		ref={ref}
		className={A_1(
			h.BlankPhaseGridItem,
			props.empty && h.Empty,
			props.className,
		)}
	>
		{props.children}
	</div>
));
function H(e) {
	return (
		<>
			<Q_1 {...e} />
			<Q {...e} />
		</>
	);
}
function J_1(e) {
	const { duration, color } = e;
	return (
		<div className={h.DurationMetric}>
			<div
				className={h.DurationBar}
				style={{
					width: `${Math.min(100, (duration / 3600) * 100)}%`,
					backgroundColor: color,
				}}
			/>
			<div
				className={h.DurationText}
				style={{
					color: color,
				}}
			>
				{(0, qZ)(duration, false)}
			</div>
		</div>
	);
}
function Q_1(e) {
	const { phase } = e;
	return (
		<Te className={h.PhaseDetails}>
			{phase.active && <W />}
			<Eg time={phase.date_recorded} />
			<c.x
				gameID={phase.game_id}
				tags={[...(phase.tags || []), ...(phase.contained_tags || [])]}
				attributes={phase.attributes}
			/>
		</Te>
	);
}
function Q(e) {
	const { phase } = e;
	const { recording, rgClips, rgScreenshots } = ((e) => ({
		recording: e.background_recording,
		rgClips: y$(e.clip_ids),
		rgScreenshots: ZQ(e.game_id, e.screenshots).data || [],
	}))(phase);
	const s = br();
	const O_1 = re(phase) ? V : Te;
	const [l, setL] = useState();
	const m = wY(setL);
	const d = rgClips.length + rgScreenshots.length + (recording ? 1 : 0);
	const g = l ? l.contentRect.width : 0;
	const _ = Math.floor(
		g / (parseInt(h.MediaListItemWidth) + parseInt(h.MediaListGap) / 2),
	);
	const f = [];
	if (recording) {
		f.push(<X gameID={phase.game_id} recording={recording} key="recording" />);
	}
	for (const e of rgClips) {
		f.push(<J summary={e} key={e.clip_id} />);
	}
	for (const e of rgScreenshots) {
		f.push(<K screenshot={e} key={e.id} />);
	}
	if (f.length === 0) {
		f.push(<Z key="invisible" />);
	}
	const b = d > _;
	return (
		<O_1 className={h.PhaseMediaList} ref={m}>
			{f.slice(0, b ? _ - 1 : _)}
			{b && (
				<Y
					total={d}
					onClick={() =>
						s.Media.Grid({
							state: {
								filter: {
									listSource: {
										type: "phase",
										phase: phase,
									},
								},
							},
						})
					}
				/>
			)}
		</O_1>
	);
}
function Z(e) {
	return (
		<Ee onClick={() => {}}>
			<div className={h.InvisibleItem} />
		</Ee>
	);
}
function Y(e) {
	const { total, onClick } = e;
	return (
		<Ee onClick={onClick}>
			<div className={h.OverflowItem}>
				{(0, Localize)("#PhaseList_ShowAllN", total)}
			</div>
		</Ee>
	);
}
function K(e) {
	const { screenshot } = e;
	const r = br();
	const i = () =>
		r.Media.Screenshot({
			state: {
				id: screenshot.id,
			},
		});
	return (
		<$
			src={screenshot.strUrl}
			onClick={i}
			onShowOptions={(e) => {
				lX(
					<v.ListItemContextMenu
						item={screenshot}
						onView={i}
						summoningElement={e.currentTarget}
					/>,
					e,
				);
				return true;
			}}
		/>
	);
}
function X(e) {
	const { gameID, recording } = e;
	const { loader } = Fc(gameID);
	const a = q3(() =>
		loader.GetGlobalOffsetDataForTimeline(recording.timeline_id, 0),
	);
	const s =
		(a?.nGlobalOffsetMS || 0) +
		parseInt(recording.offset) +
		parseInt(recording.duration_ms) / 2;
	const o = q3(() => loader.ConvertGlobaOffsetToRecordingAndRelativeOffset(s));
	const c = o?.strRecordingID || "";
	const u = o?.nRecordingOffsetMS || 0;
	const p = o?.nStartOffsetMS || 0;
	const g = rX(gameID, undefined, c, u, p, 320, false);
	const h = br();
	const C = () =>
		h.Media.Recording({
			state: {
				gameid: gameID,
				playbackDefinition: {
					m_strTimelineID: recording.timeline_id,
					m_nTimelineStartMS: parseInt(recording.offset),
				},
			},
		});
	const f = f_1();
	const b = () =>
		DV(
			gameID,
			recording.timeline_id,
			parseInt(recording.offset),
			parseInt(recording.duration_ms),
		);
	return (
		<$
			duration={parseInt(recording.duration_ms) / 1000}
			src={g}
			durationColor={M}
			onClick={C}
			onShowOptions={(e) => {
				lX(
					<E.IP {...f}>
						<v.BaseListItemContextMenu
							onView={C}
							additionalOptions={[
								{
									label: (0, Localize)("#PhaseList_Recording_SaveAsClip"),
									onSelected: b,
								},
							]}
						/>
					</E.IP>,
					e,
				);
				return true;
			}}
		/>
	);
}
function J(e) {
	const { summary } = e;
	const r = br();
	const i = () =>
		r.Media.Clip({
			state: {
				id: summary.clip_id,
			},
		});
	const a = f_1();
	return (
		<$
			duration={parseInt(summary.duration_ms) / 1000}
			src={summary.thumbnail_url}
			durationColor={T}
			onClick={i}
			onShowOptions={(e) => {
				lX(
					<E.IP {...a}>
						<v.ListItemContextMenu
							item={{
								type: "clip",
								id: summary.clip_id,
								summary: summary,
							}}
							onView={i}
							summoningElement={e.currentTarget}
						/>
					</E.IP>,
					e,
				);
				return true;
			}}
		/>
	);
}
function $(e) {
	const { duration, durationColor, src, onClick, onShowOptions } = e;
	return (
		<Ee onClick={onClick} onContextMenu={onShowOptions}>
			<img src={src} className={h.Thumbnail} />
			{duration > 0 && (
				<J_1 duration={duration} color={durationColor || "white"} />
			)}
		</Ee>
	);
}
function Ee(e) {
	return <div className={h.MediaListItem} {...e} />;
}
const Te = forwardRef((props, ref) => {
	const { children, className } = props;
	return (
		<div ref={ref} className={A_1(h.PhaseGridItem, className)}>
			{children}
		</div>
	);
});
function re(e) {
	return e.type === 2;
}
function ne(e) {
	return re(e) && e.clip_ids.length === 0 && e.screenshots.length === 0;
}
export function M4(e) {
	const { filter, phaseFilter, onPhaseFilterChange } = e;
	const a = !!NN(filter.listSource);
	const s = a ? filter.listSource.gameid : null;
	const o = a && false;
	return (
		<w.fC
			{...e}
			left={<Ae filter={phaseFilter} onFilterChange={onPhaseFilterChange} />}
			right={
				<>
					{o && (
						<Se
							filter={phaseFilter}
							onFilterChange={onPhaseFilterChange}
							gameID={s}
						/>
					)}
				</>
			}
		/>
	);
}
function Ae(e) {
	const { filter, onFilterChange } = e;
	return (
		<div className={h.InputFilter}>
			<b.Search />
			<input
				value={filter.strSearch || ""}
				onChange={(e) =>
					onFilterChange({
						...filter,
						strSearch: e.target.value,
					})
				}
				placeholder={(0, Localize)("#PhaseList_SearchPlaceholder")}
			/>
		</div>
	);
}
function Se(e) {
	const { filter, onFilterChange, gameID } = e;
	const a = sn(gameID).data || [];
	const s = (e) => {
		if (filter.tags && filter.tags[e.group] === e.name) {
			const n = {
				...filter,
			};
			delete n.tags[e.group];
			onFilterChange(n);
		} else {
			onFilterChange({
				...filter,
				tags: {
					...(filter.tags || {}),
					[e.group]: e.name,
				},
			});
		}
	};
	return (
		<>
			{a.map((e) => (
				<D
					key={e[0].group}
					tags={e}
					onTagSelected={s}
					gameID={gameID}
					selectedTagName={(filter.tags || {})[e[0].group]}
				/>
			))}
		</>
	);
}
function Oe(e) {
	const t = [];
	for (let e = 0; e < 20; e++) {
		t.push(<Le key={e} />);
	}
	return t;
}
function Le(e) {
	return <w.O0 className={h.PhaseListSkeleton} />;
}
