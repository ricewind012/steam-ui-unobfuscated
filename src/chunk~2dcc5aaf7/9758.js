import n, { zK } from "./63367.js";
import i, { useRef, useState, useCallback, useEffect } from "./63696.js";
export function Z(e, t, r) {
	const ARef = useRef(undefined);
	const [s, setS] = useState(false);
	let l = useCallback(() => setS(false), [setS]);
	let c = useCallback(
		(e, i) => {
			if (t !== false) {
				if (r) {
					let { rgParts, params } = zK(t, i);
					r({
						strURL: i,
						strFragmentURL: t,
						urlParams: params,
						urlParts: rgParts,
					});
				}
				ARef.current?.SteamClient.Window.BringToFront();
				setS(true);
			}
		},
		[t, r],
	);
	useEffect(() => {
		if (t === false) {
			return;
		}
		return n.Dt.RegisterForRunSteamURL(e, t, c).unregister;
	}, [e, t, c]);
	return [s, ARef, l];
}
export function q() {
	return useCallback((e) => {
		if (e) {
			e.SteamClient.Browser.NotifyUserActivation();
		}
	}, []);
}
