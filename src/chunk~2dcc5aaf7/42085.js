var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require("./20189.js");
var s = a;
var o = require("./64608.js");
var l = require("./35488.js");
var c = require("./43397.js");
export function aU(e) {
	const { title: t, children: r } = e;
	return n.createElement(
		"div",
		{
			className: s.PanelSection,
		},
		t &&
			n.createElement(
				"div",
				{
					className: s.PanelSectionTitle,
				},
				n.createElement(
					"div",
					{
						className: s.Text,
					},
					t,
				),
				e.spinner && n.createElement(l.Spinner, null),
			),
		r,
	);
}
(0, i.PA)((e) => {
	const { checked: t, onChange: r, icon: i, children: a } = e;
	return n.createElement(o.y4, {
		label: a,
		onChange: r,
		checked: t instanceof Function ? t() : t,
		padding: "compact",
		icon: i,
	});
});
(0, i.PA)((e) => {
	const t = e.value;
	return n.createElement(o.d3, {
		layout: "inline",
		...e,
		value: t instanceof Function ? t() : t,
	});
});
export const kn = (0, c.Ri)(s.PanelSectionRow);
