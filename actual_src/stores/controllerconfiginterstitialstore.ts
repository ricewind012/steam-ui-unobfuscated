// Webpack module ID: 61277

import { A as CStorage_Local } from "../../src/library/88696.js";
import { AssertMsg } from "../utils/assert.js";
import { action, makeAutoObservable, observable } from "mobx";

export enum H {
	k_eIntro,
	k_eNonVerifiedGame,
	k_eGyro,
	k_eAppTextInputDoesNotAutomaticallyInvokesKeyboard,
	k_eRemotePlayConfirm,
	k_eAppLauncherInteractionIssues,
	k_eAppHasSmallText,
	k_eExternalControllersAndSIAPI,
	k_eIntroToActionSets,
	k_eIntroToSteamInputGames,
	k_eGamepadRequired,
	k_eGamepadRecommended,
	k_eCurrentGamepadUnsupported,
	k_eCurrentGamepadSteamInputOptIn,
	k_eVRRequired,
	k_eIntroToVRTheater,
	k_eHDRRequiresUserAction,
}

enum ConfiguratorInterstitials {
	EveryTime,
	Once,
	OncePerGame,
}

type InterstitialData_t = {
	[member in H]: {
		mode: ConfiguratorInterstitials;
		unVersion?: number;
	};
};

const ConfiguratorInterstitialsData: InterstitialData_t = {
	[H.k_eIntro]: {
		mode: ConfiguratorInterstitials.Once,
		unVersion: 3,
	},
	[H.k_eNonVerifiedGame]: {
		mode: ConfiguratorInterstitials.Once,
		unVersion: 5,
	},
	[H.k_eGyro]: {
		mode: ConfiguratorInterstitials.Once,
		unVersion: 4,
	},
	[H.k_eAppTextInputDoesNotAutomaticallyInvokesKeyboard]: {
		mode: ConfiguratorInterstitials.OncePerGame,
		unVersion: 1,
	},
	[H.k_eRemotePlayConfirm]: {
		mode: ConfiguratorInterstitials.Once,
		unVersion: 3,
	},
	[H.k_eAppLauncherInteractionIssues]: {
		mode: ConfiguratorInterstitials.OncePerGame,
		unVersion: 1,
	},
	[H.k_eAppHasSmallText]: {
		mode: ConfiguratorInterstitials.OncePerGame,
		unVersion: 1,
	},
	[H.k_eExternalControllersAndSIAPI]: {
		mode: ConfiguratorInterstitials.Once,
		unVersion: 1,
	},
	[H.k_eIntroToActionSets]: {
		mode: ConfiguratorInterstitials.Once,
		unVersion: 1,
	},
	[H.k_eIntroToSteamInputGames]: {
		mode: ConfiguratorInterstitials.Once,
		unVersion: 1,
	},
	[H.k_eGamepadRequired]: {
		mode: ConfiguratorInterstitials.EveryTime,
	},
	[H.k_eGamepadRecommended]: {
		mode: ConfiguratorInterstitials.OncePerGame,
		unVersion: 1,
	},
	[H.k_eCurrentGamepadUnsupported]: {
		mode: ConfiguratorInterstitials.OncePerGame,
		unVersion: 1,
	},
	[H.k_eCurrentGamepadSteamInputOptIn]: {
		mode: ConfiguratorInterstitials.OncePerGame,
		unVersion: 1,
	},
	[H.k_eVRRequired]: {
		mode: ConfiguratorInterstitials.EveryTime,
	},
	[H.k_eIntroToVRTheater]: {
		mode: ConfiguratorInterstitials.OncePerGame,
		unVersion: 1,
	},
	[H.k_eHDRRequiresUserAction]: {
		mode: ConfiguratorInterstitials.OncePerGame,
		unVersion: 1,
	},
};

class CControllerConfigInterstitialStore {
	constructor() {
		makeAutoObservable(this);
	}

	m_localStorage;
	m_cachedVersionsSeen: Map<H, number>;
	m_cachedCheckboxState: Map<H, { appsSeen: number[]; checked: boolean }>;
	@observable m_VisibleInterstitials: {
		m_eInterstitial: H;
		m_onOK: () => void;
		m_onCancel: () => void;
		m_strParam: string;
	}[] = undefined;

	async Init() {
		this.m_VisibleInterstitials = undefined;
		this.m_localStorage = new CStorage_Local();
		await this.LoadCacheFromLocalStorage();
	}

	GetInterstitialData(eInterstitial: H) {
		return new CControllerConfigInterstitialData(eInterstitial);
	}

	get BHasVisibleInterstitials() {
		return this.m_VisibleInterstitials?.length > 0;
	}

	get GetVisibleInterstitials() {
		return this.m_VisibleInterstitials;
	}

	@action AddInterstitialToQueue(interstitial: {
		appid: number;
		bForce: boolean;
		eInterstitial: H;
		onOK: () => void;
		onCancel: () => void;
		onSkipped: () => void;
		strParam: string;
	}) {
		if (
			interstitial.eInterstitial == null ||
			interstitial.bForce ||
			(!z.BHasUserSeenInterstitial(
				interstitial.eInterstitial,
				interstitial.appid,
			) &&
				this.m_VisibleInterstitials?.find(
					(t) => interstitial.eInterstitial == t.m_eInterstitial,
				) == null)
		) {
			this.m_VisibleInterstitials ||= new Array();
			this.m_VisibleInterstitials.push({
				m_onOK: interstitial.onOK,
				m_onCancel: interstitial.onCancel,
				m_eInterstitial: interstitial.eInterstitial,
				m_strParam: interstitial.strParam,
			});
		} else if (interstitial.onSkipped) {
			interstitial.onSkipped();
		}
	}

	CloseInterstitials(appid: number, t, bMarkCheckbox: boolean) {
		let n;
		while ((n = this.m_VisibleInterstitials?.shift()) != null) {
			if (!t) {
				this.MarkInterstitialSeen(n.m_eInterstitial, appid);
				if (bMarkCheckbox) {
					this.MarkInterstitialCheckbox(n.m_eInterstitial);
				}
			}
			if (t && n.m_onCancel) {
				n.m_onCancel();
			} else if (!t && n.m_onOK) {
				n.m_onOK();
			}
		}
		this.m_VisibleInterstitials = undefined;
	}

	ClearInterstitials() {
		this.m_VisibleInterstitials = undefined;
	}

	BHasUserSeenInterstitial(eInterstitial: H, appid: number) {
		let r = this.m_cachedVersionsSeen.get(eInterstitial);
		if (r == null) {
			return false;
		}
		if (this.GetInterstitialData(eInterstitial).storageCheckBoxKey) {
			if (this.m_cachedCheckboxState.get(eInterstitial) == null) {
				return false;
			}
			if (this.m_cachedCheckboxState.get(eInterstitial).checked) {
				return true;
			}
			if (
				!this.m_cachedCheckboxState
					.get(eInterstitial)
					.appsSeen.find((e) => e == appid)
			) {
				return false;
			}
		}
		const n = this.GetInterstitialData(eInterstitial);
		return n.unVersion != 0 && r >= n.unVersion;
	}

	async ClearAllInterstitialsSeen() {
		Object.values(H)
			.filter((e) => !isNaN(Number(e)))
			.map((e) => e)
			.forEach((e: H) => z.ClearInterstitialSeen(e));
	}

	async ClearInterstitialSeen(eInterstitial: H) {
		const strStorageKey = this.GetInterstitialData(eInterstitial).storageKey;
		const bDidStoreCheckBox =
			this.GetInterstitialData(eInterstitial).storageCheckBoxKey != null;
		await Promise.all([
			this.m_localStorage.RemoveObject(strStorageKey),
			bDidStoreCheckBox &&
				this.m_localStorage.RemoveObject(
					this.GetInterstitialData(eInterstitial).storageCheckBoxKey,
				),
			bDidStoreCheckBox &&
				this.m_localStorage.RemoveObject(
					this.GetInterstitialData(eInterstitial).storageAppsKey,
				),
		]);
		this.m_cachedVersionsSeen.delete(eInterstitial);
		this.m_cachedCheckboxState.delete(eInterstitial);
	}

	MarkInterstitialSeen(eInterstitial: H, appid: number) {
		const r = this.GetInterstitialData(eInterstitial).storageKey;
		const n = this.GetInterstitialData(eInterstitial).unVersion;
		this.m_localStorage.StoreString(r, n.toString());
		this.m_cachedVersionsSeen.set(eInterstitial, n);
		const storageCheckBoxKey =
			this.GetInterstitialData(eInterstitial).storageCheckBoxKey;
		if (storageCheckBoxKey) {
			if (this.m_cachedCheckboxState.get(eInterstitial) == null) {
				this.m_cachedCheckboxState.set(eInterstitial, {
					appsSeen: [],
					checked: false,
				});
				this.m_localStorage.StoreString(storageCheckBoxKey, "0");
			}
			if (
				!this.m_cachedCheckboxState
					.get(eInterstitial)
					.appsSeen.find((e) => e == appid)
			) {
				this.m_cachedCheckboxState.get(eInterstitial).appsSeen.push(appid);
			}
			this.m_localStorage.StoreObject(
				this.GetInterstitialData(eInterstitial).storageAppsKey,
				this.m_cachedCheckboxState.get(eInterstitial).appsSeen,
			);
		}
	}

	BInterstitialNeedsCheckbox(eInterstitial: H, t) {
		return (
			this.GetInterstitialData(eInterstitial).storageCheckBoxKey != null &&
			this.m_cachedCheckboxState.get(eInterstitial) != null
		);
	}

	MarkInterstitialCheckbox(e) {
		const t = this.GetInterstitialData(e).storageCheckBoxKey;
		if (t) {
			this.m_cachedCheckboxState.get(e).checked = true;
			this.m_localStorage.StoreString(t, "1");
		}
	}

	async LoadCacheFromLocalStorage() {
		this.m_cachedVersionsSeen = new Map();
		this.m_cachedCheckboxState = new Map();
		Object.keys(ConfiguratorInterstitialsData).forEach(async (key) => {
			let nKey = Number(key);
			const strStorageKey = this.GetInterstitialData(nKey).storageKey;
			const strData = await this.m_localStorage.GetString(strStorageKey);
			let nVersion = strData ? parseInt(strData) : 0;
			if (isNaN(nVersion)) {
				this.m_localStorage.RemoveObject(strStorageKey);
				nVersion = 0;
			}
			this.m_cachedVersionsSeen.set(nKey, nVersion);
			const strStorageCheckBoxKey =
				this.GetInterstitialData(nKey).storageCheckBoxKey;
			if (strStorageCheckBoxKey) {
				const bCheckBox = await this.m_localStorage.GetString(
					strStorageCheckBoxKey,
				);
				let appsSeen = await this.m_localStorage.GetObject(
					this.GetInterstitialData(nKey).storageAppsKey,
				);
				if (bCheckBox != null && appsSeen != null) {
					this.m_cachedCheckboxState.set(nKey, {
						appsSeen,
						checked: bCheckBox === "1",
					});
				}
			}
		});
	}
}

class CControllerConfigInterstitialData {
	m_sBaseKeyName: string;
	m_eInterstitial: H;

	constructor(eInterstitial: H) {
		this.m_eInterstitial = eInterstitial;
		const c_e = ConfiguratorInterstitialsData[eInterstitial];
		if (c_e.mode == ConfiguratorInterstitials.EveryTime) {
			AssertMsg(
				!c_e.unVersion,
				"EveryTime ConfiguratorInterstitials shouldn't specify unVersion",
			);
		} else {
			AssertMsg(
				c_e.unVersion > 0,
				"Once and OncePerGame ConfiguratorInterstitials must specify unVersion > 0",
			);
		}
		const strKeyName = H[this.m_eInterstitial];
		AssertMsg(
			strKeyName.startsWith("k_e"),
			"ConfiguratorInterstitials doesn't match the expected naming pattern",
		);
		this.m_sBaseKeyName = strKeyName.substring(3);
	}

	get unVersion() {
		return ConfiguratorInterstitialsData[this.m_eInterstitial].unVersion ?? 0;
	}
	get storageKey() {
		return `Deck_ConfiguratorInterstitialsVersionSeen_${this.m_sBaseKeyName}`;
	}
	get storageCheckBoxKey() {
		if (
			ConfiguratorInterstitialsData[this.m_eInterstitial].mode !==
			ConfiguratorInterstitials.Once
		) {
			return `Deck_ConfiguratorInterstitialsCheckbox_${this.m_sBaseKeyName}`;
		} else {
			return undefined;
		}
	}
	get storageAppsKey() {
		if (
			ConfiguratorInterstitialsData[this.m_eInterstitial].mode !==
			ConfiguratorInterstitials.Once
		) {
			return `Deck_ConfiguratorInterstitialApps_${this.m_sBaseKeyName}`;
		} else {
			return undefined;
		}
	}
}

export const z = new CControllerConfigInterstitialStore();
