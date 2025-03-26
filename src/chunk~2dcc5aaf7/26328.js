var n = require(/*webcrack:missing*/ "./63696.js");
import { Localize } from "../../actual_src/utils/localization.js";
var a = require(/*webcrack:missing*/ "./61416.js");
var s = require("./42010.js");
export function K(e) {
	let t = (0, a.I)({
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
		return n.createElement(s.y, {
			type: "warning",
			heading: Localize("#Settings_VideoRecording_DriverCheck_Header"),
			body: o,
		});
	} else {
		return null;
	}
}
