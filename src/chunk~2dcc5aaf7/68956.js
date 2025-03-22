var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require("./81469.js");
var s = a;
var o = require("./84921.js");
var l = require(/*webcrack:missing*/ "./90095.js");
var c = require(/*webcrack:missing*/ "./46108.js");
var m = require("./92374.js");
var u = require(/*webcrack:missing*/ "./83599.js");
var d = require("./6967.js");
var A = require(/*webcrack:missing*/ "./43691.js");
var p = require("./35488.js");
var g = require(/*webcrack:missing*/ "./52451.js");
var h = require("./29516.js");
var C = require("./59005.js");
var _ = require("./76835.js");
var f = require("./91720.js");
var b = require("./96360.js");
var y = require("./37576.js");
var S = y;
var w = require("./67429.js");
const B = parseInt(S.animationDuration);
function v() {
	const e = (0, m.aO)();
	const t = (0, l.q3)(() => e.GetDisplayHighlightEntry());
	const [r, i] = (0, n.useState)(null);
	const a = n.useRef(0);
	(0, n.useEffect)(() => {
		if (t?.entry && !(0, _.hT)(t.entry) && !(0, _.Te)(t.entry)) {
			i(t.entry);
			a.current = window.setTimeout(
				() => {
					e.SetDisplayHighlightEntry(null);
				},
				t.duration ? t.duration : B,
			);
			return () => window.clearTimeout(a.current);
		}
		i(null);
	}, [t, e]);
	if (r) {
		return n.createElement(I, {
			entry: r,
		});
	} else {
		return null;
	}
}
function I(e) {
	const { entry: t } = e;
	const r = (0, m.aO)();
	const i = (0, l.q3)(() => r.GetGameID());
	const a = r.GetGameRecordingVideo();
	const s = (0, l.q3)(() => r.GetRecordingID());
	const o = (0, l.q3)(() => a.IsInitialized());
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
	if ((0, _.xz)(t)) {
		p = n.createElement(E, {
			entry: t,
			strGameID: i,
		});
	} else if ((0, _.N$)(t)) {
		p = n.createElement(M, {
			key: t.id,
			entry: t,
			strMarkerIcon: t.icon,
			title: t.title ? t.title : (0, c.we)("#Marker_UserMarker_Title"),
			description: t.description || "",
		});
	} else if ((0, _.sX)(t)) {
		p = n.createElement(M, {
			key: t.id,
			entry: t,
			strMarkerIcon: t.icon,
			title: (0, c.we)("#MediaManager_ItemType_Screenshot"),
			description: "",
		});
	} else if ((0, _.eJ)(t)) {
		p = n.createElement(M, {
			key: t.id,
			entry: t,
			strMarkerIcon: t.icon,
			title: t.title || "",
			description: t.description || "",
		});
	}
	return n.createElement(
		"div",
		{
			className: S.BannerVideoOverlay,
			style: A,
		},
		p,
	);
}
function E(e) {
	const { entry: t, strGameID: r } = e;
	const i = new w.VS(r);
	const a = (0, f.dd)(i.GetAppID(), t.achievement_name);
	if (a) {
		return n.createElement(M, {
			key: t.id,
			entry: t,
			strMarkerIcon: "steam_achievement",
			title: a.name ?? "",
			description: a.description ?? "",
		});
	} else {
		return null;
	}
}
function M(e) {
	const { entry: t, strMarkerIcon: r, title: i, description: a } = e;
	return n.createElement(
		"div",
		{
			className: S.PlayerHighlightBanner,
		},
		n.createElement(
			"div",
			{
				className: S.BannerContents,
			},
			n.createElement(
				"div",
				{
					className: S.HighlightIcon,
				},
				n.createElement(b.Zo, {
					entry: t,
					strMarkerIcon: r,
				}),
			),
			n.createElement(
				"div",
				{
					className: S.InfoBox,
				},
				i &&
					n.createElement(
						"div",
						{
							className: S.HighlightTitle,
						},
						i,
					),
				a &&
					n.createElement(
						"div",
						{
							className: S.HighlightDesc,
						},
						a,
					),
			),
		),
	);
}
var T = require(/*webcrack:missing*/ "./69164.js");
var R = require(/*webcrack:missing*/ "./98995.js");
var k = require("./661.js");
var D = require(/*webcrack:missing*/ "./90242.js");
var N = require("./94361.js");
var F = require("./26516.js");
var G = F;
var O = require(/*webcrack:missing*/ "./11010.js");
const P = parseInt(G.animationDuration);
function L() {
	const e = (0, m.aO)();
	const t = e.GetGameRecordingVideo();
	const r = (0, l.q3)(() => e.GetRecordingID());
	const i = (0, l.q3)(() => t.IsInitialized());
	const a = t.GetVideoHeight();
	const s = t.GetVideoWidth();
	const o =
		r && i && a > 0 && s > 0
			? {
					height: a,
					width: s,
				}
			: {};
	const c = n.useRef(0);
	const u = (0, l.q3)(() => e.GetRelativeTimeForDisplay());
	const d = (0, l.q3)(() => e.GetGameRecordingVideo().IsInitialized());
	const A = (0, n.useMemo)(() => {
		if (isNaN(u) || !d) {
			return null;
		}
		const t = e.ConvertGlobalOffsetToTimelineRelativeOffset(u);
		if (t && e.GetIsActiveTimeline(t.strTimelineID)) {
			const r = e.MakeRelativeToTimelineEndIfActive(
				t.strTimelineID,
				t.nTimelineOffsetMS.valMS,
			);
			return (0, O.dt)(r / 1000, false, true);
		}
		return null;
	}, [d, u, e]);
	(0, n.useEffect)(() => {
		if (!isNaN(u)) {
			c.current = window.setTimeout(() => {
				e.ClearRelativeTimeDisplay();
			}, P);
			return () => window.clearTimeout(c.current);
		}
	}, [u, e]);
	if (isNaN(u)) {
		return null;
	} else {
		return n.createElement(
			"div",
			{
				className: G.RelativeTimeContainer,
				style: o,
			},
			n.createElement(
				"div",
				{
					className: G.RelativeTime,
					key: A,
				},
				A,
			),
		);
	}
}
var z = require(/*webcrack:missing*/ "./54644.js");
export function J(e) {
	const {
		disableSound: t,
		positionAbsolute: r = true,
		refVideoResize: a,
		style: c,
		refFullscreen: u,
	} = e;
	const d = (0, m.aO)();
	const p = (0, o.xE)(d.StopPlayback, d.SetVideoElement);
	const _ = d.GetGameRecordingVideo();
	const f = (0, l.q3)(() => d.GetRecordingID());
	const b = (0, l.q3)(() => _.GetPlaybackError());
	const y = (0, l.q3)(() => d.GetRecordingMode() === "Overlay");
	const S = (function () {
		const e = (0, m.aO)();
		const t = (0, l.q3)(() => e.GetGlobalMSPlaytime());
		const { nGlobalEndMS: r, nGlobalStartMS: n } = (0, h._Z)();
		const i = e.GetGameRecordingVideo();
		return (
			!(0, l.q3)(() => i.GetPlaybackError()) &&
			!!t &&
			!!n &&
			!!r &&
			t.valMS >= n.valMS &&
			t.valMS <= r.valMS
		);
	})();
	const w = (0, h.Pm)();
	const B = b || !f;
	const I = n.useRef();
	let E = (0, g.Ue)(p, a);
	const M = (0, C.wj)();
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
	let k = (0, i.A)(
		s.GameRecordingPlayer,
		B && s.NoVideo,
		r && s.PositionAbsolute,
		w && s.ClippingMode,
		y && s.Overlay,
		S && s.PlayingClippedRegion,
	);
	return n.createElement(
		"div",
		{
			ref: I,
			className: k,
			onClick: function () {
				if (f) {
					d.TogglePlayPause();
				}
			},
			onContextMenu: T,
			style: c,
			onDoubleClick: function () {
				if (f && u.current) {
					(0, z.Vr)(u.current);
				}
			},
		},
		n.createElement("video", {
			ref: E,
			controls: false,
			muted: t,
			autoPlay: R,
			playsInline: R,
		}),
		n.createElement(H, {
			player: _,
		}),
		n.createElement(U, null),
		n.createElement(W, null),
		n.createElement(V, null),
		!f && n.createElement(j, null),
		n.createElement(v, null),
		n.createElement(L, null),
	);
}
function U() {
	const e = (0, m.aO)();
	const t = u.fi.Get().IsDebugLogEnabled("GR");
	const r = (0, l.q3)(() => e.GetPlaybackStats());
	if (t && r) {
		return n.createElement(
			"div",
			{
				className: s.PerfCtnVideo,
			},
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "Average Seek MS: "),
				n.createElement("span", null, r.nMean.toFixed(3)),
			),
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "StdDev Seek MS: "),
				n.createElement("span", null, r.nStdDev.toFixed(3)),
			),
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "Slowest Seek MS: "),
				n.createElement("span", null, r.nMax.toFixed(3)),
			),
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "Fastest Seek MS: "),
				n.createElement("span", null, r.nMin.toFixed(3)),
			),
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "# Seeks: "),
				n.createElement("span", null, r.nLength),
			),
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "Last Val: "),
				n.createElement("span", null, r.nLastVal.toFixed(3)),
			),
		);
	} else {
		return null;
	}
}
function W() {
	const e = u.fi.Get().IsDebugLogEnabled("GR");
	const t = (0, m.aO)();
	(0, l.q3)(() => {
		t.GetGlobalMSPlaytime();
	});
	const r = (0, d.NB)();
	if (e && r) {
		return n.createElement(
			"div",
			{
				className: s.PerfCtnThumbnails,
			},
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "Avg Thumbnail Load MS: "),
				n.createElement("span", null, r.nMean.toFixed(3)),
			),
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "StdDev Thumbnail Load MS: "),
				n.createElement("span", null, r.nStdDev.toFixed(3)),
			),
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "Slowest Thumbnail Load MS: "),
				n.createElement("span", null, r.nMax.toFixed(3)),
			),
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "Fastest Thumbnail Load MS: "),
				n.createElement("span", null, r.nMin.toFixed(3)),
			),
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "# Loaded: "),
				n.createElement("span", null, r.nLength),
			),
			n.createElement(
				"div",
				null,
				n.createElement("span", null, "Last Load: "),
				n.createElement("span", null, r.nLastVal.toFixed(3)),
			),
		);
	} else {
		return null;
	}
}
function V() {
	const e = (0, m.aO)();
	const t = e.GetGameRecordingVideo();
	const r = t.GetVideoHeight();
	const i = (0, l.q3)(() => t.BVideoElementWaiting());
	const a = (0, l.q3)(() => t.IsPaused());
	const o = (0, l.q3)(() => t.GetPlaybackError());
	const c = (0, l.q3)(() => t.IsInitialized());
	if (!(0, l.q3)(() => e.GetRecordingID()) || (c && !i) || o || a) {
		return null;
	} else {
		return n.createElement(
			"div",
			{
				className: s.LoadingSpinner,
				style: {
					height: r,
				},
			},
			n.createElement(p.Spinner, null),
		);
	}
}
function H(e) {
	const { player: t } = e;
	const r = (0, l.q3)(() => t.GetPlaybackError());
	(0, l.q3)(() => t.GetMediaTypeError());
	let i = "";
	switch (r) {
		case o.ep.DownloadFailed:
		case o.ep.PlaybackError:
		case o.ep.MediaTypeError:
			i = "#GameRecording_PlayerError_Generic";
	}
	if (i) {
		return n.createElement(
			"div",
			{
				className: s.PlayerError,
			},
			n.createElement(
				"div",
				{
					className: s.Text,
				},
				(0, c.we)(i),
			),
		);
	} else {
		return null;
	}
}
function j() {
	const e = (0, m.aO)();
	const t = (0, l.q3)(() => e.GetGamepadMode());
	const { onNavigateToClip: r, onNavigateToFAQ: a } = (0, k.f)();
	const o = (0, l.q3)(() => e.GetGlobalMSPlaytime());
	const u = e.GetClosestPreviousRecordingForGlobalMS(o);
	const d = e.GetClosestNextRecordingForGlobalMS(o);
	const A = (0, l.q3)(() => e.GetClipsAtGlobalMS(o));
	const p = (0, n.useCallback)(
		(t) => {
			if (u) {
				const r = Math.max(parseInt(u.duration_ms) - 500, 0);
				e.SetPlaytimeFromRecordingOffset(u.recording_id, r, true, true);
				t.stopPropagation();
			}
		},
		[e, u],
	);
	const g = (0, n.useCallback)(
		(t) => {
			if (d) {
				e.SetPlaytimeFromRecordingOffset(d.recording_id, 0);
				t.stopPropagation();
			}
		},
		[e, d],
	);
	const h = (0, n.useCallback)(
		(e) => {
			if (A.length > 0) {
				N.y.ReportTrackedAction(
					"/GameRecording/Tooltip/ViewClip/PlayerNoContent",
				);
				r(A[0].strClipID);
				e.stopPropagation();
			}
		},
		[A, r],
	);
	return n.createElement(
		"div",
		{
			className: s.PlayerError,
		},
		n.createElement(
			"div",
			{
				className: s.Title,
			},
			(0, c.we)("#GameRecording_PlayerNoContent"),
		),
		n.createElement(
			"div",
			{
				className: s.Description,
			},
			(0, c.oW)(
				"#GameRecording_PlayerNoContentDescription",
				n.createElement(D.Ii, {
					href: "#",
					onClick: a,
				}),
			),
		),
		!t &&
			n.createElement(
				"div",
				{
					className: s.Buttons,
				},
				n.createElement(
					R.he,
					{
						direction: "bottom",
						toolTipContent: (0, c.we)(
							u
								? "#GameRecording_PlayerNoContentJumpPrevious_tooltip"
								: "#GameRecording_PlayerNoContentJumpNoContent_tooltip",
						),
					},
					n.createElement(
						T.Z,
						{
							className: (0, i.A)(
								s.Button,
								s.JumpPrevious,
								!u && s.DisableButton,
							),
							onClick: p,
							onActivate: p,
						},
						(0, c.we)("#GameRecording_PlayerNoContentJumpPrevious"),
					),
				),
				A.length > 0 &&
					n.createElement(
						R.he,
						{
							direction: "bottom",
							toolTipContent: (0, c.we)(
								"#GameRecording_PlayerNoContentSeeClip_tooltip",
							),
						},
						n.createElement(
							T.Z,
							{
								onClick: h,
								onActivate: h,
								className: (0, i.A)(s.Button, s.GoToClip),
							},
							(0, c.we)("#GameRecording_PlayerNoContentSeeClip"),
						),
					),
				n.createElement(
					R.he,
					{
						direction: "bottom",
						toolTipContent: (0, c.we)(
							d
								? "#GameRecording_PlayerNoContentJumpNext_tooltip"
								: "#GameRecording_PlayerNoContentJumpNoContent_tooltip",
						),
					},
					n.createElement(
						T.Z,
						{
							className: (0, i.A)(s.Button, s.JumpNext, !d && s.DisableButton),
							onClick: g,
							onActivate: g,
						},
						(0, c.we)("#GameRecording_PlayerNoContentJumpNext"),
					),
				),
			),
	);
}
