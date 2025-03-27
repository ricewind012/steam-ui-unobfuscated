import r from "./63696.js";
import { gc } from "./42898.js";
const SContext = r.createContext(undefined);
export function VQ(e) {
	const { controller } = e;
	r.useEffect(() => {
		controller.Init();
	}, [controller]);
	return <SContext.Provider value={controller}>{e.children}</SContext.Provider>;
}
export function Vu() {
	return r.useContext(SContext);
}
export function QI() {
	return gc(Vu()?.GetShowDebugFocusRing()) ?? false;
}
