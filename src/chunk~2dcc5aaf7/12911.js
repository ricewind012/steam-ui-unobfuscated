import n from "./63696.js";
import { A } from "./90765.js";
import a from "./87441.js";
export function k(e) {
	const { size, color, trackColor } = e;
	const o = {
		borderColor: trackColor,
		borderLeftColor: color,
	};
	if (typeof size == "number") {
		const e = `${size}px`;
		o.width = e;
		o.height = e;
		o.minHeight = e;
		o.minWidth = e;
		o.borderWidth = `${size / 10}px`;
	}
	return (
		<div
			className={A(
				a.Loading,
				size == "small" && a.Small,
				(size == "medium" || !size) && a.Medium,
				size == "large" && a.Large,
			)}
			style={o}
		/>
	);
}
