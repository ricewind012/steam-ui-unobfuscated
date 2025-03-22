var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./94361.js");
export function p(e) {
	const { children: t, name: r } = e;
	var a;
	a = r;
	n.useEffect(() => {
		i.y.ReportTrackedComponent(a);
	}, [a]);
	return n.createElement(n.Fragment, null, t);
}
export function L(e) {
	i.y.ReportTrackedAction(e);
}
