export var wp;
export var k9;
var a = require(/*webcrack:missing*/ "./34629.js");
var s = require(/*webcrack:missing*/ "./63696.js");
var o = require(/*webcrack:missing*/ "./52451.js");
var l = require(/*webcrack:missing*/ "./89193.js");
var c = require(/*webcrack:missing*/ "./90095.js");
var m = require("./5822.js");
var u = require("./64004.js");
var d = require(/*webcrack:missing*/ "./72476.js");
var A = require("./87935.js");
(function (e) {
	e[(e.Menu = 0)] = "Menu";
	e[(e.NavEntries = 1)] = "NavEntries";
	e[(e.Controller = 2)] = "Controller";
})((wp ||= {}));
(function (e) {
	e[(e.Achievements = 0)] = "Achievements";
	e[(e.Controller = 1)] = "Controller";
	e[(e.Guides = 2)] = "Guides";
	e[(e.Notes = 3)] = "Notes";
	e[(e.Browser = 4)] = "Browser";
	e[(e.GR = 5)] = "GR";
})((k9 ||= {}));
export class Pf {
	m_eFocusedColumn = wp.Menu;
	m_eSelectedNavEntry = k9.Controller;
	m_mapSelectedGuide = new l.Es();
	m_focusedApp = null;
	m_WindowInstance;
	constructor(e) {
		(0, l.Gn)(this);
		this.m_WindowInstance = e;
	}
	Init() {
		return (0, l.fm)(this.OnRunningAppsChanged);
	}
	OnRunningAppsChanged() {
		if (
			!(
				this.m_WindowInstance.RunningApps.findIndex(
					(e) => e == this.m_focusedApp,
				) >= 0
			)
		) {
			this.m_eFocusedColumn = wp.Menu;
			this.m_focusedApp = null;
		}
	}
	GetRunningApps() {
		return this.m_WindowInstance.RunningApps;
	}
	SetFocusedColumn(e) {
		this.m_eFocusedColumn = e;
	}
	GetFocusedColumn() {
		return this.m_eFocusedColumn;
	}
	SetSelectedNavEntry(e) {
		this.m_eSelectedNavEntry = e;
	}
	GetSelectedNavEntry() {
		return this.m_eSelectedNavEntry;
	}
	SetFocusedApp(e) {
		this.m_focusedApp = e;
	}
	GetFocusedApp() {
		return this.m_focusedApp;
	}
	SetSelectedGuide(e, t) {
		if (t?.length > 0) {
			this.m_mapSelectedGuide.set(e, t);
		} else {
			this.m_mapSelectedGuide.delete(e);
		}
	}
	GetSelectedGuide(e) {
		return this.m_mapSelectedGuide.get(e);
	}
	GetStoreURL(e) {
		const {
			bStreamingToPhone: t,
			bStreamingToTablet: r,
			bStreamingToTV: n,
		} = u.ut.GetStreamingFormFactors();
		if (t) {
			return A.B7.GetStoreURL() + "remoteplay_phone";
		} else if (r) {
			return A.B7.GetStoreURL() + "remoteplay_tablet";
		} else if (n) {
			return A.B7.GetStoreURL() + "remoteplay_tv";
		} else if (e?.IN_VR) {
			return A.B7.GetStoreVRURL();
		} else if (d.TS.ON_DECK) {
			return A.B7.GetStoreGreatOnDeckURL();
		} else {
			return A.B7.GetStoreURL();
		}
	}
}
export function DO() {
	const e = (0, m.xv)();
	return (0, c.q3)(() => e.GetFocusedColumn());
}
export function gn() {
	return DO() != wp.Menu;
}
export function eK() {
	const e = (0, m.xv)();
	return (0, c.q3)(() => e.GetFocusedApp());
}
export function YN(e) {
	const t = (0, m.xv)();
	return s.useCallback(
		(r) => {
			if (r) {
				t.SetFocusedColumn(e);
			}
		},
		[t, e],
	);
}
(0, a.Cg)([l.sH], Pf.prototype, "m_eFocusedColumn", undefined);
(0, a.Cg)([l.sH], Pf.prototype, "m_eSelectedNavEntry", undefined);
(0, a.Cg)([l.sH], Pf.prototype, "m_mapSelectedGuide", undefined);
(0, a.Cg)([l.sH], Pf.prototype, "m_focusedApp", undefined);
(0, a.Cg)([o.oI], Pf.prototype, "OnRunningAppsChanged", null);
