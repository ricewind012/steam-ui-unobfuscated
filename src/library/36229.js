var r;
(function (e) {
	e[(e.k_EAccountFlagNormalUser = 0)] = "k_EAccountFlagNormalUser";
	e[(e.k_EAccountFlagPersonaNameSet = 1)] = "k_EAccountFlagPersonaNameSet";
	e[(e.k_EAccountFlagUnbannable = 2)] = "k_EAccountFlagUnbannable";
	e[(e.k_EAccountFlagPasswordSet = 4)] = "k_EAccountFlagPasswordSet";
	e[(e.k_EAccountFlagSupport = 8)] = "k_EAccountFlagSupport";
	e[(e.k_EAccountFlagAdmin = 16)] = "k_EAccountFlagAdmin";
	e[(e.k_EAccountFlagSupervisor = 32)] = "k_EAccountFlagSupervisor";
	e[(e.k_EAccountFlagAppEditor = 64)] = "k_EAccountFlagAppEditor";
	e[(e.k_EAccountFlagHWIDSet = 128)] = "k_EAccountFlagHWIDSet";
	e[(e.k_EAccountFlagVacBeta = 512)] = "k_EAccountFlagVacBeta";
	e[(e.k_EAccountFlagDebug = 1024)] = "k_EAccountFlagDebug";
	e[(e.k_EAccountFlagDisabled = 2048)] = "k_EAccountFlagDisabled";
	e[(e.k_EAccountFlagLimitedUser = 4096)] = "k_EAccountFlagLimitedUser";
	e[(e.k_EAccountFlagLimitedUserForce = 8192)] =
		"k_EAccountFlagLimitedUserForce";
	e[(e.k_EAccountFlagEmailValidated = 16384)] = "k_EAccountFlagEmailValidated";
	e[(e.k_EAccountFlagForcePasswordChange = 131072)] =
		"k_EAccountFlagForcePasswordChange";
	e[(e.k_EAccountFlagLogonExtraSecurity = 524288)] =
		"k_EAccountFlagLogonExtraSecurity";
	e[(e.k_EAccountFlagLogonExtraSecurityDisabled = 1048576)] =
		"k_EAccountFlagLogonExtraSecurityDisabled";
	e[(e.k_EAccountFlagSteam2MigrationComplete = 2097152)] =
		"k_EAccountFlagSteam2MigrationComplete";
	e[(e.k_EAccountFlagNeedLogs = 4194304)] = "k_EAccountFlagNeedLogs";
	e[(e.k_EAccountFlagLockdown = 8388608)] = "k_EAccountFlagLockdown";
	e[(e.k_EAccountFlagMasterAppEditor = 16777216)] =
		"k_EAccountFlagMasterAppEditor";
	e[(e.k_EAccountFlagBannedFromWebAPI = 33554432)] =
		"k_EAccountFlagBannedFromWebAPI";
	e[(e.k_EAccountFlagPartnerMember = 67108864)] = "k_EAccountFlagPartnerMember";
	e[(e.k_EAccountFlagGlobalModerator = 134217728)] =
		"k_EAccountFlagGlobalModerator";
	e[(e.k_EAccountFlagParentalSettings = 268435456)] =
		"k_EAccountFlagParentalSettings";
	e[(e.k_EAccountFlagThirdPartySupport = 536870912)] =
		"k_EAccountFlagThirdPartySupport";
	e[(e.k_EAccountFlagNeedsSSANextSteamLogon = 1073741824)] =
		"k_EAccountFlagNeedsSSANextSteamLogon";
})((r ||= {}));
r.k_EAccountFlagAdmin;
r.k_EAccountFlagSupervisor;
r.k_EAccountFlagSupport;
r.k_EAccountFlagAdmin;
r.k_EAccountFlagSupervisor;
var i = require("./44846.js");
var s = require(/*webcrack:missing*/ "./37976.js");
export class b2 {
	m_ulSteamID = s.A.UZERO;
	constructor(e = 0, t, n, r) {
		if (e instanceof b2) {
			this.m_ulSteamID = e.m_ulSteamID;
		} else if (typeof e == "string") {
			this.m_ulSteamID = s.A.fromString(e, true);
		} else if (t && n && r !== undefined) {
			this.SetFromComponents(e, r, n, t);
		} else {
			this.m_ulSteamID = e ? s.A.fromNumber(e, true) : s.A.UZERO;
		}
	}
	static InitFromAccountID(e, t) {
		return new b2(Number(e), t, 1, i.ke);
	}
	static InitFromClanID(e, t) {
		return new b2(Number(e), t, 7, 0);
	}
	GetAccountID() {
		return this.m_ulSteamID.getLowBitsUnsigned();
	}
	GetInstance() {
		return this.m_ulSteamID.getHighBitsUnsigned() & 1048575;
	}
	GetAccountType() {
		return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
	}
	GetUniverse() {
		return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
	}
	ConvertTo64BitString() {
		return this.m_ulSteamID.toString();
	}
	Render() {
		switch (this.GetAccountType()) {
			case 0:
				return "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
			case 7:
				return "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
			case 4:
				return (
					"[A:" +
					this.GetUniverse() +
					":" +
					this.GetAccountID() +
					":" +
					this.GetInstance() +
					"]"
				);
			case 3:
				return "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
			case 2:
				return (
					"[M:" +
					this.GetUniverse() +
					":" +
					this.GetAccountID() +
					":" +
					this.GetInstance() +
					"]"
				);
			case 5:
				return "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
			case 6:
				return "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
			default:
				return "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
		}
	}
	static InitFromString(e) {
		let t = new b2();
		try {
			let [n, r, i, s, o] =
				e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [];
			let a = Number(i);
			let c = Number(s);
			let l = o ? Number(o) : 1;
			switch (r) {
				case "I":
					t.SetFromComponents(c, l, 0, a);
					break;
				case "g":
					t.SetFromComponents(c, 0, 7, a);
					break;
				case "A":
					t.SetFromComponents(c, l, 4, a);
					break;
				case "G":
					t.SetFromComponents(c, l, 3, a);
					break;
				case "M":
					t.SetFromComponents(c, l, 2, a);
					break;
				case "P":
					t.SetFromComponents(c, l, 5, a);
					break;
				case "C":
					t.SetFromComponents(c, l, 6, a);
					break;
				case "U":
					t.SetFromComponents(c, l, 1, a);
			}
		} catch (e) {}
		return t;
	}
	BIsValid() {
		let e = this.GetAccountType();
		if (e <= 0 || e >= 11) {
			return false;
		}
		let t = this.GetUniverse();
		if (t <= 0 || t >= 5) {
			return false;
		}
		if (e == 1) {
			if (this.GetAccountID() == 0 || this.GetInstance() > i.im) {
				return false;
			}
		} else if (e == 7) {
			if (this.GetAccountID() == 0 || this.GetInstance() != 0) {
				return false;
			}
		} else if (e == 3 && this.GetAccountID() == 0) {
			return false;
		}
		return true;
	}
	BIsIndividualAccount() {
		return this.GetAccountType() == 1;
	}
	BIsClanAccount() {
		return this.GetAccountType() == 7;
	}
	SetAccountID(e) {
		this.m_ulSteamID = new s.A(e, this.m_ulSteamID.getHighBitsUnsigned(), true);
	}
	SetInstance(e) {
		this.SetFromComponents(
			this.GetAccountID(),
			e,
			this.GetAccountType(),
			this.GetUniverse(),
		);
	}
	SetAccountType(e) {
		this.SetFromComponents(
			this.GetAccountID(),
			this.GetInstance(),
			e,
			this.GetUniverse(),
		);
	}
	SetUniverse(e) {
		this.SetFromComponents(
			this.GetAccountID(),
			this.GetInstance(),
			this.GetAccountType(),
			e,
		);
	}
	SetFromComponents(e, t, n, r) {
		let i = ((r & 255) << 24) + ((n & 15) << 20) + (t & 1048575);
		let o = e & 4294967295;
		this.m_ulSteamID = new s.A(o, i, true);
	}
}
