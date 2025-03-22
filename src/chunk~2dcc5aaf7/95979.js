var n = require(/*webcrack:missing*/ "./34629.js");
var i = require(/*webcrack:missing*/ "./89193.js");
var a = require(/*webcrack:missing*/ "./90095.js");
class s {
	constructor() {
		(0, i.Gn)(this);
	}
	m_systemInfo = undefined;
	get systemInfo() {
		if (this.m_systemInfo === undefined) {
			this.UpdateSystemInfo();
		}
		return this.m_systemInfo;
	}
	async Init() {}
	async UpdateSystemInfo() {
		this.m_systemInfo = await SteamClient.System.GetSystemInfo();
	}
	async UpdateSystemInfoIfNecessary() {
		if (this.m_systemInfo === undefined) {
			return this.UpdateSystemInfo();
		}
	}
}
(0, n.Cg)([i.sH], s.prototype, "m_systemInfo", undefined);
export const Z4 = new s();
export function Ll() {
	return (0, a.q3)(() => Z4.systemInfo);
}
export function x5() {
	const e = Ll();
	return !!e && e.bIsUnsupportedPrototypeHardware;
}
