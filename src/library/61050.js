import { AssertMsg } from "../../actual_src/utils/assert.js";
import r from "./61657.js";
import s from "./20893.js";
import o, { Ze, LU } from "./54102.js";
import a from "./4690.js";
export class kI {
	m_node;
	m_History;
	m_StateHistory;
	constructor(e) {
		this.m_node = e;
	}
	TakeFocus(e) {
		return this.m_node.BTakeFocus(e ? s.D$.GAMEPAD : s.D$.APPLICATION, e);
	}
	ParentTakeFocus(e) {
		this.m_node.Parent?.BTakeFocus(e ? s.D$.GAMEPAD : s.D$.APPLICATION, e);
	}
	ChildTakeFocus(e) {
		return this.m_node.BChildTakeFocus(e ? s.D$.GAMEPAD : s.D$.APPLICATION, e);
	}
	FocusVisibleChild(e) {
		return this.m_node.BVisibleChildTakeFocus(e);
	}
	BHasFocus() {
		return this.m_node.BHasFocus();
	}
	BFocusWithin() {
		return this.m_node.BFocusWithin();
	}
	get NavKey() {
		return this.m_node.NavKey;
	}
	PushState() {
		this.m_History ||= new o.nv(this.m_node);
		this.m_History.PushState();
	}
	PopState(e = 0) {
		if (this.m_History) {
			this.m_History.PopState(e);
		}
	}
	SaveState(e) {
		this.m_StateHistory ||= new o.Gt(this.m_node);
		this.m_StateHistory.SaveState(e);
	}
	RestoreState(e, t = 0) {
		return !!this.m_StateHistory && this.m_StateHistory.RestoreState(e, t);
	}
	GetFocusSnapshot() {
		return Ze(this.m_node);
	}
	RestoreFocusSnapshot(e, t = 0) {
		return LU(this.m_node, e, t);
	}
	NavTree() {
		return this.m_node.Tree;
	}
	Node() {
		return this.m_node;
	}
}
export function UR(e, t, n, r = 0.001) {
	if (e == "x") {
		return t.x + t.width > n.x + r && t.x + r < n.x + n.width;
	} else if (e == "y") {
		return t.y + t.height > n.y + r && t.y + r < n.y + n.height;
	} else {
		AssertMsg(false, `Invalid axis ${e}`);
		return false;
	}
}
export function ix(e, t, n) {
	let r;
	if (e == "x") {
		r = Math.min(t.x + t.width, n.x + n.width) - Math.max(t.x, n.x);
	} else if (e == "y") {
		r = Math.min(t.y + t.height, n.y + n.height) - Math.max(t.y, n.y);
	} else {
		AssertMsg(false, `Invalid axis ${e}`);
		r = 0;
	}
	if (r < 0) {
		return 0;
	} else {
		return r;
	}
}
export function _V(e, t, n) {
	const t_e = t[e];
	const i = ((e, t) => {
		if (e == "x") {
			return {
				min: t.x,
				max: t.x + t.width,
			};
		} else {
			return {
				min: t.y,
				max: t.y + t.height,
			};
		}
	})(e, n);
	if (t_e < i.min) {
		return i.min - t_e;
	} else if (t_e > i.max) {
		return t_e - i.max;
	} else {
		return 0;
	}
}
export function xb(e) {
	return {
		x: e.x,
		y: e.y,
	};
}
export const CZ = {
	OnBlur: () => {},
	OnFocus: () => {},
	OnFocusChange: () => {},
	OnForceMeasureFocusRing: () => {},
};
export function ko(e) {
	if (!e) {
		return a.xj.NONE;
	}
	const t = e.ownerDocument.defaultView;
	const n = t.getComputedStyle(e);
	if (n.display == "flex") {
		switch (n.flexDirection) {
			case "row": {
				if (n.flexWrap == "wrap") {
					return a.xj.GRID;
				} else {
					return a.xj.ROW;
				}
			}
			case "row-reverse": {
				return a.xj.ROW_REVERSE;
			}
			case "column": {
				return a.xj.COLUMN;
			}
			case "column-reverse": {
				return a.xj.COLUMN_REVERSE;
			}
		}
	} else {
		if (n.display == "grid") {
			return a.xj.GRID;
		}
		if (e.childElementCount > 0) {
			const n = t.getComputedStyle(e.firstElementChild);
			if (n.float === "left") {
				return a.xj.ROW;
			}
			if (n.float === "right") {
				return a.xj.ROW_REVERSE;
			}
			if (n.display === "inline" || n.display === "inline-block") {
				return a.xj.GRID;
			}
		}
	}
	return a.xj.COLUMN;
}
export function G4(e) {
	switch (e) {
		case r.pR.DIR_UP:
		case r.pR.DIR_DOWN: {
			return "y";
		}
		case r.pR.DIR_LEFT:
		case r.pR.DIR_RIGHT: {
			return "x";
		}
		default: {
			return;
		}
	}
}
