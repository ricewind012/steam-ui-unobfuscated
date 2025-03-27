import { Localize } from "../../actual_src/utils/localization.js";
import i from "./63696.js";
import a from "./64608.js";
import s from "./35488.js";
import o, { A as A_1 } from "./90765.js";
import c from "./31958.js";
import m from "./92821.js";
import d from "./30449.js";
import A, { Aq, Rh, nF } from "./22091.js";
let n;
const u = m;
function P(e) {
	const { eRotationAxis, nAbsoluteRotationInDegrees } = e;
	let a;
	let l;
	switch (eRotationAxis) {
		case n.Pitch: {
			a = <s.PitchAxisOverlay />;
			l = {
				transform: `rotate3d( 1, 0, 0, ${nAbsoluteRotationInDegrees}deg)`,
			};
			break;
		}
		case n.Yaw: {
			a = <s.YawAxisOverlay />;
			l = {
				transform: `rotate3d( 0, 0, 1, ${nAbsoluteRotationInDegrees}deg)`,
			};
			break;
		}
		case n.Roll: {
			a = <s.RollAxisOverlay />;
			l = {
				transform: `rotate3d( 0, 1, 0, ${nAbsoluteRotationInDegrees}deg)`,
			};
		}
	}
	return (
		<>
			<div className={u.GyroRotationAxisIcon}>
				<div
					className={A_1(u.RotateChilden)}
					style={{
						...l,
					}}
				>
					<s.ControllerType
						className={A_1(u.Rotatable)}
						controllerType={e.eControllerType}
					/>
				</div>
				<div className={A_1(u.AxisIcon)}>{a}</div>
			</div>
		</>
	);
}
function G(e) {
	const {
		nSuffixValue,
		nProgressBarValue,
		eControllerType,
		eRotationAxis,
		nAbsoluteRotationInDegrees,
	} = e;
	const c = {
		left: `${nProgressBarValue}%`,
	};
	return (
		<>
			<div className={u.GyroBarField}>
				<P
					eRotationAxis={eRotationAxis}
					nAbsoluteRotationInDegrees={nAbsoluteRotationInDegrees}
					eControllerType={eControllerType}
				/>
				<div className={A_1(u.ProgressBar, u.StandardMargin)}>
					<div className={A_1(u.ZeroLine)} />
					<div
						className={A_1(u.Percent)}
						style={{
							...c,
						}}
					/>
				</div>
				<div className={u.LabelText}>
					{nSuffixValue.toFixed(1) + Localize("#Unit_DegreePerSecond_Symbol")}
				</div>
			</div>
		</>
	);
}
((e) => {
	e[(e.Pitch = 0)] = "Pitch";
	e[(e.Yaw = 1)] = "Yaw";
	e[(e.Roll = 2)] = "Roll";
})((n ||= {}));
class h {
	x;
	y;
	z;
	w;
	constructor(e = 0, t = 0, r = 0, n = 1) {
		this.x = e;
		this.y = t;
		this.z = r;
		this.w = n;
	}
	multiply(e) {
		const { x, y, z, w } = this;
		this.x = w * e.x + x * e.w + y * e.z - z * e.y;
		this.y = w * e.y - x * e.z + y * e.w + z * e.x;
		this.z = w * e.z + x * e.y - y * e.x + z * e.w;
		this.w = w * e.w - x * e.x - y * e.y - z * e.z;
		return this;
	}
	getInverse() {
		return new h(-this.x, -this.y, -this.z, this.w);
	}
	toEuler() {
		const { x, y, z, w } = this;
		const i = Math.atan2((w * z + x * y) * 2, 1 - (y * y + z * z) * 2);
		return {
			pitch: Math.asin((w * x - y * z) * 2),
			yaw: i,
			roll: Math.atan2((w * y + z * x) * 2, 1 - (x * x + y * y) * 2),
		};
	}
	static difference(e, t) {
		return e.getInverse().multiply(t);
	}
	rotateVector(e) {
		const { x: x_1, y: y_1, z: z_1, w } = this;

		const { x, y, z } = e;

		const l = (y_1 * z - z_1 * y) * 2;
		const c = (z_1 * x - x_1 * z) * 2;
		const m = (x_1 * y - y_1 * x) * 2;
		return {
			x: x + w * l + (y_1 * m - z_1 * c),
			y: y + w * c + (z_1 * l - x_1 * m),
			z: z + w * m + (x_1 * c - y_1 * l),
		};
	}
}
export function PE(e) {
	const { controllerIndex } = e;
	const r = A.Fd.Get().GetController(controllerIndex);
	const a = r ? r.eControllerType : 0;
	const s = Aq(controllerIndex);
	const o = Rh(controllerIndex);
	const l = o?.GyroRawQuaternion;
	const m = i.useMemo(
		() => new h(l?.x, l?.y, l?.z, l?.w),
		[l?.x, l?.y, l?.z, l?.w],
	);
	const [u, setU] = i.useState(m);
	const [p, setP] = i.useState(m);
	const [_, set] = i.useState(0);
	const [b, setB] = i.useState(0);
	const [S, setS] = i.useState(0);
	const [B, setB_1] = i.useState(true);
	i.useEffect(() => {
		if (!B && p) {
			const e = h.difference(p, m);
			const t = e.rotateVector({
				x: 0,
				y: 1,
				z: 0,
			});
			const r = e.rotateVector({
				x: 0,
				y: 0,
				z: 1,
			});
			const n = e.rotateVector({
				x: 1,
				y: 0,
				z: 0,
			});
			const i = Math.atan2(t.x, t.y);
			const a = Math.atan2(r.y, r.z);
			const s = Math.atan2(n.z, n.x);
			set((e) => e + a);
			setB((e) => e + i);
			setS((e) => e + s);
			setP(m);
		}
	}, [m, B, p]);
	let I;
	I = B ? h.difference(u, m) : h.difference(p, m);
	const E = I.rotateVector({
		x: 0,
		y: 1,
		z: 0,
	});
	const M = I.rotateVector({
		x: 0,
		y: 0,
		z: 1,
	});
	const T = I.rotateVector({
		x: 1,
		y: 0,
		z: 0,
	});
	const R = Math.atan2(E.x, E.y);
	const k = Math.atan2(M.y, M.z);
	const D = Math.atan2(T.z, T.x);
	const N = B ? k : _;
	const F = B ? R : b;
	const G = B ? D : S;
	if (!m || !u || !u || !p) {
		return null;
	}
	if (s == null) {
		return <></>;
	}
	if (o == null) {
		return <></>;
	}
	const O = s?.GyroRawSpeed.pitch;
	const P = s?.GyroRawSpeed.yaw;
	const L = s?.GyroRawSpeed.roll;
	const z = O / 180;
	const x = P / 180;
	const U = L / 180;
	const W = c.bT(Math.tanh(z * Math.PI), -1, 1, 0, 100);
	const V = c.bT(Math.tanh(x * Math.PI), -1, 1, 0, 100);
	const H = c.bT(Math.tanh(U * Math.PI), -1, 1, 0, 100);
	const j = a == 4 || a == 43;
	const q = 180 / Math.PI;
	return (
		<>
			<G
				eControllerType={a}
				nProgressBarValue={W}
				nSuffixValue={O}
				eRotationAxis={n.Pitch}
				nRotationDegreesPerSecond={O}
				nAbsoluteRotationInDegrees={N * q}
			/>
			<G
				eControllerType={a}
				nProgressBarValue={j ? 100 - H : V}
				nSuffixValue={j ? -L : P}
				eRotationAxis={j ? n.Roll : n.Yaw}
				nRotationDegreesPerSecond={j ? -L : P}
				nAbsoluteRotationInDegrees={j ? G * q : F * q}
			/>
			<G
				eControllerType={a}
				nProgressBarValue={j ? V : H}
				nSuffixValue={j ? P : L}
				eRotationAxis={j ? n.Yaw : n.Roll}
				nRotationDegreesPerSecond={j ? P : L}
				nAbsoluteRotationInDegrees={j ? F * q : G * q}
			/>
		</>
	);
}
function _(e) {
	const { nNoiseValue, nMaxNoiseBarValue, nNoiseThreshold } = e;
	const a = (nNoiseValue / nMaxNoiseBarValue) * 100;
	const s = (nNoiseThreshold / nMaxNoiseBarValue) * 100;
	const l = Array.from(
		{
			length: 64,
		},
		(e, t) => t,
	);
	return (
		<div className={A_1(u.NoiseMeter)}>
			{l.map((e) => {
				const t = (e * 100) / 64;
				let r;
				if (a > t) {
					const e = 10;
					const n = 0;
					const i = 120;
					r = `hsl( ${c.bT(t, s - e * 0.5, s + e * 0.5, i, n)}, 93%, 54% )`;
				}
				return (
					<div
						key={e}
						className={A_1(u.NoisePip)}
						style={
							r && {
								background: r,
							}
						}
					/>
				);
			})}
		</div>
	);
}
function F(e) {
	const { nNoiseValue, icon, nMaxNoiseBarValue, nNoiseThreshold } = e;
	return (
		<>
			<div className={A_1(u.NoiseMeterBase)}>
				<div className={A_1(u.Icon)}>{icon}</div>
				<div className={A_1(u.Row)}>
					<_
						nNoiseValue={nNoiseValue}
						nMaxNoiseBarValue={nMaxNoiseBarValue}
						nNoiseThreshold={nNoiseThreshold}
					/>
				</div>
			</div>
		</>
	);
}
function B(e) {
	const {
		icon,
		nSliderStep,
		nNoiseValue,
		nMaxNoiseBarValue,
		onBarChange,
		nNoiseThreshold,
	} = e;
	const [m, setM] = i.useState(nNoiseThreshold);
	i.useEffect(() => {
		setM(nNoiseThreshold);
	}, [nNoiseThreshold]);
	const A = i.useCallback(
		(e) => {
			onBarChange(e);
			setM(e);
		},
		[onBarChange],
	);
	const p = i.useCallback(() => {
		onBarChange(m);
	}, [m, onBarChange]);
	return (
		<>
			<div className={A_1(u.NoiseMeterBase)}>
				<div className={A_1(u.Icon)}> {icon} </div>
				<div className={A_1(u.Row)}>
					<_
						nNoiseValue={nNoiseValue}
						nMaxNoiseBarValue={nMaxNoiseBarValue}
						nNoiseThreshold={nNoiseThreshold}
					/>
					<a.d3
						min={0}
						max={nMaxNoiseBarValue}
						step={nSliderStep}
						value={m}
						onChange={A}
						onChangeComplete={p}
					/>
				</div>
			</div>
		</>
	);
}
export function PO(e) {
	const { controllerSettings, setControllerSettings } = e;
	const { nControllerIndex } = controllerSettings;
	const a = nF(nControllerIndex);
	const l = i.useCallback(
		(e) => {
			let n = controllerSettings;
			n.flGyroStationaryTolerance = e;
			setControllerSettings(n);
			A.Fd.Get().CommitControllerSettings(n);
		},
		[setControllerSettings, controllerSettings],
	);
	const c = i.useCallback(
		(e) => {
			let n = controllerSettings;
			n.flAccelerometerStationaryTolerance = e;
			setControllerSettings(n);
			A.Fd.Get().CommitControllerSettings(n);
		},
		[setControllerSettings, controllerSettings],
	);
	return (
		<div className={A_1(u.GyroNoiseMonitor)}>
			<B
				icon={<s.Gyro />}
				nSliderStep={0.03}
				nMaxNoiseBarValue={10}
				nNoiseValue={a?.GyroscopeNoise}
				nNoiseThreshold={controllerSettings.flGyroStationaryTolerance}
				onBarChange={l}
				bAllowGyroThresholdEditing={e.bShowToleranceSliders}
			/>
			<B
				icon={<s.Accelerometer />}
				nSliderStep={0.5}
				nMaxNoiseBarValue={50}
				nNoiseValue={a?.AccelerometerNoise}
				nNoiseThreshold={controllerSettings.flAccelerometerStationaryTolerance}
				onBarChange={c}
				bAllowGyroThresholdEditing={e.bShowToleranceSliders}
			/>
		</div>
	);
}
export function qH(e) {
	const { controllerSettings } = e;
	const { nControllerIndex } = controllerSettings;
	const n = nF(nControllerIndex);
	return (
		<div className={A_1(u.GyroNoiseMonitor)}>
			<F
				icon={<s.Gyro />}
				nNoiseValue={n?.GyroscopeNoise}
				nNoiseThreshold={controllerSettings.flGyroStationaryTolerance}
				nMaxNoiseBarValue={10}
			/>
			<F
				icon={<s.Accelerometer />}
				nNoiseValue={n?.AccelerometerNoise}
				nNoiseThreshold={controllerSettings.flAccelerometerStationaryTolerance}
				nMaxNoiseBarValue={50}
			/>
		</div>
	);
}
export function V4(e) {
	const { strLabel, bShowDescription, nControllerIndex } = e;
	const a = nF(nControllerIndex)?.CalibrationProgress;
	const s =
		a > 0.97
			? "hsl( 120, 93%, 54% )"
			: a < 0.02
				? "hsl( 0, 93%, 54% )"
				: undefined;
	return (
		<>
			<d.hA
				focusable={false}
				color={s}
				childrenLayout="inline"
				childrenContainerWidth="max"
				bottomSeparator="none"
				label={Localize(strLabel)}
				description={
					bShowDescription
						? Localize(
								"#Settings_ControllerCalibration_GyroAndAccelerometerNoise_Desc",
							)
						: undefined
				}
				nProgress={a * 100}
				nTransitionSec={0.01}
			/>
		</>
	);
}
