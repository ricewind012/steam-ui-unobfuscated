import r from "./63696.js";
import i from "./83599.js";
import s, { nt, SZ, VX, hr, f, Ro, cR, u8, tV, W1 } from "./20893.js";
const o = new i.wd("GamepadEvents").Debug;
export function Ui(
	e,
	t,
	n = [
		e.onButtonDown,
		e.onButtonUp,
		e.onOKButton,
		e.onCancelButton,
		e.onSecondaryButton,
		e.onOptionsButton,
		e.onMenuButton,
		e.onGamepadDirection,
		e.onGamepadFocus,
		e.onGamepadBlur,
	],
) {
	r.useEffect(() => {
		let t_current = t.current;
		const r = [];
		if (t_current) {
			if (e.onButtonDown) {
				r.push(nt(t_current, e.onButtonDown));
			}
			if (e.onButtonUp) {
				r.push(SZ(t_current, e.onButtonUp));
			}
			if (e.onOKButton) {
				r.push(VX(t_current, e.onOKButton));
			}
			if (e.onCancelButton) {
				r.push(hr(t_current, e.onCancelButton));
			}
			if (e.onSecondaryButton) {
				r.push(f(t_current, e.onSecondaryButton));
			}
			if (e.onOptionsButton) {
				r.push(Ro(t_current, e.onOptionsButton));
			}
			if (e.onMenuButton) {
				r.push(cR(t_current, e.onMenuButton));
			}
			if (e.onGamepadDirection) {
				r.push(u8(t_current, e.onGamepadDirection));
			}
			if (e.onGamepadFocus) {
				r.push(tV(t_current, e.onGamepadFocus));
			}
			if (e.onGamepadBlur) {
				r.push(W1(t_current, e.onGamepadBlur));
			}
		}
		return () => r.forEach((e) => e());
	}, n);
}
function c(e) {
	e.stopPropagation();
	return false;
}
export function KF(e, t, n) {
	const { onButtonDown, ...s } = e;
	const l = r.useCallback(
		(e) => {
			if (onButtonDown) {
				onButtonDown(e);
			}
			o(
				"Gamepad Event fired:",
				e.detail.button,
				", handled:",
				onButtonDown != null,
				", propagation stopped:",
				e.cancelBubble,
			);
			if (!e.cancelBubble) {
				n.OnRootButtonDown(e);
			}
		},
		[onButtonDown, n],
	);
	Ui(s, t);
	Ui(
		{
			onButtonDown: l,
			onButtonUp: c,
			onOKButton: c,
			onCancelButton: c,
			onSecondaryButton: c,
			onOptionsButton: c,
			onMenuButton: c,
			onGamepadDirection: c,
			onGamepadFocus: c,
			onGamepadBlur: c,
		},
		t,
		[l],
	);
}
