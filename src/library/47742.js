var r = require(/*webcrack:missing*/ "./63696.js");
let i = 0;
export function l() {
	const e = r.useRef();
	if (e.current === undefined) {
		e.current = "svgid_" + i++;
	}
	return [e.current, `url(#${e.current})`];
}
