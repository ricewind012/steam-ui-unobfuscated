import { Cg } from "./34629.js";
import * as i from "./52451.js";
import { Kr } from "./3499.js";
import s, { Gn } from "./89193.js";
import * as o from "./60917.js";
class l {
	m_CMInterface;
	m_bOpenedItem = false;
	m_mapShortcutOverrides = new Map();
	m_mapShortcutNames = new Map();
	constructor() {
		Gn(this);
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
			if (e.strOperation != "written") {
			} else {
				const t = Kr(e.details);
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
Cg([s.sH], l.prototype, "m_mapShortcutOverrides", undefined);
Cg([s.sH], l.prototype, "m_mapShortcutNames", undefined);
Cg([i.oI], l.prototype, "OnScreenshotNotification", null);
Cg([i.oI], l.prototype, "SetOpenedItem", null);
export const y = new l();
window.screenshotStore = y;
