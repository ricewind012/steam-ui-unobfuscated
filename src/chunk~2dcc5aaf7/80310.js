import n from "./63696.js";
import { uH } from "./42898.js";
export function H(e, t) {
	const RRef = n.useRef();
	const ARef = n.useRef();
	const SRef = n.useRef();
	const ORef = n.useRef();
	const l = uH(e, t);
	n.useEffect(() => {
		if (!e && l) {
			if (RRef.current) {
				SRef.current = {
					scrollTop: RRef.current.scrollTop,
					scrollLeft: RRef.current.scrollLeft,
				};
			}
			if (ARef.current) {
				ORef.current = ARef.current.GetFocusSnapshot();
			}
		} else if (e && !l) {
			if (RRef.current && SRef.current) {
				const { scrollTop, scrollLeft } = SRef.current;
				SRef.current = undefined;
				window.setTimeout(() => {
					RRef.current.scrollTop = scrollTop;
					RRef.current.scrollLeft = scrollLeft;
				}, 1);
			}
			if (ARef.current && ORef.current) {
				ARef.current.RestoreFocusSnapshot(ORef.current, 2);
				ORef.current = undefined;
			}
		}
	}, [e, l]);
	return {
		bShouldMount: l || e,
		refNav: ARef,
		refScroll: RRef,
	};
}
