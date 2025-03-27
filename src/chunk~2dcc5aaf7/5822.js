import { Cg } from "./34629.js";
import s, { Gn, fm } from "./89193.js";
import { q3 } from "./90095.js";
import l from "./63696.js";
import c from "./10975.js";
import m from "./94361.js";
import { ch } from "./33572.js";
import d from "./31144.js";
import A from "./46422.js";
import { K1 } from "./91703.js";
export let Ez;
export let qE;
((e) => {
	e[(e.None = 0)] = "None";
	e[(e.Main = 1)] = "Main";
	e[(e.QuickAccess = 2)] = "QuickAccess";
})((Ez ||= {}));
((e) => {
	e[(e.Notifications = 0)] = "Notifications";
	e[(e.RemotePlayTogetherControls = 1)] = "RemotePlayTogetherControls";
	e[(e.VoiceChat = 2)] = "VoiceChat";
	e[(e.Friends = 3)] = "Friends";
	e[(e.Settings = 4)] = "Settings";
	e[(e.Perf = 5)] = "Perf";
	e[(e.Help = 6)] = "Help";
	e[(e.Soundtrack = 7)] = "Soundtrack";
})((qE ||= {}));
export class QG {
	m_cSuppressRequests = 0;
	m_eOpenSideMenu = Ez.None;
	m_eLastRequestedSideMenu = Ez.None;
	m_eQuickAccessTab = qE.Settings;
	m_cSideMenuExtendedVisibilityRequests = 0;
	m_MainMenuStore;
	m_Instance;
	constructor(e) {
		Gn(this);
		this.m_Instance = e;
		this.m_MainMenuStore = new d.Pf(e);
	}
	Init() {
		const e = [];
		e.push(fm(() => this.OnSideMenusChanged()));
		e.push(this.m_MainMenuStore.Init());
		if (this.m_Instance.IsVRWindow()) {
			this.m_eQuickAccessTab = qE.Friends;
		}
		return e;
	}
	OnSideMenusChanged() {
		this.m_Instance.SetStoreBrowserGlass(this.m_eOpenSideMenu);
	}
	get MainMenuStore() {
		return this.m_MainMenuStore;
	}
	GetOpenSideMenu() {
		return this.m_eOpenSideMenu;
	}
	GetLastRequestedSideMenu() {
		return this.m_eLastRequestedSideMenu;
	}
	GetQuickAccessTab() {
		return this.m_eQuickAccessTab;
	}
	OpenSideMenu(e) {
		if (!this.m_Instance.IsVRWindow()) {
			if (this.m_cSuppressRequests > 0) {
				console.info("Ignoring request to open side menu. Reason: suppressed");
			} else if (this.m_eOpenSideMenu != e) {
				this.m_eOpenSideMenu = e;
				this.m_eLastRequestedSideMenu = e;
				if (e != Ez.None) {
					A.oy.GamepadUIAudio.PlayNavSound(c.PN.OpenSideMenu);
				} else {
					A.oy.GamepadUIAudio.PlayNavSound(c.PN.CloseSideMenu);
				}
			}
		}
	}
	ClearLastRequestedSideMenu() {
		this.m_eLastRequestedSideMenu = Ez.None;
	}
	OpenQuickAccessMenu(e, t = true) {
		if (this.m_eQuickAccessTab != e) {
			m.y.ReportTrackedAction(`/QuickAccessMenu/${qE[e]}`);
			this.m_eQuickAccessTab = e;
		}
		if (t) {
			this.OpenSideMenu(Ez.QuickAccess);
		}
	}
	OpenMainMenu() {
		return this.OpenSideMenu(Ez.Main);
	}
	CloseSideMenus() {
		if (this.m_eOpenSideMenu != Ez.None) {
			this.m_eOpenSideMenu = Ez.None;
			A.oy.GamepadUIAudio.PlayNavSound(c.PN.CloseSideMenu);
		}
	}
	ToggleSideMenu(e, t = this.m_eOpenSideMenu != e) {
		if (t) {
			if (this.GetOpenSideMenu() != e) {
				this.OpenSideMenu(e);
			}
		} else if (this.GetOpenSideMenu() == e) {
			this.CloseSideMenus();
		}
	}
	OnMenuDeactivated(e) {
		if (this.GetOpenSideMenu() == e) {
			this.CloseSideMenus();
		}
	}
	SetSuppressMenus() {
		this.m_cSuppressRequests++;
		this.CloseSideMenus();
		return () => this.m_cSuppressRequests--;
	}
	IsSideMenuInteractable() {
		return this.m_eOpenSideMenu != Ez.None;
	}
	IsSideMenuVisible() {
		return (
			this.m_eOpenSideMenu != Ez.None ||
			this.m_cSideMenuExtendedVisibilityRequests > 0
		);
	}
	RequestExtendSideMenuVisibility() {
		this.m_cSideMenuExtendedVisibilityRequests++;
		return () => this.m_cSideMenuExtendedVisibilityRequests--;
	}
}
export function i4() {
	const e = ch();
	return q3(() => e.GetQuickAccessTab());
}
export function uT(e, t = true) {
	const r = ch();
	return l.useCallback(() => r.OpenQuickAccessMenu(e, t), [r, e, t]);
}
export function xv() {
	return ch().MainMenuStore;
}
export function EZ() {
	const e = ch();
	l.useEffect(() => e.SetSuppressMenus(), [e]);
	const t = K1();
	l.useEffect(() => {
		t();
	}, [t]);
}
export function QM() {
	return ch().IsSideMenuVisible();
}
export function ED(e = true) {
	const t = ch();
	l.useEffect(() => {
		if (e) {
			return t?.RequestExtendSideMenuVisibility();
		}
	}, [t, e]);
}
Cg([s.sH], QG.prototype, "m_eOpenSideMenu", undefined);
Cg([s.sH], QG.prototype, "m_eLastRequestedSideMenu", undefined);
Cg([s.sH], QG.prototype, "m_eQuickAccessTab", undefined);
Cg([s.sH], QG.prototype, "m_cSideMenuExtendedVisibilityRequests", undefined);
Cg([s.XI.bound], QG.prototype, "OpenQuickAccessMenu", null);
