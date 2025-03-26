export var KB;
var i = require(/*webcrack:missing*/ "./90095.js");
var a = require(/*webcrack:missing*/ "./63696.js");
var s = require("./54355.js");
var o = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var c = require("./92374.js");
var m = require(/*webcrack:missing*/ "./98995.js");
var u = require("./91720.js");
var d = require("./83247.js");
var A = require(/*webcrack:missing*/ "./69164.js");
export function fH() {
	const e = wF((0, c.aO)().GetGameID());
	if (e === KB.NotRecording || e === KB.NotRunning) {
		return null;
	} else {
		return a.createElement(g, null);
	}
}
function g(e) {
	const t = (0, c.aO)();
	const r = (0, i.q3)(() => t.GetIsLiveEdge() && !t.GetHidePlayer());
	const n = a.useCallback(() => {
		t.SetHidePlayer(false);
		t.GetGameRecordingVideo().Play();
		const e = t.GetLiveEdgeMS();
		t.SetPlaytimeFromGlobalMS(e);
		t.FocusGlobalMS(e);
	}, [t]);
	return a.createElement(
		m.he,
		{
			className: s.GoLiveButtonCtn,
			toolTipContent: Localize(
				r ? "#Playback_AtLatest" : "#Playback_JumpToLatest",
			),
			direction: "bottom",
		},
		a.createElement(
			A.Z,
			{
				onClick: n,
				className: (0, o.A)(s.GoLiveButton, r && s.IsLive),
			},
			a.createElement(d.xA, {
				className: (0, o.A)(s.JumpToEndIcon),
			}),
		),
	);
}
export function wF(e) {
	const { app: t } = (0, u.Ks)(e);
	if (!t) {
		return KB.NotRecording;
	}
	switch (t.recording_type) {
		default:
		case 0:
		case 1:
			return KB.NotRecording;
		case 2:
			return KB.ManualRecording;
		case 3:
			return KB.BackgroundRecording;
	}
}
(function (e) {
	e.NotRunning = "NotRunning";
	e.NotRecording = "NotRecording";
	e.ManualRecording = "ManualRecording";
	e.BackgroundRecording = "BackgroundRecording";
	e.ForeverRecording = "ForeverRecording";
})((KB ||= {}));
