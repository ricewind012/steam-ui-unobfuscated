import n from "./63696.js";
import i from "./98995.js";
import a from "./39012.js";
const s = a;
export class m extends n.Component {
	delay = this.props.delay || 240;
	render() {
		return (
			<i.m9
				direction={this.props.direction}
				nBodyAlignment={this.props.nBodyAlignment}
				nDelayShowMS={this.delay}
				toolTipContent={this.props.content}
				className={s.MoreInfoIcon}
			>
				<div className={s.MoreInfoIconQuestionMark}>?</div>
			</i.m9>
		);
	}
}
