var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./52850.js");
var a = require(/*webcrack:missing*/ "./26853.js");
var s = require("./39039.js");
var o = require("./16154.js");
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require(/*webcrack:missing*/ "./46108.js");
var m = require("./34428.js");
var u = require(/*webcrack:missing*/ "./72476.js");
var d = require("./4042.js");
var _A = require("./44184.js");
var p = _A;
export function A(e) {
	const {
		videoID: t,
		bShowVideoImmediately: r,
		bAutoPlay: A,
		nStartSeconds: g,
		classNameSize: h,
		classNameAlign: C,
	} = e;
	const [_, f] = (0, n.useState)(!r);
	const [b, y] = (0, n.useState)(false);
	const S = (0, s.m)("YouTubeInlineSnippet");
	const [w, B] = (0, n.useState)({
		title: (0, c.we)("#Loading"),
		description: "",
		videoid: t,
		views: "0",
	});
	(0, n.useEffect)(() => {
		if (_) {
			i.R.LoadYouTubeDynamicData([t], S)
				.then((e) => {
					if (!S.token.reason && e.length > 0) {
						B(e[0]);
						y(true);
					}
				})
				.catch((e) =>
					console.error("YouTubeInlineSnippet: " + (0, o.H)(e).strErrorMsg),
				);
		}
	}, [_, S, t]);
	const v = false;
	n.useEffect(() => {
		if (r) {
			(0, d.o)(() => {});
		}
	}, [r, v]);
	if (_) {
		const e = w.title;
		const r = w.views;
		const i = w.description;
		return n.createElement(
			"div",
			{
				className: p.DynamicLinkBox,
				onClick: () => f(false),
			},
			n.createElement("img", {
				className: p.DynamicLink_Preview,
				src: "https://img.youtube.com/vi/" + t + "/0.jpg",
			}),
			n.createElement(
				"div",
				{
					className: p.DynamicLink_Content,
				},
				n.createElement(
					"div",
					{
						className: p.DynamicLink_Name,
					},
					(0, c.we)("#EventEditor_YouTubeVideoTitle", e),
				),
				n.createElement(
					"div",
					{
						className: p.DynamicLink_YoutubeViews,
					},
					(0, c.we)("#EventEditor_YouTubeVideoViews", (0, m.Dq)(Number(r))),
				),
				n.createElement(
					"div",
					{
						className: p.Dynamiclink_Content,
					},
					b && i,
					!b &&
						n.createElement(a.t, {
							size: "medium",
						}),
				),
			),
		);
	}
	return n.createElement(
		"div",
		{
			className: (0, l.A)(p.PreviewYouTubeVideo, h, C),
			id: t,
		},
		n.createElement("img", {
			className: p.PlaceholderImg,
			src:
				u.TS.COMMUNITY_CDN_URL +
				"public/shared/images/responsive/youtube_16x9_placeholder.gif",
		}),
		n.createElement(d.N, {
			video: t,
			autoplay: A ?? false,
			startSeconds: g,
			controls: true,
			playsInline: true,
			autopause: true,
			showFullscreenBtn: true,
		}),
	);
}
