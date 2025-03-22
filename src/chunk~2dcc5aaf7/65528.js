var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./52451.js");
var a = require("./3499.js");
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require("./60917.js");
class l {
	m_CMInterface;
	m_bOpenedItem = false;
	m_mapShortcutOverrides = new Map();
	m_mapShortcutNames = new Map();
	constructor() {
		(0, s.Gn)(this);
	}
	Init(e) {
		this.m_CMInterface = e;
		SteamClient.GameSessions.RegisterForScreenshotNotification(
			this.OnScreenshotNotification,
		);
	}
	GetCMInterface() {
		return this.m_CMInterface;
	}
	OnScreenshotNotification(e) {
		if (e.strOperation != "started") {
			if (e.strOperation != "written");
			else {
				const t = (0, a.Kr)(e.details);
				o.Tu.DoScreenshotNotification(t, "#MediaPage_TakeScreenshot");
			}
		} else {
			o.Tu.OnScreenshotStarted();
		}
	}
	SetOpenedItem(e) {
		this.m_bOpenedItem = e;
	}
	IsItemOpen() {
		return this.m_bOpenedItem;
	}
	SetShortcutOverride(e, t) {
		this.m_mapShortcutOverrides.set(e, t);
	}
	GetShortcutOverride(e) {
		return this.m_mapShortcutOverrides.get(e);
	}
	SetShortcutDisplayName(e, t) {
		this.m_mapShortcutNames.set(e, t);
	}
	GetShortcutDisplayName(e) {
		return this.m_mapShortcutNames.get(e);
	}
}
(0, n.Cg)([s.sH], l.prototype, "m_mapShortcutOverrides", undefined);
(0, n.Cg)([s.sH], l.prototype, "m_mapShortcutNames", undefined);
(0, n.Cg)([i.oI], l.prototype, "OnScreenshotNotification", null);
(0, n.Cg)([i.oI], l.prototype, "SetOpenedItem", null);
export const y = new l();
window.screenshotStore = y;
