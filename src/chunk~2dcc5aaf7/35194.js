import { MoveElement } from "../../actual_src/utils/arrayutils.js";
import { VD, CI, uV } from "./32700.js";
import { SubscribableValue } from "../../actual_src/utils/callbackutils";
import s from "./33512.js";
import { qt } from "./34792.js";
function l(e) {
	let t = e.Steam_Language_Selection_Label ?? "Select a language";
	return {
		strWelcome: e.Steam_Welcome ?? "Welcome",
		strSelect: t,
	};
}
export const o = new (class {
	m_strCurrentLanguage = SubscribableValue("");
	m_rgLanguages = SubscribableValue([]);
	m_rgWelcomeText = SubscribableValue([]);
	m_strCurrentTimeZoneID = SubscribableValue("");
	m_rgTimeZones = SubscribableValue([]);
	m_bTestModeEnabled = SubscribableValue(false);
	m_eRebootToFactoryTestImageResult = SubscribableValue(null);
	m_bTestOOBESetupInProgress = SubscribableValue(false);
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
			MoveElement(t, r, 0);
		}
		let a = await Promise.all(t.map((e) => VD(e.strShortName)));
		let s = await Promise.all(t.map((e) => CI(e.strShortName)));
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
		await uV(e.strShortName);
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
			qt("force_oobe", false);
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
