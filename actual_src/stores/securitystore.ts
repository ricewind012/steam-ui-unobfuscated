// Webpack module ID: 56970

import { g as CStorage_Machine } from "./52698.js";
import { makeAutoObservable } from "mobx";
import { useObserver } from "mobx-react-lite";
import { bind } from "../utils/bind.js";
import { qw as GetSteamUIApp } from "./89748.js";

interface LockScreenSettings_t {
	version: 1 | 2;
	bLockOnWake: boolean;
	bLockOnLogin: boolean;
	bLockDesktopMode: boolean;
	strPIN: string;
	strOwnerAccountName: string;
	bUserForgotPin: boolean;
	bShowResetPinModal: boolean;
}

const k_strLockScreenStorageKey = "LockScreenSettings";

const DefaultLockScreenSettings: LockScreenSettings_t = {
	version: 1,
	bLockOnWake: false,
	bLockOnLogin: false,
	bLockDesktopMode: false,
	strPIN: "",
	strOwnerAccountName: "",
	bUserForgotPin: false,
	bShowResetPinModal: false,
};

class CSecurityStore {
	constructor() {
		makeAutoObservable(this);
	}

	m_MachineStorage;
	m_Settings: LockScreenSettings_t = undefined;
	m_ActiveLockScreenProps = undefined;
	m_bLockTicket = false;

	async Init() {
		this.m_MachineStorage = new CStorage_Machine();
		this.m_ActiveLockScreenProps = null;
		return this.m_MachineStorage
			.GetObject(k_strLockScreenStorageKey)
			.then((data: LockScreenSettings_t) => {
				this.m_Settings = data || DefaultLockScreenSettings;
			});
	}

	@bind SetSettings(data: LockScreenSettings_t) {
		this.m_MachineStorage.StoreObject(k_strLockScreenStorageKey, data);
		this.m_Settings = data;
	}

	GetSettings() {
		return this.m_Settings;
	}

	@bind SetActiveLockScreenProps(e) {
		if (
			!e ||
			!this.IsLockScreenActive() ||
			!this.IsLockScreenActive() ||
			!this.m_ActiveLockScreenProps.preventCancel
		) {
			this.m_ActiveLockScreenProps = e;
		}
	}

	GetActiveLockScreenProps() {
		if (this.BResettingPIN() && !GetSteamUIApp().BHasCurrentUser()) {
			return null;
		} else {
			return this.m_ActiveLockScreenProps;
		}
	}

	IsLockScreenActive() {
		return !!this.m_ActiveLockScreenProps;
	}

	async BeginPINReset() {
		let strOwner = this.m_Settings.strOwnerAccountName;
		if (await SteamClient.User.ForgetPassword(strOwner)) {
			this.SetSettings({
				...this.m_Settings,
				bUserForgotPin: true,
			});
			SteamClient.User.ChangeUser();
		}
	}

	BResettingPIN() {
		return this.m_Settings.bUserForgotPin;
	}

	BShowResetPINModal() {
		return (
			GetSteamUIApp().BHasCurrentUser() && this.m_Settings.bShowResetPinModal
		);
	}

	SetHasShownResetPINModal() {
		this.SetSettings({
			...this.m_Settings,
			bShowResetPinModal: false,
		});
	}

	InitialLoginComplete(strOwner: string) {
		if (this.m_Settings.bUserForgotPin) {
			if (this.m_Settings.strOwnerAccountName == strOwner) {
				this.ClearPIN(true);
			} else {
				this.SetSettings({
					...this.m_Settings,
					bUserForgotPin: false,
				});
			}
		}
	}

	ProvideLockTicket() {
		this.m_bLockTicket = true;
	}

	BConsumeLockTicket() {
		let e = this.m_bLockTicket;
		this.m_bLockTicket = false;
		return e;
	}

	ClearPIN(bShowResetPinModal = false) {
		this.SetActiveLockScreenProps(null);
		this.SetSettings({
			...this.m_Settings,
			bLockOnWake: false,
			bLockOnLogin: false,
			bLockDesktopMode: false,
			strPIN: "",
			strOwnerAccountName: "",
			bUserForgotPin: false,
			bShowResetPinModal,
		});
	}

	ClearPINIfNotUsed() {
		let data = this.m_Settings;
		if (!data.bLockOnLogin && !data.bLockOnWake && !data.bLockDesktopMode) {
			this.ClearPIN();
		}
	}
}
Cg([a.sH.ref], CSecurityStore.prototype, "m_Settings", undefined);
Cg([a.sH.ref], CSecurityStore.prototype, "m_ActiveLockScreenProps", undefined);

export const yE = new CSecurityStore();
export function PA() {
	return [useObserver(() => yE.GetSettings()), yE.SetSettings];
}
window.securitystore = yE;
