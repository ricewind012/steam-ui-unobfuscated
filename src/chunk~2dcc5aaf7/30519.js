import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { vo, WN, ko, VK } from "./15897.js";
import s from "./64608.js";
import o from "./23394.js";
function L(e) {
	const { colorHex } = e;
	const r = colorHex.length > 7 ? `${colorHex.slice(0, -2)}FF` : colorHex;
	const i = colorHex;
	const a = e.bUseAlpha ?? false;
	return (
		<>
			<div className={o.ColorPickerPreview}>
				<div
					className={o.ColorPickerPreview_Square}
					style={{
						backgroundColor: r,
					}}
				/>
				{a && (
					<div
						className={o.ColorPickerPreview_Square}
						style={{
							backgroundColor: i,
						}}
					/>
				)}
			</div>
		</>
	);
}
function C(e) {
	const {
		colorHSV,
		onChangeColor,
		bUseAlpha,
		labelHue,
		labelSaturation,
		labelBrightness,
		labelAlpha,
	} = e;
	const [A, setA] = n.useState(colorHSV);
	const g = (e, t) => {
		const n = {
			...A,
			[t]: e,
		};
		setA(n);
		onChangeColor(n);
	};
	const h = n.useMemo(() => vo(A), [A]);
	const C = Localize(labelHue ?? "#ColorPicker_Hue");
	const _ = Localize(labelSaturation ?? "#ColorPicker_Saturation");
	const f = Localize(labelBrightness ?? "#ColorPicker_Brightness");
	const b = Localize(labelAlpha ?? "#ColorPicker_Alpha");
	const y = {
		background: `linear-gradient(to right, ${vo({
			h: A.h,
			s: 0,
			v: A.v,
			a: 1,
		})} 0%, ${vo({
			h: A.h,
			s: 1,
			v: A.v,
			a: 1,
		})} 100%)`,
		"--left-track-color": "transparent",
	};
	const S = {
		background: `linear-gradient(to right, ${vo({
			h: A.h,
			s: A.s,
			v: 0,
			a: 1,
		})} 0%, ${vo({
			h: A.h,
			s: A.s,
			v: 1,
			a: 1,
		})} 100%)`,
		"--left-track-color": "transparent",
	};
	return (
		<>
			<s.f3>
				<L bUseAlpha={bUseAlpha} colorHex={h} />
			</s.f3>
			<s.f3>
				<s.d3
					bottomSeparator="none"
					value={A.h}
					onChange={(e) => g(e, "h")}
					min={0}
					max={360}
					step={1}
					label={C}
					trackStyleOverride={{
						background:
							"linear-gradient(to left, #FF0000 0%, #FF00FF 16.66%, #0000FF 33.3%, #00FFFF 50%, #00FF00 66.6%, #FFFF00 83.33%, #FF0000 100%)",
						"--left-track-color": "transparent",
					}}
					editableValue
					valueSuffix={Localize("#Unit_Degree_Symbol")}
				/>
				<s.d3
					bottomSeparator="none"
					value={Math.round(A.s * 100)}
					onChange={(e) => g(e / 100, "s")}
					min={0}
					max={100}
					step={1}
					label={_}
					trackStyleOverride={y}
					editableValue
					valueSuffix={Localize("#Unit_Percent")}
				/>
				<s.d3
					bottomSeparator={bUseAlpha ? "none" : "standard"}
					value={Math.round(A.v * 100)}
					onChange={(e) => g(e / 100, "v")}
					min={0}
					max={100}
					step={1}
					label={f}
					trackStyleOverride={S}
					editableValue
					valueSuffix={Localize("#Unit_Percent")}
				/>
				{bUseAlpha && (
					<s.d3
						bottomSeparator="standard"
						value={Math.round(A.a * 100)}
						onChange={(e) => g(e / 100, "a")}
						min={0}
						max={100}
						step={1}
						label={b}
						editableValue
						valueSuffix={Localize("#Unit_Percent")}
					/>
				)}
			</s.f3>
		</>
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
		h: WN(t).h,
		s: e.saturation / 100,
		v: e.brightness / 100,
		a: 1,
	};
	const n = ko(r);
	return VK(n);
}
export function D(e) {
	const { ledSetting, onLEDColorSettingsChanged, nControllerIndex } = e;
	n.useEffect(() => {
		let e;
		e = ledSetting;
		SteamClient.Input.PreviewControllerLEDColor(
			e.flHue,
			e.flSaturation,
			e.flBrightness,
		);
	}, [ledSetting]);
	const m = n.useMemo(() => ledSetting.flBrightness * 100, [ledSetting]);
	const u = n.useMemo(() => {
		const r = e.bBrightnessOnlyBlue
			? {
					r: 0,
					g: 0,
					b: ledSetting.flBrightness * 255,
					a: 1,
				}
			: {
					r: ledSetting.flBrightness * 255,
					g: ledSetting.flBrightness * 255,
					b: ledSetting.flBrightness * 255,
					a: 1,
				};
		return VK(r);
	}, [ledSetting.flBrightness, e.bBrightnessOnlyBlue]);
	const d = n.useMemo(
		() => ({
			h: ledSetting.flHue,
			s: ledSetting.flSaturation,
			v: ledSetting.flBrightness,
			a: 1,
		}),
		[ledSetting],
	);
	const A = {
		background: `linear-gradient(to right, ${vo({
			h: 0,
			s: 0,
			v: 0,
			a: 1,
		})} 0%, ${vo({
			h: 0,
			s: 0,
			v: 1,
			a: 1,
		})} 100%)`,
		"--left-track-color": "transparent",
	};
	return (
		<>
			{e.bUseOnlyBrightness && (
				<>
					<L bUseAlpha={false} colorHex={u} />
					<s.d3
						bottomSeparator="none"
						value={m}
						onChange={(e) => {
							onLEDColorSettingsChanged({
								...ledSetting,
								flBrightness: e / 100,
							});
						}}
						min={0}
						max={100}
						step={1}
						trackStyleOverride={A}
						label={Localize("#Settings_Controller_Calibration_LEDBrightness")}
						editableValue
						valueSuffix={Localize("#Unit_Percent")}
					/>
				</>
			)}
			{!e.bUseOnlyBrightness && (
				<C
					bUseAlpha={false}
					colorHSV={d}
					onChangeColor={(e) => {
						onLEDColorSettingsChanged({
							flHue: e.h,
							flSaturation: e.s,
							flBrightness: e.v,
						});
					}}
					labelHue="#Settings_Controller_Calibration_LEDColor"
					labelSaturation="#Settings_Controller_Calibration_LEDSaturation"
					labelBrightness="#Settings_Controller_Calibration_LEDBrightness"
				/>
			)}
		</>
	);
}
