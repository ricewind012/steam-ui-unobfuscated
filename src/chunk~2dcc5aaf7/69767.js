import {
	Localize,
	LocalizeInlineReactWithFallback,
} from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./32179.js";
import a from "./87935.js";
import s, { wF } from "./34891.js";
import o from "./46422.js";
import l, { q3 } from "./90095.js";
import { VI } from "./34792.js";
import { M } from "./51517.js";
import { I } from "./61416.js";
import A from "./72476.js";
import { T } from "./78057.js";
export function Y5(e) {
	const t = q3(() => o.oy.RunningApps);
	const r = wF(e);
	let n = false;
	for (const r of t) {
		if (e == r.GetGameID()) {
			n = true;
			break;
		}
	}
	if (n) {
		return r;
	} else {
		return s.KB.NotRunning;
	}
}
export function XP(e, t) {
	const r = i.p6.GetMyAchievementsByID(e);
	if (r.loading) {
		return null;
	}
	const n = r.data?.get(t);
	return {
		name: n?.name(),
		description: n?.desc(),
		iconURL: n?.image_url_achieved(),
	};
}
export function Nd(e, t) {
	const r = T(e);
	const n = r?.libraryAssets?.strTimeLineMarker;
	const i = I({
		queryKey: [e, n],
		enabled: !!n,
		queryFn: async () => {
			const t = new Map();
			try {
				const r = `https://steamloopback.host${a.B7.BuildCachedLibraryAssetURL(
					e,
					n,
					0,
				)}`;
				let i = await fetch(r);
				console.log(`Issued fetch to ${r}; response_ok is ${i.ok}`);
				if (i.status == 404) {
					SteamClient.Apps.ReportLibraryAssetCacheMiss(e, 6);
					const t = `${A.TS.BASE_URL_SHARED_CDN}app_config/timeline/${e}/${n}`;
					i = await fetch(t);
				}
				if (!i.ok) {
					return null;
				}
				const s = await i.text();
				const o = new DOMParser();
				const l = o
					.parseFromString(s, "image/svg+xml")
					.getElementsByTagName("defs")[0];
				Array.from(l.children).forEach((e) => {
					const r = e;
					t.set(e.id, r);
				});
			} catch (e) {
				console.error("CGameTimelineMarkerStore: Error fetching SVG file:", e);
			}
			return t;
		},
	});
	return i.data?.get(t);
}
export function nH() {
	const [e, setE] = n.useState();
	const r = n.useCallback((e) => {
		setE(e);
	}, []);
	n.useEffect(() => {
		const e = SteamClient.Broadcast.RegisterForBroadcastStatus(r);
		return () => e.unregister();
	}, [r]);
	return e?.bIsBroadcasting;
}
const f = {
	m_nKbps800p: 3750,
	m_nKbps1080p: 6000,
	m_nKbps1440p: 11000,
	m_nKbps2160p: 19000,
};
const b = {
	m_nKbps800p: 5600,
	m_nKbps1080p: 9000,
	m_nKbps1440p: 16500,
	m_nKbps2160p: 28500,
};
const y = {
	m_nKbps800p: 7500,
	m_nKbps1080p: 12000,
	m_nKbps1440p: 22000,
	m_nKbps2160p: 38000,
};
const S = {
	m_nKbps800p: 12000,
	m_nKbps1080p: 24000,
	m_nKbps1440p: 32000,
	m_nKbps2160p: 50000,
};
export function mg(e) {
	let t = e.split("_");
	if (t.length == 2 && t[0] == "preset") {
		e = t[1];
	}
	if (e == "low") {
		return f;
	} else if (e == "medium") {
		return b;
	} else if (e == "high" || e == "default") {
		return y;
	} else if (e == "ultra") {
		return S;
	} else {
		return undefined;
	}
}
export function YH(e, t, r) {
	let n = mg(e);
	if (n) {
		if (r >= 2160) {
			return n.m_nKbps2160p;
		} else if (r >= 1440) {
			return n.m_nKbps1440p;
		} else if (r >= 1080) {
			return n.m_nKbps1080p;
		} else {
			return n.m_nKbps800p;
		}
	} else {
		return 0;
	}
}
export function d5(e) {
	const [t, r] = VI("enable_gpu_accelerated_webviews");
	const [i, a] = VI("enable_hardware_video_decoding");
	const s = n.useCallback(() => {
		r(true);
		a(true);
		SteamClient.User.StartRestart(false);
	}, [r, a]);
	return M({
		bCloseOnOK: true,
		onOK: s,
		strTitle: (0, Localize)("#TurnOnGPUAccel_Title"),
		strDescription: LocalizeInlineReactWithFallback(
			"#TurnOnGPUAccel_Description",
			<p />,
			<p />,
		),
		strOKButtonText: (0, Localize)("#TurnOnGPUAccel_AcceptAndRestart"),
		className: e,
	});
}
