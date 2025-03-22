var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require("./33175.js");
var s = a;
export const _ = n.forwardRef(function (
	{ imgURL: e, glow: t, pauseAnimation: r, hidden: a, alt: o, className: l },
	c,
) {
	const [m, u] = n.useState(false);
	if (a) {
		return n.createElement(
			"div",
			{
				className: s.HiddenLabel,
			},
			"?",
		);
	}
	const d = m && t;
	return n.createElement(
		"div",
		{
			ref: c,
			className: (0, i.A)(
				s.AchievementIconWrapper,
				l,
				r && s.RareAchievementNoAnimation,
			),
		},
		d &&
			n.createElement(
				"div",
				{
					className: s.RareAchievementIconGlowContainerRoot,
				},
				n.createElement(
					"div",
					{
						className: s.RareAchievementIconGlowContainer,
					},
					n.createElement("div", {
						className: s.RareAchievementIconGlow,
					}),
				),
			),
		n.createElement("img", {
			className: (0, i.A)(s.Icon, d && s.IconGlow),
			src: e,
			loading: "lazy",
			alt: o,
			onLoad: () => u(true),
		}),
	);
});
