import { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
class s {
	constructor() {
		Gn(this);
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
Cg([i.sH], s.prototype, "m_systemInfo", undefined);
export const Z4 = new s();
export function Ll() {
	return q3(() => Z4.systemInfo);
}
export function x5() {
	const e = Ll();
	return !!e && e.bIsUnsupportedPrototypeHardware;
}
