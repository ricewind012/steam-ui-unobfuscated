import { createContext, useContext } from "./63696.js";
const IContext = createContext(undefined);
export const Rh = IContext.Provider;
export function LH() {
	const e = useContext(IContext);
	if (!e) {
		throw new Error("called useActiveAccount outside of ActiveAccountProvider");
	}
	return e.useActiveAccount();
}
