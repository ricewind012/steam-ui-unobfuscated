var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./52698.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require(/*webcrack:missing*/ "./52451.js");
var l = require("./89748.js");
const c = "LockScreenSettings";
const m = {
	version: 1,
	bLockOnWake: false,
	bLockOnLogin: false,
	bLockDesktopMode: false,
	strPIN: "",
	strOwnerAccountName: "",
	bUserForgotPin: false,
	bShowResetPinModal: false,
};
class u {
	constructor() {
		(0, a.Gn)(this);
	}
	m_MachineStorage;
	m_Settings = undefined;
	m_ActiveLockScreenProps = undefined;
	m_bLockTicket = false;
	async Init() {
		this.m_MachineStorage = new i.g();
		this.m_ActiveLockScreenProps = null;
		return this.m_MachineStorage.GetObject(c).then((e) => {
			this.m_Settings = e || m;
		});
	}
	SetSettings(e) {
		this.m_MachineStorage.StoreObject(c, e);
		this.m_Settings = e;
	}
	GetSettings() {
		return this.m_Settings;
	}
	SetActiveLockScreenProps(e) {
		if (
			!e ||
			!this.IsLockScreenActive() ||
			!this.m_ActiveLockScreenProps.preventCancel
		) {
			this.m_ActiveLockScreenProps = e;
		}
	}
	GetActiveLockScreenProps() {
		if (this.BResettingPIN() && !(0, l.qw)().BHasCurrentUser()) {
			return null;
		} else {
			return this.m_ActiveLockScreenProps;
		}
	}
	IsLockScreenActive() {
		return !!this.m_ActiveLockScreenProps;
	}
	async BeginPINReset() {
		let e = this.m_Settings.strOwnerAccountName;
		if (await SteamClient.User.ForgetPassword(e)) {
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
		return (0, l.qw)().BHasCurrentUser() && this.m_Settings.bShowResetPinModal;
	}
	SetHasShownResetPINModal() {
		this.SetSettings({
			...this.m_Settings,
			bShowResetPinModal: false,
		});
	}
	InitialLoginComplete(e) {
		if (this.m_Settings.bUserForgotPin) {
			if (this.m_Settings.strOwnerAccountName == e) {
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
	ClearPIN(e = false) {
		this.SetActiveLockScreenProps(null);
		this.SetSettings({
			...this.m_Settings,
			bLockOnWake: false,
			bLockOnLogin: false,
			bLockDesktopMode: false,
			strPIN: "",
			strOwnerAccountName: "",
			bUserForgotPin: false,
			bShowResetPinModal: e,
		});
	}
	ClearPINIfNotUsed() {
		let e = this.m_Settings;
		if (!e.bLockOnLogin && !e.bLockOnWake && !e.bLockDesktopMode) {
			this.ClearPIN();
		}
	}
}
(0, n.Cg)([a.sH.ref], u.prototype, "m_Settings", undefined);
(0, n.Cg)([a.sH.ref], u.prototype, "m_ActiveLockScreenProps", undefined);
(0, n.Cg)([o.oI], u.prototype, "SetSettings", null);
(0, n.Cg)([o.oI], u.prototype, "SetActiveLockScreenProps", null);
export const yE = new u();
export function PA() {
	return [(0, s.q3)(() => yE.GetSettings()), yE.SetSettings];
}
window.securitystore = yE;
