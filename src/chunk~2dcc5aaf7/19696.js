import n from "./63696.js";
import { BSteamClientHasMethod } from "../../actual_src/steamclient/clientinterfacehelpers.js";
import a, { A } from "./90765.js";
import { GD } from "./90685.js";
export function Z(e) {
	const { popup, className, ...o } = e;
	const l = GD(popup);
	const CRef = n.useRef(null);
	n.useEffect(() => {
		const c_current = CRef.current;
		if (c_current && BSteamClientHasMethod(popup, "Window.SetResizeGrip")) {
			let r = 0;
			let n = 0;
			const i = c_current.getBoundingClientRect();
			const a = c_current.ownerDocument.defaultView;
			if (i && a && !l) {
				r = Math.ceil(a.innerWidth - i.left);
				n = Math.ceil(a.innerHeight - i.top);
			}
			popup.SteamClient.Window.SetResizeGrip(r, n);
		}
		return () => {
			if (BSteamClientHasMethod(popup, "Window.SetResizeGrip")) {
				popup.SteamClient.Window.SetResizeGrip(0, 0);
			}
		};
	}, [popup, l]);
	if (l) {
		return null;
	} else {
		return (
			<div className={A("window_resize_grip", className)} ref={CRef} {...o} />
		);
	}
}
