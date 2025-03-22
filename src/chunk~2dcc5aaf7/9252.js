var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./96680.js");
var a = require(/*webcrack:missing*/ "./90095.js");
var s = require(/*webcrack:missing*/ "./83599.js");
var o = require("./94496.js");
var l = require(/*webcrack:missing*/ "./72476.js");
export const Ad = new s.wd("ToastManager");
export const a5 = Ad.Debug;
Ad.Info;
export const uH = Ad.Warning;
export const Tj = new s.wd("ToastMovement").Debug;
export function W_(e) {
	return e.map((e) => e.notificationID);
}
export function OU(e) {
	const t = (0, l.rP)();
	if (e) {
		return `(overlay ${e})`;
	} else if (t.IN_VR) {
		return "(vr)";
	} else if (t.IN_GAMEPADUI) {
		return "(gamepadui)";
	} else {
		return "(desktop)";
	}
}
export function $v(e) {
	let t = [];
	t.push(e.bFocusedLocation ? "focused" : "not focused location");
	if (e.bDropNotifications) {
		t.push("drop notification");
	}
	if (e.bKeyboardVisible) {
		t.push("keyboard");
	}
	if (e.bOtherLocationRendering) {
		t.push("other");
	}
	if (e.bWaitingForDurationControlInit) {
		t.push("duration control");
	}
	return `(${t.join(", ")})`;
}
export function hi(e) {
	const t = (0, i.$2)();
	let r = (0, a.q3)(() => {
		if (!e) {
			return o.iP.GetDefaultMonitorDimensions();
		}
		let r = t.params;
		let n = {
			m_nLeft: 0,
			m_nTop: 0,
			m_nWidth: r.nScreenWidth,
			m_nHeight: r.nScreenHeight,
		};
		return {
			m_usable: n,
			m_full: n,
			m_flDPI: r.flDisplayScale,
		};
	});
	const { m_usable: s, m_full: l, m_flDPI: c } = r;
	return n.useMemo(
		() => ({
			m_usable: {
				m_nLeft: s.m_nLeft,
				m_nTop: s.m_nTop,
				m_nWidth: s.m_nWidth,
				m_nHeight: s.m_nHeight,
			},
			m_full: {
				m_nLeft: l.m_nLeft,
				m_nTop: l.m_nTop,
				m_nWidth: l.m_nWidth,
				m_nHeight: l.m_nHeight,
			},
			m_flDPI: c,
		}),
		[
			s.m_nLeft,
			s.m_nTop,
			s.m_nWidth,
			s.m_nHeight,
			l.m_nLeft,
			l.m_nTop,
			l.m_nWidth,
			l.m_nHeight,
			c,
		],
	);
}
