import { Cg } from "./34629.js";
import s from "./63696.js";
import o from "./52451.js";
import l, { Gn, fm } from "./89193.js";
import { q3 } from "./90095.js";
import { xv } from "./5822.js";
import u from "./64004.js";
import d from "./72476.js";
import A from "./87935.js";
export let wp;
export let k9;
((e) => {
	e[(e.Menu = 0)] = "Menu";
	e[(e.NavEntries = 1)] = "NavEntries";
	e[(e.Controller = 2)] = "Controller";
})((wp ||= {}));
((e) => {
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
		Gn(this);
		this.m_WindowInstance = e;
	}
	Init() {
		return fm(this.OnRunningAppsChanged);
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
		const { bStreamingToPhone, bStreamingToTablet, bStreamingToTV } =
			u.ut.GetStreamingFormFactors();
		if (bStreamingToPhone) {
			return `${A.B7.GetStoreURL()}remoteplay_phone`;
		} else if (bStreamingToTablet) {
			return `${A.B7.GetStoreURL()}remoteplay_tablet`;
		} else if (bStreamingToTV) {
			return `${A.B7.GetStoreURL()}remoteplay_tv`;
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
	const e = xv();
	return q3(() => e.GetFocusedColumn());
}
export function gn() {
	return DO() != wp.Menu;
}
export function eK() {
	const e = xv();
	return q3(() => e.GetFocusedApp());
}
export function YN(e) {
	const t = xv();
	return s.useCallback(
		(r) => {
			if (r) {
				t.SetFocusedColumn(e);
			}
		},
		[t, e],
	);
}
Cg([l.sH], Pf.prototype, "m_eFocusedColumn", undefined);
Cg([l.sH], Pf.prototype, "m_eSelectedNavEntry", undefined);
Cg([l.sH], Pf.prototype, "m_mapSelectedGuide", undefined);
Cg([l.sH], Pf.prototype, "m_focusedApp", undefined);
Cg([o.oI], Pf.prototype, "OnRunningAppsChanged", null);
