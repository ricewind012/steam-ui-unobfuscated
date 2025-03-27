import { Localize } from "../../actual_src/utils/localization.js";
import { GetOwningWindowForEvent } from "../../actual_src/utils/domutils.js";
import n from "./63696.js";
import i, { PA } from "./41230.js";
import a from "./84056.js";
import s from "./35488.js";
import o, { A as A_1 } from "./90765.js";
import l from "./69164.js";
import c from "./85360.js";
import m from "./76587.js";
import d from "./13110.js";
import A from "./4690.js";
import p from "./72655.js";
import g from "./61657.js";
import h, { M8 } from "./52192.js";
import C, { yq } from "./93966.js";
import { wY, Ue, l6 } from "./52451.js";
import { w as w_1 } from "./23101.js";
import b, { E as E_1 } from "./30519.js";
import y from "./22091.js";
import S from "./46422.js";
import w from "./64608.js";
import B from "./45309.js";
import v, { pg } from "./13869.js";
import E from "./50376.js";
import { VK, WN, ko } from "./15897.js";
export function G4(e) {
	const t = c.v3.CurrentEditedBinding;
	const r = t?.gamepad_button !== undefined;
	return {
		tab: {
			id: "Gamepad",
			title: "#ControllerConfigurator_ChooseBinding_Gamepad",
			content: <O appid={e} />,
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
function K(e) {
	const t = c.v3.StableAppId;
	const r = c.v3?.CurrentEditedBinding?.gamepad_button?.button == e.button;
	const i = yq();
	const a = A_1(e.className, r && m.SelectedBinding);
	const SRef = n.useRef(null);
	const [d, setD] = n.useState(0);
	const p = n.useCallback(() => {
		if (e.locToken && SRef.current) {
			setD(SRef.current.getBoundingClientRect().width);
		}
	}, [e.locToken]);
	const g = wY(p);
	const h = Ue(g, SRef);
	l6(window, "resize", p);
	n.useEffect(p, [p]);
	const b = e.locToken ? (0, Localize)(e.locToken) : null;
	const y = w_1(b, d * 0.8, {
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
	return (
		<l.Z
			onActivate={() => {
				z8(t, e.button);
				i();
			}}
			className={a}
			navRef={e.navRef}
			ref={h}
			onGamepadDirection={e.onGamepadDirection}
			noFocusRing
			preferredFocus={e.preferredFocus}
		>
			<div style={S} className={A_1(m.KeyboardKeyLabel)}>
				{e.locToken ? b : e.children}
			</div>
		</l.Z>
	);
}
function D(e) {
	const { appid, navRef, onGamepadDirection } = e;
	const s = S.oy.MostRecentlyActiveControllerIndex;
	const d = y.Fd.Get().GetController(s);
	const A = yq();
	if (!d) {
		return <></>;
	}
	const p = d.eControllerType == 2 || d.eControllerType == 3;
	const g = !!(d.unCapabilities & 131072);
	if (!p && !g) {
		return <></>;
	}
	const h = ((e) => {
		if (c.v3?.CurrentEditedBinding?.controller_action?.led_color) {
			const t = c.v3?.CurrentEditedBinding?.controller_action?.led_color;
			if (e) {
				const e = {
					r: t.brightness * 255,
					g: t.brightness * 255,
					b: t.brightness * 255,
					a: 255,
				};
				return VK(e);
			}
			return E_1(t);
		}
		if (e) {
			return "#FFFFFFFF";
		} else {
			return "#FF0000FF";
		}
	})(p);
	return (
		<l.Z
			navRef={navRef}
			onGamepadDirection={onGamepadDirection}
			key="position"
			onActivate={(e) => {
				((e, t, r, i) => {
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
					pg(
						<F
							fnSaveLEDBinding={s}
							existingBinding={
								c.v3.CurrentEditedBinding?.controller_action?.led_color
							}
							nControllerIndex={i}
						/>,
						t,
					);
				})(appid, GetOwningWindowForEvent(e), A, s);
			}}
			style={{
				filter: `drop-shadow(0 0 8px ${h})`,
			}}
			className={A_1(m.LEDButton)}
		>
			<E.IFd className={m.LEDIcon} />
			<div className={A_1(m.KeyboardKeyLabel)}>
				{p
					? (0, Localize)("#ControllerBinding_SetLED_Brightness")
					: (0, Localize)("#ControllerBinding_SetLED_Color")}
			</div>
		</l.Z>
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
	const { existingBinding, fnSaveLEDBinding, nControllerIndex, ...a } = e;
	const [s, setS] = n.useState(e.existingBinding ?? N);
	n.useEffect(() => {
		y.Fd.Get().StartControllerCalibrationFlow(nControllerIndex);
		return () => {
			SteamClient.Input.RestoreControllerPersonalizationSettings(
				nControllerIndex,
			);
			y.Fd.Get().EndControllerCalibrationFlow();
		};
	}, [nControllerIndex]);
	const l = n.useMemo(
		() => ({
			flBrightness: s.brightness / 100,
			flSaturation: s.saturation / 100,

			flHue: WN({
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
		? (0, Localize)("#ControllerBinding_LightSetting_CustomSetting_Brightness")
		: (0, Localize)("#ControllerBinding_LightSetting_CustomSetting");
	const A = m
		? (0, Localize)(
				"#ControllerBinding_LightSetting_CustomSetting_Brightness_Desc",
			)
		: (0, Localize)("#ControllerBinding_LightSetting_CustomSetting_Desc");
	const p = [
		{
			data: 0,
			label: (0, Localize)("#ControllerBinding_LightSetting_Default"),
			desc: (0, Localize)("#ControllerBinding_LightSetting_Default_Desc"),
		},
		{
			data: 1,
			label: d,
			desc: A,
		},
		{
			data: 2,
			label: (0, Localize)("#ControllerBinding_LightSetting_XInput"),
			desc: (0, Localize)("#ControllerBinding_LightSetting_XInput_Desc"),
		},
	];
	const g = s.setting === 1;
	a.title = m
		? (0, Localize)("#ControllerBinding_SetLED_Brightness")
		: (0, Localize)("#ControllerBinding_SetLED_Color");
	return (
		<B.X_
			{...a}
			onCommitResult={() => {
				fnSaveLEDBinding(s);
			}}
			onCancel={() => {
				SteamClient.Input.RestoreControllerPersonalizationSettings(
					nControllerIndex,
				);
			}}
		>
			<w.Vb
				label={(0, Localize)("#ControllerBinding_LightSetting")}
				description={p[s.setting].desc}
				onChange={(e) => {
					setS({
						...s,
						setting: e.data,
					});
				}}
				rgOptions={p}
				selectedOption={s.setting}
				strDefaultLabel={(0, Localize)("ControllerBinding_LightSetting_Desc")}
			/>
			{g && (
				<b.D
					ledSetting={l}
					bUseOnlyBrightness={m}
					nControllerIndex={e.nControllerIndex}
					onLEDColorSettingsChanged={(e) => {
						const t = ko({
							h: e.flHue,
							s: 1,
							v: 1,
							a: 1,
						});
						setS({
							...s,
							brightness: Math.round(e.flBrightness * 100),
							saturation: Math.round(e.flSaturation * 100),
							color_r: Math.round(t.r),
							color_g: Math.round(t.g),
							color_b: Math.round(t.b),
						});
					}}
				/>
			)}
		</B.X_>
	);
}
function G(e) {
	const TRef = n.useRef(undefined);
	const RRef = n.useRef(undefined);
	const IRef = n.useRef(undefined);
	const ARef = n.useRef(undefined);
	const SRef = n.useRef(undefined);
	const LRef = n.useRef(undefined);
	const c = e.centerButtonLabel != null && e.centerGamepadButton != null;
	const u = n.useCallback(
		(e) => {
			if (TRef.current?.BHasFocus()) {
				return false;
			}
			switch (e.detail.button) {
				case g.pR.DIR_UP: {
					if (c && IRef.current?.BHasFocus()) {
						LRef.current?.TakeFocus(e.detail.button);
					} else if (RRef.current?.BHasFocus()) {
						RRef.current?.ParentTakeFocus(e.detail.button);
					} else {
						RRef.current?.TakeFocus(e.detail.button);
					}
					break;
				}
				case g.pR.DIR_DOWN: {
					if (c && RRef.current?.BHasFocus()) {
						LRef.current?.TakeFocus(e.detail.button);
					} else if (IRef.current?.BHasFocus()) {
						IRef.current?.ParentTakeFocus(e.detail.button);
					} else {
						IRef.current?.TakeFocus(e.detail.button);
					}
					break;
				}
				case g.pR.DIR_LEFT: {
					if (c && SRef.current?.BHasFocus()) {
						LRef.current?.TakeFocus(e.detail.button);
					} else if (ARef.current?.BHasFocus()) {
						ARef.current?.ParentTakeFocus(e.detail.button);
					} else {
						ARef.current?.TakeFocus(e.detail.button);
					}
					break;
				}
				case g.pR.DIR_RIGHT: {
					if (c && ARef.current?.BHasFocus()) {
						LRef.current?.TakeFocus(e.detail.button);
					} else if (SRef.current?.BHasFocus()) {
						SRef.current?.ParentTakeFocus(e.detail.button);
					} else {
						SRef.current?.TakeFocus(e.detail.button);
					}
				}
			}
			e.stopPropagation();
			return true;
		},
		[TRef, RRef, IRef, ARef, SRef, LRef, c],
	);
	const d = A_1(
		m.CardinalButtonGroup,
		e.shape == "diamond" && m.Diamond,
		e.shape == "circle" && m.Circle,
		e.className,
	);
	const h = Ue(TRef, e.navRef);
	return (
		<p.YZ
			className={d}
			navRef={h}
			navEntryPreferPosition={A.iU.PREFERRED_CHILD}
			onGamepadDirection={e.onGamepadDirection}
			noFocusRing
		>
			<K
				button={e.topGamepadButton}
				navRef={RRef}
				className={A_1(m.CardinalButtonGroupButton, m.TopButton)}
				onGamepadDirection={u}
			>
				{e.topButtonLabel}
			</K>
			<K
				button={e.bottomGamepadButton}
				navRef={IRef}
				className={A_1(m.CardinalButtonGroupButton, m.BottomButton)}
				onGamepadDirection={u}
			>
				{e.bottomButtonLabel}
			</K>
			<K
				button={e.leftGamepadButton}
				navRef={ARef}
				className={A_1(m.CardinalButtonGroupButton, m.LeftButton)}
				onGamepadDirection={u}
			>
				{e.leftButtonLabel}
			</K>
			<K
				button={e.rightGamepadButton}
				navRef={SRef}
				className={A_1(m.CardinalButtonGroupButton, m.RightButton)}
				onGamepadDirection={u}
			>
				{e.rightButtonLabel}
			</K>
			{c && (
				<K
					button={e.centerGamepadButton}
					navRef={LRef}
					className={A_1(m.CardinalButtonGroupButton, m.CenterButton)}
					onGamepadDirection={u}
					preferredFocus
				>
					{e.centerButtonLabel}
				</K>
			)}
		</p.YZ>
	);
}
const O = PA((e) => {
	const { appid } = e;
	const RRef = n.useRef(undefined);
	const IRef = n.useRef(undefined);
	const ARef = n.useRef(undefined);
	const c = n.useCallback(
		(e) =>
			e.detail.button == g.pR.DIR_RIGHT &&
			(IRef.current
				? IRef.current?.TakeFocus(e.detail.button)
				: ARef.current?.TakeFocus(e.detail.button),
			true),
		[ARef, IRef],
	);
	const p = n.useCallback(
		(e) =>
			e.detail.button == g.pR.DIR_RIGHT
				? (ARef.current?.TakeFocus(e.detail.button), true)
				: e.detail.button == g.pR.DIR_LEFT &&
					(RRef.current?.TakeFocus(e.detail.button), true),
		[ARef, RRef],
	);
	const C = n.useCallback(
		(e) =>
			e.detail.button == g.pR.DIR_LEFT &&
			(IRef.current
				? IRef.current?.TakeFocus(e.detail.button)
				: RRef.current?.TakeFocus(e.detail.button),
			true),
		[RRef, IRef],
	);
	return (
		<l.Z className={m.ColumnContainer}>
			<l.Z
				className={A_1(m.Column, m.Left)}
				navEntryPreferPosition={A.iU.MAINTAIN_Y}
			>
				<l.Z className={m.BumperTriggerGroup}>
					<K button={1} className={m.TriggerButton}>
						{(0, Localize)("#GamepadKey_LeftTrigger")}
					</K>
					<K button={7} className={m.BumperButton}>
						{(0, Localize)("#GamepadKey_LeftBumper")}
					</K>
				</l.Z>
				<G
					shape="circle"
					topButtonLabel={<s.Carat direction="up" />}
					topGamepadButton={18}
					bottomButtonLabel={<s.Carat direction="down" />}
					bottomGamepadButton={19}
					leftButtonLabel={<s.Carat direction="left" />}
					leftGamepadButton={20}
					rightButtonLabel={<s.Carat direction="right" />}
					rightGamepadButton={21}
					centerButtonLabel={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 36 34"
							fill="none"
						>
							<path
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M18 34C27.9411 34 36 26.3888 36 17C36 7.61116 27.9411 0 18 0C8.05887 0 0 7.61116 0 17C0 26.3888 8.05887 34 18 34ZM18.0001 27.0526C25.6294 27.0526 31.4211 21.6411 31.4211 15.4211C31.4211 9.20102 25.6294 3.78947 18.0001 3.78947C10.3708 3.78947 4.57902 9.20102 4.57902 15.4211C4.57902 21.6411 10.3708 27.0526 18.0001 27.0526ZM18.0001 28.8421C26.4006 28.8421 33.2106 22.8333 33.2106 15.4211C33.2106 8.00881 26.4006 2 18.0001 2C9.59953 2 2.78955 8.00881 2.78955 15.4211C2.78955 22.8333 9.59953 28.8421 18.0001 28.8421ZM22.5131 21.3157H14.6215V10.042H17.4077V18.8033H22.5131V21.3157Z"
							/>
						</svg>
					}
					centerGamepadButton={9}
				/>
				<G
					shape="diamond"
					className={m.InsetLeftGroup}
					navRef={RRef}
					onGamepadDirection={c}
					topButtonLabel={<s.DirectionalButton direction="up" />}
					topGamepadButton={14}
					bottomButtonLabel={<s.DirectionalButton direction="down" />}
					bottomGamepadButton={15}
					leftButtonLabel={<s.DirectionalButton direction="left" />}
					leftGamepadButton={16}
					rightButtonLabel={<s.DirectionalButton direction="right" />}
					rightGamepadButton={17}
				/>
			</l.Z>
			<l.Z
				className={A_1(m.Column, m.Middle)}
				navEntryPreferPosition={A.iU.MAINTAIN_Y}
			>
				<d.d
					label={(0, Localize)(
						"#ControllerConfigurator_ChooseBinding_Prompt_Gamepad",
					)}
				/>
				{!M8(appid) && (
					<div className={A_1(m.GamepadUnspported)}>
						{(0, Localize)(
							"#ControllerConfigurator_ChooseBinding_Gamepad_Unsupported",
						)}
					</div>
				)}
				<l.Z
					className={m.SelectStartGroup}
					navEntryPreferPosition={A.iU.MAINTAIN_X}
				>
					<K
						button={12}
						className={m.SelectButton}
						locToken="#GamepadKey_Select"
					/>
					<K
						button={11}
						className={m.StartButton}
						locToken="#GamepadKey_Start"
					/>
				</l.Z>
				<s.GenericGamepad className={m.GamepadPreview} />
				<D appid={appid} navRef={IRef} onGamepadDirection={p} />
			</l.Z>
			<l.Z
				className={A_1(m.Column, m.Right)}
				navEntryPreferPosition={A.iU.MAINTAIN_Y}
			>
				<l.Z className={m.BumperTriggerGroup}>
					<K button={2} className={m.TriggerButton}>
						{(0, Localize)("#GamepadKey_RightTrigger")}
					</K>
					<K button={8} className={m.BumperButton}>
						{(0, Localize)("#GamepadKey_RightBumper")}
					</K>
				</l.Z>
				<G
					shape="diamond"
					topButtonLabel={<s.ABXYButton button="Y" />}
					topGamepadButton={5}
					bottomButtonLabel={<s.ABXYButton button="A" />}
					bottomGamepadButton={3}
					leftButtonLabel={<s.ABXYButton button="X" />}
					leftGamepadButton={6}
					rightButtonLabel={<s.ABXYButton button="B" />}
					rightGamepadButton={4}
				/>
				<G
					shape="circle"
					className={m.InsetRightGroup}
					navRef={ARef}
					onGamepadDirection={C}
					topButtonLabel={<s.Carat direction="up" />}
					topGamepadButton={22}
					bottomButtonLabel={<s.Carat direction="down" />}
					bottomGamepadButton={23}
					leftButtonLabel={<s.Carat direction="left" />}
					leftGamepadButton={24}
					rightButtonLabel={<s.Carat direction="right" />}
					rightGamepadButton={25}
					centerButtonLabel={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 36 34"
							fill="none"
						>
							<path
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M18 34C27.9411 34 36 26.3888 36 17C36 7.61116 27.9411 0 18 0C8.05887 0 0 7.61116 0 17C0 26.3888 8.05887 34 18 34ZM18.0001 27.0526C25.6294 27.0526 31.4211 21.6411 31.4211 15.4211C31.4211 9.20102 25.6294 3.78947 18.0001 3.78947C10.3708 3.78947 4.57902 9.20102 4.57902 15.4211C4.57902 21.6411 10.3708 27.0526 18.0001 27.0526ZM18.0001 28.8421C26.4006 28.8421 33.2106 22.8333 33.2106 15.4211C33.2106 8.00881 26.4006 2 18.0001 2C9.59953 2 2.78955 8.00881 2.78955 15.4211C2.78955 22.8333 9.59953 28.8421 18.0001 28.8421ZM23.2203 21.3157H20.1281L17.9861 17.7403H17.7445H16.4077V21.3157H13.6215V10.042H18.0022C19.6127 10.042 20.8045 10.3587 21.5775 10.9922C22.3506 11.6257 22.7371 12.5168 22.7371 13.6657C22.7371 14.5354 22.5492 15.2655 22.1734 15.856C21.8084 16.4358 21.293 16.876 20.6273 17.1766L23.2203 21.3157ZM16.4077 12.4256V15.3567H17.9216C18.4907 15.3567 18.9363 15.2279 19.2584 14.9702C19.5912 14.7018 19.7576 14.3153 19.7576 13.8106C19.7576 13.3489 19.6073 13.0054 19.3067 12.7799C19.0061 12.5437 18.5283 12.4256 17.8733 12.4256H16.4077Z"
							/>
						</svg>
					}
					centerGamepadButton={10}
				/>
			</l.Z>
		</l.Z>
	);
});
