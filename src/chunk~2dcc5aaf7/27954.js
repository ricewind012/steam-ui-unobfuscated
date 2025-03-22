require(/*webcrack:missing*/ "./63696.js");
require("./64608.js");
require("./10606.js");
var n = require(/*webcrack:missing*/ "./79769.js");
require(/*webcrack:missing*/ "./52451.js");
let i = null;
let a = new n.lu();
const s = "ReactQueryDevtoolsVisible";
export function A(e) {
	i = e;
	if (e) {
		window.localStorage.setItem(s, "true");
	} else {
		window.localStorage.removeItem(s);
	}
	a.Dispatch();
}
