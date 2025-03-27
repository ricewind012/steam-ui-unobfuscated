import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import { I } from "./61416.js";
import s from "./42010.js";
export function K(e) {
	let t = I({
		queryKey: ["VideoRecordingDriverCheck"],
		queryFn: () => SteamClient.System.VideoRecordingDriverCheck(),
	});
	if (!t.data) {
		return null;
	}
	let r = t.data.needUpdate;
	if (!r) {
		return null;
	}
	let o = "";
	if (r.nvidia) {
		o = Localize("#Settings_VideoRecording_NvidiaDriverUpdate", r.nvidia);
	}
	if (o) {
		return (
			<s.y
				type="warning"
				heading={Localize("#Settings_VideoRecording_DriverCheck_Header")}
				body={o}
			/>
		);
	} else {
		return null;
	}
}
