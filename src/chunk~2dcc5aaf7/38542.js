var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./18057.js");
var a = require("./46422.js");
export function Ux() {
	return (0, i.Qt)("steam://run/250820");
}
export function ey() {
	return n.useCallback(() => SteamClient.OpenVR?.QuitAllVR(), []);
}
export function e0(e) {
	n.useEffect(() => {
		const t = SteamClient.OpenVR?.VROverlay.RegisterForThumbnailChanged(e);
		return () => t?.unregister();
	}, [e]);
}
export function oH(e, t) {
	n.useEffect(() => {
		const r = e?.SteamClient.OpenVR?.VROverlay.RegisterForVisibilityChanged(t);
		return () => r?.unregister();
	}, [e, t]);
}
export function ld(e, t = []) {
	const r = a.oy.WindowStore.GetVRWindowInstance();
	const [i, s] = n.useState(true);
	n.useEffect(() => {
		const e =
			r?.BrowserWindow?.SteamClient.OpenVR?.VROverlay.RegisterForVisibilityChanged(
				s,
			);
		return () => e?.unregister();
	}, [r]);
	n.useEffect(() => {
		if (i) {
			return e();
		}
	}, [i, ...t]);
}
