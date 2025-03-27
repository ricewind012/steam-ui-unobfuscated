import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
import a from "./17385.js";
export function CO(e) {
	let t = GetOwningWindowForEvent(e);
	AssertMsg(t, "Couldn't find owning window to determine browser context");
	return _k(t);
}
export function wj(e) {
	let t = e?.ownerDocument?.defaultView;
	AssertMsg(t, "Couldn't find owning window to determine browser context");
	return _k(t);
}
export function _k(e) {
	let a_m = a.m;
	if (e) {
		AssertMsg(
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
