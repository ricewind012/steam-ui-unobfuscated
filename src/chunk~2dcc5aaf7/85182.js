import {
	Localize,
	LocalizationManager,
} from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./3475.js";
import o, { wy, Sz, q_ as q, Id, Lb } from "./22091.js";
import l, { VI } from "./34792.js";
import c from "./35488.js";
import m, { Qn, Y2 } from "./72476.js";
import u from "./61248.js";
import A from "./69164.js";
import p from "./46422.js";
import g, { PA } from "./41230.js";
import { W6 } from "./49519.js";
import C, { jb } from "./18057.js";
import _ from "./85399.js";
import f, { zE } from "./52192.js";
import b from "./61657.js";
import y from "./10975.js";
import S from "./44846.js";
import w, { L$ } from "./52451.js";
import B from "./10606.js";
import v from "./57472.js";
import E from "./78110.js";
import M, { Nr } from "./42318.js";
import T from "./88750.js";
import R, { lX } from "./31084.js";
import k from "./85360.js";
import D from "./37086.js";
const d = u;
function N(e) {
	const t = W6();
	const r = p.oy.MainRunningApp != null;
	const a = wy(r);
	const l = Sz();
	let u = p.oy.ActiveControllerIndex;
	if (u < 0 && a.length > 0) {
		u = a[0].nControllerIndex;
	}
	const [d, setD] = n.useState(u);
	const [f, setF] = n.useState(false);
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
					setD(a[r].nControllerIndex);
					y.eZ.PlayNavSound(y.PN.ChangeTabs);
				} else if (r == a.length && l.length > 0) {
					setD(-1);
					y.eZ.PlayNavSound(y.PN.ChangeTabs);
				} else {
					y.eZ.PlayNavSound(y.PN.FailedNav);
				}
			} else {
				const e = q(d) + t;
				if (e >= 0 && e < l.length) {
					setD(Id(e));
					y.eZ.PlayNavSound(y.PN.ChangeTabs);
				} else if (e == -1 && a.length > 0) {
					setD(a[a.length - 1].nControllerIndex);
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
					setD(a[0].nControllerIndex);
				} else if (l.length > 0) {
					setD(-1);
				}
			}
		} else if (q(d) >= l.length) {
			if (a.length > 0) {
				setD(a[0].nControllerIndex);
			} else if (l.length > 0) {
				setD(-1);
			}
		}
	}, [d, v, a, l]);
	const I = Qn();
	if (a.length == 0 && l.length == 0) {
		return (
			<i.G5>
				<i.D0
					disabled
					icon={<c.ControllerStatus none />}
					label={(0, Localize)("#Settings_Controller_NoControllers")}
				/>
			</i.G5>
		);
	}
	const E = a.length + l.length > 1;
	const M = d < 0 || ((v?.unCapabilities ?? 0) & 1048576) != 0;
	const T = d >= 0;
	const R = d >= 0;
	let k = "";
	if (d < 0) {
		if (q(d) < l.length) {
			k = l[q(d)].strName;
		}
	}
	if (k.length == 0) {
		k = (0, Localize)("#Settings_Controller_BindInput");
	}
	const N = (e) => {
		if (I) {
			t.push(e);
		} else {
			p.oy.SetStandaloneConfiguratorURL(e);
			SteamClient.Apps.ShowControllerConfigurator(S.mZ);
		}
	};
	return (
		<i.G5>
			{E && (
				<_.bV
					selectedControllerIndex={d}
					onControllerSelected={setD}
					showGlyphs={f}
					wrapAround={false}
					showUnboundControllers
				/>
			)}
			<A.Z onFocusWithin={setF} onButtonDown={B} retainFocus>
				{d >= 0 && (
					<>
						<H controllerIndex={d} />
						<OH controllerIndex={d} />
						<IC controllerIndex={d} />
						<G controllerIndex={d} />
						<O controllerIndex={d} />
					</>
				)}
				{M && !T && (
					<D.WG
						label={k}
						onClick={() => N(C.BV.GamepadUI.ControllerDeviceBindInput(d))}
						bottomSeparator="standard"
					>
						{(0, Localize)("#Settings_Controller_BindInput_Click")}
					</D.WG>
				)}
				{T && (
					<D.WG
						label={(0, Localize)("#Settings_Controller_TestInput")}
						onClick={() => N(C.BV.GamepadUI.ControllerDeviceTestInput(d))}
						bottomSeparator="standard"
					>
						{(0, Localize)("#Settings_Controller_TestInput_Click")}
					</D.WG>
				)}
				{R && (
					<D.WG
						label={(0, Localize)("#Settings_Controller_Calibration")}
						onClick={() =>
							N(C.BV.GamepadUI.ControllerDeviceCalibration.Root(d))
						}
						bottomSeparator="standard"
					>
						{(0, Localize)("#Settings_Controller_Calibration_Click")}
					</D.WG>
				)}
			</A.Z>
		</i.G5>
	);
}
function F(e) {
	return (
		<v.G
			feature={a.uX}
			label={(0, Localize)("#Settings_Controller_GuideButtonFocus")}
			setting="controller_guide_button_focus_steam"
		/>
	);
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

	const { bNintendoLayout, bUseReversedLayout } = t;

	const a = t.eControllerType == 39 || t.eControllerType == 40;
	const l =
		t.eControllerType == 33 ||
		t.eControllerType == 34 ||
		t.eControllerType == 34 ||
		t.eControllerType == 45 ||
		t.eControllerType == 34 ||
		t.eControllerType == 45 ||
		t.eControllerType == 48 ||
		t.eControllerType == 34 ||
		t.eControllerType == 45 ||
		t.eControllerType == 48 ||
		t.eControllerType == 47;
	let u = a ? (
		bUseReversedLayout ? (
			<c.Layout_BA_Nintendo_JoyCon />
		) : (
			<c.Layout_AB_Nintendo_JoyCon />
		)
	) : bNintendoLayout ? (
		bUseReversedLayout ? (
			<c.Layout_BA_Nintendo />
		) : (
			<c.Layout_AB_Nintendo />
		)
	) : l ? (
		bUseReversedLayout ? (
			<c.Layout_BA_PlayStation />
		) : (
			<c.Layout_AB_Playstation />
		)
	) : bUseReversedLayout ? (
		<c.Layout_BA />
	) : (
		<c.Layout_AB />
	);
	return (
		<div className={d.NintendoSwitchLayoutToggle}>
			<i.y4
				label={(0, Localize)("#Settings_Controller_SwitchLayout")}
				checked={bUseReversedLayout}
				icon={u}
				onChange={(e) =>
					SteamClient.Settings.SetUseNintendoButtonLayout(t.nControllerIndex, e)
				}
				description={(0, Localize)("#Settings_Controller_SwitchLayoutDesc")}
			/>
		</div>
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
	const t_bUseUniversalFaceButtonGlyphs = t.bUseUniversalFaceButtonGlyphs;
	return (
		<i.y4
			label={(0, Localize)("#Settings_Controller_UniversalGlyphs")}
			checked={t_bUseUniversalFaceButtonGlyphs}
			icon={<c.UniversalGlyphs />}
			onChange={(e) =>
				SteamClient.Settings.SetUseUniversalFaceButtonGlyphs(
					t.nControllerIndex,
					e,
				)
			}
			description={(0, Localize)("#Settings_Controller_UniversalGlyphsDesc")}
		/>
	);
}
function P(e) {
	const { label, controllerType, children } = e;
	const s = {
		4: "controller_generic_support",
		2: "controller_xbox_support",
		8: "controller_switch_support",
	};
	const [o, c] = VI(s[r]);
	return (
		<>
			<i.y4
				label={label}
				checked={o}
				onChange={(e) => {
					c(e);
					k.v3.ClearSelectedConfigCache();
				}}
			/>
			{o && children}
		</>
	);
}
function L() {
	if (Y2()) {
		return null;
	} else {
		return (
			<v.G
				feature={a.uX}
				label={(0, Localize)("#Settings_Controller_TurnOffOnExit")}
				setting="turn_off_controller_on_exit"
			/>
		);
	}
}
function Z_1() {
	return (
		<v.G
			feature={a.uX}
			label={(0, Localize)("#Settings_Controller_ChordConfigEnable")}
			setting="controller_enable_chord"
		/>
	);
}
const X = PA(() => {
	const e = o.Fd.Get().GetSteamControllerDonglePresent();
	const [t, setT] = n.useState(false);
	const [i, setI] = n.useState(false);
	const [l, setL] = n.useState(false);
	n.useEffect(() => {
		o.Fd.Get().ClearSteamControllerDongleState();
	}, []);
	const m = n.useCallback(() => {
		SteamClient.Input.SetSteamControllerDonglePairingMode(false, !l);
		setI(true);
	}, [l]);
	const { bTimerCompleted, fnStopTimer, fnRestartTimer } = L$(60000, m, false);
	n.useEffect(() => () => m(), [m]);
	if (e) {
		return (
			<D.WG
				label={(0, Localize)("#Settings_Controller_SCPairing")}
				onClick={() => {
					SteamClient.Input.SetSteamControllerDonglePairingMode(!t, false);
					setT(!t);
					if (t) {
						setL(true);
						fnStopTimer();
					} else if (!t && !i) {
						fnRestartTimer();
					}
				}}
			>
				{(0, Localize)(
					t
						? "#Settings_Controller_SCPairing_Accept"
						: "#Settings_Controller_SCPairing_Enabled",
				)}
			</D.WG>
		);
	} else {
		return null;
	}
});
function U(e) {
	const [t, r] = VI("controller_ps_support");
	const a = [
		{
			label: (0, Localize)("#ControllerSettings_PSSupport_Disabled"),
			data: 0,
		},
		{
			label: (0, Localize)("#ControllerSettings_PSSupport_WhenNeeded"),
			data: 1,
		},
		{
			label: (0, Localize)("#ControllerSettings_PSSupport_Enabled"),
			data: 2,
		},
	];
	if (a.length == 0) {
		return null;
	} else {
		return (
			<i.Vb
				label={(0, Localize)("#ControllerSettings_PSSupport")}
				rgOptions={a}
				selectedOption={t}
				contextMenuPositionOptions={{
					bMatchWidth: false,
				}}
				onChange={(e) => {
					t = e.data;
					r(t);
					k.v3.ClearSelectedConfigCache();
					return;
					var t;
				}}
			/>
		);
	}
}
function W(e) {
	if (m.TS.ON_DECK) {
		return (
			<>
				<X />
			</>
		);
	} else {
		return (
			<>
				<P
					label={(0, Localize)("#Settings_Controller_XboxSupport")}
					controllerType={2}
				/>
				<U />
				<P
					label={(0, Localize)("#Settings_Controller_SwitchSupport")}
					controllerType={8}
				>
					<AR />
				</P>
				<P
					label={(0, Localize)("#Settings_Controller_GenericGamepadSupport")}
					controllerType={4}
				/>
				<L />
				<Z_1 />
				<X />
			</>
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
	const RRef = n.useRef(undefined);
	function a(e) {
		const t = e;
		const r = t?.startsWith("#");
		const n = (0, Localize)(t);
		if (r && n !== t) {
			return n;
		}
		{
			const r = `#${t}`;
			const n = LocalizationManager.LocalizeString(r, true);
			if (n !== undefined) {
				return n;
			} else {
				return e;
			}
		}
	}
	const [l, setL] = n.useState(a(t?.strName));
	const [m, setM] = n.useState(t?.nControllerIndex ?? -1);
	n.useEffect(() => {
		if (m == t?.nControllerIndex) {
			SteamClient.Input.SetControllerName(m, l);
		}
	}, [l, t?.nControllerIndex, m]);
	n.useEffect(() => {
		setM(e.controllerIndex ?? -1);
	}, [e.controllerIndex]);
	n.useEffect(() => {
		if (m != t?.nControllerIndex) {
			setL(a(t?.strName));
		}
	}, [m, t?.strName, t?.nControllerIndex]);
	const A = n.useCallback(() => {
		if (l !== t?.strName) {
			SteamClient.Input.SetControllerName(e.controllerIndex, l);
			RRef.current?.HideVirtualKeyboard();
		}
	}, [l, t, e.controllerIndex, RRef]);
	const g = n.useCallback((e) => {
		if (e.key == "Enter") {
			RRef.current?.HideVirtualKeyboard();
		}
		if (e.key == "Escape") {
			RRef.current?.HideVirtualKeyboard();
		}
	}, []);
	if (t == null) {
		return null;
	} else {
		return (
			<>
				<i.D0
					label={(0, Localize)(
						"#QuickAccess_Tab_ControllerSettings_Section_Controller_Personalized_Name",
					)}
					onOKActionDescription={(0, Localize)(
						"#Settings_Controller_Config_Edit_Name",
					)}
					onSecondaryActionDescription={(0, Localize)(
						"#ControllerConfigurator_ActionButtonLabel_ResetToDefault",
					)}
					onSecondaryButton={() => {
						SteamClient.Input.SetControllerName(e.controllerIndex, V);
						setM(-1);
					}}
					onSubmit={() => A()}
				>
					<i.pd
						refKeyboardHandle={RRef}
						style={{
							width: 300,
						}}
						placeholder={l}
						value={l}
						className={d.EditableInput}
						onChange={(e) => {
							setL(e.target.value);
						}}
						onKeyDown={g}
						onSubmit={() => A()}
					/>
				</i.D0>
			</>
		);
	}
}
export const OH = PA((e) => {
	const t =
		e.controllerIndex == null
			? p.oy.MostRecentlyActiveController
			: o.Fd.Get()
					.GetControllers()
					.find((t) => t.nControllerIndex == e.controllerIndex);
	if (t == null) {
		return null;
	} else {
		return (
			<i.y4
				label={(0, Localize)(
					"#QuickAccess_Tab_ControllerSettings_Section_Device_Rumble",
				)}
				checked={t.eRumblePreference == 1}
				onChange={(e) =>
					SteamClient.Input.SetControllerRumbleSetting(t.nControllerIndex, e)
				}
				icon={
					<c.ControllerType
						controllerType={t.eControllerType}
						className={d.Rumble}
					/>
				}
			/>
		);
	}
});
export const IC = PA((e) => {
	const t =
		e.controllerIndex == null
			? p.oy.MostRecentlyActiveController
			: o.Fd.Get()
					.GetControllers()
					.find((t) => t.nControllerIndex == e.controllerIndex);
	if (t == null || (t.unCapabilities & 8192) == 0) {
		return null;
	} else {
		return (
			<i.y4
				label={(0, Localize)(
					"#QuickAccess_Tab_ControllerSettings_Section_Device_Haptics",
				)}
				checked={t.bHaptics}
				onChange={(e) =>
					SteamClient.Input.SetControllerHapticSetting(t.nControllerIndex, e)
				}
				icon={<c.Haptics />}
			/>
		);
	}
});
export const AR = PA((e) => {
	const [t, r] = VI("controller_combine_nintendo_joycons");
	const a =
		e.controllerIndex == null
			? p.oy.MostRecentlyActiveController
			: o.Fd.Get()
					.GetControllers()
					.find((t) => t.nControllerIndex == e.controllerIndex);
	if (a != null && zE(a.eControllerType) && t != null) {
		return (
			<i.y4
				label={(0, Localize)(
					"#QuickAccess_Tab_ControllerSettings_Section_CombinedJoycon",
				)}
				checked={t}
				onChange={(e) => r(e)}
				icon={e.bShowIcon && <c.ControllerType controllerType={t ? 41 : 39} />}
			/>
		);
	} else {
		return null;
	}
});
function Z(e) {
	const [t, r] = VI("controller_power_off_timeout");
	const a = [
		{
			label: (0, Localize)("#ControllerSettings_TurnOffTimeout_Never"),
			data: 9999,
		},
		{
			label: (0, Localize)("#ControllerSettings_TurnOffTimeout_5"),
			data: 5,
		},
		{
			label: (0, Localize)("#ControllerSettings_TurnOffTimeout_10"),
			data: 10,
		},
		{
			label: (0, Localize)("#ControllerSettings_TurnOffTimeout_15"),
			data: 15,
		},
		{
			label: (0, Localize)("#ControllerSettings_TurnOffTimeout_30"),
			data: 30,
		},
		{
			label: (0, Localize)("#ControllerSettings_TurnOffTimeout_60"),
			data: 60,
		},
		{
			label: (0, Localize)("#ControllerSettings_TurnOffTimeout_120"),
			data: 120,
		},
	];
	if (a.length == 0) {
		return null;
	} else {
		return (
			<i.Vb
				label={(0, Localize)("#ControllerSettings_TurnOffTimeout")}
				rgOptions={a}
				selectedOption={t}
				onChange={(e) => r(e.data)}
			/>
		);
	}
}
export function yk() {
	const e = W6();
	const t = Qn();
	const r = (e, t) => {
		const r = o.Fd.Get().GetControllers() ?? [];
		lX(
			<T.tz>
				{r.length > 0 && (
					<T.kt
						key="ClearSelectedControllerConfig"
						onSelected={() =>
							((e) => {
								r.forEach((t) =>
									SteamClient.Input.ClearSelectedConfigForApp(
										e,
										t.nControllerIndex,
									),
								);
							})(e)
						}
					>
						{(0, Localize)("#GameAction_ResetSelectedControllerConfig")}
					</T.kt>
				)}
			</T.tz>,
			t,
		);
	};
	let ARef = n.useRef(undefined);
	return (
		<D.sh>
			<N />
			<i.G5>
				<D.tX>{(0, Localize)("#Settings_ExternalController_Settings")}</D.tX>
				{!m.TS.ON_DECK && <F />}
				<AR />
				<W />
				<Z />
				<K />
			</i.G5>
			<i.G5>
				<D.tX>{(0, Localize)("#Settings_Controller_BaseConfigurations")}</D.tX>
				<i.D0
					label={(0, Localize)("#Settings_Controller_DesktopConfig")}
					childrenContainerWidth="min"
					ref={ARef}
				>
					<A.Z className={d.BuiltInLayoutButtons}>
						<D.CS
							onClick={() => {
								if (t) {
									e.push(C.BV.GamepadUI.ControllerConfigurator.Main(S.IV));
								} else {
									SteamClient.Apps.ShowControllerConfigurator(S.IV);
								}
							}}
						>
							{(0, Localize)("#Settings_Controller_Config_Edit")}
						</D.CS>
						<i.$n className={d.BuiltInLayoutButton} onClick={(e) => r(S.IV, e)}>
							<c.Settings />
						</i.$n>
					</A.Z>
				</i.D0>
				{!m.TS.ON_DECK && (
					<i.D0
						label={(0, Localize)("#Settings_Controller_ChordConfig")}
						childrenContainerWidth="min"
						ref={ARef}
					>
						<A.Z className={d.BuiltInLayoutButtons}>
							<D.CS
								onClick={() => {
									if (t) {
										e.push(C.BV.GamepadUI.ControllerConfigurator.Main(S.qh));
									} else {
										SteamClient.Apps.ShowControllerConfigurator(S.qh);
									}
								}}
							>
								{(0, Localize)("#Settings_Controller_Config_Edit")}
							</D.CS>
							<i.$n
								className={d.BuiltInLayoutButton}
								onClick={(e) => r(S.qh, e)}
							>
								<c.Settings />
							</i.$n>
						</A.Z>
					</i.D0>
				)}
			</i.G5>
		</D.sh>
	);
}
const K = PA(() => {
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
		case "Installed": {
			t = (e) => {
				const t = GetOwningWindowForEvent(e);
				o.Fd.Get().SetXboxDriverInstallState(false, t);
			};
			e = (0, Localize)("#SettingsController_XBoxDriverUninstall");
			break;
		}
		case "OutOfDate": {
			t = (e) => {
				const t = GetOwningWindowForEvent(e);
				o.Fd.Get().SetXboxDriverInstallState(true, t);
			};
			e = (0, Localize)("#SettingsController_XBoxDriverUpdate");
			break;
		}
		case "PendingReboot": {
			r = true;
			e = (0, Localize)("#SettingsController_XBoxDriverRebootPending");
			break;
		}
		default: {
			t = (e) => {
				const t = GetOwningWindowForEvent(e);
				o.Fd.Get().SetXboxDriverInstallState(true, t);
			};
			e = (0, Localize)("#SettingsController_XBoxDriverInstall");
		}
	}
	return (
		<D.oN
			feature={7}
			label={(0, Localize)("#SettingsController_XBoxDriver")}
			onClick={t}
			disabled={r}
		>
			{e}
		</D.oN>
	);
});
export function wY(e) {
	let t;
	let r = e.bInstall
		? "#SettingsController_XboxDriverInstall_Title"
		: "#SettingsController_XboxDriverUninstall_Title";
	let i = false;
	switch (e.result.nResult) {
		case 0: {
			t = (0, Localize)(
				e.bInstall
					? "#SettingsController_XboxDriverInstall_Success"
					: "#SettingsController_XboxDriverUninstall_Success",
			);
			i = true;
			break;
		}
		case -1: {
			t = (0, Localize)(
				e.bInstall
					? "#SettingsController_XboxDriverInstall_ServiceFailure"
					: "#SettingsController_XboxDriverUninstall_ServiceFailure",
			);
			break;
		}
		case 6: {
			t = (0, Localize)(
				"#SettingsController_XboxDriverInstall_ErrorPendingReboot",
			);
			i = true;
			break;
		}
		default: {
			t = (0, Localize)(
				e.bInstall
					? "#SettingsController_XboxDriverInstall_Failure"
					: "#SettingsController_XboxDriverUninstall_Failure",
				e.result.nResult,
			);
		}
	}
	if (i) {
		return (
			<B.o0
				strTitle={(0, Localize)(r)}
				strDescription={t}
				onOK={() => {
					SteamClient.System.RestartPC();
				}}
				strOKButtonText={(0, Localize)(
					"#SettingsController_XboxDriverRestart_Now",
				)}
				strCancelButtonText={(0, Localize)(
					"#SettingsController_XboxDriverRestart_Later",
				)}
			/>
		);
	} else {
		return <B.o0 strTitle={(0, Localize)(r)} strDescription={t} bAlertDialog />;
	}
}
export const wK = Nr(() => {
	const [e, t] = Lb();
	const [r, setR] = n.useState();
	const a = jb("https://rd.playstation.com/controller/fwupdater/");
	if (!e) {
		return null;
	}
	return (
		<E.w
			strName="DualSenseUpdateNotice"
			strTitle={(0, Localize)("#Steam_DualSense_FirmwareUpdate_Title")}
			onDismiss={t}
			popupWidth={480}
			popupHeight={240}
			resizable
			refPopup={setR}
			modal={false}
		>
			<B.o0
				strTitle={(0, Localize)("#Steam_DualSense_FirmwareUpdate_Title")}
				strDescription={(0, Localize)(
					"#Steam_DualSense_FirmwareUpdate_Text",
					o.Fd.Get().DualSenseUpdateProduct,
				)}
				strOKButtonText={(0, Localize)(
					"#Steam_DualSense_FirmwareUpdate_Update",
				)}
				onOK={() => {
					a();
					t();
				}}
				strMiddleButtonText={(0, Localize)(
					"#Steam_DualSense_FirmwareUpdate_Ignore",
				)}
				onMiddleButton={() => {
					SteamClient.Input.SetDualSenseUpdateNotification(false);
					t();
				}}
				strCancelButtonText={(0, Localize)(
					"#Steam_DualSense_FirmwareUpdate_Remind",
				)}
				onCancel={t}
			/>
		</E.w>
	);
});
