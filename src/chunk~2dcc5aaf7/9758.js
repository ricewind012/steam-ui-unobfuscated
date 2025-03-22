var n = require("./63367.js");
var i = require(/*webcrack:missing*/ "./63696.js");
export function Z(e, t, r) {
	const a = (0, i.useRef)(undefined);
	const [s, o] = (0, i.useState)(false);
	let l = (0, i.useCallback)(() => o(false), [o]);
	let c = (0, i.useCallback)(
		(e, i) => {
			if (t !== false) {
				if (r) {
					let { rgParts: e, params: a } = (0, n.zK)(t, i);
					r({
						strURL: i,
						strFragmentURL: t,
						urlParams: a,
						urlParts: e,
					});
				}
				a.current?.SteamClient.Window.BringToFront();
				o(true);
			}
		},
		[t, r],
	);
	(0, i.useEffect)(() => {
		if (t === false) {
			return;
		}
		return n.Dt.RegisterForRunSteamURL(e, t, c).unregister;
	}, [e, t, c]);
	return [s, a, l];
}
export function q() {
	return (0, i.useCallback)((e) => {
		if (e) {
			e.SteamClient.Browser.NotifyUserActivation();
		}
	}, []);
}
