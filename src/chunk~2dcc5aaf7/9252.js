import n from "./63696.js";
import { $2 } from "./96680.js";
import { q3 } from "./90095.js";
import s from "./83599.js";
import o from "./94496.js";
import l, { rP } from "./72476.js";
export const Ad = new s.wd("ToastManager");
export const a5 = Ad.Debug;
Ad.Info;
export const uH = Ad.Warning;
export const Tj = new s.wd("ToastMovement").Debug;
export function W_(e) {
	return e.map((e) => e.notificationID);
}
export function OU(e) {
	const t = rP();
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
	const t = $2();
	let r = q3(() => {
		if (!e) {
			return o.iP.GetDefaultMonitorDimensions();
		}
		let t_params = t.params;
		let n = {
			m_nLeft: 0,
			m_nTop: 0,
			m_nWidth: t_params.nScreenWidth,
			m_nHeight: t_params.nScreenHeight,
		};
		return {
			m_usable: n,
			m_full: n,
			m_flDPI: t_params.flDisplayScale,
		};
	});
	const { m_usable, m_full, m_flDPI } = r;
	return n.useMemo(
		() => ({
			m_usable: {
				m_nLeft: m_usable.m_nLeft,
				m_nTop: m_usable.m_nTop,
				m_nWidth: m_usable.m_nWidth,
				m_nHeight: m_usable.m_nHeight,
			},

			m_full: {
				m_nLeft: m_full.m_nLeft,
				m_nTop: m_full.m_nTop,
				m_nWidth: m_full.m_nWidth,
				m_nHeight: m_full.m_nHeight,
			},

			m_flDPI: m_flDPI,
		}),
		[
			m_usable.m_nLeft,
			m_usable.m_nTop,
			m_usable.m_nWidth,
			m_usable.m_nHeight,
			m_full.m_nLeft,
			m_full.m_nTop,
			m_full.m_nWidth,
			m_full.m_nHeight,
			m_flDPI,
		],
	);
}
