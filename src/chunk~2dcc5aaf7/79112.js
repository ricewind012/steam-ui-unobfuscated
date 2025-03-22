var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./46422.js");
var a = require("./49171.js");
const s = (0, n.createContext)(null);
export function br() {
	const e = (0, n.useContext)(s) || l();
	if (!e) {
		console.error("No navigator context found!");
	}
	return e;
}
function l() {
	return i.oy.ActiveWindowInstance?.Navigator || a.z.GetNavigator();
}
export function lF() {
	const e = l();
	return e || (console.error("No global navigator context found!"), null);
}
export const O0 = s.Provider;
