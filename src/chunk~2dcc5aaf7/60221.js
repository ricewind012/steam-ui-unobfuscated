var n = require(/*webcrack:missing*/ "./63696.js");
var i = require(/*webcrack:missing*/ "./41230.js");
var a = require("./84056.js");
var s = require("./35488.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require(/*webcrack:missing*/ "./69164.js");
var c = require("./85360.js");
var m = require("./76587.js");
var u = require(/*webcrack:missing*/ "./46108.js");
var d = require("./13110.js");
var A = require(/*webcrack:missing*/ "./4690.js");
var p = require("./72655.js");
var g = require(/*webcrack:missing*/ "./61657.js");
var h = require("./52192.js");
var C = require("./93966.js");
var _ = require(/*webcrack:missing*/ "./52451.js");
var f = require("./23101.js");
var b = require("./30519.js");
var y = require("./22091.js");
var S = require("./46422.js");
var w = require("./64608.js");
var B = require("./45309.js");
var v = require("./13869.js");
var I = require(/*webcrack:missing*/ "./54644.js");
var E = require(/*webcrack:missing*/ "./50376.js");
var M = require("./15897.js");
export function G4(e) {
	const t = c.v3.CurrentEditedBinding;
	const r = t?.gamepad_button !== undefined;
	return {
		tab: {
			id: "Gamepad",
			title: "#ControllerConfigurator_ChooseBinding_Gamepad",
			content: n.createElement(O, {
				appid: e,
			}),
		},
		bHasBinding: r,
	};
}
export function z8(e, t) {
	const r = {
		type: a.N.k_EControllerBindingType_Gamepad,
		gamepad_button: {
			button: t,
		},
	};
	let n = c.v3.ActiveInputBinding;
	if (r != null) {
		n.new_binding = r;
	}
	c.v3.SetControllerInputBinding(e, n);
	c.v3.SaveEditingConfiguration(e);
	c.v3.EnsureEditingConfiguration();
}
function k(e) {
	const t = c.v3.StableAppId;
	const r = c.v3?.CurrentEditedBinding?.gamepad_button?.button == e.button;
	const i = (0, C.yq)();
	const a = (0, o.A)(e.className, r && m.SelectedBinding);
	const s = n.useRef(null);
	const [d, A] = n.useState(0);
	const p = n.useCallback(() => {
		if (e.locToken && s.current) {
			A(s.current.getBoundingClientRect().width);
		}
	}, [e.locToken]);
	const g = (0, _.wY)(p);
	const h = (0, _.Ue)(g, s);
	(0, _.l6)(window, "resize", p);
	n.useEffect(p, [p]);
	const b = e.locToken ? (0, u.we)(e.locToken) : null;
	const y = (0, f.w)(b, d * 0.8, {
		maxLines: 1,
		fontFamily: "Motiva Sans",
		startingSizePx: 14,
		minSizePx: 10,
	});
	const S = b
		? {
				fontSize: y,
			}
		: {};
	return n.createElement(
		l.Z,
		{
			onActivate: () => {
				z8(t, e.button);
				i();
			},
			className: a,
			navRef: e.navRef,
			ref: h,
			onGamepadDirection: e.onGamepadDirection,
			noFocusRing: true,
			preferredFocus: e.preferredFocus,
		},
		n.createElement(
			"div",
			{
				style: S,
				className: (0, o.A)(m.KeyboardKeyLabel),
			},
			e.locToken ? b : e.children,
		),
	);
}
function D(e) {
	const { appid: t, navRef: r, onGamepadDirection: i } = e;
	const s = S.oy.MostRecentlyActiveControllerIndex;
	const d = y.Fd.Get().GetController(s);
	const A = (0, C.yq)();
	if (!d) {
		return n.createElement(n.Fragment, null);
	}
	const p = d.eControllerType == 2 || d.eControllerType == 3;
	const g = !!(d.unCapabilities & 131072);
	if (!p && !g) {
		return n.createElement(n.Fragment, null);
	}
	const h = (function (e) {
		if (c.v3?.CurrentEditedBinding?.controller_action?.led_color) {
			const t = c.v3?.CurrentEditedBinding?.controller_action?.led_color;
			if (e) {
				const e = {
					r: t.brightness * 255,
					g: t.brightness * 255,
					b: t.brightness * 255,
					a: 255,
				};
				return (0, M.VK)(e);
			}
			return (0, b.E)(t);
		}
		if (e) {
			return "#FFFFFFFF";
		} else {
			return "#FF0000FF";
		}
	})(p);
	return n.createElement(
		l.Z,
		{
			navRef: r,
			onGamepadDirection: i,
			key: "position",
			onActivate: (e) => {
				(function (e, t, r, i) {
					const s = (t) => {
						const n = {
							type: a.N.k_EControllerBindingType_ControllerAction,
							controller_action: {
								action: 23,
								led_color: t,
							},
						};
						if (!c.v3.ActiveInputBinding) {
							console.warn(
								" ControllerConfiguratorStore.ActiveInputBinding  was not set up when trying to set the LED color binding. You probably want to exit/enter the screen again. ",
							);
							r();
							return;
						}
						let i = c.v3.ActiveInputBinding;
						if (n != null) {
							i.new_binding = n;
						}
						c.v3.SetControllerInputBinding(e, i);
						c.v3.SaveEditingConfiguration(e);
						c.v3.EnsureEditingConfiguration();
						r();
					};
					(0, v.pg)(
						n.createElement(F, {
							fnSaveLEDBinding: s,
							existingBinding:
								c.v3.CurrentEditedBinding?.controller_action?.led_color,
							nControllerIndex: i,
						}),
						t,
					);
				})(t, (0, I.uX)(e), A, s);
			},
			style: {
				filter: `drop-shadow(0 0 8px ${h})`,
			},
			className: (0, o.A)(m.LEDButton),
		},
		n.createElement(E.IFd, {
			className: m.LEDIcon,
		}),
		n.createElement(
			"div",
			{
				className: (0, o.A)(m.KeyboardKeyLabel),
			},
			p
				? (0, u.we)("#ControllerBinding_SetLED_Brightness")
				: (0, u.we)("#ControllerBinding_SetLED_Color"),
		),
	);
}
const N = {
	setting: 1,
	brightness: 100,
	saturation: 100,
	color_r: 255,
	color_g: 0,
	color_b: 0,
};
function F(e) {
	const {
		existingBinding: t,
		fnSaveLEDBinding: r,
		nControllerIndex: i,
		...a
	} = e;
	const [s, o] = n.useState(e.existingBinding ?? N);
	n.useEffect(() => {
		y.Fd.Get().StartControllerCalibrationFlow(i);
		return () => {
			SteamClient.Input.RestoreControllerPersonalizationSettings(i);
			y.Fd.Get().EndControllerCalibrationFlow();
		};
	}, [i]);
	const l = n.useMemo(
		() => ({
			flBrightness: s.brightness / 100,
			flSaturation: s.saturation / 100,
			flHue: (0, M.WN)({
				r: s.color_r,
				g: s.color_g,
				b: s.color_b,
				a: 1,
			}).h,
		}),
		[s],
	);
	const c = y.Fd.Get().GetController(e.nControllerIndex);
	const m = c.eControllerType == 2 || c.eControllerType == 3;
	const d = m
		? (0, u.we)("#ControllerBinding_LightSetting_CustomSetting_Brightness")
		: (0, u.we)("#ControllerBinding_LightSetting_CustomSetting");
	const A = m
		? (0, u.we)("#ControllerBinding_LightSetting_CustomSetting_Brightness_Desc")
		: (0, u.we)("#ControllerBinding_LightSetting_CustomSetting_Desc");
	const p = [
		{
			data: 0,
			label: (0, u.we)("#ControllerBinding_LightSetting_Default"),
			desc: (0, u.we)("#ControllerBinding_LightSetting_Default_Desc"),
		},
		{
			data: 1,
			label: d,
			desc: A,
		},
		{
			data: 2,
			label: (0, u.we)("#ControllerBinding_LightSetting_XInput"),
			desc: (0, u.we)("#ControllerBinding_LightSetting_XInput_Desc"),
		},
	];
	const g = s.setting === 1;
	a.title = m
		? (0, u.we)("#ControllerBinding_SetLED_Brightness")
		: (0, u.we)("#ControllerBinding_SetLED_Color");
	return n.createElement(
		B.X_,
		{
			...a,
			onCommitResult: () => {
				r(s);
			},
			onCancel: () => {
				SteamClient.Input.RestoreControllerPersonalizationSettings(i);
			},
		},
		n.createElement(w.Vb, {
			label: (0, u.we)("#ControllerBinding_LightSetting"),
			description: p[s.setting].desc,
			onChange: (e) => {
				o({
					...s,
					setting: e.data,
				});
			},
			rgOptions: p,
			selectedOption: s.setting,
			strDefaultLabel: (0, u.we)("ControllerBinding_LightSetting_Desc"),
		}),
		g &&
			n.createElement(b.D, {
				ledSetting: l,
				bUseOnlyBrightness: m,
				nControllerIndex: e.nControllerIndex,
				onLEDColorSettingsChanged: function (e) {
					const t = (0, M.ko)({
						h: e.flHue,
						s: 1,
						v: 1,
						a: 1,
					});
					o({
						...s,
						brightness: Math.round(e.flBrightness * 100),
						saturation: Math.round(e.flSaturation * 100),
						color_r: Math.round(t.r),
						color_g: Math.round(t.g),
						color_b: Math.round(t.b),
					});
				},
			}),
	);
}
function G(e) {
	const t = n.useRef(undefined);
	const r = n.useRef(undefined);
	const i = n.useRef(undefined);
	const a = n.useRef(undefined);
	const s = n.useRef(undefined);
	const l = n.useRef(undefined);
	const c = e.centerButtonLabel != null && e.centerGamepadButton != null;
	const u = n.useCallback(
		(e) => {
			if (t.current?.BHasFocus()) {
				return false;
			}
			switch (e.detail.button) {
				case g.pR.DIR_UP:
					if (c && i.current?.BHasFocus()) {
						l.current?.TakeFocus(e.detail.button);
					} else if (r.current?.BHasFocus()) {
						r.current?.ParentTakeFocus(e.detail.button);
					} else {
						r.current?.TakeFocus(e.detail.button);
					}
					break;
				case g.pR.DIR_DOWN:
					if (c && r.current?.BHasFocus()) {
						l.current?.TakeFocus(e.detail.button);
					} else if (i.current?.BHasFocus()) {
						i.current?.ParentTakeFocus(e.detail.button);
					} else {
						i.current?.TakeFocus(e.detail.button);
					}
					break;
				case g.pR.DIR_LEFT:
					if (c && s.current?.BHasFocus()) {
						l.current?.TakeFocus(e.detail.button);
					} else if (a.current?.BHasFocus()) {
						a.current?.ParentTakeFocus(e.detail.button);
					} else {
						a.current?.TakeFocus(e.detail.button);
					}
					break;
				case g.pR.DIR_RIGHT:
					if (c && a.current?.BHasFocus()) {
						l.current?.TakeFocus(e.detail.button);
					} else if (s.current?.BHasFocus()) {
						s.current?.ParentTakeFocus(e.detail.button);
					} else {
						s.current?.TakeFocus(e.detail.button);
					}
			}
			e.stopPropagation();
			return true;
		},
		[t, r, i, a, s, l, c],
	);
	const d = (0, o.A)(
		m.CardinalButtonGroup,
		e.shape == "diamond" && m.Diamond,
		e.shape == "circle" && m.Circle,
		e.className,
	);
	const h = (0, _.Ue)(t, e.navRef);
	return n.createElement(
		p.YZ,
		{
			className: d,
			navRef: h,
			navEntryPreferPosition: A.iU.PREFERRED_CHILD,
			onGamepadDirection: e.onGamepadDirection,
			noFocusRing: true,
		},
		n.createElement(
			k,
			{
				button: e.topGamepadButton,
				navRef: r,
				className: (0, o.A)(m.CardinalButtonGroupButton, m.TopButton),
				onGamepadDirection: u,
			},
			e.topButtonLabel,
		),
		n.createElement(
			k,
			{
				button: e.bottomGamepadButton,
				navRef: i,
				className: (0, o.A)(m.CardinalButtonGroupButton, m.BottomButton),
				onGamepadDirection: u,
			},
			e.bottomButtonLabel,
		),
		n.createElement(
			k,
			{
				button: e.leftGamepadButton,
				navRef: a,
				className: (0, o.A)(m.CardinalButtonGroupButton, m.LeftButton),
				onGamepadDirection: u,
			},
			e.leftButtonLabel,
		),
		n.createElement(
			k,
			{
				button: e.rightGamepadButton,
				navRef: s,
				className: (0, o.A)(m.CardinalButtonGroupButton, m.RightButton),
				onGamepadDirection: u,
			},
			e.rightButtonLabel,
		),
		c &&
			n.createElement(
				k,
				{
					button: e.centerGamepadButton,
					navRef: l,
					className: (0, o.A)(m.CardinalButtonGroupButton, m.CenterButton),
					onGamepadDirection: u,
					preferredFocus: true,
				},
				e.centerButtonLabel,
			),
	);
}
const O = (0, i.PA)(function (e) {
	const { appid: t } = e;
	const r = n.useRef(undefined);
	const i = n.useRef(undefined);
	const a = n.useRef(undefined);
	const c = n.useCallback(
		(e) =>
			e.detail.button == g.pR.DIR_RIGHT &&
			(i.current
				? i.current?.TakeFocus(e.detail.button)
				: a.current?.TakeFocus(e.detail.button),
			true),
		[a, i],
	);
	const p = n.useCallback(
		(e) =>
			e.detail.button == g.pR.DIR_RIGHT
				? (a.current?.TakeFocus(e.detail.button), true)
				: e.detail.button == g.pR.DIR_LEFT &&
					(r.current?.TakeFocus(e.detail.button), true),
		[a, r],
	);
	const C = n.useCallback(
		(e) =>
			e.detail.button == g.pR.DIR_LEFT &&
			(i.current
				? i.current?.TakeFocus(e.detail.button)
				: r.current?.TakeFocus(e.detail.button),
			true),
		[r, i],
	);
	return n.createElement(
		l.Z,
		{
			className: m.ColumnContainer,
		},
		n.createElement(
			l.Z,
			{
				className: (0, o.A)(m.Column, m.Left),
				navEntryPreferPosition: A.iU.MAINTAIN_Y,
			},
			n.createElement(
				l.Z,
				{
					className: m.BumperTriggerGroup,
				},
				n.createElement(
					k,
					{
						button: 1,
						className: m.TriggerButton,
					},
					(0, u.we)("#GamepadKey_LeftTrigger"),
				),
				n.createElement(
					k,
					{
						button: 7,
						className: m.BumperButton,
					},
					(0, u.we)("#GamepadKey_LeftBumper"),
				),
			),
			n.createElement(G, {
				shape: "circle",
				topButtonLabel: n.createElement(s.Carat, {
					direction: "up",
				}),
				topGamepadButton: 18,
				bottomButtonLabel: n.createElement(s.Carat, {
					direction: "down",
				}),
				bottomGamepadButton: 19,
				leftButtonLabel: n.createElement(s.Carat, {
					direction: "left",
				}),
				leftGamepadButton: 20,
				rightButtonLabel: n.createElement(s.Carat, {
					direction: "right",
				}),
				rightGamepadButton: 21,
				centerButtonLabel: n.createElement(
					"svg",
					{
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 36 34",
						fill: "none",
					},
					n.createElement("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M18 34C27.9411 34 36 26.3888 36 17C36 7.61116 27.9411 0 18 0C8.05887 0 0 7.61116 0 17C0 26.3888 8.05887 34 18 34ZM18.0001 27.0526C25.6294 27.0526 31.4211 21.6411 31.4211 15.4211C31.4211 9.20102 25.6294 3.78947 18.0001 3.78947C10.3708 3.78947 4.57902 9.20102 4.57902 15.4211C4.57902 21.6411 10.3708 27.0526 18.0001 27.0526ZM18.0001 28.8421C26.4006 28.8421 33.2106 22.8333 33.2106 15.4211C33.2106 8.00881 26.4006 2 18.0001 2C9.59953 2 2.78955 8.00881 2.78955 15.4211C2.78955 22.8333 9.59953 28.8421 18.0001 28.8421ZM22.5131 21.3157H14.6215V10.042H17.4077V18.8033H22.5131V21.3157Z",
					}),
				),
				centerGamepadButton: 9,
			}),
			n.createElement(G, {
				shape: "diamond",
				className: m.InsetLeftGroup,
				navRef: r,
				onGamepadDirection: c,
				topButtonLabel: n.createElement(s.DirectionalButton, {
					direction: "up",
				}),
				topGamepadButton: 14,
				bottomButtonLabel: n.createElement(s.DirectionalButton, {
					direction: "down",
				}),
				bottomGamepadButton: 15,
				leftButtonLabel: n.createElement(s.DirectionalButton, {
					direction: "left",
				}),
				leftGamepadButton: 16,
				rightButtonLabel: n.createElement(s.DirectionalButton, {
					direction: "right",
				}),
				rightGamepadButton: 17,
			}),
		),
		n.createElement(
			l.Z,
			{
				className: (0, o.A)(m.Column, m.Middle),
				navEntryPreferPosition: A.iU.MAINTAIN_Y,
			},
			n.createElement(d.d, {
				label: (0, u.we)(
					"#ControllerConfigurator_ChooseBinding_Prompt_Gamepad",
				),
			}),
			!(0, h.M8)(t) &&
				n.createElement(
					"div",
					{
						className: (0, o.A)(m.GamepadUnspported),
					},
					(0, u.we)(
						"#ControllerConfigurator_ChooseBinding_Gamepad_Unsupported",
					),
				),
			n.createElement(
				l.Z,
				{
					className: m.SelectStartGroup,
					navEntryPreferPosition: A.iU.MAINTAIN_X,
				},
				n.createElement(k, {
					button: 12,
					className: m.SelectButton,
					locToken: "#GamepadKey_Select",
				}),
				n.createElement(k, {
					button: 11,
					className: m.StartButton,
					locToken: "#GamepadKey_Start",
				}),
			),
			n.createElement(s.GenericGamepad, {
				className: m.GamepadPreview,
			}),
			n.createElement(D, {
				appid: t,
				navRef: i,
				onGamepadDirection: p,
			}),
		),
		n.createElement(
			l.Z,
			{
				className: (0, o.A)(m.Column, m.Right),
				navEntryPreferPosition: A.iU.MAINTAIN_Y,
			},
			n.createElement(
				l.Z,
				{
					className: m.BumperTriggerGroup,
				},
				n.createElement(
					k,
					{
						button: 2,
						className: m.TriggerButton,
					},
					(0, u.we)("#GamepadKey_RightTrigger"),
				),
				n.createElement(
					k,
					{
						button: 8,
						className: m.BumperButton,
					},
					(0, u.we)("#GamepadKey_RightBumper"),
				),
			),
			n.createElement(G, {
				shape: "diamond",
				topButtonLabel: n.createElement(s.ABXYButton, {
					button: "Y",
				}),
				topGamepadButton: 5,
				bottomButtonLabel: n.createElement(s.ABXYButton, {
					button: "A",
				}),
				bottomGamepadButton: 3,
				leftButtonLabel: n.createElement(s.ABXYButton, {
					button: "X",
				}),
				leftGamepadButton: 6,
				rightButtonLabel: n.createElement(s.ABXYButton, {
					button: "B",
				}),
				rightGamepadButton: 4,
			}),
			n.createElement(G, {
				shape: "circle",
				className: m.InsetRightGroup,
				navRef: a,
				onGamepadDirection: C,
				topButtonLabel: n.createElement(s.Carat, {
					direction: "up",
				}),
				topGamepadButton: 22,
				bottomButtonLabel: n.createElement(s.Carat, {
					direction: "down",
				}),
				bottomGamepadButton: 23,
				leftButtonLabel: n.createElement(s.Carat, {
					direction: "left",
				}),
				leftGamepadButton: 24,
				rightButtonLabel: n.createElement(s.Carat, {
					direction: "right",
				}),
				rightGamepadButton: 25,
				centerButtonLabel: n.createElement(
					"svg",
					{
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 36 34",
						fill: "none",
					},
					n.createElement("path", {
						fill: "currentColor",
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M18 34C27.9411 34 36 26.3888 36 17C36 7.61116 27.9411 0 18 0C8.05887 0 0 7.61116 0 17C0 26.3888 8.05887 34 18 34ZM18.0001 27.0526C25.6294 27.0526 31.4211 21.6411 31.4211 15.4211C31.4211 9.20102 25.6294 3.78947 18.0001 3.78947C10.3708 3.78947 4.57902 9.20102 4.57902 15.4211C4.57902 21.6411 10.3708 27.0526 18.0001 27.0526ZM18.0001 28.8421C26.4006 28.8421 33.2106 22.8333 33.2106 15.4211C33.2106 8.00881 26.4006 2 18.0001 2C9.59953 2 2.78955 8.00881 2.78955 15.4211C2.78955 22.8333 9.59953 28.8421 18.0001 28.8421ZM23.2203 21.3157H20.1281L17.9861 17.7403H17.7445H16.4077V21.3157H13.6215V10.042H18.0022C19.6127 10.042 20.8045 10.3587 21.5775 10.9922C22.3506 11.6257 22.7371 12.5168 22.7371 13.6657C22.7371 14.5354 22.5492 15.2655 22.1734 15.856C21.8084 16.4358 21.293 16.876 20.6273 17.1766L23.2203 21.3157ZM16.4077 12.4256V15.3567H17.9216C18.4907 15.3567 18.9363 15.2279 19.2584 14.9702C19.5912 14.7018 19.7576 14.3153 19.7576 13.8106C19.7576 13.3489 19.6073 13.0054 19.3067 12.7799C19.0061 12.5437 18.5283 12.4256 17.8733 12.4256H16.4077Z",
					}),
				),
				centerGamepadButton: 10,
			}),
		),
	);
});
