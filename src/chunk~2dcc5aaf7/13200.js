import {
	Localize,
	LocalizeCalendarTime,
} from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./85243.js";
import s from "./44846.js";
import o from "./96593.js";
import l from "./10606.js";
import c from "./69164.js";
import m, { pg } from "./13869.js";
import u from "./26853.js";
import A, { vJ } from "./52451.js";
import p from "./35488.js";
import g, { A as A_1 } from "./90765.js";
import h from "./29274.js";
import _, { Bx } from "./55489.js";
import f from "./51297.js";
import b, { e_ as e } from "./34792.js";
import y from "./61175.js";
const C = h;
function S(e) {
	if (e) {
		return {};
	} else {
		return {
			bForcePopOut: true,
			bHideActionIcons: true,
		};
	}
}
export function TE(e, t) {
	console.log("showing cloud conflict dialog", e.appid);
	let r = y.n6.IsGamepadUIWindowActive();
	if (r) {
		pg(
			n.createElement(B, {
				...e,
			}),
			t,
			{
				...S(r),
			},
		);
	} else {
		pg(
			n.createElement(v, {
				...e,
				classAddition: C.Popup,
			}),
			t,
			{
				...S(r),
				popupHeight: 560,
				popupWidth: 740,
			},
		);
	}
}
function B(e) {
	Bx(a.I5.Opaque, "CloudConflictDialogGamepad");
	return E(e);
}
function v(e) {
	return E(e);
}
function I(e) {
	if (e.bControllerConfigs) {
		return n.createElement(p.Controller, {
			type: "generic",
			className: C.TitleWarningIcon,
		});
	} else {
		return n.createElement(p.ExclamationPoint, {
			className: C.TitleWarningIcon,
		});
	}
}
function E(e) {
	const [t] = e("b24HourClock");
	const r = o.tw.GetAppOverviewByAppID(e.appid);
	const a = e.appid == s.rm;
	const c = a
		? Localize("#CloudConflict_ControllerConfigs_Header")
		: e.bOnAppLaunch
			? Localize("#CloudConflict_AppLaunch_Header")
			: Localize("#CloudConflict_Header");
	const m = a
		? Localize("#CloudConflict_ControllerConfigs_Description")
		: e.bOnAppLaunch
			? Localize("#CloudConflict_AppLaunch_Description", r?.display_name ?? "")
			: Localize("#CloudConflict_Description", r?.display_name ?? "");
	const h = a
		? Localize("#CloudConflict_ControllerConfigs_KeepRemote")
		: Localize("#CloudConflict_KeepRemote");
	const _ = a
		? Localize("#CloudConflict_ControllerConfigs_KeepLocal")
		: Localize("#CloudConflict_KeepLocal");
	const f = e.bOnAppLaunch
		? Localize("#CloudConflict_AppLaunch_Footer_Note")
		: Localize("#CloudConflict_Footer_Note");
	const y = vJ(
		() => SteamClient.Apps.GetConflictingFileTimestamps(e.appid),
		[e.appid],
	);
	const S = (t) => () => {
		if (e.closeModal) {
			e.closeModal();
		}
		if (t) {
			t();
		}
	};
	const [w, B] = n.useState(0);
	const [v, E] = n.useState(null);
	const M = n.useCallback(
		(e) => {
			switch (e) {
				case 0:
				default: {
					break;
				}
				case 1: {
					B(e);
					E(
						n.createElement(
							"div",
							{
								className: C.ChoiceNote,
							},
							Localize("#CloudConflict_KeepLocal_Description"),
						),
					);
					break;
				}
				case 2: {
					B(e);
					E(
						n.createElement(
							"div",
							{
								className: C.ChoiceNote,
							},
							Localize("#CloudConflict_KeepRemote_Description"),
						),
					);
				}
			}
		},
		[1, 2, 0],
	);
	let T;
	let R;
	if (y === undefined) {
		T = n.createElement(
			i.wi,
			null,
			n.createElement(u.t, {
				size: "medium",
				position: "center",
			}),
		);
	} else {
		const r =
			y.rtRemoteTime > 0
				? LocalizeCalendarTime(y.rtRemoteTime, {
						bGranularToday: true,
						bGranularYesterday: true,
						bGranularPast: true,
						bForce24HourClock: t,
					})
				: Localize("#CloudConflict_Unknown");
		const a =
			y.rtLocalTime > 0
				? LocalizeCalendarTime(y.rtLocalTime, {
						bGranularToday: true,
						bGranularYesterday: true,
						bGranularPast: true,
						bForce24HourClock: t,
					})
				: Localize("#CloudConflict_Unknown");
		T = n.createElement(
			i.a3,
			null,
			n.createElement(
				O,
				{
					autoFocus: true,
					buttonText: "",
					bSelected: w === 2,
					onChoose: () => {
						M(2);
					},
				},
				n.createElement("div", {
					className: A_1(C.RadioButton),
				}),
				n.createElement(p.CloudSync, {
					className: C.ConflictChoiceIcon,
				}),
				n.createElement(
					"div",
					{
						className: C.ConflictChoiceText,
					},
					n.createElement(
						i.a3,
						{
							className: C.Title,
						},
						h,
					),
					n.createElement(
						i.a3,
						{
							className: C.LastModified,
						},
						Localize("#CloudConflict_LastModified", r),
					),
				),
			),
			n.createElement(
				O,
				{
					buttonText: "",
					bSelected: w === 1,
					onChoose: () => {
						M(1);
					},
				},
				n.createElement("div", {
					className: A_1(C.RadioButton),
				}),
				n.createElement(p.HardDrive, {
					className: C.ConflictChoiceIcon,
				}),
				n.createElement(
					"div",
					{
						className: C.ConflictChoiceText,
					},
					n.createElement(
						i.a3,
						{
							className: C.Title,
						},
						_,
					),
					n.createElement(
						i.a3,
						{
							className: C.LastModified,
						},
						Localize("#CloudConflict_LastModified", a),
					),
				),
			),
			v,
		);
		R = n.createElement(
			i.wi,
			{
				className: C.Footer,
			},
			n.createElement(
				i.dR,
				null,
				n.createElement(
					i.jn,
					{
						className: A_1(C.ContinueButton, w === 0 && "Disabled"),
						onClick: () => {
							((t) => {
								switch (t) {
									case 0:
									default: {
										S(e.onCancel)();
										break;
									}
									case 1: {
										S(e.keepLocal)();
										break;
									}
									case 2: {
										S(e.keepRemote)();
									}
								}
							})(w);
						},
					},
					Localize("#Button_Continue"),
				),
				n.createElement(
					i.$n,
					{
						className: C.CancelButton,
						onClick: S(e.onCancel),
					},
					Localize("#Button_Cancel"),
				),
			),
		);
	}
	return n.createElement(
		l.eV,
		{
			onCancel: S(e.onCancel),
			className: A_1(C.CloudConflictModalContent, e.classAddition),
			bOKDisabled: true,
		},
		n.createElement(
			i.Y9,
			null,
			" ",
			n.createElement(I, {
				bControllerConfigs: a,
			}),
			" ",
			e.customHeaderText ? Localize(e.customHeaderText) : c,
			" ",
		),
		n.createElement(
			i.nB,
			null,
			n.createElement(
				i.a3,
				{
					className: C.CloudConflictText,
				},
				e.customDescriptionText ? Localize(e.customDescriptionText) : m,
			),
			n.createElement(
				"div",
				{
					className: C.FooterNote,
				},
				f,
			),
			T,
			R,
		),
	);
}
export function zI(e, t) {
	console.log("showing cloud sync failed dialog", e.appid);
	let r = y.n6.IsGamepadUIWindowActive();
	if (r) {
		pg(
			n.createElement(T, {
				...e,
			}),
			t,
			S(r),
		);
	} else {
		pg(
			n.createElement(R, {
				...e,
				bDisableBackgroundDismiss: true,
			}),
			t,
			S(r),
		);
	}
}
function T(e) {
	Bx(a.I5.Opaque, "CloudSyncFailedDialogGamepad");
	return k(e);
}
function R(e) {
	return k(e);
}
function k(e) {
	const t = (t) => () => {
		if (e.closeModal) {
			e.closeModal();
		}
		if (t) {
			t();
		}
	};
	const r = o.tw.GetAppOverviewByAppID(e.appid);
	const a = e.bOnAppLaunch
		? Localize("#CloudSyncFailed_AppLaunch_Continue")
		: Localize("#CloudSyncFailed_Continue");
	const s = e.bOnAppLaunch
		? Localize("#CloudSyncFailed_AppLaunch_Header")
		: Localize("#CloudSyncFailed_Header");
	const c = e.bOnAppLaunch
		? Localize("#CloudSyncFailed_AppLaunch_Warning", r?.display_name ?? "")
		: Localize("#CloudSyncFailed_Warning", r?.display_name ?? "");
	const m = e.bOnAppLaunch
		? Localize("#CloudSyncFailed_AppLaunch_Description")
		: Localize("#CloudSyncFailed_Description");
	let u;
	u = n.createElement(
		i.wi,
		null,
		n.createElement(i.CB, {
			strOKText: a,
			strCancelText: Localize("#CloudSyncFailed_Cancel"),
			onOK: t(e.onOK),
			onCancel: t(e.onCancel),
		}),
	);
	return n.createElement(
		l.eV,
		{
			onCancel: t(e.onCancel),
			bOKDisabled: true,
			bHideCloseIcon: true,
			bDisableBackgroundDismiss: e.bDisableBackgroundDismiss,
		},
		n.createElement(
			i.Y9,
			null,
			n.createElement(
				"div",
				{
					className: C.TitleWarning,
				},
				n.createElement(p.ExclamationPoint, {
					className: C.TitleWarningIcon,
				}),
				" ",
				e.customHeaderText ? Localize(e.customHeaderText) : s,
				" ",
			),
		),
		n.createElement(
			i.nB,
			null,
			n.createElement(
				i.a3,
				{
					className: C.CloudConflictWarning,
				},
				e.customWarningText ? Localize(e.customWarningText) : c,
			),
			n.createElement(
				i.a3,
				null,
				e.customDescriptionText ? Localize(e.customDescriptionText) : m,
			),
			u,
		),
	);
}
export function aj(e, t) {
	console.log("showing cloud pending operations dialog", e.appid);
	let r = y.n6.IsGamepadUIWindowActive();
	if (r) {
		pg(
			n.createElement(N, {
				...e,
			}),
			t,
			S(r),
		);
	} else {
		e.bDisableBackgroundDismiss = true;
		pg(
			n.createElement(F, {
				...e,
			}),
			t,
			S(r),
		);
	}
}
function N(e) {
	Bx(a.I5.Opaque, "CloudPendingOperationsDialogGamepad");
	return G(e);
}
function F(e) {
	return G(e);
}
function G(e) {
	const [t] = e("b24HourClock");
	const r = vJ(
		() => SteamClient.Apps.GetCloudPendingRemoteOperations(e.appid),
		[e.appid],
	);
	const a = (t) => () => {
		if (e.closeModal) {
			e.closeModal();
		}
		if (t) {
			t();
		}
	};
	let m;
	let u;
	if (r === undefined) {
		return null;
	}
	{
		let l;
		let A;
		let p = "unknown";
		let g = 0;
		let h = "unknown";
		let C = new f.lx();
		C = f.lx.deserializeBinary(r.PendingOperations);
		const _ = o.tw.GetAppOverviewByAppID(e.appid);
		if (C.operations().length > 0) {
			let e = C.operations()[0];
			p = e.machine_name();
			g = e.time_last_updated();
			l = e.operation();
			A = e.device_type();
		}
		const b = LocalizeCalendarTime(g, {
			bGranularToday: true,
			bGranularYesterday: true,
			bGranularPast: true,
			bForce24HourClock: t,
		});
		switch (l) {
			case 0: {
				h = Localize("#CloudPendingOps_Operation_None");
				break;
			}
			case 1: {
				h = Localize("#CloudPendingOps_Operation_AppRunning");
				break;
			}
			case 2: {
				h = Localize("#CloudPendingOps_Operation_Uploading");
				break;
			}
			case 3: {
				h = Localize("#CloudPendingOps_Operation_UploadNotStarted");
				break;
			}
			case 4: {
				h = Localize("#CloudPendingOps_Operation_AppSuspended");
			}
		}
		let y = "#CloudPendingOps_Warning";
		switch (A) {
			case s.zm.k_EGamingDeviceType_SteamDeck: {
				y = "#CloudPendingOps_Warning_SteamDeck";
				break;
			}
			case s.zm.k_EGamingDeviceType_StandardPC: {
				y = "#CloudPendingOps_Warning_PC";
				break;
			}
			case s.zm.k_EGamingDeviceType_Handheld:
			case s.zm.k_EGamingDeviceType_Phone: {
				y = "#CloudPendingOps_Warning_Mobile";
				break;
			}
			case s.zm.k_EGamingDeviceType_Tesla: {
				y = "#CloudPendingOps_Warning_Tesla";
			}
		}
		m = e.customDescriptionText
			? Localize(e.customDescriptionText)
			: Localize(y, _?.display_name ?? "", p, b, h);
		u = n.createElement(
			c.Z,
			{
				autoFocus: true,
			},
			n.createElement(
				i.wi,
				null,
				n.createElement(i.CB, {
					strOKText: Localize("#CloudPendingOps_Continue"),
					strCancelText: Localize("#CloudPendingOps_Cancel"),
					onOK: a(e.onOK),
					onCancel: a(e.onCancel),
				}),
			),
		);
	}
	return n.createElement(
		l.eV,
		{
			onCancel: a(e.onCancel),
			bOKDisabled: true,
			bHideCloseIcon: true,
			bDisableBackgroundDismiss: e.bDisableBackgroundDismiss,
		},
		n.createElement(
			i.Y9,
			null,
			n.createElement(p.ExclamationPoint, {
				className: C.TitleWarningIcon,
			}),
			" ",
			e.customHeaderText
				? Localize(e.customHeaderText)
				: Localize("#CloudPendingOps_Header"),
			" ",
		),
		n.createElement(
			i.nB,
			null,
			n.createElement(
				i.a3,
				{
					className: C.CloudConflictWarning,
				},
				m,
			),
			n.createElement(
				i.a3,
				null,
				e.customDescriptionText
					? Localize(e.customDescriptionText)
					: Localize("#CloudPendingOps_Description"),
			),
		),
		u,
	);
}
function O(e) {
	return n.createElement(
		"div",
		{
			className: A_1(C.DialogChoiceRow, e.bSelected && C.Active),
		},
		n.createElement(
			i.$n,
			{
				autoFocus: e.autoFocus,
				onClick: e.onChoose,
				className: A_1(C.DialogChoiceButton, e.bSelected && C.Active),
			},
			e.buttonText,
			e.children,
		),
	);
}
