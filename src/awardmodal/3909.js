import * as o from /*webcrack:missing*/ "./63696.js";
import * as a from /*webcrack:missing*/ "./28017.js";
import * as r from /*webcrack:missing*/ "./98995.js";
import * as c from "./91645.js";
var s = c;
import * as i from /*webcrack:missing*/ "./46108.js";
import * as p from /*webcrack:missing*/ "./90765.js";
export class AwardIcon extends o.PureComponent {
	render() {
		const e = (0, i.Yp)(
			"#RewardsReaction_Tooltip",
			this.props.reaction.count || 0,
			(0, a.h)(this.props.reaction.reaction_type),
		);
		return o.createElement(
			r.he,
			{
				className: (0, p.A)(s.InfoContainer, s.IconContainer),
				toolTipContent: e,
			},
			o.createElement("img", {
				className: s.IconImg,
				src: (0, a.e)(this.props.reaction.reaction_type, false),
			}),
			this.props.reaction.count &&
				o.createElement(
					"div",
					{
						className: s.ReactionCount,
					},
					this.props.reaction.count,
				),
		);
	}
}
export class AwardIconList extends o.PureComponent {
	render() {
		let e = [];
		for (const t of this.props.reactions) {
			e.push(
				o.createElement(AwardIcon, {
					key: t.reaction_type,
					reaction: t,
				}),
			);
		}
		return o.createElement(
			"div",
			{
				className: s.IconList,
			},
			e,
		);
	}
}
