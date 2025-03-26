var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
import { Localize, Hq } from "../../actual_src/utils/localization.js";
var s = require("./35488.js");
var o = require("./34819.js");
import { ETimeSinceSuffix } from "../../actual_src/utils/localization/datetime.js";
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require("./10606.js");
var u = require("./35194.js");
var d = require("./13869.js");
var A = require("./27756.js");
var p = require("./24496.js");
var g = require(/*webcrack:missing*/ "./72476.js");
var h = require(/*webcrack:missing*/ "./11131.js");
var C = require("./57472.js");
var _ = require("./61518.js");
var f = require("./37086.js");
var b = require("./13897.js");
var y = require("./91957.js");
var S = require("./2306.js");
var w = require("./1470.js");
var B = require("./18869.js");
const v = 1000;
export function jJ(e) {
	const t = (0, _.Zv)();
	const [r, i, l, m] = (0, o.zx)();
	const [u, d] = (0, c.uN)(i, m, v);
	const A = (0, _._9)();
	if (r) {
		return n.createElement(y.V, {
			feature: 0,
			label: e.iconOnly ? null : Localize("#Settings_Display_Brightness"),
			icon: n.createElement(s.Brightness, null),
			padding: e.padding,
			disabled: t,
			value: u,
			onChange: d,
			min: 0,
			max: 1,
			step: 0,
			resetValue: A ? l : undefined,
			resetValueAppearance: {
				trackForegroundColor: "#b0deff",
				side: "right",
			},
		});
	} else {
		return null;
	}
}
export function qg() {
	const e = Localize("#Settings_Display_AdaptiveBrightness");
	const [t, r] = (0, o.MK)();
	return n.createElement(S.C, {
		feature: 7,
		disabled: !t,
		label: e,
		checked: t && r,
		onChange: o.mG.Get().SetDisplayAdaptiveBrightnessEnabled,
	});
}
function M(e) {
	const t = [];
	const r = Array.from(new Set(e));
	r.sort((e, t) => e - t);
	r.forEach((e) => {
		t.push({
			data: e,
			label:
				e == 0
					? Localize("#Settings_System_IdleDisabled")
					: (0, Hq)(e, {
							eSuffix: ETimeSinceSuffix.None,
							bHighGranularity: true,
						}),
		});
	});
	return t;
}
export function QY(e) {
	const [t, r] = (0, o.IV)(e.bOnAC);
	const i = Math.round(t);
	return n.createElement(b.B, {
		feature: 7,
		label: e.bOnAC
			? Localize("#Settings_System_BacklightDimTimePlugged_Label")
			: Localize("#Settings_System_BacklightDimTimeNotPlugged_Label"),
		selectedOption: i,
		onChange: (e) => r(e.data),
		rgOptions: M([0, 60, 300, 600, 900, 1200, i]),
	});
}
export function Xk(e) {
	const [t, r] = (0, o.$y)(e.bOnAC);
	const i = Math.round(t);
	return n.createElement(b.B, {
		feature: 7,
		label: e.bOnAC
			? Localize("#Settings_System_SuspendTimePlugged_Label")
			: Localize("#Settings_System_SuspendTimeNotPlugged_Label"),
		selectedOption: i,
		onChange: (e) => r(e.data),
		rgOptions: M([0, 300, 600, 900, 1200, i]),
	});
}
async function k(e) {
	await u.o.TriggerTestOOBE(e);
}
function D() {
	(0, d.pg)(
		n.createElement(m.o0, {
			strTitle: "Are you sure you want trigger a test OOBE?",
			strDescription: "Confirm will restart your client/device",
			onOK: () => {
				(0, d.pg)(
					n.createElement(m.o0, {
						strTitle: "Do a clean OOBE?",
						strDescription:
							"WARNING: This will forget all wifi networks and logout all users",
						bDestructiveWarning: true,
						strOKButtonText: "Clean",
						onOK: () => {
							k(true);
						},
						strCancelButtonText: "Preserve Users/Wifi",
						onCancel: () => {
							k(false);
						},
					}),
					window,
					{
						strTitle: "Error",
					},
				);
			},
		}),
		window,
		{
			strTitle: "Error",
		},
	);
}
export function Lf() {
	const e = (0, c.gc)(u.o.bTestOOBESetupInProgress);
	const t = (0, c.gc)(u.o.eRebootToFactoryTestImageResult);
	let r = "Status Unknown";
	r = e
		? "In progress"
		: t == null
			? "Restart"
			: t == 1
				? "Error: should've auto rebooted"
				: "Failed, try again?";
	return n.createElement(
		w.E,
		{
			feature: 7,
			disabled: e,
			onClick: D,
			label: "Restart into OOBE test",
		},
		r,
	);
}
export function MF() {
	const [e, t] = (0, o.yw)();
	const r = (0, h.R7)();
	const i = n.useCallback(
		(e) => {
			t(e);
			(0, A.$)({
				bSystemRestart: true,
				ownerWindow: r.ownerWindow,
			});
		},
		[t, r.ownerWindow],
	);
	return n.createElement(S.C, {
		feature: 7,
		label: Localize("#Settings_Developer_WifiPowersave"),
		description: Localize("#Settings_Developer_WifiPowersave_Desc"),
		checked: e,
		onChange: i,
	});
}
export function n8(e) {
	const t = (0, B.br)();
	const r = e.bForceFormat ?? false;
	const i = e.strLabel ?? Localize("#Settings_System_FormatSD_Label");
	const s = (0, p.hb)();
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			f.oN,
			{
				feature: 7,
				label: i,
				onClick: () => t.Settings("Storage"),
				disabled: !r && !s,
				bottomSeparator: e.bottomSeparator,
			},
			Localize("#Settings_System_FormatSD_Btn_Format"),
		),
	);
}
export function J1(e) {
	const [t, r, s] = (0, o.rw)();
	if (t) {
		return n.createElement(i.RF, {
			label: Localize("#Settings_System_FanControlToggle"),
			checked: r,
			onChange: s,
		});
	} else {
		return null;
	}
}
export function Yo() {
	if (g.TS.ON_DECK) {
		return null;
	} else {
		return n.createElement(C.G, {
			feature: 7,
			setting: "steam_cef_gpu_blocklist_disabled",
			label: Localize("#Settings_CEFDisableGPUBlocklist"),
			bRequiresRestart: true,
		});
	}
}
