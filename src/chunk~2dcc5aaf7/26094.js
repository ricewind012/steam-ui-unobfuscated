import {
	BLocStringExists,
	Localize,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i, { yZ } from "./34461.js";
import a, { lX } from "./31084.js";
import s, { H6, H5 } from "./39730.js";
import o from "./35488.js";
import { k5, R7 } from "./11131.js";
import m from "./67429.js";
import u, { Dp } from "./68438.js";
import d from "./43271.js";
import { MS } from "./1385.js";
import g, { Fj } from "./736.js";
import h, { Y2 } from "./72476.js";
import C, { tC } from "./51095.js";
import { pg } from "./13869.js";
import f from "./3874.js";
import { T } from "./78057.js";
import { Pp } from "./89748.js";
export function jE() {
	const e = yZ();
	return n.useCallback(
		(t, r) => {
			lX(
				<i.Zz showConfirmationOverride={e}>
					<W
						key={Date.now()}
						screenshot={t}
						summoningElement={r}
						showConfirmation={e}
					/>
				</i.Zz>,
				r,
				{
					bOverlapHorizontal: true,
				},
			);
		},
		[e],
	);
}
function W(e) {
	const { screenshot, summoningElement, showConfirmation } = e;
	const { sendToChat, rgOptions, chatSendForbiddenMessage } = ((e, t, r) => {
		const {
			copyToClipboard,
			saveToFile,
			sendToChat: sendToChat_1,
			uploadToSteam,
			sendToPhone,
		} = ((e, t, r) => {
			const i = B(e, t);
			const a = k5();
			const o = async (t) => {
				if (await H9(e)) {
					r(t, Localize("#Browser_URLCopied"));
				}
			};
			const u = async (t) => {
				if (e.remote) {
					return H6(e.remote.image_url, t, a);
				}
				const r = await i;
				const n = new m.VS(e.strGameID).GetAppID();
				return H5(r, t, a, n);
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
				!e.local ||
				e.local.bUploaded ||
				(async (t) => MS(e, GetOwningWindowForEvent(t)));
			const h = ((e, t) => {
				const r = R7();
				return () => {
					pg(<M screenshot={e} summoningElement={t} />, r.ownerWindow);
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
		const C = Y2();
		const f = new m.VS(e.strGameID);
		const S = f.GetAppID();
		const w = T(S);
		const E = Pp();
		const R =
			w && w.bDisableUserMediaUpload
				? Localize("#ShareSheet_ScreenUploadNotAllowed")
				: undefined;
		const k = E
			? Localize("#ShareSheet_LimitedScreenshotNotAllowed")
			: undefined;
		return {
			sendToChat: sendToChat_1,
			rgOptions: [
				uploadToSteam &&
					!C && {
						key: "upload",
						onSelected: uploadToSteam,
						icon: <o.Globe />,
						label: Localize("#ShareSheet_ShareOnSteam"),
						disabled: R,
					},
				{
					key: "clipboard",
					onSelected: copyToClipboard,
					icon: <o.Copy />,
					label: Localize("#ExportClip_CopyClipboard"),
				},
				{
					key: "export",
					onSelected: saveToFile,
					icon: <o.Download />,
					label: Localize("#ScreenshotUploader_SaveImage"),
				},
				!C && {
					key: "sendmobile",
					onSelected: sendToPhone,
					icon: <o.Mobile />,
					label: Localize("#ExportClip_SendToPhone"),
					disabled: R || k,
				},
			].filter(Boolean),
			chatSendForbiddenMessage: R || k,
		};
	})(screenshot, summoningElement, showConfirmation);
	return (
		<s.zu
			onSendToChat={sendToChat}
			summoningElement={summoningElement}
			chatSendForbiddenMessage={chatSendForbiddenMessage}
		>
			<s.t$ options={rgOptions} />
		</s.zu>
	);
}
function B(e, t) {
	const [r, setR] = n.useState(Promise.resolve(null));
	const a = e.local?.strGameID;
	const s = e.local?.hHandle;
	n.useEffect(() => {
		if (a && typeof s == "number") {
			setR(SteamClient.Screenshots.GetLocalScreenshotPath(a, s));
		}
	}, [a, s]);
	const { filePromise } = Dp(r, t);
	return filePromise;
}
async function v(e, t, r) {
	if (!Fj(r, "System.OpenFileDialog")) {
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
	const { screenshot, summoningElement, ...i } = e;
	const a = B(screenshot, summoningElement);
	return (
		<f.Or
			{...i}
			onSendToPhone={async ({ performUpload }) => {
				let r = "";
				try {
					r = await SteamClient.Auth.GetLocalHostname();
				} catch (e) {
					console.error("Couldn't determine local hostname", e);
				}
				performUpload({
					dataToUpload: a,
					eBucket: 3,
					eMediaType: 2,
					gameID: new m.VS(screenshot.strGameID),
					strMachineName: r,
				});
			}}
			minAppVersion={E}
		/>
	);
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
			const r = tC(e.remote.filename, ".");
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
