import {
	Localize,
	LocalizationManager,
} from "../../actual_src/utils/localization.js";
export function dm(e, t, r, i) {
	let a = t;
	a =
		typeof a == "number"
			? {
					nDigitsAfterDecimal: t,
					bUseBinary1K: r || r === undefined,
					bValueIsInBytes: !i,
					bValueIsRate: i,
					nMinimumDigitsAfterDecimal: 0,
				}
			: {
					nDigitsAfterDecimal: 2,
					bUseBinary1K: true,
					bValueIsInBytes: true,
					bValueIsRate: false,
					nMinimumDigitsAfterDecimal: 0,
					...a,
				};
	const s = a.bUseBinary1K ? 1024 : 1000;
	const o = s * s;
	const l = o * s;
	const c = l * s;
	let m;
	let u = "";
	if (e > c) {
		m = e / c;
		u = "Tera";
	} else if (e > l) {
		m = e / l;
		u = "Giga";
	} else if (e > o) {
		m = e / o;
		u = "Mega";
	} else if (e > s) {
		m = e / s;
		u = "Kilo";
	} else {
		m = e;
	}
	const d =
		"#" +
		u +
		(a.bValueIsInBytes ? "bytes" : "bits") +
		(a.bValueIsRate ? "_PerSecond" : "");
	return (0, Localize)(
		d,
		m.toLocaleString(LocalizationManager.GetPreferredLocales(), {
			minimumFractionDigits: a.nMinimumDigitsAfterDecimal,
			maximumFractionDigits: a.nDigitsAfterDecimal,
		}),
	);
}
export function Dq(e, t = 0) {
	let r;
	if (t) {
		r = {
			maximumFractionDigits: t,
		};
	}
	if (e) {
		return e.toLocaleString(LocalizationManager.GetPreferredLocales(), r);
	} else {
		return "" + e;
	}
}
