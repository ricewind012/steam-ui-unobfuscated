var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./88750.js");
import { Localize } from "../../actual_src/utils/localization.js";
var s = require("./92374.js");
var o = require(/*webcrack:missing*/ "./31084.js");
var l = require("./29516.js");
var c = require("./65844.js");
var m = require(/*webcrack:missing*/ "./90095.js");
var u = require("./83247.js");
var d = require("./35488.js");
var A = require("./29443.js");
var p = require(/*webcrack:missing*/ "./90765.js");
var g = require("./661.js");
var h = require("./91720.js");
var C = require("./94361.js");
import { SortedFindLessOrEqual } from "../../actual_src/utils/arrayutils.js";
var f = require("./2773.js");
var b = require("./11072.js");
export function ww() {
	const e = (0, c.uR)();
	const t = (0, s.aO)();
	const r = (0, l.dK)();
	const i = (0, m.q3)(() => !t.ShouldModeShowClipControls());
	const a = (0, h.r6)();
	const { onMarkerCreated: u, onNavigateToClip: d } = (0, g.f)();
	const [A, p] = (0, b.fR)();
	return n.useCallback(
		(s, l, c, m) =>
			i || a
				? null
				: (0, o.lX)(
						n.createElement(S, {
							isCurrentPlayback: c,
							nGlobalOffsetMS: l,
							playbackCoordinator: t,
							timelineView: e,
							fnSetSelectionClipRange: r,
							onMarkerCreated: u,
							onNavigateToClip: d,
							onContextMenuOpenChange: p,
						}),
						s,
						m,
					),
		[i, a, t, e, r, u, d, p],
	);
}
function S(e) {
	const {
		playbackCoordinator: t,
		timelineView: r,
		nGlobalOffsetMS: s,
		fnSetSelectionClipRange: o,
		isCurrentPlayback: l,
		onMarkerCreated: c,
		onNavigateToClip: g,
		onContextMenuOpenChange: b,
	} = e;
	const y = (0, m.q3)(() => t.GetClipsAtGlobalMS(s));
	const S = L2(r);
	(0, n.useEffect)(() => {
		b(true);
		return () => b(false);
	}, [b]);
	const w = (() => {
		const { strTimelineID: e, nTimelineOffsetMS: r } =
			t.ConvertGlobalOffsetToTimelineRelativeOffset(s.valMS);
		if (!e) {
			return null;
		}
		const n = t.GetLoader().GetTimelineData(e);
		if (!n) {
			return null;
		}
		const i = SortedFindLessOrEqual(
			n.m_rgPhases,
			(e) => r.valMS - parseInt(e.time),
		);
		if (i < 0) {
			return null;
		}
		const a = n.m_rgPhases[i];
		if (
			r.valMS >= parseInt(a.time) &&
			r.valMS <= parseInt(a.time) + parseInt(a.duration)
		) {
			return {
				strTimelineID: e,
				phase: a,
			};
		} else {
			return null;
		}
	})();
	const B = (e) => r.SetPhaseToHighlight(e);
	(0, n.useEffect)(() => () => r.SetPhaseToHighlight(null), [r]);
	return n.createElement(
		i.tz,
		{
			refInstance: S,
		},
		n.createElement(
			i.kt,
			{
				onSelected: (e) => {
					t.AddUserMarkerAtGlobalMS(
						s,
						"/GameRecording/AddMarker/TimelineCtxMenu",
						(t, r) => {
							if (c) {
								c(t, r, e);
							}
						},
					);
					t.SetPlaytimeFromGlobalMS(s);
					t.FocusGlobalMS(s);
				},
				className: A.TimelineContextMenuItem,
			},
			n.createElement(
				"div",
				{
					className: (0, p.A)(A.MenuItem, A.AddUserMarker),
				},
				n.createElement(u.pH, null),
				Localize(
					l
						? "#Playback_UserSelectionControls_AddUserMarker"
						: "#TimelineDialog_AddMarker",
				),
			),
		),
		n.createElement(
			i.kt,
			{
				onSelected: () => {
					const { strTimelineID: e, nTimelineOffsetMS: r } =
						t.ConvertGlobalOffsetToTimelineRelativeOffset(s.valMS);
					(0, h.YM)(t.GetGameID(), e, r);
				},
				className: A.TimelineContextMenuItem,
			},
			n.createElement(
				"div",
				{
					className: (0, p.A)(A.MenuItem, A.TakeScreenshot),
				},
				n.createElement(u.i7, null),
				Localize(
					l
						? "#Playback_UserSelectionControls_TakeScreenshot"
						: "#TimelineDialog_TakeScreenshot",
				),
			),
		),
		n.createElement(
			i.kt,
			{
				onSelected: () => {
					o(t, 4, s, undefined);
					t.SetPlaytimeFromGlobalMS(s);
					t.FocusGlobalMS(s);
				},
				className: A.TimelineContextMenuItem,
			},
			n.createElement(
				"div",
				{
					className: (0, p.A)(A.MenuItem, A.StartEndClip),
				},
				n.createElement(u.Nm, {
					direction: "left",
				}),
				Localize(
					l
						? "#Playback_UserSelectionControls_SetClipStart"
						: "#TimelineContext_SetClipStart",
				),
			),
		),
		n.createElement(
			i.kt,
			{
				onSelected: () => {
					o(t, 4, undefined, s);
					t.SetPlaytimeFromGlobalMS(s);
					t.FocusGlobalMS(s);
				},
				className: A.TimelineContextMenuItem,
			},
			n.createElement(
				"div",
				{
					className: (0, p.A)(A.MenuItem, A.StartEndClip),
				},
				n.createElement(u.Nm, {
					direction: "right",
				}),
				Localize(
					l
						? "#Playback_UserSelectionControls_SetClipEnd"
						: "#TimelineContext_SetClipEnd",
				),
			),
		),
		!!w &&
			n.createElement(
				i.kt,
				{
					onSelected: () => {
						if (!w) {
							return;
						}
						const { phase: e, strTimelineID: r } = w;
						(0, f.DV)(t.GetGameID(), r, parseInt(e.time), parseInt(e.duration));
					},
					className: A.TimelineContextMenuItem,
					onMouseOver: () => B([w.strTimelineID, w.phase.time]),
					onMouseLeave: () => B(null),
				},
				n.createElement(
					"div",
					{
						className: (0, p.A)(A.MenuItem, A.ClipPhase),
					},
					n.createElement(u.O5, null),
					Localize("#TimelineDialog_ClipPhase"),
				),
			),
		y.length > 0 &&
			n.createElement(
				i.kt,
				{
					onSelected: () => {
						if (y.length > 0) {
							C.y.ReportTrackedAction(
								"/GameRecording/Tooltip/ViewClip/TimelineCtxMenu",
							);
							if (g) {
								g(y[0].strClipID);
							}
						}
					},
					className: A.TimelineContextMenuItem,
				},
				n.createElement(
					"div",
					{
						className: (0, p.A)(A.MenuItem, A.ViewClip),
					},
					n.createElement(d.Video, null),
					Localize("#TimelineDialog_ViewClip"),
				),
			),
	);
}
export function wj() {
	const e = (0, s.aO)();
	const t = (0, l.dK)();
	const r = (0, m.q3)(() => !e.ShouldModeShowClipControls());
	const i = (0, h.r6)();
	const { onMarkerCreated: a } = (0, g.f)();
	return n.useCallback(
		(s, l) => {
			if (r || i) {
				return;
			}
			const c = n.createElement(B, {
				onMarkerCreated: a,
				playbackCoordinator: e,
				fnSetSelectionClipRange: t,
			});
			(0, o.lX)(c, s, l);
		},
		[r, i, a, e, t],
	);
}
function B(e) {
	const { playbackCoordinator: t, fnSetSelectionClipRange: r } = e;
	const s = (0, n.useRef)();
	const { onMarkerCreated: o } = (0, g.f)();
	return n.createElement(
		i.tz,
		{
			refInstance: s,
		},
		n.createElement(
			i.kt,
			{
				onSelected: (e) => {
					const r = t.GetGlobalMSPlaytime();
					t.AddUserMarkerAtGlobalMS(
						r,
						"/GameRecording/AddMarker/VideoCtxMenu",
						(t, r) => {
							if (o) {
								o(t, r, e);
							}
						},
					);
					t.SetPlaytimeFromGlobalMS(r);
					t.FocusGlobalMS(r);
				},
				className: A.TimelineContextMenuItem,
			},
			n.createElement(
				"div",
				{
					className: (0, p.A)(A.MenuItem, A.AddUserMarker),
				},
				n.createElement(u.Od, null),
				Localize("#Playback_UserSelectionControls_AddUserMarker"),
			),
		),
		n.createElement(
			i.kt,
			{
				onSelected: () => {
					const e = t.GetGlobalMSPlaytime();
					const { strTimelineID: r, nTimelineOffsetMS: n } =
						t.ConvertGlobalOffsetToTimelineRelativeOffset(e.valMS);
					(0, h.YM)(t.GetGameID(), r, n);
				},
				className: A.TimelineContextMenuItem,
			},
			n.createElement(
				"div",
				{
					className: (0, p.A)(A.MenuItem, A.TakeScreenshot),
				},
				n.createElement(u.i7, null),
				Localize("#Playback_UserSelectionControls_TakeScreenshot"),
			),
		),
		n.createElement(
			i.kt,
			{
				onSelected: () => {
					const e = t.GetGlobalMSPlaytime();
					r(t, 4, e, undefined);
					t.SetPlaytimeFromGlobalMS(e);
					t.FocusGlobalMS(e);
				},
				className: A.TimelineContextMenuItem,
			},
			n.createElement(
				"div",
				{
					className: (0, p.A)(A.MenuItem, A.StartEndClip),
				},
				n.createElement(u.Nm, {
					direction: "left",
				}),
				Localize("#Playback_UserSelectionControls_SetClipStart"),
			),
		),
		n.createElement(
			i.kt,
			{
				onSelected: () => {
					const e = t.GetGlobalMSPlaytime();
					r(t, 4, undefined, e);
					t.SetPlaytimeFromGlobalMS(e);
					t.FocusGlobalMS(e);
				},
				className: A.TimelineContextMenuItem,
			},
			n.createElement(
				"div",
				{
					className: (0, p.A)(A.MenuItem, A.StartEndClip),
				},
				n.createElement(u.Nm, {
					direction: "right",
				}),
				Localize("#Playback_UserSelectionControls_SetClipEnd"),
			),
		),
	);
}
export function L2(e) {
	const t = (0, m.q3)(() => e.GetAutoScrollPauseTimeout());
	const r = (0, m.q3)(() => e.GetVisualWindowStartPX());
	const i = (0, n.useRef)();
	const a = (0, n.useRef)();
	(0, n.useEffect)(() => {
		if (i.current && a.current) {
			a.current.Hide();
		} else {
			i.current = true;
		}
	}, [r]);
	(0, n.useEffect)(() => {
		e.SetAutoScrollPaused(true);
	}, [e]);
	(0, n.useEffect)(() => {
		if (t) {
			e.ClearAutoScrollPauseTimeout();
		}
	}, [t, e]);
	return a;
}
