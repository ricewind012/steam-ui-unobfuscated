import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a, { q3 } from "./90095.js";
import { tG } from "./87232.js";
class o {
	m_hLoginStateChange = null;
	m_strAccountName = "";
	m_eLoginState = 0;
	m_eLoginResult = 1;
	m_nLoginPercentage = 0;
	m_strEmailDomain = "";
	m_vecLoginUsers = [];
	m_bSecureComputer = true;
	constructor() {
		Gn(this);
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
		let e = this.m_vecLoginUsers.find(
			(e) => e.accountName.toLowerCase() == this.m_strAccountName.toLowerCase(),
		);
		return e?.rememberPassword ?? false;
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
	OnLoginStateChange(e, t, r, n, i, a) {
		tG("OnLoginStateChange", e, t, r, n, i);
		this.m_strAccountName = e;
		this.m_eLoginState = t;
		this.m_eLoginResult = r;
		this.m_nLoginPercentage = i;
		this.m_strEmailDomain = a;
	}
	async RemoveUser(e) {
		let t = await SteamClient.User.RemoveUser(e);
		if (t) {
			this.m_vecLoginUsers = await SteamClient.User.GetLoginUsers();
		}
		return t;
	}
	async RemoveAllUsers() {
		for (const e of this.m_vecLoginUsers) {
			SteamClient.User.RemoveUser(e.accountName);
		}
		this.m_vecLoginUsers = await SteamClient.User.GetLoginUsers();
	}
}
export function m() {
	return q3(() => b.loginState);
}
Cg([i.sH], o.prototype, "m_strAccountName", undefined);
Cg([i.sH], o.prototype, "m_eLoginState", undefined);
Cg([i.sH], o.prototype, "m_eLoginResult", undefined);
Cg([i.sH], o.prototype, "m_nLoginPercentage", undefined);
Cg([i.sH], o.prototype, "m_strEmailDomain", undefined);
Cg([i.sH], o.prototype, "m_vecLoginUsers", undefined);
Cg([i.sH], o.prototype, "m_bSecureComputer", undefined);
Cg([i.XI.bound], o.prototype, "OnLoginStateChange", null);
export const b = new o();
window.loginStore = b;
