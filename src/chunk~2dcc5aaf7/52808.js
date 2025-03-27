import n, { I } from "./61416.js";
import i, { jE } from "./3715.js";
import a, { n as n_1 } from "./26667.js";
import s from "./67429.js";
import o from "./44926.js";
const l = "gr_per_game";
export const ov = "preset_default";
export const jY = 120;
function u() {
	return I({
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
	const { isError, isLoading, data } = u();
	return {
		isError: isError,
		isLoading: isLoading,
		rgGameID: data?.map((e) => new s.VS(e.gameid)),
	};
}
export function Mm(e) {
	const { isError, isLoading, data } = u();
	let i = true;
	let a = jY;
	let s = ov;
	let o = false;
	if (!isError && !isLoading && data) {
		const t = e?.ConvertTo64BitString();
		const r = data.find((e) => e.gameid == t);
		if (r) {
			i = r.enabled;
			a = r.infinite ? "infinite" : r.minutes;
			s = r.bitrate;
			o = i;
		}
	}
	return {
		isError: isError,
		isLoading: isLoading,
		bEnabled: i,
		cMinutes: a,
		strBitRate: s,
		bHasCustomSettings: o,
	};
}
export function lE() {
	const e = jE();
	return n_1({
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
	const t = jE();
	return n_1({
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
