var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./83599.js");
var s = require("./20893.js");
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
		let n = t.current;
		const r = [];
		if (n) {
			if (e.onButtonDown) {
				r.push((0, s.nt)(n, e.onButtonDown));
			}
			if (e.onButtonUp) {
				r.push((0, s.SZ)(n, e.onButtonUp));
			}
			if (e.onOKButton) {
				r.push((0, s.VX)(n, e.onOKButton));
			}
			if (e.onCancelButton) {
				r.push((0, s.hr)(n, e.onCancelButton));
			}
			if (e.onSecondaryButton) {
				r.push((0, s.f)(n, e.onSecondaryButton));
			}
			if (e.onOptionsButton) {
				r.push((0, s.Ro)(n, e.onOptionsButton));
			}
			if (e.onMenuButton) {
				r.push((0, s.cR)(n, e.onMenuButton));
			}
			if (e.onGamepadDirection) {
				r.push((0, s.u8)(n, e.onGamepadDirection));
			}
			if (e.onGamepadFocus) {
				r.push((0, s.tV)(n, e.onGamepadFocus));
			}
			if (e.onGamepadBlur) {
				r.push((0, s.W1)(n, e.onGamepadBlur));
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
	const { onButtonDown: i, ...s } = e;
	const l = r.useCallback(
		(e) => {
			if (i) {
				i(e);
			}
			o(
				"Gamepad Event fired:",
				e.detail.button,
				", handled:",
				i != null,
				", propagation stopped:",
				e.cancelBubble,
			);
			if (!e.cancelBubble) {
				n.OnRootButtonDown(e);
			}
		},
		[i, n],
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
