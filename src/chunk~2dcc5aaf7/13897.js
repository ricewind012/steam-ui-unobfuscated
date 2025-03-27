import n from "./63696.js";
import i from "./64608.js";
import { l9 } from "./5640.js";
import { wT } from "./28934.js";
import o from "./69164.js";
export function B(e) {
	const { feature, disabled, ...o } = e;
	const l = l9(feature);
	const c = l !== 0;
	const m = wT();
	return (
		<i.Vb
			disabled={c || disabled}
			onActivate={c && !disabled ? () => m(l, feature) : undefined}
			{...o}
		/>
	);
}
export function I(e) {
	const { feature, disabled, ...l } = e;
	const c = l9(feature);
	const m = c !== 0;
	const u = wT();
	return (
		<o.Z onActivate={m && !disabled ? () => u(c, feature) : undefined}>
			<i.ZU disabled={m || disabled} {...l} />
		</o.Z>
	);
}
