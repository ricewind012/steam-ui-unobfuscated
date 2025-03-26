var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./35906.js");
var s = require(/*webcrack:missing*/ "./90765.js");
import { Localize } from "../../actual_src/utils/localization.js";
var l = require("./22091.js");
var c = require("./35488.js");
var m = require("./31800.js");
var u = require("./46422.js");
var d = require(/*webcrack:missing*/ "./69164.js");
var A = require(/*webcrack:missing*/ "./61657.js");
var p = require("./18057.js");
var g = require("./50350.js");
var h = require("./62486.js");
var C = require("./93966.js");
var _ = require("./33572.js");
import {
	CopyTextToClipboard,
	ew,
	GetOwningWindowForElement,
} from "../../actual_src/utils/domutils.js";
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
function w(e) {
	n.useEffect(() => {
		u.oy.DisableHomeAndQuickAccessButtons();
		return () => {
			u.oy.EnableHomeAndQuickAccessButtons();
		};
	}, []);
	const t = (0, C.yq)();
	const r = n.useRef(null);
	const i = () => {
		if (b) {
			console.log("Cancelling Device Support Flow - Long B Press");
		}
		t();
	};
	n.useEffect(
		() => () => {
			if (r.current) {
				window.clearTimeout(r.current);
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
	return n.createElement(
		g.Jr,
		null,
		n.createElement(
			d.Z,
			{
				className: a.Container,
				focusable: true,
				autoFocus: true,
				noFocusRing: true,
				onButtonDown: (e) => {
					if (e.detail.button == A.pR.CANCEL) {
						if (e.detail.source == A.Vz.GAMEPAD) {
							r.current = window.setTimeout(i, y);
						} else {
							t();
						}
					}
					e.preventDefault();
					e.stopPropagation();
				},
				onButtonUp: (e) => {
					if (e.detail.button == A.pR.CANCEL && r.current) {
						window.clearTimeout(r.current);
						r.current = null;
					}
					e.preventDefault();
					e.stopPropagation();
				},
				onCancelButton: () => {
					if (b) {
						console.log("swallowed cancel button ");
					}
				},
				onCancelActionDescription: (0, Localize)(
					"#Settings_ControllerDeviceSupport_HoldBToExit",
				),
				onMoveDown: s,
				onMoveUp: s,
				onMoveLeft: s,
				onMoveRight: s,
				onOKActionDescription: null,
			},
			e.children,
		),
	);
}
function B(e) {
	const t = (0, l.A9)();
	const r = l.Fd.Get().GetController(t?.controllerIdx);
	let s = r?.nLStickDeadzone;
	s = s < 0 ? (0, h.ui)(r?.eControllerType, r?.unVendorID, r?.unProductID) : s;
	const c = Math.sqrt(
		t?.LeftJoystickX * t?.LeftJoystickX + t?.LeftJoystickY * t?.LeftJoystickY,
	);
	const m = c >= s ? t?.LeftJoystickX : 0;
	const u = c >= s ? t?.LeftJoystickY : 0;
	const d = t?.LeftTrigger > 100 ? t?.LeftTrigger : 0;
	const A = l.Fd.Get().GetController(t?.controllerIdx)?.eControllerType == 49;
	return n.createElement(
		"div",
		{
			className: a.InfoColumn,
		},
		n.createElement(
			i.G5,
			null,
			t?.LeftTrigger != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						label: (0, Localize)(
							"#Settings_ControllerDeviceSupport_LeftTrigger",
						),
					},
					String(d),
				),
			t?.LeftTrackpadX != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						label: (0, Localize)(
							"#Settings_ControllerDeviceSupport_LeftTrackpad",
						),
					},
					String(t?.LeftTrackpadX) + ", " + String(t?.LeftTrackpadY),
				),
			t?.LeftTrackpadPressure != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						label: (0, Localize)(
							"#Settings_ControllerDeviceSupport_LeftTrackpad_Pressure",
						),
					},
					String(t?.LeftTrackpadPressure),
				),
			t?.LeftJoystickX != null &&
				t?.LeftJoystickY != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						bottomSeparator: "none",
						label: (0, Localize)(
							"#Settings_ControllerDeviceSupport_LeftJoystick",
						),
					},
					String(m) + ", " + String(u),
				),
			e.showUpperGrips &&
				t?.bL4 != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						bottomSeparator: "none",
						label: (0, Localize)("#Settings_ControllerDeviceSupport_L4"),
					},
					String(t.bL4),
				),
			e.showLowerGrips &&
				t?.bL5 != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						bottomSeparator: "none",
						label: (0, Localize)(
							A
								? "#Settings_ControllerDeviceSupport_L4"
								: "#Settings_ControllerDeviceSupport_L5",
						),
					},
					String(t.bL5),
				),
		),
	);
}
function v(e) {
	const t = (0, l.A9)();
	const r = l.Fd.Get().GetController(t?.controllerIdx);
	let s = r?.nRStickDeadzone;
	s = s < 0 ? (0, h.ui)(r?.eControllerType, r?.unVendorID, r?.unProductID) : s;
	const c = Math.sqrt(
		t?.RightJoystickX * t?.RightJoystickX +
			t?.RightJoystickY * t?.RightJoystickY,
	);
	const m = c >= s ? t?.RightJoystickX : 0;
	const u = c >= s ? t?.RightJoystickY : 0;
	const d = t?.RightTrigger > 100 ? t?.RightTrigger : 0;
	const A = (r?.unCapabilities & 8) != 0;
	const p = l.Fd.Get().GetController(t?.controllerIdx)?.eControllerType == 49;
	return n.createElement(
		"div",
		{
			className: a.InfoColumn,
		},
		n.createElement(
			i.G5,
			null,
			t?.RightTrigger != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						label: (0, Localize)(
							"#Settings_ControllerDeviceSupport_RightTrigger",
						),
					},
					String(d),
				),
			t?.RightTrackpadX != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						label: (0, Localize)(
							"#Settings_ControllerDeviceSupport_RightTrackpad",
						),
					},
					String(t?.RightTrackpadX) + ", " + String(t?.RightTrackpadY),
				),
			t?.RightTrackpadPressure != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						label: (0, Localize)(
							"#Settings_ControllerDeviceSupport_RightTrackpad_Pressure",
						),
					},
					String(t?.RightTrackpadPressure),
				),
			A &&
				t?.RightJoystickX != null &&
				t?.RightJoystickY != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						bottomSeparator: "none",
						label: (0, Localize)(
							"#Settings_ControllerDeviceSupport_RightJoystick",
						),
					},
					String(m) + ", " + String(u),
				),
			e.showUpperGrips &&
				t?.bR4 != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						bottomSeparator: "none",
						label: (0, Localize)("#Settings_ControllerDeviceSupport_R4"),
					},
					String(t.bR4),
				),
			e.showLowerGrips &&
				t?.bR5 != null &&
				n.createElement(
					i.Nv,
					{
						padding: "compact",
						focusable: false,
						bottomSeparator: "none",
						label: (0, Localize)(
							p
								? "#Settings_ControllerDeviceSupport_R4"
								: "#Settings_ControllerDeviceSupport_R5",
						),
					},
					String(t.bR5),
				),
		),
	);
}
export function BB(e) {
	const {
		eFlow: t,
		controller: r,
		controllerSupportFlowState: i,
		bUsePSButtons: o,
	} = e;
	let l = 0;
	let m = 0;
	if (i?.LeftJoystickX != null && i?.LeftJoystickY != null) {
		l = i.LeftJoystickX / 32768;
		m = i.LeftJoystickY / 32768;
		m = -m;
		let e = Math.sqrt(l * l + m * m);
		if (e > 1) {
			l /= e;
			m /= e;
		}
	}
	let u = 0;
	let d = 0;
	if (i?.RightJoystickX != null && i?.RightJoystickY != null) {
		u = i.RightJoystickX / 32768;
		d = i.RightJoystickY / 32768;
		d = -d;
		let e = Math.sqrt(u * u + d * d);
		if (e > 1) {
			u /= e;
			d /= e;
		}
	}
	let A = 0;
	let p = 0;
	if (i?.CenterTrackpadX != null && i?.CenterTrackpadY != null) {
		A = i.CenterTrackpadX / 32768;
		p = i.CenterTrackpadY / 32768;
		p = -p;
	}
	let g = 0;
	let h = 0;
	if (i?.LeftTrackpadX != null && i?.LeftTrackpadY != null) {
		g = i.LeftTrackpadX / 32768;
		h = i.LeftTrackpadY / 32768;
		h = -h;
	}
	let C = 0;
	let _ = 0;
	if (i?.RightTrackpadX != null && i?.RightTrackpadY != null) {
		C = i.RightTrackpadX / 32768;
		_ = i.RightTrackpadY / 32768;
		_ = -_;
	}
	if (t == 2) {
		if (r?.eControllerType == 4) {
			return n.createElement(c.SteamDeckTiltedOutline, {
				className: a.ControllerOutline,
				highlightViewButton: i?.bViewButton,
				highlightOptionsButton: i?.bOptionsButton,
				highlightSteamButton: i?.bSteamButton,
				highlightQuickAccessButton: i?.bQuickAccessButton,
				highlightLeftStick: i?.bLeftStick,
				highlightRightStick: i?.bRightStick,
				highlightLeftTrackpad: i?.bLeftTrackpad,
				highlightRightTrackpad: i?.bRightTrackpad,
				highlightDPad:
					i?.bDPadUp && i?.bDPadDown && i?.bDPadLeft && i?.bDPadRight,
				highlightAButton: i?.bButtonSouth,
				highlightBButton: i?.bButtonEast,
				highlightXButton: i?.bButtonWest,
				highlightYButton: i?.bButtonNorth,
				highlightL1Button: i?.bLeftBumper,
				highlightL2Trigger: i?.bLeftTrigger,
				highlightR1Button: i?.bRightBumper,
				highlightR2Trigger: i?.bRightTrigger,
				highlightL4Grip: i?.bL4,
				highlightL5Grip: i?.bL5,
				highlightR4Grip: i?.bR4,
				highlightR5Grip: i?.bR5,
				touchpadLeftTouchX: g,
				touchpadLeftTouchY: h,
				touchpadRightTouchX: C,
				touchpadRightTouchY: _,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
		if (r?.eControllerType == 49) {
			return n.createElement(c.HoriControllerSupportImage, {
				className: (0, s.A)(a.ControllerOutline, a.LargerImg),
				highlightViewButton: i?.bViewButton,
				highlightOptionsButton: i?.bOptionsButton,
				highlightSteamButton: i?.bSteamButton,
				highlightQuickAccessButton: i?.bQuickAccessButton,
				highlightLeftStick: i?.bLeftStick,
				highlightRightStick: i?.bRightStick,
				highlightLeftTrackpad: i?.bLeftTrackpad,
				highlightRightTrackpad: i?.bRightTrackpad,
				highlightDPad:
					i?.bDPadUp && i?.bDPadDown && i?.bDPadLeft && i?.bDPadRight,
				highlightAButton: i?.bButtonSouth,
				highlightBButton: i?.bButtonEast,
				highlightXButton: i?.bButtonWest,
				highlightYButton: i?.bButtonNorth,
				highlightL1Button: i?.bLeftBumper,
				highlightL2Trigger: i?.bLeftTrigger,
				highlightR1Button: i?.bRightBumper,
				highlightR2Trigger: i?.bRightTrigger,
				highlightL4Grip: i?.bL4,
				highlightL5Grip: i?.bL5,
				highlightR4Grip: i?.bR4,
				highlightR5Grip: i?.bR5,
				touchpadLeftTouchX: g,
				touchpadLeftTouchY: h,
				touchpadRightTouchX: C,
				touchpadRightTouchY: _,
				leftJoystickX: l,
				leftJoystickY: m,
				rightJoystickX: u,
				rightJoystickY: d,
				leftStickTouch: i?.bLeftStickTouch,
				rightStickTouch: i?.bRightStickTouch,
				highlightDPadUp: i?.bDPadUp,
				highlightDPadDown: i?.bDPadDown,
				highlightDPadLeft: i?.bDPadLeft,
				highlightDPadRight: i?.bDPadRight,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
		if (r?.eControllerType == 31) {
			return n.createElement(c.Xbox360ControllerFrontOutline, {
				className: a.ControllerOutline,
				highlightLeftBumper: i?.bLeftBumper,
				highlightRightBumper: i?.bRightBumper,
				highlightLeftStick: i?.bLeftStick,
				highlightRightStick: i?.bRightStick,
				leftJoystickX: l,
				leftJoystickY: m,
				rightJoystickX: u,
				rightJoystickY: d,
				highlightSelect: i?.bViewButton,
				highlightStart: i?.bOptionsButton,
				highlightGuide: i?.bSteamButton,
				highlightSouth: i?.bButtonSouth,
				highlightEast: i?.bButtonEast,
				highlightWest: i?.bButtonWest,
				highlightNorth: i?.bButtonNorth,
				highlightDPadUp: i?.bDPadUp,
				highlightDPadDown: i?.bDPadDown,
				highlightDPadLeft: i?.bDPadLeft,
				highlightDPadRight: i?.bDPadRight,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
		if (r?.eControllerType == 32 || r?.eControllerType == 46) {
			return n.createElement(c.XboxOneControllerFrontOutline, {
				className: a.ControllerOutline,
				hasCaptureButton: i?.bHasCaptureButton,
				highlightLeftBumper: i?.bLeftBumper,
				highlightRightBumper: i?.bRightBumper,
				highlightLeftStick: i?.bLeftStick,
				highlightRightStick: i?.bRightStick,
				leftJoystickX: l,
				leftJoystickY: m,
				rightJoystickX: u,
				rightJoystickY: d,
				highlightSelect: i?.bViewButton,
				highlightStart: i?.bOptionsButton,
				highlightGuide: i?.bSteamButton,
				highlightCapture: i?.bCaptureButton,
				highlightSouth: i?.bButtonSouth,
				highlightEast: i?.bButtonEast,
				highlightWest: i?.bButtonWest,
				highlightNorth: i?.bButtonNorth,
				highlightDPadUp: i?.bDPadUp,
				highlightDPadDown: i?.bDPadDown,
				highlightDPadLeft: i?.bDPadLeft,
				highlightDPadRight: i?.bDPadRight,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
		if (r?.eControllerType == 33) {
			return n.createElement(c.PS3ControllerFrontOutline, {
				className: a.ControllerOutline,
				highlightLeftBumper: i?.bLeftBumper,
				highlightRightBumper: i?.bRightBumper,
				leftJoystickX: l,
				leftJoystickY: m,
				rightJoystickX: u,
				rightJoystickY: d,
				highlightSelect: i?.bViewButton,
				highlightStart: i?.bOptionsButton,
				highlightGuide: i?.bSteamButton,
				highlightSouth: i?.bButtonSouth,
				highlightEast: i?.bButtonEast,
				highlightWest: i?.bButtonWest,
				highlightNorth: i?.bButtonNorth,
				highlightDPadUp: i?.bDPadUp,
				highlightDPadDown: i?.bDPadDown,
				highlightDPadLeft: i?.bDPadLeft,
				highlightDPadRight: i?.bDPadRight,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
		if (r?.eControllerType == 2) {
			return n.createElement(c.SteamControllerFrontOutline, {
				className: a.ControllerOutline,
				highlightLeftBumper: i?.bLeftBumper,
				highlightRightBumper: i?.bRightBumper,
				highlightLeftStick: i?.bLeftStick,
				highlightRightStick: i?.bRightStick,
				leftJoystickX: l,
				leftJoystickY: m,
				rightJoystickX: u,
				rightJoystickY: d,
				highlightSelect: i?.bViewButton,
				highlightStart: i?.bOptionsButton,
				highlightGuide: i?.bSteamButton,
				highlightSouth: i?.bButtonSouth,
				highlightEast: i?.bButtonEast,
				highlightWest: i?.bButtonWest,
				highlightNorth: i?.bButtonNorth,
				highlightDPadUp: i?.bDPadUp,
				highlightDPadDown: i?.bDPadDown,
				highlightDPadLeft: i?.bDPadLeft,
				highlightDPadRight: i?.bDPadRight,
				highlightTouchpad: i?.bCenterTrackpad,
				touchpadLeftTouchX: g,
				touchpadLeftTouchY: h,
				touchpadRightTouchX: C,
				touchpadRightTouchY: _,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
		if (r?.eControllerType == 34 || r?.eControllerType == 47) {
			return n.createElement(c.PS4ControllerFrontOutline, {
				className: a.ControllerOutline,
				highlightLeftBumper: i?.bLeftBumper,
				highlightRightBumper: i?.bRightBumper,
				highlightLeftStick: i?.bLeftStick,
				highlightRightStick: i?.bRightStick,
				leftJoystickX: l,
				leftJoystickY: m,
				rightJoystickX: u,
				rightJoystickY: d,
				highlightSelect: i?.bViewButton,
				highlightStart: i?.bOptionsButton,
				highlightGuide: i?.bSteamButton,
				highlightSouth: i?.bButtonSouth,
				highlightEast: i?.bButtonEast,
				highlightWest: i?.bButtonWest,
				highlightNorth: i?.bButtonNorth,
				highlightDPadUp: i?.bDPadUp,
				highlightDPadDown: i?.bDPadDown,
				highlightDPadLeft: i?.bDPadLeft,
				highlightDPadRight: i?.bDPadRight,
				highlightTouchpad: i?.bCenterTrackpad,
				touchpadCenterTouchX: i?.bCenterTrackpadTouch ? A : undefined,
				touchpadCenterTouchY: i?.bCenterTrackpadTouch ? p : undefined,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
		if (r?.eControllerType == 45 || r?.eControllerType == 48) {
			return n.createElement(c.PS5ControllerFrontOutline, {
				className: a.ControllerOutline,
				highlightLeftBumper: i?.bLeftBumper,
				highlightRightBumper: i?.bRightBumper,
				highlightLeftStick: i?.bLeftStick,
				highlightRightStick: i?.bRightStick,
				leftJoystickX: l,
				leftJoystickY: m,
				rightJoystickX: u,
				rightJoystickY: d,
				highlightSelect: i?.bViewButton,
				highlightStart: i?.bOptionsButton,
				highlightGuide: i?.bSteamButton,
				highlightCapture: i?.bCaptureButton,
				highlightSouth: i?.bButtonSouth,
				highlightEast: i?.bButtonEast,
				highlightWest: i?.bButtonWest,
				highlightNorth: i?.bButtonNorth,
				highlightDPadUp: i?.bDPadUp,
				highlightDPadDown: i?.bDPadDown,
				highlightDPadLeft: i?.bDPadLeft,
				highlightDPadRight: i?.bDPadRight,
				highlightTouchpad: i?.bCenterTrackpad,
				touchpadCenterTouchX: i?.bCenterTrackpadTouch ? A : undefined,
				touchpadCenterTouchY: i?.bCenterTrackpadTouch ? p : undefined,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
		if (
			r?.eControllerType == 38 ||
			r?.eControllerType == 42 ||
			r?.eControllerType == 44
		) {
			return n.createElement(c.NintendoSwitchProControllerFrontOutline, {
				className: a.ControllerOutline,
				highlightLeftBumper: i?.bLeftBumper,
				highlightRightBumper: i?.bRightBumper,
				highlightLeftStick: i?.bLeftStick,
				highlightRightStick: i?.bRightStick,
				leftJoystickX: l,
				leftJoystickY: m,
				rightJoystickX: u,
				rightJoystickY: d,
				highlightSelect: i?.bViewButton,
				highlightStart: i?.bOptionsButton,
				highlightGuide: i?.bSteamButton,
				highlightCapture: i?.bCaptureButton,
				highlightSouth: i?.bButtonSouth,
				highlightEast: i?.bButtonEast,
				highlightWest: i?.bButtonWest,
				highlightNorth: i?.bButtonNorth,
				highlightDPadUp: i?.bDPadUp,
				highlightDPadDown: i?.bDPadDown,
				highlightDPadLeft: i?.bDPadLeft,
				highlightDPadRight: i?.bDPadRight,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
		if (r?.eControllerType == 39) {
			return n.createElement(c.NintendoJoyConLFrontOutline, {
				className: a.ControllerOutline,
				highlightLeftBumper: i?.bLeftBumper,
				highlightRightBumper: i?.bRightBumper,
				highlightLeftStick: i?.bLeftStick,
				leftJoystickX: l,
				leftJoystickY: m,
				highlightStart: i?.bOptionsButton,
				highlightGuide: i?.bSteamButton,
				highlightSouth: i?.bButtonSouth,
				highlightEast: i?.bButtonEast,
				highlightWest: i?.bButtonWest,
				highlightNorth: i?.bButtonNorth,
				highlightL4Grip: i?.bL4,
				highlightL5Grip: i?.bL5,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
		if (r?.eControllerType == 40) {
			return n.createElement(c.NintendoJoyConRFrontOutline, {
				className: a.ControllerOutline,
				highlightLeftBumper: i?.bLeftBumper,
				highlightRightBumper: i?.bRightBumper,
				highlightLeftStick: i?.bLeftStick,
				leftJoystickX: l,
				leftJoystickY: m,
				highlightStart: i?.bOptionsButton,
				highlightGuide: i?.bSteamButton,
				highlightSouth: i?.bButtonSouth,
				highlightEast: i?.bButtonEast,
				highlightWest: i?.bButtonWest,
				highlightNorth: i?.bButtonNorth,
				highlightR4Grip: i?.bR4,
				highlightR5Grip: i?.bR5,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
		if (r?.eControllerType == 41) {
			return n.createElement(c.NintendoJoyConPairFrontOutline, {
				className: a.ControllerOutline,
				highlightLeftBumper: i?.bLeftBumper,
				highlightRightBumper: i?.bRightBumper,
				highlightLeftStick: i?.bLeftStick,
				highlightRightStick: i?.bRightStick,
				leftJoystickX: l,
				leftJoystickY: m,
				rightJoystickX: u,
				rightJoystickY: d,
				highlightSelect: i?.bViewButton,
				highlightStart: i?.bOptionsButton,
				highlightGuide: i?.bSteamButton,
				highlightCapture: i?.bCaptureButton,
				highlightSouth: i?.bButtonSouth,
				highlightEast: i?.bButtonEast,
				highlightWest: i?.bButtonWest,
				highlightNorth: i?.bButtonNorth,
				highlightDPadUp: i?.bDPadUp,
				highlightDPadDown: i?.bDPadDown,
				highlightDPadLeft: i?.bDPadLeft,
				highlightDPadRight: i?.bDPadRight,
				highlightL4Grip: i?.bL4,
				highlightL5Grip: i?.bL5,
				highlightR4Grip: i?.bR4,
				highlightR5Grip: i?.bR5,
				clickHandlers: e.diegeticButtonPressHandlers,
			});
		}
	}
	return n.createElement(c.GenericGamepadFrontOutline, {
		className: a.ControllerOutline,
		highlightLeftBumper: i?.bLeftBumper || i?.currentTestStep == 20,
		highlightRightBumper: i?.bRightBumper || i?.currentTestStep == 22,
		highlightLeftTrigger: i?.currentTestStep == 21,
		highlightRightTrigger: i?.currentTestStep == 23,
		highlightLeftStick: i?.bLeftStick || i?.currentTestStep == 14,
		highlightLeftStickUp: i?.currentTestStep == 12,
		highlightLeftStickDown: i?.currentTestStep == 13,
		highlightLeftStickLeft: i?.currentTestStep == 10,
		highlightLeftStickRight: i?.currentTestStep == 11,
		highlightRightStick: i?.bRightStick || i?.currentTestStep == 19,
		highlightRightStickUp: i?.currentTestStep == 17,
		highlightRightStickDown: i?.currentTestStep == 18,
		highlightRightStickLeft: i?.currentTestStep == 15,
		highlightRightStickRight: i?.currentTestStep == 16,
		leftJoystickX: l,
		leftJoystickY: m,
		rightJoystickX: u,
		rightJoystickY: d,
		highlightSelect: i?.bViewButton || i?.currentTestStep == 24,
		highlightStart: i?.bOptionsButton || i?.currentTestStep == 25,
		highlightGuide: i?.bSteamButton || i?.currentTestStep == 26,
		highlightCapture: i?.bCaptureButton || i?.currentTestStep == 27,
		highlightSouth:
			i?.bButtonSouth ||
			(i?.currentTestStep == 2 && !i?.bHasNintendoLayout) ||
			(i?.currentTestStep == 3 && i?.bHasNintendoLayout),
		highlightEast:
			i?.bButtonEast ||
			(i?.currentTestStep == 3 && !i?.bHasNintendoLayout) ||
			(i?.currentTestStep == 2 && i?.bHasNintendoLayout),
		highlightWest:
			i?.bButtonWest ||
			(i?.currentTestStep == 4 && !i?.bHasNintendoLayout) ||
			(i?.currentTestStep == 5 && i?.bHasNintendoLayout),
		highlightNorth:
			i?.bButtonNorth ||
			(i?.currentTestStep == 5 && !i?.bHasNintendoLayout) ||
			(i?.currentTestStep == 4 && i?.bHasNintendoLayout),
		highlightDPadUp: i?.bDPadUp || i?.currentTestStep == 8,
		highlightDPadDown: i?.bDPadDown || i?.currentTestStep == 9,
		highlightDPadLeft: i?.bDPadLeft || i?.currentTestStep == 6,
		highlightDPadRight: i?.bDPadRight || i?.currentTestStep == 7,
		highlightTouchpad: i?.currentTestStep == 28,
		bUseReversedLayout: i?.bHasNintendoLayout,
		bUsePSButtons: o,
		clickHandlers: e.diegeticButtonPressHandlers,
	});
}
function E(e) {
	return "0x" + e.toString(16).padStart(4, "0");
}
var M;
function T(e, t) {
	const r = (0, C.yq)();
	let c = (0, p.AX)();
	const d = (0, l.A9)();
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
	const [A, g] = n.useState(false);
	n.useEffect(() => {
		if (!A) {
			if (d?.currentTestStep == 42) {
				g(true);
				r();
			}
		}
	}, [d, r, A, g]);
	if (d?.eFlow != null) {
		e = d.eFlow;
	}
	if (d?.controllerIdx != null) {
		c = d.controllerIdx;
	}
	const h = (0, l.as)(c);
	let _ = "";
	if (e == 2) {
		let e = "";
		if (h?.strSerialNumber) {
			e = h.strSerialNumber + " ";
		}
		e += "(" + E(h?.unVendorID ?? 0) + "," + E(h?.unProductID ?? 0) + ")";
		_ = (0, Localize)("#Settings_ControllerDeviceSupport_Title", e);
	}
	(0, m.Wh)(_, "ControllerDeviceSupport");
	const b = e == 2 && ((h?.unCapabilities ?? 0) & 16384) != 0;
	const y =
		e == 2 &&
		((h?.unCapabilities ?? 0) & 1048576) != 0 &&
		h?.eControllerType != 49;
	const [T, R] = n.useState(false);
	if (h) {
		const e =
			h.eControllerType == 33 ||
			h.eControllerType == 34 ||
			h.eControllerType == 47 ||
			h.eControllerType == 45 ||
			h.eControllerType == 48;
		if (e != T) {
			R(e);
		}
	}
	const k =
		h?.eControllerType == 4 ||
		h?.eControllerType == 49 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 39 ||
		h?.eControllerType == 40;
	const D =
		h?.eControllerType == 4 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 40;
	const N =
		h?.eControllerType == 4 ||
		h?.eControllerType == 49 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 40 ||
		h?.eControllerType == 39;
	const F =
		h?.eControllerType == 4 ||
		h?.eControllerType == 41 ||
		h?.eControllerType == 39;
	const [G, O] = n.useState(M.k_ShowGripButtons_None);
	if (h) {
		let e = M.k_ShowGripButtons_None;
		if ((h.unCapabilities & 4194304) != 0) {
			if (!k) {
				e |= M.k_ShowGripButtons_LeftUpper;
			}
			if (!N) {
				e |= M.k_ShowGripButtons_RightUpper;
			}
		}
		if ((h.unCapabilities & 1024) != 0) {
			if (!D) {
				e |= M.k_ShowGripButtons_LeftLower;
			}
			if (!F) {
				e |= M.k_ShowGripButtons_RightLower;
			}
		}
		if (e != G) {
			O(e);
		}
	}
	const P = d?.currentTestStep ?? 0;
	let L = S[P];
	if (T && P >= 2 && P < 29) {
		L += "_PS";
	}
	let z = "";
	const x = h?.strName;
	const U = x?.startsWith("#");
	const W = (0, Localize)(x);
	z = U && W !== x ? W : x;
	const V = h?.eControllerType == 49;
	return n.createElement(
		w,
		null,
		n.createElement(
			"div",
			{
				className: (0, s.A)(a.ControllerName, V && a.LargerImg),
			},
			" ",
			z,
			" ",
		),
		BB({
			eFlow: e,
			controller: h,
			controllerSupportFlowState: d,
			bUsePSButtons: T,
		}),
		n.createElement(
			"div",
			{
				className: a.TestStepLabel,
			},
			" ",
			(0, Localize)(L),
			" ",
		),
		n.createElement(
			"div",
			{
				className: a.CenteredRow,
			},
			b &&
				n.createElement(
					i.xh,
					{
						onClick: () => {
							SteamClient.Input.IdentifyController(c);
						},
						bottomSeparator: "none",
					},
					(0, Localize)("#Settings_Controller_TestRumble"),
				),
			y &&
				n.createElement(
					i.xh,
					{
						onClick: async () => {
							let e = await l.Fd.Get().GetControllerMappingString(c);
							CopyTextToClipboard(e);
						},
						bottomSeparator: "none",
					},
					(0, Localize)("#Settings_Controller_CopyToClipboard"),
				),
			e == 1 &&
				n.createElement(
					i.xh,
					{
						onClick: async (e) => {
							let t = await (0, ew)(GetOwningWindowForElement(e.currentTarget));
							l.Fd.Get().SetControllerMappingString(t);
						},
						bottomSeparator: "none",
					},
					(0, Localize)("#Settings_Controller_PasteFromClipboard"),
				),
			y &&
				n.createElement(
					i.xh,
					{
						onClick: () => {
							l.Fd.Get().ResetControllerBindings(c);
						},
						bottomSeparator: "none",
					},
					(0, Localize)("#Settings_Controller_ResetInput"),
				),
			y &&
				n.createElement(
					i.xh,
					{
						onClick: () => {
							l.Fd.Get().ChangeControllerSupportFlow(1, c);
						},
						bottomSeparator: "none",
					},
					(0, Localize)("#Settings_Controller_BindInput"),
				),
			e == 1 &&
				n.createElement(
					i.xh,
					{
						onClick: () => {
							if (c < 0) {
								g(true);
								r();
							} else {
								l.Fd.Get().ChangeControllerSupportFlow(2, c);
							}
						},
						bottomSeparator: "none",
					},
					(0, Localize)("#Settings_Controller_CancelBindInput"),
				),
		),
		n.createElement(
			"div",
			{
				className: a.Row,
			},
			n.createElement(B, {
				showUpperGrips: (G & M.k_ShowGripButtons_LeftUpper) != 0,
				showLowerGrips: (G & M.k_ShowGripButtons_LeftLower) != 0,
			}),
			n.createElement(v, {
				showUpperGrips: (G & M.k_ShowGripButtons_RightUpper) != 0,
				showLowerGrips: (G & M.k_ShowGripButtons_RightLower) != 0,
			}),
		),
	);
}
export function Hg(e) {
	const t = (0, _.oH)();
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
	const t = (0, _.oH)();
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
(function (e) {
	e[(e.k_ShowGripButtons_None = 0)] = "k_ShowGripButtons_None";
	e[(e.k_ShowGripButtons_LeftUpper = 1)] = "k_ShowGripButtons_LeftUpper";
	e[(e.k_ShowGripButtons_LeftLower = 2)] = "k_ShowGripButtons_LeftLower";
	e[(e.k_ShowGripButtons_RightUpper = 4)] = "k_ShowGripButtons_RightUpper";
	e[(e.k_ShowGripButtons_RightLower = 8)] = "k_ShowGripButtons_RightLower";
	e[(e.k_ShowGripButtons_All = 15)] = "k_ShowGripButtons_All";
})((M ||= {}));
