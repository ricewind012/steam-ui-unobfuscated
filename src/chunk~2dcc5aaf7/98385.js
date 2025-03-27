import { Xp } from "./33572.js";
import i from "./63696.js";
export function w(e) {
	const [t, setT] = i.useState();
	const a = Xp();
	i.useEffect(() => a.SubscribeToActionFunction(e, setT), [a, e]);
	return t || undefined;
}
