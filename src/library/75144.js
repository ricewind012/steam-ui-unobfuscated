import r from "./63696.js";
import i from "./3715.js";
import _s from "./38215.js";
import "./42318.js";
export function s(e) {
	const { steamUI } = e;
	const NRef = r.useRef(L);
	r.useEffect(() => {
		L.setDefaultOptions({
			queries: {
				staleTime: Infinity,
				networkMode: steamUI ? "offlineFirst" : undefined,
			},
		});
	}, [steamUI]);

	let { children, debug } = e;

	return <i.Ht client={NRef.current}>{children}</i.Ht>;
}
export const L = new _s.E({});
