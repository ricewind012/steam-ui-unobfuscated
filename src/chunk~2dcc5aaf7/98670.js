import { Localize } from "../../actual_src/utils/localization.js";
export function JS(e) {
	switch (e) {
		case 29:
		case 27:
		case 2:
		case 4:
		case 5:
		case 6:
		case 8:
		case 7:
		case 9:
		case 11:
		case 17:
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 35:
		case 25:
		case 26:
		case 31:
		case 32:
		case 1:
		case 34: {
			return true;
		}
	}
	return false;
}
export function rG(e) {
	let t = `#PartnerEvent_${e}`;
	let r = Localize(t);
	if (r != t) {
		return r;
	} else {
		return Localize("#PartnerEvent_Other");
	}
}
