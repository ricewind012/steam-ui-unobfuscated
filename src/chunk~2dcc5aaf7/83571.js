import {
	Localize,
	LocalizeReact,
} from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./25931.js";
import s from "./35488.js";
import l, {
	uq,
	CP,
	kS,
	aS,
	N$,
	Sq,
	Cv,
	pq,
	tv,
	_4,
	zn,
	Jt,
	pB,
	bS,
	xm,
	eE,
	mx,
	fb,
	LG,
	Pc,
	At,
	gc,
	mM,
	M9,
	Q3,
	xu,
	vy,
	g7,
	Sj,
	WI,
} from "./66186.js";
import c, { uN } from "./52451.js";
import m, { pg } from "./13869.js";
import u, { pY } from "./10606.js";
import d, { Co, _R } from "./96593.js";
import A from "./91486.js";
import p, { jH, Ck, hb } from "./96555.js";
import g, { T as T_1 } from "./78057.js";
import { RP } from "./46422.js";
import { A as A_1 } from "./90765.js";
import _, { zg } from "./34819.js";
import f, {
	M_ as M_1,
	Zv,
	_9,
	J9,
	wy,
	t7,
	ZN,
	HR,
	OV as OV_1,
	Y$,
	KK,
	js,
} from "./61518.js";
import b from "./57472.js";
import y, { VI } from "./34792.js";
import S from "./75961.js";
import w from "./90389.js";
import B, { $ as $_1 } from "./27756.js";
import { R7 } from "./11131.js";
import I from "./43691.js";
import E from "./11714.js";
import { bP } from "./33706.js";
import T from "./56365.js";
import R from "./1470.js";
import "./13897.js";
import k from "./10294.js";
export function H$(e) {
	const [t] = VI("force_deck_perf_tab");
	return e || t;
}
function N(e) {
	const { available, disabled, ...a } = e;
	if (H$(available)) {
		return <i.y4 {...a} disabled={disabled || k.Ih.BKioskModeLocked()} />;
	} else {
		return null;
	}
}
function F(e) {
	const { available, disabled, ...a } = e;
	if (H$(available)) {
		return <i.d3 {...a} disabled={disabled || k.Ih.BKioskModeLocked()} />;
	} else {
		return null;
	}
}
function G(e) {
	const { available, disabled, ...a } = e;
	if (H$(available)) {
		return <i.gz {...a} disabled={disabled || k.Ih.BKioskModeLocked()} />;
	} else {
		return null;
	}
}
export function TM() {
	const [e, t] = uq();
	return (
		<i.y4
			label={(0, Localize)("#QuickAccess_Tab_Perf_FPS_Contrast")}
			checked={e}
			onChange={t}
			disabled={k.Ih.BKioskModeLocked()}
		/>
	);
}
export function g9() {
	const [e, t] = CP();
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
	return (
		<i.Vb
			label={(0, Localize)("#QuickAccess_Tab_Perf_FPS_Corner")}
			rgOptions={r}
			selectedOption={e}
			onChange={(e) => t(e.data)}
		/>
	);
}
export function OV() {
	const e = H$(false);
	const [t, r, a] = kS();
	if (a || e) {
		return null;
	} else {
		return (
			<i.y4
				label={(0, Localize)("#QuickAccess_Tab_Perf_Overlay")}
				disabled={!t || k.Ih.BKioskModeLocked()}
				checked={r}
				onChange={(e) => l.Hn.Get().SetPerfOverlayEnabled(e)}
			/>
		);
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
	const [r, i] = aS();
	const a = t.find((e) => e.value === r).notchIndex;
	const s = n.useCallback(
		(e) => {
			const r = t[e].value;
			i(r);
		},
		[t, i],
	);
	return (
		<F
			available
			label={(0, Localize)("#QuickAccess_Tab_Perf_Overlay_Level")}
			explainer={(0, Localize)("#QuickAccess_Tab_Perf_Overlay_Explainer")}
			value={a}
			layout="below"
			onChange={s}
			min={0}
			max={t.length - 1}
			step={1}
			bottomSeparator="standard"
			notchCount={t.length}
			notchLabels={t}
			notchTicksVisible={false}
		/>
	);
}
export function Cx(e) {
	N$();
	const [t, r] = Sq();
	return null;
}
function U(e, t) {
	return e.find((e) => e.value === t)?.notchIndex ?? 2;
}
function W(e) {
	const { app, bAppSupportsFPSLimit } = e;
	if (bAppSupportsFPSLimit) {
		return null;
	} else {
		return (
			<>
				<i.D0
					className={a.FramerateLimitSliderWarning}
					label={(0, Localize)(
						"#QuickAccess_Tab_Perf_LimitFrameRate_Warning_WIP",
					)}
				/>
			</>
		);
	}
}
export function Mq(e) {
	const [t, r, s, m] = Cv();
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
	const [p, _] = uN(r, m);
	const [f, setF] = n.useState(U(A, p));
	n.useEffect(() => {
		const e = U(A, p);
		if (e != f) {
			setF(e);
		}
	}, [p, A, f]);
	const y = n.useCallback(
		(e) => {
			const t = A[e].value;
			setF(e);
			_(t);
		},
		[A, _],
	);
	const S = RP();
	T_1(S);
	const w = Co(S);
	if (!t) {
		return null;
	}
	const B = A_1(a.LimitFramerateSlider, null);
	return (
		<>
			<i.d3
				className={B}
				label={(0, Localize)("#QuickAccess_Tab_Perf_LimitFrameRate")}
				explainer={(0, Localize)(
					"#QuickAccess_Tab_Perf_LimitFrameRate_Explainer",
				)}
				value={f}
				layout="below"
				onChange={y}
				min={0}
				max={A.length - 1}
				step={1}
				bottomSeparator="standard"
				notchCount={A.length}
				notchLabels={A}
				notchTicksVisible={false}
			/>
			<W app={w} bAppSupportsFPSLimit />
		</>
	);
}
export function ZH(e) {
	const t = pq();
	const r = tv();
	return (
		<N
			available={t}
			icon={<s.HalfRateShading />}
			label={(0, Localize)("#QuickAccess_Tab_Perf_VariableResolution")}
			explainer={(0, Localize)(
				"#QuickAccess_Tab_Perf_VariableResolution_Explainer",
			)}
			checked={r}
			onChange={(e) => l.Hn.Get().SetVariableResolutionEnabled(e)}
		/>
	);
}
function J(e) {
	let t = (0, Localize)("#Modal_ExternalDisplayControlConfirm_Description");
	return (
		<u.o0
			strTitle={(0, Localize)(
				"#Modal_ExternalDisplayControlConfirm_Title",
			).toUpperCase()}
			strDescription={t}
			strOKButtonText={(0, Localize)(
				"#Modal_ExternalDisplayControlConfirm_Cancel",
			)}
			onOK={() => e.setAllow(false)}
			strCancelButtonText={(0, Localize)(
				"#Modal_ExternalDisplayControlConfirm_Proceed",
			)}
			onCancel={() => e.setAllow(true)}
			closeModal={e.closeModal}
		/>
	);
}
export function TZ(e) {
	const [t, r] = _4();
	const a = n.useCallback(
		(e) => {
			if (e) {
				pg(<J setAllow={r} />, window);
			} else {
				r(e);
			}
		},
		[r],
	);
	return (
		<i.y4
			controlled
			label={(0, Localize)("#QuickAccess_Tab_Perf_AllowExternalDisplayRefresh")}
			checked={t}
			onChange={a}
			disabled={k.Ih.BKioskModeLocked()}
		/>
	);
}
export function by(e) {
	const [t, r, i] = zn();
	const [a, s] = uN(t.nCurrentHz, r);
	const m = ((e) => {
		const t = jH();
		if (t && t.length > 0) {
			return t;
		}
		const e_nMinHz = e.nMinHz;
		const n = e.nMaxHz - e_nMinHz + 1;
		return Array.from(
			{
				length: n,
			},
			(e, t) => t + e_nMinHz,
		);
	})(t);
	const u = n.useCallback(
		(e) => {
			s(e);
			i(e);
		},
		[s, i],
	);
	return (
		<G
			available={t.bAvailable}
			showValue
			showBookendLabels
			label={(0, Localize)("#QuickAccess_Tab_Perf_RefreshRate")}
			rValues={m}
			value={a}
			onChange={s}
			onChangeComplete={u}
		/>
	);
}
function Z(e, t) {
	return e.find((e) => e.value === t)?.notchIndex ?? 2;
}
export function aL(e) {
	const t = H$(false);
	const r = Jt();
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
	const [a, s, m] = pB();
	const [u, d] = uN(s, m);
	const [A, setA] = n.useState(Z(i, u));
	n.useEffect(() => {
		const e = Z(i, u);
		if (e != A) {
			setA(e);
		}
	}, [u, i, A]);
	const g = n.useCallback(
		(e) => {
			const t = i[e].value;
			setA(e);
			d(t);
		},
		[i, d],
	);
	if (t) {
		return null;
	} else {
		return (
			<F
				available={a}
				label={(0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter")}
				value={A}
				layout="below"
				onChange={g}
				min={0}
				max={i.length - 1}
				step={1}
				bottomSeparator="standard"
				notchCount={i.length}
				notchLabels={i}
			/>
		);
	}
}
function K(e, t) {
	return e.find((e) => e.value === t)?.notchIndex ?? 0;
}
function X(e) {
	return (
		<>
			<p>
				{(0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_Explainer_Intro")}
			</p>
			<ul>
				<li>
					{(0, Localize)(
						"#QuickAccess_Tab_Perf_ScalingFilter_Linear_Explainer",
					)}
				</li>
				<li>
					{(0, Localize)(
						"#QuickAccess_Tab_Perf_ScalingFilter_Nearest_Explainer",
					)}
				</li>
				<li>
					{(0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_FSR_Explainer")}
				</li>
				<li>
					{(0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter_NIS_Explainer")}
				</li>
			</ul>
		</>
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
	const [r, i, a] = bS();
	const [s, m] = uN(i, a);
	const [u, setU] = n.useState(K(t, s));
	n.useEffect(() => {
		const e = K(t, s);
		if (e != u) {
			setU(e);
		}
	}, [s, t, u]);
	const A = n.useCallback(
		(e) => {
			const r = t[e].value;
			setU(e);
			m(r);
		},
		[t, m],
	);
	return (
		<F
			available={r}
			label={(0, Localize)("#QuickAccess_Tab_Perf_ScalingFilter")}
			explainer={<X />}
			value={u}
			layout="below"
			onChange={A}
			min={0}
			max={t.length - 1}
			step={1}
			bottomSeparator="standard"
			notchCount={t.length}
			notchLabels={t}
			notchTicksVisible={false}
		/>
	);
}
function $(e, t) {
	return e.find((e) => e.value === t)?.notchIndex ?? 0;
}
function Ee(e) {
	return (
		<>
			<p>
				{(0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Explainer_Intro")}
			</p>
			<ul>
				<li>
					{(0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Auto_Explainer")}
				</li>
				<li>
					{(0, Localize)(
						"#QuickAccess_Tab_Perf_ScalingScaler_Integer_Explainer",
					)}
				</li>
				<li>
					{(0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Fill_Explainer")}
				</li>
				<li>
					{(0, Localize)(
						"#QuickAccess_Tab_Perf_ScalingScaler_Stretch_Explainer",
					)}
				</li>
				<li>
					{(0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler_Fit_Explainer")}
				</li>
			</ul>
		</>
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
	const [r, i, a] = xm();
	const [s, m] = uN(i, a);
	const [u, setU] = n.useState($(t, s));
	n.useEffect(() => {
		const e = $(t, s);
		if (e != u) {
			setU(e);
		}
	}, [s, t, u]);
	const A = n.useCallback(
		(e) => {
			const r = t[e].value;
			setU(e);
			m(r);
		},
		[t, m],
	);
	return (
		<F
			available={r}
			label={(0, Localize)("#QuickAccess_Tab_Perf_ScalingScaler")}
			explainer={<Ee />}
			value={u}
			layout="below"
			onChange={A}
			min={0}
			max={t.length - 1}
			step={1}
			bottomSeparator="standard"
			notchCount={t.length}
			notchLabels={t}
			notchTicksVisible={false}
		/>
	);
}
export function CZ(e) {
	const t = eE() === 3;
	const [r, i, a, s] = mx();
	const [m, u] = uN(r, s);
	return (
		<F
			available={t}
			showValue
			label={(0, Localize)("#QuickAccess_Tab_Perf_FSRSharpness")}
			explainer={(0, Localize)(
				"#QuickAccess_Tab_Perf_ScalingFilter_FSRSharpness_Explainer",
			)}
			min={i}
			max={a}
			step={1}
			value={m}
			onChange={u}
		/>
	);
}
export function du(e) {
	const t = eE() === 4;
	const [r, i, a, s] = fb();
	const [m, u] = uN(r, s);
	return (
		<F
			available={t}
			showValue
			label={(0, Localize)("#QuickAccess_Tab_Perf_NISSharpness")}
			explainer={(0, Localize)(
				"#QuickAccess_Tab_Perf_ScalingFilter_NISSharpness_Explainer",
			)}
			min={i}
			max={a}
			step={1}
			value={m}
			onChange={u}
		/>
	);
}
export function PK(e) {
	const [t, r, i] = LG();
	return (
		<N
			available
			icon={<s.ManualGPUClock />}
			disabled={r}
			label={(0, Localize)("#QuickAccess_Tab_Perf_GPUClockControl")}
			explainer={(0, Localize)(
				"#QuickAccess_Tab_Perf_GPUClockManual_Explainer",
			)}
			checked={t}
			onChange={i}
			bottomSeparator={t ? "none" : null}
		/>
	);
}
export function mL(e) {
	const [t, r] = LG();
	const [i, a, s, m] = Pc();
	const [u, d] = uN(i, m);
	return (
		<F
			available={t}
			showValue
			min={a}
			max={s}
			step={100}
			value={u}
			onChange={d}
			bottomSeparator={t ? "none" : null}
			valueSuffix={(0, Localize)("#QuickAccess_Tab_Perf_GPUClockUnits")}
			showBookendLabels
		/>
	);
}
export function V(e) {
	const [t, r] = At();
	return (
		<i.y4
			label={(0, Localize)("#QuickAccess_Tab_Perf_PerfOverlayOverSteam")}
			checked={t}
			onChange={r}
			disabled={k.Ih.BKioskModeLocked()}
		/>
	);
}
export function mR(e) {
	const t = gc();
	const r = mM(t);
	const [i, a] = M9();
	const s = (0, Localize)("#QuickAccess_Tab_Perf_ToggleGameSettings");
	return (
		<>
			<N
				available={!r}
				label={s}
				checked={i}
				onChange={a}
				explainer={(0, Localize)(
					"#QuickAccess_Tab_Perf_GameProfileExplainer_Description",
				)}
			/>
		</>
	);
}
export function jw(e) {
	const t = Q3();
	const r = mM(t);
	const c = _R(t);
	const p = (
		<div className={a.Heading}>
			<span className={a.Text}>
				{(0, Localize)("#QuickAccess_Tab_Perf_PerformanceSettings")}
			</span>
			<s.Information className={a.Icon} />
		</div>
	);
	return (
		<>
			<i.D0
				className={a.PerfProfileInfo}
				label={p}
				focusable
				onActivate={() =>
					pg(
						((e) => {
							const t = (0, Localize)(
								"#QuickAccess_Tab_Perf_GameProfileExplainer_Title",
							);
							const r = (0, Localize)(
								"#QuickAccess_Tab_Perf_GameProfileExplainer_Description",
							);
							const i = (0, Localize)(
								"#QuickAccess_Tab_Perf_GameProfileExplainer_Dismiss",
							);
							return (
								<u.o0
									bAlertDialog
									className={a.PerfProfileExplainerModal}
									strTitle={t}
									strDescription={r}
									strOKButtonText={i}
								/>
							);
						})(),
						window,
					)
				}
				childrenLayout="below"
				bottomSeparator="none"
				padding="none"
			>
				<div className={a.SubHeading}>
					{!r && (
						<A.z app={c} eAssetType={4} className={a.Icon} bShortDisplay />
					)}
					<div className={a.Text}>
						{r && (0, Localize)("#QuickAccess_Tab_Perf_DefaultSettings")}
						{!r &&
							LocalizeReact(
								"#QuickAccess_Tab_Perf_GameSpecificSettings",
								<span className={a.GameName}>{c?.display_name}</span>,
							)}
					</div>
				</div>
			</i.D0>
		</>
	);
}
export function qC(e) {
	const t = Q3();
	const r = mM(t);
	const i = _R(t);
	if (r) {
		return null;
	}
	const s = LocalizeReact(
		"#QuickAccess_Tab_Perf_GameProfileInfoBasic",
		<span className={a.Name}>{i?.display_name}</span>,
	);
	return <div className={a.PerfProfileInfoBasic}>{s}</div>;
}
export function PZ(e) {
	const [t, r] = xu();
	const a = t
		? (0, Localize)("#Common_Basic_View")
		: (0, Localize)("#Common_Advanced_View");
	return (
		<i.xh
			onClick={() => r(!t)}
			layout="below"
			bottomSeparator={e.bottomSeparator}
		>
			{a}
		</i.xh>
	);
}
export function DJ(e) {
	const t = (0, Localize)("#QuickAccess_Tab_Perf_ResetToDefault");
	return (
		<i.xh
			onClick={() => l.Hn.Get().ResetCurrentPerfProfileSettings()}
			layout="below"
			bottomSeparator={e.bottomSeparator}
		>
			{t}
		</i.xh>
	);
}
export function e5(e) {
	const [t, r, i] = vy();
	return (
		<N
			available={t}
			label={(0, Localize)("#QuickAccess_Tab_Perf_DynamicRefreshInSteam")}
			checked={r}
			onChange={i}
		/>
	);
}
export function zK(e) {
	return (
		<b.G
			setting="gamescope_force_composite"
			label={(0, Localize)("#QuickAccess_Tab_Perf_ForceComposite")}
			feature={7}
		/>
	);
}
export function HK(e) {
	return (
		<b.G
			feature={7}
			setting="gamescope_allow_tearing"
			icon={<s.AllowTearing />}
			label={(0, Localize)("#QuickAccess_Tab_Perf_EnableTearing")}
			explainer={(0, Localize)("#QuickAccess_Tab_Perf_EnableTearing_Explainer")}
		/>
	);
}
export function bh(e) {
	const t = Ck();
	const [r, i, a] = g7();
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
	return (
		<N
			available={r}
			label={(0, Localize)("#QuickAccess_Tab_Perf_EnableVRR")}
			description={m}
			disabled={!s}
			checked={i}
			onChange={a}
		/>
	);
}
export function BF(e) {
	return (
		<b.G
			setting="gamescope_composite_debug"
			label={(0, Localize)("#QuickAccess_Tab_Perf_EnableCompositeDebug")}
			feature={7}
		/>
	);
}
export function nK(e) {
	const [t, r, i] = Sj();
	return (
		<N
			available={t}
			label={(0, Localize)("#QuickAccess_Tab_Perf_DisableColorManagement")}
			checked={!r}
			onChange={(e) => i(!e)}
		/>
	);
}
export function fn(e) {
	const { bAdvanced = false } = e;
	const r = hb();
	const i = M_1();
	const a = Zv();
	if (!r) {
		return null;
	}
	if (!a) {
		return null;
	}
	const s = !i && bAdvanced;
	return (
		<b.G
			feature={7}
			label={(0, Localize)("#Settings_HDR_Enable")}
			setting="gamescope_hdr_enabled"
			disabled={!i}
			description={s ? (0, Localize)("#Settings_HDR_NotCapable") : undefined}
		/>
	);
}
function Fe(e) {
	const { strLabel } = e;
	const [r, a, s] = WI();
	if (r) {
		return (
			<i.y4
				label={strLabel || (0, Localize)("#Settings_HDR_Debug_HeatmapEnable")}
				checked={a}
				onChange={s}
				disabled={k.Ih.BKioskModeLocked()}
			/>
		);
	} else {
		return null;
	}
}
export function zt(e) {
	const [t, r] = zg();
	const i = Ck();
	if (i?.data?.is_hdr_output_active && t) {
		return <Fe strLabel={(0, Localize)("#Settings_HDR_Debug_Heatmap")} />;
	} else {
		return null;
	}
}
function ye() {
	const e = RP();
	const t = T_1(e);
	let r = ((e) => {
		const [t, setT] = n.useState(undefined);
		if (t !== undefined) {
			return t;
		} else {
			return e;
		}
	})(t?.deckDerivedProperties?.hdr_support);
	const [i] = VI("hdr_compat_testing");
	if (i) {
		r = 0;
	}
	switch (r) {
		case 2:
		case 4: {
			return true;
		}
		default: {
			return false;
		}
	}
}
export function PS(e) {
	const t = _9();
	const r = M_1();
	const i = ye();
	if (!r) {
		return null;
	}
	if (t) {
		const e = A_1(a.HDRBadge, a.Sheen);
		return (
			<div className={e}>{(0, Localize)("#Settings_HDR_Enabled_Badge")}</div>
		);
	}
	if (i) {
		const e = A_1(a.HDRBadge, a.HDRBadgeInactive);
		return (
			<div className={e}>{(0, Localize)("#Settings_HDR_Enabled_Badge")}</div>
		);
	}
	return null;
}
export function Ac(e) {
	const t = J9();
	const r = wy();
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
		return (
			<S.X
				feature={7}
				label={(0, Localize)("#Settings_HDRVisualization_Label")}
				rgOptions={i}
				setting="gamescope_hdr_visualization"
			/>
		);
	} else {
		return null;
	}
}
export function A2(e) {
	const t = R7();
	const [r, setR] = n.useState(false);
	const s = n.useCallback(async () => {
		if (!(await w.Bd.OptOutOfSideloadedClient({})).BSuccess()) {
			<u.KG />;
			pY("Failed to remove sideloaded steam client", t.ownerWindow ?? window);
			return;
		}
		setR(true);
		$_1({
			bSystemRestart: true,
			strCancelButtonText: (0, Localize)("#Settings_RestartLater_ButtonText"),
			ownerWindow: t.ownerWindow ?? window,
		});
	}, [t]);
	const l = n.useCallback(() => {
		pg(
			<u.o0
				strTitle="Remove sideloaded steam client"
				strDescription="Are you sure you want to remove the sideloaded steam client?"
				onOK={s}
			/>,
			t.ownerWindow ?? window,
		);
	}, [t, s]);
	if (I.TS.ON_STEAMOS) {
		return (
			<i.xh
				label="Sideloaded Steam Client"
				onClick={l}
				disabled={r}
				childrenContainerWidth="fixed"
			>
				{r ? "Restart Pending" : "Remove"}
			</i.xh>
		);
	} else {
		return null;
	}
}
export function kf(e) {
	const t = t7();
	const r = ZN((e) => e.is_refresh_rate_switching_supported);
	const i = r.isSuccess && r.data;
	if (!t || i) {
		return null;
	} else {
		return (
			<b.G
				feature={7}
				label={(0, Localize)("#QuickAccess_Tab_Perf_AppRefreshRateEnable")}
				setting="gamescope_enable_app_target_framerate"
			/>
		);
	}
}
function Ie(e) {
	const t = HR();
	const r = OV_1();
	const i = n.useCallback(
		(e) =>
			(0, Localize)("#QuickAccess_Tab_Perf_GamescopeRefreshRate_Hz", `${e}`),
		[],
	);
	if (r == null) {
		return null;
	} else {
		return (
			<E.Ax
				feature={7}
				label={(0, Localize)("#QuickAccess_Tab_Perf_GamescopeRefreshRate")}
				explainer={(0, Localize)(
					"#QuickAccess_Tab_Perf_GamescopeRefreshRate_Explainer",
				)}
				setting="gamescope_display_refresh_rate"
				showValue
				nDebounceMs={700}
				rValues={r}
				showBookendLabels
				renderValue={i}
				disabled={!t}
				valueDisabled={r[r.length - 1]}
			/>
		);
	}
}
export function k4(e) {
	const t = t7();
	const r = HR();
	const i = Y$();
	const [a] = VI("gamescope_enable_app_target_framerate");
	const [s] = VI("gamescope_disable_framelimit");
	const l = KK();
	const c = OV_1();
	const m = n.useCallback(
		(e) => {
			const t = ((e, t) => {
				if (!t || t.length == 0) {
					return;
				}
				const r = Math.max(...t);
				let n = Math.min(Math.ceil(r / e), 100);
				for (; n > 0; --n) {
					const r = e * n;
					if (t.includes(r)) {
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
			return `${r} (${(0, Localize)(
				"#QuickAccess_Tab_Perf_AppRefreshRate_Hz",
				`${t}`,
			)})`;
		},
		[c],
	);
	if (t && a && l != null) {
		if (r && s) {
			return <Ie />;
		} else {
			return (
				<E.Ax
					feature={7}
					label={(0, Localize)("#QuickAccess_Tab_Perf_AppRefreshRate")}
					explainer={
						i
							? (0, Localize)(
									"#QuickAccess_Tab_Perf_AppRefreshRate_Restricted_Body",
								)
							: (0, Localize)("#QuickAccess_Tab_Perf_AppRefreshRate_Explainer")
					}
					explainerTitle={
						i ? (
							(0, Localize)(
								"#QuickAccess_Tab_Perf_AppRefreshRate_Restricted_Title",
							)
						) : (
							<></>
						)
					}
					setting="gamescope_app_target_framerate"
					showValue
					nDebounceMs={700}
					rValues={l}
					showBookendLabels
					disabled={s || i}
					valueDisabled={l[l.length - 1]}
					renderValue={m}
				/>
			);
		}
	} else {
		return null;
	}
}
export function zl(e) {
	const t = t7();
	const [r] = VI("gamescope_enable_app_target_framerate");
	if (t && r) {
		return (
			<b.G
				feature={7}
				icon={<s.DisableFrameLimit />}
				label={(0, Localize)("#QuickAccess_Tab_Perf_DisableFrameLimit")}
				setting="gamescope_disable_framelimit"
				explainer={(0, Localize)(
					"#QuickAccess_Tab_Perf_DisableFrameLimit_Explainer",
				)}
			/>
		);
	} else {
		return null;
	}
}
export function s0(e) {
	const t = bP();
	return (
		<E.Pl
			feature={7}
			visible={t}
			label={(0, Localize)("#Settings_Display_StatusLEDBrightness")}
			setting="steamos_status_led_brightness"
			min={0}
			max={100}
			resetValue={100}
			layout="inline"
		/>
	);
}
export function ON(e) {
	if (js()) {
		return (
			<b.G
				feature={7}
				label={(0, Localize)("#Settings_Display_MuraCorrectionDisabled_Label")}
				setting="gamescope_disable_mura_correction"
			/>
		);
	} else {
		return null;
	}
}
export function Jd() {
	const { ownerWindow } = R7();
	const t = n.useCallback(async () => {
		if ((await T.MX.ReArmMuraCalibration({})).BSuccess()) {
			$_1({
				bSystemRestart: true,
				strCancelButtonText: (0, Localize)("#Settings_RestartLater_ButtonText"),
				ownerWindow: ownerWindow ?? window,
			});
		} else {
			pY(
				(0, Localize)("#Settings_Developer_MuraReArm_Error"),
				ownerWindow ?? window,
			);
		}
	}, [ownerWindow]);
	return (
		<R.E
			feature={7}
			label={(0, Localize)("#Settings_Developer_MuraReArm")}
			onClick={t}
		>
			{(0, Localize)("#Settings_Developer_SpeakerTest_Start")}
		</R.E>
	);
}
