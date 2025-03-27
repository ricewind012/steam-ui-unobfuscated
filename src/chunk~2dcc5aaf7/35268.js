import n, { Tc } from "./72476.js";
export class f {
	m_HomeView;
	BHasHomeView() {
		return Boolean(this.m_HomeView);
	}
	GetHomeView() {
		return this.m_HomeView?.home;
	}
	static s_globalSingletonStore;
	static Get() {
		if (!f.s_globalSingletonStore) {
			f.s_globalSingletonStore = new f();
			if (n.TS.WEB_UNIVERSE == "dev") {
				window.g_HomeViewSetting = f.s_globalSingletonStore;
			}
		}
		return f.s_globalSingletonStore;
	}
	constructor() {
		if (n.TS.WEB_UNIVERSE === "dev") {
			window.g_HomeViewStore = this;
		}
		const e = Tc("home_view_setting", "application_config");
		if (this.ValidateHomeViewData(e)) {
			this.SetHomeViewSetting(e);
		}
		const t = Tc("home_view_setting_override", "application_config");
		if (this.ValidateHomeViewDataOverride(t)) {
			this.SetHomeViewSettingOverride(t);
		}
	}
	ValidateHomeViewData(e) {
		const t = e;
		return t && typeof t.home == "object" && typeof t.main_cluster == "object";
	}
	SetHomeViewSetting(e) {
		this.m_HomeView = e;
	}
	ValidateHomeViewDataOverride(e) {
		const t = e;
		return (
			t &&
			(!t.all || typeof t.all == "object") &&
			(!t.maincap || typeof t.maincap == "object")
		);
	}
	SetHomeViewSettingOverride(e) {
		this.m_HomeView.home = {
			...this.m_HomeView.home,
			...e?.all,
			...e?.maincap,
		};
	}
}
