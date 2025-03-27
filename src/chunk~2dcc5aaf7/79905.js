import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i, { PA } from "./41230.js";
import a, { Rh, hy } from "./22091.js";
import s, { AX } from "./18057.js";
import o from "./64608.js";
import l from "./48101.js";
import m from "./69164.js";
import u from "./15917.js";
import d from "./22047.js";
import A from "./50350.js";
import p from "./61657.js";
import g, { ui } from "./62486.js";
import h from "./12307.js";
import C from "./75121.js";
import _ from "./86196.js";
import f from "./39354.js";
import b, { A as A_1 } from "./90765.js";
import y from "./53622.js";
import S, { sr } from "./43014.js";
import w, { Wh } from "./31800.js";
import B, { x1, dv } from "./52192.js";
import v from "./72476.js";
import I from "./21091.js";
import E, { oH } from "./33572.js";
import M from "./30519.js";
import T, { WN, ko } from "./15897.js";
import R from "./81540.js";
import k from "./34792.js";
const D = () => <div />;
export function QY(e) {
	n.useEffect(() => {
		a.Fd.Get().StartControllerCalibrationFlow(e);
		return () => a.Fd.Get().EndControllerCalibrationFlow();
	}, [e]);
}
export const sA = PA((e) => {
	console.log("ControllerDeviceCalibrationPage");
	const t = AX();
	const r = a.Fd.Get().GetController(t);
	QY(t);
	const [i, setI] = n.useState(false);
	const [l, setL] = n.useState(r);
	const u = (e) => {
		setI(true);
		setL(e);
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
	((e) => {
		n.useEffect(
			() => () => SteamClient.Input.SaveControllerPersonalizationSettings(e),
			[e],
		);
	})(t);
	((e) => {
		n.useEffect(
			() => () => {
				if (e.mode == E._5.ControllerConfigurator) {
					SteamClient.Overlay.DestroyGamePadUIDesktopConfiguratorWindow();
				}
			},
			[e.mode],
		);
	})(oH());
	Wh(Localize("#Settings_Controller_Calibration"), "ControllerCalibration");
	if (!r) {
		return <></>;
	}
	const g =
		(r.unCapabilities & 4096) != 0 && (r.unCapabilities & 16777216) != 0;
	const h = r.eControllerType == 4;
	const C =
		r.eControllerType == 2 ||
		r.eControllerType == 3 ||
		r.eControllerType == 3 ||
		(r.unCapabilities & 65536) != 0;
	const _ = (r.unCapabilities & 2121728) != 0;
	const f = [
		{
			visible: r.eControllerType == 2,
			title: Localize("#Settings_ControllerCalibration_General"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.General(t),
			content: <L controllerSettings={l} setControllerSettings={u} />,
			hideTitle: true,
		},
		{
			visible: r.eControllerType != 2,
			title: Localize("#Settings_ControllerCalibration_Joystick"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.Inputs(t),
			content: <P controllerSettings={l} setControllerSettings={u} />,
			hideTitle: true,
		},
		{
			visible: k.rV.settings?.bIsValveEmail && g && h,
			title: Localize("#Settings_ControllerCalibration_TrackpadsVsSticks"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.Trackpads(t),
			content: <O controllerSettings={l} setControllerSettings={u} />,
		},
		{
			visible: (r.unCapabilities & 2048) != 0,
			title: Localize("#Settings_ControllerCalibration_Gyro"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.Gyro(t),
			content: <U controllerSettings={l} setControllerSettings={u} />,
			hideTitle: true,
		},
		{
			visible: false,
			title: "Gyro Demo",
			route: s.BV.GamepadUI.ControllerDeviceCalibration.GyroDemo(t),
			content: <W controllerSettings={l} setControllerSettings={u} />,
			hideTitle: true,
		},
		{
			visible: r.eControllerType == 2,
			title: Localize("#Settings_ControllerCalibration_Sensors"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.Sensors(t),
			content: <Z controllerSettings={l} setControllerSettings={u} />,
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
			content: <H controllerSettings={l} setControllerSettings={u} />,
		},
		{
			visible: C,
			title: Localize("#Settings_ControllerCalibration_LEDs"),
			route: s.BV.GamepadUI.ControllerDeviceCalibration.LEDs(t),
			content: <J controllerSettings={l} setControllerSettings={u} />,
		},
	];
	return (
		<A.dj>
			<d.q title={Localize("#Settings_Title")} pages={f} />
		</A.dj>
	);
});
const G = PA((e) => {
	const { controllerSettings, setControllerSettings, bLeftStick } = e;
	const d = AX();
	const A = a.Fd.Get().GetController(d);
	const h = a.Fd.Get().ControllerState;
	const [f, setF] = n.useState(false);
	const [B, setB] = n.useState(false);
	if (!A) {
		return <></>;
	}
	let I = 0;
	let E = false;
	const M = ui(
		controllerSettings.eControllerType,
		controllerSettings.unVendorID,
		controllerSettings.unProductID,
	);
	if (bLeftStick) {
		I =
			controllerSettings.nLStickDeadzone == -1
				? M
				: controllerSettings.nLStickDeadzone;
		E =
			!f ||
			(bLeftStick &&
				h &&
				Math.sqrt(
					h?.sLeftStickX * h?.sLeftStickX + h?.sLeftStickY * h?.sLeftStickY,
				) < I);
	} else {
		I =
			controllerSettings.nRStickDeadzone == -1
				? M
				: controllerSettings.nRStickDeadzone;
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
		? bLeftStick
			? (h?.sLeftStickX ?? 0) / 32767
			: (h?.sRightStickX ?? 0) / 32767
		: 0;
	const F = f
		? bLeftStick
			? (-h?.sLeftStickY ?? 0) / 32767
			: (-h?.sRightStickY ?? 0) / 32767
		: 0;
	return (
		<m.Z className={A_1(l.JoystickPageContainer)}>
			<o.G5>
				<m.Z
					flow-children="column"
					onButtonDown={(e) => {
						switch (e.detail.button) {
							case p.pR.OPTIONS: {
								setF(!f);
								return true;
							}
							case p.pR.CANCEL: {
								if (f) {
									setF(false);
									return true;
								}
							}
							default: {
								return false;
							}
						}
					}}
					onOptionsActionDescription={
						f
							? Localize("#Settings_ControllerCalibration_UnLockOutNavigation")
							: Localize("#Settings_ControllerCalibration_LockOutNavigation")
					}
				>
					<m.Z flow-children="row" className={l.JoystickContainer}>
						<div
							className={A_1(
								l.VisualizationMainContainer,
								bLeftStick && l.LeftStick,
							)}
						>
							<img
								className={A_1(
									bLeftStick ? l.DeckDeviceLeftImage : l.DeckDeviceRightImage,
								)}
								src={bLeftStick ? _.A : C.A}
							/>
							<u.zL
								centerX={165}
								centerY={95}
								data={k}
								radius={90}
								showCenter
							/>
							<u.zL
								centerX={165}
								centerY={95}
								data={D}
								radius={(I / 32767) * 90}
								showCenter
							/>
							<u.iL
								LiveX={N}
								LiveY={F}
								centerX={165}
								centerY={95}
								maxRadius={90}
								indicatorRadius={5}
							/>
						</div>
					</m.Z>
					<div
						className={A_1(
							l.StartTestPrompt,
							bLeftStick && l.LeftStick,
							B && l.ShowTestPrompt,
						)}
					>
						{" "}
						{LocalizeReact(
							"#Settings_ControllerCalibration_StartTestPrompt",
							<y.W button={sr(p.pR.OPTIONS)} className={A_1(l.InlineGlyph)} />,
						)}{" "}
					</div>
					<m.Z
						className={A_1(l.SliderContainer)}
						onMoveUp={T}
						onMoveDown={T}
						onMoveLeft={T}
						onMoveRight={T}
						onFocus={() => setB(true)}
						onBlur={() => setB(false)}
					>
						<o.d3
							className={l.JoystickSlider}
							bottomSeparator="none"
							showValue
							value={I}
							onChange={(e) => {
								let n = controllerSettings;
								if (bLeftStick) {
									n.nLStickDeadzone =
										ui(
											controllerSettings.eControllerType,
											controllerSettings.unVendorID,
											controllerSettings.unProductID,
										) == e
											? -1
											: Math.round(e);
									SteamClient.Input.SetControllerPersonalizationSetting(
										"nLStickDeadzone",
										n.nLStickDeadzone,
									);
								} else {
									n.nRStickDeadzone =
										ui(
											controllerSettings.eControllerType,
											controllerSettings.unVendorID,
											controllerSettings.unProductID,
										) == e
											? -1
											: Math.round(e);
									SteamClient.Input.SetControllerPersonalizationSetting(
										"nRStickDeadzone",
										n.nRStickDeadzone,
									);
								}
								setControllerSettings(n);
							}}
							min={2000}
							max={18000}
							dpadStep={200}
							step={1}
							resetValue={M}
							label={
								bLeftStick
									? Localize("#Settings_Controller_Calibration_LStickDeadzone")
									: Localize("#Settings_Controller_Calibration_RStickDeadzone")
							}
						/>
					</m.Z>
				</m.Z>
			</o.G5>
		</m.Z>
	);
});
const O = PA((e) => {
	const { controllerSettings, setControllerSettings } = e;
	const i = AX();
	const m = a.Fd.Get().GetController(i);
	if (!m) {
		return <></>;
	}
	const u = (
		<B.UT
			controllerType={m.eControllerType}
			controllerSource={3}
			controllerModeInput={50}
			className={l.MediumGlyphIcon}
		/>
	);
	const d = (
		<B.UT
			controllerType={m.eControllerType}
			controllerSource={1}
			controllerModeInput={50}
			className={l.MediumGlyphIcon}
		/>
	);
	const A = (
		<B.UT
			controllerType={m.eControllerType}
			controllerSource={12}
			controllerModeInput={50}
			className={l.MediumGlyphIcon}
		/>
	);
	const p = (
		<B.UT
			controllerType={m.eControllerType}
			controllerSource={2}
			controllerModeInput={50}
			className={l.MediumGlyphIcon}
		/>
	);
	const g = (
		<>
			{" "}
			{LocalizeReact(
				"#Settings_Controller_Calibration_LeftStickTouchDisablesLeftTrackPad",
				u,
				d,
			)}{" "}
		</>
	);
	const h = (
		<>
			{" "}
			{LocalizeReact(
				"#Settings_Controller_Calibration_RightStickTouchDisablesRightTrackPad",
				A,
				p,
			)}{" "}
		</>
	);
	return (
		<>
			<o.RF
				label={g}
				bottomSeparator="none"
				checked={controllerSettings.bLeftStickTouchDisablesLeftTrackPad}
				onChange={(e) => {
					let n = controllerSettings;
					n.bLeftStickTouchDisablesLeftTrackPad = e;
					SteamClient.Input.SetControllerPersonalizationSetting(
						"bLeftStickTouchDisablesLeftTrackPad",
						e ? 1 : 0,
					);
					setControllerSettings(n);
				}}
			/>
			<o.RF
				label={h}
				bottomSeparator="none"
				description={Localize(
					"#Settings_ControllerCalibration_TrackpadsVsSticks_Description",
				)}
				checked={controllerSettings.bRightStickTouchDisablesRightTrackPad}
				onChange={(e) => {
					let n = controllerSettings;
					n.bRightStickTouchDisablesRightTrackPad = e;
					SteamClient.Input.SetControllerPersonalizationSetting(
						"bRightStickTouchDisablesRightTrackPad",
						e ? 1 : 0,
					);
					setControllerSettings(n);
				}}
			/>
		</>
	);
});
PA((e) => {
	const { controllerSettings, setControllerSettings } = e;
	const i = AX();
	const d = a.Fd.Get().GetController(i);
	const A = (() => {
		const [e, setE] = n.useState(a.Fd.Get().ControllerState);
		n.useEffect(() => {
			const e = () => {
				setE(a.Fd.Get().ControllerState);
				requestAnimationFrame(e);
			};
			e();
		}, []);
		return e;
	})();
	const [g, setG] = n.useState(false);
	const [C, setC] = n.useState(false);
	const [w, setW] = n.useState(false);
	const [I, setI] = n.useState(false);
	if (!d) {
		return <></>;
	}
	const M =
		controllerSettings.flLPadPressureCurve == -1
			? 1
			: controllerSettings.flLPadPressureCurve;
	const T =
		controllerSettings.flRPadPressureCurve == -1
			? 1
			: controllerSettings.flRPadPressureCurve;
	const R = 20000;
	const k = x1(controllerSettings.flLPadPressureCurve);
	const D = x1(controllerSettings.flRPadPressureCurve);
	const N = Math.min(1, A?.sPressurePadLeft / R ?? 0);
	const F = g ? -dv(N, k) : 0;
	const G = Math.min(1, A?.sPressurePadRight / R ?? 0);
	const O = g ? -dv(G, D) : 0;
	const P = "#67707b";
	const L = "#00BBFF";
	const z = "#0066FF";
	const x = 156;
	const U = 96;
	const V = 0.12287625;
	const H = 0.09537625000000001;
	const j = 11.79612;
	if (!C && -F >= V) {
		setC(true);
	} else if (C && -F <= H) {
		setC(false);
	}
	if (!w && -O >= V) {
		setW(true);
	} else if (w && -O <= H) {
		setW(false);
	}
	const q = -F ? (C ? z : L) : "#00000000";
	const Q = -O ? (w ? z : L) : "#00000000";
	const Z = () => g;
	const Y = (e, t) => (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" className={l.VizElement}>
				<rect
					x={e}
					y={98}
					width={0.1666}
					height={0.1666}
					stroke={t}
					fill={t}
					strokeWidth={3}
					rx={6}
				/>
			</svg>
		</>
	);
	const K = (e, t, r) => {
		let i = [];
		i.push(
			<>
				<svg xmlns="http://www.w3.org/2000/svg" className={l.VizElement}>
					<rect
						x={e}
						y={60}
						width={U}
						height={U}
						stroke={P}
						fill="#101010"
						strokeWidth={0}
						rx={4}
					/>
				</svg>
			</>,
		);
		i.push(
			<div
				className={A_1(
					l.PressureGraphLabel,
					e == 0.5 && l.DefaultClickLeft,
					e == 308 && l.DefaultClickRight,
				)}
			>
				{" "}
				{Localize("#Settings_Controller_Calibration_DefaultClick")}{" "}
			</div>,
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
			<u.ZX
				startX={e}
				startY={x - r}
				endX={e + U}
				endY={x - r}
				data={a}
				width={1}
			/>,
		);
		let s = "M";
		for (let r = 0; r < 40; r++) {
			let n = r / 39;
			s += (e + n * U).toString();
			s += " ";
			s += (x - dv(n, t) * U).toString();
			if (r < 39) {
				s += " L";
			}
		}
		i.push(
			<>
				{" "}
				<svg xmlns="http://www.w3.org/2000/svg" className={l.VizElement}>
					<path d={s} stroke={L} fill="#00000000" strokeWidth={3} />
				</svg>
			</>,
		);
		i.push(
			<>
				<svg xmlns="http://www.w3.org/2000/svg" className={l.VizElement}>
					<rect
						x={e - 2}
						y={58}
						width={100}
						height={100}
						stroke={P}
						fill="#00000000"
						strokeWidth={3}
						rx={4}
					/>
				</svg>
			</>,
		);
		return i;
	};
	const X = (e) => (e / 32767 + 1) / 2;
	const J = (e, t) => e != 0 || t != 0;
	const $ = (e) => `${e != null ? Number.parseFloat(e.toFixed(3)) : null}`;
	return (
		<m.Z className={A_1(l.JoystickPageContainer)}>
			<o.G5>
				<div
					className={A_1(l.StartTestPrompt, l.Trackpads, I && l.ShowTestPrompt)}
				>
					{" "}
					{g
						? LocalizeReact(
								"#Settings_ControllerCalibration_StopTestPromptTrackpad",
								<y.W
									button={sr(p.pR.OPTIONS)}
									className={A_1(l.InlineGlyph)}
								/>,
							)
						: LocalizeReact(
								"#Settings_ControllerCalibration_StartTestPromptTrackpad",
								<y.W
									button={sr(p.pR.OPTIONS)}
									className={A_1(l.InlineGlyph)}
								/>,
							)}{" "}
				</div>
				<m.Z
					flow-children="column"
					onButtonDown={(e) => {
						switch (e.detail.button) {
							case p.pR.OPTIONS: {
								setG(!g);
								return true;
							}
							case p.pR.CANCEL: {
								if (g) {
									setG(false);
									return true;
								}
							}
							default: {
								return g;
							}
						}
					}}
					onOptionsActionDescription={
						g
							? Localize("#Settings_ControllerCalibration_UnLockOutNavigation")
							: Localize("#Settings_ControllerCalibration_LockOutNavigation")
					}
				>
					<m.Z flow-children="row" className={l.JoystickContainer}>
						<div className={A_1(l.VisualizationMainContainer, l.Trackpads)}>
							<img className={A_1(l.DeckDeviceFullImage)} src={f.A} />
							{K(0.5, k, j)}
							{K(308, D, j)}
							{Y(70, q)}
							{Y(452, Q)}
							{g && (
								<u.iL
									LiveX={N}
									LiveY={F}
									centerX={0.5}
									centerY={x}
									maxRadius={U}
									indicatorRadius={5}
								/>
							)}
							{g && (
								<u.iL
									LiveX={G}
									LiveY={O}
									centerX={308}
									centerY={x}
									maxRadius={U}
									indicatorRadius={5}
								/>
							)}
							{g && J(A?.sRightPadX, A?.sRightPadY) && (
								<u.iL
									LiveX={X(A?.sRightPadX)}
									LiveY={-X(A?.sRightPadY)}
									centerX={452}
									centerY={98.1666}
									maxRadius={0.1666}
									indicatorRadius={5}
								/>
							)}
							{g && J(A?.sLeftPadX, A?.sLeftPadY) && (
								<u.iL
									LiveX={X(A?.sLeftPadX)}
									LiveY={-X(A?.sLeftPadY)}
									centerX={70}
									centerY={98.1666}
									maxRadius={0.1666}
									indicatorRadius={5}
								/>
							)}
							<div className={A_1(l.PressureGraphLabel)}>
								{" "}
								{Localize(
									"#Settings_Controller_Calibration_PressureInput",
								)}{" "}
							</div>
							<div className={A_1(l.PressureGraphLabel, l.Vertical)}>
								{" "}
								{Localize(
									"#Settings_Controller_Calibration_PressureOutput",
								)}{" "}
							</div>
						</div>
					</m.Z>
					<m.Z onFocus={() => setI(true)} onBlur={() => setI(false)}>
						<m.Z
							className={A_1(l.SliderContainer)}
							onMoveUp={Z}
							onMoveDown={Z}
							onMoveLeft={Z}
							onMoveRight={Z}
						>
							<o.d3
								className={l.JoystickSlider}
								bottomSeparator="none"
								showValue
								renderValue={$}
								disabled={g}
								value={M}
								onChange={(e) => {
									let n = controllerSettings;
									n.flLPadPressureCurve = e;
									SteamClient.Input.SetControllerPersonalizationSetting(
										"flLPadPressureCurve",
										Math.round(n.flLPadPressureCurve * 100),
									);
									setControllerSettings(n);
								}}
								min={0.05}
								max={1.95}
								dpadStep={0.0475}
								step={0.025}
								resetValue={1}
								label={Localize(
									"#Settings_Controller_Calibration_LPadPressure",
								)}
							/>
						</m.Z>
						<m.Z onMoveUp={Z} onMoveDown={Z} onMoveLeft={Z} onMoveRight={Z}>
							<o.d3
								className={l.JoystickSlider}
								bottomSeparator="none"
								showValue
								renderValue={$}
								disabled={g}
								value={T}
								onChange={(e) => {
									let n = controllerSettings;
									n.flRPadPressureCurve = e;
									SteamClient.Input.SetControllerPersonalizationSetting(
										"flRPadPressureCurve",
										Math.round(n.flRPadPressureCurve * 100),
									);
									setControllerSettings(n);
								}}
								min={0.05}
								max={1.95}
								dpadStep={0.0475}
								step={0.025}
								resetValue={1}
								label={Localize(
									"#Settings_Controller_Calibration_RPadPressure",
								)}
							/>
						</m.Z>
					</m.Z>
				</m.Z>
			</o.G5>
		</m.Z>
	);
});
const P = PA((e) => {
	const { controllerSettings, setControllerSettings } = e;
	const [i, setI] = n.useState(true);
	const l = AX();
	const c = a.Fd.Get().GetController(l);
	const m = !!(c.unCapabilities & 4) && !!(c.unCapabilities & 8);
	let u = n.useMemo(
		() => [
			{
				id: "left",
				title: "#Settings_ControllerCalibration_LeftJoystick",
				content: (
					<G
						controllerSettings={controllerSettings}
						setControllerSettings={setControllerSettings}
						bLeftStick
					/>
				),
			},
			{
				id: "right",
				title: "#Settings_ControllerCalibration_RightJoystick",
				content: (
					<G
						controllerSettings={controllerSettings}
						setControllerSettings={setControllerSettings}
						bLeftStick={false}
					/>
				),
			},
		],
		[controllerSettings, setControllerSettings],
	);
	if (!m) {
		return null;
	}
	return (
		<h.xC
			tabs={u}
			activeTab={i ? "left" : "right"}
			onShowTab={(e) => setI(e == "left")}
			autoFocusContents={false}
			cancelSkipTabHeader
		/>
	);
});
const L = PA((e) => {
	const { controllerSettings, setControllerSettings } = e;
	const i = AX();
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
			label: Localize(`#SettingController_HapticSound_${e}`),
			data: e,
		});
	}
	const A = (
		<>
			{u && (
				<o.m
					label={Localize("#Settings_ControllerCalibration_TurnOnSound")}
					rgOptions={d}
					selectedOption={l.nTurnOnSound}
					onChange={(e) =>
						((e) => {
							let n = controllerSettings;
							n.nTurnOnSound = e;
							SteamClient.Input.SetControllerPersonalizationSetting(
								"nTurnOnSound",
								e,
							);
							setControllerSettings(n);
						})(e.data)
					}
					bDisableMouseOverlay
					contextMenuPositionOptions={{
						bDisableMouseOverlay: true,
					}}
				/>
			)}
			{u && (
				<o.m
					label={Localize("#Settings_ControllerCalibration_TurnOffSound")}
					rgOptions={d}
					selectedOption={l.nTurnOffSound}
					onChange={(e) =>
						((e) => {
							let n = controllerSettings;
							n.nTurnOffSound = e;
							SteamClient.Input.SetControllerPersonalizationSetting(
								"nTurnOffSound",
								e,
							);
							setControllerSettings(n);
						})(e.data)
					}
					bDisableMouseOverlay
					contextMenuPositionOptions={{
						bDisableMouseOverlay: true,
					}}
				/>
			)}
		</>
	);
	return (
		<>
			<o.G5>
				<m.Z flow-children="column">{A}</m.Z>
			</o.G5>
		</>
	);
});
const Z = PA((e) => {
	const t = AX();
	if (a.Fd.Get().GetController(t)) {
		return (
			<>
				<o.G5>
					<m.Z flow-children="column">
						<o.xh
							label={Localize(
								"#Settings_ControllerCalibration_CalibrateTrackpad",
							)}
							onClick={() => {
								SteamClient.Input.CalibrateControllerTrackpads(t);
							}}
						>
							{Localize("#Settings_ControllerCalibration_Start")}
						</o.xh>
						<o.xh
							label={Localize(
								"#Settings_ControllerCalibration_CalibrateJoystick",
							)}
							onClick={() => {
								SteamClient.Input.CalibrateControllerJoystick(t);
							}}
						>
							{Localize("#Settings_ControllerCalibration_Start")}
						</o.xh>
					</m.Z>
				</o.G5>
			</>
		);
	} else {
		return <></>;
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
const U = PA((e) => {
	const { controllerSettings, setControllerSettings } = e;
	QY(controllerSettings.nControllerIndex);
	ox(controllerSettings.nControllerIndex);
	const i = (controllerSettings.unCapabilities & 262144) != 0;
	if (!controllerSettings) {
		return null;
	}
	const a = controllerSettings.eControllerType == 2;
	const s = controllerSettings.eControllerType == 4;
	const l = (i || a || a || s) && controllerSettings;
	let u = l && (
		<>
			<o.iK>
				{"  "}
				{Localize(
					"#Settings_ControllerCalibration_GyroRotation_Subheading",
				)}{" "}
			</o.iK>
			<m.Z>
				<I.PE controllerIndex={controllerSettings.nControllerIndex} />
				<o.D0
					childrenContainerWidth="fixed"
					description={Localize(
						"#Settings_ControllerCalibration_GyroRotation_Desc",
					)}
				/>
			</m.Z>
		</>
	);
	let d = i && (
		<>
			<o.y4
				onChange={() => {
					let e = controllerSettings;
					e.bSWAntiDrift = !controllerSettings.bSWAntiDrift;
					setControllerSettings(e);
				}}
				checked={controllerSettings.bSWAntiDrift}
				label={Localize("#Settings_ControllerCalibration_SWGyroCal")}
			/>
		</>
	);
	let A = l && i && controllerSettings.bSWAntiDrift && (
		<>
			<I.V4
				strLabel="#Settings_ControllerCalibration_Auto_Calibration_Progress"
				nControllerIndex={controllerSettings.nControllerIndex}
			/>
			<I.PO bShowToleranceSliders {...e} />
		</>
	);
	return (
		<>
			<o.G5>
				<m.Z flow-children="column">
					<o.Y9>
						{"  "}
						{Localize("#Settings_ControllerCalibration_Gyro")}{" "}
					</o.Y9>
					{u}
					<R.m5 {...e} />
					{d}
					{A}
				</m.Z>
			</o.G5>
		</>
	);
});
const W = PA((e) => {
	const { controllerSettings } = e;
	const r = AX();
	const i = Rh(r);
	const l = hy(r);
	if (!controllerSettings) {
		return null;
	}
	if ((controllerSettings.unCapabilities & 2048) == 0) {
		return <>Controller has no gyroscope available</>;
	}
	const c = {
		newGyroState: i,
		newAccelerometerState: l,
		eControllerType: controllerSettings.eControllerType,
	};
	return (
		<>
			<o.G5>
				<D {...c} />
			</o.G5>
		</>
	);
});
const V = PA((e) => {
	const { controllerSettings, setControllerSettings } = e;
	const i = AX();
	const l = a.Fd.Get().GetController(i);
	const m = l.eControllerType == 2 || l.eControllerType == 3;
	const u = !!(l.unCapabilities & 131072);
	const d = !!(l.unCapabilities & 536870912);
	const A = l.eControllerType == 38;
	const p = n.useMemo(
		() => ({
			flBrightness: controllerSettings.flLEDBrightness,
			flSaturation: controllerSettings.flLEDSaturation,

			flHue: WN({
				r: controllerSettings.nLEDColorR,
				g: controllerSettings.nLEDColorG,
				b: controllerSettings.nLEDColorB,
				a: 1,
			}).h,
		}),
		[controllerSettings],
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
		return (
			<>
				{(u || m || m || d) && (
					<M.D
						ledSetting={p}
						bUseOnlyBrightness={m || A}
						bBrightnessOnlyBlue={A}
						nControllerIndex={i}
						onLEDColorSettingsChanged={(e) => {
							const n = ko({
								h: e.flHue,
								s: 1,
								v: 1,
								a: 1,
							});
							setControllerSettings({
								...controllerSettings,
								flLEDBrightness: e.flBrightness,
								flLEDSaturation: e.flSaturation,
								nLEDColorR: n.r,
								nLEDColorG: n.g,
								nLEDColorB: n.b,
							});
						}}
					/>
				)}
				{d && (
					<o.m
						label={Localize("#Settings_ControllerCalibration_PlayerLED")}
						rgOptions={g}
						selectedOption={l.ePlayerSlotLEDSetting}
						onChange={(e) =>
							((e) => {
								let n = controllerSettings;
								n.ePlayerSlotLEDSetting = e;
								SteamClient.Input.SetControllerPersonalizationSetting(
									"ePlayerSlotLEDSetting",
									e,
								);
								setControllerSettings(n);
							})(e.data)
						}
						bDisableMouseOverlay
						contextMenuPositionOptions={{
							bDisableMouseOverlay: true,
						}}
					/>
				)}
			</>
		);
	} else {
		return <></>;
	}
});
const H = PA((e) => {
	const { controllerSettings, setControllerSettings } = e;
	const i = AX();
	const u = a.Fd.Get().GetController(i);
	const d = (e, t) => {
		SteamClient.Input.ForceSimpleHapticEvent(i, e ? 0 : 1, 2, 0, t - 5);
	};
	if (!u) {
		return <></>;
	}
	const A = controllerSettings.nLHapticStrength + 2;
	const g = controllerSettings.nRHapticStrength + 2;
	const h = u.eControllerType == 4;
	const C = !!(u.unCapabilities & 8192) || h;
	const _ = !!(u.unCapabilities & 16384) || !!(u.unCapabilities & 2097152);
	const f =
		A > 7
			? {
					"--left-track-color": `linear-gradient( to right, #1a9fff 0, #1a9fff calc( (100%) * ${(
						7 / A
					).toString()} ), #E35E1C calc( (100%) * ${(
						7 / A
					).toString()} ), #E35E1C 100% )`,
				}
			: {};
	const y =
		g > 7
			? {
					"--left-track-color": `linear-gradient( to right, #1a9fff 0, #1a9fff calc( (100%) * ${(
						7 / g
					).toString()} ), #E35E1C calc( (100%) * ${(
						7 / g
					).toString()} ), #E35E1C 100% )`,
				}
			: {};
	const S = A > 7 || g > 7;
	return (
		<>
			<o.G5>
				<m.Z flow-children="column">
					{_ && (
						<o.y4
							onChange={() => {
								let e = controllerSettings;
								e.eRumblePreference =
									controllerSettings.eRumblePreference == 1 ? 0 : 1;
								setControllerSettings(e);
							}}
							checked={controllerSettings.eRumblePreference == 1}
							label={Localize("#Settings_ControllerCalibration_RumbleEnable")}
						/>
					)}
					{C && (
						<o.y4
							onChange={() => {
								let e = controllerSettings;
								e.bHaptics = !controllerSettings.bHaptics;
								setControllerSettings(e);
							}}
							checked={controllerSettings.bHaptics}
							label={Localize("#Settings_ControllerCalibration_HapticsEnable")}
						/>
					)}
					{h && (
						<m.Z
							onOptionsButton={() => {
								d(true, controllerSettings.nLHapticStrength);
								return true;
							}}
							actionDescriptionMap={{
								[p.pR.OPTIONS]: Localize(
									"#Settings_Controller_Calibration_HapticTest",
								),
							}}
						>
							<o.d3
								bottomSeparator="none"
								showValue
								value={A}
								onChange={(e) => {
									let n = controllerSettings;
									n.nLHapticStrength = Math.round(e) - 2;
									setControllerSettings(n);
									d(true, e);
								}}
								min={0}
								max={12}
								step={1}
								label={Localize(
									"#Settings_Controller_Calibration_LHapticStrength",
								)}
								trackStyleOverride={f}
								valueSuffix="dB"
							/>
						</m.Z>
					)}
					{h && (
						<m.Z
							onOptionsButton={() => {
								d(false, g);
								return true;
							}}
							actionDescriptionMap={{
								[p.pR.OPTIONS]: Localize(
									"#Settings_Controller_Calibration_HapticTest",
								),
							}}
						>
							<o.d3
								bottomSeparator="none"
								showValue
								value={g}
								onChange={(e) => {
									let n = controllerSettings;
									n.nRHapticStrength = Math.round(e) - 2;
									setControllerSettings(n);
									d(false, e);
								}}
								min={0}
								max={12}
								step={1}
								label={Localize(
									"#Settings_Controller_Calibration_RHapticStrength",
								)}
								trackStyleOverride={y}
								valueSuffix="dB"
							/>
						</m.Z>
					)}
					{h && (
						<m.Z className={A_1(l.HapticsDesc, S && l.HapticsWarning)}>
							{Localize("#Settings_Controller_Calibration_HapticsWarning")}
						</m.Z>
					)}
				</m.Z>
			</o.G5>
		</>
	);
});
const J = PA((e) => {
	const { controllerSettings, setControllerSettings } = e;
	if (controllerSettings) {
		return (
			<>
				<o.G5>
					<m.Z flow-children="column">
						<V {...e} />
					</m.Z>
				</o.G5>
			</>
		);
	} else {
		return <></>;
	}
});
