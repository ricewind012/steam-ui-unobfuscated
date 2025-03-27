import { Localize } from "../../actual_src/utils/localization.js";
import {
	CopyTextToClipboard,
	ew,
	GetOwningWindowForElement,
} from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./35906.js";
import s, { A as A_1 } from "./90765.js";
import l, { A9, as } from "./22091.js";
import c from "./35488.js";
import m, { Wh } from "./31800.js";
import u from "./46422.js";
import d from "./69164.js";
import A from "./61657.js";
import p, { AX } from "./18057.js";
import g from "./50350.js";
import h, { ui } from "./62486.js";
import C, { yq } from "./93966.js";
import _, { oH } from "./33572.js";
const b = false;
const y = 750;
const S = {
	0: "#Settings_ControllerDeviceSupport_TestingStarted",
	1: "#Settings_ControllerDeviceSupport_TestingFreeMode",
	2: "#Settings_ControllerDeviceSupport_TestingBindAButton",
	3: "#Settings_ControllerDeviceSupport_TestingBindBButton",
	4: "#Settings_ControllerDeviceSupport_TestingBindXButton",
	5: "#Settings_ControllerDeviceSupport_TestingBindYButton",
	6: "#Settings_ControllerDeviceSupport_TestingBindDPadLeft",
	7: "#Settings_ControllerDeviceSupport_TestingBindDPadRight",
	8: "#Settings_ControllerDeviceSupport_TestingBindDPadUp",
	9: "#Settings_ControllerDeviceSupport_TestingBindDPadDown",
	10: "#Settings_ControllerDeviceSupport_TestingBindLeftStickLeft",
	11: "#Settings_ControllerDeviceSupport_TestingBindLeftStickRight",
	12: "#Settings_ControllerDeviceSupport_TestingBindLeftStickUp",
	13: "#Settings_ControllerDeviceSupport_TestingBindLeftStickDown",
	14: "#Settings_ControllerDeviceSupport_TestingBindLeftStickButton",
	15: "#Settings_ControllerDeviceSupport_TestingBindRightStickLeft",
	16: "#Settings_ControllerDeviceSupport_TestingBindRightStickRight",
	17: "#Settings_ControllerDeviceSupport_TestingBindRightStickUp",
	18: "#Settings_ControllerDeviceSupport_TestingBindRightStickDown",
	19: "#Settings_ControllerDeviceSupport_TestingBindRightStickButton",
	20: "#Settings_ControllerDeviceSupport_TestingBindLeftShoulder",
	21: "#Settings_ControllerDeviceSupport_TestingBindLeftTrigger",
	22: "#Settings_ControllerDeviceSupport_TestingBindRightShoulder",
	23: "#Settings_ControllerDeviceSupport_TestingBindRightTrigger",
	24: "#Settings_ControllerDeviceSupport_TestingBindSelect",
	25: "#Settings_ControllerDeviceSupport_TestingBindStart",
	26: "#Settings_ControllerDeviceSupport_TestingBindGuide",
	27: "#Settings_ControllerDeviceSupport_TestingBindShare",
	28: "#Settings_ControllerDeviceSupport_TestingBindTouchpad",
	29: "#Settings_ControllerDeviceSupport_TestingBindingComplete",
	30: "#Settings_ControllerDeviceSupport_TestingLeftTrigger",
	31: "#Settings_ControllerDeviceSupport_TestingRightTrigger",
	32: "#Settings_ControllerDeviceSupport_TestingLeftTrackpad",
	33: "#Settings_ControllerDeviceSupport_TestingLeftTrackpadPressure",
	34: "#Settings_ControllerDeviceSupport_TestingRightTrackpad",
	35: "#Settings_ControllerDeviceSupport_TestingRightTrackpadPressure",
	36: "#Settings_ControllerDeviceSupport_TestingLeftJoystick",
	37: "#Settings_ControllerDeviceSupport_TestingRightJoystick",
	38: "#Settings_ControllerDeviceSupport_TestingButtons",
	39: "#Settings_ControllerDeviceSupport_TestingLeftHaptics",
	40: "#Settings_ControllerDeviceSupport_TestingRightHaptics",
	41: "#Settings_ControllerDeviceSupport_TestingComplete",
};
function W(e) {
	n.useEffect(() => {
		u.oy.DisableHomeAndQuickAccessButtons();
		return () => {
			u.oy.EnableHomeAndQuickAccessButtons();
		};
	}, []);
	const t = yq();
	const RRef = n.useRef(null);
	const i = () => {
		if (b) {
			console.log("Cancelling Device Support Flow - Long B Press");
		}
		t();
	};
	n.useEffect(
		() => () => {
			if (RRef.current) {
				window.clearTimeout(RRef.current);
			}
		},
		[],
	);
	const s = (e) => {
		if (b) {
			console.log("swallowed movement ");
		}
		return true;
	};
	return (
		<g.Jr>
			<d.Z
				className={a.Container}
				focusable
				autoFocus
				noFocusRing
				onButtonDown={(e) => {
					if (e.detail.button == A.pR.CANCEL) {
						if (e.detail.source == A.Vz.GAMEPAD) {
							RRef.current = window.setTimeout(i, y);
						} else {
							t();
						}
					}
					e.preventDefault();
					e.stopPropagation();
				}}
				onButtonUp={(e) => {
					if (e.detail.button == A.pR.CANCEL && RRef.current) {
						window.clearTimeout(RRef.current);
						RRef.current = null;
					}
					e.preventDefault();
					e.stopPropagation();
				}}
				onCancelButton={() => {
					if (b) {
						console.log("swallowed cancel button ");
					}
				}}
				onCancelActionDescription={(0, Localize)(
					"#Settings_ControllerDeviceSupport_HoldBToExit",
				)}
				onMoveDown={s}
				onMoveUp={s}
				onMoveLeft={s}
				onMoveRight={s}
				onOKActionDescription={null}
			>
				{e.children}
			</d.Z>
		</g.Jr>
	);
}
function B(e) {
	const t = A9();
	const r = l.Fd.Get().GetController(t?.controllerIdx);
	let s = r?.nLStickDeadzone;
	s = s < 0 ? ui(r?.eControllerType, r?.unVendorID, r?.unProductID) : s;
	const c = Math.sqrt(
		t?.LeftJoystickX * t?.LeftJoystickX + t?.LeftJoystickY * t?.LeftJoystickY,
	);
	const m = c >= s ? t?.LeftJoystickX : 0;
	const u = c >= s ? t?.LeftJoystickY : 0;
	const d = t?.LeftTrigger > 100 ? t?.LeftTrigger : 0;
	const A = l.Fd.Get().GetController(t?.controllerIdx)?.eControllerType == 49;
	return (
		<div className={a.InfoColumn}>
			<i.G5>
				{t?.LeftTrigger != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						label={(0, Localize)(
							"#Settings_ControllerDeviceSupport_LeftTrigger",
						)}
					>
						{String(d)}
					</i.Nv>
				)}
				{t?.LeftTrackpadX != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						label={(0, Localize)(
							"#Settings_ControllerDeviceSupport_LeftTrackpad",
						)}
					>
						{`${String(t?.LeftTrackpadX)}, ${String(t?.LeftTrackpadY)}`}
					</i.Nv>
				)}
				{t?.LeftTrackpadPressure != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						label={(0, Localize)(
							"#Settings_ControllerDeviceSupport_LeftTrackpad_Pressure",
						)}
					>
						{String(t?.LeftTrackpadPressure)}
					</i.Nv>
				)}
				{t?.LeftJoystickX != null && t?.LeftJoystickY != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						bottomSeparator="none"
						label={(0, Localize)(
							"#Settings_ControllerDeviceSupport_LeftJoystick",
						)}
					>
						{`${String(m)}, ${String(u)}`}
					</i.Nv>
				)}
				{e.showUpperGrips && t?.bL4 != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						bottomSeparator="none"
						label={(0, Localize)("#Settings_ControllerDeviceSupport_L4")}
					>
						{String(t.bL4)}
					</i.Nv>
				)}
				{e.showLowerGrips && t?.bL5 != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						bottomSeparator="none"
						label={(0, Localize)(
							A
								? "#Settings_ControllerDeviceSupport_L4"
								: "#Settings_ControllerDeviceSupport_L5",
						)}
					>
						{String(t.bL5)}
					</i.Nv>
				)}
			</i.G5>
		</div>
	);
}
function V(e) {
	const t = A9();
	const r = l.Fd.Get().GetController(t?.controllerIdx);
	let s = r?.nRStickDeadzone;
	s = s < 0 ? ui(r?.eControllerType, r?.unVendorID, r?.unProductID) : s;
	const c = Math.sqrt(
		t?.RightJoystickX * t?.RightJoystickX +
			t?.RightJoystickY * t?.RightJoystickY,
	);
	const m = c >= s ? t?.RightJoystickX : 0;
	const u = c >= s ? t?.RightJoystickY : 0;
	const d = t?.RightTrigger > 100 ? t?.RightTrigger : 0;
	const A = (r?.unCapabilities & 8) != 0;
	const p = l.Fd.Get().GetController(t?.controllerIdx)?.eControllerType == 49;
	return (
		<div className={a.InfoColumn}>
			<i.G5>
				{t?.RightTrigger != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						label={(0, Localize)(
							"#Settings_ControllerDeviceSupport_RightTrigger",
						)}
					>
						{String(d)}
					</i.Nv>
				)}
				{t?.RightTrackpadX != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						label={(0, Localize)(
							"#Settings_ControllerDeviceSupport_RightTrackpad",
						)}
					>
						{`${String(t?.RightTrackpadX)}, ${String(t?.RightTrackpadY)}`}
					</i.Nv>
				)}
				{t?.RightTrackpadPressure != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						label={(0, Localize)(
							"#Settings_ControllerDeviceSupport_RightTrackpad_Pressure",
						)}
					>
						{String(t?.RightTrackpadPressure)}
					</i.Nv>
				)}
				{A && t?.RightJoystickX != null && t?.RightJoystickY != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						bottomSeparator="none"
						label={(0, Localize)(
							"#Settings_ControllerDeviceSupport_RightJoystick",
						)}
					>
						{`${String(m)}, ${String(u)}`}
					</i.Nv>
				)}
				{e.showUpperGrips && t?.bR4 != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						bottomSeparator="none"
						label={(0, Localize)("#Settings_ControllerDeviceSupport_R4")}
					>
						{String(t.bR4)}
					</i.Nv>
				)}
				{e.showLowerGrips && t?.bR5 != null && (
					<i.Nv
						padding="compact"
						focusable={false}
						bottomSeparator="none"
						label={(0, Localize)(
							p
								? "#Settings_ControllerDeviceSupport_R4"
								: "#Settings_ControllerDeviceSupport_R5",
						)}
					>
						{String(t.bR5)}
					</i.Nv>
				)}
			</i.G5>
		</div>
	);
}
export function BB(e) {
	const { eFlow, controller, controllerSupportFlowState, bUsePSButtons } = e;
	let l = 0;
	let m = 0;
	if (
		controllerSupportFlowState?.LeftJoystickX != null &&
		controllerSupportFlowState?.LeftJoystickY != null
	) {
		l = controllerSupportFlowState.LeftJoystickX / 32768;
		m = controllerSupportFlowState.LeftJoystickY / 32768;
		m = -m;
		let e = Math.sqrt(l * l + m * m);
		if (e > 1) {
			l /= e;
			m /= e;
		}
	}
	let u = 0;
	let d = 0;
	if (
		controllerSupportFlowState?.RightJoystickX != null &&
		controllerSupportFlowState?.RightJoystickY != null
	) {
		u = controllerSupportFlowState.RightJoystickX / 32768;
		d = controllerSupportFlowState.RightJoystickY / 32768;
		d = -d;
		let e = Math.sqrt(u * u + d * d);
		if (e > 1) {
			u /= e;
			d /= e;
		}
	}
	let A = 0;
	let p = 0;
	if (
		controllerSupportFlowState?.CenterTrackpadX != null &&
		controllerSupportFlowState?.CenterTrackpadY != null
	) {
		A = controllerSupportFlowState.CenterTrackpadX / 32768;
		p = controllerSupportFlowState.CenterTrackpadY / 32768;
		p = -p;
	}
	let g = 0;
	let h = 0;
	if (
		controllerSupportFlowState?.LeftTrackpadX != null &&
		controllerSupportFlowState?.LeftTrackpadY != null
	) {
		g = controllerSupportFlowState.LeftTrackpadX / 32768;
		h = controllerSupportFlowState.LeftTrackpadY / 32768;
		h = -h;
	}
	let C = 0;
	let _ = 0;
	if (
		controllerSupportFlowState?.RightTrackpadX != null &&
		controllerSupportFlowState?.RightTrackpadY != null
	) {
		C = controllerSupportFlowState.RightTrackpadX / 32768;
		_ = controllerSupportFlowState.RightTrackpadY / 32768;
		_ = -_;
	}
	if (eFlow == 2) {
		if (controller?.eControllerType == 4) {
			return (
				<c.SteamDeckTiltedOutline
					className={a.ControllerOutline}
					highlightViewButton={controllerSupportFlowState?.bViewButton}
					highlightOptionsButton={controllerSupportFlowState?.bOptionsButton}
					highlightSteamButton={controllerSupportFlowState?.bSteamButton}
					highlightQuickAccessButton={
						controllerSupportFlowState?.bQuickAccessButton
					}
					highlightLeftStick={controllerSupportFlowState?.bLeftStick}
					highlightRightStick={controllerSupportFlowState?.bRightStick}
					highlightLeftTrackpad={controllerSupportFlowState?.bLeftTrackpad}
					highlightRightTrackpad={controllerSupportFlowState?.bRightTrackpad}
					highlightDPad={
						controllerSupportFlowState?.bDPadUp &&
						controllerSupportFlowState?.bDPadDown &&
						controllerSupportFlowState?.bDPadLeft &&
						controllerSupportFlowState?.bDPadRight
					}
					highlightAButton={controllerSupportFlowState?.bButtonSouth}
					highlightBButton={controllerSupportFlowState?.bButtonEast}
					highlightXButton={controllerSupportFlowState?.bButtonWest}
					highlightYButton={controllerSupportFlowState?.bButtonNorth}
					highlightL1Button={controllerSupportFlowState?.bLeftBumper}
					highlightL2Trigger={controllerSupportFlowState?.bLeftTrigger}
					highlightR1Button={controllerSupportFlowState?.bRightBumper}
					highlightR2Trigger={controllerSupportFlowState?.bRightTrigger}
					highlightL4Grip={controllerSupportFlowState?.bL4}
					highlightL5Grip={controllerSupportFlowState?.bL5}
					highlightR4Grip={controllerSupportFlowState?.bR4}
					highlightR5Grip={controllerSupportFlowState?.bR5}
					touchpadLeftTouchX={g}
					touchpadLeftTouchY={h}
					touchpadRightTouchX={C}
					touchpadRightTouchY={_}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
		if (controller?.eControllerType == 49) {
			return (
				<c.HoriControllerSupportImage
					className={A_1(a.ControllerOutline, a.LargerImg)}
					highlightViewButton={controllerSupportFlowState?.bViewButton}
					highlightOptionsButton={controllerSupportFlowState?.bOptionsButton}
					highlightSteamButton={controllerSupportFlowState?.bSteamButton}
					highlightQuickAccessButton={
						controllerSupportFlowState?.bQuickAccessButton
					}
					highlightLeftStick={controllerSupportFlowState?.bLeftStick}
					highlightRightStick={controllerSupportFlowState?.bRightStick}
					highlightLeftTrackpad={controllerSupportFlowState?.bLeftTrackpad}
					highlightRightTrackpad={controllerSupportFlowState?.bRightTrackpad}
					highlightDPad={
						controllerSupportFlowState?.bDPadUp &&
						controllerSupportFlowState?.bDPadDown &&
						controllerSupportFlowState?.bDPadLeft &&
						controllerSupportFlowState?.bDPadRight
					}
					highlightAButton={controllerSupportFlowState?.bButtonSouth}
					highlightBButton={controllerSupportFlowState?.bButtonEast}
					highlightXButton={controllerSupportFlowState?.bButtonWest}
					highlightYButton={controllerSupportFlowState?.bButtonNorth}
					highlightL1Button={controllerSupportFlowState?.bLeftBumper}
					highlightL2Trigger={controllerSupportFlowState?.bLeftTrigger}
					highlightR1Button={controllerSupportFlowState?.bRightBumper}
					highlightR2Trigger={controllerSupportFlowState?.bRightTrigger}
					highlightL4Grip={controllerSupportFlowState?.bL4}
					highlightL5Grip={controllerSupportFlowState?.bL5}
					highlightR4Grip={controllerSupportFlowState?.bR4}
					highlightR5Grip={controllerSupportFlowState?.bR5}
					touchpadLeftTouchX={g}
					touchpadLeftTouchY={h}
					touchpadRightTouchX={C}
					touchpadRightTouchY={_}
					leftJoystickX={l}
					leftJoystickY={m}
					rightJoystickX={u}
					rightJoystickY={d}
					leftStickTouch={controllerSupportFlowState?.bLeftStickTouch}
					rightStickTouch={controllerSupportFlowState?.bRightStickTouch}
					highlightDPadUp={controllerSupportFlowState?.bDPadUp}
					highlightDPadDown={controllerSupportFlowState?.bDPadDown}
					highlightDPadLeft={controllerSupportFlowState?.bDPadLeft}
					highlightDPadRight={controllerSupportFlowState?.bDPadRight}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
		if (controller?.eControllerType == 31) {
			return (
				<c.Xbox360ControllerFrontOutline
					className={a.ControllerOutline}
					highlightLeftBumper={controllerSupportFlowState?.bLeftBumper}
					highlightRightBumper={controllerSupportFlowState?.bRightBumper}
					highlightLeftStick={controllerSupportFlowState?.bLeftStick}
					highlightRightStick={controllerSupportFlowState?.bRightStick}
					leftJoystickX={l}
					leftJoystickY={m}
					rightJoystickX={u}
					rightJoystickY={d}
					highlightSelect={controllerSupportFlowState?.bViewButton}
					highlightStart={controllerSupportFlowState?.bOptionsButton}
					highlightGuide={controllerSupportFlowState?.bSteamButton}
					highlightSouth={controllerSupportFlowState?.bButtonSouth}
					highlightEast={controllerSupportFlowState?.bButtonEast}
					highlightWest={controllerSupportFlowState?.bButtonWest}
					highlightNorth={controllerSupportFlowState?.bButtonNorth}
					highlightDPadUp={controllerSupportFlowState?.bDPadUp}
					highlightDPadDown={controllerSupportFlowState?.bDPadDown}
					highlightDPadLeft={controllerSupportFlowState?.bDPadLeft}
					highlightDPadRight={controllerSupportFlowState?.bDPadRight}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
		if (
			controller?.eControllerType == 32 ||
			controller?.eControllerType == 46
		) {
			return (
				<c.XboxOneControllerFrontOutline
					className={a.ControllerOutline}
					hasCaptureButton={controllerSupportFlowState?.bHasCaptureButton}
					highlightLeftBumper={controllerSupportFlowState?.bLeftBumper}
					highlightRightBumper={controllerSupportFlowState?.bRightBumper}
					highlightLeftStick={controllerSupportFlowState?.bLeftStick}
					highlightRightStick={controllerSupportFlowState?.bRightStick}
					leftJoystickX={l}
					leftJoystickY={m}
					rightJoystickX={u}
					rightJoystickY={d}
					highlightSelect={controllerSupportFlowState?.bViewButton}
					highlightStart={controllerSupportFlowState?.bOptionsButton}
					highlightGuide={controllerSupportFlowState?.bSteamButton}
					highlightCapture={controllerSupportFlowState?.bCaptureButton}
					highlightSouth={controllerSupportFlowState?.bButtonSouth}
					highlightEast={controllerSupportFlowState?.bButtonEast}
					highlightWest={controllerSupportFlowState?.bButtonWest}
					highlightNorth={controllerSupportFlowState?.bButtonNorth}
					highlightDPadUp={controllerSupportFlowState?.bDPadUp}
					highlightDPadDown={controllerSupportFlowState?.bDPadDown}
					highlightDPadLeft={controllerSupportFlowState?.bDPadLeft}
					highlightDPadRight={controllerSupportFlowState?.bDPadRight}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
		if (controller?.eControllerType == 33) {
			return (
				<c.PS3ControllerFrontOutline
					className={a.ControllerOutline}
					highlightLeftBumper={controllerSupportFlowState?.bLeftBumper}
					highlightRightBumper={controllerSupportFlowState?.bRightBumper}
					leftJoystickX={l}
					leftJoystickY={m}
					rightJoystickX={u}
					rightJoystickY={d}
					highlightSelect={controllerSupportFlowState?.bViewButton}
					highlightStart={controllerSupportFlowState?.bOptionsButton}
					highlightGuide={controllerSupportFlowState?.bSteamButton}
					highlightSouth={controllerSupportFlowState?.bButtonSouth}
					highlightEast={controllerSupportFlowState?.bButtonEast}
					highlightWest={controllerSupportFlowState?.bButtonWest}
					highlightNorth={controllerSupportFlowState?.bButtonNorth}
					highlightDPadUp={controllerSupportFlowState?.bDPadUp}
					highlightDPadDown={controllerSupportFlowState?.bDPadDown}
					highlightDPadLeft={controllerSupportFlowState?.bDPadLeft}
					highlightDPadRight={controllerSupportFlowState?.bDPadRight}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
		if (controller?.eControllerType == 2) {
			return (
				<c.SteamControllerFrontOutline
					className={a.ControllerOutline}
					highlightLeftBumper={controllerSupportFlowState?.bLeftBumper}
					highlightRightBumper={controllerSupportFlowState?.bRightBumper}
					highlightLeftStick={controllerSupportFlowState?.bLeftStick}
					highlightRightStick={controllerSupportFlowState?.bRightStick}
					leftJoystickX={l}
					leftJoystickY={m}
					rightJoystickX={u}
					rightJoystickY={d}
					highlightSelect={controllerSupportFlowState?.bViewButton}
					highlightStart={controllerSupportFlowState?.bOptionsButton}
					highlightGuide={controllerSupportFlowState?.bSteamButton}
					highlightSouth={controllerSupportFlowState?.bButtonSouth}
					highlightEast={controllerSupportFlowState?.bButtonEast}
					highlightWest={controllerSupportFlowState?.bButtonWest}
					highlightNorth={controllerSupportFlowState?.bButtonNorth}
					highlightDPadUp={controllerSupportFlowState?.bDPadUp}
					highlightDPadDown={controllerSupportFlowState?.bDPadDown}
					highlightDPadLeft={controllerSupportFlowState?.bDPadLeft}
					highlightDPadRight={controllerSupportFlowState?.bDPadRight}
					highlightTouchpad={controllerSupportFlowState?.bCenterTrackpad}
					touchpadLeftTouchX={g}
					touchpadLeftTouchY={h}
					touchpadRightTouchX={C}
					touchpadRightTouchY={_}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
		if (
			controller?.eControllerType == 34 ||
			controller?.eControllerType == 47
		) {
			return (
				<c.PS4ControllerFrontOutline
					className={a.ControllerOutline}
					highlightLeftBumper={controllerSupportFlowState?.bLeftBumper}
					highlightRightBumper={controllerSupportFlowState?.bRightBumper}
					highlightLeftStick={controllerSupportFlowState?.bLeftStick}
					highlightRightStick={controllerSupportFlowState?.bRightStick}
					leftJoystickX={l}
					leftJoystickY={m}
					rightJoystickX={u}
					rightJoystickY={d}
					highlightSelect={controllerSupportFlowState?.bViewButton}
					highlightStart={controllerSupportFlowState?.bOptionsButton}
					highlightGuide={controllerSupportFlowState?.bSteamButton}
					highlightSouth={controllerSupportFlowState?.bButtonSouth}
					highlightEast={controllerSupportFlowState?.bButtonEast}
					highlightWest={controllerSupportFlowState?.bButtonWest}
					highlightNorth={controllerSupportFlowState?.bButtonNorth}
					highlightDPadUp={controllerSupportFlowState?.bDPadUp}
					highlightDPadDown={controllerSupportFlowState?.bDPadDown}
					highlightDPadLeft={controllerSupportFlowState?.bDPadLeft}
					highlightDPadRight={controllerSupportFlowState?.bDPadRight}
					highlightTouchpad={controllerSupportFlowState?.bCenterTrackpad}
					touchpadCenterTouchX={
						controllerSupportFlowState?.bCenterTrackpadTouch ? A : undefined
					}
					touchpadCenterTouchY={
						controllerSupportFlowState?.bCenterTrackpadTouch ? p : undefined
					}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
		if (
			controller?.eControllerType == 45 ||
			controller?.eControllerType == 48
		) {
			return (
				<c.PS5ControllerFrontOutline
					className={a.ControllerOutline}
					highlightLeftBumper={controllerSupportFlowState?.bLeftBumper}
					highlightRightBumper={controllerSupportFlowState?.bRightBumper}
					highlightLeftStick={controllerSupportFlowState?.bLeftStick}
					highlightRightStick={controllerSupportFlowState?.bRightStick}
					leftJoystickX={l}
					leftJoystickY={m}
					rightJoystickX={u}
					rightJoystickY={d}
					highlightSelect={controllerSupportFlowState?.bViewButton}
					highlightStart={controllerSupportFlowState?.bOptionsButton}
					highlightGuide={controllerSupportFlowState?.bSteamButton}
					highlightCapture={controllerSupportFlowState?.bCaptureButton}
					highlightSouth={controllerSupportFlowState?.bButtonSouth}
					highlightEast={controllerSupportFlowState?.bButtonEast}
					highlightWest={controllerSupportFlowState?.bButtonWest}
					highlightNorth={controllerSupportFlowState?.bButtonNorth}
					highlightDPadUp={controllerSupportFlowState?.bDPadUp}
					highlightDPadDown={controllerSupportFlowState?.bDPadDown}
					highlightDPadLeft={controllerSupportFlowState?.bDPadLeft}
					highlightDPadRight={controllerSupportFlowState?.bDPadRight}
					highlightTouchpad={controllerSupportFlowState?.bCenterTrackpad}
					touchpadCenterTouchX={
						controllerSupportFlowState?.bCenterTrackpadTouch ? A : undefined
					}
					touchpadCenterTouchY={
						controllerSupportFlowState?.bCenterTrackpadTouch ? p : undefined
					}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
		if (
			controller?.eControllerType == 38 ||
			controller?.eControllerType == 42 ||
			controller?.eControllerType == 42 ||
			controller?.eControllerType == 44
		) {
			return (
				<c.NintendoSwitchProControllerFrontOutline
					className={a.ControllerOutline}
					highlightLeftBumper={controllerSupportFlowState?.bLeftBumper}
					highlightRightBumper={controllerSupportFlowState?.bRightBumper}
					highlightLeftStick={controllerSupportFlowState?.bLeftStick}
					highlightRightStick={controllerSupportFlowState?.bRightStick}
					leftJoystickX={l}
					leftJoystickY={m}
					rightJoystickX={u}
					rightJoystickY={d}
					highlightSelect={controllerSupportFlowState?.bViewButton}
					highlightStart={controllerSupportFlowState?.bOptionsButton}
					highlightGuide={controllerSupportFlowState?.bSteamButton}
					highlightCapture={controllerSupportFlowState?.bCaptureButton}
					highlightSouth={controllerSupportFlowState?.bButtonSouth}
					highlightEast={controllerSupportFlowState?.bButtonEast}
					highlightWest={controllerSupportFlowState?.bButtonWest}
					highlightNorth={controllerSupportFlowState?.bButtonNorth}
					highlightDPadUp={controllerSupportFlowState?.bDPadUp}
					highlightDPadDown={controllerSupportFlowState?.bDPadDown}
					highlightDPadLeft={controllerSupportFlowState?.bDPadLeft}
					highlightDPadRight={controllerSupportFlowState?.bDPadRight}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
		if (controller?.eControllerType == 39) {
			return (
				<c.NintendoJoyConLFrontOutline
					className={a.ControllerOutline}
					highlightLeftBumper={controllerSupportFlowState?.bLeftBumper}
					highlightRightBumper={controllerSupportFlowState?.bRightBumper}
					highlightLeftStick={controllerSupportFlowState?.bLeftStick}
					leftJoystickX={l}
					leftJoystickY={m}
					highlightStart={controllerSupportFlowState?.bOptionsButton}
					highlightGuide={controllerSupportFlowState?.bSteamButton}
					highlightSouth={controllerSupportFlowState?.bButtonSouth}
					highlightEast={controllerSupportFlowState?.bButtonEast}
					highlightWest={controllerSupportFlowState?.bButtonWest}
					highlightNorth={controllerSupportFlowState?.bButtonNorth}
					highlightL4Grip={controllerSupportFlowState?.bL4}
					highlightL5Grip={controllerSupportFlowState?.bL5}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
		if (controller?.eControllerType == 40) {
			return (
				<c.NintendoJoyConRFrontOutline
					className={a.ControllerOutline}
					highlightLeftBumper={controllerSupportFlowState?.bLeftBumper}
					highlightRightBumper={controllerSupportFlowState?.bRightBumper}
					highlightLeftStick={controllerSupportFlowState?.bLeftStick}
					leftJoystickX={l}
					leftJoystickY={m}
					highlightStart={controllerSupportFlowState?.bOptionsButton}
					highlightGuide={controllerSupportFlowState?.bSteamButton}
					highlightSouth={controllerSupportFlowState?.bButtonSouth}
					highlightEast={controllerSupportFlowState?.bButtonEast}
					highlightWest={controllerSupportFlowState?.bButtonWest}
					highlightNorth={controllerSupportFlowState?.bButtonNorth}
					highlightR4Grip={controllerSupportFlowState?.bR4}
					highlightR5Grip={controllerSupportFlowState?.bR5}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
		if (controller?.eControllerType == 41) {
			return (
				<c.NintendoJoyConPairFrontOutline
					className={a.ControllerOutline}
					highlightLeftBumper={controllerSupportFlowState?.bLeftBumper}
					highlightRightBumper={controllerSupportFlowState?.bRightBumper}
					highlightLeftStick={controllerSupportFlowState?.bLeftStick}
					highlightRightStick={controllerSupportFlowState?.bRightStick}
					leftJoystickX={l}
					leftJoystickY={m}
					rightJoystickX={u}
					rightJoystickY={d}
					highlightSelect={controllerSupportFlowState?.bViewButton}
					highlightStart={controllerSupportFlowState?.bOptionsButton}
					highlightGuide={controllerSupportFlowState?.bSteamButton}
					highlightCapture={controllerSupportFlowState?.bCaptureButton}
					highlightSouth={controllerSupportFlowState?.bButtonSouth}
					highlightEast={controllerSupportFlowState?.bButtonEast}
					highlightWest={controllerSupportFlowState?.bButtonWest}
					highlightNorth={controllerSupportFlowState?.bButtonNorth}
					highlightDPadUp={controllerSupportFlowState?.bDPadUp}
					highlightDPadDown={controllerSupportFlowState?.bDPadDown}
					highlightDPadLeft={controllerSupportFlowState?.bDPadLeft}
					highlightDPadRight={controllerSupportFlowState?.bDPadRight}
					highlightL4Grip={controllerSupportFlowState?.bL4}
					highlightL5Grip={controllerSupportFlowState?.bL5}
					highlightR4Grip={controllerSupportFlowState?.bR4}
					highlightR5Grip={controllerSupportFlowState?.bR5}
					clickHandlers={e.diegeticButtonPressHandlers}
				/>
			);
		}
	}
	return (
		<c.GenericGamepadFrontOutline
			className={a.ControllerOutline}
			highlightLeftBumper={
				controllerSupportFlowState?.bLeftBumper ||
				controllerSupportFlowState?.currentTestStep == 20
			}
			highlightRightBumper={
				controllerSupportFlowState?.bRightBumper ||
				controllerSupportFlowState?.currentTestStep == 22
			}
			highlightLeftTrigger={controllerSupportFlowState?.currentTestStep == 21}
			highlightRightTrigger={controllerSupportFlowState?.currentTestStep == 23}
			highlightLeftStick={
				controllerSupportFlowState?.bLeftStick ||
				controllerSupportFlowState?.currentTestStep == 14
			}
			highlightLeftStickUp={controllerSupportFlowState?.currentTestStep == 12}
			highlightLeftStickDown={controllerSupportFlowState?.currentTestStep == 13}
			highlightLeftStickLeft={controllerSupportFlowState?.currentTestStep == 10}
			highlightLeftStickRight={
				controllerSupportFlowState?.currentTestStep == 11
			}
			highlightRightStick={
				controllerSupportFlowState?.bRightStick ||
				controllerSupportFlowState?.currentTestStep == 19
			}
			highlightRightStickUp={controllerSupportFlowState?.currentTestStep == 17}
			highlightRightStickDown={
				controllerSupportFlowState?.currentTestStep == 18
			}
			highlightRightStickLeft={
				controllerSupportFlowState?.currentTestStep == 15
			}
			highlightRightStickRight={
				controllerSupportFlowState?.currentTestStep == 16
			}
			leftJoystickX={l}
			leftJoystickY={m}
			rightJoystickX={u}
			rightJoystickY={d}
			highlightSelect={
				controllerSupportFlowState?.bViewButton ||
				controllerSupportFlowState?.currentTestStep == 24
			}
			highlightStart={
				controllerSupportFlowState?.bOptionsButton ||
				controllerSupportFlowState?.currentTestStep == 25
			}
			highlightGuide={
				controllerSupportFlowState?.bSteamButton ||
				controllerSupportFlowState?.currentTestStep == 26
			}
			highlightCapture={
				controllerSupportFlowState?.bCaptureButton ||
				controllerSupportFlowState?.currentTestStep == 27
			}
			highlightSouth={
				controllerSupportFlowState?.bButtonSouth ||
				(controllerSupportFlowState?.currentTestStep == 2 &&
					!controllerSupportFlowState?.bHasNintendoLayout) ||
				(controllerSupportFlowState?.currentTestStep == 3 &&
					controllerSupportFlowState?.bHasNintendoLayout)
			}
			highlightEast={
				controllerSupportFlowState?.bButtonEast ||
				(controllerSupportFlowState?.currentTestStep == 3 &&
					!controllerSupportFlowState?.bHasNintendoLayout) ||
				(controllerSupportFlowState?.currentTestStep == 2 &&
					controllerSupportFlowState?.bHasNintendoLayout)
			}
			highlightWest={
				controllerSupportFlowState?.bButtonWest ||
				(controllerSupportFlowState?.currentTestStep == 4 &&
					!controllerSupportFlowState?.bHasNintendoLayout) ||
				(controllerSupportFlowState?.currentTestStep == 5 &&
					controllerSupportFlowState?.bHasNintendoLayout)
			}
			highlightNorth={
				controllerSupportFlowState?.bButtonNorth ||
				(controllerSupportFlowState?.currentTestStep == 5 &&
					!controllerSupportFlowState?.bHasNintendoLayout) ||
				(controllerSupportFlowState?.currentTestStep == 4 &&
					controllerSupportFlowState?.bHasNintendoLayout)
			}
			highlightDPadUp={
				controllerSupportFlowState?.bDPadUp ||
				controllerSupportFlowState?.currentTestStep == 8
			}
			highlightDPadDown={
				controllerSupportFlowState?.bDPadDown ||
				controllerSupportFlowState?.currentTestStep == 9
			}
			highlightDPadLeft={
				controllerSupportFlowState?.bDPadLeft ||
				controllerSupportFlowState?.currentTestStep == 6
			}
			highlightDPadRight={
				controllerSupportFlowState?.bDPadRight ||
				controllerSupportFlowState?.currentTestStep == 7
			}
			highlightTouchpad={controllerSupportFlowState?.currentTestStep == 28}
			bUseReversedLayout={controllerSupportFlowState?.bHasNintendoLayout}
			bUsePSButtons={bUsePSButtons}
			clickHandlers={e.diegeticButtonPressHandlers}
		/>
	);
}
function E(e) {
	return `0x${e.toString(16).padStart(4, "0")}`;
}
let M;
function T(e, t) {
	const r = yq();
	let c = AX();
	const d = A9();
	n.useEffect(() => {
		u.oy.DisableHomeAndQuickAccessButtons();
		l.Fd.Get().StartControllerSupportFlow(e, c);
	}, [e, c]);
	n.useEffect(
		() => () => {
			u.oy.EnableHomeAndQuickAccessButtons();
			l.Fd.Get().EndControllerSupportFlow();
		},
		[],
	);
	const [A, setA] = n.useState(false);
	n.useEffect(() => {
		if (!A) {
			if (d?.currentTestStep == 42) {
				setA(true);
				r();
			}
		}
	}, [d, r, A, setA]);
	if (d?.eFlow != null) {
		e = d.eFlow;
	}
	if (d?.controllerIdx != null) {
		c = d.controllerIdx;
	}
	const h = as(c);
	let _ = "";
	if (e == 2) {
		let e = "";
		if (h?.strSerialNumber) {
			e = `${h.strSerialNumber} `;
		}
		e += `(${E(h?.unVendorID ?? 0)},${E(h?.unProductID ?? 0)})`;
		_ = (0, Localize)("#Settings_ControllerDeviceSupport_Title", e);
	}
	Wh(_, "ControllerDeviceSupport");
	const b = e == 2 && ((h?.unCapabilities ?? 0) & 16384) != 0;
	const y =
		e == 2 &&
		((h?.unCapabilities ?? 0) & 1048576) != 0 &&
		h?.eControllerType != 49;
	const [T, setT] = n.useState(false);
	if (h) {
		const e =
			h.eControllerType == 33 ||
			h.eControllerType == 34 ||
			h.eControllerType == 34 ||
			h.eControllerType == 47 ||
			h.eControllerType == 34 ||
			h.eControllerType == 47 ||
			h.eControllerType == 45 ||
			h.eControllerType == 34 ||
			h.eControllerType == 47 ||
			h.eControllerType == 45 ||
			h.eControllerType == 48;
		if (e != T) {
			setT(e);
		}
	}
	const k =
		h?.eControllerType == 4 ||
		h?.eControllerType == 49 ||
		h?.eControllerType == 49 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 49 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 39 ||
		h?.eControllerType == 49 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 39 ||
		h?.eControllerType == 40;
	const D =
		h?.eControllerType == 4 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 40;
	const N =
		h?.eControllerType == 4 ||
		h?.eControllerType == 49 ||
		h?.eControllerType == 49 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 49 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 40 ||
		h?.eControllerType == 49 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 40 ||
		h?.eControllerType == 39;
	const F =
		h?.eControllerType == 4 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 39;
	const [G, setG] = n.useState(M.k_ShowGripButtons_None);
	if (h) {
		let M_k_ShowGripButtons_None = M.k_ShowGripButtons_None;
		if ((h.unCapabilities & 4194304) != 0) {
			if (!k) {
				M_k_ShowGripButtons_None |= M.k_ShowGripButtons_LeftUpper;
			}
			if (!N) {
				M_k_ShowGripButtons_None |= M.k_ShowGripButtons_RightUpper;
			}
		}
		if ((h.unCapabilities & 1024) != 0) {
			if (!D) {
				M_k_ShowGripButtons_None |= M.k_ShowGripButtons_LeftLower;
			}
			if (!F) {
				M_k_ShowGripButtons_None |= M.k_ShowGripButtons_RightLower;
			}
		}
		if (M_k_ShowGripButtons_None != G) {
			setG(M_k_ShowGripButtons_None);
		}
	}
	const P = d?.currentTestStep ?? 0;
	let S_P = S[P];
	if (T && P >= 2 && P < 29) {
		S_P += "_PS";
	}
	let z = "";
	const x = h?.strName;
	const U = x?.startsWith("#");
	const W = (0, Localize)(x);
	z = U && W !== x ? W : x;
	const V = h?.eControllerType == 49;
	return (
		<W>
			<div className={A_1(a.ControllerName, V && a.LargerImg)}> {z} </div>
			{BB({
				eFlow: e,
				controller: h,
				controllerSupportFlowState: d,
				bUsePSButtons: T,
			})}
			<div className={a.TestStepLabel}> {(0, Localize)(S_P)} </div>
			<div className={a.CenteredRow}>
				{b && (
					<i.xh
						onClick={() => {
							SteamClient.Input.IdentifyController(c);
						}}
						bottomSeparator="none"
					>
						{(0, Localize)("#Settings_Controller_TestRumble")}
					</i.xh>
				)}
				{y && (
					<i.xh
						onClick={async () => {
							let e = await l.Fd.Get().GetControllerMappingString(c);
							CopyTextToClipboard(e);
						}}
						bottomSeparator="none"
					>
						{(0, Localize)("#Settings_Controller_CopyToClipboard")}
					</i.xh>
				)}
				{e == 1 && (
					<i.xh
						onClick={async (e) => {
							let t = await (0, ew)(GetOwningWindowForElement(e.currentTarget));
							l.Fd.Get().SetControllerMappingString(t);
						}}
						bottomSeparator="none"
					>
						{(0, Localize)("#Settings_Controller_PasteFromClipboard")}
					</i.xh>
				)}
				{y && (
					<i.xh
						onClick={() => {
							l.Fd.Get().ResetControllerBindings(c);
						}}
						bottomSeparator="none"
					>
						{(0, Localize)("#Settings_Controller_ResetInput")}
					</i.xh>
				)}
				{y && (
					<i.xh
						onClick={() => {
							l.Fd.Get().ChangeControllerSupportFlow(1, c);
						}}
						bottomSeparator="none"
					>
						{(0, Localize)("#Settings_Controller_BindInput")}
					</i.xh>
				)}
				{e == 1 && (
					<i.xh
						onClick={() => {
							if (c < 0) {
								setA(true);
								r();
							} else {
								l.Fd.Get().ChangeControllerSupportFlow(2, c);
							}
						}}
						bottomSeparator="none"
					>
						{(0, Localize)("#Settings_Controller_CancelBindInput")}
					</i.xh>
				)}
			</div>
			<div className={a.Row}>
				<B
					showUpperGrips={(G & M.k_ShowGripButtons_LeftUpper) != 0}
					showLowerGrips={(G & M.k_ShowGripButtons_LeftLower) != 0}
				/>
				<V
					showUpperGrips={(G & M.k_ShowGripButtons_RightUpper) != 0}
					showLowerGrips={(G & M.k_ShowGripButtons_RightLower) != 0}
				/>
			</div>
		</W>
	);
}
export function Hg(e) {
	const t = oH();
	n.useEffect(
		() => () => {
			if (t.mode == _._5.ControllerConfigurator) {
				SteamClient.Overlay.DestroyGamePadUIDesktopConfiguratorWindow();
			}
		},
		[t],
	);
	return T(1);
}
export function cs(e) {
	const t = oH();
	n.useEffect(
		() => () => {
			if (t.mode == _._5.ControllerConfigurator) {
				SteamClient.Overlay.DestroyGamePadUIDesktopConfiguratorWindow();
			}
		},
		[t],
	);
	return T(2);
}
((e) => {
	e[(e.k_ShowGripButtons_None = 0)] = "k_ShowGripButtons_None";
	e[(e.k_ShowGripButtons_LeftUpper = 1)] = "k_ShowGripButtons_LeftUpper";
	e[(e.k_ShowGripButtons_LeftLower = 2)] = "k_ShowGripButtons_LeftLower";
	e[(e.k_ShowGripButtons_RightUpper = 4)] = "k_ShowGripButtons_RightUpper";
	e[(e.k_ShowGripButtons_RightLower = 8)] = "k_ShowGripButtons_RightLower";
	e[(e.k_ShowGripButtons_All = 15)] = "k_ShowGripButtons_All";
})((M ||= {}));
