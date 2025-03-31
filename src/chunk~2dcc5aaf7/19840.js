import n from "./63696.js";
import { CCallbackList } from "../../actual_src/utils/callbackutils";
import { hL } from "./52451.js";
const s = (e) => e != null;
export function M(e, t) {
	const [r, setR] = n.useState(window.localStorage.getItem(e));
	const ORef = n.useRef(e);
	n.useEffect(() => {
		if (e != ORef.current) {
			setR(window.localStorage.getItem(e));
			ORef.current = e;
		}
	}, [e]);
	const c = e == ORef.current ? r : window.localStorage.getItem(e);
	let m = t;
	if (s(c)) {
		m = s(t)
			? typeof t == "boolean"
				? t.constructor(c !== "false")
				: t.constructor(c)
			: c;
	}
	hL(l.Get().GetLocalStoreChangeCallback(e), setR);
	return [
		m,
		(t) => {
			const r = s(t) ? String(t) : null;
			window.localStorage.setItem(e, r);
			setR(r);
			l.Get().GetLocalStoreChangeCallback(e).Dispatch(r);
		},
	];
}
class l {
	m_mapChangeCallback = new Map();
	GetLocalStoreChangeCallback(e) {
		if (!this.m_mapChangeCallback.has(e)) {
			this.m_mapChangeCallback.set(e, new CCallbackList());
		}
		return this.m_mapChangeCallback.get(e);
	}
	static s_Singleton;
	static Get() {
		l.s_Singleton ||= new l();
		return l.s_Singleton;
	}
}
