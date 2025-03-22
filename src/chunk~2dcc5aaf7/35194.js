var n = require(/*webcrack:missing*/ "./53833.js");
var i = require("./32700.js");
var a = require(/*webcrack:missing*/ "./79769.js");
var s = require("./33512.js");
var _o = require("./34792.js");
function l(e) {
	let t = e.Steam_Language_Selection_Label ?? "Select a language";
	return {
		strWelcome: e.Steam_Welcome ?? "Welcome",
		strSelect: t,
	};
}
export const o = new (class {
	m_strCurrentLanguage = (0, a.Jc)("");
	m_rgLanguages = (0, a.Jc)([]);
	m_rgWelcomeText = (0, a.Jc)([]);
	m_strCurrentTimeZoneID = (0, a.Jc)("");
	m_rgTimeZones = (0, a.Jc)([]);
	m_bTestModeEnabled = (0, a.Jc)(false);
	m_eRebootToFactoryTestImageResult = (0, a.Jc)(null);
	m_bTestOOBESetupInProgress = (0, a.Jc)(false);
	async Init() {
		this.LoadLanguageScreenData();
		this.LoadTimezoneData();
		this.LoadOptions();
	}
	async LoadLanguageScreenData() {
		let e = await SteamClient.Settings.GetCurrentLanguage();
		let t = await SteamClient.Settings.GetAvailableLanguages();
		let r = t.findIndex((e) => e.language == 0);
		if (r > 0) {
			n.yY(t, r, 0);
		}
		let a = await Promise.all(t.map((e) => (0, i.VD)(e.strShortName)));
		let s = await Promise.all(t.map((e) => (0, i.CI)(e.strShortName)));
		let o = a.map(l);
		for (let e = 0; e < t.length; e++) {
			let r = `Language_${t[e].strShortName}`;
			let n = s[e][r];
			t[e].strLocalizedName = n;
		}
		this.m_strCurrentLanguage.Set(e);
		this.m_rgLanguages.Set(t);
		this.m_rgWelcomeText.Set(o);
	}
	async LoadTimezoneData() {
		let e = await SteamClient.Settings.GetTimeZone();
		let t = await SteamClient.Settings.GetAvailableTimeZones();
		this.m_strCurrentTimeZoneID.Set(e);
		this.m_rgTimeZones.Set(t);
	}
	async LoadOptions() {
		let e = await SteamClient.Settings.GetOOBETestMode();
		this.m_bTestModeEnabled.Set(e);
	}
	get CurrentLanguage() {
		return this.m_strCurrentLanguage;
	}
	async SetCurrentLanguage(e) {
		SteamClient.Settings.SetCurrentLanguage(e.strShortName);
		await (0, i.uV)(e.strShortName);
		this.m_strCurrentLanguage.Set(e.strShortName);
	}
	get AvailableLanguages() {
		return this.m_rgLanguages;
	}
	get WelcomeText() {
		return this.m_rgWelcomeText;
	}
	get CurrentTimeZoneID() {
		return this.m_strCurrentTimeZoneID;
	}
	SetCurrentTimeZoneID(e) {
		SteamClient.Settings.SetTimeZone(e);
		this.m_strCurrentTimeZoneID.Set(e);
	}
	get AvailableTimeZones() {
		return this.m_rgTimeZones;
	}
	get bTestModeEnabled() {
		return this.m_bTestModeEnabled;
	}
	get eRebootToFactoryTestImageResult() {
		return this.m_eRebootToFactoryTestImageResult;
	}
	get bTestOOBESetupInProgress() {
		return this.m_bTestOOBESetupInProgress;
	}
	SetTestModeEnabled(e) {
		SteamClient.Settings.SetOOBETestMode(e);
		this.m_bTestModeEnabled.Set(e);
	}
	async TriggerTestOOBE(e) {
		this.m_bTestOOBESetupInProgress.Set(true);
		const t = await SteamClient.System.RebootToFactoryTestImage(e);
		this.m_eRebootToFactoryTestImageResult.Set(t.result);
		if (t.result == 1) {
			this.SetTestModeEnabled(true);
			(0, _o.qt)("force_oobe", false);
			if (e) {
				await s.b.RemoveAllUsers();
			}
			SteamClient.System.RestartPC();
		}
		this.m_bTestOOBESetupInProgress.Set(false);
		return t;
	}
	SetOOBEComplete() {
		if (this.bTestModeEnabled.Value) {
			this.SetTestModeEnabled(false);
		}
		console.warn("OOBE: completed");
		SteamClient.User.SetOOBEComplete();
	}
})();
