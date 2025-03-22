var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./98995.js");
var a = require("./39012.js");
var s = a;
export class m extends n.Component {
	delay = this.props.delay || 240;
	render() {
		return n.createElement(
			i.m9,
			{
				direction: this.props.direction,
				nBodyAlignment: this.props.nBodyAlignment,
				nDelayShowMS: this.delay,
				toolTipContent: this.props.content,
				className: s.MoreInfoIcon,
			},
			n.createElement(
				"div",
				{
					className: s.MoreInfoIconQuestionMark,
				},
				"?",
			),
		);
	}
}
