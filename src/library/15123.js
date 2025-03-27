import r from "./63696.js";
import i from "./31084.js";
import s from "./21937.js";
import { R7 } from "./11131.js";
import { cZ } from "./52451.js";
const CContext = r.createContext(null);
export function D(e) {
	const { refContextMenuManager, bRegisterMenuManager = true, children } = e;
	const u = R7();
	const m = u?.ownerWindow || window;
	const d = r.useRef();
	d.current ||= new s.z();
	r.useLayoutEffect(() => {
		if (bRegisterMenuManager) {
			i.XX.SetMenuManager(m, d.current);
			return () => i.XX.SetMenuManager(m, undefined);
		}
	}, [m, bRegisterMenuManager]);
	r.useLayoutEffect(() => {
		cZ(refContextMenuManager, d.current);
		return () => cZ(refContextMenuManager, undefined);
	}, [refContextMenuManager]);
	return <CContext.Provider value={d.current}>{children}</CContext.Provider>;
}
export function h() {
	return r.useContext(CContext);
}
