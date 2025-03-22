var r = require(/*webcrack:missing*/ "./63696.js");
const i = (0, r.createContext)(undefined);
export const Rh = i.Provider;
export function LH() {
	const e = (0, r.useContext)(i);
	if (!e) {
		throw new Error("called useActiveAccount outside of ActiveAccountProvider");
	}
	return e.useActiveAccount();
}
