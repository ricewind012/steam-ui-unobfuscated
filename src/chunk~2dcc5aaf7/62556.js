import n, { Cg } from "./34629.js";
import i from "./63696.js";
import a from "./41230.js";
import { A } from "./90765.js";
import o from "./44010.js";
const l = o;
export let p = class extends i.Component {
	static get hoverClass() {
		return l.hoverParent;
	}
	render() {
		const { persona, animating, className, size, dim, ...o } = this.props;
		let c = "";
		if (size == "medium") {
			c = l.Medium;
		} else if (size == "large") {
			c = l.Large;
		}
		return (
			<div
				className={A(
					l.SnoozeContainer,
					persona.online_state,
					className,
					animating && l.animating,
					c,
					dim && l.Dim,
				)}
				{...o}
			>
				<div data-text="Z" className={A(l.SnoozeZ, l.Z1)}>
					Z
				</div>
				<div data-text="Z" className={A(l.SnoozeZ, l.Z2)}>
					Z
				</div>
				<div data-text="Z" className={A(l.SnoozeZ, l.Z3)}>
					Z
				</div>
			</div>
		);
	}
};
p = Cg([a.PA], p);
