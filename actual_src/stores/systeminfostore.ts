// Webpack module ID: 95979

import { makeAutoObservable, observable } from "mobx";
import { useObserver } from "mobx-react-lite";

class CSystemInfoStore {
	constructor() {
		makeAutoObservable(this);
	}

	@observable m_systemInfo = undefined;

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

export const Z4 = new CSystemInfoStore();

export function Ll() {
	return useObserver(() => Z4.systemInfo);
}

export function x5() {
	const e = Ll();
	return !!e && e.bIsUnsupportedPrototypeHardware;
}
