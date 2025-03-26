var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./35488.js");
var a = require("./64608.js");
var s = require("./83529.js");
var o = s;
import { Localize } from "../../actual_src/utils/localization.js";
var c = require("./25467.js");
var m = require("./13688.js");
var u = require("./42085.js");
var d = require(/*webcrack:missing*/ "./90765.js");
var A = require("./60517.js");
var p = require("./57472.js");
var g = require("./13869.js");
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
var C = require("./10606.js");
var _ = require(/*webcrack:missing*/ "./42318.js");
export function u3(e) {
	if (e?.name === "SteamController") {
		return n.createElement(i.ControllerStatus, null);
	}
	switch (e.type) {
		case 4:
		case 5:
			return n.createElement(i.Headphones, null);
		case 6:
		case 7:
			return n.createElement(i.Volume100, null);
		case 10:
		case 9:
			return n.createElement(i.ControllerStatus, null);
		case 2:
			return n.createElement(i.Mobile, null);
		case 3:
			return n.createElement(i.Display, null);
		case 8:
		case 0:
		case 1:
		default:
			return n.createElement(i.Bluetooth, null);
		case 11:
			return n.createElement(i.Keyboard, null);
	}
}
export function tN(e) {
	const { ...t } = e;
	const r = (0, c.Iz)();
	return n.createElement(p.G, {
		feature: 7,
		setting: "system_bluetooth_enabled",
		disabled: !r,
		icon: n.createElement(i.Bluetooth, null),
		...t,
	});
}
export function cQ(e) {
	const [t, r] = (0, c.cg)();
	return n.createElement(a.y4, {
		label: Localize("#QuickAccess_Tab_Bluetooth_ShowAllDevices"),
		checked: t,
		onChange: r,
		bottomSeparator: "none",
	});
}
export function LV(e) {
	const { nDeviceId: t, bottomSeparator: r } = e;
	const i = (0, c.cS)(t);
	const s = (0, c.Fi)(i);
	const [o, m] = (function (e) {
		if (e?.is_pairing) {
			return [
				Localize("#QuickAccess_Tab_Bluetooth_CancelPair"),
				() =>
					A.RF.CancelPair({
						device: e?.id,
					}),
			];
		} else if (e?.is_paired) {
			return [
				Localize("#QuickAccess_Tab_Bluetooth_Info"),
				(t) =>
					(0, g.pg)(
						n.createElement(M, {
							nDeviceId: e?.id,
						}),
						GetOwningWindowForEvent(t),
					),
			];
		} else {
			return [
				Localize("#QuickAccess_Tab_Bluetooth_Pair"),
				() =>
					A.RF.Pair({
						device: e?.id,
					}),
			];
		}
	})(i);
	if (!i) {
		return null;
	}
	const u = i.is_paired && !i.is_connected;
	return n.createElement(
		a.D0,
		{
			focusable: true,
			label: s,
			disabled: u,
			onActivate: m,
			onOKActionDescription: o,
			icon: n.createElement(u3, {
				type: i.etype,
				name: i.name,
			}),
			childrenLayout: "inline",
			childrenContainerWidth: "min",
			bottomSeparator: r,
		},
		n.createElement(w, {
			device: i,
		}),
	);
}
function w(e) {
	const { device: t, bQuickAccess: r = false } = e;
	const a = t.is_paired && !t.is_connected;
	const s = (0, c.ws)(t);
	if (t.operation_in_progress) {
		return n.createElement(i.Spinner, null);
	} else if (a) {
		if (r) {
			return null;
		} else {
			return n.createElement(
				"div",
				{
					className: o.NotConnectedLabel,
				},
				Localize("#QuickAccess_Tab_Bluetooth_Not_Connected"),
			);
		}
	} else if (s) {
		return n.createElement(i.BatteryWhite, {
			acState: 1,
			batteryLevel: s / 100,
		});
	} else {
		return null;
	}
}
function B(e) {
	const { device: t, ...r } = e;
	if (t.wake_allowed_supported) {
		return n.createElement(a.y4, {
			...r,
			label: Localize("#Settings_Bluetooth_AllowWake"),
			checked: t.wake_allowed ?? false,
			onChange: (e) =>
				A.RF.SetWakeAllowed({
					device: t.id,
					allowed: e,
				}),
		});
	} else {
		return null;
	}
}
function v(e) {
	const { device: t, ...r } = e;
	return n.createElement(a.y4, {
		...r,
		label: Localize("#Settings_Bluetooth_Trusted"),
		checked: t.is_trusted ?? false,
		onChange: (e) =>
			A.RF.SetTrusted({
				device: t.id,
				trusted: e,
			}),
	});
}
function I(e) {
	const { device: t, ...r } = e;
	const i = (0, c.cS)(t?.id);
	const [s, m] = (function (e) {
		if (e) {
			if (e.is_connected) {
				return [
					Localize("#QuickAccess_Tab_Bluetooth_Disconnect"),
					() =>
						A.RF.Disconnect({
							device: e.id,
						}),
				];
			} else {
				return [
					Localize("#QuickAccess_Tab_Bluetooth_Connect"),
					() =>
						A.RF.Connect({
							device: e.id,
						}),
				];
			}
		} else {
			return [null, null];
		}
	})(i);
	const u = (0, d.A)(o.ForceIndentField, o.BluetoothDeviceQuickAccessField);
	if (i) {
		return n.createElement(
			a.D0,
			{
				...r,
				className: u,
				disabled: !t.is_connected,
				focusable: true,
				onActivate: m,
				onOKActionDescription: s,
				icon: n.createElement(u3, {
					type: t.etype,
					name: i.name,
				}),
				label: n.createElement(
					"div",
					{
						className: o.Text,
					},
					i.name,
				),
				childrenContainerWidth: "min",
				padding: "compact",
			},
			n.createElement(w, {
				device: i,
				bQuickAccess: true,
			}),
		);
	} else {
		return null;
	}
}
export function ty() {
	const e = (function () {
		const e = (0, m.k1)();
		return n.useCallback(() => e.Settings("Bluetooth"), [e]);
	})();
	const t = (0, c.Pi)();
	const { rPairedDevices: r } = (0, c.KO)();
	return n.createElement(
		_.tH,
		null,
		n.createElement(
			u.kn,
			null,
			n.createElement(tN, {
				padding: "compact",
				label: Localize("#QuickAccess_Tab_Bluetooth_ToggleLabel"),
				bottomSeparator: "none",
				onOptionsButton: e,
				onOptionsActionDescription: Localize(
					"#Settings_Bluetooth_SettingsAction",
				),
			}),
		),
		t &&
			r.map((t) =>
				n.createElement(
					u.kn,
					{
						key: t.id,
					},
					n.createElement(I, {
						device: t,
						bottomSeparator: "none",
						onOptionsButton: e,
						onOptionsActionDescription: Localize(
							"#Settings_Bluetooth_SettingsAction",
						),
					}),
				),
			),
		t &&
			n.createElement(
				u.kn,
				null,
				n.createElement(a.D0, {
					className: o.ForceIndentField,
					label: Localize("#QuickAccess_Tab_Bluetooth_AddDevice"),
					icon: n.createElement(i.Add, null),
					onActivate: e,
					padding: "compact",
					bottomSeparator: "none",
				}),
			),
		n.createElement(a.Nu, null),
	);
}
const M = (e) => {
	const { nDeviceId: t, closeModal: r } = e;
	const i = (0, c.cS)(t);
	const s = (0, c.Fi)(i);
	const m = i?.is_connected === false;
	const u = i?.is_connected === true;
	const d = n.useCallback(() => {
		A.RF.Connect({
			device: t,
		});
		if (r) {
			r();
		}
	}, [r, t]);
	const p = n.useCallback(() => {
		A.RF.Disconnect({
			device: t,
		});
		if (r) {
			r();
		}
	}, [r, t]);
	const g = n.useCallback(() => {
		A.RF.Forget({
			device: t,
		});
		if (r) {
			r();
		}
	}, [r, t]);
	return n.createElement(
		C.eV,
		{
			onCancel: e.closeModal,
		},
		n.createElement(a.Y9, null, " ", s, " "),
		n.createElement(
			a.f3,
			{
				className: o.InfoDialogBody,
			},
			i &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(
						a.Nv,
						{
							focusable: true,
							label: Localize("#Settings_Internet_MAC_Address"),
						},
						i?.mac,
					),
					n.createElement(v, {
						device: i,
					}),
					n.createElement(B, {
						device: i,
					}),
					n.createElement(
						a.xh,
						{
							label: Localize("#QuickAccess_Tab_Bluetooth_Unpair"),
							onClick: g,
						},
						Localize("#QuickAccess_Tab_Bluetooth_Forget"),
					),
					m &&
						n.createElement(
							a.xh,
							{
								label: Localize("#QuickAccess_Tab_Bluetooth_ConnectLabel"),
								onClick: d,
								bottomSeparator: "none",
								autoFocus: true,
							},
							Localize("#QuickAccess_Tab_Bluetooth_Connect"),
						),
					u &&
						n.createElement(
							a.xh,
							{
								label: Localize("#QuickAccess_Tab_Bluetooth_DisconnectLabel"),
								onClick: p,
								bottomSeparator: "none",
								autoFocus: true,
							},
							Localize("#QuickAccess_Tab_Bluetooth_Disconnect"),
						),
				),
		),
	);
};
