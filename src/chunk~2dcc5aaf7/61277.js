import n, { Cg } from "./34629.js";
import i, { Gn } from "./89193.js";
import a from "./88696.js";
import { AssertMsg } from "./../../actual_src/utils/assert.js";
export let H;
let l;
((e) => {
	e[(e.k_eIntro = 0)] = "k_eIntro";
	e[(e.k_eNonVerifiedGame = 1)] = "k_eNonVerifiedGame";
	e[(e.k_eGyro = 2)] = "k_eGyro";
	e[(e.k_eAppTextInputDoesNotAutomaticallyInvokesKeyboard = 3)] =
		"k_eAppTextInputDoesNotAutomaticallyInvokesKeyboard";
	e[(e.k_eRemotePlayConfirm = 4)] = "k_eRemotePlayConfirm";
	e[(e.k_eAppLauncherInteractionIssues = 5)] =
		"k_eAppLauncherInteractionIssues";
	e[(e.k_eAppHasSmallText = 6)] = "k_eAppHasSmallText";
	e[(e.k_eExternalControllersAndSIAPI = 7)] = "k_eExternalControllersAndSIAPI";
	e[(e.k_eIntroToActionSets = 8)] = "k_eIntroToActionSets";
	e[(e.k_eIntroToSteamInputGames = 9)] = "k_eIntroToSteamInputGames";
	e[(e.k_eGamepadRequired = 10)] = "k_eGamepadRequired";
	e[(e.k_eGamepadRecommended = 11)] = "k_eGamepadRecommended";
	e[(e.k_eCurrentGamepadUnsupported = 12)] = "k_eCurrentGamepadUnsupported";
	e[(e.k_eCurrentGamepadSteamInputOptIn = 13)] =
		"k_eCurrentGamepadSteamInputOptIn";
	e[(e.k_eVRRequired = 14)] = "k_eVRRequired";
	e[(e.k_eIntroToVRTheater = 15)] = "k_eIntroToVRTheater";
	e[(e.k_eHDRRequiresUserAction = 16)] = "k_eHDRRequiresUserAction";
})((H ||= {}));
((e) => {
	e[(e.EveryTime = 0)] = "EveryTime";
	e[(e.Once = 1)] = "Once";
	e[(e.OncePerGame = 2)] = "OncePerGame";
})((l ||= {}));
const c = {
	[H.k_eIntro]: {
		mode: l.Once,
		unVersion: 3,
	},
	[H.k_eNonVerifiedGame]: {
		mode: l.Once,
		unVersion: 5,
	},
	[H.k_eGyro]: {
		mode: l.Once,
		unVersion: 4,
	},
	[H.k_eAppTextInputDoesNotAutomaticallyInvokesKeyboard]: {
		mode: l.OncePerGame,
		unVersion: 1,
	},
	[H.k_eRemotePlayConfirm]: {
		mode: l.Once,
		unVersion: 3,
	},
	[H.k_eAppLauncherInteractionIssues]: {
		mode: l.OncePerGame,
		unVersion: 1,
	},
	[H.k_eAppHasSmallText]: {
		mode: l.OncePerGame,
		unVersion: 1,
	},
	[H.k_eExternalControllersAndSIAPI]: {
		mode: l.Once,
		unVersion: 1,
	},
	[H.k_eIntroToActionSets]: {
		mode: l.Once,
		unVersion: 1,
	},
	[H.k_eIntroToSteamInputGames]: {
		mode: l.Once,
		unVersion: 1,
	},
	[H.k_eGamepadRequired]: {
		mode: l.EveryTime,
	},
	[H.k_eGamepadRecommended]: {
		mode: l.OncePerGame,
		unVersion: 1,
	},
	[H.k_eCurrentGamepadUnsupported]: {
		mode: l.OncePerGame,
		unVersion: 1,
	},
	[H.k_eCurrentGamepadSteamInputOptIn]: {
		mode: l.OncePerGame,
		unVersion: 1,
	},
	[H.k_eVRRequired]: {
		mode: l.EveryTime,
	},
	[H.k_eIntroToVRTheater]: {
		mode: l.OncePerGame,
		unVersion: 1,
	},
	[H.k_eHDRRequiresUserAction]: {
		mode: l.OncePerGame,
		unVersion: 1,
	},
};
class m {
	constructor() {
		Gn(this);
	}
	m_localStorage;
	m_cachedVersionsSeen;
	m_cachedCheckboxState;
	m_VisibleInterstitials = undefined;
	async Init() {
		this.m_VisibleInterstitials = undefined;
		this.m_localStorage = new a.A();
		await this.LoadCacheFromLocalStorage();
	}
	GetInterstitialData(e) {
		return new u(e);
	}
	get BHasVisibleInterstitials() {
		return this.m_VisibleInterstitials?.length > 0;
	}
	get GetVisibleInterstitials() {
		return this.m_VisibleInterstitials;
	}
	AddInterstitialToQueue(e) {
		if (
			e.eInterstitial == null ||
			e.bForce ||
			(!z.BHasUserSeenInterstitial(e.eInterstitial, e.appid) &&
				this.m_VisibleInterstitials?.find(
					(t) => e.eInterstitial == t.m_eInterstitial,
				) == null)
		) {
			this.m_VisibleInterstitials ||= new Array();
			this.m_VisibleInterstitials.push({
				m_onOK: e.onOK,
				m_onCancel: e.onCancel,
				m_eInterstitial: e.eInterstitial,
				m_strParam: e.strParam,
			});
		} else if (e.onSkipped) {
			e.onSkipped();
		}
	}
	CloseInterstitials(e, t, r) {
		let n;
		while ((n = this.m_VisibleInterstitials?.shift()) != null) {
			if (!t) {
				this.MarkInterstitialSeen(n.m_eInterstitial, e);
				if (r) {
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
	BHasUserSeenInterstitial(e, t) {
		let r = this.m_cachedVersionsSeen.get(e);
		if (r == null) {
			return false;
		}
		if (this.GetInterstitialData(e).storageCheckBoxKey) {
			if (this.m_cachedCheckboxState.get(e) == null) {
				return false;
			}
			if (this.m_cachedCheckboxState.get(e).checked) {
				return true;
			}
			if (!this.m_cachedCheckboxState.get(e).appsSeen.find((e) => e == t)) {
				return false;
			}
		}
		const n = this.GetInterstitialData(e);
		return n.unVersion != 0 && r >= n.unVersion;
	}
	async ClearAllInterstitialsSeen() {
		Object.values(H)
			.filter((e) => !isNaN(Number(e)))
			.map((e) => e)
			.forEach((e) => z.ClearInterstitialSeen(e));
	}
	async ClearInterstitialSeen(e) {
		const t = this.GetInterstitialData(e).storageKey;
		const r = this.GetInterstitialData(e).storageCheckBoxKey != null;
		await Promise.all([
			this.m_localStorage.RemoveObject(t),
			r &&
				this.m_localStorage.RemoveObject(
					this.GetInterstitialData(e).storageCheckBoxKey,
				),
			r &&
				this.m_localStorage.RemoveObject(
					this.GetInterstitialData(e).storageAppsKey,
				),
		]);
		this.m_cachedVersionsSeen.delete(e);
		this.m_cachedCheckboxState.delete(e);
	}
	MarkInterstitialSeen(e, t) {
		const r = this.GetInterstitialData(e).storageKey;
		const n = this.GetInterstitialData(e).unVersion;
		this.m_localStorage.StoreString(r, n.toString());
		this.m_cachedVersionsSeen.set(e, n);
		const i = this.GetInterstitialData(e).storageCheckBoxKey;
		if (i) {
			if (this.m_cachedCheckboxState.get(e) == null) {
				this.m_cachedCheckboxState.set(e, {
					appsSeen: [],
					checked: false,
				});
				this.m_localStorage.StoreString(i, "0");
			}
			if (!this.m_cachedCheckboxState.get(e).appsSeen.find((e) => e == t)) {
				this.m_cachedCheckboxState.get(e).appsSeen.push(t);
			}
			this.m_localStorage.StoreObject(
				this.GetInterstitialData(e).storageAppsKey,
				this.m_cachedCheckboxState.get(e).appsSeen,
			);
		}
	}
	BInterstitialNeedsCheckbox(e, t) {
		return (
			this.GetInterstitialData(e).storageCheckBoxKey != null &&
			this.m_cachedCheckboxState.get(e) != null
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
		Object.keys(c).forEach(async (e) => {
			let t = Number(e);
			const r = this.GetInterstitialData(t).storageKey;
			const n = await this.m_localStorage.GetString(r);
			let i = n ? parseInt(n) : 0;
			if (isNaN(i)) {
				this.m_localStorage.RemoveObject(r);
				i = 0;
			}
			this.m_cachedVersionsSeen.set(t, i);
			const a = this.GetInterstitialData(t).storageCheckBoxKey;
			if (a) {
				const e = await this.m_localStorage.GetString(a);
				let r = await this.m_localStorage.GetObject(
					this.GetInterstitialData(t).storageAppsKey,
				);
				if (e != null && r != null) {
					this.m_cachedCheckboxState.set(t, {
						appsSeen: r,
						checked: e === "1",
					});
				}
			}
		});
	}
}
Cg([i.sH], m.prototype, "m_VisibleInterstitials", undefined);
Cg([i.XI], m.prototype, "AddInterstitialToQueue", null);
class u {
	m_sBaseKeyName;
	m_eInterstitial;
	constructor(e) {
		this.m_eInterstitial = e;
		const c_e = c[e];
		if (c_e.mode == l.EveryTime) {
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
		const r = H[this.m_eInterstitial];
		AssertMsg(
			r.startsWith("k_e"),
			"ConfiguratorInterstitials doesn't match the expected naming pattern",
		);
		this.m_sBaseKeyName = r.substring(3);
	}
	get unVersion() {
		return c[this.m_eInterstitial].unVersion ?? 0;
	}
	get storageKey() {
		return `Deck_ConfiguratorInterstitialsVersionSeen_${this.m_sBaseKeyName}`;
	}
	get storageCheckBoxKey() {
		if (c[this.m_eInterstitial].mode !== l.Once) {
			return `Deck_ConfiguratorInterstitialsCheckbox_${this.m_sBaseKeyName}`;
		} else {
			return undefined;
		}
	}
	get storageAppsKey() {
		if (c[this.m_eInterstitial].mode !== l.Once) {
			return `Deck_ConfiguratorInterstitialApps_${this.m_sBaseKeyName}`;
		} else {
			return undefined;
		}
	}
}
export const z = new m();
