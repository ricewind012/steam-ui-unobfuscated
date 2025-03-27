import n from "./63696.js";
import i from "./41537.js";
export const MAContext = n.createContext(null);
export function ER(e) {
	return (
		<MAContext.Provider value={e.instance}>
			<i.F6 factory={e.instance.VirtualKeyboardManager}>{e.children}</i.F6>
		</MAContext.Provider>
	);
}
export const $2 = () => n.useContext(MAContext);
