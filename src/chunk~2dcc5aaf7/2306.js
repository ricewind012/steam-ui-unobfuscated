import n, { forwardRef } from "./63696.js";
import i from "./64608.js";
import { l9 } from "./5640.js";
import { wT } from "./28934.js";
import o from "./94692.js";
import c, { A } from "./90765.js";
import m from "./69164.js";
const l = o;
export const C = forwardRef((e, t) => {
	const { feature: r, disabled: o, ...l } = e;
	const c = l9(r);
	const m = c !== 0;
	const u = wT();
	return (
		<>
			<i.y4
				ref={t}
				{...l}
				onClick={m && !o ? () => u(c, r) : undefined}
				disabled={m || o}
			/>
		</>
	);
});
export function D(e) {
	const { feature: t, disabled: r, className: o, ...u } = e;
	const d = l9(t);
	const A = d !== 0;
	const p = wT();
	return (
		<i.J0
			{...u}
			focusable={!A}
			className={A(l.ParentalButton, o, A && l.Blocked)}
			disabled={A || r}
		>
			<m.Z
				className={l.ParentalWrapper}
				onActivate={A && !r ? () => p(d, t) : undefined}
			/>
		</i.J0>
	);
}
