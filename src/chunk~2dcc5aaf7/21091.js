var n;
var i = require(/*webcrack:missing*/ "./63696.js");
var a = require("./64608.js");
var s = require("./35488.js");
var o = require(/*webcrack:missing*/ "./90765.js");
var l = require(/*webcrack:missing*/ "./46108.js");
var c = require(/*webcrack:missing*/ "./31958.js");
var m = require("./92821.js");
var u = m;
var d = require("./30449.js");
var A = require("./22091.js");
function p(e) {
	const { eRotationAxis: t, nAbsoluteRotationInDegrees: r } = e;
	let a;
	let l;
	switch (t) {
		case n.Pitch:
			a = i.createElement(s.PitchAxisOverlay, null);
			l = {
				transform: `rotate3d( 1, 0, 0, ${r}deg)`,
			};
			break;
		case n.Yaw:
			a = i.createElement(s.YawAxisOverlay, null);
			l = {
				transform: `rotate3d( 0, 0, 1, ${r}deg)`,
			};
			break;
		case n.Roll:
			a = i.createElement(s.RollAxisOverlay, null);
			l = {
				transform: `rotate3d( 0, 1, 0, ${r}deg)`,
			};
	}
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			"div",
			{
				className: u.GyroRotationAxisIcon,
			},
			i.createElement(
				"div",
				{
					className: (0, o.A)(u.RotateChilden),
					style: {
						...l,
					},
				},
				i.createElement(s.ControllerType, {
					className: (0, o.A)(u.Rotatable),
					controllerType: e.eControllerType,
				}),
			),
			i.createElement(
				"div",
				{
					className: (0, o.A)(u.AxisIcon),
				},
				a,
			),
		),
	);
}
function g(e) {
	const {
		nSuffixValue: t,
		nProgressBarValue: r,
		eControllerType: n,
		eRotationAxis: a,
		nAbsoluteRotationInDegrees: s,
	} = e;
	const c = {
		left: `${r}%`,
	};
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			"div",
			{
				className: u.GyroBarField,
			},
			i.createElement(p, {
				eRotationAxis: a,
				nAbsoluteRotationInDegrees: s,
				eControllerType: n,
			}),
			i.createElement(
				"div",
				{
					className: (0, o.A)(u.ProgressBar, u.StandardMargin),
				},
				i.createElement("div", {
					className: (0, o.A)(u.ZeroLine),
				}),
				i.createElement("div", {
					className: (0, o.A)(u.Percent),
					style: {
						...c,
					},
				}),
			),
			i.createElement(
				"div",
				{
					className: u.LabelText,
				},
				t.toFixed(1) + (0, l.we)("#Unit_DegreePerSecond_Symbol"),
			),
		),
	);
}
(function (e) {
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
		const { x: t, y: r, z: n, w: i } = this;
		this.x = i * e.x + t * e.w + r * e.z - n * e.y;
		this.y = i * e.y - t * e.z + r * e.w + n * e.x;
		this.z = i * e.z + t * e.y - r * e.x + n * e.w;
		this.w = i * e.w - t * e.x - r * e.y - n * e.z;
		return this;
	}
	getInverse() {
		return new h(-this.x, -this.y, -this.z, this.w);
	}
	toEuler() {
		const { x: e, y: t, z: r, w: n } = this;
		const i = Math.atan2((n * r + e * t) * 2, 1 - (t * t + r * r) * 2);
		return {
			pitch: Math.asin((n * e - t * r) * 2),
			yaw: i,
			roll: Math.atan2((n * t + r * e) * 2, 1 - (e * e + t * t) * 2),
		};
	}
	static difference(e, t) {
		return e.getInverse().multiply(t);
	}
	rotateVector(e) {
		const { x: t, y: r, z: n, w: i } = this;
		const a = e.x;
		const s = e.y;
		const o = e.z;
		const l = (r * o - n * s) * 2;
		const c = (n * a - t * o) * 2;
		const m = (t * s - r * a) * 2;
		return {
			x: a + i * l + (r * m - n * c),
			y: s + i * c + (n * l - t * m),
			z: o + i * m + (t * c - r * l),
		};
	}
}
export function PE(e) {
	const { controllerIndex: t } = e;
	const r = A.Fd.Get().GetController(t);
	const a = r ? r.eControllerType : 0;
	const s = (0, A.Aq)(t);
	const o = (0, A.Rh)(t);
	const l = o?.GyroRawQuaternion;
	const m = i.useMemo(
		() => new h(l?.x, l?.y, l?.z, l?.w),
		[l?.x, l?.y, l?.z, l?.w],
	);
	const [u, d] = i.useState(m);
	const [p, C] = i.useState(m);
	const [_, f] = i.useState(0);
	const [b, y] = i.useState(0);
	const [S, w] = i.useState(0);
	const [B, v] = i.useState(true);
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
			f((e) => e + a);
			y((e) => e + i);
			w((e) => e + s);
			C(m);
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
	if (!m || !u || !p) {
		return null;
	}
	if (s == null) {
		return i.createElement(i.Fragment, null);
	}
	if (o == null) {
		return i.createElement(i.Fragment, null);
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
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(g, {
			eControllerType: a,
			nProgressBarValue: W,
			nSuffixValue: O,
			eRotationAxis: n.Pitch,
			nRotationDegreesPerSecond: O,
			nAbsoluteRotationInDegrees: N * q,
		}),
		i.createElement(g, {
			eControllerType: a,
			nProgressBarValue: j ? 100 - H : V,
			nSuffixValue: j ? -L : P,
			eRotationAxis: j ? n.Roll : n.Yaw,
			nRotationDegreesPerSecond: j ? -L : P,
			nAbsoluteRotationInDegrees: j ? G * q : F * q,
		}),
		i.createElement(g, {
			eControllerType: a,
			nProgressBarValue: j ? V : H,
			nSuffixValue: j ? P : L,
			eRotationAxis: j ? n.Yaw : n.Roll,
			nRotationDegreesPerSecond: j ? P : L,
			nAbsoluteRotationInDegrees: j ? F * q : G * q,
		}),
	);
}
function _(e) {
	const { nNoiseValue: t, nMaxNoiseBarValue: r, nNoiseThreshold: n } = e;
	const a = (t / r) * 100;
	const s = (n / r) * 100;
	const l = Array.from(
		{
			length: 64,
		},
		(e, t) => t,
	);
	return i.createElement(
		"div",
		{
			className: (0, o.A)(u.NoiseMeter),
		},
		l.map((e) => {
			const t = (e * 100) / 64;
			let r;
			if (a > t) {
				const e = 10;
				const n = 0;
				const i = 120;
				r = `hsl( ${c.bT(t, s - e * 0.5, s + e * 0.5, i, n)}, 93%, 54% )`;
			}
			return i.createElement("div", {
				key: e,
				className: (0, o.A)(u.NoisePip),
				style: r && {
					background: r,
				},
			});
		}),
	);
}
function f(e) {
	const {
		nNoiseValue: t,
		icon: r,
		nMaxNoiseBarValue: n,
		nNoiseThreshold: a,
	} = e;
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			"div",
			{
				className: (0, o.A)(u.NoiseMeterBase),
			},
			i.createElement(
				"div",
				{
					className: (0, o.A)(u.Icon),
				},
				r,
			),
			i.createElement(
				"div",
				{
					className: (0, o.A)(u.Row),
				},
				i.createElement(_, {
					nNoiseValue: t,
					nMaxNoiseBarValue: n,
					nNoiseThreshold: a,
				}),
			),
		),
	);
}
function b(e) {
	const {
		icon: t,
		nSliderStep: r,
		nNoiseValue: n,
		nMaxNoiseBarValue: s,
		onBarChange: l,
		nNoiseThreshold: c,
	} = e;
	const [m, d] = i.useState(c);
	i.useEffect(() => {
		d(c);
	}, [c]);
	const A = i.useCallback(
		(e) => {
			l(e);
			d(e);
		},
		[l],
	);
	const p = i.useCallback(() => {
		l(m);
	}, [m, l]);
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(
			"div",
			{
				className: (0, o.A)(u.NoiseMeterBase),
			},
			i.createElement(
				"div",
				{
					className: (0, o.A)(u.Icon),
				},
				" ",
				t,
				" ",
			),
			i.createElement(
				"div",
				{
					className: (0, o.A)(u.Row),
				},
				i.createElement(_, {
					nNoiseValue: n,
					nMaxNoiseBarValue: s,
					nNoiseThreshold: c,
				}),
				i.createElement(a.d3, {
					min: 0,
					max: s,
					step: r,
					value: m,
					onChange: A,
					onChangeComplete: p,
				}),
			),
		),
	);
}
export function PO(e) {
	const { controllerSettings: t, setControllerSettings: r } = e;
	const { nControllerIndex: n } = t;
	const a = (0, A.nF)(n);
	const l = i.useCallback(
		(e) => {
			let n = t;
			n.flGyroStationaryTolerance = e;
			r(n);
			A.Fd.Get().CommitControllerSettings(n);
		},
		[r, t],
	);
	const c = i.useCallback(
		(e) => {
			let n = t;
			n.flAccelerometerStationaryTolerance = e;
			r(n);
			A.Fd.Get().CommitControllerSettings(n);
		},
		[r, t],
	);
	return i.createElement(
		"div",
		{
			className: (0, o.A)(u.GyroNoiseMonitor),
		},
		i.createElement(b, {
			icon: i.createElement(s.Gyro, null),
			nSliderStep: 0.03,
			nMaxNoiseBarValue: 10,
			nNoiseValue: a?.GyroscopeNoise,
			nNoiseThreshold: t.flGyroStationaryTolerance,
			onBarChange: l,
			bAllowGyroThresholdEditing: e.bShowToleranceSliders,
		}),
		i.createElement(b, {
			icon: i.createElement(s.Accelerometer, null),
			nSliderStep: 0.5,
			nMaxNoiseBarValue: 50,
			nNoiseValue: a?.AccelerometerNoise,
			nNoiseThreshold: t.flAccelerometerStationaryTolerance,
			onBarChange: c,
			bAllowGyroThresholdEditing: e.bShowToleranceSliders,
		}),
	);
}
export function qH(e) {
	const { controllerSettings: t } = e;
	const { nControllerIndex: r } = t;
	const n = (0, A.nF)(r);
	return i.createElement(
		"div",
		{
			className: (0, o.A)(u.GyroNoiseMonitor),
		},
		i.createElement(f, {
			icon: i.createElement(s.Gyro, null),
			nNoiseValue: n?.GyroscopeNoise,
			nNoiseThreshold: t.flGyroStationaryTolerance,
			nMaxNoiseBarValue: 10,
		}),
		i.createElement(f, {
			icon: i.createElement(s.Accelerometer, null),
			nNoiseValue: n?.AccelerometerNoise,
			nNoiseThreshold: t.flAccelerometerStationaryTolerance,
			nMaxNoiseBarValue: 50,
		}),
	);
}
export function V4(e) {
	const { strLabel: t, bShowDescription: r, nControllerIndex: n } = e;
	const a = (0, A.nF)(n)?.CalibrationProgress;
	const s =
		a > 0.97
			? "hsl( 120, 93%, 54% )"
			: a < 0.02
				? "hsl( 0, 93%, 54% )"
				: undefined;
	return i.createElement(
		i.Fragment,
		null,
		i.createElement(d.hA, {
			focusable: false,
			color: s,
			childrenLayout: "inline",
			childrenContainerWidth: "max",
			bottomSeparator: "none",
			label: (0, l.we)(t),
			description: r
				? (0, l.we)(
						"#Settings_ControllerCalibration_GyroAndAccelerometerNoise_Desc",
					)
				: undefined,
			nProgress: a * 100,
			nTransitionSec: 0.01,
		}),
	);
}
