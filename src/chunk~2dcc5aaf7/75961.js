import n from "./63696.js";
import { VI } from "./34792.js";
import { hf } from "./72476.js";
import s from "./13897.js";
export function X(e) {
	const { setting, onChange, visible = true, feature, ...c } = e;
	const [m, u] = VI(setting);
	const d = hf();
	if (visible) {
		return (
			<s.B
				feature={feature}
				{...c}
				selectedOption={m}
				onChange={(e, t) => {
					u(e.data);
					if (onChange) {
						onChange(e, t);
					}
				}}
				contextMenuPositionOptions={{
					bMatchWidth: !d,
				}}
			/>
		);
	} else {
		return null;
	}
}
