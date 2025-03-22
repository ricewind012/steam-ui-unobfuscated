var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./2773.js");
var a = require(/*webcrack:missing*/ "./98995.js");
var s = require("./58608.js");
var o = require("./96360.js");
var l = require(/*webcrack:missing*/ "./90765.js");
export function x(e) {
	const { gameID: t, tags: r, attributes: a } = e;
	const { rgMetadata: o, rgDemoted: l } = (0, i.g7)(r, a);
	return n.createElement(
		"div",
		{
			className: s.PhaseTags,
		},
		o.map((e, r) =>
			n.createElement(m, {
				key: `${g(e)}_${r}`,
				metadata: e,
				gameID: t,
			}),
		),
		l.length > 0 &&
			n.createElement(
				"div",
				{
					className: s.TextTags,
				},
				l.map(({ name: e }) => e).join(", "),
			),
	);
}
function m(e) {
	const { metadata: t, gameID: r } = e;
	switch (t.type) {
		case "attribute":
			return n.createElement(u, {
				...t.attribute,
			});
		case "tags":
			return n.createElement(d, {
				tags: t.tags,
				gameID: r,
			});
		default:
			return t;
	}
}
function u(e) {
	const { group: t, value: r } = e;
	return n.createElement(
		a.he,
		{
			toolTipContent: t + " - " + r,
		},
		n.createElement(
			"div",
			{
				className: s.PhaseAttribute,
			},
			r,
		),
	);
}
function d(e) {
	const { tags: t, gameID: r } = e;
	return n.createElement(
		"div",
		{
			className: s.TagGroup,
		},
		t.map((e) =>
			n.createElement(A, {
				key: e.name,
				...e,
				gameID: r,
			}),
		),
	);
}
function A(e) {
	const { icon: t, name: r, gameID: i, group: o, bFilterMatch: c } = e;
	const m = typeof c == "boolean";
	const u = (0, l.A)(m && c && s.Bright, m && !c && s.Dim);
	return n.createElement(
		a.he,
		{
			toolTipContent: o + " - " + r,
			className: u,
		},
		n.createElement(N, {
			icon: t,
			gameID: i,
		}),
	);
}
export function N(e) {
	const { icon: t, gameID: r } = e;
	return n.createElement(o.XR, {
		icon: t,
		gameID: r,
		className: s.PhaseListIcon,
	});
}
function g(e) {
	switch (e.type) {
		case "attribute":
			return `attr_${e.attribute.group}`;
		case "tags":
			return `tags_${e.tags[0].group}`;
		default:
			return "";
	}
}
