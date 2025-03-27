import "./63696.js";
import "./64608.js";
import "./10606.js";
import n from "./79769.js";
import "./52451.js";
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
