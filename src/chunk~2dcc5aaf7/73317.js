var n = require(/*webcrack:missing*/ "./34629.js");
var i = require("./60917.js");
var a = require(/*webcrack:missing*/ "./89193.js");
var s = require(/*webcrack:missing*/ "./90095.js");
var o = require(/*webcrack:missing*/ "./72476.js");
var l = require("./96593.js");
class c {
	m_InstallFolders = a.sH.array();
	m_bLowDiskSpace = false;
	constructor() {
		(0, a.Gn)(this);
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
				strSortAs: e?.strSortAs && (0, l.AG)(e.strSortAs),
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
(0, n.Cg)([a.sH], c.prototype, "m_bLowDiskSpace", undefined);
(0, n.Cg)([a.XI.bound], c.prototype, "OnInstallFolderChanges", null);
(0, n.Cg)([a.EW], c.prototype, "MountedInstallFolders", null);
export const fN = new c();
export function sV() {
	return (0, s.q3)(() => [...fN.MountedInstallFolders]);
}
export function iS() {
	return (0, s.q3)(() => fN.MountedInstallFolders?.length || 0) > 1;
}
export function OO() {
	return (0, s.q3)(() => fN.MountedInstallFolders[0]);
}
window.installFolderStore = fN;
