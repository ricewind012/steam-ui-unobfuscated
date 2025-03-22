var r = require(/*webcrack:missing*/ "./63696.js");
var i = require("./45328.js");
require("./72476.js");
var s = require("./92059.js");
export function A(e) {
	const { children: t, ...n } = e;
	const o = (0, s.n9)();
	const a = r.useMemo(
		() => ({
			...i.Ay.GetDefaultParams(),
			...o,
			...n,
		}),
		[o, n.domain, n.controller, n.method, n.submethod, n.feature, n.depth],
	);
	return r.createElement(
		s.nn,
		{
			...a,
		},
		t,
	);
}
