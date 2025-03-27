import n from "./63696.js";
const IContext = n.createContext({
	AddImpression: () => {
		console.log("Impression Tracking not enabled");
	},
	BIsValid: () => false,
});
export function b() {
	return n.useContext(IContext);
}
