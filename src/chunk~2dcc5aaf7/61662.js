export let z = i.z;
var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./15489.js");
var a = require(/*webcrack:missing*/ "./90765.js");
var s = require("./22669.js");
var o = s;
export class M extends n.Component {
	render() {
		const { className: e, blurElement: t, ...r } = this.props;
		return n.createElement(
			"div",
			{
				className: (0, a.A)(o.AppDetailsHover, e),
				...r,
			},
			n.createElement(
				"div",
				{
					className: o.Background,
				},
				t &&
					n.createElement(
						"div",
						{
							className: o.BlurContainer,
						},
						t,
					),
			),
			this.props.children,
		);
	}
}
