import { qL as VRStore } from "./45967.js";
import { p as VRGamepadUIMessages } from "./91369.js";
import { EResult } from "@steamclient_types/shared.js";

export function ShowVROverlay(strOverlayKey: string) {
	if (VRStore.IsSteamVRSimulatedOnDesktop) {
		console.log(
			"Failed to show ShowVROverlay, but this is probably expected because we're just simulating the VR dashboard on desktop",
		);
	} else {
		VRGamepadUIMessages.SteamVR.ShowOverlay({
			overlay_key: strOverlayKey,
		}).catch((ex) => {
			if (ex?.error?.error != EResult.OK) {
				throw ex;
			}
			SteamClient.OpenVR?.VROverlay.ShowDashboard(strOverlayKey);
		});
	}
}
