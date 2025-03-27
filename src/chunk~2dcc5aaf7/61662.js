import n from "./63696.js";
import i from "./15489.js";
import { A } from "./90765.js";
import s from "./22669.js";
export let z = i.z;
const o = s;
export class M extends n.Component {
	render() {
		const { className, blurElement, ...r } = this.props;
		return (
			<div className={A(o.AppDetailsHover, className)} {...r}>
				<div className={o.Background}>
					{blurElement && <div className={o.BlurContainer}>{blurElement}</div>}
				</div>
				{this.props.children}
			</div>
		);
	}
}
