import { createContext, useContext } from "./63696.js";
import i from "./46422.js";
import a from "./49171.js";
const SContext = createContext(null);
export function br() {
	const e = useContext(SContext) || l();
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
export const O0 = SContext.Provider;
