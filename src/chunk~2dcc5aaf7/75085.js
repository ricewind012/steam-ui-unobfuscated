var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./65504.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require("./22091.js");
var o = require("./39940.js");
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require(/*webcrack:missing*/ "./58254.js");
var m = require("./51943.js");
var u = require("./74362.js");
export function K(e) {
	const { bPlayingMovie: t, ..._r } = e;
	const a = n.useRef(undefined);
	let s = {
		exit: i.Exit,
		exitActive: i.ExitActive,
		exitDone: i.ExitDone,
	};
	return n.createElement(
		c.A,
		{
			nodeRef: a,
			in: t,
			unmountOnExit: true,
			timeout: 400,
			classNames: s,
		},
		n.createElement(r, {
			..._r,
			ref: a,
		}),
	);
}
export const r = n.forwardRef(function (e, t) {
	const {
		strOverrideStartupMovie: r,
		bFullscreenVideo: c = false,
		onVideoComplete: d,
		onVideoError: A,
		onVideoPlay: p,
	} = e;
	const [g, h] = n.useState(false);
	const C = (0, a.q3)(() => s.Fd.Get().GetControllers());
	const _ = (0, m.Cu)(u.T4.Output);
	const f = n.useCallback(() => {
		if (_.flVolume > 0) {
			C.filter((e) => e.eControllerType == 4)?.forEach((e) => {
				SteamClient.Input.TriggerSimpleHapticEvent(
					e.nControllerIndex,
					2,
					6,
					2,
					0,
				);
			});
		}
		h(true);
		if (p) {
			p();
		}
	}, [h, C, _, p]);
	let b = (0, l.A)(i.Container, g && i.MoviePlaying);
	let y = (0, l.A)(c && i.FullscreenVideo);
	return n.createElement(
		"div",
		{
			className: b,
			ref: t,
		},
		!r &&
			n.createElement("img", {
				alt: "Steam Spinner",
				src: "/images/deck_boot_transition.png",
			}),
		r &&
			n.createElement("video", {
				className: y,
				src: r,
				autoPlay: true,
				onPlay: f,
				onEnded: d,
				onError: A,
			}),
		c &&
			r &&
			n.createElement("video", {
				className: i.GutterBlur,
				src: r,
				autoPlay: true,
				onPlay: f,
				onEnded: d,
				onError: A,
			}),
		n.createElement("img", {
			alt: "Steam Spinner Preload",
			src: o.A,
			style: {
				display: "none",
			},
		}),
	);
});
