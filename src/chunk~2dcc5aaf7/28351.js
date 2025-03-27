import { Localize } from "../../actual_src/utils/localization.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./35488.js";
import s from "./71225.js";
import c from "./57472.js";
import m, { AJ, BN, bv, KL, Vu, lm, HG, Ge, cL, pi } from "./33706.js";
import u from "./42318.js";
import { R7 } from "./11131.js";
import { $ } from "./27756.js";
import p from "./10606.js";
import { pg } from "./13869.js";
import h from "./30449.js";
import C from "./90389.js";
import _ from "./11714.js";
import { VI } from "./34792.js";
const o = s;
function B_1(e) {
	const t = AJ();
	return (
		<c.y
			params={t}
			label={Localize("#Developer_SLS_Enabled")}
			description={Localize("#Developer_SLS_Enabled_Description")}
			explainer={Localize("#Developer_SLS_Enabled_Explainer")}
		/>
	);
}
function Y(e) {
	const { eType, ...r } = e;
	const i = !AJ().bEnabled;
	let a = BN(eType);
	a.bEnabled = !i && a.bEnabled;
	return <c.y {...r} params={a} disabled={i} controlled />;
}
function S(e) {
	return (
		<Y
			eType={1}
			label={Localize("#Developer_SLS_Minidump_Enabled")}
			explainer={Localize("#Developer_SLS_Minidump_Enabled_Explainer")}
		/>
	);
}
function W(e) {
	return (
		<Y
			eType={2}
			label={Localize("#Developer_SLS_Kdump_Enabled")}
			explainer={Localize("#Developer_SLS_Kdump_Enabled_Explainer")}
		/>
	);
}
function B(e) {
	return (
		<Y
			eType={3}
			label={Localize("#Developer_SLS_Journal_Enabled")}
			explainer={Localize("#Developer_SLS_Journal_Enabled_Explainer")}
		/>
	);
}
function V(e) {
	return (
		<Y
			eType={4}
			label={Localize("#Developer_SLS_GPU_Enabled")}
			explainer={Localize("#Developer_SLS_GPU_Enabled_Explainer")}
		/>
	);
}
function I(e) {
	return (
		<Y
			eType={5}
			label={Localize("#Developer_SLS_SystemInfo_Enabled")}
			explainer={Localize("#Developer_SLS_SystemInfo_Enabled_Explainer")}
		/>
	);
}
export function w2(e) {
	if (bv()) {
		return (
			<i.G5>
				<i.lr>{Localize("#Developer_SLS_Section")}</i.lr>
				<u.tH>
					<B_1 />
					<S />
					<W />
					<V />
					<B />
					<I />
				</u.tH>
			</i.G5>
		);
	} else {
		return null;
	}
}
function M(e) {
	const { bResetOS, eResult } = e;
	let i = null;
	if (eResult === 3) {
		i = Localize("#FactoryReset_ErrorModal_NoInternet");
	} else {
		i = bResetOS
			? Localize("#FactoryReset_ErrorModal_NoInternet")
			: Localize("#FactoryReset_ErrorModal_GenericError");
	}
	return (
		<p.KG
			strTitle={Localize("#FactoryReset_ErrorModal_Title").toUpperCase()}
			strDescription={
				<span
					style={{
						whiteSpace: "pre-line",
					}}
				>
					{" "}
					{i}{" "}
				</span>
			}
			strOKButtonText={Localize("#FactoryReset_ErrorModal_Dismiss")}
			closeModal={e.closeModal}
		/>
	);
}
function T(e) {
	const { closeModal } = e;
	const r = R7();
	const [a, setA] = n.useState(true);
	const [o, setO] = n.useState(true);
	const m = n.useCallback(() => {
		C.Bd.FactoryReset({
			reset_os: a,
			reset_user_data: o,
		}).then((e) => {
			if (e.BSuccess()) {
				$({
					bSystemRestart: true,
					strCancelButtonText: Localize("#Settings_RestartLater_ButtonText"),
					ownerWindow: r.ownerWindow ?? window,
				});
			} else {
				pg(
					<M bResetOS={a} eResult={e.GetEResult()} />,
					r.ownerWindow ?? window,
				);
			}
		});
		closeModal();
	}, [r, a, o, closeModal]);
	return (
		<p.eV onCancel={closeModal}>
			<i.Y9>{Localize("#FactoryReset_RequestModal_Title")}</i.Y9>
			<i.nB>
				<i.f3>
					<i.a3>{Localize("#FactoryReset_RequestModal_Description")}</i.a3>
					<i.y4
						label={Localize("#FactoryReset_RequestModal_ResetUserData")}
						checked={a}
						controlled
						onChange={(e) => setO(true)}
						disabled
					/>
					<i.y4
						label={Localize("#FactoryReset_RequestModal_ResetOS")}
						checked={a}
						onChange={(e) => setA(e)}
						bottomSeparator="none"
					/>
				</i.f3>
				<i.wi>
					<i.CB onOK={m} onCancel={closeModal} focusButton="primary" />
				</i.wi>
			</i.nB>
		</p.eV>
	);
}
export function Ax(e) {
	const t = KL();
	const r = R7();
	const s = n.useCallback(async () => {
		pg(<T />, r.ownerWindow ?? window);
	}, [r]);
	if (t == null) {
		return null;
	}
	const c = {
		label: Localize("#Settings_System_Factory_Reset_Label"),
		explainer: Localize("#Settings_System_Factory_Reset_Explainer"),
		bottomSeparator: e.bottomSeparator,
	};
	if (t.is_running) {
		return (
			<h.hA
				{...c}
				focusable
				nProgress={t.progress ?? 0}
				rtEstimatedCompletionTime={t.rtime_estimated_completion}
				sOperationText={`${Localize(
					"#Settings_System_Factory_Reset_Preparing",
				)} ${t.progress}%`}
				margin="none"
			/>
		);
	}
	const u = t.is_restart_pending ?? false;
	return (
		<i.xh
			{...c}
			onClick={s}
			icon={
				u ? (
					<a.ExclamationPoint className={o.DestructiveActionButtonIcon} />
				) : null
			}
			disabled={u}
		>
			{Localize("#Settings_System_Factory_Reset")}
		</i.xh>
	);
}
export function n1(e) {
	const t = Vu();
	const r = lm();
	return (
		<c.G
			feature={7}
			setting="steamos_tdp_limit_enabled"
			visible={t}
			label={Localize("#QuickAccess_Tab_Perf_TDPLimitEnabled")}
			explainer={Localize("#QuickAccess_Tab_Perf_TDPLimit_Explainer")}
			icon={<a.TDPLimit />}
			bottomSeparator={r.visible ? "none" : null}
		/>
	);
}
export function BF(e) {
	const t = lm();
	return (
		<_.Lh
			setting="steamos_tdp_limit"
			info={t}
			showValue
			explainer={Localize("#QuickAccess_Tab_Perf_TDPLimit_Explainer")}
			explainerTitle={Localize("#QuickAccess_Tab_Perf_TDPLimitEnabled")}
			valueSuffix={Localize("#QuickAccess_Tab_Perf_TDPLimitUnits")}
			step={1}
			showBookendLabels
		/>
	);
}
function N(e) {
	return (
		<c.G
			feature={7}
			setting="steamos_cec_enabled"
			label={Localize("#Settings_CEC_Enabled")}
		/>
	);
}
function F(e) {
	const [t] = VI("steamos_cec_enabled");
	return (
		<c.G
			feature={7}
			setting="steamos_cec_wake_on_resume"
			label={Localize("#Settings_CEC_WakeOnResume")}
			disabled={!t}
			bottomSeparator="none"
		/>
	);
}
export function dU(e) {
	if (HG()) {
		return (
			<i.G5>
				<i.lr>{Localize("#Settings_CEC_Header")}</i.lr>
				<N />
				<F />
			</i.G5>
		);
	} else {
		return null;
	}
}
export function bu(e) {
	const t = Ge();
	const r = cL();
	return (
		<c.G
			feature={7}
			visible={t}
			disabled={r}
			setting="steamos_wifi_debug"
			label={Localize("#Settings_SteamOS_WifiDebug")}
		/>
	);
}
export function I8(e) {
	const t = pi();
	return (
		<c.G
			feature={7}
			visible={t}
			setting="steamos_wifi_force_wpa_supplicant"
			label={Localize("#Settings_SteamOS_ForceWPASupplicant")}
			description={Localize("#Settings_SteamOS_ForceWPASupplicant_Desc")}
		/>
	);
}
