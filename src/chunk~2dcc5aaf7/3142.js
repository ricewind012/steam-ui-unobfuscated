import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./47296.js";
import s from "./10606.js";
import o, { pg } from "./13869.js";
import l from "./45309.js";
import c from "./61277.js";
import m from "./20037.js";
import u, { Nr } from "./42318.js";
import d, { ij, Xs, z5, OQ, Ct, kb, VA } from "./64004.js";
import A from "./78110.js";
import p from "./81638.js";
import { wh, o6 } from "./6160.js";
import C from "./93025.js";
const g = p;
export async function _f(e, t) {
	console.log(`Showing streaming intro for game streaming to ${t}`);
	await c.z.ClearInterstitialSeen(c.H.k_eRemotePlayConfirm);
	const r = () => SteamClient.Streaming.StreamingContinueStreamGame();
	c.z.AddInterstitialToQueue({
		eInterstitial: c.H.k_eRemotePlayConfirm,
		appid: e,
		onOK: r,
		onCancel: () => SteamClient.Streaming.CancelStreamGame(),
		onSkipped: r,
		strParam: t,
	});
}
export const rx = Nr(() => {
	const [e, t] = wh();
	const [r, setR] = n.useState();
	const [l, c] = o6();
	if (!e) {
		return null;
	}
	let m = "";
	let u = "";
	if (l === i.l.k_ERemoteClientLaunchDownloadStarted) {
		m = Localize("#StreamLaunch_Updating_Title");
		u = Localize("#StreamLaunch_StillDownloading");
	} else {
		m = Localize("#StreamLaunch_Failed_Title");
		u = Localize(c.replace("#SteamUI_", "#"));
	}
	const d = () => {
		t();
	};
	return (
		<A.w
			strName="RemoteLaunchResultDialog"
			strTitle={m}
			onDismiss={d}
			popupWidth={500}
			popupHeight={360}
			resizable
			refPopup={setR}
			modal={false}
		>
			<s.o0
				strTitle={m}
				strDescription={u}
				onOK={d}
				onCancel={d}
				bAlertDialog
			/>
		</A.w>
	);
});
const B = Nr((e) => {
	const [t, setT] = n.useState();
	const i = ij();
	const s = Xs();
	const o = () => {
		SteamClient.RemotePlay.CancelRemoteClientPairing();
		e.fnClose();
	};
	return (
		<A.w
			strName="RemoteDeviceClientPairingDialog"
			onDismiss={o}
			strTitle={Localize("#RemoteDevicePairingPIN_Title")}
			popupWidth={500}
			popupHeight={360}
			resizable
			refPopup={setT}
			modal={false}
		>
			<l.X_
				title={Localize("#RemoteDevicePairingPIN_Title")}
				description={Localize("#RemoteDevicePairingPIN_Text", i)}
				onCancel={o}
				closeModal={e.fnClose}
				bAlertDialog
			>
				<div className={g.SegmentedInput}>
					<C.a
						autoFocus={false}
						length={s.length}
						value={s.split("")}
						onChange={(e) => {}}
					/>
				</div>
			</l.X_>
		</A.w>
	);
});
export const Kr = Nr(() => {
	const [e, t] = z5();
	if (e) {
		return <B fnClose={t} />;
	} else {
		return null;
	}
});
export const Nw = Nr(() => {
	const [e, t] = OQ();
	const [r, setR] = n.useState();
	const s = ij();
	if (!e) {
		return null;
	}
	const o = () => {
		SteamClient.RemotePlay.SetRemoteDeviceAuthorized(false, "");
		t();
	};
	let l;
	l =
		s === ""
			? Localize("#RemoteDeviceAuthorization_TextRemotePlayAnywhere")
			: Localize("#RemoteDeviceAuthorization_Text", s);
	return (
		<A.w
			strName="RemoteDeviceHostPairingDialog"
			onDismiss={o}
			strTitle={Localize("#RemoteDeviceAuthorization_Title")}
			popupWidth={500}
			popupHeight={360}
			resizable
			refPopup={setR}
			modal={false}
		>
			<m.R
				title={Localize("#RemoteDeviceAuthorization_Title")}
				description={l}
				validateDigits={(e) => e.length == 4 && !isNaN(Number(e))}
				onResult={(e) => {
					SteamClient.RemotePlay.SetRemoteDeviceAuthorized(true, e);
					t();
				}}
				onCancel={o}
				numDigits={4}
				allowChars={(e) => /^[0-9]+$/.test(e)}
				autoFocus
			/>
		</A.w>
	);
});
export function rg(e) {
	const t = (
		<l.Qj
			title={Localize("#RemoteDevicePIN_Title")}
			description={undefined}
			isValid={(e) => e.length <= 10 && (e.length == 0 || !isNaN(Number(e)))}
			onResult={(e) => SteamClient.RemotePlay.SetRemoteDevicePIN(e)}
			inputOptions={{
				mustBeNumeric: true,
				maxLength: 10,
				label: Localize("#RemoteDevicePIN_Text"),
				focusOnMount: true,
			}}
			className={g.DialogBodyText}
		/>
	);
	return pg(t, e ?? window, {
		popupHeight: 305,
		popupWidth: 600,
	});
}
export function VB(e) {
	const t = (
		<s.o0
			strTitle={Localize("#RemoteDeviceUnpair_Title")}
			strDescription={Localize("#RemoteDeviceUnpair_Text")}
			onOK={() => SteamClient.RemotePlay.UnpairRemoteDevices()}
		/>
	);
	return pg(t, e ?? window, {});
}
export const RD = Nr(() => {
	const [e, t] = Ct();
	const [r, setR] = n.useState();
	if (!e) {
		return null;
	}
	return (
		<A.w
			strName="RemotePlayAudioDriverDialog"
			onDismiss={t}
			strTitle={Localize("#RemotePlay_InstallAudioCaptureDriver_Title")}
			popupWidth={370}
			popupHeight={240}
			resizable
			refPopup={setR}
			modal={false}
		>
			<s.o0
				strTitle={Localize("#RemotePlay_InstallAudioCaptureDriver_Title")}
				strDescription={Localize("#RemotePlay_InstallAudioCaptureDriver_Text")}
				strOKButtonText={Localize("#GameAction_Update")}
				onOK={() => {
					SteamClient.RemotePlay.InstallAudioDriver();
					t();
				}}
				onCancel={t}
			/>
		</A.w>
	);
});
export const VQ = Nr(() => {
	const [e, t] = kb();
	const [r, setR] = n.useState();
	if (!e) {
		return null;
	}
	return (
		<A.w
			strName="RemotePlayInputDriverDialog"
			onDismiss={t}
			strTitle={Localize("#RemotePlay_InstallGamepadInputDriver_Title")}
			popupWidth={370}
			popupHeight={240}
			resizable
			refPopup={setR}
			modal={false}
		>
			<s.o0
				strTitle={Localize("#RemotePlay_InstallGamepadInputDriver_Title")}
				strDescription={Localize("#RemotePlay_InstallGamepadInputDriver_Text")}
				strOKButtonText={Localize("#GameAction_Update")}
				onOK={() => {
					SteamClient.RemotePlay.InstallInputDriver();
					t();
				}}
				onCancel={t}
			/>
		</A.w>
	);
});
export const Kw = Nr(() => {
	const [e, t] = VA();
	const [r, setR] = n.useState();
	if (e) {
		return (
			<A.w
				strName="RemotePlayInputDriverRestartNotice"
				onDismiss={t}
				strTitle={Localize("#RemotePlay_InstallGamepadInputDriver_Title")}
				popupWidth={370}
				popupHeight={240}
				resizable
				refPopup={setR}
				modal={false}
			>
				<s.o0
					strTitle={Localize("#RemotePlay_InstallGamepadInputDriver_Title")}
					strDescription={Localize(
						"#RemotePlay_InstallGamepadInputDriver_RestartNotice",
					)}
					bAlertDialog
					onOK={t}
				/>
			</A.w>
		);
	} else {
		return null;
	}
});
