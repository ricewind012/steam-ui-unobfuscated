import n from "./63696.js";
import { A } from "./90765.js";
import a, { Zt } from "./7514.js";
import s from "./70150.js";
const o = s;
export function _H(e) {
	const T = Zt("ToggleControl", c);
	return <T {...e} />;
}
function c(e) {
	const { value, onChange, disabled } = e;
	return (
		<div
			className={A(o.Toggle, disabled && o.Disabled)}
			onClick={() => !disabled && onChange && onChange(!value)}
		>
			<div className={o.ToggleRail} />
			<div className={A(o.ToggleRail, o.Highlight, value ? o.On : o.Off)} />
			<div className={A(o.ToggleSwitch, value ? o.On : o.Off)} />
		</div>
	);
}
export const P8 = (e) => {
	const { label, value, onChange, disabled, className } = e;
	return (
		<div className={A(o.ToggleRow, className)}>
			<div className={A(o.Label, disabled && o.Disabled)}>{label}</div>
			<_H value={value} onChange={onChange} disabled={disabled} />
		</div>
	);
};
