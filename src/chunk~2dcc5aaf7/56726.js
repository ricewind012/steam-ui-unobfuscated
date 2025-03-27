import n from "./63696.js";
import i from "./64608.js";
import { A } from "./90765.js";
import s from "./92556.js";
const o = s;
class L extends n.PureComponent {
	render() {
		const { className, ...t } = this.props;
		return (
			<i.$n className={A(o.AppDetailsButton, className)} {...t}>
				{this.props.children}
			</i.$n>
		);
	}
}
export function eJ(e) {
	return <L {...e} />;
}
export function TD(e) {
	const { className, ...r } = e;
	return <L className={A(o.BottomRight, className)} {...r} />;
}
export function bw(e) {
	const { className, ...r } = e;
	return <L className={A(o.Center, className)} {...r} />;
}
export function Po(e) {
	const { className, ...r } = e;
	return <L className={A(o.Left, className)} {...r} />;
}
export function Xs(e) {
	const { className, ...r } = e;
	return <L className={A(o.MoreVisible, className)} {...r} />;
}
