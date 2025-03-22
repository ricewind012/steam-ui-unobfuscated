export var Ez;
export var qE;
var a = require(/*webcrack:missing*/ "./34629.js");
var s = require(/*webcrack:missing*/ "./89193.js");
var o = require(/*webcrack:missing*/ "./90095.js");
var l = require(/*webcrack:missing*/ "./63696.js");
var c = require(/*webcrack:missing*/ "./10975.js");
var m = require("./94361.js");
var u = require("./33572.js");
var d = require("./31144.js");
var A = require("./46422.js");
var p = require("./91703.js");
(function (e) {
	e[(e.None = 0)] = "None";
	e[(e.Main = 1)] = "Main";
	e[(e.QuickAccess = 2)] = "QuickAccess";
})((Ez ||= {}));
(function (e) {
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
		(0, s.Gn)(this);
		this.m_Instance = e;
		this.m_MainMenuStore = new d.Pf(e);
	}
	Init() {
		const e = [];
		e.push((0, s.fm)(() => this.OnSideMenusChanged()));
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
			m.y.ReportTrackedAction("/QuickAccessMenu/" + qE[e]);
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
	const e = (0, u.ch)();
	return (0, o.q3)(() => e.GetQuickAccessTab());
}
export function uT(e, t = true) {
	const r = (0, u.ch)();
	return l.useCallback(() => r.OpenQuickAccessMenu(e, t), [r, e, t]);
}
export function xv() {
	return (0, u.ch)().MainMenuStore;
}
export function EZ() {
	const e = (0, u.ch)();
	l.useEffect(() => e.SetSuppressMenus(), [e]);
	const t = (0, p.K1)();
	l.useEffect(() => {
		t();
	}, [t]);
}
export function QM() {
	return (0, u.ch)().IsSideMenuVisible();
}
export function ED(e = true) {
	const t = (0, u.ch)();
	l.useEffect(() => {
		if (e) {
			return t?.RequestExtendSideMenuVisibility();
		}
	}, [t, e]);
}
(0, a.Cg)([s.sH], QG.prototype, "m_eOpenSideMenu", undefined);
(0, a.Cg)([s.sH], QG.prototype, "m_eLastRequestedSideMenu", undefined);
(0, a.Cg)([s.sH], QG.prototype, "m_eQuickAccessTab", undefined);
(0, a.Cg)(
	[s.sH],
	QG.prototype,
	"m_cSideMenuExtendedVisibilityRequests",
	undefined,
);
(0, a.Cg)([s.XI.bound], QG.prototype, "OpenQuickAccessMenu", null);
