import { Timestamp } from "../../actual_src/utils/time.js";
import { Localize } from "../../actual_src/utils/localization.js";
import n from "./90413.js";
import a, { useCallback, useState, useRef, useEffect } from "./63696.js";
import s from "./35488.js";
import o from "./69164.js";
import l from "./93092.js";
import c from "./81393.js";
import m, { L$ } from "./52451.js";
import u, { br } from "./18869.js";
import A from "./83247.js";
import { A as A_1 } from "./90765.js";
import g, { c5 } from "./91720.js";
import h, { V } from "./56997.js";
import _ from "./37322.js";
import f from "./23038.js";
import b from "./58254.js";
import y, { _R } from "./96593.js";
import S from "./91486.js";
const i = n;
const w = 350;
const B = 10000;
const v = parseInt(i.strHighlightFadeTime);
const I = parseInt(i.nPlaceholderWidth);
const E = parseInt(i.nPlaceholderHeight);
const M = parseInt(i.nThumbnailFixedHeight);
export function $d(e) {
	let { clip, nonFixedSize } = e;
	let t_clip_id = clip.clip_id;
	let [s, m] = R();
	let d = br();
	let A = {
		aspectRatio: (clip?.thumbnail_width ?? 16) / (clip?.thumbnail_height ?? 9),
	};
	let g = useCallback(() => {
		d.Media.Clip({
			state: {
				id: t_clip_id,
			},
		});
	}, [d, t_clip_id]);
	return (
		<o.Z
			style={A}
			className={A_1(i.PostGameSummaryClip, nonFixedSize && i.NonFixedSize)}
			noFocusRing={false}
			focusable
			onActivate={g}
			{...s}
		>
			<l.d className={i.ClipThumbnail} clipID={t_clip_id} />
			<c.z clipID={t_clip_id} playClip={m} />
			<div className={i.CornerContent}>
				<K msDuration={parseInt(clip.duration_ms)} />
			</div>
		</o.Z>
	);
}
function R() {
	const [e, setE] = useState(false);
	const { fnStopTimer, fnRestartTimer } = L$(w, () => setE(true), false);
	let i = a.useCallback(() => {
		fnRestartTimer();
	}, [fnRestartTimer]);
	let s = a.useCallback(() => {
		fnStopTimer();
		setE(false);
	}, [fnStopTimer, setE]);
	return [
		{
			onMouseEnter: i,
			onMouseLeave: s,
			onGamepadFocus: i,
			onGamepadBlur: s,
		},
		e,
	];
}
function K(e) {
	const { msDuration } = e;
	const r = msDuration && !isNaN(msDuration) ? Timestamp(msDuration) : "--";
	return (
		<div className={A_1(i.DurationText, i.Clip)}>
			<A.O5 />
			{r}
		</div>
	);
}
function D(e) {
	return e && e.m_Image && e.m_Image.m_Bytes !== "";
}
function N(e, t) {
	let r = t;
	for (t = (t + 1) % e.length; t != r && e[t].m_Image && !D(e[t]); ) {
		t = (t + 1) % e.length;
	}
	return t;
}
export function yX(e, t) {
	let [r, setR] = useState(null);
	let IRef = useRef([]);
	let SRef = useRef(false);
	let ORef = useRef(null);
	let LRef = useRef(undefined);
	let CRef = useRef(undefined);
	let m = useCallback(() => {
		let i_current = IRef.current;
		if (i_current.length == 0) {
			ORef.current = null;
			setR(null);
			return;
		}
		let t = i_current.findIndex((e) => e == ORef.current);
		if (t < 0) {
			t = i_current.length - 1;
		}
		t = N(i_current, t);
		ORef.current = i_current[t];
		if (ORef.current.m_Image !== undefined) {
			setR(ORef.current);
		}
	}, [IRef, setR, ORef]);
	let u = useCallback(() => {
		let i_current = IRef.current;
		if (SRef.current || i_current.length == 0) {
			return;
		}
		let t = i_current.findIndex((e) => e == ORef.current);
		if (t < 0) {
			return;
		}
		if (i_current[t].m_Image !== undefined) {
			t = N(i_current, t);
		}
		let r = IRef.current[t];
		if (r.m_Image !== undefined) {
			return;
		}
		let r_m_Event = r.m_Event;
		let l = parseInt(r_m_Event.timeline_offset_ms);
		SRef.current = true;
		c5(undefined, undefined, r_m_Event.timeline_id, [l * 1000], 512, true).then(
			(e) => {
				SRef.current = false;
				if (e.length > 0) {
					let [t] = e;
					r.m_Image = {
						m_Bytes: `data:image/jpeg;base64,${_.iI(t.image_data())}`,
						m_nWidth: t.width(),
						m_nHeight: t.height(),
					};
					if (ORef.current == r) {
						setR(r);
					}
				} else {
					r.m_Image = {
						m_Bytes: "",
						m_nWidth: 0,
						m_nHeight: 0,
					};
					if (ORef.current == r) {
						m();
					}
				}
				u();
			},
		);
	}, [SRef, ORef, IRef, m]);
	let d = useCallback(() => {
		m();
		u();
	}, [m, u]);
	useEffect(() => {
		if (CRef.current == e) {
			return;
		}
		CRef.current = e;
		IRef.current = ((e, t) => {
			let r = [];
			for (let n of t) {
				let t = e.find((e) => {
					let e_m_Event = e.m_Event;
					return (
						e_m_Event.timeline_id == n.timeline_id &&
						e_m_Event.timeline_offset_ms == n.timeline_offset_ms
					);
				});
				if (t) {
					t.m_Event = n;
				} else {
					t = {
						m_Event: n,
						m_Image: undefined,
					};
				}
				r.push(t);
			}
			return r;
		})(IRef.current, e);
		if (
			!ORef.current ||
			!ORef.current.m_Image ||
			!ORef.current.m_Image ||
			!!D(ORef.current) ||
			!ORef.current.m_Image ||
			!!D(ORef.current) ||
			!IRef.current.find((e) => e !== ORef.current)
		) {
			ORef.current = null;
			window.clearTimeout(LRef.current);
			LRef.current = undefined;
			d();
		}
	}, [e, IRef, d, LRef, CRef]);
	useEffect(() => {
		if (r && !t) {
			LRef.current = window.setTimeout(() => {
				d();
			}, B);
			return () => clearTimeout(LRef.current);
		}
	}, [r, d, LRef, t]);
	if (r && r.m_Image !== undefined) {
		return r;
	} else {
		return null;
	}
}
function G(e, t) {
	let RRef = useRef(null);
	if (e && !RRef.current) {
		let t = !D(e);
		let n = t ? I : e.m_Image.m_nWidth;
		let i = t ? E : e.m_Image.m_nHeight;
		RRef.current = {
			m_nWidth: n,
			m_nHeight: i,
		};
	}
	let n = {};
	if (!RRef.current) {
		return {
			style: n,
			smallMode: false,
		};
	}
	let i = RRef.current.m_nWidth / RRef.current.m_nHeight;
	let s = Math.ceil(M * i);
	if (t) {
		n.width = `${s}px`;
		n.height = `${M}px`;
	} else {
		n.aspectRatio = i;
	}
	return {
		style: n,
		smallMode: s < M,
	};
}
export function $B(e) {
	let { gameID, highlights, nonFixedSize } = e;
	let [s, l] = R();
	let c = yX(highlights, l);
	let m = ((e, t) => {
		let r = br();
		return useCallback(() => {
			if (!t) {
				r.Media.Recording({
					state: {
						gameid: e,
					},
				});
				return;
			}
			let n = {
				m_strTimelineID: t.m_Event.timeline_id,
				m_nTimelineStartMS: parseInt(t.m_Event.timeline_offset_ms),
			};
			r.Media.Recording({
				state: {
					gameid: e,
					playbackDefinition: n,
				},
			});
		}, [r, e, t]);
	})(gameID, c);
	let { style, smallMode } = G(c, !nonFixedSize);
	const GRef = a.useRef(null);
	if (!c) {
		return null;
	}
	let h = c.m_Event.timeline_id;
	let C = parseInt(c.m_Event.timeline_offset_ms);
	let _ = parseInt(c.m_Event.duration_ms);
	let y = `${h}_${C}`;
	let S = !D(c);
	let w = S ? "" : c.m_Image.m_Bytes;
	let B = {
		enter: i.Enter,
		enterActive: i.EnterActive,
		exit: i.Exit,
		exitActive: i.ExitActive,
		exitDone: i.ExitDone,
	};
	return (
		<f.A
			style={style}
			className={A_1(
				i.PostGameSummaryHighlightGroup,
				nonFixedSize && i.NonFixedSize,
			)}
			appear
			enter
			exit
		>
			<b.A nodeRef={GRef} key={y} classNames={B} in timeout={v}>
				<o.Z
					ref={GRef}
					className={i.PostGameSummaryHighlight}
					noFocusRing={false}
					focusable
					onActivate={m}
					{...s}
				>
					{S && <Z gameID={gameID} />}
					{!S && (
						<L
							gameID={gameID}
							timelineID={h}
							timestampMS={C}
							durationMS={_}
							play={l}
							thumbnail={w}
						/>
					)}
					<div className={i.CornerContent}>
						<P gameID={gameID} smallMode={smallMode} />
					</div>
				</o.Z>
			</b.A>
		</f.A>
	);
}
function P(e) {
	const { gameID, smallMode } = e;
	const n = V(gameID);
	if (!n) {
		return null;
	}
	const s = Math.floor(n / 60);
	const o = Math.floor(n % 60);
	const l = (
		<>
			{s > 0
				? (0, Localize)("#ClipManager_BackgroundRecordingTime_Min", s)
				: ""}
			{(0, Localize)("#ClipManager_BackgroundRecordingTime_Sec", o)}
		</>
	);
	return (
		<div className={A_1(i.DurationText, i.BackgroundRecording)}>
			<A.vN />
			{!smallMode && l}
		</div>
	);
}
function L(e) {
	let { gameID, timelineID, timestampMS, durationMS, play, thumbnail } = e;
	return (
		<>
			<img className={i.ClipThumbnail} src={thumbnail} />
			<c.G
				gameID={gameID}
				timelineID={timelineID}
				startMS={timestampMS}
				durationMS={durationMS}
				play={play}
			/>
		</>
	);
}
function Z(e) {
	let { gameID } = e;
	let r = _R(gameID);
	return (
		<div className={i.BackgroundPlaceholder}>
			<div className={i.BackgroundBlur}>
				<S.z
					eAssetType={3}
					className={i.ImageContainer}
					imageClassName={i.ImageObject}
					app={r}
				/>
			</div>
			<s.Video className={i.VideoIcon} />
		</div>
	);
}
export function Li(e) {
	let { gameID, highlights, nonFixedSize } = e;
	let s = yX(highlights, false);
	let l = br();
	let c = useCallback(() => {
		l.Media.Recording({
			state: {
				gameid: gameID,
			},
		});
	}, [l, gameID]);
	let { style, smallMode } = G(s, !nonFixedSize);
	if (!s) {
		return null;
	}
	let A = `${s.m_Event.timeline_id}_${parseInt(s.m_Event.timeline_offset_ms)}`;
	let g = {
		enter: i.Enter,
		enterActive: i.EnterActive,
		exit: i.Exit,
		exitActive: i.ExitActive,
		exitDone: i.ExitDone,
	};
	return (
		<f.A
			style={style}
			className={A_1(
				i.PostGameSummaryHighlightGroup,
				nonFixedSize && i.NonFixedSize,
			)}
			appear
			enter
			exit
		>
			<b.A key={A} classNames={g} in timeout={v}>
				<o.Z
					className={i.PostGameSummaryHighlight}
					noFocusRing={false}
					focusable
					onActivate={c}
				>
					<Z gameID={gameID} />
					<div className={i.CornerContent}>
						<P gameID={gameID} smallMode={smallMode} />
					</div>
				</o.Z>
			</b.A>
		</f.A>
	);
}
