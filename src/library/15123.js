var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./31084.js");
var s = require("./21937.js");
var o = require("./11131.js");
var a = require("./52451.js");
const c = r.createContext(null);
export function D(e) {
	const {
		refContextMenuManager: t,
		bRegisterMenuManager: n = true,
		children: l,
	} = e;
	const u = (0, o.R7)();
	const m = u?.ownerWindow || window;
	const d = r.useRef();
	d.current ||= new s.z();
	r.useLayoutEffect(() => {
		if (n) {
			i.XX.SetMenuManager(m, d.current);
			return () => i.XX.SetMenuManager(m, undefined);
		}
	}, [m, n]);
	r.useLayoutEffect(() => {
		(0, a.cZ)(t, d.current);
		return () => (0, a.cZ)(t, undefined);
	}, [t]);
	return r.createElement(
		c.Provider,
		{
			value: d.current,
		},
		l,
	);
}
export function h() {
	return r.useContext(c);
}
