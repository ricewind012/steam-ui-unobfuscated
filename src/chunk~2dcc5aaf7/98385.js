var n = require("./33572.js");
var i = require(/*webcrack:missing*/ "./63696.js");
export function w(e) {
	const [t, r] = i.useState();
	const a = (0, n.Xp)();
	i.useEffect(() => a.SubscribeToActionFunction(e, r), [a, e]);
	return t || undefined;
}
