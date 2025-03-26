var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require("./22091.js");
var s = require("./18057.js");
var o = require("./64608.js");
var l = require("./48101.js");
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
var m = require(/*webcrack:missing*/ "./69164.js");
var u = require("./15917.js");
var d = require("./22047.js");
var A = require("./50350.js");
var p = require(/*webcrack:missing*/ "./61657.js");
var g = require("./62486.js");
var h = require("./12307.js");
var C = require("./75121.js");
var _ = require("./86196.js");
var f = require("./39354.js");
var b = require(/*webcrack:missing*/ "./90765.js");
var y = require("./53622.js");
var S = require("./43014.js");
var w = require("./31800.js");
var B = require("./52192.js");
var v = require(/*webcrack:missing*/ "./72476.js");
var I = require("./21091.js");
var E = require("./33572.js");
var M = require("./30519.js");
var T = require("./15897.js");
var R = require("./81540.js");
var k = require("./34792.js");
const D = () => n.createElement("div", null);
export function QY(e) {
	n.useEffect(() => {
		a.Fd.Get().StartControllerCalibrationFlow(e);
		return () => a.Fd.Get().EndControllerCalibrationFlow();
	}, [e]);
}
export const sA = (0, i.PA)(function (e) {
	console.log("ControllerDeviceCalibrationPage");
	const t = (0, s.AX)();
	const r = a.Fd.Get().GetController(t);
	QY(t);
	const [i, o] = n.useState(false);
	const [l, m] = n.useState(r);
	const u = (e) => {
		o(true);
		m(e);
	};
	const p = n.useCallback(() => {
		if (i) {
			a.Fd.Get().CommitControllerSettings(l);
		}
	}, [l, i]);
	n.useEffect(
		() => () => {
			p();
		},
		[p],
	);
	(function (e) {
		n.useEffect(
			() => () => SteamClient.Input.SaveControllerPersonalizationSettings(e),
			[e],
		);
	})(t);
	(function (e) {
		n.useEffect(
			() => () => {
				if (e.mode == E._5.ControllerConfigurator) {
					SteamClient.Overlay.DestroyGamePadUIDesktopConfiguratorWindow();
				}
			},
			[e.mode],
		);
	})((0, E.oH)());
	(0, w.Wh)(
		Localize("#Settings_Controller_Calibration"),
		"ControllerCalibration",
	);
	if (!r) {
		return n.createElement(n.Fragment, null);
	}
	const g =
		(r.unCapabilities & 4096) != 0 && (r.unCapabilities & 16777216) != 0;
	const h = r.eControllerType == 4;
	const C =
		r.eControllerType == 2 ||
		r.eControllerType == 3 ||
		(r.unCapabilities & 65536) != 0;
	const _ = (r.unCapabilities & 2121728) != 0;
	const f = [
		{
			visible: r.eControllerType == 2,
			title: Localize("#Settings_ControllerCalibration_General"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.General(t),
			content: n.createElement(L, {
				controllerSettings: l,
				setControllerSettings: u,
			}),
			hideTitle: true,
		},
		{
			visible: r.eControllerType != 2,
			title: Localize("#Settings_ControllerCalibration_Joystick"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.Inputs(t),
			content: n.createElement(P, {
				controllerSettings: l,
				setControllerSettings: u,
			}),
			hideTitle: true,
		},
		{
			visible: k.rV.settings?.bIsValveEmail && g && h,
			title: Localize("#Settings_ControllerCalibration_TrackpadsVsSticks"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.Trackpads(t),
			content: n.createElement(O, {
				controllerSettings: l,
				setControllerSettings: u,
			}),
		},
		{
			visible: (r.unCapabilities & 2048) != 0,
			title: Localize("#Settings_ControllerCalibration_Gyro"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.Gyro(t),
			content: n.createElement(U, {
				controllerSettings: l,
				setControllerSettings: u,
			}),
			hideTitle: true,
		},
		{
			visible: false,
			title: "Gyro Demo",
			route: s.BV.GamepadUI.ControllerDeviceCalibration.GyroDemo(t),
			content: n.createElement(W, {
				controllerSettings: l,
				setControllerSettings: u,
			}),
			hideTitle: true,
		},
		{
			visible: r.eControllerType == 2,
			title: Localize("#Settings_ControllerCalibration_Sensors"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.Sensors(t),
			content: n.createElement(z, {
				controllerSettings: l,
				setControllerSettings: u,
			}),
			hideTitle: true,
		},
		{
			visible: _,
			title: Localize(
				v.TS.ON_DECK
					? "#Settings_ControllerCalibration_Outputs"
					: "#Settings_ControllerCalibration_OutputsNonDeck",
			),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.Outputs(t),
			content: n.createElement(H, {
				controllerSettings: l,
				setControllerSettings: u,
			}),
		},
		{
			visible: C,
			title: Localize("#Settings_ControllerCalibration_LEDs"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.LEDs(t),
			content: n.createElement(j, {
				controllerSettings: l,
				setControllerSettings: u,
			}),
		},
	];
	return n.createElement(
		A.dj,
		null,
		n.createElement(d.q, {
			title: Localize("#Settings_Title"),
			pages: f,
		}),
	);
});
const G = (0, i.PA)(function (e) {
	const { controllerSettings: t, setControllerSettings: r, bLeftStick: i } = e;
	const d = (0, s.AX)();
	const A = a.Fd.Get().GetController(d);
	const h = a.Fd.Get().ControllerState;
	const [f, w] = n.useState(false);
	const [B, v] = n.useState(false);
	if (!A) {
		return n.createElement(n.Fragment, null);
	}
	let I = 0;
	let E = false;
	const M = (0, g.ui)(t.eControllerType, t.unVendorID, t.unProductID);
	if (i) {
		I = t.nLStickDeadzone == -1 ? M : t.nLStickDeadzone;
		E =
			!f ||
			(i &&
				h &&
				Math.sqrt(
					h?.sLeftStickX * h?.sLeftStickX + h?.sLeftStickY * h?.sLeftStickY,
				) < I);
	} else {
		I = t.nRStickDeadzone == -1 ? M : t.nRStickDeadzone;
		E =
			!f ||
			(h &&
				Math.sqrt(
					h?.sRightStickX * h?.sRightStickX + h?.sRightStickY * h?.sRightStickY,
				) < I);
	}
	const T = () => f;
	const R = "#67707b";
	const k = {
		id: "DeadZoneInner",
		color: R,
		fill: "#3D4450",
		strokeWidth: 3,
		showInKey: true,
		style: l.VizElement,
	};
	const D = {
		id: "DeadZoneInner",
		color: R,
		fill: E ? "#5B7E90" : "#ff0000",
		strokeWidth: 3,
		showInKey: true,
		style: l.VizElement,
	};
	const N = f
		? i
			? (h?.sLeftStickX ?? 0) / 32767
			: (h?.sRightStickX ?? 0) / 32767
		: 0;
	const F = f
		? i
			? (-h?.sLeftStickY ?? 0) / 32767
			: (-h?.sRightStickY ?? 0) / 32767
		: 0;
	return n.createElement(
		m.Z,
		{
			className: (0, b.A)(l.JoystickPageContainer),
		},
		n.createElement(
			o.G5,
			null,
			n.createElement(
				m.Z,
				{
					"flow-children": "column",
					onButtonDown: (e) => {
						switch (e.detail.button) {
							case p.pR.OPTIONS:
								w(!f);
								return true;
							case p.pR.CANCEL:
								if (f) {
									w(false);
									return true;
								}
							default:
								return false;
						}
					},
					onOptionsActionDescription: f
						? Localize("#Settings_ControllerCalibration_UnLockOutNavigation")
						: Localize("#Settings_ControllerCalibration_LockOutNavigation"),
				},
				n.createElement(
					m.Z,
					{
						"flow-children": "row",
						className: l.JoystickContainer,
					},
					n.createElement(
						"div",
						{
							className: (0, b.A)(
								l.VisualizationMainContainer,
								i && l.LeftStick,
							),
						},
						n.createElement("img", {
							className: (0, b.A)(
								i ? l.DeckDeviceLeftImage : l.DeckDeviceRightImage,
							),
							src: i ? _.A : C.A,
						}),
						n.createElement(u.zL, {
							centerX: 165,
							centerY: 95,
							data: k,
							radius: 90,
							showCenter: true,
						}),
						n.createElement(u.zL, {
							centerX: 165,
							centerY: 95,
							data: D,
							radius: (I / 32767) * 90,
							showCenter: true,
						}),
						n.createElement(u.iL, {
							LiveX: N,
							LiveY: F,
							centerX: 165,
							centerY: 95,
							maxRadius: 90,
							indicatorRadius: 5,
						}),
					),
				),
				n.createElement(
					"div",
					{
						className: (0, b.A)(
							l.StartTestPrompt,
							i && l.LeftStick,
							B && l.ShowTestPrompt,
						),
					},
					" ",
					LocalizeReact(
						"#Settings_ControllerCalibration_StartTestPrompt",
						n.createElement(y.W, {
							button: (0, S.sr)(p.pR.OPTIONS),
							className: (0, b.A)(l.InlineGlyph),
						}),
					),
					" ",
				),
				n.createElement(
					m.Z,
					{
						className: (0, b.A)(l.SliderContainer),
						onMoveUp: T,
						onMoveDown: T,
						onMoveLeft: T,
						onMoveRight: T,
						onFocus: () => v(true),
						onBlur: () => v(false),
					},
					n.createElement(o.d3, {
						className: l.JoystickSlider,
						bottomSeparator: "none",
						showValue: true,
						value: I,
						onChange: (e) => {
							let n = t;
							if (i) {
								n.nLStickDeadzone =
									(0, g.ui)(t.eControllerType, t.unVendorID, t.unProductID) == e
										? -1
										: Math.round(e);
								SteamClient.Input.SetControllerPersonalizationSetting(
									"nLStickDeadzone",
									n.nLStickDeadzone,
								);
							} else {
								n.nRStickDeadzone =
									(0, g.ui)(t.eControllerType, t.unVendorID, t.unProductID) == e
										? -1
										: Math.round(e);
								SteamClient.Input.SetControllerPersonalizationSetting(
									"nRStickDeadzone",
									n.nRStickDeadzone,
								);
							}
							r(n);
						},
						min: 2000,
						max: 18000,
						dpadStep: 200,
						step: 1,
						resetValue: M,
						label: i
							? Localize("#Settings_Controller_Calibration_LStickDeadzone")
							: Localize("#Settings_Controller_Calibration_RStickDeadzone"),
					}),
				),
			),
		),
	);
});
const O = (0, i.PA)(function (e) {
	const { controllerSettings: t, setControllerSettings: r } = e;
	const i = (0, s.AX)();
	const m = a.Fd.Get().GetController(i);
	if (!m) {
		return n.createElement(n.Fragment, null);
	}
	const u = n.createElement(B.UT, {
		controllerType: m.eControllerType,
		controllerSource: 3,
		controllerModeInput: 50,
		className: l.MediumGlyphIcon,
	});
	const d = n.createElement(B.UT, {
		controllerType: m.eControllerType,
		controllerSource: 1,
		controllerModeInput: 50,
		className: l.MediumGlyphIcon,
	});
	const A = n.createElement(B.UT, {
		controllerType: m.eControllerType,
		controllerSource: 12,
		controllerModeInput: 50,
		className: l.MediumGlyphIcon,
	});
	const p = n.createElement(B.UT, {
		controllerType: m.eControllerType,
		controllerSource: 2,
		controllerModeInput: 50,
		className: l.MediumGlyphIcon,
	});
	const g = n.createElement(
		n.Fragment,
		null,
		" ",
		LocalizeReact(
			"#Settings_Controller_Calibration_LeftStickTouchDisablesLeftTrackPad",
			u,
			d,
		),
		" ",
	);
	const h = n.createElement(
		n.Fragment,
		null,
		" ",
		LocalizeReact(
			"#Settings_Controller_Calibration_RightStickTouchDisablesRightTrackPad",
			A,
			p,
		),
		" ",
	);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(o.RF, {
			label: g,
			bottomSeparator: "none",
			checked: t.bLeftStickTouchDisablesLeftTrackPad,
			onChange: (e) => {
				let n = t;
				n.bLeftStickTouchDisablesLeftTrackPad = e;
				SteamClient.Input.SetControllerPersonalizationSetting(
					"bLeftStickTouchDisablesLeftTrackPad",
					e ? 1 : 0,
				);
				r(n);
			},
		}),
		n.createElement(o.RF, {
			label: h,
			bottomSeparator: "none",
			description: Localize(
				"#Settings_ControllerCalibration_TrackpadsVsSticks_Description",
			),
			checked: t.bRightStickTouchDisablesRightTrackPad,
			onChange: (e) => {
				let n = t;
				n.bRightStickTouchDisablesRightTrackPad = e;
				SteamClient.Input.SetControllerPersonalizationSetting(
					"bRightStickTouchDisablesRightTrackPad",
					e ? 1 : 0,
				);
				r(n);
			},
		}),
	);
});
(0, i.PA)(function (e) {
	const { controllerSettings: t, setControllerSettings: r } = e;
	const i = (0, s.AX)();
	const d = a.Fd.Get().GetController(i);
	const A = (function () {
		const [e, t] = n.useState(a.Fd.Get().ControllerState);
		n.useEffect(() => {
			const e = () => {
				t(a.Fd.Get().ControllerState);
				requestAnimationFrame(e);
			};
			e();
		}, []);
		return e;
	})();
	const [g, h] = n.useState(false);
	const [C, _] = n.useState(false);
	const [w, v] = n.useState(false);
	const [I, E] = n.useState(false);
	if (!d) {
		return n.createElement(n.Fragment, null);
	}
	const M = t.flLPadPressureCurve == -1 ? 1 : t.flLPadPressureCurve;
	const T = t.flRPadPressureCurve == -1 ? 1 : t.flRPadPressureCurve;
	const R = 20000;
	const k = (0, B.x1)(t.flLPadPressureCurve);
	const D = (0, B.x1)(t.flRPadPressureCurve);
	const N = Math.min(1, A?.sPressurePadLeft / R ?? 0);
	const F = g ? -(0, B.dv)(N, k) : 0;
	const G = Math.min(1, A?.sPressurePadRight / R ?? 0);
	const O = g ? -(0, B.dv)(G, D) : 0;
	const P = "#67707b";
	const L = "#00BBFF";
	const z = "#0066FF";
	const x = 156;
	const U = 96;
	const W = 0.12287625;
	const V = W;
	const H = 0.09537625000000001;
	const j = 11.79612;
	if (!C && -F >= V) {
		_(true);
	} else if (C && -F <= H) {
		_(false);
	}
	if (!w && -O >= V) {
		v(true);
	} else if (w && -O <= H) {
		v(false);
	}
	const q = -F ? (C ? z : L) : "#00000000";
	const Q = -O ? (w ? z : L) : "#00000000";
	const Z = () => g;
	const Y = (e, t) =>
		n.createElement(
			n.Fragment,
			null,
			n.createElement(
				"svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					className: l.VizElement,
				},
				n.createElement("rect", {
					x: e,
					y: 98,
					width: 0.1666,
					height: 0.1666,
					stroke: t,
					fill: t,
					strokeWidth: 3,
					rx: 6,
				}),
			),
		);
	const K = (e, t, r) => {
		let i = [];
		i.push(
			n.createElement(
				n.Fragment,
				null,
				n.createElement(
					"svg",
					{
						xmlns: "http://www.w3.org/2000/svg",
						className: l.VizElement,
					},
					n.createElement("rect", {
						x: e,
						y: 60,
						width: U,
						height: U,
						stroke: P,
						fill: "#101010",
						strokeWidth: 0,
						rx: 4,
					}),
				),
			),
		);
		i.push(
			n.createElement(
				"div",
				{
					className: (0, b.A)(
						l.PressureGraphLabel,
						e == 0.5 && l.DefaultClickLeft,
						e == 308 && l.DefaultClickRight,
					),
				},
				" ",
				Localize("#Settings_Controller_Calibration_DefaultClick"),
				" ",
			),
		);
		const a = {
			id: "DefaultLine",
			color: P,
			fill: "#00000000",
			strokeWidth: 1,
			showInKey: true,
			style: l.VizElement,
		};
		i.push(
			n.createElement(u.ZX, {
				startX: e,
				startY: x - r,
				endX: e + U,
				endY: x - r,
				data: a,
				width: 1,
			}),
		);
		let s = "M";
		for (let r = 0; r < 40; r++) {
			let n = r / 39;
			s += (e + n * U).toString();
			s += " ";
			s += (x - (0, B.dv)(n, t) * U).toString();
			if (r < 39) {
				s += " L";
			}
		}
		i.push(
			n.createElement(
				n.Fragment,
				null,
				" ",
				n.createElement(
					"svg",
					{
						xmlns: "http://www.w3.org/2000/svg",
						className: l.VizElement,
					},
					n.createElement("path", {
						d: s,
						stroke: L,
						fill: "#00000000",
						strokeWidth: 3,
					}),
				),
			),
		);
		i.push(
			n.createElement(
				n.Fragment,
				null,
				n.createElement(
					"svg",
					{
						xmlns: "http://www.w3.org/2000/svg",
						className: l.VizElement,
					},
					n.createElement("rect", {
						x: e - 2,
						y: 58,
						width: 100,
						height: 100,
						stroke: P,
						fill: "#00000000",
						strokeWidth: 3,
						rx: 4,
					}),
				),
			),
		);
		return i;
	};
	const X = (e) => (e / 32767 + 1) / 2;
	const J = (e, t) => e != 0 || t != 0;
	const $ = (e) => "" + (e != null ? Number.parseFloat(e.toFixed(3)) : null);
	return n.createElement(
		m.Z,
		{
			className: (0, b.A)(l.JoystickPageContainer),
		},
		n.createElement(
			o.G5,
			null,
			n.createElement(
				"div",
				{
					className: (0, b.A)(
						l.StartTestPrompt,
						l.Trackpads,
						I && l.ShowTestPrompt,
					),
				},
				" ",
				g
					? LocalizeReact(
							"#Settings_ControllerCalibration_StopTestPromptTrackpad",
							n.createElement(y.W, {
								button: (0, S.sr)(p.pR.OPTIONS),
								className: (0, b.A)(l.InlineGlyph),
							}),
						)
					: LocalizeReact(
							"#Settings_ControllerCalibration_StartTestPromptTrackpad",
							n.createElement(y.W, {
								button: (0, S.sr)(p.pR.OPTIONS),
								className: (0, b.A)(l.InlineGlyph),
							}),
						),
				" ",
			),
			n.createElement(
				m.Z,
				{
					"flow-children": "column",
					onButtonDown: (e) => {
						switch (e.detail.button) {
							case p.pR.OPTIONS:
								h(!g);
								return true;
							case p.pR.CANCEL:
								if (g) {
									h(false);
									return true;
								}
							default:
								return g;
						}
					},
					onOptionsActionDescription: g
						? Localize("#Settings_ControllerCalibration_UnLockOutNavigation")
						: Localize("#Settings_ControllerCalibration_LockOutNavigation"),
				},
				n.createElement(
					m.Z,
					{
						"flow-children": "row",
						className: l.JoystickContainer,
					},
					n.createElement(
						"div",
						{
							className: (0, b.A)(l.VisualizationMainContainer, l.Trackpads),
						},
						n.createElement("img", {
							className: (0, b.A)(l.DeckDeviceFullImage),
							src: f.A,
						}),
						K(0.5, k, j),
						K(308, D, j),
						Y(70, q),
						Y(452, Q),
						g &&
							n.createElement(u.iL, {
								LiveX: N,
								LiveY: F,
								centerX: 0.5,
								centerY: x,
								maxRadius: U,
								indicatorRadius: 5,
							}),
						g &&
							n.createElement(u.iL, {
								LiveX: G,
								LiveY: O,
								centerX: 308,
								centerY: x,
								maxRadius: U,
								indicatorRadius: 5,
							}),
						g &&
							J(A?.sRightPadX, A?.sRightPadY) &&
							n.createElement(u.iL, {
								LiveX: X(A?.sRightPadX),
								LiveY: -X(A?.sRightPadY),
								centerX: 452,
								centerY: 98.1666,
								maxRadius: 0.1666,
								indicatorRadius: 5,
							}),
						g &&
							J(A?.sLeftPadX, A?.sLeftPadY) &&
							n.createElement(u.iL, {
								LiveX: X(A?.sLeftPadX),
								LiveY: -X(A?.sLeftPadY),
								centerX: 70,
								centerY: 98.1666,
								maxRadius: 0.1666,
								indicatorRadius: 5,
							}),
						n.createElement(
							"div",
							{
								className: (0, b.A)(l.PressureGraphLabel),
							},
							" ",
							Localize("#Settings_Controller_Calibration_PressureInput"),
							" ",
						),
						n.createElement(
							"div",
							{
								className: (0, b.A)(l.PressureGraphLabel, l.Vertical),
							},
							" ",
							Localize("#Settings_Controller_Calibration_PressureOutput"),
							" ",
						),
					),
				),
				n.createElement(
					m.Z,
					{
						onFocus: () => E(true),
						onBlur: () => E(false),
					},
					n.createElement(
						m.Z,
						{
							className: (0, b.A)(l.SliderContainer),
							onMoveUp: Z,
							onMoveDown: Z,
							onMoveLeft: Z,
							onMoveRight: Z,
						},
						n.createElement(o.d3, {
							className: l.JoystickSlider,
							bottomSeparator: "none",
							showValue: true,
							renderValue: $,
							disabled: g,
							value: M,
							onChange: (e) => {
								let n = t;
								n.flLPadPressureCurve = e;
								SteamClient.Input.SetControllerPersonalizationSetting(
									"flLPadPressureCurve",
									Math.round(n.flLPadPressureCurve * 100),
								);
								r(n);
							},
							min: 0.05,
							max: 1.95,
							dpadStep: 0.0475,
							step: 0.025,
							resetValue: 1,
							label: Localize("#Settings_Controller_Calibration_LPadPressure"),
						}),
					),
					n.createElement(
						m.Z,
						{
							onMoveUp: Z,
							onMoveDown: Z,
							onMoveLeft: Z,
							onMoveRight: Z,
						},
						n.createElement(o.d3, {
							className: l.JoystickSlider,
							bottomSeparator: "none",
							showValue: true,
							renderValue: $,
							disabled: g,
							value: T,
							onChange: (e) => {
								let n = t;
								n.flRPadPressureCurve = e;
								SteamClient.Input.SetControllerPersonalizationSetting(
									"flRPadPressureCurve",
									Math.round(n.flRPadPressureCurve * 100),
								);
								r(n);
							},
							min: 0.05,
							max: 1.95,
							dpadStep: 0.0475,
							step: 0.025,
							resetValue: 1,
							label: Localize("#Settings_Controller_Calibration_RPadPressure"),
						}),
					),
				),
			),
		),
	);
});
const P = (0, i.PA)(function (e) {
	const { controllerSettings: t, setControllerSettings: r } = e;
	const [i, o] = n.useState(true);
	const l = (0, s.AX)();
	const c = a.Fd.Get().GetController(l);
	const m = !!(c.unCapabilities & 4) && !!(c.unCapabilities & 8);
	let u = n.useMemo(
		() => [
			{
				id: "left",
				title: "#Settings_ControllerCalibration_LeftJoystick",
				content: n.createElement(G, {
					controllerSettings: t,
					setControllerSettings: r,
					bLeftStick: true,
				}),
			},
			{
				id: "right",
				title: "#Settings_ControllerCalibration_RightJoystick",
				content: n.createElement(G, {
					controllerSettings: t,
					setControllerSettings: r,
					bLeftStick: false,
				}),
			},
		],
		[t, r],
	);
	if (!m) {
		return null;
	}
	return n.createElement(h.xC, {
		tabs: u,
		activeTab: i ? "left" : "right",
		onShowTab: (e) => o(e == "left"),
		autoFocusContents: false,
		cancelSkipTabHeader: true,
	});
});
const L = (0, i.PA)(function (e) {
	const { controllerSettings: t, setControllerSettings: r } = e;
	const i = (0, s.AX)();
	const l = a.Fd.Get().GetController(i);
	const u = l.eControllerType == 2 || l.eControllerType == 3;
	n.useEffect(() => {
		SteamClient.Input.InitControllerSounds();
		return () => {
			if (u) {
				SteamClient.Input.SaveControllerPersonalizationSettings(i);
			}
		};
	}, [i, u]);
	let d = [
		{
			label: Localize("#SettingController_HapticSound_Default"),
			data: -1,
		},
	];
	for (let e = 0; e < 14; e++) {
		d.push({
			label: Localize("#SettingController_HapticSound_" + e),
			data: e,
		});
	}
	const A = n.createElement(
		n.Fragment,
		null,
		false,
		u &&
			n.createElement(o.m, {
				label: Localize("#Settings_ControllerCalibration_TurnOnSound"),
				rgOptions: d,
				selectedOption: l.nTurnOnSound,
				onChange: (e) =>
					((e) => {
						let n = t;
						n.nTurnOnSound = e;
						SteamClient.Input.SetControllerPersonalizationSetting(
							"nTurnOnSound",
							e,
						);
						r(n);
					})(e.data),
				bDisableMouseOverlay: true,
				contextMenuPositionOptions: {
					bDisableMouseOverlay: true,
				},
			}),
		u &&
			n.createElement(o.m, {
				label: Localize("#Settings_ControllerCalibration_TurnOffSound"),
				rgOptions: d,
				selectedOption: l.nTurnOffSound,
				onChange: (e) =>
					((e) => {
						let n = t;
						n.nTurnOffSound = e;
						SteamClient.Input.SetControllerPersonalizationSetting(
							"nTurnOffSound",
							e,
						);
						r(n);
					})(e.data),
				bDisableMouseOverlay: true,
				contextMenuPositionOptions: {
					bDisableMouseOverlay: true,
				},
			}),
	);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			o.G5,
			null,
			n.createElement(
				m.Z,
				{
					"flow-children": "column",
				},
				A,
			),
		),
	);
});
const z = (0, i.PA)(function (e) {
	const t = (0, s.AX)();
	if (a.Fd.Get().GetController(t)) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(
				o.G5,
				null,
				n.createElement(
					m.Z,
					{
						"flow-children": "column",
					},
					n.createElement(
						o.xh,
						{
							label: Localize(
								"#Settings_ControllerCalibration_CalibrateTrackpad",
							),
							onClick: () => {
								SteamClient.Input.CalibrateControllerTrackpads(t);
							},
						},
						Localize("#Settings_ControllerCalibration_Start"),
					),
					n.createElement(
						o.xh,
						{
							label: Localize(
								"#Settings_ControllerCalibration_CalibrateJoystick",
							),
							onClick: () => {
								SteamClient.Input.CalibrateControllerJoystick(t);
							},
						},
						Localize("#Settings_ControllerCalibration_Start"),
					),
				),
			),
		);
	} else {
		return n.createElement(n.Fragment, null);
	}
});
export function ox(e) {
	n.useEffect(() => {
		SteamClient.Input.RequestGyroActive(e, true);
		return () => {
			SteamClient.Input.RequestGyroActive(e, false);
		};
	}, [e]);
}
const U = (0, i.PA)(function (e) {
	const { controllerSettings: t, setControllerSettings: r } = e;
	QY(t.nControllerIndex);
	ox(t.nControllerIndex);
	const i = (t.unCapabilities & 262144) != 0;
	if (!t) {
		return null;
	}
	const a = t.eControllerType == 2;
	const s = t.eControllerType == 4;
	const l = (i || a || s) && t;
	let u =
		l &&
		n.createElement(
			n.Fragment,
			null,
			n.createElement(
				o.iK,
				null,
				"  ",
				Localize("#Settings_ControllerCalibration_GyroRotation_Subheading"),
				" ",
			),
			n.createElement(
				m.Z,
				null,
				n.createElement(I.PE, {
					controllerIndex: t.nControllerIndex,
				}),
				n.createElement(o.D0, {
					childrenContainerWidth: "fixed",
					description: Localize(
						"#Settings_ControllerCalibration_GyroRotation_Desc",
					),
				}),
			),
		);
	let d =
		i &&
		n.createElement(
			n.Fragment,
			null,
			n.createElement(o.y4, {
				onChange: () => {
					let e = t;
					e.bSWAntiDrift = !t.bSWAntiDrift;
					r(e);
				},
				checked: t.bSWAntiDrift,
				label: Localize("#Settings_ControllerCalibration_SWGyroCal"),
			}),
		);
	let A =
		l &&
		i &&
		t.bSWAntiDrift &&
		n.createElement(
			n.Fragment,
			null,
			n.createElement(I.V4, {
				strLabel: "#Settings_ControllerCalibration_Auto_Calibration_Progress",
				nControllerIndex: t.nControllerIndex,
			}),
			n.createElement(I.PO, {
				bShowToleranceSliders: true,
				...e,
			}),
		);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			o.G5,
			null,
			n.createElement(
				m.Z,
				{
					"flow-children": "column",
				},
				n.createElement(
					o.Y9,
					null,
					"  ",
					Localize("#Settings_ControllerCalibration_Gyro"),
					" ",
				),
				u,
				n.createElement(R.m5, {
					...e,
				}),
				d,
				A,
			),
		),
	);
});
const W = (0, i.PA)(function (e) {
	const { controllerSettings: t } = e;
	const r = (0, s.AX)();
	const i = (0, a.Rh)(r);
	const l = (0, a.hy)(r);
	if (!t) {
		return null;
	}
	if ((t.unCapabilities & 2048) == 0) {
		return n.createElement(
			n.Fragment,
			null,
			"Controller has no gyroscope available",
		);
	}
	const c = {
		newGyroState: i,
		newAccelerometerState: l,
		eControllerType: t.eControllerType,
	};
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			o.G5,
			null,
			n.createElement(D, {
				...c,
			}),
		),
	);
});
const V = (0, i.PA)(function (e) {
	const { controllerSettings: t, setControllerSettings: r } = e;
	const i = (0, s.AX)();
	const l = a.Fd.Get().GetController(i);
	const m = l.eControllerType == 2 || l.eControllerType == 3;
	const u = !!(l.unCapabilities & 131072);
	const d = !!(l.unCapabilities & 536870912);
	const A = l.eControllerType == 38;
	const p = n.useMemo(
		() => ({
			flBrightness: t.flLEDBrightness,
			flSaturation: t.flLEDSaturation,
			flHue: (0, T.WN)({
				r: t.nLEDColorR,
				g: t.nLEDColorG,
				b: t.nLEDColorB,
				a: 1,
			}).h,
		}),
		[t],
	);
	let g = [
		{
			label: Localize("#Settings_ControllerCalibration_PlayerLED_Off"),
			data: 0,
		},
		{
			label: Localize(
				"#Settings_ControllerCalibration_PlayerLED_MultipleController",
			),
			data: 1,
		},
		{
			label: Localize("#Settings_ControllerCalibration_PlayerLED_On"),
			data: 2,
		},
	];
	if (l) {
		return n.createElement(
			n.Fragment,
			null,
			(u || m || d) &&
				n.createElement(M.D, {
					ledSetting: p,
					bUseOnlyBrightness: m || A,
					bBrightnessOnlyBlue: A,
					nControllerIndex: i,
					onLEDColorSettingsChanged: function (e) {
						const n = (0, T.ko)({
							h: e.flHue,
							s: 1,
							v: 1,
							a: 1,
						});
						r({
							...t,
							flLEDBrightness: e.flBrightness,
							flLEDSaturation: e.flSaturation,
							nLEDColorR: n.r,
							nLEDColorG: n.g,
							nLEDColorB: n.b,
						});
					},
				}),
			d &&
				n.createElement(o.m, {
					label: Localize("#Settings_ControllerCalibration_PlayerLED"),
					rgOptions: g,
					selectedOption: l.ePlayerSlotLEDSetting,
					onChange: (e) =>
						((e) => {
							let n = t;
							n.ePlayerSlotLEDSetting = e;
							SteamClient.Input.SetControllerPersonalizationSetting(
								"ePlayerSlotLEDSetting",
								e,
							);
							r(n);
						})(e.data),
					bDisableMouseOverlay: true,
					contextMenuPositionOptions: {
						bDisableMouseOverlay: true,
					},
				}),
		);
	} else {
		return n.createElement(n.Fragment, null);
	}
});
const H = (0, i.PA)(function (e) {
	const { controllerSettings: t, setControllerSettings: r } = e;
	const i = (0, s.AX)();
	const u = a.Fd.Get().GetController(i);
	const d = (e, t) => {
		SteamClient.Input.ForceSimpleHapticEvent(i, e ? 0 : 1, 2, 0, t - 5);
	};
	if (!u) {
		return n.createElement(n.Fragment, null);
	}
	const A = t.nLHapticStrength + 2;
	const g = t.nRHapticStrength + 2;
	const h = u.eControllerType == 4;
	const C = !!(u.unCapabilities & 8192) || h;
	const _ = !!(u.unCapabilities & 16384) || !!(u.unCapabilities & 2097152);
	const f =
		A > 7
			? {
					"--left-track-color":
						"linear-gradient( to right, #1a9fff 0, #1a9fff calc( (100%) * " +
						(7 / A).toString() +
						" ), #E35E1C calc( (100%) * " +
						(7 / A).toString() +
						" ), #E35E1C 100% )",
				}
			: {};
	const y =
		g > 7
			? {
					"--left-track-color":
						"linear-gradient( to right, #1a9fff 0, #1a9fff calc( (100%) * " +
						(7 / g).toString() +
						" ), #E35E1C calc( (100%) * " +
						(7 / g).toString() +
						" ), #E35E1C 100% )",
				}
			: {};
	const S = A > 7 || g > 7;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			o.G5,
			null,
			n.createElement(
				m.Z,
				{
					"flow-children": "column",
				},
				_ &&
					n.createElement(o.y4, {
						onChange: () => {
							let e = t;
							e.eRumblePreference = t.eRumblePreference == 1 ? 0 : 1;
							r(e);
						},
						checked: t.eRumblePreference == 1,
						label: Localize("#Settings_ControllerCalibration_RumbleEnable"),
					}),
				C &&
					n.createElement(o.y4, {
						onChange: () => {
							let e = t;
							e.bHaptics = !t.bHaptics;
							r(e);
						},
						checked: t.bHaptics,
						label: Localize("#Settings_ControllerCalibration_HapticsEnable"),
					}),
				h &&
					n.createElement(
						m.Z,
						{
							onOptionsButton: () => {
								d(true, t.nLHapticStrength);
								return true;
							},
							actionDescriptionMap: {
								[p.pR.OPTIONS]: Localize(
									"#Settings_Controller_Calibration_HapticTest",
								),
							},
						},
						n.createElement(o.d3, {
							bottomSeparator: "none",
							showValue: true,
							value: A,
							onChange: (e) => {
								let n = t;
								n.nLHapticStrength = Math.round(e) - 2;
								r(n);
								d(true, e);
							},
							min: 0,
							max: 12,
							step: 1,
							label: Localize(
								"#Settings_Controller_Calibration_LHapticStrength",
							),
							trackStyleOverride: f,
							valueSuffix: "dB",
						}),
					),
				h &&
					n.createElement(
						m.Z,
						{
							onOptionsButton: () => {
								d(false, g);
								return true;
							},
							actionDescriptionMap: {
								[p.pR.OPTIONS]: Localize(
									"#Settings_Controller_Calibration_HapticTest",
								),
							},
						},
						n.createElement(o.d3, {
							bottomSeparator: "none",
							showValue: true,
							value: g,
							onChange: (e) => {
								let n = t;
								n.nRHapticStrength = Math.round(e) - 2;
								r(n);
								d(false, e);
							},
							min: 0,
							max: 12,
							step: 1,
							label: Localize(
								"#Settings_Controller_Calibration_RHapticStrength",
							),
							trackStyleOverride: y,
							valueSuffix: "dB",
						}),
					),
				h &&
					n.createElement(
						m.Z,
						{
							className: (0, b.A)(l.HapticsDesc, S && l.HapticsWarning),
						},
						Localize("#Settings_Controller_Calibration_HapticsWarning"),
					),
			),
		),
	);
});
const j = (0, i.PA)(function (e) {
	const { controllerSettings: t, setControllerSettings: r } = e;
	if (t) {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(
				o.G5,
				null,
				n.createElement(
					m.Z,
					{
						"flow-children": "column",
					},
					n.createElement(V, {
						...e,
					}),
				),
			),
		);
	} else {
		return n.createElement(n.Fragment, null);
	}
});
