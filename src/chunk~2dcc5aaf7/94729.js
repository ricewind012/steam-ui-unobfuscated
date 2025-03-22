var n = require("./90413.js");
var i = n;
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./35488.js");
var o = require(/*webcrack:missing*/ "./69164.js");
var l = require("./93092.js");
var c = require("./81393.js");
var m = require(/*webcrack:missing*/ "./52451.js");
var u = require("./18869.js");
var d = require(/*webcrack:missing*/ "./41180.js");
var A = require("./83247.js");
var p = require(/*webcrack:missing*/ "./90765.js");
var g = require("./91720.js");
var h = require("./56997.js");
var C = require(/*webcrack:missing*/ "./46108.js");
var _ = require(/*webcrack:missing*/ "./37322.js");
var f = require(/*webcrack:missing*/ "./23038.js");
var b = require(/*webcrack:missing*/ "./58254.js");
var y = require("./96593.js");
var S = require("./91486.js");
const w = 350;
const B = 10000;
const v = parseInt(i.strHighlightFadeTime);
const I = parseInt(i.nPlaceholderWidth);
const E = parseInt(i.nPlaceholderHeight);
const M = parseInt(i.nThumbnailFixedHeight);
export function $d(e) {
	let { clip: t, nonFixedSize: r } = e;
	let n = t.clip_id;
	let [s, m] = R();
	let d = (0, u.br)();
	let A = {
		aspectRatio: (t?.thumbnail_width ?? 16) / (t?.thumbnail_height ?? 9),
	};
	let g = (0, a.useCallback)(() => {
		d.Media.Clip({
			state: {
				id: n,
			},
		});
	}, [d, n]);
	return a.createElement(
		o.Z,
		{
			style: A,
			className: (0, p.A)(i.PostGameSummaryClip, r && i.NonFixedSize),
			noFocusRing: false,
			focusable: true,
			onActivate: g,
			...s,
		},
		a.createElement(l.d, {
			className: i.ClipThumbnail,
			clipID: n,
		}),
		a.createElement(c.z, {
			clipID: n,
			playClip: m,
		}),
		a.createElement(
			"div",
			{
				className: i.CornerContent,
			},
			a.createElement(k, {
				msDuration: parseInt(t.duration_ms),
			}),
		),
	);
}
function R() {
	const [e, t] = (0, a.useState)(false);
	const { fnStopTimer: r, fnRestartTimer: n } = (0, m.L$)(
		w,
		() => t(true),
		false,
	);
	let i = a.useCallback(() => {
		n();
	}, [n]);
	let s = a.useCallback(() => {
		r();
		t(false);
	}, [r, t]);
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
function k(e) {
	const { msDuration: t } = e;
	const r = t && !isNaN(t) ? (0, d.yS)(t) : "--";
	return a.createElement(
		"div",
		{
			className: (0, p.A)(i.DurationText, i.Clip),
		},
		a.createElement(A.O5, null),
		r,
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
	let [r, n] = (0, a.useState)(null);
	let i = (0, a.useRef)([]);
	let s = (0, a.useRef)(false);
	let o = (0, a.useRef)(null);
	let l = (0, a.useRef)(undefined);
	let c = (0, a.useRef)(undefined);
	let m = (0, a.useCallback)(() => {
		let e = i.current;
		if (e.length == 0) {
			o.current = null;
			n(null);
			return;
		}
		let t = e.findIndex((e) => e == o.current);
		if (t < 0) {
			t = e.length - 1;
		}
		t = N(e, t);
		o.current = e[t];
		if (o.current.m_Image !== undefined) {
			n(o.current);
		}
	}, [i, n, o]);
	let u = (0, a.useCallback)(() => {
		let e = i.current;
		if (s.current || e.length == 0) {
			return;
		}
		let t = e.findIndex((e) => e == o.current);
		if (t < 0) {
			return;
		}
		if (e[t].m_Image !== undefined) {
			t = N(e, t);
		}
		let r = i.current[t];
		if (r.m_Image !== undefined) {
			return;
		}
		let a = r.m_Event;
		let l = parseInt(a.timeline_offset_ms);
		s.current = true;
		(0, g.c5)(undefined, undefined, a.timeline_id, [l * 1000], 512, true).then(
			(e) => {
				s.current = false;
				if (e.length > 0) {
					let t = e[0];
					r.m_Image = {
						m_Bytes: "data:image/jpeg;base64," + _.iI(t.image_data()),
						m_nWidth: t.width(),
						m_nHeight: t.height(),
					};
					if (o.current == r) {
						n(r);
					}
				} else {
					r.m_Image = {
						m_Bytes: "",
						m_nWidth: 0,
						m_nHeight: 0,
					};
					if (o.current == r) {
						m();
					}
				}
				u();
			},
		);
	}, [s, o, i, m]);
	let d = (0, a.useCallback)(() => {
		m();
		u();
	}, [m, u]);
	(0, a.useEffect)(() => {
		if (c.current == e) {
			return;
		}
		c.current = e;
		i.current = (function (e, t) {
			let r = [];
			for (let n of t) {
				let t = e.find((e) => {
					let t = e.m_Event;
					return (
						t.timeline_id == n.timeline_id &&
						t.timeline_offset_ms == n.timeline_offset_ms
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
		})(i.current, e);
		if (
			!o.current ||
			!o.current.m_Image ||
			!!D(o.current) ||
			!i.current.find((e) => e !== o.current)
		) {
			o.current = null;
			window.clearTimeout(l.current);
			l.current = undefined;
			d();
		}
	}, [e, i, d, l, c]);
	(0, a.useEffect)(() => {
		if (r && !t) {
			l.current = window.setTimeout(() => {
				d();
			}, B);
			return () => clearTimeout(l.current);
		}
	}, [r, d, l, t]);
	if (r && r.m_Image !== undefined) {
		return r;
	} else {
		return null;
	}
}
function G(e, t) {
	let r = (0, a.useRef)(null);
	if (e && !r.current) {
		let t = !D(e);
		let n = t ? I : e.m_Image.m_nWidth;
		let i = t ? E : e.m_Image.m_nHeight;
		r.current = {
			m_nWidth: n,
			m_nHeight: i,
		};
	}
	let n = {};
	if (!r.current) {
		return {
			style: n,
			smallMode: false,
		};
	}
	let i = r.current.m_nWidth / r.current.m_nHeight;
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
	let { gameID: t, highlights: r, nonFixedSize: n } = e;
	let [s, l] = R();
	let c = yX(r, l);
	let m = (function (e, t) {
		let r = (0, u.br)();
		return (0, a.useCallback)(() => {
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
	})(t, c);
	let { style: d, smallMode: A } = G(c, !n);
	const g = a.useRef(null);
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
	return a.createElement(
		f.A,
		{
			style: d,
			className: (0, p.A)(i.PostGameSummaryHighlightGroup, n && i.NonFixedSize),
			appear: true,
			enter: true,
			exit: true,
		},
		a.createElement(
			b.A,
			{
				nodeRef: g,
				key: y,
				classNames: B,
				in: true,
				timeout: v,
			},
			a.createElement(
				o.Z,
				{
					ref: g,
					className: i.PostGameSummaryHighlight,
					noFocusRing: false,
					focusable: true,
					onActivate: m,
					...s,
				},
				S &&
					a.createElement(z, {
						gameID: t,
					}),
				!S &&
					a.createElement(L, {
						gameID: t,
						timelineID: h,
						timestampMS: C,
						durationMS: _,
						play: l,
						thumbnail: w,
					}),
				a.createElement(
					"div",
					{
						className: i.CornerContent,
					},
					a.createElement(P, {
						gameID: t,
						smallMode: A,
					}),
				),
			),
		),
	);
}
function P(e) {
	const { gameID: t, smallMode: r } = e;
	const n = (0, h.V)(t);
	if (!n) {
		return null;
	}
	const s = Math.floor(n / 60);
	const o = Math.floor(n % 60);
	const l = a.createElement(
		a.Fragment,
		null,
		s > 0 ? (0, C.we)("#ClipManager_BackgroundRecordingTime_Min", s) : "",
		(0, C.we)("#ClipManager_BackgroundRecordingTime_Sec", o),
	);
	return a.createElement(
		"div",
		{
			className: (0, p.A)(i.DurationText, i.BackgroundRecording),
		},
		a.createElement(A.vN, null),
		!r && l,
	);
}
function L(e) {
	let {
		gameID: t,
		timelineID: r,
		timestampMS: n,
		durationMS: s,
		play: o,
		thumbnail: l,
	} = e;
	return a.createElement(
		a.Fragment,
		null,
		a.createElement("img", {
			className: i.ClipThumbnail,
			src: l,
		}),
		a.createElement(c.G, {
			gameID: t,
			timelineID: r,
			startMS: n,
			durationMS: s,
			play: o,
		}),
	);
}
function z(e) {
	let { gameID: t } = e;
	let r = (0, y._R)(t);
	return a.createElement(
		"div",
		{
			className: i.BackgroundPlaceholder,
		},
		a.createElement(
			"div",
			{
				className: i.BackgroundBlur,
			},
			a.createElement(S.z, {
				eAssetType: 3,
				className: i.ImageContainer,
				imageClassName: i.ImageObject,
				app: r,
			}),
		),
		a.createElement(s.Video, {
			className: i.VideoIcon,
		}),
	);
}
export function Li(e) {
	let { gameID: t, highlights: r, nonFixedSize: n } = e;
	let s = yX(r, false);
	let l = (0, u.br)();
	let c = (0, a.useCallback)(() => {
		l.Media.Recording({
			state: {
				gameid: t,
			},
		});
	}, [l, t]);
	let { style: m, smallMode: d } = G(s, !n);
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
	return a.createElement(
		f.A,
		{
			style: m,
			className: (0, p.A)(i.PostGameSummaryHighlightGroup, n && i.NonFixedSize),
			appear: true,
			enter: true,
			exit: true,
		},
		a.createElement(
			b.A,
			{
				key: A,
				classNames: g,
				in: true,
				timeout: v,
			},
			a.createElement(
				o.Z,
				{
					className: i.PostGameSummaryHighlight,
					noFocusRing: false,
					focusable: true,
					onActivate: c,
				},
				a.createElement(z, {
					gameID: t,
				}),
				a.createElement(
					"div",
					{
						className: i.CornerContent,
					},
					a.createElement(P, {
						gameID: t,
						smallMode: d,
					}),
				),
			),
		),
	);
}
