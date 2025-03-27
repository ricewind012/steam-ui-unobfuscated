import { Localize, Hq } from "../../actual_src/utils/localization.js";
import { ETimeSinceSuffix } from "../../actual_src/utils/localization/datetime.js";
import n from "./63696.js";
import i from "./64608.js";
import s from "./35488.js";
import o, { zx, MK, IV, $y, yw, rw } from "./34819.js";
import { uN, gc } from "./52451.js";
import m from "./10606.js";
import u from "./35194.js";
import d, { pg } from "./13869.js";
import A, { $ } from "./27756.js";
import { hb } from "./24496.js";
import g from "./72476.js";
import { R7 } from "./11131.js";
import C from "./57472.js";
import { Zv, _9 } from "./61518.js";
import f from "./37086.js";
import b from "./13897.js";
import y from "./91957.js";
import S from "./2306.js";
import w from "./1470.js";
import B, { br } from "./18869.js";
const v = 1000;
export function jJ(e) {
	const t = Zv();
	const [r, i, l, m] = zx();
	const [u, d] = uN(i, m, v);
	const A = _9();
	if (r) {
		return (
			<y.V
				feature={0}
				label={e.iconOnly || Localize("#Settings_Display_Brightness")}
				icon={<s.Brightness />}
				padding={e.padding}
				disabled={t}
				value={u}
				onChange={d}
				min={0}
				max={1}
				step={0}
				resetValue={A ? l : undefined}
				resetValueAppearance={{
					trackForegroundColor: "#b0deff",
					side: "right",
				}}
			/>
		);
	} else {
		return null;
	}
}
export function qg() {
	const e = Localize("#Settings_Display_AdaptiveBrightness");
	const [t, r] = MK();
	return (
		<S.C
			feature={7}
			disabled={!t}
			label={e}
			checked={t && r}
			onChange={o.mG.Get().SetDisplayAdaptiveBrightnessEnabled}
		/>
	);
}
function M(e) {
	const t = [];
	const r = Array.from(new Set(e));
	r.sort((e, t) => e - t);
	r.forEach((e) => {
		t.push({
			data: e,
			label:
				e == 0
					? Localize("#Settings_System_IdleDisabled")
					: (0, Hq)(e, {
							eSuffix: ETimeSinceSuffix.None,
							bHighGranularity: true,
						}),
		});
	});
	return t;
}
export function QY(e) {
	const [t, r] = IV(e.bOnAC);
	const i = Math.round(t);
	return (
		<b.B
			feature={7}
			label={
				e.bOnAC
					? Localize("#Settings_System_BacklightDimTimePlugged_Label")
					: Localize("#Settings_System_BacklightDimTimeNotPlugged_Label")
			}
			selectedOption={i}
			onChange={(e) => r(e.data)}
			rgOptions={M([0, 60, 300, 600, 900, 1200, i])}
		/>
	);
}
export function Xk(e) {
	const [t, r] = $y(e.bOnAC);
	const i = Math.round(t);
	return (
		<b.B
			feature={7}
			label={
				e.bOnAC
					? Localize("#Settings_System_SuspendTimePlugged_Label")
					: Localize("#Settings_System_SuspendTimeNotPlugged_Label")
			}
			selectedOption={i}
			onChange={(e) => r(e.data)}
			rgOptions={M([0, 300, 600, 900, 1200, i])}
		/>
	);
}
async function k(e) {
	await u.o.TriggerTestOOBE(e);
}
function D() {
	pg(
		<m.o0
			strTitle="Are you sure you want trigger a test OOBE?"
			strDescription="Confirm will restart your client/device"
			onOK={() => {
				pg(
					<m.o0
						strTitle="Do a clean OOBE?"
						strDescription="WARNING: This will forget all wifi networks and logout all users"
						bDestructiveWarning
						strOKButtonText="Clean"
						onOK={() => {
							k(true);
						}}
						strCancelButtonText="Preserve Users/Wifi"
						onCancel={() => {
							k(false);
						}}
					/>,
					window,
					{
						strTitle: "Error",
					},
				);
			}}
		/>,
		window,
		{
			strTitle: "Error",
		},
	);
}
export function Lf() {
	const e = gc(u.o.bTestOOBESetupInProgress);
	const t = gc(u.o.eRebootToFactoryTestImageResult);
	let r = "Status Unknown";
	r = e
		? "In progress"
		: t == null
			? "Restart"
			: t == 1
				? "Error: should've auto rebooted"
				: "Failed, try again?";
	return (
		<w.E feature={7} disabled={e} onClick={D} label="Restart into OOBE test">
			{r}
		</w.E>
	);
}
export function MF() {
	const [e, t] = yw();
	const r = R7();
	const i = n.useCallback(
		(e) => {
			t(e);
			$({
				bSystemRestart: true,
				ownerWindow: r.ownerWindow,
			});
		},
		[t, r.ownerWindow],
	);
	return (
		<S.C
			feature={7}
			label={Localize("#Settings_Developer_WifiPowersave")}
			description={Localize("#Settings_Developer_WifiPowersave_Desc")}
			checked={e}
			onChange={i}
		/>
	);
}
export function n8(e) {
	const t = br();
	const r = e.bForceFormat ?? false;
	const i = e.strLabel ?? Localize("#Settings_System_FormatSD_Label");
	const s = hb();
	return (
		<>
			<f.oN
				feature={7}
				label={i}
				onClick={() => t.Settings("Storage")}
				disabled={!r && !s}
				bottomSeparator={e.bottomSeparator}
			>
				{Localize("#Settings_System_FormatSD_Btn_Format")}
			</f.oN>
		</>
	);
}
export function J1(e) {
	const [t, r, s] = rw();
	if (t) {
		return (
			<i.RF
				label={Localize("#Settings_System_FanControlToggle")}
				checked={r}
				onChange={s}
			/>
		);
	} else {
		return null;
	}
}
export function Yo() {
	if (g.TS.ON_DECK) {
		return null;
	} else {
		return (
			<C.G
				feature={7}
				setting="steam_cef_gpu_blocklist_disabled"
				label={Localize("#Settings_CEFDisableGPUBlocklist")}
				bRequiresRestart
			/>
		);
	}
}
