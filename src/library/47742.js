import r from "./63696.js";
let i = 0;
export function l() {
	const ERef = r.useRef();
	if (ERef.current === undefined) {
		ERef.current = `svgid_${i++}`;
	}
	return [ERef.current, `url(#${ERef.current})`];
}
