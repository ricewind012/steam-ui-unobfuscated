var n = require(/*webcrack:missing*/ "./63696.js");
const i = n.createContext({
	AddImpression: () => {
		console.log("Impression Tracking not enabled");
	},
	BIsValid: () => false,
});
export function b() {
	return n.useContext(i);
}
