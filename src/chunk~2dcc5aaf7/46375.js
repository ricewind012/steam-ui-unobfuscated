import { Localize } from "../../actual_src/utils/localization.js";
import {
	LocalizeTimeSince,
	ETimeSinceSuffix,
} from "../../actual_src/utils/localization/datetime.js";
import n from "./63696.js";
import i from "./64608.js";
import a from "./35488.js";
import s from "./85243.js";
import o from "./19999.js";
import c, { Qi, Kh, AF, Mi } from "./27710.js";
import m from "./30449.js";
import u from "./10606.js";
import d, { pg } from "./13869.js";
import A, { LC } from "./46422.js";
import { pw } from "./31319.js";
import { Nx } from "./71033.js";
import C from "./61657.js";
import _ from "./69164.js";
import f from "./56970.js";
import { Bx } from "./55489.js";
function y(e) {
	const { sLabel, fnCheck } = e;
	return (
		<i.xh label={sLabel} onClick={fnCheck}>
			{Localize("#Settings_Updates_Invalid")}
		</i.xh>
	);
}
function S(e) {
	const { sLabel, fnCheck } = e;
	const a = Qi();
	const s = a != null && a < 4;
	const o = s
		? Localize("#Settings_Updates_NoUpdatesAvailable")
		: Localize("#Settings_Updates_CheckForUpdates");
	return (
		<i.xh
			label={sLabel}
			onClick={fnCheck}
			disabled={s}
			childrenContainerWidth="fixed"
		>
			{o}
		</i.xh>
	);
}
function w(e) {
	const { sLabel } = e;
	return (
		<m.hA
			indeterminate
			label={sLabel}
			sOperationText={Localize("#Settings_Updates_Checking")}
			margin="none"
			nProgress={null}
			nTransitionSec={0.3}
		/>
	);
}
function B(e) {
	const { sLabel, fnApply } = e;
	return (
		<i.xh
			label={sLabel}
			onClick={fnApply}
			icon={<a.FieldYellowExclamation />}
			childrenContainerWidth="fixed"
		>
			{Localize("#Settings_Updates_UpdateApply")}
		</i.xh>
	);
}
function v(e) {
	const { sLabel } = e;
	const r = Kh();
	return (
		<>
			<m.hA
				indeterminate
				label={sLabel}
				sOperationText={Localize("#Settings_Updates_UpdateApplying")}
				margin="none"
				nProgress={r?.stage_progress * 100}
				rtEstimatedCompletionTime={r.rtime_estimated_completion}
				nTransitionSec={0.3}
			/>
		</>
	);
}
export function g5(e) {
	const { bHideWhenUnavailable = false } = e;
	const [r, i, a] = AF();
	const s = {
		0: y,
		2: S,
		3: w,
		4: B,
		5: v,
		6: null,
		7: null,
		8: null,
	};
	const o = n.useCallback(async () => {
		const e = await i();
		if (e.result != 1) {
			await pg(
				E({
					eResult: e.result,
				}),
				window,
			);
		}
		return e;
	}, [i]);
	const m = n.useCallback(async () => {
		const e = await a();
		if (e.result != 1) {
			await pg(
				E({
					eResult: e.result,
				}),
				window,
			);
		}
		return e;
	}, [a]);
	if (bHideWhenUnavailable) {
		switch (r) {
			case 0:
			case 2: {
				return null;
			}
		}
	}
	const u = Localize("#Settings_DockUpdate_Label");
	const SR = s[r];
	return <SR sLabel={u} fnCheck={o} fnApply={m} />;
}
function E(e) {
	let t = null;
	e.eResult;
	t = Localize("#Settings_DockUpdate_Error_Generic");
	return (
		<u.KG
			strTitle={Localize("#Settings_DockUpdate_Error_Title").toUpperCase()}
			strDescription={t}
			strOKButtonText={Localize("#Settings_Updates_UpdateErrorOK")}
			closeModal={e.closeModal}
		/>
	);
}
function M(e) {
	const t = Kh();
	const r = Mi();
	const i =
		r > 0
			? LocalizeTimeSince(r, {
					eSuffix: ETimeSinceSuffix.Remaining,
					bHighGranularity: true,
				})
			: null;
	LC();
	pw();
	Nx();
	Bx(s.I5.Opaque, "SystemDockUpdateApplyTakeoverContent");
	let d = n.useCallback((e) => {
		switch (e.detail.button) {
			case C.pR.STEAM_GUIDE:
			case C.pR.STEAM_QUICK_MENU: {
				e.preventDefault();
				e.stopPropagation();
				return;
			}
		}
	}, []);
	return (
		<u.EN active>
			<div className={o.SystemDockUpdateApplyTakeover}>
				<_.Z
					className={o.Container}
					focusable
					autoFocus
					noFocusRing
					onButtonDown={d}
					onButtonUp={d}
				>
					<div className={o.Image}>
						<a.DeckDockFront />
					</div>
					<div className={o.UnplugWarning}>
						{" "}
						{Localize("#Settings_DockUpdate_UnplugWarning")}{" "}
					</div>
					<div className={o.ProgressContainer}>
						<m.z2 nProgress={t?.stage_progress * 100} />
						<div className={o.TimeRemaining}>{i}</div>
					</div>
				</_.Z>
			</div>
		</u.EN>
	);
}
async function T() {
	const e = await c.Rk.Get().ApplyUpdate();
	if (e.result != 1) {
		await pg(
			E({
				eResult: e.result,
			}),
			window,
		);
	}
	return e;
}
export function TE(e) {
	const [t] = AF();
	if (t != 5) {
		return null;
	} else {
		return <M />;
	}
}
function K(e) {
	let t = Localize("#SteamDock_UnsupportedFirmwareAreYouSureModal_Description");
	return (
		<u.o0
			strTitle={Localize(
				"#SteamDock_UnsupportedFirmwareAreYouSureModal_Title",
			).toUpperCase()}
			strDescription={t}
			strOKButtonText={Localize(
				"#SteamDock_UnsupportedFirmwareAreYouSureModal_OK",
			)}
			onOK={() => T()}
			strCancelButtonText={Localize(
				"#SteamDock_UnsupportedFirmwareAreYouSureModal_Cancel",
			)}
			onCancel={() => c.Rk.Get().DisarmSafetyNet()}
			closeModal={e.closeModal}
		/>
	);
}
function D(e) {
	let t = Localize("#SteamDock_UnsupportedFirmwareModal_Description");
	return (
		<u.o0
			strTitle={Localize(
				"#SteamDock_UnsupportedFirmwareModal_Title",
			).toUpperCase()}
			strDescription={t}
			strOKButtonText={Localize("#SteamDock_UnsupportedFirmwareModal_OK")}
			onOK={() => T()}
			strCancelButtonText={Localize(
				"#SteamDock_UnsupportedFirmwareModal_Cancel",
			)}
			onCancel={() => pg(<K />, window)}
			closeModal={e.closeModal}
		/>
	);
}
export function G3() {
	if (f.yE.IsLockScreenActive()) {
		setTimeout(() => G3(), 1000);
	} else {
		pg(<D />, window);
	}
}
export function Xo() {
	const e = Kh();
	const t = e?.version_current;
	if (t) {
		return <i.T8 name={Localize("#Settings_System_DockFWVersion")} value={t} />;
	} else {
		return null;
	}
}
