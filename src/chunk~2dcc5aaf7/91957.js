import n from "./63696.js";
import i from "./64608.js";
import { l9 } from "./5640.js";
import { wT } from "./28934.js";
export function V(e) {
	const { feature, disabled, ...o } = e;
	const l = l9(feature);
	const c = l !== 0;
	const m = wT();
	return (
		<i.d3
			onActivate={c && !disabled ? () => m(l, feature) : undefined}
			{...o}
			disabled={c || disabled}
		/>
	);
}
export function k(e) {
	const { feature, disabled, ...o } = e;
	const l = l9(feature);
	const c = l !== 0;
	const m = wT();
	return (
		<i.gz
			onActivate={c && !disabled ? () => m(l, feature) : undefined}
			{...o}
			disabled={c || disabled}
		/>
	);
}
