var n = require(/*webcrack:missing*/ "./63696.js");
var i = require("./64608.js");
var a = require("./25931.js");
var s = require("./35488.js");
import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
var l = require("./66186.js");
var c = require(/*webcrack:missing*/ "./52451.js");
var m = require("./13869.js");
var u = require("./10606.js");
var d = require("./96593.js");
var A = require("./91486.js");
var p = require("./96555.js");
var g = require("./78057.js");
var h = require("./46422.js");
var C = require(/*webcrack:missing*/ "./90765.js");
var _ = require("./34819.js");
var f = require("./61518.js");
var b = require("./57472.js");
var y = require("./34792.js");
var S = require("./75961.js");
var w = require("./90389.js");
var B = require("./27756.js");
var v = require(/*webcrack:missing*/ "./11131.js");
var I = require(/*webcrack:missing*/ "./43691.js");
var E = require("./11714.js");
var M = require("./33706.js");
var T = require("./56365.js");
var R = require("./1470.js");
require("./13897.js");
var k = require("./10294.js");
export function H$(e) {
	const [t] = (0, y.VI)("force_deck_perf_tab");
	return e || t;
}
function N(e) {
	const { available: t, disabled: r, ...a } = e;
	if (H$(t)) {
		return n.createElement(i.y4, {
			...a,
			disabled: r || k.Ih.BKioskModeLocked(),
		});
	} else {
		return null;
	}
}
function F(e) {
	const { available: t, disabled: r, ...a } = e;
	if (H$(t)) {
		return n.createElement(i.d3, {
			...a,
			disabled: r || k.Ih.BKioskModeLocked(),
		});
	} else {
		return null;
	}
}
function G(e) {
	const { available: t, disabled: r, ...a } = e;
	if (H$(t)) {
		return n.createElement(i.gz, {
			...a,
			disabled: r || k.Ih.BKioskModeLocked(),
		});
	} else {
		return null;
	}
}
export function TM() {
	const [e, t] = (0, l.uq)();
	return n.createElement(i.y4, {
		label: (0, Localize)("#QuickAccess_Tab_Perf_FPS_Contrast"),
		checked: e,
		onChange: t,
		disabled: k.Ih.BKioskModeLocked(),
	});
}
export function g9() {
	const [e, t] = (0, l.CP)();
	const r = n.useMemo(
		() => [
			{
				label: (0, Localize)("#QuickAccess_Tab_Perf_FPS_Corner_None"),
				data: 0,
			},
			{
				label: (0, Localize)("#QuickAccess_Tab_Perf_FPS_Corner_TopLeft"),
				data: 1,
			},
			{
				label: (0, Localize)("#QuickAccess_Tab_Perf_FPS_Corner_TopRight"),
				data: 2,
			},
			{
				label: (0, Localize)("#QuickAccess_Tab_Perf_FPS_Corner_BottomRight"),
				data: 3,
			},
			{
				label: (0, Localize)("#QuickAccess_Tab_Perf_FPS_Corner_BottomLeft"),
				data: 4,
			},
		],
		[],
	);
	return n.createElement(i.Vb, {
		label: (0, Localize)("#QuickAccess_Tab_Perf_FPS_Corner"),
		rgOptions: r,
		selectedOption: e,
		onChange: (e) => t(e.data),
	});
}
export function OV() {
	const e = H$(false);
	const [t, r, a] = (0, l.kS)();
	if (a || e) {
		return null;
	} else {
		return n.createElement(i.y4, {
			label: (0, Localize)("#QuickAccess_Tab_Perf_Overlay"),
			disabled: !t || k.Ih.BKioskModeLocked(),
			checked: r,
			onChange: (e) => l.Hn.Get().SetPerfOverlayEnabled(e),
		});
	}
}
export function gv() {
	const e = (0, Localize)("#QuickAccess_Tab_Perf_Overlay_Level_OFF");
	const t = n.useMemo(
		() => [
			{
				notchIndex: 0,
				label: e,
				value: 0,
			},
			{
				notchIndex: 1,
				label: "1",
				value: 4,
			},
			{
				notchIndex: 2,
				label: "2",
				value: 1,
			},
			{
				notchIndex: 3,
				label: "3",
				value: 2,
			},
			{
				notchIndex: 4,
				label: "4",
				value: 3,
			},
		],
		[e],
	);
	const [r, i] = (0, l.aS)();
	const a = t.find((e) => e.value === r).notchIndex;
	const s = n.useCallback(
		(e) => {
			const r = t[e].value;
			i(r);
		},
		[t, i],
	);
	return n.createElement(F, {
		available: true,
		label: (0, Localize)("#QuickAccess_Tab_Perf_Overlay_Level"),
		explainer: (0, Localize)("#QuickAccess_Tab_Perf_Overlay_Explainer"),
		value: a,
		layout: "below",
		onChange: s,
		min: 0,
		max: t.length - 1,
		step: 1,
		bottomSeparator: "standard",
		notchCount: t.length,
		notchLabels: t,
		notchTicksVisible: false,
	});
}
export function Cx(e) {
	(0, l.N$)();
	const [t, r] = (0, l.Sq)();
	return null;
}
function U(e, t) {
	return e.find((e) => e.value === t)?.notchIndex ?? 2;
}
function W(e) {
	const { app: t, bAppSupportsFPSLimit: r } = e;
	if (r) {
		return null;
	} else {
		return n.createElement(
			n.Fragment,
			null,
			n.createElement(i.D0, {
				className: a.FramerateLimitSliderWarning,
				label: (0, Localize)(
					"#QuickAccess_Tab_Perf_LimitFrameRate_Warning_WIP",
				),
			}),
		);
	}
}
export function Mq(e) {
	const [t, r, s, m] = (0, l.Cv)();
	const u = (0, Localize)("#QuickAccess_Tab_Perf_LimitFrameRate_Off");
	const A = n.useMemo(
		() => [
			...s.map((e, t) => ({
				notchIndex: t,
				label: e != 0 ? e.toString() : u,
				value: e,
			})),
		],
		[u, s],
	);
	const [p, _] = (0, c.uN)(r, m);
	const [f, b] = n.useState(U(A, p));
	n.useEffect(() => {
		const e = U(A, p);
		if (e != f) {
			b(e);
		}
	}, [p, A, f]);
	const y = n.useCallback(
		(e) => {
			const t = A[e].value;
			b(e);
			_(t);
		},
		[A, _],
	);
	const S = (0, h.RP)();
	(0, g.T)(S);
	const w = (0, d.Co)(S);
	if (!t) {
		return null;
	}
	const B = (0, C.A)(a.LimitFramerateSlider, null);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(i.d3, {
			className: B,
			label: (0, Localize)("#QuickAccess_Tab_Perf_LimitFrameRate"),
			explainer: (0, Localize)(
				"#QuickAccess_Tab_Perf_LimitFrameRate_Explainer",
			),
			value: f,
			layout: "below",
			onChange: y,
			min: 0,
			max: A.length - 1,
			step: 1,
			bottomSeparator: "standard",
			notchCount: A.length,
			notchLabels: A,
			notchTicksVisible: false,
		}),
		n.createElement(W, {
			app: w,
			bAppSupportsFPSLimit: true,
		}),
	);
}
export function ZH(e) {
	const t = (0, l.pq)();
	const r = (0, l.tv)();
	return n.createElement(N, {
		available: t,
		icon: n.createElement(s.HalfRateShading, null),
		label: (0, Localize)("#QuickAccess_Tab_Perf_VariableResolution"),
		explainer: (0, Localize)(
			"#QuickAccess_Tab_Perf_VariableResolution_Explainer",
		),
		checked: r,
		onChange: (e) => l.Hn.Get().SetVariableResolutionEnabled(e),
	});
}
function j(e) {
	let t = (0, Localize)("#Modal_ExternalDisplayControlConfirm_Description");
	return n.createElement(u.o0, {
		strTitle: (0, Localize)(
			"#Modal_ExternalDisplayControlConfirm_Title",
		).toUpperCase(),
		strDescription: t,
		strOKButtonText: (0, Localize)(
			"#Modal_ExternalDisplayControlConfirm_Cancel",
		),
		onOK: () => e.setAllow(false),
		strCancelButtonText: (0, Localize)(
			"#Modal_ExternalDisplayControlConfirm_Proceed",
		),
		onCancel: () => e.setAllow(true),
		closeModal: e.closeModal,
	});
}
export function TZ(e) {
	const [t, r] = (0, l._4)();
	const a = n.useCallback(
		(e) => {
			if (e) {
				(0, m.pg)(
					n.createElement(j, {
						setAllow: r,
					}),
					window,
				);
			} else {
				r(e);
			}
		},
		[r],
	);
	return n.createElement(i.y4, {
		controlled: true,
		label: (0, Localize)("#QuickAccess_Tab_Perf_AllowExternalDisplayRefresh"),
		checked: t,
		onChange: a,
		disabled: k.Ih.BKioskModeLocked(),
	});
}
export function by(e) {
	const [t, r, i] = (0, l.zn)();
	const [a, s] = (0, c.uN)(t.nCurrentHz, r);
	const m = (function (e) {
		const t = (0, p.jH)();
		if (t && t.length > 0) {
			return t;
		}
		const r = e.nMinHz;
		const n = e.nMaxHz - r + 1;
		return Array.from(
			{
				length: n,
			},
			(e, t) => t + r,
		);
	})(t);
	const u = n.useCallback(
		(e) => {
			s(e);
			i(e);
		},
		[s, i],
	);
	return n.createElement(G, {
		available: t.bAvailable,
		showValue: true,
		showBookendLabels: true,
		label: (0, Localize)("#QuickAccess_Tab_Perf_RefreshRate"),
		rValues: m,
		value: a,
		onChange: s,
		onChangeComplete: u,
	});
}
function Z(e, t) {
	return e.find((e) => e.value === t)?.notchIndex ?? 2;
}
export function aL(e) {
	const t = H$(false);
	const r = (0, l.Jt)();
	const i = n.useMemo(
		() =>
			[
				{
					notchIndex: 0,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_Linear"),
					value: 4,
				},
				{
					notchIndex: 1,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_Nearest"),
					value: 2,
				},
				{
					notchIndex: 2,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_Integer"),
					value: 3,
				},
				{
					notchIndex: 3,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_FSR"),
					value: 1,
				},
				r && {
					notchIndex: 4,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_NIS"),
					value: 5,
				},
			].filter(Boolean),
		[r],
	);
	const [a, s, m] = (0, l.pB)();
	const [u, d] = (0, c.uN)(s, m);
	const [A, p] = n.useState(Z(i, u));
	n.useEffect(() => {
		const e = Z(i, u);
		if (e != A) {
			p(e);
		}
	}, [u, i, A]);
	const g = n.useCallback(
		(e) => {
			const t = i[e].value;
			p(e);
			d(t);
		},
		[i, d],
	);
	if (t) {
		return null;
	} else {
		return n.createElement(F, {
			available: a,
			label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter"),
			value: A,
			layout: "below",
			onChange: g,
			min: 0,
			max: i.length - 1,
			step: 1,
			bottomSeparator: "standard",
			notchCount: i.length,
			notchLabels: i,
		});
	}
}
function K(e, t) {
	return e.find((e) => e.value === t)?.notchIndex ?? 0;
}
function X(e) {
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"p",
			null,
			(0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_Explainer_Intro"),
		),
		n.createElement(
			"ul",
			null,
			n.createElement(
				"li",
				null,
				(0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_Linear_Explainer"),
			),
			n.createElement(
				"li",
				null,
				(0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_Nearest_Explainer"),
			),
			n.createElement(
				"li",
				null,
				(0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_FSR_Explainer"),
			),
			n.createElement(
				"li",
				null,
				(0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_NIS_Explainer"),
			),
		),
	);
}
export function ph(e) {
	const t = n.useMemo(
		() =>
			[
				{
					notchIndex: 0,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_Linear"),
					value: 1,
				},
				{
					notchIndex: 1,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_Nearest"),
					value: 2,
				},
				{
					notchIndex: 2,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_FSR"),
					value: 3,
				},
				{
					notchIndex: 3,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_NIS"),
					value: 4,
				},
			].filter(Boolean),
		[],
	);
	const [r, i, a] = (0, l.bS)();
	const [s, m] = (0, c.uN)(i, a);
	const [u, d] = n.useState(K(t, s));
	n.useEffect(() => {
		const e = K(t, s);
		if (e != u) {
			d(e);
		}
	}, [s, t, u]);
	const A = n.useCallback(
		(e) => {
			const r = t[e].value;
			d(e);
			m(r);
		},
		[t, m],
	);
	return n.createElement(F, {
		available: r,
		label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter"),
		explainer: n.createElement(X, null),
		value: u,
		layout: "below",
		onChange: A,
		min: 0,
		max: t.length - 1,
		step: 1,
		bottomSeparator: "standard",
		notchCount: t.length,
		notchLabels: t,
		notchTicksVisible: false,
	});
}
function $(e, t) {
	return e.find((e) => e.value === t)?.notchIndex ?? 0;
}
function ee(e) {
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			"p",
			null,
			(0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Explainer_Intro"),
		),
		n.createElement(
			"ul",
			null,
			n.createElement(
				"li",
				null,
				(0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Auto_Explainer"),
			),
			n.createElement(
				"li",
				null,
				(0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Integer_Explainer"),
			),
			n.createElement(
				"li",
				null,
				(0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Fill_Explainer"),
			),
			n.createElement(
				"li",
				null,
				(0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Stretch_Explainer"),
			),
			n.createElement(
				"li",
				null,
				(0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Fit_Explainer"),
			),
		),
	);
}
export function nf(e) {
	const t = n.useMemo(
		() =>
			[
				{
					notchIndex: 0,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Auto"),
					value: 1,
				},
				{
					notchIndex: 1,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Integer"),
					value: 2,
				},
				{
					notchIndex: 2,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Fit"),
					value: 3,
				},
				{
					notchIndex: 3,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Stretch"),
					value: 5,
				},
				{
					notchIndex: 4,
					label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Fill"),
					value: 4,
				},
			].filter(Boolean),
		[],
	);
	const [r, i, a] = (0, l.xm)();
	const [s, m] = (0, c.uN)(i, a);
	const [u, d] = n.useState($(t, s));
	n.useEffect(() => {
		const e = $(t, s);
		if (e != u) {
			d(e);
		}
	}, [s, t, u]);
	const A = n.useCallback(
		(e) => {
			const r = t[e].value;
			d(e);
			m(r);
		},
		[t, m],
	);
	return n.createElement(F, {
		available: r,
		label: (0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler"),
		explainer: n.createElement(ee, null),
		value: u,
		layout: "below",
		onChange: A,
		min: 0,
		max: t.length - 1,
		step: 1,
		bottomSeparator: "standard",
		notchCount: t.length,
		notchLabels: t,
		notchTicksVisible: false,
	});
}
export function CZ(e) {
	const t = (0, l.eE)() === 3;
	const [r, i, a, s] = (0, l.mx)();
	const [m, u] = (0, c.uN)(r, s);
	return n.createElement(F, {
		available: t,
		showValue: true,
		label: (0, Localize)("#QuickAccess_Tab_Perf_FSRSharpness"),
		explainer: (0, Localize)(
			"#QuickAccess_Tab_Perf_ScalingFilter_FSRSharpness_Explainer",
		),
		min: i,
		max: a,
		step: 1,
		value: m,
		onChange: u,
	});
}
export function du(e) {
	const t = (0, l.eE)() === 4;
	const [r, i, a, s] = (0, l.fb)();
	const [m, u] = (0, c.uN)(r, s);
	return n.createElement(F, {
		available: t,
		showValue: true,
		label: (0, Localize)("#QuickAccess_Tab_Perf_NISSharpness"),
		explainer: (0, Localize)(
			"#QuickAccess_Tab_Perf_ScalingFilter_NISSharpness_Explainer",
		),
		min: i,
		max: a,
		step: 1,
		value: m,
		onChange: u,
	});
}
export function PK(e) {
	const [t, r, i] = (0, l.LG)();
	return n.createElement(N, {
		available: true,
		icon: n.createElement(s.ManualGPUClock, null),
		disabled: r,
		label: (0, Localize)("#QuickAccess_Tab_Perf_GPUClockControl"),
		explainer: (0, Localize)("#QuickAccess_Tab_Perf_GPUClockManual_Explainer"),
		checked: t,
		onChange: i,
		bottomSeparator: t ? "none" : null,
	});
}
export function mL(e) {
	const [t, r] = (0, l.LG)();
	const [i, a, s, m] = (0, l.Pc)();
	const [u, d] = (0, c.uN)(i, m);
	return n.createElement(F, {
		available: t,
		showValue: true,
		min: a,
		max: s,
		step: 100,
		value: u,
		onChange: d,
		bottomSeparator: t ? "none" : null,
		valueSuffix: (0, Localize)("#QuickAccess_Tab_Perf_GPUClockUnits"),
		showBookendLabels: true,
	});
}
export function V(e) {
	const [t, r] = (0, l.At)();
	return n.createElement(i.y4, {
		label: (0, Localize)("#QuickAccess_Tab_Perf_PerfOverlayOverSteam"),
		checked: t,
		onChange: r,
		disabled: k.Ih.BKioskModeLocked(),
	});
}
export function mR(e) {
	const t = (0, l.gc)();
	const r = (0, l.mM)(t);
	const [i, a] = (0, l.M9)();
	const s = (0, Localize)("#QuickAccess_Tab_Perf_ToggleGameSettings");
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(N, {
			available: !r,
			label: s,
			checked: i,
			onChange: a,
			explainer: (0, Localize)(
				"#QuickAccess_Tab_Perf_GameProfileExplainer_Description",
			),
		}),
	);
}
export function jw(e) {
	const t = (0, l.Q3)();
	const r = (0, l.mM)(t);
	const c = (0, d._R)(t);
	const p = n.createElement(
		"div",
		{
			className: a.Heading,
		},
		n.createElement(
			"span",
			{
				className: a.Text,
			},
			(0, Localize)("#QuickAccess_Tab_Perf_PerformanceSettings"),
		),
		n.createElement(s.Information, {
			className: a.Icon,
		}),
	);
	return n.createElement(
		n.Fragment,
		null,
		n.createElement(
			i.D0,
			{
				className: a.PerfProfileInfo,
				label: p,
				focusable: true,
				onActivate: () =>
					(0, m.pg)(
						(function (e) {
							const t = (0, Localize)(
								"#QuickAccess_Tab_Perf_GameProfileExplainer_Title",
							);
							const r = (0, Localize)(
								"#QuickAccess_Tab_Perf_GameProfileExplainer_Description",
							);
							const i = (0, Localize)(
								"#QuickAccess_Tab_Perf_GameProfileExplainer_Dismiss",
							);
							return n.createElement(u.o0, {
								bAlertDialog: true,
								className: a.PerfProfileExplainerModal,
								strTitle: t,
								strDescription: r,
								strOKButtonText: i,
							});
						})(),
						window,
					),
				childrenLayout: "below",
				bottomSeparator: "none",
				padding: "none",
			},
			n.createElement(
				"div",
				{
					className: a.SubHeading,
				},
				!r &&
					n.createElement(A.z, {
						app: c,
						eAssetType: 4,
						className: a.Icon,
						bShortDisplay: true,
					}),
				n.createElement(
					"div",
					{
						className: a.Text,
					},
					r && (0, Localize)("#QuickAccess_Tab_Perf_DefaultSettings"),
					!r &&
						LocalizeReact(
							"#QuickAccess_Tab_Perf_GameSpecificSettings",
							n.createElement(
								"span",
								{
									className: a.GameName,
								},
								c?.display_name,
							),
						),
				),
			),
		),
	);
}
export function qC(e) {
	const t = (0, l.Q3)();
	const r = (0, l.mM)(t);
	const i = (0, d._R)(t);
	if (r) {
		return null;
	}
	const s = LocalizeReact(
		"#QuickAccess_Tab_Perf_GameProfileInfoBasic",
		n.createElement(
			"span",
			{
				className: a.Name,
			},
			i?.display_name,
		),
	);
	return n.createElement(
		"div",
		{
			className: a.PerfProfileInfoBasic,
		},
		s,
	);
}
export function PZ(e) {
	const [t, r] = (0, l.xu)();
	const a = t
		? (0, Localize)("#Common_Basic_View")
		: (0, Localize)("#Common_Advanced_View");
	return n.createElement(
		i.xh,
		{
			onClick: () => r(!t),
			layout: "below",
			bottomSeparator: e.bottomSeparator,
		},
		a,
	);
}
export function DJ(e) {
	const t = (0, Localize)("#QuickAccess_Tab_Perf_ResetToDefault");
	return n.createElement(
		i.xh,
		{
			onClick: () => l.Hn.Get().ResetCurrentPerfProfileSettings(),
			layout: "below",
			bottomSeparator: e.bottomSeparator,
		},
		t,
	);
}
export function e5(e) {
	const [t, r, i] = (0, l.vy)();
	return n.createElement(N, {
		available: t,
		label: (0, Localize)("#QuickAccess_Tab_Perf_DynamicRefreshInSteam"),
		checked: r,
		onChange: i,
	});
}
export function zK(e) {
	return n.createElement(b.G, {
		setting: "gamescope_force_composite",
		label: (0, Localize)("#QuickAccess_Tab_Perf_ForceComposite"),
		feature: 7,
	});
}
export function HK(e) {
	return n.createElement(b.G, {
		feature: 7,
		setting: "gamescope_allow_tearing",
		icon: n.createElement(s.AllowTearing, null),
		label: (0, Localize)("#QuickAccess_Tab_Perf_EnableTearing"),
		explainer: (0, Localize)("#QuickAccess_Tab_Perf_EnableTearing_Explainer"),
	});
}
export function bh(e) {
	const t = (0, p.Ck)();
	const [r, i, a] = (0, l.g7)();
	if (!t.isSuccess) {
		return null;
	}
	const s = t?.data?.is_vrr_capable ?? false;
	const c = t?.data?.is_vrr_output_active ?? false;
	if ((t?.data?.is_internal ?? true) && !s) {
		return null;
	}
	let m = null;
	m = s
		? c
			? (0, Localize)("#QuickAccess_Tab_Perf_VRR_Enabled")
			: (0, Localize)("#QuickAccess_Tab_Perf_VRR_Disabled")
		: (0, Localize)("#QuickAccess_Tab_Perf_VRR_NotCapable");
	return n.createElement(N, {
		available: r,
		label: (0, Localize)("#QuickAccess_Tab_Perf_EnableVRR"),
		description: m,
		disabled: !s,
		checked: i,
		onChange: a,
	});
}
export function BF(e) {
	return n.createElement(b.G, {
		setting: "gamescope_composite_debug",
		label: (0, Localize)("#QuickAccess_Tab_Perf_EnableCompositeDebug"),
		feature: 7,
	});
}
export function nK(e) {
	const [t, r, i] = (0, l.Sj)();
	return n.createElement(N, {
		available: t,
		label: (0, Localize)("#QuickAccess_Tab_Perf_DisableColorManagement"),
		checked: !r,
		onChange: (e) => i(!e),
	});
}
export function fn(e) {
	const { bAdvanced: t = false } = e;
	const r = (0, p.hb)();
	const i = (0, f.M_)();
	const a = (0, f.Zv)();
	if (!r) {
		return null;
	}
	if (!a) {
		return null;
	}
	const s = !i && t;
	return n.createElement(b.G, {
		feature: 7,
		label: (0, Localize)("#Settings_HDR_Enable"),
		setting: "gamescope_hdr_enabled",
		disabled: !i,
		description: s ? (0, Localize)("#Settings_HDR_NotCapable") : undefined,
	});
}
function fe(e) {
	const { strLabel: t } = e;
	const [r, a, s] = (0, l.WI)();
	if (r) {
		return n.createElement(i.y4, {
			label: t || (0, Localize)("#Settings_HDR_Debug_HeatmapEnable"),
			checked: a,
			onChange: s,
			disabled: k.Ih.BKioskModeLocked(),
		});
	} else {
		return null;
	}
}
export function zt(e) {
	const [t, r] = (0, _.zg)();
	const i = (0, p.Ck)();
	if (i?.data?.is_hdr_output_active && t) {
		return n.createElement(fe, {
			strLabel: (0, Localize)("#Settings_HDR_Debug_Heatmap"),
		});
	} else {
		return null;
	}
}
function ye() {
	const e = (0, h.RP)();
	const t = (0, g.T)(e);
	let r = (function (e) {
		const [t, r] = n.useState(undefined);
		if (t !== undefined) {
			return t;
		} else {
			return e;
		}
	})(t?.deckDerivedProperties?.hdr_support);
	const [i] = (0, y.VI)("hdr_compat_testing");
	if (i) {
		r = 0;
	}
	switch (r) {
		case 2:
		case 4:
			return true;
		default:
			return false;
	}
}
export function PS(e) {
	const t = (0, f._9)();
	const r = (0, f.M_)();
	const i = ye();
	if (!r) {
		return null;
	}
	if (t) {
		const e = (0, C.A)(a.HDRBadge, a.Sheen);
		return n.createElement(
			"div",
			{
				className: e,
			},
			(0, Localize)("#Settings_HDR_Enabled_Badge"),
		);
	}
	if (i) {
		const e = (0, C.A)(a.HDRBadge, a.HDRBadgeInactive);
		return n.createElement(
			"div",
			{
				className: e,
			},
			(0, Localize)("#Settings_HDR_Enabled_Badge"),
		);
	}
	return null;
}
export function Ac(e) {
	const t = (0, f.J9)();
	const r = (0, f.wy)();
	const i = n.useMemo(
		() =>
			[
				{
					data: 0,
					label: (0, Localize)("#Settings_HDRVisualization_None"),
				},
				r && {
					data: 2,
					label: (0, Localize)("#Settings_HDRVisualization_Analysis"),
				},
				{
					data: 1,
					label: (0, Localize)("#Settings_HDRVisualization_Heatmap"),
				},
				{
					data: 3,
					label: (0, Localize)("#Settings_HDRVisualization_HeatmapExtended"),
				},
				{
					data: 4,
					label: (0, Localize)("#Settings_HDRVisualization_HeatmapClassic"),
				},
			].filter(Boolean),
		[r],
	);
	if (t) {
		return n.createElement(S.X, {
			feature: 7,
			label: (0, Localize)("#Settings_HDRVisualization_Label"),
			rgOptions: i,
			setting: "gamescope_hdr_visualization",
		});
	} else {
		return null;
	}
}
export function A2(e) {
	const t = (0, v.R7)();
	const [r, a] = n.useState(false);
	const s = n.useCallback(async () => {
		if (!(await w.Bd.OptOutOfSideloadedClient({})).BSuccess()) {
			n.createElement(u.KG, null);
			(0, u.pY)(
				"Failed to remove sideloaded steam client",
				t.ownerWindow ?? window,
			);
			return;
		}
		a(true);
		(0, B.$)({
			bSystemRestart: true,
			strCancelButtonText: (0, Localize)("#Settings_RestartLater_ButtonText"),
			ownerWindow: t.ownerWindow ?? window,
		});
	}, [t]);
	const l = n.useCallback(() => {
		(0, m.pg)(
			n.createElement(u.o0, {
				strTitle: "Remove sideloaded steam client",
				strDescription:
					"Are you sure you want to remove the sideloaded steam client?",
				onOK: s,
			}),
			t.ownerWindow ?? window,
		);
	}, [t, s]);
	if (I.TS.ON_STEAMOS) {
		return n.createElement(
			i.xh,
			{
				label: "Sideloaded Steam Client",
				onClick: l,
				disabled: r,
				childrenContainerWidth: "fixed",
			},
			r ? "Restart Pending" : "Remove",
		);
	} else {
		return null;
	}
}
export function kf(e) {
	const t = (0, f.t7)();
	const r = (0, f.ZN)((e) => e.is_refresh_rate_switching_supported);
	const i = r.isSuccess && r.data;
	if (!t || i) {
		return null;
	} else {
		return n.createElement(b.G, {
			feature: 7,
			label: (0, Localize)("#QuickAccess_Tab_Perf_AppRefreshRateEnable"),
			setting: "gamescope_enable_app_target_framerate",
		});
	}
}
function Ie(e) {
	const t = (0, f.HR)();
	const r = (0, f.OV)();
	const i = n.useCallback(
		(e) =>
			(0, Localize)("#QuickAccess_Tab_Perf_GamescopeRefreshRate_Hz", `${e}`),
		[],
	);
	if (r == null) {
		return null;
	} else {
		return n.createElement(E.Ax, {
			feature: 7,
			label: (0, Localize)("#QuickAccess_Tab_Perf_GamescopeRefreshRate"),
			explainer: (0, Localize)(
				"#QuickAccess_Tab_Perf_GamescopeRefreshRate_Explainer",
			),
			setting: "gamescope_display_refresh_rate",
			showValue: true,
			nDebounceMs: 700,
			rValues: r,
			showBookendLabels: true,
			renderValue: i,
			disabled: !t,
			valueDisabled: r[r.length - 1],
		});
	}
}
export function k4(e) {
	const t = (0, f.t7)();
	const r = (0, f.HR)();
	const i = (0, f.Y$)();
	const [a] = (0, y.VI)("gamescope_enable_app_target_framerate");
	const [s] = (0, y.VI)("gamescope_disable_framelimit");
	const l = (0, f.KK)();
	const c = (0, f.OV)();
	const m = n.useCallback(
		(e) => {
			const t = (function (e, t) {
				if (!t || t.length == 0) {
					return;
				}
				const r = Math.max(...t);
				let n = Math.min(Math.ceil(r / e), 100);
				for (; n > 0; --n) {
					const r = e * n;
					if (t.indexOf(r) > -1) {
						return r;
					}
				}
			})(e, c);
			const r = (0, Localize)(
				"#QuickAccess_Tab_Perf_AppRefreshRate_FPS",
				`${e}`,
			);
			if (t === undefined) {
				return r;
			}
			return `${r} (${(0, Localize)("#QuickAccess_Tab_Perf_AppRefreshRate_Hz", `${t}`)})`;
		},
		[c],
	);
	if (t && a && l != null) {
		if (r && s) {
			return n.createElement(Ie, null);
		} else {
			return n.createElement(E.Ax, {
				feature: 7,
				label: (0, Localize)("#QuickAccess_Tab_Perf_AppRefreshRate"),
				explainer: i
					? (0, Localize)(
							"#QuickAccess_Tab_Perf_AppRefreshRate_Restricted_Body",
						)
					: (0, Localize)("#QuickAccess_Tab_Perf_AppRefreshRate_Explainer"),
				explainerTitle: i
					? (0, Localize)(
							"#QuickAccess_Tab_Perf_AppRefreshRate_Restricted_Title",
						)
					: n.createElement(n.Fragment, null),
				setting: "gamescope_app_target_framerate",
				showValue: true,
				nDebounceMs: 700,
				rValues: l,
				showBookendLabels: true,
				disabled: s || i,
				valueDisabled: l[l.length - 1],
				renderValue: m,
			});
		}
	} else {
		return null;
	}
}
export function zl(e) {
	const t = (0, f.t7)();
	const [r] = (0, y.VI)("gamescope_enable_app_target_framerate");
	if (t && r) {
		return n.createElement(b.G, {
			feature: 7,
			icon: n.createElement(s.DisableFrameLimit, null),
			label: (0, Localize)("#QuickAccess_Tab_Perf_DisableFrameLimit"),
			setting: "gamescope_disable_framelimit",
			explainer: (0, Localize)(
				"#QuickAccess_Tab_Perf_DisableFrameLimit_Explainer",
			),
		});
	} else {
		return null;
	}
}
export function s0(e) {
	const t = (0, M.bP)();
	return n.createElement(E.Pl, {
		feature: 7,
		visible: t,
		label: (0, Localize)("#Settings_Display_StatusLEDBrightness"),
		setting: "steamos_status_led_brightness",
		min: 0,
		max: 100,
		resetValue: 100,
		layout: "inline",
	});
}
export function ON(e) {
	if ((0, f.js)()) {
		return n.createElement(b.G, {
			feature: 7,
			label: (0, Localize)("#Settings_Display_MuraCorrectionDisabled_Label"),
			setting: "gamescope_disable_mura_correction",
		});
	} else {
		return null;
	}
}
export function Jd() {
	const { ownerWindow: e } = (0, v.R7)();
	const t = n.useCallback(async () => {
		if ((await T.MX.ReArmMuraCalibration({})).BSuccess()) {
			(0, B.$)({
				bSystemRestart: true,
				strCancelButtonText: (0, Localize)("#Settings_RestartLater_ButtonText"),
				ownerWindow: e ?? window,
			});
		} else {
			(0, u.pY)(
				(0, Localize)("#Settings_Developer_MuraReArm_Error"),
				e ?? window,
			);
		}
	}, [e]);
	return n.createElement(
		R.E,
		{
			feature: 7,
			label: (0, Localize)("#Settings_Developer_MuraReArm"),
			onClick: t,
		},
		(0, Localize)("#Settings_Developer_SpeakerTest_Start"),
	);
}
