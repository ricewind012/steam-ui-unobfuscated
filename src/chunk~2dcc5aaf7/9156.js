import n, { Cg } from "./34629.js";
import i from "./52451.js";
import a from "./83599.js";
import s from "./79769.js";
import o from "./44846.js";
const l = new a.wd("OverlayStore");
class c {
	m_mapBrowserInfo = new Map();
	m_hOverlayBrowserInfoChanged = null;
	m_OnBrowserCreatedCallbacks = new s.lu();
	m_OnBrowserClosedCallbacks = new s.lu();
	m_OnBrowserUpdatedCallbacks = new s.lu();
	m_OnNotificationPositionChangedCallbacks = new s.lu();
	constructor() {}
	Init(e) {
		this.m_hOverlayBrowserInfoChanged =
			SteamClient.Overlay.RegisterOverlayBrowserInfoChanged(
				this.OnOverlayBrowserInfoChanged,
			);
		SteamClient.Overlay.RegisterForNotificationPositionChanged(
			this.OverlayNotificationPositionChanged,
		);
	}
	HasOverlayInstance(e) {
		return this.m_mapBrowserInfo.has(e);
	}
	OnOverlayBrowserInfoChanged() {
		SteamClient.Overlay.GetOverlayBrowserInfo()
			.then((e) => {
				let t = new Map(this.m_mapBrowserInfo);
				for (let r of e) {
					t.delete(r.unPID);
					let e = {
						m_unPID: r.unPID,
						m_nBrowserID: r.nBrowserID,
						m_eBrowserType: r.eBrowserType,
						m_unAppID: r.appID,
						m_gameID: r.gameID,
						m_eUIMode: r.eUIMode,
					};
					let n = this.m_mapBrowserInfo.get(r.unPID);
					if (n) {
						if (n.m_nBrowserID != r.nBrowserID) {
							this.OverlayBrowserClosed(n);
							this.m_mapBrowserInfo.delete(r.unPID);
							n = undefined;
						} else {
							this.OverlayBrowserChanged(
								e,
								r.nScreenWidth,
								r.nScreenHeight,
								r.flDisplayScale,
							);
						}
					}
					if (!n) {
						this.m_mapBrowserInfo.set(r.unPID, e);
						this.OverlayBrowserCreated(
							e,
							r.nScreenWidth,
							r.nScreenHeight,
							r.flDisplayScale,
						);
					}
				}
				t.forEach((e, t) => {
					this.m_mapBrowserInfo.delete(t);
					this.OverlayBrowserClosed(e);
				});
			})
			.catch((e) => {
				l.Error("Failed to load overlay browser info:", e);
			});
	}
	RegisterForBrowserCreated(e) {
		return this.m_OnBrowserCreatedCallbacks.Register(e);
	}
	RegisterForBrowserClosed(e) {
		return this.m_OnBrowserClosedCallbacks.Register(e);
	}
	RegisterForBrowserUpdated(e) {
		return this.m_OnBrowserUpdatedCallbacks.Register(e);
	}
	RegisterForNotificationPositionChanged(e) {
		return this.m_OnNotificationPositionChangedCallbacks.Register(e);
	}
	OverlayBrowserCreated(e, t, r, n) {
		l.Debug(
			`Creating overlay browser window - pid: ${e.m_unPID}, browserid: ${e.m_nBrowserID}, for app ${e.m_unAppID} at ${t}x${r}, ${n} dpi`,
		);
		this.m_OnBrowserCreatedCallbacks.Dispatch(e, t, r, n);
	}
	OverlayBrowserClosed(e) {
		l.Debug(
			`Removing overlay browser window - pid: ${e.m_unPID}, browserid: ${e.m_nBrowserID}, for app ${e.m_unAppID}`,
		);
		this.m_OnBrowserClosedCallbacks.Dispatch(e);
	}
	OverlayBrowserChanged(e, t, r, n) {
		l.Debug(
			`Updated overlay browser window - pid: ${e.m_unPID}, browserid: ${e.m_nBrowserID}, for app ${e.m_unAppID} to ${t}x${r}, ${n} dpi `,
		);
		this.m_OnBrowserUpdatedCallbacks.Dispatch(e, t, r, n);
	}
	OverlayNotificationPositionChanged(e, t, r, n) {
		l.Debug(
			`Updated overlay notification position - appid: ${e}, position: ${o.WU[t]}, horizontalInset: ${r}, verticalInset: ${n}`,
		);
		this.m_OnNotificationPositionChangedCallbacks.Dispatch(e, t, r, n);
	}
}
Cg([i.oI], c.prototype, "OnOverlayBrowserInfoChanged", null);
Cg([i.oI], c.prototype, "OverlayNotificationPositionChanged", null);
export const Q = new c();
window.overlayStore = Q;
