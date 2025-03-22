var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./79769.js");
var a = require(/*webcrack:missing*/ "./52451.js");
const s = (e) => e != null;
export function M(e, t) {
	const [r, i] = n.useState(window.localStorage.getItem(e));
	const o = n.useRef(e);
	n.useEffect(() => {
		if (e != o.current) {
			i(window.localStorage.getItem(e));
			o.current = e;
		}
	}, [e]);
	const c = e == o.current ? r : window.localStorage.getItem(e);
	let m = t;
	if (s(c)) {
		m = s(t)
			? typeof t == "boolean"
				? t.constructor(c !== "false")
				: t.constructor(c)
			: c;
	}
	(0, a.hL)(l.Get().GetLocalStoreChangeCallback(e), i);
	return [
		m,
		(t) => {
			const r = s(t) ? String(t) : null;
			window.localStorage.setItem(e, r);
			i(r);
			l.Get().GetLocalStoreChangeCallback(e).Dispatch(r);
		},
	];
}
class l {
	m_mapChangeCallback = new Map();
	GetLocalStoreChangeCallback(e) {
		if (!this.m_mapChangeCallback.has(e)) {
			this.m_mapChangeCallback.set(e, new i.lu());
		}
		return this.m_mapChangeCallback.get(e);
	}
	static s_Singleton;
	static Get() {
		l.s_Singleton ||= new l();
		return l.s_Singleton;
	}
}
