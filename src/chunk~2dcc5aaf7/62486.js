var n;
var i;
var a;
export var KU;
export var Sn;
export var RL;
var c = require(/*webcrack:missing*/ "./89193.js");
var m = require(/*webcrack:missing*/ "./62757.js");
var u = m;
var d = require("./84056.js");
import {
	Localize,
	BLocStringExists,
} from "../../actual_src/utils/localization.js";
var p = require("./85360.js");
var g = require("./52192.js");
export function mJ(e) {
	switch (e) {
		default:
		case 4:
			return RL.k_EControllerTypeFlags_SteamControllerNeptune;
		case 3:
			return RL.k_EControllerTypeFlags_SteamControllerV2;
		case 2:
			return RL.k_EControllerTypeFlags_SteamController;
		case 33:
			return RL.k_EControllerTypeFlags_PS3Controller;
		case 34:
			return RL.k_EControllerTypeFlags_PS4Controller;
		case 45:
			return RL.k_EControllerTypeFlags_PS5Controller;
		case 48:
			return RL.k_EControllerTypeFlags_PS5EdgeController;
		case 31:
			return RL.k_EControllerTypeFlags_XBox360;
		case 32:
			return RL.k_EControllerTypeFlags_XBoxOne;
		case 46:
			return RL.k_EControllerTypeFlags_XBoxElite;
		case 38:
			return RL.k_EControllerTypeFlags_SwitchPro;
		case 42:
			return RL.k_EControllerTypeFlags_XInputSwitch;
		case 30:
			return RL.k_EControllerTypeFlags_GenericGamepad;
		case 39:
		case 40:
			return RL.k_EControllerTypeFlags_SingleJoycon;
		case 41:
			return RL.k_EControllerTypeFlags_SwitchJoyconPair;
		case 43:
			return RL.k_EControllerTypeFlags_MobileTouchController;
		case 49:
			return RL.k_EControllerTypeFlags_HoriController;
	}
}
(function (e) {
	e[(e.k_EMenuButtonPress = 0)] = "k_EMenuButtonPress";
	e[(e.k_EMenuButtonRelease = 1)] = "k_EMenuButtonRelease";
	e[(e.k_EMenuTouchRelease = 2)] = "k_EMenuTouchRelease";
	e[(e.k_EMenuTouchAlways = 3)] = "k_EMenuTouchAlways";
})((n ||= {}));
(function (e) {
	e[(e.k_EControllerOutputAxisOmitX = 0)] = "k_EControllerOutputAxisOmitX";
	e[(e.k_EControllerOutputAxisOmitY = 1)] = "k_EControllerOutputAxisOmitY";
	e[(e.k_EControllerOutputAxisBoth = 2)] = "k_EControllerOutputAxisBoth";
})((i ||= {}));
(function (e) {
	e[(e.k_EOutputAxisLeftTrigger = 0)] = "k_EOutputAxisLeftTrigger";
	e[(e.k_EOutputAxisRightTrigger = 1)] = "k_EOutputAxisRightTrigger";
	e[(e.k_EOutputAxisLeftThumbXPos = 2)] = "k_EOutputAxisLeftThumbXPos";
	e[(e.k_EOutputAxisLeftThumbXNeg = 3)] = "k_EOutputAxisLeftThumbXNeg";
	e[(e.k_EOutputAxisLeftThumbYPos = 4)] = "k_EOutputAxisLeftThumbYPos";
	e[(e.k_EOutputAxisLeftThumbYNeg = 5)] = "k_EOutputAxisLeftThumbYNeg";
	e[(e.k_EOutputAxisRightThumbXPos = 6)] = "k_EOutputAxisRightThumbXPos";
	e[(e.k_EOutputAxisRightThumbXNeg = 7)] = "k_EOutputAxisRightThumbXNeg";
	e[(e.k_EOutputAxisRightThumbYPos = 8)] = "k_EOutputAxisRightThumbYPos";
	e[(e.k_EOutputAxisRightThumbYNeg = 9)] = "k_EOutputAxisRightThumbYNeg";
})((a ||= {}));
(function (e) {
	e[(e.k_EInputSource_None = 1)] = "k_EInputSource_None";
	e[(e.k_EInputSource_ABXY = 16)] = "k_EInputSource_ABXY";
	e[(e.k_EInputSource_Dpad = 8192)] = "k_EInputSource_Dpad";
	e[(e.k_EInputSource_LeftBumper = 256)] = "k_EInputSource_LeftBumper";
	e[(e.k_EInputSource_RightBumper = 512)] = "k_EInputSource_RightBumper";
	e[(e.k_EInputSource_Switch = 32)] = "k_EInputSource_Switch";
	e[(e.k_EInputSource_LeftJoystick = 8)] = "k_EInputSource_LeftJoystick";
	e[(e.k_EInputSource_RightJoystick = 4096)] = "k_EInputSource_RightJoystick";
	e[(e.k_EInputSource_LeftTrackpad = 2)] = "k_EInputSource_LeftTrackpad";
	e[(e.k_EInputSource_CenterTrackpad = 2048)] = "k_EInputSource_CenterTrackpad";
	e[(e.k_EInputSource_RightTrackpad = 4)] = "k_EInputSource_RightTrackpad";
	e[(e.k_EInputSource_LeftGyro = 65536)] = "k_EInputSource_LeftGyro";
	e[(e.k_EInputSource_Gyro = 1024)] = "k_EInputSource_Gyro";
	e[(e.k_EInputSource_LeftTrigger = 64)] = "k_EInputSource_LeftTrigger";
	e[(e.k_EInputSource_RightTrigger = 128)] = "k_EInputSource_RightTrigger";
	e[(e.k_EInputSource_Key = 16384)] = "k_EInputSource_Key";
	e[(e.k_EInputSource_Mouse = 32768)] = "k_EInputSource_Mouse";
	e[(e.k_EInputSource_CapJoystickRight = 131072)] =
		"k_EInputSource_CapJoystickRight";
	e[(e.k_EInputSource_CapJoystickLeft = 262144)] =
		"k_EInputSource_CapJoystickLeft";
	e[(e.k_EInputSource_All = 524287)] = "k_EInputSource_All";
	e[(e.k_EInputSource_Gyros = 66560)] = "k_EInputSource_Gyros";
	e[(e.k_EInputSource_Trackpads = 2054)] = "k_EInputSource_Trackpads";
	e[(e.k_EInputSource_Joysticks = 397320)] = "k_EInputSource_Joysticks";
	e[(e.k_EInputSource_Touch = 395270)] = "k_EInputSource_Touch";
	e[(e.k_EInputSource_Triggers = 192)] = "k_EInputSource_Triggers";
	e[(e.k_EInputSource_NonGyro = -66561)] = "k_EInputSource_NonGyro";
	e[(e.k_EInputSource_NonTrackpad = -2055)] = "k_EInputSource_NonTrackpad";
	e[(e.k_EInputSource_NonJoystick = -397321)] = "k_EInputSource_NonJoystick";
	e[(e.k_EInputSource_NonTouch = -395271)] = "k_EInputSource_NonTouch";
	e[(e.k_EInputSource_Digital = 25392)] = "k_EInputSource_Digital";
	e[(e.k_EInputSource_Analog = 466126)] = "k_EInputSource_Analog";
})((KU ||= {}));
(function (e) {
	e[(e.k_EInputMode_None = 1)] = "k_EInputMode_None";
	e[(e.k_EInputMode_Dpad = 2)] = "k_EInputMode_Dpad";
	e[(e.k_EInputMode_Buttons = 4)] = "k_EInputMode_Buttons";
	e[(e.k_EInputMode_FourButtons = 8)] = "k_EInputMode_FourButtons";
	e[(e.k_EInputMode_AbsoluteMouse = 16)] = "k_EInputMode_AbsoluteMouse";
	e[(e.k_EInputMode_JoystickMouse = 128)] = "k_EInputMode_JoystickMouse";
	e[(e.k_EInputMode_JoystickCamera = 256)] = "k_EInputMode_JoystickCamera";
	e[(e.k_EInputMode_ScrollWheel = 512)] = "k_EInputMode_ScrollWheel";
	e[(e.k_EInputMode_Trigger = 1024)] = "k_EInputMode_Trigger";
	e[(e.k_EInputMode_TouchMenu = 2048)] = "k_EInputMode_TouchMenu";
	e[(e.k_EInputMode_MouseJoystick = 4096)] = "k_EInputMode_MouseJoystick";
	e[(e.k_EInputMode_MouseRegion = 8192)] = "k_EInputMode_MouseRegion";
	e[(e.k_EInputMode_RadialMenu = 16384)] = "k_EInputMode_RadialMenu";
	e[(e.k_EInputMode_SingleButton = 32768)] = "k_EInputMode_SingleButton";
	e[(e.k_EInputMode_Switches = 65536)] = "k_EInputMode_Switches";
	e[(e.k_EInputMode_FlickStick = 131072)] = "k_EInputMode_FlickStick";
	e[(e.k_EInputMode_2DScrollwheel = 262144)] = "k_EInputMode_2DScrollwheel";
	e[(e.k_EInputMode_Hotbar = 524288)] = "k_EInputMode_Hotbar";
	e[(e.k_EInputMode_GyroToMouse = 4194304)] = "k_EInputMode_GyroToMouse";
	e[(e.k_EInputMode_GyroToJoystickCamera = 8388608)] =
		"k_EInputMode_GyroToJoystickCamera";
	e[(e.k_EInputMode_GyroToJoystickDeflection = 16777216)] =
		"k_EInputMode_GyroToJoystickDeflection";
	e[(e.k_EInputMode_GyroToCameraAngles = 33554432)] =
		"k_EInputMode_GyroToCameraAngles";
	e[(e.k_EInputMode_FlickStickToCameraAngles = 134217728)] =
		"k_EInputMode_FlickStickToCameraAngles";
	e[(e.k_EInputMode_JoystickToCameraAngles = 67108864)] =
		"k_EInputMode_JoystickToCameraAngles";
	e[(e.k_EInputMode_TrackPadToCameraAngles = 268435456)] =
		"k_EInputMode_TrackPadToCameraAngles";
	e[(e.k_EInputMode_All = 1073741823)] = "k_EInputMode_All";
})((Sn ||= {}));
(function (e) {
	e[(e.k_EControllerTypeFlags_SteamController = 1)] =
		"k_EControllerTypeFlags_SteamController";
	e[(e.k_EControllerTypeFlags_SteamControllerV2 = 2)] =
		"k_EControllerTypeFlags_SteamControllerV2";
	e[(e.k_EControllerTypeFlags_SteamControllerNeptune = 4)] =
		"k_EControllerTypeFlags_SteamControllerNeptune";
	e[(e.k_EControllerTypeFlags_PS3Controller = 8)] =
		"k_EControllerTypeFlags_PS3Controller";
	e[(e.k_EControllerTypeFlags_PS4Controller = 16)] =
		"k_EControllerTypeFlags_PS4Controller";
	e[(e.k_EControllerTypeFlags_PS5Controller = 32)] =
		"k_EControllerTypeFlags_PS5Controller";
	e[(e.k_EControllerTypeFlags_XBox360 = 64)] = "k_EControllerTypeFlags_XBox360";
	e[(e.k_EControllerTypeFlags_XBoxOne = 128)] =
		"k_EControllerTypeFlags_XBoxOne";
	e[(e.k_EControllerTypeFlags_XBoxElite = 256)] =
		"k_EControllerTypeFlags_XBoxElite";
	e[(e.k_EControllerTypeFlags_SwitchPro = 512)] =
		"k_EControllerTypeFlags_SwitchPro";
	e[(e.k_EControllerTypeFlags_XInputSwitch = 1024)] =
		"k_EControllerTypeFlags_XInputSwitch";
	e[(e.k_EControllerTypeFlags_GenericGamepad = 2048)] =
		"k_EControllerTypeFlags_GenericGamepad";
	e[(e.k_EControllerTypeFlags_SingleJoycon = 4096)] =
		"k_EControllerTypeFlags_SingleJoycon";
	e[(e.k_EControllerTypeFlags_SwitchJoyconPair = 8192)] =
		"k_EControllerTypeFlags_SwitchJoyconPair";
	e[(e.k_EControllerTypeFlags_MobileTouchController = 16384)] =
		"k_EControllerTypeFlags_MobileTouchController";
	e[(e.k_EControllerTypeFlags_PS5EdgeController = 32768)] =
		"k_EControllerTypeFlags_PS5EdgeController";
	e[(e.k_EControllerTypeFlags_HoriController = 65536)] =
		"k_EControllerTypeFlags_HoriController";
	e[(e.k_EControllerTypeFlags_AllControllers = 262143)] =
		"k_EControllerTypeFlags_AllControllers";
	e[(e.k_EControllerTypeFlags_AllSteamControllers = 7)] =
		"k_EControllerTypeFlags_AllSteamControllers";
	e[(e.k_EControllerTypeFlags_AllPlaystationControllers = 32824)] =
		"k_EControllerTypeFlags_AllPlaystationControllers";
	e[(e.k_EControllerTypeFlags_AllXBoxControllers = 448)] =
		"k_EControllerTypeFlags_AllXBoxControllers";
	e[(e.k_EControllerTypeFlags_AllNintendoControllers = 13824)] =
		"k_EControllerTypeFlags_AllNintendoControllers";
	e[(e.k_EControllerTypeFlags_2Grips = 106759)] =
		"k_EControllerTypeFlags_2Grips";
	e[(e.k_EControllerTypeFlags_4Grips = 106758)] =
		"k_EControllerTypeFlags_4Grips";
	e[(e.k_EControllerTypeFlags_Gyro = 127543)] = "k_EControllerTypeFlags_Gyro";
	e[(e.k_EControllerTypeFlags_Trackpad = 49207)] =
		"k_EControllerTypeFlags_Trackpad";
	e[(e.k_EControllerTypeFlags_CenterTrackpad = 49200)] =
		"k_EControllerTypeFlags_CenterTrackpad";
	e[(e.k_EControllerTypeFlags_RightJoystick = 258044)] =
		"k_EControllerTypeFlags_RightJoystick";
	e[(e.k_EControllerTypeFlags_DPad = 258044)] = "k_EControllerTypeFlags_DPad";
	e[(e.k_EControllerTypeFlags_Triggers = 258047)] =
		"k_EControllerTypeFlags_Triggers";
	e[(e.k_EControllerTypeFlags_HapticSupport = 7)] =
		"k_EControllerTypeFlags_HapticSupport";
})((RL ||= {}));
export const Ou = {
	0: undefined,
	4: RL.k_EControllerTypeFlags_AllControllers,
	8: undefined,
	9: undefined,
	5: RL.k_EControllerTypeFlags_AllControllers,
	13: RL.k_EControllerTypeFlags_DPad,
	3: RL.k_EControllerTypeFlags_AllControllers,
	12: RL.k_EControllerTypeFlags_RightJoystick,
	1: RL.k_EControllerTypeFlags_Trackpad,
	11: RL.k_EControllerTypeFlags_CenterTrackpad,
	2: RL.k_EControllerTypeFlags_Trackpad,
	16: undefined,
	10: RL.k_EControllerTypeFlags_Gyro,
	6: RL.k_EControllerTypeFlags_Triggers,
	7: RL.k_EControllerTypeFlags_Triggers,
	14: undefined,
	15: undefined,
};
function _(e) {
	return e.reduce(
		(e, t) => ({
			...e,
			[t.key]: t,
		}),
		{},
	);
}
export const Dd = {
	0: undefined,
	4: {
		id: "#ControllerConfigurator_Source_ABXY",
		directional: true,
		diamondButton: true,
	},
	8: {
		id: "#ControllerConfigurator_Source_LeftBumper",
		bumper: true,
		twin: true,
	},
	9: {
		id: "#ControllerConfigurator_Source_RightBumper",
		bumper: true,
		twin: true,
	},
	5: {
		id: "#ControllerConfigurator_Source_Switches",
	},
	13: {
		id: "#ControllerConfigurator_Source_DPad",
		directional: true,
		dpad: true,
	},
	3: {
		id: "#ControllerConfigurator_Source_Joystick",
		analog: true,
		directional: true,
		stick: true,
	},
	12: {
		id: "#ControllerConfigurator_Source_RightJoystick",
		analog: true,
		directional: true,
		stick: true,
	},
	1: {
		id: "#ControllerConfigurator_Source_LeftTrackpad",
		analog: true,
		directional: true,
		trackpad: true,
	},
	11: {
		id: "#ControllerConfigurator_Source_CenterTrackpad",
		analog: true,
		directional: true,
		trackpad: true,
	},
	2: {
		id: "#ControllerConfigurator_Source_RightTrackpad",
		analog: true,
		directional: true,
		trackpad: true,
	},
	16: {
		id: "#ControllerConfigurator_Source_LeftGyro",
		analog: true,
		directional: true,
		gyro: true,
	},
	10: {
		id: "#ControllerConfigurator_Source_Gyro",
		analog: true,
		directional: true,
		gyro: true,
	},
	6: {
		id: "#ControllerConfigurator_Source_LeftTrigger",
		analog: true,
		trigger: true,
		twin: true,
	},
	7: {
		id: "#ControllerConfigurator_Source_RightTrigger",
		analog: true,
		trigger: true,
		twin: true,
	},
	14: {
		id: "#ControllerConfigurator_Source_Key",
		key: true,
	},
	15: {
		id: "#ControllerConfigurator_Source_Mouse",
		mouse: true,
	},
	17: {
		id: "#ControllerConfigurator_Source_CapJoystickRight",
	},
	18: {
		id: "#ControllerConfigurator_Source_CapJoystickLeft",
	},
};
export const k$ = {
	0: {
		id: "#ControllerConfigurator_SourceMode_None",
		sortOrder: 0,
	},
	22: {
		id: "#ControllerConfigurator_SourceMode_Gyro_To_Mouse",
		sortOrder: 1,
	},
	4: {
		id: "#ControllerConfigurator_SourceMode_AbsoluteMouse",
		sortOrder: 2,
	},
	7: {
		id: "#ControllerConfigurator_SourceMode_JoystickMouse",
		sortOrder: 3,
	},
	5: {
		id: "#ControllerConfigurator_SourceMode_RelativeMouse",
		sortOrder: 4,
	},
	17: {
		id: "#ControllerConfigurator_SourceMode_FlickStick",
		sortOrder: 5,
	},
	8: {
		id: "#ControllerConfigurator_SourceMode_JoystickCamera",
		sortOrder: 6,
	},
	13: {
		id: "#ControllerConfigurator_SourceMode_MouseRegion",
		sortOrder: 7,
	},
	23: {
		id: "#ControllerConfigurator_SourceMode_Gyro_To_JoystickCamera",
		sortOrder: 8,
	},
	24: {
		id: "#ControllerConfigurator_SourceMode_Gyro_To_JoystickDeflection",
		sortOrder: 9,
	},
	6: {
		id: "#ControllerConfigurator_SourceMode_JoystickMove",
		sortOrder: 10,
	},
	12: {
		id: "#ControllerConfigurator_SourceMode_MouseJoystick",
		sortOrder: 11,
	},
	25: {
		id: "#ControllerConfigurator_SourceMode_GyroToCameraAngles",
		sortOrder: 12,
	},
	27: {
		id: "#ControllerConfigurator_SourceMode_FlickStickToCameraAngles",
		sortOrder: 13,
	},
	26: {
		id: "#ControllerConfigurator_SourceMode_JoystickToCameraAngles",
		sortOrder: 14,
	},
	28: {
		id: "#ControllerConfigurator_SourceMode_TrackPadToCameraAngles",
		sortOrder: 15,
	},
	10: {
		id: "#ControllerConfigurator_SourceMode_Trigger",
		sortOrder: 16,
		hideTitleInSummary: true,
	},
	1: {
		id: "#ControllerConfigurator_SourceMode_Dpad",
		sortOrder: 17,
		hideTitleInSummary: true,
	},
	2: {
		id: "#ControllerConfigurator_SourceMode_Buttons",
		sortOrder: 18,
		hideTitleInSummary: true,
	},
	3: {
		id: "#ControllerConfigurator_SourceMode_FourButtons",
		sortOrder: 19,
		hideTitleInSummary: true,
	},
	15: {
		id: "#ControllerConfigurator_SourceMode_SingleButton",
		sortOrder: 20,
		hideTitleInSummary: true,
	},
	16: {
		id: "#ControllerConfigurator_SourceMode_Switches",
		sortOrder: 21,
	},
	18: {
		id: "#ControllerConfigurator_SourceMode_2DScrollwheel",
		sortOrder: 22,
	},
	9: {
		id: "#ControllerConfigurator_SourceMode_ScrollWheel",
		sortOrder: 23,
		hideTitleInSummary: true,
	},
	14: {
		id: "#ControllerConfigurator_SourceMode_RadialMenu",
		sortOrder: 24,
		summaryId: "#ControllerConfigurator_SourceMode_RadialMenu_Summary",
	},
	11: {
		id: "#ControllerConfigurator_SourceMode_TouchMenu",
		sortOrder: 25,
		summaryId: "#ControllerConfigurator_SourceMode_TouchMenu_Summary",
	},
	19: {
		id: "#ControllerConfigurator_SourceMode_Hotbar",
		sortOrder: 26,
		summaryId: "#ControllerConfigurator_SourceMode_Hotbar_Summary",
	},
	20: {
		id: "#ControllerConfigurator_SourceMode_Disabled",
		sortOrder: 27,
	},
};
export const SW = {
	0: {
		id: "None",
	},
	1: {
		id: "Dpad_N",
		mode_filter: Sn.k_EInputMode_Hotbar,
		sortOrderOverride: -7,
		dupe: true,
	},
	8: {
		id: "Dpad_NW",
		sortOrderOverride: -6,
	},
	7: {
		id: "Dpad_W",
		mode_filter: Sn.k_EInputMode_Hotbar | Sn.k_EInputMode_TouchMenu,
		gyro_lean: true,
		sortOrderOverride: -3,
		dupe: true,
	},
	6: {
		id: "Dpad_SW",
		sortOrderOverride: -4,
	},
	5: {
		id: "Dpad_S",
		mode_filter: Sn.k_EInputMode_Hotbar,
		sortOrderOverride: -5,
		dupe: true,
	},
	4: {
		id: "Dpad_SE",
		sortOrderOverride: -2,
	},
	3: {
		id: "Dpad_E",
		mode_filter: Sn.k_EInputMode_Hotbar | Sn.k_EInputMode_TouchMenu,
		gyro_lean: true,
		sortOrderOverride: -1,
		dupe: true,
	},
	2: {
		id: "Dpad_NE",
	},
	12: {
		id: "Button_A",
		dupe: true,
		sortOrderOverride: -5,
	},
	10: {
		id: "Button_B",
		dupe: true,
		sortOrderOverride: -4,
	},
	11: {
		id: "Button_X",
		dupe: true,
		sortOrderOverride: -3,
	},
	9: {
		id: "Button_Y",
		dupe: true,
	},
	13: {
		id: "Click",
		source_filter:
			KU.k_EInputSource_Gyros | KU.k_EInputSource_Dpad | KU.k_EInputSource_ABXY,
		sortOrderOverride: 10,
	},
	14: {
		id: "DoubleTap",
		source_filter: KU.k_EInputSource_NonTrackpad,
		only_show_if_bound: true,
		sortOrderOverride: 99,
	},
	15: {
		id: "Edge",
		mode_filter: Sn.k_EInputMode_Hotbar,
		source_filter:
			KU.k_EInputSource_Gyros | KU.k_EInputSource_Dpad | KU.k_EInputSource_ABXY,
		sortOrderOverride: 90,
	},
	16: {
		id: "Clockwise",
	},
	17: {
		id: "CounterClockwise",
	},
	18: {
		id: "TriggerAnalog",
	},
	19: {
		id: "ScrollWheel_List0",
	},
	20: {
		id: "ScrollWheel_List1",
	},
	21: {
		id: "ScrollWheel_List2",
	},
	22: {
		id: "ScrollWheel_List3",
	},
	23: {
		id: "ScrollWheel_List4",
	},
	24: {
		id: "ScrollWheel_List5",
	},
	25: {
		id: "ScrollWheel_List6",
	},
	26: {
		id: "ScrollWheel_List7",
	},
	27: {
		id: "ScrollWheel_List8",
	},
	28: {
		id: "ScrollWheel_List9",
	},
	29: {
		id: "TouchMenu_Button0",
	},
	30: {
		id: "TouchMenu_Button1",
	},
	31: {
		id: "TouchMenu_Button2",
	},
	32: {
		id: "TouchMenu_Button3",
	},
	33: {
		id: "TouchMenu_Button4",
	},
	34: {
		id: "TouchMenu_Button5",
	},
	35: {
		id: "TouchMenu_Button6",
	},
	36: {
		id: "TouchMenu_Button7",
	},
	37: {
		id: "TouchMenu_Button8",
	},
	38: {
		id: "TouchMenu_Button9",
	},
	39: {
		id: "TouchMenu_Button10",
	},
	40: {
		id: "TouchMenu_Button11",
	},
	41: {
		id: "TouchMenu_Button12",
	},
	42: {
		id: "TouchMenu_Button13",
	},
	43: {
		id: "TouchMenu_Button14",
	},
	44: {
		id: "TouchMenu_Button15",
	},
	45: {
		id: "TouchMenu_Button16",
	},
	46: {
		id: "TouchMenu_Button17",
	},
	47: {
		id: "TouchMenu_Button18",
	},
	48: {
		id: "TouchMenu_Button19",
	},
	49: {
		id: "TouchMenu_Button20",
	},
	50: {
		id: "Touch",
		mode_filter: Sn.k_EInputMode_2DScrollwheel,
		captouch: true,
		sortOrderOverride: 11,
	},
	51: {
		id: "Select",
		controller_filter: RL.k_EControllerTypeFlags_SingleJoycon,
		subheader: "ControllerConfigurator_Source_Menu_Subheader_Title",
	},
	52: {
		id: "Start",
		subheader: "ControllerConfigurator_Source_Menu_Subheader_Title",
		subheader_filter: RL.k_EControllerTypeFlags_SingleJoycon,
	},
	53: {
		id: "LeftBumper",
		sortOrderOverride: -8,
		subheader: "ControllerConfigurator_Source_Bumpers_Subheader_Title",
	},
	54: {
		id: "RightBumper",
		sortOrderOverride: -7,
	},
	57: {
		id: "LeftGrip_Upper",
		controller_filter: ~RL.k_EControllerTypeFlags_4Grips,
		sortOrderOverride: -6,
		subheader: "ControllerConfigurator_Source_Grips_Subheader_Title",
	},
	55: {
		id: "LeftGrip",
		controller_filter: ~RL.k_EControllerTypeFlags_2Grips,
		sortOrderOverride: -4,
		subheader_filter: ~RL.k_EControllerTypeFlags_4Grips,
		subheader: "ControllerConfigurator_Source_Grips_Subheader_Title",
	},
	79: {
		id: "LeftAuxCapSense",
		caps_filter: 1073741824,
		sortOrderOverride: -2,
		subheader_filter: ~RL.k_EControllerTypeFlags_4Grips,
		subheader: "ControllerConfigurator_Source_Grips_Subheader_Title",
	},
	58: {
		id: "RightGrip_Upper",
		controller_filter: ~RL.k_EControllerTypeFlags_4Grips,
		sortOrderOverride: -5,
	},
	56: {
		id: "RightGrip",
		controller_filter: ~RL.k_EControllerTypeFlags_2Grips,
		sortOrderOverride: -3,
	},
	80: {
		id: "RightAuxCapSense",
		caps_filter: 1073741824,
		sortOrderOverride: -1,
		subheader_filter: ~RL.k_EControllerTypeFlags_4Grips,
		subheader: "ControllerConfigurator_Source_Grips_Subheader_Title",
	},
	59: {
		id: "LeftTrackPadClick",
		controller_filter: ~RL.k_EControllerTypeFlags_Trackpad,
		dupe: true,
	},
	60: {
		id: "RightTrackPadClick",
		controller_filter: ~RL.k_EControllerTypeFlags_Trackpad,
		dupe: true,
	},
	82: {
		id: "LeftTrackPadTouch",
		controller_filter: ~RL.k_EControllerTypeFlags_Trackpad,
		dupe: true,
	},
	83: {
		id: "RightTrackPadTouch",
		controller_filter: ~RL.k_EControllerTypeFlags_Trackpad,
		dupe: true,
	},
	61: {
		id: "LeftTrigger",
		dupe: true,
	},
	62: {
		id: "RightTrigger",
		dupe: true,
	},
	63: {
		id: "LeftTriggerThreshold",
		dupe: true,
	},
	64: {
		id: "RightTriggerThreshold",
		dupe: true,
	},
	65: {
		id: "LeftJoystickClick",
		dupe: true,
	},
	81: {
		id: "RightJoystickClick",
		dupe: true,
	},
	66: {
		id: "Steam",
	},
	67: {
		id: "ActionSetAlwaysOn",
		actionset_action: true,
		subheader: "ControllerConfigurator_Source_Aux_Subheader_Title",
	},
	68: {
		id: "CaptureButton",
		caps_filter: 8388608,
	},
	69: {
		id: "Macro0",
		controller_filter: ~RL.k_EControllerTypeFlags_MobileTouchController,
	},
	70: {
		id: "Macro1",
		controller_filter: ~RL.k_EControllerTypeFlags_MobileTouchController,
	},
	71: {
		id: "Macro2",
		controller_filter: ~RL.k_EControllerTypeFlags_MobileTouchController,
	},
	72: {
		id: "Macro3",
		controller_filter: ~RL.k_EControllerTypeFlags_MobileTouchController,
	},
	73: {
		id: "Macro4",
		controller_filter: ~RL.k_EControllerTypeFlags_MobileTouchController,
	},
	74: {
		id: "Macro5",
		controller_filter: ~RL.k_EControllerTypeFlags_MobileTouchController,
	},
	75: {
		id: "Macro6",
		controller_filter: ~RL.k_EControllerTypeFlags_MobileTouchController,
	},
	76: {
		id: "Macro7",
		controller_filter: ~RL.k_EControllerTypeFlags_MobileTouchController,
	},
	77: {
		id: "Macro1Finger",
		controller_filter: ~RL.k_EControllerTypeFlags_MobileTouchController,
	},
	78: {
		id: "Macro2Finger",
		controller_filter: ~RL.k_EControllerTypeFlags_MobileTouchController,
	},
	84: {
		id: "Count",
	},
};
export const VD = {
	0: {
		id: "None",
	},
	1: {
		id: "FullPress",
	},
	2: {
		id: "SoftPress",
	},
	3: {
		id: "StartPress",
	},
	4: {
		id: "Release",
	},
	5: {
		id: "LongPress",
	},
	6: {
		id: "DoublePress",
	},
	7: {
		id: "Analog",
	},
	8: {
		id: "Chord",
	},
	9: {
		id: "Count",
	},
};
export const z_ = {
	"#ControllerConfigurator_SourceMode_Switches_Click": {
		id: "#ControllerBinding_SwitchesClick",
		verbose: false,
	},
	"#ControllerConfigurator_SourceMode_Switches_Edge": {
		id: "#ControllerBinding_SwitchesEdge",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Switches_LeftGrip": {
		id: "#ControllerBinding_SwitchesLeftGrip",
	},
	"#ControllerConfigurator_SourceMode_Switches_RightGrip": {
		id: "#ControllerBinding_SwitchesRightGrip",
	},
	"#ControllerConfigurator_SourceMode_Switches_LeftGrip_Upper": {
		id: "#ControllerBinding_SwitchesUpperLeftGrip",
	},
	"#ControllerConfigurator_SourceMode_Switches_RightGrip_Upper": {
		id: "#ControllerBinding_SwitchesUpperRightGrip",
	},
	"#ControllerConfigurator_SourceMode_Switches_ActionSetAlwaysOn": {
		id: "#ControllerBinding_SwitchesActionSetAlwaysOn",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Dpad_Edge": {
		id: "#ControllerBinding_EdgeBindingDpad",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Dpad_Click": {
		id: "#ControllerBinding_DpadClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Dpad_Touch": {
		id: "#ControllerBinding_DpadTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Trigger_Edge": {
		id: "#ControllerBinding_TriggerAnalogThresholdBinding",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Trigger_Click": {
		id: "#ControllerBinding_TriggerClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_AbsoluteMouse_Click": {
		id: "#ControllerBinding_AbsMouseClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_AbsoluteMouse_DoubleTap": {
		id: "#ControllerBinding_DoubleTap",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_AbsoluteMouse_Touch": {
		id: "#ControllerBinding_AbsMouseTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_AbsoluteMouse_Dpad_E": {
		id: "#ControllerBinding_AbsMouseLeanRight",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_AbsoluteMouse_Dpad_W": {
		id: "#ControllerBinding_AbsMouseLeanLeft",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_TrackPadToCameraAngles_Click": {
		id: "#ControllerBinding_AbsMouseClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_TrackPadToCameraAngles_DoubleTap": {
		id: "#ControllerBinding_DoubleTap",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_TrackPadToCameraAngles_Touch": {
		id: "#ControllerBinding_AbsMouseTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_TrackPadToCameraAngles_Dpad_E": {
		id: "#ControllerBinding_AbsMouseLeanRight",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_TrackPadToCameraAngles_Dpad_W": {
		id: "#ControllerBinding_AbsMouseLeanLeft",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_MouseJoystick_Click": {
		id: "#ControllerBinding_MouseJoystickClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_MouseJoystick_DoubleTap": {
		id: "#ControllerBinding_DoubleTap",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_MouseJoystick_Touch": {
		id: "#ControllerBinding_AbsMouseTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_MouseJoystick_Dpad_E": {
		id: "#ControllerBinding_MouseJoystickLeanRight",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_MouseJoystick_Dpad_W": {
		id: "#ControllerBinding_MouseJoystickLeanLeft",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_JoystickMove_Edge": {
		id: "#ControllerBinding_EdgeBinding_joystick_move",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_JoystickMove_Click": {
		id: "#ControllerBinding_Click_joystick_move",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_JoystickMove_Touch": {
		id: "#ControllerBinding_JoystickMoveTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_JoystickMouse_Edge": {
		id: "#ControllerBinding_EdgeBinding_joystick_mouse",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_JoystickMouse_Click": {
		id: "#ControllerBinding_Click_joystick_mouse",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_JoystickMouse_Touch": {
		id: "#ControllerBinding_AbsMouseTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_JoystickToCameraAngles_Edge": {
		id: "#ControllerBinding_EdgeBinding_joystick_mouse",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_JoystickToCameraAngles_Click": {
		id: "#ControllerBinding_Click_joystick_mouse",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_JoystickToCameraAngles_Touch": {
		id: "#ControllerBinding_AbsMouseTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_Click": {
		id: "#ControllerBinding_ScrollWheelClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_Touch": {
		id: "#ControllerBinding_ScrollWheelTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_Clockwise": {
		id: "#ControllerBinding_ScrollWheelClockwise",
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_CounterClockwise": {
		id: "#ControllerBinding_ScrollWheelCounterClockwise",
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_ScrollWheel_List0": {
		id: "#ControllerBinding_ScrollWheelList0",
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_ScrollWheel_List1": {
		id: "#ControllerBinding_ScrollWheelList1",
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_ScrollWheel_List2": {
		id: "#ControllerBinding_ScrollWheelList2",
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_ScrollWheel_List3": {
		id: "#ControllerBinding_ScrollWheelList3",
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_ScrollWheel_List4": {
		id: "#ControllerBinding_ScrollWheelList4",
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_ScrollWheel_List5": {
		id: "#ControllerBinding_ScrollWheelList5",
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_ScrollWheel_List6": {
		id: "#ControllerBinding_ScrollWheelList6",
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_ScrollWheel_List7": {
		id: "#ControllerBinding_ScrollWheelList7",
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_ScrollWheel_List8": {
		id: "#ControllerBinding_ScrollWheelList8",
	},
	"#ControllerConfigurator_SourceMode_ScrollWheel_ScrollWheel_List9": {
		id: "#ControllerBinding_ScrollWheelList9",
	},
	"#ControllerConfigurator_SourceMode_MouseRegion_Click": {
		id: "#ControllerBinding_MouseRegionClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_MouseRegion_Edge": {
		id: "#ControllerBinding_EdgeBindingMouseRegion",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_MouseRegion_Touch": {
		id: "#ControllerBinding_MouseRegionTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_Click": {
		id: "#ControllerBinding_RadialMenuClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_Touch": {
		id: "#ControllerBinding_RadialMenuTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button0": {
		id: "#ControllerBinding_RadialMenuButton0",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button1": {
		id: "#ControllerBinding_RadialMenuButton1",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button2": {
		id: "#ControllerBinding_RadialMenuButton2",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button3": {
		id: "#ControllerBinding_RadialMenuButton3",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button4": {
		id: "#ControllerBinding_RadialMenuButton4",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button5": {
		id: "#ControllerBinding_RadialMenuButton5",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button6": {
		id: "#ControllerBinding_RadialMenuButton6",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button7": {
		id: "#ControllerBinding_RadialMenuButton7",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button8": {
		id: "#ControllerBinding_RadialMenuButton8",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button9": {
		id: "#ControllerBinding_RadialMenuButton9",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button10": {
		id: "#ControllerBinding_RadialMenuButton10",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button11": {
		id: "#ControllerBinding_RadialMenuButton11",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button12": {
		id: "#ControllerBinding_RadialMenuButton12",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button13": {
		id: "#ControllerBinding_RadialMenuButton13",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button14": {
		id: "#ControllerBinding_RadialMenuButton14",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button15": {
		id: "#ControllerBinding_RadialMenuButton15",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button16": {
		id: "#ControllerBinding_RadialMenuButton16",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button17": {
		id: "#ControllerBinding_RadialMenuButton17",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button18": {
		id: "#ControllerBinding_RadialMenuButton18",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button19": {
		id: "#ControllerBinding_RadialMenuButton19",
	},
	"#ControllerConfigurator_SourceMode_RadialMenu_TouchMenu_Button20": {
		id: "#ControllerBinding_RadialMenuButton20",
	},
	"#ControllerConfigurator_SourceMode_FlickStick_Click": {
		id: "#ControllerBinding_FlickStickClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_FlickStick_Edge": {
		id: "#ControllerBinding_FlickStickEdge",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_FlickStick_Touch": {
		id: "#ControllerBinding_FlickStickTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_FlickStickToCameraAngles_Click": {
		id: "#ControllerBinding_FlickStickClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_FlickStickToCameraAngles_Edge": {
		id: "#ControllerBinding_FlickStickEdge",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_FlickStickToCameraAngles_Touch": {
		id: "#ControllerBinding_FlickStickTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_2DScrollwheel_Click": {
		id: "#ControllerBinding_2DScrollwheelClick",
	},
	"#ControllerConfigurator_SourceMode_2DScrollwheel_DoubleTap": {
		id: "#ControllerBinding_2DScrollwheelDoubleTap",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_2DScrollwheel_Touch": {
		id: "#ControllerBinding_2DScrollwheelTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button0": {
		id: "#ControllerBinding_HotbarTouchMenu_Button0",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button1": {
		id: "#ControllerBinding_HotbarTouchMenu_Button1",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button2": {
		id: "#ControllerBinding_HotbarTouchMenu_Button2",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button3": {
		id: "#ControllerBinding_HotbarTouchMenu_Button3",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button4": {
		id: "#ControllerBinding_HotbarTouchMenu_Button4",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button5": {
		id: "#ControllerBinding_HotbarTouchMenu_Button5",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button6": {
		id: "#ControllerBinding_HotbarTouchMenu_Button6",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button7": {
		id: "#ControllerBinding_HotbarTouchMenu_Button7",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button8": {
		id: "#ControllerBinding_HotbarTouchMenu_Button8",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button9": {
		id: "#ControllerBinding_HotbarTouchMenu_Button9",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button10": {
		id: "#ControllerBinding_HotbarTouchMenu_Button10",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button11": {
		id: "#ControllerBinding_HotbarTouchMenu_Button11",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button12": {
		id: "#ControllerBinding_HotbarTouchMenu_Button12",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button13": {
		id: "#ControllerBinding_HotbarTouchMenu_Button13",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button14": {
		id: "#ControllerBinding_HotbarTouchMenu_Button14",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_TouchMenu_Button15": {
		id: "#ControllerBinding_HotbarTouchMenu_Button15",
	},
	"#ControllerConfigurator_SourceMode_Hotbar_Touch": {
		id: "#ControllerBinding_HotbarTouchMenu_Touch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Hotbar_Click": {
		id: "#ControllerBinding_HotbarClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Hotbar_Edge": {
		id: "#ControllerBinding_HotbarEdge",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button0": {
		id: "#ControllerBinding_TouchMenuButton0",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button1": {
		id: "#ControllerBinding_TouchMenuButton1",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button2": {
		id: "#ControllerBinding_TouchMenuButton2",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button3": {
		id: "#ControllerBinding_TouchMenuButton3",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button4": {
		id: "#ControllerBinding_TouchMenuButton4",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button5": {
		id: "#ControllerBinding_TouchMenuButton5",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button6": {
		id: "#ControllerBinding_TouchMenuButton6",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button7": {
		id: "#ControllerBinding_TouchMenuButton7",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button8": {
		id: "#ControllerBinding_TouchMenuButton8",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button9": {
		id: "#ControllerBinding_TouchMenuButton9",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button10": {
		id: "#ControllerBinding_TouchMenuButton10",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button11": {
		id: "#ControllerBinding_TouchMenuButton11",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button12": {
		id: "#ControllerBinding_TouchMenuButton12",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button13": {
		id: "#ControllerBinding_TouchMenuButton13",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button14": {
		id: "#ControllerBinding_TouchMenuButton14",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_TouchMenu_Button15": {
		id: "#ControllerBinding_TouchMenuButton15",
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_Click": {
		id: "#ControllerBinding_TouchMenuClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_DoubleTap": {
		id: "#ControllerBinding_TouchMenuDoubleTap",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_TouchMenu_Touch": {
		id: "#ControllerBinding_TouchMenuTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_SingleButton_Click": {
		id: "#ControllerBinding_SingleButtonClick",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_SingleButton_Touch": {
		id: "#ControllerBinding_SingleButtonTouch",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Gyro_To_Mouse_Dpad_E": {
		id: "#ControllerBinding_AbsMouseLeanRight",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Gyro_To_Mouse_Dpad_W": {
		id: "#ControllerBinding_AbsMouseLeanLeft",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Gyro_To_JoystickCamera_Dpad_E": {
		id: "#ControllerBinding_AbsMouseLeanRight",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Gyro_To_JoystickCamera_Dpad_W": {
		id: "#ControllerBinding_AbsMouseLeanLeft",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Gyro_To_JoystickDeflection_Dpad_E": {
		id: "#ControllerBinding_AbsMouseLeanRight",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Gyro_To_JoystickDeflection_Dpad_W": {
		id: "#ControllerBinding_AbsMouseLeanLeft",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Switches_CaptureButton": {
		id: "#ControllerConfigurator_SourceMode_Switches_CaptureButton",
	},
	"#ControllerConfigurator_SourceMode_Switches_Macro0": {
		id: "#ControllerConfigurator_SourceMode_Switches_Macro0",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Switches_Macro1": {
		id: "#ControllerConfigurator_SourceMode_Switches_Macro1",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Switches_Macro2": {
		id: "#ControllerConfigurator_SourceMode_Switches_Macro2",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Switches_Macro3": {
		id: "#ControllerConfigurator_SourceMode_Switches_Macro3",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Switches_Macro4": {
		id: "#ControllerConfigurator_SourceMode_Switches_Macro4",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Switches_Macro5": {
		id: "#ControllerConfigurator_SourceMode_Switches_Macro5",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Switches_Macro6": {
		id: "#ControllerConfigurator_SourceMode_Switches_Macro6",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Switches_Macro7": {
		id: "#ControllerConfigurator_SourceMode_Switches_Macro7",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Switches_Macro1Finger": {
		id: "#ControllerConfigurator_SourceMode_Switches_Macro1Finger",
		verbose: true,
	},
	"#ControllerConfigurator_SourceMode_Switches_Macro2Finger": {
		id: "#ControllerConfigurator_SourceMode_Switches_Macro2Finger",
		verbose: true,
	},
};
function B(e, t, r) {
	const n = Dd[t];
	switch (e) {
		case 0:
			return n.directional;
		case 1:
			return n.analog && !n.directional && (!r || !n.trigger);
		case 2:
			return !n.directional || (r && n.trigger);
		default:
			return false;
	}
}
export const X9 = [
	{
		key: 0,
		id: "#ControllerActionKey_Change_Preset",
		set: true,
		baseSet: true,
	},
	{
		key: 25,
		id: "#ControllerActionKey_Add_ActionSet_Layer",
		set: true,
		addsLayer: true,
	},
	{
		key: 26,
		id: "#ControllerActionKey_Remove_ActionSet_Layer",
		set: true,
		removesLayer: true,
	},
	{
		key: 27,
		id: "#ControllerActionKey_Hold_ActionSet_Layer",
		set: true,
		addsLayer: true,
		removesLayer: true,
	},
	{
		key: 1,
		id: "#ControllerActionKey_Show_Keyboard",
		util: true,
	},
	{
		key: 2,
		id: "#ControllerActionKey_Screenshot",
		util: true,
	},
	{
		key: 3,
		id: "#ControllerActionKey_Mouse_Position",
		mouse: true,
		mouseAbs: true,
	},
	{
		key: 36,
		id: "#ControllerActionKey_Mouse_Delta",
		mouse: true,
	},
	{
		key: 37,
		id: "#ControllerActionKey_Camera_Horizon_Reset",
		mouse: true,
	},
	{
		key: 38,
		id: "#ControllerActionKey_DotsPer360CalibrationSpin",
		mouse: true,
	},
	{
		key: 39,
		id: "#ControllerActionKey_Camera_TurnToFaceDirection",
		mouse: true,
	},
	{
		key: 4,
		id: "#ControllerActionKey_Toggle_Magnifier",
		util: true,
	},
	{
		key: 15,
		id: "#ControllerActionKey_Controller_PowerOff",
		controller: true,
	},
	{
		key: 16,
		id: "#ControllerActionKey_BigPicture_Minimize",
		controller: true,
	},
	{
		key: 17,
		id: "#ControllerActionKey_BigPicture_Open",
		na: true,
	},
	{
		key: 18,
		id: "#ControllerActionKey_BigPicture_Quit",
		na: true,
	},
	{
		key: 19,
		id: "#ControllerActionKey_Host_Suspend",
		system: true,
	},
	{
		key: 20,
		id: "#ControllerActionKey_Host_PowerOff",
		system: true,
	},
	{
		key: 21,
		id: "#ControllerActionKey_Host_Restart",
		system: true,
	},
	{
		key: 23,
		id: "#ControllerActionKey_Set_LED",
		led: true,
	},
	{
		key: 28,
		id: "#ControllerActionKey_Toggle_Lizard_Mode",
		controller: true,
	},
	{
		key: 29,
		id: "#ControllerActionKey_Layer_Empty_Binding",
	},
	{
		key: 30,
		id: "#ControllerActionKey_Quit_Application",
		system: true,
	},
	{
		key: 31,
		id: "#ControllerActionKey_Change_Player_Number",
		controller: true,
		playerNumber: true,
	},
	{
		key: 32,
		id: "#ControllerActionKey_Change_TouchscreenMode_Hover",
		controller: true,
	},
	{
		key: 33,
		id: "#ControllerActionKey_Change_TouchscreenMode_RightClick",
		controller: true,
	},
	{
		key: 34,
		id: "#ControllerActionKey_Change_TouchscreenMode_LeftClick",
		controller: true,
	},
	{
		key: 35,
		id: "#ControllerActionKey_Change_TouchscreenMode_MiddleClick",
		controller: true,
	},
	{
		key: 40,
		id: "#ControllerActionKey_Change_TouchscreenMode_Native",
		controller: true,
	},
	{
		key: 44,
		id: "#ControllerActionKey_Change_TouchscreenMode_None",
		controller: true,
	},
	{
		key: 46,
		id: "#ControllerActionKey_GR_Marker",
		system: true,
	},
	{
		key: 45,
		id: "#ControllerActionKey_GR_Toggle",
		system: true,
	},
	{
		key: 47,
		id: "#ControllerActionKey_GR_Clip",
		system: true,
	},
	{
		key: 49,
		id: "#ControllerActionKey_System_Key_1",
	},
	{
		key: 41,
		id: "#ControllerActionKey_Screen_Brightness_Up",
	},
	{
		key: 42,
		id: "#ControllerActionKey_Screen_Brightness_Down",
	},
	{
		key: 43,
		id: "#ControllerActionKey_Empty_Sub_Command",
	},
];
export const $$ = _(X9);
export const TK = [
	{
		key: 32767,
		id: "None",
		usableForCursorVisibilityOptions: true,
		cursorBackendKey: "",
		usableForSetCloning: true,
		cloningBackendKey: undefined,
	},
	{
		key: 32766,
		id: "NextSet",
		usableForCursorVisibilityOptions: false,
		usableForSetCloning: false,
	},
	{
		key: 32765,
		id: "PreviousSet",
		usableForCursorVisibilityOptions: true,
		cursorBackendKey: "PrevActionSet",
		usableForSetCloning: false,
	},
];
export const TW = _(TK);
export function U$(e, t) {
	if (e == null) {
		return [];
	}
	const r = e.action_binding_types;
	if (r == null) {
		return [];
	}
	const n = [];
	for (let e of r) {
		if (e.key === t && e.actions != null) {
			n.push(...e.actions);
		}
	}
	return n;
}
export function K7(e) {
	return (
		e?.some((e) => !e?.legacy_set || e?.layers?.some((e) => !e?.legacy_set)) ??
		false
	);
}
export function QQ(e, t, r) {
	return (
		e == null ||
		e == null ||
		(e?.mode == null && t.eMode == 0) ||
		(e.mode == t.eMode &&
			(!t.modeid || e.modeid == t.modeid) &&
			(!r || !t.modeid || e.modeid != t.modeid) &&
			((e.game_action == null && t.gameAction == null) ||
				(e.game_action?.action_set_key ==
					(t.gameAction?.layerSet ?? t.gameAction?.baseSet)?.key &&
					e.game_action?.action_key == t.gameAction?.action?.key)))
	);
}
export function q8(e, t) {
	if ((e == null || t == null) && e !== t) {
		return false;
	}
	if (e.type != t.type) {
		return false;
	}
	switch (e.type) {
		case d.N.k_EControllerBindingType_None:
			return true;
		case d.N.k_EControllerBindingType_Key:
			return u((0, c.HO)(e.keyboard_key), (0, c.HO)(t.keyboard_key));
		case d.N.k_EControllerBindingType_MouseButton:
			return u((0, c.HO)(e.mouse_button), (0, c.HO)(t.mouse_button));
		case d.N.k_EControllerBindingType_Gamepad:
			return u((0, c.HO)(e.gamepad_button), (0, c.HO)(t.gamepad_button));
		case d.N.k_EControllerBindingType_Mousewheel:
			return u((0, c.HO)(e.mouse_wheel), (0, c.HO)(t.mouse_wheel));
		case d.N.k_EControllerBindingType_Modeshift:
			return u((0, c.HO)(e.mode_shift), (0, c.HO)(t.mode_shift));
		case d.N.k_EControllerBindingType_GameAction:
			return u((0, c.HO)(e.game_action), (0, c.HO)(t.game_action));
		case d.N.k_EControllerBindingType_ControllerAction:
			return e.controller_action.action == t.controller_action.action;
		default:
			return false;
	}
}
export function yQ(e) {
	return Dd[e].trackpad;
}
function F(e) {
	const t = Dd[e];
	return t.analog && t.directional && !t.trackpad && !t.gyro;
}
function G(e) {
	return Dd[e].gyro;
}
function O(e) {
	const t = Dd[e];
	return !t.analog && t.directional;
}
export const rm = 241100;
const L = 413080;
const z = 413090;
const x = 413100;
const U = 443510;
const W = 769;
export function bp(e) {
	return e == rm || e == L || e == z || e == x || e == U || e == W;
}
export function Bv(e, t, r, n, i) {
	const a = [];
	const s =
		r != null
			? [
					{
						baseSet: t,
						layerSet: r,
					},
					{
						baseSet: t,
					},
				]
			: [
					{
						baseSet: t,
					},
				];
	for (const t of s) {
		const r = t.layerSet ?? t.baseSet;
		if (r != null) {
			for (const n of r.action_binding_types) {
				if (B(n.key, e, false)) {
					for (const i of n.actions) {
						const n = {
							baseSet: t.baseSet,
							layerSet: t.layerSet,
							action: i,
						};
						for (const s of i.modes) {
							const o = i.modes.length > 1 && s != i.modes[0];
							if (s == 26) {
								if (!F(e)) {
									continue;
								}
								a.push({
									gameAction: n,
									eMode: s,
								});
							} else if (s == 28) {
								if (!yQ(e)) {
									continue;
								}
								a.push({
									gameAction: n,
									eMode: s,
								});
							} else if (s == 25) {
								if (!G(e)) {
									continue;
								}
								a.push({
									gameAction: n,
									eMode: s,
								});
							} else if (s == 27) {
								if (G(e)) {
									continue;
								}
								if (o) {
									a.push({
										gameAction: n,
										eMode: s,
										strDisplay: (0, Localize)(
											"#ControllerConfigurator_SourceMode_FlickStick_Action_Title_1",
											i.display_name,
										),
										bMutatedActionMode: o,
									});
								} else {
									a.push({
										gameAction: n,
										eMode: s,
									});
								}
							} else if (s == 22) {
								if (!G(e)) {
									continue;
								}
								a.push({
									gameAction: n,
									eMode: s,
									strDisplay: (0, Localize)(
										"#ControllerConfigurator_SourceMode_GyroToMouse_Action_Title_1",
										i.display_name,
									),
									bMutatedActionMode: o,
								});
							} else if (s == 17) {
								if (G(e)) {
									continue;
								}
								a.push({
									gameAction: n,
									eMode: s,
									strDisplay: (0, Localize)(
										"#ControllerConfigurator_SourceMode_FlickStick_Action_Title_1",
										i.display_name,
									),
									bMutatedActionMode: o,
								});
							} else if (s == 12) {
								if (!yQ(e) && e != 10) {
									continue;
								}
								a.push({
									gameAction: n,
									eMode: s,
									strDisplay: (0, Localize)(
										"#ControllerConfigurator_SourceMode_MouseJoystick_Action_Title_1",
										i.display_name,
									),
									bMutatedActionMode: o,
								});
							} else if (s != 0) {
								let t = s;
								if (s == 4) {
									if (F(e)) {
										t = 7;
									}
								} else if (s == 29) {
									if (yQ(e)) {
										t = 28;
									} else if (G(e)) {
										t = 25;
									} else if (F(e) || O(e)) {
										t = 26;
									}
								}
								a.push({
									gameAction: n,
									eMode: t,
								});
							} else if (r == t.baseSet) {
								let e = 20;
								a.push({
									gameAction: n,
									eMode: e,
								});
							}
						}
					}
				}
			}
		}
	}
	return a;
}
export function zB(e, t, r, n) {
	const i = [];
	if (r != null) {
		i.push({
			eMode: 0,
			strDisplay: (0, Localize)(
				"#ControllerConfigurator_SourceMode_LayerInherit_Title",
				n,
			),
		});
	} else {
		i.push({
			eMode: 0,
		});
	}
	return i;
}
export function KB(e) {
	const t = p.v3.EditingConfiguration?.modes;
	const r = [];
	if (
		(function (e) {
			switch (e) {
				case 18:
				case 17:
				case 3:
				case 12:
				case 1:
				case 11:
				case 2:
				case 10:
				case 16:
				case 4:
				case 13:
					return true;
				default:
					return false;
			}
		})(e)
	) {
		t?.forEach((e) => {
			const t = e.settings.find((e) => e.key == 129)?.int_value;
			const n = (0, g._Q)(e.mode);
			if (t != 1 && n) {
				const t = k$[e.mode]?.id;
				let n =
					e.friendlyname && e.friendlyname.length
						? e.friendlyname
						: (0, Localize)(
								"#ControllerConfigurator_SourceMode_UnnamedVirtualMenu_Title",
								GW(t),
							);
				r.push({
					eMode: e.mode,
					modeid: e.modeid,
					strDisplay: n,
				});
			}
		});
		return r;
	} else {
		return r;
	}
}
const Q = {
	0: undefined,
	1: [4, 6, 12, 17, 1, 3, 9, 18, 13, 15, 14, 11, 19],
	2: [4, 6, 12, 17, 1, 3, 9, 18, 13, 15, 14, 11, 19],
	11: [4, 6, 12, 17, 1, 3, 9, 18, 13, 15, 14, 11, 19],
	3: [1, 18, 14, 19, 7, 17, 9],
	12: [1, 18, 14, 19, 7, 17, 9],
	4: [3],
	13: [1, 18, 19],
	5: undefined,
	6: [10],
	7: [10],
	10: [22, 23, 24, 4, 6, 14, 11, 19],
	16: undefined,
	8: undefined,
	9: undefined,
	14: undefined,
	15: undefined,
	17: undefined,
	18: undefined,
};
const Z = {
	0: undefined,
	1: [4, 12],
	2: [4, 12],
	11: [4, 12],
	3: [1, 6, 7, 17, 9, 14, 19, 13],
	12: [1, 6, 7, 17, 9, 14, 19, 13],
	4: [3, 1, 6, 19, 14],
	13: [1, 3, 6, 19, 14],
	5: [1, 3, 4, 12, 6, 7, 17, 9, 14, 19, 13, 18],
	6: [10],
	7: [10],
	10: [22, 23, 24, 4, 12],
	16: [4, 12, 1, 6, 7, 9, 14, 19, 13, 18],
	8: [1, 3, 4, 12, 6, 7, 17, 9, 14, 19, 13, 18],
	9: [1, 3, 4, 12, 6, 7, 17, 9, 14, 19, 13, 18],
	14: [1, 3, 4, 12, 6, 7, 17, 9, 14, 19, 13, 18],
	15: [1, 3, 4, 12, 6, 7, 17, 9, 14, 19, 13, 18],
	17: [4, 12, 1, 6, 7, 17, 9, 14, 19, 13, 18],
	18: [4, 12, 1, 6, 7, 17, 9, 14, 19, 13, 18],
};
export const Sv = {
	0: undefined,
	1: [4, 6, 12, 17, 1, 3, 9, 18, 13, 15, 14, 11, 19],
	2: [4, 6, 12, 17, 1, 3, 9, 18, 13, 15, 14, 11, 19],
	11: [4, 6, 12, 17, 1, 3, 9, 18, 13, 15, 14, 11, 19],
	3: [1, 6, 7, 17, 9, 13, 14, 11, 19],
	12: [1, 6, 7, 17, 9, 13, 14, 11, 19],
	4: [1, 3, 6, 14],
	13: [1, 3, 6, 19, 14],
	5: [1, 3, 4, 12, 6, 7, 17, 9, 14, 19, 13, 18],
	6: [10],
	7: [10],
	10: [1, 22, 23, 24, 4, 12, 6, 11, 13, 14, 19, 18],
	16: [1, 22, 23, 24, 4, 12, 6, 11, 13, 14, 19, 18],
	8: [1, 3, 4, 12, 6, 7, 17, 9, 14, 19, 13, 18],
	9: [1, 3, 4, 12, 6, 7, 17, 9, 14, 19, 13, 18],
	14: [1, 3, 4, 12, 6, 7, 17, 9, 14, 19, 13, 18],
	15: [1, 3, 4, 12, 6, 7, 17, 9, 14, 19, 13, 18],
	17: [4, 12, 1, 6, 7, 17, 9, 14, 11, 19, 13, 18],
	18: [4, 12, 1, 6, 7, 17, 9, 14, 11, 19, 13, 18],
};
const K = [11, 14, 19];
const _X = [8, 6, 12];
export function ON(e, t, r, n, i, a) {
	let s = [];
	const o =
		r != null
			? [
					{
						baseSet: t,
						layerSet: r,
					},
					{
						baseSet: t,
					},
				]
			: [
					{
						baseSet: t,
					},
				];
	const l = K7(Object.values(o[0]));
	if (l) {
		if (!i) {
			Q[e]?.forEach((e) => {
				s.push({
					eMode: e,
				});
			});
		}
	} else {
		if (i) {
			Z[e]?.forEach((e) => {
				s.push({
					eMode: e,
				});
			});
		} else {
			Sv[e]?.forEach((e) => {
				s.push({
					eMode: e,
				});
			});
		}
		if (r != null) {
			s.push({
				eMode: 20,
			});
		}
	}
	if (bp(n)) {
		s = s.filter((e) => !K.includes(e.eMode));
		if (!l) {
			s = s.filter((e) => !_X.includes(e.eMode));
		}
	}
	if (a) {
		const e = s.find((e) => e.eMode === a?.mode);
		if ((!l || !a?.game_action?.action_key) && !e) {
			if (a?.mode) {
				s.push({
					eMode: a?.mode,
				});
			} else {
				s.push({
					eMode: 0,
				});
			}
		}
	}
	return s.sort((e, t) =>
		k$[e.eMode].sortOrder > k$[t.eMode].sortOrder ? 1 : -1,
	);
}
const $ = [
	{
		id: "Off",
		value: 0,
	},
	{
		id: "Low",
		value: 1,
	},
	{
		id: "Medium",
		value: 2,
	},
	{
		id: "High",
		value: 3,
	},
];
const ee = [
	{
		id: "ActivatorPref",
		value: 5,
	},
	{
		id: "Off",
		value: 0,
	},
	{
		id: "Low",
		value: 1,
	},
	{
		id: "Medium",
		value: 2,
	},
	{
		id: "High",
		value: 3,
	},
];
const te = [
	{
		id: "Off",
		value: 0,
	},
	{
		id: "Low",
		value: 1,
	},
	{
		id: "Medium",
		value: 2,
	},
	{
		id: "High",
		value: 3,
	},
	{
		id: "None",
		value: 4,
	},
];
const re = [
	{
		id: "Off",
		value: 0,
	},
	{
		id: "TriggerDampeningRightSoft",
		value: 1,
	},
	{
		id: "TriggerDampeningLeftSoft",
		value: 2,
	},
	{
		id: "TriggerDampeningBothSoft",
		value: 3,
	},
	{
		id: "TriggerDampeningRightAlways",
		value: 4,
	},
	{
		id: "TriggerDampeningLeftAlways",
		value: 5,
	},
	{
		id: "TriggerDampeningBothAlways",
		value: 6,
	},
];
const ne = [
	{
		id: "LeftJoystick",
		value: 0,
	},
	{
		id: "RightJoystick",
		value: 1,
	},
	{
		id: "RelativeMouse",
		value: 2,
	},
];
const ie = [
	{
		id: "LeftJoystick",
		value: 0,
	},
	{
		id: "RightJoystick",
		value: 1,
	},
];
const ae = [
	{
		id: "Off",
		value: 0,
	},
	{
		id: "LeftJoystick",
		value: 1,
	},
	{
		id: "RightJoystick",
		value: 2,
	},
	{
		id: "CenterTrackpad",
		value: 3,
	},
	{
		id: "LeftTrackpad",
		value: 4,
	},
	{
		id: "RightTrackpad",
		value: 5,
	},
];
const se = [
	{
		id: "Cross",
		value: 0,
	},
	{
		id: "Circle",
		value: 1,
	},
	{
		id: "Square",
		value: 2,
	},
];
const oe = [
	{
		id: "Deadzone_None",
		value: 0,
	},
	{
		id: "Deadzone_Calibration",
		value: 1,
	},
	{
		id: "Deadzone_Custom",
		value: 2,
	},
];
const le = [
	{
		id: "Linear",
		value: 0,
	},
	{
		id: "Curve_1",
		value: 1,
	},
	{
		id: "Curve_2",
		value: 2,
	},
	{
		id: "Curve_3",
		value: 3,
	},
	{
		id: "Curve_4",
		value: 4,
	},
	{
		id: "Curve_Custom",
		value: 5,
	},
];
const ce = [
	{
		id: "Off",
		value: 0,
	},
	{
		id: "Linear",
		value: 1,
	},
	{
		id: "Curve_2",
		value: 2,
	},
	{
		id: "Curve_1",
		value: 3,
	},
];
const me = [
	{
		id: "LocalSpaceYaw",
		value: 0,
	},
	{
		id: "LocalSpaceRoll",
		value: 1,
	},
	{
		id: "LocalSpaceCombineYawAndRoll",
		value: 2,
	},
	{
		id: "LocalSpaceAdvanced",
		value: 3,
	},
	{
		id: "PlayerSpace",
		value: 4,
	},
	{
		id: "WorldSpace",
		value: 5,
	},
	{
		id: "LaserPointer",
		value: 6,
	},
];
const ue = [
	{
		id: "GyroNone",
		value: 0,
	},
	{
		id: "GyroTouchRight",
		value: 1,
	},
	{
		id: "GyroTouchLeft",
		value: 2,
	},
	{
		id: "GyroClickRight",
		value: 3,
	},
	{
		id: "GyroClickLeft",
		value: 4,
	},
	{
		id: "GyroBumperRight",
		value: 5,
	},
	{
		id: "GyroBumperLeft",
		value: 6,
	},
	{
		id: "GyroGripRight",
		value: 7,
	},
	{
		id: "GyroGripLeft",
		value: 8,
	},
	{
		id: "GyroRightTrigger",
		value: 9,
	},
	{
		id: "GyroLeftTrigger",
		value: 10,
	},
	{
		id: "GyroRightTriggerThreshold",
		value: 11,
	},
	{
		id: "GyroLeftTriggerThreshold",
		value: 12,
	},
	{
		id: "GyroA",
		value: 13,
	},
	{
		id: "GyroB",
		value: 14,
	},
	{
		id: "GyroX",
		value: 15,
	},
	{
		id: "GyroY",
		value: 16,
	},
	{
		id: "GyroLStick",
		value: 17,
	},
];
const de = [
	{
		id: "GyroNone",
		value: 0,
	},
	{
		id: "GyroTouchRight",
		value: 1,
	},
	{
		id: "GyroTouchLeft",
		value: 2,
	},
	{
		id: "GyroClickRight",
		value: 3,
	},
	{
		id: "GyroClickLeft",
		value: 4,
	},
	{
		id: "GyroBumperRight",
		value: 5,
	},
	{
		id: "GyroBumperLeft",
		value: 6,
	},
	{
		id: "GyroR4",
		value: 24,
	},
	{
		id: "GyroL4",
		value: 25,
	},
	{
		id: "GyroR5",
		value: 7,
	},
	{
		id: "GyroL5",
		value: 8,
	},
	{
		id: "GyroRightTrigger",
		value: 9,
	},
	{
		id: "GyroLeftTrigger",
		value: 10,
	},
	{
		id: "GyroRightTriggerThreshold",
		value: 11,
	},
	{
		id: "GyroLeftTriggerThreshold",
		value: 12,
	},
	{
		id: "GyroA",
		value: 13,
	},
	{
		id: "GyroB",
		value: 14,
	},
	{
		id: "GyroX",
		value: 15,
	},
	{
		id: "GyroY",
		value: 16,
	},
	{
		id: "GyroL3",
		value: 17,
	},
	{
		id: "GyroR3",
		value: 18,
	},
	{
		id: "GyroLStickTouch",
		value: 21,
	},
	{
		id: "GyroRStickTouch",
		value: 22,
	},
	{
		id: "GyroRStickRPadTouch",
		value: 23,
	},
	{
		id: "GyroView",
		value: 26,
	},
	{
		id: "GyroMenu",
		value: 27,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "GyroLeftStickDeflect",
		value: 32,
	},
	{
		id: "GyroRightStickDeflect",
		value: 33,
	},
	{
		id: "GyroLeftStickDeflectOrTouchLeft",
		value: 34,
	},
	{
		id: "GyroRightStickDeflectOrTouchRight",
		value: 35,
	},
	{
		id: "GyroLeftStickDeflectOrTouchLeftOrLPadTouch",
		value: 36,
	},
	{
		id: "GyroRightStickDeflectOrTouchRightOrRPadTouch",
		value: 37,
	},
];
const Ae = [
	{
		id: "GyroNone",
		value: 0,
	},
	{
		id: "GyroBumperRight",
		value: 5,
	},
	{
		id: "GyroBumperLeft",
		value: 6,
	},
	{
		id: "GyroRightTrigger",
		value: 9,
	},
	{
		id: "GyroLeftTrigger",
		value: 10,
	},
	{
		id: "GyroRightTriggerThreshold",
		value: 11,
	},
	{
		id: "GyroLeftTriggerThreshold",
		value: 12,
	},
	{
		id: "GyroCross",
		value: 13,
	},
	{
		id: "GyroCircle",
		value: 14,
	},
	{
		id: "GyroSquare",
		value: 15,
	},
	{
		id: "GyroTriangle",
		value: 16,
	},
	{
		id: "GyroTouchRight",
		value: 1,
	},
	{
		id: "GyroTouchCenter",
		value: 20,
	},
	{
		id: "GyroTouchLeft",
		value: 2,
	},
	{
		id: "GyroClickRight",
		value: 3,
	},
	{
		id: "GyroClickLeft",
		value: 4,
	},
	{
		id: "GyroLStick",
		value: 17,
	},
	{
		id: "GyroRStick",
		value: 18,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "GyroLeftStickDeflect",
		value: 32,
	},
	{
		id: "GyroRightStickDeflect",
		value: 33,
	},
];
const pe = [
	{
		id: "GyroNone",
		value: 0,
	},
	{
		id: "GyroBumperRight",
		value: 5,
	},
	{
		id: "GyroBumperLeft",
		value: 6,
	},
	{
		id: "GyroRightTrigger",
		value: 9,
	},
	{
		id: "GyroLeftTrigger",
		value: 10,
	},
	{
		id: "GyroRightTriggerThreshold",
		value: 11,
	},
	{
		id: "GyroLeftTriggerThreshold",
		value: 12,
	},
	{
		id: "GyroCross",
		value: 13,
	},
	{
		id: "GyroCircle",
		value: 14,
	},
	{
		id: "GyroSquare",
		value: 15,
	},
	{
		id: "GyroTriangle",
		value: 16,
	},
	{
		id: "GyroTouchRight",
		value: 1,
	},
	{
		id: "GyroTouchCenter",
		value: 20,
	},
	{
		id: "GyroTouchLeft",
		value: 2,
	},
	{
		id: "GyroClickRight",
		value: 3,
	},
	{
		id: "GyroClickLeft",
		value: 4,
	},
	{
		id: "GyroLStick",
		value: 17,
	},
	{
		id: "GyroRStick",
		value: 18,
	},
	{
		id: "GyroMute",
		value: 19,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "GyroLeftStickDeflect",
		value: 32,
	},
	{
		id: "GyroRightStickDeflect",
		value: 33,
	},
];
const ge = [
	{
		id: "GyroNone",
		value: 0,
	},
	{
		id: "GyroBumperRight",
		value: 5,
	},
	{
		id: "GyroBumperLeft",
		value: 6,
	},
	{
		id: "GyroRPaddle",
		value: 7,
	},
	{
		id: "GyroLPaddle",
		value: 8,
	},
	{
		id: "GyroRFn",
		value: 24,
	},
	{
		id: "GyroLFn",
		value: 25,
	},
	{
		id: "GyroRightTrigger",
		value: 9,
	},
	{
		id: "GyroLeftTrigger",
		value: 10,
	},
	{
		id: "GyroRightTriggerThreshold",
		value: 11,
	},
	{
		id: "GyroLeftTriggerThreshold",
		value: 12,
	},
	{
		id: "GyroCross",
		value: 13,
	},
	{
		id: "GyroCircle",
		value: 14,
	},
	{
		id: "GyroSquare",
		value: 15,
	},
	{
		id: "GyroTriangle",
		value: 16,
	},
	{
		id: "GyroTouchRight",
		value: 1,
	},
	{
		id: "GyroTouchCenter",
		value: 20,
	},
	{
		id: "GyroTouchLeft",
		value: 2,
	},
	{
		id: "GyroClickRight",
		value: 3,
	},
	{
		id: "GyroClickLeft",
		value: 4,
	},
	{
		id: "GyroLStick",
		value: 17,
	},
	{
		id: "GyroRStick",
		value: 18,
	},
	{
		id: "GyroMute",
		value: 19,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "GyroLeftStickDeflect",
		value: 32,
	},
	{
		id: "GyroRightStickDeflect",
		value: 33,
	},
];
const he = [
	{
		id: "GyroNone",
		value: 0,
	},
	{
		id: "GyroBumperRight",
		value: 5,
	},
	{
		id: "GyroBumperLeft",
		value: 6,
	},
	{
		id: "GyroRightTriggerNoQualifier",
		value: 11,
	},
	{
		id: "GyroLeftTriggerNoQualifier",
		value: 12,
	},
	{
		id: "GyroB",
		value: 13,
	},
	{
		id: "GyroA",
		value: 14,
	},
	{
		id: "GyroY",
		value: 15,
	},
	{
		id: "GyroX",
		value: 16,
	},
	{
		id: "GyroLStick",
		value: 17,
	},
	{
		id: "GyroRStick",
		value: 18,
	},
	{
		id: "GyroCapture",
		value: 19,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "GyroLeftStickDeflect",
		value: 32,
	},
	{
		id: "GyroRightStickDeflect",
		value: 33,
	},
];
const Ce = [
	{
		id: "Gyro_Yaw",
		value: 0,
	},
	{
		id: "Gyro_Roll",
		value: 1,
	},
	{
		id: "Gyro_YawAndRoll",
		value: 2,
	},
];
export const BC = [
	{
		id: "GyroOn",
		value: 1,
	},
	{
		id: "GyroOff",
		value: 0,
	},
	{
		id: "GyroToggle",
		value: 2,
	},
];
const fe = [
	{
		id: "Off",
		value: 0,
	},
	{
		id: "OnEnable",
		value: 1,
	},
	{
		id: "OnDisable",
		value: 2,
	},
	{
		id: "OnEnableAndDisable",
		value: 3,
	},
];
const be = [
	{
		id: "Trigger_Simple",
		value: 0,
	},
	{
		id: "Trigger_HairTrigger",
		value: 1,
	},
	{
		id: "Trigger_LongPressShort",
		value: 2,
	},
	{
		id: "Trigger_LongPressMedium",
		value: 3,
	},
	{
		id: "Trigger_LongPressLong",
		value: 4,
	},
	{
		id: "Trigger_LongPressExclusive",
		value: 5,
	},
];
const ye = [
	{
		id: "TouchMenu_ButtonBindings",
		value: 0,
	},
	{
		id: "TouchMenu_Button2",
		value: 2,
	},
	{
		id: "TouchMenu_Button4",
		value: 4,
	},
	{
		id: "TouchMenu_Button7",
		value: 7,
	},
	{
		id: "TouchMenu_Button9",
		value: 9,
	},
	{
		id: "TouchMenu_Button12",
		value: 12,
	},
	{
		id: "TouchMenu_Button13",
		value: 13,
	},
	{
		id: "TouchMenu_Button16",
		value: 16,
	},
];
const Se = [
	{
		id: "TouchMenu_ButtonClick",
		value: n.k_EMenuButtonPress,
	},
	{
		id: "TouchMenu_ButtonRelease",
		value: n.k_EMenuButtonRelease,
	},
	{
		id: "TouchMenu_TouchRelease",
		value: n.k_EMenuTouchRelease,
	},
	{
		id: "TouchMenu_TouchAlways",
		value: n.k_EMenuTouchAlways,
	},
];
const we = [
	{
		id: "FlickStick_SnapMode_NoSnap",
		value: 0,
	},
	{
		id: "FlickStick_SnapMode_Half",
		value: 1,
	},
	{
		id: "FlickStick_SnapMode_Quarter",
		value: 2,
	},
	{
		id: "FlickStick_SnapMode_Sixths",
		value: 3,
	},
	{
		id: "FlickStick_SnapMode_Eighths",
		value: 4,
	},
	{
		id: "FlickStick_SnapMode_ForwardOnly",
		value: 5,
	},
];
const Be = [
	{
		id: "AxisX",
		value: i.k_EControllerOutputAxisOmitY,
	},
	{
		id: "AxisY",
		value: i.k_EControllerOutputAxisOmitX,
	},
	{
		id: "AxisBoth",
		value: i.k_EControllerOutputAxisBoth,
	},
];
const ve = [
	{
		id: "AxisX",
		value: i.k_EControllerOutputAxisOmitY,
	},
	{
		id: "AxisY",
		value: i.k_EControllerOutputAxisOmitX,
	},
];
function Ie(e, t) {
	return (r, n, i) => {
		let a = true;
		e?.forEach((e) => {
			a = a && e.rgValues?.includes(r[e.eControllerSetting]?.int_value);
		});
		if (a) {
			return t;
		} else {
			return undefined;
		}
	};
}
function Ee(e, t) {
	return (r, n, i) => {
		let a = true;
		e?.forEach((e) => {
			a = a && e.rgValues?.includes(r[e.eControllerSetting]?.int_value);
		});
		if (a) {
			return undefined;
		} else {
			return t;
		}
	};
}
function Me(e) {
	return Ie(
		[
			{
				eControllerSetting: 25,
				rgValues: [1],
			},
		],
		e,
	);
}
function Te(e) {
	return Ie(
		[
			{
				eControllerSetting: 9,
				rgValues: [5],
			},
		],
		e,
	);
}
function Re(e, t) {
	return (r, n) => (mJ(n) & e ? t : undefined);
}
function ke(e, t) {
	return (r, n, i) => ((1 << i) & e ? t : undefined);
}
function De(e, t, r, n) {
	return (i, a, s) =>
		t?.includes(i[e].int_value) && (1 << s) & r ? n : undefined;
}
export const jg = {
	1: [
		{
			key: 24,
			id: "DPadLayout",
			choices: [
				{
					id: "RadialWithOverlap",
					value: 1,
				},
				{
					id: "RadialNoOverlap",
					value: 0,
				},
				{
					id: "AnalogEmulation",
					value: 2,
				},
				{
					id: "CrossGate",
					value: 3,
				},
			],
			sortOrder: 10,
			showOptionsDescs: true,
		},
		ke(KU.k_EInputSource_Trackpads, {
			key: 22,
			id: "RequiresClick",
			toggle: true,
			sortOrder: 33,
		}),
		De(24, [1], KU.k_EInputSource_Analog, {
			key: 29,
			id: "OverlapRegion",
			sortOrder: 11,
			showDesc: true,
		}),
		De(24, [2], KU.k_EInputSource_Analog, {
			key: 27,
			id: "AnalogEmulationDutyCyclePct",
			sortOrder: 50,
		}),
		De(24, [2], KU.k_EInputSource_Analog, {
			key: 28,
			id: "AnalogEmulationPeriod",
			sortOrder: 51,
		}),
		ke(KU.k_EInputSource_Analog, {
			key: 23,
			id: "Deadzone",
			sortOrder: 12,
			sectionId: "Deadzone",
		}),
		ke(KU.k_EInputSource_Analog, {
			key: 7,
			id: "EdgeBindingRadiusDpad",
			sortOrder: 60,
			sectionId: "EdgeBinding",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Analog, {
			key: 20,
			id: "EdgeBindingInvertDpad",
			toggle: true,
			sortOrder: 61,
			sectionId: "EdgeBinding",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 70,
			sectionId: "GyroEnableButton",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 66,
			id: "GyroNeutralAngleDpad",
			sortOrder: 71,
			sectionId: "Gyro",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 67,
			id: "GyroLockExtentsDpad",
			toggle: true,
			sortOrder: 72,
			sectionId: "Gyro",
			showDesc: true,
		}),
		{
			key: 4,
			id: "HapticIntensityDpad",
			choices: ee,
			sortOrder: 100,
			sectionId: "Haptic",
		},
	],
	18: [
		{
			key: 30,
			id: "Sensitivity2DScroll",
			sortOrder: 0,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 57,
			id: "Momentum2DScroll",
			choices: [
				{
					id: "Off",
					value: 0,
				},
				{
					id: "AxisBoth",
					value: 1,
				},
				{
					id: "AxisX",
					value: 2,
				},
				{
					id: "AxisY",
					value: 3,
				},
			],
			sortOrder: 2,
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 57,
					rgValues: [1, 2, 3],
				},
			],
			{
				key: 34,
				id: "Friction2DScroll",
				choices: te,
				sortOrder: 3,
			},
		),
		{
			key: 43,
			id: "Smoothing2DScroll",
			sortOrder: 1,
			sectionId: "Output",
		},
		{
			key: 45,
			id: "Rotation2DScroll",
			sortOrder: 4,
			sectionId: "Output",
			showDesc: true,
		},
		ke(KU.k_EInputSource_Gyros, {
			key: 64,
			id: "GyroAxis2DScroll",
			choices: Ce,
			sortOrder: 5,
			sectionId: "Gyro",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 60,
			sectionId: "GyroEnableButton",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		}),
	],
	6: [
		Ie(
			[
				{
					eControllerSetting: 8,
					rgValues: [2],
				},
			],
			{
				key: 30,
				id: "MouseSensitivity_joystick_move",
				sortOrder: 10,
			},
		),
		{
			key: 32,
			id: "HorizontalSensitivity_joystick_move",
			sortOrder: 17,
		},
		{
			key: 31,
			id: "VerticalSensitivity_joystick_move",
			sortOrder: 18,
		},
		{
			key: 9,
			id: "CurveExponent_joystick_move",
			choices: le,
			sortOrder: 20,
			showDesc: true,
			showOptionsDescs: true,
		},
		Te({
			key: 10,
			id: "CustomCurveExponent_joystick_move",
			sortOrder: 21,
		}),
		Re(RL.k_EControllerTypeFlags_SteamControllerV2, {
			key: 117,
			id: "MinAnalog_joystick_move",
			sortOrder: 31,
		}),
		Re(RL.k_EControllerTypeFlags_SteamControllerV2, {
			key: 118,
			id: "MaxAnalog_joystick_move",
			sortOrder: 32,
		}),
		Re(RL.k_EControllerTypeFlags_SteamControllerV2, {
			key: 119,
			id: "EnableAnalog_joystick_move",
			toggle: true,
			sortOrder: 33,
		}),
		ke(KU.k_EInputSource_Trackpads, {
			key: 15,
			id: "AdaptiveCentering_joystick_move",
			toggle: true,
			sortOrder: 40,
			showDesc: true,
		}),
		{
			key: 8,
			id: "OutputJoystick_joystick_move",
			choices: ne,
			sortOrder: 0,
			sectionId: "Output",
			showDesc: true,
		},
		{
			key: 21,
			id: "OutputAxis_joystick_move",
			choices: Be,
			sortOrder: 3,
			sectionId: "Output",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 21,
					rgValues: [
						i.k_EControllerOutputAxisOmitY,
						i.k_EControllerOutputAxisBoth,
					],
				},
			],
			{
				key: 41,
				id: "InvertX_joystick_move",
				toggle: true,
				sortOrder: 4,
				sectionId: "Output",
			},
		),
		Ie(
			[
				{
					eControllerSetting: 21,
					rgValues: [
						i.k_EControllerOutputAxisOmitX,
						i.k_EControllerOutputAxisBoth,
					],
				},
			],
			{
				key: 42,
				id: "InvertY_joystick_move",
				toggle: true,
				sortOrder: 5,
				sectionId: "Output",
			},
		),
		{
			key: 45,
			id: "Rotation_joystick_move",
			sortOrder: 40,
			sectionId: "Output",
			valueSuffixToken: "#Unit_Degree_Symbol",
			showDesc: true,
		},
		ke(KU.k_EInputSource_Gyros, {
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 13,
			sectionId: "Gyro",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 66,
			id: "GyroNeutralAngle_joystick_move",
			sortOrder: 15,
			sectionId: "Gyro",
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 90,
			valueSuffixToken: "#Unit_Degree_Symbol",
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 67,
			id: "GyroLockExtents_joystick_move",
			toggle: true,
			sortOrder: 16,
			sectionId: "Gyro",
		}),
		{
			key: 124,
			id: "DeadZoneEnable_Joystick",
			choices: oe,
			sortOrder: 6,
			sectionId: "Deadzone",
			sectionContainsViz: true,
			showOptionsDescs: true,
		},
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [1],
				},
			],
			{
				key: 12,
				id: "DeadZoneInnerRadius_joystick_move",
				sortOrder: 7,
				sectionId: "Deadzone",
				showDesc: true,
				visualizerType: "Deadzones_Default",
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 12,
				id: "DeadZoneInnerRadius_joystick_move",
				sortOrder: 8,
				sectionId: "Deadzone",
				showDesc: true,
				visualizerType: "Deadzones_Custom",
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 13,
				id: "DeadZoneOuterRadius_joystick_move",
				sortOrder: 9,
				sectionId: "Deadzone",
				showDesc: true,
				hiddenByViz: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 14,
				id: "DeadZoneShape_joystick_move",
				choices: se,
				sortOrder: 10,
				sectionId: "Deadzone",
				showOptionsDescs: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 127,
				id: "ShowAdvancedDeadzoneOptions",
				sortOrder: 11,
				sectionId: "Deadzone",
				toggle: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
				{
					eControllerSetting: 127,
					rgValues: [1],
				},
			],
			{
				key: 18,
				id: "AntiDeadZone_joystick_move",
				sortOrder: 12,
				sectionId: "Deadzone",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
				{
					eControllerSetting: 127,
					rgValues: [1],
				},
			],
			{
				key: 19,
				id: "AntiDeadZoneBuffer_joystick_move",
				sortOrder: 13,
				sectionId: "Deadzone",
				showDesc: true,
			},
		),
		{
			key: 7,
			id: "EdgeBindingRadius_joystick_move",
			sortOrder: 19,
			sectionId: "EdgeBinding",
			showDesc: true,
		},
		{
			key: 20,
			id: "EdgeBindingInvert_joystick_move",
			toggle: true,
			sortOrder: 20,
			sectionId: "EdgeBinding",
			showDesc: true,
		},
		{
			key: 3,
			id: "HapticIntensity_joystick_move",
			choices: $,
			sortOrder: 100,
			sectionId: "Haptic",
		},
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 158,
			id: "GyroButtonHapticEffect",
			choices: fe,
			sortOrder: 101,
			sectionId: "Haptic",
			showDesc: true,
			showOptionsDescs: true,
		}),
	],
	7: [
		{
			key: 30,
			id: "MouseSensitivity_joystick_mouse",
			sortOrder: 0,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 32,
			id: "HorizontalSensitivity_joystick_mouse",
			sortOrder: 20,
		},
		{
			key: 31,
			id: "VerticalSensitivity_joystick_mouse",
			sortOrder: 21,
		},
		{
			key: 9,
			id: "CurveExponent_joystick_mouse",
			choices: le,
			sortOrder: 30,
			showDesc: true,
			showOptionsDescs: true,
		},
		Te({
			key: 10,
			id: "CustomCurveExponent_joystick_mouse",
			sortOrder: 31,
		}),
		{
			key: 124,
			id: "DeadZoneEnable_Joystick",
			choices: oe,
			sortOrder: 70,
			sectionId: "Deadzone",
			showOptionsDescs: true,
		},
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [1],
				},
			],
			{
				key: 12,
				id: "DeadZoneInnerRadius_joystick_move",
				sortOrder: 71,
				sectionId: "Deadzone",
				showDesc: true,
				visualizerType: "Deadzones_Default",
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 12,
				id: "DeadZoneInnerRadius_joystick_mouse",
				sortOrder: 72,
				sectionId: "Deadzone",
				showDesc: true,
				visualizerType: "Deadzones_Custom",
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 13,
				id: "DeadZoneOuterRadius_joystick_mouse",
				sortOrder: 73,
				sectionId: "Deadzone",
				showDesc: true,
				hiddenByViz: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 14,
				id: "DeadZoneShape_joystick_mouse",
				choices: se,
				sortOrder: 71,
				sectionId: "Deadzone",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 127,
				id: "ShowAdvancedDeadzoneOptions",
				sortOrder: 73,
				sectionId: "Deadzone",
				toggle: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
				{
					eControllerSetting: 127,
					rgValues: [1],
				},
			],
			{
				key: 18,
				id: "AntiDeadZone_joystick_mouse",
				sortOrder: 74,
				sectionId: "Deadzone",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
				{
					eControllerSetting: 127,
					rgValues: [1],
				},
			],
			{
				key: 19,
				id: "AntiDeadZoneBuffer_joystick_mouse",
				sortOrder: 75,
				sectionId: "Deadzone",
				showDesc: true,
			},
		),
		{
			key: 7,
			id: "EdgeBindingRadius_joystick_mouse",
			sortOrder: 90,
			sectionId: "EdgeBinding",
			showDesc: true,
		},
		{
			key: 20,
			id: "EdgeBindingInvert_joystick_mouse",
			toggle: true,
			sortOrder: 91,
			sectionId: "EdgeBinding",
			showDesc: true,
		},
		{
			key: 21,
			id: "OutputAxis_joystick_mouse",
			choices: Be,
			sortOrder: 1,
			sectionId: "Output",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 21,
					rgValues: [
						i.k_EControllerOutputAxisOmitY,
						i.k_EControllerOutputAxisBoth,
					],
				},
			],
			{
				key: 41,
				id: "InvertX_joystick_mouse",
				toggle: true,
				sortOrder: 5,
				sectionId: "Output",
			},
		),
		Ie(
			[
				{
					eControllerSetting: 21,
					rgValues: [
						i.k_EControllerOutputAxisOmitX,
						i.k_EControllerOutputAxisBoth,
					],
				},
			],
			{
				key: 42,
				id: "InvertY_joystick_mouse",
				toggle: true,
				sortOrder: 6,
				sectionId: "Output",
			},
		),
		{
			key: 45,
			id: "Rotation_joystick_mouse",
			sortOrder: 80,
			sectionId: "Output",
			valueSuffixToken: "#Unit_Degree_Symbol",
			showDesc: true,
		},
		ke(KU.k_EInputSource_Gyros, {
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 80,
			sectionId: "Gyro",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 66,
			id: "GyroNeutralAngle_joystick_mouse",
			sortOrder: 82,
			sectionId: "Gyro",
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 67,
			id: "GyroLockExtents_joystick_mouse",
			toggle: true,
			sortOrder: 83,
			sectionId: "Gyro",
		}),
		{
			key: 3,
			id: "HapticIntensity_joystick_mouse",
			choices: $,
			sortOrder: 100,
			sectionId: "Haptic",
		},
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 158,
			id: "GyroButtonHapticEffect",
			choices: fe,
			sortOrder: 101,
			sectionId: "Haptic",
			showDesc: true,
			showOptionsDescs: true,
		}),
	],
	26: [
		Ee(
			[
				{
					eControllerSetting: 70,
					rgValues: [1],
				},
			],
			{
				key: 137,
				id: "JoystickToCameraAngles_AnglesToPixels",
				sortOrder: 0,
				sectionId: "AngleCalibration",
				valueSuffixToken: "#Unit_Pixels",
				showDesc: true,
			},
		),
		{
			key: 30,
			id: "JoystickToCameraAngles_MaxDegreesPerSecond",
			sortOrder: 10,
			showDesc: true,
			valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
		},
		{
			key: 32,
			id: "HorizontalSensitivity_joystick_mouse",
			sortOrder: 20,
		},
		{
			key: 31,
			id: "VerticalSensitivity_joystick_mouse",
			sortOrder: 21,
		},
		{
			key: 9,
			id: "CurveExponent_joystick_mouse",
			choices: le,
			sortOrder: 30,
			showDesc: true,
			showOptionsDescs: true,
		},
		Te({
			key: 10,
			id: "CustomCurveExponent_joystick_mouse",
			sortOrder: 31,
		}),
		{
			key: 124,
			id: "DeadZoneEnable_Joystick",
			choices: oe,
			sortOrder: 70,
			sectionId: "Deadzone",
			showOptionsDescs: true,
		},
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [1],
				},
			],
			{
				key: 12,
				id: "DeadZoneInnerRadius_joystick_move",
				sortOrder: 71,
				sectionId: "Deadzone",
				showDesc: true,
				visualizerType: "Deadzones_Default",
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 12,
				id: "DeadZoneInnerRadius_joystick_mouse",
				sortOrder: 72,
				sectionId: "Deadzone",
				showDesc: true,
				visualizerType: "Deadzones_Custom",
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 13,
				id: "DeadZoneOuterRadius_joystick_mouse",
				sortOrder: 73,
				sectionId: "Deadzone",
				showDesc: true,
				hiddenByViz: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 14,
				id: "DeadZoneShape_joystick_mouse",
				choices: se,
				sortOrder: 71,
				sectionId: "Deadzone",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
			],
			{
				key: 127,
				id: "ShowAdvancedDeadzoneOptions",
				sortOrder: 73,
				sectionId: "Deadzone",
				toggle: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
				{
					eControllerSetting: 127,
					rgValues: [1],
				},
			],
			{
				key: 18,
				id: "AntiDeadZone_joystick_mouse",
				sortOrder: 74,
				sectionId: "Deadzone",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
				{
					eControllerSetting: 127,
					rgValues: [1],
				},
			],
			{
				key: 19,
				id: "AntiDeadZoneBuffer_joystick_mouse",
				sortOrder: 75,
				sectionId: "Deadzone",
				showDesc: true,
			},
		),
		{
			key: 7,
			id: "EdgeBindingRadius_joystick_mouse",
			sortOrder: 90,
			sectionId: "EdgeBinding",
			showDesc: true,
		},
		{
			key: 20,
			id: "EdgeBindingInvert_joystick_mouse",
			toggle: true,
			sortOrder: 91,
			sectionId: "EdgeBinding",
			showDesc: true,
		},
		{
			key: 41,
			id: "InvertX_joystick_mouse",
			toggle: true,
			sortOrder: 5,
			sectionId: "Output",
		},
		{
			key: 42,
			id: "InvertY_joystick_mouse",
			toggle: true,
			sortOrder: 6,
			sectionId: "Output",
		},
		{
			key: 45,
			id: "Rotation_joystick_mouse",
			sortOrder: 80,
			sectionId: "Output",
			valueSuffixToken: "#Unit_Degree_Symbol",
			showDesc: true,
		},
		{
			key: 3,
			id: "HapticIntensity_joystick_mouse",
			choices: $,
			sortOrder: 100,
			sectionId: "Haptic",
		},
	],
	8: [
		{
			key: 30,
			id: "JoystickCameraMouseSensitivity",
			sortOrder: 0,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 9,
			id: "CurveExponentCameraMode",
			choices: [
				{
					id: "Linear",
					value: 0,
				},
				{
					id: "Curve_1",
					value: 1,
				},
				{
					id: "Curve_2",
					value: 2,
				},
				{
					id: "Curve_3",
					value: 3,
				},
				{
					id: "Curve_4",
					value: 4,
				},
			],
			sortOrder: 3,
			showOptionsDescs: true,
		},
		{
			key: 31,
			id: "VerticalSensitivityJoystickCamera",
			sortOrder: 4,
		},
		{
			key: 11,
			id: "SwipeDurationCameraMode",
			choices: $,
			sortOrder: 20,
		},
		{
			key: 63,
			id: "JoystickSmoothingCameraMode",
			toggle: true,
			sortOrder: 22,
		},
		{
			key: 41,
			id: "InvertXJoystickCamera",
			toggle: true,
			sortOrder: 10,
			sectionId: "Output",
		},
		{
			key: 42,
			id: "InvertYJoystickCamera",
			toggle: true,
			sortOrder: 11,
			sectionId: "Output",
		},
		{
			key: 8,
			id: "OutputJoystickCameraMode",
			choices: ne,
			sortOrder: 21,
			sectionId: "Output",
			showDesc: true,
		},
		ke(KU.k_EInputSource_Gyros, {
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 30,
			sectionId: "Gyro",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 64,
			id: "GyroAxisJoystickCamera",
			choices: Ce,
			sortOrder: 32,
			sectionId: "Gyro",
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 66,
			id: "GyroNeutralAngleJoystickCamera",
			sortOrder: 33,
			sectionId: "Gyro",
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 67,
			id: "GyroLockExtentsJoystickCamera",
			toggle: true,
			sortOrder: 34,
			sectionId: "Gyro",
		}),
		{
			key: 127,
			id: "ShowAdvancedDeadzoneOptions",
			sortOrder: 40,
		},
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
				{
					eControllerSetting: 127,
					rgValues: [1],
				},
			],
			{
				key: 18,
				id: "AntiDeadZoneJoystickCamera",
				sortOrder: 41,
				sectionId: "Deadzone",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 124,
					rgValues: [2],
				},
				{
					eControllerSetting: 127,
					rgValues: [1],
				},
			],
			{
				key: 19,
				id: "AntiDeadZoneBufferJoystickCamera",
				sortOrder: 42,
				sectionId: "Deadzone",
				showDesc: true,
			},
		),
		{
			key: 3,
			id: "HapticIntensityJoystickCameraMode",
			choices: $,
			sortOrder: 50,
			sectionId: "Haptic",
		},
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 158,
			id: "GyroButtonHapticEffect",
			choices: fe,
			sortOrder: 51,
			sectionId: "Haptic",
			showDesc: true,
			showOptionsDescs: true,
		}),
	],
	4: [
		ke(KU.k_EInputSource_Gyros, {
			key: 140,
			id: "GyroNaturalSensitivityAbsoluteMouse",
			sortOrder: 0,
			valueSuffixToken: "#Unit_Percent",
		}),
		(function (e, t) {
			return (r, n, i) => ((1 << i) & e ? undefined : t);
		})(KU.k_EInputSource_Gyros, {
			key: 30,
			id: "Sensitivity",
			sortOrder: 0,
			valueSuffixToken: "#Unit_Percent",
		}),
		{
			key: 31,
			id: "VerticalSensitivity",
			sortOrder: 1,
		},
		{
			key: 36,
			id: "Acceleration",
			choices: $,
			sortOrder: 2,
		},
		{
			key: 44,
			id: "MouseMoveThreshold",
			sortOrder: 80,
			showDesc: true,
		},
		{
			key: 42,
			id: "GyroInvertY",
			toggle: true,
			sortOrder: 10,
			sectionId: "Output",
		},
		{
			key: 41,
			id: "GyroInvertX",
			toggle: true,
			sortOrder: 11,
			sectionId: "Output",
		},
		{
			key: 45,
			id: "RotationAbsMouse",
			sortOrder: 44,
			sectionId: "Output",
			showDesc: true,
		},
		{
			key: 43,
			id: "SmoothingAbsMouse",
			sortOrder: 45,
			sectionId: "Output",
			showDesc: true,
		},
		{
			key: 78,
			id: "MouseTriggerClamp",
			choices: re,
			sortOrder: 60,
			sectionId: "TriggerDampening",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 78,
					rgValues: [1, 2, 3, 4, 5, 6],
				},
			],
			{
				key: 79,
				id: "MouseTriggerClampAmount",
				sortOrder: 61,
				sectionId: "TriggerDampening",
				showDesc: true,
			},
		),
		ke(KU.k_EInputSource_Gyros, {
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 35,
			sectionId: "Gyro",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 64,
			id: "GyroAxisAbsMouse",
			choices: Ce,
			sortOrder: 37,
			sectionId: "Gyro",
		}),
		De(64, [2], KU.k_EInputSource_Gyros, {
			key: 125,
			id: "GyroYawScaleAbsMouse",
			sortOrder: 38,
			sectionId: "Gyro",
			humanDisplayMin: -100,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		}),
		De(64, [2], KU.k_EInputSource_Gyros, {
			key: 126,
			id: "GyroRollScaleAbsMouse",
			sortOrder: 39,
			sectionId: "Gyro",
			humanDisplayMin: -100,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		}),
		De(64, [0, 1], KU.k_EInputSource_Gyros, {
			key: 13,
			id: "LeanSensitivityAbsMouse",
			sortOrder: 40,
			sectionId: "Gyro",
		}),
		ke(KU.k_EInputSource_Trackpads, {
			key: 33,
			id: "Trackball",
			toggle: true,
			sortOrder: 30,
			sectionId: "Trackpad",
			showDesc: true,
		}),
		De(33, [1], KU.k_EInputSource_Trackpads, {
			key: 34,
			id: "Friction",
			choices: te,
			sortOrder: 31,
			sectionId: "Trackpad",
		}),
		De(33, [1], KU.k_EInputSource_Trackpads, {
			key: 35,
			id: "VerticalFriction",
			sortOrder: 32,
			sectionId: "Trackpad",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Trackpads, {
			key: 48,
			id: "DoubleTapDuration",
			sortOrder: 50,
			sectionId: "Trackpad",
		}),
		ke(KU.k_EInputSource_Trackpads, {
			key: 38,
			id: "DoubleTapBeep",
			toggle: true,
			sortOrder: 51,
			sectionId: "Trackpad",
		}),
		ke(KU.k_EInputSource_Trackpads, {
			key: 40,
			id: "EdgeSpinScale",
			sortOrder: 81,
			sectionId: "Trackpad",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Trackpads, {
			key: 39,
			id: "EdgeSpinRadius",
			sortOrder: 82,
			sectionId: "Trackpad",
			showDesc: true,
		}),
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 3,
			id: "HapticIntensityAbsMouse",
			choices: $,
			sortOrder: 999,
			sectionId: "Haptic",
		}),
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 158,
			id: "GyroButtonHapticEffect",
			choices: fe,
			sortOrder: 1000,
			sectionId: "Haptic",
			showDesc: true,
			showOptionsDescs: true,
		}),
	],
	28: [
		Ee(
			[
				{
					eControllerSetting: 70,
					rgValues: [1],
				},
			],
			{
				key: 137,
				id: "TrackPadToCameraAngles_AnglesToPixels",
				sortOrder: 0,
				sectionId: "AngleCalibration",
				valueSuffixToken: "#Unit_Pixels",
				showDesc: true,
			},
		),
		{
			key: 30,
			id: "TrackPadToCameraAngles_AnglesPerTrackPadSwipe",
			sortOrder: 0,
			showDesc: true,
			valueSuffixToken: "#Unit_Degree_Symbol",
		},
		{
			key: 31,
			id: "VerticalSensitivity",
			sortOrder: 10,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 36,
			id: "Acceleration",
			choices: $,
			sortOrder: 2,
		},
		{
			key: 42,
			id: "GyroInvertY",
			toggle: true,
			sortOrder: 100,
			sectionId: "Output",
		},
		{
			key: 41,
			id: "GyroInvertX",
			toggle: true,
			sortOrder: 110,
			sectionId: "Output",
		},
		{
			key: 45,
			id: "RotationAbsMouse",
			sortOrder: 440,
			sectionId: "Output",
			showDesc: true,
		},
		{
			key: 78,
			id: "MouseTriggerClamp",
			choices: re,
			sortOrder: 600,
			sectionId: "TriggerDampening",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 78,
					rgValues: [1, 2, 3, 4, 5, 6],
				},
			],
			{
				key: 79,
				id: "MouseTriggerClampAmount",
				sortOrder: 610,
				sectionId: "TriggerDampening",
				showDesc: true,
			},
		),
		{
			key: 33,
			id: "Trackball",
			toggle: true,
			sortOrder: 300,
			sectionId: "Trackpad",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 33,
					rgValues: [1],
				},
			],
			{
				key: 34,
				id: "Friction",
				choices: te,
				sortOrder: 310,
				sectionId: "Trackpad",
			},
		),
		Ie(
			[
				{
					eControllerSetting: 33,
					rgValues: [1],
				},
			],
			{
				key: 35,
				id: "VerticalFriction",
				sortOrder: 320,
				sectionId: "Trackpad",
				showDesc: true,
			},
		),
		{
			key: 48,
			id: "DoubleTapDuration",
			sortOrder: 500,
			sectionId: "Trackpad",
		},
		{
			key: 38,
			id: "DoubleTapBeep",
			toggle: true,
			sortOrder: 510,
			sectionId: "Trackpad",
		},
		{
			key: 40,
			id: "EdgeSpinScale",
			sortOrder: 810,
			sectionId: "Trackpad",
			showDesc: true,
		},
		{
			key: 39,
			id: "EdgeSpinRadius",
			sortOrder: 820,
			sectionId: "Trackpad",
			showDesc: true,
		},
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 3,
			id: "HapticIntensityAbsMouse",
			choices: $,
			sortOrder: 999,
			sectionId: "Haptic",
		}),
	],
	22: [
		{
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 0,
			sectionId: "GyroEnableButton",
			showDesc: true,
		},
		{
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		},
		{
			key: 137,
			id: "GyroAnglesToPixels",
			sortOrder: 10,
			sectionId: "AngleCalibration",
			valueSuffixToken: "#Unit_Pixels",
			showDesc: true,
		},
		{
			key: 140,
			id: "GyroNaturalSensitivityGyroToMouse",
			sortOrder: 30,
			sectionId: "GyroSensitivity",
			humanDisplayMin: 0,
			humanDisplayMax: 30,
			valueSuffixToken: "#Unit_Multiplier",
			showDesc: true,
		},
		{
			key: 42,
			id: "GyroInvertY",
			toggle: true,
			sortOrder: 40,
			sectionId: "GyroSensitivity",
		},
		{
			key: 41,
			id: "GyroInvertX",
			toggle: true,
			sortOrder: 50,
			sectionId: "GyroSensitivity",
		},
		{
			key: 144,
			id: "GyroSpeedDeadzone",
			sortOrder: 60,
			sectionId: "GyroSensitivity",
			humanDisplayMin: 0,
			humanDisplayMax: 1,
			valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
			showDesc: true,
		},
		{
			key: 143,
			id: "GyroPrecisionSpeed",
			sortOrder: 70,
			sectionId: "GyroSensitivity",
			humanDisplayMin: 0,
			humanDisplayMax: 15,
			valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
			showDesc: true,
		},
		{
			key: 141,
			id: "GyroVerticalHorizontalRatio",
			sortOrder: 80,
			sectionId: "GyroSensitivity",
			humanDisplayMin: -100,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
			showDesc: true,
		},
		{
			key: 36,
			id: "Acceleration",
			choices: ce,
			sortOrder: 90,
			sectionId: "GyroSensitivity",
		},
		{
			key: 33,
			id: "GyroMomentumEnabled",
			toggle: true,
			sortOrder: 95,
			sectionId: "GyroSensitivity",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 33,
					rgValues: [1],
				},
			],
			{
				key: 34,
				id: "GyroMomentumFrictionX",
				valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
				sortOrder: 96,
				sectionId: "GyroSensitivity",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 33,
					rgValues: [1],
				},
			],
			{
				key: 35,
				id: "GyroMomentumFrictionY",
				valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
				sortOrder: 97,
				sectionId: "GyroSensitivity",
				showDesc: true,
			},
		),
		{
			key: 152,
			id: "GyroTo2DConversionStyle",
			choices: me,
			sortOrder: 99,
			sectionId: "Orientation",
			showOptionsDescs: true,
		},
		Ie(
			[
				{
					eControllerSetting: 152,
					rgValues: [3],
				},
			],
			{
				key: 142,
				id: "GyroSampleAngleOffsetX",
				sortOrder: 100,
				sectionId: "Orientation",
				humanDisplayMin: -180,
				humanDisplayMax: 180,
				valueSuffixToken: "#Unit_Degree_Symbol",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 152,
					rgValues: [2],
				},
			],
			{
				key: 126,
				id: "GyroRollContribution",
				sortOrder: 102,
				sectionId: "Orientation",
				humanDisplayMin: -100,
				humanDisplayMax: 100,
				valueSuffixToken: "#Unit_Percent",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 152,
					rgValues: [3],
				},
			],
			{
				key: 126,
				id: "GyroComplementaryAxisContribution",
				sortOrder: 102,
				sectionId: "Orientation",
				humanDisplayMin: -100,
				humanDisplayMax: 100,
				valueSuffixToken: "#Unit_Percent",
				showDesc: true,
			},
		),
		{
			key: 45,
			id: "RotationGyroOutput",
			sortOrder: 110,
			sectionId: "Orientation",
			valueSuffixToken: "#Unit_Degree_Symbol",
			showDesc: true,
		},
		{
			key: 78,
			id: "MouseTriggerClamp",
			choices: re,
			sortOrder: 130,
			sectionId: "TriggerDampening",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 78,
					rgValues: [1, 2, 3, 4, 5, 6],
				},
			],
			{
				key: 79,
				id: "MouseTriggerClampAmount",
				sortOrder: 140,
				sectionId: "TriggerDampening",
				showDesc: true,
			},
		),
		{
			key: 44,
			id: "MouseMoveThreshold",
			sortOrder: 150,
			sectionId: "MouseOutput",
			showDesc: true,
		},
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 3,
			id: "HapticIntensityAbsMouse",
			choices: $,
			sortOrder: 160,
			sectionId: "Haptic",
		}),
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 139,
			id: "HapticBumpsPerAngle",
			sortOrder: 165,
			sectionId: "Haptic",
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 360,
			valueSuffixToken: "#Unit_Degree_Symbol",
		}),
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 158,
			id: "GyroButtonHapticEffect",
			choices: fe,
			sortOrder: 166,
			sectionId: "Haptic",
			showDesc: true,
			showOptionsDescs: true,
		}),
	],
	25: [
		{
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 0,
			sectionId: "GyroEnableButton",
			showDesc: true,
		},
		{
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		},
		{
			key: 140,
			id: "GyroNaturalSensitivityGyroToMouse",
			sortOrder: 30,
			sectionId: "GyroSensitivity",
			humanDisplayMin: 0,
			humanDisplayMax: 30,
			valueSuffixToken: "#Unit_Multiplier",
			showDesc: true,
		},
		{
			key: 42,
			id: "GyroInvertY",
			toggle: true,
			sortOrder: 40,
			sectionId: "GyroSensitivity",
		},
		{
			key: 41,
			id: "GyroInvertX",
			toggle: true,
			sortOrder: 50,
			sectionId: "GyroSensitivity",
		},
		{
			key: 144,
			id: "GyroSpeedDeadzone",
			sortOrder: 60,
			sectionId: "GyroSensitivity",
			humanDisplayMin: 0,
			humanDisplayMax: 1,
			valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
			showDesc: true,
		},
		{
			key: 143,
			id: "GyroPrecisionSpeed",
			sortOrder: 70,
			sectionId: "GyroSensitivity",
			humanDisplayMin: 0,
			humanDisplayMax: 15,
			valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
			showDesc: true,
		},
		{
			key: 141,
			id: "GyroVerticalHorizontalRatio",
			sortOrder: 80,
			sectionId: "GyroSensitivity",
			humanDisplayMin: -100,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
			showDesc: true,
		},
		{
			key: 36,
			id: "Acceleration",
			choices: ce,
			sortOrder: 90,
			sectionId: "GyroSensitivity",
		},
		{
			key: 33,
			id: "GyroMomentumEnabled",
			toggle: true,
			sortOrder: 95,
			sectionId: "GyroSensitivity",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 33,
					rgValues: [1],
				},
			],
			{
				key: 34,
				id: "GyroMomentumFrictionX",
				valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
				sortOrder: 96,
				sectionId: "GyroSensitivity",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 33,
					rgValues: [1],
				},
			],
			{
				key: 35,
				id: "GyroMomentumFrictionY",
				valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
				sortOrder: 97,
				sectionId: "GyroSensitivity",
				showDesc: true,
			},
		),
		{
			key: 152,
			id: "GyroTo2DConversionStyle",
			choices: me,
			sortOrder: 99,
			sectionId: "Orientation",
			showOptionsDescs: true,
		},
		Ie(
			[
				{
					eControllerSetting: 152,
					rgValues: [3],
				},
			],
			{
				key: 142,
				id: "GyroSampleAngleOffsetX",
				sortOrder: 100,
				sectionId: "Orientation",
				humanDisplayMin: -180,
				humanDisplayMax: 180,
				valueSuffixToken: "#Unit_Degree_Symbol",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 152,
					rgValues: [2],
				},
			],
			{
				key: 126,
				id: "GyroRollContribution",
				sortOrder: 102,
				sectionId: "Orientation",
				humanDisplayMin: -100,
				humanDisplayMax: 100,
				valueSuffixToken: "#Unit_Percent",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 152,
					rgValues: [3],
				},
			],
			{
				key: 126,
				id: "GyroComplementaryAxisContribution",
				sortOrder: 102,
				sectionId: "Orientation",
				humanDisplayMin: -100,
				humanDisplayMax: 100,
				valueSuffixToken: "#Unit_Percent",
				showDesc: true,
			},
		),
		{
			key: 45,
			id: "RotationGyroOutput",
			sortOrder: 110,
			sectionId: "Orientation",
			valueSuffixToken: "#Unit_Degree_Symbol",
			showDesc: true,
		},
		{
			key: 78,
			id: "MouseTriggerClamp",
			choices: re,
			sortOrder: 130,
			sectionId: "TriggerDampening",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 78,
					rgValues: [1, 2, 3, 4, 5, 6],
				},
			],
			{
				key: 79,
				id: "MouseTriggerClampAmount",
				sortOrder: 140,
				sectionId: "TriggerDampening",
				showDesc: true,
			},
		),
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 3,
			id: "HapticIntensityAbsMouse",
			choices: $,
			sortOrder: 160,
			sectionId: "Haptic",
		}),
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 139,
			id: "HapticBumpsPerAngle",
			sortOrder: 165,
			sectionId: "Haptic",
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 360,
			valueSuffixToken: "#Unit_Degree_Symbol",
		}),
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 158,
			id: "GyroButtonHapticEffect",
			choices: fe,
			sortOrder: 166,
			sectionId: "Haptic",
			showDesc: true,
			showOptionsDescs: true,
		}),
	],
	23: [
		{
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 11,
			sectionId: "GyroEnableButton",
			showDesc: true,
		},
		{
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		},
		{
			key: 8,
			id: "OutputJoystickMouseJoystick",
			choices: ie,
			sortOrder: 13,
			sectionId: "JoystickOutput",
			showDesc: true,
		},
		{
			key: 149,
			id: "GyroJoystickOutputMin",
			sortOrder: 14,
			sectionId: "JoystickOutput",
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 150,
			id: "GyroJoystickOutputMax",
			sortOrder: 15,
			sectionId: "JoystickOutput",
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
			showDesc: true,
		},
		{
			key: 156,
			id: "GyroJoystickPowerCurve",
			sortOrder: 16,
			sectionId: "JoystickOutput",
			humanDisplayMin: 0.1,
			humanDisplayMax: 4,
			showDesc: true,
		},
		{
			key: 146,
			id: "GyroSpeedAnglePerSecondMax",
			sortOrder: 25,
			sectionId: "AngleCalibration",
			humanDisplayMin: 0,
			humanDisplayMax: 1800,
			valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
		},
		{
			key: 145,
			id: "GyroSpeedAnglePerSecondMin",
			sortOrder: 26,
			sectionId: "AngleCalibration",
			humanDisplayMin: 0,
			humanDisplayMax: 1800,
			valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
			showDesc: true,
		},
		{
			key: 153,
			id: "GyroEnableAngleCatchUp",
			toggle: true,
			sortOrder: 27,
			sectionId: "AngleCalibration",
			showDesc: true,
		},
		{
			key: 140,
			id: "GyroNaturalSensitivityGyroToMouse",
			sortOrder: 30,
			sectionId: "GyroSensitivity",
			humanDisplayMin: 0,
			humanDisplayMax: 30,
			valueSuffixToken: "#Unit_Multiplier",
			showDesc: false,
		},
		{
			key: 42,
			id: "GyroInvertY",
			toggle: true,
			sortOrder: 40,
			sectionId: "GyroSensitivity",
		},
		{
			key: 41,
			id: "GyroInvertX",
			toggle: true,
			sortOrder: 50,
			sectionId: "GyroSensitivity",
		},
		{
			key: 144,
			id: "GyroSpeedDeadzone",
			sortOrder: 60,
			sectionId: "GyroSensitivity",
			humanDisplayMin: 0,
			humanDisplayMax: 1,
			valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
			showDesc: true,
		},
		{
			key: 143,
			id: "GyroPrecisionSpeed",
			sortOrder: 70,
			sectionId: "GyroSensitivity",
			humanDisplayMin: 0,
			humanDisplayMax: 15,
			valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
			showDesc: true,
		},
		{
			key: 141,
			id: "GyroVerticalHorizontalRatio",
			sortOrder: 80,
			sectionId: "GyroSensitivity",
			humanDisplayMin: -100,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
			showDesc: true,
		},
		{
			key: 36,
			id: "Acceleration",
			choices: ce,
			sortOrder: 90,
			sectionId: "GyroSensitivity",
		},
		{
			key: 33,
			id: "GyroMomentumEnabled",
			toggle: true,
			sortOrder: 95,
			sectionId: "GyroSensitivity",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 33,
					rgValues: [1],
				},
			],
			{
				key: 34,
				id: "GyroMomentumFrictionX",
				valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
				sortOrder: 96,
				sectionId: "Sensitivity",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 33,
					rgValues: [1],
				},
			],
			{
				key: 35,
				id: "GyroMomentumFrictionY",
				valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
				sortOrder: 97,
				sectionId: "Sensitivity",
				showDesc: true,
			},
		),
		{
			key: 152,
			id: "GyroTo2DConversionStyle",
			choices: me,
			sortOrder: 99,
			sectionId: "Orientation",
			showOptionsDescs: true,
		},
		Ie(
			[
				{
					eControllerSetting: 152,
					rgValues: [3],
				},
			],
			{
				key: 142,
				id: "GyroSampleAngleOffsetX",
				sortOrder: 100,
				sectionId: "Orientation",
				humanDisplayMin: -180,
				humanDisplayMax: 180,
				valueSuffixToken: "#Unit_Degree_Symbol",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 152,
					rgValues: [2],
				},
			],
			{
				key: 126,
				id: "GyroRollContribution",
				sortOrder: 102,
				sectionId: "Orientation",
				humanDisplayMin: -100,
				humanDisplayMax: 100,
				valueSuffixToken: "#Unit_Percent",
				showDesc: true,
			},
		),
		Ie(
			[
				{
					eControllerSetting: 152,
					rgValues: [3],
				},
			],
			{
				key: 126,
				id: "GyroComplementaryAxisContribution",
				sortOrder: 102,
				sectionId: "Orientation",
				humanDisplayMin: -100,
				humanDisplayMax: 100,
				valueSuffixToken: "#Unit_Percent",
				showDesc: true,
			},
		),
		{
			key: 45,
			id: "RotationGyroOutput",
			sortOrder: 110,
			sectionId: "Orientation",
			valueSuffixToken: "#Unit_Degree_Symbol",
			showDesc: true,
		},
		{
			key: 78,
			id: "MouseTriggerClamp",
			choices: re,
			sortOrder: 130,
			sectionId: "TriggerDampening",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 78,
					rgValues: [1, 2, 3, 4, 5, 6],
				},
			],
			{
				key: 79,
				id: "MouseTriggerClampAmount",
				sortOrder: 140,
				sectionId: "TriggerDampening",
				showDesc: true,
			},
		),
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 3,
			id: "HapticIntensityAbsMouse",
			choices: $,
			sortOrder: 160,
			sectionId: "Haptic",
		}),
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 139,
			id: "HapticBumpsPerAngle",
			sortOrder: 165,
			sectionId: "Haptic",
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 360,
			valueSuffixToken: "#Unit_Degree_Symbol",
		}),
	],
	24: [
		{
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 10,
			sectionId: "Gyro",
			showDesc: true,
		},
		{
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			sortOrder: 11,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		},
		{
			key: 154,
			id: "GyroDeflectionUseGravity",
			toggle: true,
			sortOrder: 12,
			sectionId: "GyroEnableButton",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 154,
					rgValues: [0],
				},
			],
			{
				key: 155,
				id: "GyroDeflectionTiltAngle",
				sortOrder: 13,
				sectionId: "GyroEnableButton",
				humanDisplayMin: -90,
				humanDisplayMax: 90,
				valueSuffixToken: "#Unit_Degree_Symbol",
				showDesc: true,
			},
		),
		{
			key: 8,
			id: "OutputJoystickMouseJoystick",
			choices: ie,
			sortOrder: 12,
			sectionId: "JoystickOutput",
			showDesc: true,
		},
		{
			key: 149,
			id: "GyroJoystickOutputMin",
			sortOrder: 13,
			sectionId: "JoystickOutput",
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 150,
			id: "GyroJoystickOutputMax",
			sortOrder: 14,
			sectionId: "JoystickOutput",
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
			showDesc: true,
		},
		{
			key: 156,
			id: "GyroJoystickPowerCurve",
			sortOrder: 15,
			sectionId: "JoystickOutput",
			humanDisplayMin: 0.1,
			humanDisplayMax: 4,
			showDesc: true,
		},
		{
			key: 147,
			id: "GyroDeflectionAngleMin",
			sortOrder: 20,
			sectionId: "GyroSensitivity",
			valueSuffixToken: "#Unit_Degree_Symbol",
		},
		{
			key: 148,
			id: "GyroDeflectionAngleMax",
			sortOrder: 30,
			sectionId: "GyroSensitivity",
			valueSuffixToken: "#Unit_Degree_Symbol",
			showDesc: true,
		},
		{
			key: 67,
			id: "GyroLockExtents",
			toggle: true,
			sortOrder: 31,
			sectionId: "GyroSensitivity",
			showDesc: true,
		},
		{
			key: 42,
			id: "GyroInvertY",
			toggle: true,
			sortOrder: 40,
			sectionId: "GyroSensitivity",
		},
		{
			key: 41,
			id: "GyroInvertX",
			toggle: true,
			sortOrder: 50,
			sectionId: "GyroSensitivity",
		},
		{
			key: 144,
			id: "GyroSpeedDeadzone",
			sortOrder: 60,
			sectionId: "GyroSensitivity",
			humanDisplayMin: 0,
			humanDisplayMax: 1,
			valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
			showDesc: true,
		},
		{
			key: 143,
			id: "GyroPrecisionSpeed",
			sortOrder: 70,
			sectionId: "GyroSensitivity",
			humanDisplayMin: 0,
			humanDisplayMax: 15,
			valueSuffixToken: "#Unit_DegreePerSecond_Symbol",
			showDesc: true,
		},
		{
			key: 141,
			id: "GyroVerticalHorizontalRatio",
			sortOrder: 80,
			sectionId: "GyroSensitivity",
			humanDisplayMin: -100,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
			showDesc: true,
		},
		{
			key: 45,
			id: "RotationGyroOutput",
			sortOrder: 110,
			sectionId: "Orientation",
			valueSuffixToken: "#Unit_Degree_Symbol",
			showDesc: true,
		},
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 3,
			id: "HapticIntensityAbsMouse",
			choices: $,
			sortOrder: 160,
			sectionId: "Haptic",
		}),
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 139,
			id: "HapticBumpsPerAngle",
			sortOrder: 165,
			sectionId: "Haptic",
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 360,
			valueSuffixToken: "#Unit_Degree_Symbol",
		}),
	],
	12: [
		{
			key: 31,
			id: "VerticalSensitivityMouseJoystick",
			sortOrder: 1,
		},
		{
			key: 10,
			id: "CustomCurveExponent_mouse_joystick",
			sortOrder: 25,
			showDesc: true,
		},
		{
			key: 52,
			id: "DeadZonePrecisionJoystickMouse",
			sortOrder: 44,
			showDesc: true,
		},
		{
			key: 8,
			id: "OutputJoystickMouseJoystick",
			choices: ie,
			sortOrder: 0,
			sectionId: "Output",
			showDesc: true,
		},
		{
			key: 41,
			id: "InvertXMouseMouseJoystick",
			toggle: true,
			sortOrder: 11,
			sectionId: "Output",
		},
		{
			key: 42,
			id: "InvertMouseYMouseJoystick",
			toggle: true,
			sortOrder: 10,
			sectionId: "Output",
		},
		{
			key: 45,
			id: "RotationMouseJoystick",
			sortOrder: 40,
			sectionId: "Output",
			showDesc: true,
		},
		{
			key: 44,
			id: "MouseMoveThresholdMouseJoystick",
			sortOrder: 41,
			sectionId: "Output",
			showDesc: true,
		},
		{
			key: 50,
			id: "DeadzoneXJoystickMouse",
			sortOrder: 42,
			sectionId: "Output",
			showDesc: true,
		},
		{
			key: 51,
			id: "DeadzoneYJoystickMouse",
			sortOrder: 43,
			sectionId: "Output",
			showDesc: true,
		},
		{
			key: 78,
			id: "MouseTriggerClampMouseJoystick",
			choices: re,
			sortOrder: 60,
			sectionId: "TriggerDampening",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 78,
					rgValues: [1, 2, 3, 4, 5, 6],
				},
			],
			{
				key: 79,
				id: "MouseTriggerClampAmountMouseJoystick",
				sortOrder: 61,
				sectionId: "TriggerDampening",
				showDesc: true,
			},
		),
		ke(KU.k_EInputSource_Gyros, {
			key: 81,
			id: "GyroSensitivityScaleMouseJoystick",
			sortOrder: 2,
			sectionId: "Gyro",
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 35,
			sectionId: "Gyro",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 64,
			id: "GyroAxisMouseJoystick",
			choices: Ce,
			sortOrder: 37,
			sectionId: "Gyro",
		}),
		De(64, [2], KU.k_EInputSource_Gyros, {
			key: 125,
			id: "GyroYawScaleMouseJoystick",
			sortOrder: 38,
			sectionId: "Gyro",
			humanDisplayMin: -100,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		}),
		De(64, [2], KU.k_EInputSource_Gyros, {
			key: 126,
			id: "GyroRollScaleMouseJoystick",
			sortOrder: 39,
			sectionId: "Gyro",
			humanDisplayMin: -100,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		}),
		De(64, [0, 1], KU.k_EInputSource_Gyros, {
			key: 13,
			id: "LeanSensitivityMouseJoystick",
			sortOrder: 40,
			sectionId: "Gyro",
		}),
		ke(KU.k_EInputSource_Trackpads, {
			key: 33,
			id: "TrackballMouseJoystick",
			toggle: true,
			sortOrder: 30,
			sectionId: "Trackpad",
			showDesc: true,
		}),
		De(33, [1], KU.k_EInputSource_Trackpads, {
			key: 34,
			id: "FrictionMouseJoystick",
			choices: te,
			sortOrder: 31,
			sectionId: "Trackpad",
		}),
		De(33, [1], KU.k_EInputSource_Trackpads, {
			key: 35,
			id: "VerticalFrictionMouseJoystick",
			sortOrder: 32,
			sectionId: "Trackpad",
		}),
		ke(KU.k_EInputSource_Trackpads, {
			key: 48,
			id: "DoubleTapDurationMouseJoystick",
			sortOrder: 50,
			sectionId: "Trackpad",
		}),
		ke(KU.k_EInputSource_Trackpads, {
			key: 38,
			id: "DoubleTapBeepMouseJoystick",
			toggle: true,
			sortOrder: 51,
			sectionId: "Trackpad",
		}),
		ke(KU.k_EInputSource_Trackpads, {
			key: 40,
			id: "EdgeSpinScaleMouseJoystick",
			sortOrder: 81,
			sectionId: "Trackpad",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Trackpads, {
			key: 39,
			id: "EdgeSpinRadiusMouseJoystick",
			sortOrder: 82,
			sectionId: "Trackpad",
			showDesc: true,
		}),
		{
			key: 3,
			id: "HapticIntensityMouseJoystick",
			choices: $,
			sortOrder: 100,
			sectionId: "Haptic",
		},
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 158,
			id: "GyroButtonHapticEffect",
			choices: fe,
			sortOrder: 101,
			sectionId: "Haptic",
			showDesc: true,
			showOptionsDescs: true,
		}),
	],
	13: [
		{
			key: 85,
			id: "TeleportStart",
			toggle: true,
			sortOrder: 20,
		},
		{
			key: 86,
			id: "TeleportStop",
			toggle: true,
			sortOrder: 21,
		},
		{
			key: 41,
			id: "InvertMouseRegionX",
			toggle: true,
			sortOrder: 22,
		},
		{
			key: 42,
			id: "InvertMouseRegionY",
			toggle: true,
			sortOrder: 23,
		},
		{
			key: 83,
			id: "PositionXMouse",
			sortOrder: 0,
			sectionId: "Display",
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 84,
			id: "PositionYMouse",
			sortOrder: 1,
			sectionId: "Display",
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 82,
			id: "ScaleMouseRegion",
			sortOrder: 2,
			sectionId: "Display",
			valueSuffixToken: "#Unit_Multiplier",
		},
		{
			key: 45,
			id: "RotationMouseRegion",
			sortOrder: 3,
			sectionId: "Display",
			valueSuffixToken: "#Unit_Degree_Symbol",
			showDesc: true,
		},
		{
			key: 32,
			id: "HorizontalSensitivityMouseRegion",
			sortOrder: 10,
			sectionId: "Display",
			valueSuffixToken: "#Unit_Multiplier",
			showDesc: true,
		},
		{
			key: 31,
			id: "VerticalSensitivityMouseRegion",
			sortOrder: 11,
			sectionId: "Display",
			valueSuffixToken: "#Unit_Multiplier",
			showDesc: true,
		},
		{
			key: 7,
			id: "EdgeBindingRadiusMouseRegion",
			sortOrder: 80,
			sectionId: "EdgeBinding",
			showDesc: true,
		},
		{
			key: 20,
			id: "EdgeBindingInvertMouseRegion",
			toggle: true,
			sortOrder: 81,
			sectionId: "EdgeBinding",
			showDesc: true,
		},
		{
			key: 78,
			id: "MouseRegionTriggerClamp",
			choices: re,
			sortOrder: 60,
			sectionId: "TriggerDampening",
			showDesc: true,
		},
		Ie(
			[
				{
					eControllerSetting: 78,
					rgValues: [1, 2, 3, 4, 5, 6],
				},
			],
			{
				key: 79,
				id: "MouseRegionTriggerClampAmount",
				sortOrder: 61,
				sectionId: "TriggerDampening",
				showDesc: true,
			},
		),
		ke(KU.k_EInputSource_Gyros, {
			key: 157,
			id: "GyroEnableButton",
			visualizerType: "GyroButtonPicker",
			sortOrder: 70,
			sectionId: "Gyro",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Gyros, {
			key: 69,
			id: "GyroEnableButtonBehavior",
			choices: BC,
			hiddenByViz: true,
			showDesc: true,
			showOptionsDescs: true,
		}),
		{
			key: 3,
			id: "HapticIntensityMouseRegion",
			choices: $,
			sortOrder: 100,
			sectionId: "Haptic",
		},
		Re(RL.k_EControllerTypeFlags_HapticSupport, {
			key: 158,
			id: "GyroButtonHapticEffect",
			choices: fe,
			sortOrder: 101,
			sectionId: "Haptic",
			showDesc: true,
			showOptionsDescs: true,
		}),
	],
	5: [
		{
			key: 30,
			id: "SensitivityRelMouse",
			sortOrder: 0,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 15,
			id: "AdaptiveCenteringRelMouse",
			toggle: true,
			sortOrder: 1,
		},
		{
			key: 16,
			id: "VirtualCapSizeRelMouse",
			sortOrder: 2,
		},
		{
			key: 3,
			id: "HapticIntensityRelMouse",
			choices: $,
			sortOrder: 3,
			sectionId: "Haptic",
		},
	],
	3: [
		ke(KU.k_EInputSource_Trackpads, {
			key: 22,
			id: "RequiresClickFourButtons",
			toggle: true,
			sectionId: "Trackpad",
			sortOrder: 4,
		}),
		ke(KU.k_EInputSource_Analog, {
			key: 60,
			id: "ButtonRadiusFourButtons",
			sortOrder: 5,
			sectionId: "Trackpad",
			showDesc: true,
		}),
		ke(KU.k_EInputSource_Analog, {
			key: 61,
			id: "ButtonDistanceFourButtons",
			sortOrder: 6,
			sectionId: "Trackpad",
			showDesc: true,
		}),
		{
			key: 4,
			id: "HapticIntensityFourButtons",
			choices: ee,
			sortOrder: 100,
			sectionId: "Haptic",
		},
	],
	17: [
		{
			key: 137,
			id: "SensitivityFlickStick",
			sortOrder: 0,
			sectionId: "AngleCalibration",
			valueSuffixToken: "#Unit_Pixels",
			showDesc: true,
		},
		{
			key: 135,
			id: "SensitivitySweepFlickStick",
			sortOrder: 1,
			sectionId: "FlickStickSensitivity",
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 6,
			valueSuffixToken: "#Unit_Multiplier",
		},
		{
			key: 45,
			id: "RotationFlickStick",
			sortOrder: 2,
			showDesc: true,
			sectionId: "FlickStickSensitivity",
			valueSuffixToken: "#Unit_Degree_Symbol",
		},
		{
			key: 131,
			id: "SnapModeFlickStick",
			sectionId: "Snapping",
			choices: we,
			sortOrder: 3,
			showOptionsDescs: true,
		},
		Ie(
			[
				{
					eControllerSetting: 131,
					rgValues: [5],
				},
			],
			{
				key: 132,
				id: "ForwardSnapAngleFlickStick",
				sectionId: "Snapping",
				sortOrder: 4,
				showDesc: true,
				humanDisplayMin: 0,
				humanDisplayMax: 180,
				valueSuffixToken: "#Unit_Degree_Symbol",
			},
		),
		{
			key: 133,
			id: "SnapSmoothingFlickStick",
			sectionId: "Smoothing",
			sortOrder: 5,
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 134,
			id: "SweepSmoothingFlickStick",
			sectionId: "Smoothing",
			sortOrder: 6,
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 136,
			id: "ReleaseDampeningFlickStick",
			sectionId: "Smoothing",
			sortOrder: 7,
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 10,
			valueSuffixToken: "#Unit_UnitsPerSecond",
		},
		{
			key: 12,
			id: "InnerDeadzoneFlickStick",
			sortOrder: 8,
			sectionId: "Deadzone",
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 13,
			id: "OuterDeadzoneFlickStick",
			sortOrder: 9,
			sectionId: "Deadzone",
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 21,
			id: "OutputAxisFlickStick",
			sectionId: "Output",
			choices: ve,
			showDesc: true,
			sortOrder: 10,
		},
		{
			key: 41,
			id: "InvertFlickStickOutput",
			sectionId: "Output",
			toggle: true,
			sortOrder: 11,
		},
		{
			key: 138,
			id: "EdgeBindingRadiusFlickStick",
			sortOrder: 12,
			sectionId: "EdgeBinding",
			showDesc: true,
			humanDisplayMin: 20,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 20,
			id: "EdgeBindingInvert_joystick_move",
			toggle: true,
			sortOrder: 13,
			sectionId: "EdgeBinding",
			showDesc: true,
		},
		{
			key: 159,
			id: "AllowFlickOnAwake",
			toggle: true,
			sortOrder: 14,
			sectionId: "ActionSetActivation",
			showDesc: true,
		},
		{
			key: 3,
			id: "HapticIntensityFlickStick",
			sortOrder: 15,
			showDesc: true,
			choices: $,
			sectionId: "Haptic",
		},
		{
			key: 139,
			id: "HapticBumpsPerAngle",
			sortOrder: 16,
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 360,
			valueSuffixToken: "#Unit_Degree_Symbol",
			sectionId: "Haptic",
		},
	],
	27: [
		{
			key: 135,
			id: "SensitivitySweepFlickStick",
			sortOrder: 1,
			sectionId: "FlickStickSensitivity",
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 6,
			valueSuffixToken: "#Unit_Multiplier",
		},
		{
			key: 45,
			id: "RotationFlickStick",
			sortOrder: 2,
			showDesc: true,
			sectionId: "FlickStickSensitivity",
			valueSuffixToken: "#Unit_Degree_Symbol",
		},
		{
			key: 131,
			id: "SnapModeFlickStick",
			sectionId: "Snapping",
			choices: we,
			sortOrder: 3,
			showOptionsDescs: true,
		},
		Ie(
			[
				{
					eControllerSetting: 131,
					rgValues: [5],
				},
			],
			{
				key: 132,
				id: "ForwardSnapAngleFlickStick",
				sectionId: "Snapping",
				sortOrder: 4,
				showDesc: true,
				humanDisplayMin: 0,
				humanDisplayMax: 180,
				valueSuffixToken: "#Unit_Degree_Symbol",
			},
		),
		{
			key: 133,
			id: "SnapSmoothingFlickStick",
			sectionId: "Smoothing",
			sortOrder: 5,
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 134,
			id: "SweepSmoothingFlickStick",
			sectionId: "Smoothing",
			sortOrder: 6,
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 136,
			id: "ReleaseDampeningFlickStick",
			sectionId: "Smoothing",
			sortOrder: 7,
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 10,
			valueSuffixToken: "#Unit_UnitsPerSecond",
		},
		{
			key: 12,
			id: "InnerDeadzoneFlickStick",
			sortOrder: 8,
			sectionId: "Deadzone",
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 13,
			id: "OuterDeadzoneFlickStick",
			sortOrder: 9,
			sectionId: "Deadzone",
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 21,
			id: "OutputAxisFlickStick",
			sectionId: "Output",
			choices: ve,
			showDesc: true,
			sortOrder: 10,
		},
		{
			key: 41,
			id: "InvertFlickStickOutput",
			sectionId: "Output",
			toggle: true,
			sortOrder: 11,
		},
		{
			key: 138,
			id: "EdgeBindingRadiusFlickStick",
			sortOrder: 12,
			sectionId: "EdgeBinding",
			showDesc: true,
			humanDisplayMin: 20,
			humanDisplayMax: 100,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 20,
			id: "EdgeBindingInvert_joystick_move",
			toggle: true,
			sortOrder: 13,
			sectionId: "EdgeBinding",
			showDesc: true,
		},
		{
			key: 159,
			id: "AllowFlickOnAwake",
			toggle: true,
			sortOrder: 14,
			sectionId: "ActionSetActivation",
			showDesc: true,
		},
		{
			key: 3,
			id: "HapticIntensityFlickStick",
			sortOrder: 15,
			showDesc: true,
			choices: $,
			sectionId: "Haptic",
		},
		{
			key: 139,
			id: "HapticBumpsPerAngle",
			sortOrder: 16,
			showDesc: true,
			humanDisplayMin: 0,
			humanDisplayMax: 360,
			valueSuffixToken: "#Unit_Degree_Symbol",
			sectionId: "Haptic",
		},
	],
	9: [
		{
			key: 53,
			id: "SensitivityScrollWheel",
			sortOrder: 0,
		},
		{
			key: 57,
			id: "ScrollWheelFriction",
			choices: te,
			sortOrder: 1,
		},
		{
			key: 55,
			id: "ScrollWheelType",
			choices: [
				{
					id: "Scroll_Wheel_Type_Circle",
					value: 0,
				},
				{
					id: "Scroll_Wheel_Type_Horizontal",
					value: 1,
				},
				{
					id: "Scroll_Wheel_Type_Vertical",
					value: 2,
				},
			],
			sortOrder: 2,
			showOptionsDescs: true,
		},
		{
			key: 56,
			id: "ScrollWheelInvert",
			toggle: true,
			sortOrder: 3,
			showDesc: true,
		},
		{
			key: 54,
			id: "ScrollWheelListWrap",
			toggle: true,
			sortOrder: 4,
			showDesc: true,
		},
		{
			key: 3,
			id: "HapticIntensityScrollWheel",
			choices: $,
			sortOrder: 100,
			sectionId: "Haptic",
		},
	],
	11: [
		{
			key: 73,
			id: "TouchMenuButtonCount",
			choices: ye,
			sortOrder: 4,
		},
		ke(KU.k_EInputSource_Gyros, {
			key: 157,
			id: "GyroButtonTouchMenu",
			visualizerType: "TouchMenuActivatorButtonPicker",
			sortOrder: 5,
			showDesc: true,
		}),
		{
			key: 87,
			id: "TouchMenuButtonType",
			choices: Se,
			sortOrder: 6,
			showOptionsDescs: true,
		},
		De(87, [0, 1], KU.k_EInputSource_Gyros, {
			key: 123,
			id: "ActivationButtonTouchMenu",
			choices: function (e, t) {
				return (function (e) {
					switch (e) {
						case 4:
							return de;
						case 34:
							return Ae;
						case 45:
							return pe;
						case 48:
							return ge;
						case 39:
						case 40:
						case 41:
						case 38:
						case 42:
							return he;
					}
					return ue;
				})(t);
			},
			sortOrder: 7,
			showDesc: true,
		}),
		{
			key: 80,
			id: "TouchMenuShowLabels",
			toggle: true,
			sortOrder: 8,
			showDesc: true,
		},
		{
			key: 30,
			id: "SensitivityTouchMenu",
			sortOrder: 10,
			showDesc: true,
			valueSuffixToken: "#Unit_Percent",
		},
		{
			key: 75,
			id: "TouchMenuPosX",
			sortOrder: 0,
			sectionId: "Display",
		},
		{
			key: 76,
			id: "TouchMenuPosY",
			sortOrder: 1,
			sectionId: "Display",
		},
		{
			key: 77,
			id: "TouchMenuScale",
			sortOrder: 2,
			sectionId: "Display",
		},
		{
			key: 74,
			id: "TouchMenuOpacity",
			sortOrder: 3,
			sectionId: "Display",
		},
		{
			key: 115,
			id: "TouchMenuDeadzoneInner",
			sortOrder: 20,
			sectionId: "Deadzone",
		},
		{
			key: 116,
			id: "TouchMenuDeadzoneOuter",
			sortOrder: 21,
			sectionId: "Deadzone",
		},
		{
			key: 3,
			id: "HapticIntensityTouchMenu",
			choices: $,
			sortOrder: 100,
			sectionId: "Haptic",
		},
	],
	19: [
		{
			key: 73,
			id: "HotbarButtonCount",
			choices: ye,
			sortOrder: 5,
		},
		{
			key: 80,
			id: "TouchMenuShowLabels",
			toggle: true,
			sortOrder: 6,
			showDesc: true,
		},
		{
			key: 54,
			id: "HotbarScrollWrap",
			toggle: true,
			sortOrder: 10,
			showDesc: true,
		},
		{
			key: 75,
			id: "HotbarPosX",
			sortOrder: 0,
			sectionId: "Display",
		},
		{
			key: 76,
			id: "HotbarPosY",
			sortOrder: 1,
			sectionId: "Display",
		},
		{
			key: 77,
			id: "HotbarScale",
			sortOrder: 2,
			sectionId: "Display",
		},
		{
			key: 74,
			id: "HotbarOpacity",
			sortOrder: 3,
			sectionId: "Display",
		},
		{
			key: 23,
			id: "HotbarDeadzone",
			sortOrder: 20,
			sectionId: "Deadzone",
		},
		{
			key: 88,
			id: "HotbarDismissAfterActivation",
			toggle: true,
		},
		{
			key: 89,
			id: "HotbarRecenterEachTime",
			toggle: true,
		},
		{
			key: 3,
			id: "HapticIntensityTouchMenu",
			choices: $,
			sortOrder: 100,
			sectionId: "Haptic",
		},
	],
	14: [
		{
			key: 87,
			id: "RadialMenuButtonType",
			choices: Se,
			sortOrder: 4,
			showOptionsDescs: true,
		},
		{
			key: 80,
			id: "TouchMenuShowLabels",
			toggle: true,
			sortOrder: 5,
			showDesc: true,
		},
		{
			key: 75,
			id: "RadialMenuPosX",
			sortOrder: 0,
			sectionId: "Display",
		},
		{
			key: 76,
			id: "RadialMenuPosY",
			sortOrder: 1,
			sectionId: "Display",
		},
		{
			key: 77,
			id: "RadialMenuScale",
			sortOrder: 2,
			sectionId: "Display",
		},
		{
			key: 74,
			id: "RadialMenuOpacity",
			sortOrder: 3,
			sectionId: "Display",
		},
		{
			key: 3,
			id: "HapticIntensityRadialMenu",
			choices: $,
			sortOrder: 100,
			sectionId: "Haptic",
		},
	],
	10: [
		{
			key: 59,
			id: "AdaptiveThreshold",
			choices: be,
			sortOrder: 2,
			showOptionsDescs: true,
		},
		{
			key: 7,
			id: "TriggerThreshold",
			sortOrder: 3,
			showDesc: true,
		},
		{
			key: 9,
			id: "TriggerCurveExponent",
			choices: le,
			sortOrder: 5,
			showOptionsDescs: true,
		},
		Te({
			key: 10,
			id: "TriggerCustomCurveExponent",
			sortOrder: 6,
			showDesc: true,
		}),
		{
			key: 25,
			id: "HoldRepeatsTrigger",
			toggle: true,
			sortOrder: 7,
		},
		Me({
			key: 26,
			id: "HoldRepeatIntervalTrigger",
			sortOrder: 8,
			showDesc: true,
		}),
		{
			key: 58,
			id: "OutputTrigger",
			choices: [
				{
					id: "TriggerOff",
					value: 0,
				},
				{
					id: "TriggerLeft",
					value: 1,
				},
				{
					id: "TriggerRight",
					value: 2,
				},
			],
			sortOrder: 0,
			sectionId: "AnalogTrigger",
			showDesc: true,
		},
		{
			key: 12,
			id: "TriggerDeadZoneStart",
			sortOrder: 1,
			sectionId: "AnalogTrigger",
			showDesc: true,
		},
		{
			key: 13,
			id: "TriggerDeadZoneEnd",
			sortOrder: 2,
			sectionId: "AnalogTrigger",
			showDesc: true,
		},
		{
			key: 4,
			id: "HapticIntensityTriggerThreshold",
			choices: ee,
			sortOrder: 100,
			sectionId: "Haptic",
		},
	],
};
export function X(e, t, r, n) {
	if (e == null || t == null) {
		return;
	}
	const i = {};
	for (const t of e) {
		i[t.key] = t;
	}
	const a = [];
	for (const e of t) {
		const t = e instanceof Function ? e(i, n, r) : e;
		const s = i[t?.key];
		if (s != null) {
			const e = t.choices instanceof Function ? t.choices(i, n, r) : t.choices;
			a.push({
				...s,
				...t,
				choices: e,
			});
		}
	}
	return a;
}
export const G9 = [11, 14, 19];
const Oe = [
	{
		id: "TriggerLeft",
		value: a.k_EOutputAxisLeftTrigger,
	},
	{
		id: "TriggerRight",
		value: a.k_EOutputAxisRightTrigger,
	},
	{
		id: "LeftStickRight",
		value: a.k_EOutputAxisLeftThumbXPos,
	},
	{
		id: "LeftStickLeft",
		value: a.k_EOutputAxisLeftThumbXNeg,
	},
	{
		id: "LeftStickUp",
		value: a.k_EOutputAxisLeftThumbYPos,
	},
	{
		id: "LeftStickDown",
		value: a.k_EOutputAxisLeftThumbYNeg,
	},
	{
		id: "RightStickRight",
		value: a.k_EOutputAxisRightThumbXPos,
	},
	{
		id: "RightStickLeft",
		value: a.k_EOutputAxisRightThumbXNeg,
	},
	{
		id: "RightStickUp",
		value: a.k_EOutputAxisRightThumbYPos,
	},
	{
		id: "RightStickDown",
		value: a.k_EOutputAxisRightThumbYNeg,
	},
];
const Pe = [
	{
		id: "--",
		value: 0,
	},
	{
		id: "ModeShift_Chord_LeftBumper",
		value: 1,
	},
	{
		id: "ModeShift_Chord_RightBumper",
		value: 2,
	},
	{
		id: "ModeShift_Chord_LeftGrip",
		value: 3,
	},
	{
		id: "ModeShift_Chord_RightGrip",
		value: 4,
	},
	{
		id: "ModeShift_Chord_LeftTrigger",
		value: 5,
	},
	{
		id: "ModeShift_Chord_RightTrigger",
		value: 6,
	},
	{
		id: "ModeShift_Chord_LeftTriggerThreshold",
		value: 7,
	},
	{
		id: "ModeShift_Chord_RightTriggerThreshold",
		value: 8,
	},
	{
		id: "ModeShift_Chord_LeftJoystickClick",
		value: 9,
	},
	{
		id: "GyroTouchLeft",
		value: 16,
	},
	{
		id: "GyroTouchRight",
		value: 17,
	},
	{
		id: "GyroClickLeft",
		value: 18,
	},
	{
		id: "GyroClickRight",
		value: 19,
	},
	{
		id: "ModeShift_Chord_A",
		value: 10,
	},
	{
		id: "ModeShift_Chord_B",
		value: 11,
	},
	{
		id: "ModeShift_Chord_X",
		value: 12,
	},
	{
		id: "ModeShift_Chord_Y",
		value: 13,
	},
	{
		id: "ModeShift_Chord_Select",
		value: 15,
	},
	{
		id: "ModeShift_Chord_Start",
		value: 14,
	},
];
const Le = [
	{
		id: "--",
		value: 0,
	},
	{
		id: "ModeShift_Chord_LeftBumper",
		value: 1,
	},
	{
		id: "ModeShift_Chord_RightBumper",
		value: 2,
	},
	{
		id: "GyroL4",
		value: 27,
	},
	{
		id: "GyroR4",
		value: 26,
	},
	{
		id: "GyroL5",
		value: 3,
	},
	{
		id: "GyroR5",
		value: 4,
	},
	{
		id: "ModeShift_Chord_LeftTrigger",
		value: 5,
	},
	{
		id: "ModeShift_Chord_RightTrigger",
		value: 6,
	},
	{
		id: "ModeShift_Chord_LeftTriggerThreshold",
		value: 7,
	},
	{
		id: "ModeShift_Chord_RightTriggerThreshold",
		value: 8,
	},
	{
		id: "ModeShift_Chord_LeftJoystickClick",
		value: 9,
	},
	{
		id: "ModeShift_Chord_RightJoystickClick",
		value: 20,
	},
	{
		id: "GyroLStickTouch",
		value: 23,
	},
	{
		id: "GyroRStickTouch",
		value: 24,
	},
	{
		id: "GyroRStickOrPadTouch",
		value: 25,
	},
	{
		id: "GyroLStickOrPadTouch",
		value: 33,
	},
	{
		id: "ModeShift_Chord_A",
		value: 10,
	},
	{
		id: "ModeShift_Chord_B",
		value: 11,
	},
	{
		id: "ModeShift_Chord_X",
		value: 12,
	},
	{
		id: "ModeShift_Chord_Y",
		value: 13,
	},
	{
		id: "GyroTouchLeft",
		value: 16,
	},
	{
		id: "GyroTouchRight",
		value: 17,
	},
	{
		id: "GyroClickLeft",
		value: 18,
	},
	{
		id: "GyroClickRight",
		value: 19,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "GyroView",
		value: 15,
	},
	{
		id: "GyroMenu",
		value: 14,
	},
];
const ze = [
	{
		id: "--",
		value: 0,
	},
	{
		id: "ModeShift_Chord_LeftBumper",
		value: 1,
	},
	{
		id: "ModeShift_Chord_RightBumper",
		value: 2,
	},
	{
		id: "ModeShift_Chord_LeftTrigger",
		value: 5,
	},
	{
		id: "ModeShift_Chord_RightTrigger",
		value: 6,
	},
	{
		id: "ModeShift_Chord_LeftTriggerThreshold",
		value: 7,
	},
	{
		id: "ModeShift_Chord_RightTriggerThreshold",
		value: 8,
	},
	{
		id: "ModeShift_Chord_LeftJoystickClick",
		value: 9,
	},
	{
		id: "ModeShift_Chord_RightJoystickClick",
		value: 20,
	},
	{
		id: "GyroCross",
		value: 10,
	},
	{
		id: "GyroCircle",
		value: 11,
	},
	{
		id: "GyroSquare",
		value: 12,
	},
	{
		id: "GyroTriangle",
		value: 13,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "GyroTouchLeft",
		value: 16,
	},
	{
		id: "GyroTouchCenter",
		value: 22,
	},
	{
		id: "GyroTouchRight",
		value: 17,
	},
	{
		id: "GyroClickLeft",
		value: 18,
	},
	{
		id: "GyroClickRight",
		value: 19,
	},
	{
		id: "GyroShare",
		value: 15,
	},
	{
		id: "GyroOptions",
		value: 14,
	},
];
const xe = [
	{
		id: "--",
		value: 0,
	},
	{
		id: "ModeShift_Chord_LeftBumper",
		value: 1,
	},
	{
		id: "ModeShift_Chord_RightBumper",
		value: 2,
	},
	{
		id: "ModeShift_Chord_LeftTrigger",
		value: 5,
	},
	{
		id: "ModeShift_Chord_RightTrigger",
		value: 6,
	},
	{
		id: "ModeShift_Chord_LeftTriggerThreshold",
		value: 7,
	},
	{
		id: "ModeShift_Chord_RightTriggerThreshold",
		value: 8,
	},
	{
		id: "ModeShift_Chord_LeftJoystickClick",
		value: 9,
	},
	{
		id: "ModeShift_Chord_RightJoystickClick",
		value: 20,
	},
	{
		id: "GyroTouchLeft",
		value: 16,
	},
	{
		id: "GyroTouchCenter",
		value: 22,
	},
	{
		id: "GyroTouchRight",
		value: 17,
	},
	{
		id: "GyroClickLeft",
		value: 18,
	},
	{
		id: "GyroClickRight",
		value: 19,
	},
	{
		id: "GyroCross",
		value: 10,
	},
	{
		id: "GyroCircle",
		value: 11,
	},
	{
		id: "GyroSquare",
		value: 12,
	},
	{
		id: "GyroTriangle",
		value: 13,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "GyroShare",
		value: 15,
	},
	{
		id: "GyroOptions",
		value: 14,
	},
	{
		id: "GyroMute",
		value: 21,
	},
];
const Ue = [
	{
		id: "--",
		value: 0,
	},
	{
		id: "ModeShift_Chord_LeftBumper",
		value: 1,
	},
	{
		id: "ModeShift_Chord_RightBumper",
		value: 2,
	},
	{
		id: "ModeShift_Chord_LPaddle",
		value: 3,
	},
	{
		id: "ModeShift_Chord_RPaddle",
		value: 4,
	},
	{
		id: "ModeShift_Chord_LeftTrigger",
		value: 5,
	},
	{
		id: "ModeShift_Chord_RightTrigger",
		value: 6,
	},
	{
		id: "ModeShift_Chord_LeftTriggerThreshold",
		value: 7,
	},
	{
		id: "ModeShift_Chord_RightTriggerThreshold",
		value: 8,
	},
	{
		id: "ModeShift_Chord_LeftJoystickClick",
		value: 9,
	},
	{
		id: "ModeShift_Chord_RightJoystickClick",
		value: 20,
	},
	{
		id: "GyroCross",
		value: 10,
	},
	{
		id: "GyroCircle",
		value: 11,
	},
	{
		id: "GyroSquare",
		value: 12,
	},
	{
		id: "GyroTriangle",
		value: 13,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "GyroTouchLeft",
		value: 16,
	},
	{
		id: "GyroTouchCenter",
		value: 22,
	},
	{
		id: "GyroTouchRight",
		value: 17,
	},
	{
		id: "GyroClickLeft",
		value: 18,
	},
	{
		id: "GyroClickRight",
		value: 19,
	},
	{
		id: "GyroShare",
		value: 15,
	},
	{
		id: "GyroOptions",
		value: 14,
	},
	{
		id: "GyroMute",
		value: 21,
	},
];
const We = [
	{
		id: "--",
		value: 0,
	},
	{
		id: "ModeShift_Chord_LeftBumper",
		value: 1,
	},
	{
		id: "ModeShift_Chord_RightBumper",
		value: 2,
	},
	{
		id: "ModeShift_Chord_LeftTrigger",
		value: 5,
	},
	{
		id: "ModeShift_Chord_RightTrigger",
		value: 6,
	},
	{
		id: "ModeShift_Chord_LeftJoystickClick",
		value: 9,
	},
	{
		id: "ModeShift_Chord_RightJoystickClick",
		value: 20,
	},
	{
		id: "ModeShift_Chord_A",
		value: 10,
	},
	{
		id: "ModeShift_Chord_B",
		value: 11,
	},
	{
		id: "ModeShift_Chord_X",
		value: 12,
	},
	{
		id: "ModeShift_Chord_Y",
		value: 13,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "GyroMinus",
		value: 15,
	},
	{
		id: "GyroPlus",
		value: 14,
	},
	{
		id: "GyroCapture",
		value: 21,
	},
];
const Ve = [
	{
		id: "--",
		value: 0,
	},
	{
		id: "ModeShift_Chord_LeftBumper",
		value: 1,
	},
	{
		id: "ModeShift_Chord_RightBumper",
		value: 2,
	},
	{
		id: "ModeShift_Chord_LeftTrigger",
		value: 5,
	},
	{
		id: "ModeShift_Chord_RightTrigger",
		value: 6,
	},
	{
		id: "ModeShift_Chord_LeftTriggerThreshold",
		value: 7,
	},
	{
		id: "ModeShift_Chord_RightTriggerThreshold",
		value: 8,
	},
	{
		id: "ModeShift_Chord_LeftJoystickClick",
		value: 9,
	},
	{
		id: "ModeShift_Chord_RightJoystickClick",
		value: 20,
	},
	{
		id: "ModeShift_Chord_A",
		value: 10,
	},
	{
		id: "ModeShift_Chord_B",
		value: 11,
	},
	{
		id: "ModeShift_Chord_X",
		value: 12,
	},
	{
		id: "ModeShift_Chord_Y",
		value: 13,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "ModeShift_Chord_Select",
		value: 15,
	},
	{
		id: "ModeShift_Chord_Start",
		value: 14,
	},
];
const He = [
	{
		id: "--",
		value: 0,
	},
	{
		id: "ModeShift_Chord_LeftBumper",
		value: 1,
	},
	{
		id: "ModeShift_Chord_RightBumper",
		value: 2,
	},
	{
		id: "GyroL4",
		value: 27,
	},
	{
		id: "GyroR4",
		value: 26,
	},
	{
		id: "GyroL5",
		value: 3,
	},
	{
		id: "GyroR5",
		value: 4,
	},
	{
		id: "ModeShift_Chord_LeftTrigger",
		value: 5,
	},
	{
		id: "ModeShift_Chord_RightTrigger",
		value: 6,
	},
	{
		id: "ModeShift_Chord_LeftTriggerThreshold",
		value: 7,
	},
	{
		id: "ModeShift_Chord_RightTriggerThreshold",
		value: 8,
	},
	{
		id: "ModeShift_Chord_LeftJoystickClick",
		value: 9,
	},
	{
		id: "ModeShift_Chord_RightJoystickClick",
		value: 20,
	},
	{
		id: "ModeShift_Chord_A",
		value: 10,
	},
	{
		id: "ModeShift_Chord_B",
		value: 11,
	},
	{
		id: "ModeShift_Chord_X",
		value: 12,
	},
	{
		id: "ModeShift_Chord_Y",
		value: 13,
	},
	{
		id: "GyroDpadUp",
		value: 28,
	},
	{
		id: "GyroDpadDown",
		value: 29,
	},
	{
		id: "GyroDpadLeft",
		value: 30,
	},
	{
		id: "GyroDpadRight",
		value: 31,
	},
	{
		id: "ModeShift_Chord_Select",
		value: 15,
	},
	{
		id: "ModeShift_Chord_Start",
		value: 14,
	},
];
export const av = {
	1: [
		{
			key: 100,
			id: "FullPress_StartDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 101,
			id: "FullPress_EndDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 25,
			id: "FullPress_HoldRepeats",
			toggle: true,
		},
		Me({
			key: 104,
			id: "FullPress_RepeatRate",
		}),
		{
			key: 103,
			id: "FullPress_Toggle",
			toggle: true,
		},
		{
			key: 102,
			id: "FullPress_CycleBindings",
			toggle: true,
		},
		{
			key: 111,
			id: "FullPress_Interruptable",
			toggle: true,
		},
		{
			key: 3,
			id: "FullPress_HapticIntensity",
			choices: $,
		},
		Re(RL.k_EControllerTypeFlags_MobileTouchController, {
			key: 120,
			id: "Activator_Analog",
			choices: ae,
		}),
	],
	5: [
		{
			key: 106,
			id: "LongPress_LongPressTime",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 100,
			id: "LongPress_StartDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 101,
			id: "LongPress_EndDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 25,
			id: "LongPress_HoldRepeats",
			toggle: true,
		},
		Me({
			key: 104,
			id: "LongPress_RepeatRate",
		}),
		{
			key: 103,
			id: "LongPress_Toggle",
			toggle: true,
		},
		{
			key: 102,
			id: "LongPress_CycleBindings",
			toggle: true,
		},
		{
			key: 3,
			id: "LongPress_HapticIntensity",
			choices: $,
		},
		Re(RL.k_EControllerTypeFlags_MobileTouchController, {
			key: 120,
			id: "Activator_Analog",
			choices: ae,
		}),
	],
	6: [
		{
			key: 105,
			id: "DoublePress_DoubleTapTime",
		},
		{
			key: 100,
			id: "DoublePress_StartDelay",
		},
		{
			key: 101,
			id: "DoublePress_EndDelay",
		},
		{
			key: 25,
			id: "DoublePress_HoldRepeats",
			toggle: true,
		},
		Me({
			key: 104,
			id: "DoublePress_RepeatRate",
		}),
		{
			key: 103,
			id: "DoublePress_Toggle",
			toggle: true,
		},
		{
			key: 102,
			id: "DoublePress_CycleBindings",
			toggle: true,
		},
		{
			key: 3,
			id: "DoublePress_HapticIntensity",
			choices: $,
		},
		Re(RL.k_EControllerTypeFlags_MobileTouchController, {
			key: 120,
			id: "Activator_Analog",
			choices: ae,
		}),
	],
	4: [
		{
			key: 100,
			id: "Release_StartDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 101,
			id: "Release_EndDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 103,
			id: "Release_Toggle",
			toggle: true,
		},
		{
			key: 102,
			id: "Release_CycleBindings",
			toggle: true,
		},
		{
			key: 111,
			id: "Release_Interruptable",
			toggle: true,
		},
		{
			key: 3,
			id: "Release_HapticIntensity",
			choices: $,
		},
	],
	3: [
		{
			key: 100,
			id: "StartPress_StartDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 101,
			id: "StartPress_EndDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 103,
			id: "StartPress_Toggle",
			toggle: true,
		},
		{
			key: 102,
			id: "StartPress_CycleBindings",
			toggle: true,
		},
		{
			key: 3,
			id: "StartPress_HapticIntensity",
			choices: $,
		},
	],
	7: [
		{
			key: 113,
			id: "Analog_AnalogOutputAxis",
			choices: Oe,
		},
		{
			key: 12,
			id: "Analog_AnalogStart",
		},
		{
			key: 13,
			id: "Analog_AnalogEnd",
		},
		{
			key: 3,
			id: "Analog_HapticIntensity",
			choices: $,
		},
	],
	2: [
		{
			key: 107,
			id: "SoftPress_Threshold",
		},
		{
			key: 112,
			id: "SoftPress_SoftPressStyle",
			choices: be,
		},
		{
			key: 100,
			id: "SoftPress_StartDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 101,
			id: "SoftPress_EndDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 25,
			id: "SoftPress_HoldRepeats",
			toggle: true,
		},
		Me({
			key: 104,
			id: "SoftPress_RepeatRate",
		}),
		{
			key: 102,
			id: "SoftPress_CycleBindings",
			toggle: true,
		},
		{
			key: 103,
			id: "SoftPress_Toggle",
			toggle: true,
		},
		{
			key: 111,
			id: "SoftPress_Interruptable",
			toggle: true,
		},
		{
			key: 3,
			id: "SoftPress_HapticIntensity",
			choices: $,
		},
		{
			key: 20,
			id: "SoftPress_Invert",
			toggle: true,
		},
	],
	8: [
		{
			key: 114,
			id: "Chord_ChordButton",
			choices: function (e, t) {
				let r;
				switch (t) {
					case 4:
						r = Le;
						break;
					case 34:
						r = ze;
						break;
					case 45:
						r = xe;
						break;
					case 48:
						r = Ue;
						break;
					case 39:
					case 40:
					case 41:
					case 38:
					case 42:
						r = We;
						break;
					case 31:
					case 32:
					default:
						r = Ve;
						break;
					case 46:
						r = He;
						break;
					case 2:
						r = Pe;
				}
				return r;
			},
		},
		{
			key: 100,
			id: "Chord_StartDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 101,
			id: "Chord_EndDelay",
			valueSuffixToken: "#Unit_Milliseconds",
		},
		{
			key: 25,
			id: "Chord_HoldRepeats",
			toggle: true,
		},
		Me({
			key: 104,
			id: "Chord_RepeatRate",
		}),
		{
			key: 111,
			id: "Chord_Interruptable",
			toggle: true,
		},
		{
			key: 103,
			id: "Chord_Toggle",
			toggle: true,
		},
		{
			key: 102,
			id: "Chord_CycleBindings",
			toggle: true,
		},
		{
			key: 3,
			id: "Chord_HapticIntensity",
			choices: $,
		},
	],
};
export const wn = [
	{
		id: "FullPress",
		value: 1,
	},
	{
		id: "DoublePress",
		value: 6,
		filter_alwayson: true,
	},
	{
		id: "LongPress",
		value: 5,
	},
	{
		id: "StartPress",
		value: 3,
	},
	{
		id: "Release",
		value: 4,
	},
	{
		id: "SoftPress",
		value: 2,
		filter_alwayson: true,
	},
	{
		id: "Analog",
		value: 7,
		filter_alwayson: true,
	},
	{
		id: "Chord",
		value: 8,
	},
];
export const bu = [
	{
		key: 4,
		rawValue: "A",
		id: "#KeyboardKey_A",
		alpha: true,
	},
	{
		key: 5,
		rawValue: "B",
		id: "#KeyboardKey_B",
		alpha: true,
	},
	{
		key: 6,
		rawValue: "C",
		id: "#KeyboardKey_C",
		alpha: true,
	},
	{
		key: 7,
		rawValue: "D",
		id: "#KeyboardKey_D",
		alpha: true,
	},
	{
		key: 8,
		rawValue: "E",
		id: "#KeyboardKey_E",
		alpha: true,
	},
	{
		key: 9,
		rawValue: "F",
		id: "#KeyboardKey_F",
		alpha: true,
	},
	{
		key: 10,
		rawValue: "G",
		id: "#KeyboardKey_G",
		alpha: true,
	},
	{
		key: 11,
		rawValue: "H",
		id: "#KeyboardKey_H",
		alpha: true,
	},
	{
		key: 12,
		rawValue: "I",
		id: "#KeyboardKey_I",
		alpha: true,
	},
	{
		key: 13,
		rawValue: "J",
		id: "#KeyboardKey_J",
		alpha: true,
	},
	{
		key: 14,
		rawValue: "K",
		id: "#KeyboardKey_K",
		alpha: true,
	},
	{
		key: 15,
		rawValue: "L",
		id: "#KeyboardKey_L",
		alpha: true,
	},
	{
		key: 16,
		rawValue: "M",
		id: "#KeyboardKey_M",
		alpha: true,
	},
	{
		key: 17,
		rawValue: "N",
		id: "#KeyboardKey_N",
		alpha: true,
	},
	{
		key: 18,
		rawValue: "O",
		id: "#KeyboardKey_O",
		alpha: true,
	},
	{
		key: 19,
		rawValue: "P",
		id: "#KeyboardKey_P",
		alpha: true,
	},
	{
		key: 20,
		rawValue: "Q",
		id: "#KeyboardKey_Q",
		alpha: true,
	},
	{
		key: 21,
		rawValue: "R",
		id: "#KeyboardKey_R",
		alpha: true,
	},
	{
		key: 22,
		rawValue: "S",
		id: "#KeyboardKey_S",
		alpha: true,
	},
	{
		key: 23,
		rawValue: "T",
		id: "#KeyboardKey_T",
		alpha: true,
	},
	{
		key: 24,
		rawValue: "U",
		id: "#KeyboardKey_U",
		alpha: true,
	},
	{
		key: 25,
		rawValue: "V",
		id: "#KeyboardKey_V",
		alpha: true,
	},
	{
		key: 26,
		rawValue: "W",
		id: "#KeyboardKey_W",
		alpha: true,
	},
	{
		key: 27,
		rawValue: "X",
		id: "#KeyboardKey_X",
		alpha: true,
	},
	{
		key: 28,
		rawValue: "Y",
		id: "#KeyboardKey_Y",
		alpha: true,
	},
	{
		key: 29,
		rawValue: "Z",
		id: "#KeyboardKey_Z",
		alpha: true,
	},
	{
		key: 30,
		rawValue: "1",
		id: "#KeyboardKey_1",
		num: true,
	},
	{
		key: 31,
		rawValue: "2",
		id: "#KeyboardKey_2",
		num: true,
	},
	{
		key: 32,
		rawValue: "3",
		id: "#KeyboardKey_3",
		num: true,
	},
	{
		key: 33,
		rawValue: "4",
		id: "#KeyboardKey_4",
		num: true,
	},
	{
		key: 34,
		rawValue: "5",
		id: "#KeyboardKey_5",
		num: true,
	},
	{
		key: 35,
		rawValue: "6",
		id: "#KeyboardKey_6",
		num: true,
	},
	{
		key: 36,
		rawValue: "7",
		id: "#KeyboardKey_7",
		num: true,
	},
	{
		key: 37,
		rawValue: "8",
		id: "#KeyboardKey_8",
		num: true,
	},
	{
		key: 38,
		rawValue: "9",
		id: "#KeyboardKey_9",
		num: true,
	},
	{
		key: 39,
		rawValue: "0",
		id: "#KeyboardKey_0",
		num: true,
	},
	{
		key: 40,
		id: "#KeyboardKey_Return",
		cmd: true,
	},
	{
		key: 41,
		id: "#KeyboardKey_Escape",
		cmd: true,
	},
	{
		key: 42,
		id: "#KeyboardKey_Backspace",
		edit: true,
	},
	{
		key: 43,
		id: "#KeyboardKey_Tab",
		space: true,
	},
	{
		key: 44,
		id: "#KeyboardKey_Space",
		space: true,
	},
	{
		key: 45,
		id: "#KeyboardKey_Dash",
		punc: true,
	},
	{
		key: 46,
		id: "#KeyboardKey_Equals",
		punc: true,
	},
	{
		key: 47,
		id: "#KeyboardKey_Left_Bracket",
		punc: true,
	},
	{
		key: 48,
		id: "#KeyboardKey_Right_Bracket",
		punc: true,
	},
	{
		key: 49,
		id: "#KeyboardKey_Backslash",
		punc: true,
	},
	{
		key: 51,
		id: "#KeyboardKey_Semicolon",
		punc: true,
	},
	{
		key: 52,
		id: "#KeyboardKey_Single_Quote",
		punc: true,
	},
	{
		key: 53,
		id: "#KeyboardKey_Back_Tick",
		punc: true,
	},
	{
		key: 54,
		id: "#KeyboardKey_Comma",
		punc: true,
	},
	{
		key: 55,
		id: "#KeyboardKey_Period",
		punc: true,
	},
	{
		key: 56,
		id: "#KeyboardKey_Forward_Slash",
		punc: true,
	},
	{
		key: 57,
		id: "#KeyboardKey_CapsLock",
		mod: true,
	},
	{
		key: 58,
		rawValue: "F1",
		id: "#KeyboardKey_F1",
		fun: true,
	},
	{
		key: 59,
		rawValue: "F2",
		id: "#KeyboardKey_F2",
		fun: true,
	},
	{
		key: 60,
		rawValue: "F3",
		id: "#KeyboardKey_F3",
		fun: true,
	},
	{
		key: 61,
		rawValue: "F4",
		id: "#KeyboardKey_F4",
		fun: true,
	},
	{
		key: 62,
		rawValue: "F5",
		id: "#KeyboardKey_F5",
		fun: true,
	},
	{
		key: 63,
		rawValue: "F6",
		id: "#KeyboardKey_F6",
		fun: true,
	},
	{
		key: 64,
		rawValue: "F7",
		id: "#KeyboardKey_F7",
		fun: true,
	},
	{
		key: 65,
		rawValue: "F8",
		id: "#KeyboardKey_F8",
		fun: true,
	},
	{
		key: 66,
		rawValue: "F9",
		id: "#KeyboardKey_F9",
		fun: true,
	},
	{
		key: 67,
		rawValue: "F10",
		id: "#KeyboardKey_F10",
		fun: true,
	},
	{
		key: 68,
		rawValue: "F11",
		id: "#KeyboardKey_F11",
		fun: true,
	},
	{
		key: 69,
		rawValue: "F12",
		id: "#KeyboardKey_F12",
		fun: true,
	},
	{
		key: 70,
		id: "#KeyboardKey_Print_Screen",
		cmd: true,
	},
	{
		key: 71,
		id: "#KeyboardKey_Scroll_Lock",
		mod: true,
	},
	{
		key: 72,
		id: "#KeyboardKey_Break",
		cmd: true,
	},
	{
		key: 73,
		id: "#KeyboardKey_Insert",
		edit: true,
	},
	{
		key: 74,
		id: "#KeyboardKey_Home",
		move: true,
	},
	{
		key: 75,
		id: "#KeyboardKey_Page_Up",
		move: true,
	},
	{
		key: 76,
		id: "#KeyboardKey_Delete",
		edit: true,
	},
	{
		key: 77,
		id: "#KeyboardKey_End",
		move: true,
	},
	{
		key: 78,
		id: "#KeyboardKey_Page_Down",
		move: true,
	},
	{
		key: 79,
		id: "#KeyboardKey_Right_Arrow",
		move: true,
	},
	{
		key: 80,
		id: "#KeyboardKey_Left_Arrow",
		move: true,
	},
	{
		key: 81,
		id: "#KeyboardKey_Down_Arrow",
		move: true,
	},
	{
		key: 82,
		id: "#KeyboardKey_Up_Arrow",
		move: true,
	},
	{
		key: 83,
		id: "#KeyboardKey_KeyboardKey_Num_Lock",
		pad: true,
	},
	{
		key: 84,
		id: "#KeyboardKey_Keypad_Forward_Slash",
		pad: true,
	},
	{
		key: 85,
		id: "#KeyboardKey_Keypad_Asterisk",
		pad: true,
	},
	{
		key: 86,
		id: "#KeyboardKey_Keypad_Dash",
		pad: true,
	},
	{
		key: 87,
		id: "#KeyboardKey_Keypad_Plus",
		pad: true,
	},
	{
		key: 88,
		id: "#KeyboardKey_Keypad_Enter",
		pad: true,
	},
	{
		key: 89,
		id: "#KeyboardKey_Keypad_1",
		pad: true,
	},
	{
		key: 90,
		id: "#KeyboardKey_Keypad_2",
		pad: true,
	},
	{
		key: 91,
		id: "#KeyboardKey_Keypad_3",
		pad: true,
	},
	{
		key: 92,
		id: "#KeyboardKey_Keypad_4",
		pad: true,
	},
	{
		key: 93,
		id: "#KeyboardKey_Keypad_5",
		pad: true,
	},
	{
		key: 94,
		id: "#KeyboardKey_Keypad_6",
		pad: true,
	},
	{
		key: 95,
		id: "#KeyboardKey_Keypad_7",
		pad: true,
	},
	{
		key: 96,
		id: "#KeyboardKey_Keypad_8",
		pad: true,
	},
	{
		key: 97,
		id: "#KeyboardKey_Keypad_9",
		pad: true,
	},
	{
		key: 98,
		id: "#KeyboardKey_Keypad_0",
		pad: true,
	},
	{
		key: 99,
		id: "#KeyboardKey_Keypad_Period",
		pad: true,
	},
	{
		key: 100,
		id: "#KeyboardKey_LAlt",
		mod: true,
	},
	{
		key: 101,
		id: "#KeyboardKey_LShift",
		mod: true,
	},
	{
		key: 102,
		id: "#KeyboardKey_LWin",
		meta: true,
	},
	{
		key: 103,
		id: "#KeyboardKey_LControl",
		mod: true,
	},
	{
		key: 104,
		id: "#KeyboardKey_RAlt",
		mod: true,
	},
	{
		key: 105,
		id: "#KeyboardKey_RShift",
		mod: true,
	},
	{
		key: 106,
		id: "#KeyboardKey_RWin",
		meta: true,
	},
	{
		key: 107,
		id: "#KeyboardKey_RControl",
		mod: true,
	},
	{
		key: 108,
		id: "#KeyboardKey_VolUp",
		media: true,
	},
	{
		key: 109,
		id: "#KeyboardKey_VolDown",
		media: true,
	},
	{
		key: 110,
		id: "#KeyboardKey_Mute",
		media: true,
	},
	{
		key: 111,
		id: "#KeyboardKey_Play",
		media: true,
	},
	{
		key: 112,
		id: "#KeyboardKey_Stop",
		media: true,
	},
	{
		key: 113,
		id: "#KeyboardKey_Next",
		media: true,
	},
	{
		key: 114,
		id: "#KeyboardKey_Prev",
		media: true,
	},
];
export const Q7 = [
	{
		key: 0,
		id: "#MouseKey_Button_Left",
		button: true,
	},
	{
		key: 1,
		id: "#MouseKey_Button_Right",
		button: true,
	},
	{
		key: 2,
		id: "#MouseKey_Button_Middle",
		button: true,
	},
	{
		key: 3,
		id: "#MouseKey_Button_Back",
		button: true,
	},
	{
		key: 4,
		id: "#MouseKey_Button_Forward",
		button: true,
	},
	{
		key: 5,
		id: "#MouseKey_Scroll_Up",
		wheel: true,
	},
	{
		key: 6,
		id: "#MouseKey_Scroll_Down",
		wheel: true,
	},
];
export const HL = [
	{
		key: 7,
		id: "#GamepadKey_LeftBumper",
		button: true,
	},
	{
		key: 1,
		id: "#GamepadKey_LeftTrigger",
		button: true,
	},
	{
		key: 2,
		id: "#GamepadKey_RightTrigger",
		button: true,
	},
	{
		key: 8,
		id: "#GamepadKey_RightBumper",
		button: true,
	},
	{
		key: 16,
		id: "#GamepadKey_DPad_Left",
		direction: true,
	},
	{
		key: 14,
		id: "#GamepadKey_DPad_Up",
		direction: true,
	},
	{
		key: 6,
		rawValue: "X",
		id: "#GamepadKey_X",
		button: true,
	},
	{
		key: 5,
		rawValue: "Y",
		id: "#GamepadKey_Y",
		button: true,
	},
	{
		key: 15,
		id: "#GamepadKey_DPad_Down",
		direction: true,
	},
	{
		key: 17,
		id: "#GamepadKey_DPad_Right",
		direction: true,
	},
	{
		key: 3,
		rawValue: "A",
		id: "#GamepadKey_A",
		button: true,
	},
	{
		key: 4,
		rawValue: "B",
		id: "#GamepadKey_B",
		button: true,
	},
	{
		key: 9,
		id: "#GamepadKey_LeftStick_Click",
		button: true,
	},
	{
		key: 12,
		id: "#GamepadKey_Select",
		button: true,
	},
	{
		key: 11,
		id: "#GamepadKey_Start",
		button: true,
	},
	{
		key: 10,
		id: "#GamepadKey_RightStick_Click",
		button: true,
	},
	{
		key: 20,
		id: "#GamepadKey_LeftStick_Left",
		direction: true,
	},
	{
		key: 18,
		id: "#GamepadKey_LeftStick_Up",
		direction: true,
	},
	{
		key: 24,
		id: "#GamepadKey_RightStick_Left",
		direction: true,
	},
	{
		key: 22,
		id: "#GamepadKey_RightStick_Up",
		direction: true,
	},
	{
		key: 19,
		id: "#GamepadKey_LeftStick_Down",
		direction: true,
	},
	{
		key: 21,
		id: "#GamepadKey_LeftStick_Right",
		direction: true,
	},
	{
		key: 23,
		id: "#GamepadKey_RightStick_Down",
		direction: true,
	},
	{
		key: 25,
		id: "#GamepadKey_RightStick_Right",
		direction: true,
	},
];
export function ND(e) {
	return (0, Localize)(e + "_Title");
}
export function GW(e, t) {
	return (0, Localize)(e + "_Title");
}
export function wm(e, t, r, n) {
	if (n) {
		return (0, Localize)("#ControllerBinding_ModeShift_SubHeader", ND(t));
	}
	{
		const n = e ? ND(t) : r;
		if (e) {
			return (
				r ??
				(0, Localize)("#ControllerConfigurator_SourceMode_Group_Behavior", n)
			);
		} else {
			return (0, Localize)(
				"#ControllerConfigurator_SourceMode_Group_Behavior",
				n,
			);
		}
	}
}
export function fU(e, t) {
	const r = e + "Explanation_on_" + t;
	if (BLocStringExists(r)) {
		return (0, Localize)(r);
	}
}
export function JS(e) {
	const t = e + "_Explanation";
	if (BLocStringExists(t)) {
		return (0, Localize)(t);
	}
}
export function bj(e) {
	return (0, Localize)("#ControllerBinding_ActivatorDropDown_" + e);
}
export function ix(e, ...t) {
	return (0, Localize)("#ControllerBinding_" + e, ...t);
}
export function Fq(e) {
	return (0, Localize)("#ControllerSettingValue_" + e);
}
export function Aj(e, t) {
	const r = "#ControllerBinding_" + e + "_" + t + "_Description";
	if (BLocStringExists(r)) {
		return (0, Localize)(r);
	}
}
export function RW(e) {
	return (0, Localize)("#" + SW[e]?.subheader);
}
export const $o = [
	{
		eControllerType: 2,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_color_button_a.svg",
	},
	{
		eControllerType: 2,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_color_button_b.svg",
	},
	{
		eControllerType: 2,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_color_button_x.svg",
	},
	{
		eControllerType: 2,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_color_button_y.svg",
	},
	{
		eControllerType: 2,
		eSource: 1,
		eInput: 50,
		strPath: "/steaminputglyphs/sc_dpad_touch.svg",
	},
	{
		eControllerType: 2,
		eSource: 1,
		eInput: 0,
		strPath: "/steaminputglyphs/sc_dpad_swipe.svg",
	},
	{
		eControllerType: 2,
		eSource: 1,
		eInput: 13,
		strPath: "/steaminputglyphs/sc_dpad_click.svg",
	},
	{
		eControllerType: 2,
		eSource: 1,
		eInput: 1,
		strPath: "/steaminputglyphs/sc_dpad_up.svg",
	},
	{
		eControllerType: 2,
		eSource: 1,
		eInput: 5,
		strPath: "/steaminputglyphs/sc_dpad_down.svg",
	},
	{
		eControllerType: 2,
		eSource: 1,
		eInput: 7,
		strPath: "/steaminputglyphs/sc_dpad_left.svg",
	},
	{
		eControllerType: 2,
		eSource: 1,
		eInput: 3,
		strPath: "/steaminputglyphs/sc_dpad_right.svg",
	},
	{
		eControllerType: 2,
		eSource: 2,
		eInput: 50,
		strPath: "/steaminputglyphs/sc_touchpad_touch.svg",
	},
	{
		eControllerType: 2,
		eSource: 2,
		eInput: 0,
		strPath: "/steaminputglyphs/sc_touchpad_swipe.svg",
	},
	{
		eControllerType: 2,
		eSource: 2,
		eInput: 13,
		strPath: "/steaminputglyphs/sc_touchpad_click.svg",
	},
	{
		eControllerType: 2,
		eSource: 2,
		eInput: 1,
		strPath: "/steaminputglyphs/sc_touchpad_up.svg",
	},
	{
		eControllerType: 2,
		eSource: 2,
		eInput: 5,
		strPath: "/steaminputglyphs/sc_touchpad_down.svg",
	},
	{
		eControllerType: 2,
		eSource: 2,
		eInput: 7,
		strPath: "/steaminputglyphs/sc_touchpad_left.svg",
	},
	{
		eControllerType: 2,
		eSource: 2,
		eInput: 3,
		strPath: "/steaminputglyphs/sc_touchpad_right.svg",
	},
	{
		eControllerType: 2,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/sc_lt_soft.svg",
	},
	{
		eControllerType: 2,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/sc_lt.svg",
	},
	{
		eControllerType: 2,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/sc_lt.svg",
	},
	{
		eControllerType: 2,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/sc_rt_soft.svg",
	},
	{
		eControllerType: 2,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/sc_rt.svg",
	},
	{
		eControllerType: 2,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 2,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_lstick_click.svg",
	},
	{
		eControllerType: 2,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 2,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 2,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 2,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 2,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 2,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_pitch.svg",
	},
	{
		eControllerType: 2,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_yaw.svg",
	},
	{
		eControllerType: 2,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_roll.svg",
	},
	{
		eControllerType: 2,
		eSource: 10,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 2,
		eSource: 10,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 2,
		eSource: 10,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 2,
		eSource: 10,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 2,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/sc_lb.svg",
	},
	{
		eControllerType: 2,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/sc_rb.svg",
	},
	{
		eControllerType: 2,
		eSource: 5,
		eInput: 55,
		strPath: "/steaminputglyphs/sc_lg.svg",
	},
	{
		eControllerType: 2,
		eSource: 5,
		eInput: 56,
		strPath: "/steaminputglyphs/sc_rg.svg",
	},
	{
		eControllerType: 2,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/sc_button_r_arrow.svg",
		bPillShapedIcon: true,
	},
	{
		eControllerType: 2,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/sc_button_l_arrow.svg",
		bPillShapedIcon: true,
	},
	{
		eControllerType: 3,
		eSource: 4,
		eInput: 12,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 4,
		eInput: 10,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 4,
		eInput: 11,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 4,
		eInput: 9,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 1,
		eInput: 0,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 1,
		eInput: 0,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 1,
		eInput: 13,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 1,
		eInput: 13,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 1,
		eInput: 1,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 1,
		eInput: 5,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 1,
		eInput: 7,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 1,
		eInput: 3,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 2,
		eInput: 0,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 2,
		eInput: 0,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 2,
		eInput: 13,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 2,
		eInput: 13,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 2,
		eInput: 1,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 2,
		eInput: 5,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 2,
		eInput: 7,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 2,
		eInput: 3,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 6,
		eInput: 15,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 6,
		eInput: 13,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 7,
		eInput: 15,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 7,
		eInput: 13,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 3,
		eInput: 0,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 3,
		eInput: 13,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 3,
		eInput: 1,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 3,
		eInput: 5,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 3,
		eInput: 7,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 3,
		eInput: 3,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 3,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 3,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 3,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 53,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 53,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 54,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 54,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 55,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 55,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 56,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 56,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 57,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 57,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 58,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 58,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 52,
		strPath: undefined,
	},
	{
		eControllerType: 3,
		eSource: 5,
		eInput: 51,
		strPath: undefined,
	},
	{
		eControllerType: 34,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/ps_color_button_x.svg",
	},
	{
		eControllerType: 34,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/ps_color_button_circle.svg",
	},
	{
		eControllerType: 34,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/ps_color_button_square.svg",
	},
	{
		eControllerType: 34,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/ps_color_button_triangle.svg",
	},
	{
		eControllerType: 34,
		eSource: 4,
		eInput: 12,
		bKnockout: true,
		strPath: "/steaminputglyphs/ps_button_x.svg",
	},
	{
		eControllerType: 34,
		eSource: 4,
		eInput: 10,
		bKnockout: true,
		strPath: "/steaminputglyphs/ps_button_circle.svg",
	},
	{
		eControllerType: 34,
		eSource: 4,
		eInput: 11,
		bKnockout: true,
		strPath: "/steaminputglyphs/ps_button_square.svg",
	},
	{
		eControllerType: 34,
		eSource: 4,
		eInput: 9,
		bKnockout: true,
		strPath: "/steaminputglyphs/ps_button_triangle.svg",
	},
	{
		eControllerType: 34,
		eSource: 1,
		eInput: 50,
		strPath: "/steaminputglyphs/ps4_trackpad_l_touch.svg",
	},
	{
		eControllerType: 34,
		eSource: 1,
		eInput: 0,
		strPath: "/steaminputglyphs/ps4_trackpad_l_ring.svg",
	},
	{
		eControllerType: 34,
		eSource: 1,
		eInput: 13,
		strPath: "/steaminputglyphs/ps4_trackpad_l_click.svg",
	},
	{
		eControllerType: 34,
		eSource: 1,
		eInput: 1,
		strPath: "/steaminputglyphs/ps4_trackpad_l_up.svg",
	},
	{
		eControllerType: 34,
		eSource: 1,
		eInput: 5,
		strPath: "/steaminputglyphs/ps4_trackpad_l_down.svg",
	},
	{
		eControllerType: 34,
		eSource: 1,
		eInput: 7,
		strPath: "/steaminputglyphs/ps4_trackpad_l_left.svg",
	},
	{
		eControllerType: 34,
		eSource: 1,
		eInput: 3,
		strPath: "/steaminputglyphs/ps4_trackpad_l_right.svg",
	},
	{
		eControllerType: 34,
		eSource: 2,
		eInput: 50,
		strPath: "/steaminputglyphs/ps4_trackpad_r_touch.svg",
	},
	{
		eControllerType: 34,
		eSource: 2,
		eInput: 0,
		strPath: "/steaminputglyphs/ps4_trackpad_r_ring.svg",
	},
	{
		eControllerType: 34,
		eSource: 2,
		eInput: 13,
		strPath: "/steaminputglyphs/ps4_trackpad_r_click.svg",
	},
	{
		eControllerType: 34,
		eSource: 2,
		eInput: 1,
		strPath: "/steaminputglyphs/ps4_trackpad_r_up.svg",
	},
	{
		eControllerType: 34,
		eSource: 2,
		eInput: 5,
		strPath: "/steaminputglyphs/ps4_trackpad_r_down.svg",
	},
	{
		eControllerType: 34,
		eSource: 2,
		eInput: 7,
		strPath: "/steaminputglyphs/ps4_trackpad_r_left.svg",
	},
	{
		eControllerType: 34,
		eSource: 2,
		eInput: 3,
		strPath: "/steaminputglyphs/ps4_trackpad_r_right.svg",
	},
	{
		eControllerType: 34,
		eSource: 11,
		eInput: 50,
		strPath: "/steaminputglyphs/ps4_trackpad_ring.svg",
	},
	{
		eControllerType: 34,
		eSource: 11,
		eInput: 0,
		strPath: "/steaminputglyphs/ps4_trackpad.svg",
	},
	{
		eControllerType: 34,
		eSource: 11,
		eInput: 13,
		strPath: "/steaminputglyphs/ps4_trackpad_click.svg",
	},
	{
		eControllerType: 34,
		eSource: 11,
		eInput: 1,
		strPath: "/steaminputglyphs/ps4_trackpad_up.svg",
	},
	{
		eControllerType: 34,
		eSource: 11,
		eInput: 5,
		strPath: "/steaminputglyphs/ps4_trackpad_down.svg",
	},
	{
		eControllerType: 34,
		eSource: 11,
		eInput: 7,
		strPath: "/steaminputglyphs/ps4_trackpad_left.svg",
	},
	{
		eControllerType: 34,
		eSource: 11,
		eInput: 3,
		strPath: "/steaminputglyphs/ps4_trackpad_right.svg",
	},
	{
		eControllerType: 34,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/ps4_l2_soft.svg",
	},
	{
		eControllerType: 34,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/ps4_l2.svg",
	},
	{
		eControllerType: 34,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/ps4_r2_soft.svg",
	},
	{
		eControllerType: 34,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/ps4_r2.svg",
	},
	{
		eControllerType: 34,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 34,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_l3.svg",
	},
	{
		eControllerType: 34,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 34,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 34,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 34,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 34,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 34,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_r3.svg",
	},
	{
		eControllerType: 34,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 34,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 34,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 34,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 34,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/ps_dpad_up.svg",
	},
	{
		eControllerType: 34,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/ps_dpad_down.svg",
	},
	{
		eControllerType: 34,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/ps_dpad_left.svg",
	},
	{
		eControllerType: 34,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/ps_dpad_right.svg",
	},
	{
		eControllerType: 34,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 34,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/ps4_l1.svg",
	},
	{
		eControllerType: 34,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/ps4_r1.svg",
	},
	{
		eControllerType: 34,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/ps4_button_options.svg",
		bPillShapedIcon: true,
	},
	{
		eControllerType: 34,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/ps4_button_share.svg",
		bPillShapedIcon: true,
	},
	{
		eControllerType: 34,
		eSource: 5,
		eInput: 59,
		strPath: "/steaminputglyphs/ps4_trackpad_l_click.svg",
	},
	{
		eControllerType: 34,
		eSource: 5,
		eInput: 60,
		strPath: "/steaminputglyphs/ps4_trackpad_r_click.svg",
	},
	{
		eControllerType: 34,
		eSource: 5,
		eInput: 82,
		strPath: "/steaminputglyphs/ps4_trackpad_l_touch.svg",
	},
	{
		eControllerType: 34,
		eSource: 5,
		eInput: 83,
		strPath: "/steaminputglyphs/ps4_trackpad_r_touch.svg",
	},
	{
		eControllerType: 32,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_color_button_a.svg",
	},
	{
		eControllerType: 32,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_color_button_b.svg",
	},
	{
		eControllerType: 32,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_color_button_x.svg",
	},
	{
		eControllerType: 32,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_color_button_y.svg",
	},
	{
		eControllerType: 32,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_lt_soft.svg",
	},
	{
		eControllerType: 32,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_lt.svg",
	},
	{
		eControllerType: 32,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_rt_soft.svg",
	},
	{
		eControllerType: 32,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_rt.svg",
	},
	{
		eControllerType: 32,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 32,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_lstick_click.svg",
	},
	{
		eControllerType: 32,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 32,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 32,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 32,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 32,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 32,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_rstick_click.svg",
	},
	{
		eControllerType: 32,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 32,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 32,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 32,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 32,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_dpad_up.svg",
	},
	{
		eControllerType: 32,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_dpad_down.svg",
	},
	{
		eControllerType: 32,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_dpad_left.svg",
	},
	{
		eControllerType: 32,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_dpad_right.svg",
	},
	{
		eControllerType: 32,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/xbox_lb.svg",
	},
	{
		eControllerType: 32,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/xbox_rb.svg",
	},
	{
		eControllerType: 32,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/xbox_button_start.svg",
	},
	{
		eControllerType: 32,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/xbox_button_select.svg",
	},
	{
		eControllerType: 32,
		eSource: 5,
		eInput: 68,
		strPath: "/steaminputglyphs/xbox_button_share.svg",
	},
	{
		eControllerType: 31,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_color_button_a.svg",
	},
	{
		eControllerType: 31,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_color_button_b.svg",
	},
	{
		eControllerType: 31,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_color_button_x.svg",
	},
	{
		eControllerType: 31,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_color_button_y.svg",
	},
	{
		eControllerType: 31,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_lt_soft.svg",
	},
	{
		eControllerType: 31,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_lt.svg",
	},
	{
		eControllerType: 31,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_rt_soft.svg",
	},
	{
		eControllerType: 31,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_rt.svg",
	},
	{
		eControllerType: 31,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 31,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_lstick_click.svg",
	},
	{
		eControllerType: 31,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 31,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 31,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 31,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 31,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 31,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_rstick_click.svg",
	},
	{
		eControllerType: 31,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 31,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 31,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 31,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 31,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_dpad_up.svg",
	},
	{
		eControllerType: 31,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_dpad_down.svg",
	},
	{
		eControllerType: 31,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_dpad_left.svg",
	},
	{
		eControllerType: 31,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_dpad_right.svg",
	},
	{
		eControllerType: 31,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/xbox_lb.svg",
	},
	{
		eControllerType: 31,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/xbox_rb.svg",
	},
	{
		eControllerType: 31,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/xbox360_button_start.svg",
	},
	{
		eControllerType: 31,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/xbox360_button_select.svg",
	},
	{
		eControllerType: 30,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_color_button_a.svg",
	},
	{
		eControllerType: 30,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_color_button_b.svg",
	},
	{
		eControllerType: 30,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_color_button_x.svg",
	},
	{
		eControllerType: 30,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_color_button_y.svg",
	},
	{
		eControllerType: 30,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_lt_soft.svg",
	},
	{
		eControllerType: 30,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_lt.svg",
	},
	{
		eControllerType: 30,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_rt_soft.svg",
	},
	{
		eControllerType: 30,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_rt.svg",
	},
	{
		eControllerType: 30,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 30,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_lstick_click.svg",
	},
	{
		eControllerType: 30,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 30,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 30,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 30,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 30,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 30,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_rstick_click.svg",
	},
	{
		eControllerType: 30,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 30,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 30,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 30,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 30,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_dpad_up.svg",
	},
	{
		eControllerType: 30,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_dpad_down.svg",
	},
	{
		eControllerType: 30,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_dpad_left.svg",
	},
	{
		eControllerType: 30,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_dpad_right.svg",
	},
	{
		eControllerType: 30,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/xbox_lb.svg",
	},
	{
		eControllerType: 30,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/xbox_rb.svg",
	},
	{
		eControllerType: 30,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/xbox360_button_start.svg",
	},
	{
		eControllerType: 30,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/xbox360_button_select.svg",
	},
	{
		eControllerType: 38,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_button_a.svg",
	},
	{
		eControllerType: 38,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_button_b.svg",
	},
	{
		eControllerType: 38,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_button_x.svg",
	},
	{
		eControllerType: 38,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_button_y.svg",
	},
	{
		eControllerType: 38,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/switchpro_l2.svg",
	},
	{
		eControllerType: 38,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/switchpro_l2.svg",
	},
	{
		eControllerType: 38,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/switchpro_r2.svg",
	},
	{
		eControllerType: 38,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/switchpro_r2.svg",
	},
	{
		eControllerType: 38,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/switchpro_lstick.svg",
	},
	{
		eControllerType: 38,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/switchpro_lstick_click.svg",
	},
	{
		eControllerType: 38,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/switchpro_lstick_up.svg",
	},
	{
		eControllerType: 38,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/switchpro_lstick_down.svg",
	},
	{
		eControllerType: 38,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/switchpro_lstick_left.svg",
	},
	{
		eControllerType: 38,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/switchpro_lstick_right.svg",
	},
	{
		eControllerType: 38,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/switchpro_rstick.svg",
	},
	{
		eControllerType: 38,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/switchpro_rstick_click.svg",
	},
	{
		eControllerType: 38,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/switchpro_rstick_up.svg",
	},
	{
		eControllerType: 38,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/switchpro_rstick_down.svg",
	},
	{
		eControllerType: 38,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/switchpro_rstick_left.svg",
	},
	{
		eControllerType: 38,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/switchpro_rstick_right.svg",
	},
	{
		eControllerType: 38,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/switchpro_dpad_up.svg",
	},
	{
		eControllerType: 38,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/switchpro_dpad_down.svg",
	},
	{
		eControllerType: 38,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/switchpro_dpad_left.svg",
	},
	{
		eControllerType: 38,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/switchpro_dpad_right.svg",
	},
	{
		eControllerType: 38,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 38,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/switchpro_l.svg",
	},
	{
		eControllerType: 38,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/switchpro_r.svg",
	},
	{
		eControllerType: 38,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/switchpro_button_plus.svg",
	},
	{
		eControllerType: 38,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/switchpro_button_minus.svg",
	},
	{
		eControllerType: 38,
		eSource: 5,
		eInput: 68,
		strPath: "/steaminputglyphs/switchpro_button_capture.svg",
	},
	{
		eControllerType: 41,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_button_b.svg",
	},
	{
		eControllerType: 41,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_button_a.svg",
	},
	{
		eControllerType: 41,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_button_y.svg",
	},
	{
		eControllerType: 41,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_button_x.svg",
	},
	{
		eControllerType: 41,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/switchpro_l2.svg",
	},
	{
		eControllerType: 41,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/switchpro_l2.svg",
	},
	{
		eControllerType: 41,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/switchpro_r2.svg",
	},
	{
		eControllerType: 41,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/switchpro_r2.svg",
	},
	{
		eControllerType: 41,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/switchpro_lstick.svg",
	},
	{
		eControllerType: 41,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/switchpro_lstick_click.svg",
	},
	{
		eControllerType: 41,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/switchpro_lstick_up.svg",
	},
	{
		eControllerType: 41,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/switchpro_lstick_down.svg",
	},
	{
		eControllerType: 41,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/switchpro_lstick_left.svg",
	},
	{
		eControllerType: 41,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/switchpro_lstick_right.svg",
	},
	{
		eControllerType: 41,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/switchpro_rstick.svg",
	},
	{
		eControllerType: 41,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/switchpro_rstick_click.svg",
	},
	{
		eControllerType: 41,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/switchpro_rstick_up.svg",
	},
	{
		eControllerType: 41,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/switchpro_rstick_down.svg",
	},
	{
		eControllerType: 41,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/switchpro_rstick_left.svg",
	},
	{
		eControllerType: 41,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/switchpro_rstick_right.svg",
	},
	{
		eControllerType: 41,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/switchpro_dpad_up.svg",
	},
	{
		eControllerType: 41,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/switchpro_dpad_down.svg",
	},
	{
		eControllerType: 41,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/switchpro_dpad_left.svg",
	},
	{
		eControllerType: 41,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/switchpro_dpad_right.svg",
	},
	{
		eControllerType: 41,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 41,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_pitch.svg",
	},
	{
		eControllerType: 41,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_yaw.svg",
	},
	{
		eControllerType: 41,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_roll.svg",
	},
	{
		eControllerType: 41,
		eSource: 10,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 41,
		eSource: 10,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 41,
		eSource: 10,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 41,
		eSource: 10,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 41,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/switchpro_l.svg",
	},
	{
		eControllerType: 41,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/switchpro_r.svg",
	},
	{
		eControllerType: 41,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/switchpro_button_plus.svg",
	},
	{
		eControllerType: 41,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/switchpro_button_minus.svg",
	},
	{
		eControllerType: 41,
		eSource: 5,
		eInput: 55,
		strPath: "/steaminputglyphs/joyconpair_left_sr.svg",
	},
	{
		eControllerType: 41,
		eSource: 5,
		eInput: 56,
		strPath: "/steaminputglyphs/joyconpair_right_sl.svg",
	},
	{
		eControllerType: 41,
		eSource: 5,
		eInput: 57,
		strPath: "/steaminputglyphs/joyconpair_left_sl.svg",
	},
	{
		eControllerType: 41,
		eSource: 5,
		eInput: 58,
		strPath: "/steaminputglyphs/joyconpair_right_sr.svg",
	},
	{
		eControllerType: 41,
		eSource: 5,
		eInput: 68,
		strPath: "/steaminputglyphs/switchpro_button_capture.svg",
	},
	{
		eControllerType: 36,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_color_button_a.svg",
	},
	{
		eControllerType: 36,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_color_button_b.svg",
	},
	{
		eControllerType: 36,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_color_button_x.svg",
	},
	{
		eControllerType: 36,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_color_button_y.svg",
	},
	{
		eControllerType: 36,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_lt_soft.svg",
	},
	{
		eControllerType: 36,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_lt.svg",
	},
	{
		eControllerType: 36,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_rt_soft.svg",
	},
	{
		eControllerType: 36,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_rt.svg",
	},
	{
		eControllerType: 36,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 36,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_lstick_click.svg",
	},
	{
		eControllerType: 36,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 36,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 36,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 36,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 36,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 36,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_rstick_click.svg",
	},
	{
		eControllerType: 36,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 36,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 36,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 36,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 36,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_dpad_up.svg",
	},
	{
		eControllerType: 36,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_dpad_down.svg",
	},
	{
		eControllerType: 36,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_dpad_left.svg",
	},
	{
		eControllerType: 36,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_dpad_right.svg",
	},
	{
		eControllerType: 36,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/xbox_lb.svg",
	},
	{
		eControllerType: 36,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/xbox_rb.svg",
	},
	{
		eControllerType: 37,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_color_button_a.svg",
	},
	{
		eControllerType: 37,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_color_button_b.svg",
	},
	{
		eControllerType: 37,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_color_button_x.svg",
	},
	{
		eControllerType: 37,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_color_button_y.svg",
	},
	{
		eControllerType: 37,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_lt_soft.svg",
	},
	{
		eControllerType: 37,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_lt.svg",
	},
	{
		eControllerType: 37,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_rt_soft.svg",
	},
	{
		eControllerType: 37,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_rt.svg",
	},
	{
		eControllerType: 37,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 37,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_lstick_click.svg",
	},
	{
		eControllerType: 37,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 37,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 37,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 37,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 37,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 37,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_rstick_click.svg",
	},
	{
		eControllerType: 37,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 37,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 37,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 37,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 37,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_dpad_up.svg",
	},
	{
		eControllerType: 37,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_dpad_down.svg",
	},
	{
		eControllerType: 37,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_dpad_left.svg",
	},
	{
		eControllerType: 37,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_dpad_right.svg",
	},
	{
		eControllerType: 37,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/xbox_lb.svg",
	},
	{
		eControllerType: 37,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/xbox_rb.svg",
	},
	{
		eControllerType: 37,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/xbox360_button_select.svg",
	},
	{
		eControllerType: 33,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/ps_color_button_x.svg",
	},
	{
		eControllerType: 33,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/ps_color_button_circle.svg",
	},
	{
		eControllerType: 33,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/ps_color_button_square.svg",
	},
	{
		eControllerType: 33,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/ps_color_button_triangle.svg",
	},
	{
		eControllerType: 33,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/ps4_l2_soft.svg",
	},
	{
		eControllerType: 33,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/ps4_l2.svg",
	},
	{
		eControllerType: 33,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/ps4_r2_soft.svg",
	},
	{
		eControllerType: 33,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/ps4_r2.svg",
	},
	{
		eControllerType: 33,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 33,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_l3.svg",
	},
	{
		eControllerType: 33,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 33,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 33,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 33,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 33,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 33,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_r3.svg",
	},
	{
		eControllerType: 33,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 33,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 33,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 33,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 33,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/ps_dpad_up.svg",
	},
	{
		eControllerType: 33,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/ps_dpad_down.svg",
	},
	{
		eControllerType: 33,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/ps_dpad_left.svg",
	},
	{
		eControllerType: 33,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/ps_dpad_right.svg",
	},
	{
		eControllerType: 33,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/ps4_l1.svg",
	},
	{
		eControllerType: 33,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/ps4_r1.svg",
	},
	{
		eControllerType: 33,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/ps4_button_options.svg",
		bPillShapedIcon: true,
	},
	{
		eControllerType: 33,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/ps4_button_share.svg",
		bPillShapedIcon: true,
	},
	{
		eControllerType: 43,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_color_button_a.svg",
	},
	{
		eControllerType: 43,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_color_button_b.svg",
	},
	{
		eControllerType: 43,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_color_button_x.svg",
	},
	{
		eControllerType: 43,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_color_button_y.svg",
	},
	{
		eControllerType: 43,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_lt_soft.svg",
	},
	{
		eControllerType: 43,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_lt.svg",
	},
	{
		eControllerType: 43,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_rt_soft.svg",
	},
	{
		eControllerType: 43,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_rt.svg",
	},
	{
		eControllerType: 43,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 43,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_lstick_click.svg",
	},
	{
		eControllerType: 43,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 43,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 43,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 43,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 43,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 43,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_rstick_click.svg",
	},
	{
		eControllerType: 43,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 43,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 43,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 43,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 43,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_dpad_up.svg",
	},
	{
		eControllerType: 43,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_dpad_down.svg",
	},
	{
		eControllerType: 43,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_dpad_left.svg",
	},
	{
		eControllerType: 43,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_dpad_right.svg",
	},
	{
		eControllerType: 43,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/xbox_lb.svg",
	},
	{
		eControllerType: 43,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/xbox_rb.svg",
	},
	{
		eControllerType: 43,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/xbox360_button_start.svg",
	},
	{
		eControllerType: 43,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/xbox360_button_select.svg",
	},
	{
		eControllerType: 4,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_button_a.svg",
	},
	{
		eControllerType: 4,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_button_b.svg",
	},
	{
		eControllerType: 4,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_button_x.svg",
	},
	{
		eControllerType: 4,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_button_y.svg",
	},
	{
		eControllerType: 4,
		eSource: 1,
		eInput: 50,
		strPath: "/steaminputglyphs/sd_ltrackpad_ring.svg",
	},
	{
		eControllerType: 4,
		eSource: 1,
		eInput: 0,
		strPath: "/steaminputglyphs/sd_ltrackpad_swipe.svg",
	},
	{
		eControllerType: 4,
		eSource: 1,
		eInput: 13,
		strPath: "/steaminputglyphs/sd_ltrackpad_click.svg",
	},
	{
		eControllerType: 4,
		eSource: 1,
		eInput: 1,
		strPath: "/steaminputglyphs/sd_ltrackpad_up.svg",
	},
	{
		eControllerType: 4,
		eSource: 1,
		eInput: 5,
		strPath: "/steaminputglyphs/sd_ltrackpad_down.svg",
	},
	{
		eControllerType: 4,
		eSource: 1,
		eInput: 7,
		strPath: "/steaminputglyphs/sd_ltrackpad_left.svg",
	},
	{
		eControllerType: 4,
		eSource: 1,
		eInput: 3,
		strPath: "/steaminputglyphs/sd_ltrackpad_right.svg",
	},
	{
		eControllerType: 4,
		eSource: 2,
		eInput: 50,
		strPath: "/steaminputglyphs/sd_rtrackpad_ring.svg",
	},
	{
		eControllerType: 4,
		eSource: 2,
		eInput: 0,
		strPath: "/steaminputglyphs/sd_rtrackpad_swipe.svg",
	},
	{
		eControllerType: 4,
		eSource: 2,
		eInput: 13,
		strPath: "/steaminputglyphs/sd_rtrackpad_click.svg",
	},
	{
		eControllerType: 4,
		eSource: 2,
		eInput: 1,
		strPath: "/steaminputglyphs/sd_rtrackpad_up.svg",
	},
	{
		eControllerType: 4,
		eSource: 2,
		eInput: 5,
		strPath: "/steaminputglyphs/sd_rtrackpad_down.svg",
	},
	{
		eControllerType: 4,
		eSource: 2,
		eInput: 7,
		strPath: "/steaminputglyphs/sd_rtrackpad_left.svg",
	},
	{
		eControllerType: 4,
		eSource: 2,
		eInput: 3,
		strPath: "/steaminputglyphs/sd_rtrackpad_right.svg",
	},
	{
		eControllerType: 4,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/sd_l2_half.svg",
	},
	{
		eControllerType: 4,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/sd_l2.svg",
	},
	{
		eControllerType: 4,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/sd_r2_half.svg",
	},
	{
		eControllerType: 4,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/sd_r2.svg",
	},
	{
		eControllerType: 4,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 4,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_l3.svg",
	},
	{
		eControllerType: 4,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 4,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 4,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 4,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 4,
		eSource: 3,
		eInput: 50,
		strPath: "/steaminputglyphs/shared_lstick_touch.svg",
	},
	{
		eControllerType: 4,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 4,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_r3.svg",
	},
	{
		eControllerType: 4,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 4,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 4,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 4,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 4,
		eSource: 12,
		eInput: 50,
		strPath: "/steaminputglyphs/shared_rstick_touch.svg",
	},
	{
		eControllerType: 4,
		eSource: 13,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_dpad.svg",
	},
	{
		eControllerType: 4,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_dpad_up.svg",
	},
	{
		eControllerType: 4,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_dpad_down.svg",
	},
	{
		eControllerType: 4,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_dpad_left.svg",
	},
	{
		eControllerType: 4,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_dpad_right.svg",
	},
	{
		eControllerType: 4,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 4,
		eSource: 10,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 4,
		eSource: 10,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 4,
		eSource: 10,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 4,
		eSource: 10,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/sd_l1.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/sd_r1.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/sd_button_menu.svg",
		bPillShapedIcon: true,
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/sd_button_view.svg",
		bPillShapedIcon: true,
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 55,
		strPath: "/steaminputglyphs/sd_l5.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 56,
		strPath: "/steaminputglyphs/sd_r5.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 57,
		strPath: "/steaminputglyphs/sd_l4.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 58,
		strPath: "/steaminputglyphs/sd_r4.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 79,
		strPath: "/steaminputglyphs/ps_lb.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 80,
		strPath: "/steaminputglyphs/ps_rb.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 59,
		strPath: "/steaminputglyphs/sd_ltrackpad_click.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 60,
		strPath: "/steaminputglyphs/sd_rtrackpad_click.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 82,
		strPath: "/steaminputglyphs/sd_ltrackpad_touch.svg",
	},
	{
		eControllerType: 4,
		eSource: 5,
		eInput: 83,
		strPath: "/steaminputglyphs/sd_rtrackpad_touch.svg",
	},
	{
		eControllerType: 45,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/ps_button_x.svg",
	},
	{
		eControllerType: 45,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/ps_button_circle.svg",
	},
	{
		eControllerType: 45,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/ps_button_square.svg",
	},
	{
		eControllerType: 45,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/ps_button_triangle.svg",
	},
	{
		eControllerType: 45,
		eSource: 1,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad_l_ring.svg",
	},
	{
		eControllerType: 45,
		eSource: 1,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad_l_swipe.svg",
	},
	{
		eControllerType: 45,
		eSource: 1,
		eInput: 13,
		strPath: "/steaminputglyphs/ps5_trackpad_l_click.svg",
	},
	{
		eControllerType: 45,
		eSource: 1,
		eInput: 50,
		strPath: "/steaminputglyphs/ps5_trackpad_l_touch.svg",
	},
	{
		eControllerType: 45,
		eSource: 1,
		eInput: 1,
		strPath: "/steaminputglyphs/ps5_trackpad_l_up.svg",
	},
	{
		eControllerType: 45,
		eSource: 1,
		eInput: 5,
		strPath: "/steaminputglyphs/ps5_trackpad_l_down.svg",
	},
	{
		eControllerType: 45,
		eSource: 1,
		eInput: 7,
		strPath: "/steaminputglyphs/ps5_trackpad_l_left.svg",
	},
	{
		eControllerType: 45,
		eSource: 1,
		eInput: 3,
		strPath: "/steaminputglyphs/ps5_trackpad_l_right.svg",
	},
	{
		eControllerType: 45,
		eSource: 2,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad_r_ring.svg",
	},
	{
		eControllerType: 45,
		eSource: 2,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad_r_swipe.svg",
	},
	{
		eControllerType: 45,
		eSource: 2,
		eInput: 13,
		strPath: "/steaminputglyphs/ps5_trackpad_r_click.svg",
	},
	{
		eControllerType: 45,
		eSource: 2,
		eInput: 50,
		strPath: "/steaminputglyphs/ps5_trackpad_r_touch.svg",
	},
	{
		eControllerType: 45,
		eSource: 2,
		eInput: 1,
		strPath: "/steaminputglyphs/ps5_trackpad_r_up.svg",
	},
	{
		eControllerType: 45,
		eSource: 2,
		eInput: 5,
		strPath: "/steaminputglyphs/ps5_trackpad_r_down.svg",
	},
	{
		eControllerType: 45,
		eSource: 2,
		eInput: 7,
		strPath: "/steaminputglyphs/ps5_trackpad_r_left.svg",
	},
	{
		eControllerType: 45,
		eSource: 2,
		eInput: 3,
		strPath: "/steaminputglyphs/ps5_trackpad_r_right.svg",
	},
	{
		eControllerType: 45,
		eSource: 11,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad_ring.svg",
	},
	{
		eControllerType: 45,
		eSource: 11,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad.svg",
	},
	{
		eControllerType: 45,
		eSource: 11,
		eInput: 13,
		strPath: "/steaminputglyphs/ps5_trackpad_click.svg",
	},
	{
		eControllerType: 45,
		eSource: 11,
		eInput: 50,
		strPath: "/steaminputglyphs/ps5_trackpad_ring.svg",
	},
	{
		eControllerType: 45,
		eSource: 11,
		eInput: 1,
		strPath: "/steaminputglyphs/ps5_trackpad_up.svg",
	},
	{
		eControllerType: 45,
		eSource: 11,
		eInput: 5,
		strPath: "/steaminputglyphs/ps5_trackpad_down.svg",
	},
	{
		eControllerType: 45,
		eSource: 11,
		eInput: 7,
		strPath: "/steaminputglyphs/ps5_trackpad_left.svg",
	},
	{
		eControllerType: 45,
		eSource: 11,
		eInput: 3,
		strPath: "/steaminputglyphs/ps5_trackpad_right.svg",
	},
	{
		eControllerType: 45,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/ps5_l2_soft.svg",
	},
	{
		eControllerType: 45,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/ps5_l2.svg",
	},
	{
		eControllerType: 45,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/ps5_r2_soft.svg",
	},
	{
		eControllerType: 45,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/ps5_r2.svg",
	},
	{
		eControllerType: 45,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 45,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_l3.svg",
	},
	{
		eControllerType: 45,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 45,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 45,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 45,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 45,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 45,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_r3.svg",
	},
	{
		eControllerType: 45,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 45,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 45,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 45,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 45,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/ps_dpad_up.svg",
	},
	{
		eControllerType: 45,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/ps_dpad_down.svg",
	},
	{
		eControllerType: 45,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/ps_dpad_left.svg",
	},
	{
		eControllerType: 45,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/ps_dpad_right.svg",
	},
	{
		eControllerType: 45,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 45,
		eSource: 10,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 45,
		eSource: 10,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 45,
		eSource: 10,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 45,
		eSource: 10,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 45,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/ps5_l1.svg",
	},
	{
		eControllerType: 45,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/ps5_r1.svg",
	},
	{
		eControllerType: 45,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/ps5_button_options.svg",
	},
	{
		eControllerType: 45,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/ps5_button_create.svg",
	},
	{
		eControllerType: 45,
		eSource: 5,
		eInput: 68,
		strPath: "/steaminputglyphs/ps_button_mute.svg",
	},
	{
		eControllerType: 45,
		eSource: 5,
		eInput: 59,
		strPath: "/steaminputglyphs/ps5_trackpad_l_click.svg",
	},
	{
		eControllerType: 45,
		eSource: 5,
		eInput: 60,
		strPath: "/steaminputglyphs/ps5_trackpad_r_click.svg",
	},
	{
		eControllerType: 45,
		eSource: 5,
		eInput: 82,
		strPath: "/steaminputglyphs/ps5_trackpad_l_touch.svg",
	},
	{
		eControllerType: 45,
		eSource: 5,
		eInput: 83,
		strPath: "/steaminputglyphs/ps5_trackpad_r_touch.svg",
	},
	{
		eControllerType: 46,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_color_button_a.svg",
	},
	{
		eControllerType: 46,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_color_button_b.svg",
	},
	{
		eControllerType: 46,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_color_button_x.svg",
	},
	{
		eControllerType: 46,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_color_button_y.svg",
	},
	{
		eControllerType: 46,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_lt.svg",
	},
	{
		eControllerType: 46,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_lt.svg",
	},
	{
		eControllerType: 46,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/xbox_rt.svg",
	},
	{
		eControllerType: 46,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/xbox_rt.svg",
	},
	{
		eControllerType: 46,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 46,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_lstick_click.svg",
	},
	{
		eControllerType: 46,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 46,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 46,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 46,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 46,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 46,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_rstick_click.svg",
	},
	{
		eControllerType: 46,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 46,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 46,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 46,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 46,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_dpad_up.svg",
	},
	{
		eControllerType: 46,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_dpad_down.svg",
	},
	{
		eControllerType: 46,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_dpad_left.svg",
	},
	{
		eControllerType: 46,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_dpad_right.svg",
	},
	{
		eControllerType: 46,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/xbox_lb.svg",
	},
	{
		eControllerType: 46,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/xbox_rb.svg",
	},
	{
		eControllerType: 46,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/xbox_button_start.svg",
	},
	{
		eControllerType: 46,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/xbox_button_select.svg",
	},
	{
		eControllerType: 46,
		eSource: 5,
		eInput: 55,
		strPath: "/steaminputglyphs/xbox_p4.svg",
	},
	{
		eControllerType: 46,
		eSource: 5,
		eInput: 56,
		strPath: "/steaminputglyphs/xbox_p2.svg",
	},
	{
		eControllerType: 46,
		eSource: 5,
		eInput: 57,
		strPath: "/steaminputglyphs/xbox_p3.svg",
	},
	{
		eControllerType: 46,
		eSource: 5,
		eInput: 58,
		strPath: "/steaminputglyphs/xbox_p1.svg",
	},
	{
		eControllerType: 46,
		eSource: 5,
		eInput: 68,
		strPath: "/steaminputglyphs/xbox_button_share.svg",
	},
	{
		eControllerType: 40,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_buttons_s.svg",
	},
	{
		eControllerType: 40,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_buttons_e.svg",
	},
	{
		eControllerType: 40,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_buttons_w.svg",
	},
	{
		eControllerType: 40,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_buttons_n.svg",
	},
	{
		eControllerType: 40,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/switchpro_lstick.svg",
	},
	{
		eControllerType: 40,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/switchpro_lstick_click.svg",
	},
	{
		eControllerType: 40,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/switchpro_lstick_up.svg",
	},
	{
		eControllerType: 40,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/switchpro_lstick_down.svg",
	},
	{
		eControllerType: 40,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/switchpro_lstick_left.svg",
	},
	{
		eControllerType: 40,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/switchpro_lstick_right.svg",
	},
	{
		eControllerType: 40,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 40,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_pitch.svg",
	},
	{
		eControllerType: 40,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_yaw.svg",
	},
	{
		eControllerType: 40,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_roll.svg",
	},
	{
		eControllerType: 40,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/switchpro_sl.svg",
	},
	{
		eControllerType: 40,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/switchpro_sr.svg",
	},
	{
		eControllerType: 40,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/switchpro_button_plus.svg",
	},
	{
		eControllerType: 40,
		eSource: 5,
		eInput: 58,
		strPath: "/steaminputglyphs/switchpro_r.svg",
	},
	{
		eControllerType: 40,
		eSource: 5,
		eInput: 56,
		strPath: "/steaminputglyphs/switchpro_r2.svg",
	},
	{
		eControllerType: 39,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_buttons_s.svg",
	},
	{
		eControllerType: 39,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_buttons_e.svg",
	},
	{
		eControllerType: 39,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_buttons_w.svg",
	},
	{
		eControllerType: 39,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_buttons_n.svg",
	},
	{
		eControllerType: 39,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/switchpro_lstick.svg",
	},
	{
		eControllerType: 39,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/switchpro_lstick_click.svg",
	},
	{
		eControllerType: 39,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/switchpro_lstick_up.svg",
	},
	{
		eControllerType: 39,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/switchpro_lstick_down.svg",
	},
	{
		eControllerType: 39,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/switchpro_lstick_left.svg",
	},
	{
		eControllerType: 39,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/switchpro_lstick_right.svg",
	},
	{
		eControllerType: 39,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 39,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_pitch.svg",
	},
	{
		eControllerType: 39,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_yaw.svg",
	},
	{
		eControllerType: 39,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro_roll.svg",
	},
	{
		eControllerType: 39,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/switchpro_sl.svg",
	},
	{
		eControllerType: 39,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/switchpro_sr.svg",
	},
	{
		eControllerType: 39,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/switchpro_button_minus.svg",
	},
	{
		eControllerType: 39,
		eSource: 5,
		eInput: 57,
		strPath: "/steaminputglyphs/switchpro_l.svg",
	},
	{
		eControllerType: 39,
		eSource: 5,
		eInput: 55,
		strPath: "/steaminputglyphs/switchpro_l2.svg",
	},
	{
		eControllerType: 48,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/ps_button_x.svg",
	},
	{
		eControllerType: 48,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/ps_button_circle.svg",
	},
	{
		eControllerType: 48,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/ps_button_square.svg",
	},
	{
		eControllerType: 48,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/ps_button_triangle.svg",
	},
	{
		eControllerType: 48,
		eSource: 1,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad_l_ring.svg",
	},
	{
		eControllerType: 48,
		eSource: 1,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad_l_swipe.svg",
	},
	{
		eControllerType: 48,
		eSource: 1,
		eInput: 13,
		strPath: "/steaminputglyphs/ps5_trackpad_l_click.svg",
	},
	{
		eControllerType: 48,
		eSource: 1,
		eInput: 50,
		strPath: "/steaminputglyphs/ps5_trackpad_l_touch.svg",
	},
	{
		eControllerType: 48,
		eSource: 1,
		eInput: 1,
		strPath: "/steaminputglyphs/ps5_trackpad_l_up.svg",
	},
	{
		eControllerType: 48,
		eSource: 1,
		eInput: 5,
		strPath: "/steaminputglyphs/ps5_trackpad_l_down.svg",
	},
	{
		eControllerType: 48,
		eSource: 1,
		eInput: 7,
		strPath: "/steaminputglyphs/ps5_trackpad_l_left.svg",
	},
	{
		eControllerType: 48,
		eSource: 1,
		eInput: 3,
		strPath: "/steaminputglyphs/ps5_trackpad_l_right.svg",
	},
	{
		eControllerType: 48,
		eSource: 2,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad_r_ring.svg",
	},
	{
		eControllerType: 48,
		eSource: 2,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad_r_swipe.svg",
	},
	{
		eControllerType: 48,
		eSource: 2,
		eInput: 13,
		strPath: "/steaminputglyphs/ps5_trackpad_r_click.svg",
	},
	{
		eControllerType: 48,
		eSource: 2,
		eInput: 50,
		strPath: "/steaminputglyphs/ps5_trackpad_r_touch.svg",
	},
	{
		eControllerType: 48,
		eSource: 2,
		eInput: 1,
		strPath: "/steaminputglyphs/ps5_trackpad_r_up.svg",
	},
	{
		eControllerType: 48,
		eSource: 2,
		eInput: 5,
		strPath: "/steaminputglyphs/ps5_trackpad_r_down.svg",
	},
	{
		eControllerType: 48,
		eSource: 2,
		eInput: 7,
		strPath: "/steaminputglyphs/ps5_trackpad_r_left.svg",
	},
	{
		eControllerType: 48,
		eSource: 2,
		eInput: 3,
		strPath: "/steaminputglyphs/ps5_trackpad_r_right.svg",
	},
	{
		eControllerType: 48,
		eSource: 11,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad_ring.svg",
	},
	{
		eControllerType: 48,
		eSource: 11,
		eInput: 0,
		strPath: "/steaminputglyphs/ps5_trackpad.svg",
	},
	{
		eControllerType: 48,
		eSource: 11,
		eInput: 13,
		strPath: "/steaminputglyphs/ps5_trackpad_click.svg",
	},
	{
		eControllerType: 48,
		eSource: 11,
		eInput: 50,
		strPath: "/steaminputglyphs/ps5_trackpad_ring.svg",
	},
	{
		eControllerType: 48,
		eSource: 11,
		eInput: 1,
		strPath: "/steaminputglyphs/ps5_trackpad_up.svg",
	},
	{
		eControllerType: 48,
		eSource: 11,
		eInput: 5,
		strPath: "/steaminputglyphs/ps5_trackpad_down.svg",
	},
	{
		eControllerType: 48,
		eSource: 11,
		eInput: 7,
		strPath: "/steaminputglyphs/ps5_trackpad_left.svg",
	},
	{
		eControllerType: 48,
		eSource: 11,
		eInput: 3,
		strPath: "/steaminputglyphs/ps5_trackpad_right.svg",
	},
	{
		eControllerType: 48,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/ps5_l2_soft.svg",
	},
	{
		eControllerType: 48,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/ps5_l2.svg",
	},
	{
		eControllerType: 48,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/ps5_r2_soft.svg",
	},
	{
		eControllerType: 48,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/ps5_r2.svg",
	},
	{
		eControllerType: 48,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 48,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_l3.svg",
	},
	{
		eControllerType: 48,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 48,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 48,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 48,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 48,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 48,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_r3.svg",
	},
	{
		eControllerType: 48,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 48,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 48,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 48,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 48,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/ps_dpad_up.svg",
	},
	{
		eControllerType: 48,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/ps_dpad_down.svg",
	},
	{
		eControllerType: 48,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/ps_dpad_left.svg",
	},
	{
		eControllerType: 48,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/ps_dpad_right.svg",
	},
	{
		eControllerType: 48,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 48,
		eSource: 10,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 48,
		eSource: 10,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 48,
		eSource: 10,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 48,
		eSource: 10,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/ps5_l1.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/ps5_r1.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/ps5_button_options.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/ps5_button_create.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 68,
		strPath: "/steaminputglyphs/ps_button_mute.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 55,
		strPath: "/steaminputglyphs/ps_lb.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 56,
		strPath: "/steaminputglyphs/ps_rb.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 57,
		strPath: "/steaminputglyphs/ps_lfn.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 58,
		strPath: "/steaminputglyphs/ps_rfn.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 59,
		strPath: "/steaminputglyphs/ps5_trackpad_l_click.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 60,
		strPath: "/steaminputglyphs/ps5_trackpad_r_click.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 82,
		strPath: "/steaminputglyphs/ps5_trackpad_l_touch.svg",
	},
	{
		eControllerType: 48,
		eSource: 5,
		eInput: 83,
		strPath: "/steaminputglyphs/ps5_trackpad_r_touch.svg",
	},
	{
		eControllerType: 49,
		eSource: 4,
		eInput: 12,
		strPath: "/steaminputglyphs/shared_button_a.svg",
	},
	{
		eControllerType: 49,
		eSource: 4,
		eInput: 10,
		strPath: "/steaminputglyphs/shared_button_b.svg",
	},
	{
		eControllerType: 49,
		eSource: 4,
		eInput: 11,
		strPath: "/steaminputglyphs/shared_button_x.svg",
	},
	{
		eControllerType: 49,
		eSource: 4,
		eInput: 9,
		strPath: "/steaminputglyphs/shared_button_y.svg",
	},
	{
		eControllerType: 49,
		eSource: 6,
		eInput: 15,
		strPath: "/steaminputglyphs/sd_l2_half.svg",
	},
	{
		eControllerType: 49,
		eSource: 6,
		eInput: 13,
		strPath: "/steaminputglyphs/sd_l2.svg",
	},
	{
		eControllerType: 49,
		eSource: 7,
		eInput: 15,
		strPath: "/steaminputglyphs/sd_r2_half.svg",
	},
	{
		eControllerType: 49,
		eSource: 7,
		eInput: 13,
		strPath: "/steaminputglyphs/sd_r2.svg",
	},
	{
		eControllerType: 49,
		eSource: 3,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_lstick.svg",
	},
	{
		eControllerType: 49,
		eSource: 3,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_l3.svg",
	},
	{
		eControllerType: 49,
		eSource: 3,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_lstick_up.svg",
	},
	{
		eControllerType: 49,
		eSource: 3,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_lstick_down.svg",
	},
	{
		eControllerType: 49,
		eSource: 3,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_lstick_left.svg",
	},
	{
		eControllerType: 49,
		eSource: 3,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_lstick_right.svg",
	},
	{
		eControllerType: 49,
		eSource: 3,
		eInput: 50,
		strPath: "/steaminputglyphs/shared_lstick_touch.svg",
	},
	{
		eControllerType: 49,
		eSource: 12,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_rstick.svg",
	},
	{
		eControllerType: 49,
		eSource: 12,
		eInput: 13,
		strPath: "/steaminputglyphs/shared_r3.svg",
	},
	{
		eControllerType: 49,
		eSource: 12,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_rstick_up.svg",
	},
	{
		eControllerType: 49,
		eSource: 12,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_rstick_down.svg",
	},
	{
		eControllerType: 49,
		eSource: 12,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_rstick_left.svg",
	},
	{
		eControllerType: 49,
		eSource: 12,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_rstick_right.svg",
	},
	{
		eControllerType: 49,
		eSource: 12,
		eInput: 50,
		strPath: "/steaminputglyphs/shared_rstick_touch.svg",
	},
	{
		eControllerType: 49,
		eSource: 13,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_dpad.svg",
	},
	{
		eControllerType: 49,
		eSource: 13,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_dpad_up.svg",
	},
	{
		eControllerType: 49,
		eSource: 13,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_dpad_down.svg",
	},
	{
		eControllerType: 49,
		eSource: 13,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_dpad_left.svg",
	},
	{
		eControllerType: 49,
		eSource: 13,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_dpad_right.svg",
	},
	{
		eControllerType: 49,
		eSource: 10,
		eInput: 0,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 49,
		eSource: 10,
		eInput: 1,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 49,
		eSource: 10,
		eInput: 5,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 49,
		eSource: 10,
		eInput: 7,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 49,
		eSource: 10,
		eInput: 3,
		strPath: "/steaminputglyphs/shared_gyro.svg",
	},
	{
		eControllerType: 49,
		eSource: 5,
		eInput: 53,
		strPath: "/steaminputglyphs/sd_l1.svg",
	},
	{
		eControllerType: 49,
		eSource: 5,
		eInput: 54,
		strPath: "/steaminputglyphs/sd_r1.svg",
	},
	{
		eControllerType: 49,
		eSource: 5,
		eInput: 52,
		strPath: "/steaminputglyphs/sd_button_menu.svg",
		bPillShapedIcon: true,
	},
	{
		eControllerType: 49,
		eSource: 5,
		eInput: 51,
		strPath: "/steaminputglyphs/sd_button_view.svg",
		bPillShapedIcon: true,
	},
	{
		eControllerType: 49,
		eSource: 5,
		eInput: 55,
		strPath: "/steaminputglyphs/hp_l4.svg",
	},
	{
		eControllerType: 49,
		eSource: 5,
		eInput: 56,
		strPath: "/steaminputglyphs/hp_r4.svg",
	},
	{
		eControllerType: 49,
		eSource: 5,
		eInput: 57,
		strPath: "/steaminputglyphs/hp_m1.svg",
	},
	{
		eControllerType: 49,
		eSource: 5,
		eInput: 58,
		strPath: "/steaminputglyphs/hp_m2.svg",
	},
];
export function ui(e, t, r) {
	if (t == 13277 && r >= 1 && r <= 3) {
		return 0;
	}
	switch (e) {
		case 30:
		case 32:
		case 31:
		case 46:
		case 36:
		case 37:
		case 33:
		case 45:
		case 48:
			return 10000;
		case 4:
		case 3:
		case 39:
		case 40:
		case 41:
		case 38:
		default:
			return 8192;
		case 34:
			return 4096;
	}
}
export const vU = [
	{
		id: -1,
		input: 0,
		label: "#Library_Details_ModeShift_Title_None",
	},
	{
		id: 1,
		input: 61,
		label: "#Library_Details_ModeShift_Title_LeftTrigger",
	},
	{
		id: 0,
		input: 62,
		label: "#Library_Details_ModeShift_Title_RightTrigger",
	},
	{
		id: 45,
		input: 63,
		label: "#Library_Details_ModeShift_Title_LeftTriggerThreshold",
	},
	{
		id: 46,
		input: 64,
		label: "#Library_Details_ModeShift_Title_RightTriggerThreshold",
	},
	{
		id: 7,
		input: 53,
		label: "#Library_Details_ModeShift_Title_LeftBumper",
	},
	{
		id: 6,
		input: 54,
		label: "#Library_Details_ModeShift_Title_RightBumper",
	},
	{
		id: 47,
		input: 57,
		label: "#Library_Details_ModeShift_Title_LeftGripUpper",
	},
	{
		id: 48,
		input: 58,
		label: "#Library_Details_ModeShift_Title_RightGripUpper",
	},
	{
		id: 20,
		input: 55,
		label: "#Library_Details_ModeShift_Title_LeftGrip",
	},
	{
		id: 21,
		input: 56,
		label: "#Library_Details_ModeShift_Title_RightGrip",
	},
	{
		id: 42,
		input: 59,
		label: "#Library_Details_ModeShift_Title_LeftPadClick",
	},
	{
		id: 43,
		input: 60,
		label: "#Library_Details_ModeShift_Title_RightPadClick",
	},
	{
		id: 64,
		input: 82,
		label: "#Library_Details_ModeShift_Title_LeftPadTouch",
	},
	{
		id: 65,
		input: 83,
		label: "#Library_Details_ModeShift_Title_RightPadTouch",
	},
	{
		id: 8,
		input: 65,
		label: "#Library_Details_ModeShift_Title_LeftJoystickClick",
	},
	{
		id: 63,
		input: 81,
		label: "#Library_Details_ModeShift_Title_RightJoystickClick",
	},
	{
		id: 16,
		input: 1,
		label: "#Library_Details_ModeShift_Title_DpadUp",
	},
	{
		id: 19,
		input: 5,
		label: "#Library_Details_ModeShift_Title_DpadDown",
	},
	{
		id: 18,
		input: 7,
		label: "#Library_Details_ModeShift_Title_DpadLeft",
	},
	{
		id: 17,
		input: 3,
		label: "#Library_Details_ModeShift_Title_DpadRight",
	},
	{
		id: 5,
		input: 12,
		label: "#Library_Details_ModeShift_Title_A",
	},
	{
		id: 3,
		input: 10,
		label: "#Library_Details_ModeShift_Title_B",
	},
	{
		id: 4,
		input: 11,
		label: "#Library_Details_ModeShift_Title_X",
	},
	{
		id: 2,
		input: 9,
		label: "#Library_Details_ModeShift_Title_Y",
	},
	{
		id: 9,
		input: 52,
		label: "#Library_Details_ModeShift_Title_Start",
	},
	{
		id: 11,
		input: 51,
		label: "#Library_Details_ModeShift_Title_Select",
	},
];
const ct = [
	{
		input: -1,
		iconPair: {
			eSource: 0,
			eInputMode: 0,
		},
	},
	{
		input: 1,
		iconPair: {
			eSource: 6,
			eInputMode: 13,
		},
	},
	{
		input: 0,
		iconPair: {
			eSource: 7,
			eInputMode: 13,
		},
	},
	{
		input: 45,
		iconPair: {
			eSource: 6,
			eInputMode: 15,
		},
	},
	{
		input: 46,
		iconPair: {
			eSource: 7,
			eInputMode: 15,
		},
	},
	{
		input: 7,
		iconPair: {
			eSource: 5,
			eInputMode: 53,
		},
	},
	{
		input: 6,
		iconPair: {
			eSource: 5,
			eInputMode: 54,
		},
	},
	{
		input: 47,
		iconPair: {
			eSource: 5,
			eInputMode: 57,
		},
	},
	{
		input: 48,
		iconPair: {
			eSource: 5,
			eInputMode: 58,
		},
	},
	{
		input: 20,
		iconPair: {
			eSource: 5,
			eInputMode: 55,
		},
	},
	{
		input: 21,
		iconPair: {
			eSource: 5,
			eInputMode: 56,
		},
	},
	{
		input: 42,
		iconPair: {
			eSource: 5,
			eInputMode: 59,
		},
	},
	{
		input: 43,
		iconPair: {
			eSource: 5,
			eInputMode: 60,
		},
	},
	{
		input: 64,
		iconPair: {
			eSource: 5,
			eInputMode: 82,
		},
	},
	{
		input: 65,
		iconPair: {
			eSource: 5,
			eInputMode: 83,
		},
	},
	{
		input: 8,
		iconPair: {
			eSource: 3,
			eInputMode: 13,
		},
	},
	{
		input: 63,
		iconPair: {
			eSource: 3,
			eInputMode: 13,
		},
	},
	{
		input: 16,
		iconPair: {
			eSource: 13,
			eInputMode: 1,
		},
	},
	{
		input: 19,
		iconPair: {
			eSource: 13,
			eInputMode: 5,
		},
	},
	{
		input: 18,
		iconPair: {
			eSource: 13,
			eInputMode: 7,
		},
	},
	{
		input: 17,
		iconPair: {
			eSource: 13,
			eInputMode: 3,
		},
	},
	{
		input: 5,
		iconPair: {
			eSource: 4,
			eInputMode: 12,
		},
	},
	{
		input: 3,
		iconPair: {
			eSource: 4,
			eInputMode: 10,
		},
	},
	{
		input: 4,
		iconPair: {
			eSource: 4,
			eInputMode: 11,
		},
	},
	{
		input: 2,
		iconPair: {
			eSource: 4,
			eInputMode: 9,
		},
	},
	{
		input: 9,
		iconPair: {
			eSource: 5,
			eInputMode: 52,
		},
	},
	{
		input: 11,
		iconPair: {
			eSource: 5,
			eInputMode: 51,
		},
	},
];
export function r8(e) {
	return ct.find((t) => t.input == e).iconPair;
}
