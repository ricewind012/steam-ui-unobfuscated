// Webpack module ID: 9156

import { wd as CLogger } from "../../src/library/83599.js";
import { CCallbackList } from "../utils/callbackutils/index.js";
import {
	BrowserContext,
	Unregisterable,
} from "../steamclient/steamclient/shared.js";
import { ENotificationPosition } from "../steamclient/steamclient/Overlay.js";
import { bind } from "../utils/bind.js";

const logger = new CLogger("OverlayStore");
class COverlayStore {
	m_mapBrowserInfo = new Map<number, BrowserContext>();
	m_hOverlayBrowserInfoChanged: Unregisterable | null = null;
	m_OnBrowserCreatedCallbacks = new CCallbackList<
		BrowserContext,
		number,
		number,
		number
	>();
	m_OnBrowserClosedCallbacks = new CCallbackList<BrowserContext>();
	m_OnBrowserUpdatedCallbacks = new CCallbackList<
		BrowserContext,
		number,
		number,
		number
	>();
	m_OnNotificationPositionChangedCallbacks = new CCallbackList<
		Parameters<
			typeof SteamClient.Overlay.RegisterForNotificationPositionChanged
		>
	>();

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

	@bind OnOverlayBrowserInfoChanged() {
		SteamClient.Overlay.GetOverlayBrowserInfo()
			.then((vecBrowserinfo) => {
				let mapBrowserInfo = new Map(this.m_mapBrowserInfo);
				for (let pBrowserInfo of vecBrowserinfo) {
					mapBrowserInfo.delete(pBrowserInfo.unPID);
					let context = {
						m_unPID: pBrowserInfo.unPID,
						m_nBrowserID: pBrowserInfo.nBrowserID,
						m_eBrowserType: pBrowserInfo.eBrowserType,
						m_unAppID: pBrowserInfo.appID,
						m_gameID: pBrowserInfo.gameID,
						m_eUIMode: pBrowserInfo.eUIMode,
					};
					let maybeExistingBrowser = this.m_mapBrowserInfo.get(
						pBrowserInfo.unPID,
					);
					if (maybeExistingBrowser) {
						if (maybeExistingBrowser.m_nBrowserID != pBrowserInfo.nBrowserID) {
							this.OverlayBrowserClosed(maybeExistingBrowser);
							this.m_mapBrowserInfo.delete(pBrowserInfo.unPID);
							maybeExistingBrowser = undefined;
						} else {
							this.OverlayBrowserChanged(
								context,
								pBrowserInfo.nScreenWidth,
								pBrowserInfo.nScreenHeight,
								pBrowserInfo.flDisplayScale,
							);
						}
					}
					if (!maybeExistingBrowser) {
						this.m_mapBrowserInfo.set(pBrowserInfo.unPID, context);
						this.OverlayBrowserCreated(
							context,
							pBrowserInfo.nScreenWidth,
							pBrowserInfo.nScreenHeight,
							pBrowserInfo.flDisplayScale,
						);
					}
				}
				mapBrowserInfo.forEach((e, maybe_pid) => {
					this.m_mapBrowserInfo.delete(maybe_pid);
					this.OverlayBrowserClosed(e);
				});
			})
			.catch((e) => {
				logger.Error("Failed to load overlay browser info:", e);
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

	OverlayBrowserCreated(
		browser: BrowserContext,
		x: number,
		y: number,
		unDPI: number,
	) {
		logger.Debug(
			`Creating overlay browser window - pid: ${browser.m_unPID}, browserid: ${browser.m_nBrowserID}, for app ${browser.m_unAppID} at ${x}x${y}, ${unDPI} dpi`,
		);
		this.m_OnBrowserCreatedCallbacks.Dispatch(browser, x, y, unDPI);
	}

	OverlayBrowserClosed(browser: BrowserContext) {
		logger.Debug(
			`Removing overlay browser window - pid: ${browser.m_unPID}, browserid: ${browser.m_nBrowserID}, for app ${browser.m_unAppID}`,
		);
		this.m_OnBrowserClosedCallbacks.Dispatch(browser);
	}

	OverlayBrowserChanged(
		browser: BrowserContext,
		x: number,
		y: number,
		unDPI: number,
	) {
		logger.Debug(
			`Updated overlay browser window - pid: ${browser.m_unPID}, browserid: ${browser.m_nBrowserID}, for app ${browser.m_unAppID} to ${x}x${y}, ${unDPI} dpi `,
		);
		this.m_OnBrowserUpdatedCallbacks.Dispatch(browser, x, y, unDPI);
	}

	@bind OverlayNotificationPositionChanged(
		appid,
		pos: ENotificationPosition,
		horizontalInset: number,
		verticalInset: number,
	) {
		logger.Debug(
			`Updated overlay notification position - appid: ${appid}, position: ${o.WU[pos]}, horizontalInset: ${horizontalInset}, verticalInset: ${verticalInset}`,
		);
		this.m_OnNotificationPositionChangedCallbacks.Dispatch(
			appid,
			pos,
			horizontalInset,
			verticalInset,
		);
	}
}

export const Q = new COverlayStore();
window.overlayStore = Q;
