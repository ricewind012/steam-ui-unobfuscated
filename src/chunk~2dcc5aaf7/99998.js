import {
	Localize,
	LocalizeReact,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";

import {
	BElementFullscreen,
	CancelFullscreen,
	IsHTMLElement,
	BIsParentOrSelf,
	ToggleFullscreen,
} from "../../actual_src/utils/domutils.js";

import { qZ } from "../../actual_src/utils/localization/datetime.js";
import n, { useRef, useCallback, useState, useEffect } from "./63696.js";
import i from "./18260.js";
import a, { A as A_1 } from "./90765.js";
import s from "./36975.js";
import o from "./35488.js";
import l from "./83247.js";
import c from "./64608.js";
import m, { q3 } from "./90095.js";
import u from "./98995.js";
import A from "./44392.js";
import g, { aO } from "./92374.js";
import C from "./43691.js";
import _ from "./69164.js";
import f, { qm, pH, _Z, Pm, dK, eb, uq, VM } from "./29516.js";
import b, { Sb } from "./72061.js";
import y, { Hy, Pe, e3 } from "./25633.js";
import S from "./7945.js";
import w, { z as z_1 } from "./27541.js";
import B, { r6, f5, Gb } from "./91720.js";
import v, { uI, hf, Qn } from "./72476.js";
import T, { fm } from "./89193.js";
import R, { f as f_1 } from "./661.js";
import k from "./34891.js";
import D from "./63504.js";
import N from "./90242.js";
import G from "./61657.js";
import { ML, bB, L$, Ue, wY, xA } from "./52451.js";
import { M } from "./51517.js";
import { W6 } from "./49519.js";
import z, { rf } from "./62272.js";
import x from "./57774.js";
import he from "./68956.js";
import _e, { yk } from "./91435.js";
import fe from "./31084.js";
import { h } from "./15123.js";
import ye from "./10606.js";
const p = A;
function I(e) {
	const t = qm();
	if (!e.visible) {
		return null;
	}
	let r = A_1(e.className, S.CancelButton);
	return (
		<c.$n className={r} onClick={t}>
			<o.X_Line />
			<div className={S.Label}>{Localize("#Button_Cancel")}</div>
		</c.$n>
	);
}
const E = n.forwardRef((props, ref) => {
	let { className, visible } = props;
	const s = aO();
	const l = s.GetGameID();
	const { eInitMethod, startMetrics, endMetrics } = pH();
	const { nGlobalEndMS, nGlobalStartMS } = _Z();
	const _ = qm();
	const b = z_1();
	const I = r6();
	const E = uI();
	if (visible) {
		return (
			<u.he
				toolTipContent={
					I ? Localize("#RecordingState_Clip_LowDiskSpace") : null
				}
				direction="top"
			>
				<c.$n
					className={A_1(S.ShareSaveButton, className)}
					disabled={I}
					onClick={async (e) => {
						const e_currentTarget = e.currentTarget;
						let r;
						r = nGlobalEndMS
							? await Hy(
									l,
									s,
									Math.floor(nGlobalStartMS.valMS),
									Math.floor(nGlobalEndMS.valMS) - 1,
									eInitMethod,
									startMetrics,
									endMetrics,
								)
							: await Pe(l, s, eInitMethod, startMetrics, endMetrics);
						const n = {
							...r,
							create: async (e, t) => {
								const n = await r.create(e, t);
								if (n.result == 1 && !e) {
									_();
								}
								return n;
							},
						};
						if (b) {
							b(n, e_currentTarget);
						}
					}}
					ref={ref}
				>
					<div className={S.ShareIcon}>
						<o.Download />
					</div>
					{!E && (
						<div className={S.Label}>
							{Localize("#TimelineDialog_ShareSave")}
						</div>
					)}
				</c.$n>
			</u.he>
		);
	} else {
		return null;
	}
});
function F() {
	const e = aO();
	const t = q3(() =>
		e.GetHidePlayer() ? e.GetLiveEdgeMS() : e.GetGlobalMSPlaytime(),
	);
	const r = q3(() => e.BIsVideoElementPaused());
	const i = q3(() => e.GetPreviousHighlightEntry());
	const s = q3(() => e.GetNextHighlightEntry());
	const o =
		i &&
		i.timelineState === "loaded" &&
		!i.entry &&
		s &&
		s.timelineState === "loaded" &&
		!s.entry;
	const c = r ? 10 : g.Xq;
	const A = !i?.entry || t.valMS - i.globalMS.valMS < c;
	const p = !s?.entry || s?.globalMS.valMS < t.valMS;
	if (o) {
		return null;
	} else {
		return (
			<div className={D.SkipperCtn}>
				<u.he
					toolTipContent={Localize("#HighlightSkipper_JumpToPrevious")}
					direction="top"
				>
					<N.fu
						className={A_1(D.ArrowButton, A && D.Disabled)}
						onClick={() => {
							e.SetPlaytimeFromGlobalMS(i.globalMS);
							e.FocusGlobalMS(i.globalMS);
							e.SetDisplayHighlightEntry(i.entry);
						}}
						disabled={A}
						noFocusRing
					>
						<l.DF direction="right" />
					</N.fu>
				</u.he>
				<u.he
					toolTipContent={Localize("#HighlightSkipper_JumpToNext")}
					direction="top"
				>
					<N.fu
						className={A_1(D.ArrowButton, D.ArrowButtonRight, p && D.Disabled)}
						onClick={() => {
							e.SetPlaytimeFromGlobalMS(s.globalMS);
							e.FocusGlobalMS(s.globalMS);
							e.SetDisplayHighlightEntry(s.entry);
						}}
						disabled={p}
						noFocusRing
					>
						<l.DF direction="left" />
					</N.fu>
				</u.he>
			</div>
		);
	}
}
const U =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAAA3CAIAAAAAHlGVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LjE0NjI4OTk3NzcsIDIwMjMvMDYvMjUtMjM6NTc6MTQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS4zIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2N0M0MzI4QTJGMjMxMUVGQTQ1RkY2M0Y3NTJEMjI2NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2N0M0MzI4QjJGMjMxMUVGQTQ1RkY2M0Y3NTJEMjI2NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY3QzQzMjg4MkYyMzExRUZBNDVGRjYzRjc1MkQyMjY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY3QzQzMjg5MkYyMzExRUZBNDVGRjYzRjc1MkQyMjY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+tZ9m+gAAHzJJREFUeNrs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";
const W = "--:--";
function V(e) {
	let { refFullscreen, shortcuts } = e;
	const i = aO();
	const s = i.GetGameRecordingVideo();
	const o = Pm();
	const c = j(s) != "uninitialized";
	const u = i.GetRecordingMode() === "Overlay";
	const A = q3(() => i.ShouldModeShowClipControls());
	const C = q3(() => i.GetHidePlayer());
	const b = u && C;
	const y = q3(() => i.GetControlsVisible());
	const S = i.GetGamepadMode();
	const WRef = useRef(null);
	const v = !!i.GetClipID();
	const M = r6();
	const T = qm();
	const R = o
		? {
				[G.pR.CANCEL]: Localize("#MediaManager_FloatingControls_Cancel"),
				[G.pR.OPTIONS]: null,
			}
		: undefined;
	const k = n.useCallback(
		(e) =>
			e.detail.button == G.pR.OPTIONS && !!o && (e.stopPropagation(), true),
		[o],
	);
	if (y === false && !o) {
		return <Ue />;
	}
	const D = o && !S && u;
	return (
		<x.fX
			name="clipping"
			stops={[
				{
					id: "tools",
					title: Localize("#ClippingTour_Tools_Title"),
					content: [
						Localize("#ClippingTour_Tools_Content_1"),
						<img
							key="img"
							style={{
								width: "306px",
								height: "55px",
								maxWidth: "100%",
							}}
							src={U}
						/>,
						LocalizeReact(
							"#ClippingTour_Tools_Content_2",
							<l.iU
								style={{
									width: "16px",
									height: "16px",
								}}
							/>,
						),
					],
				},
				{
					id: "share",
					title: Localize("#ClippingTour_Share_Title"),
					content: [
						Localize("#ClippingTour_Share_Content_1"),
						Localize("#ClippingTour_Share_Content_2"),
					],
				},
			]}
			active={D}
		>
			<_.Z
				ref={WRef}
				className={A_1(p.PlaybackControls, u && p.Overlay)}
				flow-children="row"
				actionDescriptionMap={R}
				onKeyDown={(e) => {
					if (e.key == "Escape") {
						if (o) {
							T();
						} else {
							if (
								!refFullscreen?.current ||
								!BElementFullscreen(refFullscreen.current)
							) {
								return;
							}
							CancelFullscreen(refFullscreen.current);
						}
						e.preventDefault();
						e.stopPropagation();
					}
				}}
				onButtonDown={k}
				retainFocus
			>
				<div className={p.LeftControls}>
					<Ce_1 shortcutName={shortcuts?.addMarker} />
					<F />
					<Te player={s} visible={false} />
					<$ visible={!o && S} gameid={i.GetGameID()} />
					<Ee
						refFullscreen={refFullscreen}
						visible={refFullscreen && !b && !S}
					/>
					<J player={s} visible={c} refControlsHover={WRef} />
				</div>
				<div className={p.PlaybackControlsCtn}>
					<Q playbackCoordinator={i} />
				</div>
				<div className={p.RightControls}>
					{!M && A && (
						<x.dD
							tour="clipping"
							name="tools"
							options={{
								position: "below",
								offset: 48,
							}}
						>
							<div className={p.ClipControlsCtn}>
								<Ae_1 visible={o && !C} />
								<Ne visible={o && !C} />
								<Ie visible={o && !C} />
								<Se visible={o && !C} />
							</div>
						</x.dD>
					)}
					<div className={A_1(p.RightButtons, "RightButtons")}>
						<Ge visible={M} />
						<I visible={A && o && !C && !S} />
						<x.dD
							tour="clipping"
							name="share"
							options={{
								position: "right",
								offset: 32,
							}}
						>
							<E visible={A && o && !C} />
						</x.dD>
						<Ae />
						<Re visible={A && (!o || C)} />
						<Pe visible={A && v && !o} />
					</div>
				</div>
			</_.Z>
		</x.fX>
	);
}
function H(e) {
	let { recordingShortcut } = e;
	const r = Pm();
	return (
		<div className={p.PlayTimeRow}>
			<Oe clipMode={r} recordingShortcutName={recordingShortcut} />
		</div>
	);
}
function j(e) {
	return q3(() =>
		e.IsInitialized() ? (e.IsPaused() ? "paused" : "playing") : "uninitialized",
	);
}
function q() {
	const [e, setE] = n.useState(false);
	const RRef = n.useRef(null);
	const IRef = n.useRef();
	const ARef = n.useRef("hide");
	const SRef = n.useRef(false);
	const o = aO();
	let l = n.useCallback(
		(e) => {
			ARef.current = e;
			if (RRef.current) {
				clearTimeout(RRef.current);
				RRef.current = undefined;
			}
			if (SRef.current || e == "overControls") {
				setE(true);
			} else if (e == "overContainer") {
				setE(true);
				RRef.current = window.setTimeout(() => setE(false), 5000);
			} else if (e == "hide") {
				RRef.current = window.setTimeout(() => setE(false), 800);
			}
		},
		[RRef, ARef, setE],
	);
	n.useEffect(() => {
		let e = fm(() => {
			let e = o.GetGameRecordingVideo().IsPaused();
			if (e != SRef.current) {
				SRef.current = e;
				l(ARef.current);
			}
		});
		return () => e();
	}, [l, SRef, o]);
	n.useEffect(() => () => clearTimeout(RRef.current), []);
	let c = n.useCallback(
		(e) => {
			if (
				IRef.current &&
				IsHTMLElement(e.target) &&
				BIsParentOrSelf(IRef.current, e.target)
			) {
				l("overControls");
			} else {
				l("overContainer");
			}
		},
		[l, IRef],
	);
	return [
		e,
		{
			enter: c,
			leave: n.useCallback(() => {
				l("hide");
			}, [l]),
			move: c,
		},
		IRef,
	];
}
function Q(e) {
	const { playbackCoordinator } = e;
	const r = playbackCoordinator.GetGameRecordingVideo();
	const i = j(r);
	return (
		<_.Z className={p.FlexRow} flow-children="row">
			<K
				playbackCoordinator={playbackCoordinator}
				direction="back"
				playerState={i}
			/>
			<X
				playbackCoordinator={playbackCoordinator}
				direction="back"
				playerState={i}
			/>
			<Y player={r} playerState={i} />
			<X
				playbackCoordinator={playbackCoordinator}
				direction="forward"
				playerState={i}
			/>
			<K
				playbackCoordinator={playbackCoordinator}
				direction="forward"
				playerState={i}
			/>
		</_.Z>
	);
}
function Z(e) {
	let { tooltip, onActivate, size, style, children, enabled, className, ...m } =
		e;
	if (enabled !== false) {
		enabled = true;
	}
	let d = A_1(
		p.PlaybackButton,
		enabled && p.Enabled,
		size == "playbutton" && p.PlayButton,
		size == "small" && p.Small,
		style == "clipmode" && p.ClipMode,
		style == "lessbright" && p.LessBright,
	);
	onActivate = enabled ? onActivate : null;
	tooltip = enabled ? tooltip : undefined;
	return (
		<u.he toolTipContent={tooltip} direction="top">
			<_.Z
				className={A_1(d, className)}
				onActivate={onActivate}
				noFocusRing
				{...m}
			>
				{children}
			</_.Z>
		</u.he>
	);
}
function Y(e) {
	const { player, playerState, style, ...a } = e;
	const s = aO();
	let o = useCallback(() => {
		const e = s.GetRecordingMode();
		if (s.GetHidePlayer() && e === "Overlay") {
			const e = s.GetLiveEdgeMS();
			s.SetPlaytimeFromGlobalMS(e);
			s.FocusGlobalMS(e);
			return;
		}
		s.TogglePlayPause();
	}, [s]);
	let c = playerState == "paused" || playerState == "uninitialized";
	let m = Localize(c ? "#Playback_Play_Tooltip" : "#Playback_Pause_Tooltip");
	let u = c ? <l.ud /> : <l.E$ />;
	const A = {
		[G.pR.OK]: Localize(
			c
				? "#MediaManager_FloatingControls_Play"
				: "#MediaManager_FloatingControls_Pause",
		),
	};
	return (
		<Z
			onActivate={o}
			tooltip={m}
			size="playbutton"
			autoFocus
			noFocusRing
			actionDescriptionMap={A}
			{...a}
		>
			{u}
		</Z>
	);
}
function K(e) {
	const { playbackCoordinator, direction, playerState } = e;
	const a = direction == "back";
	const s = q3(() => playbackCoordinator.GetGlobalMSPlaytime());
	const o = q3(() => playbackCoordinator.GetLiveEdgeMS());
	const c =
		playerState == "paused" && (a ? s.valMS > 0 : s.valMS < o.valMS - 1);
	let u = 100;
	if (a) {
		u = 0 - u;
	}
	const A = useCallback(() => {
		if (c) {
			playbackCoordinator.SeekDeltaMS(u);
		}
	}, [c, u, playbackCoordinator]);
	const g = a ? "#Playback_PrevFrame_Tooltip" : "#Playback_NextFrame_Tooltip";
	const h = a ? <l.YT /> : <l.ex />;
	const C = de(A, c);
	return (
		<Z
			className={p.FrameStepButton}
			{...C}
			tooltip={Localize(g)}
			size="small"
			enabled={c}
		>
			{h}
		</Z>
	);
}
function X(e) {
	const { playbackCoordinator, direction, playerState } = e;
	const a = direction == "back";
	const s = q3(() => playbackCoordinator.GetGlobalMSPlaytime());
	const o = q3(() => playbackCoordinator.GetLiveEdgeMS());
	const c = a ? s.valMS > 0 : s.valMS < o.valMS - 1;
	let u = 10000;
	if (a) {
		u = 0 - u;
	}
	const A = useCallback(() => {
		if (c) {
			if (
				direction == "back" &&
				playbackCoordinator.GetHidePlayer() &&
				playbackCoordinator.GetRecordingMode() === "Overlay"
			) {
				playbackCoordinator.SetHidePlayer(false);
				const e = playbackCoordinator.GetLiveEdgeMS();
				playbackCoordinator.SetPlaytimeFromGlobalMS(Sb(e.valMS - u));
				playbackCoordinator.FocusGlobalMS(e);
				return;
			}
			playbackCoordinator.SeekDeltaMS(u);
		}
	}, [direction, u, playbackCoordinator, c]);
	const g = a ? "#Playback_JumpBack_Tooltip" : "#Playback_JumpForward_Tooltip";
	const h = direction == "back" ? <l.jh /> : <l.v8 />;
	const C = de(A, c);
	return (
		<Z {...C} className={p.JumpSecondsButton} tooltip={Localize(g)} enabled={c}>
			{h}
		</Z>
	);
}
function J(e) {
	const { player, visible, refControlsHover } = e;
	const a = uI();
	const s = q3(() => player.GetMuted());
	const l = q3(() => player.GetVolume());
	let [u, setU] = useState(false);
	let g = useCallback(() => {
		setU(true);
	}, [setU]);
	ML(refControlsHover, "mouseleave", (e) => {
		if (e.target == e.currentTarget) {
			setU(false);
		}
	});
	if (!visible || a) {
		return null;
	}
	let h;
	h =
		s || l === 0 ? (
			<o.VolumeMuted />
		) : l < 0.3 ? (
			<o.Volume30 />
		) : l < 0.6 ? (
			<o.Volume60 />
		) : (
			<o.Volume100 />
		);
	return (
		<div className={p.VolumeControls} onMouseEnter={g}>
			<Z
				style="lessbright"
				size="small"
				onActivate={() => player.SetMute(!s, true)}
				tooltip={Localize("#Playback_ToggleMute_Tooltip")}
			>
				{h}
			</Z>
			{u && (
				<div className={p.VolumeSlider}>
					<c.A0
						min={0}
						max={1}
						value={s ? 0 : l}
						step={0.01}
						onChange={(e) => {
							player.SetVolume(e);
						}}
						dpadStep={0.1}
					/>
				</div>
			)}
		</div>
	);
}
function $(e) {
	const { visible, gameid } = e;
	const { onNavigateToMedia } = f_1();
	if (visible && onNavigateToMedia) {
		return (
			<Z
				onActivate={() => onNavigateToMedia(gameid, "clip")}
				style="lessbright"
				size="small"
				className={p.ViewRecordings}
				tooltip={Localize("#Playback_ViewRecordings_Tooltip")}
			>
				<l.ai />
			</Z>
		);
	} else {
		return null;
	}
}
function Ee(e) {
	const { refFullscreen, visible } = e;
	let i = rf(refFullscreen);
	let a = n.useCallback(() => {
		if (refFullscreen.current) {
			ToggleFullscreen(refFullscreen.current);
		}
	}, [refFullscreen]);
	if (!visible) {
		return null;
	}
	let s = i ? <o.Expand /> : <l.mc />;
	return (
		<Z
			style="lessbright"
			size="small"
			className={p.FullscreenButton}
			onActivate={a}
			tooltip={Localize("#Playback_FullScreen_Tooltip")}
		>
			{s}
		</Z>
	);
}
function Te(e) {
	const { player, visible } = e;
	const i = q3(() => player.GetPlaybackSpeed());
	const a = hf();
	const s = n.useMemo(
		() => [
			{
				data: 0.25,
				label: "0.25x",
			},
			{
				data: 0.5,
				label: "0.5x",
			},
			{
				data: 1,
				label: "1x",
			},
			{
				data: 1.5,
				label: "1.5x",
			},
			{
				data: 2,
				label: "2x",
			},
			{
				data: 4,
				label: "4x",
			},
			{
				data: 8,
				label: "8x",
			},
		],
		[],
	);
	if (visible) {
		return (
			<u.he
				toolTipContent={Localize("#Playback_Speed_Tooltip")}
				direction="top"
			>
				<c.pU
					strClassName={p.SpeedDrop}
					rgOptions={s}
					selectedOption={i}
					onChange={(e) => player.SetPlaybackSpeed(e.data)}
					tooltip={a ? Localize("#Playback_Speed_Tooltip") : null}
					contextMenuPositionOptions={{
						bMatchWidth: false,
					}}
				/>
			</u.he>
		);
	} else {
		return null;
	}
}
function Re(e) {
	let { visible } = e;
	const r = dK();
	const i = aO();
	const s = q3(() => i.GetHidePlayer());
	const o = q3(() => i.GetRecordingMode() === "Overlay");
	const A = r6();
	const h = uI();
	if (!visible) {
		return null;
	}
	let C;
	C = A
		? Localize("#RecordingState_Clip_LowDiskSpace")
		: s && o
			? Localize("#Playback_UserSelectionControls_ClipLatest")
			: Localize("#Playback_UserSelectionControls_SetClipStart");
	return (
		<u.he toolTipContent={C} direction="top">
			<x.dD
				tour="recording_timeline"
				name="clipping"
				options={{
					position: "right",
					offset: 30,
				}}
			>
				<c.$n
					className={A_1(p.CreateClipButton)}
					onClick={() => {
						i.SetHidePlayer(false);
						if (s && o) {
							let e = i.GetLiveEdgeMS();
							r(i, 1, undefined, e);
							i.SetPlaytimeFromGlobalMS(e);
							i.FocusGlobalMS(e);
							return;
						}
						let e = i.GetGlobalMSPlaytime();
						r(i, 1, e, undefined);
						i.FocusGlobalMS(e);
					}}
					disabled={A}
				>
					<div className={p.ClipIcon}>
						<l.Wd />
					</div>
					{!h && (
						<div className={p.Label}>{Localize("#TimelineDialog_Clip")}</div>
					)}
				</c.$n>
			</x.dD>
		</u.he>
	);
}
function Ne(e) {
	let { visible } = e;
	const r = dK();
	const i = aO();
	const a = q3(() => i.GetHidePlayer());
	const s = q3(() => i.GetRecordingMode() === "Overlay");
	return (
		<Z
			enabled={visible}
			style="clipmode"
			onActivate={() => {
				i.SetHidePlayer(false);
				let e = i.GetGlobalMSPlaytime();
				if (a && s) {
					e = i.GetLiveEdgeMS();
					r(i, 3, undefined, e);
				} else {
					r(i, 3, e, undefined);
				}
			}}
			tooltip={Localize("#Playback_UserSelectionControls_SetClipStart")}
		>
			<l.Nm direction="left" />
		</Z>
	);
}
function Ie(e) {
	let { visible } = e;
	const r = aO();
	const i = dK();
	return (
		<Z
			style="clipmode"
			onActivate={() => {
				const e = r.GetGlobalMSPlaytime();
				i(r, 3, undefined, e);
			}}
			tooltip={Localize("#Playback_UserSelectionControls_SetClipEnd")}
			enabled={visible}
		>
			<l.Nm direction="right" />
		</Z>
	);
}
function Ae_1(e) {
	let { visible } = e;
	const r = aO();
	const i = _Z();
	return (
		<Z
			style="clipmode"
			onActivate={() => {
				r.SetPlaytimeFromGlobalMS(i.nGlobalStartMS);
				r.FocusGlobalMS(i.nGlobalStartMS);
				r.SetPlaybackStop(i.nGlobalEndMS);
				r.GetGameRecordingVideo().Play();
			}}
			tooltip={Localize("#TimelineContext_JumpToStart")}
			enabled={visible}
		>
			<l.Uq />
		</Z>
	);
}
function Se(e) {
	let { visible } = e;
	const r = eb();
	const i = uq();
	const a = VM();
	n.useEffect(() => {
		if (!visible) {
			i();
		}
	}, [i, visible]);
	let s =
		a == 0
			? Localize("#TimelineContext_Zoom")
			: Localize("#TimelineContext_ZoomOut");
	return (
		<Z
			style="clipmode"
			onActivate={a == 0 ? r : i}
			tooltip={s}
			enabled={visible}
		>
			{a == 0 ? <l.iU /> : <l.en />}
		</Z>
	);
}
function Oe(e) {
	const { clipMode, recordingShortcutName } = e;
	if (clipMode) {
		return <Me />;
	} else {
		return <Le recordingShortcutName={recordingShortcutName} />;
	}
}
function Le(e) {
	const { recordingShortcutName } = e;
	const r = aO();
	const i = q3(() => r.GetGlobalPlaytimeSec());
	const s = j(r.GetGameRecordingVideo());
	const o = q3(() => r.GetHidePlayer());
	const c = q3(() => r.GetRecordingState());
	const A = ((e, t, r) => {
		const i = q3(() => t.GetRecordingMode() === "Overlay");
		if (!i) {
			return null;
		}
		let a;
		let s = "";
		switch (e) {
			default:
			case k.KB.NotRunning: {
				return null;
			}
			case k.KB.NotRecording: {
				a = <l.tw style={e} className={p.RecordingIcon} />;
				s = Localize("#RecordingState_ManualRecOff");
				break;
			}
			case k.KB.ManualRecording: {
				a = <l.tw style={e} className={p.RecordingIcon} />;
				s = Localize("#RecordingState_ManualRecOn");
				break;
			}
			case k.KB.BackgroundRecording: {
				a = <l.tw style={e} className={p.RecordingIcon} />;
				s = Localize("#RecordingState_BackgroundRec_Tooltip");
				break;
			}
			case k.KB.ForeverRecording: {
				a = <l.tw style={e} className={p.RecordingIcon} />;
				s = Localize("#RecordingState_ForeverRec_Tooltip");
			}
		}
		return {
			elIcon: a,
			strTooltip: s,
		};
	})(c, r);
	const h = o ? r.GetLiveEdgeMS().valMS : i * 1000;
	const C = r.ConvertGlobalOffsetToTimelineRelativeOffset(h);
	const f = r.GetTimelineDuration(C.strTimelineID);
	const b = r.GetIsActiveTimeline(C.strTimelineID);
	const y = Math.max(C.nTimelineOffsetMS.valMS, 0);
	let S = s != "playing" && b;
	bB({
		msInterval: 1000,
		bEnabled: S,
	});
	let w = "";
	if (b) {
		let e = r.GetLoader().GetRunningTimelineDurationMS(C.strTimelineID);
		w = (0, qZ)(Math.floor(e / 1000), false);
	} else {
		w = isNaN(f) ? W : (0, qZ)(Math.floor(f / 1000), false);
	}
	let B = W;
	if (s != "uninitialized" && C && !isNaN(C.nTimelineOffsetMS.valMS)) {
		B = (0, qZ)(y / 1000, false);
	}
	return (
		<div className={p.TimeBar}>
			<span>{B}</span>
			<span className={p.TimeDash}>/</span>
			<u.m9
				toolTipContent={A?.strTooltip ? A.strTooltip : null}
				direction="top"
			>
				<_.Z
					className={A_1(
						p.TimeRecordingButton,
						p[c],
						!A && p.DisableRecordingButton,
					)}
				>
					<span className={p.TimeTotal}>{w}</span>
					<span className={A_1(p.RecordButtonContainer, p[c])}>
						{A?.elIcon}
					</span>
				</_.Z>
			</u.m9>
		</div>
	);
}
function Ce_1(e) {
	const { shortcutName } = e;
	const r = aO();
	const i = r.GetRecordingMode() === "Overlay";
	const s = C.TS.IN_CLIENT;
	const o = q3(() => r.CanModeAddMarker());
	const c = s && o;
	const A = j(r.GetGameRecordingVideo());
	const h = q3(() => r.GetHidePlayer());
	const f = A === "uninitialized" || h;
	const { onMarkerCreated } = f_1();
	const S = uI();
	const w = n.useCallback(
		(e) => {
			if (!c) {
				return;
			}
			let t;
			if (f && i && h) {
				const e = r.GetTotalMS().valMS - 1;
				t = Sb(e);
			} else {
				t = r.GetGlobalMSPlaytime();
			}
			r.AddUserMarkerAtGlobalMS(
				t,
				"/GameRecording/AddMarker/PlaybackControls",
				(t, r) => {
					if (onMarkerCreated) {
						onMarkerCreated(t, r, e);
					}
				},
			);
			if (!f) {
				r.SetPlaytimeFromGlobalMS(t);
				r.FocusGlobalMS(t);
			}
		},
		[c, i, f, h, r, onMarkerCreated],
	);
	return (
		<u.m9
			bDisabled={!c}
			toolTipContent={
				<div className={p.AddMarkerTooltip}>
					<span>
						{" "}
						{Localize(
							f
								? "#Playback_UserSelectionControls_AddUserMarkerLiveEdge"
								: "#Playback_UserSelectionControls_AddUserMarker",
						)}{" "}
					</span>
					{shortcutName && !S && (
						<span className={p.Shortcut}> {shortcutName} </span>
					)}
				</div>
			}
			direction="top"
		>
			<_.Z
				className={A_1(p.AddMarkerCtn, !c && p.DisableMarker)}
				onActivate={w}
				noFocusRing
				focusable={c}
			>
				{c && <l.pH className={p.AddMarkerIcon} />}
			</_.Z>
		</u.m9>
	);
}
function Me() {
	const e = aO();
	const t = q3(() => e.GetGlobalMSPlaytime());
	const { nGlobalEndMS, nGlobalStartMS } = _Z();
	const s = (t.valMS - nGlobalStartMS.valMS) / 1000;
	const o = (nGlobalEndMS.valMS - nGlobalStartMS.valMS) / 1000;
	const l =
		Math.round(s) > Math.round(o) || t.valMS < nGlobalStartMS.valMS
			? W
			: (0, qZ)(s, false);
	const c = (0, qZ)(o, false);
	return (
		<div className={A_1(p.TimeBar, p.RangeSelection)}>{`${l} / ${c}`}</div>
	);
}
function Ue(e) {
	const t = aO().GetGameRecordingVideo();
	const r = j(t);
	return <Y player={t} playerState={r} noFocusRing />;
}
function de(e, t) {
	const RRef = n.useRef(0);
	let i = n.useCallback(
		(t) => {
			if (RRef.current != 0) {
				e(undefined);
			}
		},
		[e],
	);
	let a = n.useCallback(() => {
		if (!(RRef.current++ < 1)) {
			e(undefined);
		}
	}, [e]);
	const { fnRestartTimer, fnStopTimer } = L$(250, a, false, true);
	n.useEffect(() => {
		if (!t) {
			fnStopTimer();
		}
	}, [t, fnStopTimer]);
	return {
		onActivate: i,
		onButtonDown: n.useCallback(
			(t) => {
				if (t.detail.button == G.pR.OK) {
					RRef.current = 0;
					e(undefined);
					fnRestartTimer();
					t.preventDefault();
					t.stopPropagation();
				}
			},
			[e, fnRestartTimer],
		),
		onButtonUp: n.useCallback(
			(e) => {
				if (e.detail.button == G.pR.OK) {
					fnStopTimer();
					e.preventDefault();
					e.stopPropagation();
				}
			},
			[fnStopTimer],
		),
		onMouseDown: n.useCallback(
			(t) => {
				if (t.button == 0) {
					RRef.current = 0;
					e(undefined);
					fnRestartTimer();
					t.preventDefault();
					t.stopPropagation();
				}
			},
			[e, fnRestartTimer],
		),
		onMouseUp: n.useCallback(
			(e) => {
				if (e.button == 0) {
					fnStopTimer();
				}
			},
			[fnStopTimer],
		),
		onMouseLeave: n.useCallback(
			(e) => {
				fnStopTimer();
			},
			[fnStopTimer],
		),
	};
}
function Ae(e) {
	const t = aO();
	const { elRecordingDialog, showDeleteRecordingDialog } = ((e) => {
		const t = W6();
		const [r, n, i] = M({
			bCloseOnOK: true,
			onOK: async () => {
				t.goBack();
				f5([e]);
			},
			strTitle: Localize("#DeleteRecording_Title"),
			strDescription: Localize("#DeleteRecording_Description"),
		});
		return {
			elRecordingDialog: r,
			showDeleteRecordingDialog: n,
		};
	})(t.GetGameID());
	const { elClipDialog, showDeleteClipDialog } = ((e) => {
		const { fnDeleteClip } = Gb();
		const r = W6();
		const [n, i, a] = M({
			bCloseOnOK: true,
			onOK: async () => {
				r.goBack();
				await fnDeleteClip(e);
			},
			strTitle: Localize("#DeleteClip_Title"),
			strDescription: Localize("#DeleteClip_Description", e),
		});
		return {
			elClipDialog: n,
			showDeleteClipDialog: i,
		};
	})(t.GetClipID());
	const m = t.GetClipID() ? showDeleteClipDialog : showDeleteRecordingDialog;
	const A = Pm();
	if (t.GetClipID()) {
		if (t.GetGamepadMode() || A) {
			return null;
		} else {
			return (
				<>
					{elRecordingDialog}
					{elClipDialog}
					<u.he
						toolTipContent={Localize("#Clip_Delete_Tooltip")}
						direction="top"
					>
						<c.$n className={A_1(p.DeleteButton, p.MoreSpecific)} onClick={m}>
							<o.Trash />
						</c.$n>
					</u.he>
				</>
			);
		}
	} else {
		return null;
	}
}
const Pe = n.forwardRef((props, ref) => {
	const { visible } = props;
	const i = aO();
	const ARef = n.useRef();
	const s = z_1();
	const l = r6();
	const m = Ue(ARef, ref);
	const A = useCallback(
		(e) => {
			let t = i.GetClipID();
			if (!t || !s) {
				return;
			}
			let e_currentTarget = e.currentTarget;
			s(e3(t), e_currentTarget);
		},
		[i, s],
	);
	const h = uI();
	if (visible) {
		return (
			<u.he
				toolTipContent={
					l
						? "#RecordingState_Clip_LowDiskSpace"
						: "#Clip_Show_ShareSheet_Tooltip"
				}
				direction="top"
			>
				<c.$n className={p.ShareButton} onClick={A} ref={m} disabled={l}>
					<o.Share />
					{!h && <div className={p.Label}>{Localize("#ExportClip_Share")}</div>}
				</c.$n>
			</u.he>
		);
	} else {
		return null;
	}
});
function Ge(e) {
	const { onNavigateToGRSettings } = f_1();
	const r = uI();
	if (e.visible) {
		return (
			<u.he
				toolTipContent={Localize("#RecordingState_LowDiskSpace_CTA")}
				direction="top"
			>
				<c.$n
					className={A_1(p.LowDiskSpaceButton)}
					onClick={onNavigateToGRSettings}
				>
					<div className={p.LowDiskSpaceIcon}>
						<o.SteamdeckUpdate />
					</div>
					{!r && <div>{Localize("#RecordingState_LowDiskSpace_CTA")}</div>}
				</c.$n>
			</u.he>
		);
	} else {
		return null;
	}
}
const Ce =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAAA4CAIAAADxSONAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LjE0NjI4OTk3NzcsIDIwMjMvMDYvMjUtMjM6NTc6MTQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS4zIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RUVGNjU0MDJGMjMxMUVGOEU0M0U5NDU1Qjg2RUZGNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RUVGNjU0MTJGMjMxMUVGOEU0M0U5NDU1Qjg2RUZGNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZFRUY2NTNFMkYyMzExRUY4RTQzRTk0NTVCODZFRkY0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZFRUY2NTNGMkYyMzExRUY4RTQzRTk0NTVCODZFRkY0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oStb0gAAES1JREFUeNrs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";
export function D8(e) {
	let {
		loader,
		clipSummaries,
		refFullscreen,
		shortcuts,
		refTimelineParentCtn,
	} = e;
	const u = Qn();
	const A = aO().GetRecordingMode() === "Overlay";
	const p = !u && A;
	const { ref, breakpoint } = (() => {
		const [e, setE] = useState("Large");
		const r = wY(
			useCallback((e) => {
				const r = e.contentRect.width;
				setE(
					[
						["Tiny", 350],
						["Small", 440],
						["Medium", 700],
						["Large", Infinity],
					].find(([e, t]) => r <= t)[0],
				);
			}, []),
		);
		return {
			ref: r,
			breakpoint: e,
		};
	})();
	return (
		<div
			className={A_1(i.TimelineAndControls, "TimelineAndControls", breakpoint)}
			ref={ref}
		>
			<x.fX
				name="recording_timeline"
				stops={[
					{
						id: "timeline",
						title: Localize("#RecordingTour_Timeline_Title"),
						content: [
							Localize("#RecordingTour_Timeline_Content_1"),
							<img
								key="img"
								style={{
									width: "306px",
									height: "56px",
									maxWidth: "100%",
								}}
								src={Ce}
							/>,
							LocalizeReact(
								"#RecordingTour_Timeline_Content_2",
								<l.pH
									style={{
										width: "16px",
										height: "16px",
									}}
								/>,
							),
						],
					},
					{
						id: "clipping",
						title: Localize("#RecordingTour_Clipping_Title"),
						content: [
							LocalizeReact(
								"#RecordingTour_Clipping_Content_1",
								<l.Wd
									style={{
										width: "16px",
										height: "16px",
									}}
								/>,
							),
							LocalizeInlineReactWithFallback(
								"#RecordingTour_Clipping_Content_2",
								<span className={i.TourYellowUnderline} />,
							),
						],
					},
				]}
				active={p}
			>
				<s.h
					loader={loader}
					clipSummaries={clipSummaries}
					refTimelineParentCtn={refTimelineParentCtn}
				/>
				<V refFullscreen={refFullscreen} shortcuts={shortcuts} />
				<H recordingShortcut={shortcuts?.toggleRecording} />
			</x.fX>
		</div>
	);
}
export function Sd(e) {
	let { ...t } = e;
	let [r, s, o] = q();
	let LRef = useRef();
	let CRef = useRef();
	let [m, d] = (() => {
		let [e, setE] = useState(false);
		let RRef = useRef();
		let i = useCallback(
			(e) => {
				if (RRef.current) {
					setE(BElementFullscreen(RRef.current));
				}
			},
			[RRef, setE],
		);
		let a = xA("fullscreenchange", i);
		let s = Ue(RRef, a);
		return [e, s];
	})();
	let A = Ue(LRef, d);
	let p = Ue(o, CRef);
	const { rootModalManager, refModalManager, refContextMenuManger } = ((
		e,
		t,
	) => {
		const RRef = useRef();
		const i = yk();
		const ARef = useRef();
		const s = h();
		n.useEffect(() => {
			if (!e || !t.current || !t.current || !ARef.current) {
				return;
			}
			const r = t.current.ownerDocument.defaultView;
			fe.XX.SetMenuManager(r, s);
		}, [e, t, s]);
		n.useEffect(() => {
			if (!e || !t.current || !t.current || !RRef.current) {
				return;
			}
			const n = t.current.ownerDocument.defaultView;
			return ye.BR.RegisterModalManager(RRef.current, n);
		}, [e, t]);
		return {
			rootModalManager: i,
			refModalManager: RRef,
			refContextMenuManger: ARef,
		};
	})(m, LRef);
	return (
		<u.ep targetElement={LRef.current}>
			<div
				ref={A}
				className={i.PlayerAndTimeline}
				onMouseEnter={s.enter}
				onMouseLeave={s.leave}
				onMouseMove={s.move}
			>
				<_e.EO
					bCenterPopupsOnWindow={rootModalManager?.BCenterPopupsOnWindow()}
					browserInfo={rootModalManager?.GetBrowserInfo()}
					refModalManager={refModalManager}
					refContextMenuManager={refContextMenuManger}
					bRegisterManagersWithWindow={false}
				>
					<div className={i.VideoPlayerContainer}>
						<he.J refFullscreen={LRef} />
					</div>
					<div
						ref={p}
						className={A_1(
							i.TimelineContainer,
							m && i.Fullscreen,
							r && i.Visible,
						)}
					>
						<D8 {...t} refFullscreen={LRef} refTimelineParentCtn={CRef} />
					</div>
				</_e.EO>
			</div>
		</u.ep>
	);
}
export function Bo(e) {
	let { fnOnContentWidth, ...r } = e;
	let [s, o, l] = q();
	const [c, setC] = useState(24);
	const d = Pm();
	const A = aO();
	const { onGamepadButtonDown, onGamepadButtonUp } = (() => {
		const e = aO();
		const TRef = n.useRef(false);
		const RRef = n.useRef(0);
		const i = Pm();
		const a = qm();
		let s = n.useCallback(() => {
			let n = 60000;
			if (RRef.current == 0) {
				n = 500;
			} else if (RRef.current == 1) {
				n = 0;
			} else if (RRef.current <= 13) {
				n = 5000;
			} else if (RRef.current <= 25) {
				n = 30000;
			}
			if (!TRef.current) {
				n = 0 - n;
			}
			RRef.current++;
			e.SeekDeltaMS(n);
			e.FocusGlobalMS(Sb(e.GetGlobalMSPlaytime().valMS + n));
		}, [e]);
		const { fnRestartTimer, fnStopTimer } = L$(250, s, false, true);
		return {
			onGamepadButtonDown: n.useCallback(
				(e) => {
					if (
						e.detail.button == G.pR.TRIGGER_LEFT ||
						e.detail.button == G.pR.TRIGGER_RIGHT
					) {
						TRef.current = e.detail.button == G.pR.TRIGGER_RIGHT;
						RRef.current = 0;
						s();
						fnRestartTimer();
					} else if (e.detail.button == G.pR.CANCEL && i) {
						a();
						e.preventDefault();
						e.stopPropagation();
					}
				},
				[s, fnRestartTimer, i, a],
			),
			onGamepadButtonUp: n.useCallback(
				(e) => {
					if (
						e.detail.button == G.pR.TRIGGER_LEFT ||
						e.detail.button == G.pR.TRIGGER_RIGHT
					) {
						fnStopTimer();
					}
				},
				[fnStopTimer],
			),
		};
	})();
	const C = aO();
	const y = q3(() => A?.GetControlsVisible() || d);
	((e, t) => {
		let { onSetGamepadHeaderVisible } = f_1();
		useEffect(() => {
			if (onSetGamepadHeaderVisible) {
				onSetGamepadHeaderVisible(e && !t);
			}
		}, [onSetGamepadHeaderVisible, e, t]);
	})(y, d);
	const S = n.useCallback(
		(e) => {
			if (C?.GetGameRecordingVideo()?.BVideoElementWaiting()) {
				return;
			}
			const e_target = e.target;
			if (e_target.clientWidth > 480) {
				const e =
					(e_target.ownerDocument.defaultView.innerWidth -
						e_target.clientWidth) /
					2;
				setC(e);
			}
			fnOnContentWidth(e_target.clientWidth);
		},
		[fnOnContentWidth, C],
	);
	const w = wY(S);
	return (
		<_.Z
			className={i.PlayerAndTimeline}
			onMouseEnter={o.enter}
			onMouseLeave={o.leave}
			onMouseMove={o.move}
			onButtonDown={onGamepadButtonDown}
			onButtonUp={onGamepadButtonUp}
		>
			<div className={i.VideoPlayerContainer}>
				<he.J refVideoResize={w} />
			</div>
			<div ref={l} className={A_1(i.GamepadTimelineContainer, y && i.Visible)}>
				<D8 {...r} />
			</div>
			{d && <div className={A_1(i.GamepadTimelineContainerClipModeSpacer)} />}
		</_.Z>
	);
}
