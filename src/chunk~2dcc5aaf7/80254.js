import {
	LocalizationManager,
	Localize,
} from "../../actual_src/utils/localization.js";
export function l(e, t = "#Played_", r = false) {
	if (e >= 120) {
		let r = e / 60;
		r = Math.round(r * 10) / 10;
		let i = LocalizationManager.GetPreferredLocales();
		let a = r.toLocaleString(i, {
			minimumFractionDigits: 0,
			maximumFractionDigits: 1,
		});
		return (0, Localize)(t + "Hours", a);
	}
	if (r && e == 1) {
		return (0, Localize)(t + "Minute", e);
	} else {
		return (0, Localize)(t + "Minutes", e);
	}
}
