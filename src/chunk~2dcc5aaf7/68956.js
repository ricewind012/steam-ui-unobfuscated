import {
	Localize,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";
import { LocalizeDurationAbbreviation } from "../../actual_src/utils/localization/datetime.js";
import { ToggleFullscreen } from "../../actual_src/utils/domutils.js";
import n, { useState, useEffect, useMemo, useCallback } from "./63696.js";
import i, { A as A_1 } from "./90765.js";
import a from "./81469.js";
import o, { xE } from "./84921.js";
import { q3 } from "./90095.js";
import { aO } from "./92374.js";
import u from "./83599.js";
import d, { NB } from "./6967.js";
import A from "./43691.js";
import p from "./35488.js";
import g, { Ue } from "./52451.js";
import h, { _Z, Pm } from "./29516.js";
import { wj } from "./59005.js";
import _, { hT, Te, xz, N$, sX, eJ } from "./76835.js";
import f, { dd } from "./91720.js";
import b from "./96360.js";
import y from "./37576.js";
import w from "./67429.js";
import T from "./69164.js";
import R from "./98995.js";
import k, { f as f_1 } from "./661.js";
import D from "./90242.js";
import N from "./94361.js";
import F from "./26516.js";
const s = a;
const S = y;
const B = parseInt(S.animationDuration);
function V_1() {
	const e = aO();
	const t = q3(() => e.GetDisplayHighlightEntry());
	const [r, setR] = useState(null);
	const ARef = n.useRef(0);
	useEffect(() => {
		if (t?.entry && !hT(t.entry) && !Te(t.entry)) {
			setR(t.entry);
			ARef.current = window.setTimeout(
				() => {
					e.SetDisplayHighlightEntry(null);
				},
				t.duration ? t.duration : B,
			);
			return () => window.clearTimeout(ARef.current);
		}
		setR(null);
	}, [t, e]);
	if (r) {
		return <I entry={r} />;
	} else {
		return null;
	}
}
function I(e) {
	const { entry } = e;
	const r = aO();
	const i = q3(() => r.GetGameID());
	const a = r.GetGameRecordingVideo();
	const s = q3(() => r.GetRecordingID());
	const o = q3(() => a.IsInitialized());
	const u = a.GetVideoHeight();
	const d = a.GetVideoWidth();
	const A =
		s && o && u > 0 && d > 0
			? {
					height: u,
					width: d,
				}
			: {};
	let p;
	if (xz(entry)) {
		p = <E entry={entry} strGameID={i} />;
	} else if (N$(entry)) {
		p = (
			<M
				key={entry.id}
				entry={entry}
				strMarkerIcon={entry.icon}
				title={entry.title ? entry.title : Localize("#Marker_UserMarker_Title")}
				description={entry.description || ""}
			/>
		);
	} else if (sX(entry)) {
		p = (
			<M
				key={entry.id}
				entry={entry}
				strMarkerIcon={entry.icon}
				title={Localize("#MediaManager_ItemType_Screenshot")}
				description=""
			/>
		);
	} else if (eJ(entry)) {
		p = (
			<M
				key={entry.id}
				entry={entry}
				strMarkerIcon={entry.icon}
				title={entry.title || ""}
				description={entry.description || ""}
			/>
		);
	}
	return (
		<div className={S.BannerVideoOverlay} style={A}>
			{p}
		</div>
	);
}
function E(e) {
	const { entry, strGameID } = e;
	const i = new w.VS(strGameID);
	const a = dd(i.GetAppID(), entry.achievement_name);
	if (a) {
		return (
			<M
				key={entry.id}
				entry={entry}
				strMarkerIcon="steam_achievement"
				title={a.name ?? ""}
				description={a.description ?? ""}
			/>
		);
	} else {
		return null;
	}
}
function M(e) {
	const { entry, strMarkerIcon, title, description } = e;
	return (
		<div className={S.PlayerHighlightBanner}>
			<div className={S.BannerContents}>
				<div className={S.HighlightIcon}>
					<b.Zo entry={entry} strMarkerIcon={strMarkerIcon} />
				</div>
				<div className={S.InfoBox}>
					{title && <div className={S.HighlightTitle}>{title}</div>}
					{description && <div className={S.HighlightDesc}>{description}</div>}
				</div>
			</div>
		</div>
	);
}
const G = F;
const P = parseInt(G.animationDuration);
function L() {
	const e = aO();
	const t = e.GetGameRecordingVideo();
	const r = q3(() => e.GetRecordingID());
	const i = q3(() => t.IsInitialized());
	const a = t.GetVideoHeight();
	const s = t.GetVideoWidth();
	const o =
		r && i && a > 0 && s > 0
			? {
					height: a,
					width: s,
				}
			: {};
	const CRef = n.useRef(0);
	const u = q3(() => e.GetRelativeTimeForDisplay());
	const d = q3(() => e.GetGameRecordingVideo().IsInitialized());
	const A = useMemo(() => {
		if (isNaN(u) || !d) {
			return null;
		}
		const t = e.ConvertGlobalOffsetToTimelineRelativeOffset(u);
		if (t && e.GetIsActiveTimeline(t.strTimelineID)) {
			const r = e.MakeRelativeToTimelineEndIfActive(
				t.strTimelineID,
				t.nTimelineOffsetMS.valMS,
			);
			return LocalizeDurationAbbreviation(r / 1000, false, true);
		}
		return null;
	}, [d, u, e]);
	useEffect(() => {
		if (!isNaN(u)) {
			CRef.current = window.setTimeout(() => {
				e.ClearRelativeTimeDisplay();
			}, P);
			return () => window.clearTimeout(CRef.current);
		}
	}, [u, e]);
	if (isNaN(u)) {
		return null;
	} else {
		return (
			<div className={G.RelativeTimeContainer} style={o}>
				<div className={G.RelativeTime} key={A}>
					{A}
				</div>
			</div>
		);
	}
}
export function J(e) {
	const {
		disableSound,
		positionAbsolute = true,
		refVideoResize,
		style,
		refFullscreen,
	} = e;
	const d = aO();
	const p = xE(d.StopPlayback, d.SetVideoElement);
	const _ = d.GetGameRecordingVideo();
	const f = q3(() => d.GetRecordingID());
	const b = q3(() => _.GetPlaybackError());
	const y = q3(() => d.GetRecordingMode() === "Overlay");
	const S = (() => {
		const e = aO();
		const t = q3(() => e.GetGlobalMSPlaytime());
		const { nGlobalEndMS, nGlobalStartMS } = _Z();
		const i = e.GetGameRecordingVideo();
		return (
			!q3(() => i.GetPlaybackError()) &&
			!!t &&
			!!nGlobalStartMS &&
			!!nGlobalEndMS &&
			t.valMS >= nGlobalStartMS.valMS &&
			t.valMS <= nGlobalEndMS.valMS
		);
	})();
	const w = Pm();
	const B = b || !f;
	const IRef = n.useRef();
	let E = Ue(p, refVideoResize);
	const M = wj();
	const T = n.useCallback(
		(e) => {
			if (!B) {
				M(e, {
					bDisableMouseOverlay: true,
					bForcePopup: true,
					bAlwaysOnTop: true,
				});
			}
		},
		[B, M],
	);
	const R = !A.TS.IN_STEAMUI && !!e.autoPlay;
	let k = A_1(
		s.GameRecordingPlayer,
		B && s.NoVideo,
		positionAbsolute && s.PositionAbsolute,
		w && s.ClippingMode,
		y && s.Overlay,
		S && s.PlayingClippedRegion,
	);
	return (
		<div
			ref={IRef}
			className={k}
			onClick={() => {
				if (f) {
					d.TogglePlayPause();
				}
			}}
			onContextMenu={T}
			style={style}
			onDoubleClick={() => {
				if (f && refFullscreen.current) {
					ToggleFullscreen(refFullscreen.current);
				}
			}}
		>
			<video
				ref={E}
				controls={false}
				muted={disableSound}
				autoPlay={R}
				playsInline={R}
			/>
			<H player={_} />
			<U />
			<W />
			<V />
			{!f && <J_1 />}
			<V_1 />
			<L />
		</div>
	);
}
function U() {
	const e = aO();
	const t = u.fi.Get().IsDebugLogEnabled("GR");
	const r = q3(() => e.GetPlaybackStats());
	if (t && r) {
		return (
			<div className={s.PerfCtnVideo}>
				<div>
					<span>{"Average Seek MS: "}</span>
					<span>{r.nMean.toFixed(3)}</span>
				</div>
				<div>
					<span>{"StdDev Seek MS: "}</span>
					<span>{r.nStdDev.toFixed(3)}</span>
				</div>
				<div>
					<span>{"Slowest Seek MS: "}</span>
					<span>{r.nMax.toFixed(3)}</span>
				</div>
				<div>
					<span>{"Fastest Seek MS: "}</span>
					<span>{r.nMin.toFixed(3)}</span>
				</div>
				<div>
					<span>{"# Seeks: "}</span>
					<span>{r.nLength}</span>
				</div>
				<div>
					<span>{"Last Val: "}</span>
					<span>{r.nLastVal.toFixed(3)}</span>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
function W() {
	const e = u.fi.Get().IsDebugLogEnabled("GR");
	const t = aO();
	q3(() => {
		t.GetGlobalMSPlaytime();
	});
	const r = NB();
	if (e && r) {
		return (
			<div className={s.PerfCtnThumbnails}>
				<div>
					<span>{"Avg Thumbnail Load MS: "}</span>
					<span>{r.nMean.toFixed(3)}</span>
				</div>
				<div>
					<span>{"StdDev Thumbnail Load MS: "}</span>
					<span>{r.nStdDev.toFixed(3)}</span>
				</div>
				<div>
					<span>{"Slowest Thumbnail Load MS: "}</span>
					<span>{r.nMax.toFixed(3)}</span>
				</div>
				<div>
					<span>{"Fastest Thumbnail Load MS: "}</span>
					<span>{r.nMin.toFixed(3)}</span>
				</div>
				<div>
					<span>{"# Loaded: "}</span>
					<span>{r.nLength}</span>
				</div>
				<div>
					<span>{"Last Load: "}</span>
					<span>{r.nLastVal.toFixed(3)}</span>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
function V() {
	const e = aO();
	const t = e.GetGameRecordingVideo();
	const r = t.GetVideoHeight();
	const i = q3(() => t.BVideoElementWaiting());
	const a = q3(() => t.IsPaused());
	const o = q3(() => t.GetPlaybackError());
	const c = q3(() => t.IsInitialized());
	if (!q3(() => e.GetRecordingID()) || (c && !i) || o || a) {
		return null;
	} else {
		return (
			<div
				className={s.LoadingSpinner}
				style={{
					height: r,
				}}
			>
				<p.Spinner />
			</div>
		);
	}
}
function H(e) {
	const { player } = e;
	const r = q3(() => player.GetPlaybackError());
	q3(() => player.GetMediaTypeError());
	let i = "";
	switch (r) {
		case o.ep.DownloadFailed:
		case o.ep.PlaybackError:
		case o.ep.MediaTypeError: {
			i = "#GameRecording_PlayerError_Generic";
		}
	}
	if (i) {
		return (
			<div className={s.PlayerError}>
				<div className={s.Text}>{Localize(i)}</div>
			</div>
		);
	} else {
		return null;
	}
}
function J_1() {
	const e = aO();
	const t = q3(() => e.GetGamepadMode());
	const { onNavigateToClip, onNavigateToFAQ } = f_1();
	const o = q3(() => e.GetGlobalMSPlaytime());
	const u = e.GetClosestPreviousRecordingForGlobalMS(o);
	const d = e.GetClosestNextRecordingForGlobalMS(o);
	const A = q3(() => e.GetClipsAtGlobalMS(o));
	const p = useCallback(
		(t) => {
			if (u) {
				const r = Math.max(parseInt(u.duration_ms) - 500, 0);
				e.SetPlaytimeFromRecordingOffset(u.recording_id, r, true, true);
				t.stopPropagation();
			}
		},
		[e, u],
	);
	const g = useCallback(
		(t) => {
			if (d) {
				e.SetPlaytimeFromRecordingOffset(d.recording_id, 0);
				t.stopPropagation();
			}
		},
		[e, d],
	);
	const h = useCallback(
		(e) => {
			if (A.length > 0) {
				N.y.ReportTrackedAction(
					"/GameRecording/Tooltip/ViewClip/PlayerNoContent",
				);
				onNavigateToClip(A[0].strClipID);
				e.stopPropagation();
			}
		},
		[A, onNavigateToClip],
	);
	return (
		<div className={s.PlayerError}>
			<div className={s.Title}>
				{Localize("#GameRecording_PlayerNoContent")}
			</div>
			<div className={s.Description}>
				{LocalizeInlineReactWithFallback(
					"#GameRecording_PlayerNoContentDescription",
					<D.Ii href="#" onClick={onNavigateToFAQ} />,
				)}
			</div>
			{!t && (
				<div className={s.Buttons}>
					<R.he
						direction="bottom"
						toolTipContent={Localize(
							u
								? "#GameRecording_PlayerNoContentJumpPrevious_tooltip"
								: "#GameRecording_PlayerNoContentJumpNoContent_tooltip",
						)}
					>
						<T.Z
							className={A_1(s.Button, s.JumpPrevious, !u && s.DisableButton)}
							onClick={p}
							onActivate={p}
						>
							{Localize("#GameRecording_PlayerNoContentJumpPrevious")}
						</T.Z>
					</R.he>
					{A.length > 0 && (
						<R.he
							direction="bottom"
							toolTipContent={Localize(
								"#GameRecording_PlayerNoContentSeeClip_tooltip",
							)}
						>
							<T.Z
								onClick={h}
								onActivate={h}
								className={A_1(s.Button, s.GoToClip)}
							>
								{Localize("#GameRecording_PlayerNoContentSeeClip")}
							</T.Z>
						</R.he>
					)}
					<R.he
						direction="bottom"
						toolTipContent={Localize(
							d
								? "#GameRecording_PlayerNoContentJumpNext_tooltip"
								: "#GameRecording_PlayerNoContentJumpNoContent_tooltip",
						)}
					>
						<T.Z
							className={A_1(s.Button, s.JumpNext, !d && s.DisableButton)}
							onClick={g}
							onActivate={g}
						>
							{Localize("#GameRecording_PlayerNoContentJumpNext")}
						</T.Z>
					</R.he>
				</div>
			)}
		</div>
	);
}
