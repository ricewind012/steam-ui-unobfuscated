var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./15897.js");
var a = require(/*webcrack:missing*/ "./46108.js");
var s = require("./64608.js");
var o = require("./23394.js");
function l(e) {
	const { colorHex: t } = e;
	const r = t.length > 7 ? t.slice(0, -2) + "FF" : t;
	const i = t;
	const a = e.bUseAlpha ?? false;
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"div",
			{
				className: o.ColorPickerPreview,
			},
			n.createElement("div", {
				className: o.ColorPickerPreview_Square,
				style: {
					backgroundColor: r,
				},
			}),
			a &&
				n.createElement("div", {
					className: o.ColorPickerPreview_Square,
					style: {
						backgroundColor: i,
					},
				}),
		),
	);
}
function c(e) {
	const {
		colorHSV: t,
		onChangeColor: r,
		bUseAlpha: o,
		labelHue: c,
		labelSaturation: m,
		labelBrightness: u,
		labelAlpha: d,
	} = e;
	const [A, p] = n.useState(t);
	const g = (e, t) => {
		const n = {
			...A,
			[t]: e,
		};
		p(n);
		r(n);
	};
	const h = n.useMemo(() => (0, i.vo)(A), [A]);
	const C = (0, a.we)(c ?? "#ColorPicker_Hue");
	const _ = (0, a.we)(m ?? "#ColorPicker_Saturation");
	const f = (0, a.we)(u ?? "#ColorPicker_Brightness");
	const b = (0, a.we)(d ?? "#ColorPicker_Alpha");
	const y = {
		background: `linear-gradient(to right, ${(0, i.vo)({
			h: A.h,
			s: 0,
			v: A.v,
			a: 1,
		})} 0%, ${(0, i.vo)({
			h: A.h,
			s: 1,
			v: A.v,
			a: 1,
		})} 100%)`,
		"--left-track-color": "transparent",
	};
	const S = {
		background: `linear-gradient(to right, ${(0, i.vo)({
			h: A.h,
			s: A.s,
			v: 0,
			a: 1,
		})} 0%, ${(0, i.vo)({
			h: A.h,
			s: A.s,
			v: 1,
			a: 1,
		})} 100%)`,
		"--left-track-color": "transparent",
	};
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			s.f3,
			null,
			n.createElement(l, {
				bUseAlpha: o,
				colorHex: h,
			}),
		),
		n.createElement(
			s.f3,
			null,
			n.createElement(s.d3, {
				bottomSeparator: "none",
				value: A.h,
				onChange: (e) => g(e, "h"),
				min: 0,
				max: 360,
				step: 1,
				label: C,
				trackStyleOverride: {
					background:
						"linear-gradient(to left, #FF0000 0%, #FF00FF 16.66%, #0000FF 33.3%, #00FFFF 50%, #00FF00 66.6%, #FFFF00 83.33%, #FF0000 100%)",
					"--left-track-color": "transparent",
				},
				editableValue: true,
				valueSuffix: (0, a.we)("#Unit_Degree_Symbol"),
			}),
			n.createElement(s.d3, {
				bottomSeparator: "none",
				value: Math.round(A.s * 100),
				onChange: (e) => g(e / 100, "s"),
				min: 0,
				max: 100,
				step: 1,
				label: _,
				trackStyleOverride: y,
				editableValue: true,
				valueSuffix: (0, a.we)("#Unit_Percent"),
			}),
			n.createElement(s.d3, {
				bottomSeparator: o ? "none" : "standard",
				value: Math.round(A.v * 100),
				onChange: (e) => g(e / 100, "v"),
				min: 0,
				max: 100,
				step: 1,
				label: f,
				trackStyleOverride: S,
				editableValue: true,
				valueSuffix: (0, a.we)("#Unit_Percent"),
			}),
			o &&
				n.createElement(s.d3, {
					bottomSeparator: "standard",
					value: Math.round(A.a * 100),
					onChange: (e) => g(e / 100, "a"),
					min: 0,
					max: 100,
					step: 1,
					label: b,
					editableValue: true,
					valueSuffix: (0, a.we)("#Unit_Percent"),
				}),
		),
	);
}
export function E(e) {
	const t = {
		r: e.color_r,
		g: e.color_g,
		b: e.color_b,
		a: 255,
	};
	const r = {
		h: (0, i.WN)(t).h,
		s: e.saturation / 100,
		v: e.brightness / 100,
		a: 1,
	};
	const n = (0, i.ko)(r);
	return (0, i.VK)(n);
}
export function D(e) {
	const {
		ledSetting: t,
		onLEDColorSettingsChanged: r,
		nControllerIndex: o,
	} = e;
	n.useEffect(() => {
		var e;
		e = t;
		SteamClient.Input.PreviewControllerLEDColor(
			e.flHue,
			e.flSaturation,
			e.flBrightness,
		);
	}, [t]);
	const m = n.useMemo(() => t.flBrightness * 100, [t]);
	const u = n.useMemo(() => {
		const r = e.bBrightnessOnlyBlue
			? {
					r: 0,
					g: 0,
					b: t.flBrightness * 255,
					a: 1,
				}
			: {
					r: t.flBrightness * 255,
					g: t.flBrightness * 255,
					b: t.flBrightness * 255,
					a: 1,
				};
		return (0, i.VK)(r);
	}, [t.flBrightness, e.bBrightnessOnlyBlue]);
	const d = n.useMemo(
		() => ({
			h: t.flHue,
			s: t.flSaturation,
			v: t.flBrightness,
			a: 1,
		}),
		[t],
	);
	const A = {
		background: `linear-gradient(to right, ${(0, i.vo)({
			h: 0,
			s: 0,
			v: 0,
			a: 1,
		})} 0%, ${(0, i.vo)({
			h: 0,
			s: 0,
			v: 1,
			a: 1,
		})} 100%)`,
		"--left-track-color": "transparent",
	};
	return n.createElement(
		n.Fragment,
		null,
		e.bUseOnlyBrightness &&
			n.createElement(
				n.Fragment,
				null,
				n.createElement(l, {
					bUseAlpha: false,
					colorHex: u,
				}),
				n.createElement(s.d3, {
					bottomSeparator: "none",
					value: m,
					onChange: (e) => {
						r({
							...t,
							flBrightness: e / 100,
						});
					},
					min: 0,
					max: 100,
					step: 1,
					trackStyleOverride: A,
					label: (0, a.we)("#Settings_Controller_Calibration_LEDBrightness"),
					editableValue: true,
					valueSuffix: (0, a.we)("#Unit_Percent"),
				}),
			),
		!e.bUseOnlyBrightness &&
			n.createElement(c, {
				bUseAlpha: false,
				colorHSV: d,
				onChangeColor: (e) => {
					r({
						flHue: e.h,
						flSaturation: e.s,
						flBrightness: e.v,
					});
				},
				labelHue: "#Settings_Controller_Calibration_LEDColor",
				labelSaturation: "#Settings_Controller_Calibration_LEDSaturation",
				labelBrightness: "#Settings_Controller_Calibration_LEDBrightness",
			}),
	);
}
