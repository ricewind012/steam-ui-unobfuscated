import r from "./20893.js";
import i from "./61657.js";
import s from "./4690.js";
export function W7(e) {
	return !!e.is_repeat;
}
export function s1(e) {
	return (t) => {
		if (t.currentTarget == t.target) {
			return false;
		}
		switch (t.detail.button) {
			case i.pR.DIR_UP: {
				return !!e.bPreventMovementUp;
			}
			case i.pR.DIR_RIGHT: {
				return !!e.bPreventMovementRight;
			}
			case i.pR.DIR_DOWN: {
				return !!e.bPreventMovementDown;
			}
			case i.pR.DIR_LEFT: {
				return !!e.bPreventMovementLeft;
			}
			default: {
				return false;
			}
		}
	};
}
export const _k = Object.seal({
	onMoveUp: u,
	onMoveDown: u,
});
export const C3 = Object.seal({
	onMoveRight: u,
	onMoveLeft: u,
});
function u(e, t) {
	if (e.is_repeat) {
		return false;
	}
	const n = t.GetRelativeDirection(e.button);
	if (n == s.$C.FORWARD) {
		return t.BFocusFirstChild(r.D$.GAMEPAD);
	} else {
		return n == s.$C.BACKWARD && t.BFocusLastChild(r.D$.GAMEPAD);
	}
}
export function ru() {
	return true;
}
export function Nw(e) {
	return e.Element.checkVisibility();
}
