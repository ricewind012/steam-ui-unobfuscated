import n from "./63696.js";
import i, { A } from "./90765.js";
import a from "./55661.js";
const s = a;
export function U() {
	const ERef = n.useRef();
	const [t, setT] = n.useState(true);
	const [a, setA] = n.useState(false);
	const l = () => {
		const e_current = ERef.current;
		const i = e_current == null || e_current.scrollTop <= 1;
		if (i != t) {
			setT(i);
		}
		const s =
			e_current == null ||
			e_current.scrollHeight - e_current.scrollTop <=
				e_current.clientHeight + 1;
		if (s != a) {
			setA(s);
		}
	};
	const c = A(s.ScrollFade, t && s.ScrolledToTop, a && s.ScrolledToBottom);
	n.useLayoutEffect(l);
	return {
		refForScrollable: ERef,
		strClassNamesForScrollable: c,
		fnOnScroll: l,
	};
}
