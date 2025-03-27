import n, { Lc } from "./91720.js";
import i from "./44926.js";
import a from "./63696.js";
import s, { R7 } from "./11131.js";
import o, { ob } from "./52451.js";
let l = 0;
async function c(e, t, r) {
	const n = ((e) => (e + l++).replace(/[:\.,]?/g, "_"))(e);
	return new Promise((i, a) => {
		t.ownerWindow.SteamClient.Browser.SetPendingFilePath(n, e).then((e) => {
			const s = r?.ownerDocument ?? t.ownerWindow.document;
			if (e && s) {
				const e = s.createElement("input");
				e.setAttribute("type", "file");
				e.setAttribute("accept", `.valvefile${n}`);
				e.style.display = "none";
				e.addEventListener("change", () => {
					i(e.files[0]);
					s.body.removeChild(e);
				});
				e.addEventListener("cancel", () => {
					a("Unable to get File object");
					s.body.removeChild(e);
				});
				s.body.appendChild(e);
				t.ownerWindow.SteamClient.Browser.NotifyUserActivation();
				e.click();
			} else {
				a("Unable to get File object");
			}
		});
	});
}
export function Dp(e, t) {
	const { promise, reset } = ob();
	const i = R7();
	a.useEffect(() => {
		const { resolve } = reset();
		e.then((e) => {
			if (e) {
				c(e, i, t).then((e) => resolve(e));
			}
		});
	}, [e, reset, i, t]);
	return {
		filePromise: promise,
	};
}
function u(e, t, r, n) {
	return {
		bitrate_kbps: e,
		width: t,
		height: r,
		frames_per_second: n,
	};
}
const d = [
	u(30000, 3840, 2160, 60),
	u(24000, 3840, 2160, 30),
	u(12000, 1920, 1080, 60),
	u(8000, 1920, 1080, 30),
	u(5000, 1280, 720, 30),
	u(4000, 1280, 720, 30),
];
export function B(e, t, r) {
	const n = (t * 8) / 1024 / e;
	if (r <= n) {
		return {};
	}
	for (const e of d) {
		if (e.bitrate_kbps <= n) {
			return e;
		}
	}
	return null;
}
export function Mk(e) {
	return (d[d.length - 1].bitrate_kbps * 1024 * e) / 8;
}
export function Q1(e, t = {}) {
	const { browserContext, strFilePath, settings = {} } = t;
	return async (t) => {
		const a = await e.create(true);
		if (a.result != 1) {
			return {
				eResult: a.result,
			};
		}
		const s = await Fo(a.clipSummary, browserContext, t, strFilePath, settings);
		e.cleanup();
		return s;
	};
}
export async function Fo(e, t, r, a, s, o) {
	const { fnExportClip } = Lc();
	const e_clip_id = e.clip_id;
	let u;
	if (r) {
		const e = (e) => {
			if (e_clip_id == e.Body().clip_id()) {
				r(e.Body().progress() * 100);
			}
			return 1;
		};
		u = i.xM.RegisterForNotifyExportProgress(e).unregister;
	}
	try {
		const e = a ?? (await SteamClient.System.CreateTempPath("mp4"));
		const r = await fnExportClip(e_clip_id, e, s, o);
		if (u) {
			u();
		}
		if (r != 1) {
			return {
				eResult: r,
			};
		}
		return {
			eResult: 1,
			strExportPath: e,
			file: t ? await c(e, t) : undefined,
		};
	} catch (e) {
		if (u) {
			u();
		}
		console.error(e);
		return {
			eResult: 2,
		};
	}
}
export function aQ(e, t) {
	const r = R7();
	const n = e.nEstimatedBitrateKbps ?? 12000;
	const i = B(e.nClipLengthSeconds, t, n);
	if (i) {
		return {
			eResult: 1,
			fnExportClipToFit: Q1(e, {
				browserContext: r,
				settings: i,
			}),
		};
	} else {
		return {
			eResult: 25,
		};
	}
}
