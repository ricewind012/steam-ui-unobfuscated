import { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import { a5 } from "./9252.js";
import o from "./83599.js";
import l from "./52451.js";
const c = new o.wd("OSWindows").Debug;
class m {
	m_unFocusedAppID = 0;
	m_nFocusedWindowID = 0;
	m_unFocusedOverlayAppID = 0;
	m_unFocusedOverlayPID = 0;
	m_defaultMonitor = {
		m_usable: {
			m_nLeft: 0,
			m_nTop: 0,
			m_nWidth: 0,
			m_nHeight: 0,
		},
		m_full: {
			m_nLeft: 0,
			m_nTop: 0,
			m_nWidth: 0,
			m_nHeight: 0,
		},
		m_flDPI: 0,
	};
	constructor() {
		Gn(this);
	}
	Init() {
		SteamClient.System.UI.RegisterForFocusChangeEvents(this.OnFocusChangeEvent);
		SteamClient.System.UI.RegisterForOverlayGameWindowFocusChanged(
			this.OnOverlayGameWindowFocusChanged,
		);
		window.addEventListener("message", this.OnMessage);
		this.QueryDefaultMonitorDimensions();
	}
	Shutdown() {
		window.removeEventListener("message", this.OnMessage);
	}
	OnFocusChangeEvent(e) {
		c("Focused App Window", e.focusedApp.appid, e.focusedApp.windowid);
		this.m_unFocusedAppID = e.focusedApp.appid;
		this.m_nFocusedWindowID = e.focusedApp.windowid;
	}
	OnOverlayGameWindowFocusChanged(e, t) {
		c("Focused Overlay Window", e, t);
		this.m_unFocusedOverlayAppID = e;
		this.m_unFocusedOverlayPID = t;
	}
	GetFocusedAppID() {
		return this.m_unFocusedAppID;
	}
	GetFocusedWindowID() {
		return this.m_nFocusedWindowID;
	}
	GetFocusedOverlayAppID() {
		return this.m_unFocusedOverlayAppID;
	}
	GetFocusedOverlayPID() {
		return this.m_unFocusedOverlayPID;
	}
	GetDefaultMonitorDimensions() {
		return this.m_defaultMonitor;
	}
	OnMessage(e) {
		if (e.data == "display_changed") {
			this.QueryDefaultMonitorDimensions();
		}
	}
	QueryDefaultMonitorDimensions() {
		SteamClient.Window.GetDefaultMonitorDimensions().then((e) => {
			this.m_defaultMonitor = {
				m_usable: {
					m_nLeft: Math.round(e.nUsableLeft / e.flHorizontalScale),
					m_nTop: Math.round(e.nUsableTop / e.flVerticalScale),
					m_nWidth: Math.ceil(e.nUsableWidth / e.flHorizontalScale),
					m_nHeight: Math.ceil(e.nUsableHeight / e.flVerticalScale),
				},
				m_full: {
					m_nLeft: Math.round(e.nFullLeft / e.flHorizontalScale),
					m_nTop: Math.round(e.nFullTop / e.flVerticalScale),
					m_nWidth: Math.ceil(e.nFullWidth / e.flHorizontalScale),
					m_nHeight: Math.ceil(e.nFullHeight / e.flVerticalScale),
				},
				m_flDPI: e.flHorizontalScale,
			};
			let t = this.m_defaultMonitor;
			let r = `Default Monitor dimensions [usableWidth=${t.m_usable.m_nWidth}][usableHeight=${t.m_usable.m_nHeight}][fullWidth=${t.m_full.m_nWidth}][fullHeight=${t.m_full.m_nHeight}][horizontalScale=${e.flHorizontalScale}][verticalScale=${e.flVerticalScale}]`;
			a5(r);
			c(r);
		});
	}
}
Cg([i.sH], m.prototype, "m_unFocusedAppID", undefined);
Cg([i.sH], m.prototype, "m_nFocusedWindowID", undefined);
Cg([i.sH], m.prototype, "m_unFocusedOverlayAppID", undefined);
Cg([i.sH], m.prototype, "m_unFocusedOverlayPID", undefined);
Cg([i.sH], m.prototype, "m_defaultMonitor", undefined);
Cg([i.XI.bound], m.prototype, "OnFocusChangeEvent", null);
Cg([i.XI.bound], m.prototype, "OnOverlayGameWindowFocusChanged", null);
Cg([l.oI], m.prototype, "OnMessage", null);
Cg([l.oI], m.prototype, "QueryDefaultMonitorDimensions", null);
export const iP = new m();
export function b_() {
	return q3(() => iP.GetFocusedOverlayAppID());
}
window.FocusedAppWindowStore = iP;
