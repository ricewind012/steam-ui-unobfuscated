// Webpack module ID: 33512

import { observable, action, makeAutoObservable } from "mobx";
import { useObserver } from "mobx-react-lite";
import { tG as LoginLog } from "../../src/chunk~2dcc5aaf7/87232.js";

class CLoginStore {
	m_hLoginStateChange = null;
	@observable m_strAccountName = "";
	@observable m_eLoginState = 0;
	@observable m_eLoginResult = 1;
	@observable m_nLoginPercentage = 0;
	// TYPES: no longer used
	@observable m_strEmailDomain = "";
	@observable m_vecLoginUsers = [];
	@observable m_bSecureComputer = true;

	constructor() {
		makeAutoObservable(this);
	}

	async Init() {
		this.m_hLoginStateChange = SteamClient.User?.RegisterForLoginStateChange(
			this.OnLoginStateChange,
		);
		this.m_vecLoginUsers = (await SteamClient.User?.GetLoginUsers()) ?? [];
		this.m_bSecureComputer = await SteamClient.Auth.IsSecureComputer();
	}

	componentWillUnmount() {
		if (this.m_hLoginStateChange) {
			this.m_hLoginStateChange.unregister();
			this.m_hLoginStateChange = null;
		}
	}

	GetLoginUsers() {
		return this.m_vecLoginUsers;
	}

	get accountName() {
		return this.m_strAccountName;
	}

	get loginState() {
		return this.m_eLoginState;
	}

	get loginResult() {
		return this.m_eLoginResult;
	}

	get loginPercentage() {
		return this.m_nLoginPercentage;
	}

	get emailDomain() {
		return this.m_strEmailDomain;
	}

	get currentUserIsRemembered() {
		let currentUser = this.m_vecLoginUsers.find(
			(e) => e.accountName.toLowerCase() == this.m_strAccountName.toLowerCase(),
		);
		return currentUser?.rememberPassword ?? false;
	}

	get currentUser() {
		return this.m_vecLoginUsers.find(
			(e) => e.accountName.toLowerCase() == this.m_strAccountName.toLowerCase(),
		);
	}

	get secureComputer() {
		return this.m_bSecureComputer;
	}

	get isProbablySharedPC() {
		return this.m_vecLoginUsers.length >= 5;
	}

	@action
	OnLoginStateChange(
		strAccountName: string,
		eLoginState: number,
		eLoginResult: number,
		n,
		nLoginPercentage: number,
		strEmailDomain: string,
	) {
		LoginLog(
			"OnLoginStateChange",
			strAccountName,
			eLoginState,
			eLoginResult,
			n,
			nLoginPercentage,
		);
		this.m_strAccountName = strAccountName;
		this.m_eLoginState = eLoginState;
		this.m_eLoginResult = eLoginResult;
		this.m_nLoginPercentage = nLoginPercentage;
		this.m_strEmailDomain = strEmailDomain;
	}

	async RemoveUser(strAccountName: string) {
		let bSuccess = await SteamClient.User.RemoveUser(strAccountName);
		if (bSuccess) {
			this.m_vecLoginUsers = await SteamClient.User.GetLoginUsers();
		}
		return bSuccess;
	}

	async RemoveAllUsers() {
		for (const user of this.m_vecLoginUsers) {
			SteamClient.User.RemoveUser(user.accountName);
		}
		this.m_vecLoginUsers = await SteamClient.User.GetLoginUsers();
	}
}

export function UseLoginStateObserver() {
	return useObserver(() => LoginStore.loginState);
}

export const LoginStore = new CLoginStore();
window.loginStore = LoginStore;
