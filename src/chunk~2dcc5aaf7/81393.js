var n = require("./64591.js");
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require(/*webcrack:missing*/ "./52451.js");
var o = require(/*webcrack:missing*/ "./58254.js");
var l = require("./22588.js");
var c = require("./92374.js");
var m = require("./84921.js");
export function z(e) {
	let { clipID: t, playClip: r } = e;
	return i.createElement(A, {
		play: r,
		renderVideo: (e, r, n) =>
			i.createElement(g, {
				ref: e,
				clipID: t,
				onReady: r,
				hidden: n,
			}),
	});
}
export function G(e) {
	let { gameID: t, timelineID: r, startMS: n, durationMS: a, play: s } = e;
	return i.createElement(A, {
		play: s,
		renderVideo: (e, s, o) =>
			i.createElement(h, {
				ref: e,
				gameID: t,
				timelineID: r,
				startMS: n,
				durationMS: a,
				onReady: s,
				hidden: o,
			}),
	});
}
function A(e) {
	let { renderVideo: t, play: r } = e;
	const [n, a] = (0, i.useState)(false);
	const s = i.useRef();
	let l = null;
	if (n) {
		l = i.createElement(
			o.A,
			{
				nodeRef: s,
				in: r,
				timeout: 200,
				classNames: p,
				mountOnEnter: true,
				unmountOnExit: true,
				appear: true,
			},
			t(s, undefined, false),
		);
	} else if (r) {
		l = t(s, () => a(true), true);
	}
	return l;
}
const p = {
	appear: n.Enter,
	appearActive: n.EnterActive,
	appearDone: n.EnterDone,
	enter: n.Enter,
	enterActive: n.EnterActive,
	enterDone: n.EnterDone,
	exit: n.Exit,
	exitActive: n.ExitActive,
	exitDone: n.ExitDone,
};
const g = i.forwardRef(function (e, t) {
	const { clipID: r, ...n } = e;
	const { loader: a, fnGetManifest: s } = (0, l.Ni)(r);
	return i.createElement(
		c.Ni,
		{
			loader: a,
			fnGetManifest: s,
			mode: c.g_.Clips,
		},
		i.createElement(C, {
			ref: t,
			...n,
		}),
	);
});
const h = i.forwardRef(function (e, t) {
	const { gameID: r, timelineID: n, startMS: a, durationMS: s, ...o } = e;
	const { loader: m, fnGetManifest: u } = (0, l.Fc)(r);
	let d = {
		m_strTimelineID: n,
		m_nTimelineStartMS: a,
		m_nDurationMS: s,
	};
	return i.createElement(
		c.Ni,
		{
			loader: m,
			fnGetManifest: u,
			mode: c.g_.Clips,
			playbackDefinition: d,
		},
		i.createElement(C, {
			ref: t,
			...o,
		}),
	);
});
const C = i.forwardRef(function (e, t) {
	const { onReady: r, hidden: o } = e;
	const l = (0, c.aO)();
	const u = (0, m.xE)(l.StopPlayback, l.SetVideoElement);
	const d = (0, s.Ue)(t, u);
	(0, i.useEffect)(() => l.GetGameRecordingVideo().SetMute(true), [l]);
	return i.createElement("video", {
		ref: d,
		className: (0, a.A)(n.ClipVideo, o && n.Hidden),
		autoPlay: true,
		playsInline: true,
		muted: true,
		onLoadedData: r,
	});
});
