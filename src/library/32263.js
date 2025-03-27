import r from "./63696.js";
import { A } from "./90765.js";
import s from "./24892.js";
const o = s;
export const MenuItem = r.forwardRef((props, ref) => {
	const { className, contextMenuStyles, disabled, ...c } = props;
	return (
		<div
			{...c}
			ref={ref}
			className={A(
				className,
				(contextMenuStyles || o).contextMenuItem,
				"contextMenuItem",
				disabled && "disabled",
			)}
		/>
	);
});
export function n(e) {
	const { bChecked, children, className, ...o } = e;
	return (
		<MenuItem {...o} className={A(className, bChecked && "menuChecked")}>
			<div className="contextMenuCheckMark" />
			{children}
		</MenuItem>
	);
}
MenuItem.displayName = "MenuItem";
