var n = require(/*webcrack:missing*/ "./83957.js");
var i = n;
var a = require(/*webcrack:missing*/ "./63696.js");
export function m(e) {
	const t = a.useRef(i.CancelToken.source());
	a.useEffect(() => {
		const r = t.current;
		return () => r.cancel(e ? `${e}: unmounting` : "unmounting");
	}, [e]);
	return t.current;
}
