import { Localize } from "../../actual_src/utils/localization.js";
import { q3 } from "./90095.js";
import a from "./63696.js";
import s from "./54355.js";
import { A as A_1 } from "./90765.js";
import { aO } from "./92374.js";
import m from "./98995.js";
import { Ks } from "./91720.js";
import d from "./83247.js";
import A from "./69164.js";
export let KB;
export function fH() {
	const e = wF(aO().GetGameID());
	if (e === KB.NotRecording || e === KB.NotRunning) {
		return null;
	} else {
		return <G />;
	}
}
function G(e) {
	const t = aO();
	const r = q3(() => t.GetIsLiveEdge() && !t.GetHidePlayer());
	const n = a.useCallback(() => {
		t.SetHidePlayer(false);
		t.GetGameRecordingVideo().Play();
		const e = t.GetLiveEdgeMS();
		t.SetPlaytimeFromGlobalMS(e);
		t.FocusGlobalMS(e);
	}, [t]);
	return (
		<m.he
			className={s.GoLiveButtonCtn}
			toolTipContent={Localize(
				r ? "#Playback_AtLatest" : "#Playback_JumpToLatest",
			)}
			direction="bottom"
		>
			<A.Z onClick={n} className={A_1(s.GoLiveButton, r && s.IsLive)}>
				<d.xA className={A_1(s.JumpToEndIcon)} />
			</A.Z>
		</m.he>
	);
}
export function wF(e) {
	const { app } = Ks(e);
	if (!app) {
		return KB.NotRecording;
	}
	switch (app.recording_type) {
		default:
		case 0:
		case 1: {
			return KB.NotRecording;
		}
		case 2: {
			return KB.ManualRecording;
		}
		case 3: {
			return KB.BackgroundRecording;
		}
	}
}
((e) => {
	e.NotRunning = "NotRunning";
	e.NotRecording = "NotRecording";
	e.ManualRecording = "ManualRecording";
	e.BackgroundRecording = "BackgroundRecording";
	e.ForeverRecording = "ForeverRecording";
})((KB ||= {}));
