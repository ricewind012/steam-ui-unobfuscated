var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./47296.js");
import { Localize } from "../../actual_src/utils/localization.js";
var s = require("./10606.js");
var o = require("./13869.js");
var l = require("./45309.js");
var c = require("./61277.js");
var m = require("./20037.js");
var u = require(/*webcrack:missing*/ "./42318.js");
var d = require("./64004.js");
var A = require("./78110.js");
var p = require("./81638.js");
var g = p;
var h = require("./6160.js");
var C = require("./93025.js");
export async function _f(e, t) {
	console.log("Showing streaming intro for game streaming to " + t);
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
export const rx = (0, u.Nr)(function () {
	const [e, t] = (0, h.wh)();
	const [r, o] = n.useState();
	const [l, c] = (0, h.o6)();
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
	return n.createElement(
		A.w,
		{
			strName: "RemoteLaunchResultDialog",
			strTitle: m,
			onDismiss: d,
			popupWidth: 500,
			popupHeight: 360,
			resizable: true,
			refPopup: o,
			modal: false,
		},
		n.createElement(s.o0, {
			strTitle: m,
			strDescription: u,
			onOK: d,
			onCancel: d,
			bAlertDialog: true,
		}),
	);
});
const b = (0, u.Nr)(function (e) {
	const [t, r] = n.useState();
	const i = (0, d.ij)();
	const s = (0, d.Xs)();
	const o = () => {
		SteamClient.RemotePlay.CancelRemoteClientPairing();
		e.fnClose();
	};
	return n.createElement(
		A.w,
		{
			strName: "RemoteDeviceClientPairingDialog",
			onDismiss: o,
			strTitle: Localize("#RemoteDevicePairingPIN_Title"),
			popupWidth: 500,
			popupHeight: 360,
			resizable: true,
			refPopup: r,
			modal: false,
		},
		n.createElement(
			l.X_,
			{
				title: Localize("#RemoteDevicePairingPIN_Title"),
				description: Localize("#RemoteDevicePairingPIN_Text", i),
				onCancel: o,
				closeModal: e.fnClose,
				bAlertDialog: true,
			},
			n.createElement(
				"div",
				{
					className: g.SegmentedInput,
				},
				n.createElement(C.a, {
					autoFocus: false,
					length: s.length,
					value: s.split(""),
					onChange: (e) => {},
				}),
			),
		),
	);
});
export const Kr = (0, u.Nr)(function () {
	const [e, t] = (0, d.z5)();
	if (e) {
		return n.createElement(b, {
			fnClose: t,
		});
	} else {
		return null;
	}
});
export const Nw = (0, u.Nr)(function () {
	const [e, t] = (0, d.OQ)();
	const [r, i] = n.useState();
	const s = (0, d.ij)();
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
	return n.createElement(
		A.w,
		{
			strName: "RemoteDeviceHostPairingDialog",
			onDismiss: o,
			strTitle: Localize("#RemoteDeviceAuthorization_Title"),
			popupWidth: 500,
			popupHeight: 360,
			resizable: true,
			refPopup: i,
			modal: false,
		},
		n.createElement(m.R, {
			title: Localize("#RemoteDeviceAuthorization_Title"),
			description: l,
			validateDigits: (e) => e.length == 4 && !isNaN(Number(e)),
			onResult: (e) => {
				SteamClient.RemotePlay.SetRemoteDeviceAuthorized(true, e);
				t();
			},
			onCancel: o,
			numDigits: 4,
			allowChars: (e) => /^[0-9]+$/.test(e),
			autoFocus: true,
		}),
	);
});
export function rg(e) {
	const t = n.createElement(l.Qj, {
		title: Localize("#RemoteDevicePIN_Title"),
		description: undefined,
		isValid: (e) => e.length <= 10 && (e.length == 0 || !isNaN(Number(e))),
		onResult: (e) => SteamClient.RemotePlay.SetRemoteDevicePIN(e),
		inputOptions: {
			mustBeNumeric: true,
			maxLength: 10,
			label: Localize("#RemoteDevicePIN_Text"),
			focusOnMount: true,
		},
		className: g.DialogBodyText,
	});
	return (0, o.pg)(t, e ?? window, {
		popupHeight: 305,
		popupWidth: 600,
	});
}
export function VB(e) {
	const t = n.createElement(s.o0, {
		strTitle: Localize("#RemoteDeviceUnpair_Title"),
		strDescription: Localize("#RemoteDeviceUnpair_Text"),
		onOK: () => SteamClient.RemotePlay.UnpairRemoteDevices(),
	});
	return (0, o.pg)(t, e ?? window, {});
}
export const RD = (0, u.Nr)(function () {
	const [e, t] = (0, d.Ct)();
	const [r, i] = n.useState();
	if (!e) {
		return null;
	}
	return n.createElement(
		A.w,
		{
			strName: "RemotePlayAudioDriverDialog",
			onDismiss: t,
			strTitle: Localize("#RemotePlay_InstallAudioCaptureDriver_Title"),
			popupWidth: 370,
			popupHeight: 240,
			resizable: true,
			refPopup: i,
			modal: false,
		},
		n.createElement(s.o0, {
			strTitle: Localize("#RemotePlay_InstallAudioCaptureDriver_Title"),
			strDescription: Localize("#RemotePlay_InstallAudioCaptureDriver_Text"),
			strOKButtonText: Localize("#GameAction_Update"),
			onOK: () => {
				SteamClient.RemotePlay.InstallAudioDriver();
				t();
			},
			onCancel: t,
		}),
	);
});
export const VQ = (0, u.Nr)(function () {
	const [e, t] = (0, d.kb)();
	const [r, i] = n.useState();
	if (!e) {
		return null;
	}
	return n.createElement(
		A.w,
		{
			strName: "RemotePlayInputDriverDialog",
			onDismiss: t,
			strTitle: Localize("#RemotePlay_InstallGamepadInputDriver_Title"),
			popupWidth: 370,
			popupHeight: 240,
			resizable: true,
			refPopup: i,
			modal: false,
		},
		n.createElement(s.o0, {
			strTitle: Localize("#RemotePlay_InstallGamepadInputDriver_Title"),
			strDescription: Localize("#RemotePlay_InstallGamepadInputDriver_Text"),
			strOKButtonText: Localize("#GameAction_Update"),
			onOK: () => {
				SteamClient.RemotePlay.InstallInputDriver();
				t();
			},
			onCancel: t,
		}),
	);
});
export const Kw = (0, u.Nr)(function () {
	const [e, t] = (0, d.VA)();
	const [r, i] = n.useState();
	if (e) {
		return n.createElement(
			A.w,
			{
				strName: "RemotePlayInputDriverRestartNotice",
				onDismiss: t,
				strTitle: Localize("#RemotePlay_InstallGamepadInputDriver_Title"),
				popupWidth: 370,
				popupHeight: 240,
				resizable: true,
				refPopup: i,
				modal: false,
			},
			n.createElement(s.o0, {
				strTitle: Localize("#RemotePlay_InstallGamepadInputDriver_Title"),
				strDescription: Localize(
					"#RemotePlay_InstallGamepadInputDriver_RestartNotice",
				),
				bAlertDialog: true,
				onOK: t,
			}),
		);
	} else {
		return null;
	}
});
