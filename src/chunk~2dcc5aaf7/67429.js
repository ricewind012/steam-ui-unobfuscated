var n = require(/*webcrack:missing*/ "./37976.js");
var i = require(/*webcrack:missing*/ "./44846.js");
var a = require("./92031.js");
var s = require(/*webcrack:missing*/ "./49455.js");
export class VS {
	m_ulGameID;
	constructor(e, t, r) {
		if (typeof e == "string") {
			this.m_ulGameID = n.A.fromString(e, true);
		} else {
			const i = r;
			const a = ((e & 255) << 24) + (t & 16777215);
			this.m_ulGameID = n.A.fromBits(a, i, true);
		}
	}
	GetAppID() {
		return this.m_ulGameID.getLowBitsUnsigned() & 16777215;
	}
	GetType() {
		return (this.m_ulGameID.getLowBitsUnsigned() >> 24) & 255;
	}
	GetModID() {
		return this.m_ulGameID.getHighBitsUnsigned();
	}
	ConvertTo64BitString() {
		return this.m_ulGameID.toString();
	}
	BIsSteamApp() {
		return this.GetType() === i.Rh.k_EGameIDTypeApp;
	}
	BIsShortcut() {
		return this.GetType() === i.Rh.k_EGameIDTypeShortcut;
	}
	BIsMod() {
		return this.GetType() === i.Rh.k_EGameIDTypeGameMod;
	}
	BIsP2PFile() {
		return this.GetType() === i.Rh.k_EGameIDTypeP2P;
	}
	GetInternalAppID() {
		if (this.BIsSteamApp()) {
			return this.GetAppID();
		} else {
			return this.GetModID();
		}
	}
	BIsValid() {
		switch (this.GetType()) {
			case i.Rh.k_EGameIDTypeApp:
				return this.GetAppID() !== a.sc;
			case i.Rh.k_EGameIDTypeGameMod:
				return this.GetAppID() !== a.sc && this.GetModID() & 2147483648;
			case i.Rh.k_EGameIDTypeShortcut:
				return (this.GetModID() & 2147483648) != 0;
			case i.Rh.k_EGameIDTypeP2P:
				return this.GetAppID() === a.sc && this.GetModID() & 2147483648;
			default:
				(0, s.w)(false, `Unknown GameID type: ${this.GetType()}`);
				return false;
		}
	}
	static InitFromAppID(e) {
		return new VS(i.Rh.k_EGameIDTypeApp, e, 0);
	}
	static InitFromShortcutID(e) {
		return new VS(i.Rh.k_EGameIDTypeShortcut, 0, e);
	}
}
export function bY(e) {
	return VS.InitFromAppID(e).ConvertTo64BitString();
}
export function gX(e) {
	return VS.InitFromShortcutID(e).ConvertTo64BitString();
}
