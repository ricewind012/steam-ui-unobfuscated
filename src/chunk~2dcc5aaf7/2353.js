var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./90765.js");
var a = require("./55661.js");
var s = a;
export function U() {
	const e = n.useRef();
	const [t, r] = n.useState(true);
	const [a, o] = n.useState(false);
	const l = () => {
		const n = e.current;
		const i = n == null || n.scrollTop <= 1;
		if (i != t) {
			r(i);
		}
		const s = n == null || n.scrollHeight - n.scrollTop <= n.clientHeight + 1;
		if (s != a) {
			o(s);
		}
	};
	const c = (0, i.A)(
		s.ScrollFade,
		t && s.ScrolledToTop,
		a && s.ScrolledToBottom,
	);
	n.useLayoutEffect(l);
	return {
		refForScrollable: e,
		strClassNamesForScrollable: c,
		fnOnScroll: l,
	};
}
