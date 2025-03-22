var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require(/*webcrack:missing*/ "./50376.js");
var s = require(/*webcrack:missing*/ "./64664.js");
var o = require(/*webcrack:missing*/ "./46108.js");
var l = require(/*webcrack:missing*/ "./72476.js");
export const nH = n.createContext({
	bShowCompatInfo: false,
});
const m = () => n.useContext(nH);
export function er() {
	const { bShowCompatInfo: e } = m();
	const t = (0, l.Qn)();
	return e || (l.TS.ON_DECK && t);
}
export const $o = (e) => {
	const t = Wm(e.category);
	return n.createElement(
		"div",
		{
			className: (0, i.A)(s.SteamDeckCompatInfo, e.className),
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
	return (0, o.we)(g[e] || "#DeckVerified_CategoryLabel_Unknown");
}
const C = {
	3: "#DeckVerified_FilterLabel_Verified",
	2: "#DeckVerified_FilterLabel_Verified_Playable",
	0: "#DeckVerified_FilterLabel_Verified_Playable_Unknown",
	1: "#DeckVerified_FilterLabel_AllGames",
};
export function eS(e) {
	return (0, o.we)(C[e] || "#DeckVerified_FilterLabel_Unknown");
}
const f = {
	3: "#DeckVerified_FilterDescription_Verified",
	2: "#DeckVerified_FilterDescription_Verified_Playable",
	0: "#DeckVerified_FilterDescription_Verified_Playable_Unknown",
	1: "#DeckVerified_FilterDescription_AllGames",
};
export function C6(e) {
	return (0, o.we)(f[e] || "#DeckVerified_FilterLabel_Unknown");
}
