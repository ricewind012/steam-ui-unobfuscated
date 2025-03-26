var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./34461.js");
var a = require(/*webcrack:missing*/ "./31084.js");
var s = require("./39730.js");
var o = require("./35488.js");
import {
	BLocStringExists,
	Localize,
} from "../../actual_src/utils/localization.js";
var c = require(/*webcrack:missing*/ "./11131.js");
var m = require("./67429.js");
var u = require("./68438.js");
var d = require("./43271.js");
var A = require("./1385.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var g = require(/*webcrack:missing*/ "./736.js");
var h = require(/*webcrack:missing*/ "./72476.js");
var C = require("./51095.js");
var _ = require("./13869.js");
var f = require("./3874.js");
var b = require("./78057.js");
var y = require("./89748.js");
export function jE() {
	const e = (0, i.yZ)();
	return n.useCallback(
		(t, r) => {
			(0, a.lX)(
				n.createElement(
					i.Zz,
					{
						showConfirmationOverride: e,
					},
					n.createElement(w, {
						key: Date.now(),
						screenshot: t,
						summoningElement: r,
						showConfirmation: e,
					}),
				),
				r,
				{
					bOverlapHorizontal: true,
				},
			);
		},
		[e],
	);
}
function w(e) {
	const { screenshot: t, summoningElement: r, showConfirmation: i } = e;
	const {
		sendToChat: a,
		rgOptions: u,
		chatSendForbiddenMessage: d,
	} = (function (e, t, r) {
		const {
			copyToClipboard: i,
			saveToFile: a,
			sendToChat: u,
			uploadToSteam: d,
			sendToPhone: g,
		} = (function (e, t, r) {
			const i = B(e, t);
			const a = (0, c.k5)();
			const o = async (t) => {
				if (await H9(e)) {
					r(t, Localize("#Browser_URLCopied"));
				}
			};
			const u = async (t) => {
				if (e.remote) {
					return (0, s.H6)(e.remote.image_url, t, a);
				}
				const r = await i;
				const n = new m.VS(e.strGameID).GetAppID();
				return (0, s.H5)(r, t, a, n);
			};
			const d = async (t) => {
				const r = GetOwningWindowForEvent(t) ?? window;
				if (e.local) {
					const t = await SteamClient.Screenshots.GetLocalScreenshotPath(
						e.local.strGameID,
						e.local.hHandle,
					);
					const n = t.lastIndexOf(".");
					const i = n > -1 ? t.slice(n + 1) : ".jpg";
					const a = `${e.local.strGameID}_${e.local.hHandle}`;
					const s = await v(a, i, r);
					return !!s && SteamClient.System.CopyFile(t, s);
				}
				const n = e.remote.filename.lastIndexOf(".");
				const i = e.remote.filename.slice(0, n);
				const a = e.remote.filename.slice(n + 1);
				const s = await v(i, a, r);
				return Ct(e, s);
			};
			const g =
				!e.local || e.local.bUploaded
					? undefined
					: async (t) => (0, A.MS)(e, GetOwningWindowForEvent(t));
			const h = (function (e, t) {
				const r = (0, c.R7)();
				return () => {
					(0, _.pg)(
						n.createElement(M, {
							screenshot: e,
							summoningElement: t,
						}),
						r.ownerWindow,
					);
				};
			})(e, t);
			return {
				copyToClipboard: o,
				sendToChat: u,
				saveToFile: d,
				uploadToSteam: g,
				sendToPhone: h,
			};
		})(e, t, r);
		const C = (0, h.Y2)();
		const f = new m.VS(e.strGameID);
		const S = f.GetAppID();
		const w = (0, b.T)(S);
		const E = (0, y.Pp)();
		const R =
			w && w.bDisableUserMediaUpload
				? Localize("#ShareSheet_ScreenUploadNotAllowed")
				: undefined;
		const k = E
			? Localize("#ShareSheet_LimitedScreenshotNotAllowed")
			: undefined;
		return {
			sendToChat: u,
			rgOptions: [
				d &&
					!C && {
						key: "upload",
						onSelected: d,
						icon: n.createElement(o.Globe, null),
						label: Localize("#ShareSheet_ShareOnSteam"),
						disabled: R,
					},
				{
					key: "clipboard",
					onSelected: i,
					icon: n.createElement(o.Copy, null),
					label: Localize("#ExportClip_CopyClipboard"),
				},
				{
					key: "export",
					onSelected: a,
					icon: n.createElement(o.Download, null),
					label: Localize("#ScreenshotUploader_SaveImage"),
				},
				!C && {
					key: "sendmobile",
					onSelected: g,
					icon: n.createElement(o.Mobile, null),
					label: Localize("#ExportClip_SendToPhone"),
					disabled: R || k,
				},
			].filter(Boolean),
			chatSendForbiddenMessage: R || k,
		};
	})(t, r, i);
	return n.createElement(
		s.zu,
		{
			onSendToChat: a,
			summoningElement: r,
			chatSendForbiddenMessage: d,
		},
		n.createElement(s.t$, {
			options: u,
		}),
	);
}
function B(e, t) {
	const [r, i] = n.useState(Promise.resolve(null));
	const a = e.local?.strGameID;
	const s = e.local?.hHandle;
	n.useEffect(() => {
		if (a && typeof s == "number") {
			i(SteamClient.Screenshots.GetLocalScreenshotPath(a, s));
		}
	}, [a, s]);
	const { filePromise: o } = (0, u.Dp)(r, t);
	return o;
}
async function v(e, t, r) {
	if (!(0, g.Fj)(r, "System.OpenFileDialog")) {
		r = window;
	}
	const n = `*.${t}`;
	let i = n;
	const a = `#ExportImage_${t.toUpperCase()}_Desc`;
	if (BLocStringExists(a)) {
		i = Localize(a);
	}
	return await r.SteamClient.System.OpenFileDialog({
		strTitle: Localize("#ExportImage_Title"),
		bSaveMode: true,
		strInitialFile: `${e}.${t}`,
		rgFilters: [
			{
				rFilePatterns: [n],
				strFileTypeName: i,
				bUseAsDefault: true,
			},
		],
	});
}
export async function Ct(e, t) {
	if (!e.remote) {
		throw new Error("Cannot download non-remote screenshot");
	}
	const r = await fetch(e.remote.image_url);
	const n = await r.blob();
	const i = await n.arrayBuffer();
	return (
		await d.GZ.WriteFile({
			path: t,
			data: new Uint8Array(i),
		})
	).BSuccess();
}
const E = "3.9.1";
function M(e) {
	const { screenshot: t, summoningElement: r, ...i } = e;
	const a = B(t, r);
	return n.createElement(f.Or, {
		...i,
		onSendToPhone: async ({ performUpload: e }) => {
			let r = "";
			try {
				r = await SteamClient.Auth.GetLocalHostname();
			} catch (e) {
				console.error("Couldn't determine local hostname", e);
			}
			e({
				dataToUpload: a,
				eBucket: 3,
				eMediaType: 2,
				gameID: new m.VS(t.strGameID),
				strMachineName: r,
			});
		},
		minAppVersion: E,
	});
}
export async function H9(e) {
	if (e.local) {
		const t = await SteamClient.Screenshots.GetLocalScreenshotPath(
			e.local.strGameID,
			e.local.hHandle,
		);
		SteamClient.System.CopyFilesToClipboard([t]);
		return true;
	}
	try {
		let t = "jpeg";
		if (e.remote.filename) {
			const r = (0, C.tC)(e.remote.filename, ".");
			if (r) {
				t = r;
			}
		}
		const r = await SteamClient.System.CreateTempPath(t);
		if (await Ct(e, r)) {
			SteamClient.System.CopyFilesToClipboard([r]);
			return true;
		} else {
			console.error("Failed to write remote screenshot to disk.");
			return false;
		}
	} catch (e) {
		console.error(`Failed to write remote screenshot to clipboard: "${e}"`);
		return false;
	}
}
