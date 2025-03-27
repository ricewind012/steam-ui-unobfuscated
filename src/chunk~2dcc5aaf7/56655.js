import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import { A as A_1 } from "./90765.js";
import a from "./50376.js";
import s from "./64664.js";
import l, { Qn } from "./72476.js";
export const NHContext = n.createContext({
	bShowCompatInfo: false,
});
const m = () => n.useContext(NHContext);
export function er() {
	const { bShowCompatInfo } = m();
	const t = Qn();
	return bShowCompatInfo || (l.TS.ON_DECK && t);
}
export const $o = (e) => {
	const t = Wm(e.category);
	return n.createElement(
		"div",
		{
			className: A_1(s.SteamDeckCompatInfo, e.className),
		},
		n.createElement(a.lRD, null),
		n.createElement(t, {
			className: s.SteamDeckCompatIcon,
		}),
	);
};
const A = {
	1: a.jIP,
	2: a.aVR,
	3: a.o5Q,
	0: a.WX$,
};
export function Wm(e) {
	return A[e] || a.WX$;
}
const g = {
	3: "#DeckVerified_CategoryLabel_Verified",
	2: "#DeckVerified_CategoryLabel_Playable",
	1: "#DeckVerified_CategoryLabel_Unsupported",
	0: "#DeckVerified_CategoryLabel_Unknown",
};
export function Kt(e) {
	return (0, Localize)(g[e] || "#DeckVerified_CategoryLabel_Unknown");
}
const C = {
	3: "#DeckVerified_FilterLabel_Verified",
	2: "#DeckVerified_FilterLabel_Verified_Playable",
	0: "#DeckVerified_FilterLabel_Verified_Playable_Unknown",
	1: "#DeckVerified_FilterLabel_AllGames",
};
export function eS(e) {
	return (0, Localize)(C[e] || "#DeckVerified_FilterLabel_Unknown");
}
const f = {
	3: "#DeckVerified_FilterDescription_Verified",
	2: "#DeckVerified_FilterDescription_Verified_Playable",
	0: "#DeckVerified_FilterDescription_Verified_Playable_Unknown",
	1: "#DeckVerified_FilterDescription_AllGames",
};
export function C6(e) {
	return (0, Localize)(f[e] || "#DeckVerified_FilterLabel_Unknown");
}
