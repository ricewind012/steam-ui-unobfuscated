var r = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./3715.js");
var _s = require(/*webcrack:missing*/ "./38215.js");
require("./42318.js");
export function s(e) {
	const { steamUI: t } = e;
	const n = r.useRef(L);
	r.useEffect(() => {
		L.setDefaultOptions({
			queries: {
				staleTime: Infinity,
				networkMode: t ? "offlineFirst" : undefined,
			},
		});
	}, [t]);
	let s = e.children;
	e.debug;
	return r.createElement(
		i.Ht,
		{
			client: n.current,
		},
		s,
	);
}
export const L = new _s.E({});
