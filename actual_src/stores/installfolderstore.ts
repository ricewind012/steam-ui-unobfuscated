import { Tu } from "./60917.js";
import { action, computed, makeAutoObservable, observable } from "mobx";
import { useObserver } from "mobx-react-lite";
import { TS as Config } from "./72476.js";
import { AG } from "./96593.js";
import { FolderChange } from "../steamclient/steamclient/InstallFolder.js";

class CInstallFolderStore {
	m_InstallFolders = observable.array<FolderChange>;
	@observable m_bLowDiskSpace = false;

	constructor() {
		makeAutoObservable(this);
	}

	Init() {
		SteamClient.InstallFolder.RegisterForInstallFolderChanges(
			this.OnInstallFolderChanges,
		);
	}

	@action async OnInstallFolderChanges(e) {
		const vecFolders = await SteamClient.InstallFolder.GetInstallFolders();
		for (let folder of vecFolders) {
			folder.vecApps = folder.vecApps.map((e) => ({
				...e,
				strSortAs: e?.strSortAs && AG(e.strSortAs),
			}));
		}
		this.m_InstallFolders.replace(vecFolders);
		if (Config.ON_DECK) {
			let folder = this.GetInstallFolder(0);
			if (folder) {
				let bLowOnSpace = this.m_bLowDiskSpace;
				this.m_bLowDiskSpace = folder.nFreeSpace < 2147483648;
				if (this.m_bLowDiskSpace && this.m_bLowDiskSpace != bLowOnSpace) {
					Tu.NotifyLowDiskSpace(folder.nFolderIndex);
				}
			}
		}
	}

	get AllInstallFolders() {
		return this.m_InstallFolders;
	}
	@computed get MountedInstallFolders() {
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
export const fN = new CInstallFolderStore();

export function sV() {
	return useObserver(() => [...fN.MountedInstallFolders]);
}

export function iS() {
	return useObserver(() => fN.MountedInstallFolders?.length || 0) > 1;
}

export function OO() {
	return useObserver(() => fN.MountedInstallFolders[0]);
}

window.installFolderStore = fN;
