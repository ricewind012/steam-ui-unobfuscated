// Webpack module ID: TODO

import { observable, makeAutoObservable } from "mobx";
import { useObserver } from "mobx-react-lite";
import { a5 as toastMgrLogger } from "../../src/chunk~2dcc5aaf7/9252.js";
import { wd } from "../../src/library/83599.js";
import { bind } from "../utils/bind.js";
import { action } from "mobx";

const logger = new wd("OSWindows").Debug;

class CFocusedAppWindowStore {
	@observable m_unFocusedAppID = 0;
	@observable m_nFocusedWindowID = 0;
	@observable m_unFocusedOverlayAppID = 0;
	@observable m_unFocusedOverlayPID = 0;
	@observable m_defaultMonitor = {
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
		makeAutoObservable(this);
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

	@action OnFocusChangeEvent(evt) {
		logger("Focused App Window", evt.focusedApp.appid, evt.focusedApp.windowid);
		this.m_unFocusedAppID = evt.focusedApp.appid;
		this.m_nFocusedWindowID = evt.focusedApp.windowid;
	}

	@action OnOverlayGameWindowFocusChanged(
		unFocusedOverlayAppID: number,
		unFocusedOverlayPID: number,
	) {
		logger(
			"Focused Overlay Window",
			unFocusedOverlayAppID,
			unFocusedOverlayPID,
		);
		this.m_unFocusedOverlayAppID = unFocusedOverlayAppID;
		this.m_unFocusedOverlayPID = unFocusedOverlayPID;
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

	@bind OnMessage(e) {
		if (e.data == "display_changed") {
			this.QueryDefaultMonitorDimensions();
		}
	}

	@bind QueryDefaultMonitorDimensions() {
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
			let monitor = this.m_defaultMonitor;
			let msg = `Default Monitor dimensions [usableWidth=${monitor.m_usable.m_nWidth}][usableHeight=${monitor.m_usable.m_nHeight}][fullWidth=${monitor.m_full.m_nWidth}][fullHeight=${monitor.m_full.m_nHeight}][horizontalScale=${e.flHorizontalScale}][verticalScale=${e.flVerticalScale}]`;
			toastMgrLogger(msg);
			logger(msg);
		});
	}
}

export const iP = new CFocusedAppWindowStore();
export function b_() {
	return useObserver(() => iP.GetFocusedOverlayAppID());
}
window.FocusedAppWindowStore = iP;
