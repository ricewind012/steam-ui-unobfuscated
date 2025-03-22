var n = require("./7455.js");
var i = require("./34792.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./38602.js");
export function A(e) {
	const [t, r] = (0, i.VI)("game_notes_enable_spellcheck");
	return a.createElement(s.th, {
		store: n.L.Get(),
		bSpellcheckEnabled: t,
		setSpellcheckEnabled: r,
		...e,
	});
}
