import { Localize } from "../../actual_src/utils/localization.js";
import { SortedFindLessOrEqual } from "../../actual_src/utils/arrayutils.js";
import n, { useEffect, useRef } from "./63696.js";
import i from "./88750.js";
import s, { aO } from "./92374.js";
import o, { lX } from "./31084.js";
import l, { dK } from "./29516.js";
import c, { uR } from "./65844.js";
import m, { q3 } from "./90095.js";
import u from "./83247.js";
import d from "./35488.js";
import A from "./29443.js";
import p, { A as A_1 } from "./90765.js";
import g, { f as f_1 } from "./661.js";
import { r6, YM } from "./91720.js";
import C from "./94361.js";
import f, { DV } from "./2773.js";
import b, { fR } from "./11072.js";
export function ww() {
	const e = uR();
	const t = aO();
	const r = dK();
	const i = q3(() => !t.ShouldModeShowClipControls());
	const a = r6();
	const { onMarkerCreated, onNavigateToClip } = f_1();
	const [A, p] = fR();
	return n.useCallback(
		(s, l, c, m) =>
			i ||
			a ||
			lX(
				<S
					isCurrentPlayback={c}
					nGlobalOffsetMS={l}
					playbackCoordinator={t}
					timelineView={e}
					fnSetSelectionClipRange={r}
					onMarkerCreated={onMarkerCreated}
					onNavigateToClip={onNavigateToClip}
					onContextMenuOpenChange={p}
				/>,
				s,
				m,
			),
		[i, a, t, e, r, onMarkerCreated, onNavigateToClip, p],
	);
}
function S(e) {
	const {
		playbackCoordinator,
		timelineView,
		nGlobalOffsetMS,
		fnSetSelectionClipRange,
		isCurrentPlayback,
		onMarkerCreated,
		onNavigateToClip,
		onContextMenuOpenChange,
	} = e;
	const y = q3(() => playbackCoordinator.GetClipsAtGlobalMS(nGlobalOffsetMS));
	const S = L2(timelineView);
	useEffect(() => {
		onContextMenuOpenChange(true);
		return () => onContextMenuOpenChange(false);
	}, [onContextMenuOpenChange]);
	const w = (() => {
		const { strTimelineID, nTimelineOffsetMS } =
			playbackCoordinator.ConvertGlobalOffsetToTimelineRelativeOffset(
				nGlobalOffsetMS.valMS,
			);
		if (!strTimelineID) {
			return null;
		}
		const n = playbackCoordinator.GetLoader().GetTimelineData(strTimelineID);
		if (!n) {
			return null;
		}
		const i = SortedFindLessOrEqual(
			n.m_rgPhases,
			(e) => nTimelineOffsetMS.valMS - parseInt(e.time),
		);
		if (i < 0) {
			return null;
		}
		const a = n.m_rgPhases[i];
		if (
			nTimelineOffsetMS.valMS >= parseInt(a.time) &&
			nTimelineOffsetMS.valMS <= parseInt(a.time) + parseInt(a.duration)
		) {
			return {
				strTimelineID: strTimelineID,
				phase: a,
			};
		} else {
			return null;
		}
	})();
	const B = (e) => timelineView.SetPhaseToHighlight(e);
	useEffect(() => () => timelineView.SetPhaseToHighlight(null), [timelineView]);
	return (
		<i.tz refInstance={S}>
			<i.kt
				onSelected={(e) => {
					playbackCoordinator.AddUserMarkerAtGlobalMS(
						nGlobalOffsetMS,
						"/GameRecording/AddMarker/TimelineCtxMenu",
						(t, r) => {
							if (onMarkerCreated) {
								onMarkerCreated(t, r, e);
							}
						},
					);
					playbackCoordinator.SetPlaytimeFromGlobalMS(nGlobalOffsetMS);
					playbackCoordinator.FocusGlobalMS(nGlobalOffsetMS);
				}}
				className={A.TimelineContextMenuItem}
			>
				<div className={A_1(A.MenuItem, A.AddUserMarker)}>
					<u.pH />
					{Localize(
						isCurrentPlayback
							? "#Playback_UserSelectionControls_AddUserMarker"
							: "#TimelineDialog_AddMarker",
					)}
				</div>
			</i.kt>
			<i.kt
				onSelected={() => {
					const { strTimelineID, nTimelineOffsetMS } =
						playbackCoordinator.ConvertGlobalOffsetToTimelineRelativeOffset(
							nGlobalOffsetMS.valMS,
						);
					YM(playbackCoordinator.GetGameID(), strTimelineID, nTimelineOffsetMS);
				}}
				className={A.TimelineContextMenuItem}
			>
				<div className={A_1(A.MenuItem, A.TakeScreenshot)}>
					<u.i7 />
					{Localize(
						isCurrentPlayback
							? "#Playback_UserSelectionControls_TakeScreenshot"
							: "#TimelineDialog_TakeScreenshot",
					)}
				</div>
			</i.kt>
			<i.kt
				onSelected={() => {
					fnSetSelectionClipRange(
						playbackCoordinator,
						4,
						nGlobalOffsetMS,
						undefined,
					);
					playbackCoordinator.SetPlaytimeFromGlobalMS(nGlobalOffsetMS);
					playbackCoordinator.FocusGlobalMS(nGlobalOffsetMS);
				}}
				className={A.TimelineContextMenuItem}
			>
				<div className={A_1(A.MenuItem, A.StartEndClip)}>
					<u.Nm direction="left" />
					{Localize(
						isCurrentPlayback
							? "#Playback_UserSelectionControls_SetClipStart"
							: "#TimelineContext_SetClipStart",
					)}
				</div>
			</i.kt>
			<i.kt
				onSelected={() => {
					fnSetSelectionClipRange(
						playbackCoordinator,
						4,
						undefined,
						nGlobalOffsetMS,
					);
					playbackCoordinator.SetPlaytimeFromGlobalMS(nGlobalOffsetMS);
					playbackCoordinator.FocusGlobalMS(nGlobalOffsetMS);
				}}
				className={A.TimelineContextMenuItem}
			>
				<div className={A_1(A.MenuItem, A.StartEndClip)}>
					<u.Nm direction="right" />
					{Localize(
						isCurrentPlayback
							? "#Playback_UserSelectionControls_SetClipEnd"
							: "#TimelineContext_SetClipEnd",
					)}
				</div>
			</i.kt>
			{!!w && (
				<i.kt
					onSelected={() => {
						if (!w) {
							return;
						}
						const { phase, strTimelineID } = w;
						DV(
							playbackCoordinator.GetGameID(),
							strTimelineID,
							parseInt(phase.time),
							parseInt(phase.duration),
						);
					}}
					className={A.TimelineContextMenuItem}
					onMouseOver={() => B([w.strTimelineID, w.phase.time])}
					onMouseLeave={() => B(null)}
				>
					<div className={A_1(A.MenuItem, A.ClipPhase)}>
						<u.O5 />
						{Localize("#TimelineDialog_ClipPhase")}
					</div>
				</i.kt>
			)}
			{y.length > 0 && (
				<i.kt
					onSelected={() => {
						if (y.length > 0) {
							C.y.ReportTrackedAction(
								"/GameRecording/Tooltip/ViewClip/TimelineCtxMenu",
							);
							if (onNavigateToClip) {
								onNavigateToClip(y[0].strClipID);
							}
						}
					}}
					className={A.TimelineContextMenuItem}
				>
					<div className={A_1(A.MenuItem, A.ViewClip)}>
						<d.Video />
						{Localize("#TimelineDialog_ViewClip")}
					</div>
				</i.kt>
			)}
		</i.tz>
	);
}
export function wj() {
	const e = aO();
	const t = dK();
	const r = q3(() => !e.ShouldModeShowClipControls());
	const i = r6();
	const { onMarkerCreated } = f_1();
	return n.useCallback(
		(s, l) => {
			if (r || i) {
				return;
			}
			const c = (
				<B
					onMarkerCreated={onMarkerCreated}
					playbackCoordinator={e}
					fnSetSelectionClipRange={t}
				/>
			);
			lX(c, s, l);
		},
		[r, i, onMarkerCreated, e, t],
	);
}
function B(e) {
	const { playbackCoordinator, fnSetSelectionClipRange } = e;
	const SRef = useRef();
	const { onMarkerCreated } = f_1();
	return (
		<i.tz refInstance={SRef}>
			<i.kt
				onSelected={(e) => {
					const r = playbackCoordinator.GetGlobalMSPlaytime();
					playbackCoordinator.AddUserMarkerAtGlobalMS(
						r,
						"/GameRecording/AddMarker/VideoCtxMenu",
						(t, r) => {
							if (onMarkerCreated) {
								onMarkerCreated(t, r, e);
							}
						},
					);
					playbackCoordinator.SetPlaytimeFromGlobalMS(r);
					playbackCoordinator.FocusGlobalMS(r);
				}}
				className={A.TimelineContextMenuItem}
			>
				<div className={A_1(A.MenuItem, A.AddUserMarker)}>
					<u.Od />
					{Localize("#Playback_UserSelectionControls_AddUserMarker")}
				</div>
			</i.kt>
			<i.kt
				onSelected={() => {
					const e = playbackCoordinator.GetGlobalMSPlaytime();
					const { strTimelineID, nTimelineOffsetMS } =
						playbackCoordinator.ConvertGlobalOffsetToTimelineRelativeOffset(
							e.valMS,
						);
					YM(playbackCoordinator.GetGameID(), strTimelineID, nTimelineOffsetMS);
				}}
				className={A.TimelineContextMenuItem}
			>
				<div className={A_1(A.MenuItem, A.TakeScreenshot)}>
					<u.i7 />
					{Localize("#Playback_UserSelectionControls_TakeScreenshot")}
				</div>
			</i.kt>
			<i.kt
				onSelected={() => {
					const e = playbackCoordinator.GetGlobalMSPlaytime();
					fnSetSelectionClipRange(playbackCoordinator, 4, e, undefined);
					playbackCoordinator.SetPlaytimeFromGlobalMS(e);
					playbackCoordinator.FocusGlobalMS(e);
				}}
				className={A.TimelineContextMenuItem}
			>
				<div className={A_1(A.MenuItem, A.StartEndClip)}>
					<u.Nm direction="left" />
					{Localize("#Playback_UserSelectionControls_SetClipStart")}
				</div>
			</i.kt>
			<i.kt
				onSelected={() => {
					const e = playbackCoordinator.GetGlobalMSPlaytime();
					fnSetSelectionClipRange(playbackCoordinator, 4, undefined, e);
					playbackCoordinator.SetPlaytimeFromGlobalMS(e);
					playbackCoordinator.FocusGlobalMS(e);
				}}
				className={A.TimelineContextMenuItem}
			>
				<div className={A_1(A.MenuItem, A.StartEndClip)}>
					<u.Nm direction="right" />
					{Localize("#Playback_UserSelectionControls_SetClipEnd")}
				</div>
			</i.kt>
		</i.tz>
	);
}
export function L2(e) {
	const t = q3(() => e.GetAutoScrollPauseTimeout());
	const r = q3(() => e.GetVisualWindowStartPX());
	const IRef = useRef();
	const ARef = useRef();
	useEffect(() => {
		if (IRef.current && ARef.current) {
			ARef.current.Hide();
		} else {
			IRef.current = true;
		}
	}, [r]);
	useEffect(() => {
		e.SetAutoScrollPaused(true);
	}, [e]);
	useEffect(() => {
		if (t) {
			e.ClearAutoScrollPauseTimeout();
		}
	}, [t, e]);
	return ARef;
}
