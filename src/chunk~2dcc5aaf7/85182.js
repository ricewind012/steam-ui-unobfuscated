var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./3475.js");
var s = require(/*webcrack:missing*/ "./46108.js");
var o = require("./22091.js");
var l = require("./34792.js");
var c = require("./35488.js");
var m = require(/*webcrack:missing*/ "./72476.js");
var u = require("./61248.js");
var d = u;
var A = require(/*webcrack:missing*/ "./69164.js");
var p = require("./46422.js");
var g = require(/*webcrack:missing*/ "./41230.js");
var h = require(/*webcrack:missing*/ "./49519.js");
var C = require("./18057.js");
var _ = require("./85399.js");
var f = require("./52192.js");
var b = require(/*webcrack:missing*/ "./61657.js");
var y = require(/*webcrack:missing*/ "./10975.js");
var S = require(/*webcrack:missing*/ "./44846.js");
var w = require(/*webcrack:missing*/ "./52451.js");
var B = require("./10606.js");
var v = require("./57472.js");
var I = require(/*webcrack:missing*/ "./54644.js");
var E = require("./78110.js");
var M = require(/*webcrack:missing*/ "./42318.js");
var T = require(/*webcrack:missing*/ "./88750.js");
var R = require(/*webcrack:missing*/ "./31084.js");
var k = require("./85360.js");
var D = require("./37086.js");
function N(e) {
	const t = (0, h.W6)();
	const r = p.oy.MainRunningApp != null;
	const a = (0, o.wy)(r);
	const l = (0, o.Sz)();
	let u = p.oy.ActiveControllerIndex;
	if (u < 0 && a.length > 0) {
		u = a[0].nControllerIndex;
	}
	const [d, g] = n.useState(u);
	const [f, w] = n.useState(false);
	const B = n.useCallback(
		(e) => {
			let t;
			if (e.detail.button == b.pR.BUMPER_LEFT) {
				t = -1;
			} else {
				if (e.detail.button != b.pR.BUMPER_RIGHT) {
					return false;
				}
				t = 1;
			}
			if (d >= 0) {
				const e = a.findIndex((e) => e.nControllerIndex == d);
				const r = e + t;
				if (r >= 0 && r < a.length) {
					g(a[r].nControllerIndex);
					y.eZ.PlayNavSound(y.PN.ChangeTabs);
				} else if (r == a.length && l.length > 0) {
					g(-1);
					y.eZ.PlayNavSound(y.PN.ChangeTabs);
				} else {
					y.eZ.PlayNavSound(y.PN.FailedNav);
				}
			} else {
				const e = (0, o.q_)(d) + t;
				if (e >= 0 && e < l.length) {
					g((0, o.Id)(e));
					y.eZ.PlayNavSound(y.PN.ChangeTabs);
				} else if (e == -1 && a.length > 0) {
					g(a[a.length - 1].nControllerIndex);
					y.eZ.PlayNavSound(y.PN.ChangeTabs);
				} else {
					y.eZ.PlayNavSound(y.PN.FailedNav);
				}
			}
			return true;
		},
		[d, a, l],
	);
	const v = a.find((e) => e.nControllerIndex == d);
	n.useEffect(() => {
		if (d >= 0) {
			if (!v) {
				if (a.length > 0) {
					g(a[0].nControllerIndex);
				} else if (l.length > 0) {
					g(-1);
				}
			}
		} else if ((0, o.q_)(d) >= l.length) {
			if (a.length > 0) {
				g(a[0].nControllerIndex);
			} else if (l.length > 0) {
				g(-1);
			}
		}
	}, [d, v, a, l]);
	const I = (0, m.Qn)();
	if (a.length == 0 && l.length == 0) {
		return n.createElement(
			i.G5,
			null,
			n.createElement(i.D0, {
				disabled: true,
				icon: n.createElement(c.ControllerStatus, {
					none: true,
				}),
				label: (0, s.we)("#Settings_Controller_NoControllers"),
			}),
		);
	}
	const E = a.length + l.length > 1;
	const M = d < 0 || ((v?.unCapabilities ?? 0) & 1048576) != 0;
	const T = d >= 0;
	const R = d >= 0;
	let k = "";
	if (d < 0) {
		if ((0, o.q_)(d) < l.length) {
			k = l[(0, o.q_)(d)].strName;
		}
	}
	if (k.length == 0) {
		k = (0, s.we)("#Settings_Controller_BindInput");
	}
	const N = (e) => {
		if (I) {
			t.push(e);
		} else {
			p.oy.SetStandaloneConfiguratorURL(e);
			SteamClient.Apps.ShowControllerConfigurator(S.mZ);
		}
	};
	return n.createElement(
		i.G5,
		null,
		E &&
			n.createElement(_.bV, {
				selectedControllerIndex: d,
				onControllerSelected: g,
				showGlyphs: f,
				wrapAround: false,
				showUnboundControllers: true,
			}),
		n.createElement(
			A.Z,
			{
				onFocusWithin: w,
				onButtonDown: B,
				retainFocus: true,
			},
			d >= 0 &&
				n.createElement(
					n.Fragment,
					null,
					n.createElement(H, {
						controllerIndex: d,
					}),
					n.createElement(oH, {
						controllerIndex: d,
					}),
					n.createElement(IC, {
						controllerIndex: d,
					}),
					n.createElement(G, {
						controllerIndex: d,
					}),
					n.createElement(O, {
						controllerIndex: d,
					}),
				),
			M &&
				!T &&
				n.createElement(
					D.WG,
					{
						label: k,
						onClick: () => N(C.BV.GamepadUI.ControllerDeviceBindInput(d)),
						bottomSeparator: "standard",
					},
					(0, s.we)("#Settings_Controller_BindInput_Click"),
				),
			T &&
				n.createElement(
					D.WG,
					{
						label: (0, s.we)("#Settings_Controller_TestInput"),
						onClick: () => N(C.BV.GamepadUI.ControllerDeviceTestInput(d)),
						bottomSeparator: "standard",
					},
					(0, s.we)("#Settings_Controller_TestInput_Click"),
				),
			R &&
				n.createElement(
					D.WG,
					{
						label: (0, s.we)("#Settings_Controller_Calibration"),
						onClick: () =>
							N(C.BV.GamepadUI.ControllerDeviceCalibration.Root(d)),
						bottomSeparator: "standard",
					},
					(0, s.we)("#Settings_Controller_Calibration_Click"),
				),
		),
	);
}
function F(e) {
	return n.createElement(v.G, {
		feature: a.uX,
		label: (0, s.we)("#Settings_Controller_GuideButtonFocus"),
		setting: "controller_guide_button_focus_steam",
	});
}
function G(e) {
	const t =
		e.controllerIndex == null
			? p.oy.MostRecentlyActiveController
			: o.Fd.Get()
					.GetControllers()
					.find((t) => t.nControllerIndex == e.controllerIndex);
	if (t == null) {
		return null;
	}
	const r = t.bNintendoLayout;
	const a = t.eControllerType == 39 || t.eControllerType == 40;
	const l =
		t.eControllerType == 33 ||
		t.eControllerType == 34 ||
		t.eControllerType == 45 ||
		t.eControllerType == 48 ||
		t.eControllerType == 47;
	const m = t.bUseReversedLayout;
	let u = a
		? m
			? n.createElement(c.Layout_BA_Nintendo_JoyCon, null)
			: n.createElement(c.Layout_AB_Nintendo_JoyCon, null)
		: r
			? m
				? n.createElement(c.Layout_BA_Nintendo, null)
				: n.createElement(c.Layout_AB_Nintendo, null)
			: l
				? m
					? n.createElement(c.Layout_BA_PlayStation, null)
					: n.createElement(c.Layout_AB_Playstation, null)
				: m
					? n.createElement(c.Layout_BA, null)
					: n.createElement(c.Layout_AB, null);
	return n.createElement(
		"div",
		{
			className: d.NintendoSwitchLayoutToggle,
		},
		n.createElement(i.y4, {
			label: (0, s.we)("#Settings_Controller_SwitchLayout"),
			checked: m,
			icon: u,
			onChange: (e) =>
				SteamClient.Settings.SetUseNintendoButtonLayout(t.nControllerIndex, e),
			description: (0, s.we)("#Settings_Controller_SwitchLayoutDesc"),
		}),
	);
}
function O(e) {
	const t =
		e.controllerIndex == null
			? p.oy.MostRecentlyActiveController
			: o.Fd.Get()
					.GetControllers()
					.find((t) => t.nControllerIndex == e.controllerIndex);
	if (t == null) {
		return null;
	}
	if (t.eControllerType == 39 || t.eControllerType == 40) {
		return null;
	}
	const r = t.bUseUniversalFaceButtonGlyphs;
	return n.createElement(i.y4, {
		label: (0, s.we)("#Settings_Controller_UniversalGlyphs"),
		checked: r,
		icon: n.createElement(c.UniversalGlyphs, null),
		onChange: (e) =>
			SteamClient.Settings.SetUseUniversalFaceButtonGlyphs(
				t.nControllerIndex,
				e,
			),
		description: (0, s.we)("#Settings_Controller_UniversalGlyphsDesc"),
	});
}
function P(e) {
	const { label: t, controllerType: r, children: a } = e;
	const s = {
		4: "controller_generic_support",
		2: "controller_xbox_support",
		8: "controller_switch_support",
	};
	const [o, c] = (0, l.VI)(s[r]);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(i.y4, {
			label: t,
			checked: o,
			onChange: (e) => {
				c(e);
				k.v3.ClearSelectedConfigCache();
				return;
			},
		}),
		o && a,
	);
}
function L() {
	if ((0, m.Y2)()) {
		return null;
	} else {
		return n.createElement(v.G, {
			feature: a.uX,
			label: (0, s.we)("#Settings_Controller_TurnOffOnExit"),
			setting: "turn_off_controller_on_exit",
		});
	}
}
function z() {
	return n.createElement(v.G, {
		feature: a.uX,
		label: (0, s.we)("#Settings_Controller_ChordConfigEnable"),
		setting: "controller_enable_chord",
	});
}
const x = (0, g.PA)(function () {
	const e = o.Fd.Get().GetSteamControllerDonglePresent();
	const [t, r] = n.useState(false);
	const [i, a] = n.useState(false);
	const [l, c] = n.useState(false);
	n.useEffect(() => {
		o.Fd.Get().ClearSteamControllerDongleState();
	}, []);
	const m = n.useCallback(() => {
		SteamClient.Input.SetSteamControllerDonglePairingMode(false, !l);
		a(true);
	}, [l]);
	const {
		bTimerCompleted: u,
		fnStopTimer: d,
		fnRestartTimer: A,
	} = (0, w.L$)(60000, m, false);
	n.useEffect(() => () => m(), [m]);
	if (e) {
		return n.createElement(
			D.WG,
			{
				label: (0, s.we)("#Settings_Controller_SCPairing"),
				onClick: () => {
					SteamClient.Input.SetSteamControllerDonglePairingMode(!t, false);
					r(!t);
					if (t) {
						c(true);
						d();
					} else if (!t && !i) {
						A();
					}
				},
			},
			(0, s.we)(
				t
					? "#Settings_Controller_SCPairing_Accept"
					: "#Settings_Controller_SCPairing_Enabled",
			),
		);
	} else {
		return null;
	}
});
function U(e) {
	const [t, r] = (0, l.VI)("controller_ps_support");
	const a = [
		{
			label: (0, s.we)("#ControllerSettings_PSSupport_Disabled"),
			data: 0,
		},
		{
			label: (0, s.we)("#ControllerSettings_PSSupport_WhenNeeded"),
			data: 1,
		},
		{
			label: (0, s.we)("#ControllerSettings_PSSupport_Enabled"),
			data: 2,
		},
	];
	if (a.length == 0) {
		return null;
	} else {
		return n.createElement(i.Vb, {
			label: (0, s.we)("#ControllerSettings_PSSupport"),
			rgOptions: a,
			selectedOption: t,
			contextMenuPositionOptions: {
				bMatchWidth: false,
			},
			onChange: (e) => {
				t = e.data;
				r(t);
				k.v3.ClearSelectedConfigCache();
				return;
				var t;
			},
		});
	}
}
function W(e) {
	if (m.TS.ON_DECK) {
		return n.createElement(n.Fragment, null, n.createElement(x, null));
	} else {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(P, {
				label: (0, s.we)("#Settings_Controller_XboxSupport"),
				controllerType: 2,
			}),
			n.createElement(U, null),
			n.createElement(
				P,
				{
					label: (0, s.we)("#Settings_Controller_SwitchSupport"),
					controllerType: 8,
				},
				n.createElement(AR, null),
			),
			n.createElement(P, {
				label: (0, s.we)("#Settings_Controller_GenericGamepadSupport"),
				controllerType: 4,
			}),
			n.createElement(L, null),
			n.createElement(z, null),
			n.createElement(x, null),
		);
	}
}
const V = "#SettingsController_SteamController";
function H(e) {
	const t =
		e.controllerIndex == null
			? p.oy.MostRecentlyActiveController
			: o.Fd.Get()
					.GetControllers()
					.find((t) => t.nControllerIndex == e.controllerIndex);
	const r = n.useRef(undefined);
	function a(e) {
		const t = e;
		const r = t?.startsWith("#");
		const n = (0, s.we)(t);
		if (r && n !== t) {
			return n;
		}
		{
			const r = "#" + t;
			const n = s.pf.LocalizeString(r, true);
			if (n !== undefined) {
				return n;
			} else {
				return e;
			}
		}
	}
	const [l, c] = n.useState(a(t?.strName));
	const [m, u] = n.useState(t?.nControllerIndex ?? -1);
	n.useEffect(() => {
		if (m == t?.nControllerIndex) {
			SteamClient.Input.SetControllerName(m, l);
		}
	}, [l, t?.nControllerIndex, m]);
	n.useEffect(() => {
		u(e.controllerIndex ?? -1);
	}, [e.controllerIndex]);
	n.useEffect(() => {
		if (m != t?.nControllerIndex) {
			c(a(t?.strName));
		}
	}, [m, t?.strName, t?.nControllerIndex]);
	const A = n.useCallback(() => {
		if (l !== t?.strName) {
			SteamClient.Input.SetControllerName(e.controllerIndex, l);
			r.current?.HideVirtualKeyboard();
		}
	}, [l, t, e.controllerIndex, r]);
	const g = n.useCallback((e) => {
		if (e.key == "Enter") {
			r.current?.HideVirtualKeyboard();
		}
		if (e.key == "Escape") {
			r.current?.HideVirtualKeyboard();
		}
	}, []);
	if (t == null) {
		return null;
	} else {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(
				i.D0,
				{
					label: (0, s.we)(
						"#QuickAccess_Tab_ControllerSettings_Section_Controller_Personalized_Name",
					),
					onOKActionDescription: (0, s.we)(
						"#Settings_Controller_Config_Edit_Name",
					),
					onSecondaryActionDescription: (0, s.we)(
						"#ControllerConfigurator_ActionButtonLabel_ResetToDefault",
					),
					onSecondaryButton: () => {
						SteamClient.Input.SetControllerName(e.controllerIndex, V);
						u(-1);
						return;
					},
					onSubmit: () => A(),
				},
				n.createElement(i.pd, {
					refKeyboardHandle: r,
					style: {
						width: 300,
					},
					placeholder: l,
					value: l,
					className: d.EditableInput,
					onChange: (e) => {
						c(e.target.value);
					},
					onKeyDown: g,
					onSubmit: () => A(),
				}),
			),
		);
	}
}
export const oH = (0, g.PA)(function (e) {
	const t =
		e.controllerIndex == null
			? p.oy.MostRecentlyActiveController
			: o.Fd.Get()
					.GetControllers()
					.find((t) => t.nControllerIndex == e.controllerIndex);
	if (t == null) {
		return null;
	} else {
		return n.createElement(i.y4, {
			label: (0, s.we)(
				"#QuickAccess_Tab_ControllerSettings_Section_Device_Rumble",
			),
			checked: t.eRumblePreference == 1,
			onChange: (e) =>
				SteamClient.Input.SetControllerRumbleSetting(t.nControllerIndex, e),
			icon: n.createElement(c.ControllerType, {
				controllerType: t.eControllerType,
				className: d.Rumble,
			}),
		});
	}
});
export const IC = (0, g.PA)(function (e) {
	const t =
		e.controllerIndex == null
			? p.oy.MostRecentlyActiveController
			: o.Fd.Get()
					.GetControllers()
					.find((t) => t.nControllerIndex == e.controllerIndex);
	if (t == null || (t.unCapabilities & 8192) == 0) {
		return null;
	} else {
		return n.createElement(i.y4, {
			label: (0, s.we)(
				"#QuickAccess_Tab_ControllerSettings_Section_Device_Haptics",
			),
			checked: t.bHaptics,
			onChange: (e) =>
				SteamClient.Input.SetControllerHapticSetting(t.nControllerIndex, e),
			icon: n.createElement(c.Haptics, null),
		});
	}
});
export const AR = (0, g.PA)(function (e) {
	const [t, r] = (0, l.VI)("controller_combine_nintendo_joycons");
	const a =
		e.controllerIndex == null
			? p.oy.MostRecentlyActiveController
			: o.Fd.Get()
					.GetControllers()
					.find((t) => t.nControllerIndex == e.controllerIndex);
	if (a != null && (0, f.zE)(a.eControllerType) && t != null) {
		return n.createElement(i.y4, {
			label: (0, s.we)(
				"#QuickAccess_Tab_ControllerSettings_Section_CombinedJoycon",
			),
			checked: t,
			onChange: (e) => r(e),
			icon:
				e.bShowIcon &&
				n.createElement(c.ControllerType, {
					controllerType: t ? 41 : 39,
				}),
		});
	} else {
		return null;
	}
});
function Z(e) {
	const [t, r] = (0, l.VI)("controller_power_off_timeout");
	const a = [
		{
			label: (0, s.we)("#ControllerSettings_TurnOffTimeout_Never"),
			data: 9999,
		},
		{
			label: (0, s.we)("#ControllerSettings_TurnOffTimeout_5"),
			data: 5,
		},
		{
			label: (0, s.we)("#ControllerSettings_TurnOffTimeout_10"),
			data: 10,
		},
		{
			label: (0, s.we)("#ControllerSettings_TurnOffTimeout_15"),
			data: 15,
		},
		{
			label: (0, s.we)("#ControllerSettings_TurnOffTimeout_30"),
			data: 30,
		},
		{
			label: (0, s.we)("#ControllerSettings_TurnOffTimeout_60"),
			data: 60,
		},
		{
			label: (0, s.we)("#ControllerSettings_TurnOffTimeout_120"),
			data: 120,
		},
	];
	if (a.length == 0) {
		return null;
	} else {
		return n.createElement(i.Vb, {
			label: (0, s.we)("#ControllerSettings_TurnOffTimeout"),
			rgOptions: a,
			selectedOption: t,
			onChange: (e) => r(e.data),
		});
	}
}
export function yk() {
	const e = (0, h.W6)();
	const t = (0, m.Qn)();
	const r = (e, t) => {
		const r = o.Fd.Get().GetControllers() ?? [];
		(0, R.lX)(
			n.createElement(
				T.tz,
				null,
				r.length > 0 &&
					n.createElement(
						T.kt,
						{
							key: "ClearSelectedControllerConfig",
							onSelected: () =>
								((e) => {
									r.forEach((t) =>
										SteamClient.Input.ClearSelectedConfigForApp(
											e,
											t.nControllerIndex,
										),
									);
								})(e),
						},
						(0, s.we)("#GameAction_ResetSelectedControllerConfig"),
					),
			),
			t,
		);
	};
	let a = n.useRef(undefined);
	return n.createElement(
		D.sh,
		null,
		n.createElement(N, null),
		n.createElement(
			i.G5,
			null,
			n.createElement(
				D.tX,
				null,
				(0, s.we)("#Settings_ExternalController_Settings"),
			),
			!m.TS.ON_DECK && n.createElement(F, null),
			n.createElement(AR, null),
			n.createElement(W, null),
			n.createElement(Z, null),
			n.createElement(K, null),
		),
		n.createElement(
			i.G5,
			null,
			n.createElement(
				D.tX,
				null,
				(0, s.we)("#Settings_Controller_BaseConfigurations"),
			),
			n.createElement(
				i.D0,
				{
					label: (0, s.we)("#Settings_Controller_DesktopConfig"),
					childrenContainerWidth: "min",
					ref: a,
				},
				n.createElement(
					A.Z,
					{
						className: d.BuiltInLayoutButtons,
					},
					n.createElement(
						D.CS,
						{
							onClick: () => {
								if (t) {
									e.push(C.BV.GamepadUI.ControllerConfigurator.Main(S.IV));
								} else {
									SteamClient.Apps.ShowControllerConfigurator(S.IV);
								}
							},
						},
						(0, s.we)("#Settings_Controller_Config_Edit"),
					),
					n.createElement(
						i.$n,
						{
							className: d.BuiltInLayoutButton,
							onClick: (e) => r(S.IV, e),
						},
						n.createElement(c.Settings, null),
					),
				),
			),
			!m.TS.ON_DECK &&
				n.createElement(
					i.D0,
					{
						label: (0, s.we)("#Settings_Controller_ChordConfig"),
						childrenContainerWidth: "min",
						ref: a,
					},
					n.createElement(
						A.Z,
						{
							className: d.BuiltInLayoutButtons,
						},
						n.createElement(
							D.CS,
							{
								onClick: () => {
									if (t) {
										e.push(C.BV.GamepadUI.ControllerConfigurator.Main(S.qh));
									} else {
										SteamClient.Apps.ShowControllerConfigurator(S.qh);
									}
								},
							},
							(0, s.we)("#Settings_Controller_Config_Edit"),
						),
						n.createElement(
							i.$n,
							{
								className: d.BuiltInLayoutButton,
								onClick: (e) => r(S.qh, e),
							},
							n.createElement(c.Settings, null),
						),
					),
				),
		),
	);
}
const K = (0, g.PA)(function () {
	let e;
	let t;
	let r = false;
	n.useEffect(() => {
		o.Fd.Get().QueryXboxDriverInstallState();
	}, []);
	const i = o.Fd.Get().XboxDriverInstallState;
	if (i == null) {
		return null;
	}
	switch (i) {
		case "Installed":
			t = (e) => {
				const t = (0, I.uX)(e);
				o.Fd.Get().SetXboxDriverInstallState(false, t);
			};
			e = (0, s.we)("#SettingsController_XBoxDriverUninstall");
			break;
		case "OutOfDate":
			t = (e) => {
				const t = (0, I.uX)(e);
				o.Fd.Get().SetXboxDriverInstallState(true, t);
			};
			e = (0, s.we)("#SettingsController_XBoxDriverUpdate");
			break;
		case "PendingReboot":
			r = true;
			e = (0, s.we)("#SettingsController_XBoxDriverRebootPending");
			break;
		default:
			t = (e) => {
				const t = (0, I.uX)(e);
				o.Fd.Get().SetXboxDriverInstallState(true, t);
			};
			e = (0, s.we)("#SettingsController_XBoxDriverInstall");
	}
	return n.createElement(
		D.oN,
		{
			feature: 7,
			label: (0, s.we)("#SettingsController_XBoxDriver"),
			onClick: t,
			disabled: r,
		},
		e,
	);
});
export function wY(e) {
	let t;
	let r = e.bInstall
		? "#SettingsController_XboxDriverInstall_Title"
		: "#SettingsController_XboxDriverUninstall_Title";
	let i = false;
	switch (e.result.nResult) {
		case 0:
			t = (0, s.we)(
				e.bInstall
					? "#SettingsController_XboxDriverInstall_Success"
					: "#SettingsController_XboxDriverUninstall_Success",
			);
			i = true;
			break;
		case -1:
			t = (0, s.we)(
				e.bInstall
					? "#SettingsController_XboxDriverInstall_ServiceFailure"
					: "#SettingsController_XboxDriverUninstall_ServiceFailure",
			);
			break;
		case 6:
			t = (0, s.we)("#SettingsController_XboxDriverInstall_ErrorPendingReboot");
			i = true;
			break;
		default:
			t = (0, s.we)(
				e.bInstall
					? "#SettingsController_XboxDriverInstall_Failure"
					: "#SettingsController_XboxDriverUninstall_Failure",
				e.result.nResult,
			);
	}
	if (i) {
		return n.createElement(B.o0, {
			strTitle: (0, s.we)(r),
			strDescription: t,
			onOK: () => {
				SteamClient.System.RestartPC();
			},
			strOKButtonText: (0, s.we)("#SettingsController_XboxDriverRestart_Now"),
			strCancelButtonText: (0, s.we)(
				"#SettingsController_XboxDriverRestart_Later",
			),
		});
	} else {
		return n.createElement(B.o0, {
			strTitle: (0, s.we)(r),
			strDescription: t,
			bAlertDialog: true,
		});
	}
}
export const wK = (0, M.Nr)(function () {
	const [e, t] = (0, o.Lb)();
	const [r, i] = n.useState();
	const a = (0, C.jb)("https://rd.playstation.com/controller/fwupdater/");
	if (!e) {
		return null;
	}
	return n.createElement(
		E.w,
		{
			strName: "DualSenseUpdateNotice",
			strTitle: (0, s.we)("#Steam_DualSense_FirmwareUpdate_Title"),
			onDismiss: t,
			popupWidth: 480,
			popupHeight: 240,
			resizable: true,
			refPopup: i,
			modal: false,
		},
		n.createElement(B.o0, {
			strTitle: (0, s.we)("#Steam_DualSense_FirmwareUpdate_Title"),
			strDescription: (0, s.we)(
				"#Steam_DualSense_FirmwareUpdate_Text",
				o.Fd.Get().DualSenseUpdateProduct,
			),
			strOKButtonText: (0, s.we)("#Steam_DualSense_FirmwareUpdate_Update"),
			onOK: () => {
				a();
				t();
			},
			strMiddleButtonText: (0, s.we)("#Steam_DualSense_FirmwareUpdate_Ignore"),
			onMiddleButton: () => {
				SteamClient.Input.SetDualSenseUpdateNotification(false);
				t();
			},
			strCancelButtonText: (0, s.we)("#Steam_DualSense_FirmwareUpdate_Remind"),
			onCancel: t,
		}),
	);
});
