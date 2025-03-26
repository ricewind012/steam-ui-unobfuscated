import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var i = require(/*webcrack:missing*/ "./49455.js");
var a = require(/*webcrack:missing*/ "./17385.js");
export function CO(e) {
	let t = GetOwningWindowForEvent(e);
	(0, i.w)(t, "Couldn't find owning window to determine browser context");
	return _k(t);
}
export function wj(e) {
	let t = e?.ownerDocument?.defaultView;
	(0, i.w)(t, "Couldn't find owning window to determine browser context");
	return _k(t);
}
export function _k(e) {
	let t = a.m;
	if (e) {
		(0, i.w)(
			e.__FriendsUIBrowserContext,
			"FriendsUI Browser context missing from owner window",
		);
		if (e.__FriendsUIBrowserContext) {
			t = e.__FriendsUIBrowserContext;
		}
	}
	return t;
}
export function h8(e) {
	let t = _k(e);
	if (t && t.m_unPID != a.m.m_unPID && t.m_nBrowserID != a.m.m_nBrowserID) {
		return t;
	} else {
		return null;
	}
}
