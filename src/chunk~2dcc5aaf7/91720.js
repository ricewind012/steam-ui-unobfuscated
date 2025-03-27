import n, { useState, useEffect, useMemo } from "./63696.js";
import i, { q3 } from "./90095.js";
import a, { mJ } from "./89193.js";
import { V } from "./54362.js";
const s = "/images/StorageClips.png";
const o = "/images/StorageScreenshots.png";
const l = "/images/StorageVideos.png";
export function Tq() {
	return window.g_GRS;
}
export async function Z9(e, t, n) {
	if (!Tq()) {
		const [{ CGameRecordingStore: i }] = await Promise.all([
			Promise.resolve().then(require.bind(require, 57622)),
		]);
		if (n) {
			V(n);
		}
		let a = new i();
		await a.Init(e, t);
		window.g_GRS = a;
	}
}
function d() {
	if (Tq() != null) {
		const e = Tq();
		return {
			bLoading: e.BLoadingAppsWithBackgroundVideo(),
			rgApps: e.GetAppsWithBackgroundVideo(),
		};
	}
	return {
		bLoading: false,
		rgApps: [],
	};
}
export function z() {
	const [e, setE] = useState(d());
	useEffect(() => mJ(d, setE), []);
	return e;
}
export function Ks(e) {
	const { bLoading, rgApps } = z();
	return {
		bLoading: bLoading,
		app: useMemo(() => rgApps.find((t) => t.game_id === e), [rgApps, e]),
	};
}
export function kP(e) {
	return Tq().GetTimelineLoaderForGame(e);
}
export function Y$(e) {
	return Tq().GetTimelineLoaderForClip(e);
}
export function pw(e) {
	return Tq().GetTimelineLoaderForSharedClip(e);
}
function _(e) {
	if (Tq() != null) {
		return {
			bLoading: Tq()?.BLoadingClips(),
			rgClipHandles: Tq()?.GetClipIDs(e),
		};
	} else {
		return {
			bLoading: false,
			rgClipHandles: [],
		};
	}
}
export function Km(e) {
	const [t, setT] = useState(() => _(e));
	useEffect(() => {
		setT(_(e));
		return mJ(() => _(e), setT);
	}, [e]);
	return t;
}
export function y$(e) {
	return q3(() => Tq()?.GetClipSummaries(e));
}
export function XA(e) {
	return Tq()?.GetClipSummary(e);
}
export function RV(e) {
	return (Tq() != null && e && Tq().GetClipSummariesForGame(e)) || [];
}
export function uX(e) {
	return q3(() => Tq()?.GetClipSummary(e));
}
export function $O(e) {
	return q3(() => (e && Tq()?.GetClipSummariesForGame(e)) || []);
}
export function c5(e, t, r, n, i, a) {
	if (Tq() != null) {
		return Tq().LoadThumbnails(e, t, r, n, i, a ?? true);
	} else {
		return null;
	}
}
export function WQ() {
	if (Tq() != null) {
		return {
			fnSaveClip: Tq().SaveClip,
		};
	} else {
		return {};
	}
}
export function Gb() {
	if (Tq() != null) {
		return {
			fnDeleteClip: Tq().DeleteClip,
		};
	} else {
		return {};
	}
}
export function Sm() {
	if (Tq() != null) {
		return {
			fnUploadClip: Tq().UploadClip,
		};
	} else {
		return {};
	}
}
export function Lc() {
	if (Tq() != null) {
		return {
			fnExportClip: Tq().ExportClip,
			fnUpdateExportPath: Tq().UpdateClipExportPath,
		};
	} else {
		return {};
	}
}
export function YM(e, t, r) {
	if (Tq() != null) {
		return Tq().TakeScreenshot(e, t, r.valMS);
	} else {
		return null;
	}
}
export function Bn(e) {
	return q3(() => {
		if (Tq() != null) {
			return Tq().GetClipExportProgress(e);
		}
	});
}
export function qq() {
	if (Tq() != null) {
		return {
			fnStartRecording: Tq().StartRecording,
			fnStopRecording: Tq().StopRecording,
		};
	} else {
		return {};
	}
}
export function Zc() {
	if (Tq() != null) {
		return Tq().SwitchRecordedGame;
	}
}
export function Od(e, t) {
	if (Tq() != null) {
		return Tq().RegisterManualRecordingCallback(e, t);
	} else {
		return () => {};
	}
}
export function Hg() {
	if (Tq() != null) {
		return Tq().GetRecordingState();
	} else {
		return null;
	}
}
export function Fc() {
	if (Tq() != null) {
		return {
			fnCreateUserTimelineMarkers: Tq().CreateUserTimelineMarkers,
			fnUpdateUserTimelineMarkers: Tq().UpdateUserTimelineMarkers,
			fnRemoveUserTimelineMarker: Tq().RemoveUserTimelineMarker,
		};
	} else {
		return null;
	}
}
export function dd(e, t) {
	return q3(() => {
		if (Tq() != null) {
			return Tq().GetAchievementInfo(e, t);
		}
	});
}
export function i3() {
	return q3(() => {
		if (Tq() != null) {
			return Tq().GetLastClip();
		}
	});
}
export function f5(e) {
	if (Tq() != null) {
		Tq().ManuallyDeleteRecordingForApps(e);
	}
}
export function yH(e, t) {
	const [r, setR] = n.useState(0);
	useEffect(() => {
		if (Tq() != null) {
			Tq()
				.GetTotalDiskSpaceUsage(e, t)
				.then((e) => setR(e));
		}
	}, [e, t]);
	return r;
}
export function sT(e, t, r, n, i) {
	return Tq().ReportClipShare(e, t, r, n, i);
}
export function gu(e, t, r, n, i) {
	return Tq().ReportClipRange(e, t, r, n, i);
}
export function zZ(e) {
	switch (e) {
		default:
		case 0: {
			return l;
		}
		case 1: {
			return s;
		}
		case 2: {
			return o;
		}
	}
}
export async function e6() {
	if (Tq() != null) {
		await Tq().CheckEnoughDiskSpace();
	}
}
export function r6() {
	return q3(() => {
		if (Tq() != null) {
			return !Tq().BEnoughDiskSpace();
		}
	});
}
export async function Xg(e, t) {
	return await Tq().GetRecordingHighlights(e, t);
}
