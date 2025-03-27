import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { w } from "./49455.js";
import a from "./17385.js";
export function CO(e) {
	let t = GetOwningWindowForEvent(e);
	w(t, "Couldn't find owning window to determine browser context");
	return _k(t);
}
export function wj(e) {
	let t = e?.ownerDocument?.defaultView;
	w(t, "Couldn't find owning window to determine browser context");
	return _k(t);
}
export function _k(e) {
	let a_m = a.m;
	if (e) {
		w(
			e.__FriendsUIBrowserContext,
			"FriendsUI Browser context missing from owner window",
		);
		if (e.__FriendsUIBrowserContext) {
			a_m = e.__FriendsUIBrowserContext;
		}
	}
	return a_m;
}
export function h8(e) {
	let t = _k(e);
	if (t && t.m_unPID != a.m.m_unPID && t.m_nBrowserID != a.m.m_nBrowserID) {
		return t;
	} else {
		return null;
	}
}
