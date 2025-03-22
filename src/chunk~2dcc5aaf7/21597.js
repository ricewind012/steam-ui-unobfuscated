var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./84009.js");
var a = i;
var s = require("./61662.js");
var o = require(/*webcrack:missing*/ "./46108.js");
var l = require(/*webcrack:missing*/ "./90765.js");
var c = require("./60142.js");
var m = require(/*webcrack:missing*/ "./72476.js");
var u = require("./78721.js");
var d = require("./18869.js");
var A = require("./26094.js");
export function R(e) {
	const { screenshot: t, sizeAxis: r, onClick: i, className: p, ...h } = e;
	const C = (0, d.br)();
	const _ = (0, A.jE)();
	const f = (e) => _(t, e.currentTarget);
	const b = !(0, m.Qn)();
	let y = (0, l.A)(
		a.ClickableScreenshotImg,
		r == "width" ? a.UseWidth : a.UseHeight,
	);
	return n.createElement(
		s.z,
		{
			...h,
			className: (0, l.A)(p, a.ClickableScreenshot),
			renderHover: () =>
				n.createElement(g, {
					url: t.strUrl,
					dateCreated: t.rtCreated,
					caption: t.remote?.short_description,
				}),
			onClick:
				i ||
				(() =>
					C.Media.Screenshot({
						state: {
							id: t.id,
							filter: {
								listSource: {
									type: "app",
									gameid: t.strGameID,
								},
							},
						},
					})),
			onContextMenu: f,
			showFocusRing: true,
			onMenuActionDescription: (0, o.we)("#Generic_Share"),
		},
		n.createElement("img", {
			className: y,
			src: (0, u.fu)(t.strUrl),
		}),
		b &&
			n.createElement(
				"div",
				{
					className: a.ScreenshotShareIcon,
					onClick: (e) => {
						e.preventDefault();
						e.stopPropagation();
						f(e);
					},
				},
				n.createElement(c.li, null),
			),
	);
}
function g(e) {
	const { url: t, caption: r, dateCreated: i } = e;
	return n.createElement(
		s.M,
		{
			className: a.Hover,
		},
		n.createElement("img", {
			className: a.Screenshot,
			src: (0, u.fu)(t),
		}),
		r &&
			n.createElement(
				"div",
				{
					className: a.Caption,
				},
				r,
			),
		n.createElement(
			"div",
			{
				className: a.Date,
			},
			(0, o.$z)(i),
		),
	);
}
