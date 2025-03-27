import { Cg } from "./34629.js";
import i from "./60917.js";
import a, { Gn } from "./89193.js";
import { q3 } from "./90095.js";
import o from "./72476.js";
import { AG } from "./96593.js";
class c {
	m_InstallFolders = a.sH.array();
	m_bLowDiskSpace = false;
	constructor() {
		Gn(this);
	}
	Init() {
		SteamClient.InstallFolder.RegisterForInstallFolderChanges(
			this.OnInstallFolderChanges,
		);
	}
	async OnInstallFolderChanges(e) {
		const t = await SteamClient.InstallFolder.GetInstallFolders();
		for (let e of t) {
			e.vecApps = e.vecApps.map((e) => ({
				...e,
				strSortAs: e?.strSortAs && AG(e.strSortAs),
			}));
		}
		this.m_InstallFolders.replace(t);
		if (o.TS.ON_DECK) {
			let e = this.GetInstallFolder(0);
			if (e) {
				let t = this.m_bLowDiskSpace;
				this.m_bLowDiskSpace = e.nFreeSpace < 2147483648;
				if (this.m_bLowDiskSpace && this.m_bLowDiskSpace != t) {
					i.Tu.NotifyLowDiskSpace(e.nFolderIndex);
				}
			}
		}
	}
	get AllInstallFolders() {
		return this.m_InstallFolders;
	}
	get MountedInstallFolders() {
		return this.m_InstallFolders.filter((e) => e.bIsMounted);
	}
	get DefaultInstallFolderIndex() {
		return this.m_InstallFolders.findIndex((e) => e.bIsDefaultFolder);
	}
	GetInstallFolder(e) {
		return this.m_InstallFolders.find((t) => t.nFolderIndex == e);
	}
	BSteamDeckHasLowDiskSpace() {
		return this.m_bLowDiskSpace;
	}
}
Cg([a.sH], c.prototype, "m_bLowDiskSpace", undefined);
Cg([a.XI.bound], c.prototype, "OnInstallFolderChanges", null);
Cg([a.EW], c.prototype, "MountedInstallFolders", null);
export const fN = new c();
export function sV() {
	return q3(() => [...fN.MountedInstallFolders]);
}
export function iS() {
	return q3(() => fN.MountedInstallFolders?.length || 0) > 1;
}
export function OO() {
	return q3(() => fN.MountedInstallFolders[0]);
}
window.installFolderStore = fN;
