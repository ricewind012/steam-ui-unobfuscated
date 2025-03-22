var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require("./7514.js");
var s = require("./70150.js");
var o = s;
export function _H(e) {
	const t = (0, a.Zt)("ToggleControl", c);
	return n.createElement(t, {
		...e,
	});
}
function c(e) {
	const { value: t, onChange: r, disabled: a } = e;
	return n.createElement(
		"div",
		{
			className: (0, i.A)(o.Toggle, a && o.Disabled),
			onClick: () => !a && r && r(!t),
		},
		n.createElement("div", {
			className: o.ToggleRail,
		}),
		n.createElement("div", {
			className: (0, i.A)(o.ToggleRail, o.Highlight, t ? o.On : o.Off),
		}),
		n.createElement("div", {
			className: (0, i.A)(o.ToggleSwitch, t ? o.On : o.Off),
		}),
	);
}
export const P8 = (e) => {
	const { label: t, value: r, onChange: a, disabled: s, className: c } = e;
	return n.createElement(
		"div",
		{
			className: (0, i.A)(o.ToggleRow, c),
		},
		n.createElement(
			"div",
			{
				className: (0, i.A)(o.Label, s && o.Disabled),
			},
			t,
		),
		n.createElement(_H, {
			value: r,
			onChange: a,
			disabled: s,
		}),
	);
};
