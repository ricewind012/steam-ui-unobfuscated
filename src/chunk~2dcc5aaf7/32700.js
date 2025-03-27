import {
	LocalizationManager,
	CLocalizationManager,
	Localize,
} from "../../actual_src/utils/localization.js";
import i, { Lg } from "./44846.js";
import s, { CH, hL } from "./52451.js";
import o, { q } from "./29285.js";
async function a(e) {
	const t = [];
	for (let r = 0; r < 31; r++) {
		const n = Lg(r);
		t.push(e(n));
	}
	return ((e) => {
		const t = {};
		const r = {};
		const n = window.document.createElement("canvas");
		n.style.position = "absolute";
		n.style.visibility = "hidden";
		window.document.body.appendChild(n);
		const i = n.getContext("2d");
		for (const n of e) {
			for (const e of Object.keys(n)) {
				const a = i.measureText(n[e]).width;
				if (!(e in t) || r[e] < a) {
					t[e] = n[e];
					r[e] = a;
				}
			}
		}
		window.document.body.removeChild(n);
		return t;
	})(await Promise.all(t));
}
export function VD(e) {
	return require("./61800.js")(`./steamui_${e}.json`);
}
export function CI(e) {
	return require("./32290.js")(`./shared_${e}.json`);
}
function m(e) {
	if (q()) {
		return require("./74922.js")(`./reducedui_${e}.json`);
	} else {
		return Promise.resolve({});
	}
}
export async function Qu() {
	await (async (e, ...t) => {
		let r = await a(e);
		for (const e of t) {
			r = {
				...(await a(e)),
				...r,
			};
		}
		LocalizationManager.AddTokens(r);
	})(
		(e) => VD(e),
		(e) => CI(e),
	);
}
export async function uV(e) {
	console.log("Init localization", e);
	const t = CLocalizationManager.GetLanguageFallback(e);
	const r = e === t;
	const [i, a, s, o, u] = await Promise.all([
		VD(e),
		r || VD(t),
		CI(e),
		r || CI(t),
		m(e),
	]);
	LocalizationManager.InitFromObjects(i, a, s, o, true);
	LocalizationManager.AddTokens(u);
}
export function Bb(e, t) {
	const r = t ? "#DisplayStatus_Compact_" : "#DisplayStatus_";
	let i = "";
	switch (e) {
		case 0: {
			i = "Invalid";
			break;
		}
		case 1: {
			i = "Launching";
			break;
		}
		case 2: {
			i = "Uninstalling";
			break;
		}
		case 3: {
			i = "Installing";
			break;
		}
		case 4: {
			i = "Running";
			break;
		}
		case 5: {
			i = "Validating";
			break;
		}
		case 6: {
			i = "Updating";
			break;
		}
		case 7: {
			i = "Downloading";
			break;
		}
		case 8: {
			i = "Synchronizing";
			break;
		}
		case 9: {
			i = "ReadyToInstall";
			break;
		}
		case 10: {
			i = "ReadyToPreload";
			break;
		}
		case 11: {
			i = "ReadyToLaunch";
			break;
		}
		case 12: {
			i = "RegionRestricted";
			break;
		}
		case 13: {
			i = "PresaleOnly";
			break;
		}
		case 14: {
			i = "InvalidPlatform";
			break;
		}
		case 16: {
			i = "PreloadComplete";
			break;
		}
		case 17: {
			i = "BorrowerLocked";
			break;
		}
		case 37: {
			i = "OwnerLocked";
			break;
		}
		case 18: {
			i = "UpdatePaused";
			break;
		}
		case 19: {
			i = "UpdateQueued";
			break;
		}
		case 20: {
			i = "UpdateRequired";
			break;
		}
		case 21: {
			i = "UpdateDisabled";
			break;
		}
		case 39: {
			i = "UpdateFailed";
			break;
		}
		case 22: {
			i = "DownloadPaused";
			break;
		}
		case 23: {
			i = "DownloadQueued";
			break;
		}
		case 24: {
			i = "DownloadRequired";
			break;
		}
		case 25: {
			i = "DownloadDisabled";
			break;
		}
		case 38: {
			i = "DownloadFailed";
			break;
		}
		case 26: {
			i = "LicensePending";
			break;
		}
		case 27: {
			i = "LicenseExpired";
			break;
		}
		case 28: {
			i = "AvailForFree";
			break;
		}
		case 29: {
			i = "AvailToBorrow";
			break;
		}
		case 30: {
			i = "AvailGuestPass";
			break;
		}
		case 31: {
			i = "Purchase";
			break;
		}
		case 32: {
			i = "Unavailable";
			break;
		}
		case 33: {
			i = "NotLaunchable";
			break;
		}
		case 34: {
			i = "CloudError";
			break;
		}
		case 35: {
			i = "CloudOutOfDate";
			break;
		}
		case 36: {
			i = "Terminating";
		}
	}
	return (0, Localize)(r + i);
}
export function Np(e, t) {
	const r = t > 1;
	return (0, Localize)((r ? "#GameActionPlural_" : "#GameAction_") + e);
}
export function Qf() {
	let e = CH();
	hL(LocalizationManager.GetTokensChangedCallbackList(), e);
}
