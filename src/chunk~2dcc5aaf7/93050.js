import n, { useRef } from "./63696.js";
import i from "./50376.js";
import { A } from "./90765.js";
import { lX } from "./31084.js";
import o from "./15334.js";
import c from "./19944.js";
import m, { Qn } from "./72476.js";
import u from "./98995.js";
const l = o;
export function w(e) {
	const {
		className: t,
		label: r,
		tooltip: o,
		noLeftPadding: d,
		showRule: A,
		renderContextMenu: p,
		...g
	} = e;
	const h = Qn();
	const C = useRef(undefined);
	let _ = A(l.SectionHeader, !d && l.PadLeft, t);
	const f = typeof o == "string" ? <u.zQ>{o}</u.zQ> : o;
	return (
		<div className={_} {...g}>
			<div
				className={l.Label}
				onClick={() =>
					p &&
					lX(p(), C.current, {
						bOverlapHorizontal: true,
					})
				}
				ref={C}
			>
				{typeof r == "string" ? <div className={l.LabelText}>{r}</div> : r}
				{o && !h && <c.m direction="right" nBodyAlignment={0} content={f} />}
				{p && (
					<div className={l.Arrow}>
						<i.GB9 />
					</div>
				)}
			</div>
			{A && <div className={l.SectionRule} />}
		</div>
	);
}
