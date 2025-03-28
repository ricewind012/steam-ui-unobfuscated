export function BIsChinaRealm(eRealm: ESteamRealm) {
	return eRealm === ESteamRealm.k_ESteamRealmChina;
}

// Client Realm - from clientenums.h
export enum ESteamRealm {
	k_ESteamRealmUnknown,
	k_ESteamRealmGlobal,
	k_ESteamRealmChina,
}

/**
 * Helper to hold an array of handles and dispose all at once
 */
export class CallbackHandleDisposer {
	m_rgHandles = [];

	Add(handle) {
		if (handle) {
			this.m_rgHandles.push(handle);
		}
	}

	Unregister() {
		const rgHandles = this.m_rgHandles;
		this.m_rgHandles = [];
		for (const handle of rgHandles) {
			if (handle) {
				handle.unregister();
			}
		}
	}
}
