import n from "./63696.js";
import i from "./78325.js";
import { yk, oJ } from "./91435.js";
import { tx } from "./3673.js";
import o from "./98995.js";
export function E(e) {
	const { active, children } = e;
	const l = yk() || tx(window);
	const C = oJ();
	const [m, setM] = n.useState(null);
	const [d, setD] = n.useState(false);
	const PRef = n.useRef();
	n.useEffect(() => {
		if (active) {
			const e = l.ShowPortalModal();
			const t = e.OnElementReadyCallbacks.Register(setM);
			const r = e.OnModalActiveCallbacks.Register(setD);
			PRef.current = e.key;
			return () => {
				setM(null);
				setD(false);
				e.Close();
				t.Unregister();
				r.Unregister();
			};
		}
	}, [l, active]);
	if (!m || !active) {
		return null;
	}
	let g = <o.C$>{children}</o.C$>;
	if (C) {
		g = (
			<C active={d} modalKey={PRef.current}>
				{g}
			</C>
		);
	}
	return i.createPortal(g, m);
}
