import n from "./63696.js";
import i from "./6831.js";
import { A } from "./90765.js";
const a = i;
export function H(e) {
	const { onClick } = e;
	const r = n.useCallback(
		(e) => e.currentTarget == e.target && (e.preventDefault(), true),
		[],
	);
	const i = n.useCallback(
		(e) => {
			if (r(e) && onClick) {
				onClick(e);
			}
		},
		[onClick, r],
	);
	let o = e.visible ?? true;
	let l = e.appearance == "darkblur" || e.appearance == "blur";
	let c = e.appearance != "transparent" && e.appearance != "blur";
	let m = A(
		a.BackgroundGlass,
		o && a.Visible,
		l && a.Blur,
		c && a.DrawBackground,
	);
	let u = {
		zIndex: e.zIndex ?? null,
	};
	return (
		<div className={m} style={u} onClick={i} onMouseDown={r} onTouchStart={r}>
			{e.children}
		</div>
	);
}
