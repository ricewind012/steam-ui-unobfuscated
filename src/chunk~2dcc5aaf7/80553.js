import n from "./91369.js";
import i from "./45967.js";
export function c(e) {
	if (i.qL.IsSteamVRSimulatedOnDesktop) {
		console.log(
			"Failed to show ShowVROverlay, but this is probably expected because we're just simulating the VR dashboard on desktop",
		);
	} else {
		n.p.SteamVR.ShowOverlay({
			overlay_key: e,
		}).catch((t) => {
			if (t?.error?.error != 1) {
				throw t;
			}
			SteamClient.OpenVR?.VROverlay.ShowDashboard(e);
		});
	}
}
