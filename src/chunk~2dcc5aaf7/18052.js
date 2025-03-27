import n from "./63696.js";
import { O7 } from "./90242.js";
import a from "./84252.js";
import s, { Fx } from "./73375.js";
export const p = "data:text/html,%3Cbody%3E%3C%2Fbody%3E";
export function c(e) {
	let e_browser = e.browser;
	const RRef = n.useRef();
	O7(RRef, e.visible);
	((e, t, r) => {
		r = !!r;
		n.useEffect(() => {
			if (r && !t) {
				e.LoadURL(p);
			}
		}, [t, e, r]);
	})(e_browser, e.visible, e.clearWhenInvisble);
	((e) => {
		n.useEffect(() => () => e.SetVisible(false), [e]);
	})(e_browser);
	const l = Fx(e_browser, 1);
	let c = n.useCallback(() => {
		e_browser.SetFocus(true);
		l();
	}, [e_browser, l]);
	let m = n.useCallback(() => {
		e_browser.SetFocus(false);
	}, [e_browser]);
	let u = {
		position: "relative",
	};
	if (!e.visible) {
		u.display = "none";
	}
	return (
		<a.B2
			style={u}
			className={e.className}
			navID={e.navID}
			navTreeRef={RRef}
			onActivated={c}
			onDeactivated={m}
		>
			<s.m4
				style={{
					position: "absolute",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				}}
				browser={e_browser}
				visible={e.visible}
			/>
		</a.B2>
	);
}
