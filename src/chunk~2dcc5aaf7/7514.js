import n from "./63696.js";
export const CeContext = n.createContext({});
export const a_ = () => n.useContext(CeContext);
export function Zt(e, t) {
	return a_()[e] ?? t;
}
