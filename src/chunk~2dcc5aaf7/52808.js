var n = require(/*webcrack:missing*/ "./61416.js");
var i = require(/*webcrack:missing*/ "./3715.js");
var a = require(/*webcrack:missing*/ "./26667.js");
var s = require("./67429.js");
var o = require("./44926.js");
const l = "gr_per_game";
export const ov = "preset_default";
export const jY = 120;
function u() {
	return (0, n.I)({
		queryKey: [l],
		queryFn: async () => {
			const e = await o.xM.GetPerGameSettings({});
			if (e.GetEResult() == 1) {
				return e.Body().toObject().settings ?? [];
			}
		},
	});
}
export function OL() {
	const { isError: e, isLoading: t, data: r } = u();
	return {
		isError: e,
		isLoading: t,
		rgGameID: r?.map((e) => new s.VS(e.gameid)),
	};
}
export function Mm(e) {
	const { isError: t, isLoading: r, data: n } = u();
	let i = true;
	let a = jY;
	let s = ov;
	let o = false;
	if (!t && !r && n) {
		const t = e?.ConvertTo64BitString();
		const r = n.find((e) => e.gameid == t);
		if (r) {
			i = r.enabled;
			a = r.infinite ? "infinite" : r.minutes;
			s = r.bitrate;
			o = i;
		}
	}
	return {
		isError: t,
		isLoading: r,
		bEnabled: i,
		cMinutes: a,
		strBitRate: s,
		bHasCustomSettings: o,
	};
}
export function lE() {
	const e = (0, i.jE)();
	return (0, a.n)({
		mutationFn: async (e) => {
			const t = await o.xM.SetPerGameSettings({
				game_settings: {
					gameid: e.gameID.ConvertTo64BitString(),
					...e,
				},
			});
			if (t.GetEResult() == 1) {
				return t.Body();
			}
		},
		onSuccess: () => {
			e.invalidateQueries({
				queryKey: [l],
			});
		},
	});
}
export function $k(e) {
	const t = (0, i.jE)();
	return (0, a.n)({
		mutationFn: async () => {
			const t = await o.xM.DeletePerGameSettings({
				gameid: e.ConvertTo64BitString(),
			});
			if (t.GetEResult() == 1) {
				return t.Body();
			}
		},
		onSuccess: () => {
			t.invalidateQueries({
				queryKey: [l],
			});
			o.xM.CleanupBackgroundRecordings({});
		},
	});
}
